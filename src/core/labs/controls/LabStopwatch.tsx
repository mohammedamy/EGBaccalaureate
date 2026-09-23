import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Flag, X, Clock } from 'lucide-react';
import { toHindiDigits } from '../../../utils/arabicNumerals';

import type { ThemeMode } from '../../../types/curriculum';

interface LabStopwatchProps {
  lang: 'en' | 'ar';
  theme?: ThemeMode;
  onClose?: () => void;
  onLogLap?: (lapTimeSec: number, lapNumber: number) => void;
}

export const LabStopwatch: React.FC<LabStopwatchProps> = ({ lang, theme = 'dark', onClose, onLogLap }) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  const startTimestampRef = useRef<number | null>(null);
  const accumulatedMsRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    startTimestampRef.current = performance.now();

    const updateTimer = (now: number) => {
      if (startTimestampRef.current !== null) {
        const delta = now - startTimestampRef.current;
        setElapsedMs(accumulatedMsRef.current + delta);
      }
      animFrameRef.current = requestAnimationFrame(updateTimer);
    };

    animFrameRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isRunning]);

  const handleToggle = () => {
    if (isRunning) {
      // Pause
      accumulatedMsRef.current = elapsedMs;
      setIsRunning(false);
    } else {
      // Start
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    accumulatedMsRef.current = 0;
    startTimestampRef.current = null;
    setElapsedMs(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (elapsedMs === 0) return;
    const currentLap = elapsedMs;
    const nextLaps = [currentLap, ...laps];
    setLaps(nextLaps);
    if (onLogLap) {
      onLogLap(currentLap / 1000, nextLaps.length);
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);

    const pad = (n: number) => n.toString().padStart(2, '0');
    const timeStr = `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
    return isAr ? toHindiDigits(timeStr) : timeStr;
  };

  return (
    <div
      className={`w-72 border rounded-2xl p-4 shadow-2xl backdrop-blur-md select-none transition-all ${
        isLight
          ? 'bg-white border-cyan-500/40 text-slate-900 shadow-slate-200/50'
          : isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
          : 'bg-slate-950 border-cyan-500/40 text-slate-100'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className={`flex items-center justify-between border-b pb-2 mb-3 ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-500" />
          <h4 className={`text-xs font-bold uppercase tracking-wider ${
            isLight ? 'text-cyan-900' : isContrast ? 'text-white' : 'text-cyan-300'
          }`}>
            {isAr ? 'ساعة إيقاف معملية' : 'Precision Stopwatch'}
          </h4>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Digital LCD Display */}
      <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-center my-2 shadow-inner">
        <div className="text-3xl font-mono font-black tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
          {formatTime(elapsedMs)}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <button
          type="button"
          onClick={handleToggle}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md ${
            isRunning
              ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>{isAr ? 'إيقاف' : 'Pause'}</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isAr ? 'بدء' : 'Start'}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleLap}
          disabled={elapsedMs === 0}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 border border-slate-700"
          title={isAr ? 'تسجيل لفة' : 'Lap split'}
        >
          <Flag className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleReset}
          disabled={elapsedMs === 0 && !isRunning}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 border border-slate-700"
          title={isAr ? 'إعادة ضبط' : 'Reset'}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Laps List */}
      {laps.length > 0 && (
        <div className="mt-3 max-h-28 overflow-y-auto border-t border-slate-800/80 pt-2 space-y-1 text-xs font-mono scrollbar-thin scrollbar-thumb-slate-700">
          {laps.map((lap, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center px-2 py-0.5 rounded bg-slate-900/60 text-slate-300"
            >
              <span className="text-slate-500 font-sans">
                {isAr ? `دورة #${toHindiDigits((laps.length - idx).toString())}` : `Lap #${laps.length - idx}`}
              </span>
              <span className="font-bold text-cyan-300">{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
