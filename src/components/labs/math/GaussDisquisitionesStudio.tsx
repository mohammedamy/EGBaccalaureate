import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Maximize2,
  RotateCcw,
  Clock,
  Layers,
} from 'lucide-react';
import gaussPhoto from '../../../assets/math/gauss_disquisitiones_arithmeticae_1801.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface GaussHotspot {
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

export const GAUSS_HOTSPOTS: GaussHotspot[] = [
  {
    id: 'modular_congruence_notation',
    xPct: 62.0,
    yPct: 38.0,
    titleAr: 'ابتكار رمز التطابق الحسابي (أ ≡ ب مود م)',
    titleEn: 'Invention of Modular Congruence Notation (a ≡ b mod m)',
    categoryAr: 'الحساب النمطي ونظرية الأعداد',
    categoryEn: 'Modular Arithmetic',
    descAr:
      'ابتكر غاوس في سن الحادية والعشرين رمز التطابق ثلاثي الخطوط (≡) في مطلع كتابه عام 1801، ليعبر عن تساوي بواقي قسمة عددين على معيار محدد م (أي: م يقسم أ - ب)، مما حول الحساب الدوري إلى نسق جبري متكامل هو حجر الأساس لعلم التشفير الرقمي المعاصر.',
    descEn:
      'At age 21, Gauss introduced the triple-bar congruence notation (a ≡ b mod m) in the opening chapter of Disquisitiones Arithmeticae. Stating that m divides (a - b), this transformed periodic remainder arithmetic into modern ring algebra, foundational for modern public-key cryptography (RSA).',
    scientificProofAr:
      'يشكل الحساب النمطي الأساس الرياضي المعتمد في خوارزميات التشفير الإلكتروني، وحسابات التقويم الدوري، ومسائل القسمة في الرياضيات المتقدمة.',
    scientificProofEn:
      'Direct mathematical underpinning of modular ring algebra Z/mZ, discrete logarithms, and internet data encryption protocols.',
  },
  {
    id: 'heptadecagon_cyclotomic_construction',
    xPct: 60.0,
    yPct: 53.0,
    titleAr: 'إنشاء المضلع المنتظم ذي الـ 17 ضلعاً بالفرجار والمسطرة (الباب السابع)',
    titleEn: 'Section VII: Constructibility of the Regular 17-gon (Heptadecagon)',
    categoryAr: 'معادلات تقسيم الدائرة',
    categoryEn: 'Cyclotomic Equations',
    descAr:
      'الاكتشاف المذهل لغاوس وهو في سن التاسعة عشرة عام 1796م، والمدون في الباب السابع؛ حيث حل لغزاً هندسياً استعصى منذ عهد إقليدس بإثبات إمكانية إنشاء مضلع منتظم ذي 17 ضلعاً باستخدام الفرجار والمسطرة فقط، لكون 17 عدداً أولياً فيرماتياً (F₂ = 2⁴ + 1 = 17).',
    descEn:
      'Gauss’s sensational 1796 breakthrough, presented in Section VII. Resolving a 2,000-year Euclidean puzzle, Gauss proved that a regular polygon of n sides is constructible with compass and straightedge if and only if n is the product of a power of 2 and distinct Fermat primes (F_k = 2^(2^k) + 1).',
    scientificProofAr:
      'تعتمد هذه النتيجة على ربط الجذور الدائرية المركبة للوحدة (Roots of Unity zⁿ = 1) بمبرهنة دي موافر في منهج الجبر للثانوية العامة.',
    scientificProofEn:
      'Connects directly to curriculum complex numbers: roots of unity (zⁿ = 1) and De Moivre’s trigonometric angle multiples.',
  },
  {
    id: 'fundamental_theorem_arithmetic',
    xPct: 35.0,
    yPct: 30.0,
    titleAr: 'المبرهنة الأساسية في الحساب (تحليل الأعداد لعواملها الأولية)',
    titleEn: 'Fundamental Theorem of Arithmetic (Unique Prime Factorization)',
    categoryAr: 'الأصول البرهانية',
    categoryEn: 'Foundations of Arithmetic',
    descAr:
      'أول صياغة برهانية صارمة للمبرهنة الأساسية في الحساب تنص على أن كل عدد صحيح أكبر من 1 يكتب كحاصل ضرب عوامل أولية بصورة وحيدة تماماً (باستثناء ترتيب العوامل)، مما يجعل الأعداد الأولية الذرات البنائية لكافة الأعداد الطبيعية.',
    descEn:
      'The first complete, rigorous deductive proof of the Fundamental Theorem of Arithmetic: every integer n > 1 admits an essentially unique factorization into prime numbers, establishing primes as the indivisible building blocks of mathematics.',
    scientificProofAr:
      'الأساس الأوثق لحساب القاسم المشترك الأكبر (GCD) والمضاعف المشترك الأصغر (LCM) وتبسيط الكسور الجبرية لجميع مراحل التعليم.',
    scientificProofEn:
      'Foundational principle for calculating greatest common divisors, least common multiples, and rational algebraic fraction reductions.',
  },
  {
    id: 'quadratic_reciprocity_law',
    xPct: 65.0,
    yPct: 22.0,
    titleAr: 'قانون التبادل التربيعي (المبرهنة الذهبية لغاوس)',
    titleEn: 'Law of Quadratic Reciprocity ("Theorema Aureum")',
    categoryAr: 'البواقي التربيعية',
    categoryEn: 'Quadratic Residues',
    descAr:
      'أطلق عليها غاوس لقب "المبرهنة الذهبية"، وتنص على وجود علاقة تبادلية عميقة بين إمكانية حل التطابق x² ≡ p (mod q) وإمكانية حل x² ≡ q (mod p) لعددين أوليين فرديين p و q، حيث قدم غاوس ثمانية براهين مختلفة كاملة لها خلال حياته.',
    descEn:
      'Dubbed by Gauss as the "Theorema Aureum" (Golden Theorem), it establishes a profound reciprocal relationship between the solvability of x² ≡ p (mod q) and x² ≡ q (mod p) for distinct odd primes, leading Gauss to devise eight distinct proofs.',
    scientificProofAr:
      'يعد هذا القانون النواة المركزية التي انبثق منها برنامج لانجلاندز الرياضي الحديث ونظرية الأعداد الجبرية الكلاسيكية.',
    scientificProofEn:
      'Core historic origin of class field theory and modern algebraic number theory.',
  },
  {
    id: 'compass_drafting_tools',
    xPct: 75.0,
    yPct: 75.0,
    titleAr: 'فرجار الدقة والريشة الفولاذية لجامعة غوتينغن',
    titleEn: 'Göttingen Precision Drafting Compass & Ruling Pen',
    categoryAr: 'أدوات غاوس التاريخية',
    categoryEn: 'Historical Instruments',
    descAr:
      'فرجار الصلب والنحاس عالي الدقة الذي استخدمه غاوس في إنشاءاته الهندسية الدقيقة وريشة الحبر الهندسية، مع بطاقة الإعارة الرسمية المحفوظة في خزانة مخطوطات جامعة غوتينغن الألمانية حيث ترأس غاوس المرصد الفلكي وقسم الرياضيات.',
    descEn:
      'The precision 19th-century brass compass and steel ruling pen used by Gauss, preserved alongside archival records at Göttingen University where Gauss served as director of the astronomical observatory.',
    scientificProofAr:
      'يخلد هذا الفرجار وصية غاوس بنقش مضلع الـ 17 ضلعاً المنتظم على شاهد قبره تكريماً لأحب اكتشافاته الهندسية إلى قلبه.',
    scientificProofEn:
      'Commemorates Gauss’s famous request that a regular 17-gon be carved upon his memorial tombstone in honour of his discovery.',
  },
];

export const GaussDisquisitionesStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<GaussHotspot>(GAUSS_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Modular Arithmetic Congruence Solver Engine: a * x ≡ b (mod m)
  const [modulusM, setModulusM] = useState<number>(12); // standard clock modulus
  const [coeffA, setCoeffA] = useState<number>(5);
  const [targetB, setTargetB] = useState<number>(1);

  const presets = [
    { label: 'ساعة الحساب النمطي (م = ١٢)', m: 12, a: 5, b: 1 },
    { label: 'أيام الأسبوع الدورية (م = ٧)', m: 7, a: 3, b: 2 },
    { label: 'أوليات فيرما لغاوس (م = ١٧)', m: 17, a: 3, b: 1 },
    { label: 'مجموعة البواقي الأولية (م = ٥)', m: 5, a: 4, b: 3 },
  ];

  // Helper: Greatest Common Divisor (Euclidean algorithm)
  const gcd = (x: number, y: number): number => {
    let a = Math.abs(x);
    let b = Math.abs(y);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const g = gcd(coeffA, modulusM);
  const isSolvable = targetB % g === 0;

  // Find all solutions x in 0 <= x < modulusM
  const solutions: number[] = [];
  if (isSolvable) {
    for (let x = 0; x < modulusM; x++) {
      if ((coeffA * x) % modulusM === targetB % modulusM) {
        solutions.push(x);
      }
    }
  }

  // Euler Totient Function phi(m)
  let totient = 0;
  for (let i = 1; i <= modulusM; i++) {
    if (gcd(i, modulusM) === 1) totient++;
  }

  const modalData: HiResImageModalData = {
    imageUrl: gaussPhoto,
    titleAr: 'طبعة لايبزيغ الأولى لكتاب أبحاث في الحساب - كارل فريدريش غاوس (1801م)',
    titleEn: 'Carl Friedrich Gauss’s Disquisitiones Arithmeticae: First Edition (Leipzig, 1801 CE)',
    subtitleAr: 'رمز التطابق الحسابي (≡)، إنشاء مضلع الـ 17 ضلعاً، والمبرهنة الأساسية في الحساب',
    subtitleEn: 'Modular Congruence Notation, Regular 17-gon Cyclotomic Construction & Number Theory',
    descriptionAr:
      'معروضة متحفية عظيمة تمثل حجر الزاوية لنظرية الأعداد الحديثة، من مقتنيات جامعة غوتينغن الألمانية. يعرض المجلد المفتوح الباب السابع الخاص بإنشاء المضلع المنتظم ذي الـ 17 ضلعاً بالمسطرة والفرجار، وتتجاور مع فرجار غاوس النحاسي وريشة التخطيط الأصلية.',
    descriptionEn:
      'A monumental first edition artifact published in Leipzig in 1801, universally hailed as the Magna Carta of modern number theory. The open folio displays Section VII detailing the constructibility of the regular 17-gon, flanked by Gauss’s brass precision compass and steel ruling pen from Göttingen.',
    dateOrEraAr: 'عصر التنوير ونشأة الرياضيات الحديثة (1801 ميلادية)',
    dateOrEraEn: 'Age of Enlightenment & Rise of Modern Mathematics (1801 CE)',
    locationAr: 'مكتبة جامعة غوتينغن، ألمانيا / متحف تاريخ العلوم، غوتينغن',
    locationEn: 'Göttingen State and University Library, Germany',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-purple-400 text-white'
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
                ? 'bg-black border-purple-400 text-purple-400'
                : 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white border-purple-400/40 shadow-purple-500/20'
            }`}
          >
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic
                  ? 'استوديو غاوس وأبحاث الحساب النمطي (1801م) - 4K'
                  : 'Gauss’s Disquisitiones Arithmeticae & Modular Studio (1801 CE) - 4K'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-purple-400 text-black border-purple-300'
                    : isLight
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-purple-950/60 text-purple-300 border-purple-800/60'
                }`}
              >
                Archival 4K Studio
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'طبعة لايبزيغ الأولى 1801، رمز التطابق (≡)، مضلع الـ 17 ضلعاً، حلقة بواقي القسمة، وأدوات غوتينغن'
                : 'First 1801 Leipzig edition, congruence symbol (≡), regular 17-gon construction, and Göttingen tools'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            isContrast
              ? 'bg-purple-400 text-black border-purple-300 hover:bg-purple-300'
              : 'bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border-purple-500/40'
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
              src={gaussPhoto}
              alt="Gauss Disquisitiones Arithmeticae 1801 4K Archival Folio"
              className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Interactive Hotspots Overlaid */}
            {GAUSS_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  style={{ top: `${hotspot.yPct}%`, left: `${hotspot.xPct}%` }}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-purple-500 text-white ring-4 ring-purple-400/50 scale-125 shadow-lg shadow-purple-500/50'
                      : 'bg-slate-900/80 text-purple-300 border border-purple-400/60 hover:scale-110 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  <Clock className="w-4 h-4 animate-pulse" />
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
                  ? '📍 اضغط على النقاط التفاعلية لفحص نصوص وبراهين كتاب أبحاث في الحساب لغاوس'
                  : '📍 Click glowing pins to inspect Gauss’s modular arithmetic & cyclotomic proofs'}
              </span>
              <span className="text-purple-400 font-mono font-bold text-[11px]">
                Leipzig • 1801 CE
              </span>
            </div>
          </div>

          {/* Active Hotspot Deep Inspection Card */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isContrast
                ? 'bg-black border-purple-400 text-white'
                : isLight
                ? 'bg-purple-50/60 border-purple-200 text-slate-900'
                : 'bg-slate-900/90 border-purple-500/30 text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                {activeHotspot.id}
              </span>
            </div>

            <h3 className="text-sm font-black mb-1.5 text-purple-400">
              {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
            </h3>

            <p className="text-xs leading-relaxed mb-3">
              {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-purple-500/20 text-xs">
              <span className="font-bold text-purple-300 block mb-1">
                {isArabic ? 'التحليل الرياضي ونظرية الأعداد:' : 'Number Theory Significance & Modern Cryptography:'}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Modular Arithmetic Congruence Solver Engine (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className={`p-4 rounded-xl border flex flex-col gap-4 ${
              isContrast
                ? 'bg-black border-purple-400 text-white'
                : isLight
                ? 'bg-slate-50 border-slate-200 text-slate-900'
                : 'bg-slate-900/90 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs sm:text-sm font-black">
                  {isArabic
                    ? 'محاكي التطابقات والحساب النمطي (أ س ≡ ب مود م)'
                    : 'Modular Congruence Solver Engine'}
                </h3>
              </div>
              <button
                onClick={() => {
                  setModulusM(12);
                  setCoeffA(5);
                  setTargetB(1);
                }}
                className="text-[11px] font-bold text-slate-400 hover:text-purple-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            {/* Presets */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                {isArabic ? 'نماذج قياسية للحساب النمطي لغاوس:' : 'Canonical Modular Prototypes:'}
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setModulusM(preset.m);
                      setCoeffA(preset.a);
                      setTargetB(preset.b);
                    }}
                    className={`py-1 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-start ${
                      modulusM === preset.m && coeffA === preset.a && targetB === preset.b
                        ? 'bg-purple-600 text-white border-purple-400 shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders for m, a, and b */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-purple-400">{isArabic ? 'المعيار النمطي (م):' : 'Modulus (m):'}</span>
                  <span className="font-mono">{modulusM}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="24"
                  step="1"
                  value={modulusM}
                  onChange={(e) => setModulusM(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-indigo-400">{isArabic ? 'المعامل المضروب (أ):' : 'Multiplier (a):'}</span>
                  <span className="font-mono">{coeffA}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={Math.max(1, modulusM - 1)}
                  step="1"
                  value={Math.min(coeffA, modulusM - 1)}
                  onChange={(e) => setCoeffA(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-pink-400">{isArabic ? 'الهدف المتبقي (ب):' : 'Target Remainder (b):'}</span>
                  <span className="font-mono">{targetB}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.max(0, modulusM - 1)}
                  step="1"
                  value={Math.min(targetB, modulusM - 1)}
                  onChange={(e) => setTargetB(Number(e.target.value))}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Congruence Equation & Solution Display */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center space-y-2">
              <span className="text-[11px] text-slate-400 font-bold block">
                {isArabic ? 'صيغة تطابق غاوس الحسابي (≡):' : 'Gauss Congruence Equation:'}
              </span>
              <div className="text-base sm:text-lg font-black text-purple-400">
                {coeffA}x ≡ {targetB} (mod {modulusM})
              </div>
              <div className="text-xs text-slate-300">
                gcd({coeffA}, {modulusM}) = {g} • {isSolvable ? `${g} | ${targetB} (قابلة للحل)` : `${g} ∤ ${targetB} (مستحيلة الحل)`}
              </div>
              <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/40 text-xs font-bold">
                {isSolvable && solutions.length > 0 ? (
                  <span className="text-emerald-400">
                    {isArabic ? 'مجموعة الحلول في حلقة البواقي ℤ/' : 'Solutions in ℤ/'}
                    {modulusM}ℤ: x ∈ {'{'} {solutions.join(', ')} {'}'}
                  </span>
                ) : (
                  <span className="text-rose-400">
                    {isArabic ? 'لا يوجد حل صحيح في مجموعة الأعداد الصحيحة' : 'No integer solution exists'}
                  </span>
                )}
              </div>
            </div>

            {/* Circular Modular Clock Visualization */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <span className="text-[10px] font-mono text-slate-400 mb-2">
                {isArabic ? `قرص ساعة الحساب النمطي ℤ/${modulusM}ℤ` : `Modular Clock Dial ℤ/${modulusM}ℤ`}
              </span>
              <svg viewBox="-85 -85 170 170" className="w-full max-w-[200px] h-auto">
                <circle cx="0" cy="0" r="70" fill="none" stroke="#334155" strokeWidth="1.5" />
                {Array.from({ length: modulusM }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / modulusM - Math.PI / 2;
                  const x = 70 * Math.cos(angle);
                  const y = 70 * Math.sin(angle);
                  const textX = 54 * Math.cos(angle);
                  const textY = 54 * Math.sin(angle) + 3;
                  const isSolution = solutions.includes(i);
                  return (
                    <g key={i}>
                      {isSolution && (
                        <line x1="0" y1="0" x2={x} y2={y} stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
                      )}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSolution ? '5' : '3.5'}
                        fill={isSolution ? '#10b981' : '#64748b'}
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                      <text
                        x={textX}
                        y={textY}
                        fill={isSolution ? '#34d399' : '#94a3b8'}
                        fontSize="9"
                        textAnchor="middle"
                        fontWeight={isSolution ? 'bold' : 'normal'}
                      >
                        {i}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Totient and Invertibility Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'دالة أويلر للمؤشر φ(م):' : 'Euler Totient φ(m):'}
                </span>
                <span className="font-mono font-black text-purple-400 text-sm">
                  {totient} عناصر
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">
                  {isArabic ? 'هل المعكوس الضربي موجود؟' : 'Modular Inverse Exists?'}
                </span>
                <span className={`font-mono font-black text-sm ${g === 1 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {g === 1 ? (isArabic ? 'نعم (أوليان نسبياً)' : 'Yes (Coprime)') : (isArabic ? 'لا (غير موجود)' : 'No')}
                </span>
              </div>
            </div>

            {/* Curricular Note */}
            <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[11px] text-slate-300">
              <span className="font-bold text-purple-400 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isArabic ? 'ربط وثيق بمنهج الجبر والأعداد المركبة:' : 'Egyptian Curriculum Integration:'}</span>
              </span>
              <span>
                {isArabic
                  ? 'الحساب النمطي هو الأساس الحاكم لقوى الوحدة التخيلية ت (ت¹ = ت، ت² = -1، ت³ = -ت، ت⁴ = 1 مود 4) والجذور التكعيبية للواحد الصحيح (أوميجا 1، ω، ω² مود 3) في منهج الثانوية العامة.'
                  : 'Modular arithmetic directly governs imaginary unit powers i^n (mod 4) and complex cube roots of unity 1, ω, ω^2 (mod 3) in curriculum algebra.'}
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
