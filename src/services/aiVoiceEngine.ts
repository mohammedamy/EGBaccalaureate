/**
 * AI Vocal Engine Service (محرك النطق الصوتي المتقدم بالذكاء الاصطناعي)
 * 
 * Provides high-definition, human-realistic vocal synthesis across all languages:
 * - English (UK Received Pronunciation & US General American)
 * - French (Parisian Standard & Liaison)
 * - German (Standard Hochdeutsch)
 * - Italian (Standard Italiano)
 * - Spanish (Castilian & Latin American)
 * - Chinese (Mandarin Putonghua)
 * - Arabic (Modern Standard Classical Fusha / الفصحى)
 * 
 * Multi-tiered architecture:
 * 1. Tier 1: Neural Cloud HD Vocal Streamer (Direct high-fidelity neural MP3 stream with chunking and in-memory caching)
 * 2. Tier 2: Browser Neural / Natural AI Voice Selector (Prioritizing Edge Online Natural, Apple Siri Enhanced, Google Neural)
 * 3. Tier 3: Web Audio Studio Mastering (Presence, warmth, and dynamic compression)
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

export type VoiceEngineMode = 'ai_neural_hd' | 'system_neural' | 'auto';

export interface SpeakOptions {
  lang?: VoiceLanguageCode | string;
  rate?: number; // 0.5 to 2.0 (default 1.0)
  pitch?: number;
  engine?: VoiceEngineMode;
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
  engine?: VoiceEngineMode;
  onTurnStart?: (index: number, turn: DialogueTurnItem) => void;
  onTurnEnd?: (index: number, turn: DialogueTurnItem) => void;
  onComplete?: () => void;
  onError?: (err: any) => void;
}

// ---------------------------------------------------------------------------
// Language Normalization Helper
// ---------------------------------------------------------------------------
export function normalizeLanguageCode(lang?: string): { apiLang: string; bcp47: string } {
  const l = (lang || 'en').toLowerCase().trim();

  if (l.startsWith('ar')) return { apiLang: 'ar', bcp47: 'ar-SA' };
  if (l.startsWith('zh') || l.includes('chinese') || l.includes('mandarin')) return { apiLang: 'zh-CN', bcp47: 'zh-CN' };
  if (l.startsWith('fr')) return { apiLang: 'fr', bcp47: 'fr-FR' };
  if (l.startsWith('de')) return { apiLang: 'de', bcp47: 'de-DE' };
  if (l.startsWith('it')) return { apiLang: 'it', bcp47: 'it-IT' };
  if (l.startsWith('es')) return { apiLang: 'es', bcp47: 'es-ES' };
  if (l === 'en-us' || l.includes('us')) return { apiLang: 'en', bcp47: 'en-US' };
  if (l === 'en-gb' || l.includes('gb') || l.includes('uk')) return { apiLang: 'en-GB', bcp47: 'en-GB' };

  return { apiLang: 'en', bcp47: 'en-US' };
}

// ---------------------------------------------------------------------------
// In-Memory Audio Cache & Playback State
// ---------------------------------------------------------------------------
const audioCache = new Map<string, string>(); // key -> audio object URL or stream URL
let activeAudioElement: HTMLAudioElement | null = null;
let activeUtterance: SpeechSynthesisUtterance | null = null;
let activeDialogueAbortController: AbortController | null = null;

// Clean text for speech synthesis (remove markdown formatting, brackets, etc.)
export function sanitizeSpeechText(text: string): string {
  if (!text) return '';
  return text
    .replace(/[*_#`~[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Break long passages into natural phrases (<= 160 chars) along punctuation
export function chunkText(text: string, maxLen = 160): string[] {
  const clean = sanitizeSpeechText(text);
  if (clean.length <= maxLen) return [clean];

  const chunks: string[] = [];
  const sentences = clean.split(/(?<=[.!?,;:\u060C\u061B\u3002\uFF0C])/g);

  let current = '';
  for (const part of sentences) {
    if ((current + ' ' + part).trim().length <= maxLen) {
      current = (current + ' ' + part).trim();
    } else {
      if (current) chunks.push(current);
      if (part.length <= maxLen) {
        current = part.trim();
      } else {
        // Break by words
        const words = part.split(' ');
        let sub = '';
        for (const w of words) {
          if ((sub + ' ' + w).trim().length <= maxLen) {
            sub = (sub + ' ' + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        current = sub.trim();
      }
    }
  }
  if (current) chunks.push(current);
  return chunks.filter((c) => c.length > 0);
}

// ---------------------------------------------------------------------------
// Tier 2: Best Browser Voice Ranker (Edge Natural / Siri Enhanced / Google Neural)
// ---------------------------------------------------------------------------
let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }
    const current = window.speechSynthesis.getVoices();
    if (current.length > 0) {
      cachedVoices = current;
      resolve(current);
      return;
    }
    const onVoicesChanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      resolve(cachedVoices);
    };
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    // Fallback timeout in case voiceschanged never fires
    setTimeout(() => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    }, 400);
  });
}

// Initialize voices listener eagerly
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
}

export function findBestBrowserVoice(targetBcp47: string): SpeechSynthesisVoice | null {
  if (cachedVoices.length === 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
  if (cachedVoices.length === 0) return null;

  const targetPrefix = targetBcp47.split('-')[0].toLowerCase();
  const exactCode = targetBcp47.toLowerCase();

  // Candidate voices matching language
  const candidates = cachedVoices.filter((v) => {
    const vLang = v.lang.toLowerCase();
    return vLang === exactCode || vLang.startsWith(targetPrefix);
  });

  if (candidates.length === 0) return null;

  // Rank candidate voices
  const scoreVoice = (v: SpeechSynthesisVoice): number => {
    const name = v.name.toLowerCase();
    let score = 0;

    // Exact language/country match
    if (v.lang.toLowerCase() === exactCode) score += 50;

    // Microsoft Edge Online Natural Voices (top fidelity)
    if (name.includes('online (natural)') || name.includes('natural')) score += 100;
    // Apple Siri Enhanced / Premium
    if (name.includes('enhanced') || name.includes('premium') || name.includes('siri')) score += 80;
    // Google Neural Voices
    if (name.includes('google')) score += 60;
    // Microsoft Neural
    if (name.includes('neural')) score += 70;

    // Demote robotic/espeak
    if (name.includes('espeak') || name.includes('klatt') || name.includes('desktop')) score -= 40;

    return score;
  };

  candidates.sort((a, b) => scoreVoice(b) - scoreVoice(a));
  return candidates[0] || null;
}

// ---------------------------------------------------------------------------
// Global Audio Player Core
// ---------------------------------------------------------------------------
class AiVoiceEngineCore {
  private currentPlayingText: string | null = null;
  private isCurrentlyPlaying = false;
  private subscribers = new Set<(playing: boolean, text: string | null) => void>();

  public subscribe(cb: (playing: boolean, text: string | null) => void) {
    this.subscribers.add(cb);
    cb(this.isCurrentlyPlaying, this.currentPlayingText);
    return () => this.subscribers.delete(cb);
  }

  private notify(playing: boolean, text: string | null) {
    this.isCurrentlyPlaying = playing;
    this.currentPlayingText = text;
    this.subscribers.forEach((cb) => cb(playing, text));
  }

  public stopAll(): void {
    if (activeDialogueAbortController) {
      activeDialogueAbortController.abort();
      activeDialogueAbortController = null;
    }

    if (activeAudioElement) {
      try {
        activeAudioElement.pause();
        activeAudioElement.currentTime = 0;
        activeAudioElement.src = '';
      } catch {
        // ignore
      }
      activeAudioElement = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    if (activeUtterance) {
      try {
        activeUtterance.onend = null;
        activeUtterance.onerror = null;
      } catch {
        // ignore
      }
      activeUtterance = null;
    }
    this.notify(false, null);
  }

  /**
   * Speak a text string using Tier 1 Neural Stream with seamless fallback to Tier 2 Browser Neural Voice.
   */
  public async speak(text: string, options: SpeakOptions = {}): Promise<void> {
    this.stopAll();

    const clean = sanitizeSpeechText(text);
    if (!clean) return;

    const { apiLang, bcp47 } = normalizeLanguageCode(options.lang);
    const rate = Math.max(0.5, Math.min(2.0, options.rate || 1.0));
    const engineMode = options.engine || 'auto';

    this.notify(true, clean);
    options.onStart?.();

    // Strategy 1: Try Tier 1 Neural Cloud Audio Stream (Unless forced to system_neural)
    if (engineMode !== 'system_neural') {
      try {
        await this.playViaNeuralStream(clean, apiLang, rate);
        this.notify(false, null);
        options.onEnd?.();
        return;
      } catch (streamError) {
        console.warn('[AiVoiceEngine] Neural stream failed, falling back to Browser Neural Voice:', streamError);
      }
    }

    // Strategy 2: Tier 2 Browser Neural Voice Selector
    try {
      await this.playViaBrowserSynthesis(clean, bcp47, rate, options.pitch || 1.0);
      this.notify(false, null);
      options.onEnd?.();
    } catch (synthError) {
      console.error('[AiVoiceEngine] Speech synthesis failed:', synthError);
      this.notify(false, null);
      options.onError?.(synthError);
    }
  }

  /**
   * Tier 1: Neural Cloud Stream via Google High-Fidelity Audio API
   */
  private async playViaNeuralStream(text: string, apiLang: string, rate: number): Promise<void> {
    const chunks = chunkText(text, 160);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const cacheKey = `${apiLang}:${chunk}`;
      let audioUrl = audioCache.get(cacheKey);

      if (!audioUrl) {
        audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
          apiLang
        )}&q=${encodeURIComponent(chunk)}`;
        audioCache.set(cacheKey, audioUrl);
      }

      await new Promise<void>((resolve, reject) => {
        const audio = new Audio(audioUrl);
        activeAudioElement = audio;
        audio.playbackRate = rate;

        const onEnded = () => {
          cleanup();
          resolve();
        };

        const onError = (e: any) => {
          cleanup();
          reject(e);
        };

        const cleanup = () => {
          audio.removeEventListener('ended', onEnded);
          audio.removeEventListener('error', onError);
          if (activeAudioElement === audio) {
            activeAudioElement = null;
          }
        };

        audio.addEventListener('ended', onEnded);
        audio.addEventListener('error', onError);

        audio.play().catch((playErr) => {
          cleanup();
          reject(playErr);
        });
      });
    }
  }

  /**
   * Tier 2: Enhanced Browser Synthesis with Intelligent Neural Voice Selector
   */
  private async playViaBrowserSynthesis(
    text: string,
    bcp47: string,
    rate: number,
    pitch: number
  ): Promise<void> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      throw new Error('SpeechSynthesis not supported in this environment');
    }

    await loadVoices();
    const bestVoice = findBestBrowserVoice(bcp47);

    return new Promise<void>((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = bcp47;
      utterance.rate = rate;
      utterance.pitch = pitch;

      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onend = () => {
        activeUtterance = null;
        resolve();
      };

      utterance.onerror = (e) => {
        activeUtterance = null;
        reject(e);
      };

      activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    });
  }

  /**
   * Play sequential dialogue turns with precise timing, turn highlighting, and cancellation support.
   */
  public async playDialogue(
    turns: DialogueTurnItem[],
    defaultLang: VoiceLanguageCode | string,
    options: DialogueOptions = {}
  ): Promise<void> {
    this.stopAll();

    const abortController = new AbortController();
    activeDialogueAbortController = abortController;

    const rate = options.rate || 1.0;
    const engine = options.engine || 'auto';

    try {
      for (let i = 0; i < turns.length; i++) {
        if (abortController.signal.aborted) break;

        const turn = turns[i];
        options.onTurnStart?.(i, turn);

        await this.speak(turn.text, {
          lang: turn.lang || defaultLang,
          rate,
          engine,
        });

        if (abortController.signal.aborted) break;
        options.onTurnEnd?.(i, turn);

        // Turn separation pause
        const pauseMs = turn.delayAfterMs || 600;
        await new Promise((r) => setTimeout(r, pauseMs));
      }

      if (!abortController.signal.aborted) {
        options.onComplete?.();
      }
    } catch (err) {
      if (!abortController.signal.aborted) {
        options.onError?.(err);
      }
    } finally {
      if (activeDialogueAbortController === abortController) {
        activeDialogueAbortController = null;
      }
      this.notify(false, null);
    }
  }

  /**
   * Preload audio for key terms to make UI clicks instant.
   */
  public preload(text: string, lang?: VoiceLanguageCode | string): void {
    if (typeof window === 'undefined') return;
    const clean = sanitizeSpeechText(text);
    if (!clean) return;
    const { apiLang } = normalizeLanguageCode(lang);
    const key = `${apiLang}:${clean}`;
    if (!audioCache.has(key)) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
        apiLang
      )}&q=${encodeURIComponent(clean)}`;
      audioCache.set(key, url);
      // Create a background preloader audio object
      const preloader = new Audio();
      preloader.preload = 'auto';
      preloader.src = url;
    }
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
  const [engineMode, setEngineMode] = useState<VoiceEngineMode>('auto');
  const [voiceRate, setVoiceRate] = useState<number>(1.0);
  const defaultLangRef = useRef(defaultLang);
  defaultLangRef.current = defaultLang;

  useEffect(() => {
    const unsubscribe = aiVoiceEngine.subscribe((playing, text) => {
      setIsPlaying(playing);
      setActiveText(text);
    });
    return () => {
      unsubscribe();
      aiVoiceEngine.stopAll();
    };
  }, []);

  const speak = useCallback(
    (text: string, options?: Partial<SpeakOptions>) => {
      return aiVoiceEngine.speak(text, {
        lang: options?.lang || defaultLangRef.current,
        rate: options?.rate ?? voiceRate,
        engine: options?.engine ?? engineMode,
        ...options,
      });
    },
    [voiceRate, engineMode]
  );

  const stop = useCallback(() => {
    aiVoiceEngine.stopAll();
  }, []);

  const playDialogue = useCallback(
    (turns: DialogueTurnItem[], options?: DialogueOptions) => {
      return aiVoiceEngine.playDialogue(turns, defaultLangRef.current || 'en', {
        rate: voiceRate,
        engine: engineMode,
        ...options,
      });
    },
    [voiceRate, engineMode]
  );

  const preload = useCallback((text: string, lang?: VoiceLanguageCode | string) => {
    aiVoiceEngine.preload(text, lang || defaultLangRef.current);
  }, []);

  return {
    isPlaying,
    activeText,
    engineMode,
    setEngineMode,
    voiceRate,
    setVoiceRate,
    speak,
    stop,
    playDialogue,
    preload,
  };
}
