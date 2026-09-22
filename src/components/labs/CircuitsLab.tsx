import React, { useCallback, useMemo } from 'react';
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
  drawAnalogMeterGauge,
  drawGlowingParticle,
  drawHeavyInsulatedCable,
  drawInsulatedCablePolyline,
  drawBrassTerminalStud,
  drawHeavyLabBattery,
  drawWireWoundSliderRheostat,
  drawAxialCeramicResistor,
  drawIndustrialKnifeSwitch,
  drawIncandescentEdisonBulb,
  drawCenterZeroGalvanometer,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Activity,
  Layers,
  ChevronDown,
  Power,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type CircuitModule = 'closed_ohm' | 'resistor_networks' | 'kirchhoff' | 'power_energy';
export type ResistorNetworkType = 'series' | 'parallel' | 'wheatstone_bridge';

export interface CircuitsParams {
  module: CircuitModule;
  networkType: ResistorNetworkType;
  // Battery 1
  vb1: number; // Volts (1 to 24)
  rInternal1: number; // Ohms (0 to 5)
  // Battery 2 (for Kirchhoff)
  vb2: number; // Volts (0 to 24)
  rInternal2: number; // Ohms (0 to 5)
  battery2Polarity: 'same' | 'opposing';
  // Resistors
  r1: number; // Ohms (1 to 100)
  r2: number; // Ohms (1 to 100)
  r3: number; // Ohms (1 to 100)
  r4: number; // Ohms (1 to 100) for bridge
  rBridge: number; // Ohms (1 to 100) for bridge middle
  rheostatR: number; // Ohms (0 to 50) for closed ohm
  isSwitchClosed: boolean;
}

export interface CircuitsSimState {
  iTotal: number; // Amperes
  iBranch1: number;
  iBranch2: number;
  iBranch3: number;
  vTerminal1: number; // Volts
  vTerminal2: number; // Volts
  vDropInternal1: number;
  vDropInternal2: number;
  rEquivalent: number; // Ohms
  pTotal: number; // Watts
  pLoad: number; // Watts
  pInternalLoss: number; // Watts
  battery1StateEn: 'Discharging' | 'Charging' | 'Open';
  battery1StateAr: 'في حالة تفريغ' | 'في حالة شحن' | 'دائرة مفتوحة';
  battery2StateEn: 'Discharging' | 'Charging' | 'Inactive';
  battery2StateAr: 'في حالة تفريغ' | 'في حالة شحن' | 'غير متصل';
  efficiencyPercent: number; // %
  isBridgeBalanced: boolean;
}

export const INITIAL_CIRCUITS_PARAMS: CircuitsParams = {
  module: 'closed_ohm',
  networkType: 'series',
  vb1: 12.0,
  rInternal1: 1.0,
  vb2: 6.0,
  rInternal2: 1.0,
  battery2Polarity: 'opposing',
  r1: 6.0,
  r2: 12.0,
  r3: 8.0,
  r4: 16.0,
  rBridge: 10.0,
  rheostatR: 5.0,
  isSwitchClosed: true,
};

export const CIRCUITS_PARAM_SCHEMA: LabParameterSchema<CircuitsParams> = {
  module: {
    key: 'module',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'الموديول التعليمي',
    defaultValue: 'closed_ohm',
    options: [
      { value: 'closed_ohm', labelEn: "Ohm's Law for Closed Circuits (V = VB - Ir)", labelAr: 'قانون أوم للدائرة المغلقة (V = VB - Ir)' },
      { value: 'resistor_networks', labelEn: 'Resistor Networks (Series/Parallel/Bridge)', labelAr: 'توصيل المقاومات (توالي وتوازي وقنطرة وتستون)' },
      { value: 'kirchhoff', labelEn: "Kirchhoff's Laws Multi-Loop Solver", labelAr: 'قوانين كيرشوف وشبكات الحلقات المعقدة' },
      { value: 'power_energy', labelEn: 'Electric Power & Household Lamp Brightness', labelAr: 'القدرة الكهربية وإضاءة المصابيح المنزلية' },
    ],
    category: 'primary',
  },
  networkType: {
    key: 'networkType',
    type: 'select',
    labelEn: 'Resistor Configuration',
    labelAr: 'طريقة توصيل المقاومات',
    defaultValue: 'series',
    options: [
      { value: 'series', labelEn: 'Series Connection (R_eq = R1 + R2 + R3)', labelAr: 'توصيل على التوالي (ثبات شدة التيار)' },
      { value: 'parallel', labelEn: 'Parallel Connection (Constant Voltage)', labelAr: 'توصيل على التوازي (ثبات فرق الجهد)' },
      { value: 'wheatstone_bridge', labelEn: 'Wheatstone Bridge (Bridge Null Condition)', labelAr: 'قنطرة وتستون (حالة حذف المقاومة)' },
    ],
    category: 'primary',
  },
  vb1: {
    key: 'vb1',
    type: 'number',
    labelEn: 'Battery 1 EMF (VB1)',
    labelAr: 'القوة الدافعة الكهربية للمصدر ١ (VB1)',
    defaultValue: 12.0,
    min: 1.0,
    max: 24.0,
    step: 0.5,
    unit: ' V',
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module !== 'resistor_networks',
  },
  rInternal1: {
    key: 'rInternal1',
    type: 'number',
    labelEn: 'Battery 1 Internal Resistance (r1)',
    labelAr: 'المقاومة الداخلية للمصدر ١ (r1)',
    defaultValue: 1.0,
    min: 0.0,
    max: 5.0,
    step: 0.2,
    unit: ' Ω',
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module !== 'resistor_networks',
  },
  vb2: {
    key: 'vb2',
    type: 'number',
    labelEn: 'Battery 2 EMF (VB2)',
    labelAr: 'القوة الدافعة الكهربية للمصدر ٢ (VB2)',
    defaultValue: 6.0,
    min: 0.0,
    max: 24.0,
    step: 0.5,
    unit: ' V',
    category: 'secondary',
    visibleIf: (p: CircuitsParams) => p.module === 'kirchhoff',
  },
  rInternal2: {
    key: 'rInternal2',
    type: 'number',
    labelEn: 'Battery 2 Internal Resistance (r2)',
    labelAr: 'المقاومة الداخلية للمصدر ٢ (r2)',
    defaultValue: 1.0,
    min: 0.0,
    max: 5.0,
    step: 0.2,
    unit: ' Ω',
    category: 'secondary',
    visibleIf: (p: CircuitsParams) => p.module === 'kirchhoff',
  },
  battery2Polarity: {
    key: 'battery2Polarity',
    type: 'select',
    labelEn: 'Battery 2 Polarity',
    labelAr: 'قطبية المصدر ٢',
    defaultValue: 'opposing',
    visibleIf: (p: CircuitsParams) => p.module === 'kirchhoff',
    options: [
      { value: 'opposing', labelEn: 'Opposing / Back-to-Back (Charging State)', labelAr: 'توصيل متعاكس (تفريغ وشحن)' },
      { value: 'same', labelEn: 'Assisting / Same Direction (Dual Discharge)', labelAr: 'توصيل في نفس الاتجاه (تفريغ معاً)' },
    ],
    category: 'secondary',
  },
  r1: {
    key: 'r1',
    type: 'number',
    labelEn: 'Resistor R1',
    labelAr: 'المقاومة الأولى (R1)',
    defaultValue: 6.0,
    min: 1.0,
    max: 100.0,
    step: 1.0,
    unit: ' Ω',
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module === 'resistor_networks' || p.module === 'kirchhoff',
  },
  r2: {
    key: 'r2',
    type: 'number',
    labelEn: 'Resistor R2',
    labelAr: 'المقاومة الثانية (R2)',
    defaultValue: 12.0,
    min: 1.0,
    max: 100.0,
    step: 1.0,
    unit: ' Ω',
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module === 'resistor_networks' || p.module === 'kirchhoff',
  },
  r3: {
    key: 'r3',
    type: 'number',
    labelEn: 'Resistor R3',
    labelAr: 'المقاومة الثالثة (R3)',
    defaultValue: 8.0,
    min: 1.0,
    max: 100.0,
    step: 1.0,
    unit: ' Ω',
    category: 'secondary',
    visibleIf: (p: CircuitsParams) => p.module === 'resistor_networks' || p.module === 'kirchhoff',
  },
  r4: {
    key: 'r4',
    type: 'number',
    labelEn: 'Bridge Resistor R4',
    labelAr: 'مقاومة القنطرة الرابعة (R4)',
    defaultValue: 16.0,
    min: 1.0,
    max: 100.0,
    step: 1.0,
    unit: ' Ω',
    category: 'secondary',
    visibleIf: (p: CircuitsParams) => p.module === 'resistor_networks',
  },
  rBridge: {
    key: 'rBridge',
    type: 'number',
    labelEn: 'Central Bridge Resistor (R5)',
    labelAr: 'المقاومة المركزية للقنطرة (R5)',
    defaultValue: 10.0,
    min: 1.0,
    max: 100.0,
    step: 1.0,
    unit: ' Ω',
    category: 'secondary',
    visibleIf: (p: CircuitsParams) => p.module === 'resistor_networks' && p.networkType === 'wheatstone_bridge',
  },
  rheostatR: {
    key: 'rheostatR',
    type: 'number',
    labelEn: 'Load Rheostat Resistance (Rv)',
    labelAr: 'مقاومة الروستات المتغيرة (Rv)',
    defaultValue: 5.0,
    min: 0.0,
    max: 50.0,
    step: 0.5,
    unit: ' Ω',
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module === 'closed_ohm' || p.module === 'power_energy',
  },
  isSwitchClosed: {
    key: 'isSwitchClosed',
    type: 'boolean',
    labelEn: 'Circuit Switch (K)',
    labelAr: 'مفتاح الدائرة (K)',
    defaultValue: true,
    category: 'primary',
    visibleIf: (p: CircuitsParams) => p.module !== 'resistor_networks',
  },
};

export const CIRCUITS_PRESETS: LabPreset<CircuitsParams>[] = [
  {
    id: 'closed_circuit_ohm',
    nameEn: "Ohm's Law for Closed Circuit (Standard)",
    nameAr: 'قانون أوم للدائرة المغلقة القياسية',
    descriptionEn: 'Terminal voltage V = VB - Ir drops linearly as load current increases.',
    descriptionAr: 'فرق الجهد بين طرفي العمود V = VB - Ir يتناقص خطياً مع زيادة شدة التيار.',
    badge: 'Ohm',
    params: {
      module: 'closed_ohm',
      networkType: 'series',
      vb1: 12.0,
      rInternal1: 1.0,
      vb2: 0.0,
      rInternal2: 0.0,
      battery2Polarity: 'same',
      r1: 6.0,
      r2: 12.0,
      r3: 8.0,
      r4: 16.0,
      rBridge: 10.0,
      rheostatR: 5.0,
      isSwitchClosed: true,
    },
  },
  {
    id: 'open_circuit_limit',
    nameEn: 'Open Circuit Condition (V = VB)',
    nameAr: 'حالة الدائرة المفتوحة (V = VB)',
    descriptionEn: 'With switch open, current is zero and terminal voltage equals the full EMF VB.',
    descriptionAr: 'عند فتح المفتاح، ينعدم التيار ويقرأ الفولتميتر القوة الدافعة الكهربية كاملة.',
    badge: 'Open',
    params: {
      module: 'closed_ohm',
      networkType: 'series',
      vb1: 12.0,
      rInternal1: 2.0,
      vb2: 0.0,
      rInternal2: 0.0,
      battery2Polarity: 'same',
      r1: 6.0,
      r2: 12.0,
      r3: 8.0,
      r4: 16.0,
      rBridge: 10.0,
      rheostatR: 10.0,
      isSwitchClosed: false,
    },
  },
  {
    id: 'balanced_wheatstone',
    nameEn: 'Balanced Wheatstone Bridge (R1/R2 = R3/R4)',
    nameAr: 'قنطرة وتستون متزنة (إلغاء المقاومة)',
    descriptionEn: 'Equal potential at bridge terminals cancels current through central resistor R5.',
    descriptionAr: 'تساوي الجهد عند طرفي المقاومة الوسطية يلغي مرور التيار خلالها فتحذف من الحساب.',
    badge: 'Bridge',
    params: {
      module: 'resistor_networks',
      networkType: 'wheatstone_bridge',
      vb1: 12.0,
      rInternal1: 0.0,
      vb2: 0.0,
      rInternal2: 0.0,
      battery2Polarity: 'same',
      r1: 6.0,
      r2: 12.0,
      r3: 8.0,
      r4: 16.0,
      rBridge: 10.0,
      rheostatR: 0.0,
      isSwitchClosed: true,
    },
  },
  {
    id: 'kirchhoff_charging_discharging',
    nameEn: 'Kirchhoff Charging vs Discharging State',
    nameAr: 'كيرشوف: حالة بطارية تشحن وأخرى تفرغ',
    descriptionEn: 'Opposing batteries with VB1 > VB2: Battery 1 discharges while Battery 2 charges (V2 = VB2 + Ir2).',
    descriptionAr: 'بطاريتان متعاكستان؛ الأكبر تفرغ والأصغر تشحن ويصبح فرق جهدها V = VB + Ir.',
    badge: 'Kirchhoff',
    params: {
      module: 'kirchhoff',
      networkType: 'series',
      vb1: 18.0,
      rInternal1: 1.0,
      vb2: 6.0,
      rInternal2: 1.0,
      battery2Polarity: 'opposing',
      r1: 4.0,
      r2: 4.0,
      r3: 6.0,
      r4: 16.0,
      rBridge: 10.0,
      rheostatR: 0.0,
      isSwitchClosed: true,
    },
  },
  {
    id: 'household_parallel_lamps',
    nameEn: 'Household Parallel Lighting Advantage',
    nameAr: 'ميزة التوصيل على التوازي في المنازل',
    descriptionEn: 'Appliances receive full mains voltage 220V independently; turning one off does not affect others.',
    descriptionAr: 'تعمل الأجهزة على نفس فرق الجهد وبشكل مستقل؛ وإطفاء أحدها لا يقطع التيار عن البقية.',
    badge: 'Domestic',
    params: {
      module: 'power_energy',
      networkType: 'parallel',
      vb1: 220.0,
      rInternal1: 0.5,
      vb2: 0.0,
      rInternal2: 0.0,
      battery2Polarity: 'same',
      r1: 806.7, // 60W bulb
      r2: 484.0, // 100W bulb
      r3: 242.0, // 200W bulb
      r4: 16.0,
      rBridge: 10.0,
      rheostatR: 0.0,
      isSwitchClosed: true,
    },
  },
];

export const CIRCUITS_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_terminal_voltage_rheostat',
    titleEn: 'Challenge 1: Voltmeter across Battery Terminals (V = VB - Ir)',
    titleAr: 'تحدي ١: قراءة الفولتميتر بين طرفي البطارية عند تغيير مقاومة الروستات',
    scenarioEn: 'A battery of EMF VB and internal resistance r is connected to a variable rheostat Rv with a voltmeter connected across the battery terminals.',
    scenarioAr: 'بطارية قوتها الدافعة VB ومقاومتها الداخلية r متصلة بدائرة مغلقة بها روستات Rv، وفولتميتر متصل بين قطبي البطارية.',
    questionEn: 'What happens to the voltmeter reading V and the total current I when the resistance of the rheostat Rv is increased?',
    questionAr: 'ماذا يحدث لقراءة الفولتميتر V وشدة التيار الكلي I عند زيادة مقاومة الروستات Rv؟',
    optionsEn: [
      'Current I decreases and Voltmeter reading V increases towards VB.',
      'Current I increases and Voltmeter reading V decreases.',
      'Both current I and Voltmeter reading V remain constant.',
      'Voltmeter reading V drops to zero while current surges.'
    ],
    optionsAr: [
      'تقل شدة التيار I وتزداد قراءة الفولتميتر V مقتربة من القوة الدافعة VB.',
      'تزداد شدة التيار I وتقل قراءة الفولتميتر V.',
      'تظل شدة التيار وقراءة الفولتميتر ثابتين دون تغيير.',
      'تهبط قراءة الفولتميتر V للصفر بينما يندفع التيار لأقصاه.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'From closed circuit Ohm\'s law, I = VB / (Rv + r). As Rv increases, total circuit resistance increases so current I decreases. Consequently, the internal lost volts Ir decrease. Because V = VB - Ir, subtracting a smaller quantity makes the terminal voltage V increase towards VB.',
    scientificExplanationAr: 'وفق قانون أوم للدائرة المغلقة I = VB / (Rv + r)، عند زيادة Rv تزداد المقاومة الكلية فتقل شدة التيار I. وبما أن V = VB - Ir، فإن المقدار المطروح (الهبوط في الجهد Ir) يقل، وبالتالي تزداد قراءة الفولتميتر V بين قطبي المصدر مقتربة من VB.',
  },
  {
    id: 'poe_household_series_parallel',
    titleEn: 'Challenge 2: Household Lamp Connection & Burning Out',
    titleAr: 'تحدي ٢: إضاءة المصابيح المنزلية واحتراق أحدها',
    scenarioEn: 'Two lamps rated at 60W and 100W at 220V are connected first in series and then in parallel to the 220V mains.',
    scenarioAr: 'مصباحان مدون على الأول (60W, 220V) وعلى الثاني (100W, 220V) وصلا معاً مرة على التوالي ومرة على التوازي بمصدر 220V.',
    questionEn: 'Which lamp glows brighter in each configuration, and why are household circuits connected in parallel?',
    questionAr: 'أي المصباحين يكون أكثر إضاءة في كلتا الحالتين، ولماذا توصل الأجهزة المنزلية على التوازي؟',
    optionsEn: [
      '60W is brighter in series; 100W is brighter in parallel. Homes use parallel so each device gets 220V and works independently.',
      '100W is brighter in both cases. Homes use series to save electricity.',
      '60W is brighter in both cases because its filament is thinner.',
      'Both lamps have equal brightness in parallel and series.'
    ],
    optionsAr: [
      'المصباح 60W أكثر إضاءة في التوالي، والمصباح 100W أكثر إضاءة في التوازي. وتوصل المنازل على التوازي ليعمل كل جهاز مستقلاً بجهد 220V كامل.',
      'المصباح 100W أكثر إضاءة في كلتا الحالتين؛ وتوصل المنازل توالي لتوفير الطاقة.',
      'المصباح 60W أكثر إضاءة دائماً لرقة فتيلته.',
      'يتساوى المصباحان في الإضاءة في كلتا الحالتين.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'Resistance R = V^2 / P, so R_60 = 806.7 Ω > R_100 = 484 Ω. In series, current is constant so P = I^2 R makes the 60W lamp dissipate more power (brighter). In parallel, voltage is constant (220V) so P = V^2 / R makes the 100W lamp dissipate its full rated power (brighter). Homes use parallel so turning one off does not open the circuit for others.',
    scientificExplanationAr: 'مقاومة الفتيلة R = V^2 / P، فتكون مقاومة مصباح 60W أكبر من مصباح 100W. في التوالي يمر نفس التيار فتكون القدرة P = I^2 R أكبر في صاحب المقاومة الأكبر (مصباح 60W). وفي التوازي فرق الجهد ثابت فتكون القدرة P = V^2 / R أكبر في صاحب المقاومة الأقل (مصباح 100W). وتوصل المنازل توازي لتعمل الأجهزة مستقلة دون أن يؤثر تلف أحدها على البقية.',
  },
  {
    id: 'poe_charging_battery_kirchhoff',
    titleEn: 'Challenge 3: Battery in Charging Mode (V = VB + Ir)',
    titleAr: 'تحدي ٣: العمود الكهربي في حالة الشحن وقانون V = VB + Ir',
    scenarioEn: 'Two batteries with VB1 = 18V (r1 = 1Ω) and VB2 = 6V (r2 = 1Ω) are connected opposing each other in a closed loop.',
    scenarioAr: 'بطاريتان متصلتان على التعاكس في دائرة مغلقة: الأولى VB1 = 18V (r1 = 1Ω) والثانية VB2 = 6V (r2 = 1Ω).',
    questionEn: 'What are the operating states and terminal voltages of Battery 1 and Battery 2?',
    questionAr: 'ما هي حالة عمل كل من البطاريتين، وما صيغة فرق الجهد بين قطبي كل منهما؟',
    optionsEn: [
      'Battery 1 is Discharging (V1 = VB1 - I r1); Battery 2 is Charging (V2 = VB2 + I r2).',
      'Both batteries are discharging with V = VB - I r.',
      'Both batteries are charging from the external loop resistance.',
      'Battery 1 has V1 = 0 while Battery 2 doubles its voltage to 12V.'
    ],
    optionsAr: [
      'البطارية ١ في حالة تفريغ (V1 = VB1 - I r1)؛ والبطارية ٢ في حالة شحن (V2 = VB2 + I r2).',
      'كلتا البطاريتين في حالة تفريغ وصيغة كل منهما V = VB - I r.',
      'كلتا البطاريتين في حالة شحن بسبب المقاومة الخارجية.',
      'البطارية ١ ينعدم جهدها بينما تضاعف البطارية ٢ جهدها إلى 12V.'
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'Since VB1 > VB2 and they are connected in opposition, the larger battery (VB1) drives current out of its positive terminal (discharging), forcing current into the positive terminal of the smaller battery (VB2, charging). For a discharging battery V = VB - Ir (< VB). For a charging battery, the terminal voltage must exceed the EMF to push current backwards against it: V = VB + Ir (> VB).',
    scientificExplanationAr: 'بما أن البطاريتين متعاكستان وVB1 > VB2، فإن البطارية الكبرى تضخ تياراً من قطبها الموجب فتكون في حالة تفريغ (V1 = VB1 - Ir). ويدخل هذا التيار للقطب الموجب للبطارية الصغرى فتكون في حالة شحن، ويصبح فرق جهدها أكبر من قوتها الدافعة: V2 = VB2 + Ir للتغلب على مقاومتها الداخلية.',
  },
];

/**
 * Pure calculation engine for DC circuits, Ohm's law, and Kirchhoff networks.
 */
export function computeCircuitsSimState(params: CircuitsParams): CircuitsSimState {
  const {
    module,
    networkType,
    vb1,
    rInternal1,
    vb2,
    rInternal2,
    battery2Polarity,
    r1,
    r2,
    r3,
    r4,
    rBridge,
    rheostatR,
    isSwitchClosed,
  } = params;

  let iTotal = 0;
  let iBranch1 = 0;
  let iBranch2 = 0;
  let iBranch3 = 0;
  let vTerminal1 = 0;
  let vTerminal2 = 0;
  let vDropInternal1 = 0;
  let vDropInternal2 = 0;
  let rEquivalent = 0;
  let pTotal = 0;
  let pLoad = 0;
  let pInternalLoss = 0;
  let battery1StateEn: 'Discharging' | 'Charging' | 'Open' = 'Open';
  let battery1StateAr: 'في حالة تفريغ' | 'في حالة شحن' | 'دائرة مفتوحة' = 'دائرة مفتوحة';
  let battery2StateEn: 'Discharging' | 'Charging' | 'Inactive' = 'Inactive';
  let battery2StateAr: 'في حالة تفريغ' | 'في حالة شحن' | 'غير متصل' = 'غير متصل';
  let efficiencyPercent = 100;
  let isBridgeBalanced = false;

  if (!isSwitchClosed) {
    // Open circuit: I = 0, V = VB
    vTerminal1 = vb1;
    vTerminal2 = vb2;
    rEquivalent = Infinity;
    battery1StateEn = 'Open';
    battery1StateAr = 'دائرة مفتوحة';
    return {
      iTotal: 0,
      iBranch1: 0,
      iBranch2: 0,
      iBranch3: 0,
      vTerminal1: parseFloat(vTerminal1.toFixed(2)),
      vTerminal2: parseFloat(vTerminal2.toFixed(2)),
      vDropInternal1: 0,
      vDropInternal2: 0,
      rEquivalent: 999999,
      pTotal: 0,
      pLoad: 0,
      pInternalLoss: 0,
      battery1StateEn,
      battery1StateAr,
      battery2StateEn,
      battery2StateAr,
      efficiencyPercent: 100,
      isBridgeBalanced: false,
    };
  }

  // Handle Modules
  if (module === 'closed_ohm') {
    // Ohm's law for closed circuit: V = VB - I * r
    rEquivalent = Math.max(0.01, rheostatR);
    iTotal = vb1 / (rEquivalent + rInternal1);
    vDropInternal1 = iTotal * rInternal1;
    vTerminal1 = Math.max(0, vb1 - vDropInternal1);
    pTotal = vb1 * iTotal;
    pLoad = Math.pow(iTotal, 2) * rEquivalent;
    pInternalLoss = Math.pow(iTotal, 2) * rInternal1;
    efficiencyPercent = pTotal > 0 ? (pLoad / pTotal) * 100 : 0;
    battery1StateEn = 'Discharging';
    battery1StateAr = 'في حالة تفريغ';
    iBranch1 = iTotal;
  } else if (module === 'resistor_networks') {
    if (networkType === 'series') {
      rEquivalent = r1 + r2 + r3;
      iTotal = vb1 / (rEquivalent + rInternal1);
      vDropInternal1 = iTotal * rInternal1;
      vTerminal1 = vb1 - vDropInternal1;
      iBranch1 = iTotal;
      iBranch2 = iTotal;
      iBranch3 = iTotal;
    } else if (networkType === 'parallel') {
      const gEq = 1 / r1 + 1 / r2 + 1 / r3;
      rEquivalent = 1 / gEq;
      iTotal = vb1 / (rEquivalent + rInternal1);
      vDropInternal1 = iTotal * rInternal1;
      vTerminal1 = vb1 - vDropInternal1;
      iBranch1 = vTerminal1 / r1;
      iBranch2 = vTerminal1 / r2;
      iBranch3 = vTerminal1 / r3;
    } else {
      // Wheatstone Bridge: R1, R2, R3, R4 and bridge RBridge
      // Ratio: R1 / R2 == R3 / R4
      const ratio1 = r1 / r2;
      const ratio2 = r3 / r4;
      isBridgeBalanced = Math.abs(ratio1 - ratio2) < 0.001;

      if (isBridgeBalanced) {
        // Bridge null: RBridge eliminated!
        const rBranchTop = r1 + r3;
        const rBranchBottom = r2 + r4;
        rEquivalent = (rBranchTop * rBranchBottom) / (rBranchTop + rBranchBottom);
        iTotal = vb1 / (rEquivalent + rInternal1);
        vDropInternal1 = iTotal * rInternal1;
        vTerminal1 = vb1 - vDropInternal1;
        iBranch1 = vTerminal1 / rBranchTop;
        iBranch2 = vTerminal1 / rBranchBottom;
        iBranch3 = 0; // Bridge current is strictly zero!
      } else {
        // Delta-Wye exact bridge equivalent resistance with central bridge rBridge:
        // Delta formed by R1, R2, rBridge converted to Wye (star):
        const deltaDenominator = r1 + r2 + rBridge;
        const ra = (r1 * r2) / deltaDenominator;
        const rb = (r1 * rBridge) / deltaDenominator;
        const rc = (r2 * rBridge) / deltaDenominator;
        const rParallel = ((rb + r3) * (rc + r4)) / ((rb + r3) + (rc + r4));
        rEquivalent = ra + rParallel;
        iTotal = vb1 / (rEquivalent + rInternal1);
        vDropInternal1 = iTotal * rInternal1;
        vTerminal1 = vb1 - vDropInternal1;
        const vNodeStar = vTerminal1 - iTotal * ra;
        iBranch1 = vNodeStar / (rb + r3);
        iBranch2 = vNodeStar / (rc + r4);
        iBranch3 = Math.abs(iBranch1 - iBranch2);
      }
    }
    pTotal = vb1 * iTotal;
    pLoad = Math.pow(iTotal, 2) * rEquivalent;
    pInternalLoss = Math.pow(iTotal, 2) * rInternal1;
    efficiencyPercent = pTotal > 0 ? (pLoad / pTotal) * 100 : 0;
    battery1StateEn = 'Discharging';
    battery1StateAr = 'في حالة تفريغ';
  } else if (module === 'kirchhoff') {
    // 2-Loop Active Network Solver with batteries in branches 1 & 2
    // Loop 1: VB1 = I1(R1 + r1) + I3 * R3
    // Loop 2: VB2 = I2(R2 + r2) + I3 * R3
    // Node: I3 = I1 + I2
    const effVb2 = battery2Polarity === 'opposing' ? -vb2 : vb2;
    const rL1 = r1 + rInternal1;
    const rL2 = r2 + rInternal2;

    // Matrix equation:
    // (rL1 + r3) I1 + r3 I2 = VB1
    // r3 I1 + (rL2 + r3) I2 = effVb2
    const a11 = rL1 + r3;
    const a12 = r3;
    const a21 = r3;
    const a22 = rL2 + r3;
    const det = a11 * a22 - a12 * a21;

    if (Math.abs(det) > 0.0001) {
      iBranch1 = (vb1 * a22 - effVb2 * a12) / det;
      iBranch2 = (a11 * effVb2 - a21 * vb1) / det;
      iBranch3 = iBranch1 + iBranch2;
    } else {
      iBranch1 = 0;
      iBranch2 = 0;
      iBranch3 = 0;
    }

    iTotal = Math.abs(iBranch1) + Math.abs(iBranch2);

    // Battery 1 Status
    if (iBranch1 >= 0) {
      battery1StateEn = 'Discharging';
      battery1StateAr = 'في حالة تفريغ';
      vDropInternal1 = iBranch1 * rInternal1;
      vTerminal1 = vb1 - vDropInternal1;
    } else {
      battery1StateEn = 'Charging';
      battery1StateAr = 'في حالة شحن';
      vDropInternal1 = Math.abs(iBranch1) * rInternal1;
      vTerminal1 = vb1 + vDropInternal1;
    }

    // Battery 2 Status
    if (effVb2 >= 0) {
      if (iBranch2 >= 0) {
        battery2StateEn = 'Discharging';
        battery2StateAr = 'في حالة تفريغ';
        vDropInternal2 = iBranch2 * rInternal2;
        vTerminal2 = vb2 - vDropInternal2;
      } else {
        battery2StateEn = 'Charging';
        battery2StateAr = 'في حالة شحن';
        vDropInternal2 = Math.abs(iBranch2) * rInternal2;
        vTerminal2 = vb2 + vDropInternal2;
      }
    } else {
      // Opposing configuration
      if (iBranch2 <= 0) {
        battery2StateEn = 'Charging';
        battery2StateAr = 'في حالة شحن';
        vDropInternal2 = Math.abs(iBranch2) * rInternal2;
        vTerminal2 = vb2 + vDropInternal2; // Charging voltage is HIGHER than EMF!
      } else {
        battery2StateEn = 'Discharging';
        battery2StateAr = 'في حالة تفريغ';
        vDropInternal2 = iBranch2 * rInternal2;
        vTerminal2 = vb2 - vDropInternal2;
      }
    }

    pLoad = Math.pow(iBranch3, 2) * r3 + Math.pow(iBranch1, 2) * r1 + Math.pow(iBranch2, 2) * r2;
    pInternalLoss = Math.pow(iBranch1, 2) * rInternal1 + Math.pow(iBranch2, 2) * rInternal2;
    pTotal = pLoad + pInternalLoss;
    rEquivalent = iTotal > 0 ? (vTerminal1 + vTerminal2) / iTotal : 0;
    efficiencyPercent = pTotal > 0 ? (pLoad / pTotal) * 100 : 0;
  } else {
    // Electric Power & Energy Dissipation (e.g. household lamps)
    rEquivalent = (r1 * r2) / (r1 + r2);
    iTotal = vb1 / (rEquivalent + rInternal1);
    vDropInternal1 = iTotal * rInternal1;
    vTerminal1 = vb1 - vDropInternal1;
    iBranch1 = vTerminal1 / r1;
    iBranch2 = vTerminal1 / r2;
    iBranch3 = 0;
    pLoad = Math.pow(vTerminal1, 2) / r1 + Math.pow(vTerminal1, 2) / r2;
    pInternalLoss = Math.pow(iTotal, 2) * rInternal1;
    pTotal = pLoad + pInternalLoss;
    efficiencyPercent = pTotal > 0 ? (pLoad / pTotal) * 100 : 0;
    battery1StateEn = 'Discharging';
    battery1StateAr = 'في حالة تفريغ';
  }

  return {
    iTotal: parseFloat(iTotal.toFixed(3)),
    iBranch1: parseFloat(iBranch1.toFixed(3)),
    iBranch2: parseFloat(iBranch2.toFixed(3)),
    iBranch3: parseFloat(iBranch3.toFixed(3)),
    vTerminal1: parseFloat(vTerminal1.toFixed(2)),
    vTerminal2: parseFloat(vTerminal2.toFixed(2)),
    vDropInternal1: parseFloat(vDropInternal1.toFixed(2)),
    vDropInternal2: parseFloat(vDropInternal2.toFixed(2)),
    rEquivalent: parseFloat(rEquivalent.toFixed(2)),
    pTotal: parseFloat(pTotal.toFixed(2)),
    pLoad: parseFloat(pLoad.toFixed(2)),
    pInternalLoss: parseFloat(pInternalLoss.toFixed(2)),
    battery1StateEn,
    battery1StateAr,
    battery2StateEn,
    battery2StateAr,
    efficiencyPercent: parseFloat(efficiencyPercent.toFixed(1)),
    isBridgeBalanced,
  };
}

export const CIRCUITS_LAB_DEF: LabDefinition<CircuitsParams, CircuitsSimState> = {
  id: 'physics_dc_circuits',
  subject: 'physics',
  chapterRef: 'Chapter 1',
  titleEn: "DC Circuits, Ohm's Law & Kirchhoff's Multi-Loop Networks Lab",
  titleAr: 'مختبر الدوائر الكهربية وقانون أوم للدائرة المغلقة وقوانين كيرشوف',
  subtitleEn:
    "Egyptian Secondary Physics Chapter 1: Closed Circuit Ohm's Law (V = VB - Ir), Internal Resistance, Series/Parallel Resistors, Balanced Wheatstone, and 2-Loop Kirchhoff Solver",
  subtitleAr:
    'فيزياء الثانوية العامة - الفصل الأول: التيار الكهربي، قانون أوم للدائرة المغلقة، المقاومة الداخلية، توصيل المقاومات، قنطرة وتستون، وحل شبكات كيرشوف',
  objectives: [
    {
      id: 'obj_closed_ohm',
      textEn: "Analyze the inverse linear relationship between terminal voltage and current in closed circuits: V = VB - Ir.",
      textAr: "تحليل العلاقة التناقصية الخطية بين فرق الجهد بين قطبي العمود وشدة التيار في الدائرة المغلقة: V = VB - Ir.",
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_resistor_networks',
      textEn: 'Evaluate equivalent resistance and branch division in series, parallel, and balanced Wheatstone bridge circuits.',
      textAr: 'حساب وتعيين المقاومة المكافئة وتجزئة التيار في توصيلات التوالي والتوازي وقنطرة وتستون المتزنة.',
      bloomLevel: 'apply',
    },
    {
      id: 'obj_kirchhoff_laws',
      textEn: "Synthesize Kirchhoff's First (KCL) and Second (KVL) laws to solve multi-loop active networks and diagnose battery charging states.",
      textAr: 'تطبيق قانوني كيرشوف (حفظ الشحنة وحفظ الطاقة) لحل الدوائر المعقدة والتمييز بين البطارية في حالة شحن وتفريغ.',
      bloomLevel: 'evaluate',
    },
  ],
  keyFormulas: [
    {
      id: 'eq-closed-ohm',
      labelEn: "Ohm's Law for Closed Circuit",
      labelAr: 'قانون أوم للدائرة المغلقة',
      tex: 'V = V_B - I r \\iff I = \\frac{V_B}{R_{\\text{eq}} + r}',
      descriptionEn: 'Terminal voltage equals EMF minus internal resistance potential drop Ir.',
      descriptionAr: 'فرق الجهد بين طرفي البطارية يساوي القوة الدافعة مطروحاً منها الهبوط في الجهد عبر المقاومة الداخلية.',
    },
    {
      id: 'eq-kcl-first',
      labelEn: "Kirchhoff's Current Law (Charge Conservation)",
      labelAr: 'قانون كيرشوف الأول (حفظ الشحنة الكهربية)',
      tex: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\implies I_1 + I_2 = I_3',
      descriptionEn: 'The algebraic sum of currents meeting at any circuit node is zero.',
      descriptionAr: 'المجموع الجبري للتيارات الكهربية الداخلة عند نقطة تفرع يساوي مجموع التيارات الخارجة منها.',
    },
    {
      id: 'eq-kvl-second',
      labelEn: "Kirchhoff's Voltage Law (Energy Conservation)",
      labelAr: 'قانون كيرشوف الثاني (حفظ الطاقة)',
      tex: '\\sum V_B = \\sum I R \\quad \\text{around any closed mesh loop}',
      descriptionEn: 'The algebraic sum of EMFs around any closed mesh loop equals the sum of IR drops.',
      descriptionAr: 'المجموع الجبري للقوى الدافعة الكهربية في أي مسار مغلق يساوي المجموع الجبري لفروق الجهد IR.',
    },
    {
      id: 'eq-charging-battery',
      labelEn: 'Terminal Voltage of Charging Battery',
      labelAr: 'فرق الجهد بين قطبي عمود في حالة شحن',
      tex: 'V_{\\text{charging}} = V_B + I r > V_B',
      descriptionEn: 'When current is forced into the positive terminal of a battery, terminal voltage exceeds its EMF.',
      descriptionAr: 'عندما يدخل التيار إلى القطب الموجب للبطارية الأصغر فإنها تكون في حالة شحن ويكون فرق جهدها أكبر من قوتها الدافعة.',
    },
  ],
  defaultParams: INITIAL_CIRCUITS_PARAMS,
  paramSchema: CIRCUITS_PARAM_SCHEMA,
  presets: CIRCUITS_PRESETS,
  poePrompts: CIRCUITS_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Current I (A) / Resistance',
    xLabelAr: 'شدة التيار I (أمبير) / المقاومة',
    xUnit: 'A',
    yLabelEn: 'Terminal Voltage V (V)',
    yLabelAr: 'فرق الجهد V (فولت)',
    yUnit: 'V',
  },
};

export const CircuitsLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const lab = useVirtualLab<CircuitsParams, CircuitsSimState>({
    definition: CIRCUITS_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const simState = useMemo<CircuitsSimState>(() => {
    return computeCircuitsSimState(params);
  }, [params]);

  // Telemetry Metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(
    () => [
      {
        id: 'total_current',
        labelEn: 'Total Current (I)',
        labelAr: 'شدة التيار الكلي (I)',
        value: simState.iTotal,
        unit: ' A',
        precision: 3,
        status: simState.iTotal > 0 ? 'optimal' : 'warning',
      },
      {
        id: 'terminal_v1',
        labelEn: 'Battery 1 Voltage (V1)',
        labelAr: 'فرق جهد المصدر ١ (V1)',
        value: simState.vTerminal1,
        unit: ' V',
        precision: 2,
        status: 'optimal',
      },
      {
        id: 'internal_drop',
        labelEn: 'Internal Loss (I·r1)',
        labelAr: 'الهبوط الداخلي (I·r1)',
        value: simState.vDropInternal1,
        unit: ' V',
        precision: 2,
        status: simState.vDropInternal1 > 3.0 ? 'warning' : 'normal',
      },
      {
        id: 'req',
        labelEn: 'Equivalent Resistance',
        labelAr: 'المقاومة المكافئة (R_eq)',
        value: simState.rEquivalent,
        unit: ' Ω',
        precision: 2,
        status: 'normal',
      },
      {
        id: 'power_load',
        labelEn: 'Load Power Dissipated',
        labelAr: 'القدرة المستهلكة بالدائرة',
        value: simState.pLoad,
        unit: ' W',
        precision: 2,
        status: 'optimal',
      },
      {
        id: 'efficiency',
        labelEn: 'Circuit Efficiency',
        labelAr: 'كفاءة نقل القدرة',
        value: simState.efficiencyPercent,
        unit: ' %',
        precision: 1,
        status: simState.efficiencyPercent > 75 ? 'optimal' : 'warning',
      },
    ],
    [simState]
  );

  // Digital Multimeter (DMM) Readings
  const multimeterReading: DMMReading = useMemo(
    () => ({
      mode: 'DCV',
      value: simState.vTerminal1,
      displayString: `${simState.vTerminal1.toFixed(2)} V`,
      secondaryString: `I: ${simState.iTotal.toFixed(3)} A | Req: ${simState.rEquivalent.toFixed(2)} Ω | P: ${simState.pLoad.toFixed(1)} W`,
      unit: 'V',
      voltageDC: simState.vTerminal1,
      voltageAC: simState.vTerminal2,
      currentDC: simState.iTotal,
      resistance: simState.rEquivalent,
      continuityBeep: params.isSwitchClosed && simState.iTotal > 0,
      isOverload: simState.iTotal > 10.0,
    }),
    [params.isSwitchClosed, simState]
  );

  // Oscilloscope Signals: Channel 1 = Load-line V vs I, Channel 2 = Power curve
  const oscilloscopeCh1: WaveformSignal = useMemo(
    () => ({
      id: 'trace_load_line',
      label: isArabic ? 'خط الحمل V = VB - Ir (قناة أ)' : 'CH 1: V-I Load Line',
      color: '#38bdf8',
      amplitude: Math.min(10, (simState.vTerminal1 / params.vb1) * 8),
      frequency: 1.0,
      phase: 0,
      phaseDeg: 0,
      type: 'sine',
    }),
    [params.vb1, simState.vTerminal1, isArabic]
  );

  const oscilloscopeCh2: WaveformSignal = useMemo(
    () => ({
      id: 'trace_power',
      label: isArabic ? 'منحنى القدرة الكهربية (قناة ب)' : 'CH 2: Power Dissipation',
      color: '#f59e0b',
      amplitude: Math.min(10, (simState.pLoad / Math.max(1, simState.pTotal)) * 8),
      frequency: 1.0,
      phase: 0,
      phaseDeg: 45,
      type: 'sine',
    }),
    [simState.pLoad, simState.pTotal, isArabic]
  );

  // Canvas Drawing Routine with Continuous 60 FPS Animation & Photorealistic Apparatus
  const handleRenderCanvas = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number = 1,
      time: number = 0,
      _frame: number = 0
    ) => {
      const t = (time ? time : performance.now()) * 0.001;

      ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#070b14';
      ctx.fillRect(0, 0, width, height);

      const mod = params.module;
      const centerX = width / 2;
      const centerY = height / 2;

      // Module Title
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.font = 'bold 15px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';

      let moduleHeader = '';
      if (mod === 'closed_ohm') {
        moduleHeader = isArabic
          ? 'قانون أوم للدائرة المغلقة V = VB - Ir والهبوط في الجهد الداخلي'
          : "Ohm's Law for Closed Circuits (V = VB - Ir) & Internal Drop";
      } else if (mod === 'resistor_networks') {
        moduleHeader = isArabic
          ? `توصيل المقاومات (${params.networkType === 'series' ? 'توالي' : params.networkType === 'parallel' ? 'توازي' : 'قنطرة وتستون'})`
          : `Resistor Network Analysis (${params.networkType.toUpperCase()})`;
      } else if (mod === 'kirchhoff') {
        moduleHeader = isArabic
          ? 'شبكة كيرشوف ذات الحلقتين: قانونا كيرشوف (KCL & KVL)'
          : "Kirchhoff's Two-Loop Mesh Solver (KCL & KVL Active Network)";
      } else {
        moduleHeader = isArabic
          ? 'القدرة الكهربية وإضاءة المصابيح (P = V²/R = I²R)'
          : 'Electric Power Dissipation & Lamp Brightness (P = V²/R = I²R)';
      }
      ctx.fillText(moduleHeader, centerX, 24);

      // --- 1. Sizing Layout: Big Drawings, High Visibility ---
      const vmRadius = 46;
      const ammeterRadius = 52;
      const leftMargin = 148; // 148px gives ample clearance for voltmeter without touching battery
      const rightMargin = 70;
      const boxW = Math.min(width - leftMargin - rightMargin, 740);
      const boxH = Math.min(height - 120, 360);
      const startX = centerX - boxW / 2 + (leftMargin - rightMargin) / 2;
      const startY = centerY - boxH / 2 - 4;

      const leftX = startX;
      const rightX = startX + boxW;
      const topY = startY;
      const botY = startY + boxH;

      const isEnergized = params.isSwitchClosed && simState.iTotal > 0;

      // Left Battery Position
      const batX = leftX;
      const batY = centerY;
      const batW = 70;
      const batH = 126;
      const batTopPostY = batY - batH / 2 - 4;
      const batBotPostY = batY + batH / 2 + 4;

      // Voltmeter Position (Tapped across Battery 1 with clean air clearance)
      const vmX = leftX - 90;
      const vmY = centerY;

      // Ammeter Position (Bottom Return Rail)
      const botCenterX = centerX;

      // Switch Position (Right Rail)
      const switchX = rightX;
      const switchY = centerY;
      const switchW = 56;
      const switchH = 92;
      const switchTopY = switchY - 26;
      const switchBotY = switchY + 26;

      // =========================================================
      // MODULE SPECIFIC DRAWING LOGIC
      // =========================================================

      if (mod === 'closed_ohm') {
        // --- A. CLOSED CIRCUIT OHM'S LAW ---
        const rheoW = Math.min(boxW - 140, 380);
        const rheoY = topY;
        const rheoLeft = centerX - rheoW / 2;

        // Wires
        // Positive Red Cable: Battery (+) -> Top Rail Corner -> Rheostat Left Pillar
        drawInsulatedCablePolyline(
          ctx,
          [
            { x: batX, y: batTopPostY },
            { x: leftX, y: topY },
            { x: rheoLeft + 8, y: topY },
          ],
          '#dc2626',
          isEnergized
        );

        // Variable Wiper Contact X
        const clampedRFrac = Math.max(0, Math.min(1, params.rheostatR / 50));
        const wiperContactX = rheoLeft + 24 + clampedRFrac * (rheoW - 48);

        // Red Cable: Rheostat Wiper -> Top Right Corner -> Switch Top Jaw
        drawInsulatedCablePolyline(
          ctx,
          [
            { x: wiperContactX, y: topY - 10 },
            { x: wiperContactX, y: topY - 24 },
            { x: rightX, y: topY - 24 },
            { x: rightX, y: switchTopY },
          ],
          '#dc2626',
          isEnergized
        );

        // Blue Return Cable: Switch Bottom Pivot -> Bottom Right Corner -> Ammeter Right Stud
        drawInsulatedCablePolyline(
          ctx,
          [
            { x: rightX, y: switchBotY },
            { x: rightX, y: botY },
            { x: botCenterX + ammeterRadius + 8, y: botY },
          ],
          '#2563eb',
          isEnergized
        );

        // Blue Return Cable: Ammeter Left Stud -> Bottom Left Corner -> Battery (-) Post
        drawInsulatedCablePolyline(
          ctx,
          [
            { x: botCenterX - ammeterRadius - 8, y: botY },
            { x: leftX, y: botY },
            { x: batX, y: batBotPostY },
          ],
          '#2563eb',
          isEnergized
        );

        // Flexible Voltmeter Probes across Battery Terminals
        drawHeavyInsulatedCable(ctx, batX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
        drawHeavyInsulatedCable(ctx, batX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);

        // Apparatus
        drawHeavyLabBattery(ctx, batX, batY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, isEnergized, isArabic);
        drawWireWoundSliderRheostat(ctx, centerX, rheoY, rheoW, 34, params.rheostatR, 50, isArabic ? 'روستات Rv' : 'Rheostat Rv');
        drawIndustrialKnifeSwitch(ctx, switchX, switchY, switchW, switchH, params.isSwitchClosed, isArabic);
        drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');
        drawAnalogMeterGauge(ctx, botCenterX, botY, ammeterRadius, simState.iTotal, 0, Math.max(3, Math.ceil(simState.iTotal * 1.5)), isArabic ? 'أميتر كلي I_tot' : 'AMMETER I_tot', 'A');

        // Central Telemetry Glass Card
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 150, centerY - 46, 300, 92, [12]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'قياسات الدائرة المغلقة (V = VB - Ir):' : "Closed Circuit Telemetry (V = VB - Ir):", centerX, centerY - 26);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 13px ui-monospace, monospace';
        ctx.fillText(
          isArabic
            ? `الهبوط الداخلي: Ir = ${simState.vDropInternal1.toFixed(2)} V`
            : `Internal Loss: Ir = ${simState.vDropInternal1.toFixed(2)} V`,
          centerX,
          centerY - 5
        );

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 13px ui-monospace, monospace';
        ctx.fillText(
          isArabic
            ? `مقاومة الروستات: Rv = ${simState.rEquivalent.toFixed(1)} Ω`
            : `Rheostat Load: Rv = ${simState.rEquivalent.toFixed(1)} Ω`,
          centerX,
          centerY + 16
        );

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 12px ui-monospace, monospace';
        ctx.fillText(
          isArabic
            ? `كفاءة البطارية: ${simState.efficiencyPercent}%`
            : `Battery Efficiency: ${simState.efficiencyPercent}%`,
          centerX,
          centerY + 35
        );
      } else if (mod === 'resistor_networks') {
        // --- B. RESISTOR NETWORKS (SERIES / PARALLEL / WHEATSTONE) ---
        if (params.networkType === 'series') {
          const r1X = centerX - 160;
          const r2X = centerX;
          const r3X = centerX + 160;

          // Wires
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: batX, y: batTopPostY },
              { x: leftX, y: topY },
              { x: r1X - 44, y: topY },
            ],
            '#dc2626',
            isEnergized
          );

          drawHeavyInsulatedCable(ctx, r1X + 44, topY, r2X - 44, topY, '#dc2626', isEnergized);
          drawHeavyInsulatedCable(ctx, r2X + 44, topY, r3X - 44, topY, '#dc2626', isEnergized);

          drawInsulatedCablePolyline(
            ctx,
            [
              { x: r3X + 44, y: topY },
              { x: rightX, y: topY },
              { x: rightX, y: switchTopY },
            ],
            '#dc2626',
            isEnergized
          );

          drawInsulatedCablePolyline(
            ctx,
            [
              { x: rightX, y: switchBotY },
              { x: rightX, y: botY },
              { x: botCenterX + ammeterRadius + 8, y: botY },
            ],
            '#2563eb',
            isEnergized
          );

          drawInsulatedCablePolyline(
            ctx,
            [
              { x: botCenterX - ammeterRadius - 8, y: botY },
              { x: leftX, y: botY },
              { x: batX, y: batBotPostY },
            ],
            '#2563eb',
            isEnergized
          );

          // Voltmeter test leads
          drawHeavyInsulatedCable(ctx, batX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
          drawHeavyInsulatedCable(ctx, batX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);

          // Resistors
          drawAxialCeramicResistor(ctx, r1X, topY, 74, 22, params.r1, 'R1', simState.iTotal * params.r1, isLight);
          drawAxialCeramicResistor(ctx, r2X, topY, 74, 22, params.r2, 'R2', simState.iTotal * params.r2, isLight);
          drawAxialCeramicResistor(ctx, r3X, topY, 74, 22, params.r3, 'R3', simState.iTotal * params.r3, isLight);

          // Apparatus
          drawHeavyLabBattery(ctx, batX, batY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, isEnergized, isArabic);
          drawIndustrialKnifeSwitch(ctx, switchX, switchY, switchW, switchH, params.isSwitchClosed, isArabic);
          drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');
          drawAnalogMeterGauge(ctx, botCenterX, botY, ammeterRadius, simState.iTotal, 0, Math.max(3, Math.ceil(simState.iTotal * 1.5)), isArabic ? 'أميتر كلي I_tot' : 'AMMETER I_tot', 'A');

          // Series Rule HUD
          ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.9)';
          ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(centerX - 160, centerY - 45, 320, 90, [12]);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'خواص التوصيل على التوالي:' : 'Series Connection Characteristics:', centerX, centerY - 25);

          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 12px ui-monospace, monospace';
          ctx.fillText(
            isArabic
              ? `ثبات شدة التيار: I = ${simState.iTotal.toFixed(2)} A في جميع المقاومات`
              : `Constant Current: I = ${simState.iTotal.toFixed(2)} A through all resistors`,
            centerX,
            centerY - 5
          );

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 12px ui-monospace, monospace';
          ctx.fillText(
            isArabic
              ? `المقاومة المكافئة: Req = R1 + R2 + R3 = ${simState.rEquivalent.toFixed(1)} Ω`
              : `Req = R1 + R2 + R3 = ${simState.rEquivalent.toFixed(1)} Ω`,
            centerX,
            centerY + 15
          );

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px ui-monospace, monospace';
          ctx.fillText(
            isArabic
              ? `تجزئة فرق الجهد: V = V1 + V2 + V3 = ${simState.vTerminal1.toFixed(1)} V`
              : `Voltage Division: V = V1 + V2 + V3 = ${simState.vTerminal1.toFixed(1)} V`,
            centerX,
            centerY + 33
          );
        } else if (params.networkType === 'parallel') {
          // Parallel Busbars
          const midY = topY + 130;
          const px1 = centerX - 160;
          const px2 = centerX;
          const px3 = centerX + 160;

          // Top Positive Busbar Cable
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: batX, y: batTopPostY },
              { x: leftX, y: topY },
              { x: px3, y: topY },
            ],
            '#dc2626',
            isEnergized
          );

          // Return Negative Busbar Cable
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: px1, y: midY },
              { x: rightX, y: midY },
              { x: rightX, y: switchTopY },
            ],
            '#2563eb',
            isEnergized
          );

          // 3 Parallel Vertical Branch Rungs
          [
            { x: px1, r: params.r1, i: simState.iBranch1, label: 'R1' },
            { x: px2, r: params.r2, i: simState.iBranch2, label: 'R2' },
            { x: px3, r: params.r3, i: simState.iBranch3, label: 'R3' },
          ].forEach((br) => {
            drawHeavyInsulatedCable(ctx, br.x, topY, br.x, topY + 40, '#dc2626', isEnergized);
            drawHeavyInsulatedCable(ctx, br.x, topY + 90, br.x, midY, '#2563eb', isEnergized);
            drawAxialCeramicResistor(ctx, br.x, topY + 65, 36, 16, br.r, br.label, simState.vTerminal1, isLight, 'vertical');

            // Branch Current Arrow Tag
            ctx.fillStyle = isLight ? '#047857' : '#10b981';
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`I = ${br.i.toFixed(2)}A ↓`, br.x, midY + 16);
          });

          // Rest of loop: Switch to Ammeter to Battery (-)
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: rightX, y: switchBotY },
              { x: rightX, y: botY },
              { x: botCenterX + ammeterRadius + 8, y: botY },
            ],
            '#2563eb',
            isEnergized
          );

          drawInsulatedCablePolyline(
            ctx,
            [
              { x: botCenterX - ammeterRadius - 8, y: botY },
              { x: leftX, y: botY },
              { x: batX, y: batBotPostY },
            ],
            '#2563eb',
            isEnergized
          );

          // Voltmeter
          drawHeavyInsulatedCable(ctx, batX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
          drawHeavyInsulatedCable(ctx, batX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);

          drawHeavyLabBattery(ctx, batX, batY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, isEnergized, isArabic);
          drawIndustrialKnifeSwitch(ctx, switchX, switchY, switchW, switchH, params.isSwitchClosed, isArabic);
          drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');
          drawAnalogMeterGauge(ctx, botCenterX, botY, ammeterRadius, simState.iTotal, 0, Math.max(3, Math.ceil(simState.iTotal * 1.5)), isArabic ? 'أميتر كلي I_tot' : 'AMMETER I_tot', 'A');

          // Parallel Rule HUD
          ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.9)';
          ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(centerX - 160, centerY + 30, 320, 80, [12]);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(isArabic ? 'توصيل التوازي: ثبات فرق الجهد وتجزئة التيار' : 'Parallel: Constant Voltage & Current Division', centerX, centerY + 50);

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 12px ui-monospace, monospace';
          ctx.fillText(
            isArabic
              ? `المقاومة المكافئة: Req = ${simState.rEquivalent.toFixed(2)} Ω (أصغر من أصغر مقاومة)`
              : `Req = ${simState.rEquivalent.toFixed(2)} Ω (Smaller than smallest)`,
            centerX,
            centerY + 70
          );

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px ui-monospace, monospace';
          ctx.fillText(
            isArabic
              ? `التيار الكلي: Itot = I1 + I2 + I3 = ${simState.iTotal.toFixed(2)} A`
              : `Total Current Itot = I1 + I2 + I3 = ${simState.iTotal.toFixed(2)} A`,
            centerX,
            centerY + 90
          );
        } else {
          // --- WHEATSTONE BRIDGE ---
          const nodeA = { x: centerX - 160, y: centerY - 15 };
          const nodeB = { x: centerX + 160, y: centerY - 15 };
          const nodeC = { x: centerX, y: topY + 5 };
          const nodeD = { x: centerX, y: centerY + 65 };

          // Supply to Node A
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: batX, y: batTopPostY },
              { x: leftX, y: topY },
              { x: nodeA.x, y: topY },
              { x: nodeA.x, y: nodeA.y },
            ],
            '#dc2626',
            isEnergized
          );

          // Output from Node B to Switch
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: nodeB.x, y: nodeB.y },
              { x: nodeB.x, y: topY },
              { x: rightX, y: topY },
              { x: rightX, y: switchTopY },
            ],
            '#dc2626',
            isEnergized
          );

          // Bridge Diamond Diagonal Arms
          drawHeavyInsulatedCable(ctx, nodeA.x, nodeA.y, nodeC.x, nodeC.y, '#dc2626', isEnergized);
          drawHeavyInsulatedCable(ctx, nodeC.x, nodeC.y, nodeB.x, nodeB.y, '#2563eb', isEnergized);
          drawHeavyInsulatedCable(ctx, nodeA.x, nodeA.y, nodeD.x, nodeD.y, '#dc2626', isEnergized);
          drawHeavyInsulatedCable(ctx, nodeD.x, nodeD.y, nodeB.x, nodeB.y, '#2563eb', isEnergized);

          // Central Galvanometer Vertical Branch C-D
          drawHeavyInsulatedCable(ctx, nodeC.x, nodeC.y, nodeC.x, (nodeC.y + nodeD.y) / 2 - 38, '#ca8a04', isEnergized);
          drawHeavyInsulatedCable(ctx, nodeD.x, (nodeC.y + nodeD.y) / 2 + 38, nodeD.x, nodeD.y, '#ca8a04', isEnergized);

          // Diagonal Arm Resistors
          drawAxialCeramicResistor(ctx, (nodeA.x + nodeC.x) / 2, (nodeA.y + nodeC.y) / 2, 60, 18, params.r1, 'R1', undefined, isLight);
          drawAxialCeramicResistor(ctx, (nodeC.x + nodeB.x) / 2, (nodeC.y + nodeB.y) / 2, 60, 18, params.r2, 'R2', undefined, isLight);
          drawAxialCeramicResistor(ctx, (nodeA.x + nodeD.x) / 2, (nodeA.y + nodeD.y) / 2, 60, 18, params.r3, 'R3', undefined, isLight);
          drawAxialCeramicResistor(ctx, (nodeD.x + nodeB.x) / 2, (nodeD.y + nodeB.y) / 2, 60, 18, params.r4, 'R4', undefined, isLight);

          // Central Galvanometer
          drawCenterZeroGalvanometer(ctx, centerX, (nodeC.y + nodeD.y) / 2, 42, simState.iBranch3, simState.isBridgeBalanced);

          // Return from Switch through Ammeter
          drawInsulatedCablePolyline(
            ctx,
            [
              { x: rightX, y: switchBotY },
              { x: rightX, y: botY },
              { x: botCenterX + ammeterRadius + 8, y: botY },
            ],
            '#2563eb',
            isEnergized
          );

          drawInsulatedCablePolyline(
            ctx,
            [
              { x: botCenterX - ammeterRadius - 8, y: botY },
              { x: leftX, y: botY },
              { x: batX, y: batBotPostY },
            ],
            '#2563eb',
            isEnergized
          );

          // Voltmeter
          drawHeavyInsulatedCable(ctx, batX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
          drawHeavyInsulatedCable(ctx, batX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);

          drawHeavyLabBattery(ctx, batX, batY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, isEnergized, isArabic);
          drawIndustrialKnifeSwitch(ctx, switchX, switchY, switchW, switchH, params.isSwitchClosed, isArabic);
          drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');
          drawAnalogMeterGauge(ctx, botCenterX, botY, ammeterRadius, simState.iTotal, 0, Math.max(3, Math.ceil(simState.iTotal * 1.5)), isArabic ? 'أميتر كلي I_tot' : 'AMMETER I_tot', 'A');

          // Bridge HUD Banner
          ctx.fillStyle = simState.isBridgeBalanced ? 'rgba(6, 78, 59, 0.95)' : 'rgba(30, 41, 59, 0.95)';
          ctx.strokeStyle = simState.isBridgeBalanced ? '#10b981' : '#f59e0b';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(centerX - 180, centerY + 85, 360, 48, [10]);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px system-ui, sans-serif';
          ctx.textAlign = 'center';
          const bridgeRatioText = `R1/R2 = ${(params.r1 / params.r2).toFixed(2)} | R3/R4 = ${(params.r3 / params.r4).toFixed(2)}`;
          ctx.fillText(bridgeRatioText, centerX, centerY + 102);

          ctx.fillStyle = simState.isBridgeBalanced ? '#34d399' : '#38bdf8';
          ctx.font = '900 11px system-ui, sans-serif';
          const bridgeStatusText = simState.isBridgeBalanced
            ? isArabic ? '✓ القنطرة متزنة: IG = 0 وتحذف المقاومة المركزية' : '✓ Bridge Balanced: IG = 0 (Null Condition)'
            : isArabic ? 'القنطرة غير متزنة: يمر تيار في الجلفانومتر' : 'Bridge Unbalanced: Current Flows Through Center';
          ctx.fillText(bridgeStatusText, centerX, centerY + 122);
        }
      } else if (mod === 'kirchhoff') {
        // --- C. KIRCHHOFF'S TWO-LOOP MESH SOLVER ---
        // Left Loop 1: Battery 1 & Resistor R1
        // Right Loop 2: Battery 2 & Resistor R2
        // Center Shared Branch: Resistor R3
        const r1CenterX = (leftX + centerX) / 2;
        const r2CenterX = (centerX + rightX) / 2;

        // Top Horizontal Rails
        drawHeavyInsulatedCable(ctx, leftX, topY, r1CenterX - 42, topY, '#dc2626', isEnergized);
        drawHeavyInsulatedCable(ctx, r1CenterX + 42, topY, centerX, topY, '#dc2626', isEnergized);
        drawHeavyInsulatedCable(ctx, centerX, topY, r2CenterX - 42, topY, '#2563eb', isEnergized);
        drawHeavyInsulatedCable(ctx, r2CenterX + 42, topY, rightX, topY, '#2563eb', isEnergized);

        // Center Vertical Branch with Resistor R3 (Drawn vertically connecting into branch terminals)
        drawHeavyInsulatedCable(ctx, centerX, topY, centerX, centerY - 42, '#10b981', isEnergized);
        drawHeavyInsulatedCable(ctx, centerX, centerY + 42, centerX, botY, '#10b981', isEnergized);
        drawAxialCeramicResistor(ctx, centerX, centerY, 56, 20, params.r3, 'R3', Math.abs(simState.iBranch3 * params.r3), isLight, 'vertical');

        // Bottom Horizontal Rails
        drawHeavyInsulatedCable(ctx, leftX, botY, centerX, botY, '#dc2626', isEnergized);
        drawHeavyInsulatedCable(ctx, centerX, botY, rightX, botY, '#2563eb', isEnergized);

        // Left Vertical Branch (Battery 1)
        drawHeavyInsulatedCable(ctx, leftX, topY, leftX, batTopPostY, '#dc2626', isEnergized);
        drawHeavyInsulatedCable(ctx, leftX, botY, leftX, batBotPostY, '#dc2626', isEnergized);

        // Right Vertical Branch (Battery 2)
        const bat2TopPostY = centerY - batH / 2 - 4;
        const bat2BotPostY = centerY + batH / 2 + 4;
        drawHeavyInsulatedCable(ctx, rightX, topY, rightX, bat2TopPostY, '#2563eb', isEnergized);
        drawHeavyInsulatedCable(ctx, rightX, botY, rightX, bat2BotPostY, '#2563eb', isEnergized);

        // Top Resistors R1 & R2
        drawAxialCeramicResistor(ctx, r1CenterX, topY, 74, 20, params.r1, 'R1', Math.abs(simState.iBranch1 * params.r1), isLight);
        drawAxialCeramicResistor(ctx, r2CenterX, topY, 74, 20, params.r2, 'R2', Math.abs(simState.iBranch2 * params.r2), isLight);

        // Both Batteries
        drawHeavyLabBattery(ctx, leftX, centerY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, simState.battery1StateEn === 'Discharging', isArabic);
        drawHeavyLabBattery(ctx, rightX, centerY, batW, batH, params.vb2, params.rInternal2, simState.battery2StateEn, simState.battery2StateAr, simState.battery2StateEn === 'Discharging', isArabic);

        // Junction Nodes
        drawBrassTerminalStud(ctx, centerX, topY);
        drawBrassTerminalStud(ctx, centerX, botY);

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = '900 11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'نقطة تفرع (Node A)' : 'Node A (Branch)', centerX, topY - 12);
        ctx.fillText(isArabic ? 'نقطة تجمع (Node B)' : 'Node B (Junction)', centerX, botY + 18);

        // Left Voltmeter (Clean probes avoiding battery body overlap)
        drawHeavyInsulatedCable(ctx, leftX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
        drawHeavyInsulatedCable(ctx, leftX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);
        drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');

        // Loop 1 & Loop 2 KVL Traversal Rings
        const loop1Color = isLight ? '#0284c7' : '#38bdf8';
        const loop2Color = isLight ? '#d97706' : '#f59e0b';

        // Loop 1 Ring (Left)
        ctx.save();
        ctx.strokeStyle = loop1Color;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(r1CenterX, centerY, 34, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = loop1Color;
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Loop 1 (KVL)', r1CenterX, centerY - 6);
        ctx.font = 'bold 11px "SF Mono", monospace';
        ctx.fillText(`I₁ = ${simState.iBranch1.toFixed(2)}A`, r1CenterX, centerY + 10);

        // Loop 2 Ring (Right)
        ctx.save();
        ctx.strokeStyle = loop2Color;
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(r2CenterX, centerY, 34, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = loop2Color;
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Loop 2 (KVL)', r2CenterX, centerY - 6);
        ctx.font = 'bold 11px "SF Mono", monospace';
        ctx.fillText(`I₂ = ${simState.iBranch2.toFixed(2)}A`, r2CenterX, centerY + 10);

        // Center Branch Current Label with pill badge
        const i3Y = centerY + 72;
        const i3Dir = simState.iBranch3 >= 0 ? '↓' : '↑';
        const i3Text = `I₃ = I₁ + I₂ = ${simState.iBranch3.toFixed(2)}A ${i3Dir}`;

        ctx.save();
        ctx.font = '900 11px "SF Mono", monospace';
        const i3Metrics = ctx.measureText(i3Text);
        const pillW = i3Metrics.width + 16;
        const pillH = 22;
        ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.95)' : 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = isLight ? '#059669' : '#10b981';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(centerX - pillW / 2, i3Y - pillH / 2, pillW, pillH, [6]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#047857' : '#34d399';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(i3Text, centerX, i3Y);
        ctx.restore();

        // Bottom Kirchhoff Status HUD
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 170, botY + 28, 340, 52, [10]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0284c7' : '#38bdf8';
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? `المصدر ١: ${simState.battery1StateAr} (V₁ = ${simState.vTerminal1}V)`
            : `Battery 1: ${simState.battery1StateEn} (V1 = ${simState.vTerminal1}V)`,
          centerX,
          botY + 46
        );

        const bat2Color = simState.battery2StateEn === 'Charging'
          ? (isLight ? '#059669' : '#34d399')
          : (isLight ? '#d97706' : '#f59e0b');
        ctx.fillStyle = bat2Color;
        ctx.font = '900 11px system-ui, sans-serif';
        ctx.fillText(
          isArabic
            ? `المصدر ٢: ${simState.battery2StateAr} (${simState.battery2StateEn === 'Charging' ? 'V₂ = VB2 + Ir2' : 'V₂ = VB2 - Ir2'} = ${simState.vTerminal2}V)`
            : `Battery 2: ${simState.battery2StateEn} (${simState.battery2StateEn === 'Charging' ? 'V2 = VB2 + Ir2' : 'V2 = VB2 - Ir2'} = ${simState.vTerminal2}V)`,
          centerX,
          botY + 66
        );
      } else {
        // --- D. ELECTRIC POWER & HOUSEHOLD LAMPS ---
        const lamp1X = centerX - 100;
        const lamp2X = centerX + 100;

        // Wires
        drawInsulatedCablePolyline(
          ctx,
          [
            { x: batX, y: batTopPostY },
            { x: leftX, y: topY },
            { x: lamp1X - 25, y: topY },
          ],
          '#dc2626',
          isEnergized
        );

        drawHeavyInsulatedCable(ctx, lamp1X + 25, topY, lamp2X - 25, topY, '#dc2626', isEnergized);

        drawInsulatedCablePolyline(
          ctx,
          [
            { x: lamp2X + 25, y: topY },
            { x: rightX, y: topY },
            { x: rightX, y: switchTopY },
          ],
          '#dc2626',
          isEnergized
        );

        drawInsulatedCablePolyline(
          ctx,
          [
            { x: rightX, y: switchBotY },
            { x: rightX, y: botY },
            { x: botCenterX + ammeterRadius + 8, y: botY },
          ],
          '#2563eb',
          isEnergized
        );

        drawInsulatedCablePolyline(
          ctx,
          [
            { x: botCenterX - ammeterRadius - 8, y: botY },
            { x: leftX, y: botY },
            { x: batX, y: batBotPostY },
          ],
          '#2563eb',
          isEnergized
        );

        // Voltmeter
        drawHeavyInsulatedCable(ctx, batX - 4, batTopPostY, vmX + 26, vmY - 30, '#ef4444', isEnergized);
        drawHeavyInsulatedCable(ctx, batX - 4, batBotPostY, vmX + 26, vmY + 30, '#0f172a', isEnergized);

        // Lamps
        const pLamp1 = isEnergized ? simState.pLoad * 0.6 : 0;
        const pLamp2 = isEnergized ? simState.pLoad * 0.4 : 0;
        drawIncandescentEdisonBulb(ctx, lamp1X, topY, 26, pLamp1, 40, isArabic ? 'مصباح ١' : 'Lamp 1');
        drawIncandescentEdisonBulb(ctx, lamp2X, topY, 26, pLamp2, 40, isArabic ? 'مصباح ٢' : 'Lamp 2');

        // Apparatus
        drawHeavyLabBattery(ctx, batX, batY, batW, batH, params.vb1, params.rInternal1, simState.battery1StateEn, simState.battery1StateAr, isEnergized, isArabic);
        drawIndustrialKnifeSwitch(ctx, switchX, switchY, switchW, switchH, params.isSwitchClosed, isArabic);
        drawAnalogMeterGauge(ctx, vmX, vmY, vmRadius, simState.vTerminal1, 0, Math.max(12, Math.ceil(params.vb1 * 1.25)), isArabic ? 'فولتميتر V₁' : 'VOLTMETER V₁', 'V');
        drawAnalogMeterGauge(ctx, botCenterX, botY, ammeterRadius, simState.iTotal, 0, Math.max(3, Math.ceil(simState.iTotal * 1.5)), isArabic ? 'أميتر كلي I_tot' : 'AMMETER I_tot', 'A');

        // Power Telemetry HUD
        ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - 150, centerY - 46, 300, 92, [12]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? 'القدرة الكهربية المستهلكة (P = V²/R = I²R):' : 'Electric Power Dissipation (P = V²/R = I²R):', centerX, centerY - 25);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px monospace';
        ctx.fillText(
          isArabic
            ? `إجمالي القدرة الضوئية: P = ${simState.pLoad.toFixed(1)} W`
            : `Total Light Power: P = ${simState.pLoad.toFixed(1)} W`,
          centerX,
          centerY - 5
        );

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(
          isArabic
            ? `القدرة المفقودة داخلياً: Ir² = ${simState.pInternalLoss.toFixed(1)} W`
            : `Internal Battery Heat: Ir² = ${simState.pInternalLoss.toFixed(1)} W`,
          centerX,
          centerY + 16
        );

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(
          isArabic
            ? `كفاءة التحويل: ${simState.efficiencyPercent}%`
            : `Luminous Efficiency: ${simState.efficiencyPercent}%`,
          centerX,
          centerY + 35
        );
      }

      // =========================================================
      // CONTINUOUS 60 FPS GOLDEN ELECTRON DRIFT PARTICLES
      // =========================================================
      if (isEnergized) {
        const perimeter = 2 * (boxW + boxH);
        const numElectrons = 26;
        const driftSpeed = Math.min(260, Math.max(35, simState.iTotal * 75));
        const currentOffset = (t * driftSpeed) % perimeter;

        for (let i = 0; i < numElectrons; i++) {
          const d = (i * (perimeter / numElectrons) + currentOffset) % perimeter;
          let ex = startX;
          let ey = startY;

          if (d < boxW) {
            ex = startX + d;
            ey = startY;
          } else if (d < boxW + boxH) {
            ex = startX + boxW;
            ey = startY + (d - boxW);
          } else if (d < 2 * boxW + boxH) {
            ex = startX + boxW - (d - (boxW + boxH));
            ey = startY + boxH;
          } else {
            ex = startX;
            ey = startY + boxH - (d - (2 * boxW + boxH));
          }

          drawGlowingParticle(ctx, ex, ey, 4.5, '#facc15', 10);
        }
      }
    },
    [isArabic, isContrast, isLight, params, simState]
  );

  return (
    <VirtualLabShell
      definition={CIRCUITS_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={simState.iTotal}
      currentYValue={simState.vTerminal1}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Module Selector */}
          <div className={`p-3 rounded-2xl border space-y-2 ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border border-slate-800'
          }`}>
            <label className={`text-xs font-bold block flex items-center gap-1.5 ${
              isLight ? 'text-slate-700' : 'text-slate-400'
            }`}>
              <Layers className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
              <span>{isArabic ? 'وحدة الاستكشاف:' : 'Lab Module:'}</span>
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'وحدة الاستكشاف' : 'Lab Module'}
                value={params.module}
                onChange={(e) => updateParam('module', e.target.value as CircuitModule)}
                className={`w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl border text-xs font-bold focus:outline-none cursor-pointer ${
                  isLight
                    ? 'bg-white border-slate-300 text-slate-800 focus:border-cyan-600 shadow-xs'
                    : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-500'
                }`}
              >
                <option value="closed_ohm">
                  {isArabic ? 'قانون أوم للدائرة المغلقة (V = VB - Ir)' : "Ohm's Law Closed Circuit"}
                </option>
                <option value="resistor_networks">
                  {isArabic ? 'توصيل المقاومات (توالي/توازي/قنطرة)' : 'Resistor Networks (Series/Parallel)'}
                </option>
                <option value="kirchhoff">
                  {isArabic ? 'قوانين كيرشوف وحل الشبكات المعقدة' : "Kirchhoff's Two-Loop Solver"}
                </option>
                <option value="power_energy">
                  {isArabic ? 'القدرة وإضاءة المصابيح المنزلية' : 'Power & Lamp Brightness'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Switch K Toggle Button */}
          <div className={`p-3 rounded-2xl border flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border border-slate-800'
          }`}>
            <span className={`text-xs font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-800' : 'text-slate-300'
            }`}>
              <Power className={`w-4 h-4 ${params.isSwitchClosed ? (isLight ? 'text-emerald-600' : 'text-emerald-400') : (isLight ? 'text-red-600' : 'text-red-400')}`} />
              <span>{isArabic ? 'مفتاح الدائرة (K):' : 'Circuit Switch (K):'}</span>
            </span>
            <button
              onClick={() => updateParam('isSwitchClosed', !params.isSwitchClosed)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                params.isSwitchClosed
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-md'
              }`}
            >
              {params.isSwitchClosed ? (isArabic ? 'مغلق (يمر تيار)' : 'Closed') : (isArabic ? 'مفتوح (V=VB)' : 'Open')}
            </button>
          </div>

          {/* Controls for Closed Ohm Mode */}
          {params.module === 'closed_ohm' && (
            <div className={`p-3 rounded-2xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border border-slate-800'
            }`}>
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>{isArabic ? 'مقاومة الروستات (Rv):' : 'Rheostat Load (Rv):'}</span>
                  <span className={`font-mono ${isLight ? 'text-cyan-700 font-black' : 'text-cyan-400'}`}>{params.rheostatR} Ω</span>
                </div>
                <input
                  aria-label={isArabic ? 'مقاومة الروستات' : 'Rheostat Resistance'}
                  type="range"
                  min="0"
                  max="50"
                  step="0.5"
                  value={params.rheostatR}
                  onChange={(e) => updateParam('rheostatR', parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>{isArabic ? 'المقاومة الداخلية (r):' : 'Internal Resistance (r):'}</span>
                  <span className={`font-mono ${isLight ? 'text-amber-700 font-black' : 'text-amber-400'}`}>{params.rInternal1} Ω</span>
                </div>
                <input
                  aria-label={isArabic ? 'المقاومة الداخلية' : 'Internal Resistance'}
                  type="range"
                  min="0"
                  max="5"
                  step="0.2"
                  value={params.rInternal1}
                  onChange={(e) => updateParam('rInternal1', parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>{isArabic ? 'القوة الدافعة (VB):' : 'Battery EMF (VB):'}</span>
                  <span className={`font-mono ${isLight ? 'text-rose-700 font-black' : 'text-rose-400'}`}>{params.vb1} V</span>
                </div>
                <input
                  aria-label={isArabic ? 'القوة الدافعة' : 'Battery EMF'}
                  type="range"
                  min="1"
                  max="24"
                  step="0.5"
                  value={params.vb1}
                  onChange={(e) => updateParam('vb1', parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Controls for Resistor Networks Mode */}
          {params.module === 'resistor_networks' && (
            <div className={`p-3 rounded-2xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border border-slate-800'
            }`}>
              <div>
                <label className={`text-xs font-bold block mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isArabic ? 'طريقة التوصيل:' : 'Network Type:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'طريقة التوصيل' : 'Network Type'}
                    value={params.networkType}
                    onChange={(e) => updateParam('networkType', e.target.value as ResistorNetworkType)}
                    className={`w-full appearance-none p-2 pr-8 pl-3 rounded-xl border text-xs font-bold focus:outline-none cursor-pointer ${
                      isLight
                        ? 'bg-white border-slate-300 text-slate-800 focus:border-cyan-600 shadow-xs'
                        : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-500'
                    }`}
                  >
                    <option value="series">{isArabic ? 'توصيل توالي (ثبات I)' : 'Series (Equal Current)'}</option>
                    <option value="parallel">{isArabic ? 'توصيل توازي (ثبات V)' : 'Parallel (Equal Voltage)'}</option>
                    <option value="wheatstone_bridge">{isArabic ? 'قنطرة وتستون (إلغاء المقاومة)' : 'Wheatstone Bridge'}</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>R1:</span>
                  <span className={`font-mono ${isLight ? 'text-cyan-700 font-black' : 'text-cyan-400'}`}>{params.r1} Ω</span>
                </div>
                <input
                  aria-label="R1"
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={params.r1}
                  onChange={(e) => updateParam('r1', parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>R2:</span>
                  <span className={`font-mono ${isLight ? 'text-amber-700 font-black' : 'text-amber-400'}`}>{params.r2} Ω</span>
                </div>
                <input
                  aria-label="R2"
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={params.r2}
                  onChange={(e) => updateParam('r2', parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Controls for Kirchhoff Mode */}
          {params.module === 'kirchhoff' && (
            <div className={`p-3 rounded-2xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border border-slate-800'
            }`}>
              <div>
                <label className={`text-xs font-bold block mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isArabic ? 'قطبية المصدرين:' : 'Batteries Alignment:'}
                </label>
                <div className="relative">
                  <select
                    aria-label={isArabic ? 'قطبية المصدرين' : 'Batteries Alignment'}
                    value={params.battery2Polarity}
                    onChange={(e) => updateParam('battery2Polarity', e.target.value as 'same' | 'opposing')}
                    className={`w-full appearance-none p-2 pr-8 pl-3 rounded-xl border text-xs font-bold focus:outline-none cursor-pointer ${
                      isLight
                        ? 'bg-white border-slate-300 text-slate-800 focus:border-cyan-600 shadow-xs'
                        : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-500'
                    }`}
                  >
                    <option value="opposing">
                      {isArabic ? 'متعاكستان (تفريغ وشحن V = VB + Ir)' : 'Opposing (Charging State)'}
                    </option>
                    <option value="same">
                      {isArabic ? 'في نفس الاتجاه (تفريغ معاً)' : 'Assisting (Dual Discharge)'}
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className={`p-2 rounded-lg border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border border-slate-800'
                }`}>
                  <span className={`text-[10px] block ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>VB1:</span>
                  <span className={`font-mono font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>{params.vb1} V</span>
                </div>
                <div className={`p-2 rounded-lg border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border border-slate-800'
                }`}>
                  <span className={`text-[10px] block ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>VB2:</span>
                  <span className={`font-mono font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>{params.vb2} V</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    >
      <div className="space-y-4">
        {/* Main Canvas Viewport */}
        <div className={`relative rounded-2xl overflow-hidden border ${
          isLight ? 'border-slate-200 bg-white shadow-xs' : 'border-slate-800 bg-slate-950'
        }`}>
          <CanvasSimulationViewport
            id="circuits-canvas-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            minHeight={460}
            animated={true}
            onRender={handleRenderCanvas}
          >
            <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-xl backdrop-blur-md border text-xs font-bold flex items-center gap-2 ${
              isLight
                ? 'bg-white/95 border-slate-300 text-slate-800 shadow-sm'
                : 'bg-slate-950/85 border-slate-700/60 text-slate-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${params.isSwitchClosed ? 'bg-emerald-400 animate-ping' : 'bg-red-400'}`} />
              <span>
                {params.isSwitchClosed
                  ? isArabic
                    ? `دائرة مغلقة: I = ${simState.iTotal} A`
                    : `Closed Circuit: I = ${simState.iTotal} A`
                  : isArabic
                  ? 'دائرة مفتوحة: I = 0 A'
                  : 'Open Circuit: I = 0 A'}
              </span>
            </div>
          </CanvasSimulationViewport>
        </div>

        {/* Phase Summary Status Banner */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className={`p-2.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border border-slate-800'
            }`}>
              <span className={`text-[10px] block mb-0.5 ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                {isArabic ? 'فرق جهد البطارية ١' : 'Battery 1 Voltage'}
              </span>
              <span className={`font-mono font-bold text-sm ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                {simState.vTerminal1} V
              </span>
            </div>
            <div className={`p-2.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border border-slate-800'
            }`}>
              <span className={`text-[10px] block mb-0.5 ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                {isArabic ? 'حالة البطارية ١' : 'Battery 1 State'}
              </span>
              <span className={`font-bold text-xs line-clamp-1 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                {isArabic ? simState.battery1StateAr : simState.battery1StateEn}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border border-slate-800'
            }`}>
              <span className={`text-[10px] block mb-0.5 ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                {isArabic ? 'المقاومة المكافئة' : 'Equivalent Req'}
              </span>
              <span className={`font-mono font-bold text-sm ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                {simState.rEquivalent} Ω
              </span>
            </div>
            <div className={`p-2.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border border-slate-800'
            }`}>
              <span className={`text-[10px] block mb-0.5 ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                {isArabic ? 'القدرة المستهلكة' : 'Power Dissipated'}
              </span>
              <span className={`font-mono font-bold text-sm ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                {simState.pLoad} W
              </span>
            </div>
          </div>
        </div>

        {/* Curriculum Exam Insights Accordion */}
        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>{isArabic ? 'ملاحظات وتطبيقات المنهج المصري للثانوية العامة:' : 'Egyptian Curriculum Exam Insights:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قانون V = VB - Ir' : 'Terminal Voltage Law'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'يتناسب فرق الجهد بين قطبي المصدر تناسباً عكسياً مع شدة التيار (علاقة تناقصية خطية بميل -r). وتكون V = VB فقط عندما تكون الدائرة مفتوحة (I = 0) أو تنعدم المقاومة الداخلية (r = 0).'
                  : 'Terminal voltage V decreases linearly with current I with slope -r. V equals VB only when the circuit is open (I = 0) or internal resistance is negligible (r = 0).'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'عمود في حالة شحن V = VB + Ir' : 'Charging Battery'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'عند توصيل عمودين على التعاكس، فإن العمود الأصغر جهداً يدخل التيار لقطبه الموجب فيكون في حالة شحن، ويكون فرق الجهد بين قطبيه أكبر من قوته الدافعة (V = VB + Ir).'
                  : 'In opposing batteries, the smaller battery receives current into its positive terminal, operating in charging mode where terminal voltage exceeds EMF: V = VB + Ir.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-rose-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قنطرة وتستون وحذف المقاومة' : 'Wheatstone Null Condition'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'عندما تتساوى نسبة المقاومات R1/R2 = R3/R4 ينعدم فرق الجهد بين طرفي المقاومة الوسطية وينعدم التيار المار فيها فتحذف تماماً من حسابات المقاومة المكافئة.'
                  : 'When the ratio R1/R2 equals R3/R4, potential difference across the central bridge is zero; zero current flows through it, allowing it to be eliminated.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default CircuitsLab;
