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
  | 'flashcards';

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
            <div className={`flex items-center gap-1 p-1 rounded-lg border text-xs ${
              isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
            }`}>
              <button
                onClick={() => setPhotoelectricView('studio')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                  photoelectricView === 'studio' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'استوديو جهد الإيقاف وأينشتاين' : 'Einstein Stopping Potential Studio'}
              </button>
              <button
                onClick={() => setPhotoelectricView('apparatus')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
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
        [10] {isArabic ? 'استوديو الذرة الكمية والليزر 3D' : '3D Quantum Atom Studio'}
      </option>
      <option value="electronics" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [11] {isArabic ? 'أشباه الموصلات والترانزستور وأشعة إكس' : 'Semiconductors & Coolidge Tube'}
      </option>
      <option value="flashcards" className={isLight ? 'bg-white text-slate-900' : 'bg-[#161B22] text-white'}>
        [12] {isArabic ? 'بطاقات الاستذكار الفيزيائي' : 'Physics Flashcards'}
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
              className="px-3 py-2 rounded-xl bg-amber-950/40 text-amber-300 border border-amber-800/60 hover:bg-amber-900/50 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
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
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
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
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
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
            <span className="hidden sm:inline">{isArabic ? 'الثوابت والتحويلات' : 'Constants & Units'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            title={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            aria-label={isArabic ? 'ملء الشاشة' : 'Fullscreen Workstation'}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
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

      {renderTabContent(false)}
    </div>
  );
};
