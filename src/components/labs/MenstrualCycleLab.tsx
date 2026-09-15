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
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import type { POEPrompt } from '../../core/pedagogy/POEController';
import {
  Calendar,
  Sparkles,
  ChevronDown,
  Info,
  Activity,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import ovaryAtlasImg from '../../assets/biology/ovary_menstrual_atlas.jpg';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
}

export type MenstrualSubTab = 'cycle' | 'gametogenesis' | 'atlas';
export type ReproductiveScenario = 'normal' | 'pregnancy' | 'contraceptive_pill' | 'ovariectomy';
export type GametogenesisView = 'oogenesis' | 'spermatogenesis' | 'fertilization_cleavage';
export type AtlasRegion = 'whole_system' | 'ovary_histology' | 'fallopian_tube' | 'uterus_wall';

export interface MenstrualParams {
  subTab: MenstrualSubTab;
  scenario: ReproductiveScenario;
  gametoView: GametogenesisView;
  atlasRegion: AtlasRegion;
  currentDay: number; // 1 to 28
  coitusDay: number; // 0 = none, 1 to 28
  showFertileWindow: boolean;
  showSpiralArteries: boolean;
  zoomLevel: number;
}

export interface MenstrualSimState {
  fsh: number; // mIU/mL (normal 4 to 20)
  lh: number; // mIU/mL (normal 5 to 65)
  estrogen: number; // pg/mL (normal 40 to 350)
  progesterone: number; // ng/mL (normal 0.5 to 25)
  hCG: number; // mIU/mL (0 unless pregnant post-implantation)
  endometriumThickness: number; // mm (1.0 to 6.5)
  bbt: number; // °C (36.3 to 37.0)
  follicleDiameter: number; // mm (2 to 24)
  follicleStateEn: string;
  follicleStateAr: string;
  uterinePhaseEn: string;
  uterinePhaseAr: string;
  ovarianPhaseEn: string;
  ovarianPhaseAr: string;
  fertileProbability: number; // 0 to 100%
  isFertilized: boolean;
  ovulationOccurred: boolean;
  mensesActive: boolean;
}

export const INITIAL_MENSTRUAL_PARAMS: MenstrualParams = {
  subTab: 'cycle',
  scenario: 'normal',
  gametoView: 'oogenesis',
  atlasRegion: 'whole_system',
  currentDay: 14,
  coitusDay: 0,
  showFertileWindow: true,
  showSpiralArteries: true,
  zoomLevel: 1.0,
};

export const MENSTRUAL_PARAM_SCHEMA: LabParameterSchema<MenstrualParams> = {
  currentDay: {
    key: 'currentDay',
    type: 'number',
    labelEn: 'Cycle Chronometer (Day)',
    labelAr: 'مؤشر أيام الدورة (اليوم)',
    defaultValue: 14,
    min: 1,
    max: 28,
    step: 1,
    unit: ' day',
    category: 'primary',
    visibleIf: (p) => p.subTab === 'cycle',
  },
  scenario: {
    key: 'scenario',
    type: 'select',
    labelEn: 'Reproductive Scenario',
    labelAr: 'الحالة الإنجابية',
    defaultValue: 'normal',
    options: [
      { value: 'normal', labelEn: 'Standard 28-Day Menstrual Cycle', labelAr: 'دورة شهرية طبيعية (بدون إخصاب)' },
      { value: 'pregnancy', labelEn: 'Fertilization & Gestation (hCG Rescue)', labelAr: 'حدوث إخصاب وحمل (إنقاذ الجسم الأصفر)' },
      { value: 'contraceptive_pill', labelEn: 'Combined Oral Contraceptive Pill', labelAr: 'أقراص منع الحمل المركبة (تثبيط التبويض)' },
      { value: 'ovariectomy', labelEn: 'Bilateral Ovariectomy / Menopause', labelAr: 'استئصال المبيضين / سن اليأس (انقطاع الطمث)' },
    ],
    category: 'primary',
    visibleIf: (p) => p.subTab === 'cycle',
  },
  subTab: {
    key: 'subTab',
    type: 'select',
    labelEn: 'Investigation Module',
    labelAr: 'الموديول التعليمي',
    defaultValue: 'cycle',
    options: [
      { value: 'cycle', labelEn: '28-Day Synchronized Cycle Simulator', labelAr: 'محاكي دورة المبيض والرحم (٢٨ يوماً)' },
      { value: 'gametogenesis', labelEn: 'Gametogenesis & Fertilization Timeline', labelAr: 'تكوين الأمشاج والإخصاب والتفلج' },
      { value: 'atlas', labelEn: 'High-Res Female Reproductive Atlas', labelAr: 'أطلس تشريح الجهاز التناسلي الأنثوي' },
    ],
    category: 'primary',
  },
  gametoView: {
    key: 'gametoView',
    type: 'select',
    labelEn: 'Gametogenesis Focus',
    labelAr: 'مسار تكوين الأمشاج',
    defaultValue: 'oogenesis',
    options: [
      { value: 'oogenesis', labelEn: 'Oogenesis (تكوين البويضة والميوزي المشروط)', labelAr: 'تكوين البويضة والانقسام الميوزي المشروط' },
      { value: 'spermatogenesis', labelEn: 'Spermatogenesis (تكوين الحيوانات المنوية)', labelAr: 'مراحل تكوين الحيوانات المنوية في الخصية' },
      { value: 'fertilization_cleavage', labelEn: 'Fertilization & Cleavage (الإخصاب والتفلج)', labelAr: 'الإخصاب وتكوين التوتية والانغماس في الرحم' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'gametogenesis',
  },
  atlasRegion: {
    key: 'atlasRegion',
    type: 'select',
    labelEn: 'Anatomical Region',
    labelAr: 'المنطقة التشريحية',
    defaultValue: 'whole_system',
    options: [
      { value: 'whole_system', labelEn: 'Full Female Reproductive System', labelAr: 'الجهاز التناسلي الأنثوي كاملاً' },
      { value: 'ovary_histology', labelEn: 'Ovary Cortex & Follicular Stroma', labelAr: 'قشرة المبيض وتطور الحويصلات' },
      { value: 'fallopian_tube', labelEn: 'Fallopian Tube & Ciliated Fimbriae', labelAr: 'قناة فالوب والقمع المهدب' },
      { value: 'uterus_wall', labelEn: 'Uterine Wall & Endometrium', labelAr: 'جدار الرحم والبطانة الدموية' },
    ],
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'atlas',
  },
  coitusDay: {
    key: 'coitusDay',
    type: 'number',
    labelEn: 'Day of Insemination',
    labelAr: 'يوم الجماع والتلقيح',
    defaultValue: 0,
    min: 0,
    max: 28,
    step: 1,
    unit: ' day',
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'cycle',
  },
  showFertileWindow: {
    key: 'showFertileWindow',
    type: 'boolean',
    labelEn: 'Highlight Fertile Window',
    labelAr: 'إبراز نافذة الخصوبة (١٢-١٦)',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'cycle',
  },
  showSpiralArteries: {
    key: 'showSpiralArteries',
    type: 'boolean',
    labelEn: 'Endometrial Spiral Arteries Detail',
    labelAr: 'إظهار الشرايين الحلزونية للرحم',
    defaultValue: true,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'cycle',
  },
  zoomLevel: {
    key: 'zoomLevel',
    type: 'number',
    labelEn: 'Viewport Zoom',
    labelAr: 'مستوى التكبير',
    defaultValue: 1.0,
    min: 0.5,
    max: 2.5,
    step: 0.1,
    category: 'secondary',
    visibleIf: (p) => p.subTab === 'atlas',
  },
};

export const MENSTRUAL_PRESETS: LabPreset<MenstrualParams>[] = [
  {
    id: 'ovulation_day',
    nameEn: 'Ovulation Day (Day 14 Peak)',
    nameAr: 'يوم التبويض (قمة اليوم ١٤)',
    descriptionEn: 'Massive LH surge triggers rupture of Graafian follicle and release of secondary oocyte.',
    descriptionAr: 'ذروة هرمون LH تفجر حويصلة جراف وتحرر الخلية البيضية الثانوية.',
    badge: 'Ovulation',
    params: {
      subTab: 'cycle',
      scenario: 'normal',
      gametoView: 'oogenesis',
      atlasRegion: 'whole_system',
      currentDay: 14,
      coitusDay: 0,
      showFertileWindow: true,
      showSpiralArteries: true,
      zoomLevel: 1.0,
    },
  },
  {
    id: 'fertile_window_peak',
    nameEn: 'Peak Fertile Window (Day 13)',
    nameAr: 'ذروة نافذة الخصوبة (اليوم ١٣)',
    descriptionEn: 'High estrogen triggers positive feedback on LH; sperm viable for up to 3 days awaiting egg.',
    descriptionAr: 'أعلى إفراز للإستروجين قبل التبويض؛ الحيوانات المنوية تعيش ٢-٣ أيام في انتظار البويضة.',
    badge: 'Fertility',
    params: {
      subTab: 'cycle',
      scenario: 'normal',
      gametoView: 'oogenesis',
      atlasRegion: 'whole_system',
      currentDay: 13,
      coitusDay: 13,
      showFertileWindow: true,
      showSpiralArteries: true,
      zoomLevel: 1.0,
    },
  },
  {
    id: 'secretory_peak',
    nameEn: 'Mid-Luteal Secretory Peak (Day 21)',
    nameAr: 'قمة المرحلة الإفرازية (اليوم ٢١)',
    descriptionEn: 'Corpus luteum secretes peak progesterone; maximal endometrial thickness and tortuous glands.',
    descriptionAr: 'أعلى إفراز للبروجستيرون من الجسم الأصفر وأقصى سمك وإمداد دموي لبطانة الرحم.',
    badge: 'Luteal',
    params: {
      subTab: 'cycle',
      scenario: 'normal',
      gametoView: 'oogenesis',
      atlasRegion: 'whole_system',
      currentDay: 21,
      coitusDay: 0,
      showFertileWindow: true,
      showSpiralArteries: true,
      zoomLevel: 1.0,
    },
  },
  {
    id: 'menses_onset',
    nameEn: 'Menstruation Onset (Days 1–5)',
    nameAr: 'بداية مرحلة الطمث (الأيام ١-٥)',
    descriptionEn: 'Degeneration of corpus luteum leads to sharp steroid drop and sloughing of endometrium.',
    descriptionAr: 'ضمور الجسم الأصفر ونقص البروجستيرون يسببان تهتك بطانة الرحم ونزول دم الطمث.',
    badge: 'Menses',
    params: {
      subTab: 'cycle',
      scenario: 'normal',
      gametoView: 'oogenesis',
      atlasRegion: 'whole_system',
      currentDay: 1,
      coitusDay: 0,
      showFertileWindow: true,
      showSpiralArteries: true,
      zoomLevel: 1.0,
    },
  },
  {
    id: 'gestational_rescue',
    nameEn: 'Pregnancy & hCG Rescue (Day 24)',
    nameAr: 'حالة الإخصاب وإنقاذ hCG (اليوم ٢٤)',
    descriptionEn: 'Embryonic hCG sustains the corpus luteum, keeping progesterone elevated and preventing menses.',
    descriptionAr: 'هرمون الحمل hCG يمنع ضمور الجسم الأصفر فيستمر إفراز البروجستيرون وتتوقف الدورة.',
    badge: 'Pregnancy',
    params: {
      subTab: 'cycle',
      scenario: 'pregnancy',
      gametoView: 'fertilization_cleavage',
      atlasRegion: 'whole_system',
      currentDay: 24,
      coitusDay: 14,
      showFertileWindow: true,
      showSpiralArteries: true,
      zoomLevel: 1.0,
    },
  },
  {
    id: 'contraceptive_suppression',
    nameEn: 'Oral Contraceptive Suppression',
    nameAr: 'تثبيط أقراص منع الحمل للتبويض',
    descriptionEn: 'Constant steroid feedback suppresses FSH and LH, eliminating follicular growth and ovulation.',
    descriptionAr: 'تثبيط النخامية بالتغذية الراجعة؛ لا تنضج حويصلات جراف ويتوقف التبويض تماماً.',
    badge: 'Contraception',
    params: {
      subTab: 'cycle',
      scenario: 'contraceptive_pill',
      gametoView: 'oogenesis',
      atlasRegion: 'whole_system',
      currentDay: 14,
      coitusDay: 0,
      showFertileWindow: false,
      showSpiralArteries: false,
      zoomLevel: 1.0,
    },
  },
];

export const MENSTRUAL_POE_PROMPTS: POEPrompt[] = [
  {
    id: 'poe_fertile_window',
    titleEn: 'Challenge 1: Insemination Timing & Fertile Window (نافذة الخصوبة)',
    titleAr: 'تحدي ١: توقيت الجماع وتحديد نافذة الخصوبة في الإنسان',
    scenarioEn: 'A female with a regular 28-day menstrual cycle is planning for pregnancy or family planning.',
    scenarioAr: 'أنثى دورة طمثها الشهرية منتظمة كل ٢٨ يوماً ترغب في معرفة التوقيت المثالي لحدوث الحمل.',
    questionEn:
      'Based on the Egyptian curriculum, a healthy human ovum (secondary oocyte) survives 1–2 days (24–48h) in the Fallopian tube, while spermatozoa survive 2–3 days. Which interval represents the highest probability of fertilization?',
    questionAr:
      'طبقاً لمنهج الأحياء المصري، تبقى البويضة (الخلية البيضية الثانوية) حية لمدة ١-٢ يوم في الثلث الأول لقناة فالوب، وتظل الحيوانات المنوية حية لمدة ٢-٣ أيام. ما هي الفترة التي ترتفع فيها احتمالية حدوث الإخصاب إلى أقصاها؟',
    optionsEn: [
      'Days 1 to 5 (During menstrual flow)',
      'Days 12 to 16 (Surrounding Day 14 ovulation)',
      'Days 21 to 26 (Peak secretory phase)',
      'Day 28 only (Immediate premenstrual stage)',
    ],
    optionsAr: [
      'الأيام من ١ إلى ٥ (أثناء نزول دم الطمث)',
      'الأيام من ١٢ إلى ١٦ (الفترة المحيطة بيوم التبويض ١٤)',
      'الأيام من ٢١ إلى ٢٦ (قمة المرحلة الإفرازية)',
      'اليوم ٢٨ فقط (المرحلة السابقة للطمث مباشرة)',
    ],
    correctOptionIndex: 1,
    scientificExplanationEn:
      'Correct! Ovulation occurs around Day 14. Sperm deposited as early as Day 12 can survive up to Day 14 to fertilize the freshly ovulated egg, and an egg released on Day 14 remains viable through Day 15-16. Hence, Days 12–16 constitute the prime fertile window.',
    scientificExplanationAr:
      'إجابة نموذجية! يحدث التبويض في اليوم ١٤ تقريباً. إذا دخلت الحيوانات المنوية في اليوم ١٢ تستطيع البقاء حية حتى اليوم ١٤ لتخصيب البويضة لحظة تحررها، كما أن البويضة المتحررة يوم ١٤ تظل حية حتى اليوم ١٥-١٦. لذا تمثل الأيام ١٢-١٦ نافذة الخصوبة.',
  },
  {
    id: 'poe_contraceptive_mechanism',
    titleEn: 'Challenge 2: Contraceptive Pills vs IUD Mechanism (حبوب منع الحمل واللولب)',
    titleAr: 'تحدي ٢: آلية عمل أقراص منع الحمل مقارنة باللولب',
    scenarioEn: 'Comparing common contraceptive modalities in family planning clinics.',
    scenarioAr: 'مقارنة بين الوسائل الشائعة لمنع الحمل وتنظيم الأسرة في المنهج المصري.',
    questionEn:
      'How do combined oral contraceptive pills prevent pregnancy compared to an Intrauterine Device (IUD / اللولب)?',
    questionAr:
      'كيف تؤدي أقراص منع الحمل وظيفتها مقارنة باللولب وفقاً لمنهج الأحياء للثانوية العامة؟',
    optionsEn: [
      'Pills prevent ovulation by suppressing FSH and LH; IUD prevents embryo implantation without stopping ovulation.',
      'Pills kill spermatozoa by chemical acidity; IUD surgically blocks the Fallopian tubes.',
      'Pills and IUD both physically prevent fertilization in the ovary.',
      'Pills stimulate premature menstruation on Day 7; IUD dissolves the Graafian follicle.',
    ],
    optionsAr: [
      'الأقراص تمنع التبويض بتثبيط هرموني FSH وLH؛ بينما اللولب يمنع استقرار البويضة المخصبة دون منع التبويض أو الإخصاب.',
      'الأقراص تقتل الحيوانات المنوية بالحموضة؛ واللولب يغلق قناتي فالوب جراحياً.',
      'كلاهما يمنع حدوث الإخصاب فيزيائياً داخل المبيض.',
      'الأقراص تحفز نزول طمث مبكر في اليوم السابع؛ واللولب يذيب حويصلة جراف.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Correct! Combined pills contain synthetic estrogen and progesterone which exert continuous negative feedback on the anterior pituitary, suppressing FSH and LH and completely preventing ovulation. The IUD does NOT prevent ovulation or fertilization; it merely prevents implantation of the blastocyst (التوتية) into the endometrium.',
    scientificExplanationAr:
      'إجابة نموذجية! تحتوي أقراص منع الحمل على هرمونات صناعية تشبه الإستروجين والبروجستيرون فتثبط إفراز هرموني FSH وLH من الغدة النخامية بالتغذية الراجعة السلبية مما يمنع نضج الحويصلة والتبويض تماماً. أما اللولب فيستقر في الرحم ويمنع انغماس التوتية في بطانة الرحم دون التأثير على التبويض أو الإخصاب.',
  },
  {
    id: 'poe_luteum_placenta_transition',
    titleEn: 'Challenge 3: Corpus Luteum vs Placenta during Pregnancy (الجسم الأصفر والمشيمة)',
    titleAr: 'تحدي ٣: دور الجسم الأصفر والمشيمة في الحفاظ على الحمل',
    scenarioEn: 'A clinical case involving ovarian surgery during gestation.',
    scenarioAr: 'حالة سريرية لاستئصال المبيض أثناء فترات مختلفة من الحمل.',
    questionEn:
      'If a pregnant woman undergoes bilateral ovariectomy (surgical removal of both ovaries) at the end of the 2nd month of gestation versus the beginning of the 5th month, what are the respective outcomes?',
    questionAr:
      'إذا تم استئصال المبيضين جراحياً لامرأة حامل في نهاية الشهر الثاني من الحمل، مقارنة باستئصالهما في بداية الشهر الخامس، فما هي النتيجة في الحالتين؟',
    optionsEn: [
      'Abortion occurs in month 2; pregnancy continues safely in month 5 because placenta fully secretes progesterone.',
      'Pregnancy continues safely in month 2, but fails in month 5.',
      'Both pregnancies fail immediately due to complete loss of uterine vascularity.',
      'Both pregnancies proceed without any interruption because the pituitary secretes progesterone.',
    ],
    optionsAr: [
      'يحدث إجهاض في الشهر الثاني؛ بينما يستمر الحمل بأمان في الشهر الخامس لاكتمال نمو المشيمة وإفرازها للبروجستيرون.',
      'يستمر الحمل في الشهر الثاني ويفشل في الشهر الخامس.',
      'يحدث إجهاض فوري في كلتا الحالتين لفقدان الأوعية الدموية بالكامل.',
      'يستمر الحمل في الحالتين لأن الغدة النخامية هي مصدر البروجستيرون.',
    ],
    correctOptionIndex: 0,
    scientificExplanationEn:
      'Correct! In the Egyptian curriculum, the corpus luteum is strictly required to sustain pregnancy by secreting progesterone until the end of the 3rd month. In the 4th month, the placenta is fully developed and assumes progesterone secretion. Thus, removal in month 2 causes acute progesterone plummet and miscarriage, whereas removal in month 5 allows the pregnancy to continue safely.',
    scientificExplanationAr:
      'إجابة دقيقة وصحيحة! يفرز الجسم الأصفر هرمون البروجستيرون لتثبيت الحمل حتى نهاية الشهر الثالث؛ ومع بداية الشهر الرابع تضمر بقايا الجسم الأصفر وتكون المشيمة قد اكتمل نموها لتحل محله في إفراز البروجستيرون. لذا فإن استئصال المبيض في الشهر الثاني يسبب الإجهاض، بينما في الشهر الخامس يستمر الحمل بصورة طبيعية.',
  },
];

/**
 * Pure computational engine for 28-day ovarian and menstrual cycle physiology,
 * endocrine feedback loops, and clinical scenarios.
 */
export function computeMenstrualSimState(params: MenstrualParams): MenstrualSimState {
  const day = Math.min(28, Math.max(1, params.currentDay));
  const { scenario, coitusDay } = params;

  let fsh = 0;
  let lh = 0;
  let estrogen = 0;
  let progesterone = 0;
  let hCG = 0;
  let endometriumThickness = 0;
  let bbt = 36.4;
  let follicleDiameter = 4;
  let ovulationOccurred = false;
  let mensesActive = false;

  if (scenario === 'contraceptive_pill') {
    // Combined oral contraceptive pill: continuous exogenous estrogen & progestin
    // Negative feedback completely suppresses pituitary FSH & LH surges
    fsh = 2.4;
    lh = 3.1;
    estrogen = 65; // Fixed synthetic replacement
    progesterone = 6.8; // Fixed synthetic replacement
    hCG = 0;
    follicleDiameter = 3.5; // No follicular maturation
    endometriumThickness = 2.2; // Atrophic endometrium preventing implantation
    bbt = 36.65;
    ovulationOccurred = false;
    mensesActive = day <= 3; // Simulated withdrawal bleeding
  } else if (scenario === 'ovariectomy') {
    // Bilateral surgical ovariectomy / Menopause
    // Zero ovarian steroid feedback leads to massive pituitary hypergonadotropin release
    fsh = 82.0;
    lh = 68.5;
    estrogen = 8.0;
    progesterone = 0.2;
    hCG = 0;
    follicleDiameter = 0;
    endometriumThickness = 0.8; // Deep atrophy
    bbt = 36.35;
    ovulationOccurred = false;
    mensesActive = false;
  } else {
    // Standard 28-day endogenous cycle (with optional fertilization / pregnancy)
    const isPregnant = scenario === 'pregnancy';

    // FSH Dynamics (mIU/mL)
    if (day <= 5) {
      fsh = 6.0 + day * 1.2; // Initial recruitment
    } else if (day <= 11) {
      fsh = 12.0 - (day - 5) * 0.9; // Selection of dominant follicle
    } else if (day === 12 || day === 13) {
      fsh = 14.5;
    } else if (day === 14) {
      fsh = 18.2; // Preovulatory surge
    } else if (day <= 22) {
      fsh = 5.2 - (day - 14) * 0.15; // Suppressed by luteal progesterone & inhibin B
    } else {
      fsh = isPregnant ? 2.5 : Math.min(8.0, 4.0 + (day - 22) * 0.6);
    }

    // LH Dynamics (mIU/mL)
    if (day <= 11) {
      lh = 5.0 + day * 0.35;
    } else if (day === 12) {
      lh = 16.0;
    } else if (day === 13) {
      lh = 48.0; // Rapid pre-ovulatory surge
    } else if (day === 14) {
      lh = 62.0; // Peak triggering Graafian follicle rupture
      ovulationOccurred = true;
    } else if (day <= 16) {
      lh = Math.max(7.0, 22.0 - (day - 14) * 7.5);
    } else {
      lh = isPregnant ? 4.0 : 6.0;
    }
    if (day > 14) ovulationOccurred = true;

    // Estrogen Dynamics (pg/mL)
    if (day <= 5) {
      estrogen = 40.0 + day * 2.0;
    } else if (day <= 12) {
      estrogen = 50.0 + (day - 5) * 38.0; // Massive rise from developing Graafian follicle
    } else if (day === 13) {
      estrogen = 330.0; // Peak triggering positive feedback LH surge
    } else if (day === 14) {
      estrogen = 210.0; // Dip immediately upon follicular rupture
    } else if (isPregnant) {
      estrogen = 180.0 + (day - 14) * 14.0; // Sustained and expanding
    } else if (day <= 22) {
      estrogen = 140.0 + (day - 14) * 6.5; // Secondary luteal peak (~190 pg/mL)
    } else {
      estrogen = Math.max(35.0, 192.0 - (day - 22) * 26.0); // Sharp premenstrual drop
    }

    // Progesterone Dynamics (ng/mL)
    if (day <= 13) {
      progesterone = 0.6 + day * 0.03; // Basal follicular
    } else if (day === 14) {
      progesterone = 1.4; // Initial luteinization
    } else if (isPregnant) {
      progesterone = 1.4 + (day - 14) * 1.9; // Sustained elevation by hCG rescue
    } else if (day <= 21) {
      progesterone = 1.4 + (day - 14) * 2.65; // Peak luteal (~20 ng/mL on Day 21)
    } else if (day <= 24) {
      progesterone = 20.0 - (day - 21) * 2.0;
    } else {
      progesterone = Math.max(0.4, 14.0 - (day - 24) * 3.4); // Dramatic drop triggers menstruation
    }

    // hCG (Human Chorionic Gonadotropin) for Pregnancy
    if (isPregnant && day >= 19) {
      hCG = Math.pow(day - 18, 2.2) * 14.0; // Exponential surge from implanting trophoblast
    } else {
      hCG = 0;
    }

    // Endometrial Thickness (mm)
    if (day <= 4) {
      endometriumThickness = Math.max(1.0, 4.2 - day * 0.8); // Sloughing of stratum funktionale
      mensesActive = true;
    } else if (day <= 14) {
      endometriumThickness = 1.0 + (day - 4) * 0.32; // Proliferative phase restoration
    } else if (isPregnant) {
      endometriumThickness = 4.2 + (day - 14) * 0.22; // Decidual hypertrophy
    } else if (day <= 24) {
      endometriumThickness = 4.2 + (day - 14) * 0.18; // Secretory phase maximal thickness (6.0 mm)
    } else {
      endometriumThickness = Math.max(2.5, 6.0 - (day - 24) * 0.85); // Ischemic regression
    }

    // Basal Body Temperature (BBT in °C) - thermogenic progesterone shift
    if (day < 14) {
      bbt = 36.4 + (day % 3) * 0.05;
    } else if (day === 14) {
      bbt = 36.3; // Slight pre-ovulatory dip
    } else {
      bbt = 36.85 + (progesterone > 8 ? 0.1 : 0) + (isPregnant ? 0.08 : 0);
    }

    // Ovarian Follicle Morphogenesis Diameter (mm)
    if (day <= 5) {
      follicleDiameter = 2.0 + day * 0.8;
    } else if (day <= 13) {
      follicleDiameter = 6.0 + (day - 5) * 1.9; // Mature Graafian follicle reaches 21-23 mm
    } else if (day === 14) {
      follicleDiameter = 22.0; // Ovulating rupture
    } else if (day <= 22) {
      follicleDiameter = 18.0; // Active Corpus Luteum
    } else {
      follicleDiameter = isPregnant ? 22.0 : Math.max(4.0, 18.0 - (day - 22) * 2.3); // Corpus Albicans
    }
  }

  // Fertile Window Probability (Days 12 to 16)
  // Secondary oocyte viability: 24-48 hours (1-2 days)
  // Spermatozoa viability in female tract: 48-72 hours (2-3 days)
  let fertileProbability = 0;
  if (scenario === 'normal' || scenario === 'pregnancy') {
    if (day === 11) fertileProbability = 20;
    else if (day === 12) fertileProbability = 60;
    else if (day === 13) fertileProbability = 95;
    else if (day === 14) fertileProbability = 100;
    else if (day === 15) fertileProbability = 80;
    else if (day === 16) fertileProbability = 30;
  }

  // Check coitus-driven fertilization
  let isFertilized = false;
  if (coitusDay >= 12 && coitusDay <= 15 && (scenario === 'normal' || scenario === 'pregnancy')) {
    isFertilized = day >= 14;
  }

  // Phase Classifications
  let follicleStateEn = '';
  let follicleStateAr = '';
  let uterinePhaseEn = '';
  let uterinePhaseAr = '';
  let ovarianPhaseEn = '';
  let ovarianPhaseAr = '';

  if (scenario === 'contraceptive_pill') {
    follicleStateEn = 'Quiescent primordial follicles (Anovulation)';
    follicleStateAr = 'حويصلات أولية ساكنة وتثبيط تام للتبويض';
    ovarianPhaseEn = 'Pharmacological Anovulatory State';
    ovarianPhaseAr = 'حالة تثبيط دوائي للتبويض (أقراص منع الحمل)';
    uterinePhaseEn = 'Atrophic Endometrium (Anti-implantation)';
    uterinePhaseAr = 'بطانة رحم ضامرة تمنع انغماس الجنين';
  } else if (scenario === 'ovariectomy') {
    follicleStateEn = 'Absent Ovarian Follicles (Surgical Agenesis)';
    follicleStateAr = 'غياب أنسجة المبيض (استئصال جراحي / سن اليأس)';
    ovarianPhaseEn = 'Hypergonadotropic Hypogonadism';
    ovarianPhaseAr = 'فقدان الإفراز الهرموني للمبيض وارتفاع هائل في FSH/LH';
    uterinePhaseEn = 'Deep Endometrial Atrophy';
    uterinePhaseAr = 'ضمور تام لبطانة الرحم وانقطاع الطمث';
  } else {
    if (day <= 5) {
      follicleStateEn = 'Primordial follicle recruitment (FSH-dependent)';
      follicleStateAr = 'تنبيه ونمو حويصلات أولية جديدة بتأثير هرمون FSH';
      ovarianPhaseEn = 'Early Follicular Phase';
      ovarianPhaseAr = 'مرحلة نمو الحويصلات الأولية';
      uterinePhaseEn = 'Menstrual Sloughing (Days 1–5)';
      uterinePhaseAr = 'مرحلة الطمث (تمزق بطانة الرحم ونزول الدم)';
    } else if (day <= 13) {
      follicleStateEn = 'Maturing Graafian Follicle (High Estrogen secretion)';
      follicleStateAr = 'نضج حويصلة جراف وإفراز هائل للإستروجين';
      ovarianPhaseEn = 'Proliferative Follicular Phase';
      ovarianPhaseAr = 'مرحلة نضج البويضة (حويصلة جراف)';
      uterinePhaseEn = 'Proliferative Phase (Endometrial repair)';
      uterinePhaseAr = 'مرحلة إنماء بطانة الرحم بتأثير الإستروجين';
    } else if (day === 14) {
      follicleStateEn = 'Ruptured Graafian Follicle releasing Secondary Oocyte';
      follicleStateAr = 'انفجار حويصلة جراف وتحرر الخلية البيضية الثانوية';
      ovarianPhaseEn = 'Ovulation (LH Surge Triggered)';
      ovarianPhaseAr = 'مرحلة التبويض (بفعل ذروة هرمون LH)';
      uterinePhaseEn = 'Transition to Secretory Endometrium';
      uterinePhaseAr = 'بدء التحول الإفرازي لبطانة الرحم';
    } else {
      if (scenario === 'pregnancy') {
        follicleStateEn = 'Hypertrophied Gravid Corpus Luteum (hCG-rescued)';
        follicleStateAr = 'جسم أصفر نشط ومتضخم مستمر بتأثير هرمون الحمل hCG';
        ovarianPhaseEn = 'Gestational Luteal Phase';
        ovarianPhaseAr = 'مرحلة بقاء الجسم الأصفر الحملي';
        uterinePhaseEn = 'Decidual Hypertrophy (Gestational maintenance)';
        uterinePhaseAr = 'تحول بطانة الرحم لطبقة ساقطة لاستقبال وتغذية الجنين';
      } else if (day <= 24) {
        follicleStateEn = 'Mature Corpus Luteum actively secreting Progesterone';
        follicleStateAr = 'جسم أصفر ناضج يفرز البروجستيرون بكثافة';
        ovarianPhaseEn = 'Mid-Luteal Secretory Phase';
        ovarianPhaseAr = 'مرحلة تكوين الجسم الأصفر والطور الإفرازي';
        uterinePhaseEn = 'Secretory Phase (Maximal thickness & tortuous glands)';
        uterinePhaseAr = 'المرحلة الإفرازية (أعلى سمك وتفرع للأوعية والغدد)';
      } else {
        follicleStateEn = 'Degenerating Corpus Albicans (Progesterone plummet)';
        follicleStateAr = 'ضمور الجسم الأصفر وتحوله لجسم أبيض ونقص البروجستيرون';
        ovarianPhaseEn = 'Late Luteal Ischemic Phase';
        ovarianPhaseAr = 'مرحلة ضمور الجسم الأصفر وبدء انقباض الشرايين';
        uterinePhaseEn = 'Premenstrual Ischemia & Capillary Necrosis';
        uterinePhaseAr = 'مرحلة نقص التروية استعداداً لنزول دم الطمث';
      }
    }
  }

  return {
    fsh: parseFloat(fsh.toFixed(1)),
    lh: parseFloat(lh.toFixed(1)),
    estrogen: parseFloat(estrogen.toFixed(0)),
    progesterone: parseFloat(progesterone.toFixed(1)),
    hCG: parseFloat(hCG.toFixed(0)),
    endometriumThickness: parseFloat(endometriumThickness.toFixed(1)),
    bbt: parseFloat(bbt.toFixed(2)),
    follicleDiameter: parseFloat(follicleDiameter.toFixed(1)),
    follicleStateEn,
    follicleStateAr,
    uterinePhaseEn,
    uterinePhaseAr,
    ovarianPhaseEn,
    ovarianPhaseAr,
    fertileProbability,
    isFertilized,
    ovulationOccurred,
    mensesActive,
  };
}

// Lab Definition Metadata
export const MENSTRUAL_LAB_DEF: LabDefinition<MenstrualParams, MenstrualSimState> = {
  id: 'bio_menstrual_cycle',
  subject: 'biology',
  chapterRef: 'Chapter 3',
  titleEn: 'Ovarian & Menstrual Cycle Phasic Hormonal Dynamics Lab',
  titleAr: 'مختبر ديناميكا دورة المبيض والطمث والتنظيم الهرموني',
  subtitleEn:
    'Egyptian Secondary Biology Chapter 3: Human Female Reproductive System, Folliculogenesis, Endometrial Phases, Hormonal Feedback & Contraception',
  subtitleAr:
    'أحياء الثانوية العامة - الباب الثالث: التكاثر في الإنسان، دورة الطمث، نضج حويصلة جراف، التبويض، الجسم الأصفر، والتغذية الراجعة',
  objectives: [
    {
      id: 'obj_cycle_phases',
      textEn:
        'Correlate the 28-day chronological timeline of ovarian folliculogenesis with uterine endometrial proliferation and sloughing.',
      textAr:
        'ربط التسلسل الزمني لدورة المبيض (نضج حويصلة جراف والتبويض) بتغيرات بطانة الرحم (الإنماء، الإفراز، الطمث).',
      bloomLevel: 'analyze',
    },
    {
      id: 'obj_hormonal_surges',
      textEn:
        'Interpret the physiological roles of pituitary gonadotropins (FSH, LH) and ovarian steroids (Estrogen, Progesterone).',
      textAr:
        'تحليل المنحنيات البيانية لهرمونات النخامية (FSH, LH) وهرمونات المبيض (الإستروجين، البروجستيرون).',
      bloomLevel: 'evaluate',
    },
    {
      id: 'obj_pregnancy_contraception',
      textEn:
        'Deduce the endocrine fate of the corpus luteum under pregnancy (hCG rescue) versus oral contraceptive negative feedback.',
      textAr:
        'استنتاج مصير الجسم الأصفر في حالتي الحمل (تأثير هرمون hCG) أو تناول أقراص منع الحمل المركبة.',
      bloomLevel: 'evaluate',
    },
  ],
  keyFormulas: [
    {
      id: 'eq-lh-surge',
      labelEn: 'LH Ovulatory Surge Trigger',
      labelAr: 'ذروة هرمون LH المفجرة لحويصلة جراف',
      tex: '[\\text{Estrogen}]_{\\text{peak}} > 200 \\,\\text{pg/mL} \\xrightarrow{\\text{positive feedback}} [\\text{LH}]_{\\text{surge}} > 50 \\,\\text{mIU/mL}',
      descriptionEn: 'High pre-ovulatory estrogen stimulates the GnRH pulse generator and anterior pituitary, triggering massive LH surge.',
      descriptionAr: 'ارتفاع الإستروجين قبل التبويض يفرز ذروة LH المفجرة لحويصلة جراف والمحررة للخلية البيضية الثانوية.',
    },
    {
      id: 'eq-fertile-window',
      labelEn: 'Human Insemination Fertile Window',
      labelAr: 'نافذة الخصوبة وتوقيت الإخصاب في الإنسان',
      tex: '\\text{Fertile Window} = [\\text{Day } 14 - 2, \\,\\text{Day } 14 + 2] = \\text{Days } 12 - 16',
      descriptionEn: 'Spermatozoa survive 2 to 3 days (48-72h); secondary oocyte survives 1 to 2 days (24-48h).',
      descriptionAr: 'الحيوانات المنوية تعيش ٢-٣ أيام والبويضة تعيش ١-٢ يوم، لذا فأعلى احتمالية إخصاب بين اليومين ١٢ و١٦.',
    },
    {
      id: 'eq-progesterone-endometrium',
      labelEn: 'Secretory Endometrial Vascularization',
      labelAr: 'سمك بطانة الرحم في المرحلة الإفرازية',
      tex: '5.0 \\le \\text{Thickness}_{\\text{endometrium}} \\le 6.5 \\,\\text{mm} \\quad (\\text{Days } 15 - 24)',
      descriptionEn: 'Progesterone secreted by the corpus luteum promotes tortuous spiral arteriole growth and glandular secretion.',
      descriptionAr: 'يزيد البروجستيرون من سمك بطانة الرحم وإمدادها الدموي وزيادة إفراز الغدد الرحمية لاستقبال الجنين.',
    },
  ],
  defaultParams: INITIAL_MENSTRUAL_PARAMS,
  paramSchema: MENSTRUAL_PARAM_SCHEMA,
  presets: MENSTRUAL_PRESETS,
  poePrompts: MENSTRUAL_POE_PROMPTS,
  notebookConfig: {
    xLabelEn: 'Cycle Day',
    xLabelAr: 'يوم الدورة',
    xUnit: 'day',
    yLabelEn: 'Hormone / Endometrium',
    yLabelAr: 'الهرمون / بطانة الرحم',
    yUnit: 'pg/mL or mm',
  },
};

export const MenstrualCycleLab: React.FC<Props> = ({ lang = 'ar', theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const lab = useVirtualLab<MenstrualParams, MenstrualSimState>({
    definition: MENSTRUAL_LAB_DEF,
  });

  const { params, updateParam, resetParams } = lab;

  const simState = useMemo<MenstrualSimState>(() => {
    return computeMenstrualSimState(params);
  }, [params]);

  // Telemetry Metrics
  const telemetry = useMemo<LabTelemetryMetric[]>(
    () => [
      {
        id: 'estrogen_level',
        labelEn: 'Serum Estradiol (E2)',
        labelAr: 'إستروجين المصل (E2)',
        value: simState.estrogen,
        unit: ' pg/mL',
        precision: 0,
        status: simState.estrogen > 250 ? 'optimal' : simState.estrogen < 30 ? 'warning' : 'normal',
      },
      {
        id: 'progesterone_level',
        labelEn: 'Serum Progesterone (P4)',
        labelAr: 'بروجستيرون المصل (P4)',
        value: simState.progesterone,
        unit: ' ng/mL',
        precision: 1,
        status: simState.progesterone > 15 ? 'optimal' : simState.progesterone < 1.0 ? 'normal' : 'optimal',
      },
      {
        id: 'lh_level',
        labelEn: 'Pituitary LH Surge',
        labelAr: 'هرمون التبويض (LH)',
        value: simState.lh,
        unit: ' mIU/mL',
        precision: 1,
        status: simState.lh > 40 ? 'optimal' : 'normal',
      },
      {
        id: 'fsh_level',
        labelEn: 'Pituitary FSH Level',
        labelAr: 'الهرمون المنبه (FSH)',
        value: simState.fsh,
        unit: ' mIU/mL',
        precision: 1,
        status: simState.fsh > 50 ? 'alert' : 'normal',
      },
      {
        id: 'endometrium_thickness',
        labelEn: 'Endometrial Thickness',
        labelAr: 'سمك بطانة الرحم',
        value: simState.endometriumThickness,
        unit: ' mm',
        precision: 1,
        status: simState.endometriumThickness > 5.0 ? 'optimal' : simState.endometriumThickness < 1.5 ? 'warning' : 'normal',
      },
      {
        id: 'bbt_temp',
        labelEn: 'Basal Body Temp (BBT)',
        labelAr: 'حرارة الجسم الأساسية',
        value: simState.bbt,
        unit: ' °C',
        precision: 2,
        status: simState.bbt > 36.7 ? 'optimal' : 'normal',
      },
    ],
    [simState]
  );

  // Digital Multimeter (DMM) / Physiological Reproductive Monitor
  const multimeterReading: DMMReading = useMemo(
    () => ({
      mode: 'DCV',
      value: simState.estrogen,
      displayString: `${simState.estrogen} pg/mL`,
      secondaryString: `P4: ${simState.progesterone} ng/mL | LH: ${simState.lh} mIU/mL | Endo: ${simState.endometriumThickness} mm | BBT: ${simState.bbt} °C`,
      unit: 'pg/mL',
      voltageDC: simState.estrogen,
      voltageAC: simState.progesterone,
      currentDC: simState.lh,
      resistance: simState.endometriumThickness,
      continuityBeep: simState.ovulationOccurred,
      isOverload: simState.fsh > 70 || simState.lh > 70,
    }),
    [simState]
  );

  // Dual-Trace Oscilloscope Channels
  const oscilloscopeCh1: WaveformSignal = useMemo(
    () => ({
      id: 'trace_lh',
      label: isArabic ? 'هرمون LH (قناة أ)' : 'CH 1: LH Surge',
      color: '#f59e0b',
      amplitude: Math.min(10, (simState.lh / 65) * 8),
      frequency: 1.0,
      phase: 0,
      phaseDeg: 0,
      type: 'sine',
    }),
    [simState.lh, isArabic]
  );

  const oscilloscopeCh2: WaveformSignal = useMemo(
    () => ({
      id: 'trace_progesterone',
      label: isArabic ? 'بروجستيرون P4 (قناة ب)' : 'CH 2: Progesterone P4',
      color: '#10b981',
      amplitude: Math.min(10, (simState.progesterone / 22) * 8),
      frequency: 1.0,
      phase: 0,
      phaseDeg: 90,
      type: 'sine',
    }),
    [simState.progesterone, isArabic]
  );

  // Canvas Drawing Routine
  const handleRenderCanvas = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _viewport: LabViewportState,
      _dpr: number
    ) => {
      ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#090d16';
      ctx.fillRect(0, 0, width, height);

      const day = params.currentDay;
      const subTab = params.subTab;

      if (subTab === 'gametogenesis') {
        const centerY = height / 2;
        ctx.textAlign = 'center';

        ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
        ctx.font = 'bold 16px Inter, system-ui, sans-serif';
        ctx.fillText(
          isArabic
            ? 'مراحل تكوين البويضة (Oogenesis) والانقسام الميوزي المشروط'
            : 'Oogenesis & Conditional Meiosis II Gametogenesis Timeline',
          width / 2,
          32
        );

        const stages = [
          {
            titleEn: '1. Multiplication',
            titleAr: '١. مرحلة التضاعف (في الجنين)',
            descEn: 'Oogonia (2n) divide mitotically',
            descAr: 'أمهات البيض (2n) بالانقسام الميتوزي',
            color: '#3b82f6',
            x: width * 0.16,
          },
          {
            titleEn: '2. Growth',
            titleAr: '٢. مرحلة النمو (تخزين الغذاء)',
            descEn: 'Primary oocyte (2n) in Prophase I',
            descAr: 'خلية بيضية أولية (2n) بالطور التمهيدي الأول',
            color: '#a855f7',
            x: width * 0.38,
          },
          {
            titleEn: '3. Maturation',
            titleAr: '٣. النضج (الميوزي الأول)',
            descEn: 'Secondary oocyte (n) + 1st polar body',
            descAr: 'خلية بيضية ثانوية (n) + جسم قطبي أول',
            color: '#ec4899',
            x: width * 0.62,
          },
          {
            titleEn: '4. Fertilization',
            titleAr: '٤. الانقسام المشروط (لحظة الإخصاب)',
            descEn: 'Mature ovum (n) + 2nd polar body',
            descAr: 'بويضة ناضجة (n) + جسم قطبي ثانٍ',
            color: '#10b981',
            x: width * 0.85,
          },
        ];

        stages.forEach((st, idx) => {
          if (idx < stages.length - 1) {
            ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(st.x + 60, centerY);
            ctx.lineTo(stages[idx + 1].x - 60, centerY);
            ctx.stroke();

            ctx.fillStyle = isLight ? '#94a3b8' : '#475569';
            ctx.beginPath();
            ctx.moveTo(stages[idx + 1].x - 60, centerY);
            ctx.lineTo(stages[idx + 1].x - 68, centerY - 5);
            ctx.lineTo(stages[idx + 1].x - 68, centerY + 5);
            ctx.fill();
          }

          ctx.fillStyle = isLight ? '#ffffff' : '#1e293b';
          ctx.strokeStyle = st.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(st.x - 70, centerY - 65, 140, 130, [12]);
          ctx.fill();
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(st.x, centerY - 15, idx === 3 ? 24 : 20, 0, Math.PI * 2);
          ctx.fillStyle = `${st.color}25`;
          ctx.fill();
          ctx.strokeStyle = st.color;
          ctx.lineWidth = 2.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(st.x, centerY - 15, 8, 0, Math.PI * 2);
          ctx.fillStyle = st.color;
          ctx.fill();

          if (idx >= 2) {
            ctx.beginPath();
            ctx.arc(st.x + 24, centerY - 28, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#64748b';
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.stroke();
          }

          ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
          ctx.font = 'bold 11px Inter, system-ui, sans-serif';
          ctx.fillText(isArabic ? st.titleAr : st.titleEn, st.x, centerY - 45);

          ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
          ctx.font = '10px Inter, system-ui, sans-serif';
          ctx.fillText(isArabic ? st.descAr : st.descEn, st.x, centerY + 45);
        });

        return;
      }

      // -------------------------------------------------------------
      // 28-Day Synchronized Ovarian & Endometrial Cycle Simulation
      // -------------------------------------------------------------
      const topSectionH = height * 0.45;
      const dividerY = height * 0.48;

      ctx.textAlign = 'left';
      ctx.font = 'bold 12px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(
        isArabic
          ? 'دورة المبيض ونمو حويصلة جراف والتبويض (Ovarian Cycle & Folliculogenesis)'
          : 'Ovarian Cycle & Folliculogenesis (Days 1–28)',
        20,
        22
      );

      ctx.fillStyle = '#ec4899';
      ctx.fillText(
        isArabic
          ? 'دورة بطانة الرحم والشرايين الحلزونية (Uterine Endometrial Cycle)'
          : 'Uterine Endometrial Vascular Cycle (Days 1–28)',
        20,
        dividerY + 20
      );

      const graphW = width - 80;
      const startX = 50;

      if (params.showFertileWindow && params.scenario !== 'contraceptive_pill') {
        const fStartX = startX + ((12 - 1) / 27) * graphW;
        const fEndX = startX + ((16 - 1) / 27) * graphW;
        ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.12)';
        ctx.fillRect(fStartX, 35, fEndX - fStartX, height - 70);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(
          isArabic ? 'نافذة الخصوبة (١٢-١٦)' : 'Fertile Window (12-16)',
          (fStartX + fEndX) / 2,
          dividerY - 8
        );
      }

      ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(startX, topSectionH - 20);
      ctx.lineTo(startX + graphW, topSectionH - 20);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(startX, height - 30);
      ctx.lineTo(startX + graphW, height - 30);
      ctx.stroke();

      // 1. Ovarian Follicle Stages
      const follicleStages = [
        { day: 2, labelEn: 'Primordial', labelAr: 'أولية', radius: 7, color: '#3b82f6' },
        { day: 6, labelEn: 'Primary', labelAr: 'ابتدائية', radius: 11, color: '#6366f1' },
        { day: 10, labelEn: 'Secondary', labelAr: 'ثانوية', radius: 16, color: '#8b5cf6' },
        { day: 13, labelEn: 'Graafian', labelAr: 'حويصلة جراف', radius: 24, color: '#ec4899' },
        { day: 14, labelEn: 'Ovulation', labelAr: 'التبويض', radius: 22, color: '#f59e0b', isOvulation: true },
        { day: 18, labelEn: 'Corpus Luteum', labelAr: 'جسم أصفر', radius: 21, color: '#eab308' },
        { day: 22, labelEn: 'Mature Luteum', labelAr: 'جسم أصفر ناضج', radius: 23, color: '#ca8a04' },
        {
          day: 27,
          labelEn: params.scenario === 'pregnancy' ? 'Gravid Luteum' : 'Albicans',
          labelAr: params.scenario === 'pregnancy' ? 'جسم أصفر حملي' : 'جسم أبيض',
          radius: params.scenario === 'pregnancy' ? 24 : 10,
          color: params.scenario === 'pregnancy' ? '#eab308' : '#94a3b8',
        },
      ];

      follicleStages.forEach((st) => {
        const x = startX + ((st.day - 1) / 27) * graphW;
        const y = topSectionH - 65;

        ctx.beginPath();
        ctx.arc(x, y, st.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${st.color}25`;
        ctx.fill();
        ctx.strokeStyle = st.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (st.isOvulation) {
          ctx.beginPath();
          ctx.arc(x, y - st.radius - 10, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1.5;
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
            ctx.beginPath();
            ctx.moveTo(x + Math.cos(a) * 9, y - st.radius - 10 + Math.sin(a) * 9);
            ctx.lineTo(x + Math.cos(a) * 14, y - st.radius - 10 + Math.sin(a) * 14);
            ctx.stroke();
          }
        } else if (st.radius >= 16) {
          ctx.beginPath();
          ctx.arc(x - 3, y - 2, st.radius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `${st.color}40`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x + 5, y + 4, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
        }

        ctx.fillStyle = isLight ? '#475569' : '#cbd5e1';
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isArabic ? st.labelAr : st.labelEn, x, y + st.radius + 15);
      });

      // 2. Uterine Endometrial Wall
      const endoBaseY = height - 30;
      ctx.beginPath();
      ctx.moveTo(startX, endoBaseY);

      for (let d = 1; d <= 28; d++) {
        const x = startX + ((d - 1) / 27) * graphW;
        const dState = computeMenstrualSimState({ ...params, currentDay: d });
        const thicknessPx = dState.endometriumThickness * 13;
        ctx.lineTo(x, endoBaseY - thicknessPx);
      }
      ctx.lineTo(startX + graphW, endoBaseY);
      ctx.closePath();

      const endoGrad = ctx.createLinearGradient(0, endoBaseY - 80, 0, endoBaseY);
      endoGrad.addColorStop(0, 'rgba(244, 63, 94, 0.45)');
      endoGrad.addColorStop(1, 'rgba(159, 18, 57, 0.85)');
      ctx.fillStyle = endoGrad;
      ctx.fill();
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      if (params.showSpiralArteries) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;

        for (let d = 6; d <= 26; d += 3) {
          const x = startX + ((d - 1) / 27) * graphW;
          const dState = computeMenstrualSimState({ ...params, currentDay: d });
          const hEndo = dState.endometriumThickness * 13;

          ctx.beginPath();
          ctx.moveTo(x, endoBaseY);
          const coils = Math.floor(hEndo / 8);
          for (let c = 1; c <= coils; c++) {
            const cy = endoBaseY - c * 7;
            const cx = x + (c % 2 === 0 ? 4 : -4);
            ctx.lineTo(cx, cy);
          }
          ctx.stroke();
        }
      }

      ctx.fillStyle = isLight ? '#cbd5e1' : '#334155';
      ctx.fillRect(startX, endoBaseY, graphW, 14);
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.font = 'bold 9px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        isArabic ? 'جدار الرحم العضلي (Myometrium Base)' : 'Myometrium Base',
        startX + graphW / 2,
        endoBaseY + 10
      );

      // 3. Cursor Line
      const cursorX = startX + ((day - 1) / 27) * graphW;

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cursorX, 30);
      ctx.lineTo(cursorX, height - 10);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.roundRect(cursorX - 26, 8, 52, 22, [6]);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(isArabic ? `اليوم ${day}` : `Day ${day}`, cursorX, 23);
    },
    [isArabic, isContrast, isLight, params]
  );

  return (
    <VirtualLabShell
      definition={MENSTRUAL_LAB_DEF}
      lang={lang ?? 'ar'}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={params.currentDay}
      currentYValue={simState.endometriumThickness}
      onResetSimulation={resetParams}
      renderCustomControls={() => (
        <div className="space-y-4">
          {/* Sub-tab selection */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-rose-500" />
              <span>{isArabic ? 'وحدة الاستكشاف:' : 'Lab Module:'}</span>
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'وحدة الاستكشاف' : 'Lab Module'}
                value={params.subTab}
                onChange={(e) => updateParam('subTab', e.target.value as MenstrualSubTab)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-rose-500 cursor-pointer"
              >
                <option value="cycle">
                  {isArabic ? 'دورة المبيض والرحم (٢٨ يوماً)' : '28-Day Synchronized Cycle'}
                </option>
                <option value="gametogenesis">
                  {isArabic ? 'تكوين الأمشاج والميوزي المشروط' : 'Oogenesis & Conditional Meiosis'}
                </option>
                <option value="atlas">
                  {isArabic ? 'أطلس التشريح والهستولوجيا' : 'Anatomy & Histology Atlas'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Scenario selection */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-400 block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isArabic ? 'الحالة الفسيولوجية:' : 'Physiological State:'}</span>
            </label>
            <div className="relative">
              <select
                aria-label={isArabic ? 'الحالة الفسيولوجية' : 'Physiological State'}
                value={params.scenario}
                onChange={(e) => updateParam('scenario', e.target.value as ReproductiveScenario)}
                className="w-full appearance-none p-2.5 pr-8 pl-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="normal">
                  {isArabic ? 'دورة شهرية طبيعية (عادية)' : 'Standard 28-Day Cycle'}
                </option>
                <option value="pregnancy">
                  {isArabic ? 'إخصاب وحمل (إنقاذ hCG)' : 'Fertilization & Pregnancy (hCG)'}
                </option>
                <option value="contraceptive_pill">
                  {isArabic ? 'أقراص منع الحمل (تثبيط التبويض)' : 'Combined Contraceptive Pill'}
                </option>
                <option value="ovariectomy">
                  {isArabic ? 'استئصال المبيضين / سن اليأس' : 'Bilateral Ovariectomy / Menopause'}
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Day slider control */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-rose-500" />
                <span>{isArabic ? 'يوم الدورة:' : 'Cycle Day:'}</span>
              </span>
              <span className="font-mono text-rose-400 font-black">{params.currentDay} / 28</span>
            </div>
            <input
              aria-label={isArabic ? 'يوم الدورة' : 'Cycle Day'}
              type="range"
              min="1"
              max="28"
              step="1"
              value={params.currentDay}
              onChange={(e) => updateParam('currentDay', parseInt(e.target.value, 10))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          {/* Toggles */}
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <label className="flex items-center justify-between text-xs font-bold cursor-pointer">
              <span className="text-slate-300">
                {isArabic ? 'إبراز نافذة الخصوبة (١٢-١٦)' : 'Highlight Fertile Window'}
              </span>
              <input
                type="checkbox"
                checked={params.showFertileWindow}
                onChange={(e) => updateParam('showFertileWindow', e.target.checked)}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between text-xs font-bold cursor-pointer">
              <span className="text-slate-300">
                {isArabic ? 'إظهار الشرايين الحلزونية' : 'Spiral Arteries Detail'}
              </span>
              <input
                type="checkbox"
                checked={params.showSpiralArteries}
                onChange={(e) => updateParam('showSpiralArteries', e.target.checked)}
                className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}
    >
      <div className="space-y-4">
        {/* Main Canvas Viewport */}
        <div className={`relative rounded-2xl overflow-hidden border ${
          isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950'
        }`}>
          <CanvasSimulationViewport
            id="menstrual-canvas-viewport"
            lang={lang ?? 'ar'}
            theme={theme}
            minHeight={460}
            onRender={handleRenderCanvas}
          >
            <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs font-bold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>
                {params.subTab === 'cycle'
                  ? isArabic
                    ? `اليوم ${params.currentDay}: ${simState.ovarianPhaseAr}`
                    : `Day ${params.currentDay}: ${simState.ovarianPhaseEn}`
                  : params.subTab === 'gametogenesis'
                  ? isArabic
                    ? 'تكوين الأمشاج والميوزي المشروط'
                    : 'Oogenesis Meiotic Timeline'
                  : isArabic
                  ? 'أطلس الجهاز التناسلي الأنثوي'
                  : 'Anatomy Atlas'}
              </span>
            </div>
          </CanvasSimulationViewport>
        </div>

        {/* Atlas Image Sub-Panel */}
        {params.subTab === 'atlas' && (
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>
                  {isArabic
                    ? 'أطلس تشريح الجهاز التناسلي الأنثوي والهستولوجيا المجهرية'
                    : 'Female Reproductive Anatomy & Ovarian Histology Atlas'}
                </span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                {isArabic ? 'رسم طبي فائق الدقة' : 'High-Resolution Medical Render'}
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={ovaryAtlasImg}
                alt="Human Ovarian Cycle & Female Reproductive Anatomy"
                className="w-full h-auto max-h-[460px] object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  {isArabic
                    ? 'يوضح المخطط مقطعاً بالمبيض يبرز نمو حويصلة جراف، وانفجارها لحظة التبويض لتحرير الخلية البيضية الثانوية، وتحولها للجسم الأصفر، بجوار قمع قناة فالوب والرحم ببطانته الدموية.'
                    : 'Medical illustration showing ovarian cortex with developing Graafian follicles, ovulatory rupture releasing secondary oocyte, corpus luteum formation, alongside Fallopian tube and uterus with endometrium.'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Phase Summary Status Banner */}
        <div
          className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'طور المبيض' : 'Ovarian State'}
              </span>
              <span className="font-bold text-rose-400 text-xs line-clamp-1">
                {isArabic ? simState.ovarianPhaseAr : simState.ovarianPhaseEn}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'طور بطانة الرحم' : 'Endometrial Phase'}
              </span>
              <span className="font-bold text-cyan-400 text-xs line-clamp-1">
                {isArabic ? simState.uterinePhaseAr : simState.uterinePhaseEn}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'احتمالية الإخصاب' : 'Fertile Probability'}
              </span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {simState.fertileProbability}%
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'قطر الحويصلة' : 'Follicle Diameter'}
              </span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {simState.follicleDiameter} mm
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
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>{isArabic ? 'ملاحظات وتطبيقات المنهج المصري للثانوية العامة:' : 'Egyptian Curriculum Exam Insights:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-rose-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الانقسام الميوزي الثاني المؤجل' : 'Conditional Meiosis II'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'لا تكتمل مرحلة الانقسام الميوزي الثاني إلا لحظة دخول الحيوان المنوي للخلية البيضية الثانوية في الثلث الأول لقناة فالوب لينتج بويضة ناضجة (n) وجسم قطبي ثانٍ.'
                  : 'Meiosis II is conditionally arrested in Metaphase II and completes ONLY upon sperm penetration in the Fallopian tube, yielding a mature ovum (n) and second polar body.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'أقراص منع الحمل المركبة' : 'Combined Contraceptive Pills'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'تحتوي على هرمونات صناعية تشبه الإستروجين والبروجستيرون، فتثبط الغدة النخامية عن إفراز FSH وLH بالتغذية الراجعة السلبية، فيتوقف نضج حويصلات جراف والتبويض تماماً.'
                  : 'Synthetic estrogen/progesterone suppresses pituitary FSH and LH secretion via negative feedback, completely preventing follicular maturation and ovulation.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'انتقال إفراز البروجستيرون' : 'Luteal-Placental Shift'}</span>
              </div>
              <p className="text-slate-300">
                {isArabic
                  ? 'يفرز الجسم الأصفر البروجستيرون حتى نهاية الشهر الثالث؛ ومع بداية الشهر الرابع تضمر بقاياه وتكون المشيمة قد اكتملت لتحل محله حتى الولادة.'
                  : 'The corpus luteum secretes progesterone through month 3; at the start of month 4, the mature placenta fully takes over progesterone and relaxin secretion.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VirtualLabShell>
  );
};

export default MenstrualCycleLab;
