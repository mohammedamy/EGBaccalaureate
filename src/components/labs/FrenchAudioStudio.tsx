import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../../i18n/translations';
import {
  FRENCH_NASAL_VOWELS,
  FRENCH_LIAISON_RULES,
  FRENCH_PRONOUN_RULES,
  FRENCH_SITUATION_SCENARIOS,
  FRENCH_LISTENING_TRACKS,
  type FrenchNasalVowel,
  type FrenchLiaisonRule,
  type PronounPlacementRule,
  type FrenchListeningTrack,
} from '../../data/audioLab/frenchAudioLabData';
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookOpen,
  Headphones,
  Sliders,
  Sparkles,
  Zap,
  Layers,
  HelpCircle,
  Award,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { aiVoiceEngine } from '../../services/aiVoiceEngine';
import { RealisticVocalTractSchematic } from './RealisticVocalTractSchematic';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
}

type StudioTab = 'nasales' | 'liaisons' | 'pronoms' | 'situations' | 'ecoute';

export const FrenchAudioStudio: React.FC<Props> = ({
  lang: _lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>('nasales');

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Tab 1: Nasal Vowels State
  const [selectedNasal, setSelectedNasal] = useState<FrenchNasalVowel>(FRENCH_NASAL_VOWELS[0]);

  // Tab 2: Liaisons State
  const [selectedLiaison, setSelectedLiaison] = useState<FrenchLiaisonRule>(FRENCH_LIAISON_RULES[0]);

  // Tab 3: Pronouns State
  const [selectedPronounRule, setSelectedPronounRule] = useState<PronounPlacementRule>(FRENCH_PRONOUN_RULES[0]);

  // Tab 4: Situations State
  const [currentSitIndex, setCurrentSitIndex] = useState<number>(0);
  const [chosenSitChoice, setChosenSitChoice] = useState<'correct' | 'trap' | null>(null);
  const [situationScore, setSituationScore] = useState<number>(0);

  // Tab 5: Listening Tracks State
  const [activeTrack, setActiveTrack] = useState<FrenchListeningTrack>(FRENCH_LISTENING_TRACKS[0]);
  const [isPlayingTrack, setIsPlayingTrack] = useState<boolean>(false);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(-1);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});

  const trackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // AI Vocal Engine French pronunciation
  const speakFrench = (text: string, customRate?: number) => {
    aiVoiceEngine.speak(text, {
      lang: 'fr-FR',
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
    if (trackTimeoutRef.current) clearTimeout(trackTimeoutRef.current);
  };

  // Automated Sequential Playback for Dialogue Tracks with AI Vocal Engine
  const playDialogueTrack = (track: FrenchListeningTrack) => {
    stopAudio();
    setIsPlayingTrack(true);

    const turns = track.dialogueTurns.map((turn) => ({
      text: turn.textFr,
      lang: 'fr-FR',
      delayAfterMs: 650,
    }));

    aiVoiceEngine.playDialogue(turns, 'fr-FR', {
      rate: speechRate,
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

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div
      className={`w-full border transition-all duration-300 flex flex-col font-sans ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0'
          : 'rounded-3xl min-h-[620px]'
      } ${
        isContrast
          ? 'bg-black border-amber-400 text-white'
          : isLight
          ? 'bg-slate-50 border-slate-200 text-slate-900'
          : 'bg-slate-950/95 border-slate-800 text-slate-100'
      }`}
      dir="ltr"
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-rose-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                FR-3È SEC • CLUB @DOS PLUS 3
              </span>
              <span className="text-xs font-mono text-slate-400">🇫🇷 Parisien (fr-FR)</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2 mt-0.5">
              Station d'Écoute & Phonétique Française
              <span className="text-xs font-normal text-slate-400 hidden sm:inline" dir="rtl">
                (معمل الصوتيات والاستماع للثانوية العامة)
              </span>
            </h2>
          </div>
        </div>

        {/* Playback Rate & Audio Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* AI Vocal Engine Badge */}
          <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 px-2.5 py-1.5 rounded-xl text-xs text-blue-300 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-[11px]">AI Vocal Engine (HD)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
            <Sliders className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 hidden sm:inline">Vitesse:</span>
            <select
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
              className="bg-transparent text-blue-400 font-bold focus:outline-none cursor-pointer text-xs"
            >
              <option value="0.75" className="bg-slate-900">0.75x (Lent)</option>
              <option value="0.9" className="bg-slate-900">0.90x (Idéal)</option>
              <option value="1.0" className="bg-slate-900">1.00x (Normal)</option>
              <option value="1.2" className="bg-slate-900">1.20x (Rapide)</option>
            </select>
          </div>

          {currentlyPlayingText && (
            <button
              type="button"
              onClick={stopAudio}
              className="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-1.5 hover:bg-rose-500/30 transition-all cursor-pointer"
            >
              <Pause className="w-3.5 h-3.5" />
              Arrêter
            </button>
          )}

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            title={isFullscreen ? 'Quitter Plein Écran' : 'Plein Écran'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-blue-400" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="px-4 border-b border-slate-800/80 bg-slate-900/40 flex overflow-x-auto no-scrollbar gap-1 pt-2">
        {[
          { id: 'nasales', labelFr: '1. Voyelles Nasales', labelAr: 'الحركات الأنفية', icon: Volume2 },
          { id: 'liaisons', labelFr: '2. Liaisons & Élisions', labelAr: 'الوصل والإدغام', icon: Zap },
          { id: 'pronoms', labelFr: '3. Pronoms COD/COI/EN/Y', labelAr: 'معمل الضمائر الشخصية', icon: Layers },
          { id: 'situations', labelFr: '4. Situations Quotidiennes', labelAr: 'مواقف المنهج الوزاري', icon: Sparkles },
          { id: 'ecoute', labelFr: '5. Compréhension Orale', labelAr: 'نصوص الاستماع والامتحان', icon: BookOpen },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                stopAudio();
                setActiveTab(tab.id as StudioTab);
              }}
              className={`px-3.5 py-2.5 rounded-t-xl text-xs font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.labelFr}</span>
              <span className="text-[10px] text-slate-500 hidden md:inline" dir="rtl">({tab.labelAr})</span>
            </button>
          );
        })}
      </div>

      {/* Tab Workstation Content */}
      <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
        {/* TAB 1: VOYELLES NASALES */}
        {activeTab === 'nasales' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FRENCH_NASAL_VOWELS.map((nasal) => (
                <button
                  key={nasal.ipa}
                  type="button"
                  onClick={() => {
                    setSelectedNasal(nasal);
                    speakFrench(nasal.exemplarWords[0].word);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedNasal.ipa === nasal.ipa
                      ? 'bg-blue-500/15 border-blue-500/50 shadow-lg shadow-blue-500/10 text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xl font-bold font-mono text-blue-400 mb-1">{nasal.ipa}</div>
                  <div className="text-xs font-semibold text-slate-200">{nasal.spellingPatterns.join(', ')}</div>
                  <div className="text-[11px] text-slate-400 mt-1 truncate" dir="rtl">{nasal.nameAr}</div>
                </button>
              ))}
            </div>

            {/* Selected Nasal Deep Dive */}
            <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-xl font-mono text-blue-400">{selectedNasal.ipa}</span>
                    <span>{selectedNasal.nameEn}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5" dir="rtl">{selectedNasal.nameAr}</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Graphies: {selectedNasal.spellingPatterns.join(', ')}
                </span>
              </div>

              {/* Exemplar Audio Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {selectedNasal.exemplarWords.map((item) => (
                  <div
                    key={item.word}
                    className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-blue-500/40 transition-all"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-100">{item.word}</div>
                      <div className="text-xs font-mono text-blue-400">{item.phonetic}</div>
                      <div className="text-[11px] text-slate-400" dir="rtl">{item.translationAr}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakFrench(item.word)}
                      className="p-2 rounded-xl bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all cursor-pointer"
                      title="Écouter la prononciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Egyptian Trap Warning Alert */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-amber-300">Piège Fréquent à l'Examen :</div>
                  <div className="text-slate-300 leading-relaxed">{selectedNasal.trapWarningEn}</div>
                  <div className="text-amber-200/90 leading-relaxed font-arabic" dir="rtl">
                    {selectedNasal.trapWarningAr}
                  </div>
                </div>
              </div>

              {/* Realistic Sagittal Vocal Tract Articulatory Anatomy for French Nasals & Consonants */}
              <div className="pt-2">
                <RealisticVocalTractSchematic
                  symbol={selectedNasal.ipa}
                  name={`Voyelle Nasale Française: ${selectedNasal.nameEn}`}
                  manner="Nasal Vowel Resonance (Lowered Velum & Airflow through Nasal Cavity)"
                  place={
                    selectedNasal.ipa === '/ɑ̃/'
                      ? 'vowel_open_low'
                      : selectedNasal.ipa === '/ɔ̃/'
                      ? 'vowel_back_high'
                      : selectedNasal.ipa === '/ɛ̃/'
                      ? 'vowel_front_high'
                      : 'vowel_central'
                  }
                  isVoiced={true}
                  isNasal={true}
                  audioExampleWord={selectedNasal.exemplarWords[0]?.word}
                  language="fr"
                  isLight={theme === 'light'}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIAISONS & ÉLISIONS */}
        {activeTab === 'liaisons' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {FRENCH_LIAISON_RULES.map((rule) => (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setSelectedLiaison(rule)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedLiaison.id === rule.id
                      ? 'bg-blue-500/15 border-blue-500/50 shadow-lg text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block ${
                      rule.type === 'obligatoire'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {rule.type}
                  </span>
                  <div className="text-xs font-bold text-slate-200 line-clamp-1">{rule.titleFr}</div>
                  <div className="text-[11px] text-slate-400 mt-1 truncate" dir="rtl">{rule.titleAr}</div>
                </button>
              ))}
            </div>

            <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800/80 pb-3">
                <h3 className="text-base font-bold text-slate-100">{selectedLiaison.titleFr}</h3>
                <p className="text-xs text-blue-400 mt-1" dir="rtl">{selectedLiaison.titleAr}</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedLiaison.ruleExplanationFr}</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed" dir="rtl">{selectedLiaison.ruleExplanationAr}</p>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Exemples Pratiques d'Application :</div>
                {selectedLiaison.examples.map((eg, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                        <span>{eg.phraseFr}</span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {eg.phoneticAlert}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400" dir="rtl">{eg.translationAr}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakFrench(eg.phraseFr)}
                      className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all cursor-pointer shrink-0"
                      title="Écouter la phrase complète"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LABORATOIRE DES PRONOMS (COD, COI, EN, Y) */}
        {activeTab === 'pronoms' && (
          <div className="space-y-6">
            {/* Pronoun Category Picker */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {FRENCH_PRONOUN_RULES.map((rule) => (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setSelectedPronounRule(rule)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedPronounRule.id === rule.id
                      ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-md font-bold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-base font-mono font-bold">{rule.category}</div>
                  <div className="text-[11px] truncate mt-0.5">{rule.titleAr}</div>
                </button>
              ))}
            </div>

            {/* Selected Rule Explanation */}
            <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span>{selectedPronounRule.titleFr}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      {selectedPronounRule.category}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5" dir="rtl">{selectedPronounRule.titleAr}</p>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                  {selectedPronounRule.replacedForms}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="font-bold text-slate-300 mb-1">Règle d'or (Français) :</div>
                  <p className="text-slate-400 leading-relaxed">{selectedPronounRule.ruleFr}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800" dir="rtl">
                  <div className="font-bold text-slate-300 mb-1">الشرح والتطبيق (العربية) :</div>
                  <p className="text-slate-400 leading-relaxed font-arabic">{selectedPronounRule.ruleAr}</p>
                </div>
              </div>

              {/* Interactive Audio Examples */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Modèles de Questions / Réponses :</div>
                {selectedPronounRule.examples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs sm:text-sm font-semibold text-slate-200">
                        <span className="text-blue-400 font-bold">Q :</span> {item.questionFr}
                      </div>
                      <button
                        type="button"
                        onClick={() => speakFrench(item.questionFr)}
                        className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-300 transition-all cursor-pointer"
                        title="Écouter la question"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-900">
                      <div className="text-xs sm:text-sm font-bold text-emerald-300">
                        <span className="text-emerald-400">R :</span> {item.answerFr}
                      </div>
                      <button
                        type="button"
                        onClick={() => speakFrench(item.answerFr)}
                        className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all cursor-pointer"
                        title="Écouter la réponse"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 bg-slate-900/50 p-2 rounded-lg" dir="rtl">
                      💡 {item.explanationAr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COMMUNICATIVE SITUATIONS SIMULATOR */}
        {activeTab === 'situations' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400">
                Situation {currentSitIndex + 1} sur {FRENCH_SITUATION_SCENARIOS.length}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono bg-blue-500/10 text-blue-300 px-3 py-1 rounded-xl border border-blue-500/20">
                <Award className="w-3.5 h-3.5" />
                Score: {situationScore}
              </div>
            </div>

            {/* Current Scenario Card */}
            {(() => {
              const sit = FRENCH_SITUATION_SCENARIOS[currentSitIndex];
              return (
                <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-5 shadow-xl">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">{sit.unitTitle}</span>
                    <h3 className="text-base font-bold text-slate-100">{sit.situationPromptFr}</h3>
                    <p className="text-xs text-slate-400" dir="rtl">{sit.situationPromptAr}</p>
                  </div>

                  {/* Choice Buttons */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (chosenSitChoice !== null) return;
                        setChosenSitChoice('correct');
                        setSituationScore((prev) => prev + 1);
                        speakFrench(sit.correctResponseFr);
                      }}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        chosenSitChoice === 'correct'
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300'
                          : chosenSitChoice !== null
                          ? 'opacity-60 bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-950 border-slate-800 hover:border-blue-500/40 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div>A) {sit.correctResponseFr}</div>
                        {chosenSitChoice !== null && (
                          <div className="text-xs font-normal text-slate-400" dir="rtl">{sit.correctResponseAr}</div>
                        )}
                      </div>
                      {chosenSitChoice === 'correct' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (chosenSitChoice !== null) return;
                        setChosenSitChoice('trap');
                        speakFrench(sit.trapDistractorFr);
                      }}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        chosenSitChoice === 'trap'
                          ? 'bg-rose-500/20 border-rose-500/60 text-rose-300'
                          : chosenSitChoice !== null
                          ? 'opacity-60 bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-950 border-slate-800 hover:border-blue-500/40 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div>B) {sit.trapDistractorFr}</div>
                        {chosenSitChoice !== null && (
                          <div className="text-xs font-normal text-rose-300/80" dir="rtl">
                            ⚠️ {sit.trapExplanationAr}
                          </div>
                        )}
                      </div>
                      {chosenSitChoice === 'trap' && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  </div>

                  {/* Next Scenario Button */}
                  {chosenSitChoice !== null && (
                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setChosenSitChoice(null);
                          setCurrentSitIndex((prev) => (prev + 1) % FRENCH_SITUATION_SCENARIOS.length);
                        }}
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-blue-500/20"
                      >
                        Situation Suivante
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 5: LISTENING COMPREHENSION EXAMINATION */}
        {activeTab === 'ecoute' && (
          <div className="space-y-6">
            {/* Track Selector Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {FRENCH_LISTENING_TRACKS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    stopAudio();
                    setActiveTrack(t);
                    setExamAnswers({});
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    activeTrack.id === t.id
                      ? 'bg-blue-500/15 border-blue-500/50 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200 line-clamp-1">{t.titleFr}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 truncate" dir="rtl">{t.titleAr}</div>
                </button>
              ))}
            </div>

            {/* Active Audio Player Deck */}
            <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-blue-400" />
                    <span>{activeTrack.titleFr}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5" dir="rtl">{activeTrack.titleAr}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowTranscript(!showTranscript)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      showTranscript
                        ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {showTranscript ? 'Masquer le texte' : 'Afficher le texte'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (isPlayingTrack) {
                        stopAudio();
                      } else {
                        playDialogueTrack(activeTrack);
                      }
                    }}
                    className={`px-4 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isPlayingTrack
                        ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    }`}
                  >
                    {isPlayingTrack ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPlayingTrack ? 'Pause' : 'Écouter le dialogue'}
                  </button>
                </div>
              </div>

              {/* Synchronized Transcript View */}
              {showTranscript && (
                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {activeTrack.dialogueTurns.map((turn, idx) => {
                    const isCurrent = isPlayingTrack && currentTurnIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border transition-all ${
                          isCurrent
                            ? 'bg-blue-500/20 border-blue-500/60 shadow-md text-white'
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 text-xs font-bold text-blue-400 mb-0.5">
                          <span>{turn.speaker} <span className="text-slate-500 font-normal">({turn.speakerRoleFr})</span></span>
                          <button
                            type="button"
                            onClick={() => speakFrench(turn.textFr)}
                            className="p-1 rounded text-slate-400 hover:text-blue-300 transition-all cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-xs sm:text-sm font-medium">{turn.textFr}</div>
                        <div className="text-xs text-slate-400 mt-1" dir="rtl">{turn.textAr}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Comprehension Exam Items */}
              <div className="pt-3 border-t border-slate-800/80 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                  Questions de Compréhension (Style Examen du Bac) :
                </div>

                {activeTrack.comprehensionQuestions.map((q) => {
                  const selectedIdx = examAnswers[q.id];
                  const hasAnswered = selectedIdx !== undefined;
                  const isCorrect = selectedIdx === q.correctIndex;

                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="text-xs sm:text-sm font-bold text-slate-200">
                        {q.questionFr}
                        <div className="text-xs font-normal text-slate-400 mt-0.5" dir="rtl">{q.questionAr}</div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.optionsFr.map((opt, optIdx) => {
                          const isOptionSelected = selectedIdx === optIdx;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => {
                                if (hasAnswered) return;
                                setExamAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                              }}
                              className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                                isOptionSelected
                                  ? optIdx === q.correctIndex
                                    ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                                    : 'bg-rose-500/20 border-rose-500/60 text-rose-300'
                                  : hasAnswered && optIdx === q.correctIndex
                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}) {opt}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div
                          className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                            isCorrect ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          )}
                          <div className="space-y-0.5">
                            <div>{q.explanationFr}</div>
                            <div className="text-slate-400" dir="rtl">{q.explanationAr}</div>
                          </div>
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
    </div>
  );
};
