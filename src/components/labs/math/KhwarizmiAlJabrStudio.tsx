import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Maximize2,
  RotateCcw,
  Binary,
  Calculator,
} from 'lucide-react';
import khwarizmiPhoto from '../../../assets/math/khwarizmi_al_jabr_algebra_820.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface KhwarizmiHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  scientificProofAr: string;
  scientificProofEn: string;
}

export const KHWARIZMI_HOTSPOTS: KhwarizmiHotspot[] = [
  {
    id: 'al_jabr_restoration_concept',
    xPct: 38.0,
    yPct: 28.0,
    titleAr: 'مفهوما الجبر والمقابلة (إسقاط المنفي وموازنة المتماثلات)',
    titleEn: 'Foundational Principles of Al-Jabr (Restoration) & Al-Muqabala (Balancing)',
    categoryAr: 'الأصول الجبرية',
    categoryEn: 'Algebraic Foundations',
    descAr:
      'ابتكر الخوارزمي مصطلح "الجبر" ليعني جبر النقصان ونقل الحدود السالبة إلى الطرف الآخر لتصبح موجبة (مثل: س² = ٤٠ - ٤س فتجبر لتصبح س² + ٤س = ٤٠)، بينما تعني "المقابلة" حذف الحدود المتماثلة من طرفي المعادلة لتبسيطها إلى صيغتها القياسية.',
    descEn:
      'Al-Khwarizmi established "Al-Jabr" (restoration or resetting) as adding equal quantities to both sides to eliminate negative terms, while "Al-Muqabala" (balancing) cancels identical terms appearing on opposing sides of an equation to reach canonical simplicity.',
    scientificProofAr:
      'يعد هذا المنهج التأسيس الصريح الأول في تاريخ البشرية لمعاملة المعادلات ككيانات متوازنة قابلة للتحويل المنهجي الخطي، وهو جوهر الجبر الحديث.',
    scientificProofEn:
      'Represents the very first systematic treatment in human history of equations as balanced entities governed by reversible transformations, founding algebra as an autonomous discipline.',
  },
  {
    id: 'completing_the_square_geometry',
    xPct: 62.0,
    yPct: 48.0,
    titleAr: 'طريقة إكمال المربع الهندسية (س² + ١٠س = ٣٩)',
    titleEn: 'Geometric Method of Completing the Square (x² + 10x = 39)',
    categoryAr: 'البراهين الهندسية الجبرية',
    categoryEn: 'Geometric Algebra',
    descAr:
      'البرهان الهندسي العبقري لحل المعادلة التربيعية: نمثل س² بمربع مركزي، ونقسم ١٠س إلى شريطين مستطيلين مساحة كل منهما ٥س على ضلعيه، ثم نكمل زاوية المربع الكبير بإضافة مربع صغير مساحته ٥² = ٢٥. تصبح المساحة الإجمالية ٣٩ + ٢٥ = ٦٤، ومنها طول الضلع س + ٥ = ٨، أي س = ٣.',
    descEn:
      'The foundational geometric proof for quadratic equations: representing x² as a central square, distributing 10x as two rectangular strips of width 5 on its borders, and "completing the square" by adding the missing corner 5² = 25. The total area becomes 39 + 25 = 64, yielding side x + 5 = 8, so x = 3.',
    scientificProofAr:
      'البرهان يثبت هندسياً صحة القانون العام لحل المعادلة التربيعية (Quadratic Formula) المستخدم في منهج الرياضيات لجميع مراحل التعليم الثانوي.',
    scientificProofEn:
      'Geometrically grounds and proves the universal quadratic formula x = (-b ± √(b² - 4ac)) / (2a) taught across all global curricula.',
  },
  {
    id: 'six_canonical_equations',
    xPct: 35.0,
    yPct: 50.0,
    titleAr: 'الأشكال القياسية الستة للمعادلات عند الخوارزمي',
    titleEn: 'The Six Canonical Equations of Al-Khwarizmi',
    categoryAr: 'تصنيف المعادلات',
    categoryEn: 'Equation Taxonomy',
    descAr:
      'صنف الخوارزمي كافة المعادلات إلى ست حالات قياسية تنقسم إلى ثلاث بسيطة (أموال تعدل جذوراً، أموال تعدل عدداً، جذور تعدل عدداً) وثلاث مركبة (أموال وجذور تعدل عدداً، أموال وعدد يعدل جذوراً، جذور وعدد يعدل أموالاً)، وذلك لعدم استخدام الأعداد السالبة كمعاملات في عصره.',
    descEn:
      'Al-Khwarizmi exhaustively classified all equations into 6 canonical forms: three simple (ax² = bx, ax² = c, bx = c) and three composite (ax² + bx = c, ax² + c = bx, bx + c = ax²), accommodating all real positive solutions before negative coefficients were formalized.',
    scientificProofAr:
      'يعكس هذا التصنيف الدقة الصارمة في معالجة إشارة المميز (b² - 4ac) وما إذا كان للمعادلة جذران موجبان أو جذر واحد أو لا حل لها في مجموعة الأعداد الحقيقية.',
    scientificProofEn:
      'Corresponds precisely to the modern discriminant analysis Δ = b² - 4ac, classifying two positive roots, single roots, or null real solutions.',
  },
  {
    id: 'house_of_wisdom_manuscript',
    xPct: 52.0,
    yPct: 88.0,
    titleAr: 'مخطوط بيت الحكمة في بغداد (عهد الخليفة المأمون)',
    titleEn: 'The Bayt al-Hikma (House of Wisdom) Baghdad Manuscript',
    categoryAr: 'تاريخ العلوم والحضارة',
    categoryEn: 'History of Science',
    descAr:
      'ألف الخوارزمي كتابه التاريخي بتكليف من الخليفة العباسي المأمون في دار الحكمة ببغداد حوالي عام 820م، ليكون دليلاً عملياً لحل مشكلات المواريث الشرعية، ومسح الأراضي، والمعاملات التجارية، وقسمة التركات، وحساب الأنهار والمنشآت.',
    descEn:
      'Authored under the patronage of Caliph Al-Ma’mun at the House of Wisdom in Baghdad (c. 820 CE), the book was designed as a practical manual to solve Islamic inheritance division (Fara’id), land surveying, commercial transactions, and engineering hydraulics.',
    scientificProofAr:
      'تعتمد فصول المواريث والوصايا في الفقه الإسلامي والقانون المدني المصري على حسابات النسب والكسور الجبرية التي وضعها الخوارزمي في النصف الثاني من الكتاب.',
    scientificProofEn:
      'Directly links to legal inheritance arithmetic and civil jurisprudence partitions through linear fractional algebra established in the book’s second half.',
  },
  {
    id: 'algorithmic_heritage',
    xPct: 78.0,
    yPct: 76.0,
    titleAr: 'جذور علم الخوارزميات (Algorithm) ونقل الأرقام العربية',
    titleEn: 'Etymological Birth of "Algorithm" & Hindu-Arabic Numerals',
    categoryAr: 'المعلوماتية والحوسبة',
    categoryEn: 'Algorithms & Computing',
    descAr:
      'اشتق اسم علم الخوارزميات في جميع لغات العالم (Algorithm) مباشرة من اسم "الخوارزمي" بعد ترجمة كتابه في الحساب الهندي إلى اللاتينية (Algoritmi de numero Indorum)، حيث أدخل الصفر والنظام العشري الموضعي إلى أوروبا والعالم.',
    descEn:
      'The universal computer science term "Algorithm" is the direct Latin transliteration of Al-Khwarizmi’s surname. His Latinized treatise "Algoritmi de numero Indorum" introduced the zero, decimal place-value system, and stepwise execution logic to Western civilization.',
    scientificProofAr:
      'يرتبط هذا المفهوم مباشرة بمادتي الرياضيات التطبيقية والحاسب الآلي والذكاء الاصطناعي في المرحلة الثانوية.',
    scientificProofEn:
      'Forms the foundational lineage of computer science, stepwise algorithmic procedures, and digital computing logic.',
  },
];

export const KhwarizmiAlJabrStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<KhwarizmiHotspot>(KHWARIZMI_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Geometric Completing the Square Engine: x² + bx = c
  const [bCoeff, setBCoeff] = useState<number>(10); // default Al-Khwarizmi prototype
  const [cConstant, setCConstant] = useState<number>(39); // default Al-Khwarizmi prototype

  const presets = [
    { label: 'س² + ١٠س = ٣٩ (الخوارزمي)', b: 10, c: 39 },
    { label: 'س² + ٦س = ١٦', b: 6, c: 16 },
    { label: 'س² + ٨س = ٢٠', b: 8, c: 20 },
    { label: 'س² + ٤س = ٤٥', b: 4, c: 45 },
  ];

  // Mathematical Calculations
  const halfB = bCoeff / 2;
  const cornerSquareArea = halfB * halfB;
  const totalCompletedArea = cConstant + cornerSquareArea;
  const sideCompletedSquare = Number(Math.sqrt(totalCompletedArea).toFixed(3));
  const rootX = Number((sideCompletedSquare - halfB).toFixed(3));
  const negativeRootX = Number((-sideCompletedSquare - halfB).toFixed(3));
  const discriminant = bCoeff * bCoeff + 4 * cConstant;

  const modalData: HiResImageModalData = {
    imageUrl: khwarizmiPhoto,
    titleAr: 'مخطوطة كتاب المختصر في حساب الجبر والمقابلة - محمد بن موسى الخوارزمي (820م)',
    titleEn: 'Al-Khwarizmi’s Kitab al-Jabr wa’l-Muqabala (c. 820 CE): Baghdad Bayt al-Hikma',
    subtitleAr: 'ولادة علم الجبر المستقل، طريقة إكمال المربع هندسياً، وجذور الخوارزميات الحاسوبية',
    subtitleEn: 'The Genesis of Independent Algebra, Geometric Completing of Squares & Algorithmic Lineage',
    descriptionAr:
      'معروضة متحفية نادرة تمثل المخطوطة الأصلية التي أطلقت علم الجبر إلى العالم. توضح الصفحة المفتوحة البرهان الهندسي المتقن لحل المعادلة التربيعية "س² + 10س = 39" بطريقة تقسيم وإكمال المربع، وتتجاور مع قلم القصب والدواة الفخارية وفرجار النحاس العباسي.',
    descriptionEn:
      'A monumental archival display of the seminal treatise that birthed algebra as an independent scientific branch. Authored in Baghdad’s House of Wisdom around 820 CE, the open folio reveals the geometric dissection proof solving x² + 10x = 39, preserved with an antique calamus reed pen and ceramic inkwell.',
    dateOrEraAr: 'العصر الذهبي العباسي - بيت الحكمة في بغداد (حوالي 820 ميلادية)',
    dateOrEraEn: 'Abbasid Golden Age & Bayt al-Hikma of Baghdad (c. 820 CE)',
    locationAr: 'مكتبة بودليان، أكسفورد / دار الكتب والوثائق القومية، القاهرة',
    locationEn: 'Bodleian Library, Oxford (Hunt. 214) / National Library & Archives, Cairo',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-amber-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-amber-400 text-amber-400'
                : 'bg-gradient-to-br from-amber-600 to-orange-700 text-white border-amber-400/40 shadow-amber-500/20'
            }`}
          >
            <Binary className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو الخوارزمي وكتاب الجبر والمقابلة (820م) - 4K'
                  : 'Al-Khwarizmi’s Al-Jabr & Algorithmic Studio (820 CE) - 4K'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-amber-400 text-black border-amber-300'
                    : isLight
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                }`}
              >
                Archival 4K Studio
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'مخطوطة بيت الحكمة ببغداد، طريقة إكمال المربع هندسياً، حل المعادلات التربيعية، وجذور الخوارزميات'
                : 'Baghdad House of Wisdom folio, geometric completing the square, quadratic solver, and algorithmic lineage'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-amber-400 text-black border-amber-300 hover:bg-amber-300'
              : 'bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border-amber-500/40'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'عرض المخطوطة بدقة 4K' : 'View 4K Archival Folio'}</span>
        </button>
      </div>

      {/* Main Studio Interactive Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 4K Archival Plate with Pulsating Hotspots (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
            <img
              src={khwarizmiPhoto}
              alt="Al-Khwarizmi Al-Jabr 820 CE 4K Archival Folio"
              className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Interactive Hotspots Overlaid */}
            {KHWARIZMI_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-amber-500 text-white ring-4 ring-amber-400/50 scale-125 shadow-lg shadow-amber-500/50'
                      : 'bg-slate-900/80 text-amber-300 border border-amber-400/60 hover:scale-110 hover:bg-amber-600 hover:text-white'
                  }`}
                >
                  <Binary className="w-4 h-4 animate-pulse" />
                  <span className="absolute -bottom-6 whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-950/90 text-slate-200 border border-slate-700/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {isArabic ? hotspot.titleAr.split(' ')[0] : hotspot.titleEn.split(' ')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption on Canvas */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-300 font-medium">
                {isArabic
                  ? '📍 اضغط على النقاط التفاعلية لاستكشاف فصول وبراهين كتاب الجبر والمقابلة'
                  : '📍 Click glowing algebra pins to inspect Al-Khwarizmi’s theorems & derivations'}
              </span>
              <span className="text-amber-400 font-mono font-bold text-[11px]">
                Bayt al-Hikma • 820 CE
              </span>
            </div>
          </div>

          {/* Active Hotspot Deep Inspection Card */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isContrast
                ? 'bg-black border-amber-400 text-white'
                : isLight
                ? 'bg-amber-50/60 border-amber-200 text-slate-900'
                : 'bg-slate-900/90 border-amber-500/30 text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                {activeHotspot.id}
              </span>
            </div>

            <h3 className="text-sm font-black mb-1.5 text-amber-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h3>

            <p className="text-xs leading-relaxed mb-3">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-amber-500/20 text-xs">
              <span className="font-bold text-amber-300 block mb-1">
                {isArabic ? 'التحليل الرياضي والمنهجي:' : 'Mathematical Analysis & Curriculum Anchor:'}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Geometric Completing the Square Engine (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-xl border flex flex-col gap-4 ${
              isContrast
                ? 'bg-black border-amber-400 text-white'
                : isLight
                ? 'bg-slate-50 border-slate-200 text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs sm:text-sm font-black">
                  {isArabic
                    ? 'محاكي إكمال المربع الهندسي (س² + ب س = جـ)'
                    : 'Geometric Completing the Square Engine'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setBCoeff(10);
                  setCConstant(39);
                }}
                className="text-[11px] font-bold text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            {/* Presets */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                {isArabic ? 'أمثلة الخوارزمي والمنهج القياسية:' : 'Canonical Prototypes:'}
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setBCoeff(preset.b);
                      setCConstant(preset.c);
                    }}
                    className={`py-1 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-start ${
                      bCoeff === preset.b && cConstant === preset.c
                        ? 'bg-amber-600 text-white border-amber-400 shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders for b and c */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-amber-400">{isArabic ? 'معامل الجذور (ب):' : 'Roots Coefficient (b):'}</span>
                  <span className="font-mono">{bCoeff}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="2"
                  value={bCoeff}
                  onChange={(e) => setBCoeff(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-orange-400">{isArabic ? 'العدد المعادل (جـ):' : 'Constant Number (c):'}</span>
                  <span className="font-mono">{cConstant}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="80"
                  step="1"
                  value={cConstant}
                  onChange={(e) => setCConstant(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Algebraic Derivation Steps */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center space-y-2">
              <span className="text-[11px] text-slate-400 font-bold block">
                {isArabic ? 'خطوات طريقة الخوارزمي في إكمال المربع:' : 'Al-Khwarizmi’s Stepwise Derivation:'}
              </span>
              <div className="text-sm sm:text-base font-black text-amber-400">
                x² + {bCoeff}x = {cConstant}
              </div>
              <div className="text-xs text-slate-300">
                (x + {halfB})² = {cConstant} + ({halfB})² = {cConstant} + {cornerSquareArea} = {totalCompletedArea}
              </div>
              <div className="text-xs text-emerald-400 font-bold">
                x + {halfB} = √{totalCompletedArea} = {sideCompletedSquare}
              </div>
              <div className="text-sm font-black text-orange-400 bg-amber-950/40 py-1 rounded-lg border border-amber-800/40">
                {isArabic ? 'الجذر الحقيقي الموجب (المال):' : 'Positive Root:'} x = {rootX}
                {negativeRootX < 0 && (
                  <span className="text-[11px] text-slate-400 block font-normal mt-0.5">
                    ({isArabic ? 'الجذر السالب الحديث:' : 'Modern negative root:'} x₂ = {negativeRootX})
                  </span>
                )}
              </div>
            </div>

            {/* Geometric Dissection Visualization */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-[10px] font-mono text-slate-400 mb-2">
                {isArabic ? 'التمثيل الهندسي للمربع المكتمل والأشرطة المستطيلة' : 'Geometric Dissection of Completed Square'}
              </span>
              <svg viewBox="0 0 240 220" className="w-full max-w-[220px] h-auto">
                {/* Central Square x^2 */}
                <rect
                  x="30"
                  y="30"
                  width="110"
                  height="110"
                  fill="rgba(245, 158, 11, 0.2)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text x="85" y="90" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
                  x²
                </text>

                {/* Right Rectangle: halfB * x */}
                <rect
                  x="140"
                  y="30"
                  width="55"
                  height="110"
                  fill="rgba(249, 115, 22, 0.2)"
                  stroke="#f97316"
                  strokeWidth="1.5"
                />
                <text x="167" y="90" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="bold">
                  {halfB}x
                </text>

                {/* Bottom Rectangle: halfB * x */}
                <rect
                  x="30"
                  y="140"
                  width="110"
                  height="55"
                  fill="rgba(249, 115, 22, 0.2)"
                  stroke="#f97316"
                  strokeWidth="1.5"
                />
                <text x="85" y="172" fill="#f97316" fontSize="10" textAnchor="middle" fontWeight="bold">
                  {halfB}x
                </text>

                {/* Corner Added Square: (halfB)^2 */}
                <rect
                  x="140"
                  y="140"
                  width="55"
                  height="55"
                  fill="rgba(16, 185, 129, 0.25)"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="3 2"
                />
                <text x="167" y="172" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                  ({halfB})²={cornerSquareArea}
                </text>

                {/* Outside Dimension Labels */}
                <text x="85" y="22" fill="#e2e8f0" fontSize="10" textAnchor="middle">
                  x
                </text>
                <text x="167" y="22" fill="#f97316" fontSize="10" textAnchor="middle">
                  {halfB}
                </text>
                <text x="18" y="90" fill="#e2e8f0" fontSize="10" textAnchor="middle">
                  x
                </text>
                <text x="18" y="172" fill="#f97316" fontSize="10" textAnchor="middle">
                  {halfB}
                </text>
              </svg>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'المميز العام (Δ = ب² + ٤جـ):' : 'Discriminant (Δ):'}
                </span>
                <span className="font-mono font-black text-amber-400 text-sm">
                  {discriminant}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'طول ضلع المربع المكتمل:' : 'Side of Completed Square:'}
                </span>
                <span className="font-mono font-black text-emerald-400 text-sm">
                  {sideCompletedSquare}
                </span>
              </div>
            </div>

            {/* Curricular Note */}
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-[11px] text-slate-300">
              <span className="font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ربط وثيق بمنهج الجبر للثانوية العامة:' : 'Egyptian Curriculum Integration:'}</span>
              </span>
              <span>
                {isArabic
                  ? 'طريقة إكمال المربع هي الأساس الرياضي المعتمد في المنهج لاستنتاج معادلة الدائرة والقطوع المخروطية وإيجاد جذور المعادلات التربيعية وحساب التكاملات الكسرية.'
                  : 'Completing the square is essential for circle equations, conic sections, rational integration, and solving quadratics in the Secondary stage.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Modal */}
      <HiResImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
