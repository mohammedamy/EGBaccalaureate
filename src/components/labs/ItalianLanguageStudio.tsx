import React, { useState, useRef, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import { RealisticVocalTractSchematic, type ArticulatoryPlace } from './RealisticVocalTractSchematic';
import {
  ITALIAN_PHONETICS,
  ITALIAN_VERB_TENSES,
  ITALIAN_PRONOUNS,
  ITALIAN_PREPOSITIONS,
  ITALIAN_SITUATION_SCENARIOS,
  ITALIAN_LISTENING_TRACKS,
  type ItalianPhoneticRule,
  type ItalianVerbTenseRule,
  type ItalianPronounRule,
  type ItalianPrepositionRule,
  type ItalianListeningTrack,
} from '../../data/audioLab/italianAudioLabData';
import {
  Volume2,
  Play,
  Pause,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookOpen,
  Headphones,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  Compass,
  FileText,
  Activity,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { aiVoiceEngine } from '../../services/aiVoiceEngine';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: StudioTab;
}

export type StudioTab = 'fonetica' | 'tempi_verbali' | 'pronomi' | 'preposizioni' | 'situazioni' | 'ascolto';

export const ItalianLanguageStudio: React.FC<Props> = ({
  lang: _lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'fonetica',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>(initialTab);

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Tab 1: Phonetics
  const [selectedPhonetic, setSelectedPhonetic] = useState<ItalianPhoneticRule>(ITALIAN_PHONETICS[0]);

  const italianPlace = useMemo<ArticulatoryPlace>(() => {
    const sym = selectedPhonetic.symbol.toLowerCase();
    if (sym.includes('gli')) return 'palatal';
    if (sym.includes('gn')) return 'palatal';
    if (sym.includes('ci') || sym.includes('ce') || sym.includes('gi') || sym.includes('ge')) return 'post_alveolar';
    if (sym.includes('chi') || sym.includes('che') || sym.includes('ghi') || sym.includes('ghe')) return 'velar';
    if (sym.includes('sc')) return 'post_alveolar';
    if (sym.includes('z')) return 'alveolar';
    return 'alveolar';
  }, [selectedPhonetic.symbol]);

  // Tab 2: Verb Tenses
  const [selectedTense, setSelectedTense] = useState<ItalianVerbTenseRule>(ITALIAN_VERB_TENSES[0]);
  const [verbConjugationType, setVerbConjugationType] = useState<'are' | 'ere' | 'ire'>('are');

  // Tab 3: Pronouns
  const [selectedPronounCategory, setSelectedPronounCategory] = useState<ItalianPronounRule>(ITALIAN_PRONOUNS[0]);

  // Tab 4: Prepositions
  const [selectedPreposition, setSelectedPreposition] = useState<ItalianPrepositionRule>(ITALIAN_PREPOSITIONS[0]);

  // Tab 5: Situations Trainer
  const [currentSitIndex, setCurrentSitIndex] = useState<number>(0);
  const [chosenSitChoice, setChosenSitChoice] = useState<'correct' | 'trap' | null>(null);
  const [situationScore, setSituationScore] = useState<number>(0);

  // Tab 6: Listening Comprehension
  const [activeTrack, setActiveTrack] = useState<ItalianListeningTrack>(ITALIAN_LISTENING_TRACKS[0]);
  const [isPlayingTrack, setIsPlayingTrack] = useState<boolean>(false);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(-1);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});

  const trackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // AI Vocal Engine Italian pronunciation
  const speakItalian = (text: string, customRate?: number) => {
    aiVoiceEngine.speak(text, {
      lang: 'it-IT',
      rate: customRate || speechRate,
      onStart: () => setCurrentlyPlayingText(text),
      onEnd: () => setCurrentlyPlayingText(null),
      onError: () => setCurrentlyPlayingText(null),
    });
  };

  const stopAudio = () => {
    aiVoiceEngine.stopAll();
    setCurrentlyPlayingText(null);
    setIsPlayingTrack(false);
    setCurrentTurnIndex(-1);
    if (trackTimeoutRef.current) {
      clearTimeout(trackTimeoutRef.current);
    }
  };

  // Play dialogue sequentially with AI Vocal Engine
  const playListeningTrack = (track: ItalianListeningTrack) => {
    stopAudio();
    setIsPlayingTrack(true);

    const turns = track.turns.map((turn) => ({
      text: turn.textIt,
      lang: 'it-IT',
      delayAfterMs: 650,
    }));

    aiVoiceEngine.playDialogue(turns, 'it-IT', {
      rate: speechRate * 0.95,
      onTurnStart: (idx, turn) => {
        setCurrentTurnIndex(idx);
        setCurrentlyPlayingText(turn.text);
      },
      onTurnEnd: () => {
        setCurrentlyPlayingText(null);
      },
      onComplete: () => {
        setIsPlayingTrack(false);
        setCurrentTurnIndex(-1);
        setCurrentlyPlayingText(null);
      },
      onError: () => {
        setIsPlayingTrack(false);
        setCurrentTurnIndex(-1);
        setCurrentlyPlayingText(null);
      },
    });
  };

  const handleSituationChoice = (choice: 'correct' | 'trap') => {
    setChosenSitChoice(choice);
    if (choice === 'correct' && chosenSitChoice === null) {
      setSituationScore((prev) => prev + 1);
    }
  };

  const nextSituation = () => {
    setChosenSitChoice(null);
    setCurrentSitIndex((prev) => (prev + 1) % ITALIAN_SITUATION_SCENARIOS.length);
  };

  return (
    <div
      className={`border shadow-2xl overflow-hidden transition-all flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-3xl min-h-[750px]'
      } ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-slate-50 border-emerald-200 text-slate-800'
          : 'bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-900 border-emerald-800/40 text-slate-100'
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Top Header */}
      <div className="p-4 sm:p-6 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 bg-emerald-950/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-stone-200 to-red-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Headphones className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-emerald-400">
                Studio Linguistico di Italiano
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                🇮🇹 Italiano LV2
              </span>
            </div>
            <p className="text-xs text-slate-400">
              استوديو اللغة الإيطالية التفاعلي: النطق، قواعد الأزمنة، الضمائر، حروف الجر، ومواقف البابل شيت الوزارية
            </p>
          </div>
        </div>

        {/* Global Controls & AI Vocal Engine */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* AI Vocal Engine Badge */}
          <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1.5 rounded-2xl text-xs text-emerald-300 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-[11px]">AI Vocal Engine (HD)</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-2xl border border-slate-800 text-xs">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-300">سرعة الصوت:</span>
            {[0.75, 0.85, 1.0].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2 py-0.5 rounded-lg font-mono font-bold transition-all ${
                  speechRate === rate
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          title={isFullscreen ? 'خروج من ملء الشاشة' : 'ملء الشاشة'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-emerald-400" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-2 p-3 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto">
        {[
          { id: 'fonetica', labelAr: 'النطق والصوتيات', labelIt: 'Fonetica & Doppie', icon: Volume2 },
          { id: 'tempi_verbali', labelAr: 'تصريف الأزمنة', labelIt: 'Tempi Verbali', icon: Activity },
          { id: 'pronomi', labelAr: 'الضمائر و NE', labelIt: 'Pronomi & Ne', icon: Layers },
          { id: 'preposizioni', labelAr: 'حروف الجر المدمجة', labelIt: 'Preposizioni', icon: Compass },
          { id: 'situazioni', labelAr: 'المواقف والخدع', labelIt: 'Situazioni Quotidiane', icon: Zap },
          { id: 'ascolto', labelAr: 'الاستماع والامتحانات', labelIt: 'Comprensione Orale', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                stopAudio();
                setActiveTab(tab.id as StudioTab);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.labelIt}</span>
              <span className="opacity-70 text-[10px]">({tab.labelAr})</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-6">
        {/* TAB 1: FONETICA & DOPPIE */}
        {activeTab === 'fonetica' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Rule Selector */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> قواعد النطق الإيطالي الأصيل
              </h3>
              <div className="space-y-2">
                {ITALIAN_PHONETICS.map((rule) => {
                  const isSelected = selectedPhonetic.symbol === rule.symbol;
                  return (
                    <button
                      key={rule.symbol}
                      onClick={() => setSelectedPhonetic(rule)}
                      className={`w-full text-start p-3 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-500/80 shadow-md shadow-emerald-950/50'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-emerald-300 font-mono">
                          {rule.symbol}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{rule.ipa}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-300 mt-1">{rule.nameAr}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rule Inspection & Audio Samples */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-lg font-black text-white">{selectedPhonetic.nameEn}</h4>
                    <p className="text-xs text-emerald-400 font-bold">{selectedPhonetic.nameAr}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 font-mono text-emerald-300 text-xs font-bold">
                      IPA: {selectedPhonetic.ipa}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1">
                  <p className="font-medium text-emerald-200">{selectedPhonetic.ruleExplanationIt}</p>
                  <p className="text-slate-400">{selectedPhonetic.ruleExplanationAr}</p>
                </div>

                {/* Trap Alert */}
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300">ملاحظة وزارية هامة: </span>
                    {selectedPhonetic.trapWarningAr}
                  </div>
                </div>

                {/* Exemplar Audio Cards */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    أمثلة نطق نموذجية بصوت إيطالي طبيعي:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPhonetic.exemplarWords.map((item) => {
                      const isPlaying = currentlyPlayingText === item.word;
                      return (
                        <div
                          key={item.word}
                          className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-emerald-300">{item.word}</span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                {item.phonetic}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {item.translationAr} ({item.translationEn})
                            </p>
                          </div>
                          <button
                            onClick={() => speakItalian(item.word)}
                            className={`p-2.5 rounded-xl font-bold cursor-pointer transition-all ${
                              isPlaying
                                ? 'bg-emerald-500 text-slate-950 scale-95 shadow-md shadow-emerald-500/50'
                                : 'bg-slate-800 hover:bg-emerald-600 hover:text-white text-emerald-400'
                            }`}
                            title="استمع للنطق"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Realistic Sagittal Vocal Tract Articulatory Anatomy for Italian */}
                <div className="pt-4 border-t border-slate-800">
                  <RealisticVocalTractSchematic
                    symbol={selectedPhonetic.symbol}
                    name={`Fonetica Italiana: ${selectedPhonetic.nameEn}`}
                    manner={selectedPhonetic.ruleExplanationAr}
                    place={italianPlace}
                    isVoiced={!selectedPhonetic.symbol.toLowerCase().includes('sc')}
                    isNasal={selectedPhonetic.symbol.toLowerCase().includes('gn')}
                    audioExampleWord={selectedPhonetic.exemplarWords[0]?.word}
                    language="it"
                    isLight={theme === 'light'}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TEMPI VERBALI */}
        {activeTab === 'tempi_verbali' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {ITALIAN_VERB_TENSES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTense(t)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                    selectedTense.id === t.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {t.titleIt} ({t.titleAr})
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h4 className="text-lg font-black text-white">{selectedTense.titleIt}</h4>
                  <p className="text-xs text-emerald-400 font-bold">{selectedTense.titleAr}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  {(['are', 'ere', 'ire'] as const).map((conjugationGroup) => (
                    <button
                      key={conjugationGroup}
                      onClick={() => setVerbConjugationType(conjugationGroup)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        verbConjugationType === conjugationGroup
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      -{conjugationGroup}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                {selectedTense.functionAr} ({selectedTense.functionEn})
              </p>

              {/* Conjugation Table */}
              <div className="space-y-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  جدول نهايات التصريف المنتظمة (-{verbConjugationType}):
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {Object.entries(selectedTense.regularEndings[verbConjugationType]).map(([pers, ending]) => (
                    <div
                      key={pers}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1"
                    >
                      <span className="text-[11px] font-mono text-slate-400 block font-bold">{pers}</span>
                      <span className="text-sm font-black text-emerald-300 block font-mono">{ending}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Irregular Verbs */}
              {selectedTense.irregularVerbs.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-black uppercase tracking-wider text-amber-400">
                    أهم الأفعال الشاذة المتكررة في امتحانات الثانوية العامة:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedTense.irregularVerbs.map((irreg) => (
                      <div
                        key={irreg.verb}
                        className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 space-y-2"
                      >
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                          <span className="font-bold text-sm text-amber-300">{irreg.verb}</span>
                          <span className="text-[10px] text-slate-400">{irreg.noteAr}</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-300 grid grid-cols-2 gap-1">
                          <span>io: <b>{irreg.conjugations.io}</b></span>
                          <span>tu: <b>{irreg.conjugations.tu}</b></span>
                          <span>lui/lei: <b>{irreg.conjugations.luiLei}</b></span>
                          <span>noi: <b>{irreg.conjugations.noi}</b></span>
                          <span>voi: <b>{irreg.conjugations.voi}</b></span>
                          <span>loro: <b>{irreg.conjugations.loro}</b></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentence Examples with Audio */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  شواهد وزارية مع النطق الصوتي:
                </h5>
                <div className="space-y-2">
                  {selectedTense.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-bold text-sm text-white">{ex.sentenceIt}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{ex.translationAr}</p>
                        <span className="text-[10px] text-emerald-400 font-semibold">{ex.highlight}</span>
                      </div>
                      <button
                        onClick={() => speakItalian(ex.sentenceIt)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all cursor-pointer shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRONOMI & NE */}
        {activeTab === 'pronomi' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {ITALIAN_PRONOUNS.map((p) => (
                <button
                  key={p.category}
                  onClick={() => setSelectedPronounCategory(p)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPronounCategory.category === p.category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-300'
                  }`}
                >
                  {p.titleIt} ({p.titleAr})
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-lg font-black text-white">{selectedPronounCategory.titleIt}</h4>
                <p className="text-xs text-emerald-400 font-bold">{selectedPronounCategory.titleAr}</p>
                <p className="text-xs text-slate-300 mt-1">{selectedPronounCategory.ruleExplanationAr}</p>
              </div>

              {selectedPronounCategory.agreementNoteAr && (
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{selectedPronounCategory.agreementNoteAr}</span>
                </div>
              )}

              {/* Table of Pronouns */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-start">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="p-2.5 text-start font-bold">الشخص / الضمير</th>
                      <th className="p-2.5 text-start font-bold">المباشر (Diretto)</th>
                      <th className="p-2.5 text-start font-bold">غير المباشر (Indiretto)</th>
                      <th className="p-2.5 text-start font-bold">الصيغة القوية (Tonica)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPronounCategory.pronounTable.map((row) => (
                      <tr key={row.person} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                        <td className="p-2.5 font-bold text-slate-200">{row.person}</td>
                        <td className="p-2.5 font-mono font-black text-emerald-400">{row.direct}</td>
                        <td className="p-2.5 font-mono font-black text-teal-400">{row.indirect}</td>
                        <td className="p-2.5 font-mono text-slate-400">{row.tonic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sentence Examples */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  نماذج تطبيقية لاختبارات الثانوية العامة:
                </h5>
                <div className="space-y-2">
                  {selectedPronounCategory.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-bold text-sm text-white">{ex.it}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{ex.ar}</p>
                        <span className="text-[10px] text-emerald-400 font-semibold">{ex.note}</span>
                      </div>
                      <button
                        onClick={() => speakItalian(ex.it)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all cursor-pointer shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PREPOSIZIONI */}
        {activeTab === 'preposizioni' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {ITALIAN_PREPOSITIONS.map((p) => (
                <button
                  key={p.prep}
                  onClick={() => setSelectedPreposition(p)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPreposition.prep === p.prep
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-300'
                  }`}
                >
                  حرف الجر {p.prep}
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-lg font-black text-white">Preposizione: {selectedPreposition.prep}</h4>
                <p className="text-xs text-emerald-400 font-bold">{selectedPreposition.nameAr}</p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  أهم الاستخدامات الأساسية:
                </h5>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {selectedPreposition.coreMeaningsAr.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Articulated forms */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  مصفوفة الإدغام مع أدوات التعريف (Preposizioni Articolate):
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {Object.entries(selectedPreposition.articulatedForms).map(([art, form]) => (
                    <div
                      key={art}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1"
                    >
                      <span className="text-[10px] font-mono text-slate-400 block font-bold">
                        + {art === 'l_apostrophe' ? "l'" : art}
                      </span>
                      <span className="text-sm font-black text-emerald-300 block font-mono">{form}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  أمثلة سياقية مع النطق:
                </h5>
                <div className="space-y-2">
                  {selectedPreposition.sampleUsages.map((usage, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-bold text-sm text-white">{usage.it}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{usage.ar}</p>
                        <span className="text-[10px] text-emerald-400 font-semibold">{usage.ruleType}</span>
                      </div>
                      <button
                        onClick={() => speakItalian(usage.it)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all cursor-pointer shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SITUAZIONI QUOTIDIANE */}
        {activeTab === 'situazioni' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-black text-white">
                  محاكي مواقف الحياة اليومية وتحليل الخدع الوزارية
                </h3>
                <p className="text-xs text-emerald-300">
                  تدرب على اختيار الرد الإيطالي الدقيق لكل موقف وتجنب المشتتات المضللة
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300">
                  السؤال {currentSitIndex + 1} من {ITALIAN_SITUATION_SCENARIOS.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-600 font-bold text-xs text-white">
                  النقاط: {situationScore}
                </span>
              </div>
            </div>

            {/* Current Scenario Card */}
            {(() => {
              const sit = ITALIAN_SITUATION_SCENARIOS[currentSitIndex];
              return (
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {sit.unitaTitle}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-white">{sit.situationPromptAr}</h4>
                    <p className="text-xs font-mono text-slate-400">{sit.situationPromptIt}</p>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {/* Correct Option */}
                    <button
                      onClick={() => handleSituationChoice('correct')}
                      className={`w-full p-4 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        chosenSitChoice === 'correct'
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                          : chosenSitChoice === 'trap'
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
                          : 'bg-slate-950/80 border-slate-800 hover:border-emerald-500/50 text-slate-200'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm sm:text-base">{sit.correctResponseIt}</p>
                        <p className="text-xs text-slate-400 mt-1">{sit.correctResponseAr}</p>
                      </div>
                      {chosenSitChoice !== null && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                    </button>

                    {/* Trap Option */}
                    <button
                      onClick={() => handleSituationChoice('trap')}
                      className={`w-full p-4 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        chosenSitChoice === 'trap'
                          ? 'bg-red-950/80 border-red-500 text-red-200'
                          : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm sm:text-base">{sit.trapDistractorIt}</p>
                        <p className="text-xs text-slate-400 mt-1">مشتت امتحاني مضلل</p>
                      </div>
                      {chosenSitChoice === 'trap' && (
                        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  </div>

                  {/* Feedback Explanation */}
                  {chosenSitChoice !== null && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span>تحليل المشتت الوزاري:</span>
                      </div>
                      <p className="text-xs text-slate-300">{sit.trapExplanationAr}</p>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={nextSituation}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>الموقف التالي</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 6: ASCOLTO & COMPRENSIONE ORALE */}
        {activeTab === 'ascolto' && (
          <div className="space-y-6">
            {/* Track Selector */}
            <div className="flex items-center gap-2">
              {ITALIAN_LISTENING_TRACKS.map((trk) => (
                <button
                  key={trk.id}
                  onClick={() => {
                    stopAudio();
                    setActiveTrack(trk);
                    setCurrentTurnIndex(-1);
                    setExamAnswers({});
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTrack.id === trk.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  نص الاستماع {trk.unita}: {trk.titleAr}
                </button>
              ))}
            </div>

            {/* Audio Player Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-3">
                <div>
                  <h4 className="text-lg font-black text-white">{activeTrack.titleIt}</h4>
                  <p className="text-xs text-emerald-400 font-bold">{activeTrack.titleAr}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{activeTrack.contextAr}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (isPlayingTrack) stopAudio();
                      else playListeningTrack(activeTrack);
                    }}
                    className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      isPlayingTrack
                        ? 'bg-red-600 text-white'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                    }`}
                  >
                    {isPlayingTrack ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlayingTrack ? 'إيقاف مؤقت' : 'تشغيل الحوار كاملاً'}</span>
                  </button>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    {showTranscript ? 'إخفاء النص' : 'إظهار النص'}
                  </button>
                </div>
              </div>

              {/* Dialogue Transcript */}
              {showTranscript && (
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {activeTrack.turns.map((turn, i) => {
                    const isCurrent = currentTurnIndex === i;
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border transition-all ${
                          isCurrent
                            ? 'bg-emerald-950/70 border-emerald-500 shadow-md'
                            : 'bg-slate-950/60 border-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-xs text-emerald-400">{turn.speaker}</span>
                          <button
                            onClick={() => speakItalian(turn.textIt)}
                            className="text-slate-400 hover:text-emerald-300 transition-all"
                            title="تشغيل هذه الجملة فقط"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-white">{turn.textIt}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{turn.textAr}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Ministerial Exam Questions */}
              <div className="space-y-4 pt-3 border-t border-slate-800">
                <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> أسئلة الفهم القرائي والاستماع (نمط امتحانات الثانوية العامة):
                </h5>
                <div className="space-y-4">
                  {activeTrack.questions.map((q) => (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div>
                        <p className="font-bold text-sm text-white">{q.questionIt}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{q.questionAr}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.optionsIt.map((opt, optIdx) => {
                          const isChosen = examAnswers[q.id] === optIdx;
                          const hasAnswered = examAnswers[q.id] !== undefined;
                          const isCorrect = optIdx === q.correctIndex;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => setExamAnswers({ ...examAnswers, [q.id]: optIdx })}
                              className={`p-3 rounded-lg border text-start text-xs font-semibold transition-all cursor-pointer ${
                                hasAnswered
                                  ? isCorrect
                                    ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                                    : isChosen
                                    ? 'bg-red-950/70 border-red-500 text-red-200'
                                    : 'bg-slate-900 border-slate-800 text-slate-400 opacity-60'
                                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                              }`}
                            >
                              <span className="font-bold block">{opt}</span>
                              <span className="text-[11px] text-slate-400 block mt-0.5">
                                {q.optionsAr[optIdx]}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {examAnswers[q.id] !== undefined && (
                        <p className="text-xs text-slate-400 pt-1 border-t border-slate-800/60">
                          <span className="font-bold text-emerald-400">التفسير: </span>
                          {q.explanationAr}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
