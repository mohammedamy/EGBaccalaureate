import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { PhotoelectricLab } from './PhotoelectricLab';
import { InteractivePhotoelectricStudio } from '../InteractivePhotoelectricStudio';
import {
  Zap,
  BookOpen,
  ChevronDown,
  Maximize2,
  Minimize2,
  Globe2,
  TrendingDown,
  Sun,
  Award,
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
import { Interactive3DAtomStudio } from '../Interactive3DAtomStudio';
import { Interactive3DInductionStudio } from '../Interactive3DInductionStudio';
import { Interactive3DOpticsPrismStudio } from '../Interactive3DOpticsPrismStudio';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

// Dedicated 4K Museum Archival Studios
import { NewtonPrincipiaStudio } from './physics/NewtonPrincipiaStudio';
import { GalileoKinematicsStudio } from './physics/GalileoKinematicsStudio';
import { FaradayInductionStudio } from './physics/FaradayInductionStudio';
import { EinsteinPhotoelectricStudio } from './physics/EinsteinPhotoelectricStudio';

export type PhysicsTab =
  | 'circuits'
  | 'optics'
  | 'optics_3d'
  | 'magnetism'
  | 'dynamo'
  | 'induction_3d'
  | 'resonance'
  | 'photoelectric'
  | 'atomic_lasers'
  | 'electronics'
  | 'atom_3d'
  | 'flashcards'
  | 'newton_principia'
  | 'galileo_kinematics'
  | 'faraday_induction'
  | 'einstein_photoelectric';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: PhysicsTab;
  onTabChange?: (tab: PhysicsTab) => void;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
}

export const PhysicsLab: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialTab = 'circuits',
  onTabChange,
  isFullscreen: isFullscreenProp,
  defaultFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<PhysicsTab>(initialTab);
  const [photoelectricView, setPhotoelectricView] = useState<'studio' | 'apparatus'>('studio');
  const [showConstants, setShowConstants] = useState<boolean>(false);

  const { isFullscreen: isNativeFs, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);

  const handleTabChange = (newTab: PhysicsTab) => {
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
      {/* TAB 1: DC CIRCUITS & KIRCHHOFF */}
      {activeTab === 'circuits' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <CircuitsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: PHOTOELECTRIC EFFECT */}
      {activeTab === 'photoelectric' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 space-y-3' : 'mt-6 space-y-3'}>
          <div className={`flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl border ${
            isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#161B22] border-[#30363D] shadow-xs'
          }`}>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              <span>{isArabic ? 'بيئة الظاهرة الكهروضوئية ومعادلة أينشتاين:' : 'Photoelectric Effect & Einstein Equations:'}</span>
            </span>
            <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs flex-wrap ${
              isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
            }`}>
              <button
                onClick={() => setPhotoelectricView('studio')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-semibold transition-colors cursor-pointer flex items-center ${
                  photoelectricView === 'studio' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'استوديو جهد الإيقاف وأينشتاين' : 'Einstein Stopping Potential Studio'}
              </button>
              <button
                onClick={() => setPhotoelectricView('apparatus')}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-semibold transition-colors cursor-pointer flex items-center ${
                  photoelectricView === 'apparatus' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'محاكي الخلية الكهروضوئية' : 'Photocell Apparatus Lab'}
              </button>
            </div>
          </div>

          {photoelectricView === 'studio' ? (
            <InteractivePhotoelectricStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={inFullscreen}
            />
          ) : (
            <PhotoelectricLab lang={lang} theme={theme} />
          )}
        </div>
      )}

      {/* TAB: OPTICS & RAY TRACING */}
      {activeTab === 'optics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <OpticsBenchLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D OPTICS & PRISM DISPERSION STUDIO */}
      {activeTab === 'optics_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DOpticsPrismStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
            isFullscreen={inFullscreen}
          />
        </div>
      )}

      {/* TAB: MAGNETISM & LORENTZ FORCE */}
      {activeTab === 'magnetism' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <MagnetismLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: AC DYNAMO & INDUCTION */}
      {activeTab === 'dynamo' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <DynamoInductionLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D ELECTROMAGNETIC INDUCTION & DYNAMO STUDIO */}
      {activeTab === 'induction_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DInductionStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
            isFullscreen={inFullscreen}
          />
        </div>
      )}

      {/* TAB: RLC RESONANCE & AC CIRCUITS */}
      {activeTab === 'resonance' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <RLCResonanceLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: BOHR SPECTRA & LASERS */}
      {activeTab === 'atomic_lasers' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <AtomicLaserLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D QUANTUM ATOM & LASER STUDIO */}
      {activeTab === 'atom_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DAtomStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
          />
        </div>
      )}

      {/* TAB: SEMICONDUCTORS, TRANSISTORS & COOLIDGE X-RAYS */}
      {activeTab === 'electronics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <SemiconductorElectronicsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: ACTIVE RECALL FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <PhysicsFlashcards lang={lang} theme={theme} />
        </div>
      )}

      {/* 4K MUSEUM ARCHIVAL STUDIOS */}
      {activeTab === 'newton_principia' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 overflow-y-auto' : 'mt-6'}>
          <NewtonPrincipiaStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        </div>
      )}

      {activeTab === 'galileo_kinematics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 overflow-y-auto' : 'mt-6'}>
          <GalileoKinematicsStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        </div>
      )}

      {activeTab === 'faraday_induction' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 overflow-y-auto' : 'mt-6'}>
          <FaradayInductionStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        </div>
      )}

      {activeTab === 'einstein_photoelectric' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 overflow-y-auto' : 'mt-6'}>
          <EinsteinPhotoelectricStudio isArabic={isArabic} isLight={isLight} isContrast={isContrast} />
        </div>
      )}
    </>
  );

  const subtabsOptions = (
    <>
      <option value="circuits" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [01] {isArabic ? 'دوائر أوم وكيرشوف' : 'DC Circuits & Kirchhoff'}
      </option>
      <option value="optics" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [02] {isArabic ? 'البصريات وتجربة ينج (2D)' : 'Optics & Ray-Tracing (2D)'}
      </option>
      <option value="optics_3d" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [03] {isArabic ? 'استوديو المنشور وتشتت الضوء 3D' : '3D Optics & Prism Dispersion Studio'}
      </option>
      <option value="magnetism" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [04] {isArabic ? 'المغناطيسية ولورنتز' : 'Magnetism & Lorentz'}
      </option>
      <option value="dynamo" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [05] {isArabic ? 'الدينامو والحث الكهرومغناطيسي' : 'AC Dynamo & Induction'}
      </option>
      <option value="induction_3d" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [06] {isArabic ? 'استوديو الحث والدينامو 3D' : '3D Induction & Dynamo Studio'}
      </option>
      <option value="resonance" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [07] {isArabic ? 'دوائر الرنين المتردد RLC' : 'RLC Resonance & AC'}
      </option>
      <option value="photoelectric" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [08] {isArabic ? 'الظاهرة الكهروضوئية وثابت بلانك' : 'Photoelectric Effect & Planck'}
      </option>
      <option value="atomic_lasers" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [09] {isArabic ? 'طيف بور والليزر' : 'Bohr Spectra & Laser'}
      </option>
      <option value="atom_3d" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [10] {isArabic ? 'استوديو الذرة والكم وأنبوبة كولدج 3D' : '3D Quantum Atom & Coolidge Tube Studio'}
      </option>
      <option value="electronics" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [11] {isArabic ? 'أشباه الموصلات والترانزستور وأشعة إكس' : 'Semiconductors & Coolidge Tube'}
      </option>
      <option value="flashcards" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [12] {isArabic ? 'بطاقات الاستذكار الفيزيائي' : 'Physics Flashcards'}
      </option>
      <option value="newton_principia" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [13] 🏛️ {isArabic ? 'استوديو نيوتن والجذب العام 1687 (4K)' : 'Newton 1687 Principia & Gravitation (4K)'}
      </option>
      <option value="galileo_kinematics" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [14] 🏛️ {isArabic ? 'استوديو جاليليو والمستوى المائل 1638 (4K)' : 'Galileo 1638 Kinematics & Inclined Plane (4K)'}
      </option>
      <option value="faraday_induction" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [15] 🏛️ {isArabic ? 'استوديو فاراداي وحلقة الحث 1831 (4K)' : 'Faraday 1831 Induction Torus Ring (4K)'}
      </option>
      <option value="einstein_photoelectric" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [16] 🏛️ {isArabic ? 'استوديو أينشتاين والظاهرة الكهروضوئية 1905 (4K)' : 'Einstein 1905 Photoelectric Quanta (4K)'}
      </option>
    </>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-slate-950 text-slate-100 font-sans">
        {/* Workstation Top Bar */}
        <div className="min-h-[54px] sm:min-h-[58px] flex items-center justify-between gap-3 px-3.5 py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shrink-0 backdrop-blur-md shadow-lg z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shrink-0">
              <Zap className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                  {isArabic ? 'مختبر الفيزياء والدوائر الكهربية والكم التفاعلي' : 'Virtual Physics & Quantum Circuits Lab'}
                </h2>
                <span className="hidden sm:inline text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase shrink-0">
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
                onChange={(e) => handleTabChange(e.target.value as PhysicsTab)}
                aria-label={isArabic ? 'اختر الوحدة الفيزيائية' : 'Select Physics Module'}
                className="w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
              >
                {subtabsOptions}
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <button
              onClick={() => setShowConstants(!showConstants)}
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-amber-950/40 text-amber-300 border border-amber-800/60 hover:bg-amber-900/50 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
              title={isArabic ? 'عرض الثوابت الفيزيائية ومحول الوحدات' : 'View Physical Constants & Unit Converter'}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">{isArabic ? 'الثوابت' : 'Constants'}</span>
            </button>

            {/* Exit Fullscreen button */}
            <button
              onClick={exitFullscreen}
              title={isArabic ? 'تصغير (Esc)' : 'Exit Fullscreen (Esc)'}
              aria-label={isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen'}
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
            >
              <Minimize2 className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{isArabic ? 'تصغير' : 'Exit'}</span>
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

        {/* Fullscreen Content Viewport */}
        <div className="flex-1 min-h-0 overflow-y-auto mt-2 flex flex-col">
          {renderTabContent(true)}
        </div>
      </div>
    );
  }

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

        {/* Subtabs Dropdown, Constants & Fullscreen Button */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value as PhysicsTab)}
              aria-label={isArabic ? 'اختر الوحدة الفيزيائية' : 'Select Physics Module'}
              className={`min-h-[44px] w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                isContrast
                  ? 'bg-black text-white border-cyan-400'
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
            onClick={() => setShowConstants(!showConstants)}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer border ${
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
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{isArabic ? 'الثوابت والتحويلات' : 'Constants & Units'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            aria-label={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">{isArabic ? 'شاشة كاملة' : 'Fullscreen'}</span>
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

      {/* 4K Museum Archival Studios Showcase Jump Cards */}
      <div
        className={`mt-5 p-3.5 sm:p-4 rounded-2xl border transition-all ${
          isContrast
            ? 'bg-black border-2 border-white'
            : isLight
            ? 'bg-slate-50 border-slate-200 shadow-xs'
            : 'bg-gradient-to-r from-indigo-950/20 via-cyan-950/20 to-amber-950/20 border-cyan-900/30 shadow-md'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`p-1.5 rounded-lg border ${
                isContrast
                  ? 'bg-white text-black border-white'
                  : isLight
                  ? 'bg-cyan-100 text-cyan-700 border-cyan-200'
                  : 'bg-cyan-600/20 border-cyan-500/30 text-cyan-400'
              }`}
            >
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                <span>{isArabic ? 'معرض المخطوطات واللوحات الفيزيائية الأرشيفية فائق الدقة (4K)' : 'Curated 4K Physics Archival Museum Studios'}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-mono font-bold ${
                    isContrast
                      ? 'bg-white text-black border-white'
                      : isLight
                      ? 'bg-cyan-100 text-cyan-800 border-cyan-300'
                      : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                  }`}
                >
                  {isArabic ? 'علمي علوم ورياضة' : 'Sciences & Math Core'}
                </span>
              </h3>
              <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic
                  ? 'استكشف الوثائق الأصلية لأهم ٤ ثورات في تاريخ الفيزياء الكلاسيكية والكمية مع نقاط تفاعلية ومحاكيات رقمية دقيقة'
                  : 'Inspect original historic plates of 4 seminal physics breakthroughs with interactive hotspots & simulations'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Studio 1: Newton 1687 */}
          <button
            onClick={() => handleTabChange('newton_principia')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'newton_principia'
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
                1687 CE
              </span>
              <Globe2 className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-indigo-500 transition-colors">
                {isArabic ? 'نيوتن وكتاب البرنسيبيا' : 'Newton 1687 Principia'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'قانون الجذب العام، الميكانيكا المدارية، وتلسكوب 1668' : 'Universal Gravitation, Orbital Mechanics & Telescope'}
              </p>
            </div>
          </button>

          {/* Studio 2: Galileo 1638 */}
          <button
            onClick={() => handleTabChange('galileo_kinematics')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'galileo_kinematics'
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
                1638 CE
              </span>
              <TrendingDown className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-amber-500 transition-colors">
                {isArabic ? 'جاليليو والمستوى المائل' : 'Galileo 1638 Kinematics'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'الساعة المائية، قانون الأعداد الفردية، والسقوط الحر' : 'Inclined Plane, Odd Numbers Law & Clepsydra Timer'}
              </p>
            </div>
          </button>

          {/* Studio 3: Faraday 1831 */}
          <button
            onClick={() => handleTabChange('faraday_induction')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'faraday_induction'
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
                1831 CE
              </span>
              <Zap className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-cyan-500 transition-colors">
                {isArabic ? 'فاراداي وحلقة الحث' : 'Faraday 1831 Induction'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'حلقة الحديد، انحراف الجلفانومتر، ومحاكي الدينامو' : 'Torus Ring, Galvanometer Kick & AC Dynamo Engine'}
              </p>
            </div>
          </button>

          {/* Studio 4: Einstein 1905 */}
          <button
            onClick={() => handleTabChange('einstein_photoelectric')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'einstein_photoelectric'
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
                1905 CE
              </span>
              <Sun className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-emerald-500 transition-colors">
                {isArabic ? 'أينشتاين والظاهرة الكهروضوئية' : 'Einstein 1905 Quanta'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'كمات الضوء، دالة الشغل، ومحاكي جهد الإيقاف' : 'Light Quanta, Work Function & Stopping Potential'}
              </p>
            </div>
          </button>
        </div>
      </div>

      {renderTabContent(false)}
    </div>
  );
};
