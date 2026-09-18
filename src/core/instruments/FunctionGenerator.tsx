import React, { useState, useEffect, useRef } from 'react';
import {
  Waves,
  Zap,
  Sliders,
  X,
  Activity,
  ArrowRightLeft,
} from 'lucide-react';
import type { WaveformSignal } from './DualTraceOscilloscope';

export type WaveformType = 'sine' | 'square' | 'triangle' | 'sawtooth' | 'pulse' | 'noise';

interface FunctionGeneratorProps {
  lang?: 'en' | 'ar';
  onSignalOutput?: (signal: WaveformSignal) => void;
  onClose?: () => void;
  initialFrequency?: number;
  initialAmplitude?: number;
  initialWaveform?: WaveformType;
}

export const FunctionGenerator: React.FC<FunctionGeneratorProps> = ({
  lang = 'en',
  onSignalOutput,
  onClose,
  initialFrequency = 1000,
  initialAmplitude = 5,
  initialWaveform = 'sine',
}) => {
  const isAr = lang === 'ar';
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generator parameters
  const [waveform, setWaveform] = useState<WaveformType>(initialWaveform);
  const [frequency, setFrequency] = useState<number>(initialFrequency); // Hz
  const [amplitude, setAmplitude] = useState<number>(initialAmplitude); // Vpp
  const [dcOffset, setDcOffset] = useState<number>(0); // Volts
  const [dutyCycle, setDutyCycle] = useState<number>(50); // % (for square/pulse)
  const [phaseDeg, setPhaseDeg] = useState<number>(0); // Degrees
  const [isOutputActive, setIsOutputActive] = useState<boolean>(true);

  // Sweep parameters
  const [isSweepActive, setIsSweepActive] = useState<boolean>(false);
  const [sweepStartHz, setSweepStartHz] = useState<number>(100);
  const [sweepStopHz, setSweepStopHz] = useState<number>(10000);
  const [sweepTimeSec, setSweepTimeSec] = useState<number>(1.5);
  const [sweepMode, setSweepMode] = useState<'linear' | 'log'>('linear');

  // Decade frequency multipliers
  const decadeMultipliers = [
    { label: 'x1 Hz', mult: 1 },
    { label: 'x10 Hz', mult: 10 },
    { label: 'x100 Hz', mult: 100 },
    { label: 'x1 kHz', mult: 1000 },
    { label: 'x10 kHz', mult: 10000 },
    { label: 'x100 kHz', mult: 100000 },
    { label: 'x1 MHz', mult: 1000000 },
  ];

  // Notify parent consumer of live signal updates
  useEffect(() => {
    if (onSignalOutput) {
      onSignalOutput({
        amplitude: isOutputActive ? amplitude : 0,
        frequency: isOutputActive ? frequency : 0,
        phaseDeg,
        type: waveform === 'square' || waveform === 'triangle' ? waveform : 'sine',
        dcOffset: isOutputActive ? dcOffset : 0,
      });
    }
  }, [waveform, frequency, amplitude, dcOffset, dutyCycle, phaseDeg, isOutputActive, onSignalOutput]);

  // Sweep Animation Loop
  useEffect(() => {
    if (!isSweepActive || !isOutputActive) return;

    let animId: number;
    const startTime = performance.now();

    const updateSweep = (now: number) => {
      const elapsedSec = ((now - startTime) / 1000) % sweepTimeSec;
      const progress = elapsedSec / sweepTimeSec;

      let currentSweepFreq: number;
      if (sweepMode === 'log') {
        const logStart = Math.log10(Math.max(1, sweepStartHz));
        const logStop = Math.log10(Math.max(1, sweepStopHz));
        currentSweepFreq = Math.pow(10, logStart + progress * (logStop - logStart));
      } else {
        currentSweepFreq = sweepStartHz + progress * (sweepStopHz - sweepStartHz);
      }

      setFrequency(Math.round(currentSweepFreq));
      animId = requestAnimationFrame(updateSweep);
    };

    animId = requestAnimationFrame(updateSweep);
    return () => cancelAnimationFrame(animId);
  }, [isSweepActive, isOutputActive, sweepStartHz, sweepStopHz, sweepTimeSec, sweepMode]);

  // Waveform Preview Canvas Render Loop
  useEffect(() => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = (time: number) => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        animId = requestAnimationFrame(render);
        return;
      }
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const centerY = h / 2 - (dcOffset / 10) * (h / 2);

      // Background
      ctx.fillStyle = '#050b14';
      ctx.fillRect(0, 0, w, h);

      // Grid Graticule
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 1;
      const numX = 8;
      const numY = 4;
      for (let i = 0; i <= numX; i++) {
        const x = (i * w) / numX;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let j = 0; j <= numY; j++) {
        const y = (j * h) / numY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!isOutputActive) {
        // Output OFF indicator
        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('OUTPUT DISABLED (OFF)', w / 2, h / 2 + 4);
        animId = requestAnimationFrame(render);
        return;
      }

      // Draw synthesized waveform
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 8;
      ctx.beginPath();

      const numPoints = 200;
      const numCycles = 3;
      const tShift = (time * 0.003 * (frequency > 5000 ? 5 : frequency / 100)) % (2 * Math.PI);
      const ampPx = Math.min(h * 0.42, (amplitude / 10) * (h * 0.4));

      for (let i = 0; i <= numPoints; i++) {
        const x = (i * w) / numPoints;
        const theta = (i / numPoints) * numCycles * 2 * Math.PI + (phaseDeg * Math.PI) / 180 + tShift;

        let yVal = 0;
        switch (waveform) {
          case 'sine':
            yVal = Math.sin(theta);
            break;
          case 'square':
            yVal = (theta % (2 * Math.PI)) < (dutyCycle / 100) * 2 * Math.PI ? 1 : -1;
            break;
          case 'triangle':
            yVal = (2 / Math.PI) * Math.asin(Math.sin(theta));
            break;
          case 'sawtooth':
            yVal = 2 * ((theta / (2 * Math.PI)) - Math.floor(0.5 + theta / (2 * Math.PI)));
            break;
          case 'pulse':
            yVal = (theta % (2 * Math.PI)) < 0.25 * (dutyCycle / 50) ? 1 : -1;
            break;
          case 'noise':
            yVal = (Math.random() - 0.5) * 2;
            break;
        }

        const y = centerY - yVal * ampPx;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [waveform, frequency, amplitude, dcOffset, dutyCycle, phaseDeg, isOutputActive]);

  const waveforms: { id: WaveformType; labelEn: string; labelAr: string; iconText: string }[] = [
    { id: 'sine', labelEn: 'Sine', labelAr: 'جيبي (Sin)', iconText: '∿' },
    { id: 'square', labelEn: 'Square', labelAr: 'مربعي (Square)', iconText: '⊓' },
    { id: 'triangle', labelEn: 'Triangle', labelAr: 'مثلثي (Tri)', iconText: '△' },
    { id: 'sawtooth', labelEn: 'Sawtooth', labelAr: 'سن منشار', iconText: '⋀' },
    { id: 'pulse', labelEn: 'Pulse', labelAr: 'نبضي (Pulse)', iconText: '⊓' },
    { id: 'noise', labelEn: 'Noise', labelAr: 'ضوضاء بيضاء', iconText: '≋' },
  ];

  return (
    <div
      className="w-full bg-slate-900/98 border-2 border-cyan-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl text-slate-100 overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Instrument Bezel Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-xl border border-cyan-500/30 shrink-0">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-100 flex items-center gap-2 truncate">
              <span>EG-SIG 3000 DDS • {isAr ? 'مولد الإشارات الرقمي الترددي' : 'Digital Synthesis Function Generator'}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold shrink-0">
                20 MHz DDS
              </span>
            </h4>
            <p className="text-xs text-slate-400 truncate">
              {isAr ? 'توليف دقيق للموجات الجيبية والمربعة والمثلثة ومسح الترددات' : 'Precision Sine/Square/Ramp synthesis, frequency sweep & oscilloscope coupling'}
            </p>
          </div>
        </div>

        {/* Master Controls: Output ON/OFF & Close */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOutputActive(!isOutputActive)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
              isOutputActive
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400 shadow-emerald-600/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${isOutputActive ? 'text-emerald-200 fill-emerald-200' : 'text-slate-500'}`} />
            <span>{isOutputActive ? (isAr ? 'المخرج: مفعّل (LIVE)' : 'OUTPUT: ON') : (isAr ? 'المخرج: متوقف' : 'OUTPUT: OFF')}</span>
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all cursor-pointer"
              title={isAr ? 'إغلاق المولد' : 'Close Generator'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Workstation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-stretch min-w-0">
        {/* Left / Center Display Screen (DDS Monitor) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-xs">
            <span className="font-mono text-cyan-400 font-bold flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              <span>DDS REAL-TIME WAVEFORM MONITOR</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {frequency >= 1000 ? `${(frequency / 1000).toFixed(2)} kHz` : `${frequency} Hz`}
            </span>
          </div>

          {/* CRT Waveform Canvas */}
          <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border-2 border-slate-800 relative bg-[#050b14] shadow-md">
            <canvas ref={previewCanvasRef} className="w-full h-full block" />
            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-xs">
              <span className="text-cyan-300 font-bold uppercase">{waveform}</span>
              <span>Vpp: <strong className="text-emerald-400">{amplitude.toFixed(1)} V</strong></span>
              <span>Vrms: <strong className="text-amber-400">{(amplitude * 0.707).toFixed(2)} V</strong></span>
              <span>Offset: <strong className="text-slate-300">{dcOffset >= 0 ? `+${dcOffset}` : dcOffset} V</strong></span>
            </div>
          </div>

          {/* Waveform Selector Pills */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-1">
            {waveforms.map((w) => {
              const isSelected = waveform === w.id;
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setWaveform(w.id)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30 scale-102'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="text-base leading-none">{w.iconText}</span>
                  <span className="text-[10px] truncate max-w-full">{isAr ? w.labelAr : w.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Controls Panel */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
          {/* Frequency Tuning Section */}
          <div className="space-y-2 pb-3 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isAr ? 'التردد المستهدف (Frequency):' : 'Synthesized Frequency:'}</span>
              </span>
              <span className="font-mono text-sm font-black text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded-lg border border-cyan-800">
                {frequency.toLocaleString()} Hz
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="100000"
                step="1"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Decade Quick Jump Keys */}
            <div className="flex flex-wrap gap-1 pt-1">
              {decadeMultipliers.map((d) => (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => setFrequency(d.mult)}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold border transition-all cursor-pointer ${
                    frequency === d.mult
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-xs'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amplitude & Offset Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800">
            {/* Amplitude Vpp */}
            <div className="space-y-1.5" dir="ltr">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">{isAr ? 'السعة Vpp:' : 'Amplitude (Vpp):'}</span>
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  {amplitude.toFixed(1)} V
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="20"
                step="0.1"
                value={amplitude}
                onChange={(e) => setAmplitude(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-emerald-400 cursor-pointer"
              />
            </div>

            {/* DC Offset */}
            <div className="space-y-1.5" dir="ltr">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">{isAr ? 'إزاحة DC:' : 'DC Offset:'}</span>
                <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  {dcOffset >= 0 ? `+${dcOffset.toFixed(1)}` : dcOffset.toFixed(1)} V
                </span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.2"
                value={dcOffset}
                onChange={(e) => setDcOffset(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-amber-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Duty Cycle & Phase Shift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800">
            {/* Duty Cycle */}
            <div className="space-y-1.5" dir="ltr">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">{isAr ? 'دورة التشغيل:' : 'Duty Cycle:'}</span>
                <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                  {dutyCycle}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="1"
                value={dutyCycle}
                onChange={(e) => setDutyCycle(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-sky-400 cursor-pointer"
              />
            </div>

            {/* Phase Shift */}
            <div className="space-y-1.5" dir="ltr">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">{isAr ? 'فرق الطور φ:' : 'Phase Shift (φ):'}</span>
                <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
                  {phaseDeg}°
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="15"
                value={phaseDeg}
                onChange={(e) => setPhaseDeg(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-indigo-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Frequency Sweep Mode Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSweepActive(!isSweepActive)}
                className={`px-3 py-1 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSweepActive
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>{isAr ? 'مسح التردد (SWEEP)' : 'SWEEP MODE'}</span>
              </button>

              {isSweepActive && (
                <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setSweepMode('linear')}
                    className={`px-2 py-0.5 rounded ${sweepMode === 'linear' ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400'}`}
                  >
                    LIN
                  </button>
                  <button
                    type="button"
                    onClick={() => setSweepMode('log')}
                    className={`px-2 py-0.5 rounded ${sweepMode === 'log' ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400'}`}
                  >
                    LOG
                  </button>
                </div>
              )}
            </div>

            {isSweepActive && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-indigo-300">
                  {sweepStartHz} Hz ➜ {sweepStopHz} Hz ({sweepTimeSec}s)
                </span>
                <div className="flex items-center gap-1 text-[10px] font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      setSweepStartHz(20);
                      setSweepStopHz(20000);
                      setSweepTimeSec(2.0);
                    }}
                    className="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  >
                    Audio
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSweepStartHz(100);
                      setSweepStopHz(100000);
                      setSweepTimeSec(1.0);
                    }}
                    className="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  >
                    RF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
