import React, { useState, useRef } from 'react';
import type { Language } from '../../i18n/translations';
import {
  GERMAN_PHONETICS,
  GERMAN_CASES,
  GERMAN_MODAL_VERBS,
  GERMAN_PREPOSITIONS,
  GERMAN_SITUATION_SCENARIOS,
  GERMAN_LISTENING_TRACKS,
  type GermanPhoneticRule,
  type GermanCaseRule,
  type GermanModalRule,
  type GermanPrepositionRule,
  type GermanListeningTrack,
} from '../../data/audioLab/germanAudioLabData';
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
  HelpCircle,
  ArrowRight,
  Compass,
  FileText,
  Activity,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  initialTab?: StudioTab;
}

export type StudioTab = 'phonetik' | 'kasus' | 'modalverben' | 'praepositionen' | 'situationen' | 'hoerverstehen';

export const GermanLanguageStudio: React.FC<Props> = ({
  lang: _lang = 'ar',
  theme = 'dark',
  isFullscreen = false,
  initialTab = 'phonetik',
}) => {
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>(initialTab);

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Tab 1: Phonetics
  const [selectedPhonetic, setSelectedPhonetic] = useState<GermanPhoneticRule>(GERMAN_PHONETICS[0]);

  // Tab 2: Cases Trainer
  const [selectedCase, setSelectedCase] = useState<GermanCaseRule>(GERMAN_CASES[0]);
  const [selectedGender, setSelectedGender] = useState<'maskulin' | 'feminin' | 'neutral' | 'plural'>('maskulin');

  // Tab 3: Modal Verbs & Syntax
  const [selectedModal, setSelectedModal] = useState<GermanModalRule>(GERMAN_MODAL_VERBS[0]);
  const [showSubordinateClause, setShowSubordinateClause] = useState<boolean>(false);

  // Tab 4: Prepositions
  const [selectedPrepositionRule, setSelectedPrepositionRule] = useState<GermanPrepositionRule>(GERMAN_PREPOSITIONS[0]);
  const [prepositionMode, setPrepositionMode] = useState<'wo' | 'wohin'>('wo');

  // Tab 5: Situations Trainer
  const [currentSitIndex, setCurrentSitIndex] = useState<number>(0);
  const [chosenSitChoice, setChosenSitChoice] = useState<'correct' | 'trap' | null>(null);
  const [situationScore, setSituationScore] = useState<number>(0);

  // Tab 6: Listening Comprehension
  const [activeTrack, setActiveTrack] = useState<GermanListeningTrack>(GERMAN_LISTENING_TRACKS[0]);
  const [isPlayingTrack, setIsPlayingTrack] = useState<boolean>(false);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(-1);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});

  const trackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Web Speech API German pronunciation
  const speakGerman = (text: string, customRate?: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = customRate || speechRate;
    utterance.pitch = 1.0;

    utterance.onstart = () => setCurrentlyPlayingText(text);
    utterance.onend = () => setCurrentlyPlayingText(null);
    utterance.onerror = () => setCurrentlyPlayingText(null);

    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setCurrentlyPlayingText(null);
    setIsPlayingTrack(false);
    if (trackTimeoutRef.current) clearTimeout(trackTimeoutRef.current);
  };

  // Play sequential dialogue track
  const playDialogueTrack = (track: GermanListeningTrack) => {
    stopAudio();
    setIsPlayingTrack(true);
    let index = 0;

    const playNextTurn = () => {
      if (index >= track.turns.length) {
        setIsPlayingTrack(false);
        setCurrentTurnIndex(-1);
        return;
      }
      setCurrentTurnIndex(index);
      const turn = track.turns[index];
      const utterance = new SpeechSynthesisUtterance(turn.textDe);
      utterance.lang = 'de-DE';
      utterance.rate = speechRate;

      utterance.onend = () => {
        index++;
        trackTimeoutRef.current = setTimeout(playNextTurn, 900);
      };
      utterance.onerror = () => {
        setIsPlayingTrack(false);
        setCurrentTurnIndex(-1);
      };

      window.speechSynthesis.speak(utterance);
    };

    playNextTurn();
  };

  return (
    <div
      className={`rounded-3xl border transition-all ${
        isFullscreen ? 'min-h-screen p-6 sm:p-10' : 'p-5 sm:p-7 shadow-2xl'
      } ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-white'
          : isLight
          ? 'bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border-amber-200 text-stone-900 shadow-xl'
          : 'bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 border-amber-900/40 text-stone-100'
      }`}
      dir="rtl"
    >
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5 border-amber-500/20">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-tr from-amber-600 to-yellow-500 text-white font-extrabold text-2xl">
            🇩🇪
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                استوديو اللغة الألمانية والتواصل الصوتي
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
                Hallo Deutsch • DaF
              </span>
            </div>
            <p className={`text-xs mt-1 ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
              المختبر التفاعلي للنطق الصوتي وقواعد الحالات الإعرابية (Kasus) ومواقف الامتحان الرسمية للثانوية العامة
            </p>
          </div>
        </div>

        {/* Global Speech Controls */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold ${
            isLight ? 'bg-white border-stone-200 text-stone-700' : 'bg-stone-900 border-stone-800 text-stone-300'
          }`}>
            <Volume2 className="w-4 h-4 text-amber-500" />
            <span>سرعة النطق:</span>
            <button
              onClick={() => setSpeechRate((r) => Math.max(0.6, parseFloat((r - 0.1).toFixed(2))))}
              className="w-5 h-5 rounded hover:bg-amber-500/20 font-bold"
              title="أبطأ"
            >
              -
            </button>
            <span className="w-8 text-center text-amber-500 font-mono">{(speechRate * 100).toFixed(0)}%</span>
            <button
              onClick={() => setSpeechRate((r) => Math.min(1.2, parseFloat((r + 0.1).toFixed(2))))}
              className="w-5 h-5 rounded hover:bg-amber-500/20 font-bold"
              title="أسرع"
            >
              +
            </button>
          </div>
          {currentlyPlayingText && (
            <button
              onClick={stopAudio}
              className="px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Pause className="w-3.5 h-3.5" />
              <span>إيقاف الصوت</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-amber-500/10 no-scrollbar">
        {[
          { id: 'phonetik', label: 'الصوتيات والأوملاوت', icon: Volume2, de: 'Phonetik & Umlaute' },
          { id: 'kasus', label: 'الحالات الإعرابية', icon: Layers, de: 'Die 4 Kasus' },
          { id: 'modalverben', label: 'الأفعال الناقصة وبناء الجملة', icon: Activity, de: 'Modalverben & Syntax' },
          { id: 'praepositionen', label: 'حروف الجر وحالاتها', icon: Compass, de: 'Präpositionen' },
          { id: 'situationen', label: 'مواقف الحياة اليومية', icon: HelpCircle, de: 'Alltagssituationen' },
          { id: 'hoerverstehen', label: 'نصوص الاستماع والامتحان', icon: Headphones, de: 'Hörverstehen' },
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-500 shadow-md shadow-amber-600/20 scale-102'
                  : isLight
                  ? 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                  : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border-stone-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-500'}`} />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                isActive ? 'bg-black/20 text-white/90' : 'bg-stone-500/10 text-stone-400'
              }`}>
                {tab.de}
              </span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: PHONETICS & UMLAUTE */}
      {activeTab === 'phonetik' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Vowel & Consonant Selection */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold flex items-center gap-2 text-amber-500">
              <Sparkles className="w-4 h-4" />
              <span>اختر الحرف الصوتي أو التركيب:</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
              {GERMAN_PHONETICS.map((rule) => {
                const isSel = selectedPhonetic.symbol === rule.symbol;
                return (
                  <button
                    key={rule.symbol}
                    onClick={() => setSelectedPhonetic(rule)}
                    className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      isSel
                        ? 'bg-amber-600/15 border-amber-500 text-amber-400 shadow-md'
                        : isLight
                        ? 'bg-white hover:bg-amber-50/50 border-stone-200 text-stone-800'
                        : 'bg-stone-900/70 hover:bg-stone-800/80 border-stone-800 text-stone-200'
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-sm">{rule.nameAr}</div>
                      <div className="text-[11px] opacity-70 font-mono">{rule.nameEn} ({rule.ipa})</div>
                    </div>
                    <span className="text-xl font-black font-mono px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-400">
                      {rule.symbol}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Phonetic Demonstration Card */}
          <div className="lg:col-span-8 space-y-5">
            <div className={`p-6 rounded-3xl border ${
              isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900/90 border-stone-800'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-stone-800/40">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-black text-amber-500 font-mono bg-amber-500/10 px-4 py-2 rounded-2xl border border-amber-500/30">
                    {selectedPhonetic.symbol}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{selectedPhonetic.nameAr}</h4>
                    <span className="text-xs font-mono text-amber-400/90">{selectedPhonetic.ipa}</span>
                  </div>
                </div>

                <button
                  onClick={() => speakGerman(selectedPhonetic.exemplarWords.map(w => w.word).join(', '))}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-600/20"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>نطق جميع الأمثلة بصوت ألماني</span>
                </button>
              </div>

              {/* Rule Explanations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-amber-50/60 border-amber-100' : 'bg-stone-950/60 border-stone-800'}`}>
                  <div className="text-xs font-bold text-amber-500 mb-1">الشرح والقاعدة الصوتية:</div>
                  <p className="text-xs leading-relaxed">{selectedPhonetic.ruleExplanationAr}</p>
                  <p className="text-[11px] opacity-70 mt-2 font-mono" dir="ltr">{selectedPhonetic.ruleExplanationDe}</p>
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-red-50/60 border-red-200' : 'bg-red-950/20 border-red-900/30'}`}>
                  <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>تحذير امتحاني (وزارة التربية والتعليم):</span>
                  </div>
                  <p className="text-xs leading-relaxed text-red-300">{selectedPhonetic.trapWarningAr}</p>
                </div>
              </div>

              {/* Exemplar Words Grid */}
              <h5 className="text-xs font-bold mt-6 mb-3 text-stone-400">أمثلة معتمدة في المنهج الوزاري:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedPhonetic.exemplarWords.map((item) => (
                  <div
                    key={item.word}
                    className={`p-4 rounded-2xl border text-center transition-all group ${
                      isLight ? 'bg-stone-50 hover:bg-amber-50 border-stone-200' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                    }`}
                  >
                    <div className="text-lg font-black font-mono text-amber-400 group-hover:scale-105 transition-all">
                      {item.word}
                    </div>
                    <div className="text-[11px] text-stone-400 font-mono my-0.5">{item.phonetic}</div>
                    <div className="text-xs font-bold text-stone-300">{item.translationAr}</div>
                    <button
                      onClick={() => speakGerman(item.word)}
                      className="mt-3 w-full py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center gap-1 transition-all"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>استماع</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIE 4 KASUS */}
      {activeTab === 'kasus' && (
        <div className="space-y-6 mt-6">
          {/* Case Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GERMAN_CASES.map((k) => {
              const isSel = selectedCase.id === k.id;
              return (
                <button
                  key={k.id}
                  onClick={() => setSelectedCase(k)}
                  className={`p-4 rounded-2xl border text-right transition-all ${
                    isSel
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-500 shadow-lg shadow-amber-600/20 scale-102'
                      : isLight
                      ? 'bg-white hover:bg-amber-50/50 border-stone-200 text-stone-800'
                      : 'bg-stone-900/80 hover:bg-stone-800 border-stone-800 text-stone-300'
                  }`}
                >
                  <div className="text-xs font-bold opacity-80 font-mono">{k.questionDe}</div>
                  <div className="text-base font-black mt-0.5">{k.titleAr}</div>
                  <div className="text-xs opacity-75 font-mono mt-1">{k.titleDe}</div>
                </button>
              );
            })}
          </div>

          {/* Active Case Matrix Details */}
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-stone-800'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-stone-800/40">
              <div>
                <h4 className="text-lg font-black text-amber-400">{selectedCase.titleAr} ({selectedCase.titleDe})</h4>
                <p className="text-xs text-stone-400 mt-1">{selectedCase.functionAr}</p>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                أداة السؤال: {selectedCase.questionDe}
              </div>
            </div>

            {/* Gender Toggle for Articles */}
            <div className="flex items-center gap-2 mt-5 mb-4">
              <span className="text-xs font-bold text-stone-400">اختر النوع النحوي (Genus):</span>
              {(['maskulin', 'feminin', 'neutral', 'plural'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    selectedGender === g
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow'
                      : isLight
                      ? 'bg-stone-100 text-stone-700 border-stone-200'
                      : 'bg-stone-800 text-stone-300 border-stone-700'
                  }`}
                >
                  {g === 'maskulin' ? 'المذكر (der)' : g === 'feminin' ? 'المؤنث (die)' : g === 'neutral' ? 'المحايد (das)' : 'الجمع (die)'}
                </button>
              ))}
            </div>

            {/* Transformations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className={`p-4 rounded-2xl border text-center ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'}`}>
                <div className="text-[11px] text-stone-400 font-bold">أداة المعرفة (Bestimmt)</div>
                <div className="text-2xl font-black font-mono text-amber-400 mt-2">
                  {selectedCase.definiteArticles[selectedGender]}
                </div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'}`}>
                <div className="text-[11px] text-stone-400 font-bold">أداة النكرة (Unbestimmt)</div>
                <div className="text-2xl font-black font-mono text-amber-400 mt-2">
                  {selectedCase.indefiniteArticles[selectedGender]}
                </div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'}`}>
                <div className="text-[11px] text-stone-400 font-bold">أداة النفي (Negation)</div>
                <div className="text-2xl font-black font-mono text-amber-400 mt-2">
                  {selectedCase.negativeArticles[selectedGender]}
                </div>
              </div>
              <div className={`p-4 rounded-2xl border text-center ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950 border-stone-800'}`}>
                <div className="text-[11px] text-stone-400 font-bold">ضمير الملكية (mein-)</div>
                <div className="text-2xl font-black font-mono text-amber-400 mt-2">
                  {selectedCase.possessiveArticlesMein[selectedGender]}
                </div>
              </div>
            </div>

            {/* Examples & Sentences */}
            <h5 className="text-xs font-bold mt-6 mb-3 text-stone-400">جمل تطبيقية بصوت ألماني:</h5>
            <div className="space-y-3">
              {selectedCase.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/70 border-stone-800'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold font-mono text-stone-100 flex items-center gap-2" dir="ltr">
                      <span>{ex.sentenceDe}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
                        [{ex.highlight}]
                      </span>
                    </div>
                    <div className="text-xs text-stone-400 mt-1">{ex.translationAr}</div>
                  </div>
                  <button
                    onClick={() => speakGerman(ex.sentenceDe)}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5 transition-all self-start sm:self-center"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>نطق</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MODALVERBEN & SYNTAX */}
      {activeTab === 'modalverben' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Modal Selection */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-amber-500">الأفعال الناقصة المقررة:</h3>
            <div className="space-y-2">
              {GERMAN_MODAL_VERBS.map((m) => {
                const isSel = selectedModal.verb === m.verb;
                return (
                  <button
                    key={m.verb}
                    onClick={() => setSelectedModal(m)}
                    className={`w-full p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      isSel
                        ? 'bg-amber-600/15 border-amber-500 text-amber-400 shadow-md'
                        : isLight
                        ? 'bg-white hover:bg-amber-50/50 border-stone-200 text-stone-800'
                        : 'bg-stone-900/80 hover:bg-stone-800 border-stone-800 text-stone-200'
                    }`}
                  >
                    <div>
                      <div className="text-base font-black font-mono">{m.verb}</div>
                      <div className="text-xs text-stone-400">{m.meaningAr}</div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                      Modalverb
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conjugation & Satzklammer View */}
          <div className="lg:col-span-8 space-y-5">
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-stone-800'}`}>
              <div className="flex items-center justify-between border-b pb-4 border-stone-800/40">
                <div>
                  <h4 className="text-lg font-black font-mono text-amber-400">{selectedModal.verb}</h4>
                  <p className="text-xs text-stone-400 mt-0.5">{selectedModal.meaningAr} — {selectedModal.meaningEn}</p>
                </div>
                <button
                  onClick={() => speakGerman(`ich ${selectedModal.conjugations.ich}, du ${selectedModal.conjugations.du}, er ${selectedModal.conjugations.erSieEs}`)}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>استماع للتصريف</span>
                </button>
              </div>

              {/* Conjugation Table */}
              <h5 className="text-xs font-bold text-stone-400 mt-5 mb-3">جدول تصريف الفعل في المضارع (Präsens):</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { person: 'ich', form: selectedModal.conjugations.ich },
                  { person: 'du', form: selectedModal.conjugations.du },
                  { person: 'er / sie / es', form: selectedModal.conjugations.erSieEs },
                  { person: 'wir', form: selectedModal.conjugations.wir },
                  { person: 'ihr', form: selectedModal.conjugations.ihr },
                  { person: 'sie / Sie', form: selectedModal.conjugations.sieSie },
                ].map((row) => (
                  <div key={row.person} className={`p-3 rounded-xl border text-center ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="text-[11px] text-stone-400 font-mono">{row.person}</div>
                    <div className="text-base font-black font-mono text-amber-400 mt-1">{row.form}</div>
                  </div>
                ))}
              </div>

              {/* Satzklammer Architecture Diagram */}
              <div className={`mt-6 p-5 rounded-2xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-950/80 border-amber-900/30'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-black text-amber-500 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>قاعدة قوس الفعل الألماني (Die Satzklammer):</span>
                  </div>
                  <button
                    onClick={() => setShowSubordinateClause(!showSubordinateClause)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-bold"
                  >
                    {showSubordinateClause ? 'عرض الجملة الرئيسية (Hauptsatz)' : 'تحويل إلى جملة جانبية (Nebensatz mit weil)'}
                  </button>
                </div>

                {!showSubordinateClause ? (
                  <div>
                    <p className="text-xs text-stone-300 mb-3">{selectedModal.sampleSentence.bracketExplanationAr}</p>
                    <div className="p-4 rounded-xl bg-black/40 border border-stone-800 text-left font-mono text-xs sm:text-sm text-stone-200 leading-relaxed" dir="ltr">
                      <span className="text-sky-400 font-bold">Der Kranke </span>
                      <span className="text-amber-400 font-black px-1 py-0.5 rounded bg-amber-500/20 border border-amber-500/40">
                        {selectedModal.conjugations.erSieEs} (Verb 1)
                      </span>
                      <span className="text-stone-300"> die Medikamente regelmäßig </span>
                      <span className="text-emerald-400 font-black px-1 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40">
                        einnehmen (Infinitiv am Ende)
                      </span>
                      .
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-stone-300 mb-3">
                      عند استخدام الرابط <span className="text-amber-400 font-bold font-mono">weil</span> (لأن) أو <span className="text-amber-400 font-bold font-mono">dass</span> (أن)، ينتقل الفعل المصرف إلى نهاية الجملة تماماً:
                    </p>
                    <div className="p-4 rounded-xl bg-black/40 border border-stone-800 text-left font-mono text-xs sm:text-sm text-stone-200 leading-relaxed" dir="ltr">
                      <span className="text-stone-300">..., weil der Kranke die Medikamente </span>
                      <span className="text-emerald-400 font-bold">einnehmen </span>
                      <span className="text-amber-400 font-black px-1 py-0.5 rounded bg-amber-500/20 border border-amber-500/40">
                        {selectedModal.conjugations.erSieEs}
                      </span>
                      .
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-3">
                  <div className="text-xs text-stone-400">{selectedModal.sampleSentence.ar}</div>
                  <button
                    onClick={() => speakGerman(selectedModal.sampleSentence.de)}
                    className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>استماع</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PRÄPOSITIONEN */}
      {activeTab === 'praepositionen' && (
        <div className="space-y-6 mt-6">
          {/* Category Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {GERMAN_PREPOSITIONS.map((p) => {
              const isSel = selectedPrepositionRule.category === p.category;
              return (
                <button
                  key={p.category}
                  onClick={() => setSelectedPrepositionRule(p)}
                  className={`p-4 rounded-2xl border text-right transition-all ${
                    isSel
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-500 shadow-md scale-102'
                      : isLight
                      ? 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                      : 'bg-stone-900 border-stone-800 text-stone-200'
                  }`}
                >
                  <div className="text-xs font-mono opacity-75">{p.titleDe}</div>
                  <div className="text-base font-black mt-1">{p.titleAr}</div>
                  <div className="text-xs text-amber-400 font-mono mt-2 flex flex-wrap gap-1">
                    {p.prepositions.slice(0, 6).join(' • ')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Preposition Card */}
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-stone-800'}`}>
            <h4 className="text-lg font-black text-amber-400">{selectedPrepositionRule.titleAr}</h4>
            <p className="text-xs text-stone-300 mt-1 leading-relaxed">{selectedPrepositionRule.ruleExplanationAr}</p>

            {/* Wechselpräpositionen Interactive Mode */}
            {selectedPrepositionRule.category === 'wechsel' && (
              <div className="my-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-amber-400">نوع السؤال والسياق الحركي:</span>
                  <button
                    onClick={() => setPrepositionMode('wo')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      prepositionMode === 'wo' ? 'bg-amber-500 text-stone-950 font-black' : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    أين؟ Wo? (مكان وسكون = Dativ)
                  </button>
                  <button
                    onClick={() => setPrepositionMode('wohin')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      prepositionMode === 'wohin' ? 'bg-amber-500 text-stone-950 font-black' : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    إلى أين؟ Wohin? (حركة واتجاه = Akkusativ)
                  </button>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-black/40 text-xs font-mono text-stone-200" dir="ltr">
                  {prepositionMode === 'wo'
                    ? 'Ich bin in dem (im) Supermarkt. [Wo? -> Dativ: der Supermarkt -> dem Supermarkt]'
                    : 'Ich gehe in den Supermarkt. [Wohin? -> Akkusativ: der Supermarkt -> den Supermarkt]'}
                </div>
              </div>
            )}

            {/* List of Prepositions Tags */}
            <div className="flex flex-wrap gap-2 my-4">
              {selectedPrepositionRule.prepositions.map((prep) => (
                <span
                  key={prep}
                  className="px-3.5 py-1.5 rounded-xl font-mono font-black text-base bg-amber-500/15 text-amber-400 border border-amber-500/30"
                >
                  {prep}
                </span>
              ))}
            </div>

            {/* Examples Table */}
            <h5 className="text-xs font-bold text-stone-400 mt-6 mb-3">أمثلة تطبيقية:</h5>
            <div className="space-y-2.5">
              {selectedPrepositionRule.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold font-mono text-stone-200" dir="ltr">{ex.de}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{ex.ar} — <span className="text-amber-400 font-mono font-semibold">{ex.note}</span></div>
                  </div>
                  <button
                    onClick={() => speakGerman(ex.de)}
                    className="p-2 rounded-lg hover:bg-amber-500/20 text-amber-400"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ALLTAGSSITUATIONEN */}
      {activeTab === 'situationen' && (
        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-between border-b pb-4 border-stone-800/40">
            <div>
              <h3 className="text-lg font-black text-amber-400 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>تدريب مواقف الحياة اليومية (Alltagssituationen)</span>
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                سؤال وزاري مضمون في امتحان الثانوية العامة (اختر الرد المناسب واحذر المشتتات الخادعة)
              </p>
            </div>
            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              النقاط: {situationScore} / {GERMAN_SITUATION_SCENARIOS.length}
            </div>
          </div>

          {/* Current Situation Card */}
          {(() => {
            const currentSit = GERMAN_SITUATION_SCENARIOS[currentSitIndex];
            const isAnswered = chosenSitChoice !== null;

            return (
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-stone-800'}`}>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <span className="font-bold text-amber-400">{currentSit.lektionTitle}</span>
                  <span>الموقف {currentSitIndex + 1} من {GERMAN_SITUATION_SCENARIOS.length}</span>
                </div>

                {/* Situation Prompt */}
                <div className={`p-4 rounded-2xl border my-3 ${isLight ? 'bg-amber-50/50 border-amber-100' : 'bg-stone-950/80 border-stone-800'}`}>
                  <div className="text-base font-bold text-stone-100 mb-1 leading-relaxed">{currentSit.situationPromptAr}</div>
                  <div className="text-xs font-mono text-stone-400" dir="ltr">{currentSit.situationPromptDe}</div>
                </div>

                {/* Choices (Shuffled or displayed with logic) */}
                <div className="space-y-3 mt-4">
                  {/* Choice A */}
                  <button
                    disabled={isAnswered}
                    onClick={() => {
                      setChosenSitChoice('correct');
                      setSituationScore((s) => s + 1);
                    }}
                    className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      !isAnswered
                        ? isLight
                          ? 'bg-stone-50 hover:bg-amber-50 border-stone-200'
                          : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                        : chosenSitChoice === 'correct'
                        ? 'bg-emerald-900/30 border-emerald-500 text-emerald-300'
                        : 'bg-stone-900/40 border-stone-800 text-stone-400'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold font-mono text-stone-100" dir="ltr">{currentSit.correctResponseDe}</div>
                      <div className="text-xs text-stone-400 mt-1">{currentSit.correctResponseAr}</div>
                    </div>
                    {isAnswered && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                  </button>

                  {/* Choice B (Trap Distractor) */}
                  <button
                    disabled={isAnswered}
                    onClick={() => {
                      setChosenSitChoice('trap');
                    }}
                    className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between ${
                      !isAnswered
                        ? isLight
                          ? 'bg-stone-50 hover:bg-red-50/40 border-stone-200'
                          : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                        : chosenSitChoice === 'trap'
                        ? 'bg-red-900/30 border-red-500 text-red-300'
                        : 'bg-stone-900/40 border-stone-800 text-stone-400 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold font-mono text-stone-100" dir="ltr">{currentSit.trapDistractorDe}</div>
                      <div className="text-xs text-stone-400 mt-1">[المشتت الخادع بالامتحان]</div>
                    </div>
                    {isAnswered && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </button>
                </div>

                {/* Feedback Explanation */}
                {isAnswered && (
                  <div className={`mt-5 p-4 rounded-2xl border ${
                    chosenSitChoice === 'correct'
                      ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                      : 'bg-red-950/20 border-red-900/40 text-red-300'
                  }`}>
                    <div className="text-xs font-bold mb-1">
                      {chosenSitChoice === 'correct' ? '✅ إجابة صحيحة وممتازة!' : '❌ انتبه، هذا فخ امتحاني شائع!'}
                    </div>
                    <div className="text-xs leading-relaxed">{currentSit.trapExplanationAr}</div>

                    <div className="flex justify-end mt-3">
                      <button
                        onClick={() => {
                          setChosenSitChoice(null);
                          setCurrentSitIndex((i) => (i + 1) % GERMAN_SITUATION_SCENARIOS.length);
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                      >
                        <span>الموقف التالي</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 6: HÖRVERSTEHEN */}
      {activeTab === 'hoerverstehen' && (
        <div className="space-y-6 mt-6">
          {/* Track Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GERMAN_LISTENING_TRACKS.map((t) => {
              const isSel = activeTrack.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    stopAudio();
                    setActiveTrack(t);
                  }}
                  className={`p-4 rounded-2xl border text-right transition-all ${
                    isSel
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-500 shadow-md scale-102'
                      : isLight
                      ? 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                      : 'bg-stone-900 border-stone-800 text-stone-200'
                  }`}
                >
                  <div className="text-xs font-bold font-mono opacity-80">{t.duration} • Lektion {t.lektion}</div>
                  <div className="text-base font-black mt-1">{t.titleAr}</div>
                  <div className="text-xs font-mono opacity-75 mt-1" dir="ltr">{t.titleDe}</div>
                </button>
              );
            })}
          </div>

          {/* Active Audio Player & Transcript */}
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-stone-800'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-stone-800/40">
              <div>
                <h4 className="text-lg font-black text-amber-400">{activeTrack.titleAr}</h4>
                <p className="text-xs text-stone-400 mt-0.5">{activeTrack.contextAr}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (isPlayingTrack) {
                      stopAudio();
                    } else {
                      playDialogueTrack(activeTrack);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-amber-600/20 transition-all"
                >
                  {isPlayingTrack ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlayingTrack ? 'إيقاف مؤقت' : 'تشغيل الحوار الصوتي'}</span>
                </button>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{showTranscript ? 'إخفاء النص' : 'إظهار النص'}</span>
                </button>
              </div>
            </div>

            {/* Transcript Display */}
            {showTranscript && (
              <div className="space-y-2.5 my-5 max-h-72 overflow-y-auto pr-1">
                {activeTrack.turns.map((turn, idx) => {
                  const isCurrent = currentTurnIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        isCurrent
                          ? 'bg-amber-600/20 border-amber-500 scale-101 shadow'
                          : isLight
                          ? 'bg-stone-50 border-stone-200'
                          : 'bg-stone-950/60 border-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-amber-500 font-bold mb-1">
                        <span>{turn.speaker}</span>
                        <button
                          onClick={() => speakGerman(turn.textDe)}
                          className="hover:text-amber-400"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-sm font-mono text-stone-200 text-left" dir="ltr">
                        {turn.textDe}
                      </div>
                      <div className="text-xs text-stone-400 mt-1">{turn.textAr}</div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Comprehension Questions */}
            <h5 className="text-xs font-bold text-stone-400 mt-6 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>أسئلة الفهم القرائي والسمعي (نمط البابل شيت الوزاري):</span>
            </h5>
            <div className="space-y-4">
              {activeTrack.questions.map((q) => {
                const userChoice = examAnswers[q.id];
                const isAnswered = typeof userChoice === 'number';

                return (
                  <div key={q.id} className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="text-sm font-bold text-stone-100">{q.questionAr}</div>
                    <div className="text-xs font-mono text-stone-400 mb-3" dir="ltr">{q.questionDe}</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.optionsDe.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        const isCorrect = q.correctIndex === optIdx;

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => setExamAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                            className={`p-3 rounded-xl border text-right transition-all ${
                              !isAnswered
                                ? isLight
                                  ? 'bg-white hover:bg-amber-50/50 border-stone-200'
                                  : 'bg-stone-900 hover:bg-stone-800 border-stone-800'
                                : isCorrect
                                ? 'bg-emerald-950/30 border-emerald-500 text-emerald-300 font-bold'
                                : isSelected
                                ? 'bg-red-950/30 border-red-500 text-red-300'
                                : 'bg-stone-900/40 border-stone-800 opacity-50'
                            }`}
                          >
                            <div className="text-xs font-mono text-stone-200" dir="ltr">{opt}</div>
                            <div className="text-[11px] text-stone-400 mt-0.5">{q.optionsAr[optIdx]}</div>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-3 text-xs text-amber-400 font-medium">
                        💡 {q.explanationAr}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
