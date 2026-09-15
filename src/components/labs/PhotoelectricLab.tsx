import React, { useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  drawVolumetricBeam,
  drawMetallicCylinder,
  drawAnalogMeterGauge,
  drawGlowingParticle,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface PhotoelectricParams {
  metalIndex: number; // 0 to 6
  wavelengthNm: number; // 180 to 750 nm
  intensity: number; // 0 to 100 %
  biasVoltage: number; // -5.0 to +5.0 V
}

interface PhotoelectricState {
  photocurrentUA: number;
}

interface MetalConfig {
  id: string;
  nameEn: string;
  nameAr: string;
  symbol: string;
  workFunctionEV: number;
  thresholdWavelengthNm: number;
  thresholdFreq14Hz: number;
  colorHex: string;
}

const METALS: MetalConfig[] = [
  {
    id: 'cs',
    nameEn: 'Cesium (Cs)',
    nameAr: 'السيزيوم (Cs)',
    symbol: 'Cs',
    workFunctionEV: 2.14,
    thresholdWavelengthNm: 579.4,
    thresholdFreq14Hz: 5.17,
    colorHex: '#eab308',
  },
  {
    id: 'k',
    nameEn: 'Potassium (K)',
    nameAr: 'البوتاسيوم (K)',
    symbol: 'K',
    workFunctionEV: 2.30,
    thresholdWavelengthNm: 539.1,
    thresholdFreq14Hz: 5.56,
    colorHex: '#c084fc',
  },
  {
    id: 'na',
    nameEn: 'Sodium (Na)',
    nameAr: 'الصوديوم (Na)',
    symbol: 'Na',
    workFunctionEV: 2.75,
    thresholdWavelengthNm: 450.9,
    thresholdFreq14Hz: 6.65,
    colorHex: '#fef08a',
  },
  {
    id: 'ca',
    nameEn: 'Calcium (Ca)',
    nameAr: 'الكالسيوم (Ca)',
    symbol: 'Ca',
    workFunctionEV: 2.87,
    thresholdWavelengthNm: 432.0,
    thresholdFreq14Hz: 6.94,
    colorHex: '#e2e8f0',
  },
  {
    id: 'zn',
    nameEn: 'Zinc (Zn)',
    nameAr: 'الخارصين (Zn)',
    symbol: 'Zn',
    workFunctionEV: 4.31,
    thresholdWavelengthNm: 287.7,
    thresholdFreq14Hz: 10.42,
    colorHex: '#94a3b8',
  },
  {
    id: 'cu',
    nameEn: 'Copper (Cu)',
    nameAr: 'النحاس (Cu)',
    symbol: 'Cu',
    workFunctionEV: 4.70,
    thresholdWavelengthNm: 263.8,
    thresholdFreq14Hz: 11.36,
    colorHex: '#f97316',
  },
  {
    id: 'pt',
    nameEn: 'Platinum (Pt)',
    nameAr: 'البلاتين (Pt)',
    symbol: 'Pt',
    workFunctionEV: 6.35,
    thresholdWavelengthNm: 195.3,
    thresholdFreq14Hz: 15.35,
    colorHex: '#cbd5e1',
  },
];

// Planck's constant & speed of light
const C_M_S = 2.99792458e8; // m/s
const HC_EV_NM = 1239.84193; // eV·nm
const M_ELECTRON_KG = 9.1093837e-31; // kg
const E_CHARGE_C = 1.602176634e-19; // C

/**
 * Calculates RGB and CSS color from wavelength in nanometers (180 to 750 nm)
 */
function wavelengthToColor(wavelength: number): { hex: string; rgba: string } {
  let r = 0;
  let g = 0;
  let b = 0;

  if (wavelength < 380) {
    // Ultraviolet
    r = 0.6;
    g = 0.1;
    b = 0.95;
  } else if (wavelength >= 380 && wavelength < 440) {
    r = -(wavelength - 440) / (440 - 380);
    g = 0.0;
    b = 1.0;
  } else if (wavelength >= 440 && wavelength < 490) {
    r = 0.0;
    g = (wavelength - 440) / (490 - 440);
    b = 1.0;
  } else if (wavelength >= 490 && wavelength < 510) {
    r = 0.0;
    g = 1.0;
    b = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    r = (wavelength - 510) / (580 - 510);
    g = 1.0;
    b = 0.0;
  } else if (wavelength >= 580 && wavelength < 645) {
    r = 1.0;
    g = -(wavelength - 645) / (645 - 580);
    b = 0.0;
  } else if (wavelength >= 645 && wavelength <= 750) {
    r = 1.0;
    g = 0.0;
    b = 0.0;
  } else {
    // Infrared
    r = 0.6;
    g = 0.0;
    b = 0.0;
  }

  let factor = 1.0;
  if (wavelength >= 380 && wavelength < 420) {
    factor = 0.3 + (0.7 * (wavelength - 380)) / (420 - 380);
  } else if (wavelength >= 700 && wavelength <= 750) {
    factor = 0.3 + (0.7 * (750 - wavelength)) / (750 - 700);
  }

  const red = Math.round(r * factor * 255);
  const green = Math.round(g * factor * 255);
  const blue = Math.round(b * factor * 255);

  const hex = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
  const rgba = `rgba(${red}, ${green}, ${blue}, 0.85)`;

  return { hex, rgba };
}

interface ElectronParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  initialKeEv: number;
  active: boolean;
  alpha: number;
}

interface PhotonWavePacket {
  x: number;
  y: number;
  speed: number;
  active: boolean;
}

export const PhotoelectricLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const simStateRef = useRef<{
    electrons: ElectronParticle[];
    photons: PhotonWavePacket[];
    lastSpawnTime: number;
    sparkAnodeAlpha: number;
  }>({
    electrons: [],
    photons: [],
    lastSpawnTime: 0,
    sparkAnodeAlpha: 0,
  });

  const definition: LabDefinition<PhotoelectricParams, PhotoelectricState> = {
    id: 'photoelectric-quantum',
    subject: 'physics',
    chapterRef: 'Ch. 5: Dual Nature of Wave & Particle',
    titleEn: 'Photoelectric Effect & Quantum Emission Laboratory',
    titleAr: 'مختبر الظاهرة الكهروضوئية والانبعاث الكمي لآينشتاين',
    subtitleEn: 'Explore photon energy, metal work functions, stopping potential, and Millikan linear slope',
    subtitleAr: 'استكشاف طاقة الفوتونات، دالة الشغل، جهد الإيقاف، وحساب ثابت بلانك بطريقة ميليكان',
    taglineEn: 'Einstein Nobel Prize Experiment (1921)',
    taglineAr: 'تجربة آينشتاين لجائزة نوبل في الفيزياء (١٩٢١)',
    objectives: [
      {
        id: 'obj-einstein',
        textEn: "Verify Einstein's photoelectric equation: KE_max = hν - Φ = eV_0",
        textAr: 'التحقق من معادلة آينشتاين الكهروضوئية: طاقة الحركة العظمى = hν - Φ = eV₀',
      },
      {
        id: 'obj-threshold',
        textEn: 'Discover that photoelectric emission requires photon energy E ≥ work function Φ (ν ≥ ν_0)',
        textAr: 'إثبات أن انبعاث الإلكترونات يشترط أن تكون طاقة الفوتون الساقط أكبر من أو تساوي دالة الشغل للمعدن',
      },
      {
        id: 'obj-planck',
        textEn: "Determine Planck's constant (h) experimentally from the linear slope of V_0 vs frequency ν",
        textAr: 'التعيين العملي لثابت بلانك (h) من ميل الخط المستقيم لمنحنى جهد الإيقاف مقابل التردد',
      },
      {
        id: 'obj-intensity',
        textEn: 'Distinguish quantum photon intensity (rate of photoelectrons) from photon energy (kinetic energy)',
        textAr: 'التمييز بين شدة الضوء (عدد الإلكترونات المتحررة والتيار) وتردد الضوء (طاقة حركة الإلكترونات)',
      },
    ],
    defaultParams: {
      metalIndex: 0,
      wavelengthNm: 420,
      intensity: 70,
      biasVoltage: 0.0,
    },
    paramSchema: {
      metalIndex: {
        key: 'metalIndex',
        type: 'select',
        defaultValue: 0,
        options: METALS.map((m, idx) => ({
          value: idx,
          labelEn: `${m.nameEn} (Φ = ${m.workFunctionEV} eV)`,
          labelAr: `${m.nameAr} (Φ = ${m.workFunctionEV} إلكترون فولت)`,
        })),
        labelEn: 'Cathode Metal',
        labelAr: 'معدن المهبط (الكاثود)',
        category: 'primary',
      },
      wavelengthNm: {
        key: 'wavelengthNm',
        type: 'number',
        defaultValue: 420,
        min: 180,
        max: 750,
        step: 5,
        unit: 'nm',
        labelEn: 'Light Wavelength (λ)',
        labelAr: 'الطول الموجي للضوء الساقط (λ)',
        category: 'primary',
      },
      intensity: {
        key: 'intensity',
        type: 'number',
        defaultValue: 70,
        min: 0,
        max: 100,
        step: 5,
        unit: '%',
        labelEn: 'Light Beam Intensity',
        labelAr: 'شدة الإضاءة (معدل الفوتونات)',
        category: 'secondary',
      },
      biasVoltage: {
        key: 'biasVoltage',
        type: 'number',
        defaultValue: 0.0,
        min: -5.0,
        max: 5.0,
        step: 0.05,
        unit: 'V',
        labelEn: 'Tube Bias Voltage (V)',
        labelAr: 'فرق الجهد بين اللوحين (V)',
        category: 'secondary',
      },
    },
    presets: [
      {
        id: 'preset-cesium-threshold',
        nameEn: 'Cesium at Visible Threshold (Yellow λ = 575 nm)',
        nameAr: 'السيزيوم عند التردد الحرج (ضوء أصفر 575 نانومتر)',
        descriptionEn: 'Cesium has the lowest work function (2.14 eV) and emits with visible light',
        descriptionAr: 'السيزيوم يمتلك أقل دالة شغل (2.14 eV) وينبعث منه إلكترونات بالضوء المرئي',
        params: {
          metalIndex: 0,
          wavelengthNm: 575,
          intensity: 80,
          biasVoltage: 0.0,
        },
      },
      {
        id: 'preset-zinc-uv',
        nameEn: 'Zinc under UV Radiation (λ = 240 nm)',
        nameAr: 'الخارصين تحت الأشعة فوق البنفسجية (240 نانومتر)',
        descriptionEn: 'Zinc requires ultraviolet radiation (Φ = 4.31 eV, λ_0 = 288 nm) to emit electrons',
        descriptionAr: 'الخارصين يتطلب أشعة فوق بنفسجية لحدوث الانبعاث الكهروضوئي',
        params: {
          metalIndex: 4,
          wavelengthNm: 240,
          intensity: 85,
          biasVoltage: 0.0,
        },
      },
      {
        id: 'preset-stopping-millikan',
        nameEn: 'Millikan Stopping Potential Balance (V = -V_0)',
        nameAr: 'تحديد جهد الإيقاف بطريقة ميليكان (V = -V₀)',
        descriptionEn: 'Apply retarding bias equal to stopping potential to extinguish photocurrent',
        descriptionAr: 'تطبيق جهد عكسي كافٍ لمنع وصول أسرع الإلكترونات إلى المصعد وانعدام التيار',
        params: {
          metalIndex: 2,
          wavelengthNm: 350,
          intensity: 80,
          biasVoltage: -0.79,
        },
      },
    ],
    keyFormulas: [
      {
        id: 'einstein-eq',
        tex: 'E_{\\text{photon}} = h\\nu = \\frac{hc}{\\lambda} = \\Phi + \\text{KE}_{\\max}',
        labelEn: "Einstein's Photoelectric Equation",
        labelAr: 'معادلة آينشتاين للظاهرة الكهروضوئية',
      },
      {
        id: 'stopping-potential',
        tex: 'eV_0 = \\text{KE}_{\\max} = h\\nu - \\Phi \\implies V_0 = \\frac{h}{e}\\nu - \\frac{\\Phi}{e}',
        labelEn: 'Stopping Potential Linear Relation',
        labelAr: 'علاقة جهد الإيقاف بتردد الضوء الساقط',
      },
      {
        id: 'max-velocity',
        tex: 'v_{\\max} = \\sqrt{\\frac{2\\,\\text{KE}_{\\max}}{m_e}}',
        labelEn: 'Maximum Photoelectron Velocity',
        labelAr: 'أقصى سرعة للإلكترونات المنبعثة',
      },
    ],
    poePrompts: [
      {
        id: 'poe-intensity-ke',
        titleEn: 'Wave vs Quantum: Intensity and Kinetic Energy',
        titleAr: 'النظرية الموجية مقابل الكم: شدة الضوء وطاقة الحركة',
        scenarioEn:
          'Blue light (λ = 420 nm) shines on a Sodium surface (Φ = 2.75 eV), ejecting electrons with maximum kinetic energy KE_max. If the light intensity is doubled from 40% to 80% without changing the wavelength, what will happen to KE_max?',
        scenarioAr:
          'يسقط ضوء أزرق (λ = 420 nm) على سطح صوديوم (Φ = 2.75 eV) فتنبعث إلكترونات بأقصى طاقة حركة KE_max. إذا تمت مضاعفة شدة الإضاءة من 40% إلى 80% مع ثبات الطول الموجي، فماذا يحدث لأقصى طاقة حركة؟',
        questionEn: 'How will KE_max change upon doubling light intensity?',
        questionAr: 'كيف تتغير أقصى طاقة حركة للإلكترونات المنبعثة عند مضاعفة شدة الضوء؟',
        optionsEn: [
          'KE_max remains unchanged (only photocurrent doubles)',
          'KE_max will double',
          'KE_max will quadruple (proportional to amplitude squared)',
          'KE_max will decrease due to electron-electron repulsion',
        ],
        optionsAr: [
          'تظل طاقة الحركة العظمى ثابتة تماماً (ويتضاعف فقط شدة التيار الكهروضوئي)',
          'تتضاعف طاقة الحركة العظمى مرتين',
          'تزداد طاقة الحركة إلى أربعة أمثالها (لتناسبها مع مربع السعة الموجية)',
          'تقل طاقة الحركة نتيجة تنافر الإلكترونات المنبعثة',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          "According to Einstein's quantum theory, light consists of photons each carrying energy E = hν. Increasing intensity increases the number of photons per second, thus ejecting more electrons per second (doubling the photocurrent). However, each ejected electron absorbs only ONE photon, so its maximum kinetic energy KE_max = hν - Φ depends strictly on frequency and is completely independent of light intensity.",
        scientificExplanationAr:
          'وفقاً لفيزياء الكم لآينشتاين، يتكون الضوء من كمات من الطاقة (فوتونات) طاقة كل منها E = hν. زيادة شدة الضوء تعني زيادة عدد الفوتونات الساقطة في الثانية، فيتحرر عدد أكبر من الإلكترونات في الثانية (يتضاعف التيار الكهروضوئي). ولكن كل إلكترون يمتص فوتوناً واحداً فقط، وبالتالي فإن أقصى طاقة حركة KE_max = hν - Φ تعتمد فقط على تردد الضوء ودالة الشغل ولا تتأثر مطلقاً بشدة الإضاءة.',
      },
      {
        id: 'poe-threshold-red',
        titleEn: 'Sub-Threshold Illumination: Red Light on Zinc',
        titleAr: 'سقوط ضوء دون التردد الحرج: ضوء أحمر ساطع على خارصين',
        scenarioEn:
          'Extremely bright red laser light (λ = 650 nm, intensity 100%) is directed onto a Zinc plate (work function Φ = 4.31 eV). Will photoelectrons be emitted if exposure continues for several hours?',
        scenarioAr:
          'سقط شعاع ليزر أحمر فائق الشدة (λ = 650 nm، بشدة 100%) على لوح من الخارصين (دالة الشغل له Φ = 4.31 eV). هل تنبعث إلكترونات كهروضوئية إذا استمر التعريض لعدة ساعات؟',
        questionEn: 'Will photoelectrons be emitted from the Zinc plate?',
        questionAr: 'هل تنبعث أي إلكترونات كهروضوئية من لوح الخارصين؟',
        optionsEn: [
          'No photoelectrons will ever be emitted, regardless of intensity or exposure time',
          'Yes, electrons will emit after accumulating energy over time',
          'Yes, the high intensity provides enough power to dislodge electrons',
          'Yes, but only with very low kinetic energy',
        ],
        optionsAr: [
          'لن تنبعث أي إلكترونات مطلقاً، مهما بلغت شدة الإضاءة أو طال زمن التعريض',
          'نعم، ستنبعث إلكترونات بعد فترة تراكم للطاقة بمرور الوقت',
          'نعم، لأن الشدة العالية توفر القدرة الكافية لتحرير الإلكترونات',
          'نعم، ولكنها ستنبعث بطاقة حركة ضئيلة جداً',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'For red light of 650 nm, the photon energy is E = 1240 / 650 = 1.91 eV. Because E < Φ (1.91 eV < 4.31 eV), a single photon does not have sufficient energy to liberate an electron. Because the interaction is a 1-to-1 photon-electron collision, increasing intensity simply delivers more sub-threshold photons, none of which can liberate an electron. Classical energy accumulation does not occur.',
        scientificExplanationAr:
          'طاقة فوتون الضوء الأحمر ذي الطول الموجي 650 نانومتر هي E = 1240 / 650 = 1.91 إلكترون فولت. وحيث إن طاقة الفوتون أقل من دالة الشغل (1.91 < 4.31 eV)، فإن فوتوناً واحداً لا يمتلك الطاقة الكافية لانتزاع إلكترون. وحيث إن التفاعل تصادم فردي (فوتون واحد مع إلكترون واحد لحظياً)، فإن زيادة الشدة لا تفعل سوى توفير المزيد من الفوتونات العاجزة. لا يحدث تراكم كلاسيكي للطاقة.',
      },
    ],
    notebookConfig: {
      xLabelEn: 'Incident Light Frequency (ν)',
      xLabelAr: 'تردد الضوء الساقط (ν)',
      xUnit: '×10¹⁴ Hz',
      yLabelEn: 'Stopping Potential (V₀)',
      yLabelAr: 'جهد الإيقاف النظري (V₀)',
      yUnit: 'V',
      recommendedPointsCount: 5,
    },
    initialState: {
      photocurrentUA: 0.0,
    },
  };

  const lab = useVirtualLab({
    definition,
    onStep: (dt) => {
      const { metalIndex, wavelengthNm, intensity, biasVoltage } = lab.params;
      const metal = METALS[metalIndex] ?? METALS[0];

      const photonEnergyEV = HC_EV_NM / wavelengthNm;
      const workFunctionEV = metal.workFunctionEV;
      const isAboveThreshold = photonEnergyEV >= workFunctionEV;
      const keMaxEV = isAboveThreshold ? photonEnergyEV - workFunctionEV : 0;
      const stoppingPotentialV = keMaxEV;

      let currentUA = 0.0;
      if (isAboveThreshold && intensity > 0) {
        const saturationUA = (intensity / 100) * 150.0;
        if (biasVoltage <= -stoppingPotentialV) {
          currentUA = 0.0;
        } else if (biasVoltage < 0) {
          const ratio = (biasVoltage + stoppingPotentialV) / (stoppingPotentialV || 0.001);
          currentUA = saturationUA * Math.pow(Math.max(0, Math.min(1, ratio)), 1.5);
        } else {
          currentUA = saturationUA * (1.0 - 0.08 * Math.exp(-biasVoltage / 0.8));
        }
      }

      const s = simStateRef.current;
      const now = performance.now();

      if (intensity > 0 && now - s.lastSpawnTime > Math.max(30, 200 - intensity * 1.8)) {
        s.lastSpawnTime = now;
        s.photons.push({
          x: 40 + Math.random() * 20,
          y: 40 + Math.random() * 30,
          speed: 280 + Math.random() * 40,
          active: true,
        });

        if (isAboveThreshold && currentUA > 0) {
          const spawnCount = Math.ceil((intensity / 100) * 3);
          for (let k = 0; k < spawnCount; k++) {
            const frac = Math.sqrt(Math.random());
            const eKe = keMaxEV * frac;
            const vPhysical = Math.sqrt((2 * eKe * E_CHARGE_C) / M_ELECTRON_KG);
            const vSimScale = Math.min(260, Math.max(40, (vPhysical / 1e6) * 120));

            const theta = (Math.random() - 0.5) * 0.9;
            s.electrons.push({
              x: 160,
              y: 110 + (Math.random() - 0.5) * 80,
              vx: Math.cos(theta) * vSimScale,
              vy: Math.sin(theta) * vSimScale * 0.6,
              initialKeEv: eKe,
              active: true,
              alpha: 1.0,
            });
          }
        }
      }

      for (const p of s.photons) {
        p.x += p.speed * dt;
        p.y += p.speed * 0.6 * dt;
        if (p.x >= 155 || p.y >= 210) {
          p.active = false;
        }
      }
      s.photons = s.photons.filter((p) => p.active);

      const anodeX = 420;
      const cathodeX = 160;
      const gapWidth = anodeX - cathodeX;
      const fieldAccel = (biasVoltage / gapWidth) * 350.0;

      for (const e of s.electrons) {
        e.vx += fieldAccel * dt;
        e.x += e.vx * dt;
        e.y += e.vy * dt;

        if (e.x >= anodeX) {
          e.active = false;
          s.sparkAnodeAlpha = 1.0;
        } else if (e.x < cathodeX - 10 || e.y < 50 || e.y > 210) {
          e.active = false;
        }
      }
      s.electrons = s.electrons.filter((e) => e.active);

      if (s.sparkAnodeAlpha > 0) {
        s.sparkAnodeAlpha = Math.max(0, s.sparkAnodeAlpha - dt * 4);
      }
    },
  });

  const { params } = lab;
  const currentMetal = METALS[params.metalIndex] ?? METALS[0];

  const photonEnergyEV = HC_EV_NM / params.wavelengthNm;
  const frequencyHz = C_M_S / (params.wavelengthNm * 1e-9);
  const frequency14Hz = frequencyHz / 1e14;
  const workFunctionEV = currentMetal.workFunctionEV;
  const isEmission = photonEnergyEV >= workFunctionEV;
  const keMaxEV = isEmission ? photonEnergyEV - workFunctionEV : 0;
  const keMaxJoules = keMaxEV * E_CHARGE_C;
  const maxVelocityMS = Math.sqrt((2 * keMaxJoules) / M_ELECTRON_KG);
  const stoppingPotentialV = keMaxEV;

  let measuredCurrentUA = 0.0;
  if (isEmission && params.intensity > 0) {
    const satUA = (params.intensity / 100) * 150.0;
    if (params.biasVoltage <= -stoppingPotentialV) {
      measuredCurrentUA = 0.0;
    } else if (params.biasVoltage < 0) {
      const r = (params.biasVoltage + stoppingPotentialV) / (stoppingPotentialV || 0.001);
      measuredCurrentUA = satUA * Math.pow(Math.max(0, Math.min(1, r)), 1.5);
    } else {
      measuredCurrentUA = satUA * (1.0 - 0.08 * Math.exp(-params.biasVoltage / 0.8));
    }
  }

  const isStopped = isEmission && params.biasVoltage <= -stoppingPotentialV;
  const lightColor = wavelengthToColor(params.wavelengthNm);

  const dmmReading: DMMReading = {
    voltageDC: params.biasVoltage,
    voltageAC: 0.0,
    currentDC: measuredCurrentUA * 1e-6,
    resistance: measuredCurrentUA > 0.1 ? Math.abs(params.biasVoltage) / (measuredCurrentUA * 1e-6) : 9999999,
    continuityBeep: false,
  };

  const telemetry: LabTelemetryMetric[] = [
    {
      id: 'photon-energy',
      labelEn: 'Photon Energy (E)',
      labelAr: 'طاقة الفوتون الساقط (E)',
      value: photonEnergyEV.toFixed(2),
      unit: 'eV',
      status: isEmission ? 'optimal' : 'warning',
    },
    {
      id: 'frequency',
      labelEn: 'Photon Frequency (ν)',
      labelAr: 'تردد الفوتون (ν)',
      value: frequency14Hz.toFixed(2),
      unit: '×10¹⁴ Hz',
    },
    {
      id: 'work-function',
      labelEn: 'Work Function (Φ)',
      labelAr: 'دالة الشغل للمعدن (Φ)',
      value: workFunctionEV.toFixed(2),
      unit: 'eV',
    },
    {
      id: 'stopping-potential',
      labelEn: 'Stopping Potential (V₀)',
      labelAr: 'جهد الإيقاف النظري (V₀)',
      value: stoppingPotentialV.toFixed(2),
      unit: 'V',
      status: isStopped ? 'optimal' : undefined,
    },
    {
      id: 'max-velocity',
      labelEn: 'Max Velocity (v_max)',
      labelAr: 'أقصى سرعة للإلكترون',
      value: (maxVelocityMS / 1e3).toFixed(1),
      unit: 'km/s',
    },
    {
      id: 'photocurrent',
      labelEn: 'Measured Photocurrent (I)',
      labelAr: 'شدة التيار الكهروضوئي (I)',
      value: measuredCurrentUA.toFixed(2),
      unit: 'µA',
      status: measuredCurrentUA > 0 ? 'optimal' : 'warning',
    },
  ];

  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: LabViewportState
  ) => {
    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.translate(viewport.panX, viewport.panY);
    ctx.scale(viewport.zoom, viewport.zoom);

    const baseW = 600;
    const baseH = 340;
    const scale = Math.min(width / baseW, height / baseH);
    const offsetX = (width - baseW * scale) / 2;
    const offsetY = (height - baseH * scale) / 2;

    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Chamber background
    const bgGrad = ctx.createLinearGradient(0, 0, baseW, baseH);
    if (isContrast) {
      bgGrad.addColorStop(0, '#000000');
      bgGrad.addColorStop(1, '#000000');
    } else if (isLight) {
      bgGrad.addColorStop(0, '#f8fafc');
      bgGrad.addColorStop(1, '#f1f5f9');
    } else {
      bgGrad.addColorStop(0, '#020617');
      bgGrad.addColorStop(1, '#090d16');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, baseW, baseH);

    // 1. Vacuum Quartz Bulb Chamber (Realistic Glass Envelope)
    ctx.save();
    // Internal vacuum radial gradient
    const bulbGrad = ctx.createRadialGradient(290, 130, 25, 290, 130, 195);
    if (isLight) {
      bulbGrad.addColorStop(0, 'rgba(241, 245, 249, 0.7)');
      bulbGrad.addColorStop(0.85, 'rgba(226, 232, 240, 0.85)');
      bulbGrad.addColorStop(1, 'rgba(203, 213, 225, 0.95)');
    } else {
      bulbGrad.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
      bulbGrad.addColorStop(0.85, 'rgba(8, 14, 30, 0.85)');
      bulbGrad.addColorStop(1, 'rgba(2, 6, 23, 0.95)');
    }
    ctx.fillStyle = bulbGrad;
    ctx.beginPath();
    ctx.ellipse(290, 130, 190, 85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Quartz outer wall glow
    ctx.lineWidth = 3;
    ctx.strokeStyle = isLight ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.45)';
    ctx.stroke();

    // Specular glass reflection arcs (gloss highlights)
    ctx.beginPath();
    ctx.arc(290, 130, 185, Math.PI * 1.05, Math.PI * 1.35);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(290, 130, 185, Math.PI * 0.1, Math.PI * 0.35);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    // 2. Incident Light Illuminator with Metallic Housing
    drawMetallicCylinder(ctx, 5, 25, 65, 38, 'steel', 'horizontal');
    // Emitter bezel ring
    ctx.fillStyle = '#64748b';
    ctx.fillRect(68, 22, 10, 44);

    if (params.intensity > 0) {
      drawVolumetricBeam(ctx, 75, 44, 160, 130, lightColor.hex, 8, 20);

      const s = simStateRef.current;
      for (const p of s.photons) {
        drawGlowingParticle(ctx, p.x, p.y, 3, lightColor.hex, 8);
      }
    }

    // 3. Cathode Plate (Curved Metal Plate with Specular Highlight)
    const cathodeX = 160;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cathodeX - 25, 130, 70, -Math.PI * 0.42, Math.PI * 0.42);
    ctx.lineWidth = 14;
    ctx.strokeStyle = currentMetal.colorHex;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Specular brushed highlight along the curved plate
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.stroke();

    // Electrode tungsten lead
    ctx.beginPath();
    ctx.moveTo(cathodeX - 35, 130);
    ctx.lineTo(cathodeX - 60, 130);
    ctx.lineTo(cathodeX - 60, 260);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${currentMetal.symbol} (${currentMetal.workFunctionEV} eV)`,
      cathodeX - 45,
      50
    );
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px system-ui, sans-serif';
    ctx.fillText(isArabic ? 'المهبط (الكاثود)' : 'Cathode (-)', cathodeX - 45, 62);
    ctx.restore();

    // 4. Anode Collector Plate
    const anodeX = 420;
    ctx.save();
    drawMetallicCylinder(ctx, anodeX - 5, 75, 10, 110, 'steel', 'vertical');

    const sparkA = simStateRef.current.sparkAnodeAlpha;
    if (sparkA > 0) {
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 18;
      ctx.fillStyle = `rgba(56, 189, 248, ${sparkA})`;
      ctx.fillRect(anodeX - 5, 75, 10, 110);
      ctx.shadowBlur = 0;
    }

    // Lead wire
    ctx.beginPath();
    ctx.moveTo(anodeX, 130);
    ctx.lineTo(anodeX + 30, 130);
    ctx.lineTo(anodeX + 30, 260);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(isArabic ? 'المصعد (الأنود)' : 'Anode / Collector (+)', anodeX + 10, 50);
    ctx.restore();

    // 5. Electric Field between Plates
    if (Math.abs(params.biasVoltage) > 0.05) {
      ctx.save();
      const isRetarding = params.biasVoltage < 0;
      const arrowColor = isRetarding ? 'rgba(244, 63, 94, 0.45)' : 'rgba(16, 185, 129, 0.45)';
      ctx.strokeStyle = arrowColor;
      ctx.fillStyle = arrowColor;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      const startX = isRetarding ? anodeX - 10 : cathodeX + 15;
      const endX = isRetarding ? cathodeX + 15 : anodeX - 10;

      for (let y = 90; y <= 170; y += 40) {
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.restore();
    }

    // 6. Flying Photoelectrons with Glowing Cyan Trails
    const s = simStateRef.current;
    ctx.save();
    for (const e of s.electrons) {
      drawGlowingParticle(ctx, e.x, e.y, 3.5, '#38bdf8', 10);

      // Trailing ion tail
      ctx.beginPath();
      ctx.moveTo(e.x, e.y);
      ctx.lineTo(e.x - e.vx * 0.03, e.y - e.vy * 0.03);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();

    // 7. External Circuit & Precision Analog Gauges
    ctx.save();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cathodeX - 60, 260);
    ctx.lineTo(200, 260);
    ctx.moveTo(280, 260);
    ctx.lineTo(330, 260);
    ctx.moveTo(410, 260);
    ctx.lineTo(anodeX + 30, 260);
    ctx.stroke();

    // Realistic Analog Precision Microammeter Gauge (Curved Scale & Needle)
    drawAnalogMeterGauge(
      ctx,
      240,
      260,
      36,
      measuredCurrentUA,
      0,
      150,
      isArabic ? 'التيار µA' : 'AMMETER',
      'µA'
    );

    // Realistic Analog Precision Voltmeter Gauge (Curved Scale & Needle)
    drawAnalogMeterGauge(
      ctx,
      370,
      260,
      36,
      params.biasVoltage,
      -5,
      5,
      isArabic ? 'جهد V' : 'BIAS',
      'V'
    );
    ctx.restore();

    // 8. On-Canvas HUD Banner
    ctx.save();
    ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    ctx.strokeStyle = isEmission ? (isStopped ? '#f43f5e' : '#10b981') : '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(15, baseH - 45, baseW - 30, 36, 8);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'left';
    if (!isEmission) {
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(
        isArabic
          ? `⚠️ طاقة الفوتون (${photonEnergyEV.toFixed(2)} eV) < دالة الشغل (${workFunctionEV.toFixed(2)} eV): لا يحدث انبعاث كهروضوئي`
          : `⚠️ Photon Energy (${photonEnergyEV.toFixed(2)} eV) < Work Function (${workFunctionEV.toFixed(2)} eV): Zero Emission`,
        25,
        baseH - 23
      );
    } else if (isStopped) {
      ctx.fillStyle = '#f43f5e';
      ctx.fillText(
        isArabic
          ? `🛑 جهد الإيقاف العكسي (${params.biasVoltage.toFixed(2)} V ≤ -${stoppingPotentialV.toFixed(2)} V) أوقف أسرع الإلكترونات (التيار = 0)`
          : `🛑 Retarding Bias (${params.biasVoltage.toFixed(2)} V ≤ -${stoppingPotentialV.toFixed(2)} V) Extinguished Current (I = 0 µA)`,
        25,
        baseH - 23
      );
    } else {
      ctx.fillStyle = '#10b981';
      ctx.fillText(
        isArabic
          ? `✨ انبعاث نشط: KE_max = ${(photonEnergyEV - workFunctionEV).toFixed(2)} eV | التيار = ${measuredCurrentUA.toFixed(1)} µA`
          : `✨ Active Photoemission: KE_max = ${(photonEnergyEV - workFunctionEV).toFixed(2)} eV | Current = ${measuredCurrentUA.toFixed(1)} µA`,
        25,
        baseH - 23
      );
    }
    ctx.restore();

    ctx.restore();
  };

  return (
    <VirtualLabShell<PhotoelectricParams, PhotoelectricState>
      definition={definition}
      lab={lab}
      lang={lang}
      theme={theme}
      telemetry={telemetry}
      multimeterReading={dmmReading}
      currentXValue={parseFloat(frequency14Hz.toFixed(2))}
      currentYValue={parseFloat(stoppingPotentialV.toFixed(2))}
      renderCustomControls={() => (
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-1.5">
              {isArabic ? 'معدن الكاثود (دالة الشغل):' : 'Cathode Metal (Work Function):'}
            </label>
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {METALS.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => lab.updateParam('metalIndex', idx)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                    params.metalIndex === idx
                      ? 'bg-cyan-600 text-white border-cyan-400 shadow-sm font-extrabold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {m.symbol} ({m.workFunctionEV} eV)
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-bold">{isArabic ? 'الطول الموجي للضوء (λ):' : 'Wavelength (λ):'}</span>
              <span className="font-mono font-black" style={{ color: lightColor.hex }}>
                {params.wavelengthNm} nm ({photonEnergyEV.toFixed(2)} eV)
              </span>
            </div>
            <input
              type="range"
              min={180}
              max={750}
              step={5}
              value={params.wavelengthNm}
              onChange={(e) => lab.updateParam('wavelengthNm', parseInt(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>180 nm (Far UV)</span>
              <span>380 nm (Violet)</span>
              <span>550 nm (Green)</span>
              <span>750 nm (IR)</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-bold">{isArabic ? 'شدة الإضاءة:' : 'Light Intensity:'}</span>
              <span className="font-mono font-black text-amber-400">{params.intensity}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={params.intensity}
              onChange={(e) => lab.updateParam('intensity', parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <span className="text-[10px] text-slate-500 block">
              {isArabic ? 'تحدد عدد الفوتونات ومعدل الإلكترونات المتحررة' : 'Controls photon arrival rate and photocurrent'}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-bold">{isArabic ? 'جهد الأنبوبة العكسي/الطردي:' : 'Bias Voltage (V):'}</span>
              <span
                className={`font-mono font-black ${
                  params.biasVoltage < 0 ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {params.biasVoltage >= 0 ? '+' : ''}{params.biasVoltage.toFixed(2)} V
              </span>
            </div>
            <input
              type="range"
              min={-5.0}
              max={5.0}
              step={0.05}
              value={params.biasVoltage}
              onChange={(e) => lab.updateParam('biasVoltage', parseFloat(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>-5.0 V (Retarding)</span>
              <span>0.0 V (Zero Bias)</span>
              <span>+5.0 V (Accelerating)</span>
            </div>
          </div>

          {isEmission && (
            <button
              onClick={() => lab.updateParam('biasVoltage', -parseFloat(stoppingPotentialV.toFixed(2)))}
              className="w-full py-2 px-3 rounded-xl bg-rose-950/40 border border-rose-800/60 hover:bg-rose-900/50 text-rose-300 text-xs font-bold transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
            >
              <span>{isArabic ? 'ضبط تلقائي على جهد الإيقاف (-V₀):' : 'Snap to Stopping Bias (-V₀):'}</span>
              <span className="font-mono">-{stoppingPotentialV.toFixed(2)} V</span>
            </button>
          )}
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="photoelectric-viewport"
        lang={lang}
        theme={theme}
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        animated={true}
        onRender={handleRenderCanvas}
      />
    </VirtualLabShell>
  );
};
