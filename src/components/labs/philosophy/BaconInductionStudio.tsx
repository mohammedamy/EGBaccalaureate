import React, { useState } from 'react';
import {
  Maximize2,
  Info,
  Layers,
  Award,
  AlertTriangle,
  Compass,
  CheckCircle2,
  Ship,
} from 'lucide-react';
import baconPhoto from '../../../assets/philosophy/bacon_novum_organum_1620.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface BaconIdol {
  id: string;
  nameAr: string;
  nameEn: string;
  iconSymbol: string;
  definitionAr: string;
  definitionEn: string;
  realWorldExampleAr: string;
  realWorldExampleEn: string;
  cureAr: string;
  cureEn: string;
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
}

export const BACON_IDOLS: BaconIdol[] = [
  {
    id: 'tribe',
    nameAr: 'أوهام الجنس البشري (Idols of the Tribe)',
    nameEn: 'Idols of the Tribe (Idola Tribus)',
    iconSymbol: '👥',
    definitionAr:
      'أوهام فطرية عامة ومشتركة بين جميع أفراد البشر، تنشأ من قصور الطبيعة الإنسانية وميل العقل إلى التعميم المتسرع وقبول ما يوافق هوى النفس ورغباتها دون تمحيص.',
    definitionEn:
      'Innate psychological biases inherent in human nature itself; the human intellect’s tendency to hastily generalize, impose order where none exists, and accept affirmations fitting prior beliefs.',
    realWorldExampleAr:
      'التسرع في الحكم بأن كل دواء شعبي يشفي لمجرد شفاء شخصين به، أو الميل النفسي لتصديق الأخبار التي تريح ضمير الفرد.',
    realWorldExampleEn:
      'Confirmation bias: declaring a remedy effective because two acquaintances recovered, while ignoring thousands of counterexamples.',
    cureAr: 'التجريب الصارم، جمع الشواهد السلبية المعارضة (قوائم الحضور والغياب)، والتروي قبل إصدار الأحكام.',
    cureEn: 'Rigorous empirical trial, systematic compiling of negative tables, and suspended judgment.',
    thanawyaTrapAr:
      'في الامتحان الوزاري: أوهام الجنس "فطرية عامة" لا ينجو منها إنسان إلا بالمنهج العلمي، بينما أوهام الكهف "خاصة وفردية".',
    thanawyaTrapEn:
      'Ministerial Trap: Idols of the Tribe are universal/innate to human species, whereas Idols of the Cave are individualized and acquired.',
  },
  {
    id: 'cave',
    nameAr: 'أوهام الكهف (Idols of the Cave)',
    nameEn: 'Idols of the Cave (Idola Specus)',
    iconSymbol: '🕳️',
    definitionAr:
      'أوهام مكتسبة وفردية تنبع من التكوين الشخصي لكل إنسان (بيئته، تربيته، مهنته، وثقافته الخاصة)، حيث يعيش كل فرد في كهف خاص به يحجب عنه ضوء الحقيقة الشاملة.',
    definitionEn:
      'Acquired biases of the individual human mind formed by upbringing, education, personal habits, profession, and unique psychological environment.',
    realWorldExampleAr:
      'تفضيل الطبيب للأسباب البيولوجية وتفسير المهندس لكل ظاهرة ميكانيكياً، أو تعصب الفرد لعادات قريته وبيئته الصغرى.',
    realWorldExampleEn:
      'A physician reducing all social behavior to biochemistry, or an individual dogmatically defending cultural customs of their local village.',
    cureAr: 'الانفتاح الثقافي، إدراك التحيزات الشخصية، والاطلاع على وجهات النظر البديلة.',
    cureEn: 'Interdisciplinary exposure, self-awareness of personal blind spots, and diverse peer review.',
    thanawyaTrapAr:
      'صيغة السؤال الوزاري: "تختلف من فرد لآخر حسب البيئة والتربية والمهنة" — هذه حصراً هي أوهام الكهف.',
    thanawyaTrapEn:
      'Exam Keyword: Any question referencing "individual variation depending on upbringing, profession, or domestic environment" identifies Idols of the Cave.',
  },
  {
    id: 'market',
    nameAr: 'أوهام السوق (Idols of the Marketplace)',
    nameEn: 'Idols of the Marketplace (Idola Fori)',
    iconSymbol: '🗣️',
    definitionAr:
      'أوهام تنشأ عن غموض اللغة وعجز الألفاظ عن التعبير الدقيق، نتيجة تداول الكلمات غير المحررة بين العامة في الأسواق والمقاهي. يراها بيكون "أكثر الأوهام إثارة للمتاعب".',
    definitionEn:
      'Semantic and linguistic illusions arising from words loosely traded in social intercourse. Words dominate human intellect, breeding fruitless verbal disputes. Bacon deemed this the most troublesome idol.',
    realWorldExampleAr:
      'استخدام ألفاظ ملتبسة مثل: "الحرية"، "العدالة"، "الطاقة الإيجابية"، أو إطلاق أسماء على أشياء لا وجود لها كـ"العنقاء" و"الإكسير".',
    realWorldExampleEn:
      'Equivocation and semantic drift: using words with shifting definitions, or naming non-existent fictions (e.g., phlogiston, elixir of youth).',
    cureAr: 'صياغة تعريفات إجرائية محددة، واستخدام لغة رمزية ورياضية دقيقة كما فعل المناطقة الرمزيون.',
    cureEn: 'Rigorous operational definitions and formal symbolic mathematical language.',
    thanawyaTrapAr:
      'سؤال امتحاني متكرر: لماذا اعتبر بيكون أوهام السوق أكثر الأوهام خطورة؟ لأن اللغة هي أداة التفكير والتواصل؛ فإذا فسدت الأداة التوت العقول وضاعت الحقائق.',
    thanawyaTrapEn:
      'HOTS Question: Why did Bacon rank Market Idols as the most perilous? Because words mediate thought; when linguistic tools decay, all scientific communication is subverted.',
  },
  {
    id: 'theatre',
    nameAr: 'أوهام المسرح (Idols of the Theatre)',
    nameEn: 'Idols of the Theatre (Idola Theatri)',
    iconSymbol: '🎭',
    definitionAr:
      'أوهام تنبع من التسليم الأعمى بالمذاهب الفلسفية القديمة والآراء الموروثة وتقديس المشاهير، حيث يتلقى الإنسان النظريات كأنه متفرج يشاهد مسرحية خيالية دون نقد.',
    definitionEn:
      'Doctrinal illusions resulting from dogmatic systems of philosophy and authoritative traditions uncritically ingested like theatrical spectacles.',
    realWorldExampleAr:
      'رفض معاصري جاليليو النظر في التلسكوب لرؤية أقمار المشتري لأن أرسطو لم يذكرها في كتبه.',
    realWorldExampleEn:
      'Galileo’s contemporaries refusing to look through his telescope because Aristotle’s celestial cosmology did not list Jovian moons.',
    cureAr: 'الشك المنهجي، الشجاعة العقلية، وإخضاع جميع النظريات السابقة للاختبار التجريبي المعاصر.',
    cureEn: 'Methodological doubt, epistemological courage, and empirical replication.',
    thanawyaTrapAr:
      'التمييز الوزاري: أوهام المسرح ليست فطرية ولا ترتبط باللغة، بل هي "تقديس لمشاهير الفكر وسلطة الماضي" دون تمحيص.',
    thanawyaTrapEn:
      'Exam Keyword: Revering past authorities, celebrity endorsement, or ancient philosophies without verification indicates Idols of the Theatre.',
  },
];

export const BaconInductionStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeIdol, setActiveIdol] = useState<BaconIdol>(BACON_IDOLS[2]); // Marketplace by default
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const openFullModal = () => {
    setModalData({
      imageUrl: baconPhoto,
      titleAr: 'واجهة كتاب الأورجانون الجديد لفرانسيس بيكون (1620م) — ثورة الاستقراء العلمي',
      titleEn: 'Frontispiece of Francis Bacon’s Novum Organum (1620 CE) — The Inductive Revolution',
      subtitleAr: 'سفينة العلم تقتحم أعمدة هرقل نحو المحيط المجهول متجاوزة القياس الأرسطي العقيم',
      subtitleEn: 'The Galleon of Science Sailing Beyond the Pillars of Hercules into the Unknown',
      dateOrEraAr: 'عصر النهضة والثورة العلمية (1620م) — تأسيس المنهج التجريبي الحديث',
      dateOrEraEn: 'Early Scientific Revolution (1620 CE) — Birth of Modern Empirical Induction',
      locationAr: 'لندن (المملكة المتحدة) — مكتبة الجمعية الملكية البريطانية',
      locationEn: 'London (UK) — Royal Society Collection',
      descriptionAr:
        'اللوحة النحاسية المحفورة التاريخية الأصلية التي تصدرت الطبعة الأولى لكتاب (الأورجانون الجديد أو الآلة الجديدة للفكر) للمستشار الإنجليزي فرانسيس بيكون عام 1620. تُظهر سفينة شراعية شجاعة تمخر عباب المحيط الهادر بين عمودي هرقل (مضيق جبل طارق)، حاملة الشعار اللاتيني الشهير المأخوذ من سفر دانيال: «Multi pertransibunt et augebitur scientia» (كثيرون سيعبرون وستزداد المعرفة). يُعد هذا الأثر الإعلان الرمزي لولادة المنهج الاستقرائي العلمي التجريبي ودفن القياس الأرسطي الصوري.',
      descriptionEn:
        'The original 1620 copperplate engraving adorning Francis Bacon’s "Novum Organum Scientiarum". Illustrates a brave Renaissance galleon navigating between the mythical Pillars of Hercules into open oceanic waters under the prophetic banner: "Multi pertransibunt & augebitur scientia" (Many shall pass through and knowledge shall be increased). Heralded the modern inductive scientific method over medieval scholasticism.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-amber-50/50 via-slate-50 to-stone-100 border-amber-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-amber-950/20 to-slate-900 border-amber-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Ship className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                {isArabic ? 'المنهج الاستقرائي التجريبي 4K' : '4K Inductive Scientific Method'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                1620 CE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-amber-300">
              {isArabic ? 'أورجانون بيكون وأوهام العقل الأربعة' : 'Bacon’s Novum Organum & The Four Idols'}
            </h3>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-500 text-white shadow-md transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص وثيقة بيكون بدقة 4K' : 'Inspect 1620 Engraving (4K)'}</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 4K Engraving Viewer (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-2xl group aspect-[4/3]">
            <img
              src={baconPhoto}
              alt="Francis Bacon Novum Organum 1620"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-amber-500/30 text-xs text-amber-200">
              <div className="font-bold flex items-center gap-1.5 mb-0.5">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>«Multi pertransibunt et augebitur scientia»</span>
              </div>
              <p className="text-[11px] text-stone-300 line-clamp-2">
                {isArabic
                  ? 'سفينة العلم تعبر أعمدة هرقل: رمزية بيكون لاقتحام المجهول ورفض الانغلاق داخل القياس الأرسطي.'
                  : 'Sailing past Hercules’ columns: Bacon’s metaphor for empirical discovery beyond scholastic bounds.'}
              </p>
            </div>
          </div>

          {/* Bacon's Inductive Dual Aspect Table */}
          <div
            className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${
              isLight ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-black/40 border-amber-500/30 text-amber-200'
            }`}
          >
            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'جانبا المنهج البيكوني في الامتحان:' : 'Bacon’s Dual Inductive Method:'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-black/30 border border-amber-500/20">
                <span className="font-bold text-rose-400 block mb-1">
                  {isArabic ? '1. الجانب السلبي (الهدمي):' : '1. Negative (Destructive):'}
                </span>
                {isArabic
                  ? 'تطهير العقل من أوهام الجنس والكهف والسوق والمسرح قبل البدء بالبحث.'
                  : 'Purging the mind of Idols (Tribe, Cave, Market, Theatre) before inquiry.'}
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-amber-500/20">
                <span className="font-bold text-emerald-400 block mb-1">
                  {isArabic ? '2. الجانب الإيجابي (البنائي):' : '2. Positive (Constructive):'}
                </span>
                {isArabic
                  ? 'الملاحظة والتجربة، وقوائم الحضور والغياب والتفاوت، ثم استنباط القانون.'
                  : 'Observation, tables of Presence, Absence, Degrees, and inferring laws.'}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Four Idols Deep Interactive Drawer (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Idol Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {BACON_IDOLS.map((idol) => {
              const isSelected = activeIdol.id === idol.id;
              return (
                <button
                  key={idol.id}
                  onClick={() => setActiveIdol(idol)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all border flex flex-col items-center gap-1 text-center cursor-pointer min-h-[44px] ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-400 shadow-lg scale-102'
                      : 'bg-black/30 border-amber-500/20 text-amber-200/80 hover:bg-amber-900/20'
                  }`}
                >
                  <span className="text-xl">{idol.iconSymbol}</span>
                  <span className="line-clamp-1">{isArabic ? idol.nameAr.split('(')[0] : idol.nameEn.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Idol Details Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-stone-900/60 border-amber-500/20'
            }`}
          >
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeIdol.iconSymbol}</span>
                <h4 className="text-lg font-black text-amber-300">
                  {isArabic ? activeIdol.nameAr : activeIdol.nameEn}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Chapter 5 Logic
              </span>
            </div>

            {/* Definition */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                {isArabic ? 'المفهوم الفلسفي والتحليل الإبستمولوجي:' : 'Philosophical Definition:'}
              </span>
              <p className="text-xs text-stone-200 leading-relaxed bg-black/30 p-3 rounded-xl border border-amber-500/15">
                {isArabic ? activeIdol.definitionAr : activeIdol.definitionEn}
              </p>
            </div>

            {/* Real World Example */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                {isArabic ? 'مثال واقعي تطبيقي من بيئة الطالب:' : 'Real-world Applied Example:'}
              </span>
              <p className="text-xs text-stone-300 leading-relaxed bg-rose-500/5 p-3 rounded-xl border border-rose-500/20">
                {isArabic ? activeIdol.realWorldExampleAr : activeIdol.realWorldExampleEn}
              </p>
            </div>

            {/* Antidote / Cure */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isArabic ? 'علاج الوهم والتخلص منه عند بيكون:' : 'Epistemic Remedy:'}
              </span>
              <p className="text-xs text-emerald-200 leading-relaxed bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20">
                {isArabic ? activeIdol.cureAr : activeIdol.cureEn}
              </p>
            </div>

            {/* Ministerial HOTS Trap */}
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 فخ واضع الامتحان الوزاري في هذا الوهم:' : '🎯 Ministerial Exam Insight:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeIdol.thanawyaTrapAr : activeIdol.thanawyaTrapEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={!!modalData}
        data={modalData}
        onClose={() => setModalData(null)}
        lang={isArabic ? 'ar' : 'en'}
        theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
      />
    </div>
  );
};
