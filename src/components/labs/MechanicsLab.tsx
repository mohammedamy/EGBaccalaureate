import React, { useCallback, useMemo, useState } from 'react';
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
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Layers,
  ChevronDown,
  Activity,
  Compass,
  ArrowUpRight,
  Lightbulb,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type MechanicsModule =
  | 'friction_plane'
  | 'general_equilibrium'
  | 'moments_beam'
  | 'center_of_gravity';

export type SurfaceMaterialPreset =
  | 'wood_wood'
  | 'rubber_concrete'
  | 'steel_steel'
  | 'teflon_steel'
  | 'custom';

export type BaseLaminaShape = 'rectangle' | 'triangle' | 'disc';
export type CutoutHoleShape = 'none' | 'circle' | 'square';

export interface MechanicsParams {
  module: MechanicsModule;
  // Module 1: Friction & Limiting Equilibrium
  planeType: 'horizontal' | 'inclined';
  inclineAngleDeg: number; // 0 to 75 deg
  bodyWeightN: number; // 10 to 200 N
  pullForceP: number; // 0 to 250 N
  pullAngleAlphaDeg: number; // -30 to 60 deg relative to plane
  surfaceMaterial: SurfaceMaterialPreset;
  frictionCoeffMuS: number; // 0.05 to 1.20
  // Module 2: General Equilibrium & Leaning Ladder
  ladderLengthM: number; // 2.0 to 10.0 m
  ladderWeightN: number; // 50 to 400 N
  ladderAngleDeg: number; // 25 to 80 deg with ground
  climberWeightN: number; // 300 to 1000 N
  climberPosFraction: number; // 0.0 to 1.0 (fraction of length)
  groundMuS: number; // 0.10 to 0.90
  equilibriumApparatus: 'ladder' | 'hinged_rod';
  rodCableAngleDeg: number; // 15 to 75 deg
  // Module 3: Moments & Beam Supports
  beamLengthM: number; // 6 to 14 m
  beamWeightN: number; // 50 to 300 N
  supportAX: number; // 0 to 4 m
  supportBX: number; // 6 to 14 m
  pointLoad1N: number; // 0 to 400 N
  pointLoad1X: number; // 0 to 14 m
  pointLoad2N: number; // 0 to 400 N
  pointLoad2X: number; // 0 to 14 m
  distributedLoadWm: number; // 0 to 50 N/m
  // Module 4: Center of Gravity & Negative Mass
  baseShape: BaseLaminaShape;
  baseWidthCm: number; // 8 to 24 cm
  baseHeightCm: number; // 6 to 20 cm
  cutoutShape: CutoutHoleShape;
  cutoutRadiusCm: number; // 1 to 6 cm
  cutoutPosXCm: number; // relative to base center
  cutoutPosYCm: number;
  isPlumbLineSuspended: boolean;
  suspensionCorner: 'top_left' | 'top_right' | 'bottom_left';
}

export const MATERIAL_PRESETS: Record<
  SurfaceMaterialPreset,
  { nameEn: string; nameAr: string; muS: number; descriptionEn: string; descriptionAr: string }
> = {
  wood_wood: {
    nameEn: 'Wood on Rough Wood',
    nameAr: 'خشب على خشب خشن',
    muS: 0.45,
    descriptionEn: 'Standard contact in secondary textbook statics exercises.',
    descriptionAr: 'التماس الكلاسيكي في مسائل الاستاتيكا بالثانوية العامة.',
  },
  rubber_concrete: {
    nameEn: 'Rubber Tyre on Dry Concrete',
    nameAr: 'مطاط على خرسانة جافة',
    muS: 0.85,
    descriptionEn: 'High-traction interface with large limiting friction angle λ = 40.4°.',
    descriptionAr: 'احتكاك عالٍ يمنح زاوية احتكاك كبرى λ = 40.4° تمنع الانزلاق.',
  },
  steel_steel: {
    nameEn: 'Mild Steel on Steel (Dry)',
    nameAr: 'صلب على صلب (جاف)',
    muS: 0.25,
    descriptionEn: 'Moderate industrial friction with limiting angle λ = 14.0°.',
    descriptionAr: 'احتكاك صناعي معتدل بزاوية احتكاك λ = 14.0°.',
  },
  teflon_steel: {
    nameEn: 'PTFE (Teflon) on Steel',
    nameAr: 'تفلون على صلب أملس',
    muS: 0.06,
    descriptionEn: 'Ultra-low friction interface approaching an ideal smooth plane.',
    descriptionAr: 'معامل احتكاك ضئيل جداً يقترب من المستوى الأملس التام.',
  },
  custom: {
    nameEn: 'Custom / Variable Surface',
    nameAr: 'معامل احتكاك مخصص',
    muS: 0.50,
    descriptionEn: 'Manually adjust the friction coefficient slider.',
    descriptionAr: 'التحكم اليدوي المباشر في قيمة معامل الاحتكاك.',
  },
};

export const DEFAULT_MECHANICS_PARAMS: MechanicsParams = {
  module: 'friction_plane',
  planeType: 'inclined',
  inclineAngleDeg: 30,
  bodyWeightN: 60,
  pullForceP: 35,
  pullAngleAlphaDeg: 0,
  surfaceMaterial: 'wood_wood',
  frictionCoeffMuS: 0.45,
  // Ladder
  ladderLengthM: 6.0,
  ladderWeightN: 200,
  ladderAngleDeg: 60,
  climberWeightN: 700,
  climberPosFraction: 0.6,
  groundMuS: 0.35,
  equilibriumApparatus: 'ladder',
  rodCableAngleDeg: 35,
  // Beam
  beamLengthM: 10.0,
  beamWeightN: 120,
  supportAX: 1.5,
  supportBX: 8.5,
  pointLoad1N: 180,
  pointLoad1X: 3.5,
  pointLoad2N: 240,
  pointLoad2X: 6.5,
  distributedLoadWm: 15,
  // Center of Gravity
  baseShape: 'disc',
  baseWidthCm: 16,
  baseHeightCm: 12,
  cutoutShape: 'circle',
  cutoutRadiusCm: 4,
  cutoutPosXCm: 4,
  cutoutPosYCm: 0,
  isPlumbLineSuspended: false,
  suspensionCorner: 'top_left',
};

export const MECHANICS_PARAM_SCHEMA: LabParameterSchema<MechanicsParams> = {
  module: {
    key: 'module',
    type: 'select',
    labelEn: 'Mechanics Apparatus Module',
    labelAr: 'وحدة التجارب الميكانيكية',
    defaultValue: 'friction_plane',
    options: [
      { value: 'friction_plane', labelEn: '1. Friction & Limiting Planes (الاحتكاك على المستويات)', labelAr: '١. الاحتكاك على المستويات الأفقية والمائلة' },
      { value: 'general_equilibrium', labelEn: '2. General Equilibrium & Ladder (الاتزان العام والسلم)', labelAr: '٢. الاتزان العام واتزان السلم المستند' },
      { value: 'moments_beam', labelEn: '3. Moments & Beam Supports (العزوم وردود الأفعال)', labelAr: '٣. العزوم ونظرية فارينون وردود أفعال الركائز' },
      { value: 'center_of_gravity', labelEn: '4. Center of Gravity & Holes (مركز الثقل والكتلة السالبة)', labelAr: '٤. مركز الثقل وطريقة الكتلة السالبة' },
    ],
  },
  planeType: {
    key: 'planeType',
    type: 'select',
    labelEn: 'Plane Geometry',
    labelAr: 'شكل المستوى',
    defaultValue: 'inclined',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane',
    options: [
      { value: 'horizontal', labelEn: 'Horizontal Rough Plane', labelAr: 'مستوى أفقي خشن' },
      { value: 'inclined', labelEn: 'Inclined Rough Plane', labelAr: 'مستوى مائل خشن' },
    ],
  },
  inclineAngleDeg: {
    key: 'inclineAngleDeg',
    type: 'number',
    labelEn: 'Incline Angle θ',
    labelAr: 'زاوية ميل المستوى θ',
    defaultValue: 30,
    min: 0,
    max: 75,
    step: 1,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane' && p.planeType === 'inclined',
  },
  bodyWeightN: {
    key: 'bodyWeightN',
    type: 'number',
    labelEn: 'Body Weight W',
    labelAr: 'وزن الجسم W',
    defaultValue: 60,
    min: 10,
    max: 200,
    step: 5,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane',
  },
  pullForceP: {
    key: 'pullForceP',
    type: 'number',
    labelEn: 'Applied Pulling Force P',
    labelAr: 'قوة الشد أو السحب P',
    defaultValue: 35,
    min: 0,
    max: 250,
    step: 1,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane',
  },
  pullAngleAlphaDeg: {
    key: 'pullAngleAlphaDeg',
    type: 'number',
    labelEn: 'Pull Direction Angle α',
    labelAr: 'زاوية الشد مع المستوى α',
    defaultValue: 0,
    min: -30,
    max: 60,
    step: 1,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane',
  },
  surfaceMaterial: {
    key: 'surfaceMaterial',
    type: 'select',
    labelEn: 'Surface Interface Material',
    labelAr: 'مادة سطحي التماس',
    defaultValue: 'wood_wood',
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane',
    options: [
      { value: 'wood_wood', labelEn: 'Wood on Wood (μs = 0.45)', labelAr: 'خشب على خشب (μs = 0.45)' },
      { value: 'rubber_concrete', labelEn: 'Rubber on Concrete (μs = 0.85)', labelAr: 'مطاط على خرسانة (μs = 0.85)' },
      { value: 'steel_steel', labelEn: 'Steel on Steel (μs = 0.25)', labelAr: 'صلب على صلب (μs = 0.25)' },
      { value: 'teflon_steel', labelEn: 'Teflon on Steel (μs = 0.06)', labelAr: 'تفلون على صلب (μs = 0.06)' },
      { value: 'custom', labelEn: 'Custom Slider', labelAr: 'مخصص يدوياً' },
    ],
  },
  frictionCoeffMuS: {
    key: 'frictionCoeffMuS',
    type: 'number',
    labelEn: 'Static Friction Coefficient μs',
    labelAr: 'معامل الاحتكاك السكوني μs',
    defaultValue: 0.45,
    min: 0.05,
    max: 1.2,
    step: 0.01,
    visibleIf: (p: MechanicsParams) => p.module === 'friction_plane' && p.surfaceMaterial === 'custom',
  },
  ladderLengthM: {
    key: 'ladderLengthM',
    type: 'number',
    labelEn: 'Ladder Length L',
    labelAr: 'طول السلم L',
    defaultValue: 6.0,
    min: 2.0,
    max: 10.0,
    step: 0.5,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  ladderWeightN: {
    key: 'ladderWeightN',
    type: 'number',
    labelEn: 'Ladder Weight W',
    labelAr: 'وزن السلم W',
    defaultValue: 200,
    min: 50,
    max: 400,
    step: 10,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  ladderAngleDeg: {
    key: 'ladderAngleDeg',
    type: 'number',
    labelEn: 'Ladder Ground Angle θ',
    labelAr: 'زاوية ميل السلم مع الأرض θ',
    defaultValue: 60,
    min: 25,
    max: 80,
    step: 1,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  climberWeightN: {
    key: 'climberWeightN',
    type: 'number',
    labelEn: 'Climber Weight Wc',
    labelAr: 'وزن الشخص الصاعد Wc',
    defaultValue: 700,
    min: 200,
    max: 1000,
    step: 25,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  climberPosFraction: {
    key: 'climberPosFraction',
    type: 'number',
    labelEn: 'Climber Position Ratio (x/L)',
    labelAr: 'موضع الصعود النسبي (x/L)',
    defaultValue: 0.6,
    min: 0.0,
    max: 1.0,
    step: 0.05,
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  groundMuS: {
    key: 'groundMuS',
    type: 'number',
    labelEn: 'Ground Friction μs',
    labelAr: 'معامل احتكاك الأرضية μs',
    defaultValue: 0.35,
    min: 0.1,
    max: 0.9,
    step: 0.02,
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'ladder',
  },
  equilibriumApparatus: {
    key: 'equilibriumApparatus',
    type: 'select',
    labelEn: 'Equilibrium System',
    labelAr: 'نظام الاتزان',
    defaultValue: 'ladder',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium',
    options: [
      { value: 'ladder', labelEn: 'Leaning Ladder (Smooth Wall, Rough Ground)', labelAr: 'سلم مستند على حائط رأسي أملس وأرض خشنة' },
      { value: 'hinged_rod', labelEn: 'Hinged Rod with Cable Tension', labelAr: 'قضيب متصل بمفصل ومثبت بحبل شد' },
    ],
  },
  rodCableAngleDeg: {
    key: 'rodCableAngleDeg',
    type: 'number',
    labelEn: 'Cable Tension Angle β',
    labelAr: 'زاوية ميل حبل الشد β',
    defaultValue: 35,
    min: 15,
    max: 75,
    step: 1,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'general_equilibrium' && p.equilibriumApparatus === 'hinged_rod',
  },
  beamLengthM: {
    key: 'beamLengthM',
    type: 'number',
    labelEn: 'Beam Total Length',
    labelAr: 'طول القضيب/الجسر',
    defaultValue: 10.0,
    min: 6.0,
    max: 14.0,
    step: 1.0,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  beamWeightN: {
    key: 'beamWeightN',
    type: 'number',
    labelEn: 'Beam Own Weight',
    labelAr: 'الوزن الذاتي للقضيب',
    defaultValue: 120,
    min: 40,
    max: 300,
    step: 10,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  supportAX: {
    key: 'supportAX',
    type: 'number',
    labelEn: 'Support A Position',
    labelAr: 'موضع الركيزة أ',
    defaultValue: 1.5,
    min: 0.0,
    max: 4.0,
    step: 0.5,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  supportBX: {
    key: 'supportBX',
    type: 'number',
    labelEn: 'Support B Position',
    labelAr: 'موضع الركيزة ب',
    defaultValue: 8.5,
    min: 6.0,
    max: 14.0,
    step: 0.5,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  pointLoad1N: {
    key: 'pointLoad1N',
    type: 'number',
    labelEn: 'Point Load P₁',
    labelAr: 'الحمل المركز الأول P₁',
    defaultValue: 180,
    min: 0,
    max: 400,
    step: 10,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  pointLoad1X: {
    key: 'pointLoad1X',
    type: 'number',
    labelEn: 'Load P₁ Position x₁',
    labelAr: 'موضع الحمل P₁',
    defaultValue: 3.5,
    min: 0,
    max: 14,
    step: 0.5,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  pointLoad2N: {
    key: 'pointLoad2N',
    type: 'number',
    labelEn: 'Point Load P₂',
    labelAr: 'الحمل المركز الثاني P₂',
    defaultValue: 240,
    min: 0,
    max: 400,
    step: 10,
    unit: 'N',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  pointLoad2X: {
    key: 'pointLoad2X',
    type: 'number',
    labelEn: 'Load P₂ Position x₂',
    labelAr: 'موضع الحمل P₂',
    defaultValue: 6.5,
    min: 0,
    max: 14,
    step: 0.5,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  distributedLoadWm: {
    key: 'distributedLoadWm',
    type: 'number',
    labelEn: 'Uniform Load w',
    labelAr: 'الحمل الموزع بانتظام w',
    defaultValue: 15,
    min: 0,
    max: 50,
    step: 5,
    unit: 'N/m',
    visibleIf: (p: MechanicsParams) => p.module === 'moments_beam',
  },
  baseShape: {
    key: 'baseShape',
    type: 'select',
    labelEn: 'Base Lamina Geometry',
    labelAr: 'شكل الصفيحة الرقيقة',
    defaultValue: 'disc',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
    options: [
      { value: 'disc', labelEn: 'Circular Disc (قرص دائري)', labelAr: 'قرص دائري منتظم' },
      { value: 'rectangle', labelEn: 'Rectangular Plate (صفيحة مستطيلة)', labelAr: 'صفيحة مستطيلة' },
      { value: 'triangle', labelEn: 'Right-Angled Triangle (مثلث قائم)', labelAr: 'صفيحة مثلثة قائمة' },
    ],
  },
  baseWidthCm: {
    key: 'baseWidthCm',
    type: 'number',
    labelEn: 'Base Width / Diameter (cm)',
    labelAr: 'عرض الصفيحة / القطر (سم)',
    defaultValue: 16,
    min: 8,
    max: 24,
    step: 1,
    unit: 'cm',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  baseHeightCm: {
    key: 'baseHeightCm',
    type: 'number',
    labelEn: 'Base Height (cm)',
    labelAr: 'ارتفاع الصفيحة (سم)',
    defaultValue: 12,
    min: 6,
    max: 20,
    step: 1,
    unit: 'cm',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  cutoutShape: {
    key: 'cutoutShape',
    type: 'select',
    labelEn: 'Cutout Hole (Negative Mass)',
    labelAr: 'الجزء المقتطع (الكتلة السالبة)',
    defaultValue: 'circle',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
    options: [
      { value: 'none', labelEn: 'No Cutout (Solid Body)', labelAr: 'جسم مصمت بدون اقتطاع' },
      { value: 'circle', labelEn: 'Circular Hole (ثقب دائري)', labelAr: 'ثقب دائري' },
      { value: 'square', labelEn: 'Square Cutout (تجويف مربع)', labelAr: 'تجويف مربع' },
    ],
  },
  cutoutRadiusCm: {
    key: 'cutoutRadiusCm',
    type: 'number',
    labelEn: 'Hole Radius / Side (cm)',
    labelAr: 'نصف قطر الثقب / طول الضلع (سم)',
    defaultValue: 4,
    min: 1,
    max: 8,
    step: 0.5,
    unit: 'cm',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  cutoutPosXCm: {
    key: 'cutoutPosXCm',
    type: 'number',
    labelEn: 'Hole Center X offset (cm)',
    labelAr: 'إزاحة مركز الثقب أفقياً (سم)',
    defaultValue: 4,
    min: -8,
    max: 8,
    step: 0.5,
    unit: 'cm',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  cutoutPosYCm: {
    key: 'cutoutPosYCm',
    type: 'number',
    labelEn: 'Hole Center Y offset (cm)',
    labelAr: 'إزاحة مركز الثقب رأسياً (سم)',
    defaultValue: 0,
    min: -6,
    max: 6,
    step: 0.5,
    unit: 'cm',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  isPlumbLineSuspended: {
    key: 'isPlumbLineSuspended',
    type: 'boolean',
    labelEn: 'Show Plumb Line Suspension',
    labelAr: 'تعليق حر بخيط الشاقول',
    defaultValue: false,
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
  },
  suspensionCorner: {
    key: 'suspensionCorner',
    type: 'select',
    labelEn: 'Suspension Point',
    labelAr: 'نقطة التعليق',
    defaultValue: 'top_left',
    visibleIf: (p: MechanicsParams) => p.module === 'center_of_gravity',
    options: [
      { value: 'top_left', labelEn: 'Top-Left Point', labelAr: 'النقطة العلوية اليسرى' },
      { value: 'top_right', labelEn: 'Top-Right Point', labelAr: 'النقطة العلوية اليمنى' },
      { value: 'bottom_left', labelEn: 'Bottom-Left Origin', labelAr: 'نقطة الأصل السفلية' },
    ],
  },
};

export const MECHANICS_PRESETS: LabPreset<MechanicsParams>[] = [
  {
    id: 'verge_of_sliding_theta_lambda',
    nameEn: 'Verge of Sliding Under Weight Alone (θ = λ)',
    nameAr: 'الجسم على وشك الانزلاق تحت تأثير وزنه فقط (θ = λ)',
    descriptionEn: 'Inspect the fundamental curriculum rule: when incline angle θ equals the angle of friction λ, the body is on the verge of sliding down.',
    descriptionAr: 'فحص القاعدة المنهجية: عندما تساوي زاوية ميل المستوى زاوية الاحتكاك (θ = λ)، يكون الجسم على وشك الانزلاق لأسفل.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'friction_plane',
      planeType: 'inclined',
      inclineAngleDeg: 24,
      bodyWeightN: 80,
      pullForceP: 0,
      pullAngleAlphaDeg: 0,
      surfaceMaterial: 'wood_wood',
      frictionCoeffMuS: 0.45,
    },
  },
  {
    id: 'least_force_pull_alpha_lambda',
    nameEn: 'Least Force to Move Body on Rough Plane (α = λ)',
    nameAr: 'أقل قوة تجعل الجسم على وشك الحركة (α = λ)',
    descriptionEn: 'Verify that the pulling force P required to move a body is minimal when its inclination to the plane equals the angle of friction: P_min = W sin(θ + λ).',
    descriptionAr: 'إثبات أن أقل قوة لازمة لجعل الجسم على وشك الحركة تصنع مع المستوى زاوية تساوي زاوية الاحتكاك (α = λ).',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'friction_plane',
      planeType: 'horizontal',
      inclineAngleDeg: 0,
      bodyWeightN: 100,
      pullAngleAlphaDeg: 24,
      surfaceMaterial: 'wood_wood',
      frictionCoeffMuS: 0.45,
      pullForceP: 41,
    },
  },
  {
    id: 'ladder_slipping_ministerial_limit',
    nameEn: 'Ministerial Ladder Slipping Crisis (Climbing past x_crit)',
    nameAr: 'أزمة انزلاق السلم المستند (تجاوز نقطة الصعود الحرجة)',
    descriptionEn: 'Demonstrate how a climber advancing along the ladder increases ground friction demand until it breaches μs RA, triggering sudden slipping.',
    descriptionAr: 'محاكاة زيادة قوة الاحتكاك المطلوبة كلما صعد الشخص لأعلى، حتى تتجاوز الاحتكاك النهائي فينحدر السلم ويسقط.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'general_equilibrium',
      ladderLengthM: 6.0,
      ladderWeightN: 200,
      ladderAngleDeg: 55,
      climberWeightN: 800,
      climberPosFraction: 0.85,
      groundMuS: 0.32,
    },
  },
  {
    id: 'disc_tangent_hole_negative_mass',
    nameEn: 'Disc with Tangent Circular Hole (Shift = R/6)',
    nameAr: 'قرص دائري مقتطع منه دائرة مماسة (إزاحة مركز الثقل = نق/٦)',
    descriptionEn: 'The famous Thanaweya Amma problem: punching a circular hole of radius R/2 touching the disc perimeter shifts the centroid exactly R/6 away from center.',
    descriptionAr: 'المسألة الوزارية الشهيرة: اقتطاع قرص نصف قطره نق/٢ يمس محيط القرص الأصلي ينقل مركز الثقل مسافة نق/٦ بعيداً عن مركز التجويف.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'center_of_gravity',
      baseShape: 'disc',
      baseWidthCm: 16,
      cutoutShape: 'circle',
      cutoutRadiusCm: 4,
      cutoutPosXCm: 4,
      cutoutPosYCm: 0,
    },
  },
];

export const MECHANICS_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_area_friction_independence',
    titleEn: 'Challenge 1: Friction Independence of Contact Surface Area',
    titleAr: 'تحدي ١: استقلال قوة الاحتكاك عن مساحة سطحي التماس',
    scenarioEn: 'A solid uniform wooden rectangular block of dimensions 20 cm × 10 cm × 5 cm rests on a rough horizontal plane. The block is first placed on its largest face (20 × 10 cm), then on its smallest face (10 × 5 cm).',
    scenarioAr: 'متوازي مستطيلات خشبي منتظم أبعاده ٢٠ سم × ١٠ سم × ٥ سم موضوع على مستوى أفقي خشن. وُضع المتوازي أولاً على وجهه الأكبر (٢٠ × ١٠ سم)، ثم وُضع على وجهه الأصغر (١٠ × ٥ سم).',
    questionEn:
      'How does the limiting friction force Fs = μs R change when resting on the smaller face compared to the larger face?',
    questionAr:
      'كيف تتغير قوة الاحتكاك السكوني النهائي Fs = μs R عند وضع المتوازي على وجهه الأصغر مقارنة بوضعه على وجهه الأكبر؟',
    optionsEn: [
      'Fs remains completely unchanged because friction depends solely on the normal contact force R and material coefficient μs, not on geometric surface area.',
      'Fs increases significantly on the smaller face due to concentrated pressure digging into the rough surface.',
      'Fs decreases on the smaller face because fewer microscopic asperities make physical contact.',
      'Fs doubles because the height is greater.',
    ],
    optionsAr: [
      'تظل قوة الاحتكاك النهائي Fs ثابتة تماماً دون أي تغيير؛ لأنها تعتمد حصرياً على رد الفعل العمودي R وطبيعة المادتين (μs)، ولا تتأثر بمساحة السطح الهندسي الظاهري.',
      'تزداد قوة الاحتكاك كثيراً على الوجه الأصغر بسبب تركيز الضغط الذي يغرس النتوءات في السطح الخشن.',
      'تقل قوة الاحتكاك على الوجه الأصغر لقلة عدد النتوءات المجهرية المتلامسة.',
      'تتضاعف قوة الاحتكاك لزيادة الارتفاع الرأسي لمركز الثقل.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'According to Amontons-Coulomb laws of friction, the limiting friction force Fs = μs R is strictly independent of the nominal apparent contact surface area. While a smaller face concentrates the normal force over a smaller area increasing local pressure, the true microscopic contact area remains identical for the same total load weight, resulting in invariant friction.',
    scientificExplanationAr:
      'وفقاً لقوانين الاحتكاك الكلاسيكية (قوانين أمونتون-كولوم)، فإن قوة الاحتكاك النهائي Fs = μs R مستقلة تماماً عن مساحة سطحي التماس الظاهرية طالما بقيت القوة الضاغطة العمودية وطبيعة المادتين ثابتتين. فعلى الرغم من زيادة الضغط على المساحة الصغرى، إلا أن المساحة المجهرية الفعلية للتلامس الذري تبقى متساوية، فتظل قوة الاحتكاك ثابتة تماماً.',
  },
  {
    id: 'poe_ladder_slipping_height',
    titleEn: 'Challenge 2: Ladder Slipping Risk as Climber Ascends',
    titleAr: 'تحدي ٢: خطورة انزلاق السلم مع صعود الشخص لأعلى',
    scenarioEn: 'A uniform ladder rests with its top end against a smooth vertical wall and its lower end on rough ground (friction coefficient μs). A person begins climbing the ladder from the bottom.',
    scenarioAr: 'سلم منتظم يستند بطرفه العلوي على حائط رأسي أملس وبطرفه السفلي على أرضية أفقية خشنة (معامل احتكاكها μs). بدأ شخص في صعود السلم من أسفله.',
    questionEn:
      'Why does the risk of the ladder slipping increase progressively as the person climbs higher toward the top end?',
    questionAr:
      'علل: تزداد خطورة انزلاق السلم تدريجياً كلما صعد الشخص نحو قمة السلم؟',
    optionsEn: [
      'Taking moments about the base shows that as x increases, the required wall reaction RB increases (RB ∝ x), demanding higher ground friction F_friction = RB which eventually exceeds the limiting threshold μs RA.',
      'Because the person’s weight increases as they gain gravitational potential energy.',
      'Because the normal reaction of the ground RA decreases as the person climbs higher.',
      'Because the wall pushes downward with greater force at higher points.',
    ],
    optionsAr: [
      'بأخذ العزوم حول قاعدة السلم، كلما زادت مسافة الصعود x زاد عزم وزن الشخص، مما يستلزم زيادة رد فعل الحائط RB (RB ∝ x)، وحيث أن F_احتكاك = RB، تزداد قوة الاحتكاك المطلوبة عند الأرض حتى تتجاوز حد الاحتكاك النهائي μs RA فيحدث الانزلاق.',
      'لأن وزن الشخص يزداد تدريجياً مع زيادة طاقة وضعه التثاقلية كلما صعد لأعلى.',
      'لأن رد الفعل العمودي للأرض RA يقل كلما صعد الشخص مسافة أكبر.',
      'لأن الحائط يضغط لأسفل بقوة متزايدة عند النقاط المرتفعة.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Taking moments about base A: RB · L sin(θ) = W · (L/2) cos(θ) + Wc · x cos(θ). Since horizontal equilibrium demands ground friction F = RB, we have F = (W/2 + Wc · (x/L)) cot(θ). As climber position x increases, F strictly increases. Because vertical ground reaction RA = W + Wc remains constant throughout, limiting friction Fs = μs RA is a fixed upper ceiling. Once the required F exceeds Fs, the ladder slips catastrophically.',
    scientificExplanationAr:
      'بأخذ العزوم حول نقطة ارتكاز السلم على الأرض (أ): RB · L جا(θ) = W · (L/2) جتا(θ) + Wc · x جتا(θ). وبما أن الاتزان الأفقي يفرض أن قوة احتكاك الأرض F = RB، فإن F = (W/2 + Wc · (x/L)) ظتا(θ). وبذلك تزداد قوة الاحتكاك المطلوبة خطياً مع زيادة موضع الصعود x. وحيث أن رد الفعل الرأسي للأرض RA = W + Wc ثابت لا يتغير، فإن الحد الأقصى للاحتكاك Fs = μs RA ثابت، وعندما يتجاوز الاحتكاك المطلوب هذا الحد، ينزلق السلم حتماً.',
  },
  {
    id: 'poe_negative_mass_centroid_shift',
    titleEn: 'Challenge 3: Negative Mass Centroid Shift in a Disc',
    titleAr: 'تحدي ٣: إزاحة مركز الثقل للقرص المقتطع بطريقة الكتلة السالبة',
    scenarioEn: 'A uniform circular lamina of radius R has a circular hole of radius r = R/2 punched out such that the hole is tangent to the disc circumference at one side.',
    scenarioAr: 'صفيحة دائرية منتظمة نصف قطرها نق، اقتطع منها قرص دائري نصف قطره (نق/٢) بحيث يمس محيط الصفيحة من أحد الجوانب.',
    questionEn:
      'What is the distance that the center of gravity of the remaining lamina shifts from the original center of the disc?',
    questionAr:
      'ما مقدار المسافة التي يتحركها مركز ثقل الجزء المتبقي بعيداً عن المركز الأصلي للقرص؟',
    optionsEn: [
      'Shift = R / 6 away from the hole center (since M_net = 3/4 M and hole moment = -(1/4 M)(R/2) = -(1/8) M R).',
      'Shift = R / 2 because the hole radius is R/2.',
      'Shift = R / 4 along the axis of symmetry.',
      'Shift = R / 3 toward the center of the cutout.',
    ],
    optionsAr: [
      'الإزاحة = (نق / ٦) في الاتجاه المعاكس لمركز الثقب (لأن مساحة المتبقي = ٣/٤ الأصل، وعزم الجزء المقتطع = -(١/٤)(نق/٢) = -(١/٨) نق).',
      'الإزاحة = (نق / ٢) لأن نصف قطر الثقب يساوي نق/٢.',
      'الإزاحة = (نق / ٤) على طول محور التماثل.',
      'الإزاحة = (نق / ٣) مقترباً من مركز الثقب.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Let origin (0,0) be the original disc center. Original mass M0 ∝ πR², centroid (0,0). Cutout mass m ∝ π(R/2)² = (1/4)M0, with its center at x = R/2. By the negative mass method: X_G = [M0(0) - (1/4 M0)(R/2)] / [M0 - 1/4 M0] = [-(1/8) M0 R] / [(3/4) M0] = -(1/8)/(3/4) R = -R/6. Thus, the center of gravity shifts by exactly R/6 in the direction opposite to the hole.',
    scientificExplanationAr:
      'باعتبار مركز القرص الأصلي نقطة الأصل (٠، ٠): كتلة القرص الأصلي ك٠ ∝ ط نق²، ومركزها (٠، ٠). كتلة الجزء المقتطع ك_ثقب ∝ ط (نق/٢)² = ١/٤ ك٠، ومركزها عند س = نق/٢. بتطبيق طريقة الكتلة السالبة: س_م = [ك٠(٠) - (١/٤ ك٠)(نق/٢)] / [ك٠ - ١/٤ ك٠] = [-(١/٨) ك٠ نق] / [(٣/٤) ك٠] = -نق/٦. إذن ينتقل مركز الثقل مسافة مقدارها (نق / ٦) في الاتجاه المضاد لموضع الثقب تماماً.',
  },
];

export const MECHANICS_LAB_DEFINITION: LabDefinition<MechanicsParams, any> = {
  id: 'mechanics_statics_lab',
  subject: 'mathematics',
  titleEn: 'Statics & Classical Mechanics Virtual Laboratory',
  titleAr: 'مختبر الاستاتيكا والميكانيكا الكلاسيكية التفاعلي',
  subtitleEn: 'Friction, General Equilibrium & Negative Mass',
  subtitleAr: 'الاحتكاك على المستويات، الاتزان العام، ومركز الثقل',
  taglineEn: 'High-precision vector resolution, ladder stability and centroid solvers',
  taglineAr: 'تحليل القوى المتجهة، اتزان السلم، وإزاحة مركز الثقل بالكتلة السالبة',
  objectives: [
    {
      id: 'obj_friction_planes',
      textEn: 'Resolve forces on horizontal and inclined rough planes and determine the limiting equilibrium condition Fs = μs R.',
      textAr: 'تحليل القوى على المستويات الأفقية والمائلة الخشنة وتحديد شرط الاتزان النهائي (على وشك الحركة).',
      bloomLevel: 'apply',
    },
    {
      id: 'obj_general_equilibrium',
      textEn: 'Analyze rigid body general equilibrium (ΣFx=0, ΣFy=0, ΣMO=0) and calculate critical climbing thresholds for a leaning ladder.',
      textAr: 'تحليل الاتزان العام للأجسام الجاسئة وحساب أقصى ارتفاع آمن لصعود السلم قبل الانزلاق.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_moments_reactions',
      textEn: 'Apply Varignon theorem of moments and compute support reactions, shear forces, and overturning limits on loaded beams.',
      textAr: 'تطبيق نظرية فارينون للعزوم وحساب ردود أفعال ركائز الجسور وتحديد شروط الانقلاب.',
      bloomLevel: 'evaluate',
    },
    {
      id: 'obj_center_of_gravity',
      textEn: 'Calculate centroid coordinates using the negative mass method for laminas with cutouts and verify plumb-line suspension.',
      textAr: 'حساب إحداثيات مركز الثقل باستخدام طريقة الكتلة السالبة للصفائح ذات الثقوب والتحقق بخيط الشاقول.',
      bloomLevel: 'apply',
    },
  ],
  keyFormulas: [
    {
      id: 'formula_limiting_friction',
      labelEn: 'Limiting Friction & Angle of Friction',
      labelAr: 'الاحتكاك النهائي وزاوية الاحتكاك',
      tex: 'F_s = \\mu_s R, \\quad \\tan\\lambda = \\mu_s',
      descriptionEn: 'Limiting static friction is proportional to normal reaction; tangent of friction angle equals coefficient.',
      descriptionAr: 'قوة الاحتكاك السكوني النهائي تتناسب طردياً مع رد الفعل العمودي؛ وظل زاوية الاحتكاك يساوي المعامل.',
    },
    {
      id: 'formula_resultant_reaction',
      labelEn: 'Total Resultant Contact Reaction',
      labelAr: 'رد الفعل المحصل النهائي',
      tex: 'R\' = \\sqrt{R^2 + F_s^2} = R\\sqrt{1 + \\mu_s^2} = R\\sec\\lambda',
      descriptionEn: 'Magnitude of the total resultant reaction between two contact surfaces.',
      descriptionAr: 'مقدار رد الفعل المحصل الناشئ عن رد الفعل العمودي وقوة الاحتكاك النهائي.',
    },
    {
      id: 'formula_general_equilibrium',
      labelEn: 'Rigid Body General Equilibrium Conditions',
      labelAr: 'شروط الاتزان العام لجسم جاسيء',
      tex: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0',
      descriptionEn: 'Zero resultant forces in orthogonal directions and zero net moment about any arbitrary point.',
      descriptionAr: 'انعدام محصلة القوى في الاتجاهين المتعامدين وانعدام مجموع العزوم حول أي نقطة في المستوى.',
    },
    {
      id: 'formula_negative_mass',
      labelEn: 'Center of Gravity (Negative Mass Method)',
      labelAr: 'مركز الثقل بطريقة الكتلة السالبة',
      tex: 'X_G = \\frac{M_0 X_0 - \\sum m_i x_i}{M_0 - \\sum m_i}, \\quad Y_G = \\frac{M_0 Y_0 - \\sum m_i y_i}{M_0 - \\sum m_i}',
      descriptionEn: 'Calculation of centroid for laminas with cutouts treating removed portions as negative mass.',
      descriptionAr: 'حساب إحداثيات مركز الثقل بعد اقتطاع أجزاء باعتبار الأجزاء المزالة كتلاً سالبة.',
    },
  ],
  defaultParams: DEFAULT_MECHANICS_PARAMS,
  paramSchema: MECHANICS_PARAM_SCHEMA,
  presets: MECHANICS_PRESETS,
  poePrompts: MECHANICS_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Incline Angle / Climbing Position',
    xLabelAr: 'زاوية الميل / موضع الصعود',
    xUnit: '° / m',
    yLabelEn: 'Normal Reaction / Friction Force',
    yLabelAr: 'رد الفعل العمودي / قوة الاحتكاك',
    yUnit: 'N',
  },
};

export const MechanicsLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [dmmMode, setDmmMode] = useState<
    'normal_reaction' | 'friction_force' | 'resultant_reaction' | 'support_reactions'
  >('normal_reaction');

  const lab = useVirtualLab<MechanicsParams, Record<string, any>>({
    definition: MECHANICS_LAB_DEFINITION,
  });

  const { params, updateParam, resetParams } = lab;

  // -------------------------------------------------------------
  // PHYSICS SOLVER CALCULATIONS
  // -------------------------------------------------------------

  // MODULE 1: Friction on Planes Solver
  const frictionCalculations = useMemo(() => {
    const isHorizontal = params.planeType === 'horizontal';
    const thetaDeg = isHorizontal ? 0 : params.inclineAngleDeg;
    const thetaRad = (thetaDeg * Math.PI) / 180;
    const alphaRad = (params.pullAngleAlphaDeg * Math.PI) / 180;
    const muS = params.surfaceMaterial !== 'custom' 
      ? MATERIAL_PRESETS[params.surfaceMaterial].muS 
      : params.frictionCoeffMuS;
    const muK = 0.8 * muS;
    const lambdaRad = Math.atan(muS);
    const lambdaDeg = (lambdaRad * 180) / Math.PI;

    const W = params.bodyWeightN;
    const P = params.pullForceP;

    // Weight components
    const W_perp = W * Math.cos(thetaRad);
    const W_par = W * Math.sin(thetaRad); // pulls down the plane

    // Pull force components relative to plane
    const P_perp = P * Math.sin(alphaRad); // lifts body if positive
    const P_par = P * Math.cos(alphaRad); // pulls up the plane

    // Contact Normal Reaction
    const R = Math.max(0, W_perp - P_perp);
    const isLiftingOff = W_perp - P_perp < 0;

    // Limiting static friction
    const Fs = muS * R;

    // Driving parallel force (tends to move body)
    const netDrive = P_par - W_par;
    const tendUpward = netDrive > 0;
    const reqFriction = Math.abs(netDrive);

    let motionState: 'static_rest' | 'verge_of_motion' | 'accelerating' | 'lifted';
    let actualFriction = 0;
    let acceleration = 0;

    if (isLiftingOff) {
      motionState = 'lifted';
      actualFriction = 0;
    } else if (reqFriction < Fs - 0.2) {
      motionState = 'static_rest';
      actualFriction = reqFriction;
    } else if (Math.abs(reqFriction - Fs) <= 0.2) {
      motionState = 'verge_of_motion';
      actualFriction = Fs;
    } else {
      motionState = 'accelerating';
      const Fk = muK * R;
      actualFriction = Fk;
      const netAcceleratingForce = reqFriction - Fk;
      const massKg = W / 9.806;
      acceleration = netAcceleratingForce / massKg;
    }

    // Total Resultant Contact Reaction R'
    const R_prime = Math.sqrt(R * R + actualFriction * actualFriction);
    const contactAnglePhiDeg = R > 0 ? (Math.atan(actualFriction / R) * 180) / Math.PI : 0;

    return {
      thetaDeg,
      thetaRad,
      alphaRad,
      muS,
      muK,
      lambdaDeg,
      W,
      P,
      W_perp,
      W_par,
      P_perp,
      P_par,
      R,
      Fs,
      netDrive,
      tendUpward,
      reqFriction,
      actualFriction,
      motionState,
      acceleration,
      R_prime,
      contactAnglePhiDeg,
      isLiftingOff,
    };
  }, [params]);

  // MODULE 2: General Equilibrium & Leaning Ladder Solver
  const equilibriumCalculations = useMemo(() => {
    const L = params.ladderLengthM;
    const W = params.ladderWeightN;
    const thetaDeg = params.ladderAngleDeg;
    const thetaRad = (thetaDeg * Math.PI) / 180;
    const Wc = params.climberWeightN;
    const xFraction = Math.min(1.0, Math.max(0.0, params.climberPosFraction));
    const xM = xFraction * L;
    const muGround = params.groundMuS;

    // Vertical equilibrium: RA = W + Wc
    const RA = W + Wc;
    // Maximum possible static friction at ground
    const FsGround = muGround * RA;

    // Moments about bottom A (clockwise = counter-clockwise):
    // RB * L * sin(theta) = W * (L/2) * cos(theta) + Wc * x * cos(theta)
    const cotTheta = Math.cos(thetaRad) / Math.sin(thetaRad);
    const RB = (W / 2 + Wc * xFraction) * cotTheta;

    // Horizontal equilibrium: F_friction = RB
    const frictionDemanded = RB;
    const reqMu = RA > 0 ? frictionDemanded / RA : 0;

    // Critical climbing position x_crit where F_friction = FsGround
    // RB = FsGround => (W/2 + Wc * x_crit/L) * cotTheta = muGround * (W + Wc)
    // x_crit/L = [muGround * (W + Wc) * tan(theta) - W/2] / Wc
    const tanTheta = Math.tan(thetaRad);
    const xCritFraction = (muGround * (W + Wc) * tanTheta - W / 2) / Wc;
    const xCritM = xCritFraction * L;

    let stabilityState: 'secure' | 'verge_of_slipping' | 'slipping';
    if (frictionDemanded < FsGround - 2.0) {
      stabilityState = 'secure';
    } else if (Math.abs(frictionDemanded - FsGround) <= 2.0) {
      stabilityState = 'verge_of_slipping';
    } else {
      stabilityState = 'slipping';
    }

    // Hinged Rod Calculations
    const betaDeg = params.rodCableAngleDeg;
    const betaRad = (betaDeg * Math.PI) / 180;
    const rodWeight = params.ladderWeightN;
    // Sum MA = 0 => T * L * sin(beta) = rodWeight * L/2 => T = rodWeight / (2 sin(beta))
    const cableTensionT = rodWeight / (2 * Math.sin(betaRad));
    const hingeX = cableTensionT * Math.cos(betaRad);
    const hingeY = rodWeight - cableTensionT * Math.sin(betaRad);
    const hingeReactionR = Math.sqrt(hingeX * hingeX + hingeY * hingeY);
    const hingeAngleDeg = (Math.atan2(hingeY, hingeX) * 180) / Math.PI;

    return {
      L,
      W,
      thetaDeg,
      thetaRad,
      Wc,
      xM,
      xFraction,
      muGround,
      RA,
      FsGround,
      RB,
      frictionDemanded,
      reqMu,
      xCritFraction,
      xCritM,
      stabilityState,
      betaDeg,
      cableTensionT,
      hingeX,
      hingeY,
      hingeReactionR,
      hingeAngleDeg,
    };
  }, [params]);

  // MODULE 3: Moments & Beam Supports Solver
  const momentsCalculations = useMemo(() => {
    const L = params.beamLengthM;
    const Wbeam = params.beamWeightN;
    const wDist = params.distributedLoadWm;
    const totalDistLoad = wDist * L;
    const xA = Math.min(params.supportAX, params.supportBX - 1.0);
    const xB = Math.max(params.supportBX, xA + 1.0);

    const P1 = params.pointLoad1N;
    const x1 = Math.min(L, Math.max(0, params.pointLoad1X));
    const P2 = params.pointLoad2N;
    const x2 = Math.min(L, Math.max(0, params.pointLoad2X));

    // Sum of downward forces
    const totalDownForce = Wbeam + totalDistLoad + P1 + P2;

    // Moments about support A:
    // RB * (xB - xA) = P1 * (x1 - xA) + P2 * (x2 - xA) + (Wbeam + totalDistLoad) * (L/2 - xA)
    const spanAB = xB - xA;
    const momentAboutA =
      P1 * (x1 - xA) + P2 * (x2 - xA) + (Wbeam + totalDistLoad) * (L / 2 - xA);

    const RB = momentAboutA / spanAB;
    const RA = totalDownForce - RB;

    const isOverturningA = RA < 0;
    const isOverturningB = RB < 0;

    return {
      L,
      xA,
      xB,
      spanAB,
      P1,
      x1,
      P2,
      x2,
      Wbeam,
      wDist,
      totalDownForce,
      RA,
      RB,
      isOverturningA,
      isOverturningB,
    };
  }, [params]);

  // MODULE 4: Center of Gravity & Negative Mass Solver
  const centroidCalculations = useMemo(() => {
    const shape = params.baseShape;
    const w = params.baseWidthCm;
    const h = params.baseHeightCm;
    const cutout = params.cutoutShape;
    const rCut = params.cutoutRadiusCm;
    const dxCut = params.cutoutPosXCm;
    const dyCut = params.cutoutPosYCm;

    let baseArea = 0;
    let x0 = 0;
    let y0 = 0;

    if (shape === 'disc') {
      const R = w / 2;
      baseArea = Math.PI * R * R;
      x0 = 0; // centered at (0,0)
      y0 = 0;
    } else if (shape === 'rectangle') {
      baseArea = w * h;
      x0 = 0;
      y0 = 0;
    } else {
      // Triangle
      baseArea = 0.5 * w * h;
      x0 = (1 / 3) * (w / 2);
      y0 = (1 / 3) * (h / 2);
    }

    let cutArea = 0;
    if (cutout === 'circle') {
      cutArea = Math.PI * rCut * rCut;
    } else if (cutout === 'square') {
      cutArea = (2 * rCut) * (2 * rCut);
    }

    const netArea = Math.max(0.1, baseArea - cutArea);
    // Centroid formula: X_G = (A0 * x0 - Acut * xCut) / (A0 - Acut)
    const X_G = (baseArea * x0 - cutArea * dxCut) / netArea;
    const Y_G = (baseArea * y0 - cutArea * dyCut) / netArea;

    // Centroid shift from original origin
    const shiftDist = Math.sqrt((X_G - x0) ** 2 + (Y_G - y0) ** 2);

    return {
      shape,
      w,
      h,
      cutout,
      baseArea,
      cutArea,
      netArea,
      X_G,
      Y_G,
      shiftDist,
      x0,
      y0,
      dxCut,
      dyCut,
    };
  }, [params]);

  // -------------------------------------------------------------
  // DMM INSTRUMENT READING
  // -------------------------------------------------------------
  const dmmReading: DMMReading = useMemo(() => {
    let val = 0;
    let unit = 'N';
    let displayString = '';
    let secondaryString = '';

    switch (dmmMode) {
      case 'normal_reaction':
        val = frictionCalculations.R;
        displayString = `${val.toFixed(1)} N`;
        secondaryString = frictionCalculations.isLiftingOff ? 'LIFT-OFF HAZARD' : 'NORMAL REACTION';
        break;
      case 'friction_force':
        val = frictionCalculations.actualFriction;
        displayString = `${val.toFixed(1)} N`;
        secondaryString = `LIMITING Fs = ${frictionCalculations.Fs.toFixed(1)} N`;
        break;
      case 'resultant_reaction':
        val = frictionCalculations.R_prime;
        displayString = `${val.toFixed(1)} N`;
        secondaryString = `FRICTION ANGLE λ = ${frictionCalculations.lambdaDeg.toFixed(1)}°`;
        break;
      case 'support_reactions':
        if (params.module === 'general_equilibrium') {
          val = equilibriumCalculations.RA;
          displayString = `RA=${val.toFixed(1)} N`;
          secondaryString = `WALL RB = ${equilibriumCalculations.RB.toFixed(1)} N`;
        } else {
          val = momentsCalculations.RA;
          displayString = `RA=${val.toFixed(1)} N`;
          secondaryString = `RB = ${momentsCalculations.RB.toFixed(1)} N`;
        }
        break;
    }

    return {
      mode: 'voltage_dc',
      value: val,
      displayString,
      secondaryString,
      unit,
      voltageDC: val,
      voltageAC: 0,
      currentDC: 0,
      resistance: 0,
      continuityBeep: false,
      isOverload: false,
    };
  }, [dmmMode, frictionCalculations, equilibriumCalculations, momentsCalculations, params.module]);

  // -------------------------------------------------------------
  // DUAL-TRACE OSCILLOSCOPE SIGNALS
  // -------------------------------------------------------------
  const oscilloscopeSignals: [WaveformSignal, WaveformSignal] = useMemo(() => {
    if (params.module === 'friction_plane') {
      const angle = frictionCalculations.thetaDeg;
      const friction = frictionCalculations.actualFriction;
      return [
        {
          amplitude: angle,
          frequency: 1.0,
          phaseDeg: 0,
          type: 'sine',
          dcOffset: angle,
        },
        {
          amplitude: friction,
          frequency: 1.0,
          phaseDeg: 45,
          type: 'sine',
          dcOffset: friction,
        },
      ];
    }
    if (params.module === 'general_equilibrium') {
      const climbPos = equilibriumCalculations.xM;
      const wallReaction = equilibriumCalculations.RB;
      return [
        {
          amplitude: climbPos * 10,
          frequency: 0.5,
          phaseDeg: 0,
          type: 'triangle',
          dcOffset: climbPos * 10,
        },
        {
          amplitude: wallReaction,
          frequency: 0.5,
          phaseDeg: 0,
          type: 'triangle',
          dcOffset: wallReaction,
        },
      ];
    }
    return [
      { amplitude: 50, frequency: 1, phaseDeg: 0, type: 'sine', dcOffset: 50 },
      { amplitude: 30, frequency: 1, phaseDeg: 90, type: 'triangle', dcOffset: 30 },
    ];
  }, [params.module, frictionCalculations, equilibriumCalculations]);

  // -------------------------------------------------------------
  // HIGH-PRECISION REALISTIC 3D MECHANICS VIEWPORT RENDERING
  // -------------------------------------------------------------
  const handleRenderViewport = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number,
      time?: number
    ) => {
      const t = (time ?? performance.now()) * 0.001;

      ctx.save();
      ctx.clearRect(0, 0, width, height);

      // Grid background
      ctx.fillStyle = isLight ? '#f8fafc' : '#020617';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = isLight ? '#e2e8f0' : '#1e293b';
      ctx.lineWidth = 1;
      const gridSize = 40;
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

      // Helper for drawing sharp arrows with glowing tip
      const drawArrow = (
        fromX: number,
        fromY: number,
        toX: number,
        toY: number,
        color: string,
        label: string,
        lineWidth = 2.5
      ) => {
        const headlen = 10;
        const angle = Math.atan2(toY - fromY, toX - fromX);
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();

        drawGlowingParticle(ctx, toX, toY, 2.5, color, 6);

        if (label) {
          ctx.font = 'bold 11px monospace';
          ctx.fillStyle = color;
          const textX = toX + 12 * Math.cos(angle - Math.PI / 4);
          const textY = toY + 12 * Math.sin(angle - Math.PI / 4);
          ctx.fillText(label, textX, textY);
        }
      };

      // -------------------------------------------------------
      // 1. FRICTION & INCLINED PLANE RENDERER
      // -------------------------------------------------------
      if (params.module === 'friction_plane') {
        const pivotX = 80;
        const pivotY = height - 80;
        const planeLength = width * 0.72;
        const theta = frictionCalculations.thetaRad;

        const topX = pivotX + planeLength * Math.cos(theta);
        const topY = pivotY - planeLength * Math.sin(theta);

        // Heavy Cast-Steel Ground Bed with metric markings
        ctx.fillStyle = isLight ? '#cbd5e1' : '#1e293b';
        ctx.fillRect(pivotX - 20, pivotY, planeLength + 40, 18);
        ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(pivotX - 20, pivotY, planeLength + 40, 18);

        // Ground scale ticks
        for (let gx = pivotX; gx <= pivotX + planeLength; gx += 30) {
          ctx.beginPath();
          ctx.moveTo(gx, pivotY);
          ctx.lineTo(gx, pivotY + 5);
          ctx.stroke();
        }

        // Heavy Incline Plane Wedge
        const wedgeGrad = ctx.createLinearGradient(pivotX, topY, topX, pivotY);
        wedgeGrad.addColorStop(0, isLight ? 'rgba(226, 232, 240, 0.9)' : 'rgba(30, 41, 59, 0.85)');
        wedgeGrad.addColorStop(1, isLight ? 'rgba(203, 213, 225, 0.6)' : 'rgba(15, 23, 42, 0.7)');
        ctx.fillStyle = wedgeGrad;
        ctx.beginPath();
        ctx.moveTo(pivotX, pivotY);
        ctx.lineTo(topX, topY);
        ctx.lineTo(topX, pivotY);
        ctx.closePath();
        ctx.fill();

        // 3D Metallic Pivot Hinge at base
        drawMetallicCylinder(ctx, pivotX - 8, pivotY - 8, 16, 16, 'brass');

        // Upper End Low-Friction Pulley (3D Ball-Bearing Wheel)
        drawMetallicCylinder(ctx, topX - 8, topY - 18, 22, 22, 'steel');
        // Pulley axle pin
        drawMetallicCylinder(ctx, topX + 1, topY - 9, 4, 4, 'brass');

        // Rotating pulley spokes if accelerating
        if (frictionCalculations.motionState === 'accelerating') {
          const spokeAngle = t * 6;
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(topX + 3 - 8 * Math.cos(spokeAngle), topY - 7 - 8 * Math.sin(spokeAngle));
          ctx.lineTo(topX + 3 + 8 * Math.cos(spokeAngle), topY - 7 + 8 * Math.sin(spokeAngle));
          ctx.stroke();
        }

        // Inclined Board Surface with Aluminum Edge Guide
        ctx.strokeStyle = isLight ? '#475569' : '#94a3b8';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(pivotX, pivotY);
        ctx.lineTo(topX, topY);
        ctx.stroke();

        // Metric ticks along incline
        for (let i = 0; i <= 20; i++) {
          const frac = i / 20;
          const ix = pivotX + frac * (topX - pivotX);
          const iy = pivotY + frac * (topY - pivotY);
          const nx = Math.sin(theta) * 6;
          const ny = Math.cos(theta) * 6;
          ctx.beginPath();
          ctx.moveTo(ix, iy);
          ctx.lineTo(ix + nx, iy + ny);
          ctx.stroke();
        }

        // Angle theta arc
        if (frictionCalculations.thetaDeg > 0) {
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(pivotX, pivotY, 45, 0, -theta, true);
          ctx.stroke();
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`θ = ${frictionCalculations.thetaDeg}°`, pivotX + 52, pivotY - 12);
        }

        // Body on the plane (Calculated with smooth continuous 60 FPS motion if accelerating)
        let slideOffset = 0;
        if (frictionCalculations.motionState === 'accelerating') {
          slideOffset = ((t * frictionCalculations.acceleration * 25) % 90) - 45;
          if (frictionCalculations.tendUpward) slideOffset = -slideOffset;
        }

        const boxDist = Math.max(planeLength * 0.2, Math.min(planeLength * 0.8, planeLength * 0.52 + slideOffset));
        const boxCenterX = pivotX + boxDist * Math.cos(theta);
        const boxCenterY = pivotY - boxDist * Math.sin(theta);
        const boxW = 72;
        const boxH = 48;

        ctx.save();
        ctx.translate(boxCenterX, boxCenterY);
        ctx.rotate(-theta);

        // 3D Shaded Block Body based on Material
        if (params.surfaceMaterial === 'steel_steel') {
          drawMetallicCylinder(ctx, -boxW / 2, -boxH, boxW, boxH, 'steel', 'horizontal');
        } else if (params.surfaceMaterial === 'wood_wood') {
          const woodGrad = ctx.createLinearGradient(-boxW / 2, -boxH, boxW / 2, 0);
          woodGrad.addColorStop(0, '#92400e');
          woodGrad.addColorStop(0.5, '#b45309');
          woodGrad.addColorStop(1, '#78350f');
          ctx.fillStyle = woodGrad;
          ctx.fillRect(-boxW / 2, -boxH, boxW, boxH);
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 2;
          ctx.strokeRect(-boxW / 2, -boxH, boxW, boxH);
        } else {
          // Rubber / Custom
          const rGrad = ctx.createLinearGradient(-boxW / 2, -boxH, boxW / 2, 0);
          rGrad.addColorStop(0, '#1e293b');
          rGrad.addColorStop(0.7, '#334155');
          rGrad.addColorStop(1, '#0f172a');
          ctx.fillStyle = rGrad;
          ctx.fillRect(-boxW / 2, -boxH, boxW, boxH);
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 2;
          ctx.strokeRect(-boxW / 2, -boxH, boxW, boxH);
        }

        // Brass eyelet bolt on top right of box
        drawMetallicCylinder(ctx, boxW / 2 - 4, -boxH / 2 - 4, 8, 8, 'brass');

        // Body mass label
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${frictionCalculations.W} N`, 0, -boxH / 2 + 4);
        ctx.restore();

        // Connecting Braided Cable to Pulley & Hanging Weight
        const eyeX = boxCenterX + (boxW / 2) * Math.cos(theta);
        const eyeY = boxCenterY - (boxW / 2) * Math.sin(theta) - (boxH / 2) * Math.cos(theta);
        const pulleyRimX = topX + 3;
        const pulleyRimY = topY - 7;

        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(eyeX, eyeY);
        ctx.lineTo(pulleyRimX, pulleyRimY);
        // Vertical hanging cable over pulley
        const hangY = Math.min(height - 40, topY + 80);
        ctx.lineTo(pulleyRimX + 11, hangY);
        ctx.stroke();

        // 3D Hanging Brass Weight on Cable
        drawMetallicCylinder(ctx, pulleyRimX + 4, hangY, 14, 20, 'brass', 'vertical');

        // FORCES VECTORS (Drawn in unrotated world coordinates)
        const cX = boxCenterX;
        const cY = boxCenterY - (boxH / 2) * Math.cos(theta);

        // Center particle
        drawGlowingParticle(ctx, cX, cY, 4, '#38bdf8', 6);

        // Weight W (strictly downward)
        const scaleF = 0.9;
        drawArrow(cX, cY, cX, cY + frictionCalculations.W * scaleF, '#ef4444', `W = ${frictionCalculations.W}N`);

        // Normal reaction R (perpendicular to plane upwards)
        const normAngle = -theta - Math.PI / 2;
        const R_len = frictionCalculations.R * scaleF;
        drawArrow(
          cX,
          cY,
          cX + R_len * Math.cos(normAngle),
          cY + R_len * Math.sin(normAngle),
          '#06b6d4',
          `R = ${frictionCalculations.R.toFixed(1)}N`
        );

        // Pull force P
        if (frictionCalculations.P > 0) {
          const pAngle = -theta - frictionCalculations.alphaRad;
          const P_len = frictionCalculations.P * scaleF;
          drawArrow(
            cX,
            cY,
            cX + P_len * Math.cos(pAngle),
            cY + P_len * Math.sin(pAngle),
            '#a855f7',
            `P = ${frictionCalculations.P}N`
          );
        }

        // Friction force Fr (parallel to plane, opposes motion)
        if (frictionCalculations.actualFriction > 0) {
          const frDirection = frictionCalculations.tendUpward
            ? Math.PI - theta // points down the plane
            : -theta; // points up the plane
          const Fr_len = frictionCalculations.actualFriction * scaleF;
          drawArrow(
            cX,
            cY,
            cX + Fr_len * Math.cos(frDirection),
            cY + Fr_len * Math.sin(frDirection),
            '#f97316',
            `Fr = ${frictionCalculations.actualFriction.toFixed(1)}N`
          );
        }

        // Status badge
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle =
          frictionCalculations.motionState === 'verge_of_motion'
            ? '#f59e0b'
            : frictionCalculations.motionState === 'accelerating'
            ? '#ef4444'
            : '#10b981';
        const statusText =
          frictionCalculations.motionState === 'static_rest'
            ? isArabic
              ? '✓ اتزان سكوني تام (Fr < Fs)'
              : '✓ Static Equilibrium (Fr < Fs)'
            : frictionCalculations.motionState === 'verge_of_motion'
            ? isArabic
              ? '⚠️ على وشك الحركة (اتزان نهائي Fs = μs R)'
              : '⚠️ On the Verge of Motion (Limiting Fs = μs R)'
            : isArabic
            ? `⚡ حركة متسارعة (عجلة = ${frictionCalculations.acceleration.toFixed(2)} م/ث²)`
            : `⚡ Accelerated Sliding (a = ${frictionCalculations.acceleration.toFixed(2)} m/s²)`;
        ctx.fillText(statusText, 30, 40);
      }

      // -------------------------------------------------------
      // 2. GENERAL EQUILIBRIUM & LEANING LADDER RENDERER
      // -------------------------------------------------------
      else if (params.module === 'general_equilibrium') {
        const wallX = width * 0.72;
        const groundY = height - 70;
        const ladderLengthPx = 340;
        const theta = equilibriumCalculations.thetaRad;

        const baseA_X = wallX - ladderLengthPx * Math.cos(theta);
        const baseA_Y = groundY;
        const topB_X = wallX;
        const topB_Y = groundY - ladderLengthPx * Math.sin(theta);

        // Ground Bed with cross-hatch texture
        ctx.fillStyle = isLight ? '#e2e8f0' : '#1e293b';
        ctx.fillRect(30, groundY, width - 60, 24);
        ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(30, groundY, width - 60, 24);

        // Smooth vertical wall with brick texture
        const wallGrad = ctx.createLinearGradient(wallX, 0, wallX + 50, 0);
        wallGrad.addColorStop(0, '#0284c7');
        wallGrad.addColorStop(1, '#0369a1');
        ctx.fillStyle = wallGrad;
        ctx.fillRect(wallX, 50, 40, groundY - 50);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(wallX, 50, 40, groundY - 50);

        // 3D Ladder Rails (Dual extruded channels)
        const railOffset = 8;
        const normAngle = theta + Math.PI / 2;
        const ox = Math.cos(normAngle) * railOffset;
        const oy = Math.sin(normAngle) * railOffset;

        // Rail 1
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(baseA_X - ox, baseA_Y - oy);
        ctx.lineTo(topB_X - ox, topB_Y - oy);
        ctx.stroke();

        // Rail 2
        ctx.beginPath();
        ctx.moveTo(baseA_X + ox, baseA_Y + oy);
        ctx.lineTo(topB_X + ox, topB_Y + oy);
        ctx.stroke();

        // 3D Cylindrical Extruded Rungs
        const rungs = 12;
        for (let i = 1; i < rungs; i++) {
          const frac = i / rungs;
          const rx = baseA_X + frac * (topB_X - baseA_X);
          const ry = baseA_Y + frac * (topB_Y - baseA_Y);
          drawMetallicCylinder(ctx, rx - ox, ry - oy, railOffset * 2, 4, 'brass', 'horizontal');
        }

        // Rubber non-slip feet at base A
        drawMetallicCylinder(ctx, baseA_X - 10, baseA_Y - 4, 20, 8, 'steel', 'horizontal');

        // Climber position along ladder
        const climberX = baseA_X + equilibriumCalculations.xFraction * (topB_X - baseA_X);
        const climberY = baseA_Y + equilibriumCalculations.xFraction * (topB_Y - baseA_Y);

        // Climber figure (helmet, torso, limbs)
        drawMetallicCylinder(ctx, climberX - 6, climberY - 32, 12, 12, 'brass');
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(climberX - 8, climberY - 20, 16, 20);

        // Climber Weight Vector
        drawArrow(climberX, climberY, climberX, climberY + 60, '#ef4444', `Wc = ${equilibriumCalculations.Wc}N`);

        // Ladder Center of Gravity & Weight Vector
        const ladderMidX = (baseA_X + topB_X) / 2;
        const ladderMidY = (baseA_Y + topB_Y) / 2;
        drawGlowingParticle(ctx, ladderMidX, ladderMidY, 4, '#f59e0b', 8);
        drawArrow(ladderMidX, ladderMidY, ladderMidX, ladderMidY + 45, '#f59e0b', `W = ${equilibriumCalculations.W}N`);

        // Wall normal reaction RB (pure horizontal leftward)
        drawArrow(topB_X, topB_Y, topB_X - 60, topB_Y, '#06b6d4', `RB = ${equilibriumCalculations.RB.toFixed(1)}N`);

        // Ground reactions at A: RA (vertical up) and Friction (horizontal rightward)
        drawArrow(baseA_X, baseA_Y, baseA_X, baseA_Y - 65, '#10b981', `RA = ${equilibriumCalculations.RA}N`);
        drawArrow(baseA_X, baseA_Y, baseA_X + 55, baseA_Y, '#f97316', `F = ${equilibriumCalculations.frictionDemanded.toFixed(1)}N`);

        // Status banner
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle =
          equilibriumCalculations.stabilityState === 'secure'
            ? '#10b981'
            : equilibriumCalculations.stabilityState === 'verge_of_slipping'
            ? '#f59e0b'
            : '#ef4444';
        const ladderMsg =
          equilibriumCalculations.stabilityState === 'secure'
            ? isArabic
              ? '✓ السلم في حالة اتزان عام مستقر (F_احتكاك < Fs)'
              : '✓ Ladder in Stable Equilibrium (F_friction < Fs)'
            : equilibriumCalculations.stabilityState === 'verge_of_slipping'
            ? isArabic
              ? '⚠️ السلم على وشك الانزلاق! (وصل الاحتكاك للحد النهائي)'
              : '⚠️ Ladder on the Verge of Slipping (F_friction = Fs)!'
            : isArabic
            ? '🚨 انزلاق وسقوط السلم! (تجاوز الاحتكاك المطلوب القيمة العظمى)'
            : '🚨 Unstable Slipping! (Demanded friction exceeded μs RA)';
        ctx.fillText(ladderMsg, 30, 40);

        // Critical climbing limit notation
        ctx.font = '11px monospace';
        ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
        ctx.fillText(
          `x_crit = ${equilibriumCalculations.xCritM.toFixed(2)} m (Current x = ${equilibriumCalculations.xM.toFixed(2)} m)`,
          30,
          65
        );
      }

      // -------------------------------------------------------
      // 3. MOMENTS & BEAM SUPPORTS RENDERER
      // -------------------------------------------------------
      else if (params.module === 'moments_beam') {
        const beamY = height * 0.45;
        const leftMargin = 70;
        const beamPx = width - 140;
        const scaleM = beamPx / momentsCalculations.L;

        // 3D Heavy Structural Steel I-Beam
        drawMetallicCylinder(ctx, leftMargin, beamY - 12, beamPx, 24, 'steel', 'horizontal');
        ctx.strokeStyle = isLight ? '#475569' : '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(leftMargin, beamY - 12, beamPx, 24);

        // Supports A and B (triangular rocker supports)
        const drawSupport = (xPosM: number, label: string, reactionN: number) => {
          const sX = leftMargin + xPosM * scaleM;

          // Steel triangular pedestal
          ctx.fillStyle = '#0284c7';
          ctx.beginPath();
          ctx.moveTo(sX, beamY + 12);
          ctx.lineTo(sX - 14, beamY + 34);
          ctx.lineTo(sX + 14, beamY + 34);
          ctx.closePath();
          ctx.fill();

          // Roller base pins
          drawMetallicCylinder(ctx, sX - 10, beamY + 34, 6, 6, 'brass');
          drawMetallicCylinder(ctx, sX + 4, beamY + 34, 6, 6, 'brass');

          ctx.font = 'bold 11px sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText(`${label} (${reactionN.toFixed(1)} N)`, sX, beamY + 54);

          // Upward reaction arrow with glowing tip
          drawArrow(sX, beamY + 34, sX, beamY - 24, '#10b981', '');
        };

        drawSupport(momentsCalculations.xA, isArabic ? 'ركيزة أ' : 'Support A', momentsCalculations.RA);
        drawSupport(momentsCalculations.xB, isArabic ? 'ركيزة ب' : 'Support B', momentsCalculations.RB);

        // Concentrated Load P1
        if (momentsCalculations.P1 > 0) {
          const p1X = leftMargin + momentsCalculations.x1 * scaleM;
          drawArrow(p1X, beamY - 70, p1X, beamY - 10, '#ef4444', `P₁ = ${momentsCalculations.P1}N`);
        }

        // Concentrated Load P2
        if (momentsCalculations.P2 > 0) {
          const p2X = leftMargin + momentsCalculations.x2 * scaleM;
          drawArrow(p2X, beamY - 70, p2X, beamY - 10, '#a855f7', `P₂ = ${momentsCalculations.P2}N`);
        }

        // Overturning warning
        if (momentsCalculations.isOverturningA || momentsCalculations.isOverturningB) {
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 13px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(
            isArabic ? '🚨 خطر انقلاب القضيب! (أحد ردود الأفعال سالب/انفصال)' : '🚨 Beam Overturning / Tilting Hazard (Reaction <= 0)!',
            30,
            40
          );
        } else {
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 13px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(
            isArabic ? '✓ القضيب متزن أفقياً (مجموع العزوم = ٠ ومجموع القوى = ٠)' : '✓ Beam in Static Equilibrium (ΣM = 0, ΣF = 0)',
            30,
            40
          );
        }
      }

      // -------------------------------------------------------
      // 4. CENTER OF GRAVITY & NEGATIVE MASS RENDERER
      // -------------------------------------------------------
      else if (params.module === 'center_of_gravity') {
        const cX = width / 2;
        const cY = height / 2;
        const scaleCm = 15; // pixels per cm

        ctx.save();
        ctx.translate(cX, cY);

        // Base Lamina Shape
        ctx.fillStyle = isLight ? '#93c5fd' : '#1e3a8a';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;

        if (centroidCalculations.shape === 'disc') {
          const radiusPx = (centroidCalculations.w / 2) * scaleCm;
          ctx.beginPath();
          ctx.arc(0, 0, radiusPx, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
        } else if (centroidCalculations.shape === 'rectangle') {
          const wPx = centroidCalculations.w * scaleCm;
          const hPx = centroidCalculations.h * scaleCm;
          ctx.fillRect(-wPx / 2, -hPx / 2, wPx, hPx);
          ctx.strokeRect(-wPx / 2, -hPx / 2, wPx, hPx);
        } else {
          // Triangle
          const wPx = centroidCalculations.w * scaleCm;
          const hPx = centroidCalculations.h * scaleCm;
          ctx.beginPath();
          ctx.moveTo(-wPx / 2, hPx / 2);
          ctx.lineTo(wPx / 2, hPx / 2);
          ctx.lineTo(-wPx / 2, -hPx / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }

        // Cutout Hole (Negative Mass)
        if (centroidCalculations.cutout !== 'none') {
          ctx.fillStyle = isLight ? '#f8fafc' : '#020617'; // punches background hole
          ctx.strokeStyle = '#ef4444';
          ctx.setLineDash([4, 4]);

          const hX = centroidCalculations.dxCut * scaleCm;
          const hY = -centroidCalculations.dyCut * scaleCm;

          if (centroidCalculations.cutout === 'circle') {
            const rPx = params.cutoutRadiusCm * scaleCm;
            ctx.beginPath();
            ctx.arc(hX, hY, rPx, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
          } else {
            const sidePx = params.cutoutRadiusCm * 2 * scaleCm;
            ctx.fillRect(hX - sidePx / 2, hY - sidePx / 2, sidePx, sidePx);
            ctx.strokeRect(hX - sidePx / 2, hY - sidePx / 2, sidePx, sidePx);
          }
          ctx.setLineDash([]);
        }

        // Calculated Centroid G (Red Crosshair)
        const gX = centroidCalculations.X_G * scaleCm;
        const gY = -centroidCalculations.Y_G * scaleCm;

        ctx.strokeStyle = '#f59e0b';
        ctx.fillStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(gX, gY, 6, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(gX - 12, gY);
        ctx.lineTo(gX + 12, gY);
        ctx.moveTo(gX, gY - 12);
        ctx.lineTo(gX, gY + 12);
        ctx.stroke();

        ctx.font = 'bold 12px monospace';
        ctx.fillText(
          `G (${centroidCalculations.X_G.toFixed(2)}, ${centroidCalculations.Y_G.toFixed(2)}) cm`,
          gX + 10,
          gY - 10
        );

        ctx.restore();

        // Header info
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(
          isArabic
            ? `مركز الثقل G: إزاحة = ${centroidCalculations.shiftDist.toFixed(2)} سم بطريقة الكتلة السالبة`
            : `Centroid G: Shift = ${centroidCalculations.shiftDist.toFixed(2)} cm (Negative Mass Method)`,
          30,
          40
        );
      }

      ctx.restore();
    },
    [
      isLight,
      isArabic,
      params,
      frictionCalculations,
      equilibriumCalculations,
      momentsCalculations,
      centroidCalculations,
    ]
  );

  // -------------------------------------------------------------
  // TELEMETRY METRICS
  // -------------------------------------------------------------
  const telemetryMetrics: LabTelemetryMetric[] = useMemo(() => {
    if (params.module === 'friction_plane') {
      return [
        {
          id: 'm_friction_state',
          labelEn: 'Motion Equilibrium State',
          labelAr: 'حالة الحركة والاتزان',
          value:
            frictionCalculations.motionState === 'static_rest'
              ? isArabic ? 'اتزان سكوني' : 'Static Rest'
              : frictionCalculations.motionState === 'verge_of_motion'
              ? isArabic ? 'على وشك الحركة' : 'Verge of Motion'
              : isArabic ? 'حركة متسارعة' : 'Accelerating',
          status: frictionCalculations.motionState === 'static_rest' ? 'optimal' : 'warning',
        },
        {
          id: 'm_friction_angle',
          labelEn: 'Angle of Friction (λ)',
          labelAr: 'زاوية الاحتكاك (λ)',
          value: `${frictionCalculations.lambdaDeg.toFixed(1)}°`,
          unit: 'deg',
          status: 'normal',
        },
        {
          id: 'm_limiting_fs',
          labelEn: 'Limiting Friction (Fs = μs R)',
          labelAr: 'قوة الاحتكاك النهائي (Fs)',
          value: frictionCalculations.Fs.toFixed(1),
          unit: 'N',
          status: 'normal',
        },
        {
          id: 'm_normal_r',
          labelEn: 'Normal Contact Force (R)',
          labelAr: 'رد الفعل العمودي (R)',
          value: frictionCalculations.R.toFixed(1),
          unit: 'N',
          status: 'normal',
        },
      ];
    }
    if (params.module === 'general_equilibrium') {
      return [
        {
          id: 'm_stability',
          labelEn: 'Ladder Stability Status',
          labelAr: 'حالة استقرار السلم',
          value:
            equilibriumCalculations.stabilityState === 'secure'
              ? isArabic ? 'مستقر وآمن' : 'Secure'
              : equilibriumCalculations.stabilityState === 'verge_of_slipping'
              ? isArabic ? 'على وشك الانزلاق' : 'Verge of Slipping'
              : isArabic ? 'انزلاق وسقوط' : 'Slipping Hazard',
          status: equilibriumCalculations.stabilityState === 'secure' ? 'optimal' : 'alert',
        },
        {
          id: 'm_wall_rb',
          labelEn: 'Wall Reaction (RB)',
          labelAr: 'رد فعل الحائط (RB)',
          value: equilibriumCalculations.RB.toFixed(1),
          unit: 'N',
          status: 'normal',
        },
        {
          id: 'm_ground_ra',
          labelEn: 'Ground Reaction (RA)',
          labelAr: 'رد فعل الأرض (RA)',
          value: equilibriumCalculations.RA.toFixed(1),
          unit: 'N',
          status: 'normal',
        },
        {
          id: 'm_crit_height',
          labelEn: 'Critical Climb Limit (x_crit)',
          labelAr: 'أقصى مسافة صعود آمنة (x_crit)',
          value: `${equilibriumCalculations.xCritM.toFixed(2)} m`,
          status: 'normal',
        },
      ];
    }
    if (params.module === 'moments_beam') {
      return [
        {
          id: 'm_reaction_a',
          labelEn: 'Support A Reaction (RA)',
          labelAr: 'رد فعل الركيزة أ (RA)',
          value: momentsCalculations.RA.toFixed(1),
          unit: 'N',
          status: momentsCalculations.isOverturningA ? 'alert' : 'normal',
        },
        {
          id: 'm_reaction_b',
          labelEn: 'Support B Reaction (RB)',
          labelAr: 'رد فعل الركيزة ب (RB)',
          value: momentsCalculations.RB.toFixed(1),
          unit: 'N',
          status: momentsCalculations.isOverturningB ? 'alert' : 'normal',
        },
        {
          id: 'm_total_load',
          labelEn: 'Total Vertical Load',
          labelAr: 'إجمالي الأحمال الرأسية',
          value: momentsCalculations.totalDownForce.toFixed(0),
          unit: 'N',
          status: 'normal',
        },
      ];
    }
    return [
      {
        id: 'm_centroid_x',
        labelEn: 'Centroid X_G',
        labelAr: 'إحداثي س لمركز الثقل',
        value: centroidCalculations.X_G.toFixed(2),
        unit: 'cm',
        status: 'normal',
      },
      {
        id: 'm_centroid_y',
        labelEn: 'Centroid Y_G',
        labelAr: 'إحداثي ص لمركز الثقل',
        value: centroidCalculations.Y_G.toFixed(2),
        unit: 'cm',
        status: 'normal',
      },
      {
        id: 'm_shift_dist',
        labelEn: 'Centroid Shift Distance',
        labelAr: 'مسافة إزاحة مركز الثقل',
        value: centroidCalculations.shiftDist.toFixed(2),
        unit: 'cm',
        status: 'normal',
      },
    ];
  }, [params.module, isArabic, frictionCalculations, equilibriumCalculations, momentsCalculations, centroidCalculations]);

  return (
    <VirtualLabShell
      definition={MECHANICS_LAB_DEFINITION}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab as any}
      telemetry={telemetryMetrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscilloscopeSignals[0]}
      oscilloscopeCh2={oscilloscopeSignals[1]}
      currentXValue={frictionCalculations.thetaDeg}
      currentYValue={frictionCalculations.actualFriction}
      onResetSimulation={resetParams}
    >
      <div className="space-y-6">
        {/* Module Subtabs Navigator */}
        <div
          className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
            isContrast
              ? 'bg-black border-indigo-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>{isArabic ? 'موديول الميكانيكا:' : 'Active Module:'}</span>
            </span>

            <div className="relative min-w-[270px] sm:min-w-[340px]">
              <select
                value={params.module}
                onChange={(e) => updateParam('module', e.target.value as MechanicsModule)}
                className={`w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                  isContrast
                    ? 'bg-black text-white border-indigo-400'
                    : isLight
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-slate-950 border-slate-800 text-slate-200'
                }`}
              >
                <option value="friction_plane">
                  📐 {isArabic ? '١. الاحتكاك على المستويات الأفقية والمائلة' : '1. Friction & Limiting Equilibrium on Planes'}
                </option>
                <option value="general_equilibrium">
                  🪜 {isArabic ? '٢. الاتزان العام واتزان السلم المستند' : '2. General Equilibrium & Leaning Ladder'}
                </option>
                <option value="moments_beam">
                  ⚖️ {isArabic ? '٣. العزوم ونظرية فارينون وردود أفعال الركائز' : '3. Moments, Varignon Theorem & Beam Reactions'}
                </option>
                <option value="center_of_gravity">
                  🎯 {isArabic ? '٤. مركز الثقل وطريقة الكتلة السالبة' : '4. Center of Gravity & Negative Mass Method'}
                </option>
              </select>
              <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-[10px]">
            <Compass className="w-3.5 h-3.5 text-indigo-400 ml-1.5 rtl:ml-0 rtl:mr-1.5" />
            {(['normal_reaction', 'friction_force', 'resultant_reaction', 'support_reactions'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDmmMode(mode)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  dmmMode === mode
                    ? 'bg-indigo-600 text-white font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {mode === 'normal_reaction'
                  ? isArabic ? 'رد الفعل R' : 'Normal R'
                  : mode === 'friction_force'
                  ? isArabic ? 'الاحتكاك Fr' : 'Friction Fr'
                  : mode === 'resultant_reaction'
                  ? isArabic ? "المحصل R'" : "Resultant R'"
                  : isArabic ? 'الركائز' : 'Reactions'}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulation Viewport */}
        <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950">
          <CanvasSimulationViewport
            id="mechanics-canvas-viewport"
            lang={lang}
            minHeight={420}
            animated={true}
            onRender={handleRenderViewport}
          />
        </div>

        {/* Real-time Analytical Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'قوانين الاتزان والتماس:' : 'Equilibrium Governing Laws:'}</span>
            </div>
            <p className="font-mono text-xs font-bold text-emerald-300 mt-1">
              {params.module === 'friction_plane'
                ? `Fs = μs R = ${frictionCalculations.Fs.toFixed(1)} N (λ = ${frictionCalculations.lambdaDeg.toFixed(1)}°)`
                : params.module === 'general_equilibrium'
                ? `ΣFx = 0, ΣFy = 0, ΣMA = 0 (RA = ${equilibriumCalculations.RA} N)`
                : params.module === 'moments_beam'
                ? `ΣMA = 0 ⇒ RB = ${momentsCalculations.RB.toFixed(1)} N`
                : `XG = ${centroidCalculations.X_G.toFixed(2)} cm, YG = ${centroidCalculations.Y_G.toFixed(2)} cm`}
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'رد الفعل المحصل R\':' : "Resultant Reaction R':"}</span>
            </div>
            <p className="font-mono text-xs font-bold text-indigo-300 mt-1">
              {params.module === 'friction_plane'
                ? `R' = ${frictionCalculations.R_prime.toFixed(1)} N (φ = ${frictionCalculations.contactAnglePhiDeg.toFixed(1)}°)`
                : params.module === 'general_equilibrium'
                ? `Ground Total = ${Math.sqrt(equilibriumCalculations.RA ** 2 + equilibriumCalculations.frictionDemanded ** 2).toFixed(1)} N`
                : params.module === 'moments_beam'
                ? `RA = ${momentsCalculations.RA.toFixed(1)} N, RB = ${momentsCalculations.RB.toFixed(1)} N`
                : `Shift Distance = ${centroidCalculations.shiftDist.toFixed(2)} cm`}
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'نقطة الامتحان المنهجية:' : 'Curriculum Focus:'}</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              {params.module === 'friction_plane'
                ? isArabic
                  ? 'أقل قوة P تجعل الجسم على وشك الحركة تميل بزاوية α = λ على المستوى وقيمتها W sin(θ + λ).'
                  : 'Minimum force P to initiate motion acts at angle α = λ and equals W sin(θ + λ).'
                : params.module === 'general_equilibrium'
                ? isArabic
                  ? 'يزداد الاحتكاك المطلوب كلما صعد الشخص، ويحدث الانزلاق عندما يتجاوز الاحتكاك المطلوب حد μs RA.'
                  : 'Friction demand strictly increases as the person climbs up until reaching μs RA.'
                : params.module === 'moments_beam'
                ? isArabic
                  ? 'إذا أصبح أحد ردود الأفعال سالباً، فهذا يعني انقلاب القضيب وانفصاله عن الركيزة.'
                  : 'A negative reaction indicates the beam separates from support and tips over.'
                : isArabic
                ? 'عند اقتطاع دائرة ممسة بمحيط قرص (نق/٢)، ينزاح مركز الثقل بمقدار نق/٦ بعيداً عن الثقب.'
                : 'Tangent circular cutout of radius R/2 shifts the centroid by exactly R/6.'}
            </p>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};
