import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Language } from '../../i18n/translations';
import {
  IPA_PHONEMES,
  MINIMAL_PAIRS,
  STRESS_SHIFT_WORDS,
  SUFFIX_STRESS_RULES,
  CONNECTED_SPEECH_DATA,
  LISTENING_TRACKS,
  type Phoneme,
  type MinimalPair,
  type StressShiftWord,
  type ListeningTrack,
} from '../../data/audioLab/englishAudioLabData';
import {
  Volume2,
  Mic,
  MicOff,
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
  Activity,
  Award,
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
}

type StudioTab = 'phonetics' | 'stress' | 'connected' | 'listening' | 'voice_test';

import { RealisticVocalTractSchematic, type ArticulatoryPlace } from './RealisticVocalTractSchematic';

// ---------------------------------------------------------------------------
// 1. High-Resolution Vocal Tract Sagittal Articulatory Schematic
// ---------------------------------------------------------------------------
interface VocalTractProps {
  phoneme: Phoneme;
  isLight: boolean;
}

const VocalTractSagittalArticulatorySchematic: React.FC<VocalTractProps> = ({ phoneme, isLight }) => {
  const s = phoneme.symbol;
  let place: ArticulatoryPlace = 'alveolar';
  if (['/p/', '/b/', '/m/', '/w/'].includes(s)) place = 'bilabial';
  else if (['/f/', '/v/'].includes(s)) place = 'labiodental';
  else if (['/θ/', '/ð/'].includes(s)) place = 'dental';
  else if (['/t/', '/d/', '/s/', '/z/', '/n/', '/l/'].includes(s)) place = 'alveolar';
  else if (['/ʃ/', '/ʒ/', '/tʃ/', '/dʒ/', '/r/'].includes(s)) place = 'post_alveolar';
  else if (['/j/'].includes(s)) place = 'palatal';
  else if (['/k/', '/g/', '/ŋ/'].includes(s)) place = 'velar';
  else if (['/h/'].includes(s)) place = 'glottal';
  else if (['/iː/', '/ɪ/'].includes(s)) place = 'vowel_front_high';
  else if (['/uː/', '/ʊ/'].includes(s)) place = 'vowel_back_high';
  else if (['/ɑː/', '/æ/', '/ʌ/', '/ɒ/'].includes(s)) place = 'vowel_open_low';
  else if (phoneme.category.includes('vowel')) place = 'vowel_central';

  const isVoiced =
    phoneme.category === 'voiced_consonant' ||
    phoneme.category.includes('vowel') ||
    phoneme.category === 'diphthong';
  const isNasal = ['/m/', '/n/', '/ŋ/'].includes(s);

  return (
    <RealisticVocalTractSchematic
      symbol={phoneme.symbol}
      name={phoneme.name}
      place={place}
      isVoiced={isVoiced}
      isNasal={isNasal}
      audioExampleWord={phoneme.audioTriggerWord}
      language="en"
      isLight={isLight}
    />
  );
};

// ---------------------------------------------------------------------------
// 2. High-Resolution Acoustic Vowel Trapezoid & Diphthong Vector Schematic
// ---------------------------------------------------------------------------
interface VowelTrapezoidProps {
  phoneme: Phoneme;
  isLight: boolean;
  onSelectVowel: (p: Phoneme) => void;
}

const AcousticVowelTrapezoidSchematic: React.FC<VowelTrapezoidProps> = ({
  phoneme,
  isLight,
  onSelectVowel,
}) => {
  // IPA Coordinate Mapping (F2 Front-Back x F1 Close-Open)
  const vowelCoords: Record<string, { x: number; y: number }> = {
    '/iː/': { x: 70, y: 55 },
    '/ɪ/': { x: 110, y: 85 },
    '/e/': { x: 95, y: 130 },
    '/æ/': { x: 120, y: 225 },
    '/ʌ/': { x: 215, y: 185 },
    '/ɑː/': { x: 265, y: 225 },
    '/ɒ/': { x: 275, y: 195 },
    '/ɔː/': { x: 280, y: 145 },
    '/ʊ/': { x: 250, y: 85 },
    '/uː/': { x: 290, y: 55 },
    '/ɜː/': { x: 185, y: 155 },
    '/ə/': { x: 185, y: 125 }, // Schwa center
  };

  // Diphthong Glides: Start & End points
  const diphthongGlides: Record<string, { from: { x: number; y: number }; to: { x: number; y: number } }> = {
    '/eɪ/': { from: { x: 95, y: 130 }, to: { x: 110, y: 85 } },
    '/aɪ/': { from: { x: 120, y: 225 }, to: { x: 110, y: 85 } },
    '/ɔɪ/': { from: { x: 280, y: 145 }, to: { x: 110, y: 85 } },
    '/əʊ/': { from: { x: 185, y: 125 }, to: { x: 250, y: 85 } },
    '/aʊ/': { from: { x: 170, y: 225 }, to: { x: 250, y: 85 } },
    '/ɪə/': { from: { x: 110, y: 85 }, to: { x: 185, y: 125 } },
    '/eə/': { from: { x: 95, y: 130 }, to: { x: 185, y: 125 } },
    '/ʊə/': { from: { x: 250, y: 85 }, to: { x: 185, y: 125 } },
  };

  const isDiphthong = phoneme.category === 'diphthong';
  const activeGlide = diphthongGlides[phoneme.symbol];

  return (
    <div className={`p-4 rounded-2xl border shadow-lg flex flex-col items-center justify-center space-y-3 ${
      isLight ? 'bg-slate-50 border-violet-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="w-full flex items-center justify-between text-xs">
        <span className="font-bold flex items-center gap-1.5 text-indigo-400">
          <Zap className="w-4 h-4" />
          <span>IPA Acoustic Vowel Quadrilateral (F1 vs. F2 Space)</span>
        </span>
        <span className="text-[11px] font-mono text-slate-400">
          {isDiphthong ? 'DIPHTHONG GLIDE VECTOR' : 'MONOPHTHONG TARGET'}
        </span>
      </div>

      <div className="relative w-full max-w-[360px] aspect-[4/3] flex items-center justify-center">
        <svg viewBox="0 0 360 270" className="w-full h-full select-none">
          <defs>
            <marker id="vowelArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#818cf8" />
            </marker>
          </defs>

          {/* Vowel Trapezoid Outline */}
          {/* Top (Close): 50 to 300; Bottom (Open): 120 to 280 */}
          <polygon
            points="50,45 300,45 280,240 120,240"
            fill="#1e1b4b"
            opacity="0.3"
            stroke="#6366f1"
            strokeWidth="2"
          />

          {/* Horizontal Height Grids: Close-Mid, Open-Mid */}
          <line x1="75" y1="110" x2="293" y2="110" stroke="#4338ca" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="97" y1="175" x2="286" y2="175" stroke="#4338ca" strokeWidth="1" strokeDasharray="3 3" />

          {/* Vertical Backness Grids: Central line */}
          <line x1="175" y1="45" x2="200" y2="240" stroke="#4338ca" strokeWidth="1" strokeDasharray="3 3" />

          {/* Grid Labels */}
          <text x="45" y="35" fill="#a5b4fc" fontSize="9" fontWeight="bold">FRONT (High F2)</text>
          <text x="175" y="35" fill="#a5b4fc" fontSize="9" fontWeight="bold" textAnchor="middle">CENTRAL</text>
          <text x="300" y="35" fill="#a5b4fc" fontSize="9" fontWeight="bold" textAnchor="end">BACK (Low F2)</text>

          <text x="25" y="50" fill="#94a3b8" fontSize="8" fontWeight="bold">CLOSE</text>
          <text x="35" y="113" fill="#94a3b8" fontSize="8" fontWeight="bold">C-MID</text>
          <text x="50" y="178" fill="#94a3b8" fontSize="8" fontWeight="bold">O-MID</text>
          <text x="80" y="243" fill="#94a3b8" fontSize="8" fontWeight="bold">OPEN</text>

          {/* All Monophthong Nodes */}
          {Object.entries(vowelCoords).map(([sym, pt]) => {
            const isSelected = phoneme.symbol === sym;
            const matchingPhoneme = IPA_PHONEMES.find((p) => p.symbol === sym);
            return (
              <g
                key={sym}
                className="cursor-pointer"
                onClick={() => matchingPhoneme && onSelectVowel(matchingPhoneme)}
              >
                {isSelected && (
                  <circle cx={pt.x} cy={pt.y} r="16" fill="none" stroke="#38bdf8" strokeWidth="2" className="animate-ping origin-center" />
                )}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? '10' : '6'}
                  fill={isSelected ? '#38bdf8' : sym === '/ə/' ? '#f59e0b' : '#312e81'}
                  stroke={isSelected ? '#ffffff' : '#818cf8'}
                  strokeWidth="1.5"
                />
                <text
                  x={pt.x}
                  y={pt.y - 12}
                  textAnchor="middle"
                  fill={isSelected ? '#38bdf8' : sym === '/ə/' ? '#fde68a' : '#c7d2fe'}
                  fontSize={isSelected ? '12' : '10'}
                  fontWeight="black"
                  fontFamily="monospace"
                >
                  {sym}
                </text>
              </g>
            );
          })}

          {/* Diphthong Glide Trajectory Arrow */}
          {isDiphthong && activeGlide && (
            <g>
              <line
                x1={activeGlide.from.x}
                y1={activeGlide.from.y}
                x2={activeGlide.to.x}
                y2={activeGlide.to.y}
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeDasharray="5 3"
                markerEnd="url(#vowelArrow)"
              />
              <circle cx={activeGlide.from.x} cy={activeGlide.from.y} r="5" fill="#38bdf8" />
              <text
                x={(activeGlide.from.x + activeGlide.to.x) / 2 + 10}
                y={(activeGlide.from.y + activeGlide.to.y) / 2}
                fill="#fde68a"
                fontSize="11"
                fontWeight="bold"
              >
                Glide {phoneme.symbol}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="w-full text-center p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
        <span className="font-bold">{phoneme.name} ({phoneme.symbol})</span>
        <span className="text-slate-400 block text-[11px] mt-0.5">
          {isDiphthong ? 'Dynamic vocalic glide from nucleus to offglide target' : 'Stable acoustic formant frequency coordinate'}
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. High-Resolution Connected Speech Waveform & Liaison Vector Schematic
// ---------------------------------------------------------------------------
interface ConnectedWaveformProps {
  isLight: boolean;
}

const ConnectedSpeechWaveformVectorSchematic: React.FC<ConnectedWaveformProps> = ({ isLight }) => {
  return (
    <div className={`p-5 rounded-2xl border shadow-lg space-y-3 ${
      isLight ? 'bg-slate-50 border-violet-200' : 'bg-slate-950 border-slate-800'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-violet-400" />
          <h4 className="text-xs font-bold text-violet-300 uppercase tracking-wider">
            Acoustic Waveform & Co-articulation Liaison Architecture
          </h4>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          CONTINUOUS PHONOLOGY
        </span>
      </div>

      <div className="relative w-full aspect-[21/6] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
        <svg viewBox="0 0 760 160" className="w-full h-full select-none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="35%" stopColor="#ec4899" />
              <stop offset="70%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Oscilloscope Grid Lines */}
          <line x1="0" y1="80" x2="760" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="190" y1="10" x2="190" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="380" y1="10" x2="380" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="570" y1="10" x2="570" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

          {/* Time-Domain Waveform Envelope */}
          <path
            d="M 10,80 Q 30,30 50,80 T 90,80 T 130,20 T 160,120 T 190,80 Q 230,40 260,80 T 310,130 T 350,30 T 380,80 Q 420,50 450,110 T 500,80 T 540,25 T 570,80 Q 610,60 640,120 T 690,40 T 730,100 L 750,80"
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Phase 1: Schwa Vowel Reduction */}
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="110" height="24" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
            <text x="55" y="16" textAnchor="middle" fill="#c7d2fe" fontSize="10" fontWeight="bold">1. Schwa Reduction</text>
          </g>

          {/* Phase 2: Intrusive /r/ Linking */}
          <g transform="translate(230, 20)">
            <rect x="0" y="0" width="110" height="24" rx="6" fill="#4a044e" stroke="#c026d3" strokeWidth="1" />
            <text x="55" y="16" textAnchor="middle" fill="#f5d0fe" fontSize="10" fontWeight="bold">2. Linking /r/ & /j/</text>
          </g>

          {/* Phase 3: Consonant Elision */}
          <g transform="translate(420, 20)">
            <rect x="0" y="0" width="110" height="24" rx="6" fill="#083344" stroke="#06b6d4" strokeWidth="1" />
            <text x="55" y="16" textAnchor="middle" fill="#a5f3fc" fontSize="10" fontWeight="bold">3. Alveolar Elision</text>
          </g>

          {/* Phase 4: Regressive Assimilation */}
          <g transform="translate(610, 20)">
            <rect x="0" y="0" width="125" height="24" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
            <text x="62" y="16" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">4. Assimilation</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main EnglishAudioPhoneticsStudio Component
// ---------------------------------------------------------------------------
export const EnglishAudioPhoneticsStudio: React.FC<Props> = ({
  lang: _lang = 'en',
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

  // Current Active Tab
  const [activeTab, setActiveTab] = useState<StudioTab>('phonetics');

  // Audio Engine Settings
  const [accent, setAccent] = useState<'en-GB' | 'en-US'>('en-GB');
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [currentlyPlayingWord, setCurrentlyPlayingWord] = useState<string | null>(null);

  // Tab 1: Phonetics & Minimal Pairs State
  const [selectedPhonemeCategory, setSelectedPhonemeCategory] = useState<string>('all');
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme>(IPA_PHONEMES[0]);
  const [minimalPairIndex, setMinimalPairIndex] = useState<number>(0);
  const [earTestQuestion, setEarTestQuestion] = useState<{
    pair: MinimalPair;
    targetWord: string;
    chosenWord: string | null;
    isCorrect: boolean | null;
  } | null>(null);

  // Tab 2: Syllable Stress State
  const [selectedStressWord, setSelectedStressWord] = useState<StressShiftWord>(STRESS_SHIFT_WORDS[0]);
  const [quizWordIndex, setQuizWordIndex] = useState<number>(0);
  const [selectedSyllableIdx, setSelectedSyllableIdx] = useState<number | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  // Tab 4: Listening Comprehension State
  const [selectedTrackId, setSelectedTrackId] = useState<string>(LISTENING_TRACKS[0].id);
  const [isPlayingTrack, setIsPlayingTrack] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [selectedTrackAnswers, setSelectedTrackAnswers] = useState<Record<string, number>>({});
  const [trackScoreSubmitted, setTrackScoreSubmitted] = useState<boolean>(false);

  // Tab 5: Live Microphone Voice Test State
  const [testWord, setTestWord] = useState<string>('piracy');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcribedSpeech, setTranscribedSpeech] = useState<string>('');
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // AI Vocal Engine Player
  const playAudio = (text: string, forcedAccent?: 'en-GB' | 'en-US', rateOverride?: number) => {
    setCurrentlyPlayingWord(text);
    aiVoiceEngine.speak(text, {
      lang: forcedAccent || accent,
      rate: rateOverride || speechRate,
      onStart: () => setCurrentlyPlayingWord(text),
      onEnd: () => setCurrentlyPlayingWord(null),
      onError: () => setCurrentlyPlayingWord(null),
    });
  };

  // Stop all audio on tab switch or unmount
  useEffect(() => {
    return () => {
      aiVoiceEngine.stopAll();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Filtered Phonemes
  const filteredPhonemes = useMemo(() => {
    if (selectedPhonemeCategory === 'all') return IPA_PHONEMES;
    return IPA_PHONEMES.filter((p) => p.category === selectedPhonemeCategory);
  }, [selectedPhonemeCategory]);

  // Ear-Training Drill Generator
  const generateEarTest = () => {
    const pair = MINIMAL_PAIRS[Math.floor(Math.random() * MINIMAL_PAIRS.length)];
    const target = Math.random() > 0.5 ? pair.word1 : pair.word2;
    setEarTestQuestion({
      pair,
      targetWord: target,
      chosenWord: null,
      isCorrect: null,
    });
    playAudio(target, 'en-GB', 0.85);
  };

  const submitEarTestAnswer = (word: string) => {
    if (!earTestQuestion || earTestQuestion.chosenWord !== null) return;
    const isCorrect = word === earTestQuestion.targetWord;
    setEarTestQuestion({
      ...earTestQuestion,
      chosenWord: word,
      isCorrect,
    });
  };

  // Stress Quiz Evaluation
  const currentQuizItem = STRESS_SHIFT_WORDS[quizWordIndex];
  const checkStressQuiz = (syllableIdx: number, isNounTest: boolean) => {
    setSelectedSyllableIdx(syllableIdx);
    const correctIdx = isNounTest ? 0 : 1; // Nouns stress 1st syllable, verbs stress 2nd syllable
    if (syllableIdx === correctIdx) {
      setQuizFeedback(`Correct! "${isNounTest ? currentQuizItem.word + ' (Noun)' : currentQuizItem.word + ' (Verb)'}" places primary stress on syllable ${syllableIdx + 1}.`);
    } else {
      setQuizFeedback(`Incorrect. Remember: 2-syllable nouns stress syllable 1, while verbs stress syllable 2.`);
    }
  };

  // Active Listening Track
  const currentTrack: ListeningTrack = useMemo(() => {
    return LISTENING_TRACKS.find((t) => t.id === selectedTrackId) || LISTENING_TRACKS[0];
  }, [selectedTrackId]);

  const toggleTrackAudio = () => {
    if (isPlayingTrack) {
      aiVoiceEngine.stopAll();
      setIsPlayingTrack(false);
    } else {
      setIsPlayingTrack(true);
      setCurrentlyPlayingWord(currentTrack.fullText);
      aiVoiceEngine.speak(currentTrack.fullText, {
        lang: currentTrack.recommendedVoice,
        rate: speechRate,
        onStart: () => setIsPlayingTrack(true),
        onEnd: () => {
          setIsPlayingTrack(false);
          setCurrentlyPlayingWord(null);
        },
        onError: () => {
          setIsPlayingTrack(false);
          setCurrentlyPlayingWord(null);
        },
      });
    }
  };

  // Speech Recognition Initializer
  const startSpeechRecognition = () => {
    setRecognitionError(null);
    setTranscribedSpeech('');
    setPronunciationScore(null);

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      setRecognitionError('Speech Recognition is not supported on this browser engine. Please use Google Chrome, Edge, or Safari.');
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = accent;
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        setTranscribedSpeech(transcript);

        // Simple similarity score
        const target = testWord.toLowerCase().trim();
        let score = 0;
        if (transcript === target) {
          score = 100;
        } else if (transcript.includes(target) || target.includes(transcript)) {
          score = 80;
        } else {
          // Character match distance
          let matches = 0;
          for (let i = 0; i < Math.min(transcript.length, target.length); i++) {
            if (transcript[i] === target[i]) matches++;
          }
          score = Math.round((matches / Math.max(transcript.length, target.length)) * 70);
        }
        setPronunciationScore(score);
        setIsRecording(false);
      };

      recognition.onerror = (event: any) => {
        setRecognitionError(`Recognition error: ${event.error}. Please check your microphone permissions.`);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      setRecognitionError(err.message || 'Failed to start microphone speech recognition.');
      setIsRecording(false);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsRecording(false);
    }
  };

  const isVowelCategory = selectedPhoneme.category.includes('vowel') || selectedPhoneme.category === 'diphthong';

  return (
    <div
      className={`w-full border transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0 p-6 sm:p-8'
          : 'rounded-2xl p-4 sm:p-6'
      } ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
          : 'bg-slate-900/95 border-slate-700/80 text-slate-100 shadow-xl'
      }`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Studio Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-700/40">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-violet-600/20 border border-violet-500/40 text-violet-400">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                English Audio & Phonetic Pronunciation Lab
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold">
                Secondary 3 & EG-Bac
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Interactive 44-IPA chart, articulatory sagittal cross-section, vowel trapezoid, heteronym stress shifts, and academic listening comprehension.
            </p>
          </div>
        </div>

        {/* Global Audio Controls Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-850/80 p-2 rounded-xl border border-slate-700/50 text-xs">
          {/* AI Vocal Engine Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span className="text-[11px] tracking-wide">AI Neural HD Engine</span>
          </div>

          <div className="w-px h-6 bg-slate-700 mx-1 hidden sm:block" />

          {/* Accent Selector (min-h-[44px]) */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">Accent:</span>
            <button
              onClick={() => setAccent('en-GB')}
              className={`px-3 py-2 min-h-[44px] rounded-lg font-bold transition-all cursor-pointer flex items-center justify-center ${
                accent === 'en-GB'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇬🇧 British
            </button>
            <button
              onClick={() => setAccent('en-US')}
              className={`px-3 py-2 min-h-[44px] rounded-lg font-bold transition-all cursor-pointer flex items-center justify-center ${
                accent === 'en-US'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇺🇸 American
            </button>
          </div>

          <div className="w-px h-6 bg-slate-700 mx-1" />

          {/* Speed Selector (min-h-[44px]) */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-bold">Speed:</span>
            {[0.75, 0.95, 1.2].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-3 py-2 min-h-[44px] rounded font-mono font-bold text-xs cursor-pointer flex items-center justify-center ${
                  speechRate === rate
                    ? 'bg-slate-700 text-violet-300 border border-violet-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-slate-700 mx-1" />

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 min-h-[44px] min-w-[44px] text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors flex items-center justify-center cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-violet-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Primary Tab Navigation (min-h-[44px]) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin border-b border-slate-800">
        {[
          { id: 'phonetics', label: '1. IPA & Minimal Pairs', icon: Zap },
          { id: 'stress', label: '2. Syllable Stress Shifts', icon: Sliders },
          { id: 'connected', label: '3. Connected Speech', icon: Activity },
          { id: 'listening', label: '4. Listening Exam Center', icon: Headphones },
          { id: 'voice_test', label: '5. Live Voice Evaluator', icon: Mic },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as StudioTab)}
              className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-900/30'
                  : isLight
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: IPA PHONETICS SOUNDBOARD & MINIMAL PAIR DRILLS         */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'phonetics' && (
        <div className="space-y-6">
          {/* Sub-header Filter (min-h-[44px]) */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'All 44 Phonemes' },
                { id: 'short_vowel', label: 'Short Vowels (7)' },
                { id: 'long_vowel', label: 'Long Vowels (5)' },
                { id: 'diphthong', label: 'Diphthongs (8)' },
                { id: 'voiceless_consonant', label: 'Voiceless Consonants (9)' },
                { id: 'voiced_consonant', label: 'Voiced Consonants (15)' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedPhonemeCategory(filter.id)}
                  className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                    selectedPhonemeCategory === filter.id
                      ? 'bg-violet-600 text-white shadow-sm'
                      : isLight
                      ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <button
              onClick={generateEarTest}
              className="flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Minimal Pair Ear Drill</span>
            </button>
          </div>

          {/* Interactive Ear Test Modal / Banner */}
          {earTestQuestion && (
            <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-amber-400 flex items-center gap-1.5">
                  <Headphones className="w-4 h-4" />
                  <span>Ear-Training Challenge: Distinguish the Phoneme</span>
                </span>
                <button
                  onClick={() => playAudio(earTestQuestion.targetWord, 'en-GB', 0.85)}
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-white font-bold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Replay Sound</span>
                </button>
              </div>

              <p className="text-xs text-slate-300">
                Listen closely to the audio. Which word from this minimal pair was articulated?
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-md">
                {[earTestQuestion.pair.word1, earTestQuestion.pair.word2].map((opt) => {
                  const hasAnswered = earTestQuestion.chosenWord !== null;
                  const isChoice = earTestQuestion.chosenWord === opt;
                  const isTarget = earTestQuestion.targetWord === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => submitEarTestAnswer(opt)}
                      disabled={hasAnswered}
                      className={`p-3 min-h-[48px] rounded-xl border text-center font-bold text-sm transition-all cursor-pointer flex items-center justify-center ${
                        !hasAnswered
                          ? 'bg-slate-800/80 border-slate-700 hover:bg-violet-600/30 hover:border-violet-500'
                          : isTarget
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : isChoice
                          ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                          : 'bg-slate-800/40 border-slate-700/50 text-slate-500 opacity-60'
                      }`}
                    >
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {earTestQuestion.isCorrect !== null && (
                <div className="pt-2 text-xs">
                  {earTestQuestion.isCorrect ? (
                    <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Excellent! You accurately discriminated between the contrasting phonemes.</span>
                    </p>
                  ) : (
                    <p className="text-rose-400 font-bold flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" />
                      <span>Incorrect. The target word was &quot;{earTestQuestion.targetWord}&quot;. {earTestQuestion.pair.examTrapNote}</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* IPA Soundboard Grid & Active Articulatory Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Grid of Phonemes (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {filteredPhonemes.map((item) => {
                const isSelected = selectedPhoneme.symbol === item.symbol;
                const isCurrentlyVoicing = currentlyPlayingWord === item.audioTriggerWord;
                return (
                  <button
                    key={item.symbol}
                    onClick={() => {
                      setSelectedPhoneme(item);
                      playAudio(item.audioTriggerWord, accent, speechRate);
                    }}
                    className={`p-3 min-h-[64px] rounded-xl border flex flex-col items-center justify-center gap-1 text-center transition-all cursor-pointer relative group ${
                      isSelected
                        ? 'bg-violet-600 text-white border-violet-400 shadow-md shadow-violet-900/40 ring-2 ring-violet-400/40'
                        : isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        : 'bg-slate-800/70 border-slate-700/60 text-slate-200 hover:bg-slate-750'
                    }`}
                  >
                    <span className="text-lg sm:text-xl font-mono font-black">{item.symbol}</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-slate-200 font-medium">
                      {item.examples[0]}
                    </span>
                    {item.arabicContrastWarning && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                    )}
                    {isCurrentlyVoicing && (
                      <span className="absolute inset-0 rounded-xl ring-2 ring-emerald-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Phoneme Inspector Detail & Vector Schematic Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* High-Resolution Scientific Vector Schematic: Vocal Tract or Vowel Trapezoid */}
              {isVowelCategory ? (
                <AcousticVowelTrapezoidSchematic
                  phoneme={selectedPhoneme}
                  isLight={isLight}
                  onSelectVowel={(p) => {
                    setSelectedPhoneme(p);
                    playAudio(p.audioTriggerWord, accent, speechRate);
                  }}
                />
              ) : (
                <VocalTractSagittalArticulatorySchematic phoneme={selectedPhoneme} isLight={isLight} />
              )}

              {/* Textual Inspection Details */}
              <div
                className={`p-5 rounded-2xl border space-y-4 ${
                  isLight
                    ? 'border-violet-300 bg-violet-50/70 shadow-sm'
                    : 'border-violet-500/30 bg-violet-950/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className={`text-3xl font-mono font-black ${
                        isLight ? 'text-violet-950' : 'text-violet-300'
                      }`}
                    >
                      {selectedPhoneme.symbol}
                    </span>
                    <h4
                      className={`text-sm font-bold mt-1 ${
                        isLight ? 'text-slate-900 font-extrabold' : 'text-white'
                      }`}
                    >
                      {selectedPhoneme.name}
                    </h4>
                    <span
                      className={`inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full capitalize font-bold border ${
                        isLight
                          ? 'bg-violet-100 text-violet-950 border-violet-300'
                          : 'bg-violet-500/20 text-violet-300 border-violet-500/30'
                      }`}
                    >
                      {selectedPhoneme.category.replace('_', ' ')}
                    </span>
                  </div>

                  <button
                    onClick={() => playAudio(selectedPhoneme.audioTriggerWord, accent, 0.85)}
                    className="p-3 min-h-[44px] min-w-[44px] rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-all shadow-md cursor-pointer flex items-center justify-center"
                    title="Play Phoneme Pronunciation"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isLight ? 'text-slate-700' : 'text-slate-400'
                    }`}
                  >
                    Articulation Guide:
                  </span>
                  <p
                    className={`text-xs mt-1 leading-relaxed p-2.5 rounded-lg border ${
                      isLight
                        ? 'bg-white border-slate-300 text-slate-800 shadow-2xs'
                        : 'bg-slate-900/60 border-slate-800 text-slate-200'
                    }`}
                  >
                    {selectedPhoneme.articulationGuide}
                  </p>
                </div>

                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isLight ? 'text-slate-700' : 'text-slate-400'
                    }`}
                  >
                    Exemplar Words:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {selectedPhoneme.examples.map((word) => (
                      <button
                        key={word}
                        onClick={() => playAudio(word, accent, speechRate)}
                        className={`px-3 py-1.5 min-h-[44px] rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                          isLight
                            ? 'bg-white hover:bg-violet-100 text-violet-950 border-slate-300 shadow-2xs'
                            : 'bg-slate-800 hover:bg-violet-700 text-slate-200 hover:text-white border-slate-700'
                        }`}
                      >
                        <Volume2 className={`w-3.5 h-3.5 ${isLight ? 'text-violet-700' : 'text-violet-400'}`} />
                        <span>{word}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedPhoneme.arabicContrastWarning && (
                  <div
                    className={`p-3 rounded-xl text-xs space-y-1 border ${
                      isLight
                        ? 'bg-amber-100/90 border-amber-400 text-amber-950'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold">
                      <AlertTriangle className={`w-3.5 h-3.5 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                      <span>Egyptian ESL Examination Alert:</span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-amber-900' : 'text-amber-200/90'}`}>
                      {selectedPhoneme.arabicContrastWarning}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Minimal Pairs Exploration Carousel */}
          <div className="pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-base font-bold flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                <Layers className="w-4 h-4 text-violet-500" />
                <span>High-Yield Minimal Pairs (Contrastive Phonology)</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setMinimalPairIndex((prev) => (prev > 0 ? prev - 1 : MINIMAL_PAIRS.length - 1))
                  }
                  className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold cursor-pointer flex items-center justify-center border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-2xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  ← Prev
                </button>
                <span className={`text-xs font-mono px-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {minimalPairIndex + 1} / {MINIMAL_PAIRS.length}
                </span>
                <button
                  onClick={() =>
                    setMinimalPairIndex((prev) => (prev < MINIMAL_PAIRS.length - 1 ? prev + 1 : 0))
                  }
                  className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold cursor-pointer flex items-center justify-center border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-2xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>

            {(() => {
              const pair = MINIMAL_PAIRS[minimalPairIndex];
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Word 1 Card */}
                  <div
                    className={`p-4 rounded-xl border space-y-2 ${
                      isLight
                        ? 'bg-white border-slate-200 shadow-xs'
                        : 'bg-slate-800/60 border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono font-bold ${
                          isLight
                            ? 'bg-violet-100 text-violet-950 border border-violet-300'
                            : 'bg-violet-500/20 text-violet-300'
                        }`}
                      >
                        Phoneme: {pair.phoneme1}
                      </span>
                      <button
                        onClick={() => playAudio(pair.word1, accent, 0.85)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] text-xs cursor-pointer font-bold ${
                          isLight ? 'text-violet-950 hover:text-violet-700' : 'text-violet-300 hover:text-white'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Listen</span>
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{pair.word1}</span>
                      <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{pair.phonetic1}</span>
                    </div>
                    <p className={`text-xs italic ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>&quot;{pair.sentence1}&quot;</p>
                  </div>

                  {/* Word 2 Card */}
                  <div
                    className={`p-4 rounded-xl border space-y-2 ${
                      isLight
                        ? 'bg-white border-slate-200 shadow-xs'
                        : 'bg-slate-800/60 border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono font-bold ${
                          isLight
                            ? 'bg-indigo-100 text-indigo-950 border border-indigo-300'
                            : 'bg-indigo-500/20 text-indigo-300'
                        }`}
                      >
                        Phoneme: {pair.phoneme2}
                      </span>
                      <button
                        onClick={() => playAudio(pair.word2, accent, 0.85)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] text-xs cursor-pointer font-bold ${
                          isLight ? 'text-indigo-950 hover:text-indigo-700' : 'text-indigo-300 hover:text-white'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Listen</span>
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{pair.word2}</span>
                      <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{pair.phonetic2}</span>
                    </div>
                    <p className={`text-xs italic ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>&quot;{pair.sentence2}&quot;</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: SYLLABLE STRESS & NOUN/VERB HETERONYM SHIFTS            */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'stress' && (
        <div className="space-y-6">
          {/* Workstation Header */}
          <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/20 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white">
                Two-Syllable Heteronym Accent Shift Principle
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                In standard English, two-syllable homographs systematically shift stress: **NOUNS stress the 1st syllable**, while **VERBS stress the 2nd syllable**.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded bg-violet-500/30 text-violet-200 font-mono font-bold">
                Noun: /ˈσ.σ/
              </span>
              <span className="text-xs px-2 py-1 rounded bg-indigo-500/30 text-indigo-200 font-mono font-bold">
                Verb: /σ.ˈσ/
              </span>
            </div>
          </div>

          {/* Interactive Heteronym Word Selector (min-h-[44px]) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {STRESS_SHIFT_WORDS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedStressWord(item)}
                className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer flex items-center justify-center ${
                  selectedStressWord.id === item.id
                    ? 'bg-violet-600 text-white border-violet-400 shadow-sm'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {item.word}
              </button>
            ))}
          </div>

          {/* Heteronym Comparative Pitch & Wave Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Noun Form Card */}
            <div className="p-5 rounded-2xl border border-slate-700 bg-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 font-bold uppercase">
                  Noun / Adjective Form
                </span>
                <button
                  onClick={() => playAudio(selectedStressWord.word, accent, 0.85)}
                  className="flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] text-xs text-violet-300 hover:text-white font-bold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Audio</span>
                </button>
              </div>

              {/* Syllable Waveform Visualizer */}
              <div className="flex items-center justify-center gap-3 py-4 bg-slate-900/60 rounded-xl border border-slate-800">
                {selectedStressWord.nounSyllables.map((syl, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`rounded-lg transition-all flex items-center justify-center font-black ${
                        syl.stressed
                          ? 'w-24 h-16 bg-gradient-to-t from-violet-600 to-indigo-500 text-white text-lg shadow-lg shadow-violet-900/50'
                          : 'w-16 h-10 bg-slate-800 text-slate-400 text-sm border border-slate-700'
                      }`}
                    >
                      <span>{syl.text}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {syl.stressed ? 'PRIMARY STRESS (1st)' : 'Weak Syllable'}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Meaning in Context:</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                  {selectedStressWord.nounDefinition}
                </p>
              </div>

              <div className="text-xs text-slate-300 italic bg-violet-950/20 p-2.5 rounded-lg border border-violet-500/20">
                &quot;{selectedStressWord.nounExample}&quot;
              </div>
            </div>

            {/* Verb Form Card */}
            <div className="p-5 rounded-2xl border border-slate-700 bg-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold uppercase">
                  Verb Form
                </span>
                <button
                  onClick={() => playAudio(selectedStressWord.verbExample, accent, 0.85)}
                  className="flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] text-xs text-indigo-300 hover:text-white font-bold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Audio</span>
                </button>
              </div>

              {/* Syllable Waveform Visualizer */}
              <div className="flex items-center justify-center gap-3 py-4 bg-slate-900/60 rounded-xl border border-slate-800">
                {selectedStressWord.verbSyllables.map((syl, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`rounded-lg transition-all flex items-center justify-center font-black ${
                        syl.stressed
                          ? 'w-24 h-16 bg-gradient-to-t from-indigo-600 to-violet-500 text-white text-lg shadow-lg shadow-indigo-900/50'
                          : 'w-16 h-10 bg-slate-800 text-slate-400 text-sm border border-slate-700'
                      }`}
                    >
                      <span>{syl.text}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      {syl.stressed ? 'PRIMARY STRESS (2nd)' : 'Weak / Reduced'}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Meaning in Context:</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                  {selectedStressWord.verbDefinition}
                </p>
              </div>

              <div className="text-xs text-slate-300 italic bg-indigo-950/20 p-2.5 rounded-lg border border-indigo-500/20">
                &quot;{selectedStressWord.verbExample}&quot;
              </div>
            </div>
          </div>

          {/* Suffix-Driven Accent Rules Grid */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h3 className="text-base font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span>Suffix-Driven Accent Placement Rules (Ministerial High-Yield)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SUFFIX_STRESS_RULES.map((rule) => (
                <div
                  key={rule.id}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/60 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{rule.ruleName}</h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono">
                      {rule.stressPosition}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{rule.ruleExplanation}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {rule.suffixGroup.split(',').map((suf) => (
                      <span
                        key={suf.trim()}
                        className="px-2 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-700 text-xs font-mono font-bold"
                      >
                        {suf.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-750">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Exemplars:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {rule.examples.map((ex) => (
                        <button
                          key={ex.word}
                          onClick={() => playAudio(ex.word, accent, 0.85)}
                          className="px-2.5 py-1.5 min-h-[44px] rounded bg-slate-900 hover:bg-slate-700 text-xs text-slate-300 hover:text-white border border-slate-700 font-mono cursor-pointer flex flex-col items-center justify-center"
                          title={ex.phonetic}
                        >
                          <span className="font-bold">{ex.word}</span>
                          <span className="text-[10px] text-violet-400 font-sans">{ex.phonetic}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Syllable Stress Challenge */}
          <div className="p-5 rounded-2xl border border-indigo-500/40 bg-indigo-950/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-indigo-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Interactive Stress Placement Challenge</span>
              </span>
              <button
                onClick={() => {
                  setQuizWordIndex((prev) => (prev + 1) % STRESS_SHIFT_WORDS.length);
                  setSelectedSyllableIdx(null);
                  setQuizFeedback(null);
                }}
                className="text-xs text-indigo-300 hover:text-white font-bold cursor-pointer"
              >
                Next Word →
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Identify where the primary stress falls when <strong>&quot;{currentQuizItem.word}&quot;</strong> is used as a <strong>VERB</strong>:
            </p>

            <div className="flex gap-3 max-w-sm">
              {currentQuizItem.verbSyllables.map((syl, idx) => (
                <button
                  key={idx}
                  onClick={() => checkStressQuiz(idx, false)}
                  className={`flex-1 p-3 min-h-[48px] rounded-xl border text-center font-bold text-sm transition-all cursor-pointer flex items-center justify-center ${
                    selectedSyllableIdx === idx
                      ? idx === 1
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : 'bg-rose-600 text-white border-rose-400'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Syllable {idx + 1}: &quot;{syl.text}&quot;
                </button>
              ))}
            </div>

            {quizFeedback && (
              <p className="text-xs font-semibold text-indigo-200 pt-1">{quizFeedback}</p>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 3: CONNECTED SPEECH & ACOUSTIC RHYTHM                    */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'connected' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/20">
            <h3 className="text-base font-bold text-white">
              Connected Speech Phenomena in High-Register Spoken English
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Words spoken in isolation (citation forms) change significantly in continuous natural speech due to rhythm, muscle economy, and phonetic co-articulation.
            </p>
          </div>

          {/* Connected Speech Waveform Vector Schematic */}
          <ConnectedSpeechWaveformVectorSchematic isLight={isLight} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONNECTED_SPEECH_DATA.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl border border-slate-700 bg-slate-800/70 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-bold uppercase border border-violet-500/30">
                    {item.type}
                  </span>
                  <button
                    onClick={() => playAudio(item.audioPrompt, accent, speechRate)}
                    className="flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] text-xs text-violet-300 hover:text-white cursor-pointer font-bold"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Listen</span>
                  </button>
                </div>

                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400">Formal Citation:</span>
                    <p className="font-mono text-slate-300">{item.formalCitation}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400">Connected Rapid Speech:</span>
                    <p className="font-mono text-emerald-300 font-semibold">{item.connectedForm}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 italic">Example: &quot;{item.exampleSentence}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 4: LISTENING COMPREHENSION EXAMINATION CENTER             */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'listening' && (
        <div className="space-y-6">
          {/* Track Selection Bar (min-h-[44px]) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {LISTENING_TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedTrackId(track.id);
                  setIsPlayingTrack(false);
                  setShowTranscript(false);
                  setSelectedTrackAnswers({});
                  setTrackScoreSubmitted(false);
                }}
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer flex items-center justify-center ${
                  selectedTrackId === track.id
                    ? 'bg-violet-600 text-white border-violet-400 shadow-md'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {track.titleEn}
              </button>
            ))}
          </div>

          {/* Audio Player Card */}
          <div className="p-5 rounded-2xl border border-violet-500/40 bg-gradient-to-br from-slate-900 via-slate-850 to-violet-950/30 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-violet-400 font-bold uppercase tracking-wider">
                  {currentTrack.theme}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{currentTrack.titleEn}</h3>
              </div>

              {/* Play / Pause Button (min-h-[44px]) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTrackAudio}
                  className={`flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer ${
                    isPlayingTrack
                      ? 'bg-amber-600 hover:bg-amber-500 text-white'
                      : 'bg-violet-600 hover:bg-violet-500 text-white'
                  }`}
                >
                  {isPlayingTrack ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause Audio Track</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Audio Track</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    aiVoiceEngine.stopAll();
                    setIsPlayingTrack(false);
                    setCurrentlyPlayingWord(null);
                  }}
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer flex items-center justify-center"
                  title="Reset Audio"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Transcript Reveal Toggle */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Listen without reading first to simulate official examination conditions.
              </span>
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-xs font-bold text-violet-400 hover:text-violet-300 underline cursor-pointer p-2"
              >
                {showTranscript ? 'Hide Auditory Script' : 'Reveal Auditory Script'}
              </button>
            </div>

            {/* Collapsible Script */}
            {showTranscript && (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs leading-relaxed max-h-60 overflow-y-auto">
                {currentTrack.audioScript.map((turn, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-violet-300">{turn.speaker}: </span>
                    <span className="text-slate-200">{turn.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Comprehension Questions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              <span>Ministerial Comprehension Questions</span>
            </h4>

            {currentTrack.comprehensionQuestions.map((q, qIndex) => {
              const selectedOpt = selectedTrackAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = isAnswered && selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-700/80 bg-slate-800/60 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-bold text-white">
                      {qIndex + 1}. {q.question}
                    </h5>
                    {trackScoreSubmitted && (
                      <span className="shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400" />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Options (min-h-[48px]) */}
                  <div className="space-y-2">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = selectedOpt === optIndex;
                      const isTargetCorrect = optIndex === q.correctIndex;

                      let btnStyle =
                        'bg-slate-900/40 border-slate-700 text-slate-300 hover:bg-slate-750';
                      if (trackScoreSubmitted) {
                        if (isTargetCorrect) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                        } else if (isSelected && !isTargetCorrect) {
                          btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-violet-600 text-white border-violet-400 font-semibold';
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => {
                            if (!trackScoreSubmitted) {
                              setSelectedTrackAnswers({
                                ...selectedTrackAnswers,
                                [q.id]: optIndex,
                              });
                            }
                          }}
                          className={`w-full p-3.5 min-h-[48px] rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Rationale */}
                  {trackScoreSubmitted && (
                    <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-violet-200">
                      <span className="font-bold text-violet-400">Explanatory Rationale: </span>
                      {q.rationale}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Submit Quiz Score (min-h-[44px]) */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setTrackScoreSubmitted(true)}
                disabled={trackScoreSubmitted || Object.keys(selectedTrackAnswers).length === 0}
                className="px-6 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center"
              >
                Submit Answers & Evaluate Marks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 5: LIVE MICROPHONE VOICE PRONUNCIATION TESTER             */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'voice_test' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl border border-violet-500/30 bg-violet-950/20">
            <h3 className="text-base font-bold text-white">
              Live Voice Pronunciation & Acoustic Evaluator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select an academic Secondary 3 vocabulary item, click record, and speak clearly into your microphone to assess articulation accuracy.
            </p>
          </div>

          {/* Word Selector Bar (min-h-[44px]) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Choose Target Practice Word:
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {[
                'piracy',
                'plagiarism',
                'resilience',
                'produce',
                'conflict',
                'responsibility',
                'scientific',
                'breathe',
                'pioneer',
                'equilibrium',
              ].map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    setTestWord(w);
                    setTranscribedSpeech('');
                    setPronunciationScore(null);
                  }}
                  className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer flex items-center justify-center ${
                    testWord === w
                      ? 'bg-violet-600 text-white border-violet-400 shadow-sm'
                      : isLight
                      ? 'bg-slate-100 text-slate-700 border-slate-200'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Mic Station */}
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-850 flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Target Word
              </span>
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-3xl font-black text-white">{testWord}</h2>
                <button
                  onClick={() => playAudio(testWord, accent, 0.85)}
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-slate-750 hover:bg-violet-600 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                  title="Listen to Model Pronunciation"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mic Record Button */}
            <div className="py-2">
              <button
                onClick={isRecording ? stopSpeechRecognition : startSpeechRecognition}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-xl cursor-pointer ${
                  isRecording
                    ? 'bg-rose-600 text-white ring-4 ring-rose-400/50 animate-pulse'
                    : 'bg-gradient-to-br from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white'
                }`}
              >
                {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
              </button>
            </div>

            <p className="text-xs text-slate-400">
              {isRecording
                ? 'Listening... Speak now into your microphone.'
                : 'Click the microphone above and pronounce the word clearly.'}
            </p>

            {/* Recognition Error Banner */}
            {recognitionError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs max-w-md">
                {recognitionError}
              </div>
            )}

            {/* Result Assessment Card */}
            {transcribedSpeech && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 w-full max-w-md space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Transcribed Audio:</span>
                  <span className="font-bold text-white font-mono">&quot;{transcribedSpeech}&quot;</span>
                </div>

                {pronunciationScore !== null && (
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Accuracy Score:</span>
                      <span
                        className={`text-base font-black font-mono ${
                          pronunciationScore >= 80 ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {pronunciationScore}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          pronunciationScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${pronunciationScore}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400">
                      {pronunciationScore === 100
                        ? 'Flawless native pronunciation! Meets official ministerial distinction standard.'
                        : pronunciationScore >= 80
                        ? 'Very good articulation. Minor phonetic refinement advised.'
                        : 'Review the articulation guide and exemplar audio above, then try once more.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
