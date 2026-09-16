import React from 'react';
import { MathRenderer } from '../../../components/MathRenderer';
import { toHindiDigits } from '../../../utils/arabicNumerals';
import type { TelemetryStatus } from '../types';
import type { ThemeMode } from '../../../types/curriculum';

interface LabTelemetryCardProps {
  id: string;
  labelEn: string;
  labelAr: string;
  symbolTex?: string;
  value: number | string;
  unit?: string;
  min?: number;
  max?: number;
  status?: TelemetryStatus;
  precision?: number;
  lang: 'en' | 'ar';
  theme?: ThemeMode;
}

export const LabTelemetryCard: React.FC<LabTelemetryCardProps> = ({
  labelEn,
  labelAr,
  symbolTex,
  value,
  unit = '',
  min,
  max,
  status = 'normal',
  precision = 2,
  lang,
  theme = 'dark',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  let formattedValue: string;
  let percent: number | null = null;

  if (typeof value === 'number') {
    formattedValue = isAr ? toHindiDigits(value.toFixed(precision)) : value.toFixed(precision);
    if (min !== undefined && max !== undefined && max > min) {
      percent = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
    }
  } else {
    formattedValue = value;
  }

  // Color schemas based on telemetry status
  const statusStyles = {
    normal: {
      border: isLight ? 'border-slate-200' : 'border-slate-800',
      bg: isLight ? 'bg-slate-50/90' : 'bg-slate-900/80',
      text: isLight ? 'text-cyan-800' : 'text-cyan-400',
      gauge: isLight ? 'bg-cyan-600' : 'bg-cyan-500',
      badge: isLight ? 'bg-slate-200 text-slate-700' : 'bg-slate-800 text-slate-300',
    },
    optimal: {
      border: isLight ? 'border-emerald-300' : 'border-emerald-500/30',
      bg: isLight ? 'bg-emerald-50/90' : 'bg-emerald-950/20',
      text: isLight ? 'text-emerald-700' : 'text-emerald-400',
      gauge: isLight ? 'bg-emerald-600' : 'bg-emerald-500',
      badge: isLight ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    },
    warning: {
      border: isLight ? 'border-amber-300' : 'border-amber-500/40',
      bg: isLight ? 'bg-amber-50/90' : 'bg-amber-950/20',
      text: isLight ? 'text-amber-800' : 'text-amber-400',
      gauge: isLight ? 'bg-amber-600' : 'bg-amber-500',
      badge: isLight ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    },
    alert: {
      border: isLight ? 'border-rose-300' : 'border-rose-500/50',
      bg: isLight ? 'bg-rose-50/90' : 'bg-rose-950/30',
      text: isLight ? 'text-rose-700' : 'text-rose-400',
      gauge: isLight ? 'bg-rose-600' : 'bg-rose-500',
      badge: isLight ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse',
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <div
      className={`p-3 sm:p-3.5 rounded-xl border ${currentStyle.border} ${currentStyle.bg} backdrop-blur-sm transition-all shadow-xs flex flex-col justify-between`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <div className="flex items-center gap-2 min-w-0">
          {symbolTex && (
            <span className={`text-sm font-mono inline-flex items-center ${isLight ? 'text-slate-800 font-bold' : 'text-slate-200 font-bold'}`}>
              <MathRenderer math={symbolTex} inline />
            </span>
          )}
          <span className={`text-xs sm:text-sm font-bold truncate ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {isAr ? labelAr : labelEn}
          </span>
        </div>

        {status !== 'normal' && (
          <span
            className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-bold uppercase tracking-wider ${currentStyle.badge}`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2 my-0.5">
        <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${currentStyle.text}`}>
          {formattedValue}
        </span>
        {unit && (
          <span className={`text-xs sm:text-sm font-bold font-sans ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {unit}
          </span>
        )}
      </div>

      {percent !== null && (
        <div className={`mt-2.5 w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
          <div
            className={`h-full ${currentStyle.gauge} transition-all duration-300 rounded-full`}
            style={{ width: `${percent}%` }}
          />
        </div>
      )}
    </div>
  );
};
