import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Binary,
  Layers,
  AlertTriangle,
  RotateCcw,
  Check,
  X,
} from 'lucide-react';
import russellPhoto from '../../../assets/philosophy/russell_principia_mathematica_1910.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface RussellHotspot {
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

export const RUSSELL_HOTSPOTS: RussellHotspot[] = [
  {
    id: 'proof_that_one_plus_one_equals_two',
    xPct: 48.0,
    yPct: 55.0,
    titleAr: 'برهان أن 1+1=2 في القضية *54.43 (Proposition *54.43)',
    titleEn: 'Proposition *54.43: Formal Proof That 1 + 1 = 2',
    categoryAr: 'المذهب المنطقي واختزال الحساب',
    categoryEn: 'Logicism & Foundational Arithmetic',
    descAr:
      'الصفحة الأشهر في تاريخ المنطق الرياضي (ص 379 من الجزء الأول لكتاب "أصول الرياضيات" Principia Mathematica، كامبريدج 1910)؛ استغرق بيرتراند رسل وألفريد نورث وايتهيد ما يقارب 380 صفحة من الترميز الصوري المحكم ليبرهنا رسمياً أن واحداً زائد واحد يساوي اثنين، مذيلين البرهان بعبارتهما التاريخية الطريفة: "The above proposition is occasionally useful".',
    descEn:
      'The most celebrated page in the history of mathematical logic (p. 379, Vol. 1 of Russell & Whitehead’s Principia Mathematica, Cambridge 1910). Requiring nearly 380 pages of rigorous symbolic deduction to formally prove that 1 + 1 = 2, culminating in their famous understated remark: "The above proposition is occasionally useful."',
    scientificInsightAr:
      'أثبت هذا البرهان إمكانية بناء مفهوم الأعداد الطبيعية والعمليات الحسابية بالكامل من صميم المنطق الصوري ونظرية الفئات دون أي افتراضات حسية أو بديهيات غير مبرهنة.',
    scientificInsightEn:
      'Demonstrated the logicist thesis that natural numbers and arithmetic operations can be constructed purely from formal logic and set theory without empirical or synthetic assumptions.',
  },
  {
    id: 'russells_paradox_type_theory',
    xPct: 22.0,
    yPct: 38.0,
    titleAr: 'مفارقة رسل ونظرية الأنماط (Russell’s Paradox & Type Theory)',
    titleEn: 'Russell’s Paradox of Self-Referential Sets & Type Theory',
    categoryAr: 'أسس الرياضيات ونظرية المجموعات',
    categoryEn: 'Metamathematics & Paradox Resolution',
    descAr:
      'المفارقة المدمرة التي اكتشفها رسل عام 1901 ونسفت نظرية المجموعات الساذجة لغوتلوب فريجه: "فئة جميع الفئات التي لا تحتوي على نفسها.. هل تحتوي على نفسها أم لا؟" (R ∈ R ⟺ R ∉ R). حلها رسل في هذا المجلد عبر "نظرية الأنماط" (Theory of Types) الهرمية الصارمة، مانعاً العبارات ذاتية الإسناد.',
    descEn:
      'The devastating antinomy discovered by Russell in 1901 shattering Frege’s naive set theory: "Does the set of all sets that do not contain themselves contain itself?" (R ∈ R ⟺ R ∉ R). Russell resolved it in the Principia via his hierarchical "Theory of Types," forbidding vicious-circle self-reference.',
    scientificInsightAr:
      'تمثل مفارقة رسل الأساس الفكري المباشر لجميع مبرهنات عدم الاكتمال الشهيرة لكورت غودل (1931) وتوقف آلة تورنغ (1936).',
    scientificInsightEn:
      'Russell’s Paradox directly inspired Kurt Gödel’s Incompleteness Theorems (1931) and Alan Turing’s Halting Problem (1936) in theoretical computer science.',
  },
  {
    id: 'symbolic_propositional_calculus',
    xPct: 75.0,
    yPct: 35.0,
    titleAr: 'حساب القضايا والترميز الصوري المحكم (Peano-Russell Calculus)',
    titleEn: 'Symbolic Propositional Calculus & Formal Syntax',
    categoryAr: 'اللغات الصورية والترميز الرمزي',
    categoryEn: 'Formal Languages & Symbolic Logic',
    descAr:
      'النظام الرمزي المتطور المقتبس من جوزيبي بيانو مع تطوير رسل: استخدام الرموز الدقيقة للزوم (⊃)، النفي (~)، الانفصال (∨)، الوصل (·)، والتكافؤ (≡)، محولين التفكير الفلسفي الإنساني إلى خوارزميات حسابية رمزية صارمة تحكمها قواعد الاشتقاق الآلي.',
    descEn:
      'The sophisticated symbolic notation inherited from Giuseppe Peano and perfected by Russell: formal logical symbols for implication (⊃), negation (~), disjunction (∨), conjunction (·), and equivalence (≡), transforming human reasoning into rigorous formal deduction.',
    scientificInsightAr:
      'شكل هذا الترميز الصوري اللبنة الأساسية التي انطلقت منها علوم الحاسوب، ولغات البرمجة الحديثة، والبوابات المنطقية للدارات المتكاملة.',
    scientificInsightEn:
      'This formal propositional syntax directly gave birth to modern programming languages, compiler theory, and digital logic gate architectures.',
  },
  {
    id: 'cambridge_university_press_1910',
    xPct: 82.0,
    yPct: 78.0,
    titleAr: 'طبعة كامبريدج 1910 وقلم الحبر السائل (Cambridge Archival Folio)',
    titleEn: 'Cambridge University Press First Edition & Archive Card',
    categoryAr: 'تاريخ النشر والوثائق الأرشيفية',
    categoryEn: 'Publishing History & Archival Relics',
    descAr:
      'المجلد التذكاري الصادر عن مطبعة جامعة كامبريدج عام 1910، مع بطاقة فهرس المكتبة الأرشيفية وقلم الحبر السائل الكلاسيكي. كان العمل معقداً ومكلفاً للغاية لدرجة أن مطبعة كامبريدج رفضت تحمل تكلفة طباعته كاملة، واضطر رسل ووايتهيد لدفع 50 جنيهاً إسترلينياً من مالهما الخاص لإصداره.',
    descEn:
      'The monumental folio published by Cambridge University Press in 1910, accompanied by a library catalog card and period fountain pen. The typesetting of symbolic logic was so complex that the press suffered financial losses, requiring Russell and Whitehead to contribute £50 each.',
    scientificInsightAr:
      'يعد "أصول الرياضيات" واحداً من أهم الأعمال الفكرية وأكثرها تأثيراً في القرن العشرين، وقد اختاره معهد الدراسات المتقدمة في برنستون كأعظم نتاج فلسفي-رياضي.',
    scientificInsightEn:
      'Principia Mathematica stands as one of the 20th century’s crowning intellectual achievements, laying the groundwork for analytic philosophy and computer science.',
  },
  {
    id: 'logicism_reduction_of_mathematics',
    xPct: 32.0,
    yPct: 80.0,
    titleAr: 'المذهب المنطقي واختزال الرياضيات (The Logicist Thesis)',
    titleEn: 'The Logicist Thesis: Reduction of Mathematics to Pure Logic',
    categoryAr: 'فلسفة الرياضيات والمذاهب المعاصرة',
    categoryEn: 'Philosophy of Mathematics & Foundations',
    descAr:
      'الأطروحة الفلسفية الكبرى التي نذر لها رسل ووايتهيد حياتهما: إثبات أن جميع المفاهيم الرياضية (كالأعداد، والمجموعات، والدوال، والهندسة) ليست سوى مفاهيم منطقية خالصة، وأن جميع المبرهنات الرياضية يمكن اشتقاقها من بضع بديهيات منطقية كلية.',
    descEn:
      'The overarching philosophical project of Logicism: demonstrating that all pure mathematical concepts can be explicitly defined in terms of pure logic, and all mathematical theorems deduced from purely logical axioms.',
    scientificInsightAr:
      'رغم أن مبرهنة غودل أثبتت لاحقاً عدم إمكانية اكتمال أي نسق صوري غني كفاية بالحساب، إلا أن مشروع رسل وضع المعايير الحديثة للدقة الصورية والبرمجية.',
    scientificInsightEn:
      'Although Gödel later proved that no consistent formal system rich enough for arithmetic can be complete, Russell’s work established modern standards of formal rigor.',
  },
];

interface PropositionalFormula {
  id: string;
  nameAr: string;
  nameEn: string;
  symbolicExpr: string;
  latexExpr: string;
  ruleAr: string;
  ruleEn: string;
  evaluate: (p: boolean, q: boolean, r: boolean) => boolean;
  isTautology: boolean;
  classificationAr: string;
  classificationEn: string;
}

const FORMULAS_DATA: PropositionalFormula[] = [
  {
    id: 'modus_ponens',
    nameAr: 'قاعدة إثبات المقدم (Modus Ponens)',
    nameEn: 'Modus Ponens (Rule of Affirming the Antecedent)',
    symbolicExpr: '((P ⊃ Q) · P) ⊃ Q',
    latexExpr: '((P \\to Q) \\land P) \\to Q',
    ruleAr: 'إذا صدق الشرط (P ⊃ Q) وصدق المقدم (P)، لزم بالضرورة المطلقة صدق التالي (Q). تحصيل حاصل يقيني.',
    ruleEn: 'If the conditional (P ⊃ Q) holds and the antecedent P is true, then the consequent Q must follow necessarily. Always a tautology.',
    evaluate: (p, q) => {
      const cond = !p || q;
      const ant = cond && p;
      return !ant || q;
    },
    isTautology: true,
    classificationAr: 'تحصيل حاصل صادق دائماً (Tautology)',
    classificationEn: 'Universal Tautology (Logically Valid)',
  },
  {
    id: 'modus_tollens',
    nameAr: 'قاعدة نفي التالي (Modus Tollens)',
    nameEn: 'Modus Tollens (Rule of Denying the Consequent)',
    symbolicExpr: '((P ⊃ Q) · ~Q) ⊃ ~P',
    latexExpr: '((P \\to Q) \\land \\neg Q) \\to \\neg P',
    ruleAr: 'إذا صدق الشرط وكذب التالي، لزم بالضرورة كذب المقدم. قاعدة الاستدلال العكسي الصوري.',
    ruleEn: 'If P implies Q, and Q is false, then P must be false. Fundamental law of refutation.',
    evaluate: (p, q) => {
      const cond = !p || q;
      const ant = cond && !q;
      return !ant || !p;
    },
    isTautology: true,
    classificationAr: 'تحصيل حاصل صادق دائماً (Tautology)',
    classificationEn: 'Universal Tautology (Logically Valid)',
  },
  {
    id: 'de_morgan_conjunction',
    nameAr: 'قانون دي مورغان الأول (De Morgan’s Law)',
    nameEn: 'De Morgan’s First Law of Dual Negation',
    symbolicExpr: '~(P · Q) ≡ (~P ∨ ~Q)',
    latexExpr: '\\neg(P \\land Q) \\leftrightarrow (\\neg P \\lor \\neg Q)',
    ruleAr: 'نفي عطف قضيتين يكافئ تكافؤاً منطقياً تاماً انفصال نفي كل منهما.',
    ruleEn: 'The negation of a conjunction is equivalent to the disjunction of the negations.',
    evaluate: (p, q) => {
      const left = !(p && q);
      const right = !p || !q;
      return left === right;
    },
    isTautology: true,
    classificationAr: 'تكافؤ منطقي تام / تحصيل حاصل (Equivalence)',
    classificationEn: 'Logical Equivalence / Tautology',
  },
  {
    id: 'hypothetical_syllogism',
    nameAr: 'القياس الشرطي الفرضي (Hypothetical Syllogism)',
    nameEn: 'Hypothetical Syllogism (Transitivity of Implication)',
    symbolicExpr: '((P ⊃ Q) · (Q ⊃ R)) ⊃ (P ⊃ R)',
    latexExpr: '((P \\to Q) \\land (Q \\to R)) \\to (P \\to R)',
    ruleAr: 'خاصية التعدي في اللزوم المنطقي: إذا لزم Q عن P ولزم R عن Q، لزم R عن P حتماً.',
    ruleEn: 'Transitivity of implication: if P implies Q, and Q implies R, then P implies R.',
    evaluate: (p, q, r) => {
      const cond1 = !p || q;
      const cond2 = !q || r;
      const ant = cond1 && cond2;
      const cons = !p || r;
      return !ant || cons;
    },
    isTautology: true,
    classificationAr: 'تحصيل حاصل صادق دائماً (Tautology)',
    classificationEn: 'Universal Tautology (Transitivity)',
  },
  {
    id: 'contingent_formula',
    nameAr: 'قضية عرضية تحتمل الصدق والكذب (Contingent)',
    nameEn: 'Contingent Complex Formula',
    symbolicExpr: '(P ∨ Q) ⊃ (P · Q)',
    latexExpr: '(P \\lor Q) \\to (P \\land Q)',
    ruleAr: 'قضية تركيبية عرضية: تصدق إذا كان كلاهما صادقين أو كلاهما كاذبين، وتكذب إذا صدق أحدهما فقط.',
    ruleEn: 'Contingent formula: evaluates to true when both are true or both are false, but false if only one is true.',
    evaluate: (p, q) => {
      const ant = p || q;
      const cons = p && q;
      return !ant || cons;
    },
    isTautology: false,
    classificationAr: 'قضية عرضية تحتمل الصدق والكذب (Contingent)',
    classificationEn: 'Contingent Formula (Non-Tautologous)',
  },
];

export const RussellPrincipiaMathematicaStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<RussellHotspot>(RUSSELL_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Studio Mode: 'symbolic_calculus' vs 'russell_paradox'
  const [studioMode, setStudioMode] = useState<'symbolic_calculus' | 'russell_paradox'>('symbolic_calculus');

  // Symbolic Calculus State
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>('modus_ponens');
  const [pVal, setPVal] = useState<boolean>(true);
  const [qVal, setQVal] = useState<boolean>(true);
  const [rVal, setRVal] = useState<boolean>(true);

  const currentFormula = FORMULAS_DATA.find((f) => f.id === selectedFormulaId) ?? FORMULAS_DATA[0];

  const currentResult = useMemo(() => {
    return currentFormula.evaluate(pVal, qVal, rVal);
  }, [currentFormula, pVal, qVal, rVal]);

  // Russell's Paradox Barber State
  const [barberShavesSelf, setBarberShavesSelf] = useState<boolean>(false);
  const [showTypeResolution, setShowTypeResolution] = useState<boolean>(true);

  const modalData: HiResImageModalData = {
    imageUrl: russellPhoto,
    titleAr: 'الطبعة الأولى لكتاب أصول الرياضيات 1910 — بيرتراند رسل وألفريد نورث وايتهيد',
    titleEn: 'Principia Mathematica 1910 Cambridge First Edition Master Folio',
    subtitleAr: 'برهان القضية *54.43 واختزال الحساب إلى المنطق الرمزي الصوري',
    subtitleEn: 'Proposition *54.43 (1+1=2) & The Foundation of Symbolic Logic',
    descriptionAr:
      'وثيقة أرشيفية نادرة بدقة 4K من المجلد الأول لطبعة جامعة كامبريدج 1910 لكتاب "أصول الرياضيات" (Principia Mathematica) الصادر بتوقيع بيرتراند رسل وألفريد نورث وايتهيد. تظهر الصفحة المفتوحة على القضية الشهيرة *54.43 حيث يكتمل البرهان المنطقي التأسيسي على أن 1+1=2، مع قلم حبر سائل كلاسيكي من عام 1910، وبطاقة فهرسة مكتبية عتيقة من أرشيف مكتبة جامعة كامبريدج.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of the authentic 1910 first edition of Bertrand Russell and Alfred North Whitehead’s Principia Mathematica, published by Cambridge University Press. The folio displays the immortal Proposition *54.43 formally proving 1+1=2, set in exquisite mathematical typesetting alongside a vintage 1910 fountain pen and Cambridge University archival catalog card.',
    locationAr: 'مكتبة جامعة كامبريدج / أرشيف بيرتراند رسل في جامعة ماكماستر',
    locationEn: 'Cambridge University Library / The Bertrand Russell Archives, McMaster University',
    dateOrEraAr: '1910 م (عصر المنطق الرياضي الحديث / إنجلترا)',
    dateOrEraEn: '1910 CE (The Golden Age of Mathematical Logic / Cambridge, England)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950/40 border-sky-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-sky-600/30 text-white">
            <Binary className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
                1910 CE • Cambridge
              </span>
              <span className="text-xs font-mono text-sky-400 font-bold">
                {isArabic ? 'أصول الرياضيات • القضية *54.43' : 'Principia Mathematica • Prop *54.43'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-200">
              {isArabic
                ? 'استوديو بيرتراند رسل: المنطق الرياضي الرمزي ومفارقة الفئات'
                : 'Bertrand Russell Studio: Symbolic Logic & Set Paradox'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg shadow-sky-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة كامبريدج 1910 بدقة 4K' : 'Inspect 4K Russell 1910 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-sky-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={russellPhoto}
              alt="Russell & Whitehead Principia Mathematica 1910 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {RUSSELL_HOTSPOTS.map((hotspot) => {
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
                      ? 'scale-125 ring-4 ring-sky-400 bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                      : 'bg-slate-900/80 hover:bg-sky-600 text-sky-300 hover:text-white border border-sky-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-sky-200 border border-sky-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-sky-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                {isArabic ? 'جامعة كامبريدج • 1910 م' : 'Cambridge University Press • 1910'}
              </span>
              <span className="text-[11px] text-sky-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {RUSSELL_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-sky-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-sky-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/40">
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

          <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-sky-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>{isArabic ? 'الأثر التاريخي في علوم المنطق والحاسوب:' : 'Impact on Logic & Computer Science:'}</span>
            </div>
            <p className="text-xs text-sky-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Switcher Navigation Tabs */}
      <div className="border-t border-sky-800/30 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Binary className="w-5 h-5 text-sky-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {isArabic ? 'مختبر رسل الصوري: حساب القضايا ومفارقة المجموعات' : 'Russell’s Symbolic Logic & Paradox Engine'}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setStudioMode('symbolic_calculus')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'symbolic_calculus'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'حساب القضايا والتحصيل الحاصل' : 'Propositional Calculus & Tautologies'}</span>
            </button>
            <button
              onClick={() => setStudioMode('russell_paradox')}
              className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'russell_paradox'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مفارقة الحلاق ونظرية الأنماط' : 'Barber Paradox & Type Theory'}</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Propositional Calculus & Tautologies */}
        {studioMode === 'symbolic_calculus' && (
          <div className="space-y-6">
            {/* Formula Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {FORMULAS_DATA.map((form) => {
                const isSelected = form.id === selectedFormulaId;
                return (
                  <button
                    key={form.id}
                    onClick={() => setSelectedFormulaId(form.id)}
                    className={`min-h-[50px] p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-950/80 border-sky-400 text-white shadow-md ring-1 ring-sky-400'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold text-sky-300 truncate">{form.symbolicExpr}</div>
                    <div className="text-[11px] font-bold mt-1 text-slate-200 truncate">{isArabic ? form.nameAr : form.nameEn}</div>
                  </button>
                );
              })}
            </div>

            {/* Formula Detail & Rule Card */}
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/60 flex items-start gap-3 text-sky-200">
              <BookOpen className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-sky-300">{isArabic ? currentFormula.nameAr : currentFormula.nameEn}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      currentFormula.isTautology
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isArabic ? currentFormula.classificationAr : currentFormula.classificationEn}
                  </span>
                </div>
                <p className="text-xs text-sky-200/90 leading-relaxed font-sans">
                  {isArabic ? currentFormula.ruleAr : currentFormula.ruleEn}
                </p>
              </div>
            </div>

            {/* Variable Toggles & Live Result */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'تعديل قيم المتغيرات الرمزية:' : 'Toggle Variable Truth Values:'}
                </span>

                <button
                  onClick={() => setPVal(!pVal)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    pVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  <span>P = {pVal ? 'True (ص)' : 'False (ك)'}</span>
                </button>

                <button
                  onClick={() => setQVal(!qVal)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    qVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  <span>Q = {qVal ? 'True (ص)' : 'False (ك)'}</span>
                </button>

                {currentFormula.id === 'hypothetical_syllogism' && (
                  <button
                    onClick={() => setRVal(!rVal)}
                    className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      rVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}
                  >
                    <span>R = {rVal ? 'True (ص)' : 'False (ك)'}</span>
                  </button>
                )}
              </div>

              {/* Evaluated Outcome */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'القيمة الصورية المحسوبة:' : 'Evaluated Propositional Value:'}
                </span>
                <span
                  className={`px-4 py-2 rounded-xl font-mono text-sm font-black flex items-center gap-1.5 ${
                    currentResult
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                      : 'bg-rose-500/20 border border-rose-500/40 text-rose-400'
                  }`}
                >
                  {currentResult ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>{currentResult ? (isArabic ? 'صادقة (T)' : 'TRUE') : (isArabic ? 'كاذبة (F)' : 'FALSE')}</span>
                </span>
              </div>
            </div>

            {/* Formula Expression Showcase in Mathematical Type */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1 font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                {isArabic ? 'الصيغة الرمزية وفق تدوين رسل وبيانو:' : 'Peano-Russell Formal Syntax:'}
              </span>
              <div className="text-lg sm:text-xl font-black text-sky-300">
                {currentFormula.symbolicExpr}
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Russell's Paradox Barber Visualizer */}
        {studioMode === 'russell_paradox' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-black text-white">
                    {isArabic ? 'مفارقة الحلاق الكلاسيكية (The Barber Paradox Formulation)' : 'The Barber Paradox Representation'}
                  </span>
                </div>
                <button
                  onClick={() => setShowTypeResolution(!showTypeResolution)}
                  className="min-h-[36px] px-3 py-1 rounded-lg text-xs font-bold bg-sky-950 border border-sky-700/60 text-sky-300 hover:bg-sky-900 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{showTypeResolution ? (isArabic ? 'إخفاء حل نظرية الأنماط' : 'Hide Type Theory') : (isArabic ? 'إظهار حل نظرية الأنماط' : 'Show Type Theory')}</span>
                </button>
              </div>

              {/* The Paradox Scenario */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {isArabic
                    ? 'في قرية معزولة، أعلن الحلاق الوحيد قانوناً صارماً: "أنا أحلق فقط لكل رجل في القرية لا يحلق لحيته بنفسه". السؤال الذي طرحه رسل عام 1901: هل يحلق الحلاق لحيته بنفسه أم لا؟'
                    : 'In an isolated town, the only barber follows an absolute rule: "I shave all and only those men in the town who do not shave themselves." The paradox: Does the barber shave himself?'}
                </p>

                {/* Self-referential loop demonstration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-900/40 text-xs space-y-1">
                    <span className="font-bold text-rose-300 block">{isArabic ? 'الافتراض الأول: الحلاق يحلق لنفسه' : 'Hypothesis 1: The barber shaves himself'}</span>
                    <p className="text-rose-200/80">
                      {isArabic
                        ? 'إذا كان يحلق لنفسه، فإنه ينتهك قاعدته الأساسية (لأنه يحلق فقط لمن لا يحلق لنفسه)، إذن يجب ألا يحلق لنفسه!'
                        : 'If he shaves himself, he violates his own mandate (he must only shave those who do not shave themselves). Therefore, he must NOT shave himself.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-900/40 text-xs space-y-1">
                    <span className="font-bold text-amber-300 block">{isArabic ? 'الافتراض الثاني: الحلاق لا يحلق لنفسه' : 'Hypothesis 2: The barber does NOT shave himself'}</span>
                    <p className="text-amber-200/80">
                      {isArabic
                        ? 'إذا كان لا يحلق لنفسه، فإنه يقع في فئة من لا يحلقون لأنفسهم، وبناءً على قاعدته يجب عليه أن يحلق لنفسه!'
                        : 'If he does not shave himself, he belongs to the set of men who do not shave themselves, so under his mandate he MUST shave himself.'}
                    </p>
                  </div>
                </div>

                {/* Mathematical Set Formalism */}
                <div className="p-3 rounded-lg bg-sky-950/50 border border-sky-800/40 text-center font-mono text-xs text-sky-200 mt-2">
                  <span className="text-amber-400 font-bold block mb-1">
                    {isArabic ? 'الصيغة الرياضية لمفارقة رسل للفئات:' : 'Russell’s Set-Theoretic Contradiction:'}
                  </span>
                  R = &#123; x | x &notin; x &#125; &rArr; (R &isin; R &hArr; R &notin; R)
                </div>
              </div>

              {/* Interactive Paradox Toggle */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">
                    {isArabic ? 'جرّب تعيين حالة الحلاق يدوياً:' : 'Test Barber Self-Shave State:'}
                  </span>
                  <button
                    onClick={() => setBarberShavesSelf(!barberShavesSelf)}
                    className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      barberShavesSelf ? 'bg-amber-600 text-white' : 'bg-indigo-600 text-white'
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{barberShavesSelf ? (isArabic ? 'الحلاق يحلق لنفسه' : 'Barber shaves self') : (isArabic ? 'الحلاق لا يحلق لنفسه' : 'Barber does not shave')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'تناقض منطقي مستحيل في الفئات الساذجة' : 'Deadlock: R ∈ R ⟺ R ∉ R'}</span>
                  </span>
                </div>
              </div>

              {/* Theory of Types Resolution */}
              {showTypeResolution && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-black">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isArabic ? 'حل رسل في كتاب أصول الرياضيات: نظرية الأنماط (Theory of Types):' : 'Russell’s Solution in Principia: Theory of Types'}</span>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed font-sans">
                    {isArabic
                      ? 'قسّم رسل الكائنات المنطقية إلى تراتبية هرمية (Hierarchical Types): الأفراد في المستوى 0، ومجموعات الأفراد في المستوى 1، ومجموعات المجموعات في المستوى 2. تمنع نظرية الأنماط أي مجموعة من أن تنتمي إلى نفسها؛ لأن أي مجموعة من المستوى n لا يمكن أن تقبل كعناصر لها سوى كائنات من المستوى n-1. وبذلك اختفت المفارقة إلى الأبد!'
                      : 'Russell stratified logical entities into hierarchical types: individuals at Type 0, sets of individuals at Type 1, and sets of sets at Type 2. A set of Type n can only contain elements of Type n-1, making self-containment syntactically impossible and eliminating vicious circularity forever.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
