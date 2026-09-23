import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import type { Assignment, AssignmentSubmission, TeacherGradingFeedback } from '../types/teacherAssignment';
import {
  getLocalAssignments,
  getSubmissionsForAssignment,
  getAssignmentByCode,
} from '../services/teacherAssignmentService';
import {
  saveSubmissionGrade,
  generateWhatsAppStudentReport,
  exportClassSubmissionsCSV,
} from '../services/teacherGradingService';
import {
  Clock,
  Search,
  Download,
  Share2,
  X,
  Sparkles,
  Check,
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
  initialAssignmentCode?: string;
}

export const TeacherGradingDashboard: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  initialAssignmentCode = '',
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>(initialAssignmentCode);
  const [currentAssignment, setCurrentAssignment] = useState<Assignment | null>(null);
  const [submissions, setSubmissions] = useState<AssignmentSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchStudent, setSearchStudent] = useState('');

  // Grading Drawer / Modal
  const [activeSubmission, setActiveSubmission] = useState<AssignmentSubmission | null>(null);
  const [feedbackNotes, setFeedbackNotes] = useState('');
  const [scoreAdjustment, setScoreAdjustment] = useState<number>(0);
  const [reviewStatus, setReviewStatus] = useState<'pending_review' | 'reviewed' | 'needs_revision'>('reviewed');
  const [saveNotice, setSaveNotice] = useState<boolean>(false);

  useEffect(() => {
    const local = Object.values(getLocalAssignments());
    setAssignments(local);
    if (!selectedCode && local.length > 0) {
      setSelectedCode(local[local.length - 1].assignmentCode);
    }
  }, []);

  useEffect(() => {
    if (selectedCode) {
      loadSubmissions(selectedCode);
    }
  }, [selectedCode]);

  const loadSubmissions = async (code: string) => {
    setLoading(true);
    try {
      const assignmentObj = await getAssignmentByCode(code);
      setCurrentAssignment(assignmentObj);
      const list = await getSubmissionsForAssignment(code);
      setSubmissions(list);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenGrading = (sub: AssignmentSubmission) => {
    setActiveSubmission(sub);
    setFeedbackNotes(sub.teacherFeedback?.teacherNotes || '');
    setScoreAdjustment(sub.teacherFeedback?.teacherScoreAdjustment || 0);
    setReviewStatus(sub.teacherFeedback?.status || 'reviewed');
    setSaveNotice(false);
  };

  const handleSaveGrade = () => {
    if (!activeSubmission) return;
    const feedback: TeacherGradingFeedback = {
      teacherNotes: feedbackNotes,
      teacherScoreAdjustment: Number(scoreAdjustment) || 0,
      status: reviewStatus,
    };
    saveSubmissionGrade(activeSubmission.submissionId, feedback);

    // Reload active submission and list
    setSubmissions((prev) =>
      prev.map((s) => {
        if (s.submissionId === activeSubmission.submissionId) {
          const adj = Number(scoreAdjustment) || 0;
          const finalScore = Math.max(0, Math.min(s.totalPoints, s.score + adj));
          const finalPercentage = s.totalPoints > 0 ? Math.round((finalScore / s.totalPoints) * 1000) / 10 : 0;
          return {
            ...s,
            score: finalScore,
            percentage: finalPercentage,
            teacherFeedback: {
              ...feedback,
              finalScore,
              gradedAt: Date.now(),
            },
          };
        }
        return s;
      })
    );

    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 3000);
  };

  const handleExportCSV = () => {
    if (submissions.length === 0) return;
    const title = currentAssignment?.titleAr || currentAssignment?.title || selectedCode;
    const csvStr = exportClassSubmissionsCSV(submissions, title);
    const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `egbac_grades_${selectedCode}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSendWhatsApp = (sub: AssignmentSubmission) => {
    const title = currentAssignment?.titleAr || currentAssignment?.title || 'الواجب المدرسي';
    const textEncoded = generateWhatsAppStudentReport(sub, title);
    window.open(`https://wa.me/?text=${textEncoded}`, '_blank');
  };

  const filteredSubmissions = submissions.filter((s) =>
    (s.studentName || '').toLowerCase().includes(searchStudent.trim().toLowerCase())
  );

  const totalSubmissions = submissions.length;
  const avgPercentage =
    totalSubmissions > 0
      ? Math.round(submissions.reduce((sum, s) => sum + s.percentage, 0) / totalSubmissions)
      : 0;
  const reviewedCount = submissions.filter((s) => s.teacherFeedback?.status === 'reviewed').length;
  const pendingCount = totalSubmissions - reviewedCount;

  return (
    <div className="space-y-5">
      {/* Header and Assignment Picker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-base font-black flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-600 text-white shadow-xs">🧑‍🏫</span>
            <span>{isAr ? 'لوحة تصحيح ومراجعة إجابات الطلاب' : 'Student Submissions & Grading Dashboard'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {isAr
              ? 'مراجعة وتدقيق إجابات الطلاب وتدوين الملاحظات التربوية وتصدير كشف الدرجات أو إرساله عبر واتساب'
              : 'Audit student answers, write personalized teacher feedback, and export or share WhatsApp reports'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className={`text-xs font-bold px-3 py-2 rounded-xl border cursor-pointer ${
              isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}
          >
            {assignments.length === 0 ? (
              <option value="">{isAr ? 'لا توجد واجبات منشأة بعد' : 'No assignments created yet'}</option>
            ) : (
              assignments.map((a) => (
                <option key={a.assignmentCode} value={a.assignmentCode}>
                  [{a.assignmentCode}] {a.titleAr || a.title}
                </option>
              ))
            )}
          </select>

          <button
            type="button"
            onClick={handleExportCSV}
            disabled={submissions.length === 0}
            className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              submissions.length === 0
                ? 'opacity-40 cursor-not-allowed'
                : isLight
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
            title={isAr ? 'تصدير كشف درجات الفصل كملف Excel / CSV' : 'Export gradebook as CSV'}
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isAr ? 'كشف الدرجات (CSV)' : 'Export CSV'}</span>
          </button>
        </div>
      </div>

      {/* Metrics Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
          <p className="text-[11px] font-semibold text-slate-400">{isAr ? 'إجمالي التسليمات' : 'Total Submissions'}</p>
          <p className="text-xl font-black mt-1 text-indigo-400">{totalSubmissions}</p>
        </div>

        <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
          <p className="text-[11px] font-semibold text-slate-400">{isAr ? 'متوسط درجات الفصل' : 'Class Average'}</p>
          <p className="text-xl font-black mt-1 text-emerald-400">{avgPercentage}%</p>
        </div>

        <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
          <p className="text-[11px] font-semibold text-slate-400">{isAr ? 'تمت مراجعتها' : 'Reviewed'}</p>
          <p className="text-xl font-black mt-1 text-cyan-400">{reviewedCount}</p>
        </div>

        <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
          <p className="text-[11px] font-semibold text-slate-400">{isAr ? 'قيد المراجعة' : 'Pending Review'}</p>
          <p className="text-xl font-black mt-1 text-amber-400">{pendingCount}</p>
        </div>
      </div>

      {/* Submissions Search and List Table */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute right-3 rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchStudent}
            onChange={(e) => setSearchStudent(e.target.value)}
            placeholder={isAr ? 'بحث باسم الطالب...' : 'Search student by name...'}
            className={`w-full text-xs font-semibold px-8 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isLight ? 'bg-white border-slate-300 text-slate-900' : 'bg-slate-900 border-slate-700 text-white'
            }`}
          />
        </div>

        {loading ? (
          <div className="p-8 text-center text-xs text-slate-400">
            {isAr ? 'جاري تحميل تسليمات الطلاب...' : 'Loading student submissions...'}
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="p-8 rounded-2xl border text-center border-dashed border-slate-300 dark:border-slate-800 space-y-2">
            <p className="text-3xl">👥</p>
            <p className="text-sm font-bold text-slate-400">
              {isAr ? 'لم يقم أي طالب بتسليم هذا الواجب بعد' : 'No submissions received yet for this assignment'}
            </p>
            <p className="text-xs text-slate-500">
              {isAr ? `شارك كود الواجب (${selectedCode}) مع طلابك لبدء استلام الإجابات.` : `Share code (${selectedCode}) with your students.`}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-200/60 dark:divide-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {filteredSubmissions.map((sub) => {
              const isReviewed = sub.teacherFeedback?.status === 'reviewed';
              return (
                <div
                  key={sub.submissionId}
                  className={`p-3.5 sm:p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-900/50 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      {sub.studentName.slice(0, 1)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-extrabold text-xs sm:text-sm truncate">{sub.studentName}</p>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.2 rounded-full border ${
                            isReviewed
                              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-700/60'
                              : 'bg-amber-950/40 text-amber-300 border-amber-700/60'
                          }`}
                        >
                          {isReviewed ? '✓ ' + (isAr ? 'تمت المراجعة' : 'Reviewed') : (isAr ? 'قيد المراجعة' : 'Pending')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {isAr ? `تاريخ التسليم: ${new Date(sub.submittedAt).toLocaleTimeString('ar-EG')}` : `Submitted at: ${new Date(sub.submittedAt).toLocaleTimeString()}`}
                        {' • '}
                        {Math.round(sub.timeSpentSeconds / 60)} {isAr ? 'دقيقة' : 'mins'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="text-right rtl:text-right ltr:text-left">
                      <p className="text-sm font-black text-emerald-400">
                        {sub.score} / {sub.totalPoints}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400">{sub.percentage}%</p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSendWhatsApp(sub)}
                        className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-600/40 transition-all cursor-pointer"
                        title={isAr ? 'إرسال التقرير لولي الأمر عبر واتساب' : 'Send progress report via WhatsApp'}
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenGrading(sub)}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-xs transition-all cursor-pointer"
                      >
                        {isAr ? 'تصحيح ومراجعة' : 'Review & Grade'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* DETAILED GRADING & REVIEW MODAL */}
      {activeSubmission && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={() => setActiveSubmission(null)}
        >
          <div
            className={`relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${
              isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black flex items-center gap-2">
                  <span>🧑‍🏫</span>
                  <span>{isAr ? `مراجعة إجابات الطالب: ${activeSubmission.studentName}` : `Audit: ${activeSubmission.studentName}`}</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {isAr
                    ? `الدرجة: ${activeSubmission.score} من ${activeSubmission.totalPoints} (${activeSubmission.percentage}%)`
                    : `Score: ${activeSubmission.score} / ${activeSubmission.totalPoints} (${activeSubmission.percentage}%)`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSendWhatsApp(activeSubmission)}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تقرير واتساب' : 'WhatsApp'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSubmission(null)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Questions and Answers breakdown */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {saveNotice && (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>{isAr ? 'تم حفظ التوجيهات واعتماد الدرجة بنجاح!' : 'Grade and feedback saved successfully!'}</span>
                </div>
              )}

              {/* Teacher Grading Feedback Box */}
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-indigo-50/70 border-indigo-200' : 'bg-indigo-950/30 border-indigo-800/60'
              }`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAr ? 'توجيهات وملاحظات المعلم الخاصة بهذا الطالب' : 'Teacher Feedback & Score Adjustment'}</span>
                  </h4>
                  <div className="flex items-center gap-2">
                    <label className="text-[11px] font-bold text-slate-400">{isAr ? 'حالة المراجعة:' : 'Status:'}</label>
                    <select
                      value={reviewStatus}
                      onChange={(e) => setReviewStatus(e.target.value as typeof reviewStatus)}
                      className={`text-xs font-bold px-2 py-1 rounded-lg border ${
                        isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                      }`}
                    >
                      <option value="reviewed">{isAr ? '✓ معتمد وتمت المراجعة' : 'Reviewed'}</option>
                      <option value="pending_review">{isAr ? '⏳ قيد المراجعة' : 'Pending'}</option>
                      <option value="needs_revision">{isAr ? '⚠️ يحتاج إعادة وتدريب' : 'Needs Revision'}</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={feedbackNotes}
                  onChange={(e) => setFeedbackNotes(e.target.value)}
                  placeholder={isAr ? 'اكتب ملاحظة تشجيعية أو توجيهية تظهر للطالب وفي تقرير ولي الأمر...' : 'Write encouragement or remedial guidance...'}
                  className={`w-full text-xs font-semibold p-2.5 rounded-xl border ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-400">{isAr ? 'تعديل الدرجة (نقاط إضافية / خصم):' : 'Score Adjustment:'}</span>
                    <input
                      type="number"
                      value={scoreAdjustment}
                      onChange={(e) => setScoreAdjustment(Number(e.target.value))}
                      className={`w-16 text-xs font-bold text-center py-1 px-2 rounded-lg border ${
                        isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                      }`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSaveGrade}
                    className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-xs transition-all cursor-pointer"
                  >
                    {isAr ? 'حفظ الملاحظات والاعتماد' : 'Save Grade & Notes'}
                  </button>
                </div>
              </div>

              {/* Answers Audit List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-400">
                  {isAr ? `إجابات الطالب (${activeSubmission.answers.length} سؤال):` : `Student Answers (${activeSubmission.answers.length} questions):`}
                </h4>

                {activeSubmission.answers.map((ans, aIdx) => (
                  <div
                    key={aIdx}
                    className={`p-3.5 rounded-xl border space-y-2 text-xs transition-all ${
                      ans.isCorrect
                        ? isLight
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : 'border-emerald-900/40 bg-emerald-950/20'
                        : isLight
                        ? 'border-red-200 bg-red-50/50'
                        : 'border-red-900/40 bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            ans.isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        >
                          {ans.isCorrect ? '✓' : '✗'}
                        </span>
                        <span className="font-extrabold">
                          {isAr ? `السؤال رقم (${aIdx + 1})` : `Question (${aIdx + 1})`}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{ans.timeSpentSec} {isAr ? 'ثانية' : 'sec'}</span>
                        </span>
                        {ans.errorType && (
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold">
                            {ans.errorType}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-medium pl-7 rtl:pl-0 rtl:pr-7">
                      <p className="text-slate-400">
                        {isAr ? 'خيار الطالب:' : 'Student Choice:'}{' '}
                        <span className={`font-bold ${ans.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                          {ans.selectedOptionIndex >= 0 ? `الخيار (${String.fromCharCode(65 + ans.selectedOptionIndex)})` : (isAr ? 'لم يُجب' : 'Unanswered')}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
