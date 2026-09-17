import React, { useState, useEffect, useRef } from 'react';
import { Activity, Radio, Sliders, Play, Pause, Columns, LayoutGrid, Maximize2, Minimize2 } from 'lucide-react';

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

  // Layout mode & Full-width Expand
  const [layoutMode, setLayoutMode] = useState<'side-by-side' | 'stacked'>('side-by-side');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Close full-width on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

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
      if (rect.width === 0 || rect.height === 0) {
        animId = requestAnimationFrame(render);
        return;
      }
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

          const stepPx = 2;
          for (let px = 0; px <= w; px += stepPx) {
            const tDiv = (px / divW);
            const tSec = (tDiv * timeDivMs) / 1000 + elapsedSec;
            const v = evaluateWaveform(channel1Signal, tSec);

            // Convert Volts to Vertical position (0 V = screen center)
            const vDiv = v / ch1VoltsDiv;
            const py = h / 2 - (vDiv + ch1OffsetDiv) * divH;

            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Render Channel 2 (Cyan Beam)
        if ((displayMode === 'CH2' || displayMode === 'DUAL') && channel2Signal) {
          ctx.strokeStyle = '#38bdf8';
          ctx.shadowColor = '#0284c7';
          ctx.shadowBlur = 6;
          ctx.lineWidth = 2;
          ctx.beginPath();

          const stepPx = 2;
          for (let px = 0; px <= w; px += stepPx) {
            const tDiv = (px / divW);
            const tSec = (tDiv * timeDivMs) / 1000 + elapsedSec;
            const v = evaluateWaveform(channel2Signal, tSec);

            // Convert Volts to Vertical position
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
  }, [displayMode, timeDivMs, ch1VoltsDiv, ch2VoltsDiv, ch1OffsetDiv, ch2OffsetDiv, channel1Signal, channel2Signal, isRunning, layoutMode, isExpanded]);

  // Sub-renderers for control cards to avoid duplication between side-by-side & stacked
  const renderCrtScreen = (heightClass = "h-72 sm:h-80 md:h-[400px]") => (
    <div className={`w-full ${heightClass} rounded-2xl border-4 border-slate-950 overflow-hidden shadow-2xl relative bg-[#03140e] shrink-0`}>
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* On-screen readout overlay */}
      <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono pointer-events-none select-none">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-amber-400 bg-black/80 px-2 py-0.5 rounded-md border border-amber-500/30 backdrop-blur-sm shadow-xs">
            CH1: {ch1VoltsDiv} V/DIV
          </span>
          {channel2Signal && (
            <span className="text-sky-400 bg-black/80 px-2 py-0.5 rounded-md border border-sky-500/30 backdrop-blur-sm shadow-xs">
              CH2: {ch2VoltsDiv} V/DIV
            </span>
          )}
        </div>
        <span className="text-emerald-400 bg-black/80 px-2 py-0.5 rounded-md border border-emerald-500/30 backdrop-blur-sm shadow-xs">
          TIME: {timeDivMs} ms/DIV
        </span>
      </div>
    </div>
  );

  const renderCh1Card = () => (
    <div className="p-3 bg-slate-950/80 border border-amber-500/30 rounded-2xl space-y-2 flex flex-col justify-between min-w-0 overflow-hidden">
      <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-800/80 min-w-0">
        <span className="font-bold text-amber-400 flex items-center gap-1.5 truncate">
          <Radio className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{isAr ? 'القناة 1 (أصفر)' : 'CH1 (Yellow)'}</span>
        </span>
        <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 shrink-0">
          f: {channel1Signal.frequency} Hz
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
          <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'معايرة الجهد:' : 'Volts/Div:'}</span>
          <select
            value={ch1VoltsDiv}
            onChange={e => setCh1VoltsDiv(parseFloat(e.target.value))}
            className="bg-slate-900 border border-amber-500/40 rounded-lg px-2 py-0.5 text-amber-300 font-mono text-xs max-w-[5.5rem] shrink min-w-0 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer"
          >
            {voltsDivOptions.map(v => (
              <option key={v} value={v}>{v} V/DIV</option>
            ))}
          </select>
        </div>

        <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
          <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'إزاحة Y:' : 'Y-Offset:'}</span>
          <div className="flex items-center gap-1.5 flex-1 justify-end min-w-0" dir="ltr">
            <input
              type="range"
              min="-3"
              max="3"
              step="0.5"
              value={ch1OffsetDiv}
              onChange={e => setCh1OffsetDiv(parseFloat(e.target.value))}
              className="flex-1 min-w-[45px] max-w-[100px] h-1.5 bg-slate-800 rounded-lg accent-amber-500 cursor-pointer"
            />
            <span className="font-mono text-[10px] sm:text-[11px] text-amber-400 shrink-0 w-11 text-right">
              {ch1OffsetDiv >= 0 ? `+${ch1OffsetDiv.toFixed(1)}` : ch1OffsetDiv.toFixed(1)}d
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800/80 font-mono text-[11px] min-w-0">
        <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 text-center min-w-0">
          <div className="text-[9px] text-slate-400 uppercase tracking-wider truncate">Vpp</div>
          <div className="text-amber-300 font-bold truncate">{(channel1Signal.amplitude * 2).toFixed(2)} V</div>
        </div>
        <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 text-center min-w-0">
          <div className="text-[9px] text-slate-400 uppercase tracking-wider truncate">Vrms</div>
          <div className="text-amber-300 font-bold truncate">{(channel1Signal.amplitude * 0.707).toFixed(2)} V</div>
        </div>
      </div>
    </div>
  );

  const renderCh2Card = () => (
    channel2Signal ? (
      <div className="p-3 bg-slate-950/80 border border-sky-500/30 rounded-2xl space-y-2 flex flex-col justify-between min-w-0 overflow-hidden">
        <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-800/80 min-w-0">
          <span className="font-bold text-sky-400 flex items-center gap-1.5 truncate">
            <Radio className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{isAr ? 'القناة 2 (سماوي)' : 'CH2 (Cyan)'}</span>
          </span>
          <span className="text-[10px] font-mono text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 shrink-0">
            f: {channel2Signal.frequency} Hz
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
            <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'معايرة الجهد:' : 'Volts/Div:'}</span>
            <select
              value={ch2VoltsDiv}
              onChange={e => setCh2VoltsDiv(parseFloat(e.target.value))}
              className="bg-slate-900 border border-sky-500/40 rounded-lg px-2 py-0.5 text-sky-300 font-mono text-xs max-w-[5.5rem] shrink min-w-0 focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
            >
              {voltsDivOptions.map(v => (
                <option key={v} value={v}>{v} V/DIV</option>
              ))}
            </select>
          </div>

          <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
            <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'إزاحة Y:' : 'Y-Offset:'}</span>
            <div className="flex items-center gap-1.5 flex-1 justify-end min-w-0" dir="ltr">
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={ch2OffsetDiv}
                onChange={e => setCh2OffsetDiv(parseFloat(e.target.value))}
                className="flex-1 min-w-[45px] max-w-[100px] h-1.5 bg-slate-800 rounded-lg accent-sky-500 cursor-pointer"
              />
              <span className="font-mono text-[10px] sm:text-[11px] text-sky-400 shrink-0 w-11 text-right">
                {ch2OffsetDiv >= 0 ? `+${ch2OffsetDiv.toFixed(1)}` : ch2OffsetDiv.toFixed(1)}d
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800/80 font-mono text-[11px] min-w-0">
          <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 text-center min-w-0">
            <div className="text-[9px] text-slate-400 uppercase tracking-wider truncate">Vpp</div>
            <div className="text-sky-300 font-bold truncate">{(channel2Signal.amplitude * 2).toFixed(2)} V</div>
          </div>
          <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 text-center min-w-0">
            <div className="text-[9px] text-slate-400 uppercase tracking-wider truncate">Phase Δφ</div>
            <div className="text-sky-300 font-bold truncate">{Math.abs(channel1Signal.phaseDeg - channel2Signal.phaseDeg)}°</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center text-xs text-slate-500 min-h-[110px]">
        <Radio className="w-5 h-5 mb-1 opacity-30" />
        <span>{isAr ? 'القناة 2 غير مفعلة' : 'CH2 Inactive (Single Channel)'}</span>
      </div>
    )
  );

  const renderTimebaseCard = () => (
    <div className="p-3 bg-slate-950/80 border border-emerald-500/30 rounded-2xl space-y-2 flex flex-col justify-between min-w-0 overflow-hidden">
      <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-800/80 min-w-0">
        <span className="font-bold text-emerald-400 flex items-center gap-1.5 truncate">
          <Sliders className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{isAr ? 'قاعدة الزمن' : 'Timebase'}</span>
        </span>
        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 shrink-0">
          {timeDivMs} ms/DIV
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
          <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'معايرة الزمن:' : 'Time/Div:'}</span>
          <select
            value={timeDivMs}
            onChange={e => setTimeDivMs(parseFloat(e.target.value))}
            className="bg-slate-900 border border-emerald-500/40 rounded-lg px-2 py-0.5 text-emerald-300 font-mono text-xs max-w-[6rem] shrink min-w-0 focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer"
          >
            {timeDivOptions.map(t => (
              <option key={t} value={t}>{t} ms/DIV</option>
            ))}
          </select>
        </div>

        <div className="text-xs text-slate-300 flex items-center justify-between gap-2 min-w-0">
          <span className="shrink-0 text-slate-400 font-medium">{isAr ? 'النمط:' : 'Mode:'}</span>
          <span className="font-mono text-xs font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
            {displayMode}
          </span>
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] min-w-0">
        <span className="text-slate-400 text-[10px]">{isAr ? 'حالة القادح:' : 'Trigger:'}</span>
        <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400">
          <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
          {isRunning ? 'AUTO' : 'HOLD'}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop for Expanded Full-Width View */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div
        className={`w-full text-slate-100 font-sans transition-all duration-200 ${
          isExpanded
            ? 'fixed inset-2 sm:inset-6 z-50 overflow-y-auto bg-slate-900/98 border-2 border-emerald-500/50 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between'
            : 'max-w-full bg-slate-900/95 border-2 border-slate-800/80 rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Oscilloscope Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800 min-w-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
              <Activity className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-slate-100 flex items-center gap-1.5 sm:gap-2 truncate">
                <span className="truncate">EG-SCOPE 2024D • {isAr ? 'راسم الإشارة ثنائي القناة' : 'Dual-Trace Digital Oscilloscope'}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">
                  100 MHz
                </span>
              </h4>
              <p className="text-[11px] text-slate-400 truncate">
                {isAr ? 'عرض فوري للجهد والتردد وفرق الطور وأشكال ليساجو' : 'Real-time Vpp, frequency, phase shift & Lissajous X-Y analysis'}
              </p>
            </div>
          </div>

          {/* Controls, Mode & Layout Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Layout Toggle (Side-by-Side vs Stacked) */}
            <div className="flex bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-[11px]">
              <button
                type="button"
                onClick={() => setLayoutMode('side-by-side')}
                className={`px-2 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  layoutMode === 'side-by-side'
                    ? 'bg-slate-800 text-emerald-400 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={isAr ? 'عرض جانبي (CRT بجوار لوحة التحكم)' : 'Side-by-Side View (CRT next to controls)'}
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isAr ? 'جانبي' : 'Side'}</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('stacked')}
                className={`px-2 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  layoutMode === 'stacked'
                    ? 'bg-slate-800 text-emerald-400 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={isAr ? 'عرض مكدس (شاشة علوية ولوحة تحكم سفلية)' : 'Stacked View (Full-width CRT on top)'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isAr ? 'مكدس' : 'Stack'}</span>
              </button>
            </div>

            {/* Full-Width Expand / Restore Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`p-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                isExpanded
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
              title={isExpanded ? (isAr ? 'استعادة الحجم الأصلي (Esc)' : 'Restore Normal Size (Esc)') : (isAr ? 'توسيع العرض بالكامل' : 'Full Width / Expand View')}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5 text-emerald-400" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Run / Stop Button */}
            <button
              type="button"
              onClick={() => setIsRunning(!isRunning)}
              className={`px-2.5 py-1 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                isRunning
                  ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
              }`}
            >
              {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              {isRunning ? (isAr ? 'إيقاف' : 'RUN') : (isAr ? 'تشغيل' : 'STOP')}
            </button>

            {/* Channels Mode Switcher */}
            <div className="flex bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-xs font-semibold">
              {(['CH1', 'CH2', 'DUAL', 'XY'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setDisplayMode(mode)}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                    displayMode === mode
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Workstation Body */}
        {layoutMode === 'side-by-side' ? (
          /* Side-by-Side: CRT on Left/Top (fluid) + Controls on Right (ample width, stacked vertically) */
          <div className="flex flex-col lg:flex-row gap-3.5 mt-3.5 items-stretch min-w-0">
            {/* Left CRT Screen */}
            <div className="flex-1 min-w-0">
              {renderCrtScreen(isExpanded ? "h-[360px] sm:h-[460px] md:h-[540px]" : "h-72 sm:h-80 md:h-[400px]")}
            </div>

            {/* Right Controls Panel */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0 flex flex-col gap-2.5 min-w-0 justify-between">
              {renderCh1Card()}
              {renderCh2Card()}
              {renderTimebaseCard()}
            </div>
          </div>
        ) : (
          /* Stacked: CRT Screen Full-Width on Top + 3 Column Deck Below */
          <div className="flex flex-col gap-3.5 mt-3.5 min-w-0">
            {/* Full-Width CRT Screen */}
            {renderCrtScreen(isExpanded ? "h-[380px] sm:h-[480px] md:h-[560px]" : "h-64 sm:h-72 md:h-80 lg:h-96")}

            {/* Responsive Console Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 min-w-0">
              {renderCh1Card()}
              {renderCh2Card()}
              {renderTimebaseCard()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
