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
  HelpCircle,
  Activity,
  Award,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

type StudioTab = 'phonetics' | 'stress' | 'connected' | 'listening' | 'voice_test';

export const EnglishAudioPhoneticsStudio: React.FC<Props> = ({
  lang: _lang = 'en',
  theme = 'dark',
  isFullscreen = false,
}) => {
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

  // Native Speech Synthesis Player
  const playAudio = (text: string, forcedAccent?: 'en-GB' | 'en-US', rateOverride?: number) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = forcedAccent || accent;
      utterance.rate = rateOverride || speechRate;
      utterance.onstart = () => setCurrentlyPlayingWord(text);
      utterance.onend = () => setCurrentlyPlayingWord(null);
      utterance.onerror = () => setCurrentlyPlayingWord(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Stop all audio on tab switch or unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
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
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingTrack(false);
    } else {
      setIsPlayingTrack(true);
      playAudio(currentTrack.fullText, currentTrack.recommendedVoice, speechRate);
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

  return (
    <div
      className={`w-full rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
          : 'bg-slate-900/95 border-slate-700/80 text-slate-100 shadow-xl'
      } ${isFullscreen ? 'p-6 sm:p-8 min-h-screen' : 'p-4 sm:p-6'}`}
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
                Secondary 3
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Interactive 44-IPA chart, heteronym stress shifts, minimal pair drills, and academic listening comprehension.
            </p>
          </div>
        </div>

        {/* Global Audio Controls Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-850/80 p-2 rounded-xl border border-slate-700/50 text-xs">
          {/* Accent Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-bold">Accent:</span>
            <button
              onClick={() => setAccent('en-GB')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                accent === 'en-GB'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇬🇧 British
            </button>
            <button
              onClick={() => setAccent('en-US')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                accent === 'en-US'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇺🇸 American
            </button>
          </div>

          <div className="w-px h-4 bg-slate-700 mx-1" />

          {/* Speed Selector */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-bold">Speed:</span>
            {[0.75, 0.95, 1.2].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] cursor-pointer ${
                  speechRate === rate
                    ? 'bg-slate-700 text-violet-300 border border-violet-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Tab Navigation */}
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
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
          {/* Sub-header Filter */}
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
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedPhonemeCategory === filter.id
                      ? 'bg-violet-600 text-white'
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 cursor-pointer"
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
                      className={`p-3 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
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

          {/* IPA Soundboard Grid & Active Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grid of Phonemes (2 Cols on desktop) */}
            <div className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
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
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 text-center transition-all cursor-pointer relative group ${
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
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                    {isCurrentlyVoicing && (
                      <span className="absolute inset-0 rounded-xl ring-2 ring-emerald-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Phoneme Inspector Detail Card */}
            <div className="p-5 rounded-2xl border border-violet-500/30 bg-violet-950/20 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl font-mono font-black text-violet-300">
                    {selectedPhoneme.symbol}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{selectedPhoneme.name}</h4>
                  <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 capitalize">
                    {selectedPhoneme.category.replace('_', ' ')}
                  </span>
                </div>

                <button
                  onClick={() => playAudio(selectedPhoneme.audioTriggerWord, accent, 0.85)}
                  className="p-3 rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-all shadow-md cursor-pointer"
                  title="Play Phoneme Pronunciation"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Articulation Guide:
                </span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  {selectedPhoneme.articulationGuide}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Exemplar Words:
                </span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {selectedPhoneme.examples.map((word) => (
                    <button
                      key={word}
                      onClick={() => playAudio(word, accent, speechRate)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-violet-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3 text-violet-400" />
                      <span>{word}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedPhoneme.arabicContrastWarning && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Egyptian ESL Examination Alert:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-200/90">
                    {selectedPhoneme.arabicContrastWarning}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Minimal Pairs Exploration Carousel */}
          <div className="pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-400" />
                <span>High-Yield Minimal Pairs (Contrastive Phonology)</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setMinimalPairIndex((prev) => (prev > 0 ? prev - 1 : MINIMAL_PAIRS.length - 1))
                  }
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold cursor-pointer"
                >
                  ← Prev
                </button>
                <span className="text-xs text-slate-400 font-mono">
                  {minimalPairIndex + 1} / {MINIMAL_PAIRS.length}
                </span>
                <button
                  onClick={() =>
                    setMinimalPairIndex((prev) => (prev < MINIMAL_PAIRS.length - 1 ? prev + 1 : 0))
                  }
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold cursor-pointer"
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
                  <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono font-bold">
                        Phoneme: {pair.phoneme1}
                      </span>
                      <button
                        onClick={() => playAudio(pair.word1, accent, 0.85)}
                        className="flex items-center gap-1 text-xs text-violet-300 hover:text-white cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">{pair.word1}</span>
                      <span className="text-xs text-slate-400 font-mono">{pair.phonetic1}</span>
                    </div>
                    <p className="text-xs text-slate-300 italic">&quot;{pair.sentence1}&quot;</p>
                  </div>

                  {/* Word 2 Card */}
                  <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-bold">
                        Phoneme: {pair.phoneme2}
                      </span>
                      <button
                        onClick={() => playAudio(pair.word2, accent, 0.85)}
                        className="flex items-center gap-1 text-xs text-indigo-300 hover:text-white cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">{pair.word2}</span>
                      <span className="text-xs text-slate-400 font-mono">{pair.phonetic2}</span>
                    </div>
                    <p className="text-xs text-slate-300 italic">&quot;{pair.sentence2}&quot;</p>
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

          {/* Interactive Heteronym Word Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {STRESS_SHIFT_WORDS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedStressWord(item)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer ${
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
                  className="flex items-center gap-1 text-xs text-violet-300 hover:text-white font-bold cursor-pointer"
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
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {syl.stressed ? 'ˈPrimary Stress' : 'Unstressed'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-white font-mono">
                    {selectedStressWord.nounPhonetic}
                  </span>
                  <span className="text-xs text-slate-400">({selectedStressWord.word})</span>
                </div>
                <p className="text-xs text-slate-300">{selectedStressWord.nounDefinition}</p>
                <p className="text-xs text-violet-200 italic mt-1 bg-violet-950/30 p-2 rounded border border-violet-500/20">
                  &quot;{selectedStressWord.nounExample}&quot;
                </p>
              </div>
            </div>

            {/* Verb Form Card */}
            <div className="p-5 rounded-2xl border border-slate-700 bg-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold uppercase">
                  Verb Form
                </span>
                <button
                  onClick={() => playAudio(`to ${selectedStressWord.word}`, accent, 0.85)}
                  className="flex items-center gap-1 text-xs text-emerald-300 hover:text-white font-bold cursor-pointer"
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
                          ? 'w-24 h-16 bg-gradient-to-t from-emerald-600 to-teal-500 text-white text-lg shadow-lg shadow-emerald-900/50'
                          : 'w-16 h-10 bg-slate-800 text-slate-400 text-sm border border-slate-700'
                      }`}
                    >
                      <span>{syl.text}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {syl.stressed ? 'ˈPrimary Stress' : 'Unstressed'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-white font-mono">
                    {selectedStressWord.verbPhonetic}
                  </span>
                  <span className="text-xs text-slate-400">(to {selectedStressWord.word})</span>
                </div>
                <p className="text-xs text-slate-300">{selectedStressWord.verbDefinition}</p>
                <p className="text-xs text-emerald-200 italic mt-1 bg-emerald-950/30 p-2 rounded border border-emerald-500/20">
                  &quot;{selectedStressWord.verbExample}&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Suffix Stress Rules Reference */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h3 className="text-base font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span>Suffix-Driven Stress Placement Rules</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SUFFIX_STRESS_RULES.map((rule) => (
                <div key={rule.id} className="p-4 rounded-xl border border-slate-700 bg-slate-800/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-violet-300">
                      {rule.suffixGroup}
                    </span>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-bold">
                      {rule.stressPosition}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{rule.ruleName}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{rule.ruleExplanation}</p>

                  <div className="pt-2 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                    {rule.examples.map((ex) => (
                      <button
                        key={ex.word}
                        onClick={() => playAudio(ex.word, accent, speechRate)}
                        className="px-2 py-1 rounded bg-slate-900/60 hover:bg-violet-700 text-slate-300 hover:text-white text-[11px] font-mono border border-slate-800 cursor-pointer"
                      >
                        {ex.word}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Stress Quiz Workstation */}
          <div className="p-5 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>Interactive Syllable Stress Challenge</span>
              </h4>
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
              Click the syllable that carries the primary stress in the noun form of &quot;{currentQuizItem.word}&quot;:
            </p>

            <div className="flex items-center gap-3">
              {currentQuizItem.nounSyllables.map((syl, idx) => (
                <button
                  key={idx}
                  onClick={() => checkStressQuiz(idx, true)}
                  className={`px-5 py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                    selectedSyllableIdx === idx
                      ? idx === 0
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
                    className="flex items-center gap-1 text-xs text-violet-300 hover:text-white cursor-pointer font-bold"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
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
          {/* Track Selection Bar */}
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
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer ${
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

              {/* Play / Pause Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTrackAudio}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer ${
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
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                    }
                    setIsPlayingTrack(false);
                  }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
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
                className="text-xs font-bold text-violet-400 hover:text-violet-300 underline cursor-pointer"
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

                  {/* Options */}
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
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
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

            {/* Submit Quiz Score */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setTrackScoreSubmitted(true)}
                disabled={trackScoreSubmitted || Object.keys(selectedTrackAnswers).length === 0}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md disabled:opacity-50 cursor-pointer"
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

          {/* Word Selector Bar */}
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap cursor-pointer ${
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
                  className="p-2 rounded-lg bg-slate-750 hover:bg-violet-600 text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="Listen to Model Pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
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
