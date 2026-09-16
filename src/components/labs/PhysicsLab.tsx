import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { PhotoelectricLab } from './PhotoelectricLab';
import {
  Zap,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import { DynamoInductionLab } from './DynamoInductionLab';
import { RLCResonanceLab } from './RLCResonanceLab';
import { PhysicsFlashcards } from './PhysicsFlashcards';
import { MagnetismLab } from './MagnetismLab';
import { AtomicLaserLab } from './AtomicLaserLab';
import { SemiconductorElectronicsLab } from './SemiconductorElectronicsLab';
import { OpticsBenchLab } from './OpticsBenchLab';
import { CircuitsLab } from './CircuitsLab';
import { PhysicsConstantsDrawer } from './PhysicsConstantsDrawer';

export type PhysicsTab = 'circuits' | 'optics' | 'magnetism' | 'dynamo' | 'resonance' | 'photoelectric' | 'atomic_lasers' | 'electronics' | 'flashcards';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: PhysicsTab;
}


export const PhysicsLab: React.FC<Props> = ({ lang, theme = 'dark', initialTab = 'circuits' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<PhysicsTab>(initialTab);
  const [showConstants, setShowConstants] = useState<boolean>(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);


  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-cyan-400 text-white'
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
                ? 'bg-black border-cyan-400 text-cyan-400'
                : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-400/40 shadow-cyan-500/20'
            }`}
          >
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الفيزياء والدوائر الكهربية والكم التفاعلي' : 'Virtual Physics & Quantum Circuits Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-cyan-400 text-black border-cyan-300'
                    : isLight
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60'
                }`}
              >
                Kirchhoff & Quantum Engine
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكي دوائر التيار المستمر وقانون أوم وكيرشوف، ومحاكي الظاهرة الكهروضوئية والازدواجية الموجية الجسيمية'
                : 'DC circuit solver, Ohm & Kirchhoff analyzer, and Photoelectric quantum emission simulator'}
            </p>
          </div>
        </div>

        {/* Subtabs Dropdown & Constants Button */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as PhysicsTab)}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                isContrast
                  ? 'bg-black text-white border-cyan-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              <option value="circuits" className="bg-slate-900 text-white">
                ⚡ {isArabic ? 'دوائر أوم وكيرشوف' : 'DC Circuits & Kirchhoff'}
              </option>
              <option value="optics" className="bg-slate-900 text-white">
                🔬 {isArabic ? 'البصريات وتجربة ينج' : 'Optics & Ray-Tracing'}
              </option>
              <option value="magnetism" className="bg-slate-900 text-white">
                🧭 {isArabic ? 'المغناطيسية ولورنتز' : 'Magnetism & Lorentz'}
              </option>
              <option value="dynamo" className="bg-slate-900 text-white">
                🔄 {isArabic ? 'الدينامو والحث الكهرومغناطيسي' : 'AC Dynamo & Induction'}
              </option>
              <option value="resonance" className="bg-slate-900 text-white">
                〰️ {isArabic ? 'دوائر الرنين المتردد RLC' : 'RLC Resonance & AC'}
              </option>
              <option value="photoelectric" className="bg-slate-900 text-white">
                ☀️ {isArabic ? 'الظاهرة الكهروضوئية والكم' : 'Photoelectric Effect'}
              </option>
              <option value="atomic_lasers" className="bg-slate-900 text-white">
                ⚛️ {isArabic ? 'طيف بور والليزر' : 'Bohr Spectra & Laser'}
              </option>
              <option value="electronics" className="bg-slate-900 text-white">
                🔌 {isArabic ? 'أشباه الموصلات والترانزستور وأشعة إكس' : 'Semiconductors & Coolidge X-Rays'}
              </option>
              <option value="flashcards" className="bg-slate-900 text-white">
                🗂️ {isArabic ? 'بطاقات الاستذكار' : 'Physics Flashcards'}
              </option>
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <button
            onClick={() => setShowConstants(!showConstants)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer border ${
              showConstants
                ? isContrast
                  ? 'bg-amber-400 text-black border-amber-300 font-black'
                  : 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-sm'
                : isLight
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                : 'bg-amber-950/40 text-amber-300 border-amber-800/60 hover:bg-amber-900/50'
            }`}
            title={isArabic ? 'عرض الثوابت الفيزيائية ومحول الوحدات' : 'View Physical Constants & Unit Converter'}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الثوابت والتحويلات' : 'Constants & Units'}</span>
          </button>
        </div>
      </div>

      {/* Physical Constants & Unit Converter Drawer */}
      <PhysicsConstantsDrawer
        lang={lang}
        theme={theme}
        isOpen={showConstants}
        onClose={() => setShowConstants(false)}
      />

      {/* TAB 1: DC CIRCUITS & KIRCHHOFF */}
      {activeTab === 'circuits' && (
        <div className="mt-6">
          <CircuitsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: PHOTOELECTRIC EFFECT */}
      {activeTab === 'photoelectric' && (
        <div className="mt-6">
          <PhotoelectricLab lang={lang} theme={theme} />
        </div>
      )}


      {/* TAB: OPTICS & RAY TRACING */}
      {activeTab === 'optics' && (
        <div className="mt-6">
          <OpticsBenchLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: MAGNETISM & LORENTZ FORCE */}
      {activeTab === 'magnetism' && (
        <div className="mt-6">
          <MagnetismLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 3: AC DYNAMO & INDUCTION */}
      {activeTab === 'dynamo' && (
        <div className="mt-6">
          <DynamoInductionLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 4: RLC RESONANCE & AC CIRCUITS */}
      {activeTab === 'resonance' && (
        <div className="mt-6">
          <RLCResonanceLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 5: BOHR SPECTRA & LASERS */}
      {activeTab === 'atomic_lasers' && (
        <div className="mt-6">
          <AtomicLaserLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: SEMICONDUCTORS, TRANSISTORS & COOLIDGE X-RAYS */}
      {activeTab === 'electronics' && (
        <div className="mt-6">
          <SemiconductorElectronicsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: ACTIVE RECALL FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="mt-6">
          <PhysicsFlashcards lang={lang} theme={theme} />
        </div>
      )}
    </div>
  );
};
