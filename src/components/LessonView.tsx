import React, { useState } from 'react';
import type { Lesson, Branch, SolvedProblem, Curriculum } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import { Interactive3DGeometry } from './Interactive3DGeometry';
import { InteractivePascalTriangle } from './InteractivePascalTriangle';
import { InteractiveCalculusTangent } from './InteractiveCalculusTangent';
import { InteractiveStaticsFriction } from './InteractiveStaticsFriction';
import { InteractiveComplexArgand } from './InteractiveComplexArgand';
import { InteractiveNormalDistribution } from './InteractiveNormalDistribution';
import { InteractiveDynamicsMotion } from './InteractiveDynamicsMotion';
import { TextbookDiagram } from './TextbookDiagram';
import { Printer, ChevronDown, ChevronUp, Lightbulb, Clock, CheckCircle, Target, BookOpen, Layers, Award, Star, Check, RotateCcw, XCircle, CheckCircle2 } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  role: UserRole;
  lesson: Lesson;
  branch: Branch;
  curriculum?: Curriculum;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
  onSelectLesson?: (branch: Branch, lesson: Lesson, tab?: string) => void;
}

export const LessonView: React.FC<Props> = ({
  lang,
  theme = 'dark',
  role,
  lesson,
  branch,
  curriculum,
  activeSubTab,
  onSubTabChange,
  onSelectLesson,
}) => {
  const isLight = theme === 'light';
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [databankDifficulty, setDatabankDifficulty] = useState<'easy' | 'medium' | 'hots'>('easy');
  const [filterBookmarkedOnly, setFilterBookmarkedOnly] = useState<boolean>(false);

  // Student Interactive Practice & Bookmarking State (saved in localStorage)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('egbac_user_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedProblems, setBookmarkedProblems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('egbac_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleSelectOption = (probId: string, optIdx: number) => {
    setUserAnswers((prev) => {
      const updated = { ...prev, [probId]: optIdx };
      try {
        localStorage.setItem('egbac_user_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearAnswer = (probId: string) => {
    setUserAnswers((prev) => {
      const updated = { ...prev };
      delete updated[probId];
      try {
        localStorage.setItem('egbac_user_answers', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleToggleBookmark = (probId: string) => {
    setBookmarkedProblems((prev) => {
      const updated = { ...prev, [probId]: !prev[probId] };
      try {
        localStorage.setItem('egbac_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Chapter-level data bindings
  const currentChapter = branch.chapters.find((c) => c.lessons.some((l) => l.id === lesson.id)) || branch.chapters[0];
  const chapterSolvedExamples: SolvedProblem[] = currentChapter?.solvedExamples || [];
  const chapterExerciseProblems: SolvedProblem[] = currentChapter?.exerciseProblems || [];
  const chapterDatabank = currentChapter?.databank;

  const toggleHint = (problemId: string) => {
    setOpenHints((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const toggleSolution = (problemId: string) => {
    setOpenSolutions((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const t = translations[lang];

  const renderInteractiveWidget = () => {
    switch (lesson.interactiveWidget.type) {
      case '3d_vectors':
        return <Interactive3DGeometry lang={lang} theme={theme} />;
      case 'pascal_binomial':
        return <InteractivePascalTriangle lang={lang} theme={theme} />;
      case 'calculus_tangent':
        return <InteractiveCalculusTangent lang={lang} theme={theme} />;
      case 'statics_friction':
        return <InteractiveStaticsFriction lang={lang} theme={theme} />;
      case 'complex_argand':
        return <InteractiveComplexArgand lang={lang} theme={theme} />;
      case 'normal_distribution':
        return <InteractiveNormalDistribution lang={lang} theme={theme} />;
      case 'dynamics_motion':
        return <InteractiveDynamicsMotion lang={lang} theme={theme} />;
      default:
        return <Interactive3DGeometry lang={lang} theme={theme} />;
    }
  };

  const renderProblemCard = (prob: SolvedProblem, idx: number, badgeText?: string) => {
    const isHintOpen = !!openHints[prob.id];
    const isSolOpen = !!openSolutions[prob.id];
    const options = (lang === 'ar' ? prob.optionsAr : prob.optionsEn) || [];
    const userChosen = userAnswers[prob.id];
    const isAnswered = userChosen !== undefined;
    const isBookmarked = !!bookmarkedProblems[prob.id];

    return (
      <div
        key={prob.id}
        className={`rounded-xl p-4 sm:p-5 space-y-4 shadow-sm border printable-problem print-avoid-break transition-all ${
          isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800 shadow-sm">
              {badgeText || (lang === 'ar' ? `مسألة رقم (${toHindiDigits(idx + 1)})` : `Problem (${idx + 1})`)}
            </span>
            <button
              type="button"
              onClick={() => handleToggleBookmark(prob.id)}
              className={`p-1.5 rounded-lg border transition-all no-print cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                  : isLight
                  ? 'border-slate-200 text-slate-400 hover:text-amber-500 hover:border-amber-400'
                  : 'border-slate-800 text-slate-500 hover:text-amber-400 hover:border-amber-500'
              }`}
              title={lang === 'ar' ? 'حفظ المسألة للمراجعة' : 'Bookmark for review'}
            >
              <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>
          </div>

          <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 shadow-sm">
            {prob.difficulty === 'exam_standard'
              ? lang === 'ar' ? 'نموذج وزاري معتمد' : 'EXAM STANDARD'
              : prob.difficulty === 'hots'
              ? lang === 'ar' ? 'مهارات تفكير عليا' : 'HOTS'
              : prob.difficulty === 'easy'
              ? lang === 'ar' ? 'سهل تأسيسي' : 'EASY'
              : lang === 'ar' ? 'متوسط' : 'MEDIUM'}
          </span>
        </div>

        <div className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
          <MathRenderer math={lang === 'ar' ? prob.questionAr : prob.questionEn} lang={lang} />
        </div>

        {prob.diagramType && (
          <TextbookDiagram type={prob.diagramType} lang={lang} />
        )}

        {options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 print-options-grid print-avoid-break">
            {options.map((opt, optIdx) => {
              const isSelected = userChosen === optIdx;
              const isCorrect = optIdx === prob.correctIndex;
              const isSelectedCorrect = isSelected && isCorrect;
              const isSelectedWrong = isSelected && !isCorrect;
              const shouldReveal = isSolOpen && isCorrect;

              let cardStyle = isLight
                ? 'border-slate-200 bg-white text-slate-800 shadow-xs hover:border-indigo-400 hover:bg-slate-50'
                : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-900';

              if (isSelectedCorrect) {
                cardStyle = isLight
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-bold'
                  : 'bg-emerald-950/80 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40 font-bold';
              } else if (isSelectedWrong) {
                cardStyle = isLight
                  ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-500/20 font-bold'
                  : 'bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500/30 font-bold';
              } else if (shouldReveal) {
                cardStyle = isLight
                  ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400 font-bold'
                  : 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500 font-bold';
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(prob.id, optIdx)}
                  className={`border p-3 rounded-xl flex items-center justify-between gap-2 text-xs transition-all text-left rtl:text-right cursor-pointer group hover:scale-[1.01] active:scale-[0.99] ${cardStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-black px-2 py-0.5 rounded-md text-[11px] shrink-0 ${
                        isSelectedCorrect || shouldReveal
                          ? 'bg-emerald-600 text-white'
                          : isSelectedWrong
                          ? 'bg-rose-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      }`}
                    >
                      {lang === 'ar' ? `(${['أ', 'ب', 'ج', 'د'][optIdx]})` : `(${String.fromCharCode(65 + optIdx)})`}
                    </span>
                    <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                      <MathRenderer math={opt} lang={lang} />
                    </span>
                  </div>
                  {isSelectedCorrect && (
                    <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shrink-0 flex items-center gap-0.5">
                      <Check className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'صحيح' : 'Correct'}</span>
                    </span>
                  )}
                  {isSelectedWrong && (
                    <span className="text-[10px] font-extrabold text-rose-600 dark:text-rose-400 shrink-0 flex items-center gap-0.5">
                      <XCircle className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'غير صحيح' : 'Incorrect'}</span>
                    </span>
                  )}
                  {!isSelected && shouldReveal && (
                    <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shrink-0">
                      {lang === 'ar' ? '✓ إجابة صحيحة' : '✓ Correct'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
          <button
            onClick={() => toggleHint(prob.id)}
            className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center justify-center gap-1.5 bg-amber-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-amber-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{isHintOpen ? t.hideHint : t.showHint}</span>
          </button>

          <button
            onClick={() => toggleSolution(prob.id)}
            className="text-xs font-bold text-indigo-800 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-indigo-300 flex items-center justify-center gap-1.5 bg-indigo-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-indigo-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
          >
            {isSolOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{isSolOpen ? t.hideSolution : t.showSolution}</span>
          </button>

          {isAnswered && (
            <button
              onClick={() => handleClearAnswer(prob.id)}
              className="text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial no-print"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'إلغاء الإجابة' : 'Reset'}</span>
            </button>
          )}
        </div>

        {isHintOpen && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 p-3 rounded-lg text-xs text-amber-950 dark:text-amber-200 print-avoid-break">
            💡 <strong>{t.showHint}:</strong> {lang === 'ar' ? toHindiDigits(prob.hintAr) : prob.hintEn}
          </div>
        )}

        {isSolOpen && (
          <div className={`p-4 rounded-xl space-y-3 text-xs border step-by-step-box print-avoid-break ${
            isLight
              ? 'bg-white border-slate-200 text-slate-800 shadow-xs'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider">{t.stepByStepSolution}</span>
            <ol className={`space-y-2 list-decimal list-inside ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              {(lang === 'ar' ? prob.stepByStepSolutionAr : prob.stepByStepSolutionEn).map((step, sIdx) => (
                <li key={sIdx} className="leading-relaxed">
                  <MathRenderer math={step} lang={lang} />
                </li>
              ))}
            </ol>

            {prob.teacherTipEn && (
              <div className={`mt-3 pt-3 border-t text-[11px] ${
                isLight ? 'border-slate-200 text-amber-900' : 'border-slate-800 text-amber-300'
              }`}>
                🎓 <strong>{t.teacherTips}:</strong> {lang === 'ar' ? toHindiDigits(prob.teacherTipAr) : prob.teacherTipEn}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 🧭 CHAPTER & BRANCH QUICK-SWITCHER */}
      {curriculum && onSelectLesson && (
        <div className={`p-3 sm:p-4 rounded-2xl border space-y-3 no-print shadow-sm transition-all ${
          isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          {/* Branch Selector Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 shrink-0">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === 'ar' ? 'فروع المنهج الدراسي:' : 'Curriculum Branches:'}
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {curriculum.branches.map((b) => {
                const isSelectedBranch = b.id === branch.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      if (!isSelectedBranch) {
                        onSelectLesson(b, b.chapters[0].lessons[0], activeSubTab);
                      }
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                      isSelectedBranch
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : isLight
                        ? 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {lang === 'ar' ? b.titleAr : b.titleEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Pills Carousel */}
          <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {branch.chapters.map((ch) => {
                const isCurrentChapter = ch.lessons.some((l) => l.id === lesson.id);
                return (
                  <button
                    key={ch.id}
                    onClick={() => onSelectLesson(branch, ch.lessons[0], activeSubTab)}
                    className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                      isCurrentChapter
                        ? isLight
                          ? 'bg-indigo-100 border-2 border-indigo-600 text-indigo-950 shadow-sm'
                          : 'bg-indigo-950/80 border-2 border-indigo-500 text-indigo-200 shadow-md'
                        : isLight
                        ? 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                      isCurrentChapter
                        ? 'bg-indigo-600 text-white'
                        : isLight
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {lang === 'ar' ? `فصل ${toHindiDigits(ch.chapterNumber)}` : `Ch ${ch.chapterNumber}`}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[280px]">
                      <MathRenderer math={lang === 'ar' ? ch.titleAr : ch.titleEn} lang={lang} />
                    </span>
                    {ch.databank && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold border border-emerald-500/30">
                        175 Q
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lessons Pill Carousel if Chapter has > 1 Lesson */}
          {currentChapter.lessons.length > 1 && (
            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              <span className="text-[11px] font-bold text-slate-400 shrink-0">
                {lang === 'ar' ? 'الدروس:' : 'Lessons:'}
              </span>
              {currentChapter.lessons.map((l, lIdx) => {
                const isSelectedLesson = l.id === lesson.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => onSelectLesson(branch, l, activeSubTab)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelectedLesson
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isLight
                        ? 'bg-slate-100 text-slate-600 hover:text-slate-900'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {lang === 'ar' ? `درس ${toHindiDigits(lIdx + 1)}: ` : `Lesson ${lIdx + 1}: `}
                    <MathRenderer math={lang === 'ar' ? l.titleAr : l.titleEn} lang={lang} />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Lesson Header Banner */}
      <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border print-lesson-header print-avoid-break ${
        isLight
          ? 'bg-white border-slate-200 shadow-md text-slate-900'
          : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <img
                src={clipsatLogo}
                alt="ClipSAT Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 shadow-sm">
                {lang === 'ar' ? branch.titleAr : branch.titleEn}
              </span>
              <span className={`text-xs font-bold flex items-center gap-1 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Award className="w-4 h-4" />
                {lesson.moeRef.officialCode}
              </span>
            </div>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.titleAr : lesson.titleEn} lang={lang} />
            </h2>
          </div>

          {/* Textbook MoE reference card */}
          <div className={`p-3 sm:p-3.5 rounded-xl border text-xs space-y-1 shadow-sm w-full sm:w-auto ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <span className={`font-bold block ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{t.officialMoeRef}</span>
            <p className={`font-extrabold text-sm ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{lang === 'ar' ? lesson.moeRef.bookTitleAr : lesson.moeRef.bookTitleEn}</p>
            <p className={`text-xs font-mono font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
              {lang === 'ar' ? toHindiDigits(lesson.moeRef.pageRange) : lesson.moeRef.pageRange}
            </p>
          </div>
        </div>

        <div className={`text-sm sm:text-base font-medium leading-relaxed ${
          isLight ? 'text-slate-700' : 'text-slate-200'
        }`}>
          <MathRenderer math={lang === 'ar' ? lesson.summaryAr : lesson.summaryEn} lang={lang} />
        </div>

        {/* Sub-tab navigation with smooth horizontal touch scroll on mobile */}
        <div className={`flex items-center gap-2 pt-2 border-t no-print overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 ${
          isLight ? 'border-slate-200' : 'border-slate-800/80'
        }`}>
          <button
            onClick={() => onSubTabChange('theory')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            📖 {t.theoryTab}
          </button>

          <button
            onClick={() => onSubTabChange('solvedExamples')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeSubTab === 'solvedExamples'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            💡 {t.solvedExamplesTab}
            {chapterSolvedExamples.length > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold">
                {chapterSolvedExamples.length}
              </span>
            )}
          </button>

          <button
            onClick={() => onSubTabChange('exerciseProblems')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              activeSubTab === 'exerciseProblems'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            📚 {t.exerciseProblemsTab}
            {chapterExerciseProblems.length > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold">
                {chapterExerciseProblems.length}
              </span>
            )}
          </button>

          {chapterDatabank && (
            <button
              onClick={() => onSubTabChange('databank')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                activeSubTab === 'databank'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              🗄️ {t.databankTab}
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold">
                {chapterDatabank.easy.length + chapterDatabank.medium.length + chapterDatabank.hots.length}
              </span>
            </button>
          )}

          <button
            onClick={() => onSubTabChange('worksheet')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            ✏️ {t.worksheetTab}
          </button>

          <button
            onClick={() => onSubTabChange('interactive')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'interactive'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            🎮 {t.interactiveTab}
          </button>

          <button
            onClick={() => onSubTabChange('lessonPlan')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'lessonPlan'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            📋 {t.lessonPlanTab} {role === 'teacher' && <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.5 rounded font-extrabold ml-1">Teacher</span>}
          </button>
        </div>
      </div>

      {/* 📖 TAB 1: THEORY & FORMULAS */}
      {activeSubTab === 'theory' && (
        <div className="space-y-6">
          {/* Theory Prose with LaTeX rendering */}
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <h3 className={`text-lg font-bold flex items-center gap-2 border-b pb-3 ${
              isLight ? 'text-indigo-800 border-slate-200' : 'text-indigo-400 border-slate-800'
            }`}>
              <BookOpen className="w-5 h-5" />
              <span>{lang === 'ar' ? 'الشرح والنظريات الأساسية' : 'Theoretical Foundations & Proofs'}</span>
            </h3>

            <div className={`prose max-w-none text-sm sm:text-base leading-relaxed space-y-4 ${
              isLight ? 'prose-slate text-slate-800' : 'prose-invert text-slate-200'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.theoryContentAr : lesson.theoryContentEn} lang={lang} />
            </div>
          </div>

          {/* Essential Formulas Sheet */}
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${
                isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400 font-bold'
              }`}>
                <Layers className="w-5 h-5" />
                <span>{lang === 'ar' ? 'دستور القوانين والملاحظات الهامة' : 'Essential Formula Sheet'}</span>
              </h3>
              <span className={`text-xs font-semibold ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {lang === 'ar' ? `${toHindiDigits(lesson.formulas.length)} قوانين أساسية` : `${lesson.formulas.length} Core Formulas`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {lesson.formulas.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className={`p-3 rounded-xl border transition-all hover:border-indigo-500/50 flex flex-col justify-between ${
                    isLight
                      ? 'bg-slate-50 border-slate-200/90 shadow-xs hover:bg-slate-100/60'
                      : 'bg-slate-950 border-slate-800 shadow-xs'
                  }`}
                >
                  <div className={`flex items-center justify-between text-xs font-bold pb-2 border-b ${
                    isLight ? 'text-slate-800 border-slate-200' : 'text-slate-300 border-slate-800/80'
                  }`}>
                    <span className="truncate pr-1">{lang === 'ar' ? f.labelAr : f.labelEn}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${
                      isLight ? 'text-indigo-800 bg-indigo-50 border border-indigo-200' : 'text-indigo-400 bg-indigo-950/60 border border-indigo-800'
                    }`}>
                      #{lang === 'ar' ? toHindiDigits(fIdx + 1) : fIdx + 1}
                    </span>
                  </div>
                  <div className="py-2 overflow-x-auto flex items-center justify-center min-h-[46px] formula-card-math">
                    <MathRenderer
                      math={f.latex}
                      block
                      lang={lang}
                      className="no-box bg-transparent border-0 shadow-none !my-0 !py-0 !px-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 💡 TAB: OFFICIAL SOLVED EXAMPLES */}
      {activeSubTab === 'solvedExamples' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'أمثلة كتاب الوزارة المحلولة خطوة بخطوة' : 'Official Ministry Solved Examples'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? `أمثلة نموذجية معتمدة من كتاب الوزارة لـ (${currentChapter.titleAr}) مع خطوات الحل والتفسير الرياضي الكامل.`
                  : `Official model solved examples from the Ministry textbook for (${currentChapter.titleEn}) with complete step-by-step reasoning.`}
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {chapterSolvedExamples.length > 0 ? (
              chapterSolvedExamples.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar' ? `مثال كتاب الوزارة المحلول (${toHindiDigits(idx + 1)})` : `MoE Solved Example (${idx + 1})`
                )
              )
            ) : (
              <div className="p-8 text-center text-slate-400">
                {lang === 'ar' ? 'جاري تجهيز أمثلة هذا الفصل...' : 'Solved examples for this chapter are being compiled...'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 📚 TAB: OFFICIAL TEXTBOOK EXERCISES */}
      {activeSubTab === 'exerciseProblems' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'تمارين ومسائل كتاب الوزارة الرسمية' : 'Official Ministry Textbook Unit Exercises'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? `تمارين نهاية الوحدة الرسمية المعتمدة من كتاب الوزارة لـ (${currentChapter.titleAr}) مع نماذج الإجابة والحلول الخطية.`
                  : `Official unit exercise problems from the Ministry textbook for (${currentChapter.titleEn}) with model answer keys and step-by-step solutions.`}
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {chapterExerciseProblems.length > 0 ? (
              chapterExerciseProblems.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar' ? `تمرين كتاب الوزارة (${toHindiDigits(idx + 1)})` : `Textbook Exercise (${idx + 1})`
                )
              )
            ) : (
              <div className="p-8 text-center text-slate-400">
                {lang === 'ar' ? 'جاري تجهيز تمارين هذا الفصل...' : 'Textbook exercises for this chapter are being compiled...'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🗄️ TAB: CHAPTER QUESTION DATABANK (50 Easy, 50 Medium, 50 HOTS) */}
      {activeSubTab === 'databank' && chapterDatabank && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🗄️</span>
                <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {lang === 'ar' ? 'بنك أسئلة الفصل المعتمد (150 سؤالاً مصنفاً)' : 'Official Chapter Question Databank (150 Classified Questions)'}
                </h3>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar'
                  ? 'بنك أسئلة متكامل يضم 50 سؤالاً سهلاً، 50 سؤالاً متوسطاً، و 50 سؤالاً لمهارات التفكير العليا، مع خيارات مدروسة وحلول نموذجية كاملة.'
                  : 'Comprehensive chapter question bank featuring exactly 50 Easy, 50 Medium, and 50 HOTS questions with authentic distractors and model answers.'}
              </p>
            </div>

            {/* Difficulty sub-filter buttons */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 no-print flex-wrap">
              <button
                onClick={() => setDatabankDifficulty('easy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  databankDifficulty === 'easy'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ar' ? 'سهل تأسيسي (٥٠)' : 'Easy (50)'}
              </button>
              <button
                onClick={() => setDatabankDifficulty('medium')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  databankDifficulty === 'medium'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ar' ? 'متوسط وزاري (٥٠)' : 'Medium (50)'}
              </button>
              <button
                onClick={() => setDatabankDifficulty('hots')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  databankDifficulty === 'hots'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ar' ? 'تفكير عليا (٥٠)' : 'HOTS (50)'}
              </button>

              <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

              <button
                onClick={() => setFilterBookmarkedOnly((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  filterBookmarkedOnly
                    ? 'bg-amber-500 text-black shadow-md ring-2 ring-amber-400/50'
                    : 'text-slate-400 hover:text-amber-400'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${filterBookmarkedOnly ? 'fill-black' : ''}`} />
                <span>{lang === 'ar' ? 'المميزة بنجمة' : 'Starred'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Chapter Mastery Stats Bar */}
          {(() => {
            const currentQuestions =
              databankDifficulty === 'easy'
                ? chapterDatabank.easy
                : databankDifficulty === 'medium'
                ? chapterDatabank.medium
                : chapterDatabank.hots;
            const attempted = currentQuestions.filter((q) => userAnswers[q.id] !== undefined).length;
            const correct = currentQuestions.filter((q) => userAnswers[q.id] === q.correctIndex).length;
            const bookmarked = currentQuestions.filter((q) => bookmarkedProblems[q.id]).length;
            const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

            return (
              <div className={`p-3.5 rounded-xl border flex flex-wrap items-center justify-between gap-3 text-xs no-print ${
                isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-950/70 border-slate-800'
              }`}>
                <div className="flex items-center gap-4 flex-wrap font-bold">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{lang === 'ar' ? `المحاولات: ${toHindiDigits(attempted)} / ${toHindiDigits(currentQuestions.length)}` : `Attempted: ${attempted} / ${currentQuestions.length}`}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>{lang === 'ar' ? `الصحيح: ${toHindiDigits(correct)} (${toHindiDigits(accuracy)}٪)` : `Correct: ${correct} (${accuracy}%)`}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Star className="w-4 h-4" />
                    <span>{lang === 'ar' ? `المحفوظة للمراجعة: ${toHindiDigits(bookmarked)}` : `Bookmarked: ${bookmarked}`}</span>
                  </span>
                </div>

                {attempted > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-28 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${(attempted / currentQuestions.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {Math.round((attempted / currentQuestions.length) * 100)}%
                    </span>
                  </div>
                )}
              </div>
            );
          })()}

          <div className="space-y-6">
            {(() => {
              const currentQuestions =
                databankDifficulty === 'easy'
                  ? chapterDatabank.easy
                  : databankDifficulty === 'medium'
                  ? chapterDatabank.medium
                  : chapterDatabank.hots;

              const filtered = filterBookmarkedOnly
                ? currentQuestions.filter((q) => bookmarkedProblems[q.id])
                : currentQuestions;

              if (filtered.length === 0) {
                return (
                  <div className="p-12 text-center text-slate-400 space-y-2 border border-dashed rounded-xl">
                    <Star className="w-8 h-8 mx-auto text-amber-500/50" />
                    <p className="text-sm font-semibold">
                      {lang === 'ar'
                        ? 'لا توجد أسئلة مميزة بنجمة في هذا القسم حالياً.'
                        : 'No bookmarked questions in this difficulty section.'}
                    </p>
                    <p className="text-xs text-slate-500">
                      {lang === 'ar'
                        ? 'اضغط على أيقونة النجمة بجانب أي سؤال لحفظه ومراجعته لاحقاً.'
                        : 'Click the star icon on any problem card to save it for revision.'}
                    </p>
                  </div>
                );
              }

              return filtered.map((prob, idx) =>
                renderProblemCard(
                  prob,
                  idx,
                  lang === 'ar'
                    ? `${databankDifficulty === 'easy' ? 'سؤال سهل' : databankDifficulty === 'medium' ? 'سؤال متوسط' : 'سؤال مهارات عليا'} (${toHindiDigits(idx + 1)})`
                    : `${databankDifficulty === 'easy' ? 'Easy' : databankDifficulty === 'medium' ? 'Medium' : 'HOTS'} Q(${idx + 1})`
                )
              );
            })()}
          </div>
        </div>
      )}

      {/* 📋 TAB 2: TEACHER LESSON PLAN */}
      {activeSubTab === 'lessonPlan' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-lesson-plan-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Target className="w-6 h-6" />
                <span>{lang === 'ar' ? lesson.lessonPlan.titleAr : lesson.lessonPlan.titleEn}</span>
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {t.moeCode}: {lesson.lessonPlan.moeCode} | {t.estimatedTime}: {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.durationMinutes) : lesson.lessonPlan.durationMinutes} mins
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadPdf}</span>
            </button>
          </div>

          {/* Bloom's Taxonomy Objectives */}
          <div className="space-y-3 print-avoid-break">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
            }`}>{t.bloomsTaxonomy}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {(lang === 'ar' ? lesson.lessonPlan.bloomsObjectivesAr : lesson.lessonPlan.bloomsObjectivesEn).map((obj, oIdx) => (
                <li
                  key={oIdx}
                  className={`p-3.5 rounded-xl border flex items-start gap-2 print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-slate-950 border-slate-800 text-slate-200'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                  <span>{lang === 'ar' ? toHindiDigits(obj) : obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Pacing Flow */}
          <div className="space-y-3 print-avoid-break">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-amber-900 font-bold' : 'text-amber-300'
            }`}>{lang === 'ar' ? 'خطوات السير في الدرس والتوقيت الزمني' : 'Instructional Pacing & Flow'}</h4>
            <div className="space-y-3">
              {lesson.lessonPlan.teachingPacing.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-4 rounded-xl border space-y-1 text-xs pacing-item print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isLight ? 'text-indigo-800' : 'text-indigo-400'}`}>{lang === 'ar' ? p.phaseAr : p.phaseEn}</span>
                    <span className={`font-mono text-[11px] flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-500'}`}>
                      <Clock className="w-3 h-3" />
                      {lang === 'ar' ? toHindiDigits(p.duration) : p.duration}
                    </span>
                  </div>
                  <p className={`pt-1 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{lang === 'ar' ? toHindiDigits(p.activitiesAr) : p.activitiesEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Misconceptions & Differentiation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-avoid-break">
            <div className={`p-4 rounded-xl border space-y-3 text-xs misconception-card print-avoid-break ${
              isLight
                ? 'bg-amber-50/70 border-amber-300 text-amber-950'
                : 'bg-slate-950 border-amber-500/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-amber-900' : 'text-amber-300'
              }`}>
                <Lightbulb className={`w-4 h-4 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                <span>{t.misconceptions}</span>
              </h4>
              <ul className={`space-y-2 list-disc list-inside ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {(lang === 'ar' ? lesson.lessonPlan.commonMisconceptionsAr : lesson.lessonPlan.commonMisconceptionsEn).map((m, mIdx) => (
                  <li key={mIdx}>{lang === 'ar' ? toHindiDigits(m) : m}</li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-xl border space-y-3 text-xs print-avoid-break ${
              isLight
                ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                : 'bg-slate-950 border-indigo-900/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-indigo-900' : 'text-indigo-300'}`}>{t.differentiation}</h4>
              <div className={`space-y-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                <p>
                  <strong className={isLight ? 'text-amber-800' : 'text-amber-400'}>{lang === 'ar' ? 'للطلاب المحتاجين لدعم:' : 'Struggling Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.struggling) : lesson.lessonPlan.differentiationEn.struggling}
                </p>
                <p>
                  <strong className={isLight ? 'text-emerald-800' : 'text-emerald-400'}>{lang === 'ar' ? 'للطلاب المتميزين:' : 'Advanced Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.advanced) : lesson.lessonPlan.differentiationEn.advanced}
                </p>
              </div>
            </div>
          </div>

          {/* Exit Ticket */}
          <div className={`p-4 sm:p-5 rounded-xl border space-y-3 text-xs exit-ticket-card print-avoid-break ${
            isLight
              ? 'bg-amber-50/60 border-amber-200'
              : 'bg-slate-950 border-amber-500/30'
          }`}>
            <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>{t.exitTicket}</h4>
            <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.questionAr : lesson.lessonPlan.exitTicketQuestion.questionEn} lang={lang} />
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white border border-slate-200 text-slate-800' : 'bg-slate-900 text-slate-300'}`}>
              <strong className={`block mb-1 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{t.stepByStepSolution}:</strong>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.solutionAr : lesson.lessonPlan.exitTicketQuestion.solutionEn} lang={lang} />
            </div>
          </div>
        </div>
      )}

      {/* ✏️ TAB 3: SOLVED WORKSHEETS */}
      {activeSubTab === 'worksheet' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                <MathRenderer math={lang === 'ar' ? lesson.worksheet.titleAr : lesson.worksheet.titleEn} lang={lang} />
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{lang === 'ar' ? toHindiDigits(lesson.worksheet.descriptionAr) : lesson.worksheet.descriptionEn}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {lesson.worksheet.problems.map((prob, idx) => renderProblemCard(prob, idx))}
          </div>
        </div>
      )}

      {/* 🎮 TAB 4: 3D & INTERACTIVE LAB */}
      {activeSubTab === 'interactive' && (
        <div className="space-y-6">
          <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl border ${
            isLight
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {lang === 'ar' ? lesson.interactiveWidget.titleAr : lesson.interactiveWidget.titleEn}
            </h3>
            <p className={`text-xs mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {lang === 'ar' ? lesson.interactiveWidget.descriptionAr : lesson.interactiveWidget.descriptionEn}
            </p>

            {renderInteractiveWidget()}
          </div>
        </div>
      )}
    </div>
  );
};
