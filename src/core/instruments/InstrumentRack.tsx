import React, { useState } from 'react';
import {
  Activity,
  Gauge,
  Target,
  Clock,
  Edit3,
  X,
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { DigitalMultimeter, type DMMReading } from './DigitalMultimeter';
import { DualTraceOscilloscope, type WaveformSignal } from './DualTraceOscilloscope';
import { MicrometerCaliper } from './MicrometerCaliper';
import { LabStopwatch } from '../labs/controls/LabStopwatch';
import { MathScratchpad } from '../math/MathScratchpad';
import type { LabInstrumentType } from '../labs/types';

interface InstrumentRackProps {
  lang: 'en' | 'ar';
  supportedInstruments?: LabInstrumentType[];
  activeInstruments: Set<LabInstrumentType>;
  onToggleInstrument: (type: LabInstrumentType) => void;
  onCloseInstrument: (type: LabInstrumentType) => void;
  // Optional live feeds from simulation
  multimeterReading?: DMMReading;
  oscilloscopeCh1?: WaveformSignal;
  oscilloscopeCh2?: WaveformSignal;
  onStopwatchLap?: (lapTimeSec: number, lapNumber: number) => void;
}

export const InstrumentRack: React.FC<InstrumentRackProps> = ({
  lang,
  supportedInstruments = ['multimeter', 'oscilloscope', 'micrometer', 'stopwatch', 'scratchpad'],
  activeInstruments,
  onToggleInstrument,
  onCloseInstrument,
  multimeterReading = {
    voltageDC: 12.0,
    voltageAC: 0,
    currentDC: 2.0,
    resistance: 6.0,
    continuityBeep: false,
  },
  oscilloscopeCh1 = {
    amplitude: 5,
    frequency: 50,
    phaseDeg: 0,
    type: 'sine',
  },
  oscilloscopeCh2,
  onStopwatchLap,
}) => {
  const isAr = lang === 'ar';
  const [minimized, setMinimized] = useState<Set<LabInstrumentType>>(new Set());
  const [isBarExpanded, setIsBarExpanded] = useState<boolean>(true);

  const toggleMinimize = (type: LabInstrumentType) => {
    setMinimized((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const instrumentsMeta: Record<
    LabInstrumentType,
    { labelEn: string; labelAr: string; icon: React.ElementType; color: string }
  > = {
    multimeter: {
      labelEn: 'Digital Multimeter',
      labelAr: 'الملتيميتر الرقمي',
      icon: Gauge,
      color: 'text-amber-400 border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20',
    },
    oscilloscope: {
      labelEn: 'Dual Oscilloscope',
      labelAr: 'الأوسيلوسكوب ثنائي القناة',
      icon: Activity,
      color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20',
    },
    micrometer: {
      labelEn: 'Micrometer Caliper',
      labelAr: 'الميكروميتر القياسي',
      icon: Target,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20',
    },
    stopwatch: {
      labelEn: 'Precision Stopwatch',
      labelAr: 'ساعة إيقاف معملية',
      icon: Clock,
      color: 'text-indigo-400 border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20',
    },
    scratchpad: {
      labelEn: 'Math Scratchpad',
      labelAr: 'المسودة الرياضية (KaTeX)',
      icon: Edit3,
      color: 'text-rose-400 border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20',
    },
  };

  return (
    <div className="space-y-3" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Instrument Launcher Bar */}
      <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between gap-2 px-1 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {isAr ? 'الأجهزة المعملية التفاعلية' : 'Scientific Instrument Rack'}
            </span>
            {activeInstruments.size > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {activeInstruments.size} {isAr ? 'نشط' : 'Active'}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsBarExpanded(!isBarExpanded)}
            className="text-slate-400 hover:text-slate-200 p-0.5 rounded"
          >
            {isBarExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {isBarExpanded && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
            {supportedInstruments.map((type) => {
              const meta = instrumentsMeta[type];
              const Icon = meta.icon;
              const isActive = activeInstruments.has(type);

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onToggleInstrument(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 ${
                    isActive
                      ? 'bg-slate-800 text-white border-cyan-400 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/40'
                      : meta.color
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isAr ? meta.labelAr : meta.labelEn}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Instrument Windows Container */}
      {activeInstruments.size > 0 && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* Digital Multimeter */}
          {activeInstruments.has('multimeter') && (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
              <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <Gauge className="w-4 h-4" />
                  <span>{isAr ? 'الملتيميتر الرقمي (Fluke 87V True RMS)' : 'Fluke 87V True RMS Digital Multimeter'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleMinimize('multimeter')}
                    className="p-1 rounded text-slate-400 hover:text-slate-200"
                  >
                    {minimized.has('multimeter') ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => onCloseInstrument('multimeter')}
                    className="p-1 rounded text-slate-400 hover:text-rose-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {!minimized.has('multimeter') && (
                <div className="p-4 flex justify-center">
                  <DigitalMultimeter reading={multimeterReading} lang={lang} />
                </div>
              )}
            </div>
          )}

          {/* Dual-Trace Oscilloscope */}
          {activeInstruments.has('oscilloscope') && (
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
              <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <Activity className="w-4 h-4" />
                  <span>{isAr ? 'راسم الإشارة ثنائي القناة (CRT Phosphor Graticule)' : 'Dual-Trace Phosphor Oscilloscope (CH1/CH2/XY)'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleMinimize('oscilloscope')}
                    className="p-1 rounded text-slate-400 hover:text-slate-200"
                  >
                    {minimized.has('oscilloscope') ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => onCloseInstrument('oscilloscope')}
                    className="p-1 rounded text-slate-400 hover:text-rose-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {!minimized.has('oscilloscope') && (
                <div className="p-3 sm:p-4 w-full">
                  <DualTraceOscilloscope
                    channel1Signal={oscilloscopeCh1}
                    channel2Signal={oscilloscopeCh2}
                    lang={lang}
                  />
                </div>
              )}
            </div>
          )}

          {/* Micrometer Caliper */}
          {activeInstruments.has('micrometer') && (
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
              <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Target className="w-4 h-4" />
                  <span>{isAr ? 'الميكروميتر الدقيق (0.01 مم)' : 'Precision Screw Gauge Micrometer (0.01 mm)'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleMinimize('micrometer')}
                    className="p-1 rounded text-slate-400 hover:text-slate-200"
                  >
                    {minimized.has('micrometer') ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => onCloseInstrument('micrometer')}
                    className="p-1 rounded text-slate-400 hover:text-rose-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {!minimized.has('micrometer') && (
                <div className="p-4 flex justify-center">
                  <MicrometerCaliper lang={lang} />
                </div>
              )}
            </div>
          )}

          {/* Lab Stopwatch */}
          {activeInstruments.has('stopwatch') && (
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all flex flex-col items-center">
              <div className="w-full px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
                  <Clock className="w-4 h-4" />
                  <span>{isAr ? 'ساعة الإيقاف المعملية' : 'Precision Digital Stopwatch'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onCloseInstrument('stopwatch')}
                  className="p-1 rounded text-slate-400 hover:text-rose-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-4">
                <LabStopwatch lang={lang} onLogLap={onStopwatchLap} />
              </div>
            </div>
          )}

          {/* Math KaTeX Scratchpad */}
          {activeInstruments.has('scratchpad') && (
            <div className="rounded-2xl border border-rose-500/30 bg-slate-950/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all xl:col-span-2">
              <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                  <Edit3 className="w-4 h-4" />
                  <span>{isAr ? 'المسودة الرياضية التفاعلية (KaTeX & Keypad)' : 'Interactive Math Scratchpad (KaTeX & Keypad)'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onCloseInstrument('scratchpad')}
                  className="p-1 rounded text-slate-400 hover:text-rose-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-4">
                <MathScratchpad lang={lang} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
