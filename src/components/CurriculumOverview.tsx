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
  Check,
  Landmark,
  Globe,
  Mountain,
  Brain,
  Users,
  Binary,
  Orbit,
  Scale,
  Briefcase,
  Palette,
  Music,
  ChevronDown,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import {
  SUBJECTS,
  getSubjectById,
  getBranchesForSubject,
  getSubjectStats,
} from '../data/subjects';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  curriculum: Curriculum;
  onSelectLesson: (branch: Branch, lesson: Lesson, tab?: string) => void;
  onNavigateTab: (tab: string) => void;
  onOpenOfficialBooks?: () => void;
  selectedSubject?: string;
  onSelectSubject?: (subjectId: string) => void;
}

const cleanChapterTitle = (raw: string): string => {
  if (!raw) return '';
  return raw
    .replace(/^(Chapter|Module|Unit)\s*(\d+|[٠-٩]+|[IVXLCDM]+)?\s*[:\-–—]\s*/i, '')
    .replace(/^(الفصل|الوحدة)\s*([\d٠-٩]+|الأول|الأولى|الثاني|الثانية|الثالث|الثالثة|الرابع|الرابعة|الخامس|الخامسة|السادس|السادسة|السابع|السابعة|الثامن|الثامنة|التاسع|التاسعة|العاشر|العاشرة|التمهيدي)?\s*[:\-–—]\s*/, '')
    .trim();
};

export type SubjectCategory = 'all' | 'science' | 'math' | 'languages' | 'humanities' | 'technology' | 'general';

export const SUBJECT_CATEGORIES: { id: SubjectCategory; labelAr: string; labelEn: string; emoji: string }[] = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All', emoji: '📚' },
  { id: 'science', labelAr: 'العلوم الطبيعية والجيولوجيا', labelEn: 'Sciences', emoji: '🔬' },
  { id: 'math', labelAr: 'الرياضيات والإحصاء', labelEn: 'Math & Stats', emoji: '📐' },
  { id: 'languages', labelAr: 'اللغات والآداب', labelEn: 'Languages', emoji: '🌐' },
  { id: 'humanities', labelAr: 'الإنسانيات والاجتماعيات', labelEn: 'Humanities', emoji: '🏛️' },
  { id: 'technology', labelAr: 'التكنولوجية والمهنية', labelEn: 'Tech & Applied', emoji: '⚙️' },
  { id: 'general', labelAr: 'المواد العامة', labelEn: 'Civic & Religion', emoji: '⚖️' },
];

export const CATEGORY_MAP: Record<SubjectCategory, string[]> = {
  all: [],
  science: ['physics', 'chemistry', 'biology', 'geology', 'earth_space'],
  math: ['mathematics', 'economics_stat'],
  languages: ['arabic', 'english', 'french', 'german', 'italian', 'spanish', 'chinese'],
  humanities: ['history', 'geography', 'philosophy', 'psychology'],
  technology: ['cs_informatics', 'business_entrepreneurship', 'fine_arts_architecture', 'music_theory', 'agriculture', 'industrial', 'commercial', 'tourism', 'renewable'],
  general: ['islamic_studies', 'christian_studies', 'civics'],
};

export const CurriculumOverview: React.FC<Props> = ({
  lang,
  theme = 'dark',
  curriculum,
  onSelectLesson,
  onNavigateTab,
  onOpenOfficialBooks,
  selectedSubject = 'all',
  onSelectSubject,
}) => {
  const t = translations[lang];
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory>('all');
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
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Binary':
        return <Binary className="w-5 h-5" />;
      case 'Orbit':
        return <Orbit className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
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

  const currentSubject = getSubjectById(selectedSubject);

  const subjectBranches = useMemo(() => {
    return getBranchesForSubject(curriculum, selectedSubject);
  }, [curriculum, selectedSubject]);

  const displayedBranches = useMemo(() => {
    if (selectedBranchId === 'all') return subjectBranches;
    const found = subjectBranches.filter((b) => b.id === selectedBranchId);
    return found.length > 0 ? found : subjectBranches;
  }, [subjectBranches, selectedBranchId]);

  // Filter subjects by selectedSubject OR selectedCategory
  const displayedSubjects = useMemo(() => {
    if (selectedSubject && selectedSubject !== 'all') {
      const filtered = SUBJECTS.filter((s) => s.id === selectedSubject);
      return filtered.length > 0 ? filtered : SUBJECTS;
    }
    if (selectedCategory !== 'all') {
      const allowedIds = new Set(CATEGORY_MAP[selectedCategory] || []);
      return SUBJECTS.filter((s) => allowedIds.has(s.id));
    }
    return SUBJECTS;
  }, [selectedSubject, selectedCategory]);

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Editorial Scientific Overview Dispatch */}
      <div className={`hero-banner relative overflow-hidden rounded-2xl border transition-all ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-yellow-300 p-4 sm:p-6'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 p-4 sm:p-6 md:p-8 shadow-xs'
          : 'bg-[#161B22] border-[#30363D] text-[#F0F6FC] p-4 sm:p-6 md:p-8 shadow-md'
      }`}>
        <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3.5 max-w-2xl text-center sm:text-left rtl:sm:text-right">
            <div className={`hero-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-center mx-auto sm:mx-0 border ${
              isContrast
                ? 'bg-black text-cyan-300 border-cyan-400'
                : isLight
                ? 'bg-slate-50 text-slate-700 border-slate-200'
                : 'bg-slate-900 text-slate-300 border-slate-700'
            }`}>
              <BookOpen className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
              <span>
                {isArabic
                  ? `منظومة المناهج الرسمية: ${totalChapters} فصلاً معتمداً (${totalProblems.toLocaleString()} مسألة وتمرين وسؤال)`
                  : `Official Curriculum Repository: ${totalChapters} Accredited Chapters (${totalProblems.toLocaleString()} Problems & Items)`}
              </span>
            </div>

            <h2 className="hero-title text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight">
              {isArabic ? curriculum.nameAr : curriculum.nameEn}
            </h2>
            <p className={`hero-subtitle text-xs sm:text-sm md:text-base font-normal leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {isArabic ? curriculum.subtitleAr : curriculum.subtitleEn}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 sm:pt-2 flex-wrap">
              <button
                onClick={() => onNavigateTab('theory')}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer min-h-[44px] active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>{isArabic ? 'استكشف المنهج والشروحات' : 'Explore Theory & Notes'}</span>
              </button>
              <button
                onClick={() => onNavigateTab('testGenerator')}
                className={`font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.98] ${
                  isContrast
                    ? 'bg-black text-white border-white hover:bg-zinc-900'
                    : isLight
                    ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{t.generateTest}</span>
              </button>
              <button
                onClick={() => onNavigateTab('equivalency')}
                className={`font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.98] ${
                  isContrast
                    ? 'bg-black text-white border-white hover:bg-zinc-900'
                    : isLight
                    ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <Scale className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{isArabic ? 'مقارنة المسارات' : 'Track Bridge'}</span>
              </button>
              <button
                onClick={() => onNavigateTab('interactive')}
                className={`font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.98] ${
                  isContrast
                    ? 'bg-black text-cyan-300 border-cyan-400 hover:bg-zinc-900'
                    : isLight
                    ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FlaskConical className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{isArabic ? 'المختبرات العلمية' : 'Virtual Labs'}</span>
              </button>
              {onOpenOfficialBooks && (
                <button
                  onClick={onOpenOfficialBooks}
                  className={`font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.98] ${
                    isContrast
                      ? 'bg-black text-amber-300 border-amber-400 hover:bg-zinc-900'
                      : isLight
                      ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Download className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{isArabic ? 'كتب الوزارة PDF' : 'Ministry Books PDF'}</span>
                </button>
              )}
            </div>
          </div>

          <div className="shrink-0 flex justify-center items-center">
            <img
              src={clipsatLogo}
              alt="ClipSAT Logo"
              className="h-14 sm:h-20 md:h-24 w-auto object-contain opacity-95 transition-opacity"
            />
          </div>
        </div>

        {/* Global Stats Tabular Ribbon */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t text-center sm:text-left rtl:sm:text-right ${
          isContrast ? 'border-yellow-400/50' : isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className={`p-2.5 sm:p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/60 border-slate-800 text-slate-100'
          }`}>
            <span className="text-[10px] font-bold block text-slate-500 uppercase tracking-wider">
              {isArabic ? 'إجمالي الفصول المعتمدة:' : 'Total Chapters:'}
            </span>
            <span className="text-sm sm:text-base font-black font-mono">
              {isArabic ? toHindiDigits(totalChapters) : totalChapters}{' '}
              <span className="text-[11px] text-slate-500 font-sans font-normal">{isArabic ? 'فصلاً' : 'Ch'}</span>
            </span>
          </div>

          <div className={`p-2.5 sm:p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/60 border-slate-800 text-slate-100'
          }`}>
            <span className="text-[10px] font-bold block text-slate-500 uppercase tracking-wider">
              {isArabic ? 'المسائل المجهزة بالحلول:' : 'Equipped Problems:'}
            </span>
            <span className="text-sm sm:text-base font-black font-mono text-emerald-600 dark:text-emerald-400">
              {isArabic ? toHindiDigits(totalProblems) : totalProblems.toLocaleString()}{' '}
              <span className="text-[11px] text-slate-500 font-sans font-normal">{isArabic ? 'مسألة' : 'Items'}</span>
            </span>
          </div>

          <div className={`p-2.5 sm:p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/60 border-slate-800 text-slate-100'
          }`}>
            <span className="text-[10px] font-bold block text-slate-500 uppercase tracking-wider">
              {isArabic ? 'المسائل المجابة محلياً:' : 'Practiced Problems:'}
            </span>
            <span className="text-sm sm:text-base font-black font-mono text-blue-600 dark:text-blue-400">
              {isArabic ? toHindiDigits(userStats.answeredCount) : userStats.answeredCount}{' '}
              <span className="text-[11px] text-slate-500 font-sans font-normal">{isArabic ? 'مسألة' : 'Done'}</span>
            </span>
          </div>

          <div className={`p-2.5 sm:p-3 rounded-xl border ${
            isContrast ? 'bg-black border-yellow-400 text-white' : isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/60 border-slate-800 text-slate-100'
          }`}>
            <span className="text-[10px] font-bold block text-slate-500 uppercase tracking-wider">
              {isArabic ? 'المسائل المميزة بنجمة:' : 'Starred Bookmarks:'}
            </span>
            <span className="text-sm sm:text-base font-black font-mono flex items-center justify-center sm:justify-start gap-1 text-amber-600 dark:text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{isArabic ? toHindiDigits(userStats.bookmarkedCount) : userStats.bookmarkedCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ ACADEMIC SUBJECT TRACKS GATEWAY */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <h3 className={`text-sm font-black tracking-tight ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              {selectedSubject && selectedSubject !== 'all'
                ? isArabic
                  ? `المسار الأكاديمي المختار: ${currentSubject?.titleAr || selectedSubject}`
                  : `Selected Subject Track: ${currentSubject?.titleEn || selectedSubject}`
                : isArabic
                ? 'المسارات الأكاديمية والمواد المعتمدة:'
                : 'Accredited Academic Subject Tracks:'}
            </h3>
            {selectedSubject && selectedSubject !== 'all' && (
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                {isArabic ? 'تصفية نشطة' : 'Filtered'}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onSelectSubject) onSelectSubject('all');
                setSelectedCategory('all');
                setSelectedBranchId('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 border min-h-[38px] ${
                selectedSubject === 'all' && selectedCategory === 'all'
                  ? isContrast
                    ? 'bg-yellow-400 text-black font-black'
                    : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border-indigo-500'
                  : isContrast
                  ? 'bg-black border-2 border-cyan-400 text-white'
                  : isLight
                  ? 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-xs'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isArabic ? 'جميع المواد الـ 30' : 'All 30 Subjects'}</span>
              <span className="text-[10px] opacity-80 font-mono">({SUBJECTS.length})</span>
            </button>
          </div>
        </div>

        {/* 📱 Mobile & Desktop Horizontal Quick Subject Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 -mx-1 px-1 scrollbar-none touch-pan-x select-none">
          {SUBJECT_CATEGORIES.map((cat) => {
            const isCatActive = selectedCategory === cat.id && (!selectedSubject || selectedSubject === 'all');
            const count = cat.id === 'all' ? SUBJECTS.length : (CATEGORY_MAP[cat.id]?.length || 0);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (onSelectSubject) onSelectSubject('all');
                  setSelectedBranchId('all');
                }}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 border min-h-[36px] ${
                  isCatActive
                    ? isContrast
                      ? 'bg-yellow-400 text-black font-black border-yellow-300 shadow-md shadow-yellow-500/20'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30 border-indigo-500'
                    : isContrast
                    ? 'bg-black border border-slate-700 text-white hover:border-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-2xs'
                    : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
                <span className="text-[10px] opacity-75 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Grand Subject Cards (Filtered by category or specific subject selection) */}
        <div className={`grid grid-cols-1 ${selectedSubject === 'all' ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'sm:grid-cols-1 lg:grid-cols-2 max-w-4xl'} gap-3 sm:gap-4`}>
          {displayedSubjects.map((sub) => {
            const isSubActive = selectedSubject === sub.id;
            const stats = getSubjectStats(curriculum, sub.id);

            // Subject-specific feature descriptions
            const featureNote = sub.id === 'physics'
              ? (isArabic ? '⚡ دوائر كيرشوف وأينشتاين (٧ معامل)' : '⚡ Kirchhoff & Einstein Lab (7 Sub-labs)')
              : sub.id === 'chemistry'
              ? (isArabic ? '🧪 اتزان لوشاتيليه والأفران والمعايرة (٧ معامل)' : '🧪 Le Chatelier & Furnace Lab (7 Sub-labs)')
              : sub.id === 'biology'
              ? (isArabic ? '🧬 أطلس العظام وانقباض العضلات وDNA' : '🧬 Skeleton Atlas & DNA (4 Sub-labs)')
              : (isArabic ? '📐 التفاضل والفراغية 3D والمصفوفات' : '📐 3D Geometry & Calculus Studio');

            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => {
                  if (onSelectSubject) onSelectSubject(sub.id);
                  setSelectedBranchId('all');
                }}
                className={`text-left rtl:text-right p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden group active:scale-[0.98] flex flex-col justify-between ${
                  isSubActive
                    ? isContrast
                      ? 'bg-black border-2 border-yellow-400 text-yellow-300 ring-2 ring-yellow-400'
                      : sub.id === 'physics'
                      ? 'bg-gradient-to-br from-cyan-950/80 via-slate-900 to-sky-950/80 border-2 border-cyan-400 text-white shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-400/40'
                      : sub.id === 'chemistry'
                      ? 'bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 border-2 border-emerald-400 text-white shadow-xl shadow-emerald-500/20 ring-2 ring-emerald-400/40'
                      : sub.id === 'biology'
                      ? 'bg-gradient-to-br from-rose-950/80 via-slate-900 to-pink-950/80 border-2 border-rose-400 text-white shadow-xl shadow-rose-500/20 ring-2 ring-rose-400/40'
                      : 'bg-gradient-to-br from-indigo-950/80 via-slate-900 to-violet-950/80 border-2 border-indigo-400 text-white shadow-xl shadow-indigo-500/20 ring-2 ring-indigo-400/40'
                    : isContrast
                    ? 'bg-black border border-slate-700 text-white hover:border-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:shadow-md hover:bg-slate-50/80 shadow-xs'
                    : 'bg-slate-900/70 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSubActive
                        ? 'bg-white/15 border-white/30 text-white'
                        : isLight
                        ? `${sub.lightBg}`
                        : `${sub.darkBg}`
                    }`}>
                      {getBranchIcon(sub.iconName)}
                    </div>
                    {isSubActive ? (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>{isArabic ? 'المسار النشط' : 'Active'}</span>
                      </span>
                    ) : (
                      <span className="text-xl shrink-0">{sub.emoji}</span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-black flex items-center gap-1.5">
                      <span>{isArabic ? sub.titleAr : sub.titleEn}</span>
                      <span className="text-xs opacity-70">({isArabic ? sub.shortTitleEn : sub.shortTitleAr})</span>
                    </h4>
                    <p className={`text-[11px] line-clamp-2 mt-1 leading-snug ${
                      isSubActive ? 'text-slate-200' : isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {isArabic ? sub.descriptionAr : sub.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/40 dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="opacity-75">{isArabic ? 'الفصول والمسائل:' : 'Chapters & Items:'}</span>
                    <span className="font-bold">
                      {isArabic ? `${toHindiDigits(stats.totalChapters)} فصول • ${toHindiDigits(stats.totalProblems)} مسألة` : `${stats.totalChapters} Ch • ${stats.totalProblems} Items`}
                    </span>
                  </div>
                  <div className={`text-[10px] font-semibold truncate ${
                    isSubActive
                      ? (sub.id === 'physics' ? 'text-cyan-300' : sub.id === 'chemistry' ? 'text-emerald-300' : sub.id === 'biology' ? 'text-rose-300' : 'text-indigo-300')
                      : (isLight ? 'text-slate-600' : 'text-slate-400')
                  }`}>
                    {featureNote}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action strip when a specific subject (e.g. Physics) is active */}
        {currentSubject && selectedSubject !== 'all' && (
          <div className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition-all ${
            selectedSubject === 'physics'
              ? 'bg-gradient-to-r from-cyan-950/70 via-slate-900 to-sky-950/70 border-cyan-500/50 text-cyan-100 shadow-md shadow-cyan-950/40'
              : selectedSubject === 'chemistry'
              ? 'bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border-emerald-500/50 text-emerald-100 shadow-md shadow-emerald-950/40'
              : selectedSubject === 'biology'
              ? 'bg-gradient-to-r from-rose-950/70 via-slate-900 to-pink-950/70 border-rose-500/50 text-rose-100 shadow-md shadow-rose-950/40'
              : 'bg-gradient-to-r from-indigo-950/70 via-slate-900 to-blue-950/70 border-indigo-500/50 text-indigo-100 shadow-md shadow-indigo-950/40'
          }`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{currentSubject.emoji}</span>
              <div>
                <span className="font-extrabold text-sm block">
                  {isArabic ? `مسار ${currentSubject.titleAr}` : `${currentSubject.titleEn} Track`}:{' '}
                  <span className="font-normal text-xs opacity-90">
                    {isArabic ? currentSubject.descriptionAr : currentSubject.descriptionEn}
                  </span>
                </span>
                <span className="text-[11px] opacity-75">
                  {isArabic
                    ? `يتم الآن عرض فصول ومسائل واختبارات ومختبرات ${currentSubject.titleAr}`
                    : `Currently displaying ${currentSubject.titleEn} chapters, items, labs & simulators`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                onClick={() => onNavigateTab('interactive')}
                className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-xs ${
                  selectedSubject === 'physics'
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/30'
                    : selectedSubject === 'chemistry'
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                    : selectedSubject === 'biology'
                    ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                }`}
              >
                <span>🔬</span>
                <span>{isArabic ? `مختبر ${currentSubject.titleAr} التفاعلي` : `${currentSubject.shortTitleEn} Virtual Lab`}</span>
              </button>

              <button
                onClick={() => onNavigateTab('testGenerator')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                  isLight ? 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100' : 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <span>📝</span>
                <span>{isArabic ? `اختبار ${currentSubject.titleAr}` : `${currentSubject.shortTitleEn} Exam`}</span>
              </button>

              <button
                onClick={() => {
                  if (onSelectSubject) onSelectSubject('all');
                  setSelectedBranchId('all');
                }}
                className={`px-2.5 py-1.5 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                  isLight ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {isArabic ? 'عرض كل المواد ✕' : 'View All Tracks ✕'}
              </button>
            </div>
          </div>
        )}
      </div>

        {/* Sub-Branch Filter Dropdown */}
        {subjectBranches.length > 1 && (
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className={`text-xs font-bold whitespace-nowrap ${
              isLight ? 'text-slate-700' : 'text-slate-400'
            }`}>
              {isArabic ? 'تصفية الفروع:' : 'Filter Branch:'}
            </span>
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                  isContrast
                    ? 'bg-black text-white border-yellow-400'
                    : isLight
                    ? 'bg-white border-slate-300 text-slate-800'
                    : 'bg-slate-900 border-slate-700 text-slate-200'
                }`}
              >
                <option value="all" className="bg-slate-900 text-white">
                  {isArabic ? `جميع الفروع (${toHindiDigits(subjectBranches.length)})` : `All Branches (${subjectBranches.length})`}
                </option>
                {subjectBranches.map((b) => (
                  <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                    {isArabic ? b.titleAr : b.titleEn}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        )}

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
                              <MathRenderer math={cleanChapterTitle(isArabic ? ch.titleAr : ch.titleEn)} lang={lang} />
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
