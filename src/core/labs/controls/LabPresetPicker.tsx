import React from 'react';
import { Bookmark, Sparkles } from 'lucide-react';
import type { LabPreset } from '../types';
import type { ThemeMode } from '../../../types/curriculum';

interface LabPresetPickerProps<TParams = Record<string, any>> {
  presets: LabPreset<TParams>[];
  activePresetId: string | null;
  lang: 'en' | 'ar';
  theme?: ThemeMode;
  onSelectPreset: (preset: LabPreset<TParams>) => void;
}

export const LabPresetPicker = <TParams extends Record<string, any>>({
  presets,
  activePresetId,
  lang,
  theme = 'dark',
  onSelectPreset,
}: LabPresetPickerProps<TParams>): React.ReactElement | null => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  if (!presets || presets.length === 0) return null;

  return (
    <div className="space-y-2" dir={isAr ? 'rtl' : 'ltr'}>
      <div className={`flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider ${
        isLight ? 'text-slate-700' : 'text-slate-300'
      }`}>
        <Bookmark className={`w-4 h-4 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
        <span>{isAr ? 'السيناريوهات الجاهزة والتجارب المعيارية:' : 'Standard Presets & Benchmarks:'}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {presets.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className={`w-full text-left rtl:text-right px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between gap-2 border cursor-pointer ${
                isActive
                  ? isLight
                    ? 'bg-cyan-50 text-cyan-950 border-cyan-500 shadow-xs'
                    : 'bg-cyan-500/20 text-cyan-200 border-cyan-500/60 shadow-sm shadow-cyan-500/20'
                  : isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs'
                  : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:border-slate-600'
              }`}
              title={isAr ? preset.descriptionAr : preset.descriptionEn}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {preset.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-md font-mono font-bold shrink-0 ${
                    isActive
                      ? isLight
                        ? 'bg-cyan-200 text-cyan-950'
                        : 'bg-cyan-400/30 text-cyan-100'
                      : isLight
                      ? 'bg-slate-100 text-slate-700'
                      : 'bg-slate-800 text-cyan-300 border border-slate-700'
                  }`}>
                    {preset.badge}
                  </span>
                )}
                <span className="leading-snug truncate">{isAr ? preset.nameAr : preset.nameEn}</span>
              </div>
              {isActive && <Sparkles className={`w-4 h-4 shrink-0 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
