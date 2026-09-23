/**
 * Accessibility, Screen Reader & Inclusive Learning Engine for Arabic Learners
 * Provides:
 * 1. KaTeX/LaTeX to Natural Spoken Arabic phonetic transcriber for Screen Readers (VoiceOver/TalkBack/NVDA).
 * 2. Web Audio API synthesized haptic tones for visually impaired students (zero external audio files).
 * 3. Accessibility state persistence and high-contrast / OLED theme management.
 */

export interface AccessibilityOptions {
  lowDataMode: boolean;
  screenReaderMath: boolean;
  soundEffects: boolean;
  oledDarkMode: boolean;
  highLegibilityFont: boolean;
  reducedMotion: boolean;
}

export const A11Y_STORAGE_KEYS = {
  SCREEN_READER_MATH: 'egbac_a11y_screen_reader_math',
  SOUND_EFFECTS: 'egbac_a11y_sound_effects',
  OLED_MODE: 'egbac_a11y_oled_mode',
  HIGH_LEGIBILITY_FONT: 'egbac_a11y_high_legibility_font',
  REDUCED_MOTION: 'egbac_a11y_reduced_motion',
};

/**
 * Converts common LaTeX and KaTeX mathematical strings into clear, pronounceable Arabic text
 * for screen readers (ARIA-label attributes).
 */
export function convertLatexToReadableArabic(latex: string): string {
  if (!latex) return '';

  let text = latex.trim();

  // Remove math environment delimiters
  text = text.replace(/\$\$/g, '').replace(/\$/g, '');

  // Fractions: \frac{a}{b} -> كسر بسطه a ومقامه b
  text = text.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, 'كسر: بسطه $1 ومقامه $2');

  // Square roots: \sqrt{x} -> الجذر التربيعي لـ x
  text = text.replace(/\\sqrt\{([^}]+)\}/g, 'الجذر التربيعي لـ $1');

  // Exponents: x^{2} -> x أس 2, x^2
  text = text.replace(/\^\{2\}/g, ' تربيع');
  text = text.replace(/\^2\b/g, ' تربيع');
  text = text.replace(/\^\{3\}/g, ' تكعيب');
  text = text.replace(/\^3\b/g, ' تكعيب');
  text = text.replace(/\^\{([^}]+)\}/g, ' أس $1');
  text = text.replace(/\^([0-9a-zA-Z])/g, ' أس $1');

  // Subscripts: x_{1} -> x دليل 1
  text = text.replace(/_\{([^}]+)\}/g, ' دليل $1');
  text = text.replace(/_([0-9a-zA-Z])/g, ' دليل $1');

  // Integrals & Summations
  text = text.replace(/\\int/g, 'تكامل ');
  text = text.replace(/\\sum/g, 'مجموع ');
  text = text.replace(/\\lim/g, 'نهاية عندما ');

  // Common Greek symbols used in Secondary 3 physics/math
  text = text.replace(/\\theta/g, 'الزاوية ثيتا');
  text = text.replace(/\\alpha/g, 'ألفا');
  text = text.replace(/\\beta/g, 'بيتا');
  text = text.replace(/\\gamma/g, 'جاما');
  text = text.replace(/\\lambda/g, 'الطول الموجي لامدا');
  text = text.replace(/\\mu/g, 'معامل الاحتكاك ميو');
  text = text.replace(/\\omega/g, 'أوميجا');
  text = text.replace(/\\pi/g, 'النسبة التقريبية باي');
  text = text.replace(/\\Delta/g, 'التغير دلتا');
  text = text.replace(/\\phi/g, 'الفيض فاي');

  // Operators
  text = text.replace(/\\times/g, ' مضروباً في ');
  text = text.replace(/\\div/g, ' مقسوماً على ');
  text = text.replace(/\\pm/g, ' زائد أو ناقص ');
  text = text.replace(/\\le/g, ' أقل من أو يساوي ');
  text = text.replace(/\\ge/g, ' أكبر من أو يساوي ');
  text = text.replace(/\\neq/g, ' لا يساوي ');
  text = text.replace(/\\approx/g, ' يساوي تقريباً ');
  text = text.replace(/\\cdot/g, ' ضرب ');
  text = text.replace(/\\infty/g, 'ما لا نهاية');

  // Trigonometric functions
  text = text.replace(/\\sin/g, 'جا ');
  text = text.replace(/\\cos/g, 'جتا ');
  text = text.replace(/\\tan/g, 'ظا ');
  text = text.replace(/\\sec/g, 'قا ');
  text = text.replace(/\\csc/g, 'قتا ');
  text = text.replace(/\\cot/g, 'ظتا ');

  // Clean remaining backslashes and redundant braces
  text = text.replace(/\\[a-zA-Z]+/g, ' ');
  text = text.replace(/[{}]/g, '');
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Web Audio API Acoustic Cue Synthesizer
 * Produces crisp, non-fatiguing auditory cues without any network payload.
 */
class WebAudioCueEngine {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playSuccessTone(): void {
    if (!isSoundEffectsEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now); // A4
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.16); // A5

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.36);
  }

  playErrorTone(): void {
    if (!isSoundEffectsEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.linearRampToValueAtTime(170, now + 0.18);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.29);
  }

  playClickTone(): void {
    if (!isSoundEffectsEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }
}

export const audioCues = new WebAudioCueEngine();

/**
 * Checks if sound effects are enabled in user settings.
 */
export function isSoundEffectsEnabled(): boolean {
  if (typeof localStorage === 'undefined') return true;
  const val = localStorage.getItem(A11Y_STORAGE_KEYS.SOUND_EFFECTS);
  return val === null ? true : val === 'true';
}

/**
 * Checks if screen reader math expansion is enabled.
 */
export function isScreenReaderMathEnabled(): boolean {
  if (typeof localStorage === 'undefined') return true;
  const val = localStorage.getItem(A11Y_STORAGE_KEYS.SCREEN_READER_MATH);
  return val === null ? true : val === 'true';
}

/**
 * Applies OLED and High-Legibility classes to document root.
 */
export function applyAccessibilityDOMAttributes(): void {
  if (typeof document === 'undefined') return;

  const isOled = localStorage.getItem(A11Y_STORAGE_KEYS.OLED_MODE) === 'true';
  const isHighLegibility = localStorage.getItem(A11Y_STORAGE_KEYS.HIGH_LEGIBILITY_FONT) === 'true';
  const isReducedMotion = localStorage.getItem(A11Y_STORAGE_KEYS.REDUCED_MOTION) === 'true';

  document.documentElement.setAttribute('data-oled', isOled ? 'true' : 'false');
  document.documentElement.setAttribute('data-high-legibility-font', isHighLegibility ? 'true' : 'false');
  document.documentElement.setAttribute('data-reduced-motion', isReducedMotion ? 'true' : 'false');
}
