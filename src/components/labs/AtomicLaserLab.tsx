import React, { useRef, useState } from 'react';
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
  drawGlowingParticle,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import {
  Atom,
  Zap,
  Radio,
  Sparkles,
  Layers,
  Sliders,
  RotateCcw,
  Flame,
  Sun,
  Target,
  Activity,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface AtomicLaserParams {
  systemMode: 'bohr' | 'laser_hene' | 'laser_ruby' | 'xray_coolidge';
  // Bohr Mode Parameters
  n1: number; // Lower level: 1 to 5
  n2: number; // Upper level: 2 to 6 (n2 > n1)
  viewMode: 'ladder' | 'orbitals';
  bohrSpectrumType: 'emission' | 'absorption' | 'fraunhofer';
  // He-Ne Laser Parameters
  pumpPower: number; // 0 to 100%
  highVoltageDC: boolean; // ON / OFF
  cavityAlignment: number; // mrad (0.0 to 3.0 mrad, threshold ~1.5 mrad)
  // Ruby Laser Parameters
  rubyFlashEnergyJ: number; // 50 to 500 J
  // Coolidge X-Ray Tube Parameters
  xrayVoltageKv: number; // 15 to 90 kV
  xrayFilamentCurrentA: number; // 2.5 to 5.0 A
  xrayTargetElement: 'tungsten' | 'molybdenum' | 'copper';
}

interface AtomicLaserState {
  laserOutputPowerMw: number;
  isLasing: boolean;
  photonsCount: number;
  rubyPulseIntensity: number;
  xrayLambdaMinNm: number;
  xrayCharacteristicKaNm: number;
}

// Physical Constants
const H_PLANCK = 6.62607015e-34; // J·s
const E_CHARGE = 1.602176634e-19; // C
const HC_EV_NM = 1239.84193; // eV·nm

interface SeriesInfo {
  nameEn: string;
  nameAr: string;
  regionEn: string;
  regionAr: string;
  colorHex: string;
}

function getSeriesInfo(n1: number, n2: number): SeriesInfo {
  if (n1 === 1) {
    return {
      nameEn: 'Lyman Series',
      nameAr: 'مجموعة ليمان',
      regionEn: 'Ultraviolet (UV)',
      regionAr: 'الأشعة فوق البنفسجية (UV)',
      colorHex: '#a855f7',
    };
  }
  if (n1 === 2) {
    let color = '#ec4899';
    if (n2 === 3) color = '#ef4444'; // H-alpha 656.3 nm Red
    else if (n2 === 4) color = '#06b6d4'; // H-beta 486.1 nm Cyan
    else if (n2 === 5) color = '#3b82f6'; // H-gamma 434.0 nm Blue
    else if (n2 >= 6) color = '#8b5cf6'; // H-delta 410.2 nm Violet
    return {
      nameEn: 'Balmer Series',
      nameAr: 'مجموعة بالمر',
      regionEn: 'Visible Light',
      regionAr: 'طيف الضوء المرئي',
      colorHex: color,
    };
  }
  if (n1 === 3) {
    return {
      nameEn: 'Paschen Series',
      nameAr: 'مجموعة باشن',
      regionEn: 'Near-Infrared (NIR)',
      regionAr: 'الأشعة تحت الحمراء القريبة (NIR)',
      colorHex: '#f43f5e',
    };
  }
  if (n1 === 4) {
    return {
      nameEn: 'Brackett Series',
      nameAr: 'مجموعة براكت',
      regionEn: 'Infrared (IR)',
      regionAr: 'الأشعة تحت الحمراء (IR)',
      colorHex: '#e11d48',
    };
  }
  return {
    nameEn: 'Pfund Series',
    nameAr: 'مجموعة بفوند',
    regionEn: 'Far-Infrared (Far-IR)',
    regionAr: 'الأشعة تحت الحمراء البعيدة (Far-IR)',
    colorHex: '#be123c',
  };
}

// Target elements data for Coolidge X-ray tube
interface XRayTargetInfo {
  elementEn: string;
  elementAr: string;
  symbol: string;
  z: number;
  kAlphaNm: number;
  kBetaNm: number;
  criticalKv: number;
}

const XRAY_TARGETS: Record<'tungsten' | 'molybdenum' | 'copper', XRayTargetInfo> = {
  tungsten: {
    elementEn: 'Tungsten',
    elementAr: 'تنجستن',
    symbol: 'W',
    z: 74,
    kAlphaNm: 0.021, // 0.21 Å
    kBetaNm: 0.018, // 0.18 Å
    criticalKv: 69.5,
  },
  molybdenum: {
    elementEn: 'Molybdenum',
    elementAr: 'موليبدنوم',
    symbol: 'Mo',
    z: 42,
    kAlphaNm: 0.071, // 0.71 Å
    kBetaNm: 0.063, // 0.63 Å
    criticalKv: 20.0,
  },
  copper: {
    elementEn: 'Copper',
    elementAr: 'نحاس',
    symbol: 'Cu',
    z: 29,
    kAlphaNm: 0.154, // 1.54 Å
    kBetaNm: 0.139, // 1.39 Å
    criticalKv: 8.98,
  },
};

// Prominent Fraunhofer solar absorption lines
const FRAUNHOFER_LINES = [
  { id: 'C', name: 'H-α (C)', element: 'Hydrogen', nm: 656.3, color: '#ef4444' },
  { id: 'D1', name: 'Na (D₁)', element: 'Sodium', nm: 589.6, color: '#f59e0b' },
  { id: 'D2', name: 'Na (D₂)', element: 'Sodium', nm: 589.0, color: '#f59e0b' },
  { id: 'D3', name: 'He (D₃)', element: 'Helium', nm: 587.6, color: '#eab308' },
  { id: 'b1', name: 'Mg (b₁)', element: 'Magnesium', nm: 518.4, color: '#10b981' },
  { id: 'F', name: 'H-β (F)', element: 'Hydrogen', nm: 486.1, color: '#06b6d4' },
  { id: 'G', name: 'H-γ (G\')', element: 'Hydrogen', nm: 434.0, color: '#3b82f6' },
  { id: 'h', name: 'H-δ (h)', element: 'Hydrogen', nm: 410.2, color: '#8b5cf6' },
  { id: 'H', name: 'Ca⁺ (H)', element: 'Calcium', nm: 396.8, color: '#a855f7' },
  { id: 'K', name: 'Ca⁺ (K)', element: 'Calcium', nm: 393.4, color: '#9333ea' },
];

interface PhotonPacket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  lambdaNm: number;
  colorHex: string;
  phase: number;
  active: boolean;
  mode: 'bohr' | 'laser';
}

export const AtomicLaserLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Transient flash animation trigger for Ruby laser
  const [, setRubyFlashTrigger] = useState<number>(0);

  const simRef = useRef<{
    photons: PhotonPacket[];
    lastTransitionTime: number;
    orbitAngle: number;
    lastN1: number;
    lastN2: number;
    laserPhase: number;
    rubyPulseProgress: number; // 0 to 1
    xrayElectrons: { x: number; y: number; vx: number; vy: number; progress: number }[];
  }>({
    photons: [],
    lastTransitionTime: 0,
    orbitAngle: 0,
    lastN1: 2,
    lastN2: 3,
    laserPhase: 0,
    rubyPulseProgress: 0,
    xrayElectrons: [],
  });

  const definition: LabDefinition<AtomicLaserParams, AtomicLaserState> = {
    id: 'bohr-laser-quantum',
    subject: 'physics',
    chapterRef: 'Ch. 6 & 7: Atomic Spectra, X-Rays & Lasers',
    titleEn: 'Modern Atomic Physics, Coolidge X-Ray & Quantum Lasers Laboratory',
    titleAr: 'مختبر الفيزياء الذرية الحديثة، وأشعة إكس لكولدج، والليزر الكمي',
    subtitleEn:
      'Quantized Bohr transitions, Fraunhofer solar absorption, Duane-Hunt X-ray spectrometry, and He-Ne / Ruby laser cavities',
    subtitleAr:
      'انتقالات بور المكممة، خطوط فرانهوفر لامتصاص الشمس، قانون دوين-هنت لأشعة إكس، ورنانات ليزر الهيليوم-نيون والياقوت',
    taglineEn: 'Bohr Model (1913), Coolidge Tube (1913), Maiman Ruby (1960) & He-Ne Gas Lasers',
    taglineAr: 'نموذج بور (١٩١٣)، أنبوبة كولدج (١٩١٣)، ليزر الياقوت لمايمان (١٩٦٠) وليزر الغازات',
    objectives: [
      {
        id: 'obj-bohr-levels',
        textEn: 'Verify Bohr energy level quantization: E_n = -13.6 / n² eV and photon emission ΔE = hν = hc / λ',
        textAr: 'التحقق من تكميم مستويات طاقة ذرة الهيدروجين: E_n = -13.6 / n² eV وانبعاث الفوتونات ΔE = hν = hc / λ',
      },
      {
        id: 'obj-rydberg-slope',
        textEn: 'Determine the Rydberg constant (R_H = 1.097 × 10⁷ m⁻¹) via linear regression of wavenumber vs (1/n₁² - 1/n₂²)',
        textAr: 'تعيين ثابت ريدبرج عملياً من ميل الخط المستقيم للعدد الموجي مقابل (1/n₁² - 1/n₂²)',
      },
      {
        id: 'obj-fraunhofer',
        textEn: 'Distinguish continuous, line emission, and line absorption spectra (Fraunhofer solar absorption lines)',
        textAr: 'التمييز بين الطيف المستمر وطيف الانبعاث الخطي وطيف الامتصاص الخطي (خطوط فرانهوفر الشمسية)',
      },
      {
        id: 'obj-duane-hunt-xray',
        textEn: 'Investigate the Coolidge X-ray tube: Duane-Hunt cutoff λ_min = hc / (eV) and characteristic K_α / K_β target peaks',
        textAr: 'دراسة أشعة إكس في أنبوبة كولدج: حد دوين-هنت الأدنى للطول الموجي λ_min = hc/eV والأطياف الخطية المميزة للهدف',
      },
      {
        id: 'obj-laser-inversion',
        textEn: 'Demonstrate population inversion (N₂ > N₁) and threshold condition for stimulated emission in He-Ne and Ruby lasers',
        textAr: 'إثبات حدوث الإسكان المعكوس (N₂ > N₁) وشرط العتبة للانبعاث المستحث في ليزر الهيليوم-نيون وليزر الياقوت',
      },
    ],
    defaultParams: {
      systemMode: 'bohr',
      n1: 2,
      n2: 3,
      viewMode: 'ladder',
      bohrSpectrumType: 'emission',
      pumpPower: 85,
      highVoltageDC: true,
      cavityAlignment: 0.0,
      rubyFlashEnergyJ: 250,
      xrayVoltageKv: 50,
      xrayFilamentCurrentA: 3.5,
      xrayTargetElement: 'tungsten',
    },
    paramSchema: {
      systemMode: {
        key: 'systemMode',
        type: 'select',
        defaultValue: 'bohr',
        options: [
          { value: 'bohr', labelEn: '1. Bohr Hydrogen & Fraunhofer Spectra', labelAr: '١. أطياف بور الشمسية وفرانهوفر' },
          { value: 'laser_hene', labelEn: '2. He-Ne Gas Resonator Laser', labelAr: '٢. ليزر الهيليوم-نيون الغازي' },
          { value: 'laser_ruby', labelEn: '3. Maiman Ruby Solid-State Laser', labelAr: '٣. ليزر الياقوت الصلب (مايمان)' },
          { value: 'xray_coolidge', labelEn: '4. Coolidge Tube & X-Ray Spectrometer', labelAr: '٤. أنبوبة كولدج ومطياف أشعة إكس' },
        ],
        labelEn: 'Apparatus Suite',
        labelAr: 'الجهاز قيد التشغيل',
        category: 'primary',
      },
      n1: {
        key: 'n1',
        type: 'select',
        defaultValue: 2,
        options: [
          { value: 1, labelEn: 'n₁ = 1 (Lyman Series - Ultraviolet)', labelAr: 'n₁ = 1 (مجموعة ليمان - فوق بنفسجية)' },
          { value: 2, labelEn: 'n₁ = 2 (Balmer Series - Visible)', labelAr: 'n₁ = 2 (مجموعة بالمر - ضوء منظور)' },
          { value: 3, labelEn: 'n₁ = 3 (Paschen Series - Near IR)', labelAr: 'n₁ = 3 (مجموعة باشن - تحت حمراء قريبة)' },
          { value: 4, labelEn: 'n₁ = 4 (Brackett Series - Infrared)', labelAr: 'n₁ = 4 (مجموعة براكت - تحت حمراء)' },
          { value: 5, labelEn: 'n₁ = 5 (Pfund Series - Far IR)', labelAr: 'n₁ = 5 (مجموعة بفوند - تحت حمراء بعيدة)' },
        ],
        labelEn: 'Final Lower Level (n₁)',
        labelAr: 'المستوى النهائي الأدنى (n₁)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'bohr',
      },
      n2: {
        key: 'n2',
        type: 'select',
        defaultValue: 3,
        options: [
          { value: 2, labelEn: 'n₂ = 2', labelAr: 'n₂ = 2' },
          { value: 3, labelEn: 'n₂ = 3', labelAr: 'n₂ = 3' },
          { value: 4, labelEn: 'n₂ = 4', labelAr: 'n₂ = 4' },
          { value: 5, labelEn: 'n₂ = 5', labelAr: 'n₂ = 5' },
          { value: 6, labelEn: 'n₂ = 6', labelAr: 'n₂ = 6' },
        ],
        labelEn: 'Initial Excited Level (n₂)',
        labelAr: 'المستوى الابتدائي المثار (n₂)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'bohr',
      },
      viewMode: {
        key: 'viewMode',
        type: 'select',
        defaultValue: 'ladder',
        options: [
          { value: 'ladder', labelEn: 'Energy Level Ladder & Spectrometer', labelAr: 'مخطط درجات الطاقة والمطياف' },
          { value: 'orbitals', labelEn: 'Bohr Concentric Orbits & de Broglie Waves', labelAr: 'مدارات بور وموجات دي برولي' },
        ],
        labelEn: 'Atomic View Style',
        labelAr: 'نمط العرض الذري',
        category: 'secondary',
        visibleIf: (p) => p.systemMode === 'bohr',
      },
      bohrSpectrumType: {
        key: 'bohrSpectrumType',
        type: 'select',
        defaultValue: 'emission',
        options: [
          { value: 'emission', labelEn: 'Line Emission Spectrum', labelAr: 'طيف انبعاث خطي' },
          { value: 'absorption', labelEn: 'Line Absorption Spectrum', labelAr: 'طيف امتصاص خطي' },
          { value: 'fraunhofer', labelEn: 'Solar Fraunhofer Lines', labelAr: 'خطوط فرانهوفر الشمسية' },
        ],
        labelEn: 'Spectral Dispersion Type',
        labelAr: 'نوع الطيف البصري',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'bohr',
      },
      pumpPower: {
        key: 'pumpPower',
        type: 'number',
        defaultValue: 85,
        min: 0,
        max: 100,
        step: 5,
        unit: '%',
        labelEn: 'Electric Discharge Power',
        labelAr: 'شدة التفريغ الكهربي (الضخ)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'laser_hene',
      },
      highVoltageDC: {
        key: 'highVoltageDC',
        type: 'boolean',
        defaultValue: true,
        labelEn: 'HV Power Supply (1.5 kV)',
        labelAr: 'مصدر الجهد العالي المستمر (1.5 kV)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'laser_hene',
      },
      cavityAlignment: {
        key: 'cavityAlignment',
        type: 'number',
        defaultValue: 0.0,
        min: 0.0,
        max: 3.0,
        step: 0.1,
        unit: 'mrad',
        labelEn: 'Mirror Angular Tilt (θ)',
        labelAr: 'حيود توازي المرآتين (θ)',
        category: 'secondary',
        visibleIf: (p) => p.systemMode === 'laser_hene',
      },
      rubyFlashEnergyJ: {
        key: 'rubyFlashEnergyJ',
        type: 'number',
        defaultValue: 250,
        min: 50,
        max: 500,
        step: 25,
        unit: 'J',
        labelEn: 'Xenon Flash Capacitor Energy',
        labelAr: 'طاقة مكثف الفلاش الزينون',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'laser_ruby',
      },
      xrayVoltageKv: {
        key: 'xrayVoltageKv',
        type: 'number',
        defaultValue: 50,
        min: 15,
        max: 90,
        step: 5,
        unit: 'kV',
        labelEn: 'Accelerating High Voltage (V)',
        labelAr: 'فرق الجهد العالي المعجل (V)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'xray_coolidge',
      },
      xrayFilamentCurrentA: {
        key: 'xrayFilamentCurrentA',
        type: 'number',
        defaultValue: 3.5,
        min: 2.0,
        max: 5.0,
        step: 0.1,
        unit: 'A',
        labelEn: 'Filament Heating Current (I_f)',
        labelAr: 'تيار تسخين الفتيلة (I_f)',
        category: 'secondary',
        visibleIf: (p) => p.systemMode === 'xray_coolidge',
      },
      xrayTargetElement: {
        key: 'xrayTargetElement',
        type: 'select',
        defaultValue: 'tungsten',
        options: [
          { value: 'tungsten', labelEn: 'Tungsten Target (W, Z=74)', labelAr: 'هدف التنجستن (W، العدد الذري 74)' },
          { value: 'molybdenum', labelEn: 'Molybdenum Target (Mo, Z=42)', labelAr: 'هدف الموليبدنوم (Mo، العدد الذري 42)' },
          { value: 'copper', labelEn: 'Copper Target (Cu, Z=29)', labelAr: 'هدف النحاس (Cu، العدد الذري 29)' },
        ],
        labelEn: 'Anode Target Material',
        labelAr: 'مادة الهدف في المصعد',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'xray_coolidge',
      },
    },
    presets: [
      {
        id: 'preset-balmer-alpha',
        nameEn: 'Balmer H-α Red Line (656.3 nm, n=3 → n=2)',
        nameAr: 'خط بالمر H-α الأحمر (656.3 nm، انتقال 3 ← 2)',
        descriptionEn: 'The most prominent visible red emission line of atomic hydrogen',
        descriptionAr: 'أشهر وأوضح خطوط الطيف المنظور لذرة الهيدروجين',
        params: {
          systemMode: 'bohr',
          n1: 2,
          n2: 3,
          viewMode: 'ladder',
          bohrSpectrumType: 'emission',
        },
      },
      {
        id: 'preset-fraunhofer',
        nameEn: 'Solar Fraunhofer Absorption Spectrum',
        nameAr: 'طيف خطوط فرانهوفر الامتصاصية للشمس',
        descriptionEn: 'Atmospheric elements absorb specific wavelengths from solar continuous spectrum',
        descriptionAr: 'غازات الغلاف الجوي للشمس تمتص أطوالاً موجية محددة من طيفها المستمر',
        params: {
          systemMode: 'bohr',
          n1: 2,
          n2: 3,
          viewMode: 'ladder',
          bohrSpectrumType: 'fraunhofer',
        },
      },
      {
        id: 'preset-laser-active',
        nameEn: 'He-Ne Laser 632.8 nm Coherent Oscillation',
        nameAr: 'انطلاق حزمة ليزر الهيليوم-نيون المتماسكة (632.8 nm)',
        descriptionEn: 'High-voltage electric discharge creates population inversion in Ne via resonant He collisions',
        descriptionAr: 'تفريغ كهربي عالي الجهد يحقق الإسكان المعكوس في النيون عبر تصادمات الهيليوم الرنينية',
        params: {
          systemMode: 'laser_hene',
          pumpPower: 85,
          highVoltageDC: true,
          cavityAlignment: 0.0,
        },
      },
      {
        id: 'preset-ruby-pulse',
        nameEn: 'Maiman Ruby Solid-State Laser (694.3 nm Deep Red)',
        nameAr: 'ليزر الياقوت الصلب لمايمان (694.3 nm أحمر داكن)',
        descriptionEn: 'Helical xenon flash lamp optical pumping excites Cr³⁺ ions in sapphire crystal rod',
        descriptionAr: 'ضخ ضوئي بمصباح فلاش حلزوني يثير أيونات الكروم في قضيب الياقوت الصناعي',
        params: {
          systemMode: 'laser_ruby',
          rubyFlashEnergyJ: 300,
        },
      },
      {
        id: 'preset-xray-tungsten',
        nameEn: 'Coolidge Tube X-Ray with Tungsten Target (50 kV, Z=74)',
        nameAr: 'أشعة إكس بأنبوبة كولدج بهدف تنجستن (50 kV، Z=74)',
        descriptionEn: 'Continuous Bremsstrahlung with Duane-Hunt cutoff and high-Z characteristic peaks',
        descriptionAr: 'طيف أشعة الكبح المستمر بحد دوين-هنت والأطياف الخطية المميزة للعدد الذري الكبير',
        params: {
          systemMode: 'xray_coolidge',
          xrayVoltageKv: 50,
          xrayFilamentCurrentA: 3.5,
          xrayTargetElement: 'tungsten',
        },
      },
      {
        id: 'preset-xray-molybdenum',
        nameEn: 'Coolidge Tube X-Ray with Molybdenum (35 kV, Z=42)',
        nameAr: 'أشعة إكس بأنبوبة كولدج بهدف موليبدنوم (35 kV، Z=42)',
        descriptionEn: 'Shows shift of characteristic peaks to longer wavelengths (K_α = 0.071 nm)',
        descriptionAr: 'يوضح إزاحة الخطوط المميزة نحو أطوال موجية أطول مع نقص العدد الذري',
        params: {
          systemMode: 'xray_coolidge',
          xrayVoltageKv: 35,
          xrayFilamentCurrentA: 3.5,
          xrayTargetElement: 'molybdenum',
        },
      },
    ],
    keyFormulas: [
      {
        id: 'bohr-energy',
        tex: 'E_n = -\\frac{13.6}{n^2}\\,\\text{eV}',
        labelEn: 'Bohr Quantized Energy Levels',
        labelAr: 'طاقة مستويات ذرة الهيدروجين المكممة',
      },
      {
        id: 'photon-energy-wavelength',
        tex: '\\Delta E = E_2 - E_1 = h\\nu = \\frac{hc}{\\lambda} = 13.6\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)\\,\\text{eV}',
        labelEn: 'Bohr Frequency Condition',
        labelAr: 'شرط بور للتردد وطاقة الفوتون المنبعث',
      },
      {
        id: 'duane-hunt',
        tex: '\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{12400}{V\\,\\text{(Volts)}}\\,\\text{Å}',
        labelEn: 'Duane-Hunt Law (Continuous X-Ray Cutoff)',
        labelAr: 'قانون دوين-هنت (أقصر طول موجي لطيف الكبح)',
      },
      {
        id: 'moseley-xray',
        tex: '\\Delta E_{K} = h\\nu_K \\propto (Z - 1)^2 \\implies \\lambda_{K\\alpha} \\propto \\frac{1}{(Z - 1)^2}',
        labelEn: 'Characteristic X-Ray Line Dependence on Z',
        labelAr: 'اعتماد الطيف الخطي المميز على العدد الذري',
      },
      {
        id: 'laser-condition',
        tex: 'N_2 > N_1 \\quad (\\tau_{\\text{metastable}} \\approx 10^{-3}\\,\\text{s} \\gg 10^{-8}\\,\\text{s})',
        labelEn: 'Population Inversion Condition',
        labelAr: 'شرط الإسكان المعكوس والحالة شبه المستقرة',
      },
    ],
    poePrompts: [
      {
        id: 'poe-duane-hunt-dependence',
        titleEn: 'Duane-Hunt Law and Target Material Independence',
        titleAr: 'قانون دوين-هنت وعدم اعتماده على مادة الهدف',
        scenarioEn:
          'In a Coolidge X-ray tube, the accelerating potential difference is kept constant at 50 kV. If the anode target is changed from Tungsten (Z=74) to Molybdenum (Z=42), what happens to the minimum continuous wavelength λ_min?',
        scenarioAr:
          'في أنبوبة كولدج لتوليد الأشعة السينية، ثُبت فرق الجهد المعجل عند 50 kV. إذا تم استبدال مادة الهدف من التنجستن (Z=74) إلى الموليبدنوم (Z=42)، فماذا يحدث لأقصر طول موجي للطيف المستمر λ_min؟',
        questionEn: 'What happens to the minimum wavelength λ_min?',
        questionAr: 'ماذا يحدث لأقصر طول موجي λ_min؟',
        optionsEn: [
          'It remains strictly unchanged because λ_min = hc/(eV) depends solely on voltage V, not on Z',
          'It increases because Molybdenum has a smaller atomic number Z',
          'It decreases because lighter atoms release faster photons',
          'It drops to zero due to lack of bremsstrahlung',
        ],
        optionsAr: [
          'يظل ثابتاً دون أي تغيير لأن λ_min = hc/(eV) يعتمد حصرياً على فرق الجهد المعجل ولا علاقة له بالعدد الذري Z',
          'يزداد لأن العدد الذري للموليبدنوم أقل من التنجستن',
          'يقل لأن الذرات الخفيفة تشع فوتونات أسرع',
          'ينعدم تماماً لغياب أشعة الكبح',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'The minimum continuous wavelength λ_min corresponds to the maximum kinetic energy lost by an electron in a single collision: K.E._max = eV = hc / λ_min. Therefore, λ_min depends strictly on the accelerating potential V and physical constants (h, c, e). The target material Z only affects the characteristic line wavelengths and total emission intensity.',
        scientificExplanationAr:
          'أقصر طول موجي للطيف المستمر (أشعة الكبح) ينتج عندما يفقد الإلكترون المعجل طاقته الحركية كاملة في تصادم واحد: K.E._max = eV = hc/λ_min. لذلك يتوقف λ_min حصرياً على فرق الجهد بين الفتيلة والهدف وثوابت الطبيعة. أما مادة الهدف (العدد الذري Z) فتحدد فقط موقع الخطوط المميزة والشدة الكلية.',
      },
      {
        id: 'poe-characteristic-line-voltage',
        titleEn: 'Characteristic X-Ray Wavelength vs. Accelerating Voltage',
        titleAr: 'علاقة الطول الموجي للطيف الخطي المميز بفرق الجهد',
        scenarioEn:
          'A Coolidge tube operates at 60 kV with a Tungsten target, showing a characteristic K_α peak at 0.021 nm. If the accelerating potential difference is increased to 80 kV, what happens to the wavelength of the K_α line?',
        scenarioAr:
          'تعمل أنبوبة كولدج بفرق جهد 60 kV مع هدف تنجستن وتظهر قمة خطية مميزة K_α عند 0.021 nm. إذا رُفع فرق الجهد المعجل إلى 80 kV، فماذا يحدث للطول الموجي لخط K_α؟',
        questionEn: 'What happens to the characteristic line wavelength?',
        questionAr: 'ماذا يحدث للطول الموجي للخط المميز K_α؟',
        optionsEn: [
          'It remains constant at 0.021 nm because characteristic lines depend solely on the atomic number Z of the target',
          'It decreases because the higher voltage compresses the electron orbitals',
          'It doubles because kinetic energy is proportional to voltage',
          'It shifts into the visible optical range',
        ],
        optionsAr: [
          'يظل ثابتاً تماماً عند 0.021 nm لأن الطيف المميز خاصية جوهرية لمادة الهدف تتوقف على العدد الذري Z فقط',
          'يقل لأن الجهد الأعلى يضغط مدارات الإلكترونات في الذرة',
          'يتضاعف لأن طاقة الحركة طردية مع فرق الجهد',
          'ينزاح إلى نطاق الضوء المرئي المنظور',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'Characteristic X-rays originate from electronic transitions between discrete atomic inner shells of target atoms (e.g. L → K). The transition energy ΔE = E_L - E_K is determined strictly by the target element atomic number Z. As long as eV exceeds the excitation threshold, increasing voltage increases the line intensity but does not alter its wavelength.',
        scientificExplanationAr:
          'الأشعة السينية المميزة تنتج من انتقال إلكترون من مستوى طاقة خارجي إلى فراغ في مستوى داخلي (مثل انتقال L إلى K). فرق الطاقة ΔE = E_L - E_K خاصية مميزة لنوع مادة الهدف وتتوقف على عدده الذري Z فقط. وطالما أن طاقة الإلكترونات كافية لإخراج إلكترون K، فإن زيادة الجهد تزيد من شدة الخط دون تغيير طوله الموجي إطلاقاً.',
      },
      {
        id: 'poe-ruby-optical-pump',
        titleEn: 'Optical Pumping Mechanism in the Ruby Laser',
        titleAr: 'آلية الضخ الضوئي في ليزر الياقوت الصلب',
        scenarioEn:
          'In Theodore Maiman\'s solid-state ruby laser, why is a high-power Xenon helical flash lamp used for pumping instead of applying an electric discharge directly across the ruby rod?',
        scenarioAr:
          'في ليزر الياقوت الصلب (أول ليزر ابتكره مايمان عام ١٩٦٠)، لماذا يُستخدم مصباح وميضي حلزوني من الزينون لإجراء الضخ بدلاً من تمرير تيار كهربي مباشر في قضيب الياقوت؟',
        questionEn: 'Why is optical pumping required for the ruby laser?',
        questionAr: 'لماذا يُستخدم الضخ الضوئي في ليزر الياقوت؟',
        optionsEn: [
          'Ruby (aluminum oxide Al₂O₃) is an electrical insulator, making direct electric discharge impossible',
          'Electric current would make the ruby rod magnetic and divert the photons',
          'The flash lamp cools the ruby crystal to absolute zero',
          'Photons from the lamp dissolve the chromium atoms inside the crystal',
        ],
        optionsAr: [
          'لأن الياقوت (أكسيد الألومنيوم Al₂O₃) مادة صلبة عازلة تماماً للكهرباء، فيستحيل تمرير تفريغ كهربي خلالها',
          'لأن التيار الكهربي يجعل الياقوت مغناطيساً يجذب الفوتونات ويحرفها',
          'لأن المصباح الوميضي يبرد بلورة الياقوت إلى الصفر المطلق',
          'لأن فوتونات المصباح تصهر ذرات الكروم داخل البلورة',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'Synthetic ruby consists of aluminum oxide (Al₂O₃) crystal doped with Cr³⁺ ions. As an ionic dielectric ceramic insulator, ruby cannot sustain an electrical discharge. Therefore, optical pumping with a high-intensity helical flash lamp (absorbing green and blue photons at ~550 nm and ~400 nm) is used to excite Cr³⁺ ions into their broad absorption bands, followed by rapid non-radiative relaxation into the metastable level (²E) with stimulated emission at 694.3 nm.',
        scientificExplanationAr:
          'الياقوت الصناعي عبارة عن بلورة من أكسيد الألومنيوم Al₂O₃ مطعمة بأيونات الكروم Cr³⁺، وهو مادة عازلة غير موصلة للتيار الكهربي نهائياً، لذا يستحيل إثارتها بالتفريغ الكهربي. وتُستخدم طاقة الضوء (الضخ الضوئي) عبر مصباح فلاش زينون قوي يحيط بالقضيب لامتصاص الضوء في النطاقين الأخضر والأزرق، فتهبط أيونات الكروم سريعاً إلى المستوى شبه المستقر (²E) لينطلق الليزر الأحمر المتماسك عند 694.3 nm.',
      },
    ],
    notebookConfig: {
      xLabelEn: 'Term Difference (1/n₁² - 1/n₂²)',
      xLabelAr: 'فرق مقلوب مربعات المستويات (1/n₁² - 1/n₂²)',
      xUnit: '',
      yLabelEn: 'Wavenumber (1/λ)',
      yLabelAr: 'العدد الموجي (1/λ)',
      yUnit: '×10⁷ m⁻¹',
      recommendedPointsCount: 5,
    },
    initialState: {
      laserOutputPowerMw: 0.0,
      isLasing: false,
      photonsCount: 0,
      rubyPulseIntensity: 0.0,
      xrayLambdaMinNm: 0.0248,
      xrayCharacteristicKaNm: 0.021,
    },
  };

  const lab = useVirtualLab({
    definition,
    onStep: (dt) => {
      const {
        systemMode,
        n1,
        n2,
        pumpPower,
        highVoltageDC,
        cavityAlignment,
        xrayVoltageKv,
        xrayTargetElement,
      } = lab.params;
      const sim = simRef.current;

      // 1. Bohr Mode Dynamics
      if (systemMode === 'bohr') {
        if (n2 <= n1) {
          lab.updateParam('n2', Math.min(6, n1 + 1));
        }

        if (n1 !== sim.lastN1 || n2 !== sim.lastN2) {
          sim.lastN1 = n1;
          sim.lastN2 = n2;
          sim.lastTransitionTime = 0;

          const e1 = -13.6 / (n1 * n1);
          const e2 = -13.6 / (n2 * n2);
          const deltaE = Math.max(0.1, e2 - e1);
          const lambda = HC_EV_NM / deltaE;
          const info = getSeriesInfo(n1, n2);

          sim.photons.push({
            x: 230,
            y: 160,
            vx: 180,
            vy: (Math.random() - 0.5) * 40,
            lambdaNm: lambda,
            colorHex: info.colorHex,
            phase: 0,
            active: true,
            mode: 'bohr',
          });
        }
        sim.orbitAngle += dt * (3.0 / Math.sqrt(n2));
      } else if (systemMode === 'laser_hene') {
        // 2. He-Ne Laser Dynamics
        sim.laserPhase = (sim.laserPhase + dt * 20) % (2 * Math.PI);
        const thresholdPower = 35;
        const maxAlignment = 1.5; // mrad
        const isLasing =
          highVoltageDC && pumpPower >= thresholdPower && cavityAlignment <= maxAlignment;

        let outputMw = 0;
        if (isLasing) {
          const powerFactor = (pumpPower - thresholdPower) / (100 - thresholdPower);
          const alignmentFactor = Math.max(0, 1 - Math.pow(cavityAlignment / maxAlignment, 2));
          outputMw = 5.0 * powerFactor * alignmentFactor;
        }

        lab.setSimState({
          laserOutputPowerMw: outputMw,
          isLasing,
          photonsCount: sim.photons.length,
          rubyPulseIntensity: 0,
          xrayLambdaMinNm: 0,
          xrayCharacteristicKaNm: 0,
        });

        // Spawn intracavity photons
        if (highVoltageDC && pumpPower > 20 && Math.random() < 0.4) {
          sim.photons.push({
            x: 90 + Math.random() * 300,
            y: 140 + (Math.random() - 0.5) * 20,
            vx: Math.random() > 0.5 ? 400 : -400,
            vy: 0,
            lambdaNm: 632.8,
            colorHex: '#ef4444',
            phase: Math.random() * Math.PI * 2,
            active: true,
            mode: 'laser',
          });
        }
      } else if (systemMode === 'laser_ruby') {
        // 3. Ruby Laser Dynamics
        if (sim.rubyPulseProgress > 0) {
          sim.rubyPulseProgress = Math.max(0, sim.rubyPulseProgress - dt * 2.2);
        }

        lab.setSimState({
          laserOutputPowerMw: sim.rubyPulseProgress * 10000,
          isLasing: sim.rubyPulseProgress > 0.05,
          photonsCount: 0,
          rubyPulseIntensity: sim.rubyPulseProgress,
          xrayLambdaMinNm: 0,
          xrayCharacteristicKaNm: 0,
        });
      } else if (systemMode === 'xray_coolidge') {
        // 4. Coolidge X-Ray Dynamics
        const lambdaMin = HC_EV_NM / (xrayVoltageKv * 1000); // in nm
        const target = XRAY_TARGETS[xrayTargetElement];

        lab.setSimState({
          laserOutputPowerMw: 0,
          isLasing: false,
          photonsCount: 0,
          rubyPulseIntensity: 0,
          xrayLambdaMinNm: lambdaMin,
          xrayCharacteristicKaNm: target.kAlphaNm,
        });

        // Electron ray bombardment particles
        if (sim.xrayElectrons.length < 24) {
          sim.xrayElectrons.push({
            x: 130,
            y: 155 + (Math.random() - 0.5) * 35,
            vx: 380 + Math.random() * 80,
            vy: (Math.random() - 0.5) * 15,
            progress: 0,
          });
        }

        for (let i = sim.xrayElectrons.length - 1; i >= 0; i--) {
          const el = sim.xrayElectrons[i];
          el.x += el.vx * dt;
          el.y += el.vy * dt;
          if (el.x > 360) {
            sim.xrayElectrons.splice(i, 1);
          }
        }
      }

      // Update active photons
      for (let i = sim.photons.length - 1; i >= 0; i--) {
        const p = sim.photons[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.phase += dt * 15;

        if (p.mode === 'laser') {
          if (p.x <= 85 && p.vx < 0) {
            p.vx = -p.vx;
          } else if (p.x >= 415 && p.vx > 0) {
            if (Math.random() < 0.85) {
              p.vx = -p.vx;
            } else {
              p.vx = 550;
            }
          }
        }

        if (p.x > 640 || p.x < 20 || p.y < 20 || p.y > 400) {
          sim.photons.splice(i, 1);
        }
      }
    },
  });

  const {
    systemMode,
    n1,
    n2,
    viewMode,
    bohrSpectrumType,
    pumpPower,
    highVoltageDC,
    cavityAlignment,
    rubyFlashEnergyJ,
    xrayVoltageKv,
    xrayFilamentCurrentA,
    xrayTargetElement,
  } = lab.params;

  // Trigger Flash Pulse on Ruby Laser
  const handleTriggerRubyFlash = () => {
    simRef.current.rubyPulseProgress = 1.0;
    setRubyFlashTrigger((c) => c + 1);
  };

  // Calculations for Bohr Mode
  const effectiveN1 = Math.min(n1, 5);
  const effectiveN2 = Math.max(effectiveN1 + 1, Math.min(n2, 6));

  const e1 = -13.6 / (effectiveN1 * effectiveN1);
  const e2 = -13.6 / (effectiveN2 * effectiveN2);
  const deltaE_eV = Math.max(0, e2 - e1);
  const deltaE_J = deltaE_eV * E_CHARGE;
  const lambda_nm = deltaE_eV > 0 ? HC_EV_NM / deltaE_eV : 0;
  const freq_14Hz = deltaE_eV > 0 ? deltaE_J / H_PLANCK / 1e14 : 0;
  const seriesInfo = getSeriesInfo(effectiveN1, effectiveN2);

  const termDiff = 1 / (effectiveN1 * effectiveN1) - 1 / (effectiveN2 * effectiveN2);
  const wavenumber_10_7_m = lambda_nm > 0 ? 100 / lambda_nm : 0;

  // Calculations for X-Ray
  const xrayLambdaMinNm = HC_EV_NM / (xrayVoltageKv * 1000);
  const currentTarget = XRAY_TARGETS[xrayTargetElement];
  const hasCharacteristicLines = xrayVoltageKv >= currentTarget.criticalKv;

  // Telemetry metrics per mode
  let telemetry: LabTelemetryMetric[] = [];
  if (systemMode === 'bohr') {
    telemetry = [
      {
        id: 'photon-energy',
        labelEn: 'Transition Energy (ΔE)',
        labelAr: 'طاقة الانتقال (ΔE)',
        symbolTex: '\\Delta E',
        value: deltaE_eV.toFixed(3),
        unit: 'eV',
        status: 'optimal',
        precision: 3,
      },
      {
        id: 'wavelength',
        labelEn: 'Spectral Wavelength (λ)',
        labelAr: 'الطول الموجي للطيف (λ)',
        symbolTex: '\\lambda',
        value: lambda_nm.toFixed(1),
        unit: 'nm',
        status: 'normal',
        precision: 1,
      },
      {
        id: 'frequency',
        labelEn: 'Photon Frequency (ν)',
        labelAr: 'تردد الفوتون (ν)',
        symbolTex: '\\nu',
        value: freq_14Hz.toFixed(2),
        unit: '×10¹⁴ Hz',
        status: 'normal',
        precision: 2,
      },
      {
        id: 'series-name',
        labelEn: 'Series & Dispersion',
        labelAr: 'المجموعة ونوع الطيف',
        symbolTex: '\\text{Series}',
        value: `${isArabic ? seriesInfo.nameAr : seriesInfo.nameEn}`,
        status: 'normal',
      },
    ];
  } else if (systemMode === 'laser_hene') {
    telemetry = [
      {
        id: 'laser-status',
        labelEn: 'Lasing Oscillation',
        labelAr: 'حالة التذبذب الليزري',
        symbolTex: '\\text{Status}',
        value: lab.simState.isLasing
          ? isArabic
            ? 'تضخيم نشط (ON)'
            : 'Lasing (ON)'
          : isArabic
          ? 'خامد (OFF)'
          : 'Quenched (OFF)',
        status: lab.simState.isLasing ? 'optimal' : 'alert',
      },
      {
        id: 'output-power',
        labelEn: 'Output Optical Power',
        labelAr: 'القدرة الضوئية الخارجة',
        symbolTex: 'P_{\\text{opt}}',
        value: lab.simState.laserOutputPowerMw.toFixed(2),
        unit: 'mW',
        status: lab.simState.isLasing ? 'optimal' : 'normal',
        precision: 2,
      },
      {
        id: 'inversion-status',
        labelEn: 'Population Inversion',
        labelAr: 'الإسكان المعكوس',
        symbolTex: 'N_2 / N_1',
        value: lab.simState.isLasing
          ? isArabic
            ? 'متحقق N₂ > N₁'
            : 'Achieved N₂ > N₁'
          : isArabic
          ? 'توازن حراري'
          : 'Thermal Eq.',
        status: lab.simState.isLasing ? 'optimal' : 'warning',
      },
      {
        id: 'cavity-alignment',
        labelEn: 'Mirror Tilt Angle',
        labelAr: 'زاوية حيود المرآة',
        symbolTex: '\\theta',
        value: cavityAlignment.toFixed(1),
        unit: 'mrad',
        status: cavityAlignment <= 1.5 ? 'normal' : 'alert',
        precision: 1,
      },
    ];
  } else if (systemMode === 'laser_ruby') {
    const isPulsing = simRef.current.rubyPulseProgress > 0.05;
    telemetry = [
      {
        id: 'ruby-pulse-status',
        labelEn: 'Laser Pulse State',
        labelAr: 'حالة نبضة الليزر',
        symbolTex: '\\text{State}',
        value: isPulsing
          ? isArabic
            ? 'نبضة عملاقة نشطة'
            : 'Giant Pulse Active'
          : isArabic
          ? 'شحن المكثف'
          : 'Capacitor Ready',
        status: isPulsing ? 'optimal' : 'normal',
      },
      {
        id: 'ruby-energy',
        labelEn: 'Flash Pump Energy',
        labelAr: 'طاقة فلاش الزينون',
        symbolTex: 'E_{\\text{pump}}',
        value: rubyFlashEnergyJ.toString(),
        unit: 'J',
        status: 'normal',
      },
      {
        id: 'ruby-wavelength',
        labelEn: 'Laser Emission Wavelength',
        labelAr: 'الطول الموجي لليزر',
        symbolTex: '\\lambda',
        value: '694.3',
        unit: 'nm',
        status: 'optimal',
      },
      {
        id: 'ruby-active-medium',
        labelEn: 'Active Ionic Center',
        labelAr: 'الوسط الفعال',
        symbolTex: 'Cr^{3+}\\text{ in } Al_2O_3',
        value: isArabic ? 'أيونات الكروم (٠٫٠٥٪)' : 'Cr³⁺ (0.05%)',
        status: 'normal',
      },
    ];
  } else {
    // xray_coolidge
    telemetry = [
      {
        id: 'xray-lambda-min',
        labelEn: 'Duane-Hunt Cutoff (λ_min)',
        labelAr: 'أقصر طول موجي (دوين-هنت)',
        symbolTex: '\\lambda_{\\min}',
        value: xrayLambdaMinNm.toFixed(4),
        unit: 'nm',
        status: 'optimal',
        precision: 4,
      },
      {
        id: 'xray-ke-max',
        labelEn: 'Max Kinetic Energy (eV)',
        labelAr: 'أقصى طاقة حركة للإلكترون',
        symbolTex: 'E_{\\max}',
        value: xrayVoltageKv.toFixed(1),
        unit: 'keV',
        status: 'normal',
        precision: 1,
      },
      {
        id: 'xray-target',
        labelEn: 'Anode Target & Z',
        labelAr: 'مادة الهدف والعدد الذري',
        symbolTex: 'Z',
        value: `${currentTarget.symbol} (Z = ${currentTarget.z})`,
        status: 'normal',
      },
      {
        id: 'xray-char-ka',
        labelEn: 'Characteristic K_α Peak',
        labelAr: 'الخط الخطي المميز K_α',
        symbolTex: '\\lambda_{K\\alpha}',
        value: hasCharacteristicLines
          ? `${currentTarget.kAlphaNm.toFixed(3)} nm`
          : isArabic
          ? 'غير مثار (V < V_c)'
          : 'Below V_c',
        status: hasCharacteristicLines ? 'optimal' : 'warning',
      },
    ];
  }

  // Multimeter reading
  const dmmReading: DMMReading = {
    voltageDC:
      systemMode === 'bohr'
        ? deltaE_eV
        : systemMode === 'laser_hene'
        ? lab.simState.isLasing
          ? lab.simState.laserOutputPowerMw * 0.5
          : 0.015
        : systemMode === 'laser_ruby'
        ? simRef.current.rubyPulseProgress * 4.8
        : xrayVoltageKv * 1000,
    voltageAC: 0.0,
    currentDC:
      systemMode === 'bohr'
        ? 0.001
        : systemMode === 'laser_hene'
        ? (lab.simState.laserOutputPowerMw / 5.0) * 0.005
        : systemMode === 'laser_ruby'
        ? simRef.current.rubyPulseProgress * 2.5
        : xrayFilamentCurrentA,
    resistance: 1000,
    continuityBeep: false,
  };

  // Oscilloscope Signals
  const oscCh1: WaveformSignal = {
    amplitude:
      systemMode === 'bohr'
        ? deltaE_eV / 2
        : systemMode === 'laser_hene'
        ? (lab.simState.laserOutputPowerMw / 5) * 4
        : systemMode === 'laser_ruby'
        ? simRef.current.rubyPulseProgress * 5
        : (xrayVoltageKv / 90) * 4,
    frequency: systemMode === 'bohr' ? 1000 : systemMode === 'xray_coolidge' ? 100 : 5000,
    phaseDeg: 0,
    type: systemMode === 'laser_ruby' ? 'triangle' : 'sine',
  };

  const oscCh2: WaveformSignal = {
    amplitude:
      systemMode === 'bohr'
        ? 1.5
        : systemMode === 'laser_hene'
        ? highVoltageDC
          ? (pumpPower / 100) * 3
          : 0
        : systemMode === 'xray_coolidge'
        ? (xrayFilamentCurrentA / 5.0) * 3
        : 2.0,
    frequency: 1000,
    phaseDeg: 90,
    type: 'sine',
  };

  // Canvas High-DPI Rendering
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    _viewport: LabViewportState,
    _dpr: number = 1,
    time: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    simRef.current.orbitAngle = (simRef.current.orbitAngle + 0.035) % (Math.PI * 2);
    simRef.current.laserPhase = (simRef.current.laserPhase + 0.18) % (Math.PI * 2);

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Deep laboratory background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
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
    ctx.fillRect(0, 0, width, height);

    // Alignment grid
    ctx.strokeStyle = isLight ? 'rgba(203, 213, 225, 0.6)' : 'rgba(30, 41, 59, 0.4)';
    ctx.lineWidth = 1;
    const gridStep = 40;
    for (let x = 0; x < width; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (systemMode === 'bohr') {
      renderBohrScene(ctx, width, height, t);
    } else if (systemMode === 'laser_hene') {
      renderHeNeLaserScene(ctx, width, height, t);
    } else if (systemMode === 'laser_ruby') {
      renderRubyLaserScene(ctx, width, height, t);
    } else {
      renderCoolidgeXRayScene(ctx, width, height, t);
    }

    ctx.restore();
  };

  /**
   * 1. BOHR ATOMIC TRANSITIONS & CONTINUOUS/ABSORPTION/FRAUNHOFER SPECTROGRAPH
   */
  const renderBohrScene = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const sim = simRef.current;

    if (viewMode === 'ladder') {
      const ladderLeft = 70;
      const ladderRight = width - 80;
      const ladderWidth = ladderRight - ladderLeft;

      const levelYMap: Record<number, number> = {
        1: height - 120,
        2: height - 190,
        3: height - 235,
        4: height - 265,
        5: height - 285,
        6: height - 300,
      };

      for (let n = 1; n <= 6; n++) {
        const y = levelYMap[n];
        const isSelectedLower = n === effectiveN1;
        const isSelectedUpper = n === effectiveN2;
        const isSelected = isSelectedLower || isSelectedUpper;
        const enEv = -13.6 / (n * n);

        ctx.strokeStyle = isSelectedLower
          ? '#38bdf8'
          : isSelectedUpper
          ? seriesInfo.colorHex
          : '#475569';
        ctx.lineWidth = n === 1 ? 3.5 : isSelected ? 2.5 : 1.5;

        ctx.beginPath();
        ctx.moveTo(ladderLeft, y);
        ctx.lineTo(ladderRight, y);
        ctx.stroke();

        ctx.fillStyle = isSelected
          ? isLight
            ? '#0f172a'
            : '#ffffff'
          : isLight
          ? '#334155'
          : '#94a3b8';
        ctx.font = isSelected ? 'bold 12px sans-serif' : '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`n = ${n}`, ladderLeft - 12, y + 4);

        ctx.textAlign = 'left';
        ctx.font = isSelected ? 'bold 11px monospace' : '10px monospace';
        ctx.fillStyle = isSelected
          ? isLight
            ? '#0369a1'
            : '#38bdf8'
          : isLight
          ? '#475569'
          : '#64748b';
        ctx.fillText(`${enEv.toFixed(2)} eV`, ladderRight + 12, y + 4);
      }

      // Ionization Level n = ∞
      const yIon = height - 315;
      ctx.strokeStyle = isLight ? 'rgba(100, 116, 139, 0.5)' : 'rgba(148, 163, 184, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(ladderLeft, yIon);
      ctx.lineTo(ladderRight, yIon);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('n = ∞', ladderLeft - 12, yIon + 4);
      ctx.textAlign = 'left';
      ctx.fillText('0.00 eV (Ionization)', ladderRight + 12, yIon + 4);

      // Downward quantum jump arrow (Emission) or Upward (Absorption)
      const transX = ladderLeft + ladderWidth * 0.45;
      const yUpper = levelYMap[effectiveN2];
      const yLower = levelYMap[effectiveN1];
      const isAbsorption = bohrSpectrumType === 'absorption';

      ctx.save();
      ctx.shadowColor = seriesInfo.colorHex;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = seriesInfo.colorHex;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(transX, isAbsorption ? yLower : yUpper);
      ctx.lineTo(transX, isAbsorption ? yUpper : yLower);
      ctx.stroke();

      // Arrow head
      ctx.fillStyle = seriesInfo.colorHex;
      ctx.beginPath();
      const targetY = isAbsorption ? yUpper : yLower;
      const dir = isAbsorption ? 1 : -1;
      ctx.moveTo(transX, targetY);
      ctx.lineTo(transX - 6, targetY + dir * 12);
      ctx.lineTo(transX + 6, targetY + dir * 12);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Electron at target level
      drawGlowingParticle(ctx, transX, targetY, 5, seriesInfo.colorHex, 14);

      // Emitted/Absorbed photon wave packet
      const waveStartX = transX + 15;
      const waveY = (yUpper + yLower) / 2;
      ctx.save();
      ctx.strokeStyle = seriesInfo.colorHex;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = seriesInfo.colorHex;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      for (let i = 0; i < 70; i++) {
        const wx = waveStartX + i;
        const wy = waveY + Math.sin(i * 0.25 - t * 15) * 8;
        if (i === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
      }
      ctx.stroke();

      drawGlowingParticle(ctx, waveStartX + 68, waveY + Math.sin(68 * 0.25 - t * 15) * 8, 4, seriesInfo.colorHex, 12);

      ctx.fillStyle = seriesInfo.colorHex;
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(
        `${isAbsorption ? 'h·ν (Absorbed)' : 'h·ν (Emitted)'} ${lambda_nm.toFixed(1)} nm`,
        waveStartX + 78,
        waveY + 4
      );
      ctx.restore();
    } else {
      // Concentric orbits
      const centerX = width / 2;
      const centerY = (height - 90) / 2 + 10;
      const maxRadius = Math.min(width, height - 120) * 0.42;

      ctx.save();
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 18;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#78350f';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+e', centerX, centerY + 4);
      ctx.restore();

      for (let n = 1; n <= 6; n++) {
        const r = maxRadius * (0.2 + 0.8 * ((n - 1) / 5));
        const isSelectedLower = n === effectiveN1;
        const isSelectedUpper = n === effectiveN2;
        const isSelected = isSelectedLower || isSelectedUpper;

        ctx.strokeStyle = isSelectedLower
          ? '#38bdf8'
          : isSelectedUpper
          ? seriesInfo.colorHex
          : isLight
          ? 'rgba(148, 163, 184, 0.6)'
          : 'rgba(71, 85, 105, 0.4)';
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.setLineDash(isSelected ? [] : [3, 4]);

        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = isSelected
          ? isLight
            ? '#0f172a'
            : '#ffffff'
          : isLight
          ? '#475569'
          : '#64748b';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`n=${n}`, centerX, centerY - r - 4);

        if (isSelectedUpper) {
          ctx.save();
          ctx.strokeStyle = `${seriesInfo.colorHex}66`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          const wavePoints = 120;
          for (let k = 0; k <= wavePoints; k++) {
            const theta = (k / wavePoints) * Math.PI * 2;
            const waveR = r + Math.sin(n * theta + sim.orbitAngle * 2) * 4;
            const wx = centerX + Math.cos(theta) * waveR;
            const wy = centerY + Math.sin(theta) * waveR;
            if (k === 0) ctx.moveTo(wx, wy);
            else ctx.lineTo(wx, wy);
          }
          ctx.stroke();
          ctx.restore();
        }
      }

      const rUpper = maxRadius * (0.2 + 0.8 * ((effectiveN2 - 1) / 5));
      const elX = centerX + Math.cos(sim.orbitAngle) * rUpper;
      const elY = centerY + Math.sin(sim.orbitAngle) * rUpper;
      drawGlowingParticle(ctx, elX, elY, 6, seriesInfo.colorHex, 16);
    }

    // Spectrograph Strip at bottom
    renderSpectrographBar(ctx, width, height);
  };

  /**
   * Continuous / Line Emission / Line Absorption / Fraunhofer Spectrograph Strip
   */
  const renderSpectrographBar = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const specLeft = 60;
    const specRight = width - 60;
    const specY = height - 55;
    const specHeight = 24;
    const specWidth = specRight - specLeft;

    ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
    ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(specLeft - 4, specY - 20, specWidth + 8, specHeight + 36, 8);
    ctx.fill();
    ctx.stroke();

    const titleText =
      bohrSpectrumType === 'emission'
        ? isArabic
          ? 'مطياف الانبعاث الخطي (خلفية مظلمة مع خطوط ملونة ساطعة)'
          : 'Line Emission Spectrograph (Dark Background with Discrete Bright Lines)'
        : bohrSpectrumType === 'absorption'
        ? isArabic
          ? 'مطياف الامتصاص الخطي (طيف مستمر مع خطوط مظلمة)'
          : 'Line Absorption Spectrograph (Continuous Spectrum with Dark Lines)'
        : isArabic
        ? 'طيف خطوط فرانهوفر الشمسية (امتصاص غازات الغلاف الشمسي)'
        : 'Solar Fraunhofer Absorption Lines (Solar Atmospheric Element Signatures)';

    ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(titleText, specLeft, specY - 6);

    const mapWavelengthToX = (lambda: number): number => {
      const minL = 100;
      const maxL = 1900;
      const norm = (Math.log(lambda) - Math.log(minL)) / (Math.log(maxL) - Math.log(minL));
      return specLeft + Math.max(0, Math.min(1, norm)) * specWidth;
    };

    if (bohrSpectrumType === 'emission') {
      // Dark strip for emission
      ctx.fillStyle = '#05070e';
      ctx.beginPath();
      ctx.roundRect(specLeft, specY, specWidth, specHeight, 4);
      ctx.fill();

      // Balmer 4 visible lines background
      const balmerLines = [
        { nm: 656.3, color: '#ef4444', label: 'H-α' },
        { nm: 486.1, color: '#06b6d4', label: 'H-β' },
        { nm: 434.0, color: '#3b82f6', label: 'H-γ' },
        { nm: 410.2, color: '#8b5cf6', label: 'H-δ' },
      ];

      for (const line of balmerLines) {
        const lx = mapWavelengthToX(line.nm);
        ctx.strokeStyle = `${line.color}55`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(lx, specY);
        ctx.lineTo(lx, specY + specHeight);
        ctx.stroke();
      }
    } else {
      // Continuous rainbow background for Absorption and Fraunhofer
      const specGrad = ctx.createLinearGradient(specLeft, specY, specRight, specY);
      specGrad.addColorStop(0.0, '#3b0764');
      specGrad.addColorStop(0.12, '#8b5cf6');
      specGrad.addColorStop(0.22, '#3b82f6');
      specGrad.addColorStop(0.32, '#06b6d4');
      specGrad.addColorStop(0.42, '#10b981');
      specGrad.addColorStop(0.55, '#f59e0b');
      specGrad.addColorStop(0.68, '#ef4444');
      specGrad.addColorStop(0.82, '#881337');
      specGrad.addColorStop(1.0, '#1e1b4b');

      ctx.fillStyle = specGrad;
      ctx.beginPath();
      ctx.roundRect(specLeft, specY, specWidth, specHeight, 4);
      ctx.fill();

      // Fraunhofer dark absorption notches
      if (bohrSpectrumType === 'fraunhofer') {
        for (const f of FRAUNHOFER_LINES) {
          const fx = mapWavelengthToX(f.nm);
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(fx, specY);
          ctx.lineTo(fx, specY + specHeight);
          ctx.stroke();

          ctx.fillStyle = isLight ? '#0f172a' : '#cbd5e1';
          ctx.font = 'bold 8px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(f.name, fx, specY + specHeight + 11);
        }
      }
    }

    // Highlight Current Transition Line
    if (lambda_nm > 0 && bohrSpectrumType !== 'fraunhofer') {
      const lineX = mapWavelengthToX(lambda_nm);
      const isAbs = bohrSpectrumType === 'absorption';

      ctx.save();
      ctx.shadowColor = isAbs ? '#000000' : seriesInfo.colorHex;
      ctx.shadowBlur = isAbs ? 0 : 14;
      ctx.strokeStyle = isAbs ? '#000000' : '#ffffff';
      ctx.lineWidth = isAbs ? 3.5 : 2.5;
      ctx.beginPath();
      ctx.moveTo(lineX, specY - 3);
      ctx.lineTo(lineX, specY + specHeight + 3);
      ctx.stroke();

      // Top indicator triangle pointer
      ctx.fillStyle = isAbs ? '#000000' : seriesInfo.colorHex;
      ctx.beginPath();
      ctx.moveTo(lineX, specY - 1);
      ctx.lineTo(lineX - 5, specY - 8);
      ctx.lineTo(lineX + 5, specY - 8);
      ctx.closePath();
      ctx.fill();

      // Bottom wavelength readout
      ctx.fillStyle = isAbs ? (isLight ? '#0f172a' : '#f8fafc') : seriesInfo.colorHex;
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        `${lambda_nm.toFixed(1)} nm ${isAbs ? '(Absorbed)' : ''}`,
        lineX,
        specY + specHeight + 22
      );
      ctx.restore();
    }
  };

  /**
   * 2. HE-NE GAS LASER CAVITY (632.8 nm)
   */
  const renderHeNeLaserScene = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const sim = simRef.current;
    const centerY = height / 2 - 25;

    const tubeLeft = 90;
    const tubeRight = width - 130;
    const tubeWidth = tubeRight - tubeLeft;
    const tubeHeight = 85;
    const tubeTop = centerY - tubeHeight / 2;

    // Glass envelope
    const tubeGrad = ctx.createLinearGradient(0, tubeTop, 0, tubeTop + tubeHeight);
    tubeGrad.addColorStop(0, 'rgba(51, 65, 85, 0.4)');
    tubeGrad.addColorStop(0.15, 'rgba(148, 163, 184, 0.2)');
    tubeGrad.addColorStop(0.5, isLight ? 'rgba(241, 245, 249, 0.95)' : 'rgba(15, 23, 42, 0.95)');
    tubeGrad.addColorStop(0.85, isLight ? 'rgba(241, 245, 249, 0.7)' : 'rgba(15, 23, 42, 0.7)');
    tubeGrad.addColorStop(1, 'rgba(51, 65, 85, 0.5)');

    ctx.fillStyle = tubeGrad;
    ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(tubeLeft, tubeTop, tubeWidth, tubeHeight, 10);
    ctx.fill();
    ctx.stroke();

    // Gas label
    ctx.fillStyle = isLight ? '#1e293b' : '#94a3b8';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic
        ? 'أنبوبة كوارتز (خليط 10:1 هيليوم ونيون تحت ضغط 0.6 مم زئبق)'
        : 'He-Ne Gas Resonator Tube (10:1 Mixture @ 0.6 mmHg)',
      tubeLeft + tubeWidth / 2,
      tubeTop - 15
    );

    // Electrodes wiring
    const anodeX = tubeLeft + 50;
    const cathodeX = tubeRight - 50;
    const electrodeY = tubeTop - 35;

    ctx.strokeStyle = isLight ? '#64748b' : '#475569';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(anodeX, tubeTop);
    ctx.lineTo(anodeX, electrodeY);
    ctx.lineTo(tubeLeft + tubeWidth * 0.4, electrodeY);
    ctx.moveTo(cathodeX, tubeTop);
    ctx.lineTo(cathodeX, electrodeY);
    ctx.lineTo(tubeLeft + tubeWidth * 0.6, electrodeY);
    ctx.stroke();

    // DC Power Supply Box
    const psBoxX = tubeLeft + tubeWidth * 0.4 - 15;
    const psBoxWidth = tubeWidth * 0.2 + 30;
    ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
    ctx.strokeStyle = highVoltageDC
      ? isLight
        ? '#0284c7'
        : '#06b6d4'
      : isLight
      ? '#cbd5e1'
      : '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(psBoxX, electrodeY - 14, psBoxWidth, 26, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = highVoltageDC
      ? isLight
        ? '#0369a1'
        : '#38bdf8'
      : isLight
      ? '#64748b'
      : '#64748b';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      highVoltageDC
        ? `${isArabic ? 'جهد عالي مستمر' : 'DC HV'} 1.5 kV (${pumpPower}%)`
        : isArabic
        ? 'المصدر متوقف'
        : 'HV OFF',
      psBoxX + psBoxWidth / 2,
      electrodeY + 3
    );

    // Plasma discharge
    if (highVoltageDC && pumpPower > 0) {
      const plasmaAlpha = (pumpPower / 100) * 0.65;
      const plasmaGrad = ctx.createRadialGradient(
        tubeLeft + tubeWidth / 2,
        centerY,
        20,
        tubeLeft + tubeWidth / 2,
        centerY,
        tubeWidth / 2
      );
      plasmaGrad.addColorStop(0, `rgba(244, 63, 94, ${plasmaAlpha})`);
      plasmaGrad.addColorStop(0.5, `rgba(239, 68, 68, ${plasmaAlpha * 0.7})`);
      plasmaGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');

      ctx.fillStyle = plasmaGrad;
      ctx.beginPath();
      ctx.roundRect(tubeLeft + 4, tubeTop + 4, tubeWidth - 8, tubeHeight - 8, 8);
      ctx.fill();
    }

    // Mirrors
    const r1X = tubeLeft - 14;
    drawMetallicCylinder(ctx, r1X, centerY - 55, 14, 110, 'steel', 'vertical');
    ctx.fillStyle = isLight ? '#1e293b' : '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R₁ = 99.9%', r1X + 7, centerY + 70);
    ctx.fillText(isArabic ? 'عاكسة تماماً' : 'Total Reflector', r1X + 7, centerY + 82);

    const r2X = tubeRight;
    ctx.save();
    ctx.translate(r2X + 7, centerY);
    ctx.rotate(cavityAlignment * 0.03);
    drawMetallicCylinder(ctx, -7, -55, 14, 110, 'brass', 'vertical');
    ctx.fillStyle = isLight ? '#1e293b' : '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R₂ = 98%', 0, 70);
    ctx.fillText(isArabic ? 'شبه منفذة' : 'Output Coupler', 0, 82);
    ctx.restore();

    // Standing wave & output beam
    if (lab.simState.isLasing) {
      ctx.save();
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 18;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(tubeLeft, centerY);
      ctx.lineTo(tubeRight, centerY);
      ctx.stroke();

      ctx.strokeStyle = isLight ? 'rgba(220, 38, 38, 0.85)' : 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const waveCount = 28;
      for (let k = 0; k <= waveCount; k++) {
        const wx = tubeLeft + (k / waveCount) * tubeWidth;
        const wy = centerY + Math.sin((k / waveCount) * Math.PI * 14 + t * 20) * 12;
        if (k === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
      }
      ctx.stroke();
      ctx.restore();

      const beamRight = width - 20;
      drawVolumetricBeam(ctx, tubeRight + 14, centerY, beamRight, centerY, '#ef4444', 3.5, 20);
      drawMetallicCylinder(ctx, beamRight - 8, centerY - 35, 12, 70, 'steel', 'vertical');
      drawGlowingParticle(ctx, beamRight - 2, centerY, 5, '#ffffff', 22);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        `λ = 632.8 nm (${lab.simState.laserOutputPowerMw.toFixed(2)} mW)`,
        (tubeRight + beamRight) / 2,
        centerY - 12
      );
    }

    // Photons
    for (const p of sim.photons) {
      if (p.mode !== 'laser') continue;
      drawGlowingParticle(ctx, p.x, p.y, 3.5, p.colorHex || '#ef4444', 10);
    }

    // Bottom 4-step card
    renderHeNeStepsCard(ctx, width, height);
  };

  const renderHeNeStepsCard = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const cardY = height - 70;
    const cardWidth = (width - 120) / 4;
    const steps = [
      {
        num: '1',
        titleEn: 'He Excitation',
        titleAr: 'إثارة الهيليوم',
        subEn: 'e⁻ collision (20.61 eV)',
        subAr: 'تصادم إلكترونات (20.61 eV)',
        color: '#38bdf8',
      },
      {
        num: '2',
        titleEn: 'Resonant Transfer',
        titleAr: 'نقل الطاقة بالرنين',
        subEn: 'He*(20.61) + Ne → Ne*(20.66)',
        subAr: 'تصادم رنيني بين He* و Ne',
        color: '#f59e0b',
      },
      {
        num: '3',
        titleEn: 'Population Inversion',
        titleAr: 'الإسكان المعكوس',
        subEn: 'Ne 3s metastable (N₂ > N₁)',
        subAr: 'تراكم ذرات Ne بالمستوى 3s',
        color: '#10b981',
      },
      {
        num: '4',
        titleEn: 'Stimulated Emission',
        titleAr: 'الانبعاث المستحث',
        subEn: 'Coherent 632.8 nm photon cascade',
        subAr: 'هبوط إلى 2p بشعاع 632.8 nm',
        color: '#ef4444',
      },
    ];

    for (let s = 0; s < 4; s++) {
      const step = steps[s];
      const sx = 60 + s * cardWidth;

      ctx.fillStyle = isLight ? '#ffffff' : '#0b1329';
      ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(sx + 4, cardY, cardWidth - 8, 55, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = step.color;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${step.num}. ${isArabic ? step.titleAr : step.titleEn}`, sx + 12, cardY + 18);

      ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
      ctx.font = '9px sans-serif';
      ctx.fillText(isArabic ? step.subAr : step.subEn, sx + 12, cardY + 36);
    }
  };

  /**
   * 3. MAIMAN RUBY SOLID-STATE LASER (694.3 nm)
   */
  const renderRubyLaserScene = (ctx: CanvasRenderingContext2D, width: number, height: number, _t: number) => {
    const centerY = height / 2 - 25;
    const rodLeft = 110;
    const rodRight = width - 150;
    const rodWidth = rodRight - rodLeft;
    const rodHeight = 46;
    const rodTop = centerY - rodHeight / 2;

    const pulseProgress = simRef.current.rubyPulseProgress;

    // Flash illumination bloom if pulsing
    if (pulseProgress > 0) {
      const flashGrad = ctx.createRadialGradient(
        rodLeft + rodWidth / 2,
        centerY,
        20,
        rodLeft + rodWidth / 2,
        centerY,
        width * 0.6
      );
      flashGrad.addColorStop(0, `rgba(255, 255, 255, ${pulseProgress * 0.9})`);
      flashGrad.addColorStop(0.3, `rgba(56, 189, 248, ${pulseProgress * 0.6})`);
      flashGrad.addColorStop(0.7, `rgba(244, 63, 94, ${pulseProgress * 0.3})`);
      flashGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = flashGrad;
      ctx.fillRect(0, 0, width, height);
    }

    // Cylindrical Pink Synthetic Ruby Rod (Al2O3:Cr3+)
    const rubyGrad = ctx.createLinearGradient(0, rodTop, 0, rodTop + rodHeight);
    rubyGrad.addColorStop(0, '#fda4af');
    rubyGrad.addColorStop(0.2, '#f43f5e');
    rubyGrad.addColorStop(0.5, '#be123c');
    rubyGrad.addColorStop(0.8, '#9f1239');
    rubyGrad.addColorStop(1, '#4c0519');

    ctx.fillStyle = rubyGrad;
    ctx.strokeStyle = '#e11d48';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(rodLeft, rodTop, rodWidth, rodHeight, 6);
    ctx.fill();
    ctx.stroke();

    // Rod specular reflection streak
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rodLeft + 6, rodTop + 6);
    ctx.lineTo(rodRight - 6, rodTop + 6);
    ctx.stroke();
    ctx.restore();

    // Helical Xenon Flash Tube Coiled around Ruby Rod
    const coilTurns = 12;
    const turnWidth = rodWidth / coilTurns;
    ctx.save();
    for (let c = 0; c < coilTurns; c++) {
      const cx = rodLeft + c * turnWidth;
      ctx.strokeStyle = pulseProgress > 0 ? '#38bdf8' : isLight ? '#94a3b8' : '#64748b';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.ellipse(cx + turnWidth / 2, centerY, turnWidth * 0.45, rodHeight * 0.65, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Inner flash highlight
      ctx.strokeStyle = pulseProgress > 0 ? '#ffffff' : 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();

    // Silvered Mirror Coatings on Ruby Rod End Faces
    // Back mirror: 100% Silvered (Left)
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(rodLeft - 6, rodTop - 4, 6, rodHeight + 8);
    ctx.fillStyle = isLight ? '#1e293b' : '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R₁ = 100%', rodLeft - 3, centerY + 45);
    ctx.fillText(isArabic ? 'فضية عاكسة تماماً' : 'Total Silvered', rodLeft - 3, centerY + 57);

    // Front mirror: 90% Semi-Silvered Output Coupler (Right)
    ctx.fillStyle = '#64748b';
    ctx.fillRect(rodRight, rodTop - 4, 6, rodHeight + 8);
    ctx.fillText('R₂ = 90%', rodRight + 3, centerY + 45);
    ctx.fillText(isArabic ? 'شبه منفذة' : 'Partial Silvered', rodRight + 3, centerY + 57);

    // Deep Red Coherent Output Beam (694.3 nm) when pulsing
    if (pulseProgress > 0.05) {
      const beamRight = width - 20;
      const beamAlpha = Math.min(1, pulseProgress * 1.5);
      ctx.save();
      ctx.shadowColor = '#e11d48';
      ctx.shadowBlur = 25;
      drawVolumetricBeam(
        ctx,
        rodRight + 6,
        centerY,
        beamRight,
        centerY,
        `rgba(225, 29, 72, ${beamAlpha})`,
        6,
        28
      );

      // Target screen
      drawMetallicCylinder(ctx, beamRight - 8, centerY - 35, 12, 70, 'steel', 'vertical');
      drawGlowingParticle(ctx, beamRight - 2, centerY, 6, '#ffffff', 25);
      ctx.restore();

      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`λ = 694.3 nm Deep Red (Maiman Laser Pulse)`, (rodRight + beamRight) / 2, centerY - 14);
    }

    // Labeling
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic
        ? 'قضيب الياقوت الصناعي (Al₂O₃:Cr³⁺) مع مصباح فلاش زينون حلزوني للضخ الضوئي'
        : 'Synthetic Pink Ruby Crystal Rod (Al₂O₃:Cr³⁺) with Helical Xenon Flash Tube',
      rodLeft + rodWidth / 2,
      rodTop - 25
    );

    // Bottom 3-Level Diagram Card
    renderRuby3LevelCard(ctx, width, height);
  };

  const renderRuby3LevelCard = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const cardY = height - 70;
    const cardWidth = (width - 120) / 3;
    const steps = [
      {
        num: '1',
        titleEn: 'Optical Pumping',
        titleAr: 'الضخ الضوئي',
        subEn: 'Xenon flash (400 & 550 nm) excites Cr³⁺ ground state ⁴A₂ → ⁴F bands',
        subAr: 'مصباح الزينون يثير أيونات الكروم من المستوى الأرضي ⁴A₂ إلى حزم ⁴F',
        color: '#38bdf8',
      },
      {
        num: '2',
        titleEn: 'Metastable Population',
        titleAr: 'تراكم الإسكان المعكوس',
        subEn: 'Fast non-radiative decay (~10⁻¹¹ s) to ²E metastable state (τ ≈ 3 ms)',
        subAr: 'هبوط سريع غير إشعاعي للمستوى شبه المستقر ²E (فترة عمره ٣ مللي ثانية)',
        color: '#f59e0b',
      },
      {
        num: '3',
        titleEn: 'Stimulated Cascade',
        titleAr: 'انبعاث مستحث متماسك',
        subEn: 'Stimulated emission ²E → ⁴A₂ yields coherent 694.3 nm deep red beam',
        subAr: 'هبوط مستحث من ²E إلى ⁴A₂ يُطلق فوتونات 694.3 nm متماسكة',
        color: '#e11d48',
      },
    ];

    for (let s = 0; s < 3; s++) {
      const step = steps[s];
      const sx = 60 + s * cardWidth;

      ctx.fillStyle = isLight ? '#ffffff' : '#0b1329';
      ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(sx + 4, cardY, cardWidth - 8, 55, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = step.color;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${step.num}. ${isArabic ? step.titleAr : step.titleEn}`, sx + 12, cardY + 18);

      ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
      ctx.font = '8px sans-serif';
      ctx.fillText(isArabic ? step.subAr : step.subEn, sx + 12, cardY + 36);
    }
  };

  /**
   * 4. COOLIDGE X-RAY TUBE & DUAL-SPECTRUM GRAPH (CONTINUOUS BREMSSTRAHLUNG & CHARACTERISTIC PEAKS)
   */
  const renderCoolidgeXRayScene = (ctx: CanvasRenderingContext2D, width: number, height: number, _t: number) => {
    const sim = simRef.current;
    const splitX = Math.round(width * 0.52);

    // LEFT HALF: Physical Coolidge Tube Apparatus
    const tubeW = splitX - 40;
    const tubeCenterX = 20 + tubeW / 2;
    const tubeCenterY = (height - 80) / 2 + 10;

    // Glass Bulb Envelope
    ctx.save();
    const bulbGrad = ctx.createRadialGradient(
      tubeCenterX,
      tubeCenterY,
      30,
      tubeCenterX,
      tubeCenterY,
      120
    );
    bulbGrad.addColorStop(0, isLight ? 'rgba(241, 245, 249, 0.9)' : 'rgba(15, 23, 42, 0.85)');
    bulbGrad.addColorStop(0.8, isLight ? 'rgba(226, 232, 240, 0.4)' : 'rgba(30, 41, 59, 0.4)');
    bulbGrad.addColorStop(1, isLight ? 'rgba(203, 213, 225, 0.8)' : 'rgba(71, 85, 105, 0.6)');

    ctx.fillStyle = bulbGrad;
    ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.lineWidth = 2.5;

    // Sphere bulb with horizontal necks
    ctx.beginPath();
    ctx.arc(tubeCenterX, tubeCenterY, 75, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cathode Neck (Left)
    ctx.fillRect(tubeCenterX - 130, tubeCenterY - 24, 70, 48);
    ctx.strokeRect(tubeCenterX - 130, tubeCenterY - 24, 70, 48);

    // Anode Neck (Right)
    ctx.fillRect(tubeCenterX + 60, tubeCenterY - 28, 70, 56);
    ctx.strokeRect(tubeCenterX + 60, tubeCenterY - 28, 70, 56);

    // Specular glass sheen
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(tubeCenterX, tubeCenterY, 65, Math.PI * 1.1, Math.PI * 1.6);
    ctx.stroke();
    ctx.restore();

    // Hot Cathode Filament & Focusing Cup (Left)
    const catX = tubeCenterX - 75;
    drawMetallicCylinder(ctx, catX - 18, tubeCenterY - 20, 14, 40, 'steel', 'vertical');

    // Filament golden thermal glow
    const filGlowAlpha = (xrayFilamentCurrentA / 5.0) * 0.9;
    ctx.save();
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 18;
    ctx.fillStyle = `rgba(251, 191, 36, ${filGlowAlpha})`;
    ctx.beginPath();
    ctx.arc(catX, tubeCenterY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = isLight ? '#1e293b' : '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Cathode (-)', catX - 5, tubeCenterY + 36);
    ctx.fillText(`I_f = ${xrayFilamentCurrentA.toFixed(1)} A`, catX - 5, tubeCenterY + 48);

    // Anode Target Block & Cooling Radiator Fins (Right)
    const targetX = tubeCenterX + 45;
    ctx.save();
    // Copper Stalk
    drawMetallicCylinder(ctx, targetX + 16, tubeCenterY - 14, 45, 28, 'copper', 'horizontal');

    // Cooling radiator fins
    for (let f = 0; f < 5; f++) {
      const fx = targetX + 35 + f * 7;
      ctx.fillStyle = '#b45309';
      ctx.fillRect(fx, tubeCenterY - 28, 4, 56);
    }

    // Angled Anode Face (45 deg bevel)
    ctx.fillStyle = '#d97706'; // copper block
    ctx.beginPath();
    ctx.moveTo(targetX, tubeCenterY - 26);
    ctx.lineTo(targetX + 18, tubeCenterY - 26);
    ctx.lineTo(targetX + 18, tubeCenterY + 26);
    ctx.lineTo(targetX - 8, tubeCenterY + 26);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Target Metal Plate on the face
    const targetColor =
      xrayTargetElement === 'tungsten'
        ? '#94a3b8'
        : xrayTargetElement === 'molybdenum'
        ? '#38bdf8'
        : '#ea580c';
    ctx.fillStyle = targetColor;
    ctx.beginPath();
    ctx.moveTo(targetX, tubeCenterY - 20);
    ctx.lineTo(targetX + 4, tubeCenterY - 20);
    ctx.lineTo(targetX - 4, tubeCenterY + 20);
    ctx.lineTo(targetX - 8, tubeCenterY + 20);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = isLight ? '#1e293b' : '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Target: ${currentTarget.symbol} (Z=${currentTarget.z})`, targetX + 12, tubeCenterY + 45);
    ctx.fillText(`Anode (+) ${xrayVoltageKv} kV`, targetX + 12, tubeCenterY + 57);

    // Electron rays streaming from Cathode to Target
    for (const el of sim.xrayElectrons) {
      drawGlowingParticle(ctx, el.x, el.y, 2.5, '#38bdf8', 8);
    }

    // X-Ray Cone emerging downward through lead collimator slit
    ctx.save();
    ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
    ctx.beginPath();
    ctx.moveTo(targetX - 2, tubeCenterY);
    ctx.lineTo(tubeCenterX - 25, tubeCenterY + 115);
    ctx.lineTo(tubeCenterX + 45, tubeCenterY + 115);
    ctx.closePath();
    ctx.fill();

    // Central ray
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(targetX - 2, tubeCenterY);
    ctx.lineTo(tubeCenterX + 10, tubeCenterY + 115);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Lead Aperture Window
    ctx.fillStyle = '#475569';
    ctx.fillRect(tubeCenterX - 35, tubeCenterY + 75, 20, 8);
    ctx.fillRect(tubeCenterX + 35, tubeCenterY + 75, 20, 8);
    ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Lead Shield Slit', tubeCenterX + 10, tubeCenterY + 82);

    // RIGHT HALF: REAL-TIME DUAL X-RAY SPECTRUM GRAPH (I vs λ)
    renderXRaySpectrumGraph(ctx, splitX + 15, 25, width - splitX - 35, height - 60);
  };

  /**
   * Continuous Bremsstrahlung curve + Sharp Characteristic Peaks
   */
  const renderXRaySpectrumGraph = (
    ctx: CanvasRenderingContext2D,
    gx: number,
    gy: number,
    gw: number,
    gh: number
  ) => {
    // Housing background
    ctx.fillStyle = isLight ? '#ffffff' : '#080d1a';
    ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(gx, gy, gw, gh, 8);
    ctx.fill();
    ctx.stroke();

    // Graph Title
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `طيف أشعة إكس: المستمر (الكبح) والخط المميز (هدف ${currentTarget.elementAr})`
        : `X-Ray Spectrum: Continuous & Characteristic (${currentTarget.elementEn} Target)`,
      gx + 12,
      gy + 18
    );

    // Plot area
    const plotLeft = gx + 42;
    const plotRight = gx + gw - 18;
    const plotBottom = gy + gh - 35;
    const plotTop = gy + 32;
    const plotW = plotRight - plotLeft;
    const plotH = plotBottom - plotTop;

    // Coordinate Axes
    ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(plotLeft, plotTop);
    ctx.lineTo(plotLeft, plotBottom);
    ctx.lineTo(plotRight, plotBottom);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic ? 'الطول الموجي λ (نانومتر)' : 'Wavelength λ (nm)',
      plotLeft + plotW / 2,
      plotBottom + 26
    );

    ctx.save();
    ctx.translate(gx + 12, plotTop + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(isArabic ? 'الشدة الإشعاعية (I)' : 'Relative Intensity (I)', 0, 0);
    ctx.restore();

    // Wavelength range: 0.00 nm to 0.20 nm
    const maxLambda = 0.2;
    const lambdaToPx = (l: number) => plotLeft + (l / maxLambda) * plotW;

    // Grid ticks: 0.05, 0.10, 0.15, 0.20 nm
    for (let tickL = 0.05; tickL <= maxLambda; tickL += 0.05) {
      const tx = lambdaToPx(tickL);
      ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(tx, plotTop);
      ctx.lineTo(tx, plotBottom);
      ctx.stroke();

      ctx.fillStyle = isLight ? '#64748b' : '#64748b';
      ctx.font = '8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(tickL.toFixed(2), tx, plotBottom + 12);
    }

    // Continuous Bremsstrahlung curve
    // Function: I_cont(lambda) = C * Z * ((lambda - lambdaMin) / lambdaMin^2) * e^(-k * lambda)
    const lambdaMin = xrayLambdaMinNm; // in nm
    ctx.save();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    let started = false;
    for (let px = plotLeft; px <= plotRight; px += 2) {
      const l = ((px - plotLeft) / plotW) * maxLambda;
      if (l < lambdaMin) {
        if (!started) {
          ctx.moveTo(px, plotBottom);
        } else {
          ctx.lineTo(px, plotBottom);
        }
      } else {
        // Bremsstrahlung shape formula
        const dL = l - lambdaMin;
        const normL = dL / (0.04 + lambdaMin * 0.5);
        const curve = normL * Math.exp(-normL) * 2.5; // peaks around 1.5 lambdaMin
        const py = plotBottom - Math.min(plotH * 0.65, curve * plotH * 0.65);
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
    }
    ctx.stroke();
    ctx.restore();

    // Duane-Hunt Minimum Cutoff Marker
    const cutX = lambdaToPx(lambdaMin);
    if (cutX >= plotLeft && cutX <= plotRight) {
      ctx.save();
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(cutX, plotTop);
      ctx.lineTo(cutX, plotBottom);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`λ_min = ${lambdaMin.toFixed(3)} nm`, cutX, plotTop + 10);
      ctx.restore();
    }

    // Characteristic Spectral Peaks (K_alpha & K_beta)
    if (hasCharacteristicLines) {
      const kaX = lambdaToPx(currentTarget.kAlphaNm);
      const kbX = lambdaToPx(currentTarget.kBetaNm);

      // K_alpha peak (taller)
      if (kaX >= plotLeft && kaX <= plotRight) {
        ctx.save();
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(kaX, plotBottom);
        ctx.lineTo(kaX, plotTop + 8);
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`K_α (${currentTarget.kAlphaNm.toFixed(3)} nm)`, kaX, plotTop - 2);
        ctx.restore();
      }

      // K_beta peak (slightly shorter)
      if (kbX >= plotLeft && kbX <= plotRight) {
        ctx.save();
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(kbX, plotBottom);
        ctx.lineTo(kbX, plotTop + plotH * 0.2);
        ctx.stroke();

        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 8px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`K_β`, kbX, plotTop + plotH * 0.2 - 4);
        ctx.restore();
      }
    }

    // Footnote explaining Duane-Hunt vs Characteristic physics
    ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic
        ? `• قانون دوين-هنت: λ_min يتناسب عكسياً مع فرق الجهد V ومستقل عن مادة الهدف Z`
        : `• Duane-Hunt Law: λ_min ∝ 1/V (independent of target element Z)`,
      plotLeft,
      gy + gh - 8
    );
  };

  /**
   * Records Bohr or Coolidge Point to Lab Notebook
   */
  const handleRecordPoint = () => {
    if (systemMode === 'bohr') {
      if (termDiff > 0 && wavenumber_10_7_m > 0) {
        lab.notebookState.logDataPoint(
          Number(termDiff.toFixed(5)),
          Number(wavenumber_10_7_m.toFixed(5)),
          isArabic
            ? `${seriesInfo.nameAr} (${effectiveN2}←${effectiveN1}، ${lambda_nm.toFixed(1)} نانومتر)`
            : `${seriesInfo.nameEn} (${effectiveN2}→${effectiveN1}, ${lambda_nm.toFixed(1)} nm)`
        );
      }
    } else if (systemMode === 'xray_coolidge') {
      const invV = 1 / (xrayVoltageKv * 1000);
      lab.notebookState.logDataPoint(
        Number(invV.toExponential(3)),
        Number(xrayLambdaMinNm.toFixed(4)),
        isArabic
          ? `أشعة إكس (V = ${xrayVoltageKv} kV، هدف ${currentTarget.elementAr})`
          : `X-Ray Duane-Hunt (V = ${xrayVoltageKv} kV, ${currentTarget.symbol} target)`
      );
    }
  };

  return (
    <VirtualLabShell
      definition={definition}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscCh1}
      oscilloscopeCh2={oscCh2}
      currentXValue={systemMode === 'bohr' ? termDiff : 1 / (xrayVoltageKv * 1000)}
      currentYValue={systemMode === 'bohr' ? wavenumber_10_7_m : xrayLambdaMinNm}
      onResetSimulation={() => {
        lab.resetParams();
        simRef.current.photons = [];
        simRef.current.rubyPulseProgress = 0;
      }}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* APPARATUS SELECTOR TABS */}
          <div
            className={`p-3 rounded-xl border space-y-2 ${
              isLight
                ? 'bg-white border-slate-200 shadow-xs'
                : isContrast
                ? 'bg-black border-white'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <label
              className={`text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                isLight ? 'text-cyan-900' : 'text-cyan-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'الجهاز التجريبي الفعال' : 'Active Physical System'}</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => lab.updateParam('systemMode', 'bohr')}
                className={`min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'bohr'
                    ? isLight
                      ? 'bg-cyan-600 text-white shadow-md font-black'
                      : 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Atom className="w-3.5 h-3.5" />
                <span>{isArabic ? 'أطياف بور' : 'Bohr Spectra'}</span>
              </button>
              <button
                onClick={() => lab.updateParam('systemMode', 'laser_hene')}
                className={`min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'laser_hene'
                    ? isLight
                      ? 'bg-rose-600 text-white shadow-md font-black'
                      : 'bg-red-500 text-white shadow-md shadow-red-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ليزر He-Ne' : 'He-Ne Laser'}</span>
              </button>
              <button
                onClick={() => lab.updateParam('systemMode', 'laser_ruby')}
                className={`min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'laser_ruby'
                    ? isLight
                      ? 'bg-rose-700 text-white shadow-md font-black'
                      : 'bg-pink-600 text-white shadow-md shadow-pink-600/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ليزر الياقوت' : 'Ruby Laser'}</span>
              </button>
              <button
                onClick={() => lab.updateParam('systemMode', 'xray_coolidge')}
                className={`min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'xray_coolidge'
                    ? isLight
                      ? 'bg-purple-600 text-white shadow-md font-black'
                      : 'bg-purple-500 text-slate-950 shadow-md shadow-purple-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{isArabic ? 'أشعة إكس كولدج' : 'Coolidge X-Ray'}</span>
              </button>
            </div>
          </div>

          {/* 1. BOHR ATOMIC CONTROLS */}
          {systemMode === 'bohr' && (
            <div
              className={`p-4 rounded-xl border space-y-4 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-xs'
                  : isContrast
                  ? 'bg-black border-white'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isLight ? 'text-cyan-900' : 'text-cyan-400'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'مستويات الانتقال الكمي' : 'Quantum Transitions'}</span>
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => lab.updateParam('viewMode', 'ladder')}
                    className={`min-h-[44px] min-w-[44px] px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all flex items-center justify-center ${
                      viewMode === 'ladder'
                        ? isLight
                          ? 'bg-cyan-600 text-white font-black shadow-xs'
                          : 'bg-cyan-500 text-slate-950 font-black'
                        : isLight
                        ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isArabic ? 'مخطط الطاقة' : 'Ladder'}
                  </button>
                  <button
                    onClick={() => lab.updateParam('viewMode', 'orbitals')}
                    className={`min-h-[44px] min-w-[44px] px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all flex items-center justify-center ${
                      viewMode === 'orbitals'
                        ? isLight
                          ? 'bg-cyan-600 text-white font-black shadow-xs'
                          : 'bg-cyan-500 text-slate-950 font-black'
                        : isLight
                        ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isArabic ? 'مدارات بور' : 'Orbits'}
                  </button>
                </div>
              </div>

              {/* Spectrum Dispersion Type: Emission / Absorption / Fraunhofer */}
              <div className="space-y-1.5">
                <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  {isArabic ? 'نوع الطيف المعروض بالمطياف:' : 'Spectrograph Dispersion Mode:'}
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => lab.updateParam('bohrSpectrumType', 'emission')}
                    className={`min-h-[40px] py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                      bohrSpectrumType === 'emission'
                        ? isLight
                          ? 'bg-cyan-600 text-white shadow-md'
                          : 'bg-cyan-500 text-slate-950 shadow-md'
                        : isLight
                        ? 'bg-white text-slate-700 border border-slate-300'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {isArabic ? 'انبعاث خطي' : 'Emission'}
                  </button>
                  <button
                    onClick={() => lab.updateParam('bohrSpectrumType', 'absorption')}
                    className={`min-h-[40px] py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                      bohrSpectrumType === 'absorption'
                        ? isLight
                          ? 'bg-cyan-600 text-white shadow-md'
                          : 'bg-cyan-500 text-slate-950 shadow-md'
                        : isLight
                        ? 'bg-white text-slate-700 border border-slate-300'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {isArabic ? 'امتصاص خطي' : 'Absorption'}
                  </button>
                  <button
                    onClick={() => lab.updateParam('bohrSpectrumType', 'fraunhofer')}
                    className={`min-h-[40px] py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                      bohrSpectrumType === 'fraunhofer'
                        ? isLight
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-amber-500 text-slate-950 shadow-md'
                        : isLight
                        ? 'bg-white text-slate-700 border border-slate-300'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {isArabic ? 'خطوط فرانهوفر' : 'Fraunhofer'}
                  </button>
                </div>
              </div>

              {/* Lower Level n1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'المستوى النهائي (n₁):' : 'Final Lower Level (n₁):'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-sky-800' : 'text-sky-400'}`}>
                    n₁ = {effectiveN1}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        lab.updateParam('n1', lvl);
                        if (effectiveN2 <= lvl) lab.updateParam('n2', lvl + 1);
                      }}
                      className={`min-h-[44px] py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center ${
                        effectiveN1 === lvl
                          ? isLight
                            ? 'bg-sky-600 text-white shadow-md'
                            : 'bg-sky-500 text-slate-950 shadow-md'
                          : isLight
                          ? 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                          : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upper Level n2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'المستوى الابتدائي المثار (n₂):' : 'Initial Excited (n₂):'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    n₂ = {effectiveN2}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[2, 3, 4, 5, 6].map((lvl) => (
                    <button
                      key={lvl}
                      disabled={lvl <= effectiveN1}
                      onClick={() => lab.updateParam('n2', lvl)}
                      className={`min-h-[44px] py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center ${
                        effectiveN2 === lvl
                          ? isLight
                            ? 'bg-cyan-600 text-white shadow-md'
                            : 'bg-cyan-500 text-slate-950 shadow-md'
                          : lvl <= effectiveN1
                          ? isLight
                            ? 'opacity-35 cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                            : 'opacity-25 cursor-not-allowed bg-slate-950 text-slate-600 border border-slate-900'
                          : isLight
                          ? 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 shadow-2xs font-bold'
                          : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Record Point to Lab Notebook Button */}
              <button
                onClick={handleRecordPoint}
                className={`w-full min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs ${
                  isLight
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm font-bold'
                    : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-white' : 'text-emerald-400'}`} />
                <span>
                  {isArabic
                    ? 'تسجيل النقطة في كشكول المعمل (لحساب ريدبرج R_H)'
                    : 'Record Point in Lab Notebook (R_H Regression)'}
                </span>
              </button>
            </div>
          )}

          {/* 2. HE-NE LASER CONTROLS */}
          {systemMode === 'laser_hene' && (
            <div
              className={`p-4 rounded-xl border space-y-4 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-xs'
                  : isContrast
                  ? 'bg-black border-white'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <span
                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-rose-900' : 'text-rose-400'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'محددات تشغيل ليزر He-Ne' : 'He-Ne Resonator Controls'}</span>
              </span>

              {/* HV Discharge Switch */}
              <div
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}
              >
                <span
                  className={`text-xs font-bold flex items-center gap-1.5 ${
                    isLight ? 'text-slate-900' : 'text-slate-200'
                  }`}
                >
                  <Zap
                    className={`w-3.5 h-3.5 ${
                      highVoltageDC ? (isLight ? 'text-amber-600' : 'text-amber-400') : 'text-slate-500'
                    }`}
                  />
                  <span>{isArabic ? 'مصدر الجهد العالي (HV):' : 'HV Power (1.5 kV):'}</span>
                </span>
                <button
                  onClick={() => lab.updateParam('highVoltageDC', !highVoltageDC)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-black cursor-pointer transition-all flex items-center justify-center ${
                    highVoltageDC
                      ? isLight
                        ? 'bg-rose-600 text-white shadow-md font-black'
                        : 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {highVoltageDC ? (isArabic ? 'تشغيل ON' : 'ACTIVE') : isArabic ? 'إيقاف OFF' : 'STANDBY'}
                </button>
              </div>

              {/* Pumping Power Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'شدة الضخ الكهربي:' : 'Pumping Power:'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-rose-800' : 'text-cyan-400'}`}>
                    {pumpPower}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={pumpPower}
                  disabled={!highVoltageDC}
                  onChange={(e) => lab.updateParam('pumpPower', Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer disabled:opacity-30"
                />
              </div>

              {/* Mirror Tilt Alignment Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'حيود زاوية المرآة (θ):' : 'Cavity Tilt (θ):'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    {cavityAlignment.toFixed(1)} mrad
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  value={cavityAlignment}
                  onChange={(e) => lab.updateParam('cavityAlignment', Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div
                  className={`flex justify-between text-[10px] ${
                    isLight ? 'text-slate-600 font-medium' : 'text-slate-500'
                  }`}
                >
                  <span>0.0 mrad ({isArabic ? 'مثالي' : 'Aligned'})</span>
                  <span className={isLight ? 'text-amber-700 font-bold' : 'text-amber-500'}>
                    1.5 mrad ({isArabic ? 'العتبة' : 'Threshold'})
                  </span>
                  <span>3.0 mrad ({isArabic ? 'فاقد' : 'Quenched'})</span>
                </div>
              </div>

              {/* Quick Calibrate Alignment */}
              {cavityAlignment > 0 && (
                <button
                  onClick={() => lab.updateParam('cavityAlignment', 0.0)}
                  className={`w-full min-h-[44px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs ${
                    isLight
                      ? 'bg-white border border-cyan-600 text-cyan-800 hover:bg-cyan-50 shadow-2xs font-bold'
                      : 'bg-slate-950 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'ضبط التوازي التام (θ = 0.0)' : 'Auto-Align Mirrors (θ = 0.0)'}</span>
                </button>
              )}
            </div>
          )}

          {/* 3. RUBY SOLID-STATE LASER CONTROLS */}
          {systemMode === 'laser_ruby' && (
            <div
              className={`p-4 rounded-xl border space-y-4 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-xs'
                  : isContrast
                  ? 'bg-black border-white'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <span
                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-rose-900' : 'text-rose-400'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{isArabic ? 'محددات ليزر الياقوت الصلب (مايمان)' : 'Maiman Ruby Laser Controls'}</span>
              </span>

              {/* Flash Energy Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'طاقة تفريغ فلاش الزينون:' : 'Xenon Flash Energy:'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-rose-800' : 'text-pink-400'}`}>
                    {rubyFlashEnergyJ} J
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={rubyFlashEnergyJ}
                  onChange={(e) => lab.updateParam('rubyFlashEnergyJ', Number(e.target.value))}
                  className="w-full accent-pink-600 cursor-pointer"
                />
              </div>

              {/* TRIGGER OPTICAL FLASH PULSE BUTTON */}
              <button
                onClick={handleTriggerRubyFlash}
                className={`w-full min-h-[48px] py-3 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95 ${
                  isLight
                    ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/30'
                    : 'bg-pink-600 hover:bg-pink-500 text-white shadow-pink-600/40'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-300" />
                <span>{isArabic ? 'إطلاق ومضة الضخ الضوئي (فلاش زينون)' : 'Trigger Optical Flash Pulse'}</span>
              </button>

              <div
                className={`p-3 rounded-xl border text-xs leading-relaxed ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}
              >
                <span className="font-bold block mb-1 text-pink-500">
                  {isArabic ? 'خصائص ليزر الياقوت (١٩٦٠):' : 'Ruby Laser Fundamentals:'}
                </span>
                {isArabic
                  ? 'يستخدم نظام الياقوت ٣ مستويات طاقة؛ حيث تمتص أيونات الكروم الضوء الأخضر والأزرق، ثم تهبط سريعاً للمستوى شبه المستقر (²E) بفترة عمر ٣ مللي ثانية لينطلق شعاع أحمر متماسك عند 694.3 nm.'
                  : 'Ruby operates as a 3-level laser; Cr³⁺ ions absorb green/blue flash photons, decay non-radiatively to the ²E metastable level (τ ≈ 3 ms), yielding pulsed 694.3 nm stimulated emission.'}
              </div>
            </div>
          )}

          {/* 4. COOLIDGE X-RAY TUBE CONTROLS */}
          {systemMode === 'xray_coolidge' && (
            <div
              className={`p-4 rounded-xl border space-y-4 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-xs'
                  : isContrast
                  ? 'bg-black border-white'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <span
                className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-purple-900' : 'text-purple-400'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{isArabic ? 'محددات تشغيل أنبوبة كولدج' : 'Coolidge X-Ray Controls'}</span>
              </span>

              {/* Anode Target Element Selector */}
              <div className="space-y-1.5">
                <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  {isArabic ? 'مادة الهدف (المصعد):' : 'Anode Target Material:'}
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['tungsten', 'molybdenum', 'copper'] as const).map((el) => (
                    <button
                      key={el}
                      onClick={() => lab.updateParam('xrayTargetElement', el)}
                      className={`min-h-[44px] py-2 px-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex flex-col items-center justify-center ${
                        xrayTargetElement === el
                          ? isLight
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-purple-500 text-slate-950 shadow-md'
                          : isLight
                          ? 'bg-white text-slate-700 border border-slate-300'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      <span>{XRAY_TARGETS[el].symbol}</span>
                      <span className="text-[10px] font-medium">
                        Z={XRAY_TARGETS[el].z}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accelerating High Voltage Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'فرق الجهد المعجل (V):' : 'Accelerating Voltage (V):'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    {xrayVoltageKv} kV
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  step="5"
                  value={xrayVoltageKv}
                  onChange={(e) => lab.updateParam('xrayVoltageKv', Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <div
                  className={`flex justify-between text-[10px] ${
                    isLight ? 'text-slate-600 font-medium' : 'text-slate-500'
                  }`}
                >
                  <span>15 kV</span>
                  <span className="font-mono">
                    λ_min = {xrayLambdaMinNm.toFixed(3)} nm
                  </span>
                  <span>90 kV</span>
                </div>
              </div>

              {/* Filament Current Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800 font-bold' : 'text-slate-300'}>
                    {isArabic ? 'تيار تسخين الفتيلة (I_f):' : 'Filament Heating Current:'}
                  </span>
                  <span className={`font-mono font-black ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    {xrayFilamentCurrentA.toFixed(1)} A
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="5.0"
                  step="0.1"
                  value={xrayFilamentCurrentA}
                  onChange={(e) => lab.updateParam('xrayFilamentCurrentA', Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Record Duane-Hunt Point to Notebook Button */}
              <button
                onClick={handleRecordPoint}
                className={`w-full min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs ${
                  isLight
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm font-bold'
                    : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40'
                }`}
              >
                <Target className={`w-3.5 h-3.5 ${isLight ? 'text-white' : 'text-purple-400'}`} />
                <span>
                  {isArabic
                    ? 'تسجيل نقطة دوين-هنت (λ_min مقابل 1/V)'
                    : 'Record Duane-Hunt Point (λ_min vs 1/V)'}
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="atomic-laser-viewport"
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
