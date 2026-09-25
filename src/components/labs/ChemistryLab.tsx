import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  BookOpen,
  ChevronDown,
  Maximize2,
  Minimize2,
  Scale,
  Atom,
  Radio,
  CircleDot,
  Award,
} from 'lucide-react';
import { TransitionMetalsLab } from './TransitionMetalsLab';
import { EquilibriumLab } from './EquilibriumLab';
import { ElectrochemistryLab } from './ElectrochemistryLab';
import { OrganicChemistryLab } from './OrganicChemistryLab';
import { QualitativeAnalysisLab } from './QualitativeAnalysisLab';
import { TitrationLab } from './TitrationLab';
import { InteractiveTitrationStudio } from '../InteractiveTitrationStudio';
import { Interactive3DEquilibriumStudio } from '../Interactive3DEquilibriumStudio';
import { ChemistryFlashcards } from './ChemistryFlashcards';
import { ChemistryConstantsDrawer } from './ChemistryConstantsDrawer';
import { Interactive3DMolecularStudio } from '../Interactive3DMolecularStudio';
import { Interactive3DElectrochemStudio } from '../Interactive3DElectrochemStudio';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

// Dedicated 4K Museum Archival Studios
import { LavoisierCombustionStudio } from './chemistry/LavoisierCombustionStudio';
import { MendeleevPeriodicStudio } from './chemistry/MendeleevPeriodicStudio';
import { CurieRadioactivityStudio } from './chemistry/CurieRadioactivityStudio';
import { BohrQuantumAtomStudio } from './chemistry/BohrQuantumAtomStudio';

export type ChemTab =
  | 'equilibrium'
  | 'transition'
  | 'qualitative'
  | 'titration'
  | 'electrochemistry'
  | 'electrochem_3d'
  | 'organic'
  | 'molecular_3d'
  | 'flashcards'
  | 'lavoisier_combustion'
  | 'mendeleev_periodic'
  | 'curie_radioactivity'
  | 'bohr_atom';

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
  const [equilibriumView, setEquilibriumView] = useState<'studio' | 'apparatus'>('studio');
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
        <div className={inFullscreen ? 'flex-1 min-h-0 space-y-3' : 'mt-4 space-y-3'}>
          <div
            className={`flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl border shadow-sm transition-colors ${
              isContrast
                ? 'bg-black border-2 border-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <span
              className={`text-xs font-bold flex items-center gap-1.5 ${
                isLight ? 'text-slate-700' : isContrast ? 'text-white' : 'text-slate-300'
              }`}
            >
              <span>⚖️</span>
              <span>{isArabic ? 'بيئة الاتزان الكيميائي ومبدأ لوشاتيليه:' : 'Chemical Equilibrium & Le Chatelier Environment:'}</span>
            </span>
            <div
              className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs flex-wrap ${
                isContrast
                  ? 'bg-black border-white'
                  : isLight
                  ? 'bg-slate-100 border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={() => setEquilibriumView('studio')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center ${
                  equilibriumView === 'studio'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : isContrast
                    ? 'text-white hover:bg-neutral-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {isArabic ? 'استوديو الاتزان الكيميائي 3D' : 'Interactive 3D Equilibrium Studio'}
              </button>
              <button
                type="button"
                onClick={() => setEquilibriumView('apparatus')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center ${
                  equilibriumView === 'apparatus'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : isContrast
                    ? 'text-white hover:bg-neutral-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {isArabic ? 'محاكي الأجهزة ومعادلات الاتزان 2D' : '2D Apparatus & Kinetics Lab'}
              </button>
            </div>
          </div>

          {equilibriumView === 'studio' ? (
            <Interactive3DEquilibriumStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={inFullscreen}
            />
          ) : (
            <EquilibriumLab lang={lang} theme={theme} />
          )}
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
          <div
            className={`flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl border shadow-sm transition-colors ${
              isContrast
                ? 'bg-black border-2 border-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <span
              className={`text-xs font-bold flex items-center gap-1.5 ${
                isLight ? 'text-slate-700' : isContrast ? 'text-white' : 'text-slate-300'
              }`}
            >
              <span>💧</span>
              <span>{isArabic ? 'بيئة معايرة الأحماض والقواعد ومخططات pH:' : 'Acid-Base Titration & pH Environment:'}</span>
            </span>
            <div
              className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs flex-wrap ${
                isContrast
                  ? 'bg-black border-white'
                  : isLight
                  ? 'bg-slate-100 border-slate-200'
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={() => setTitrationView('studio')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center ${
                  titrationView === 'studio'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : isContrast
                    ? 'text-white hover:bg-neutral-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {isArabic ? 'استوديو منحنيات pH التفاعلي' : 'Interactive pH Curve Studio'}
              </button>
              <button
                type="button"
                onClick={() => setTitrationView('apparatus')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center ${
                  titrationView === 'apparatus'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : isContrast
                    ? 'text-white hover:bg-neutral-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
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

      {/* TAB 8: 4K MUSEUM STUDIO 1 - LAVOISIER 1789 COMBUSTION & MASS CONSERVATION */}
      {activeTab === 'lavoisier_combustion' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <LavoisierCombustionStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 9: 4K MUSEUM STUDIO 2 - MENDELEEV 1869 PERIODIC SYSTEM MANUSCRIPT */}
      {activeTab === 'mendeleev_periodic' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <MendeleevPeriodicStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 10: 4K MUSEUM STUDIO 3 - MARIE CURIE 1898 RADIOACTIVITY NOTEBOOK */}
      {activeTab === 'curie_radioactivity' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <CurieRadioactivityStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 11: 4K MUSEUM STUDIO 4 - NIELS BOHR 1913 QUANTUM ATOM */}
      {activeTab === 'bohr_atom' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <BohrQuantumAtomStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
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
      <option value="lavoisier_combustion" className="bg-slate-900 text-white">
        🏛️ [09] {isArabic ? 'استوديو لافوازييه وبقاء المادة 1789 (4K)' : 'Lavoisier 1789 Mass Conservation (4K)'}
      </option>
      <option value="mendeleev_periodic" className="bg-slate-900 text-white">
        🏛️ [10] {isArabic ? 'استوديو مخطوطة مندليف والجدول الدوري 1869 (4K)' : 'Mendeleev 1869 Periodic Law (4K)'}
      </option>
      <option value="curie_radioactivity" className="bg-slate-900 text-white">
        🏛️ [11] {isArabic ? 'استوديو دفتر ماري كوري والنشاط الإشعاعي 1898 (4K)' : 'Marie Curie 1898 Radioactivity (4K)'}
      </option>
      <option value="bohr_atom" className="bg-slate-900 text-white">
        🏛️ [12] {isArabic ? 'استوديو نيلز بور والذرة الكمية 1913 (4K)' : 'Niels Bohr 1913 Quantum Atom (4K)'}
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
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-cyan-950/40 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900/50 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
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
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
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
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm ${
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
              className={`min-h-[44px] w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
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
            className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{isArabic ? 'شاشة كاملة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* 4K Museum Archival Studios Showcase Jump Cards */}
      <div
        className={`mt-5 p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-white'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-gradient-to-r from-emerald-950/20 via-cyan-950/20 to-teal-950/20 border-emerald-900/30 shadow-md'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`p-1.5 rounded-lg border ${
                isContrast
                  ? 'bg-white text-black border-white'
                  : isLight
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                  : 'bg-emerald-600/20 border-emerald-500/30 text-emerald-400'
              }`}
            >
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                <span>{isArabic ? 'معرض المخطوطات واللوحات الكيميائية الأرشيفية فائق الدقة (4K)' : 'Curated 4K Chemical Archival Museum Studios'}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-mono font-bold ${
                    isContrast
                      ? 'bg-white text-black border-white'
                      : isLight
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}
                >
                  {isArabic ? 'ثانوية عامة وبكالوريا' : 'Baccalaureate Archival'}
                </span>
              </h3>
              <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic
                  ? 'استكشف الوثائق الأصلية لأهم ٤ تحولات في تاريخ الكيمياء والفيزياء الذرية مع نقاط تفاعلية ومحاكيات رقمية دقيقة'
                  : 'Inspect original historic plates of 4 seminal chemistry breakthroughs with interactive hotspots & simulations'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Studio 1: Lavoisier 1789 */}
          <button
            onClick={() => handleTabChange('lavoisier_combustion')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'lavoisier_combustion'
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
                1789 CE
              </span>
              <Scale className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-amber-500 transition-colors">
                {isArabic ? 'لافوازييه وحفظ الكتلة' : 'Lavoisier Combustion'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'الإنبيق المحكم، دحض الفلوجستون، وحفظ الكتلة المتزنة' : 'Traité Élémentaire, Closed Retort & Mass Conservation'}
              </p>
            </div>
          </button>

          {/* Studio 2: Mendeleev 1869 */}
          <button
            onClick={() => handleTabChange('mendeleev_periodic')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'mendeleev_periodic'
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
                1869 CE
              </span>
              <Atom className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-emerald-500 transition-colors">
                {isArabic ? 'مندليف والقانون الدوري' : 'Mendeleev Periodic Law'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'مخطوطة بطرسبرغ، تنبؤ إيكا-ألومنيوم، ودورية العناصر' : 'Manuscript System, Eka-Elements & Periodic Law'}
              </p>
            </div>
          </button>

          {/* Studio 3: Curie 1898 */}
          <button
            onClick={() => handleTabChange('curie_radioactivity')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'curie_radioactivity'
                ? isLight
                  ? 'bg-cyan-50 border-cyan-500 ring-2 ring-cyan-400/50 text-slate-900 shadow-md'
                  : 'bg-cyan-950/40 border-cyan-500 text-white shadow-lg ring-1 ring-cyan-500/50'
                : isLight
                ? 'bg-white hover:bg-cyan-50/50 border-slate-200 hover:border-cyan-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-cyan-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-cyan-100 text-cyan-900 border-cyan-300'
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                }`}
              >
                1898 CE
              </span>
              <Radio className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-cyan-500 transition-colors">
                {isArabic ? 'ماري كوري والنشاط الإشعاعي' : 'Curie Radioactivity'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'دفتر المختبر، البولونيوم والراديوم، ومحاكي الانحلال' : 'Pitchblende Fractionation, Polonium & Radium Decay'}
              </p>
            </div>
          </button>

          {/* Studio 4: Bohr 1913 */}
          <button
            onClick={() => handleTabChange('bohr_atom')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'bohr_atom'
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
                1913 CE
              </span>
              <CircleDot className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-purple-500 transition-colors">
                {isArabic ? 'بور ونموذج الذرة الكمومي' : 'Bohr Quantum Atom'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'مدارات بلانك، انبعاث الفوتونات، وسلسلة بالمر' : 'Quantized Orbits, Photon Emission & Balmer Spectra'}
              </p>
            </div>
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
