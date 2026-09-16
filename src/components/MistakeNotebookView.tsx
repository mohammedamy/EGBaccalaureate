import React, { useState, useMemo } from 'react';
import type { Language } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { TextbookDiagram } from './TextbookDiagram';
import { toHindiDigits } from '../utils/arabicNumerals';
import type {
  MistakeRecord,
  GeneratedQuestion,
} from '../services/mistakeNotebookService';
import {
  getMistakeStats,
  markMistakeMastered,
  removeMistakeRecord,
  clearMasteredMistakes,
  clearAllMistakes,
} from '../services/mistakeNotebookService';
import {
  BookMarked,
  Brain,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Play,
  Printer,
  RotateCcw,
  Filter,
  Check,
  ChevronDown,
  ChevronUp,
  X,
} from 'lucide-react';

interface Props {
  lang: Language;
  records: MistakeRecord[];
  onRefreshRecords: () => void;
  onStartRemediation: (questions: GeneratedQuestion[], mode: 'online' | 'printable') => void;
}

export const MistakeNotebookView: React.FC<Props> = ({
  lang,
  records,
  onRefreshRecords,
  onStartRemediation,
}) => {
  const isAr = lang === 'ar';

  // Filters
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'mastered'>('active');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Accordion state for expanded model solutions per question id
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  // Question count limit for launching remediation quiz
  const [remediationCount, setRemediationCount] = useState<number>(10);

  // Compute stats
  const stats = useMemo(() => getMistakeStats(records), [records]);

  // Unique subjects/branches from records
  const subjectsList = useMemo(() => {
    const set = new Set<string>();
    records.forEach((r) => {
      const name = isAr ? (r.question.branchTitleAr || r.question.branchTitleEn) : (r.question.branchTitleEn || r.question.branchTitleAr);
      if (name) set.add(name);
    });
    return Array.from(set);
  }, [records, isAr]);

  // Filtered records
  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      // Status filter
      if (statusFilter === 'active' && r.mastered) return false;
      if (statusFilter === 'mastered' && !r.mastered) return false;

      // Subject filter
      if (selectedSubject !== 'all') {
        const branchName = isAr
          ? (r.question.branchTitleAr || r.question.branchTitleEn)
          : (r.question.branchTitleEn || r.question.branchTitleAr);
        if (branchName !== selectedSubject) return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all') {
        if (r.question.difficulty !== selectedDifficulty) return false;
      }

      // Text search
      if (searchQuery.trim()) {
        const qText = (r.question.questionAr + ' ' + r.question.questionEn).toLowerCase();
        if (!qText.includes(searchQuery.toLowerCase().trim())) return false;
      }

      return true;
    });
  }, [records, statusFilter, selectedSubject, selectedDifficulty, searchQuery, isAr]);

  // Toggle solution expansion
  const toggleSolution = (id: string) => {
    setExpandedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle mastered status
  const handleToggleMastered = (id: string, currentStatus: boolean) => {
    markMistakeMastered(id, !currentStatus);
    onRefreshRecords();
  };

  // Remove single record
  const handleRemoveRecord = (id: string) => {
    removeMistakeRecord(id);
    onRefreshRecords();
  };

  // Clear mastered
  const handleClearMastered = () => {
    const cleared = clearMasteredMistakes();
    if (cleared > 0) {
      onRefreshRecords();
    }
  };

  // Clear all
  const handleClearAll = () => {
    if (
      window.confirm(
        isAr
          ? 'هل أنت متأكد من رغبتك في مسح كافة الأخطاء المسجلة بالكشكول؟'
          : 'Are you sure you want to clear all logged mistakes from your notebook?'
      )
    ) {
      clearAllMistakes();
      onRefreshRecords();
    }
  };

  // Launch remediation test
  const handleLaunchRemediation = (mode: 'online' | 'printable') => {
    const eligibleQuestions = filteredRecords.map((r) => r.question);
    if (eligibleQuestions.length === 0) return;

    // Take up to remediationCount (or all if remediationCount is higher)
    const questionsToTest =
      remediationCount >= eligibleQuestions.length
        ? eligibleQuestions
        : eligibleQuestions.slice(0, remediationCount);

    onStartRemediation(questionsToTest, mode);
  };

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero Header & Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950/70 via-slate-900 to-indigo-950/80 p-6 sm:p-8 border-2 border-rose-800/40 shadow-xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{isAr ? 'كشكول الأخطاء وسجل تصحيح المفاهيم' : 'Mistake Notebook & Error Remediation'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
              {isAr ? 'حوّل نقاط الضعف إلى ركائز للتفوق 🎯' : 'Transform Misconceptions into Mastery 🎯'}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'يتم توثيق أي سؤال تخطئ في إجابته أثناء الاختبارات الإلكترونية أو محاكاة البابل شيت تلقائياً هنا. راجع خطوات الحل النموذجي، ثم ابدأ اختباراً علاجياً مخصصاً لتثبيت المفهوم حتى الإتقان الكامل.'
                : 'Every question missed during online timed quizzes or bubble sheet simulations is automatically captured here. Review step-by-step model solutions, then launch targeted remediation tests until 100% mastery.'}
            </p>
          </div>

          {/* Quick Stats Pill Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">
                {isAr ? 'إجمالي الأخطاء' : 'Total Misses'}
              </span>
              <span className="text-2xl font-black text-slate-100">
                {isAr ? toHindiDigits(stats.total) : stats.total}
              </span>
            </div>

            <div className="bg-rose-950/40 border border-rose-800/50 rounded-2xl p-3 text-center">
              <span className="text-[11px] font-bold text-rose-300 block mb-1">
                {isAr ? 'قيد المراجعة' : 'Active'}
              </span>
              <span className="text-2xl font-black text-rose-400">
                {isAr ? toHindiDigits(stats.active) : stats.active}
              </span>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-3 text-center">
              <span className="text-[11px] font-bold text-emerald-300 block mb-1">
                {isAr ? 'تم التدارك' : 'Mastered'}
              </span>
              <span className="text-2xl font-black text-emerald-400">
                {isAr ? toHindiDigits(stats.mastered) : stats.mastered}
              </span>
            </div>

            <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-3 text-center">
              <span className="text-[11px] font-bold text-indigo-300 block mb-1">
                {isAr ? 'نسبة التعافي' : 'Mastery Rate'}
              </span>
              <span className="text-2xl font-black text-indigo-400">
                {isAr ? `${toHindiDigits(stats.masteryRate)}%` : `${stats.masteryRate}%`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Control & Remediation Toolbar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setStatusFilter('active')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                statusFilter === 'active'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{isAr ? 'قيد المراجعة والتدريب' : 'Active (Unresolved)'}</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-black/30">
                {isAr ? toHindiDigits(stats.active) : stats.active}
              </span>
            </button>

            <button
              onClick={() => setStatusFilter('mastered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                statusFilter === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'تم الاستيعاب والتثبيت' : 'Mastered'}</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-black/30">
                {isAr ? toHindiDigits(stats.mastered) : stats.mastered}
              </span>
            </button>

            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                statusFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{isAr ? 'كافة السجلات' : 'All Records'}</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-black/30">
                {isAr ? toHindiDigits(stats.total) : stats.total}
              </span>
            </button>
          </div>

          {/* Remediation Launch Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {filteredRecords.length > 0 && (
              <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span className="font-semibold text-slate-400">{isAr ? 'عدد الأسئلة:' : 'Count:'}</span>
                <select
                  value={remediationCount}
                  onChange={(e) => setRemediationCount(Number(e.target.value))}
                  className="bg-transparent text-emerald-400 font-bold outline-none cursor-pointer"
                >
                  <option value={5} className="bg-slate-900 text-slate-200">{isAr ? '٥ أسئلة' : '5 Qs'}</option>
                  <option value={10} className="bg-slate-900 text-slate-200">{isAr ? '١٠ أسئلة' : '10 Qs'}</option>
                  <option value={20} className="bg-slate-900 text-slate-200">{isAr ? '٢٠ سؤالاً' : '20 Qs'}</option>
                  <option value={999} className="bg-slate-900 text-slate-200">{isAr ? 'كل الأسئلة' : 'All'}</option>
                </select>
              </div>
            )}

            <button
              onClick={() => handleLaunchRemediation('online')}
              disabled={filteredRecords.length === 0}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isAr ? 'بدء اختبار علاجي إلكتروني' : 'Start Online Remediation'}</span>
            </button>

            <button
              onClick={() => handleLaunchRemediation('printable')}
              disabled={filteredRecords.length === 0}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 flex items-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isAr ? 'طباعة ورقة الأخطاء' : 'Print Worksheet'}</span>
            </button>

            {stats.mastered > 0 && (
              <button
                onClick={handleClearMastered}
                title={isAr ? 'حذف الأسئلة التي تم تثبيتها من الكشكول' : 'Clear mastered items'}
                className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-rose-950/50 text-slate-300 hover:text-rose-400 text-xs font-semibold border border-slate-700/60 transition-all flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isAr ? 'تطهير المتقن' : 'Clear Mastered'}</span>
              </button>
            )}

            {stats.total > 0 && (
              <button
                onClick={handleClearAll}
                title={isAr ? 'مسح كافة السجلات' : 'Reset All'}
                className="p-2 rounded-xl bg-slate-800/40 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 border border-slate-800 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/70">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold">{isAr ? 'تصفية حسب:' : 'Filter:'}</span>
          </div>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-semibold focus:border-indigo-500 outline-none"
          >
            <option value="all">{isAr ? 'كل الفروع والمواد' : 'All Subjects'}</option>
            {subjectsList.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-semibold focus:border-indigo-500 outline-none"
          >
            <option value="all">{isAr ? 'كل مستويات الصعوبة' : 'All Difficulties'}</option>
            <option value="easy">{isAr ? 'تأسيسي (سهل)' : 'Foundational (Easy)'}</option>
            <option value="medium">{isAr ? 'متوسط (معياري)' : 'Standard (Medium)'}</option>
            <option value="hots">{isAr ? 'مستويات عليا (HOTS)' : 'High Order (HOTS)'}</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder={isAr ? 'بحث في نص السؤال...' : 'Search question text...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-[160px] px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 outline-none"
          />

          <span className="text-xs text-slate-400 font-bold ml-auto">
            {isAr
              ? `عرض ${toHindiDigits(filteredRecords.length)} من أصل ${toHindiDigits(records.length)} سؤال`
              : `Showing ${filteredRecords.length} of ${records.length} records`}
          </span>
        </div>
      </div>

      {/* Empty State */}
      {filteredRecords.length === 0 && (
        <div className="bg-slate-900/60 border-2 border-dashed border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            {records.length === 0 ? (
              <Sparkles className="w-8 h-8" />
            ) : (
              <CheckCircle2 className="w-8 h-8" />
            )}
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-200">
              {records.length === 0
                ? isAr
                  ? 'كشكول الأخطاء نظيف تماماً! أحسنت 🌟'
                  : 'Your Mistake Notebook is spotless! 🌟'
                : isAr
                ? 'لا توجد أسئلة تطابق معايير التصفية الحالية'
                : 'No questions match the active filters'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {records.length === 0
                ? isAr
                  ? 'عندما تتدرب في وضع "الاختبار الإلكتروني" أو "البابل شيت"، سيتم توثيق أي سؤال تخطئ في إجابته تلقائياً هنا لتتمكن من إعادة اختباره وتثبيت فهمه.'
                  : 'When practicing in Online Quiz or Bubble Sheet mode, any question you answer incorrectly will automatically be captured here for targeted remediation.'
                : isAr
                ? 'جرّب تعديل خيارات التصفية أو اختيار "كافة السجلات" للاطلاع على باقي الأسئلة.'
                : 'Try adjusting your filter options or selecting "All Records" to view other items.'}
            </p>
          </div>
        </div>
      )}

      {/* Mistake Cards List */}
      <div className="space-y-4">
        {filteredRecords.map((record, index) => {
          const q = record.question;
          const isExpanded = !!expandedSolutions[record.id];
          const questionText = isAr ? q.questionAr : q.questionEn;
          const options = isAr ? q.optionsAr : q.optionsEn;
          const explanation = isAr ? q.explanationAr : q.explanationEn;
          const branch = isAr ? (q.branchTitleAr || q.branchTitleEn) : (q.branchTitleEn || q.branchTitleAr);
          const chapter = isAr ? (q.chapterTitleAr || q.chapterTitleEn) : (q.chapterTitleEn || q.chapterTitleAr);

          const lettersAr = ['أ', 'ب', 'ج', 'د', 'هـ'];
          const lettersEn = ['A', 'B', 'C', 'D', 'E'];
          const letter = (idx: number) => (isAr ? lettersAr[idx] : lettersEn[idx]);

          return (
            <div
              key={record.id}
              className={`rounded-2xl border-2 transition-all p-5 sm:p-6 shadow-md backdrop-blur-sm ${
                record.mastered
                  ? 'bg-slate-900/60 border-emerald-900/40 hover:border-emerald-700/50'
                  : 'bg-slate-900/90 border-rose-900/40 hover:border-rose-700/60 shadow-rose-950/20'
              }`}
            >
              {/* Card Header: Meta Badges & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 font-mono text-xs font-bold text-slate-300">
                    {isAr ? `#${toHindiDigits(index + 1)}` : `#${index + 1}`}
                  </span>

                  <span className="px-2.5 py-1 rounded-lg bg-indigo-950/70 border border-indigo-800/50 text-indigo-300 text-xs font-bold">
                    {branch}
                  </span>

                  {chapter && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs font-medium">
                      {chapter}
                    </span>
                  )}

                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase ${
                      q.difficulty === 'hots'
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                        : q.difficulty === 'medium'
                        ? 'bg-sky-500/20 border border-sky-500/40 text-sky-300'
                        : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                    }`}
                  >
                    {q.difficulty === 'hots'
                      ? isAr
                        ? 'مستويات عليا HOTS'
                        : 'HOTS'
                      : q.difficulty === 'medium'
                      ? isAr
                        ? 'متوسط'
                        : 'Medium'
                      : isAr
                      ? 'تأسيسي'
                      : 'Easy'}
                  </span>

                  {record.attemptsCount > 1 && (
                    <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-bold flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" />
                      <span>
                        {isAr
                          ? `أخطأت بها ${toHindiDigits(record.attemptsCount)} مرات`
                          : `${record.attemptsCount} missed attempts`}
                      </span>
                    </span>
                  )}
                </div>

                {/* Right / Status Toggle & Remove */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleMastered(record.id, record.mastered)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                      record.mastered
                        ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30'
                        : 'bg-slate-800 hover:bg-emerald-950/60 border-slate-700 text-slate-300 hover:text-emerald-300'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${record.mastered ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span>
                      {record.mastered
                        ? isAr
                          ? 'تم التدارك والتثبيت ✓'
                          : 'Mastered ✓'
                        : isAr
                        ? 'تحديد كـ "تم الاستيعاب"'
                        : 'Mark as Mastered'}
                    </span>
                  </button>

                  <button
                    onClick={() => handleRemoveRecord(record.id)}
                    title={isAr ? 'حذف من الكشكول' : 'Remove from notebook'}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Body */}
              <div className="py-4 space-y-3">
                <div className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
                  <MathRenderer text={questionText} lang={lang} />
                </div>

                {q.diagramType && (
                  <div className="max-w-md mx-auto">
                    <TextbookDiagram type={q.diagramType} lang={lang} />
                  </div>
                )}
              </div>

              {/* Answers Comparison Matrix */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {isAr ? 'مقارنة الخيارات وتصحيح المفهوم:' : 'Options Comparison:'}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {options.map((optText, optIdx) => {
                    const isUserMistake = optIdx === record.userAnswerIndex;
                    const isCorrect = optIdx === q.correctIndex;

                    let cardStyle =
                      'bg-slate-950/60 border-slate-800 text-slate-300';
                    if (isCorrect) {
                      cardStyle =
                        'bg-emerald-950/40 border-emerald-500/70 text-emerald-100 shadow-sm shadow-emerald-950/40';
                    } else if (isUserMistake) {
                      cardStyle =
                        'bg-rose-950/40 border-rose-500/70 text-rose-100 shadow-sm shadow-rose-950/40';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border flex items-start justify-between gap-3 text-sm font-semibold transition-all ${cardStyle}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-500 text-white'
                                : isUserMistake
                                ? 'bg-rose-500 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {letter(optIdx)}
                          </span>
                          <div className="pt-0.5">
                            <MathRenderer text={optText} lang={lang} />
                          </div>
                        </div>

                        {isCorrect && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold flex items-center gap-1 shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>{isAr ? 'الإجابة الصحيحة' : 'Correct'}</span>
                          </span>
                        )}

                        {isUserMistake && !isCorrect && (
                          <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-extrabold flex items-center gap-1 shrink-0">
                            <X className="w-3 h-3 text-rose-400" />
                            <span>{isAr ? 'إجابتك السابقة' : 'Your Answer'}</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Model Explanation Accordion */}
              {explanation && explanation.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => toggleSolution(record.id)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm font-bold text-slate-200 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-indigo-300">
                      <Brain className="w-4 h-4" />
                      <span>{isAr ? 'عرض خطوات الحل والتأصيل العلمي' : 'View Model Solution & Scientific Derivation'}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-4 sm:p-5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 space-y-2 animate-fadeIn">
                      <div className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isAr ? 'خطوات الحل والنموذج الوزاري المعتمد:' : 'Ministerial Marking Scheme Steps:'}</span>
                      </div>
                      {explanation.map((step, sIdx) => (
                        <div key={sIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                          <MathRenderer text={step} lang={lang} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
