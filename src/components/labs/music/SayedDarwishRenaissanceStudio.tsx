import React, { useState, useMemo, useRef } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Play,
  Volume2,
  Users,
  Layers,
  Flag,
} from 'lucide-react';
import darwishPhoto from '../../../assets/music/sayed_darwish_renaissance_1920.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface DarwishHotspot {
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

export const DARWISH_HOTSPOTS: DarwishHotspot[] = [
  {
    id: 'operatic_choral_counterpoint',
    xPct: 35.0,
    yPct: 58.0,
    titleAr: 'الكورال البوليفوني والمسرح الغنائي (Theatrical Polyphony)',
    titleEn: 'Operatic Polyphony & Choral Voice-Leading Revolution',
    categoryAr: 'التوزيع الهارموني والمسرح الموسيقي',
    categoryEn: 'Harmonic Counterpoint & Musical Theater',
    descAr:
      'أحدث الشيخ سيد درويش (فنان الشعب) ثورة حاسمة في تاريخ الموسيقى العربية بنقله الغناء من الأداء الفردي المونوفوني التكراري إلى الغناء الجماعي المسرحي التعبيري متعدد الأصوات (Polyphony). أدخل درويش في أوبريتاته الشهيرة ("العشرة الطيبة"، "شهرزاد"، "البروكة") توزيعاً كورالياً رباعياً (سوبرانو، آلتو، تينور، باص) يعبر عن صراع الشخصيات وتطور الأحداث الدرامية ببراعة غير مسبوقة.',
    descEn:
      'Sheikh Sayed Darwish radically revolutionized Arab music by shifting it from monophonic solo ornamentation into expressive theatrical polyphony. In his historic operettas (*Al-Ashrah Al-Tayyibah*, *Shahrazad*, *Al-Barouka*), he integrated four-part choral voice-leading (SATB: Soprano, Alto, Tenor, Bass) that directly embodied dramatic conflict, psychological motivation, and theatrical narrative.',
    scientificInsightAr:
      'طوع درويش القوالب الغربية (الأوبرا والكونتربوانت) لخدمة النغم الشرقي؛ فلم يطمس هوية المقامات بل بنى توافقات هارمونية تبرز ركوز المقام وسيره اللحني بأسلوب علمي رصين.',
    scientificInsightEn:
      'Darwish subordinated Western operatic counterpoint to Eastern modal ethos: rather than flattening quarter-tones, he harmonized maqam tonics and cadential movements with scholarly finesse.',
  },
  {
    id: 'liberation_from_monophonic_taqsim',
    xPct: 15.0,
    yPct: 45.0,
    titleAr: 'تحرير التعبير الموسيقي من التطريب العقيم (Dramatic Expression)',
    titleEn: 'Liberation of Arab Composition from Idle Ornamentation',
    categoryAr: 'فلسفة الموسيقى والنقد الدرامي',
    categoryEn: 'Music Philosophy & Theatrical Reform',
    descAr:
      'حطم سيد درويش قيود "التطريب الخالص" والآهات الطويلة التي كانت تسود التخت العثماني الخديوي، مؤكداً أن الموسيقى لغة تعبيرية إنسانية ترتبط بالمعنى الحقيقي للكلمة. فإذا كانت الكلمة تعبر عن غضب أو استنهاض همم، جاء اللحن قاطعاً مقتضباً عاصفاً، وإذا كانت تعبر عن حزن أو تضرع، جاء اللحن رقيقاً هامساً يفيض بالصدق.',
    descEn:
      'Darwish dismantled the ornamental vocal acrobatics that dominated Ottoman court salons, asserting that music must serve expressive dramatic veracity. Melody was intimately contoured to dramatic text: militant indignation produced sharp syncopations, while plebeian grief evoked tender, unvarnished modal declamation.',
    scientificInsightAr:
      'أدخل درويش مبدأ النبر الدرامي (Prosodic Accentuation)، حيث تتطابق القمم اللحنية والنبرات الإيقاعية بدقة تامة مع مخارج الحروف وقواعد النحو العربي ونبرات اللهجة العامية.',
    scientificInsightEn:
      'Darwish established prosodic melodic accentuation, ensuring musical dynamic peaks and syncopated metric accents strictly paralleled the phonetics of Egyptian colloquial speech.',
  },
  {
    id: 'biladi_biladi_national_anthem',
    xPct: 48.0,
    yPct: 62.0,
    titleAr: 'نشيد بلادي بلادي ونغم الراست الوطني (National Anthem Score)',
    titleEn: 'The Immortal Score of "Biladi, Biladi" (National Anthem)',
    categoryAr: 'الأناشيد القومية والموسيقى الوطنية',
    categoryEn: 'National Anthems & Patriotic Mobilization',
    descAr:
      'لحن سيد درويش نشيد "بلادي بلادي لك حبي وفؤادي" مستلهماً كلمات الزعيم الوطني مصطفى كامل أثناء اشتعال ثورة 1919. واختار درويش بحسه العبقري مقام "الراست" رمز العزة والفروسية على إيقاع مارش مسيري ملتهب، ليتوحد خلفه الشعب المصري بأسره، وليصبح النشيد الوطني الخالد لجمهورية مصر العربية حتى يومنا هذا.',
    descEn:
      'During the volcanic eruption of the 1919 Revolution, Sayed Darwish composed the immortal score of *Biladi, Biladi*, inspired by nationalist orator Mustafa Kamel’s patriotic addresses. Scoring it in Maqam Rast (symbol of sovereign majesty) over a resolute march cadence, it galvanized millions and was ultimately adopted as Egypt’s official National Anthem.',
    scientificInsightAr:
      'يبدأ النشيد بقفزة رابعة صاعدة (Do - Fa ثم Sol)، وهي نفس الوثبة الهارمونية التحفيزية المستخدمة في أشهر الأناشيد الثورية العالمية (كالنشيد الوطني الفرنسي المارسييز).',
    scientificInsightEn:
      'The anthem opens with an ascending fourth leap followed by the dominant Sol, an acoustic motivational contour found in landmark revolutionary anthems worldwide (e.g. *La Marseillaise*).',
  },
  {
    id: 'folkloric_artisan_working_songs',
    xPct: 78.0,
    yPct: 48.0,
    titleAr: 'أغاني طوائف الحرف والعمال الكادحين (Artisan Labor Hymns)',
    titleEn: 'Working-Class Guild Hymns & Vernacular Folkloric Songs',
    categoryAr: 'الموسيقى الشعبية والعدالة الاجتماعية',
    categoryEn: 'Ethnomusicology & Labor Class Anthems',
    descAr:
      'انحاز سيد درويش للفقراء والكادحين في أزقة الإسكندرية والقاهرة، فخلد طوائف الحرف في ألحان عبقرية أصبحت وثائق اجتماعية حية: أغنية الشيالين ("شد الحزام على وسطك غيره ما يفيدك")، البنائين ("هز الهلال يا سيد")، السقايين، الجرسونات، صناع القلل ("مليحة قوي القلل القناوي"). جعل درويش من أصوات المطارق ومعاول البناء إيقاعات موسيقية أخاذة.',
    descEn:
      'Darwish embedded himself among Alexandria’s dockers and Cairo’s laborers, composing an immortal tapestry of artisanal labor anthems: the porters’ chant *Shadd Al-Hezam* ("Tighten your belt"), the builders’ hymn, water-carriers, and potter artisans *Al-Qullal Al-Qannawi*. He converted the rhythm of picks, shovels, and trowels into breathtaking symphonic pulses.',
    scientificInsightAr:
      'استخدم درويش الإيقاعات الشعبية التراثية كالمقسوم والمصمودي الصغير ودمجها مع النقلات المقامية السريعة (المحيرة والجهاركاه) لتعكس حركة أجساد العمال أثناء العمل الشاق.',
    scientificInsightEn:
      'Darwish fused indigenous folk polyrhythms (Masmudi Saghir, Maqsum) with rapid modal modulations, synchronizing polyphonic meter with physical labor ergonomics.',
  },
  {
    id: '1919_revolution_musical_mobilization',
    xPct: 78.0,
    yPct: 85.0,
    titleAr: 'المقاومة الموسيقية لثورة 1919 ورمزية الهلال والصليب',
    titleEn: '1919 Revolutionary Underground Mobilization & National Unity',
    categoryAr: 'المقاومة الوطنية والتاريخ السياسي',
    categoryEn: 'Revolutionary Mobilization & Political Resistance',
    descAr:
      'قاد سيد درويش المقاومة الشعبية ضد الاحتلال البريطاني بسلاحه الموسيقي الفتاك؛ فلحن "قوم يا مصري مصر دايماً بتناديك" و"أهو ده اللي صار" و"سالمة يا سلامة". وعندما نفى الإنجليز الزعيم سعد زغلول وحظروا ذكر اسمه، تحايل درويش بعبقريته ولحن أغنية "يا بلح زغلول" التي رددتها الملايين في شوارع القاهرة كشفرة ثورية حارقة أربكت سلطات الاحتلال.',
    descEn:
      'Darwish orchestrated the sonic resistance of the 1919 Revolution against British occupation, composing *Oum Ya Masri* ("Rise, O Egyptian!"), *Aho Da Elli Sar*, and *Salma Ya Salama*. When British colonial authorities exiled Saad Zaghloul and outlawed speaking his name, Darwish composed the allegorical anthem *Ya Balah Zaghloul*, sung by millions as revolutionary cipher.',
    scientificInsightAr:
      'عززت موسيقى درويش الوحدة الوطنية العضوية بين المسلمين والأقباط؛ فصاغ ألحاناً تُبرز الهلال مع الصليب في نسيج نغمي موحد ينبذ التعصب ويعلي راية الوطن المستقل.',
    scientificInsightEn:
      'Darwish’s scores fused Coptic liturgical hymn meters with traditional Islamic Sufi inshad cadences, cementing Egyptian Muslim-Coptic solidarity against colonial divide-and-rule.',
  },
];

export const SayedDarwishRenaissanceStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<DarwishHotspot>(DARWISH_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'polyphonic_choir' | 'artisan_anthems'
  const [engineMode, setEngineMode] = useState<'polyphonic_choir' | 'artisan_anthems'>('polyphonic_choir');

  // Selected Song Preset
  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(0);

  // Vocal Parts Active States (SATB)
  const [sopranoActive, setSopranoActive] = useState<boolean>(true);
  const [altoActive, setAltoActive] = useState<boolean>(true);
  const [tenorActive, setTenorActive] = useState<boolean>(true);
  const [bassActive, setBassActive] = useState<boolean>(true);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Songs Catalog
  const SONGS = useMemo(
    () => [
      {
        titleAr: 'نشيد بلادي بلادي (النشيد الوطني المصري 1919)',
        titleEn: 'Biladi, Biladi (Egyptian National Anthem 1919)',
        maqam: 'Rast (راست على الدو)',
        meter: 'March 4/4 (مارش وطني مسيري)',
        chordFrequencies: { soprano: 523.25, alto: 392.0, tenor: 329.63, bass: 261.63 }, // C5, G4, E4, C4 (Rast Triad)
        lyricsAr: 'بلادي بلادي بلادي • لكِ حبي وفؤادي • مصر يا أم البلاد • أنتِ غايتي والمراد',
        lyricsEn: 'My homeland, my homeland • To thee my love and my heart • Egypt, mother of all lands • Thou art my aim and quest',
        counterpointStyleAr: 'بوليفونية هوموفونية مارشية تبرز نبرات العزة والوثبة الصاعدة.',
        counterpointStyleEn: 'Homophonic martial counterpoint reinforcing patriotic dignity and forward momentum.',
      },
      {
        titleAr: 'قوم يا مصري مصر دايماً بتناديك (1919)',
        titleEn: 'Oum Ya Masri (Rise, O Egyptian! 1919)',
        maqam: 'Bayati (بياتي على الري)',
        meter: 'Wahda Kabira (وحدة كبيرة)',
        chordFrequencies: { soprano: 587.33, alto: 440.0, tenor: 349.23, bass: 293.66 }, // D5, A4, F4, D4 (Bayati Triad)
        lyricsAr: 'قوم يا مصري مصر دايماً بتناديك • خد بنصري نصري دين واجب عليك • شوف جدودك في القبور بتبص ليك',
        lyricsEn: 'Rise, O Egyptian, Egypt calls to thee forever • Aid my victory, for my triumph is thy sacred duty',
        counterpointStyleAr: 'كول-آند-ريسبونس (نداء وجواب كورالي درامي مشحون بالاستنهاض).',
        counterpointStyleEn: 'Dramatic call-and-response choral dialogue evoking solemn national duty.',
      },
      {
        titleAr: 'شد الحزام على وسطك غيره ما يفيدك (الشيالين)',
        titleEn: 'Shadd Al-Hezam (Porters’ Labor Hymn)',
        maqam: 'Hijaz (حجاز على الري)',
        meter: 'Masmudi Saghir (مصمودي صغير)',
        chordFrequencies: { soprano: 587.33, alto: 466.16, tenor: 369.99, bass: 293.66 }, // D5, Bb4, F#4, D4 (Hijaz Triad)
        lyricsAr: 'شد الحزام على وسطك غيره ما يفيدك • لابد عن يوم والفرج يجي لك • قصر ديل يا زقزوق',
        lyricsEn: 'Tighten the belt around thy waist, naught else avails • Deliverance will surely dawn upon thee',
        counterpointStyleAr: 'إيقاع عضلي متناوب يجسد مجهود الحمل ورفع الأثقال بتوافقات قاطعة.',
        counterpointStyleEn: 'Ergonomic labor counterpoint reflecting the cadence of lifting heavy dock cargo.',
      },
    ],
    []
  );

  const activeSong = SONGS[selectedSongIndex];

  // Synthesize Choral Chord
  const playChoralChord = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const activeVoices = [
        { active: sopranoActive, freq: activeSong.chordFrequencies.soprano, gainVal: 0.25 },
        { active: altoActive, freq: activeSong.chordFrequencies.alto, gainVal: 0.25 },
        { active: tenorActive, freq: activeSong.chordFrequencies.tenor, gainVal: 0.25 },
        { active: bassActive, freq: activeSong.chordFrequencies.bass, gainVal: 0.35 },
      ].filter((v) => v.active);

      if (activeVoices.length === 0) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.08);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);
      masterGain.connect(ctx.destination);

      activeVoices.forEach((v) => {
        const osc = ctx.createOscillator();
        const vGain = ctx.createGain();

        // Warm vowel vocal imitation using triangle and soft filtering
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(v.freq, ctx.currentTime);

        vGain.gain.value = v.gainVal;
        osc.connect(vGain);
        vGain.connect(masterGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2.05);
      });
    } catch {
      // Audio fallback gracefully handled
    }
  };

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: darwishPhoto,
      titleAr: 'سيد درويش وثورة الموسيقى الوطنية — 1920 م',
      titleEn: 'Sayed Darwish & Modern Egyptian Musical Renaissance — c. 1920 Archival Plate',
      subtitleAr: 'نوتات "بلادي بلادي" الأصلية وعود الإسكندرية الموزاييك وجراموفون ثورة 1919',
      subtitleEn: 'Original "Biladi, Biladi" Score, Mosaic Alexandrian Oud & 1919 Gramophone',
      descriptionAr:
        'لوحة توثيقية تاريخية نادرة تجسد عبقرية فنان الشعب الشيخ سيد درويش (1892 - 1923) في أوج ثورة 1919 بمصر. تجمع اللوحة بين النوتة الموسيقية المخطوطة بيده لنشيد "بلادي بلادي" وأوبريت "العشرة الطيبة"، وعوده الإسكندراني المرصع بالصدف والعاج، وجراموفون الأسطوانات الشمعية 78 لفة، وشريط المقاومة الوطنية "تحيا مصر 1919".',
      descriptionEn:
        'A historic commemorative archival masterplate celebrating the genius of "Artist of the People" Sheikh Sayed Darwish (1892–1923) during Egypt’s 1919 Revolution. Features original manuscript scores for "Biladi, Biladi" and "Al-Ashrah Al-Tayyibah", a mother-of-pearl Alexandrian Oud, a brass-horned shellac 78 RPM gramophone, and the 1919 resistance ribbon.',
      locationAr: 'القاهرة والإسكندرية (مقتنيات متحف دار الأوبرا المصرية والمكتبة القومية)',
      locationEn: 'Cairo & Alexandria (Collections in Cairo Opera House Museum & Egyptian National Library)',
      dateOrEraAr: 'حوالي 1919 - 1920 م (حقبة ثورة 1919 ونهضة المسرح الغنائي المصري)',
      dateOrEraEn: 'circa 1919–1920 CE (Era of the 1919 Revolution & Egyptian Theatrical Renaissance)',
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
            <Flag className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                1920 CE • Cairo & Alexandria
              </span>
              <span className="text-xs font-mono text-slate-400">Father of Modern Egyptian Music</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'سيد درويش ونهضة الموسيقى المصرية 4K' : 'Sayed Darwish: Egyptian Musical Renaissance 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('polyphonic_choir')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'polyphonic_choir'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الكورال الرباعي والتوزيع' : 'SATB Choral Counterpoint'}
          </button>
          <button
            onClick={() => setEngineMode('artisan_anthems')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'artisan_anthems'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'أغاني طوائف الحرف والمقاومة' : 'Guild & Resistance Anthems'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={darwishPhoto}
          alt="Sayed Darwish Egyptian Musical Renaissance 1920"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {DARWISH_HOTSPOTS.map((h, idx) => {
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
          <span>{isArabic ? 'مخطوطات أصلية 1919 - 1920 م' : 'Original 1919–1920 Scores'}</span>
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
              {isArabic ? 'التحليل الموسيقي والدرامي: ' : 'Musical & Dramatic Analysis: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'polyphonic_choir' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'محاكي التوزيع الكورالي الرباعي لسيد درويش (SATB Voice-Leading)' : 'Sayed Darwish SATB Choral Polyphony & Harmony Synthesizer'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">{activeSong.maqam}</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
                {activeSong.meter}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Lyrics & Score Display */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-center space-y-1">
                <div className="text-sm font-bold text-amber-300 font-serif">
                  {isArabic ? activeSong.lyricsAr : activeSong.lyricsEn}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {isArabic ? activeSong.counterpointStyleAr : activeSong.counterpointStyleEn}
                </div>
              </div>

              {/* Vector SVG Musical Staff & Voice-Leading Score */}
              <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                <svg viewBox="0 0 320 90" className="w-full h-auto overflow-visible select-none">
                  {/* Staff Lines */}
                  {[20, 32, 44, 56, 68].map((y, idx) => (
                    <line key={idx} x1="10" y1={y} x2="310" y2={y} stroke="#475569" strokeWidth="1" />
                  ))}
                  {/* Treble Clef indication line */}
                  <line x1="25" y1="15" x2="25" y2="73" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="32" y="48" fill="#e2e8f0" fontSize="18" fontFamily="serif">𝄞</text>

                  {/* Soprano Voice Contour */}
                  {sopranoActive && (
                    <path
                      d="M 60 26 Q 100 18 140 22 T 220 18 T 300 24"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="2.5"
                    />
                  )}
                  {/* Alto Voice Contour */}
                  {altoActive && (
                    <path
                      d="M 60 38 Q 100 44 140 36 T 220 40 T 300 36"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                  )}
                  {/* Tenor Voice Contour */}
                  {tenorActive && (
                    <path
                      d="M 60 52 Q 100 48 140 56 T 220 50 T 300 54"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />
                  )}
                  {/* Bass Voice Contour */}
                  {bassActive && (
                    <path
                      d="M 60 66 Q 100 68 140 64 T 220 70 T 300 66"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Legend Labels */}
                  <text x="250" y="14" fill="#f43f5e" fontSize="7" fontFamily="monospace">S</text>
                  <text x="265" y="14" fill="#f59e0b" fontSize="7" fontFamily="monospace">A</text>
                  <text x="280" y="14" fill="#0284c7" fontSize="7" fontFamily="monospace">T</text>
                  <text x="295" y="14" fill="#10b981" fontSize="7" fontFamily="monospace">B</text>
                </svg>
              </div>

              {/* SATB 4 Voice Tracks Toggles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setSopranoActive(!sopranoActive)}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    sopranoActive
                      ? 'bg-rose-950/50 border-rose-500 text-rose-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="text-xs font-bold">Soprano (سوبرانو)</div>
                  <div className="text-[10px] font-mono mt-0.5">{activeSong.chordFrequencies.soprano} Hz</div>
                </button>
                <button
                  onClick={() => setAltoActive(!altoActive)}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    altoActive
                      ? 'bg-amber-950/50 border-amber-500 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="text-xs font-bold">Alto (آلتو)</div>
                  <div className="text-[10px] font-mono mt-0.5">{activeSong.chordFrequencies.alto} Hz</div>
                </button>
                <button
                  onClick={() => setTenorActive(!tenorActive)}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    tenorActive
                      ? 'bg-sky-950/50 border-sky-500 text-sky-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="text-xs font-bold">Tenor (تينور)</div>
                  <div className="text-[10px] font-mono mt-0.5">{activeSong.chordFrequencies.tenor} Hz</div>
                </button>
                <button
                  onClick={() => setBassActive(!bassActive)}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    bassActive
                      ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="text-xs font-bold">Bass (باص)</div>
                  <div className="text-[10px] font-mono mt-0.5">{activeSong.chordFrequencies.bass} Hz</div>
                </button>
              </div>

              {/* Sound Play Button */}
              <button
                onClick={playChoralChord}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/30 transition-all cursor-pointer min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <Volume2 className="w-4 h-4" />
                <span>{isArabic ? 'عزف التوافق الكورالي للأصوات المفعلة (Play SATB Chord)' : 'Play SATB Active Vocal Blend'}</span>
              </button>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                  {isArabic ? 'اختر الأوبريت أو النشيد الكورالي لسيد درويش' : 'Select Sayed Darwish Master Composition'}
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {SONGS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSongIndex(idx)}
                      className={`px-3 py-2 rounded-lg border text-left text-xs font-mono transition-all flex flex-col gap-0.5 cursor-pointer ${
                        selectedSongIndex === idx
                          ? 'bg-amber-600/30 border-amber-400 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-sans font-medium text-amber-300">
                        {isArabic ? s.titleAr : s.titleEn}
                      </span>
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>{s.maqam}</span>
                        <span>{s.meter}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs leading-relaxed text-slate-400">
                <strong className="text-amber-400 font-semibold block mb-1">
                  {isArabic ? 'الابتكار الهارموني لسيد درويش:' : 'Darwish Harmonic Innovation:'}
                </strong>
                {isArabic
                  ? 'جمع سيد درويش بين طهارة النغم الشرقي (المقام الأصيل) وقوة التوزيع البوليفوني الأوروبي، فاستعاض عن مصاحبة الآلات المتطابقة بنسيج نغمي كورالي يحمل وظائف درامية حية.'
                  : 'Darwish harmonized pure Eastern modal melodies with dynamic Western choral voice-leading, replacing monophonic instrumental doubling with vivid theatrical counterpoint.'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: Guild Hymns & Revolutionary Anthems Matrix */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'مصفوفة أناشيد طوائف الحرف والمقاومة الشعبية لسيد درويش' : 'Darwish Labor Guilds & Revolutionary Resistance Matrix'}
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              Alexandria & Cairo Artisans Heritage
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                titleAr: 'طائفة البنائين (هز الهلال يا سيد)',
                titleEn: 'Builders’ Guild (Hezz El-Helal)',
                maqam: 'Maqam Bayati',
                meter: 'Masmudi Saghir (مصمودي صغير)',
                descAr: 'تحاكي نغمات المطارق ورفع الطوب والمونة في تناغم ملحمي يزرع الأمل.',
                descEn: 'Mimics the rhythmic striking of hammers and bricklaying in epic solidarity.',
              },
              {
                titleAr: 'طائفة الشيالين (شد الحزام)',
                titleEn: 'Porters’ Guild (Shadd El-Hezam)',
                maqam: 'Maqam Hijaz',
                meter: 'Wahda Wa Nisf (وحدة ونصف)',
                descAr: 'تجسد معاناة حمّالي الموانئ وباعة اليومية بكرامة وعزة وعزم لا يلين.',
                descEn: 'Depicts dock porters enduring grueling daily shifts with unwavering dignity.',
              },
              {
                titleAr: 'طائفة صناع القلل (مليحة قوي القلل)',
                titleEn: 'Potters’ Guild (Al-Qullal Al-Qannawi)',
                maqam: 'Maqam Rast',
                meter: 'Bamb (بامب خفيف)',
                descAr: 'لحن بهيج خفيف يحتفي بالحرف اليدوية النيلية وعذوبة ماء القناوي الفخاري.',
                descEn: 'A joyful vernacular rhythm celebrating Nile clay potters and artisan craftsmanship.',
              },
              {
                titleAr: 'أغنية المقاومة (سالمة يا سلامة)',
                titleEn: 'Return of Exiles (Salma Ya Salama)',
                maqam: 'Maqam Nahawand',
                meter: 'Ayoub (أيوب مسيري)',
                descAr: 'رمزت إلى عودة المنفيين والحرية من نير الاحتلال البريطاني، غنتها شعوب العالم.',
                descEn: 'Symbolized the return of political exiles from colonial banishment, sung globally.',
              },
              {
                titleAr: 'الشفرة الثورية (يا بلح زغلول)',
                titleEn: 'Revolutionary Cipher (Ya Balah Zaghloul)',
                maqam: 'Maqam Hijazkar',
                meter: 'Malfuf (ملفوف سريع)',
                descAr: 'رمز ثوري مشفر لاسم سعد زغلول بعد حظر الإنجليز النطق باسمه عام 1919.',
                descEn: 'An ingenious undercover anthem encoding Saad Zaghloul’s name after colonial bans.',
              },
              {
                titleAr: 'أغنية الحساب والوعي (أهو ده اللي صار)',
                titleEn: 'Political Reckoning (Aho Da Elli Sar)',
                maqam: 'Maqam Kurd / Bayati',
                meter: 'Sama’i Thaqil (سماعي ثقيل)',
                descAr: 'مساءلة وجدانية للشعب والوطن: تلوم السلبية وتحث على الوعي الثوري ومحاسبة النفس.',
                descEn: 'A soul-stirring civic critique challenging public apathy and demanding national vigilance.',
              },
            ].map((g, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-amber-300">{isArabic ? g.titleAr : g.titleEn}</h4>
                  <span className="text-[10px] font-mono text-amber-400/80">{g.maqam}</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-slate-900/80 px-2 py-1 rounded border border-emerald-900/40">
                  {g.meter}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {isArabic ? g.descAr : g.descEn}
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
