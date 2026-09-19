import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  BookOpen,
  ChevronDown,
  Maximize2,
  Minimize2,
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
import { Interactive3DMolecularStudio } from '../Interactive3DMolecularStudio';
import { Interactive3DElectrochemStudio } from '../Interactive3DElectrochemStudio';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

export type ChemTab =
  | 'equilibrium'
  | 'transition'
  | 'qualitative'
  | 'titration'
  | 'electrochemistry'
  | 'electrochem_3d'
  | 'organic'
  | 'molecular_3d'
  | 'flashcards';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: ChemTab;
  onTabChange?: (tab: ChemTab) => void;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
}

export const ChemistryLab: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialTab,
  onTabChange,
  isFullscreen: isFullscreenProp,
  defaultFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<ChemTab>(initialTab || 'equilibrium');
  const [titrationView, setTitrationView] = useState<'studio' | 'apparatus'>('studio');
  const [isConstantsOpen, setIsConstantsOpen] = useState<boolean>(false);

  const { isFullscreen: isNativeFs, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);

  const handleTabChange = (newTab: ChemTab) => {
    setActiveTab(newTab);
    onTabChange?.(newTab);
  };

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);


  const renderTabContent = (inFullscreen: boolean) => (
    <>
      {/* TAB 1: EQUILIBRIUM & LE CHATELIER VIRTUAL LAB */}
      {activeTab === 'equilibrium' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-4'}>
          <EquilibriumLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: TRANSITION METALS & METALLURGY VIRTUAL LAB */}
      {activeTab === 'transition' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-4'}>
          <TransitionMetalsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 3: TITRATION & PH */}
      {activeTab === 'titration' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 space-y-3' : 'mt-6 space-y-3'}>
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
              isFullscreen={inFullscreen}
            />
          ) : (
            <TitrationLab lang={lang} theme={theme} />
          )}
        </div>
      )}

      {/* TAB 4: ELECTROCHEMISTRY & GALVANIC CELLS */}
      {activeTab === 'electrochemistry' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <ElectrochemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D ELECTROCHEMICAL CELL & DANIELL REACTOR STUDIO */}
      {activeTab === 'electrochem_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DElectrochemStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
            isFullscreen={inFullscreen}
          />
        </div>
      )}

      {/* TAB 5: QUALITATIVE ANALYSIS & CHEMICAL DETECTION */}
      {activeTab === 'qualitative' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <QualitativeAnalysisLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: ORGANIC CHEMISTRY ROADMAPS & MECHANISMS */}
      {activeTab === 'organic' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <OrganicChemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D MOLECULAR GEOMETRY & METALLURGY ALLOYS STUDIO */}
      {activeTab === 'molecular_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DMolecularStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
          />
        </div>
      )}

      {/* TAB 7: CHEMISTRY FLASHCARDS & REAGENT CHALLENGE */}
      {activeTab === 'flashcards' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <ChemistryFlashcards lang={lang} theme={theme} />
        </div>
      )}
    </>
  );

  const subtabsOptions = (
    <>
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
        🔋 {isArabic ? 'الكيمياء الكهربية والخلايا (2D)' : 'Electrochemistry & Cells (2D)'}
      </option>
      <option value="electrochem_3d" className="bg-slate-900 text-white">
        ⚡ {isArabic ? 'مفاعل الخلايا ودانيال والقنطرة الملحية 3D' : '3D Electrochemical Cell & Daniell Reactor'}
      </option>
      <option value="organic" className="bg-slate-900 text-white">
        ⚗️ {isArabic ? 'الكيمياء العضوية ومسارات التخليق' : 'Organic Synthetic Roadmaps'}
      </option>
      <option value="molecular_3d" className="bg-slate-900 text-white">
        🧬 {isArabic ? 'استوديو الأشكال الجزيئية والسبائك 3D' : '3D Molecular Geometry & Metallurgy Alloys'}
      </option>
      <option value="flashcards" className="bg-slate-900 text-white">
        🗂️ {isArabic ? 'كروت المراجعة والكواشف الذكية' : 'Review & Flashcards'}
      </option>
    </>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-slate-950 text-slate-100 font-sans">
        {/* Workstation Top Bar */}
        <div className="min-h-[54px] sm:min-h-[58px] flex items-center justify-between gap-3 px-3.5 py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shrink-0 backdrop-blur-md shadow-lg z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shrink-0">
              <FlaskConical className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                  {isArabic ? 'مختبر الكيمياء والاتزان والعناصر الانتقالية التفاعلي' : 'Virtual Chemistry & Transition Kinetics Lab'}
                </h2>
                <span className="hidden sm:inline text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 uppercase shrink-0">
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
                onChange={(e) => handleTabChange(e.target.value as ChemTab)}
                aria-label={isArabic ? 'اختر الوحدة الكيميائية' : 'Select Chemistry Module'}
                className="w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              >
                {subtabsOptions}
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <button
              onClick={() => setIsConstantsOpen(true)}
              className="px-3 py-2 rounded-xl bg-cyan-950/40 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900/50 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
              title={isArabic ? 'ثوابت وقوانين الكيمياء' : 'Constants & Calculators'}
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline">{isArabic ? 'الثوابت' : 'Constants'}</span>
            </button>

            {/* Exit Fullscreen button */}
            <button
              onClick={exitFullscreen}
              title={isArabic ? 'تصغير (Esc)' : 'Exit Fullscreen (Esc)'}
              aria-label={isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen'}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
            >
              <Minimize2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">{isArabic ? 'تصغير' : 'Exit'}</span>
            </button>
          </div>
        </div>

        {/* Fullscreen Content Viewport */}
        <div className="flex-1 min-h-0 overflow-y-auto mt-2 flex flex-col">
          {renderTabContent(true)}
        </div>

        {/* Slide-over Chemistry Constants & Live Calculators Drawer */}
        <ChemistryConstantsDrawer
          isOpen={isConstantsOpen}
          onClose={() => setIsConstantsOpen(false)}
          lang={lang}
          theme={theme}
        />
      </div>
    );
  }

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

        {/* Action Controls: Constants Button + Subtabs + Fullscreen Button */}
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
            <span className="hidden sm:inline">{isArabic ? 'ثوابت وقوانين الكيمياء' : 'Constants & Calculators'}</span>
          </button>

          {/* Subtabs Dropdown */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value as ChemTab)}
              aria-label={isArabic ? 'اختر الوحدة الكيميائية' : 'Select Chemistry Module'}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                isContrast
                  ? 'bg-black text-white border-emerald-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              {subtabsOptions}
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <button
            onClick={toggleFullscreen}
            title={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            aria-label={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{isArabic ? 'شاشة كاملة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {renderTabContent(false)}

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
