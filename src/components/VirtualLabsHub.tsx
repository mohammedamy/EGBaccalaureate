import React, { useState, useEffect } from 'react';
import type { Curriculum, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  FlaskRound as Flask,
} from 'lucide-react';
import { MathLab } from './labs/MathLab';
import { PhysicsLab } from './labs/PhysicsLab';
import { ChemistryLab } from './labs/ChemistryLab';
import { BiologyLab } from './labs/BiologyLab';

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

  // Sync if selectedSubject prop changes
  useEffect(() => {
    if (selectedSubject === 'physics') setActiveLab('physics');
    else if (selectedSubject === 'chemistry') setActiveLab('chemistry');
    else if (selectedSubject === 'biology') setActiveLab('biology');
    else if (selectedSubject === 'mathematics') setActiveLab('math');
  }, [selectedSubject]);

  const LABS = [
    {
      id: 'math' as LabId,
      titleEn: 'Math Lab',
      titleAr: 'مختبر الرياضيات',
      subtitleEn: 'Calculus, 3D Vectors & Mechanics',
      subtitleAr: 'التفاضل، الهندسة الفراغية، والميكانيكا',
      icon: Calculator,
      color: 'indigo',
      badge: '📐 4 Modules',
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      activeBg: 'bg-indigo-600 text-white shadow-indigo-600/30',
      tagline: isArabic ? 'استوديو التحليل الهندسي والمماسات والمصفوفات' : 'Function analysis, tangent limits & 3D matrices',
    },
    {
      id: 'physics' as LabId,
      titleEn: 'Physics Lab',
      titleAr: 'مختبر الفيزياء',
      subtitleEn: 'Circuits, Kirchhoff & Quantum Emission',
      subtitleAr: 'دوائر كيرشوف، أوم، والظاهرة الكهروضوئية',
      icon: Atom,
      color: 'cyan',
      badge: '⚡ Live Current',
      gradient: 'from-cyan-600 via-sky-600 to-blue-600',
      activeBg: 'bg-cyan-600 text-white shadow-cyan-600/30',
      tagline: isArabic ? 'محاكي دوائر التيار المستمر وفوتونات آينشتاين' : 'DC multimeters, Ohm closed circuits & Einstein photoelectrons',
    },
    {
      id: 'chemistry' as LabId,
      titleEn: 'Chemistry Lab',
      titleAr: 'مختبر الكيمياء',
      subtitleEn: 'Le Chatelier Equilibrium & 3d Metallurgy',
      subtitleAr: 'الاتزان الكيميائي وتعدين الحديد والمعايرة',
      icon: FlaskConical,
      color: 'emerald',
      badge: '🧪 Reversible Rx',
      gradient: 'from-emerald-600 via-teal-600 to-green-600',
      activeBg: 'bg-emerald-600 text-white shadow-emerald-600/30',
      tagline: isArabic ? 'محاكي انزياح الاتزان وأفران الاختزال والـ pH' : 'Dynamic equilibrium shifts, 3d spin & buffer titration',
    },
    {
      id: 'biology' as LabId,
      titleEn: 'Biology Lab',
      titleAr: 'مختبر الأحياء',
      subtitleEn: '206 Bones, Sarcomere & DNA Studio',
      subtitleAr: 'أطلس الهيكل العظمي، الساركومير، وترجمة DNA',
      icon: Dna,
      color: 'rose',
      badge: '🧬 Hi-Res Atlas',
      gradient: 'from-rose-600 via-pink-600 to-purple-600',
      activeBg: 'bg-rose-600 text-white shadow-rose-600/30',
      tagline: isArabic ? 'أطلس مجهري عالي الدقة وانقباض العضلات والجينات' : 'High-res skeleton anatomy, sliding filaments & codon translation',
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

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right rtl:text-left hidden sm:block">
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
        {activeLab === 'math' && <MathLab lang={lang} theme={theme} onOpenDesmos={onOpenDesmos} />}
        {activeLab === 'physics' && <PhysicsLab lang={lang} theme={theme} />}
        {activeLab === 'chemistry' && <ChemistryLab lang={lang} theme={theme} />}
        {activeLab === 'biology' && <BiologyLab lang={lang} theme={theme} />}
      </div>
    </div>
  );
};
