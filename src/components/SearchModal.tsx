import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { Language } from '../i18n/translations';
import type { CurriculumType, Branch, Lesson, DifficultyLevel } from '../types/curriculum';
import { thanaweyaCurriculum } from '../data/thanaweyaData';
import { egBacCurriculum } from '../data/egBacData';
import { SUBJECTS, getSubjectForBranch, type SubjectId } from '../data/subjects';
import { MathRenderer } from './MathRenderer';
import {
  Search,
  X,
  CheckCircle2,
  Sparkles,
  Filter,
  Clock,
  Trash2,
  HelpCircle,
  Flame,
  ArrowRight,
  ArrowLeft,
  SlidersHorizontal,
} from 'lucide-react';

interface SearchResultItem {
  id: string;
  type: 'chapter' | 'lesson' | 'solved_example' | 'exercise' | 'databank';
  curriculumType: CurriculumType;
  curriculumNameEn: string;
  curriculumNameAr: string;
  branch: Branch;
  lesson: Lesson;
  chapterTitleEn: string;
  chapterTitleAr: string;
  titleEn: string;
  titleAr: string;
  snippetEn: string;
  snippetAr: string;
  difficulty?: DifficultyLevel;
  targetTab: string;
  subjectId: SubjectId | 'other';
  subjectTitleEn: string;
  subjectTitleAr: string;
  subjectEmoji: string;
  normalizedIndex: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  onNavigate: (
    curriculumType: CurriculumType,
    branch: Branch,
    lesson: Lesson,
    tab: string
  ) => void;
}

// Arabic normalization helper for deep resilient matching
const normalizeArabic = (text: string): string => {
  return text
    .replace(/[\u064B-\u065F\u0670]/g, '') // strip tashkeel & dagger alif
    .replace(/[ـ]/g, '') // strip kashida / tatweel
    .replace(/[أإآٱ]/g, 'ا') // normalize alif forms
    .replace(/[ة]/g, 'ه') // normalize taa marbuta
    .replace(/[ى]/g, 'ي') // normalize alif maqsura
    .replace(/[ؤ]/g, 'و') // normalize hamza on waw
    .replace(/[ئ]/g, 'ي'); // normalize hamza on yaa
};

const normalizeText = (text: string): string => {
  if (!text) return '';
  return normalizeArabic(text).toLowerCase().trim();
};

// Highlight matching words in titles and snippets
const HighlightText: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query.trim() || !text) return <span>{text}</span>;
  const rawTokens = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (rawTokens.length === 0) return <span>{text}</span>;

  try {
    const escaped = rawTokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark
              key={i}
              className="bg-amber-400/30 text-amber-300 font-bold px-0.5 py-0.2 rounded"
            >
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  } catch {
    return <span>{text}</span>;
  }
};

const RECENT_SEARCHES_KEY = 'egbac_universal_search_history_v2';

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<'all' | 'thanaweya' | 'egbac'>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'lesson' | 'databank' | 'textbook'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hots'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Load recent searches on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        setRecentSearches(JSON.parse(stored).slice(0, 8));
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  const saveRecentSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) return;
    try {
      setRecentSearches((prev) => {
        const next = [trimmed, ...prev.filter((item) => item !== trimmed)].slice(0, 8);
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(next));
        return next;
      });
    } catch {
      // Ignore localStorage write errors
    }
  }, []);

  const clearRecentSearches = () => {
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
      setRecentSearches([]);
    } catch {
      // Ignore errors
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle ESC and Arrow navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build indexed items across both curricula (memoized once for the app lifetime)
  const allIndexedItems = useMemo(() => {
    const items: SearchResultItem[] = [];

    const indexCurriculum = (curriculum: typeof thanaweyaCurriculum, curType: CurriculumType) => {
      curriculum.branches.forEach((branch) => {
        const subjectDef = getSubjectForBranch(branch.id, curType);
        const subjectId: SubjectId | 'other' = subjectDef?.id || 'other';
        const subjectTitleEn = subjectDef?.titleEn || branch.titleEn;
        const subjectTitleAr = subjectDef?.titleAr || branch.titleAr;
        const subjectEmoji = subjectDef?.emoji || '📚';

        branch.chapters.forEach((chapter) => {
          const primaryLesson = chapter.lessons[0] || {
            id: `${chapter.id}-l1`,
            titleEn: chapter.titleEn,
            titleAr: chapter.titleAr,
            summaryEn: chapter.descriptionEn || '',
            summaryAr: chapter.descriptionAr || '',
          };

          // Index Chapter
          items.push({
            id: `ch_${chapter.id}`,
            type: 'chapter',
            curriculumType: curType,
            curriculumNameEn: curriculum.nameEn,
            curriculumNameAr: curriculum.nameAr,
            branch,
            lesson: primaryLesson,
            chapterTitleEn: chapter.titleEn,
            chapterTitleAr: chapter.titleAr,
            titleEn: chapter.titleEn,
            titleAr: chapter.titleAr,
            snippetEn: chapter.descriptionEn || chapter.titleEn,
            snippetAr: chapter.descriptionAr || chapter.titleAr,
            targetTab: 'overview',
            subjectId,
            subjectTitleEn,
            subjectTitleAr,
            subjectEmoji,
            normalizedIndex: normalizeText(
              `${chapter.titleEn} ${chapter.titleAr} ${chapter.descriptionEn || ''} ${
                chapter.descriptionAr || ''
              } ${branch.titleEn} ${branch.titleAr} ${subjectTitleEn} ${subjectTitleAr}`
            ),
          });

          // Index Lessons
          chapter.lessons.forEach((l) => {
            items.push({
              id: `les_${l.id}`,
              type: 'lesson',
              curriculumType: curType,
              curriculumNameEn: curriculum.nameEn,
              curriculumNameAr: curriculum.nameAr,
              branch,
              lesson: l,
              chapterTitleEn: chapter.titleEn,
              chapterTitleAr: chapter.titleAr,
              titleEn: l.titleEn,
              titleAr: l.titleAr,
              snippetEn: l.summaryEn,
              snippetAr: l.summaryAr,
              targetTab: 'theory',
              subjectId,
              subjectTitleEn,
              subjectTitleAr,
              subjectEmoji,
              normalizedIndex: normalizeText(
                `${l.titleEn} ${l.titleAr} ${l.summaryEn} ${l.summaryAr} ${chapter.titleEn} ${chapter.titleAr} ${subjectTitleEn} ${subjectTitleAr}`
              ),
            });
          });

          // Index Solved Examples
          if (chapter.solvedExamples) {
            chapter.solvedExamples.forEach((se) => {
              items.push({
                id: `se_${se.id}`,
                type: 'solved_example',
                curriculumType: curType,
                curriculumNameEn: curriculum.nameEn,
                curriculumNameAr: curriculum.nameAr,
                branch,
                lesson: primaryLesson,
                chapterTitleEn: chapter.titleEn,
                chapterTitleAr: chapter.titleAr,
                titleEn: se.titleEn,
                titleAr: se.titleAr,
                snippetEn: se.questionEn,
                snippetAr: se.questionAr,
                difficulty: se.difficulty,
                targetTab: 'solvedExamples',
                subjectId,
                subjectTitleEn,
                subjectTitleAr,
                subjectEmoji,
                normalizedIndex: normalizeText(
                  `${se.titleEn} ${se.titleAr} ${se.questionEn} ${se.questionAr} ${chapter.titleEn} ${chapter.titleAr} ${subjectTitleEn} ${subjectTitleAr}`
                ),
              });
            });
          }

          // Index Unit Exercises
          if (chapter.exerciseProblems) {
            chapter.exerciseProblems.forEach((ex) => {
              items.push({
                id: `ex_${ex.id}`,
                type: 'exercise',
                curriculumType: curType,
                curriculumNameEn: curriculum.nameEn,
                curriculumNameAr: curriculum.nameAr,
                branch,
                lesson: primaryLesson,
                chapterTitleEn: chapter.titleEn,
                chapterTitleAr: chapter.titleAr,
                titleEn: ex.titleEn,
                titleAr: ex.titleAr,
                snippetEn: ex.questionEn,
                snippetAr: ex.questionAr,
                difficulty: ex.difficulty,
                targetTab: 'exerciseProblems',
                subjectId,
                subjectTitleEn,
                subjectTitleAr,
                subjectEmoji,
                normalizedIndex: normalizeText(
                  `${ex.titleEn} ${ex.titleAr} ${ex.questionEn} ${ex.questionAr} ${chapter.titleEn} ${chapter.titleAr} ${subjectTitleEn} ${subjectTitleAr}`
                ),
              });
            });
          }

          // Index Databank MCQs
          if (chapter.databank) {
            const allDb = [
              ...(chapter.databank.easy || []),
              ...(chapter.databank.medium || []),
              ...(chapter.databank.hots || []),
            ];
            allDb.forEach((q) => {
              items.push({
                id: `db_${q.id}`,
                type: 'databank',
                curriculumType: curType,
                curriculumNameEn: curriculum.nameEn,
                curriculumNameAr: curriculum.nameAr,
                branch,
                lesson: primaryLesson,
                chapterTitleEn: chapter.titleEn,
                chapterTitleAr: chapter.titleAr,
                titleEn: q.titleEn,
                titleAr: q.titleAr,
                snippetEn: q.questionEn,
                snippetAr: q.questionAr,
                difficulty: q.difficulty,
                targetTab: 'databank',
                subjectId,
                subjectTitleEn,
                subjectTitleAr,
                subjectEmoji,
                normalizedIndex: normalizeText(
                  `${q.titleEn} ${q.titleAr} ${q.questionEn} ${q.questionAr} ${chapter.titleEn} ${chapter.titleAr} ${subjectTitleEn} ${subjectTitleAr}`
                ),
              });
            });
          }
        });
      });
    };

    indexCurriculum(thanaweyaCurriculum, 'thanaweya');
    indexCurriculum(egBacCurriculum, 'egbac');

    return items;
  }, []);

  // Filter and score items matching query with multi-token intelligent relevance ranking
  const filteredResults = useMemo(() => {
    const cleanQuery = normalizeText(query);
    if (!cleanQuery) return [];

    const tokens = cleanQuery.split(/\s+/).filter((t) => t.length > 0);
    if (tokens.length === 0) return [];

    interface ScoredItem {
      item: SearchResultItem;
      score: number;
    }

    const matched: ScoredItem[] = [];

    for (const item of allIndexedItems) {
      // 1. Track filter
      if (trackFilter !== 'all' && item.curriculumType !== trackFilter) {
        continue;
      }

      // 2. Subject filter
      if (subjectFilter !== 'all' && item.subjectId !== subjectFilter) {
        continue;
      }

      // 3. Type filter
      if (typeFilter === 'lesson' && item.type !== 'lesson' && item.type !== 'chapter') continue;
      if (typeFilter === 'databank' && item.type !== 'databank') continue;
      if (
        typeFilter === 'textbook' &&
        item.type !== 'solved_example' &&
        item.type !== 'exercise'
      )
        continue;

      // 4. Difficulty filter
      if (difficultyFilter !== 'all') {
        if (!item.difficulty || item.difficulty !== difficultyFilter) {
          continue;
        }
      }

      // 5. Multi-token relevance check
      let allTokensFound = true;
      for (const token of tokens) {
        if (!item.normalizedIndex.includes(token)) {
          allTokensFound = false;
          break;
        }
      }

      if (!allTokensFound) continue;

      // Calculate fine-grained ranking score
      let score = 0;
      const normTitleAr = normalizeText(item.titleAr);
      const normTitleEn = normalizeText(item.titleEn);
      const normChapterAr = normalizeText(item.chapterTitleAr);
      const normChapterEn = normalizeText(item.chapterTitleEn);
      const normSnippetAr = normalizeText(item.snippetAr);
      const normSnippetEn = normalizeText(item.snippetEn);

      // Exact full match on title
      if (normTitleAr === cleanQuery || normTitleEn === cleanQuery) {
        score += 300;
      } else if (normTitleAr.includes(cleanQuery) || normTitleEn.includes(cleanQuery)) {
        score += 150;
      }

      // Token matches in Title
      for (const token of tokens) {
        if (normTitleAr.includes(token) || normTitleEn.includes(token)) {
          score += 60;
        }
        if (normChapterAr.includes(token) || normChapterEn.includes(token)) {
          score += 30;
        }
        if (normSnippetAr.includes(token) || normSnippetEn.includes(token)) {
          score += 15;
        }
      }

      // Type weightings
      if (item.type === 'lesson') score += 25;
      if (item.type === 'chapter') score += 20;
      if (item.type === 'solved_example') score += 15;
      if (item.difficulty === 'hots') score += 10;

      matched.push({ item, score });
    }

    // Sort by score descending
    matched.sort((a, b) => b.score - a.score);

    return matched.slice(0, 60).map((m) => m.item);
  }, [allIndexedItems, query, trackFilter, subjectFilter, typeFilter, difficultyFilter]);

  // Reset selected index when query or filters change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, trackFilter, subjectFilter, typeFilter, difficultyFilter]);

  // Scroll active item into view
  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  const handleSelect = (item: SearchResultItem) => {
    saveRecentSearch(query);
    onNavigate(item.curriculumType, item.branch, item.lesson, item.targetTab);
    onClose();
  };

  const handleKeyDownInInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-2.5 sm:p-6 sm:pt-16 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-4xl rounded-2xl shadow-2xl border flex flex-col max-h-[88vh] overflow-hidden transition-all ${
          isContrast
            ? 'bg-black border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
      >
        {/* Search Header */}
        <div
          className={`p-3.5 sm:p-4 border-b flex items-center gap-3 ${
            isLight ? 'border-slate-200 bg-slate-50/70' : 'border-slate-800 bg-slate-950/60'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0">
            <Search className="w-5 h-5" />
          </div>

          <input
            ref={inputRef}
            type="text"
            placeholder={
              isArabic
                ? 'ابحث في ٤٣,٤٠٠ مسألة وقانون وفصل... (مثال: كبلر، كيرشوف، بوين، موهس، طابا، بايز، كينز، بايثون، DNA)'
                : 'Search across 43,400 problems, theorems & lessons... (e.g. Kepler, Kirchhoff, Bowen, Mohs, Taba, Bayes, Keynes, Python, DNA)'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDownInInput}
            className="w-full bg-transparent text-sm sm:text-base outline-none font-medium placeholder:text-slate-500"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
              title={isArabic ? 'مسح البحث' : 'Clear search'}
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 font-semibold transition-colors ${
              showFilters
                ? 'bg-indigo-600 text-white border-indigo-500'
                : isLight
                ? 'bg-slate-100 text-slate-600 border-slate-300'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
            title={isArabic ? 'تخصيص الفلاتر' : 'Toggle Filters'}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isArabic ? 'تصفية' : 'Filters'}</span>
          </button>

          <button
            onClick={onClose}
            className={`text-xs px-2.5 py-1.5 rounded-lg border font-mono font-semibold shrink-0 ${
              isLight
                ? 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            ESC
          </button>
        </div>

        {/* Collapsible Filter Bar */}
        {showFilters && (
          <div
            className={`px-4 py-3 border-b space-y-2 text-xs ${
              isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            {/* Primary Track and Content Type Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              {/* Track filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  {isArabic ? 'المسار:' : 'Track:'}
                </span>
                <button
                  onClick={() => setTrackFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                    trackFilter === 'all'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {isArabic ? 'الكل (٢١٧ فصلاً)' : 'All (217 Ch)'}
                </button>
                <button
                  onClick={() => setTrackFilter('thanaweya')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                    trackFilter === 'thanaweya'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {isArabic ? 'ثانوية عامة (١١٥)' : 'Thanaweya (115)'}
                </button>
                <button
                  onClick={() => setTrackFilter('egbac')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                    trackFilter === 'egbac'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {isArabic ? 'بكالوريا مصرية (١٠٢)' : 'EG-Bac (102)'}
                </button>
              </div>

              {/* Type filter */}
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  onClick={() => setTypeFilter('all')}
                  className={`px-2 py-0.5 rounded-md font-semibold ${
                    typeFilter === 'all'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'الكل' : 'All Types'}
                </button>
                <button
                  onClick={() => setTypeFilter('databank')}
                  className={`px-2 py-0.5 rounded-md font-semibold ${
                    typeFilter === 'databank'
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'بنك الأسئلة' : 'Databank'}
                </button>
                <button
                  onClick={() => setTypeFilter('textbook')}
                  className={`px-2 py-0.5 rounded-md font-semibold ${
                    typeFilter === 'textbook'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'الكتاب المدرسي' : 'Textbook'}
                </button>
                <button
                  onClick={() => setTypeFilter('lesson')}
                  className={`px-2 py-0.5 rounded-md font-semibold ${
                    typeFilter === 'lesson'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? 'الدروس والشرح' : 'Lessons'}
                </button>
              </div>
            </div>

            {/* Subject Selector Pills (All 13 Core Subjects) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-thin">
              <span className="text-slate-400 font-semibold shrink-0">
                {isArabic ? 'المادة:' : 'Subject:'}
              </span>

              <button
                onClick={() => setSubjectFilter('all')}
                className={`px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap text-xs transition-all ${
                  subjectFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-800/40'
                }`}
              >
                {isArabic ? 'جميع المواد (١٣)' : 'All 13 Subjects'}
              </button>

              {SUBJECTS.map((sub) => {
                const isSelected = subjectFilter === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSubjectFilter(isSelected ? 'all' : sub.id)}
                    className={`px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap text-xs flex items-center gap-1 transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                        : 'text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800/70'
                    }`}
                  >
                    <span>{sub.emoji}</span>
                    <span>{isArabic ? sub.shortTitleAr : sub.shortTitleEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Difficulty Filter Pills */}
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-slate-400 font-semibold shrink-0">
                {isArabic ? 'الصعوبة:' : 'Difficulty:'}
              </span>
              <button
                onClick={() => setDifficultyFilter('all')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  difficultyFilter === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400'
                }`}
              >
                {isArabic ? 'الكل' : 'All'}
              </button>
              <button
                onClick={() => setDifficultyFilter('easy')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  difficultyFilter === 'easy'
                    ? 'bg-emerald-700 text-white'
                    : 'text-emerald-400/80 hover:text-emerald-300'
                }`}
              >
                {isArabic ? 'تأسيسي' : 'Easy'}
              </button>
              <button
                onClick={() => setDifficultyFilter('medium')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                  difficultyFilter === 'medium'
                    ? 'bg-amber-700 text-white'
                    : 'text-amber-400/80 hover:text-amber-300'
                }`}
              >
                {isArabic ? 'متوسط' : 'Medium'}
              </button>
              <button
                onClick={() => setDifficultyFilter('hots')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 ${
                  difficultyFilter === 'hots'
                    ? 'bg-purple-700 text-white'
                    : 'text-purple-400/80 hover:text-purple-300'
                }`}
              >
                <Flame className="w-3 h-3" />
                {isArabic ? 'مستويات عليا HOTS' : 'HOTS'}
              </button>
            </div>
          </div>
        )}

        {/* Results Container */}
        <div
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-4 divide-y divide-slate-800/40 space-y-2.5"
        >
          {!query.trim() ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <p className="text-base font-bold text-slate-200">
                  {isArabic
                    ? 'البحث الشامل في المناهج المصرية ومسار المتفوقين STEM'
                    : 'Universal Egyptian National & STEM Curriculum Search'}
                </p>
                <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                  {isArabic
                    ? 'اكتب أي مفهوم، قانون علمي أو رياضي، اسم عالم، أو نص مسألة للوصول الفوري إلى ٤٣,٤٠٠ سؤالاً وتدريباً وشرحاً مفصلاً عبر ٢١٧ فصلاً في ١٥ مادة معتمدة.'
                    : 'Type any concept, formula, scientist, or problem text to instantly locate any of the 43,400 problems across 217 chapters in 15 accredited subjects.'}
                </p>
              </div>

              {/* Recent Searches (if available) */}
              {recentSearches.length > 0 && (
                <div className="max-w-xl mx-auto space-y-2 text-left rtl:text-right pt-2 border-t border-slate-800/50">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {isArabic ? 'عمليات البحث الأخيرة:' : 'Recent Searches:'}
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-slate-500 hover:text-rose-400 flex items-center gap-1 text-[11px] transition-colors"
                      title={isArabic ? 'مسح السجل' : 'Clear history'}
                    >
                      <Trash2 className="w-3 h-3" />
                      {isArabic ? 'مسح' : 'Clear'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recentSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(term)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 hover:bg-indigo-600/30 hover:text-indigo-300 border border-slate-700/60 text-slate-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Curated High-Yield Topic Suggestions */}
              <div className="space-y-2 max-w-2xl mx-auto pt-2">
                <span className="text-xs font-semibold text-slate-400">
                  {isArabic ? 'أبرز موضوعات الامتحانات الوزارية:' : 'High-Yield Ministerial Exam Topics:'}
                </span>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {[
                    { term: 'Kirchhoff', label: '⚡ كيرشوف' },
                    { term: 'Faraday', label: '⚡ فاراداي' },
                    { term: 'خلية دانيال', label: '🧪 خلية دانيال' },
                    { term: 'ماركونيكوف', label: '🧪 ماركونيكوف' },
                    { term: 'تضاعف DNA', label: '🧬 DNA' },
                    { term: 'انقباض العضلة', label: '🧬 انقباض عضلي' },
                    { term: 'تكامل بالتعويض', label: '📐 تكامل' },
                    { term: 'عزوم القوى', label: '📐 عزوم' },
                    { term: 'احتمال شرطي', label: '📐 بيز' },
                    { term: 'معاهدة 1936', label: '🏛️ معاهدة 1936' },
                    { term: 'ثورة 1919', label: '🏛️ ثورة 1919' },
                    { term: 'طابا', label: '🌍 تحكيم طابا' },
                    { term: 'الرصيف القاري', label: '🌍 رصيف قاري' },
                    { term: 'الكوميسا', label: '🌍 الكوميسا' },
                    { term: 'المبتدأ والخبر', label: '📖 إعراب' },
                    { term: 'Conditional sentences', label: '🇬🇧 Conditionals' },
                  ].map(({ term, label }) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-2.5 py-1 rounded-lg border border-slate-700/70 hover:border-indigo-500 hover:text-indigo-300 hover:bg-indigo-950/30 text-slate-300 transition-all font-medium"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-14 text-center space-y-2 text-slate-400">
              <div className="w-12 h-12 mx-auto rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                <HelpCircle className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold">
                {isArabic
                  ? `لم يتم العثور على نتائج تطابق "${query}"`
                  : `No results found matching "${query}"`}
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {isArabic
                  ? 'جرب البحث بكلمات أبسط أو إزالة بعض الكلمات أو إعادة ضبط الفلاتر أعلى النافذة.'
                  : 'Try using simpler keywords, fewer words, or resetting filters at the top.'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1 pb-1">
                <span>
                  {isArabic
                    ? `تم العثور على ${filteredResults.length} نتيجة مطابقة (استخدم ↑ ↓ للتنقل و Enter للاختيار):`
                    : `Found ${filteredResults.length} matches (Use ↑ ↓ to navigate, Enter to open):`}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {selectedIndex + 1} / {filteredResults.length}
                </span>
              </div>

              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer group flex flex-col gap-2 relative ${
                      isSelected
                        ? isContrast
                          ? 'bg-yellow-950/40 border-yellow-400 ring-2 ring-yellow-400'
                          : isLight
                          ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-400/30'
                          : 'bg-indigo-950/40 border-indigo-500 ring-1 ring-indigo-500/50'
                        : isLight
                        ? 'bg-slate-50 hover:bg-indigo-50/40 border-slate-200'
                        : 'bg-slate-950/60 hover:bg-slate-800/60 border-slate-800'
                    }`}
                  >
                    {/* Header line: Track, Subject, Chapter, Type, Difficulty */}
                    <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Track Badge */}
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            item.curriculumType === 'egbac'
                              ? 'bg-purple-950 text-purple-300 border border-purple-800'
                              : 'bg-blue-950 text-blue-300 border border-blue-800'
                          }`}
                        >
                          {item.curriculumType === 'egbac' ? 'EG-Bac STEM' : 'Thanaweya'}
                        </span>

                        {/* Subject Badge */}
                        <span className="font-bold text-slate-300 flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                          <span>{item.subjectEmoji}</span>
                          <span>{isArabic ? item.subjectTitleAr : item.subjectTitleEn}</span>
                        </span>

                        <span className="text-slate-600 hidden sm:inline">•</span>

                        {/* Chapter title */}
                        <span className="text-slate-400 truncate max-w-[220px] text-xs">
                          {isArabic ? item.chapterTitleAr : item.chapterTitleEn}
                        </span>
                      </div>

                      {/* Right side tags */}
                      <div className="flex items-center gap-1.5">
                        {item.difficulty && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                              item.difficulty === 'hots'
                                ? 'bg-purple-950 text-purple-300 border-purple-700'
                                : item.difficulty === 'medium'
                                ? 'bg-amber-950 text-amber-300 border-amber-700'
                                : 'bg-emerald-950 text-emerald-300 border-emerald-700'
                            }`}
                          >
                            {item.difficulty.toUpperCase()}
                          </span>
                        )}

                        <span className="text-[10px] font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-slate-800">
                          {item.type === 'databank'
                            ? isArabic
                              ? 'بنك الأسئلة'
                              : 'Databank'
                            : item.type === 'solved_example'
                            ? isArabic
                              ? 'مثال محلول'
                              : 'Solved'
                            : item.type === 'exercise'
                            ? isArabic
                              ? 'تمرين كتاب'
                              : 'Exercise'
                            : isArabic
                            ? 'درس وشرح'
                            : 'Lesson'}
                        </span>

                        {isSelected && (
                          <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-700/60 hidden sm:inline-flex items-center gap-1">
                            <span>↵ Enter</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Snippet with Highlight */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                        <HighlightText
                          text={isArabic ? item.titleAr : item.titleEn}
                          query={query}
                        />
                        {isSelected && (
                          <span className="text-indigo-400 shrink-0">
                            {isArabic ? (
                              <ArrowLeft className="w-4 h-4" />
                            ) : (
                              <ArrowRight className="w-4 h-4" />
                            )}
                          </span>
                        )}
                      </h4>

                      <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {item.snippetAr?.includes('$') || item.snippetEn?.includes('$') ? (
                          <MathRenderer
                            math={isArabic ? item.snippetAr : item.snippetEn}
                            lang={lang}
                          />
                        ) : (
                          <HighlightText
                            text={isArabic ? item.snippetAr : item.snippetEn}
                            query={query}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Enhanced Footer Bar with Live Counts and Keyboard Hints */}
        <div
          className={`p-3 border-t text-[11px] flex flex-wrap items-center justify-between gap-2 text-slate-400 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="font-medium">
              {isArabic
                ? 'فهرس فوري لـ ٢١٧ فصلاً و ٤٣,٤٠٠ مسألة عبر ١٥ مادة أساسية'
                : 'Live index of 217 chapters & 43,400 problems across 15 core subjects'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono">
                ↓
              </kbd>
              <span>{isArabic ? 'للتنقل' : 'Navigate'}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono">
                ↵ Enter
              </kbd>
              <span>{isArabic ? 'للانتقال' : 'Select'}</span>
            </span>

            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono">
                ESC
              </kbd>
              <span>{isArabic ? 'للإغلاق' : 'Close'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
