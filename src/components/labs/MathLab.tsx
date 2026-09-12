import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Calculator,
  Compass,
  Boxes,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { InteractiveCalculusTangent } from '../InteractiveCalculusTangent';
import { Interactive3DGeometry } from '../Interactive3DGeometry';
import { InteractiveStaticsFriction } from '../InteractiveStaticsFriction';
import { InteractiveMatrixLab } from '../InteractiveMatrixLab';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
}

type MathTab = 'calculus' | 'geometry3d' | 'mechanics' | 'matrix';

export const MathLab: React.FC<Props> = ({ lang, theme = 'dark', onOpenDesmos }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<MathTab>('calculus');

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

        {/* Subtabs */}
        <div
          className={`flex items-center p-1 rounded-xl border self-stretch md:self-auto overflow-x-auto ${
            isContrast
              ? 'bg-black border-indigo-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          <button
            onClick={() => setActiveTab('calculus')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'calculus'
                ? isContrast
                  ? 'bg-indigo-400 text-black font-black'
                  : 'bg-indigo-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{isArabic ? 'التفاضل والمماسات' : 'Calculus & Tangents'}</span>
          </button>

          <button
            onClick={() => setActiveTab('geometry3d')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'geometry3d'
                ? isContrast
                  ? 'bg-indigo-400 text-black font-black'
                  : 'bg-indigo-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الهندسة الفراغية 3D' : '3D Vectors & Planes'}</span>
          </button>

          <button
            onClick={() => setActiveTab('mechanics')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'mechanics'
                ? isContrast
                  ? 'bg-indigo-400 text-black font-black'
                  : 'bg-indigo-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الميكانيكا والاحتكاك' : 'Mechanics & Friction'}</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'matrix'
                ? isContrast
                  ? 'bg-indigo-400 text-black font-black'
                  : 'bg-indigo-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isArabic ? 'المصفوفات والمعادلات' : 'Matrix Algebra'}</span>
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
        {activeTab === 'mechanics' && <InteractiveStaticsFriction lang={lang} theme={theme} />}
        {activeTab === 'matrix' && <InteractiveMatrixLab lang={lang} theme={theme} />}
      </div>
    </div>
  );
};
