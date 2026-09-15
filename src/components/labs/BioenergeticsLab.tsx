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
  drawVolumetricBeam,
  drawGlowingParticle,
  drawMetallicCylinder,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import {
  Zap,
  Sun,
  BatteryCharging,
  AlertTriangle,
  Flame,
  Layers,
  Table as TableIcon,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface BioenergeticsParams {
  simulationMode: number; // 0: Cellular Respiration, 1: Photosynthesis
  glucoseMoles: number; // 1 - 10 mol
  oxygenLevel: number; // 0 - 100 % ( <20% is anaerobic fermentation)
  lightIntensity: number; // 0 - 100 %
  co2Ppm: number; // 100 - 1200 ppm
  temperatureC: number; // 10 - 45 °C
}

interface BioenergeticsState {
  turbineAngle: number;
}

const BIOENERGETICS_LAB_DEFINITION: LabDefinition<BioenergeticsParams, BioenergeticsState> = {
  id: 'bioenergetics-lab',
  subject: 'biology',
  chapterRef: 'Unit 1 / Chapter 3: Cellular Respiration & Photosynthesis',
  titleEn: 'Bioenergetics & Cellular Metabolism Laboratory',
  titleAr: 'معمل الطاقة الحيوية والتمثيل الغذائي الخلوي',
  subtitleEn: 'High-DPI Chemiosmotic ATP Synthase, Electron Transport Chain, and Blackman’s Photosynthetic Kinetics',
  subtitleAr: 'محاكاة عالية الدقة لتخليق ATP بالأسموزية الكيميائية، وسلسلة نقل الإلكترون، ومحددات بلاكمان للبناء الضوئي',
  taglineEn: 'Tier-1 Cellular Energetics Simulation Platform',
  taglineAr: 'منصة محاكاة الطاقة الحيوية والأيض الخلوي المتقدمة',

  objectives: [
    {
      id: 'obj-atp-yield',
      textEn: 'Analyze the quantitative ATP stoichiometry: 30–32 ATP in aerobic respiration vs 2 ATP in anaerobic fermentation.',
      textAr: 'تحليل الحصيلة الكمية لجزيئات ATP: ٣٠-٣٢ ATP في التنفس الهوائي مقابل ٢ ATP في التخمر اللاهوائي.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj-chemiosmosis',
      textEn: 'Examine proton pumping (H⁺) across mitochondrial cristae / thylakoid membranes driving rotary ATP Synthase.',
      textAr: 'دراسة ضخ البروتونات (⁺H) عبر أعراف الميتوكوندريا وأغشية الثايلاكويد لتشغيل إنزيم تخليق ATP الدوار.',
      bloomLevel: 'understand',
    },
    {
      id: 'obj-blackman',
      textEn: 'Investigate Blackman’s Law of Limiting Factors and enzyme thermal denaturation (>40°C) on photosynthetic velocity.',
      textAr: 'استقصاء قانون بلاكمان للعوامل المحددة وتأثير التثبيط الحراري للإنزيمات (>٤٠°م) على سرعة البناء الضوئي.',
      bloomLevel: 'apply',
    },
  ],

  safetyWarnings: [
    {
      id: 'warn-hypoxia',
      titleEn: 'Severe Cellular Hypoxia',
      titleAr: 'نقص الأكسجين الخلوي الحاد',
      messageEn: 'When O₂ falls below 20%, mitochondrial oxidative phosphorylation shuts down, causing rapid lactic acid or ethanol accumulation.',
      messageAr: 'عند انخفاض الأكسجين عن ٢٠٪، تتوقف الفسفرة التأكسدية بالميتوكوندريا مما يؤدي لتراكم سريع لحمض اللاكتيك أو الإيثانول وإجهاد الخلية.',
      severity: 'warning',
    },
    {
      id: 'warn-denaturation',
      titleEn: 'Thermal Enzyme Denaturation',
      titleAr: 'التثبيط الحراري لإنزيم روبيسكو',
      messageEn: 'Temperatures above 40°C permanently disrupt the tertiary conformation of RuBisCO, causing photosynthetic collapse regardless of sunlight intensity.',
      messageAr: 'درجات الحرارة الأعلى من ٤٠°م تؤدي إلى تغير التركيب الفراغي لإنزيم روبيسكو مما يتسبب في هبوط حاد للبناء الضوئي رغم وفرة الضوء.',
      severity: 'danger',
    },
  ],

  keyFormulas: [
    {
      id: 'eq-aerobic',
      labelEn: 'Aerobic Respiration',
      labelAr: 'معادلة التنفس الخلوي الهوائي',
      tex: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 30\\text{--}32\\text{ ATP}',
      descriptionEn: 'Complete enzymatic oxidation of 1 mol glucose yielding 30–32 ATP via glycolysis, link reaction, Krebs cycle, and chemiosmosis.',
      descriptionAr: 'الأكسدة التامة لجزيء الجلوكوز لإنتاج ٣٠-٣٢ ATP عبر انشطار الجلوكوز والتفاعل الرابط ودورة كريبس وسلسلة نقل الإلكترون.',
    },
    {
      id: 'eq-ferment',
      labelEn: 'Anaerobic Fermentation',
      labelAr: 'معادلة التخمر اللاهوائي',
      tex: '\\text{C}_6\\text{H}_{12}\\text{O}_6 \\longrightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2 + 2\\text{ ATP}',
      descriptionEn: 'Cytosolic glycolysis without oxygen yielding 2 net ATP with incomplete oxidation to ethanol or lactic acid.',
      descriptionAr: 'انشطار الجلوكوز في السيتوسول دون أكسجين بربح صافٍ ٢ ATP مع تحول البيروفيك إلى كحول إيثيلي أو حمض لاكتيك.',
    },
    {
      id: 'eq-photosynth',
      labelEn: 'Complete Photosynthesis',
      labelAr: 'معادلة البناء الضوئي التامة',
      tex: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} + h\\nu \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2',
      descriptionEn: 'Light reactions in thylakoids (photolysis) coupled to Calvin cycle carbon fixation in stroma (ΔG° = +2870 kJ/mol).',
      descriptionAr: 'تفاعلات ضوئية في الثايلاكويد مقرونة بتثبيت الكربون في حلقة كالفن بالستروما لاختزال CO₂ إلى سكر جلوكوز.',
    },
    {
      id: 'eq-chemiosmosis',
      labelEn: 'Chemiosmotic Proton-Motive Force',
      labelAr: 'القوة الدافعة البروتونية بالأسموزية الكيميائية',
      tex: '\\Delta p = \\Delta \\Psi - \\frac{2.303 RT}{F} \\Delta \\text{pH}',
      descriptionEn: 'Electrochemical proton gradient across the inner mitochondrial or thylakoid membrane driving ATP Synthase.',
      descriptionAr: 'التدرج الكهروكيميائي للبروتونات عبر الغشاء الداخلي للميتوكوندريا أو الثايلاكويد المشغّل لإنزيم تخليق ATP.',
    },
  ],

  defaultParams: {
    simulationMode: 0,
    glucoseMoles: 1,
    oxygenLevel: 100,
    lightIntensity: 80,
    co2Ppm: 500,
    temperatureC: 25,
  },

  paramSchema: {
    simulationMode: {
      key: 'simulationMode',
      labelEn: 'Metabolic Pathway',
      labelAr: 'المسار الأيضي المستهدف',
      type: 'select',
      defaultValue: 0,
      options: [
        { value: 0, labelEn: 'Cellular Respiration (Mitochondria)', labelAr: 'التنفس الخلوي (الميتوكوندريا)' },
        { value: 1, labelEn: 'Photosynthesis (Chloroplast)', labelAr: 'البناء الضوئي (البلاستيدات)' },
      ],
      category: 'primary',
    },
    glucoseMoles: {
      key: 'glucoseMoles',
      labelEn: 'Glucose Substrate',
      labelAr: 'كمية الجلوكوز المستهلك',
      symbolTex: 'n_{\\text{glucose}}',
      unit: 'mol',
      type: 'number',
      min: 1,
      max: 10,
      step: 1,
      defaultValue: 1,
      category: 'primary',
      visibleIf: (p) => p.simulationMode === 0,
    },
    oxygenLevel: {
      key: 'oxygenLevel',
      labelEn: 'Oxygen Supply (O₂)',
      labelAr: 'إمداد الأكسجين (المسار)',
      symbolTex: '\\%\\text{O}_2',
      unit: '%',
      type: 'number',
      min: 0,
      max: 100,
      step: 5,
      defaultValue: 100,
      category: 'primary',
      visibleIf: (p) => p.simulationMode === 0,
    },
    lightIntensity: {
      key: 'lightIntensity',
      labelEn: 'Light Intensity',
      labelAr: 'شدة الإضاءة الفوتونية',
      symbolTex: 'I_{\\text{light}}',
      unit: '%',
      type: 'number',
      min: 0,
      max: 100,
      step: 5,
      defaultValue: 80,
      category: 'secondary',
      visibleIf: (p) => p.simulationMode === 1,
    },
    co2Ppm: {
      key: 'co2Ppm',
      labelEn: 'CO₂ Atmospheric Concentration',
      labelAr: 'تركيز ثاني أكسيد الكربون',
      symbolTex: '[\\text{CO}_2]',
      unit: 'ppm',
      type: 'number',
      min: 100,
      max: 1200,
      step: 25,
      defaultValue: 500,
      category: 'secondary',
      visibleIf: (p) => p.simulationMode === 1,
    },
    temperatureC: {
      key: 'temperatureC',
      labelEn: 'Temperature (Enzymes)',
      labelAr: 'درجة الحرارة (حركية الإنزيمات)',
      symbolTex: 'T',
      unit: '°C',
      type: 'number',
      min: 10,
      max: 45,
      step: 1,
      defaultValue: 25,
      category: 'environmental',
    },
  },

  presets: [
    {
      id: 'preset-aerobic-normoxia',
      nameEn: 'Aerobic Respiration (Normoxia)',
      nameAr: 'تنفس هوائي تام (أكسجين وفير)',
      descriptionEn: 'Standard normoxic conditions: 1 mol glucose yields 32 ATP with complete water and CO₂ release.',
      descriptionAr: 'ظروف طبيعية تامة: أكسدة جزيء جلوكوز لإنتاج ٣٢ ATP واستهلاك ٦ أكسجين.',
      params: { simulationMode: 0, glucoseMoles: 1, oxygenLevel: 100, temperatureC: 37 },
      badge: '32 ATP',
    },
    {
      id: 'preset-anaerobic-hypoxia',
      nameEn: 'Anaerobic Fermentation (Hypoxia)',
      nameAr: 'تنفس لاهوائي وتخمر (نقص أكسجين)',
      descriptionEn: 'Hypoxic conditions: ETC blocked, only cytosolic glycolysis operates yielding 2 net ATP.',
      descriptionAr: 'غياب الأكسجين: تعطل الميتوكوندريا والاكتفاء بانشطار الجلوكوز بربح ٢ ATP فقط.',
      params: { simulationMode: 0, glucoseMoles: 1, oxygenLevel: 0, temperatureC: 37 },
      badge: '2 ATP',
    },
    {
      id: 'preset-optimal-photosynth',
      nameEn: 'Optimal Photosynthesis (Saturating Sun)',
      nameAr: 'بناء ضوئي أمثل (إضاءة وCO₂ مثاليان)',
      descriptionEn: 'High light (85%), elevated CO₂ (800 ppm), and optimal enzyme temperature (28°C).',
      descriptionAr: 'شدة إضاءة ٨٥٪ مع تركيز ٨٠٠ ppm لـ CO₂ ودرجة حرارة إنزيمية مثالية ٢٨°م.',
      params: { simulationMode: 1, lightIntensity: 85, co2Ppm: 800, temperatureC: 28 },
      badge: 'Max Rate',
    },
    {
      id: 'preset-light-limited',
      nameEn: 'Blackman: Light-Limited',
      nameAr: 'محدد بلاكمان: نقص شدة الإضاءة',
      descriptionEn: 'Dim light (15%) limits rate despite ample CO₂ and optimal temperature.',
      descriptionAr: 'الإضاءة الخافتة (١٥٪) تصبح العامل المحدد الوحيد لسرعة التفاعل وفق قانون بلاكمان.',
      params: { simulationMode: 1, lightIntensity: 15, co2Ppm: 900, temperatureC: 25 },
      badge: 'Light Limit',
    },
    {
      id: 'preset-co2-starved',
      nameEn: 'Blackman: CO₂-Starved',
      nameAr: 'محدد بلاكمان: ندرة غاز CO₂',
      descriptionEn: 'Abundant light but low CO₂ (150 ppm) restricts RuBisCO carbon fixation.',
      descriptionAr: 'وفرة الإضاءة مع تدني تركيز CO₂ (١٥٠ ppm) يقيد تثبيت الكربون في حلقة كالفن.',
      params: { simulationMode: 1, lightIntensity: 90, co2Ppm: 150, temperatureC: 25 },
      badge: 'CO₂ Limit',
    },
    {
      id: 'preset-heat-denaturation',
      nameEn: 'RuBisCO Heat Stress (>40°C)',
      nameAr: 'إجهاد حراري وتثبيط إنزيم روبيسكو',
      descriptionEn: 'Thermal denaturation of photosynthetic enzymes sharply drops efficiency at 43°C.',
      descriptionAr: 'درجة حرارة ٤٣°م تؤدي إلى هبوط حاد للبناء الضوئي بسبب تفكك البنية الفراغية للإنزيمات.',
      params: { simulationMode: 1, lightIntensity: 85, co2Ppm: 800, temperatureC: 43 },
      badge: 'Denatured',
    },
  ],

  poePrompts: [
    {
      id: 'poe-blackman-heat',
      titleEn: 'Blackman’s Principle: Extreme Temperature Effect',
      titleAr: 'مبدأ بلاكمان: تأثير درجات الحرارة المرتفعة',
      scenarioEn: 'A greenhouse has maximum artificial sunlight (95%) and saturated CO₂ (1000 ppm). The internal temperature is elevated to 44°C.',
      scenarioAr: 'صوبة زراعية تتوافر بها أقصى شدة إضاءة (٩٥٪) وتركيز مشبع من CO₂ (١٠٠٠ ppm)، ثم رُفعت درجة الحرارة إلى ٤٤°م.',
      questionEn: 'What will happen to the photosynthetic rate and why?',
      questionAr: 'ماذا سيحدث لمعدل البناء الضوئي، وما التفسير العلمي لذلك؟',
      optionsEn: [
        'The photosynthetic rate increases indefinitely because molecular collision speeds increase with temperature.',
        'The rate drops precipitously due to thermal denaturation of RuBisCO and light-harvesting complex proteins.',
        'The rate remains perfectly constant at 100% because light intensity is the only master driver.',
      ],
      optionsAr: [
        'يزداد معدل البناء الضوئي بشكل مستمر لأن سرعة تصادم الجزيئات تزداد بارتفاع الحرارة.',
        'يهبط المعدل هبوطاً حاداً بسبب التثبيط الحراري والتغير الفراغي لإنزيم روبيسكو وبروتينات معقدات الضوء.',
        'يظل المعدل ثابتاً تماماً عند ١٠٠٪ لأن شدة الإضاءة هي المحرك الوحيد للبناء الضوئي.',
      ],
      correctOptionIndex: 1,
      scientificExplanationEn: 'According to Blackman’s Principle of Limiting Factors and enzyme kinetics, reaction velocity increases up to the thermal optimum (25–30°C). Above ~38–40°C, enzyme denaturation becomes dominant, creating a steep decline.',
      scientificExplanationAr: 'وفق قانون بلاكمان للعوامل المحددة وكيناتيكا الإنزيمات، تزداد سرعة التفاعل حتى الوصول للحرارة المثلى (٢٥-٣٠°م)، ثم تبدأ الإنزيمات بالتخثر والتثبيط عند تجاوز ٤٠°م مما يسبب انهياراً للمعدل.',
    },
  ],

  notebookConfig: {
    xLabelEn: 'Independent Factor (Light % / Glucose mol)',
    xLabelAr: 'العامل المستقل (شدة الإضاءة ٪ / كمية الجلوكوز mol)',
    xUnit: 'units',
    yLabelEn: 'Dependent Output (Rate % / Total ATP)',
    yLabelAr: 'الناتج التابع (المعدل ٪ / حصيلة ATP)',
    yUnit: 'yield',
    recommendedPointsCount: 5,
  },

  supportedInstruments: ['multimeter', 'stopwatch', 'scratchpad'],
};

export const BioenergeticsLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const [activeSubTab, setActiveSubTab] = useState<'simulation' | 'stages' | 'comparative'>('simulation');
  const [selectedRespStage, setSelectedRespStage] = useState<number>(4);

  // Real-time animation offsets stored in ref to decouple from React state
  const turbineAngleRef = useRef<number>(0);
  const calvinAngleRef = useRef<number>(0);
  const particleOffsetRef = useRef<number>(0);

  // Core Simulation Hook
  const lab = useVirtualLab<BioenergeticsParams, BioenergeticsState>({
    definition: BIOENERGETICS_LAB_DEFINITION,
    onStep: (dt) => {
      const isResp = lab.params.simulationMode === 0;
      const isAerobic = lab.params.oxygenLevel >= 20;

      let speed = 0;
      if (isResp) {
        speed = isAerobic ? 3.5 : 0.4;
      } else {
        const lightFactor = Math.min(1.0, lab.params.lightIntensity / 80);
        const co2Factor = Math.min(1.0, lab.params.co2Ppm / 800);
        let tempFactor = 1.0;
        if (lab.params.temperatureC < 25) {
          tempFactor = 0.4 + 0.6 * ((lab.params.temperatureC - 10) / 15);
        } else if (lab.params.temperatureC <= 30) {
          tempFactor = 1.0;
        } else {
          tempFactor = Math.max(0.02, 1.0 - ((lab.params.temperatureC - 30) / 15));
        }
        speed = Math.min(lightFactor, co2Factor, tempFactor) * 4.0;
      }

      turbineAngleRef.current = (turbineAngleRef.current + speed * dt * 2.5) % (Math.PI * 2);
      calvinAngleRef.current = (calvinAngleRef.current + speed * dt * 1.5) % (Math.PI * 2);
      particleOffsetRef.current = (particleOffsetRef.current + speed * dt * 45) % 360;
    },
  });

  const { params } = lab;
  const isRespiration = params.simulationMode === 0;
  const isAerobic = params.oxygenLevel >= 20;

  // Stoichiometry Computations
  const atpPerGlucose = isAerobic ? 32 : 2;
  const totalAtp = params.glucoseMoles * atpPerGlucose;
  const o2Consumed = isAerobic ? params.glucoseMoles * 6 : 0;
  const co2Released = isAerobic ? params.glucoseMoles * 6 : params.glucoseMoles * 2;

  // Photosynthesis Limiting Factors (Blackman's Law)
  const lightFactor = Math.min(1.0, params.lightIntensity / 80);
  const co2Factor = Math.min(1.0, params.co2Ppm / 800);
  let tempFactor = 1.0;
  if (params.temperatureC < 25) {
    tempFactor = 0.4 + 0.6 * ((params.temperatureC - 10) / 15);
  } else if (params.temperatureC <= 30) {
    tempFactor = 1.0;
  } else {
    tempFactor = Math.max(0.02, 1.0 - ((params.temperatureC - 30) / 15));
  }

  const factors = [
    { nameEn: 'Light Intensity', nameAr: 'شدة الإضاءة', value: lightFactor, id: 'light' },
    { nameEn: 'CO₂ Concentration', nameAr: 'تركيز ثاني أكسيد الكربون', value: co2Factor, id: 'co2' },
    { nameEn: 'Temperature (Enzymes)', nameAr: 'درجة الحرارة (الإنزيمات)', value: tempFactor, id: 'temp' },
  ];
  factors.sort((a, b) => a.value - b.value);
  const primaryLimiting = factors[0];
  const photosyntheticRate = Math.round(Math.min(lightFactor, co2Factor, tempFactor) * 100);

  // Electrical Potential Probing (Membrane Potential for Multimeter)
  // Mitochondria: -180 mV across cristae (inside negative vs intermembrane space)
  // Chloroplast: +35 mV thylakoid lumen potential
  const membranePotentialMv = isRespiration
    ? isAerobic
      ? -180.0
      : -25.0
    : parseFloat((35.0 * (photosyntheticRate / 100)).toFixed(1));

  const multimeterReading: DMMReading = {
    voltageDC: membranePotentialMv / 1000,
    voltageAC: 0,
    currentDC: (totalAtp * 0.05) / 1000,
    resistance: 120,
    continuityBeep: false,
  };

  // Telemetry Metrics
  const telemetry: LabTelemetryMetric[] = isRespiration
    ? [
        {
          id: 'atp-yield',
          labelEn: 'Total ATP Yield',
          labelAr: 'إجمالي حصيلة ATP',
          symbolTex: '\\Sigma \\text{ATP}',
          value: totalAtp,
          unit: 'ATP',
          status: isAerobic ? 'optimal' : 'warning',
          descriptionEn: `${atpPerGlucose} ATP per glucose mole (${isAerobic ? 'Aerobic' : 'Fermentation'})`,
          descriptionAr: `${atpPerGlucose} ATP لكل مول جلوكوز (${isAerobic ? 'هوائي' : 'تخمر'})`,
        },
        {
          id: 'o2-flux',
          labelEn: 'O₂ Consumption',
          labelAr: 'استهلاك الأكسجين',
          symbolTex: 'n(\\text{O}_2)',
          value: o2Consumed,
          unit: 'mol',
          status: isAerobic ? 'normal' : 'alert',
        },
        {
          id: 'co2-flux',
          labelEn: 'CO₂ Release',
          labelAr: 'انطلاق ثاني أكسيد الكربون',
          symbolTex: 'n(\\text{CO}_2)',
          value: co2Released,
          unit: 'mol',
          status: 'normal',
        },
        {
          id: 'membrane-potential',
          labelEn: 'Mito ΔΨ Gradient',
          labelAr: 'جهد غشاء الميتوكوندريا',
          symbolTex: '\\Delta \\Psi',
          value: `${membranePotentialMv.toFixed(1)} mV`,
          status: isAerobic ? 'optimal' : 'alert',
        },
      ]
    : [
        {
          id: 'photo-rate',
          labelEn: 'Photosynthetic Rate',
          labelAr: 'معدل البناء الضوئي',
          symbolTex: 'v_{\\text{photo}}',
          value: `${photosyntheticRate}%`,
          status: photosyntheticRate > 75 ? 'optimal' : photosyntheticRate > 30 ? 'normal' : 'warning',
        },
        {
          id: 'limiting-factor',
          labelEn: 'Active Limiting Factor',
          labelAr: 'العامل المحدد الحرج',
          value: isArabic ? primaryLimiting.nameAr : primaryLimiting.nameEn,
          status: primaryLimiting.value < 0.4 ? 'alert' : 'normal',
          descriptionEn: 'Principle of Limiting Factors (Blackman)',
          descriptionAr: 'قانون بلاكمان للعوامل المحددة',
        },
        {
          id: 'o2-evolution',
          labelEn: 'O₂ Evolution (Photolysis)',
          labelAr: 'انطلاق O₂ (شطر الماء)',
          symbolTex: '\\text{O}_2\\uparrow',
          value: (photosyntheticRate * 0.06).toFixed(2),
          unit: 'mol/h',
          status: 'normal',
        },
        {
          id: 'co2-fixation',
          labelEn: 'CO₂ Fixation (RuBisCO)',
          labelAr: 'تثبيت CO₂ (روبيسكو)',
          symbolTex: '\\text{CO}_2\\downarrow',
          value: (photosyntheticRate * 0.06).toFixed(2),
          unit: 'mol/h',
          status: 'normal',
        },
      ];

  // Canvas High-DPI Rendering
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    viewport: LabViewportState,
    _dpr: number = 1,
    time: number = 0,
    _frame: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    ctx.clearRect(0, 0, width, height);

    // Coordinate space transformations
    ctx.save();
    ctx.translate(viewport.panX, viewport.panY);
    ctx.scale(viewport.zoom, viewport.zoom);

    if (isRespiration) {
      renderMitochondriaScene(ctx, width, height, t);
    } else {
      renderChloroplastScene(ctx, width, height, t);
    }

    ctx.restore();
  };

  // 1. MITOCHONDRIA & CELLULAR RESPIRATION SCENE
  const renderMitochondriaScene = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    const cx = w / 2;
    const cy = h / 2 - 10;

    // Background Cytosol gradient
    const bgGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, Math.max(w, h));
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(1, '#020617');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Outer Cytosolic Labels
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(isArabic ? 'سيتوسول الخلية (انشطار الجلوكوز)' : 'Cytosol (Glycolysis Stage)', 25, 30);

    // Glucose input badge
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(25, 45, 160, 48, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`${params.glucoseMoles} mol Glucose (C₆)`, 38, 68);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '10px system-ui, sans-serif';
    ctx.fillText(isArabic ? '⟶ ٢ بيروفيك + ٢ ATP' : '⟶ 2 Pyruvate + 2 ATP', 38, 84);

    // MITOCHONDRION CAPSULE (Outer Membrane)
    const mitoW = Math.min(w * 0.76, 560);
    const mitoH = Math.min(h * 0.65, 290);

    // Outer Membrane with 3D Bioluminescent Glow
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, mitoW / 2, mitoH / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
    ctx.fill();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = 'rgba(249, 115, 22, 0.45)';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.restore();

    // Intermembrane Space indicator
    ctx.beginPath();
    ctx.ellipse(cx, cy, mitoW / 2 - 14, mitoH / 2 - 14, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fill();
    ctx.strokeStyle = '#ea580c';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Inner Membrane (Cristae Folds)
    ctx.save();
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = 'rgba(67, 20, 7, 0.55)'; // Mitochondrial matrix

    // Draw folded cristae shape
    ctx.beginPath();
    const cristaeW = mitoW / 2 - 28;
    const cristaeH = mitoH / 2 - 24;

    ctx.moveTo(cx - cristaeW, cy);
    // Top folds
    ctx.bezierCurveTo(cx - cristaeW * 0.7, cy - cristaeH * 1.1, cx - cristaeW * 0.3, cy - cristaeH * 0.3, cx - cristaeW * 0.2, cy - cristaeH * 0.9);
    ctx.bezierCurveTo(cx - cristaeW * 0.1, cy - cristaeH * 1.1, cx + cristaeW * 0.1, cy - cristaeH * 0.4, cx + cristaeW * 0.3, cy - cristaeH * 0.95);
    ctx.bezierCurveTo(cx + cristaeW * 0.5, cy - cristaeH * 1.1, cx + cristaeW * 0.8, cy - cristaeH * 0.6, cx + cristaeW, cy);
    // Bottom folds
    ctx.bezierCurveTo(cx + cristaeW * 0.7, cy + cristaeH * 1.1, cx + cristaeW * 0.3, cy + cristaeH * 0.3, cx + cristaeW * 0.1, cy + cristaeH * 0.95);
    ctx.bezierCurveTo(cx - cristaeW * 0.1, cy + cristaeH * 1.1, cx - cristaeW * 0.3, cy + cristaeH * 0.4, cx - cristaeW * 0.5, cy + cristaeH * 0.9);
    ctx.bezierCurveTo(cx - cristaeW * 0.8, cy + cristaeH * 1.1, cx - cristaeW * 0.9, cy + cristaeH * 0.5, cx - cristaeW, cy);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Matrix Labels
    ctx.fillStyle = '#fed7aa';
    ctx.font = 'bold 12px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(isArabic ? 'ماتركس الميتوكوندريا (دورة كريبس)' : 'Mitochondrial Matrix (Krebs Cycle)', cx, cy - 40);

    // Krebs Cycle Rotating Wheel
    ctx.save();
    ctx.translate(cx, cy + 15);
    ctx.beginPath();
    ctx.arc(0, 0, 36, 0, Math.PI * 2);
    ctx.strokeStyle = isAerobic ? '#38bdf8' : '#64748b';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.stroke();

    // Rotating arrow on Krebs wheel
    const kAngle = t * (isAerobic ? 3 : 0.5);
    ctx.rotate(kAngle);
    ctx.fillStyle = isAerobic ? '#38bdf8' : '#94a3b8';
    ctx.beginPath();
    ctx.arc(36, 0, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Krebs center text
    ctx.fillStyle = isAerobic ? '#7dd3fc' : '#64748b';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Krebs', cx, cy + 12);
    ctx.fillText('2 ATP', cx, cy + 24);

    // ELECTRON TRANSPORT CHAIN & ATP SYNTHASE SECTION (Lower Right Crista)
    const etcX = cx + mitoW * 0.18;
    const etcY = cy + mitoH * 0.15;

    // Complexes I, II, III, IV
    const complexes = ['I', 'II', 'III', 'IV'];
    complexes.forEach((name, i) => {
      const bx = etcX - 85 + i * 22;
      const by = etcY;
      ctx.fillStyle = isAerobic ? '#0284c7' : '#334155';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, 16, 26, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(name, bx + 8, by + 16);

      // Proton pumping animation (H+ glowing balls floating into intermembrane space)
      if (isAerobic && i !== 1) {
        const pY = by - 12 - ((t * 40 + i * 25) % 30);
        drawGlowingParticle(ctx, bx + 8, pY, 3.5, '#facc15', 8);
        ctx.fillStyle = '#eab308';
        ctx.font = 'bold 8px system-ui';
        ctx.fillText('H⁺', bx + 17, pY + 2);
      }
    });

    // ROTARY ATP SYNTHASE TURBINE
    const atpX = etcX + 35;
    const atpY = etcY;

    // Stator channel (F0 base)
    drawMetallicCylinder(ctx, atpX - 12, atpY - 14, 24, 16, 'steel', 'horizontal');

    // Central rotor stalk
    drawMetallicCylinder(ctx, atpX - 4, atpY + 2, 8, 18, 'brass', 'vertical');

    // Catalytic F1 head (rotates with continuous 60 FPS turbineAngle)
    const turbineAngle = (t * (isAerobic ? 12 : 1)) % (Math.PI * 2);
    ctx.save();
    ctx.translate(atpX, atpY + 28);
    ctx.rotate(turbineAngle);

    // 3-lobed F1 head
    for (let lobe = 0; lobe < 3; lobe++) {
      ctx.rotate((Math.PI * 2) / 3);
      drawGlowingParticle(ctx, 10, 0, 7, isAerobic ? '#fb7185' : '#64748b', 6);
    }
    ctx.restore();

    // ATP Synthesis Sparks when running aerobically
    if (isAerobic) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`+${totalAtp} ATP`, atpX + 22, atpY + 34);

      drawGlowingParticle(ctx, atpX + 18, atpY + 24, 4 + Math.sin(t * 12) * 1.5, '#fbbf24', 12);
    }

    // Hypoxia overlay if anaerobic
    if (!isAerobic) {
      ctx.save();
      ctx.fillStyle = 'rgba(225, 29, 72, 0.15)';
      ctx.strokeStyle = '#e11d48';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 150, cy + 60, 300, 48, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fda4af';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        isArabic ? 'تنبيه: بيئة لاهوائية (تخمر) — تعطل سلسلة النقل' : 'HYPOXIA: ETC Shut Down — Anaerobic Fermentation',
        cx,
        cy + 82
      );
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '10px system-ui';
      ctx.fillText(
        isArabic ? 'الحصيلة: ٢ ATP فقط مع تراكم حمض اللاكتيك' : 'Yield: 2 ATP Net (Lactic Acid / Ethanol)',
        cx,
        cy + 96
      );
      ctx.restore();
    }
  };

  // 2. CHLOROPLAST & PHOTOSYNTHESIS SCENE
  const renderChloroplastScene = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    const cx = w / 2;
    const cy = h / 2 - 10;

    // Background Leaf Cell
    const bgGrad = ctx.createRadialGradient(cx, cy, 60, cx, cy, Math.max(w, h));
    bgGrad.addColorStop(0, '#064e3b');
    bgGrad.addColorStop(1, '#022c22');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Sunlight Source / Volumetric Ray Beams
    const lightPercent = params.lightIntensity;
    if (lightPercent > 5) {
      ctx.save();
      const sunGradient = ctx.createRadialGradient(80, 50, 5, 80, 50, 180);
      sunGradient.addColorStop(0, `rgba(253, 224, 71, ${0.4 * (lightPercent / 100)})`);
      sunGradient.addColorStop(1, 'rgba(253, 224, 71, 0)');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(80, 50, 180, 0, Math.PI * 2);
      ctx.fill();

      // Volumetric photon light rays projecting down to chloroplast
      for (let r = 0; r < 4; r++) {
        const startX = 70 + r * 25;
        const targetX = cx - 180 + r * 70;
        drawVolumetricBeam(ctx, startX, 50, targetX, cy - 50, '#fef08a', 2, 14);
      }
      ctx.restore();
    }

    // Sun Icon / Label
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 12px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(isArabic ? `فوتونات الضوء (${lightPercent}%)` : `Solar Irradiance (${lightPercent}%)`, 30, 35);

    // CHLOROPLAST ENVELOPE (Double Membrane)
    const chloroW = Math.min(w * 0.78, 580);
    const chloroH = Math.min(h * 0.65, 300);

    ctx.save();
    // Outer Membrane
    ctx.beginPath();
    ctx.ellipse(cx, cy, chloroW / 2, chloroH / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(6, 78, 59, 0.85)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 4;
    ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
    ctx.shadowBlur = 15;
    ctx.stroke();

    // Inner Membrane
    ctx.beginPath();
    ctx.ellipse(cx, cy, chloroW / 2 - 12, chloroH / 2 - 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(4, 120, 87, 0.35)'; // Stroma
    ctx.fill();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Stroma Label
    ctx.fillStyle = '#a7f3d0';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(isArabic ? 'الستروما / الحشوة (تفاعلات لاضوئية)' : 'Stroma (Calvin Cycle / Dark Reactions)', cx, cy - chloroH / 2 + 32);

    // THYLAKOID GRANA STACKS (Light Reactions: P680, P700, Water Photolysis)
    const granaPositions = [
      { x: cx - chloroW * 0.26, y: cy + 10 },
      { x: cx - chloroW * 0.12, y: cy - 20 },
      { x: cx + chloroW * 0.04, y: cy + 15 },
    ];

    granaPositions.forEach((gPos) => {
      // Stack of 4 thylakoid discs
      for (let disc = 0; disc < 4; disc++) {
        const dy = gPos.y - disc * 12;
        ctx.fillStyle = '#047857';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(gPos.x, dy, 26, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    });

    // Connecting Stroma Lamellae
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(granaPositions[0].x + 20, granaPositions[0].y - 12);
    ctx.lineTo(granaPositions[1].x - 20, granaPositions[1].y - 12);
    ctx.moveTo(granaPositions[1].x + 20, granaPositions[1].y - 12);
    ctx.lineTo(granaPositions[2].x - 20, granaPositions[2].y - 12);
    ctx.stroke();

    // Photolysis O2 Bubbles rising out from Thylakoids (Continuous 60 FPS)
    if (photosyntheticRate > 5) {
      for (let b = 0; b < 6; b++) {
        const bx = granaPositions[0].x - 10 + b * 32;
        const bPhase = ((t * 35 + b * 45) % 110);
        const by = cy + 20 - bPhase;

        drawGlowingParticle(ctx, bx, by, 4 + (b % 3), 'rgba(56, 189, 248, 0.7)', 6);

        ctx.fillStyle = '#bae6fd';
        ctx.font = 'bold 8px system-ui';
        ctx.fillText('O₂', bx + 7, by + 3);
      }
    }

    // CALVIN-BENSON CYCLE GEAR (Right side in Stroma)
    const calvinX = cx + chloroW * 0.26;
    const calvinY = cy + 10;

    ctx.save();
    ctx.translate(calvinX, calvinY);
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, Math.PI * 2);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 6]);
    ctx.stroke();

    // Rotating RuBisCO enzyme indicator
    ctx.rotate(t * 3.5);
    drawGlowingParticle(ctx, 42, 0, 6, '#fbbf24', 10);
    ctx.restore();

    // Calvin Center Text
    ctx.fillStyle = '#6ee7b7';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('RuBisCO', calvinX, calvinY - 6);
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 9px monospace';
    ctx.fillText('PGAL ⟶ Hexose', calvinX, calvinY + 10);

    // Heat Stress / Denaturation Alert on Canvas if Temp > 40°C
    if (params.temperatureC >= 40) {
      ctx.save();
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 160, cy + chloroH / 2 - 55, 320, 42, 10);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fca5a5';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        isArabic ? `تثبيط حراري لإنزيم روبيسكو (${params.temperatureC}°م)` : `RuBisCO Thermal Denaturation (${params.temperatureC}°C)`,
        cx,
        cy + chloroH / 2 - 36
      );
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px system-ui';
      ctx.fillText(
        isArabic ? 'تفكك الموقع النشط وتراجع حاد في كفاءة التثبيت' : 'Active site deformed — severe rate drop',
        cx,
        cy + chloroH / 2 - 20
      );
      ctx.restore();
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-Tabs: Simulator, 4-Stage Explorer, Comparative Table */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-800">
        <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner">
          <button
            onClick={() => setActiveSubTab('simulation')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'simulation'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>{isArabic ? 'المختبر التفاعلي والمحاكاة' : 'Interactive Simulation'}</span>
          </button>
          <button
            onClick={() => setActiveSubTab('stages')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'stages'
                ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'مستكشف المراحل الأربعة' : '4-Stage Pathway'}</span>
          </button>
          <button
            onClick={() => setActiveSubTab('comparative')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'comparative'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TableIcon className="w-4 h-4" />
            <span>{isArabic ? 'جدول المقارنة البيولوجية' : 'Comparative Energetics'}</span>
          </button>
        </div>

        {/* Primary Pathway Selector Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => lab.updateParam('simulationMode', 0)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
              isRespiration
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-950/40'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{isArabic ? 'التنفس والميتوكوندريا' : 'Respiration & ATP'}</span>
          </button>
          <button
            onClick={() => lab.updateParam('simulationMode', 1)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
              !isRespiration
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/40'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isArabic ? 'البناء الضوئي وبلاكمان' : 'Photosynthesis'}</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: INTERACTIVE SIMULATOR (VirtualLabShell) */}
      {activeSubTab === 'simulation' && (
        <VirtualLabShell<BioenergeticsParams, BioenergeticsState>
          definition={BIOENERGETICS_LAB_DEFINITION}
          lang={lang}
          theme={theme}
          lab={lab}
          telemetry={telemetry}
          multimeterReading={multimeterReading}
          currentXValue={isRespiration ? params.glucoseMoles : params.lightIntensity}
          currentYValue={isRespiration ? totalAtp : photosyntheticRate}
          renderCustomControls={() => (
            <div className="space-y-4" dir={isArabic ? 'rtl' : 'ltr'}>
              {/* Respiration vs Fermentation Toggle (if in respiration mode) */}
              {isRespiration ? (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 block">
                    {isArabic ? 'مسار الأكسجين والأيض الخلوي:' : 'Metabolic Oxygen Pathway:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => lab.updateParam('oxygenLevel', 100)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        isAerobic
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? 'تنفس هوائي (تام)' : 'Aerobic (Normoxia)'}
                      <div className="text-[10px] font-normal text-emerald-400/80 mt-0.5">32 ATP / mol</div>
                    </button>
                    <button
                      onClick={() => lab.updateParam('oxygenLevel', 0)}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        !isAerobic
                          ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {isArabic ? 'تنفس لاهوائي (تخمر)' : 'Anaerobic (Hypoxia)'}
                      <div className="text-[10px] font-normal text-rose-400/80 mt-0.5">2 ATP / mol</div>
                    </button>
                  </div>
                </div>
              ) : (
                /* Photosynthesis Blackman Summary Bar */
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-semibold">
                      {isArabic ? 'كفاءة البناء الضوئي الإجمالية:' : 'Photosynthetic Efficiency:'}
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">{photosyntheticRate}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${photosyntheticRate}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-amber-300 flex items-center gap-1.5 pt-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      {isArabic
                        ? `العامل المحدد الفعّال حالياً: ${primaryLimiting.nameAr}`
                        : `Active Limiting Factor: ${primaryLimiting.nameEn}`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        >
          <CanvasSimulationViewport
            id="bioenergetics-viewport"
            lang={lang}
            aspectRatio="aspect-[16/10]"
            minHeight={420}
            animated={true}
            onRender={handleRenderCanvas}
          />
        </VirtualLabShell>
      )}

      {/* SUBTAB 2: DETAILED 4-STAGE BIOCHEMICAL EXPLORER */}
      {activeSubTab === 'stages' && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>
                {isArabic
                  ? 'المراحل الأربعة للتنفس الخلوي في السيتوسول والميتوكوندريا'
                  : 'Four Sequential Stages of Cellular Respiration'}
              </span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {isArabic ? `المرحلة ${selectedRespStage} من ٤` : `Stage ${selectedRespStage} of 4`}
            </span>
          </div>

          {/* Stage Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 1, nameEn: '1. Glycolysis', nameAr: '١. انشطار الجلوكوز', locEn: 'Cytosol', locAr: 'السيتوسول' },
              { id: 2, nameEn: '2. Link Reaction', nameAr: '٢. أكسدة البيروفات', locEn: 'Matrix Entry', locAr: 'مدخل الماتركس' },
              { id: 3, nameEn: '3. Krebs Cycle', nameAr: '٣. دورة كريبس', locEn: 'Mito Matrix', locAr: 'ماتركس الميتوكوندريا' },
              { id: 4, nameEn: '4. ETC & ATP Synthase', nameAr: '٤. سلسلة نقل الإلكترون', locEn: 'Cristae', locAr: 'الأعراف' },
            ].map((stg) => (
              <button
                key={stg.id}
                onClick={() => setSelectedRespStage(stg.id)}
                className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                  selectedRespStage === stg.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-white shadow'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-xs font-bold">{isArabic ? stg.nameAr : stg.nameEn}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">{isArabic ? stg.locAr : stg.locEn}</div>
              </button>
            ))}
          </div>

          {/* Dynamic Stage Details Card */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
            {selectedRespStage === 1 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-emerald-300">
                    {isArabic ? 'انشطار الجلوكوز (Glycolysis) في السيتوسول' : 'Glycolysis in Cytosol'}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {isArabic ? 'لا يتطلب أكسجين' : 'Anaerobic Process'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'يحدث في سيتوسول الخلية دون الحاجة للأكسجين. ينشط الجزيء باستهلاك 2 ATP لإنتاج فركتوز 1,6 ثنائي الفوسفات، ثم ينشطر إلى جزيئين من PGAL (فوسفوجليسرالدهيد)، واللذين يتأكسدان لإنتاج جزيئين من حمض البيروفيك مع توليد 4 ATP و 2 NADH.'
                    : 'Occurs in the cytosol without oxygen. Consumes 2 ATP in the energy investment phase to produce fructose 1,6-bisphosphate, which splits into two PGAL (G3P) molecules. The payoff phase produces 4 ATP and 2 NADH, yielding 2 Pyruvate molecules.'}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'المتفاعلات:' : 'Reactants:'}</span>
                    <span className="font-mono text-emerald-400">1 Glucose + 2 NAD⁺ + 2 ADP</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'النواتج:' : 'Products:'}</span>
                    <span className="font-mono text-amber-400">2 Pyruvate + 2 NADH + 4 ATP</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'صافي الربح:' : 'Net Yield:'}</span>
                    <span className="font-mono text-sky-400 font-bold">2 ATP (net) + 2 NADH</span>
                  </div>
                </div>
              </div>
            )}

            {selectedRespStage === 2 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-emerald-300">
                    {isArabic ? 'التفاعل الرابط وأكسدة البيروفات' : 'Pyruvate Oxidation (Link Reaction)'}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {isArabic ? 'دخول الميتوكوندريا' : 'Mitochondrial Transport'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'يعبر حمض البيروفيك الغشاء المزدوج للميتوكوندريا. ينزع منه جزيء كربون على هيئة CO₂ (أكسدة ونزع كربوكسيل) ليتحول إلى مجموعة أسيتيل ثنائية الكربون، والتي ترتبط بمساعد الإنزيم أ (CoA) لتكوين أسيتيل-CoA مع اختزال NAD⁺ إلى NADH.'
                    : 'Pyruvate enters the mitochondrial matrix via active transport. It undergoes oxidative decarboxylation: one carbon is removed as CO₂, producing an acetyl group that binds to Coenzyme A (forming Acetyl-CoA) while reducing NAD⁺ to NADH.'}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'المتفاعلات:' : 'Reactants:'}</span>
                    <span className="font-mono text-emerald-400">2 Pyruvate + 2 CoA + 2 NAD⁺</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'الغاز المنطلق:' : 'Gas Released:'}</span>
                    <span className="font-mono text-purple-400">2 CO₂</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'صافي الحصيلة:' : 'Energy Yield:'}</span>
                    <span className="font-mono text-sky-400 font-bold">2 Acetyl-CoA + 2 NADH</span>
                  </div>
                </div>
              </div>
            )}

            {selectedRespStage === 3 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-emerald-300">
                    {isArabic ? 'دورة كريبس (دورة حمض الستريك) في ماتركس الميتوكوندريا' : 'Krebs / Citric Acid Cycle in Matrix'}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {isArabic ? 'دورتان لكل جزيء جلوكوز' : '2 Cycles per Glucose'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'يتحد أسيتيل-CoA (ثنائي الكربون) مع حمض أوكسالأسيتيك (رباعي الكربون) لإنتاج حمض الستريك (سداسي الكربون). خلال دورة كاملة تتتابع تفاعلات نزع كربوكسيل وأكسدة تطلق 2 CO₂ وتختزل 3 NAD⁺ و 1 FAD وتنتج 1 ATP بالفسفرة المباشرة على مستوى مادة التفاعل.'
                    : 'Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C). Through a sequence of 8 enzyme-catalyzed steps, citrate is oxidized back to oxaloacetate, releasing 2 CO₂, reducing 3 NAD⁺ and 1 FAD, and generating 1 ATP (via GTP) per cycle.'}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'المتفاعلات لكل جلوكوز:' : 'Reactants (2 turns):'}</span>
                    <span className="font-mono text-emerald-400">2 Acetyl-CoA + 6 NAD⁺ + 2 FAD</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'الغاز المنطلق:' : 'CO₂ Waste:'}</span>
                    <span className="font-mono text-purple-400">4 CO₂ (Total 6 so far)</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'الربح الطاقوي:' : 'Total Yield (2 turns):'}</span>
                    <span className="font-mono text-sky-400 font-bold">2 ATP + 6 NADH + 2 FADH₂</span>
                  </div>
                </div>
              </div>
            )}

            {selectedRespStage === 4 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-sm text-emerald-300">
                    {isArabic ? 'سلسلة نقل الإلكترون والفسفرة التأكسدية (الأعراف)' : 'Electron Transport Chain & Chemiosmosis'}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {isArabic ? 'أعلى إنتاجية ATP' : 'Max ATP Synthesis'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'تمر الإلكترونات عالية الطاقة من NADH و FADH₂ عبر معقدات السيتوكرومات (I, II, III, IV) في الغشاء الداخلي، مما يضخ البروتونات H⁺ إلى الحيز بين الغشائين. المستقبل النهائي للإلكترونات هو الأكسجين O₂ ليتكون الماء H₂O. تتدفق البروتونات عائدة عبر إنزيم تخليق ATP (ATP Synthase) محركة الرأس الدوار بالضغط الأسموزي الكيميائي لتوليد نحو 28 ATP.'
                    : 'Electrons from 10 NADH and 2 FADH₂ flow through cytochromes I-IV, pumping protons across the inner membrane into the intermembrane space. Oxygen serves as the final electron acceptor, combining with protons to form H₂O. The electrochemical proton gradient powers ATP Synthase to phosphorylate ADP into ~28 ATP.'}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'المدخلات الإلكترونية:' : 'Electron Donors:'}</span>
                    <span className="font-mono text-emerald-400">10 NADH + 2 FADH₂ + 6 O₂</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'الماء المتكون:' : 'Water Synthesized:'}</span>
                    <span className="font-mono text-sky-400">6 H₂O</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{isArabic ? 'حصيلة الفسفرة:' : 'Chemiosmotic ATP:'}</span>
                    <span className="font-mono text-amber-400 font-bold">~28 ATP (32 Total)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 3: COMPARATIVE ENERGETICS & THERMODYNAMICS */}
      {activeSubTab === 'comparative' && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-purple-400 flex items-center gap-2">
            <BatteryCharging className="w-5 h-5" />
            <span>
              {isArabic
                ? 'المقارنة البيولوجية والديناميكية الحرارية بين التنفس والبناء الضوئي'
                : 'Thermodynamic & Energetic Comparison'}
            </span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60 text-slate-200">
                  <th className="p-3">{isArabic ? 'وجه المقارنة' : 'Criterion'}</th>
                  <th className="p-3 text-amber-400">{isArabic ? 'التنفس الخلوي الهوائي' : 'Cellular Respiration'}</th>
                  <th className="p-3 text-emerald-400">{isArabic ? 'البناء الضوئي' : 'Photosynthesis'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'العضية الخلوية' : 'Cellular Organelle'}</td>
                  <td className="p-3 text-slate-400">{isArabic ? 'الميتوكوندريا (والسيتوسول)' : 'Mitochondria (and cytosol)'}</td>
                  <td className="p-3 text-slate-400">{isArabic ? 'البلاستيدات الخضراء (الكلوروبلاست)' : 'Chloroplasts'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'الطبيعة الديناميكية الحرارية' : 'Thermodynamic Nature'}</td>
                  <td className="p-3 text-amber-300">{isArabic ? 'طارد للطاقة (تفاعل هدام / Exergonic)' : 'Exergonic (Catabolic)'}</td>
                  <td className="p-3 text-emerald-300">{isArabic ? 'ماص للطاقة (تفاعل بناء / Endergonic)' : 'Endergonic (Anabolic)'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'المستقبل النهائي للإلكترونات' : 'Terminal Electron Acceptor'}</td>
                  <td className="p-3 font-mono text-sky-400">O₂ (⟶ H₂O)</td>
                  <td className="p-3 font-mono text-emerald-400">NADP⁺ (⟶ NADPH)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'مصدر الإلكترونات والبروتونات' : 'Source of e⁻ / H⁺'}</td>
                  <td className="p-3 font-mono text-slate-300">C₆H₁₂O₆ (Glucose oxidation)</td>
                  <td className="p-3 font-mono text-slate-300">H₂O (Photolysis)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'حركة البروتونات H⁺' : 'Proton Pumping'}</td>
                  <td className="p-3 text-slate-400">{isArabic ? 'من الماتركس إلى الحيز بين الغشائين' : 'From matrix to intermembrane space'}</td>
                  <td className="p-3 text-slate-400">{isArabic ? 'من الستروما إلى تجويف الثايلاكويد' : 'From stroma into thylakoid lumen'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-300">{isArabic ? 'الحصيلة الطاقوية لكل جزيء' : 'Net Energy Balance'}</td>
                  <td className="p-3 font-bold text-amber-400 font-mono">+30–32 ATP generated</td>
                  <td className="p-3 font-bold text-emerald-400 font-mono">18 ATP + 12 NADPH consumed / glucose</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
