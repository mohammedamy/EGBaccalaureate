import React, { useState } from 'react';
import {
  Maximize2,
  Scale,
  Award,
  HeartHandshake,
  Dna,
  Leaf,
  HelpCircle,
} from 'lucide-react';
import vitruvianPhoto from '../../../assets/philosophy/vitruvian_bioethics_1490.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface BioethicsDilemma {
  id: string;
  category: 'environmental' | 'medical';
  titleAr: string;
  titleEn: string;
  philosopherAr: string;
  philosopherEn: string;
  ethicalQuestionAr: string;
  ethicalQuestionEn: string;
  proArgumentsAr: string;
  proArgumentsEn: string;
  conArgumentsAr: string;
  conArgumentsEn: string;
  thanawyaTakeawayAr: string;
  thanawyaTakeawayEn: string;
}

export const BIOETHICS_DILEMMAS: BioethicsDilemma[] = [
  {
    id: 'hans_jonas_future',
    category: 'environmental',
    titleAr: 'أخلاق المسؤولية وحقوق الأجيال القادمة (هانز يوناس ودانيال كالاهان)',
    titleEn: 'Ethics of Responsibility & Future Generations (Hans Jonas & Daniel Callahan)',
    philosopherAr: 'هانز يوناس (Hans Jonas)',
    philosopherEn: 'Hans Jonas (1903–1993)',
    ethicalQuestionAr:
      'هل يحق للجيل الحالي استنزاف الموارد الطبيعية وتلويث الكوكب من أجل رفاهيته اللحظية، أم أن عليه التزاماً أخلاقياً وجودياً بالحفاظ على مقدرات الأرض للأجيال التي لم تولد بعد؟',
    ethicalQuestionEn:
      'Does the present generation possess the moral right to deplete natural resources for short-term prosperity, or do we bear an existential ethical duty toward unborn future generations?',
    proArgumentsAr:
      'الإنسان هو الكائن الوحيد القادر على إدراك المسؤولية والعمل بها؛ والمسؤولية الأخلاقية تمتد لتشمل المستقبل لحماية الكوكب من الدمار التكنولوجي والنووي.',
    proArgumentsEn:
      'Humans are the sole beings capable of comprehending ethical responsibility; moral duty must extend across time to prevent planetary ecological collapse.',
    conArgumentsAr:
      'يرى بعض النفعيين الليبراليين أولوية حل مشكلات الفقر الحالية قبل الانشغال بافتراضات بعيدة في المستقبل.',
    conArgumentsEn:
      'Some short-term utilitarian critics prioritize resolving pressing contemporary poverty before addressing hypothetical distant futures.',
    thanawyaTakeawayAr:
      'أسس دانيال كالاهان أسس ميثاق الأجيال القادمة: ألا نتصرف بطريقة تدمر كرامة الحياة المستقبلية، وألا نتسبب في أخطار تفوق قدرة الأجيال القادمة على معالجتها.',
    thanawyaTakeawayEn:
      'Callahan’s Covenant: Never act in a manner that endangers the existence or dignifying conditions of future generations.',
  },
  {
    id: 'arne_naess_deep_ecology',
    category: 'environmental',
    titleAr: 'الإيكولوجيا العميقة واحترام القيمة الذاتية لكل الكائنات (أرني نايس)',
    titleEn: 'Deep Ecology & Intrinsic Value of All Living Beings (Arne Næss)',
    philosopherAr: 'أرني نايس (Arne Næss)',
    philosopherEn: 'Arne Næss (1912–2009)',
    ethicalQuestionAr:
      'هل الطبيعة مجرد مخزن موارد خاضع لمنفعة الإنسان ورغباته (المركزية البشرية Anthropocentrism)، أم أن لجميع الكائنات الحية والأنظمة البيئية قيمة ذاتية مستقلة عن فائدتها للبشر؟',
    ethicalQuestionEn:
      'Is nature merely a resource reservoir subservient to human desires (Anthropocentrism), or does every living organism possess intrinsic value independent of human utility?',
    proArgumentsAr:
      'احترام القيمة الذاتية للبيئة بغض النظر عن المنفعة المادية، والتأكيد على أن ازدهار الحياة غير البشرية يتطلب خفض التدخل البشري والنمو السكاني المفرط.',
    proArgumentsEn:
      'Intrinsic worth of non-human life requires curbing excessive human intervention and re-evaluating consumerist economic policies.',
    conArgumentsAr:
      'يرى المدافعون عن التنمية الاقتصادية السريعة أن تجميد استغلال الموارد يضر برفاهية البشر والدول النامية.',
    conArgumentsEn:
      'Economic acceleration advocates argue that absolute non-intervention hinders developing nations’ technological advancement.',
    thanawyaTakeawayAr:
      'سؤال الامتحان الوزاري: سُميت "عميقة" لأنها تبحث في الأسس الفلسفية العميقة لعلاقة الإنسان بالطبيعة وتصل إلى مبادئ جذرية، ولا تكتفي بالإصلاح البيئي السطحي (shallow ecology).',
    thanawyaTakeawayEn:
      'Thanawya Insight: Termed "Deep" because it investigates the fundamental philosophical roots of humanity’s relationship with nature, rejecting shallow surface conservation.',
  },
  {
    id: 'peter_singer_animal_rights',
    category: 'environmental',
    titleAr: 'حقوق الحيوان ومبدأ المنفعة العامة وتجنب الألم (بيتر سنجر وتوم ريجان)',
    titleEn: 'Animal Rights & Utilitarian Prevention of Suffering (Peter Singer & Tom Regan)',
    philosopherAr: 'بيتر سنجر (Peter Singer) & توم ريجان (Tom Regan)',
    philosopherEn: 'Peter Singer & Tom Regan',
    ethicalQuestionAr:
      'هل يحق للبشر تعذيب الحيوانات في المعامل وتجارب الأدوية ومزارع الإنتاج المكثف، طالما أن الحيوانات تشعر بالألم واللذة مثل الإنسان؟',
    ethicalQuestionEn:
      'Is it ethically permissible to inflict suffering on animals in laboratory testing and factory farms, given their capacity for pain and pleasure?',
    proArgumentsAr:
      'استند سنجر إلى مذهب المنفعة (بنتام ومِل)؛ بما أن الحيوان يشعر بالألم، فيجب إدخال معاناته في الحساب الأخلاقي. وأضاف توم ريجان مبدأ عدم الإيذاء: انتهاك حق الحيوان اعتداء على كائن ذي قيمة متأصلة.',
    proArgumentsEn:
      'Singer grounded animal liberation in utilitarianism (Bentham): capacity to suffer demands moral consideration. Regan added the rights-based principle of non-maleficence.',
    conArgumentsAr:
      'تجارب الحيوان ضرورية لاكتشاف لقاحات الأمراض المستعصية وإنقاذ حياة ملايين البشر.',
    conArgumentsEn:
      'Medical researchers argue animal trials remain indispensable for evaluating therapeutic efficacy before human clinical administration.',
    thanawyaTakeawayAr:
      'الربط الوزاري: بيتر سنجر انطلق من مبدأ المنفعة (أكبر قدر من السعادة وتجنب الألم)، بينما توم ريجان انطلق من "مبدأ عدم الإيذاء" (القيمة المتأصلة للكائن الحي).',
    thanawyaTakeawayEn:
      'Critical Distinction: Singer reasoned from Utilitarian suffering reduction; Regan reasoned from Deontological inherent value and non-harm.',
  },
  {
    id: 'human_genome_discrimination',
    category: 'medical',
    titleAr: 'مشروع الجينوم البشري والتنبؤ الوراثي والتمييز الجيني',
    titleEn: 'Human Genome Project, Genetic Predetermination & Discrimination',
    philosopherAr: 'د. أحمد زويل ومناطقة البيوتيقا',
    philosopherEn: 'Dr. Ahmed Zewail & Bioethicists',
    ethicalQuestionAr:
      'هل يتيح فك شفرة الجينوم البشري التنبؤ بالأمراض المستقبلية بما يخدم الطب الوقائي، أم يفتح الباب للتمييز الجيني في العمل والتأمين وإجهاض الأجنة وتجريد الإنسان من حريته؟',
    ethicalQuestionEn:
      'Does sequencing the human genome promote preventive medicine, or invite systemic genetic discrimination by employers and insurance corporations?',
    proArgumentsAr:
      'أكد د. أحمد زويل أن الجينوم لا يحدد فقط الأمراض، بل يفسر القابلية البيولوجية للسلوك، ويوفر أدوية نوعية مخصصة للتركيب الجيني لكل فرد.',
    proArgumentsEn:
      'Dr. Ahmed Zewail stressed that the genome clarifies disease susceptibility and individualized pharmacology, not merely fixed destiny.',
    conArgumentsAr:
      'مخاطر حتمية جينية (Genetic Determinism): تصنيف البشر لطبقات جينية، واستغلال شركات التأمين للبيانات لحرمان حاملي جينات معينة من الرعاية.',
    conArgumentsEn:
      'Risks of genetic determinism: employment blacklisting, predatory insurance denials, and modern eugenics.',
    thanawyaTakeawayAr:
      'في الامتحان: التمييز على أسس جينية وحرمان الأفراد من التوظيف أو التأمين يُعد انتهاكاً لكرامة الإنسان وحريته الشخصية ومبدأ العدالة والمساواة البيوتيقية.',
    thanawyaTakeawayEn:
      'Exam Rule: Genetic discrimination in employment or healthcare coverage violates bioethical justice, equality, and human autonomy.',
  },
  {
    id: 'human_cloning_identity',
    category: 'medical',
    titleAr: 'الاستنساخ البشري وموت مفهوم العائلة والنسب (د. مصطفى محمود)',
    titleEn: 'Human Cloning & Dissolution of Family Lineage (Dr. Mostafa Mahmoud)',
    philosopherAr: 'د. مصطفى محمود والفلاسفة المعاصرون',
    philosopherEn: 'Dr. Mostafa Mahmoud & Contemporary Thinkers',
    ethicalQuestionAr:
      'هل يمثل الاستنساخ البشري إنجازاً علمياً أم ثورة مدمرة لنواميس الوجود الإنساني تؤدي إلى القضاء على مفاهيم الأبوة والأمومة والنسب والتنوع البيولوجي؟',
    ethicalQuestionEn:
      'Does human cloning represent a medical triumph or a destructive assault on biological diversity, generational identity, and kinship?',
    proArgumentsAr:
      'استنساخ الأنسجة والأعضاء (Therapeutic Cloning) يحل مشكلة نقص التبرع بالأعضاء ويعالج أمراض السرطان والشلل والضمور العضلي.',
    proArgumentsEn:
      'Therapeutic cloning of tissues/organs addresses transplant organ shortages and regenerates damaged neural tissue.',
    conArgumentsAr:
      'رأى د. مصطفى محمود أن الاستنساخ البشري التكاثري (Reproductive Cloning) عبث بالخلق، ويحرم المستنسخ من الهوية الفردية والأبوين، ويقضي على حكمة التنوع الإلهي.',
    conArgumentsEn:
      'Dr. Mostafa Mahmoud cautioned that reproductive cloning subverts familial parenthood, destroys individual identity, and invites premature biological aging.',
    thanawyaTakeawayAr:
      'نقطة الامتحان: إجماع الموقف الديني والأخلاقي على تحريم الاستنساخ البشري الكامل لانتهاكه كرامة الإنسان وتدميره لمؤسسة الأسرة، مع إجازة استنساخ النبات والحيوان لعلاج المشاكل الغذائية.',
    thanawyaTakeawayEn:
      'Ministerial Consensus: Unanimous prohibition of full reproductive human cloning, balanced against permissible plant/animal cloning for food and therapeutic medicine.',
  },
];

export const BioethicsEnvironmentalStudio: React.FC<Props> = ({ isArabic, isLight, isContrast }) => {
  const [activeDilemma, setActiveDilemma] = useState<BioethicsDilemma>(BIOETHICS_DILEMMAS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);

  const openFullModal = () => {
    setModalData({
      imageUrl: vitruvianPhoto,
      titleAr: 'إنسان فيتروفيان والميثاق البيوتيقي — عبقرية دافنشي وأخلاقيات الطب والبيئة',
      titleEn: 'The Vitruvian Bioethics Codex — Leonardo’s Anatomy & Modern Medical Ethics',
      subtitleAr: 'النسبة الإنسانية والكرامة الحيوية في مواجهة تحديات الهندسة الوراثية والاستنساخ والبيئة',
      subtitleEn: 'Human Proportions & Dignity Confronting Genetic Engineering and Environmental Crisis',
      dateOrEraAr: 'عصر النهضة (1490م) / الثورة البيوتيقية المعاصرة — فلسفة الطب والبيئة',
      dateOrEraEn: 'High Renaissance (1490 CE) & Contemporary Bioethical Revolution',
      locationAr: 'معرض الأكاديمية، البندقية (إيطاليا) — محفوظات الفكر الطبي والفلسفي',
      locationEn: 'Gallerie dell’Accademia, Venice (Italy) — Philosophy of Medicine Archives',
      descriptionAr:
        'مخطوطة أرشيفية نادرة ترصد رسم ليوناردو دافنشي الشهير للنسب البشرية الكاملة المنسجمة داخل الدائرة والمربع (إنسان فيتروفيان)، محاطة بحواشي المخطوطات الطبية والبيوتيقية التي تناقش كرامة الجسد البشري وشفرة الحمض النووي (DNA) والمسؤولية الأخلاقية تجاه الكوكب والأجيال القادمة. تُجسد هذه اللوحة جوهر الفصلين الأول والثاني من منهج الفلسفة للثانوية العامة: الفلسفة وقضايا البيئة، والبيوتيقا والرؤية الفلسفية للأخلاق الطبية والبيولوجية.',
      descriptionEn:
        'Archival parchment showcasing Leonardo da Vinci’s iconic Vitruvian Man harmony inscribed within square and circle, illuminated with contemporary bioethical marginalia, DNA double helix schematics, and ethical codices on human cloning, the genome project, and ecological responsibility.',
    });
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-b from-teal-50/50 via-slate-50 to-stone-100 border-teal-200 shadow-sm text-slate-900'
          : 'bg-gradient-to-b from-slate-950 via-teal-950/20 to-slate-900 border-teal-500/20 shadow-xl text-stone-100'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-teal-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                {isArabic ? 'الأخلاقيات التطبيقية والبيوتيقا 4K' : '4K Bioethics & Environmental Ethics'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Chapters 1 & 2
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-teal-300">
              {isArabic ? 'إنسان فيتروفيان ومصفوفة البيوتيقا والبيئة' : 'Vitruvian Man & The Applied Bioethics Matrix'}
            </h3>
          </div>
        </div>

        <button
          onClick={openFullModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-500 text-white shadow-md transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص رقاقة دافنشي بدقة 4K' : 'Inspect 4K Manuscript'}</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 4K Vitruvian Image (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 bg-black shadow-2xl group aspect-[4/3]">
            <img
              src={vitruvianPhoto}
              alt="Leonardo da Vinci Vitruvian Bioethics Parchment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur border border-teal-500/30 text-xs text-teal-200">
              <div className="font-bold flex items-center gap-1.5 mb-0.5">
                <Dna className="w-4 h-4 text-teal-400" />
                <span>«Humana Dignitas & Scientia et Ethica»</span>
              </div>
              <p className="text-[11px] text-stone-300 line-clamp-2">
                {isArabic
                  ? 'تناغم الجسد البشري مع الطبيعة: المرجع الأخلاقي لحماية كرامة الإنسان من الاستغلال التكنولوجي.'
                  : 'Harmony of the human body and biosphere: The moral compass defending human dignity against reductionism.'}
              </p>
            </div>
          </div>

          {/* Core Foundations Card */}
          <div
            className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${
              isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-black/40 border-teal-500/30 text-teal-200'
            }`}
          >
            <div className="font-bold text-teal-400 flex items-center gap-1.5 text-sm">
              <Scale className="w-4 h-4" />
              <span>{isArabic ? 'تعريف البيوتيقا عند جاكلين روس:' : 'Jacqueline Russ Bioethics Definition:'}</span>
            </div>
            <p className="text-stone-300 bg-black/30 p-2.5 rounded-lg border border-teal-500/20">
              {isArabic
                ? '«علم معياري يدرس السلوك الإنساني الذي يمكن قبوله في إطار القضايا المتعلقة بالحياة والموت في ظل التقدم السريع للعلوم الطبية والبيولوجية.»'
                : '"A normative discipline examining human conduct acceptable in the domain of life and death amidst biomedical advancement."'}
            </p>
          </div>
        </div>

        {/* Right: Dilemma Matrix & Philosopher Case Studies (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Dilemma Selector Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {BIOETHICS_DILEMMAS.map((dilemma) => {
              const isSelected = activeDilemma.id === dilemma.id;
              const isEnv = dilemma.category === 'environmental';
              return (
                <button
                  key={dilemma.id}
                  onClick={() => setActiveDilemma(dilemma)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer min-h-[44px] ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-400 shadow-lg scale-102'
                      : 'bg-black/30 border-teal-500/20 text-teal-200/80 hover:bg-teal-900/20'
                  }`}
                >
                  {isEnv ? <Leaf className="w-3.5 h-3.5 text-emerald-400" /> : <Dna className="w-3.5 h-3.5 text-sky-400" />}
                  <span>{isArabic ? dilemma.philosopherAr.split('(')[0] : dilemma.philosopherEn.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Dilemma Case Study Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-stone-900/60 border-teal-500/20'
            }`}
          >
            <div className="flex items-center justify-between border-b border-teal-500/20 pb-3">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {activeDilemma.category === 'environmental' ? (isArabic ? 'فلسفة البيئة (فصل 1)' : 'Environmental (Ch 1)') : (isArabic ? 'البيوتيقا الطبية (فصل 2)' : 'Medical Bioethics (Ch 2)')}
                </span>
                <h4 className="text-base sm:text-lg font-black text-teal-300 mt-1">
                  {isArabic ? activeDilemma.titleAr : activeDilemma.titleEn}
                </h4>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-950/80 text-teal-300 border border-teal-500/40">
                {isArabic ? activeDilemma.philosopherAr : activeDilemma.philosopherEn}
              </span>
            </div>

            {/* The Moral Dilemma Question */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                {isArabic ? 'الإشكالية الفلسفية المعاصرة:' : 'The Core Bioethical Dilemma:'}
              </span>
              <p className="text-xs text-stone-200 leading-relaxed bg-black/30 p-3 rounded-xl border border-teal-500/15">
                {isArabic ? activeDilemma.ethicalQuestionAr : activeDilemma.ethicalQuestionEn}
              </p>
            </div>

            {/* Dialectic Arguments Pro vs Con */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="font-bold text-emerald-400 block mb-1">
                  {isArabic ? '🛡️ الموقف الأخلاقي الداعم / الفلسفي:' : '🛡️ Pro-Ethics Argument:'}
                </span>
                <p className="text-emerald-200/90 leading-relaxed">
                  {isArabic ? activeDilemma.proArgumentsAr : activeDilemma.proArgumentsEn}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30">
                <span className="font-bold text-rose-400 block mb-1">
                  {isArabic ? '⚡ الاعتراض أو التحدي العملي:' : '⚡ Practical Challenge / Counter:'}
                </span>
                <p className="text-rose-200/90 leading-relaxed">
                  {isArabic ? activeDilemma.conArgumentsAr : activeDilemma.conArgumentsEn}
                </p>
              </div>
            </div>

            {/* Thanawya Amma HOTS Takeaway */}
            <div
              className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{isArabic ? '🎯 استنتاج واضع الامتحان الوزاري:' : '🎯 Ministerial Exam Formulation:'}</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {isArabic ? activeDilemma.thanawyaTakeawayAr : activeDilemma.thanawyaTakeawayEn}
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
