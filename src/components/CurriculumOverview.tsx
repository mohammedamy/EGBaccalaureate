import React, { useState, useMemo } from 'react';
import type { Curriculum, Branch, Lesson, ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  Box,
  Activity,
  Compass,
  Grid,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  Atom,
  FlaskConical,
  Dna,
  Star,
  FileSpreadsheet,
  Download,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  curriculum: Curriculum;
  onSelectLesson: (branch: Branch, lesson: Lesson, tab?: string) => void;
  onNavigateTab: (tab: string) => void;
  onOpenOfficialBooks?: () => void;
}

export const CurriculumOverview: React.FC<Props> = ({
  lang,
  theme = 'dark',
  curriculum,
  onSelectLesson,
  onNavigateTab,
  onOpenOfficialBooks,
}) => {
  const t = translations[lang];
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');

  // Retrieve user statistics from localStorage
  const userStats = useMemo(() => {
    try {
      const savedAnswers = localStorage.getItem('egbac_user_answers');
      const answersMap = savedAnswers ? JSON.parse(savedAnswers) : {};
      const answeredCount = Object.keys(answersMap).length;

      const savedBookmarks = localStorage.getItem('egbac_bookmarked_problems');
      const bookmarksMap = savedBookmarks ? JSON.parse(savedBookmarks) : {};
      const bookmarkedCount = Object.values(bookmarksMap).filter(Boolean).length;

      return { answeredCount, bookmarkedCount };
    } catch {
      return { answeredCount: 0, bookmarkedCount: 0 };
    }
  }, []);

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
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      case 'Dna':
        return <Dna className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const totalChapters = curriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0);
  const totalProblems = curriculum.branches.reduce((acc, b) => {
    return acc + b.chapters.reduce((cAcc, ch) => {
      let count = 0;
      if (ch.databank) count += (ch.databank.easy?.length || 0) + (ch.databank.medium?.length || 0) + (ch.databank.hots?.length || 0);
      if (ch.solvedExamples) count += ch.solvedExamples.length;
      if (ch.exerciseProblems) count += ch.exerciseProblems.length;
      return cAcc + count;
    }, 0);
  }, 0);

  const displayedBranches = useMemo(() => {
    if (selectedBranchId === 'all') return curriculum.branches;
    return curriculum.branches.filter((b) => b.id === selectedBranchId);
  }, [curriculum, selectedBranchId]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Banner */}
      <div className={`hero-banner relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl transition-all ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-yellow-300'
          : isLight
          ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 border border-indigo-400/40 text-white shadow-xl shadow-indigo-100/50'
          : 'bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/50 text-white'
      }`}>
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl text-center sm:text-left rtl:sm:text-right">
            <div className={`hero-badge inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold text-center mx-auto sm:mx-0 border ${
              isContrast
                ? 'bg-black text-cyan-300 border-cyan-400'
                : isLight
                ? 'bg-white/20 text-white border-white/30 backdrop-blur-xs'
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                {isArabic
                  ? 'منصة ClipSAT: جميع الفصول الـ 27 مجهزة بالكامل (4,725 مسألة وسؤال) بالمعادلات والرسوم ثلاثية الأبعاد وخطط المعلمين'
                  : 'ClipSAT Platform: All 27 Chapters Fully Equipped (4,725 Problems) with LaTeX, 3D Lab & Teacher Plans'}
              </span>
            </div>

            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {isArabic ? curriculum.nameAr : curriculum.nameEn}
            </h2>
            <p className="hero-subtitle text-xs sm:text-sm md:text-base text-indigo-100 font-medium">
              {isArabic ? curriculum.subtitleAr : curriculum.subtitleEn}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('theory')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{isArabic ? 'استكشف المنهج التفاعلي' : 'Explore Interactive Curriculum'}</span>
              </button>
              <button
                onClick={() => onNavigateTab('testGenerator')}
                className={`hero-btn-secondary font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isContrast
                    ? 'bg-black text-white border-white hover:bg-zinc-900'
                    : isLight
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FileSpreadsheet className={`w-4 h-4 ${isLight ? 'text-white' : 'text-indigo-400'}`} />
                <span>{t.generateTest}</span>
              </button>
              <button
                onClick={() => onNavigateTab('equivalency')}
                className={`hero-btn-secondary font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isContrast
                    ? 'bg-black text-white border-white hover:bg-zinc-900'
                    : isLight
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <span>{isArabic ? '⚖️ مقارنة المسارات' : '⚖️ Track Bridge'}</span>
              </button>
              {onOpenOfficialBooks && (
                <button
                  onClick={onOpenOfficialBooks}
                  className={`font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isContrast
                      ? 'bg-black text-amber-300 border-amber-400 hover:bg-zinc-900'
                      : isLight
                      ? 'bg-emerald-600/90 hover:bg-emerald-600 text-white border-emerald-400/40 shadow-emerald-900/20'
                      : 'bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-200 border-emerald-700/60'
                  }`}
                >
                  <Download className="w-4 h-4 text-emerald-300" />
                  <span>{isArabic ? '📚 كتب الوزارة PDF' : '📚 Ministry Books PDF'}</span>
                </button>
              )}
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

        {/* Global Stats Matrix Ribbon */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t text-center sm:text-left rtl:sm:text-right ${
          isContrast ? 'border-yellow-400/50' : isLight ? 'border-white/30' : 'border-slate-800/80'
        }`}>
          <div className={`p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/50 border-slate-800/60'
          }`}>
            <span className={`text-[10px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'إجمالي الفصول المعتمدة:' : 'Total Chapters:'}
            </span>
            <span className={`text-base font-black ${isLight ? 'text-white' : 'text-indigo-400'}`}>
              {isArabic ? toHindiDigits(totalChapters) : totalChapters}{' '}
              <span className={`text-[11px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'فصلاً' : 'Ch'}</span>
            </span>
          </div>

          <div className={`p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/50 border-slate-800/60'
          }`}>
            <span className={`text-[10px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'المسائل المجهزة بالحلول:' : 'Equipped Problems:'}
            </span>
            <span className={`text-base font-black ${isLight ? 'text-emerald-200' : 'text-emerald-400'}`}>
              {isArabic ? toHindiDigits(totalProblems) : totalProblems.toLocaleString()}{' '}
              <span className={`text-[11px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مسألة' : 'Items'}</span>
            </span>
          </div>

          <div className={`p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/50 border-slate-800/60'
          }`}>
            <span className={`text-[10px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'المسائل المجابة محلياً:' : 'Practiced Problems:'}
            </span>
            <span className={`text-base font-black ${isLight ? 'text-cyan-200' : 'text-cyan-400'}`}>
              {isArabic ? toHindiDigits(userStats.answeredCount) : userStats.answeredCount}{' '}
              <span className={`text-[11px] ${isLight ? 'text-indigo-200' : 'text-slate-500'}`}>{isArabic ? 'مسألة' : 'Done'}</span>
            </span>
          </div>

          <div className={`p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-white/15 backdrop-blur-md border-white/25 text-white' : 'bg-slate-950/50 border-slate-800/60'
          }`}>
            <span className={`text-[10px] font-semibold block ${isLight ? 'text-indigo-100 font-bold' : 'text-slate-400'}`}>
              {isArabic ? 'المسائل المميزة بنجمة:' : 'Starred Bookmarks:'}
            </span>
            <span className={`text-base font-black flex items-center justify-center sm:justify-start gap-1 ${isLight ? 'text-amber-200' : 'text-amber-400'}`}>
              <Star className={`w-3.5 h-3.5 fill-current ${isLight ? 'text-amber-200' : 'text-amber-400'}`} />
              <span>{isArabic ? toHindiDigits(userStats.bookmarkedCount) : userStats.bookmarkedCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Branch Filter Pills */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-3.5 px-3.5 sm:mx-0 sm:px-0 touch-pan-x"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <span className={`text-xs font-bold whitespace-nowrap ${
          isLight ? 'text-slate-700' : 'text-slate-400'
        }`}>
          {isArabic ? 'تصفية الفروع:' : 'Filter Branches:'}
        </span>
        <button
          onClick={() => setSelectedBranchId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
            selectedBranchId === 'all'
              ? isContrast
                ? 'bg-yellow-400 text-black font-black'
                : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-extrabold'
              : isContrast
              ? 'bg-black border-2 border-cyan-400 text-white'
              : isLight
              ? 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-xs'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {isArabic ? `جميع الفروع (${toHindiDigits(curriculum.branches.length)})` : `All Branches (${curriculum.branches.length})`}
        </button>
        {curriculum.branches.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedBranchId(b.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              selectedBranchId === b.id
                ? isContrast
                  ? 'bg-yellow-400 text-black font-black'
                  : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-extrabold'
                : isContrast
                ? 'bg-black border-2 border-cyan-400 text-white'
                : isLight
                ? 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-xs'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {getBranchIcon(b.iconName)}
            <span>{isArabic ? b.titleAr : b.titleEn}</span>
          </button>
        ))}
      </div>

      {/* Branches & Chapters Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBranches.map((branch) => (
            <div
              key={branch.id}
              className={`rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-4 border ${
                isContrast
                  ? 'bg-black border-2 border-yellow-400 text-white'
                  : isLight
                  ? 'bg-white border border-slate-200/90 shadow-lg shadow-slate-200/60 text-slate-900'
                  : 'glass-card border border-slate-800 shadow-xl bg-slate-900/60 text-slate-100'
              }`}
            >
              <div className="space-y-4">
                {/* Branch Header */}
                <div className={`flex items-center justify-between border-b pb-3 ${
                  isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${branch.colorGradient} text-white shadow-md`}>
                      {getBranchIcon(branch.iconName)}
                    </div>
                    <div>
                      <h4 className={`text-base font-bold ${isLight ? 'text-slate-900 font-extrabold' : 'text-slate-100'}`}>
                        {isArabic ? branch.titleAr : branch.titleEn}
                      </h4>
                      <p className={`text-[11px] ${isLight ? 'text-slate-500 font-semibold' : 'text-slate-400'}`}>
                        {isArabic
                          ? `${toHindiDigits(branch.chapters.length)} فصول • ${toHindiDigits(branch.chapters.length * 175)} مسألة`
                          : `${branch.chapters.length} Chapters • ${branch.chapters.length * 175} Problems`}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                    isContrast
                      ? 'bg-black text-cyan-300 border-cyan-400'
                      : isLight
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-extrabold'
                      : 'bg-slate-800 text-indigo-300 border border-slate-700'
                  }`}>
                    {isArabic ? branch.categoryAr : branch.categoryEn}
                  </span>
                </div>

                {/* Chapter List */}
                <div className="space-y-3">
                  {branch.chapters.map((ch) => {
                    const firstLesson = ch.lessons[0];

                    return (
                      <div
                        key={ch.id}
                        className={`rounded-xl p-3.5 space-y-2.5 transition-all border ${
                          isContrast
                            ? 'bg-black border-2 border-yellow-400/80 text-white'
                            : isLight
                            ? 'bg-slate-50/90 border border-slate-200 hover:bg-indigo-50/30 hover:border-indigo-300 hover:shadow-md text-slate-900'
                            : 'border border-slate-800/90 bg-slate-950/70 text-slate-100 hover:border-slate-700 shadow-sm'
                        }`}
                      >
                        {/* Chapter Title & Equipped Badge */}
                        <div className="flex items-start justify-between gap-2">
                          <span className={`text-xs font-bold flex items-start gap-1.5 leading-relaxed ${
                            isLight ? 'text-slate-900 font-extrabold' : isContrast ? 'text-yellow-300' : 'text-indigo-300'
                          }`}>
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isLight ? 'text-emerald-600' : 'text-emerald-400'
                            }`} />
                            <span>
                              {t.chapter} {isArabic ? toHindiDigits(ch.chapterNumber) : ch.chapterNumber}:{' '}
                              <MathRenderer math={isArabic ? ch.titleAr : ch.titleEn} lang={lang} />
                            </span>
                          </span>
                          {ch.isFullyEquipped && (
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold shrink-0 border ${
                              isContrast
                                ? 'bg-black text-cyan-300 border-cyan-400'
                                : isLight
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}>
                              {isArabic ? 'مجهز بالكامل' : 'Equipped'}
                            </span>
                          )}
                        </div>

                        {/* Content Metrics Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] pt-0.5">
                          <span className={`px-2 py-0.5 rounded-md border font-semibold ${
                            isContrast
                              ? 'bg-black text-cyan-300 border-cyan-400'
                              : isLight
                              ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-extrabold'
                              : 'bg-slate-900 text-indigo-300 border-slate-800'
                          }`}>
                            {isArabic ? `${toHindiDigits(150)} بنك أسئلة` : `150 MCQs`}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md border font-semibold ${
                            isContrast
                              ? 'bg-black text-cyan-300 border-cyan-400'
                              : isLight
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-extrabold'
                              : 'bg-slate-900 text-emerald-300 border-slate-800'
                          }`}>
                            {isArabic ? `${toHindiDigits(10)} أمثلة محلولة` : `10 Solved`}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md border font-semibold ${
                            isContrast
                              ? 'bg-black text-cyan-300 border-cyan-400'
                              : isLight
                              ? 'bg-amber-50 text-amber-800 border-amber-200 font-extrabold'
                              : 'bg-slate-900 text-amber-300 border-slate-800'
                          }`}>
                            {isArabic ? `${toHindiDigits(15)} تمارين وحدة` : `15 Exercises`}
                          </span>
                        </div>

                        {/* Direct 1-Click Sub-Tab Action Buttons */}
                        <div className={`flex items-center gap-1.5 pt-1.5 border-t overflow-x-auto no-scrollbar ${
                          isLight ? 'border-slate-200' : 'border-slate-800/60'
                        }`}>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'theory')}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                              isContrast
                                ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                                : isLight
                                ? 'bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 border-slate-300 shadow-2xs'
                                : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 border-slate-800'
                            }`}
                            title="Theory & Formulas"
                          >
                            📖 {isArabic ? 'الدرس' : 'Theory'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'databank')}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                              isContrast
                                ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                                : isLight
                                ? 'bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 border-slate-300 shadow-2xs'
                                : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 border-slate-800'
                            }`}
                            title="Chapter Databank"
                          >
                            🗄️ {isArabic ? 'البنك' : 'Databank'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'solvedExamples')}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                              isContrast
                                ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                                : isLight
                                ? 'bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 border-slate-300 shadow-2xs'
                                : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 border-slate-800'
                            }`}
                            title="Solved Examples"
                          >
                            💡 {isArabic ? 'الأمثلة' : 'Examples'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'interactive')}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                              isContrast
                                ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                                : isLight
                                ? 'bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 border-slate-300 shadow-2xs'
                                : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 border-slate-800'
                            }`}
                            title="Interactive Lab"
                          >
                            🎮 {isArabic ? 'المحاكي' : '3D Lab'}
                          </button>
                          <button
                            onClick={() => onNavigateTab('testGenerator')}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all shrink-0 cursor-pointer ${
                              isContrast
                                ? 'bg-black border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                                : isLight
                                ? 'bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 border-slate-300 shadow-2xs'
                                : 'bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 border-slate-800'
                            }`}
                            title="Exam Generator"
                          >
                            📝 {isArabic ? 'اختبار' : 'Test'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
