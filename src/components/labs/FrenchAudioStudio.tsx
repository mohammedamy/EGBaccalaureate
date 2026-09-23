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
import { StudioVoiceSelector } from './StudioVoiceSelector';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast' | 'contrast';
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
  const isContrast = theme === 'high-contrast' || (theme as string) === 'contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>('nasales');

  // Audio Engine Settings
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string | null>(null);
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
      voiceName: selectedVoiceName || undefined,
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
      voiceName: selectedVoiceName || undefined,
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
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/95 border-slate-800 text-slate-100'
      }`}
      dir="ltr"
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header */}
      <div className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-4 ${
        isLight
          ? 'border-slate-200 bg-slate-50/80'
          : isContrast
          ? 'border-amber-400/50 bg-black'
          : 'border-slate-800/80 bg-slate-900/40'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-rose-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded border ${
                isLight
                  ? 'bg-blue-100 text-blue-900 border-blue-200'
                  : isContrast
                  ? 'bg-black text-amber-300 border-amber-400'
                  : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
              }`}>
                FR-3È SEC • CLUB @DOS PLUS 3
              </span>
              <span className={`text-xs font-mono font-medium ${
                isLight ? 'text-slate-700' : isContrast ? 'text-amber-200' : 'text-slate-400'
              }`}>
                🇫🇷 Parisien (fr-FR)
              </span>
            </div>
            <h2 className={`text-base sm:text-lg font-bold flex items-center gap-2 mt-1 ${
              isLight ? 'text-slate-950' : isContrast ? 'text-white' : 'text-slate-100'
            }`}>
              Station d'Écoute & Phonétique Française
              <span className={`text-xs font-medium hidden sm:inline ${
                isLight ? 'text-slate-600' : isContrast ? 'text-amber-300/80' : 'text-slate-400'
              }`} dir="rtl">
                (معمل الصوتيات والاستماع للثانوية العامة)
              </span>
            </h2>
          </div>
        </div>

        {/* Playback Rate & Audio Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <StudioVoiceSelector
            lang="fr-FR"
            speechRate={speechRate}
            onRateChange={setSpeechRate}
            selectedVoiceName={selectedVoiceName}
            onVoiceChange={setSelectedVoiceName}
            themeColor="blue"
            isLight={isLight}
            isContrast={isContrast}
            sampleText="Bonjour et bienvenue au studio de phonétique française pour le baccalauréat."
          />

          {currentlyPlayingText && (
            <button
              type="button"
              onClick={stopAudio}
              className={`px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer min-h-[44px] ${
                isLight
                  ? 'bg-rose-100 border-rose-300 text-rose-900 hover:bg-rose-200 shadow-xs'
                  : isContrast
                  ? 'bg-black border-rose-400 text-rose-300 hover:bg-rose-950'
                  : 'bg-rose-500/20 border-rose-500/40 text-rose-300 hover:bg-rose-500/30'
              }`}
            >
              <Pause className="w-4 h-4" />
              Arrêter
            </button>
          )}

          <button
            type="button"
            onClick={toggleFullscreen}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-xs'
                : isContrast
                ? 'bg-black border-amber-400 text-amber-300 hover:bg-stone-900'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title={isFullscreen ? 'Quitter Plein Écran' : 'Plein Écran'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className={`w-4 h-4 ${isLight ? 'text-blue-700' : isContrast ? 'text-amber-400' : 'text-blue-400'}`} />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className={`px-4 border-b flex overflow-x-auto no-scrollbar gap-1.5 pt-2 ${
        isLight
          ? 'border-slate-200 bg-slate-100/90'
          : isContrast
          ? 'border-amber-400/50 bg-black'
          : 'border-slate-800/80 bg-slate-900/40'
      }`}>
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
              className={`px-4 py-3 rounded-t-xl text-xs font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap min-h-[44px] ${
                isActive
                  ? isLight
                    ? 'border-blue-600 text-blue-800 bg-white shadow-xs font-black'
                    : isContrast
                    ? 'border-amber-400 text-amber-300 bg-stone-900 font-black'
                    : 'border-blue-500 text-blue-400 bg-blue-500/10'
                  : isLight
                  ? 'border-transparent text-slate-700 hover:text-slate-950 hover:bg-white/60 font-semibold'
                  : isContrast
                  ? 'border-transparent text-stone-300 hover:text-white hover:bg-stone-900'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.labelFr}</span>
              <span className={`text-[11px] font-medium hidden md:inline ${
                isActive
                  ? isLight ? 'text-blue-700' : isContrast ? 'text-amber-300' : 'text-blue-400'
                  : isLight ? 'text-slate-600' : isContrast ? 'text-stone-400' : 'text-slate-500'
              }`} dir="rtl">({tab.labelAr})</span>
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
              {FRENCH_NASAL_VOWELS.map((nasal) => {
                const isSelected = selectedNasal.ipa === nasal.ipa;
                return (
                  <button
                    key={nasal.ipa}
                    type="button"
                    onClick={() => {
                      setSelectedNasal(nasal);
                      speakFrench(nasal.exemplarWords[0].word);
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50 border-2 border-blue-600 shadow-md ring-2 ring-blue-600/20 text-slate-900'
                          : isContrast
                          ? 'bg-stone-900 border-2 border-amber-400 text-white shadow-md'
                          : 'bg-blue-500/15 border-blue-500/50 shadow-lg shadow-blue-500/10 text-white'
                        : isLight
                        ? 'bg-white border border-slate-300 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 shadow-xs'
                        : isContrast
                        ? 'bg-black border border-stone-700 hover:border-amber-400 text-stone-200'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className={`text-xl font-bold font-mono mb-1 ${
                      isSelected
                        ? isLight ? 'text-blue-800 font-extrabold' : isContrast ? 'text-amber-300 font-extrabold' : 'text-blue-400'
                        : isLight ? 'text-blue-700 font-bold' : isContrast ? 'text-amber-300' : 'text-blue-400'
                    }`}>{nasal.ipa}</div>
                    <div className={`text-xs font-bold ${
                      isSelected
                        ? isLight ? 'text-slate-950 font-black' : isContrast ? 'text-white' : 'text-slate-100'
                        : isLight ? 'text-slate-900 font-semibold' : isContrast ? 'text-stone-300' : 'text-slate-200'
                    }`}>{nasal.spellingPatterns.join(', ')}</div>
                    <div className={`text-[11px] mt-1 truncate font-medium ${
                      isSelected
                        ? isLight ? 'text-slate-800 font-bold' : isContrast ? 'text-amber-200' : 'text-slate-300'
                        : isLight ? 'text-slate-700' : isContrast ? 'text-stone-400' : 'text-slate-400'
                    }`} dir="rtl">{nasal.nameAr}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Nasal Deep Dive */}
            <div className={`p-5 rounded-3xl border space-y-4 shadow-sm ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900'
                : isContrast
                ? 'bg-black border-amber-400 text-white'
                : 'bg-slate-900/70 border-slate-800 text-slate-100'
            }`}>
              <div className={`flex flex-wrap items-center justify-between gap-2 pb-3 border-b ${
                isLight ? 'border-slate-200' : isContrast ? 'border-amber-400/40' : 'border-slate-800/80'
              }`}>
                <div>
                  <h3 className={`text-base font-bold flex items-center gap-2 ${
                    isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-100'
                  }`}>
                    <span className={`text-xl font-mono font-black ${
                      isLight ? 'text-blue-700' : isContrast ? 'text-amber-300' : 'text-blue-400'
                    }`}>{selectedNasal.ipa}</span>
                    <span>{selectedNasal.nameEn}</span>
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${
                    isLight ? 'text-slate-700' : isContrast ? 'text-amber-200' : 'text-slate-400'
                  }`} dir="rtl">{selectedNasal.nameAr}</p>
                </div>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                  isLight
                    ? 'bg-blue-50 text-blue-900 border-blue-200'
                    : isContrast
                    ? 'bg-stone-900 text-amber-300 border-amber-400'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}>
                  Graphies: {selectedNasal.spellingPatterns.join(', ')}
                </span>
              </div>

              {/* Exemplar Audio Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {selectedNasal.exemplarWords.map((item) => (
                  <div
                    key={item.word}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 group transition-all ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 hover:border-blue-400 hover:bg-blue-50/30 shadow-xs'
                        : isContrast
                        ? 'bg-stone-950 border-stone-800 text-white hover:border-amber-400'
                        : 'bg-slate-950/80 border-slate-800 text-slate-100 hover:border-blue-500/40'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-bold ${isLight ? 'text-slate-950' : 'text-slate-100'}`}>{item.word}</div>
                      <div className={`text-xs font-mono font-bold ${isLight ? 'text-blue-800' : 'text-blue-400'}`}>{item.phonetic}</div>
                      <div className={`text-[11px] font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`} dir="rtl">{item.translationAr}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakFrench(item.word)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                        isLight
                          ? 'bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200 shadow-xs'
                          : isContrast
                          ? 'bg-stone-900 border-amber-400 text-amber-300 hover:bg-stone-800'
                          : 'bg-blue-500/20 border-transparent text-blue-300 hover:bg-blue-500/30'
                      }`}
                      title="Écouter la prononciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Egyptian Trap Warning Alert */}
              <div className={`p-4 rounded-2xl border flex items-start gap-3 text-xs ${
                isLight
                  ? 'bg-amber-50/90 border-2 border-amber-300 text-amber-950 shadow-xs'
                  : isContrast
                  ? 'bg-black border-2 border-amber-400 text-amber-200'
                  : 'bg-amber-500/10 border border-amber-500/30 text-slate-300'
              }`}>
                <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isLight ? 'text-amber-800' : isContrast ? 'text-amber-400' : 'text-amber-400'
                }`} />
                <div className="space-y-1">
                  <div className={`font-bold ${
                    isLight ? 'text-amber-950 font-black' : isContrast ? 'text-amber-300' : 'text-amber-300'
                  }`}>Piège Fréquent à l'Examen :</div>
                  <div className={`leading-relaxed font-medium ${
                    isLight ? 'text-slate-800' : isContrast ? 'text-stone-200' : 'text-slate-300'
                  }`}>{selectedNasal.trapWarningEn}</div>
                  <div className={`leading-relaxed font-arabic font-semibold ${
                    isLight ? 'text-amber-950' : isContrast ? 'text-amber-200' : 'text-amber-200/90'
                  }`} dir="rtl">
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
                  isLight={isLight}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIAISONS & ÉLISIONS */}
        {activeTab === 'liaisons' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {FRENCH_LIAISON_RULES.map((rule) => {
                const isSelected = selectedLiaison.id === rule.id;
                return (
                  <button
                    key={rule.id}
                    type="button"
                    onClick={() => setSelectedLiaison(rule)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50 border-2 border-blue-600 shadow-md ring-2 ring-blue-600/20 text-slate-900'
                          : isContrast
                          ? 'bg-stone-900 border-2 border-amber-400 text-white shadow-md'
                          : 'bg-blue-500/15 border-blue-500/50 shadow-lg text-white'
                        : isLight
                        ? 'bg-white border border-slate-300 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 shadow-xs'
                        : isContrast
                        ? 'bg-black border border-stone-700 hover:border-amber-400 text-stone-200'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block border ${
                        rule.type === 'obligatoire'
                          ? isLight
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            : isContrast
                            ? 'bg-black text-emerald-300 border-emerald-400'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : isLight
                          ? 'bg-rose-100 text-rose-900 border-rose-300'
                          : isContrast
                          ? 'bg-black text-rose-300 border-rose-400'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      {rule.type}
                    </span>
                    <div className={`text-xs font-bold line-clamp-1 ${
                      isSelected
                        ? isLight ? 'text-slate-950 font-black' : 'text-slate-100'
                        : isLight ? 'text-slate-900' : 'text-slate-200'
                    }`}>{rule.titleFr}</div>
                    <div className={`text-[11px] mt-1 truncate font-medium ${
                      isSelected
                        ? isLight ? 'text-slate-800' : 'text-slate-300'
                        : isLight ? 'text-slate-700' : 'text-slate-400'
                    }`} dir="rtl">{rule.titleAr}</div>
                  </button>
                );
              })}
            </div>

            <div className={`p-5 rounded-3xl border space-y-4 shadow-sm ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900'
                : isContrast
                ? 'bg-black border-amber-400 text-white'
                : 'bg-slate-900/70 border-slate-800 text-slate-100'
            }`}>
              <div className={`border-b pb-3 ${
                isLight ? 'border-slate-200' : isContrast ? 'border-amber-400/40' : 'border-slate-800/80'
              }`}>
                <h3 className={`text-base font-bold ${isLight ? 'text-slate-950' : 'text-slate-100'}`}>{selectedLiaison.titleFr}</h3>
                <p className={`text-xs font-bold mt-1 ${isLight ? 'text-blue-800' : 'text-blue-400'}`} dir="rtl">{selectedLiaison.titleAr}</p>
                <p className={`text-xs mt-2 leading-relaxed font-medium ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>{selectedLiaison.ruleExplanationFr}</p>
                <p className={`text-xs mt-1 leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`} dir="rtl">{selectedLiaison.ruleExplanationAr}</p>
              </div>

              <div className="space-y-2.5">
                <div className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Exemples Pratiques d'Application :</div>
                {selectedLiaison.examples.map((eg, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-4 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-xs'
                        : isContrast
                        ? 'bg-stone-950 border-stone-800 text-white'
                        : 'bg-slate-950/80 border-slate-800 text-slate-100'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className={`text-sm font-bold flex items-center gap-2 flex-wrap ${isLight ? 'text-slate-950' : 'text-slate-100'}`}>
                        <span>{eg.phraseFr}</span>
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                          isLight
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            : isContrast
                            ? 'bg-black text-emerald-300 border-emerald-400'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                          {eg.phoneticAlert}
                        </span>
                      </div>
                      <div className={`text-xs font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`} dir="rtl">{eg.translationAr}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakFrench(eg.phraseFr)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                        isLight
                          ? 'bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200 shadow-xs'
                          : isContrast
                          ? 'bg-stone-900 border-amber-400 text-amber-300 hover:bg-stone-800'
                          : 'bg-blue-500/20 border-transparent text-blue-300 hover:bg-blue-500/30'
                      }`}
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
              {FRENCH_PRONOUN_RULES.map((rule) => {
                const isSelected = selectedPronounRule.id === rule.id;
                return (
                  <button
                    key={rule.id}
                    type="button"
                    onClick={() => setSelectedPronounRule(rule)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50 border-2 border-blue-600 text-blue-900 shadow-md font-black ring-2 ring-blue-600/20'
                          : isContrast
                          ? 'bg-stone-900 border-2 border-amber-400 text-amber-300 shadow-md font-bold'
                          : 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-md font-bold'
                        : isLight
                        ? 'bg-white border border-slate-300 text-slate-800 hover:border-blue-400 hover:text-slate-950 shadow-xs font-semibold'
                        : isContrast
                        ? 'bg-black border border-stone-700 text-stone-400 hover:text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-base font-mono font-bold">{rule.category}</div>
                    <div className="text-[11px] truncate mt-0.5 font-medium">{rule.titleAr}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Rule Explanation */}
            <div className={`p-5 rounded-3xl border space-y-4 shadow-sm ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900'
                : isContrast
                ? 'bg-black border-amber-400 text-white'
                : 'bg-slate-900/70 border-slate-800 text-slate-100'
            }`}>
              <div className={`flex flex-wrap items-center justify-between gap-2 pb-3 border-b ${
                isLight ? 'border-slate-200' : isContrast ? 'border-amber-400/40' : 'border-slate-800/80'
              }`}>
                <div>
                  <h3 className={`text-base font-bold flex items-center gap-2 ${
                    isLight ? 'text-slate-950' : 'text-slate-100'
                  }`}>
                    <span>{selectedPronounRule.titleFr}</span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      isLight
                        ? 'bg-blue-100 text-blue-900 border-blue-200'
                        : isContrast
                        ? 'bg-stone-900 text-amber-300 border-amber-400'
                        : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                    }`}>
                      {selectedPronounRule.category}
                    </span>
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${
                    isLight ? 'text-slate-700' : isContrast ? 'text-amber-200' : 'text-slate-400'
                  }`} dir="rtl">{selectedPronounRule.titleAr}</p>
                </div>
                <div className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
                  isLight
                    ? 'bg-slate-100 text-slate-800 border-slate-300'
                    : isContrast
                    ? 'bg-black text-amber-200 border-amber-400'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}>
                  {selectedPronounRule.replacedForms}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-xl border ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : isContrast
                    ? 'bg-stone-950 border-stone-800 text-stone-200'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300'
                }`}>
                  <div className={`font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-slate-300'}`}>Règle d'or (Français) :</div>
                  <p className={`leading-relaxed font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>{selectedPronounRule.ruleFr}</p>
                </div>
                <div className={`p-3 rounded-xl border ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : isContrast
                    ? 'bg-stone-950 border-stone-800 text-stone-200'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300'
                }`} dir="rtl">
                  <div className={`font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-slate-300'}`}>الشرح والتطبيق (العربية) :</div>
                  <p className={`leading-relaxed font-arabic font-medium ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>{selectedPronounRule.ruleAr}</p>
                </div>
              </div>

              {/* Interactive Audio Examples */}
              <div className="space-y-3 pt-2">
                <div className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>Modèles de Questions / Réponses :</div>
                {selectedPronounRule.examples.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border space-y-2.5 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-xs'
                        : isContrast
                        ? 'bg-stone-950 border-stone-800 text-stone-200'
                        : 'bg-slate-950/80 border-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                        <span className={`font-bold ${isLight ? 'text-blue-800' : 'text-blue-400'}`}>Q :</span> {item.questionFr}
                      </div>
                      <button
                        type="button"
                        onClick={() => speakFrench(item.questionFr)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                          isLight
                            ? 'bg-white border-slate-300 text-slate-700 hover:text-blue-900 hover:bg-blue-50 shadow-xs'
                            : isContrast
                            ? 'bg-black border-stone-700 text-stone-300 hover:text-white'
                            : 'bg-slate-900 border-transparent text-slate-400 hover:text-blue-300'
                        }`}
                        title="Écouter la question"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className={`flex items-center justify-between gap-3 pt-2 border-t ${
                      isLight ? 'border-slate-200' : isContrast ? 'border-stone-800' : 'border-slate-900'
                    }`}>
                      <div className={`text-xs sm:text-sm font-bold ${
                        isLight ? 'text-emerald-950' : 'text-emerald-300'
                      }`}>
                        <span className={isLight ? 'text-emerald-800' : 'text-emerald-400'}>R :</span> {item.answerFr}
                      </div>
                      <button
                        type="button"
                        onClick={() => speakFrench(item.answerFr)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                          isLight
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-900 hover:bg-emerald-200 shadow-xs'
                            : isContrast
                            ? 'bg-stone-900 border-emerald-400 text-emerald-300 hover:bg-stone-800'
                            : 'bg-emerald-500/20 border-transparent text-emerald-300 hover:bg-emerald-500/30'
                        }`}
                        title="Écouter la réponse"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className={`text-xs p-2.5 rounded-xl font-medium border ${
                      isLight
                        ? 'bg-white border-slate-200 text-slate-800'
                        : isContrast
                        ? 'bg-black border-stone-800 text-stone-300'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300'
                    }`} dir="rtl">
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
              <span className={`text-xs font-bold ${
                isLight ? 'text-blue-800' : isContrast ? 'text-amber-300' : 'text-blue-400'
              }`}>
                Situation {currentSitIndex + 1} sur {FRENCH_SITUATION_SCENARIOS.length}
              </span>
              <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
                isLight
                  ? 'bg-blue-50 text-blue-900 border-blue-200'
                  : isContrast
                  ? 'bg-black text-amber-300 border-amber-400'
                  : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
              }`}>
                <Award className="w-4 h-4" />
                Score: {situationScore}
              </div>
            </div>

            {/* Current Scenario Card */}
            {(() => {
              const sit = FRENCH_SITUATION_SCENARIOS[currentSitIndex];
              return (
                <div className={`p-6 rounded-3xl border space-y-5 shadow-lg ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-900'
                    : isContrast
                    ? 'bg-black border-amber-400 text-white'
                    : 'bg-slate-900/70 border-slate-800 text-slate-100'
                }`}>
                  <div className="space-y-1.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isLight ? 'text-blue-800' : isContrast ? 'text-amber-300' : 'text-blue-400'
                    }`}>{sit.unitTitle}</span>
                    <h3 className={`text-base font-bold ${
                      isLight ? 'text-slate-950' : isContrast ? 'text-white' : 'text-slate-100'
                    }`}>{sit.situationPromptFr}</h3>
                    <p className={`text-xs font-medium ${
                      isLight ? 'text-slate-700' : isContrast ? 'text-amber-200' : 'text-slate-400'
                    }`} dir="rtl">{sit.situationPromptAr}</p>
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
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer min-h-[44px] ${
                        chosenSitChoice === 'correct'
                          ? isLight
                            ? 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950 shadow-md font-bold'
                            : isContrast
                            ? 'bg-stone-900 border-2 border-emerald-400 text-emerald-300 shadow-md font-bold'
                            : 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300'
                          : chosenSitChoice !== null
                          ? isLight
                            ? 'opacity-60 bg-slate-100 border-slate-300 text-slate-600'
                            : isContrast
                            ? 'opacity-50 bg-stone-900 border-stone-800 text-stone-400'
                            : 'opacity-60 bg-slate-900 border-slate-800 text-slate-300'
                          : isLight
                          ? 'bg-slate-50 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/40 text-slate-900 shadow-xs'
                          : isContrast
                          ? 'bg-black border border-stone-700 hover:border-amber-400 text-white'
                          : 'bg-slate-950 border-slate-800 hover:border-blue-500/40 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div>A) {sit.correctResponseFr}</div>
                        {chosenSitChoice !== null && (
                          <div className={`text-xs font-medium ${
                            isLight ? 'text-slate-700' : isContrast ? 'text-stone-300' : 'text-slate-400'
                          }`} dir="rtl">{sit.correctResponseAr}</div>
                        )}
                      </div>
                      {chosenSitChoice === 'correct' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (chosenSitChoice !== null) return;
                        setChosenSitChoice('trap');
                        speakFrench(sit.trapDistractorFr);
                      }}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer min-h-[44px] ${
                        chosenSitChoice === 'trap'
                          ? isLight
                            ? 'bg-rose-50 border-2 border-rose-600 text-rose-950 shadow-md font-bold'
                            : isContrast
                            ? 'bg-stone-900 border-2 border-rose-400 text-rose-300 shadow-md font-bold'
                            : 'bg-rose-500/20 border-rose-500/60 text-rose-300'
                          : chosenSitChoice !== null
                          ? isLight
                            ? 'opacity-60 bg-slate-100 border-slate-300 text-slate-600'
                            : isContrast
                            ? 'opacity-50 bg-stone-900 border-stone-800 text-stone-400'
                            : 'opacity-60 bg-slate-900 border-slate-800 text-slate-300'
                          : isLight
                          ? 'bg-slate-50 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/40 text-slate-900 shadow-xs'
                          : isContrast
                          ? 'bg-black border border-stone-700 hover:border-amber-400 text-white'
                          : 'bg-slate-950 border-slate-800 hover:border-blue-500/40 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div>B) {sit.trapDistractorFr}</div>
                        {chosenSitChoice !== null && (
                          <div className={`text-xs font-medium ${
                            isLight ? 'text-rose-950' : isContrast ? 'text-rose-300' : 'text-rose-300/80'
                          }`} dir="rtl">
                            ⚠️ {sit.trapExplanationAr}
                          </div>
                        )}
                      </div>
                      {chosenSitChoice === 'trap' && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
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
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-md min-h-[44px]"
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
              {FRENCH_LISTENING_TRACKS.map((t) => {
                const isSelected = activeTrack.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      stopAudio();
                      setActiveTrack(t);
                      setExamAnswers({});
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50 border-2 border-blue-600 text-slate-950 shadow-md font-bold ring-2 ring-blue-600/20'
                          : isContrast
                          ? 'bg-stone-900 border-2 border-amber-400 text-white shadow-md font-bold'
                          : 'bg-blue-500/15 border-blue-500/50 text-white shadow-md'
                        : isLight
                        ? 'bg-white border border-slate-300 text-slate-800 hover:border-blue-400 hover:text-slate-950 shadow-xs'
                        : isContrast
                        ? 'bg-black border border-stone-700 text-stone-400 hover:text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className={`text-xs font-bold line-clamp-1 ${
                      isSelected ? (isLight ? 'text-slate-950 font-black' : 'text-slate-100') : (isLight ? 'text-slate-900' : 'text-slate-200')
                    }`}>{t.titleFr}</div>
                    <div className={`text-[10px] mt-0.5 truncate font-medium ${
                      isSelected ? (isLight ? 'text-slate-800' : 'text-slate-300') : (isLight ? 'text-slate-600' : 'text-slate-400')
                    }`} dir="rtl">{t.titleAr}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Audio Player Deck */}
            <div className={`p-5 rounded-3xl border space-y-4 shadow-sm ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900'
                : isContrast
                ? 'bg-black border-amber-400 text-white'
                : 'bg-slate-900/70 border-slate-800 text-slate-100'
            }`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
                isLight ? 'border-slate-200' : isContrast ? 'border-amber-400/40' : 'border-slate-800/80'
              }`}>
                <div>
                  <h3 className={`text-base font-bold flex items-center gap-2 ${
                    isLight ? 'text-slate-950' : 'text-slate-100'
                  }`}>
                    <Headphones className={`w-4 h-4 ${isLight ? 'text-blue-700' : 'text-blue-400'}`} />
                    <span>{activeTrack.titleFr}</span>
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${
                    isLight ? 'text-slate-700' : 'text-slate-400'
                  }`} dir="rtl">{activeTrack.titleAr}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowTranscript(!showTranscript)}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-bold cursor-pointer transition-all min-h-[44px] ${
                      showTranscript
                        ? isLight
                          ? 'bg-blue-100 border-blue-300 text-blue-900'
                          : isContrast
                          ? 'bg-stone-900 border-amber-400 text-amber-300'
                          : 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                        : isLight
                        ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        : isContrast
                        ? 'bg-black border-stone-700 text-stone-300'
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
                    className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer min-h-[44px] ${
                      isPlayingTrack
                        ? isLight
                          ? 'bg-rose-100 border-rose-300 text-rose-900'
                          : isContrast
                          ? 'bg-black border-rose-400 text-rose-300'
                          : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    }`}
                  >
                    {isPlayingTrack ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
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
                            ? isLight
                              ? 'bg-blue-50 border-2 border-blue-600 text-slate-950 shadow-md ring-1 ring-blue-600/30'
                              : isContrast
                              ? 'bg-stone-900 border-2 border-amber-400 text-white shadow-md'
                              : 'bg-blue-500/20 border-blue-500/60 shadow-md text-white'
                            : isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-800'
                            : isContrast
                            ? 'bg-black border-stone-800 text-stone-300'
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className={`flex items-center justify-between gap-2 text-xs font-bold mb-0.5 ${
                          isLight ? 'text-blue-800' : 'text-blue-400'
                        }`}>
                          <span>{turn.speaker} <span className={`font-normal ${isLight ? 'text-slate-600' : 'text-slate-500'}`}>({turn.speakerRoleFr})</span></span>
                          <button
                            type="button"
                            onClick={() => speakFrench(turn.textFr)}
                            className={`p-1.5 rounded transition-all cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center ${
                              isLight
                                ? 'text-slate-700 hover:text-blue-900 hover:bg-blue-100'
                                : isContrast
                                ? 'text-stone-300 hover:text-amber-300'
                                : 'text-slate-400 hover:text-blue-300'
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${isLight ? 'text-slate-950 font-semibold' : ''}`}>{turn.textFr}</div>
                        <div className={`text-xs font-medium mt-1 ${isLight ? 'text-slate-700' : 'text-slate-400'}`} dir="rtl">{turn.textAr}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Comprehension Exam Items */}
              <div className={`pt-3 border-t space-y-4 ${
                isLight ? 'border-slate-200' : isContrast ? 'border-amber-400/40' : 'border-slate-800/80'
              }`}>
                <div className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                  isLight ? 'text-slate-700' : 'text-slate-400'
                }`}>
                  <HelpCircle className={`w-3.5 h-3.5 ${isLight ? 'text-blue-700' : 'text-blue-400'}`} />
                  Questions de Compréhension (Style Examen du Bac) :
                </div>

                {activeTrack.comprehensionQuestions.map((q) => {
                  const selectedIdx = examAnswers[q.id];
                  const hasAnswered = selectedIdx !== undefined;
                  const isCorrect = selectedIdx === q.correctIndex;

                  return (
                    <div key={q.id} className={`p-4 rounded-2xl border space-y-3 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-xs'
                        : isContrast
                        ? 'bg-stone-950 border-stone-800 text-stone-200'
                        : 'bg-slate-950/80 border-slate-800 text-slate-200'
                    }`}>
                      <div className={`text-xs sm:text-sm font-bold ${isLight ? 'text-slate-950' : 'text-slate-200'}`}>
                        {q.questionFr}
                        <div className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-700' : 'text-slate-400'}`} dir="rtl">{q.questionAr}</div>
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
                              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] flex items-center ${
                                isOptionSelected
                                  ? optIdx === q.correctIndex
                                    ? isLight
                                      ? 'bg-emerald-50 border-2 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                                      : 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                                    : isLight
                                    ? 'bg-rose-50 border-2 border-rose-600 text-rose-950 font-bold shadow-xs'
                                    : 'bg-rose-500/20 border-rose-500/60 text-rose-300'
                                  : hasAnswered && optIdx === q.correctIndex
                                  ? isLight
                                    ? 'bg-emerald-50/80 border border-emerald-400 text-emerald-950 font-semibold'
                                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                  : isLight
                                  ? 'bg-white border-slate-300 text-slate-800 hover:border-blue-400 hover:bg-blue-50/50 shadow-xs'
                                  : isContrast
                                  ? 'bg-black border-stone-700 text-stone-300 hover:border-amber-400'
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
                          className={`p-3 rounded-xl text-xs flex items-start gap-2.5 font-medium border ${
                            isCorrect
                              ? isLight
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                                : 'bg-emerald-500/10 border-transparent text-emerald-300'
                              : isLight
                              ? 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-rose-500/10 border-transparent text-rose-300'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                          ) : (
                            <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-rose-700' : 'text-rose-400'}`} />
                          )}
                          <div className="space-y-0.5">
                            <div>{q.explanationFr}</div>
                            <div className={isLight ? 'text-slate-700' : 'text-slate-400'} dir="rtl">{q.explanationAr}</div>
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
