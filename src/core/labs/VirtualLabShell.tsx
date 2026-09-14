import React, { useState } from 'react';
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
}: VirtualLabShellProps<TParams, TState>): React.ReactElement => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [showObjectivesModal, setShowObjectivesModal] = useState<boolean>(false);
  const [showSafetyModal, setShowSafetyModal] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Subject gradient styling
  const subjectThemes = {
    physics: {
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
    },
    chemistry: {
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      border: 'border-emerald-500/30',
      accent: 'text-emerald-400',
    },
    biology: {
      badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      gradient: 'from-rose-500/10 via-pink-500/5 to-transparent',
      border: 'border-rose-500/30',
      accent: 'text-rose-400',
    },
    mathematics: {
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      gradient: 'from-indigo-500/10 via-violet-500/5 to-transparent',
      border: 'border-indigo-500/30',
      accent: 'text-indigo-400',
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

  return (
    <div
      className={`space-y-4 rounded-3xl p-4 sm:p-6 transition-all border shadow-2xl ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-white'
          : isLight
          ? 'bg-slate-900 text-slate-100 border-slate-700'
          : 'bg-slate-950/90 text-slate-100 border-slate-800'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Standardized Lab Header */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${st.border} bg-gradient-to-r ${st.gradient} flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg backdrop-blur-md`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider border ${st.badge}`}>
              {definition.subject}
            </span>
            {definition.chapterRef && (
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                {definition.chapterRef}
              </span>
            )}
            {definition.safetyWarnings && definition.safetyWarnings.length > 0 && (
              <button
                type="button"
                onClick={() => setShowSafetyModal(true)}
                className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all"
              >
                <AlertTriangle className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'إرشادات السلامة' : 'Safety Notice'}</span>
              </button>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
            <span>{isAr ? definition.titleAr : definition.titleEn}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            {isAr ? definition.subtitleAr : definition.subtitleEn}
          </p>
        </div>

        {/* Header Action Buttons (Learning Goals, Audio, Formulas) */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setShowObjectivesModal(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'أهداف التعلم' : 'Learning Goals'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border text-xs transition-all ${
              soundEnabled
                ? 'bg-slate-900/80 text-cyan-300 border-slate-700'
                : 'bg-slate-900/40 text-slate-500 border-slate-800'
            }`}
            title={soundEnabled ? 'Mute audio effects' : 'Enable audio effects'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. Key KaTeX Formula Bar (if formulas defined) */}
      {definition.keyFormulas && definition.keyFormulas.length > 0 && (
        <LabFormulaBar formulas={definition.keyFormulas} lang={lang} />
      )}

      {/* 3. Standardized Simulation Action Bar */}
      <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-md">
        {/* Left: Clock & Simulation Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Play / Pause */}
          <button
            type="button"
            onClick={lab.togglePlay}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-md ${
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
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 border border-slate-700 transition-all"
            title={isAr ? 'خطوة زمنية واحدة (dt)' : 'Step Forward (dt)'}
          >
            <FastForward className="w-4 h-4" />
          </button>

          {/* Reset parameters */}
          <button
            type="button"
            onClick={handleReset}
            disabled={!lab.isDirty}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all"
            title={isAr ? 'إعادة تعيين المعطيات للوضع الافتراضي' : 'Reset all parameters to default'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
          </button>

          {/* Speed Multipliers */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {[0.25, 0.5, 1.0, 2.0].map((spd) => (
              <button
                key={spd}
                type="button"
                onClick={() => lab.setSpeedMultiplier(spd)}
                className={`px-2 py-1 rounded-lg transition-all ${
                  lab.clock.speedMultiplier === spd
                    ? 'bg-cyan-500 text-slate-950 font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {spd}×
              </button>
            ))}
          </div>

          {/* Clock & Performance FPS Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-2 py-1 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <span>t = {formatSeconds(lab.clock.timeElapsed)}s</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-bold">{lab.clock.fps} FPS</span>
          </div>
        </div>

        {/* Right: Pedagogy & Notebook Drawers */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* POE Hypothesis Toggle */}
          {definition.poePrompts && definition.poePrompts.length > 0 && (
            <button
              type="button"
              onClick={lab.poeState.toggleDrawer}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                lab.poeState.isDrawerOpen
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
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
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
              lab.notebookState.isOpen
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/20'
                : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>{isAr ? 'دفتر المعمل والبيانات' : 'Lab Notebook'}</span>
            {lab.notebookState.points.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-emerald-400/30 text-white">
                {lab.notebookState.points.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 4. Pedagogical POE Drawer (Predict-Observe-Explain) */}
      {lab.poeState.isDrawerOpen && lab.poeState.activePrompt && (
        <div className="transition-all animate-fadeIn">
          <POEController
            prompt={lab.poeState.activePrompt}
            lang={lang}
            isUnlocked={lab.poeState.isUnlocked}
            onUnlockLab={lab.poeState.unlockLab}
            onComplete={() => {}}
          />
        </div>
      )}

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
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <LabPresetPicker
                presets={definition.presets}
                activePresetId={lab.activePresetId}
                lang={lang}
                onSelectPreset={lab.loadPreset}
              />
            </div>
          )}

          {/* Tunable Parameters Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">
                  {isAr ? 'معايير التجربة والمدخلات' : 'Experimental Parameters'}
                </h3>
              </div>
              {lab.isDirty && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold"
                >
                  {isAr ? 'استعادة الافتراضي' : 'Reset All'}
                </button>
              )}
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-3">
              {Object.keys(definition.paramSchema).map((key) => {
                const schema = definition.paramSchema[key];
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
                      disabled={!lab.poeState.isUnlocked}
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
              <div className="pt-2 border-t border-slate-800">
                {renderCustomControls()}
              </div>
            )}
          </div>

          {/* Live Telemetry Card Grid */}
          {telemetry && telemetry.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">
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
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 6. Digital Lab Notebook Drawer */}
      {lab.notebookState.isOpen && (
        <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-black uppercase tracking-wider text-emerald-300">
                {isAr ? 'دفتر المعمل الرقمي والتحليل الإحصائي' : 'Digital Lab Notebook & Linear Regression'}
              </h3>
            </div>
            <button
              type="button"
              onClick={lab.notebookState.close}
              className="p-1 rounded text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
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
      )}

      {/* 7. Objectives Modal */}
      {showObjectivesModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="w-full max-w-lg bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 shadow-2xl text-slate-100 space-y-4"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold">
                  {isAr ? 'مخرجات التعلم المستهدفة' : 'Target Learning Objectives'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowObjectivesModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {definition.objectives.map((obj, idx) => (
                <div
                  key={obj.id || idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isAr ? obj.textAr : obj.textEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowObjectivesModal(false)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                {isAr ? 'حسناً، فهمت' : 'Got it'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. Safety Modal */}
      {showSafetyModal && definition.safetyWarnings && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="w-full max-w-lg bg-slate-900 border border-amber-500/40 rounded-3xl p-6 shadow-2xl text-slate-100 space-y-4"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5 text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-bold">
                  {isAr ? 'إرشادات السلامة المعملية' : 'Laboratory Safety Rules'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSafetyModal(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {definition.safetyWarnings.map((warn) => (
                <div
                  key={warn.id}
                  className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm space-y-1"
                >
                  <h4 className="font-bold text-amber-300">
                    {isAr ? warn.titleAr : warn.titleEn}
                  </h4>
                  <p className="text-slate-300">
                    {isAr ? warn.messageAr : warn.messageEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSafetyModal(false)}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                {isAr ? 'موافق' : 'Acknowledge'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
