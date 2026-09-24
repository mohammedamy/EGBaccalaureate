import React, { useState } from 'react';
import {
  Maximize2,
  BookOpen,
  Sparkles,
  Feather,
  Layers,
  Info,
  Volume2,
  Play,
  Palette,
  CheckCircle2,
} from 'lucide-react';
import manuscriptPhoto from '../../../assets/christianLab/ancient_coptic_manuscript.jpg';
import { HiResImageModal, type HiResImageModalData } from './HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

interface ManuscriptHotspot {
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

const MANUSCRIPT_HOTSPOTS: ManuscriptHotspot[] = [
  {
    id: 'illuminated_initial',
    xPct: 22.0,
    yPct: 26.0,
    titleAr: 'الحرف الاستهلالي المذهب (Illuminated Drop Cap)',
    titleEn: 'Illuminated Initial Gold Drop Cap',
    categoryAr: 'تذهيب وزخرفة أيقونية',
    categoryEn: 'Gilding & Initial Ornamentation',
    descAr:
      'الحرف الاستهلالي البديع الذي يفتتح النص الإنجيلي؛ رُسم بماء الذهب ورقائق الذهب العيار 24 محاطاً بحليات مضفورة وزخارف صلبان قبطية دقيقة تعكس تقديس الكلمة الإلهية وفن نساخة المخطوطات الإسكندرية.',
    descEn:
      'Monumental drop-cap letter opening the gospel pericopes, gilded with 24-karat gold leaf and encircled by intricate interlaced Coptic ribbon crosses.',
    technicalDetailsAr: 'تقنية التذهيب بالغراء الحيواني (Gilding Bole) وصقل العقيق الطبيعي مع حبر الزنجفر المعدني.',
    technicalDetailsEn: 'Animal-size mordant gilding burnished with natural agate stones and vermilion mineral borders.',
  },
  {
    id: 'cinnabar_rubrics',
    xPct: 56.0,
    yPct: 18.0,
    titleAr: 'عناوين الزنجفر القرمزي (Cinnabar Rubrics & Titles)',
    titleEn: 'Cinnabar Red Rubrics & Chapter Headings',
    categoryAr: 'أحبار كنسية ومعادن طبيعية',
    categoryEn: 'Ecclesiastical Inks & Minerals',
    descAr:
      'عناوين الأصحاحات والمردات الليتورجية المكتوبة بحبر الزنجفر القرمزي المستخرج من كبريتيد الزئبق الطبيعي؛ تميز علامات التوقف اللحني والتناوب بين الخورسين البحري والقبلي.',
    descEn:
      'Liturgical titles and choir prompts written in vibrant cinnabar red ink derived from natural mercuric sulfide, designating antiphonal choral chants.',
    technicalDetailsAr: 'حبر معدني ثابت لا يبهت عبر القرون، محضر من مسحوق الزنجفر مع الصمغ العربي.',
    technicalDetailsEn: 'Highly stable inorganic pigment prepared from purified cinnabar ore emulsified in Acacia gum.',
  },
  {
    id: 'uncial_calligraphy',
    xPct: 50.0,
    yPct: 50.0,
    titleAr: 'الخط الأونسيال الباكر (Early Coptic Uncial Script)',
    titleEn: 'Early Coptic Uncial Book-Hand Calligraphy',
    categoryAr: 'باليوغرافيا وفقه الخطوط القديمة',
    categoryEn: 'Palaeography & Ancient Epigraphy',
    descAr:
      'خط الكتب الرسمي ذو الحروف الكبيرة المنفصلة (Uncial/Majuscule)؛ يتميز بالهيبة والوضوح، ويجمع 25 حرفاً يونانياً بالإضافة إلى 7 أحرف مشتقة من الخط الديموطيقي المصري القديم للتعبير عن أصوات اللسان المصري الأصيل.',
    descEn:
      'Formal book-hand majuscule script combining 25 Greek-derived letters with 7 Demotic Egyptian glyphs representing native Egyptian phonemes.',
    technicalDetailsAr: 'كُتب بقلم البوص النيلي (Calamus) المشطوف بزاوية 45 درجة وحبر السناج الكربوني العضوي المقاوم للرطوبة.',
    technicalDetailsEn: 'Penned using split Nile reed pens (calamus) angled at 45° with indelible carbon lampblack gall ink.',
  },
  {
    id: 'papyrus_fibers',
    xPct: 78.0,
    yPct: 70.0,
    titleAr: 'شبكة ألياف البردي النيلي المتعامدة (Papyrus Fiber Grid)',
    titleEn: 'Crossed Nile Papyrus Fibers (Recto/Verso Grid)',
    categoryAr: 'علوم المواد وعلم الآثار القديمة',
    categoryEn: 'Material Science & Archaeometry',
    descAr:
      'نسيج الورق البردي المصري الأصيل؛ شُرائح نخاع ساق نبات البردي (Cyperus papyrus) مقطوعة طولياً ومرصوصة في طبقتين متعامدتين (أفقية وعمودية)، مدمجة بالعصير النباتي اللزج ومصقولة بمحار البحر الأبيض.',
    descEn:
      'Authentic Egyptian papyrus substrate composed of longitudinal strips of Cyperus papyrus pith aligned in perpendicular layers, bonded by natural sap.',
    technicalDetailsAr: 'الوجه الأمامي (Recto) بالألياف الأفقية لتسهيل مسار القلم، والوجه الخلفي (Verso) بالألياف الرأسية.',
    technicalDetailsEn: 'Recto side with horizontal fibers facilitating script stroke flow; Verso side with vertical stabilizing fibers.',
  },
  {
    id: 'margin_knotwork',
    xPct: 20.0,
    yPct: 78.0,
    titleAr: 'حليات الهوامش وصلبان التسابيح (Marginal Doxology Knotwork)',
    titleEn: 'Marginal Doxology Knotwork & Alleluia Crosses',
    categoryAr: 'زخرفة الهوامش وفن النساخة',
    categoryEn: 'Marginalia & Manuscript Illumination',
    descAr:
      'صلبان وحليات هندسية بالأحبار الملونة على هوامش الصفحة تُحدد مواضع مردات «الليلويا» وتسابيح السهرانة؛ تحمي أطراف النص وتمنح الصفحة توازناً بصرياً وتأملاً روحياً.',
    descEn:
      'Decorative marginal cross motifs and knotwork anchors indicating Alleluia chants and vigil responses, providing visual aesthetic balance.',
    technicalDetailsAr: 'زخارف هندسية مستوحاة من نسيج القباطي المصري وعمارة الأديرة الباكرة بوادي النطرون والصعيد.',
    technicalDetailsEn: 'Geometric knotwork echoing ancient Coptic tapestry (Qubati) and early monastic architectural motifs.',
  },
];

export interface DemoticLetter {
  coptic: string;
  nameAr: string;
  nameEn: string;
  sound: string;
  ipa: string;
  demoticOrigin: string;
  gardinerCode: string;
  gardinerDescAr: string;
  gardinerDescEn: string;
  copticWord: string;
  wordPronounceAr: string;
  wordPronounceEn: string;
  wordMeaningAr: string;
  wordMeaningEn: string;
  liturgicalUsageAr: string;
  liturgicalUsageEn: string;
  calamusDuctusAr: string;
  calamusDuctusEn: string;
  audioFreq: number;
}

export const DEMOTIC_LETTERS: DemoticLetter[] = [
  {
    coptic: 'Ϣ',
    nameAr: 'شاي (Shai)',
    nameEn: 'Shai',
    sound: 'ش',
    ipa: '/ʃ/',
    demoticOrigin: '𓆷',
    gardinerCode: 'M20',
    gardinerDescAr: 'حقل البردي والمستنقع المائي بالدلتا',
    gardinerDescEn: 'Papyrus marsh / wetland clump in Lower Egypt',
    copticWord: 'Ϣⲗⲏⲗ',
    wordPronounceAr: 'شليل (Shlil)',
    wordPronounceEn: 'Shlil',
    wordMeaningAr: 'صلاة / ابتهال ليتورجي',
    wordMeaningEn: 'Prayer / Liturgical supplication',
    liturgicalUsageAr: '«Ϣⲗⲏⲗ ⲉϫⲉⲛ...» (صلوا من أجل...) في الأواشي الكنسية الكبرى.',
    liturgicalUsageEn: 'Key phrase opening Great Litany petitions: "Pray for..."',
    calamusDuctusAr: 'يبدأ بخط أفقي أساسي ثم 3 أسنان مقوسة تماثل أعواد البردي النيلي بزاوية 45°.',
    calamusDuctusEn: 'Horizontal baseline anchor followed by 3 curved teeth mimicking Nile papyrus shoots at 45°.',
    audioFreq: 330,
  },
  {
    coptic: 'Ϥ',
    nameAr: 'فاي (Fai)',
    nameEn: 'Fai',
    sound: 'ف',
    ipa: '/f/',
    demoticOrigin: '𓆑',
    gardinerCode: 'I9',
    gardinerDescAr: 'الحية المقرنة (Cerastes vipera)',
    gardinerDescEn: 'Horned viper snake (Egyptian desert fauna)',
    copticWord: 'Ϥⲁⲓ',
    wordPronounceAr: 'فاي (Fai)',
    wordPronounceEn: 'Fai',
    wordMeaningAr: 'يحمل / يرفع / الرافـع',
    wordMeaningEn: 'To carry / To bear / Bearer',
    liturgicalUsageAr: '«Ϥⲁⲓ ϧⲁ ⲡⲓⲛⲟⲃⲓ» (حامل خطية العالم) في صلوات القداس الإلهي.',
    liturgicalUsageEn: '"Bearer of sins" in Eucharistic anaphora prayers.',
    calamusDuctusAr: 'حلقة بيضاوية علوية تنعطف في ساق عمودية مشطوفة تمثل رأس وعنق الحية المقرنة.',
    calamusDuctusEn: 'Oval upper loop sweeping downward into a vertical reed stalk depicting the viper.',
    audioFreq: 392,
  },
  {
    coptic: 'Ϧ',
    nameAr: 'خاي (Khai)',
    nameEn: 'Khai',
    sound: 'خ',
    ipa: '/x/',
    demoticOrigin: '𓐍',
    gardinerCode: 'Aa1',
    gardinerDescAr: 'مشيمة الكائن الحي / شبكة الغربال القديم',
    gardinerDescEn: 'Placenta symbol / archaic circular sieve lattice',
    copticWord: 'Ϧⲉⲛ',
    wordPronounceAr: 'خين (Khen)',
    wordPronounceEn: 'Khen',
    wordMeaningAr: 'في / باسم / بواسطة',
    wordMeaningEn: 'In / In the name of / By means of',
    liturgicalUsageAr: '«Ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ...» (باسم الآب والابن والروح القدس) افتتاحية كل صلاة.',
    liturgicalUsageEn: 'Opening solemn doxology: "In the name of the Father..."',
    calamusDuctusAr: 'قوس نصف دائري مقعر مقطوع بخط عرضي بارز يحدد المخارج الحلقية.',
    calamusDuctusEn: 'Concave semi-circular arch bisected horizontally at the reed tip.',
    audioFreq: 440,
  },
  {
    coptic: 'Ϩ',
    nameAr: 'هوري (Hori)',
    nameEn: 'Hori',
    sound: 'هـ (حنجرية قوية)',
    ipa: '/h/',
    demoticOrigin: '𓉔',
    gardinerCode: 'O4',
    gardinerDescAr: 'فناء البيت المصري الريفي / الحظيرة المسورة',
    gardinerDescEn: 'Reed shelter / enclosed courtyard of Egyptian house',
    copticWord: 'Ϩⲓⲧⲉⲛ',
    wordPronounceAr: 'هيتين (Hiten)',
    wordPronounceEn: 'Hiten',
    wordMeaningAr: 'بشفاعة / من خلال صلوات',
    wordMeaningEn: 'Through the intercessions of / By prayers',
    liturgicalUsageAr: '«Ϩⲓⲧⲉⲛ ⲛⲓⲡⲣⲉⲥⲃⲓⲁ...» (بشفاعات والدة الإله...) في مطلع القداس.',
    liturgicalUsageEn: '"Through intercessions of the Theotokos" in standard liturgy.',
    calamusDuctusAr: 'مستطيل ذو بوابة سفلية مفتوحة وقائمتين رأسيتين متوازيتين تعلوهما عارضة أفقية.',
    calamusDuctusEn: 'Shelter rectangle with bottom opening and dual parallel uprights.',
    audioFreq: 494,
  },
  {
    coptic: 'Ϫ',
    nameAr: 'جانجا (Janja)',
    nameEn: 'Janja',
    sound: 'جـ (معطشة فصحى)',
    ipa: '/dʒ/',
    demoticOrigin: '𓆓',
    gardinerCode: 'I10',
    gardinerDescAr: 'أفعى الكوبرا الملكية المصرية (أورايوس)',
    gardinerDescEn: 'Cobra serpent resting / sacred Uraeus',
    copticWord: 'Ϫⲱ',
    wordPronounceAr: 'جو (Jo)',
    wordPronounceEn: 'Jo',
    wordMeaningAr: 'يقول / يرتل المزمور',
    wordMeaningEn: 'To say / To recite / To chant',
    liturgicalUsageAr: '«Ϫⲱ ⲙ̀ⲙⲟⲥ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ» (قائلاً: الليلويا) عند ترتيل المزامير.',
    liturgicalUsageEn: '"Saying: Alleluia" during antiphonal Psalmody.',
    calamusDuctusAr: 'حركة انسيابية حلزونية ترفع رأس الكوبرا ثم تنعطف أفقياً في ذيل مقوس.',
    calamusDuctusEn: 'Fluid sinusoidal stroke raising the cobra hood into a sweeping tail.',
    audioFreq: 523,
  },
  {
    coptic: 'Ϭ',
    nameAr: 'تشيما (Chima)',
    nameEn: 'Chima',
    sound: 'تش',
    ipa: '/tʃ/',
    demoticOrigin: '𓈎',
    gardinerCode: 'V28',
    gardinerDescAr: 'عقدة الكتان الملتوية أو سنبلة القمح',
    gardinerDescEn: 'Twisted flax skein / ripe ear of grain',
    copticWord: 'Ϭⲟⲓⲥ',
    wordPronounceAr: 'تشويس (Pchois / Chois)',
    wordPronounceEn: 'Chois',
    wordMeaningAr: 'الرب / السيّد الممجّد',
    wordMeaningEn: 'The Lord / Sovereign Master',
    liturgicalUsageAr: '«Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ» (يا رب ارحم - كيرياليسون) المتكررة 41 مرة.',
    liturgicalUsageEn: '"O Lord have mercy" (Kyrie Eleison) repeated in Coptic hours.',
    calamusDuctusAr: 'عروة دائرية مغلقة تنبثق منها صاعدة عمودية مائلة بزاوية 60° متوجة بعقدة.',
    calamusDuctusEn: 'Closed loop anchor with upward diagonal ascender ending in a bulb.',
    audioFreq: 587,
  },
  {
    coptic: 'Ϯ',
    nameAr: 'تي (Ti)',
    nameEn: 'Ti',
    sound: 'تي (مقطع مزدوج)',
    ipa: '/ti/',
    demoticOrigin: '𓏙',
    gardinerCode: 'X8',
    gardinerDescAr: 'ذراع إنسانية ممدودة تقدم رغيف الخبز المستدير',
    gardinerDescEn: 'Outstretched arm extending circular sacrificial loaf',
    copticWord: 'Ϯⲙⲉⲑⲙⲏⲓ',
    wordPronounceAr: 'تي-ميثمي (Ti-methmii)',
    wordPronounceEn: 'Ti-methmii',
    wordMeaningAr: 'الحق / العدالة والبر الإلهي',
    wordMeaningEn: 'Truth / Righteousness and divine justice',
    liturgicalUsageAr: '«Ϯⲙⲉⲑⲙⲏⲓ ⲛ̀ⲧⲉ Ⲫϯ» (حق وعدل الله) في تسبحة البصخة المقدسة.',
    liturgicalUsageEn: '"The Truth and Righteousness of God" in Paschal praises.',
    calamusDuctusAr: 'هيئة الصليب القبطي التقليدي مع حلقة أو قوس جانبي يرمز لليد الواهبة.',
    calamusDuctusEn: 'Cruciform anchor combined with lateral side bow denoting divine offering.',
    audioFreq: 659,
  },
];

type InkStyleMode = 'gold' | 'cinnabar' | 'carbon';

export const AncientManuscriptHighResView: React.FC<Props> = ({
  isArabic,
  isLight,
  isContrast,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<ManuscriptHotspot>(MANUSCRIPT_HOTSPOTS[0]);
  const [modalData, setModalData] = useState<HiResImageModalData | null>(null);
  const [selectedDemotic, setSelectedDemotic] = useState<DemoticLetter>(DEMOTIC_LETTERS[0]);
  const [inkStyle, setInkStyle] = useState<InkStyleMode>('gold');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Acoustic Chime & Spoken Phonetic Audio Engine
  const handlePlayLetterAudio = (letter: DemoticLetter) => {
    setIsPlayingAudio(true);

    // 1. Synthesize resonant church chime / bell tone via Web Audio API
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = inkStyle === 'gold' ? 'sine' : inkStyle === 'cinnabar' ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(letter.audioFreq, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.95);
      }
    } catch {
      // AudioContext fallback
    }

    // 2. Pronounce through speech synthesis
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
        const speechText = isArabic
          ? `حرف ال${letter.nameAr.split(' ')[0]} القبطي، صوته ${letter.sound}، مثاله كلمة: ${letter.wordPronounceAr}، ومعناها: ${letter.wordMeaningAr}`
          : `Coptic letter ${letter.nameEn}, sound ${letter.sound}, example word ${letter.wordPronounceEn}, meaning ${letter.wordMeaningEn}`;

        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.lang = isArabic ? 'ar-EG' : 'en-US';
        utterance.rate = 0.92;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
      } catch {
        setTimeout(() => setIsPlayingAudio(false), 900);
      }
    } else {
      setTimeout(() => setIsPlayingAudio(false), 900);
    }
  };

  const handleOpenModal = () => {
    setModalData({
      imageUrl: manuscriptPhoto,
      titleAr: 'مخطوطة قبطية وإنجيلية أثرية على البردي والرق فائق الدقة',
      titleEn: 'Ancient Coptic Papyrus Gospel Codex (High-Resolution View)',
      subtitleAr: 'خط بحيري وصعيدي أونسيال أصيل مع حليات وتذهيب بالحبر الشنجرفي',
      subtitleEn: 'Bohairic & Sahidic Uncial Calligraphy with Gold Leaf Illuminations',
      descriptionAr:
        'مخطوطة بردي نادرة معروضة بمتحف المخطوطات الكنسية تبرز فن الخط القبطي القديم (Bohairic / Sahidic Uncial) بالحبر الكربوني الأسود وحبر الزنجفر الأحمر والأوراق المذهبة. تبدأ الصفحة بالحرف المذهب الكبير (Illuminated Initial) المحاط بزخارف صلبان الأرابيسك القبطية المتشابكة، وتوثق نصوص التسبيح والتسابيح الكنسية القديمة «الليلويا».',
      descriptionEn:
        'Museum-grade archival photography of an ancient Coptic codex on aged papyrus, featuring Bohairic and Sahidic uncial calligraphy in cinnabar red and carbon ink with elaborate gold-leaf illuminated drop caps and intricate margin knotwork.',
      locationAr: 'متحف المخطوطات القبطية بالبطريركية القديمة',
      locationEn: 'Patriarchal Coptic Manuscript Museum',
      dateOrEraAr: 'القرن الرابع - الخامس الميلادي (العصر الذهبي للمخطوطات)',
      dateOrEraEn: '4th–5th Century AD (Golden Era of Coptic Manuscripts)',
    });
  };

  // Dynamic ink styling for the calligraphic inspection
  const getInkTextStyle = () => {
    switch (inkStyle) {
      case 'carbon':
        return isLight
          ? 'text-stone-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
          : 'text-stone-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]';
      case 'cinnabar':
        return 'text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]';
      case 'gold':
      default:
        return 'text-amber-400 drop-shadow-[0_0_16px_rgba(251,191,36,0.8)]';
    }
  };

  return (
    <div
      className={`rounded-3xl border p-4 md:p-6 shadow-2xl overflow-hidden transition-all duration-300 ${
        isContrast
          ? 'bg-black border-amber-400 text-amber-300'
          : isLight
          ? 'bg-gradient-to-b from-[#fdfbf7] via-[#f7f0e2] to-[#ede0c5] border-amber-300 shadow-amber-950/15'
          : 'bg-gradient-to-b from-[#0c0d13] via-[#14121b] to-[#191410] border-amber-500/30 shadow-black/70'
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-4 border-b ${
          isLight ? 'border-amber-300/80' : 'border-amber-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
            }`}
          >
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-black text-sm md:text-base ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {isArabic
                ? 'مخطوطة الأناجيل والبرديات القبطية المذهبة (Ancient Coptic Codex 4K)'
                : 'Ancient Coptic Gospel Codex & Illuminated Papyrus (4K Macro View)'}
            </h3>
            <p className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              {isArabic
                ? 'وثيقة مخطوطة أصيلة توضح الخط القبطي الصعيدي والبحيري الباكر وتذهيب الحروف الاستهلالية'
                : 'Authentic papyrus leaf displaying uncial script, cinnabar ink rubrics & gold leaf illuminations'}
            </p>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{isArabic ? 'تكبير وفحص ألياف البردي' : 'Inspect 4K Papyrus'}</span>
        </button>
      </div>

      {/* Main Image Viewport with Interactive Hotspots */}
      <div className="relative w-full aspect-[16/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden mt-4 border border-amber-500/30 shadow-2xl bg-black select-none group">
        <img
          src={manuscriptPhoto}
          alt="Ancient Coptic Papyrus Codex"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.08]"
        />

        {/* Interactive Hotspot Markers */}
        {MANUSCRIPT_HOTSPOTS.map((spot) => {
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
                    isActive ? 'bg-amber-400' : 'bg-amber-500/50'
                  }`}
                />
                <span
                  className={`absolute w-6 h-6 rounded-full border-2 ${
                    isActive
                      ? 'border-amber-300 bg-amber-400/30'
                      : 'border-white/80 bg-black/40 group-hover/btn:border-amber-400'
                  }`}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 scale-125 ring-2 ring-white text-black'
                      : 'bg-white group-hover/btn:bg-amber-300'
                  }`}
                >
                  <Sparkles className="w-2 h-2 text-black" />
                </div>

                {/* Hotspot Floating Label */}
                <div
                  className={`absolute bottom-full mb-2 start-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[10px] font-black whitespace-nowrap shadow-xl border backdrop-blur-md pointer-events-none transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-black border-white opacity-100 scale-100'
                      : 'bg-black/85 text-amber-300 border-amber-500/40 opacity-0 group-hover/btn:opacity-100 scale-95'
                  }`}
                >
                  {isArabic ? spot.titleAr : spot.titleEn}
                </div>
              </div>
            </button>
          );
        })}

        {/* Floating Bottom Metadata Bar */}
        <div className="absolute bottom-3 start-3 end-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/40 text-white z-10">
          <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
            <span>{isArabic ? '🔤 الخط: أونسيال قبطي يوناني' : '🔤 Script: Greek-Coptic Uncial'}</span>
            <span>•</span>
            <span>{isArabic ? '🎨 الحبر: زنجفر أحمر وكربون أسود' : '🎨 Ink: Cinnabar Red & Carbon Black'}</span>
            <span>•</span>
            <span>{isArabic ? '📜 الخامة: بردي مصري ورق جلد عتيق' : '📜 Support: Egyptian Papyrus & Aged Vellum'}</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            ARCHIVAL-CODEX-RESOLUTION
          </span>
        </div>
      </div>

      {/* Active Hotspot Deep Inspection Drawer */}
      <div
        className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/60 border-amber-300 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-[#14121b] via-[#1a1410] to-[#120f18] border-amber-500/30 text-amber-100 shadow-xl'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                isLight
                  ? 'bg-amber-200 border-amber-400 text-amber-950'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              <Feather className="w-5 h-5" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {isArabic ? activeHotspot.categoryAr : activeHotspot.categoryEn}
                </span>
                <h4 className={`text-base font-black ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                  {isArabic ? activeHotspot.titleAr : activeHotspot.titleEn}
                </h4>
              </div>

              <p className={`text-xs md:text-sm mt-1.5 leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? activeHotspot.descAr : activeHotspot.descEn}
              </p>

              <div
                className={`mt-3 p-2.5 rounded-xl border text-[11px] font-medium flex items-center gap-2 ${
                  isLight
                    ? 'bg-amber-100/70 border-amber-300 text-amber-950'
                    : 'bg-black/40 border-amber-500/30 text-amber-200/90'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 text-amber-500" />
                <span>
                  <strong>{isArabic ? 'التحليل الأثري والتقني: ' : 'Archaeometrical Data: '}</strong>
                  {isArabic ? activeHotspot.technicalDetailsAr : activeHotspot.technicalDetailsEn}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-amber-400">
              {isArabic ? 'نقاط الفحص والتدقيق:' : 'Codex Focus Points:'}
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {MANUSCRIPT_HOTSPOTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveHotspot(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    s.id === activeHotspot.id
                      ? 'bg-amber-500 text-black shadow-md'
                      : isLight
                      ? 'bg-amber-100 text-slate-800 hover:bg-amber-200'
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

      {/* The 7 Demotic Letters of the Coptic Alphabet - Interactive Palaeography & Phonetics Studio */}
      <div
        className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
          isContrast
            ? 'bg-black border-amber-400 text-amber-300'
            : isLight
            ? 'bg-white/80 border-amber-300/80 text-slate-900 shadow-sm'
            : 'bg-slate-950/70 border-amber-500/25 text-slate-200 shadow-xl'
        }`}
      >
        {/* Sub-header with Title & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-amber-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs md:text-sm font-black text-amber-400">
                {isArabic
                  ? 'مختبر فقه الحروف الديموطيقية ونطقها الصوتي (الأبجدية القبطية المصرية)'
                  : 'Interactive Coptic-Demotic Palaeography & Phonetics Studio'}
              </h5>
              <p className="text-[11px] text-slate-400 font-medium">
                {isArabic
                  ? 'الـ 7 أحرف المحفوظة من الديموطيقية المصرية القديمة؛ انقر على أي حرف للاستماع لنطقه وفحص أصله الهيروغليفي'
                  : 'The 7 glyphs preserved from Ancient Egyptian Demotic; click any letter to listen & inspect roots'}
              </p>
            </div>
          </div>

          {/* Scriptorium Ink Simulator Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/30 border border-amber-500/20">
            <span className="text-[10px] font-bold text-amber-400/80 px-1.5 flex items-center gap-1">
              <Palette className="w-3 h-3 text-amber-400" />
              {isArabic ? 'الحبر:' : 'Ink:'}
            </span>
            <button
              onClick={() => setInkStyle('gold')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                inkStyle === 'gold'
                  ? 'bg-amber-400 text-black shadow-sm font-black'
                  : 'text-amber-300/70 hover:text-amber-200'
              }`}
            >
              {isArabic ? 'تذهيب 24K' : 'Gold Leaf'}
            </button>
            <button
              onClick={() => setInkStyle('cinnabar')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                inkStyle === 'cinnabar'
                  ? 'bg-red-500 text-white shadow-sm font-black'
                  : 'text-red-400/70 hover:text-red-300'
              }`}
            >
              {isArabic ? 'زنجفر قرمزي' : 'Cinnabar'}
            </button>
            <button
              onClick={() => setInkStyle('carbon')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                inkStyle === 'carbon'
                  ? 'bg-stone-700 text-stone-100 shadow-sm font-black'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {isArabic ? 'سناج كربوني' : 'Carbon'}
            </button>
          </div>
        </div>

        {/* 7 Demotic Letter Grid Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {DEMOTIC_LETTERS.map((item) => {
            const isSelected = selectedDemotic.coptic === item.coptic;
            return (
              <button
                key={item.coptic}
                onClick={() => {
                  setSelectedDemotic(item);
                  handlePlayLetterAudio(item);
                }}
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer relative group/item ${
                  isSelected
                    ? isLight
                      ? 'bg-gradient-to-b from-amber-100 to-amber-200/90 border-amber-500 shadow-lg ring-2 ring-amber-400/50'
                      : 'bg-gradient-to-b from-amber-500/25 to-purple-500/20 border-amber-400 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/60'
                    : isLight
                    ? 'bg-amber-50/70 border-amber-200 hover:border-amber-400 hover:bg-amber-100/50'
                    : 'bg-black/40 border-amber-500/20 hover:border-amber-400/60 hover:bg-slate-900/60'
                }`}
              >
                {/* Active check icon badge */}
                {isSelected && (
                  <div className="absolute top-1.5 end-1.5 text-amber-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}

                <span
                  className={`text-3xl font-serif font-black transition-transform duration-200 group-hover/item:scale-110 ${
                    isSelected ? getInkTextStyle() : 'text-amber-400'
                  }`}
                >
                  {item.coptic}
                </span>

                <span className={`text-xs font-black mt-1.5 ${isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                  {isArabic ? item.nameAr : item.nameEn}
                </span>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono font-bold">
                    {item.ipa}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold">({item.sound})</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-amber-500/90 mt-1 font-serif">
                  <span className="text-sm">{item.demoticOrigin}</span>
                  <span className="text-[9px] font-mono text-slate-400 font-bold">{item.gardinerCode}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Demotic Letter Deep Inspection & Audio Studio Drawer */}
        <div
          className={`mt-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
            isLight
              ? 'bg-gradient-to-r from-amber-50 via-white to-amber-100/70 border-amber-300'
              : 'bg-gradient-to-r from-slate-900 via-stone-900 to-black border-amber-500/30 shadow-2xl'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Monumental Glyph Visual Display */}
            <div className="md:col-span-3 flex flex-col items-center justify-center p-4 rounded-xl border border-amber-500/30 bg-black/40 text-center relative overflow-hidden">
              <span
                className={`text-6xl md:text-7xl font-serif font-black select-none transition-all duration-300 ${getInkTextStyle()}`}
              >
                {selectedDemotic.coptic}
              </span>
              <span className="text-xs font-mono font-bold text-amber-400 mt-2">
                COPTIC UNCIAL GLYPH
              </span>

              {/* Pronounce Button */}
              <button
                onClick={() => handlePlayLetterAudio(selectedDemotic)}
                className={`mt-3 w-full py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-black transition-all cursor-pointer shadow-md ${
                  isPlayingAudio
                    ? 'bg-amber-400 text-black ring-2 ring-white scale-102'
                    : 'bg-amber-500 hover:bg-amber-400 text-black hover:scale-102'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-bounce" />
                    <span>{isArabic ? 'جاري النطق الصوتي...' : 'Playing Audio...'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isArabic ? 'استمع للنطق الصوتي' : 'Listen Pronunciation'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Linguistic, Etymological & Liturgical Analysis */}
            <div className="md:col-span-9 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h6 className={`text-base font-black ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                    {isArabic
                      ? `حرف ${selectedDemotic.nameAr} - الأصل والتأصيل اللغوي`
                      : `Letter ${selectedDemotic.nameEn} - Linguistic Etymology`}
                  </h6>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-black bg-amber-500/20 border border-amber-500/40 text-amber-400">
                    IPA {selectedDemotic.ipa}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-amber-400 flex items-center gap-2 font-bold">
                  <span>{isArabic ? 'الرمز الهيروغليفي:' : 'Hieroglyph:'}</span>
                  <span className="text-base font-serif px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/30">
                    {selectedDemotic.demoticOrigin}
                  </span>
                  <span>({selectedDemotic.gardinerCode})</span>
                </div>
              </div>

              {/* Etymology Description */}
              <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                <strong>{isArabic ? 'الأصل المصري القديم: ' : 'Ancient Egyptian Root: '}</strong>
                {isArabic ? selectedDemotic.gardinerDescAr : selectedDemotic.gardinerDescEn}.{' '}
                {isArabic
                  ? 'لم تجد الإسكندرية والفيوم مقابلاً لهذا الصوت في الأبجدية الإغريقية اليونانية المكونة من 24 حرفاً، فاستعارت الكنيسة القبطية ونساخها هذا الحرف من الخط الديموطيقي الشعبي المصري لتدوين أسفار الكتاب المقدس بدقة.'
                  : 'Since Greek lacked a direct phonemic equivalent, early Alexandrian and monastic scribes imported this Demotic glyph to faithfully represent native Egyptian speech in Holy Scripture.'}
              </p>

              {/* Curricular Word Example Box */}
              <div
                className={`p-3 rounded-xl border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs ${
                  isLight
                    ? 'bg-amber-100/60 border-amber-300 text-amber-950'
                    : 'bg-black/50 border-amber-500/20 text-slate-200'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">
                    {isArabic ? 'مثال الكلمة الكنسية المقررة:' : 'Curricular Liturgical Example:'}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-serif font-black text-amber-400">
                      {selectedDemotic.copticWord}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      ({isArabic ? selectedDemotic.wordPronounceAr : selectedDemotic.wordPronounceEn})
                    </span>
                    <span className="text-xs font-black text-emerald-400">
                      = {isArabic ? selectedDemotic.wordMeaningAr : selectedDemotic.wordMeaningEn}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    {isArabic ? selectedDemotic.liturgicalUsageAr : selectedDemotic.liturgicalUsageEn}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">
                    {isArabic ? 'تقنية قلم البوص ومسار الخط (Ductus):' : 'Reed Pen Ductus & Calligraphy Angle:'}
                  </span>
                  <p className="text-[11px] leading-relaxed mt-1 font-medium">
                    {isArabic ? selectedDemotic.calamusDuctusAr : selectedDemotic.calamusDuctusEn}
                  </p>
                </div>
              </div>
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
