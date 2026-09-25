import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Atom,
  CheckCircle2,
} from 'lucide-react';
import mendeleevPhoto from '../../../assets/chemistry/mendeleev_periodic_system_1869.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface MendeleevHotspot {
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

export const MENDELEEV_HOTSPOTS: MendeleevHotspot[] = [
  {
    id: 'mendeleev_manuscript_heading',
    xPct: 50.0,
    yPct: 15.0,
    titleAr: 'عنوان مسودة بطرسبورغ الأصلية (فبراير 1869م)',
    titleEn: 'Saint Petersburg Manuscript Heading (February 1869 CE)',
    categoryAr: 'الوثائق التاريخية التأسيسية',
    categoryEn: 'Foundational Historical Documents',
    descAr:
      'العنوان الأصلي المكتوب بخط يد مندليف بالروسية: "تجربة لنظام العناصر المبني على أوزانها الذرية وتشابهها الكيميائي" مع الختم الشمعي للأكاديمية الإمبراطورية الروسية للعلوم.',
    descEn:
      'Mendeleev’s original handwritten Russian heading: "An Attempt at a System of Elements Based on Their Atomic Weights and Chemical Affinity", sealed by the Imperial Russian Academy of Sciences in February 1869.',
    scientificProofAr:
      'صياغة القانون الدوري الأول في التاريخ: "خواص العناصر ومركباتها هي دوال دورية لأوزانها الذرية"، والتي نظمت 63 عنصراً معروفاً آنذاك.',
    scientificProofEn:
      'Formulated the first Periodic Law: "The properties of elements and compounds are periodic functions of their atomic weights", organizing all 63 known elements.',
  },
  {
    id: 'eka_aluminum_prediction',
    xPct: 62.0,
    yPct: 58.0,
    titleAr: 'فجوة إيكا-ألومنيوم المتوقعة (؟ = 68 → الجاليوم Ga)',
    titleEn: 'Eka-Aluminium Prediction Gap (? = 68 → Gallium, Z=31)',
    categoryAr: 'التنبؤات الدورية العبقرية',
    categoryEn: 'Genius Periodic Predictions',
    descAr:
      'ترك مندليف فراغاً حاملاً علامة استفهام ووزناً تقريبياً 68 أسفل الألومنيوم، متنبئاً بمعدن كثافته 5.9 غ/سم³ ينصهر عند حرارة اليد وأكسيده Ea₂O₃.',
    descEn:
      'Mendeleev left an empty slot with "? = 68" beneath Aluminium, predicting a metal with density 5.9 g/cm³, low melting point near hand warmth, and oxide Ea₂O₃.',
    scientificProofAr:
      'اكتشف العالم الفرنسي ليكوك دو بواسبودران عنصر الجاليوم عام 1875 بوزن ذري 69.7 وكثافة 5.91 غ/سم³ ودرجة انصهار 29.8°م مطابقة لنبوءة مندليف بدقة 99%.',
    scientificProofEn:
      'French chemist Lecoq de Boisbaudran discovered Gallium in 1875 (atomic weight 69.7, density 5.91 g/cm³, mp 29.8°C), confirming Mendeleev with 99% accuracy.',
  },
  {
    id: 'eka_silicon_prediction',
    xPct: 74.0,
    yPct: 58.0,
    titleAr: 'فجوة إيكا-سيليكون المتوقعة (؟ = 70 → الجرمانيوم Ge)',
    titleEn: 'Eka-Silicon Prediction Gap (? = 70 → Germanium, Z=32)',
    categoryAr: 'التنبؤات الدورية العبقرية',
    categoryEn: 'Genius Periodic Predictions',
    descAr:
      'توقع مندليف عنصراً رمادياً شبه موصل وزنه الذري 70 يقع أسفل السيليكون، بكثافة 5.5 غ/سم³، وأكسيد EsO₂ عالي المقاومة للانصهار ورابع كلوريد سائل EsCl₄ يغلي عند أقل من 100°م.',
    descEn:
      'Predicted a grayish metalloid with atomic weight ~70 below Silicon, density 5.5 g/cm³, refractory dioxide EsO₂, and volatile liquid tetrachloride EsCl₄ boiling below 100°C.',
    scientificProofAr:
      'اكتشف كليمنس فينكلر الجرمانيوم عام 1886 بوزن ذري 72.6 وكثافة 5.35 غ/سم³، مما جعل المجتمع العلمي يسلّم بصحة الجدول الدوري كحقيقة كونية لا تقبل الشك.',
    scientificProofEn:
      'Clemens Winkler isolated Germanium in 1886 (atomic weight 72.6, density 5.35 g/cm³, GeCl₄ bp 84°C), cementing the Periodic Table into universal chemical dogma.',
  },
  {
    id: 'atomic_weight_periodicity',
    xPct: 40.0,
    yPct: 50.0,
    titleAr: 'تدرج الأوزان الذرية وتناقضات مندليف (Atomic Weight Anomalies)',
    titleEn: 'Atomic Weight Succession & Mendeleev’s Inversion Intuition',
    categoryAr: 'الترتيب الدوري والتكافؤ',
    categoryEn: 'Valence Periodicity & Inversion Logic',
    descAr:
      'رتب مندليف العناصر تصاعدياً حسب كتلها الذرية، لكنه قدم كيميائية التشابه في الخواص على الوزن الحسابي، فبدل موضع التيلوريوم (127.6) واليود (126.9) واثقاً أن أوزانهما الذرية بها خطأ قياس.',
    descEn:
      'Mendeleev arranged elements ascending by atomic mass, but prioritized chemical valence and properties over raw arithmetic weight, boldly inverting Tellurium (127.6) and Iodine (126.9).',
    scientificProofAr:
      'أثبت اكتشاف النظائر ومفهوم العدد الذري لاحقاً أن اليود يمتلك 53 بروتوناً بينما التيلوريوم 52، مما أكد حدس مندليف العبقري في الترتيب.',
    scientificProofEn:
      'Isotope discovery proved Iodine has 53 protons while Tellurium has 52, validating Mendeleev’s structural intuition despite heavier average atomic mass.',
  },
  {
    id: 'moseley_modern_correction',
    xPct: 60.0,
    yPct: 80.0,
    titleAr: 'تعديل موزلي وقانون العدد الذري الحديث (Henry Moseley 1913)',
    titleEn: 'Henry Moseley’s 1913 X-Ray Law: Ordering by Atomic Number (Z)',
    categoryAr: 'الكيمياء الذرية الحديثة',
    categoryEn: 'Modern Atomic Physics & X-Ray Spectroscopy',
    descAr:
      'استخدم هنري موزلي مطياف الأشعة السينية لاكتشاف أن تردد الخطوط المميزة يتناسب طردياً مع مربع شحنة النواة الموجبة (√ν ∝ Z)، معيداً ترتيب الجدول وفق العدد الذري Z بدلاً من الوزن الذري.',
    descEn:
      'Henry Moseley used X-ray spectroscopy to prove characteristic line frequencies are proportional to nuclear positive charge (√ν ∝ Z), realigning the Periodic Table strictly by atomic number.',
    scientificProofAr:
      'العدد الذري (عدد البروتونات في النواة) هو الأساس الحقيقي للدورية الكيميائية ومبدأ البناء التصاعدي للأغلفة الإلكترونية في منهج الثانوية العامة المصرية.',
    scientificProofEn:
      'Atomic number (proton count) is the true criterion of chemical periodicity, underpinning the modern long-form periodic table and electronic configurations.',
  },
];

export const MendeleevPeriodicStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<MendeleevHotspot>(MENDELEEV_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Predictive Accuracy Benchmarking Simulator
  const [selectedPredictedElement, setSelectedPredictedElement] = useState<'Ga' | 'Ge' | 'Sc'>('Ga');

  const predictiveData = {
    Ga: {
      nameAr: 'إيكا-ألومنيوم (Eka-Aluminium) ← الجاليوم (Gallium, Z=31)',
      nameEn: 'Eka-Aluminium → Gallium (Ga, Z=31)',
      discoveredBy: 'Lecoq de Boisbaudran (1875)',
      properties: [
        { nameAr: 'الوزن الذري التقريبي', nameEn: 'Atomic Weight', pred: '68', actual: '69.72', unit: 'u', acc: '97.5%' },
        { nameAr: 'كثافة العنصر', nameEn: 'Density', pred: '5.9', actual: '5.91', unit: 'g/cm³', acc: '99.8%' },
        { nameAr: 'درجة الانصهار', nameEn: 'Melting Point', pred: 'منخفضة (حرارة اليد)', actual: '29.76', unit: '°C', acc: '100%' },
        { nameAr: 'صيغة الأكسيد', nameEn: 'Oxide Formula', pred: 'Ea₂O₃', actual: 'Ga₂O₃', unit: '', acc: '100%' },
        { nameAr: 'صيغة الكلوريد', nameEn: 'Chloride Formula', pred: 'EaCl₃', actual: 'GaCl₃', unit: '', acc: '100%' },
      ],
    },
    Ge: {
      nameAr: 'إيكا-سيليكون (Eka-Silicon) ← الجرمانيوم (Germanium, Z=32)',
      nameEn: 'Eka-Silicon → Germanium (Ge, Z=32)',
      discoveredBy: 'Clemens Winkler (1886)',
      properties: [
        { nameAr: 'الوزن الذري التقريبي', nameEn: 'Atomic Weight', pred: '72', actual: '72.63', unit: 'u', acc: '99.1%' },
        { nameAr: 'كثافة العنصر', nameEn: 'Density', pred: '5.5', actual: '5.32', unit: 'g/cm³', acc: '96.7%' },
        { nameAr: 'درجة غليان رابع الكلوريد', nameEn: 'Tetrachloride Boiling Pt', pred: '< 100', actual: '84.0', unit: '°C', acc: '100%' },
        { nameAr: 'صيغة الأكسيد', nameEn: 'Oxide Formula', pred: 'EsO₂', actual: 'GeO₂', unit: '', acc: '100%' },
        { nameAr: 'كثافة الأكسيد', nameEn: 'Oxide Density', pred: '4.7', actual: '4.23', unit: 'g/cm³', acc: '90.0%' },
      ],
    },
    Sc: {
      nameAr: 'إيكا-بورون (Eka-Boron) ← السكانديوم (Scandium, Z=21)',
      nameEn: 'Eka-Boron → Scandium (Sc, Z=21)',
      discoveredBy: 'Lars Fredrik Nilson (1879)',
      properties: [
        { nameAr: 'الوزن الذري التقريبي', nameEn: 'Atomic Weight', pred: '44', actual: '44.96', unit: 'u', acc: '97.9%' },
        { nameAr: 'كثافة العنصر', nameEn: 'Density', pred: '3.0', actual: '2.99', unit: 'g/cm³', acc: '99.7%' },
        { nameAr: 'صيغة الأكسيد', nameEn: 'Oxide Formula', pred: 'Eb₂O₃', actual: 'Sc₂O₃', unit: '', acc: '100%' },
        { nameAr: 'كثافة الأكسيد', nameEn: 'Oxide Density', pred: '3.5', actual: '3.86', unit: 'g/cm³', acc: '90.7%' },
        { nameAr: 'السلوك الكيميائي', nameEn: 'Chemical Nature', pred: 'قاعدي غير ذائب', actual: 'أكسيد قاعدي غير ذائب', unit: '', acc: '100%' },
      ],
    },
  };

  const currentPred = predictiveData[selectedPredictedElement];

  const modalData: HiResImageModalData = {
    imageUrl: mendeleevPhoto,
    titleAr: 'مخطوطة النظام الدوري الأصلية: ديمتري مندليف (فبراير 1869م)',
    titleEn: 'Dmitri Mendeleev’s 1869 Saint Petersburg Periodic System Manuscript',
    subtitleAr: 'صياغة القانون الدوري، فراغات التنبؤ بالعناصر غير المكتشفة، وتدرج الأوزان الذرية',
    subtitleEn: 'Periodic Law Formulation, Predicted Element Gaps (?=45, ?=68, ?=70) & Atomic Mass Periodicity',
    descriptionAr:
      'كُتبت هذه الوثيقة الأثرية التاريخية في سانت بطرسبورغ بروسيا عام 1869م، وتعد أهم وثيقة كيميائية في التاريخ البشري، حيث تنبأ فيها مندليف بدقة مذهلة بوجود عناصر مجهولة قبل اكتشافها بعقود.',
    descriptionEn:
      'Penned by Dmitri Mendeleev in St. Petersburg in February 1869, this historic manuscript revolutionized physical science by tabulating 63 elements and audaciously predicting undiscovered elements with quantifiable metrics.',
    dateOrEraAr: 'عصر الإمبراطورية الروسية وتأسيس الكيمياء الحديثة (1869م)',
    dateOrEraEn: 'Russian Imperial Academy & Modern Chemistry Era (1869 CE)',
    locationAr: 'متحف أرشيف مندليف، جامعة سانت بطرسبورغ، روسيا',
    locationEn: 'Mendeleev Museum-Archive, Saint Petersburg State University, Russia',
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
            <Atom className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                1869 CE • Periodic Law
              </span>
              <span className="text-xs text-emerald-500/80 font-mono">4K Archival Manuscript</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو ديمتري مندليف ومخطوطة الجدول الدوري والتنبؤ بالعناصر (1869م)'
                : 'Mendeleev 1869: Periodic Law & Predictive Discovery Studio'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير مخطوطة مندليف 4K' : 'Inspect 4K Manuscript'}</span>
        </button>
      </div>

      {/* 4K Archival Canvas with Hotspot Markers */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden mt-6 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={mendeleevPhoto}
          alt="Dmitri Mendeleev 1869 Periodic System Manuscript"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Pulsing Hotspots */}
        {MENDELEEV_HOTSPOTS.map((h) => {
          const isActive = activeHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-transform ${
                isActive ? 'scale-125' : 'hover:scale-110'
              }`}
              title={isArabic ? h.titleAr : h.titleEn}
              aria-label={isArabic ? h.titleAr : h.titleEn}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-emerald-400' : 'bg-emerald-500/50'
                  }`}
                />
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-emerald-400 border-white text-black'
                      : 'bg-black/80 border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                </span>
              </div>
            </button>
          );
        })}

        {/* Bottom Metadata Ribbon */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-300">
            <span>{isArabic ? '📜 المخطوطة الأصلية: أكاديمية العلوم بسانت بطرسبورغ (1869)' : '📜 Original Folio: St. Petersburg Academy (1869)'}</span>
            <span>•</span>
            <span>{isArabic ? '❓ نبوءات مندليف: ؟=45 (Sc) • ؟=68 (Ga) • ؟=70 (Ge)' : '❓ Predictions: ?=45 (Sc) • ?=68 (Ga) • ?=70 (Ge)'}</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            {isArabic ? 'انقر على النقاط الذهبية للفحص' : 'Click pulsing markers for deep analysis'}
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-emerald-50/60 border-emerald-200 shadow-xs'
            : 'bg-emerald-950/20 border-emerald-800/40'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block font-mono">
                {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-emerald-400">
                {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
              </h3>
            </div>
          </div>
        </div>

        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
        </p>

        <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
          <span className="font-black text-emerald-400 flex items-center gap-1.5 mb-1">
            <Info className="w-4 h-4 shrink-0" />
            <span>{isArabic ? 'البرهان الكيميائي والاستنتاج الوزاري:' : 'Periodic Proof & MoE Curriculum Focus:'}</span>
          </span>
          <p className={isLight ? 'text-slate-800 font-medium' : 'text-slate-200'}>
            {isArabic ? activeHotspot.scientificProofAr : activeHotspot.scientificProofEn}
          </p>
        </div>
      </div>

      {/* Interactive Predictive Accuracy Benchmark Engine */}
      <div
        className={`mt-6 p-4 sm:p-5 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-emerald-400'
            : isLight
            ? 'bg-white border-slate-200 shadow-sm'
            : 'bg-slate-900/90 border-slate-800 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-emerald-500/20 flex-wrap">
          <div className="flex items-center gap-2">
            <Atom className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-emerald-400">
              {isArabic
                ? 'محاكي دقة نبوءات مندليف الخارقة: المقارنة المعملية بين المتوقع والمكتشف'
                : 'Mendeleev Predictive Accuracy Benchmark: Predicted vs Discovered'}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
            Average Accuracy &gt; 98%
          </span>
        </div>

        {/* Element Selection Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          {(['Ga', 'Ge', 'Sc'] as const).map((el) => (
            <button
              key={el}
              onClick={() => setSelectedPredictedElement(el)}
              className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                selectedPredictedElement === el
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300'
              }`}
            >
              {el === 'Ga' && (isArabic ? 'الجاليوم (إيكا-ألومنيوم 1875)' : 'Gallium (Eka-Aluminium, 1875)')}
              {el === 'Ge' && (isArabic ? 'الجرمانيوم (إيكا-سيليكون 1886)' : 'Germanium (Eka-Silicon, 1886)')}
              {el === 'Sc' && (isArabic ? 'السكانديوم (إيكا-بورون 1879)' : 'Scandium (Eka-Boron, 1879)')}
            </button>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
          <span className="font-bold text-emerald-300">{isArabic ? currentPred.nameAr : currentPred.nameEn}</span>
          <span className="text-[11px] text-slate-400 font-mono">
            {isArabic ? `اكتشفه: ${currentPred.discoveredBy}` : `Discovered by: ${currentPred.discoveredBy}`}
          </span>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-xs text-start font-mono border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                <th className="p-3 text-start">{isArabic ? 'الخاصية الكيميائية / الفيزيائية' : 'Physical/Chemical Property'}</th>
                <th className="p-3 text-center text-amber-400">{isArabic ? 'تنبؤ مندليف (1869)' : 'Mendeleev Prediction (1869)'}</th>
                <th className="p-3 text-center text-emerald-400">{isArabic ? 'القيمة المعملية الفعلية' : 'Actual Discovered Value'}</th>
                <th className="p-3 text-center text-cyan-400">{isArabic ? 'نسبة التطابق' : 'Accuracy Match'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {currentPred.properties.map((prop, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-sans font-medium text-slate-200">
                    {isArabic ? prop.nameAr : prop.nameEn}
                  </td>
                  <td className="p-3 text-center font-bold text-amber-300">
                    {prop.pred} {prop.unit}
                  </td>
                  <td className="p-3 text-center font-bold text-emerald-300">
                    {prop.actual} {prop.unit}
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/50">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {prop.acc}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4K Modal Integration */}
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
