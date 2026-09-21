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
  Printer,
} from 'lucide-react';
import { loadLabReportDraft, saveLabReportDraft } from '../../services/labReportService';
import { LabReportGeneratorModal } from './LabReportGeneratorModal';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type MechanicsModule =
  | 'friction_plane'
  | 'general_equilibrium'
  | 'moments_beam'
  | 'center_of_gravity'
  | 'collisions_momentum'
  | 'projectile_motion';

export type SurfaceMaterialPreset =
  | 'wood_wood'
  | 'rubber_concrete'
  | 'steel_steel'
  | 'teflon_steel'
  | 'custom';

export type BaseLaminaShape = 'rectangle' | 'triangle' | 'disc';
export type CutoutHoleShape = 'none' | 'circle' | 'square';

export type CollisionType = 'direct_1d' | 'oblique_2d';
export type DragModel = 'vacuum' | 'air_drag';

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
  // Module 5: 2D Collisions & Momentum
  collisionType: CollisionType;
  mass1Kg: number; // 0.5 to 10.0 kg
  mass2Kg: number; // 0.5 to 10.0 kg
  velocity1Ms: number; // 1.0 to 20.0 m/s
  angle1Deg: number; // -45 to 45 deg
  velocity2Ms: number; // -10.0 to 10.0 m/s
  angle2Deg: number; // 135 to 225 deg
  restitutionE: number; // 0.0 to 1.0
  impactOffsetB: number; // 0.0 to 0.8 m
  collisionTimeline: number; // -1.0 to 1.0 s
  // Module 6: Projectile Motion & Ballistics
  launchVelocityMs: number; // 10 to 80 m/s
  launchAngleDeg: number; // 5 to 85 deg
  launchHeightM: number; // 0 to 50 m
  projectileMassKg: number; // 0.2 to 10.0 kg
  dragModel: DragModel;
  dragCoeffCd: number; // 0.1 to 1.0
  projectileTimeline: number; // 0 to 100%
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
  // Collisions & Momentum
  collisionType: 'direct_1d',
  mass1Kg: 2.0,
  mass2Kg: 3.0,
  velocity1Ms: 8.0,
  angle1Deg: 0,
  velocity2Ms: -2.0,
  angle2Deg: 180,
  restitutionE: 0.8,
  impactOffsetB: 0.2,
  collisionTimeline: 0.0,
  // Projectile Motion & Ballistics
  launchVelocityMs: 35.0,
  launchAngleDeg: 45,
  launchHeightM: 10.0,
  projectileMassKg: 2.0,
  dragModel: 'vacuum',
  dragCoeffCd: 0.47,
  projectileTimeline: 50,
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
      { value: 'collisions_momentum', labelEn: '5. 2D Collisions & Momentum (التصادم في بعدين وكمية الحركة)', labelAr: '٥. التصادم في بعدين وحفظ كمية الحركة' },
      { value: 'projectile_motion', labelEn: '6. Projectile Motion & Ballistics (حركة المقذوفات ومقاومة الهواء)', labelAr: '٦. حركة المقذوفات في مجال الجاذبية' },
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
  // Module 5: 2D Collisions & Momentum
  collisionType: {
    key: 'collisionType',
    type: 'select',
    labelEn: 'Collision Geometry',
    labelAr: 'هندسة التصادم',
    defaultValue: 'direct_1d',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
    options: [
      { value: 'direct_1d', labelEn: '1D Direct Head-On Collision (تصادم مباشر في بعد واحد)', labelAr: 'تصادم مباشر على خط المراكز' },
      { value: 'oblique_2d', labelEn: '2D Oblique Collision (تصادم غير مباشر في بعدين)', labelAr: 'تصادم غير مباشر مائل في بعدين' },
    ],
  },
  mass1Kg: {
    key: 'mass1Kg',
    type: 'number',
    labelEn: 'Body 1 Mass (m₁)',
    labelAr: 'كتلة الجسم الأول (ك₁)',
    defaultValue: 2.0,
    min: 0.5,
    max: 10.0,
    step: 0.5,
    unit: 'kg',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  mass2Kg: {
    key: 'mass2Kg',
    type: 'number',
    labelEn: 'Body 2 Mass (m₂)',
    labelAr: 'كتلة الجسم الثاني (ك₂)',
    defaultValue: 3.0,
    min: 0.5,
    max: 10.0,
    step: 0.5,
    unit: 'kg',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  velocity1Ms: {
    key: 'velocity1Ms',
    type: 'number',
    labelEn: 'Body 1 Velocity (v₁)',
    labelAr: 'سرعة الجسم الأول (ع₁)',
    defaultValue: 8.0,
    min: 1.0,
    max: 20.0,
    step: 0.5,
    unit: 'm/s',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  angle1Deg: {
    key: 'angle1Deg',
    type: 'number',
    labelEn: 'Body 1 Heading Angle (α₁)',
    labelAr: 'زاوية انطلاق الجسم الأول',
    defaultValue: 0,
    min: -45,
    max: 45,
    step: 5,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum' && p.collisionType === 'oblique_2d',
  },
  velocity2Ms: {
    key: 'velocity2Ms',
    type: 'number',
    labelEn: 'Body 2 Velocity (v₂)',
    labelAr: 'سرعة الجسم الثاني (ع₂)',
    defaultValue: -2.0,
    min: -10.0,
    max: 10.0,
    step: 0.5,
    unit: 'm/s',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  angle2Deg: {
    key: 'angle2Deg',
    type: 'number',
    labelEn: 'Body 2 Heading Angle (α₂)',
    labelAr: 'زاوية انطلاق الجسم الثاني',
    defaultValue: 180,
    min: 135,
    max: 225,
    step: 5,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum' && p.collisionType === 'oblique_2d',
  },
  restitutionE: {
    key: 'restitutionE',
    type: 'number',
    labelEn: 'Coefficient of Restitution (e)',
    labelAr: 'معامل الارتداد (e)',
    defaultValue: 0.8,
    min: 0.0,
    max: 1.0,
    step: 0.05,
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  impactOffsetB: {
    key: 'impactOffsetB',
    type: 'number',
    labelEn: 'Impact Offset Parameter (b)',
    labelAr: 'مسافة الانحراف عن المركز (b)',
    defaultValue: 0.2,
    min: 0.0,
    max: 0.8,
    step: 0.05,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum' && p.collisionType === 'oblique_2d',
  },
  collisionTimeline: {
    key: 'collisionTimeline',
    type: 'number',
    labelEn: 'Collision Timeline Scrubber (t)',
    labelAr: 'مخطط زمن التصادم (ث)',
    defaultValue: 0.0,
    min: -1.0,
    max: 1.0,
    step: 0.05,
    unit: 's',
    visibleIf: (p: MechanicsParams) => p.module === 'collisions_momentum',
  },
  // Module 6: Projectile Motion & Ballistics
  launchVelocityMs: {
    key: 'launchVelocityMs',
    type: 'number',
    labelEn: 'Muzzle Velocity (v₀)',
    labelAr: 'سرعة الإطلاق الابتدائية (ع₀)',
    defaultValue: 35.0,
    min: 10.0,
    max: 80.0,
    step: 1.0,
    unit: 'm/s',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
  },
  launchAngleDeg: {
    key: 'launchAngleDeg',
    type: 'number',
    labelEn: 'Launch Angle (θ)',
    labelAr: 'زاوية قذف المقذوف (θ)',
    defaultValue: 45,
    min: 5,
    max: 85,
    step: 1,
    unit: '°',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
  },
  launchHeightM: {
    key: 'launchHeightM',
    type: 'number',
    labelEn: 'Initial Launch Height (h₀)',
    labelAr: 'ارتفاع منصة الإطلاق (ع₀)',
    defaultValue: 10.0,
    min: 0.0,
    max: 50.0,
    step: 1.0,
    unit: 'm',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
  },
  projectileMassKg: {
    key: 'projectileMassKg',
    type: 'number',
    labelEn: 'Projectile Mass (m)',
    labelAr: 'كتلة المقذوف (ك)',
    defaultValue: 2.0,
    min: 0.2,
    max: 10.0,
    step: 0.2,
    unit: 'kg',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
  },
  dragModel: {
    key: 'dragModel',
    type: 'select',
    labelEn: 'Atmospheric Drag Model',
    labelAr: 'نموذج مقاومة الهواء',
    defaultValue: 'vacuum',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
    options: [
      { value: 'vacuum', labelEn: 'Ideal Vacuum (انعدام مقاومة الهواء)', labelAr: 'في الفراغ التام (مسار قطع مكافئ نقي)' },
      { value: 'air_drag', labelEn: 'Aerodynamic Drag (مع مقاومة الهواء)', labelAr: 'مقاومة هواء تربيعية (مسار بالستي حقيقي)' },
    ],
  },
  dragCoeffCd: {
    key: 'dragCoeffCd',
    type: 'number',
    labelEn: 'Drag Coefficient (Cd)',
    labelAr: 'معامل الإعاقة الهوائية (Cd)',
    defaultValue: 0.47,
    min: 0.1,
    max: 1.0,
    step: 0.05,
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion' && p.dragModel === 'air_drag',
  },
  projectileTimeline: {
    key: 'projectileTimeline',
    type: 'number',
    labelEn: 'Flight Trajectory Scrubber',
    labelAr: 'مؤشر مسار الرحلة بالزمن',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    visibleIf: (p: MechanicsParams) => p.module === 'projectile_motion',
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
  {
    id: 'elastic_cradle_velocity_exchange',
    nameEn: "Newton's Cradle Velocity Exchange (m₁ = m₂, e = 1.0)",
    nameAr: 'تبادل السرعات في بندول نيوتن المرن (ك₁ = ك₂ ، e = ١.٠)',
    descriptionEn: 'Head-on perfectly elastic collision between two equal masses where the moving body comes to complete rest while the stationary target carries away all momentum and kinetic energy.',
    descriptionAr: 'تصادم مرن تماماً في بعد واحد بين كتلتين متساويتين؛ يتوقف الجسم المتحرك تماماً وينطلق الجسم الساكن بنفس السرعة حاملاً كامل طاقة الحركة.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'collisions_momentum',
      collisionType: 'direct_1d',
      mass1Kg: 2.0,
      mass2Kg: 2.0,
      velocity1Ms: 8.0,
      angle1Deg: 0,
      velocity2Ms: 0.0,
      angle2Deg: 180,
      restitutionE: 1.0,
      impactOffsetB: 0.0,
      collisionTimeline: 0.0,
    },
  },
  {
    id: 'plastic_coalescence_collision',
    nameEn: 'Perfect Plastic Coalescence (e = 0, Max KE Dissipation)',
    nameAr: 'التحام تام وتصادم غير مرن بالمرة (e = ٠ ، أقصى فقد في طاقة الحركة)',
    descriptionEn: 'Demonstrate maximum loss in mechanical energy where two colliding bodies lock together moving as a single united mass: V = (m₁v₁ + m₂v₂) / (m₁ + m₂).',
    descriptionAr: 'التحام الجسمين معاً ليتحركا كجسم واحد بسرعة مشتركة ع = (ك₁ع₁ + ك₂ع₂) / (ك₁ + ك₂) مع فقدان أقصى طاقة حركة ممكنة.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'collisions_momentum',
      collisionType: 'direct_1d',
      mass1Kg: 2.0,
      mass2Kg: 3.0,
      velocity1Ms: 10.0,
      angle1Deg: 0,
      velocity2Ms: 0.0,
      angle2Deg: 180,
      restitutionE: 0.0,
      impactOffsetB: 0.0,
      collisionTimeline: 0.0,
    },
  },
  {
    id: 'oblique_2d_billiards_orthogonal',
    nameEn: '2D Oblique Billiards Collision (Orthogonal Scatter Angle)',
    nameAr: 'تصادم بلياردو مائل في بعدين (زاوية التشتت المتعامدة ٩٠°)',
    descriptionEn: 'An oblique elastic collision of equal masses where Body 1 grazes Body 2 with offset b, scattering both bodies at an exact 90° angle.',
    descriptionAr: 'تصادم غير مباشر في بعدين لكتلتين متساويتين بانحراف جانبي b؛ تتشتت الكرتان بعد التصادم بزاوية متعامدة قائمة تماماً (٩٠°).',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'collisions_momentum',
      collisionType: 'oblique_2d',
      mass1Kg: 1.5,
      mass2Kg: 1.5,
      velocity1Ms: 9.0,
      angle1Deg: 0,
      velocity2Ms: 0.0,
      angle2Deg: 180,
      restitutionE: 1.0,
      impactOffsetB: 0.25,
      collisionTimeline: 0.0,
    },
  },
  {
    id: 'projectile_optimal_45deg_vacuum',
    nameEn: 'Optimal 45° Trajectory for Maximum Range in Vacuum',
    nameAr: 'أقصى مدى أفقي بزاوية ٤٥° في الفراغ التام',
    descriptionEn: 'The celebrated Thanawiya Amma dynamics theorem: maximum ballistic horizontal range occurs at launch angle θ = 45° where sin(2θ) = 1.',
    descriptionAr: 'المبرهنة الديناميكية الكلاسيكية: أقصى مدى أفقي لقذيفة من مستوى الأرض في الفراغ يتحقق عندما تكون زاوية القذف ٤٥° حيث جا(٢θ) = ١.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'projectile_motion',
      launchVelocityMs: 40.0,
      launchAngleDeg: 45,
      launchHeightM: 0.0,
      projectileMassKg: 2.0,
      dragModel: 'vacuum',
      dragCoeffCd: 0.47,
      projectileTimeline: 50,
    },
  },
  {
    id: 'projectile_complementary_angles_30_60',
    nameEn: 'Complementary Angles Invariant Range (30° vs 60°)',
    nameAr: 'تساوي المدى الأفقي للزوايا المتتامة (٣٠° و ٦٠°)',
    descriptionEn: 'Demonstrate that complementary angles (θ and 90° - θ) yield identical horizontal ranges R = (v₀² sin 2θ) / g in vacuum, though the higher angle reaches greater apex height and flight time.',
    descriptionAr: 'إثبات أن الزوايا المتتامة (٣٠° و ٦٠°) تعطي نفس المدى الأفقي تماماً، مع وصول الزاوية الأكبر ٦٠° إلى أقصى ارتفاع وزمن تحليق أكبر.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'projectile_motion',
      launchVelocityMs: 35.0,
      launchAngleDeg: 30,
      launchHeightM: 0.0,
      projectileMassKg: 1.5,
      dragModel: 'vacuum',
      dragCoeffCd: 0.47,
      projectileTimeline: 50,
    },
  },
  {
    id: 'projectile_air_drag_steep_descent',
    nameEn: 'Atmospheric Quadratic Drag vs Ideal Vacuum Parabola',
    nameAr: 'المسار البالستي الحقيقي بمقاومة الهواء مقابل الفراغ',
    descriptionEn: 'Compare the ideal symmetrical parabola against the realistic aerodynamic drag curve which exhibits a compressed range, lowered apex, and steep terminal plunge.',
    descriptionAr: 'مقارنة مسار القطع المكافئ المتماثل في الفراغ بالمسار البالستي الواقعي تحت مقاومة الهواء ذات الانحدار الشديد والمدى المنخفض.',
    params: {
      ...DEFAULT_MECHANICS_PARAMS,
      module: 'projectile_motion',
      launchVelocityMs: 45.0,
      launchAngleDeg: 50,
      launchHeightM: 15.0,
      projectileMassKg: 1.0,
      dragModel: 'air_drag',
      dragCoeffCd: 0.55,
      projectileTimeline: 50,
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
  {
    id: 'poe_collision_ke_loss',
    titleEn: 'Challenge 4: Kinetic Energy Dissipation in Inelastic Collisions',
    titleAr: 'تحدي ٤: فقدان طاقة الحركة في التصادم غير المرن وحفظ كمية الحركة',
    scenarioEn: 'Two clay spheres of masses m₁ and m₂ move toward each other on a frictionless horizontal table. Upon colliding, they stick together and move as a single combined body (e = 0).',
    scenarioAr: 'كرتان من الطين كتلتاهما ك₁ و ك₂ تتحركان على مستوى أفقي أملس في اتجاهين متضادين. عند التصادم، التحمتا معاً وتحركتا ككتلة واحدة (e = ٠).',
    questionEn:
      'Which physical quantity is strictly conserved during this perfectly plastic collision?',
    questionAr:
      'أي الكميات الفيزيائية تظل محفوظة بدقة تامة دون أي نقص أثناء هذا التصادم غير المرن بالمرة؟',
    optionsEn: [
      'Total linear momentum is strictly conserved, while total kinetic energy decreases by ΔKE = 1/2 [m₁m₂/(m₁+m₂)](v₁ - v₂)² due to irreversible thermal and plastic deformation.',
      'Both total linear momentum and total kinetic energy are conserved.',
      'Neither momentum nor kinetic energy is conserved.',
      'Kinetic energy is conserved, but momentum is lost due to sticky friction.',
    ],
    optionsAr: [
      'كمية الحركة الخطية الكلية متجهة ومحفوظة تماماً، بينما تقل طاقة الحركة الكلية بمقدار ΔKE = ١/٢ [ك₁ك₂/(ك₁+ك₂)](ع₁ - ع₂)² بسبب التحول إلى حرارة وتشوه لدن.',
      'كلا من كمية الحركة وطاقة الحركة محفوظتان بالكامل دون نقص.',
      'لا كمية الحركة ولا طاقة الحركة محفوظة.',
      'طاقة الحركة محفوظة ولكن كمية الحركة تفنى بالاحتكاك والالتصاق.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      "By Newton's third law, the internal collision forces form action-reaction pairs (F₁₂ = -F₂₁), meaning the net external impulse on the two-body system is zero; thus, total linear momentum is unconditionally conserved in every collision. However, when restitution e < 1, mechanical work is performed in permanently deforming the bodies and dissipating energy into microscopic atomic vibrations (heat and sound). At e = 0 (plastic coalescence), this energy loss reaches its theoretical maximum: ΔKE = 1/2 [m₁m₂/(m₁+m₂)](1 - e²)(v₁ - v₂)².",
    scientificExplanationAr:
      'وفقاً للقانون الثالث لنيوتن، فإن قوى التأثير المتبادلة بين الجسمين أثناء التصادم هي قوى داخلية متساوية في المقدار ومتضادة في الاتجاه (ق_١٢ = -ق_٢١)، وبالتالي فإن محصلة الدفع الخارجي على النظام ككل منعدمة؛ مما يضمن حفظ كمية الحركة الخطية دائماً في كافة التصادمات. أما طاقة الحركة، فعندما يكون معامل الارتداد e < ١، يُبذل شغل ميكانيكي داخلي يؤدي إلى تشوه لدن دائم وتشتت الطاقة في صورة حرارة وصوت، ويبلغ هذا الفقد ذروته عند e = ٠ (الالتحام التام): ΔKE = ١/٢ [ك₁ك₂/(ك₁+ك₂)](١ - e²)(ع₁ - ع₂)²',
  },
  {
    id: 'poe_projectile_launch_angle_cliff',
    titleEn: 'Challenge 5: Optimal Launch Angle from an Elevated Cliff (h₀ > 0)',
    titleAr: 'تحدي ٥: زاوية القذف المثلى لتحقيق أقصى مدى من ارتفاع (ع₀ > ٠)',
    scenarioEn: 'A projectile is launched with fixed initial muzzle velocity v₀ from the edge of an elevated cliff of height h₀ above ground level.',
    scenarioAr: 'أُطلق مقذوف بسرعة ابتدائية ثابتة ع₀ من حافة جرف صخري يرتفع مسافة ع₀ عن سطح الأرض.',
    questionEn:
      'To achieve the maximum horizontal range from the base of the cliff, how does the optimal launch angle θ_opt compare to 45°?',
    questionAr:
      'لتحقيق أقصى مدى أفقي ممكن على الأرض، كيف تقارن زاوية الإطلاق المثلى θ_opt بزاوية ٤٥°؟',
    optionsEn: [
      'θ_opt is strictly less than 45° (θ_opt = arcsin(1 / √(2 + 2gh₀/v₀²)) < 45°) because the extra descent distance gives gravity more time to act, so dedicating more initial velocity to the horizontal direction increases total range.',
      'θ_opt remains exactly 45° regardless of launch height.',
      'θ_opt is strictly greater than 45° to give the projectile more air time.',
      'θ_opt must be 90° for maximum drop.',
    ],
    optionsAr: [
      'تكون زاوية الإطلاق المثلى أقل من ٤٥° قطعاً؛ لأن الارتفاع الابتدائي ع₀ يمنح المقذوف وقتاً إضافياً للسقوط الحر بفعل الجاذبية، فيكون توجيه جزء أكبر من السرعة الابتدائية أفقياً أكثر فاعلية في زيادة المدى الكلي.',
      'تظل الزاوية المثلى ٤٥° بالضبط بغض النظر عن ارتفاع المنصة.',
      'تكون الزاوية المثلى أكبر من ٤٥° لمنح المقذوف زمناً أطول في الهواء.',
      'يجب أن تكون الزاوية ٩٠° لزيادة مسافة السقوط الرأسي.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'When launching from ground level (h₀ = 0), range is R = (v₀²/g) sin(2θ), which maximizes at θ = 45°. However, with elevation h₀ > 0, the flight time is extended by the vertical drop under gravity. Differentiating the range function R(θ) = v₀ cosθ · [v₀ sinθ + √(v₀² sin²θ + 2gh₀)] / g with respect to θ and setting dR/dθ = 0 yields cos(2θ) = gh₀ / (v₀² + gh₀) > 0, which proves θ_opt < 45°. As h₀ increases, θ_opt decreases progressively toward 0°.',
    scientificExplanationAr:
      'عند الإطلاق من سطح الأرض (ع₀ = ٠)، يكون المدى ف = (ع₀²/د) جا(٢θ)، وتتحقق قيمته العظمى عند θ = ٤٥°. أما عند القذف من ارتفاع ع₀ > ٠، فإن السقوط الرأسي الإضافي يزيد من زمن التحليق الكلي. وبإجراء تفاضل دالة المدى بالنسبة للزاوية ومساواتها بالصفر نجد أن جتا(٢θ) = د ع₀ / (ع₀² + د ع₀) > ٠، مما يثبت رياضياً أن الزاوية المثلى θ_opt أقل حتماً من ٤٥°. وكلما زاد الارتفاع، مالت الزاوية المثلى أكثر نحو الأفق.',
  },
];

export const MECHANICS_LAB_DEFINITION: LabDefinition<MechanicsParams, any> = {
  id: 'mechanics_statics_lab',
  subject: 'mathematics',
  titleEn: 'Statics & Dynamics Classical Mechanics Virtual Laboratory',
  titleAr: 'مختبر الاستاتيكا والديناميكا والميكانيكا الكلاسيكية التفاعلي',
  subtitleEn: 'Friction, Equilibrium, Collisions, Momentum & Projectiles',
  subtitleAr: 'الاحتكاك، الاتزان العام، التصادم وحفظ كمية الحركة، والمقذوفات',
  taglineEn: 'Vector resolution, ladder stability, 2D momentum conservation & ballistics',
  taglineAr: 'تحليل القوى المتجهة، اتزان السلم، حفظ كمية الحركة في بعدين، والمقذوفات',
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
    {
      id: 'obj_collisions_momentum',
      textEn: 'Verify the law of conservation of linear momentum in 1D and 2D collisions and calculate kinetic energy dissipation as a function of restitution e.',
      textAr: 'التحقق من قانون حفظ كمية الحركة في بعدين وحساب الفقد في طاقة الحركة كدالة في معامل الارتداد e.',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_projectile_ballistics',
      textEn: 'Analyze 2D projectile parametric kinematics, complementary angle symmetries, and aerodynamic quadratic drag effects on trajectory geometry.',
      textAr: 'تحليل حركة المقذوفات في بعدين، وتماثل الزوايا المتتامة، وتأثير مقاومة الهواء التربيعية على المسار البالستي.',
      bloomLevel: 'evaluate',
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
    {
      id: 'formula_momentum_conservation',
      labelEn: 'Conservation of Linear Momentum & Restitution',
      labelAr: 'قانون حفظ كمية الحركة ومعامل الارتداد',
      tex: 'm_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}\'_1 + m_2 \\vec{v}\'_2, \\quad e = \\frac{v\'_{2n} - v\'_{1n}}{v_{1n} - v_{2n}}',
      descriptionEn: 'Total linear momentum is conserved before and after collision; coefficient of restitution e governs elasticity.',
      descriptionAr: 'كمية الحركة الكلية محفوظة قبل وبعد التصادم؛ ويحدد معامل الارتداد e درجة مرونة التصادم.',
    },
    {
      id: 'formula_impulse_momentum',
      labelEn: 'Impulse-Momentum Theorem',
      labelAr: 'مبدأ الدفع وكمية الحركة',
      tex: '\\vec{I} = \\int \\vec{F}\\,dt = \\Delta\\vec{p} = m(\\vec{v}\' - \\vec{v})',
      descriptionEn: 'The impulse of a force acting over time equals the net change in linear momentum.',
      descriptionAr: 'دفع القوة خلال فترة زمنية يساوي التغير الناتج في كمية حركة الجسم.',
    },
    {
      id: 'formula_projectile_trajectories',
      labelEn: 'Projectile Motion & Ballistic Range',
      labelAr: 'معادلات حركة المقذوفات والمدى الأفقي',
      tex: 'x(t) = v_0\\cos\\theta\\,t, \\quad y(t) = h_0 + v_0\\sin\\theta\\,t - \\frac{1}{2}gt^2, \\quad R = \\frac{v_0^2\\sin(2\\theta)}{g}',
      descriptionEn: 'Parametric equations of projectile motion in a gravitational field under vacuum or atmospheric drag.',
      descriptionAr: 'المعادلات البارامترية لحركة المقذوف في مجال الجاذبية الأرضية في الفراغ أو مع مقاومة الهواء.',
    },
    {
      id: 'formula_mechanical_energy_projectile',
      labelEn: 'Conservation of Mechanical Energy',
      labelAr: 'قانون حفظ الطاقة الميكانيكية للمقذوف',
      tex: 'E_{\\text{mech}} = \\frac{1}{2}m v(t)^2 + m g y(t) = \\text{constant (in vacuum)}',
      descriptionEn: 'Continuous exchange between kinetic energy and gravitational potential energy along trajectory.',
      descriptionAr: 'التبادل المستمر بين طاقة الحركة وطاقة الوضع التثاقلية على طول مسار المقذوف.',
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

  // MODULE 5: 2D Collisions & Momentum Solver
  const collisionsCalculations = useMemo(() => {
    const m1 = params.mass1Kg;
    const m2 = params.mass2Kg;
    const e = params.restitutionE;
    const is2D = params.collisionType === 'oblique_2d';
    const b = is2D ? params.impactOffsetB : 0;

    // Body radii based on mass
    const r1 = 0.35 * Math.cbrt(m1);
    const r2 = 0.35 * Math.cbrt(m2);
    const R_contact = r1 + r2;

    // Impact normal angle
    const effectiveB = Math.min(b, 0.92 * R_contact);
    const normalAngleRad = is2D && R_contact > 0 ? Math.asin(effectiveB / R_contact) : 0;
    const cosN = Math.cos(normalAngleRad);
    const sinN = Math.sin(normalAngleRad);

    // Initial velocities
    const v1 = params.velocity1Ms;
    const a1Rad = (params.angle1Deg * Math.PI) / 180;
    const v1x = v1 * Math.cos(a1Rad);
    const v1y = v1 * Math.sin(a1Rad);

    const v2 = params.velocity2Ms;
    const a2Rad = (params.angle2Deg * Math.PI) / 180;
    const v2x = v2 * Math.cos(a2Rad);
    const v2y = v2 * Math.sin(a2Rad);

    // Resolve into normal (n) and tangential (t)
    const v1n = v1x * cosN + v1y * sinN;
    const v1t = -v1x * sinN + v1y * cosN;

    const v2n = v2x * cosN + v2y * sinN;
    const v2t = -v2x * sinN + v2y * cosN;

    // Post-impact normal components using restitution e & momentum conservation
    const v1n_prime = ((m1 - e * m2) * v1n + m2 * (1 + e) * v2n) / (m1 + m2);
    const v2n_prime = (m1 * (1 + e) * v1n + (m2 - e * m1) * v2n) / (m1 + m2);

    // Tangential components unchanged (frictionless contact)
    const v1t_prime = v1t;
    const v2t_prime = v2t;

    // Convert back to Cartesian
    const v1x_prime = v1n_prime * cosN - v1t_prime * sinN;
    const v1y_prime = v1n_prime * sinN + v1t_prime * cosN;

    const v2x_prime = v2n_prime * cosN - v2t_prime * sinN;
    const v2y_prime = v2n_prime * sinN + v2t_prime * cosN;

    const v1_prime = Math.hypot(v1x_prime, v1y_prime);
    const v2_prime = Math.hypot(v2x_prime, v2y_prime);

    // Impulse magnitude transferred along normal axis
    const J = (m1 * m2 * (1 + e) * Math.abs(v1n - v2n)) / (m1 + m2);

    // Momentum calculations
    const P1_init = { x: m1 * v1x, y: m1 * v1y, mag: m1 * Math.hypot(v1x, v1y) };
    const P2_init = { x: m2 * v2x, y: m2 * v2y, mag: m2 * Math.hypot(v2x, v2y) };
    const P_total_init_x = P1_init.x + P2_init.x;
    const P_total_init_y = P1_init.y + P2_init.y;
    const P_total_init_mag = Math.hypot(P_total_init_x, P_total_init_y);

    const P1_final = { x: m1 * v1x_prime, y: m1 * v1y_prime, mag: m1 * v1_prime };
    const P2_final = { x: m2 * v2x_prime, y: m2 * v2y_prime, mag: m2 * v2_prime };
    const P_total_final_x = P1_final.x + P2_final.x;
    const P_total_final_y = P1_final.y + P2_final.y;
    const P_total_final_mag = Math.hypot(P_total_final_x, P_total_final_y);

    // Kinetic Energy
    const KE1_init = 0.5 * m1 * (v1x * v1x + v1y * v1y);
    const KE2_init = 0.5 * m2 * (v2x * v2x + v2y * v2y);
    const KE_total_init = KE1_init + KE2_init;

    const KE1_final = 0.5 * m1 * (v1x_prime * v1x_prime + v1y_prime * v1y_prime);
    const KE2_final = 0.5 * m2 * (v2x_prime * v2x_prime + v2y_prime * v2y_prime);
    const KE_total_final = KE1_final + KE2_final;

    const deltaKE_lost = Math.max(0, KE_total_init - KE_total_final);
    const energyLossPercent = KE_total_init > 0 ? (deltaKE_lost / KE_total_init) * 100 : 0;

    // Timeline positions at t in [-1.0, 1.0] s
    const t = params.collisionTimeline;
    let pos1 = { x: 0, y: 0 };
    let pos2 = { x: 0, y: 0 };

    if (t <= 0) {
      pos1 = { x: t * v1x, y: t * v1y };
      pos2 = { x: effectiveB * sinN + t * v2x, y: -effectiveB * cosN + t * v2y };
    } else {
      pos1 = { x: t * v1x_prime, y: t * v1y_prime };
      pos2 = { x: effectiveB * sinN + t * v2x_prime, y: -effectiveB * cosN + t * v2y_prime };
    }

    return {
      m1,
      m2,
      e,
      is2D,
      b: effectiveB,
      r1,
      r2,
      R_contact,
      normalAngleRad,
      v1x,
      v1y,
      v2x,
      v2y,
      v1n,
      v1t,
      v2n,
      v2t,
      v1n_prime,
      v2n_prime,
      v1x_prime,
      v1y_prime,
      v2x_prime,
      v2y_prime,
      v1_prime,
      v2_prime,
      J,
      P1_init,
      P2_init,
      P_total_init_mag,
      P1_final,
      P2_final,
      P_total_final_mag,
      KE_total_init,
      KE_total_final,
      deltaKE_lost,
      energyLossPercent,
      t,
      pos1,
      pos2,
    };
  }, [params]);

  // MODULE 6: Projectile Motion & Ballistics Solver
  const projectileCalculations = useMemo(() => {
    const v0 = params.launchVelocityMs;
    const thetaDeg = params.launchAngleDeg;
    const thetaRad = (thetaDeg * Math.PI) / 180;
    const h0 = params.launchHeightM;
    const m = params.projectileMassKg;
    const g = 9.806;
    const isDrag = params.dragModel === 'air_drag';
    const Cd = params.dragCoeffCd;
    const rho = 1.225; // kg/m^3
    const radius = 0.08 * Math.cbrt(m);
    const area = Math.PI * radius * radius;
    const kDrag = 0.5 * rho * Cd * area;

    const v0x = v0 * Math.cos(thetaRad);
    const v0y = v0 * Math.sin(thetaRad);

    // Analytic vacuum benchmarks
    const t_apex_ideal = v0y / g;
    const H_max_ideal = h0 + (v0y * v0y) / (2 * g);
    const T_flight_ideal = (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;
    const Range_ideal = v0x * T_flight_ideal;
    const v_impact_ideal = Math.sqrt(v0 * v0 + 2 * g * h0);

    // Numerical integration for flight path
    const dt = 0.02;
    const points: Array<{ x: number; y: number; vx: number; vy: number; t: number }> = [];
    let curX = 0;
    let curY = h0;
    let curVx = v0x;
    let curVy = v0y;
    let curT = 0;

    points.push({ x: curX, y: curY, vx: curVx, vy: curVy, t: curT });
    let maxH = curY;
    let tAtApex = 0;

    while (curY >= 0 && curT < 40.0) {
      const speed = Math.hypot(curVx, curVy);
      const dragFx = isDrag ? -kDrag * speed * curVx : 0;
      const dragFy = isDrag ? -kDrag * speed * curVy : 0;

      const ax = dragFx / m;
      const ay = -g + dragFy / m;

      curX += curVx * dt + 0.5 * ax * dt * dt;
      curY += curVy * dt + 0.5 * ay * dt * dt;
      curVx += ax * dt;
      curVy += ay * dt;
      curT += dt;

      if (curY > maxH) {
        maxH = curY;
        tAtApex = curT;
      }

      if (curY >= 0) {
        points.push({ x: curX, y: curY, vx: curVx, vy: curVy, t: curT });
      }
    }

    const actualFlightTime = curT;
    const actualRange = curX;
    const actualMaxH = maxH;
    const impactSpeed = Math.hypot(curVx, curVy);

    // Scrubber position
    const scrubFrac = Math.min(1.0, Math.max(0.0, params.projectileTimeline / 100));
    const targetT = scrubFrac * actualFlightTime;
    const idx = Math.min(points.length - 1, Math.max(0, Math.floor((targetT / actualFlightTime) * (points.length - 1))));
    const curPt = points[idx] || points[0];

    const currentSpeed = Math.hypot(curPt.vx, curPt.vy);
    const currentKE = 0.5 * m * currentSpeed * currentSpeed;
    const currentPE = m * g * Math.max(0, curPt.y);
    const currentTotalE = currentKE + currentPE;
    const initialTotalE = 0.5 * m * v0 * v0 + m * g * h0;

    return {
      v0,
      thetaDeg,
      thetaRad,
      h0,
      m,
      isDrag,
      Cd,
      v0x,
      v0y,
      t_apex_ideal,
      H_max_ideal,
      T_flight_ideal,
      Range_ideal,
      v_impact_ideal,
      actualFlightTime,
      actualRange,
      actualMaxH,
      tAtApex,
      impactSpeed,
      points,
      scrubFrac,
      curPt,
      currentSpeed,
      currentKE,
      currentPE,
      currentTotalE,
      initialTotalE,
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

    if (params.module === 'collisions_momentum') {
      if (dmmMode === 'normal_reaction' || dmmMode === 'friction_force') {
        val = collisionsCalculations.P_total_init_mag;
        unit = 'kg·m/s';
        displayString = `${val.toFixed(2)} kg·m/s`;
        secondaryString = `P_FINAL = ${collisionsCalculations.P_total_final_mag.toFixed(2)} (ΔP = 0)`;
      } else if (dmmMode === 'resultant_reaction') {
        val = collisionsCalculations.J;
        unit = 'N·s';
        displayString = `${val.toFixed(2)} N·s`;
        secondaryString = `IMPULSE J (e = ${collisionsCalculations.e.toFixed(2)})`;
      } else {
        val = collisionsCalculations.deltaKE_lost;
        unit = 'J';
        displayString = `${val.toFixed(1)} J`;
        secondaryString = `KE LOSS = ${collisionsCalculations.energyLossPercent.toFixed(1)}%`;
      }
    } else if (params.module === 'projectile_motion') {
      if (dmmMode === 'normal_reaction') {
        val = projectileCalculations.actualRange;
        unit = 'm';
        displayString = `${val.toFixed(1)} m`;
        secondaryString = `RANGE (IDEAL = ${projectileCalculations.Range_ideal.toFixed(1)} m)`;
      } else if (dmmMode === 'friction_force') {
        val = projectileCalculations.actualMaxH;
        unit = 'm';
        displayString = `${val.toFixed(1)} m`;
        secondaryString = `MAX HEIGHT H_max (APEX = ${projectileCalculations.H_max_ideal.toFixed(1)} m)`;
      } else if (dmmMode === 'resultant_reaction') {
        val = projectileCalculations.currentSpeed;
        unit = 'm/s';
        displayString = `${val.toFixed(1)} m/s`;
        secondaryString = `CURRENT SPEED (V0 = ${projectileCalculations.v0} m/s)`;
      } else {
        val = projectileCalculations.currentTotalE;
        unit = 'J';
        displayString = `${val.toFixed(1)} J`;
        secondaryString = `KE = ${projectileCalculations.currentKE.toFixed(1)} J, PE = ${projectileCalculations.currentPE.toFixed(1)} J`;
      }
    } else {
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
  }, [
    dmmMode,
    frictionCalculations,
    equilibriumCalculations,
    momentsCalculations,
    collisionsCalculations,
    projectileCalculations,
    params.module,
  ]);

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
    if (params.module === 'collisions_momentum') {
      const pTotal = collisionsCalculations.P_total_init_mag;
      const keTotal = collisionsCalculations.KE_total_init;
      return [
        {
          amplitude: pTotal * 5,
          frequency: 1.0,
          phaseDeg: 0,
          type: 'sine',
          dcOffset: pTotal * 5,
        },
        {
          amplitude: keTotal * 2,
          frequency: 1.0,
          phaseDeg: 90,
          type: 'sine',
          dcOffset: keTotal * 2,
        },
      ];
    }
    if (params.module === 'projectile_motion') {
      const alt = projectileCalculations.curPt.y;
      const spd = projectileCalculations.currentSpeed;
      return [
        {
          amplitude: alt * 4,
          frequency: 0.5,
          phaseDeg: 0,
          type: 'triangle',
          dcOffset: alt * 4,
        },
        {
          amplitude: spd * 3,
          frequency: 0.5,
          phaseDeg: 180,
          type: 'sine',
          dcOffset: spd * 3,
        },
      ];
    }
    return [
      { amplitude: 50, frequency: 1, phaseDeg: 0, type: 'sine', dcOffset: 50 },
      { amplitude: 30, frequency: 1, phaseDeg: 90, type: 'triangle', dcOffset: 30 },
    ];
  }, [
    params.module,
    frictionCalculations,
    equilibriumCalculations,
    collisionsCalculations,
    projectileCalculations,
  ]);

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

      // -------------------------------------------------------
      // 5. 2D COLLISIONS & MOMENTUM WORKBENCH RENDERER
      // -------------------------------------------------------
      else if (params.module === 'collisions_momentum') {
        const cX = width / 2;
        const cY = height / 2 + 20;
        const meterScale = 75; // pixels per meter

        ctx.save();

        // Impact coordinate axes
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(cX - 240, cY);
        ctx.lineTo(cX + 240, cY);
        ctx.moveTo(cX, cY - 140);
        ctx.lineTo(cX, cY + 140);
        ctx.stroke();
        ctx.setLineDash([]);

        // Line of Impact (Normal axis n) & Tangent plane (t)
        const normAngle = collisionsCalculations.normalAngleRad;
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(cX - 220 * Math.cos(normAngle), cY - 220 * Math.sin(normAngle));
        ctx.lineTo(cX + 220 * Math.cos(normAngle), cY + 220 * Math.sin(normAngle));
        ctx.stroke();

        ctx.strokeStyle = '#a855f7';
        ctx.beginPath();
        ctx.moveTo(cX + 160 * Math.sin(normAngle), cY - 160 * Math.cos(normAngle));
        ctx.lineTo(cX - 160 * Math.sin(normAngle), cY + 160 * Math.cos(normAngle));
        ctx.stroke();
        ctx.setLineDash([]);

        // Axis labels
        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#06b6d4';
        ctx.fillText(isArabic ? 'خط المراكز والاصطدام (n)' : 'Line of Impact (n)', cX + 130 * Math.cos(normAngle), cY + 130 * Math.sin(normAngle) - 8);
        ctx.fillStyle = '#a855f7';
        ctx.fillText(isArabic ? 'المستوى المماسي المشترك (t)' : 'Common Tangent (t)', cX - 110 * Math.sin(normAngle) + 8, cY + 110 * Math.cos(normAngle));

        // Animated Ball 1 Coordinates
        const b1X = cX + collisionsCalculations.pos1.x * meterScale;
        const b1Y = cY - collisionsCalculations.pos1.y * meterScale;
        const r1Px = Math.max(16, Math.min(32, 14 + 4 * Math.cbrt(collisionsCalculations.m1)));

        // Animated Ball 2 Coordinates
        const b2X = cX + collisionsCalculations.pos2.x * meterScale;
        const b2Y = cY - collisionsCalculations.pos2.y * meterScale;
        const r2Px = Math.max(16, Math.min(32, 14 + 4 * Math.cbrt(collisionsCalculations.m2)));

        // Trajectory Trails
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(cX - 160, cY);
        ctx.lineTo(b1X, b1Y);
        ctx.stroke();

        ctx.strokeStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(cX + 160, cY + (collisionsCalculations.is2D ? collisionsCalculations.b * meterScale : 0));
        ctx.lineTo(b2X, b2Y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Moment of collision blast effect when timeline near 0
        const isImpactMoment = Math.abs(collisionsCalculations.t) < 0.12;
        if (isImpactMoment) {
          const blastRadius = 28 + Math.sin(t * 15) * 6;
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cX, cY, blastRadius, 0, 2 * Math.PI);
          ctx.stroke();

          drawGlowingParticle(ctx, cX, cY, 8, '#fef08a', 15);

          const J_len = Math.min(65, 20 + collisionsCalculations.J * 2.5);
          drawArrow(cX, cY, cX - J_len * Math.cos(normAngle), cY - J_len * Math.sin(normAngle), '#ef4444', `-J = -${collisionsCalculations.J.toFixed(1)} N·s`);
          drawArrow(cX, cY, cX + J_len * Math.cos(normAngle), cY + J_len * Math.sin(normAngle), '#22c55e', `+J = +${collisionsCalculations.J.toFixed(1)} N·s`);
        }

        // Draw Sphere 1 (Cyan 3D sphere)
        const grad1 = ctx.createRadialGradient(b1X - r1Px * 0.35, b1Y - r1Px * 0.35, r1Px * 0.1, b1X, b1Y, r1Px);
        grad1.addColorStop(0, '#bae6fd');
        grad1.addColorStop(0.4, '#0284c7');
        grad1.addColorStop(1, '#0c4a6e');
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(b1X, b1Y, r1Px, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`m₁=${collisionsCalculations.m1}kg`, b1X, b1Y + 3);

        // Draw Sphere 2 (Amber 3D sphere)
        const grad2 = ctx.createRadialGradient(b2X - r2Px * 0.35, b2Y - r2Px * 0.35, r2Px * 0.1, b2X, b2Y, r2Px);
        grad2.addColorStop(0, '#fef08a');
        grad2.addColorStop(0.4, '#d97706');
        grad2.addColorStop(1, '#78350f');
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(b2X, b2Y, r2Px, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px monospace';
        ctx.fillText(`m₂=${collisionsCalculations.m2}kg`, b2X, b2Y + 3);

        // Current velocity arrows on both bodies
        const isPostImpact = collisionsCalculations.t > 0;
        const curV1x = isPostImpact ? collisionsCalculations.v1x_prime : collisionsCalculations.v1x;
        const curV1y = isPostImpact ? collisionsCalculations.v1y_prime : collisionsCalculations.v1y;
        const curV2x = isPostImpact ? collisionsCalculations.v2x_prime : collisionsCalculations.v2x;
        const curV2y = isPostImpact ? collisionsCalculations.v2y_prime : collisionsCalculations.v2y;

        const vScale = 4.5;
        if (Math.hypot(curV1x, curV1y) > 0.1) {
          drawArrow(b1X, b1Y, b1X + curV1x * vScale, b1Y - curV1y * vScale, '#38bdf8', `v₁'=${Math.hypot(curV1x, curV1y).toFixed(1)}m/s`);
        }
        if (Math.hypot(curV2x, curV2y) > 0.1) {
          drawArrow(b2X, b2Y, b2X + curV2x * vScale, b2Y - curV2y * vScale, '#fbbf24', `v₂'=${Math.hypot(curV2x, curV2y).toFixed(1)}m/s`);
        }

        ctx.restore();

        // Upper HUD Overlay
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(
          isArabic
            ? `قانون حفظ كمية الحركة: ΣP_قبل = ΣP_بعد = ${collisionsCalculations.P_total_init_mag.toFixed(2)} كجم·م/ث (حفظ تام)`
            : `Momentum Conservation: ΣP_init = ΣP_final = ${collisionsCalculations.P_total_init_mag.toFixed(2)} kg·m/s (ΔP = 0)`,
          30,
          35
        );

        ctx.font = '11px monospace';
        ctx.fillStyle = collisionsCalculations.e === 1.0 ? '#10b981' : collisionsCalculations.e === 0 ? '#ef4444' : '#f59e0b';
        ctx.fillText(
          isArabic
            ? `معامل الارتداد e = ${collisionsCalculations.e.toFixed(2)} | طاقة الحركة المفقودة: ${collisionsCalculations.deltaKE_lost.toFixed(1)} جول (${collisionsCalculations.energyLossPercent.toFixed(1)}%)`
            : `Restitution e = ${collisionsCalculations.e.toFixed(2)} | Dissipated Kinetic Energy: ${collisionsCalculations.deltaKE_lost.toFixed(1)} J (${collisionsCalculations.energyLossPercent.toFixed(1)}%)`,
          30,
          55
        );
      }

      // -------------------------------------------------------
      // 6. PROJECTILE MOTION & BALLISTICS RENDERER
      // -------------------------------------------------------
      else if (params.module === 'projectile_motion') {
        const groundY = height - 60;
        const originX = 55;
        const availableW = width - 110;
        const availableH = height - 125;

        // Scaling factors
        const maxRange = Math.max(50, projectileCalculations.actualRange * 1.15, projectileCalculations.Range_ideal * 1.15);
        const maxApex = Math.max(25, projectileCalculations.actualMaxH * 1.25, projectileCalculations.H_max_ideal * 1.25);
        const scaleX = availableW / maxRange;
        const scaleY = availableH / maxApex;

        ctx.save();

        // Sky backdrop / gradient
        const skyGrad = ctx.createLinearGradient(0, 0, 0, groundY);
        skyGrad.addColorStop(0, isLight ? '#bae6fd' : '#030712');
        skyGrad.addColorStop(1, isLight ? '#f0f9ff' : '#0f172a');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, groundY);

        // Ground surface & soil
        const groundGrad = ctx.createLinearGradient(0, groundY, 0, height);
        groundGrad.addColorStop(0, '#15803d');
        groundGrad.addColorStop(0.15, '#166534');
        groundGrad.addColorStop(1, '#78350f');
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, groundY, width, height - groundY);

        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();

        // Ground distance ruler ticks
        ctx.font = '10px monospace';
        ctx.fillStyle = isLight ? '#334155' : '#94a3b8';
        ctx.textAlign = 'center';
        const stepDist = maxRange > 120 ? 40 : 20;
        for (let d = 0; d <= maxRange; d += stepDist) {
          const tickX = originX + d * scaleX;
          if (tickX < width - 20) {
            ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(tickX, groundY);
            ctx.lineTo(tickX, groundY + 6);
            ctx.stroke();
            ctx.fillText(`${d}m`, tickX, groundY + 18);
          }
        }

        // Elevated Cliff / Launch Platform
        const platH = projectileCalculations.h0;
        const platTopY = groundY - platH * scaleY;
        if (platH > 0) {
          ctx.fillStyle = isLight ? '#cbd5e1' : '#1e293b';
          ctx.fillRect(originX - 35, platTopY, 35, groundY - platTopY);
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 2;
          ctx.strokeRect(originX - 35, platTopY, 35, groundY - platTopY);

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px monospace';
          ctx.textAlign = 'right';
          ctx.fillText(`h₀ = ${platH}m`, originX - 40, (platTopY + groundY) / 2);
        }

        // Cannon Launcher Barrel
        const theta = projectileCalculations.thetaRad;
        const barrelLen = 28;
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(originX, platTopY);
        ctx.lineTo(originX + barrelLen * Math.cos(theta), platTopY - barrelLen * Math.sin(theta));
        ctx.stroke();

        // Protractor angle arc
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(originX, platTopY, 18, 0, -theta, true);
        ctx.stroke();
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`θ=${projectileCalculations.thetaDeg}°`, originX + 22, platTopY - 8);

        // 1. Draw Ideal Vacuum Parabola Trajectory (Cyan)
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        const idealSteps = 100;
        for (let i = 0; i <= idealSteps; i++) {
          const tStep = (i / idealSteps) * projectileCalculations.T_flight_ideal;
          const px = originX + projectileCalculations.v0x * tStep * scaleX;
          const py = groundY - (projectileCalculations.h0 + projectileCalculations.v0y * tStep - 0.5 * 9.806 * tStep * tStep) * scaleY;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Apex crosshair for vacuum
        const apexX = originX + projectileCalculations.v0x * projectileCalculations.t_apex_ideal * scaleX;
        const apexY = groundY - projectileCalculations.H_max_ideal * scaleY;
        ctx.strokeStyle = '#f59e0b';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(apexX, groundY);
        ctx.lineTo(apexX, apexY);
        ctx.stroke();
        ctx.setLineDash([]);
        drawGlowingParticle(ctx, apexX, apexY, 4, '#f59e0b', 8);

        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`Apex: ${projectileCalculations.H_max_ideal.toFixed(1)}m`, apexX, apexY - 8);

        // Landing Flag at Range
        const landX = originX + projectileCalculations.Range_ideal * scaleX;
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(landX, groundY);
        ctx.lineTo(landX, groundY - 24);
        ctx.lineTo(landX + 14, groundY - 18);
        ctx.lineTo(landX, groundY - 12);
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.fill();
        ctx.fillText(`R = ${projectileCalculations.Range_ideal.toFixed(1)}m`, landX, groundY - 28);

        // 2. Draw Aerodynamic Drag Trajectory (Orange dashed) if active
        if (projectileCalculations.isDrag) {
          ctx.strokeStyle = '#f97316';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          projectileCalculations.points.forEach((pt, i) => {
            const dx = originX + pt.x * scaleX;
            const dy = groundY - pt.y * scaleY;
            if (i === 0) ctx.moveTo(dx, dy);
            else ctx.lineTo(dx, dy);
          });
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // 3. Current Projectile Ball Position
        const curPt = projectileCalculations.curPt;
        const ballX = originX + curPt.x * scaleX;
        const ballY = groundY - curPt.y * scaleY;

        drawGlowingParticle(ctx, ballX, ballY, 7, '#38bdf8', 12);
        const ballGrad = ctx.createRadialGradient(ballX - 2, ballY - 2, 1, ballX, ballY, 7);
        ballGrad.addColorStop(0, '#ffffff');
        ballGrad.addColorStop(0.5, '#0284c7');
        ballGrad.addColorStop(1, '#0369a1');
        ctx.fillStyle = ballGrad;
        ctx.beginPath();
        ctx.arc(ballX, ballY, 7, 0, 2 * Math.PI);
        ctx.fill();

        // Velocity vector on projectile
        const vScale = 1.0;
        drawArrow(ballX, ballY, ballX + curPt.vx * vScale, ballY - curPt.vy * vScale, '#10b981', `|v|=${projectileCalculations.currentSpeed.toFixed(1)}m/s`);

        ctx.restore();

        // Header info
        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(
          isArabic
            ? `المسار البالستي للمقذوف: المدى R = ${projectileCalculations.actualRange.toFixed(1)} م | أقصى ارتفاع = ${projectileCalculations.actualMaxH.toFixed(1)} م | زمن التحليق = ${projectileCalculations.actualFlightTime.toFixed(2)} ث`
            : `Ballistic Flight: Range = ${projectileCalculations.actualRange.toFixed(1)} m | Apex H_max = ${projectileCalculations.actualMaxH.toFixed(1)} m | Flight Time = ${projectileCalculations.actualFlightTime.toFixed(2)} s`,
          30,
          35
        );

        // Energy Bar HUD (Top Right)
        const hudX = width - 260;
        const hudY = 25;
        ctx.fillStyle = isLight ? 'rgba(255,255,255,0.85)' : 'rgba(15,23,42,0.85)';
        ctx.fillRect(hudX, hudY, 230, 60);
        ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
        ctx.strokeRect(hudX, hudY, 230, 60);

        ctx.font = '10px monospace';
        ctx.fillStyle = '#10b981';
        ctx.fillText(`KE = ${projectileCalculations.currentKE.toFixed(0)} J`, hudX + 10, hudY + 18);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`PE = ${projectileCalculations.currentPE.toFixed(0)} J`, hudX + 10, hudY + 34);
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(`E_mech = ${projectileCalculations.currentTotalE.toFixed(0)} J`, hudX + 10, hudY + 50);
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
      collisionsCalculations,
      projectileCalculations,
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
    if (params.module === 'collisions_momentum') {
      return [
        {
          id: 'm_momentum_conservation',
          labelEn: 'Linear Momentum Conservation (ΔP)',
          labelAr: 'حفظ كمية الحركة الخطية (ΔP)',
          value: `${(collisionsCalculations.P_total_final_mag - collisionsCalculations.P_total_init_mag).toFixed(2)}`,
          unit: 'kg·m/s',
          status: 'optimal',
        },
        {
          id: 'm_total_p',
          labelEn: 'Total Momentum |P|',
          labelAr: 'كمية الحركة الكلية |P|',
          value: collisionsCalculations.P_total_init_mag.toFixed(2),
          unit: 'kg·m/s',
          status: 'normal',
        },
        {
          id: 'm_restitution_coeff',
          labelEn: 'Restitution Elasticity (e)',
          labelAr: 'معامل الارتداد (e)',
          value: collisionsCalculations.e.toFixed(2),
          status: collisionsCalculations.e === 1.0 ? 'optimal' : collisionsCalculations.e === 0 ? 'warning' : 'normal',
        },
        {
          id: 'm_ke_loss_percent',
          labelEn: 'Kinetic Energy Dissipation',
          labelAr: 'نسبة الفقد في طاقة الحركة',
          value: `${collisionsCalculations.energyLossPercent.toFixed(1)}%`,
          unit: '%',
          status: collisionsCalculations.energyLossPercent === 0 ? 'optimal' : 'alert',
        },
      ];
    }
    if (params.module === 'projectile_motion') {
      return [
        {
          id: 'm_projectile_range',
          labelEn: 'Ballistic Range (R)',
          labelAr: 'المدى الأفقي الكلي (R)',
          value: projectileCalculations.actualRange.toFixed(1),
          unit: 'm',
          status: 'optimal',
        },
        {
          id: 'm_projectile_apex',
          labelEn: 'Apex Max Height (H_max)',
          labelAr: 'أقصى ارتفاع للمقذوف (ذروة)',
          value: projectileCalculations.actualMaxH.toFixed(1),
          unit: 'm',
          status: 'normal',
        },
        {
          id: 'm_flight_time',
          labelEn: 'Time of Flight (T)',
          labelAr: 'زمن التحليق الكلي (T)',
          value: projectileCalculations.actualFlightTime.toFixed(2),
          unit: 's',
          status: 'normal',
        },
        {
          id: 'm_current_speed',
          labelEn: 'Instantaneous Velocity |v(t)|',
          labelAr: 'السرعة اللحظية الحالية |v(t)|',
          value: projectileCalculations.currentSpeed.toFixed(1),
          unit: 'm/s',
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
  }, [
    params.module,
    isArabic,
    frictionCalculations,
    equilibriumCalculations,
    momentsCalculations,
    centroidCalculations,
    collisionsCalculations,
    projectileCalculations,
  ]);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleOpenOfficialReportModal = () => {
    const isDynamics =
      params.module === 'collisions_momentum' || params.module === 'projectile_motion';
    const targetExpId = isDynamics ? 'math-exp-4' : 'math-exp-2';
    const draft = loadLabReportDraft(targetExpId);

    if (!isDynamics) {
      const stateDesc =
        frictionCalculations.motionState === 'verge_of_motion'
          ? 'اتزان نهائي - وشك الحركة (Fs = μs R)'
          : frictionCalculations.motionState === 'accelerating'
          ? 'حركة وانزلاق لأسفل المستوى'
          : frictionCalculations.motionState === 'lifted'
          ? 'انفصال وانعدام التلامس'
          : 'اتزان سكوني مستقر';

      const liveRow: Record<string, string> = {
        angle: frictionCalculations.thetaDeg.toFixed(1),
        tan_theta: Math.tan((frictionCalculations.thetaDeg * Math.PI) / 180).toFixed(3),
        normal_force: frictionCalculations.R.toFixed(2),
        downward_force: frictionCalculations.W_par.toFixed(2),
        state: stateDesc,
      };

      const existing = draft.dataTableRows.filter(
        (r) => !r.angle?.includes(frictionCalculations.thetaDeg.toFixed(1))
      );
      draft.dataTableRows = [liveRow, ...existing];

      draft.conclusionAr = `تم التحقق عملياً من شروط الاتزان السكوني: زاوية ميل المستوى θ = ${frictionCalculations.thetaDeg.toFixed(1)}°، معامل الاحتكاك μ_s = ${frictionCalculations.muS.toFixed(3)}، وزاوية الاحتكاك λ = ${frictionCalculations.lambdaDeg.toFixed(1)}°. ${frictionCalculations.motionState === 'verge_of_motion' ? 'الجسم على وشك الحركة عند θ = λ.' : ''}`;
      draft.conclusionEn = `Empirically verified static equilibrium conditions: inclination θ = ${frictionCalculations.thetaDeg.toFixed(1)}°, μ_s = ${frictionCalculations.muS.toFixed(3)}, friction angle λ = ${frictionCalculations.lambdaDeg.toFixed(1)}°.`;
    } else {
      if (params.module === 'collisions_momentum') {
        const liveRow: Record<string, string> = {
          trial_type: params.collisionType === 'direct_1d' ? 'تصادم مرن أحادي البعد' : 'تصادم مائل ثنائي الأبعاد',
          param: `e = ${params.restitutionE}`,
          initial_p: collisionsCalculations.P_total_init_mag.toFixed(2),
          final_p: collisionsCalculations.P_total_final_mag.toFixed(2),
          delta_ke: collisionsCalculations.deltaKE_lost.toFixed(2),
          result: `ΔP = ${(collisionsCalculations.P_total_final_mag - collisionsCalculations.P_total_init_mag).toFixed(3)} kg·m/s (محفوظة)`,
        };
        const existing = draft.dataTableRows.filter(
          (r) => !r.param?.includes(`e = ${params.restitutionE}`)
        );
        draft.dataTableRows = [liveRow, ...existing];
        draft.conclusionAr = `تم التحقق من حفظ كمية الحركة في التصادم (ΔP = 0): كمية الحركة الكلية = ${collisionsCalculations.P_total_init_mag.toFixed(2)} kg·m/s، وفقد طاقة الحركة = ${collisionsCalculations.deltaKE_lost.toFixed(2)} J عند e = ${params.restitutionE}.`;
        draft.conclusionEn = `Empirically verified linear momentum conservation: total momentum = ${collisionsCalculations.P_total_init_mag.toFixed(2)} kg·m/s, KE loss = ${collisionsCalculations.deltaKE_lost.toFixed(2)} J at e = ${params.restitutionE}.`;
      } else {
        const liveRow: Record<string, string> = {
          trial_type: params.dragModel === 'vacuum' ? 'مقذوف بالستي (فراغ)' : 'مقذوف مع مقاومة هواء',
          param: `θ = ${params.launchAngleDeg}°, v0 = ${params.launchVelocityMs} m/s`,
          initial_p: (params.projectileMassKg * params.launchVelocityMs).toFixed(2),
          final_p: (params.projectileMassKg * projectileCalculations.impactSpeed).toFixed(2),
          delta_ke: '0.00',
          result: `المدى الأفقي R = ${projectileCalculations.actualRange.toFixed(2)} m`,
        };
        const existing = draft.dataTableRows.filter(
          (r) => !r.param?.includes(`θ = ${params.launchAngleDeg}°`)
        );
        draft.dataTableRows = [liveRow, ...existing];
        draft.conclusionAr = `تم التحقق من مسار المقذوف: زاوية الإطلاق θ = ${params.launchAngleDeg}°، سرعة الإطلاق v0 = ${params.launchVelocityMs} m/s، المدى الأفقي المحسوب = ${projectileCalculations.actualRange.toFixed(2)} m، أقصى ارتفاع H = ${projectileCalculations.actualMaxH.toFixed(2)} m.`;
        draft.conclusionEn = `Empirically verified projectile trajectory: launch angle θ = ${params.launchAngleDeg}°, v0 = ${params.launchVelocityMs} m/s, range R = ${projectileCalculations.actualRange.toFixed(2)} m, max height H = ${projectileCalculations.actualMaxH.toFixed(2)} m.`;
      }
    }

    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

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
      currentXValue={
        params.module === 'collisions_momentum'
          ? collisionsCalculations.t
          : params.module === 'projectile_motion'
          ? projectileCalculations.curPt.x
          : frictionCalculations.thetaDeg
      }
      currentYValue={
        params.module === 'collisions_momentum'
          ? collisionsCalculations.deltaKE_lost
          : params.module === 'projectile_motion'
          ? projectileCalculations.curPt.y
          : frictionCalculations.actualFriction
      }
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
                className={`min-h-[44px] w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
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
                <option value="collisions_momentum">
                  💥 {isArabic ? '٥. التصادم في بعدين وحفظ كمية الحركة' : '5. 2D Collisions & Momentum Conservation'}
                </option>
                <option value="projectile_motion">
                  🚀 {isArabic ? '٦. حركة المقذوفات ومقاومة الهواء' : '6. Projectile Motion & Ballistics'}
                </option>
              </select>
              <div className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs flex-wrap">
            <Compass className="w-3.5 h-3.5 text-indigo-400 ml-1.5 rtl:ml-0 rtl:mr-1.5" />
            {(['normal_reaction', 'friction_force', 'resultant_reaction', 'support_reactions'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDmmMode(mode)}
                className={`min-h-[44px] px-3 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center ${
                  dmmMode === mode
                    ? 'bg-indigo-600 text-white font-black shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {params.module === 'collisions_momentum'
                  ? mode === 'normal_reaction'
                    ? isArabic ? 'كمية الحركة P' : 'Momentum P'
                    : mode === 'friction_force'
                    ? isArabic ? 'الارتداد e' : 'Restitution e'
                    : mode === 'resultant_reaction'
                    ? isArabic ? 'الدفع J' : 'Impulse J'
                    : isArabic ? 'الفقد ΔKE' : 'KE Loss'
                  : params.module === 'projectile_motion'
                  ? mode === 'normal_reaction'
                    ? isArabic ? 'المدى R' : 'Range R'
                    : mode === 'friction_force'
                    ? isArabic ? 'الذروة H_max' : 'Apex H'
                    : mode === 'resultant_reaction'
                    ? isArabic ? 'السرعة |v|' : 'Speed |v|'
                    : isArabic ? 'الطاقة E' : 'Energy E'
                  : mode === 'normal_reaction'
                  ? isArabic ? 'رد الفعل R' : 'Normal R'
                  : mode === 'friction_force'
                  ? isArabic ? 'الاحتكاك Fr' : 'Friction Fr'
                  : mode === 'resultant_reaction'
                  ? isArabic ? "المحصل R'" : "Resultant R'"
                  : isArabic ? 'الركائز' : 'Reactions'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleOpenOfficialReportModal}
            className="min-h-[44px] px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20 shrink-0"
            title={isArabic ? 'معاينة واستخراج تقرير المعمل الوزاري A4' : 'Official MoE A4 Lab Report'}
          >
            <Printer className="w-4 h-4 text-emerald-200" />
            <span>{isArabic ? 'تقرير معملي A4' : 'Lab Report A4'}</span>
          </button>
        </div>

        {/* Live Simulation Viewport */}
        <div className={`rounded-2xl border overflow-hidden shadow-xl ${
          isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950'
        }`}>
          <CanvasSimulationViewport
            id="mechanics-canvas-viewport"
            lang={lang}
            theme={theme}
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
              <span>{isArabic ? 'قوانين الحركة والاتزان:' : 'Governing Physical Laws:'}</span>
            </div>
            <p className="font-mono text-xs font-bold text-emerald-300 mt-1">
              {params.module === 'friction_plane'
                ? `Fs = μs R = ${frictionCalculations.Fs.toFixed(1)} N (λ = ${frictionCalculations.lambdaDeg.toFixed(1)}°)`
                : params.module === 'general_equilibrium'
                ? `ΣFx = 0, ΣFy = 0, ΣMA = 0 (RA = ${equilibriumCalculations.RA} N)`
                : params.module === 'moments_beam'
                ? `ΣMA = 0 ⇒ RB = ${momentsCalculations.RB.toFixed(1)} N`
                : params.module === 'collisions_momentum'
                ? `ΣP_i = ΣP_f = ${collisionsCalculations.P_total_init_mag.toFixed(2)} kg·m/s (e = ${collisionsCalculations.e.toFixed(2)})`
                : params.module === 'projectile_motion'
                ? `H_max = ${projectileCalculations.actualMaxH.toFixed(1)} m | R = ${projectileCalculations.actualRange.toFixed(1)} m`
                : `XG = ${centroidCalculations.X_G.toFixed(2)} cm, YG = ${centroidCalculations.Y_G.toFixed(2)} cm`}
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-slate-950/60 border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'المحصلة والطاقة والدفع:' : 'Dynamic & Energy Metrics:'}</span>
            </div>
            <p className="font-mono text-xs font-bold text-indigo-300 mt-1">
              {params.module === 'friction_plane'
                ? `R' = ${frictionCalculations.R_prime.toFixed(1)} N (φ = ${frictionCalculations.contactAnglePhiDeg.toFixed(1)}°)`
                : params.module === 'general_equilibrium'
                ? `Ground Total = ${Math.sqrt(equilibriumCalculations.RA ** 2 + equilibriumCalculations.frictionDemanded ** 2).toFixed(1)} N`
                : params.module === 'moments_beam'
                ? `RA = ${momentsCalculations.RA.toFixed(1)} N, RB = ${momentsCalculations.RB.toFixed(1)} N`
                : params.module === 'collisions_momentum'
                ? `J = ${collisionsCalculations.J.toFixed(1)} N·s | ΔKE = ${collisionsCalculations.deltaKE_lost.toFixed(1)} J (${collisionsCalculations.energyLossPercent.toFixed(1)}%)`
                : params.module === 'projectile_motion'
                ? `|v(t)| = ${projectileCalculations.currentSpeed.toFixed(1)} m/s | E_mech = ${projectileCalculations.currentTotalE.toFixed(0)} J`
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
                : params.module === 'collisions_momentum'
                ? isArabic
                  ? 'كمية الحركة كمية متجهة ومحفوظة دائماً في كافة أنواع التصادم، بينما طاقة الحركة تُحفظ فقط في التصادم المرن التام (e = ١) وتفقد أقصى قيمة لها عند الالتحام التام (e = ٠).'
                  : 'Linear momentum is strictly conserved in all collisions, while kinetic energy is conserved only when e = 1.0 and has maximum dissipation during plastic coalescence (e = 0).'
                : params.module === 'projectile_motion'
                ? isArabic
                  ? 'في الفراغ، يتحقق أقصى مدى أفقي عند زاوية ٤٥°، وتتساوى المديات عند الزوايا المتتامة (مثل ٣٠° و ٦٠°)، بينما تُقصر مقاومة الهواء المدى وتجعل زاوية السقوط أكثر انحداراً.'
                  : 'In vacuum, maximum range occurs at 45° with identical ranges for complementary angles (30° & 60°), while quadratic air drag shortens range and steepens descent.'
                : isArabic
                ? 'عند اقتطاع دائرة ممسة بمحيط قرص (نق/٢)، ينزاح مركز الثقل بمقدار نق/٦ بعيداً عن الثقب.'
                : 'Tangent circular cutout of radius R/2 shifts the centroid by exactly R/6.'}
            </p>
          </div>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId={
          params.module === 'collisions_momentum' || params.module === 'projectile_motion'
            ? 'math-exp-4'
            : 'math-exp-2'
        }
        lang={lang ?? 'ar'}
        theme={theme}
      />
    </VirtualLabShell>
  );
};
