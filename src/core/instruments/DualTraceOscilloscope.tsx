import React, { useState, useEffect, useRef } from 'react';
import { Activity, Radio, Sliders, Play, Pause } from 'lucide-react';

export interface WaveformSignal {
  amplitude: number;    // Peak Volts
  frequency: number;    // Hz
  phaseDeg: number;     // Degrees (0-360)
  type: 'sine' | 'square' | 'triangle';
  dcOffset?: number;    // Volts
}

interface DualTraceOscilloscopeProps {
  channel1Signal: WaveformSignal;
  channel2Signal?: WaveformSignal;
  lang?: 'en' | 'ar';
}

export const DualTraceOscilloscope: React.FC<DualTraceOscilloscopeProps> = ({
  channel1Signal,
  channel2Signal,
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Oscilloscope parameters
  const [displayMode, setDisplayMode] = useState<'CH1' | 'CH2' | 'DUAL' | 'XY'>('DUAL');
  const [timeDivMs, setTimeDivMs] = useState<number>(1); // 1 ms/div
  const [ch1VoltsDiv, setCh1VoltsDiv] = useState<number>(1); // 1 V/div
  const [ch2VoltsDiv, setCh2VoltsDiv] = useState<number>(1); // 1 V/div
  const [ch1OffsetDiv, setCh1OffsetDiv] = useState<number>(0);
  const [ch2OffsetDiv, setCh2OffsetDiv] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Time / Div steps
  const timeDivOptions = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20];
  const voltsDivOptions = [0.1, 0.2, 0.5, 1, 2, 5, 10];

  // Canvas animation loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const render = (now: number) => {
      if (!isRunning) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;

      // 1. Phosphor dark green/black CRT screen background
      ctx.fillStyle = '#03140e';
      ctx.fillRect(0, 0, w, h);

      // 2. Graticule: 10 horizontal divisions, 8 vertical divisions
      const numDivX = 10;
      const numDivY = 8;
      const divW = w / numDivX;
      const divH = h / numDivY;

      ctx.strokeStyle = 'rgba(34, 197, 94, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i <= numDivX; i++) {
        const x = i * divW;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();

        // Subdivisions on center horizontal axis
        const cy = h / 2;
        for (let s = 1; s < 5; s++) {
          const subX = x + (s * divW) / 5;
          if (subX < w) {
            ctx.beginPath();
            ctx.moveTo(subX, cy - 3);
            ctx.lineTo(subX, cy + 3);
            ctx.stroke();
          }
        }
      }

      for (let j = 0; j <= numDivY; j++) {
        const y = j * divH;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        // Subdivisions on center vertical axis
        const cx = w / 2;
        for (let s = 1; s < 5; s++) {
          const subY = y + (s * divH) / 5;
          if (subY < h) {
            ctx.beginPath();
            ctx.moveTo(cx - 3, subY);
            ctx.lineTo(cx + 3, subY);
            ctx.stroke();
          }
        }
      }

      // Center crosshairs
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      const elapsedSec = (now - startTime) / 1000;
      const totalTimeSpanSec = (numDivX * timeDivMs) / 1000;

      const evaluateWaveform = (sig: WaveformSignal, tSec: number): number => {
        const phaseRad = (sig.phaseDeg * Math.PI) / 180;
        const omega = 2 * Math.PI * sig.frequency;
        const angle = omega * tSec + phaseRad;

        let v = 0;
        switch (sig.type) {
          case 'sine':
            v = sig.amplitude * Math.sin(angle);
            break;
          case 'square':
            v = Math.sin(angle) >= 0 ? sig.amplitude : -sig.amplitude;
            break;
          case 'triangle':
            v = (2 * sig.amplitude / Math.PI) * Math.asin(Math.sin(angle));
            break;
        }
        return v + (sig.dcOffset || 0);
      };

      if (displayMode === 'XY' && channel2Signal) {
        // Lissajous Figure Mode
        ctx.strokeStyle = '#22c55e';
        ctx.shadowColor = '#4ade80';
        ctx.shadowBlur = 8;
        ctx.lineWidth = 2;
        ctx.beginPath();

        const samples = 400;
        const periodSec = 1 / Math.min(channel1Signal.frequency, channel2Signal.frequency);

        for (let i = 0; i <= samples; i++) {
          const t = (i / samples) * periodSec * 2;
          const vx = evaluateWaveform(channel1Signal, t);
          const vy = evaluateWaveform(channel2Signal, t);

          const px = w / 2 + (vx / ch1VoltsDiv) * divW;
          const py = h / 2 - (vy / ch2VoltsDiv) * divH;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      } else {
        // Standard Time-Base Oscilloscope Sweep

        // Render Channel 1 (Amber / Gold Beam)
        if (displayMode === 'CH1' || displayMode === 'DUAL') {
          ctx.strokeStyle = '#fbbf24';
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 6;
          ctx.lineWidth = 2;
          ctx.beginPath();

          const ptsCount = w;
          for (let px = 0; px < ptsCount; px++) {
            const frac = px / w;
            const tSim = elapsedSec * 0.05 + frac * totalTimeSpanSec;
            const v = evaluateWaveform(channel1Signal, tSim);
            const vDiv = v / ch1VoltsDiv;
            const py = h / 2 - (vDiv + ch1OffsetDiv) * divH;

            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Render Channel 2 (Cyan / Sky Beam)
        if ((displayMode === 'CH2' || displayMode === 'DUAL') && channel2Signal) {
          ctx.strokeStyle = '#38bdf8';
          ctx.shadowColor = '#0284c7';
          ctx.shadowBlur = 6;
          ctx.lineWidth = 2;
          ctx.beginPath();

          const ptsCount = w;
          for (let px = 0; px < ptsCount; px++) {
            const frac = px / w;
            const tSim = elapsedSec * 0.05 + frac * totalTimeSpanSec;
            const v = evaluateWaveform(channel2Signal, tSim);
            const vDiv = v / ch2VoltsDiv;
            const py = h / 2 - (vDiv + ch2OffsetDiv) * divH;

            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [displayMode, timeDivMs, ch1VoltsDiv, ch2VoltsDiv, ch1OffsetDiv, ch2OffsetDiv, channel1Signal, channel2Signal, isRunning]);

  return (
    <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-5 shadow-2xl text-slate-100 font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Oscilloscope Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              EG-SCOPE 2024D • {isAr ? 'راسم الإشارة ثنائي القناة' : 'Dual-Trace Digital Oscilloscope'}
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                100 MHz
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {isAr ? 'عرض فوري للجهد والتردد وفرق الطور وأشكال ليساجو' : 'Real-time Vpp, frequency, phase shift & Lissajous X-Y analysis'}
            </p>
          </div>
        </div>

        {/* Play/Pause & Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isRunning
                ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30'
                : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? (isAr ? 'إيقاف مؤقت' : 'RUN') : (isAr ? 'تشغيل' : 'STOP')}
          </button>

          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            {(['CH1', 'CH2', 'DUAL', 'XY'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDisplayMode(mode)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  displayMode === mode
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Screen & Live Measurements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        {/* CRT Canvas Screen (Takes 3 columns on large screens) */}
        <div className="lg:col-span-3 w-full h-80 rounded-2xl border-4 border-slate-950 overflow-hidden shadow-inner relative">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* On-screen readout overlay */}
          <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                CH1: {ch1VoltsDiv}V/DIV
              </span>
              {channel2Signal && (
                <span className="text-sky-400 bg-black/60 px-2 py-0.5 rounded border border-sky-500/30">
                  CH2: {ch2VoltsDiv}V/DIV
                </span>
              )}
            </div>
            <span className="text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-500/30">
              TIME: {timeDivMs} ms/DIV
            </span>
          </div>
        </div>

        {/* Control Knobs & Metrics Panel */}
        <div className="space-y-3 flex flex-col justify-between">
          {/* Channel 1 Controls */}
          <div className="p-3 bg-slate-950/80 border border-amber-500/30 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                CH1 (Yellow)
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                f: {channel1Signal.frequency} Hz
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Volts/Div:</span>
              <select
                value={ch1VoltsDiv}
                onChange={e => setCh1VoltsDiv(parseFloat(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-amber-300 font-mono text-xs focus:outline-none"
              >
                {voltsDivOptions.map(v => (
                  <option key={v} value={v}>{v} V</option>
                ))}
              </select>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Y-Offset:</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={ch1OffsetDiv}
                onChange={e => setCh1OffsetDiv(parseFloat(e.target.value))}
                className="w-24 h-1 bg-slate-800 rounded accent-amber-500"
              />
            </div>
            <div className="text-[10px] font-mono text-slate-300 space-y-0.5 pt-1 border-t border-slate-800">
              <div>Vpp: {(channel1Signal.amplitude * 2).toFixed(2)} V</div>
              <div>Vrms: {(channel1Signal.amplitude * 0.707).toFixed(2)} V</div>
            </div>
          </div>

          {/* Channel 2 Controls */}
          {channel2Signal ? (
            <div className="p-3 bg-slate-950/80 border border-sky-500/30 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sky-400 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  CH2 (Cyan)
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  f: {channel2Signal.frequency} Hz
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Volts/Div:</span>
                <select
                  value={ch2VoltsDiv}
                  onChange={e => setCh2VoltsDiv(parseFloat(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-sky-300 font-mono text-xs focus:outline-none"
                >
                  {voltsDivOptions.map(v => (
                    <option key={v} value={v}>{v} V</option>
                  ))}
                </select>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Y-Offset:</span>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.5"
                  value={ch2OffsetDiv}
                  onChange={e => setCh2OffsetDiv(parseFloat(e.target.value))}
                  className="w-24 h-1 bg-slate-800 rounded accent-sky-500"
                />
              </div>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5 pt-1 border-t border-slate-800">
                <div>Phase Δφ: {Math.abs(channel1Signal.phaseDeg - channel2Signal.phaseDeg)}°</div>
                <div>Vpp: {(channel2Signal.amplitude * 2).toFixed(2)} V</div>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-2xl text-center text-xs text-slate-500">
              CH2 Inactive
            </div>
          )}

          {/* Timebase Control */}
          <div className="p-3 bg-slate-950/80 border border-emerald-500/30 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {isAr ? 'قاعدة الزمن' : 'Timebase'}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Time/Div:</span>
              <select
                value={timeDivMs}
                onChange={e => setTimeDivMs(parseFloat(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-emerald-300 font-mono text-xs focus:outline-none"
              >
                {timeDivOptions.map(t => (
                  <option key={t} value={t}>{t} ms</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
