import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  Activity,
  Compass,
} from 'lucide-react';
import gaussPhoto from '../../../assets/economics/gauss_normal_distribution_1809.jpg';
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
  scientificInsightAr: string;
  scientificInsightEn: string;
}

export const GAUSS_HOTSPOTS: GaussHotspot[] = [
  {
    id: 'gaussian_bell_curve_function',
    xPct: 48.0,
    yPct: 50.0,
    titleAr: 'دالة المنحنى الطبيعي الجرسي (The Gaussian Bell Curve)',
    titleEn: 'Normal Probability Density & The Gaussian Bell Curve',
    categoryAr: 'نظرية الاحتمالات والتوزيعات المتصلة',
    categoryEn: 'Continuous Probability Distributions',
    descAr:
      'الصيغة الرياضية الأهم في علم الإحصاء: دالة الكثافة الاحتمالية للمتغير العشوائي الطبيعي f(x) = (1 / σ√(2π)) · e^(-(x-μ)² / 2σ²). يتميز المنحنى الجرسي بخصائصه الكلاسيكية: متماثل تماماً حول المتوسط الحسابي (μ)، تمتد نهايتاه إلى ما لا نهاية دون أن تلمسا المحور الأفقي، والمساحة الكلية أسفله تساوي واحداً صحيحاً (100%).',
    descEn:
      'The foundational equation of modern statistics: the probability density function f(x) = (1 / σ√(2π)) · e^(-(x-μ)² / 2σ²). The Gaussian curve is symmetric about the mean (μ), asymptotic to the horizontal axis at both tails, with a total area under the curve strictly equal to 1.0 (100%).',
    scientificInsightAr:
      'تتطابق مقاييس النزعة المركزية الثلاثة (المتوسط الحسابي، الوسيط، والمنوال) تماماً عند قمة المنحنى الطبيعي: μ = Median = Mode.',
    scientificInsightEn:
      'In a perfect normal distribution, the three measures of central tendency (Mean, Median, Mode) coincide at the exact central apex.',
  },
  {
    id: 'standard_normal_z_score',
    xPct: 55.0,
    yPct: 70.0,
    titleAr: 'الدرجة المعيارية المعيارية وجدول المساحات (Z-Score Transformation)',
    titleEn: 'Standard Normal Z-Score & Statistical Table Lookups',
    categoryAr: 'الإحصاء التطبيقي واختبارات الفروض',
    categoryEn: 'Applied Statistics & Z-Transformation',
    descAr:
      'التحويل المعياري الأساسي في منهج الثانوية العامة المصرية: Z = (X - μ) / σ. يحول هذا القانون أي متغير طبيعي عام ذي متوسط μ وانحراف معياري σ إلى متغير طبيعي معياري قياسي (Z ~ N(0, 1)) بمتوسط 0 وانحراف 1، مما يتيح حساب احتمالات أي مدى عبر جدول المساحات الموحد في كراسة المفاهيم.',
    descEn:
      'The quintessential statistical transformation: Z = (X - μ) / σ. It standardizes any raw normal distribution into the Standard Normal Distribution (Z ~ N(0, 1)) with mean 0 and variance 1, enabling probability computation via standard cumulative area tables.',
    scientificInsightAr:
      'تمثل الدرجة المعيارية (Z) عدد الانحرافات المعيارية التي يبعدها المتغير عن المتوسط؛ فالقيمة الموجبة تعني فوق المتوسط والسالبة تعني تحته.',
    scientificInsightEn:
      'The Z-score measures the exact number of standard deviations a raw observation lies above (positive) or below (negative) the population mean.',
  },
  {
    id: 'empirical_rule_standard_deviations',
    xPct: 28.0,
    yPct: 55.0,
    titleAr: 'النسب المئوية للتشتت وقاعدة 68-95-99.7 (Empirical Rule)',
    titleEn: 'The 68–95–99.7 Empirical Rule of Normal Dispersion',
    categoryAr: 'خصائص التشتت ونقاط الانقلاب',
    categoryEn: 'Dispersion & Inflection Points',
    descAr:
      'القاعدة الذهبية في التوزيع الطبيعي: تقع 68.27% من جميع المشاهدات ضمن انحراف معياري واحد حول المتوسط (μ ± 1σ)، وتقع 95.45% ضمن انحرافين (μ ± 2σ)، بينما تقع 99.73% ضمن ثلاثة انحرافات معيارية (μ ± 3σ). تتحدد نقاط انقلاب المنحنى من التحدب إلى التقعر عند x = μ ± σ بدقة.',
    descEn:
      'The celebrated three-sigma empirical rule: 68.27% of observations fall within μ ± 1σ, 95.45% within μ ± 2σ, and 99.73% within μ ± 3σ. The mathematical points of inflection occur precisely at x = μ ± σ.',
    scientificInsightAr:
      'تعتمد منهجيات الجودة العالمية مثل "ستة سيجما" (Six Sigma) على هذه القاعدة لتقليص الأخطاء إلى أقل من 3.4 جزء في المليون.',
    scientificInsightEn:
      'Modern industrial quality control methodologies like Six Sigma rely on this mathematical rule to guarantee defect rates under 3.4 per million.',
  },
  {
    id: 'observatory_sextant_ceres_ledger',
    xPct: 82.0,
    yPct: 45.0,
    titleAr: 'سدس الرصد الفلكي ودفتر حساب مدار سيريس (Ceres Orbit Ledger)',
    titleEn: 'Astronomical Sextant & Ceres Orbit Recovery Ledger',
    categoryAr: 'تاريخ الاكتشاف الفلكي والرياضي',
    categoryEn: 'Astronomical History & Orbit Determination',
    descAr:
      'السدس النحاسي الدقيق مع دفتر الأرصاد الفلكية للكويكب سيريس؛ استخدم غاوس قانون التوزيع الطبيعي للأخطاء وطريقة المربعات الصغرى (Least Squares) عام 1801 لحساب مدار كوكب سيريس القزم المفقود خلف وهج الشمس، متفوقاً على جميع فلكيي أوروبا بملاحظات شحيحة للغاية.',
    descEn:
      'The brass astronomical sextant and observational ledger recording the recovery of the lost asteroid Ceres: in 1801, 24-year-old Gauss applied his normal error distribution and Method of Least Squares to accurately predict where Ceres would reappear.',
    scientificInsightAr:
      'برهن غاوس أن القيمة الأكثر احتمالاً للقياس المتكرر مع وجود أخطاء عشوائية هي المتوسط الحسابي، إذا وفقط إذا كانت الأخطاء موزعة طبيعياً.',
    scientificInsightEn:
      'Gauss proved mathematically that the arithmetic mean is the most probable value of a measured quantity if and only if errors follow the normal distribution.',
  },
  {
    id: 'central_limit_theorem_foundation',
    xPct: 85.0,
    yPct: 80.0,
    titleAr: 'مبرهنة النهاية المركزية وسيادة المنحنى الطبيعي (Central Limit Theorem)',
    titleEn: 'Central Limit Theorem: The Universal Bell Curve Emergence',
    categoryAr: 'الاحتمالات الرياضية المتقدمة',
    categoryEn: 'Asymptotic Statistics & Limit Theorems',
    descAr:
      'المبرهنة الأروع في تاريخ الرياضيات: مهما كان شكل توزيع المجتمع الأصلي (منتظم، ثنائي الحدين، ملتوي، أو غريب الأطوار)، فإن توزيع متوسطات العينات المسحوبة منه يقترب دائماً من التوزيع الطبيعي كلما زاد حجم العينة (n ≥ 30).',
    descEn:
      'The foundational triumph of mathematical probability: regardless of the shape of the underlying population distribution, the distribution of sample means approaches a normal distribution as sample size n grows (n ≥ 30).',
    scientificInsightAr:
      'تفسر مبرهنة النهاية المركزية لماذا تتخذ معظم الظواهر الطبيعية والبشرية (كالطول، الوزن، وضغط الدم، ودرجات الامتحانات) شكلاً جرسياً طبيعياً.',
    scientificInsightEn:
      'Explains why countless natural, biological, and social phenomena (height, blood pressure, IQ, exam scores) spontaneously manifest the bell curve.',
  },
];

// Standard Normal Cumulative Area Table Approximation (Error function based)
function normalCdf(z: number): number {
  if (z < -6) return 0;
  if (z > 6) return 1;

  // Abramowitz and Stegun formula 7.1.26 approximation for erf
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return 0.5 * (1.0 + sign * y);
}

export const GaussNormalDistributionStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<GaussHotspot>(GAUSS_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Normal Distribution Parameters
  const [mean, setMean] = useState<number>(50); // μ
  const [stdDev, setStdDev] = useState<number>(10); // σ

  // Target X Range for Probability Evaluation: P(xLow <= X <= xHigh)
  const [xLow, setXLow] = useState<number>(40);
  const [xHigh, setXHigh] = useState<number>(65);

  const calcResults = useMemo(() => {
    const zLow = (xLow - mean) / stdDev;
    const zHigh = (xHigh - mean) / stdDev;

    const cdfLow = normalCdf(zLow);
    const cdfHigh = normalCdf(zHigh);
    const probability = Math.max(0, cdfHigh - cdfLow);

    // Official Egyptian Thanawiya Amma Table Standard: P(0 < Z < zHigh)
    const tableAreaHigh = Math.abs(normalCdf(zHigh) - 0.5);

    return {
      zLow,
      zHigh,
      probability,
      percentage: (probability * 100).toFixed(2),
      tableAreaHigh: tableAreaHigh.toFixed(4),
    };
  }, [mean, stdDev, xLow, xHigh]);

  const modalData: HiResImageModalData = {
    imageUrl: gaussPhoto,
    titleAr: 'طبعة هامبورغ 1809 — نظرية حركة الأجرام السماوية لكارل فريدريش غاوس',
    titleEn: 'Carl Friedrich Gauss 1809 Theoria Motus First Edition Master Folio',
    subtitleAr: 'اشتقاق قانون التوزيع الطبيعي والمنحنى الجرسي وطريقة المربعات الصغرى',
    subtitleEn: 'Derivation of the Normal Distribution & Method of Least Squares',
    descriptionAr:
      'لوحة أرشيفية نادرة بدقة 4K من الطبعة الأولى لعام 1809 لكتاب غاوس "نظرية حركة الأجرام السماوية". تظهر الصفحة اللاتينية المفتوحة على الفصل الثالث متضمنة المنحنى الجرسي الطبيعي المحفور ومساحات الاحتمال، مع دالة الكثافة الأسية e^(-h^2 x^2)، وبجوارها سدس الرصد الفلكي النحاسي لمرصد غوتنغن، والفرجار البرونزي، ومحبرة الحبر الأسود وريشة الإوزة، وسجل حساب مدار كويكب سيريس.',
    descriptionEn:
      'Museum-grade 4K archival photography of Carl Friedrich Gauss’s 1809 landmark work Theoria Motus Corporum Coelestium. The folio displays the historic derivation of the normal law of errors and Gaussian bell curve, accompanied by Gauss’s brass observatory sextant, drafting dividers, Ceres asteroid calculation ledger, inkwell, and goose quill.',
    locationAr: 'مرصد غوتنغن الفلكي / مكتبة جامعة غوتينغن للنوادر',
    locationEn: 'Göttingen Observatory Archives / University of Göttingen Rare Book Collection',
    dateOrEraAr: '1809 م (العصر الذهبي للرياضيات والفلك / ألمانيا)',
    dateOrEraEn: '1809 CE (Golden Age of Mathematics & Astronomy / Göttingen, Germany)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/40 border-blue-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-700 to-slate-800 flex items-center justify-center shadow-lg shadow-blue-600/30 text-white">
            <Activity className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                1809 CE • Göttingen
              </span>
              <span className="text-xs font-mono text-blue-400 font-bold">
                {isArabic ? 'التوزيع الطبيعي المعياري • المنحنى الجرسي' : 'Gaussian Normal Distribution & Z-Tables'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-stone-200">
              {isArabic
                ? 'استوديو كارل فريدريش غاوس: التوزيع الطبيعي والدرجة المعيارية Z'
                : 'Carl Friedrich Gauss Studio: Normal Distribution & Z-Score Engine'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة غاوس 1809 بدقة 4K' : 'Inspect 4K Gauss 1809 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-blue-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={gaussPhoto}
              alt="Carl Friedrich Gauss Normal Distribution 1809 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {GAUSS_HOTSPOTS.map((hotspot) => {
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
                      ? 'scale-125 ring-4 ring-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-slate-900/80 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-blue-200 border border-blue-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-blue-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                {isArabic ? 'مرصد غوتنغن • 1809 م' : 'Göttingen Observatory • 1809'}
              </span>
              <span className="text-[11px] text-blue-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {GAUSS_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-blue-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-blue-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
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

          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-blue-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{isArabic ? 'الأثر الرياضي والإحصائي في منهج الثانوية العامة:' : 'Foundational Curriculum Significance:'}</span>
            </div>
            <p className="text-xs text-blue-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Gaussian Normal Curve & Z-Score Laboratory */}
      <div className="border-t border-blue-800/30 pt-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-blue-400" />
          <h3 className="text-base sm:text-lg font-black text-white">
            {isArabic ? 'محاكي المنحنى الطبيعي وحساب المساحات المعيارية Z' : 'Interactive Normal Bell Curve & Z-Score Area Engine'}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{isArabic ? 'المتوسط الحسابي للمجتمع (μ):' : 'Population Mean (μ):'}</span>
                <span className="text-blue-400 font-mono text-sm font-black">{mean}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={mean}
                onChange={(e) => setMean(Number(e.target.value))}
                className="w-full accent-blue-500 mt-2 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{isArabic ? 'الانحراف المعياري (σ):' : 'Standard Deviation (σ):'}</span>
                <span className="text-blue-400 font-mono text-sm font-black">{stdDev}</span>
              </label>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={stdDev}
                onChange={(e) => setStdDev(Number(e.target.value))}
                className="w-full accent-blue-500 mt-2 cursor-pointer"
              />
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-3">
              <span className="text-xs font-bold text-slate-300 block">
                {isArabic ? 'حدود المساحة المطلوبة P(X₁ ≤ X ≤ X₂):' : 'Probability Interval P(X₁ ≤ X ≤ X₂):'}
              </span>

              <div>
                <label className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{isArabic ? 'الحد الأدنى (X₁):' : 'Lower Bound (X₁):'}</span>
                  <span className="text-yellow-300 font-mono font-bold">{xLow} (Z₁ = {calcResults.zLow.toFixed(2)})</span>
                </label>
                <input
                  type="range"
                  min={mean - 3 * stdDev}
                  max={xHigh}
                  step="1"
                  value={xLow}
                  onChange={(e) => setXLow(Number(e.target.value))}
                  className="w-full accent-yellow-500 mt-1 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{isArabic ? 'الحد الأعلى (X₂):' : 'Upper Bound (X₂):'}</span>
                  <span className="text-emerald-400 font-mono font-bold">{xHigh} (Z₂ = {calcResults.zHigh.toFixed(2)})</span>
                </label>
                <input
                  type="range"
                  min={xLow}
                  max={mean + 3 * stdDev}
                  step="1"
                  value={xHigh}
                  onChange={(e) => setXHigh(Number(e.target.value))}
                  className="w-full accent-emerald-500 mt-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
              <div className="text-blue-400 font-bold">{isArabic ? 'قانون التحويل المعياري:' : 'Standardization Formula:'}</div>
              <div className="text-sm text-yellow-300 font-bold">Z = (X - μ) / σ</div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {isArabic ? 'قيمة الجدول الرسمية لـ Z₂:' : 'Official Exam Table Area P(0 < Z < Z₂):'} <span className="text-emerald-300 font-bold">{calcResults.tableAreaHigh}</span>
              </div>
            </div>
          </div>

          {/* SVG Bell Curve Visualizer & Probability Results */}
          <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'الاحتمال المحسوب P(X₁ ≤ X ≤ X₂)' : 'Evaluated Probability P'}
                </span>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">
                  {calcResults.probability.toFixed(4)}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'النسبة المئوية من المجتمع' : 'Percentage of Population'}
                </span>
                <div className="text-2xl font-black text-blue-300 font-mono mt-0.5">
                  {calcResults.percentage}%
                </div>
              </div>
            </div>

            {/* Dynamic Vector SVG Normal Curve */}
            <div className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 flex justify-center">
              <svg viewBox="0 0 340 160" className="w-full max-w-[340px] h-[160px] overflow-visible">
                {/* Axes */}
                <line x1="20" y1="130" x2="320" y2="130" stroke="#475569" strokeWidth="1.5" />
                <line x1="170" y1="20" x2="170" y2="130" stroke="#334155" strokeDasharray="3,3" />

                {/* Mean Label */}
                <text x="170" y="145" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  μ={mean} (Z=0)
                </text>

                {/* Bell Curve Polygon Path Points */}
                {(() => {
                  const points: Array<[number, number]> = [];
                  const shadedPoints: Array<[number, number]> = [];
                  const width = 280;
                  const leftX = 30;

                  for (let px = 0; px <= width; px += 2) {
                    const currentSvgX = leftX + px;
                    // Map svgX (30 to 310) to z (-3.5 to +3.5)
                    const currentZ = ((px - width / 2) / (width / 2)) * 3.5;
                    const pdf = Math.exp(-0.5 * currentZ * currentZ);
                    const currentSvgY = 130 - pdf * 105;

                    points.push([currentSvgX, currentSvgY]);

                    // Check if currentZ is within [zLow, zHigh]
                    if (currentZ >= calcResults.zLow && currentZ <= calcResults.zHigh) {
                      shadedPoints.push([currentSvgX, currentSvgY]);
                    }
                  }

                  const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');

                  let shadedD = '';
                  if (shadedPoints.length > 0) {
                    const firstX = shadedPoints[0][0];
                    const lastX = shadedPoints[shadedPoints.length - 1][0];
                    shadedD = `M ${firstX.toFixed(1)} 130 ` +
                      shadedPoints.map((p) => `L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') +
                      ` L ${lastX.toFixed(1)} 130 Z`;
                  }

                  return (
                    <g>
                      {/* Shaded Area Under Curve */}
                      {shadedD && (
                        <path d={shadedD} fill="#10b981" fillOpacity="0.35" stroke="#10b981" strokeWidth="1" />
                      )}

                      {/* Gaussian Bell Outline */}
                      <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                    </g>
                  );
                })()}

                {/* Standard Deviation tick marks */}
                <circle cx="170" cy="25" r="3" fill="#38bdf8" />
                <text x="170" y="16" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Peak f(μ)
                </text>
              </svg>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono text-center">
              <span className="text-blue-400 font-bold">{isArabic ? 'قاعدة غاوس الإحصائية:' : 'Gaussian Statistical Law:'} </span>
              {isArabic
                ? '68.27% من المجتمع يقع في النطاق [μ ± σ]، و 95.45% يقع في النطاق [μ ± 2σ].'
                : '68.27% of values lie in [μ ± σ], 95.45% in [μ ± 2σ], and 99.73% in [μ ± 3σ].'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
