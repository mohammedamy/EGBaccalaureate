/**
 * AI Vocal Engine Service (محرك النطق الصوتي المتقدم بالذكاء الاصطناعي)
 * 
 * Provides ultra high-definition, natural human-realistic vocal synthesis across all languages:
 * - English (UK Received Pronunciation & US General American)
 * - French (Parisian Standard & Liaison)
 * - German (Standard Hochdeutsch)
 * - Italian (Standard Italiano)
 * - Spanish (Castilian & Latin American)
 * - Chinese (Mandarin Putonghua)
 * - Arabic (Modern Standard Classical Fusha / المصرية والفصحى)
 * 
 * Key Architecture Highlights:
 * 1. Immediate Synchronous Dispatch: Invoked directly within user interaction tick so browsers (Chrome/Safari/Edge)
 *    never block audio playback due to autoplay or lost user activation policies.
 * 2. Intelligent Neural & Natural AI Voice Discovery: Scans and ranks all browser and cloud-synced voices,
 *    heavily prioritizing Edge Natural AI (Azure Neural), Google Cloud Neural, and Apple Siri Enhanced/Premium voices.
 * 3. Exact Accent & Dialect Enforcement: Prevents US voices from overriding British English when UK RP is chosen,
 *    and prioritizes Egyptian Arabic (ar-EG) for the Egyptian curriculum with Saudi Fusha (ar-SA) compatibility.
 * 4. User Voice Memory: Remembers chosen preferred voices per language in localStorage.
 * 5. Chromium Keepalive Fix: Automatically pings pause/resume to eliminate the 15-second speech cutoff bug.
 * 6. Humanized Cadence & Phonetic Sanitization: Cleans IPA slashes, French liaisons, and preserves Arabic Tashkeel diacritics.
 * 7. Turn-Taking Dialogue Sequencer: Seamlessly chains conversational audio tracks with natural turn-taking pauses.
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
  rate?: number; // 0.5 to 2.0 (default 0.95 for optimal educational clarity)
  pitch?: number; // 0.8 to 1.3 (default 1.0)
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
  voiceName?: string;
  delayAfterMs?: number;
}

export interface DialogueOptions {
  rate?: number;
  onTurnStart?: (index: number, turn: DialogueTurnItem) => void;
  onTurnEnd?: (index: number, turn: DialogueTurnItem) => void;
  onComplete?: () => void;
  onError?: (err: any) => void;
}

export interface VoiceQualityInfo {
  displayName: string;
  tier: 'natural_ai' | 'enhanced_hd' | 'google_cloud' | 'system_native';
  tierLabelAr: string;
  tierLabelEn: string;
  badgeClass: string;
  gender?: 'female' | 'male';
  localeLabel: string;
}

// ---------------------------------------------------------------------------
// Language Normalization Helper
// ---------------------------------------------------------------------------
export function normalizeLanguageCode(lang?: string): { bcp47: string; langPrefix: string; preferredDialect?: string } {
  const l = (lang || 'en').toLowerCase().trim();

  if (l.includes('eg') || l.includes('egypt')) {
    return { bcp47: 'ar-EG', langPrefix: 'ar', preferredDialect: 'eg' };
  }
  if (l.startsWith('ar')) {
    return { bcp47: 'ar-EG', langPrefix: 'ar', preferredDialect: 'eg' };
  }
  if (l.startsWith('zh') || l.includes('chinese') || l.includes('mandarin')) {
    return { bcp47: 'zh-CN', langPrefix: 'zh' };
  }
  if (l.startsWith('fr')) {
    return { bcp47: 'fr-FR', langPrefix: 'fr' };
  }
  if (l.startsWith('de')) {
    return { bcp47: 'de-DE', langPrefix: 'de' };
  }
  if (l.startsWith('it')) {
    return { bcp47: 'it-IT', langPrefix: 'it' };
  }
  if (l.startsWith('es')) {
    return { bcp47: 'es-ES', langPrefix: 'es' };
  }
  if (l === 'en-us' || l.includes('us') || l.includes('american')) {
    return { bcp47: 'en-US', langPrefix: 'en', preferredDialect: 'us' };
  }
  if (l === 'en-gb' || l.includes('gb') || l.includes('uk') || l.includes('british')) {
    return { bcp47: 'en-GB', langPrefix: 'en', preferredDialect: 'gb' };
  }

  // Default English curriculum in Egypt is British RP with American option
  return { bcp47: 'en-GB', langPrefix: 'en', preferredDialect: 'gb' };
}

// ---------------------------------------------------------------------------
// Speech Text Sanitization & Phonetic Preprocessing
// ---------------------------------------------------------------------------
export function sanitizeSpeechText(text: string): string {
  if (!text) return '';

  let cleaned = text;

  // 1. Remove markdown symbols (*, _, ~, #, `, >, quotes)
  cleaned = cleaned.replace(/[*_#`~>]/g, ' ');

  // 2. Remove IPA delimiters /.../ or [...] if passing isolated phonemes, e.g. "/θ/" -> "θ"
  cleaned = cleaned.replace(/^\s*\/+([^\/]+)\/+\s*$/g, '$1');
  cleaned = cleaned.replace(/^\s*\[+([^\]]+)\]+\s*$/g, '$1');

  // 3. Clean French liaison symbol (‿) into smooth word spacing
  cleaned = cleaned.replace(/‿/g, ' ');

  // 4. Remove brackets and parentheses but keep word content
  cleaned = cleaned.replace(/[[\]()]/g, ' ');

  // 5. Preserve Arabic Tashkeel (harakat: \u064B - \u0652, \u0654, \u0655, \u0670)
  // Strip non-Arabic, non-Latin unwanted punctuation (like bullets, long dashes)
  cleaned = cleaned.replace(/[•●▪◆✦—–«»"']/g, ' ');

  // 6. Collapse multiple whitespace into a single clean space
  return cleaned.replace(/\s+/g, ' ').trim();
}

// ---------------------------------------------------------------------------
// Robotic Synthesizer Blacklist
// ---------------------------------------------------------------------------
const ROBOTIC_VOICE_BLACKLIST = new Set([
  'albert', 'bad news', 'bahh', 'bells', 'boing', 'bubbles', 'cellos',
  'deranged', 'good news', 'hysterical', 'junior', 'pipe organ',
  'trinoids', 'whisper', 'zarvox', 'ralph', 'fred', 'alex', 'victoria',
  'espeak', 'klatt', 'jester', 'organ', 'superstar'
]);

// ---------------------------------------------------------------------------
// Premium Neural / Natural Voice Personas
// ---------------------------------------------------------------------------
const PREMIUM_PERSONAS = [
  // English (UK / US)
  'ryan', 'sonia', 'libby', 'george', 'oliver', 'serena', 'kate', 'hazel', 'susan',
  'jenny', 'guy', 'aria', 'samantha', 'tom', 'ava', 'allison', 'michelle',
  'daniel', 'eddy', 'arthur', 'martha', 'clara',
  // French
  'denise', 'henri', 'alain', 'brigitte', 'celeste', 'claude', 'coralie', 'jacques', 'thomas', 'audrey', 'aurelie',
  // German
  'katja', 'conrad', 'amala', 'bernd', 'christoph', 'elk', 'killian', 'anna', 'klarissa',
  // Italian
  'elsa', 'isabella', 'diego', 'cosimo', 'alice', 'fabio',
  // Spanish
  'elvira', 'alvaro', 'jorge', 'monica', 'mónica', 'paulina', 'paloma', 'raquel',
  // Chinese
  'xiaoxiao', 'yunxi', 'yunjian', 'xiaoyi', 'tingting', 'meijia',
  // Arabic
  'salma', 'shakir', 'hamed', 'zariyah', 'maged', 'majed', 'tarik', 'laila', 'mariam', 'naayf'
];

// ---------------------------------------------------------------------------
// Eager & Asynchronous Voice Discovery Engine
// ---------------------------------------------------------------------------
let cachedVoices: SpeechSynthesisVoice[] = [];
let voiceChangeSubscribers = new Set<() => void>();

export function refreshVoices(): SpeechSynthesisVoice[] {
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

/**
 * Ensure voices are loaded asynchronously in browsers where getVoices() is initially empty (Chromium/Chrome/Edge).
 */
export async function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }

  const existing = window.speechSynthesis.getVoices();
  if (existing && existing.length > 0) {
    cachedVoices = existing;
    return existing;
  }

  return new Promise((resolve) => {
    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      cachedVoices = window.speechSynthesis.getVoices() || [];
      resolve(cachedVoices);
    };

    const handler = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      finish();
    };

    window.speechSynthesis.addEventListener('voiceschanged', handler);
    // Timeout fallback after 450ms
    setTimeout(finish, 450);
  });
}

// Global voice listener initialization
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
    voiceChangeSubscribers.forEach((cb) => cb());
  };
  if (window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      refreshVoices();
      voiceChangeSubscribers.forEach((cb) => cb());
    });
  }
}

// ---------------------------------------------------------------------------
// LocalStorage Preference Keys
// ---------------------------------------------------------------------------
const PREF_PREFIX = 'egbac_preferred_voice_';

export function getStoredVoicePreference(langKey: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(`${PREF_PREFIX}${langKey}`);
  } catch {
    return null;
  }
}

export function setStoredVoicePreference(langKey: string, voiceName: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${PREF_PREFIX}${langKey}`, voiceName);
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Voice Quality Information & Metadata Extractor
// ---------------------------------------------------------------------------
export function getVoiceQualityInfo(voice: SpeechSynthesisVoice): VoiceQualityInfo {
  const name = voice.name.toLowerCase();
  let tier: VoiceQualityInfo['tier'] = 'system_native';
  let tierLabelAr = 'نظام الجهاز القياسي';
  let tierLabelEn = 'Standard System';
  let badgeClass = 'bg-slate-500/20 text-slate-300 border-slate-500/30';

  if (name.includes('natural') || name.includes('neural') || name.includes('wavenet') || name.includes('journey')) {
    tier = 'natural_ai';
    tierLabelAr = 'ذكاء اصطناعي فائق (Natural AI)';
    tierLabelEn = 'Ultra Natural AI';
    badgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
  } else if (name.includes('enhanced') || name.includes('premium') || name.includes('siri')) {
    tier = 'enhanced_hd';
    tierLabelAr = 'نطق عالي الدقة (HD Enhanced)';
    tierLabelEn = 'High-Definition HD';
    badgeClass = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
  } else if (name.includes('google') || name.includes('online')) {
    tier = 'google_cloud';
    tierLabelAr = 'سحابي متقدم (Cloud Neural)';
    tierLabelEn = 'Advanced Cloud';
    badgeClass = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
  }

  // Detect likely gender from name
  let gender: 'female' | 'male' | undefined;
  const femaleNames = ['jenny', 'sonia', 'libby', 'kate', 'serena', 'samantha', 'aria', 'ava', 'allison', 'denise', 'brigitte', 'celeste', 'coralie', 'audrey', 'aurelie', 'katja', 'amala', 'anna', 'klarissa', 'elsa', 'isabella', 'alice', 'elvira', 'monica', 'mónica', 'paulina', 'paloma', 'raquel', 'xiaoxiao', 'tingting', 'meijia', 'salma', 'zariyah', 'laila', 'mariam'];
  const maleNames = ['ryan', 'george', 'oliver', 'guy', 'daniel', 'tom', 'henri', 'alain', 'claude', 'jacques', 'thomas', 'conrad', 'bernd', 'christoph', 'killian', 'diego', 'cosimo', 'fabio', 'alvaro', 'jorge', 'yunxi', 'yunjian', 'xiaoyi', 'shakir', 'hamed', 'maged', 'majed', 'tarik', 'naayf'];

  for (const fn of femaleNames) {
    if (name.includes(fn)) {
      gender = 'female';
      break;
    }
  }
  if (!gender) {
    for (const mn of maleNames) {
      if (name.includes(mn)) {
        gender = 'male';
        break;
      }
    }
  }

  // Clean friendly display name
  let displayName = voice.name
    .replace(/^Microsoft\s+/i, '')
    .replace(/^Google\s+/i, 'Google ')
    .replace(/^Apple\s+/i, '')
    .replace(/\s+Online\s+\(Natural\)/i, ' (Natural AI)')
    .replace(/\s+Online\s+/i, ' ')
    .replace(/\s+Enhanced\s+/i, ' (HD)')
    .replace(/\s+Premium\s+/i, ' (HD Premium)');

  return {
    displayName,
    tier,
    tierLabelAr,
    tierLabelEn,
    badgeClass,
    gender,
    localeLabel: voice.lang,
  };
}

// ---------------------------------------------------------------------------
// Voice Scoring & High-Fidelity Ranking Engine
// ---------------------------------------------------------------------------
export function scoreVoice(v: SpeechSynthesisVoice, targetBcp47: string): number {
  const name = v.name.toLowerCase();
  const vLang = v.lang.toLowerCase().replace('_', '-');
  const target = targetBcp47.toLowerCase();
  const prefix = target.split('-')[0];

  let score = 0;

  // 1. Language & Dialect Matching
  if (vLang === target) {
    score += 320;
  } else if (vLang.startsWith(prefix)) {
    // Dialect mismatch penalty for English:
    // If target is en-GB (UK), heavily penalize en-US to ensure pure British RP pronunciation
    if (target === 'en-gb' && (vLang.includes('us') || name.includes('united states') || name.includes('us english'))) {
      score -= 500;
    } else if (target === 'en-us' && (vLang.includes('gb') || name.includes('united kingdom') || name.includes('uk english'))) {
      score -= 500;
    } else if (target === 'es-es' && (vLang.includes('mx') || vLang.includes('us') || vLang.includes('419') || name.includes('mexico') || name.includes('latin'))) {
      score -= 350;
    } else if (target === 'fr-fr' && (vLang.includes('ca') || name.includes('canada'))) {
      score -= 350;
    } else if (target === 'ar-eg' && vLang === 'ar-sa') {
      score += 120; // ar-SA is an acceptable Classical Arabic substitute
    } else if (target === 'ar-sa' && vLang === 'ar-eg') {
      score += 120;
    } else {
      score += 50;
    }
  } else {
    return -1000; // Incompatible language
  }

  // 2. Disqualify known robotic / toy / novelty voices
  for (const blacklisted of ROBOTIC_VOICE_BLACKLIST) {
    if (name.includes(blacklisted)) return -1000;
  }

  // 3. Neural & Natural AI Super Boost (Edge Natural AI, Azure Neural, Journey, Wavenet)
  if (name.includes('natural')) {
    score += 260;
  }
  if (name.includes('neural')) {
    score += 260;
  }
  if (name.includes('wavenet') || name.includes('journey') || name.includes('studio')) {
    score += 230;
  }
  if (name.includes('multilingual')) {
    score += 180;
  }

  // 4. Apple Siri Enhanced / Premium High-Definition Voices
  if (name.includes('enhanced') || name.includes('premium')) {
    score += 210;
  }
  if (name.includes('siri')) {
    score += 190;
  }

  // 5. Google Chrome Neural / Cloud Voices
  if (name.includes('google')) {
    score += 170;
  }

  // 6. Online Cloud-synced voices (ultra high bitrate)
  if (name.includes('online')) {
    score += 160;
  }

  // 7. Boost recognized high-pedagogy personas
  for (const pName of PREMIUM_PERSONAS) {
    if (name.includes(pName)) {
      score += 110;
      break;
    }
  }

  // 8. Slight boost if marked as system default
  if (v.default) {
    score += 15;
  }

  return score;
}

/**
 * Find the best available voice for language code.
 */
export function findBestVoice(lang?: string, preferredVoiceName?: string): SpeechSynthesisVoice | null {
  refreshVoices();
  if (cachedVoices.length === 0) return null;

  const { bcp47, langPrefix } = normalizeLanguageCode(lang);

  // 1. Explicit voice name passed in arguments
  if (preferredVoiceName) {
    const found = cachedVoices.find((v) => v.name.toLowerCase() === preferredVoiceName.toLowerCase());
    if (found) return found;
  }

  // 2. Check localStorage saved preference
  const savedVoiceName = getStoredVoicePreference(bcp47) || getStoredVoicePreference(langPrefix);
  if (savedVoiceName) {
    const found = cachedVoices.find((v) => v.name.toLowerCase() === savedVoiceName.toLowerCase());
    if (found) return found;
  }

  // 3. Filter candidates compatible with target language
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
 * Get all available quality voices for a given language sorted by quality rank.
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
   * Automatically falls back to high-ranked alternatives if chosen voice fails.
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
    utterance.rate = Math.max(0.6, Math.min(1.35, options.rate ?? 0.95));
    utterance.pitch = Math.max(0.8, Math.min(1.25, options.pitch ?? 1.0));

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

      // Automatic fallback: If chosen voice errored before starting, retry with alternative voice
      if (!hasStarted && bestVoice && err?.error !== 'canceled' && err?.error !== 'interrupted') {
        console.warn(`[AiVoiceEngine] Voice "${bestVoice.name}" failed to start. Retrying with fallback...`);
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
        voiceName: turn.voiceName,
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
  const [pitch, setPitch] = useState<number>(1.0);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceNameState] = useState<string | null>(null);

  const defaultLangRef = useRef(defaultLang);
  defaultLangRef.current = defaultLang;

  const updateVoiceList = useCallback(() => {
    const list = getAvailableVoicesForLanguage(defaultLangRef.current);
    setAvailableVoices(list);
    const { bcp47, langPrefix } = normalizeLanguageCode(defaultLangRef.current);
    const saved = getStoredVoicePreference(bcp47) || getStoredVoicePreference(langPrefix);
    if (saved && list.some((v) => v.name === saved)) {
      setSelectedVoiceNameState(saved);
    } else if (list.length > 0) {
      setSelectedVoiceNameState(list[0].name);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = aiVoiceEngine.subscribe((playing, text, voice) => {
      setIsPlaying(playing);
      setActiveText(text);
      setActiveVoice(voice);
    });

    ensureVoicesLoaded().then(() => {
      updateVoiceList();
    });

    voiceChangeSubscribers.add(updateVoiceList);

    return () => {
      unsubscribe();
      voiceChangeSubscribers.delete(updateVoiceList);
      aiVoiceEngine.stopAll();
    };
  }, [updateVoiceList]);

  const setSelectedVoiceName = useCallback((name: string | null) => {
    setSelectedVoiceNameState(name);
    if (name) {
      const { bcp47, langPrefix } = normalizeLanguageCode(defaultLangRef.current);
      setStoredVoicePreference(bcp47, name);
      setStoredVoicePreference(langPrefix, name);
    }
  }, []);

  const speak = useCallback(
    (text: string, options?: Partial<SpeakOptions>) => {
      aiVoiceEngine.speak(text, {
        lang: options?.lang || defaultLangRef.current,
        voiceName: options?.voiceName || selectedVoiceName || undefined,
        rate: options?.rate ?? voiceRate,
        pitch: options?.pitch ?? pitch,
        ...options,
      });
    },
    [voiceRate, pitch, selectedVoiceName]
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
    availableVoices,
    selectedVoiceName,
    setSelectedVoiceName,
    voiceRate,
    setVoiceRate,
    pitch,
    setPitch,
    speak,
    stop,
    playDialogue,
    refreshVoiceList: updateVoiceList,
  };
}
