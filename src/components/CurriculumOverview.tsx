import React from 'react';
import type { Curriculum, Branch, Lesson } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import { BookOpen, CheckCircle2, ChevronRight, Sparkles, Layers, Box, Activity, Compass, Grid } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  curriculum: Curriculum;
  onSelectLesson: (branch: Branch, lesson: Lesson) => void;
  onNavigateTab: (tab: string) => void;
}

export const CurriculumOverview: React.FC<Props> = ({
  lang,
  curriculum,
  onSelectLesson,
  onNavigateTab,
}) => {
  const t = translations[lang];

  const getBranchIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Grid':
        return <Grid className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Banner */}
      <div className="hero-banner relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/50 p-5 sm:p-7 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl text-center sm:text-left rtl:sm:text-right">
            <div className="hero-badge inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-extrabold text-center mx-auto sm:mx-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{lang === 'ar' ? 'منصة ClipSAT: الفصل الأول مجهز بالكامل بالمعادلات والرسوم ثلاثية الأبعاد' : 'ClipSAT Platform: Chapter 1 Fully Equipped with LaTeX & 3D Interactive Lab'}</span>
            </div>

            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight" style={{ color: '#ffffff' }}>
              {lang === 'ar' ? curriculum.nameAr : curriculum.nameEn}
            </h2>
            <p className="hero-subtitle text-xs sm:text-sm md:text-base text-indigo-100 font-medium" style={{ color: '#e0e7ff' }}>
              {lang === 'ar' ? curriculum.subtitleAr : curriculum.subtitleEn}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('theory')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'ar' ? 'استكشف الفصل الأول بالكامل' : 'Explore First Chapter'}</span>
              </button>
              <button
                onClick={() => onNavigateTab('testGenerator')}
                className="hero-btn-secondary bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.generateTest}</span>
              </button>
            </div>
          </div>

          <div className="shrink-0 flex justify-center items-center">
            <img
              src={clipsatLogo}
              alt="ClipSAT Logo"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_10px_25px_rgba(34,211,238,0.35)] hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="space-y-4 sm:space-y-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
          <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
          <span>{lang === 'ar' ? 'فروع المنهج الدراسي الصادر عن الوزارة' : 'Curriculum Mathematics Branches'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {curriculum.branches.map((branch) => (
            <div
              key={branch.id}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${branch.colorGradient} text-white shadow-md`}>
                    {getBranchIcon(branch.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {lang === 'ar' ? branch.categoryAr : branch.categoryEn}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-100">{lang === 'ar' ? branch.titleAr : branch.titleEn}</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'ar' ? `عدد الفصول: ${toHindiDigits(branch.chapters.length)}` : `Total Chapters: ${branch.chapters.length}`}
                  </p>
                </div>

                {/* Chapter List */}
                <div className="space-y-2 pt-2">
                  {branch.chapters.map((ch) => (
                    <div key={ch.id} className="border border-slate-800 rounded-xl p-3 bg-slate-950/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>
                            {t.chapter} {lang === 'ar' ? toHindiDigits(ch.chapterNumber) : ch.chapterNumber}: <MathRenderer math={lang === 'ar' ? ch.titleAr : ch.titleEn} lang={lang} />
                          </span>
                        </span>
                        {ch.isFullyEquipped && (
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold shrink-0">
                            {lang === 'ar' ? 'مجهز بالكامل' : 'Equipped'}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 pl-4 rtl:pl-0 rtl:pr-4">
                        {ch.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(branch, lesson)}
                            className="w-full text-left rtl:text-right text-xs text-slate-300 hover:text-indigo-400 font-medium py-1 px-2 rounded hover:bg-slate-900 flex items-center justify-between group transition-all"
                          >
                            <span className="truncate flex items-center gap-1">
                              • <MathRenderer math={lang === 'ar' ? lesson.titleAr : lesson.titleEn} lang={lang} />
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
