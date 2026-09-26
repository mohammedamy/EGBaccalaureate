import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Scale,
  Compass,
  HelpCircle,
  Layers,
} from 'lucide-react';
import kantPhoto from '../../../assets/philosophy/kant_critique_pure_reason_1781.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface KantHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const KANT_HOTSPOTS: KantHotspot[] = [
  {
    id: 'synthetic_a_priori_judgments',
    xPct: 48.0,
    yPct: 35.0,
    titleAr: 'الأحكام التركيبية القبلية (Synthetic A Priori Judgments)',
    titleEn: 'Synthetic A Priori Judgments: The Core of Critique',
    categoryAr: 'نظرية المعرفة الكانطية',
    categoryEn: 'Transcendental Epistemology',
    descAr:
      'السؤال المركزي الذي افتتح به إيمانويل كانط كتابه الخالد في ريغا عام 1781: "كيف يمكن قيام أحكام تركيبية قبلية؟". تجاوز كانط ثنائية التجريبية (ديفيد هيوم) والعقلانية (لايبنتس)، مبرهناً أن المعرفة العلمية الرصينة (كالرياضيات والفيزياء النيوتونية) تضيف جديداً إلى المحمول (تركيبية) ومع ذلك تتسم بالضرورة والشمول المطلق قبل أي تجربة حسية (قبلية).',
    descEn:
      'The central question of the Critique of Pure Reason: "How are synthetic a priori judgments possible?" Kant synthesized empiricism (Hume) and rationalism (Leibniz), demonstrating that scientific truths (mathematics and Newtonian physics) expand knowledge synthetically while possessing absolute universality and necessity a priori.',
    scientificInsightAr:
      'أحدث كانط "ثورة كوبرنيكية" في الفلسفة: بدلاً من افتراض أن معارفنا يجب أن تطابق الأشياء في ذاتها، افترض أن الأشياء كظواهر (Phenomena) هي التي يجب أن تتطابق مع بنيتنا الإدراكية القبلية.',
    scientificInsightEn:
      'Kant inaugurated the "Copernican Revolution" in philosophy: instead of cognition conforming to objects, objects as phenomena must conform to our human a priori cognitive faculties.',
  },
  {
    id: 'transcendental_aesthetic_space_time',
    xPct: 22.0,
    yPct: 55.0,
    titleAr: 'الجماليات الترنسندنتالية: الزمان والمكان صورتان قبليتان (Space & Time)',
    titleEn: 'Transcendental Aesthetic: Pure A Priori Forms of Sensibility',
    categoryAr: 'صور الحساسية الخالصة',
    categoryEn: 'Forms of Pure Intuition',
    descAr:
      'الفصل الأول الموضح بخط الفراكتر الكلاسيكي في مطلع المخطوط؛ يبرهن كانط أن الزمان والمكان ليسا كائنين مستقلين في العالم الخارجي ولا مفاهيم تجريبية مستخلصة من الملاحظة، بل هما "صورتان قبليتان للحساسية البشرية" (A Priori Forms of Intuition) تنظم بهما حواسنا كل ما يرد إليها من معطيات خام.',
    descEn:
      'In the Transcendental Aesthetic, Kant proves that space and time are neither mind-independent physical containers nor empirical concepts derived from observation, but rather the two pure, subjective a priori forms of human sensibility through which all appearances are experienced.',
    scientificInsightAr:
      'المكان هو صورة الحس الخارجي (أساس الهندسة الإقليدية)، والزمان هو صورة الحس الداخلي والتعاقب (أساس الحساب والجبر).',
    scientificInsightEn:
      'Space is the pure form of outer sense (founding geometry), while time is the pure form of inner sense and temporal succession (founding arithmetic).',
  },
  {
    id: 'twelve_categories_of_understanding',
    xPct: 72.0,
    yPct: 40.0,
    titleAr: 'المقولات الاثنتا عشرة للفهم الخالص (The 12 Categories)',
    titleEn: 'The Twelve A Priori Categories of the Understanding',
    categoryAr: 'التحليل الترنسندنتالي',
    categoryEn: 'Transcendental Analytic & Categories',
    descAr:
      'استنباط كانط الصوري لاثنتي عشرة مقولة عقلية خالصة موزعة على أربعة محاور: الكم (الوحدة، الكثرة، الكلية)، الكيف (الواقع، السلب، الحصر)، الإضافة (الجوهر والعَرَض، العلية والمعلولية، المعية)، والجهة (الإمكان، الوجود، الضرورة). العقل بدون هذه المقولات لا يستطيع الحكم أو التفكير، فـ "المفاهيم بغير حدوس حسية جوفاء، والحدوس بغير مفاهيم عمياء".',
    descEn:
      'Kant’s deduction of twelve pure concepts of the understanding across four triads: Quantity (Unity, Plurality, Totality), Quality (Reality, Negation, Limitation), Relation (Substance, Causality, Community), and Modality (Possibility, Existence, Necessity). "Thoughts without content are empty, intuitions without concepts are blind."',
    scientificInsightAr:
      'أنقذ كانط مبدأ السببية والعلية من تشكيك ديفيد هيوم بنقله من كونه مجرد عادة نفسية إلى مقولة عقلية قبلية حتمية لإمكان التجربة ذاتها.',
    scientificInsightEn:
      'Kant rescued the principle of causality from Humean skepticism by establishing it not as a psychological habit, but as an indispensable a priori category necessary for the very possibility of experience.',
  },
  {
    id: 'four_cosmological_antinomies',
    xPct: 35.0,
    yPct: 78.0,
    titleAr: 'الجدليات والتناقضات الكونية الأربعة (The 4 Antinomies of Reason)',
    titleEn: 'Transcendental Dialectic: The Four Antinomies of Pure Reason',
    categoryAr: 'نقد الميتافيزيقا التقليدية',
    categoryEn: 'Transcendental Dialectic & Antinomies',
    descAr:
      'القسم الجدلي الذي يظهر فيه اصطدام العقل البشري بذاته عندما يحاول تجاوز حدود التجربة الممكنة والتنظير للمطلق: 1) تناهي العالم زمانياً ومكانياً مقابل لامتناهيه، 2) قابلية المادة للتجزؤ اللانهائي مقابل الجواهر البسيطة، 3) حتمية الطبيعة مقابل حرية الإرادة، 4) وجود علة واجبة أولى مقابل عدمها.',
    descEn:
      'The Transcendental Dialectic where pure reason inevitably entangles itself in self-contradiction when transgressing empirical boundaries: 1) Finite vs infinite universe, 2) Simple indivisible parts vs infinite divisibility, 3) Causal determinism vs human freedom, 4) Necessary being vs contingent nature.',
    scientificInsightAr:
      'حل كانط التناقض الثالث (الحرية مقابل الحتمية) بتمايزه الحاسم: الإنسان كظاهرة (Phenomenon) خاضع لحتمية الطبيعة، أما كشيء في ذاته (Noumenon) فهو كائن أخلاقي حر.',
    scientificInsightEn:
      'Kant resolved the third antinomy (Freedom vs. Determinism) via Transcendental Idealism: humanity as phenomenon is causally determined, but as noumenon possesses transcendental moral freedom.',
  },
  {
    id: 'konigsberg_study_quill_pocket_watch',
    xPct: 82.0,
    yPct: 80.0,
    titleAr: 'ساعة الجيب وريشة الإوزة في كونيغسبرغ (Königsberg Relics)',
    titleEn: 'Goose Quill, Reading Spectacles & Königsberg Pocket Watch',
    categoryAr: 'أدوات كانط الأرشيفية وطقوس التأليف',
    categoryEn: 'Königsberg 1781 Archival Artifacts',
    descAr:
      'ساعة الجيب الذهبية التي ارتبطت بأسطورة انضباط كانط الصارم؛ حيث كان أهالي مدينة كونيغسبرغ ببروسيا يضبطون ساعاتهم على جولته اليومية الشهيرة، مع نظارته القارئة، وريشة الإوزة وحبر السناج الألماني الذي خط به الطبعة الأولى الصادرة في ريغا عام 1781.',
    descEn:
      'The gold pocket watch reflecting Kant’s legendary punctuality (citizens of Königsberg famously set their timepieces by his daily walk), paired with his reading spectacles, goose quill dip pen, and seal wax marking the historic 1781 first edition printed in Riga by Johann Friedrich Hartknoch.',
    scientificInsightAr:
      'استغرق كانط أكثر من عقد كامل من "الصمت الفكري" والتأمل المركز (1770-1781) ليكتب مسودة نقد العقل الخالص في بضعة أشهر.',
    scientificInsightEn:
      'Kant spent a "silent decade" of deep meditation (1770–1781) before drafting the 800-page Critique of Pure Reason in a sudden burst of creative synthesis.',
  },
];

interface JudgmentExample {
  id: string;
  statementAr: string;
  statementEn: string;
  type: 'analytic_a_priori' | 'synthetic_a_posteriori' | 'synthetic_a_priori';
  explanationAr: string;
  explanationEn: string;
  disciplineAr: string;
  disciplineEn: string;
}

const JUDGMENT_EXAMPLES: JudgmentExample[] = [
  {
    id: 'j1',
    statementAr: 'كل عازب هو شخص غير متزوج',
    statementEn: 'All bachelors are unmarried',
    type: 'analytic_a_priori',
    explanationAr:
      'حكم تحليلي قبلي: المحمول (غير متزوج) متضمن بالضرورة في تعريف الموضوع (عازب). صدقه مستند لقانون عدم التناقض ولا يحتاج لملاحظة تجريبية، ولا يضيف أي معرفة جديدة بالعالم.',
    explanationEn:
      'Analytic A Priori: The predicate "unmarried" is already contained within the concept of the subject "bachelor". Grounded purely in the Law of Non-Contradiction; universal, necessary, but explicative rather than ampliative.',
    disciplineAr: 'المنطق الصوري واللغة',
    disciplineEn: 'Formal Logic & Semantics',
  },
  {
    id: 'j2',
    statementAr: 'كل الأجسام ثقيلة (لها وزن محدد يقاس تجريبياً)',
    statementEn: 'All bodies are heavy (possess measurable empirical weight)',
    type: 'synthetic_a_posteriori',
    explanationAr:
      'حكم تركيبي بعدي: الوزن لا يتضمنه مفهوم "الامتداد في المكان" لذاته، بل يُعرف عن طريق قياس الجاذبية والتجربة الحسية. حكم عرضي غير ضروري.',
    explanationEn:
      'Synthetic A Posteriori: Weight is not logically contained in the mere definition of physical extension; it is discovered through empirical gravitation measurements. Informative, but contingent.',
    disciplineAr: 'الفيزياء التجريبية والملاحظة',
    disciplineEn: 'Empirical Physics & Observation',
  },
  {
    id: 'j3',
    statementAr: '7 + 5 = 12',
    statementEn: '7 + 5 = 12',
    type: 'synthetic_a_priori',
    explanationAr:
      'حكم تركيبي قبلي: العدد 12 ليس متضمناً في فكرة 7 أو 5 بمفردها أو فكرة الجمع التحليلية؛ بل يتطلب حدساً حسياً قبلياً للتعاقب الزماني لضم الوحدات. إنه يقيني وضروري وقبلي، وفي الوقت ذاته يوسع المعرفة.',
    explanationEn:
      'Synthetic A Priori: The concept of 12 is not obtained by merely analyzing the concepts of 7, 5, and addition; it requires intuitive construction in time. It is universally necessary and ampliative.',
    disciplineAr: 'علم الحساب الخالص (Arithmetic)',
    disciplineEn: 'Pure Arithmetic & Time Intuition',
  },
  {
    id: 'j4',
    statementAr: 'الخط المستقيم هو أقصر مسافة بين نقطتين',
    statementEn: 'A straight line between two points is the shortest distance',
    type: 'synthetic_a_priori',
    explanationAr:
      'حكم تركيبي قبلي: مفهوم "المستقيم" كيفي محض، ومفهوم "الأقصر" كمي بالكامل ولا يمكن استخراجه بالتحليل اللغوي؛ بل يستند لحدس المكان الخالص القبلي وضرورة الهندسة.',
    explanationEn:
      'Synthetic A Priori: "Straight" is a purely qualitative concept, while "shortest" is entirely quantitative. The synthesis relies on the pure a priori spatial intuition of Euclidean geometry.',
    disciplineAr: 'علم الهندسة الإقليدية الخالصة',
    disciplineEn: 'Pure Euclidean Geometry',
  },
  {
    id: 'j5',
    statementAr: 'لكل حادث علة توجب حدوثه (مبدأ العلية)',
    statementEn: 'Every event has a cause that determines its occurrence',
    type: 'synthetic_a_priori',
    explanationAr:
      'حكم تركيبي قبلي: مفهوم الحادث لا يحتوي بذاته مفهوم العلة، لكن العقل يفرض مقولة السببية القبلية كشرط مسبق حتمي لإمكان إدراك أي تعاقب موضوعي في الطبيعة.',
    explanationEn:
      'Synthetic A Priori: The concept of an event does not analytically contain the concept of cause; rather, the understanding imposes causality as an indispensable a priori condition for objective experience.',
    disciplineAr: 'العلم الطبيعي الخالص والميتافيزيقا',
    disciplineEn: 'Pure Natural Science (Newtonian Physics)',
  },
];

interface Antinomy {
  id: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  thesisAr: string;
  thesisEn: string;
  antithesisAr: string;
  antithesisEn: string;
  resolutionAr: string;
  resolutionEn: string;
}

const KANT_ANTINOMIES: Antinomy[] = [
  {
    id: 1,
    titleAr: 'التناقض الأول: الزمان والمكان (تناهي العالم)',
    titleEn: 'First Antinomy: Extent of the Universe in Space & Time',
    categoryAr: 'الرياضيات الكونية (كم)',
    categoryEn: 'Cosmological Mathematical (Quantity)',
    thesisAr: 'الأطروحة: للعالم بداية في الزمان، وهو محدود أيضاً من حيث المكان داخل حدود معينة.',
    thesisEn: 'Thesis: The world has a beginning in time, and is also limited in space.',
    antithesisAr: 'نقيض الأطروحة: ليس للعالم بداية ولا حدود في المكان، بل هو لامتناهٍ زماناً ومكاناً.',
    antithesisEn: 'Antithesis: The world has no beginning, and no limits in space; it is infinite.',
    resolutionAr:
      'الحل الكانطي: كلاهما كاذب؛ لأن الزمان والمكان ليسا كائنين قائمين بذاتهما (شيء في ذاته)، بل هما صورتان لحدسنا الحسي؛ العالم كظاهرة معطى كمتتالية مستمرة للبحث وليس كلاً منتهياً أو غير منتهٍ كمعطى مسبق.',
    resolutionEn:
      'Kantian Resolution: Both are false because space and time do not exist as independent things-in-themselves. The world as appearance is an ongoing empirical regress, not a completed totality.',
  },
  {
    id: 2,
    titleAr: 'التناقض الثاني: الذرات والتجزئة (المادة والجواهر البسيطة)',
    titleEn: 'Second Antinomy: Divisibility of Matter into Simple Parts',
    categoryAr: 'الرياضيات الكونية (كيف)',
    categoryEn: 'Cosmological Mathematical (Quality)',
    thesisAr: 'الأطروحة: كل جوهر مركب في العالم يتألف من أجزاء بسيطة غير قابلة للتجزئة (الذرات).',
    thesisEn: 'Thesis: Every composite substance consists of simple, indivisible parts.',
    antithesisAr: 'نقيض الأطروحة: لا يوجد شيء بسيط في العالم، بل كل شيء مركب قابل للانقسام اللانهائي.',
    antithesisEn: 'Antithesis: Nothing simple exists in the world, everything is divisible to infinity.',
    resolutionAr:
      'الحل الكانطي: كلاهما كاذب أيضاً؛ فالمادة بوصفها ظاهرة في المكان لا تملك أجزاءً بسيطة مكتملة، وعملية التجزئة التجريبية مستمرة دوماً في الذهن.',
    resolutionEn:
      'Kantian Resolution: Both thesis and antithesis are false. Matter in spatial intuition has no fundamental static indivisible building blocks, but continues as an indefinite empirical synthesis.',
  },
  {
    id: 3,
    titleAr: 'التناقض الثالث: حرية الإرادة مقابل الحتمية الطبيعية',
    titleEn: 'Third Antinomy: Freedom vs. Universal Determinism',
    categoryAr: 'الديناميكا الكونية (الإضافة)',
    categoryEn: 'Cosmological Dynamical (Relation)',
    thesisAr: 'الأطروحة: العلية وفق قوانين الطبيعة ليست وحدها الفاعلة، بل يلزم افتراض علية حرة لتفسير حوادث العالم.',
    thesisEn: 'Thesis: Causality under natural laws is not the only cause; transcendental freedom is necessary.',
    antithesisAr: 'نقيض الأطروحة: لا توجد حرية على الإطلاق؛ بل كل شيء في الكون يحدث حتماً وفق قوانين الطبيعة الصارمة.',
    antithesisEn: 'Antithesis: There is no freedom; everything in the universe happens strictly according to nature’s laws.',
    resolutionAr:
      'الحل الكانطي: كلاهما صادق على مستويين مختلفين (المثالية الترنسندنتالية): الإنسان كظاهرة (Phenomenon) خاضع 100% للحتمية والفيزياء، ولكنه كذات في ذاتها (Noumenon) يمتلك إرادة حرة مسؤولة أخلاقياً.',
    resolutionEn:
      'Kantian Resolution: Both are true on different levels. Determinism governs appearances (phenomena in space/time), while transcendental freedom grounds our moral agency as noumenal subjects.',
  },
  {
    id: 4,
    titleAr: 'التناقض الرابع: الكائن الضروري (واجب الوجود)',
    titleEn: 'Fourth Antinomy: Necessary Being vs. Contingency',
    categoryAr: 'الديناميكا الكونية (الجهة)',
    categoryEn: 'Cosmological Dynamical (Modality)',
    thesisAr: 'الأطروحة: ينتمي إلى العالم، إما كجزء منه أو كعلة له، كائن ضروري الوجود بذاته (واجب الوجود).',
    thesisEn: 'Thesis: There belongs to the world an absolutely necessary being, either as part or cause.',
    antithesisAr: 'نقيض الأطروحة: لا يوجد كائن ضروري في العالم ولا خارجه بوصفه علة له؛ بل كل ما فيه ممكن وعرضي.',
    antithesisEn: 'Antithesis: An absolutely necessary being exists nowhere, neither in the world nor outside it.',
    resolutionAr:
      'الحل الكانطي: كلاهما صادق بالتمايز: لا يوجد كائن ضروري داخل السلسلة الفيزيائية التجريبية، ولكن يمكن إثبات فكرة الكائن الضروري كفكرة تنظيمية عليا خارج سلسلة الظواهر الحسية.',
    resolutionEn:
      'Kantian Resolution: Both can be harmonized: no empirically unconditioned necessary being exists within the phenomenal causal chain, yet a necessary ground can be postulated as an intelligible condition outside it.',
  },
];

export const KantCritiquePureReasonStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<KantHotspot>(KANT_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulator Mode: 'judgments' vs 'antinomies' vs 'categories'
  const [activeTab, setActiveTab] = useState<'judgments' | 'antinomies' | 'categories'>('judgments');

  // Judgments Lab State
  const [selectedJudgmentId, setSelectedJudgmentId] = useState<string>('j3');
  const currentJudgment = JUDGMENT_EXAMPLES.find((j) => j.id === selectedJudgmentId) ?? JUDGMENT_EXAMPLES[2];

  // Antinomies Lab State
  const [selectedAntinomyId, setSelectedAntinomyId] = useState<number>(3); // Freedom vs Determinism
  const currentAntinomy = KANT_ANTINOMIES.find((a) => a.id === selectedAntinomyId) ?? KANT_ANTINOMIES[2];
  const [showAntinomyResolution, setShowAntinomyResolution] = useState<boolean>(true);

  // Categories Lab State
  const [activeCategoryGroup, setActiveCategoryGroup] = useState<'quantity' | 'quality' | 'relation' | 'modality'>('relation');

  const categoryGroups = {
    quantity: {
      titleAr: '1. مقولات الكم (Quantity)',
      titleEn: '1. Categories of Quantity',
      items: [
        { nameAr: 'الوحدة (Unity)', nameEn: 'Unity (Singular)', descAr: 'إدراك الشيء ككل واحد متماسك' },
        { nameAr: 'الكثرة (Plurality)', nameEn: 'Plurality (Particular)', descAr: 'إدراك التعدد والتنوع' },
        { nameAr: 'الكلية (Totality)', nameEn: 'Totality (Universal)', descAr: 'الكثرة منظورة كوحدة جامعة' },
      ],
    },
    quality: {
      titleAr: '2. مقولات الكيف (Quality)',
      titleEn: '2. Categories of Quality',
      items: [
        { nameAr: 'الواقع أو الإيجاب (Reality)', nameEn: 'Reality (Affirmative)', descAr: 'إثبات صفة أو وجود لشيء' },
        { nameAr: 'السلب أو النفي (Negation)', nameEn: 'Negation (Negative)', descAr: 'سلب صفة أو حرمان وجود' },
        { nameAr: 'الحصر أو التحديد (Limitation)', nameEn: 'Limitation (Infinite)', descAr: 'تحديد حدود الإمكان' },
      ],
    },
    relation: {
      titleAr: '3. مقولات الإضافة والنسبة (Relation)',
      titleEn: '3. Categories of Relation',
      items: [
        { nameAr: 'الجوهر والعَرَض (Substance & Accident)', nameEn: 'Inherence & Subsistence', descAr: 'الثابت مقابل المتغير الطارئ' },
        { nameAr: 'السببية والعلية (Causality & Dependence)', nameEn: 'Causality & Dependence', descAr: 'لكل معلول سبب يفسره حتماً' },
        { nameAr: 'المعية والتفاعل (Community & Reciprocity)', nameEn: 'Community (Reciprocity)', descAr: 'التأثير المتبادل بين الأشياء في المكان' },
      ],
    },
    modality: {
      titleAr: '4. مقولات الجهة (Modality)',
      titleEn: '4. Categories of Modality',
      items: [
        { nameAr: 'الإمكان والامتناع (Possibility / Impossibility)', nameEn: 'Possibility - Impossibility', descAr: 'التوافق مع شروط التجربة' },
        { nameAr: 'الوجود والعدم (Existence / Non-Existence)', nameEn: 'Existence - Non-Existence', descAr: 'الارتباط بمعطى حسي واقعي' },
        { nameAr: 'الضرورة والاتفاق (Necessity / Contingency)', nameEn: 'Necessity - Contingency', descAr: 'اللزوم الحتمي وفق القوانين العامة' },
      ],
    },
  };

  const modalData: HiResImageModalData = {
    imageUrl: kantPhoto,
    titleAr: 'طبعة ريغا الأولى 1781 — نقد العقل الخالص لإيمانويل كانط',
    titleEn: 'Riga 1781 First Edition Folio — Immanuel Kant’s Kritik der reinen Vernunft',
    subtitleAr: 'التحفة المعرفية التي قلبت تاريخ الفلسفة وأسست للمثالية الترنسندنتالية',
    subtitleEn: 'The Masterwork of Transcendental Epistemology & Modern Philosophy',
    descriptionAr:
      'لوحة أرشيفية نادرة بدقة 4K للمجلد الأصلي من الطبعة الأولى لكتاب "نقد العقل الخالص" الصادر في ريغا عام 1781 للناشر يوهان فريدريش هارتكنوخ. تظهر الصفحة الأولى المفتوحة على "الجماليات الترنسندنتالية" (Die transcendentale Aesthetik) بخط الفراكتر القوطي الكلاسيكي، مع نظارات القراءة لكانط، وساعة جيبه الذهبية الشهيرة، وريشة الإوزة المغمسة في الحبر والختم الشمعي الأحمر لجامعة ألبرتينا في كونيغسبرغ.',
    descriptionEn:
      'Rare 4K ultra-high-definition archival plate of the authentic 1781 first edition of Immanuel Kant’s Kritik der reinen Vernunft, published in Riga by Johann Friedrich Hartknoch. The volume lies open to the Transcendental Aesthetic chapter set in German Fraktur typography, accompanied by Kant’s reading spectacles, his legendary pocket watch, a goose quill dip pen, and the Albertina University wax seal.',
    locationAr: 'متحف كانط والأرشيف الفلسفي البروسي / مكتبة كونيغسبرغ الوطنية',
    locationEn: 'Kant Museum & Prussian State Archives / Albertina University Collections',
    dateOrEraAr: '1781 م (عصر التنوير الأوروبي / بروسيا)',
    dateOrEraEn: '1781 CE (European Enlightenment / East Prussia)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/40 border-indigo-900/40 text-slate-100 shadow-2xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* 4K Archival Viewer Modal */}
      {isModalOpen && (
        <HiResImageModal
          data={modalData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={isArabic ? 'ar' : 'en'}
          theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
        />
      )}

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-slate-800 flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                1781 CE • Königsberg
              </span>
              <span className="text-xs font-mono text-indigo-400 font-bold">
                {isArabic ? 'نقد العقل الخالص • الطبعة الأولى' : 'Kritik der reinen Vernunft'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-stone-200">
              {isArabic
                ? 'استوديو إيمانويل كانط: الأحكام التركيبية القبلية والتناقضات الكونية'
                : 'Immanuel Kant Studio: Synthetic A Priori & Cosmological Antinomies'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة ريغا 1781 بدقة 4K' : 'Inspect 4K Kant 1781 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-indigo-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={kantPhoto}
              alt="Immanuel Kant Critique of Pure Reason 1781 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {KANT_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{
                    left: `${hotspot.xPct}%`,
                    top: `${hotspot.yPct}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer group/btn ${
                    isSelected
                      ? 'scale-125 ring-4 ring-indigo-400 bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                      : 'bg-slate-900/80 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-indigo-200 border border-indigo-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-indigo-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                {isArabic ? 'كونيغسبرغ • بروسيا الشرقية 1781' : 'Königsberg • East Prussia 1781'}
              </span>
              <span className="text-[11px] text-indigo-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {KANT_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-indigo-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-indigo-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-white leading-snug">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'الأثر الفلسفي والعلمي التاريخي:' : 'Historical Philosophical Insight:'}</span>
            </div>
            <p className="text-xs text-indigo-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Switcher Navigation Tabs */}
      <div className="border-t border-indigo-800/30 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {isArabic ? 'المختبر الإبستمولوجي التفاعلي لكانط' : 'Interactive Kantian Epistemology Laboratory'}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setActiveTab('judgments')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'judgments'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تصنيف الأحكام المعرفية' : 'Judgments Matrix'}</span>
            </button>
            <button
              onClick={() => setActiveTab('antinomies')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'antinomies'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isArabic ? 'التناقضات الكونية الأربعة' : '4 Antinomies of Reason'}</span>
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'categories'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مقولات الفهم الاثنتا عشرة' : '12 Pure Categories'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Judgments Lab */}
        {activeTab === 'judgments' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                {isArabic ? 'اختر قضية أو حكماً معرفياً لفحصه:' : 'Select a Proposition / Judgment to Test:'}
              </span>
              {JUDGMENT_EXAMPLES.map((j) => {
                const isSelected = j.id === selectedJudgmentId;
                return (
                  <button
                    key={j.id}
                    onClick={() => setSelectedJudgmentId(j.id)}
                    className={`w-full min-h-[50px] p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md ring-1 ring-indigo-500'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold">
                        {isArabic ? j.statementAr : j.statementEn}
                      </div>
                      <span className="text-[10px] text-indigo-400 font-mono mt-0.5 block">
                        {isArabic ? j.disciplineAr : j.disciplineEn}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded whitespace-nowrap ${
                        j.type === 'synthetic_a_priori'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : j.type === 'analytic_a_priori'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {j.type === 'synthetic_a_priori'
                        ? isArabic ? 'تركيبي قبلي' : 'Synthetic A Priori'
                        : j.type === 'analytic_a_priori'
                        ? isArabic ? 'تحليلي قبلي' : 'Analytic A Priori'
                        : isArabic ? 'تركيبي بعدي' : 'Synthetic A Posteriori'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Judgment Telemetry Card */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                    {isArabic ? 'التحليل النقدي الكانطي للحكم' : 'Kantian Critical Epistemological Breakdown'}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                      currentJudgment.type === 'synthetic_a_priori'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : currentJudgment.type === 'analytic_a_priori'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    {currentJudgment.type === 'synthetic_a_priori'
                      ? isArabic ? 'حكم تركيبي قبلي (ثورة كانط)' : 'Synthetic A Priori (Core Discovery)'
                      : currentJudgment.type === 'analytic_a_priori'
                      ? isArabic ? 'حكم تحليلي قبلي (توضيحي)' : 'Analytic A Priori (Explicative)'
                      : isArabic ? 'حكم تركيبي بعدي (تجريبي)' : 'Synthetic A Posteriori (Empirical)'}
                  </span>
                </div>

                <div className="text-base sm:text-lg font-black text-white mb-2">
                  "{isArabic ? currentJudgment.statementAr : currentJudgment.statementEn}"
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-950 border border-slate-800">
                  {isArabic ? currentJudgment.explanationAr : currentJudgment.explanationEn}
                </p>
              </div>

              {/* Kantian 2x2 Epistemological Quadrant SVG */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[11px] font-mono text-slate-400 block mb-2 font-bold">
                  {isArabic ? 'مصفوفة كانط الرباعية للأحكام المعرفية (The 2x2 Epistemological Matrix)' : 'Kant’s 2x2 Judgment Classification Grid'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div
                    className={`p-2.5 rounded-lg border text-left ${
                      currentJudgment.type === 'analytic_a_priori'
                        ? 'bg-blue-900/40 border-blue-500 text-blue-200 ring-2 ring-blue-500'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="font-bold">{isArabic ? 'تحليلي قبلي (Analytic A Priori)' : 'Analytic A Priori'}</div>
                    <div className="text-[10px] opacity-80">{isArabic ? 'قائم على عدم التناقض • يقيني ولا يوسع المعرفة' : 'Law of Contradiction • Non-ampliative'}</div>
                  </div>

                  <div
                    className={`p-2.5 rounded-lg border text-left ${
                      currentJudgment.type === 'synthetic_a_priori'
                        ? 'bg-emerald-900/40 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="font-bold text-emerald-400">{isArabic ? 'تركيبي قبلي (Synthetic A Priori)' : 'Synthetic A Priori'}</div>
                    <div className="text-[10px] opacity-80">{isArabic ? 'يقيني وضروري • ويوسع المعرفة العلمية (رياضيات/فيزياء)' : 'Universal necessity + ampliative'}</div>
                  </div>

                  <div className="p-2.5 rounded-lg border text-left bg-slate-900/40 border-slate-800/40 text-slate-600">
                    <div className="font-bold">{isArabic ? 'تحليلي بعدي (مستحيل عقلاً)' : 'Analytic A Posteriori (Impossible)'}</div>
                    <div className="text-[10px] opacity-80">{isArabic ? 'لا معنى لتحليل مفهوم بعد التجربة' : 'Self-contradictory category'}</div>
                  </div>

                  <div
                    className={`p-2.5 rounded-lg border text-left ${
                      currentJudgment.type === 'synthetic_a_posteriori'
                        ? 'bg-amber-900/40 border-amber-500 text-amber-200 ring-2 ring-amber-500'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="font-bold">{isArabic ? 'تركيبي بعدي (Synthetic A Posteriori)' : 'Synthetic A Posteriori'}</div>
                    <div className="text-[10px] opacity-80">{isArabic ? 'ملاحظة حسية • يوسع المعرفة ولكنه احتمالي عرضي' : 'Empirical observation • Contingent'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Antinomies Lab */}
        {activeTab === 'antinomies' && (
          <div className="space-y-6">
            {/* Antinomy Selector Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {KANT_ANTINOMIES.map((ant) => {
                const isSelected = ant.id === selectedAntinomyId;
                return (
                  <button
                    key={ant.id}
                    onClick={() => setSelectedAntinomyId(ant.id)}
                    className={`min-h-[50px] p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md ring-1 ring-indigo-400'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{isArabic ? ant.titleAr : ant.titleEn}</div>
                    <div className="text-[10px] mt-1 opacity-80 font-mono">{isArabic ? ant.categoryAr : ant.categoryEn}</div>
                  </button>
                );
              })}
            </div>

            {/* Antinomy Collision Stage */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-indigo-400">
                  {isArabic ? currentAntinomy.titleAr : currentAntinomy.titleEn}
                </span>
                <button
                  onClick={() => setShowAntinomyResolution(!showAntinomyResolution)}
                  className="min-h-[36px] px-3 py-1 rounded-lg text-xs font-bold bg-indigo-950 border border-indigo-700/60 text-indigo-300 hover:bg-indigo-900 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{showAntinomyResolution ? (isArabic ? 'إخفاء الحل الكانطي' : 'Hide Resolution') : (isArabic ? 'إظهار الحل الكانطي' : 'Show Kantian Resolution')}</span>
                </button>
              </div>

              {/* Thesis vs Antithesis Split Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Thesis (Rationalist Dogmatism) */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span className="text-xs font-bold text-purple-300 uppercase font-mono">
                      {isArabic ? 'الأطروحة (العقلانية الدوغمائية - Thesis)' : 'Thesis (Dogmatic Rationalism)'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-sans">
                    {isArabic ? currentAntinomy.thesisAr : currentAntinomy.thesisEn}
                  </p>
                </div>

                {/* Antithesis (Empiricist Skepticism) */}
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-xs font-bold text-amber-300 uppercase font-mono">
                      {isArabic ? 'نقيض الأطروحة (التجريبية الشكية - Antithesis)' : 'Antithesis (Empiricist Skepticism)'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-sans">
                    {isArabic ? currentAntinomy.antithesisAr : currentAntinomy.antithesisEn}
                  </p>
                </div>
              </div>

              {/* Kantian Transcendental Idealist Resolution */}
              {showAntinomyResolution && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-2 transition-all">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-black">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isArabic
                        ? 'الحل النقدي عبر المثالية الترنسندنتالية (Transcendental Idealism Resolution):'
                        : 'Transcendental Idealism Resolution (Phenomena vs. Noumena):'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-sans">
                    {isArabic ? currentAntinomy.resolutionAr : currentAntinomy.resolutionEn}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: 12 Pure Categories Lab */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            {/* Category Triad Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(categoryGroups) as Array<keyof typeof categoryGroups>).map((groupKey) => {
                const isSelected = activeCategoryGroup === groupKey;
                const group = categoryGroups[groupKey];
                return (
                  <button
                    key={groupKey}
                    onClick={() => setActiveCategoryGroup(groupKey)}
                    className={`min-h-[50px] p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md ring-1 ring-indigo-400'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-black">{isArabic ? group.titleAr : group.titleEn}</div>
                  </button>
                );
              })}
            </div>

            {/* Triad Categories Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categoryGroups[activeCategoryGroup].items.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-indigo-900/40 space-y-2 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800">
                      #{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {isArabic ? 'مقولة قبلية' : 'A Priori Category'}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white">{isArabic ? cat.nameAr : cat.nameEn}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{cat.descAr}</p>
                </div>
              ))}
            </div>

            {/* Famous Kantian Epistemological Maxim */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center font-mono text-xs text-indigo-300">
              <span className="text-amber-400 font-bold block mb-1">
                {isArabic ? 'درة كانط الفلسفية الخالدة:' : 'Kant’s Famous Epistemic Maxim:'}
              </span>
              "{isArabic ? 'المفاهيم بغير حدوس حسية جوفاء، والحدوس بغير مفاهيم عمياء' : 'Thoughts without content are empty, intuitions without concepts are blind.'}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
