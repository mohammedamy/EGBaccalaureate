import type { GeneratedQuestion } from './mistakeNotebookService';

export const STUDENT_ANALYTICS_STORAGE_KEY = 'egbac_student_analytics_v1';

export interface ChapterPerformanceRecord {
  chapterId: string;
  chapterTitleEn: string;
  chapterTitleAr: string;
  branchTitleEn: string;
  branchTitleAr: string;
  subjectCategory: 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology';
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

export interface MasteryRadarPoint {
  dimensionKey: 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology';
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
  chapterTitleAr: string = ''
): 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology' {
  const text = `${branchTitleAr} ${branchTitleEn} ${chapterTitleAr}`.toLowerCase();

  if (text.includes('فيزياء') || text.includes('physic') || text.includes('كهربية') || text.includes('كولدج')) {
    return 'physics';
  }
  if (text.includes('كيمياء') || text.includes('chem') || text.includes('عضوية') || text.includes('انتقالية')) {
    return 'chemistry';
  }
  if (text.includes('أحياء') || text.includes('bio') || text.includes('مناعة') || text.includes('dna') || text.includes('تنسيق')) {
    return 'biology';
  }
  if (text.includes('استاتيكا') || text.includes('ديناميكا') || text.includes('static') || text.includes('dynamic') || text.includes('mechanic')) {
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
      const category = classifySubjectCategory(q.branchTitleAr, q.branchTitleEn, q.chapterTitleAr);

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
 * Calculate the 5-point Mastery Radar data for SVG polygon visualization.
 */
export function getMasteryRadarData(state?: StudentAnalyticsState): MasteryRadarPoint[] {
  const data = state || getStudentAnalytics();

  const dimensions: Array<{
    key: 'pure_math' | 'applied_math' | 'physics' | 'chemistry' | 'biology';
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

  return dimensions.map((dim) => {
    let attempted = 0;
    let correct = 0;

    Object.values(data.chapters).forEach((ch) => {
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

/**
 * Return the top weakest chapters that need immediate revision (lowest accuracy with at least 1 attempt, or chapters with high error count).
 */
export function getWeakestChapters(
  state?: StudentAnalyticsState,
  limit: number = 3
): ChapterPerformanceRecord[] {
  const data = state || getStudentAnalytics();
  const list = Object.values(data.chapters).filter((ch) => ch.attempted >= 2);

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
