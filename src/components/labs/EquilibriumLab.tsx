import React, { useCallback, useMemo, useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  type LabParameterSchema,
  type LabPreset,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  calculateVantHoffK,
  getIndicatorColor,
  COMMON_INDICATORS,
} from '../../core/simulation/EquilibriumEngine';
import {
  Activity,
  ChevronDown,
  Layers,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type EquilibriumModule =
  | 'le_chatelier'
  | 'ostwald_ionic'
  | 'salt_hydrolysis'
  | 'solubility_product';

export type GasReactionSystem =
  | 'no2_dimer'
  | 'haber_ammonia'
  | 'fe_thiocyanate'
  | 'contact_so3';

export type ElectrolyteType =
  | 'acetic_acid'
  | 'formic_acid'
  | 'hcn'
  | 'hcl'
  | 'nh4oh'
  | 'naoh';

export type SaltType =
  | 'nacl'
  | 'nh4cl'
  | 'ch3coona'
  | 'na2co3'
  | 'ch3coonh4';

export type SparinglySolubleSalt =
  | 'agcl'
  | 'pbi2'
  | 'aloh3'
  | 'baso4';

export interface EquilibriumParams {
  module: EquilibriumModule;
  // Module 1: Le Chatelier
  gasSystem: GasReactionSystem;
  temperatureC: number; // 0 to 150 °C
  pressureAtm: number; // 0.2 to 5.0 atm
  reactantMoles: number; // 0.5 to 3.0
  productMoles: number; // 0.0 to 3.0
  hasCatalyst: boolean;
  // Module 2: Ostwald's Law
  electrolyte: ElectrolyteType;
  concentrationM: number; // 0.001 to 1.0 M
  solutionVolumeMl: number; // 50 to 500 mL (dilution)
  // Module 3: Salt Hydrolysis
  salt: SaltType;
  indicatorId: string;
  saltConcentrationM: number; // 0.01 to 1.0 M
  // Module 4: Solubility Product
  sparinglySalt: SparinglySolubleSalt;
  addedCommonIonM: number; // 0.0 to 0.5 M
}

export interface EquilibriumSimState {
  // Gas equilibrium
  currentKc: number;
  currentQc: number;
  shiftDirectionEn: 'Dynamic Equilibrium' | 'Shifts Forward (Right)' | 'Shifts Reverse (Left)';
  shiftDirectionAr: 'اتزان ديناميكي مستقر' | 'ينشط في الاتجاه الطردي (يميناً)' | 'ينشط في الاتجاه العكسي (يساراً)';
  vesselColorRgba: string;
  absorbanceOD: number;
  forwardRate: number;
  reverseRate: number;
  // Ionic equilibrium
  alphaFraction: number;
  hydroniumM: number;
  hydroxideM: number;
  pH: number;
  pOH: number;
  conductivityPercent: number;
  bulbGlow: number; // 0 to 1
  // Salt hydrolysis
  saltSolutionPH: number;
  saltSolutionColor: string;
  saltNatureEn: 'Neutral Salt' | 'Acidic Salt' | 'Basic (Alkaline) Salt';
  saltNatureAr: 'ملح متعادل التأثير' | 'ملح حمضي التأثير' | 'ملح قاعدي (قلوي) التأثير';
  // Solubility Product
  ksp: number;
  qsp: number;
  molarSolubilityS: number;
  isPrecipitating: boolean;
  precipitateColor: string;
  precipitateMassMg: number;
}

export const INITIAL_EQUILIBRIUM_PARAMS: EquilibriumParams = {
  module: 'le_chatelier',
  gasSystem: 'no2_dimer',
  temperatureC: 25,
  pressureAtm: 1.0,
  reactantMoles: 1.0,
  productMoles: 0.0,
  hasCatalyst: false,
  electrolyte: 'acetic_acid',
  concentrationM: 0.1,
  solutionVolumeMl: 100,
  salt: 'nh4cl',
  indicatorId: 'litmus',
  saltConcentrationM: 0.1,
  sparinglySalt: 'agcl',
  addedCommonIonM: 0.0,
};

export const EQUILIBRIUM_PARAM_SCHEMA: LabParameterSchema<EquilibriumParams> = {
  module: {
    key: 'module',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'الموديول التعليمي',
    defaultValue: 'le_chatelier',
    options: [
      { value: 'le_chatelier', labelEn: '1. Le Chatelier Gas Reactor (NO₂/N₂O₄ & Haber)', labelAr: '١. مفاعل لوشاتيليه الغازي (NO₂/N₂O₄ وهابر)' },
      { value: 'ostwald_ionic', labelEn: "2. Ostwald's Dilution Law & Conductivity", labelAr: '٢. قانون أوستفالد والتوصيل الكهربي' },
      { value: 'salt_hydrolysis', labelEn: '3. Salt Hydrolysis & Acid-Base Indicators', labelAr: '٣. تميه الأملاح والأدلة الكيميائية' },
      { value: 'solubility_product', labelEn: '4. Solubility Product (Ksp) & Common Ion', labelAr: '٤. حاصل الإذابة (Ksp) والأيون المشترك' },
    ],
  },
  gasSystem: {
    key: 'gasSystem',
    type: 'select',
    labelEn: 'Reversible Reaction System',
    labelAr: 'نظام التفاعل الانعكاسي',
    defaultValue: 'no2_dimer',
    options: [
      { value: 'no2_dimer', labelEn: '2NO₂ (Brown) ⇌ N₂O₄ (Colorless) + Heat', labelAr: '2NO₂ (بني محمر) ⇌ N₂O₄ (عديم اللون) + حرارة' },
      { value: 'haber_ammonia', labelEn: 'N₂ + 3H₂ ⇌ 2NH₃ (Haber-Bosch)', labelAr: 'N₂ + 3H₂ ⇌ 2NH₃ (طريقة هابر-بوش)' },
      { value: 'fe_thiocyanate', labelEn: 'Fe³⁺ (Yellow) + 3SCN⁻ ⇌ Fe(SCN)₃ (Blood Red)', labelAr: 'Fe³⁺ (أصفر) + 3SCN⁻ ⇌ Fe(SCN)₃ (أحمر دموي)' },
      { value: 'contact_so3', labelEn: '2SO₂ + O₂ ⇌ 2SO₃ (Contact Process)', labelAr: '2SO₂ + O₂ ⇌ 2SO₃ (طريقة التلامس)' },
    ],
  },
  temperatureC: {
    key: 'temperatureC',
    type: 'number',
    labelEn: 'Vessel Temperature (°C)',
    labelAr: 'درجة حرارة الإناء (°س)',
    defaultValue: 25,
    min: 0,
    max: 150,
    step: 5,
    unit: '°C',
    visibleIf: (p: EquilibriumParams) => p.module === 'le_chatelier',
  },
  pressureAtm: {
    key: 'pressureAtm',
    type: 'number',
    labelEn: 'System Pressure (atm)',
    labelAr: 'الضغط الكلي للنظام (ضغط جوي)',
    defaultValue: 1.0,
    min: 0.2,
    max: 5.0,
    step: 0.1,
    unit: 'atm',
    visibleIf: (p: EquilibriumParams) => p.module === 'le_chatelier',
  },
  reactantMoles: {
    key: 'reactantMoles',
    type: 'number',
    labelEn: 'Added Reactant Multiplier',
    labelAr: 'كمية المتفاعلات المضافة',
    defaultValue: 1.0,
    min: 0.5,
    max: 3.0,
    step: 0.1,
    visibleIf: (p: EquilibriumParams) => p.module === 'le_chatelier',
  },
  productMoles: {
    key: 'productMoles',
    type: 'number',
    labelEn: 'Added Product Multiplier',
    labelAr: 'كمية النواتج المضافة',
    defaultValue: 0.0,
    min: 0.0,
    max: 3.0,
    step: 0.1,
    visibleIf: (p: EquilibriumParams) => p.module === 'le_chatelier',
  },
  hasCatalyst: {
    key: 'hasCatalyst',
    type: 'boolean',
    labelEn: 'Presence of Catalyst (Fe/V₂O₅)',
    labelAr: 'وجود عامل حفاز (حديد/خامس أكسيد الفاناديوم)',
    defaultValue: false,
    visibleIf: (p: EquilibriumParams) => p.module === 'le_chatelier',
  },
  electrolyte: {
    key: 'electrolyte',
    type: 'select',
    labelEn: 'Electrolyte Solution',
    labelAr: 'محلول الإلكتروليت',
    defaultValue: 'acetic_acid',
    visibleIf: (p: EquilibriumParams) => p.module === 'ostwald_ionic',
    options: [
      { value: 'acetic_acid', labelEn: 'Acetic Acid CH₃COOH (Weak Acid, Ka = 1.8×10⁻⁵)', labelAr: 'حمض الخليك CH₃COOH (حمض ضعيف)' },
      { value: 'formic_acid', labelEn: 'Formic Acid HCOOH (Weak Acid, Ka = 1.8×10⁻⁴)', labelAr: 'حمض الفورميك HCOOH (حمض ضعيف)' },
      { value: 'hcn', labelEn: 'Hydrocyanic Acid HCN (Very Weak, Ka = 4.9×10⁻¹⁰)', labelAr: 'حمض الهيدروسيانيك HCN (ضعيف جداً)' },
      { value: 'hcl', labelEn: 'Hydrochloric Acid HCl (Strong Acid, 100% Ionized)', labelAr: 'حمض الهيدروكلوريك HCl (حمض قوي تام التأين)' },
      { value: 'nh4oh', labelEn: 'Ammonia Solution NH₄OH (Weak Base, Kb = 1.8×10⁻⁵)', labelAr: 'محلول النشادر NH₄OH (قاعدة ضعيفة)' },
      { value: 'naoh', labelEn: 'Sodium Hydroxide NaOH (Strong Base, 100% Ionized)', labelAr: 'هيدروكسيد الصوديوم NaOH (قاعدة قوية تامة)' },
    ],
  },
  concentrationM: {
    key: 'concentrationM',
    type: 'number',
    labelEn: 'Initial Concentration (C)',
    labelAr: 'التركيز الابتدائي (مولار)',
    defaultValue: 0.1,
    min: 0.001,
    max: 1.0,
    step: 0.01,
    unit: 'M',
    visibleIf: (p: EquilibriumParams) => p.module === 'ostwald_ionic',
  },
  solutionVolumeMl: {
    key: 'solutionVolumeMl',
    type: 'number',
    labelEn: 'Water Volume / Dilution (mL)',
    labelAr: 'حجم الماء المضاف / التخفيف (ملل)',
    defaultValue: 100,
    min: 50,
    max: 500,
    step: 25,
    unit: 'mL',
    visibleIf: (p: EquilibriumParams) => p.module === 'ostwald_ionic',
  },
  salt: {
    key: 'salt',
    type: 'select',
    labelEn: 'Salt Compound',
    labelAr: 'مركب الملح',
    defaultValue: 'nh4cl',
    visibleIf: (p: EquilibriumParams) => p.module === 'salt_hydrolysis',
    options: [
      { value: 'nh4cl', labelEn: 'NH₄Cl (Ammonium Chloride - Strong Acid + Weak Base)', labelAr: 'NH₄Cl (كلوريد الأمونيوم - حمض قوي + قاعدة ضعيفة)' },
      { value: 'ch3coona', labelEn: 'CH₃COONa (Sodium Acetate - Weak Acid + Strong Base)', labelAr: 'CH₃COONa (أسيتات الصوديوم - حمض ضعيف + قاعدة قوية)' },
      { value: 'nacl', labelEn: 'NaCl (Sodium Chloride - Strong Acid + Strong Base)', labelAr: 'NaCl (كلوريد الصوديوم - حمض قوي + قاعدة قوية)' },
      { value: 'na2co3', labelEn: 'Na₂CO₃ (Sodium Carbonate - Weak Acid + Strong Base)', labelAr: 'Na₂CO₃ (كربونات الصوديوم - قلوي التأثير)' },
      { value: 'ch3coonh4', labelEn: 'CH₃COONH₄ (Ammonium Acetate - Weak Acid + Weak Base)', labelAr: 'CH₃COONH₄ (أسيتات الأمونيوم - حمض ضعيف + قاعدة ضعيفة)' },
    ],
  },
  indicatorId: {
    key: 'indicatorId',
    type: 'select',
    labelEn: 'Acid-Base Indicator',
    labelAr: 'الدليل الكيميائي',
    defaultValue: 'litmus',
    visibleIf: (p: EquilibriumParams) => p.module === 'salt_hydrolysis',
    options: [
      { value: 'litmus', labelEn: 'Litmus (عباد الشمس)', labelAr: 'عباد الشمس' },
      { value: 'methyl_orange', labelEn: 'Methyl Orange (الميثيل البرتقالي)', labelAr: 'الميثيل البرتقالي' },
      { value: 'phenolphthalein', labelEn: 'Phenolphthalein (الفينولفثالين)', labelAr: 'الفينولفثالين' },
      { value: 'bromothymol_blue', labelEn: 'Bromothymol Blue (أزرق بروموثيمول)', labelAr: 'أزرق بروموثيمول' },
    ],
  },
  saltConcentrationM: {
    key: 'saltConcentrationM',
    type: 'number',
    labelEn: 'Salt Molarity',
    labelAr: 'تركيز محلول الملح',
    defaultValue: 0.1,
    min: 0.01,
    max: 1.0,
    step: 0.05,
    unit: 'M',
    visibleIf: (p: EquilibriumParams) => p.module === 'salt_hydrolysis',
  },
  sparinglySalt: {
    key: 'sparinglySalt',
    type: 'select',
    labelEn: 'Sparingly Soluble Salt',
    labelAr: 'الملح شحيح الذوبان في الماء',
    defaultValue: 'agcl',
    visibleIf: (p: EquilibriumParams) => p.module === 'solubility_product',
    options: [
      { value: 'agcl', labelEn: 'AgCl (Silver Chloride, Ksp = 1.8×10⁻¹⁰) [White ppt]', labelAr: 'AgCl (كلوريد الفضة - راسب أبيض)' },
      { value: 'pbi2', labelEn: 'PbI₂ (Lead Iodide, Ksp = 7.1×10⁻⁹) [Canary Yellow ppt]', labelAr: 'PbI₂ (يوديد الرصاص - راسب أصفر كناري)' },
      { value: 'aloh3', labelEn: 'Al(OH)₃ (Aluminum Hydroxide, Ksp = 1.3×10⁻³³) [White Gelatinous]', labelAr: 'Al(OH)₃ (هيدروكسيد الألومنيوم - راسب أبيض جيلاتيني)' },
      { value: 'baso4', labelEn: 'BaSO₄ (Barium Sulfate, Ksp = 1.1×10⁻¹⁰) [Heavy White ppt]', labelAr: 'BaSO₄ (كبريتات الباريوم - راسب أبيض لا يذوب في HCl)' },
    ],
  },
  addedCommonIonM: {
    key: 'addedCommonIonM',
    type: 'number',
    labelEn: 'Added Common Ion [Cl⁻ / I⁻ / SO₄²⁻]',
    labelAr: 'تركيز الأيون المشترك المضاف',
    defaultValue: 0.0,
    min: 0.0,
    max: 0.5,
    step: 0.02,
    unit: 'M',
    visibleIf: (p: EquilibriumParams) => p.module === 'solubility_product',
  },
};

export const EQUILIBRIUM_PRESETS: LabPreset<EquilibriumParams>[] = [
  {
    id: 'no2_temperature_shift',
    nameEn: 'NO₂/N₂O₄ Exothermic Temperature Shift (Ice Bath vs Heating)',
    nameAr: 'أثر الحرارة على تفاعل NO₂/N₂O₄ (حمام ثلج مقابل تسخين)',
    params: {
      ...INITIAL_EQUILIBRIUM_PARAMS,
      module: 'le_chatelier',
      gasSystem: 'no2_dimer',
      temperatureC: 10,
      pressureAtm: 1.0,
      reactantMoles: 1.0,
    },
  },
  {
    id: 'haber_pressure_optimization',
    nameEn: 'Haber-Bosch Ammonia Pressure Optimization (Le Chatelier)',
    nameAr: 'زيادة إنتاج النشادر بزيادة الضغط (طريقة هابر-بوش)',
    params: {
      ...INITIAL_EQUILIBRIUM_PARAMS,
      module: 'le_chatelier',
      gasSystem: 'haber_ammonia',
      temperatureC: 50,
      pressureAtm: 4.5,
      hasCatalyst: true,
    },
  },
  {
    id: 'ostwald_dilution_bulb',
    nameEn: "Ostwald's Dilution of Acetic Acid & Bulb Brightness",
    nameAr: 'قانون أوستفالد لتخفيف حمض الخليك وإضاءة المصباح',
    params: {
      ...INITIAL_EQUILIBRIUM_PARAMS,
      module: 'ostwald_ionic',
      electrolyte: 'acetic_acid',
      concentrationM: 0.01,
      solutionVolumeMl: 400,
    },
  },
  {
    id: 'common_ion_agcl',
    nameEn: 'AgCl Common Ion Suppression by NaCl (Precipitation Surge)',
    nameAr: 'تأثير الأيون المشترك (NaCl) على زيادة ترسيب AgCl',
    params: {
      ...INITIAL_EQUILIBRIUM_PARAMS,
      module: 'solubility_product',
      sparinglySalt: 'agcl',
      addedCommonIonM: 0.2,
    },
  },
];

export const EQUILIBRIUM_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_temp_vs_pressure_kc',
    titleEn: 'Le Chatelier: Temperature vs Pressure Effect on Kc',
    titleAr: 'قاعدة لوشاتيليه: أثر الحرارة والضغط على قيمة ثابت الاتزان Kc',
    scenarioEn:
      'In the dimerization of nitrogen dioxide (2NO₂ ⇌ N₂O₄ + Heat), an investigator increases the pressure from 1 atm to 4 atm by compressing the syringe, and separately increases the temperature from 20°C to 100°C.',
    scenarioAr:
      'في تفاعل تكوين رابع أكسيد النيتروجين (2NO₂ ⇌ N₂O₄ + حرارة)، قام باحث بزيادة الضغط من 1 إلى 4 ضغط جوي بكبس المحقن، وفي تجربة أخرى رفع درجة الحرارة من 20°س إلى 100°س.',
    questionEn: 'How do the numerical value of Kc and the position of equilibrium respond in each case?',
    questionAr: 'كيف تتغير القيمة العددية لثابت الاتزان Kc وموضع الاتزان في كل حالة؟',
    optionsEn: [
      'Both pressure and temperature changes alter the numerical value of Kc.',
      'Compression shifts equilibrium right without changing Kc; heating decreases the numerical value of Kc because the forward reaction is exothermic.',
      'Heating increases Kc because higher kinetic energy always promotes reaction speed.',
      'Neither temperature nor pressure changes Kc under any circumstances.',
    ],
    optionsAr: [
      'تغير الضغط وتغير الحرارة يغيران القيمة العددية لثابت الاتزان Kc.',
      'الضغط يزيح الاتزان طردياً نحو الحجم الأقل دون تغيير قيمة Kc؛ بينما رفع الحرارة يقلل القيمة العددية لـ Kc لأن التفاعل طارد للحرارة.',
      'رفع الحرارة يزيد قيمة Kc دائماً لأن طاقة الحركة تزيد.',
      'لا تتغير قيمة Kc إطلاقاً بتغير الحرارة أو الضغط.',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Core Egyptian Ministerial Rule: ONLY temperature changes the numerical value of equilibrium constants (Kc, Kp). For an exothermic reaction (ΔH < 0), heat is a product; heating drives the reaction reverse (Le Chatelier), decreasing product concentrations and thus decreasing Kc = [Products]/[Reactants]. In contrast, pressure compression alters the Reaction Quotient Qc momentarily, shifting the system toward fewer gas moles (2NO₂ → 1N₂O₄) to restore Qc = Kc, leaving Kc unchanged.',
    scientificExplanationAr:
      'قاعدة ذهبية في امتحان الثانوية العامة: درجة الحرارة هي العامل الوحيد الذي يغير القيمة العددية لثابت الاتزان (Kc و Kp). في التفاعلات الطاردة للحرارة (ΔH سالبة)، تعتبر الحرارة أحد النواتج؛ فعند رفع الحرارة ينشط التفاعل في الاتجاه العكسي (حسب لوشاتيليه) فيقل تركيز النواتج ويزداد تركيز المتفاعلات فتقل قيمة Kc. أما الضغط فيؤدي لانزياح الاتزان نحو عدد المولات الأقل (الطرف الأيمن) دون أن تتغير قيمة Kc.',
  },
  {
    id: 'poe_ostwald_dilution_conductivity',
    titleEn: "Ostwald's Dilution Law: Weak Acid vs Strong Acid Bulb Conductivity",
    titleAr: 'قانون أوستفالد: مقارنة التخفيف لحمض ضعيف وحمض قوي على إضاءة المصباح',
    scenarioEn:
      'An electric conductivity tester with a light bulb is immersed in 0.1 M glacial acetic acid (CH₃COOH). An equal volume of distilled water is added to dilute the solution to 0.01 M. The experiment is repeated with 0.1 M hydrochloric acid (HCl).',
    scenarioAr:
      'جهاز اختبار التوصيل الكهربي بمصباح مضيء مغمور في 0.1 مولار حمض خليك (CH₃COOH). تم إضافة ماء مقطر للتخفيف حتى 0.01 مولار. ثم كُررت التجربة مع حمض الهيدروكلوريك (HCl).',
    questionEn: "What happens to the bulb's illumination in both cases?",
    questionAr: 'ماذا يحدث لشدة إضاءة المصباح في الحالتين؟',
    optionsEn: [
      'The bulb dims in both cases because dilution decreases concentration.',
      'In acetic acid, the bulb glows noticeably brighter because dilution increases the degree of ionization (α); in HCl, illumination remains bright (or slightly dims) because it is already 100% ionized.',
      'The bulb brightens in both cases equally due to water volume.',
      'Acetic acid cannot conduct electricity at any concentration.',
    ],
    optionsAr: [
      'تقل إضاءة المصباح في الحالتين لأن التخفيف يقلل التركيز.',
      'في حمض الخليك تزداد إضاءة المصباح وضوحاً لأن التخفيف يزيد درجة التفكك (α) حسب أوستفالد؛ أما في HCl فتظل الإضاءة قوية جداً (أو تخفت قليلاً) لأنه إلكتروليت قوي تام التأين.',
      'تزداد إضاءة المصباح في الحالتين بنفس المقدار بسبب زيادة الماء.',
      'حمض الخليك لا يوصل التيار الكهربي نهائياً في أي تركيز.',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      "According to Ostwald's Dilution Law for weak electrolytes (α = √(Ka/C)), as concentration C decreases upon dilution, the degree of ionization α increases. More molecules dissociate into free conducting ions (H₃O⁺ and CH₃COO⁻), markedly enhancing conductivity and brightening the bulb. In strong electrolytes like HCl, ionization is already 100% complete; dilution cannot produce more ions, so ion density slightly drops, keeping the lamp strongly lit without an increase.",
    scientificExplanationAr:
      'وفقاً لقانون أوستفالد للتخفيف للإلكتروليتات الضعيفة (α = √(Ka/C))، كلما قل التركيز C بالتخفيف، زادت درجة التفكك α، فتتفكك جزيئات إضافية لتعطي أيونات حرة ناقلة للتيار (H₃O⁺ و CH₃COO⁻) فتزداد شدة الإضاءة. أما في حمض HCl فهو إلكتروليت قوي تام التأين وجميع جزيئاته متأينة بالفعل بنسبة 100%، فلا يؤثر التخفيف على زيادة عدد الأيونات.',
  },
  {
    id: 'poe_common_ion_sparingly',
    titleEn: 'Common Ion Effect on Sparingly Soluble Salts (Ksp)',
    titleAr: 'أثر الأيون المشترك على ترسيب الأملاح شحيحة الذوبان في الماء (حاصل الإذابة)',
    scenarioEn:
      'A clear, saturated solution of silver chloride (AgCl) is in dynamic equilibrium with undissolved solid: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). A few drops of concentrated sodium chloride (NaCl) are introduced.',
    scenarioAr:
      'محلول مشبع رائق من كلوريد الفضة (AgCl) في حالة اتزان مع الملح الصلب: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). تم إضافة قطرات من محلول مركز من كلوريد الصوديوم (NaCl).',
    questionEn: 'What is the immediate observable effect and the underlying thermodynamic reason?',
    questionAr: 'ما هي الملاحظة الفورية وما السبب الديناميكي الحراري وراءها؟',
    optionsEn: [
      'The solution dissolves more AgCl because chloride ions react to form soluble complexes.',
      'White silver chloride precipitate forms immediately because the added common Cl⁻ ion raises Qsp > Ksp, driving equilibrium backward to suppress solubility.',
      'No change occurs because NaCl is neutral and does not react with AgCl.',
      'The temperature rises and all AgCl evaporates.',
    ],
    optionsAr: [
      'يذوب المزيد من AgCl لأن أيونات الكلوريد تكون متراكبات ذائبة.',
      'يتكون راسب أبيض فوراً من كلوريد الفضة لأن أيون الكلوريد المشترك (Cl⁻) يجعل حاصل ضرب الأيونات Qsp > Ksp، فينشط التفاعل عكسياً ويقل ذوبان الملح.',
      'لا يحدث أي تغير لأن ملح NaCl ملح متعادل ولا يتفاعل مع AgCl.',
      'ترتفع درجة الحرارة ويتبخر كل كلوريد الفضة.',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Adding NaCl introduces a common ion (Cl⁻), sharply increasing [Cl⁻]. By Le Chatelier’s principle, the system shifts left (reverse) to consume the excess chloride: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓. This causes rapid precipitation and lowers the molar solubility of silver chloride, an essential analytical separation technique in the Egyptian curriculum.',
    scientificExplanationAr:
      'إضافة كلوريد الصوديوم تزيد من تركيز أيون الكلوريد المشترك (Cl⁻). وتطبيقاً لقاعدة لوشاتيليه، يضطرب الاتزان وينشط التفاعل في الاتجاه العكسي لاستهلاك الزيادة من أيونات الكلوريد: Ag⁺ + Cl⁻ → AgCl↓، فيترسب كلوريد الفضة وتقل درجة ذوبانيته بدرجة ملحوظة.',
  },
];

// Helper calculations
function solveEquilibriumState(params: EquilibriumParams): EquilibriumSimState {
  const {
    gasSystem,
    temperatureC,
    pressureAtm,
    reactantMoles,
    productMoles,
    hasCatalyst,
    electrolyte,
    concentrationM,
    solutionVolumeMl,
    salt,
    indicatorId,
    saltConcentrationM,
    sparinglySalt,
    addedCommonIonM,
  } = params;

  // 1. Gas Equilibrium Engine
  let baseKc = 50.0;
  let deltaH = -57.2; // kJ/mol default for NO2 dimerization
  if (gasSystem === 'no2_dimer') {
    baseKc = 45.0;
    deltaH = -57.2; // Exothermic
  } else if (gasSystem === 'haber_ammonia') {
    baseKc = 120.0;
    deltaH = -92.4; // Exothermic
  } else if (gasSystem === 'fe_thiocyanate') {
    baseKc = 140.0;
    deltaH = -28.0; // Exothermic
  } else {
    baseKc = 80.0;
    deltaH = -198.0; // Contact SO3
  }

  // Calculate temperature-shifted Kc via Van 't Hoff
  const currentKc = calculateVantHoffK(baseKc, 25, temperatureC, deltaH);

  // Pressure factor: if pressure increases, shifts toward fewer moles
  const pressureFactor = gasSystem === 'fe_thiocyanate' ? 1.0 : Math.pow(pressureAtm, 1.2);

  // Reaction Quotient Qc
  const currentQc = Math.max(
    0.01,
    ((productMoles + 0.1) * 30.0) / ((reactantMoles * pressureFactor) || 0.1)
  );

  let shiftDirectionEn: EquilibriumSimState['shiftDirectionEn'] = 'Dynamic Equilibrium';
  let shiftDirectionAr: EquilibriumSimState['shiftDirectionAr'] = 'اتزان ديناميكي مستقر';

  if (currentQc < currentKc * 0.85) {
    shiftDirectionEn = 'Shifts Forward (Right)';
    shiftDirectionAr = 'ينشط في الاتجاه الطردي (يميناً)';
  } else if (currentQc > currentKc * 1.15) {
    shiftDirectionEn = 'Shifts Reverse (Left)';
    shiftDirectionAr = 'ينشط في الاتجاه العكسي (يساراً)';
  }

  // Vessel Color Synthesis
  let vesselColorRgba = 'rgba(180, 83, 9, 0.4)';
  let absorbanceOD = 0.2;
  if (gasSystem === 'no2_dimer') {
    // High temp -> Left -> more brown NO2. High pressure -> Right -> more colorless N2O4.
    const brownIntensity = Math.min(
      0.95,
      Math.max(0.08, ((temperatureC + 20) / 140) / Math.sqrt(pressureAtm) * reactantMoles)
    );
    vesselColorRgba = `rgba(180, 83, 9, ${brownIntensity.toFixed(2)})`;
    absorbanceOD = parseFloat((brownIntensity * 1.8).toFixed(2));
  } else if (gasSystem === 'fe_thiocyanate') {
    // Blood red [Fe(SCN)]2+
    const redIntensity = Math.min(0.95, Math.max(0.1, 0.3 * reactantMoles));
    vesselColorRgba = `rgba(220, 38, 38, ${redIntensity.toFixed(2)})`;
    absorbanceOD = parseFloat((redIntensity * 2.2).toFixed(2));
  } else if (gasSystem === 'haber_ammonia') {
    vesselColorRgba = 'rgba(56, 189, 248, 0.25)';
    absorbanceOD = 0.05;
  } else {
    vesselColorRgba = 'rgba(148, 163, 184, 0.25)';
    absorbanceOD = 0.08;
  }

  const catMultiplier = hasCatalyst ? 2.5 : 1.0;
  const forwardRate = parseFloat((0.4 * reactantMoles * pressureFactor * catMultiplier).toFixed(2));
  const reverseRate = parseFloat((0.4 * (productMoles + 0.1) * (currentQc / currentKc) * catMultiplier).toFixed(2));

  // 2. Ionic Equilibrium & Ostwald's Law
  // Diluted concentration: C = C0 * (V0 / V_total)
  const dilutedC = Math.max(0.0001, (concentrationM * 100) / solutionVolumeMl);
  let alphaFraction = 0.0;
  let hydroniumM = 1e-7;
  let hydroxideM = 1e-7;
  let pH = 7.0;
  let pOH = 7.0;
  let bulbGlow = 0.1;

  if (electrolyte === 'acetic_acid') {
    const ka = 1.8e-5;
    alphaFraction = Math.min(1.0, Math.sqrt(ka / dilutedC));
    hydroniumM = alphaFraction * dilutedC;
    hydroxideM = 1e-14 / hydroniumM;
    pH = -Math.log10(hydroniumM);
    pOH = 14 - pH;
    bulbGlow = Math.min(1.0, 0.15 + alphaFraction * 2.5);
  } else if (electrolyte === 'formic_acid') {
    const ka = 1.8e-4;
    alphaFraction = Math.min(1.0, Math.sqrt(ka / dilutedC));
    hydroniumM = alphaFraction * dilutedC;
    hydroxideM = 1e-14 / hydroniumM;
    pH = -Math.log10(hydroniumM);
    pOH = 14 - pH;
    bulbGlow = Math.min(1.0, 0.25 + alphaFraction * 2.5);
  } else if (electrolyte === 'hcn') {
    const ka = 4.9e-10;
    alphaFraction = Math.min(1.0, Math.sqrt(ka / dilutedC));
    hydroniumM = alphaFraction * dilutedC;
    hydroxideM = 1e-14 / hydroniumM;
    pH = -Math.log10(hydroniumM);
    pOH = 14 - pH;
    bulbGlow = 0.05;
  } else if (electrolyte === 'hcl') {
    alphaFraction = 1.0;
    hydroniumM = dilutedC;
    hydroxideM = 1e-14 / hydroniumM;
    pH = -Math.log10(hydroniumM);
    pOH = 14 - pH;
    bulbGlow = Math.max(0.6, Math.min(1.0, dilutedC * 8));
  } else if (electrolyte === 'nh4oh') {
    const kb = 1.8e-5;
    alphaFraction = Math.min(1.0, Math.sqrt(kb / dilutedC));
    hydroxideM = alphaFraction * dilutedC;
    hydroniumM = 1e-14 / hydroxideM;
    pH = 14 - (-Math.log10(hydroxideM));
    pOH = 14 - pH;
    bulbGlow = Math.min(1.0, 0.15 + alphaFraction * 2.5);
  } else {
    // NaOH
    alphaFraction = 1.0;
    hydroxideM = dilutedC;
    hydroniumM = 1e-14 / hydroxideM;
    pH = 14 - (-Math.log10(hydroxideM));
    pOH = 14 - pH;
    bulbGlow = Math.max(0.6, Math.min(1.0, dilutedC * 8));
  }

  const conductivityPercent = Math.min(100, Math.round(bulbGlow * 100));

  // 3. Salt Hydrolysis
  let saltSolutionPH = 7.0;
  let saltNatureEn: EquilibriumSimState['saltNatureEn'] = 'Neutral Salt';
  let saltNatureAr: EquilibriumSimState['saltNatureAr'] = 'ملح متعادل التأثير';

  if (salt === 'nh4cl') {
    // Strong acid + Weak base -> Acidic
    saltSolutionPH = 5.12 - 0.2 * Math.log10(saltConcentrationM);
    saltNatureEn = 'Acidic Salt';
    saltNatureAr = 'ملح حمضي التأثير';
  } else if (salt === 'ch3coona') {
    // Weak acid + Strong base -> Basic
    saltSolutionPH = 8.87 + 0.2 * Math.log10(saltConcentrationM);
    saltNatureEn = 'Basic (Alkaline) Salt';
    saltNatureAr = 'ملح قاعدي (قلوي) التأثير';
  } else if (salt === 'na2co3') {
    saltSolutionPH = 11.2 + 0.3 * Math.log10(saltConcentrationM);
    saltNatureEn = 'Basic (Alkaline) Salt';
    saltNatureAr = 'ملح قاعدي (قلوي) التأثير';
  } else if (salt === 'ch3coonh4') {
    saltSolutionPH = 7.0;
    saltNatureEn = 'Neutral Salt';
    saltNatureAr = 'ملح متعادل التأثير';
  } else {
    // NaCl
    saltSolutionPH = 7.0;
    saltNatureEn = 'Neutral Salt';
    saltNatureAr = 'ملح متعادل التأثير';
  }

  const saltSolutionColor = getIndicatorColor(indicatorId, saltSolutionPH, 0.85);

  // 4. Solubility Product Ksp
  let ksp = 1.8e-10;
  let molarSolubilityS = 1.34e-5;
  let precipitateColor = '#ffffff';
  if (sparinglySalt === 'agcl') {
    ksp = 1.8e-10;
    molarSolubilityS = addedCommonIonM > 0 ? ksp / addedCommonIonM : Math.sqrt(ksp);
    precipitateColor = '#f8fafc'; // White
  } else if (sparinglySalt === 'pbi2') {
    ksp = 7.1e-9;
    molarSolubilityS =
      addedCommonIonM > 0
        ? ksp / Math.pow(addedCommonIonM, 2)
        : Math.cbrt(ksp / 4);
    precipitateColor = '#eab308'; // Canary Yellow
  } else if (sparinglySalt === 'aloh3') {
    ksp = 1.3e-33;
    molarSolubilityS = Math.pow(ksp / 27, 0.25);
    precipitateColor = '#e2e8f0'; // White gelatinous
  } else {
    // BaSO4
    ksp = 1.1e-10;
    molarSolubilityS = addedCommonIonM > 0 ? ksp / addedCommonIonM : Math.sqrt(ksp);
    precipitateColor = '#ffffff';
  }

  const qsp = addedCommonIonM > 0 ? ksp * (1 + addedCommonIonM * 50) : ksp;
  const isPrecipitating = qsp >= ksp;
  const precipitateMassMg = parseFloat((addedCommonIonM * 143.3 * 10).toFixed(1));

  return {
    currentKc: parseFloat(currentKc.toFixed(2)),
    currentQc: parseFloat(currentQc.toFixed(2)),
    shiftDirectionEn,
    shiftDirectionAr,
    vesselColorRgba,
    absorbanceOD,
    forwardRate,
    reverseRate,
    alphaFraction: parseFloat(alphaFraction.toFixed(4)),
    hydroniumM,
    hydroxideM,
    pH: parseFloat(pH.toFixed(2)),
    pOH: parseFloat(pOH.toFixed(2)),
    conductivityPercent,
    bulbGlow: parseFloat(bulbGlow.toFixed(2)),
    saltSolutionPH: parseFloat(saltSolutionPH.toFixed(2)),
    saltSolutionColor,
    saltNatureEn,
    saltNatureAr,
    ksp,
    qsp,
    molarSolubilityS,
    isPrecipitating,
    precipitateColor,
    precipitateMassMg,
  };
}

export const EQUILIBRIUM_LAB_DEF: LabDefinition<EquilibriumParams, EquilibriumSimState> = {
  id: 'chemistry_equilibrium',
  subject: 'chemistry',
  chapterRef: 'Chapter 3',
  titleEn: 'Chemical & Ionic Equilibrium Virtual Lab',
  titleAr: 'مختبر الاتزان الكيميائي والأيوني التفاعلي',
  subtitleEn:
    "Egyptian Secondary Chemistry Chapter 3: Le Chatelier's Principle, Ostwald's Dilution Law, Salt Hydrolysis, and Solubility Product (Ksp)",
  subtitleAr:
    'كيمياء الثانوية العامة - الباب الثالث: الاتزان الكيميائي، قاعدة لوشاتيليه، قانون أوستفالد، تميه الأملاح، وحاصل الإذابة',
  objectives: [
    {
      id: 'obj_le_chatelier',
      textEn: "Analyze dynamic equilibrium shifts under concentration, pressure, and temperature changes according to Le Chatelier's principle.",
      textAr: 'تحليل انزياح الاتزان الديناميكي بتغير التركيز والضغط ودرجة الحرارة وفقاً لقاعدة لوشاتيليه.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_ostwald',
      textEn: "Verify Ostwald's dilution law for weak electrolytes: Ka = α² C.",
      textAr: 'تحقيق وتطبيق قانون أوستفالد للتخفيف للإلكتروليتات الضعيفة: Ka = α² C.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj_salt_hydrolysis',
      textEn: 'Deduce salt solution acidity or alkalinity from conjugate acid-base strengths and indicator colors.',
      textAr: 'استنتاج وتعيين نوع الوسط للمحاليل الملحية (حمضي/قاعدي/متعادل) وألوان الأدلة الكيميائية.',
      bloomLevel: 'evaluate',
    },
    {
      id: 'obj_ksp',
      textEn: 'Calculate solubility product Ksp and predict precipitate formation via the common ion effect.',
      textAr: 'حساب حاصل الإذابة Ksp والتنبؤ بترسيب الأملاح الشحيحة بتأثير الأيون المشترك.',
      bloomLevel: 'apply',
    },
  ],
  keyFormulas: [
    {
      id: 'eq-kc-reaction',
      labelEn: 'Equilibrium Constant (Kc)',
      labelAr: 'ثابت الاتزان (Kc)',
      tex: 'K_c = \\frac{[\\text{Products}]^p}{[\\text{Reactants}]^r}',
      descriptionEn: 'Ratio of product concentrations to reactant concentrations at equilibrium.',
      descriptionAr: 'النسبة بين حاصل ضرب تركيزات النواتج إلى المتفاعلات كل مرفوع لأس يساوي عدد المولات.',
    },
    {
      id: 'eq-ostwald',
      labelEn: "Ostwald's Dilution Law",
      labelAr: 'قانون أوستفالد للتخفيف',
      tex: 'K_a = \\alpha^2 \\cdot C_a \\implies \\alpha = \\sqrt{\\frac{K_a}{C_a}}',
      descriptionEn: 'Degree of dissociation α increases with dilution such that Ka remains constant.',
      descriptionAr: 'تزداد درجة تفكك الإلكتروليت الضعيف بزيادة التخفيف لتظل قيمة Ka ثابتة.',
    },
    {
      id: 'eq-hydronium',
      labelEn: 'Hydronium Ion Concentration',
      labelAr: 'تركيز أيون الهيدرونيوم',
      tex: '[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\alpha \\cdot C_a',
      descriptionEn: 'Hydronium concentration for a weak monoprotic acid.',
      descriptionAr: 'حساب تركيز أيون الهيدرونيوم لحمض ضعيف أحادي البروتون.',
    },
    {
      id: 'eq-ksp',
      labelEn: 'Solubility Product Constant (Ksp)',
      labelAr: 'حاصل الإذابة (Ksp)',
      tex: 'K_{\\text{sp}} = [\\text{A}^{m+}]^x [\\text{B}^{n-}]^y',
      descriptionEn: 'Product of the molar concentrations of ions in a saturated sparingly soluble salt solution.',
      descriptionAr: 'حاصل ضرب تركيزات أيونات الملح شحيح الذوبان في محلوله المشبع مقدرة بالمول/لتر.',
    },
  ],
  defaultParams: INITIAL_EQUILIBRIUM_PARAMS,
  paramSchema: EQUILIBRIUM_PARAM_SCHEMA,
  presets: EQUILIBRIUM_PRESETS,
  poePrompts: EQUILIBRIUM_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Concentration (M) / Temperature',
    xLabelAr: 'التركيز (مولار) / درجة الحرارة',
    xUnit: 'M',
    yLabelEn: 'pH / Absorbance',
    yLabelAr: 'الأس الهيدروجيني / الامتصاصية',
    yUnit: 'pH',
  },
};

export const EquilibriumLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const lab = useVirtualLab<EquilibriumParams, EquilibriumSimState>({
    definition: EQUILIBRIUM_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const simState = useMemo<EquilibriumSimState>(() => {
    return solveEquilibriumState(params);
  }, [params]);

  // DMM Instrument Reading State
  const [dmmMode, setDmmMode] = useState<'pH' | 'pOH' | 'H_conc' | 'OH_conc' | 'alpha'>('pH');

  // Animation pulse tick
  const [animTick, setAnimTick] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimTick((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Telemetry metrics
  const metrics: LabTelemetryMetric[] = useMemo(() => {
    if (params.module === 'le_chatelier') {
      return [
        {
          id: 'kc',
          labelEn: 'Equilibrium Constant (Kc)',
          labelAr: 'ثابت الاتزان (Kc)',
          value: simState.currentKc,
          unit: '',
          status: 'optimal',
        },
        {
          id: 'qc',
          labelEn: 'Reaction Quotient (Qc)',
          labelAr: 'حاصل التفاعل (Qc)',
          value: simState.currentQc,
          unit: '',
          status: simState.currentQc === simState.currentKc ? 'optimal' : 'warning',
        },
        {
          id: 'abs',
          labelEn: 'Spectrophotometer Absorbance',
          labelAr: 'امتصاصية المطياف الضوئي',
          value: simState.absorbanceOD,
          unit: 'OD',
          status: 'normal',
        },
        {
          id: 'rates',
          labelEn: 'Forward vs Reverse Velocity',
          labelAr: 'سرعة الطردي مقابل العكسي',
          value: `${simState.forwardRate} / ${simState.reverseRate}`,
          unit: 'mol/L·s',
          status: simState.forwardRate === simState.reverseRate ? 'optimal' : 'alert',
        },
      ];
    } else if (params.module === 'ostwald_ionic') {
      return [
        {
          id: 'alpha',
          labelEn: 'Ionization Degree (α)',
          labelAr: 'درجة التفكك والتأين (α)',
          value: `${(simState.alphaFraction * 100).toFixed(2)}%`,
          unit: '',
          status: 'optimal',
        },
        {
          id: 'ph',
          labelEn: 'Solution pH',
          labelAr: 'الأس الهيدروجيني (pH)',
          value: simState.pH,
          unit: '',
          status: simState.pH < 7 ? 'warning' : 'optimal',
        },
        {
          id: 'conductivity',
          labelEn: 'Conductivity Index',
          labelAr: 'مؤشر التوصيل الكهربي',
          value: `${simState.conductivityPercent}%`,
          unit: '',
          status: simState.bulbGlow > 0.5 ? 'optimal' : 'normal',
        },
      ];
    } else if (params.module === 'salt_hydrolysis') {
      return [
        {
          id: 'salt_ph',
          labelEn: 'Hydrolyzed pH',
          labelAr: 'الأس الهيدروجيني للملح',
          value: simState.saltSolutionPH,
          unit: '',
          status: simState.saltSolutionPH === 7.0 ? 'optimal' : 'warning',
        },
        {
          id: 'nature',
          labelEn: 'Salt Nature',
          labelAr: 'طبيعة الملح',
          value: isArabic ? simState.saltNatureAr : simState.saltNatureEn,
          unit: '',
          status: 'normal',
        },
      ];
    } else {
      return [
        {
          id: 'ksp',
          labelEn: 'Solubility Product (Ksp)',
          labelAr: 'حاصل الإذابة (Ksp)',
          value: simState.ksp.toExponential(2),
          unit: '',
          status: 'optimal',
        },
        {
          id: 'solubility',
          labelEn: 'Molar Solubility (s)',
          labelAr: 'درجة الذوبانية المولارية (s)',
          value: simState.molarSolubilityS.toExponential(2),
          unit: 'M',
          status: 'normal',
        },
        {
          id: 'ppt_mass',
          labelEn: 'Formed Precipitate',
          labelAr: 'كتلة الراسب المتكون',
          value: `${simState.precipitateMassMg} mg`,
          unit: '',
          status: simState.precipitateMassMg > 0 ? 'alert' : 'optimal',
        },
      ];
    }
  }, [params.module, simState, isArabic]);

  // Digital Multimeter Reading
  const dmmReading: DMMReading = useMemo(() => {
    let displayString = '';
    let secondaryString = '';
    let unit = '';

    if (dmmMode === 'pH') {
      const activePH =
        params.module === 'salt_hydrolysis' ? simState.saltSolutionPH : simState.pH;
      displayString = activePH.toFixed(2);
      unit = 'pH';
      secondaryString = activePH < 7.0 ? 'ACIDIC' : activePH > 7.0 ? 'ALKALINE' : 'NEUTRAL';
    } else if (dmmMode === 'pOH') {
      const activePOH =
        params.module === 'salt_hydrolysis'
          ? (14 - simState.saltSolutionPH).toFixed(2)
          : simState.pOH.toFixed(2);
      displayString = activePOH;
      unit = 'pOH';
      secondaryString = 'Kw = 1.00e-14';
    } else if (dmmMode === 'H_conc') {
      displayString = simState.hydroniumM.toExponential(2);
      unit = 'M';
      secondaryString = '[H3O+] ION';
    } else if (dmmMode === 'OH_conc') {
      displayString = simState.hydroxideM.toExponential(2);
      unit = 'M';
      secondaryString = '[OH-] ION';
    } else {
      displayString = `${(simState.alphaFraction * 100).toFixed(2)} %`;
      unit = 'α';
      secondaryString = "OSTWALD'S LAW";
    }

    return {
      mode: 'voltage_dc',
      value: simState.pH,
      displayString,
      secondaryString,
      unit,
      voltageDC: simState.pH,
      voltageAC: 0,
      currentDC: simState.alphaFraction,
      resistance: simState.conductivityPercent,
      continuityBeep: false,
      isOverload: false,
    };
  }, [dmmMode, simState, params.module]);

  // Dual-Trace Oscilloscope Signals: Reaction Velocities
  const oscilloscopeSignals: WaveformSignal[] = useMemo(() => {
    return [
      {
        id: 'trace_forward_rate',
        label: isArabic ? 'سرعة التفاعل الطردي r₁' : 'CH 1: Forward Rate r₁',
        color: '#38bdf8', // Cyan
        amplitude: Math.min(10, simState.forwardRate * 3),
        frequency: 1.0,
        phase: 0,
        phaseDeg: 0,
        type: 'sine',
      },
      {
        id: 'trace_reverse_rate',
        label: isArabic ? 'سرعة التفاعل العكسي r₂' : 'CH 2: Reverse Rate r₂',
        color: '#f43f5e', // Rose
        amplitude: Math.min(10, simState.reverseRate * 3),
        frequency: 1.0,
        phase: 0,
        phaseDeg: 0,
        type: 'sine',
      },
    ];
  }, [simState.forwardRate, simState.reverseRate, isArabic]);

  // Simulation Viewport Canvas Rendering
  const handleRenderViewport = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      viewport: LabViewportState,
      _dpr: number
    ) => {
      ctx.save();
      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.fillStyle = isLight ? '#f8fafc' : '#030712';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = isLight ? 'rgba(203, 213, 225, 0.6)' : 'rgba(30, 41, 59, 0.6)';
      ctx.lineWidth = 1;
      const gridSize = 28 * viewport.zoom;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const centerX = width / 2;
      const centerY = height / 2;

      if (params.module === 'le_chatelier') {
        // Render Le Chatelier Gas Reactor Flask or Syringe
        ctx.save();
        ctx.translate(centerX + viewport.panX, centerY - 20 + viewport.panY);
        ctx.scale(viewport.zoom, viewport.zoom);

        // Vessel glow
        const glowGrad = ctx.createRadialGradient(0, 10, 10, 0, 10, 150);
        glowGrad.addColorStop(0, simState.vesselColorRgba);
        glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(-170, -170, 340, 340);

        // Spherical Glass Flask / Reactor Body
        ctx.beginPath();
        ctx.arc(0, 10, 95, 0, Math.PI * 2);
        ctx.fillStyle = simState.vesselColorRgba;
        ctx.fill();
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Flask neck
        ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
        ctx.fillRect(-20, -115, 40, 40);
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(-20, -115, 40, 40);

        // Rubber stopper
        ctx.fillStyle = isLight ? '#64748b' : '#475569';
        ctx.fillRect(-24, -130, 48, 16);

        // Pressure Gauge stem and dial
        ctx.strokeStyle = isLight ? '#475569' : '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, -130);
        ctx.lineTo(0, -140);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, -154, 14, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#ffffff' : '#0f172a';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 2;
        ctx.stroke();

        const needleAngle = -Math.PI * 0.75 + (params.pressureAtm / 5.0) * Math.PI * 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -154);
        ctx.lineTo(Math.cos(needleAngle) * 9, -154 + Math.sin(needleAngle) * 9);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Animated Gas Molecules
        const numParticles = Math.round(16 * Math.sqrt(params.pressureAtm));
        for (let i = 0; i < numParticles; i++) {
          const angle = (i * (360 / numParticles) + animTick * 1.5) * (Math.PI / 180);
          const rad = 20 + ((i * 17 + animTick * 2) % 65);
          const px = Math.cos(angle) * rad;
          const py = 10 + Math.sin(angle) * rad;

          // NO2 (reddish brown pair) vs N2O4 (larger colorless dimer)
          if (i % 2 === 0) {
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fillStyle = isLight ? '#b45309' : '#d97706';
            ctx.fill();
            ctx.strokeStyle = isLight ? '#78350f' : '#fef08a';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(px, py, 9, 0, Math.PI * 2);
            ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.85)' : 'rgba(255, 255, 255, 0.75)';
            ctx.fill();
            ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }

        // Pressure & Temperature Readout Tag Card
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-135, 115, 270, 45, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0369a1' : '#38bdf8';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `P = ${params.pressureAtm.toFixed(1)} atm | T = ${params.temperatureC} °C (${params.temperatureC + 273} K)`,
          0,
          133
        );
        ctx.fillStyle = isLight ? '#15803d' : '#4ade80';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(
          isArabic ? simState.shiftDirectionAr : simState.shiftDirectionEn,
          0,
          150
        );

        ctx.restore();
      } else if (params.module === 'ostwald_ionic') {
        // Render Conductivity Electrolysis Apparatus & Light Bulb
        ctx.save();
        ctx.translate(centerX + viewport.panX, centerY - 15 + viewport.panY);
        ctx.scale(viewport.zoom, viewport.zoom);
        const dilutedC = Math.max(0.0001, (params.concentrationM * 100) / params.solutionVolumeMl);

        // Glass Beaker
        ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.6)' : 'rgba(30, 41, 59, 0.4)';
        ctx.fillRect(-85, -15, 170, 140);
        ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.lineWidth = 3;
        ctx.strokeRect(-85, -15, 170, 140);

        // Electrolyte Solution Level
        const solHeight = 35 + (params.solutionVolumeMl / 500) * 75;
        ctx.fillStyle =
          params.electrolyte === 'hcl'
            ? isLight ? 'rgba(2, 132, 199, 0.25)' : 'rgba(56, 189, 248, 0.35)'
            : isLight ? 'rgba(217, 119, 6, 0.25)' : 'rgba(251, 191, 36, 0.35)';
        ctx.fillRect(-82, 122 - solHeight, 164, solHeight);

        // Electrodes (Carbon/Platinum rods)
        ctx.fillStyle = isLight ? '#475569' : '#334155';
        ctx.fillRect(-45, -55, 14, 140);
        ctx.fillRect(31, -55, 14, 140);
        ctx.strokeStyle = isLight ? '#94a3b8' : '#64748b';
        ctx.strokeRect(-45, -55, 14, 140);
        ctx.strokeRect(31, -55, 14, 140);

        // Wires to Battery and Bulb
        ctx.beginPath();
        ctx.moveTo(-38, -55);
        ctx.lineTo(-38, -95);
        ctx.lineTo(-18, -95);
        ctx.moveTo(38, -55);
        ctx.lineTo(38, -95);
        ctx.lineTo(18, -95);
        ctx.strokeStyle = isLight ? '#d97706' : '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Light Bulb socket
        ctx.fillStyle = isLight ? '#94a3b8' : '#64748b';
        ctx.fillRect(-14, -102, 28, 14);

        // Glowing Glass Bulb
        const bulbGlowRadius = 22 + simState.bulbGlow * 30;
        const bulbGrad = ctx.createRadialGradient(0, -125, 4, 0, -125, bulbGlowRadius);
        bulbGrad.addColorStop(
          0,
          `rgba(250, 204, 21, ${Math.min(1.0, 0.4 + simState.bulbGlow * 0.6)})`
        );
        bulbGrad.addColorStop(1, 'rgba(250, 204, 21, 0)');
        ctx.fillStyle = bulbGrad;
        ctx.fillRect(-bulbGlowRadius, -125 - bulbGlowRadius, bulbGlowRadius * 2, bulbGlowRadius * 2);

        ctx.beginPath();
        ctx.arc(0, -125, 16, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 240, 138, ${Math.max(0.35, simState.bulbGlow)})`;
        ctx.fill();
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Filament
        ctx.beginPath();
        ctx.moveTo(-5, -118);
        ctx.lineTo(0, -129);
        ctx.lineTo(5, -118);
        ctx.strokeStyle = simState.bulbGlow > 0.2 ? '#f59e0b' : '#78716c';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Solution Status Caption
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-135, 135, 270, 45, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0369a1' : '#38bdf8';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `C = ${dilutedC.toFixed(4)} M | α = ${(simState.alphaFraction * 100).toFixed(2)} %`,
          0,
          153
        );
        ctx.fillStyle = isLight ? '#b45309' : '#facc15';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(
          `Bulb Glow: ${(simState.bulbGlow * 100).toFixed(0)}% | pH = ${simState.pH.toFixed(2)}`,
          0,
          190
        );

        ctx.restore();
      } else if (params.module === 'salt_hydrolysis') {
        // Render Salt Hydrolysis Colorimetric Beaker
        ctx.save();
        ctx.translate(centerX + viewport.panX, centerY - 15 + viewport.panY);
        ctx.scale(viewport.zoom, viewport.zoom);

        // Beaker
        ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.7)' : 'rgba(15, 23, 42, 0.7)';
        ctx.fillRect(-85, -60, 170, 140);
        ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.lineWidth = 3;
        ctx.strokeRect(-85, -60, 170, 140);

        // Indicator Colored Salt Solution
        ctx.fillStyle = simState.saltSolutionColor;
        ctx.fillRect(-82, -5, 164, 82);

        // Color glow
        const glowGrad = ctx.createRadialGradient(0, 35, 10, 0, 35, 80);
        glowGrad.addColorStop(0, simState.saltSolutionColor);
        glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(-110, -25, 220, 130);

        // Submerged Magnetic Stirrer pill
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(-16, 66, 32, 8, 4);
        ctx.fill();
        ctx.strokeStyle = isLight ? '#94a3b8' : '#64748b';
        ctx.stroke();

        // pH Tag Card
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-125, 95, 250, 48, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0369a1' : '#38bdf8';
        ctx.font = 'bold 13px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`Salt pH = ${simState.saltSolutionPH.toFixed(2)}`, 0, 115);

        ctx.fillStyle =
          simState.saltSolutionPH === 7.0
            ? isLight ? '#15803d' : '#4ade80'
            : simState.saltSolutionPH < 7.0
            ? isLight ? '#be123c' : '#f43f5e'
            : isLight ? '#0369a1' : '#38bdf8';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(
          isArabic ? simState.saltNatureAr : simState.saltNatureEn,
          0,
          133
        );

        ctx.restore();
      } else {
        // Render Solubility Product Ksp Test Tube & Precipitate
        ctx.save();
        ctx.translate(centerX + viewport.panX, centerY - 15 + viewport.panY);
        ctx.scale(viewport.zoom, viewport.zoom);

        // Test Tube
        ctx.beginPath();
        ctx.moveTo(-40, -110);
        ctx.lineTo(-40, 50);
        ctx.arc(0, 50, 40, Math.PI, 0, true);
        ctx.lineTo(40, -110);
        ctx.closePath();
        ctx.fillStyle = isLight ? 'rgba(226, 232, 240, 0.5)' : 'rgba(30, 41, 59, 0.5)';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#64748b' : '#94a3b8';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Clear Saturated Supernatant Solution
        ctx.beginPath();
        ctx.moveTo(-37, -45);
        ctx.lineTo(-37, 50);
        ctx.arc(0, 50, 37, Math.PI, 0, true);
        ctx.lineTo(37, -45);
        ctx.closePath();
        ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.15)' : 'rgba(56, 189, 248, 0.2)';
        ctx.fill();

        // Insoluble Precipitate sediment at bottom
        if (simState.isPrecipitating) {
          ctx.beginPath();
          ctx.arc(0, 50, 37, Math.PI * 0.8, Math.PI * 0.2, true);
          ctx.closePath();
          ctx.fillStyle = simState.precipitateColor;
          ctx.fill();

          // Suspended drifting crystalline specks
          for (let p = 0; p < 12; p++) {
            const specX = -20 + ((p * 17 + animTick) % 40);
            const specY = 0 + ((p * 23 + animTick * 2) % 55);
            ctx.beginPath();
            ctx.arc(specX, specY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = simState.precipitateColor;
            ctx.fill();
          }
        }

        // Telemetry Tag Card
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-135, 110, 270, 46, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0369a1' : '#38bdf8';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          `Ksp = ${simState.ksp.toExponential(1)} | s = ${simState.molarSolubilityS.toExponential(2)} M`,
          0,
          128
        );

        ctx.fillStyle = simState.isPrecipitating
          ? isLight ? '#b45309' : '#eab308'
          : isLight ? '#15803d' : '#4ade80';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(
          isArabic
            ? `الراسب: ${simState.precipitateMassMg} مجم (أيون مشترك = ${params.addedCommonIonM}M)`
            : `Precipitate: ${simState.precipitateMassMg} mg (Common Ion = ${params.addedCommonIonM}M)`,
          0,
          146
        );

        ctx.restore();
      }

      ctx.restore();
    },
    [params, simState, animTick, isLight, isArabic]
  );

  return (
    <VirtualLabShell
      definition={EQUILIBRIUM_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab as any}
      telemetry={metrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscilloscopeSignals[0]}
      oscilloscopeCh2={oscilloscopeSignals[1]}
      currentXValue={params.temperatureC}
      currentYValue={simState.currentKc}
      onResetSimulation={resetParams}
    >
      <div className="space-y-6">
        {/* Module Subtabs Navigator */}
        <div
          className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
            isContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isArabic ? 'موديول الاتزان:' : 'Equilibrium Module:'}</span>
            </span>

            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <select
                value={params.module}
                onChange={(e) => updateParam('module', e.target.value as EquilibriumModule)}
                className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                  isContrast
                    ? 'bg-black text-white border-cyan-400'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-slate-950 border-slate-800 text-slate-200'
                }`}
              >
                <option value="le_chatelier">
                  ⚖️ {isArabic ? '١. مفاعل لوشاتيليه الغازي (NO₂ وهابر)' : '1. Le Chatelier Gas Reactor (NO₂ & Haber)'}
                </option>
                <option value="ostwald_ionic">
                  💡 {isArabic ? '٢. قانون أوستفالد والتوصيل الكهربي' : "2. Ostwald's Dilution Law & Bulb"}
                </option>
                <option value="salt_hydrolysis">
                  🧪 {isArabic ? '٣. تميه الأملاح والأدلة الكيميائية' : '3. Salt Hydrolysis & Indicators'}
                </option>
                <option value="solubility_product">
                  💎 {isArabic ? '٤. حاصل الإذابة (Ksp) والأيون المشترك' : '4. Solubility Product (Ksp) & Common Ion'}
                </option>
              </select>
              <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Quick Context Pill / DMM Quick Switcher */}
          {params.module === 'le_chatelier' ? (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold ${
                isLight ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <span className="font-mono text-cyan-500 font-black">
                K<sub>c</sub> = {simState.currentKc < 0.01 ? simState.currentKc.toExponential(2) : simState.currentKc.toFixed(2)}
              </span>
              <span className="text-slate-400">|</span>
              <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                simState.shiftDirectionEn === 'Dynamic Equilibrium'
                  ? isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                  : isLight ? 'bg-amber-100 text-amber-900' : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
              }`}>
                {isArabic ? simState.shiftDirectionAr : simState.shiftDirectionEn}
              </span>
            </div>
          ) : params.module === 'solubility_product' ? (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold ${
                isLight ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <span className="font-mono text-cyan-500 font-black">
                K<sub>sp</sub> = {simState.ksp.toExponential(1)}
              </span>
              <span className="text-slate-400">|</span>
              <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                simState.isPrecipitating
                  ? isLight ? 'bg-amber-100 text-amber-900' : 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                  : isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
              }`}>
                {simState.isPrecipitating
                  ? (isArabic ? 'يتكون راسب' : 'Precipitating')
                  : (isArabic ? 'محلول غير مشبع / مشبع' : 'Saturated Solution')}
              </span>
            </div>
          ) : (
            <div
              className={`flex items-center gap-1 p-1 rounded-xl border ${
                isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950 border-slate-800'
              }`}
            >
              {(['pH', 'pOH', 'H_conc', 'alpha'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDmmMode(mode)}
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                    dmmMode === mode
                      ? 'bg-cyan-600 text-white font-black shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {mode === 'pH'
                    ? 'pH'
                    : mode === 'pOH'
                    ? 'pOH'
                    : mode === 'H_conc'
                    ? '[H₃O⁺]'
                    : 'α (%)'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Live Simulation Viewport */}
        <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950">
          <CanvasSimulationViewport
            id="equilibrium-canvas-viewport"
            lang={lang}
            minHeight={380}
            onRender={handleRenderViewport}
          />
        </div>

        {/* Dynamic Controls Grid */}
        <div
          className={`p-5 rounded-2xl border space-y-4 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>{isArabic ? 'لوحة التحكم والمتغيرات الحركية:' : 'Kinetic Variables & Parameters:'}</span>
            </h4>
          </div>

          {/* MODULE 1: LE CHATELIER CONTROLS */}
          {params.module === 'le_chatelier' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className={`block text-xs font-bold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'نظام التفاعل:' : 'Reaction System:'}
                </label>
                <select
                  value={params.gasSystem}
                  onChange={(e) => updateParam('gasSystem', e.target.value as GasReactionSystem)}
                  className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-bold border transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600'
                      : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-400'
                  }`}
                >
                  <option value="no2_dimer">2NO₂ (Brown) ⇌ N₂O₄ (Colorless)</option>
                  <option value="haber_ammonia">N₂ + 3H₂ ⇌ 2NH₃ (Haber-Bosch)</option>
                  <option value="fe_thiocyanate">Fe³⁺ + 3SCN⁻ ⇌ Fe(SCN)₃ (Blood Red)</option>
                  <option value="contact_so3">2SO₂ + O₂ ⇌ 2SO₃ (Contact)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{isArabic ? 'درجة الحرارة T:' : 'Temperature:'}</span>
                  <span className="font-mono font-black text-amber-500">{params.temperatureC} °C</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="5"
                  value={params.temperatureC}
                  onChange={(e) => updateParam('temperatureC', parseInt(e.target.value))}
                  className={`w-full accent-amber-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{isArabic ? 'الضغط الكلي P:' : 'Total Pressure:'}</span>
                  <span className="font-mono font-black text-cyan-500">{params.pressureAtm.toFixed(1)} atm</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={params.pressureAtm}
                  onChange={(e) => updateParam('pressureAtm', parseFloat(e.target.value))}
                  className={`w-full accent-cyan-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>

              <div className="flex flex-col justify-end">
                <button
                  onClick={() => updateParam('hasCatalyst', !params.hasCatalyst)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer border shadow-xs ${
                    params.hasCatalyst
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-md'
                      : isLight
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                  }`}
                >
                  {params.hasCatalyst
                    ? (isArabic ? 'العامل الحفاز مضاف (+k₁, +k₂)' : 'Catalyst Active (+k₁, +k₂)')
                    : (isArabic ? 'إضافة عامل حفاز' : 'Add Catalyst')}
                </button>
              </div>
            </div>
          )}

          {/* MODULE 2: OSTWALD CONTROLS */}
          {params.module === 'ostwald_ionic' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className={`block text-xs font-bold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'الإلكتروليت:' : 'Electrolyte:'}
                </label>
                <select
                  value={params.electrolyte}
                  onChange={(e) => updateParam('electrolyte', e.target.value as ElectrolyteType)}
                  className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-bold border transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600'
                      : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-400'
                  }`}
                >
                  <option value="acetic_acid">CH₃COOH (Acetic Acid, Ka=1.8e-5)</option>
                  <option value="formic_acid">HCOOH (Formic Acid, Ka=1.8e-4)</option>
                  <option value="hcn">HCN (Hydrocyanic Acid, Ka=4.9e-10)</option>
                  <option value="hcl">HCl (Hydrochloric Acid, 100% Ionized)</option>
                  <option value="nh4oh">NH₄OH (Ammonia Solution, Kb=1.8e-5)</option>
                  <option value="naoh">NaOH (Sodium Hydroxide, 100%)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{isArabic ? 'التركيز C:' : 'Concentration C:'}</span>
                  <span className="font-mono font-black text-purple-500">{params.concentrationM.toFixed(3)} M</span>
                </div>
                <input
                  type="range"
                  min="0.001"
                  max="0.5"
                  step="0.005"
                  value={params.concentrationM}
                  onChange={(e) => updateParam('concentrationM', parseFloat(e.target.value))}
                  className={`w-full accent-purple-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{isArabic ? 'حجم الماء (التخفيف):' : 'Dilution Volume:'}</span>
                  <span className="font-mono font-black text-cyan-500">{params.solutionVolumeMl} mL</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={params.solutionVolumeMl}
                  onChange={(e) => updateParam('solutionVolumeMl', parseInt(e.target.value))}
                  className={`w-full accent-cyan-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>
            </div>
          )}

          {/* MODULE 3: SALT HYDROLYSIS CONTROLS */}
          {params.module === 'salt_hydrolysis' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={`block text-xs font-bold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'مركب الملح:' : 'Salt Solution:'}
                </label>
                <select
                  value={params.salt}
                  onChange={(e) => updateParam('salt', e.target.value as SaltType)}
                  className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-bold border transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600'
                      : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-400'
                  }`}
                >
                  <option value="nh4cl">NH₄Cl (Ammonium Chloride - Acidic)</option>
                  <option value="ch3coona">CH₃COONa (Sodium Acetate - Basic)</option>
                  <option value="nacl">NaCl (Sodium Chloride - Neutral)</option>
                  <option value="na2co3">Na₂CO₃ (Sodium Carbonate - Basic)</option>
                  <option value="ch3coonh4">CH₃COONH₄ (Ammonium Acetate - Neutral)</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'الدليل الكيميائي المضاف:' : 'Chemical Indicator:'}
                </label>
                <select
                  value={params.indicatorId}
                  onChange={(e) => updateParam('indicatorId', e.target.value)}
                  className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-bold border transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600'
                      : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-400'
                  }`}
                >
                  {Object.entries(COMMON_INDICATORS).map(([key, ind]) => (
                    <option key={key} value={key}>
                      {isArabic ? ind.nameAr : ind.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{isArabic ? 'تركيز الملح:' : 'Salt Molarity:'}</span>
                  <span className="font-mono font-black text-rose-500">{params.saltConcentrationM.toFixed(2)} M</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.5"
                  step="0.02"
                  value={params.saltConcentrationM}
                  onChange={(e) => updateParam('saltConcentrationM', parseFloat(e.target.value))}
                  className={`w-full accent-rose-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>
            </div>
          )}

          {/* MODULE 4: SOLUBILITY PRODUCT CONTROLS */}
          {params.module === 'solubility_product' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  {isArabic ? 'الملح شحيح الذوبان:' : 'Sparingly Soluble Salt:'}
                </label>
                <select
                  value={params.sparinglySalt}
                  onChange={(e) => updateParam('sparinglySalt', e.target.value as SparinglySolubleSalt)}
                  className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-bold border transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-600'
                      : 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-400'
                  }`}
                >
                  <option value="agcl">AgCl (Silver Chloride - White ppt)</option>
                  <option value="pbi2">PbI₂ (Lead Iodide - Yellow Canary ppt)</option>
                  <option value="aloh3">Al(OH)₃ (Aluminum Hydroxide - Gelatinous White)</option>
                  <option value="baso4">BaSO₄ (Barium Sulfate - Heavy White)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {isArabic ? 'إضافة أيون مشترك (NaCl / KI):' : 'Add Common Ion [Cl⁻ / I⁻]:'}
                  </span>
                  <span className="font-mono font-black text-amber-500">
                    {params.addedCommonIonM.toFixed(2)} M
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.4"
                  step="0.02"
                  value={params.addedCommonIonM}
                  onChange={(e) => updateParam('addedCommonIonM', parseFloat(e.target.value))}
                  className={`w-full accent-amber-500 cursor-pointer h-2 rounded-lg transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Egyptian Curriculum Core Exam Insights Card */}
        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>{isArabic ? 'ملاحظات وتطبيقات الامتحان الوزاري للثانوية العامة:' : 'Egyptian Curriculum Exam Insights:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تغير قيمة ثابت الاتزان Kc' : 'Kc Temperature Dependence'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'درجة الحرارة هي العامل الوحيد الذي يغير القيمة العددية لـ Kc. في التفاعلات الطاردة للحرارة (ΔH < 0)، رفع الحرارة يقلل Kc (علاقة عكسية)، بينما في الماصة للحرارة (ΔH > 0) رفع الحرارة يزيد Kc.'
                  : 'Temperature is the sole factor that changes Kc. In exothermic reactions (ΔH < 0), heating decreases Kc (inverse relation); in endothermic reactions (ΔH > 0), heating increases Kc.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قانون أوستفالد والتخفيف' : "Ostwald's Dilution Law"}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'عند ثبوت درجة الحرارة، تزداد درجة تفكك الإلكتروليت الضعيف (α) بزيادة التخفيف، لتظل قيمة Ka ثابتة: Ka = α² × C. وتزداد شدة إضاءة المصباح في حمض الخليك بالتخفيف عكس حمض الهيدروكلوريك.'
                  : 'At constant temperature, the degree of dissociation (α) of a weak electrolyte increases upon dilution such that Ka remains constant: Ka = α² · C. Weak acid lamp illumination brightens with water.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-rose-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تأثير الأيون المشترك وحاصل الإذابة' : 'Common Ion & Precipitation'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'إضافة مركب يحتوي على أيون مشترك يزيح الاتزان في الاتجاه العكسي (حسب لوشاتيليه)، مما يقلل ذوبانية الملح شحيح الذوبان ويسرع من تكوين الراسب فور أن يتجاوز حاصل ضرب الأيونات Qsp قيمة Ksp.'
                  : 'Adding a common ion shifts equilibrium reverse (Le Chatelier), reducing the molar solubility of sparingly soluble salts and precipitating crystals as soon as Qsp exceeds Ksp.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default EquilibriumLab;
