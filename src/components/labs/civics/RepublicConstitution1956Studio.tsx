import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Vote,
  Users,
  Award,
  Sliders,
  Scale,
  GraduationCap,
} from 'lucide-react';
import constitution1956Photo from '../../../assets/civics/republic_constitution_1956.jpg';
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

export const REPUBLIC_1956_HOTSPOTS: Hotspot[] = [
  {
    id: 'republic_presidential_proclamation',
    x: 55,
    y: 35,
    titleAr: 'إعلان الجمهورية والنظام الرئاسي',
    titleEn: 'Proclamation of the Republic & Presidential System',
    categoryAr: 'شكل الدولة',
    categoryEn: 'Form of State',
    descAr:
      'نصت المادة الأولى: "مصر دولة جمهورية ديمقراطية مستقلة، وهي أمة عربية جزء من الأمة العربية الكبرى"، مرسية النظام الرئاسي المنتخب ومبدأ السيادة الشعبية الخالصة بعد إلغاء الملكية وجلاء القوات البريطانية.',
    descEn:
      'Article 1 proclaimed: "Egypt is an independent democratic republic, and part of the greater Arab nation", establishing a presidential system and sovereign democracy post-monarchy and foreign troop evacuation.',
    constitutionalInsightAr:
      'أول دستور جمهوري في تاريخ مصر، استبدل الوراثة الملكية باقتراع الشعب المباشر لرئيس الجمهورية، موحداً بين الشرعية الثورية والشرعية الدستورية.',
    constitutionalInsightEn:
      'The first republican constitution in Egypt history, replacing dynastic succession with popular presidential election, cementing sovereign national independence.',
  },
  {
    id: 'women_full_suffrage_mandate',
    x: 42,
    y: 92,
    titleAr: 'إقرار الحقوق السياسية والانتخابية للمرأة',
    titleEn: 'Universal Suffrage & Women\'s Political Rights',
    categoryAr: 'المواطنة والتمكين',
    categoryEn: 'Citizenship & Suffrage',
    descAr:
      'منحت المادة 19 المرأة المصرية حق الانتخاب والترشح للمجالس النيابية لأول مرة على قدم المساواة مع الرجل، مما أثمر انتخاب راوية عطية وأمينة شكري عام 1957 كأول برلمانيتين في تاريخ العالم العربي.',
    descEn:
      'Article 19 granted Egyptian women equal voting and candidacy rights for parliament, leading to the election of Rawya Ateya and Amina Shukri in 1957 as the first female MPs in the Arab world.',
    constitutionalInsightAr:
      'تحول دستوري وحقوقي فاصل أسقط عقوداً من حرمان المرأة من المشاركة السياسية، محققاً مبدأ المواطنة الكاملة دون تمييز على أساس الجنس.',
    constitutionalInsightEn:
      'A watershed constitutional milestone ending decades of female disenfranchisement, realizing full citizenship equality without gender discrimination.',
  },
  {
    id: 'eagle_of_saladin_republic_seal',
    x: 82,
    y: 28,
    titleAr: 'خاتم الجمهورية ونسر صلاح الدين الذهبي',
    titleEn: 'Seal of the Republic & Golden Eagle of Saladin',
    categoryAr: 'الرموز الدستورية',
    categoryEn: 'State Emblems',
    descAr:
      'الخاتم الرسمي للدولة المصرية الممهور بنسر صلاح الدين الأيوبي رافعاً درع الوحدة، مستبدلاً التاج الملكي القديم برمز التحرر والسيادة الوطنية والاستقلال.',
    descEn:
      'Official seal of the Egyptian Republic bearing the Eagle of Saladin carrying the shield of unity, replacing the monarchical crest with a symbol of anti-colonial sovereignty.',
    constitutionalInsightAr:
      'النسر الجمهوري جسد هوية الدولة الجديدة في القانون الدولي، مؤكداً استعادة مصر لقرارها الوطني المستقل وإنهاء حقبة التبعية والامتيازات الأجنبية.',
    constitutionalInsightEn:
      'The republican eagle emblem codified Egypt renewed sovereign identity in international law, ending foreign extraterritorial capitulations.',
  },
  {
    id: 'social_justice_state_principles',
    x: 22,
    y: 46,
    titleAr: 'العدالة الاجتماعية وتأميم المرافق العامة',
    titleEn: 'Social Justice, Public Services & Free Education',
    categoryAr: 'النظام الاقتصادي والاجتماعي',
    categoryEn: 'Socioeconomic Order',
    descAr:
      'ألزمت المواد 7-17 الدولة بالتخطيط الاقتصادي الشامل للعدالة الاجتماعية، وحماية الملكية العامة، ومجانية التعليم بكافة مراحله، وتوفير الرعاية الصحية لكل مواطن.',
    descEn:
      'Articles 7-17 mandated comprehensive economic planning for social justice, protection of public ownership, free public education across all levels, and healthcare guarantees.',
    constitutionalInsightAr:
      'وفّرت هذه المبادئ الدستورية الأساس القانوني لتأميم شركة قناة السويس في 26 يوليو 1956، معتبرة الموارد الطبيعية والمرافق الحيوية ملكاً للأمة لا يجوز التنازل عنها.',
    constitutionalInsightEn:
      'These constitutional provisions provided the legal foundation for the nationalization of the Suez Canal Company on July 26, 1956, defining vital assets as inalienable national wealth.',
  },
  {
    id: 'referendum_ballot_and_fountain_pen',
    x: 55,
    y: 92,
    titleAr: 'بطاقات الاستفتاء الشعبي (نعم) ۲۳ يونيو ۱۹٥٦',
    titleEn: 'Direct Referendum Ballot Slips (June 23, 1956)',
    categoryAr: 'الديمقراطية المباشرة',
    categoryEn: 'Direct Democracy',
    descAr:
      'بطاقات الاقتراع الخضراء الممهورة بـ (نعم) التي أدلى بها ملايين المواطنين في 23 يونيو 1956 للتصديق على الدستور ورئاسة جمال عبد الناصر بنسبة بلغت 99.8%.',
    descEn:
      'The green referendum ballot slips marked "YES" cast by millions on June 23, 1956, directly ratifying the constitution and the presidency of Gamal Abdel Nasser with 99.8% approval.',
    constitutionalInsightAr:
      'تطبيق حي لآلية الاستفتاء الدستوري التأسيسي؛ حيث استمد الدستور قوته الإلزامية العليا من الإرادة الشعبية المباشرة وليس من منحة أو فرمان ملكي.',
    constitutionalInsightEn:
      'A direct exercise of foundational constituent power; the constitution derived its supreme authority directly from popular plebiscite rather than royal grant.',
  },
];

export const RepublicConstitution1956Studio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(REPUBLIC_1956_HOTSPOTS[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1956 Suffrage & Social Investment Simulation
  // Baseline 1956 Egypt Male Electorate: ~5.5 Million
  // Female Electorate added: up to 5.5 Million
  const [femaleSuffrageRate, setFemaleSuffrageRate] = useState<number>(45); // % of eligible women registered
  const [educationBudgetRatio, setEducationBudgetRatio] = useState<number>(22); // % of national budget to public education

  const maleElectorateM = 5.5;
  const femaleElectorateM = +((femaleSuffrageRate / 100) * 5.5).toFixed(2);
  const totalElectorateM = +(maleElectorateM + femaleElectorateM).toFixed(2);

  // University enrollment multiplier based on free education investment
  // 1952 base university students ~50,000; up to 250,000 with 1956 social mandates
  const universityStudentsCount = Math.round(50000 + (educationBudgetRatio / 30) * 200000);

  const modalData: HiResImageModalData = {
    imageUrl: constitution1956Photo,
    titleAr: 'دستور الجمهورية المصرية ۱۹٥٦ الأصلي',
    titleEn: 'Original 1956 Constitution of the Republic of Egypt',
    subtitleAr: 'الجريدة الرسمية وإعلان الجمهورية وبطاقات الاستفتاء التاريخية',
    subtitleEn: 'Official Gazette, Proclamation of the Republic & Historical Plebiscite Ballots',
    descriptionAr:
      'الجريدة الرسمية للجمهورية المصرية الصادرة في 23 يونيو 1956، متضمنة الدستور الذي أقر حقوق المرأة السياسية الكاملة ومجانية التعليم والعدالة الاجتماعية، مع خاتم نسر صلاح الدين الذهبي وقلم التوقيع الرئاسي وبطاقات الاستفتاء.',
    descriptionEn:
      'The Official Gazette of the Republic of Egypt published on June 23, 1956, containing the constitutional charter enfranchising women, guaranteeing free education and public ownership, alongside the presidential eagle seal and referendum ballots.',
    locationAr: 'دار الوثائق القومية بالقاهرة / متحف الزعيم جمال عبد الناصر، مصر',
    locationEn: 'National Archives of Egypt / Gamal Abdel Nasser Museum, Cairo, Egypt',
    dateOrEraAr: '23 يونيو 1956 م (إعلان الجمهورية والدستور الجديد)',
    dateOrEraEn: 'June 23, 1956 (Proclamation of the Republic & New Constitution)',
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
            src={constitution1956Photo}
            alt={isArabic ? 'دستور 1956 وإعلان الجمهورية' : '1956 Republic Constitution'}
            className="w-full h-full object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Interactive Scientific & Archival Hotspots */}
          {REPUBLIC_1956_HOTSPOTS.map((h) => {
            const isSelected = selectedHotspot.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHotspot(h)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                aria-label={isArabic ? h.titleAr : h.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] ${
                  isSelected
                    ? 'bg-emerald-500 border-white shadow-lg shadow-emerald-500/50 scale-125 z-20'
                    : 'bg-emerald-950/80 border-emerald-400/80 hover:bg-emerald-600 hover:scale-110 z-10'
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
            <Maximize2 className="w-4 h-4 text-emerald-400" />
            <span>{isArabic ? 'تكبير وفحص الوثيقة 4K' : 'Inspect 4K Folio'}</span>
          </button>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                {isArabic ? 'الجريدة الرسمية للجمهورية المصرية ۱۹٥٦ م' : 'Official Gazette of the Republic of Egypt 1956'}
              </span>
              <h2 className="text-lg md:text-xl font-black">
                {isArabic ? 'دستور الجمهورية المصرية وتأكيد السيادة ۱۹٥٦' : 'The 1956 Republican Constitution of Egypt'}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'إعلان الجمهورية • حقوق المرأة • مجانية التعليم' : 'Republic Proclaimed • Women Suffrage • Free Education'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 md:p-5 rounded-2xl border ${cardBg} space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/50 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base md:text-lg font-black text-emerald-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="pt-2 flex items-start gap-2.5 text-xs font-mono text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-800/40">
          <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-400">
              {isArabic ? 'الأثر الدستوري والاجتماعي: ' : 'Constitutional & Social Impact: '}
            </strong>
            {isArabic ? selectedHotspot.constitutionalInsightAr : selectedHotspot.constitutionalInsightEn}
          </div>
        </div>
      </div>

      {/* 1956 Women Suffrage & Free Education Social Investment Simulator */}
      <div className={`p-5 rounded-2xl border ${cardBg} space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <Vote className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm md:text-base font-bold text-slate-100">
              {isArabic
                ? 'محاكي تمكين المرأة الانتخابي ومجانية التعليم بدستور ۱۹٥٦'
                : '1956 Women Enfranchisement & Free Higher Education Social Engine'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">{isArabic ? 'المادة 19 للمرأة' : 'Article 19 Suffrage'}</span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold">
              {isArabic ? 'استفتاء 23 يونيو' : 'June 23 Plebiscite'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Electorate Expansion Visualizer */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>{isArabic ? 'قاعدة الناخبين الوطنية بعد مشاركة المرأة' : 'National Electorate with Female Suffrage'}</span>
              <span className="text-emerald-400 font-bold">{totalElectorateM}M {isArabic ? 'مواطن ناخب' : 'Total Voters'}</span>
            </div>

            {/* Split Bar of Voters */}
            <div className="h-8 w-full rounded-xl overflow-hidden flex bg-slate-800 border border-slate-700">
              <div
                style={{ width: `${(maleElectorateM / totalElectorateM) * 100}%` }}
                className="bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300"
              >
                {maleElectorateM}M ({isArabic ? 'رجال' : 'Men'})
              </div>
              <div
                style={{ width: `${(femaleElectorateM / totalElectorateM) * 100}%` }}
                className="bg-rose-500 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-300"
              >
                {femaleElectorateM > 0.5 ? `${femaleElectorateM}M (${isArabic ? 'نساء' : 'Women'})` : ''}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'الناخبات المقيدات' : 'Enfranchised Women'}</span>
                </div>
                <span className="text-xl font-black text-white">{femaleElectorateM}M</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'معدل التسجيل: ' : 'Registration Rate: '} {femaleSuffrageRate}%
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'طلاب الجامعات بالمجان' : 'University Students'}</span>
                </div>
                <span className="text-xl font-black text-white">{universityStudentsCount.toLocaleString()}</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  {isArabic ? 'مخصصات التعليم: ' : 'Education Share: '} {educationBudgetRatio}%
                </p>
              </div>
            </div>
          </div>

          {/* Controls Side */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'نسبة إقبال وتسجيل المرأة في جداول الانتخاب' : 'Women Voter Registration Rate'}
                </span>
                <span className="font-mono text-emerald-400 font-bold">{femaleSuffrageRate}%</span>
              </label>
              <input
                type="range"
                min="5"
                max="90"
                step="5"
                value={femaleSuffrageRate}
                onChange={(e) => setFemaleSuffrageRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  {isArabic ? 'نسبة موازنة مجانية التعليم والجامعات' : 'Public Education Budget Allocation'}
                </span>
                <span className="font-mono text-emerald-400 font-bold">{educationBudgetRatio}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="35"
                step="1"
                value={educationBudgetRatio}
                onChange={(e) => setEducationBudgetRatio(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Historical Landmark Evaluation */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">
                  {isArabic ? 'الريادة البرلمانية التاريخية' : 'Arab World First Milestone'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600">
                  <Award className="w-3.5 h-3.5" />
                  {isArabic ? 'انتخاب أول نائبتين 1957' : 'First 2 Female MPs 1957'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isArabic
                  ? 'بفضل المادة 19، فازت راوية عطية في دائرة الجيزة وأمينة شكري في الإسكندرية عام 1957، ليكونا أول سيدتين تنتخبان في برلمان عربي في التاريخ المعاصر.'
                  : 'Thanks to Article 19, Rawya Ateya (Giza) and Amina Shukri (Alexandria) won seats in 1957, becoming the first women elected to any Arab parliament.'}
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
