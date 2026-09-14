import React from 'react';
import { Bookmark, Sparkles } from 'lucide-react';
import type { LabPreset } from '../types';

interface LabPresetPickerProps<TParams = Record<string, any>> {
  presets: LabPreset<TParams>[];
  activePresetId: string | null;
  lang: 'en' | 'ar';
  onSelectPreset: (preset: LabPreset<TParams>) => void;
}

export const LabPresetPicker = <TParams extends Record<string, any>>({
  presets,
  activePresetId,
  lang,
  onSelectPreset,
}: LabPresetPickerProps<TParams>): React.ReactElement | null => {
  const isAr = lang === 'ar';

  if (!presets || presets.length === 0) return null;

  return (
    <div className="space-y-1.5" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
        <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
        <span>{isAr ? 'السيناريوهات الجاهزة والتجارب المعيارية:' : 'Standard Presets & Benchmarks:'}</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
        {presets.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border shrink-0 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
              title={isAr ? preset.descriptionAr : preset.descriptionEn}
            >
              {preset.badge && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-200 font-mono">
                  {preset.badge}
                </span>
              )}
              <span>{isAr ? preset.nameAr : preset.nameEn}</span>
              {isActive && <Sparkles className="w-3 h-3 text-cyan-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
