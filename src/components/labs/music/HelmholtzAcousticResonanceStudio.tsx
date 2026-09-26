import React, { useState, useMemo, useRef } from 'react';
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Volume2,
  Play,
  Sliders,
  Activity,
  Waves,
  Zap,
} from 'lucide-react';
import helmholtzPhoto from '../../../assets/music/helmholtz_sensations_tone_1863.jpg';
import { HiResImageModal, type HiResImageModalData } from '../christian/HiResImageModal';

interface Props {
  isArabic: boolean;
  isLight?: boolean;
  isContrast?: boolean;
}

export interface HelmholtzHotspot {
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

export const HELMHOLTZ_HOTSPOTS: HelmholtzHotspot[] = [
  {
    id: 'fourier_harmonic_overtones',
    xPct: 62.0,
    yPct: 65.0,
    titleAr: 'تحليل فورييه والتوافقات الهارمونية (Fourier Harmonic Spectrum)',
    titleEn: 'Fourier Harmonic Overtones & Acoustic Wave Superposition',
    categoryAr: 'الفيزياء الرياضية وتحليل الإشارات',
    categoryEn: 'Mathematical Physics & Harmonic Analysis',
    descAr:
      'طبق هلمهولتز نظرية فورييه الرياضية لأول مرة على الصوت الموسيقي؛ مُثبتاً أن أي نغمة موسيقية معقدة تصدر من آلة ليست نغمة بسيطة، بل هي تراكب خطي لعدد لانهائي من الموجات الجيبية النقية (التوافقات الهارمونية f, 2f, 3f, 4f...). وأثبت أن طابع الصوت أو لونه (Timbre) يتحدد بدقة وفق السعة النسبية لكل توافق هارموني في الطيف.',
    descEn:
      'Helmholtz applied Joseph Fourier’s theorem to musical acoustics, proving that any complex periodic musical tone is a linear superposition of pure sinusoidal harmonics ($f, 2f, 3f, 4f, ...$). He demonstrated conclusively that timbre (tone color or *Klangfarbe*) is governed strictly by the relative amplitudes and distribution of these upper partials.',
    scientificInsightAr:
      'المعادلة الموجية للنغمة المعقدة: y(t) = ∑ A_n · sin(2π n f t + φ_n). غياب التوافقات الزوجية في الكلارينيت يعطيه صوته الأجوف، بينما غناها في الكمان يمنحه دفئه الساطع.',
    scientificInsightEn:
      'Wave equation: $y(t) = \sum A_n \sin(2\pi n f t + \phi_n)$. The suppression of even harmonics gives the clarinet its hollow cylindrical timbre, whereas rich upper partials grant the violin its brilliant warmth.',
  },
  {
    id: 'helmholtz_spherical_resonators',
    xPct: 58.0,
    yPct: 32.0,
    titleAr: 'رنانات هلمهولتز النحاسية الكروية (Acoustic Cavity Resonators)',
    titleEn: 'Spherical Brass Helmholtz Acoustic Resonators',
    categoryAr: 'الأجهزة الفيزيائية والقياس الصوتي',
    categoryEn: 'Physical Instrumentation & Acoustic Metrology',
    descAr:
      'اخترع هلمهولتز هذه الكرات النحاسية المجوفة ذات الفتحتين (فتحة واسعة لاستقبال الصوت وحلمة دقيقة توضع في الأذن) لتعمل كمرشحات فيزيائية فائقة الانتقائية. حين يُعزف صوت مركب، يضخم الرنان التوافق الهارموني المطابق لتردده الذاتي فقط ويخمد بقية الترددات، مما سمح لهلمهولتز "بسماع" النغمات التوافقية الخفية في الصوت البشري والآلات.',
    descEn:
      'Helmholtz engineered hollow spherical brass resonators with two openings: a wide acoustic aperture and a narrow nipple inserted into the ear. Functioning as acoustic bandpass filters, each sphere exclusively amplified the overtone corresponding to its natural cavity resonance while suppressing all others, enabling Helmholtz to empirically isolate hidden partials.',
    scientificInsightAr:
      'تردد الرنين الكهفي: f = (v / 2π) · √(A / (V · L_eq)). حيث v سرعة الصوت (343 م/ث)، A مساحة عنق الرنان، V حجم التجويف، وL_eq الطول المكافئ للعنق مع تصحيح النهاية.',
    scientificInsightEn:
      'Cavity resonance frequency: $f = \frac{v}{2\pi}\sqrt{\frac{A}{V \cdot L_{\text{eq}}}}$, where $v \approx 343\text{ m/s}$, $A$ is neck cross-sectional area, $V$ is cavity volume, and $L_{\text{eq}} = L + 0.614r$ is effective neck length.',
  },
  {
    id: 'cochlear_basilar_resonance',
    xPct: 38.0,
    yPct: 62.0,
    titleAr: 'الرنين القوقعي والغشاء القاعدي (Cochlear Resonance Theory)',
    titleEn: 'Cochlear Tonotopic Resonance & The Basilar Membrane',
    categoryAr: 'الفسيولوجيا والسمع البشري',
    categoryEn: 'Sensory Physiology & Tonotopic Audition',
    descAr:
      'قدم هلمهولتز في كتابه أول نظرية فسيولوجية علمية لآلية السمع البشري؛ إذ شبه الغشاء القاعدي داخل قوقعة الأذن بآلة القيثارة المزودة بآلاف الأوتار الدقيقة المشدودة. فالترددات العالية تُهيج الألياف القصيرة المشدودة عند قاعدة القوقعة، بينما تُهيج الترددات المنخفضة الألياف الطويلة عند قمة القوقعة (Apex)، مما يحول الصوت إلى نبضات عصبية طبوغرافية.',
    descEn:
      'Helmholtz formulated the earliest physiological resonance theory of human hearing, analogizing the cochlea’s basilar membrane to a microscopic acoustic harp. High frequencies resonate short, stiff fibers near the oval window base, while low frequencies vibrate long, flexible fibers at the apex, establishing the tonotopic frequency map of the auditory cortex.',
    scientificInsightAr:
      'أكدت أبحاث الفيزيولوجي المجري جورج فون بيكيسي الحائز على نوبل 1961 صحة نظرية هلمهولتز عبر إثبات الموجة المرتحلة (Traveling Wave) على طول الغشاء القاعدي.',
    scientificInsightEn:
      'Georg von Békésy’s Nobel-winning 1961 research verified Helmholtz’s tonotopic principles by visualizing traveling physical displacement waves along the basilar membrane.',
  },
  {
    id: 'timbre_clang_coloration',
    xPct: 18.0,
    yPct: 52.0,
    titleAr: 'طابع الصوت واللون النغمي (Klangfarbe / Timbre Color)',
    titleEn: 'Acoustic Timbre & The Physical Basis of Tone Color',
    categoryAr: 'علم النفس الصوتي والإدراك السمعي',
    categoryEn: 'Psychoacoustics & Auditory Perception',
    descAr:
      'أجاب هلمهولتز عن اللغز الكلاسيكي: لماذا نميز بسهولة بين صوت البيانو والكمان والتشيلو حين تعزف جميعها نغمة واحدة متطابقة في الطبقة والشدة (مثل نغمة لا 440 هرتز)؟ أثبت هلمهولتز أن الأذن البشرية تحلل ميكانيكياً طيف التوافقات في كل آلة؛ فالفلوت يصدر موجة جيبية شبه نقية، بينما تضفي التوافقات الغنية للعود والكمان والبيانو هوية صوتية فريدة لكل آلة.',
    descEn:
      'Helmholtz solved the historic enigma: why do a violin, piano, and human voice sound unmistakably distinct when sounding the exact same pitch and intensity (e.g. A4 440 Hz)? He proved that the ear mechanically resolves harmonic overtone spectra; a flute generates nearly pure sinusoids, whereas the rich harmonic cascades of the violin produce its characteristic timbre.',
    scientificInsightAr:
      'صمم هلمهولتز جهازاً كهرومغناطيسياً مبكراً (Helmholtz Synthesizer) يجمع بين شوكات رنانة كهربائية لتركيب أصوات الحروف الصوتية الاصطناعية (Vowel Synthesis) لأول مرة بالتاريخ.',
    scientificInsightEn:
      'Helmholtz constructed the world’s first electromagnetic additive sound synthesizer, driving arrays of tuning forks to synthesize artificial vowel formants mechanically.',
  },
  {
    id: 'consonance_dissonance_beating',
    xPct: 88.0,
    yPct: 40.0,
    titleAr: 'النشاز والتآلف والضربات الصوتية (Acoustic Dissonance & Beats)',
    titleEn: 'Consonance, Dissonance & Roughness from Acoustic Beats',
    categoryAr: 'الفيزياء الهارمونية ونظرية الموسيقى',
    categoryEn: 'Harmonic Physics & Consonance Theory',
    descAr:
      'فسر هلمهولتز سبب شعور الأذن البشرية بالتنافر والنشاز (Dissonance) عند عزف نغمتين متقاربتين جداً؛ إذ يتداخل موجاهما لينتجا ظاهرة "الضربات الصوتية" (Beats). وعندما يصل معدل الضربات إلى 30-40 ضربة في الثانية، يتعرض الغشاء القاعدي للتهيج السريع الخشن (Roughness)، مما تشعر به الأذن كنشاز حاد، في حين تختفي الضربات في النسب الصحيحة البسيطة كالأوكتاف والخامسة.',
    descEn:
      'Helmholtz demystified musical consonance and dissonance through acoustic wave interference beats. When two adjacent frequencies or upper partials interfere at rates of 30 to 40 beats per second, they produce physiological sensory roughness on the basilar membrane perceived as harsh dissonance. Small-integer ratios (2:1, 3:2) align harmonics without roughness.',
    scientificInsightAr:
      'تردد الضربات الصوتية: f_beat = |f1 - f2|. إذا كان f1 = 260 Hz وf2 = 264 Hz، تسمع الأذن تموجاً في الشدة بمعدل 4 نبضات/ثانية؛ وعند تسارعها إلى 33 نبضة تصبح خشونة نشازية تامة.',
    scientificInsightEn:
      'Beat frequency: $f_{\text{beat}} = |f_1 - f_2|$. At 4 beats/sec, the ear detects gentle tremolo; accelerated to 33 beats/sec, it transforms into maximum sensory roughness (dissonance).',
  },
];

export const HelmholtzAcousticResonanceStudio: React.FC<Props> = ({
  isArabic,
  isLight = false,
  isContrast = false,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<HelmholtzHotspot>(HELMHOLTZ_HOTSPOTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Engine Mode: 'cavity_resonator' | 'dissonance_beats'
  const [engineMode, setEngineMode] = useState<'cavity_resonator' | 'dissonance_beats'>('cavity_resonator');

  // Cavity Resonator State
  const [cavityVolumeCm3, setCavityVolumeCm3] = useState<number>(500); // 100 to 1200 cm³
  const [neckRadiusCm, setNeckRadiusCm] = useState<number>(1.2); // 0.5 to 2.5 cm
  const [neckLengthCm, setNeckLengthCm] = useState<number>(2.0); // 1 to 5 cm

  // Consonance & Beating State
  const [freq1, setFreq1] = useState<number>(261.6); // Middle C in Hz
  const [freq2, setFreq2] = useState<number>(265.0); // Variable pitch in Hz

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Resonator Physics Calculation
  const resonatorPhysics = useMemo(() => {
    const v = 34300; // Speed of sound in air (cm/s)
    const area = Math.PI * Math.pow(neckRadiusCm, 2); // cm²
    const effectiveLength = neckLengthCm + 1.2 * neckRadiusCm; // End-corrected neck length (cm)
    const rawFreq = (v / (2 * Math.PI)) * Math.sqrt(area / (cavityVolumeCm3 * effectiveLength));
    const resonantFreq = Math.round(rawFreq * 10) / 10;

    // Approximate note mapping
    let noteName = 'C';
    if (resonantFreq > 500) noteName = 'C5';
    else if (resonantFreq > 440) noteName = 'A4';
    else if (resonantFreq > 392) noteName = 'G4';
    else if (resonantFreq > 330) noteName = 'E4';
    else if (resonantFreq > 261) noteName = 'C4';
    else if (resonantFreq > 196) noteName = 'G3';
    else noteName = 'C3';

    return {
      areaCm2: Math.round(area * 100) / 100,
      effectiveLengthCm: Math.round(effectiveLength * 100) / 100,
      resonantFreq,
      noteName,
    };
  }, [cavityVolumeCm3, neckRadiusCm, neckLengthCm]);

  // Beating Physics Calculation
  const beatingPhysics = useMemo(() => {
    const beatFrequency = Math.round(Math.abs(freq1 - freq2) * 10) / 10;
    const ratio = Math.round((freq2 / freq1) * 1000) / 1000;

    let sensationAr = 'تآلف متسق ورنين صافٍ';
    let sensationEn = 'Pure Consonant Resonance';
    let roughnessPct = 5;

    if (beatFrequency > 0 && beatFrequency <= 8) {
      sensationAr = 'تموج بطيء في الشدة (ضربات واضحة)';
      sensationEn = 'Gentle Acoustic Tremolo (Clear Beats)';
      roughnessPct = 25;
    } else if (beatFrequency > 8 && beatFrequency <= 20) {
      sensationAr = 'ضربات متسارعة واضطراب في الإشارة';
      sensationEn = 'Rapid Pulsations & Flutter';
      roughnessPct = 65;
    } else if (beatFrequency > 20 && beatFrequency <= 45) {
      sensationAr = 'نشاز حاد وخشونة قصوى على الغشاء القاعدي';
      sensationEn = 'Maximum Sensory Roughness & Dissonance';
      roughnessPct = 95;
    } else if (beatFrequency > 45) {
      sensationAr = 'نغمتان منفصلتان تدركهما الأذن بوضوح';
      sensationEn = 'Two Distinct Pitches Resolved by Cochlea';
      roughnessPct = 35;
    }

    return {
      beatFrequency,
      ratio,
      sensationAr,
      sensationEn,
      roughnessPct,
    };
  }, [freq1, freq2]);

  // Audio Playback: Cavity Resonance Pure Tone
  const playResonatorTone = () => {
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

      // Pure Helmholtz cavity resonance sine tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(resonatorPhysics.resonantFreq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.85);
    } catch {
      // Audio fallback gracefully handled
    }
  };

  // Audio Playback: Dual Beating Interference Oscillators
  const playBeatingTones = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      const gain2 = ctx.createGain();
      const masterGain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq1, ctx.currentTime);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq2, ctx.currentTime);

      gain1.gain.value = 0.5;
      gain2.gain.value = 0.5;

      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.05);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

      osc1.connect(gain1);
      osc2.connect(gain2);
      gain1.connect(masterGain);
      gain2.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 2.25);
      osc2.stop(ctx.currentTime + 2.25);
    } catch {
      // Audio fallback gracefully handled
    }
  };

  const modalData: HiResImageModalData = useMemo(
    () => ({
      imageUrl: helmholtzPhoto,
      titleAr: 'إحساسات النغم ورنانات هلمهولتز الفيزيائية — هيرمان فون هلمهولتز 1863 م',
      titleEn: 'On the Sensations of Tone & Helmholtz Acoustic Resonators — 1863 First Edition',
      subtitleAr: 'مخططات فورييه لتراكب الموجات الصوتية ورنانات كروية نحاسية وشوكة رنانة C1',
      subtitleEn: 'Fourier Harmonic Wave Diagrams, Spherical Brass Cavities & C1 Resonant Tuning Fork',
      descriptionAr:
        'المرجع العلمي التأسيسي الذي أرسى قواعد علم الصوتيات الفيزيائية الحديثة ونظرية السمع الفسيولوجي. نشر فيه الفيزيائي الألماني هيرمان فون هلمهولتز عام 1863 اكتشافاته حول التوافقات الهارمونية، ورنانات الكهوف النحاسية التي تعزل ترددات الصوت المعقد ميكانيكياً، وآلية استجابة الغشاء القاعدي بالقوقعة، وأسباب النشاز الناتجة عن الضربات الصوتية السريعة.',
      descriptionEn:
        'The foundational milestone of modern physical acoustics and physiological hearing theory, published in Braunschweig in 1863. Helmholtz experimentally validated Fourier overtone series, invented spherical acoustic cavity resonators, illuminated the tonotopic mechanics of the cochlear basilar membrane, and established the physical origins of musical consonance.',
      locationAr: 'براونشفايغ، ألمانيا (المختبر الفيزيولوجي لجامعة هايدلبرغ وجامعة بون)',
      locationEn: 'Braunschweig & Heidelberg University Acoustic Laboratory, Germany',
      dateOrEraAr: 'العصر الفيكتوري / عام 1863 ميلادية',
      dateOrEraEn: 'Victorian Era / 1863 CE (First German Edition, Vieweg & Sohn)',
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
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                1863 CE • Heidelberg & Braunschweig
              </span>
              <span className="text-xs font-mono text-slate-400">Physiological Acoustics & Harmonic Resonance</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              {isArabic ? 'هلمهولتز وفيزياء الرنين الصوتي 4K' : 'Hermann von Helmholtz: Acoustic Resonance 4K'}
            </h2>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-amber-500/30 rounded-xl text-xs">
          <button
            onClick={() => setEngineMode('cavity_resonator')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'cavity_resonator'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'رنان الكهف النحاسي' : 'Cavity Resonator Physics'}
          </button>
          <button
            onClick={() => setEngineMode('dissonance_beats')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              engineMode === 'dissonance_beats'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isArabic ? 'الضربات الصوتية والنشاز' : 'Acoustic Beats & Roughness'}
          </button>
        </div>
      </div>

      {/* 4K Archival Canvas with Hotspots */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
        <img
          src={helmholtzPhoto}
          alt="Hermann von Helmholtz On the Sensations of Tone 1863"
          className="w-full h-auto max-h-[560px] object-contain mx-auto select-none"
        />

        {/* Hotspots */}
        {HELMHOLTZ_HOTSPOTS.map((h, idx) => {
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
          <span>{isArabic ? 'الطبعة الأولى 1863 م' : 'First Edition 1863 CE • Vieweg'}</span>
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
              {isArabic ? 'التحليل الفيزيائي والفسيولوجي: ' : 'Physiological & Acoustic Insight: '}
            </strong>
            {isArabic ? selectedHotspot.scientificInsightAr : selectedHotspot.scientificInsightEn}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Engine */}
      {engineMode === 'cavity_resonator' ? (
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'حاسبة رنين التجويف الكروي لهلمهولتز ومولد التردد النقي' : 'Helmholtz Spherical Cavity Resonance Calculator & Pure Tone Synthesizer'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">V = {cavityVolumeCm3} cm³</span>
              <span className="text-amber-400 font-bold">f_res = {resonatorPhysics.resonantFreq} Hz</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 font-bold">
                {resonatorPhysics.noteName}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Vector Helmholtz Resonator Diagram */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
              <svg viewBox="0 0 300 240" className="w-full max-w-[280px] h-auto overflow-visible select-none">
                {/* Brass Spherical Cavity Shell */}
                <circle cx="150" cy="140" r="75" fill="#78350f" fillOpacity="0.4" stroke="#d97706" strokeWidth="2.5" />
                <circle cx="150" cy="140" r="72" fill="#451a03" fillOpacity="0.8" />

                {/* Resonator Neck Cylinder */}
                <rect x="135" y="35" width="30" height="40" fill="#92400e" stroke="#f59e0b" strokeWidth="2" />
                {/* Acoustic Aperture Lip */}
                <ellipse cx="150" cy="35" rx="15" ry="4" fill="#facc15" stroke="#92400e" strokeWidth="1" />

                {/* Acoustic Oscillation Standing Wave within Cavity */}
                <circle cx="150" cy="140" r="50" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
                <circle cx="150" cy="140" r="28" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />

                {/* Resonator Nipple at back/side */}
                <polygon points="222,140 240,135 240,145" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
                <text x="245" y="143" fill="#cbd5e1" fontSize="8" fontFamily="monospace">Ear Nipple</text>

                {/* Dimensions Text */}
                <text x="150" y="144" fill="#fef3c7" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  V = {cavityVolumeCm3} cm³
                </text>
                <text x="150" y="25" fill="#facc15" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  Aperture (r = {neckRadiusCm} cm)
                </text>
              </svg>

              {/* Sound Play Button */}
              <button
                onClick={playResonatorTone}
                className="mt-3 flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/30 transition-all cursor-pointer min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <Volume2 className="w-4 h-4" />
                <span>{isArabic ? `عزف نغمة الرنين الذاتي (${resonatorPhysics.resonantFreq} Hz)` : `Play Natural Cavity Tone (${resonatorPhysics.resonantFreq} Hz)`}</span>
              </button>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'حجم التجويف الكروي (Volume V)' : 'Spherical Volume V'}
                  </span>
                  <span className="font-mono text-amber-400">{cavityVolumeCm3} cm³</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="25"
                  value={cavityVolumeCm3}
                  onChange={(e) => setCavityVolumeCm3(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'نصف قطر فتحة العنق (Radius r)' : 'Neck Aperture Radius r'}
                  </span>
                  <span className="font-mono text-amber-400">{neckRadiusCm} cm</span>
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={neckRadiusCm}
                  onChange={(e) => setNeckRadiusCm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-400" />
                    {isArabic ? 'طول عنق الرنان (Neck Length L)' : 'Neck Length L'}
                  </span>
                  <span className="font-mono text-amber-400">{neckLengthCm} cm</span>
                </label>
                <input
                  type="range"
                  min="1.0"
                  max="5.0"
                  step="0.2"
                  value={neckLengthCm}
                  onChange={(e) => setNeckLengthCm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'مساحة الفتحة A' : 'Aperture Area A'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{resonatorPhysics.areaCm2} cm²</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'الطول المصحح Leq' : 'Corrected Length'}</div>
                  <div className="text-emerald-400 font-bold mt-0.5">{resonatorPhysics.effectiveLengthCm} cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Engine Mode 2: Acoustic Beating, Consonance & Sensory Roughness */
        <div className={`p-5 rounded-xl border ${cardBg} space-y-5`}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm sm:text-base font-bold text-slate-100">
                {isArabic ? 'مختبر الضربات الصوتية والتداخل وتحديد الخشونة النشازية' : 'Acoustic Beating, Interference & Sensory Roughness Laboratory'}
              </h3>
            </div>
            <div className="text-xs font-mono text-amber-400">
              f_beat = |f₁ - f₂| = {beatingPhysics.beatFrequency} Hz
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Roughness Visualizer Gauge */}
            <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center space-y-3">
              <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Consonant Smooth (0%)</span>
                <span>Max Dissonance / Roughness (100%)</span>
              </div>
              <div className="w-full bg-slate-900 h-4 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-600 transition-all duration-300"
                  style={{ width: `${beatingPhysics.roughnessPct}%` }}
                />
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 w-full text-center space-y-1">
                <div className="text-xs font-bold text-amber-300">
                  {isArabic ? beatingPhysics.sensationAr : beatingPhysics.sensationEn}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Frequency Ratio f₂/f₁ = {beatingPhysics.ratio} • Beat Rate = {beatingPhysics.beatFrequency} beats/sec
                </div>
              </div>

              {/* Sound Play Button */}
              <button
                onClick={playBeatingTones}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-600/30 transition-all cursor-pointer min-h-[44px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <Volume2 className="w-4 h-4" />
                <span>{isArabic ? `عزف التداخل الصوتي (${freq1} Hz + ${freq2} Hz)` : `Play Interference Beating (${freq1} Hz + ${freq2} Hz)`}</span>
              </button>
            </div>

            {/* Controls Side */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'التردد الأول الثابت (f₁ = Middle C)' : 'Fixed Base Frequency f₁'}</span>
                  <span className="font-mono text-emerald-400">{freq1} Hz</span>
                </label>
                <input
                  type="range"
                  min="220"
                  max="330"
                  step="1"
                  value={freq1}
                  onChange={(e) => setFreq1(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-1.5">
                  <span>{isArabic ? 'التردد الثاني المتغير (f₂)' : 'Variable Interfering Frequency f₂'}</span>
                  <span className="font-mono text-rose-400">{freq2} Hz</span>
                </label>
                <input
                  type="range"
                  min="260"
                  max="392"
                  step="0.5"
                  value={freq2}
                  onChange={(e) => setFreq2(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'معدل الضربات' : 'Beat Frequency'}</div>
                  <div className="text-rose-400 font-bold mt-0.5">{beatingPhysics.beatFrequency} Hz</div>
                  <div className="text-[10px] text-slate-400">Pulsations per sec</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{isArabic ? 'مستوى الخشونة' : 'Roughness Level'}</div>
                  <div className="text-amber-400 font-bold mt-0.5">{beatingPhysics.roughnessPct}%</div>
                  <div className="text-[10px] text-slate-400">Sensory dissonance</div>
                </div>
              </div>
            </div>
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
