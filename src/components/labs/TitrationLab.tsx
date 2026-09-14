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
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import {
  calculateTitrationPH,
  generateTitrationCurve,
  getIndicatorColor,
  COMMON_INDICATORS,
  type TitrationSystem,
} from '../../core/simulation/EquilibriumEngine';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface TitrationParams {
  systemType: number; // 0: Strong/Strong, 1: Weak Acid/Strong Base, 2: Strong Acid/Weak Base, 3: Diprotic Acid
  indicatorId: string; // phenolphthalein, methyl_orange, bromothymol_blue, litmus
  analyteConcM: number; // 0.05 - 1.0 M
  titrantConcM: number; // 0.05 - 1.0 M
  analyteVolumeMl: number; // 10 - 50 mL
  titrantAddedMl: number; // 0 - 50 mL
  stirrerSpeed: number; // 0 - 100 %
}

interface TitrationState {
  stirrerAngle: number;
}

const SYSTEM_CONFIGS: {
  id: number;
  type: TitrationSystem['type'];
  nameEn: string;
  nameAr: string;
  analyteEn: string;
  analyteAr: string;
  titrantEn: string;
  titrantAr: string;
  pKa1?: number;
  pKa2?: number;
  pKb?: number;
}[] = [
  {
    id: 0,
    type: 'strong_acid_strong_base',
    nameEn: 'HCl + NaOH (Strong Acid / Strong Base)',
    nameAr: 'حمض الهيدروكلوريك + هيدروكسيد الصوديوم (حمض قوي / قاعدة قوية)',
    analyteEn: '0.1M HCl (Hydrochloric Acid)',
    analyteAr: '0.1 مولار HCl (حمض الهيدروكلوريك)',
    titrantEn: '0.1M NaOH (Sodium Hydroxide)',
    titrantAr: '0.1 مولار NaOH (هيدروكسيد الصوديوم)',
  },
  {
    id: 1,
    type: 'weak_acid_strong_base',
    nameEn: 'CH₃COOH + NaOH (Weak Acid / Strong Base)',
    nameAr: 'حمض الأسيتيك + هيدروكسيد الصوديوم (حمض ضعيف / قاعدة قوية)',
    analyteEn: '0.1M CH₃COOH (Acetic Acid, pKa 4.76)',
    analyteAr: '0.1 مولار CH₃COOH (حمض الخليك)',
    titrantEn: '0.1M NaOH (Sodium Hydroxide)',
    titrantAr: '0.1 مولار NaOH (هيدروكسيد الصوديوم)',
    pKa1: 4.76,
  },
  {
    id: 2,
    type: 'strong_acid_weak_base',
    nameEn: 'HCl + NH₃ (Strong Acid / Weak Base)',
    nameAr: 'حمض الهيدروكلوريك + هيدروكسيد الأمونيوم (حمض قوي / قاعدة ضعيفة)',
    analyteEn: '0.1M NH₃ (Ammonia Solution, pKb 4.75)',
    analyteAr: '0.1 مولار NH₃ (محلول النشادر)',
    titrantEn: '0.1M HCl (Hydrochloric Acid)',
    titrantAr: '0.1 مولار HCl (حمض الهيدروكلوريك)',
    pKb: 4.75,
  },
  {
    id: 3,
    type: 'diprotic_acid_strong_base',
    nameEn: 'H₂C₂O₄ + NaOH (Diprotic Oxalic Acid)',
    nameAr: 'حمض الأكساليك ثنائي القاعدية + NaOH',
    analyteEn: '0.05M H₂C₂O₄ (pKa1 1.25, pKa2 4.27)',
    analyteAr: '0.05 مولار H₂C₂O₄ (حمض الأكساليك)',
    titrantEn: '0.1M NaOH (Sodium Hydroxide)',
    titrantAr: '0.1 مولار NaOH (هيدروكسيد الصوديوم)',
    pKa1: 1.25,
    pKa2: 4.27,
  },
];

const TITRATION_LAB_DEFINITION: LabDefinition<TitrationParams, TitrationState> = {
  id: 'titration-lab',
  subject: 'chemistry',
  chapterRef: 'Chapter 3: Chemical Equilibrium & Quantitative Analysis',
  titleEn: 'Acid-Base Titration & Dynamic pH Curves',
  titleAr: 'المعايرة الحمضية القاعدية ومنحنيات الرقم الهيدروجيني',
  subtitleEn: 'High-Precision Buret Fluid Dynamics, Henderson-Hasselbalch Buffer Kinetics, and Indicator Colorimetry',
  subtitleAr: 'محاكاة دقيقة لحركية سوائل السحاحة ومحاليل المنظم وكواشف الأدلة الكيميائية',
  taglineEn: 'Tier-1 Analytical Titration Workbench',
  taglineAr: 'منصة المعايرة التحليلية والاتزان الكيميائي المتقدمة',

  objectives: [
    {
      id: 'obj-curve',
      textEn: 'Analyze the shape of pH neutralization curves and locate stoichiometric equivalence points across strong/weak systems.',
      textAr: 'تحليل شكل منحنيات التعادل وتحديد نقط التكافؤ عبر أنظمة الأحماض والقواعد القوية والضعيفة.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-buffer',
      textEn: 'Investigate buffer capacity in the Henderson-Hasselbalch zone (pH = pKa + log[A⁻]/[HA]) around half-equivalence.',
      textAr: 'استقصاء سعة المحلول المنظم (بفر) في منطقة هندرسون-هاسلبالخ عند نقطة نصف التكافؤ.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj-indicator',
      textEn: 'Select appropriate chemical indicators whose transition interval encompasses the steep inflection point of the titration.',
      textAr: 'اختيار الدليل الكيميائي المناسب الذي يقع مدى تغير لونه ضمن مدى القفزة المفاجئة للرقم الهيدروجيني.',
      bloomLevel: 'apply',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-corrosive',
      titleEn: 'Corrosive Chemicals Hazard',
      titleAr: 'تحذير كواشف كيميائية كاوية وآكلة',
      messageEn: 'Concentrated acids (HCl) and caustics (NaOH) cause severe chemical burns. Wear safety goggles, lab coat, and nitrile gloves.',
      messageAr: 'الأحماض والقواعد المركزة تسبب حروقاً بالغة للجلد. يجب ارتداء النظارات الواقية والقفازات وتجنب لمس أو استنشاق الأبخرة.',
      severity: 'warning',
    },
    {
      id: 'warn-neutralization-heat',
      titleEn: 'Exothermic Neutralization Heat',
      titleAr: 'حرارة التعادل الطاردة للحرارة',
      messageEn: 'Acid-base neutralization is exothermic (ΔH° ≈ -57.3 kJ/mol). Add titrant incrementally to prevent splashing.',
      messageAr: 'تفاعل التعادل طارد للحرارة (ΔH° ≈ -57.3 kJ/mol). يجب صب المحلول قطرة بقطرة لتجنب تناثر السائل.',
      severity: 'info',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-henderson',
      labelEn: 'Henderson-Hasselbalch Buffer Equation',
      labelAr: 'معادلة هندرسون-هاسلبالخ لمحاليل المنظم',
      tex: '\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)',
      descriptionEn: 'Calculates pH in the buffer region where weak acid and conjugate base coexist in significant quantities.',
      descriptionAr: 'حساب الرقم الهيدروجيني في منطقة المحلول المنظم التي تحتوي على حمض ضعيف وقاعدته المرافقة.',
    },
    {
      id: 'eq-neutralization',
      labelEn: 'Stoichiometric Neutralization Law',
      labelAr: 'قانون المعايرة والتعادل المتكافئ',
      tex: '\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}',
      descriptionEn: 'Relates molar concentrations and volumes at the equivalence point based on balanced reaction stoichiometry.',
      descriptionAr: 'قانون التكافؤ بين الحمض والقاعدة عند نقطة نهاية التفاعل وفق معاملات المعادلة الموزونة.',
    },
    {
      id: 'eq-indicator-fraction',
      labelEn: 'Indicator Deprotonation Ratio',
      labelAr: 'نسبة تأين الدليل الكيميائي',
      tex: '\\alpha = \\frac{[\\text{In}^-]}{[\\text{HIn}] + [\\text{In}^-]} = \\frac{1}{1 + 10^{\\text{p}K_{\\text{In}} - \\text{pH}}}',
      descriptionEn: 'Governs the continuous color transition of the indicator as a function of hydronium ion concentration.',
      descriptionAr: 'تحدد درجة التغير اللوني المستمر للدليل بناءً على تركيز أيونات الهيدرونيوم والرقم الهيدروجيني.',
    },
  ],

  defaultParams: {
    systemType: 0,
    indicatorId: 'phenolphthalein',
    analyteConcM: 0.1,
    titrantConcM: 0.1,
    analyteVolumeMl: 25.0,
    titrantAddedMl: 0.0,
    stirrerSpeed: 60,
  },

  paramSchema: {
    systemType: {
      key: 'systemType',
      labelEn: 'Titration Reaction System',
      labelAr: 'نظام تفاعل المعايرة',
      type: 'select',
      defaultValue: 0,
      options: SYSTEM_CONFIGS.map((sc) => ({
        value: sc.id,
        labelEn: sc.nameEn,
        labelAr: sc.nameAr,
      })),
      category: 'primary',
    },
    indicatorId: {
      key: 'indicatorId',
      labelEn: 'Chemical Indicator',
      labelAr: 'الدليل الكيميائي',
      type: 'select',
      defaultValue: 'phenolphthalein',
      options: Object.entries(COMMON_INDICATORS).map(([id, ind]) => ({
        value: id,
        labelEn: `${ind.name} (pKa ${ind.pKa})`,
        labelAr: `${ind.nameAr} (pKa ${ind.pKa})`,
      })),
      category: 'primary',
    },
    titrantAddedMl: {
      key: 'titrantAddedMl',
      labelEn: 'Titrant Dispensed from Buret',
      labelAr: 'حجم المحلول القياسي المضاف',
      symbolTex: 'V_{\\text{titrant}}',
      unit: 'mL',
      type: 'number',
      min: 0,
      max: 50,
      step: 0.2,
      defaultValue: 0,
      precision: 1,
      category: 'primary',
    },
    analyteVolumeMl: {
      key: 'analyteVolumeMl',
      labelEn: 'Analyte Initial Volume in Flask',
      labelAr: 'حجم العينة في الدورق',
      symbolTex: 'V_a',
      unit: 'mL',
      type: 'number',
      min: 10,
      max: 50,
      step: 1,
      defaultValue: 25,
      category: 'secondary',
    },
    analyteConcM: {
      key: 'analyteConcM',
      labelEn: 'Analyte Concentration',
      labelAr: 'تركيز العينة المجهولة',
      symbolTex: 'M_a',
      unit: 'M',
      type: 'number',
      min: 0.05,
      max: 0.5,
      step: 0.01,
      defaultValue: 0.1,
      precision: 2,
      category: 'secondary',
    },
    titrantConcM: {
      key: 'titrantConcM',
      labelEn: 'Titrant Standard Concentration',
      labelAr: 'تركيز المحلول القياسي',
      symbolTex: 'M_b',
      unit: 'M',
      type: 'number',
      min: 0.05,
      max: 0.5,
      step: 0.01,
      defaultValue: 0.1,
      precision: 2,
      category: 'secondary',
    },
    stirrerSpeed: {
      key: 'stirrerSpeed',
      labelEn: 'Magnetic Stirrer Speed',
      labelAr: 'سرعة المحرك المغناطيسي',
      unit: '%',
      type: 'number',
      min: 0,
      max: 100,
      step: 10,
      defaultValue: 60,
      category: 'environmental',
    },
  },

  presets: [
    {
      id: 'preset-strong-strong',
      nameEn: 'Classic Strong/Strong (HCl + NaOH)',
      nameAr: 'معايرة حمض قوي وقاعدة قوية (HCl + NaOH)',
      descriptionEn: 'Steep vertical inflection from pH 3.5 to 10.5; equivalence point at exactly pH 7.00.',
      descriptionAr: 'قفزة مفاجئة حادة للرقم الهيدروجيني من 3.5 إلى 10.5 ونقطة التكافؤ عند pH = 7 تماماً.',
      params: { systemType: 0, indicatorId: 'phenolphthalein', analyteVolumeMl: 25, titrantAddedMl: 0 },
      badge: 'pH_eq = 7.0',
    },
    {
      id: 'preset-weak-strong',
      nameEn: 'Acetic Acid Vinegar (CH₃COOH + NaOH)',
      nameAr: 'معايرة حمض الخليك التجاري (خل الطعام)',
      descriptionEn: 'Basic salt hydrolysis (sodium acetate) creates equivalence point at pH ~8.72; pKa buffer plateau at 4.76.',
      descriptionAr: 'تميؤ ملح أسيتات الصوديوم القلوي يجعل نقطة التكافؤ عند pH 8.72 مع ثبات منظم عند pKa = 4.76.',
      params: { systemType: 1, indicatorId: 'phenolphthalein', analyteVolumeMl: 25, titrantAddedMl: 0 },
      badge: 'pH_eq = 8.7',
    },
    {
      id: 'preset-strong-weak',
      nameEn: 'Ammonia Solution (HCl + NH₃)',
      nameAr: 'معايرة هيدروكسيد الأمونيوم بحمض الهيدروكلوريك',
      descriptionEn: 'Acidic salt hydrolysis (ammonium chloride) creates equivalence point at pH ~5.28; methyl orange indicator required.',
      descriptionAr: 'تميؤ ملح كلوريد الأمونيوم الحمضي يضع نقطة التكافؤ عند pH 5.28 ويتطلب استخدام الميثيل البرتقالي.',
      params: { systemType: 2, indicatorId: 'methyl_orange', analyteVolumeMl: 25, titrantAddedMl: 0 },
      badge: 'pH_eq = 5.3',
    },
    {
      id: 'preset-diprotic',
      nameEn: 'Diprotic Oxalic Acid (Two Equivalence Steps)',
      nameAr: 'حمض الأكساليك ثنائي البروتون (قفزتان متتاليتان)',
      descriptionEn: 'Sequential deprotonation exhibiting two distinct buffer zones and two equivalence points.',
      descriptionAr: 'تأين مرحلي يعرض منطقتين منظمتين وقفزتين متتاليتين في الرقم الهيدروجيني.',
      params: { systemType: 3, indicatorId: 'phenolphthalein', analyteVolumeMl: 25, titrantAddedMl: 0 },
      badge: '2 Inflections',
    },
  ],

  poePrompts: [
    {
      id: 'poe-acetic-indicator',
      titleEn: 'Indicator Suitability for Weak Acid / Strong Base Titration',
      titleAr: 'مدى ملاءمة الدليل لمعايرة حمض ضعيف مع قاعدة قوية',
      scenarioEn: 'A chemist titrates 0.1 M acetic acid (CH₃COOH) with 0.1 M NaOH. The reaction produces sodium acetate (CH₃COONa) and water.',
      scenarioAr: 'يقوم طالب كيمياء بمعايرة 0.1 مولار حمض أسيتيك بمحلول 0.1 مولار هيدروكسيد صوديوم ليتكون أسيتات صوديوم وماء.',
      questionEn: 'Why is phenolphthalein an excellent indicator for this titration, whereas methyl orange is completely unsuitable?',
      questionAr: 'لماذا يعتبر الفينولفثالين دليلاً ممتازاً لهذه المعايرة بينما الميثيل البرتقالي غير مناسب إطلاقاً؟',
      optionsEn: [
        'Phenolphthalein is cheaper and safer to dispose of than methyl orange in academic labs.',
        'Sodium acetate hydrolyzes producing basic OH⁻ ions (pH_eq ≈ 8.7), which matches the phenolphthalein transition range (8.2–10.0), whereas methyl orange changes color at pH 3.1–4.4 long before neutralization.',
        'Methyl orange destroys acetic acid molecules before the NaOH can react with them.',
      ],
      optionsAr: [
        'الفينولفثالين أرخص ثمناً وأكثر أماناً في التخلص منه من الميثيل البرتقالي.',
        'ملح أسيتات الصوديوم يتميأ قاعدياً (نقطة التكافؤ عند pH ≈ 8.7) وهو ما يقع ضمن مدى الفينولفثالين (8.2-10.0)، بينما يتغير الميثيل البرتقالي عند 3.1-4.4 قبل التعادل بكثير.',
        'الميثيل البرتقالي يفكك جزيئات حمض الأسيتيك قبل أن تتفاعل مع هيدروكسيد الصوديوم.',
      ],
      correctOptionIndex: 1,
      scientificExplanationEn: 'At the equivalence point of a weak acid and strong base, the conjugate base A⁻ hydrolyzes: A⁻ + H₂O ⇌ HA + OH⁻, producing an alkaline solution (pH 8–9). Phenolphthalein (range 8.2–10.0) changes color precisely across this vertical jump.',
      scientificExplanationAr: 'عند نقطة التكافؤ لحمض ضعيف مع قاعدة قوية، يتميأ أيون الأسيتات السالب ساحباً بروتوناً من الماء ومحرراً أيونات الهيدروكسيد OH⁻ ليصبح المحلول قلوياً (pH 8-9)، وهو ما يناسب مدى تغير الفينولفثالين تماماً.',
    },
  ],

  notebookConfig: {
    xLabelEn: 'Buret Volume V_titrant',
    xLabelAr: 'حجم المحلول المضاف من السحاحة',
    xUnit: 'mL',
    yLabelEn: 'Measured pH',
    yLabelAr: 'الرقم الهيدروجيني pH',
    yUnit: 'pH',
    recommendedPointsCount: 6,
  },

  supportedInstruments: ['multimeter', 'stopwatch', 'scratchpad'],
};

export const TitrationLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const stirrerAngleRef = useRef<number>(0);
  const dropPhaseRef = useRef<number>(0);

  const lab = useVirtualLab<TitrationParams, TitrationState>({
    definition: TITRATION_LAB_DEFINITION,
    onStep: (dt) => {
      const speedFrac = lab.params.stirrerSpeed / 100;
      stirrerAngleRef.current = (stirrerAngleRef.current + speedFrac * dt * 25) % (Math.PI * 2);
      dropPhaseRef.current = (dropPhaseRef.current + dt * 2) % 1;
    },
  });

  const { params } = lab;
  const currentSys = SYSTEM_CONFIGS[params.systemType] || SYSTEM_CONFIGS[0];

  // Configure analytical system object for EquilibriumEngine
  const systemObj: TitrationSystem = {
    type: currentSys.type,
    analyteVolumeMl: params.analyteVolumeMl,
    analyteConcentrationM: params.analyteConcM,
    titrantConcentrationM: params.titrantConcM,
    Ka1: currentSys.pKa1 ? Math.pow(10, -currentSys.pKa1) : undefined,
    Ka2: currentSys.pKa2 ? Math.pow(10, -currentSys.pKa2) : undefined,
    Kb: currentSys.pKb ? Math.pow(10, -currentSys.pKb) : undefined,
  };

  // Instantaneous pH and major chemical species calculation
  const { pH: currentPh, bufferCapacity, majorSpecies } = calculateTitrationPH(systemObj, params.titrantAddedMl);

  // Stoichiometric equivalence point volume: V_eq = (Va * Ca) / Cb
  const molesAnalyte = (params.analyteVolumeMl / 1000) * params.analyteConcM;
  const eqVolumeMl = (molesAnalyte / params.titrantConcM) * 1000;
  const isAtEquivalence = Math.abs(params.titrantAddedMl - eqVolumeMl) < 0.3;

  // Indicator colorimetric RGB computation
  const indicatorColor = getIndicatorColor(params.indicatorId, currentPh, 0.65);
  const indicatorInfo = COMMON_INDICATORS[params.indicatorId] || COMMON_INDICATORS['phenolphthalein'];

  // Glass electrode potential: E = 0.400 - 0.05916 * pH (Volts)
  const glassElectrodePotentialV = parseFloat((0.414 - 0.05916 * currentPh).toFixed(3));

  const multimeterReading: DMMReading = {
    voltageDC: glassElectrodePotentialV,
    voltageAC: 0,
    currentDC: 0.001,
    resistance: 1e6, // High input impedance glass electrode
    continuityBeep: false,
  };

  // Telemetry Cards
  const telemetry: LabTelemetryMetric[] = [
    {
      id: 'current-ph',
      labelEn: 'Solution pH',
      labelAr: 'الرقم الهيدروجيني pH',
      symbolTex: '\\text{pH}',
      value: currentPh.toFixed(2),
      status: isAtEquivalence ? 'optimal' : currentPh < 6.5 ? 'warning' : 'normal',
      descriptionEn: `Major Species: ${majorSpecies}`,
      descriptionAr: `النوع الكيميائي السائد: ${majorSpecies}`,
    },
    {
      id: 'poh-calc',
      labelEn: 'Solution pOH',
      labelAr: 'الأس الهيدروكسيلي pOH',
      symbolTex: '\\text{pOH}',
      value: (14.0 - currentPh).toFixed(2),
      status: 'normal',
    },
    {
      id: 'h-plus-conc',
      labelEn: '[H⁺] Hydronium Concentration',
      labelAr: 'تركيز أيون الهيدرونيوم [⁺H]',
      symbolTex: '[\\text{H}^+]',
      value: Math.pow(10, -currentPh).toExponential(2),
      unit: 'M',
      status: 'normal',
    },
    {
      id: 'buffer-capacity',
      labelEn: 'Buffer Capacity (β)',
      labelAr: 'سعة المحلول المنظم (β)',
      symbolTex: '\\beta',
      value: bufferCapacity.toFixed(3),
      status: bufferCapacity > 0.02 ? 'optimal' : 'normal',
      descriptionEn: 'Resistance to pH shift upon acid/base addition',
      descriptionAr: 'مقاومة التغير في pH عند إضافة حمض أو قاعدة',
    },
  ];

  // High-DPI Canvas Rendering
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

    // Split Viewport: Left = Apparatus (42%), Right = Live Titration Curve (58%)
    const splitX = width * 0.42;

    renderApparatus(ctx, splitX, height);
    renderTitrationCurve(ctx, splitX, width, height);

    ctx.restore();
  };

  // 1. APPARATUS (Buret, Droplet, Magnetic Stirrer, Conical Flask, pH Electrode)
  const renderApparatus = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const cx = w / 2;

    // Background Benchtop Tone
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, w, h);

    // Apparatus Stand Pole
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx - 95, 30, 8, h - 60);

    // Stand Base
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - 130, h - 35, 180, 14);

    // Clamp arm holding buret
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx - 90, 85, 90, 7);

    // GRADUATED BURET
    const buretW = 20;
    const buretH = 175;
    const buretX = cx - buretW / 2;
    const buretY = 35;

    // Glass tube body
    ctx.fillStyle = 'rgba(30, 41, 59, 0.5)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(buretX, buretY, buretW, buretH, [3, 3, 0, 0]);
    ctx.fill();
    ctx.stroke();

    // Liquid in Buret (meniscus drops as titrantAddedMl increases)
    const liquidFraction = Math.max(0, (50 - params.titrantAddedMl) / 50);
    const liquidTopY = buretY + buretH * (1 - liquidFraction);
    const liquidHeight = buretH * liquidFraction;

    if (liquidHeight > 0) {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.fillRect(buretX + 2, liquidTopY, buretW - 4, liquidHeight);

      // Curved Meniscus line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(buretX + buretW / 2, liquidTopY, buretW / 2 - 2, 3, 0, 0, Math.PI);
      ctx.stroke();
    }

    // Metric Graduations on Buret
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    for (let ml = 0; ml <= 50; ml += 10) {
      const gy = buretY + (ml / 50) * buretH;
      ctx.beginPath();
      ctx.moveTo(buretX + buretW - 8, gy);
      ctx.lineTo(buretX + buretW, gy);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(ml.toString(), buretX - 3, gy + 3);
    }

    // Stopcock Valve & Dispenser Tip
    const stopcockY = buretY + buretH;
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(cx, stopcockY + 8, 6, 0, Math.PI * 2);
    ctx.fill();

    // Nozzle Tip
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(cx - 3, stopcockY + 12);
    ctx.lineTo(cx + 3, stopcockY + 12);
    ctx.lineTo(cx + 1, stopcockY + 28);
    ctx.lineTo(cx - 1, stopcockY + 28);
    ctx.closePath();
    ctx.fill();

    // Falling Titrant Droplet
    if (params.titrantAddedMl > 0) {
      const dropY = stopcockY + 28 + dropPhaseRef.current * 42;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(cx, dropY, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // ERLENMEYER CONICAL FLASK
    const flaskY = stopcockY + 75;
    const neckW = 28;
    const baseW = 105;
    const flaskH = 110;

    // Flask Glass Body
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx - neckW / 2, flaskY);
    ctx.lineTo(cx + neckW / 2, flaskY);
    ctx.lineTo(cx + neckW / 2, flaskY + 25);
    ctx.lineTo(cx + baseW / 2, flaskY + flaskH);
    ctx.lineTo(cx - baseW / 2, flaskY + flaskH);
    ctx.lineTo(cx - neckW / 2, flaskY + 25);
    ctx.closePath();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Solution Fill in Conical Flask
    // Volume increases slightly with titrant addition
    const solFillFrac = Math.min(0.65, 0.35 + (params.titrantAddedMl / 50) * 0.25);
    const solTopY = flaskY + flaskH * (1 - solFillFrac);
    const solTopWidth = neckW + (baseW - neckW) * solFillFrac;

    ctx.beginPath();
    ctx.moveTo(cx - solTopWidth / 2, solTopY);
    ctx.lineTo(cx + solTopWidth / 2, solTopY);
    ctx.lineTo(cx + baseW / 2 - 3, flaskY + flaskH - 3);
    ctx.lineTo(cx - baseW / 2 + 3, flaskY + flaskH - 3);
    ctx.closePath();
    ctx.fillStyle = indicatorColor;
    ctx.fill();

    // Liquid surface vortex ripple
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(cx, solTopY, solTopWidth / 2 - 4, 3.5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // White Teflon Magnetic Stir Bar rotating at bottom
    ctx.save();
    ctx.translate(cx, flaskY + flaskH - 12);
    ctx.rotate(stirrerAngleRef.current);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(-10, -3.5, 20, 7, 3);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // SUBMERGED GLASS pH ELECTRODE PROBE
    const probeX = cx + 24;
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(probeX, flaskY - 15);
    ctx.lineTo(probeX, flaskY + flaskH - 24);
    ctx.stroke();

    // Electrode Bulb
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(probeX, flaskY + flaskH - 24, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Flask Label Indicator
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${indicatorInfo.name} (${isArabic ? indicatorInfo.nameAr : ''})`, cx, h - 14);
  };

  // 2. LIVE TITRATION SIGMOIDAL CURVE & INDICATOR TRANSITION BAND
  const renderTitrationCurve = (ctx: CanvasRenderingContext2D, startX: number, totalW: number, totalH: number) => {
    const plotW = totalW - startX - 45;
    const plotH = totalH - 70;
    const originX = startX + 35;
    const originY = 30 + plotH;

    // Background Grid Box
    ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
    ctx.fillRect(originX, 30, plotW, plotH);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.strokeRect(originX, 30, plotW, plotH);

    // Indicator Transition Band (Shaded area across pH range)
    const indY1 = originY - (indicatorInfo.transitionRange[1] / 14) * plotH;
    const indY2 = originY - (indicatorInfo.transitionRange[0] / 14) * plotH;
    const indBandH = indY2 - indY1;

    ctx.fillStyle = 'rgba(236, 72, 153, 0.12)';
    ctx.fillRect(originX, indY1, plotW, indBandH);
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.35)';
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(originX, indY1, plotW, indBandH);
    ctx.setLineDash([]);

    ctx.fillStyle = '#f472b6';
    ctx.font = 'bold 9px system-ui';
    ctx.textAlign = 'right';
    ctx.fillText(
      `${indicatorInfo.name} (${indicatorInfo.transitionRange[0]} - ${indicatorInfo.transitionRange[1]})`,
      originX + plotW - 8,
      indY1 + 12
    );

    // Gridlines for pH = 0, 2, 4, 6, 7, 8, 10, 12, 14
    for (let ph = 0; ph <= 14; ph += 2) {
      const gy = originY - (ph / 14) * plotH;
      ctx.strokeStyle = ph === 7 ? 'rgba(56, 189, 248, 0.35)' : '#1e293b';
      ctx.lineWidth = ph === 7 ? 1.5 : 1;
      ctx.beginPath();
      ctx.moveTo(originX, gy);
      ctx.lineTo(originX + plotW, gy);
      ctx.stroke();

      ctx.fillStyle = ph === 7 ? '#38bdf8' : '#64748b';
      ctx.font = '9px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(ph.toString(), originX - 6, gy + 3);
    }

    // Gridlines for Volume (0 to 50 mL in 10 mL steps)
    for (let v = 0; v <= 50; v += 10) {
      const gx = originX + (v / 50) * plotW;
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(gx, 30);
      ctx.lineTo(gx, originY);
      ctx.stroke();

      ctx.fillStyle = '#64748b';
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(v.toString(), gx, originY + 14);
    }

    // Equivalence Point Vertical Dashed Line
    const eqX = originX + (eqVolumeMl / 50) * plotW;
    if (eqVolumeMl <= 50) {
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(eqX, 30);
      ctx.lineTo(eqX, originY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`V_eq = ${eqVolumeMl.toFixed(1)} mL`, eqX, 24);
    }

    // Full Continuous Titration Sigmoid Curve
    const points = generateTitrationCurve(systemObj, 90);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    points.forEach((pt, idx) => {
      const px = originX + (pt.titrantVolumeMl / 50) * plotW;
      const py = originY - (pt.pH / 14) * plotH;
      if (idx === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    // Real-Time Animated Operating Point Cursor
    const currX = originX + (params.titrantAddedMl / 50) * plotW;
    const currY = originY - (currentPh / 14) * plotH;

    // Cursor Pulse Glow
    ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.beginPath();
    ctx.arc(currX, currY, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(currX, currY, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cursor Label Tag
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`pH ${currentPh.toFixed(2)} (${params.titrantAddedMl.toFixed(1)} mL)`, currX + 9, currY - 8);

    // Axis Titles
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 10px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(isArabic ? 'حجم المحلول القياسي المضاف (mL)' : 'Titrant Added Volume V (mL)', originX + plotW / 2, originY + 28);

    ctx.save();
    ctx.translate(originX - 22, originY - plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('pH', 0, 0);
    ctx.restore();
  };

  return (
    <VirtualLabShell<TitrationParams, TitrationState>
      definition={TITRATION_LAB_DEFINITION}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      currentXValue={params.titrantAddedMl}
      currentYValue={currentPh}
      renderCustomControls={() => (
        <div className="space-y-3" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Reaction System & Indicator Selectors */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {isArabic ? 'اختيار نظام المعايرة والدليل الكيميائي:' : 'Select Titration System & Indicator:'}
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* System Selector */}
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">
                  {isArabic ? 'نظام المعايرة:' : 'Titration Reaction:'}
                </span>
                <select
                  value={params.systemType}
                  onChange={(e) => lab.updateParam('systemType', parseInt(e.target.value))}
                  className="w-full px-2 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-emerald-400"
                >
                  {SYSTEM_CONFIGS.map((sys) => (
                    <option key={sys.id} value={sys.id}>
                      {isArabic ? sys.nameAr : sys.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Indicator Selector */}
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">
                  {isArabic ? 'الدليل الكيميائي:' : 'Indicator:'}
                </span>
                <select
                  value={params.indicatorId}
                  onChange={(e) => lab.updateParam('indicatorId', e.target.value)}
                  className="w-full px-2 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-emerald-400"
                >
                  {Object.entries(COMMON_INDICATORS).map(([id, ind]) => (
                    <option key={id} value={id}>
                      {isArabic ? ind.nameAr : ind.name} ({ind.transitionRange[0]}–{ind.transitionRange[1]})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Quick Dispense Step Buttons */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">{isArabic ? 'إضافة سريعة بالقطرات:' : 'Incremental Dispense:'}</span>
              <span className="font-mono text-cyan-400 font-bold">{params.titrantAddedMl.toFixed(1)} / 50.0 mL</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[+1.0, +2.5, +5.0, +10.0].map((step) => (
                <button
                  key={step}
                  onClick={() => lab.updateParam('titrantAddedMl', Math.min(50, params.titrantAddedMl + step))}
                  className="py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 hover:bg-slate-800 transition-all cursor-pointer text-center"
                >
                  +{step} mL
                </button>
              ))}
            </div>
          </div>

          {/* Equivalence Point Banner */}
          <div
            className={`p-2.5 rounded-xl border text-center transition-all ${
              isAtEquivalence
                ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md shadow-amber-950/50 animate-pulse'
                : 'bg-slate-950/80 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-[11px] font-bold block">
              {isAtEquivalence
                ? isArabic
                  ? '✨ تم الوصول لنقطة التكافؤ والتعادل التام!'
                  : '✨ Stoichiometric Equivalence Point Reached!'
                : isArabic
                ? `حجم التكافؤ النظري المتوقع: ${eqVolumeMl.toFixed(1)} mL`
                : `Theoretical Equivalence Volume: ${eqVolumeMl.toFixed(1)} mL`}
            </span>
          </div>
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="titration-viewport"
        lang={lang}
        aspectRatio="aspect-[16/10]"
        minHeight={440}
        onRender={handleRenderCanvas}
      />
    </VirtualLabShell>
  );
};
