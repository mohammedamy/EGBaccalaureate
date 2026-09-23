import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Play,
  Pause,
  X,
  Binary,
} from 'lucide-react';

import type { ThemeMode } from '../../types/curriculum';

export type LogicGateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

interface LogicAnalyzerProps {
  lang?: 'en' | 'ar';
  theme?: ThemeMode;
  onClose?: () => void;
  initialGate?: LogicGateType;
}

export const LogicAnalyzer: React.FC<LogicAnalyzerProps> = ({
  lang = 'en',
  theme = 'dark',
  onClose,
  initialGate = 'AND',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Analyzer state
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [clockFreqHz, setClockFreqHz] = useState<number>(1000); // 1 kHz
  const [selectedGate, setSelectedGate] = useState<LogicGateType>(initialGate);
  const [manualInputA, setManualInputA] = useState<0 | 1>(1);
  const [manualInputB, setManualInputB] = useState<0 | 1>(0);
  const [cursorTimeMs, setCursorTimeMs] = useState<number>(2.5);

  // Channel names and labels
  const channels = [
    { id: 'D0', label: 'CLK (Master Clock)' },
    { id: 'D1', label: 'Q0 (Bit 0 / Div 2)' },
    { id: 'D2', label: 'Q1 (Bit 1 / Div 4)' },
    { id: 'D3', label: 'Q2 (Bit 2 / Div 8)' },
    { id: 'D4', label: 'Q3 (Bit 3 / Div 16)' },
    { id: 'D5', label: 'IN_A (Gate Input A)' },
    { id: 'D6', label: 'IN_B (Gate Input B)' },
    { id: 'D7', label: 'OUT_Y (Gate Output)' },
  ];

  // Evaluate gate output from inputs A and B
  const evaluateGate = (a: 0 | 1, b: 0 | 1, gate: LogicGateType): 0 | 1 => {
    switch (gate) {
      case 'AND':
        return a && b ? 1 : 0;
      case 'OR':
        return a || b ? 1 : 0;
      case 'NOT':
        return a ? 0 : 1;
      case 'NAND':
        return !(a && b) ? 1 : 0;
      case 'NOR':
        return !(a || b) ? 1 : 0;
      case 'XOR':
        return a !== b ? 1 : 0;
      case 'XNOR':
        return a === b ? 1 : 0;
    }
  };

  const gateOutput = evaluateGate(manualInputA, manualInputB, selectedGate);

  // Digital timing diagram animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = (now: number) => {
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

      // Dark chassis background
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, w, h);

      // Channel row layout
      const numChannels = 8;
      const rowH = h / numChannels;
      const timeOffset = isRunning ? (now * 0.001 * (clockFreqHz / 500)) : 0;

      // Draw grid vertical timing markers
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      const numDivs = 16;
      for (let i = 0; i <= numDivs; i++) {
        const x = (i * w) / numDivs;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Draw each channel trace
      channels.forEach((ch, idx) => {
        const yTop = idx * rowH + 6;
        const yBottom = (idx + 1) * rowH - 6;
        const highY = yTop + 2;
        const lowY = yBottom - 2;

        // Channel divider line
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, (idx + 1) * rowH);
        ctx.lineTo(w, (idx + 1) * rowH);
        ctx.stroke();

        // Channel label badge
        ctx.fillStyle = idx === 7 ? '#38bdf8' : idx >= 5 ? '#f59e0b' : '#94a3b8';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`${ch.id}: ${ch.label}`, 6, yTop + 10);

        // Draw digital pulse train
        ctx.strokeStyle = idx === 7 ? '#38bdf8' : idx >= 5 ? '#f59e0b' : '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const points = 300;
        for (let p = 0; p <= points; p++) {
          const x = (p * w) / points;
          const t = (p / points) * 8 + timeOffset;

          let bitVal: 0 | 1 = 0;
          if (idx === 0) {
            // Clock
            bitVal = Math.floor(t * 2) % 2 === 0 ? 1 : 0;
          } else if (idx <= 4) {
            // Ripple Counter Bits Q0-Q3
            const divFactor = Math.pow(2, idx);
            bitVal = Math.floor(t / (divFactor * 0.5)) % 2 === 0 ? 1 : 0;
          } else if (idx === 5) {
            // Input A
            bitVal = manualInputA;
          } else if (idx === 6) {
            // Input B
            bitVal = manualInputB;
          } else if (idx === 7) {
            // Output Y
            bitVal = gateOutput;
          }

          const y = bitVal === 1 ? highY : lowY;

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Draw Cursor 1 line
      const cursorX = (cursorTimeMs / 5.0) * w;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cursorX, 0);
      ctx.lineTo(cursorX, h);
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, clockFreqHz, manualInputA, manualInputB, selectedGate, gateOutput, cursorTimeMs]);

  const gates: LogicGateType[] = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'];

  return (
    <div
      className={`w-full rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden transition-all border-2 ${
        isLight
          ? 'bg-white border-indigo-500/40 text-slate-900 shadow-slate-200/50'
          : isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : 'bg-slate-900/98 border-indigo-500/40 text-slate-100'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Header */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30 shrink-0">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`text-sm sm:text-base font-extrabold flex items-center gap-2 truncate ${
              isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-100'
            }`}>
              <span>EG-LOGIC 8000 • {isAr ? 'محلل الإشارات المنطقية والتوقيت الرقمي' : '8-Channel Digital Logic Timing Analyzer'}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold shrink-0 ${
                isLight ? 'bg-indigo-100 text-indigo-900 border border-indigo-300' : 'bg-indigo-950 text-indigo-300 border border-indigo-800'
              }`}>
                100 MHz Timing
              </span>
            </h4>
            <p className={`text-xs truncate ${
              isLight ? 'text-slate-600' : isContrast ? 'text-slate-300' : 'text-slate-400'
            }`}>
              {isAr ? 'تحليل البوابات المنطقية وجدول التحقيق والتوقيت الرقمي للنواقل D0-D7' : 'Bus decoding, logic gate truth table verification, timing diagram & clock synthesis'}
            </p>
          </div>
        </div>

        {/* Master Controls: Run/Stop & Close */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
              isRunning
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-indigo-600/30'
                : 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? (isAr ? 'إيقاف مؤقت' : 'RUNNING') : (isAr ? 'استئناف' : 'HOLD')}</span>
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all cursor-pointer"
              title={isAr ? 'إغلاق المحلل' : 'Close Analyzer'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Workstation Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-stretch min-w-0">
        {/* Left Stage: 8-Channel Digital Waveform Canvas */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-xs">
            <span className="font-mono text-indigo-400 font-bold flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>CHANNELS D0-D7 LOGIC TIMING DIAGRAM</span>
            </span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>CLK: <strong className="text-emerald-400">{clockFreqHz >= 1000 ? `${clockFreqHz / 1000} kHz` : `${clockFreqHz} Hz`}</strong></span>
              <span>BUS: <strong className="text-cyan-400">0x{(gateOutput * 128 + manualInputA * 32 + manualInputB * 64).toString(16).toUpperCase().padStart(2, '0')}</strong></span>
            </div>
          </div>

          {/* Canvas */}
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border-2 border-slate-800 relative bg-[#030712] shadow-md">
            <canvas ref={canvasRef} className="w-full h-full block" />
          </div>

          {/* Time cursor readout */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span>Cursor T1: <strong className="text-rose-400">{cursorTimeMs.toFixed(2)} ms</strong></span>
              <input
                type="range"
                min="0"
                max="5"
                step="0.05"
                value={cursorTimeMs}
                onChange={(e) => setCursorTimeMs(parseFloat(e.target.value))}
                className="w-20 sm:w-28 accent-rose-500 cursor-pointer"
                title="Adjust Timing Cursor T1"
              />
            </div>
            <span>Gate State: <strong className={gateOutput ? 'text-emerald-400 font-bold' : 'text-slate-400'}>Y = {gateOutput}</strong></span>
            <span>T: <strong className="text-cyan-400">{(1000 / clockFreqHz).toFixed(2)} ms</strong></span>
          </div>
        </div>

        {/* Right Stage: Logic Gate Sandbox & Truth Table */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
          {/* Gate Selector */}
          <div className="space-y-2 pb-3 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">{isAr ? 'البوابة المنطقية المختبرة:' : 'Evaluated Logic Gate:'}</span>
              <span className="font-mono text-xs font-bold text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                {selectedGate}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {gates.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGate(g)}
                  className={`py-1 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedGate === g
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-xs'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Gate Inputs A & B */}
          <div className="space-y-2 pb-3 border-b border-slate-800 text-xs">
            <span className="font-bold text-slate-200 block">{isAr ? 'مداخل البوابة اليدوية:' : 'Manual Logic Inputs:'}</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setManualInputA(manualInputA === 1 ? 0 : 1)}
                className={`p-2.5 rounded-xl border font-mono font-bold text-xs flex items-center justify-between transition-all cursor-pointer ${
                  manualInputA === 1
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-xs'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
              >
                <span>INPUT A:</span>
                <span className="text-sm font-black">{manualInputA}</span>
              </button>

              <button
                type="button"
                onClick={() => setManualInputB(manualInputB === 1 ? 0 : 1)}
                className={`p-2.5 rounded-xl border font-mono font-bold text-xs flex items-center justify-between transition-all cursor-pointer ${
                  manualInputB === 1
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-xs'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
              >
                <span>INPUT B:</span>
                <span className="text-sm font-black">{manualInputB}</span>
              </button>
            </div>
          </div>

          {/* Live Truth Table Matrix */}
          <div className="space-y-1 text-xs">
            <span className="font-bold text-slate-200 block">{isAr ? 'جدول التحقيق (Truth Table):' : 'Active Truth Table:'}</span>
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden font-mono text-[11px]">
              <div className="grid grid-cols-3 bg-slate-950 p-1.5 font-bold text-slate-400 text-center border-b border-slate-800">
                <span>IN A</span>
                <span>IN B</span>
                <span className="text-indigo-400">OUT Y</span>
              </div>
              {[
                { a: 0 as const, b: 0 as const },
                { a: 0 as const, b: 1 as const },
                { a: 1 as const, b: 0 as const },
                { a: 1 as const, b: 1 as const },
              ].map(({ a, b }) => {
                const y = evaluateGate(a, b, selectedGate);
                const isCurrent = manualInputA === a && manualInputB === b;

                return (
                  <div
                    key={`${a}-${b}`}
                    className={`grid grid-cols-3 p-1.5 text-center transition-all ${
                      isCurrent
                        ? 'bg-indigo-600/30 text-white font-bold border-y border-indigo-500/40'
                        : 'text-slate-300'
                    }`}
                  >
                    <span>{a}</span>
                    <span>{b}</span>
                    <span className={y === 1 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>{y}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Clock Frequency Slider */}
          <div className="space-y-1 text-xs" dir="ltr">
            <div className="flex items-center justify-between text-slate-300">
              <span className="font-semibold">{isAr ? 'تردد الساعة:' : 'Clock Frequency:'}</span>
              <span className="font-mono text-emerald-400 font-bold">{clockFreqHz} Hz</span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={clockFreqHz}
              onChange={(e) => setClockFreqHz(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg accent-emerald-400 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
