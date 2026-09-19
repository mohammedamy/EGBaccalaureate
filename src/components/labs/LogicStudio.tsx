import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Brain,
  Binary,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Check,
  X,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Shield,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'truth_table' | 'syllogism' | 'mills_methods' | 'fuzzy_ai' | 'bioethics_matrix';
}

type LogicStudioMode = 'truth_table' | 'syllogism' | 'mills_methods' | 'fuzzy_ai' | 'bioethics_matrix';

export const LogicStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'truth_table',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<LogicStudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: Propositional Logic & Truth Table Lab
  // -------------------------------------------------------------
  type LogicOperator = 'conjunction' | 'disjunction' | 'conditional' | 'biconditional' | 'negation' | 'tautology_demo';
  const [selectedOp, setSelectedOp] = useState<LogicOperator>('conditional');
  const [pVal, setPVal] = useState<boolean>(true);
  const [qVal, setQVal] = useState<boolean>(false);

  const operatorsData: Record<LogicOperator, {
    symbol: string;
    latex: string;
    titleEn: string;
    titleAr: string;
    ruleEn: string;
    ruleAr: string;
    table: Array<{ p: boolean; q?: boolean; result: boolean; stepTextEn: string; stepTextAr: string }>;
    tautologyClass: 'contingent' | 'tautology' | 'contradiction';
  }> = {
    negation: {
      symbol: '~p',
      latex: '\\sim p',
      titleEn: 'Negation / Denial (السلب أو النفي)',
      titleAr: 'دالة النفي أو السلب (~ق)',
      ruleEn: 'Reverses the truth value: True becomes False, False becomes True. ($T \\to F, F \\to T$).',
      ruleAr: 'قاعدتها: إذا صدقت قضية معينة كذب سلبها، وإذا كذبت صدق سلبها. لا يصدقان معاً ولا يكذبان معاً.',
      table: [
        { p: true, result: false, stepTextEn: 'p is True -> ~p is False', stepTextAr: 'ق صادقة -> ~ق كاذبة' },
        { p: false, result: true, stepTextEn: 'p is False -> ~p is True', stepTextAr: 'ق كاذبة -> ~ق صادقة' }
      ],
      tautologyClass: 'contingent'
    },
    conjunction: {
      symbol: 'p ∧ q',
      latex: 'p \\land q',
      titleEn: 'Conjunction (عطف / وصل)',
      titleAr: 'دالة الوصل أو العطف (ق . ل)',
      ruleEn: 'True ONLY when BOTH conjuncts are True. False in all other 3 scenarios.',
      ruleAr: 'قاعدتها: يصدق الوصل في حالة واحدة فقط، وهي صدق الطرفين معاً، ويكذب إذا كذب أحدهما أو كلاهما.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Conjunction is TRUE', stepTextAr: 'صادقان معاً -> الوصل صادق' },
        { p: true, q: false, result: false, stepTextEn: 'q is False -> Conjunction is FALSE', stepTextAr: 'ل كاذبة -> الوصل كاذب' },
        { p: false, q: true, result: false, stepTextEn: 'p is False -> Conjunction is FALSE', stepTextAr: 'ق كاذبة -> الوصل كاذب' },
        { p: false, q: false, result: false, stepTextEn: 'Both False -> Conjunction is FALSE', stepTextAr: 'كاذبان معاً -> الوصل كاذب' }
      ],
      tautologyClass: 'contingent'
    },
    disjunction: {
      symbol: 'p ∨ q',
      latex: 'p \\lor q',
      titleEn: 'Inclusive Disjunction (الانفصال الضعيف)',
      titleAr: 'دالة الانفصال (ق v ل)',
      ruleEn: 'False ONLY when BOTH disjuncts are False. True if at least one disjunct is True.',
      ruleAr: 'قاعدتها: يصدق الانفصال إذا صدق أحد طرفيه أو كلاهما، ويكذب في حالة واحدة فقط: كذب الطرفين معاً.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Disjunction is TRUE', stepTextAr: 'صادقان معاً -> الانفصال صادق' },
        { p: true, q: false, result: true, stepTextEn: 'p is True -> Disjunction is TRUE', stepTextAr: 'ق صادقة -> الانفصال صادق' },
        { p: false, q: true, result: true, stepTextEn: 'q is True -> Disjunction is TRUE', stepTextAr: 'ل صادقة -> الانفصال صادق' },
        { p: false, q: false, result: false, stepTextEn: 'Both False -> Disjunction is FALSE', stepTextAr: 'كاذبان معاً -> الانفصال كاذب' }
      ],
      tautologyClass: 'contingent'
    },
    conditional: {
      symbol: 'p → q',
      latex: 'p \\rightarrow q',
      titleEn: 'Conditional / Implication (الشرط / اللزوم)',
      titleAr: 'دالة الشرط أو اللزوم (ق ← ل)',
      ruleEn: 'False ONLY when the antecedent (p) is True and the consequent (q) is False ($T \\to F$).',
      ruleAr: 'قاعدتها: تكذب دالة الشرط في حالة واحدة فقط: صدق المقدم وكذب التالي، وتصدق في بقية الحالات الثلاث.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'True Antecedent + True Consequent -> TRUE', stepTextAr: 'مقدم صادق + تالٍ صادق -> الشرط صادق' },
        { p: true, q: false, result: false, stepTextEn: 'True Antecedent + False Consequent -> FALSE (Broken Promise)', stepTextAr: 'مقدم صادق + تالٍ كاذب -> الشرط كاذب (انكسار اللزوم)' },
        { p: false, q: true, result: true, stepTextEn: 'False Antecedent + True Consequent -> TRUE', stepTextAr: 'مقدم كاذب + تالٍ صادق -> الشرط صادق' },
        { p: false, q: false, result: true, stepTextEn: 'False Antecedent + False Consequent -> TRUE', stepTextAr: 'مقدم كاذب + تالٍ كاذب -> الشرط صادق' }
      ],
      tautologyClass: 'contingent'
    },
    biconditional: {
      symbol: 'p ↔ q',
      latex: 'p \\leftrightarrow q',
      titleEn: 'Biconditional / Equivalence (التشارط / التكافؤ)',
      titleAr: 'دالة التشارط أو التكافؤ (ق ↔ ل)',
      ruleEn: 'True when BOTH components have IDENTICAL truth values (both True or both False).',
      ruleAr: 'قاعدتها: يصدق التشارط إذا تساوى طرفاه صدقاً أو كذباً (صادقان معاً أو كاذبان معاً)، ويكذب إذا اختلفا.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Biconditional is TRUE', stepTextAr: 'تطابق في الصدق -> التشارط صادق' },
        { p: true, q: false, result: false, stepTextEn: 'Different Truth Values -> FALSE', stepTextAr: 'اختلاف القيمتين -> التشارط كاذب' },
        { p: false, q: true, result: false, stepTextEn: 'Different Truth Values -> FALSE', stepTextAr: 'اختلاف القيمتين -> التشارط كاذب' },
        { p: false, q: false, result: true, stepTextEn: 'Both False -> Biconditional is TRUE', stepTextAr: 'تطابق في الكذب -> التشارط صادق' }
      ],
      tautologyClass: 'contingent'
    },
    tautology_demo: {
      symbol: 'p ∨ ~p',
      latex: 'p \\lor \\sim p',
      titleEn: 'Law of Excluded Middle / Tautology (تحصيل حاصل)',
      titleAr: 'قضية تحصيل حاصل (مبدأ الثالث المرفوع)',
      ruleEn: 'Tautology: An expression that evaluates to TRUE under EVERY conceivable assignment of truth values.',
      ruleAr: 'قضية تكرارية (تحصيل حاصل): تصدق في جميع الحالات الممكنة ولا تكذب أبداً مهما كانت قيمة مركباتها.',
      table: [
        { p: true, result: true, stepTextEn: 'T ∨ F -> Evaluates to TRUE', stepTextAr: 'ص v ك -> صادقة تحصيل حاصل' },
        { p: false, result: true, stepTextEn: 'F ∨ T -> Evaluates to TRUE', stepTextAr: 'ك v ص -> صادقة تحصيل حاصل' }
      ],
      tautologyClass: 'tautology'
    }
  };

  const currentOp = operatorsData[selectedOp];
  const evalCurrentRow = () => {
    if (selectedOp === 'negation') return !pVal;
    if (selectedOp === 'conjunction') return pVal && qVal;
    if (selectedOp === 'disjunction') return pVal || qVal;
    if (selectedOp === 'conditional') return !pVal || qVal;
    if (selectedOp === 'biconditional') return pVal === qVal;
    if (selectedOp === 'tautology_demo') return true;
    return true;
  };

  // -------------------------------------------------------------
  // Mode 2: Aristotelian Syllogism Validator
  // -------------------------------------------------------------
  type CategoricalType = 'A' | 'E' | 'I' | 'O';
  const [majorType, setMajorType] = useState<CategoricalType>('A');
  const [minorType, setMinorType] = useState<CategoricalType>('A');
  const [middleTerm, setMiddleTerm] = useState<string>(isArabic ? 'إنسان' : 'Mortal');
  const [majorTerm, setMajorTerm] = useState<string>(isArabic ? 'فانٍ' : 'Living Being');
  const [minorTerm, setMinorTerm] = useState<string>(isArabic ? 'سقراط' : 'Socrates');

  // Figure 1: Major is M - P, Minor is S - M
  // Rules of Figure 1:
  // 1. Minor premise must be Affirmative (موجبة: A or I)
  // 2. Major premise must be Universal (كلية: A or E)
  const isMinorAffirmative = minorType === 'A' || minorType === 'I';
  const isMajorUniversal = majorType === 'A' || majorType === 'E';
  const isSyllogismValid = isMinorAffirmative && isMajorUniversal;

  // Deducing conclusion type
  const getConclusionType = (): CategoricalType | 'INVALID' => {
    if (!isSyllogismValid) return 'INVALID';
    if (majorType === 'A' && minorType === 'A') return 'A'; // Barbara
    if (majorType === 'E' && minorType === 'A') return 'E'; // Celarent
    if (majorType === 'A' && minorType === 'I') return 'I'; // Darii
    if (majorType === 'E' && minorType === 'I') return 'O'; // Ferio
    return 'INVALID';
  };

  const conclusionType = getConclusionType();

  const getCategoricalLabel = (type: CategoricalType) => {
    switch (type) {
      case 'A': return isArabic ? 'كلية موجبة (ك.م - All)' : 'Universal Affirmative (A)';
      case 'E': return isArabic ? 'كلية سالبة (ك.س - No)' : 'Universal Negative (E)';
      case 'I': return isArabic ? 'جزئية موجبة (ج.م - Some)' : 'Particular Affirmative (I)';
      case 'O': return isArabic ? 'جزئية سالبة (ج.س - Some...not)' : 'Particular Negative (O)';
    }
  };

  // -------------------------------------------------------------
  // Mode 3: Mill's 5 Inductive Proof Methods
  // -------------------------------------------------------------
  type MillMethod = 'agreement' | 'difference' | 'joint' | 'concomitant' | 'residues';
  const [selectedMill, setSelectedMill] = useState<MillMethod>('agreement');

  // Concomitant variation slider
  const [tempDegree, setTempDegree] = useState<number>(30);
  const gasVolume = (tempDegree * 1.5 + 20).toFixed(1);

  // -------------------------------------------------------------
  // Mode 4: Fuzzy Logic vs Binary AI Visualizer
  // -------------------------------------------------------------
  const [ambientTemp, setAmbientTemp] = useState<number>(24);

  // Fuzzy membership functions
  const calcFuzzyMemberships = (t: number) => {
    // Cold: 100% at <= 16, 0% at >= 22
    let cold = 0;
    if (t <= 16) cold = 1;
    else if (t < 22) cold = (22 - t) / 6;

    // Comfortable: 0% at <= 18 and >= 28, 100% at 23
    let comfortable = 0;
    if (t > 18 && t < 23) comfortable = (t - 18) / 5;
    else if (t >= 23 && t < 28) comfortable = (28 - t) / 5;

    // Hot: 0% at <= 24, 100% at >= 30
    let hot = 0;
    if (t <= 24) hot = 0;
    else if (t < 30) hot = (t - 24) / 6;
    else hot = 1;

    return { cold, comfortable, hot };
  };

  const fuzzy = calcFuzzyMemberships(ambientTemp);
  const binaryVerdict = ambientTemp >= 25 ? 'HOT (1)' : 'COLD (0)';

  // -------------------------------------------------------------
  // Mode 5: Bioethics Dilemma Decision Matrix
  // -------------------------------------------------------------
  type BioDilemmaId = 'genome' | 'cloning' | 'consent' | 'future_gen';
  const [selectedDilemma, setSelectedDilemma] = useState<BioDilemmaId>('genome');

  const dilemmasData: Record<BioDilemmaId, {
    titleEn: string;
    titleAr: string;
    scenarioEn: string;
    scenarioAr: string;
    philosophers: string;
    autonomyScore: number;
    beneficenceScore: number;
    nonMaleficenceScore: number;
    justiceScore: number;
    officialVerdictEn: string;
    officialVerdictAr: string;
  }> = {
    genome: {
      titleEn: 'Human Genome & Genetic Discrimination',
      titleAr: 'الجينوم البشري والتمييز على أسس جينية',
      scenarioEn: 'A corporation requests genomic profiles of job applicants to predict future illness and deny health insurance.',
      scenarioAr: 'مؤسسة توظيف تشترط فحص الخريطة الجينية للمتقدمين واستبعاد حاملي الجينات المهيئة للأمراض المستقبلية.',
      philosophers: isArabic ? 'أحمد زويل، هانز يوناس، مصطفى محمود' : 'Ahmed Zewail, Hans Jonas, M. Mahmoud',
      autonomyScore: 35,
      beneficenceScore: 40,
      nonMaleficenceScore: 20,
      justiceScore: 15,
      officialVerdictEn: 'Strictly unethical. Ahmed Zewail affirmed the genome must serve therapeutic guidance, not deterministic discrimination or loss of privacy.',
      officialVerdictAr: 'مرفوض أخلاقياً ومعيارياً. أكد د. أحمد زويل أن الجينوم ينبغي أن يُستثمر في التشخيص العلاجي وليس في الحتمية الجينية أو التمييز الوظيفي.'
    },
    cloning: {
      titleEn: 'Reproductive Human Cloning',
      titleAr: 'استنساخ الكائنات الحية واستنساخ الإنسان',
      scenarioEn: 'Attempting full reproductive cloning of a deceased individual using somatic cell nuclear transfer.',
      scenarioAr: 'إجراء تجارب الاستنساخ البشري الكامل لإنتاج أفراد متطابقين جينياً مع أفراد متوفين.',
      philosophers: isArabic ? 'مصطفى محمود، الفاتيكان، لجان البيوتيقا الدولية' : 'Mostafa Mahmoud, Global Bioethics Committees',
      autonomyScore: 10,
      beneficenceScore: 25,
      nonMaleficenceScore: 10,
      justiceScore: 20,
      officialVerdictEn: 'Condemned by Egyptian MoE syllabus & scholars. Destroys biological identity, intergenerational lineage, and human dignity.',
      officialVerdictAr: 'إدانة تامة وتحريم معتمد. يرى د. مصطفى محمود أن الاستنساخ ثورة بيولوجية عبثية تقضي على التنوع وفكرة الأسرة والأمومة والنسب.'
    },
    consent: {
      titleEn: 'Informed Consent vs Medical Paternalism',
      titleAr: 'الموافقة المستنيرة في مواجهة الوصاية الطبية',
      scenarioEn: 'A surgeon proceeds with an experimental invasive procedure without explaining high-probability side effects to protect patient morale.',
      scenarioAr: 'طبيب يجري تدخلاً جراحياً تجريبياً مع إخفاء المخاطر عن المريض بدعوى حمايته نفسياً.',
      philosophers: isArabic ? 'توم بيتشامب، جيمس تشيلدرس، بروتوكولات البيوتيقا' : 'Tom Beauchamp & James Childress (Principles of Biomedical Ethics)',
      autonomyScore: 15,
      beneficenceScore: 50,
      nonMaleficenceScore: 30,
      justiceScore: 25,
      officialVerdictEn: 'Violates the 5 MoE core elements of Informed Consent: Disclosure, Understanding, Competence, Voluntariness, and Explicit Consent.',
      officialVerdictAr: 'انتهاك صريح لعناصر الموافقة المستنيرة الخمسة المقررة: الإفصاح، الفهم، الأهلية، الطواعية، والموافقة الصريحة.'
    },
    future_gen: {
      titleEn: 'Responsibility for Future Generations (Hans Jonas)',
      titleAr: 'أخلاق المسؤولية وحقوق أجيال المستقبل (هانز يوناس)',
      scenarioEn: 'Industrial dumping of toxic hazardous waste that will remain radioactive for 500 years to maximize current fiscal quarterly profits.',
      scenarioAr: 'دفن نفايات صناعية سامة تهدد الموارد الطبيعية والمائية لمئات السنين القادمة لتحقيق أرباح رأسمالية سريعة.',
      philosophers: isArabic ? 'هانز يوناس، دانيال كالاهان، ألدو ليوبولد' : 'Hans Jonas, Daniel Callahan, Aldo Leopold',
      autonomyScore: 50,
      beneficenceScore: 20,
      nonMaleficenceScore: 5,
      justiceScore: 10,
      officialVerdictEn: 'Violates Jonas Responsibility Imperative: We must not jeopardize the conditions for authentic human existence in the future.',
      officialVerdictAr: 'انتهاك صارخ لمبدأ المسؤولية عند هانز يوناس: الالتزام الأخلاقي بالوجود البشري المستقبلي والكرامة البيئية للأجيال القادمة.'
    }
  };

  const currentDilemma = dilemmasData[selectedDilemma];

  return (
    <div className={`w-full rounded-2xl overflow-hidden border shadow-xl flex flex-col transition-all duration-300 ${
      isFullscreen ? 'h-screen fixed inset-0 z-50 rounded-none overflow-y-auto' : 'min-h-[720px]'
    } ${
      isLight 
        ? 'bg-slate-50 border-slate-200 text-slate-900' 
        : isContrast
        ? 'bg-black border-yellow-400 text-yellow-400'
        : 'bg-slate-950 border-purple-900/50 text-slate-100'
    }`}>
      
      {/* Studio Top Navigation Bar */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-4 backdrop-blur-md ${
        isLight ? 'bg-white/90 border-slate-200' : 'bg-slate-900/90 border-purple-900/40'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
                {isArabic ? 'مختبر المنطق التطبيقي والأخلاقيات الرقمية' : 'Applied Logic & Bioethics Studio'}
              </h2>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                MoE G12 Official
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isArabic 
                ? 'جداول الصدق، قياس أرسطو، طرق مل الاستقرائية، المنطق المرن والذكاء الاصطناعي، ومصفوفة البيوتيقا'
                : 'Truth Tables, Syllogism Validator, Mill Inductive Methods, Fuzzy AI & Bioethics Matrix'}
            </p>
          </div>
        </div>

        {/* 5 Mode Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/60 border border-slate-800/80 overflow-x-auto max-w-full">
          {[
            { id: 'truth_table', icon: Binary, labelAr: 'جداول الصدق الرمزية', labelEn: 'Truth Tables' },
            { id: 'syllogism', icon: Scale, labelAr: 'القياس الأرسطي الصوري', labelEn: 'Syllogism' },
            { id: 'mills_methods', icon: Layers, labelAr: 'طرق مل الاستقرائية', labelEn: "Mill's Methods" },
            { id: 'fuzzy_ai', icon: Cpu, labelAr: 'المنطق المرن والـ AI', labelEn: 'Fuzzy AI' },
            { id: 'bioethics_matrix', icon: Shield, labelAr: 'مصفوفة البيوتيقا والبيئة', labelEn: 'Bioethics Matrix' }
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as LogicStudioMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isArabic ? mode.labelAr : mode.labelEn}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-purple-400" />}
            <span className="hidden sm:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">

        {/* ========================================================= */}
        {/* TAB 1: Symbolic Logic & Truth Table Generator             */}
        {/* ========================================================= */}
        {activeMode === 'truth_table' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Operator Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {(Object.keys(operatorsData) as LogicOperator[]).map((opKey) => {
                const op = operatorsData[opKey];
                const isSel = selectedOp === opKey;
                return (
                  <button
                    key={opKey}
                    onClick={() => setSelectedOp(opKey)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSel
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-md ring-1 ring-purple-500'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-base font-black text-white font-mono">{op.symbol}</div>
                    <div className="text-[11px] font-medium mt-1 truncate">
                      {isArabic ? op.titleAr.split('(')[0] : op.titleEn.split('(')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Operator Rule Banner */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 text-purple-200 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-purple-300">
                  {isArabic ? currentOp.titleAr : currentOp.titleEn}
                </h4>
                <p className="text-xs text-purple-200/90 mt-1 leading-relaxed">
                  {isArabic ? currentOp.ruleAr : currentOp.ruleEn}
                </p>
              </div>
            </div>

            {/* Interactive Live Row Tester */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'اختبر قيم المتغيرات يدوياً:' : 'Interactive Variable Toggles:'}
                </span>

                <button
                  onClick={() => setPVal(!pVal)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    pVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  <span>p ({isArabic ? 'ق' : 'p'}) = {pVal ? (isArabic ? 'صادقة (T)' : 'True') : (isArabic ? 'كاذبة (F)' : 'False')}</span>
                </button>

                {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                  <button
                    onClick={() => setQVal(!qVal)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      qVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}
                  >
                    <span>q ({isArabic ? 'ل' : 'q'}) = {qVal ? (isArabic ? 'صادقة (T)' : 'True') : (isArabic ? 'كاذبة (F)' : 'False')}</span>
                  </button>
                )}
              </div>

              {/* Evaluated Outcome */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'النتيجة الصورية:' : 'Evaluated Truth Value:'}
                </span>
                <span className={`px-4 py-1.5 rounded-xl font-mono text-sm font-black flex items-center gap-1.5 ${
                  evalCurrentRow()
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                    : 'bg-rose-500/20 border border-rose-500/40 text-rose-400'
                }`}>
                  {evalCurrentRow() ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>{evalCurrentRow() ? (isArabic ? 'صادق (True)' : 'TRUE') : (isArabic ? 'كاذب (False)' : 'FALSE')}</span>
                </span>
              </div>
            </div>

            {/* Complete Standard Truth Table */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60 shadow-lg">
              <div className="p-3 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isArabic ? 'جدول الصدق الكامل وفقاً لكتاب الوزارة' : 'Complete Official Ministerial Truth Table'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                  {currentOp.tautologyClass === 'tautology'
                    ? (isArabic ? 'تحصيل حاصل (صادقة دائماً)' : 'Tautology (Always True)')
                    : currentOp.tautologyClass === 'contradiction'
                    ? (isArabic ? 'متناقضة (كاذبة دائماً)' : 'Contradiction')
                    : (isArabic ? 'قضية عرضية (تحتمل الصدق والكذب)' : 'Contingent (Mixed)')}
                </span>
              </div>

              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
                    <th className="p-3 font-mono text-center w-16">#</th>
                    <th className="p-3 font-mono text-center">p ({isArabic ? 'ق' : 'p'})</th>
                    {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                      <th className="p-3 font-mono text-center">q ({isArabic ? 'ل' : 'q'})</th>
                    )}
                    <th className="p-3 font-mono text-center font-bold text-purple-400">
                      {currentOp.symbol}
                    </th>
                    <th className="p-3 text-slate-300">
                      {isArabic ? 'التفسير والتعليل الصوري' : 'Logical Explanation'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {currentOp.table.map((row, idx) => {
                    const isMatchesCurrent = (row.p === pVal) && (selectedOp === 'negation' || selectedOp === 'tautology_demo' || row.q === qVal);
                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isMatchesCurrent
                            ? 'bg-purple-900/30 font-bold text-white'
                            : 'hover:bg-slate-800/30 text-slate-300'
                        }`}
                      >
                        <td className="p-3 text-center text-slate-500">{idx + 1}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded ${row.p ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'}`}>
                            {row.p ? (isArabic ? 'ص' : 'T') : (isArabic ? 'ك' : 'F')}
                          </span>
                        </td>
                        {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                          <td className="p-3 text-center">
                            <span className={`px-2 py-0.5 rounded ${row.q ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'}`}>
                              {row.q ? (isArabic ? 'ص' : 'T') : (isArabic ? 'ك' : 'F')}
                            </span>
                          </td>
                        )}
                        <td className="p-3 text-center font-black">
                          <span className={`px-2.5 py-1 rounded-md ${
                            row.result
                              ? 'text-emerald-300 bg-emerald-900/50 border border-emerald-500/30'
                              : 'text-rose-300 bg-rose-900/50 border border-rose-500/30'
                          }`}>
                            {row.result ? (isArabic ? 'صادقة (T)' : 'T') : (isArabic ? 'كاذبة (F)' : 'F')}
                          </span>
                        </td>
                        <td className="p-3 text-slate-300 font-sans text-xs">
                          {isArabic ? row.stepTextAr : row.stepTextEn}
                          {isMatchesCurrent && (
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                              {isArabic ? '← حالتك الحالية' : '← Active State'}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: Aristotelian Syllogism Validator                   */}
        {/* ========================================================= */}
        {activeMode === 'syllogism' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header / Figure 1 Explanation */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-sm text-purple-300 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-400" />
                  {isArabic ? 'مُختبر القياس الأرسطي (الشكل الأول المقرر بالثانوية العامة)' : 'Aristotelian Syllogism (Figure 1 Validator)'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isArabic 
                    ? 'هيئة الشكل الأول: الحد الأوسط (و) موضوع في الكبرى، ومحمول في الصغرى (و - ك / ص - و ⊢ ص - ك)'
                    : 'Figure 1 Schema: Middle term (M) is Subject in Major Premise, and Predicate in Minor Premise (M-P, S-M ⊢ S-P)'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-purple-950 border border-purple-700 text-purple-300 font-mono">
                  {isArabic ? 'شرطا الشكل الأول: إيجاب الصغرى وكلية الكبرى' : 'Fig 1: Affirmative Minor & Universal Major'}
                </span>
              </div>
            </div>

            {/* Syllogism Terms Setup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأوسط (و - Middle Term):' : 'Middle Term (M):'}
                </label>
                <input
                  type="text"
                  value={middleTerm}
                  onChange={(e) => setMiddleTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-purple-300 font-bold focus:outline-hidden focus:border-purple-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأكبر (ك - Major Term):' : 'Major Term (P):'}
                </label>
                <input
                  type="text"
                  value={majorTerm}
                  onChange={(e) => setMajorTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-indigo-300 font-bold focus:outline-hidden focus:border-indigo-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأصغر (ص - Minor Term):' : 'Minor Term (S):'}
                </label>
                <input
                  type="text"
                  value={minorTerm}
                  onChange={(e) => setMinorTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-sky-300 font-bold focus:outline-hidden focus:border-sky-500"
                />
              </div>
            </div>

            {/* Premise Formulation & Quantifiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Major Premise */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    {isArabic ? '١. المقدمة الكبرى (Major Premise):' : '1. Major Premise (M - P):'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {getCategoricalLabel(majorType)}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {(['A', 'E', 'I', 'O'] as CategoricalType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setMajorType(t)}
                      className={`py-1 rounded text-xs font-bold font-mono transition-all cursor-pointer ${
                        majorType === t
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t} {t === 'A' ? (isArabic ? 'ك.م' : 'All') : t === 'E' ? (isArabic ? 'ك.س' : 'No') : t === 'I' ? (isArabic ? 'ج.م' : 'Some') : (isArabic ? 'ج.س' : 'Some...not')}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                  {majorType === 'A' && (isArabic ? `كل ${middleTerm} ${majorTerm}` : `All ${middleTerm} are ${majorTerm}`)}
                  {majorType === 'E' && (isArabic ? `لا واحد من ${middleTerm} ${majorTerm}` : `No ${middleTerm} is ${majorTerm}`)}
                  {majorType === 'I' && (isArabic ? `بعض ${middleTerm} ${majorTerm}` : `Some ${middleTerm} are ${majorTerm}`)}
                  {majorType === 'O' && (isArabic ? `بعض ${middleTerm} ليس ${majorTerm}` : `Some ${middleTerm} are not ${majorTerm}`)}
                </div>
              </div>

              {/* Minor Premise */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    {isArabic ? '٢. المقدمة الصغرى (Minor Premise):' : '2. Minor Premise (S - M):'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {getCategoricalLabel(minorType)}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {(['A', 'E', 'I', 'O'] as CategoricalType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setMinorType(t)}
                      className={`py-1 rounded text-xs font-bold font-mono transition-all cursor-pointer ${
                        minorType === t
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t} {t === 'A' ? (isArabic ? 'ك.م' : 'All') : t === 'E' ? (isArabic ? 'ك.س' : 'No') : t === 'I' ? (isArabic ? 'ج.م' : 'Some') : (isArabic ? 'ج.س' : 'Some...not')}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                  {minorType === 'A' && (isArabic ? `كل ${minorTerm} ${middleTerm}` : `All ${minorTerm} are ${middleTerm}`)}
                  {minorType === 'E' && (isArabic ? `لا واحد من ${minorTerm} ${middleTerm}` : `No ${minorTerm} is ${middleTerm}`)}
                  {minorType === 'I' && (isArabic ? `بعض ${minorTerm} ${middleTerm}` : `Some ${minorTerm} are ${middleTerm}`)}
                  {minorType === 'O' && (isArabic ? `بعض ${minorTerm} ليس ${middleTerm}` : `Some ${minorTerm} are not ${middleTerm}`)}
                </div>
              </div>
            </div>

            {/* Deductive Verdict Box */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isSyllogismValid
                ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/30 border-rose-500/50 text-rose-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isSyllogismValid ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <h4 className="font-black text-sm">
                    {isSyllogismValid
                      ? (isArabic ? 'قياس صحيح ومنتج صورياً (Valid Syllogism)' : 'Formally Valid Syllogism')
                      : (isArabic ? 'قياس فاسد وعقيم لا ينتج (Invalid Syllogism)' : 'Formally Invalid Syllogism')}
                  </h4>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700">
                  Mood: {majorType}{minorType}{conclusionType}
                </span>
              </div>

              {/* Deductive Conclusion Display */}
              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  {isArabic ? 'النتيجة اللازمة (ص - ك): ' : 'Deductive Conclusion (S - P): '}
                </span>
                {isSyllogismValid ? (
                  <span className="text-emerald-400 font-mono">
                    {conclusionType === 'A' && (isArabic ? `كل ${minorTerm} ${majorTerm}` : `All ${minorTerm} are ${majorTerm}`)}
                    {conclusionType === 'E' && (isArabic ? `لا واحد من ${minorTerm} ${majorTerm}` : `No ${minorTerm} is ${majorTerm}`)}
                    {conclusionType === 'I' && (isArabic ? `بعض ${minorTerm} ${majorTerm}` : `Some ${minorTerm} are ${majorTerm}`)}
                    {conclusionType === 'O' && (isArabic ? `بعض ${minorTerm} ليس ${majorTerm}` : `Some ${minorTerm} are not ${majorTerm}`)}
                  </span>
                ) : (
                  <span className="text-rose-400 italic">
                    {isArabic ? 'لا تلزم نتيجة منطقية لخرق قواعد الإنتاج' : 'No valid conclusion follows due to rule violation'}
                  </span>
                )}
              </div>

              {/* Rules Breakdown */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                  isMajorUniversal ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}>
                  {isMajorUniversal ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>{isArabic ? 'كلية الكبرى (لاستغراق الحد الأوسط مرة على الأقل)' : 'Universal Major (Distributes Middle Term)'}</span>
                </div>

                <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                  isMinorAffirmative ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}>
                  {isMinorAffirmative ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>{isArabic ? 'إيجاب الصغرى (حتى لا يستغرق حد في النتيجة دون مقدمته)' : 'Affirmative Minor (Prevents Illicit Major Process)'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: Mill's 5 Inductive Proof Methods Lab               */}
        {/* ========================================================= */}
        {activeMode === 'mills_methods' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Mill's 5 Methods Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {[
                { id: 'agreement', titleAr: '١. طريقة الاتفاق', titleEn: '1. Agreement' },
                { id: 'difference', titleAr: '٢. طريقة الاختلاف', titleEn: '2. Difference' },
                { id: 'joint', titleAr: '٣. الجمع بينهما', titleEn: '3. Joint Method' },
                { id: 'concomitant', titleAr: '٤. التلازم في التغير', titleEn: '4. Concomitant Var.' },
                { id: 'residues', titleAr: '٥. طريقة البواقي', titleEn: '5. Residues' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMill(m.id as MillMethod)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedMill === m.id
                      ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold">{isArabic ? m.titleAr : m.titleEn}</span>
                </button>
              ))}
            </div>

            {/* Method 1: Agreement Simulator */}
            {selectedMill === 'agreement' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة الاتفاق (The Method of Agreement)' : 'The Method of Agreement'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: إذا اشتركت حالتان أو أكثر من حالات الظاهرة في ظرف واحد، فإن هذا الظرف المشترك يكون علة الظاهرة أو معلولها (التلازم في الحضور).'
                      : 'Rule: If two or more instances of the phenomenon under investigation have only one circumstance in common, that circumstance is the cause (or effect) of the given phenomenon.'}
                  </p>
                </div>

                <div className="text-xs font-bold text-slate-300 mb-2">
                  {isArabic ? 'حالة دراسية تجريبية: حادثة التسمم الغذائي في المطعم:' : 'Empirical Case: Restaurant Food Poisoning Diagnostic Table:'}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                        <th className="p-2.5">{isArabic ? 'الشخص' : 'Person'}</th>
                        <th className="p-2.5">{isArabic ? 'وجبة اللحم' : 'Meat'}</th>
                        <th className="p-2.5 text-purple-400 font-bold">{isArabic ? 'عصير الفراولة' : 'Strawberry Juice'}</th>
                        <th className="p-2.5">{isArabic ? 'السلطة' : 'Salad'}</th>
                        <th className="p-2.5">{isArabic ? 'الحلوى' : 'Dessert'}</th>
                        <th className="p-2.5 text-rose-400 font-bold">{isArabic ? 'النتيجة (التسمم)' : 'Poisoning'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono">
                      {[
                        { name: isArabic ? 'أحمد' : 'Ahmed', meat: true, juice: true, salad: false, dessert: true, poisoned: true },
                        { name: isArabic ? 'سارة' : 'Sara', meat: false, juice: true, salad: true, dessert: false, poisoned: true },
                        { name: isArabic ? 'كريم' : 'Karim', meat: true, juice: true, salad: true, dessert: false, poisoned: true },
                        { name: isArabic ? 'ليلى' : 'Laila', meat: false, juice: true, salad: false, dessert: true, poisoned: true }
                      ].map((r, i) => (
                        <tr key={i} className="hover:bg-slate-800/30">
                          <td className="p-2.5 font-bold font-sans text-slate-200">{r.name}</td>
                          <td className="p-2.5">{r.meat ? '✓' : '—'}</td>
                          <td className="p-2.5 bg-purple-950/40 text-purple-300 font-black">✓ ({isArabic ? 'مشترك' : 'Common'})</td>
                          <td className="p-2.5">{r.salad ? '✓' : '—'}</td>
                          <td className="p-2.5">{r.dessert ? '✓' : '—'}</td>
                          <td className="p-2.5 text-rose-400 font-black">✓ {isArabic ? 'تسمم' : 'Ill'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800 text-xs text-purple-200">
                  <strong>{isArabic ? 'الاستنتاج الاستقرائي: ' : 'Inductive Deduction: '}</strong>
                  {isArabic 
                    ? 'الظرف الوحيد المشترك بين جميع المصابين هو "عصير الفراولة"، إذن هو العلة المرجحة للتسمم.'
                    : 'The sole circumstance shared across all afflicted diners is Strawberry Juice; hence it is induced to be the cause.'}
                </div>
              </div>
            )}

            {/* Method 4: Concomitant Variations */}
            {selectedMill === 'concomitant' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة التلازم في التغير (Concomitant Variations)' : 'Method of Concomitant Variations'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: كلما تغيرت الظاهرة "أ" بأي شكل وتغيرت معها الظاهرة "ب" بنفس النسبة طردياً أو عكسياً، فإن "أ" تكون علة لـ "ب" أو معلولة لها.'
                      : 'Rule: Whatever phenomenon varies in any manner whenever another phenomenon varies in some particular manner, is either a cause or an effect of that phenomenon.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-300">
                      {isArabic ? 'درجة الحرارة المستحثة معملياً (T):' : 'Applied Temperature (T):'} {tempDegree}°C
                    </span>
                    <span className="font-mono text-purple-400 font-black">
                      {isArabic ? 'حجم الغاز المتمدد المحسوب (V):' : 'Observed Gas Volume (V):'} {gasVolume} cm³
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={tempDegree}
                    onChange={(e) => setTempDegree(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                {/* Simulated Thermal Volume Bar */}
                <div className="h-6 rounded-lg bg-slate-950 border border-slate-800 overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 transition-all duration-300"
                    style={{ width: `${(tempDegree / 100) * 100}%` }}
                  />
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800 text-xs text-purple-200">
                  {isArabic
                    ? 'التطبيق الواقعي: زيادة ميزانية الإعلانات تؤدي طردياً لزيادة مبيعات السلعة، أو تمدد الغازات بالحرارة وفق قانون شارل.'
                    : 'Real-World Example: Advertising expenditure proportionally drives sales volume; gas expansion under Charles Law.'}
                </div>
              </div>
            )}

            {/* Method 5: Residues */}
            {selectedMill === 'residues' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة البواقي (The Method of Residues)' : 'The Method of Residues'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: إذا علم الباحث أن عللاً معينة تؤدي إلى معلولات معينة، وعزل منها العلل والمعلولات المعروفة، فإن العلة الباقية تكون سبب المعلول الباقي (مثل اكتشاف كوكب نبتون).'
                      : 'Rule: Subduct from any phenomenon such part as is known by previous inductions to be the effect of certain antecedents, and the residue is the effect of the remaining antecedents.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { id: 0, cause: isArabic ? 'علة (أ): جاذبية المشتري' : 'Cause A: Jupiter Gravity', effect: isArabic ? 'معلول (١): اضطراب مدار زحل' : 'Effect 1: Saturn Perturbation' },
                    { id: 1, cause: isArabic ? 'علة (ب): جاذبية الشمس' : 'Cause B: Solar Gravity', effect: isArabic ? 'معلول (٢): مدار أورانوس الأساسي' : 'Effect 2: Uranus Primary Orbit' },
                    { id: 2, cause: isArabic ? 'علة (ج): كوكب نبتون المجهول' : 'Cause C: Unknown Planet (Neptune)', effect: isArabic ? 'معلول (٣): الانحراف المتبقي في مدار أورانوس' : 'Effect 3: Residual Uranus Deviation' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-xl border transition-all ${
                        item.id === 2
                          ? 'bg-purple-950/60 border-purple-500 shadow-md'
                          : 'bg-slate-950 border-slate-800 opacity-75'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-300">{item.cause}</div>
                      <div className="text-[11px] text-purple-400 mt-1 font-mono">⇛ {item.effect}</div>
                      {item.id === 2 && (
                        <div className="mt-2 text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold inline-block">
                          {isArabic ? 'العلة والمعلول الباقيان' : 'Residue Deductions'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methods 2 & 3 summary if selected */}
            {(selectedMill === 'difference' || selectedMill === 'joint') && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h4 className="font-black text-sm text-purple-300">
                  {selectedMill === 'difference'
                    ? (isArabic ? 'طريقة الاختلاف (التلازم في الغياب)' : 'The Method of Difference')
                    : (isArabic ? 'طريقة الجمع بين الاتفاق والاختلاف' : 'Joint Method of Agreement & Difference')}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedMill === 'difference'
                    ? (isArabic ? 'إذا اتفقت حالتان في كل الظروف واختلفتا في ظرف واحد، وغابت الظاهرة عند غياب هذا الظرف، فإن هذا الظرف هو علة الظاهرة أو جزء من علتها.' : 'If an instance in which the phenomenon occurs and an instance in which it does not have every circumstance in common save one, that one circumstance is the cause.')
                    : (isArabic ? 'جمع الإثبات والنفي معاً لرفع درجة التأكيد؛ وجود العلة يستلزم وجود المعلول، وغياب العلة يستلزم غياب المعلول قطعاً.' : 'A double method combining presence and absence for definitive empirical proof.')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: Fuzzy Logic vs Binary AI Visualizer                */}
        {/* ========================================================= */}
        {activeMode === 'fuzzy_ai' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-sm text-purple-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  {isArabic ? 'المنطق المرن (Fuzzy Logic) في الذكاء الاصطناعي (لطفي زادة)' : 'Fuzzy Logic & AI Systems (Lotfi Zadeh)'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isArabic 
                    ? 'المنطق الأرسطي ثنائي القيم (صحيح 1 / كاذب 0) يعجز عن تمثيل درجات الواقع المعقدة مثل: دافئ، طويل، بارد إلى حد ما'
                    : 'Classical logic relies on crisp binary values (1 or 0), failing to model graded real-world terms like "warm" or "fast".'}
                </p>
              </div>
            </div>

            {/* Continuous Temperature Slider */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300">
                  {isArabic ? 'درجة الحرارة في بيئة التكييف الذكي:' : 'Smart AC Ambient Temperature Input:'}
                </span>
                <span className="text-sm font-black font-mono text-purple-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  {ambientTemp} °C
                </span>
              </div>

              <input
                type="range"
                min={10}
                max={35}
                value={ambientTemp}
                onChange={(e) => setAmbientTemp(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />

              {/* Comparison Grid: Binary vs Fuzzy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Classical Binary Logic */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">
                      {isArabic ? 'المنطق الأرسطي التقليدي (ثنائي القيم):' : 'Classical Binary Aristotelian Logic:'}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {isArabic ? 'قاطع 0 أو 1' : 'Crisp 0 or 1'}
                    </span>
                  </div>
                  <div className="text-lg font-black font-mono text-rose-400">
                    {binaryVerdict}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {isArabic
                      ? 'لا يعترف بدرجات وسطى؛ إما حار تماماً وإما بارد تماماً وفق مبدأ الثالث المرفوع.'
                      : 'Strict boundary cutoff. Excludes mid-degrees and nuances.'}
                  </p>
                </div>

                {/* Lotfi Zadeh's Fuzzy Logic */}
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300">
                      {isArabic ? 'منطق لطفي زادة المرن (متعدد القيم):' : "Lotfi Zadeh's Continuous Fuzzy Logic:"}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                      μ ∈ [0.0 , 1.0]
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-sans">{isArabic ? 'بارد (Cold):' : 'Cold:'}</span>
                      <span className="font-black text-blue-300">{(fuzzy.cold * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: `${fuzzy.cold * 100}%` }} />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-sans">{isArabic ? 'معتدل (Comfortable):' : 'Comfortable:'}</span>
                      <span className="font-black text-emerald-300">{(fuzzy.comfortable * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full" style={{ width: `${fuzzy.comfortable * 100}%` }} />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-rose-400 font-sans">{isArabic ? 'حار (Hot):' : 'Hot:'}</span>
                      <span className="font-black text-rose-300">{(fuzzy.hot * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full" style={{ width: `${fuzzy.hot * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: Bioethics Dilemma Decision Matrix                  */}
        {/* ========================================================= */}
        {activeMode === 'bioethics_matrix' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Dilemma Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {(Object.keys(dilemmasData) as BioDilemmaId[]).map((dKey) => {
                const d = dilemmasData[dKey];
                const isSel = selectedDilemma === dKey;
                return (
                  <button
                    key={dKey}
                    onClick={() => setSelectedDilemma(dKey)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSel
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{isArabic ? d.titleAr : d.titleEn}</div>
                    <div className="text-[10px] mt-1 opacity-80 truncate">{d.philosophers}</div>
                  </button>
                );
              })}
            </div>

            {/* Dilemma Details Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                  {isArabic ? 'القضية الأخلاقية البيوطبية المعاصرة:' : 'Contemporary Bioethical Dilemma:'}
                </span>
                <h4 className="text-base font-black text-white mt-1">
                  {isArabic ? currentDilemma.titleAr : currentDilemma.titleEn}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {isArabic ? currentDilemma.scenarioAr : currentDilemma.scenarioEn}
                </p>
              </div>

              {/* 4 Core Ethical Principles Metrics */}
              <div>
                <div className="text-xs font-bold text-slate-300 mb-2">
                  {isArabic ? 'تقييم القضية عبر المعايير الأخلاقية الأربعة (بيتشامب وتشيلدرس):' : 'Evaluation Across 4 Core Biomedical Principles:'}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'الاستقلالية الفردية' : 'Autonomy'}</span>
                    <span className="text-base font-mono font-black text-sky-400">{currentDilemma.autonomyScore}%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'فعل الخير والمنفعة' : 'Beneficence'}</span>
                    <span className="text-base font-mono font-black text-emerald-400">{currentDilemma.beneficenceScore}%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'عدم إلحاق الأذى' : 'Non-Maleficence'}</span>
                    <span className="text-base font-mono font-black text-amber-400">{currentDilemma.nonMaleficenceScore}%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{isArabic ? 'العدالة والمساواة' : 'Justice & Equity'}</span>
                    <span className="text-base font-mono font-black text-purple-400">{currentDilemma.justiceScore}%</span>
                  </div>
                </div>
              </div>

              {/* Official Ministerial Ethical Verdict */}
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/80 text-purple-200">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>{isArabic ? 'الحكم المعياري المعتمد في المنهج الوزاري المصري:' : 'Official MoE Curriculum Ethical Consensus:'}</span>
                </div>
                <p className="text-xs leading-relaxed">
                  {isArabic ? currentDilemma.officialVerdictAr : currentDilemma.officialVerdictEn}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
