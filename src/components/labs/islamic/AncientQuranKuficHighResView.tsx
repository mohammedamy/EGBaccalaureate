import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Sparkles,
  Feather,
  Layers,
  Info,
  CheckCircle2,
  ScrollText,
} from 'lucide-react';
import birminghamQuranPhoto from '../../../assets/islamicLab/ancient_quran_kufic_manuscript.jpg';
import madinahMushafPhoto from '../../../assets/islamicLab/mushaf_madinah_page1.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

export interface QuranHotspot {
  id: string;
  xPct: number;
  yPct: number;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  technicalDetailsAr: string;
  technicalDetailsEn: string;
}

// 1. Hotspots for the Standard Madinah Mushaf (Page 1: Surat Al-Fatiha)
export const MADINAH_MUSHAF_HOTSPOTS: QuranHotspot[] = [
  {
    id: 'fatiha_basmalah',
    xPct: 50.0,
    yPct: 25.0,
    titleAr: 'البسملة الشريفة برسم المصحف العثماني (Noble Basmalah)',
    titleEn: 'Noble Basmalah in Canonical Uthmani Script',
    categoryAr: 'رسم المصحف وضبط النص القرآني',
    categoryEn: 'Uthmani Orthography & Sacred Text',
    descAr:
      '«بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ» الآية الأولى من سورة الفاتحة على الراجح؛ خطت بالنسخ المصحفي المعتمد بمجمع الملك فهد، مع ضبط همزة الوصل والألف الخنجرية في (الرَّحْمَٰنِ) وحركات الإعراب بدقة متناهية.',
    descEn:
      'The opening verse of Surat Al-Fatiha in the canonical King Fahd Complex standard, demonstrating precise dagger alifs, vocalization harakat, and Uthmani orthography with zero errors.',
    technicalDetailsAr:
      'خط النسخ الجليل بيد شيخ خطاطي المصحف الشريف عثمان طه، مطابق لمصحف المدينة النبوية الشريف برواية حفص عن عاصم.',
    technicalDetailsEn:
      'Penned by master calligrapher Uthman Taha according to the standard Hafs from Asim transmission.',
  },
  {
    id: 'fatiha_border',
    xPct: 50.0,
    yPct: 9.0,
    titleAr: 'إفريز عنوان السورة المذهب عيار 24 (Illuminated Gold Surah Band)',
    titleEn: 'Illuminated 24K Gold Surah Banner & Name Cartouche',
    categoryAr: 'فن التذهيب والزخرفة القرآنية الملكية',
    categoryEn: 'Royal Islamic Illumination & Cartouche Art',
    descAr:
      'إطار مذهب فاخر يحمل اسم السورة الشريفة: «سورة الفاتحة — مكية — آياتها سبع»؛ مزدان بتوريق نباتي متناظر ورقائق الذهب المنقوشة بدقة هندسية تليق بجلال كتاب الله الحكيم.',
    descEn:
      'An opulent 24K gold illumination cartouche inscribing the chapter title: "Surat Al-Fatiha — Meccan — Seven Verses", framed with intricate botanical arabesques.',
    technicalDetailsAr:
      'زخارف إسلامية أصيلة منتقاة من روائع العصرين المملوكي والأندلسي منفذة بماء الذهب الخالص واللازورد الملكي.',
    technicalDetailsEn:
      'Executed in traditional lapis lazuli ultramarine and burnished gold leaf motifs drawn from classical Andalusian and Mamluk manuscripts.',
  },
  {
    id: 'fatiha_ayah_medallions',
    xPct: 50.0,
    yPct: 55.0,
    titleAr: 'فواصل الآيات وأرقامها داخل أهلة مذهبة (Ayah Verse Medallions)',
    titleEn: 'Ayah Division Rosettes & Gilded Verse Markers',
    categoryAr: 'عد الآي وفواصل القرآن الكريم',
    categoryEn: 'Quranic Verse Numeration & Pacing',
    descAr:
      'أهلة ودوائر مذهبة محلاة بالزخارف الإسلامية تفصل بين آيات سورة الفاتحة السبع؛ تبدأ من البسملة إلى قوله تعالى «وَلَا الضَّالِّينَ»، معينة للقارئ على الوقف والابتداء التام.',
    descEn:
      'Delicate gilded medallions marking verse terminations from 1 through 7, providing visual anchors for valid pause (Waqf) and recitation cadence.',
    technicalDetailsAr:
      'ترقيم معتمد وفق العد الكوفي المنسوب لأمير المؤمنين علي بن أبي طالب رضي الله عنه، وهو المعمول به في رواية حفص.',
    technicalDetailsEn:
      'Verse enumeration adhering to the classical Kufan count transmitted from Ali ibn Abi Talib.',
  },
  {
    id: 'fatiha_orthography',
    xPct: 35.0,
    yPct: 68.0,
    titleAr: 'علامات التشكيل والضبط الصوتي المتواتر (Tajweed Diacritics)',
    titleEn: 'Phonetic Vocalization, Dagger Alifs & Tajweed Diacritics',
    categoryAr: 'علم الضبط وحركات الإعراب',
    categoryEn: 'Vocalic Notation & Orthographic Precision',
    descAr:
      'ضبط متقن يشمل علامات السكون الخفيف (رأس خاء صغيرة)، وهمزات الوصل المسقطة في درج الكلام، والألفات المحذوفة رسماً الثابتة لفظاً كالتي في (مَٰلِكِ) و(الصِّرَٰطَ).',
    descEn:
      'Meticulous diacritical markers including truncated Kha for Sukoon, Wasl signs for liaison vowels, and superscript dagger alifs preserving oral transmission.',
    technicalDetailsAr:
      'قواعد الضبط المستقرة منذ الإمام الداني وأبي داود سليمان بن نجاح، المعمول بها في المصاحف المعاصرة المطبوعة.',
    technicalDetailsEn:
      'Standardized orthography system established by classical scholars Al-Dani and Abu Dawud Sulayman ibn Najah.',
  },
  {
    id: 'fatiha_spiritual_names',
    xPct: 65.0,
    yPct: 42.0,
    titleAr: 'السبع المثاني وأم الكتاب (The Mother of the Book)',
    titleEn: 'The Seven Oft-Repeated Verses & Mother of the Book',
    categoryAr: 'فضائل القرآن وعلوم التفسير',
    categoryEn: 'Exegesis & Quranic Merits',
    descAr:
      'تسمى الفاتحة والسبع المثاني وأم القرآن والشافية والكافية؛ وهي ركن الصلاة الأعظم الذي لا تصح الصلاة إلا به، وقد اشتملت على مجمل مقاصد التنزيل من توحيد وعبادة وطلب للهداية.',
    descEn:
      'Surat Al-Fatiha is the core pillar of Islamic prayer, designated as the Seven Oft-Repeated Verses (Al-Sab’ al-Mathani), encapsulating Islamic monotheism and divine guidance.',
    technicalDetailsAr:
      'حديث صحيح البخاري: «هي أم القرآن وهي السبع المثاني والقرآن العظيم الذي أوتيته».',
    technicalDetailsEn:
      'Prophetic tradition: "It is the Mother of the Book, the Seven Oft-Repeated Verses, and the Grand Quran."',
  },
];

// 2. Hotspots for the 7th-Century Authentic Birmingham Quran Manuscript
export const BIRMINGHAM_QURAN_HOTSPOTS: QuranHotspot[] = [
  {
    id: 'birmingham_script',
    xPct: 38.0,
    yPct: 22.0,
    titleAr: 'الخط الحجازي الباكر الأصيل (Authentic 7th-Century Hijazi Script)',
    titleEn: 'Authentic 7th-Century Hijazi Manuscript Hand',
    categoryAr: 'باليوغرافيا المخطوطات والخط العربي الباكر',
    categoryEn: 'Palaeography & 7th-Century Arabic Codicology',
    descAr:
      'خط حجازي عتيق مائل قليلاً نحو اليمين وممتد أفقياً؛ كُتب في عهد الصحابة الكرام بالمداد الكربوني الثابت، ويتميز بالبساطة والجلال وخلوه من الإعجام والنقط الحديثة اعتماداً على حفظ الصدور وسليقة اللسان العربي.',
    descEn:
      'Authentic early Hijazi script slightly slanting to the right, penned with indelible carbon ink during the era of the Prophet’s Companions, devoid of modern dots.',
    technicalDetailsAr:
      'كُتب بقلم قصب عريض وحبر السناج النباتي العفصي المقاوم للرطوبة والزمن لأكثر من 1400 عام.',
    technicalDetailsEn:
      'Inscribed with broad reed pens and carbon-iron gall ink enduring over 1,400 years without pigment loss.',
  },
  {
    id: 'birmingham_parchment',
    xPct: 82.0,
    yPct: 35.0,
    titleAr: 'رق الغزال المعالج المؤرخ علمياً (568 - 645 م)',
    titleEn: 'Radiocarbon-Dated Animal Vellum (568–645 CE)',
    categoryAr: 'علم الآثار والتوثيق الكربوني المشع',
    categoryEn: 'Archaeometry & Oxford C14 Radiocarbon Dating',
    descAr:
      'رق حيواني من جلد الغزال أو الضأن، أثبت الفحص العلمي بمختبر جامعة أكسفورد للكربون المشع (C14) أن تاريخه يعود إلى ما بين 568 و645 م بدقة 95.4%، أي في عهد النبي ﷺ أو الخلفاء الراشدين.',
    descEn:
      'Animal vellum parchment scientifically dated by the Oxford Radiocarbon Accelerator Unit to 568–645 CE (95.4% confidence), contemporaneous with the Prophet Muhammad ﷺ and early Caliphs.',
    technicalDetailsAr:
      'معالجة جيرية كلاسيكية لإزالة الشعر والدهون وشد الغشاء على أطر تجفيف خشبية لضمان استوائه وثبات الحبر.',
    technicalDetailsEn:
      'Tanned animal membrane treated with lime and stretched on drying frames, providing a flat durable writing support.',
  },
  {
    id: 'birmingham_taha_heading',
    xPct: 52.0,
    yPct: 48.0,
    titleAr: 'إفريز مطلع سورة طه الفاصل بين السورتين (Surah Ta-Ha Opening)',
    titleEn: 'Surah Division Ornament Marking the Opening of Surah Ta-Ha',
    categoryAr: 'فنون الزخرفة في المصاحف المبكرة',
    categoryEn: 'Early Quranic Illumination & Chapter Demarcation',
    descAr:
      'إفريز زخرفي عتيق يفصل بين نهاية سورة مريم وبداية سورة طه: «طه * مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ * إِلَّا تَذْكِرَةً لِّمَن يَخْشَىٰ»؛ يوضح أقدم أشكال الفصل الزخرفي بين السور في تاريخ المصاحف.',
    descEn:
      'Archaic illuminated decorative divider separating Surah Maryam from the start of Surah Ta-Ha, representing one of the earliest preserved chapter headings in Islamic art.',
    technicalDetailsAr:
      'زخرفة بالمداد الأسود والأحمر الطبيعي المستخرج من أكاسيد المعادن والتراب المغري.',
    technicalDetailsEn:
      'Drawn with natural red iron oxide mineral pigments and black carbon ink.',
  },
  {
    id: 'birmingham_verse_dots',
    xPct: 62.0,
    yPct: 72.0,
    titleAr: 'فواصل الآيات النقطية المبكرة (Early Verse Punctuation)',
    titleEn: 'Triangular Dot Punctuation Marking Early Verse Endings',
    categoryAr: 'تاريخ فواصل الآي والوقف',
    categoryEn: 'Early Quranic Verse Demarcation',
    descAr:
      'مجموعات من ثلاث نقاط مثلثة دقيقة وضعها الناسخ القديم للفصل بين رؤوس الآيات الكريمة؛ وهي أقدم نظام علامات ترقيم قرآني معروف قبل ظهور الدوائر والأهلة المذهبة.',
    descEn:
      'Triangular clusters of three ink dots scribed between verses to signify pause and verse endings, preceding later circular rosettes.',
    technicalDetailsAr:
      'رُسمت برأس قلم القصب نفسه أثناء عملية التدوين لضبط القراءة المتواترة.',
    technicalDetailsEn:
      'Applied with the same reed stylus during original transcription to guide rhythm and pauses.',
  },
  {
    id: 'birmingham_textual_integrity',
    xPct: 25.0,
    yPct: 80.0,
    titleAr: 'التطابق النصي الإعجازي مع مصاحفنا المعاصرة (Textual Identity)',
    titleEn: 'Absolute Textual Identity with Contemporary Printed Qurans',
    categoryAr: 'إعجاز حفظ القرآن الكريم تاريخياً',
    categoryEn: 'Textual Integrity & Unaltered Quranic Preservation',
    descAr:
      'أعظم ما يثبته هذا المخطوط هو التطابق الحرفي الكامل والتام بين ما كُتب قبل 1400 عام وما يُقرأ اليوم في جميع مصاحف المسلمين في العالم، شاهداً حياً على قوله تعالى: «إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ».',
    descEn:
      'The Birmingham manuscript provides unequivocal archaeological proof that the Quranic text today is identical letter-for-letter to the text written in the 7th century, fulfilling the divine promise of preservation.',
    technicalDetailsAr:
      'تطابق بنسبة 100% في الكلمات والترتيب مع قراءة الإمام عاصم ونافع وبقية القراءات المتواترة دون أدنى اختلاف.',
    technicalDetailsEn:
      '100% textual alignment with canonical mutawatir recitations across all 114 surahs.',
  },
];

export interface ArabicCalligraphyStyle {
  id: string;
  nameAr: string;
  nameEn: string;
  eraAr: string;
  eraEn: string;
  characteristicsAr: string;
  characteristicsEn: string;
  canonicalUsageAr: string;
  canonicalUsageEn: string;
}

export const ARABIC_CALLIGRAPHY_STYLES: ArabicCalligraphyStyle[] = [
  {
    id: 'kufic',
    nameAr: 'الخط الكوفي والحجازي المصحفي',
    nameEn: 'Monumental Kufic & Hijazi',
    eraAr: 'القرن 1 - 4 هجري',
    eraEn: '1st–4th Century AH',
    characteristicsAr: 'هندسي جليل، مستقيم الزوايا، أفقي الامتداد، عالي الهيبة والوقار، خط المصاحف العتيقة الأولى.',
    characteristicsEn: 'Geometric, angular, extended horizontal baseline, majestic solemnity of the earliest codices.',
    canonicalUsageAr: 'تدوين مصاحف الصحابة والفتوحات الإسلامية والنقوش الصخرية بالقدس وقبة الصخرة.',
    canonicalUsageEn: 'Early Caliphal codices, monumental architecture, Dome of the Rock epigraphy.',
  },
  {
    id: 'thuluth',
    nameAr: 'خط الثلث الجليل',
    nameEn: 'Thuluth Script',
    eraAr: 'العصر العباسي والمملوكي',
    eraEn: 'Abbasid & Mamluk Eras',
    characteristicsAr: 'سيد الخطوط العربية وأصعبها، يمتاز بمرونة الحروف وتشابكها وترابطها الهندسي البديع.',
    characteristicsEn: 'The king of scripts, characterized by sinuous curves and interlocking compositions.',
    canonicalUsageAr: 'عناوين السور القرآنية، وكسوة الكعبة المشرفة، وواجهات الجوامع التاريخية كالأزهر والسلطان حسن.',
    canonicalUsageEn: 'Surah titles, Holy Kaaba Kiswah embroidery bands, grand mosque architraves.',
  },
  {
    id: 'naskh',
    nameAr: 'خط النسخ الشريف',
    nameEn: 'Naskh Script',
    eraAr: 'منذ ابن مقلة والقرن 4 هـ وحتى اليوم',
    eraEn: 'Standardized by Ibn Muqla (4th C. AH) to present',
    characteristicsAr: 'واضح القراءة، متناسق النسب والحركات، منضبط الموازين بنقاط قلم القصب، وهو خط المصحف المعتمد عالمياً.',
    characteristicsEn: 'Extremely legible, balanced proportions, standardized by rhombic reed-pen dots.',
    canonicalUsageAr: 'خط المصاحف الشريفة المطبوعة في مجمع الملك فهد، والكتب العلمية والدينية المعتمدة.',
    canonicalUsageEn: 'The canonical standard script for printed Qurans and religious textbooks worldwide.',
  },
  {
    id: 'diwani',
    nameAr: 'الخط الديواني والجلي',
    nameEn: 'Diwani & Jali Script',
    eraAr: 'العصر العثماني والحديث',
    eraEn: 'Ottoman Era to Modern',
    characteristicsAr: 'شديد الانسيابية والاستدارة، تتداخل حروفه في نسيج لحني زخرفي أخاذ.',
    characteristicsEn: 'Highly fluid, cascading cursive curves forming a rhythmic decorative tapestry.',
    canonicalUsageAr: 'الإجازات القرآنية والعلمية، والفرامين الملكية، والشواهد التذكارية الفاخرة.',
    canonicalUsageEn: 'Ijaza recitation certificates, imperial decrees, and ornamental colophons.',
  },
];

export const AncientQuranKuficHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  // Mode selection: Standard Madinah Mushaf (default) OR Historic Birmingham Manuscript
  const [selectedView, setSelectedView] = useState<'madinah_mushaf' | 'birmingham_manuscript'>('madinah_mushaf');

  // Hotspots according to view
  const currentHotspots = selectedView === 'madinah_mushaf' ? MADINAH_MUSHAF_HOTSPOTS : BIRMINGHAM_QURAN_HOTSPOTS;
  const currentPhoto = selectedView === 'madinah_mushaf' ? madinahMushafPhoto : birminghamQuranPhoto;

  const [activeHotspot, setActiveHotspot] = useState<QuranHotspot>(currentHotspots[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedCalligraphy, setSelectedCalligraphy] = useState<ArabicCalligraphyStyle>(
    ARABIC_CALLIGRAPHY_STYLES[2] // Default to Naskh for standard Mushaf
  );

  const handleSwitchView = (view: 'madinah_mushaf' | 'birmingham_manuscript') => {
    setSelectedView(view);
    const newHotspots = view === 'madinah_mushaf' ? MADINAH_MUSHAF_HOTSPOTS : BIRMINGHAM_QURAN_HOTSPOTS;
    setActiveHotspot(newHotspots[0]);
    if (view === 'birmingham_manuscript') {
      setSelectedCalligraphy(ARABIC_CALLIGRAPHY_STYLES[0]); // Kufic/Hijazi
    } else {
      setSelectedCalligraphy(ARABIC_CALLIGRAPHY_STYLES[2]); // Naskh
    }
  };

  const handleOpenModal = () => {
    if (selectedView === 'madinah_mushaf') {
      setModalData({
        imageUrl: madinahMushafPhoto,
        titleAr: 'مصحف المدينة النبوية الشريف — سورة الفاتحة (مجمع الملك فهد 4K)',
        titleEn: 'The Noble Madinah Quran — Surat Al-Fatiha (King Fahd Complex 4K)',
        subtitleAr: 'النص القرآني القياسي المعتمد برواية حفص عن عاصم مع التذهيب الكامل دون أخطاء',
        subtitleEn: 'Authentic Canonical Text in Hafs from Asim Transmission with Royal Illumination',
        descriptionAr:
          'صورة فائقة الدقة (4K) لصفحة سورة الفاتحة من مصحف المدينة النبوية الصادر عن مجمع الملك فهد لطباعة المصحف الشريف. نص قرآني موثق ومعتمد 100% بخط عثمان طه، يتميز برسم الحروف العثمانية الدقيقة، وضبط حركات الإعراب والتجويد، وفواصل الآيات والأهلة المذهبة، دون أي خطأ لغوي أو بصري، لضمان صحة التلاوة والحفظ.',
        descriptionEn:
          'Museum-grade 4K scan of Surat Al-Fatiha from the King Fahd Complex for Printing the Holy Quran in Medina. Written by master scribe Uthman Taha, this canonical reference provides 100% verified Uthmani calligraphy, authentic Tajweed diacritics, and royal illumination.',
        locationAr: 'مجمع الملك فهد لطباعة المصحف الشريف — المدينة المنورة',
        locationEn: 'King Fahd Complex for Printing the Holy Quran — Medina, Saudi Arabia',
        dateOrEraAr: 'المصحف المعتمد عالمياً / مجمع الملك فهد',
        dateOrEraEn: 'Modern Canonical Standard / King Fahd Complex',
      });
    } else {
      setModalData({
        imageUrl: birminghamQuranPhoto,
        titleAr: 'مخطوطة برمنجهام القرآنية الأثرية (القرن الأول الهجري / 568 - 645 م)',
        titleEn: 'The 7th-Century Birmingham Quran Manuscript (Cadbury Library 4K)',
        subtitleAr: 'أقدم رقعة قرآنية أثرية مؤرخة علمياً بالكربون المشع لسورتي مريم وطه بالخط الحجازي',
        subtitleEn: 'Oldest Radiocarbon-Dated Quranic Folio (568–645 CE) in Early Hijazi Book-Hand',
        descriptionAr:
          'صورة أرشيفية متحفية فائقة الدقة (4K) لرقائق مخطوطة برمنجهام الشهيرة المحفوظة في مكتبة كادبوري للبحوث بجامعة برمنجهام. كُتبت بالخط الحجازي الباكر على رق الغزال في الصدر الأول للإسلام، وتتضمن آيات كريمة من سورتي مريم وطه، موثقة تاريخياً ومطابقة حرفاً بحرف للمصاحف الشريفة المتداولة اليوم في العالم الإسلامي، خالية من أي تخليق آلي.',
        descriptionEn:
          'Museum-grade 4K archival macro photograph of the authentic 7th-century Birmingham Quran parchment leaves (Cadbury Research Library, University of Birmingham). Carbon-dated to 568–645 CE, this codex contains verses from Surahs Maryam and Ta-Ha in pristine early Hijazi script, identical to modern Qurans.',
        locationAr: 'مكتبة كادبوري للبحوث — جامعة برمنجهام، المملكة المتحدة',
        locationEn: 'Cadbury Research Library — University of Birmingham, UK',
        dateOrEraAr: '568 - 645 م (القرن الأول الهجري — عهد النبوة والخلفاء الراشدين)',
        dateOrEraEn: '568–645 CE (1st Century AH — Era of Prophethood & Rightly Guided Caliphs)',
      });
    }
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-emerald-400 text-emerald-300'
          : isLight
          ? 'bg-gradient-to-b from-[#f9faf7] via-[#f3f6f0] to-[#e7ece2] border-emerald-300 shadow-emerald-950/10'
          : 'bg-gradient-to-b from-[#0a110d] via-[#101912] to-[#121c15] border-emerald-500/30 shadow-black/80'
      }`}
    >
      {/* Header with Title and Mode Switcher */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-4 border-b ${
          isLight ? 'border-emerald-300/80' : 'border-emerald-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            }`}
          >
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
              {isArabic
                ? selectedView === 'madinah_mushaf'
                  ? 'مصحف المدينة النبوية الشريف (مجمع الملك فهد — سورة الفاتحة 4K)'
                  : 'مخطوطة برمنجهام القرآنية الأثرية (القرن الأول الهجري 568–645 م)'
                : selectedView === 'madinah_mushaf'
                ? 'The Noble Madinah Quran (King Fahd Complex — Surat Al-Fatiha 4K)'
                : 'The 7th-Century Birmingham Quran Manuscript (Cadbury Library 4K)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? selectedView === 'madinah_mushaf'
                  ? 'نص قرآني قياسي معتمد 100% برسم المصحف العثماني ورواية حفص عن عاصم، خالٍ من أي أخطاء'
                  : 'أقدم رقعة قرآنية موثقة علمياً بالكربون المشع في العالم، خط حجازي عتيق لسورتي مريم وطه'
                : selectedView === 'madinah_mushaf'
                ? 'Canonical authentic Uthmani script with verified Tajweed orthography and 24K gold illumination'
                : 'Authentic 7th-century parchment leaf with early Hijazi script, carbon-dated to 568–645 CE'}
            </p>
          </div>
        </div>

        {/* Dual Mode Switcher Tabs */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center p-1 rounded-xl border ${
              isLight ? 'bg-emerald-100/60 border-emerald-300' : 'bg-black/60 border-emerald-500/30'
            }`}
          >
            <button
              onClick={() => handleSwitchView('madinah_mushaf')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedView === 'madinah_mushaf'
                  ? 'bg-emerald-500 text-black shadow-md font-black'
                  : isLight
                  ? 'text-slate-700 hover:text-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مصحف المدينة (الفاتحة)' : 'Madinah Mushaf'}</span>
            </button>

            <button
              onClick={() => handleSwitchView('birmingham_manuscript')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedView === 'birmingham_manuscript'
                  ? 'bg-emerald-500 text-black shadow-md font-black'
                  : isLight
                  ? 'text-slate-700 hover:text-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ScrollText className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مخطوطة برمنجهام (القرن 1 هـ)' : 'Birmingham Manuscript'}</span>
            </button>
          </div>

          <button
            onClick={handleOpenModal}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تكبير وفحص المصحف 4K' : 'Inspect 4K View'}</span>
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[4/3] max-h-[540px] rounded-2xl overflow-hidden mt-4 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={currentPhoto}
          alt={selectedView === 'madinah_mushaf' ? 'Madinah Mushaf Al-Fatiha' : 'Birmingham Quran Manuscript'}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05] ${
            selectedView === 'madinah_mushaf' ? 'object-contain bg-[#111]' : 'object-cover object-center'
          }`}
        />

        {/* Interactive Hotspot Markers */}
        {currentHotspots.map((spot) => {
          const isActive = spot.id === activeHotspot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/btn cursor-pointer focus:outline-none"
              title={isArabic ? spot.titleAr : spot.titleEn}
            >
              <div className="relative flex items-center justify-center">
                {/* Glowing Pulse Rings */}
                <span
                  className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${
                    isActive ? 'bg-emerald-400' : 'bg-emerald-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-emerald-300 bg-emerald-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-emerald-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-emerald-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-emerald-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                {/* Hotspot Floating Label */}
                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-emerald-300 border-emerald-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-300">
            {selectedView === 'madinah_mushaf' ? (
              <>
                <span>{isArabic ? '📖 المصحف: مجمع الملك فهد الشريف' : '📖 Quran: King Fahd Complex'}</span>
                <span>•</span>
                <span>{isArabic ? '✍️ الخطاط: عثمان طه (رسم عثماني)' : '✍️ Scribe: Uthman Taha'}</span>
                <span>•</span>
                <span>{isArabic ? '📜 السورة: الفاتحة (السبع المثاني)' : '📜 Surah: Al-Fatiha (7 Verses)'}</span>
              </>
            ) : (
              <>
                <span>{isArabic ? '📜 المخطوط: جامعة برمنجهام (568 - 645 م)' : '📜 Codex: Birmingham (568–645 CE)'}</span>
                <span>•</span>
                <span>{isArabic ? '🖋️ الخط: حجازي عتيق بالمداد الكربوني' : '🖋️ Script: Early Hijazi Carbon Ink'}</span>
                <span>•</span>
                <span>{isArabic ? '🐑 المادة: رق غزال طبيعي' : '🐑 Support: Animal Vellum'}</span>
              </>
            )}
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            AUTHENTIC-MUSHAF-RESOLUTION
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
      <div
        className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-emerald-400 text-emerald-300'
            : isLight
            ? 'bg-gradient-to-r from-emerald-50 via-white to-emerald-100/60 border-emerald-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-[#0d1611] via-[#142018] to-[#0f1712] border-emerald-500/30 text-emerald-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                isLight
                  ? 'bg-emerald-200 border-emerald-400 text-emerald-950'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
              }`}
            >
              <Feather className="w-5 h-5" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h4 className={`text-base font-black ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h4>
              </div>

              <p className={`text-xs md:text-sm mt-1.5 leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-2.5 rounded-xl border text-[11px] font-medium flex items-center gap-2 ${
                  isLight
                    ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950'
                    : 'bg-black/40 border-emerald-500/30 text-emerald-200/90'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>
                  <strong>{isArabic ? 'التحقيق العلمي والأثري: ' : 'Codicological Evidence: '}</strong>
                  {isArabic ? activeHotspot.technicalDetailsAr : activeHotspot.technicalDetailsEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-emerald-400">
              {isArabic ? 'نقاط الفحص والتدقيق:' : 'Focus Points:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {currentHotspots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-emerald-500 text-black shadow-md font-black'
                      : isLight
                      ? 'bg-emerald-100 text-slate-800 hover:bg-emerald-200'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isArabic ? s.titleAr.split(' ')[0] + ' ' + (s.titleAr.split(' ')[1] || '') : s.titleEn.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scriptorium & Arabic Calligraphy Historical Evolution Studio */}
      <div
        className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-emerald-400 text-emerald-300'
            : isLight
            ? 'bg-white/80 border-emerald-300/80 text-slate-900 shadow-sm'
            : 'bg-slate-950/70 border-emerald-500/25 text-slate-200 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs md:text-sm font-black text-emerald-400">
                {isArabic
                  ? 'مختبر تطور الخطوط العربية وتدوين المصاحف الشريفة'
                  : 'Evolution of Arabic Calligraphy & Quranic Inscription Laboratory'}
              </h5>
              <p className="text-[11px] text-slate-400 font-medium">
                {isArabic
                  ? 'من الكوفي والحجازي الباكر إلى النسخ الشريف والثلث؛ تاريخ كتابة المصاحف وضبطها في الحضارة الإسلامية'
                  : 'From early Hijazi & Kufic to monumental Naskh and Thuluth: script development across Islamic history'}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono text-emerald-500 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
            AUTHENTIC-PALAEOGRAPHY
          </span>
        </div>

        {/* 4 Calligraphy Style Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ARABIC_CALLIGRAPHY_STYLES.map((style) => {
            const isSelected = selectedCalligraphy.id === style.id;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedCalligraphy(style)}
                className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer relative ${
                  isSelected
                    ? isLight
                      ? 'bg-emerald-100/90 border-emerald-500 shadow-md ring-2 ring-emerald-400/50'
                      : 'bg-emerald-500/20 border-emerald-400 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-400/50'
                    : isLight
                    ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-100/40'
                    : 'bg-black/40 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-slate-900/60'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 end-2 text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                <div className={`text-sm font-black ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                  {isArabic ? style.nameAr : style.nameEn}
                </div>
                <div className="text-[10px] font-mono text-emerald-400/90 font-bold mt-0.5">
                  {isArabic ? style.eraAr : style.eraEn}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed line-clamp-2">
                  {isArabic ? style.characteristicsAr : style.characteristicsEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Calligraphy Detail Drawer */}
        <div
          className={`mt-4 p-4 rounded-xl border ${
            isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-black/50 border-emerald-500/20'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider block">
                {isArabic ? 'الخصائص الهندسية والجمالية للخط:' : 'Geometric & Aesthetic Properties:'}
              </span>
              <p className="mt-1 leading-relaxed text-slate-300">
                {isArabic ? selectedCalligraphy.characteristicsAr : selectedCalligraphy.characteristicsEn}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider block">
                {isArabic ? 'الاستخدام المصحفي والمعماري المعتمد:' : 'Canonical Quranic & Architectural Usage:'}
              </span>
              <p className="mt-1 leading-relaxed text-slate-300">
                {isArabic ? selectedCalligraphy.canonicalUsageAr : selectedCalligraphy.canonicalUsageEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <HiResImageModal
        isOpen={Boolean(modalData)}
        onClose={() => setModalData(null)}
        data={modalData}
        lang={isArabic ? 'ar' : 'en'}
        theme={isContrast ? 'high-contrast' : isLight ? 'light' : 'dark'}
      />
    </div>
  );
};
