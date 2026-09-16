import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Calculator,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { InteractiveCalculusTangent } from '../InteractiveCalculusTangent';
import { Interactive3DGeometry } from '../Interactive3DGeometry';
import { InteractiveComplexArgand } from '../InteractiveComplexArgand';
import { MechanicsLab } from './MechanicsLab';
import { InteractiveMatrixLab } from '../InteractiveMatrixLab';
import { InteractivePascalTriangle } from '../InteractivePascalTriangle';
import { InteractiveNormalDistribution } from '../InteractiveNormalDistribution';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
  initialTab?: MathTab;
  onTabChange?: (tab: MathTab) => void;
  defaultFullscreen?: boolean;
}

export type MathTab = 'calculus' | 'geometry3d' | 'complex' | 'mechanics' | 'matrix' | 'pascal' | 'probability';

export const MathLab: React.FC<Props> = ({
  lang,
  theme = 'dark',
  onOpenDesmos,
  initialTab = 'calculus',
  onTabChange,
  defaultFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<MathTab>(initialTab);
  const { isFullscreen, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen,
  });

  useEffect(() => {
    if (initialTab && initialTab !== activeTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (newTab: MathTab) => {
    setActiveTab(newTab);
    onTabChange?.(newTab);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-slate-950 text-slate-100 font-sans">
        {/* Workstation Top Bar */}
        <div className="min-h-[54px] sm:min-h-[58px] flex items-center justify-between gap-3 px-3.5 py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shrink-0 backdrop-blur-md shadow-lg z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                  {isArabic ? 'مختبر الرياضيات والتحليل والميكانيكا التفاعلي' : 'Virtual Mathematics & Mechanics Lab'}
                </h2>
                <span className="hidden sm:inline text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 uppercase shrink-0">
                  Full-Screen Workstation
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Subtabs Dropdown */}
            <div className="relative min-w-[200px] sm:min-w-[260px]">
              <select
                value={activeTab}
                onChange={(e) => handleTabChange(e.target.value as MathTab)}
                aria-label={isArabic ? 'اختر الوحدة الرياضية' : 'Select Math Module'}
                className="w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="calculus" className="bg-slate-900 text-white">
                  🧭 {isArabic ? 'التفاضل والتكامل' : 'Calculus & Real Analysis'}
                </option>
                <option value="geometry3d" className="bg-slate-900 text-white">
                  📦 {isArabic ? 'الهندسة الفراغية 3D' : '3D Solid Geometry'}
                </option>
                <option value="complex" className="bg-slate-900 text-white">
                  📍 {isArabic ? 'الأعداد المركبة وأرجاند' : 'Complex Numbers & Argand'}
                </option>
                <option value="mechanics" className="bg-slate-900 text-white">
                  ⚙️ {isArabic ? 'الاستاتيكا والميكانيكا' : 'Statics & Mechanics'}
                </option>
                <option value="matrix" className="bg-slate-900 text-white">
                  🔢 {isArabic ? 'جبر المصفوفات' : 'Matrix Algebra'}
                </option>
                <option value="pascal" className="bg-slate-900 text-white">
                  🔺 {isArabic ? 'مثلث باسكال وذات الحدين' : 'Pascal & Binomial'}
                </option>
                <option value="probability" className="bg-slate-900 text-white">
                  📊 {isArabic ? 'التوزيع الطبيعي وبايز' : 'Normal Distribution & Bayes'}
                </option>
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Quick Desmos 2D/3D */}
            {onOpenDesmos && (
              <div className="hidden md:flex items-center gap-1.5">
                <button
                  onClick={() => onOpenDesmos('2d')}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600/80 hover:bg-indigo-600 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <span>Desmos 2D</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenDesmos('3d')}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600/80 hover:bg-cyan-600 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <span>Desmos 3D</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Minimize button */}
            <button
              onClick={exitFullscreen}
              title={isArabic ? 'تصغير (Esc)' : 'Exit Fullscreen (Esc)'}
              aria-label={isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen'}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
            >
              <Minimize2 className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">{isArabic ? 'تصغير' : 'Exit'}</span>
            </button>
          </div>
        </div>

        {/* Fullscreen Content viewport */}
        <div className="flex-1 min-h-0 overflow-hidden mt-2 flex flex-col">
          {activeTab === 'calculus' && <InteractiveCalculusTangent lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'geometry3d' && <Interactive3DGeometry lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'complex' && <InteractiveComplexArgand lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'mechanics' && <MechanicsLab lang={lang} theme={theme} />}
          {activeTab === 'matrix' && <InteractiveMatrixLab lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'pascal' && <InteractivePascalTriangle lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'probability' && <InteractiveNormalDistribution lang={lang} theme={theme} isFullscreen={true} />}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-indigo-400 text-indigo-400'
                : 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white border-indigo-400/40 shadow-indigo-500/20'
            }`}
          >
            <Calculator className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الرياضيات والتحليل والميكانيكا التفاعلي' : 'Virtual Mathematics & Mechanics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-indigo-400 text-black border-indigo-300'
                    : isLight
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
                }`}
              >
                Calculus & 3D Engine
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'حساب التفاضل والتكامل، الهندسة الفراغية ثلاثية الأبعاد، ميكانيكا الاحتكاك والاتزان، ومعمل المصفوفات'
                : 'Dynamic tangent limits, 3D vectors & plane geometry, mechanics friction, and matrix algebra solver'}
            </p>
          </div>
        </div>

        {/* Subtabs Dropdown + Fullscreen Button */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 sm:w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value as MathTab)}
              aria-label={isArabic ? 'اختر الوحدة الرياضية' : 'Select Math Module'}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                isContrast
                  ? 'bg-black text-white border-indigo-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              <option value="calculus" className="bg-slate-900 text-white">
                🧭 {isArabic ? 'حساب التفاضل والتكامل (المماس، التقعر، ومجموع ريمان)' : 'Calculus & Real Analysis (Tangents, Extrema & Riemann)'}
              </option>
              <option value="geometry3d" className="bg-slate-900 text-white">
                📦 {isArabic ? 'الهندسة الفراغية 3D (المتجهات، الكرة، والمستويات)' : '3D Solid Geometry (Vectors, Sphere & Planes)'}
              </option>
              <option value="complex" className="bg-slate-900 text-white">
                📍 {isArabic ? 'الأعداد المركبة ومستوى أرجاند (ديموافر وجذور أوميجا)' : 'Complex Numbers & Argand Plane (De Moivre & Roots)'}
              </option>
              <option value="mechanics" className="bg-slate-900 text-white">
                ⚙️ {isArabic ? 'الاستاتيكا والميكانيكا الكلاسيكية (المستوى التفاعلي)' : 'Statics & Classical Mechanics (Tier-1 Lab)'}
              </option>
              <option value="matrix" className="bg-slate-900 text-white">
                🔢 {isArabic ? 'جبر المصفوفات ومحدد كرامر' : 'Matrix Algebra Solver'}
              </option>
              <option value="pascal" className="bg-slate-900 text-white">
                🔺 {isArabic ? 'مثلث باسكال ومفكوك ذات الحدين' : 'Pascal Triangle & Binomial'}
              </option>
              <option value="probability" className="bg-slate-900 text-white">
                📊 {isArabic ? 'منحنى التوزيع الطبيعي ومبرهنة بايز' : 'Normal Distribution & Bayes'}
              </option>
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <button
            onClick={toggleFullscreen}
            title={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            aria-label={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">{isArabic ? 'شاشة كاملة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Desmos Suite Quick Action Bar */}
      {onOpenDesmos && (
        <div
          className={`mt-4 p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
            isContrast
              ? 'bg-black border-cyan-400 text-cyan-300'
              : isLight
              ? 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
              : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <p className="text-xs font-semibold">
              {isArabic
                ? 'هل تحتاج لرسم بياني معقد أو مستويات فراغية متعددة؟ افتح حاسبة ديسموس المعتمدة'
                : 'Need advanced multivariable curve plotting or 3D surface rotation? Open Desmos Calculators'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenDesmos('2d')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>Desmos 2D</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <button
              onClick={() => onOpenDesmos('3d')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>Desmos 3D</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="mt-6">
        {activeTab === 'calculus' && <InteractiveCalculusTangent lang={lang} theme={theme} />}
        {activeTab === 'geometry3d' && <Interactive3DGeometry lang={lang} theme={theme} />}
        {activeTab === 'complex' && <InteractiveComplexArgand lang={lang} theme={theme} />}
        {activeTab === 'mechanics' && <MechanicsLab lang={lang} theme={theme} />}
        {activeTab === 'matrix' && <InteractiveMatrixLab lang={lang} theme={theme} />}
        {activeTab === 'pascal' && <InteractivePascalTriangle lang={lang} theme={theme} />}
        {activeTab === 'probability' && <InteractiveNormalDistribution lang={lang} theme={theme} />}
      </div>
    </div>
  );
};
