import React, { useState } from 'react';
import {
  Maximize2,
  Sparkles,
  Info,
  BookOpen,
  Award,
  AlertTriangle,
  RotateCcw,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import sibawayhPhoto from '../../../assets/arabic/sibawayh_kitab_manuscript_796.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface SibawayhHotspot {
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

const SIBAWAYH_HOTSPOTS: SibawayhHotspot[] = [
  {
    id: 'gold_rosette_incipit',
    xPct: 65,
    yPct: 22,
    titleAr: 'طغراء الاستهلال والزخرفة الذهبية',
    titleEn: 'Illuminated Gold-Leaf Rosette Incipit',
    roleAr: 'ديباجة "الكتاب" وافتتاحية النحو العربي البصري المؤسس',
    roleEn: 'Prologue of "Al-Kitab" inaugurating classical Arabic linguistic science',
    historicalContextAr:
      'ديباجة الإمام أبي بشر عمرو بن عثمان بن قنبر المعروف بـ "سيبويه" (المتوفى سنة 180 هـ / 796 م)، حيث لم يضع لكتابه اسماً لشهرته الطاغية فصار يُعرف بـ "الكتاب"، وهو أول دستور علمي شامل لضبط ألسنة العرب وقواعد الإعراب.',
    historicalContextEn:
      'The incipit of Imam Sibawayh (d. 180 AH / 796 CE). The work was so singularly revered across Basra and Kufa that it needed no title other than "Al-Kitab" (The Book), serving as the definitive foundational codex of Arabic grammar and syntax.',
    pedagogicalTakeawayAr:
      'النحو علم المعنى؛ فالإعراب ليس حركات اعتباطية بل دلالات تركيبية تكشف الفاعل من المفعول والعمدة من الفضلة.',
    pedagogicalTakeawayEn:
      'Arabic grammar is the science of semantic relationships; case endings (I’rab) are not decorative but define agentivity, objects, and predicative cores.',
  },
  {
    id: 'irab_vocalization_dots',
    xPct: 35,
    yPct: 38,
    titleAr: 'نقط الإعراب الدؤلية والميزان التركيبي',
    titleEn: 'Abu al-Aswad Vocalization & Inflection Dots',
    roleAr: 'أصل الحركات الإعرابية (الضم والفتح والكسر والتنوين)',
    roleEn: 'Origin of Arabic inflectional vowels (Damma, Fatha, Kasra, and Nunation)',
    historicalContextAr:
      'ابتكر أبو الأسود الدؤلي نقط الإعراب بمداد أحمر وأخضر مغاير لسواد النص القرآني، بوضع نقطة فوق الحرف للفتح، وتحته للكسر، وبينهما للضم، ونقطتين للتنوين، حفاظاً على الفصحى من اللحن بعد اتساع رقعة الدولة الإسلامية.',
    historicalContextEn:
      'Devised by Abu al-Aswad al-Du’ali using vermilion and green ink dots distinguished from the main carbon text: a dot above for Fatha (accusative), below for Kasra (genitive), inside/beside for Damma (nominative), and paired dots for nunation (Tanwin).',
    pedagogicalTakeawayAr:
      'العلامات الأصلية أربع: الضمة للرفع، الفتحة للنصب، الكسرة للجر، السكون للجزم. وما عداها علامات فرعية (كالواو والألف والياء وثبوت/حذف النون).',
    pedagogicalTakeawayEn:
      'Primary inflectional signs are four: Damma (nominative), Fatha (accusative), Kasra (genitive), and Sukun (jussive). All others are secondary (Waw, Alif, Ya, retaining/dropping Nun).',
  },
  {
    id: 'syntactic_core_pillars',
    xPct: 52,
    yPct: 62,
    titleAr: 'عُمَد الجملة والفضَلات والتوابع',
    titleEn: 'Syntactic Core Pillars (Umad) vs. Complements (Fadlat)',
    roleAr: 'تمييز أركان الإسناد (المبتدأ والخبر، الفعل والفاعل) عن المتممات',
    roleEn: 'Differentiating predication cores from circumstantial complements',
    historicalContextAr:
      'قسّم سيبويه الكلام إلى اسم وفعل وحرف، ورسّخ نظرية "العامل" النحوية: فالفعل يعمل في الفاعل والمفعول، والمبتدأ يعمل في الخبر أو العكس بالابتداء، والحروف الناسخة تنصب المبتدأ وترفع الخبر.',
    historicalContextEn:
      'Sibawayh classified speech into noun, verb, and particle, establishing the grammatical "Operator Theory" (Nadhariyat al-Amil): verbs govern agents and objects, Inna governs subjects in accusative, and Kana governs predicates in accusative.',
    pedagogicalTakeawayAr:
      'العمدة لا يستقيم الكلام بدونها (المبتدأ والخبر / الفعل والفاعل)، بينما الفضلة يمكن حذفها مع بقاء أصل الإسناد (كالحال والتمييز والمفعول المطلق).',
    pedagogicalTakeawayEn:
      'Core pillars (Umad) cannot be omitted without syntactic breakdown, whereas complements (Fadlat, e.g. Hal, Tamyiz, Maf’ul Mutlaq) expand circumstantial detail.',
  },
  {
    id: 'marginal_scholia_poetics',
    xPct: 15,
    yPct: 75,
    titleAr: 'حواشي النحاة وشواهد الشعر الجاهلي',
    titleEn: 'Marginal Philological Scholia & Poetic Attestations',
    roleAr: 'الاستشهاد بالشعر العربي الفصيح لتوثيق القواعد اللغوية',
    roleEn: 'Attestation of classical pre-Islamic Arabic poetry to validate syntax',
    historicalContextAr:
      'تضم حواشي المخطوط تعليقات أئمة النحو المتأخرين (كالمبرد وابن جني والزمخشري وابن هشام)، وتوثيقاً لأكثر من 1050 بيتاً شعرياً استشهد بها سيبويه في "الكتاب" للاحتجاج بالقواعد.',
    historicalContextEn:
      'The marginal scholia record analytical glosses from master grammarians (al-Mubarrad, Ibn Jinni, al-Zamakhshari, Ibn Hisham), citing over 1,050 classical poetic verses referenced by Sibawayh to establish normative linguistic usage.',
    pedagogicalTakeawayAr:
      'الشاهد النحوي هو السند المعتمد في أسئلة الثانوية العامة، والتعليل النحوي الدقيق يحمي الطالب من الفخاخ الشائعة كالمفعول لأجله الموهوم أو التمييز المحوّل.',
    pedagogicalTakeawayEn:
      'Poetic attestations underpin Thanawya Amma high-order thinking questions; rigorous syntactic justification prevents confusing causal objects with circumstantial adverbs.',
  },
];

interface CaseMarkerLaw {
  id: string;
  caseNameAr: string;
  caseNameEn: string;
  stateAr: string;
  primarySignAr: string;
  primarySignEn: string;
  secondarySignsAr: string[];
  secondarySignsEn: string[];
  thanawyaTrapAr: string;
  thanawyaTrapEn: string;
  exampleSentenceAr: string;
  exampleSentenceEn: string;
}

const CASE_MARKER_LAWS: CaseMarkerLaw[] = [
  {
    id: 'raf_nominative',
    caseNameAr: 'حالة الرفع (عمدة الإسناد)',
    caseNameEn: 'Nominative Case (Al-Raf’)',
    stateAr: 'المبتدأ، الخبر، الفاعل، نائب الفاعل، اسم كان، خبر إنّ',
    primarySignAr: 'الضمة الظاهرة والمقدّرة',
    primarySignEn: 'Damma (explicit or implicit)',
    secondarySignsAr: [
      'الألف: في المثنى (كلا وكلتا المضافتان لضمير)',
      'الواو: في جمع المذكر السالم والأسماء الخمسة (أبو، أخو، حمو، فو، ذو)',
      'ثبوت النون: في الأفعال الخمسة (يفعلون، تفعلون، يفعلان، تفعلان، تفعلين)',
    ],
    secondarySignsEn: [
      'Alif: Dual nouns and attached emphatic pronouns (Kila/Kilta)',
      'Waw: Sound masculine plural and the Five Nouns (Abu, Akhu, Hamu, Fu, Dhu)',
      'Retaining Nun: The Five Verbs (Af’al Khamsa)',
    ],
    thanawyaTrapAr:
      'فخ "كلا الطالبين مجتهدان" (كلا مبتدأ مرفوع بالضمة المقدرة لأنه مضاف لاسم ظاهر، وليس ملحقاً بالمثنى).',
    thanawyaTrapEn:
      'Trap: "Kila al-talibayn" (Kila is nominative with implicit Damma because it is prefixed to an overt noun, NOT an attached dual pronoun).',
    exampleSentenceAr: 'يَجْتَهِدُ العَامِلُونَ المُخْلِصُونَ فِي بِنَاءِ الوَطَنِ',
    exampleSentenceEn: 'The sincere workers strive in building the nation.',
  },
  {
    id: 'nasb_accusative',
    caseNameAr: 'حالة النصب (الفضلات والمنصوبات)',
    caseNameEn: 'Accusative Case (Al-Nasb)',
    stateAr: 'المفاعيل الخمسة، الحال، التمييز، المستثنى، المنادى، خبر كان، اسم إنّ',
    primarySignAr: 'الفتحة الظاهرة والمقدّرة',
    primarySignEn: 'Fatha (explicit or implicit)',
    secondarySignsAr: [
      'الألف: في الأسماء الخمسة (رأيتُ أباك)',
      'الياء: في المثنى وجمع المذكر السالم (كرّمتُ المتفوقِينَ)',
      'الكسرة نيابة عن الفتحة: في جمع المؤنث السالم وملحقاته (إنّ الطالباتِ مجتهدات)',
      'حذف النون: في الأفعال الخمسة المنصوبة (لن تنالوا البرّ)',
    ],
    secondarySignsEn: [
      'Alif: The Five Nouns (e.g. Ra’aytu Abaka)',
      'Ya: Dual and Sound Masculine Plural (e.g. Al-Mutafawwiqina)',
      'Kasra substituting Fatha: Sound Feminine Plural (e.g. Inna al-Talibati)',
      'Dropping Nun: The Five Verbs governed by subjunctive particles (Lan Tanalu)',
    ],
    thanawyaTrapAr:
      'فخ جمع المؤنث السالم المنصوب: علامته فرعية دائماً (الكسرة نيابة عن الفتحة) مثل: "شاهدتُ معلماتٍ متميزاتٍ".',
    thanawyaTrapEn:
      'Trap: Sound Feminine Plural in accusative takes Kasra substituting Fatha, which is ALWAYS a secondary marker.',
    exampleSentenceAr: 'إنَّ المُعَلِّمَاتِ يَبْذُلْنَ جُهُوداً عَظِيمَةً رِعَايَةً لِلنَّشْءِ',
    exampleSentenceEn: 'Verily, female teachers exert tremendous efforts out of care for youth.',
  },
  {
    id: 'jarr_genitive',
    caseNameAr: 'حالة الجر (الأسماء وحروف الخفض)',
    caseNameEn: 'Genitive Case (Al-Jarr)',
    stateAr: 'الاسم المجرور بحرف الجر، المضاف إليه، التابع للمجرور',
    primarySignAr: 'الكسرة الظاهرة والمقدّرة',
    primarySignEn: 'Kasra (explicit or implicit)',
    secondarySignsAr: [
      'الياء: في المثنى، جمع المذكر السالم، والأسماء الخمسة (مررتُ بأخيك)',
      'الفتحة نيابة عن الكسرة: في الممنوع من الصرف غير المعرف بأل وغير المضاف (صليتُ في مساجدَ أثريةٍ)',
    ],
    secondarySignsEn: [
      'Ya: Dual, Sound Masculine Plural, and Five Nouns (e.g. Bi-Akhika)',
      'Fatha substituting Kasra: Diptotes (Mamnu’ min al-Sarf) when free of "Al" and annexation',
    ],
    thanawyaTrapAr:
      'الممنوع من الصرف يُجر بالكسرة (أصلية) إذا عُرّف بـ "أل" أو أُضيف: "في المساجدِ الأثرية" أو "في مساجدِ المدينةِ". أما الخالي منهما فيُجر بالفتحة (فرعية): "في مساجدَ أثريةٍ".',
    thanawyaTrapEn:
      'Diptote trap: Takes Kasra (primary) if prefixed with "Al" or annexed, but takes Fatha (secondary) when indefinite.',
    exampleSentenceAr: 'سَافَرْتُ إِلَى مَدَائِنَ عَرِيقَةٍ ذَاتِ تَارِيخٍ مَجِيدٍ',
    exampleSentenceEn: 'I traveled to ancient cities possessing a glorious history.',
  },
  {
    id: 'jazm_jussive',
    caseNameAr: 'حالة الجزم (خاصة بالأفعال المضارعة)',
    caseNameEn: 'Jussive Case (Al-Jazm - Verbs Only)',
    stateAr: 'المضارع المسبوق بأداة جزم (لم، لا الناهية، لام الأمر، أدوات الشرط الجازمة)',
    primarySignAr: 'السكون للأفعال صحيحة الآخر',
    primarySignEn: 'Sukun for sound-ending verbs',
    secondarySignsAr: [
      'حذف حرف العلة: في الفعل المضارع معتل الآخر (لم يدعُ، لم يقضِ، لم يسعَ)',
      'حذف النون: في الأفعال الخمسة (إن تجتهدوا تنجحوا)',
    ],
    secondarySignsEn: [
      'Dropping Weak Radical: In defective verbs (Lam Yad’u, Lam Yaqdi, Lam Yas’a)',
      'Dropping Nun: In the Five Verbs (In Tajtahidu Tanjahu)',
    ],
    thanawyaTrapAr:
      'فخ الفعل الأجوف: "لم يقلْ" مجزوم بالسكون (علامة أصلية)، وحُذفت واوه منعاً لالتقاء ساكنين وليس لأنه مجزوم بحذف العلة!',
    thanawyaTrapEn:
      'Hollow verb trap: "Lam Yaqul" is jussive with Sukun (primary), its middle vowel dropped solely to prevent two consecutive unvocalized letters.',
    exampleSentenceAr: 'مَنْ يَتَّقِ اللهَ يَجْعَلْ لَهُ مَخْرَجاً وَيَرْزُقْهُ مِنْ حَيْثُ لا يَحْتَسِبُ',
    exampleSentenceEn: 'Whoever fears God, He makes a way out for him and provides from whence he does not expect.',
  },
];

export const SibawayhGrammarStudio: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<SibawayhHotspot>(SIBAWAYH_HOTSPOTS[0]);
  const [activeLawIndex, setActiveLawIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Syntactic parser interactive state
  const [sampleSentenceIndex, setSampleSentenceIndex] = useState<number>(0);
  const sampleSentences = [
    {
      textAr: 'إنَّ العَامِلِينَ المُخْلِصِينَ مُقَدَّرُونَ مِنْ وَطَنِهِمْ رِعَايَةً لِعَطَائِهِمْ',
      textEn: 'Verily, sincere workers are esteemed by their homeland in recognition of their dedication.',
      breakdown: [
        { word: 'إنَّ', roleAr: 'حرف توكيد ونصب ناسخ', roleEn: 'Inna: Corroborative governing particle', case: 'مبني على الفتح' },
        { word: 'العَامِلِينَ', roleAr: 'اسم إنَّ منصوب وعلامة نصبه الياء لأنه جمع مذكر سالم (فرعية)', roleEn: 'Noun of Inna, accusative with Ya (secondary)', case: 'منصوب بالياء' },
        { word: 'المُخْلِصِينَ', roleAr: 'نعت منصوب وعلامة نصبه الياء', roleEn: 'Adjective, accusative with Ya', case: 'منصوب بالياء' },
        { word: 'مُقَدَّرُونَ', roleAr: 'خبر إنَّ مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم (فرعية)', roleEn: 'Predicate of Inna, nominative with Waw (secondary)', case: 'مرفوع بالواو' },
        { word: 'مِنْ وَطَنِهِمْ', roleAr: 'جار ومجرور متعلقان بالخبر، والهاء ضمير في محل جر مضاف إليه', roleEn: 'Prepositional phrase, attached pronoun genitive', case: 'شبه جملة' },
        { word: 'رِعَايَةً', roleAr: 'مفعول لأجله منصوب وعلامة نصبه الفتحة الظاهرة (أصلية)', roleEn: 'Causal Object (Maf’ul li-Ajlih), accusative Fatha (primary)', case: 'منصوب بالفتحة' },
      ],
    },
    {
      textAr: 'كَادَ الأَمَلُ يَتَحَقَّقُ عِنْدَمَا أَخَذَ الطُّلاَّبُ يُثَابِرُونَ',
      textEn: 'Hope was on the verge of fulfillment when the students began persevering.',
      breakdown: [
        { word: 'كَادَ', roleAr: 'فعل ماضٍ ناقص ناسخ من أفعال المقاربة مبني على الفتح', roleEn: 'Defective verb of proximity (Af’al al-Muqaraba)', case: 'فعل ناقص ناسخ' },
        { word: 'الأَمَلُ', roleAr: 'اسم كاد مرفوع وعلامة رفعه الضمة الظاهرة (أصلية)', roleEn: 'Noun of Kada, nominative with Damma', case: 'مرفوع بالضمة' },
        { word: 'يَتَحَقَّقُ', roleAr: 'مضارع مرفوع، وجملته الفعلية في محل نصب خبر كاد (يقل اقترانه بأن)', roleEn: 'Verb clause in place of accusative predicate of Kada', case: 'جملة خبر كاد' },
        { word: 'أَخَذَ', roleAr: 'فعل ماضٍ ناقص ناسخ من أفعال الشروع يمتنع اقتران خبره بأن', roleEn: 'Defective verb of inception (Af’al al-Shuru’)', case: 'فعل شروع' },
        { word: 'الطُّلاَّبُ', roleAr: 'اسم أخذ مرفوع بالضمة', roleEn: 'Noun of Akhaḏa, nominative with Damma', case: 'مرفوع بالضمة' },
        { word: 'يُثَابِرُونَ', roleAr: 'مضارع مرفوع بثبوت النون (فرعية)، والجملة في محل نصب خبر أخذ', roleEn: 'Predicate of Akhaḏa, verb with retained Nun', case: 'مرفوع بثبوت النون' },
      ],
    },
  ];

  const currentSentence = sampleSentences[sampleSentenceIndex];

  const modalData: HiResImageModalData = {
    imageUrl: sibawayhPhoto,
    titleAr: 'مخطوط كتاب سيبويه (796 م) — دستور النحو واللسان العربي',
    titleEn: 'Manuscript of Sibawayh’s Al-Kitab (796 CE) — The Constitution of Arabic Syntax',
    subtitleAr: 'أقدم مدونة نحوية لسانية شاملة ونقط الإعراب بالمداد القرمزي',
    subtitleEn: 'The oldest comprehensive Arabic syntactic codex with vermilion inflection dots',
    dateOrEraAr: 'القرن الثاني الهجري / 796 م (البصرة، العصر العباسي الأول)',
    dateOrEraEn: '2nd Century AH / 796 CE (Basra, Early Abbasid Era)',
    locationAr: 'مكتبة السليمانية / دار الكتب والوثائق القومية',
    locationEn: 'Süleymaniye Manuscript Library / National Archives',
    descriptionAr:
      'صورة فائقة الدقة (4K) لصفحة تاريخية من كتاب سيبويه، أقدم مؤلَّف نحوي منهجي باقٍ في تاريخ الإنسانية. يتضمن المخطوط كتابة أثرية بالحبر الحديدي الأندلسي/العباسي مع نقط الإعراب بالمداد القرمزي وحواشي المحققين من علماء النحو البصري والكوفي.',
    descriptionEn:
      'Museum-grade 4K archival scan of a folio from Sibawayh’s Al-Kitab, the oldest surviving comprehensive systematic grammar of any Semitic language. Shows iron gall Abbasid ink, vermilion syntactic inflection dots, and centuries of marginal grammatical scholia.',
  };

  const currentLaw = CASE_MARKER_LAWS[activeLawIndex];

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
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isArabic ? 'دستور النحو العربي 796 م' : 'Arabic Syntax Constitution 796 CE'}
              </span>
              <span className="text-xs text-amber-500/80 font-mono">4K Archival Codex</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {isArabic
                ? 'استوديو سيبويه: شجرة الإعراب والميزان التركيبي'
                : 'Sibawayh Syntax Studio: Syntactic Trees & Case Markers'}
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

      {/* Main Interactive Stage: 4K Canvas + Hotspot Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: 4K Photographic Canvas with Hotspots */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-[16/9] group shadow-inner">
            <img
              src={sibawayhPhoto}
              alt="Sibawayh Al-Kitab Manuscript 796 CE"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Hotspots */}
            {SIBAWAYH_HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ top: `${spot.yPct}%`, left: `${spot.xPct}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group/pin z-10 focus:outline-none`}
                  title={isArabic ? spot.titleAr : spot.titleEn}
                >
                  <span className="relative flex h-7 w-7">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-amber-400' : 'bg-emerald-400'
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
            {SIBAWAYH_HOTSPOTS.map((spot) => {
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
                  {isArabic ? 'تحقيق المخطوط اللغوي' : 'Philological Scholia Analysis'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {isArabic ? 'سيبويه (180 هـ)' : 'Sibawayh (180 AH)'}
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
                  <span>{isArabic ? 'السياق التراثي والتحقيقي:' : 'Heritage & Codicological Context:'}</span>
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
                  <span>{isArabic ? 'مستخلص الثانوية العامة التكتيكي:' : 'Thanawya Amma Tactical Takeaway:'}</span>
                </div>
                <p>{isArabic ? selectedHotspot.pedagogicalTakeawayAr : selectedHotspot.pedagogicalTakeawayEn}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
            <span>{isArabic ? 'المرجع: "الكتاب" لسيبويه (تحقيق عبد السلام هارون)' : 'Ref: Sibawayh’s Al-Kitab (Ed. Harun)'}</span>
            <span className="font-mono text-amber-400">Vol. 1-4</span>
          </div>
        </div>
      </div>

      {/* Section 2: Case Markers Matrix (أحكام الإعراب والعلامات الأصلية والفرعية) */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sliders className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'الميزان الإعرابي: منظومة العلامات الأصلية والفرعية' : 'Case Markers Matrix: Primary vs Secondary Inflections'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic
                ? 'استكشف حالات الإعراب الأربع وضوابط العلامات الفرعية وفخاخ امتحانات الثانوية العامة'
                : 'Explore the 4 syntactic cases, secondary inflection conditions, and ministerial exam traps'}
            </p>
          </div>

          {/* Law Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/60 border border-stone-800 self-stretch sm:self-auto overflow-x-auto">
            {CASE_MARKER_LAWS.map((law, idx) => (
              <button
                key={law.id}
                onClick={() => setActiveLawIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeLawIndex === idx
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isArabic ? law.caseNameAr.split(' ')[0] + ' ' + law.caseNameAr.split(' ')[1] : law.caseNameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Active Law Display Card */}
        <div
          className={`rounded-2xl p-5 border transition-all ${
            isContrast
              ? 'bg-black border-amber-400'
              : isLight
              ? 'bg-white border-amber-200 shadow-sm'
              : 'bg-stone-900/90 border-stone-800'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-stone-800">
            <div>
              <span className="text-xs font-mono text-amber-500">
                {isArabic ? 'الحالة التركيبية:' : 'Syntactic Case:'}
              </span>
              <h4 className="text-base font-bold text-amber-400">
                {isArabic ? currentLaw.caseNameAr : currentLaw.caseNameEn}
              </h4>
            </div>
            <div className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs">
              <span className="font-semibold">{isArabic ? 'العلامة الأصلية: ' : 'Primary: '}</span>
              <span>{isArabic ? currentLaw.primarySignAr : currentLaw.primarySignEn}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Secondary signs */}
            <div
              className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'
              }`}
            >
              <h5 className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'مواضع العلامات الفرعية (نيابة عن الأصلية):' : 'Secondary Inflectional Positions:'}</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {(isArabic ? currentLaw.secondarySignsAr : currentLaw.secondarySignsEn).map((sign, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-mono mt-0.5">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ministerial Exam Trap */}
            <div
              className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-rose-50/60 border-rose-200 text-rose-950' : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
              }`}
            >
              <h5 className="text-xs font-bold text-rose-400 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>{isArabic ? 'فخ امتحان الثانوية العامة الحاسم:' : 'Crucial Thanawya Amma Trap:'}</span>
              </h5>
              <p className="text-xs leading-relaxed">
                {isArabic ? currentLaw.thanawyaTrapAr : currentLaw.thanawyaTrapEn}
              </p>

              <div className="mt-3 pt-2 border-t border-rose-500/20">
                <span className="text-[11px] text-stone-400 block mb-1">
                  {isArabic ? 'شاهد نموذجي موثق:' : 'Attested Paradigm Sentence:'}
                </span>
                <p className="font-serif text-xs text-amber-300 font-semibold">
                  {isArabic ? currentLaw.exampleSentenceAr : currentLaw.exampleSentenceEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Parsing Engine (محلل الإعراب الحي) */}
      <div className="mt-8 pt-6 border-t border-amber-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-amber-500" />
              <span>{isArabic ? 'المختبر الإعرابي التفاعلي (تحليل فوري)' : 'Interactive Syntactic Parsing Laboratory'}</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {isArabic ? 'اختر جملة نموذجية لفحص الإعراب التفصيلي لكل كلمة مع بيان نوع العلامة' : 'Inspect word-by-word syntactic breakdown with inflection classification'}
            </p>
          </div>

          <div className="flex gap-2">
            {sampleSentences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSampleSentenceIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sampleSentenceIndex === idx
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {isArabic ? `شاهد ${idx + 1}` : `Sample ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Sentence Box */}
        <div
          className={`p-4 rounded-2xl border text-center font-serif text-base sm:text-lg font-bold mb-4 ${
            isLight ? 'bg-amber-100/60 text-stone-900 border-amber-300' : 'bg-stone-950/80 text-amber-300 border-stone-800'
          }`}
        >
          {isArabic ? currentSentence.textAr : currentSentence.textEn}
        </div>

        {/* Word-by-word Breakdown Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentSentence.breakdown.map((item, bIdx) => (
            <div
              key={bIdx}
              className={`p-3 rounded-xl border flex flex-col justify-between ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900/70 border-stone-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-stone-800/40">
                  <span className="font-serif text-sm font-bold text-amber-400">{item.word}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                    {item.case}
                  </span>
                </div>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  {isArabic ? item.roleAr : item.roleEn}
                </p>
              </div>
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
