import React, { useState, useMemo } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  BarChart3,
  TrendingUp,
} from 'lucide-react';
import pearsonPhoto from '../../../assets/economics/pearson_correlation_regression_1896.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface PearsonHotspot {
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

export const PEARSON_HOTSPOTS: PearsonHotspot[] = [
  {
    id: 'pearson_product_moment_coefficient',
    xPct: 48.0,
    yPct: 55.0,
    titleAr: 'معامل ارتباط بيرسون الخطي (Pearson Correlation Coefficient r)',
    titleEn: 'Pearson’s Product-Moment Correlation Coefficient (r)',
    categoryAr: 'نظرية الارتباط الخطي',
    categoryEn: 'Linear Bivariate Association',
    descAr:
      'القانون المحوري في منهج الإحصاء للثانوية العامة المصرية: r = [n∑xy - (∑x)(∑y)] / √{[n∑x² - (∑x)²][n∑y² - (∑y)²]}. يقيس المعامل قوة واتجاه العلاقة الخطية بين متغيرين كميين، وتتراوح قيمته بدقة مطلقة بين -1 و +1؛ حيث +1 ارتباط طردي تام، -1 ارتباط عكسي تام، وصفر يعني انعدام الارتباط الخطي.',
    descEn:
      'The foundational formula of bivariate linear association: r = [n∑xy - (∑x)(∑y)] / √{[n∑x² - (∑x)²][n∑y² - (∑y)²]}. It quantifies the degree and direction of linear dependence between two variables, strictly bounded between -1.0 (perfect negative) and +1.0 (perfect positive).',
    scientificInsightAr:
      'إذا كانت r > 0 فالارتباط طردي (كلما زاد x زاد y)، وإذا كانت r < 0 فالارتباط عكسي (كلما زاد x نقص y). وتصنف القوة: قوي (|r| ≥ 0.6)، متوسط (0.4 ≤ |r| < 0.6)، وضعيف (|r| < 0.4).',
    scientificInsightEn:
      'A positive r indicates direct association; negative r indicates inverse association. Strength classification: Strong (|r| ≥ 0.6), Moderate (0.4 ≤ |r| < 0.6), Weak (|r| < 0.4).',
  },
  {
    id: 'least_squares_regression_line',
    xPct: 52.0,
    yPct: 38.0,
    titleAr: 'معادلة خط انحدار ص على س (Least Squares Regression)',
    titleEn: 'Least Squares Linear Regression Equation (ŷ = a + bx)',
    categoryAr: 'نماذج التنبؤ وخط الانحدار',
    categoryEn: 'Predictive Modeling & Least Squares',
    descAr:
      'معادلة التنبؤ الخطية: ŷ = a + bx؛ حيث يمثل b معامل الانحدار (ميل الخط المستقيم): b = [n∑xy - (∑x)(∑y)] / [n∑x² - (∑x)²]، ويمثل a الجزء المقطوع من محور الصادات: a = (∑y - b∑x) / n. يمر خط الانحدار دائماً بنقطة المتوسطين (x̄, ȳ) ويقلل مجموع مربعات الانحرافات الرأسية إلى الصفر.',
    descEn:
      'The definitive linear regression predictor: ŷ = a + bx, where slope b = [n∑xy - (∑x)(∑y)] / [n∑x² - (∑x)²] and intercept a = (∑y - b∑x) / n. The line of best fit minimizes the sum of squared vertical residuals and always intersects the centroid (x̄, ȳ).',
    scientificInsightAr:
      'يتفق معامل الانحدار (b) ومعامل الارتباط (r) في الإشارة دائماً؛ فإذا كان أحدهما موجباً كان الآخر موجباً بالضرورة.',
    scientificInsightEn:
      'The regression slope (b) and correlation coefficient (r) always share the identical algebraic sign (+ or -), confirming mutual directional consistency.',
  },
  {
    id: 'bivariate_scatter_ellipses',
    xPct: 55.0,
    yPct: 42.0,
    titleAr: 'شكل الانتشار البياني وإهليلج الارتباط (Scatter & Ellipses)',
    titleEn: 'Bivariate Scatterplot & Equi-Probability Correlation Ellipses',
    categoryAr: 'التمثيل البياني والتوزيع ثنائي المتغير',
    categoryEn: 'Graphical Bivariate Analysis',
    descAr:
      'الرسم البياني التاريخي الأول المنشور في المجلة الفلسفية للجمعية الملكية عام 1896: يوضح نقاط الانتشار لعلاقة وراثة الطول بين الآباء والأبناء، محاطة بإهليلجات متحدة المركز توضح خطوط الكثافة الاحتمالية وظاهرة "الانحدار نحو المتوسط" (Regression toward mediocrity).',
    descEn:
      'The historic figure in the 1896 Royal Society volume: depicting the bivariate scatter of heights between fathers and sons surrounded by concentric probability ellipses, revealing Francis Galton’s regression toward the mean.',
    scientificInsightAr:
      'شكل الانتشار هو الخطوة الأولى الضرورية قبل حساب معامل بيرسون للتأكد من أن العلاقة خطية وليست منحنية أو شاذة.',
    scientificInsightEn:
      'Visual scatter inspection is mandatory prior to Pearson correlation to ensure linearity and detect influential outliers.',
  },
  {
    id: 'arithmometer_mechanical_calculator',
    xPct: 82.0,
    yPct: 28.0,
    titleAr: 'الحاسبة الميكانيكية توماس دي كولمار (Arithmometer)',
    titleEn: 'Thomas de Colmar Mechanical Arithmometer (1896)',
    categoryAr: 'أدوات الحساب الإحصائي الأرشيفية',
    categoryEn: 'Historical Calculating Machines',
    descAr:
      'الحاسبة النحاسية الميكانيكية الثقيلة المعتمدة على أسطوانات لايبنتس المدرجة، والتي استخدمها كارل بيرسون ومعاونوه في مختبر القياسات الحيوية (Biometric Lab) بجامعة لندن لحساب آلاف التوافيق والجداءات (∑xy) يدوياً قبل اختراع الحواسيب الإلكترونية.',
    descEn:
      'The stepped-drum mechanical arithmometer used by Karl Pearson at University College London’s Biometric Laboratory to calculate thousands of sum-of-products terms (∑xy) by hand before electronic computers.',
    scientificInsightAr:
      'استغرق بيرسون وفريقه شهوراً من العمل الحسابي المضني لإنجاز ورقة 1896 التي أصبحت الأساس لكل حزم البرمجيات الإحصائية الحديثة (SPSS, R, Python).',
    scientificInsightEn:
      'Pearson’s tireless team computed statistical parameters mechanically, pioneering the algorithms underpinning modern R, SPSS, and Pandas.',
  },
  {
    id: 'spearman_rank_correlation_contrast',
    xPct: 82.0,
    yPct: 85.0,
    titleAr: 'معامل ارتباط الرتب لسبيرمان (Spearman Rank Correlation rs)',
    titleEn: 'Spearman’s Rank Correlation: The Non-Parametric Counterpart',
    categoryAr: 'الارتباط غير المعلمي والرتب',
    categoryEn: 'Non-Parametric & Ordinal Association',
    descAr:
      'المعامل الموازي الذي ابتكره تشارلز سبيرمان عام 1904: rs = 1 - [6∑d² / n(n² - 1)]، حيث d هو الفرق بين رتبتي المتغيرين. يتميز سبيرمان بقدرته على قياس الارتباط بين المتغيرات الوصفية الترتيبية (مثل تقديرات الطلاب: ممتاز، جيد...) أو العلاقات غير الخطية الرتيبة.',
    descEn:
      'Charles Spearman’s 1904 non-parametric rank correlation: rs = 1 - [6∑d² / n(n² - 1)], where d is the rank difference. It excels with ordinal qualitative rankings (grades, socioeconomic tiers) and non-linear monotonic data.',
    scientificInsightAr:
      'لا يتأثر معامل سبيرمان بالقيم المتطرفة الشاذة (Outliers) مثل بيرسون؛ لأنه يعتمد على تسلسل الرتب وليس القيم العددية المطلقة.',
    scientificInsightEn:
      'Spearman’s rank correlation is robust against extreme outliers because it operates on ranks rather than raw parametric magnitudes.',
  },
];

interface DataPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  xLabelAr: string;
  xLabelEn: string;
  yLabelAr: string;
  yLabelEn: string;
  points: Array<{ x: number; y: number }>;
}

const PRESETS: DataPreset[] = [
  {
    id: 'strong_positive',
    nameAr: 'ارتباط طردي قوي جداً (ساعات الاستذكار والدرجة)',
    nameEn: 'Strong Positive (Study Hours vs. Exam Score)',
    xLabelAr: 'ساعات الاستذكار الأسبوعية (س)',
    xLabelEn: 'Study Hours (X)',
    yLabelAr: 'درجة الامتحان النهائي (ص)',
    yLabelEn: 'Exam Score (Y)',
    points: [
      { x: 2, y: 35 },
      { x: 4, y: 50 },
      { x: 5, y: 60 },
      { x: 7, y: 75 },
      { x: 8, y: 80 },
      { x: 10, y: 95 },
    ],
  },
  {
    id: 'strong_negative',
    nameAr: 'ارتباط عكسي قوي (سعر السلعة والكمية المطلوبة)',
    nameEn: 'Strong Negative (Price vs. Quantity Demanded)',
    xLabelAr: 'سعر الوحدة بالجنيه (س)',
    xLabelEn: 'Unit Price (X)',
    yLabelAr: 'الكمية المطلوبة بالآلاف (ص)',
    yLabelEn: 'Quantity Demanded (Y)',
    points: [
      { x: 10, y: 90 },
      { x: 20, y: 75 },
      { x: 30, y: 60 },
      { x: 40, y: 40 },
      { x: 50, y: 25 },
      { x: 60, y: 15 },
    ],
  },
  {
    id: 'moderate_positive',
    nameAr: 'ارتباط طردي متوسط (الدخل والإنفاق الترفيهي)',
    nameEn: 'Moderate Positive (Income vs. Recreation)',
    xLabelAr: 'الدخل الشهري (س)',
    xLabelEn: 'Monthly Income (X)',
    yLabelAr: 'الإنفاق الترفيهي (ص)',
    yLabelEn: 'Recreation Expense (Y)',
    points: [
      { x: 15, y: 30 },
      { x: 25, y: 40 },
      { x: 30, y: 35 },
      { x: 45, y: 65 },
      { x: 50, y: 55 },
      { x: 65, y: 80 },
    ],
  },
];

export const PearsonCorrelationRegressionStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<PearsonHotspot>(PEARSON_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Selected Dataset Preset
  const [selectedPresetId, setSelectedPresetId] = useState<string>('strong_positive');
  const currentPreset = PRESETS.find((p) => p.id === selectedPresetId) ?? PRESETS[0];

  // Statistical Calculation Engine
  const stats = useMemo(() => {
    const pts = currentPreset.points;
    const n = pts.length;

    let sumX = 0;
    let sumY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
    let sumXY = 0;

    for (const p of pts) {
      sumX += p.x;
      sumY += p.y;
      sumX2 += p.x * p.x;
      sumY2 += p.y * p.y;
      sumXY += p.x * p.y;
    }

    const meanX = sumX / n;
    const meanY = sumY / n;

    // Pearson r
    const num = n * sumXY - sumX * sumY;
    const denX = n * sumX2 - sumX * sumX;
    const denY = n * sumY2 - sumY * sumY;
    const denom = Math.sqrt(Math.max(0.0001, denX * denY));
    const r = denom > 0 ? num / denom : 0;

    // Regression slope b & intercept a (y on x: y = a + bx)
    const b = denX !== 0 ? num / denX : 0;
    const a = meanY - b * meanX;

    // Classification
    let typeAr = 'منعدم';
    let typeEn = 'Zero Correlation';
    if (Math.abs(r) >= 0.99) {
      typeAr = r > 0 ? 'طردي تام (+1)' : 'عكسي تام (-1)';
      typeEn = r > 0 ? 'Perfect Positive' : 'Perfect Negative';
    } else if (Math.abs(r) >= 0.6) {
      typeAr = r > 0 ? 'طردي قوي' : 'عكسي قوي';
      typeEn = r > 0 ? 'Strong Positive' : 'Strong Negative';
    } else if (Math.abs(r) >= 0.4) {
      typeAr = r > 0 ? 'طردي متوسط' : 'عكسي متوسط';
      typeEn = r > 0 ? 'Moderate Positive' : 'Moderate Negative';
    } else if (Math.abs(r) > 0.05) {
      typeAr = r > 0 ? 'طردي ضعيف' : 'عكسي ضعيف';
      typeEn = r > 0 ? 'Weak Positive' : 'Weak Negative';
    }

    return {
      n,
      sumX,
      sumY,
      sumX2,
      sumY2,
      sumXY,
      meanX,
      meanY,
      r,
      b,
      a,
      typeAr,
      typeEn,
    };
  }, [currentPreset]);

  const modalData: HiResImageModalData = {
    imageUrl: pearsonPhoto,
    titleAr: 'طبعة الجمعية الملكية بلندن 1896 — أبحاث كارل بيرسون في الارتباط والانحدار',
    titleEn: 'Karl Pearson 1896 Philosophical Transactions of the Royal Society',
    subtitleAr: 'المعادلة الأصلية لمعامل الارتباط الخطي وخوارزمية خط الانحدار',
    subtitleEn: 'The Original Pearson Product-Moment Correlation & Least Squares Regression',
    descriptionAr:
      'لوحة أرشيفية نادرة بدقة 4K من المجلد 187 للجمعية الملكية البريطانية الصادر عام 1896 بلندن. يظهر البحث التاريخي لكارل بيرسون مفتوحاً على معادلة معامل الارتباط الخطي r، ومعادلات خط الانحدار، مع أول شكل انتشار إحصائي بياني منشور يوضح إهليلجات الارتباط في وراثة القامة بين الآباء والأبناء، وتستند بجوار المجلد آلة الحساب الميكانيكية توماس دي كولمار، ومسطرة القياس النحاسية، وقلم التحبير الأرشيفي.',
    descriptionEn:
      'Ultra-high-definition 4K museum archival plate of the authentic 1896 volume of the Philosophical Transactions of the Royal Society of London containing Karl Pearson’s landmark paper. The folio displays the derivation of the correlation coefficient r, linear regression equations, the first bivariate scatterplot with correlation ellipses, a Thomas de Colmar arithmometer, and vintage drafting tools.',
    locationAr: 'مكتبة الجمعية الملكية في لندن / أرشيف كلية لندن الجامعية (UCL)',
    locationEn: 'Royal Society of London Library / University College London Special Collections',
    dateOrEraAr: '1896 م (ميلاد الإحصاء الرياضي الحديث / إنجلترا)',
    dateOrEraEn: '1896 CE (Birth of Modern Mathematical Statistics / London, England)',
  };

  return (
    <div
      className={`w-full rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-slate-300 text-slate-900 shadow-xl'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/40 border-amber-900/40 text-slate-100 shadow-2xl'
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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-yellow-600 to-stone-800 flex items-center justify-center shadow-lg shadow-amber-600/30 text-white">
            <BarChart3 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                1896 CE • Royal Society London
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {isArabic ? 'الارتباط والانحدار • الجمعية الملكية' : 'Correlation & Regression • Royal Society'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-stone-200">
              {isArabic
                ? 'استوديو كارل بيرسون: معامل الارتباط الخطي ومعادلة خط الانحدار'
                : 'Karl Pearson Studio: Linear Correlation & Regression Line Engine'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-lg shadow-amber-600/30 flex items-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص طبعة 1896 بدقة 4K' : 'Inspect 4K Pearson 1896 Folio'}</span>
        </button>
      </div>

      {/* Grid: 4K Interactive Plate with Hotspots + Interactive Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Column: 4K Plate with Interactive Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 bg-slate-950 shadow-2xl group">
            <img
              src={pearsonPhoto}
              alt="Karl Pearson Correlation Regression 1896 Master Folio"
              className="w-full h-auto object-cover max-h-[500px] select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hotspot Markers Overlay */}
            {PEARSON_HOTSPOTS.map((hotspot) => {
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
                      ? 'scale-125 ring-4 ring-amber-400 bg-amber-500 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-slate-900/80 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/40 shadow-md backdrop-blur-sm'
                  }`}
                  title={isArabic ? hotspot.titleAr : hotspot.titleEn}
                  aria-label={isArabic ? hotspot.titleAr : hotspot.titleEn}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/95 text-amber-200 border border-amber-700/60 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
                    {isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}
                  </span>
                </button>
              );
            })}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between text-xs text-amber-200/90 font-mono">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                {isArabic ? 'الجمعية الملكية البريطانية • لندن 1896 م' : 'Royal Society of London • 1896'}
              </span>
              <span className="text-[11px] text-amber-300 font-bold">
                {isArabic ? '5 نقاط أرشيفية تفاعلية' : '5 Interactive Archival Hotspots'}
              </span>
            </div>
          </div>

          {/* Hotspot Quick Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {PEARSON_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{isArabic ? hotspot.titleAr.split('(')[0] : hotspot.titleEn.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hotspot Educational Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-amber-900/40 shadow-xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-amber-800/30 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
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

          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'الأثر الإحصائي في منهج الثانوية العامة:' : 'Foundational Curriculum Significance:'}</span>
            </div>
            <p className="text-xs text-amber-200/90 leading-relaxed">
              {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
            </p>
          </div>
        </div>
      </div>

      {/* Pearson Correlation & Regression Interactive Laboratory */}
      <div className="border-t border-amber-800/30 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {isArabic ? 'محاكي معامل ارتباط بيرسون وخطي الانحدار' : 'Interactive Pearson Correlation & Linear Regression Engine'}
            </h3>
          </div>

          {/* Dataset Preset Selector */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            {PRESETS.map((preset) => {
              const isSelected = preset.id === selectedPresetId;
              return (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? preset.nameAr.split('(')[0] : preset.nameEn.split('(')[0]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Scatterplot Canvas */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-slate-300">
                {isArabic ? currentPreset.nameAr : currentPreset.nameEn}
              </span>
              <span className="text-[10px] font-mono text-amber-400">
                n = {stats.n} {isArabic ? 'نقاط' : 'points'}
              </span>
            </div>

            {/* SVG Bivariate Scatterplot with Fitted Regression Line */}
            <div className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 flex justify-center">
              <svg viewBox="0 0 320 200" className="w-full max-w-[320px] h-[200px] overflow-visible">
                {/* Axes */}
                <line x1="35" y1="20" x2="35" y2="165" stroke="#475569" strokeWidth="1.5" />
                <line x1="35" y1="165" x2="300" y2="165" stroke="#475569" strokeWidth="1.5" />
                <text x="30" y="15" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">Y</text>
                <text x="305" y="170" fill="#94a3b8" fontSize="10" fontFamily="monospace">X</text>

                {/* Min / Max bounds for scaling */}
                {(() => {
                  const pts = currentPreset.points;
                  const maxX = Math.max(...pts.map((p) => p.x)) * 1.15;
                  const maxY = Math.max(...pts.map((p) => p.y)) * 1.15;

                  const mapSvgX = (xVal: number) => 35 + (xVal / maxX) * 255;
                  const mapSvgY = (yVal: number) => 165 - (yVal / maxY) * 140;

                  // Regression Line Endpoints (at x=0 and x=maxX)
                  const regY0 = stats.a + stats.b * 0;
                  const regYMax = stats.a + stats.b * maxX;

                  return (
                    <g>
                      {/* Regression Line */}
                      <line
                        x1={mapSvgX(0)}
                        y1={mapSvgY(regY0)}
                        x2={mapSvgX(maxX)}
                        y2={mapSvgY(regYMax)}
                        stroke="#f43f5e"
                        strokeWidth="2"
                        strokeDasharray="4,2"
                      />

                      {/* Scatter Points */}
                      {pts.map((p, idx) => (
                        <g key={idx}>
                          <circle
                            cx={mapSvgX(p.x)}
                            cy={mapSvgY(p.y)}
                            r="4.5"
                            fill="#f59e0b"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                          />
                          <text
                            x={mapSvgX(p.x)}
                            y={mapSvgY(p.y) - 6}
                            fill="#fde68a"
                            fontSize="8"
                            fontFamily="monospace"
                            textAnchor="middle"
                          >
                            ({p.x},{p.y})
                          </text>
                        </g>
                      ))}

                      {/* Centroid Point (x̄, ȳ) */}
                      <circle
                        cx={mapSvgX(stats.meanX)}
                        cy={mapSvgY(stats.meanY)}
                        r="6"
                        fill="#10b981"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={mapSvgX(stats.meanX) + 8}
                        y={mapSvgY(stats.meanY) - 4}
                        fill="#6ee7b7"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        (x̄, ȳ)
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>{isArabic ? currentPreset.xLabelAr : currentPreset.xLabelEn}</span>
              <span>{isArabic ? currentPreset.yLabelAr : currentPreset.yLabelEn}</span>
            </div>
          </div>

          {/* Statistical Breakdown & Formulas Column */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'معامل ارتباط بيرسون (r)' : 'Pearson Correlation (r)'}
                </span>
                <div className={`text-2xl sm:text-3xl font-black font-mono mt-1 ${stats.r >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stats.r >= 0 ? `+${stats.r.toFixed(4)}` : stats.r.toFixed(4)}
                </div>
                <span className="text-[10px] text-amber-300 font-bold block mt-0.5">
                  {isArabic ? stats.typeAr : stats.typeEn}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {isArabic ? 'معادلة خط الانحدار (ŷ = a + bx)' : 'Regression Line Equation'}
                </span>
                <div className="text-base sm:text-lg font-black text-amber-300 font-mono mt-1.5">
                  ŷ = {stats.a.toFixed(2)} {stats.b >= 0 ? `+ ${stats.b.toFixed(2)}x` : `- ${Math.abs(stats.b).toFixed(2)}x`}
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  b = {stats.b.toFixed(3)} | a = {stats.a.toFixed(3)}
                </span>
              </div>
            </div>

            {/* Summation Table matching Egyptian Thanawiya Amma Curriculum */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 font-mono text-xs">
              <div className="p-2.5 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-slate-300">
                <span className="font-bold">{isArabic ? 'جدول حساب المجاميع الإحصائية الستة:' : 'Curriculum 6-Summation Table:'}</span>
                <span className="text-amber-400 text-[10px]">كراسة المفاهيم</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-3 text-center">
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">∑x</span>
                  <span className="text-white font-bold">{stats.sumX}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">∑y</span>
                  <span className="text-white font-bold">{stats.sumY}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">∑xy</span>
                  <span className="text-emerald-400 font-bold">{stats.sumXY}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">∑x²</span>
                  <span className="text-white font-bold">{stats.sumX2}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">∑y²</span>
                  <span className="text-white font-bold">{stats.sumY2}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block">n</span>
                  <span className="text-amber-300 font-bold">{stats.n}</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono text-center">
              <span className="text-amber-400 font-bold">{isArabic ? 'قاعدة بيرسون الذهبية:' : 'Pearson’s Core Rule:'} </span>
              {isArabic
                ? 'يمر خط الانحدار دائماً بنقطة المتوسطين (x̄ = ' + stats.meanX.toFixed(1) + '، ȳ = ' + stats.meanY.toFixed(1) + ').'
                : 'The least-squares line always passes through the centroid (x̄ = ' + stats.meanX.toFixed(1) + ', ȳ = ' + stats.meanY.toFixed(1) + ').'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
