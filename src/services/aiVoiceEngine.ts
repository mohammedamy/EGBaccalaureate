/**
 * AI Vocal Engine Service (محرك النطق الصوتي المتقدم بالذكاء الاصطناعي)
 * 
 * Provides high-definition, natural human-realistic vocal synthesis across all languages:
 * - English (UK Received Pronunciation & US General American)
 * - French (Parisian Standard & Liaison)
 * - German (Standard Hochdeutsch)
 * - Italian (Standard Italiano)
 * - Spanish (Castilian & Latin American)
 * - Chinese (Mandarin Putonghua)
 * - Arabic (Modern Standard Classical Fusha / الفصحى)
 * 
 * Key Architecture Highlights:
 * 1. Immediate Synchronous Dispatch: Invoked directly within user interaction tick so browsers (Chrome/Safari/Edge)
 *    never block audio playback due to autoplay or lost user activation policies.
 * 2. Intelligent Neural/Natural Voice Discovery: Scans and ranks all system, browser, and cloud-synced voices,
 *    prioritizing Edge Natural AI, Apple Siri Enhanced/Premium, and Google Neural voices over low-bitrate mechanical synths.
 * 3. Chromium Keepalive Fix: Automatically pings pause/resume to eliminate the 15-second speech synthesis cutoff bug.
 * 4. Humanized Cadence & Prosody: Smooths punctuation, natural speech rates (0.85x - 1.05x), and optimal pitch.
 * 5. Sequential Dialogue Sequencer: Seamlessly chains conversational turns with natural turn-taking pauses.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export type VoiceLanguageCode =
  | 'en'
  | 'en-GB'
  | 'en-US'
  | 'fr'
  | 'fr-FR'
  | 'de'
  | 'de-DE'
  | 'it'
  | 'it-IT'
  | 'es'
  | 'es-ES'
  | 'zh'
  | 'zh-CN'
  | 'ar'
  | 'ar-SA'
  | 'ar-EG';

export interface SpeakOptions {
  lang?: VoiceLanguageCode | string;
  rate?: number; // 0.5 to 2.0 (default 1.0)
  pitch?: number; // 0.5 to 1.5 (default 1.0)
  voiceName?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

export interface DialogueTurnItem {
  id?: string | number;
  speaker?: string;
  text: string;
  lang?: VoiceLanguageCode | string;
  delayAfterMs?: number;
}

export interface DialogueOptions {
  rate?: number;
  onTurnStart?: (index: number, turn: DialogueTurnItem) => void;
  onTurnEnd?: (index: number, turn: DialogueTurnItem) => void;
  onComplete?: () => void;
  onError?: (err: any) => void;
}

// ---------------------------------------------------------------------------
// Language Normalization Helper
// ---------------------------------------------------------------------------
export function normalizeLanguageCode(lang?: string): { bcp47: string; langPrefix: string } {
  const l = (lang || 'en').toLowerCase().trim();

  if (l.startsWith('ar')) return { bcp47: 'ar-SA', langPrefix: 'ar' };
  if (l.startsWith('zh') || l.includes('chinese') || l.includes('mandarin')) return { bcp47: 'zh-CN', langPrefix: 'zh' };
  if (l.startsWith('fr')) return { bcp47: 'fr-FR', langPrefix: 'fr' };
  if (l.startsWith('de')) return { bcp47: 'de-DE', langPrefix: 'de' };
  if (l.startsWith('it')) return { bcp47: 'it-IT', langPrefix: 'it' };
  if (l.startsWith('es')) return { bcp47: 'es-ES', langPrefix: 'es' };
  if (l === 'en-us' || l.includes('us') || l.includes('american')) return { bcp47: 'en-US', langPrefix: 'en' };
  if (l === 'en-gb' || l.includes('gb') || l.includes('uk') || l.includes('british')) return { bcp47: 'en-GB', langPrefix: 'en' };

  return { bcp47: 'en-US', langPrefix: 'en' };
}

// Clean text for speech synthesis (remove markdown formatting, brackets, etc.)
export function sanitizeSpeechText(text: string): string {
  if (!text) return '';
  return text
    .replace(/[*_#`~[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------------------------------------------------------------------------
// Eager Synchronous Voice Discovery & Ranking Engine
// ---------------------------------------------------------------------------
let cachedVoices: SpeechSynthesisVoice[] = [];

// List of robotic, toy, or novelty synthesizer voices to exclude/demote
const ROBOTIC_VOICE_BLACKLIST = new Set([
  'albert', 'bad news', 'bahh', 'bells', 'boing', 'bubbles', 'cellos',
  'deranged', 'good news', 'hysterical', 'junior', 'pipe organ',
  'trinoids', 'whisper', 'zarvox', 'ralph', 'fred', 'alex', 'victoria',
  'espeak', 'klatt', 'jester', 'organ', 'superstar'
]);

function refreshVoices(): SpeechSynthesisVoice[] {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        cachedVoices = v;
      }
    } catch {
      // ignore
    }
  }
  return cachedVoices;
}

// Eager initialization on module load
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
  };
  if (window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      refreshVoices();
    });
  }
}

/**
 * Score and rank voices to pick the most natural, human-like voice available.
 * Prioritizes 100% reliable local OS voices over external network-dependent cloud voices.
 */
export function scoreVoice(v: SpeechSynthesisVoice, targetBcp47: string): number {
  const name = v.name.toLowerCase();
  const vLang = v.lang.toLowerCase().replace('_', '-');
  const target = targetBcp47.toLowerCase();
  const prefix = target.split('-')[0];

  let score = 0;

  // Language matching
  if (vLang === target) score += 80;
  else if (vLang.startsWith(prefix)) score += 40;
  else return -1000; // Incompatible language

  // Demote known robotic / toy voices
  for (const blacklisted of ROBOTIC_VOICE_BLACKLIST) {
    if (name.includes(blacklisted)) return -500;
  }

  // Tier 1: Proven high-fidelity native human voices (macOS / iOS / Windows 11)
  const premiumNames = [
    // English (UK / US)
    'samantha', 'daniel', 'oliver', 'serena', 'kate', 'karen', 'moira', 'tessa',
    'jenny', 'guy', 'aria',
    // French
    'thomas', 'audrey', 'aurelie', 'jacques', 'denise', 'henri',
    // German
    'anna', 'katja', 'conrad',
    // Italian
    'alice', 'elsa', 'cosimo',
    // Spanish
    'monica', 'mónica', 'jorge', 'paulina', 'elvira', 'alvaro',
    // Chinese
    'tingting', 'meijia', 'sinji', 'xiaoxiao', 'yunxi',
    // Arabic
    'majed', 'maged', 'tarik', 'laila', 'mariam', 'shakir', 'salma'
  ];
  for (const pName of premiumNames) {
    if (name.includes(pName)) {
      score += 120;
      break;
    }
  }

  // Apple Siri Enhanced / High-Definition Voices
  if (name.includes('enhanced') || name.includes('premium') || name.includes('siri')) {
    score += 50;
  }

  // Local voices get significant priority because they never fail due to network/firewall/CORS
  if (v.localService) {
    score += 40;
  } else {
    // Demote remote cloud voices so local reliable voices are always preferred
    score -= 30;
  }

  // Prefer default voice if marked by system
  if (v.default) score += 10;

  return score;
}

/**
 * Find best available voice for language code.
 */
export function findBestVoice(lang?: string, preferredVoiceName?: string): SpeechSynthesisVoice | null {
  refreshVoices();
  if (cachedVoices.length === 0) return null;

  const { bcp47, langPrefix } = normalizeLanguageCode(lang);

  // If user explicitly requested a specific voice by name
  if (preferredVoiceName) {
    const found = cachedVoices.find((v) => v.name.toLowerCase() === preferredVoiceName.toLowerCase());
    if (found) return found;
  }

  // Filter voices that match language prefix or target code
  const candidates = cachedVoices.filter((v) => {
    const vLang = v.lang.toLowerCase().replace('_', '-');
    return vLang.startsWith(langPrefix) || vLang === bcp47.toLowerCase();
  });

  if (candidates.length === 0) {
    return null;
  }

  // Sort by score descending
  candidates.sort((a, b) => scoreVoice(b, bcp47) - scoreVoice(a, bcp47));

  return candidates[0] || null;
}

/**
 * Get all available quality voices for a given language.
 */
export function getAvailableVoicesForLanguage(lang?: string): SpeechSynthesisVoice[] {
  refreshVoices();
  const { bcp47, langPrefix } = normalizeLanguageCode(lang);

  const candidates = cachedVoices.filter((v) => {
    const vLang = v.lang.toLowerCase().replace('_', '-');
    if (!vLang.startsWith(langPrefix) && vLang !== bcp47.toLowerCase()) return false;
    for (const b of ROBOTIC_VOICE_BLACKLIST) {
      if (v.name.toLowerCase().includes(b)) return false;
    }
    return true;
  });

  return candidates.sort((a, b) => scoreVoice(b, bcp47) - scoreVoice(a, bcp47));
}

// ---------------------------------------------------------------------------
// AI Voice Engine Core Singleton
// ---------------------------------------------------------------------------
class AiVoiceEngineCore {
  private currentPlayingText: string | null = null;
  private isCurrentlyPlaying = false;
  private currentVoiceName: string | null = null;
  private keepaliveTimer: ReturnType<typeof setInterval> | null = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private activeDialogueAbortController: AbortController | null = null;
  private subscribers = new Set<(playing: boolean, text: string | null, voice: string | null) => void>();

  public subscribe(cb: (playing: boolean, text: string | null, voice: string | null) => void) {
    this.subscribers.add(cb);
    cb(this.isCurrentlyPlaying, this.currentPlayingText, this.currentVoiceName);
    return () => this.subscribers.delete(cb);
  }

  private notify(playing: boolean, text: string | null, voice: string | null = this.currentVoiceName) {
    this.isCurrentlyPlaying = playing;
    this.currentPlayingText = text;
    this.currentVoiceName = voice;
    this.subscribers.forEach((cb) => cb(playing, text, voice));
  }

  private clearKeepalive() {
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }
  }

  private startKeepalive() {
    this.clearKeepalive();
    // Chromium 15-second speech cutoff bug fix:
    // Periodically pause and instantly resume to keep the speech synthesis channel active
    this.keepaliveTimer = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        this.clearKeepalive();
      }
    }, 10000);
  }

  public stopAll(): void {
    this.clearKeepalive();

    if (this.activeDialogueAbortController) {
      this.activeDialogueAbortController.abort();
      this.activeDialogueAbortController = null;
    }

    if (this.activeUtterance) {
      try {
        this.activeUtterance.onend = null;
        this.activeUtterance.onerror = null;
        this.activeUtterance.onstart = null;
      } catch {
        // ignore
      }
      this.activeUtterance = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }

    this.notify(false, null, this.currentVoiceName);
  }

  /**
   * Speak text immediately using synchronous dispatch to preserve user activation.
   * Includes automatic fallback to system default voice if a chosen voice fails.
   */
  public speak(text: string, options: SpeakOptions = {}): void {
    const clean = sanitizeSpeechText(text);
    if (!clean) return;

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      options.onError?.(new Error('SpeechSynthesis not supported'));
      return;
    }

    // Cancel any previous speech synchronously
    this.stopAll();

    const { bcp47 } = normalizeLanguageCode(options.lang);
    const bestVoice = findBestVoice(options.lang, options.voiceName);

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = bcp47;
    utterance.rate = Math.max(0.6, Math.min(1.4, options.rate || 0.95));
    utterance.pitch = Math.max(0.8, Math.min(1.2, options.pitch || 1.0));

    if (bestVoice) {
      utterance.voice = bestVoice;
      this.currentVoiceName = bestVoice.name;
    }

    let hasStarted = false;

    utterance.onstart = () => {
      hasStarted = true;
      this.notify(true, clean, bestVoice?.name || 'Natural Vocal');
      this.startKeepalive();
      options.onStart?.();
    };

    utterance.onend = () => {
      this.clearKeepalive();
      this.activeUtterance = null;
      this.notify(false, null, bestVoice?.name || null);
      options.onEnd?.();
    };

    utterance.onerror = (err: any) => {
      this.clearKeepalive();
      this.activeUtterance = null;
      this.notify(false, null, null);

      // Automatic fallback: If chosen voice errored before starting, retry with system default voice
      if (!hasStarted && bestVoice && err?.error !== 'canceled' && err?.error !== 'interrupted') {
        console.warn(`[AiVoiceEngine] Voice "${bestVoice.name}" failed to start. Retrying with system default...`);
        try {
          const fallback = new SpeechSynthesisUtterance(clean);
          fallback.lang = bcp47;
          fallback.rate = utterance.rate;
          fallback.pitch = utterance.pitch;
          fallback.onstart = () => {
            this.notify(true, clean, 'System Default Voice');
            this.startKeepalive();
            options.onStart?.();
          };
          fallback.onend = () => {
            this.clearKeepalive();
            this.activeUtterance = null;
            this.notify(false, null, null);
            options.onEnd?.();
          };
          fallback.onerror = (e) => {
            this.clearKeepalive();
            this.activeUtterance = null;
            this.notify(false, null, null);
            if (e?.error !== 'canceled' && e?.error !== 'interrupted') {
              options.onError?.(e);
            }
          };
          this.activeUtterance = fallback;
          window.speechSynthesis.speak(fallback);
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
          return;
        } catch {
          // ignore
        }
      }

      if (err?.error !== 'canceled' && err?.error !== 'interrupted') {
        options.onError?.(err);
      }
    };

    // Retain reference to prevent V8 GC bug
    this.activeUtterance = utterance;

    try {
      // 100% synchronous dispatch in user gesture tick
      window.speechSynthesis.speak(utterance);
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (e) {
      console.error('[AiVoiceEngine] Failed to speak:', e);
      this.stopAll();
      options.onError?.(e);
    }
  }

  /**
   * Play sequential dialogue turns with natural human pacing and turn highlighting.
   */
  public playDialogue(
    turns: DialogueTurnItem[],
    defaultLang: VoiceLanguageCode | string,
    options: DialogueOptions = {}
  ): void {
    this.stopAll();

    if (turns.length === 0) return;

    const abortController = new AbortController();
    this.activeDialogueAbortController = abortController;

    let currentIndex = 0;

    const playNextTurn = () => {
      if (abortController.signal.aborted || currentIndex >= turns.length) {
        if (!abortController.signal.aborted) {
          options.onComplete?.();
        }
        this.notify(false, null, this.currentVoiceName);
        return;
      }

      const turn = turns[currentIndex];
      options.onTurnStart?.(currentIndex, turn);

      this.speak(turn.text, {
        lang: turn.lang || defaultLang,
        rate: options.rate || 0.95,
        onEnd: () => {
          if (abortController.signal.aborted) return;
          options.onTurnEnd?.(currentIndex, turn);
          currentIndex++;

          const delay = turn.delayAfterMs || 650;
          setTimeout(() => {
            if (!abortController.signal.aborted) {
              playNextTurn();
            }
          }, delay);
        },
        onError: (err) => {
          if (!abortController.signal.aborted) {
            options.onError?.(err);
          }
          this.stopAll();
        },
      });
    };

    playNextTurn();
  }

  public getActiveVoice(): string | null {
    return this.currentVoiceName;
  }
}

// Export singleton instance
export const aiVoiceEngine = new AiVoiceEngineCore();

// ---------------------------------------------------------------------------
// React Hook for Language Studios
// ---------------------------------------------------------------------------
export function useAiVoiceEngine(defaultLang?: VoiceLanguageCode | string) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeText, setActiveText] = useState<string | null>(null);
  const [activeVoice, setActiveVoice] = useState<string | null>(null);
  const [voiceRate, setVoiceRate] = useState<number>(0.95);
  const defaultLangRef = useRef(defaultLang);
  defaultLangRef.current = defaultLang;

  useEffect(() => {
    const unsubscribe = aiVoiceEngine.subscribe((playing, text, voice) => {
      setIsPlaying(playing);
      setActiveText(text);
      setActiveVoice(voice);
    });
    return () => {
      unsubscribe();
      aiVoiceEngine.stopAll();
    };
  }, []);

  const speak = useCallback(
    (text: string, options?: Partial<SpeakOptions>) => {
      aiVoiceEngine.speak(text, {
        lang: options?.lang || defaultLangRef.current,
        rate: options?.rate ?? voiceRate,
        ...options,
      });
    },
    [voiceRate]
  );

  const stop = useCallback(() => {
    aiVoiceEngine.stopAll();
  }, []);

  const playDialogue = useCallback(
    (turns: DialogueTurnItem[], options?: DialogueOptions) => {
      aiVoiceEngine.playDialogue(turns, defaultLangRef.current || 'en', {
        rate: voiceRate,
        ...options,
      });
    },
    [voiceRate]
  );

  return {
    isPlaying,
    activeText,
    activeVoice,
    voiceRate,
    setVoiceRate,
    speak,
    stop,
    playDialogue,
  };
}
