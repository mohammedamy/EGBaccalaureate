import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { CurriculumType, DifficultyLevel, DiagramType, SolvedProblem } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { thanaweyaCurriculum } from '../data/thanaweyaData';
import { egBacCurriculum } from '../data/egBacData';
import { TextbookDiagram } from './TextbookDiagram';
import {
  Printer,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Clock,
  Award,
  FileSpreadsheet,
  Flag,
  Timer,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  Check,
  Sparkles,
  BookOpen,
  Calculator,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  currentCurriculum: CurriculumType;
  onOpenFormulaHandbook?: () => void;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
}

interface GeneratedQuestion {
  id: string;
  questionEn: string;
  questionAr: string;
  difficulty: DifficultyLevel;
  diagramType?: DiagramType;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string[];
  explanationAr: string[];
  chapterId: string;
  chapterTitleEn: string;
  chapterTitleAr: string;
  branchTitleEn: string;
  branchTitleAr: string;
}

export const TestGenerator: React.FC<Props> = ({ lang, currentCurriculum, onOpenFormulaHandbook, onOpenDesmos }) => {
  const t = translations[lang];

  // Filter selections
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [examMode, setExamMode] = useState<'online' | 'printable'>('online');

  // Timed exam settings
  const [isTimed, setIsTimed] = useState<boolean>(true);
  const [durationPreset, setDurationPreset] = useState<number | 'auto'>('auto'); // minutes

  // Active exam session state
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Timer state (seconds)
  const [totalTimeSeconds, setTotalTimeSeconds] = useState<number>(1200);
  const [timeRemaining, setTimeRemaining] = useState<number>(1200);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);

  // Post-exam review filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');

  // Generate question pool from active curriculum
  const generateQuestions = (): GeneratedQuestion[] => {
    const activeData = currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    const pool: GeneratedQuestion[] = [];

    activeData.branches.forEach((branch) => {
      if (selectedBranch !== 'all' && branch.id !== selectedBranch) return;

      branch.chapters.forEach((ch) => {
        if (selectedChapter !== 'all' && ch.id !== selectedChapter) return;

        const candidateProblems: Array<{ prob: SolvedProblem; source: string; diff: DifficultyLevel }> = [];

        // 1. Chapter Databank (50 Easy, 50 Medium, 50 HOTS)
        if (ch.databank) {
          if (difficulty === 'all' || difficulty === 'easy') {
            ch.databank.easy.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_easy', diff: 'easy' }));
          }
          if (difficulty === 'all' || difficulty === 'medium' || difficulty === 'exam_standard') {
            ch.databank.medium.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_medium', diff: 'medium' }));
          }
          if (difficulty === 'all' || difficulty === 'hots') {
            ch.databank.hots.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_hots', diff: 'hots' }));
          }
        }

        // 2. Official Textbook Solved Examples
        if (ch.solvedExamples) {
          ch.solvedExamples.forEach((p) => {
            if (difficulty === 'all' || p.difficulty === difficulty) {
              candidateProblems.push({ prob: p, source: 'textbook_solved', diff: p.difficulty || 'medium' });
            }
          });
        }

        // 3. Official Textbook Unit Exercises
        if (ch.exerciseProblems) {
          ch.exerciseProblems.forEach((p) => {
            if (difficulty === 'all' || p.difficulty === difficulty) {
              candidateProblems.push({ prob: p, source: 'textbook_exercise', diff: p.difficulty || 'medium' });
            }
          });
        }

        // 4. Lesson Worksheets
        ch.lessons.forEach((l) => {
          l.worksheet.problems.forEach((prob) => {
            if (difficulty === 'all' || prob.difficulty === difficulty) {
              candidateProblems.push({ prob, source: 'worksheet', diff: prob.difficulty || 'medium' });
            }
          });
        });

        candidateProblems.forEach(({ prob, source, diff }) => {
          if (
            !prob.optionsEn ||
            prob.optionsEn.length !== 4 ||
            !prob.optionsAr ||
            prob.optionsAr.length !== 4 ||
            prob.correctIndex === undefined
          ) {
            return;
          }

          pool.push({
            id: `${prob.id}_${source}`,
            questionEn: prob.questionEn,
            questionAr: prob.questionAr,
            difficulty: diff,
            optionsEn: prob.optionsEn,
            optionsAr: prob.optionsAr,
            correctIndex: prob.correctIndex,
            explanationEn: prob.stepByStepSolutionEn,
            explanationAr: prob.stepByStepSolutionAr,
            chapterId: ch.id,
            chapterTitleEn: ch.titleEn,
            chapterTitleAr: ch.titleAr,
            branchTitleEn: branch.titleEn,
            branchTitleAr: branch.titleAr,
            diagramType: prob.diagramType,
          });
        });
      });
    });

    // Fisher-Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  };

  const [activeQuestions, setActiveQuestions] = useState<GeneratedQuestion[]>(generateQuestions());

  // Start exam
  const handleStartExam = () => {
    const qList = generateQuestions();
    setActiveQuestions(qList);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsSubmitted(false);
    setReviewFilter('all');

    // Calculate time
    let allocatedMinutes = 20;
    if (durationPreset === 'auto') {
      allocatedMinutes = Math.max(5, qList.length * 2); // 2 minutes per question default
    } else {
      allocatedMinutes = durationPreset;
    }

    const totalSec = allocatedMinutes * 60;
    setTotalTimeSeconds(totalSec);
    setTimeRemaining(totalSec);
    setIsTimerPaused(false);
    setTimeTakenSeconds(0);
    setIsExamStarted(true);
  };

  // Submit exam
  const handleSubmitExam = () => {
    let currentScore = 0;
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);
    setTimeTakenSeconds(totalTimeSeconds - timeRemaining);

    if (currentScore === activeQuestions.length && activeQuestions.length > 0) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  // Retake same exam
  const handleRetakeExam = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsSubmitted(false);
    setReviewFilter('all');
    setTimeRemaining(totalTimeSeconds);
    setIsTimerPaused(false);
    setTimeTakenSeconds(0);
  };

  // Timer countdown hook
  useEffect(() => {
    if (!isExamStarted || isSubmitted || !isTimed || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamStarted, isSubmitted, isTimed, isTimerPaused, activeQuestions, userAnswers]);

  // Format time (MM:SS)
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    const formatted = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return lang === 'ar' ? toHindiDigits(formatted) : formatted;
  };

  // Toggle flag on question
  const toggleFlag = (idx: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Scroll to question
  const scrollToQuestion = (idx: number) => {
    const el = document.getElementById(`test-q-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Print worksheet
  const handlePrint = () => {
    window.print();
  };

  // Stats Breakdown Computations
  const stats = useMemo(() => {
    const total = activeQuestions.length;
    const answeredCount = Object.keys(userAnswers).length;
    const answeredPct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    const scorePct = total > 0 ? Math.round((score / total) * 100) : 0;

    // Difficulty breakdown
    const byDiff: Record<string, { total: number; correct: number }> = {
      easy: { total: 0, correct: 0 },
      medium: { total: 0, correct: 0 },
      hots: { total: 0, correct: 0 },
    };

    // Chapter breakdown
    const byChapter: Record<string, { titleEn: string; titleAr: string; total: number; correct: number }> = {};

    activeQuestions.forEach((q, idx) => {
      const dKey = q.difficulty === 'hots' ? 'hots' : q.difficulty === 'easy' ? 'easy' : 'medium';
      byDiff[dKey].total += 1;
      if (userAnswers[idx] === q.correctIndex) {
        byDiff[dKey].correct += 1;
      }

      if (!byChapter[q.chapterId]) {
        byChapter[q.chapterId] = {
          titleEn: q.chapterTitleEn,
          titleAr: q.chapterTitleAr,
          total: 0,
          correct: 0,
        };
      }
      byChapter[q.chapterId].total += 1;
      if (userAnswers[idx] === q.correctIndex) {
        byChapter[q.chapterId].correct += 1;
      }
    });

    // Rating grade
    let gradeLabelEn = 'Needs Review';
    let gradeLabelAr = 'بحاجة لمزيد من التدريب والمراجعة';
    let gradeColor = 'text-amber-400 bg-amber-950/40 border-amber-500/40';

    if (scorePct >= 90) {
      gradeLabelEn = 'Honors / Outstanding (ممتاز)';
      gradeLabelAr = 'مرتبة الشرف والامتياز الوزاري 🏆';
      gradeColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40';
    } else if (scorePct >= 75) {
      gradeLabelEn = 'Very Good (جيد جداً)';
      gradeLabelAr = 'كفاءة ممتازة وتفوق ملحوظ 🌟';
      gradeColor = 'text-cyan-400 bg-cyan-950/40 border-cyan-500/40';
    } else if (scorePct >= 60) {
      gradeLabelEn = 'Good (جيد)';
      gradeLabelAr = 'اجتياز معيار الوزارة بنجاح 👍';
      gradeColor = 'text-indigo-400 bg-indigo-950/40 border-indigo-500/40';
    }

    return {
      total,
      answeredCount,
      answeredPct,
      scorePct,
      byDiff,
      byChapter,
      gradeLabelEn,
      gradeLabelAr,
      gradeColor,
    };
  }, [activeQuestions, userAnswers, score]);

  // Filtered review questions
  const displayedQuestions = useMemo(() => {
    if (!isSubmitted || reviewFilter === 'all') {
      return activeQuestions.map((q, idx) => ({ q, idx }));
    }
    if (reviewFilter === 'incorrect') {
      return activeQuestions
        .map((q, idx) => ({ q, idx }))
        .filter(({ q, idx }) => userAnswers[idx] !== q.correctIndex);
    }
    if (reviewFilter === 'flagged') {
      return activeQuestions
        .map((q, idx) => ({ q, idx }))
        .filter(({ idx }) => !!flaggedQuestions[idx]);
    }
    return activeQuestions.map((q, idx) => ({ q, idx }));
  }, [activeQuestions, userAnswers, flaggedQuestions, isSubmitted, reviewFilter]);

  const timePctRemaining = totalTimeSeconds > 0 ? (timeRemaining / totalTimeSeconds) * 100 : 0;
  const isTimeCritical = timeRemaining <= 60 && isTimed;
  const isTimeWarning = timeRemaining <= 300 && timeRemaining > 60 && isTimed;

  return (
    <div className="space-y-8">
      {/* Header & Filter Controls (no-print) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-indigo-400" />
              <span>{t.testGenTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">{t.testGenSubtitle}</p>
          </div>

          <div className="flex items-center justify-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto">
            <button
              onClick={() => setExamMode('online')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                examMode === 'online'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.modeOnline}
            </button>
            <button
              onClick={() => setExamMode('printable')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                examMode === 'printable'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.modePrintable}</span>
            </button>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectBranch}</label>
            <select
              value={selectedBranch}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                setSelectedChapter('all');
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'جميع الفروع المتاحة' : 'All Branches'}</option>
              {(currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum).branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {lang === 'ar' ? b.titleAr : b.titleEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectChapter}</label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'جميع فصول الفرع' : 'All Chapters'}</option>
              {(currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum).branches
                .filter((b) => selectedBranch === 'all' || b.id === selectedBranch)
                .flatMap((b) => b.chapters)
                .map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectDifficulty}</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'جميع المستويات' : 'All Levels'}</option>
              <option value="easy">{lang === 'ar' ? 'سهل (تأسيسي وتطبيق مباشر)' : 'Easy (Foundational)'}</option>
              <option value="medium">{lang === 'ar' ? 'متوسط (معياري)' : 'Medium (Standard MoE)'}</option>
              <option value="exam_standard">{lang === 'ar' ? 'مستوى امتحان الوزارة' : 'MoE Standard Exam'}</option>
              <option value="hots">{lang === 'ar' ? 'مهارات تفكير عليا (HOTS)' : 'High Order Thinking (HOTS)'}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.numQuestions}</label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value={5}>{lang === 'ar' ? `5 أسئلة (اختبار سريع)` : `5 Questions (Quick Quiz)`}</option>
              <option value={10}>{lang === 'ar' ? `10 أسئلة (تمرين نموذجي)` : `10 Questions (Standard)`}</option>
              <option value={15}>{lang === 'ar' ? `15 سؤالاً (نصف امتحان)` : `15 Questions (Mid-term)`}</option>
              <option value={20}>{lang === 'ar' ? `20 سؤالاً (امتحان كامل)` : `20 Questions (Full Exam)`}</option>
              <option value={30}>{lang === 'ar' ? `30 سؤالاً (شامل مكثف)` : `30 Questions (Intensive)`}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              {lang === 'ar' ? 'زمن الاختبار' : 'Exam Timing'}
            </label>
            <select
              value={isTimed ? (durationPreset === 'auto' ? 'auto' : durationPreset.toString()) : 'untimed'}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'untimed') {
                  setIsTimed(false);
                } else if (val === 'auto') {
                  setIsTimed(true);
                  setDurationPreset('auto');
                } else {
                  setIsTimed(true);
                  setDurationPreset(Number(val));
                }
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="auto">{lang === 'ar' ? 'تلقائي (دقيقتان / سؤال)' : 'Auto (2 min / Q)'}</option>
              <option value="15">{lang === 'ar' ? '15 دقيقة' : '15 Minutes'}</option>
              <option value="30">{lang === 'ar' ? '30 دقيقة' : '30 Minutes'}</option>
              <option value="45">{lang === 'ar' ? '45 دقيقة' : '45 Minutes'}</option>
              <option value="60">{lang === 'ar' ? '60 دقيقة (ساعة)' : '60 Minutes (1 hr)'}</option>
              <option value="120">{lang === 'ar' ? '120 دقيقة (ساعتان كاملتان)' : '120 Minutes (2 hrs)'}</option>
              <option value="untimed">{lang === 'ar' ? 'بدون توقيت (تدريب حر)' : 'Untimed (Self-paced)'}</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleStartExam}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.generateTest}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Exam Paper View */}
      {examMode === 'printable' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl space-y-6 print-exam-sheet">
          <div className="flex justify-end no-print">
            <button
              onClick={handlePrint}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          {/* Official Egyptian MoE & ClipSAT Header */}
          <div className="border-4 border-double border-slate-700 p-4 sm:p-6 rounded-xl space-y-4 bg-slate-950/40 text-center print-exam-header print-avoid-break">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold border-b border-slate-700 pb-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-left">
                <img src={clipsatLogo} alt="ClipSAT Logo" className="h-10 sm:h-12 w-auto object-contain" />
                <div>
                  <p className="text-base font-black text-indigo-400">ClipSAT for Egypt</p>
                  <p className="text-xs text-slate-300">Ministry of Education Secondary Framework</p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-base sm:text-lg font-black text-amber-400">
                  جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">{t.officialExamHeader}</p>
              </div>

              <div className="text-right text-xs space-y-1">
                <p className="font-bold text-emerald-400">
                  {lang === 'ar'
                    ? `الدرجة الكلية: ${toHindiDigits(activeQuestions.length * 2)} درجة`
                    : `Total Marks: ${activeQuestions.length * 2}`}
                </p>
                <p className="font-bold text-cyan-400">
                  {lang === 'ar'
                    ? `الزمن: ${toHindiDigits(Math.round((activeQuestions.length * 2) / 60) || 1)} ساعة`
                    : `Time Allowed: 2 Hours`}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm pt-2 font-semibold">
              <div className="border-2 border-slate-700 p-2.5 rounded-lg bg-slate-900 text-slate-200 w-full sm:w-auto text-center sm:text-left">
                {t.studentSeatNo} [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
              </div>
              <div className="text-slate-200 w-full sm:w-auto text-center sm:text-right">
                {lang === 'ar'
                  ? 'اسم الطالب: .................................................'
                  : 'Student Name: .................................................'}
              </div>
            </div>
          </div>

          {/* Questions list */}
          <div className="space-y-8 pt-4">
            {activeQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="border border-slate-300 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-950 space-y-4 shadow-sm printable-question print-avoid-break"
              >
                <div className="flex items-start justify-between">
                  <span className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800">
                    {lang === 'ar' ? `السؤال رقم (${toHindiDigits(idx + 1)})` : `Question (${idx + 1})`}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    {lang === 'ar' ? `${q.branchTitleAr} • ${q.chapterTitleAr}` : `${q.branchTitleEn} • ${q.chapterTitleEn}`}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <MathRenderer math={lang === 'ar' ? q.questionAr : q.questionEn} lang={lang} />
                </div>

                {q.diagramType && <TextbookDiagram type={q.diagramType} lang={lang} />}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 print-options-grid print-avoid-break">
                  {(lang === 'ar' ? q.optionsAr : q.optionsEn).map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className="border border-slate-800 p-3 rounded-lg flex items-center gap-2 bg-slate-900/60 text-xs text-slate-200"
                    >
                      <span className="font-bold text-indigo-400">
                        {lang === 'ar' ? `(${['أ', 'ب', 'ج', 'د'][optIdx]})` : `(${String.fromCharCode(65 + optIdx)})`}
                      </span>
                      <span className="font-semibold text-slate-100">
                        <MathRenderer math={opt} lang={lang} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Online Quiz Mode */}
      {examMode === 'online' && (
        <div className="bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6">
          {!isExamStarted ? (
            <div className="text-center py-10 sm:py-16 space-y-5">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600/30 to-violet-600/20 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30 shadow-xl shadow-indigo-950/40">
                <Clock className="w-10 h-10 animate-pulse text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">{t.startQuiz}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-medium mt-2">
                  {lang === 'ar'
                    ? 'اختبار تفاعلي مصمم وفقاً لأحدث معايير الوزارة وبنك الأسئلة الرسمي. يتضمن مؤقتاً حياً، لوحة أسئلة تفاعلية، وتحليلاً شاملاً لأدائك بعد التسليم.'
                    : 'Interactive official examination with a live countdown timer, interactive question navigation palette, and comprehensive performance analytics breakdown.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
                  {lang === 'ar' ? `${toHindiDigits(questionCount)} أسئلة` : `${questionCount} Questions`}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Timer className="w-4 h-4 text-amber-400" />
                  {isTimed
                    ? lang === 'ar'
                      ? `${toHindiDigits(durationPreset === 'auto' ? questionCount * 2 : durationPreset)} دقيقة`
                      : `${durationPreset === 'auto' ? questionCount * 2 : durationPreset} Minutes`
                    : lang === 'ar'
                    ? 'بدون مؤقت'
                    : 'Untimed'}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Award className="w-4 h-4 text-emerald-400" />
                  {lang === 'ar' ? 'حلول نموذجية وشرح كامل' : 'Step-by-Step Solutions'}
                </span>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleStartExam}
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold py-3.5 px-10 rounded-2xl text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t.startQuiz}</span>
                </button>
                {onOpenFormulaHandbook && (
                  <button
                    type="button"
                    onClick={onOpenFormulaHandbook}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500/50 text-slate-200 hover:text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <span>{lang === 'ar' ? 'دستور القوانين والمعادلات' : 'Formula Handbook'}</span>
                  </button>
                )}
                {onOpenDesmos && (
                  <button
                    type="button"
                    onClick={() => onOpenDesmos('2d')}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 hover:text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-cyan-400" />
                    <span>{lang === 'ar' ? 'حاسبة ديسموس (2D/3D)' : 'Desmos Calculator'}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Sticky Exam Control & Palette Bar */}
              <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Timer & Controls */}
                  <div className="flex items-center gap-3">
                    {isTimed ? (
                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono font-bold text-sm transition-all ${
                          isTimeCritical
                            ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                            : isTimeWarning
                            ? 'bg-amber-950/70 border-amber-500 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-200'
                        }`}
                      >
                        <Timer className={`w-4 h-4 ${isTimeCritical ? 'text-rose-400' : 'text-indigo-400'}`} />
                        <span>{formatTime(timeRemaining)}</span>
                        {!isSubmitted && (
                          <button
                            onClick={() => setIsTimerPaused((prev) => !prev)}
                            className="text-slate-400 hover:text-slate-200 p-0.5 rounded ml-1"
                            title={isTimerPaused ? 'Resume' : 'Pause'}
                          >
                            {isTimerPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-950 text-xs font-semibold text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{lang === 'ar' ? 'تدريب حر غير موقوت' : 'Untimed Practice'}</span>
                      </div>
                    )}

                    {/* Progress summary */}
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <span>{lang === 'ar' ? 'تم الإجابة:' : 'Answered:'}</span>
                      <span className="text-slate-100 font-bold">
                        {lang === 'ar' ? toHindiDigits(stats.answeredCount) : stats.answeredCount} /{' '}
                        {lang === 'ar' ? toHindiDigits(stats.total) : stats.total}
                      </span>
                      <span className="text-slate-500">({stats.answeredPct}%)</span>
                    </div>
                  </div>

                  {/* Right: Quick actions */}
                  <div className="flex items-center gap-2">
                    {onOpenFormulaHandbook && (
                      <button
                        type="button"
                        onClick={onOpenFormulaHandbook}
                        className="bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-300 hover:text-indigo-200 font-bold py-2 px-3 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5"
                        title={lang === 'ar' ? 'دستور القوانين والمعادلات' : 'Formula Handbook'}
                      >
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="hidden sm:inline">{lang === 'ar' ? 'ورقة المفاهيم' : 'Formulas'}</span>
                      </button>
                    )}
                    {onOpenDesmos && (
                      <button
                        type="button"
                        onClick={() => onOpenDesmos('2d')}
                        className="bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 font-bold py-2 px-3 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5"
                        title={lang === 'ar' ? 'فتح حاسبة ديسموس (Ctrl+D)' : 'Open Desmos Calculator (Ctrl+D)'}
                      >
                        <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="hidden sm:inline">{lang === 'ar' ? 'ديسموس' : 'Desmos'}</span>
                      </button>
                    )}
                    {!isSubmitted ? (
                      <button
                        onClick={handleSubmitExam}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-5 rounded-xl text-xs shadow-lg shadow-emerald-600/30 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        <span>{t.submitAnswer}</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleRetakeExam}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 px-3 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer border border-slate-700"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'إعادة المحاولة' : 'Retake'}</span>
                        </button>
                        <button
                          onClick={handleStartExam}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-indigo-600/30"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'اختبار جديد' : 'New Test'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                {isTimed && !isSubmitted && (
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-1000 ${
                        isTimeCritical ? 'bg-rose-500' : isTimeWarning ? 'bg-amber-500' : 'bg-indigo-500'
                      }`}
                      style={{ width: `${timePctRemaining}%` }}
                    />
                  </div>
                )}

                {/* Interactive Question Palette / Navigator Grid */}
                <div className="border-t border-slate-800/80 pt-3 flex items-center gap-3 overflow-x-auto pb-1">
                  <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">
                    {lang === 'ar' ? 'لوحة الأسئلة:' : 'Question Grid:'}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                    {activeQuestions.map((q, idx) => {
                      const isAnswered = userAnswers[idx] !== undefined;
                      const isFlagged = !!flaggedQuestions[idx];
                      const isCorrect = isSubmitted && userAnswers[idx] === q.correctIndex;
                      const isWrong = isSubmitted && isAnswered && userAnswers[idx] !== q.correctIndex;

                      let btnStyle = 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200 hover:border-slate-700';

                      if (isSubmitted) {
                        if (isCorrect) btnStyle = 'border-emerald-500 bg-emerald-950/70 text-emerald-300 font-bold';
                        else if (isWrong) btnStyle = 'border-amber-500 bg-amber-950/70 text-amber-300 font-bold';
                        else btnStyle = 'border-slate-800 bg-slate-950 text-slate-500';
                      } else {
                        if (isFlagged) {
                          btnStyle = 'border-amber-500 bg-amber-950/60 text-amber-300 font-bold';
                        } else if (isAnswered) {
                          btnStyle = 'border-indigo-600 bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/30';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => scrollToQuestion(idx)}
                          className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center border transition-all shrink-0 cursor-pointer relative ${btnStyle}`}
                          title={`Question ${idx + 1}`}
                        >
                          <span>{lang === 'ar' ? toHindiDigits(idx + 1) : idx + 1}</span>
                          {isFlagged && !isSubmitted && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-slate-900" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Comprehensive Post-Exam Analytics Dashboard */}
              {isSubmitted && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Top Result Banner */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                      {/* Left: Grade & Score Ring */}
                      <div className="flex items-center gap-5 text-center sm:text-left rtl:sm:text-right">
                        <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="text-slate-800"
                              fill="transparent"
                            />
                            <circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              className={
                                stats.scorePct >= 75
                                  ? 'text-emerald-500'
                                  : stats.scorePct >= 60
                                  ? 'text-indigo-500'
                                  : 'text-amber-500'
                              }
                              strokeDasharray={251.2}
                              strokeDashoffset={251.2 - (251.2 * stats.scorePct) / 100}
                              strokeLinecap="round"
                              fill="transparent"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xl font-black text-slate-100">{stats.scorePct}%</span>
                            <span className="text-[10px] text-slate-400 font-semibold">{t.score}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${stats.gradeColor}`}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{lang === 'ar' ? stats.gradeLabelAr : stats.gradeLabelEn}</span>
                          </div>
                          <h4 className="text-xl font-black text-slate-100">
                            {lang === 'ar'
                              ? `أحرزت ${toHindiDigits(score)} من أصل ${toHindiDigits(stats.total)} درجة`
                              : `Scored ${score} out of ${stats.total} points`}
                          </h4>
                          <p className="text-xs text-slate-400">
                            {lang === 'ar'
                              ? `الوقت المستغرق: ${formatTime(timeTakenSeconds)} • متوسط زمن السؤال: ${Math.round(
                                  timeTakenSeconds / (stats.total || 1)
                                )} ثانية`
                              : `Time taken: ${formatTime(timeTakenSeconds)} • Avg pace: ${Math.round(
                                  timeTakenSeconds / (stats.total || 1)
                                )}s / question`}
                          </p>
                        </div>
                      </div>

                      {/* Right: Quick actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={handleRetakeExam}
                          className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>{lang === 'ar' ? 'إعادة نفس الاختبار' : 'Retake Exam'}</span>
                        </button>
                        <button
                          onClick={handleStartExam}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30 transition-all"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span>{lang === 'ar' ? 'إنشاء اختبار جديد' : 'New Random Test'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Breakdown by Difficulty */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-emerald-400">{lang === 'ar' ? 'المستوى السهل' : 'Easy Level'}</span>
                          <span className="text-slate-300">
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.easy.correct) : stats.byDiff.easy.correct} /{' '}
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.easy.total) : stats.byDiff.easy.total}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full rounded-full"
                            style={{
                              width: `${
                                stats.byDiff.easy.total > 0
                                  ? (stats.byDiff.easy.correct / stats.byDiff.easy.total) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-indigo-400">{lang === 'ar' ? 'المستوى المتوسط' : 'Medium Level'}</span>
                          <span className="text-slate-300">
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.medium.correct) : stats.byDiff.medium.correct} /{' '}
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.medium.total) : stats.byDiff.medium.total}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-indigo-500 h-full rounded-full"
                            style={{
                              width: `${
                                stats.byDiff.medium.total > 0
                                  ? (stats.byDiff.medium.correct / stats.byDiff.medium.total) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-amber-400">{lang === 'ar' ? 'مهارات تفكير عليا (HOTS)' : 'HOTS Level'}</span>
                          <span className="text-slate-300">
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.hots.correct) : stats.byDiff.hots.correct} /{' '}
                            {lang === 'ar' ? toHindiDigits(stats.byDiff.hots.total) : stats.byDiff.hots.total}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-500 h-full rounded-full"
                            style={{
                              width: `${
                                stats.byDiff.hots.total > 0
                                  ? (stats.byDiff.hots.correct / stats.byDiff.hots.total) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Filter Tabs */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold text-slate-300">
                        {lang === 'ar' ? 'مراجعة الأسئلة والحلول النموذجية:' : 'Review Questions & Step-by-Step Solutions:'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                      <button
                        onClick={() => setReviewFilter('all')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          reviewFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'ar' ? `الكل (${toHindiDigits(stats.total)})` : `All (${stats.total})`}
                      </button>
                      <button
                        onClick={() => setReviewFilter('incorrect')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          reviewFilter === 'incorrect' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'ar'
                          ? `الإجابات الخاطئة (${toHindiDigits(stats.total - score)})`
                          : `Incorrect (${stats.total - score})`}
                      </button>
                      <button
                        onClick={() => setReviewFilter('flagged')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          reviewFilter === 'flagged' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'ar'
                          ? `المميزة بنجمة (${toHindiDigits(Object.values(flaggedQuestions).filter(Boolean).length)})`
                          : `Flagged (${Object.values(flaggedQuestions).filter(Boolean).length})`}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-6">
                {displayedQuestions.map(({ q, idx }) => {
                  const selectedOpt = userAnswers[idx];
                  const isCorrect = isSubmitted && selectedOpt === q.correctIndex;
                  const isWrong = isSubmitted && selectedOpt !== undefined && selectedOpt !== q.correctIndex;
                  const isFlagged = !!flaggedQuestions[idx];

                  const diffBadge = {
                    easy: {
                      en: 'Easy',
                      ar: 'سهل',
                      style: 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30',
                    },
                    medium: {
                      en: 'Medium',
                      ar: 'متوسط',
                      style: 'bg-indigo-950/60 text-indigo-400 border-indigo-500/30',
                    },
                    exam_standard: {
                      en: 'Exam Standard',
                      ar: 'مستوى الامتحان',
                      style: 'bg-cyan-950/60 text-cyan-400 border-cyan-500/30',
                    },
                    hots: {
                      en: 'HOTS',
                      ar: 'تفكير عليا',
                      style: 'bg-amber-950/60 text-amber-400 border-amber-500/30',
                    },
                  }[q.difficulty] || {
                    en: 'Standard',
                    ar: 'معياري',
                    style: 'bg-indigo-950/60 text-indigo-400 border-indigo-500/30',
                  };

                  return (
                    <div
                      id={`test-q-${idx}`}
                      key={q.id}
                      className={`border rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-sm ${
                        isCorrect
                          ? 'border-emerald-500/50 bg-emerald-950/15'
                          : isWrong
                          ? 'border-amber-500/50 bg-amber-950/15'
                          : 'border-slate-800 bg-slate-950/60'
                      }`}
                    >
                      {/* Question card header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow-sm">
                            {lang === 'ar' ? `سُؤال (${toHindiDigits(idx + 1)})` : `Question (${idx + 1})`}
                          </span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${diffBadge.style}`}>
                            {lang === 'ar' ? diffBadge.ar : diffBadge.en}
                          </span>
                          <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                            {lang === 'ar' ? `${q.branchTitleAr} • ${q.chapterTitleAr}` : `${q.branchTitleEn} • ${q.chapterTitleEn}`}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {!isSubmitted && (
                            <button
                              onClick={() => toggleFlag(idx)}
                              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                                isFlagged
                                  ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                              }`}
                              title="Flag for review"
                            >
                              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
                              <span>{isFlagged ? (lang === 'ar' ? 'مميز' : 'Flagged') : lang === 'ar' ? 'تمييز' : 'Flag'}</span>
                            </button>
                          )}

                          {isSubmitted && (
                            <div className="flex items-center gap-1.5 text-xs font-bold">
                              {isCorrect ? (
                                <span className="text-emerald-400 flex items-center gap-1 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                                  <CheckCircle2 className="w-4 h-4" /> {lang === 'ar' ? 'إجابة صحيحة (+1)' : 'Correct (+1)'}
                                </span>
                              ) : (
                                <span className="text-amber-400 flex items-center gap-1 bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-500/30">
                                  <AlertCircle className="w-4 h-4" /> {lang === 'ar' ? 'إجابة خاطئة (0)' : 'Incorrect (0)'}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Question Stem with KaTeX */}
                      <div className="text-sm font-semibold text-slate-100 leading-relaxed">
                        <MathRenderer math={lang === 'ar' ? q.questionAr : q.questionEn} lang={lang} />
                      </div>

                      {/* Official Textbook Diagram */}
                      {q.diagramType && <TextbookDiagram type={q.diagramType} lang={lang} />}

                      {/* 4 Interactive Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {(lang === 'ar' ? q.optionsAr : q.optionsEn).map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          let btnStyle = 'border-slate-800 bg-slate-900/80 hover:border-indigo-500/60 text-slate-200';

                          if (isSelected && !isSubmitted) {
                            btnStyle = 'border-indigo-500 bg-indigo-950/80 text-indigo-100 font-bold ring-2 ring-indigo-500/40';
                          }

                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'border-emerald-500 bg-emerald-950/80 text-emerald-200 font-bold ring-2 ring-emerald-500/40';
                            } else if (isSelected && optIdx !== q.correctIndex) {
                              btnStyle = 'border-amber-500 bg-amber-950/80 text-amber-200 font-bold ring-2 ring-amber-500/40';
                            } else {
                              btnStyle = 'border-slate-800/80 bg-slate-950 text-slate-500 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isSubmitted}
                              onClick={() => setUserAnswers((prev) => ({ ...prev, [idx]: optIdx }))}
                              className={`border p-3.5 rounded-xl text-left rtl:text-right text-xs flex items-center gap-3 transition-all shadow-sm cursor-pointer ${btnStyle}`}
                            >
                              <span
                                className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                  isSubmitted && optIdx === q.correctIndex
                                    ? 'bg-emerald-600 border-emerald-400 text-white'
                                    : isSelected
                                    ? 'bg-indigo-600 border-indigo-400 text-white'
                                    : 'border-slate-700 bg-slate-800 text-slate-300'
                                }`}
                              >
                                {lang === 'ar' ? ['أ', 'ب', 'ج', 'د'][optIdx] : String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="font-semibold text-slate-100 leading-relaxed">
                                <MathRenderer math={opt} lang={lang} />
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Step-by-Step Solution Breakdown on Submission */}
                      {isSubmitted && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2.5 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="font-bold text-amber-400 uppercase tracking-wider">
                              {t.stepByStepSolution}
                            </span>
                          </div>
                          <div className="space-y-2 pt-1">
                            {(lang === 'ar' ? q.explanationAr : q.explanationEn).map((step, sIdx) => (
                              <div key={sIdx} className="text-slate-300 pl-3 rtl:pr-3 border-l-2 rtl:border-r-2 rtl:border-l-0 border-indigo-500/40">
                                <MathRenderer math={step} lang={lang} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Submit Button */}
              {!isSubmitted && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-400">
                    {lang === 'ar'
                      ? `تم الإجابة عن ${toHindiDigits(stats.answeredCount)} من ${toHindiDigits(stats.total)} أسئلة.`
                      : `You have answered ${stats.answeredCount} of ${stats.total} questions.`}
                  </p>
                  <button
                    onClick={handleSubmitExam}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold py-3.5 px-10 rounded-xl text-xs shadow-xl shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.submitAnswer}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
