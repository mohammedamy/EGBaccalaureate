import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Dna,
  ChevronDown,
  Maximize2,
  Minimize2,
  Microscope,
  Sparkles,
  Activity,
  Award,
} from 'lucide-react';

// High-resolution scientific photos
import sarcomereImg from '../../assets/biology/sarcomere_ultrastructure.jpg';

import { EndocrineLab } from './EndocrineLab';
import { MenstrualCycleLab } from './MenstrualCycleLab';
import { ImmunityLab } from './ImmunityLab';
import { GeneticsLab } from './GeneticsLab';
import { InteractiveGeneticsStudio } from '../InteractiveGeneticsStudio';
import { BioenergeticsLab } from './BioenergeticsLab';
import { BiologyFlashcards } from './BiologyFlashcards';
import { VirtualMicroscope } from '../../core/instruments/VirtualMicroscope';
import { SarcomereZoomLab } from './SarcomereZoomLab';
import { PlantHistologyLab } from './PlantHistologyLab';
import { SkeletonAnatomyLab } from './SkeletonAnatomyLab';
import { HumanBodyAnatomyAtlas } from './HumanBodyAnatomyAtlas';
import { DnaReplicationLab } from './DnaReplicationLab';
import { Interactive3DBioMacromoleculeStudio } from '../Interactive3DBioMacromoleculeStudio';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

// Dedicated 4K Museum Archival Studios
import { HookeCellTheoryStudio } from './biology/HookeCellTheoryStudio';
import { MendelGeneticsStudio } from './biology/MendelGeneticsStudio';
import { FranklinPhoto51DnaStudio } from './biology/FranklinPhoto51DnaStudio';
import { VesaliusFabricaAnatomyStudio } from './biology/VesaliusFabricaAnatomyStudio';

export type BioTab =
  | 'anatomy_atlas'
  | 'skeleton'
  | 'sarcomere'
  | 'dna'
  | 'macromolecule_3d'
  | 'plant'
  | 'microscope'
  | 'endocrine'
  | 'menstrual'
  | 'immunity'
  | 'genetics'
  | 'bioenergetics'
  | 'flashcards'
  | 'hooke_cells'
  | 'mendel_genetics'
  | 'franklin_photo51'
  | 'vesalius_anatomy';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: BioTab;
  onTabChange?: (tab: BioTab) => void;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
}

export const BiologyLab: React.FC<Props> = ({
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

  const [activeTab, setActiveTab] = useState<BioTab>(initialTab || 'anatomy_atlas');
  const [geneticsView, setGeneticsView] = useState<'studio' | 'apparatus'>('studio');

  const { isFullscreen: isNativeFs, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);

  const handleTabChange = (newTab: BioTab) => {
    setActiveTab(newTab);
    onTabChange?.(newTab);
  };

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const renderTabContent = (inFullscreen: boolean) => (
    <>
      {/* TAB 0: HUMAN BODY ANATOMY ATLAS & ORGAN SYSTEMS */}
      {activeTab === 'anatomy_atlas' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <HumanBodyAnatomyAtlas lang={lang} theme={theme} isFullscreen={inFullscreen} />
        </div>
      )}

      {/* TAB 1: HUMAN SKELETON ANATOMY & BONE STUDIO */}
      {activeTab === 'skeleton' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <SkeletonAnatomyLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 2: SARCOMERE SLIDING FILAMENT ENGINE */}
      {activeTab === 'sarcomere' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 space-y-4' : 'mt-6 space-y-6'}>
          {/* High-Res Banner */}
          {!inFullscreen && (
            <div
              className={`relative rounded-2xl overflow-hidden border shadow-xl ${
                isContrast ? 'border-rose-400' : 'border-slate-800'
              }`}
            >
              <img
                src={sarcomereImg}
                alt="Sarcomere Ultrastructure"
                className="w-full h-56 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white uppercase tracking-wider">
                    Huxley Sliding Filament Theory
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black mt-1">
                    {isArabic ? 'نظرية الخيوط المنزلقة (هكسلي) والتركيب الدقيق للقطعة العضلية' : 'Ultrastructure & Sliding Filament Simulation'}
                  </h3>
                  <p className="text-xs text-slate-200 max-w-2xl mt-1 leading-relaxed">
                    {isArabic
                      ? 'تمتد القطعة العضلية (الساركومير) بين خطي Z متتاليين. تتكون من خيوط أكتين رفيعة وخيوط ميوسين سميكة تمتد منها روابط مستعرضة بمساعدة أيونات الكالسيوم وATP.'
                      : 'A sarcomere extends between consecutive Z-discs. Thin actin filaments slide over thick myosin filaments via cross-bridges powered by Ca²⁺ and ATP hydrolysis.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Multi-Scale Mechanical & Biochemical Simulator */}
          <SarcomereZoomLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 3: DNA MOLECULAR ARCHITECTURE, REPLICATION & CENTRAL DOGMA STUDIO */}
      {activeTab === 'dna' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <DnaReplicationLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: 3D DNA DOUBLE HELIX, tRNA & NUCLEOSOME CHROMATIN STUDIO */}
      {activeTab === 'macromolecule_3d' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <Interactive3DBioMacromoleculeStudio
            lang={lang}
            theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
          />
        </div>
      )}

      {/* TAB 4: PLANT HISTOLOGY, SUPPORT & MOVEMENTS STUDIO */}
      {activeTab === 'plant' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <PlantHistologyLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB: VIRTUAL COMPOUND MICROSCOPE */}
      {activeTab === 'microscope' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <VirtualMicroscope lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 5: ENDOCRINE SYSTEM & HORMONAL FEEDBACK */}
      {activeTab === 'endocrine' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <EndocrineLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: 28-DAY MENSTRUAL & OVARIAN CYCLE */}
      {activeTab === 'menstrual' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <MenstrualCycleLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 7: IMMUNOLOGY & IGG ANTIBODY ARCHITECTURE */}
      {activeTab === 'immunity' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <ImmunityLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 8: PUNNETT SQUARES & ABO BLOOD GROUPS */}
      {activeTab === 'genetics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0 space-y-3' : 'mt-6 space-y-3'}>
          <div
            className={`flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl border shadow-sm ${
              isContrast
                ? 'bg-black border-white text-white'
                : isLight
                ? 'bg-slate-50 border-slate-200 text-slate-800'
                : 'bg-slate-900/90 border-slate-800 text-slate-300'
            }`}
          >
            <span className="text-xs font-bold flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-rose-500" />
              <span>{isArabic ? 'بيئة الوراثة والمندلية وفصائل الدم:' : 'Genetics & Mendelian Heredity Environment:'}</span>
            </span>
            <div
              className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <button
                onClick={() => setGeneticsView('studio')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  geneticsView === 'studio' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'استوديو مربعات بانيت المندلية' : 'Mendelian Punnett Studio'}
              </button>
              <button
                onClick={() => setGeneticsView('apparatus')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  geneticsView === 'apparatus' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isArabic ? 'مختبر البيولوجيا الجزيئية وكريسبر' : 'CRISPR & Molecular Lab'}
              </button>
            </div>
          </div>

          {geneticsView === 'studio' ? (
            <InteractiveGeneticsStudio
              lang={lang}
              theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
              isFullscreen={inFullscreen}
            />
          ) : (
            <GeneticsLab lang={lang} theme={theme} />
          )}
        </div>
      )}

      {/* TAB 9: BIOENERGETICS & CELLULAR METABOLISM */}
      {activeTab === 'bioenergetics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <BioenergeticsLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 10: ACTIVE RECALL FLASHCARDS & SPACED REPETITION */}
      {activeTab === 'flashcards' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <BiologyFlashcards lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 11: 4K MUSEUM STUDIO 1 - HOOKE & LEEUWENHOEK CELL THEORY 1665 */}
      {activeTab === 'hooke_cells' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <HookeCellTheoryStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 12: 4K MUSEUM STUDIO 2 - MENDEL PEA HYBRIDIZATION & GENETICS 1866 */}
      {activeTab === 'mendel_genetics' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <MendelGeneticsStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 13: 4K MUSEUM STUDIO 3 - ROSALIND FRANKLIN PHOTO 51 DNA DIFFRACTION 1952 */}
      {activeTab === 'franklin_photo51' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <FranklinPhoto51DnaStudio
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />
        </div>
      )}

      {/* TAB 14: 4K MUSEUM STUDIO 4 - VESALIUS FABRICA SKELETAL & MUSCULAR ANATOMY 1543 */}
      {activeTab === 'vesalius_anatomy' && (
        <div className={inFullscreen ? 'flex-1 min-h-0' : 'mt-6'}>
          <VesaliusFabricaAnatomyStudio
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
      <option value="anatomy_atlas" className="bg-slate-900 text-white">
        [00] {isArabic ? 'أطلس تشريح جسم الإنسان عالي الدقة (أعضاء وأجهزة)' : 'Human Body Anatomy Atlas (Hi-Res)'}
      </option>
      <option value="skeleton" className="bg-slate-900 text-white">
        [01] {isArabic ? 'الهيكل العظمي البشري (٢٠٦ عظمة)' : 'Human Skeleton (206 Bones)'}
      </option>
      <option value="sarcomere" className="bg-slate-900 text-white">
        [02] {isArabic ? 'انزلاق الخيوط وانقباض الساركومير' : 'Sarcomere Contraction'}
      </option>
      <option value="dna" className="bg-slate-900 text-white">
        [03] {isArabic ? 'استوديو اللولب المزدوج وتضاعف DNA' : 'DNA Studio & Replication'}
      </option>
      <option value="macromolecule_3d" className="bg-slate-900 text-white">
        [04] {isArabic ? 'استوديو DNA والنيوكليوسومات و tRNA ثلاثي الأبعاد' : '3D DNA & Nucleosome Studio'}
      </option>
      <option value="plant" className="bg-slate-900 text-white">
        [05] {isArabic ? 'دعامة النبات ومجهر الأنسجة' : 'Plant Histology & Support'}
      </option>
      <option value="microscope" className="bg-slate-900 text-white">
        [06] {isArabic ? 'المجهر الضوئي الافتراضي للشرائح' : 'Virtual Optical Microscope'}
      </option>
      <option value="endocrine" className="bg-slate-900 text-white">
        [07] {isArabic ? 'جهاز الغدد الصماء والاتزان الهرموني' : 'Endocrine System & Hormones'}
      </option>
      <option value="menstrual" className="bg-slate-900 text-white">
        [08] {isArabic ? 'دورة الطمث ومراحل التبويض (٢٨ يوماً)' : 'Menstrual Cycle Simulation'}
      </option>
      <option value="immunity" className="bg-slate-900 text-white">
        [09] {isArabic ? 'الأجسام المضادة والمناعة التكيفية' : 'Immunology & IgG Antibodies'}
      </option>
      <option value="genetics" className="bg-slate-900 text-white">
        [10] {isArabic ? 'الوراثة ومربع بانيت وكريسبر' : 'Genetics & CRISPR Studio'}
      </option>
      <option value="bioenergetics" className="bg-slate-900 text-white">
        [11] {isArabic ? 'الطاقة الحيوية والتمثيل الغذائي وتكوين ATP' : 'Bioenergetics & ATP'}
      </option>
      <option value="flashcards" className="bg-slate-900 text-white">
        [12] {isArabic ? 'بطاقات الاستذكار السريع' : 'Active Flashcards'}
      </option>
      <option value="hooke_cells" className="bg-slate-900 text-white">
        [13] {isArabic ? '🏛️ استوديو هوك وليفنهوك ونشأة الخلية 1665 (4K)' : '🏛️ Hooke & Leeuwenhoek Cell Theory 1665 (4K)'}
      </option>
      <option value="mendel_genetics" className="bg-slate-900 text-white">
        [14] {isArabic ? '🏛️ استوديو أوراق مندل وتجارب تهجين البازلاء 1866 (4K)' : '🏛️ Mendel Pea Genetics Manuscript 1866 (4K)'}
      </option>
      <option value="franklin_photo51" className="bg-slate-900 text-white">
        [15] {isArabic ? '🏛️ استوديو صورة 51 لروزليند فرانكلين وحيود DNA 1952 (4K)' : '🏛️ Rosalind Franklin Photo 51 DNA 1952 (4K)'}
      </option>
      <option value="vesalius_anatomy" className="bg-slate-900 text-white">
        [16] {isArabic ? '🏛️ استوديو فيزاليوس وتشريح الهيكل العضلي 1543 (4K)' : '🏛️ Vesalius Fabrica Musculo-Skeletal 1543 (4K)'}
      </option>
    </>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-slate-950 text-slate-100 font-sans">
        {/* Workstation Top Bar */}
        <div className="min-h-[54px] sm:min-h-[58px] flex items-center justify-between gap-3 px-3.5 py-2 bg-slate-900/95 border border-slate-800 rounded-2xl shrink-0 backdrop-blur-md shadow-lg z-10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shrink-0">
              <Dna className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black tracking-tight text-white truncate">
                  {isArabic ? 'مختبر الأحياء والبيولوجيا الجزيئية التفاعلي' : 'Virtual Biology & Molecular Genetics Lab'}
                </h2>
                <span className="hidden sm:inline text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/60 uppercase shrink-0">
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
                onChange={(e) => handleTabChange(e.target.value as BioTab)}
                aria-label={isArabic ? 'اختر الوحدة البيولوجية' : 'Select Biology Module'}
                className="w-full appearance-none pl-3 pr-8 rtl:pr-3 rtl:pl-8 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              >
                {subtabsOptions}
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Exit Fullscreen button */}
            <button
              onClick={exitFullscreen}
              title={isArabic ? 'تصغير (Esc)' : 'Exit Fullscreen (Esc)'}
              aria-label={isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen'}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-xs"
            >
              <Minimize2 className="w-4 h-4 text-rose-400" />
              <span className="hidden sm:inline">{isArabic ? 'تصغير' : 'Exit'}</span>
            </button>
          </div>
        </div>

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
          ? 'bg-black border-2 border-rose-400 text-white'
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
                ? 'bg-black border-rose-400 text-rose-400'
                : 'bg-gradient-to-br from-rose-500 to-pink-600 text-white border-rose-400/40 shadow-rose-500/20'
            }`}
          >
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الأحياء والبيولوجيا الجزيئية التفاعلي' : 'Virtual Biology & Molecular Genetics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-rose-400 text-black border-rose-300'
                    : isLight
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                }`}
              >
                Hi-Res Micro Atlas
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'أطلس تشريحي عالي الدقة (٢٠٦ عظمة)، محاكي انزلاق خيوط الساركومير، واستوديو اللولب المزدوج لترجمة الشفرة الوراثية'
                : 'High-resolution anatomical atlas (206 bones), sarcomere sliding filament engine, and DNA codon translation studio'}
            </p>
          </div>
        </div>

        {/* Subtabs Dropdown + Fullscreen Button */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value as BioTab)}
              aria-label={isArabic ? 'اختر الوحدة البيولوجية' : 'Select Biology Module'}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500 ${
                isContrast
                  ? 'bg-black text-white border-rose-400'
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
            className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5 text-rose-400" />
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
            : 'bg-gradient-to-r from-rose-950/20 via-purple-950/20 to-blue-950/20 border-rose-900/30 shadow-md'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`p-1.5 rounded-lg border ${
                isContrast
                  ? 'bg-white text-black border-white'
                  : isLight
                  ? 'bg-rose-100 text-rose-700 border-rose-200'
                  : 'bg-rose-600/20 border-rose-500/30 text-rose-400'
              }`}
            >
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                <span>{isArabic ? 'معرض المخطوطات واللوحات البيولوجية الأرشيفية فائق الدقة (4K)' : 'Curated 4K Biological Archival Museum Studios'}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-mono font-bold ${
                    isContrast
                      ? 'bg-white text-black border-white'
                      : isLight
                      ? 'bg-rose-100 text-rose-800 border-rose-300'
                      : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                  }`}
                >
                  علمي علوم
                </span>
              </h3>
              <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic
                  ? 'استكشف الوثائق الأصلية لأهم ٤ اكتشافات في تاريخ البيولوجيا مع نقاط تفاعلية فاحصة ومحاكيات رقمية دقيقة'
                  : 'Inspect original historic plates of 4 seminal biology breakthroughs with interactive hotspots & simulations'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Studio 1: Hooke 1665 */}
          <button
            onClick={() => handleTabChange('hooke_cells')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'hooke_cells'
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
                1665 CE
              </span>
              <Microscope className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-amber-500 transition-colors">
                {isArabic ? 'هوك ونشأة الخلية' : 'Hooke Micrographia'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'خلايا الفلين وتكبير العدسات والنظرية الخلوية' : 'Cork Cellulae, Dual-Lens Optics & Cell Theory'}
              </p>
            </div>
          </button>

          {/* Studio 2: Mendel 1866 */}
          <button
            onClick={() => handleTabChange('mendel_genetics')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'mendel_genetics'
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
                1866 CE
              </span>
              <Sparkles className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-emerald-500 transition-colors">
                {isArabic ? 'مخطوطة مندل والوراثة' : 'Mendel Pea Genetics'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'تهجين البازلاء وقوانين الانعزال ومربعات بانيت' : 'Pisum Hybridization, Segregation & Punnett Engine'}
              </p>
            </div>
          </button>

          {/* Studio 3: Franklin 1952 */}
          <button
            onClick={() => handleTabChange('franklin_photo51')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'franklin_photo51'
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
                1952 CE
              </span>
              <Dna className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-cyan-500 transition-colors">
                {isArabic ? 'صورة 51 وحيود DNA' : 'Franklin Photo 51'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'أشعة X والخطوة 3.4nm واللولب المزدوج' : 'B-DNA X-Ray Diffraction, Helical Pitch & Tm'}
              </p>
            </div>
          </button>

          {/* Studio 4: Vesalius 1543 */}
          <button
            onClick={() => handleTabChange('vesalius_anatomy')}
            className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group ${
              activeTab === 'vesalius_anatomy'
                ? isLight
                  ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-400/50 text-slate-900 shadow-md'
                  : 'bg-rose-950/40 border-rose-500 text-white shadow-lg ring-1 ring-rose-500/50'
                : isLight
                ? 'bg-white hover:bg-rose-50/50 border-slate-200 hover:border-rose-400 text-slate-800'
                : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-rose-500/50 text-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border font-mono ${
                  isLight
                    ? 'bg-rose-100 text-rose-900 border-rose-300'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                }`}
              >
                1543 CE
              </span>
              <Activity className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 className="text-xs font-black group-hover:text-rose-500 transition-colors">
                {isArabic ? 'تشريح فيزاليوس الحركي' : 'Vesalius Fabrica'}
              </h4>
              <p className={`text-[10px] line-clamp-2 mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic ? 'الهيكل البشري والعمود الفقري وانزلاق خيوط العضلات' : 'Axial-Appendicular Skeleton & Huxley Filaments'}
              </p>
            </div>
          </button>
        </div>
      </div>

      {renderTabContent(false)}
    </div>
  );
};
