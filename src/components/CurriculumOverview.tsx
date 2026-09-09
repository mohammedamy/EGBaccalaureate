import React, { useState, useMemo } from 'react';
import type { Curriculum, Branch, Lesson } from '../types/curriculum';
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
  Star,
  FileSpreadsheet,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  curriculum: Curriculum;
  onSelectLesson: (branch: Branch, lesson: Lesson, tab?: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const CurriculumOverview: React.FC<Props> = ({
  lang,
  curriculum,
  onSelectLesson,
  onNavigateTab,
}) => {
  const t = translations[lang];
  const isArabic = lang === 'ar';

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
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const totalChapters = curriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0);
  const totalProblems = totalChapters * 175; // 150 MCQs + 10 Solved + 15 Exercises

  const displayedBranches = useMemo(() => {
    if (selectedBranchId === 'all') return curriculum.branches;
    return curriculum.branches.filter((b) => b.id === selectedBranchId);
  }, [curriculum, selectedBranchId]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Banner */}
      <div className="hero-banner relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-900/50 p-5 sm:p-7 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl text-center sm:text-left rtl:sm:text-right">
            <div className="hero-badge inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-extrabold text-center mx-auto sm:mx-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                {isArabic
                  ? 'منصة ClipSAT: جميع الفصول الـ 27 مجهزة بالكامل (4,725 مسألة وسؤال) بالمعادلات والرسوم ثلاثية الأبعاد وخطط المعلمين'
                  : 'ClipSAT Platform: All 27 Chapters Fully Equipped (4,725 Problems) with LaTeX, 3D Lab & Teacher Plans'}
              </span>
            </div>

            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight" style={{ color: '#ffffff' }}>
              {isArabic ? curriculum.nameAr : curriculum.nameEn}
            </h2>
            <p className="hero-subtitle text-xs sm:text-sm md:text-base text-indigo-100 font-medium" style={{ color: '#e0e7ff' }}>
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
                className="hero-btn-secondary bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
                <span>{t.generateTest}</span>
              </button>
              <button
                onClick={() => onNavigateTab('equivalency')}
                className="hero-btn-secondary bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isArabic ? '⚖️ مقارنة المسارات' : '⚖️ Track Bridge'}</span>
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

        {/* Global Stats Matrix Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80 text-center sm:text-left rtl:sm:text-right">
          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-semibold block">
              {isArabic ? 'إجمالي الفصول المعتمدة:' : 'Total Chapters:'}
            </span>
            <span className="text-base font-black text-indigo-400">
              {isArabic ? toHindiDigits(totalChapters) : totalChapters}{' '}
              <span className="text-[11px] text-slate-500">{isArabic ? 'فصلاً' : 'Ch'}</span>
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-semibold block">
              {isArabic ? 'المسائل المجهزة بالحلول:' : 'Equipped Problems:'}
            </span>
            <span className="text-base font-black text-emerald-400">
              {isArabic ? toHindiDigits(totalProblems) : totalProblems.toLocaleString()}{' '}
              <span className="text-[11px] text-slate-500">{isArabic ? 'مسألة' : 'Items'}</span>
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-semibold block">
              {isArabic ? 'المسائل المجابة محلياً:' : 'Practiced Problems:'}
            </span>
            <span className="text-base font-black text-cyan-400">
              {isArabic ? toHindiDigits(userStats.answeredCount) : userStats.answeredCount}{' '}
              <span className="text-[11px] text-slate-500">{isArabic ? 'مسألة' : 'Done'}</span>
            </span>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-semibold block">
              {isArabic ? 'المسائل المميزة بنجمة:' : 'Starred Bookmarks:'}
            </span>
            <span className="text-base font-black text-amber-400 flex items-center justify-center sm:justify-start gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{isArabic ? toHindiDigits(userStats.bookmarkedCount) : userStats.bookmarkedCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Branch Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
          {isArabic ? 'تصفية الفروع:' : 'Filter Branches:'}
        </span>
        <button
          onClick={() => setSelectedBranchId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            selectedBranchId === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
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
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
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
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-4 border border-slate-800 shadow-xl bg-slate-900/60"
            >
              <div className="space-y-4">
                {/* Branch Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${branch.colorGradient} text-white shadow-md`}>
                      {getBranchIcon(branch.iconName)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">
                        {isArabic ? branch.titleAr : branch.titleEn}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {isArabic
                          ? `${toHindiDigits(branch.chapters.length)} فصول • ${toHindiDigits(branch.chapters.length * 175)} مسألة`
                          : `${branch.chapters.length} Chapters • ${branch.chapters.length * 175} Problems`}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
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
                        className="border border-slate-800/90 rounded-xl p-3.5 bg-slate-950/70 space-y-2.5 shadow-sm transition-all hover:border-slate-700"
                      >
                        {/* Chapter Title & Equipped Badge */}
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-bold text-indigo-300 flex items-start gap-1.5 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>
                              {t.chapter} {isArabic ? toHindiDigits(ch.chapterNumber) : ch.chapterNumber}:{' '}
                              <MathRenderer math={isArabic ? ch.titleAr : ch.titleEn} lang={lang} />
                            </span>
                          </span>
                          {ch.isFullyEquipped && (
                            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold shrink-0">
                              {isArabic ? 'مجهز بالكامل' : 'Equipped'}
                            </span>
                          )}
                        </div>

                        {/* Content Metrics Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-400 pt-0.5">
                          <span className="bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-indigo-300 font-semibold">
                            {isArabic ? `${toHindiDigits(150)} بنك أسئلة` : `150 MCQs`}
                          </span>
                          <span className="bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-emerald-300 font-semibold">
                            {isArabic ? `${toHindiDigits(10)} أمثلة محلولة` : `10 Solved`}
                          </span>
                          <span className="bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-amber-300 font-semibold">
                            {isArabic ? `${toHindiDigits(15)} تمارين وحدة` : `15 Exercises`}
                          </span>
                        </div>

                        {/* Direct 1-Click Sub-Tab Action Buttons */}
                        <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-800/60 overflow-x-auto no-scrollbar">
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'theory')}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 text-[10px] font-bold border border-slate-800 transition-all shrink-0 cursor-pointer"
                            title="Theory & Formulas"
                          >
                            📖 {isArabic ? 'الدرس' : 'Theory'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'databank')}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 text-[10px] font-bold border border-slate-800 transition-all shrink-0 cursor-pointer"
                            title="Chapter Databank"
                          >
                            🗄️ {isArabic ? 'البنك' : 'Databank'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'solvedExamples')}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 text-[10px] font-bold border border-slate-800 transition-all shrink-0 cursor-pointer"
                            title="Solved Examples"
                          >
                            💡 {isArabic ? 'الأمثلة' : 'Examples'}
                          </button>
                          <button
                            onClick={() => onSelectLesson(branch, firstLesson, 'interactive')}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 text-[10px] font-bold border border-slate-800 transition-all shrink-0 cursor-pointer"
                            title="Interactive Lab"
                          >
                            🎮 {isArabic ? 'المحاكي' : '3D Lab'}
                          </button>
                          <button
                            onClick={() => onNavigateTab('testGenerator')}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-300 text-[10px] font-bold border border-slate-800 transition-all shrink-0 cursor-pointer"
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
