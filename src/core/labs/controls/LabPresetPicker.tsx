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
    <div className="space-y-1.5" dir={isAr ? 'rtl' : 'ltr'}>
      <div className={`flex items-center gap-1.5 text-xs font-bold ${
        isLight ? 'text-slate-600' : 'text-slate-400'
      }`}>
        <Bookmark className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
        <span>{isAr ? 'السيناريوهات الجاهزة والتجارب المعيارية:' : 'Standard Presets & Benchmarks:'}</span>
      </div>

      <div className={`flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin ${
        isLight ? 'scrollbar-thumb-slate-300' : 'scrollbar-thumb-slate-700'
      }`}>
        {presets.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border shrink-0 ${
                isActive
                  ? isLight
                    ? 'bg-cyan-50 text-cyan-950 border-cyan-500 font-bold shadow-xs'
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
              title={isAr ? preset.descriptionAr : preset.descriptionEn}
            >
              {preset.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isActive
                    ? isLight
                      ? 'bg-cyan-200 text-cyan-950 font-bold'
                      : 'bg-cyan-400/30 text-cyan-100 font-bold'
                    : isLight
                    ? 'bg-slate-100 text-slate-700'
                    : 'bg-cyan-400/20 text-cyan-200'
                }`}>
                  {preset.badge}
                </span>
              )}
              <span>{isAr ? preset.nameAr : preset.nameEn}</span>
              {isActive && <Sparkles className={`w-3 h-3 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
