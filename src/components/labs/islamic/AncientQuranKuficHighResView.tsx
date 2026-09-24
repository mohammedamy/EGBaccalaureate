import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Sparkles,
  Feather,
  Layers,
  Info,
  CheckCircle2,
} from 'lucide-react';
import quranPhoto from '../../../assets/islamicLab/ancient_quran_kufic_manuscript.jpg';
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

export const QURAN_HOTSPOTS: QuranHotspot[] = [
  {
    id: 'kufic_script',
    xPct: 35.0,
    yPct: 20.0,
    titleAr: 'الخط الكوفي الحجازي الباكر (Early Hijazi / Kufic Script)',
    titleEn: 'Early Hijazi Monumental Kufic Calligraphy',
    categoryAr: 'باليوغرافيا وفقه الخط العربي الباكر',
    categoryEn: 'Palaeography & Early Arabic Script',
    descAr:
      'خط المصاحف الأولى في عصر الخلفاء الراشدين بالمدينة المنورة؛ يتميز بالهيبة والاستقامة، والامتداد الأفقي المتزن للأحرف، وخلوه من الإعجام والنقاط الحديثة، اعتماداً على السليقة العربية الأصيلة وسماع الصدور المتواتر.',
    descEn:
      'Monumental early book-hand script from the era of the Rightly-Guided Caliphs in Medina, characterized by rigid geometric verticals, extended horizontal baselines, and deliberate absence of modern diacritics.',
    technicalDetailsAr: 'كُتب بقلم القصب العربي المشطوف بزاوية 30-35 درجة وحبر السناج الكربوني المحضر مع الصمغ العربي وخل العفص.',
    technicalDetailsEn: 'Penned with split Arabic reed pens (qalam) angled at 30–35° using indelible carbon gall ink bound with acacia gum.',
  },
  {
    id: 'illuminated_heading',
    xPct: 52.0,
    yPct: 48.0,
    titleAr: 'إفريز التذهيب النباتي الفاصل (Illuminated Gold Surah Band)',
    titleEn: 'Illuminated 24K Gold Arabesque Chapter Heading',
    categoryAr: 'تذهيب وفنون الزخرفة الإسلامية',
    categoryEn: 'Illumination & Islamic Arabesque Foliage',
    descAr:
      'إطار زخرفي فائق الدقة بماء الذهب ورقائق الذهب الخالص يفصل بين السور الكريمة؛ يتألف من حليات نباتية ملتوية (أرابيسك) وأوراق نخيل وتويجات متناظرة ترمز لجمال الخلق وجلال الوحي الرباني.',
    descEn:
      'Masterwork 24-karat gold leaf decorative band demarcating surah divisions, composed of rhythmic symmetrical scrolling vegetal arabesques and floral palmettes.',
    technicalDetailsAr: 'تقنية التذهيب بصفائح الذهب المثبتة بعصير الثوم ومحلول الغراء النباتي المصقول بحجر العقيق اليماني.',
    technicalDetailsEn: 'Applied gold leaf burnished to a mirror sheen with Yemeni agate stones over a natural plant gum mordant.',
  },
  {
    id: 'vocalization_dots',
    xPct: 42.0,
    yPct: 76.0,
    titleAr: 'نقط الإعراب الملونة لأبي الأسود الدؤلي (Vocalization Dots)',
    titleEn: 'Early Mineral Vocalization Dots (Abu al-Aswad al-Du’ali)',
    categoryAr: 'علوم القرآن وضبط المصاحف',
    categoryEn: 'Quranic Orthography & Phonetics',
    descAr:
      'النقط المستديرة بالأحبار الطبيعية الحمراء والخضراء؛ ابتكرها التابعي الجليل أبو الأسود الدؤلي بأمر الإمام علي بن أبي طالب لضبط حركة الحرف: نقطة حمراء فوق الحرف للفتحة، وأسفله للكسرة، وأمامه للضمة، ونقطتان للتنوين.',
    descEn:
      'Pioneering phonetic vocalization dots in red and green mineral pigments introduced by Abu al-Aswad al-Du’ali to designate short vowels and tanween without altering the consonantal skeleton.',
    technicalDetailsAr: 'حبر معدني أحمر مستخرج من أكسيد الحديد والمغرة الحمراء، وأخضر من كربونات النحاس القاعدية (المالاكيت).',
    technicalDetailsEn: 'Inorganic red iron oxide ochre and green basic copper carbonate (malachite) inks distinguishing vocalization from black script.',
  },
  {
    id: 'parchment_vellum',
    xPct: 86.0,
    yPct: 35.0,
    titleAr: 'الرق الجلدي العتيق (Aged Animal Parchment Vellum)',
    titleEn: 'Aged Animal Vellum & Tanned Membrane Support',
    categoryAr: 'علوم المواد والمخطوطات القديمة',
    categoryEn: 'Codicology & Material Sciences',
    descAr:
      'الرق الطبيعي الفاخر المحضر من جلود الماعز والغزال؛ عولج بالجير والشب والملح وجُفف على إطارات خشبية مشدودة، ليبقى صامداً لأكثر من أربعة عشر قرناً شاهداً على حفظ القرآن الكريم عبر الأجيال.',
    descEn:
      'Fine sheepskin/calfskin vellum prepared by lime treatment, scraping, and taut frame-drying, engineered for archival permanence that has survived fourteen centuries.',
    technicalDetailsAr: 'سطح مُعالج بالطباشير والنشا لتثبيت مسام الحبر، مع احتفاظه بالمتانة العالية ومقاومة الجفاف والتلف البكتيري.',
    technicalDetailsEn: 'Sized with chalk and starch to lock ink pigments into dermal collagen, providing exceptional tensile strength and durability.',
  },
  {
    id: 'verse_separators',
    xPct: 62.0,
    yPct: 86.0,
    titleAr: 'حليات فواصل الآيات التخميسية (Ayah Division Rosettes)',
    titleEn: 'Marginal Ayah Division Rosettes & Section Anchors',
    categoryAr: 'تاريخ رسم المصحف وتجزئته',
    categoryEn: 'Textual Layout & Cantillation Division',
    descAr:
      'زهيرات ودوائر مذهبة ومحلاة بالألوان تُعين القارئ على مواضع الوقف وفواصل الآيات؛ وتتطور عند كل خمس آيات إلى علامة تخميس (حرف هـ أو زهرة خماسية) وكل عشر آيات إلى علامة تعشير.',
    descEn:
      'Illuminated rosettes marking individual verse terminations and five/ten-verse groupings (Akhmas and A’shar) facilitating systematic memorization and rhythmic recitation pacing.',
    technicalDetailsAr: 'رُسمت بحبر الزنجفر القرمزي وماء الذهب، ومؤطرة بدوائر دقيقة مرسومة بالفرجار النحاسي.',
    technicalDetailsEn: 'Inscribed with cinnabar red ink and gold leaf, framed by compass-scribed micro-concentric borders.',
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
    nameAr: 'الخط الكوفي المصحفي',
    nameEn: 'Monumental Kufic',
    eraAr: 'القرن 1 - 4 هجري',
    eraEn: '1st–4th Century AH',
    characteristicsAr: 'هندسي جليل، مستقيم الزوايا، أفقي الامتداد، عالي الهيبة والوقار.',
    characteristicsEn: 'Geometric, angular, extended horizontal baseline, majestic solemnity.',
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
    eraAr: 'منذ ابن مقلة والقرن 4 هـ',
    eraEn: 'Standardized by Ibn Muqla (4th C. AH)',
    characteristicsAr: 'واضح القراءة، متناسق النسب والحركات، منضبط الموازين بنقاط قلم القصب.',
    characteristicsEn: 'Extremely legible, balanced proportions, standardized by rhomic reed-pen dots.',
    canonicalUsageAr: 'خط المصاحف الشريفة المطبوعة في مجمع الملك فهد، والكتب العلمية والدينية المعتمدة.',
    canonicalUsageEn: 'The canonical standard script for printed Qurans and religious textbooks worldwide.',
  },
  {
    id: 'diwani',
    nameAr: 'الخط الديواني والجلي',
    nameEn: 'Diwani & Jali Script',
    eraAr: 'العصر العثماني والحديث',
    eraEn: 'Ottoman Era',
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
  const [activeHotspot, setActiveHotspot] = useState<QuranHotspot>(QURAN_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedCalligraphy, setSelectedCalligraphy] = useState<ArabicCalligraphyStyle>(
    ARABIC_CALLIGRAPHY_STYLES[0]
  );

  const handleOpenModal = () => {
    setModalData({
      imageUrl: quranPhoto,
      titleAr: 'مخطوطة القرآن الكريم الأثرية بالخط الكوفي الحجازي الباكر (4K Ultra-HD)',
      titleEn: 'Ancient Early Kufic Quran Codex Manuscript (4K Archival View)',
      subtitleAr: 'مصحف عتيق على الرق المذهب مع نقط الإعراب الملونة لأبي الأسود الدؤلي',
      subtitleEn: 'Monumental 7th-Century Parchment Leaf with 24K Gold Illumination & Mineral Vocalization',
      descriptionAr:
        'مخطوطة قرآنية نادرة من الصدر الأول للإسلام تمثل النموذج الأصيل للمصاحف العثمانية الأولى؛ كُتبت بالخط الكوفي الحجازي الباكر على رق الغزال الطبيعي الصامد لأكثر من أربعة عشر قرناً. تتجلى في المخطوطة دقة إفريز التذهيب النباتي الفاصل بين السور، ونقط الإعراب الحمراء والخضراء التي وضعها أبو الأسود الدؤلي لضبط مخارج الحروف وحركات الإعراب بدقة متناهية.',
      descriptionEn:
        'Museum-grade 4K archival macro photograph of an authentic 7th-century Early Kufic Quran parchment manuscript leaf. Penned with split reed pens and carbon ink on tanned animal vellum, this codex showcases monumental unpointed script, rich 24-karat gold arabesque surah division palmettes, and early mineral vocalization dots.',
      locationAr: 'متحف المخطوطات والوثائق الإسلامية التاريخية',
      locationEn: 'Museum of Islamic Art & Quranic Manuscripts',
      dateOrEraAr: 'القرن الأول الهجري / السابع الميلادي (عصر التدوين النبوي والراشدي)',
      dateOrEraEn: '1st Century AH / 7th Century CE (Early Caliphal Codex Era)',
    });
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
      {/* Header */}
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
                ? 'مخطوطة المصحف الشريف بالخط الكوفي المذهب (Early Kufic Codex 4K)'
                : 'Ancient Early Kufic Quran Parchment Codex (4K Archival View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'وثيقة قرآنية نادرة توثق الخط الكوفي الحجازي، والتذهيب بماء الذهب، ونقط الإعراب لأبي الأسود الدؤلي'
                : 'Authentic 7th-century parchment leaf with monumental Kufic script, gold headings & mineral vocalization'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير وفحص الرق المذهب 4K' : 'Inspect 4K Parchment'}</span>
        </button>
      </div>

      {/* Main Image Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[4/3] max-h-[520px] rounded-2xl overflow-hidden mt-4 border border-emerald-500/30 shadow-2xl bg-black select-none group">
        <img
          src={quranPhoto}
          alt="Ancient Kufic Quran Codex"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05]"
        />

        {/* Interactive Hotspot Markers */}
        {QURAN_HOTSPOTS.map((spot) => {
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
            <span>{isArabic ? '📜 الخط: كوفي حجازي باكر' : '📜 Script: Early Hijazi Kufic'}</span>
            <span>•</span>
            <span>{isArabic ? '🎨 التذهيب: رقائق الذهب عيار 24' : '🎨 Illumination: 24K Gold Leaf'}</span>
            <span>•</span>
            <span>{isArabic ? '🔴 النقط: ضبط أبي الأسود الدؤلي' : '🔴 Vocalization: Abu al-Aswad System'}</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">
            ARCHIVAL-QURANIC-RESOLUTION
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
                  <strong>{isArabic ? 'التحليل المادي والكوديكولوجي: ' : 'Codicological Analysis: '}</strong>
                  {isArabic ? activeHotspot.technicalDetailsAr : activeHotspot.technicalDetailsEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-emerald-400">
              {isArabic ? 'نقاط الفحص والتدقيق:' : 'Codex Focus Points:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {QURAN_HOTSPOTS.map((s) => (
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
                  ? 'من الكوفي الحجازي الباكر إلى الثلث والنسخ الشريف؛ تطور أدوات الكتابة وضبط المصاحف في الحضارة الإسلامية'
                  : 'From early Hijazi Kufic to majestic Thuluth and Naskh: script engineering across Islamic civilization'}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono text-emerald-500 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
            QURANIC-PALAEOGRAPHY
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
                {isArabic ? 'الاستخدام الكنسي والمصحفي المعتمد:' : 'Canonical Quranic & Architectural Usage:'}
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
