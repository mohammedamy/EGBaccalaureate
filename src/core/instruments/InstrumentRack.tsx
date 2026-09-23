import React, { useState } from 'react';
import {
  Activity,
  Gauge,
  Target,
  Clock,
  Edit3,
  Waves,
  Compass,
  Binary,
  X,
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { DigitalMultimeter, type DMMReading } from './DigitalMultimeter';
import { DualTraceOscilloscope, type WaveformSignal } from './DualTraceOscilloscope';
import { FunctionGenerator } from './FunctionGenerator';
import { OpticalSpectrometer } from './OpticalSpectrometer';
import { LogicAnalyzer } from './LogicAnalyzer';
import { MicrometerCaliper } from './MicrometerCaliper';
import { LabStopwatch } from '../labs/controls/LabStopwatch';
import { MathScratchpad } from '../math/MathScratchpad';
import type { LabInstrumentType } from '../labs/types';
import type { ThemeMode } from '../../types/curriculum';

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
  theme?: ThemeMode;
}

export const InstrumentRack: React.FC<InstrumentRackProps> = ({
  lang,
  supportedInstruments = [
    'multimeter',
    'oscilloscope',
    'function_generator',
    'spectrometer',
    'logic_analyzer',
    'micrometer',
    'stopwatch',
    'scratchpad',
  ],
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
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isAr = lang === 'ar';
  const [minimized, setMinimized] = useState<Set<LabInstrumentType>>(new Set());
  const [isBarExpanded, setIsBarExpanded] = useState<boolean>(true);
  const [funcGenSignal, setFuncGenSignal] = useState<WaveformSignal | null>(null);

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
    function_generator: {
      labelEn: 'DDS Function Generator',
      labelAr: 'مولد الإشارات الرقمي (DDS)',
      icon: Waves,
      color: 'text-violet-400 border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20',
    },
    spectrometer: {
      labelEn: 'Optical Spectrometer',
      labelAr: 'المطياف البصري (Vernier)',
      icon: Compass,
      color: 'text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-500/10 hover:bg-fuchsia-500/20',
    },
    logic_analyzer: {
      labelEn: 'Logic Analyzer & Bus',
      labelAr: 'محلل المنطق الرقمي والناقل',
      icon: Binary,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20',
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

  const getInstrumentButtonClass = (type: LabInstrumentType, isActive: boolean) => {
    if (isContrast) {
      if (isActive) {
        return 'bg-white text-black border-2 border-white ring-2 ring-cyan-400 font-bold shadow-md';
      }
      return 'bg-black text-white border-2 border-slate-600 hover:border-white font-semibold';
    }

    if (isLight) {
      if (isActive) {
        return 'bg-cyan-700 text-white border-cyan-700 shadow-md ring-2 ring-cyan-600/30 font-bold';
      }
      const lightStyles: Record<LabInstrumentType, string> = {
        multimeter: 'text-amber-900 bg-amber-50 border-amber-300 hover:bg-amber-100 font-semibold shadow-xs',
        oscilloscope: 'text-cyan-950 bg-cyan-50 border-cyan-300 hover:bg-cyan-100 font-semibold shadow-xs',
        function_generator: 'text-violet-950 bg-violet-50 border-violet-300 hover:bg-violet-100 font-semibold shadow-xs',
        spectrometer: 'text-fuchsia-950 bg-fuchsia-50 border-fuchsia-300 hover:bg-fuchsia-100 font-semibold shadow-xs',
        logic_analyzer: 'text-emerald-950 bg-emerald-50 border-emerald-300 hover:bg-emerald-100 font-semibold shadow-xs',
        micrometer: 'text-teal-950 bg-teal-50 border-teal-300 hover:bg-teal-100 font-semibold shadow-xs',
        stopwatch: 'text-indigo-950 bg-indigo-50 border-indigo-300 hover:bg-indigo-100 font-semibold shadow-xs',
        scratchpad: 'text-rose-950 bg-rose-50 border-rose-300 hover:bg-rose-100 font-semibold shadow-xs',
      };
      return lightStyles[type] || 'text-slate-900 bg-slate-100 border-slate-300 hover:bg-slate-200 font-semibold';
    }

    // Dark Mode
    if (isActive) {
      return 'bg-slate-800 text-white border-cyan-400 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/40 font-bold';
    }
    const darkStyles: Record<LabInstrumentType, string> = {
      multimeter: 'text-amber-400 border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 font-semibold',
      oscilloscope: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 font-semibold',
      function_generator: 'text-violet-400 border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20 font-semibold',
      spectrometer: 'text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 font-semibold',
      logic_analyzer: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 font-semibold',
      micrometer: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 font-semibold',
      stopwatch: 'text-indigo-400 border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 font-semibold',
      scratchpad: 'text-rose-400 border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 font-semibold',
    };
    return darkStyles[type] || 'text-slate-300 border-slate-700 bg-slate-800/40 hover:bg-slate-800 font-semibold';
  };

  return (
    <div className="space-y-3" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Instrument Launcher Bar */}
      <div
        className={`p-2 rounded-xl backdrop-blur-md shadow-md transition-colors border ${
          isLight
            ? 'bg-white border-slate-200 shadow-slate-200/50'
            : isContrast
            ? 'bg-black border-2 border-white'
            : 'bg-slate-950/80 border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-1 mb-1.5">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider ${
                isLight ? 'text-slate-700' : isContrast ? 'text-white' : 'text-slate-400'
              }`}
            >
              {isAr ? 'الأجهزة المعملية التفاعلية' : 'Scientific Instrument Rack'}
            </span>
            {activeInstruments.size > 0 && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold border ${
                  isLight
                    ? 'bg-cyan-100 text-cyan-900 border-cyan-300'
                    : isContrast
                    ? 'bg-white text-black border-2 border-white'
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                }`}
              >
                {activeInstruments.size} {isAr ? 'نشط' : 'Active'}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsBarExpanded(!isBarExpanded)}
            className={`p-0.5 rounded transition-colors cursor-pointer ${
              isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                : isContrast
                ? 'text-white hover:text-cyan-300'
                : 'text-slate-400 hover:text-slate-200'
            }`}
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
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 cursor-pointer ${getInstrumentButtonClass(
                    type,
                    isActive
                  )}`}
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
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
                isLight
                  ? 'border-amber-300 bg-white shadow-amber-900/5 text-slate-900'
                  : isContrast
                  ? 'border-2 border-white bg-black text-white'
                  : 'border-amber-500/30 bg-slate-950/95 shadow-2xl'
              }`}
            >
              <div
                className={`px-4 py-2 border-b flex items-center justify-between ${
                  isLight
                    ? 'bg-amber-50/80 border-amber-200'
                    : isContrast
                    ? 'bg-black border-white'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-bold text-xs ${
                    isLight
                      ? 'text-amber-950'
                      : isContrast
                      ? 'text-amber-300'
                      : 'text-amber-400'
                  }`}
                >
                  <Gauge className="w-4 h-4" />
                  <span>
                    {isAr
                      ? 'الملتيميتر الرقمي (Fluke 87V True RMS)'
                      : 'Fluke 87V True RMS Digital Multimeter'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleMinimize('multimeter')}
                    className={`p-1 rounded cursor-pointer ${
                      isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : isContrast
                        ? 'text-white hover:text-cyan-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {minimized.has('multimeter') ? (
                      <Maximize2 className="w-3.5 h-3.5" />
                    ) : (
                      <Minimize2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onCloseInstrument('multimeter')}
                    className={`p-1 rounded cursor-pointer ${
                      isLight
                        ? 'text-slate-600 hover:text-rose-600'
                        : isContrast
                        ? 'text-white hover:text-rose-400'
                        : 'text-slate-400 hover:text-rose-400'
                    }`}
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

          {/* Dual-Trace Oscilloscope - Spans Full Width as a Primary Workstation Instrument */}
          {activeInstruments.has('oscilloscope') && (
            <div className="col-span-full w-full">
              <DualTraceOscilloscope
                channel1Signal={funcGenSignal ?? oscilloscopeCh1}
                channel2Signal={oscilloscopeCh2}
                lang={lang}
                theme={theme}
                onClose={() => onCloseInstrument('oscilloscope')}
              />
            </div>
          )}

          {/* DDS Function Generator - Spans Full Width */}
          {activeInstruments.has('function_generator') && (
            <div className="col-span-full w-full">
              <FunctionGenerator
                lang={lang}
                theme={theme}
                onClose={() => onCloseInstrument('function_generator')}
                onSignalOutput={(sig) => setFuncGenSignal(sig)}
              />
            </div>
          )}

          {/* Optical Spectrometer - Spans Full Width */}
          {activeInstruments.has('spectrometer') && (
            <div className="col-span-full w-full">
              <OpticalSpectrometer
                lang={lang}
                theme={theme}
                onClose={() => onCloseInstrument('spectrometer')}
              />
            </div>
          )}

          {/* 8-Channel Logic Analyzer & Bus - Spans Full Width */}
          {activeInstruments.has('logic_analyzer') && (
            <div className="col-span-full w-full">
              <LogicAnalyzer
                lang={lang}
                theme={theme}
                onClose={() => onCloseInstrument('logic_analyzer')}
              />
            </div>
          )}

          {/* Micrometer Caliper */}
          {activeInstruments.has('micrometer') && (
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
                isLight
                  ? 'border-emerald-300 bg-white shadow-emerald-900/5 text-slate-900'
                  : isContrast
                  ? 'border-2 border-white bg-black text-white'
                  : 'border-emerald-500/30 bg-slate-950/95 shadow-2xl'
              }`}
            >
              <div
                className={`px-4 py-2 border-b flex items-center justify-between ${
                  isLight
                    ? 'bg-emerald-50/80 border-emerald-200'
                    : isContrast
                    ? 'bg-black border-white'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-bold text-xs ${
                    isLight
                      ? 'text-emerald-950'
                      : isContrast
                      ? 'text-emerald-300'
                      : 'text-emerald-400'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>
                    {isAr
                      ? 'الميكروميتر الدقيق (0.01 مم)'
                      : 'Precision Screw Gauge Micrometer (0.01 mm)'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleMinimize('micrometer')}
                    className={`p-1 rounded cursor-pointer ${
                      isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : isContrast
                        ? 'text-white hover:text-cyan-300'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {minimized.has('micrometer') ? (
                      <Maximize2 className="w-3.5 h-3.5" />
                    ) : (
                      <Minimize2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onCloseInstrument('micrometer')}
                    className={`p-1 rounded cursor-pointer ${
                      isLight
                        ? 'text-slate-600 hover:text-rose-600'
                        : isContrast
                        ? 'text-white hover:text-rose-400'
                        : 'text-slate-400 hover:text-rose-400'
                    }`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {!minimized.has('micrometer') && (
                <div className="p-3 sm:p-4 w-full">
                  <MicrometerCaliper lang={lang} theme={theme} />
                </div>
              )}
            </div>
          )}

          {/* Lab Stopwatch */}
          {activeInstruments.has('stopwatch') && (
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all flex flex-col items-center ${
                isLight
                  ? 'border-indigo-300 bg-white shadow-indigo-900/5 text-slate-900'
                  : isContrast
                  ? 'border-2 border-white bg-black text-white'
                  : 'border-indigo-500/30 bg-slate-950/95 shadow-2xl'
              }`}
            >
              <div
                className={`w-full px-4 py-2 border-b flex items-center justify-between ${
                  isLight
                    ? 'bg-indigo-50/80 border-indigo-200'
                    : isContrast
                    ? 'bg-black border-white'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-bold text-xs ${
                    isLight
                      ? 'text-indigo-950'
                      : isContrast
                      ? 'text-indigo-300'
                      : 'text-indigo-400'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>
                    {isAr
                      ? 'ساعة الإيقاف المعملية'
                      : 'Precision Digital Stopwatch'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onCloseInstrument('stopwatch')}
                  className={`p-1 rounded cursor-pointer ${
                    isLight
                      ? 'text-slate-600 hover:text-rose-600'
                      : isContrast
                      ? 'text-white hover:text-rose-400'
                      : 'text-slate-400 hover:text-rose-400'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-4">
                <LabStopwatch
                  lang={lang}
                  onLogLap={onStopwatchLap}
                  theme={theme}
                />
              </div>
            </div>
          )}

          {/* Math KaTeX Scratchpad */}
          {activeInstruments.has('scratchpad') && (
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all xl:col-span-2 ${
                isLight
                  ? 'border-rose-300 bg-white shadow-rose-900/5 text-slate-900'
                  : isContrast
                  ? 'border-2 border-white bg-black text-white'
                  : 'border-rose-500/30 bg-slate-950/95 shadow-2xl'
              }`}
            >
              <div
                className={`px-4 py-2 border-b flex items-center justify-between ${
                  isLight
                    ? 'bg-rose-50/80 border-rose-200'
                    : isContrast
                    ? 'bg-black border-white'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-bold text-xs ${
                    isLight
                      ? 'text-rose-950'
                      : isContrast
                      ? 'text-rose-300'
                      : 'text-rose-400'
                  }`}
                >
                  <Edit3 className="w-4 h-4" />
                  <span>
                    {isAr
                      ? 'المسودة الرياضية التفاعلية (KaTeX & Keypad)'
                      : 'Interactive Math Scratchpad (KaTeX & Keypad)'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onCloseInstrument('scratchpad')}
                  className={`p-1 rounded cursor-pointer ${
                    isLight
                      ? 'text-slate-600 hover:text-rose-600'
                      : isContrast
                      ? 'text-white hover:text-rose-400'
                      : 'text-slate-400 hover:text-rose-400'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-4">
                <MathScratchpad lang={lang} theme={theme} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
