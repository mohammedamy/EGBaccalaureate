import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { Language } from '../i18n/translations';
import type { CurriculumType, Branch, Lesson, DifficultyLevel } from '../types/curriculum';
import { thanaweyaCurriculum } from '../data/thanaweyaData';
import { egBacCurriculum } from '../data/egBacData';
import { MathRenderer } from './MathRenderer';
import { Search, X, CheckCircle2, Sparkles, Filter } from 'lucide-react';

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

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  theme = 'dark',
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<'all' | 'thanaweya' | 'egbac'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'lesson' | 'databank' | 'textbook'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build indexed items across both curricula (memoized)
  const allIndexedItems = useMemo(() => {
    const items: SearchResultItem[] = [];

    const indexCurriculum = (curriculum: typeof thanaweyaCurriculum, curType: CurriculumType) => {
      curriculum.branches.forEach((branch) => {
        branch.chapters.forEach((chapter) => {
          const primaryLesson = chapter.lessons[0];

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

  // Filter items matching query
  const filteredResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return [];

    return allIndexedItems
      .filter((item) => {
        // Track filter
        if (trackFilter !== 'all' && item.curriculumType !== trackFilter) {
          return false;
        }

        // Type filter
        if (typeFilter === 'lesson' && item.type !== 'lesson') return false;
        if (typeFilter === 'databank' && item.type !== 'databank') return false;
        if (
          typeFilter === 'textbook' &&
          item.type !== 'solved_example' &&
          item.type !== 'exercise'
        )
          return false;

        // Search text matching
        const searchPool = [
          item.titleEn,
          item.titleAr,
          item.snippetEn,
          item.snippetAr,
          item.chapterTitleEn,
          item.chapterTitleAr,
          item.branch.titleEn,
          item.branch.titleAr,
        ]
          .join(' ')
          .toLowerCase();

        return searchPool.includes(cleanQuery);
      })
      .slice(0, 50); // Limit to top 50 matches for maximum performance
  }, [allIndexedItems, query, trackFilter, typeFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 sm:pt-20 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-3xl rounded-2xl shadow-2xl border flex flex-col max-h-[85vh] overflow-hidden ${
          isContrast
            ? 'bg-black border-yellow-400 text-white'
            : isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
      >
        {/* Search Header */}
        <div className={`p-4 border-b flex items-center gap-3 ${isLight ? 'border-slate-200 bg-slate-50/50' : 'border-slate-800 bg-slate-950/40'}`}>
          <Search className="w-5 h-5 text-indigo-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={
              lang === 'ar'
                ? 'ابحث في ٤٧٢٥ مسألة وقانون وفصل... (مثال: بيز، احتكاك، مصفوفة، نيوتن)'
                : 'Search across 4,725 problems, theorems & lessons... (e.g. Bayes, Friction, Matrix, Newton)'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full bg-transparent text-sm sm:text-base outline-none font-medium placeholder:text-slate-400`}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${
              isLight ? 'bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            ESC
          </button>
        </div>

        {/* Filter Chips Bar */}
        <div className={`px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 text-xs ${
          isLight ? 'bg-slate-100/60 border-slate-200' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'المسار:' : 'Track:'}
            </span>
            <button
              onClick={() => setTrackFilter('all')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                trackFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? 'الكل (٢٧ فصلاً)' : 'All (27 Ch)'}
            </button>
            <button
              onClick={() => setTrackFilter('thanaweya')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                trackFilter === 'thanaweya'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? 'ثانوية عامة (١٩)' : 'Thanaweya (19)'}
            </button>
            <button
              onClick={() => setTrackFilter('egbac')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                trackFilter === 'egbac'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ar' ? 'بكالوريا STEM (٨)' : 'EG-Bac STEM (8)'}
            </button>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setTypeFilter('all')}
              className={`px-2 py-0.5 rounded-md font-semibold ${
                typeFilter === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400'
              }`}
            >
              {lang === 'ar' ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setTypeFilter('databank')}
              className={`px-2 py-0.5 rounded-md font-semibold ${
                typeFilter === 'databank' ? 'bg-amber-600 text-white' : 'text-slate-400'
              }`}
            >
              {lang === 'ar' ? 'بنك الأسئلة' : 'Databank'}
            </button>
            <button
              onClick={() => setTypeFilter('textbook')}
              className={`px-2 py-0.5 rounded-md font-semibold ${
                typeFilter === 'textbook' ? 'bg-emerald-600 text-white' : 'text-slate-400'
              }`}
            >
              {lang === 'ar' ? 'الكتاب المدرسي' : 'Textbook'}
            </button>
            <button
              onClick={() => setTypeFilter('lesson')}
              className={`px-2 py-0.5 rounded-md font-semibold ${
                typeFilter === 'lesson' ? 'bg-cyan-600 text-white' : 'text-slate-400'
              }`}
            >
              {lang === 'ar' ? 'الدروس والشرح' : 'Lessons'}
            </button>
          </div>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-800/40 space-y-2">
          {!query.trim() ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-300">
                {lang === 'ar'
                  ? 'البحث الشامل في مناهج الرياضيات المصرية'
                  : 'Universal Egyptian Math Curriculum Search'}
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                {lang === 'ar'
                  ? 'اكتب أي مفهوم، قانون رياضي، اسم عالم، أو نص مسألة للوصول الفوري إلى ٤,٧٢٥ سؤالاً وتدريباً وشرحاً مفصلاً.'
                  : 'Type any mathematical concept, formula, mathematician, or problem text to instantly locate any of the 4,725 problems across 27 chapters.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Bayes', 'بيز', 'Friction', 'احتكاك', 'De Moivre', 'ديموافر', 'Matrices', 'مصفوفات', 'Markov', 'ماركوف'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-300 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-12 text-center space-y-2 text-slate-400">
              <p className="text-sm font-semibold">
                {lang === 'ar' ? `لم يتم العثور على نتائج تطابق "${query}"` : `No results found matching "${query}"`}
              </p>
              <p className="text-xs text-slate-500">
                {lang === 'ar'
                  ? 'جرب البحث بكلمات أخرى أو تقليل حروف الكلمة المفتاحية.'
                  : 'Try searching with alternative keywords or broader terms.'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 px-1 pb-1">
                {lang === 'ar'
                  ? `تم العثور على ${filteredResults.length} نتيجة مطابقة:`
                  : `Found ${filteredResults.length} matching items:`}
              </div>

              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onNavigate(
                      item.curriculumType,
                      item.branch,
                      item.lesson,
                      item.targetTab
                    );
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer group flex flex-col gap-2 ${
                    isLight
                      ? 'bg-slate-50 hover:bg-indigo-50/60 border-slate-200 hover:border-indigo-300'
                      : 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          item.curriculumType === 'egbac'
                            ? 'bg-purple-950 text-purple-300 border border-purple-800'
                            : 'bg-blue-950 text-blue-300 border border-blue-800'
                        }`}
                      >
                        {item.curriculumType === 'egbac' ? 'EG-Bac STEM' : 'Thanaweya'}
                      </span>
                      <span className="font-bold text-slate-400">
                        {lang === 'ar' ? item.branch.titleAr : item.branch.titleEn}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 truncate max-w-[200px]">
                        {lang === 'ar' ? item.chapterTitleAr : item.chapterTitleEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.difficulty && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800">
                          {item.difficulty.toUpperCase()}
                        </span>
                      )}
                      <span className="text-[10px] font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-slate-800">
                        {item.type === 'databank'
                          ? lang === 'ar' ? 'بنك الأسئلة' : 'Databank'
                          : item.type === 'solved_example'
                          ? lang === 'ar' ? 'مثال محلول' : 'Solved'
                          : item.type === 'exercise'
                          ? lang === 'ar' ? 'تمرين كتاب' : 'Exercise'
                          : lang === 'ar' ? 'درس' : 'Lesson'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Snippet */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </h4>
                    <div className="text-xs text-slate-300 line-clamp-2">
                      <MathRenderer
                        math={lang === 'ar' ? item.snippetAr : item.snippetEn}
                        lang={lang}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className={`p-3 border-t text-[11px] flex items-center justify-between text-slate-400 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              {lang === 'ar'
                ? 'فهرس فوري لـ ٢٧ فصلاً و ٤,٧٢٥ مسألة'
                : 'Live index of 27 chapters & 4,725 problems'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              {lang === 'ar' ? 'اضغط ESC للإغلاق' : 'Press ESC to close'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
