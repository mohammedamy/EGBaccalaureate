import React from 'react';
import { MathRenderer } from '../../../components/MathRenderer';
import { toHindiDigits } from '../../../utils/arabicNumerals';
import type { TelemetryStatus } from '../types';

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
}) => {
  const isAr = lang === 'ar';

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
      border: 'border-slate-800',
      bg: 'bg-slate-900/80',
      text: 'text-cyan-400',
      gauge: 'bg-cyan-500',
      badge: 'bg-slate-800 text-slate-300',
    },
    optimal: {
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20',
      text: 'text-emerald-400',
      gauge: 'bg-emerald-500',
      badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    },
    warning: {
      border: 'border-amber-500/40',
      bg: 'bg-amber-950/20',
      text: 'text-amber-400',
      gauge: 'bg-amber-500',
      badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    },
    alert: {
      border: 'border-rose-500/50',
      bg: 'bg-rose-950/30',
      text: 'text-rose-400',
      gauge: 'bg-rose-500',
      badge: 'bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse',
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <div
      className={`p-3 rounded-xl border ${currentStyle.border} ${currentStyle.bg} backdrop-blur-sm transition-all shadow-sm flex flex-col justify-between`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between gap-1 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          {symbolTex && (
            <span className="text-slate-300 text-xs font-mono inline-flex items-center">
              <MathRenderer math={symbolTex} inline />
            </span>
          )}
          <span className="text-xs font-medium text-slate-400 truncate">
            {isAr ? labelAr : labelEn}
          </span>
        </div>

        {status !== 'normal' && (
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${currentStyle.badge}`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1.5 my-0.5">
        <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${currentStyle.text}`}>
          {formattedValue}
        </span>
        {unit && (
          <span className="text-xs font-semibold text-slate-400 font-sans">
            {unit}
          </span>
        )}
      </div>

      {percent !== null && (
        <div className="mt-2 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${currentStyle.gauge} transition-all duration-300 rounded-full`}
            style={{ width: `${percent}%` }}
          />
        </div>
      )}
    </div>
  );
};
