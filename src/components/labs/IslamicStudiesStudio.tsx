import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import {
  TAJWEED_RULES_DATA,
  MAQASID_CATEGORIES_DATA,
  SEERAH_MILESTONES_DATA,
  BIOETHICS_ISSUES_DATA,
  ISLAMIC_STUDIES_QUIZ_DATA,
  type TajweedRuleItem,
  type MaqasidCategory,
  type SeerahMilestone,
  type BioethicsIssue,
} from '../../data/islamicLab/islamicLabData';
import {
  Volume2,
  Square,
  CheckCircle2,
  XCircle,
  Layers,
  Scale,
  Compass,
  RotateCcw,
  BookOpen,
  Award,
  Brain,
  HelpCircle,
  ShieldCheck,
  Radio,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: IslamicStudioTab;
}

export type IslamicStudioTab = 'tajweed' | 'maqasid' | 'seerah' | 'bioethics' | 'quiz';

export const IslamicStudiesStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'tajweed',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<IslamicStudioTab>(initialTab);

  // Tab 1: Tajweed State
  const [selectedTajweed, setSelectedTajweed] = useState<TajweedRuleItem>(TAJWEED_RULES_DATA[0]);
  const [currentlyPlayingVerse, setCurrentlyPlayingVerse] = useState<string | null>(null);
  // Tab 2: Maqasid State
  const [selectedMaqsad, setSelectedMaqsad] = useState<MaqasidCategory>(MAQASID_CATEGORIES_DATA[0]);

  // Tab 3: Seerah State
  const [selectedMilestone, setSelectedMilestone] = useState<SeerahMilestone>(SEERAH_MILESTONES_DATA[0]);

  // Tab 4: Bioethics State
  const [selectedIssue, setSelectedIssue] = useState<BioethicsIssue>(BIOETHICS_ISSUES_DATA[0]);

  // Tab 5: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Sheikh Al-Hussary Recitation Audio Player State (حصرياً بصوت الشيخ محمود خليل الحصري - بلا نطق حاسوبي)
  const [recitationStyle, setRecitationStyle] = useState<'murattal' | 'muallim'>('murattal');
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop any active recitation when switching tabs or unmounting
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      setAudioError(null);
    };
  }, [activeTab]);

  const getHussaryAudioUrl = (surahNumber: number, ayahNumber: number, style: 'murattal' | 'muallim') => {
    const surahStr = String(surahNumber).padStart(3, '0');
    const ayahStr = String(ayahNumber).padStart(3, '0');
    const folder = style === 'muallim' ? 'Husary_Muallim_128kbps' : 'Husary_128kbps';
    return `https://everyayah.com/data/${folder}/${surahStr}${ayahStr}.mp3`;
  };

  // Authentic Quran Recitation by Sheikh Mahmoud Khalil Al-Hussary (فضيلة الشيخ محمود خليل الحصري رحمه الله)
  const playHussaryRecitation = (surahNumber: number, ayahNumber: number, verseText: string) => {
    // If clicking on the currently playing verse, stop playback
    if (currentlyPlayingVerse === verseText && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      return;
    }

    // Stop any existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setCurrentlyPlayingVerse(verseText);
    setAudioLoading(true);
    setAudioError(null);

    const primaryUrl = getHussaryAudioUrl(surahNumber, ayahNumber, recitationStyle);
    const audio = new Audio(primaryUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.oncanplay = () => {
      setAudioLoading(false);
    };

    audio.onplaying = () => {
      setAudioLoading(false);
    };

    audio.onended = () => {
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      audioRef.current = null;
    };

    audio.onerror = () => {
      // Automatic failover: if Muallim fails try Murattal, or vice versa
      const fallbackStyle = recitationStyle === 'muallim' ? 'murattal' : 'muallim';
      const fallbackUrl = getHussaryAudioUrl(surahNumber, ayahNumber, fallbackStyle);
      const fallbackAudio = new Audio(fallbackUrl);
      fallbackAudio.preload = 'auto';
      audioRef.current = fallbackAudio;

      fallbackAudio.oncanplay = () => setAudioLoading(false);
      fallbackAudio.onplaying = () => setAudioLoading(false);
      fallbackAudio.onended = () => {
        setCurrentlyPlayingVerse(null);
        setAudioLoading(false);
        audioRef.current = null;
      };
      fallbackAudio.onerror = () => {
        setAudioLoading(false);
        setCurrentlyPlayingVerse(null);
        setAudioError(isArabic ? 'تعذر تشغيل التسجيل الصوتي للآية حالياً بصوت الشيخ الحصري، يرجى التحقق من اتصال الشبكة.' : 'Could not stream verse audio by Sheikh Al-Hussary, please check your network connection.');
        audioRef.current = null;
      };
      fallbackAudio.play().catch(() => {
        setAudioLoading(false);
        setCurrentlyPlayingVerse(null);
        audioRef.current = null;
      });
    };

    audio.play().catch((err) => {
      console.warn('Audio play prevented by browser policy or network issue:', err);
      setAudioLoading(false);
      setCurrentlyPlayingVerse(null);
      audioRef.current = null;
    });
  };

  const handleQuizSubmit = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < ISLAMIC_STUDIES_QUIZ_DATA.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  const themeClasses = isContrast
    ? 'bg-black text-yellow-300 border-yellow-400'
    : isLight
    ? 'bg-slate-50 text-slate-900 border-slate-200'
    : 'bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950 text-emerald-50 border-emerald-900/60';

  const cardClasses = isContrast
    ? 'bg-black border border-yellow-400/80 shadow-none'
    : isLight
    ? 'bg-white border border-slate-200 shadow-sm'
    : 'bg-slate-900/80 backdrop-blur border border-emerald-500/20 shadow-xl shadow-emerald-950/30';

  return (
    <div
      className={`border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-2xl min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                {isArabic ? 'مختبر الدراسات الإسلامية التفاعلي' : 'Islamic Studies Interactive Studio'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ☪️ MoE Accredited
              </span>
            </div>
            <p className="text-xs md:text-sm text-emerald-300/80">
              {isArabic
                ? 'محاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية والذكاء الاصطناعي'
                : 'Interactive Tajweed recitation, Maqasid al-Sharia, Prophetic Seerah, and contemporary bioethics/AI ethics'}
            </p>
          </div>
        </div>

        {/* Studio Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-emerald-500/30">
          <button
            onClick={() => setActiveTab('tajweed')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'tajweed'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isArabic ? 'أحكام التجويد' : 'Tajweed Engine'}</span>
          </button>
          <button
            onClick={() => setActiveTab('maqasid')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'maqasid'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>{isArabic ? 'مقاصد الشريعة' : 'Maqasid Simulator'}</span>
          </button>
          <button
            onClick={() => setActiveTab('seerah')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'seerah'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isArabic ? 'السيرة والدستور' : 'Seerah & Charter'}</span>
          </button>
          <button
            onClick={() => setActiveTab('bioethics')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'bioethics'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{isArabic ? 'الأخلاقيات المعاصرة' : 'Contemporary Ethics'}</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{isArabic ? 'بنك المواقف والتقييم' : 'Scenario Quiz'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 text-emerald-300/80 hover:text-white rounded-lg hover:bg-emerald-800/30 transition-colors border border-emerald-500/30"
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-emerald-300" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* TAB 1: TAJWEED RECITATION ENGINE */}
      {activeTab === 'tajweed' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Rules List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'قائمة الأحكام القرآنية' : 'Quranic Tajweed Rules'}</span>
            </h3>
            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-1">
              {TAJWEED_RULES_DATA.map((rule) => (
                <button
                  key={rule.id}
                  onClick={() => setSelectedTajweed(rule)}
                  className={`p-3.5 rounded-xl text-start transition-all border ${
                    selectedTajweed.id === rule.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md shadow-emerald-950/40'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="font-bold text-sm">{isArabic ? rule.nameAr : rule.nameEn}</div>
                  <div className="text-xs text-emerald-400/80 mt-1">{isArabic ? rule.categoryAr : rule.categoryEn}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {rule.letters.map((l, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
                        {l}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Display & Quranic Audio */}
          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {isArabic ? selectedTajweed.categoryAr : selectedTajweed.categoryEn}
                </span>
                <h3 className="text-xl font-black mt-1">
                  {isArabic ? selectedTajweed.nameAr : selectedTajweed.nameEn}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                {selectedTajweed.letters.map((lettr, idx) => (
                  <span
                    key={idx}
                    className="w-8 h-8 rounded-lg bg-emerald-800/40 border border-emerald-400/40 flex items-center justify-center text-sm font-bold text-emerald-200 shadow"
                  >
                    {lettr}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-emerald-100/90">
              {isArabic ? selectedTajweed.descriptionAr : selectedTajweed.descriptionEn}
            </p>

            {/* Quranic Verse Examples with Sheikh Al-Hussary Audio Engine */}
            <div className="flex flex-col gap-4">
              {/* Sheikh Al-Hussary Attribution & Style Switcher Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-slate-950 to-teal-950/90 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-800/40 border border-emerald-400/40 flex items-center justify-center text-teal-300 shadow">
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-emerald-300 flex items-center gap-1.5">
                      <span>{isArabic ? 'تلاوات القرآن الكريم بصوت فضيلة الشيخ محمود خليل الحصري (رحمه الله)' : 'Quranic Recitation by Sheikh Mahmoud Khalil Al-Hussary'}</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-[10px] text-teal-300 border border-emerald-400/30 font-sans">
                        {isArabic ? 'شيخ عموم المقارئ المصرية' : 'Grand Sheikh of Egyptian Reciters'}
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-400/80 mt-0.5">
                      {isArabic
                        ? 'تلاوات قرآنية حقيقية تراعي مخارج الحروف، أحكام النون الساكنة والتنوين، المدود، والإقلاب بلا أي نطق اصطناعي.'
                        : 'Authentic recorded Tajweed recitations adhering strictly to classical Makhaarij and Ahkam without synthetic speech.'}
                    </p>
                  </div>
                </div>

                {/* Recitation Style Toggle (Murattal vs Muallim) */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-emerald-500/30 self-stretch md:self-auto justify-center">
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                      }
                      setCurrentlyPlayingVerse(null);
                      setRecitationStyle('murattal');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                      recitationStyle === 'murattal'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-emerald-300/70 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'المصحف المرتل' : 'Murattal'}
                  </button>
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                      }
                      setCurrentlyPlayingVerse(null);
                      setRecitationStyle('muallim');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                      recitationStyle === 'muallim'
                        ? 'bg-teal-600 text-white shadow'
                        : 'text-emerald-300/70 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'المصحف المعلم' : 'Muallim (Educational)'}
                  </button>
                </div>
              </div>

              {audioError && (
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{audioError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                {selectedTajweed.quranicExamples.map((ex, i) => {
                  const isThisVersePlaying = currentlyPlayingVerse === ex.verseText;
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-xl bg-slate-950/80 border transition-all ${
                        isThisVersePlaying
                          ? 'border-teal-400/90 ring-2 ring-teal-400/30 shadow-xl shadow-emerald-950/60'
                          : 'border-emerald-500/20 hover:border-emerald-500/40'
                      } flex flex-col gap-3.5`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-600/40 text-emerald-300">
                            سورة {ex.surahName} (الآية {ex.ayahNumber})
                          </span>
                          <span className="text-[11px] font-semibold text-teal-400 bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span>🎙️ تلاوة الشيخ الحصري</span>
                            <span className="text-emerald-300/70 font-normal">
                              ({recitationStyle === 'muallim' ? (isArabic ? 'المعلم' : 'Muallim') : (isArabic ? 'المرتل' : 'Murattal')})
                            </span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {isThisVersePlaying && !audioLoading && (
                            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-teal-950/70 border border-teal-500/30">
                              <span className="w-1 h-3 bg-teal-400 animate-pulse rounded-full" />
                              <span className="w-1 h-5 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '150ms' }} />
                              <span className="w-1 h-2 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '300ms' }} />
                              <span className="w-1 h-4 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '450ms' }} />
                            </div>
                          )}

                          <button
                            onClick={() => playHussaryRecitation(ex.surahNumber, ex.ayahNumber, ex.verseText)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                              isThisVersePlaying
                                ? 'bg-teal-400 text-slate-950 font-black shadow-lg shadow-teal-500/50'
                                : 'bg-emerald-700/80 hover:bg-emerald-600 text-white shadow'
                            }`}
                            title={isArabic ? 'استمع لتلاوة الآية مسجلة بصوت فضيلة الشيخ الحصري (أحكام تجويد منضبطة)' : 'Listen to authentic recitation by Sheikh Al-Hussary'}
                          >
                            {isThisVersePlaying ? (
                              audioLoading ? (
                                <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Square className="w-3.5 h-3.5 fill-current" />
                              )
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                            <span>
                              {isThisVersePlaying
                                ? (audioLoading
                                    ? (isArabic ? 'جارٍ تحميل التلاوة...' : 'Buffering recitation...')
                                    : (isArabic ? 'إيقاف التلاوة' : 'Stop Recitation'))
                                : (isArabic ? 'استمع لترتيل الشيخ الحصري' : 'Play Sheikh Al-Hussary Recitation')}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Quranic Text */}
                      <div className="text-xl md:text-2xl font-serif text-center py-3 text-emerald-100 tracking-wider bg-slate-900/40 rounded-lg border border-emerald-500/10 px-4">
                        ﴿ {ex.verseText} ﴾
                      </div>

                      {/* Tajweed Explanation & Pedagogical Breakdown */}
                      <div className="text-xs bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/20 text-emerald-200/90 leading-relaxed flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{isArabic ? 'موضع الحكم التجويدي: ' : 'Tajweed Target: '}</span>
                          <span className="font-mono bg-emerald-900/60 px-1.5 py-0.5 rounded text-teal-200 border border-emerald-500/30">
                            {ex.highlightedPart}
                          </span>
                        </div>
                        <p className="text-emerald-100/80 mt-1">
                          <strong>{isArabic ? 'الشرح والبيان: ' : 'Explanation: '}</strong>
                          {isArabic ? ex.explanationAr : ex.explanationEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAQASID AL-SHARIA SIMULATOR */}
      {activeTab === 'maqasid' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Scale className="w-4 h-4" />
              <span>{isArabic ? 'المقاصد الشرعية الكلية الخمس' : 'The Five Higher Sharia Objectives'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {MAQASID_CATEGORIES_DATA.map((maqsad) => (
                <button
                  key={maqsad.id}
                  onClick={() => setSelectedMaqsad(maqsad)}
                  className={`p-3.5 rounded-xl text-start transition-all border ${
                    selectedMaqsad.id === maqsad.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{isArabic ? maqsad.titleAr : maqsad.titleEn}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                      {maqsad.priorityLevel}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-500/40 text-xs font-bold text-teal-300">
                  {selectedMaqsad.priorityLevel}
                </span>
                <h3 className="text-xl font-black">{isArabic ? selectedMaqsad.titleAr : selectedMaqsad.titleEn}</h3>
              </div>
              <p className="text-sm text-emerald-200/90 mt-2 leading-relaxed">
                {isArabic ? selectedMaqsad.essentialAr : selectedMaqsad.essentialEn}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? 'التطبيقات الفقهية والنوازل المعاصرة' : 'Jurisprudential & Contemporary Applications'}
              </h4>

              {selectedMaqsad.cases.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 flex flex-col gap-3">
                  <div className="text-sm font-semibold text-emerald-300">
                    {isArabic ? c.scenarioAr : c.scenarioEn}
                  </div>
                  <div className="text-xs text-emerald-100/80 leading-relaxed bg-emerald-950/30 p-3 rounded-lg border border-emerald-500/20">
                    <strong>{isArabic ? 'التطبيق المقاصدي: ' : 'Purposive Application: '}</strong>
                    {isArabic ? c.applicationAr : c.applicationEn}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{isArabic ? c.fiqhMaximAr : c.fiqhMaximEn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SEERAH & CONSTITUTIONAL MILESTONES */}
      {activeTab === 'seerah' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>{isArabic ? 'المحطات الدستورية في السيرة' : 'Constitutional Milestones'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {SEERAH_MILESTONES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m)}
                  className={`p-3.5 rounded-xl text-start transition-all border ${
                    selectedMilestone.id === m.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{isArabic ? m.titleAr.split(':')[0] : m.titleEn.split(':')[0]}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono">
                      {m.yearHijri} هـ
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300">
                  العام {selectedMilestone.yearHijri} هـ
                </span>
                <h3 className="text-lg md:text-xl font-black">{isArabic ? selectedMilestone.titleAr : selectedMilestone.titleEn}</h3>
              </div>
              <p className="text-sm text-emerald-100/90 mt-3 leading-relaxed">
                {isArabic ? selectedMilestone.eventSummaryAr : selectedMilestone.eventSummaryEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>{isArabic ? 'المبدأ الدستوري الحاكم' : 'Governing Constitutional Principle'}</span>
              </h4>
              <p className="text-sm font-semibold text-teal-100">
                {isArabic ? selectedMilestone.constitutionalPrincipleAr : selectedMilestone.constitutionalPrincipleEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {isArabic ? 'الدروس الاستراتيجية والتنظيمية' : 'Strategic Lessons & Insights'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedMilestone.strategicLessonsAr : selectedMilestone.strategicLessonsEn).map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-emerald-200/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONTEMPORARY BIOETHICS & AI ETHICS */}
      {activeTab === 'bioethics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>{isArabic ? 'القضايا المعاصرة والنوازل' : 'Contemporary Dilemmas'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {BIOETHICS_ISSUES_DATA.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue)}
                  className={`p-3.5 rounded-xl text-start transition-all border ${
                    selectedIssue.id === issue.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="font-bold text-sm">{isArabic ? issue.titleAr : issue.titleEn}</div>
                  <span className="text-xs text-teal-400 font-mono mt-1 block uppercase">
                    {issue.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <h3 className="text-xl font-black">{isArabic ? selectedIssue.titleAr : selectedIssue.titleEn}</h3>
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-xs md:text-sm text-emerald-200/90 leading-relaxed">
                <strong>{isArabic ? 'الإشكالية المعاصرة: ' : 'Contemporary Dilemma: '}</strong>
                {isArabic ? selectedIssue.dilemmaAr : selectedIssue.dilemmaEn}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? 'الرؤية الشرعية وقرارات المجامع الفقهية' : 'Sharia Stance & Fiqh Academy Resolutions'}
              </h4>
              <p className="text-sm text-emerald-100 leading-relaxed">
                {isArabic ? selectedIssue.islamicStanceAr : selectedIssue.islamicStanceEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {isArabic ? 'الضوابط الفقهية والأخلاقية الحاكمة' : 'Guiding Ethical Principles'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedIssue.shariaGuidingPrinciplesAr : selectedIssue.shariaGuidingPrinciplesEn).map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-emerald-200/90">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs font-semibold text-teal-200">
              {isArabic ? selectedIssue.consensusResolutionAr : selectedIssue.consensusResolutionEn}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SCENARIO QUIZ & FORMATIVE EVALUATION */}
      {activeTab === 'quiz' && (
        <div className={`max-w-3xl mx-auto w-full ${cardClasses} rounded-2xl p-6 md:p-8 flex flex-col gap-6`}>
          <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryEn}
              </span>
              <h3 className="text-lg font-black mt-1">
                {isArabic ? `السؤال ${currentQIndex + 1} من ${ISLAMIC_STUDIES_QUIZ_DATA.length}` : `Question ${currentQIndex + 1} of ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-bold">
                {isArabic ? `النتيجة: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}` : `Score: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </span>
            </div>
          </div>

          <div className="text-base md:text-lg font-bold text-emerald-100 leading-relaxed">
            {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionEn}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {(isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsEn).map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].correctIndex;
              let btnStyle = 'bg-slate-950/60 border-emerald-500/20 text-emerald-100 hover:bg-emerald-900/20';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-600/30 border-emerald-400 text-white';
                } else if (isSelected) {
                  btnStyle = 'bg-red-600/30 border-red-400 text-white';
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleQuizSubmit(i)}
                  className={`p-4 rounded-xl border text-start transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span className="text-xs md:text-sm font-medium">{opt}</span>
                  {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                  {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex flex-col gap-2">
              <span className="text-xs font-bold text-emerald-300">
                {isArabic ? 'التعليل النموذجي: ' : 'Model Explanation: '}
              </span>
              <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
                {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationEn}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إعادة الاختبار' : 'Reset Quiz'}</span>
            </button>

            {isAnswerSubmitted && currentQIndex < ISLAMIC_STUDIES_QUIZ_DATA.length - 1 && (
              <button
                onClick={nextQuestion}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm shadow-lg shadow-emerald-700/40 transition-all"
              >
                {isArabic ? 'السؤال التالي ←' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
