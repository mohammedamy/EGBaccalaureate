import React, { useState, useMemo, useRef } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Play,
  Volume2,
  Compass,
  CircleDot,
  Layers,
} from 'lucide-react';
import urmawiPhoto from '../../../assets/music/urmawi_kitab_al_adwar_1252.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface UrmawiHotspot {
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

export const URMAWI_HOTSPOTS: UrmawiHotspot[] = [
  {
    id: 'seventeen_tone_scale_system',
    xPct: 68.0,
    yPct: 45.0,
    titleAr: 'نظام السلم ذي الـ 17 نغمة في الديوان (17-Tone Scale)',
    titleEn: 'The 17-Tone Pythagorean Scale of the Octave',
    categoryAr: 'نظريات السلالم والفيزياء الصوتية',
    categoryEn: 'Scale Theory & Octave Discretization',
    descAr:
      'قسّم صفي الدين الأرموي في كتابه "الأدوار" ديوان الصوت (الأوكتاف) إلى 17 درجة صوتية منفصلة ومحسوبة بدقة فيثاغورية مطلقة؛ حيث يتكون كل طن كامل (بعد 9:8) من بقيتين (2 Limmas) وفضلة واحدة (1 Comma). هذا النظام العبقري مكّن الموسيقيين من تمثيل كافة أدق الفروق الدقيقة للمقامات الشرقية دون أي تشويه أو تداخل في النغمات.',
    descEn:
      'Safi al-Din al-Urmawi divided the octave into 17 discrete Pythagorean degrees in his landmark *Kitab al-Adwar*. Each whole tone (9:8) is partitioned into two Limmas (90.2 cents) and one Pythagorean Comma (23.5 cents). This 17-tone scale provided a rigorous mathematical framework for all microtonal inflections in Near Eastern modal traditions.',
    scientificInsightAr:
      'يتطابق تقسيم الـ 17 نغمة مع المعادلة الرياضية: الأوكتاف = 5 أطنان كاملة + بقيتان = 10 بقايا + 5 فضلات + 2 بقية = 12 بقية (L) + 5 فضلات (C) = 17 صوتاً بنسبة دقة تفوق السلم الغربي المتساوي.',
    scientificInsightEn:
      'The 17-tone division satisfies: 1 Octave = 5T + 2L = 12 Limmas (L ~ 90.2 cents) + 5 Commas (C ~ 23.5 cents) = 1200 cents, yielding pure untempered modal intervals.',
  },
  {
    id: 'dairat_al_adwar_circular_cycles',
    xPct: 68.0,
    yPct: 35.0,
    titleAr: 'دائرة الأدوار الهندسية المذهبة (Dā’irat al-Adwār)',
    titleEn: 'Circular Dial of Musical Cycles (Dā’irat al-Adwār)',
    categoryAr: 'الهندسة الرياضية ونظرية المقامات',
    categoryEn: 'Geometric Diagramming & Modal Generation',
    descAr:
      'تُعد دائرة الأدوار أشهر دياجرام بياني في المخطوطات الموسيقية الإسلامية؛ رسمها الأرموي بماء الذهب وحبر الشنجرف الأحمر لتمثيل دورات النغمات هندسياً كما تُمثل الأبراج في الفلك. استخرج الأرموي من هذه الدائرة 12 دوراً رئيسياً (الشذوذ الاثنا عشر) و6 أدوار ثانوية (الآوازات)، وهي أسلاف المقامات الكبرى كالعشاق والنوى والبوسليك والراست.',
    descEn:
      'The Circular Dial of Cycles is the most celebrated graphic model in medieval Islamic musicology, rendered in gold leaf and cinnabar ink to map modal cycles geometrically akin to astrological spheres. From this dial, Urmawi derived the 12 primary Shudud (classical modes) and 6 Awazat (secondary modes), including Ushshaq, Nawa, and Rast.',
    scientificInsightAr:
      'تعتمد الدائرة على مبدأ التحويل الدوري المستمر (Cyclic Permutation)، حيث يمكن البدء من أي نغمة على محيط الدائرة لتوليد مقام جديد يحافظ على العلاقات الداخلية للنسب.',
    scientificInsightEn:
      'The circular model utilizes cyclic permutations: starting on any concentric perimeter node generates an authentic transpose while preserving intrinsic internal harmonic ratios.',
  },
  {
    id: 'abjad_alphanumeric_notation',
    xPct: 68.0,
    yPct: 62.0,
    titleAr: 'التدوين الموسيقي الأبجدي والإيقاعي (Abjad Notation)',
    titleEn: 'Abjad Pitch Notation & Rhythmic Meter Tablature',
    categoryAr: 'علم التدوين الموسيقي التاريخي',
    categoryEn: 'Historical Musical Notation & Solfège',
    descAr:
      'اخترع الأرموي أول نظام تدوين موسيقي مكتوب متكامل في الشرق؛ استخدم فيه حروف الأبجدية العربية (أ، ب، ج، د، هـ، و، ز، ح، ط، ي، يا، يب، يج، يد، يه، يو، يز) لتدوين الدرجات الـ 17 للديوان، ووضع تحت كل حرف أرقاماً تدل على زمن النغمة وقيمتها الإيقاعية، مما مكن الأجيال من قراءة وعزف مقطوعات القرن الثالث عشر كما دُوّنت بدقة.',
    descEn:
      'Al-Urmawi pioneered the earliest comprehensive musical notation in the Islamic world, employing the Arabic Abjad alphabet (Alif to Ya-Zay) to designate the 17 pitch degrees. Beneath each pitch letter, he penned rhythmic numbers indicating note duration, allowing 13th-century court compositions to be preserved and performed with fidelity.',
    scientificInsightAr:
      'سبق نظام الأرموي الأبجدي تدوين التابلوتشر الأوروبي (Tablature) بما يقرب من قرنين من الزمان، وجمع لأول مرة بين ارتفاع النغمة وطول زمنها في سطر واحد.',
    scientificInsightEn:
      'Urmawi’s alphanumeric tablature predated European instrumental tablatures by two centuries, uniting pitch height and rhythmic duration into an elegant single-line score.',
  },
  {
    id: 'al_mustasiniya_baghdad_scholars',
    xPct: 20.0,
    yPct: 52.0,
    titleAr: 'مدرسة بغداد وإنقاذ المخطوطات من هولاكو (Musta’simiyah Court)',
    titleEn: 'Baghdad Scholarly Circle & The 1258 Siege Defense',
    categoryAr: 'تاريخ العلوم والموسيقى السياسية',
    categoryEn: 'Intellectual History & Cultural Resilience',
    descAr:
      'شغل الأرموي منصب أمين مكتبة دار الخلافة المستنصرية وعازف بلاط آخر خلفاء بني العباس في بغداد (المستعصم بالله). وعندما حاصر هولاكو خان بغداد عام 1258، دخل الأرموي خيمة القائد المغولي وعزف على العود مقطوعات أذهلت هولاكو، مما دفع هولاكو إلى منحه الأمان وحماية أسرته وجيرانه وعدد كبير من كتب ومخطوطات بغداد من الحرق والتدمير.',
    descEn:
      'Al-Urmawi served as chief librarian of the Mustansiriya and court musician to the final Abbasid Caliph Al-Musta’sim in Baghdad. During Hulagu Khan’s 1258 Mongol sack of Baghdad, Urmawi performed on his lute with such spellbinding eloquence in Hulagu’s tent that the conqueror granted him immunity, sparing his family and safeguarding prized manuscripts.',
    scientificInsightAr:
      'عُين الأرموي لاحقاً رئيساً لديوان الإنشاء ببغداد، ودرّس تلاميذه كشمس الدين الكيشي ومولانا جلال الدين الرومي أصول المقامات والإيقاعات.',
    scientificInsightEn:
      'Following the siege, Urmawi headed the Baghdad chancery and trained luminous disciples, transmitting his modal science to Anatolian and Persian music masters.',
  },
  {
    id: 'limma_comma_microtonal_intervals',
    xPct: 35.0,
    yPct: 82.0,
    titleAr: 'البقية والفضلة: فيزياء الأبعاد الدقيقة (Limma & Comma)',
    titleEn: 'The Microtonal Limma & Comma Interval Physics',
    categoryAr: 'الحسابات الترددية والفيزياء الرياضية',
    categoryEn: 'Microtonal Acoustics & Interval Mathematics',
    descAr:
      'تُعد البقية (الليمّا = 256 / 243 وتساوي 90.22 سنتاً) والفضلة (الكوما الفيثاغورية = 531441 / 524288 وتساوي 23.46 سنتاً) اللبنتين الأساسيتين في صرح الأرموي. فالطن الكامل يتكون من بقيتين وفضلة (90.22 + 90.22 + 23.46 = 203.9 سنتاً = نسبة 9:8). وبفضل هذا التحليل الدقيق، تمكن الأرموي من صياغة السلالم اللحنية بدقة متناهية تفوقت على اليونانيين.',
    descEn:
      'The Limma ($L = 256/243 \approx 90.22\text{ cents}$) and Pythagorean Comma ($C = 531441/524288 \approx 23.46\text{ cents}$) are Urmawi’s fundamental acoustic quanta. A major second tone consists of two Limmas and one Comma ($2L + C = 203.9\text{ cents} = 9:8$). This structural precision allowed Urmawi to calibrate tetrachordal variations exceeding ancient Greek musicology.',
    scientificInsightAr:
      'الفرق بين أرباع التون الحقيقية والتقريب المتساوي هو 24 سنتاً (كومّا كاملة)، وهو ما يفسر سبب شعور الأذن الشرقية بالنشاز حين تُعزف المقامات على آلات الكيبورد غير المعدلة.',
    scientificInsightEn:
      'The auditory discrepancy between authentic acoustic maqam intervals and equal-tempered quarter-tones equals 24 cents (a full comma), explaining modal dissonance on uncalibrated Western synths.',
  },
];

export const UrmawiKitabAlAdwarStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<UrmawiHotspot>(URMAWI_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'seventeen_tone_dial' | 'classical_modes'
  const [engineMode, setEngineMode] = useState<'seventeen_tone_dial' | 'classical_modes'>('seventeen_tone_dial');

  // Selected Pitch Degree (0 to 16)
  const [selectedDegree, setSelectedDegree] = useState<number>(0);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // 17-Tone Degree Dataset
  const PITCH_DEGREES = useMemo(
    () => [
      { abjad: 'أ', nameAr: 'ألف (المطلق)', nameEn: 'Alif (Tonic C)', cents: 0, interval: 'Tonic', ratio: 1.0 },
      { abjad: 'ب', nameAr: 'باء (بقية أولى)', nameEn: 'Ba (Limma 1)', cents: 90, interval: 'L', ratio: 1.053 },
      { abjad: 'ج', nameAr: 'جيم (بقيتان)', nameEn: 'Jim (2 Limmas)', cents: 180, interval: '2L', ratio: 1.109 },
      { abjad: 'د', nameAr: 'دال (طن كامل)', nameEn: 'Dal (Whole Tone D)', cents: 204, interval: '2L + C', ratio: 1.125 },
      { abjad: 'هـ', nameAr: 'هاء (طن + بقية)', nameEn: 'Ha (Tone + L)', cents: 294, interval: 'T + L', ratio: 1.185 },
      { abjad: 'و', nameAr: 'واو (طن + بقيتان)', nameEn: 'Waw (Tone + 2L)', cents: 384, interval: 'T + 2L', ratio: 1.248 },
      { abjad: 'ز', nameAr: 'زاي (طنان / ثالثة)', nameEn: 'Zay (Ditome E)', cents: 408, interval: '2T', ratio: 1.265 },
      { abjad: 'ح', nameAr: 'حاء (الرابعة التامة)', nameEn: 'Hah (Fourth F)', cents: 498, interval: 'Diatessaron', ratio: 1.333 },
      { abjad: 'ط', nameAr: 'طاء (رابعة + بقية)', nameEn: 'Ta (Fourth + L)', cents: 588, interval: '4th + L', ratio: 1.404 },
      { abjad: 'ي', nameAr: 'ياء (رابعة + بقيتان)', nameEn: 'Ya (Fourth + 2L)', cents: 678, interval: '4th + 2L', ratio: 1.479 },
      { abjad: 'يا', nameAr: 'ياء-ألف (الخامسة التامة)', nameEn: 'Ya-Alif (Fifth G)', cents: 702, interval: 'Diapente', ratio: 1.500 },
      { abjad: 'يب', nameAr: 'ياء-باء (خامسة + بقية)', nameEn: 'Ya-Ba (Fifth + L)', cents: 792, interval: '5th + L', ratio: 1.580 },
      { abjad: 'يج', nameAr: 'ياء-جيم (خامسة + 2 بقية)', nameEn: 'Ya-Jim (Fifth + 2L)', cents: 882, interval: '5th + 2L', ratio: 1.664 },
      { abjad: 'يد', nameAr: 'ياء-دال (خامسة + طن)', nameEn: 'Ya-Dal (5th + Tone A)', cents: 906, interval: '5th + T', ratio: 1.687 },
      { abjad: 'يه', nameAr: 'ياء-هاء (خامسة + طن + L)', nameEn: 'Ya-Ha (5th + T + L)', cents: 996, interval: '5th + T + L', ratio: 1.777 },
      { abjad: 'يو', nameAr: 'ياء-واو (خامسة + طن + 2L)', nameEn: 'Ya-Waw (5th + T + 2L)', cents: 1086, interval: '5th + T + 2L', ratio: 1.872 },
      { abjad: 'يز', nameAr: 'ياء-زاي (السابعة الكبيرة)', nameEn: 'Ya-Zay (Major 7th B)', cents: 1110, interval: '5th + 2T', ratio: 1.898 },
    ],
    []
  );

  const activePitch = PITCH_DEGREES[selectedDegree];
  const baseFrequency = 261.63; // Middle C (C4)
  const currentFrequency = Math.round(baseFrequency * activePitch.ratio * 10) / 10;

  // Web Audio Tone Synthesis
  const playPitchTone = () => {
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

      // Barbat / Oud tone simulation: Triangle wave with slight warm harmonics
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(currentFrequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.55);
    } catch {
      // Audio fallback gracefully handled
    }
  };

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: urmawiPhoto,
      titleAr: 'مخطوطة كتاب الأدوار ودائرة الـ 17 نغمة — صفي الدين الأرموي 1252 م',
      titleEn: 'Kitab al-Adwar & The 17-Tone Circular Dial — Safi al-Din al-Urmawi 1252 CE',
      subtitleAr: 'دائرة الأدوار المذهبة وتدوين الحروف الأبجدية وآلة البربط التراثية',
      subtitleEn: 'Illuminated Gold Leaf Circular Dial, Abjad Notation & Classical Barbat Lute',
      descriptionAr:
        'أهم مخطوط موسيقي هندسي في تاريخ التراث العربي الإسلامي، أنجزه صفي الدين الأرموي ببغداد عام 650 هـ (1252 م). وضع فيه الأرموي أسس السلم الفيثاغوري ذي الـ 17 نغمة في الديوان، وابتكر دائرة الأدوار الهندسية لتوليد المقامات والأنغام وحساب الفواصل الدقيقة بين البقية والفضلة، وأسس أول نظام تدوين أبجدي وإيقاعي متكامل في الشرق.',
      descriptionEn:
        'The seminal mathematical and musicological masterwork of the medieval Near East, composed in Baghdad in 1252 CE. Al-Urmawi codified the 17-tone Pythagorean scale, illuminated the circular dial of modes (Dā’irat al-Adwār), calculated microtonal Limmas and Commas, and invented the first comprehensive alphanumeric musical notation in Islamic civilization.',
      locationAr: 'بغداد (النسخة الأصلية بمكتبة نور عثمانية بإسطنبول، رقم 3653)',
      locationEn: 'Baghdad (Original Codex in Nuruosmaniye Library, Istanbul, MS 3653)',
      dateOrEraAr: 'سنة 650 هـ / 1252 م (أواخر العصر العباسي، قبيل سقوط بغداد)',
      dateOrEraEn: '650 AH / 1252 CE (Late Abbasid Baghdad, Reign of Caliph Al-Musta’sim)',
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
            <CircleDot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                1252 CE • Abbasid Baghdad
              </span>
              <span className="text-xs font-mono text-slate-400">Kitab al-Adwar (The Book of Cycles)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'صفي الدين الأرموي وكتاب الأدوار 4K' : 'Safi al-Din al-Urmawi: Kitab al-Adwar 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('seventeen_tone_dial')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'seventeen_tone_dial'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'دائرة الـ 17 نغمة التفاعلية' : '17-Tone Circular Dial'}
          </button>
          <button
            onClick={() => setEngineMode('classical_modes')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'classical_modes'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الأدوار والشدود الـ 12' : 'The 12 Primary Modes'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={urmawiPhoto}
          alt="Safi al-Din al-Urmawi Kitab al-Adwar 1252 CE"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {URMAWI_HOTSPOTS.map((h, idx) => {
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
          <span>{isArabic ? 'مخطوطة النور عثمانية 1252 م' : 'Nuruosmaniye Codex 1252 CE'}</span>
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
              {isArabic ? 'التحليل الرياضي والمقامي: ' : 'Mathematical & Modal Analysis: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'seventeen_tone_dial' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'قرص دائرة الأدوار الـ 17 ومولد النغمات الفيثاغورية' : 'Interactive 17-Tone Harmonic Circle Dial & Frequency Synthesizer'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Degree: {activePitch.abjad}</span>
              <span className="text-amber-400 font-bold">{currentFrequency} Hz</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
                +{activePitch.cents} cents
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Vector Illuminated Circle Dial SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 320 320" className="w-full max-w-[280px] h-auto overflow-visible select-none">
                {/* Outer Decorative Ring */}
                <circle cx="160" cy="160" r="145" fill="none" stroke="#b45309" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="160" cy="160" r="135" fill="#451a03" fillOpacity="0.4" stroke="#d97706" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="85" fill="#78350f" fillOpacity="0.6" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="160" cy="160" r="30" fill="#facc15" stroke="#78350f" strokeWidth="2" />
                <text x="160" y="164" fill="#78350f" fontSize="11" fontFamily="serif" fontWeight="bold" textAnchor="middle">
                  الأدوار
                </text>

                {/* 17 Radiating Segments & Abjad Labels */}
                {PITCH_DEGREES.map((p, idx) => {
                  const angleDeg = (idx / 17) * 360 - 90;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const x1 = 160 + Math.cos(angleRad) * 85;
                  const y1 = 160 + Math.sin(angleRad) * 85;
                  const x2 = 160 + Math.cos(angleRad) * 135;
                  const y2 = 160 + Math.sin(angleRad) * 135;
                  const labelX = 160 + Math.cos(angleRad) * 110;
                  const labelY = 160 + Math.sin(angleRad) * 110;
                  const isCur = selectedDegree === idx;

                  return (
                    <g key={idx} onClick={() => setSelectedDegree(idx)} className="cursor-pointer group">
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isCur ? '#fbbf24' : '#b45309'} strokeWidth={isCur ? 3 : 1} />
                      <circle
                        cx={labelX}
                        cy={labelY}
                        r={isCur ? 11 : 9}
                        fill={isCur ? '#f59e0b' : '#1e1b4b'}
                        stroke={isCur ? '#ffffff' : '#f59e0b'}
                        strokeWidth={1.5}
                      />
                      <text
                        x={labelX}
                        y={labelY + 3.5}
                        fill={isCur ? '#000000' : '#fef3c7'}
                        fontSize="8.5"
                        fontWeight="bold"
                        fontFamily="serif"
                        textAnchor="middle"
                      >
                        {p.abjad}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Sound Play Button */}
              <button
                onClick={playPitchTone}
                className="mt-3 flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/30 transition-all cursor-pointer min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <Volume2 className="w-4 h-4" />
                <span>{isArabic ? `عزف نغمة ${activePitch.abjad} (${currentFrequency} Hz)` : `Play Degree ${activePitch.abjad} (${currentFrequency} Hz)`}</span>
              </button>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                  {isArabic ? 'درجات ديوان الأرموي الـ 17 بالحروف الأبجدية' : 'Select 17-Tone Octave Scale Degree'}
                </label>
                <div className="grid grid-cols-1 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
                  {PITCH_DEGREES.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDegree(idx)}
                      className={`px-3 py-1.5 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                        selectedDegree === idx
                          ? 'bg-amber-600/30 border-amber-400 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-sans font-medium text-amber-300">
                        {p.abjad} — {isArabic ? p.nameAr : p.nameEn}
                      </span>
                      <span className="text-[11px] text-amber-400 font-bold">+{p.cents} ¢</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'الرمز الأبجدي' : 'Abjad Glyph'}</div>
                  <div className="text-amber-400 font-bold text-base mt-0.5">{activePitch.abjad}</div>
                  <div className="text-[10px] text-slate-400">Step {selectedDegree + 1} of 17</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'التركيب الفيزيائي' : 'Interval Makeup'}</div>
                  <div className="text-emerald-400 font-bold mt-0.5">{activePitch.interval}</div>
                  <div className="text-[10px] text-slate-400">Limmas & Commas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: The 12 Classical Modes (Shudud) */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'الشدود الاثنا عشر الكبرى عند صفي الدين الأرموي' : 'Urmawi’s Twelve Primary Classical Modes (Al-Shudūd)'}
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              Baghdad Court Classical Shudūd
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                nameAr: 'دور العشّاق',
                nameEn: 'Dawr al-Ushshaq',
                formula: 'أ - د - ز - ح - يا - يد - يز',
                centsSeq: '0, 204, 408, 498, 702, 906, 1110',
                descAr: 'المقام الأكمل والأكثر توازناً، يرتكز على تتابع طنين كاملين يعقبهما بقية.',
                descEn: 'The archetype mode built on two whole tones followed by a limma (major-like symmetry).',
              },
              {
                nameAr: 'دور النوى',
                nameEn: 'Dawr al-Nawa',
                formula: 'أ - ج - و - ح - يا - يج - يو',
                centsSeq: '0, 180, 384, 498, 702, 882, 1086',
                descAr: 'مقام دافئ مشحون بالشجن والعمق الروحي، يعتمد على تداخل البقايا والفضلة.',
                descEn: 'A poignant, deeply contemplative mode utilizing interwoven limma micro-steps.',
              },
              {
                nameAr: 'دور البوسليك',
                nameEn: 'Dawr al-Busalik',
                formula: 'أ - ب - د - ح - يا - يب - يد',
                centsSeq: '0, 90, 204, 498, 702, 792, 906',
                descAr: 'يقابل السلم الصغير القديم مع أبعاد فيثاغورية نقية تبرز درجات الاستقرار.',
                descEn: 'Ancient natural minor equivalent with pristine Pythagorean tuning ratios.',
              },
              {
                nameAr: 'دور الراست',
                nameEn: 'Dawr al-Rast',
                formula: 'أ - د - و - ح - يا - يد - يو',
                centsSeq: '0, 204, 384, 498, 702, 906, 1086',
                descAr: 'أساس المقامات الشرقية، يرتكز على الثلث المحايد ذي الطابع الوقور الشجي.',
                descEn: 'The foundational pillar of Oriental modal architecture with its neutral third interval.',
              },
              {
                nameAr: 'دور الإصفهان',
                nameEn: 'Dawr al-Isfahan',
                formula: 'أ - ب - هـ - ح - يا - يب - يه',
                centsSeq: '0, 90, 294, 498, 702, 792, 996',
                descAr: 'مقام إيراني-عراقي بديع ذو تعبير غنائي ناعم ونغمات رقيقة الأثر.',
                descEn: 'Lyrical Mesopotamo-Persian mode characterized by delicate microtonal inflections.',
              },
              {
                nameAr: 'دور الزيرفكند',
                nameEn: 'Dawr al-Zirafkand',
                formula: 'أ - ج - هـ - ح - يا - يج - يه',
                centsSeq: '0, 180, 294, 498, 702, 882, 996',
                descAr: 'مقام ذو توتر درامي عالٍ استخدمه الأرموي للتعبير عن العواطف المتضاربة.',
                descEn: 'Highly expressive dramatic mode utilized for portraying emotional tension in court.',
              },
            ].map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-amber-300">{isArabic ? s.nameAr : s.nameEn}</h4>
                  <span className="text-[10px] font-mono text-amber-400/80">Mode {idx + 1}</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-slate-900/80 px-2 py-1 rounded border border-emerald-900/40">
                  {s.formula}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {isArabic ? s.descAr : s.descEn}
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
