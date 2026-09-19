import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../../i18n/translations';
import {
  QUARTER_TONE_PITCHES,
  MAQAMAT_CATALOG,
  ARAB_IQAAT_CATALOG,
  WESTERN_CADENCES,
  INSTRUMENTS_CATALOG,
  MUSIC_STUDIO_QUIZ,
  type MaqamDefinition,
} from '../../data/audioLab/musicLabData';
import {
  Music,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sliders,
  Award,
  BookOpen,
  Sparkles,
  Maximize2,
  Minimize2,
  Layers,
  Activity,
  Compass,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: MusicStudioTab;
}

export type MusicStudioTab = 'solfege' | 'maqamat' | 'iqaat' | 'harmony' | 'organology' | 'quiz';

export const MusicTheoryStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'maqamat',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeTab, setActiveTab] = useState<MusicStudioTab>(initialTab);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = (): AudioContext | null => {
    if (!soundEnabled) return null;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  };

  // Play a single tone / microtone
  const playTone = (freq: number, durationSec = 0.6, type: OscillatorType = 'triangle') => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // ADSR Envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + durationSec);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  };

  // Play a polyphonic chord
  const playChord = (freqs: number[], durationSec = 1.2) => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      freqs.forEach((f) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + durationSec);
      });
    } catch (e) {
      console.warn('Chord play error', e);
    }
  };

  // Percussion Synthesizer: Dum (Low deep resonant boom) and Tak (Sharp rim/snap)
  const playPercussion = (type: 'dum' | 'tak' | 'sakta' | 'tik') => {
    if (type === 'sakta') return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      if (type === 'dum') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.28);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else {
        // Tak / sharp snap
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1100, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.08);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      console.warn('Percussion play error', e);
    }
  };

  // --- Maqamat Tab State ---
  const [selectedMaqamId, setSelectedMaqamId] = useState<string>('rast');
  const [isPlayingScale, setIsPlayingScale] = useState<boolean>(false);
  const activeMaqam = MAQAMAT_CATALOG.find((m) => m.id === selectedMaqamId) || MAQAMAT_CATALOG[0];

  const playMaqamScale = async (maqam: MaqamDefinition) => {
    if (isPlayingScale) return;
    setIsPlayingScale(true);
    const freqs = [...maqam.scaleFrequencies];
    // Ascending then descending
    const fullSequence = [...freqs, ...freqs.slice(0, -1).reverse()];

    for (let i = 0; i < fullSequence.length; i++) {
      playTone(fullSequence[i], 0.45);
      await new Promise((res) => setTimeout(res, 380));
    }
    setIsPlayingScale(false);
  };

  // --- Iqa'at Rhythm Sequencer State ---
  const [selectedIqaId, setSelectedIqaId] = useState<string>('maqsum');
  const [bpm, setBpm] = useState<number>(104);
  const [isPlayingIqa, setIsPlayingIqa] = useState<boolean>(false);
  const [currentBeatIdx, setCurrentBeatIdx] = useState<number>(-1);
  const activeIqa = ARAB_IQAAT_CATALOG.find((i) => i.id === selectedIqaId) || ARAB_IQAAT_CATALOG[0];

  const timerRef = useRef<number | null>(null);
  const beatRef = useRef<number>(0);

  useEffect(() => {
    setBpm(activeIqa.bpmDefault);
    if (isPlayingIqa) {
      stopRhythm();
    }
  }, [selectedIqaId]);

  const stopRhythm = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlayingIqa(false);
    setCurrentBeatIdx(-1);
    beatRef.current = 0;
  };

  const startRhythm = () => {
    stopRhythm();
    setIsPlayingIqa(true);
    beatRef.current = 0;

    // ms per sub-beat: 60000 / (bpm * subdivisions per beat)
    // Here subdivision in 4/4 is 8 eighths -> 2 eighths per beat -> interval = (60000 / bpm) / 2
    const intervalMs = (60000 / bpm) / (activeIqa.subdivision / activeIqa.meterBeats);

    const step = () => {
      const idx = beatRef.current % activeIqa.pattern.length;
      setCurrentBeatIdx(idx);
      const beat = activeIqa.pattern[idx];
      playPercussion(beat.type);
      beatRef.current = beatRef.current + 1;
    };

    step();
    timerRef.current = window.setInterval(step, Math.max(80, intervalMs));
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  // --- Quiz State ---
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const currentQ = MUSIC_STUDIO_QUIZ[quizIndex];

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const nextQuiz = () => {
    if (quizIndex < MUSIC_STUDIO_QUIZ.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className={`relative w-full rounded-2xl border transition-all duration-300 flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none p-4 md:p-6 overflow-y-auto' : 'p-4 md:p-6'
      } ${
        isContrast
          ? 'bg-black text-white border-amber-400'
          : isLight
          ? 'bg-gradient-to-br from-amber-50 via-purple-50 to-slate-100 text-slate-900 border-amber-200 shadow-xl'
          : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-slate-100 border-amber-500/30 shadow-2xl'
      }`}
    >
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-purple-600 text-white shadow-lg shadow-amber-500/20">
            <Music className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
              <span>{isArabic ? 'استوديو النظريات والموسيقى العربية والغربية' : 'Music Theory & Arab/Western Musicology Studio'}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/40">
                24-EDO Quarter-Tone Synth
              </span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'محاكاة صوتية تفاعلية: المقامات الشرقية، السيكاه (الربع تون)، الإيقاعات والضروب الكلاسيكية، وتوافقيات الهارموني'
                : 'Interactive acoustic workstation: Oriental Maqamat, 24-EDO microtones, classical Arab rhythms, and Western harmony'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              soundEnabled
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-rose-500/20 text-rose-400 border-rose-500/40 hover:bg-rose-500/30'
            }`}
            title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">{soundEnabled ? (isArabic ? 'الصوت مفعّل' : 'Sound ON') : (isArabic ? 'الصوت مكتوم' : 'Sound OFF')}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar border-b border-slate-800/60">
        {[
          { id: 'maqamat', labelAr: 'المقامات الشرقية والربع تون', labelEn: 'Oriental Maqamat', icon: Compass },
          { id: 'iqaat', labelAr: 'الإيقاعات والضروب العربية', labelEn: 'Arab Rhythms (Iqa\'at)', icon: Activity },
          { id: 'solfege', labelAr: 'التدوين والصولفيج الصوتي', labelEn: 'Staff & Solfège', icon: Sliders },
          { id: 'harmony', labelAr: 'الهارموني والقفلات الغربية', labelEn: 'Western Harmony', icon: Layers },
          { id: 'organology', labelAr: 'الآلات ورواد الموسيقى', labelEn: 'Organology & Masters', icon: BookOpen },
          { id: 'quiz', labelAr: 'اختبار الاستماع والنظريات', labelEn: 'Ear & Theory Quiz', icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MusicStudioTab)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{isArabic ? tab.labelAr : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Oriental Maqamat & Microtone Synthesizer */}
      {activeTab === 'maqamat' && (
        <div className="py-4 space-y-6">
          {/* Maqam Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {MAQAMAT_CATALOG.map((m) => {
              const isSel = m.id === selectedMaqamId;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMaqamId(m.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isSel
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="text-sm md:text-base font-bold">{isArabic ? m.nameAr : m.nameEn}</div>
                  <div className="text-xs text-slate-400 mt-1">{isArabic ? m.rootNoteAr : m.rootNote}</div>
                </button>
              );
            })}
          </div>

          {/* Active Maqam Detailed Panel */}
          <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-5 md:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-amber-400 flex items-center gap-3">
                  <span>{isArabic ? activeMaqam.nameAr : activeMaqam.nameEn}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700">
                    {isArabic ? `الركوز: ${activeMaqam.rootNoteAr}` : `Root: ${activeMaqam.rootNote}`}
                  </span>
                </h3>
                <p className="text-sm text-slate-300 mt-1 italic">
                  {isArabic ? activeMaqam.moodAr : activeMaqam.moodEn}
                </p>
              </div>

              {/* Play Full Scale Button */}
              <button
                onClick={() => playMaqamScale(activeMaqam)}
                disabled={isPlayingScale}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all ${
                  isPlayingScale
                    ? 'bg-purple-700 opacity-80 cursor-wait'
                    : 'bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 shadow-amber-500/25 active:scale-95'
                }`}
              >
                <Play className={`w-4 h-4 ${isPlayingScale ? 'animate-spin' : ''}`} />
                <span>
                  {isPlayingScale
                    ? (isArabic ? 'عزف الديوان كاملاً...' : 'Playing Scale...')
                    : (isArabic ? 'استماع لسلم المقام صعوداً وهبوطاً' : 'Play Full Scale (Asc/Desc)')}
                </span>
              </button>
            </div>

            {/* Interactive Notes Bar */}
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-2 block uppercase tracking-wider">
                {isArabic ? 'درجات المقام الصوتية (اضغط للاستماع للدرجة والنغمات الميكروتونية / الربع تون)' : 'Interactive Scale Degrees (Click to Play Quarter-Tones)'}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {activeMaqam.scaleNotes.map((note, idx) => {
                  const freq = activeMaqam.scaleFrequencies[idx];
                  const isQuarterTone = note.includes('-');
                  return (
                    <button
                      key={idx}
                      onClick={() => playTone(freq, 0.6)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 ${
                        isQuarterTone
                          ? 'bg-purple-950/60 border-purple-500/70 text-purple-300 ring-1 ring-purple-400/40'
                          : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-amber-400'
                      }`}
                    >
                      <span className="text-xs text-slate-400 font-mono">#{idx + 1}</span>
                      <span className="text-lg font-black tracking-tight">{note}</span>
                      <span className="text-[11px] font-mono text-amber-400/90">{freq.toFixed(1)} Hz</span>
                      {isQuarterTone && (
                        <span className="text-[10px] px-1.5 py-0.2 mt-1 rounded bg-purple-500/30 text-purple-200 font-bold">
                          {isArabic ? 'ربع تون' : '1/4 Tone'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Structure & Ajnas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'صيغة الأبعاد النغمية' : 'Scale Formula'}
                </div>
                <div className="text-sm font-bold text-slate-100">{isArabic ? activeMaqam.formulaAr : activeMaqam.formulaEn}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'جنس الأصل وجنس الفرع' : 'Ajnas (Tetrachords)'}
                </div>
                <div className="text-xs font-medium text-slate-200 space-y-1">
                  <div>{isArabic ? activeMaqam.jinsAsasAr : activeMaqam.jinsAsasEn}</div>
                  <div className="text-slate-400">{isArabic ? activeMaqam.jinsFarAr : activeMaqam.jinsFarEn}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  {isArabic ? 'من شوارد التراث الموسيقي المصري' : 'Masterpiece Reference'}
                </div>
                <div className="text-xs font-medium text-slate-200">
                  {isArabic ? activeMaqam.famousPieceAr : activeMaqam.famousPieceEn}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Classical Arab Iqa'at Drum Machine */}
      {activeTab === 'iqaat' && (
        <div className="py-4 space-y-6">
          {/* Iqa Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {ARAB_IQAAT_CATALOG.map((iqa) => {
              const isSel = iqa.id === selectedIqaId;
              return (
                <button
                  key={iqa.id}
                  onClick={() => setSelectedIqaId(iqa.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isSel
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold shadow-lg shadow-purple-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="text-sm font-bold">{isArabic ? iqa.nameAr : iqa.nameEn}</div>
                  <div className="text-xs text-amber-400 mt-1 font-mono">{iqa.meter}</div>
                </button>
              );
            })}
          </div>

          {/* Drum Sequencer Machine Panel */}
          <div className="rounded-2xl border border-purple-500/30 bg-slate-900/80 p-5 md:p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-purple-400 flex items-center gap-3">
                  <span>{isArabic ? activeIqa.nameAr : activeIqa.nameEn}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-mono font-bold border border-slate-700">
                    {activeIqa.meter}
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  {isArabic ? activeIqa.descriptionAr : activeIqa.descriptionEn}
                </p>
              </div>

              {/* Play / Stop Drum Machine Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={isPlayingIqa ? stopRhythm : startRhythm}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all ${
                    isPlayingIqa
                      ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/25'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25 active:scale-95'
                  }`}
                >
                  {isPlayingIqa ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlayingIqa ? (isArabic ? 'إيقاف الإيقاع' : 'Stop Rhythm') : (isArabic ? 'تشغيل المسرع الإيقاعي' : 'Start Drum Loop')}</span>
                </button>
              </div>
            </div>

            {/* Tempo BPM Slider */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-slate-200">{isArabic ? 'سرعة الإيقاع (BPM):' : 'Tempo (BPM):'}</span>
                <span className="font-mono text-lg font-black text-amber-400">{bpm}</span>
              </div>
              <div className="flex-1 max-w-xs">
                <input
                  type="range"
                  min="50"
                  max="180"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Animated Rhythm Step Sequencer Grid */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {isArabic ? 'شريط نبضات الضرب الموسيقي (دم وتك وسكتات)' : 'Drum Beat Sequence (Dum, Tak & Sakta)'}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {activeIqa.pattern.map((beat, idx) => {
                  const isActiveBeat = currentBeatIdx === idx;
                  const isDum = beat.type === 'dum';
                  const isTak = beat.type === 'tak';

                  return (
                    <div
                      key={idx}
                      onClick={() => playPercussion(beat.type)}
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        isActiveBeat
                          ? 'ring-4 ring-amber-400 scale-105 shadow-xl shadow-amber-500/30'
                          : ''
                      } ${
                        isDum
                          ? 'bg-amber-950/70 border-amber-500 text-amber-300'
                          : isTak
                          ? 'bg-purple-950/70 border-purple-500 text-purple-300'
                          : 'bg-slate-900 border-slate-800 text-slate-600'
                      }`}
                    >
                      <span className="text-[10px] text-slate-500 font-mono">#{idx + 1}</span>
                      <span className="text-xl font-black mt-1">
                        {isDum ? (isArabic ? 'دُمْ' : 'DUM') : isTak ? (isArabic ? 'تَكْ' : 'TAK') : (isArabic ? 'ـ' : 'REST')}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        {isDum ? (isArabic ? 'قاع' : 'Bass') : isTak ? (isArabic ? 'حافة' : 'Rim') : (isArabic ? 'سكتة' : 'Sakta')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Manual Stroke Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => playPercussion('dum')}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-base shadow-lg shadow-amber-600/30 active:scale-95"
              >
                {isArabic ? 'عزف يدوي: دُمْ (Dum)' : 'Manual DUM (Bass)'}
              </button>
              <button
                onClick={() => playPercussion('tak')}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-base shadow-lg shadow-purple-600/30 active:scale-95"
              >
                {isArabic ? 'عزف يدوي: تَكْ (Tak)' : 'Manual TAK (Rim)'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Staff Notation & Solfège Pitch Studio */}
      {activeTab === 'solfege' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'لوحة النغمات الميكروتونية والصولفيج (سلم الـ ٢٤ ربع تون)' : '24-EDO Quarter-Tone & Solfège Keyboard'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'انقر على أي درجة صوتية لسماع ترددها الهيرتزي بدقة متناهية وفق معيار مؤتمر القاهرة ١٩٣٢.'
                : 'Click any note to play its exact microtonal frequency standardized in the 1932 Cairo Congress of Arab Music.'}
            </p>
          </div>

          {/* Chromatic 24-EDO Keyboard Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {QUARTER_TONE_PITCHES.map((p, idx) => {
              const isQuarter = p.accidental === 'half-flat' || p.accidental === 'half-sharp';
              const isAccidental = p.accidental === '#' || p.accidental === 'b';
              return (
                <button
                  key={idx}
                  onClick={() => playTone(p.frequency, 0.5)}
                  className={`p-3 rounded-xl border text-center transition-all hover:scale-105 active:scale-95 ${
                    isQuarter
                      ? 'bg-purple-950/80 border-purple-500 text-purple-200'
                      : isAccidental
                      ? 'bg-indigo-950/70 border-indigo-600 text-indigo-200'
                      : 'bg-slate-800 border-slate-700 text-white'
                  }`}
                >
                  <div className="text-base font-black">{p.note}</div>
                  <div className="text-xs font-medium text-amber-300 mt-0.5">{p.arabicName}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">{p.frequency.toFixed(1)} Hz</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Western Harmony & Cadences */}
      {activeTab === 'harmony' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'الهارموني الغربي والتآلفات والتصريف الصوتي (Cadences)' : 'Western Harmony & Harmonic Cadences'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'استمع إلى أشهر القفلات الهارمونية في سلم دو الكبير (C Major) مع التصريف الصوتي النقي.'
                : 'Listen to canonical harmonic cadences in the key of C Major with polyphonic voice leading.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WESTERN_CADENCES.map((cad) => (
              <div key={cad.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-100">{isArabic ? cad.nameAr : cad.nameEn}</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {cad.progression}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{isArabic ? cad.descriptionAr : cad.descriptionEn}</p>
                <button
                  onClick={() => {
                    if (cad.id === 'authentic') {
                      // G Major (G3, B3, D4) -> C Major (C4, E4, G4)
                      playChord([196.0, 246.94, 293.66], 0.7);
                      setTimeout(() => playChord([261.63, 329.63, 392.0], 1.2), 650);
                    } else if (cad.id === 'plagal') {
                      // F Major (F3, A3, C4) -> C Major (C4, E4, G4)
                      playChord([174.61, 220.0, 261.63], 0.7);
                      setTimeout(() => playChord([261.63, 329.63, 392.0], 1.2), 650);
                    } else if (cad.id === 'deceptive') {
                      // G Major -> A minor (A3, C4, E4)
                      playChord([196.0, 246.94, 293.66], 0.7);
                      setTimeout(() => playChord([220.0, 261.63, 329.63], 1.2), 650);
                    } else {
                      // Half Cadence: C Major -> G Major
                      playChord([261.63, 329.63, 392.0], 0.7);
                      setTimeout(() => playChord([196.0, 246.94, 293.66], 1.2), 650);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 text-xs font-bold transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isArabic ? `عزف القفلة (${cad.progression})` : `Play Cadence (${cad.progression})`}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Organology & Masters */}
      {activeTab === 'organology' && (
        <div className="py-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold text-amber-400 mb-1">
              {isArabic ? 'علم الآلات الموسيقية (الأورجانولوجي) والتراث المصري' : 'Organology & Egyptian Classical Heritage'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'تصنيف الآلات الوترية والهوائية والجلدية وتاريخ رواد النهضة الموسيقية المصرية.'
                : 'Classification of chordophones, aerophones, membranophones, and pioneers of the Egyptian music renaissance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSTRUMENTS_CATALOG.map((inst) => (
              <div key={inst.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-amber-400">{isArabic ? inst.nameAr : inst.nameEn}</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
                    {isArabic ? inst.classificationAr : inst.classification}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{isArabic ? inst.descriptionAr : inst.descriptionEn}</p>
                <div className="text-xs text-slate-400 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                  <span className="font-semibold text-purple-300">{isArabic ? 'إضاءة تاريخية: ' : 'Historical Note: '}</span>
                  {inst.historicalNoteAr}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: Quiz / Solfège Ear Training */}
      {activeTab === 'quiz' && (
        <div className="py-4 max-w-2xl mx-auto space-y-6">
          {!showResult ? (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/90 p-6 space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  {isArabic ? `السؤال ${quizIndex + 1} من ${MUSIC_STUDIO_QUIZ.length}` : `Question ${quizIndex + 1} of ${MUSIC_STUDIO_QUIZ.length}`}
                </span>
                <span className="font-bold text-amber-400">
                  {isArabic ? `النقاط: ${score}` : `Score: ${score}`}
                </span>
              </div>

              <h4 className="text-lg font-black text-slate-100 leading-snug">
                {isArabic ? currentQ.questionAr : currentQ.questionEn}
              </h4>

              <div className="space-y-2.5">
                {currentQ.optionsAr.map((optAr, idx) => {
                  const optEn = currentQ.optionsEn[idx];
                  const isChosen = selectedAnswer === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700';
                  if (selectedAnswer !== null) {
                    if (isCorrect) btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    else if (isChosen) btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    else btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-start p-4 rounded-xl border transition-all text-xs md:text-sm ${btnStyle}`}
                    >
                      {isArabic ? optAr : optEn}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>{isArabic ? 'التفسير العلمي والموسيقي:' : 'Explanation:'}</span>
                  </div>
                  <p>{isArabic ? currentQ.explanationAr : currentQ.explanationEn}</p>
                </div>
              )}

              {selectedAnswer !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={nextQuiz}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
                  >
                    {quizIndex < MUSIC_STUDIO_QUIZ.length - 1
                      ? (isArabic ? 'السؤال التالي ←' : 'Next Question →')
                      : (isArabic ? 'عرض النتيجة النهائية' : 'Show Final Results')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-900/90 p-8 text-center space-y-4">
              <Award className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
              <h3 className="text-2xl font-black text-slate-100">
                {isArabic ? 'اكتمل اختبار الاستماع والنظريات الموسيقية!' : 'Ear Training & Music Theory Quiz Completed!'}
              </h3>
              <p className="text-sm text-slate-300">
                {isArabic
                  ? `لقد حققت ${score} من أصل ${MUSIC_STUDIO_QUIZ.length} أسئلة صحيحة.`
                  : `You scored ${score} out of ${MUSIC_STUDIO_QUIZ.length}.`}
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isArabic ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
