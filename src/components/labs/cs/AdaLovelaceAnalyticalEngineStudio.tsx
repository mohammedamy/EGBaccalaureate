import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  RotateCcw,
  Binary,
  Layers,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import lovelacePhoto from '../../../assets/cs/lovelace_analytical_engine_1843.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface LovelaceHotspot {
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

export const LOVELACE_HOTSPOTS: LovelaceHotspot[] = [
  {
    id: 'lovelace_note_g_bernoulli_algorithm',
    xPct: 62.0,
    yPct: 40.0,
    titleAr: 'مخطط الملاحظة G: أول خوارزمية حاسوبية في التاريخ',
    titleEn: 'Note G Diagram: The World’s First Computer Algorithm',
    categoryAr: 'ميلاد هندسة البرمجيات',
    categoryEn: 'Birth of Software Engineering',
    descAr:
      'جدول العمليات الرياضية والمتغيرات المتتابعة في "الملاحظة G" لحساب أرقام برنولي (Bernoulli Numbers). يعد هذا المخطط أول برنامج حاسوبي متكامل منشور في تاريخ البشرية، محتوياً على بنى التكرار الحلقي (Loops)، والتفرع المشروط (Conditional Branching)، وعناوين الذاكرة المتغيرة.',
    descEn:
      'The operational step table in Lovelace’s famous "Note G" computing Bernoulli numbers. Recognized as the first published computer program in human history, featuring looping cycles, conditional branching, variable memory addresses, and register arithmetic.',
    scientificInsightAr:
      'أدركت لوفليس الفرق الجوهري بين البيانات (Data) والعمليات التي تعتمد عليها (Operations)، ممهدة الطريق لنموذج الحاسوب العام متكامل تورنغ.',
    scientificInsightEn:
      'Lovelace distinguished between numerical data and the abstract instructions operating upon them, conceiving the fundamental abstraction of general-purpose algorithmic computing.',
  },
  {
    id: 'jacquard_punch_cards',
    xPct: 12.0,
    yPct: 75.0,
    titleAr: 'بطاقات جاكارد المثقبة لبرمجة الآلة',
    titleEn: 'Jacquard Punched Cards for Machine Programming',
    categoryAr: 'وسائط التخزين والإدخال الميكانيكي',
    categoryEn: 'Mechanical Input & Storage Media',
    descAr:
      'البطاقات الورقية الصلبة المثقبة المستعارة من نول جوزيف جاكارد للنسيج، والتي قسمها باباج ولوفليس إلى بطاقات عمليات (Operation Cards) لتحديد نوع المعامل الحسابي (+, -, ×, ÷)، وبطاقات متغيرات (Variable Cards) لتوجيه نقل البيانات بين المطحنة والمخزن.',
    descEn:
      'Rigid punched paper cards adapted from the Jacquard silk loom, categorized into Operation Cards (defining mathematical operators) and Variable Cards (specifying source/destination memory storage locations).',
    scientificInsightAr:
      'عبرت لوفليس عن هذه التقنية بعبارتها الشهيرة: "إن الآلة التحليلية تنسج أنماطاً جبرية تماماً كما ينسج نول جاكارد الأزهار والأوراق".',
    scientificInsightEn:
      'Lovelace immortalized this bridge between textile automation and computation: "The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves."',
  },
  {
    id: 'babbage_analytical_engine_brass_gears',
    xPct: 88.0,
    yPct: 40.0,
    titleAr: 'المطحنة والمخزن الميكانيكي (Mill & Store)',
    titleEn: 'Mechanical Mill (ALU) & Store (Memory) Brass Gears',
    categoryAr: 'العتاد الحاسوبي الميكانيكي',
    categoryEn: 'Mechanical Hardware Architecture',
    descAr:
      'التروس النحاسية وأعمدة الكامات الدوارة في محرك باباج التحليلي؛ حيث فصل التصميم المعماري للآلة بين "المطحنة" (The Mill) كمعالج حسابي تنفيذي، و"المخزن" (The Store) كذاكرة تخزن 1000 رقم عشري كل منها مكوّن من 50 خانة.',
    descEn:
      'The interlocking brass cogs and stepped drums of Babbage’s Analytical Engine, physically separating the "Mill" (the central arithmetic execution core) from the "Store" (a mechanical memory capable of holding 1,000 numbers of 50 decimal digits each).',
    scientificInsightAr:
      'هذا الفصل الفيزيائي بين المعالجة والذاكرة يمثل النموذج الأصلي الذي أعاد فون نيومان صياغته إلكترونياً بعد قرن كامل.',
    scientificInsightEn:
      'This physical separation of computation (Mill) and data storage (Store) represents the direct mechanical forerunner of the von Neumann computer architecture.',
  },
  {
    id: 'poetic_science_vision',
    xPct: 35.0,
    yPct: 38.0,
    titleAr: 'رؤية "العلم الشاعري" وتجريد الرموز',
    titleEn: 'Poetic Science & Symbolic Generalization',
    categoryAr: 'فلسفة الذكاء والآلات',
    categoryEn: 'Philosophy of Artificial Intelligence',
    descAr:
      'القفزة الفكرية التي حققتها لوفليس بتجاوز حدود الأرقام البحتة؛ إذ تنبأت بإمكانية أن تعالج الآلة الأنغام الموسيقية، والرسومات، والرموز اللغوية إذا ما تم تحويل علاقاتها إلى قواعد رياضية تجريدية.',
    descEn:
      'Lovelace’s revolutionary intellectual leap beyond mere numerical crunching: she predicted that if musical harmonies, graphic forms, or symbolic logic could be expressed algorithmically, the engine could compose elaborate music and process general symbols.',
    scientificInsightAr:
      'صاغت ما يعرف بـ "اعتراض ليدي لوفليس" (Lady Lovelace’s Objection) الذي ناقشه آلان تورينج لاحقاً حول ما إذا كان بإمكان الآلة ابتكار أفكار أصلية بنفسها.',
    scientificInsightEn:
      'Formulated "Lady Lovelace’s Objection" on whether machines could originate original thought, a foundational premise later scrutinized by Alan Turing in 1950.',
  },
  {
    id: 'victorian_quill_inkwell_vellum',
    xPct: 68.0,
    yPct: 82.0,
    titleAr: 'ريشة التحليل الفيكتورية ومحبرة الحسابات اليدوية',
    titleEn: 'Victorian Steel Dip Pen, Iron Gall Ink & Verification',
    categoryAr: 'أدوات المخطوطات والتحقيق',
    categoryEn: 'Historical Verification Artifacts',
    descAr:
      'ريشة الفولاذ الحبرية والمحبرة الكريستالية الأصلية التي استخدمتها آدا لوفليس للتدقيق اليدوي لجميع المعاملات الحسابية لمتسلسلات برنولي الرياضية للتأكد من خلو خوارزميتها المبرمجة من أي أخطاء حسابية.',
    descEn:
      'The steel dip nib pen and crystal iron gall inkwell utilized by Ada Lovelace to meticulously calculate and manually verify every algebraic coefficient in the Bernoulli power series to validate the algorithm against human hand calculation.',
    scientificInsightAr:
      'كشفت الحسابات اليدوية للوفليس عن خطأ مطبعي طفيف في معامل واحد في المسودة الأصلية، ما أثبت دقتها الفائقة في تصحيح الخوارزميات.',
    scientificInsightEn:
      'Lovelace’s rigorous manual checks detected a subtle transcription typo in Babbage’s original scratch calculations, demonstrating the world’s first software debugging.',
  },
];

interface OperationStep {
  step: number;
  op: '+' | '-' | '×' | '÷';
  v1: string;
  v2: string;
  dest: string;
  formula: string;
  resultDescAr: string;
  resultDescEn: string;
  cardPunched: string;
}

const BERNOULLI_ALGO_STEPS: OperationStep[] = [
  {
    step: 1,
    op: '×',
    v1: 'V2 (2)',
    v2: 'V1 (n)',
    dest: 'V4',
    formula: 'V4 = 2 · n',
    resultDescAr: 'مضاعفة رتبة رقم برنولي لحساب المعامل الأسي',
    resultDescEn: 'Doubling the Bernoulli index to establish the power coefficient',
    cardPunched: '10100110',
  },
  {
    step: 2,
    op: '-',
    v1: 'V4 (2n)',
    v2: 'V3 (1)',
    dest: 'V5',
    formula: 'V5 = 2n - 1',
    resultDescAr: 'طرح الوحدة لتحديد حد البسط التكراري',
    resultDescEn: 'Subtracting unity to yield the iterative numerator term',
    cardPunched: '01011010',
  },
  {
    step: 3,
    op: '÷',
    v1: 'V5 (2n-1)',
    v2: 'V2 (2)',
    dest: 'V6',
    formula: 'V6 = (2n-1) / 2',
    resultDescAr: 'قسمة المعامل لتحديد النسبة بين الحدود',
    resultDescEn: 'Dividing the coefficient to balance term proportions',
    cardPunched: '11001100',
  },
  {
    step: 4,
    op: '×',
    v1: 'V6',
    v2: 'V7 (B_{n-1})',
    dest: 'V8',
    formula: 'V8 = V6 · B_{n-1}',
    resultDescAr: 'ضرب المعامل النسبي في قيمة رقم برنولي السابق المخزن',
    resultDescEn: 'Multiplying the fractional factor by the stored prior Bernoulli value',
    cardPunched: '10101010',
  },
  {
    step: 5,
    op: '+',
    v1: 'V8',
    v2: 'V9 (Accumulator)',
    dest: 'V10',
    formula: 'V10 = V8 + Accumulator',
    resultDescAr: 'تجميع الحد في المطحنة وإرسال الناتج النهائي إلى المخزن V10',
    resultDescEn: 'Accumulating the term in the Mill and dispatching to Store register V10',
    cardPunched: '11110000',
  },
];

interface BernoulliPreset {
  n: number;
  symbol: string;
  exactFracAr: string;
  exactFracEn: string;
  decimalVal: number;
  descriptionAr: string;
  descriptionEn: string;
}

const BERNOULLI_PRESETS: BernoulliPreset[] = [
  {
    n: 1,
    symbol: 'B_1',
    exactFracAr: '-1 / 2',
    exactFracEn: '-1 / 2',
    decimalVal: -0.5,
    descriptionAr: 'رقم برنولي الفردي الوحيد غير الصفري (في اتفاقية البداية الحديثة).',
    descriptionEn: 'The only non-zero odd Bernoulli number (in modern convention).',
  },
  {
    n: 2,
    symbol: 'B_2',
    exactFracAr: '1 / 6',
    exactFracEn: '1 / 6',
    decimalVal: 0.166667,
    descriptionAr: 'يظهر في حل مسألة بازل الشهيرة لمتسلسلة مقاليب المربعات (π²/6).',
    descriptionEn: 'Famous for solving the Basel problem sum of inverse squares (π²/6).',
  },
  {
    n: 4,
    symbol: 'B_4',
    exactFracAr: '-1 / 30',
    exactFracEn: '-1 / 30',
    decimalVal: -0.033333,
    descriptionAr: 'معامل القوى الرابعة في صيغة أويلر-ماكلورين للتكامل العددي.',
    descriptionEn: '4th power coefficient in the Euler-Maclaurin summation formula.',
  },
  {
    n: 6,
    symbol: 'B_6',
    exactFracAr: '1 / 42',
    exactFracEn: '1 / 42',
    decimalVal: 0.02381,
    descriptionAr: 'يظهر في متسلسلات دالة زيتا لريمان ζ(6) = π⁶ / 945.',
    descriptionEn: 'Occurs in the Riemann zeta function evaluation ζ(6) = π⁶ / 945.',
  },
  {
    n: 8,
    symbol: 'B_8',
    exactFracAr: '-1 / 30',
    exactFracEn: '-1 / 30',
    decimalVal: -0.033333,
    descriptionAr: 'الحد الذي قامت لوفليس بحسابه وتفصيله في الملاحظة G بدقة متناهية.',
    descriptionEn: 'The monumental target coefficient analyzed by Lovelace in Note G.',
  },
];

export const AdaLovelaceAnalyticalEngineStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<LovelaceHotspot>(LOVELACE_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<BernoulliPreset>(BERNOULLI_PRESETS[4]); // B_8 (Lovelace target)
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const activeStep = BERNOULLI_ALGO_STEPS[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % BERNOULLI_ALGO_STEPS.length);
  };

  const handleReset = () => {
    setActiveStepIndex(0);
    setIsExecuting(false);
  };

  const handleRunFullCycle = () => {
    setIsExecuting(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= BERNOULLI_ALGO_STEPS.length) {
        clearInterval(interval);
        setIsExecuting(false);
        setActiveStepIndex(BERNOULLI_ALGO_STEPS.length - 1);
      } else {
        setActiveStepIndex(step);
      }
    }, 800);
  };

  const modalData: HiResImageModalData = {
    imageUrl: lovelacePhoto,
    titleAr: 'مخطوطة آدا لوفليس الأصلية (1843) — خوارزمية الآلة التحليلية',
    titleEn: 'Ada Lovelace’s Original 1843 Memoir — Analytical Engine Algorithm',
    subtitleAr: 'الملاحظة G (Note G): أول برنامج حاسوبي مدون في تاريخ الحضارة الإنسانية',
    subtitleEn: 'Note G: The World’s First Published Computer Software Algorithm',
    descriptionAr:
      'نسخة أرشيفية نادرة بدقة 4K من ملحق الملاحظات العلمية التي ترجمتها وعلقت عليها أوغستا آدا لوفليس عن بحث المهندس لويجي ميناب Browser حول محرك تشارلز باباج التحليلي. توضح الصفحة جدول العمليات الرياضية الذي صممته لوفليس لحساب أرقام برنولي آلياً بواسطة البطاقات المثقبة، محتوية على الفصل المعماري التام بين أوامر البرنامج (Operation Cards) ومتغيرات الذاكرة (Variable Cards).',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of Ada Lovelace’s foundational 1843 treatise translating and expanding Luigi Menabrea’s sketch of Charles Babbage’s Analytical Engine. The folio exhibits Note G: the monumental algorithm calculating Bernoulli numbers via Jacquard-style punched cards, formalizing loops, memory registers, conditional state execution, and the philosophical leap to general symbolic computation.',
    locationAr: 'المكتبة البريطانية / متحف العلوم بلندن',
    locationEn: 'The British Library / Science Museum, London',
    dateOrEraAr: '1843 ميلادية (العصر الفيكتوري)',
    dateOrEraEn: '1843 CE (Victorian Era)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/40 border-violet-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-700 via-fuchsia-600 to-amber-500 flex items-center justify-center shadow-lg shadow-violet-700/30 text-white">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold">
                1843 CE • London
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'الملاحظة G (Note G) • أول كود في التاريخ' : 'Note G • First Algorithm'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-200 to-amber-200">
              {isArabic
                ? 'استوديو آدا لوفليس والآلة التحليلية: ميلاد البرمجيات وخوارزمية برنولي'
                : 'Ada Lovelace & The Analytical Engine: Birth of Software & Note G'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص المخطوط الفيكتوري بدقة 4K' : 'Inspect 4K Victorian Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Image with Hotspot Overlays */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-violet-800/40 bg-slate-950 shadow-2xl group">
            <img
              src={lovelacePhoto}
              alt="Ada Lovelace 1843 Analytical Engine Folio"
              className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

            {/* Pulsing Hotspot Markers */}
            {LOVELACE_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] p-2 flex items-center justify-center cursor-pointer transition-all z-20 group/marker`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <span className="relative flex h-7 w-7 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-fuchsia-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-black shadow-lg ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 scale-125'
                          : 'bg-violet-700/90 text-white border border-fuchsia-300'
                      }`}
                    >
                      ★
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Badge overlay */}
            <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-violet-800/40 text-slate-300">
              <span className="flex items-center gap-1.5 text-violet-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'انقر على العلامات النجمية لاستكشاف أركان الآلة' : 'Click stars to inspect engine architectural details'}
              </span>
              <span className="text-amber-400 font-bold">5 {isArabic ? 'محطات تحليلية' : 'Hotspots'}</span>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Deep Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl border border-violet-800/30 bg-slate-900/60 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-violet-800/30 pb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isArabic ? 'معلم تحليلي' : 'Focal Feature'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-violet-200">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
            </p>

            <div className="p-3 rounded-xl bg-violet-950/50 border border-violet-700/30 space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Binary className="w-3.5 h-3.5" />
                <span>{isArabic ? 'الأثر العلمي والحاسوبي الخالد:' : 'Permanent Scientific & Computational Legacy:'}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-violet-800/20 flex items-center justify-between text-xs text-slate-400">
            <span>{isArabic ? 'الموقع بالمخطوط:' : 'Folio Coordinate:'}</span>
            <span className="font-mono text-cyan-400">
              X: {selectedHotspot.xPct}% | Y: {selectedHotspot.yPct}%
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator: Lovelace Note G Algorithm & Analytical Engine Pipeline */}
      <div className="p-5 sm:p-6 rounded-2xl border border-violet-800/40 bg-slate-900/90 backdrop-blur-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-violet-800/30 pb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-violet-200">
              <Binary className="w-5 h-5 text-fuchsia-400" />
              <span>
                {isArabic
                  ? 'محاكي خط أنابيب الآلة التحليلية: تنفيذ خوارزمية برنولي (Note G Pipeline)'
                  : 'Analytical Engine Pipeline: Lovelace Note G Bernoulli Algorithm Execution'}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'تتبع دورات تشغيل بطاقات العمليات والمتغيرات الميكانيكية ونقل البيانات بين المخزن (Store) والمطحنة (Mill)'
                : 'Step through mechanical operation cards, variable memory registers, and arithmetic execution in the Mill'}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">{isArabic ? 'رقم برنولي المستهدف:' : 'Target Number:'}</span>
            {BERNOULLI_PRESETS.map((preset) => (
              <button
                key={preset.n}
                onClick={() => setSelectedPreset(preset)}
                className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedPreset.n === preset.n
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-fuchsia-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {preset.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Execution Pipeline Controls & Micro-step Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Current Step Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-violet-800/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {isArabic ? 'دورة الآلة الحالية:' : 'Current Machine Cycle:'}
                </span>
                <span className="px-2 py-0.5 rounded bg-fuchsia-950/80 border border-fuchsia-700 text-fuchsia-300 font-mono text-xs font-bold">
                  Step {activeStep.step} / {BERNOULLI_ALGO_STEPS.length}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-xs font-mono text-cyan-300 font-bold">
                  {activeStep.formula}
                </div>
                <div className="text-xs text-slate-300">
                  {isArabic ? activeStep.resultDescAr : activeStep.resultDescEn}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleNextStep}
                  disabled={isExecuting}
                  className="min-h-[44px] flex-1 px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{isArabic ? 'الخطوة التالية (Next Step)' : 'Step Forward'}</span>
                </button>
                <button
                  onClick={handleRunFullCycle}
                  disabled={isExecuting}
                  className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-fuchsia-600 hover:bg-fuchsia-500 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Layers className="w-4 h-4" />
                  <span>{isArabic ? 'تشغيل آلي' : 'Auto Run'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer"
                  title={isArabic ? 'إعادة ضبط' : 'Reset'}
                  aria-label={isArabic ? 'إعادة ضبط' : 'Reset'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Target Number Mathematical Info */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-violet-800/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{isArabic ? 'العدد المختار:' : 'Selected Value:'}</span>
                <span className="font-mono text-amber-300 font-bold text-sm">
                  {selectedPreset.symbol} = {isArabic ? selectedPreset.exactFracAr : selectedPreset.exactFracEn}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{isArabic ? 'القيمة العشرية التقريبية:' : 'Decimal Approximation:'}</span>
                <span className="font-mono text-cyan-300 font-bold">{selectedPreset.decimalVal}</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                {isArabic ? selectedPreset.descriptionAr : selectedPreset.descriptionEn}
              </p>
            </div>
          </div>

          {/* SVG Visualizer: Jacquard Punch Card Pattern & Mechanical Store/Mill Bus */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  {isArabic ? 'نمط بطاقة جاكارد المثقبة للعملية الحالية' : 'Jacquard Punch Card Pattern for Current Operation'}
                </span>
                <span className="text-slate-400">Card Code: {activeStep.cardPunched}</span>
              </div>

              {/* SVG Jacquard Punched Card */}
              <div className="w-full overflow-x-auto flex justify-center py-2">
                <svg viewBox="0 0 520 160" className="w-full max-w-[480px] h-auto select-none">
                  {/* Card base (parchment/manila card) */}
                  <rect x="10" y="10" width="500" height="140" rx="8" fill="#d97706" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
                  <rect x="14" y="14" width="492" height="132" rx="6" fill="#1e1b4b" fillOpacity="0.8" />

                  {/* Header labels */}
                  <text x="30" y="36" fill="#fcd34d" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    ANALYTICAL ENGINE • OPERATION CARD No. {activeStep.step}
                  </text>
                  <text x="380" y="36" fill="#a78bfa" fontSize="10" fontFamily="monospace">
                    OP: [{activeStep.op}]
                  </text>

                  {/* Hole matrix (8 columns x 3 rows) */}
                  {Array.from({ length: 8 }).map((_, col) => {
                    const isPunched = activeStep.cardPunched[col] === '1';
                    const cx = 55 + col * 55;
                    return (
                      <g key={col}>
                        {/* Upper guide hole */}
                        <circle cx={cx} cy="60" r="6" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
                        {/* Data hole (Punched vs Solid) */}
                        <circle
                          cx={cx}
                          cy="95"
                          r="12"
                          fill={isPunched ? '#f59e0b' : '#0f172a'}
                          stroke={isPunched ? '#fbbf24' : '#475569'}
                          strokeWidth="2"
                        />
                        {isPunched && (
                          <circle cx={cx} cy="95" r="4" fill="#ffffff" />
                        )}
                        <text x={cx} y="130" fill={isPunched ? '#fde68a' : '#64748b'} fontSize="9" textAnchor="middle" fontFamily="monospace">
                          {isPunched ? 'PUNCH' : 'SOLID'}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Memory Register Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono pt-2 border-t border-slate-800">
                <div className={`p-2 rounded border ${activeStep.v1.includes('V1') || activeStep.v1.includes('V2') ? 'bg-fuchsia-950/60 border-fuchsia-600 text-fuchsia-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  <div>V1 / V2: Inputs</div>
                  <div className="text-[10px] text-slate-500">Fixed Operands</div>
                </div>
                <div className={`p-2 rounded border ${activeStep.dest === 'V4' || activeStep.dest === 'V5' ? 'bg-fuchsia-950/60 border-fuchsia-600 text-fuchsia-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  <div>V4 / V5: Multiplier</div>
                  <div className="text-[10px] text-slate-500">Mill Registers</div>
                </div>
                <div className={`p-2 rounded border ${activeStep.dest === 'V6' || activeStep.dest === 'V8' ? 'bg-fuchsia-950/60 border-fuchsia-600 text-fuchsia-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  <div>V6 / V8: Quotient</div>
                  <div className="text-[10px] text-slate-500">Fractional Store</div>
                </div>
                <div className={`p-2 rounded border ${activeStep.dest === 'V10' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  <div>V10: Store Result</div>
                  <div className="text-[10px] text-slate-500">Output Carriage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
