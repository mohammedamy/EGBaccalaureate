import type { Curriculum, DifficultyLevel, SolvedProblem } from '../types/curriculum';
import type { GeneratedQuestion } from './mistakeNotebookService';

export const STUDENT_ANALYTICS_STORAGE_KEY = 'egbac_student_analytics_v1';

export type SubjectCategory =
  | 'pure_math'
  | 'applied_math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'history'
  | 'arabic'
  | 'languages';

export interface ChapterPerformanceRecord {
  chapterId: string;
  chapterTitleEn: string;
  chapterTitleAr: string;
  branchTitleEn: string;
  branchTitleAr: string;
  subjectCategory: SubjectCategory;
  attempted: number;
  correct: number;
  timeSpentSec: number;
  lastAttemptTimestamp: number;
}

export interface CognitiveBreakdown {
  easy: { attempted: number; correct: number };
  medium: { attempted: number; correct: number };
  hots: { attempted: number; correct: number };
}

export interface StudentAnalyticsState {
  totalAttempted: number;
  totalCorrect: number;
  totalTimeSpentSec: number;
  quizzesCompleted: number;
  chapters: Record<string, ChapterPerformanceRecord>;
  cognitive: CognitiveBreakdown;
  lastUpdated: number;
}

export type RadarTrackMode = 'stem5' | 'humanities' | 'all8';

export interface MasteryRadarPoint {
  dimensionKey: SubjectCategory;
  labelAr: string;
  labelEn: string;
  scorePct: number; // 0 - 100
  attempted: number;
  color: string;
}

/**
 * Determine subject dimension from branch / chapter metadata.
 */
export function classifySubjectCategory(
  branchTitleAr: string = '',
  branchTitleEn: string = '',
  chapterTitleAr: string = '',
  subjectOrBranchId: string = ''
): SubjectCategory {
  const text = `${branchTitleAr} ${branchTitleEn} ${chapterTitleAr} ${subjectOrBranchId}`.toLowerCase();

  if (text.includes('تاريخ') || text.includes('history')) {
    return 'history';
  }
  if (text.includes('عربي') || text.includes('arabic') || text.includes('نحو') || text.includes('بلاغة')) {
    return 'arabic';
  }
  if (
    text.includes('english') ||
    text.includes('إنجليز') ||
    text.includes('french') ||
    text.includes('فرنس') ||
    text.includes('لغة أجنبية') ||
    text.includes('language')
  ) {
    return 'languages';
  }
  if (text.includes('فيزياء') || text.includes('physic') || text.includes('كهربية') || text.includes('كولدج')) {
    return 'physics';
  }
  if (text.includes('كيمياء') || text.includes('chem') || text.includes('عضوية') || text.includes('انتقالية')) {
    return 'chemistry';
  }
  if (text.includes('أحياء') || text.includes('bio') || text.includes('مناعة') || text.includes('dna') || text.includes('تنسيق')) {
    return 'biology';
  }
  if (text.includes('استاتيكا') || text.includes('ديناميكا') || text.includes('static') || text.includes('dynamic') || text.includes('mechanic') || text.includes('applied_math')) {
    return 'applied_math';
  }
  // Default to pure math for algebra, calculus, geometry, analysis
  return 'pure_math';
}

const DEFAULT_ANALYTICS_STATE: StudentAnalyticsState = {
  totalAttempted: 0,
  totalCorrect: 0,
  totalTimeSpentSec: 0,
  quizzesCompleted: 0,
  chapters: {},
  cognitive: {
    easy: { attempted: 0, correct: 0 },
    medium: { attempted: 0, correct: 0 },
    hots: { attempted: 0, correct: 0 },
  },
  lastUpdated: Date.now(),
};

/**
 * Retrieve current analytics state from localStorage.
 */
export function getStudentAnalytics(): StudentAnalyticsState {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { ...DEFAULT_ANALYTICS_STATE };
  }

  try {
    const raw = localStorage.getItem(STUDENT_ANALYTICS_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_ANALYTICS_STATE };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        ...DEFAULT_ANALYTICS_STATE,
        ...parsed,
        chapters: parsed.chapters || {},
        cognitive: {
          easy: parsed.cognitive?.easy || { attempted: 0, correct: 0 },
          medium: parsed.cognitive?.medium || { attempted: 0, correct: 0 },
          hots: parsed.cognitive?.hots || { attempted: 0, correct: 0 },
        },
      };
    }
    return { ...DEFAULT_ANALYTICS_STATE };
  } catch (err) {
    console.error('Failed to load student analytics from localStorage:', err);
    return { ...DEFAULT_ANALYTICS_STATE };
  }
}

/**
 * Save analytics state to localStorage.
 */
function saveStudentAnalytics(state: StudentAnalyticsState): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(STUDENT_ANALYTICS_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save student analytics to localStorage:', err);
  }
}

/**
 * Record a completed quiz attempt into analytics.
 */
export function recordQuizAttempt(
  questions: GeneratedQuestion[],
  userAnswers: Record<string, number> | Record<number, number>,
  timeSpentSec: number = 0
): StudentAnalyticsState {
  const state = getStudentAnalytics();
  const now = Date.now();

  let quizAttempted = 0;
  let quizCorrect = 0;

  const timePerQuestion = questions.length > 0 ? Math.round(timeSpentSec / questions.length) : 0;

  questions.forEach((q, qIndex) => {
    const userChoice =
      (userAnswers as any)[q.id] !== undefined
        ? (userAnswers as any)[q.id]
        : (userAnswers as any)[qIndex];

    if (userChoice !== undefined) {
      quizAttempted += 1;
      const isCorrect = userChoice === q.correctIndex;
      if (isCorrect) quizCorrect += 1;

      // Update chapter record
      const chId = q.chapterId || 'general_chapter';
      const category = classifySubjectCategory(q.branchTitleAr, q.branchTitleEn, q.chapterTitleAr, chId);

      if (!state.chapters[chId]) {
        state.chapters[chId] = {
          chapterId: chId,
          chapterTitleEn: q.chapterTitleEn || 'Chapter',
          chapterTitleAr: q.chapterTitleAr || 'الفصل',
          branchTitleEn: q.branchTitleEn || 'Branch',
          branchTitleAr: q.branchTitleAr || 'الفرع',
          subjectCategory: category,
          attempted: 0,
          correct: 0,
          timeSpentSec: 0,
          lastAttemptTimestamp: now,
        };
      }

      state.chapters[chId].attempted += 1;
      if (isCorrect) state.chapters[chId].correct += 1;
      state.chapters[chId].timeSpentSec += timePerQuestion;
      state.chapters[chId].lastAttemptTimestamp = now;

      // Update cognitive distribution
      const diff = q.difficulty === 'hots' ? 'hots' : q.difficulty === 'easy' ? 'easy' : 'medium';
      state.cognitive[diff].attempted += 1;
      if (isCorrect) state.cognitive[diff].correct += 1;
    }
  });

  state.totalAttempted += quizAttempted;
  state.totalCorrect += quizCorrect;
  state.totalTimeSpentSec += timeSpentSec;
  if (quizAttempted > 0) {
    state.quizzesCompleted += 1;
  }
  state.lastUpdated = now;

  saveStudentAnalytics(state);
  return state;
}

/**
 * Calculate comprehensive readiness index (0–100%).
 * Weights overall accuracy (50%), question practice volume factor (30%), and cognitive HOTS mastery (20%).
 */
export function getReadinessScore(state?: StudentAnalyticsState): number {
  const data = state || getStudentAnalytics();
  if (data.totalAttempted === 0) return 0;

  // 1. Accuracy Component (0 - 50 pts)
  const accuracyPct = (data.totalCorrect / data.totalAttempted);
  const accuracyScore = accuracyPct * 50;

  // 2. Practice Volume Factor (0 - 30 pts): benchmark target of 100 questions for full volume points
  const volumeScore = Math.min(30, (data.totalAttempted / 100) * 30);

  // 3. HOTS Mastery Factor (0 - 20 pts)
  const hotsTotal = data.cognitive.hots.attempted;
  const hotsCorrect = data.cognitive.hots.correct;
  const hotsPct = hotsTotal > 0 ? hotsCorrect / hotsTotal : accuracyPct * 0.7;
  const hotsScore = hotsPct * 20;

  const total = Math.round(accuracyScore + volumeScore + hotsScore);
  return Math.min(100, Math.max(0, total));
}

/**
 * Calculate Mastery Radar data for SVG polygon visualization.
 * Defaults to 'stem5' for 100% backward compatibility with existing tests.
 */
export function getMasteryRadarData(
  state?: StudentAnalyticsState,
  mode: RadarTrackMode = 'stem5'
): MasteryRadarPoint[] {
  const data = state || getStudentAnalytics();

  const stemDimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
  ];

  const humanitiesDimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'history', ar: 'تاريخ مصر', en: 'Egyptian History', color: '#F59E0B' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic Language', color: '#10B981' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Foreign Languages', color: '#3B82F6' },
    { key: 'applied_math', ar: 'الإحصاء التطبيقي', en: 'Applied Statistics', color: '#8B5CF6' },
  ];

  const all8Dimensions: Array<{
    key: SubjectCategory;
    ar: string;
    en: string;
    color: string;
  }> = [
    { key: 'pure_math', ar: 'الرياضيات البحتة', en: 'Pure Math', color: '#6366F1' },
    { key: 'applied_math', ar: 'الرياضيات التطبيقية', en: 'Applied Math', color: '#3B82F6' },
    { key: 'physics', ar: 'الفيزياء', en: 'Physics', color: '#06B6D4' },
    { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry', color: '#10B981' },
    { key: 'biology', ar: 'الأحياء', en: 'Biology', color: '#F43F5E' },
    { key: 'history', ar: 'تاريخ مصر', en: 'History', color: '#F59E0B' },
    { key: 'arabic', ar: 'اللغة العربية', en: 'Arabic', color: '#059669' },
    { key: 'languages', ar: 'اللغات الأجنبية', en: 'Languages', color: '#8B5CF6' },
  ];

  const dimensions =
    mode === 'humanities'
      ? humanitiesDimensions
      : mode === 'all8'
      ? all8Dimensions
      : stemDimensions;

  return dimensions.map((dim) => {
    let attempted = 0;
    let correct = 0;

    Object.values(data?.chapters || {}).forEach((ch) => {
      if (ch.subjectCategory === dim.key) {
        attempted += ch.attempted;
        correct += ch.correct;
      }
    });

    // If zero attempts in this subject yet, default to baseline or 0
    const scorePct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return {
      dimensionKey: dim.key,
      labelAr: dim.ar,
      labelEn: dim.en,
      scorePct,
      attempted,
      color: dim.color,
    };
  });
}

export interface PredictiveScoreReport {
  predictedTotalMarks: number; // e.g. 385.5 out of 410
  predictedPercentage: number; // e.g. 94.0%
  confidenceLevel: 'high' | 'moderate' | 'preliminary';
  universityTrackTierAr: string;
  universityTrackTierEn: string;
  targetFacultyRecommendationsAr: string[];
  targetFacultyRecommendationsEn: string[];
}

/**
 * Predicts total Thanawya Amma score out of 410 marks based on accuracy, HOTS performance, and practice volume.
 */
export function getPredictiveScore(state?: StudentAnalyticsState): PredictiveScoreReport {
  const data = state || getStudentAnalytics();
  const totalAttempted = data.totalAttempted;

  if (totalAttempted === 0) {
    return {
      predictedTotalMarks: 0,
      predictedPercentage: 0,
      confidenceLevel: 'preliminary',
      universityTrackTierAr: 'لم تبدأ الاختبارات بعد - يرجى حل أسئلة لبدء التحليل التنبؤي الذكي',
      universityTrackTierEn: 'No attempts yet - complete practice questions to initialize AI predictions',
      targetFacultyRecommendationsAr: ['كليات القمة بانتظار بدء تدريبك الأكاديمي'],
      targetFacultyRecommendationsEn: ['Top faculties awaiting your practice data'],
    };
  }

  const accuracyPct = data.totalCorrect / data.totalAttempted;
  const hotsTotal = data.cognitive.hots.attempted;
  const hotsCorrect = data.cognitive.hots.correct;
  const hotsRate = hotsTotal > 0 ? hotsCorrect / hotsTotal : accuracyPct * 0.8;

  // Composite predictive percentage (70% accuracy, 20% HOTS competence, 10% volume bonus)
  const volumeBonus = Math.min(1.0, totalAttempted / 120) * 0.10;
  const rawPercentage = (accuracyPct * 0.70 + hotsRate * 0.20 + volumeBonus) * 100;
  const predictedPercentage = Math.round(Math.min(100, Math.max(30, rawPercentage)) * 10) / 10;
  const predictedTotalMarks = Math.round((predictedPercentage / 100) * 410 * 10) / 10;

  let confidenceLevel: 'high' | 'moderate' | 'preliminary' = 'preliminary';
  if (totalAttempted >= 60) confidenceLevel = 'high';
  else if (totalAttempted >= 20) confidenceLevel = 'moderate';

  let tierAr = 'المستوى العام - بحاجة لزيادة وتيرة التدريب وحل أسئلة المستويات العليا';
  let tierEn = 'General Pass Tier - Needs More Structured Practice & HOTS Drills';
  let facultiesAr = ['كليات التجارة والآداب والحقوق والخدمة الاجتماعية'];
  let facultiesEn = ['Commerce, Arts, Law, and Social Work Faculties'];

  if (predictedPercentage >= 92) {
    tierAr = 'أوائل الجمهورية وكليات القطاع الطبي والهندسي المرموقة 🏆';
    tierEn = 'National Republic Honors - Medical & Elite Engineering 🏆';
    facultiesAr = ['الطب البشري', 'طب وجراحة الفم والأسنان', 'الهندسة والتكنولوجيا', 'الحاسبات والذكاء الاصطناعي'];
    facultiesEn = ['Faculty of Medicine', 'Oral & Dental Surgery', 'Faculty of Engineering', 'AI & Computer Science'];
  } else if (predictedPercentage >= 82) {
    tierAr = 'قطاع التكنولوجيا والعلوم المتقدمة والصيدلة والاقتصاد 🌟';
    tierEn = 'Distinction Tier - Technology, Sciences & Economics 🌟';
    facultiesAr = ['الهندسة', 'الحاسبات والمعلومات', 'الصيدلة', 'العلاج الطبيعي', 'الاقتصاد والعلوم السياسية'];
    facultiesEn = ['Engineering', 'Computer Science & Informatics', 'Pharmacy', 'Physical Therapy', 'Economics & Political Science'];
  } else if (predictedPercentage >= 70) {
    tierAr = 'قطاع العلوم والإعلام واللغات والترجمة التطبيقية 🎯';
    tierEn = 'Merit Tier - Applied Sciences, Media & Languages 🎯';
    facultiesAr = ['العلوم', 'الإعلام وتكنولوجيا الاتصال', 'الألسن واللغات والترجمة', 'الفنون التطبيقية'];
    facultiesEn = ['Faculty of Science', 'Mass Communication', 'Languages & Translation (Al-Alsun)', 'Applied Arts'];
  }

  return {
    predictedTotalMarks,
    predictedPercentage,
    confidenceLevel,
    universityTrackTierAr: tierAr,
    universityTrackTierEn: tierEn,
    targetFacultyRecommendationsAr: facultiesAr,
    targetFacultyRecommendationsEn: facultiesEn,
  };
}

/**
 * Return the top weakest chapters that need immediate revision (lowest accuracy with at least 1 attempt, or chapters with high error count).
 */
export function getWeakestChapters(
  state?: StudentAnalyticsState,
  limit: number = 3
): ChapterPerformanceRecord[] {
  const data = state || getStudentAnalytics();
  const list = Object.values(data?.chapters || {}).filter((ch) => ch.attempted >= 2);

  // Sort by lowest accuracy percentage, then by highest error count
  list.sort((a, b) => {
    const accA = a.correct / a.attempted;
    const accB = b.correct / b.attempted;
    if (accA !== accB) return accA - accB;
    return (b.attempted - b.correct) - (a.attempted - a.correct);
  });

  return list.slice(0, limit);
}

/**
 * Reset all student analytics data.
 */
export function resetStudentAnalytics(): void {
  saveStudentAnalytics({ ...DEFAULT_ANALYTICS_STATE });
}

/**
 * Generates a 20-question multi-branch calibration exam:
 * Exactly 4 questions per branch (Pure Math, Applied Math, Physics, Chemistry, Biology).
 * Exactly 1 Easy, 2 Medium, 1 HOTS per branch (Total: 5 Easy, 10 Medium, 5 HOTS).
 */
export function generateDiagnosticBenchmarkQuestions(
  curriculum: Curriculum,
  customShuffle?: <T>(arr: T[]) => T[]
): GeneratedQuestion[] {
  const shuffle =
    customShuffle ||
    (<T>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });

  type BranchCategory = 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology';
  const categories: BranchCategory[] = ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology'];

  const pools: Record<
    BranchCategory,
    {
      easy: GeneratedQuestion[];
      medium: GeneratedQuestion[];
      hots: GeneratedQuestion[];
    }
  > = {
    pure_math: { easy: [], medium: [], hots: [] },
    applied_math: { easy: [], medium: [], hots: [] },
    physics: { easy: [], medium: [], hots: [] },
    chemistry: { easy: [], medium: [], hots: [] },
    biology: { easy: [], medium: [], hots: [] },
  };

  for (const branch of curriculum.branches) {
    for (const ch of branch.chapters) {
      const cat = classifySubjectCategory(branch.titleAr, branch.titleEn, ch.titleAr);

      const addCandidate = (prob: SolvedProblem, source: string, diff: DifficultyLevel) => {
        if (
          !prob.optionsEn ||
          prob.optionsEn.length !== 4 ||
          !prob.optionsAr ||
          prob.optionsAr.length !== 4 ||
          prob.correctIndex === undefined
        ) {
          return;
        }

        const normalizedDiff = (diff === 'hots' ? 'hots' : diff === 'easy' ? 'easy' : 'medium') as
          | 'easy'
          | 'medium'
          | 'hots';

        const q: GeneratedQuestion = {
          id: `${prob.id}_${source}`,
          questionEn: prob.questionEn,
          questionAr: prob.questionAr,
          difficulty: normalizedDiff,
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
        };

        if (cat in pools) {
          pools[cat as BranchCategory][normalizedDiff].push(q);
        }
      };

      if (ch.databank) {
        ch.databank.easy?.forEach((p) => addCandidate(p, 'databank_easy', 'easy'));
        ch.databank.medium?.forEach((p) => addCandidate(p, 'databank_medium', 'medium'));
        ch.databank.hots?.forEach((p) => addCandidate(p, 'databank_hots', 'hots'));
      }
      if (ch.solvedExamples) {
        ch.solvedExamples.forEach((p) => addCandidate(p, 'textbook_solved', p.difficulty || 'medium'));
      }
      if (ch.exerciseProblems) {
        ch.exerciseProblems.forEach((p) => addCandidate(p, 'textbook_exercise', p.difficulty || 'medium'));
      }
      ch.lessons?.forEach((l) => {
        l.worksheet?.problems?.forEach((prob) => {
          addCandidate(prob, 'worksheet', prob.difficulty || 'medium');
        });
      });
    }
  }

  const selectedQuestions: GeneratedQuestion[] = [];

  for (const cat of categories) {
    const easyShuffled = shuffle(pools[cat].easy);
    const medShuffled = shuffle(pools[cat].medium);
    const hotsShuffled = shuffle(pools[cat].hots);

    const chosenEasy = easyShuffled.slice(0, 1);
    const chosenMed = medShuffled.slice(0, 2);
    const chosenHots = hotsShuffled.slice(0, 1);

    const branchSelected = [...chosenEasy, ...chosenMed, ...chosenHots];

    // Fallback if any tier fell short
    if (branchSelected.length < 4) {
      const allCategoryQs = shuffle([...easyShuffled, ...medShuffled, ...hotsShuffled]);
      const chosenIds = new Set(branchSelected.map((q) => q.id));
      for (const q of allCategoryQs) {
        if (!chosenIds.has(q.id)) {
          branchSelected.push(q);
          chosenIds.add(q.id);
          if (branchSelected.length === 4) break;
        }
      }
    }

    selectedQuestions.push(...branchSelected);
  }

  return shuffle(selectedQuestions);
}
