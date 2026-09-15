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
  CheckCircle2,
  AlertCircle,
  Sliders,
  RotateCcw,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface AtomicLaserParams {
  systemMode: 'bohr' | 'laser';
  // Bohr Mode Parameters
  n1: number; // Lower level: 1 to 5
  n2: number; // Upper level: 2 to 6 (n2 > n1)
  viewMode: 'ladder' | 'orbitals';
  // He-Ne Laser Parameters
  pumpPower: number; // 0 to 100%
  highVoltageDC: boolean; // ON / OFF
  cavityAlignment: number; // mrad (0.0 to 3.0 mrad, threshold ~1.5 mrad)
}

interface AtomicLaserState {
  laserOutputPowerMw: number;
  isLasing: boolean;
  photonsCount: number;
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

  const simRef = useRef<{
    photons: PhotonPacket[];
    lastTransitionTime: number;
    orbitAngle: number;
    lastN1: number;
    lastN2: number;
    laserPhase: number;
    sparkGlow: number;
  }>({
    photons: [],
    lastTransitionTime: 0,
    orbitAngle: 0,
    lastN1: 2,
    lastN2: 3,
    laserPhase: 0,
    sparkGlow: 0,
  });

  const definition: LabDefinition<AtomicLaserParams, AtomicLaserState> = {
    id: 'bohr-laser-quantum',
    subject: 'physics',
    chapterRef: 'Ch. 6 & 7: Atomic Spectra & Lasers',
    titleEn: 'Bohr Hydrogen Spectra & He-Ne Laser Cavity Laboratory',
    titleAr: 'مختبر أطياف بور الذرية للهيدروجين وليزر الهيليوم-نيون',
    subtitleEn: 'Explore quantized atomic transitions, Rydberg constant determination, and optical cavity population inversion',
    subtitleAr: 'استكشاف الانتقالات الذرية المكممة، وتعيين ثابت ريدبرج، والإسكان المعكوس وتضخيم الليزر بالتجويف الرنيني',
    taglineEn: 'Bohr Quantum Model (1913) & Maiman / Javan Laser Resonators (1960)',
    taglineAr: 'نموذج بور الذري (١٩١٣) ومضخمات الليزر الرنينية (١٩٦٠)',
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
        id: 'obj-spectral-series',
        textEn: 'Distinguish the five hydrogen series (Lyman UV, Balmer Visible, Paschen NIR, Brackett IR, Pfund Far-IR)',
        textAr: 'التمييز بين متسلسلات طيف الهيدروجين الخمس (ليمان، بالمر، باشن، براكت، بفوند) ومدى كل منها',
      },
      {
        id: 'obj-laser-inversion',
        textEn: 'Demonstrate population inversion (N₂ > N₁) and threshold condition for stimulated emission in a 4-level He-Ne laser',
        textAr: 'إثبات حدوث الإسكان المعكوس (N₂ > N₁) وشرط العتبة للانبعاث المستحث في ليزر الهيليوم-نيون',
      },
      {
        id: 'obj-optical-cavity',
        textEn: 'Investigate the resonant cavity role (R₁ = 99.9%, R₂ = 98%) and alignment tolerance for coherent laser amplification',
        textAr: 'دراسة دور التجويف الرنيني ونسبة انعكاس المرآتين والتسامح الزاوي للتوازي في تضخيم الشعاع المتماسك',
      },
    ],
    defaultParams: {
      systemMode: 'bohr',
      n1: 2,
      n2: 3,
      viewMode: 'ladder',
      pumpPower: 85,
      highVoltageDC: true,
      cavityAlignment: 0.0,
    },
    paramSchema: {
      systemMode: {
        key: 'systemMode',
        type: 'select',
        defaultValue: 'bohr',
        options: [
          { value: 'bohr', labelEn: 'Bohr Hydrogen Atomic Spectra', labelAr: 'أطياف بور وانتقالات ذرة الهيدروجين' },
          { value: 'laser', labelEn: 'He-Ne Optical Laser Cavity', labelAr: 'تجويف ليزر الهيليوم-نيون الرنيني' },
        ],
        labelEn: 'Experimental Apparatus',
        labelAr: 'الجهاز التجريبي قيد التشغيل',
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
        visibleIf: (p) => p.systemMode === 'laser',
      },
      highVoltageDC: {
        key: 'highVoltageDC',
        type: 'boolean',
        defaultValue: true,
        labelEn: 'HV Power Supply (1.5 kV)',
        labelAr: 'مصدر الجهد العالي المستمر (1.5 kV)',
        category: 'primary',
        visibleIf: (p) => p.systemMode === 'laser',
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
        visibleIf: (p) => p.systemMode === 'laser',
      },
    },
    presets: [
      {
        id: 'preset-balmer-alpha',
        nameEn: 'Balmer H-α Red Line (656.3 nm, n=3 → n=2)',
        nameAr: 'خط بالمر H-α الأحمر (656.3 nm، انتقال 3 ← 2)',
        descriptionEn: 'The most prominent visible red emission line of atomic hydrogen in stellar nebulae',
        descriptionAr: 'أشهر وأوضح خطوط الطيف المنظور لذرة الهيدروجين في السدم والنجوم',
        params: {
          systemMode: 'bohr',
          n1: 2,
          n2: 3,
          viewMode: 'ladder',
        },
      },
      {
        id: 'preset-balmer-beta',
        nameEn: 'Balmer H-β Cyan Line (486.1 nm, n=4 → n=2)',
        nameAr: 'خط بالمر H-β السماوي (486.1 nm، انتقال 4 ← 2)',
        descriptionEn: 'Cyan visible transition line in the Balmer series',
        descriptionAr: 'خط الانتقال الأزرق المخضر (السماوي) في مجموعة بالمر',
        params: {
          systemMode: 'bohr',
          n1: 2,
          n2: 4,
          viewMode: 'ladder',
        },
      },
      {
        id: 'preset-lyman-alpha',
        nameEn: 'Lyman-α UV Transition (121.6 nm, n=2 → n=1)',
        nameAr: 'انتقال ليمان-ألفا فوق البنفسجي (121.6 nm، انتقال 2 ← 1)',
        descriptionEn: 'High-energy ultraviolet transition down to the hydrogen ground state (ΔE = 10.2 eV)',
        descriptionAr: 'انتقال فائق الطاقة في الأشعة فوق البنفسجية إلى المستوى الأرضي (10.2 eV)',
        params: {
          systemMode: 'bohr',
          n1: 1,
          n2: 2,
          viewMode: 'ladder',
        },
      },
      {
        id: 'preset-paschen-alpha',
        nameEn: 'Paschen-α Infrared (1875.1 nm, n=4 → n=3)',
        nameAr: 'خط باشن-ألفا تحت الأحمر (1875.1 nm، انتقال 4 ← 3)',
        descriptionEn: 'Near-infrared transition dropping into the third principal energy shell',
        descriptionAr: 'انتقال في نطاق الأشعة تحت الحمراء القريبة هبوطاً إلى المستوى الثالث',
        params: {
          systemMode: 'bohr',
          n1: 3,
          n2: 4,
          viewMode: 'ladder',
        },
      },
      {
        id: 'preset-laser-active',
        nameEn: 'He-Ne Laser 632.8 nm Coherent Oscillation',
        nameAr: 'انطلاق حزمة ليزر الهيليوم-نيون المتماسكة (632.8 nm)',
        descriptionEn: 'High-voltage electric discharge creates population inversion in Ne via resonant He collisions',
        descriptionAr: 'تفريغ كهربي عالي الجهد يحقق الإسكان المعكوس في النيون عبر تصادمات الهيليوم الرنينية',
        params: {
          systemMode: 'laser',
          pumpPower: 85,
          highVoltageDC: true,
          cavityAlignment: 0.0,
        },
      },
      {
        id: 'preset-laser-misaligned',
        nameEn: 'Cavity Misalignment Loss (Quenched Laser)',
        nameAr: 'فقد التوازي بالتجويف الرنيني (توقف الليزر)',
        descriptionEn: 'Tilting mirrors beyond threshold (θ > 1.5 mrad) causes round-trip loss to exceed gain',
        descriptionAr: 'انحراف زاوية المرآتين يسبب هروب الفوتونات وتوقف التضخيم المستحث',
        params: {
          systemMode: 'laser',
          pumpPower: 85,
          highVoltageDC: true,
          cavityAlignment: 2.2,
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
        id: 'rydberg-equation',
        tex: '\\bar{\\nu} = \\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad R_H \\approx 1.097\\times 10^7\\,\\text{m}^{-1}',
        labelEn: 'Rydberg Spectral Formula',
        labelAr: 'قانون ريدبرج لتعيين الأطوال الموجية',
      },
      {
        id: 'laser-condition',
        tex: 'N_2 > N_1 \\quad (\\tau_{\\text{metastable}} \\approx 10^{-3}\\,\\text{s} \\gg 10^{-8}\\,\\text{s})',
        labelEn: 'Population Inversion Condition',
        labelAr: 'شرط الإسكان المعكوس والحالة شبه المستقرة',
      },
      {
        id: 'cavity-resonance',
        tex: 'L = m\\,\\frac{\\lambda}{2}, \\quad R_1 = 99.9\\%, \\; R_2 = 98\\%',
        labelEn: 'Optical Cavity Standing Wave Condition',
        labelAr: 'شرط رنين التجويف والموجات الموقوفة',
      },
    ],
    poePrompts: [
      {
        id: 'poe-balmer-visible',
        titleEn: 'Spectral Series in the Visible Spectrum',
        titleAr: 'متسلسلات الطيف الذري في نطاق الضوء المرئي',
        scenarioEn:
          'When observing the emission spectrum of atomic hydrogen through an optical spectroscope, a student sees four distinct colored lines (Red, Cyan, Blue, Violet). Which spectral series is responsible for these visible lines, and what is the principal quantum number of its lower level?',
        scenarioAr:
          'عند فحص طيف انبعاث ذرة الهيدروجين بالمطياف البصري، يلاحظ الطالب أربعة خطوط ملونة مميزة (أحمر، سماوي، أزرق، بنفسجي). ما هي المجموعة الطيفية المسؤولة عن هذه الخطوط وما رقم المستوى الأدنى لها؟',
        questionEn: 'Which series produces visible light, and what is its lower level n₁?',
        questionAr: 'ما هي المجموعة المسؤولة وما رقم المستوى الأدنى (n₁)؟',
        optionsEn: [
          'Balmer series, with lower level n₁ = 2',
          'Lyman series, with lower level n₁ = 1',
          'Paschen series, with lower level n₁ = 3',
          'Pfund series, with lower level n₁ = 5',
        ],
        optionsAr: [
          'مجموعة بالمر، حيث المستوى الأدنى الذي تهبط إليه الإلكترونات هو n₁ = 2',
          'مجموعة ليمان، حيث المستوى الأدنى الذي تهبط إليه الإلكترونات هو n₁ = 1',
          'مجموعة باشن، حيث المستوى الأدنى الذي تهبط إليه الإلكترونات هو n₁ = 3',
          'مجموعة بفوند، حيث المستوى الأدنى الذي تهبط إليه الإلكترونات هو n₁ = 5',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'Transitions ending at n₁ = 2 (Balmer series) have energy differences between 1.89 eV (n=3→2, 656.3 nm) and 3.40 eV (series limit, 364.6 nm), exactly spanning the visible spectrum. Lyman transitions release high UV energy (ΔE > 10.2 eV), while Paschen, Brackett, and Pfund release lower energies situated in the infrared spectrum.',
        scientificExplanationAr:
          'الانتقالات التي تنتهي عند المستوى الثاني n₁ = 2 (مجموعة بالمر) تتراوح طاقاتها بين 1.89 إلكترون فولت (انتقال 3 إلى 2، 656.3 نانومتر) و3.40 إلكترون فولت، وهو النطاق الدقيق لطاقة فوتونات الضوء المرئي للإنسان. أما مجموعة ليمان فتقع في الأشعة فوق البنفسجية لطاقتها العالية (>10.2 eV)، وباقي المجموعات تقع في الأشعة تحت الحمراء.',
      },
      {
        id: 'poe-population-inversion',
        titleEn: 'Requirement of a Metastable State for Laser Action',
        titleAr: 'أهمية المستوى شبه المستقر لتحقيق الفعل الليزري',
        scenarioEn:
          'In ordinary atomic systems without a metastable state, atoms remain in excited levels for only ~10⁻⁸ s before spontaneous emission occurs. Why is a metastable state (lifetime ~10⁻³ s) indispensable for creating laser amplification?',
        scenarioAr:
          'في الذرات العادية، تمكث الإلكترونات في مستويات الإثارة لفترة قصيرة جداً (~10⁻⁸ ثانية) ثم تهبط تلقائياً. لماذا يعد المستوى شبه المستقر (فترة عمره ~10⁻³ ثانية) شرطاً جوهرياً لتشغيل الليزر؟',
        questionEn: 'Why is a metastable state required for laser action?',
        questionAr: 'لماذا يشترط وجود مستوى شبه مستقر لإنتاج الليزر؟',
        optionsEn: [
          'Its long lifetime allows excited atoms to accumulate faster than they decay, achieving Population Inversion (N₂ > N₁)',
          'It completely suppresses all spontaneous emission so no photons are wasted',
          'It eliminates the need for an external optical resonant cavity',
          'It increases the mass of the emitting electron to boost photon momentum',
        ],
        optionsAr: [
          'طول فترة عمره يسمح بتراكم الذرات المثارة بمعدل أكبر من هبوطها، فيتحقق الإسكان المعكوس (N₂ > N₁)',
          'لأنه يمنع حدوث أي انبعاث تلقائي تماماً وبنسبة 100%',
          'لأنه يلغي الحاجة إلى استخدام تجويف رنيني أو مرايا',
          'لأنه يضاعف كتلة الإلكترون لزيادة كمية حركة الفوتونات',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'Stimulated emission can only amplify light if the rate of stimulated emission exceeds the rate of absorption. By Einstein coefficients (B₁₂ = B₂₁), amplification requires N₂ > N₁ (population inversion). A metastable state has a lifetime ~100,000 times longer than ordinary levels, enabling atoms pumped into this level to accumulate in high density before decaying.',
        scientificExplanationAr:
          'لكي يحدث تضخيم للضوء، يجب أن يتفوق معدل الانبعاث المستحث على معدل الامتصاص. وبما أن معاملي آينشتاين للامتصاص والانبعاث المستحث متساويان (B₁₂ = B₂₁)، فإن التضخيم يشترط حتماً أن يكون عدد الذرات في مستوى الإثارة أكبر من عددها في المستوى الأدنى (N₂ > N₁، الإسكان المعكوس). المستوى شبه المستقر يمتلك فترة عمر طويلة نسبياً (~10⁻³ ثانية، أي أطول بنحو 100 ألف مرة) مما يسمح بتراكم الذرات فيه بكثافة عالية.',
      },
      {
        id: 'poe-he-ne-role',
        titleEn: 'The Strategic Role of Helium in the He-Ne Laser',
        titleAr: 'الدور الاستراتيجي لذرات الهيليوم في ليزر الهيليوم-نيون',
        scenarioEn:
          'The He-Ne laser contains 10 parts Helium to 1 part Neon. Since the coherent 632.8 nm laser transition occurs strictly between energy levels of Neon atoms, why is Helium added at such a high ratio?',
        scenarioAr:
          'يحتوي ليزر الهيليوم-نيون على خليط بنسبة 10 أجزاء هيليوم إلى جزء واحد نيون. وبما أن الانبعاث الليزري (632.8 نانومتر) يحدث حصرياً بين مستويات ذرات النيون، فلماذا يُضاف الهيليوم بهذه النسبة الكبيرة؟',
        questionEn: 'What is the physical role of Helium in this laser?',
        questionAr: 'ما هو الدور الفيزيائي الأساسي لذرات الهيليوم؟',
        optionsEn: [
          'He atoms are excited by electron collisions into a metastable state (20.61 eV) that resonantly transfers energy to Ne (20.66 eV) via inelastic collisions',
          'He atoms act solely as a thermal coolant to prevent the glass tube from melting',
          'He atoms emit the laser photons while Ne acts as the optical mirror',
          'He atoms absorb the laser beam to increase its coherence',
        ],
        optionsAr: [
          'تُثار ذرات الهيليوم بالتصادم مع الإلكترونات إلى مستوى شبه مستقر (20.61 eV) ينقل طاقته بالرنين لذرات النيون (20.66 eV) عبر التصادمات غير المرنة',
          'تعمل ذرات الهيليوم فقط كوسيط تبريد حراري لحماية الأنبوبة من الانصهار',
          'ذرات الهيليوم هي التي تشع فوتونات الليزر بينما يعمل النيون كمرآة عاكسة',
          'تمتص ذرات الهيليوم الأشعة لتنقية الضوء وزيادة درجة تماسكه',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'Direct electron impact excitation of Neon is inefficient and populates multiple non-inverting levels. Helium atoms, having a light mass and a high excitation cross-section, are easily excited to their metastable 2¹S level (20.61 eV). Due to the near-perfect energy resonance with the 3s₂ level of Neon (20.66 eV, difference only 0.05 eV compensated by thermal motion), collisions between He* and ground-state Ne selectively pump the Ne 3s level, establishing the required population inversion.',
        scientificExplanationAr:
          'إثارة ذرات النيون مباشرة بالتفريغ الكهربي غير كفؤة وتوزع الطاقة على مستويات متعددة تمنع الإسكان المعكوس. بينما تتميز ذرات الهيليوم بخفة كتلتها وسهولة إثارتها بالتصادم مع الإلكترونات السريعة إلى مستواها شبه المستقر (20.61 إلكترون فولت). وللتقارب الشديد بين طاقة هذا المستوى ومستوى الإثارة شبه المستقر في النيون (20.66 إلكترون فولت، بفرق 0.05 eV فقط تعوضه طاقة الحركة الحرارية)، تصطدم ذرات الهيليوم المثارة بذرات النيون غير المثارة تصادماً غير مرن فتنقل إليها طاقتها بالرنين محققة الإسكان المعكوس بكفاءة عالية.',
      },
      {
        id: 'poe-cavity-alignment',
        titleEn: 'Cavity Mirror Parallelism and Threshold Loss',
        titleAr: 'توازي مرآتي التجويف الرنيني وشرط التضخيم',
        scenarioEn:
          'The resonant cavity consists of a 99.9% high reflector mirror R₁ and a 98% output coupler mirror R₂. If mirror R₂ is misaligned by tilting it by 2.5 mrad, what happens to the laser output?',
        scenarioAr:
          'يتكون التجويف الرنيني من مرآة عاكسة تماماً R₁ بنسبة 99.9% ومرآة شبه منفذة R₂ بنسبة 98%. إذا حدث انحراف في توازي المرآة R₂ بمقدار 2.5 ملي راديان، فماذا يحدث لحزمة الليزر؟',
        questionEn: 'What happens to the laser emission when mirrors are misaligned?',
        questionAr: 'ماذا يحدث لانبعاث الليزر عند اختلال توازي المرآتين؟',
        optionsEn: [
          'Lasing stops completely because photons walk out laterally, causing round-trip cavity losses to exceed the active medium gain',
          'The laser output power doubles due to increased beam diameter',
          'The wavelength shifts from red (632.8 nm) to green (532 nm)',
          'The laser beam reflects back into the power supply and explodes',
        ],
        optionsAr: [
          'يتوقف انبعاث الليزر تماماً لأن الفوتونات تهرب جانبياً من التجويف فتتجاوز الخسائر مقدار التكبير (الكسب)',
          'تتضاعف قدرة الليزر مرتين نتيجة زيادة قطر الحزمة الضوئية',
          'يتغير الطول الموجي من الأحمر (632.8 nm) إلى الأخضر (532 nm)',
          'ترتد حزمة الليزر نحو مصدر الجهد مما يسبب احتراقه',
        ],
        correctOptionIndex: 0,
        scientificExplanationEn:
          'In a laser cavity, light must make hundreds of round trips between R₁ and R₂ to undergo continuous avalanche stimulated amplification. If the mirrors deviate from strict parallelism by more than the critical walk-off angle (~1.5 mrad), bouncing photons walk out of the tube before accumulating sufficient gain. When cavity losses exceed optical gain, laser oscillation quenches.',
        scientificExplanationAr:
          'في التجويف الرنيني، يجب أن تنعكس الفوتونات ذهاباً وإياباً مئات المرات بين المرآتين لإحداث تضخيم متسلسل بالانبعاث المستحث. إذا اختل توازي المرآتين بزاوية تفوق حد التسامح (~1.5 ملي راديان)، فإن الفوتونات تنحرف وتهرب من جدران الأنبوبة قبل أن تحقق التكبير الكافي. وعندما تتجاوز خسائر التجويف معامل الكسب في الوسط الفعال، يتوقف الليزر تماماً.',
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
    },
  };

  const lab = useVirtualLab({
    definition,
    onStep: (dt) => {
      const { systemMode, n1, n2, pumpPower, highVoltageDC, cavityAlignment } = lab.params;
      const sim = simRef.current;

      // Synchronize n1 and n2 so n2 > n1 always in Bohr mode
      if (systemMode === 'bohr') {
        if (n2 <= n1) {
          lab.updateParam('n2', Math.min(6, n1 + 1));
        }

        // Check if transition changed
        if (n1 !== sim.lastN1 || n2 !== sim.lastN2) {
          sim.lastN1 = n1;
          sim.lastN2 = n2;
          sim.lastTransitionTime = 0;

          // Spawn photon packet
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

        // Advance orbit angle
        sim.orbitAngle += dt * (3.0 / Math.sqrt(n2));
      } else {
        // Laser Mode Dynamics
        sim.laserPhase = (sim.laserPhase + dt * 20) % (2 * Math.PI);
        const thresholdPower = 35;
        const maxAlignment = 1.5; // mrad
        const isLasing =
          highVoltageDC &&
          pumpPower >= thresholdPower &&
          cavityAlignment <= maxAlignment;

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
        });

        // Spawn intracavity photons if active
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
      }

      // Update active photons
      for (let i = sim.photons.length - 1; i >= 0; i--) {
        const p = sim.photons[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.phase += dt * 15;

        if (p.mode === 'laser') {
          // Bounce between R1 (x=80) and R2 (x=420)
          if (p.x <= 85 && p.vx < 0) {
            p.vx = -p.vx; // Total reflector
          } else if (p.x >= 415 && p.vx > 0) {
            // 98% reflects back, 2% transmits out as laser beam
            if (Math.random() < 0.85) {
              p.vx = -p.vx;
            } else {
              // Exiting right
              p.vx = 550;
            }
          }
        }

        if (p.x > 600 || p.x < 20 || p.y < 20 || p.y > 380) {
          sim.photons.splice(i, 1);
        }
      }
    },
  });

  const { systemMode, n1, n2, viewMode, pumpPower, highVoltageDC, cavityAlignment } = lab.params;
  const isBohr = systemMode === 'bohr';

  // Calculations for Bohr Mode
  const effectiveN1 = Math.min(n1, 5);
  const effectiveN2 = Math.max(effectiveN1 + 1, Math.min(n2, 6));

  const e1 = -13.6 / (effectiveN1 * effectiveN1);
  const e2 = -13.6 / (effectiveN2 * effectiveN2);
  const deltaE_eV = Math.max(0, e2 - e1);
  const deltaE_J = deltaE_eV * E_CHARGE;
  const lambda_nm = deltaE_eV > 0 ? HC_EV_NM / deltaE_eV : 0;
  const freq_14Hz = deltaE_eV > 0 ? (deltaE_J / H_PLANCK) / 1e14 : 0;
  const seriesInfo = getSeriesInfo(effectiveN1, effectiveN2);

  // Wavenumber in units of 10^7 m^-1 for Notebook
  const termDiff = 1 / (effectiveN1 * effectiveN1) - 1 / (effectiveN2 * effectiveN2);
  const wavenumber_10_7_m = lambda_nm > 0 ? 100 / lambda_nm : 0;

  // Laser Mode Output & Threshold
  const isLasing = lab.simState.isLasing;
  const laserOutputMw = lab.simState.laserOutputPowerMw;

  // Multimeter reading
  const dmmReading: DMMReading = {
    voltageDC: isBohr ? deltaE_eV : isLasing ? laserOutputMw * 0.5 : 0.015,
    voltageAC: 0.0,
    currentDC: isBohr ? 0.001 : isLasing ? (laserOutputMw / 5.0) * 0.005 : 0.0,
    resistance: 1000,
    continuityBeep: false,
  };

  // Dual Trace Oscilloscope Waveforms
  const oscCh1: WaveformSignal = {
    amplitude: isBohr ? deltaE_eV / 2 : isLasing ? (laserOutputMw / 5) * 4 : 0.2,
    frequency: isBohr ? 1000 : 5000,
    phaseDeg: 0,
    type: 'sine',
  };

  const oscCh2: WaveformSignal = {
    amplitude: isBohr ? 1.5 : highVoltageDC ? (pumpPower / 100) * 3 : 0,
    frequency: isBohr ? 1000 : 5000,
    phaseDeg: 90,
    type: 'sine',
  };

  // Telemetry metrics
  const telemetry: LabTelemetryMetric[] = isBohr
    ? [
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
          labelEn: 'Emission Wavelength (λ)',
          labelAr: 'الطول الموجي (λ)',
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
          labelEn: 'Spectral Series',
          labelAr: 'المجموعة الطيفية',
          symbolTex: '\\text{Series}',
          value: isArabic ? seriesInfo.nameAr : seriesInfo.nameEn,
          status: 'normal',
        },
      ]
    : [
        {
          id: 'laser-status',
          labelEn: 'Lasing Oscillation',
          labelAr: 'حالة التذبذب الليزري',
          symbolTex: '\\text{Status}',
          value: isLasing
            ? (isArabic ? 'تضخيم نشط (ON)' : 'Lasing (ON)')
            : (isArabic ? 'خامد (OFF)' : 'Quenched (OFF)'),
          status: isLasing ? 'optimal' : 'alert',
        },
        {
          id: 'output-power',
          labelEn: 'Output Optical Power',
          labelAr: 'القدرة الضوئية الخارجة',
          symbolTex: 'P_{\\text{opt}}',
          value: laserOutputMw.toFixed(2),
          unit: 'mW',
          status: isLasing ? 'optimal' : 'normal',
          precision: 2,
        },
        {
          id: 'inversion-status',
          labelEn: 'Population Inversion',
          labelAr: 'الإسكان المعكوس',
          symbolTex: 'N_2 / N_1',
          value: isLasing
            ? (isArabic ? 'متحقق N₂ > N₁' : 'Achieved N₂ > N₁')
            : (isArabic ? 'توازن حراري' : 'Thermal Eq.'),
          status: isLasing ? 'optimal' : 'warning',
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

  // Canvas High-DPI Rendering
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    _viewport: LabViewportState,
    _dpr: number = 1,
    time: number = 0,
    _frame: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    simRef.current.orbitAngle = (simRef.current.orbitAngle + 0.035) % (Math.PI * 2);
    simRef.current.laserPhase = (simRef.current.laserPhase + 0.18) % (Math.PI * 2);

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Deep laboratory background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#020617');
    bgGrad.addColorStop(1, '#090d16');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Faint scientific alignment grid
    ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
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

    if (isBohr) {
      renderBohrScene(ctx, width, height, t);
    } else {
      renderLaserScene(ctx, width, height, t);
    }

    ctx.restore();
  };

  /**
   * Renders Bohr Atomic Transitions (Ladder or Concentric Orbits) + Spectrometer Bar
   */
  const renderBohrScene = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const sim = simRef.current;

    if (viewMode === 'ladder') {
      // 1. ENERGY LEVEL LADDER VIEW
      const ladderLeft = 70;
      const ladderRight = width - 80;
      const ladderWidth = ladderRight - ladderLeft;

      // Realistic non-linear energy scaling from n=1 (-13.6 eV) to n=6 (-0.38 eV)
      const levelYMap: Record<number, number> = {
        1: height - 120, // Ground state n=1
        2: height - 190, // n=2
        3: height - 235, // n=3
        4: height - 265, // n=4
        5: height - 285, // n=5
        6: height - 300, // n=6
      };

      // Draw horizontal energy levels n=1 to 6 + ionization limit n=∞
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

        // Level line
        ctx.beginPath();
        ctx.moveTo(ladderLeft, y);
        ctx.lineTo(ladderRight, y);
        ctx.stroke();

        // Level label left: n = X
        ctx.fillStyle = isSelected ? '#ffffff' : '#94a3b8';
        ctx.font = isSelected ? 'bold 12px sans-serif' : '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`n = ${n}`, ladderLeft - 12, y + 4);

        // Level energy right: -X.XX eV
        ctx.textAlign = 'left';
        ctx.font = isSelected ? 'bold 11px monospace' : '10px monospace';
        ctx.fillStyle = isSelected ? '#38bdf8' : '#64748b';
        ctx.fillText(`${enEv.toFixed(2)} eV`, ladderRight + 12, y + 4);
      }

      // Ionization Level n = ∞
      const yIon = height - 315;
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(ladderLeft, yIon);
      ctx.lineTo(ladderRight, yIon);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('n = ∞', ladderLeft - 12, yIon + 4);
      ctx.textAlign = 'left';
      ctx.fillText('0.00 eV (Ionization)', ladderRight + 12, yIon + 4);

      // Downward quantum jump arrow (from n2 to n1)
      const transX = ladderLeft + ladderWidth * 0.45;
      const yUpper = levelYMap[effectiveN2];
      const yLower = levelYMap[effectiveN1];

      // Glow behind downward transition arrow
      ctx.save();
      ctx.shadowColor = seriesInfo.colorHex;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = seriesInfo.colorHex;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(transX, yUpper);
      ctx.lineTo(transX, yLower);
      ctx.stroke();

      // Arrow head at lower level
      ctx.fillStyle = seriesInfo.colorHex;
      ctx.beginPath();
      ctx.moveTo(transX, yLower);
      ctx.lineTo(transX - 6, yLower - 12);
      ctx.lineTo(transX + 6, yLower - 12);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Pulsing initial electron at upper level
      const pulseR = 5 + Math.sin(t * 5) * 1.5;
      drawGlowingParticle(ctx, transX, yUpper, pulseR, seriesInfo.colorHex, 14);

      // Final electron rest at lower level
      drawGlowingParticle(ctx, transX, yLower, 4.5, '#38bdf8', 10);

      // Emitted photon sinusoidal wave packet traveling toward spectrometer
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

      // Glowing photon packet head particle
      drawGlowingParticle(
        ctx,
        waveStartX + 68,
        waveY + Math.sin(68 * 0.25 - t * 15) * 8,
        4,
        seriesInfo.colorHex,
        12
      );

      // Photon packet label
      ctx.fillStyle = seriesInfo.colorHex;
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`h·ν (${lambda_nm.toFixed(1)} nm)`, waveStartX + 78, waveY + 4);
      ctx.restore();
    } else {
      // 2. BOHR CONCENTRIC ORBITS & DE BROGLIE STANDING WAVES VIEW
      const centerX = width / 2;
      const centerY = (height - 90) / 2 + 10;
      const maxRadius = Math.min(width, height - 120) * 0.42;

      // Positive nucleus (+e proton)
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

      // Concentric orbital rings n=1 to 6
      for (let n = 1; n <= 6; n++) {
        // Scaled radius r_n = r0 * (0.2 + 0.8 * (n / 6))
        const r = maxRadius * (0.2 + 0.8 * ((n - 1) / 5));
        const isSelectedLower = n === effectiveN1;
        const isSelectedUpper = n === effectiveN2;
        const isSelected = isSelectedLower || isSelectedUpper;

        ctx.strokeStyle = isSelectedLower
          ? '#38bdf8'
          : isSelectedUpper
          ? seriesInfo.colorHex
          : 'rgba(71, 85, 105, 0.4)';
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.setLineDash(isSelected ? [] : [3, 4]);

        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbit label
        ctx.fillStyle = isSelected ? '#ffffff' : '#64748b';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`n=${n}`, centerX, centerY - r - 4);

        // De Broglie standing waves around upper selected level
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

      // Orbiting electron on initial upper orbit (n2)
      const rUpper = maxRadius * (0.2 + 0.8 * ((effectiveN2 - 1) / 5));
      const elX = centerX + Math.cos(sim.orbitAngle) * rUpper;
      const elY = centerY + Math.sin(sim.orbitAngle) * rUpper;

      drawGlowingParticle(ctx, elX, elY, 6, seriesInfo.colorHex, 16);

      // Quantum jump spiral trajectory to lower orbit (n1)
      const rLower = maxRadius * (0.2 + 0.8 * ((effectiveN1 - 1) / 5));
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, rLower, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // 3. PRECISION OPTICAL SPECTROMETER / DIFFRACTION GRATING STRIP
    const specLeft = 60;
    const specRight = width - 60;
    const specY = height - 55;
    const specHeight = 22;
    const specWidth = specRight - specLeft;

    // Background housing
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(specLeft - 4, specY - 18, specWidth + 8, specHeight + 32, 8);
    ctx.fill();
    ctx.stroke();

    // Spectrogram Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(
      isArabic ? 'مطياف الحيود البصري المستمر (١٠٠ - ٢٠٠٠ نانومتر)' : 'Diffraction Spectrograph Scale (100 - 2000 nm)',
      specLeft,
      specY - 6
    );

    // Continuous Spectral Gradient Strip
    const specGrad = ctx.createLinearGradient(specLeft, specY, specRight, specY);
    specGrad.addColorStop(0.0, '#3b0764'); // Far UV (< 350 nm)
    specGrad.addColorStop(0.12, '#8b5cf6'); // Violet (400 nm)
    specGrad.addColorStop(0.22, '#3b82f6'); // Blue (460 nm)
    specGrad.addColorStop(0.32, '#06b6d4'); // Cyan (500 nm)
    specGrad.addColorStop(0.42, '#10b981'); // Green (540 nm)
    specGrad.addColorStop(0.55, '#f59e0b'); // Yellow-Orange (590 nm)
    specGrad.addColorStop(0.68, '#ef4444'); // Red (650 nm)
    specGrad.addColorStop(0.82, '#881337'); // Deep Red / NIR (750 nm)
    specGrad.addColorStop(1.0, '#1e1b4b'); // IR (> 1000 nm)

    ctx.fillStyle = specGrad;
    ctx.beginPath();
    ctx.roundRect(specLeft, specY, specWidth, specHeight, 4);
    ctx.fill();

    // Calibration markers: 200nm, 400nm, 600nm, 800nm, 1200nm, 1800nm
    const calibTicks = [
      { nm: 121.6, label: 'Lyman-α' },
      { nm: 380, label: 'UV Limit' },
      { nm: 486.1, label: 'H-β' },
      { nm: 656.3, label: 'H-α' },
      { nm: 750, label: 'IR Limit' },
      { nm: 1875.1, label: 'Paschen-α' },
    ];

    // Log-like or piecewise mapping for full 100 to 2000 nm visibility
    const mapWavelengthToX = (lambda: number): number => {
      const minL = 90;
      const maxL = 2000;
      const norm = (Math.log(lambda) - Math.log(minL)) / (Math.log(maxL) - Math.log(minL));
      return specLeft + Math.max(0, Math.min(1, norm)) * specWidth;
    };

    // Draw faint tick marks for series lines
    for (const tick of calibTicks) {
      const tx = mapWavelengthToX(tick.nm);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(tx, specY);
      ctx.lineTo(tx, specY + specHeight);
      ctx.stroke();

      ctx.fillStyle = '#64748b';
      ctx.font = '8px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(tick.label, tx, specY + specHeight + 10);
    }

    // Prominent Glowing Spectral Line of Current Transition
    if (lambda_nm > 0) {
      const lineX = mapWavelengthToX(lambda_nm);

      ctx.save();
      ctx.shadowColor = seriesInfo.colorHex;
      ctx.shadowBlur = 14;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(lineX, specY - 3);
      ctx.lineTo(lineX, specY + specHeight + 3);
      ctx.stroke();

      // Top indicator triangle pointer
      ctx.fillStyle = seriesInfo.colorHex;
      ctx.beginPath();
      ctx.moveTo(lineX, specY - 1);
      ctx.lineTo(lineX - 5, specY - 8);
      ctx.lineTo(lineX + 5, specY - 8);
      ctx.closePath();
      ctx.fill();

      // Bottom wavelength readout
      ctx.fillStyle = seriesInfo.colorHex;
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${lambda_nm.toFixed(1)} nm`, lineX, specY + specHeight + 22);
      ctx.restore();
    }
  };

  /**
   * Renders He-Ne Gas Laser Cavity with Plasma Glow, Standing Waves & Stimulated Beams
   */
  const renderLaserScene = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    const sim = simRef.current;
    const centerY = height / 2 - 25;

    const tubeLeft = 90;
    const tubeRight = width - 130;
    const tubeWidth = tubeRight - tubeLeft;
    const tubeHeight = 85;
    const tubeTop = centerY - tubeHeight / 2;

    // 1. Quartz Discharge Tube Body with realistic 3D glass caustics
    const tubeGrad = ctx.createLinearGradient(0, tubeTop, 0, tubeTop + tubeHeight);
    tubeGrad.addColorStop(0, 'rgba(51, 65, 85, 0.45)');
    tubeGrad.addColorStop(0.15, 'rgba(148, 163, 184, 0.2)');
    tubeGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.95)');
    tubeGrad.addColorStop(0.85, 'rgba(15, 23, 42, 0.7)');
    tubeGrad.addColorStop(1, 'rgba(51, 65, 85, 0.5)');

    ctx.fillStyle = tubeGrad;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(tubeLeft, tubeTop, tubeWidth, tubeHeight, 10);
    ctx.fill();
    ctx.stroke();

    // Specular glass reflection arc
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(tubeLeft + 12, tubeTop + 6);
    ctx.lineTo(tubeRight - 12, tubeTop + 6);
    ctx.stroke();
    ctx.restore();

    // Gas label
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic
        ? 'أنبوبة كوارتز (خليط 10:1 هيليوم ونيون تحت ضغط 0.6 مم زئبق)'
        : 'He-Ne Gas Resonator Tube (10:1 Mixture @ 0.6 mmHg)',
      tubeLeft + tubeWidth / 2,
      tubeTop - 15
    );

    // 2. High Voltage Electrodes & Glow
    const anodeX = tubeLeft + 50;
    const cathodeX = tubeRight - 50;
    const electrodeY = tubeTop - 35;

    // Electrodes wiring
    ctx.strokeStyle = '#475569';
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
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = highVoltageDC ? '#06b6d4' : '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(psBoxX, electrodeY - 14, psBoxWidth, 26, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = highVoltageDC ? '#38bdf8' : '#64748b';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      highVoltageDC
        ? `${isArabic ? 'جهد عالي مستمر' : 'DC HV'} 1.5 kV (${pumpPower}%)`
        : (isArabic ? 'المصدر متوقف' : 'HV OFF'),
      psBoxX + psBoxWidth / 2,
      electrodeY + 3
    );

    // 3. Plasma Discharge Inside Tube
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

    // 4. Optical Cavity Mirrors
    // Left Mirror R1: Total Reflector 99.9% (Steel metallic cylinder)
    const r1X = tubeLeft - 14;
    drawMetallicCylinder(ctx, r1X, centerY - 55, 14, 110, 'steel', 'vertical');

    // Mirror face dielectric reflection
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillRect(r1X + 11, centerY - 50, 2, 100);
    ctx.restore();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R₁ = 99.9%', r1X + 7, centerY + 70);
    ctx.fillText(isArabic ? 'عاكسة تماماً' : 'Total Reflector', r1X + 7, centerY + 82);

    // Right Mirror R2: Output Coupler 98% (tilted slightly if misaligned)
    const r2X = tubeRight;
    ctx.save();
    ctx.translate(r2X + 7, centerY);
    ctx.rotate(cavityAlignment * 0.03); // visualize tilt
    drawMetallicCylinder(ctx, -7, -55, 14, 110, 'brass', 'vertical');

    // Partial reflection sheen
    ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.fillRect(-6, -50, 2, 100);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R₂ = 98%', 0, 70);
    ctx.fillText(isArabic ? 'شبه منفذة' : 'Output Coupler', 0, 82);
    ctx.restore();

    // 5. Intracavity Coherent Standing Wave & Photons
    if (isLasing) {
      // Standing wave lines
      ctx.save();
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 18;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;

      // Central coherent beam
      ctx.beginPath();
      ctx.moveTo(tubeLeft, centerY);
      ctx.lineTo(tubeRight, centerY);
      ctx.stroke();

      // Longitudinal standing wave envelope
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
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

      // Output Collimated Coherent Beam (Exiting right through R2)
      const beamRight = width - 20;
      drawVolumetricBeam(ctx, tubeRight + 14, centerY, beamRight, centerY, '#ef4444', 3.5, 20);

      // Target Optical Detector Screen on far right
      drawMetallicCylinder(ctx, beamRight - 8, centerY - 35, 12, 70, 'steel', 'vertical');

      // Gaussian Spot on Screen
      drawGlowingParticle(ctx, beamRight - 2, centerY, 5, '#ffffff', 22);

      // Beam Wavelength & Power Banner
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        `λ = 632.8 nm (${laserOutputMw.toFixed(2)} mW)`,
        (tubeRight + beamRight) / 2,
        centerY - 12
      );
    }

    // 6. Photons Streaming Back and Forth with glowing flare
    for (const p of sim.photons) {
      if (p.mode !== 'laser') continue;
      drawGlowingParticle(ctx, p.x, p.y, 3.5, p.colorHex || '#ef4444', 10);
    }

    // 7. He-Ne 4-Level Step Pipeline Card at Bottom
    const cardY = height - 70;
    const cardWidth = (width - 120) / 4;
    const steps = [
      {
        num: '1',
        titleEn: 'He Excitation',
        titleAr: 'إثارة الهيليوم',
        subEn: 'Inelastic e⁻ collision (20.61 eV)',
        subAr: 'تصادم إلكترونات سريعة (20.61 eV)',
        color: '#38bdf8',
      },
      {
        num: '2',
        titleEn: 'Resonant Transfer',
        titleAr: 'نقل الطاقة بالرنين',
        subEn: 'He*(20.61) + Ne → Ne*(20.66)',
        subAr: 'تصادم رنيني بين ذرات He* و Ne',
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
        subAr: 'هبوط إلى 2p بشعاع 632.8 nm متماسك',
        color: '#ef4444',
      },
    ];

    for (let s = 0; s < 4; s++) {
      const step = steps[s];
      const sx = 60 + s * cardWidth;

      ctx.fillStyle = '#0b1329';
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(sx + 4, cardY, cardWidth - 8, 55, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = step.color;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${step.num}. ${isArabic ? step.titleAr : step.titleEn}`, sx + 12, cardY + 18);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px sans-serif';
      ctx.fillText(isArabic ? step.subAr : step.subEn, sx + 12, cardY + 36);
    }
  };

  /**
   * Records Current Bohr Transition into the Lab Notebook for Rydberg Linear Regression
   */
  const handleRecordBohrPoint = () => {
    if (termDiff > 0 && wavenumber_10_7_m > 0) {
      lab.notebookState.logDataPoint(
        Number(termDiff.toFixed(5)),
        Number(wavenumber_10_7_m.toFixed(5)),
        isArabic
          ? `${seriesInfo.nameAr} (${effectiveN2}←${effectiveN1}، ${lambda_nm.toFixed(1)} نانومتر)`
          : `${seriesInfo.nameEn} (${effectiveN2}→${effectiveN1}, ${lambda_nm.toFixed(1)} nm)`
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
      currentXValue={termDiff}
      currentYValue={wavenumber_10_7_m}
      onResetSimulation={() => {
        lab.resetParams();
        simRef.current.photons = [];
      }}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* SYSTEM MODE TOGGLE */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <label className="text-[11px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'النظام التجريبي الفعال' : 'Active Physical System'}</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => lab.updateParam('systemMode', 'bohr')}
                className={`py-2 px-3 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'bohr'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Atom className="w-3.5 h-3.5" />
                <span>{isArabic ? 'أطياف بور' : 'Bohr Spectra'}</span>
              </button>
              <button
                onClick={() => lab.updateParam('systemMode', 'laser')}
                className={`py-2 px-3 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  systemMode === 'laser'
                    ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ليزر He-Ne' : 'He-Ne Laser'}</span>
              </button>
            </div>
          </div>

          {/* BOHR ATOMIC CONTROLS */}
          {isBohr && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'مستويات الانتقال الكمي' : 'Quantum Transitions'}</span>
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => lab.updateParam('viewMode', 'ladder')}
                    className={`px-2 py-1 rounded text-[10px] font-bold cursor-pointer transition-all ${
                      viewMode === 'ladder'
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isArabic ? 'مخطط الطاقة' : 'Ladder'}
                  </button>
                  <button
                    onClick={() => lab.updateParam('viewMode', 'orbitals')}
                    className={`px-2 py-1 rounded text-[10px] font-bold cursor-pointer transition-all ${
                      viewMode === 'orbitals'
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isArabic ? 'مدارات بور' : 'Orbits'}
                  </button>
                </div>
              </div>

              {/* Lower Level n1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isArabic ? 'المستوى النهائي (n₁):' : 'Final Lower Level (n₁):'}</span>
                  <span className="font-mono text-sky-400 font-black">n₁ = {effectiveN1}</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        lab.updateParam('n1', lvl);
                        if (effectiveN2 <= lvl) lab.updateParam('n2', lvl + 1);
                      }}
                      className={`py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                        effectiveN1 === lvl
                          ? 'bg-sky-500 text-slate-950'
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
                  <span className="text-slate-300">{isArabic ? 'المستوى الابتدائي المثار (n₂):' : 'Initial Excited (n₂):'}</span>
                  <span className="font-mono text-cyan-400 font-black">n₂ = {effectiveN2}</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {[2, 3, 4, 5, 6].map((lvl) => (
                    <button
                      key={lvl}
                      disabled={lvl <= effectiveN1}
                      onClick={() => lab.updateParam('n2', lvl)}
                      className={`py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                        effectiveN2 === lvl
                          ? 'bg-cyan-500 text-slate-950'
                          : lvl <= effectiveN1
                          ? 'opacity-25 cursor-not-allowed bg-slate-950 text-slate-600 border border-slate-900'
                          : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Series Badge */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-slate-400">
                    {isArabic ? 'السلسلة الطيفية' : 'Spectral Series'}
                  </span>
                  <span
                    className="text-xs font-black px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${seriesInfo.colorHex}22`, color: seriesInfo.colorHex }}
                  >
                    {isArabic ? seriesInfo.nameAr : seriesInfo.nameEn}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400">{isArabic ? 'نطاق الإشعاع:' : 'Radiation Band:'}</span>
                  <span className="text-slate-200">{isArabic ? seriesInfo.regionAr : seriesInfo.regionEn}</span>
                </div>
              </div>

              {/* Record Point to Lab Notebook Button */}
              <button
                onClick={handleRecordBohrPoint}
                className="w-full py-2 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-black flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isArabic
                    ? 'تسجيل النقطة في كشكول المعمل (لحساب ريدبرج)'
                    : 'Record Point in Lab Notebook (R_H Regression)'}
                </span>
              </button>
            </div>
          )}

          {/* LASER CONTROLS */}
          {!isBohr && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
              <span className="text-xs font-black text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'محددات تشغيل ليزر He-Ne' : 'He-Ne Resonator Controls'}</span>
              </span>

              {/* HV Discharge Switch */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Zap className={`w-3.5 h-3.5 ${highVoltageDC ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{isArabic ? 'مصدر الجهد العالي (HV):' : 'HV Power (1.5 kV):'}</span>
                </span>
                <button
                  onClick={() => lab.updateParam('highVoltageDC', !highVoltageDC)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black cursor-pointer transition-all ${
                    highVoltageDC
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {highVoltageDC ? (isArabic ? 'تشغيل ON' : 'ACTIVE') : (isArabic ? 'إيقاف OFF' : 'STANDBY')}
                </button>
              </div>

              {/* Pumping Power Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isArabic ? 'شدة الضخ الكهربي:' : 'Pumping Power:'}</span>
                  <span className="font-mono text-cyan-400 font-black">{pumpPower}%</span>
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
                  <span className="text-slate-300">{isArabic ? 'حيود زاوية المرآة (θ):' : 'Cavity Tilt (θ):'}</span>
                  <span className="font-mono text-amber-400 font-black">{cavityAlignment.toFixed(1)} mrad</span>
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
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>0.0 mrad ({isArabic ? 'مثالي' : 'Aligned'})</span>
                  <span className="text-amber-500">1.5 mrad ({isArabic ? 'العتبة' : 'Threshold'})</span>
                  <span>3.0 mrad ({isArabic ? 'فاقد' : 'Quenched'})</span>
                </div>
              </div>

              {/* Quick Calibrate Alignment */}
              {cavityAlignment > 0 && (
                <button
                  onClick={() => lab.updateParam('cavityAlignment', 0.0)}
                  className="w-full py-1.5 rounded-lg bg-slate-950 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{isArabic ? 'ضبط التوازي التام (θ = 0.0)' : 'Auto-Align Mirrors (θ = 0.0)'}</span>
                </button>
              )}

              {/* Active Lasing Status Banner */}
              <div
                className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                  isLasing
                    ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                {isLasing ? (
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                )}
                <div className="text-[11px] leading-tight">
                  <span className="font-bold block">
                    {isLasing
                      ? (isArabic ? 'تضخيم ليزري متماسك نشط' : 'Coherent Laser Amplification Active')
                      : (isArabic ? 'لا يحدث تضخيم ليزري' : 'No Laser Oscillation')}
                  </span>
                  <span className="text-[10px] opacity-75">
                    {isLasing
                      ? (isArabic ? 'الشعاع متماسك زمنياً ومكانياً بطول موجي 632.8 nm' : 'TEM₀₀ Gaussian beam output at 632.8 nm')
                      : !highVoltageDC
                      ? (isArabic ? 'مصدر الجهد العالي متوقف' : 'HV Power supply is switched off')
                      : pumpPower < 35
                      ? (isArabic ? 'شدة الضخ دون عتبة التشغيل (<35%)' : 'Pump power below threshold (<35%)')
                      : (isArabic ? 'فقد التجويف يتجاوز الكسب بسبب حيود المرآة (>1.5 mrad)' : 'Cavity walk-off loss exceeds gain (>1.5 mrad)')}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="atomic-laser-viewport"
        lang={lang}
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        animated={true}
        onRender={handleRenderCanvas}
      />
    </VirtualLabShell>
  );
};
