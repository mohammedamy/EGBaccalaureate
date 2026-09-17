import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Award,
  Clock,
  CheckCircle2,
  RotateCcw,
  Flag,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Calculator,
  Columns,
  Sparkles,
  BookOpen,
  Check,
  FileSpreadsheet,
  HelpCircle,
  TrendingUp,
  Printer,
} from 'lucide-react';
import { MathRenderer } from '../../components/MathRenderer';
import { TextbookDiagram } from '../../components/TextbookDiagram';
import { toHindiDigits } from '../../utils/arabicNumerals';
import type { GeneratedQuestion } from '../../services/mistakeNotebookService';
import {
  classifyBloomLevel,
  BLOOM_LEVELS_METADATA,
  computeBloomDiagnostics,
  type BloomDiagnosticsReport,
  type BloomLevel,
} from '../../services/bloomTaxonomyService';

export interface ExamAnswerKey {
  questionIndex: number; // 1-based index
  correctOption: 'A' | 'B' | 'C' | 'D';
  subject?: string;
  points?: number;
}

export interface BubbleSheetSimulatorProps {
  totalQuestions?: number;
  answerKey?: ExamAnswerKey[];
  timeLimitMinutes?: number;
  lang?: 'en' | 'ar';
  studentName?: string;
  seatingNumber?: string;
  questions?: GeneratedQuestion[];
  onOpenScratchpad?: () => void;
  onOpenDesmos?: () => void;
  onExamSubmitted?: (score: number, total: number, answers: Record<number, 'A' | 'B' | 'C' | 'D'>) => void;
}

export const BubbleSheetSimulator: React.FC<BubbleSheetSimulatorProps> = ({
  totalQuestions: propTotalQuestions = 50,
  answerKey = [],
  timeLimitMinutes = 180,
  lang = 'ar',
  studentName = 'طالب الثانوية العامة',
  seatingNumber = '1048592',
  questions = [],
  onOpenScratchpad,
  onOpenDesmos,
  onExamSubmitted,
}) => {
  const isAr = lang === 'ar';
  const effectiveTotalQuestions = questions.length > 0 ? questions.length : propTotalQuestions;

  // Active question index in tablet mode (0-based)
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'dual' | 'tablet' | 'sheet'>(questions.length > 0 ? 'dual' : 'sheet');

  const [scoreReport, setScoreReport] = useState<{
    correctCount: number;
    wrongCount: number;
    omittedCount: number;
    percentage: number;
    earnedPoints?: number;
    totalPoints?: number;
    section1Earned?: number;
    section1Total?: number;
    section2Earned?: number;
    section2Total?: number;
    bloomDiagnostics?: BloomDiagnosticsReport;
  } | null>(null);

  // Sync timer if timeLimitMinutes changes
  useEffect(() => {
    setTimeLeftSeconds(timeLimitMinutes * 60);
  }, [timeLimitMinutes]);

  const optionLabels = useMemo(
    () => ({
      A: isAr ? 'أ' : 'A',
      B: isAr ? 'ب' : 'B',
      C: isAr ? 'ج' : 'C',
      D: isAr ? 'د' : 'D',
    }),
    [isAr]
  );

  const letterToIdx: Record<'A' | 'B' | 'C' | 'D', number> = { A: 0, B: 1, C: 2, D: 3 };
  const idxToLetter: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  // Build answer and points map
  const answerMap = useMemo(() => {
    const map: Record<number, 'A' | 'B' | 'C' | 'D'> = {};
    if (questions.length > 0) {
      questions.forEach((q, idx) => {
        map[idx + 1] = idxToLetter[q.correctIndex] || 'A';
      });
    } else {
      answerKey.forEach((k) => {
        map[k.questionIndex] = k.correctOption;
      });
    }
    return map;
  }, [questions, answerKey]);

  const pointsMap = useMemo(() => {
    const map: Record<number, number> = {};
    if (questions.length > 0) {
      questions.forEach((q, idx) => {
        map[idx + 1] = q.points ?? (q.difficulty === 'hots' ? 2 : 1);
      });
    } else {
      answerKey.forEach((k) => {
        if (k.points) map[k.questionIndex] = k.points;
      });
    }
    return map;
  }, [questions, answerKey]);

  // Handle submit logic
  const handleSubmit = useCallback(() => {
    if (isSubmitted) return;

    let correct = 0;
    let wrong = 0;
    let omitted = 0;
    let earnedPoints = 0;
    let totalPoints = 0;
    let hasExplicitPoints = false;

    let section1Earned = 0;
    let section1Total = 0;
    let section2Earned = 0;
    let section2Total = 0;

    for (let i = 1; i <= effectiveTotalQuestions; i++) {
      const studentAns = selectedAnswers[i];
      const correctAns = answerMap[i] || 'A';
      const qPts = pointsMap[i] ?? 1;
      totalPoints += qPts;
      if (pointsMap[i] !== undefined) hasExplicitPoints = true;

      if (qPts === 1) section1Total += 1;
      else section2Total += qPts;

      if (!studentAns) {
        omitted++;
      } else if (studentAns === correctAns) {
        correct++;
        earnedPoints += qPts;
        if (qPts === 1) section1Earned += 1;
        else section2Earned += qPts;
      } else {
        wrong++;
      }
    }

    const percentage =
      hasExplicitPoints && totalPoints > 0
        ? parseFloat(((earnedPoints / totalPoints) * 100).toFixed(1))
        : parseFloat(((correct / effectiveTotalQuestions) * 100).toFixed(1));

    // Calculate Bloom diagnostics if questions are present
    let bloomDiagnostics: BloomDiagnosticsReport | undefined = undefined;
    if (questions.length > 0) {
      const numericAnswers: Record<number, number> = {};
      Object.entries(selectedAnswers).forEach(([qNum, letter]) => {
        const qIdx = Number(qNum) - 1;
        numericAnswers[qIdx] = letterToIdx[letter];
      });
      bloomDiagnostics = computeBloomDiagnostics(questions, numericAnswers);
    }

    const report = {
      correctCount: correct,
      wrongCount: wrong,
      omittedCount: omitted,
      percentage,
      earnedPoints: hasExplicitPoints ? earnedPoints : undefined,
      totalPoints: hasExplicitPoints ? totalPoints : undefined,
      section1Earned,
      section1Total,
      section2Earned,
      section2Total,
      bloomDiagnostics,
    };

    setScoreReport(report);
    setIsSubmitted(true);

    if (onExamSubmitted) {
      onExamSubmitted(
        hasExplicitPoints ? earnedPoints : correct,
        hasExplicitPoints ? totalPoints : effectiveTotalQuestions,
        selectedAnswers
      );
    }
  }, [
    isSubmitted,
    effectiveTotalQuestions,
    selectedAnswers,
    answerMap,
    pointsMap,
    questions,
    onExamSubmitted,
  ]);

  // Countdown timer
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeftSeconds, handleSubmit]);

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    const formatted = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
    return isAr ? toHindiDigits(formatted) : formatted;
  };

  const handleBubbleClick = (qNum: number, opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qNum]: prev[qNum] === opt ? (undefined as any) : opt,
    }));
    setActiveQuestionIdx(qNum - 1);
  };

  const handleOptionSelect = (qIdx: number, optLetter: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    const qNum = qIdx + 1;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qNum]: prev[qNum] === optLetter ? (undefined as any) : optLetter,
    }));
  };

  const toggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qNum]: !prev[qNum],
    }));
  };

  const handleReset = () => {
    if (
      window.confirm(
        isAr
          ? 'هل تريد إعادة تعيين ورقة الإجابة وبدء المحاكاة من جديد؟'
          : 'Reset bubble sheet and restart exam?'
      )
    ) {
      setSelectedAnswers({});
      setFlaggedQuestions({});
      setIsSubmitted(false);
      setScoreReport(null);
      setTimeLeftSeconds(timeLimitMinutes * 60);
      setActiveQuestionIdx(0);
    }
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isSubmitted || questions.length === 0) return;
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      const qNum = activeQuestionIdx + 1;
      if (e.key === '1' || e.key === 'a' || e.key === 'A') {
        handleOptionSelect(activeQuestionIdx, 'A');
      } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
        handleOptionSelect(activeQuestionIdx, 'B');
      } else if (e.key === '3' || e.key === 'c' || e.key === 'C') {
        handleOptionSelect(activeQuestionIdx, 'C');
      } else if (e.key === '4' || e.key === 'd' || e.key === 'D') {
        handleOptionSelect(activeQuestionIdx, 'D');
      } else if (e.key === 'ArrowRight') {
        if (isAr) {
          if (activeQuestionIdx > 0) setActiveQuestionIdx((prev) => prev - 1);
        } else {
          if (activeQuestionIdx < effectiveTotalQuestions - 1) setActiveQuestionIdx((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (isAr) {
          if (activeQuestionIdx < effectiveTotalQuestions - 1) setActiveQuestionIdx((prev) => prev + 1);
        } else {
          if (activeQuestionIdx > 0) setActiveQuestionIdx((prev) => prev - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFlag(qNum);
      }
    },
    [activeQuestionIdx, effectiveTotalQuestions, isAr, isSubmitted, questions.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const activeQuestion: GeneratedQuestion | undefined = questions[activeQuestionIdx];
  const activeQuestionNum = activeQuestionIdx + 1;
  const activeSelected = selectedAnswers[activeQuestionNum];
  const activePoints = pointsMap[activeQuestionNum] ?? 1;
  const activeBloom = activeQuestion ? classifyBloomLevel(activeQuestion) : 'application';
  const bloomMeta = BLOOM_LEVELS_METADATA[activeBloom];

  // Counts
  const answeredCount = Object.keys(selectedAnswers).filter((k) => selectedAnswers[Number(k)]).length;
  const flaggedCount = Object.keys(flaggedQuestions).filter((k) => flaggedQuestions[Number(k)]).length;
  const remainingCount = effectiveTotalQuestions - answeredCount;

  return (
    <div
      className="bg-slate-950 border-2 border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans space-y-6"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Official OMR Sheet & Tablet Header */}
      <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 border-2 border-slate-300 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-900 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md">
              OMR
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500">
                {isAr
                  ? 'جمهورية مصر العربية • وزارة التربية والتعليم والتعليم الفني'
                  : 'Arab Republic of Egypt • Ministry of Education & Technical Education'}
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 mt-0.5 flex items-center gap-2">
                <span>
                  {isAr
                    ? 'نظام التابلت والـ OMR المزدوج (محاكاة الاختبار الإلكتروني الوزاري)'
                    : 'Electronic Tablet & OMR Dual Workstation Simulator'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  {isAr ? 'معتمد رسمياً' : 'Official MoE'}
                </span>
              </h3>
              <div className="text-xs text-slate-600 font-medium">
                {isAr
                  ? 'شهادة إتمام الدراسة الثانوية العامة - مطابقة للمواصفات القياسية للبابل شيت'
                  : 'Egyptian Thanawya Amma Examination - Standardized Ministerial Booklet Specs'}
              </div>
            </div>
          </div>

          {/* Barcode & Seating Number Block */}
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-300">
            <div className="text-center font-mono">
              <span className="text-[10px] text-slate-500 block">{studentName}</span>
              <span className="text-xs sm:text-sm font-black tracking-widest text-slate-900">
                {isAr ? toHindiDigits(seatingNumber) : seatingNumber}
              </span>
            </div>
            {/* SVG Simulated Barcode */}
            <div className="h-7 flex items-center gap-0.5 px-1.5 bg-white rounded border border-slate-200">
              {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 2].map((w, i) => (
                <div key={i} className="bg-slate-950 h-5" style={{ width: `${w}px` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Toolbar: View Switchers, Status Chips, Countdown Timer, Submit */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-slate-700">
          {/* View Mode Switcher */}
          {questions.length > 0 && (
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-300 font-bold">
              <button
                type="button"
                onClick={() => setViewMode('dual')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'dual'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض مزدوج' : 'Dual View'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('tablet')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'tablet'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isAr ? 'التابلت فقط' : 'Tablet Only'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('sheet')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'sheet'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>{isAr ? 'البابل شيت فقط' : 'OMR Only'}</span>
              </button>
            </div>
          )}

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
              <Check className="w-3.5 h-3.5" />
              <span>{isAr ? `المجاب: ${answeredCount}` : `Answered: ${answeredCount}`}</span>
            </span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
              <Flag className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{isAr ? `للمراجعة: ${flaggedCount}` : `Flagged: ${flaggedCount}`}</span>
            </span>
            <span className="text-[11px] font-bold text-slate-500">
              {isAr ? `المتبقي: ${remainingCount}` : `Remaining: ${remainingCount}`}
            </span>
          </div>

          {/* Timer & Submit Controls */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-lg transition-all ${
                timeLeftSeconds < 300
                  ? 'bg-rose-100 text-rose-700 animate-pulse border border-rose-300'
                  : timeLeftSeconds < 900
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-slate-200 text-slate-800'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="no-print px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-300 shadow-xs cursor-pointer transition-all flex items-center gap-1.5"
              title={isAr ? 'طباعة ورقة البابل شيت' : 'Print OMR Sheet'}
            >
              <Printer className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">{isAr ? 'طباعة البابل شيت' : 'Print OMR'}</span>
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                {isAr ? 'تسليم ورقة الإجابة والتصحيح' : 'Submit & Grade'}
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                {isAr ? 'إعادة الاختبار' : 'Retake Exam'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Score Breakdown Banner & Bloom's Cognitive Report Card (Upon Submission) */}
      {scoreReport && (
        <div className="p-5 rounded-3xl bg-slate-900 border-2 border-emerald-500/50 shadow-2xl space-y-5 animate-fadeIn">
          {/* Top Score Summary */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-100 flex items-center gap-2">
                  <span>{isAr ? 'نتيجة الفحص والتصحيح الضوئي الإلكتروني (OMR)' : 'OMR Scoring & Verification Report'}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                    {scoreReport.percentage >= 85
                      ? isAr ? 'أوائل جمهورية 🏆' : 'Elite Republic 🏆'
                      : scoreReport.percentage >= 65
                      ? isAr ? 'اجتياز معتمد 👍' : 'MoE Pass 👍'
                      : isAr ? 'بحاجة لدعم 💡' : 'Remediation Needed 💡'}
                  </span>
                </h4>
                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs">
                  <span className="text-emerald-400 font-bold">
                    {isAr ? 'الإجابات الصحيحة:' : 'Correct:'} {scoreReport.correctCount}
                  </span>
                  <span className="text-rose-400 font-bold">
                    {isAr ? 'الإجابات الخاطئة:' : 'Wrong:'} {scoreReport.wrongCount}
                  </span>
                  <span className="text-amber-400 font-bold">
                    {isAr ? 'الأسئلة المتروكة:' : 'Omitted:'} {scoreReport.omittedCount}
                  </span>
                  {scoreReport.section1Total !== undefined && (
                    <span className="text-cyan-400 font-bold">
                      {isAr
                        ? `القسم الأول (١ د): ${scoreReport.section1Earned}/${scoreReport.section1Total}`
                        : `Sec 1 (1pt): ${scoreReport.section1Earned}/${scoreReport.section1Total}`}
                    </span>
                  )}
                  {scoreReport.section2Total !== undefined && (
                    <span className="text-indigo-400 font-bold">
                      {isAr
                        ? `القسم الثاني (٢ د): ${scoreReport.section2Earned}/${scoreReport.section2Total}`
                        : `Sec 2 (2pt): ${scoreReport.section2Earned}/${scoreReport.section2Total}`}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-2 bg-slate-950 px-6 py-3 rounded-2xl border border-emerald-500/30 font-mono shadow-inner">
              <span className="text-4xl font-black text-emerald-300">{scoreReport.percentage}%</span>
              <span className="text-xs text-slate-400">
                {scoreReport.totalPoints !== undefined
                  ? `(${scoreReport.earnedPoints}/${scoreReport.totalPoints} ${isAr ? 'درجة' : 'marks'})`
                  : `(${scoreReport.correctCount}/${effectiveTotalQuestions})`}
              </span>
            </div>
          </div>

          {/* Bloom's Taxonomy Cognitive Diagnostics Card */}
          {scoreReport.bloomDiagnostics && (
            <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                  <h5 className="text-sm font-bold text-slate-100">
                    {isAr
                      ? 'التقرير التشخيصي لمستويات بلوم المعرفية (Bloom’s Cognitive Taxonomy)'
                      : 'Bloom’s Cognitive Taxonomy Diagnostic Profile'}
                  </h5>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">{isAr ? 'مؤشر النضج المعرفي:' : 'Cognitive Maturity Index:'}</span>
                  <span className="font-mono font-black text-indigo-300 text-sm">
                    {scoreReport.bloomDiagnostics.overallCognitiveIndex}%
                  </span>
                </div>
              </div>

              {/* 4-Domain Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(['remembering', 'understanding', 'application', 'analysis'] as BloomLevel[]).map((lvl) => {
                  const score = scoreReport.bloomDiagnostics!.levels[lvl];
                  const meta = score.info;
                  return (
                    <div
                      key={lvl}
                      className={`p-3 rounded-xl border ${meta.borderColor} ${meta.badgeBg} flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className={meta.color}>{isAr ? meta.shortLabelAr : meta.shortLabelEn}</span>
                          <span className="font-mono font-black text-slate-200">{score.accuracyPct}%</span>
                        </div>
                        <div className="w-full bg-slate-900/60 rounded-full h-2 overflow-hidden border border-slate-800">
                          <div
                            className={`h-full transition-all duration-700 ${
                              score.accuracyPct >= 80
                                ? 'bg-emerald-500'
                                : score.accuracyPct >= 60
                                ? 'bg-indigo-500'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${score.accuracyPct}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                        <span>
                          {isAr ? `${score.earnedMarks}/${score.totalMarks} درجة` : `${score.earnedMarks}/${score.totalMarks} pts`}
                        </span>
                        <span>
                          {isAr ? `المعيار الوزاري: ${score.targetPct}%` : `MoE Target: ${score.targetPct}%`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tailored Diagnostic Advice */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? 'التحليل الاستراتيجي وخطة التميز:' : 'Strategic Remediation & Action Plan:'}</span>
                </div>
                <p className="leading-relaxed">
                  {isAr
                    ? scoreReport.bloomDiagnostics.diagnosticSummaryAr
                    : scoreReport.bloomDiagnostics.diagnosticSummaryEn}
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px] pt-1 border-t border-slate-800">
                  {(isAr ? scoreReport.bloomDiagnostics.actionPlanAr : scoreReport.bloomDiagnostics.actionPlanEn).map(
                    (step, sIdx) => (
                      <li key={sIdx}>{step}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Examination Workstation Layout */}
      <div
        className={`grid gap-6 ${
          viewMode === 'dual' && questions.length > 0
            ? 'grid-cols-1 lg:grid-cols-12'
            : 'grid-cols-1'
        }`}
      >
        {/* Left: Active Tablet Question Stage (Shown in 'dual' and 'tablet' modes) */}
        {questions.length > 0 && viewMode !== 'sheet' && activeQuestion && (
          <div
            className={`space-y-4 ${
              viewMode === 'dual' ? 'lg:col-span-7 xl:col-span-8' : 'w-full'
            }`}
          >
            <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
              {/* Question Navigation Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-black flex items-center justify-center font-mono text-sm">
                    {isAr ? toHindiDigits(activeQuestionNum) : activeQuestionNum}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-200">
                        {isAr ? activeQuestion.chapterTitleAr : activeQuestion.chapterTitleEn}
                      </span>
                      {activePoints === 2 ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                          {isAr ? 'القسم الثاني: درجتان (HOTS)' : 'Section 2: 2 Marks'}
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                          {isAr ? 'القسم الأول: درجة واحدة' : 'Section 1: 1 Mark'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                      <span className={bloomMeta.color}>
                        {isAr ? `مستوى بلوم: ${bloomMeta.shortLabelAr}` : `Bloom: ${bloomMeta.shortLabelEn}`}
                      </span>
                      <span>•</span>
                      <span>
                        {isAr
                          ? `السؤال ${toHindiDigits(activeQuestionNum)} من ${toHindiDigits(effectiveTotalQuestions)}`
                          : `Question ${activeQuestionNum} of ${effectiveTotalQuestions}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Question Tools: Flag, Scratchpad, Desmos */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleFlag(activeQuestionNum)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      flaggedQuestions[activeQuestionNum]
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-sm'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Flag
                      className={`w-3.5 h-3.5 ${
                        flaggedQuestions[activeQuestionNum] ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    />
                    <span>{isAr ? 'مراجعة' : 'Flag'}</span>
                  </button>

                  {onOpenScratchpad && (
                    <button
                      type="button"
                      onClick={onOpenScratchpad}
                      className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                      title={isAr ? 'المسودة الحسابية' : 'Math Scratchpad'}
                    >
                      <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline">{isAr ? 'المسودة' : 'Scratchpad'}</span>
                    </button>
                  )}

                  {onOpenDesmos && (
                    <button
                      type="button"
                      onClick={onOpenDesmos}
                      className="px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                      title={isAr ? 'الحاسبة البيانية' : 'Desmos Calculator'}
                    >
                      <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="hidden sm:inline">{isAr ? 'الحاسبة' : 'Desmos'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Question Text Body */}
              <div className="py-4 space-y-4">
                <div className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                  <MathRenderer text={isAr ? activeQuestion.questionAr : activeQuestion.questionEn} />
                </div>

                {/* Optional Textbook Diagram */}
                {activeQuestion.diagramType && (
                  <div className="flex justify-center p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
                    <TextbookDiagram type={activeQuestion.diagramType} lang={lang} />
                  </div>
                )}

                {/* 4 Interactive Option Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {idxToLetter.map((optLetter, optIdx) => {
                    const isSelected = activeSelected === optLetter;
                    const optContent = isAr
                      ? activeQuestion.optionsAr[optIdx]
                      : activeQuestion.optionsEn[optIdx];
                    const isCorrectAnswer = isSubmitted && activeQuestion.correctIndex === optIdx;

                    return (
                      <button
                        key={optLetter}
                        type="button"
                        onClick={() => handleOptionSelect(activeQuestionIdx, optLetter)}
                        disabled={isSubmitted}
                        className={`p-3.5 rounded-2xl border-2 text-start transition-all cursor-pointer relative flex items-start gap-3 select-none ${
                          isSelected
                            ? isSubmitted
                              ? isCorrectAnswer
                                ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
                                : 'bg-rose-950/50 border-rose-500 text-rose-200'
                              : 'bg-indigo-950/60 border-indigo-500 text-white shadow-lg shadow-indigo-500/20 ring-2 ring-indigo-500/30'
                            : isCorrectAnswer
                            ? 'bg-emerald-950/30 border-emerald-500/80 text-emerald-200 ring-2 ring-emerald-500/30'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-900/60'
                        }`}
                      >
                        {/* Radio / Graphite Bubble Indicator */}
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0 transition-all font-mono ${
                            isSelected
                              ? isSubmitted
                                ? isCorrectAnswer
                                  ? 'bg-emerald-500 border-emerald-400 text-white'
                                  : 'bg-rose-500 border-rose-400 text-white'
                                : 'bg-indigo-500 border-indigo-400 text-white shadow-inner'
                              : isCorrectAnswer
                              ? 'border-emerald-400 bg-emerald-900 text-emerald-200 font-black'
                              : 'border-slate-600 text-slate-400'
                          }`}
                        >
                          {optionLabels[optLetter]}
                        </div>

                        {/* Option Text */}
                        <div className="text-xs sm:text-sm pt-0.5 leading-relaxed flex-1">
                          <MathRenderer text={optContent || ''} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card upon submission */}
                {isSubmitted && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center gap-2 font-bold text-indigo-300">
                      <HelpCircle className="w-4 h-4" />
                      <span>{isAr ? 'خطوات الحل والتعليل الوزاري النموذجي:' : 'Ministry Step-by-Step Solution:'}</span>
                    </div>
                    <div className="space-y-1.5 text-slate-300 font-sans">
                      {(isAr ? activeQuestion.explanationAr : activeQuestion.explanationEn)?.map((step, idx) => (
                        <div key={idx}>
                          <MathRenderer text={step} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tablet Footer: Previous / Next Navigation */}
              <div className="flex items-center justify-between pt-3.5 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveQuestionIdx((prev) => Math.max(0, prev - 1))}
                  disabled={activeQuestionIdx === 0}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <ChevronRight className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
                  <span>{isAr ? 'السؤال السابق' : 'Previous'}</span>
                </button>

                <div className="text-[11px] text-slate-500 hidden sm:block font-mono">
                  {isAr
                    ? 'اختصارات: [1-4] للاختيار • [←/→] للتنقل • [F] للمراجعة'
                    : 'Shortcuts: [1-4] Select • [←/→] Navigate • [F] Flag'}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveQuestionIdx((prev) => Math.min(effectiveTotalQuestions - 1, prev + 1))}
                  disabled={activeQuestionIdx === effectiveTotalQuestions - 1}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-md shadow-indigo-600/20"
                >
                  <span>{isAr ? 'السؤال التالي' : 'Next'}</span>
                  <ChevronLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right: Authentic OMR Bubble Sheet (Always active in 'sheet' and 'dual' modes) */}
        {viewMode !== 'tablet' && (
          <div
            className={`${
              viewMode === 'dual' && questions.length > 0
                ? 'lg:col-span-5 xl:col-span-4'
                : 'w-full'
            }`}
          >
            <div className="bg-white text-slate-900 p-4 sm:p-5 rounded-3xl border-2 border-slate-300 shadow-xl overflow-hidden">
              {/* OMR Column Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                    {isAr ? 'ورقة إجابة البابل شيت الرسمية' : 'Official OMR Answer Grid'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {isAr ? `${effectiveTotalQuestions} سؤالاً` : `${effectiveTotalQuestions} Questions`}
                </div>
              </div>

              {/* Bubble Grid Layout (Organized into vertical sub-columns) */}
              <div className="max-h-[580px] overflow-y-auto pr-1 rtl:pr-0 rtl:pl-1 space-y-1.5 custom-scrollbar">
                {Array.from({ length: effectiveTotalQuestions }).map((_, idx) => {
                  const qNum = idx + 1;
                  const selected = selectedAnswers[qNum];
                  const correctOpt = answerMap[qNum] || 'A';
                  const isWrong = isSubmitted && selected && selected !== correctOpt;
                  const isCorrect = isSubmitted && selected === correctOpt;
                  const isOmitted = isSubmitted && !selected;
                  const isCurrent = questions.length > 0 && activeQuestionIdx === idx;
                  const isFlagged = flaggedQuestions[qNum];
                  const pts = pointsMap[qNum];

                  return (
                    <div
                      key={qNum}
                      onClick={() => {
                        if (questions.length > 0) setActiveQuestionIdx(idx);
                      }}
                      className={`flex items-center justify-between px-2 py-1 rounded-xl transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-indigo-50 border-2 border-indigo-500 shadow-sm'
                          : isCorrect
                          ? 'bg-emerald-50/80 border border-emerald-200'
                          : isWrong
                          ? 'bg-rose-50/80 border border-rose-200'
                          : isOmitted
                          ? 'bg-amber-50/50 border border-amber-200'
                          : 'hover:bg-slate-100 border border-transparent'
                      }`}
                    >
                      {/* Question Index & Badges */}
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-mono font-black w-6 ${
                            isCurrent
                              ? 'text-indigo-700'
                              : isCorrect
                              ? 'text-emerald-700'
                              : isWrong
                              ? 'text-rose-700'
                              : 'text-slate-700'
                          }`}
                        >
                          {qNum.toString().padStart(2, '0')}
                        </span>

                        {isFlagged && (
                          <Flag className="w-3 h-3 fill-amber-500 text-amber-500" />
                        )}

                        {pts === 2 && (
                          <span className="text-[9px] px-1 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">
                            2{isAr ? 'د' : 'p'}
                          </span>
                        )}
                      </div>

                      {/* 4 Bubble Buttons */}
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                          const isFilled = selected === opt;
                          const isTargetCorrect = isSubmitted && correctOpt === opt;

                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBubbleClick(qNum, opt);
                              }}
                              disabled={isSubmitted}
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold font-mono transition-all select-none cursor-pointer ${
                                isFilled
                                  ? isSubmitted
                                    ? isCorrect
                                      ? 'bg-emerald-600 border-emerald-700 text-white shadow-inner'
                                      : 'bg-rose-600 border-rose-700 text-white shadow-inner'
                                    : 'bg-slate-900 border-slate-950 text-white shadow-inner'
                                  : isTargetCorrect
                                  ? 'border-emerald-600 text-emerald-700 bg-emerald-100 font-black ring-2 ring-emerald-400'
                                  : 'border-slate-400 text-slate-600 hover:border-slate-800'
                              }`}
                            >
                              {optionLabels[opt]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Instructions footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
                <span>{isAr ? 'تظليل الدائرة بالكامل بالقلم الرصاص (2B)' : 'Fill circle completely with 2B pencil'}</span>
                <span>{isAr ? 'التصحيح آلي بالماسح الضوئي' : 'Automatic OMR Scanner'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
