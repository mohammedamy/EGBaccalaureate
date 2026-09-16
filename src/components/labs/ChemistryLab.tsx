import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import { TransitionMetalsLab } from './TransitionMetalsLab';
import { EquilibriumLab } from './EquilibriumLab';
import { ElectrochemistryLab } from './ElectrochemistryLab';
import { OrganicChemistryLab } from './OrganicChemistryLab';
import { QualitativeAnalysisLab } from './QualitativeAnalysisLab';
import { TitrationLab } from './TitrationLab';
import { InteractiveTitrationStudio } from '../InteractiveTitrationStudio';
import { ChemistryFlashcards } from './ChemistryFlashcards';
import { ChemistryConstantsDrawer } from './ChemistryConstantsDrawer';

export type ChemTab =
  | 'equilibrium'
  | 'transition'
  | 'qualitative'
  | 'titration'
  | 'electrochemistry'
  | 'organic'
  | 'flashcards';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: ChemTab;
}

export const ChemistryLab: React.FC<Props> = ({ lang, theme = 'dark', initialTab }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<ChemTab>(initialTab || 'equilibrium');
  const [titrationView, setTitrationView] = useState<'studio' | 'apparatus'>('studio');
  const [isConstantsOpen, setIsConstantsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);


  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
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
                ? 'bg-black border-emerald-400 text-emerald-400'
                : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-emerald-400/40 shadow-emerald-500/20'
            }`}
          >
            <FlaskConical className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الكيمياء والاتزان والعناصر الانتقالية التفاعلي' : 'Virtual Chemistry & Transition Kinetics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-emerald-400 text-black border-emerald-300'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                }`}
              >
                Le Chatelier & 3d Crucible
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكي قاعدة لوشاتيليه والاتزان الكيميائي، استوديو العناصر الانتقالية وتعدين الحديد، ومحاكي منحنيات المعايرة'
                : 'Le Chatelier equilibrium simulator, 3d transition metals orbital studio, and acid-base titration engine'}
            </p>
          </div>
        </div>

        {/* Action Controls: Constants Button + Subtabs */}
        <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto">
          <button
            onClick={() => setIsConstantsOpen(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm ${
              isContrast
                ? 'bg-black border-cyan-400 text-cyan-400 hover:bg-cyan-950'
                : isLight
                ? 'bg-cyan-50 border-cyan-300 text-cyan-800 hover:bg-cyan-100'
                : 'bg-cyan-950/40 border-cyan-700/60 text-cyan-300 hover:bg-cyan-900/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isArabic ? 'ثوابت وقوانين الكيمياء' : 'Constants & Calculators'}</span>
          </button>

          {/* Subtabs Dropdown */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as ChemTab)}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                isContrast
                  ? 'bg-black text-white border-emerald-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              <option value="equilibrium" className="bg-slate-900 text-white">
                ⚖️ {isArabic ? 'الاتزان الكيميائي وقاعدة لوشاتيليه' : 'Equilibrium & Le Chatelier'}
              </option>
              <option value="transition" className="bg-slate-900 text-white">
                🔥 {isArabic ? 'العناصر الانتقالية وخامات الحديد' : 'Transition Elements & Iron'}
              </option>
              <option value="qualitative" className="bg-slate-900 text-white">
                🧪 {isArabic ? 'التحليل الوصفي والكواشف المخبرية' : 'Qualitative Chemical Analysis'}
              </option>
              <option value="titration" className="bg-slate-900 text-white">
                💧 {isArabic ? 'معايرة الأحماض والقواعد و pH' : 'pH Curve & Titration'}
              </option>
              <option value="electrochemistry" className="bg-slate-900 text-white">
                🔋 {isArabic ? 'الكيمياء الكهربية والخلايا الجلفانية' : 'Electrochemistry & Cells'}
              </option>
              <option value="organic" className="bg-slate-900 text-white">
                ⚗️ {isArabic ? 'الكيمياء العضوية ومسارات التخليق' : 'Organic Synthetic Roadmaps'}
              </option>
              <option value="flashcards" className="bg-slate-900 text-white">
                🗂️ {isArabic ? 'كروت المراجعة والكواشف الذكية' : 'Review & Flashcards'}
              </option>
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* TAB 1: EQUILIBRIUM & LE CHATELIER VIRTUAL LAB */}
      {activeTab === 'equilibrium' && (
        <div className="mt-4">
          <EquilibriumLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: TRANSITION METALS & METALLURGY VIRTUAL LAB */}
      {activeTab === 'transition' && (
        <div className="mt-4">
          <TransitionMetalsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 3: TITRATION & PH */}
      {activeTab === 'titration' && (
        <div className="mt-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span>💧</span>
              <span>{isArabic ? 'بيئة معايرة الأحماض والقواعد ومخططات pH:' : 'Acid-Base Titration & pH Environment:'}</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setTitrationView('studio')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  titrationView === 'studio' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'استوديو منحنيات pH التفاعلي' : 'Interactive pH Curve Studio'}
              </button>
              <button
                onClick={() => setTitrationView('apparatus')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  titrationView === 'apparatus' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'محاكي السحاحة والمختبر' : 'Burette Apparatus Lab'}
              </button>
            </div>
          </div>

          {titrationView === 'studio' ? (
            <InteractiveTitrationStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={false}
            />
          ) : (
            <TitrationLab lang={lang} theme={theme} />
          )}
        </div>
      )}


      {/* TAB 4: ELECTROCHEMISTRY & GALVANIC CELLS */}
      {activeTab === 'electrochemistry' && (
        <div className="mt-6">
          <ElectrochemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 5: QUALITATIVE ANALYSIS & CHEMICAL DETECTION */}
      {activeTab === 'qualitative' && (
        <div className="mt-6">
          <QualitativeAnalysisLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: ORGANIC CHEMISTRY ROADMAPS & MECHANISMS */}
      {activeTab === 'organic' && (
        <div className="mt-6">
          <OrganicChemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 7: CHEMISTRY FLASHCARDS & REAGENT CHALLENGE */}
      {activeTab === 'flashcards' && (
        <div className="mt-6">
          <ChemistryFlashcards lang={lang} theme={theme} />
        </div>
      )}

      {/* Slide-over Chemistry Constants & Live Calculators Drawer */}
      <ChemistryConstantsDrawer
        isOpen={isConstantsOpen}
        onClose={() => setIsConstantsOpen(false)}
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
