import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { CurriculumType, DifficultyLevel, SolvedProblem, Chapter } from '../types/curriculum';
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
  Dna,
  Zap,
  FlaskConical,
  Edit3,
  X,
  SlidersHorizontal,
  Copy,
  Columns,
  FileText,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  BookMarked,
} from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';
import { SUBJECTS, getBranchesForSubject } from '../data/subjects';
import { BubbleSheetSimulator } from '../core/exam/BubbleSheetSimulator';
import { MathScratchpad } from '../core/math/MathScratchpad';
import {
  type GeneratedQuestion,
  type MistakeRecord,
  getMistakeRecords,
  recordQuizMistakes,
} from '../services/mistakeNotebookService';
import {
  recordQuizAttempt,
  generateDiagnosticBenchmarkQuestions,
} from '../services/studentAnalyticsService';
import {
  evaluateBadges,
  type AchievementBadge,
} from '../services/achievementBadgeService';
import {
  getOfficialMockConfig,
  generateOfficialMockQuestions,
  computeOfficialExamScore,
  type OfficialScoreReport,
} from '../services/officialMockExamService';
import { MistakeNotebookView } from './MistakeNotebookView';

export type BlueprintMode =
  | 'all'
  | 'ministry_standard'
  | 'hots_challenge'
  | 'foundational'
  | 'diagnostic_benchmark'
  | 'official_thanawya_mock';

interface Props {
  lang: Language;
  currentCurriculum: CurriculumType;
  onOpenFormulaHandbook?: () => void;
  onOpenDesmos?: (mode?: '2d' | '3d' | 'scientific' | 'geometry') => void;
  initialSubject?: string;
  initialBlueprint?: BlueprintMode;
  initialQuestionCount?: number;
}

export const TestGenerator: React.FC<Props> = ({
  lang,
  currentCurriculum,
  onOpenFormulaHandbook,
  onOpenDesmos,
  initialSubject = 'all',
  initialBlueprint,
  initialQuestionCount,
}) => {
  const t = translations[lang];

  // Filter selections
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [examMode, setExamMode] = useState<'online' | 'printable' | 'bubble_sheet' | 'mistakes'>('online');
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);

  // Mistake Notebook state
  const [mistakeRecords, setMistakeRecords] = useState<MistakeRecord[]>(() => getMistakeRecords());
  const [lastLoggedMistakesCount, setLastLoggedMistakesCount] = useState<number>(0);

  const refreshMistakeRecords = () => {
    setMistakeRecords(getMistakeRecords());
  };

  const activeMistakesCount = useMemo(() => {
    return mistakeRecords.filter((r) => !r.mastered).length;
  }, [mistakeRecords]);

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

  // Gamification & Badges celebration state
  const [newlyEarnedBadges, setNewlyEarnedBadges] = useState<AchievementBadge[]>([]);

  // Reset branch and chapter when curriculum changes
  useEffect(() => {
    setSelectedBranch('all');
    setSelectedChapter('all');
  }, [currentCurriculum]);

  // Sync initialSubject when prop updates
  useEffect(() => {
    if (initialSubject) {
      setSelectedSubject(initialSubject);
      setSelectedBranch('all');
      setSelectedChapter('all');
    }
  }, [initialSubject]);

  // Blueprint and HOTS distribution settings
  const [blueprintMode, setBlueprintMode] = useState<BlueprintMode>(initialBlueprint || 'all');

  // Sync initialBlueprint and initialQuestionCount when prop updates
  useEffect(() => {
    if (initialBlueprint) {
      setBlueprintMode(initialBlueprint);
      if (initialBlueprint === 'diagnostic_benchmark') {
        setSelectedSubject('all');
        setSelectedBranch('all');
        setSelectedChapter('all');
        setQuestionCount(20);
        setDurationPreset(30);
      }
    }
  }, [initialBlueprint]);

  useEffect(() => {
    if (initialQuestionCount && initialQuestionCount > 0) {
      setQuestionCount(initialQuestionCount);
    }
  }, [initialQuestionCount]);

  // Sync official thanawya mock exam config (question count & duration)
  useEffect(() => {
    if (blueprintMode === 'official_thanawya_mock') {
      const cfg = getOfficialMockConfig(selectedSubject, selectedBranch);
      setQuestionCount(cfg.totalQuestions);
      setDurationPreset(cfg.durationMinutes);
      setIsTimed(true);
    }
  }, [blueprintMode, selectedSubject, selectedBranch]);

  // Printable Exam Paper & Solution Sheet Customization
  const [showAnswerKeyOnPrint, setShowAnswerKeyOnPrint] = useState<boolean>(true);
  const [showExplanationsOnPrint, setShowExplanationsOnPrint] = useState<boolean>(false);
  const [printLayout, setPrintLayout] = useState<'standard' | 'compact'>('standard');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [isCopiedNotification, setIsCopiedNotification] = useState<boolean>(false);

  // Personalized Exam Metadata with persistent defaults
  const [customSchoolName, setCustomSchoolName] = useState<string>(() => {
    return localStorage.getItem('eg_exam_school_name') || '';
  });
  const [customTeacherName, setCustomTeacherName] = useState<string>(() => {
    return localStorage.getItem('eg_exam_teacher_name') || '';
  });
  const [customExamTitle, setCustomExamTitle] = useState<string>(() => {
    return localStorage.getItem('eg_exam_title') || '';
  });
  const [customAcademicYear, setCustomAcademicYear] = useState<string>(() => {
    return localStorage.getItem('eg_exam_year') || '2025 - 2026';
  });
  const [customGradeSection, setCustomGradeSection] = useState<string>(() => {
    return localStorage.getItem('eg_exam_grade_sec') || '';
  });

  useEffect(() => {
    localStorage.setItem('eg_exam_school_name', customSchoolName);
  }, [customSchoolName]);
  useEffect(() => {
    localStorage.setItem('eg_exam_teacher_name', customTeacherName);
  }, [customTeacherName]);
  useEffect(() => {
    localStorage.setItem('eg_exam_title', customExamTitle);
  }, [customExamTitle]);
  useEffect(() => {
    localStorage.setItem('eg_exam_year', customAcademicYear);
  }, [customAcademicYear]);
  useEffect(() => {
    localStorage.setItem('eg_exam_grade_sec', customGradeSection);
  }, [customGradeSection]);

  // Real-time calculation of available questions matching user filters and blueprint
  const availablePoolCount = useMemo(() => {
    if (blueprintMode === 'diagnostic_benchmark') return 20;
    if (blueprintMode === 'official_thanawya_mock') {
      const cfg = getOfficialMockConfig(selectedSubject, selectedBranch);
      return cfg.totalQuestions;
    }
    const activeData = currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    let count = 0;
    const candidateBranches = getBranchesForSubject(activeData, selectedSubject);

    const isMatch = (d: DifficultyLevel) => {
      if (blueprintMode === 'hots_challenge') return d === 'hots';
      if (blueprintMode === 'foundational') return d === 'easy' || d === 'medium';
      if (blueprintMode === 'ministry_standard') return true;
      if (difficulty === 'all') return true;
      if (difficulty === 'medium' || difficulty === 'exam_standard') return d === 'medium' || d === 'exam_standard';
      return d === difficulty;
    };

    candidateBranches.forEach((branch) => {
      if (selectedBranch !== 'all' && branch.id !== selectedBranch) return;

      branch.chapters.forEach((ch) => {
        if (selectedChapter !== 'all' && ch.id !== selectedChapter) return;

        if (ch.databank) {
          if (isMatch('easy')) count += ch.databank.easy.length;
          if (isMatch('medium')) count += ch.databank.medium.length;
          if (isMatch('hots')) count += ch.databank.hots.length;
        }
        if (ch.solvedExamples) {
          count += ch.solvedExamples.filter((p) => isMatch(p.difficulty || 'medium')).length;
        }
        if (ch.exerciseProblems) {
          count += ch.exerciseProblems.filter((p) => isMatch(p.difficulty || 'medium')).length;
        }
        if (ch.lessons) {
          ch.lessons.forEach((l) => {
            if (l.worksheet?.problems) {
              count += l.worksheet.problems.filter((p) => isMatch(p.difficulty || 'medium')).length;
            }
          });
        }
      });
    });

    return count;
  }, [currentCurriculum, selectedSubject, selectedBranch, selectedChapter, difficulty, blueprintMode]);

  // Helper to shuffle an array
  const shuffle = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Generate question pool from active curriculum respecting blueprint and difficulty
  const generateQuestions = (): GeneratedQuestion[] => {
    const activeData = currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    if (blueprintMode === 'diagnostic_benchmark') {
      return generateDiagnosticBenchmarkQuestions(activeData, shuffle);
    }
    if (blueprintMode === 'official_thanawya_mock') {
      return generateOfficialMockQuestions(
        activeData,
        selectedSubject,
        selectedBranch,
        shuffle
      );
    }
    const pool: GeneratedQuestion[] = [];
    const candidateBranches = getBranchesForSubject(activeData, selectedSubject);

    const isMatch = (d: DifficultyLevel) => {
      if (blueprintMode === 'hots_challenge') return d === 'hots';
      if (blueprintMode === 'foundational') return d === 'easy' || d === 'medium';
      if (blueprintMode === 'ministry_standard') return true;
      if (difficulty === 'all') return true;
      if (difficulty === 'medium' || difficulty === 'exam_standard') return d === 'medium' || d === 'exam_standard';
      return d === difficulty;
    };

    candidateBranches.forEach((branch) => {
      if (selectedBranch !== 'all' && branch.id !== selectedBranch) return;

      branch.chapters.forEach((ch) => {
        if (selectedChapter !== 'all' && ch.id !== selectedChapter) return;

        const candidateProblems: Array<{ prob: SolvedProblem; source: string; diff: DifficultyLevel }> = [];

        // 1. Chapter Databank (Easy, Medium, HOTS)
        if (ch.databank) {
          if (isMatch('easy')) {
            ch.databank.easy.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_easy', diff: 'easy' }));
          }
          if (isMatch('medium')) {
            ch.databank.medium.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_medium', diff: 'medium' }));
          }
          if (isMatch('hots')) {
            ch.databank.hots.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_hots', diff: 'hots' }));
          }
        }

        // 2. Official Textbook Solved Examples
        if (ch.solvedExamples) {
          ch.solvedExamples.forEach((p) => {
            const d = p.difficulty || 'medium';
            if (isMatch(d)) {
              candidateProblems.push({ prob: p, source: 'textbook_solved', diff: d });
            }
          });
        }

        // 3. Official Textbook Unit Exercises
        if (ch.exerciseProblems) {
          ch.exerciseProblems.forEach((p) => {
            const d = p.difficulty || 'medium';
            if (isMatch(d)) {
              candidateProblems.push({ prob: p, source: 'textbook_exercise', diff: d });
            }
          });
        }

        // 4. Lesson Worksheets
        ch.lessons?.forEach((l) => {
          l.worksheet?.problems?.forEach((prob) => {
            const d = prob.difficulty || 'medium';
            if (isMatch(d)) {
              candidateProblems.push({ prob, source: 'worksheet', diff: d });
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

    // If blueprint is ministry_standard: select 30% easy, 40% medium, 30% hots
    if (blueprintMode === 'ministry_standard') {
      const easyPool = pool.filter((q) => q.difficulty === 'easy');
      const medPool = pool.filter((q) => q.difficulty === 'medium' || q.difficulty === 'exam_standard');
      const hotsPool = pool.filter((q) => q.difficulty === 'hots');

      const targetHots = Math.round(questionCount * 0.3);
      const targetEasy = Math.round(questionCount * 0.3);
      const targetMed = Math.max(1, questionCount - targetHots - targetEasy);

      const shuffledEasy = shuffle(easyPool);
      const shuffledMed = shuffle(medPool);
      const shuffledHots = shuffle(hotsPool);

      const selected: GeneratedQuestion[] = [
        ...shuffledEasy.slice(0, targetEasy),
        ...shuffledMed.slice(0, targetMed),
        ...shuffledHots.slice(0, targetHots),
      ];

      // If any bucket fell short, top-up from the remaining pool
      if (selected.length < questionCount) {
        const selectedIds = new Set(selected.map((s) => s.id));
        const remainder = shuffle(pool.filter((q) => !selectedIds.has(q.id)));
        selected.push(...remainder.slice(0, questionCount - selected.length));
      }

      return shuffle(selected).slice(0, Math.min(questionCount, selected.length));
    }

    // Default Fisher-Yates shuffle
    const shuffled = shuffle(pool);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  };

  const [activeQuestions, setActiveQuestions] = useState<GeneratedQuestion[]>(generateQuestions());

  // Start exam
  const handleStartExam = () => {
    const qList = generateQuestions();
    if (qList.length === 0) return;

    setActiveQuestions(qList);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsSubmitted(false);
    setReviewFilter('all');
    setNewlyEarnedBadges([]);

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

    // Auto-record mistakes to Mistake Notebook
    const mistakeResult = recordQuizMistakes(activeQuestions, userAnswers, currentCurriculum);
    refreshMistakeRecords();
    setLastLoggedMistakesCount(mistakeResult.added + mistakeResult.updated);

    // Record quiz attempt to Student Analytics Dashboard
    recordQuizAttempt(activeQuestions, userAnswers, totalTimeSeconds - timeRemaining);

    // Evaluate Gamification & Academic Achievement Badges
    const badgeEval = evaluateBadges();
    if (badgeEval.newlyUnlocked.length > 0) {
      setNewlyEarnedBadges(badgeEval.newlyUnlocked);
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
    } else if (currentScore === activeQuestions.length && activeQuestions.length > 0) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  // Launch targeted remediation quiz or printable worksheet from Mistake Notebook
  const handleStartRemediation = (remediationQuestions: GeneratedQuestion[], mode: 'online' | 'printable') => {
    setActiveQuestions(remediationQuestions);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsSubmitted(false);
    setScore(0);
    setExamMode(mode);
    setNewlyEarnedBadges([]);

    if (mode === 'online') {
      const totalSec = Math.max(remediationQuestions.length * 120, 300);
      setTotalTimeSeconds(totalSec);
      setTimeRemaining(totalSec);
      setIsTimerPaused(false);
      setTimeTakenSeconds(0);
      setIsExamStarted(true);
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
    setNewlyEarnedBadges([]);
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

  // Format time (HH:MM:SS if >= 1 hour, otherwise MM:SS)
  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    const formatted = h > 0
      ? `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
      : `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return lang === 'ar' ? toHindiDigits(formatted) : formatted;
  };

  // Helper to extract valid questions from a chapter
  const helperExtractChapterQuestions = (ch: Chapter, branch: { titleEn: string; titleAr: string }): GeneratedQuestion[] => {
    const candidateProblems: Array<{ prob: SolvedProblem; source: string; diff: DifficultyLevel }> = [];
    if (ch.databank) {
      ch.databank.easy.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_easy', diff: 'easy' }));
      ch.databank.medium.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_medium', diff: 'medium' }));
      ch.databank.hots.forEach((p) => candidateProblems.push({ prob: p, source: 'databank_hots', diff: 'hots' }));
    }
    if (ch.solvedExamples) {
      ch.solvedExamples.forEach((p) => candidateProblems.push({ prob: p, source: 'textbook_solved', diff: p.difficulty || 'medium' }));
    }
    if (ch.exerciseProblems) {
      ch.exerciseProblems.forEach((p) => candidateProblems.push({ prob: p, source: 'textbook_exercise', diff: p.difficulty || 'medium' }));
    }
    ch.lessons?.forEach((l) => {
      l.worksheet?.problems?.forEach((p) => candidateProblems.push({ prob: p, source: 'worksheet', diff: p.difficulty || 'medium' }));
    });

    const res: GeneratedQuestion[] = [];
    candidateProblems.forEach(({ prob, source, diff }) => {
      if (!prob.optionsEn || prob.optionsEn.length !== 4 || !prob.optionsAr || prob.optionsAr.length !== 4 || prob.correctIndex === undefined) return;
      res.push({
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
    return res;
  };

  // Copy current exam to clipboard as formatted Markdown
  const handleCopyExamMarkdown = () => {
    const title = customExamTitle || (lang === 'ar' ? 'امتحان شهادة إتمام الثانوية العامة' : 'General Secondary Examination');
    const school = customSchoolName || (lang === 'ar' ? 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني' : 'Ministry of Education & Technical Education');
    let text = `# ${title}\n`;
    text += `**${school}**\n`;
    if (customTeacherName) text += `**${customTeacherName}** | `;
    text += `**${customAcademicYear}** | **${customGradeSection || (lang === 'ar' ? 'الصف الثالث الثانوي' : 'Grade 12')}**\n\n`;
    text += `**${lang === 'ar' ? 'الدرجة الكلية:' : 'Total Marks:'} ${activeQuestions.length * 2}** | `;
    text += `**${lang === 'ar' ? 'عدد الأسئلة:' : 'Number of Questions:'} ${activeQuestions.length}**\n\n`;
    text += `---\n\n`;

    activeQuestions.forEach((q, idx) => {
      const qNum = idx + 1;
      const qText = lang === 'ar' ? q.questionAr : q.questionEn;
      const opts = lang === 'ar' ? q.optionsAr : q.optionsEn;
      const labels = lang === 'ar' ? ['(أ)', '(ب)', '(ج)', '(د)'] : ['(A)', '(B)', '(C)', '(D)'];

      text += `### ${lang === 'ar' ? `السؤال (${qNum})` : `Question (${qNum})`} [${lang === 'ar' ? `${q.branchTitleAr} • ${q.chapterTitleAr}` : `${q.branchTitleEn} • ${q.chapterTitleEn}`}]\n`;
      text += `${qText}\n\n`;
      opts.forEach((opt, optIdx) => {
        text += `- ${labels[optIdx]} ${opt}\n`;
      });
      text += `\n`;
    });

    if (showAnswerKeyOnPrint) {
      text += `\n---\n## ${lang === 'ar' ? 'ملحق نموذج الإجابة الرسمي والحلول النموذجية' : 'Official Model Answer Key & Solution Appendix'}\n\n`;
      activeQuestions.forEach((q, idx) => {
        const labels = lang === 'ar' ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];
        const correctLabel = labels[q.correctIndex] || 'A';
        const correctText = lang === 'ar' ? q.optionsAr[q.correctIndex] : q.optionsEn[q.correctIndex];
        text += `${idx + 1}. **(${correctLabel})**: ${correctText}\n`;
        if (showExplanationsOnPrint) {
          const steps = lang === 'ar' ? q.explanationAr : q.explanationEn;
          steps.forEach((s) => {
            text += `   - ${s}\n`;
          });
        }
      });
    }

    navigator.clipboard.writeText(text).then(() => {
      setIsCopiedNotification(true);
      setTimeout(() => setIsCopiedNotification(false), 3000);
    });
  };

  const launchExamSession = (questions: GeneratedQuestion[], durationMinutes: number) => {
    setActiveQuestions(questions);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsSubmitted(false);
    setReviewFilter('all');

    const totalSec = durationMinutes * 60;
    setTotalTimeSeconds(totalSec);
    setTimeRemaining(totalSec);
    setIsTimerPaused(false);
    setTimeTakenSeconds(0);
    if (examMode === 'online') {
      setIsExamStarted(true);
    }
  };

  // Launch official 3-Hour Ministerial Exam Simulation (40 Questions / 180 Minutes across all branches)
  const handleStartMinisterialSimulation = () => {
    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch('all');
    setSelectedChapter('all');
    setDifficulty('all');
    setQuestionCount(40);
    setIsTimed(true);
    setDurationPreset(180);

    const activeData = currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    const pool: GeneratedQuestion[] = [];

    activeData.branches.forEach((branch) => {
      branch.chapters.forEach((ch) => {
        pool.push(...helperExtractChapterQuestions(ch, branch));
      });
    });

    const shuffled = shuffle(pool);
    const selectedQs = shuffled.slice(0, Math.min(40, shuffled.length));
    launchExamSession(selectedQs, 180);
  };

  // Launch official Biology Ministerial Exam (50 Qs / 180 Mins for Thanaweya; 40 Qs / 150 Mins for EG-Bac)
  const handleStartBiologyMinisterialExam = () => {
    setSelectedSubject('biology');
    const isThanaweya = currentCurriculum === 'thanaweya';
    const activeData = isThanaweya ? thanaweyaCurriculum : egBacCurriculum;
    const targetBranchId = isThanaweya ? 'thanaweya_biology' : 'egbac_biology';
    const bioBranch = activeData.branches.find((b) => b.id === targetBranchId);

    if (!bioBranch) return;

    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch(targetBranchId);
    setSelectedChapter('all');
    setDifficulty('all');
    setIsTimed(true);

    let selectedQs: GeneratedQuestion[] = [];
    let examTimeMinutes = 180;

    if (isThanaweya) {
      // Official MoE Thanaweya Blueprint (50 Questions / 180 Mins):
      // Ch 1 (Support & Movement): 10 Qs
      // Ch 2 (Hormonal Coordination): 8 Qs
      // Ch 3 (Reproduction): 16 Qs
      // Ch 4 (Immunity): 8 Qs
      // Ch 5 (Molecular Biology): 8 Qs
      const blueprint: Record<string, number> = {
        th_bio_ch1: 10,
        th_bio_ch2: 8,
        th_bio_ch3: 16,
        th_bio_ch4: 8,
        th_bio_ch5: 8,
      };

      bioBranch.chapters.forEach((ch) => {
        const targetCount = blueprint[ch.id] ?? 10;
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, bioBranch));
        selectedQs.push(...chQuestions.slice(0, targetCount));
      });

      examTimeMinutes = 180;
      setQuestionCount(50);
      setDurationPreset(180);
    } else {
      // EG-Bac STEM Blueprint (40 Questions / 150 Mins):
      // 10 Qs per chapter across all 4 chapters
      bioBranch.chapters.forEach((ch) => {
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, bioBranch));
        selectedQs.push(...chQuestions.slice(0, 10));
      });

      examTimeMinutes = 150;
      setQuestionCount(40);
      setDurationPreset(150);
    }

    selectedQs = shuffle(selectedQs);
    launchExamSession(selectedQs, examTimeMinutes);
  };

  // Launch official Physics Ministerial Exam (50 Qs / 180 Mins for Thanaweya; 40 Qs / 150 Mins for EG-Bac)
  const handleStartPhysicsMinisterialExam = () => {
    setSelectedSubject('physics');
    const isThanaweya = currentCurriculum === 'thanaweya';
    const activeData = isThanaweya ? thanaweyaCurriculum : egBacCurriculum;
    const targetBranchId = isThanaweya ? 'thanaweya_physics' : 'egbac_physics';
    const physBranch = activeData.branches.find((b) => b.id === targetBranchId);

    if (!physBranch) return;

    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch(targetBranchId);
    setSelectedChapter('all');
    setDifficulty('all');
    setIsTimed(true);

    let selectedQs: GeneratedQuestion[] = [];
    let examTimeMinutes = 180;

    if (isThanaweya) {
      // Official MoE Thanaweya Blueprint for Physics (50 Questions / 180 Mins across 6 units):
      // Ch 1 (Current & Ohm's Laws): 9 Qs
      // Ch 2 (Magnetic Effect & Measuring Instruments): 9 Qs
      // Ch 3 (Electromagnetic Induction & Generators): 10 Qs
      // Ch 4 (AC Circuits & Oscillators): 8 Qs
      // Ch 5 (Dual Nature of Radiation & Matter): 7 Qs
      // Ch 6 (Spectra, Lasers & Modern Electronics): 7 Qs
      const blueprint: Record<string, number> = {
        th_phys_ch1: 9,
        th_phys_ch2: 9,
        th_phys_ch3: 10,
        th_phys_ch4: 8,
        th_phys_ch5: 7,
        th_phys_ch6: 7,
      };

      physBranch.chapters.forEach((ch) => {
        const targetCount = blueprint[ch.id] ?? 8;
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, physBranch));
        selectedQs.push(...chQuestions.slice(0, targetCount));
      });

      examTimeMinutes = 180;
      setQuestionCount(50);
      setDurationPreset(180);
    } else {
      // EG-Bac STEM Blueprint for Physics (40 Questions / 150 Mins across 5 units):
      // 8 Qs per chapter across all 5 chapters (5 * 8 = 40)
      physBranch.chapters.forEach((ch) => {
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, physBranch));
        selectedQs.push(...chQuestions.slice(0, 8));
      });

      examTimeMinutes = 150;
      setQuestionCount(40);
      setDurationPreset(150);
    }

    selectedQs = shuffle(selectedQs);
    launchExamSession(selectedQs, examTimeMinutes);
  };

  // Launch official Chemistry Ministerial Exam (50 Qs / 180 Mins for Thanaweya; 40 Qs / 150 Mins for EG-Bac)
  const handleStartChemistryMinisterialExam = () => {
    setSelectedSubject('chemistry');
    const isThanaweya = currentCurriculum === 'thanaweya';
    const activeData = isThanaweya ? thanaweyaCurriculum : egBacCurriculum;
    const targetBranchId = isThanaweya ? 'thanaweya_chemistry' : 'egbac_chemistry';
    const chemBranch = activeData.branches.find((b) => b.id === targetBranchId);

    if (!chemBranch) return;

    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch(targetBranchId);
    setSelectedChapter('all');
    setDifficulty('all');
    setIsTimed(true);

    let selectedQs: GeneratedQuestion[] = [];
    let examTimeMinutes = 180;

    if (isThanaweya) {
      // Official MoE Thanaweya Blueprint for Chemistry (50 Questions / 180 Mins across 5 units):
      // 10 Qs per chapter across all 5 chapters (5 * 10 = 50)
      chemBranch.chapters.forEach((ch) => {
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, chemBranch));
        selectedQs.push(...chQuestions.slice(0, 10));
      });

      examTimeMinutes = 180;
      setQuestionCount(50);
      setDurationPreset(180);
    } else {
      // EG-Bac STEM Blueprint for Chemistry (40 Questions / 150 Mins across 5 units):
      // 8 Qs per chapter across all 5 chapters (5 * 8 = 40)
      chemBranch.chapters.forEach((ch) => {
        const chQuestions = shuffle(helperExtractChapterQuestions(ch, chemBranch));
        selectedQs.push(...chQuestions.slice(0, 8));
      });

      examTimeMinutes = 150;
      setQuestionCount(40);
      setDurationPreset(150);
    }

    selectedQs = shuffle(selectedQs);
    launchExamSession(selectedQs, examTimeMinutes);
  };

  // Launch official Pure Mathematics Ministerial Exam (40 Qs / 180 Mins for Thanaweya; 40 Qs / 150 Mins for EG-Bac)
  const handleStartPureMathMinisterialExam = () => {
    setSelectedSubject('mathematics');
    const isThanaweya = currentCurriculum === 'thanaweya';
    const activeData = isThanaweya ? thanaweyaCurriculum : egBacCurriculum;

    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch('all');
    setSelectedChapter('all');
    setDifficulty('all');
    setIsTimed(true);

    let selectedQs: GeneratedQuestion[] = [];
    let examTimeMinutes = 180;

    if (isThanaweya) {
      // Thanaweya Pure Math: 20 Qs Algebra & Solid Geometry + 20 Qs Calculus
      const algBranch = activeData.branches.find((b) => b.id === 'algebra_solid');
      const calcBranch = activeData.branches.find((b) => b.id === 'calculus');

      if (algBranch) {
        const algQs: GeneratedQuestion[] = [];
        algBranch.chapters.forEach((ch) => algQs.push(...helperExtractChapterQuestions(ch, algBranch)));
        selectedQs.push(...shuffle(algQs).slice(0, 20));
      }
      if (calcBranch) {
        const calcQs: GeneratedQuestion[] = [];
        calcBranch.chapters.forEach((ch) => calcQs.push(...helperExtractChapterQuestions(ch, calcBranch)));
        selectedQs.push(...shuffle(calcQs).slice(0, 20));
      }

      examTimeMinutes = 180;
      setQuestionCount(40);
      setDurationPreset(180);
    } else {
      // EG-Bac STEM Pure Math: 20 Qs Vectors & Geometry + 20 Qs Analysis & Calculus
      const vecBranch = activeData.branches.find((b) => b.id === 'egbac_vectors_geometry');
      const anaBranch = activeData.branches.find((b) => b.id === 'egbac_analysis');

      if (vecBranch) {
        const vecQs: GeneratedQuestion[] = [];
        vecBranch.chapters.forEach((ch) => vecQs.push(...helperExtractChapterQuestions(ch, vecBranch)));
        selectedQs.push(...shuffle(vecQs).slice(0, 20));
      }
      if (anaBranch) {
        const anaQs: GeneratedQuestion[] = [];
        anaBranch.chapters.forEach((ch) => anaQs.push(...helperExtractChapterQuestions(ch, anaBranch)));
        selectedQs.push(...shuffle(anaQs).slice(0, 20));
      }

      examTimeMinutes = 150;
      setQuestionCount(40);
      setDurationPreset(150);
    }

    selectedQs = shuffle(selectedQs);
    launchExamSession(selectedQs, examTimeMinutes);
  };

  // Launch official Applied Mathematics Ministerial Exam (40 Qs / 180 Mins for Thanaweya; 40 Qs / 150 Mins for EG-Bac)
  const handleStartAppliedMathMinisterialExam = () => {
    setSelectedSubject('mathematics');
    const isThanaweya = currentCurriculum === 'thanaweya';
    const activeData = isThanaweya ? thanaweyaCurriculum : egBacCurriculum;

    if (examMode !== 'printable' && examMode !== 'bubble_sheet') {
      setExamMode('online');
    }
    setSelectedBranch('all');
    setSelectedChapter('all');
    setDifficulty('all');
    setIsTimed(true);

    let selectedQs: GeneratedQuestion[] = [];
    let examTimeMinutes = 180;

    if (isThanaweya) {
      // Thanaweya Applied Math: 20 Qs Statics + 20 Qs Dynamics
      const statBranch = activeData.branches.find((b) => b.id === 'statics');
      const dynBranch = activeData.branches.find((b) => b.id === 'dynamics');

      if (statBranch) {
        const statQs: GeneratedQuestion[] = [];
        statBranch.chapters.forEach((ch) => statQs.push(...helperExtractChapterQuestions(ch, statBranch)));
        selectedQs.push(...shuffle(statQs).slice(0, 20));
      }
      if (dynBranch) {
        const dynQs: GeneratedQuestion[] = [];
        dynBranch.chapters.forEach((ch) => dynQs.push(...helperExtractChapterQuestions(ch, dynBranch)));
        selectedQs.push(...shuffle(dynQs).slice(0, 20));
      }

      examTimeMinutes = 180;
      setQuestionCount(40);
      setDurationPreset(180);
    } else {
      // EG-Bac STEM Applied Math: 20 Qs Mechanics + 20 Qs Probability & Statistics
      const mechBranch = activeData.branches.find((b) => b.id === 'egbac_mechanics');
      const probBranch = activeData.branches.find((b) => b.id === 'egbac_probability');

      if (mechBranch) {
        const mechQs: GeneratedQuestion[] = [];
        mechBranch.chapters.forEach((ch) => mechQs.push(...helperExtractChapterQuestions(ch, mechBranch)));
        selectedQs.push(...shuffle(mechQs).slice(0, 20));
      }
      if (probBranch) {
        const probQs: GeneratedQuestion[] = [];
        probBranch.chapters.forEach((ch) => probQs.push(...helperExtractChapterQuestions(ch, probBranch)));
        selectedQs.push(...shuffle(probQs).slice(0, 20));
      }

      examTimeMinutes = 150;
      setQuestionCount(40);
      setDurationPreset(150);
    }

    selectedQs = shuffle(selectedQs);
    launchExamSession(selectedQs, examTimeMinutes);
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

    const hasPoints = activeQuestions.some((q) => q.points !== undefined);
    const officialExamScore: OfficialScoreReport | null = hasPoints
      ? computeOfficialExamScore(activeQuestions, userAnswers)
      : null;

    const scorePct = officialExamScore
      ? officialExamScore.markPercentage
      : total > 0
      ? Math.round((score / total) * 100)
      : 0;

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
    let gradeLabelEn = officialExamScore?.gradeLabelEn || 'Needs Review';
    let gradeLabelAr = officialExamScore?.gradeLabelAr || 'بحاجة لمزيد من التدريب والمراجعة';
    let gradeColor = officialExamScore?.gradeColor || 'text-amber-400 bg-amber-950/40 border-amber-500/40';

    if (!officialExamScore) {
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
      officialExamScore,
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
            <button
              onClick={() => setExamMode('bubble_sheet')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                examMode === 'bubble_sheet'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'بابل شيت رسمي (OMR)' : 'OMR Bubble Sheet'}</span>
            </button>
            <button
              onClick={() => setExamMode('mistakes')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                examMode === 'mistakes'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'كشكول الأخطاء' : 'Mistakes Notebook'}</span>
              {activeMistakesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-rose-950 text-rose-300 border border-rose-400/60">
                  {lang === 'ar' ? toHindiDigits(activeMistakesCount) : activeMistakesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* If in mistakes mode, render Mistake Notebook view */}
        {examMode === 'mistakes' ? (
          <MistakeNotebookView
            lang={lang}
            records={mistakeRecords}
            onRefreshRecords={refreshMistakeRecords}
            onStartRemediation={handleStartRemediation}
          />
        ) : (
          <>
            {/* Ministerial Simulation Quick Launch Banner */}
        {selectedSubject === 'physics' ? (
          <div className="bg-gradient-to-r from-sky-950/50 via-slate-900 to-indigo-950/50 border border-cyan-500/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-cyan-950/30">
            <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40 shadow-inner">
                <Zap className="w-6 h-6 animate-pulse text-cyan-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm sm:text-base font-black text-cyan-100">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'امتحان الفيزياء الوزاري الرسمي الشامل (50 سؤالاً / 180 دقيقة)' : 'امتحان الفيزياء المتقدمة لمدارس STEM (40 سؤالاً / 150 دقيقة)')
                      : (currentCurriculum === 'thanaweya' ? 'Official Ministerial Physics Final Exam (50 Qs / 180 Mins)' : 'Official EG-Bac STEM Physics Exam (40 Qs / 150 Mins)')}
                  </h4>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-bold px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'مواصفة الوزارة المعتمدة 2026' : 'معايير STEM المعتمدة')
                      : (currentCurriculum === 'thanaweya' ? 'Official MoE Spec 2026' : 'STEM Curriculum Standards')}
                  </span>
                </div>
                <p className="text-xs text-slate-300/90 mt-1 max-w-2xl leading-relaxed">
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya'
                        ? 'نموذج محاكاة مطابق لضوابط الوزارة: الدوائر الكهربية، التأثير المغناطيسي وأجهزة القياس، الحث والدينامو، دوائر التيار المتردد والرنين، وفيزياء الكم والحديثة (50 سؤالاً / 3 ساعات).'
                        : 'اختبار فيزياء متقدم لمدارس المتفوقين STEM يشمل ميكانيكا الكم، البصريات المتماسكة، إلكترونيات الحالة الصلبة، والميكانيكا النسبية والنووية (40 سؤالاً / 150 دقيقة).')
                    : (currentCurriculum === 'thanaweya'
                        ? 'Strictly aligned with official ministerial blueprint: DC Circuits, Electromagnetism, AC Induction & Dynamo, RLC Resonance, and Modern Quantum Physics (50 Qs / 180 mins).'
                        : 'Advanced STEM Physics comprehensive examination covering Quantum Mechanics, Coherent Laser Optics, Solid-State Electronics, and Relativistic Nuclear Physics (40 Qs / 150 mins).')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={handleStartPhysicsMinisterialExam}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-black py-3 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya' ? 'بدء امتحان الفيزياء الوزاري (50 سؤالاً)' : 'بدء امتحان الفيزياء STEM (40 سؤالاً)')
                    : (currentCurriculum === 'thanaweya' ? 'Launch Physics Exam (50 Qs)' : 'Launch STEM Physics (40 Qs)')}
                </span>
              </button>
            </div>
          </div>
        ) : selectedSubject === 'biology' ? (
          <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-emerald-950/30">
            <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-inner">
                <Dna className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm sm:text-base font-black text-emerald-100">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'امتحان الأحياء الوزاري الرسمي الشامل (50 سؤالاً / 180 دقيقة)' : 'امتحان الأحياء الشامل لمدارس STEM (40 سؤالاً / 150 دقيقة)')
                      : (currentCurriculum === 'thanaweya' ? 'Official Ministerial Biology Final Exam (50 Qs / 180 Mins)' : 'Official EG-Bac STEM Biology Exam (40 Qs / 150 Mins)')}
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'مواصفة الوزارة المعتمدة 2026' : 'معايير STEM المعتمدة')
                      : (currentCurriculum === 'thanaweya' ? 'Official MoE Spec 2026' : 'STEM Curriculum Standards')}
                  </span>
                </div>
                <p className="text-xs text-slate-300/90 mt-1 max-w-2xl leading-relaxed">
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya'
                        ? 'نموذج محاكاة مطابق لضوابط الوزارة: 10 أسئلة للدعامة والحركة، 8 للتنسيق الهرموني، 16 للتكاثر، 8 للمناعة، و8 للبيولوجيا الجزيئية. مؤقت 3 ساعات وتحليل فوري شامل.'
                        : 'اختبار تخصصي متكامل مقسم بالتساوي عبر فصول المنهج الأربعة (10 أسئلة لكل محور) بزمن 150 دقيقة.')
                    : (currentCurriculum === 'thanaweya'
                        ? 'Strictly aligned with official ministerial blueprint: 10 Qs Support & Movement, 8 Qs Hormones, 16 Qs Reproduction, 8 Qs Immunity, 8 Qs Molecular Biology (180 mins).'
                        : 'Comprehensive exam evenly distributed across all 4 chapters (10 Qs each) with a 150-minute timer.')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={handleStartBiologyMinisterialExam}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black py-3 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <Dna className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya' ? 'بدء امتحان الأحياء الوزاري (50 سؤالاً)' : 'بدء امتحان الأحياء STEM (40 سؤالاً)')
                    : (currentCurriculum === 'thanaweya' ? 'Launch Biology Exam (50 Qs)' : 'Launch STEM Biology (40 Qs)')}
                </span>
              </button>
            </div>
          </div>
        ) : selectedSubject === 'chemistry' ? (
          <div className="bg-gradient-to-r from-teal-950/50 via-slate-900 to-emerald-950/50 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-emerald-950/30">
            <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-inner">
                <FlaskConical className="w-6 h-6 animate-pulse text-emerald-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm sm:text-base font-black text-emerald-100">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'امتحان الكيمياء الوزاري الرسمي الشامل (50 سؤالاً / 180 دقيقة)' : 'امتحان الكيمياء الشامل لمدارس STEM (40 سؤالاً / 150 دقيقة)')
                      : (currentCurriculum === 'thanaweya' ? 'Official Ministerial Chemistry Final Exam (50 Qs / 180 Mins)' : 'Official EG-Bac STEM Chemistry Exam (40 Qs / 150 Mins)')}
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'مواصفة الوزارة المعتمدة 2026' : 'معايير STEM المعتمدة')
                      : (currentCurriculum === 'thanaweya' ? 'Official MoE Spec 2026' : 'STEM Curriculum Standards')}
                  </span>
                </div>
                <p className="text-xs text-slate-300/90 mt-1 max-w-2xl leading-relaxed">
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya'
                        ? 'نموذج محاكاة مطابق لضوابط الوزارة: العناصر الانتقالية، التحليل الكيميائي الوصفي والكمي، الاتزان ولوساتيليه، الكيمياء الكهربية، والكيمياء العضوية ومسارات التخليق (50 سؤالاً / 3 ساعات).'
                        : 'اختبار كيمياء شامل لمدارس STEM يغطي الحركية الكيميائية، الديناميكا الحرارية، التركيب الذري، والخلايا الكهروكيميائية (40 سؤالاً / 150 دقيقة).')
                    : (currentCurriculum === 'thanaweya'
                        ? 'Strictly aligned with official ministerial blueprint: Transition Elements, Qualitative/Quantitative Analysis, Equilibrium, Electrochemistry, and Organic Synthesis (50 Qs / 180 mins).'
                        : 'Advanced STEM Chemistry comprehensive examination covering Atomic Structure, Chemical Kinetics, Thermodynamics, and Electrochemical Cells (40 Qs / 150 mins).')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={handleStartChemistryMinisterialExam}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black py-3 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <FlaskConical className="w-4 h-4 fill-current" />
                <span>
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya' ? 'بدء امتحان الكيمياء الوزاري (50 سؤالاً)' : 'بدء امتحان الكيمياء STEM (40 سؤالاً)')
                    : (currentCurriculum === 'thanaweya' ? 'Launch Chemistry Exam (50 Qs)' : 'Launch STEM Chemistry (40 Qs)')}
                </span>
              </button>
            </div>
          </div>
        ) : selectedSubject === 'mathematics' ? (
          <div className="bg-gradient-to-r from-blue-950/50 via-slate-900 to-indigo-950/50 border border-blue-500/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-950/30">
            <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/40 shadow-inner">
                <Calculator className="w-6 h-6 animate-pulse text-blue-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm sm:text-base font-black text-blue-100">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'امتحانات الرياضيات الوزارية الرسمية (بحتة وتطبيقية)' : 'امتحانات الرياضيات المتقدمة لمدارس STEM')
                      : (currentCurriculum === 'thanaweya' ? 'Official Ministerial Mathematics Exams (Pure & Applied)' : 'Official STEM Advanced Mathematics Exams')}
                  </h4>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2.5 py-0.5 rounded-full border border-blue-500/40">
                    {lang === 'ar'
                      ? (currentCurriculum === 'thanaweya' ? 'مواصفة الوزارة المعتمدة 2026' : 'معايير STEM المعتمدة')
                      : (currentCurriculum === 'thanaweya' ? 'Official MoE Spec 2026' : 'STEM Curriculum Standards')}
                  </span>
                </div>
                <p className="text-xs text-slate-300/90 mt-1 max-w-2xl leading-relaxed">
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya'
                        ? 'نماذج محاكاة رسمية مطابقة لضوابط الوزارة: الرياضيات البحتة (جبر وفراغية وتفاضل وتكامل) والرياضيات التطبيقية (استاتيكا وديناميكا) بزمن 3 ساعات لكل امتحان.'
                        : 'اختبارات رياضيات تخصصية لمدارس STEM تشمل الهندسة المتجهية والتحليل المتقدم، والميكانيكا والاحتمال والإحصاء بزمن 150 دقيقة لكل امتحان.')
                    : (currentCurriculum === 'thanaweya'
                        ? 'Official simulations strictly aligned with MoE blueprints: Pure Math (Algebra, Solid Geometry & Calculus) and Applied Math (Statics & Dynamics) with a 3-hour timer.'
                        : 'Advanced STEM Mathematics exams covering Vectors & Analysis, and Mechanics & Probability with a 150-minute timer.')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={handleStartPureMathMinisterialExam}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <Calculator className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya' ? 'بدء امتحان الرياضيات البحتة (40 سؤالاً)' : 'بدء امتحان التحليل والهندسة (40 سؤالاً)')
                    : (currentCurriculum === 'thanaweya' ? 'Pure Math Exam (40 Qs)' : 'Analysis & Vectors (40 Qs)')}
                </span>
              </button>
              <button
                onClick={handleStartAppliedMathMinisterialExam}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? (currentCurriculum === 'thanaweya' ? 'بدء امتحان الرياضيات التطبيقية (40 سؤالاً)' : 'بدء امتحان الميكانيكا والاحتمال (40 سؤالاً)')
                    : (currentCurriculum === 'thanaweya' ? 'Applied Math Exam (40 Qs)' : 'Mechanics & Probability (40 Qs)')}
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-violet-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-amber-950/20">
            <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-sm sm:text-base font-black text-slate-100">
                    {lang === 'ar' ? 'محاكاة امتحانات الوزارة الرسمية 2026' : 'Official Ministerial Exam Simulations 2026'}
                  </h4>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full border border-amber-500/40">
                    {lang === 'ar' ? 'نماذج مطابقة 100%' : '100% Aligned Specs'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {lang === 'ar'
                    ? 'نماذج امتحانات شاملة تحاكي زمن وضوابط اختبارات نهاية العام بوزارة التربية والتعليم لكافة التخصصات مع مؤقت رسمي ولوحة تنقل وتصحيح تفاعلي فوري.'
                    : 'Full-length mock exams replicating official Grade 12 ministerial exam conditions across all subjects with official timers, question palettes, and immediate analytics.'}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={handleStartPureMathMinisterialExam}
                className="w-full sm:w-auto bg-blue-950/40 hover:bg-blue-900/50 text-blue-300 border border-blue-500/40 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shadow-sm"
              >
                <Calculator className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang === 'ar' ? 'بحتة' : 'Pure Math'}</span>
              </button>
              <button
                onClick={handleStartAppliedMathMinisterialExam}
                className="w-full sm:w-auto bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 border border-indigo-500/40 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'ar' ? 'تطبيقية' : 'Applied Math'}</span>
              </button>
              <button
                onClick={handleStartPhysicsMinisterialExam}
                className="w-full sm:w-auto bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/40 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'ar' ? 'فيزياء' : 'Physics'}</span>
              </button>
              <button
                onClick={handleStartChemistryMinisterialExam}
                className="w-full sm:w-auto bg-teal-950/40 hover:bg-teal-900/50 text-teal-300 border border-teal-500/40 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shadow-sm"
              >
                <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
                <span>{lang === 'ar' ? 'كيمياء' : 'Chemistry'}</span>
              </button>
              <button
                onClick={handleStartBiologyMinisterialExam}
                className="w-full sm:w-auto bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shadow-sm"
              >
                <Dna className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'ar' ? 'أحياء' : 'Biology'}</span>
              </button>
              <button
                onClick={handleStartMinisterialSimulation}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/30 transition-all cursor-pointer hover:scale-105"
              >
                <Timer className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'محاكاة شاملة (3 س)' : 'Full Mock (3h)'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Real-time Pool Indicator & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs text-slate-300 font-medium">
              {lang === 'ar' ? 'الأسئلة المتاحة في بنك الأسئلة وفقاً للفلاتر الحالية:' : 'Available Questions in Filtered Pool:'}
            </span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              {lang === 'ar' ? toHindiDigits(availablePoolCount.toString()) : availablePoolCount.toLocaleString()} {lang === 'ar' ? 'سؤالاً' : 'questions'}
            </span>
          </div>

          {availablePoolCount === 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-400 font-semibold">
                {lang === 'ar' ? 'لا توجد أسئلة تطابق هذه التوليفة من الفلاتر' : 'No questions match this combination'}
              </span>
              <button
                onClick={() => {
                  setSelectedSubject('all');
                  setSelectedBranch('all');
                  setSelectedChapter('all');
                  setDifficulty('all');
                }}
                className="text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-all"
              >
                {lang === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <span className="text-[11px] text-slate-400">
              {lang === 'ar' ? 'جاهز لتوليد الاختبار المخصص' : 'Ready to generate customized test'}
            </span>
          )}
        </div>

        {/* Diagnostic Benchmark Info Banner */}
        {blueprintMode === 'diagnostic_benchmark' && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-indigo-950/60 to-purple-950/60 border border-cyan-500/40 text-cyan-200 text-xs flex items-start gap-3 shadow-lg">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-extrabold text-white text-sm">
                {lang === 'ar'
                  ? '🎯 نمط اختبار تحديد المستوى والتشخيص الشامل (معايرة رادار الإتقان)'
                  : '🎯 Comprehensive Diagnostic Benchmark Mode (Mastery Radar Calibration)'}
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {lang === 'ar'
                  ? 'تم قفل وضبط المعايير تلقائياً: ٢٠ سؤالاً موزعة بالتساوي (٤ أسئلة لكل فرع من فروع الرياضيات البحتة والتطبيقية والفيزياء والكيمياء والأحياء) بمستويات بلوم المعرفية (٥ سهل، ١٠ متوسط، ٥ عليا) لتوليد تقييم دقيق فوري لمعايرة الرادار ومؤشر الجاهزية.'
                  : 'Automatically calibrated: 20 balanced questions (strictly 4 questions per branch across Pure Math, Applied Math, Physics, Chemistry, Biology) structured across Bloom cognitive tiers (5 Easy, 10 Medium, 5 HOTS) to establish a benchmark for your Mastery Radar and Readiness Index.'}
              </p>
            </div>
          </div>
        )}

        {/* Official Thanawya Mock Info Banner */}
        {blueprintMode === 'official_thanawya_mock' && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border-2 border-amber-500/50 text-amber-200 text-xs flex items-start gap-3 shadow-lg">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-extrabold text-white text-sm flex items-center gap-2">
                <span>
                  {lang === 'ar'
                    ? '🏛️ امتحانات المحاكاة الوزارية الرسمية لشهادة الثانوية العامة المصرية'
                    : '🏛️ Official Ministerial Thanawya Amma Mock Examination'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  {lang === 'ar' ? 'مواصفات المركز القومي للامتحانات' : 'Official MoE Spec'}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {(() => {
                  const cfg = getOfficialMockConfig(selectedSubject, selectedBranch);
                  return lang === 'ar'
                    ? `${cfg.titleAr}: ${cfg.descAr} تتوزع الأسئلة بدقة بين القسم الأول (أسئلة الدرجة الواحدة: ${toHindiDigits(cfg.section1Count)} سؤالاً) والقسم الثاني (أسئلة التفكير العليا بدرجتين: ${toHindiDigits(cfg.section2Count)} سؤالاً).`
                    : `${cfg.titleEn}: ${cfg.descEn} Apportioned between Section 1 (${cfg.section1Count} items @ 1 mark) and Section 2 (${cfg.section2Count} items @ 2 marks).`;
                })()}
              </p>
            </div>
          </div>
        )}

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3.5">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              {lang === 'ar' ? 'المادة الدراسية' : 'Subject Track'}
            </label>
            <select
              value={selectedSubject}
              disabled={blueprintMode === 'diagnostic_benchmark'}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedBranch('all');
                setSelectedChapter('all');
              }}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 cursor-pointer ${
                blueprintMode === 'diagnostic_benchmark' ? 'opacity-60 cursor-not-allowed bg-slate-900' : ''
              }`}
            >
              {blueprintMode === 'diagnostic_benchmark' ? (
                <option value="all">{lang === 'ar' ? 'جميع الفروع الخمسة (شامل)' : 'All 5 Branches (Comprehensive)'}</option>
              ) : (
                <>
                  <option value="all">{lang === 'ar' ? 'جميع المواد (شامل)' : 'All Subjects (Complete)'}</option>
                  {SUBJECTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.emoji} {lang === 'ar' ? s.titleAr : s.titleEn}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectBranch}</label>
            <select
              value={selectedBranch}
              disabled={blueprintMode === 'diagnostic_benchmark'}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                setSelectedChapter('all');
              }}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 cursor-pointer ${
                blueprintMode === 'diagnostic_benchmark' ? 'opacity-60 cursor-not-allowed bg-slate-900' : ''
              }`}
            >
              {blueprintMode === 'diagnostic_benchmark' ? (
                <option value="all">{lang === 'ar' ? '٤ أسئلة لكل فرع' : '4 Qs Per Branch'}</option>
              ) : (
                <>
                  <option value="all">{lang === 'ar' ? 'جميع الفروع المتاحة' : 'All Branches'}</option>
                  {getBranchesForSubject(
                    currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum,
                    selectedSubject
                  ).map((b) => (
                    <option key={b.id} value={b.id}>
                      {lang === 'ar' ? b.titleAr : b.titleEn}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectChapter}</label>
            <select
              value={selectedChapter}
              disabled={blueprintMode === 'diagnostic_benchmark'}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 cursor-pointer ${
                blueprintMode === 'diagnostic_benchmark' ? 'opacity-60 cursor-not-allowed bg-slate-900' : ''
              }`}
            >
              {blueprintMode === 'diagnostic_benchmark' ? (
                <option value="all">{lang === 'ar' ? 'تغطية شاملة لكافة الفصول' : 'Comprehensive All Chapters'}</option>
              ) : (
                <>
                  <option value="all">{lang === 'ar' ? 'جميع فصول الفرع' : 'All Chapters'}</option>
                  {getBranchesForSubject(
                    currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum,
                    selectedSubject
                  )
                    .filter((b) => selectedBranch === 'all' || b.id === selectedBranch)
                    .flatMap((b) => b.chapters)
                    .map((ch) => (
                      <option key={ch.id} value={ch.id}>
                        {lang === 'ar' ? ch.titleAr : ch.titleEn}
                      </option>
                    ))}
                </>
              )}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              {lang === 'ar' ? 'مخطط الصعوبة المعياري' : 'Difficulty Blueprint'}
            </label>
            <select
              value={blueprintMode}
              onChange={(e) => {
                const val = e.target.value as BlueprintMode;
                setBlueprintMode(val);
                if (val === 'diagnostic_benchmark') {
                  setSelectedSubject('all');
                  setSelectedBranch('all');
                  setSelectedChapter('all');
                  setQuestionCount(20);
                  setDurationPreset(30);
                } else if (val === 'official_thanawya_mock') {
                  const cfg = getOfficialMockConfig(selectedSubject, selectedBranch);
                  setQuestionCount(cfg.totalQuestions);
                  setDurationPreset(cfg.durationMinutes);
                  setIsTimed(true);
                }
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'تحديد حر للمستوى' : 'Custom Level Selection'}</option>
              <option value="official_thanawya_mock">
                {lang === 'ar'
                  ? '🏛️ محاكاة امتحان الوزارة الرسمي (نموذج 2021-2025: ٤٦/٢٠ سؤالاً - ٦٠/٣٠ درجة)'
                  : '🏛️ Official Thanawya Amma Mock (2021-2025: 46/20 Qs - 60/30 Marks)'}
              </option>
              <option value="diagnostic_benchmark">
                {lang === 'ar'
                  ? '🎯 اختبار تشخيص شامل ومعايرة الرادار (٢٠ سؤالاً متوازناً)'
                  : '🎯 Comprehensive Diagnostic Benchmark (20 Balanced Radar Qs)'}
              </option>
              <option value="ministry_standard">
                {lang === 'ar' ? 'مواصفة الوزارة (30% سهل، 40% متوسط، 30% تفكير عليا)' : 'Ministry Spec (30% Easy, 40% Med, 30% HOTS)'}
              </option>
              <option value="hots_challenge">
                {lang === 'ar' ? 'امتحان الأوائل (100% مهارات تفكير عليا HOTS)' : 'HOTS Challenge (100% High Order Thinking)'}
              </option>
              <option value="foundational">
                {lang === 'ar' ? 'مراجعة وتأسيس (تأسيسي ومعياري فقط)' : 'Foundational Revision (Easy & Med only)'}
              </option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectDifficulty}</label>
            <select
              value={difficulty}
              disabled={blueprintMode !== 'all'}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 ${
                blueprintMode !== 'all' ? 'opacity-60 cursor-not-allowed bg-slate-900' : ''
              }`}
            >
              {blueprintMode !== 'all' ? (
                <option value="all">
                  {blueprintMode === 'diagnostic_benchmark'
                    ? (lang === 'ar' ? 'متوازن للرادار (٥ سهل، ١٠ متوسط، ٥ عليا)' : 'Radar Balanced (5 Easy, 10 Med, 5 HOTS)')
                    : blueprintMode === 'official_thanawya_mock'
                    ? (lang === 'ar'
                        ? `توزيع وزاري رسمي (${toHindiDigits(getOfficialMockConfig(selectedSubject, selectedBranch).section1Count)} درجة + ${toHindiDigits(getOfficialMockConfig(selectedSubject, selectedBranch).section2Count)} درجتين)`
                        : `Official MoE Split (${getOfficialMockConfig(selectedSubject, selectedBranch).section1Count} @ 1pt + ${getOfficialMockConfig(selectedSubject, selectedBranch).section2Count} @ 2pt)`)
                    : blueprintMode === 'ministry_standard'
                    ? (lang === 'ar' ? 'مواصفة الوزارة (30/40/30)' : 'Ministry Spec (30/40/30)')
                    : blueprintMode === 'hots_challenge'
                    ? (lang === 'ar' ? '100% مهارات تفكير عليا' : '100% HOTS Questions')
                    : (lang === 'ar' ? 'سهل ومتوسط فقط' : 'Foundational Only')}
                </option>
              ) : (
                <>
                  <option value="all">{lang === 'ar' ? 'جميع المستويات' : 'All Levels'}</option>
                  <option value="easy">{lang === 'ar' ? 'سهل (تأسيسي وتطبيق مباشر)' : 'Easy (Foundational)'}</option>
                  <option value="medium">{lang === 'ar' ? 'متوسط (معياري)' : 'Medium (Standard MoE)'}</option>
                  <option value="exam_standard">{lang === 'ar' ? 'مستوى امتحان الوزارة' : 'MoE Standard Exam'}</option>
                  <option value="hots">{lang === 'ar' ? 'مهارات تفكير عليا (HOTS)' : 'High Order Thinking (HOTS)'}</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.numQuestions}</label>
            <select
              value={questionCount}
              disabled={blueprintMode === 'diagnostic_benchmark' || blueprintMode === 'official_thanawya_mock'}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500 ${
                blueprintMode === 'diagnostic_benchmark' || blueprintMode === 'official_thanawya_mock' ? 'opacity-60 cursor-not-allowed bg-slate-900' : ''
              }`}
            >
              {blueprintMode === 'official_thanawya_mock' ? (
                <option value={getOfficialMockConfig(selectedSubject, selectedBranch).totalQuestions}>
                  {lang === 'ar'
                    ? `${toHindiDigits(getOfficialMockConfig(selectedSubject, selectedBranch).totalQuestions)} سؤالاً (${toHindiDigits(getOfficialMockConfig(selectedSubject, selectedBranch).totalMarks)} درجة وزاري)`
                    : `${getOfficialMockConfig(selectedSubject, selectedBranch).totalQuestions} Qs (${getOfficialMockConfig(selectedSubject, selectedBranch).totalMarks} Marks Official)`}
                </option>
              ) : blueprintMode === 'diagnostic_benchmark' ? (
                <option value={20}>{lang === 'ar' ? '٢٠ سؤالاً (معياري للرادار)' : '20 Questions (Radar Standard)'}</option>
              ) : (
                <>
                  <option value={5}>{lang === 'ar' ? `5 أسئلة (اختبار سريع)` : `5 Questions (Quick Quiz)`}</option>
                  <option value={10}>{lang === 'ar' ? `10 أسئلة (تمرين نموذجي)` : `10 Questions (Standard)`}</option>
                  <option value={15}>{lang === 'ar' ? `15 سؤالاً (نصف امتحان)` : `15 Questions (Mid-term)`}</option>
                  <option value={20}>{lang === 'ar' ? `20 سؤالاً (امتحان كامل)` : `20 Questions (Full Exam)`}</option>
                  <option value={30}>{lang === 'ar' ? `30 سؤالاً (شامل مكثف)` : `30 Questions (Intensive)`}</option>
                  <option value={40}>{lang === 'ar' ? `40 سؤالاً (امتحان الوزارة النهائي الرسمي)` : `40 Questions (Official Ministerial Exam)`}</option>
                  <option value={50}>{lang === 'ar' ? `50 سؤالاً (شامل موسع)` : `50 Questions (Comprehensive Mock)`}</option>
                </>
              )}
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
              <option value="90">{lang === 'ar' ? '90 دقيقة (ساعة ونصف)' : '90 Minutes (1.5 hrs)'}</option>
              <option value="120">{lang === 'ar' ? '120 دقيقة (ساعتان)' : '120 Minutes (2 hrs)'}</option>
              <option value="180">{lang === 'ar' ? '180 دقيقة (3 ساعات - محاكاة الوزارة الرسمية)' : '180 Minutes (3 hrs - Official Simulation)'}</option>
              <option value="untimed">{lang === 'ar' ? 'بدون توقيت (تدريب حر)' : 'Untimed (Self-paced)'}</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleStartExam}
              disabled={availablePoolCount === 0}
              className={`w-full font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all ${
                availablePoolCount === 0
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30 cursor-pointer'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.generateTest}</span>
            </button>
          </div>
        </div>
          </>
        )}
      </div>

      {/* Printable Exam Paper View */}
      {examMode === 'printable' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl space-y-6 print-exam-sheet">
          {/* Printable Mode Controls & Teacher Toolbar (Hidden during actual print) */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 space-y-4 no-print shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <Printer className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {lang === 'ar' ? 'أدوات الطباعة وإعداد ورقة الامتحان' : 'Printable Worksheet & Exam Controls'}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'ar'
                      ? 'تخصيص الكليشة الرسمية، نموذج الإجابة، الشرح التفصيلي، والتنسيق الموفر للورق'
                      : 'Customize official header, answer key sheet, model solutions, and paper-saving layouts'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Copy Exam to Markdown */}
                <button
                  type="button"
                  onClick={handleCopyExamMarkdown}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    isCopiedNotification
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                  }`}
                  title={lang === 'ar' ? 'نسخ نص الامتحان بالكامل إلى الحافظة' : 'Copy entire exam text to clipboard'}
                >
                  {isCopiedNotification ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'ar' ? 'تم النسخ بنجاح!' : 'Copied to Clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{lang === 'ar' ? 'نسخ الامتحان (Markdown)' : 'Copy Exam (Text)'}</span>
                    </>
                  )}
                </button>

                {/* Toggle Paper Customizer */}
                <button
                  type="button"
                  onClick={() => setIsCustomizerOpen((prev) => !prev)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    isCustomizerOpen
                      ? 'bg-indigo-950 border-indigo-500 text-indigo-300'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{lang === 'ar' ? 'تخصيص الكليشة والاسم' : 'Customize Header'}</span>
                  {isCustomizerOpen ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                </button>

                {/* Primary Print Button */}
                <button
                  onClick={handlePrint}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-2 px-5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer hover:scale-105 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.printWorksheet}</span>
                </button>
              </div>
            </div>

            {/* Quick Option Toggles Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                {/* Toggle Answer Key */}
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={showAnswerKeyOnPrint}
                    onChange={(e) => setShowAnswerKeyOnPrint(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span>{lang === 'ar' ? 'تضمين ملحق نموذج الإجابة الرسمي في الطباعة' : 'Include Model Answer Key Sheet on Print'}</span>
                </label>

                {/* Toggle Step-by-Step Solutions */}
                {showAnswerKeyOnPrint && (
                  <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300 hover:text-white transition-colors">
                    <input
                      type="checkbox"
                      checked={showExplanationsOnPrint}
                      onChange={(e) => setShowExplanationsOnPrint(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    />
                    <span>{lang === 'ar' ? 'تضمين خطوات الحل والشرح التفصيلي' : 'Include Step-by-Step Solutions on Print'}</span>
                  </label>
                )}
              </div>

              {/* Layout Switcher: Standard vs Compact 2-Col */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 px-1.5">{lang === 'ar' ? 'تنسيق الطباعة:' : 'Layout:'}</span>
                <button
                  type="button"
                  onClick={() => setPrintLayout('standard')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    printLayout === 'standard'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ar' ? 'قياسي (عمود واحد)' : 'Standard (1-Col)'}
                </button>
                <button
                  type="button"
                  onClick={() => setPrintLayout('compact')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    printLayout === 'compact'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Columns className="w-3 h-3" />
                  <span>{lang === 'ar' ? 'موفر للورق (عمودان)' : 'Paper Saver (2-Col)'}</span>
                </button>
              </div>
            </div>

            {/* Collapsible Teacher / Academy Customizer Drawer */}
            {isCustomizerOpen && (
              <div className="bg-slate-900/90 border border-indigo-500/30 rounded-xl p-4 sm:p-5 mt-3 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    <span>{lang === 'ar' ? 'تخصيص بيانات ترويسة ورقة الامتحان (كليشة المعلم والسنتر)' : 'Customize Exam Paper Header & Teacher Branding'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCustomSchoolName('');
                      setCustomTeacherName('');
                      setCustomExamTitle('');
                      setCustomAcademicYear('2025 - 2026');
                      setCustomGradeSection('');
                    }}
                    className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold cursor-pointer underline"
                  >
                    {lang === 'ar' ? 'استعادة الافتراضيات الرسمية' : 'Reset to Official Defaults'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {lang === 'ar' ? 'اسم المدرسة / السنتر / الأكاديمية' : 'School / Academy / Center Name'}
                    </label>
                    <input
                      type="text"
                      value={customSchoolName}
                      onChange={(e) => setCustomSchoolName(e.target.value)}
                      placeholder={lang === 'ar' ? 'جمهورية مصر العربية - وزارة التربية والتعليم' : 'Ministry of Education & Technical Education'}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:border-indigo-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {lang === 'ar' ? 'اسم المعلم / واضع الامتحان' : 'Teacher / Instructor Name'}
                    </label>
                    <input
                      type="text"
                      value={customTeacherName}
                      onChange={(e) => setCustomTeacherName(e.target.value)}
                      placeholder={lang === 'ar' ? 'إعداد: الأستاذ / ...' : 'Prepared by: Teacher ...'}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:border-indigo-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {lang === 'ar' ? 'عنوان الامتحان الرئيسي' : 'Main Exam Title'}
                    </label>
                    <input
                      type="text"
                      value={customExamTitle}
                      onChange={(e) => setCustomExamTitle(e.target.value)}
                      placeholder={lang === 'ar' ? 'امتحان شهادة إتمام الدراسة الثانوية العامة' : 'Official Mock Examination'}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:border-indigo-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {lang === 'ar' ? 'العام الدراسي' : 'Academic Year'}
                    </label>
                    <input
                      type="text"
                      value={customAcademicYear}
                      onChange={(e) => setCustomAcademicYear(e.target.value)}
                      placeholder="2025 - 2026"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:border-indigo-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {lang === 'ar' ? 'الصف والشعبة' : 'Grade & Track'}
                    </label>
                    <input
                      type="text"
                      value={customGradeSection}
                      onChange={(e) => setCustomGradeSection(e.target.value)}
                      placeholder={lang === 'ar' ? 'الصف الثالث الثانوي (علمي علوم / علمي رياضة)' : 'Grade 12 (Thanaweya Amma)'}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:border-indigo-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div className="flex items-end">
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {lang === 'ar'
                        ? 'يتم حفظ هذه البيانات تلقائياً في متصفحك وستظهر في ترويسة ورقة الأسئلة وملحق الإجابة المطبوعة.'
                        : 'Custom branding is auto-saved locally and will appear on both printed question sheets and answer appendices.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Official Egyptian MoE & ClipSAT Header on Printable Paper */}
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
                  {customSchoolName || (lang === 'ar' ? 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني' : 'Arab Republic of Egypt - Ministry of Education')}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {customExamTitle || t.officialExamHeader}
                </p>
                {customTeacherName && (
                  <p className="text-xs font-bold text-indigo-300 mt-0.5">
                    {customTeacherName}
                  </p>
                )}
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {customAcademicYear} {customGradeSection ? `• ${customGradeSection}` : ''}
                </p>
              </div>

              <div className="text-right text-xs space-y-1">
                <p className="font-bold text-emerald-400">
                  {lang === 'ar'
                    ? `الدرجة الكلية: ${toHindiDigits(activeQuestions.reduce((s, q) => s + (q.points ?? 2), 0))} درجة`
                    : `Total Marks: ${activeQuestions.reduce((s, q) => s + (q.points ?? 2), 0)}`}
                </p>
                <p className="font-bold text-cyan-400">
                  {lang === 'ar'
                    ? `الزمن: ${toHindiDigits(durationPreset === 180 ? 3 : durationPreset === 120 ? 2 : Math.round((activeQuestions.length * 2) / 60) || 1)} ساعة`
                    : `Time Allowed: ${durationPreset === 180 ? 3 : durationPreset === 120 ? 2 : Math.round((activeQuestions.length * 2) / 60) || 1} Hours`}
                </p>
                <p className="font-semibold text-slate-400 text-[11px]">
                  {lang === 'ar'
                    ? `عدد الأسئلة: ${toHindiDigits(activeQuestions.length)} سؤالاً`
                    : `Questions: ${activeQuestions.length}`}
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

          {/* Questions list respecting standard or compact 2-col layout */}
          <div className={`pt-4 ${printLayout === 'compact' ? 'space-y-4 print-compact-grid' : 'space-y-8'}`}>
            {activeQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="border border-slate-300 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-950 space-y-4 shadow-sm printable-question print-avoid-break"
              >
                <div className="flex items-start justify-between">
                  <span className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800">
                    {lang === 'ar' ? `السؤال رقم (${toHindiDigits(idx + 1)})` : `Question (${idx + 1})`}
                  </span>
                  <div className="flex items-center gap-2">
                    {q.points !== undefined && (
                      <span className="text-[10px] px-2 py-0.5 rounded border font-bold text-amber-300 border-amber-500/40 bg-amber-950/30">
                        {q.points === 2
                          ? (lang === 'ar' ? 'درجتان (تفكير عليا)' : '2 Marks (HOTS)')
                          : (lang === 'ar' ? 'درجة واحدة' : '1 Mark')}
                      </span>
                    )}
                    <span className="text-[10px] px-2 py-0.5 rounded border font-bold text-slate-400 dark:text-slate-400 border-slate-300 dark:border-slate-800">
                      {q.difficulty === 'hots'
                        ? (lang === 'ar' ? 'مهارات تفكير عليا' : 'HOTS')
                        : q.difficulty === 'easy'
                        ? (lang === 'ar' ? 'تأسيسي' : 'Easy')
                        : (lang === 'ar' ? 'معياري' : 'Standard')}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                      {lang === 'ar' ? `${q.branchTitleAr} • ${q.chapterTitleAr}` : `${q.branchTitleEn} • ${q.chapterTitleEn}`}
                    </span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
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

          {/* Printable Model Answer Key & Solution Appendix Sheet */}
          {showAnswerKeyOnPrint && (
            <div className="mt-12 pt-8 border-t-4 border-double border-slate-700 print-page-break-before space-y-6 print-avoid-break">
              {/* Appendix Header */}
              <div className="border-4 border-double border-slate-700 p-4 sm:p-5 rounded-xl bg-slate-950/40 text-center print-exam-header print-avoid-break">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-slate-700 pb-3">
                  <div className="text-left rtl:text-right">
                    <p className="text-xs font-black text-indigo-400">
                      {customSchoolName || (lang === 'ar' ? 'جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني' : 'Arab Republic of Egypt - Ministry of Education')}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {customAcademicYear} {customGradeSection ? `• ${customGradeSection}` : ''}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-amber-400">
                      {lang === 'ar' ? 'نموذج الإجابة الرسمي والحلول المعتمدة' : 'Official Model Answer Key & Solution Appendix'}
                    </h3>
                    <p className="text-xs font-bold text-slate-200 mt-0.5">
                      {customExamTitle || t.officialExamHeader}
                    </p>
                  </div>
                  <div className="text-right rtl:text-left text-xs space-y-0.5">
                    <span className="font-bold text-emerald-400 block">
                      {lang === 'ar' ? `إجمالي الأسئلة: ${toHindiDigits(activeQuestions.length)}` : `Total Questions: ${activeQuestions.length}`}
                    </span>
                    <span className="font-bold text-cyan-400 block">
                      {lang === 'ar'
                        ? `الدرجة العظمى: ${toHindiDigits(activeQuestions.reduce((s, q) => s + (q.points ?? 2), 0))}`
                        : `Max Marks: ${activeQuestions.reduce((s, q) => s + (q.points ?? 2), 0)}`}
                    </span>
                  </div>
                </div>
                {customTeacherName && (
                  <p className="text-xs font-bold text-slate-300 pt-1 text-center">
                    {lang === 'ar' ? `إعداد وتدقيق: ${customTeacherName}` : `Prepared & Reviewed by: ${customTeacherName}`}
                  </p>
                )}
              </div>

              {/* Quick Answer Key Matrix Table */}
              <div className="space-y-2">
                <div className="flex items-center justify-between no-print">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{lang === 'ar' ? 'جدول مفتاح الإجابات السريع (Quick Scoring Grid)' : 'Quick Scoring Matrix'}</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {activeQuestions.some(q => q.points !== undefined)
                      ? (lang === 'ar' ? 'توزيع درجات الامتحان الرسمي (درجة ودرجتان)' : 'Official Exam Weighting (1 & 2 Marks)')
                      : (lang === 'ar' ? 'درجتان لكل سؤال' : '2 Marks per Question')}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-700 text-xs text-center print-answer-key-table">
                    <thead>
                      <tr className="bg-slate-800 text-slate-200 border-b border-slate-700">
                        <th className="p-2 border border-slate-700 w-12 font-black">{lang === 'ar' ? 'رقم' : 'Q#'}</th>
                        <th className="p-2 border border-slate-700 w-16 font-black">{lang === 'ar' ? 'الرمز' : 'Key'}</th>
                        <th className="p-2 border border-slate-700 w-16 font-black">{lang === 'ar' ? 'الدرجة' : 'Mark'}</th>
                        <th className="p-2 border border-slate-700 text-left rtl:text-right font-black">{lang === 'ar' ? 'الإجابة النموذجية المعتمدة' : 'Correct Answer Option'}</th>
                        <th className="p-2 border border-slate-700 w-24 font-black">{lang === 'ar' ? 'المستوى' : 'Level'}</th>
                        <th className="p-2 border border-slate-700 text-left rtl:text-right font-black">{lang === 'ar' ? 'الفصل / الوحدة' : 'Chapter / Branch'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeQuestions.map((q, idx) => {
                        const correctLetter = lang === 'ar' ? ['أ', 'ب', 'ج', 'د'][q.correctIndex] : String.fromCharCode(65 + q.correctIndex);
                        const correctText = lang === 'ar' ? q.optionsAr[q.correctIndex] : q.optionsEn[q.correctIndex];
                        const diffLabel = q.difficulty === 'hots'
                          ? (lang === 'ar' ? 'تفكير عليا' : 'HOTS')
                          : q.difficulty === 'easy'
                          ? (lang === 'ar' ? 'تأسيسي' : 'Easy')
                          : (lang === 'ar' ? 'معياري' : 'Medium');

                        return (
                          <tr
                            key={q.id}
                            className={`border-b border-slate-800 ${idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-950/40'}`}
                          >
                            <td className="p-2 border border-slate-800 font-bold text-slate-300">
                              {lang === 'ar' ? toHindiDigits(idx + 1) : idx + 1}
                            </td>
                            <td className="p-2 border border-slate-800 font-black text-emerald-400 text-sm">
                              ({correctLetter})
                            </td>
                            <td className="p-2 border border-slate-800 font-black text-amber-400 text-xs">
                              {q.points !== undefined
                                ? (lang === 'ar' ? `${toHindiDigits(q.points)} د` : `${q.points} pt`)
                                : (lang === 'ar' ? '٢ د' : '2 pt')}
                            </td>
                            <td className="p-2 border border-slate-800 text-left rtl:text-right font-medium text-slate-200">
                              <MathRenderer math={correctText} lang={lang} />
                            </td>
                            <td className="p-2 border border-slate-800 text-[11px] font-semibold text-slate-400">
                              <span
                                className={`px-2 py-0.5 rounded border inline-block ${
                                  q.difficulty === 'hots'
                                    ? 'border-amber-500/40 text-amber-300 bg-amber-950/20'
                                    : q.difficulty === 'easy'
                                    ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20'
                                    : 'border-slate-700 text-slate-300 bg-slate-900/40'
                                }`}
                              >
                                {diffLabel}
                              </span>
                            </td>
                            <td className="p-2 border border-slate-800 text-left rtl:text-right text-[11px] text-slate-400">
                              {lang === 'ar' ? `${q.branchTitleAr} • ${q.chapterTitleAr}` : `${q.branchTitleEn} • ${q.chapterTitleEn}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Step-by-Step Explanations Section */}
              {showExplanationsOnPrint && (
                <div className="space-y-6 pt-6 print-page-break-before">
                  <div className="border-b border-slate-700 pb-2">
                    <h4 className="text-sm font-black text-amber-400 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{lang === 'ar' ? 'الشرح النموذجي وخطوات الحل المفصلة' : 'Step-by-Step Solutions & Mathematical Explanations'}</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {lang === 'ar' ? 'خطوات الاستنتاج الرياضي والعلمي وفقاً لمعايير التصحيح الوزاري' : 'Full ministerial marking guide and conceptual derivations'}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {activeQuestions.map((q, idx) => {
                      const correctLetter = lang === 'ar' ? ['أ', 'ب', 'ج', 'د'][q.correctIndex] : String.fromCharCode(65 + q.correctIndex);
                      const correctText = lang === 'ar' ? q.optionsAr[q.correctIndex] : q.optionsEn[q.correctIndex];
                      const steps = lang === 'ar' ? q.explanationAr : q.explanationEn;

                      return (
                        <div
                          key={q.id}
                          className="border border-slate-300 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-950/60 space-y-3 printable-problem print-avoid-break"
                        >
                          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
                            <span className="font-black text-indigo-400 text-xs">
                              {lang === 'ar' ? `إجابة السؤال رقم (${toHindiDigits(idx + 1)})` : `Solution to Question (${idx + 1})`}
                            </span>
                            <span className="bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded text-xs font-bold">
                              {lang === 'ar' ? `الاختيار الصحيح: (${correctLetter})` : `Correct Choice: (${correctLetter})`}
                            </span>
                          </div>

                          <div className="text-xs font-semibold text-slate-200">
                            <MathRenderer math={lang === 'ar' ? q.questionAr : q.questionEn} lang={lang} />
                          </div>

                          <div className="bg-emerald-950/20 border-r-2 rtl:border-r-2 rtl:border-l-0 border-emerald-500 p-2 text-xs font-bold text-emerald-300">
                            <span>{lang === 'ar' ? 'الإجابة المعتمدة:' : 'Selected Answer:'} </span>
                            <MathRenderer math={correctText} lang={lang} />
                          </div>

                          {steps && steps.length > 0 && (
                            <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                {lang === 'ar' ? 'خطوات الحل والتعليل:' : 'Derivation Steps:'}
                              </span>
                              {steps.map((step, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="pl-3 rtl:pr-3 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-indigo-500/40 py-0.5"
                                >
                                  <MathRenderer math={step} lang={lang} />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
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
              <div className="sticky top-[100px] sm:top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xl space-y-2.5 sm:space-y-3">
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
                    <button
                      type="button"
                      onClick={() => setIsScratchpadOpen(true)}
                      className="bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-300 hover:text-purple-200 font-bold py-2 px-3 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5"
                      title={lang === 'ar' ? 'المسودة الرياضية التفاعلية' : 'Interactive Math Scratchpad'}
                    >
                      <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                      <span className="hidden sm:inline">{lang === 'ar' ? 'المسودة' : 'Scratchpad'}</span>
                    </button>
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
                <div className="border-t border-slate-800/80 pt-2.5 flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar touch-pan-x">
                  <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap shrink-0">
                    {lang === 'ar' ? 'الأسئلة:' : 'Questions:'}
                  </span>
                  <div className="flex items-center gap-1.5 flex-nowrap">
                    {activeQuestions.map((q, idx) => {
                      const isAnswered = userAnswers[idx] !== undefined;
                      const isFlagged = !!flaggedQuestions[idx];
                      const isCorrect = isSubmitted && userAnswers[idx] === q.correctIndex;
                      const isWrong = isSubmitted && isAnswered && userAnswers[idx] !== q.correctIndex;

                      const isFirstQ = idx === 0;
                      const isSection2Start = idx > 0 && q.points === 2 && activeQuestions[idx - 1].points !== 2;

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
                        <React.Fragment key={idx}>
                          {isFirstQ && q.points !== undefined && (
                            <span className="text-[10px] font-black px-2 py-1 rounded bg-slate-800/90 text-emerald-400 border border-emerald-500/30 whitespace-nowrap shrink-0">
                              {lang === 'ar' ? 'القسم ١ (١ د)' : 'Sec 1 (1 pt)'}
                            </span>
                          )}
                          {isSection2Start && (
                            <span className="text-[10px] font-black px-2 py-1 mx-1 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 whitespace-nowrap shrink-0 flex items-center gap-1 shadow-sm">
                              <Award className="w-3 h-3" />
                              {lang === 'ar' ? 'القسم ٢ (درجتان)' : 'Sec 2 (2 pts)'}
                            </span>
                          )}
                          <button
                            onClick={() => scrollToQuestion(idx)}
                            className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center border transition-all shrink-0 cursor-pointer relative ${btnStyle}`}
                            title={`Question ${idx + 1}`}
                          >
                            <span>{lang === 'ar' ? toHindiDigits(idx + 1) : idx + 1}</span>
                            {isFlagged && !isSubmitted && (
                              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-slate-900" />
                            )}
                          </button>
                        </React.Fragment>
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
                            {stats.officialExamScore ? (
                              lang === 'ar'
                                ? `أحرزت ${toHindiDigits(stats.officialExamScore.earnedMarks)} من أصل ${toHindiDigits(stats.officialExamScore.totalMarks)} درجة (${toHindiDigits(stats.officialExamScore.correctCount)} من ${toHindiDigits(stats.total)} أسئلة صحيحة)`
                                : `Scored ${stats.officialExamScore.earnedMarks} out of ${stats.officialExamScore.totalMarks} marks (${stats.officialExamScore.correctCount} / ${stats.total} correct questions)`
                            ) : (
                              lang === 'ar'
                                ? `أحرزت ${toHindiDigits(score)} من أصل ${toHindiDigits(stats.total)} درجة`
                                : `Scored ${score} out of ${stats.total} points`
                            )}
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

                    {/* Official Ministerial Section Breakdown if official exam */}
                    {stats.officialExamScore && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5 pt-5 border-t border-slate-800/80">
                        <div className="bg-slate-950/70 p-3.5 rounded-xl border border-emerald-500/30">
                          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                              {lang === 'ar' ? 'القسم الأول (أسئلة الدرجة الواحدة):' : 'Section 1 (1-Mark Questions):'}
                            </span>
                            <span className="text-slate-200 font-mono font-black">
                              {lang === 'ar'
                                ? `${toHindiDigits(stats.officialExamScore.section1EarnedMarks)} / ${toHindiDigits(stats.officialExamScore.section1TotalMarks)} درجة`
                                : `${stats.officialExamScore.section1EarnedMarks} / ${stats.officialExamScore.section1TotalMarks} marks`}
                            </span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${
                                  stats.officialExamScore.section1TotalMarks > 0
                                    ? (stats.officialExamScore.section1EarnedMarks / stats.officialExamScore.section1TotalMarks) * 100
                                    : 0
                                }%`,
                              }}
                            />
                          </div>
                        </div>

                        <div className="bg-slate-950/70 p-3.5 rounded-xl border border-amber-500/30">
                          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                            <span className="text-amber-400 flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5" />
                              {lang === 'ar' ? 'القسم الثاني (أسئلة الدرجتين - تفكير عليا):' : 'Section 2 (2-Mark Questions - HOTS):'}
                            </span>
                            <span className="text-slate-200 font-mono font-black">
                              {lang === 'ar'
                                ? `${toHindiDigits(stats.officialExamScore.section2EarnedMarks)} / ${toHindiDigits(stats.officialExamScore.section2TotalMarks)} درجة`
                                : `${stats.officialExamScore.section2EarnedMarks} / ${stats.officialExamScore.section2TotalMarks} marks`}
                            </span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-amber-500 h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${
                                  stats.officialExamScore.section2TotalMarks > 0
                                    ? (stats.officialExamScore.section2EarnedMarks / stats.officialExamScore.section2TotalMarks) * 100
                                    : 0
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Newly Earned Academic Badges Banner */}
                    {newlyEarnedBadges.length > 0 && (
                      <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border-2 border-amber-500/50 shadow-2xl shadow-amber-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/30 shrink-0">
                                <Award className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    {lang === 'ar' ? 'إنجاز جديد' : 'New Milestone'}
                                  </span>
                                  <span className="text-xs text-slate-400 font-semibold">
                                    {lang === 'ar'
                                      ? `تم فتح ${toHindiDigits(newlyEarnedBadges.length)} شارة تميز جديدة!`
                                      : `${newlyEarnedBadges.length} new achievement badge${newlyEarnedBadges.length > 1 ? 's' : ''} unlocked!`}
                                  </span>
                                </div>
                                <h4 className="text-base sm:text-lg font-black text-amber-200 mt-0.5">
                                  {lang === 'ar' ? '🎉 مبارك! ارتقيت في سُلّم التفوق الأكاديمي' : '🎉 Congratulations! You leveled up!'}
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {newlyEarnedBadges.map((badge) => {
                              const tierTheme =
                                badge.tier === 'diamond'
                                  ? 'border-cyan-400/60 bg-cyan-950/40 text-cyan-200'
                                  : badge.tier === 'gold'
                                  ? 'border-amber-500/60 bg-amber-950/40 text-amber-200'
                                  : badge.tier === 'silver'
                                  ? 'border-slate-400/60 bg-slate-900/60 text-slate-200'
                                  : 'border-orange-500/60 bg-orange-950/40 text-orange-200';
                              return (
                                <div
                                  key={badge.id}
                                  className={`p-3.5 rounded-xl border flex items-center gap-3.5 backdrop-blur-sm shadow-md ${tierTheme}`}
                                >
                                  <div className="text-3xl shrink-0 p-1.5 rounded-xl bg-slate-950/50 border border-white/10">
                                    {badge.icon}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-bold text-sm text-slate-100 truncate">
                                        {lang === 'ar' ? badge.titleAr : badge.titleEn}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-300/80 line-clamp-2 mt-0.5 leading-relaxed">
                                      {lang === 'ar' ? badge.descAr : badge.descEn}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mistake Notebook Banner if mistakes were made */}
                    {(stats.total - score > 0 || lastLoggedMistakesCount > 0) && (
                      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-indigo-950/70 border border-rose-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl shadow-rose-950/20">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0 shadow-inner">
                            <BookMarked className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                              <span>{lang === 'ar' ? 'تم توثيق الأسئلة الخاطئة في "كشكول الأخطاء" 📓' : 'Mistakes Logged to Notebook 📓'}</span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                {lang === 'ar' ? `${toHindiDigits(stats.total - score)} أخطاء` : `${stats.total - score} missed`}
                              </span>
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {lang === 'ar'
                                ? 'يمكنك فحص خطوات الحل وتصحيح المفهوم العلمي، أو بدء اختبار علاجي فوري لتدارك المفاهيم.'
                                : 'Review step-by-step model solutions or launch an immediate remediation test.'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <button
                            onClick={() => setExamMode('mistakes')}
                            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all"
                          >
                            <BookMarked className="w-3.5 h-3.5 text-rose-400" />
                            <span>{lang === 'ar' ? 'فتح كشكول الأخطاء' : 'Open Notebook'}</span>
                          </button>

                          <button
                            onClick={() => {
                              const missedQuestions = activeQuestions.filter((q, idx) => userAnswers[idx] !== q.correctIndex);
                              if (missedQuestions.length > 0) {
                                handleStartRemediation(missedQuestions, 'online');
                              }
                            }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-950/40 flex items-center gap-1.5 cursor-pointer transition-all"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>{lang === 'ar' ? 'بدء اختبار علاجي فوري' : 'Instant Remediation'}</span>
                          </button>
                        </div>
                      </div>
                    )}

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
                          {q.points !== undefined && (
                            <span
                              className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                                q.points === 2
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/10'
                                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              }`}
                            >
                              <Award className="w-3 h-3" />
                              {q.points === 2
                                ? (lang === 'ar' ? 'درجتان (تفكير عليا)' : '2 Marks (HOTS)')
                                : (lang === 'ar' ? 'درجة واحدة' : '1 Mark')}
                            </span>
                          )}
                          {q.sectionTagAr && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700 hidden sm:inline">
                              {lang === 'ar' ? q.sectionTagAr : q.sectionTagEn}
                            </span>
                          )}
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
                                  <CheckCircle2 className="w-4 h-4" /> {lang === 'ar' ? `إجابة صحيحة (+${toHindiDigits(q.points ?? 1)})` : `Correct (+${q.points ?? 1})`}
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

      {/* Official MoE Bubble Sheet Simulator Mode */}
      {examMode === 'bubble_sheet' && (
        <div className="space-y-6">
          <BubbleSheetSimulator
            totalQuestions={activeQuestions.length > 0 ? activeQuestions.length : questionCount}
            answerKey={activeQuestions.map((q, idx) => ({
              questionIndex: idx + 1,
              correctOption: (['A', 'B', 'C', 'D'][q.correctIndex] || 'A') as 'A' | 'B' | 'C' | 'D',
              subject: q.chapterTitleEn,
              points: q.points,
            }))}
            timeLimitMinutes={durationPreset === 'auto' ? Math.max(20, questionCount * 2) : durationPreset}
            lang={lang}
            onExamSubmitted={(scr, _total, answers) => {
              setScore(scr);
              setIsSubmitted(true);
              const letterToIdx: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
              const numericAnswers: Record<number, number> = {};
              if (answers) {
                Object.entries(answers).forEach(([qNum, ltr]) => {
                  const qIdx = Number(qNum) - 1;
                  if (ltr && letterToIdx[ltr] !== undefined) {
                    numericAnswers[qIdx] = letterToIdx[ltr];
                  }
                });
                setUserAnswers(numericAnswers);
                const mistakeResult = recordQuizMistakes(activeQuestions, numericAnswers, currentCurriculum);
                recordQuizAttempt(activeQuestions, numericAnswers, 0);
                const badgeEval = evaluateBadges();
                if (badgeEval.newlyUnlocked.length > 0) {
                  setNewlyEarnedBadges(badgeEval.newlyUnlocked);
                  confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
                }
                refreshMistakeRecords();
                setLastLoggedMistakesCount(mistakeResult.added + mistakeResult.updated);
              }
            }}
          />
        </div>
      )}

      {/* Interactive Math Scratchpad Modal */}
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
  );
};
