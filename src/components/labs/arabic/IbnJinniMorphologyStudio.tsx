import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Feather,
} from 'lucide-react';
import ibnJinniPhoto from '../../../assets/arabic/ibn_jinni_khasais_992.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface IbnJinniHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  historicalContextAr: string;
  historicalContextEn: string;
  pedagogicalTakeawayAr: string;
  pedagogicalTakeawayEn: string;
}

const IBN_JINNI_HOTSPOTS: IbnJinniHotspot[] = [
  {
    id: 'khasais_title_rubric',
    xPct: 50,
    yPct: 15,
    titleAr: 'فاتحة كتاب الخصائص وفقه اللغة',
    titleEn: 'Al-Khasa’is Incipit & Arabic Philological Philosophy',
    roleAr: 'تأسيس فلسفة الاشتقاق والميزان الصرفي عند ابن جني',
    roleEn: 'Founding derivation philosophy and morphological scales by Ibn Jinni',
    historicalContextAr:
      'ديباجة الإمام أبي الفتح عثمان بن جني الموصلي (322 - 392 هـ / 934 - 1002 م) في كتابه الفريد "الخصائص". ابن جني تلميذ أبي علي الفارسي وصديق المتنبي الأثير، أرسى نظرية "الاشتقاق الأكبر" و"تصاقب الألفاظ لتصاقب المعاني"، مبيناً عبقرية اللغة العربية في توليد المعاني من الجذور الثلاثية.',
    historicalContextEn:
      'The incipit of Abu al-Fath Uthman Ibn Jinni (d. 1002 CE) in "Al-Khasa’is". Companion of al-Mutanabbi and disciple of Abu Ali al-Farisi, he pioneered "Greater Derivation" (al-Ishtiqāq al-Akbar), proving how phonetic shifts across tri-literal roots reflect nuanced physical realities.',
    pedagogicalTakeawayAr:
      'الميزان الصرفي (ف - ع - ل) هو ميكروسكوب الكلمة العربية؛ فكل زيادة في المبنى تدل غالباً على زيادة في المعنى (كـ: استخرج تفيد الطلب والمبالغة).',
    pedagogicalTakeawayEn:
      'The morphological scale (F-’-L) is the microscopic lens of Arabic: augmentations in morphological form systematically correspond to augmentations in semantic scope.',
  },
  {
    id: 'mizan_sarfi_table',
    xPct: 65,
    yPct: 48,
    titleAr: 'جدول الميزان الصرفي للأفعال الثلاثية المجردة والمزيدة',
    titleEn: 'Morphological Scale Matrix: Bare & Augmented Tri-radicals',
    roleAr: 'أوزان الأفعال: فَعَلَ، فَعَّلَ، أَفْعَلَ، فَاعَلَ، اسْتَفْعَلَ',
    roleEn: 'Verb weight paradigms: Fa’ala, Fa’’ala, Af’ala, Fa’ala, Istaf’ala',
    historicalContextAr:
      'اتفق علماء الصرف على جعل أحرف "ف ع ل" ميزاناً لمقابلة أصول الكلمة، وتُضبط أحرف الميزان بنفس حركات الكلمة الموزونة، وتُزاد الأحرف الزائدة (سألتمونيها) في الميزان كما هي.',
    historicalContextEn:
      'Arab lexicographers established the root consonants F-’-L to calibrate Arabic roots; supplementary affixes (summed in the mnemonic "Sa’altumuniha") are inserted precisely into corresponding metric positions.',
    pedagogicalTakeawayAr:
      'المجرد الثلاثي له 3 أبواب في الماضي (فَعَلَ، فَعِلَ، فَعُلَ). والمزيد إما بحرف (أفعل، فعّل، فاعل)، أو بحرفين (انفعل، افتعل، افعلّ، تفاعل، تفعّل)، أو بثلاثة أحرف (استفعل، افعوعل).',
    pedagogicalTakeawayEn:
      'Tri-radicals are either bare (Mujarrad) or augmented (Mazid) by 1 letter (Af’ala), 2 letters (Ifta’ala), or 3 letters (Istaf’ala).',
  },
  {
    id: 'phonetic_articulation_points',
    xPct: 50,
    yPct: 82,
    titleAr: 'باب مخارج الحروف وصفاتها الصوتية',
    titleEn: 'Phonetic Articulation Points (Makharij al-Huruf)',
    roleAr: 'العلاقة العضوية بين مخارج الأصوات (الحلق، اللسان، الشفتين) ودلالات الصرف',
    roleEn: 'Organic connection between acoustic articulation and morphological semantics',
    historicalContextAr:
      'قسّم ابن جني مخارج الحروف العربية إلى 17 مخرجاً تنحصر في 5 مخارج عامة: الجوف، والحلق، واللسان، والشفتان، والخيشوم، موضحاً صفات الجهر والهمس والشدة والرخاوة والاستعلاء.',
    historicalContextEn:
      'Ibn Jinni mapped the 17 distinct Arabic phonetic articulation points across 5 major regions: oral cavity, throat, tongue, lips, and nasal cavity, elucidating acoustic qualities like voicing, aspiration, and velarization.',
    pedagogicalTakeawayAr:
      'معرفة مخارج الحروف تفيد في فهم الإعلال والإبدال في الصرف: كإبدال تاء الافتعال طاءً بعد حروف الإطباق (اصطبر أصلها اصتبر).',
    pedagogicalTakeawayEn:
      'Phonetic articulation governs morphological assimilation and mutation (I’lal and Ibdal), such as mutating the "Ta" of Ifta’ala into "Ta" after emphatic consonants (e.g. Istabara -> Istdabara).',
  },
  {
    id: 'marginal_ishtiqaaq_scholia',
    xPct: 15,
    yPct: 50,
    titleAr: 'حواشي أصول الاشتقاق والمشتقات العاملة',
    titleEn: 'Marginal Derivation Glosses & Governing Participles',
    roleAr: 'قواعد إعمال اسم الفاعل والمفعول وصيغ المبالغة واسم التفضيل',
    roleEn: 'Rules governing active participles, passive participles, and intensifiers',
    historicalContextAr:
      'تبيّن حواشي المخطوط شروط إعمال المشتقات عمل أفعالها، وهو المبحث الأهم في منهج النحو والصرف للثانوية العامة المصرية، حيث يرفع اسم الفاعل فاعلاً وينصب مفعولاً بشرطين: أن يكون محلى بأل، أو نكرة منونة معتمدة على نفي أو استفهام أو مبتدأ أو موصوف أو نداء ودالة على الحال أو الاستقبال.',
    historicalContextEn:
      'The marginal scholia document conditions under which participles act as verbal governors—the core curriculum domain of Thanawya Amma Arabic grammar, where active participles take agentive subjects and accusative direct objects.',
    pedagogicalTakeawayAr:
      'إذا فقد المشتق شرط الدلالة على الحال والاستقبال، أُضيف إلى ما بعده (أنا صانعُ المعروفِ اليوم، أما: أنا صانعُ المعروفِ أمس فالمعروف مضاف إليه مجرور).',
    pedagogicalTakeawayEn:
      'If an indefinite participle lacks present/future tense continuity, it loses verbal governance and takes an annexed genitive instead (e.g. past reference requires genitive annexation).',
  },
];

interface DerivedFormRule {
  id: string;
  nameAr: string;
  nameEn: string;
  weightFormulaAr: string;
  weightFormulaEn: string;
  formationAr: string;
  formationEn: string;
  governanceConditionsAr: string;
  governanceConditionsEn: string;
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
  classicalExampleAr: string;
  classicalExampleEn: string;
}

const DERIVED_FORM_RULES: DerivedFormRule[] = [
  {
    id: 'ism_fail',
    nameAr: 'اسم الفاعل وإعماله',
    nameEn: 'Active Participle (Ism al-Fa’il)',
    weightFormulaAr: 'مِنَ الثلاثي: على وزن (فَاعِل) — مِن غير الثلاثي: ميم مضمومة وكسر ما قبل الآخر (مُسْتَخْرِج)',
    weightFormulaEn: 'Tri-radical: on scale Fa’il — Non-tri-radical: prefix Mu- with Kasra before last consonant',
    formationAr: 'يُصاغ ليدل على من قام بالفعل أو اتصف به. مثل: كَاتِب، سَاعٍ (تُحذف ياؤه في الرفع والجر رفعاً بالضمة المقدرة).',
    formationEn: 'Formed to indicate the agent who performs or embodies the action (e.g. Katib, Sa’in).',
    governanceConditionsAr:
      'يعمل عمل فعله المبني للمعلوم (يرفع فاعلاً وينصب مفعولاً به). إن كان محلى بـ "أل" يعمل بلا شروط، وإن كان مجرداً يعمل بشرطين: الدلالة على الحال أو الاستقبال، والاعتماد على (نفي، استفهام، مبتدأ، موصوف، نداء، أو صاحب حال).',
    governanceConditionsEn:
      'Governs as its active verb: unrestricted if prefixed with "Al"; if indefinite, requires present/future aspect and reliance on negation, interrogation, topic, described noun, or vocative.',
    thanawyaTrapAr:
      'فخ الاسم المنقوص: "المعلمُ قاضٍ بالحق" (قاضٍ اسم فاعل مرفوع بالضمة المقدرة على الياء المحذوفة). وإذا أُضيف كُتب بالياء: "المعلمُ قاضي المحكمةِ".',
    thanawyaTrapEn:
      'Defective noun trap: "Qadin" drops Ya when indefinite and nominative/genitive, but retains Ya when annexed or prefixed with "Al".',
    classicalExampleAr: 'أَرَاضٍ ضَمِيرُكَ عَنْ عَمَلِكَ اليَوْمَ؟ (ضميرك: فاعل لاسم الفاعل سدّ مسدّ الخبر)',
    classicalExampleEn: 'Is your conscience content with your work today? ("Damiruka" is agentive subject filling the predicate role).',
  },
  {
    id: 'sigh_mubalagha',
    nameAr: 'صيغ المبالغة القياسية الخمس',
    nameEn: 'Standard Five Intensifier Forms (Sigh al-Mubalagha)',
    weightFormulaAr: 'الأوزان القياسية الخمسة: فَعَّال - مِفْعَال - فَعُول - فَعِيل - فَعِل',
    weightFormulaEn: 'Five Standard Scales: Fa’’al - Mif’al - Fa’ul - Fa’il - Fa’il',
    formationAr: 'تُصاغ غالباً من الفعل الثلاثي المتعدي لتدل على الكثرة والمبالغة في حدوث الفعل (عَلاَّم، مِعْطَاء، غَفُور، سَمِيع، حَذِر).',
    formationEn: 'Derived predominantly from transitive tri-radicals to denote hyper-frequency or intensity.',
    governanceConditionsAr:
      'تعمل عمل فعلها المبني للمعلوم بنفس شروط عمل اسم الفاعل تماماً (ترفع فاعلاً وتنصب مفعولاً به أو مفعولين).',
    governanceConditionsEn:
      'Governs identically to the active participle under the exact same conditional criteria.',
    thanawyaTrapAr:
      'فخ تمييز صيغة المبالغة عن الصفة المشبهة: صيغة المبالغة مشتقة من متعدٍ غالباً وتقبل التحويل لاسم فاعل (غفور = غافر كثيراً)، أما الصفة المشبهة فمن لازم وتدل على الثبوت (كريم، شجاع).',
    thanawyaTrapEn:
      'Distinguishing intensifiers from assimilative adjectives: intensifiers derive from transitive verbs and denote dynamic frequency, whereas Sifah Mushabbahah derives from intransitive verbs denoting permanent character.',
  classicalExampleAr: 'إِنَّ اللهَ غَفُورٌ ذُنُوبَ التَّائِبِينَ (ذُنوبَ: مفعول به لصيغة المبالغة غفور منصوب بالفتحة)',
    classicalExampleEn: 'Verily, God is Oft-Forgiving of the sins of the repentant ("Dhunooba" is accusative object of Ghafur).',
  },
  {
    id: 'ism_maful',
    nameAr: 'اسم المفعول وإعماله',
    nameEn: 'Passive Participle (Ism al-Maf’ul)',
    weightFormulaAr: 'مِنَ الثلاثي: على وزن (مَفْعُول) — مِن غير الثلاثي: ميم مضمومة وفتح ما قبل الآخر (مُسْتَخْرَج)',
    weightFormulaEn: 'Tri-radical: on scale Maf’ul — Non-tri-radical: prefix Mu- with Fatha before last consonant',
    formationAr: 'يُصاغ دائماً من الفعل المبني للمجهول ليدل على من وقع عليه الفعل. مثل: مَكْتُوب، مَصُون، مَبِيع، مَدْعُوّ، مَقْضِيّ.',
    formationEn: 'Derived strictly from the passive voice verb to denote the patient/recipient of action (e.g. Maktub, Masun).',
    governanceConditionsAr:
      'يعمل عمل فعله المبني للمجهول، فيرفع دائماً "نائب فاعل"، وإذا كان الفعل متعدياً لمفعولين يرفع نائب فاعل وينصب المفعول به الثاني.',
    governanceConditionsEn:
      'Governs as its passive verb: strictly takes a Nominative Deputy Agent (Na’ib Fa’il); if derived from doubly transitive verbs, retains the second accusative object.',
    thanawyaTrapAr:
      'فخ صوغ اسم المفعول من الأجوف والناقص: قال -> مَقُول (وليس مقوال)، باع -> مَبِيع (وليس مبتاع)، دعا -> مَدْعُوّ (بالواو المشددة)، قضى -> مَقْضِيّ (بالياء المشددة).',
    thanawyaTrapEn:
      'Hollow and defective verb derivation trap: Qala -> Maqul (not Maqwal), Ba’a -> Mabi’ (not Mabyu’), Da’a -> Mad’uww, Qada -> Maqdiyy.',
    classicalExampleAr: 'أَمَمْنُوحٌ المُتَفَوِّقُ جَائِزَةً؟ (المتفوق: نائب فاعل مرفوع، وجائزة: مفعول به ثانٍ منصوب)',
    classicalExampleEn: 'Is the achiever granted an award? ("Al-Mutafawwiqu" is deputy agent, "Ja’izatan" is second object).',
  },
  {
    id: 'ism_tafdil_cases',
    nameAr: 'اسم التفضيل وأحكامه الأربعة',
    nameEn: 'Comparative/Superlative Noun & Four Syntactic Cases',
    weightFormulaAr: 'على وزن (أَفْعَل) للمذكر، و(فُعْلَى) للمؤنث، وجمعهما: (أَفَاعِل) و(فُعْلَيَات)',
    weightFormulaEn: 'On scale Af’al (masculine) and Fu’la (feminine), pluralized as Afa’il and Fu’layat',
    formationAr: 'يُشتق للدلالة على أن شيئين اشتركا في صفة وزاد أحدهما على الآخر، ويُشترط في فعله 7 شروط (ثلاثي، تام، مثبت، متصرف، مبني للمعلوم، غير دال على عيب أو لون، قابل للتفاوت).',
    formationEn: 'Derived under 7 strict conditions (tri-radical, complete, positive, inflected, active, non-color/defect, gradable).',
    governanceConditionsAr:
      'له 4 حالات في المطابقة: 1) المجرد من أل والإضافة (يلزم الإفراد والتذكير)، 2) المحلى بأل (يطابق المفضل وجوباً ولا يُذكر معه المفضل عليه)، 3) المضاف لنكرة (يلزم الإفراد والتذكير)، 4) المضاف لمعرفة (يجوز فيه الإفراد والتذكير أو المطابقة).',
    governanceConditionsEn:
      'Governed by 4 agreement cases: 1) Indefinite bare: must remain singular masculine; 2) Prefixed with Al: must agree in gender/number; 3) Annexed to indefinite: singular masculine; 4) Annexed to definite: both agreement or neutrality permitted.',
    thanawyaTrapAr:
      'فخ المؤنث والمثنى: "هذه الفتاة هي الفُضلى" (معرف بأل فيطابق وجوباً، والجمع: هؤلاء الفتيات هنَّ الفُضْلَيَات، وليس الأفضلات!).',
    thanawyaTrapEn:
      'Feminine agreement trap: "This girl is al-Fudla" (definite requires feminine agreement; plural: "al-Fudlayat", NEVER "al-Afdalat").',
    classicalExampleAr: 'العُلَمَاءُ هُمُ الأَعْلَوْنَ قَدْراً وَالأَفَاضِلُ خُلُقاً',
    classicalExampleEn: 'Scholars are the highest in stature and the most virtuous in character.',
  },
];

export const IbnJinniMorphologyStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<IbnJinniHotspot>(IBN_JINNI_HOTSPOTS[0]);
  const [activeRuleIndex, setActiveRuleIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Interactive Derivation Explorer Root
  const [selectedRootIndex, setSelectedRootIndex] = useState<number>(0);
  const rootParadigms = [
    {
      rootAr: 'ع - ل - م (العلم والمعرفة)',
      rootEn: '‘-L-M (Knowledge & Science)',
      derivations: [
        { pattern: 'فَاعِل', word: 'عَالِم', typeAr: 'اسم فاعل', typeEn: 'Active Participle', meaning: 'ذو العلم العارف' },
        { pattern: 'مَفْعُول', word: 'مَعْلُوم', typeAr: 'اسم مفعول', typeEn: 'Passive Participle', meaning: 'المعلوم المثبت' },
        { pattern: 'فَعَّال', word: 'عَلاَّم', typeAr: 'صيغة مبالغة', typeEn: 'Intensifier', meaning: 'كثير العلم محيط به' },
        { pattern: 'فَعِيل', word: 'عَلِيم', typeAr: 'صيغة مبالغة', typeEn: 'Intensifier', meaning: 'دائم العلم نافذ' },
        { pattern: 'أَفْعَل', word: 'أَعْلَم', typeAr: 'اسم تفضيل', typeEn: 'Superlative', meaning: 'أكثر علماً من غيره' },
        { pattern: 'مَفْعَل', word: 'مَعْلَم', typeAr: 'اسم مكان / آلة', typeEn: 'Locative/Instrument', meaning: 'موضع العلم والمنارة' },
      ],
    },
    {
      rootAr: 'ك - ت - ب (الكتابة والتدوين)',
      rootEn: 'K-T-B (Writing & Inscribing)',
      derivations: [
        { pattern: 'فَاعِل', word: 'كَاتِب', typeAr: 'اسم فاعل', typeEn: 'Active Participle', meaning: 'من يباشر الكتابة' },
        { pattern: 'مَفْعُول', word: 'مَكْتُوب', typeAr: 'اسم مفعول', typeEn: 'Passive Participle', meaning: 'المدون المسطور' },
        { pattern: 'مَفْعَل', word: 'مَكْتَب', typeAr: 'اسم مكان', typeEn: 'Locative Noun', meaning: 'موضع الكتابة والدراسة' },
        { pattern: 'مَفْعَلَة', word: 'مَكْتَبَة', typeAr: 'اسم مكان', typeEn: 'Locative/Library', meaning: 'مجمع الكتب والأسفار' },
        { pattern: 'اسْتَفْعَلَ', word: 'اسْتَكْتَبَ', typeAr: 'فعل مزيد بثلاثة أحرف', typeEn: 'Augmented Verb', meaning: 'طلب الكتابة' },
        { pattern: 'فِعَالَة', word: 'كِتَابَة', typeAr: 'مصدر صريح لقياس الحرفة', typeEn: 'Verbal Noun/Profession', meaning: 'صناعة التدوين والتحرير' },
      ],
    },
  ];

  const currentRoot = rootParadigms[selectedRootIndex];
  const currentRule = DERIVED_FORM_RULES[activeRuleIndex];

  const modalData: HiResImageModalData = {
    imageUrl: ibnJinniPhoto,
    titleAr: 'مخطوط كتاب الخصائص لابن جني (992 م) — فلسفة اللغة والميزان الصرفي',
    titleEn: 'Ibn Jinni’s Al-Khasa’is Manuscript (992 CE) — Morphology & Philological Philosophy',
    subtitleAr: 'الميزان الصرفي واشتقاق الأفعال والمشتقات العاملة ومخارج الحروف',
    subtitleEn: 'Morphological scale, verb derivations, governing participles and phonetic articulation',
    dateOrEraAr: 'القرن الرابع الهجري / 992 م (بغداد / الموصل، العصر العباسي الثاني)',
    dateOrEraEn: '4th Century AH / 992 CE (Baghdad/Mosul, Abbasid Golden Era)',
    locationAr: 'مكتبة الأسد الوطنية / دار الكتب المصرية',
    locationEn: 'Al-Assad National Library / Egyptian National Archives',
    descriptionAr:
      'صورة فائقة الدقة (4K) لصفحة تاريخية من كتاب "الخصائص" لأبي الفتح عثمان بن جني، تشتمل على جداول الميزان الصرفي، وتفصيل أحكام الفعل المجرد والمزيد، ومخارج الحروف وصفاتها الصوتية، بحبر كربوني عتيق وحواشي نفيسة.',
    descriptionEn:
      'Museum-grade 4K archival photograph of an ancient folio from Ibn Jinni’s "Al-Khasa’is". Displays tri-radical morphological weight tables, verb root matrices, vowel quantifiers, and articulatory phonetic classifications.',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-4 sm:p-6 ${
        isContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/50 text-stone-900 border-amber-200/80 shadow-md'
          : 'bg-gradient-to-br from-stone-950 via-neutral-900 to-amber-950/30 text-stone-100 border-amber-900/50 shadow-xl'
      }`}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Feather className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'فلسفة الصرف 992 م' : 'Morphology & Roots 992 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Codex</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو ابن جني: الخصائص والميزان الصرفي والمشتقات'
                : 'Ibn Jinni Studio: Morphological Scale & Derived Forms'}
            </h2>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
            isContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/30'
          }`}
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'تكبير المخطوط 4K' : 'Expand 4K Codex'}</span>
        </button>
      </div>

      {/* Main Stage: 4K Canvas + Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-[16/9] group shadow-inner">
            <img
              src={ibnJinniPhoto}
              alt="Ibn Jinni Al-Khasa'is Manuscript 992 CE"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Hotspots */}
            {IBN_JINNI_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-10 focus:outline-none"
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="relative flex h-7 w-7">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-rose-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-amber-500 text-black scale-125 ring-2 ring-white'
                          : 'bg-stone-900/90 text-amber-300 border border-amber-400/60 hover:scale-110'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-amber-200">
              <span className="truncate">
                {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
              </span>
              <span className="text-amber-400 font-mono text-[10px] ml-2 shrink-0">
                {isArabic ? 'انقر على العلامات التفاعلية' : 'Click interactive pins'}
              </span>
            </div>
          </div>

          {/* Quick Selection Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {IBN_JINNI_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-medium text-right transition-all truncate border ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-100 hover:bg-stone-200/80 border-stone-300 text-stone-700'
                      : 'bg-stone-900/60 hover:bg-stone-800/80 border-stone-800 text-stone-300'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Hotspot Deep Inspection Drawer */}
        <div
          className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-amber-400 text-amber-300'
              : isLight
              ? 'bg-white/90 border-amber-200/80 shadow-sm'
              : 'bg-stone-900/80 border-amber-900/40 text-stone-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {isArabic ? 'تحقيق فلسفة الصرف والاشتقاق' : 'Morphological Analysis'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {isArabic ? 'ابن جني (392 هـ)' : 'Ibn Jinni (392 AH)'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-amber-400 mt-3">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
            <p className="text-xs text-amber-500 font-medium mt-0.5">
              {isArabic ? selectedHotspot.roleAr : selectedHotspot.roleEn}
            </p>

            <div className="mt-3.5 space-y-3 text-xs leading-relaxed">
              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-amber-50/60 border-amber-200 text-stone-800' : 'bg-stone-950/60 border-stone-800 text-stone-300'
                }`}
              >
                <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'السياق التراثي وفقه اللغة:' : 'Heritage & Philological Context:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.historicalContextAr : selectedHotspot.historicalContextEn}</p>
              </div>

              <div
                className={`p-3 rounded-xl border ${
                  isLight ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                }`}
              >
                <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'مستخلص أسئلة المشتقات والميزان:' : 'Morphological Exam Blueprint Takeaway:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.pedagogicalTakeawayAr : selectedHotspot.pedagogicalTakeawayEn}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
            <span>{isArabic ? 'المرجع: "الخصائص" لابن جني (تحقيق محمد علي النجار)' : 'Ref: Ibn Jinni’s Al-Khasa’is'}</span>
            <span className="font-mono text-amber-400">Vol. 1-3</span>
          </div>
        </div>
      </div>

      {/* Section 2: Derived Forms & Governance Rules Matrix */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'منظومة المشتقات العاملة وأحكام إعمالها الصرفي' : 'Governing Participles & Morphological Derivation Rules'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'استكشف أوزان المشتقات، وضوابط رفع الفاعل ونائبه ونصب المفاعيل، وفخاخ أسئلة الثانوية العامة'
                : 'Explore participial weights, governance criteria over agents and objects, and exam traps'}
            </p>
          </div>

          {/* Rule Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/60 border border-stone-800 self-stretch sm:self-auto overflow-x-auto">
            {DERIVED_FORM_RULES.map((rule, idx) => (
              <button
                key={rule.id}
                onClick={() => setActiveRuleIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeRuleIndex === idx
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isArabic ? rule.nameAr.split(' ')[0] + ' ' + (rule.nameAr.split(' ')[1] || '') : rule.nameEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Rule Card */}
        <div
          className={`rounded-2xl p-5 border transition-all ${
            isContrast
              ? 'bg-black border-amber-400'
              : isLight
              ? 'bg-white border-amber-200 shadow-sm'
              : 'bg-stone-900/90 border-stone-800'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono text-amber-500">
                {isArabic ? 'المشتق الصرفي المقرّر:' : 'Morphological Participle:'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-amber-400">
                {isArabic ? currentRule.nameAr : currentRule.nameEn}
              </h4>
            </div>

            <div className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
              {isArabic ? currentRule.weightFormulaAr : currentRule.weightFormulaEn}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Formation & Governance */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <div>
                <span className="text-[11px] text-amber-500 font-semibold block mb-1">
                  {isArabic ? 'طريقة الصوغ والدلالة المعنوية:' : 'Morphological Formation & Semantic Scope:'}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {isArabic ? currentRule.formationAr : currentRule.formationEn}
                </p>

                <span className="text-[11px] text-emerald-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isArabic ? 'شروط الإعمال النحوي (عمل الفعل):' : 'Verbal Governance Criteria:'}</span>
                </span>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {isArabic ? currentRule.governanceConditionsAr : currentRule.governanceConditionsEn}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800/40">
                <span className="text-[11px] text-stone-400 block mb-1">
                  {isArabic ? 'شاهد نحوي تطبيقي موثق:' : 'Classical Attested Paradigm:'}
                </span>
                <p className="font-serif text-xs text-amber-300 font-semibold">
                  {isArabic ? currentRule.classicalExampleAr : currentRule.classicalExampleEn}
                </p>
              </div>
            </div>

            {/* Thanawya Exam Trap */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-rose-50/60 border-rose-200 text-rose-950' : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
              }`}
            >
              <div>
                <span className="text-[11px] text-rose-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isArabic ? 'فخ امتحان الثانوية العامة الحاسم:' : 'Crucial Thanawya Amma Trap:'}</span>
                </span>
                <p className="text-xs leading-relaxed">
                  {isArabic ? currentRule.thanawyaTrapAr : currentRule.thanawyaTrapEn}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-rose-500/20 flex items-center justify-between text-xs text-stone-400">
                <span>{isArabic ? 'الموقع الإعرابي للمعactionمول:' : 'Governed Complement Position:'}</span>
                <span className="text-amber-300 font-semibold font-mono">
                  {isArabic ? 'فاعل / مفعول به / نائب فاعل' : 'Agent / Object / Deputy Agent'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Root Derivation Tree (شجرة توليد المشتقات من الجذور) */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'مختبر توليد المشتقات من الجذور الثلاثية' : 'Tri-radical Root Derivation Laboratory'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic ? 'اختر جذراً ثلاثياً لمشاهدة تولد الأوزان الصرفية المتعددة ودلالاتها' : 'Select a tri-radical root to trace its derived patterns and semantic shifts'}
            </p>
          </div>

          <div className="flex gap-2">
            {rootParadigms.map((root, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRootIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRootIndex === idx
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {isArabic ? root.rootAr.split(' ')[0] : root.rootEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Root Banner */}
        <div
          className={`p-3.5 rounded-xl border text-center font-serif text-base font-bold mb-4 ${
            isLight ? 'bg-amber-100/60 text-stone-900 border-amber-300' : 'bg-stone-950/80 text-amber-300 border-stone-800'
          }`}
        >
          {isArabic ? currentRoot.rootAr : currentRoot.rootEn}
        </div>

        {/* Derivations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {currentRoot.derivations.map((d, dIdx) => (
            <div
              key={dIdx}
              className={`p-3 rounded-xl border text-center flex flex-col justify-between ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900/70 border-stone-800'
              }`}
            >
              <div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono block mb-1">
                  {d.pattern}
                </span>
                <p className="font-serif text-lg font-bold text-amber-300 my-1">{d.word}</p>
                <p className="text-[11px] font-semibold text-emerald-400">
                  {isArabic ? d.typeAr : d.typeEn}
                </p>
              </div>
              <p className="text-[10px] text-stone-400 mt-2 border-t border-stone-800/40 pt-1">
                {d.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HiRes Modal */}
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
