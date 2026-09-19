import React, { useState, useRef } from 'react';
import type { Language } from '../../i18n/translations';
import {
  CHINESE_PINYIN_TONES_DATA,
  CHINESE_RADICALS_DATA,
  CHINESE_GRAMMAR_DATA,
  CHINESE_SITUATIONS_DATA,
  CHINESE_LISTENING_TRACKS,
  type ChinesePinyinToneRule,
  type ChineseRadicalItem,
  type ChineseGrammarPattern,
  type ChineseListeningTrack,
} from '../../data/audioLab/chineseAudioLabData';
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BookOpen,
  Headphones,
  Sparkles,
  Zap,
  HelpCircle,
  ArrowRight,
  Maximize2,
  Minimize2,
  FileText,
  Activity,
  Award,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

export type ChineseStudioTab = 'pinyin_tones' | 'radicals' | 'grammar' | 'situations' | 'listening';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: ChineseStudioTab;
}

export const ChineseLanguageStudio: React.FC<Props> = ({
  lang: _lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'pinyin_tones',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<ChineseStudioTab>(initialTab);

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Tab 1: Pinyin & Tones
  const [selectedPinyinTone, setSelectedPinyinTone] = useState<ChinesePinyinToneRule>(CHINESE_PINYIN_TONES_DATA[0]);
  const [pinyinCategoryFilter, setPinyinCategoryFilter] = useState<'all' | 'tones' | 'sandhi' | 'initials' | 'finals'>('all');

  // Tab 2: Radicals
  const [selectedRadical, setSelectedRadical] = useState<ChineseRadicalItem>(CHINESE_RADICALS_DATA[0]);

  // Tab 3: Grammar
  const [selectedGrammar, setSelectedGrammar] = useState<ChineseGrammarPattern>(CHINESE_GRAMMAR_DATA[0]);

  // Tab 4: Situations Trainer
  const [situationIndex, setSituationIndex] = useState<number>(0);
  const [chosenOptionIndex, setChosenOptionIndex] = useState<number | null>(null);
  const [situationScore, setSituationScore] = useState<number>(0);

  // Tab 5: Listening Comprehension
  const [activeTrack, setActiveTrack] = useState<ChineseListeningTrack>(CHINESE_LISTENING_TRACKS[0]);
  const [isPlayingScript, setIsPlayingScript] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const trackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Speech synthesis in zh-CN
  const speakMandarin = (text: string, customRate?: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = customRate || speechRate;
    utterance.pitch = 1.0;

    utterance.onstart = () => setCurrentlyPlayingText(text);
    utterance.onend = () => {
      setCurrentlyPlayingText(null);
      setIsPlayingScript(false);
    };
    utterance.onerror = () => {
      setCurrentlyPlayingText(null);
      setIsPlayingScript(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setCurrentlyPlayingText(null);
    setIsPlayingScript(false);
    if (trackTimeoutRef.current) clearTimeout(trackTimeoutRef.current);
  };

  const filteredPinyin = pinyinCategoryFilter === 'all'
    ? CHINESE_PINYIN_TONES_DATA
    : CHINESE_PINYIN_TONES_DATA.filter((p) => p.category === pinyinCategoryFilter);

  const currentSituation = CHINESE_SITUATIONS_DATA[situationIndex];

  // Theme container classes
  const containerClasses = isFullscreen
    ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0 p-4 md:p-6 transition-all duration-300 ' +
      (isLight ? 'bg-slate-50 text-slate-900' : isContrast ? 'bg-black text-amber-200' : 'bg-slate-950 text-slate-100')
    : 'relative w-full rounded-2xl border p-4 md:p-6 transition-all duration-300 ' +
      (isLight
        ? 'bg-gradient-to-br from-red-50/50 via-amber-50/30 to-white border-red-200/70 text-slate-900 shadow-xl'
        : isContrast
        ? 'bg-black border-yellow-400 text-yellow-300 shadow-2xl'
        : 'bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/40 border-red-900/40 text-slate-100 shadow-2xl backdrop-blur-xl');

  return (
    <div className={containerClasses} dir="rtl">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-red-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-500/20">
            🇨🇳
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                استوديو اللغة الصينية التفاعلي (汉语语音与文法国王)
              </h2>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                HSK 1-3 • MoE
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              محطة الصوتيات، النغمات، الجذور المعجمية، التراكيب النحوية، والمواقف اليومية للثانوية العامة والبكالوريا المصرية
            </p>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          {/* Audio Speech Rate Selector */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
            <span>سرعة النطق:</span>
            <button
              onClick={() => setSpeechRate(0.7)}
              className={`px-1.5 py-0.5 rounded ${speechRate === 0.7 ? 'bg-red-600 text-white font-bold' : 'hover:bg-slate-700'}`}
            >
              0.7x
            </button>
            <button
              onClick={() => setSpeechRate(0.85)}
              className={`px-1.5 py-0.5 rounded ${speechRate === 0.85 ? 'bg-red-600 text-white font-bold' : 'hover:bg-slate-700'}`}
            >
              0.85x
            </button>
            <button
              onClick={() => setSpeechRate(1.0)}
              className={`px-1.5 py-0.5 rounded ${speechRate === 1.0 ? 'bg-red-600 text-white font-bold' : 'hover:bg-slate-700'}`}
            >
              1.0x
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            title={isFullscreen ? 'تصغير الشاشة' : 'وضع الشاشة الكاملة للمختبر'}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5 text-amber-400" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-3 border-b border-slate-800/80 no-scrollbar">
        {[
          { id: 'pinyin_tones', label: 'الصوتيات والنغمات (拼音与声调)', icon: Volume2 },
          { id: 'radicals', label: 'الجذور وبناء الرموز (偏旁部首)', icon: LayersIcon },
          { id: 'grammar', label: 'قواعد التراكيب النحوية (语法要点)', icon: BookOpen },
          { id: 'situations', label: 'تدريب مواقف الامتحان (情景交际)', icon: Sparkles },
          { id: 'listening', label: 'محطة الاستماع التفاعلي (听力理解)', icon: Headphones },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as ChineseStudioTab);
                stopAudio();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: PINYIN & TONES */}
      {activeTab === 'pinyin_tones' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Left Column: List of Tone Rules */}
          <div className="lg:col-span-4 space-y-4">
            {/* Filter pills */}
            <div className="flex gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
              {(['all', 'tones', 'sandhi', 'initials', 'finals'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPinyinCategoryFilter(filter)}
                  className={`flex-1 py-1.5 rounded-lg text-center font-medium transition ${
                    pinyinCategoryFilter === filter
                      ? 'bg-red-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter === 'all' && 'الكل'}
                  {filter === 'tones' && 'النغمات 4'}
                  {filter === 'sandhi' && 'تغير النغمات'}
                  {filter === 'initials' && 'الحروف الأولى'}
                  {filter === 'finals' && 'النهايات'}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredPinyin.map((item) => (
                <button
                  key={item.symbol + item.nameEn}
                  onClick={() => {
                    setSelectedPinyinTone(item);
                    speakMandarin(item.pinyin);
                  }}
                  className={`w-full p-3.5 rounded-xl text-right transition border ${
                    selectedPinyinTone.symbol === item.symbol
                      ? 'bg-red-950/60 border-red-500/80 shadow-md text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-amber-400 font-mono">{item.symbol}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {item.ipa}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-300">{item.nameAr}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Detail Workbench */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-red-950/30 border border-red-900/50 shadow-xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold text-amber-400 font-mono">
                      {selectedPinyinTone.symbol}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-white">{selectedPinyinTone.nameAr}</h3>
                      <p className="text-xs text-slate-400">{selectedPinyinTone.nameEn} • {selectedPinyinTone.ipa}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => speakMandarin(selectedPinyinTone.examples[0]?.audioText || selectedPinyinTone.pinyin)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold shadow-lg shadow-red-600/30 transition"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>استمع لنطق الرمز</span>
                </button>
              </div>

              {/* Pitch contour badge if available */}
              {selectedPinyinTone.pitchContour && (
                <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-2 rounded-lg">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>مستوى طبقة النغمة الصوتية (Pitch Contour): <strong>{selectedPinyinTone.pitchContour}</strong></span>
                </div>
              )}

              {/* Explanations */}
              <div className="space-y-3">
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                  {selectedPinyinTone.explanationAr}
                </p>
                <p className="text-xs text-slate-400 italic px-2">
                  {selectedPinyinTone.explanationEn}
                </p>
              </div>

              {/* Examples Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  أمثلة تطبيقية من منهج الثانوية العامة (示范词汇):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedPinyinTone.examples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => speakMandarin(ex.audioText)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 group ${
                        currentlyPlayingText === ex.audioText
                          ? 'bg-red-900/60 border-red-500 scale-105'
                          : 'bg-slate-900/60 border-slate-800 hover:border-red-500/50 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="text-2xl font-black text-amber-300 group-hover:scale-110 transition">
                        {ex.hanzi}
                      </span>
                      <span className="text-xs font-bold text-red-400 font-mono">{ex.pinyin}</span>
                      <span className="text-xs text-slate-300">{ex.meaningAr}</span>
                      <Volume2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 mt-1" />
                    </button>
                  ))}
                </div>
              </div>

              {/* MoE Exam Trap Tip */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/80 to-amber-950/40 border border-red-700/50 flex items-start gap-3 text-xs">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-amber-300 mb-1">فخ الامتحان ووصية النطق المتقن:</h5>
                  <p className="text-slate-200">{selectedPinyinTone.trapTipAr}</p>
                  <p className="text-slate-400 mt-1 italic">{selectedPinyinTone.trapTipEn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RADICALS */}
      {activeTab === 'radicals' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Radicals List */}
          <div className="lg:col-span-4 space-y-2 max-h-[550px] overflow-y-auto pr-1">
            {CHINESE_RADICALS_DATA.map((rad) => (
              <button
                key={rad.radical}
                onClick={() => {
                  setSelectedRadical(rad);
                  speakMandarin(rad.sampleCharacters[0]?.hanzi || rad.radical);
                }}
                className={`w-full p-3.5 rounded-xl text-right transition border flex items-center justify-between ${
                  selectedRadical.radical === rad.radical
                    ? 'bg-red-950/60 border-red-500/80 shadow-md text-white'
                    : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-amber-400">{rad.radical}</span>
                  <div>
                    <span className="text-sm font-bold text-white block">{rad.nameAr}</span>
                    <span className="text-xs text-slate-400">{rad.pinyin} • {rad.strokeCount} ضربات</span>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-amber-300 font-mono">
                  {rad.nameEn}
                </span>
              </button>
            ))}
          </div>

          {/* Radical Detail */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-red-950/30 border border-red-900/50 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-4xl font-black text-amber-300">
                    {selectedRadical.radical}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-white">{selectedRadical.nameAr}</h3>
                      <span className="text-sm font-mono text-red-400">({selectedRadical.pinyin})</span>
                    </div>
                    <p className="text-xs text-slate-400">{selectedRadical.nameEn} • عدد الضربات: {selectedRadical.strokeCount}</p>
                  </div>
                </div>

                <button
                  onClick={() => speakMandarin(selectedRadical.sampleCharacters[0]?.hanzi || selectedRadical.radical)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>

              {/* Meaning & Origin */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">الدلالة المعجمية للجذر الأصلي:</div>
                <p className="text-sm text-slate-200">{selectedRadical.originalMeaningAr}</p>
                <p className="text-xs text-slate-400 italic">{selectedRadical.originalMeaningEn}</p>
              </div>

              {/* Sample Characters with Structure Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  رموز مشتقة من هذا الجذر في المنهج الوزاري:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedRadical.sampleCharacters.map((sc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-red-500/40 transition flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-amber-300">{sc.hanzi}</span>
                        <button
                          onClick={() => speakMandarin(sc.hanzi)}
                          className="p-2 rounded-lg bg-slate-800 hover:bg-red-600/30 text-slate-300 hover:text-white transition"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-red-400 font-mono">{sc.pinyin}</div>
                        <div className="text-sm font-semibold text-white">{sc.meaningAr}</div>
                        <div className="text-xs text-slate-400">{sc.meaningEn}</div>
                      </div>
                      <div className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-amber-300/80 text-center border border-slate-700/50">
                        التركيب البنائي: {sc.structure}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GRAMMAR & SENTENCE PATTERNS */}
      {activeTab === 'grammar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Grammar List */}
          <div className="lg:col-span-4 space-y-2 max-h-[550px] overflow-y-auto pr-1">
            {CHINESE_GRAMMAR_DATA.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGrammar(g)}
                className={`w-full p-3.5 rounded-xl text-right transition border ${
                  selectedGrammar.id === g.id
                    ? 'bg-red-950/60 border-red-500/80 shadow-md text-white'
                    : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="text-sm font-bold text-white mb-1">{g.titleAr}</div>
                <div className="text-xs text-slate-400 font-mono truncate">{g.formula}</div>
                <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                  {g.category}
                </span>
              </button>
            ))}
          </div>

          {/* Grammar Detail */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-red-950/30 border border-red-900/50 shadow-xl space-y-5">
              <div className="pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  {selectedGrammar.titleEn}
                </span>
                <h3 className="text-2xl font-black text-white">{selectedGrammar.titleAr}</h3>
              </div>

              {/* Formula Banner */}
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-center font-mono">
                <span className="text-xs text-slate-400 block mb-1">معادلة التركيب الأساسية:</span>
                <span className="text-base md:text-lg font-black text-amber-300">{selectedGrammar.formula}</span>
              </div>

              {/* Explanation */}
              <div className="space-y-2">
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  {selectedGrammar.explanationAr}
                </p>
                <p className="text-xs text-slate-400 italic px-2">{selectedGrammar.explanationEn}</p>
              </div>

              {/* Examples Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  أمثلة نموذجية مع التحليل الصوتي والترجمة:
                </h4>
                <div className="space-y-3">
                  {selectedGrammar.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2"
                    >
                      <div className="text-xs font-bold text-amber-400">{rule.ruleAr}</div>
                      <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-lg font-black text-white">{rule.sampleSentence.hanzi}</div>
                          <div className="text-xs font-mono text-red-400">{rule.sampleSentence.pinyin}</div>
                          <div className="text-xs text-slate-300 mt-1">{rule.sampleSentence.meaningAr}</div>
                        </div>
                        <button
                          onClick={() => speakMandarin(rule.sampleSentence.hanzi)}
                          className="p-2.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-white transition"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistake Alert */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-700/50 flex items-start gap-3 text-xs">
                <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-amber-300 mb-1">الخطأ الشائع الأكثر تكراراً في امتحانات الثانوية:</h5>
                  <p className="text-slate-200">{selectedGrammar.commonMistakeAr}</p>
                  <p className="text-slate-400 mt-1 italic">{selectedGrammar.commonMistakeEn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: COMMUNICATIVE SITUATIONS */}
      {activeTab === 'situations' && (
        <div className="max-w-4xl mx-auto space-y-6 mt-6">
          {/* Situation Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-red-950/40 border border-red-900/60 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold text-slate-400">
                  موقف {situationIndex + 1} من {CHINESE_SITUATIONS_DATA.length}
                </span>
              </div>
              <div className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                الدرجة الحالية: {situationScore}
              </div>
            </div>

            {/* Scenario Header */}
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                {currentSituation.situationTitleEn}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                {currentSituation.situationTitleAr}
              </h3>
              <p className="text-sm text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {currentSituation.promptAr}
              </p>
            </div>

            {/* Dialogue context if any */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  {currentSituation.dialogueContext.speakerA} يسأل:
                </span>
                <div className="text-lg font-black text-white">
                  {currentSituation.dialogueContext.lineAHanzi}
                </div>
                <div className="text-xs font-mono text-red-400">
                  {currentSituation.dialogueContext.lineAPinyin}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  ({currentSituation.dialogueContext.lineAAr})
                </div>
              </div>
              <button
                onClick={() => speakMandarin(currentSituation.dialogueContext.lineAHanzi)}
                className="p-3 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white transition"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                اختر الرد الصيني الصحيح والمناسب للموقف:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {currentSituation.options.map((opt, idx) => {
                  const isSelected = chosenOptionIndex === idx;
                  const showResult = chosenOptionIndex !== null;
                  let btnStyle = 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200';

                  if (showResult) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-emerald-950/60 border-emerald-500 text-white';
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = 'bg-rose-950/60 border-rose-500 text-white';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showResult}
                      onClick={() => {
                        setChosenOptionIndex(idx);
                        speakMandarin(opt.textHanzi);
                        if (opt.isCorrect) {
                          setSituationScore((s) => s + 2);
                        }
                      }}
                      className={`p-4 rounded-xl border text-right transition flex items-center justify-between gap-4 ${btnStyle}`}
                    >
                      <div className="flex-1">
                        <div className="text-lg font-black">{opt.textHanzi}</div>
                        <div className="text-xs font-mono text-red-400">{opt.textPinyin}</div>
                        <div className="text-xs text-slate-300 mt-1">{opt.textAr}</div>
                        {showResult && isSelected && (
                          <div className="text-xs mt-2 text-slate-400 pt-2 border-t border-slate-800">
                            {opt.explanationAr}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speakMandarin(opt.textHanzi);
                          }}
                          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        {showResult && opt.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        )}
                        {showResult && isSelected && !opt.isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            {chosenOptionIndex !== null && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    setChosenOptionIndex(null);
                    setSituationIndex((i) => (i + 1) % CHINESE_SITUATIONS_DATA.length);
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-amber-500 transition"
                >
                  <span>الموقف التالي</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 5: LISTENING COMPREHENSION */}
      {activeTab === 'listening' && (
        <div className="max-w-4xl mx-auto space-y-6 mt-6">
          {/* Track Selection Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {CHINESE_LISTENING_TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track);
                  stopAudio();
                  setQuizAnswers({});
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                  activeTrack.id === track.id
                    ? 'bg-red-950/80 border-red-500 text-white'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {track.titleAr} ({track.level})
              </button>
            ))}
          </div>

          {/* Player Workbench */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-red-950/40 border border-red-900/60 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 font-bold">
                  {activeTrack.level} • {activeTrack.topic}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  {activeTrack.titleAr} ({activeTrack.titleEn})
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (isPlayingScript) {
                      stopAudio();
                    } else {
                      setIsPlayingScript(true);
                      speakMandarin(activeTrack.audioScriptHanzi);
                    }
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-amber-500 transition"
                >
                  {isPlayingScript ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlayingScript ? 'إيقاف مؤقت' : 'تشغيل التسجيل الوزاري'}</span>
                </button>

                <button
                  onClick={stopAudio}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="إعادة ضبط"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Script & Translation Toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  النص الصوتي المسموع (听力原文):
                </span>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{showTranscript ? 'إخفاء النص الصيني' : 'إظهار النص الصيني'}</span>
                </button>
              </div>

              {showTranscript && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <p className="text-base md:text-lg font-bold text-amber-300 leading-relaxed">
                    {activeTrack.audioScriptHanzi}
                  </p>
                  <p className="text-xs font-mono text-red-400 leading-relaxed">
                    {activeTrack.audioScriptPinyin}
                  </p>
                  <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    {activeTrack.translationAr}
                  </p>
                </div>
              )}
            </div>

            {/* Comprehension Quiz */}
            <div className="space-y-5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  أسئلة استيعاب المحادثة وفق نمط الورقة الامتحانية:
                </h4>
              </div>

              <div className="space-y-4">
                {activeTrack.questions.map((q, qIdx) => {
                  const answeredIdx = quizAnswers[qIdx];
                  const hasAnswered = answeredIdx !== undefined;

                  return (
                    <div
                      key={qIdx}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3"
                    >
                      <div>
                        <div className="text-sm font-black text-white">{q.questionAr}</div>
                        <div className="text-xs text-amber-300 font-bold mt-0.5">{q.questionHanzi}</div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, oIdx) => {
                          const isPicked = answeredIdx === oIdx;
                          let optStyle = 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700';

                          if (hasAnswered) {
                            if (oIdx === q.correctIndex) {
                              optStyle = 'bg-emerald-950/60 border-emerald-500 text-white font-bold';
                            } else if (isPicked && oIdx !== q.correctIndex) {
                              optStyle = 'bg-rose-950/60 border-rose-500 text-white';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={hasAnswered}
                              onClick={() => {
                                setQuizAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
                                speakMandarin(opt.textHanzi);
                              }}
                              className={`p-3 rounded-lg border text-right transition flex items-center justify-between text-xs ${optStyle}`}
                            >
                              <div>
                                <span className="font-bold block text-sm">{opt.textHanzi}</span>
                                <span className="text-[11px] text-slate-400">{opt.textAr}</span>
                              </div>
                              {hasAnswered && oIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              )}
                              {hasAnswered && isPicked && oIdx !== q.correctIndex && (
                                <XCircle className="w-4 h-4 text-rose-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                          <strong className="text-amber-400">تفسير الإجابة: </strong>
                          {q.explanationAr}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
