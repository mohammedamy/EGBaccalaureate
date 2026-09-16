import React, { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type {
  LabDefinition,
  LabTelemetryMetric,
} from './types';
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Activity,
  Award,
  AlertTriangle,
  BookOpen,
  FileSpreadsheet,
  Sliders,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { LabSlider } from './controls/LabSlider';
import { LabTelemetryCard } from './controls/LabTelemetryCard';
import { LabPresetPicker } from './controls/LabPresetPicker';
import { LabFormulaBar } from './controls/LabFormulaBar';
import { POEController } from '../pedagogy/POEController';
import { LabNotebook } from '../pedagogy/LabNotebook';
import { InstrumentRack } from '../instruments/InstrumentRack';
import type { DMMReading } from '../instruments/DigitalMultimeter';
import type { WaveformSignal } from '../instruments/DualTraceOscilloscope';
import type { useVirtualLab } from './useVirtualLab';
import { toHindiDigits } from '../../utils/arabicNumerals';

interface VirtualLabShellProps<
  TParams extends Record<string, any> = Record<string, any>,
  TState extends Record<string, any> = Record<string, any>
> {
  definition: LabDefinition<TParams, TState>;
  lang: 'en' | 'ar';
  theme?: ThemeMode;
  lab: ReturnType<typeof useVirtualLab<TParams, TState>>;
  telemetry?: LabTelemetryMetric[];
  // Viewport slot
  children: React.ReactNode;
  // Custom slots
  renderCustomControls?: () => React.ReactNode;
  // Live feeds for instruments & notebook
  multimeterReading?: DMMReading;
  oscilloscopeCh1?: WaveformSignal;
  oscilloscopeCh2?: WaveformSignal;
  currentXValue?: number;
  currentYValue?: number;
  onResetSimulation?: () => void;
  defaultFullscreen?: boolean;
}

export const VirtualLabShell = <
  TParams extends Record<string, any>,
  TState extends Record<string, any>
>({
  definition,
  lang,
  theme = 'dark',
  lab,
  telemetry = [],
  children,
  renderCustomControls,
  multimeterReading,
  oscilloscopeCh1,
  oscilloscopeCh2,
  currentXValue,
  currentYValue,
  onResetSimulation,
  defaultFullscreen = true,
}: VirtualLabShellProps<TParams, TState>): React.ReactElement => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [isFullscreen, setIsFullscreen] = useState<boolean>(defaultFullscreen);
  const [showObjectivesModal, setShowObjectivesModal] = useState<boolean>(false);
  const [showSafetyModal, setShowSafetyModal] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Fullscreen keyboard listener (Esc to exit) and body scroll lock
  useEffect(() => {
    if (isFullscreen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsFullscreen(false);
          if (document.fullscreenElement) {
            document.exitFullscreen?.().catch(() => {});
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isFullscreen]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => {
      const next = !prev;
      if (!next && document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
      return next;
    });
  }, []);

  // Subject gradient styling
  const subjectThemes = {
    physics: {
      badge: isLight
        ? 'bg-cyan-100 text-cyan-800 border-cyan-300'
        : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      gradient: isLight
        ? 'from-cyan-50/90 via-sky-50/60 to-white'
        : 'from-cyan-500/10 via-sky-500/5 to-transparent',
      border: isLight ? 'border-cyan-200' : 'border-cyan-500/30',
      accent: isLight ? 'text-cyan-700' : 'text-cyan-400',
    },
    chemistry: {
      badge: isLight
        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      gradient: isLight
        ? 'from-emerald-50/90 via-teal-50/60 to-white'
        : 'from-emerald-500/10 via-teal-500/5 to-transparent',
      border: isLight ? 'border-emerald-200' : 'border-emerald-500/30',
      accent: isLight ? 'text-emerald-700' : 'text-emerald-400',
    },
    biology: {
      badge: isLight
        ? 'bg-rose-100 text-rose-800 border-rose-300'
        : 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      gradient: isLight
        ? 'from-rose-50/90 via-pink-50/60 to-white'
        : 'from-rose-500/10 via-pink-500/5 to-transparent',
      border: isLight ? 'border-rose-200' : 'border-rose-500/30',
      accent: isLight ? 'text-rose-700' : 'text-rose-400',
    },
    mathematics: {
      badge: isLight
        ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
        : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      gradient: isLight
        ? 'from-indigo-50/90 via-violet-50/60 to-white'
        : 'from-indigo-500/10 via-violet-500/5 to-transparent',
      border: isLight ? 'border-indigo-200' : 'border-indigo-500/30',
      accent: isLight ? 'text-indigo-700' : 'text-indigo-400',
    },
  };

  const st = subjectThemes[definition.subject];

  const handleReset = () => {
    lab.resetParams();
    onResetSimulation?.();
  };

  // Format clock time
  const formatSeconds = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = (s % 60).toFixed(1);
    const timeStr = `${mins}:${secs.padStart(4, '0')}`;
    return isAr ? toHindiDigits(timeStr) : timeStr;
  };

  // Helper: Modal Renderers
  const renderObjectivesModal = () => {
    if (!showObjectivesModal) return null;
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div
          className={`w-full max-w-lg border rounded-3xl p-6 shadow-2xl space-y-4 ${
            isLight ? 'bg-white border-cyan-300 text-slate-900' : 'bg-slate-900 border-cyan-500/40 text-slate-100'
          }`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className={`flex items-center justify-between border-b pb-3 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold">
                {isAr ? 'مخرجات التعلم المستهدفة' : 'Target Learning Objectives'}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowObjectivesModal(false)}
              className={`p-1 rounded cursor-pointer ${isLight ? 'text-slate-400 hover:text-slate-700' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {definition.objectives.map((obj, idx) => (
              <div
                key={obj.id || idx}
                className={`flex items-start gap-3 p-3 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
                }`}
              >
                <span className={`w-5 h-5 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                  isLight ? 'bg-cyan-100 text-cyan-800' : 'bg-cyan-500/20 text-cyan-400'
                }`}>
                  {idx + 1}
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  {isAr ? obj.textAr : obj.textEn}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => setShowObjectivesModal(false)}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer hover:bg-cyan-400 transition-colors"
            >
              {isAr ? 'حسناً، فهمت' : 'Got it'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderSafetyModal = () => {
    if (!showSafetyModal || !definition.safetyWarnings) return null;
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div
          className={`w-full max-w-lg border rounded-3xl p-6 shadow-2xl space-y-4 ${
            isLight ? 'bg-white border-amber-300 text-slate-900' : 'bg-slate-900 border-amber-500/40 text-slate-100'
          }`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className={`flex items-center justify-between border-b pb-3 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-2.5 text-amber-500">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg font-bold">
                {isAr ? 'إرشادات السلامة المعملية' : 'Laboratory Safety Rules'}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowSafetyModal(false)}
              className={`p-1 rounded cursor-pointer ${isLight ? 'text-slate-400 hover:text-slate-700' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {definition.safetyWarnings.map((warn) => (
              <div
                key={warn.id}
                className={`p-3.5 rounded-xl border text-xs sm:text-sm space-y-1 ${
                  isLight ? 'bg-amber-50/90 border-amber-200' : 'bg-amber-950/20 border-amber-500/30'
                }`}
              >
                <h4 className={`font-bold ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                  {isAr ? warn.titleAr : warn.titleEn}
                </h4>
                <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                  {isAr ? warn.messageAr : warn.messageEn}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => setShowSafetyModal(false)}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer hover:bg-amber-400 transition-colors"
            >
              {isAr ? 'موافق' : 'Acknowledge'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPoeModal = () => {
    if (!lab.poeState.isDrawerOpen || !lab.poeState.activePrompt) return null;
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6">
        <div className="w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl border shadow-2xl animate-fadeIn p-4 sm:p-6 bg-slate-900 border-indigo-500/40 text-slate-100">
          <div className="flex justify-end pb-2">
            <button
              type="button"
              onClick={lab.poeState.toggleDrawer}
              className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <POEController
            prompt={lab.poeState.activePrompt}
            lang={lang}
            theme={theme}
            isUnlocked={lab.poeState.isUnlocked}
            onUnlockLab={lab.poeState.unlockLab}
            onComplete={() => {}}
          />
        </div>
      </div>
    );
  };

  const renderNotebookModal = () => {
    if (!lab.notebookState.isOpen) return null;
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6">
        <div className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl animate-fadeIn p-4 sm:p-6 ${
          isLight
            ? 'bg-white border-emerald-300 text-slate-900'
            : 'bg-slate-900 border-emerald-500/40 text-slate-100'
        }`}>
          <div className={`flex items-center justify-between border-b pb-2 mb-3 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <FileSpreadsheet className={`w-4 h-4 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
              <h3 className={`text-xs font-black uppercase tracking-wider ${
                isLight ? 'text-emerald-800' : 'text-emerald-300'
              }`}>
                {isAr ? 'دفتر المعمل الرقمي والتحليل الإحصائي' : 'Digital Lab Notebook & Linear Regression'}
              </h3>
            </div>
            <button
              type="button"
              onClick={lab.notebookState.close}
              className={`p-1 rounded cursor-pointer ${isLight ? 'text-slate-400 hover:text-slate-700' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <LabNotebook
            lang={lang}
            xLabel={definition.notebookConfig?.xLabelEn || 'Independent Variable (X)'}
            xUnit={definition.notebookConfig?.xUnit || ''}
            yLabel={definition.notebookConfig?.yLabelEn || 'Dependent Variable (Y)'}
            yUnit={definition.notebookConfig?.yUnit || ''}
            currentXValue={currentXValue}
            currentYValue={currentYValue}
            initialPoints={lab.notebookState.points}
            onDataChange={lab.notebookState.setPoints}
          />
        </div>
      </div>
    );
  };

  // =========================================================================
  // FULL-SCREEN WORKSTATION MODE (All items in one screen, zero window scroll)
  // =========================================================================
  if (isFullscreen) {
    return (
      <div
        className={`fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 transition-colors ${
          isContrast
            ? 'bg-black text-white'
            : isLight
            ? 'bg-slate-100 text-slate-900'
            : 'bg-slate-950 text-slate-100'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* 1. Standardized Workstation Top Bar */}
        <div
          className={`h-12 sm:h-13 shrink-0 px-3 py-1.5 rounded-2xl border ${st.border} bg-gradient-to-r ${st.gradient} flex items-center justify-between gap-2 shadow-sm backdrop-blur-md z-10`}
        >
          {/* Left: Identity */}
          <div className="flex items-center gap-2 min-w-0">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border shrink-0 ${st.badge}`}>
              {definition.subject}
            </span>
            {definition.chapterRef && (
              <span className={`hidden md:inline px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border shrink-0 ${
                isLight ? 'bg-white text-slate-700 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {definition.chapterRef}
              </span>
            )}
            <h2 className={`text-xs sm:text-sm md:text-base font-black tracking-tight truncate ${isLight ? 'text-slate-900' : 'text-white'}`} title={isAr ? definition.titleAr : definition.titleEn}>
              {isAr ? definition.titleAr : definition.titleEn}
            </h2>
            {definition.safetyWarnings && definition.safetyWarnings.length > 0 && (
              <button
                type="button"
                onClick={() => setShowSafetyModal(true)}
                className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all shrink-0 cursor-pointer"
              >
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                <span className="hidden sm:inline">{isAr ? 'السلامة' : 'Safety'}</span>
              </button>
            )}
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Play / Pause */}
            <button
              type="button"
              onClick={lab.togglePlay}
              className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                lab.clock.isPlaying
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {lab.clock.isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">{isAr ? 'إيقاف' : 'Pause'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">{isAr ? 'تشغيل' : 'Run'}</span>
                </>
              )}
            </button>

            {/* Step dt */}
            <button
              type="button"
              onClick={() => lab.stepOnce(0.016)}
              disabled={lab.clock.isPlaying}
              className={`p-1.5 rounded-xl disabled:opacity-30 border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title={isAr ? 'خطوة زمنية واحدة (dt)' : 'Step Forward (dt)'}
            >
              <FastForward className="w-3.5 h-3.5" />
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              disabled={!lab.isDirty}
              className={`px-2.5 py-1.5 rounded-xl disabled:opacity-40 border text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title={isAr ? 'إعادة تعيين المعطيات للوضع الافتراضي' : 'Reset all parameters to default'}
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden md:inline">{isAr ? 'إعادة' : 'Reset'}</span>
            </button>

            {/* Speed Multipliers */}
            <div className={`hidden lg:flex items-center gap-0.5 p-0.5 rounded-xl border text-[11px] font-mono ${
              isLight ? 'bg-white/80 border-slate-200' : 'bg-slate-950/80 border-slate-800'
            }`}>
              {[0.25, 0.5, 1.0, 2.0].map((spd) => (
                <button
                  key={spd}
                  type="button"
                  onClick={() => lab.setSpeedMultiplier(spd)}
                  className={`px-1.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                    lab.clock.speedMultiplier === spd
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-xs'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {spd}×
                </button>
              ))}
            </div>

            {/* Clock & FPS */}
            <div className={`flex items-center gap-1.5 text-[11px] font-mono px-2 py-1 rounded-xl border ${
              isLight
                ? 'bg-white/80 border-slate-200 text-slate-600'
                : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
            }`}>
              <span>t = {formatSeconds(lab.clock.timeElapsed)}s</span>
              <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>•</span>
              <span className={isLight ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold'}>{lab.clock.fps} FPS</span>
            </div>
          </div>

          {/* Right: Goals, POE, Notebook, Audio & Fullscreen Toggle */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowObjectivesModal(true)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1 shadow-sm transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
              title={isAr ? 'أهداف التعلم' : 'Learning Goals'}
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden xl:inline">{isAr ? 'أهداف التعلم' : 'Goals'}</span>
            </button>

            {definition.poePrompts && definition.poePrompts.length > 0 && (
              <button
                type="button"
                onClick={lab.poeState.toggleDrawer}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer ${
                  lab.poeState.isDrawerOpen
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : isLight
                    ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                    : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                }`}
                title={isAr ? 'منهجية الفرضيات (POE)' : 'Hypothesis (POE)'}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">POE</span>
                {!lab.poeState.isUnlocked && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={lab.notebookState.toggle}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer ${
                lab.notebookState.isOpen
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                  : isLight
                  ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              }`}
              title={isAr ? 'دفتر المعمل والبيانات' : 'Lab Notebook'}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{isAr ? 'الدفتر' : 'Notebook'}</span>
              {lab.notebookState.points.length > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isLight ? 'bg-emerald-200 text-emerald-800 font-bold' : 'bg-emerald-400/30 text-white'
                }`}>
                  {lab.notebookState.points.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-1.5 rounded-xl border text-xs transition-all cursor-pointer ${
                soundEnabled
                  ? isLight
                    ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                    : 'bg-slate-900/80 text-cyan-300 border-slate-700'
                  : isLight
                  ? 'bg-white text-slate-400 border-slate-200'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800'
              }`}
              title={soundEnabled ? 'Mute audio' : 'Enable audio'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Fullscreen Minimize Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                isLight
                  ? 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border-cyan-300'
                  : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/50 shadow-xs'
              }`}
              title={isAr ? 'تصغير الشاشة (Esc)' : 'Exit Fullscreen (Esc)'}
            >
              <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{isAr ? 'تصغير' : 'Exit'}</span>
            </button>
          </div>
        </div>

        {/* 2. Main Workstation Body: Left Stage (Viewport & Instruments) + Right Console (Controls & Telemetry) */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 mt-2 overflow-hidden">
          {/* Left Stage */}
          <div className="lg:col-span-8 h-full min-h-0 flex flex-col gap-2 overflow-hidden">
            {definition.keyFormulas && definition.keyFormulas.length > 0 && (
              <div className="shrink-0">
                <LabFormulaBar formulas={definition.keyFormulas} lang={lang} />
              </div>
            )}

            {/* Viewport Slot: fills remaining height without forcing scroll */}
            <div className="flex-1 min-h-0 w-full h-full relative overflow-y-auto flex flex-col rounded-2xl [&>*]:flex-1 [&>*]:!min-h-0 [&>*]:h-full [&>*]:w-full [&>*]:!aspect-auto">
              {children}
            </div>

            {/* Docked Instrument Rack */}
            {definition.supportedInstruments && definition.supportedInstruments.length > 0 && (
              <div className="shrink-0 max-h-48 overflow-y-auto">
                <InstrumentRack
                  lang={lang}
                  supportedInstruments={definition.supportedInstruments}
                  activeInstruments={lab.instruments.activeInstruments}
                  onToggleInstrument={lab.instruments.toggleInstrument}
                  onCloseInstrument={lab.instruments.closeInstrument}
                  multimeterReading={multimeterReading}
                  oscilloscopeCh1={oscilloscopeCh1}
                  oscilloscopeCh2={oscilloscopeCh2}
                  onStopwatchLap={(lapTime) => {
                    lab.notebookState.logDataPoint(
                      parseFloat(lapTime.toFixed(2)),
                      currentYValue ?? 0,
                      'Lap Time'
                    );
                  }}
                />
              </div>
            )}
          </div>

          {/* Right Console */}
          <div className="lg:col-span-4 h-full min-h-0 flex flex-col gap-2 overflow-hidden">
            {/* Presets */}
            {definition.presets && definition.presets.length > 0 && (
              <div className={`p-2.5 rounded-2xl border shadow-sm shrink-0 ${
                isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <LabPresetPicker
                  presets={definition.presets}
                  activePresetId={lab.activePresetId}
                  lang={lang}
                  theme={theme}
                  onSelectPreset={lab.loadPreset}
                />
              </div>
            )}

            {/* Tunable Parameters Card */}
            <div className={`flex-1 min-h-0 flex flex-col p-3 rounded-2xl border shadow-sm overflow-hidden ${
              isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800'
            }`}>
              <div className={`shrink-0 flex items-center justify-between pb-2 border-b ${
                isLight ? 'border-slate-200' : 'border-slate-800'
              }`}>
                <div className="flex items-center gap-2">
                  <Sliders className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
                  <h3 className={`text-xs font-black uppercase tracking-wider ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {isAr ? 'معايير التجربة والمدخلات' : 'Experimental Parameters'}
                  </h3>
                </div>
                {lab.isDirty && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className={`text-[11px] font-bold cursor-pointer ${
                      isLight ? 'text-cyan-700 hover:text-cyan-800' : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    {isAr ? 'استعادة الافتراضي' : 'Reset All'}
                  </button>
                )}
              </div>

              {/* Scrollable Parameter Sliders List */}
              <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2.5 mt-2">
                {Object.keys(definition.paramSchema).map((key) => {
                  const schema = definition.paramSchema[key];
                  if (schema.visibleIf && !schema.visibleIf(lab.params)) {
                    return null;
                  }
                  const val = lab.params[key];

                  if (schema.type === 'number') {
                    return (
                      <LabSlider
                        key={key}
                        id={`param-${key}`}
                        labelEn={schema.labelEn}
                        labelAr={schema.labelAr}
                        symbolTex={schema.symbolTex}
                        value={val}
                        min={schema.min ?? 0}
                        max={schema.max ?? 100}
                        step={schema.step ?? 1}
                        unit={schema.unit}
                        precision={schema.precision ?? 2}
                        defaultValue={schema.defaultValue}
                        lang={lang}
                        theme={theme}
                        disabled={Boolean((schema as any).disabled)}
                        onChange={(newVal) => lab.updateParam(key as keyof TParams, newVal as any)}
                        onReset={() => lab.updateParam(key as keyof TParams, schema.defaultValue as any)}
                      />
                    );
                  }

                  return null;
                })}

                {/* Custom controls slot (e.g. glassware, lenses, reagents) */}
                {renderCustomControls && (
                  <div className={`pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                    {renderCustomControls()}
                  </div>
                )}
              </div>
            </div>

            {/* Real-Time Live Telemetry Card Grid */}
            {telemetry && telemetry.length > 0 && (
              <div className={`shrink-0 p-2.5 rounded-2xl border shadow-sm ${
                isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div className={`flex items-center gap-2 pb-1.5 border-b mb-2 ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <Activity className={`w-3.5 h-3.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                  <h3 className={`text-[11px] font-black uppercase tracking-wider ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {isAr ? 'القياسات الفيزيائية اللحظية' : 'Real-Time Telemetry'}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                  {telemetry.map((metric) => (
                    <LabTelemetryCard
                      key={metric.id}
                      id={metric.id}
                      labelEn={metric.labelEn}
                      labelAr={metric.labelAr}
                      symbolTex={metric.symbolTex}
                      value={metric.value}
                      unit={metric.unit}
                      min={metric.min}
                      max={metric.max}
                      status={metric.status}
                      precision={metric.precision}
                      lang={lang}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Modals: POE, Notebook, Objectives, Safety */}
        {renderPoeModal()}
        {renderNotebookModal()}
        {renderObjectivesModal()}
        {renderSafetyModal()}
      </div>
    );
  }

  // =========================================================================
  // EMBEDDED FALLBACK MODE (with Maximize button in header to enter Fullscreen)
  // =========================================================================
  return (
    <div
      className={`space-y-4 rounded-3xl p-4 sm:p-6 transition-all border shadow-2xl ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-white'
          : isLight
          ? 'bg-white text-slate-900 border-slate-200 shadow-md'
          : 'bg-slate-950/90 text-slate-100 border-slate-800'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Standardized Lab Header */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${st.border} bg-gradient-to-r ${st.gradient} flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm backdrop-blur-md`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider border ${st.badge}`}>
              {definition.subject}
            </span>
            {definition.chapterRef && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isLight ? 'bg-white text-slate-700 border-slate-200 shadow-xs' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                {definition.chapterRef}
              </span>
            )}
            {definition.safetyWarnings && definition.safetyWarnings.length > 0 && (
              <button
                type="button"
                onClick={() => setShowSafetyModal(true)}
                className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'إرشادات السلامة' : 'Safety Notice'}</span>
              </button>
            )}
          </div>

          <h2 className={`text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2 ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            <span>{isAr ? definition.titleAr : definition.titleEn}</span>
          </h2>
          <p className={`text-xs sm:text-sm max-w-2xl ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {isAr ? definition.subtitleAr : definition.subtitleEn}
          </p>
        </div>

        {/* Header Action Buttons (Learning Goals, Audio, Fullscreen) */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setShowObjectivesModal(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>{isAr ? 'أهداف التعلم' : 'Learning Goals'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
              soundEnabled
                ? isLight
                  ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                  : 'bg-slate-900/80 text-cyan-300 border-slate-700'
                : isLight
                ? 'bg-white text-slate-400 border-slate-200'
                : 'bg-slate-900/40 text-slate-500 border-slate-800'
            }`}
            title={soundEnabled ? 'Mute audio effects' : 'Enable audio effects'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Maximize to Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`px-3 py-1.5 rounded-xl text-xs font-black border flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
              isLight
                ? 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border-cyan-300'
                : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40'
            }`}
            title={isAr ? 'ملء الشاشة' : 'Fullscreen'}
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'ملء الشاشة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* 2. Key KaTeX Formula Bar (if formulas defined) */}
      {definition.keyFormulas && definition.keyFormulas.length > 0 && (
        <LabFormulaBar formulas={definition.keyFormulas} lang={lang} />
      )}

      {/* 3. Standardized Simulation Action Bar */}
      <div className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}>
        {/* Left: Clock & Simulation Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Play / Pause */}
          <button
            type="button"
            onClick={lab.togglePlay}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-md cursor-pointer ${
              lab.clock.isPlaying
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
            }`}
          >
            {lab.clock.isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{isAr ? 'إيقاف مؤقت' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isAr ? 'تشغيل المحاكاة' : 'Run Simulation'}</span>
              </>
            )}
          </button>

          {/* Step once */}
          <button
            type="button"
            onClick={() => lab.stepOnce(0.016)}
            disabled={lab.clock.isPlaying}
            className={`p-2 rounded-xl disabled:opacity-30 border transition-all cursor-pointer ${
              isLight
                ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title={isAr ? 'خطوة زمنية واحدة (dt)' : 'Step Forward (dt)'}
          >
            <FastForward className="w-4 h-4" />
          </button>

          {/* Reset parameters */}
          <button
            type="button"
            onClick={handleReset}
            disabled={!lab.isDirty}
            className={`px-3 py-2 rounded-xl disabled:opacity-40 border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isLight
                ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title={isAr ? 'إعادة تعيين المعطيات للوضع الافتراضي' : 'Reset all parameters to default'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
          </button>

          {/* Speed Multipliers */}
          <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs font-mono ${
            isLight
              ? 'bg-slate-100 border-slate-200'
              : 'bg-slate-950/80 border-slate-800'
          }`}>
            {[0.25, 0.5, 1.0, 2.0].map((spd) => (
              <button
                key={spd}
                type="button"
                onClick={() => lab.setSpeedMultiplier(spd)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  lab.clock.speedMultiplier === spd
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {spd}×
              </button>
            ))}
          </div>

          {/* Clock & Performance FPS Badge */}
          <div className={`flex items-center gap-2 text-xs font-mono px-2.5 py-1 rounded-xl border ${
            isLight
              ? 'bg-slate-100 border-slate-200 text-slate-600'
              : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
          }`}>
            <span>t = {formatSeconds(lab.clock.timeElapsed)}s</span>
            <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>•</span>
            <span className={isLight ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold'}>{lab.clock.fps} FPS</span>
          </div>
        </div>

        {/* Right: Pedagogy & Notebook Drawers */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* POE Hypothesis Toggle */}
          {definition.poePrompts && definition.poePrompts.length > 0 && (
            <button
              type="button"
              onClick={lab.poeState.toggleDrawer}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                lab.poeState.isDrawerOpen
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                  : isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isAr ? 'منهجية الفرضيات (POE)' : 'Hypothesis (POE)'}</span>
              {!lab.poeState.isUnlocked && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>
          )}

          {/* Lab Notebook Toggle */}
          <button
            type="button"
            onClick={lab.notebookState.toggle}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              lab.notebookState.isOpen
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/20'
                : isLight
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>{isAr ? 'دفتر المعمل والبيانات' : 'Lab Notebook'}</span>
            {lab.notebookState.points.length > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                isLight ? 'bg-emerald-200 text-emerald-800 font-bold' : 'bg-emerald-400/30 text-white'
              }`}>
                {lab.notebookState.points.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 4. Pedagogical POE Drawer (Predict-Observe-Explain) */}
      {renderPoeModal()}

      {/* 5. Main Split Workspace: Viewport (Left/Center) + Parameters & Telemetry (Right/Bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Viewport Column */}
        <div className="lg:col-span-8 space-y-4">
          {children}

          {/* Scientific Instruments Rack */}
          <InstrumentRack
            lang={lang}
            supportedInstruments={definition.supportedInstruments}
            activeInstruments={lab.instruments.activeInstruments}
            onToggleInstrument={lab.instruments.toggleInstrument}
            onCloseInstrument={lab.instruments.closeInstrument}
            multimeterReading={multimeterReading}
            oscilloscopeCh1={oscilloscopeCh1}
            oscilloscopeCh2={oscilloscopeCh2}
            onStopwatchLap={(lapTime) => {
              lab.notebookState.logDataPoint(
                parseFloat(lapTime.toFixed(2)),
                currentYValue ?? 0,
                'Lap Time'
              );
            }}
          />
        </div>

        {/* Controls & Telemetry Column */}
        <div className="lg:col-span-4 space-y-4">
          {/* Preset Picker */}
          {definition.presets && definition.presets.length > 0 && (
            <div className={`p-4 rounded-2xl border shadow-sm ${
              isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800 shadow-md'
            }`}>
              <LabPresetPicker
                presets={definition.presets}
                activePresetId={lab.activePresetId}
                lang={lang}
                theme={theme}
                onSelectPreset={lab.loadPreset}
              />
            </div>
          )}

          {/* Tunable Parameters Card */}
          <div className={`p-4 rounded-2xl border shadow-sm space-y-3 ${
            isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800 shadow-md'
          }`}>
            <div className={`flex items-center justify-between border-b pb-2 ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <div className="flex items-center gap-2">
                <Sliders className={`w-4 h-4 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`} />
                <h3 className={`text-xs font-black uppercase tracking-wider ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {isAr ? 'معايير التجربة والمدخلات' : 'Experimental Parameters'}
                </h3>
              </div>
              {lab.isDirty && (
                <button
                  type="button"
                  onClick={handleReset}
                  className={`text-[11px] font-bold cursor-pointer ${
                    isLight ? 'text-cyan-700 hover:text-cyan-800' : 'text-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  {isAr ? 'استعادة الافتراضي' : 'Reset All'}
                </button>
              )}
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-3">
              {Object.keys(definition.paramSchema).map((key) => {
                const schema = definition.paramSchema[key];
                if (schema.visibleIf && !schema.visibleIf(lab.params)) {
                  return null;
                }
                const val = lab.params[key];

                if (schema.type === 'number') {
                  return (
                    <LabSlider
                      key={key}
                      id={`param-${key}`}
                      labelEn={schema.labelEn}
                      labelAr={schema.labelAr}
                      symbolTex={schema.symbolTex}
                      value={val}
                      min={schema.min ?? 0}
                      max={schema.max ?? 100}
                      step={schema.step ?? 1}
                      unit={schema.unit}
                      precision={schema.precision ?? 2}
                      defaultValue={schema.defaultValue}
                      lang={lang}
                      theme={theme}
                      disabled={Boolean((schema as any).disabled)}
                      onChange={(newVal) => lab.updateParam(key as keyof TParams, newVal as any)}
                      onReset={() => lab.updateParam(key as keyof TParams, schema.defaultValue as any)}
                    />
                  );
                }

                return null;
              })}
            </div>

            {/* Custom controls slot (e.g. glassware, lenses, reagents) */}
            {renderCustomControls && (
              <div className={`pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                {renderCustomControls()}
              </div>
            )}
          </div>

          {/* Live Telemetry Card Grid */}
          {telemetry && telemetry.length > 0 && (
            <div className={`p-4 rounded-2xl border shadow-sm space-y-3 ${
              isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/80 border-slate-800 shadow-md'
            }`}>
              <div className={`flex items-center gap-2 border-b pb-2 ${
                isLight ? 'border-slate-200' : 'border-slate-800'
              }`}>
                <Activity className={`w-4 h-4 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                <h3 className={`text-xs font-black uppercase tracking-wider ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {isAr ? 'القياسات الفيزيائية اللحظية' : 'Real-Time Telemetry'}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {telemetry.map((metric) => (
                  <LabTelemetryCard
                    key={metric.id}
                    id={metric.id}
                    labelEn={metric.labelEn}
                    labelAr={metric.labelAr}
                    symbolTex={metric.symbolTex}
                    value={metric.value}
                    unit={metric.unit}
                    min={metric.min}
                    max={metric.max}
                    status={metric.status}
                    precision={metric.precision}
                    lang={lang}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 6. Digital Lab Notebook Drawer */}
      {renderNotebookModal()}

      {/* 7. Objectives Modal */}
      {renderObjectivesModal()}

      {/* 8. Safety Modal */}
      {renderSafetyModal()}
    </div>
  );
};
