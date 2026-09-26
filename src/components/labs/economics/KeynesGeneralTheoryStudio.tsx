import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  TrendingUp,
} from 'lucide-react';
import keynesPhoto from '../../../assets/economics/keynes_general_theory_1936.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface KeynesHotspot {
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

export const KEYNES_HOTSPOTS: KeynesHotspot[] = [
  {
    id: 'aggregate_effective_demand',
    xPct: 48.0,
    yPct: 52.0,
    titleAr: 'الطلب الفعلي الكلي وتفنيد قانون ساي (Aggregate Demand)',
    titleEn: 'Aggregate Effective Demand & Refutation of Say’s Law',
    categoryAr: 'النظرية الكلية للتشغيل والدخل',
    categoryEn: 'Macroeconomic Equilibrium & Employment',
    descAr:
      'الثورة الفكرية الكبرى التي قادها جون ماينارد كينز عام 1936 نسفاً للمسلّمة الكلاسيكية القديمة المسماة "قانون ساي" (العرض يخلق طلبه الخاص). أثبت كينز أن حجم الإنتاج والتشغيل في الاقتصاد لا يتحدد بالطاقة الإنتاجية بل بحجم "الطلب الفعلي الكلي" (Y = C + I + G + NX)، وأن الاقتصاد يمكن أن يستقر في حالة توازن طويل الأجل مع وجود بطالة ركودية حادة.',
    descEn:
      'Keynes’s revolutionary refutation of classical Say’s Law ("Supply creates its own demand"). Keynes demonstrated that national output and employment are determined by aggregate effective demand (Y = C + I + G + NX), and that economies can remain indefinitely stuck in an underemployment equilibrium.',
    scientificInsightAr:
      'أرسى كينز علم الاقتصاد الكلي (Macroeconomics) الحديث، مبرهناً أن خفض الأجور في فترات الركود يعمق الأزمة لأنه يقلص القوة الشرائية والاستهلاك.',
    scientificInsightEn:
      'Founded modern macroeconomics, proving that wage cuts during depressions exacerbate crises by reducing workers’ purchasing power and aggregate consumption.',
  },
  {
    id: 'mpc_and_fiscal_multiplier',
    xPct: 58.0,
    yPct: 48.0,
    titleAr: 'الميل الحدي للاستهلاك والمضاعف الكينزي (k = 1 / 1-MPC)',
    titleEn: 'Marginal Propensity to Consume & The Fiscal Multiplier',
    categoryAr: 'معادلات الدخل القومي والإنفاق',
    categoryEn: 'National Income Multiplier Theory',
    descAr:
      'المعادلة الموضحة في الفصل العاشر من المخطوط: "مضاعف الاستثمار والإنفاق الحكومي" k = 1 / (1 - MPC). عندما تضخ الدولة جنيهاً واحداً في الاستثمار أو الإنفاق العام، فإن هذا الجنيه لا يزيد الدخل القومي بمقداره فقط، بل بمضاعف هندسي يولد دخولاً جديدة في جولات استهلاكية متتابعة.',
    descEn:
      'The celebrated Chapter 10 formula prominent on the page: the investment multiplier k = 1 / (1 - MPC) = 1 / MPS. An initial injection of government expenditure or investment multiplies across successive rounds of consumer re-spending, generating a multiple increase in national income.',
    scientificInsightAr:
      'إذا كان الميل الحدي للاستهلاك 0.80 (80%)، فإن المضاعف يساوي 5؛ أي أن إنفاق 10 مليارات جنيه يولد 50 مليار جنيه دخلاً قومياً إجمالياً.',
    scientificInsightEn:
      'With an MPC of 0.80, the multiplier k equals 5: a $10B fiscal stimulus expands aggregate national income by a staggering $50B.',
  },
  {
    id: 'cambridge_kings_college_desk',
    xPct: 25.0,
    yPct: 62.0,
    titleAr: 'مكتب كلية كينجز بكامبريدج وطبعة 1936 (Macmillan Folio)',
    titleEn: 'King’s College Cambridge Desk & 1936 First Edition',
    categoryAr: 'الوثائق الأرشيفية وتاريخ الفكر الاقتصادي',
    categoryEn: 'Historical Publishing & Archives',
    descAr:
      'المجلد الأزرق الأصيل الصادر عن دار ماكميلان في لندن بفبراير 1936، مستقراً على مكتب كينز الخشبي العريق في كلية كينجز بجامعة كامبريدج، بجوار قلم الحبر السائل، والمسطرة الحاسبة، وسندات خزانة بنك إنجلترا الرسمية لعام 1936.',
    descEn:
      'The authentic teal-bound first edition published by Macmillan & Co. in February 1936, resting on Keynes’s study desk at King’s College, Cambridge, alongside his celluloid fountain pen, calculating slide rule, and Bank of England treasury loan documents.',
    scientificInsightAr:
      'كتب كينز هذا المصنف التاريخي استجابة لكارثة الكساد الكبير (1929-1933) التي عجزت النظريات الكلاسيكية عن تفسيرها أو معالجتها.',
    scientificInsightEn:
      'Composed in direct response to the Great Depression of 1929–1933, delivering the theoretical rationale that saved market economies through targeted fiscal policy.',
  },
  {
    id: 'liquidity_preference_money_demand',
    xPct: 48.0,
    yPct: 82.0,
    titleAr: 'نظرية تفضيل السيولة والطلب على النقود (Liquidity Preference)',
    titleEn: 'Liquidity Preference & The Three Motives for Money Demand',
    categoryAr: 'النقود والبنوك وأسعار الفائدة',
    categoryEn: 'Monetary Economics & Interest Rate',
    descAr:
      'تفسير كينز الثوري لسعر الفائدة؛ حيث لا يتحدد الفائدة بتوازن الادخار والاستثمار الحقيقيين، بل بـ "تفضيل السيولة" (الطلب على النقود بدافع المعاملات، الحيطة، والمضاربة) في مقابل المعروض النقدي الذي يتحكم فيه البنك المركزي.',
    descEn:
      'Keynes’s revolutionary monetary theory: interest rates are determined by liquidity preference (the demand for liquid cash across Transaction, Precautionary, and Speculative motives) balanced against the money supply controlled by central banks.',
    scientificInsightAr:
      'اكتشف كينز ظاهرة "فخ السيولة" (Liquidity Trap) حيث تفقد السياسة النقدية وخفض الفائدة فاعليتهما، مما يفرض الاعتماد التام على السياسة المالية.',
    scientificInsightEn:
      'Identified the "Liquidity Trap" where nominal rates hit the zero lower bound and conventional monetary easing fails, rendering direct fiscal expansion indispensable.',
  },
  {
    id: 'counter_cyclical_fiscal_stimulus',
    xPct: 82.0,
    yPct: 75.0,
    titleAr: 'السياسة المالية المعاكسة للدورة والإنفاق العجزي (Fiscal Stimulus)',
    titleEn: 'Counter-Cyclical Fiscal Policy & Deficit Spending',
    categoryAr: 'السياسات الاقتصادية واستقرار الدخل',
    categoryEn: 'Stabilization Policy & Deficit Finance',
    descAr:
      'الوصية الاقتصادية الكبرى لكينز: عندما يحجم القطاع الخاص والمستهلكون عن الإنفاق أثناء الركود، يجب على الحكومة أن تتدخل عبر الإنفاق في مشروعات البنية التحتية حتى لو اضطرت لتمويل ذلك بالعجز المالي المؤقت، لسد "الفجوة الانكماشية" وإنعاش الطلب.',
    descEn:
      'Keynes’s central policy prescription: when private investment collapses during a slump, the government must act as spender of last resort, injecting debt-financed public infrastructure works to close the deflationary gap and restore full employment.',
    scientificInsightAr:
      'شكلت أفكار كينز الأساس النظري لبرنامج "العهد الجديد" (New Deal) في أمريكا ومشروع مارشال لإعادة إعمار أوروبا بعد الحرب العالمية الثانية.',
    scientificInsightEn:
      'Keynesian economics underpinned Roosevelt’s New Deal and the post-WWII Bretton Woods monetary system (founding the IMF and World Bank).',
  },
];

export const KeynesGeneralTheoryStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<KeynesHotspot>(KEYNES_HOTSPOTS[1]); // Multiplier
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Multiplier Engine State
  const [mpc, setMpc] = useState<number>(0.8); // Marginal Propensity to Consume
  const [stimulusG, setStimulusG] = useState<number>(20); // In billions of EGP

  const multiplierMetrics = useMemo(() => {
    const mps = Math.max(0.01, 1 - mpc);
    const k = 1 / mps;
    const deltaY = k * stimulusG;
    const deltaC = mpc * deltaY;
    const deltaS = mps * deltaY;

    // Simulation of 5 Rounds of re-spending
    let currentInflow = stimulusG;
    const rounds: Array<{ round: number; inflow: number; consumed: number; saved: number }> = [];

    for (let r = 1; r <= 5; r++) {
      const consumed = currentInflow * mpc;
      const saved = currentInflow * mps;
      rounds.push({
        round: r,
        inflow: currentInflow,
        consumed,
        saved,
      });
      currentInflow = consumed;
    }

    return {
      mps,
      k,
      deltaY,
      deltaC,
      deltaS,
      rounds,
    };
  }, [mpc, stimulusG]);

  const modalData: HiResImageModalData = {
    imageUrl: keynesPhoto,
    titleAr: 'الطبعة الأولى للنظرية العامة في التشغيل والفائدة والنقود 1936 — جون ماينارد كينز',
    titleEn: 'John Maynard Keynes: The General Theory of Employment, Interest and Money 1936',
    subtitleAr: 'ميلاد الاقتصاد الكلي ونظرية الطلب الفعلي ومضاعف الإنفاق الحكومي',
    subtitleEn: 'The Birth of Modern Macroeconomics & The Fiscal Multiplier',
    descriptionAr:
      'لوحة أرشيفية نادرة بدقة 4K للمجلد الأول من الطبعة الأولى التاريخية لكتاب كينز الصادر عن دار ماكميلان في لندن عام 1936. تستقر الصفحة المفتوحة على الفصل العاشر ومصنف معادلة المضاعف k = 1 / (1-MPC)، وبجوارها قلم حبر سائل كلاسيكي من عام 1936، ومسطرة حاسبة خشبية عتيقة، ومستندات سندات خزانة بنك إنجلترا الأصلية، وفنجان شاي كامبريدج الخزفي.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of the authentic 1936 first edition of John Maynard Keynes’s The General Theory of Employment, Interest and Money, published by Macmillan & Co. The folio lies open to Chapter 10 showing the mathematical formula for the investment multiplier k = 1 / (1 - MPC), accompanied by a 1930s Parker fountain pen, vintage slide rule, and Bank of England treasury loan documents.',
    locationAr: 'مكتبة مارشال للاقتصاد / كلية كينجز بجامعة كامبريدج',
    locationEn: 'Marshall Library of Economics / King’s College Archives, Cambridge University',
    dateOrEraAr: '1936 م (حقبة الكساد الكبير وميلاد الاقتصاد الكلي)',
    dateOrEraEn: '1936 CE (Great Depression Era / Cambridge, England)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950/40 border-teal-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-600 via-cyan-700 to-slate-800 flex items-center justify-center shadow-lg shadow-teal-600/30 text-white">
            <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
                1936 CE • Cambridge
              </span>
              <span className="text-xs font-mono text-teal-400 font-bold">
                {isArabic ? 'النظرية العامة • الطبعة الأولى' : 'The General Theory • First Edition'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-stone-200">
              {isArabic
                ? 'استوديو جون ماينارد كينز: الطلب الفعلي الكلي والمضاعف المالي'
                : 'John Maynard Keynes Studio: Aggregate Demand & The Fiscal Multiplier'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة كينز 1936 بدقة 4K' : 'Inspect 4K Keynes 1936 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-teal-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={keynesPhoto}
              alt="John Maynard Keynes The General Theory 1936 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {KEYNES_HOTSPOTS.map((hotspot) => {
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
                      ? 'scale-125 ring-4 ring-teal-400 bg-teal-500 text-white shadow-lg shadow-teal-500/50'
                      : 'bg-slate-900/80 hover:bg-teal-600 text-teal-300 hover:text-white border border-teal-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-teal-200 border border-teal-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-teal-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                {isArabic ? 'كلية كينجز • كامبريدج 1936 م' : 'King’s College • Cambridge 1936'}
              </span>
              <span className="text-[11px] text-teal-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {KEYNES_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-teal-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-teal-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-800/40">
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

          <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-teal-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>{isArabic ? 'الأثر التاريخي في الاقتصاد الكلي والسياسات المالية:' : 'Macroeconomic Policy Impact:'}</span>
            </div>
            <p className="text-xs text-teal-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Keynesian Multiplier Interactive Laboratory */}
      <div className="border-t border-teal-800/30 pt-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-teal-400" />
          <h3 className="text-base sm:text-lg font-black text-white">
            {isArabic ? 'محاكي مضاعف الإنفاق الحكومي الكينزي وتوسع الدخل القومي' : 'Keynesian Multiplier & National Income Expansion Simulator'}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div>
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{isArabic ? 'الميل الحدي للاستهلاك (MPC):' : 'Marginal Propensity to Consume (MPC):'}</span>
                <span className="text-teal-400 font-mono text-sm font-black">{mpc.toFixed(2)} ({Math.round(mpc * 100)}%)</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="0.95"
                step="0.05"
                value={mpc}
                onChange={(e) => setMpc(Number(e.target.value))}
                className="w-full accent-teal-500 mt-2 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>0.50 (k = 2)</span>
                <span>0.80 (k = 5)</span>
                <span>0.95 (k = 20)</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{isArabic ? 'حقن الإنفاق الحكومي الأولي (ΔG):' : 'Initial Fiscal Stimulus (ΔG):'}</span>
                <span className="text-teal-400 font-mono text-sm font-black">{stimulusG} {isArabic ? 'مليار جنيه' : 'Billion EGP'}</span>
              </label>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={stimulusG}
                onChange={(e) => setStimulusG(Number(e.target.value))}
                className="w-full accent-teal-500 mt-2 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>5 مليار</span>
                <span>50 مليار</span>
                <span>100 مليار</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 font-mono text-xs">
              <div className="text-teal-400 font-bold">{isArabic ? 'معادلة كينز في كتاب النظرية العامة:' : 'Keynes’s Multiplier Equation:'}</div>
              <div className="text-sm text-yellow-300 font-bold">
                k = 1 / (1 - MPC) = 1 / {multiplierMetrics.mps.toFixed(2)} = {multiplierMetrics.k.toFixed(2)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-sans">
                {isArabic
                  ? 'كل جنيه تنفقه الدولة يمر بسلسلة هندسية من دورات الإنفاق والاستهلاك، ليزداد الدخل بمقدار المضاعف k.'
                  : 'Every pound of public spending initiates a geometric progression of consumption rounds expanding aggregate income.'}
              </p>
            </div>
          </div>

          {/* Metrics & Output Dashboard */}
          <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'قيمة المضاعف الكينزي (k)' : 'Keynesian Multiplier (k)'}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-yellow-300 font-mono mt-1">
                  {multiplierMetrics.k.toFixed(2)}x
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  MPS = {multiplierMetrics.mps.toFixed(2)}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'الزيادة الكلية في الدخل القومي (ΔY)' : 'Total National Income Surge (ΔY)'}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                  +{Math.round(multiplierMetrics.deltaY)} B
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {isArabic ? 'مليار جنيه مصري' : 'Billion EGP'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'توسع الاستهلاك الكلي (ΔC)' : 'Total Consumer Surge (ΔC)'}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono mt-1">
                  +{Math.round(multiplierMetrics.deltaC)} B
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {isArabic ? 'مليار جنيه استهلاك' : 'Billion EGP Consumption'}
                </span>
              </div>
            </div>

            {/* Successive Rounds Progression Table */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  {isArabic ? 'جولات التوسع الهندسي للإنفاق والاستهلاك المتتالي' : 'Multi-Round Geometric Income Chain'}
                </span>
                <span className="text-[10px] font-mono text-teal-400">
                  {isArabic ? '5 جولات استهلاكية أولية' : 'First 5 Spending Waves'}
                </span>
              </div>

              <table className="w-full text-xs font-mono text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 bg-slate-950">
                    <th className="p-2.5 text-center">#</th>
                    <th className="p-2.5">{isArabic ? 'تدفق الدخل الجديد' : 'Income Inflow'}</th>
                    <th className="p-2.5">{isArabic ? 'الاستهلاك المعاد إنفاقه' : 'Re-spent (MPC)'}</th>
                    <th className="p-2.5">{isArabic ? 'التسرب للادخار' : 'Leakage (MPS)'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {multiplierMetrics.rounds.map((rnd) => (
                    <tr key={rnd.round} className="hover:bg-slate-900/50">
                      <td className="p-2.5 text-center text-teal-400 font-bold">{rnd.round}</td>
                      <td className="p-2.5 font-bold text-white">{rnd.inflow.toFixed(1)} B</td>
                      <td className="p-2.5 text-emerald-400">+{rnd.consumed.toFixed(1)} B</td>
                      <td className="p-2.5 text-slate-400">+{rnd.saved.toFixed(1)} B</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono text-center">
              <span className="text-teal-400 font-bold">{isArabic ? 'خلاصة كينز في النظرية العامة:' : 'Keynes’s General Theory Maxim:'} </span>
              "{isArabic
                ? 'إن الصعوبة لا تكمن في الأفكار الجديدة، بل في الهروب من الأفكار القديمة التي تفرعت في كل زوايا عقولنا.'
                : 'The difficulty lies not so much in developing new ideas as in escaping from old ones.'}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
