import React, { useState, useEffect, useRef } from 'react';
import type { ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import type { TeacherCustomQuestion, TeacherQuestionDifficulty } from '../types/teacherQuestionBank';
import {
  getLocalCustomQuestions,
  saveCustomQuestion,
  deleteCustomQuestion,
  filterCustomQuestions,
  exportCustomQuestionsJSON,
  importCustomQuestionsJSON,
} from '../services/teacherQuestionBankService';
import { MathRenderer } from './MathRenderer';
import {
  Plus,
  Search,
  Trash2,
  Edit3,
  Download,
  Upload,
  Check,
  Zap,
  X,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
  onGenerateAssignmentFromQuestions?: (questions: TeacherCustomQuestion[]) => void;
}

const SUBJECT_OPTIONS = [
  { id: 'all', labelAr: 'جميع المواد', labelEn: 'All Subjects', icon: '🌐' },
  { id: 'physics', labelAr: 'الفيزياء', labelEn: 'Physics', icon: '⚡' },
  { id: 'math', labelAr: 'الرياضيات', labelEn: 'Mathematics', icon: '📐' },
  { id: 'chemistry', labelAr: 'الكيمياء', labelEn: 'Chemistry', icon: '🧪' },
  { id: 'biology', labelAr: 'الأحياء', labelEn: 'Biology', icon: '🧬' },
  { id: 'arabic', labelAr: 'اللغة العربية', labelEn: 'Arabic', icon: '📖' },
  { id: 'english', labelAr: 'اللغة الإنجليزية', labelEn: 'English', icon: '🇬🇧' },
];

export const TeacherQuestionBankView: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  onGenerateAssignmentFromQuestions,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [questions, setQuestions] = useState<TeacherCustomQuestion[]>(getLocalCustomQuestions);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<TeacherQuestionDifficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<Set<string>>(new Set());

  // Form Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<TeacherCustomQuestion | null>(null);

  // Form inputs
  const [formSubject, setFormSubject] = useState('physics');
  const [formChapter, setFormChapter] = useState('');
  const [formDifficulty, setFormDifficulty] = useState<TeacherQuestionDifficulty>('medium');
  const [formQuestionAr, setFormQuestionAr] = useState('');
  const [formOptionsAr, setFormOptionsAr] = useState<string[]>(['', '', '', '']);
  const [formCorrectIndex, setFormCorrectIndex] = useState<number>(0);
  const [formExplanationAr, setFormExplanationAr] = useState('');
  const [formTeacherTipAr, setFormTeacherTipAr] = useState('');
  const [formTagsStr, setFormTagsStr] = useState('');
  const [previewTab, setPreviewTab] = useState<'editor' | 'preview'>('editor');
  const [formError, setFormError] = useState<string | null>(null);

  // File import state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<{ text: string; success: boolean } | null>(null);

  useEffect(() => {
    setQuestions(getLocalCustomQuestions());
  }, []);

  const filteredQuestions = filterCustomQuestions(
    {
      subjectId: selectedSubject,
      difficulty: selectedDifficulty === 'all' ? undefined : selectedDifficulty,
      searchQuery,
    },
    questions
  );

  const handleOpenAddModal = () => {
    setEditingQuestion(null);
    setFormSubject(selectedSubject === 'all' ? 'physics' : selectedSubject);
    setFormChapter('');
    setFormDifficulty('medium');
    setFormQuestionAr('');
    setFormOptionsAr(['', '', '', '']);
    setFormCorrectIndex(0);
    setFormExplanationAr('');
    setFormTeacherTipAr('');
    setFormTagsStr('');
    setFormError(null);
    setPreviewTab('editor');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (q: TeacherCustomQuestion) => {
    setEditingQuestion(q);
    setFormSubject(q.subjectId);
    setFormChapter(q.chapterTitleAr);
    setFormDifficulty(q.difficulty);
    setFormQuestionAr(q.questionAr);
    setFormOptionsAr(q.optionsAr.length === 4 ? [...q.optionsAr] : ['', '', '', '']);
    setFormCorrectIndex(q.correctOptionIndex);
    setFormExplanationAr(q.explanationAr || '');
    setFormTeacherTipAr(q.teacherTipAr || '');
    setFormTagsStr((q.tags || []).join(', '));
    setFormError(null);
    setPreviewTab('editor');
    setIsModalOpen(true);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestionAr.trim()) {
      setFormError(isAr ? 'يرجى كتابة نص السؤال' : 'Please provide the question prompt');
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (!formOptionsAr[i].trim()) {
        setFormError(isAr ? `يرجى إدخال نص الاختيار (${i + 1})` : `Please enter option (${i + 1})`);
        return;
      }
    }

    const tags = formTagsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    saveCustomQuestion({
      id: editingQuestion?.id,
      subjectId: formSubject,
      chapterTitleAr: formChapter.trim() || 'فصل عام',
      difficulty: formDifficulty,
      questionAr: formQuestionAr.trim(),
      optionsAr: formOptionsAr.map((o) => o.trim()),
      correctOptionIndex: formCorrectIndex,
      explanationAr: formExplanationAr.trim() || undefined,
      teacherTipAr: formTeacherTipAr.trim() || undefined,
      tags: tags.length ? tags : undefined,
    });

    const updated = getLocalCustomQuestions();
    setQuestions(updated);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm(isAr ? 'هل أنت متأكد من حذف هذا السؤال من بنك أسئلتك؟' : 'Are you sure you want to delete this question?')) {
      deleteCustomQuestion(id);
      setQuestions(getLocalCustomQuestions());
      setSelectedQuestionIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  const toggleSelectQuestion = (id: string) => {
    setSelectedQuestionIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedQuestionIds.size === filteredQuestions.length) {
      setSelectedQuestionIds(new Set());
    } else {
      setSelectedQuestionIds(new Set(filteredQuestions.map((q) => q.id)));
    }
  };

  const handleExportJSON = () => {
    const jsonStr = exportCustomQuestionsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `egbac_teacher_questions_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importCustomQuestionsJSON(content);
      if (res.success) {
        setQuestions(getLocalCustomQuestions());
        setImportStatus({
          text: isAr ? `تم استيراد ${res.count} سؤال بنجاح!` : `Successfully imported ${res.count} questions!`,
          success: true,
        });
      } else {
        setImportStatus({
          text: res.error || (isAr ? 'فشل استيراد الملف' : 'Failed to import file'),
          success: false,
        });
      }
      setTimeout(() => setImportStatus(null), 4000);
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCreateAssignment = () => {
    const selectedList = questions.filter((q) => selectedQuestionIds.has(q.id));
    if (selectedList.length === 0) return;
    onGenerateAssignmentFromQuestions?.(selectedList);
  };

  return (
    <div className="space-y-5">
      {/* Header and Action Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-base font-black flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">📚</span>
            <span>{isAr ? 'بنك أسئلة المعلم المخصص' : 'Teacher Custom Question Bank'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {isAr
              ? 'إنشاء وتعديل أسئلة الاختيار من متعدد مع دعم المعادلات الرياضية KaTeX وتوليد الواجبات بالأكواد'
              : 'Author, edit and organize custom MCQ problems with KaTeX math and instant assignment generation'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportFile}
            accept=".json"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50' : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
            title={isAr ? 'استيراد أسئلة من ملف JSON' : 'Import questions from JSON file'}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{isAr ? 'استيراد' : 'Import'}</span>
          </button>

          <button
            type="button"
            onClick={handleExportJSON}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50' : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
            title={isAr ? 'تصدير بنك الأسئلة كملف JSON' : 'Export question bank to JSON file'}
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isAr ? 'تصدير' : 'Export'}</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAddModal}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-black text-xs flex items-center gap-1.5 shadow-md hover:from-indigo-500 hover:to-sky-500 active:scale-95 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{isAr ? 'إضافة سؤال جديد' : 'New Question'}</span>
          </button>
        </div>
      </div>

      {importStatus && (
        <div
          className={`p-3 rounded-xl text-xs font-bold border transition-all ${
            importStatus.success
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          {importStatus.text}
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="relative sm:col-span-1">
          <Search className="w-3.5 h-3.5 absolute right-3 rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'بحث في نص السؤال أو الباب...' : 'Search question text or topic...'}
            className={`w-full text-xs font-semibold px-8 py-2 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}
          />
        </div>

        {/* Subject filter */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar sm:col-span-1">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className={`w-full text-xs font-bold px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}
          >
            {SUBJECT_OPTIONS.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.icon} {isAr ? sub.labelAr : sub.labelEn}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center gap-1 sm:col-span-1">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as typeof selectedDifficulty)}
            className={`w-full text-xs font-bold px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}
          >
            <option value="all">{isAr ? 'جميع المستويات' : 'All Difficulties'}</option>
            <option value="easy">🟢 {isAr ? 'مستوى سهل (مباشر)' : 'Easy'}</option>
            <option value="medium">🟡 {isAr ? 'مستوى متوسط (امتحان)' : 'Medium'}</option>
            <option value="hots">🔴 {isAr ? 'مستويات تفكير عليا HOTS' : 'HOTS High Order'}</option>
          </select>
        </div>
      </div>

      {/* Multi-Selection Action Ribbon */}
      {selectedQuestionIds.size > 0 && (
        <div className="p-3 rounded-xl bg-indigo-950/70 border border-indigo-700/60 flex items-center justify-between gap-3 text-xs animate-in fade-in duration-150">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center text-[10px]">
              {selectedQuestionIds.size}
            </span>
            <span className="font-bold text-indigo-200">
              {isAr ? `تم تحديد ${selectedQuestionIds.size} أسئلة` : `${selectedQuestionIds.size} questions selected`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCreateAssignment}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{isAr ? 'إنشاء واجب بالكود من هذه الأسئلة' : 'Generate Assignment Code'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedQuestionIds(new Set())}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold cursor-pointer"
            >
              {isAr ? 'إلغاء التحديد' : 'Deselect'}
            </button>
          </div>
        </div>
      )}

      {/* Questions Catalog List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSelectAll}
              className="flex items-center gap-1 text-[11px] font-bold text-indigo-400 hover:underline cursor-pointer"
            >
              {selectedQuestionIds.size === filteredQuestions.length && filteredQuestions.length > 0
                ? isAr ? 'إلغاء تحديد الكل' : 'Deselect All'
                : isAr ? 'تحديد الكل' : 'Select All'}
            </button>
            <span>•</span>
            <span>{isAr ? `إجمالي: ${filteredQuestions.length} سؤال` : `Total: ${filteredQuestions.length} questions`}</span>
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-8 rounded-2xl border text-center border-dashed border-slate-300 dark:border-slate-800 space-y-2">
            <p className="text-3xl">📝</p>
            <p className="text-sm font-bold text-slate-400">
              {isAr ? 'لا توجد أسئلة تطابق معايير البحث الحالية' : 'No questions matching current filter'}
            </p>
            <button
              type="button"
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 underline hover:text-indigo-300 mt-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isAr ? 'أضف أول سؤال في هذا الباب الآن' : 'Add your first question now'}</span>
            </button>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isSelected = selectedQuestionIds.has(q.id);
            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border transition-all ${
                  isSelected
                    ? isLight
                      ? 'border-indigo-400 bg-indigo-50/80 shadow-sm ring-1 ring-indigo-400'
                      : 'border-indigo-500 bg-indigo-950/40 shadow-md ring-1 ring-indigo-500/50'
                    : isLight
                    ? 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    {/* Selection Checkbox */}
                    <button
                      type="button"
                      onClick={() => toggleSelectQuestion(q.id)}
                      className={`w-5 h-5 mt-0.5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                        isSelected
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : isLight
                          ? 'border-slate-300 bg-white hover:border-indigo-400'
                          : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-3" />}
                    </button>

                    <div className="min-w-0 flex-1 space-y-2">
                      {/* Meta badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold">
                          #{idx + 1}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                          {q.chapterTitleAr}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            q.difficulty === 'hots'
                              ? 'bg-red-950/50 text-red-300 border-red-700/60'
                              : q.difficulty === 'medium'
                              ? 'bg-amber-950/50 text-amber-300 border-amber-700/60'
                              : 'bg-emerald-950/50 text-emerald-300 border-emerald-700/60'
                          }`}
                        >
                          {q.difficulty === 'hots'
                            ? isAr ? '🔴 تفكير عليا HOTS' : '🔴 HOTS'
                            : q.difficulty === 'medium'
                            ? isAr ? '🟡 مستوى متوسط' : '🟡 Medium'
                            : isAr ? '🟢 مستوى سهل' : '🟢 Easy'}
                        </span>

                        {(q.tags || []).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-slate-800 text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Question Stem */}
                      <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                        <MathRenderer text={q.questionAr} lang={lang} />
                      </div>

                      {/* 4 Choices Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.optionsAr.map((opt, optIdx) => {
                          const isCorrect = optIdx === q.correctOptionIndex;
                          return (
                            <div
                              key={optIdx}
                              className={`p-2 rounded-lg text-xs font-medium border flex items-center gap-2 ${
                                isCorrect
                                  ? isLight
                                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold'
                                    : 'bg-emerald-950/60 text-emerald-200 border-emerald-700/70 font-bold'
                                  : isLight
                                  ? 'bg-slate-50 text-slate-700 border-slate-200'
                                  : 'bg-slate-950/40 text-slate-300 border-slate-800/80'
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                  isCorrect ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                                }`}
                              >
                                {isCorrect ? '✓' : String.fromCharCode(65 + optIdx)}
                              </span>
                              <div className="truncate min-w-0 flex-1">
                                <MathRenderer text={opt} lang={lang} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Pedagogical Tip or Explanation */}
                      {(q.explanationAr || q.teacherTipAr) && (
                        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] space-y-1 text-slate-400">
                          {q.explanationAr && (
                            <p className="flex items-start gap-1">
                              <span className="font-bold text-indigo-400 shrink-0">💡 {isAr ? 'الحل النموذجي:' : 'Solution:'}</span>
                              <span className="text-slate-300"><MathRenderer text={q.explanationAr} lang={lang} /></span>
                            </p>
                          )}
                          {q.teacherTipAr && (
                            <p className="flex items-start gap-1">
                              <span className="font-bold text-amber-400 shrink-0">🎓 {isAr ? 'نصيحة المعلم:' : 'Teacher Tip:'}</span>
                              <span>{q.teacherTipAr}</span>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Question Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(q)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        isLight ? 'border-slate-300 text-slate-600 hover:bg-slate-100' : 'border-slate-700 text-slate-400 hover:bg-slate-800'
                      }`}
                      title={isAr ? 'تعديل السؤال' : 'Edit Question'}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(q.id)}
                      className="p-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                      title={isAr ? 'حذف السؤال' : 'Delete Question'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ADD / EDIT QUESTION MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${
              isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-sm font-black flex items-center gap-2">
                <span>{editingQuestion ? '✏️' : '✨'}</span>
                <span>
                  {editingQuestion
                    ? isAr ? 'تعديل السؤال في بنك الأسئلة' : 'Edit Custom Question'
                    : isAr ? 'إضافة سؤال جديد لبنك الأسئلة' : 'Add New Custom Question'}
                </span>
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveForm} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {formError && (
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                  {formError}
                </div>
              )}

              {/* Subject, Chapter & Difficulty */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    {isAr ? 'المادة الدراسية' : 'Subject'}
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className={`w-full text-xs font-bold px-3 py-2 rounded-xl border ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  >
                    {SUBJECT_OPTIONS.filter((s) => s.id !== 'all').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.icon} {isAr ? s.labelAr : s.labelEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    {isAr ? 'عنوان الباب / الدرس' : 'Chapter / Topic'}
                  </label>
                  <input
                    type="text"
                    value={formChapter}
                    onChange={(e) => setFormChapter(e.target.value)}
                    placeholder={isAr ? 'مثال: التيار المتردد' : 'e.g. AC Circuits'}
                    className={`w-full text-xs font-semibold px-3 py-2 rounded-xl border ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    {isAr ? 'مستوى الصعوبة' : 'Difficulty'}
                  </label>
                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as TeacherQuestionDifficulty)}
                    className={`w-full text-xs font-bold px-3 py-2 rounded-xl border ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  >
                    <option value="easy">🟢 {isAr ? 'سهل (تذكر وتطبيق مباشر)' : 'Easy'}</option>
                    <option value="medium">🟡 {isAr ? 'متوسط (معيار الامتحان)' : 'Medium'}</option>
                    <option value="hots">🔴 {isAr ? 'مستويات تفكير عليا HOTS' : 'HOTS'}</option>
                  </select>
                </div>
              </div>

              {/* Question Prompt Editor + KaTeX preview toggle */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">
                    {isAr ? 'نص السؤال (يدعم صيغ المعادلات الرياضية $...$)' : 'Question Stem (LaTeX supported $...$)'}
                  </label>
                  <div className="flex items-center gap-1 border rounded-lg p-0.5 border-slate-700 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setPreviewTab('editor')}
                      className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                        previewTab === 'editor' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      {isAr ? 'تحرير' : 'Edit'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewTab('preview')}
                      className={`px-2 py-0.5 rounded font-bold cursor-pointer ${
                        previewTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      {isAr ? 'معاينة المعادلات' : 'KaTeX Preview'}
                    </button>
                  </div>
                </div>

                {previewTab === 'editor' ? (
                  <textarea
                    rows={3}
                    value={formQuestionAr}
                    onChange={(e) => setFormQuestionAr(e.target.value)}
                    placeholder={isAr ? 'اكتب نص السؤال هنا... يمكنك وضع صيغ مثل $x^2 + y^2 = 25$' : 'Enter question text...'}
                    className={`w-full text-xs font-semibold p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  />
                ) : (
                  <div className="p-3 rounded-xl border border-indigo-700/50 bg-indigo-950/20 text-xs min-h-[70px]">
                    {formQuestionAr.trim() ? (
                      <MathRenderer text={formQuestionAr} lang={lang} />
                    ) : (
                      <span className="text-slate-500 italic">{isAr ? 'لا يوجد نص للمعاينة' : 'No text to preview'}</span>
                    )}
                  </div>
                )}
              </div>

              {/* 4 Multiple Choice Options */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>{isAr ? 'خيارات الإجابة الأربعة (حدد الإجابة الصحيحة بالدائرة)' : '4 Options (Select correct answer)'}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {formOptionsAr.map((opt, oIdx) => {
                    const isCorrect = formCorrectIndex === oIdx;
                    return (
                      <div
                        key={oIdx}
                        className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 ${
                          isCorrect
                            ? 'border-emerald-500 bg-emerald-950/30'
                            : isLight
                            ? 'border-slate-300 bg-white'
                            : 'border-slate-800 bg-slate-900'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setFormCorrectIndex(oIdx)}
                          className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-black shrink-0 transition-all cursor-pointer ${
                            isCorrect
                              ? 'bg-emerald-500 border-emerald-500 text-white shadow-xs'
                              : 'border-slate-500 text-slate-400 hover:border-emerald-400'
                          }`}
                          title={isAr ? 'تعيين كإجابة صحيحة' : 'Mark as correct'}
                        >
                          {isCorrect ? '✓' : String.fromCharCode(65 + oIdx)}
                        </button>
                        <input
                          type="text"
                          value={opt}
                          onChange={(e) => {
                            const next = [...formOptionsAr];
                            next[oIdx] = e.target.value;
                            setFormOptionsAr(next);
                          }}
                          placeholder={isAr ? `نص الاختيار (${oIdx + 1})` : `Option (${oIdx + 1})`}
                          className={`w-full text-xs font-semibold px-2 py-1 bg-transparent border-0 focus:outline-none ${
                            isCorrect ? 'font-bold text-emerald-300' : ''
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step-by-step Explanation & Teacher Guidance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    💡 {isAr ? 'شرح خطوات الحل النموذجي' : 'Model Solution'}
                  </label>
                  <textarea
                    rows={2}
                    value={formExplanationAr}
                    onChange={(e) => setFormExplanationAr(e.target.value)}
                    placeholder={isAr ? 'خطوات الوصول للناتج الصحيح...' : 'Step-by-step solution...'}
                    className={`w-full text-xs font-semibold p-2.5 rounded-xl border ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">
                    🎓 {isAr ? 'نصيحة المعلم لتجنب الخطأ الشائع' : 'Teacher Pedagogical Tip'}
                  </label>
                  <textarea
                    rows={2}
                    value={formTeacherTipAr}
                    onChange={(e) => setFormTeacherTipAr(e.target.value)}
                    placeholder={isAr ? 'تنبيه على تحويل الوحدات أو الانتباه للإشارة...' : 'Common misconception guidance...'}
                    className={`w-full text-xs font-semibold p-2.5 rounded-xl border ${
                      isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                    }`}
                  />
                </div>
              </div>

              {/* Custom Tags */}
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  🏷️ {isAr ? 'الوسوم (مفصولة بفاصلة)' : 'Tags (comma-separated)'}
                </label>
                <input
                  type="text"
                  value={formTagsStr}
                  onChange={(e) => setFormTagsStr(e.target.value)}
                  placeholder={isAr ? 'مثال: مراجعة نهائية, تفوق, مسألة 2026' : 'e.g. final review, hots, 2026'}
                  className={`w-full text-xs font-semibold px-3 py-2 rounded-xl border ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800 cursor-pointer"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-md transition-all cursor-pointer"
                >
                  {editingQuestion ? (isAr ? 'حفظ التعديلات' : 'Save Changes') : (isAr ? 'إضافة السؤال للبنك' : 'Add Question')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
