import React, { useState, useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  drawMetallicCylinder,
  drawAnalogMeterGauge,
  drawGlowingParticle,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import { MathRenderer } from '../MathRenderer';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export interface Electrode {
  id: string;
  nameEn: string;
  nameAr: string;
  symbol: string;
  ionEn: string;
  ionAr: string;
  metalLatex: string;
  ionLatex: string;
  e0Reduction: number; // Standard Reduction Potential in Volts
  valence: number; // n electrons transferred
  solutionColor: string;
  metalColor: string;
}

export const ELECTRODES: Electrode[] = [
  {
    id: 'mg',
    nameEn: 'Magnesium (Mg)',
    nameAr: 'المغنيسيوم (Mg)',
    symbol: 'Mg',
    ionEn: 'Mg²⁺',
    ionAr: '²⁺Mg',
    metalLatex: '\\text{Mg}',
    ionLatex: '\\text{Mg}^{2+}',
    e0Reduction: -2.37,
    valence: 2,
    solutionColor: 'rgba(241, 245, 249, 0.25)',
    metalColor: '#94a3b8',
  },
  {
    id: 'al',
    nameEn: 'Aluminum (Al)',
    nameAr: 'الألومنيوم (Al)',
    symbol: 'Al',
    ionEn: 'Al³⁺',
    ionAr: '³⁺Al',
    metalLatex: '\\text{Al}',
    ionLatex: '\\text{Al}^{3+}',
    e0Reduction: -1.66,
    valence: 3,
    solutionColor: 'rgba(241, 245, 249, 0.2)',
    metalColor: '#cbd5e1',
  },
  {
    id: 'zn',
    nameEn: 'Zinc (Zn)',
    nameAr: 'الخارصين / الزنك (Zn)',
    symbol: 'Zn',
    ionEn: 'Zn²⁺',
    ionAr: '²⁺Zn',
    metalLatex: '\\text{Zn}',
    ionLatex: '\\text{Zn}^{2+}',
    e0Reduction: -0.76,
    valence: 2,
    solutionColor: 'rgba(248, 250, 252, 0.2)',
    metalColor: '#a1a1aa',
  },
  {
    id: 'fe',
    nameEn: 'Iron (Fe)',
    nameAr: 'الحديد (Fe)',
    symbol: 'Fe',
    ionEn: 'Fe²⁺',
    ionAr: '²⁺Fe',
    metalLatex: '\\text{Fe}',
    ionLatex: '\\text{Fe}^{2+}',
    e0Reduction: -0.44,
    valence: 2,
    solutionColor: 'rgba(74, 222, 128, 0.25)',
    metalColor: '#71717a',
  },
  {
    id: 'ni',
    nameEn: 'Nickel (Ni)',
    nameAr: 'النيكل (Ni)',
    symbol: 'Ni',
    ionEn: 'Ni²⁺',
    ionAr: '²⁺Ni',
    metalLatex: '\\text{Ni}',
    ionLatex: '\\text{Ni}^{2+}',
    e0Reduction: -0.25,
    valence: 2,
    solutionColor: 'rgba(34, 197, 94, 0.3)',
    metalColor: '#a8a29e',
  },
  {
    id: 'pb',
    nameEn: 'Lead (Pb)',
    nameAr: 'الرصاص (Pb)',
    symbol: 'Pb',
    ionEn: 'Pb²⁺',
    ionAr: '²⁺Pb',
    metalLatex: '\\text{Pb}',
    ionLatex: '\\text{Pb}^{2+}',
    e0Reduction: -0.13,
    valence: 2,
    solutionColor: 'rgba(226, 232, 240, 0.2)',
    metalColor: '#64748b',
  },
  {
    id: 'h2',
    nameEn: 'Hydrogen SHE (Pt)',
    nameAr: 'قطب الهيدروجين القياسي (Pt)',
    symbol: 'Pt/H₂',
    ionEn: '2H⁺',
    ionAr: '⁺2H',
    metalLatex: '\\text{H}_2',
    ionLatex: '2\\text{H}^+',
    e0Reduction: 0.00,
    valence: 2,
    solutionColor: 'rgba(241, 245, 249, 0.15)',
    metalColor: '#475569',
  },
  {
    id: 'cu',
    nameEn: 'Copper (Cu)',
    nameAr: 'النحاس (Cu)',
    symbol: 'Cu',
    ionEn: 'Cu²⁺',
    ionAr: '²⁺Cu',
    metalLatex: '\\text{Cu}',
    ionLatex: '\\text{Cu}^{2+}',
    e0Reduction: +0.34,
    valence: 2,
    solutionColor: 'rgba(56, 189, 248, 0.45)', // royal blue CuSO4
    metalColor: '#ea580c', // copper bronze
  },
  {
    id: 'ag',
    nameEn: 'Silver (Ag)',
    nameAr: 'الفضة (Ag)',
    symbol: 'Ag',
    ionEn: 'Ag⁺',
    ionAr: '⁺Ag',
    metalLatex: '\\text{Ag}',
    ionLatex: '\\text{Ag}^+',
    e0Reduction: +0.80,
    valence: 1,
    solutionColor: 'rgba(248, 250, 252, 0.2)',
    metalColor: '#e2e8f0', // bright silver
  },
];

interface ElectroChemParams {
  leftConc: number;
  rightConc: number;
  temperatureC: number;
  externalResistance: number;
}

interface ElectroChemState {
  electronOffset: number;
}

const ELECTROCHEM_LAB_DEFINITION: LabDefinition<ElectroChemParams, ElectroChemState> = {
  id: 'electrochemistry-lab',
  subject: 'chemistry',
  chapterRef: 'Chapter 4: Electrochemistry',
  titleEn: 'Galvanic & Electrolytic Cells (Electrochemistry)',
  titleAr: 'الكيمياء الكهربية والخلايا الجلفانية والإلكتروليتية',
  subtitleEn: 'Daniell Cell, Standard Reduction Potentials, and Nernst Equation',
  subtitleAr: 'خلية دانيال، متسلسلة الجهود الكهربية، ومعادلة نيرنست',
  objectives: [
    {
      id: 'galvanic-emf',
      textEn: 'Analyze spontaneous redox reactions in Galvanic cells and compute standard EMF (E°_cell = E°_cathode - E°_anode).',
      textAr: 'تحليل تفاعلات الأكسدة والاختزال التلقائية في الخلايا الجلفانية وحساب القوة الدافعة القياسية.',
      bloomLevel: 'analyze',
    },
    {
      id: 'nernst-law',
      textEn: 'Apply the Nernst equation to determine the influence of ion concentrations and reaction quotient Q on cell potential.',
      textAr: 'تطبيق معادلة نيرنست لتحديد أثر تركيز الأيونات وحاصل التفاعل Q على جهد الخلية غير القياسي.',
      bloomLevel: 'apply',
    },
    {
      id: 'salt-bridge',
      textEn: 'Understand the essential role of the salt bridge in preventing charge accumulation via counter-ion migration.',
      textAr: 'فهم الدور الجوهري للقنطرة الملحية في منع تراكم الشحنات الكهربية عبر هجرة الأيونات المضادة.',
      bloomLevel: 'understand',
    },
    {
      id: 'gibbs-free-energy',
      textEn: 'Relate cell electromotive force to thermodynamic spontaneity using Gibbs free energy (ΔG° = -nFE°_cell).',
      textAr: 'ربط القوة الدافعة للخلية بالتلقائية الثرموديناميكية باستخدام طاقة جبس الحرة (ΔG° = -nFE°).',
      bloomLevel: 'evaluate',
    },
  ],
  safetyWarnings: [
    {
      id: 'heavy-metals',
      titleEn: 'Heavy Metal Toxicity Warning',
      titleAr: 'تحذير سمية أملاح الفلزات الثقيلة',
      messageEn: 'Solutions of Cu²⁺, Pb²⁺, and Ni²⁺ are toxic to aquatic life. Handle with gloves and dispose of in designated chemical waste.',
      messageAr: 'محاليل النحاس والرصاص والنيكل سامة بيئياً. ارتدِ القفازات وتخلص منها في أوعية النفايات الكيميائية المخصصة.',
      severity: 'warning',
    },
  ],
  keyFormulas: [
    {
      id: 'standard-emf',
      labelEn: 'Standard Cell Potential',
      labelAr: 'الجهد القياسي للخلية',
      tex: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}',
      descriptionEn: 'Cell EMF under standard conditions: 1.0 M solute concentrations, 25°C, and 1.0 atm.',
      descriptionAr: 'القوة الدافعة للخلية في الظروف القياسية: تركيز 1.0 مولار، 25°س، وضغط 1 ضغط جوي.',
    },
    {
      id: 'nernst-eq',
      labelEn: 'Nernst Equation at 25°C',
      labelAr: 'معادلة نيرنست عند 25°س',
      tex: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q',
      descriptionEn: 'Calculates non-standard electromotive force based on reaction quotient Q.',
      descriptionAr: 'تحسب القوة الدافعة غير القياسية اعتماداً على حاصل التفاعل الفعلي Q.',
    },
    {
      id: 'gibbs-energy',
      labelEn: 'Gibbs Free Energy',
      labelAr: 'طاقة جبس الحرة القياسية',
      tex: '\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}}',
      descriptionEn: 'Spontaneous galvanic discharge requires ΔG° < 0 and E°_cell > 0.',
      descriptionAr: 'تكون الخلية جلفانية وتفريغها تلقائياً عندما تكون ΔG° سالبة و E° موجبة.',
    },
    {
      id: 'equilibrium-constant',
      labelEn: 'Equilibrium Constant (Kc)',
      labelAr: 'ثابت الاتزان الكيميائي',
      tex: '\\log_{10} K_c = \\frac{n E^\\circ_{\\text{cell}}}{0.0592}',
      descriptionEn: 'Relates standard cell potential to chemical equilibrium constant at 298 K.',
      descriptionAr: 'يربط الجهد القياسي بثابت الاتزان الكيميائي للتفاعل التام عند 298 كلفن.',
    },
  ],
  defaultParams: {
    leftConc: 1.0,
    rightConc: 1.0,
    temperatureC: 25,
    externalResistance: 10,
  },
  paramSchema: {
    leftConc: {
      key: 'leftConc',
      labelEn: 'Left Half-Cell Conc (M)',
      labelAr: 'تركيز القطب الأيسر (مولار)',
      symbolTex: '[\\text{Left}]',
      unit: 'M',
      type: 'number',
      min: 0.01,
      max: 2.5,
      step: 0.05,
      defaultValue: 1.0,
      precision: 2,
    },
    rightConc: {
      key: 'rightConc',
      labelEn: 'Right Half-Cell Conc (M)',
      labelAr: 'تركيز القطب الأيمن (مولار)',
      symbolTex: '[\\text{Right}]',
      unit: 'M',
      type: 'number',
      min: 0.01,
      max: 2.5,
      step: 0.05,
      defaultValue: 1.0,
      precision: 2,
    },
    temperatureC: {
      key: 'temperatureC',
      labelEn: 'Temperature (°C)',
      labelAr: 'درجة الحرارة (°س)',
      symbolTex: 'T',
      unit: '°C',
      type: 'number',
      min: 10,
      max: 80,
      step: 1,
      defaultValue: 25,
      precision: 0,
    },
    externalResistance: {
      key: 'externalResistance',
      labelEn: 'External Resistance',
      labelAr: 'مقاومة الحمل الخارجي',
      symbolTex: 'R_{\\text{ext}}',
      unit: 'Ω',
      type: 'number',
      min: 1,
      max: 50,
      step: 1,
      defaultValue: 10,
      precision: 1,
    },
  },
  presets: [
    {
      id: 'daniell-standard',
      nameEn: 'Standard Daniell Cell (Zn/Cu, 25°C)',
      nameAr: 'خلية دانيال القياسية (خارصين/نحاس)',
      badge: 'E° = 1.10V',
      descriptionEn: 'Classic textbook Daniell cell: 1.0 M ZnSO4 and 1.0 M CuSO4 at 25°C.',
      descriptionAr: 'خلية دانيال الكلاسيكية: 1.0 مولار كبريتات خارصين و 1.0 مولار كبريتات نحاس عند 25°س.',
      params: { leftConc: 1.0, rightConc: 1.0, temperatureC: 25, externalResistance: 10 },
    },
    {
      id: 'daniell-dilute-anode',
      nameEn: 'High-EMF Concentration Cell (Dilute Anode)',
      nameAr: 'خلية تركيز عالية الجهد (أنود مخفف)',
      badge: 'E > 1.10V',
      descriptionEn: '0.01 M Zn²⁺ and 2.0 M Cu²⁺: lower Q shifts equilibrium forward, raising cell potential.',
      descriptionAr: '0.01 مولار خارصين و 2.0 مولار نحاس: انخفاض Q يدفع الاتزان للأمام ويرفع الجهد.',
      params: { leftConc: 0.01, rightConc: 2.0, temperatureC: 25, externalResistance: 10 },
    },
    {
      id: 'daniell-depleted',
      nameEn: 'Depleted Cell (Approaching Equilibrium)',
      nameAr: 'خلية مفرغة (تقترب من الاتزان)',
      badge: 'E < 1.10V',
      descriptionEn: '2.5 M Zn²⁺ and 0.01 M Cu²⁺: high Q lowers voltage towards depletion.',
      descriptionAr: '2.5 مولار خارصين و 0.01 مولار نحاس: ارتفاع Q يخفض الجهد تدريجياً نحو النفاد.',
      params: { leftConc: 2.5, rightConc: 0.01, temperatureC: 25, externalResistance: 10 },
    },
  ],
  poePrompts: [
    {
      id: 'poe-daniell-nernst',
      titleEn: 'Effect of Ion Concentrations on Daniell Cell Potential',
      titleAr: 'أثر تركيز الأيونات على جهد خلية دانيال',
      scenarioEn: 'A standard Daniell cell (Zn | Zn²⁺(1M) || Cu²⁺(1M) | Cu) produces E° = 1.10 V. The zinc anode beaker is replaced with 2.0 M Zn²⁺ while the copper cathode beaker is diluted to 0.01 M.',
      scenarioAr: 'خلية دانيال القياسية تعطي 1.10 فولت. تم استبدال محلول الأنود بتركيز 2.0 مولار خارصين وتخفيف محلول الكاثود إلى 0.01 مولار نحاس.',
      questionEn: 'According to Le Chatelier principle and the Nernst equation, what happens to the cell potential E_cell?',
      questionAr: 'طبقاً لقاعدة لوشاتيليه ومعادلة نيرنست، ماذا يحدث للقوة الدافعة للخلية E_cell؟',
      optionsEn: [
        'E_cell decreases below 1.10 V (E_cell < 1.10 V due to Q = [Zn²⁺]/[Cu²⁺] > 1)',
        'E_cell increases above 1.10 V',
        'E_cell remains exactly at 1.10 V',
        'E_cell drops immediately to zero because reaction stops',
      ],
      optionsAr: [
        'تنخفض القوة الدافعة عن 1.10 فولت (E_cell < 1.10 V نظراً لأن Q > 1)',
        'ترتفع القوة الدافعة عن 1.10 فولت',
        'تبقى القوة الدافعة ثابتة تماماً عند 1.10 فولت',
        'تهبط القوة الدافعة للصفر فوراً لتوقف التفاعل',
      ],
      correctOptionIndex: 0,
      scientificExplanationEn: 'The cell reaction is Zn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s). Reaction quotient Q = [Zn²⁺]/[Cu²⁺] = 2.0 / 0.01 = 200. Since log10(200) > 0, the Nernst correction term (-0.0592/2 log Q) is negative, decreasing E_cell to ~1.03 V.',
      scientificExplanationAr: 'معادلة التفاعل: Zn + Cu²⁺ ⇌ Zn²⁺ + Cu. حاصل التفاعل Q = [Zn²⁺]/[Cu²⁺] = 200 > 1، وبحسب نيرنست: E = 1.10 - (0.0592/2) log(200) ≈ 1.03 فولت، فتقل القوة الدافعة.',
    },
  ],
  notebookConfig: {
    xLabelEn: 'Reaction Quotient Log10(Q)',
    xLabelAr: 'لوغاريتم حاصل التفاعل log10(Q)',
    xUnit: '',
    yLabelEn: 'Cell Potential E_cell',
    yLabelAr: 'جهد الخلية E_cell',
    yUnit: 'V',
    recommendedPointsCount: 5,
  },
  supportedInstruments: ['multimeter', 'stopwatch', 'scratchpad'],
};

export const ElectrochemistryLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Selected half-cells (default: classic Daniell Cell Zn - Cu)
  const [leftElectrode, setLeftElectrode] = useState<Electrode>(ELECTRODES[2]); // Zn
  const [rightElectrode, setRightElectrode] = useState<Electrode>(ELECTRODES[7]); // Cu

  // Electron animation offset
  const animOffsetRef = useRef<number>(0);

  const lab = useVirtualLab<ElectroChemParams, ElectroChemState>({
    definition: ELECTROCHEM_LAB_DEFINITION,
    onStep: (dt) => {
      animOffsetRef.current = (animOffsetRef.current + 30 * dt) % 40;
    },
  });

  const { leftConc, rightConc, temperatureC, externalResistance } = lab.params;
  const tempKelvin = temperatureC + 273.15;

  // Determine Anode and Cathode based on standard reduction potentials
  // Lower E0 = oxidized (Anode); Higher E0 = reduced (Cathode)
  const isLeftAnode = leftElectrode.e0Reduction <= rightElectrode.e0Reduction;
  const anode = isLeftAnode ? leftElectrode : rightElectrode;
  const cathode = isLeftAnode ? rightElectrode : leftElectrode;

  const anodeConc = isLeftAnode ? leftConc : rightConc;
  const cathodeConc = isLeftAnode ? rightConc : leftConc;

  // Standard Potential E0 = E0(cathode) - E0(anode)
  const e0Cell = cathode.e0Reduction - anode.e0Reduction;

  // Effective electrons transferred n
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
  const nElectrons = (anode.valence * cathode.valence) / gcd(anode.valence, cathode.valence);

  // Stoichiometric coefficients
  const pCathode = nElectrons / cathode.valence;
  const qAnode = nElectrons / anode.valence;

  // Reaction Quotient Q = [Anode]^q / [Cathode]^p
  const qRatio = Math.pow(anodeConc, qAnode) / Math.pow(cathodeConc, pCathode);
  const log10Q = Math.log10(Math.max(1e-12, qRatio));

  // Nernst Equation
  const nernstSlope = (0.05916 / nElectrons) * (tempKelvin / 298.15);
  const eCell = Math.max(0, e0Cell - nernstSlope * log10Q);

  // Gibbs Free Energy: Delta G = -n * F * E_cell / 1000 in kJ/mol
  const F = 96485;
  const deltaGkJ = (-nElectrons * F * eCell) / 1000;

  // Circuit Current
  const currentAmps = eCell / externalResistance;

  // Multimeter reading
  const multimeterReading: DMMReading = {
    voltageDC: parseFloat(eCell.toFixed(3)),
    voltageAC: 0.0,
    currentDC: parseFloat(currentAmps.toFixed(3)),
    resistance: externalResistance,
    continuityBeep: eCell > 0.05,
  };

  // Telemetry Cards
  const telemetry: LabTelemetryMetric[] = [
    {
      id: 'cell-potential',
      labelEn: 'Cell Potential (EMF)',
      labelAr: 'القوة الدافعة للخلية',
      symbolTex: 'E_{\\text{cell}}',
      value: eCell,
      unit: 'V',
      min: 0,
      max: 3.5,
      status: eCell > 0.1 ? 'optimal' : 'alert',
      precision: 3,
    },
    {
      id: 'standard-potential',
      labelEn: 'Standard Potential',
      labelAr: 'الجهد القياسي للخلية',
      symbolTex: 'E^\\circ_{\\text{cell}}',
      value: e0Cell,
      unit: 'V',
      min: 0,
      max: 3.5,
      status: 'normal',
      precision: 2,
    },
    {
      id: 'gibbs-energy',
      labelEn: 'Gibbs Free Energy',
      labelAr: 'طاقة جبس الحرة',
      symbolTex: '\\Delta G',
      value: deltaGkJ,
      unit: 'kJ/mol',
      min: -700,
      max: 0,
      status: deltaGkJ < 0 ? 'optimal' : 'warning',
      precision: 1,
    },
    {
      id: 'circuit-current',
      labelEn: 'Discharge Current',
      labelAr: 'تيار التفريغ',
      symbolTex: 'I',
      value: currentAmps * 1000,
      unit: 'mA',
      min: 0,
      max: 500,
      status: 'normal',
      precision: 1,
    },
  ];

  const getMetalType = (id: string): 'copper' | 'brass' | 'steel' | 'zinc' | 'gold' => {
    if (id === 'cu') return 'copper';
    if (id === 'zn') return 'zinc';
    if (id === 'au') return 'gold';
    return 'steel';
  };

  // High-Performance Canvas2D Viewport: Dual Beakers + Salt Bridge + Wire Loop
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    vp: LabViewportState,
    _dpr: number = 1,
    time: number = 0,
    _frame: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#020617';
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w / 2 + vp.panX, h / 2 + vp.panY);
    ctx.scale(vp.zoom, vp.zoom);

    const beakerW = 120;
    const beakerH = 140;
    const beakerGap = 160;

    const leftBx = -beakerGap / 2 - beakerW;
    const rightBx = beakerGap / 2;
    const beakerY = -30;

    // 1. Draw Left Beaker with Glass Graduations & Meniscus
    drawBeaker(
      ctx,
      leftBx,
      beakerY,
      beakerW,
      beakerH,
      leftElectrode.solutionColor,
      `${leftElectrode.symbol}SO₄ (${leftConc.toFixed(2)}M)`,
      leftElectrode.nameEn
    );

    // Left Electrode Plate (Realistic Metallic Finish)
    drawMetallicCylinder(
      ctx,
      leftBx + beakerW / 2 - 12,
      beakerY - 30,
      24,
      beakerH + 10,
      getMetalType(leftElectrode.id),
      'vertical'
    );

    // 2. Draw Right Beaker with Glass Graduations & Meniscus
    drawBeaker(
      ctx,
      rightBx,
      beakerY,
      beakerW,
      beakerH,
      rightElectrode.solutionColor,
      `${rightElectrode.symbol}SO₄ (${rightConc.toFixed(2)}M)`,
      rightElectrode.nameEn
    );

    // Right Electrode Plate (Realistic Metallic Finish)
    drawMetallicCylinder(
      ctx,
      rightBx + beakerW / 2 - 12,
      beakerY - 30,
      24,
      beakerH + 10,
      getMetalType(rightElectrode.id),
      'vertical'
    );

    // 3. Salt Bridge (Inverted 3D Glass U-Tube with Agar Gel & Migrating Ions)
    const sbW = 28;
    const sbYTop = beakerY - 15;
    const sbYBottom = beakerY + 60;
    const sbLeftX = leftBx + beakerW - 20;
    const sbRightX = rightBx + 20;

    // Outer Glass Sheen
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = sbW + 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(sbLeftX, sbYBottom);
    ctx.lineTo(sbLeftX, sbYTop);
    ctx.lineTo(sbRightX, sbYTop);
    ctx.lineTo(sbRightX, sbYBottom);
    ctx.stroke();

    // Internal Agar-KNO3 Jelly Core
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
    ctx.lineWidth = sbW;
    ctx.stroke();

    // Salt Bridge Drifting Ions (K+ drifts to cathode, NO3- drifts to anode)
    if (eCell > 0.05) {
      const numBridgeIons = 6;
      for (let bi = 0; bi < numBridgeIons; bi++) {
        const prog = ((t * 0.4 + bi / numBridgeIons) % 1);
        const curX = isLeftAnode
          ? sbLeftX + prog * (sbRightX - sbLeftX)
          : sbRightX - prog * (sbRightX - sbLeftX);
        drawGlowingParticle(ctx, curX, sbYTop, 2.5, '#fde047', 6);
      }
    }

    // Salt Bridge Label
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Salt Bridge (KNO₃)', (sbLeftX + sbRightX) / 2, sbYTop - 18);

    // 4. External Wire Circuit
    const wireY = beakerY - 80;
    const leftWireX = leftBx + beakerW / 2;
    const rightWireX = rightBx + beakerW / 2;

    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(leftWireX, beakerY - 30);
    ctx.lineTo(leftWireX, wireY);
    ctx.lineTo(rightWireX, wireY);
    ctx.lineTo(rightWireX, beakerY - 30);
    ctx.stroke();

    // Copper connector clamps at top of electrodes
    drawMetallicCylinder(ctx, leftWireX - 6, beakerY - 34, 12, 8, 'brass', 'horizontal');
    drawMetallicCylinder(ctx, rightWireX - 6, beakerY - 34, 12, 8, 'brass', 'horizontal');

    // Voltmeter in middle of wire: Authentic Analog Meter Gauge
    const vmX = (leftWireX + rightWireX) / 2;
    const vmY = wireY;
    drawAnalogMeterGauge(ctx, vmX, vmY, 34, eCell, 0, 3.0, 'V', 'EMF');

    // 5. Animated Electron Flow Dots along wire (Continuous 60 FPS)
    if (eCell > 0.05) {
      const electronDir = isLeftAnode ? 1 : -1; // Anode to Cathode
      const totalWireLength = Math.abs(rightWireX - leftWireX);
      const numDots = 10;
      for (let d = 0; d < numDots; d++) {
        const offsetProg = ((t * 35 + (d / numDots) * 40) % 40) / 40;
        let dotX: number;
        if (electronDir === 1) {
          dotX = leftWireX + offsetProg * totalWireLength;
        } else {
          dotX = rightWireX - offsetProg * totalWireLength;
        }
        drawGlowingParticle(ctx, dotX, wireY, 3.5, '#fbbf24', 8);
      }
    }

    // 6. Anode and Cathode Badges
    ctx.font = 'bold 11px sans-serif';
    // Left
    ctx.fillStyle = isLeftAnode ? '#ef4444' : '#22c55e';
    ctx.fillText(
      isLeftAnode
        ? (isArabic ? 'الأنود (-) مصعد' : 'ANODE (-) Oxidation')
        : (isArabic ? 'الكاثود (+) مهبط' : 'CATHODE (+) Reduction'),
      leftBx + beakerW / 2,
      beakerY + beakerH + 24
    );

    // Right
    ctx.fillStyle = !isLeftAnode ? '#ef4444' : '#22c55e';
    ctx.fillText(
      !isLeftAnode
        ? (isArabic ? 'الأنود (-) مصعد' : 'ANODE (-) Oxidation')
        : (isArabic ? 'الكاثود (+) مهبط' : 'CATHODE (+) Reduction'),
      rightBx + beakerW / 2,
      beakerY + beakerH + 24
    );

    ctx.restore();
  };

  const drawBeaker = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    solutionColor: string,
    solLabel: string,
    metalLabel: string
  ) => {
    // Glass Beaker Fill (Liquid)
    const liquidH = h * 0.75;
    const solTopY = y + (h - liquidH);

    // Liquid fill
    ctx.fillStyle = solutionColor;
    ctx.fillRect(x + 4, solTopY, w - 8, liquidH);

    // Liquid surface meniscus ellipse
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, solTopY, (w - 8) / 2, 3.5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // 3D Glass beaker walls & caustics
    const glassGrad = ctx.createLinearGradient(x, 0, x + w, 0);
    glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    glassGrad.addColorStop(0.1, 'rgba(15, 23, 42, 0.2)');
    glassGrad.addColorStop(0.9, 'rgba(15, 23, 42, 0.2)');
    glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.35)');

    ctx.fillStyle = glassGrad;
    ctx.fillRect(x, y, w, h);

    // Glass rim top lip
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y, w / 2 + 2, 3, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Glass outer border
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x + w, y);
    ctx.stroke();

    // Metric Graduations (50, 100, 150 mL marks)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    for (let g = 1; g <= 3; g++) {
      const gy = y + h - g * 32;
      ctx.beginPath();
      ctx.moveTo(x + 4, gy);
      ctx.lineTo(x + 16, gy);
      ctx.stroke();
    }

    // Beaker labels
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(metalLabel, x + w / 2, y + h - 25);
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(solLabel, x + w / 2, y + h - 12);
  };

  return (
    <VirtualLabShell<ElectroChemParams, ElectroChemState>
      definition={ELECTROCHEM_LAB_DEFINITION}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      currentXValue={parseFloat(log10Q.toFixed(2))}
      currentYValue={parseFloat(eCell.toFixed(3))}
      renderCustomControls={() => (
        <div className="space-y-3" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Half-Cell Electrode Selectors */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">
              {isArabic ? 'اختيار نصفي الخلية (الأقطاب):' : 'Select Half-Cell Electrodes:'}
            </label>

            <div className="grid grid-cols-2 gap-2">
              {/* Left Electrode Picker */}
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">
                  {isArabic ? 'القطب الأيسر:' : 'Left Electrode:'}
                </span>
                <select
                  value={leftElectrode.id}
                  onChange={(e) => {
                    const found = ELECTRODES.find((el) => el.id === e.target.value);
                    if (found) setLeftElectrode(found);
                  }}
                  className={`w-full px-2 py-1.5 text-xs rounded-lg border focus:outline-none focus:border-cyan-400 ${
                    isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-950 border-slate-700 text-slate-200'
                  }`}
                >
                  {ELECTRODES.map((el) => (
                    <option key={el.id} value={el.id}>
                      {isArabic ? el.nameAr : el.nameEn} ({el.e0Reduction >= 0 ? `+${el.e0Reduction}` : el.e0Reduction}V)
                    </option>
                  ))}
                </select>
              </div>

              {/* Right Electrode Picker */}
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">
                  {isArabic ? 'القطب الأيمن:' : 'Right Electrode:'}
                </span>
                <select
                  value={rightElectrode.id}
                  onChange={(e) => {
                    const found = ELECTRODES.find((el) => el.id === e.target.value);
                    if (found) setRightElectrode(found);
                  }}
                  className={`w-full px-2 py-1.5 text-xs rounded-lg border focus:outline-none focus:border-cyan-400 ${
                    isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-950 border-slate-700 text-slate-200'
                  }`}
                >
                  {ELECTRODES.map((el) => (
                    <option key={el.id} value={el.id}>
                      {isArabic ? el.nameAr : el.nameEn} ({el.e0Reduction >= 0 ? `+${el.e0Reduction}` : el.e0Reduction}V)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Cell Notation Banner */}
          <div className={`p-2.5 rounded-xl border text-center ${
            isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950/80 border-slate-800'
          }`}>
            <span className={`text-[10px] font-bold block mb-1 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {isArabic ? 'الاصطلاح التخطيطي للخلية (Cell Notation):' : 'Official Cell Notation:'}
            </span>
            <div className={`text-xs font-mono font-bold ${
              isLight ? 'text-emerald-700' : 'text-emerald-400'
            }`}>
              <MathRenderer
                math={`${anode.metalLatex} \\mid ${anode.ionLatex}\\,(${anodeConc.toFixed(2)}\\text{M}) \\parallel ${cathode.ionLatex}\\,(${cathodeConc.toFixed(2)}\\text{M}) \\mid ${cathode.metalLatex}`}
                inline
              />
            </div>
          </div>
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="electrochem-viewport"
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
