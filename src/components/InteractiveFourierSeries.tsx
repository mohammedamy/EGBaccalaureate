import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import {
  Activity,
  Volume2,
  VolumeX,
  Sliders,
  FileText,
} from 'lucide-react';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { loadLabReportDraft, saveLabReportDraft } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type WavePreset = 'square' | 'sawtooth' | 'triangle' | 'rectified';

interface WaveformDefinition {
  id: WavePreset;
  nameAr: string;
  nameEn: string;
  latex: string;
  harmonicCoeff: (n: number) => { isSine: boolean; coeff: number };
  descriptionAr: string;
  descriptionEn: string;
}

const WAVE_PRESETS: WaveformDefinition[] = [
  {
    id: 'square',
    nameAr: 'موجة مربعة (تناغمات فردية فقط)',
    nameEn: 'Square Wave (Odd Harmonics)',
    latex: 'f(t) = \\frac{4}{\\pi} \\sum_{k=1,3,5\\dots}^N \\frac{\\sin(k\\omega t)}{k}',
    harmonicCoeff: (n) => {
      if (n % 2 === 0) return { isSine: true, coeff: 0 };
      return { isSine: true, coeff: (4 / Math.PI) / n };
    },
    descriptionAr: 'تتكون من التوافقات الفردية فقط، بسعات تتناقص بمقدار 1/n. توضح ظاهرة غيبس (Gibbs) عند نقاط عدم الاتصال.',
    descriptionEn: 'Odd harmonics with 1/n amplitude decay. Exhibits Gibbs phenomenon overshoot near jump edges.',
  },
  {
    id: 'sawtooth',
    nameAr: 'موجة سن المنشار (كل التوافقات)',
    nameEn: 'Sawtooth Wave (All Harmonics)',
    latex: 'f(t) = \\frac{2}{\\pi} \\sum_{n=1}^N \\frac{(-1)^{n+1} \\sin(n\\omega t)}{n}',
    harmonicCoeff: (n) => {
      const sign = n % 2 === 1 ? 1 : -1;
      return { isSine: true, coeff: ((2 / Math.PI) / n) * sign };
    },
    descriptionAr: 'تحتوي على التوافقات الفردية والزوجية معاً، ولها طابع صوتي غني جداً في الآلات الوترية والسنثسايزر.',
    descriptionEn: 'Contains both even and odd harmonics. Produces rich, bright timbre in bowed strings and synths.',
  },
  {
    id: 'triangle',
    nameAr: 'موجة مثلثية (تناقص سريع 1/n²)',
    nameEn: 'Triangle Wave (1/n² Rapid Decay)',
    latex: 'f(t) = \\frac{8}{\\pi^2} \\sum_{k=1,3,5\\dots}^N \\frac{(-1)^{(k-1)/2} \\sin(k\\omega t)}{k^2}',
    harmonicCoeff: (n) => {
      if (n % 2 === 0) return { isSine: true, coeff: 0 };
      const m = (n - 1) / 2;
      const sign = m % 2 === 0 ? 1 : -1;
      return { isSine: true, coeff: ((8 / (Math.PI * Math.PI)) / (n * n)) * sign };
    },
    descriptionAr: 'تتناقص سعات التوافقات بسرعة بالغة مع مربع الرتبة، مما يجعل التقارب سلساً وخالياً من طفرات غيبس.',
    descriptionEn: 'Coefficients decay rapidly as 1/n², yielding smooth convergence without noticeable overshoot.',
  },
  {
    id: 'rectified',
    nameAr: 'موجة جيبية مقومة كاملة (دوال جيب التمام)',
    nameEn: 'Full-Wave Rectified Sine (Cosine Series)',
    latex: 'f(t) = \\frac{2}{\\pi} - \\frac{4}{\\pi} \\sum_{n=1}^N \\frac{\\cos(2n\\omega t)}{4n^2 - 1}',
    harmonicCoeff: (n) => {
      // Even harmonics of cos
      const denom = 4 * n * n - 1;
      return { isSine: false, coeff: -(4 / Math.PI) / denom };
    },
    descriptionAr: 'ناتج تقويم التيار المتردد في دوائر القنطرة الكهربائية، تمثل بمتسلسلة جيب التمام الزوجية.',
    descriptionEn: 'Electrical AC bridge rectification output modeled purely with even cosine harmonics.',
  },
];

export const InteractiveFourierSeries: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeWaveId, setActiveWaveId] = useState<WavePreset>('square');
  const [harmonicN, setHarmonicN] = useState<number>(7);
  const [baseFreqHz, setBaseFreqHz] = useState<number>(220); // 220 Hz (A3 musical pitch)
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const currentWave = WAVE_PRESETS.find((w) => w.id === activeWaveId) || WAVE_PRESETS[0];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const waveHistoryRef = useRef<number[]>([]);

  // Web Audio Context Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Audio synthesis using PeriodicWave
  useEffect(() => {
    if (!isPlayingAudio) {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch {
          // ignore
        }
        oscNodeRef.current = null;
      }
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const real = new Float32Array(harmonicN + 1);
      const imag = new Float32Array(harmonicN + 1);

      for (let n = 1; n <= harmonicN; n++) {
        const { isSine, coeff } = currentWave.harmonicCoeff(n);
        if (isSine) {
          imag[n] = coeff;
        } else {
          real[n] = coeff;
        }
      }

      const wave = ctx.createPeriodicWave(real, imag, { disableNormalization: false });
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      osc.setPeriodicWave(wave);
      osc.frequency.setValueAtTime(baseFreqHz, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscNodeRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      setIsPlayingAudio(false);
    }

    return () => {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch {
          // ignore
        }
        oscNodeRef.current = null;
      }
    };
  }, [isPlayingAudio, activeWaveId, harmonicN, baseFreqHz, currentWave]);

  // Animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      timeRef.current += dt * 2.2;

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const width = canvas.width;
          const height = canvas.height;

          // Clear
          ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#080c14';
          ctx.fillRect(0, 0, width, height);

          const epicycleCenterX = width * 0.22;
          const epicycleCenterY = height * 0.5;
          const scale = height * 0.28;

          // Calculate current wave point by summing Fourier harmonics
          let currentX = epicycleCenterX;
          let currentY = epicycleCenterY;

          // Draw epicycles (rotating circles)
          for (let n = 1; n <= harmonicN; n++) {
            const { isSine, coeff } = currentWave.harmonicCoeff(n);
            if (Math.abs(coeff) < 0.0001) continue;

            const radius = Math.abs(coeff) * scale;
            const prevX = currentX;
            const prevY = currentY;

            const angle = n * timeRef.current;
            if (isSine) {
              currentX += radius * Math.cos(angle);
              currentY += radius * Math.sin(angle);
            } else {
              currentX += radius * Math.sin(angle);
              currentY += radius * Math.cos(angle);
            }

            // Draw circle outline
            ctx.strokeStyle = isLight ? 'rgba(99, 102, 241, 0.25)' : 'rgba(129, 140, 248, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(prevX, prevY, radius, 0, 2 * Math.PI);
            ctx.stroke();

            // Draw radius vector
            ctx.strokeStyle = isLight ? '#4f46e5' : '#818cf8';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
          }

          // Save current output Y into history trace
          waveHistoryRef.current.unshift(currentY);
          if (waveHistoryRef.current.length > 500) {
            waveHistoryRef.current.pop();
          }

          // Horizontal connector line from epicycle tip to wave
          const waveStartX = width * 0.44;
          ctx.strokeStyle = isLight ? 'rgba(239, 68, 68, 0.4)' : 'rgba(248, 113, 113, 0.35)';
          ctx.setLineDash([3, 3]);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(currentX, currentY);
          ctx.lineTo(waveStartX, currentY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Center baseline on right waveform plot
          ctx.strokeStyle = isLight ? '#cbd5e1' : '#1e293b';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(waveStartX, epicycleCenterY);
          ctx.lineTo(width - 20, epicycleCenterY);
          ctx.stroke();

          // Draw scrolling synthesized waveform
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          waveHistoryRef.current.forEach((valY, i) => {
            const x = waveStartX + i * 1.5;
            if (x > width - 20) return;
            if (i === 0) ctx.moveTo(x, valY);
            else ctx.lineTo(x, valY);
          });
          ctx.stroke();

          // Tip marker point
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(currentX, currentY, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [harmonicN, currentWave, isLight, isContrast]);

  // Spectrum data for bar chart
  const spectrumData = useMemo(() => {
    const list: { n: number; amp: number }[] = [];
    for (let n = 1; n <= Math.min(15, harmonicN); n++) {
      const { coeff } = currentWave.harmonicCoeff(n);
      list.push({ n, amp: Math.abs(coeff) });
    }
    return list;
  }, [harmonicN, currentWave]);

  const handleOpenReportModal = () => {
    const draft = loadLabReportDraft('math-exp-8');
    if (isArabic) {
      draft.hypothesisAr = `تحقق نظرية فورييه في توليف ${currentWave.nameAr}: عند تجميع ${harmonicN} توافقاً تتقارب الدالة بدقة نحو شكل الموجه المستهدف مع ظهور تذبذب غيبس.`;
    } else {
      draft.hypothesisEn = `Fourier series synthesis of ${currentWave.nameEn}: superposing ${harmonicN} harmonics reconstructs the periodic wave with Gibbs overshoot.`;
    }

    draft.dataTableRows = spectrumData.map((s) => ({
      harmonic_n: isArabic ? `التوافق ${s.n}` : `Harmonic ${s.n}`,
      added_freq: (s.n * baseFreqHz).toFixed(0),
      peak_amplitude: s.amp.toFixed(4),
      overshoot_pct: `${(s.amp * 100).toFixed(1)}%`,
      timbre_quality: isArabic ? 'نغمة مركبة توافقياً' : 'Harmonic Timbre',
    }));

    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isFullscreen ? 'h-full overflow-y-auto' : ''
      } ${
        isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-indigo-400 text-indigo-400'
                : 'bg-gradient-to-br from-indigo-500 to-rose-600 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isArabic ? 'متسلسلات فورييه والتحليل التوافقي للدوال الدورية' : 'Fourier Series & Harmonic Waveform Synthesis'}
              </h3>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isLight
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Harmonic Analysis
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
              {isArabic
                ? 'توليد الموجات بجمع الترددات التوافقية (Epicycles) ومحاكاة النبرة الصوتية اللحظية'
                : 'Interactive epicycle phasor tracing, audio frequency spectrum, and Gibbs phenomenon'}
            </p>
          </div>
        </div>

        {/* Audio Toggle & Report */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
              isPlayingAudio
                ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-950/40'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40'
            }`}
          >
            {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isPlayingAudio ? (isArabic ? 'كتم الصوت' : 'Mute Audio') : (isArabic ? 'استماع للنغمة' : 'Play Sound')}</span>
          </button>

          <button
            onClick={handleOpenReportModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تقرير المعمل' : 'Lab Report'}</span>
          </button>
        </div>
      </div>

      {/* Waveform Selector */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? 'اختر شكل الموجة:' : 'Select Target Wave:'}
        </span>
        {WAVE_PRESETS.map((w) => {
          const isSel = activeWaveId === w.id;
          return (
            <button
              key={w.id}
              onClick={() => {
                setActiveWaveId(w.id);
                waveHistoryRef.current = [];
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isSel
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : isLight
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {isArabic ? w.nameAr : w.nameEn}
            </button>
          );
        })}
      </div>

      {/* Main Canvas + Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
            <canvas
              ref={canvasRef}
              width={760}
              height={400}
              className="w-full h-auto aspect-[19/10] block"
            />
            {/* Visual Indicators */}
            <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="font-bold">{isArabic ? 'دوائر فورييه (Epicycles)' : 'Phasor Epicycles'}</span>
              <span className="text-slate-500">|</span>
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="font-bold">{isArabic ? 'الموجة المركبة الناتجة' : 'Synthesized Output'}</span>
            </div>
          </div>

          {/* Formula Banner */}
          <div
            className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
              isLight ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950' : 'bg-indigo-950/30 border-indigo-900/40 text-indigo-200'
            }`}
          >
            <div>
              <span className="font-bold block text-sm">{isArabic ? currentWave.nameAr : currentWave.nameEn}</span>
              <span className="text-[11px] opacity-80">{isArabic ? currentWave.descriptionAr : currentWave.descriptionEn}</span>
            </div>
            <div className="font-mono font-bold shrink-0 text-sm">
              <MathRenderer math={currentWave.latex} />
            </div>
          </div>
        </div>

        {/* Right Panel: Spectrum & Sliders */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Frequency Spectrum Card */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic ? 'طيف الترددات (Amplitude Spectrum)' : 'Harmonic Frequency Spectrum'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                N = {harmonicN}
              </span>
            </div>

            {/* Bar chart */}
            <div className="h-32 flex items-end gap-1.5 pt-2 px-1">
              {spectrumData.map((item) => {
                const maxAmp = Math.max(...spectrumData.map((d) => d.amp), 1);
                const barHeight = Math.max(4, (item.amp / maxAmp) * 100);
                return (
                  <div key={item.n} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full relative flex items-end justify-center h-24">
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-indigo-600 to-rose-500 transition-all duration-300 group-hover:brightness-125"
                        style={{ height: `${barHeight}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">n={item.n}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sliders */}
          <div
            className={`p-4 rounded-xl border space-y-3.5 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <h4 className={`font-bold flex items-center gap-1.5 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'معاملات التوليف التوافقي' : 'Synthesis Parameters'}</span>
            </h4>

            {/* Harmonics slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'عدد التوافقات (Harmonics N):' : 'Number of Harmonics (N):'}
                </span>
                <span className="font-mono font-bold text-indigo-500">{harmonicN}</span>
              </div>
              <input
                type="range"
                min="1"
                max="35"
                step="1"
                value={harmonicN}
                onChange={(e) => setHarmonicN(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Fundamental Pitch Frequency */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'}>
                  {isArabic ? 'التردد الأساسي (Fundamental Pitch):' : 'Fundamental Frequency:'}
                </span>
                <span className="font-mono font-bold text-rose-500">{baseFreqHz} Hz</span>
              </div>
              <input
                type="range"
                min="110"
                max="440"
                step="10"
                value={baseFreqHz}
                onChange={(e) => setBaseFreqHz(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

            {/* Gibbs Phenomenon Note */}
            <div className={`p-3 rounded-lg border text-[11px] leading-relaxed ${
              isLight ? 'bg-rose-100/70 border-rose-300 text-rose-950 font-medium' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
            }`}>
              <span className="font-bold block mb-1">
                {isArabic ? 'ظاهرة غيبس (Gibbs Phenomenon):' : 'Gibbs Phenomenon Insight:'}
              </span>
              <span>
                {isArabic
                  ? 'عند تمثيل الدوال غير المتصلة بمتسلسلة فورييه، يظهر تجاوز بمقدار ~8.95% عند حواف القفزات مهما ازداد عدد التوافقات N.'
                  : 'Near step discontinuities, partial sums overshoot the true function value by ~8.95% regardless of how large N becomes.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isReportModalOpen && (
        <LabReportGeneratorModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          initialExperimentId="math-exp-8"
          lang={lang}
          theme={theme}
        />
      )}
    </div>
  );
};
