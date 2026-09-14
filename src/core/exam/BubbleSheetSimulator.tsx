import React, { useState, useEffect } from 'react';
import { Award, Clock, CheckCircle2, RotateCcw } from 'lucide-react';

export interface ExamAnswerKey {
  questionIndex: number; // 1-based index
  correctOption: 'A' | 'B' | 'C' | 'D';
  subject?: string;
}

interface BubbleSheetSimulatorProps {
  totalQuestions?: number;
  answerKey?: ExamAnswerKey[];
  timeLimitMinutes?: number;
  lang?: 'en' | 'ar';
  studentName?: string;
  seatingNumber?: string;
  onExamSubmitted?: (score: number, total: number, answers: Record<number, 'A' | 'B' | 'C' | 'D'>) => void;
}

export const BubbleSheetSimulator: React.FC<BubbleSheetSimulatorProps> = ({
  totalQuestions = 50,
  answerKey = [],
  timeLimitMinutes = 180,
  lang = 'ar',
  studentName = 'طالب الثانوية العامة',
  seatingNumber = '1048592',
  onExamSubmitted
}) => {
  const isAr = lang === 'ar';
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [scoreReport, setScoreReport] = useState<{
    correctCount: number;
    wrongCount: number;
    omittedCount: number;
    percentage: number;
  } | null>(null);

  // Countdown timer
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeftSeconds]);

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBubbleClick = (qNum: number, opt: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qNum]: prev[qNum] === opt ? (undefined as any) : opt
    }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    let correct = 0;
    let wrong = 0;
    let omitted = 0;

    // Build map from answerKey
    const keyMap: Record<number, 'A' | 'B' | 'C' | 'D'> = {};
    answerKey.forEach(k => {
      keyMap[k.questionIndex] = k.correctOption;
    });

    for (let i = 1; i <= totalQuestions; i++) {
      const studentAns = selectedAnswers[i];
      const correctAns = keyMap[i] || 'A'; // fallback if no key provided

      if (!studentAns) {
        omitted++;
      } else if (studentAns === correctAns) {
        correct++;
      } else {
        wrong++;
      }
    }

    const percentage = parseFloat(((correct / totalQuestions) * 100).toFixed(1));
    const report = { correctCount: correct, wrongCount: wrong, omittedCount: omitted, percentage };
    setScoreReport(report);
    setIsSubmitted(true);

    if (onExamSubmitted) {
      onExamSubmitted(correct, totalQuestions, selectedAnswers);
    }
  };

  const handleReset = () => {
    if (window.confirm(isAr ? 'هل تريد إعادة تعيين ورقة الإجابة وبدء المحاكاة من جديد؟' : 'Reset bubble sheet and restart exam?')) {
      setSelectedAnswers({});
      setIsSubmitted(false);
      setScoreReport(null);
      setTimeLeftSeconds(timeLimitMinutes * 60);
    }
  };

  const optionLabels = {
    A: isAr ? 'أ' : 'A',
    B: isAr ? 'ب' : 'B',
    C: isAr ? 'ج' : 'C',
    D: isAr ? 'د' : 'D'
  };

  // Build answer map for grading view
  const answerMap: Record<number, 'A' | 'B' | 'C' | 'D'> = {};
  answerKey.forEach(k => {
    answerMap[k.questionIndex] = k.correctOption;
  });

  return (
    <div className="bg-slate-900 border-2 border-slate-700/80 rounded-3xl p-5 shadow-2xl text-slate-100 font-sans" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Official OMR Sheet Header */}
      <div className="bg-white text-slate-900 rounded-2xl p-5 border-2 border-slate-300 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-900 pb-4">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-500">
              {isAr ? 'جمهورية مصر العربية • وزارة التربية والتعليم' : 'Arab Republic of Egypt • Ministry of Education'}
            </div>
            <h3 className="text-lg font-black tracking-tight text-slate-900 mt-0.5">
              {isAr ? 'ورقة إجابة البابل شيت الرسمية (OMR Answer Sheet)' : 'Official Standardized OMR Bubble Sheet'}
            </h3>
            <div className="text-xs text-slate-600 font-medium">
              {isAr ? 'شهادة إتمام الدراسة الثانوية العامة' : 'General Secondary Education Certificate Examination'}
            </div>
          </div>

          {/* Barcode, Student Name & Seating Number Block */}
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl border border-slate-300">
            <div className="text-center font-mono">
              <span className="text-[10px] text-slate-500 block">{studentName}</span>
              <span className="text-sm font-black tracking-widest text-slate-900">{seatingNumber}</span>
            </div>
            {/* SVG Simulated Barcode */}
            <div className="h-8 flex items-center gap-0.5 px-2 bg-white rounded border border-slate-200">
              {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 2].map((w, i) => (
                <div key={i} className="bg-slate-950 h-6" style={{ width: `${w}px` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Instructions & Timer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-900 inline-block" />
            <span className="font-semibold">{isAr ? 'تظليل الدائرة بالكامل بالقلم الرصاص (2B)' : 'Completely fill bubble with 2B pencil'}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-lg ${
              timeLeftSeconds < 600 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-200 text-slate-800'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                {isAr ? 'تسليم ورقة الإجابة والتصحيح الإلكتروني' : 'Submit & OMR Grade'}
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

      {/* Score Breakdown Banner if submitted */}
      {scoreReport && (
        <div className="mt-4 p-4 rounded-2xl bg-slate-950 border-2 border-emerald-500/40 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  {isAr ? 'نتيجة الفحص الضوئي الإلكتروني (OMR Result)' : 'OMR Scoring & Diagnostic Report'}
                </h4>
                <div className="flex items-center gap-3 mt-1 text-xs">
                  <span className="text-emerald-400 font-bold">{isAr ? 'صحيحة:' : 'Correct:'} {scoreReport.correctCount}</span>
                  <span className="text-rose-400 font-bold">{isAr ? 'خاطئة:' : 'Wrong:'} {scoreReport.wrongCount}</span>
                  <span className="text-amber-400 font-bold">{isAr ? 'متروكة:' : 'Omitted:'} {scoreReport.omittedCount}</span>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-2 bg-slate-900 px-5 py-2.5 rounded-2xl border border-emerald-500/30 font-mono">
              <span className="text-3xl font-black text-emerald-300">{scoreReport.percentage}%</span>
              <span className="text-xs text-slate-400">({scoreReport.correctCount}/{totalQuestions})</span>
            </div>
          </div>
        </div>
      )}

      {/* Bubble Grid Layout (Organized into columns of 10 for official sheet look) */}
      <div className="mt-5 bg-white text-slate-900 p-5 rounded-2xl border border-slate-300 shadow-inner overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 min-w-[600px]">
          {Array.from({ length: 5 }).map((_, colIdx) => {
            const startQ = colIdx * 10 + 1;
            const endQ = Math.min(totalQuestions, startQ + 9);

            return (
              <div key={colIdx} className="space-y-2 border-r last:border-r-0 border-slate-200 pr-3 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-3">
                {/* Column header */}
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-200 flex justify-between px-1">
                  <span>Q#</span>
                  <div className="flex gap-3 px-1 font-mono">
                    <span>{optionLabels.A}</span>
                    <span>{optionLabels.B}</span>
                    <span>{optionLabels.C}</span>
                    <span>{optionLabels.D}</span>
                  </div>
                </div>

                {/* 10 Questions */}
                {Array.from({ length: endQ - startQ + 1 }).map((_, rowIdx) => {
                  const qNum = startQ + rowIdx;
                  const selected = selectedAnswers[qNum];
                  const correctOpt = answerMap[qNum] || 'A';
                  const isWrong = isSubmitted && selected && selected !== correctOpt;
                  const isCorrect = isSubmitted && selected === correctOpt;
                  const isOmitted = isSubmitted && !selected;

                  return (
                    <div
                      key={qNum}
                      className={`flex items-center justify-between p-1 rounded-lg transition-colors ${
                        isCorrect ? 'bg-emerald-50' : isWrong ? 'bg-rose-50' : isOmitted ? 'bg-amber-50/50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold w-6 ${
                        isCorrect ? 'text-emerald-700' : isWrong ? 'text-rose-700' : 'text-slate-600'
                      }`}>
                        {qNum.toString().padStart(2, '0')}
                      </span>

                      <div className="flex items-center gap-2">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                          const isFilled = selected === opt;
                          const isTargetCorrect = isSubmitted && correctOpt === opt;

                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleBubbleClick(qNum, opt)}
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
                                  : 'border-slate-400 text-slate-500 hover:border-slate-800'
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
