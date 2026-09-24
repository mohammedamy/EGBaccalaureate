import React, { useState } from 'react';
import {
  X,
  AlertTriangle,
  Send,
  Check,
} from 'lucide-react';
import { EgyptFlag } from './EgyptFlag';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type QuestionIssueCategory =
  | 'scientific_error'
  | 'typo_language'
  | 'latex_broken'
  | 'ambiguous_options'
  | 'out_of_syllabus';

export interface QuestionIssueReport {
  reportId: string;
  questionId: string;
  subjectId?: string;
  chapterTitle?: string;
  questionSnippet: string;
  issueCategory: QuestionIssueCategory;
  userExplanation: string;
  proposedFix?: string;
  reporterName?: string;
  reportedAt: number;
}

const LOCAL_STORAGE_KEY = 'egbac_question_issue_reports';
const RATE_LIMIT_MINUTES = 15;

export interface QuestionIssueReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ar' | 'en';
  theme?: 'dark' | 'light' | 'high-contrast';
  questionId: string;
  questionSnippet: string;
  subjectId?: string;
  chapterTitle?: string;
}

const ISSUE_CATEGORIES: Array<{
  id: QuestionIssueCategory;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}> = [
  {
    id: 'scientific_error',
    titleAr: 'خطأ علمي أو ناتج حسابي غير دقيق',
    titleEn: 'Scientific or Numerical Calculation Error',
    descAr: 'خطأ في القانون المستخدم، النواتج الحسابية، أو تناقض مع المفاهيم الفيزيائية/الكيميائية',
    descEn: 'Flaw in applied scientific law, numerical calculation, or factual inconsistency',
  },
  {
    id: 'ambiguous_options',
    titleAr: 'خيارات ملتبسة أو وجود إجابتين صحيحتين',
    titleEn: 'Ambiguous Options or Multiple Valid Answers',
    descAr: 'صياغة الاختيارات تحتمل أكثر من إجابة صحيحة أو لا توجد إجابة مطابقة بين الخيارات',
    descEn: 'Options permit multiple interpretations or none of the choices is strictly correct',
  },
  {
    id: 'latex_broken',
    titleAr: 'تشوه في عرض المعادلة الرياضية (LaTeX)',
    titleEn: 'Malformed Mathematical Equation (LaTeX/KaTeX)',
    descAr: 'المعادلة مقطوعة، الرموز متداخلة، أو هناك كود TeX غير منسق',
    descEn: 'Broken math symbols, overlapping fractions, or unrendered TeX code',
  },
  {
    id: 'typo_language',
    titleAr: 'خطأ إملائي أو لغوي في نص السؤال',
    titleEn: 'Typographical or Grammatical Error',
    descAr: 'سقوط حرف، خطأ نحوي، أو تشكيل يغير المعنى المقصود',
    descEn: 'Typo, grammatical mistake, or diacritic altering the question meaning',
  },
  {
    id: 'out_of_syllabus',
    titleAr: 'سؤال ملغي أو خارج المنهج الوزاري',
    titleEn: 'Out of Ministerial Syllabus',
    descAr: 'موضوع ملغي رسمياً أو غير مقرر على دفعة الثانوية العامة الحالية',
    descEn: 'Topic officially omitted or beyond current ministerial secondary specifications',
  },
];

export const QuestionIssueReportModal: React.FC<QuestionIssueReportModalProps> = ({
  isOpen,
  onClose,
  lang = 'ar',
  theme = 'dark',
  questionId,
  questionSnippet,
  subjectId,
  chapterTitle,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [category, setCategory] = useState<QuestionIssueCategory>('scientific_error');
  const [explanation, setExplanation] = useState<string>('');
  const [proposedFix, setProposedFix] = useState<string>('');
  const [reporterName, setReporterName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [rateLimitMessage, setRateLimitMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const checkRateLimit = (qId: string): boolean => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!raw) return true;
      const reports: QuestionIssueReport[] = JSON.parse(raw);
      const recent = reports.find(
        (r) => r.questionId === qId && Date.now() - r.reportedAt < RATE_LIMIT_MINUTES * 60 * 1000
      );
      return !recent;
    } catch {
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!explanation.trim()) return;

    if (!checkRateLimit(questionId)) {
      setRateLimitMessage(
        isAr
          ? 'تم إرسال بلاغ لهذا السؤال حديثاً من جهازك، جاري مراجعته من الفريق العلمي. شكراً لمساهمتك!'
          : 'A report for this question was submitted recently. Thank you for your contribution!'
      );
      return;
    }

    setIsSubmitting(true);
    setRateLimitMessage(null);

    const newReport: QuestionIssueReport = {
      reportId: `rep_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      questionId,
      subjectId,
      chapterTitle,
      questionSnippet: questionSnippet.slice(0, 160),
      issueCategory: category,
      userExplanation: explanation.trim(),
      proposedFix: proposedFix.trim() || undefined,
      reporterName: reporterName.trim() || undefined,
      reportedAt: Date.now(),
    };

    // 1. Save Locally
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      const list: QuestionIssueReport[] = raw ? JSON.parse(raw) : [];
      list.unshift(newReport);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
    } catch (err) {
      console.warn('Failed saving question issue locally:', err);
    }

    // 2. Sync to Firestore if online
    try {
      await addDoc(collection(db, 'question_issue_reports'), {
        ...newReport,
        createdAt: serverTimestamp(),
      });
    } catch {
      // Offline fallback silent
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 my-auto ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : 'bg-slate-900 border-slate-700 text-white shadow-rose-950/40'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b ${
            isLight ? 'bg-rose-50/70 border-slate-200' : 'bg-slate-800/90 border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isAr ? 'الإبلاغ عن ملاحظة في السؤال' : 'Report Question Issue'}
                </h2>
                <span className="hidden sm:inline-block">
                  <EgyptFlag className="w-5 h-3.5" />
                </span>
              </div>
              <p className={`text-xs ${isLight ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
                {isAr
                  ? 'مساهمة مجتمعية لتدقيق وجودة بنك الأسئلة الوزاري'
                  : 'Community review & quality assurance for ministerial questions'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Question Context Snippet */}
          <div className={`p-3.5 rounded-2xl text-xs space-y-1 ${isLight ? 'bg-slate-100 border border-slate-200' : 'bg-slate-950/70 border border-slate-800'}`}>
            <div className={`flex items-center justify-between ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              <span className={`font-semibold ${isLight ? 'text-indigo-700' : 'text-indigo-300'}`}>
                {chapterTitle ? `${chapterTitle}` : (isAr ? 'السؤال المختار' : 'Target Question')}
              </span>
              <span className="font-mono text-[11px] text-slate-500">ID: {questionId}</span>
            </div>
            <p className={`line-clamp-2 italic ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
              "{questionSnippet || (isAr ? 'نص السؤال المختار...' : 'Question text...')}"
            </p>
          </div>

          {isSubmitted ? (
            /* Success Feedback State */
            <div className="py-6 px-4 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isAr ? 'شكراً لمساهمتك القيمة! تم استلام البلاغ' : 'Report Received! Thank You'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {isAr
                  ? 'سيتم مراجعة الملاحظة وتدقيقها علمياً بواسطة موجهي ومدرسي المادة في التحديث القادم.'
                  : 'Your feedback will be carefully reviewed by subject experts to maintain databank accuracy.'}
              </p>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  {isAr ? 'العودة للاختبار' : 'Back to Test'}
                </button>
              </div>
            </div>
          ) : (
            /* Report Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {rateLimitMessage && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs">
                  {rateLimitMessage}
                </div>
              )}

              {/* Taxonomy Radio Buttons */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  {isAr ? 'نوع الملاحظة أو المشكلة:' : 'Issue Type:'}
                </label>
                <div className="space-y-2">
                  {ISSUE_CATEGORIES.map((cat) => {
                    const isSelected = category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`w-full p-2.5 rounded-xl border text-xs text-left rtl:text-right transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-rose-950/30 border-rose-500 text-white shadow-xs'
                            : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                            isSelected ? 'border-rose-500 bg-rose-500 text-white' : 'border-slate-600'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <div>
                          <span className="font-bold block text-slate-200">
                            {isAr ? cat.titleAr : cat.titleEn}
                          </span>
                          <span className="text-[11px] text-slate-400 leading-snug block">
                            {isAr ? cat.descAr : cat.descEn}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Explanation */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {isAr ? 'شرح الملاحظة بالتفصيل *' : 'Explanation *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder={
                    isAr
                      ? 'وضح سبب الخطأ، أو الناتج الحسابي الصحيح، أو موضع الخلل في الصياغة...'
                      : 'Explain the error, expected calculation, or flaw...'
                  }
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Proposed Solution (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  {isAr ? 'الصياغة أو الإجابة المقترحة (اختياري):' : 'Proposed Fix (optional):'}
                </label>
                <input
                  type="text"
                  value={proposedFix}
                  onChange={(e) => setProposedFix(e.target.value)}
                  placeholder={
                    isAr
                      ? 'مثال: تعديل الخيار (ب) ليكون 14 V بدلاً من 12 V'
                      : 'e.g. Change option B to 14 V instead of 12 V'
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Reporter Name (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  {isAr ? 'اسم المبلغ أو المعلم (اختياري):' : 'Reporter Name (optional):'}
                </label>
                <input
                  type="text"
                  value={reporterName}
                  onChange={(e) => setReporterName(e.target.value)}
                  placeholder={
                    isAr
                      ? 'مثال: أستاذ أحمد / طالب بالثانوية العامة'
                      : 'e.g. Teacher Ahmed or Student'
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !explanation.trim()}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-rose-900/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (isAr ? 'جاري الإرسال...' : 'Sending...') : (isAr ? 'إرسال البلاغ' : 'Submit Report')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
