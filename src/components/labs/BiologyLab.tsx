import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Dna,
  ChevronDown,
  Maximize2,
  Minimize2,
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
import { DnaReplicationLab } from './DnaReplicationLab';
import { Interactive3DBioMacromoleculeStudio } from '../Interactive3DBioMacromoleculeStudio';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

export type BioTab =
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
  | 'flashcards';

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

  const [activeTab, setActiveTab] = useState<BioTab>(initialTab || 'skeleton');
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
          <VirtualMicroscope lang={lang} />
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
          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span>🧬</span>
              <span>{isArabic ? 'بيئة الوراثة والمندلية وفصائل الدم:' : 'Genetics & Mendelian Heredity Environment:'}</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
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
    </>
  );

  const subtabsOptions = (
    <>
      <option value="skeleton" className="bg-slate-900 text-white">
        🦴 {isArabic ? 'الهيكل العظمي البشري (٢٠٦ عظمة)' : 'Human Skeleton (206 Bones)'}
      </option>
      <option value="sarcomere" className="bg-slate-900 text-white">
        💪 {isArabic ? 'انزلاق الخيوط وانقباض الساركومير' : 'Sarcomere Contraction'}
      </option>
      <option value="dna" className="bg-slate-900 text-white">
        🧬 {isArabic ? 'استوديو اللولب المزدوج وتضاعف DNA' : 'DNA Studio & Replication'}
      </option>
      <option value="macromolecule_3d" className="bg-slate-900 text-white">
        🔮 {isArabic ? 'استوديو DNA والنيوكليوسومات و tRNA ثلاثي الأبعاد' : '3D DNA & Nucleosome Studio'}
      </option>
      <option value="plant" className="bg-slate-900 text-white">
        🌿 {isArabic ? 'دعامة النبات ومجهر الأنسجة' : 'Plant Histology & Support'}
      </option>
      <option value="microscope" className="bg-slate-900 text-white">
        🔬 {isArabic ? 'المجهر الضوئي الافتراضي للشرائح' : 'Virtual Optical Microscope'}
      </option>
      <option value="endocrine" className="bg-slate-900 text-white">
        💉 {isArabic ? 'جهاز الغدد الصماء والاتزان الهرموني' : 'Endocrine System & Hormones'}
      </option>
      <option value="menstrual" className="bg-slate-900 text-white">
        🌸 {isArabic ? 'دورة الطمث ومراحل التبويض (٢٨ يوماً)' : 'Menstrual Cycle Simulation'}
      </option>
      <option value="immunity" className="bg-slate-900 text-white">
        🛡️ {isArabic ? 'الأجسام المضادة والمناعة التكيفية' : 'Immunology & IgG Antibodies'}
      </option>
      <option value="genetics" className="bg-slate-900 text-white">
        ✂️ {isArabic ? 'الوراثة ومربع بانيت وكريسبر' : 'Genetics & CRISPR Studio'}
      </option>
      <option value="bioenergetics" className="bg-slate-900 text-white">
        ⚡ {isArabic ? 'الطاقة الحيوية والتمثيل الغذائي وتكوين ATP' : 'Bioenergetics & ATP'}
      </option>
      <option value="flashcards" className="bg-slate-900 text-white">
        🗂️ {isArabic ? 'بطاقات الاستذكار السريع' : 'Active Flashcards'}
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

      {renderTabContent(false)}
    </div>
  );
};
