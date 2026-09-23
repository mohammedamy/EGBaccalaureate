import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  FileCheck,
  Check,
  FlaskConical,
} from 'lucide-react';
import { EgyptFlag } from '../EgyptFlag';
import { MathRenderer } from '../MathRenderer';
import { toHindiDigits } from '../../utils/arabicNumerals';
import type { LabDiscipline } from '../../services/labReportService';
import {
  getAssessmentForDiscipline,
  evaluatePostLabAssessment,
  injectAssessmentIntoLabReport,
  type PostLabEvaluationResult,
} from '../../services/postLabAssessmentService';

export interface PostLabAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  discipline?: LabDiscipline;
  experimentId?: string;
  onAssessmentCompleted?: (result: PostLabEvaluationResult) => void;
}

export const PostLabAssessmentModal: React.FC<PostLabAssessmentModalProps> = ({
  isOpen,
  onClose,
  lang = 'ar',
  theme = 'dark',
  discipline = 'physics',
  experimentId = 'phys-exp-1',
  onAssessmentCompleted,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [activeDiscipline, setActiveDiscipline] = useState<LabDiscipline>(discipline);
  const assessmentSet = getAssessmentForDiscipline(activeDiscipline);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [evaluationResult, setEvaluationResult] = useState<PostLabEvaluationResult | null>(null);
  const [reportInjected, setReportInjected] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (evaluationResult) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setEvaluationResult(null);
    setReportInjected(false);
  };

  const handleSubmit = () => {
    const result = evaluatePostLabAssessment(assessmentSet.questions, selectedAnswers);
    setEvaluationResult(result);
    if (onAssessmentCompleted) {
      onAssessmentCompleted(result);
    }
  };

  const handleInjectIntoReport = () => {
    if (!evaluationResult) return;
    injectAssessmentIntoLabReport(experimentId, evaluationResult);
    setReportInjected(true);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalCount = assessmentSet.questions.length;
  const isComplete = answeredCount === totalCount;

  const formatNum = (val: string | number) => (isAr ? toHindiDigits(val) : String(val));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 my-auto ${
          isLight
            ? 'bg-slate-50 border-slate-300 text-slate-900'
            : 'bg-slate-900/95 border-indigo-500/30 text-white shadow-indigo-950/50'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div
          className={`px-5 py-4 flex items-center justify-between border-b ${
            isLight ? 'bg-indigo-50/80 border-slate-200' : 'bg-slate-800/80 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isAr ? 'التقييم العلمي البعدي للمختبر الافتراضي' : 'Post-Lab Scientific Inquiry Assessment'}
                </h2>
                <span className="hidden sm:inline-block">
                  <EgyptFlag className="w-5 h-3.5" />
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isAr
                  ? '٥ أسئلة استقصائية في الفرضيات والمنحنيات وحساب الخطأ والربط الامتحاني'
                  : '5 inquiry questions: hypothesis, graph slope, % error & exam linkage'}
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

        {/* Discipline Tabs */}
        <div className="px-5 pt-3 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs font-bold">
          {(['physics', 'chemistry', 'biology', 'math'] as LabDiscipline[]).map((disc) => (
            <button
              key={disc}
              onClick={() => {
                setActiveDiscipline(disc);
                handleReset();
              }}
              className={`pb-2.5 px-3 border-b-2 transition-all capitalize whitespace-nowrap ${
                activeDiscipline === disc
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {disc === 'physics'
                ? (isAr ? 'الفيزياء (دائرة أوم)' : 'Physics')
                : disc === 'chemistry'
                ? (isAr ? 'الكيمياء (معايرة التعادل)' : 'Chemistry')
                : disc === 'biology'
                ? (isAr ? 'الأحياء (الهجرة الكهربية DNA)' : 'Biology')
                : (isAr ? 'الرياضيات (القطوع المخروطية)' : 'Math')}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Lab Header Card */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-amber-400 font-bold block">
                {isAr ? 'التجربة المحددة للتقييم:' : 'Target Experiment:'}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {isAr ? assessmentSet.labTitleAr : assessmentSet.labTitleEn}
              </h3>
            </div>
            <div className="text-left rtl:text-right">
              <span className="text-xs font-mono font-bold text-slate-400 block">
                {formatNum(answeredCount)} / {formatNum(totalCount)} {isAr ? 'مكتمل' : 'answered'}
              </span>
            </div>
          </div>

          {/* Evaluation Banner (After Submit) */}
          {evaluationResult && (
            <div
              className={`p-5 rounded-2xl border text-center space-y-3 animate-in zoom-in-95 duration-200 ${
                evaluationResult.passed
                  ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200'
                  : 'bg-amber-950/50 border-amber-500/50 text-amber-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span className="text-xl font-bold">
                  {isAr ? 'درجة التقييم العلمي:' : 'Assessment Score:'} {formatNum(evaluationResult.scorePercentage)}%
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700">
                  {formatNum(evaluationResult.earnedPoints)} / {formatNum(evaluationResult.totalPoints)} {isAr ? 'نقاط' : 'pts'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                {isAr ? evaluationResult.feedbackSummaryAr : evaluationResult.feedbackSummaryEn}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={handleInjectIntoReport}
                  disabled={reportInjected}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    reportInjected
                      ? 'bg-emerald-800 text-white cursor-default'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                  }`}
                >
                  {reportInjected ? <Check className="w-4 h-4" /> : <FileCheck className="w-4 h-4" />}
                  <span>
                    {reportInjected
                      ? (isAr ? 'تم إدراج الدرجة في تقرير المختبر ✓' : 'Injected to Lab Report ✓')
                      : (isAr ? 'اعتماد الدرجة وإدراجها في تقرير المختبر' : 'Inject Score into Lab Report')}
                  </span>
                </button>

                <button
                  onClick={handleReset}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إعادة المحاولة' : 'Retry'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Inquiry Questions List */}
          <div className="space-y-5">
            {assessmentSet.questions.map((q, qIndex) => {
              const selectedIdx = selectedAnswers[q.id];
              const isCorrect = evaluationResult ? selectedIdx === q.correctIndex : null;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Category Pill & Question Number */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {isAr ? q.categoryTitleAr : q.categoryTitleEn}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {isAr ? `سؤال ${formatNum(qIndex + 1)}` : `Q${qIndex + 1}`} ({formatNum(q.points)} {isAr ? 'نقاط' : 'pts'})
                    </span>
                  </div>

                  {/* Question Prompt */}
                  <div className="text-xs sm:text-sm font-semibold text-white mb-3 leading-relaxed">
                    <MathRenderer text={isAr ? q.questionAr : q.questionEn} inline={true} lang={lang} />
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2">
                    {(isAr ? q.optionsAr : q.optionsEn).map((optText, optIdx) => {
                      const isChosen = selectedIdx === optIdx;
                      let optionClasses = '';

                      if (evaluationResult) {
                        if (optIdx === q.correctIndex) {
                          optionClasses = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isChosen && !isCorrect) {
                          optionClasses = 'bg-rose-950/80 border-rose-500 text-rose-300';
                        } else {
                          optionClasses = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                        }
                      } else {
                        if (isChosen) {
                          optionClasses = 'bg-indigo-600/20 border-indigo-500 text-indigo-200 font-semibold shadow-xs';
                        } else {
                          optionClasses = 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-xs text-left rtl:text-right flex items-center justify-between gap-3 transition-all ${optionClasses}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full border flex items-center justify-center font-mono text-[10px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>
                              <MathRenderer text={optText} inline={true} lang={lang} />
                            </span>
                          </div>

                          {evaluationResult && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {evaluationResult && isChosen && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Rationale & KaTeX Explanation (After Submission) */}
                  {evaluationResult && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-indigo-500/20 text-xs space-y-1 animate-in fade-in duration-150">
                      <span className="font-bold text-amber-400 block">
                        {isAr ? 'التفسير العلمي والقانون الرياضي:' : 'Scientific & Mathematical Rationale:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        <MathRenderer text={isAr ? q.explanationAr : q.explanationEn} inline={true} lang={lang} />
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Action Bar */}
          {!evaluationResult && (
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {isComplete
                  ? (isAr ? 'تمت الإجابة على جميع الأسئلة ٥/٥' : 'All 5 questions answered')
                  : (isAr ? `متبقي إجابة ${formatNum(totalCount - answeredCount)} أسئلة` : `${totalCount - answeredCount} questions remaining`)}
              </span>

              <button
                onClick={handleSubmit}
                disabled={!isComplete}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/20"
              >
                {isAr ? 'تصحيح الاختبار وعرض النتائج' : 'Evaluate Assessment'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
