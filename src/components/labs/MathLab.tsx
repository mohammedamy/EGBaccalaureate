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
import { InteractiveRelatedRatesOptimizationStudio } from '../InteractiveRelatedRatesOptimizationStudio';
import { Interactive3DGeometry } from '../Interactive3DGeometry';
import { InteractiveComplexArgand } from '../InteractiveComplexArgand';
import { MechanicsLab } from './MechanicsLab';
import { InteractiveMatrixLab } from '../InteractiveMatrixLab';
import { InteractivePascalTriangle } from '../InteractivePascalTriangle';
import { InteractiveNormalDistribution } from '../InteractiveNormalDistribution';
import { InteractiveSolidsOfRevolution } from '../InteractiveSolidsOfRevolution';
import { InteractiveConicSections } from '../InteractiveConicSections';
import { InteractiveFourierSeries } from '../InteractiveFourierSeries';
import { InteractiveSlopeFields } from '../InteractiveSlopeFields';
import { InteractiveLinearProgramming } from '../InteractiveLinearProgramming';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { EuclidElementsStudio } from './math/EuclidElementsStudio';
import { KhwarizmiAlJabrStudio } from './math/KhwarizmiAlJabrStudio';
import { DescartesGeometryStudio } from './math/DescartesGeometryStudio';
import { GaussDisquisitionesStudio } from './math/GaussDisquisitionesStudio';
import { Compass, Binary, Activity, Clock, Award } from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
  initialTab?: MathTab;
  onTabChange?: (tab: MathTab) => void;
  defaultFullscreen?: boolean;
  isFullscreen?: boolean;
}

export type MathTab =
  | 'calculus'
  | 'related_rates_optimization'
  | 'geometry3d'
  | 'complex'
  | 'mechanics'
  | 'matrix'
  | 'pascal'
  | 'probability'
  | 'volumes_revolution'
  | 'conics'
  | 'fourier_series'
  | 'slope_fields'
  | 'linear_programming'
  | 'euclid_elements'
  | 'khwarizmi_al_jabr'
  | 'descartes_geometry'
  | 'gauss_disquisitiones';

export const MathLab: React.FC<Props> = ({
  lang,
  theme = 'dark',
  onOpenDesmos,
  initialTab = 'calculus',
  onTabChange,
  defaultFullscreen = false,
  isFullscreen: isFullscreenProp,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<MathTab>(initialTab);
  const { isFullscreen: isNativeFs, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);

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
                className="min-h-[44px] w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
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
                <option value="volumes_revolution" className="bg-slate-900 text-white">
                  🏺 {isArabic ? 'حجوم الأجسام الدورانية وأقراص ريمان' : 'Solids of Revolution & Riemann Discs'}
                </option>
                <option value="conics" className="bg-slate-900 text-white">
                  📐 {isArabic ? 'القطوع المخروطية وبصريات البؤرة' : 'Conic Sections & Focal Optics'}
                </option>
                <option value="fourier_series" className="bg-slate-900 text-white">
                  🌊 {isArabic ? 'متسلسلات فورييه والتركيب النغمي' : 'Fourier Series & Acoustic Synthesis'}
                </option>
                <option value="slope_fields" className="bg-slate-900 text-white">
                  📈 {isArabic ? 'المعادلات التفاضلية وحقول الميول (أويلر)' : 'Differential Equations & Slope Fields'}
                </option>
                <option value="linear_programming" className="bg-slate-900 text-white">
                  📊 {isArabic ? 'البرمجة الخطية ومضلع الحل الأمثل' : 'Linear Programming & Feasible Polygon'}
                </option>
                <option value="euclid_elements" className="bg-slate-900 text-white">
                  🏛️ {isArabic ? 'إقليدس وأصول الهندسة 300 ق.م (4K)' : 'Euclid Elements & Geometry 300 BCE (4K)'}
                </option>
                <option value="khwarizmi_al_jabr" className="bg-slate-900 text-white">
                  🏛️ {isArabic ? 'الخوارزمي وكتاب الجبر والمقابلة 820م (4K)' : 'Al-Khwarizmi Al-Jabr 820 CE (4K)'}
                </option>
                <option value="descartes_geometry" className="bg-slate-900 text-white">
                  🏛️ {isArabic ? 'ديكارت والهندسة التحليلية 1637م (4K)' : 'Descartes La Géométrie 1637 (4K)'}
                </option>
                <option value="gauss_disquisitiones" className="bg-slate-900 text-white">
                  🏛️ {isArabic ? 'غاوس وأبحاث الحساب النمطي 1801م (4K)' : 'Gauss Disquisitiones 1801 (4K)'}
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
                  className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600/80 hover:bg-indigo-600 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <span>Desmos 2D</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenDesmos('3d')}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600/80 hover:bg-cyan-600 text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
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
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
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
          {activeTab === 'volumes_revolution' && <InteractiveSolidsOfRevolution lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'conics' && <InteractiveConicSections lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'fourier_series' && <InteractiveFourierSeries lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'slope_fields' && <InteractiveSlopeFields lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'linear_programming' && <InteractiveLinearProgramming lang={lang} theme={theme} isFullscreen={true} />}
          {activeTab === 'euclid_elements' && <EuclidElementsStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
          {activeTab === 'khwarizmi_al_jabr' && <KhwarizmiAlJabrStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
          {activeTab === 'descartes_geometry' && <DescartesGeometryStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
          {activeTab === 'gauss_disquisitiones' && <GaussDisquisitionesStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
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
              className={`min-h-[44px] w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
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
              <option value="related_rates_optimization" className="bg-slate-900 text-white">
                📈 {isArabic ? 'المعدلات الزمنية المرتبطة وتطبيقات القيم العظمى والصغرى' : 'Related Time Rates & Applied Optimization Studio'}
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
              <option value="volumes_revolution" className="bg-slate-900 text-white">
                🏺 {isArabic ? 'حجوم الأجسام الدورانية وأقراص ريمان (التكامل المحوري)' : 'Solids of Revolution & Riemann Discs (Volume Integral)'}
              </option>
              <option value="conics" className="bg-slate-900 text-white">
                📐 {isArabic ? 'القطوع المخروطية وبصريات الانعكاس البؤري (الاختلاف المركزي)' : 'Conic Sections & Focal Reflection Optics (Eccentricity)'}
              </option>
              <option value="fourier_series" className="bg-slate-900 text-white">
                🌊 {isArabic ? 'متسلسلات فورييه والتركيب النغمي السمعي (تحليل التوافقيات)' : 'Fourier Series & Acoustic Harmonic Synthesis'}
              </option>
              <option value="slope_fields" className="bg-slate-900 text-white">
                📈 {isArabic ? 'المعادلات التفاضلية وحقول الميول وطريقة أويلر' : 'Differential Equations, Slope Fields & Euler Method'}
              </option>
              <option value="linear_programming" className="bg-slate-900 text-white">
                📊 {isArabic ? 'البرمجة الخطية ومضلع منطقة الحلول الممكنة والأمثلية' : 'Linear Programming & Feasible Polygon Optimization'}
              </option>
              <option value="euclid_elements" className="bg-slate-900 text-white">
                🏛️ {isArabic ? 'استوديو إقليدس السكندري وأصول الهندسة (300 ق.م) - 4K' : 'Euclid Elements & Axiomatic Geometry (300 BCE) - 4K'}
              </option>
              <option value="khwarizmi_al_jabr" className="bg-slate-900 text-white">
                🏛️ {isArabic ? 'استوديو الخوارزمي وكتاب الجبر والمقابلة (820م) - 4K' : 'Al-Khwarizmi Al-Jabr & Algorithmic Origins (820 CE) - 4K'}
              </option>
              <option value="descartes_geometry" className="bg-slate-900 text-white">
                🏛️ {isArabic ? 'استوديو ديكارت وكتاب الهندسة التحليلية (1637م) - 4K' : 'Descartes La Géométrie & Coordinate System (1637 CE) - 4K'}
              </option>
              <option value="gauss_disquisitiones" className="bg-slate-900 text-white">
                🏛️ {isArabic ? 'استوديو غاوس وأبحاث الحساب النمطي (1801م) - 4K' : 'Gauss Disquisitiones & Number Theory (1801 CE) - 4K'}
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
            className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
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
              className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Desmos 2D</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenDesmos('3d')}
              className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Desmos 3D</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Curated 4K Mathematical Archival Museum Studios Showcase Banner */}
      <div
        className={`mt-4 p-4 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-indigo-400 text-white'
            : isLight
            ? 'bg-gradient-to-r from-indigo-50/90 via-slate-50 to-blue-50/90 border-indigo-200 text-slate-900 shadow-sm'
            : 'bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-blue-950/40 border-indigo-500/30 text-slate-100 shadow-lg'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span
              className={`p-2 rounded-xl border ${
                isContrast
                  ? 'bg-white text-black border-white'
                  : isLight
                  ? 'bg-indigo-100 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400'
              }`}
            >
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                <span>{isArabic ? 'معرض المخطوطات واللوحات الرياضية الأرشيفية فائق الدقة (4K)' : 'Curated 4K Mathematical Archival Museum Studios'}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-mono font-bold ${
                    isContrast
                      ? 'bg-white text-black border-white'
                      : isLight
                      ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
                      : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  }`}
                >
                  {isArabic ? 'علمي رياضة والتحليل' : 'Pure & Applied Math'}
                </span>
              </h3>
              <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic
                  ? 'استكشف المخطوطات الأصلية لأعظم ٤ ثورات في تاريخ الرياضيات من إقليدس والخوارزمي إلى ديكارت وغاوس مع محاكيات تفاعلية دقيقة'
                  : 'Explore original historic plates of 4 seminal mathematics milestones with interactive geometric and algebraic simulators'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Studio 1: Euclid 300 BCE */}
          <button
            onClick={() => handleTabChange('euclid_elements')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'euclid_elements'
                ? isLight
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/50 text-slate-900 shadow-md'
                  : 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500/50'
                : isLight
                ? 'bg-white hover:bg-emerald-50/50 border-slate-200 hover:border-emerald-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-emerald-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}
              >
                300 BCE
              </span>
              <Compass className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-emerald-500 transition-colors">
                {isArabic ? 'إقليدس وأصول الهندسة' : 'Euclid 300 BCE Elements'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'مبرهنة فيثاغورس (كرسي العروس) ومسلمات الفرجار' : 'Pythagorean Proof, Bride’s Chair & Axioms'}
              </p>
            </div>
          </button>

          {/* Studio 2: Al-Khwarizmi 820 CE */}
          <button
            onClick={() => handleTabChange('khwarizmi_al_jabr')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'khwarizmi_al_jabr'
                ? isLight
                  ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-400/50 text-slate-900 shadow-md'
                  : 'bg-amber-950/40 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/50'
                : isLight
                ? 'bg-white hover:bg-amber-50/50 border-slate-200 hover:border-amber-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-amber-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}
              >
                820 CE
              </span>
              <Binary className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-amber-500 transition-colors">
                {isArabic ? 'الخوارزمي والجبر والمقابلة' : 'Al-Khwarizmi 820 CE Al-Jabr'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'إكمال المربع هندسياً وحل المعادلات وجذور الخوارزميات' : 'Completing the Square & Algorithmic Roots'}
              </p>
            </div>
          </button>

          {/* Studio 3: Descartes 1637 */}
          <button
            onClick={() => handleTabChange('descartes_geometry')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'descartes_geometry'
                ? isLight
                  ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-400/50 text-slate-900 shadow-md'
                  : 'bg-indigo-950/40 border-indigo-500 text-white shadow-lg ring-1 ring-indigo-500/50'
                : isLight
                ? 'bg-white hover:bg-indigo-50/50 border-slate-200 hover:border-indigo-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-indigo-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                }`}
              >
                1637 CE
              </span>
              <Activity className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-indigo-500 transition-colors">
                {isArabic ? 'ديكارت والهندسة التحليلية' : 'Descartes 1637 La Géométrie'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'المحاور الإحداثية، ربط المنحنيات بالمعادلات، والقطاع' : 'Orthogonal Axes & Coordinate Curve Engine'}
              </p>
            </div>
          </button>

          {/* Studio 4: Gauss 1801 */}
          <button
            onClick={() => handleTabChange('gauss_disquisitiones')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'gauss_disquisitiones'
                ? isLight
                  ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-400/50 text-slate-900 shadow-md'
                  : 'bg-purple-950/40 border-purple-500 text-white shadow-lg ring-1 ring-purple-500/50'
                : isLight
                ? 'bg-white hover:bg-purple-50/50 border-slate-200 hover:border-purple-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-purple-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-purple-100 text-purple-900 border-purple-300'
                    : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                }`}
              >
                1801 CE
              </span>
              <Clock className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-purple-500 transition-colors">
                {isArabic ? 'غاوس وأبحاث الحساب النمطي' : 'Gauss 1801 Disquisitiones'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'رمز التطابق (≡)، مضلع الـ 17 ضلعاً، وحلقة البواقي' : 'Congruence (≡), Regular 17-gon & Residue Rings'}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-6">
        {activeTab === 'calculus' && <InteractiveCalculusTangent lang={lang} theme={theme} />}
        {activeTab === 'related_rates_optimization' && (
          <InteractiveRelatedRatesOptimizationStudio lang={lang} theme={theme} isFullscreen={isFullscreen} />
        )}
        {activeTab === 'geometry3d' && <Interactive3DGeometry lang={lang} theme={theme} />}
        {activeTab === 'complex' && <InteractiveComplexArgand lang={lang} theme={theme} />}
        {activeTab === 'mechanics' && <MechanicsLab lang={lang} theme={theme} />}
        {activeTab === 'matrix' && <InteractiveMatrixLab lang={lang} theme={theme} />}
        {activeTab === 'pascal' && <InteractivePascalTriangle lang={lang} theme={theme} />}
        {activeTab === 'probability' && <InteractiveNormalDistribution lang={lang} theme={theme} />}
        {activeTab === 'volumes_revolution' && <InteractiveSolidsOfRevolution lang={lang} theme={theme} />}
        {activeTab === 'conics' && <InteractiveConicSections lang={lang} theme={theme} />}
        {activeTab === 'fourier_series' && <InteractiveFourierSeries lang={lang} theme={theme} />}
        {activeTab === 'slope_fields' && <InteractiveSlopeFields lang={lang} theme={theme} />}
        {activeTab === 'linear_programming' && <InteractiveLinearProgramming lang={lang} theme={theme} />}
        {activeTab === 'euclid_elements' && <EuclidElementsStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
        {activeTab === 'khwarizmi_al_jabr' && <KhwarizmiAlJabrStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
        {activeTab === 'descartes_geometry' && <DescartesGeometryStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
        {activeTab === 'gauss_disquisitiones' && <GaussDisquisitionesStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />}
      </div>
    </div>
  );
};
