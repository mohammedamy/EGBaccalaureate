import {
  getStudentAnalytics,
  getReadinessScore,
  type StudentAnalyticsState,
} from './studentAnalyticsService';
import { getMistakeRecords, type MistakeRecord } from './mistakeNotebookService';

export const BADGES_STORAGE_KEY = 'egbac_student_badges_v1';

export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'diamond';
export type BadgeCategory = 'milestone' | 'hots' | 'accuracy' | 'remediation' | 'readiness';

export interface BadgeDefinition {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  category: BadgeCategory;
  tier: BadgeTier;
  target: number;
  evaluator: (analytics: StudentAnalyticsState, mistakes: MistakeRecord[], readiness: number) => number;
}

export interface AchievementBadge {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  category: BadgeCategory;
  tier: BadgeTier;
  target: number;
  currentProgress: number;
  progressPct: number;
  unlocked: boolean;
  unlockedAt?: number;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: 'first_step',
    titleAr: 'ضربة البداية',
    titleEn: 'First Step',
    descAr: 'إكمال أول اختبار إلكتروني أو ورقة امتحانية تدريبية.',
    descEn: 'Complete your first practice quiz or timed exam.',
    icon: '🚀',
    category: 'milestone',
    tier: 'bronze',
    target: 1,
    evaluator: (analytics) => analytics.quizzesCompleted,
  },
  {
    id: 'radar_calibrated',
    titleAr: 'المعاير المتكامل',
    titleEn: 'Radar Calibrated',
    descAr: 'إجراء اختبار التشخيص الشامل لتفعيل كافة أضلاع رادار الإتقان الخماسي (٤ أسئلة لكل فرع).',
    descEn: 'Complete the Comprehensive Diagnostic Benchmark to calibrate all 5 radar dimensions.',
    icon: '🎯',
    category: 'readiness',
    tier: 'gold',
    target: 5,
    evaluator: (analytics) => {
      const branches = ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology'];
      let calibrated = 0;
      branches.forEach((b) => {
        let branchAttempted = 0;
        Object.values(analytics.chapters).forEach((ch) => {
          if (ch.subjectCategory === b) {
            branchAttempted += ch.attempted;
          }
        });
        if (branchAttempted >= 4) calibrated++;
      });
      return calibrated;
    },
  },
  {
    id: 'hots_apprentice',
    titleAr: 'حلال العقد',
    titleEn: 'Master of HOTS (Lvl 1)',
    descAr: 'حل ١٥ مسألة من أسئلة مهارات التفكير العليا (HOTS) حلاً صحيحاً.',
    descEn: 'Correctly solve 15 High-Order Thinking Skills questions.',
    icon: '🧠',
    category: 'hots',
    tier: 'silver',
    target: 15,
    evaluator: (analytics) => analytics.cognitive.hots.correct,
  },
  {
    id: 'hots_legend',
    titleAr: 'أسطورة الأوائل',
    titleEn: 'HOTS Legend (Lvl 2)',
    descAr: 'حل ٥٠ مسألة من أسئلة مهارات التفكير العليا (HOTS) حلاً صحيحاً ومتقناً.',
    descEn: 'Correctly solve 50 High-Order Thinking Skills questions.',
    icon: '👑',
    category: 'hots',
    tier: 'diamond',
    target: 50,
    evaluator: (analytics) => analytics.cognitive.hots.correct,
  },
  {
    id: 'accuracy_sniper',
    titleAr: 'القناص النموذجي',
    titleEn: 'Accuracy Sniper',
    descAr: 'تحقيق نسبة دقة إجمالية ٩٠٪ فما فوق (بحد أدنى ١٥ سؤالاً منجزاً).',
    descEn: 'Maintain an overall accuracy of 90%+ with at least 15 questions practiced.',
    icon: '🎯',
    category: 'accuracy',
    tier: 'gold',
    target: 90,
    evaluator: (analytics) => {
      if (analytics.totalAttempted < 15) return 0;
      return Math.round((analytics.totalCorrect / analytics.totalAttempted) * 100);
    },
  },
  {
    id: 'mistake_vanquisher',
    titleAr: 'المثابر المتدارك',
    titleEn: 'Mistake Vanquisher',
    descAr: 'تدارك وتثبيت ١٠ أسئلة من كشكول الأخطاء بعد إعادة تدريبها بنجاح.',
    descEn: 'Master and resolve 10 mistakes in the Mistake Notebook.',
    icon: '🔄',
    category: 'remediation',
    tier: 'silver',
    target: 10,
    evaluator: (_analytics, mistakes) => mistakes.filter((m) => m.mastered).length,
  },
  {
    id: 'remediation_champion',
    titleAr: 'سيد التعافي والتثبيت',
    titleEn: 'Remediation Champion',
    descAr: 'تدارك وتثبيت ٢٥ مسألة من كشكول الأخطاء والقضاء على المفاهيم الخاطئة.',
    descEn: 'Master and resolve 25 mistakes in the Mistake Notebook.',
    icon: '🛡️',
    category: 'remediation',
    tier: 'diamond',
    target: 25,
    evaluator: (_analytics, mistakes) => mistakes.filter((m) => m.mastered).length,
  },
  {
    id: 'speed_demon',
    titleAr: 'الفارس السريع',
    titleEn: 'Speed Demon',
    descAr: 'المحافظة على معدل سرعة ٥٠ ثانية أو أقل لكل مسألة مع دقة تتجاوز ٨٠٪ (لأكثر من ٢٠ سؤالاً).',
    descEn: 'Maintain an average speed under 50s/Q with 80%+ accuracy (min 20 questions).',
    icon: '⚡',
    category: 'accuracy',
    tier: 'silver',
    target: 1,
    evaluator: (analytics) => {
      if (analytics.totalAttempted < 20) return 0;
      const acc = analytics.totalCorrect / analytics.totalAttempted;
      const pace = analytics.totalTimeSpentSec / analytics.totalAttempted;
      return acc >= 0.8 && pace <= 50 ? 1 : 0;
    },
  },
  {
    id: 'century_solver',
    titleAr: 'طوفان الأسئلة (المئوية الأولى)',
    titleEn: 'Century Solver (100 Qs)',
    descAr: 'إنجاز ١٠٠ مسألة متنوعة عبر مختلف فروع وبنوك أسئلة الثانوية العامة.',
    descEn: 'Solve 100 questions across the curriculum.',
    icon: '📚',
    category: 'milestone',
    tier: 'bronze',
    target: 100,
    evaluator: (analytics) => analytics.totalAttempted,
  },
  {
    id: 'marathon_scholar',
    titleAr: 'ماراثون التفوق (٢٥٠ سؤالاً)',
    titleEn: 'Marathon Scholar (250 Qs)',
    descAr: 'إنجاز ٢٥٠ مسألة تدريبية واختبارية شاملة في رحلة الإعداد للثانوية العامة.',
    descEn: 'Solve 250 practice questions across the curriculum.',
    icon: '🏆',
    category: 'milestone',
    tier: 'gold',
    target: 250,
    evaluator: (analytics) => analytics.totalAttempted,
  },
  {
    id: 'readiness_laureate',
    titleAr: 'جاهزية التفوق (٧٥٪)',
    titleEn: 'High Readiness Laureate (75%)',
    descAr: 'بلوغ مؤشر جاهزية الامتحانات الرسمية نسبة ٧٥٪ فما فوق في منصة التحليلات.',
    descEn: 'Attain an Overall Curriculum Examination Readiness Index of 75%+.',
    icon: '🌟',
    category: 'readiness',
    tier: 'gold',
    target: 75,
    evaluator: (_analytics, _mistakes, readiness) => readiness,
  },
  {
    id: 'republic_elite',
    titleAr: 'أوائل الجمهورية (٩٠٪)',
    titleEn: 'Republic Elite Readiness (90%)',
    descAr: 'بلوغ مؤشر جاهزية استثنائي ٩٠٪ فما فوق يعكس مستوى أوائل الجمهورية.',
    descEn: 'Attain an exceptional 90%+ Overall Examination Readiness Index.',
    icon: '💎',
    category: 'readiness',
    tier: 'diamond',
    target: 90,
    evaluator: (_analytics, _mistakes, readiness) => readiness,
  },
];

/**
 * Retrieve unlocked timestamps mapping from localStorage.
 */
export function getSavedBadgesState(): Record<string, { unlockedAt: number }> {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {};
  }
  try {
    const raw = localStorage.getItem(BADGES_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch (err) {
    console.error('Failed to load badges state from localStorage:', err);
    return {};
  }
}

/**
 * Persist unlocked badges mapping to localStorage.
 */
function saveBadgesState(state: Record<string, { unlockedAt: number }>): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save badges state to localStorage:', err);
  }
}

/**
 * Reset badge unlock history for testing / resets.
 */
export function resetBadgeHistory(): void {
  saveBadgesState({});
}

/**
 * Evaluate all badges against current student performance.
 * Unlocks newly achieved badges, persists timestamps, and returns full state.
 */
export function evaluateBadges(
  analyticsInput?: StudentAnalyticsState,
  mistakesInput?: MistakeRecord[]
): {
  badges: AchievementBadge[];
  unlockedCount: number;
  totalCount: number;
  newlyUnlocked: AchievementBadge[];
} {
  const analytics = analyticsInput || getStudentAnalytics();
  const mistakes = mistakesInput || getMistakeRecords();
  const readiness = getReadinessScore(analytics);
  const savedState = getSavedBadgesState();
  const now = Date.now();

  const newlyUnlocked: AchievementBadge[] = [];
  const updatedState: Record<string, { unlockedAt: number }> = { ...savedState };

  const badges: AchievementBadge[] = BADGE_DEFINITIONS.map((def) => {
    const rawVal = def.evaluator(analytics, mistakes, readiness);
    const currentProgress = Math.min(rawVal, def.target);
    const progressPct = Math.min(100, Math.round((currentProgress / def.target) * 100));
    const isQualifying = rawVal >= def.target;

    const previouslyUnlocked = !!savedState[def.id];
    let unlocked = previouslyUnlocked;
    let unlockedAt = savedState[def.id]?.unlockedAt;

    if (isQualifying && !previouslyUnlocked) {
      unlocked = true;
      unlockedAt = now;
      updatedState[def.id] = { unlockedAt: now };
    }

    const badgeObj: AchievementBadge = {
      id: def.id,
      titleAr: def.titleAr,
      titleEn: def.titleEn,
      descAr: def.descAr,
      descEn: def.descEn,
      icon: def.icon,
      category: def.category,
      tier: def.tier,
      target: def.target,
      currentProgress,
      progressPct: isQualifying ? 100 : progressPct,
      unlocked,
      unlockedAt,
    };

    if (isQualifying && !previouslyUnlocked) {
      newlyUnlocked.push(badgeObj);
    }

    return badgeObj;
  });

  if (newlyUnlocked.length > 0) {
    saveBadgesState(updatedState);
  }

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return {
    badges,
    unlockedCount,
    totalCount: badges.length,
    newlyUnlocked,
  };
}
