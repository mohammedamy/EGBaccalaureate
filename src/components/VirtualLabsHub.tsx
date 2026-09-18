import React, { useState, useEffect } from 'react';
import type { Curriculum, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  FlaskRound as Flask,
  FileSpreadsheet,
  ChevronDown,
  Printer,
} from 'lucide-react';
import { MathLab, type MathTab } from './labs/MathLab';
import { PhysicsLab, type PhysicsTab } from './labs/PhysicsLab';
import { ChemistryLab, type ChemTab } from './labs/ChemistryLab';
import { BiologyLab, type BioTab } from './labs/BiologyLab';
import { GuidedExperimentsModal } from './labs/GuidedExperimentsModal';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import type { LabDiscipline } from '../services/labReportService';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  currentCurriculum: Curriculum;
  selectedSubject?: string;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
}

type LabId = 'math' | 'physics' | 'chemistry' | 'biology';

export const VirtualLabsHub: React.FC<Props> = ({
  lang,
  theme = 'dark',
  currentCurriculum,
  selectedSubject = 'all',
  onOpenDesmos,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Map selected subject to active lab
  const getInitialLab = (): LabId => {
    if (selectedSubject === 'physics') return 'physics';
    if (selectedSubject === 'chemistry') return 'chemistry';
    if (selectedSubject === 'biology') return 'biology';
    return 'math';
  };

  const [activeLab, setActiveLab] = useState<LabId>(getInitialLab);
  const [activeMathTab, setActiveMathTab] = useState<MathTab>('calculus');
  const [activePhysTab, setActivePhysTab] = useState<PhysicsTab>('circuits');
  const [activeChemTab, setActiveChemTab] = useState<ChemTab>('equilibrium');
  const [activeBioTab, setActiveBioTab] = useState<BioTab>('skeleton');
  const [isGuidedModalOpen, setIsGuidedModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportExpId, setReportExpId] = useState<string>('phys-exp-1');

  // Sync if selectedSubject prop changes
  useEffect(() => {
    if (selectedSubject === 'physics') setActiveLab('physics');
    else if (selectedSubject === 'chemistry') setActiveLab('chemistry');
    else if (selectedSubject === 'biology') setActiveLab('biology');
    else if (selectedSubject === 'mathematics') setActiveLab('math');
  }, [selectedSubject]);

  // Compute contextual experiment ID matching the current sub-lab tab
  const getContextualReportExpId = (): string => {
    if (activeLab === 'physics') {
      switch (activePhysTab) {
        case 'circuits':
          return 'phys-exp-1';
        case 'photoelectric':
          return 'phys-exp-2';
        case 'dynamo':
        case 'magnetism':
          return 'phys-exp-3';
        case 'resonance':
          return 'phys-exp-4';
        case 'electronics':
          return 'phys-exp-5';
        case 'atom_3d':
        case 'atomic_lasers':
        case 'optics':
          return 'phys-exp-6';
        default:
          return 'phys-exp-1';
      }
    }
    if (activeLab === 'chemistry') {
      switch (activeChemTab) {
        case 'equilibrium':
          return 'chem-exp-1';
        case 'titration':
          return 'chem-exp-2';
        case 'qualitative':
        case 'transition':
          return 'chem-exp-3';
        case 'electrochemistry':
          return 'chem-exp-4';
        case 'organic':
        case 'molecular_3d':
          return 'chem-exp-5';
        default:
          return 'chem-exp-1';
      }
    }
    if (activeLab === 'biology') {
      switch (activeBioTab) {
        case 'sarcomere':
        case 'skeleton':
        case 'plant':
          return 'bio-exp-1';
        case 'dna':
          return 'bio-exp-2';
        case 'genetics':
          return 'bio-exp-3';
        case 'endocrine':
          return 'bio-exp-4';
        case 'menstrual':
          return 'bio-exp-5';
        case 'immunity':
          return 'bio-exp-6';
        case 'microscope':
          return 'bio-exp-7';
        case 'macromolecule_3d':
          return 'bio-exp-8';
        case 'bioenergetics':
          return 'bio-exp-9';
        default:
          return 'bio-exp-1';
      }
    }
    // activeLab === 'math'
    switch (activeMathTab) {
      case 'calculus':
        return 'math-exp-1';
      case 'mechanics':
        return 'math-exp-2';
      case 'geometry3d':
        return 'math-exp-3';
      case 'matrix':
      case 'pascal':
      case 'probability':
        return 'math-exp-4';
      case 'complex':
        return 'math-exp-5';
      default:
        return 'math-exp-1';
    }
  };

  const LABS = [
    {
      id: 'math' as LabId,
      titleEn: 'Math Lab',
      titleAr: 'مختبر الرياضيات',
      subtitleEn: 'Calculus, 3D Vectors, Complex Argand & Dynamics',
      subtitleAr: 'التفاضل، الفراغية، الأعداد المركبة وأرجاند، والميكانيكا',
      icon: Calculator,
      color: 'indigo',
      badge: '⚙️ Statics & Complex',
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      activeBg: 'bg-indigo-600 text-white shadow-indigo-600/30',
      tagline: isArabic
        ? 'مستوى أرجاند وديموافر، احتكاك المستويات، الفراغية 3D، وديناميكا المقذوفات'
        : 'Argand plane & De Moivre, inclined friction, 3D geometry & projectile ballistics',
    },
    {
      id: 'physics' as LabId,
      titleEn: 'Physics Lab',
      titleAr: 'مختبر الفيزياء',
      subtitleEn: '3D Quantum Atom, Circuits & Semiconductor Laser',
      subtitleAr: 'استوديو الذرة الكمية 3D، دوائر كيرشوف وأشباه الموصلات والليزر',
      icon: Atom,
      color: 'cyan',
      badge: '🔮 3D Atom & Laser',
      gradient: 'from-cyan-600 via-sky-600 to-blue-600',
      activeBg: 'bg-cyan-600 text-white shadow-cyan-600/30',
      tagline: isArabic
        ? 'استوديو تشتت رذرفورد وبور وليزر He-Ne ثلاثي الأبعاد، دوائر كيرشوف وأشباه الموصلات وأشعة إكس'
        : '3D Rutherford & Bohr atom, He-Ne laser resonator, Kirchhoff circuits, p-n diodes & Coolidge X-rays',
    },
    {
      id: 'chemistry' as LabId,
      titleEn: 'Chemistry Lab',
      titleAr: 'مختبر الكيمياء',
      subtitleEn: '3D VSEPR Molecules, Metallurgy Alloys & Equilibrium',
      subtitleAr: 'هندسة الجزيئات الفراغية 3D، بلورات السبائك، والاتزان والتخليق العضوي',
      icon: FlaskConical,
      color: 'emerald',
      badge: '🧬 3D VSEPR & Alloys',
      gradient: 'from-emerald-600 via-teal-600 to-green-600',
      activeBg: 'bg-emerald-600 text-white shadow-emerald-600/30',
      tagline: isArabic
        ? 'استوديو VSEPR ثلاثي الأبعاد والسبائك المعدنية، توجيه حلقة البنزين والأسترة والاتزان'
        : '3D VSEPR molecular geometry, transition metal crystal alloys, benzene directing & esterification',
    },
    {
      id: 'biology' as LabId,
      titleEn: 'Biology Lab',
      titleAr: 'مختبر الأحياء',
      subtitleEn: '3D B-DNA Denaturation, tRNA, Chromatin & Skeletal Atlas',
      subtitleAr: 'التهجين الحراري لـ DNA والكروماتين 3D، المناعة وأطلس العظام',
      icon: Dna,
      color: 'rose',
      badge: '🔮 3D DNA & Chromatin',
      gradient: 'from-rose-600 via-pink-600 to-purple-600',
      activeBg: 'bg-rose-600 text-white shadow-rose-600/30',
      tagline: isArabic
        ? 'استوديو تفكك DNA عند 100°م والتحام tRNA وتكثيف الكروماتين 100,000x، وأطلس العظام والمناعة'
        : '3D DNA 100°C denaturation & hybridization, tRNA codon recognition, 100,000x chromatin compaction & immunity',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Master Hub Banner */}
      <div
        className={`p-5 sm:p-7 rounded-3xl border shadow-xl relative overflow-hidden transition-all ${
          isContrast
            ? 'bg-black border-2 border-yellow-400 text-white'
            : isLight
            ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700'
            : 'bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white border-slate-800'
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1.5">
                <Flask className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isArabic ? 'المختبرات العلمية والرياضية المعتمدة' : 'Official Virtual Science Laboratories'}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                4 Specialized Labs
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {isArabic ? 'المجمع التفاعلي للمختبرات والمحاكاة العلمية' : 'Interactive Virtual Laboratories Suite'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1.5 leading-relaxed">
              {isArabic
                ? 'بيئة محاكاة عملية تفاعلية تجمع مختبرات الرياضيات، الفيزياء، الكيمياء، والأحياء، مجهزة بأطلس مجهري عالي الدقة ونماذج تجريبية ثلاثية الأبعاد مطابقة لمعايير الثانوية العامة والبكالوريا.'
                : 'A comprehensive interactive experimental environment hosting specialized Math, Physics, Chemistry, and Biology laboratories equipped with high-resolution microscopy and 3D quantitative simulations.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={() => {
                const contextualExp = getContextualReportExpId();
                setReportExpId(contextualExp);
                setIsReportModalOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-emerald-400/30"
            >
              <Printer className="w-4 h-4 text-emerald-200" />
              <span>{isArabic ? 'تقرير معملي A4' : 'Lab Report A4'}</span>
            </button>

            <button
              onClick={() => setIsGuidedModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-indigo-400/30"
            >
              <FileSpreadsheet className="w-4 h-4 text-cyan-300" />
              <span>{isArabic ? 'دليل التجارب الموجهة' : 'Guided Experiments'}</span>
            </button>

            <div className="text-right rtl:text-left hidden sm:block border-l rtl:border-r border-slate-700/60 pl-3 rtl:pr-3">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {isArabic ? 'المسار الحالي' : 'Active Track'}
              </p>
              <p className="text-sm font-black text-cyan-400">
                {currentCurriculum.id === 'thanaweya'
                  ? isArabic ? 'الثانوية العامة المصرية' : 'Thanaweya Amma'
                  : isArabic ? 'البكالوريا المصرية' : 'New EG-Baccalaureate'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Laboratory Selector Navigation Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {LABS.map((lab) => {
          const isSelected = activeLab === lab.id;
          const Icon = lab.icon;

          return (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id)}
              className={`p-4 rounded-2xl border text-left rtl:text-right transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden active:scale-98 ${
                isSelected
                  ? isContrast
                    ? 'bg-black border-2 border-yellow-400 text-yellow-300 shadow-lg shadow-yellow-500/20'
                    : `bg-gradient-to-br ${lab.gradient} text-white shadow-xl scale-[1.02] border-white/20`
                  : isContrast
                  ? 'bg-black border border-slate-700 text-white hover:border-yellow-400'
                  : isLight
                  ? 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/90 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${
                    isSelected
                      ? 'bg-white/20 border-white/30 text-white'
                      : isLight
                      ? 'bg-slate-100 border-slate-200 text-slate-700'
                      : 'bg-slate-800 border-slate-700 text-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-black/25 text-white backdrop-blur-xs'
                      : isLight
                      ? 'bg-slate-100 text-slate-600'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {lab.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-black tracking-tight">
                  {isArabic ? lab.titleAr : lab.titleEn}
                </h3>
                <p
                  className={`text-[11px] mt-0.5 line-clamp-1 ${
                    isSelected ? 'text-white/85 font-medium' : isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {isArabic ? lab.subtitleAr : lab.subtitleEn}
                </p>
              </div>

              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/60 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Render Active Laboratory Component */}
      <div className="animate-in fade-in duration-200">
        {activeLab === 'math' && (
          <div className="space-y-4">
            {/* Quick-Access Math Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Calculator className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeMathTab}
                  onChange={(e) => setActiveMathTab(e.target.value as MathTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'calculus' as MathTab, emoji: '🧭', labelEn: 'Calculus & Dynamic Tangents', labelAr: 'التفاضل والمماسات الديناميكية' },
                    { id: 'geometry3d' as MathTab, emoji: '📦', labelEn: '3D Vectors & Planes', labelAr: 'الهندسة الفراغية 3D والمتجهات' },
                    { id: 'complex' as MathTab, emoji: '📍', labelEn: 'Complex Numbers & Argand Plane (De Moivre)', labelAr: 'الأعداد المركبة ومستوى أرجاند وديموافر' },
                    { id: 'mechanics' as MathTab, emoji: '⚙️', labelEn: 'Statics & Classical Mechanics (Tier-1)', labelAr: 'الاستاتيكا والميكانيكا الكلاسيكية' },
                    { id: 'matrix' as MathTab, emoji: '🔢', labelEn: 'Matrix Algebra Solver', labelAr: 'جبر المصفوفات ومحدد كرامر' },
                    { id: 'pascal' as MathTab, emoji: '🔺', labelEn: 'Pascal Triangle & Binomial Combinatorics', labelAr: 'مثلث باسكال ومفكوك ذات الحدين' },
                    { id: 'probability' as MathTab, emoji: '📊', labelEn: 'Normal Distribution & Bayesian Tree', labelAr: 'التوزيع الطبيعي وشجرة بايز' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <MathLab
              lang={lang}
              theme={theme}
              onOpenDesmos={onOpenDesmos}
              initialTab={activeMathTab}
              onTabChange={setActiveMathTab}
            />
          </div>
        )}
        {activeLab === 'physics' && (
          <div className="space-y-4">
            {/* Quick-Access Physics Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Atom className="w-4 h-4 text-cyan-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activePhysTab}
                  onChange={(e) => setActivePhysTab(e.target.value as PhysicsTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-cyan-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'circuits' as PhysicsTab, emoji: '⚡', labelEn: 'DC Circuits & Kirchhoff', labelAr: 'دوائر أوم وكيرشوف' },
                    { id: 'optics' as PhysicsTab, emoji: '🔬', labelEn: 'Optics & Young Interference', labelAr: 'البصريات وتجربة ينج' },
                    { id: 'magnetism' as PhysicsTab, emoji: '🧭', labelEn: 'Magnetism & Lorentz Force', labelAr: 'المغناطيسية ولورنتز' },
                    { id: 'dynamo' as PhysicsTab, emoji: '🔄', labelEn: 'AC Dynamo & Induction (2D)', labelAr: 'الدينامو والحث (2D)' },
                    { id: 'induction_3d' as PhysicsTab, emoji: '⚡', labelEn: '3D Electromagnetic Induction & Dynamo Studio', labelAr: 'استوديو الحث الكهرومغناطيسي والدينامو 3D' },
                    { id: 'resonance' as PhysicsTab, emoji: '〰️', labelEn: 'RLC Resonance Circuit', labelAr: 'دوائر الرنين RLC' },
                    { id: 'photoelectric' as PhysicsTab, emoji: '☀️', labelEn: 'Photoelectric Stopping Potential Studio (Einstein)', labelAr: 'استوديو الظاهرة الكهروضوئية وجهد الإيقاف (أينشتاين)' },
                    { id: 'atomic_lasers' as PhysicsTab, emoji: '⚛️', labelEn: 'Bohr Spectra & Lasers', labelAr: 'طيف بور والليزر' },
                    { id: 'atom_3d' as PhysicsTab, emoji: '🔮', labelEn: '3D Quantum Atom & Laser Studio', labelAr: 'استوديو الذرة الكمية والليزر 3D' },
                    { id: 'electronics' as PhysicsTab, emoji: '🔌', labelEn: 'Semiconductors & Transistor Logic', labelAr: 'أشباه الموصلات والترانزستور' },
                    { id: 'flashcards' as PhysicsTab, emoji: '🗂️', labelEn: 'Physics Flashcards', labelAr: 'بطاقات الاستذكار' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <PhysicsLab lang={lang} theme={theme} initialTab={activePhysTab} onTabChange={setActivePhysTab} />
          </div>
        )}
        {activeLab === 'chemistry' && (
          <div className="space-y-4">
            {/* Quick-Access Chemistry Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeChemTab}
                  onChange={(e) => setActiveChemTab(e.target.value as ChemTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'equilibrium' as ChemTab, emoji: '⚖️', labelEn: 'Equilibrium & Le Chatelier', labelAr: 'الاتزان ولوشاتيليه' },
                    { id: 'transition' as ChemTab, emoji: '🔥', labelEn: 'Transition Elements & Iron', labelAr: 'العناصر الانتقالية والحديد' },
                    { id: 'qualitative' as ChemTab, emoji: '🧪', labelEn: 'Qualitative Analysis', labelAr: 'التحليل الوصفي والكواشف' },
                    { id: 'titration' as ChemTab, emoji: '💧', labelEn: 'Acid-Base Titration & pH Curve Studio', labelAr: 'استوديو معايرة الأحماض والقواعد ومنحنيات الـ pH' },
                    { id: 'electrochemistry' as ChemTab, emoji: '🔋', labelEn: 'Electrochemistry & Cells', labelAr: 'الكيمياء الكهربية والخلايا' },
                    { id: 'organic' as ChemTab, emoji: '⚗️', labelEn: 'Organic Synthetic Roadmaps', labelAr: 'العضوية ومسارات التخليق' },
                    { id: 'molecular_3d' as ChemTab, emoji: '🧬', labelEn: '3D Molecular Geometry & Metallurgy Alloys Studio', labelAr: 'استوديو الأشكال الجزيئية وسبائك الفلزات 3D' },
                    { id: 'flashcards' as ChemTab, emoji: '🗂️', labelEn: 'Review & Flashcards', labelAr: 'كروت المراجعة والكواشف' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <ChemistryLab lang={lang} theme={theme} initialTab={activeChemTab} onTabChange={setActiveChemTab} />
          </div>
        )}
        {activeLab === 'biology' && (
          <div className="space-y-4">
            {/* Quick-Access Biology Sub-Laboratory Dropdown */}
            <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1.5 pl-1">
                <Dna className="w-4 h-4 text-rose-400" />
                <span>{isArabic ? 'المعمل المتخصص:' : 'Specialized Sub-Lab:'}</span>
              </span>
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <select
                  value={activeBioTab}
                  onChange={(e) => setActiveBioTab(e.target.value as BioTab)}
                  className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500 ${
                    isContrast
                      ? 'bg-black text-white border-yellow-400'
                      : isLight
                      ? 'bg-slate-100 border-slate-300 text-slate-800'
                      : 'bg-slate-900 border-slate-700 text-slate-200'
                  }`}
                >
                  {[
                    { id: 'skeleton' as BioTab, emoji: '🦴', labelEn: 'Skeleton Anatomy & Bone Studio (206)', labelAr: 'الهيكل العظمي والمفاصل (206)' },
                    { id: 'sarcomere' as BioTab, emoji: '💪', labelEn: 'Sarcomere Contraction', labelAr: 'انقباض الساركومير' },
                    { id: 'dna' as BioTab, emoji: '🧬', labelEn: 'DNA Studio & Replication (Central Dogma)', labelAr: 'استوديو DNA وتضاعف الشفرة والترجمة' },
                    { id: 'macromolecule_3d' as BioTab, emoji: '🔮', labelEn: '3D DNA Helix, tRNA & Nucleosome Studio', labelAr: 'استوديو DNA والنيوكليوسومات و tRNA ثلاثي الأبعاد' },
                    { id: 'plant' as BioTab, emoji: '🌿', labelEn: 'Plant Histology & Support Studio', labelAr: 'أنسجة ودعامة وحركة النبات' },
                    { id: 'microscope' as BioTab, emoji: '🔬', labelEn: 'Virtual Optical Microscope', labelAr: 'المجهر الضوئي' },
                    { id: 'endocrine' as BioTab, emoji: '💉', labelEn: 'Endocrine Coordination', labelAr: 'التنسيق الهرموني' },
                    { id: 'menstrual' as BioTab, emoji: '🌸', labelEn: 'Menstrual Cycle & Hormones', labelAr: 'دورة الطمث' },
                    { id: 'immunity' as BioTab, emoji: '🛡️', labelEn: 'Immunology & Antibodies', labelAr: 'المناعة والأجسام المضادة' },
                    { id: 'genetics' as BioTab, emoji: '✂️', labelEn: 'Mendelian Genetics & Punnett Cross Studio (2×2 & 4×4)', labelAr: 'استوديو الوراثة المندلية ومربعات بانيت (2×2 و 4×4)' },
                    { id: 'bioenergetics' as BioTab, emoji: '⚡', labelEn: 'Cellular Bioenergetics', labelAr: 'التنفس الخلوي' },
                    { id: 'flashcards' as BioTab, emoji: '🗂️', labelEn: 'Biology Flashcards', labelAr: 'بطاقات الاستذكار' },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id} className="bg-slate-900 text-white">
                      {tab.emoji} {isArabic ? tab.labelAr : tab.labelEn}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <BiologyLab lang={lang} theme={theme} initialTab={activeBioTab} onTabChange={setActiveBioTab} />
          </div>
        )}
      </div>

      {/* Guided Experiments Modal */}
      <GuidedExperimentsModal
        isOpen={isGuidedModalOpen}
        onClose={() => setIsGuidedModalOpen(false)}
        lang={lang}
        theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
        activeLab={activeLab}
        onOpenReportGenerator={(expId) => {
          setIsGuidedModalOpen(false);
          setReportExpId(expId);
          setIsReportModalOpen(true);
        }}
      />

      {/* Laboratory Practical Report Generator Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        lang={lang}
        theme={theme === 'high-contrast' ? 'high-contrast' : theme === 'light' ? 'light' : 'dark'}
        initialExperimentId={reportExpId}
        initialDiscipline={activeLab as LabDiscipline}
      />
    </div>
  );
};
