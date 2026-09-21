import React, { useCallback, useMemo, useRef } from 'react';
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
  drawMetallicCylinder,
  drawGlowingParticle,
  drawVolumetricBeam,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Cpu,
  Activity,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type ElectronicsModule = 'diode_rectifier' | 'transistor_bjt' | 'coolidge_xray';
export type DiodeMaterial = 'silicon' | 'germanium';
export type RectifierCircuitType = 'half_wave' | 'full_wave_bridge';
export type TransistorMode = 'amplifier' | 'inverter_not_gate';
export type TargetElement = 'tungsten' | 'molybdenum' | 'copper';

export interface ElectronicsParams {
  module: ElectronicsModule;
  // --- Module A: Diode & Rectification ---
  diodeMaterial: DiodeMaterial;
  diodeMode: 'iv_curve' | 'rectifier';
  biasVoltageV: number; // -10.0 to +2.0 V
  rectifierType: RectifierCircuitType;
  acAmplitudeV: number; // 2.0 to 12.0 V
  acFrequencyHz: number; // 10 to 60 Hz
  loadResistorOhm: number; // 50 to 1000 Ohm
  filterCapacitanceUf: number; // 0 to 500 uF
  isCapacitorActive: boolean;

  // --- Module B: BJT Transistor ---
  transistorMode: TransistorMode;
  currentGainBeta: number; // 50 to 300
  baseCurrentMicroA: number; // 0 to 120 uA
  collectorResistorKOhm: number; // 1.0 to 10.0 kOhm
  vccSupplyV: number; // 5.0 to 15.0 V
  digitalInputBit: 0 | 1; // For NOT gate mode
  acInputSignalMv: number; // 10 to 100 mV

  // --- Module C: Coolidge X-Ray Tube ---
  acceleratingVoltageKv: number; // 15 to 95 kV
  targetElement: TargetElement;
  filamentCurrentA: number; // 2.0 to 6.0 A
}

export interface ElectronicsSimState {
  // Diode
  barrierPotentialV: number;
  diodeCurrentMa: number;
  depletionWidthRatio: number;
  rectifiedVdc: number;
  rippleVoltageV: number;
  diodeConductionStateEn: string;
  diodeConductionStateAr: string;

  // Transistor
  ibMicroA: number;
  icMilliA: number;
  ieMilliA: number;
  alphaCurrentGain: number;
  vceVolts: number;
  voltageGainAv: number;
  transistorOperatingStateEn: string;
  transistorOperatingStateAr: string;
  notGateOutputBit: 0 | 1;

  // Coolidge Tube
  duaneHuntLambdaMinAngstrom: number;
  duaneHuntLambdaMinNm: number;
  maxPhotonEnergyKev: number;
  kAlphaLambdaAngstrom: number;
  kBetaLambdaAngstrom: number;
  areCharacteristicLinesExcited: boolean;
  totalXRayIntensityAu: number;
}

const TARGET_ELEMENT_DATA: Record<
  TargetElement,
  {
    nameEn: string;
    nameAr: string;
    symbol: string;
    atomicNumberZ: number;
    kShellThresholdKev: number;
    kAlphaAngstrom: number;
    kBetaAngstrom: number;
    colorHex: string;
  }
> = {
  tungsten: {
    nameEn: 'Tungsten (W)',
    nameAr: 'التنجستين (W)',
    symbol: 'W',
    atomicNumberZ: 74,
    kShellThresholdKev: 69.5,
    kAlphaAngstrom: 0.21,
    kBetaAngstrom: 0.18,
    colorHex: '#38bdf8',
  },
  molybdenum: {
    nameEn: 'Molybdenum (Mo)',
    nameAr: 'الموليبدنوم (Mo)',
    symbol: 'Mo',
    atomicNumberZ: 42,
    kShellThresholdKev: 20.0,
    kAlphaAngstrom: 0.71,
    kBetaAngstrom: 0.63,
    colorHex: '#a855f7',
  },
  copper: {
    nameEn: 'Copper (Cu)',
    nameAr: 'النحاس (Cu)',
    symbol: 'Cu',
    atomicNumberZ: 29,
    kShellThresholdKev: 8.98,
    kAlphaAngstrom: 1.54,
    kBetaAngstrom: 1.39,
    colorHex: '#f97316',
  },
};

export const INITIAL_ELECTRONICS_PARAMS: ElectronicsParams = {
  module: 'diode_rectifier',
  diodeMaterial: 'silicon',
  diodeMode: 'iv_curve',
  biasVoltageV: 0.8,
  rectifierType: 'full_wave_bridge',
  acAmplitudeV: 6.0,
  acFrequencyHz: 50,
  loadResistorOhm: 250,
  filterCapacitanceUf: 220,
  isCapacitorActive: true,

  transistorMode: 'amplifier',
  currentGainBeta: 100,
  baseCurrentMicroA: 30,
  collectorResistorKOhm: 3.0,
  vccSupplyV: 12.0,
  digitalInputBit: 1,
  acInputSignalMv: 25,

  acceleratingVoltageKv: 50,
  targetElement: 'tungsten',
  filamentCurrentA: 4.5,
};

export const INITIAL_ELECTRONICS_STATE: ElectronicsSimState = {
  barrierPotentialV: 0.7,
  diodeCurrentMa: 6.67,
  depletionWidthRatio: 0.02,
  rectifiedVdc: 2.93,
  rippleVoltageV: 0.12,
  diodeConductionStateEn: 'Forward Conduction',
  diodeConductionStateAr: 'توصيل أمامي تام',

  ibMicroA: 30,
  icMilliA: 3.0,
  ieMilliA: 3.03,
  alphaCurrentGain: 0.9901,
  vceVolts: 3.0,
  voltageGainAv: -250,
  transistorOperatingStateEn: 'Active Linear Region',
  transistorOperatingStateAr: 'المنطقة الفعالة (تكبير خطي)',
  notGateOutputBit: 0,

  duaneHuntLambdaMinAngstrom: 0.248,
  duaneHuntLambdaMinNm: 0.0248,
  maxPhotonEnergyKev: 50,
  kAlphaLambdaAngstrom: 0.21,
  kBetaLambdaAngstrom: 0.18,
  areCharacteristicLinesExcited: false,
  totalXRayIntensityAu: 1040,
};

export const ELECTRONICS_PRESETS: LabPreset<ElectronicsParams>[] = [
  {
    id: 'preset_si_forward',
    nameEn: 'Silicon Diode Forward Conduction (0.7V Threshold)',
    nameAr: 'توصيل أمامي لوصلة السيليكون الثنائية (حاجز 0.7 فولت)',
    descriptionEn: 'Forward bias exceeding the 0.7V barrier collapses the depletion layer into rapid exponential conduction.',
    descriptionAr: 'جهد انحياز أمامي يتجاوز حاجز 0.7 فولت يؤدي لانهيار منطقة النضوب والتدفق السريع للتيار.',
    params: {
      module: 'diode_rectifier',
      diodeMaterial: 'silicon',
      diodeMode: 'iv_curve',
      biasVoltageV: 0.85,
    },
  },
  {
    id: 'preset_bridge_filter',
    nameEn: 'Full-Wave Bridge Rectifier with Capacitor Filter',
    nameAr: 'مقوم قنطري موجي كامل مع مكثف تنعيم التموجات',
    descriptionEn: '4-diode Graetz bridge inverts negative half-cycles with parallel capacitor smoothing the ripple.',
    descriptionAr: 'قنطرة رباعية المقومات تعكس أنصاف الموجات السالبة مع مكثف توازي ينعم جهد الخرج.',
    params: {
      module: 'diode_rectifier',
      diodeMaterial: 'silicon',
      diodeMode: 'rectifier',
      rectifierType: 'full_wave_bridge',
      acAmplitudeV: 8.0,
      filterCapacitanceUf: 330,
      isCapacitorActive: true,
    },
  },
  {
    id: 'preset_bjt_amp',
    nameEn: 'BJT Common-Emitter AC Amplifier (180° Phase Inversion)',
    nameAr: 'مكبر الترانزستور بالباعث المشترك (قلب الطور 180 درجة)',
    descriptionEn: 'Small-signal sinusoidal input voltage is inverted and amplified with gain proportional to beta and load.',
    descriptionAr: 'إشارة جيبية صغيرة تتضخم على المجمع مع قلب كامل في الطور بزاوية 180 درجة.',
    params: {
      module: 'transistor_bjt',
      transistorMode: 'amplifier',
      currentGainBeta: 120,
      baseCurrentMicroA: 25,
      collectorResistorKOhm: 3.5,
    },
  },
  {
    id: 'preset_bjt_not_gate',
    nameEn: 'Transistor as an Electronic Inverter (NOT Gate)',
    nameAr: 'الترانزستور كمفتاح عاكس (بوابة NOT المنطقية)',
    descriptionEn: 'Digital 0 input keeps BJT in cutoff (Vout = Vcc = 1); digital 1 drives it into saturation (Vout ≈ 0.2V = 0).',
    descriptionAr: 'دخل منخفض 0 يجعل الترانزستور قاطعاً وخرجه 1؛ بينما الدخل المرتفع 1 يقوده للتشبع ويكون الخرج 0.',
    params: {
      module: 'transistor_bjt',
      transistorMode: 'inverter_not_gate',
      digitalInputBit: 0,
      vccSupplyV: 5.0,
    },
  },
  {
    id: 'preset_coolidge_tungsten',
    nameEn: 'Coolidge Tube: High-Voltage Tungsten X-Ray Spectrum (80 kV)',
    nameAr: 'أنبوبة كولدج: طيف أشعة إكس لهدف التنجستين عند 80 ك.ف',
    descriptionEn: 'At 80 kV (> 69.5 kV threshold), characteristic K-alpha and K-beta spikes emerge on the continuous Bremsstrahlung curve.',
    descriptionAr: 'عند 80 ك.ف (أكبر من عتبة 69.5 ك.ف)، تبرز قمم أشعة K المميزة فوق منحنى الإشعاع المستمر.',
    params: {
      module: 'coolidge_xray',
      acceleratingVoltageKv: 80,
      targetElement: 'tungsten',
      filamentCurrentA: 5.0,
    },
  },
];

export const ELECTRONICS_PARAMETER_SCHEMA: LabParameterSchema<ElectronicsParams> = {
  module: {
    key: 'module',
    type: 'select',
    defaultValue: 'diode_rectifier',
    labelEn: 'Electronics Module',
    labelAr: 'الوحدة الإلكترونية قيد التشغيل',
    options: [
      { value: 'diode_rectifier', labelEn: 'p-n Diode & Rectification', labelAr: 'الوصلة الثنائية وتقويم التيار' },
      { value: 'transistor_bjt', labelEn: 'BJT Transistor & Inverter', labelAr: 'الترانزستور والمفتاح العاكس' },
      { value: 'coolidge_xray', labelEn: 'Coolidge Tube & X-Ray Spectra', labelAr: 'أنبوبة كولدج وطيف أشعة إكس' },
    ],
  },
  diodeMaterial: {
    key: 'diodeMaterial',
    type: 'select',
    defaultValue: 'silicon',
    labelEn: 'Semiconductor Material',
    labelAr: 'مادة شبه الموصل',
    options: [
      { value: 'silicon', labelEn: 'Silicon (Vbi = 0.7 V)', labelAr: 'سيليكون (جهد الحاجز 0.7 فولت)' },
      { value: 'germanium', labelEn: 'Germanium (Vbi = 0.3 V)', labelAr: 'جرمانيوم (جهد الحاجز 0.3 فولت)' },
    ],
    visibleIf: (p) => p.module === 'diode_rectifier',
  },
  diodeMode: {
    key: 'diodeMode',
    type: 'select',
    defaultValue: 'iv_curve',
    labelEn: 'Diode Experiment Style',
    labelAr: 'نمط تجربة الوصلة',
    options: [
      { value: 'iv_curve', labelEn: 'Depletion Layer & I-V Curve', labelAr: 'منطقة النضوب ومنحنى الخواص' },
      { value: 'rectifier', labelEn: 'AC Rectification & Smoothing', labelAr: 'تقويم التيار المتردد وتنعيمه' },
    ],
    visibleIf: (p) => p.module === 'diode_rectifier',
  },
  biasVoltageV: {
    key: 'biasVoltageV',
    type: 'number',
    defaultValue: 0.8,
    min: -10.0,
    max: 2.0,
    step: 0.05,
    unit: 'V',
    labelEn: 'Diode Bias Voltage',
    labelAr: 'جهد انحياز الوصلة الثنائية',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'iv_curve',
  },
  rectifierType: {
    key: 'rectifierType',
    type: 'select',
    defaultValue: 'full_wave_bridge',
    labelEn: 'Rectifier Topology',
    labelAr: 'نوع دائرة التقويم',
    options: [
      { value: 'half_wave', labelEn: 'Half-Wave (Single Diode)', labelAr: 'تقويم نصف موجي (دايود مفرد)' },
      { value: 'full_wave_bridge', labelEn: 'Full-Wave Bridge (4 Diodes)', labelAr: 'تقويم موجي كامل (قنطرة 4 دايودات)' },
    ],
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier',
  },
  acAmplitudeV: {
    key: 'acAmplitudeV',
    type: 'number',
    defaultValue: 6.0,
    min: 2.0,
    max: 12.0,
    step: 0.5,
    unit: 'V',
    labelEn: 'AC Input Amplitude',
    labelAr: 'سعة جهد الدخل المتردد',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier',
  },
  acFrequencyHz: {
    key: 'acFrequencyHz',
    type: 'number',
    defaultValue: 50,
    min: 10,
    max: 60,
    step: 5,
    unit: 'Hz',
    labelEn: 'AC Frequency',
    labelAr: 'تردد التيار المتردد',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier',
  },
  loadResistorOhm: {
    key: 'loadResistorOhm',
    type: 'number',
    defaultValue: 250,
    min: 50,
    max: 1000,
    step: 25,
    unit: 'Ω',
    labelEn: 'Load Resistor (RL)',
    labelAr: 'مقاومة الحمل (RL)',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier',
  },
  filterCapacitanceUf: {
    key: 'filterCapacitanceUf',
    type: 'number',
    defaultValue: 220,
    min: 10,
    max: 500,
    step: 10,
    unit: 'μF',
    labelEn: 'Filter Capacitance (C)',
    labelAr: 'سعة مكثف التنعيم (C)',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier' && p.isCapacitorActive,
  },
  isCapacitorActive: {
    key: 'isCapacitorActive',
    type: 'boolean',
    defaultValue: true,
    labelEn: 'Capacitor Smoothing Filter',
    labelAr: 'تفعيل مكثف التنعيم',
    visibleIf: (p) => p.module === 'diode_rectifier' && p.diodeMode === 'rectifier',
  },
  transistorMode: {
    key: 'transistorMode',
    type: 'select',
    defaultValue: 'amplifier',
    labelEn: 'Transistor Function',
    labelAr: 'وظيفة الترانزستور',
    options: [
      { value: 'amplifier', labelEn: 'Small-Signal AC Amplifier', labelAr: 'مكبر للإشارات الكهربية الصغيرة' },
      { value: 'inverter_not_gate', labelEn: 'Electronic Inverter (NOT Gate)', labelAr: 'مفتاح عاكس (بوابة NOT)' },
    ],
    visibleIf: (p) => p.module === 'transistor_bjt',
  },
  currentGainBeta: {
    key: 'currentGainBeta',
    type: 'number',
    defaultValue: 100,
    min: 50,
    max: 300,
    step: 10,
    labelEn: 'Current Gain (β)',
    labelAr: 'معامل تكبير التيار (β)',
    visibleIf: (p) => p.module === 'transistor_bjt',
  },
  baseCurrentMicroA: {
    key: 'baseCurrentMicroA',
    type: 'number',
    defaultValue: 30,
    min: 0,
    max: 100,
    step: 2,
    unit: 'μA',
    labelEn: 'Base Input Current (Ib)',
    labelAr: 'تيار القاعدة (Ib)',
    visibleIf: (p) => p.module === 'transistor_bjt' && p.transistorMode === 'amplifier',
  },
  collectorResistorKOhm: {
    key: 'collectorResistorKOhm',
    type: 'number',
    defaultValue: 3.0,
    min: 1.0,
    max: 10.0,
    step: 0.5,
    unit: 'kΩ',
    labelEn: 'Collector Resistor (Rc)',
    labelAr: 'مقاومة دائرة المجمع (Rc)',
    visibleIf: (p) => p.module === 'transistor_bjt',
  },
  vccSupplyV: {
    key: 'vccSupplyV',
    type: 'number',
    defaultValue: 12.0,
    min: 5.0,
    max: 15.0,
    step: 1.0,
    unit: 'V',
    labelEn: 'Vcc Supply Rail',
    labelAr: 'جهد تغذية المجمع (Vcc)',
    visibleIf: (p) => p.module === 'transistor_bjt',
  },
  digitalInputBit: {
    key: 'digitalInputBit',
    type: 'select',
    defaultValue: 1,
    labelEn: 'Digital Input Bit (Vin)',
    labelAr: 'البت الرقمي للدخل (Vin)',
    options: [
      { value: 0, labelEn: 'Bit 0: Low (0 V)', labelAr: 'البت 0: جهد منخفض (0 فولت)' },
      { value: 1, labelEn: 'Bit 1: High (+5 V)', labelAr: 'البت 1: جهد مرتفع (+5 فولت)' },
    ],
    visibleIf: (p) => p.module === 'transistor_bjt' && p.transistorMode === 'inverter_not_gate',
  },
  acInputSignalMv: {
    key: 'acInputSignalMv',
    type: 'number',
    defaultValue: 25,
    min: 10,
    max: 100,
    step: 5,
    unit: 'mV',
    labelEn: 'AC Input Amplitude (vin)',
    labelAr: 'سعة إشارة الدخل الصغيرة',
    visibleIf: (p) => p.module === 'transistor_bjt' && p.transistorMode === 'amplifier',
  },
  acceleratingVoltageKv: {
    key: 'acceleratingVoltageKv',
    type: 'number',
    defaultValue: 50,
    min: 15,
    max: 95,
    step: 1,
    unit: 'kV',
    labelEn: 'Accelerating High Voltage',
    labelAr: 'فرق الجهد العالي للتسارع',
    visibleIf: (p) => p.module === 'coolidge_xray',
  },
  targetElement: {
    key: 'targetElement',
    type: 'select',
    defaultValue: 'tungsten',
    labelEn: 'Target Anode Metal',
    labelAr: 'معدن الهدف في المصعد',
    options: [
      { value: 'tungsten', labelEn: 'Tungsten (W, Z=74, K-edge: 69.5 keV)', labelAr: 'تنجستين (W, Z=74, عتبة K: 69.5 ك.إ.ف)' },
      { value: 'molybdenum', labelEn: 'Molybdenum (Mo, Z=42, K-edge: 20 keV)', labelAr: 'موليبدنوم (Mo, Z=42, عتبة K: 20 ك.إ.ف)' },
      { value: 'copper', labelEn: 'Copper (Cu, Z=29, K-edge: 8.98 keV)', labelAr: 'نحاس (Cu, Z=29, عتبة K: 8.98 ك.إ.ف)' },
    ],
    visibleIf: (p) => p.module === 'coolidge_xray',
  },
  filamentCurrentA: {
    key: 'filamentCurrentA',
    type: 'number',
    defaultValue: 4.5,
    min: 2.0,
    max: 6.0,
    step: 0.2,
    unit: 'A',
    labelEn: 'Cathode Filament Current',
    labelAr: 'تيار تسخين فتيلة الكاثود',
    visibleIf: (p) => p.module === 'coolidge_xray',
  },
};

export const ELECTRONICS_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_diode_threshold',
    titleEn: 'Semiconductor Diode Barrier Potential',
    titleAr: 'الجهد الحاجز للوصلة الثنائية',
    scenarioEn: 'A silicon p-n junction diode is connected to an adjustable DC power supply. Forward bias voltage is raised gradually from 0.0V to 1.5V.',
    scenarioAr: 'تم توصيل وصلة ثنائية من السيليكون بمصدر تيار مستمر متغير الجهد، وتمت زيادة جهد الانحياز الأمامي تدريجياً من 0 إلى 1.5 فولت.',
    questionEn: 'Predict what happens to the silicon diode current when forward bias increases from 0.4V to 0.8V.',
    questionAr: 'توقع ماذا يحدث لتيار وصلة السيليكون الثنائية عند زيادة جهد الانحياز الأمامي من 0.4 إلى 0.8 فولت.',
    optionsEn: [
      'Increases linearly with identical proportional slope',
      'Remains virtually zero below 0.7V barrier, then surges exponentially once barrier potential is overcome',
      'Decreases due to increased junction heating',
      'Reverses direction due to electron-hole recombination',
    ],
    optionsAr: [
      'يزداد خطياً بنفس المعدل الثابت في كل المراحل',
      'يظل شبه منعدم دون حاجز 0.7 فولت ثم يتدفق أُسياً بمجرد التغلب على الجهد الحاجز',
      'يتناقص نتيجة ارتفاع حرارة الوصلة الثنائية',
      'ينعكس اتجاهه بسبب التحام الإلكترونات والفجوات',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn: 'Silicon has an internal built-in barrier potential Vbi ≈ 0.7V. Current is negligible until V exceeds 0.7V, collapsing the depletion layer.',
    scientificExplanationAr: 'تمتلك وصلة السيليكون جهداً حاجزاً داخلياً حوالي 0.7 فولت. لا يمر تيار ملحوظ إلا عند تجاوزه وانهيار منطقة النضوب.',
  },
  {
    id: 'poe_transistor_inverter',
    titleEn: 'BJT Transistor as an Electronic Inverter',
    titleAr: 'الترانزستور كمفتاح عاكس منطقي',
    scenarioEn: 'A Common-Emitter BJT inverter circuit has a collector resistor Rc and Vcc = 5V. A digital logic input signal is connected to the base terminal.',
    scenarioAr: 'دائرة ترانزستور باعث مشترك تعمل كعاكس بمقاومة مجمع Rc وجهد Vcc = 5V، وتتصل القاعدة بإشارة دخل رقمية.',
    questionEn: 'In a Common-Emitter BJT inverter circuit, what is the output voltage Vce when base input voltage is 0V (logic 0)?',
    questionAr: 'في دائرة الترانزستور كعاكس (باعث مشترك)، ما جهد الخرج Vce عندما يكون دخل القاعدة 0 فولت (منطق 0)؟',
    optionsEn: [
      'Vce = 0.2V (transistor saturated, logic 0)',
      'Vce = Vcc (transistor in cutoff, switch is open, logic 1)',
      'Vce = Vcc / 2 (linear active state)',
      'Vce = -Vcc (negative inversion)',
    ],
    optionsAr: [
      'Vce = 0.2 فولت (الترانزستور في حالة تشبع، منطق 0)',
      'Vce = Vcc (الترانزستور في حالة قطع، المفتاح مفتوح، منطق 1)',
      'Vce = Vcc / 2 (في منتصف المنطقة الخطية)',
      'Vce = -Vcc (انعكاس سالب)',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn: 'When Vin = 0, base current Ib = 0. Thus collector current Ic = 0. Loop equation Vce = Vcc - Ic·Rc gives Vce = Vcc (Logic 1).',
    scientificExplanationAr: 'عندما يكون الدخل 0، ينعدم تيار القاعدة Ib=0 وينعدم تيار المجمع Ic=0. من معادلة الدائرة Vce = Vcc - Ic·Rc نجد Vce = Vcc (منطق 1).',
  },
  {
    id: 'poe_coolidge_duane_hunt',
    titleEn: 'Coolidge Tube Continuous X-Ray Spectrum',
    titleAr: 'الطيف المستمر لأشعة إكس وقانون دوين-هانت',
    scenarioEn: 'Electrons emitted from a hot tungsten filament are accelerated across a Coolidge tube vacuum gap towards a heavy metal anode.',
    scenarioAr: 'تنبعث الإلكترونات من فتيلة ساخنة ويتم تسريعها عبر فراغ أنبوبة كولدج بفرق جهد عالٍ نحو مصعد من مادة ثقيلة.',
    questionEn: 'If the accelerating voltage in a Coolidge tube is doubled from 40 kV to 80 kV, what happens to the minimum wavelength (λmin) of the continuous spectrum?',
    questionAr: 'إذا تضاعف فرق الجهد العالي بين قطبي أنبوبة كولدج من 40 ك.ف إلى 80 ك.ف، فماذا يحدث لأدنى طول موجي (λmin) في الطيف المستمر؟',
    optionsEn: [
      'λmin is halved (λmin ∝ 1/V)',
      'λmin is doubled',
      'λmin remains unchanged because it only depends on the target metal',
      'λmin becomes zero',
    ],
    optionsAr: [
      'يقل أدنى طول موجي إلى النصف بالضبط (تناسب عكسي مع فرق الجهد)',
      'يتضاعف أدنى طول موجي مرتين',
      'يظل ثابتاً لأنه يعتمد فقط على نوع مادة الهدف',
      'ينعدم الطول الموجي تماماً',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn: 'According to the Duane-Hunt law: λmin = hc / (e·V). Minimum wavelength is inversely proportional to accelerating potential.',
    scientificExplanationAr: 'وفق قانون دوين-هانت: λmin = hc / (e·V). يتناسب أدنى طول موجي عكسياً مع فرق الجهد بين المصعد والمهبط.',
  },
];

export const SemiconductorElectronicsLab: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const simRef = useRef<{
    electronPhase: number;
    sparkPhase: number;
  }>({
    electronPhase: 0,
    sparkPhase: 0,
  });

  const calculateSimState = useCallback((p: ElectronicsParams): ElectronicsSimState => {
    const barrierPotentialV = p.diodeMaterial === 'silicon' ? 0.7 : 0.3;
    let diodeCurrentMa = 0;
    let depletionWidthRatio = 1.0;
    let diodeStateEn = 'Equilibrium';
    let diodeStateAr = 'حالة اتزان';

    if (p.biasVoltageV > 0) {
      if (p.biasVoltageV < barrierPotentialV) {
        diodeCurrentMa = 0.05 * Math.exp((p.biasVoltageV / barrierPotentialV) * 3);
        depletionWidthRatio = Math.max(0.1, 1.0 - p.biasVoltageV / barrierPotentialV);
        diodeStateEn = 'Barrier Threshold';
        diodeStateAr = 'حاجز جهدي (عتبة التوصيل)';
      } else {
        const overVoltage = p.biasVoltageV - barrierPotentialV;
        diodeCurrentMa = 1.0 + (overVoltage / 0.015) * 5.0;
        depletionWidthRatio = 0.02;
        diodeStateEn = 'Forward Conduction';
        diodeStateAr = 'توصيل أمامي تام';
      }
    } else {
      if (p.biasVoltageV > -8.0) {
        diodeCurrentMa = -0.001;
        depletionWidthRatio = 1.0 + Math.sqrt(Math.abs(p.biasVoltageV)) * 0.45;
        diodeStateEn = 'Reverse Blocking';
        diodeStateAr = 'حجز عكسي مانع للتيار';
      } else {
        diodeCurrentMa = -((Math.abs(p.biasVoltageV) - 8.0) / 0.05) * 10.0;
        depletionWidthRatio = 2.8;
        diodeStateEn = 'Zener Breakdown';
        diodeStateAr = 'انهيار عكسي (زينر)';
      }
    }

    const vPeak = Math.max(0, p.acAmplitudeV - (p.rectifierType === 'full_wave_bridge' ? 2 * barrierPotentialV : barrierPotentialV));
    let rectifiedVdc = 0;
    let rippleVoltageV = 0;

    if (p.rectifierType === 'half_wave') {
      rectifiedVdc = vPeak / Math.PI;
      if (p.isCapacitorActive && p.filterCapacitanceUf > 0) {
        const cFarad = p.filterCapacitanceUf * 1e-6;
        rippleVoltageV = vPeak / (p.acFrequencyHz * p.loadResistorOhm * cFarad);
        rippleVoltageV = Math.min(vPeak * 0.9, rippleVoltageV);
        rectifiedVdc = vPeak - rippleVoltageV / 2;
      }
    } else {
      rectifiedVdc = (2 * vPeak) / Math.PI;
      if (p.isCapacitorActive && p.filterCapacitanceUf > 0) {
        const cFarad = p.filterCapacitanceUf * 1e-6;
        rippleVoltageV = vPeak / (2 * p.acFrequencyHz * p.loadResistorOhm * cFarad);
        rippleVoltageV = Math.min(vPeak * 0.9, rippleVoltageV);
        rectifiedVdc = vPeak - rippleVoltageV / 2;
      }
    }

    let ibMicroA = p.baseCurrentMicroA;
    let icMilliA = 0;
    let ieMilliA = 0;
    let vceVolts = p.vccSupplyV;
    let voltageGainAv = 0;
    let transistorOperatingStateEn = 'Cutoff (Switch OFF)';
    let transistorOperatingStateAr = 'منطقة القطع (مفتاح مفتوح)';
    let notGateOutputBit: 0 | 1 = 1;

    const rcOhm = p.collectorResistorKOhm * 1000;
    const maxSatIcMa = (p.vccSupplyV - 0.2) / (rcOhm / 1000);

    if (p.transistorMode === 'inverter_not_gate') {
      if (p.digitalInputBit === 0) {
        ibMicroA = 0;
        icMilliA = 0;
        ieMilliA = 0;
        vceVolts = p.vccSupplyV;
        notGateOutputBit = 1;
        transistorOperatingStateEn = 'Cutoff (Switch OFF)';
        transistorOperatingStateAr = 'قطع: الدخل 0 ← الخرج 1 (مفتاح مفتوح)';
      } else {
        ibMicroA = 80;
        icMilliA = maxSatIcMa;
        ieMilliA = icMilliA + ibMicroA / 1000;
        vceVolts = 0.2;
        notGateOutputBit = 0;
        transistorOperatingStateEn = 'Saturation (Switch ON)';
        transistorOperatingStateAr = 'تشبع: الدخل 1 ← الخرج 0 (مفتاح مغلق)';
      }
    } else {
      const theoreticalIcMa = (ibMicroA * p.currentGainBeta) / 1000;
      if (ibMicroA === 0) {
        icMilliA = 0;
        vceVolts = p.vccSupplyV;
        transistorOperatingStateEn = 'Cutoff (OFF)';
        transistorOperatingStateAr = 'منطقة القطع';
      } else if (theoreticalIcMa >= maxSatIcMa) {
        icMilliA = maxSatIcMa;
        vceVolts = 0.2;
        transistorOperatingStateEn = 'Saturation (Clipping)';
        transistorOperatingStateAr = 'منطقة التشبع (تشوه القمم)';
      } else {
        icMilliA = theoreticalIcMa;
        vceVolts = p.vccSupplyV - (icMilliA / 1000) * rcOhm;
        transistorOperatingStateEn = 'Active Linear Region';
        transistorOperatingStateAr = 'المنطقة الفعالة (تكبير خطي)';
      }
      ieMilliA = icMilliA + ibMicroA / 1000;
      voltageGainAv = -Math.round((p.currentGainBeta * rcOhm) / 1200);
    }

    const alphaCurrentGain = p.currentGainBeta / (p.currentGainBeta + 1);

    const target = TARGET_ELEMENT_DATA[p.targetElement];
    const duaneHuntLambdaMinNm = 1.23984193 / p.acceleratingVoltageKv;
    const duaneHuntLambdaMinAngstrom = duaneHuntLambdaMinNm * 10;
    const maxPhotonEnergyKev = p.acceleratingVoltageKv;
    const areCharacteristicLinesExcited = p.acceleratingVoltageKv >= target.kShellThresholdKev;
    const totalXRayIntensityAu =
      Math.pow(p.acceleratingVoltageKv / 20, 2) * target.atomicNumberZ * (p.filamentCurrentA / 2.0);

    return {
      barrierPotentialV,
      diodeCurrentMa,
      depletionWidthRatio,
      rectifiedVdc: Math.max(0, rectifiedVdc),
      rippleVoltageV: Math.max(0, rippleVoltageV),
      diodeConductionStateEn: diodeStateEn,
      diodeConductionStateAr: diodeStateAr,

      ibMicroA,
      icMilliA,
      ieMilliA,
      alphaCurrentGain,
      vceVolts: Math.max(0.2, vceVolts),
      voltageGainAv,
      transistorOperatingStateEn,
      transistorOperatingStateAr,
      notGateOutputBit,

      duaneHuntLambdaMinAngstrom,
      duaneHuntLambdaMinNm,
      maxPhotonEnergyKev,
      kAlphaLambdaAngstrom: target.kAlphaAngstrom,
      kBetaLambdaAngstrom: target.kBetaAngstrom,
      areCharacteristicLinesExcited,
      totalXRayIntensityAu,
    };
  }, []);

  const definition: LabDefinition<ElectronicsParams, ElectronicsSimState> = useMemo(
    () => ({
      id: 'semiconductor-electronics-lab',
      subject: 'physics',
      chapterRef: 'Ch. 6 & 8: Atomic Spectra & Modern Electronics',
      titleEn: 'Semiconductors, Transistors & Coolidge X-Ray Lab',
      titleAr: 'مختبر أشباه الموصلات والترانزستور وأنبوبة كولدج',
      subtitleEn: 'p-n Diodes, AC Rectification, BJT 180° Inverter & X-Ray Spectra',
      subtitleAr: 'الوصلة الثنائية، تقويم التيار، الترانزستور العاكس، وطيف الأشعة السينية',
      taglineEn: 'Shockley p-n Junction, BJT Transistor & Coolidge Vacuum Tube',
      taglineAr: 'وصلة شوكلي الثنائية، الترانزستور ثنائي القطبية، وأنبوبة كولدج المفرغة',
      objectives: [
        {
          id: 'obj-pn-barrier',
          textEn: 'Verify the internal barrier potential (0.7V for Si, 0.3V for Ge) and forward/reverse bias conduction',
          textAr: 'التحقق من الجهد الحاجز الداخلي (0.7 فولت للسيليكون و0.3 فولت للجرمانيوم) وخصائص التوصيل الأمامي والعكسي',
        },
        {
          id: 'obj-bjt-current',
          textEn: 'Demonstrate current conservation (Ie = Ib + Ic) and amplification factor (β = Ic / Ib)',
          textAr: 'إثبات قانون بقاء الشحنة بالترانزستور (Ie = Ib + Ic) ومعامل تكبير التيار (β = Ic / Ib)',
        },
        {
          id: 'obj-bjt-inverter',
          textEn: 'Analyze the transistor as an electronic NOT gate inverter (0V in gives Vcc out; high in gives 0.2V saturation)',
          textAr: 'تحليل عمل الترانزستور كبوابة نفي عاكسة (الدخل المنخفض يعطي خرجاً عالي Vcc، والدخل العالي يقوده للتشبع 0.2V)',
        },
        {
          id: 'obj-coolidge-duane-hunt',
          textEn: 'Confirm the Duane-Hunt law for minimum continuous X-ray wavelength (λmin = hc / eV)',
          textAr: 'إثبات قانون دوين-هانت لأدنى طول موجي في الطيف المستمر للأشعة السينية (λmin = hc / eV)',
        },
      ],
      defaultParams: INITIAL_ELECTRONICS_PARAMS,
      paramSchema: ELECTRONICS_PARAMETER_SCHEMA,
      presets: ELECTRONICS_PRESETS,
      poePrompts: ELECTRONICS_POE_PROMPTS,
      initialState: INITIAL_ELECTRONICS_STATE,
    }),
    []
  );

  const lab = useVirtualLab({ definition });
  const { params, setParams } = lab;

  const state = useMemo(() => calculateSimState(params), [calculateSimState, params]);

  const handleModuleChange = (newModule: ElectronicsModule) => {
    setParams((prev) => ({ ...prev, module: newModule }));
  };

  const telemetry: LabTelemetryMetric[] = useMemo(() => {
    if (params.module === 'diode_rectifier') {
      return [
        {
          id: 'barrier_pot',
          labelEn: 'Barrier Potential (Vbi)',
          labelAr: 'الجهد الحاجز (Vbi)',
          value: state.barrierPotentialV.toFixed(2),
          unit: 'V',
          status: 'optimal',
        },
        {
          id: 'diode_current',
          labelEn: 'Diode Current (ID)',
          labelAr: 'تيار الوصلة (ID)',
          value: state.diodeCurrentMa.toFixed(2),
          unit: 'mA',
          status: state.diodeCurrentMa > 0 ? 'normal' : 'warning',
        },
        {
          id: 'diode_state',
          labelEn: 'Conduction State',
          labelAr: 'حالة التوصيل',
          value: isArabic ? state.diodeConductionStateAr : state.diodeConductionStateEn,
          status: 'normal',
        },
        {
          id: 'rectified_vdc',
          labelEn: 'Rectified Output (Vdc)',
          labelAr: 'متوسط جهد الخرج المقوم',
          value: state.rectifiedVdc.toFixed(2),
          unit: 'V',
          status: 'normal',
        },
      ];
    } else if (params.module === 'transistor_bjt') {
      return [
        {
          id: 'base_current',
          labelEn: 'Base Current (Ib)',
          labelAr: 'تيار القاعدة (Ib)',
          value: state.ibMicroA.toFixed(1),
          unit: 'μA',
          status: 'normal',
        },
        {
          id: 'collector_current',
          labelEn: 'Collector Current (Ic)',
          labelAr: 'تيار المجمع (Ic)',
          value: state.icMilliA.toFixed(2),
          unit: 'mA',
          status: 'normal',
        },
        {
          id: 'collector_voltage',
          labelEn: 'Output Voltage (Vce)',
          labelAr: 'فرق جهد الخرج (Vce)',
          value: state.vceVolts.toFixed(2),
          unit: 'V',
          status: 'normal',
        },
        {
          id: 'alpha_distribution',
          labelEn: 'Distribution Ratio (α)',
          labelAr: 'نسبة التوزيع (α)',
          value: state.alphaCurrentGain.toFixed(4),
          status: 'optimal',
        },
      ];
    } else {
      return [
        {
          id: 'lambda_min_ang',
          labelEn: 'Duane-Hunt Cutoff (λmin)',
          labelAr: 'أدنى طول موجي (λmin)',
          value: state.duaneHuntLambdaMinAngstrom.toFixed(3),
          unit: 'Å',
          status: 'optimal',
        },
        {
          id: 'max_photon_kev',
          labelEn: 'Max Photon Energy',
          labelAr: 'أقصى طاقة فوتون (Emax)',
          value: state.maxPhotonEnergyKev.toFixed(1),
          unit: 'keV',
          status: 'normal',
        },
        {
          id: 'char_excited',
          labelEn: 'Characteristic X-Rays',
          labelAr: 'الطيف الخطي المميز',
          value: state.areCharacteristicLinesExcited
            ? isArabic
              ? 'مُثار (خطوط Kα و Kβ)'
              : 'Excited (Kα & Kβ Lines)'
            : isArabic
            ? 'غير مُثار (V < عتبة K)'
            : 'Not Excited (V < K Threshold)',
          status: state.areCharacteristicLinesExcited ? 'optimal' : 'warning',
        },
        {
          id: 'k_alpha',
          labelEn: 'K-Alpha Peak (λ)',
          labelAr: 'طول قمة Kα',
          value: state.kAlphaLambdaAngstrom.toFixed(2),
          unit: 'Å',
          status: 'normal',
        },
      ];
    }
  }, [params.module, state, isArabic]);

  const dmmReading: DMMReading = useMemo(() => {
    const vDc =
      params.module === 'diode_rectifier'
        ? params.diodeMode === 'iv_curve'
          ? params.biasVoltageV
          : state.rectifiedVdc
        : params.module === 'transistor_bjt'
        ? state.vceVolts
        : params.acceleratingVoltageKv * 1000;

    const vAc = params.module === 'diode_rectifier' ? params.acAmplitudeV / Math.SQRT2 : 0;
    const iDc =
      params.module === 'diode_rectifier'
        ? state.diodeCurrentMa / 1000
        : params.module === 'transistor_bjt'
        ? state.icMilliA / 1000
        : state.totalXRayIntensityAu * 1e-4;

    return {
      voltageDC: vDc,
      voltageAC: vAc,
      currentDC: iDc,
      resistance: params.loadResistorOhm,
      continuityBeep: state.diodeConductionStateEn === 'Forward Conduction',
    };
  }, [params, state]);

  const oscCh1: WaveformSignal = useMemo(() => {
    return {
      amplitude: params.acAmplitudeV,
      frequency: params.acFrequencyHz,
      phaseDeg: 0,
      type: 'sine',
    };
  }, [params.acAmplitudeV, params.acFrequencyHz]);

  const oscCh2: WaveformSignal = useMemo(() => {
    return {
      amplitude: state.rectifiedVdc,
      frequency: params.rectifierType === 'full_wave_bridge' ? params.acFrequencyHz * 2 : params.acFrequencyHz,
      phaseDeg: params.module === 'transistor_bjt' ? 180 : 0,
      type: 'sine',
    };
  }, [state.rectifiedVdc, params.rectifierType, params.acFrequencyHz, params.module]);

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
    simRef.current.electronPhase = (simRef.current.electronPhase + 0.05) % (Math.PI * 2);

    ctx.save();
    ctx.clearRect(0, 0, width, height);

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

    ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.18)' : 'rgba(30, 41, 59, 0.4)';
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (params.module === 'diode_rectifier') {
      const cx = width / 2;
      const cy = height * 0.44;

      if (params.diodeMode === 'iv_curve') {
        const boxW = Math.min(width * 0.75, 480);
        const boxH = 140;
        const boxX = cx - boxW / 2;
        const boxY = cy - 70;

        ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, boxH, 12);
        ctx.fill();
        ctx.stroke();

        const pWidth = (boxW / 2) * (1 - (state.depletionWidthRatio * 0.25));
        ctx.fillStyle = isLight ? 'rgba(239, 68, 68, 0.12)' : 'rgba(239, 68, 68, 0.2)';
        ctx.fillRect(boxX, boxY, pWidth, boxH);

        const nWidth = (boxW / 2) * (1 - (state.depletionWidthRatio * 0.25));
        ctx.fillStyle = isLight ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.2)';
        ctx.fillRect(boxX + boxW - nWidth, boxY, nWidth, boxH);

        const depW = boxW - pWidth - nWidth;
        const depX = boxX + pWidth;
        const depGrad = ctx.createLinearGradient(depX, boxY, depX + depW, boxY);
        depGrad.addColorStop(0, 'rgba(239, 68, 68, 0.35)');
        depGrad.addColorStop(0.5, 'rgba(234, 179, 8, 0.45)');
        depGrad.addColorStop(1, 'rgba(59, 130, 246, 0.35)');
        ctx.fillStyle = depGrad;
        ctx.fillRect(depX, boxY, depW, boxH);

        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(depX, boxY);
        ctx.lineTo(depX, boxY + boxH);
        ctx.moveTo(depX + depW, boxY);
        ctx.lineTo(depX + depW, boxY + boxH);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ef4444';
        ctx.fillText(isArabic ? 'المنطقة الموجبة P (فجوات)' : 'P-Type (Holes Majority)', boxX + pWidth / 2, boxY + 28);

        ctx.fillStyle = '#38bdf8';
        ctx.fillText(isArabic ? 'المنطقة السالبة N (إلكترونات)' : 'N-Type (Electrons Majority)', boxX + boxW - nWidth / 2, boxY + 28);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(
          isArabic
            ? `منطقة النضوب (الحاجز الجهدي ${state.barrierPotentialV}V)`
            : `Depletion Layer (Barrier ${state.barrierPotentialV}V)`,
          cx,
          boxY + boxH - 12
        );

        const holeCount = 8;
        for (let i = 0; i < holeCount; i++) {
          const hx = boxX + 25 + ((i * 37) % (pWidth - 50));
          const hy = boxY + 45 + ((i * 29) % (boxH - 80));
          drawGlowingParticle(ctx, hx, hy, 6, '#ef4444', 8);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 9px sans-serif';
          ctx.fillText('+', hx, hy + 3);
        }

        const electronCount = 8;
        for (let i = 0; i < electronCount; i++) {
          const ex = boxX + boxW - nWidth + 25 + ((i * 37) % (nWidth - 50));
          const ey = boxY + 45 + ((i * 29) % (boxH - 80));
          drawGlowingParticle(ctx, ex, ey, 5, '#38bdf8', 8);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 9px sans-serif';
          ctx.fillText('-', ex, ey + 3);
        }

        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(depX + depW - 15, cy);
        ctx.lineTo(depX + 15, cy);
        ctx.stroke();
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.moveTo(depX + 10, cy);
        ctx.lineTo(depX + 22, cy - 6);
        ctx.lineTo(depX + 22, cy + 6);
        ctx.closePath();
        ctx.fill();
        ctx.font = '11px sans-serif';
        ctx.fillText(isArabic ? 'مجال الحاجز الداخلي Ei' : 'Internal Field Ei', cx, cy - 8);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(boxX, cy);
        ctx.lineTo(boxX - 40, cy);
        ctx.lineTo(boxX - 40, boxY + boxH + 40);
        ctx.lineTo(cx - 30, boxY + boxH + 40);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(boxX + boxW, cy);
        ctx.lineTo(boxX + boxW + 40, cy);
        ctx.lineTo(boxX + boxW + 40, boxY + boxH + 40);
        ctx.lineTo(cx + 30, boxY + boxH + 40);
        ctx.stroke();

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(
          `${params.biasVoltageV >= 0 ? '+' : ''}${params.biasVoltageV.toFixed(2)} V`,
          cx,
          boxY + boxH + 65
        );

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx - 10, boxY + boxH + 25);
        ctx.lineTo(cx - 10, boxY + boxH + 55);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx + 10, boxY + boxH + 32);
        ctx.lineTo(cx + 10, boxY + boxH + 48);
        ctx.stroke();
      } else {
        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic
            ? params.rectifierType === 'full_wave_bridge'
              ? 'دائرة مقوم قنطري موجي كامل (Full-Wave Bridge Rectifier)'
              : 'دائرة مقوم نصف موجي أحادي الدايود (Half-Wave Rectifier)'
            : params.rectifierType === 'full_wave_bridge'
            ? '4-Diode Full-Wave Bridge Rectifier'
            : 'Single-Diode Half-Wave Rectifier',
          cx,
          cy - 90
        );

        const bSize = 65;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy - bSize);
        ctx.lineTo(cx + bSize, cy);
        ctx.lineTo(cx, cy + bSize);
        ctx.lineTo(cx - bSize, cy);
        ctx.closePath();
        ctx.stroke();

        const drawDiode = (dx: number, dy: number, angle: number) => {
          ctx.save();
          ctx.translate(dx, dy);
          ctx.rotate(angle);
          ctx.fillStyle = '#0284c7';
          ctx.beginPath();
          ctx.moveTo(-10, -8);
          ctx.lineTo(10, 0);
          ctx.lineTo(-10, 8);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(10, -9);
          ctx.lineTo(10, 9);
          ctx.stroke();
          ctx.restore();
        };

        drawDiode(cx - bSize / 2, cy - bSize / 2, -Math.PI / 4);
        drawDiode(cx + bSize / 2, cy - bSize / 2, Math.PI / 4);
        drawDiode(cx - bSize / 2, cy + bSize / 2, -3 * Math.PI / 4);
        drawDiode(cx + bSize / 2, cy + bSize / 2, 3 * Math.PI / 4);

        const capX = cx + bSize + 70;
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx + bSize, cy);
        ctx.lineTo(capX, cy);
        ctx.lineTo(capX, cy - 35);
        ctx.moveTo(capX, cy);
        ctx.lineTo(capX, cy + 35);
        ctx.stroke();

        ctx.strokeStyle = params.isCapacitorActive ? '#10b981' : '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(capX - 8, cy - 18);
        ctx.lineTo(capX - 8, cy + 18);
        ctx.moveTo(capX + 8, cy - 18);
        ctx.lineTo(capX + 8, cy + 18);
        ctx.stroke();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = params.isCapacitorActive ? '#10b981' : '#64748b';
        ctx.fillText(`C = ${params.filterCapacitanceUf} μF`, capX, cy + 34);

        const resX = capX + 70;
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(capX, cy - 35);
        ctx.lineTo(resX, cy - 35);
        ctx.lineTo(resX, cy - 18);
        ctx.moveTo(capX, cy + 35);
        ctx.lineTo(resX, cy + 35);
        ctx.lineTo(resX, cy + 18);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(resX, cy - 18);
        ctx.lineTo(resX - 6, cy - 10);
        ctx.lineTo(resX + 6, cy);
        ctx.lineTo(resX - 6, cy + 10);
        ctx.lineTo(resX, cy + 18);
        ctx.stroke();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(`RL = ${params.loadResistorOhm} Ω`, resX, cy + 42);
      }
    } else if (params.module === 'transistor_bjt') {
      const cx = width / 2;
      const cy = height * 0.44;

      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.textAlign = 'center';
      ctx.fillText(
        isArabic
          ? params.transistorMode === 'amplifier'
            ? 'مكبر الترانزستور بالباعث المشترك (CE Amplifier - 180° Inversion)'
            : 'الترانزستور كمفتاح عاكس منطقي (Electronic Inverter / NOT Gate)'
          : params.transistorMode === 'amplifier'
          ? 'Common-Emitter BJT Small-Signal Amplifier (180° Phase Shift)'
          : 'Transistor as an Electronic Inverter (NOT Gate Switch)',
        cx,
        cy - 100
      );

      const tRadius = 46;
      ctx.strokeStyle = isLight ? '#475569' : '#64748b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, tRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.7)' : 'rgba(15, 23, 42, 0.7)';
      ctx.fill();

      const barX = cx - 12;
      ctx.strokeStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(barX, cy - 26);
      ctx.lineTo(barX, cy + 26);
      ctx.stroke();

      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(barX, cy);
      ctx.lineTo(barX - 45, cy);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(barX, cy - 14);
      ctx.lineTo(cx + 20, cy - 32);
      ctx.lineTo(cx + 20, cy - 65);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(barX, cy + 14);
      ctx.lineTo(cx + 20, cy + 32);
      ctx.lineTo(cx + 20, cy + 65);
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(cx + 17, cy + 29);
      ctx.lineTo(cx + 7, cy + 25);
      ctx.lineTo(cx + 14, cy + 18);
      ctx.closePath();
      ctx.fill();

      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('B (Base)', barX - 58, cy + 4);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('C (Collector)', cx + 20, cy - 74);
      ctx.fillStyle = '#10b981';
      ctx.fillText('E (Emitter)', cx + 20, cy + 82);

      const rcTop = cy - 120;
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx + 20, cy - 65);
      ctx.lineTo(cx + 20, rcTop + 35);
      ctx.stroke();

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx + 20, rcTop + 35);
      ctx.lineTo(cx + 14, rcTop + 25);
      ctx.lineTo(cx + 26, rcTop + 15);
      ctx.lineTo(cx + 14, rcTop + 5);
      ctx.lineTo(cx + 20, rcTop);
      ctx.stroke();

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(`Rc = ${params.collectorResistorKOhm} kΩ`, cx + 64, rcTop + 18);

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 30, rcTop);
      ctx.lineTo(cx + 70, rcTop);
      ctx.stroke();
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`+Vcc = ${params.vccSupplyV}V`, cx + 75, rcTop - 6);

      const outX = cx + 110;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx + 20, cy - 50);
      ctx.lineTo(outX, cy - 50);
      ctx.stroke();

      const isOutputHigh = state.notGateOutputBit === 1 || state.vceVolts > 4.0;
      ctx.fillStyle = isOutputHigh ? '#10b981' : '#475569';
      ctx.beginPath();
      ctx.arc(outX + 20, cy - 50, 10, 0, Math.PI * 2);
      ctx.fill();
      if (isOutputHigh) {
        drawGlowingParticle(ctx, outX + 20, cy - 50, 12, '#10b981', 12);
      }

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = isOutputHigh ? '#10b981' : '#64748b';
      ctx.fillText(
        params.transistorMode === 'inverter_not_gate'
          ? `Vout = ${state.vceVolts.toFixed(1)}V (Bit: ${state.notGateOutputBit})`
          : `Vce = ${state.vceVolts.toFixed(2)}V`,
        outX + 20,
        cy - 30
      );

      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx + 20, cy + 65);
      ctx.lineTo(cx + 20, cy + 105);
      ctx.stroke();
      for (let g = 0; g < 3; g++) {
        ctx.beginPath();
        ctx.moveTo(cx + 20 - (14 - g * 5), cy + 105 + g * 5);
        ctx.lineTo(cx + 20 + (14 - g * 5), cy + 105 + g * 5);
        ctx.stroke();
      }
    } else if (params.module === 'coolidge_xray') {
      const cx = width / 2;
      const cy = height * 0.38;

      const tubeW = Math.min(width * 0.75, 460);
      const tubeH = 110;
      const tubeX = cx - tubeW / 2;
      const tubeY = cy - tubeH / 2;

      ctx.strokeStyle = isLight ? '#94a3b8' : '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.4)' : 'rgba(15, 23, 42, 0.5)';
      ctx.beginPath();
      ctx.roundRect(tubeX, tubeY, tubeW, tubeH, 30);
      ctx.fill();
      ctx.stroke();

      const filX = tubeX + 45;
      const filY = cy;
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(filX, filY, 14, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();
      const filHeat = params.filamentCurrentA / 6.0;
      drawGlowingParticle(ctx, filX, filY, 18 * filHeat, '#f97316', 15 * filHeat);

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#f97316';
      ctx.textAlign = 'center';
      ctx.fillText(isArabic ? 'فتيلة الكاثود (-)' : 'Heated Filament (-)', filX, tubeY - 10);

      const anodeX = tubeX + tubeW - 70;
      const anodeY = cy;
      drawMetallicCylinder(ctx, anodeX, anodeY - 35, 45, 70, 'copper', 'horizontal');

      const target = TARGET_ELEMENT_DATA[params.targetElement];
      ctx.fillStyle = target.colorHex;
      ctx.beginPath();
      ctx.moveTo(anodeX - 10, anodeY - 30);
      ctx.lineTo(anodeX - 25, anodeY + 30);
      ctx.lineTo(anodeX - 10, anodeY + 30);
      ctx.closePath();
      ctx.fill();

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = target.colorHex;
      ctx.fillText(
        isArabic ? `هدف ${target.nameAr} (+)` : `${target.nameEn} Target (+)`,
        anodeX + 5,
        tubeY - 10
      );

      const beamStartX = filX + 15;
      const beamEndX = anodeX - 18;
      const beamSpeed = 120 + params.acceleratingVoltageKv * 2;
      const electronCount = 14;

      for (let i = 0; i < electronCount; i++) {
        const ex = beamStartX + (((t * beamSpeed + i * 35) % (beamEndX - beamStartX)));
        const ey = cy + Math.sin(t * 8 + i) * 5;
        drawGlowingParticle(ctx, ex, ey, 4, '#38bdf8', 6);
      }

      drawVolumetricBeam(
        ctx,
        anodeX - 18,
        cy + 10,
        cx,
        cy + tubeH + 20,
        '#a855f7',
        4,
        18,
        0
      );

      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#c084fc';
      ctx.fillText(
        isArabic
          ? `حزمة الأشعة السينية (أدنى طول موجي: ${state.duaneHuntLambdaMinAngstrom.toFixed(3)} Å)`
          : `X-Ray Cone (Duane-Hunt Cutoff: ${state.duaneHuntLambdaMinAngstrom.toFixed(3)} Å)`,
        cx,
        cy + tubeH + 35
      );

      const plotX = tubeX;
      const plotY = height * 0.73;
      const plotW = tubeW;
      const plotH = height * 0.22;

      ctx.fillStyle = isLight ? '#ffffff' : '#090d16';
      ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(plotX, plotY, plotW, plotH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(plotX + 35, plotY + 10);
      ctx.lineTo(plotX + 35, plotY + plotH - 22);
      ctx.lineTo(plotX + plotW - 15, plotY + plotH - 22);
      ctx.stroke();

      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(isArabic ? 'الشدة I' : 'Intensity I', plotX + 22, plotY + 18);
      ctx.fillText(isArabic ? 'الطول الموجي λ (Å)' : 'Wavelength λ (Å)', plotX + plotW - 60, plotY + plotH - 8);

      const lambdaMin = state.duaneHuntLambdaMinAngstrom;
      const maxLambda = Math.max(3.0, lambdaMin + 2.5);
      const mapX = (lam: number) => plotX + 35 + ((lam / maxLambda) * (plotW - 55));
      const mapY = (val: number) => plotY + plotH - 22 - (val * (plotH - 35));

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();

      let started = false;
      for (let l = 0.05; l <= maxLambda; l += 0.02) {
        if (l < lambdaMin) continue;
        const intensity = Math.max(
          0,
          (params.targetElement === 'tungsten' ? 1.0 : 0.7) *
            ((1 / lambdaMin) - (1 / l)) *
            Math.exp(-1.2 * (l - lambdaMin)) *
            4.5
        );
        const px = mapX(l);
        const py = mapY(Math.min(0.9, intensity));
        if (!started) {
          ctx.moveTo(px, mapY(0));
          ctx.lineTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      if (state.areCharacteristicLinesExcited) {
        const kA = target.kAlphaAngstrom;
        const kB = target.kBetaAngstrom;

        if (kA >= lambdaMin && kA <= maxLambda) {
          const kax = mapX(kA);
          ctx.strokeStyle = '#ec4899';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(kax, mapY(0));
          ctx.lineTo(kax, mapY(0.95));
          ctx.stroke();
          ctx.fillStyle = '#ec4899';
          ctx.fillText('Kα', kax - 6, mapY(0.98));
        }

        if (kB >= lambdaMin && kB <= maxLambda) {
          const kbx = mapX(kB);
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(kbx, mapY(0));
          ctx.lineTo(kbx, mapY(0.8));
          ctx.stroke();
          ctx.fillStyle = '#a855f7';
          ctx.fillText('Kβ', kbx - 6, mapY(0.83));
        }
      }
    }

    ctx.restore();
  };

  return (
    <div className="space-y-4">
      <div
        className={`p-2 rounded-2xl border flex items-center justify-between flex-wrap gap-2 ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/90 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => handleModuleChange('diode_rectifier')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              params.module === 'diode_rectifier'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : isLight
                ? 'text-slate-700 hover:bg-slate-200'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{isArabic ? 'الوصلة الثنائية والتقويم' : 'p-n Diode & Rectifier'}</span>
          </button>

          <button
            onClick={() => handleModuleChange('transistor_bjt')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              params.module === 'transistor_bjt'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                : isLight
                ? 'text-slate-700 hover:bg-slate-200'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{isArabic ? 'الترانزستور والمفتاح العاكس' : 'BJT Transistor & Inverter'}</span>
          </button>

          <button
            onClick={() => handleModuleChange('coolidge_xray')}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              params.module === 'coolidge_xray'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/30'
                : isLight
                ? 'text-slate-700 hover:bg-slate-200'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isArabic ? 'أنبوبة كولدج وطيف أشعة إكس' : 'Coolidge Tube & X-Rays'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {params.module === 'diode_rectifier' && (
            <div className="flex items-center gap-1 bg-slate-800/40 p-1 rounded-xl border border-slate-700/50">
              <button
                onClick={() => setParams((p) => ({ ...p, diodeMode: 'iv_curve' }))}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  params.diodeMode === 'iv_curve' ? 'bg-blue-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'المنحنى والبلورة' : 'Crystal & I-V'}
              </button>
              <button
                onClick={() => setParams((p) => ({ ...p, diodeMode: 'rectifier' }))}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  params.diodeMode === 'rectifier' ? 'bg-blue-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'تقويم التيار' : 'AC Rectifier'}
              </button>
            </div>
          )}

          {params.module === 'transistor_bjt' && (
            <div className="flex items-center gap-1 bg-slate-800/40 p-1 rounded-xl border border-slate-700/50">
              <button
                onClick={() => setParams((p) => ({ ...p, transistorMode: 'amplifier' }))}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  params.transistorMode === 'amplifier' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'مكبر الإشارات' : 'AC Amplifier'}
              </button>
              <button
                onClick={() => setParams((p) => ({ ...p, transistorMode: 'inverter_not_gate' }))}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  params.transistorMode === 'inverter_not_gate' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? 'مفتاح عاكس NOT' : 'NOT Gate Inverter'}
              </button>
            </div>
          )}

          {params.module === 'coolidge_xray' && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">
                {isArabic ? 'مادة الهدف:' : 'Target:'}
              </span>
              <select
                value={params.targetElement}
                onChange={(e) => setParams((p) => ({ ...p, targetElement: e.target.value as TargetElement }))}
                className="min-h-[44px] bg-slate-800 text-white text-xs sm:text-sm font-bold px-3 py-2 rounded-xl border border-slate-700 cursor-pointer"
              >
                <option value="tungsten">Tungsten (W, Z=74)</option>
                <option value="molybdenum">Molybdenum (Mo, Z=42)</option>
                <option value="copper">Copper (Cu, Z=29)</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <VirtualLabShell
        definition={definition}
        lang={lang}
        theme={theme}
        lab={lab}
        telemetry={telemetry}
        multimeterReading={dmmReading}
        oscilloscopeCh1={oscCh1}
        oscilloscopeCh2={oscCh2}
      >
        <CanvasSimulationViewport
          id="semiconductor-electronics-viewport"
          lang={lang}
          theme={theme}
          aspectRatio="aspect-[16/10]"
          minHeight={440}
          animated={true}
          onRender={handleRenderCanvas}
        />
      </VirtualLabShell>
    </div>
  );
};
