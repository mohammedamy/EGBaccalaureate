import React, { useState, useEffect } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import type { ThemeMode } from '../types/curriculum';
import { desmosPresets, type DesmosPreset } from '../data/desmosPresets';
import { MathRenderer } from './MathRenderer';
import {
  X,
  Maximize2,
  Minimize2,
  Minus,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Calculator,
  Box,
  TrendingUp,
  Compass,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  RotateCcw
} from 'lucide-react';

export type DesmosMode = '2d' | '3d' | 'scientific' | 'geometry';
export type DesmosLayout = 'floating' | 'modal' | 'minimized';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: ThemeMode;
  initialMode?: DesmosMode;
  initialPresetId?: string;
  layout?: DesmosLayout;
  onLayoutChange?: (layout: DesmosLayout) => void;
}

const DESMOS_URLS: Record<DesmosMode, { embed: string; external: string }> = {
  '2d': {
    embed: 'https://www.desmos.com/calculator?embed',
    external: 'https://www.desmos.com/calculator'
  },
  '3d': {
    embed: 'https://www.desmos.com/3d?embed',
    external: 'https://www.desmos.com/3d'
  },
  'scientific': {
    embed: 'https://www.desmos.com/scientific?embed',
    external: 'https://www.desmos.com/scientific'
  },
  'geometry': {
    embed: 'https://www.desmos.com/geometry?embed',
    external: 'https://www.desmos.com/geometry'
  }
};

export const DesmosSuite: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme,
  initialMode = '2d',
  initialPresetId,
  layout: controlledLayout,
  onLayoutChange
}) => {
  const t = translations[lang];
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isAr = lang === 'ar';

  const [mode, setMode] = useState<DesmosMode>(initialMode);
  const [internalLayout, setInternalLayout] = useState<DesmosLayout>('floating');
  const [isPresetsOpen, setIsPresetsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedPresetId, setCopiedPresetId] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  const [isLoadingIframe, setIsLoadingIframe] = useState<boolean>(true);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const activeLayout = controlledLayout ?? internalLayout;

  const updateLayout = (newLayout: DesmosLayout) => {
    if (onLayoutChange) {
      onLayoutChange(newLayout);
    } else {
      setInternalLayout(newLayout);
    }
  };

  useEffect(() => {
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialMode]);

  useEffect(() => {
    if (initialPresetId) {
      const found = desmosPresets.find((p) => p.id === initialPresetId);
      if (found) {
        setMode(found.mode);
        setIsPresetsOpen(true);
      }
    }
  }, [initialPresetId]);

  // Loading indicator for iframe when mode changes
  const handleModeChange = (newMode: DesmosMode) => {
    if (newMode !== mode) {
      setIsLoadingIframe(true);
      setMode(newMode);
      setIframeKey((prev) => prev + 1);
    }
  };

  const handleCopyPreset = async (preset: DesmosPreset) => {
    const textToCopy = preset.expressions.join('\n');
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedPresetId(preset.id);
      setCopiedNotification(
        isAr
          ? `تم نسخ ${preset.expressions.length} معادلة إلى الحافظة! الصقها (Ctrl+V) في ديسموس.`
          : `Copied ${preset.expressions.length} expressions! Paste (Ctrl+V) into Desmos.`
      );
      setTimeout(() => setCopiedPresetId(null), 2500);
      setTimeout(() => setCopiedNotification(null), 4000);
    } catch {
      // Fallback
    }
  };

  const handleApplyPreset = (preset: DesmosPreset) => {
    handleModeChange(preset.mode);
    handleCopyPreset(preset);
  };

  const reloadIframe = () => {
    setIsLoadingIframe(true);
    setIframeKey((prev) => prev + 1);
  };

  const filteredPresets = desmosPresets.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  if (!isOpen) return null;

  // Render Minimized Pill Dock
  if (activeLayout === 'minimized') {
    return (
      <aside
        aria-label={t.desmosCalculator}
        className={`fixed bottom-4 ${isAr ? 'left-4' : 'right-4'} z-50 flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-yellow-300'
            : isLight
            ? 'bg-white/95 border-indigo-200 text-slate-800 shadow-indigo-100/50'
            : 'bg-slate-900/95 border-indigo-500/40 text-white shadow-black/80'
        }`}
      >
        <button
          type="button"
          onClick={() => updateLayout('floating')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
            isContrast
              ? 'hover:bg-yellow-950/40 text-yellow-400'
              : isLight
              ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80'
              : 'bg-indigo-950/60 hover:bg-indigo-900 text-indigo-300 border border-indigo-700/50'
          }`}
          title={isAr ? 'استعادة نافذة ديسموس' : 'Restore Desmos Calculator'}
        >
          <Calculator className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold">
            {mode === '2d'
              ? t.desmosGraphing2D
              : mode === '3d'
              ? t.desmosGraphing3D
              : mode === 'scientific'
              ? t.desmosScientific
              : t.desmosGeometry}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
            isContrast ? 'bg-yellow-400 text-black' : isLight ? 'bg-indigo-600 text-white' : 'bg-indigo-500/30 text-indigo-200'
          }`}>
            {mode.toUpperCase()}
          </span>
        </button>

        <button
          type="button"
          onClick={() => updateLayout('modal')}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            isContrast ? 'hover:bg-zinc-800 text-white' : isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-slate-800 text-slate-300'
          }`}
          title={t.desmosExpandModal}
          aria-label={t.desmosExpandModal}
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onClose}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            isContrast ? 'hover:bg-red-950 text-red-400' : isLight ? 'hover:bg-red-50 text-red-600' : 'hover:bg-red-900/40 text-red-400'
          }`}
          title={t.desmosClose}
          aria-label={t.desmosClose}
        >
          <X className="w-4 h-4" />
        </button>
      </aside>
    );
  }

  // Common inner calculator frame & controls
  const isModal = activeLayout === 'modal';

  return (
    <div
      role={isModal ? 'dialog' : undefined}
      aria-modal={isModal ? 'true' : undefined}
      aria-label={t.desmosCalculator}
      className={`no-print transition-all duration-300 ${
        isModal
          ? 'fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in'
          : `fixed bottom-3 ${isAr ? 'left-3' : 'right-3'} z-50 max-w-full w-[95vw] sm:w-[620px] md:w-[680px] h-[580px] max-h-[88vh] rounded-2xl shadow-2xl border flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300 ${
              isContrast
                ? 'bg-black border-2 border-yellow-400 text-yellow-300 shadow-yellow-400/20'
                : isLight
                ? 'bg-white border-slate-300 text-slate-900 shadow-2xl shadow-indigo-200/50'
                : 'bg-slate-950 border-slate-800 text-slate-100 shadow-2xl shadow-black/80'
            }`
      }`}
    >
      <div
        className={
          isModal
            ? `relative w-full max-w-6xl h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
                isContrast
                  ? 'bg-black border-2 border-yellow-400 text-yellow-300'
                  : isLight
                  ? 'bg-white border-slate-300 text-slate-900'
                  : 'bg-slate-950 border-slate-800 text-slate-100'
              }`
            : 'flex-1 flex flex-col h-full overflow-hidden'
        }
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-3 sm:px-4 py-2.5 border-b select-none shrink-0 ${
            isContrast
              ? 'border-yellow-400/80 bg-zinc-950'
              : isLight
              ? 'border-slate-200 bg-slate-50/90'
              : 'border-slate-800 bg-slate-900/90'
          }`}
        >
          {/* Left / Start: Title & Logo */}
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            <div className={`p-1.5 rounded-xl ${
              isContrast ? 'bg-yellow-400 text-black' : 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-sm'
            }`}>
              <Calculator className="w-4 h-4" />
            </div>
            <div className="truncate">
              <h2 className="font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
                <span>{t.desmosCalculator}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-black hidden md:inline-block ${
                  isContrast ? 'bg-yellow-400 text-black' : isLight ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-950 text-indigo-300 border border-indigo-800'
                }`}>
                  v2026
                </span>
              </h2>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className={`flex items-center p-0.5 rounded-xl border ${
            isContrast ? 'border-yellow-400 bg-black' : isLight ? 'border-slate-300 bg-white' : 'border-slate-800 bg-slate-950'
          }`}>
            <button
              type="button"
              onClick={() => handleModeChange('2d')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all flex items-center gap-1 cursor-pointer ${
                mode === '2d'
                  ? isContrast
                    ? 'bg-yellow-400 text-black'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.desmosGraphing2D}
            >
              <TrendingUp className="w-3 h-3" />
              <span>2D</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('3d')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all flex items-center gap-1 cursor-pointer ${
                mode === '3d'
                  ? isContrast
                    ? 'bg-yellow-400 text-black'
                    : 'bg-cyan-500 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.desmosGraphing3D}
            >
              <Box className="w-3 h-3" />
              <span>3D</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('scientific')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all flex items-center gap-1 cursor-pointer ${
                mode === 'scientific'
                  ? isContrast
                    ? 'bg-yellow-400 text-black'
                    : 'bg-emerald-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.desmosScientific}
            >
              <Calculator className="w-3 h-3" />
              <span className="hidden sm:inline">{t.desmosScientific}</span>
              <span className="sm:hidden">Sci</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('geometry')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all flex items-center gap-1 cursor-pointer ${
                mode === 'geometry'
                  ? isContrast
                    ? 'bg-yellow-400 text-black'
                    : 'bg-amber-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.desmosGeometry}
            >
              <Compass className="w-3 h-3" />
              <span className="hidden sm:inline">{t.desmosGeometry}</span>
              <span className="sm:hidden">Geo</span>
            </button>
          </div>

          {/* Right / End: Window Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Presets Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsPresetsOpen((prev) => !prev)}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-all flex items-center gap-1 cursor-pointer ${
                isPresetsOpen
                  ? isContrast
                    ? 'bg-yellow-400 text-black border-yellow-300'
                    : 'bg-indigo-600/20 text-indigo-400 border-indigo-500/40'
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title={t.desmosCurriculumPresets}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">{isAr ? 'نماذج المنهج' : 'Presets'}</span>
              <span className="text-[10px] font-mono px-1 rounded bg-black/20 font-black">
                {desmosPresets.length}
              </span>
            </button>

            {/* Refresh Frame */}
            <button
              type="button"
              onClick={reloadIframe}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400'
              }`}
              title={isAr ? 'إعادة تحميل الحاسبة' : 'Reload Calculator'}
              aria-label={isAr ? 'إعادة تحميل الحاسبة' : 'Reload Calculator'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* External Tab */}
            <a
              href={DESMOS_URLS[mode].external}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1.5 rounded-lg transition-colors ${
                isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400'
              }`}
              title={t.desmosOpenExternal}
              aria-label={t.desmosOpenExternal}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Maximize / Dock toggle */}
            <button
              type="button"
              onClick={() => updateLayout(isModal ? 'floating' : 'modal')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400'
              }`}
              title={isModal ? t.desmosDockFloating : t.desmosExpandModal}
              aria-label={isModal ? t.desmosDockFloating : t.desmosExpandModal}
            >
              {isModal ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Minimize to dock pill */}
            <button
              type="button"
              onClick={() => updateLayout('minimized')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400'
              }`}
              title={t.desmosMinimize}
              aria-label={t.desmosMinimize}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isContrast ? 'hover:bg-red-950 text-red-400' : isLight ? 'hover:bg-red-100 text-red-600' : 'hover:bg-red-900/40 text-red-400'
              }`}
              title={t.desmosClose}
              aria-label={t.desmosClose}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copied Notification Toast */}
        {copiedNotification && (
          <div className="bg-emerald-600 text-white text-xs py-1.5 px-4 flex items-center justify-between font-bold animate-in fade-in duration-200 shrink-0">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-200" />
              <span>{copiedNotification}</span>
            </div>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-black/30 rounded border border-white/30">
              Ctrl+V / ⌘V
            </kbd>
          </div>
        )}

        {/* Main Content Area: Calculator Frame & Optional Presets Drawer */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Desmos Iframe Container */}
          <div className="flex-1 relative bg-black/90 flex flex-col">
            {isLoadingIframe && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950/80 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-full border-3 border-indigo-500 border-t-transparent animate-spin" />
                <p className="text-xs font-bold text-slate-300 animate-pulse">
                  {isAr ? 'جاري تحميل بيئة ديسموس...' : 'Loading Desmos Environment...'}
                </p>
              </div>
            )}
            <iframe
              key={`${mode}-${iframeKey}`}
              src={DESMOS_URLS[mode].embed}
              title={`Desmos ${mode.toUpperCase()} Calculator`}
              className="w-full h-full border-none flex-1"
              allow="clipboard-read; clipboard-write; fullscreen"
              onLoad={() => setIsLoadingIframe(false)}
            />
          </div>

          {/* Collapsible Presets Drawer */}
          {isPresetsOpen && (
            <div
              className={`w-72 sm:w-80 md:w-96 border-s flex flex-col z-20 transition-all shadow-xl select-none ${
                isContrast
                  ? 'bg-zinc-950 border-yellow-400/80 text-yellow-300'
                  : isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-100'
              }`}
            >
              {/* Drawer Header */}
              <div className={`p-3 border-b flex items-center justify-between gap-2 shrink-0 ${
                isLight ? 'border-slate-200 bg-white' : 'border-slate-800 bg-slate-950'
              }`}>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-extrabold text-xs">
                    {t.desmosCurriculumPresets}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPresetsOpen(false)}
                  className="p-1 rounded hover:bg-slate-800/50 text-slate-400 hover:text-slate-200"
                  aria-label="Close presets"
                >
                  {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="p-2 border-b flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-[10px] font-bold">
                {[
                  { id: 'all', labelEn: 'All', labelAr: 'الكل' },
                  { id: 'calculus', labelEn: 'Calculus', labelAr: 'التفاضل' },
                  { id: 'solid_3d', labelEn: '3D Solid', labelAr: 'الفراغية' },
                  { id: 'statics_dynamics', labelEn: 'Applied', labelAr: 'التطبيقية' },
                  { id: 'scientific', labelEn: 'Scientific', labelAr: 'العلمية' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2 py-1 rounded-md whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? isContrast
                          ? 'bg-yellow-400 text-black font-black'
                          : 'bg-indigo-600 text-white font-extrabold shadow-xs'
                        : isLight
                        ? 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isAr ? cat.labelAr : cat.labelEn}
                  </button>
                ))}
              </div>

              {/* Presets List */}
              <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5 text-xs">
                <div className={`p-2 rounded-xl text-[11px] leading-relaxed flex items-start gap-2 ${
                  isLight ? 'bg-indigo-50/80 text-indigo-950 border border-indigo-200' : 'bg-indigo-950/40 text-indigo-200 border border-indigo-800/50'
                }`}>
                  <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? 'اختر أي نموذج وسيتم ضبط الوضع ونسخ معادلاته تلقائياً لتلصقها في شريط ديسموس.'
                      : 'Select any preset to auto-switch mode and copy its equations ready to paste.'}
                  </span>
                </div>

                {filteredPresets.map((preset) => {
                  const isCopied = copiedPresetId === preset.id;
                  return (
                    <div
                      key={preset.id}
                      className={`p-2.5 rounded-xl border transition-all hover:border-indigo-400/80 flex flex-col gap-2 ${
                        isContrast
                          ? 'bg-black border-yellow-400/60'
                          : isLight
                          ? 'bg-white border-slate-200 hover:shadow-md'
                          : 'bg-slate-950/80 border-slate-800/90 hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-black uppercase ${
                              preset.mode === '3d'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                                : preset.mode === '2d'
                                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            }`}>
                              {preset.mode}
                            </span>
                            <h4 className="font-extrabold text-xs">
                              {isAr ? preset.titleAr : preset.titleEn}
                            </h4>
                          </div>
                          <p className={`text-[11px] leading-snug ${
                            isLight ? 'text-slate-600' : 'text-slate-400'
                          }`}>
                            {isAr ? preset.descAr : preset.descEn}
                          </p>
                        </div>
                      </div>

                      {/* Formula Preview */}
                      {preset.latex && (
                        <div className={`p-1.5 rounded-lg text-center overflow-x-auto ${
                          isLight ? 'bg-slate-100' : 'bg-slate-900/90 border border-slate-800/80'
                        }`}>
                          <MathRenderer math={preset.latex} />
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleApplyPreset(preset)}
                          className={`flex-1 py-1 px-2.5 rounded-lg text-[11px] font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            isContrast
                              ? 'bg-yellow-400 text-black hover:bg-yellow-300 font-black'
                              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                          }`}
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>{isAr ? 'تطبيق النموذج' : 'Apply Preset'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleCopyPreset(preset)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-600 text-white border-emerald-500'
                              : isLight
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                          }`}
                          title={isCopied ? t.desmosCopied : t.desmosCopyExpr}
                          aria-label={isCopied ? t.desmosCopied : t.desmosCopyExpr}
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Utility / Quick Tips Bar */}
        <div
          className={`px-3 sm:px-4 py-1.5 border-t text-[11px] flex items-center justify-between gap-3 shrink-0 ${
            isContrast
              ? 'border-yellow-400/80 bg-zinc-950 text-yellow-300'
              : isLight
              ? 'border-slate-200 bg-slate-50 text-slate-500'
              : 'border-slate-800 bg-slate-900/70 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-semibold text-slate-300">Desmos:</span>
            <span className="truncate">{t.desmosShortcutTip}</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] shrink-0">
            <kbd className={`px-1.5 py-0.5 rounded border ${
              isLight ? 'bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'
            }`}>
              Ctrl+D / ⌘D
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
