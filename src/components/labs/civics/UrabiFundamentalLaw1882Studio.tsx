import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Shield,
  Sliders,
  Scale,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import urabi1882Photo from '../../../assets/civics/urabi_fundamental_law_1882.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  constitutionalInsightAr: string;
  constitutionalInsightEn: string;
}

export const URABI_1882_HOTSPOTS: Hotspot[] = [
  {
    id: 'abdin_palace_september_1881',
    x: 20,
    y: 84,
    titleAr: 'عريضة مظاهرة عابدين ۹ سبتمبر ۱۸۸۱',
    titleEn: 'Abdin Palace Demonstration Petition (Sept 9, 1881)',
    categoryAr: 'الشرارة الوطنية',
    categoryEn: 'National Awakening',
    descAr:
      'وقفة الزعيم أحمد عرابي التاريخية على صهوة جواده أمام الخديوي توفيق في ساحة عابدين، مقدماً المطالب الوطنية الثلاثة: عزل وزارة رياض باشا، وتشكيل مجلس شورى النواب، وزيادة الجيش إلى 18 ألف جندي.',
    descEn:
      'Colonel Ahmed Urabi historic confrontation before Khedive Tawfiq at Abdin Palace, presenting the three national demands: dismissal of Riaz Pasha, convocation of parliament, and expanding the army to 18,000 troops.',
    constitutionalInsightAr:
      'أطلق عرابي المبدأ الطبيعي للحقوق الدستورية: "لقد خلقنا الله أحراراً ولم يخلقنا تراثاً أو عقاراً؛ فوالله الذي لا إله إلا هو لا نورث ولا نستعبد بعد اليوم".',
    constitutionalInsightEn:
      'Urabi articulated the fundamental natural law of constitutional liberty: "God created us free and did not create us as heritage or chattel; by God, we shall never be inherited or enslaved henceforth".',
  },
  {
    id: 'la_ihah_asasiyyah_charter',
    x: 62,
    y: 48,
    titleAr: 'اللائحة الأساسية (دستور ۱۸۸۲)',
    titleEn: 'Al-Lā\'iḥah al-Asāsiyyah (1882 Fundamental Law)',
    categoryAr: 'الوثيقة الدستورية',
    categoryEn: 'Constitutional Charter',
    descAr:
      'صدرت اللائحة الأساسية في 7 فبراير 1882 (25 ربيع الآخر 1299 هـ) في 53 مادة، مرسية أول نظام نيابي حديث في تاريخ مصر يمارس فيه الشعب السلطة التشريعية.',
    descEn:
      'Promulgated on February 7, 1882 (53 articles), establishing the first genuine modern representative system in Egyptian history where the people exercised legislative oversight.',
    constitutionalInsightAr:
      'نصت المادة 3 على وجوب أخذ رأي مجلس النواب في جميع القوانين والمراسيم، وقررت المادة 15 حق النواب في توجيه الأسئلة واستجواب النظار (الوزراء).',
    constitutionalInsightEn:
      'Article 3 mandated parliamentary consent for all laws and decrees, while Article 15 granted deputies the sovereign right of interpellation and ministerial oversight.',
  },
  {
    id: 'parliament_budget_sovereignty',
    x: 74,
    y: 55,
    titleAr: 'حق البرلمان في مناقشة الميزانية الوطنية',
    titleEn: 'Parliamentary Fiscal & Budgetary Sovereignty',
    categoryAr: 'السيادة المالية',
    categoryEn: 'Fiscal Sovereignty',
    descAr:
      'كانت المادة 34 جوهر الصراع الدستوري؛ حيث أصر عرابي والنواب على حق المجلس في مناقشة وإقرار بنود الميزانية الوطنية الخاصة بالإيرادات والمصروفات الداخلية.',
    descEn:
      'Article 34 formed the epicenter of the constitutional clash; Urabi and parliament insisted on the representative right to debate and vote domestic expenditures and revenues.',
    constitutionalInsightAr:
      'رفضت بريطانيا وفرنسا حق البرلمان المصري في مراجعة الميزانية وأرسلتا المذكرة المشتركة الأولى لإلغاء المجلس، لأن الرقابة الوطنية كانت تمنع النهب المالي الأجنبي.',
    constitutionalInsightEn:
      'Britain and France sent the First Joint Note demanding the dissolution of parliament, fearing that Egyptian representative oversight would curb colonial financial exploitation.',
  },
  {
    id: 'military_saber_and_epaulettes',
    x: 18,
    y: 48,
    titleAr: 'سيف عرابي ورتبته العسكرية الذهبية',
    titleEn: 'Urabi Officer Saber & Bullion Epaulettes',
    categoryAr: 'الجيش الوطني',
    categoryEn: 'National Defense',
    descAr:
      'سيف القائد أحمد عرابي برتبة أميرالاي؛ يجسد تحول الجيش المصري من أداة حراسة للنخبة الحاكمة إلى درع شعبي يحمي الدستور وحقوق الفلاحين وأبناء الوطن.',
    descEn:
      'Colonel Ahmed Urabi ceremonial officer saber; symbolizes the transformation of the Egyptian military into a popular shield defending constitutionalism and peasant rights.',
    constitutionalInsightAr:
      'التلاحم الفريد بين الجيش والمجلس النيابي عام 1882 شكل نموذجاً مبكراً للمقاومة الدستورية ضد الاستعمار والتدخل الأجنبي في الشرق الأوسط.',
    constitutionalInsightEn:
      'The unified alliance between the national army and parliament in 1882 served as an early institutional model of anti-imperial constitutional resistance in the region.',
  },
  {
    id: 'nizarat_al_jihadiyyah_seal',
    x: 13,
    y: 65,
    titleAr: 'خاتم نظارة الجهادية في حكومة الثورة',
    titleEn: 'Ministry of War Seal in the Revolutionary Cabinet',
    categoryAr: 'السلطة التنفيذية',
    categoryEn: 'Executive Branch',
    descAr:
      'خاتم وزارة الدفاع (نظارة الجهادية) حين تولاها أحمد عرابي في فبراير 1882 في حكومة محمود سامي البارودي (رب السيف والقلم)، أول وزارة وطنية دستورية صريحة.',
    descEn:
      'Official seal of the Ministry of War when Ahmed Urabi assumed office in February 1882 under Prime Minister Mahmoud Sami al-Baroudi, forming Egypt first nationalist constitutional cabinet.',
    constitutionalInsightAr:
      'أول مرة في تاريخ مصر الحديث يتولى فيها مصري صميم من قاع الريف وزارة الحربية بمساندة شعبية وبرلمانية كاملة متجاوزاً الامتيازات الأرستقراطية.',
    constitutionalInsightEn:
      'Marked the first time in modern Egyptian history that a native son of the peasantry rose to head the military establishment backed by full parliamentary consensus.',
  },
];

export const UrabiFundamentalLaw1882Studio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(URABI_1882_HOTSPOTS[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1882 State Budget Simulator State
  // Total 1882 Egyptian State Budget was approximately 9.2 Million Egyptian Pounds (LE)
  const TOTAL_BUDGET = 9.2;
  const [foreignDebtPayment, setForeignDebtPayment] = useState<number>(4.2); // LE Million foreign debt service

  const domesticExpenditure = Math.max(0, +(TOTAL_BUDGET - foreignDebtPayment).toFixed(2));
  const foreignDebtPercent = Math.round((foreignDebtPayment / TOTAL_BUDGET) * 100);
  const domesticPercent = 100 - foreignDebtPercent;

  // Parliamentary Stand Evaluation
  const isUrabiNationalSovereignty = foreignDebtPayment <= 3.2; // National parliamentary priority
  const isAngloFrenchDominance = foreignDebtPayment >= 5.0; // Colonial hyper-extraction

  const modalData: HiResImageModalData = {
    imageUrl: urabi1882Photo,
    titleAr: 'اللائحة الأساسية للدولة المصرية ۱۸۸۲ الأصلية',
    titleEn: 'Original 1882 Fundamental Law of Egypt (Al-Lā\'iḥah al-Asāsiyyah)',
    subtitleAr: 'المخطوط الدستوري لثورة أحمد عرابي وسيفه العسكري وخاتم نظارة الجهادية',
    subtitleEn: 'Constitutional Charter of the Urabi Movement, Officer Saber & Ministry of War Seal',
    descriptionAr:
      'النسخة الأرشيفية للائحة الأساسية الصادرة في 7 فبراير 1882 (25 ربيع الآخر 1299 هـ)، مع سيف أحمد عرابي العسكري وعريضة مظاهرة عابدين الشهيرة التي طالبت بالحرية ومجلس شورى النواب المستقل.',
    descriptionEn:
      'Archival master folio of the 1882 Fundamental Law promulgated on Feb 7, 1882, accompanied by Ahmed Urabi saber and the historic Abdin Palace petition demanding civil liberty and parliamentary supremacy.',
    locationAr: 'دار الوثائق القومية، القاهرة / متحف أحمد عرابي بالشرقية، مصر',
    locationEn: 'National Archives of Egypt / Ahmed Urabi Museum, Sharkia, Egypt',
    dateOrEraAr: '7 فبراير 1882 م (25 ربيع الآخر 1299 هـ)',
    dateOrEraEn: 'February 7, 1882 (Urabi Constitutional Movement)',
  };

  const cardBg = isLight
    ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
    : isContrast
    ? 'bg-black border-yellow-400 text-yellow-300'
    : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl';

  return (
    <div className="space-y-6">
      {/* 4K Archival Showcase Viewer */}
      <div className={`relative rounded-2xl overflow-hidden border ${cardBg}`}>
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-slate-950">
          <img
            src={urabi1882Photo}
            alt={isArabic ? 'اللائحة الأساسية 1882' : '1882 Fundamental Law'}
            className="w-full h-full object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Interactive Scientific & Archival Hotspots */}
          {URABI_1882_HOTSPOTS.map((h) => {
            const isSelected = selectedHotspot.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHotspot(h)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                aria-label={isArabic ? h.titleAr : h.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] ${
                  isSelected
                    ? 'bg-amber-500 border-white shadow-lg shadow-amber-500/50 scale-125 z-20'
                    : 'bg-amber-950/80 border-amber-400/80 hover:bg-amber-600 hover:scale-110 z-10'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </button>
            );
          })}

          {/* Zoom & Inspect 4K Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer min-h-[44px]"
          >
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <span>{isArabic ? 'تكبير وفحص الوثيقة 4K' : 'Inspect 4K Folio'}</span>
          </button>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                {isArabic ? 'وثيقة دار الوثائق القومية بالقاهرة ۱۸۸۲ م' : 'Cairo National Archives Folio 1882'}
              </span>
              <h2 className="text-lg md:text-xl font-black">
                {isArabic ? 'اللائحة الأساسية للدولة المصرية ۱۸۸۲' : 'The 1882 Fundamental Law of Egypt'}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>{isArabic ? 'ثورة عرابي • ميزانية الشعب والبرلمان' : 'Urabi Revolution • Budgetary Sovereignty'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 md:p-5 rounded-2xl border ${cardBg} space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/50 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <h3 className="text-base md:text-lg font-black text-amber-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="pt-2 flex items-start gap-2.5 text-xs font-mono text-amber-300/90 bg-amber-950/20 p-3 rounded-xl border border-amber-800/40">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-400">
              {isArabic ? 'التحليل الدستوري والسياسي: ' : 'Constitutional & Geopolitical Insight: '}
            </strong>
            {isArabic ? selectedHotspot.constitutionalInsightAr : selectedHotspot.constitutionalInsightEn}
          </div>
        </div>
      </div>

      {/* Urabi 1882 State Budget & Parliamentary Oversight Simulator */}
      <div className={`p-5 rounded-2xl border ${cardBg} space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm md:text-base font-bold text-slate-100">
              {isArabic
                ? 'محاكي أزمة ميزانية ۱۸۸۲ والسيادة المالية لمجلس شورى النواب'
                : '1882 Budget Crisis & Parliamentary Fiscal Sovereignty Engine'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">{isArabic ? 'الميزانية الكلية:' : 'Total Budget:'} 9.2M LE</span>
            <span className="px-2.5 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
              {isArabic ? 'المادة 34 دستورية' : 'Article 34 Charter'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Vector SVG Budget Bar & Flow Diagram */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>{isArabic ? 'توزيع الميزانية العامة للدولة المصرية (1882)' : '1882 National Budget Allocation'}</span>
              <span className="text-amber-400 font-bold">9.2M LE (جنيه مصري ذهبي)</span>
            </div>

            {/* Split Bar Visualization */}
            <div className="h-8 w-full rounded-xl overflow-hidden flex bg-slate-800 border border-slate-700">
              <div
                style={{ width: `${domesticPercent}%` }}
                className="bg-emerald-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300"
              >
                {domesticPercent >= 15 ? `${domesticPercent}% ${isArabic ? 'خدمات وطنية' : 'Domestic'}` : ''}
              </div>
              <div
                style={{ width: `${foreignDebtPercent}%` }}
                className="bg-rose-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300"
              >
                {foreignDebtPercent >= 15 ? `${foreignDebtPercent}% ${isArabic ? 'صندوق الدين' : 'Debt'}` : ''}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
                <span className="text-emerald-400 font-bold block mb-1">
                  {isArabic ? 'الإنفاق الوطني والخدمات' : 'Domestic Public Services'}
                </span>
                <span className="text-lg font-black text-white">{domesticExpenditure}M LE</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'التعليم، الري، الجيش الوطني، والرواتب' : 'Education, irrigation, military & salaries'}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40">
                <span className="text-rose-400 font-bold block mb-1">
                  {isArabic ? 'خدمة الدين الأجنبي (صندوق الدين)' : 'Foreign Debt (Caisse de la Dette)'}
                </span>
                <span className="text-lg font-black text-white">{foreignDebtPayment}M LE</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'فوائد وسندات الدائنين الأوروبيين' : 'European creditor bonds & coupons'}
                </p>
              </div>
            </div>
          </div>

          {/* Controls & Geopolitical Conflict Evaluation */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  {isArabic ? 'المبلغ المخصص لصندوق الدين الأجنبي' : 'Allocated to Foreign Debt Caisse'}
                </span>
                <span className="font-mono text-rose-400 font-bold">{foreignDebtPayment}M LE</span>
              </label>
              <input
                type="range"
                min="1.5"
                max="6.5"
                step="0.1"
                value={foreignDebtPayment}
                onChange={(e) => setForeignDebtPayment(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Political & Constitutional Result */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">
                  {isArabic ? 'الموقف الدستوري لبرلمان الثورة' : 'Constitutional Standing of Parliament'}
                </span>
                {isUrabiNationalSovereignty ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isArabic ? 'سيادة وطنية كاملة' : 'Full National Sovereignty'}
                  </span>
                ) : isAngloFrenchDominance ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-600">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {isArabic ? 'هيمنة صندوق الدين' : 'Foreign Debt Domination'}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600">
                    <Shield className="w-3.5 h-3.5" />
                    {isArabic ? 'تسوية البارودي وعرابي' : 'National Compromise'}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isUrabiNationalSovereignty
                  ? isArabic
                    ? 'حماية أموال الفلاحين ودعم الجيش المصري والري؛ أدى لمطالبة القناصل بإلغاء الدستور وتوجيه المذكرة المشتركة الثانية.'
                    : 'Protects peasant wealth and funds army/irrigation; historically triggered the Anglo-French Second Joint Note.'
                  : isAngloFrenchDominance
                  ? isArabic
                    ? 'استنزاف أكثر من نصف دخل مصر لصالح المصارف الأوروبية؛ تسبب في تجويع الفلاحين واشتعال المقاومة الشعبية.'
                    : 'Extracts over half of Egypt revenue to European banks, immiserating the rural populace.'
                  : isArabic
                  ? 'موازنة حكيمة أقرتها وزارة البارودي تفصل بين الديون الخارجية والمصروفات الداخلية السيادية.'
                  : 'Prudent formulation by Baroudi cabinet distinguishing foreign covenants from sovereign domestic budgets.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Archival Fullscreen Inspection Modal */}
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
