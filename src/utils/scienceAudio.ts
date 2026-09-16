/**
 * Web Audio API Sound Synthesizer for Science Simulation Studios
 * Completely self-contained: zero external audio assets or network requests.
 * Fully safe in SSR and headless test environments (Node.js).
 */

const STORAGE_KEY = 'egbac_science_audio_muted';

let audioCtx: AudioContext | null = null;
let isMutedState: boolean = false;

// Initialize mute state from localStorage if available
if (typeof window !== 'undefined' && window.localStorage) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    isMutedState = saved === 'true';
  } catch {
    isMutedState = false;
  }
}

/**
 * Lazily retrieve or instantiate the browser AudioContext.
 * Re-attempts .resume() if currently suspended due to browser autoplay policy.
 */
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) return null;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {
        // Safe catch if user hasn't interacted yet
      });
    }

    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * Check if science studio audio is currently muted.
 */
export function isAudioMuted(): boolean {
  return isMutedState;
}

/**
 * Set the global audio mute state.
 */
export function setAudioMuted(muted: boolean): void {
  isMutedState = muted;
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(STORAGE_KEY, String(muted));
    } catch {
      // Ignore storage errors
    }
  }
}

/**
 * Toggle global audio mute state and return new status.
 */
export function toggleAudioMuted(): boolean {
  const next = !isMutedState;
  setAudioMuted(next);
  return next;
}

/**
 * Synthesize a fluid droplet sound for burette titrations.
 * Frequency sweep from ~800 Hz to ~1400 Hz with fast exponential decay.
 */
export function playBuretteDrip(pitchMultiplier = 1.0): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const startFreq = 750 * pitchMultiplier;
    const endFreq = 1350 * pitchMultiplier;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.06);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch {
    // Fail silently without disrupting UI
  }
}

/**
 * Synthesize a quantum electron impact click / chirp for the vacuum phototube.
 * Pitch and rate scale with electron kinetic energy and photon intensity.
 */
export function playPhotoelectricChirp(kineticEnergyEv = 1.0): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Higher kinetic energy produces higher pitched, crisper electron click
    const baseFreq = 1800 + Math.min(3000, kineticEnergyEv * 600);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.025);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch {
    // Fail silently
  }
}

/**
 * Synthesize a consonant harmonic chord for gamete fusion in Punnett squares.
 * Two harmonizing sine tones (C5 + E5) with a warm envelope.
 */
export function playGameteFusionSound(): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const notes = [523.25, 659.25]; // C5 and E5 (Major third)

    notes.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  } catch {
    // Fail silently
  }
}

/**
 * Synthesize an uplifting 3-note ascending arpeggio for experiment completion
 * or correct pedigree genotype deductions.
 */
export function playSuccessFanfare(): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const chord = [523.25, 659.25, 783.99]; // C5, E5, G5

    chord.forEach((freq, idx) => {
      const noteTime = now + idx * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.linearRampToValueAtTime(0.15, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.24);
    });
  } catch {
    // Fail silently
  }
}

/**
 * Synthesize a gentle low-frequency buzz for incorrect pedigree deductions.
 */
export function playErrorBuzz(): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.15);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  } catch {
    // Fail silently
  }
}

/**
 * Subtle tactile click sound for UI buttons and stepper controls.
 */
export function playTactileClick(): void {
  if (isMutedState) return;
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.02);
  } catch {
    // Fail silently
  }
}
