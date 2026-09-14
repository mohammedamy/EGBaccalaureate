import React, { useRef, useState, useCallback, useMemo } from 'react';
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
  Compass,
  Sliders,
  Sparkles,
  Layers,
  Gauge,
  Zap,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type MagnetismMode = 'field_sources' | 'lorentz_force' | 'galvanometer';
export type ConductorType = 'straight_wire' | 'dual_wires' | 'circular_loop' | 'solenoid';

interface MagnetismParams {
  magnetismMode: MagnetismMode;
  conductorType: ConductorType;

  // Mode A: Conductors & Field
  wireCurrent: number; // 1 - 30 A
  wireDistanceCm: number; // 1 - 25 cm
  wireCurrentDir: 'out' | 'in'; // Out of page ⊙ vs Into page ⊗

  // Dual Wires
  wire1Current: number; // 1 - 30 A
  wire2Current: number; // 1 - 30 A
  wiresSeparationCm: number; // 5 - 30 cm
  dualWiresCurrentDirs: 'same' | 'opposite'; // Same direction (attraction) vs opposite (repulsion)

  // Circular Loop
  loopCurrent: number; // 1 - 20 A
  loopTurns: number; // 1 - 50 turns
  loopRadiusCm: number; // 2 - 20 cm

  // Solenoid
  solenoidCurrent: number; // 0.5 - 15 A
  solenoidTurns: number; // 50 - 600 turns
  solenoidLengthM: number; // 0.1 - 0.8 m
  hasIronCore: boolean; // Air vs Soft Iron (mu_r ~ 1500)

  // Mode B: Lorentz Force & Mutual Force
  bFieldTesla: number; // 0.1 - 2.5 T
  forceCurrent: number; // 1 - 20 A
  forceWireLengthM: number; // 0.1 - 1.5 m
  forceAngleDeg: number; // 0° - 180°

  // Mode C: Torque & Galvanometer
  galvBFieldTesla: number; // 0.2 - 2.0 T
  galvCurrentMa: number; // 0.1 - 10.0 mA
  galvTurns: number; // 50 - 500
  galvCoilWidthCm: number; // 2 - 10 cm
  galvCoilLengthCm: number; // 2 - 12 cm
  springConstantU: number; // Torsion constant C (10 - 100 µN·m/rad)
  isRadialField: boolean; // Concave poles + iron cylinder vs flat uniform poles
  galvAngleDeg: number; // Angle in flat mode (0° - 90°)
}

interface MagnetismSimState {
  wireB_Tesla: number;
  wireB_MicroTesla: number;
  neutralPointDistCm: number | null;
  loopB_Tesla: number;
  solenoidB_Tesla: number;
  lorentzForceN: number;
  mutualForcePerLengthN: number;
  galvTorqueNm: number;
  galvDeflectionDeg: number;
  galvSensitivityDegPerMa: number;
  hallProbeB_Tesla: number;
}

const MU_0 = 4 * Math.PI * 1e-7; // T·m/A
const IRON_PERMEABILITY_FACTOR = 1500;

const INITIAL_MAGNETISM_PARAMS: MagnetismParams = {
  magnetismMode: 'field_sources',
  conductorType: 'straight_wire',

  wireCurrent: 10,
  wireDistanceCm: 5,
  wireCurrentDir: 'out',

  wire1Current: 10,
  wire2Current: 20,
  wiresSeparationCm: 15,
  dualWiresCurrentDirs: 'same',

  loopCurrent: 5,
  loopTurns: 10,
  loopRadiusCm: 8,

  solenoidCurrent: 4,
  solenoidTurns: 200,
  solenoidLengthM: 0.2,
  hasIronCore: true,

  bFieldTesla: 0.8,
  forceCurrent: 5,
  forceWireLengthM: 0.4,
  forceAngleDeg: 90,

  galvBFieldTesla: 0.8,
  galvCurrentMa: 2.5,
  galvTurns: 200,
  galvCoilWidthCm: 3.0,
  galvCoilLengthCm: 5.0,
  springConstantU: 30, // µN·m/rad
  isRadialField: true,
  galvAngleDeg: 90,
};

const MAGNETISM_PARAM_SCHEMA: LabParameterSchema<MagnetismParams> = {
  magnetismMode: {
    key: 'magnetismMode',
    labelEn: 'Regime Mode',
    labelAr: 'نظام التجربة',
    type: 'select',
    defaultValue: 'field_sources',
  },
  conductorType: {
    key: 'conductorType',
    labelEn: 'Conductor Geometry',
    labelAr: 'شكل الموصل',
    type: 'select',
    defaultValue: 'straight_wire',
  },
  wireCurrent: {
    key: 'wireCurrent',
    labelEn: 'Straight Wire Current (I)',
    labelAr: 'شدة تيار السلك المستقيم (I)',
    type: 'number',
    min: 1,
    max: 30,
    step: 1,
    unit: 'A',
    defaultValue: 10,
  },
  wireDistanceCm: {
    key: 'wireDistanceCm',
    labelEn: 'Perpendicular Distance (d)',
    labelAr: 'البعد العمودي (d)',
    type: 'number',
    min: 1,
    max: 25,
    step: 0.5,
    unit: 'cm',
    defaultValue: 5,
  },
  wireCurrentDir: {
    key: 'wireCurrentDir',
    labelEn: 'Current Vector Direction',
    labelAr: 'اتجاه متجه التيار',
    type: 'select',
    defaultValue: 'out',
  },
  wire1Current: {
    key: 'wire1Current',
    labelEn: 'Wire 1 Current (I₁)',
    labelAr: 'تيار السلك الأول (I₁)',
    type: 'number',
    min: 1,
    max: 30,
    step: 1,
    unit: 'A',
    defaultValue: 10,
  },
  wire2Current: {
    key: 'wire2Current',
    labelEn: 'Wire 2 Current (I₂)',
    labelAr: 'تيار السلك الثاني (I₂)',
    type: 'number',
    min: 1,
    max: 30,
    step: 1,
    unit: 'A',
    defaultValue: 20,
  },
  wiresSeparationCm: {
    key: 'wiresSeparationCm',
    labelEn: 'Separation Distance (D)',
    labelAr: 'المسافة بين السلكين (D)',
    type: 'number',
    min: 5,
    max: 30,
    step: 1,
    unit: 'cm',
    defaultValue: 15,
  },
  dualWiresCurrentDirs: {
    key: 'dualWiresCurrentDirs',
    labelEn: 'Current Direction Pairing',
    labelAr: 'اتجاها التيارين في السلكين',
    type: 'select',
    defaultValue: 'same',
  },
  loopCurrent: {
    key: 'loopCurrent',
    labelEn: 'Coil Current (I)',
    labelAr: 'شدة تيار الملف الدائري (I)',
    type: 'number',
    min: 1,
    max: 20,
    step: 0.5,
    unit: 'A',
    defaultValue: 5,
  },
  loopTurns: {
    key: 'loopTurns',
    labelEn: 'Number of Turns (N)',
    labelAr: 'عدد لفات الملف (N)',
    type: 'number',
    min: 1,
    max: 50,
    step: 1,
    unit: 'turns',
    defaultValue: 10,
  },
  loopRadiusCm: {
    key: 'loopRadiusCm',
    labelEn: 'Coil Radius (r)',
    labelAr: 'نصف قطر الملف (r)',
    type: 'number',
    min: 2,
    max: 20,
    step: 0.5,
    unit: 'cm',
    defaultValue: 8,
  },
  solenoidCurrent: {
    key: 'solenoidCurrent',
    labelEn: 'Solenoid Current (I)',
    labelAr: 'تيار الملف اللولبي (I)',
    type: 'number',
    min: 0.5,
    max: 15,
    step: 0.5,
    unit: 'A',
    defaultValue: 4,
  },
  solenoidTurns: {
    key: 'solenoidTurns',
    labelEn: 'Solenoid Turns (N)',
    labelAr: 'عدد لفات الملف اللولبي (N)',
    type: 'number',
    min: 50,
    max: 600,
    step: 25,
    unit: 'turns',
    defaultValue: 200,
  },
  solenoidLengthM: {
    key: 'solenoidLengthM',
    labelEn: 'Solenoid Length (L)',
    labelAr: 'طول الملف اللولبي (L)',
    type: 'number',
    min: 0.1,
    max: 0.8,
    step: 0.05,
    unit: 'm',
    defaultValue: 0.2,
  },
  hasIronCore: {
    key: 'hasIronCore',
    labelEn: 'Soft Iron Core',
    labelAr: 'قلب حديد مطاوع',
    type: 'boolean',
    defaultValue: true,
  },
  bFieldTesla: {
    key: 'bFieldTesla',
    labelEn: 'Magnetic Flux Density (B)',
    labelAr: 'كثافة الفيض المغناطيسي (B)',
    type: 'number',
    min: 0.1,
    max: 2.5,
    step: 0.1,
    unit: 'T',
    defaultValue: 0.8,
  },
  forceCurrent: {
    key: 'forceCurrent',
    labelEn: 'Conductor Current (I)',
    labelAr: 'شدة تيار السلك (I)',
    type: 'number',
    min: 1,
    max: 20,
    step: 0.5,
    unit: 'A',
    defaultValue: 5,
  },
  forceWireLengthM: {
    key: 'forceWireLengthM',
    labelEn: 'Wire Length in Field (L)',
    labelAr: 'طول السلك داخل المجال (L)',
    type: 'number',
    min: 0.1,
    max: 1.5,
    step: 0.1,
    unit: 'm',
    defaultValue: 0.4,
  },
  forceAngleDeg: {
    key: 'forceAngleDeg',
    labelEn: 'Conductor Angle (θ)',
    labelAr: 'زاوية ميل السلك على المجال (θ)',
    type: 'number',
    min: 0,
    max: 180,
    step: 5,
    unit: '°',
    defaultValue: 90,
  },
  galvBFieldTesla: {
    key: 'galvBFieldTesla',
    labelEn: 'Air Gap Magnetic Field (B)',
    labelAr: 'مجال الثغرة الهوائية (B)',
    type: 'number',
    min: 0.2,
    max: 2.0,
    step: 0.1,
    unit: 'T',
    defaultValue: 0.8,
  },
  galvCurrentMa: {
    key: 'galvCurrentMa',
    labelEn: 'Excitation Current (I)',
    labelAr: 'تيار الجلفانومتر (I)',
    type: 'number',
    min: 0.1,
    max: 10.0,
    step: 0.1,
    unit: 'mA',
    defaultValue: 2.5,
  },
  galvTurns: {
    key: 'galvTurns',
    labelEn: 'Galvanometer Coil Turns (N)',
    labelAr: 'عدد لفات ملف الجلفانومتر (N)',
    type: 'number',
    min: 50,
    max: 500,
    step: 25,
    defaultValue: 200,
  },
  galvCoilWidthCm: {
    key: 'galvCoilWidthCm',
    labelEn: 'Coil Width (w)',
    labelAr: 'عرض الملف (w)',
    type: 'number',
    min: 2,
    max: 10,
    step: 0.5,
    unit: 'cm',
    defaultValue: 3.0,
  },
  galvCoilLengthCm: {
    key: 'galvCoilLengthCm',
    labelEn: 'Coil Length (h)',
    labelAr: 'طول الملف (h)',
    type: 'number',
    min: 2,
    max: 12,
    step: 0.5,
    unit: 'cm',
    defaultValue: 5.0,
  },
  springConstantU: {
    key: 'springConstantU',
    labelEn: 'Spring Torsion Constant (C)',
    labelAr: 'ثابت لي الزنبرك (C)',
    type: 'number',
    min: 10,
    max: 100,
    step: 5,
    unit: 'µN·m/rad',
    defaultValue: 30,
  },
  isRadialField: {
    key: 'isRadialField',
    labelEn: 'Radial Magnetic Field',
    labelAr: 'مجال مغناطيسي نصف قطري',
    type: 'boolean',
    defaultValue: true,
  },
  galvAngleDeg: {
    key: 'galvAngleDeg',
    labelEn: 'Flat Field Coil Angle (α)',
    labelAr: 'زاوية الملف في المجال المستوي (α)',
    type: 'number',
    min: 0,
    max: 90,
    step: 5,
    unit: '°',
    defaultValue: 90,
  },
};

const MAGNETISM_PRESETS: LabPreset<MagnetismParams>[] = [
  {
    id: 'preset-ampere-wire',
    nameEn: 'Straight Wire at 5 cm',
    nameAr: 'سلك مستقيم عند بعد 5 سم',
    descriptionEn: 'Biot-Savart & Ampère Law: B = (µ₀ I) / (2π d)',
    descriptionAr: 'قانون أمبير الدائري وحساب كثافة الفيض المغناطيسي',
    params: {
      magnetismMode: 'field_sources',
      conductorType: 'straight_wire',
      wireCurrent: 10,
      wireDistanceCm: 5,
    },
  },
  {
    id: 'preset-neutral-point',
    nameEn: 'Parallel Wires & Neutral Point',
    nameAr: 'سلكان متوازيان ونقطة التعادل',
    descriptionEn: 'Opposite currents creating a cancellation point outside weaker wire',
    descriptionAr: 'تياران متعاكسان لتكوين نقطة تعادل خارج السلكين بجوار التيار الأقل',
    params: {
      magnetismMode: 'field_sources',
      conductorType: 'dual_wires',
      wire1Current: 10,
      wire2Current: 20,
      wiresSeparationCm: 15,
      dualWiresCurrentDirs: 'opposite',
    },
  },
  {
    id: 'preset-solenoid-core',
    nameEn: 'Solenoid with Soft Iron Core',
    nameAr: 'ملف لولبي بقلب من الحديد المطاوع',
    descriptionEn: 'High magnetic permeability: B = µ·n·I (up to 1500x multiplication)',
    descriptionAr: 'النفاذية المغناطيسية العالية ومضاعفة الفيض 1500 ضعف',
    params: {
      magnetismMode: 'field_sources',
      conductorType: 'solenoid',
      solenoidCurrent: 4,
      solenoidTurns: 200,
      solenoidLengthM: 0.2,
      hasIronCore: true,
    },
  },
  {
    id: 'preset-max-lorentz',
    nameEn: 'Perpendicular Lorentz Force (θ=90°)',
    nameAr: 'أقصى قوة لورنتز (تعامد كامل θ=90°)',
    descriptionEn: 'Fleming’s Left-Hand Rule maximum force: F = B·I·L',
    descriptionAr: 'تطبيق قاعدة اليد اليسرى لفليمنغ وأقصى قوة مغناطيسية مؤثرة',
    params: {
      magnetismMode: 'lorentz_force',
      bFieldTesla: 1.0,
      forceCurrent: 10,
      forceWireLengthM: 0.5,
      forceAngleDeg: 90,
    },
  },
  {
    id: 'preset-galvanometer-radial',
    nameEn: 'Moving-Coil Galvanometer (Radial Field)',
    nameAr: 'الجلفانومتر ذو المجال نصف القطري',
    descriptionEn: 'Concave poles and soft iron core ensuring strictly uniform scale',
    descriptionAr: 'الأقطاب المقعرة وأسطوانة الحديد المطاوع لإنتاج تدريج منتظم',
    params: {
      magnetismMode: 'galvanometer',
      galvBFieldTesla: 0.8,
      galvCurrentMa: 5.0,
      galvTurns: 200,
      springConstantU: 30,
      isRadialField: true,
    },
  },
];

const MAGNETISM_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe-neutral-point',
    titleEn: 'Challenge 1: Parallel Conductors & Neutral Point',
    titleAr: 'التحدي 1: السلكان المتوازيان وتحديد موقع نقطة التعادل',
    scenarioEn:
      'Two parallel straight wires carry unequal currents in opposite directions (I₁ = 10 A upwards, I₂ = 30 A downwards).',
    scenarioAr:
      'سلكان مستقيمان متوازيان يمر بهما تياران مختلفان في اتجاهين متضادين (I₁ = 10 A لأعلى، I₂ = 30 A لأسفل).',
    questionEn: 'Where is the magnetic neutral point located?',
    questionAr: 'أين تقع نقطة التعادل المغناطيسي؟',
    optionsEn: [
      'Exactly in the middle halfway between the two wires',
      'Outside the two wires, closer to the wire with smaller current (I₁)',
      'Outside the two wires, closer to the wire with larger current (I₂)',
      'No neutral point can ever exist',
    ],
    optionsAr: [
      'في منتصف المسافة تماماً بين السلكين',
      'خارج السلكين، وتكون أقرب إلى السلك الذي يمر به تيار أقل (I₁)',
      'خارج السلكين، وتكون أقرب إلى السلك الذي يمر به تيار أكبر (I₂)',
      'يستحيل تكون نقطة تعادل',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Between opposite currents, fields add up. Outside the wires, fields oppose each other. Cancellation (B₁ = B₂) requires being closer to the smaller current: (I₁ / d₁) = (I₂ / d₂).',
    scientificExplanationAr:
      'بين السلكين يجمع المجالان فلا تنعدم المحصلة. وخارج السلكين تكون المجالات متعاكسة، ولكي يتساوى المجالان B₁ = B₂، يجب أن تكون النقطة أقرب للسلك ذي التيار الأقل.',
  },
  {
    id: 'poe-coil-to-solenoid',
    titleEn: 'Challenge 2: Circular Loop Stretched into a Solenoid',
    titleAr: 'التحدي 2: سحب الملف الدائري بانتظام ليصبح ملفاً لولبياً',
    scenarioEn:
      'A circular coil of radius r and turns N carrying current I has flux density B_coil at its center. It is stretched along its axis to form a solenoid of length L = 20r.',
    scenarioAr:
      'ملف دائري نصف قطره r يمر به تيار I كثافة فيضه عند المركز B_coil. أُبعدت لفاته بانتظام ليصبح ملفاً لولبياً طوله L = 20r.',
    questionEn: 'What is the new axial flux density B_sol?',
    questionAr: 'فكم تصبح كثافة الفيض عند محوره B_sol؟',
    optionsEn: [
      'B_sol = 0.1 B_coil (Decreases 10-fold)',
      'B_sol = 10 B_coil (Increases 10-fold)',
      'B_sol = B_coil (Unchanged)',
    ],
    optionsAr: [
      'B_sol = 0.1 B_coil (تقل إلى العشر 1/10)',
      'B_sol = 10 B_coil (تزداد بمقدار 10 أضعاف)',
      'B_sol = B_coil (لا تتغير)',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'B_sol / B_coil = 2r / L = 2r / (20r) = 1/10 = 0.1. Spreading the turns over length L decreases the axial flux density.',
    scientificExplanationAr:
      'النسبة بين المجالين هي B_sol / B_coil = 2r / L = 2r / (20r) = 1/10 = 0.1، فتقل كثافة الفيض إلى العشر.',
  },
  {
    id: 'poe-galvanometer-scale',
    titleEn: 'Challenge 3: Galvanometer Concave Poles & Uniform Scale',
    titleAr: 'التحدي 3: الأقطاب المقعرة وانتظام تدريج الجلفانومتر',
    scenarioEn:
      'The permanent magnet poles of a moving-coil galvanometer are made concave with a central fixed soft iron cylinder.',
    scenarioAr:
      'تُصنع أقطاب المغناطيس في الجلفانومتر ذي الملف المتحرك مقعرة مع وجود أسطوانة من الحديد المطاوع في المركز.',
    questionEn: 'What is the physical function of this geometric arrangement?',
    questionAr: 'ما هي الوظيفة الفيزيائية لهذا الترتيب الهندسي؟',
    optionsEn: [
      'To make magnetic flux lines radial, ensuring constant max torque (sin α = 1) and a uniform linear scale',
      'To turn the galvanometer into a continuously rotating electric motor',
      'To shield the galvanometer from the Earth’s gravitational field',
    ],
    optionsAr: [
      'لتكون خطوط الفيض المغناطيسي على هيئة أنصاف أقطار، فيكون مستوى الملف دائماً موازياً للمجال والتدريج منتظماً',
      'لتحويل الجلفانومتر إلى محرك يدور باستمرار',
      'لعزل الجلفانومتر عن مجال الجاذبية الأرضية',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Radial field lines ensure the coil plane is always parallel to B in any angular position. Thus τ = BIAN is constant for a given current, and deflection θ is strictly proportional to I (θ ∝ I).',
    scientificExplanationAr:
      'خطوط الفيض نصف القطرية تجعل مستوى الملف دائماً موازياً لخطوط الفيض في أي وضع، فيكون العزم ثابتاً وتتناسب زاوية الانحراف طردياً مع التيار لينتج تدريج منتظم.',
  },
];

export const MagnetismLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const animPhaseRef = useRef<number>(0);
  const pointerAngleRef = useRef<number>(0);

  // Draggable Hall Sensor Probe coordinates (in normalized canvas coordinates 0-1)
  const [probePos, setProbePos] = useState<{ x: number; y: number }>({ x: 0.65, y: 0.5 });
  const [isDraggingProbe, setIsDraggingProbe] = useState<boolean>(false);

  const labDef: LabDefinition<MagnetismParams, MagnetismSimState> = {
    id: 'magnetism-bench-lab',
    subject: 'physics',
    chapterRef: 'Chapter 2: Electromagnetism & Measuring Instruments',
    titleEn: 'Electromagnetism, Lorentz Force & Moving-Coil Galvanometer',
    titleAr: 'التأثير المغناطيسي، قوة لورنتز، والجلفانومتر ذو الملف المتحرك',
    subtitleEn: 'Ampère’s Circuital Law, Mutual Conductor Dynamics, and Radial Torque Bench',
    subtitleAr: 'قانون أمبير الدائري، القوى المتبادلة بين الأسلاك، والتدريج المنتظم للجلفانومتر',
    objectives: [
      {
        id: 'obj-ampere',
        textEn: 'Verify Ampère circuital law for straight wires, circular coils, and solenoids',
        textAr: 'تحقيق قانون أمبير الدائري وحساب كثافة الفيض للأسلاك والملفات',
        bloomLevel: 'apply',
      },
      {
        id: 'obj-lorentz',
        textEn: 'Investigate the magnetic Lorentz force and Fleming’s Left-Hand Rule',
        textAr: 'استقصاء القوة المغناطيسية المؤثرة على سلك وقاعدة اليد اليسرى لفليمنغ',
        bloomLevel: 'analyze',
      },
      {
        id: 'obj-galvanometer',
        textEn: 'Demonstrate radial magnetic fields, spring couple equilibrium, and uniform galvanometer scale',
        textAr: 'إثبات انتظام تدريج الجلفانومتر بفعل خطوط الفيض نصف القطرية وزوج الزنبركين',
        bloomLevel: 'evaluate',
      },
    ],
    defaultParams: INITIAL_MAGNETISM_PARAMS,
    paramSchema: MAGNETISM_PARAM_SCHEMA,
    presets: MAGNETISM_PRESETS,
    poePrompts: MAGNETISM_POE_PROMPTS,
    notebookConfig: {
      xLabelEn: 'Conductor Current (I)',
      xLabelAr: 'شدة التيار (I)',
      xUnit: 'A',
      yLabelEn: 'Magnetic Flux Density (B)',
      yLabelAr: 'كثافة الفيض (B)',
      yUnit: 'µT',
      recommendedPointsCount: 6,
    },
    supportedInstruments: ['multimeter', 'oscilloscope', 'scratchpad'],
  };

  const lab = useVirtualLab<MagnetismParams, MagnetismSimState>({
    definition: labDef,
  });

  const { params } = lab;

  // Memoized physical simulation state
  const state: MagnetismSimState = useMemo(() => {
    // 1. Straight Wire: B = (mu0 * I) / (2 * pi * d) = (2e-7 * I) / d
    const wireDistM = Math.max(0.005, params.wireDistanceCm / 100);
    const wireB_Tesla = (2e-7 * params.wireCurrent) / wireDistM;
    const wireB_MicroTesla = wireB_Tesla * 1e6;

    // 2. Dual Wires Neutral Point
    let neutralPointDistCm: number | null = null;
    const D = params.wiresSeparationCm;
    if (params.dualWiresCurrentDirs === 'same') {
      neutralPointDistCm = (D * params.wire1Current) / (params.wire1Current + params.wire2Current);
    } else {
      if (params.wire1Current !== params.wire2Current) {
        if (params.wire1Current < params.wire2Current) {
          neutralPointDistCm = -(D * params.wire1Current) / (params.wire2Current - params.wire1Current);
        } else {
          neutralPointDistCm = D + (D * params.wire2Current) / (params.wire1Current - params.wire2Current);
        }
      }
    }

    // 3. Circular Loop: B = (mu0 * N * I) / (2 * r)
    const loopRadiusM = Math.max(0.01, params.loopRadiusCm / 100);
    const loopB_Tesla = (MU_0 * params.loopTurns * params.loopCurrent) / (2 * loopRadiusM);

    // 4. Solenoid: B = mu * (N / L) * I
    const mu_eff = params.hasIronCore ? MU_0 * IRON_PERMEABILITY_FACTOR : MU_0;
    const solenoidB_Tesla = (mu_eff * params.solenoidTurns * params.solenoidCurrent) / Math.max(0.05, params.solenoidLengthM);

    // 5. Lorentz Force: F = B * I * L * sin(theta)
    const angleRad = (params.forceAngleDeg * Math.PI) / 180;
    const lorentzForceN = params.bFieldTesla * params.forceCurrent * params.forceWireLengthM * Math.sin(angleRad);

    // 6. Mutual Force per unit length: F/L = (mu0 * I1 * I2) / (2 * pi * d)
    const mutualForcePerLengthN = (2e-7 * params.wire1Current * params.wire2Current) / Math.max(0.01, params.wiresSeparationCm / 100);

    // 7. Moving-Coil Galvanometer Torque & Deflection
    const coilAreaM2 = (params.galvCoilWidthCm / 100) * (params.galvCoilLengthCm / 100);
    const currentA = (params.galvCurrentMa / 1000);
    const sinAlpha = params.isRadialField ? 1.0 : Math.sin((params.galvAngleDeg * Math.PI) / 180);
    const galvTorqueNm = params.galvBFieldTesla * currentA * coilAreaM2 * params.galvTurns * sinAlpha;

    // Equilibrium: tau_mag = tau_spring => C * theta_rad = tau_mag
    const C_Nm_per_rad = params.springConstantU * 1e-6;
    const thetaRad = galvTorqueNm / Math.max(1e-7, C_Nm_per_rad);
    const galvDeflectionDeg = Math.min(85, (thetaRad * 180) / Math.PI);
    const galvSensitivityDegPerMa = params.galvCurrentMa > 0 ? galvDeflectionDeg / params.galvCurrentMa : 0;

    // Hall Probe calculation based on probePos in canvas (0.0 to 1.0)
    let hallProbeB_Tesla = wireB_Tesla;
    if (params.magnetismMode === 'field_sources') {
      if (params.conductorType === 'straight_wire') {
        const distFromCenter = Math.hypot(probePos.x - 0.5, probePos.y - 0.5);
        const physicalDistM = Math.max(0.01, distFromCenter * 0.4);
        hallProbeB_Tesla = (2e-7 * params.wireCurrent) / physicalDistM;
      } else if (params.conductorType === 'dual_wires') {
        const d1 = Math.max(0.01, Math.abs(probePos.x - 0.35) * 0.5);
        const d2 = Math.max(0.01, Math.abs(probePos.x - 0.65) * 0.5);
        const b1 = (2e-7 * params.wire1Current) / d1;
        const b2 = (2e-7 * params.wire2Current) / d2;
        hallProbeB_Tesla = params.dualWiresCurrentDirs === 'same' ? Math.abs(b1 - b2) : b1 + b2;
      } else if (params.conductorType === 'circular_loop') {
        const distCenter = Math.hypot(probePos.x - 0.5, probePos.y - 0.5);
        hallProbeB_Tesla = loopB_Tesla / (1 + (distCenter * 5) ** 2);
      } else {
        hallProbeB_Tesla = solenoidB_Tesla * (probePos.x > 0.3 && probePos.x < 0.7 && probePos.y > 0.35 && probePos.y < 0.65 ? 1.0 : 0.08);
      }
    } else if (params.magnetismMode === 'lorentz_force') {
      hallProbeB_Tesla = params.bFieldTesla;
    } else {
      hallProbeB_Tesla = params.galvBFieldTesla;
    }

    return {
      wireB_Tesla,
      wireB_MicroTesla,
      neutralPointDistCm,
      loopB_Tesla,
      solenoidB_Tesla,
      lorentzForceN,
      mutualForcePerLengthN,
      galvTorqueNm,
      galvDeflectionDeg,
      galvSensitivityDegPerMa,
      hallProbeB_Tesla,
    };
  }, [
    params,
    probePos.x,
    probePos.y,
  ]);

  // Pointer damping animation
  pointerAngleRef.current += (state.galvDeflectionDeg - pointerAngleRef.current) * 0.2;

  // Telemetry Cards
  const telemetryMetrics: LabTelemetryMetric[] = useMemo(() => [
    {
      id: 'flux_density',
      labelEn: 'Magnetic Flux Density (B)',
      labelAr: 'كثافة الفيض المغناطيسي (B)',
      value:
        params.magnetismMode === 'field_sources'
          ? params.conductorType === 'straight_wire'
            ? `${state.wireB_MicroTesla.toFixed(1)} µT`
            : params.conductorType === 'circular_loop'
            ? `${(state.loopB_Tesla * 1e3).toFixed(2)} mT`
            : `${state.solenoidB_Tesla >= 0.01 ? state.solenoidB_Tesla.toFixed(3) : (state.solenoidB_Tesla * 1e3).toFixed(2)} ${state.solenoidB_Tesla >= 0.01 ? 'T' : 'mT'}`
          : params.magnetismMode === 'lorentz_force'
          ? `${params.bFieldTesla.toFixed(2)} T`
          : `${params.galvBFieldTesla.toFixed(2)} T`,
      unit: '',
    },
    {
      id: 'active_force_torque',
      labelEn:
        params.magnetismMode === 'lorentz_force'
          ? 'Lorentz Force (F)'
          : params.magnetismMode === 'galvanometer'
          ? 'Deflecting Torque (τ)'
          : 'Hall Sensor Reading',
      labelAr:
        params.magnetismMode === 'lorentz_force'
          ? 'قوة لورنتز المؤثرة (F)'
          : params.magnetismMode === 'galvanometer'
          ? 'عزم الازدواج المغناطيسي (τ)'
          : 'قراءة مجس هول المحمول',
      value:
        params.magnetismMode === 'lorentz_force'
          ? `${state.lorentzForceN.toFixed(3)} N`
          : params.magnetismMode === 'galvanometer'
          ? `${(state.galvTorqueNm * 1e6).toFixed(1)} µN·m`
          : `${state.hallProbeB_Tesla >= 0.01 ? state.hallProbeB_Tesla.toFixed(3) + ' T' : (state.hallProbeB_Tesla * 1e6).toFixed(1) + ' µT'}`,
      unit: '',
    },
    {
      id: 'pointer_deflection',
      labelEn:
        params.magnetismMode === 'galvanometer'
          ? 'Deflection Angle (θ)'
          : params.magnetismMode === 'field_sources' && params.conductorType === 'dual_wires'
          ? 'Neutral Point (x₀)'
          : 'Excitation Current (I)',
      labelAr:
        params.magnetismMode === 'galvanometer'
          ? 'زاوية الانحراف (θ)'
          : params.magnetismMode === 'field_sources' && params.conductorType === 'dual_wires'
          ? 'موقع نقطة التعادل (x₀)'
          : 'شدة تيار التغذية (I)',
      value:
        params.magnetismMode === 'galvanometer'
          ? `${state.galvDeflectionDeg.toFixed(1)}°`
          : params.magnetismMode === 'field_sources' && params.conductorType === 'dual_wires'
          ? state.neutralPointDistCm !== null
            ? `${state.neutralPointDistCm.toFixed(1)} cm`
            : 'None'
          : params.magnetismMode === 'lorentz_force'
          ? `${params.forceCurrent.toFixed(1)} A`
          : `${params.wireCurrent.toFixed(1)} A`,
      unit: '',
    },
    {
      id: 'scale_sensitivity',
      labelEn:
        params.magnetismMode === 'galvanometer'
          ? 'Sensitivity (S = θ/I)'
          : 'Permeability Factor (µ_r)',
      labelAr:
        params.magnetismMode === 'galvanometer'
          ? 'حساسية الجلفانومتر (S = θ/I)'
          : 'معامل النفاذية النسبي (µ_r)',
      value:
        params.magnetismMode === 'galvanometer'
          ? `${state.galvSensitivityDegPerMa.toFixed(2)} °/mA`
          : params.conductorType === 'solenoid' && params.hasIronCore
          ? '1500 (Soft Iron)'
          : '1.0 (Air)',
      unit: '',
    },
  ], [params, state]);

  // DMM Readings
  const dmmReading: DMMReading = useMemo(() => ({
    voltageDC:
      params.magnetismMode === 'galvanometer'
        ? params.galvCurrentMa * 0.05
        : params.magnetismMode === 'lorentz_force'
        ? params.forceCurrent * 0.2
        : 12.0,
    voltageAC: 0.0,
    currentDC:
      params.magnetismMode === 'galvanometer'
        ? params.galvCurrentMa / 1000
        : params.magnetismMode === 'lorentz_force'
        ? params.forceCurrent
        : params.conductorType === 'solenoid'
        ? params.solenoidCurrent
        : params.wireCurrent,
    resistance: 100,
    continuityBeep: false,
  }), [params]);

  // Oscilloscope Signals
  const oscCh1: WaveformSignal = useMemo(() => ({
    amplitude: Math.min(5.0, state.galvTorqueNm * 1e4 + 1.0),
    frequency: 50,
    phaseDeg: 0,
    type: 'sine',
  }), [state.galvTorqueNm]);

  const oscCh2: WaveformSignal = useMemo(() => ({
    amplitude: Math.min(5.0, state.galvDeflectionDeg * 0.05 + 0.5),
    frequency: 25,
    phaseDeg: 90,
    type: 'sine',
  }), [state.galvDeflectionDeg]);

  // Mouse / Touch handlers for Hall probe
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    if (Math.hypot(x - probePos.x, y - probePos.y) < 0.15) {
      setIsDraggingProbe(true);
    }
  }, [probePos]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingProbe) return;
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0.05, Math.min(0.95, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0.05, Math.min(0.95, (e.clientY - rect.top) / rect.height));
    setProbePos({ x, y });
  }, [isDraggingProbe]);

  const handleMouseUp = useCallback(() => {
    if (isDraggingProbe) {
      setIsDraggingProbe(false);
    }
  }, [isDraggingProbe]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;
    if (Math.hypot(x - probePos.x, y - probePos.y) < 0.18) {
      setIsDraggingProbe(true);
    }
  }, [probePos]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDraggingProbe || e.touches.length === 0) return;
    const touch = e.touches[0];
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0.05, Math.min(0.95, (touch.clientX - rect.left) / rect.width));
    const y = Math.max(0.05, Math.min(0.95, (touch.clientY - rect.top) / rect.height));
    setProbePos({ x, y });
  }, [isDraggingProbe]);

  const handleTouchEnd = useCallback(() => {
    setIsDraggingProbe(false);
  }, []);

  // High-DPI 60-120 FPS Rendering Loop
  const renderSimulation = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, _vState: LabViewportState) => {
      ctx.clearRect(0, 0, width, height);

      // Background Grid
      ctx.strokeStyle = theme === 'high-contrast' ? '#222' : isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 35;
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

      const cx = width / 2;
      const cy = height / 2;
      animPhaseRef.current += 0.03;
      const phase = animPhaseRef.current;

      // =========================================================================
      // MODE 1: FIELD SOURCES (WIRE, DUAL WIRES, CIRCULAR LOOP, SOLENOID)
      // =========================================================================
      if (params.magnetismMode === 'field_sources') {
        if (params.conductorType === 'straight_wire') {
          // Concentric circular magnetic flux lines
          const rings = [45, 80, 120, 165, 215];
          rings.forEach((r, idx) => {
            ctx.strokeStyle = idx === 1 ? '#38bdf8' : 'rgba(56, 189, 248, 0.45)';
            ctx.lineWidth = idx === 1 ? 2.5 : 1.5;
            ctx.setLineDash(idx === 1 ? [] : [6, 6]);
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);

            // Directional arrow on circle
            const angle = (phase * (params.wireCurrentDir === 'out' ? 1 : -1) + idx * 1.3) % (Math.PI * 2);
            const ax = cx + r * Math.cos(angle);
            const ay = cy + r * Math.sin(angle);
            const tangent = angle + (params.wireCurrentDir === 'out' ? Math.PI / 2 : -Math.PI / 2);

            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(ax - 10 * Math.cos(tangent - 0.4), ay - 10 * Math.sin(tangent - 0.4));
            ctx.lineTo(ax - 10 * Math.cos(tangent + 0.4), ay - 10 * Math.sin(tangent + 0.4));
            ctx.closePath();
            ctx.fill();
          });

          // Wire Cross Section in center
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(cx, cy, 22, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Current vector symbol
          if (params.wireCurrentDir === 'out') {
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(cx, cy, 6, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.moveTo(cx - 10, cy - 10);
            ctx.lineTo(cx + 10, cy + 10);
            ctx.moveTo(cx + 10, cy - 10);
            ctx.lineTo(cx - 10, cy + 10);
            ctx.stroke();
          }

          // Distance marker line d
          const dPixels = params.wireDistanceCm * 9;
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + dPixels, cy);
          ctx.stroke();

          ctx.fillStyle = '#fb7185';
          ctx.font = 'bold 12px monospace';
          ctx.fillText(`d = ${params.wireDistanceCm} cm`, cx + dPixels / 2 - 25, cy - 10);

          // Indicator label
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText(
            params.wireCurrentDir === 'out'
              ? (isArabic ? 'تيار عمودي لخارج الصفحة ⊙' : 'Current Vector: Out of Page ⊙')
              : (isArabic ? 'تيار عمودي لداخل الصفحة ⊗' : 'Current Vector: Into Page ⊗'),
            cx - 95,
            cy + 42
          );
        } else if (params.conductorType === 'dual_wires') {
          // Two parallel wires separated by D
          const dHalfPix = (params.wiresSeparationCm * 8) / 2;
          const w1X = cx - dHalfPix;
          const w2X = cx + dHalfPix;

          // Wire 1
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(w1X, cy, 20, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(w1X, cy, 5, 0, Math.PI * 2);
          ctx.fill();

          // Wire 2
          ctx.strokeStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(w2X, cy, 20, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          if (params.dualWiresCurrentDirs === 'same') {
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(w2X, cy, 5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.strokeStyle = '#fbbf24';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(w2X - 8, cy - 8);
            ctx.lineTo(w2X + 8, cy + 8);
            ctx.moveTo(w2X + 8, cy - 8);
            ctx.lineTo(w2X - 8, cy + 8);
            ctx.stroke();
          }

          // Separation arrow
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(w1X, cy + 55);
          ctx.lineTo(w2X, cy + 55);
          ctx.stroke();
          ctx.fillStyle = '#cbd5e1';
          ctx.font = 'bold 12px monospace';
          ctx.fillText(`D = ${params.wiresSeparationCm} cm`, cx - 35, cy + 72);

          // Neutral point beacon
          if (state.neutralPointDistCm !== null) {
            const neutralX = w1X + (state.neutralPointDistCm / params.wiresSeparationCm) * (dHalfPix * 2);
            ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
            ctx.beginPath();
            ctx.arc(neutralX, cy, 14 + Math.sin(phase * 4) * 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(neutralX, cy, 6, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#f87171';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(isArabic ? 'نقطة التعادل (B = 0)' : 'Neutral Point (B = 0)', neutralX - 55, cy - 25);
          }

          // Labels
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`I₁ = ${params.wire1Current} A`, w1X - 30, cy - 35);
          ctx.fillStyle = '#fbbf24';
          ctx.fillText(`I₂ = ${params.wire2Current} A`, w2X - 30, cy - 35);
        } else if (params.conductorType === 'circular_loop') {
          // Circular coil top/isometric perspective
          const rPixels = params.loopRadiusCm * 9;
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.ellipse(cx, cy, rPixels, rPixels * 0.45, 0, 0, Math.PI * 2);
          ctx.stroke();

          // Magnetic flux lines through center
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([6, 4]);
          ctx.beginPath();
          ctx.moveTo(cx, cy - 140);
          ctx.lineTo(cx, cy + 140);
          ctx.stroke();
          ctx.setLineDash([]);

          // Arrow pointing North (upward)
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.moveTo(cx, cy - 145);
          ctx.lineTo(cx - 8, cy - 130);
          ctx.lineTo(cx + 8, cy - 130);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText('N (North)', cx + 15, cy - 130);
          ctx.fillText('S (South)', cx + 15, cy + 130);

          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`N = ${params.loopTurns} turns, r = ${params.loopRadiusCm} cm`, cx - 80, cy + rPixels * 0.45 + 30);
        } else {
          // Solenoid
          const sLenPix = params.solenoidLengthM * 450;
          const sLeft = cx - sLenPix / 2;
          const sRight = cx + sLenPix / 2;
          const sHeight = 85;

          // Core cylinder
          ctx.fillStyle = params.hasIronCore ? '#334155' : 'rgba(15, 23, 42, 0.6)';
          ctx.strokeStyle = params.hasIronCore ? '#64748b' : '#334155';
          ctx.lineWidth = 2;
          ctx.fillRect(sLeft, cy - sHeight / 2, sLenPix, sHeight);
          ctx.strokeRect(sLeft, cy - sHeight / 2, sLenPix, sHeight);

          if (params.hasIronCore) {
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 11px sans-serif';
            ctx.fillText(isArabic ? 'قلب من الحديد المطاوع (µ = 1500 µ₀)' : 'Soft Iron Core (µ = 1500 µ₀)', cx - 85, cy + 4);
          }

          // Helical coil turns
          const turnsCount = Math.min(18, Math.max(8, Math.floor(params.solenoidTurns / 25)));
          const turnStep = sLenPix / turnsCount;
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 5;
          ctx.lineCap = 'round';
          for (let i = 0; i < turnsCount; i++) {
            const tx = sLeft + i * turnStep;
            ctx.beginPath();
            ctx.moveTo(tx, cy - sHeight / 2 - 8);
            ctx.bezierCurveTo(tx + turnStep * 0.5, cy - sHeight / 2 - 20, tx + turnStep * 0.5, cy + sHeight / 2 + 20, tx + turnStep, cy + sHeight / 2 + 8);
            ctx.stroke();
          }

          // Axial internal field arrows
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([6, 5]);
          ctx.beginPath();
          ctx.moveTo(sLeft - 60, cy);
          ctx.lineTo(sRight + 60, cy);
          ctx.stroke();
          ctx.setLineDash([]);

          // Arrowhead
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.moveTo(sRight + 65, cy);
          ctx.lineTo(sRight + 50, cy - 8);
          ctx.lineTo(sRight + 50, cy + 8);
          ctx.closePath();
          ctx.fill();

          // Magnetic Poles
          ctx.fillStyle = '#3b82f6';
          ctx.fillRect(sLeft - 30, cy - sHeight / 2, 25, sHeight);
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(sRight + 5, cy - sHeight / 2, 25, sHeight);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 16px sans-serif';
          ctx.fillText('S', sLeft - 22, cy + 6);
          ctx.fillText('N', sRight + 12, cy + 6);
        }
      }

      // =========================================================================
      // MODE 2: LORENTZ FORCE (F = B I L sin θ)
      // =========================================================================
      else if (params.magnetismMode === 'lorentz_force') {
        // Uniform Magnetic Field lines (pointing to the right)
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        const yLines = [-120, -60, 0, 60, 120];
        yLines.forEach((ly) => {
          ctx.beginPath();
          ctx.moveTo(cx - 200, cy + ly);
          ctx.lineTo(cx + 200, cy + ly);
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.moveTo(cx + 205, cy + ly);
          ctx.lineTo(cx + 195, cy + ly - 6);
          ctx.lineTo(cx + 195, cy + ly + 6);
          ctx.closePath();
          ctx.fill();
        });
        ctx.setLineDash([]);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 15px sans-serif';
        ctx.fillText('B (Magnetic Field)', cx + 215, cy - 115);

        // Angled Conductor Wire with pivot at center
        const wireLengthPix = params.forceWireLengthM * 180;
        const rad = (params.forceAngleDeg * Math.PI) / 180;
        const wx1 = cx - wireLengthPix * Math.cos(rad);
        const wy1 = cy + wireLengthPix * Math.sin(rad);
        const wx2 = cx + wireLengthPix * Math.cos(rad);
        const wy2 = cy - wireLengthPix * Math.sin(rad);

        // Wire physical deflection offset
        const deflectionY = -Math.sin(rad) * (state.lorentzForceN * 18);

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 9;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(wx1, wy1 + deflectionY);
        ctx.lineTo(wx2, wy2 + deflectionY);
        ctx.stroke();

        // Current direction dot
        ctx.fillStyle = '#fbbf24';
        const midX = cx;
        const midY = cy + deflectionY;
        ctx.beginPath();
        ctx.arc(midX, midY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Lorentz Force Vector pointing upward
        if (state.lorentzForceN > 0.05) {
          const forcePix = Math.min(130, state.lorentzForceN * 45);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 4.5;
          ctx.beginPath();
          ctx.moveTo(midX, midY);
          ctx.lineTo(midX, midY - forcePix);
          ctx.stroke();

          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.moveTo(midX, midY - forcePix - 5);
          ctx.lineTo(midX - 8, midY - forcePix + 10);
          ctx.lineTo(midX + 8, midY - forcePix + 10);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 14px monospace';
          ctx.fillText(`F = ${state.lorentzForceN.toFixed(2)} N`, midX + 15, midY - forcePix / 2);
        }

        // Angle Arc
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy + deflectionY, 45, 0, -rad, true);
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(`θ = ${params.forceAngleDeg}°`, cx + 55, cy + deflectionY - 10);

        // Fleming Left-Hand Rule watermark
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(
          isArabic
            ? 'قاعدة اليد اليسرى لفليمنغ: السبابة مع المجال B، والوسطى مع التيار I، والإبهام مع القوة F'
            : 'Fleming’s Left-Hand Rule: Forefinger (B), Second finger (I), Thumb (Force F)',
          cx - 210,
          cy + 160
        );
      }

      // =========================================================================
      // MODE 3: MOVING-COIL GALVANOMETER (RADIAL FIELD & UNIFORM SCALE)
      // =========================================================================
      else if (params.magnetismMode === 'galvanometer') {
        const radiusPoles = 135;
        const radiusCore = 65;

        // 1. Concave Magnetic Pole Pieces
        // North Pole (Left - Red)
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx - 30, cy, radiusPoles, -Math.PI / 3, Math.PI / 3, false);
        ctx.lineTo(cx - 240, cy + 115);
        ctx.lineTo(cx - 240, cy - 115);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.font = 'black 22px sans-serif';
        ctx.fillText('N', cx - 200, cy + 8);

        // South Pole (Right - Blue)
        ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx + 30, cy, radiusPoles, (2 * Math.PI) / 3, (4 * Math.PI) / 3, false);
        ctx.lineTo(cx + 240, cy - 115);
        ctx.lineTo(cx + 240, cy + 115);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#3b82f6';
        ctx.font = 'black 22px sans-serif';
        ctx.fillText('S', cx + 180, cy + 8);

        // 2. Central Soft Iron Cylinder
        ctx.fillStyle = '#334155';
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, radiusCore, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'قلب حديدي' : 'Iron Core', cx - 24, cy + 4);

        // 3. Radial Magnetic Flux Lines in the Annular Gap
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        const radialAngles = [-45, -30, -15, 0, 15, 30, 45];
        radialAngles.forEach((deg) => {
          const rRad = (deg * Math.PI) / 180;
          const xStart = cx - radiusPoles * Math.cos(rRad) + 30;
          const yStart = cy - radiusPoles * Math.sin(rRad);
          const xEnd = cx - radiusCore * Math.cos(rRad);
          const yEnd = cy - radiusCore * Math.sin(rRad);

          ctx.beginPath();
          ctx.moveTo(xStart, yStart);
          ctx.lineTo(xEnd, yEnd);
          ctx.stroke();

          // Symmetry on other side
          const xStartR = cx + radiusCore * Math.cos(rRad);
          const yStartR = cy + radiusCore * Math.sin(rRad);
          const xEndR = cx + radiusPoles * Math.cos(rRad) - 30;
          const yEndR = cy + radiusPoles * Math.sin(rRad);

          ctx.beginPath();
          ctx.moveTo(xStartR, yStartR);
          ctx.lineTo(xEndR, yEndR);
          ctx.stroke();
        });
        ctx.setLineDash([]);

        // 4. Rotating Coil Frame
        const defRad = (pointerAngleRef.current * Math.PI) / 180;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(defRad);

        // Copper Coil cross bar
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.moveTo(-radiusCore - 12, 0);
        ctx.lineTo(radiusCore + 12, 0);
        ctx.stroke();

        ctx.restore();

        // 5. Curved Zero-Centered Scale at the top
        const scaleRadius = 200;
        const scaleCenterY = cy + 40;
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(cx, scaleCenterY, scaleRadius, -Math.PI * 0.72, -Math.PI * 0.28);
        ctx.stroke();

        // Scale Ticks (-50 to +50)
        for (let tick = -50; tick <= 50; tick += 10) {
          const tickAngle = -Math.PI / 2 + (tick * Math.PI) / 180 * 0.8;
          const tx1 = cx + (scaleRadius - 5) * Math.cos(tickAngle);
          const ty1 = scaleCenterY + (scaleRadius - 5) * Math.sin(tickAngle);
          const tx2 = cx + (scaleRadius + (tick % 20 === 0 ? 12 : 6)) * Math.cos(tickAngle);
          const ty2 = scaleCenterY + (scaleRadius + (tick % 20 === 0 ? 12 : 6)) * Math.sin(tickAngle);

          ctx.beginPath();
          ctx.moveTo(tx1, ty1);
          ctx.lineTo(tx2, ty2);
          ctx.stroke();

          if (tick % 20 === 0) {
            ctx.fillStyle = '#cbd5e1';
            ctx.font = 'bold 10px monospace';
            const labelX = cx + (scaleRadius + 22) * Math.cos(tickAngle) - 6;
            const labelY = scaleCenterY + (scaleRadius + 22) * Math.sin(tickAngle) + 4;
            ctx.fillText(`${tick === 0 ? '0' : Math.abs(tick)}`, labelX, labelY);
          }
        }

        // 6. Aluminum Pointer from Center to Scale
        const pointerAngle = -Math.PI / 2 + (pointerAngleRef.current * Math.PI) / 180 * 0.8;
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, scaleCenterY);
        ctx.lineTo(cx + (scaleRadius + 8) * Math.cos(pointerAngle), scaleCenterY + (scaleRadius + 8) * Math.sin(pointerAngle));
        ctx.stroke();

        // Pointer Pivot Cap
        ctx.fillStyle = '#f87171';
        ctx.beginPath();
        ctx.arc(cx, scaleCenterY, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(`θ = ${state.galvDeflectionDeg.toFixed(1)}°`, cx + 30, scaleCenterY - 140);
      }

      // =========================================================================
      // INTERACTIVE DRAGGABLE HALL SENSOR PROBE
      // =========================================================================
      const px = probePos.x * width;
      const py = probePos.y * height;

      // Outer glow beacon
      ctx.fillStyle = isDraggingProbe ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.18)';
      ctx.beginPath();
      ctx.arc(px, py, 22, 0, Math.PI * 2);
      ctx.fill();

      // Probe Body & Tip
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(px, py, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();

      // Floating readout tag next to probe
      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(px + 16, py - 18, 120, 36, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(isArabic ? 'مجس هول للفيض:' : 'Hall Gaussmeter:', px + 22, py - 4);
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(
        state.hallProbeB_Tesla >= 0.01
          ? `${state.hallProbeB_Tesla.toFixed(3)} T`
          : `${(state.hallProbeB_Tesla * 1e6).toFixed(1)} µT`,
        px + 22,
        py + 12
      );
    },
    [params, state, theme, isArabic, probePos, isDraggingProbe]
  );

  return (
    <VirtualLabShell
      definition={labDef}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetryMetrics}
      multimeterReading={dmmReading}
      oscilloscopeCh1={oscCh1}
      oscilloscopeCh2={oscCh2}
      currentXValue={
        params.magnetismMode === 'field_sources'
          ? params.conductorType === 'straight_wire'
            ? params.wireCurrent
            : params.conductorType === 'circular_loop'
            ? params.loopCurrent
            : params.solenoidCurrent
          : params.magnetismMode === 'lorentz_force'
          ? Math.sin((params.forceAngleDeg * Math.PI) / 180)
          : params.galvCurrentMa
      }
      currentYValue={
        params.magnetismMode === 'field_sources'
          ? params.conductorType === 'straight_wire'
            ? state.wireB_MicroTesla
            : params.conductorType === 'circular_loop'
            ? state.loopB_Tesla * 1e3
            : state.solenoidB_Tesla
          : params.magnetismMode === 'lorentz_force'
          ? state.lorentzForceN
          : state.galvDeflectionDeg
      }
      onResetSimulation={() => {
        lab.resetParams();
        setProbePos({ x: 0.65, y: 0.5 });
      }}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Mode Selector Card */}
          <div className={`p-3 rounded-2xl border space-y-2 ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border border-slate-800'
          }`}>
            <label className={`text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
              isLight ? 'text-cyan-700' : 'text-cyan-400'
            }`}>
              <Compass className="w-3.5 h-3.5" />
              <span>{isArabic ? 'النظام الكهرومغناطيسي النشط' : 'Active Physical Magnetism Regime'}</span>
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => lab.updateParam('magnetismMode', 'field_sources')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.magnetismMode === 'field_sources'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isArabic ? 'مصادر المجال B' : 'Field Sources'}</span>
              </button>

              <button
                type="button"
                onClick={() => lab.updateParam('magnetismMode', 'lorentz_force')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.magnetismMode === 'lorentz_force'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isArabic ? 'قوة لورنتز F' : 'Lorentz Force'}</span>
              </button>

              <button
                type="button"
                onClick={() => lab.updateParam('magnetismMode', 'galvanometer')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  params.magnetismMode === 'galvanometer'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الجلفانومتر τ' : 'Galvanometer'}</span>
              </button>
            </div>
          </div>

          {/* Sub-selector for Mode A Conductors */}
          {params.magnetismMode === 'field_sources' && (
            <div className={`p-3 rounded-2xl border space-y-2 ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border border-slate-800'
            }`}>
              <label className={`text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <Sliders className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
                <span>{isArabic ? 'نوع الموصل الهندسي' : 'Geometric Conductor Configuration'}</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => lab.updateParam('conductorType', 'straight_wire')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                    params.conductorType === 'straight_wire'
                      ? 'bg-cyan-600 text-white font-black'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {isArabic ? 'سلك أمبير المستقيم' : 'Straight Wire'}
                </button>

                <button
                  type="button"
                  onClick={() => lab.updateParam('conductorType', 'dual_wires')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                    params.conductorType === 'dual_wires'
                      ? 'bg-cyan-600 text-white font-black'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {isArabic ? 'سلكان متوازيان ونقطة التعادل' : 'Dual Wires & Neutral'}
                </button>

                <button
                  type="button"
                  onClick={() => lab.updateParam('conductorType', 'circular_loop')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                    params.conductorType === 'circular_loop'
                      ? 'bg-cyan-600 text-white font-black'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {isArabic ? 'الملف الدائري' : 'Circular Coil'}
                </button>

                <button
                  type="button"
                  onClick={() => lab.updateParam('conductorType', 'solenoid')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                    params.conductorType === 'solenoid'
                      ? 'bg-cyan-600 text-white font-black'
                      : isLight
                      ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {isArabic ? 'الملف اللولبي' : 'Solenoid'}
                </button>
              </div>

              {/* Toggles for Sub-modes */}
              {params.conductorType === 'straight_wire' && (
                <div className={`pt-2 border-t flex items-center justify-between ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {isArabic ? 'اتجاه التيار بالنسبة للمستوى:' : 'Current Direction:'}
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => lab.updateParam('wireCurrentDir', 'out')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                        params.wireCurrentDir === 'out'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : isLight
                          ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      ⊙ {isArabic ? 'للخارج' : 'Out'}
                    </button>
                    <button
                      type="button"
                      onClick={() => lab.updateParam('wireCurrentDir', 'in')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                        params.wireCurrentDir === 'in'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : isLight
                          ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      ⊗ {isArabic ? 'للداخل' : 'In'}
                    </button>
                  </div>
                </div>
              )}

              {params.conductorType === 'dual_wires' && (
                <div className={`pt-2 border-t flex items-center justify-between ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {isArabic ? 'اتجاها التيارين في السلكين:' : 'Current Vectors:'}
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => lab.updateParam('dualWiresCurrentDirs', 'same')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                        params.dualWiresCurrentDirs === 'same'
                          ? 'bg-emerald-500 text-slate-950 shadow-xs'
                          : isLight
                          ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {isArabic ? 'في نفس الاتجاه (تجاذب)' : 'Same (Attract)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => lab.updateParam('dualWiresCurrentDirs', 'opposite')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                        params.dualWiresCurrentDirs === 'opposite'
                          ? 'bg-rose-500 text-slate-950 shadow-xs'
                          : isLight
                          ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {isArabic ? 'في اتجاهين متضادين (تنافر)' : 'Opposite (Repel)'}
                    </button>
                  </div>
                </div>
              )}

              {params.conductorType === 'solenoid' && (
                <div className={`pt-2 border-t flex items-center justify-between ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {isArabic ? 'مادة القلب الداخلي للملف:' : 'Core Material:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => lab.updateParam('hasIronCore', !params.hasIronCore)}
                    className={`px-3 py-1 rounded-lg text-xs font-black cursor-pointer transition-all ${
                      params.hasIronCore
                        ? 'bg-emerald-500 text-slate-950 shadow-xs'
                        : isLight
                        ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {params.hasIronCore
                      ? isArabic
                        ? 'حديد مطاوع (µ عالي)'
                        : 'Soft Iron (High µ)'
                      : isArabic
                      ? 'قلب هوائي (µ₀)'
                      : 'Air Core (µ₀)'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Galvanometer Pole Shape Toggle */}
          {params.magnetismMode === 'galvanometer' && (
            <div className={`p-3 rounded-2xl border flex items-center justify-between ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-900/90 border border-slate-800'
            }`}>
              <div>
                <p className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  {isArabic ? 'شكل قطبي المغناطيس والأسطوانة:' : 'Poles & Core Geometry:'}
                </p>
                <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {params.isRadialField
                    ? isArabic
                      ? 'أقطاب مقعرة + قلب حديد (مجال نصف قطري)'
                      : 'Concave Poles + Iron Core (Radial Field)'
                    : isArabic
                    ? 'أقطاب مستوية (مجال موازٍ)'
                    : 'Flat Poles (Uniform Linear Field)'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => lab.updateParam('isRadialField', !params.isRadialField)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-all ${
                  params.isRadialField
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                {params.isRadialField ? (isArabic ? 'نصف قطري (منتظم)' : 'Radial') : (isArabic ? 'مستوٍ' : 'Flat')}
              </button>
            </div>
          )}
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="magnetism-bench-viewport"
        lang={lang ?? 'ar'}
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        onRender={renderSimulation}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Real-time Telemetry Floating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5 pointer-events-none select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>
            {params.magnetismMode === 'field_sources'
              ? params.conductorType === 'straight_wire'
                ? `B = ${state.wireB_MicroTesla.toFixed(1)} µT`
                : params.conductorType === 'circular_loop'
                ? `B = ${(state.loopB_Tesla * 1e3).toFixed(2)} mT`
                : `B = ${state.solenoidB_Tesla >= 0.01 ? state.solenoidB_Tesla.toFixed(3) + ' T' : (state.solenoidB_Tesla * 1e3).toFixed(2) + ' mT'}`
              : params.magnetismMode === 'lorentz_force'
              ? `F = ${state.lorentzForceN.toFixed(3)} N`
              : `θ = ${state.galvDeflectionDeg.toFixed(1)}° (S = ${state.galvSensitivityDegPerMa.toFixed(2)} °/mA)`}
          </span>
        </div>

        {/* Drag Sensor Hint */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/20 text-[11px] font-bold text-cyan-300 pointer-events-none select-none flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>{isArabic ? 'اسحب مجس هول (القرص الدائري) في أي مكان لقياس B' : 'Drag Hall Gaussmeter probe anywhere to read B'}</span>
        </div>
      </CanvasSimulationViewport>
    </VirtualLabShell>
  );
};

export default MagnetismLab;
