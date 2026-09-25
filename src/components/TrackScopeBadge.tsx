import React from 'react';
import type { TrackScope, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { Globe, Atom, Landmark, Dna, Calculator } from 'lucide-react';
import { getTrackScopeInfo } from '../data/trackScopeData';

interface Props {
  scope: TrackScope;
  lang?: Language;
  theme?: ThemeMode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  showDetails?: boolean;
  className?: string;
}

export const TrackScopeBadge: React.FC<Props> = ({
  scope,
  lang = 'ar',
  theme = 'dark',
  size = 'sm',
  showIcon = true,
  showDetails = false,
  className = '',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const info = getTrackScopeInfo(scope, isArabic ? 'ar' : 'en');

  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3 py-1.5 gap-2 font-bold',
    lg: 'text-sm sm:text-base px-4 py-2 gap-2.5 font-extrabold',
  }[size];

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  // Contrast-safe color schemes
  let colorClass = '';
  let iconComponent = <Globe className={iconSizes} />;

  if (scope === 'scientific_sciences') {
    iconComponent = <Dna className={iconSizes} />;
    if (isContrast) {
      colorClass = 'bg-black text-teal-300 border-2 border-teal-400 shadow-none';
    } else if (isLight) {
      colorClass = 'bg-teal-100 text-teal-900 border-teal-300 shadow-xs hover:bg-teal-200/70';
    } else {
      colorClass = 'bg-teal-950/80 text-teal-300 border-teal-700/60 shadow-xs hover:bg-teal-900/60';
    }
  } else if (scope === 'scientific_math') {
    iconComponent = <Calculator className={iconSizes} />;
    if (isContrast) {
      colorClass = 'bg-black text-indigo-300 border-2 border-indigo-400 shadow-none';
    } else if (isLight) {
      colorClass = 'bg-indigo-100 text-indigo-900 border-indigo-300 shadow-xs hover:bg-indigo-200/70';
    } else {
      colorClass = 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60 shadow-xs hover:bg-indigo-900/60';
    }
  } else if (scope === 'scientific') {
    iconComponent = <Atom className={iconSizes} />;
    if (isContrast) {
      colorClass = 'bg-black text-cyan-300 border-2 border-cyan-400 shadow-none';
    } else if (isLight) {
      colorClass = 'bg-sky-100 text-sky-900 border-sky-300 shadow-xs hover:bg-sky-200/70';
    } else {
      colorClass = 'bg-sky-950/80 text-sky-300 border-sky-700/60 shadow-xs hover:bg-sky-900/60';
    }
  } else if (scope === 'literary') {
    iconComponent = <Landmark className={iconSizes} />;
    if (isContrast) {
      colorClass = 'bg-black text-yellow-300 border-2 border-yellow-400 shadow-none';
    } else if (isLight) {
      colorClass = 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs hover:bg-amber-200/70';
    } else {
      colorClass = 'bg-amber-950/80 text-amber-300 border-amber-700/60 shadow-xs hover:bg-amber-900/60';
    }
  } else {
    // common
    iconComponent = <Globe className={iconSizes} />;
    if (isContrast) {
      colorClass = 'bg-black text-emerald-300 border-2 border-emerald-400 shadow-none';
    } else if (isLight) {
      colorClass = 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-xs hover:bg-emerald-200/70';
    } else {
      colorClass = 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60 shadow-xs hover:bg-emerald-900/60';
    }
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold transition-colors duration-150 select-none ${sizeClasses} ${colorClass} ${className}`}
      title={info.description}
    >
      {showIcon && <span className="shrink-0">{iconComponent}</span>}
      <span className="truncate">{info.label}</span>
      {showDetails && (
        <span className="opacity-75 text-[10px] hidden sm:inline">
          ({info.fullLabel})
        </span>
      )}
    </span>
  );
};

export default TrackScopeBadge;
