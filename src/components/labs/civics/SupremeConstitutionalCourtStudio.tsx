import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Scale,
  CheckCircle2,
  FileCheck,
  AlertTriangle,
  Gavel,
} from 'lucide-react';
import scc2014Photo from '../../../assets/civics/supreme_constitutional_court_2014.jpg';
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

export const SCC_2014_HOTSPOTS: Hotspot[] = [
  {
    id: 'supreme_constitutional_charter_2014',
    x: 32,
    y: 55,
    titleAr: 'وثيقة دستور ۲۰۱٤ الرسمية المعتمدة',
    titleEn: 'The 2014 Egyptian Constitution Master Folio',
    categoryAr: 'القانون الأسمى للدولة',
    categoryEn: 'Supreme Law of the Land',
    descAr:
      'ميثاق دستور مصر الصادر في 18 يناير 2014 في 247 مادة؛ يقر سيادة القانون أساساً للحكم (المادة 94)، واستقلال القضاء وحصانته (المادة 184)، وحظر المساس بجوهر الحقوق والحريات (المادة 92).',
    descEn:
      'Promulgated on January 18, 2014 (247 articles); enshrining the rule of law (Art. 94), judicial independence (Art. 184), and absolute protection of rights and liberties from legislative curtailment (Art. 92).',
    constitutionalInsightAr:
      'الدستور هو الهرم التشريعي الأسمى؛ وقواعده فوق القوانين واللوائح، وتعد المحكمة الدستورية العليا الحارس الحصري له ضد أي انحراف تشريعي أو إداري.',
    constitutionalInsightEn:
      'The Constitution is the apex of the legal hierarchy; its principles override statutory laws and administrative decrees, guarded exclusively by the Supreme Constitutional Court.',
  },
  {
    id: 'judicial_gavel_binding_precedents',
    x: 67,
    y: 64,
    titleAr: 'مطرقة القضاء الدستوري والحجية المطلقة للأحكام',
    titleEn: 'Judicial Gavel & Erga Omnes Binding Authority',
    categoryAr: 'الرقابة القضائية',
    categoryEn: 'Constitutional Adjudication',
    descAr:
      'مطرقة منصة الحكم بالمحكمة الدستورية العليا؛ ترمز للأحكام الدستورية الباتة التي تتمتع بالحجية المطلقة للكافة (Erga Omnes) وتُلزم جميع سلطات الدولة والمواطنين دون استثناء بمجرد نشرها في الجريدة الرسمية.',
    descEn:
      'Judicial gavel of the Supreme Constitutional Court; symbolizes definitive rulings possessing universal binding authority (Erga Omnes), legally binding all state authorities and citizens upon Official Gazette publication.',
    constitutionalInsightAr:
      'المادة 195 نصت صراحة: "تنشر في الجريدة الرسمية الأحكام والقرارات الصادرة من المحكمة الدستورية العليا، وهي ملزمة للكافة وجميع سلطات الدولة، وتكون لها حجية مطلقة بالنسبة لهم".',
    constitutionalInsightEn:
      'Article 195 explicitly dictates: "Judgments and decisions of the Supreme Constitutional Court are published in the Official Gazette, universally binding on all state authorities and all persons".',
  },
  {
    id: 'bronze_scales_of_justice',
    x: 79,
    y: 38,
    titleAr: 'ميزان العدالة الدستورية والمساواة أمام القانون',
    titleEn: 'Scales of Constitutional Justice & Civil Equality',
    categoryAr: 'الحقوق الأساسية',
    categoryEn: 'Fundamental Rights',
    descAr:
      'ميزان العدالة البرونزي يرمز للمساواة الكاملة للمواطنين لدى القانون (المادة 53)، وحماية الكرامة الإنسانية (المادة 51: "الكرامة حق لكل إنسان، وتلتزم الدولة باحترامها وحمايتها").',
    descEn:
      'Bronze scales of justice symbolizing absolute equality before the law (Art. 53) and inalienable human dignity (Art. 51: "Dignity is a right for every person, which the State respects and protects").',
    constitutionalInsightAr:
      'تراقب المحكمة عدم إخلال المشرع العادي بمبدأ تكافؤ الفرص وحيادية الدولة، وتلغي أي تشريع ينطوي على تمييز تحكمي أو تفضيل غير مبرر.',
    constitutionalInsightEn:
      'The Court scrutinizes statutory enactments to prevent violations of equal opportunity and state neutrality, striking down arbitrary discrimination or unjustified favoritism.',
  },
  {
    id: 'official_gazette_ruling_volumes',
    x: 88,
    y: 52,
    titleAr: 'مجلدات أحكام المحكمة الدستورية بالجريدة الرسمية',
    titleEn: 'Official Gazette Supreme Constitutional Judgments',
    categoryAr: 'السوابق الدستورية',
    categoryEn: 'Constitutional Precedents',
    descAr:
      'أرشيف الأحكام الرسمية الصادرة عن المحكمة في الدعاوى الدستورية وتنازع الاختصاص وطلبات التفسير التشريعي الملزم الصادرة منذ تأسيس المحكمة العليا عام 1969 والدستورية العليا عام 1979.',
    descEn:
      'Official archive of judgments in constitutionality cases, jurisdictional conflicts, and binding statutory interpretations since the foundation of the Supreme Court (1969) and SCC (1979).',
    constitutionalInsightAr:
      'الحكم بعدم دستورية أي نص قانوني يجرده من قوته التنفيذية، ويعتبر النص كأن لم يكن، مع تطبيق الأثر الرجعي المباشر في القضايا الجنائية لصالح المحكوم عليهم.',
    constitutionalInsightEn:
      'A declaration of unconstitutionality immediately strips the statute of legal force, treating it as void ab initio, with retroactive effect in criminal matters benefitting detainees.',
  },
  {
    id: 'constitutional_safeguards_education_health',
    x: 38,
    y: 84,
    titleAr: 'الاستحقاقات الدستورية للتعليم والصحة والبحث العلمي',
    titleEn: 'Constitutional Mandated Quotas (Education, Health, R&D)',
    categoryAr: 'الاستحقاقات الملزمة',
    categoryEn: 'Mandatory Allocations',
    descAr:
      'ألزمت المواد 18 و19 و21 و23 الدولة بتخصيص نسب دستورية محددة من الناتج القومي الإجمالي: 4% للتعليم، 3% للصحة، 2% للتعليم العالي، و1% للبحث العلمي، تتصاعد للوصول للمعدلات العالمية.',
    descEn:
      'Articles 18, 19, 21, and 23 legally obligate the State to allocate mandatory percentages of GDP: 4% for education, 3% for healthcare, 2% for higher education, and 1% for scientific research.',
    constitutionalInsightAr:
      'إلزام الموازنة العامة بنسب إنفاق دنيا على التنمية البشرية يمثل ضمانة دستورية غير مسبوقة لحماية حقوق الطبقات الكادحة ومستقبل الأجيال الجديدة.',
    constitutionalInsightEn:
      'Binding the state budget to mandatory social investment minimums represents an unprecedented constitutional guarantee safeguarding social mobility and future generations.',
  },
];

interface CaseScenario {
  id: string;
  titleAr: string;
  titleEn: string;
  contestedLawAr: string;
  contestedLawEn: string;
  relevantArticle: number;
  articleSummaryAr: string;
  articleSummaryEn: string;
  verdict: 'unconstitutional' | 'constitutional';
  legalReasoningAr: string;
  legalReasoningEn: string;
}

const CASES_DOCKET: CaseScenario[] = [
  {
    id: 'case_press_prior_censorship',
    titleAr: 'الطعن على قانون يفرض رقابة مسبقة على الصحف الخاصة',
    titleEn: 'Challenge to Law Imposing Prior Censorship on Press',
    contestedLawAr: 'نص يمنح جهة إدارية سلطة مراجعة وحجب الصحف المستقلة قبل طباعتها.',
    contestedLawEn: 'Statutory clause granting administrative bodies authority to inspect and withhold independent print media.',
    relevantArticle: 71,
    articleSummaryAr: 'المادة 71: يحظر بأي وجه فرض رقابة على الصحف ووسائل الإعلام المصرية أو مصادرتها أو وقفها أو إغلاقها.',
    articleSummaryEn: 'Article 71: Censorship, confiscation, suspension, or closure of Egyptian media is strictly prohibited.',
    verdict: 'unconstitutional',
    legalReasoningAr: 'حكمت المحكمة بعدم دستورية النص لمخالفته الصريحة للمادة 71، حيث لا يجوز تقييد حرية الصحافة بوسائل إدارية مسبقة.',
    legalReasoningEn: 'Ruled unconstitutional as a direct violation of Art. 71; freedom of press cannot be curtailed via prior administrative censorship.',
  },
  {
    id: 'case_antiquities_protection',
    titleAr: 'دستورية قانون تغليظ عقوبة تهريب الآثار الوطنية',
    titleEn: 'Constitutionality of Law Strengthening Penalties on Antiquities Smuggling',
    contestedLawAr: 'قانون يشدد العقوبات الجنائية ومصادرة الأموال للمتورطين في تهريب الآثار المصرية وتجارتها غير المشروعة.',
    contestedLawEn: 'Legislation intensifying criminal penalties and asset seizures against illicit antiquities traffickers.',
    relevantArticle: 49,
    articleSummaryAr: 'المادة 49: تلزم الدولة بحماية الآثار والحفاظ عليها، والاعتداء عليها والاتجار فيها جريمة لا تسقط بالتقادم.',
    articleSummaryEn: 'Article 49: The State is committed to protecting antiquities; assault on or trafficking them is a non-expiring crime.',
    verdict: 'constitutional',
    legalReasoningAr: 'قضت المحكمة برفض الطعن وتأييد دستورية القانون لأنه يحقق الالتزام الدستوري الوارد بالمادة 49 بحماية التراث الحضاري للوطن.',
    legalReasoningEn: 'Upheld constitutionality; the statute faithfully executes the constitutional mandate in Art. 49 safeguarding national heritage.',
  },
  {
    id: 'case_sectarian_parties_ban',
    titleAr: 'دستورية حظر تأسيس الأحزاب على أساس ديني أو طائفي',
    titleEn: 'Constitutionality of Banning Parties Founded on Religious Grounds',
    contestedLawAr: 'نص قانون الأحزاب السياسية الذي يحظر قيام أي حزب سياسي على أساس ديني أو طائفي أو جغرافي أو عسكري.',
    contestedLawEn: 'Political Parties Law clause banning parties formed on religious, sectarian, geographical, or military foundations.',
    relevantArticle: 74,
    articleSummaryAr: 'المادة 74: للمواطنين حق تكوين الأحزاب بإخطار، ولا يجوز مباشرة أي نشاط سياسي أو حزبي على أساس ديني أو طائفي.',
    articleSummaryEn: 'Article 74: Citizens may form parties upon notification; no party activity on religious or sectarian grounds is permitted.',
    verdict: 'constitutional',
    legalReasoningAr: 'قضت المحكمة بدستورية النص لتطابقه مع المادة 74 صيانةً للوحدة الوطنية ومدنية الدولة وتكافؤ فرص المواطنين دون استقطاب طائفي.',
    legalReasoningEn: 'Upheld constitutionality; precisely mirrors Art. 74 to preserve national unity, the civic state, and prevent sectarian strife.',
  },
  {
    id: 'case_arbitrary_gender_exclusion',
    titleAr: 'الطعن على شرط استبعاد الإناث من التعيين بإحدى الهيئات القضائية',
    titleEn: 'Challenge to Gender-Exclusion Rules in Judicial Appointments',
    contestedLawAr: 'لائحة داخلية تستبعد خريجات كليات الحقوق من التقدم لمسابقة وظائف معاون نيابة أو قضاء إداري.',
    contestedLawEn: 'Internal rule excluding female law graduates from applying to assistant prosecutor or administrative judge positions.',
    relevantArticle: 53,
    articleSummaryAr: 'المادة 53: المواطنون متساوون في الحقوق والواجبات، لا تمييز بينهم بسبب الجنس... والمادة 11: كفالة تعيين المرأة بالجهات القضائية.',
    articleSummaryEn: 'Art. 53: Citizens are equal without gender discrimination... Art. 11: The state guarantees appointment of women in judicial bodies.',
    verdict: 'unconstitutional',
    legalReasoningAr: 'حكمت المحكمة بعدم دستورية النص لمخالفته الصريحة لمبدأي المساواة وتكافؤ الفرص وكفالة الدستور حق المرأة في تقلد المناصب القضائية.',
    legalReasoningEn: 'Ruled unconstitutional; violates equality, equal opportunity, and the constitutional guarantee of female judicial appointments.',
  },
];

export const SupremeConstitutionalCourtStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(SCC_2014_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Judicial Review Sandbox State
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [studentVerdict, setStudentVerdict] = useState<'pending' | 'constitutional' | 'unconstitutional'>('pending');

  const activeCase = CASES_DOCKET[selectedCaseIndex];
  const isVerdictEvaluated = studentVerdict !== 'pending';
  const isVerdictCorrect = studentVerdict === activeCase.verdict;

  // GDP Constitutional Allocation Sandbox State
  // Egypt GDP Baseline approx 10 Trillion EGP
  const [educationAllocation, setEducationAllocation] = useState<number>(4.2); // Target >= 4%
  const [healthAllocation, setHealthAllocation] = useState<number>(3.1); // Target >= 3%
  const [higherEdAllocation, setHigherEdAllocation] = useState<number>(2.0); // Target >= 2%
  const [rndAllocation, setRndAllocation] = useState<number>(1.0); // Target >= 1%

  const isEduCompliant = educationAllocation >= 4.0;
  const isHealthCompliant = healthAllocation >= 3.0;
  const isHigherEdCompliant = higherEdAllocation >= 2.0;
  const isRndCompliant = rndAllocation >= 1.0;
  const isFullBudgetCompliant = isEduCompliant && isHealthCompliant && isHigherEdCompliant && isRndCompliant;

  const modalData: HiResImageModalData = {
    imageUrl: scc2014Photo,
    titleAr: 'دستور جمهورية مصر العربية ۲۰۱٤ والمحكمة الدستورية العليا',
    titleEn: 'The 2014 Constitution of Egypt & Supreme Constitutional Court',
    subtitleAr: 'المخطوط الرسمي ومطرقة القضاء الدستوري وميزان العدالة بالمعادي',
    subtitleEn: 'Master Official Charter, Judicial Gavel & Bronze Scales of Justice at Maadi Courtroom',
    descriptionAr:
      'النسخة الأرشيفية الرسمية لدستور 2014 بمحراب المحكمة الدستورية العليا بكورنيش المعادي بالقاهرة، بجانب مطرقة القضاء وميزان العدالة البرونزي ومجلدات الأحكام القضائية الباتة الملزمة للكافة.',
    descriptionEn:
      'The official master copy of the 2014 Constitution at the Supreme Constitutional Court in Maadi, Cairo, accompanied by the judge gavel, bronze scales of justice, and official judicial reports.',
    locationAr: 'المحكمة الدستورية العليا، كورنيش النيل، المعادي، القاهرة، مصر',
    locationEn: 'Supreme Constitutional Court, Nile Corniche, Maadi, Cairo, Egypt',
    dateOrEraAr: '18 يناير 2014 م (دستور مصر النافذ)',
    dateOrEraEn: 'January 18, 2014 (Active Egyptian Constitution)',
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
            src={scc2014Photo}
            alt={isArabic ? 'دستور 2014 والمحكمة الدستورية العليا' : '2014 Constitution & Supreme Constitutional Court'}
            className="w-full h-full object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Interactive Scientific & Archival Hotspots */}
          {SCC_2014_HOTSPOTS.map((h) => {
            const isSelected = selectedHotspot.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHotspot(h)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                aria-label={isArabic ? h.titleAr : h.titleEn}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] ${
                  isSelected
                    ? 'bg-sky-500 border-white shadow-lg shadow-sky-500/50 scale-125 z-20'
                    : 'bg-sky-950/80 border-sky-400/80 hover:bg-sky-600 hover:scale-110 z-10'
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
            <Maximize2 className="w-4 h-4 text-sky-400" />
            <span>{isArabic ? 'تكبير وفحص الوثيقة 4K' : 'Inspect 4K Folio'}</span>
          </button>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold">
                {isArabic ? 'المحكمة الدستورية العليا بالمعادي ۲۰۱٤ م' : 'Supreme Constitutional Court of Egypt 2014'}
              </span>
              <h2 className="text-lg md:text-xl font-black">
                {isArabic ? 'دستور جمهورية مصر العربية ۲۰۱٤ والرقابة الدستورية' : 'The 2014 Constitution of Egypt & Judicial Review'}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
              <Scale className="w-4 h-4 text-sky-400" />
              <span>{isArabic ? 'سيادة القانون • حجية مطلقة • استحقاقات ملزمة' : 'Rule of Law • Erga Omnes • Mandatory Quotas'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 md:p-5 rounded-2xl border ${cardBg} space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/50 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
            <h3 className="text-base md:text-lg font-black text-sky-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="pt-2 flex items-start gap-2.5 text-xs font-mono text-sky-300/90 bg-sky-950/20 p-3 rounded-xl border border-sky-800/40">
          <BookOpen className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-sky-400">
              {isArabic ? 'الأثر القضائي والدستوري: ' : 'Judicial & Constitutional Impact: '}
            </strong>
            {isArabic ? selectedHotspot.constitutionalInsightAr : selectedHotspot.constitutionalInsightEn}
          </div>
        </div>
      </div>

      {/* Engine 1: Constitutional Judicial Review Case Docket */}
      <div className={`p-5 rounded-2xl border ${cardBg} space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <Gavel className="w-5 h-5 text-sky-400" />
            <h3 className="text-sm md:text-base font-bold text-slate-100">
              {isArabic
                ? 'محراب الرقابة الدستورية: محاكي الفصل في دستورية القوانين'
                : 'Constitutional Judicial Review Docket & Deliberation Sandbox'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">{isArabic ? 'قضية' : 'Case'} {selectedCaseIndex + 1} / {CASES_DOCKET.length}</span>
            <span className="px-2.5 py-0.5 rounded bg-sky-950 border border-sky-700 text-sky-300 font-bold">
              {isArabic ? 'المادة 192 اختصاص حصري' : 'Art. 192 Sole Jurisdiction'}
            </span>
          </div>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {CASES_DOCKET.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIndex(idx);
                setStudentVerdict('pending');
              }}
              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] ${
                selectedCaseIndex === idx
                  ? 'bg-sky-950/60 border-sky-400 text-white shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-bold text-sky-300 truncate">{isArabic ? c.titleAr : c.titleEn}</div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">{isArabic ? 'المادة الدستورية:' : 'Article:'} {c.relevantArticle}</div>
            </button>
          ))}
        </div>

        {/* Active Case Details Card */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
              {isArabic ? 'النص التشريعي المطعون عليه:' : 'Contested Statutory Clause:'}
            </span>
            <p className="text-sm text-slate-200 font-serif leading-relaxed">
              {isArabic ? activeCase.contestedLawAr : activeCase.contestedLawEn}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-800/40 text-xs font-mono text-sky-300">
            <strong className="text-sky-400 block mb-1">
              {isArabic ? 'المعيار الدستوري الحاكم (دستور 2014):' : 'Constitutional Benchmark (2014 Constitution):'}
            </strong>
            {isArabic ? activeCase.articleSummaryAr : activeCase.articleSummaryEn}
          </div>

          {/* Student Adjudication Action */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-300 font-bold">
              {isArabic ? 'بصفتك قاضياً دستورياً، كيف تحكم المحكمة الدستورية العليا؟' : 'As a Constitutional Justice, what is the Court judgment?'}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStudentVerdict('constitutional')}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer min-h-[44px] ${
                  studentVerdict === 'constitutional'
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                }`}
              >
                {isArabic ? 'مطابق للدستور (دستوري)' : 'Constitutional (Upheld)'}
              </button>
              <button
                onClick={() => setStudentVerdict('unconstitutional')}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer min-h-[44px] ${
                  studentVerdict === 'unconstitutional'
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                }`}
              >
                {isArabic ? 'مخالف للدستور (عدم دستورية)' : 'Unconstitutional (Void)'}
              </button>
            </div>
          </div>

          {/* Adjudication Outcome Feedback */}
          {isVerdictEvaluated && (
            <div
              className={`p-3.5 rounded-xl border space-y-1.5 ${
                isVerdictCorrect
                  ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200'
                  : 'bg-amber-950/50 border-amber-500/50 text-amber-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold">
                {isVerdictCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isArabic ? 'حكم دستوري صائب وصحيح تماماً!' : 'Correct Constitutional Adjudication!'}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>{isArabic ? 'قضاء المحكمة الدستورية العليا الفعلي كان مختلفاً:' : 'Official SCC Ruling was:'}</span>
                  </>
                )}
              </div>
              <p className="text-xs leading-relaxed font-mono">
                {isArabic ? activeCase.legalReasoningAr : activeCase.legalReasoningEn}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Engine 2: Constitutional GDP Spending Allocation Benchmark */}
      <div className={`p-5 rounded-2xl border ${cardBg} space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-5 h-5 text-sky-400" />
            <h3 className="text-sm md:text-base font-bold text-slate-100">
              {isArabic
                ? 'حاسبة الاستحقاقات الدستورية الملزمة للموازنة العامة (التعليم والصحة والبحث العلمي)'
                : 'Mandatory Constitutional GDP Quotas Compliance Calculator'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            {isFullBudgetCompliant ? (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isArabic ? 'موازنة دستورية مطابقة 100%' : '100% Constitutionally Compliant'}
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                {isArabic ? 'عجز في الاستحقاق الدستوري' : 'Quota Deficit'}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Education Allocation Slider (Art. 19 >= 4%) */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">{isArabic ? 'التعليم قبل الجامعي (م 19)' : 'Pre-University (Art. 19)'}</span>
              <span className={`font-mono font-bold ${isEduCompliant ? 'text-emerald-400' : 'text-rose-400'}`}>
                {educationAllocation}% (الهدف ≥ 4%)
              </span>
            </div>
            <input
              type="range"
              min="2.0"
              max="7.0"
              step="0.1"
              value={educationAllocation}
              onChange={(e) => setEducationAllocation(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>{isArabic ? 'الحد الأدنى الدستوري: 4%' : 'Min Quota: 4%'}</span>
              <span>{isEduCompliant ? '✅ مستوفى' : '⚠️ عجز'}</span>
            </div>
          </div>

          {/* Health Allocation Slider (Art. 18 >= 3%) */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">{isArabic ? 'الرعاية الصحية (م 18)' : 'Healthcare (Art. 18)'}</span>
              <span className={`font-mono font-bold ${isHealthCompliant ? 'text-emerald-400' : 'text-rose-400'}`}>
                {healthAllocation}% (الهدف ≥ 3%)
              </span>
            </div>
            <input
              type="range"
              min="1.5"
              max="6.0"
              step="0.1"
              value={healthAllocation}
              onChange={(e) => setHealthAllocation(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>{isArabic ? 'الحد الأدنى الدستوري: 3%' : 'Min Quota: 3%'}</span>
              <span>{isHealthCompliant ? '✅ مستوفى' : '⚠️ عجز'}</span>
            </div>
          </div>

          {/* Higher Education Allocation Slider (Art. 21 >= 2%) */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">{isArabic ? 'التعليم الجامعي (م 21)' : 'Higher Education (Art. 21)'}</span>
              <span className={`font-mono font-bold ${isHigherEdCompliant ? 'text-emerald-400' : 'text-rose-400'}`}>
                {higherEdAllocation}% (الهدف ≥ 2%)
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="4.5"
              step="0.1"
              value={higherEdAllocation}
              onChange={(e) => setHigherEdAllocation(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>{isArabic ? 'الحد الأدنى الدستوري: 2%' : 'Min Quota: 2%'}</span>
              <span>{isHigherEdCompliant ? '✅ مستوفى' : '⚠️ عجز'}</span>
            </div>
          </div>

          {/* Scientific Research Allocation Slider (Art. 23 >= 1%) */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">{isArabic ? 'البحث العلمي (م 23)' : 'Scientific R&D (Art. 23)'}</span>
              <span className={`font-mono font-bold ${isRndCompliant ? 'text-emerald-400' : 'text-rose-400'}`}>
                {rndAllocation}% (الهدف ≥ 1%)
              </span>
            </div>
            <input
              type="range"
              min="0.3"
              max="2.5"
              step="0.1"
              value={rndAllocation}
              onChange={(e) => setRndAllocation(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>{isArabic ? 'الحد الأدنى الدستوري: 1%' : 'Min Quota: 1%'}</span>
              <span>{isRndCompliant ? '✅ مستوفى' : '⚠️ عجز'}</span>
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
