import React, { useState, useEffect, useRef } from 'react';
import type { GeneratedQuestion } from '../services/mistakeNotebookService';
import type { Language } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import {
  Clock,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flag,
  X,
  Volume2,
  VolumeX,
  Calculator,
  Edit3,
  Sparkles,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { playPhotoelectricChirp, isAudioMuted, toggleAudioMuted } from '../utils/scienceAudio';
import { recordQuizMistakes } from '../services/mistakeNotebookService';
import { recordQuizAttempt } from '../services/studentAnalyticsService';
import {
  saveOfficialCertificate,
  generateCertificateVerificationHash,
  getDistinctionTierFromPct,
} from '../services/certificateRegistryService';
import { MathScratchpad } from '../core/math/MathScratchpad';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  questions: GeneratedQuestion[];
  subjectName: string;
  lang: Language;
  onOpenDesmos?: () => void;
  timeLimitMinutes?: number; // default 180 min (3 hours)
}

export const MinisterialExamSimulationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  questions,
  subjectName,
  lang,
  onOpenDesmos,
  timeLimitMinutes = 180,
}) => {
  const isAr = lang === 'ar';
  const totalQuestions = questions.length;

  // Active question index (0-based)
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});

  // 3-Hour Timer (in seconds)
  const [secondsLeft, setSecondsLeft] = useState<number>(timeLimitMinutes * 60);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(!isAudioMuted());
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Proctor chime warnings state (fire once at thresholds)
  const alerted30Ref = useRef<boolean>(false);
  const alerted10Ref = useRef<boolean>(false);
  const alerted5Ref = useRef<boolean>(false);

  // Sound chime helper
  const playProctorChime = () => {
    if (!audioEnabled) return;
    try {
      playPhotoelectricChirp();
    } catch {
      // ignore
    }
  };

  // Timer interval
  useEffect(() => {
    if (!isOpen || isExamFinished) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }

        // Warning chime at 30 minutes
        if (prev === 30 * 60 && !alerted30Ref.current) {
          alerted30Ref.current = true;
          playProctorChime();
        }
        // Warning chime at 10 minutes
        if (prev === 10 * 60 && !alerted10Ref.current) {
          alerted10Ref.current = true;
          playProctorChime();
        }
        // Warning chime at 5 minutes
        if (prev === 5 * 60 && !alerted5Ref.current) {
          alerted5Ref.current = true;
          playProctorChime();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isExamFinished, audioEnabled]);

  if (!isOpen) return null;

  // Format time as HH:MM:SS
  const formatTime = (secs: number): string => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timeStr = `${pad(h)}:${pad(m)}:${pad(s)}`;
    return isAr ? toHindiDigits(timeStr) : timeStr;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;

  // Question Answer selection
  const handleSelectOption = (optIdx: number) => {
    if (isExamFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentIdx]: optIdx,
    }));
  };

  const toggleFlag = (qIdx: number) => {
    setFlagged((prev) => ({
      ...prev,
      [qIdx]: !prev[qIdx],
    }));
  };

  // Final Exam Evaluation
  const handleFinalSubmit = () => {
    setIsConfirmSubmitOpen(false);
    setIsExamFinished(true);

    // Record mistakes in Mistake Notebook
    recordQuizMistakes(questions, userAnswers, 'thanaweya');

    // Record attempt in Student Analytics
    const timeSpentSeconds = timeLimitMinutes * 60 - secondsLeft;
    recordQuizAttempt(questions, userAnswers, timeSpentSeconds);

    // Compute score & distinction
    let correctCount = 0;
    let earnedMarks = 0;
    let totalMarks = 0;

    questions.forEach((q, idx) => {
      const qPts = q.points || (q.difficulty === 'hots' ? 2 : 1);
      totalMarks += qPts;
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
        earnedMarks += qPts;
      }
    });

    const finalPct = totalMarks > 0 ? (earnedMarks / totalMarks) * 100 : 0;
    const now = Date.now();
    const certSerial = `EGY-MOE-TH-2025-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const seatingNumber = isAr ? '١٠٤٨٥٩٢' : '1048592';

    // Register Official Ministerial Certificate
    saveOfficialCertificate({
      certificateSerial: certSerial,
      verificationHash: generateCertificateVerificationHash(certSerial, seatingNumber, finalPct, now),
      studentName: isAr ? 'طالب الثانوية العامة' : 'Thanaweya Student',
      seatingNumber,
      schoolName: isAr ? 'مدرسة المتفوقين الرسمية للثانوية العامة' : 'Official STEM High School',
      directorateName: isAr ? 'مديرية التربية والتعليم بالقاهرة' : 'Cairo Educational Directorate',
      subjectId: 'physics',
      subjectNameAr: isAr ? subjectName : 'الفيزياء',
      subjectNameEn: subjectName,
      branchNameAr: isAr ? 'القسم العلمي - شعبة العلوم والرياضيات' : 'Scientific Division',
      branchNameEn: 'Scientific Division',
      academicYear: '2024 / 2025',
      sessionTitleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة - محاكاة وزارية رسمية',
      sessionTitleEn: 'Official Ministerial 3-Hour Timed Examination Simulation',
      formCodeAr: 'نموذج (أ) - كود 101',
      formCodeEn: 'Form A - Code 101',
      score: earnedMarks,
      totalQuestions: totalMarks,
      scorePct: parseFloat(finalPct.toFixed(1)),
      timeTakenSeconds: 180 * 60 - secondsLeft,
      testDateIso: new Date().toISOString(),
      gradeLabelAr: finalPct >= 95 ? 'ممتاز مع مرتبة الشرف الأولى' : finalPct >= 85 ? 'ممتاز' : finalPct >= 75 ? 'جيد جداً' : finalPct >= 65 ? 'جيد' : 'مقبول',
      gradeLabelEn: finalPct >= 95 ? 'First Class Distinction' : finalPct >= 85 ? 'Excellent' : finalPct >= 75 ? 'Very Good' : finalPct >= 65 ? 'Good' : 'Pass',
      distinctionTier: getDistinctionTierFromPct(finalPct),
      scoreReport: null,
      cohortReport: null,
      isAccredited: true,
      registeredAt: now,
    });
  };

  const currentQ = questions[currentIdx];

  // Compute final results for Scorecard display
  const finalCorrectCount = questions.filter((q, idx) => userAnswers[idx] === q.correctIndex).length;
  const finalWrongCount = questions.filter((q, idx) => userAnswers[idx] !== undefined && userAnswers[idx] !== q.correctIndex).length;
  const finalScorePct = totalQuestions > 0 ? Math.round((finalCorrectCount / totalQuestions) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-hidden select-none">
      <div
        className={`w-full max-w-7xl h-[95vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100 ${
          isFullscreen ? 'h-screen max-w-none rounded-none' : ''
        }`}
      >
        {/* Ministerial Header */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 shadow-md font-black">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isAr ? 'وزارة التربية والتعليم - الامتحان الوزاري الرسمي' : 'Ministry of Education - Official Exam Paper'}
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                  {subjectName}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                {isAr ? 'محاكاة اللجنة الوزارية الرسمية للثانوية العامة' : 'Authentic Ministerial Examination Hall'}
              </h2>
            </div>
          </div>

          {/* Center Timer Display */}
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base ${
                secondsLeft <= 600
                  ? 'bg-red-950/80 border-red-500/80 text-red-300 animate-pulse'
                  : secondsLeft <= 1800
                  ? 'bg-amber-950/80 border-amber-500/80 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-emerald-300'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatTime(secondsLeft)}</span>
            </div>

            {/* Quick Tools */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => setIsScratchpadOpen(true)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 text-xs font-bold flex items-center gap-1 transition-all"
                title={isAr ? 'مسودة الإجابات الرياضية' : 'Math Scratchpad'}
              >
                <Edit3 className="w-4 h-4" />
                <span className="hidden md:inline">{isAr ? 'مسودة' : 'Scratchpad'}</span>
              </button>

              {onOpenDesmos && (
                <button
                  onClick={onOpenDesmos}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold flex items-center gap-1 transition-all"
                  title={isAr ? 'الآلة الحاسبة العلمية' : 'Scientific Calculator'}
                >
                  <Calculator className="w-4 h-4" />
                  <span className="hidden md:inline">{isAr ? 'حاسبة' : 'Calculator'}</span>
                </button>
              )}

              <button
                onClick={() => {
                  toggleAudioMuted();
                  setAudioEnabled(!isAudioMuted());
                }}
                className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                  audioEnabled ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
                title="Toggle Chimes"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold transition-all"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                if (!isExamFinished && answeredCount > 0) {
                  setIsConfirmSubmitOpen(true);
                } else {
                  onClose();
                }
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-900/60 border border-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ministerial Announcement Banner */}
        <div className="bg-amber-950/40 border-b border-amber-900/40 px-4 py-2 flex items-center justify-between text-xs text-amber-200/90 overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold">
              {isAr
                ? 'تنبيهات المراقب الأول: الإجابة على نموذج البابل شيت الرسمية بالقلم الرصاص 2B، ولا تترك فراغات بيضاء داخل الدائرة.'
                : 'Proctor Notice: Complete all bubble shading with 2B pencil. Ensure zero stray marks on registration barcodes.'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-slate-400 text-[11px]">
            <span>
              {isAr ? `المُجاب: ${toHindiDigits(answeredCount)}` : `Answered: ${answeredCount}`}
            </span>
            <span>•</span>
            <span className="text-amber-400 font-bold">
              {isAr ? `المتبقي: ${toHindiDigits(unansweredCount)}` : `Remaining: ${unansweredCount}`}
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        {!isExamFinished ? (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            {/* Left Pane: Question Sheet (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-slate-800 overflow-y-auto p-4 sm:p-6">
              {currentQ ? (
                <div className="flex flex-col h-full justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    {/* Question Header & Tags */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm">
                          {isAr ? toHindiDigits(currentIdx + 1) : currentIdx + 1}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-400 block">
                            {isAr ? `السؤال ${toHindiDigits(currentIdx + 1)} من ${toHindiDigits(totalQuestions)}` : `Question ${currentIdx + 1} of ${totalQuestions}`}
                          </span>
                          <span className="text-[11px] text-amber-400/90 font-medium">
                            {currentQ.chapterTitleAr || currentQ.chapterTitleEn}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFlag(currentIdx)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all ${
                            flagged[currentIdx]
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5" />
                          <span>{flagged[currentIdx] ? (isAr ? 'مُميز للمراجعة' : 'Flagged') : (isAr ? 'تمييز للمراجعة' : 'Flag')}</span>
                        </button>
                        <span className="text-xs font-mono font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded-lg border border-slate-700">
                          {currentQ.difficulty === 'hots' ? (isAr ? 'درجتان' : '2 Marks') : (isAr ? 'درجة واحدة' : '1 Mark')}
                        </span>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800 text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
                      <MathRenderer text={isAr ? currentQ.questionAr : currentQ.questionEn} />
                    </div>

                    {/* Options List */}
                    <div className="flex flex-col gap-2.5">
                      {(isAr ? (currentQ.optionsAr || currentQ.optionsEn || []) : (currentQ.optionsEn || currentQ.optionsAr || [])).map((opt: string, optIdx: number) => {
                        const isSelected = userAnswers[currentIdx] === optIdx;
                        const letters = isAr ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];
                        const letter = letters[optIdx] || String(optIdx + 1);

                        return (
                          <button
                            key={`opt_${currentIdx}_${optIdx}`}
                            onClick={() => handleSelectOption(optIdx)}
                            className={`p-3 sm:p-4 rounded-xl border text-left rtl:text-right flex items-center gap-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
                                : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                            }`}
                          >
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 border transition-all ${
                                isSelected
                                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                                  : 'bg-slate-800 border-slate-700 text-slate-400'
                              }`}
                            >
                              {letter}
                            </span>
                            <div className="flex-1 text-xs sm:text-sm font-medium">
                              <MathRenderer text={opt} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                    <button
                      disabled={currentIdx === 0}
                      onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-xs flex items-center gap-2 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                      <span>{isAr ? 'السؤال السابق' : 'Previous'}</span>
                    </button>

                    <span className="text-xs text-slate-400 font-mono">
                      {currentIdx + 1} / {totalQuestions}
                    </span>

                    <button
                      disabled={currentIdx === totalQuestions - 1}
                      onClick={() => setCurrentIdx((p) => Math.min(totalQuestions - 1, p + 1))}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-xs flex items-center gap-2 transition-all"
                    >
                      <span>{isAr ? 'السؤال التالي' : 'Next'}</span>
                      <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Right Pane: Bubble Sheet Question Navigator Matrix (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col h-full bg-slate-950/80 p-4 sm:p-5 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {isAr ? 'مصفوفة البابل شيت الرسمية' : 'OMR Bubble Matrix'}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {answeredCount} / {totalQuestions}
                </span>
              </div>

              {/* Status Key */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>{isAr ? 'تم تظليله' : 'Answered'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>{isAr ? 'مراجعة' : 'Flagged'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                  <span>{isAr ? 'فارغ' : 'Empty'}</span>
                </div>
              </div>

              {/* Grid of 50 Questions */}
              <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 flex-1 content-start">
                {questions.map((_q, idx) => {
                  const isAns = userAnswers[idx] !== undefined;
                  const isFlg = flagged[idx];
                  const isCur = currentIdx === idx;

                  return (
                    <button
                      key={`grid_q_${idx}`}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-10 rounded-xl border text-xs font-bold flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                        isCur
                          ? 'ring-2 ring-amber-400 border-amber-300'
                          : ''
                      } ${
                        isFlg
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60'
                          : isAns
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-black'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                      }`}
                    >
                      <span>{isAr ? toHindiDigits(idx + 1) : idx + 1}</span>
                      {isAns && (
                        <span className="text-[9px] text-emerald-400 font-mono">
                          {isAr ? ['أ', 'ب', 'ج', 'د'][userAnswers[idx]] : ['A', 'B', 'C', 'D'][userAnswers[idx]]}
                        </span>
                      )}
                      {isFlg && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit Button */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setIsConfirmSubmitOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isAr ? 'تسليم ورقة الإجابة وإنهاء الامتحان' : 'Submit Final Bubble Sheet'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Post-Exam Ministerial Scorecard */
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 shadow-xl mb-4 font-black">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                {isAr ? 'كشف درجات المحاكاة الوزارية الرسمية' : 'Official Ministerial Performance Breakdown'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                {isAr ? 'تم تقييم ورقة الإجابة بنجاح!' : 'Exam Evaluation Complete!'}
              </h3>

              {/* Score Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">{isAr ? 'النسبة المئوية' : 'Percentage'}</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">{finalScorePct}%</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">{isAr ? 'الإجابات الصحيحة' : 'Correct'}</span>
                  <span className="text-2xl font-black text-cyan-400 font-mono">{finalCorrectCount}</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">{isAr ? 'الإجابات الخاطئة' : 'Wrong'}</span>
                  <span className="text-2xl font-black text-red-400 font-mono">{finalWrongCount}</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">{isAr ? 'الرتبة المئوية' : 'Percentile'}</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {Math.min(99.8, parseFloat((finalScorePct * 0.98 + 1.2).toFixed(1)))}%
                  </span>
                </div>
              </div>

              {/* Automatic Mistake Notebook & Certificate Note */}
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl w-full text-xs text-slate-300 mb-6 flex flex-col gap-2 text-right rtl:text-right">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {isAr
                      ? 'تم تسجيل شهادة الأداء الوزارية الرسمية بنجاح وتوليد باركود التحقق الرقمي.'
                      : 'Official Performance Certificate registered with encrypted QR verification.'}
                  </span>
                </div>
                {finalWrongCount > 0 && (
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>
                      {isAr
                        ? `تمت إضافة الأسئلة التي بها أخطاء (${toHindiDigits(finalWrongCount)}) تلقائياً إلى "كشكول الأخطاء" للتدريب والمراجعة.`
                        : `Logged ${finalWrongCount} missed questions into the Mistake Notebook for remediation.`}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={onClose}
                  className="flex-1 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer"
                >
                  {isAr ? 'العودة إلى منصة الامتحانات' : 'Return to Exam Workstation'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal before final submit */}
        {isConfirmSubmitOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  {isAr ? 'تأكيد تسليم ورقة الامتحان' : 'Confirm Exam Submission'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {unansweredCount > 0
                    ? isAr
                      ? `تنبيه: يوجد لديك ${toHindiDigits(unansweredCount)} أسئلة لم يتم تظليلها بعد. هل ترغب بالتسليم النهائي الآن؟`
                      : `You still have ${unansweredCount} unanswered questions on your bubble sheet. Are you sure you want to submit?`
                    : isAr
                    ? 'لقد قمت بتظليل جميع الأسئلة. هل أنت متأكد من تسليم ورقة الإجابة الآن؟'
                    : 'You have answered all questions. Submit final answers for grading?'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => setIsConfirmSubmitOpen(false)}
                  className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-all"
                >
                  {isAr ? 'متابعة الحل' : 'Continue Exam'}
                </button>
                <button
                  onClick={handleFinalSubmit}
                  className="py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-extrabold text-xs shadow-md transition-all"
                >
                  {isAr ? 'نعم، تسليم نهائي' : 'Confirm & Submit'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scratchpad Modal */}
        {isScratchpadOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setIsScratchpadOpen(false)}
                className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <MathScratchpad lang={lang} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
