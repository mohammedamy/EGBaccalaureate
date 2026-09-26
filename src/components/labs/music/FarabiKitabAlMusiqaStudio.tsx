import React, { useState, useMemo, useRef } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Music,
  Play,
  Volume2,
  Compass,
  Sliders,
  Heart,
} from 'lucide-react';
import farabiPhoto from '../../../assets/music/farabi_kitab_al_musiqa_930.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface FarabiHotspot {
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

export const FARABI_HOTSPOTS: FarabiHotspot[] = [
  {
    id: 'microtonal_ratios_fractions',
    xPct: 62.0,
    yPct: 45.0,
    titleAr: 'النسب والكسور الرياضية للأبعاد النغمية (Acoustic String Ratios)',
    titleEn: 'Mathematical String Length Ratios & Microtonal Fractions',
    categoryAr: 'الفيزياء الصوتية والرياضيات',
    categoryEn: 'Acoustic Physics & Mathematical Tuning',
    descAr:
      'حدد أبو نصر الفارابي في كتابه أطوال الأوتار المهتزة بنسب هندسية وكسور رياضية بالغة الدقة: النغمة المتفقة بالكل (الديابازون / الأوكتاف بنسبة 2 : 1)، ذو الخمسة (الديابنتيه / الخامسة التامة 3 : 2)، ذو الأربعة (الدياتسرون / الرابعة التامة 4 : 3)، والطن (البعد الطنيني 9 : 8). كما دقق الفارابي قياس النغمات المحايدة (سكة وزلزل) التي تؤسس لأرباع التون في الموسيقى الشرقية.',
    descEn:
      'In his masterwork, Abu Nasr al-Farabi mathematically calibrated vibrating string lengths using precise geometric fractions: the octave (Diapason 2:1), perfect fifth (Diapente 3:2), perfect fourth (Diatessaron 4:3), and major second tone (Tonus 9:8). He established the acoustic foundation of neutral microtonal intervals (e.g. Zalzal’s neutral third ~27:22), the cornerstone of Arab quarter-tone maqamat.',
    scientificInsightAr:
      'أثبت الفارابي بالتجربة على المونوكورد (الوتر الواحد) أن طبقة الصوت (التردد Hz) تتناسب عكسياً مع طول الوتر المهتز؛ فنصف طول الوتر يعطي ضعف التردد تماماً (+1200 سنت).',
    scientificInsightEn:
      'Farabi demonstrated experimentally on the monochord that pitch frequency is strictly inversely proportional to vibrating string length ($f \propto 1/L$); bisecting string length exactly doubles acoustic frequency (+1200 cents).',
  },
  {
    id: 'five_string_oud_geometry',
    xPct: 18.0,
    yPct: 22.0,
    titleAr: 'هندسة العود الخماسي والوتر الخامس الحاد (Al-Hadd String)',
    titleEn: 'Five-Stringed Oud Geometry & The Quintuple Treble String',
    categoryAr: 'علم الآلات الموسيقية (Organology)',
    categoryEn: 'Organology & Lute Acoustic Architecture',
    descAr:
      'قام الفارابي بتطوير العود العربي الكلاسيكي بإضافة وتر خامس أسماه "الحاد" إلى جانب الأوتار الأربعة التقليدية (البم، المثلث، المثنى، الزير). أتاح هذا الوتر الخماسي توسيع المدى الصوتي للآلة إلى ديوانين كاملين (أوكتافين)، مما مكّن العازف من أداء كافة الأجناس والسلالم دون الحاجة إلى تغيير تسوية الآلة أو الانتقال لآلة أخرى.',
    descEn:
      'Al-Farabi augmented the classical four-stringed Arabic Oud (Bamm, Mathlath, Mathna, Zir) by adding a fifth treble string dubbed "Al-Hadd". This fifth course expanded the instrument’s compass to two full octaves, empowering performers to navigate all modal tetrachords (ajnas) and complex modulations seamlessly without retuning.',
    scientificInsightAr:
      'تُسوّى أوتار العود عند الفارابي بأبعاد الرابعة التامة (نسبة 4 : 3)، مما يخلق اتساقاً هارمونياً ومسافات متناظرة مريحة لأصابع اليد اليسرى على الرقبة.',
    scientificInsightEn:
      'Farabi tuned adjacent Oud courses in ascending fourths (4:3 ratio), creating isometric fingering patterns across the fingerboard for rapid modal modulation.',
  },
  {
    id: 'dastan_frets_tuning',
    xPct: 62.0,
    yPct: 35.0,
    titleAr: 'دساتين العود ومواقع الأصابع (Dastan Fretting System)',
    titleEn: 'Oud Fretting Nomenclature (Dastan Finger Positions)',
    categoryAr: 'نظم التسوية والسلالم النغمية',
    categoryEn: 'Tuning Scales & Fingerboard Geography',
    descAr:
      'وثّق الفارابي مواقع الدساتين (الروابط الحريرية الملفوفة على رقبة العود) بمسمياتها التاريخية الدقيقة: المجنّب (السبابة الصغرى)، السبابة، وسطى الفرس، وسطى زلزل (النغمة المحايدة)، البنصر، والخنصر. هذا التقسيم الدقيق هو الذي أنتج نغمات أرباع التون الفريدة التي لا تزال تميز المقامات العربية حتى اليوم.',
    descEn:
      'Farabi documented the precise tied gut frets (dasatin) along the neck: Mujannab (anterior fret), Sabbaba (index), Wusta al-Furs (Persian middle), Wusta Zalzal (neutral middle of Zalzal), Binsir (ring), and Khinsir (pinky). This exact geometric fretting generated the microtonal quarter-tones defining modern Arab maqamat.',
    scientificInsightAr:
      'تبعد "وسطى زلزل" مسافة 355 سنتاً عن النغمة المطلقة، وهي تمثل الثلث المحايد المميز لمقام الراست والبياتي، المستحيل عزفه على البيانو الغربي ذي الدوزان المعدل.',
    scientificInsightEn:
      'Wusta Zalzal lies at ~355 cents above the open string, representing the exquisite neutral third of Rast and Bayati, unplayable on standard Western 12-EDO equal-tempered pianos.',
  },
  {
    id: 'therapeutic_acoustic_ethos',
    xPct: 88.0,
    yPct: 22.0,
    titleAr: 'الإيثوس الصوتي والعلاج بالموسيقى (Modal Affective Ethos)',
    titleEn: 'Acoustic Ethos & Music Therapy in Medieval Medicine',
    categoryAr: 'العلاج الصوتي وعلم النفس الموسيقي',
    categoryEn: 'Psychoacoustics & Therapeutic Music',
    descAr:
      'كان الفارابي رائداً في علم النفس الصوتي؛ إذ درس تأثير الأنغام على الحالة النفسية والفسيولوجية للإنسان في البيمارستانات (المستشفيات الإسلامية). وصنّف المقامات وفق تأثيراتها الشعورية: فالراست يبعث على الشجاعة والاتزان، والبياتي يُثير الحنين والبهجة المتزنة، والحجاز يضفي الجلال والخشوع الروحي، والصبا يُحرك الشجن الرقيق.',
    descEn:
      'Al-Farabi pioneered medical psychoacoustics, exploring how musical modes modulate heart rate, neurological tranquility, and mental health in Islamic bimaristans (hospitals). He categorized modal ethos: Rast evokes fortitude and serenity, Bayati stirs balanced longing, Hijaz instills sacred majesty, and Saba evokes poignant pathos.',
    scientificInsightAr:
      'استخدم أطباء البيمارستان النوري بدمشق وبيمارستان قلاوون بالقاهرة نغمات الفارابي في ساعات الفجر والغروب لتهدئة مرضى الأرق والاضطرابات العصبية والنفسية.',
    scientificInsightEn:
      'Physicians at Cairo’s Qalawun and Damascus’s Nuri bimaristans applied Farabi’s modal tunings during dawn and twilight to soothe insomnia, melancholia, and nervous disorders.',
  },
  {
    id: 'grand_book_manuscript_discovery',
    xPct: 40.0,
    yPct: 85.0,
    titleAr: 'مخطوطة كتاب الموسيقى الكبير (The Grand Treatise Folio)',
    titleEn: 'Manuscript Archaeology of Kitab al-Musiqa al-Kabir',
    categoryAr: 'المخطوطات والتوثيق التاريخي',
    categoryEn: 'Manuscriptology & Islamic Renaissance',
    descAr:
      'ألف الفارابي هذا السفر الموسوعي الضخم بدمشق بطلب من الوزير العباسي أبو جعفر محمد بن القاسم الكرخي، ليكون أول دراسة شاملة تدمج فيزياء الصوت اليونانية (فيثاغورس وأرسطو وأرستوكسينوس) مع التطبيق العملي للغناء والعزف العربي. تُرجمت أجزاء منه إلى اللاتينية وألهمت علماء النهضة الأوروبية في القرن السادس عشر.',
    descEn:
      'Al-Farabi composed this monumental encyclopedia in Damascus at the behest of Abbasid vizier Abu Ja’far Muhammad ibn al-Qasim, creating the first synthesis of Greek acoustics (Pythagoras, Aristoxenus) with authentic Arab performance practice. Latin translations subsequently influenced Renaissance European musicologists.',
    scientificInsightAr:
      'يحتوي الكتاب على أقدم رسوم بيانية توضيحية لآلات القندهار والمزمار والطنبور الخراساني والبغدادي مع حسابات تردداتها الفيزيائية.',
    scientificInsightEn:
      'The manuscript contains the earliest extant engineering diagrams for medieval lutes, double-reed pipes, and Khorasanian tunburs alongside physical frequency calculations.',
  },
];

export const FarabiKitabAlMusiqaStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<FarabiHotspot>(FARABI_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'monochord_ratios' | 'modal_ethos'
  const [engineMode, setEngineMode] = useState<'monochord_ratios' | 'modal_ethos'>('monochord_ratios');

  // Monochord Engine State
  const [fundamentalFreq, setFundamentalFreq] = useState<number>(220); // A3 in Hz
  const [stringLengthCm, setStringLengthCm] = useState<number>(60); // 60 cm full string
  const [selectedRatioIndex, setSelectedRatioIndex] = useState<number>(1); // Default to Fifth (3:2)

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  const RATIOS = useMemo(
    () => [
      { nameAr: 'المطلق / الأساس (1 : 1)', nameEn: 'Unison Fundamental (1:1)', num: 1, den: 1, cents: 0, intervalAr: 'النغمة الأساسية', intervalEn: 'Prime Unison' },
      { nameAr: 'ذو الخمسة / الخامسة التامة (3 : 2)', nameEn: 'Perfect Fifth (3:2)', num: 3, den: 2, cents: 702, intervalAr: 'الديابنتيه', intervalEn: 'Diapente' },
      { nameAr: 'ذو الأربعة / الرابعة التامة (4 : 3)', nameEn: 'Perfect Fourth (4:3)', num: 4, den: 3, cents: 498, intervalAr: 'الدياتسرون', intervalEn: 'Diatessaron' },
      { nameAr: 'الطن / الثانية الكبيرة (9 : 8)', nameEn: 'Major Second (9:8)', num: 9, den: 8, cents: 204, intervalAr: 'البعد الطنيني الكامل', intervalEn: 'Whole Tonus' },
      { nameAr: 'وسطى زلزل / الثلث المحايد (27 : 22)', nameEn: 'Neutral Third Zalzal (27:22)', num: 27, den: 22, cents: 355, intervalAr: 'نغمة الراست والبياتي', intervalEn: 'Neutral Maqam Third' },
      { nameAr: 'المتفق بالكل / الأوكتاف (2 : 1)', nameEn: 'Diapason Octave (2:1)', num: 2, den: 1, cents: 1200, intervalAr: 'الديابازون التام', intervalEn: 'Diapason Octave' },
      { nameAr: 'ذو الكل والخمسة (3 : 1)', nameEn: 'Tritave / 12th (3:1)', num: 3, den: 1, cents: 1902, intervalAr: 'أوكتاف + خامسة تامة', intervalEn: 'Compound Fifth' },
    ],
    []
  );

  const activeRatio = RATIOS[selectedRatioIndex];

  // Calculated Acoustics
  const calculatedFreq = useMemo(() => {
    return Math.round(fundamentalFreq * (activeRatio.num / activeRatio.den) * 10) / 10;
  }, [fundamentalFreq, activeRatio]);

  const vibratingLengthCm = useMemo(() => {
    return Math.round((stringLengthCm * (activeRatio.den / activeRatio.num)) * 10) / 10;
  }, [stringLengthCm, activeRatio]);

  // Web Audio Tone Synthesis
  const playAcousticTone = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Plucked string harmonic synthesis (rich sawtooth-like chime)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(calculatedFreq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.65);
    } catch {
      // Audio fallback gracefully handled
    }
  };

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: farabiPhoto,
      titleAr: 'مخطوطة كتاب الموسيقى الكبير — أبو نصر الفارابي c. 930 م',
      titleEn: 'Kitab al-Musiqa al-Kabir Folio — Abu Nasr al-Farabi c. 930 CE',
      subtitleAr: 'رق بارشمينت أثري ورسوم هندسية لأوتار العود الخماسي والمونوكورد وريشة النسر',
      subtitleEn: 'Ancient Abbasid Parchment Folio with String Geometry, 5-Course Oud & Eagle Quill',
      descriptionAr:
        'أعظم مرجع في فيزياء وهندسة الموسيقى ونظرياتها في العصر الذهبي للحضارة الإسلامية. وضع فيه المعلم الثاني أبو نصر الفارابي في دمشق أسس القياس الرياضي الدقيق لترددات الأوتار ونسب المقامات وأرباع التون وهندسة العود الخماسي ومواقع الدساتين، جامعاً بين التجربة الفيزيائية الصارمة والأثر النفسي العلاجي للألحان.',
      descriptionEn:
        'The definitive encyclopedic masterwork of acoustic physics and modal theory from the Islamic Golden Age. Penned by the "Second Master" Abu Nasr al-Farabi in Damascus, establishing the mathematical foundations of vibrating string ratios, the 5-stringed Oud, fretting dasatin, and psychoacoustic music therapy.',
      locationAr: 'دمشق وبغداد (نسخ محفوظة بالمكتبة الوطنية بباريس ومتحف طوب قابي بإسطنبول)',
      locationEn: 'Damascus & Baghdad (Codices in Bibliothèque nationale de France & Topkapi Museum)',
      dateOrEraAr: 'القرن الرابع الهجري / حوالي 930 ميلادية (العصر العباسي)',
      dateOrEraEn: '4th Century AH / circa 930 CE (Abbasid Golden Age)',
    }),
    []
  );

  const containerBg = isLight
    ? 'bg-amber-50/70 border-amber-200 text-slate-900'
    : isContrast
    ? 'bg-black border-amber-400 text-amber-300'
    : 'bg-slate-950 border-amber-900/40 text-slate-100';

  const cardBg = isLight
    ? 'bg-white border-slate-200 shadow-sm'
    : isContrast
    ? 'bg-black border-amber-500'
    : 'bg-slate-900/80 border-amber-500/20 backdrop-blur-sm';

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 space-y-6 ${containerBg}`}>
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-700 via-yellow-600 to-amber-900 text-white shadow-lg shadow-amber-700/20">
            <Music className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                c. 930 CE • Abbasid Baghdad & Damascus
              </span>
              <span className="text-xs font-mono text-slate-400">The Second Master (Al-Mu'allim al-Thani)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'الفارابي وكتاب الموسيقى الكبير 4K' : 'Al-Farabi: Kitab al-Musiqa al-Kabir 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('monochord_ratios')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'monochord_ratios'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'المونوكورد والنسب الهندسية' : 'Monochord String Physics'}
          </button>
          <button
            onClick={() => setEngineMode('modal_ethos')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'modal_ethos'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الإيثوس الصوتي والعلاج' : 'Therapeutic Modal Ethos'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={farabiPhoto}
          alt="Al-Farabi Kitab al-Musiqa al-Kabir 930 CE"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {FARABI_HOTSPOTS.map((h, idx) => {
          const isSelected = selectedHotspot.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setSelectedHotspot(h)}
              style={{ left: `${h.xPct}%`, top: `${h.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer group z-20"
              title={isArabic ? h.titleAr : h.titleEn}
            >
              <span
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 font-mono text-xs font-black transition-all ${
                  isSelected
                    ? 'bg-amber-500 border-white text-black scale-125 shadow-lg shadow-amber-500/50'
                    : 'bg-black/80 border-amber-400 text-amber-300 hover:scale-110 hover:border-white'
                }`}
              >
                {idx + 1}
              </span>
            </button>
          );
        })}

        {/* Fullscreen HD Modal Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/80 hover:bg-black text-amber-300 border border-amber-500/40 text-xs font-semibold backdrop-blur transition-all cursor-pointer min-h-[44px]"
        >
          <Maximize2 className="w-4 h-4" />
          <span>{isArabic ? 'فحص اللوحة الأرشيفية بدقة 4K' : 'Inspect 4K Master Folio'}</span>
        </button>

        {/* Badge */}
        <div className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/80 text-amber-300 border border-amber-500/40 text-xs font-mono backdrop-blur flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{isArabic ? 'مخطوط دمشق وبغداد 930 م' : 'Damascus & Baghdad Codex c. 930 CE'}</span>
        </div>
      </div>

      {/* Selected Hotspot Card */}
      <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-amber-400">
              {isArabic ? selectedHotspot.titleAr : selectedHotspot.titleEn}
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {isArabic ? selectedHotspot.categoryAr : selectedHotspot.categoryEn}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isArabic ? selectedHotspot.descAr : selectedHotspot.descEn}
        </p>
        <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs font-mono text-amber-300/90 leading-relaxed">
            <strong className="text-amber-400">
              {isArabic ? 'التحليل الفيزيائي والهارموني: ' : 'Physical & Harmonic Insight: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'monochord_ratios' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'مختبر مونوكورد الفارابي والنسب الفيزيائية للترددات' : 'Farabi Monochord Acoustic Ratio & Frequency Generator'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">f₀ = {fundamentalFreq} Hz</span>
              <span className="text-amber-400 font-bold">f = {calculatedFreq} Hz</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
                +{activeRatio.cents} cents
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Vector Monochord Schematic SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 340 180" className="w-full max-w-[340px] h-auto overflow-visible">
                {/* Wooden Resonator Box */}
                <rect x="20" y="80" width="300" height="45" rx="6" fill="#78350f" stroke="#b45309" strokeWidth="1.5" />
                <rect x="30" y="90" width="280" height="15" fill="#451a03" stroke="#b45309" strokeWidth="0.8" />

                {/* Left Fixed Bridge (Nut) */}
                <polygon points="35,65 45,65 40,80" fill="#facc15" stroke="#78350f" strokeWidth="1" />
                {/* Right Fixed Bridge (Saddle) */}
                <polygon points="295,65 305,65 300,80" fill="#facc15" stroke="#78350f" strokeWidth="1" />

                {/* Movable Brass Bridge Position based on vibrating string length */}
                {(() => {
                  const bridgeX = 40 + (vibratingLengthCm / stringLengthCm) * 260;
                  return (
                    <g transform={`translate(${bridgeX}, 0)`}>
                      <polygon points="-6,63 6,63 0,80" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="0" cy="58" r="3" fill="#f43f5e" />
                      <text x="0" y="48" fill="#fecdd3" fontSize="8" fontFamily="monospace" textAnchor="middle">
                        Bridge ({vibratingLengthCm}cm)
                      </text>
                    </g>
                  );
                })()}

                {/* Vibrating String Standing Wave */}
                <line x1="40" y1="65" x2="300" y2="65" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                {(() => {
                  const activeX = 40 + (vibratingLengthCm / stringLengthCm) * 260;
                  return (
                    <path
                      d={`M40,65 Q${(40 + activeX) / 2},48 ${activeX},65 Q${(40 + activeX) / 2},82 ${activeX},65`}
                      fill="#38bdf8"
                      fillOpacity="0.2"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                  );
                })()}

                {/* Dimension Line */}
                <line x1="40" y1="145" x2="300" y2="145" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 2" />
                <text x="170" y="160" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Full String Length L = {stringLengthCm} cm (Monochord Bed)
                </text>
              </svg>

              {/* Sound Play Button */}
              <button
                onClick={playAcousticTone}
                className="mt-3 flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/30 transition-all cursor-pointer min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <Volume2 className="w-4 h-4" />
                <span>{isArabic ? `عزف نغمة ${activeRatio.nameAr} (${calculatedFreq} Hz)` : `Play ${activeRatio.nameEn} (${calculatedFreq} Hz)`}</span>
              </button>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                  {isArabic ? 'اختر النسبة الهندسية للأبعاد النغمية (Farabi Ratios)' : 'Select Pythagorean Harmonic Ratio'}
                </label>
                <div className="grid grid-cols-1 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
                  {RATIOS.map((r, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRatioIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                        selectedRatioIndex === idx
                          ? 'bg-amber-600/30 border-amber-400 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-sans font-medium text-amber-300">{isArabic ? r.nameAr : r.nameEn}</span>
                      <span className="text-[11px] text-amber-400 font-bold">{r.num}:{r.den}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'تردد الوتر المطلق (Fundamental Frequency)' : 'Base Fundamental Frequency'}
                  </span>
                  <span className="font-mono text-amber-400">{fundamentalFreq} Hz</span>
                </label>
                <input
                  type="range"
                  min="110"
                  max="440"
                  step="5"
                  value={fundamentalFreq}
                  onChange={(e) => setFundamentalFreq(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'طول سرير المونوكورد (Monochord Bed Length L)' : 'Monochord String Length L'}
                  </span>
                  <span className="font-mono text-amber-400">{stringLengthCm} cm</span>
                </label>
                <input
                  type="range"
                  min="40"
                  max="120"
                  step="5"
                  value={stringLengthCm}
                  onChange={(e) => setStringLengthCm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'طول الوتر المهتز' : 'Vibrating Length'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{vibratingLengthCm} cm</div>
                  <div className="text-[10px] text-slate-400">Ratio: {activeRatio.den}/{activeRatio.num} of L</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'المسافة بالسنت' : 'Cents Distance'}</div>
                  <div className="text-emerald-400 font-bold mt-0.5">+{activeRatio.cents} ¢</div>
                  <div className="text-[10px] text-slate-400">1200 ¢ = 1 Octave</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: Modal Affective Ethos & Psychoacoustics */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'مصفوفة الإيثوس الصوتي وتصنيف المقامات عند الفارابي' : 'Farabi Modal Ethos & Psychological Resonance Matrix'}
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              Bimaristan Music Therapy Classification
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                nameAr: 'مقام الراست (الملك)',
                nameEn: 'Maqam Rast (The King)',
                tonic: 'C (Yakah)',
                ethosAr: 'الشجاعة والفروسية والاتزان الروحي، يعزز الصفاء الذهني وعلاج اضطرابات الإدراك.',
                ethosEn: 'Courage, sovereignty, and emotional equilibrium; applied for cognitive focus in bimaristans.',
                color: 'border-amber-700/40 text-amber-400',
              },
              {
                nameAr: 'مقام البياتي (الفرح والشجن)',
                nameEn: 'Maqam Bayati (Tenderness & Joy)',
                tonic: 'D (Dukah)',
                ethosAr: 'الحنين الهادئ والألفة العاطفية، يُخفف التوتر العضلي ويسهل النوم المريح.',
                ethosEn: 'Tender nostalgia and warmth; applied at twilight to relieve tension and facilitate restful sleep.',
                color: 'border-emerald-700/40 text-emerald-400',
              },
              {
                nameAr: 'مقام السيكاه (السكينة والشفاء)',
                nameEn: 'Maqam Sikah (Serenity & Healing)',
                tonic: 'E-half-flat (Sikah)',
                ethosAr: 'الطمأنينة الروحية العميقة، استُخدم لتهدئة نبض القلب وعلاج نوبات الهلع.',
                ethosEn: 'Deep spiritual serenity; applied in hospital wards to slow pulse and pacify panic episodes.',
                color: 'border-sky-700/40 text-sky-400',
              },
              {
                nameAr: 'مقام الحجاز (الجلال والرهبة)',
                nameEn: 'Maqam Hijaz (Majestic Solitude)',
                tonic: 'D (Dukah)',
                ethosAr: 'الخشوع والهيبة والجلال، يُحفز الإلهام الفكري والتركيز العميق في الصلوات.',
                ethosEn: 'Sacred majesty, solemnity, and awe; awakens meditative contemplation and prayerful focus.',
                color: 'border-rose-700/40 text-rose-400',
              },
              {
                nameAr: 'مقام الصبا (الحزن والتطهر)',
                nameEn: 'Maqam Saba (Cathartic Pathos)',
                tonic: 'D (Dukah)',
                ethosAr: 'الشجن الشفيف والتطهر الوجداني (Catharsis)، يساعد في تفريغ الأحزان المكبوتة.',
                ethosEn: 'Poignant pathos and cathartic release; used in psychiatric therapy to unlock repressed grief.',
                color: 'border-purple-700/40 text-purple-400',
              },
              {
                nameAr: 'مقام النهاوند (العاطفة العميقة)',
                nameEn: 'Maqam Nahawand (Lyrical Romance)',
                tonic: 'C (Rast)',
                ethosAr: 'الرومانسية والتأمل الشاعري الهادئ، يماثل السلم الصغير الغربي بنكهة شرقية محببة.',
                ethosEn: 'Lyrical romanticism and calm reverie; bridge between Western minor and Eastern soul.',
                color: 'border-blue-700/40 text-blue-400',
              },
            ].map((m, idx) => (
              <div key={idx} className={`p-4 rounded-xl bg-slate-950 border ${m.color} space-y-2`}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs">{isArabic ? m.nameAr : m.nameEn}</h4>
                  <span className="text-[10px] font-mono text-slate-400">{m.tonic}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {isArabic ? m.ethosAr : m.ethosEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hi-Res 4K Modal */}
      {isModalOpen && (
        <HiResImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
          lang={isArabic ? 'ar' : 'en'}
          theme={isLight ? 'light' : isContrast ? 'high-contrast' : 'dark'}
        />
      )}
    </div>
  );
};
