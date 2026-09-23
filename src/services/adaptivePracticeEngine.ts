/**
 * Adaptive Practice Engine — Core Service
 * (محرك التمرين التكيفي)
 *
 * Implements the Diagnostic → Prescription → Tracking loop:
 *
 * 1. Spaced Repetition (Leitner boxes: 1d → 3d → 7d → 21d → 60d)
 * 2. Prerequisite Graph Resolution
 * 3. Difficulty Escalation (Easy → Med → HOTS at ≥80% on last 5)
 * 4. Time-Pressure Calibration
 * 5. Daily Prescription Generation
 *
 * All state is stored in localStorage and works entirely offline.
 */

import type {
  AdaptiveState,
  KPMasteryRecord,
  KPMasteryLevel,
  DifficultyTierMastery,
  PrescribedItem,
  DailyPrescription,
  ErrorTypeTag,
  QuickErrorReport,
  KnowledgePointTag,
} from '../types/adaptivePractice';
import { createDefaultAdaptiveState } from '../types/adaptivePractice';
import type { DifficultyLevel, BranchId } from '../types/curriculum';

// ---------------------------------------------------------------------------
// Storage
// ---------------------------------------------------------------------------

const ADAPTIVE_STATE_KEY = 'egbac_adaptive_state_v1';

export function getAdaptiveState(): AdaptiveState {
  try {
    const raw = localStorage.getItem(ADAPTIVE_STATE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as AdaptiveState;
      if (parsed.version === 1) return parsed;
    }
  } catch {
    // Corrupted state — fall through to default
  }
  return createDefaultAdaptiveState();
}

export function saveAdaptiveState(state: AdaptiveState): void {
  state.lastUpdated = Date.now();
  try {
    localStorage.setItem(ADAPTIVE_STATE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full — silently fail, data is non-critical
    console.warn('[AdaptiveEngine] localStorage full — state not saved');
  }
}

export function resetAdaptiveState(): void {
  localStorage.removeItem(ADAPTIVE_STATE_KEY);
}

// ---------------------------------------------------------------------------
// Leitner Spaced Repetition Intervals (milliseconds)
// ---------------------------------------------------------------------------

/** Box 0 → 1 day, Box 1 → 3 days, Box 2 → 7 days, Box 3 → 21 days, Box 4 → 60 days */
const LEITNER_INTERVALS_MS: Record<number, number> = {
  0: 1 * 24 * 60 * 60 * 1000,      //  1 day
  1: 3 * 24 * 60 * 60 * 1000,      //  3 days
  2: 7 * 24 * 60 * 60 * 1000,      //  7 days
  3: 21 * 24 * 60 * 60 * 1000,     // 21 days
  4: 60 * 24 * 60 * 60 * 1000,     // 60 days
};

const MAX_LEITNER_BOX = 4;

function getReviewInterval(box: number): number {
  return LEITNER_INTERVALS_MS[Math.min(box, MAX_LEITNER_BOX)] ?? LEITNER_INTERVALS_MS[MAX_LEITNER_BOX];
}

// ---------------------------------------------------------------------------
// Mastery Level Computation
// ---------------------------------------------------------------------------

function computeMasteryLevel(record: KPMasteryRecord): KPMasteryLevel {
  if (record.totalAttempts === 0) return 'unstarted';

  const recentAccuracy = record.recentResults.length > 0
    ? record.recentResults.filter(Boolean).length / record.recentResults.length
    : 0;

  if (recentAccuracy >= 0.8 && record.recentResults.length >= 5) return 'mastered';
  if (recentAccuracy >= 0.5) return 'practicing';
  return 'learning';
}

// ---------------------------------------------------------------------------
// Record Answer
// ---------------------------------------------------------------------------

/**
 * Records a student's answer for a specific knowledge point and updates
 * the spaced repetition state, error tracking, and mastery level.
 */
export function recordAnswer(
  state: AdaptiveState,
  knowledgePointId: string,
  isCorrect: boolean,
  difficulty: DifficultyLevel,
  timeTakenSec: number,
  isTimed: boolean,
  errorType?: QuickErrorReport | ErrorTypeTag,
): AdaptiveState {
  const now = Date.now();

  // --- KP Mastery Record ---
  let record = state.kpMastery[knowledgePointId];
  if (!record) {
    record = createDefaultKPMastery(knowledgePointId);
    state.kpMastery[knowledgePointId] = record;
  }

  record.totalAttempts += 1;
  record.lastAttemptTimestamp = now;

  // Update running average time
  const prevTotal = record.avgTimeSec * (record.totalAttempts - 1);
  record.avgTimeSec = (prevTotal + timeTakenSec) / record.totalAttempts;

  // Update recent results (keep last 5)
  record.recentResults.push(isCorrect);
  if (record.recentResults.length > 5) {
    record.recentResults.shift();
  }

  if (isCorrect) {
    record.totalCorrect += 1;
    record.correctStreak += 1;

    // Promote in Leitner system
    if (record.leitnerBox < MAX_LEITNER_BOX) {
      record.leitnerBox += 1;
    }
  } else {
    record.correctStreak = 0;

    // Demote in Leitner system (back to box 0)
    record.leitnerBox = 0;

    // Record error type
    if (errorType) {
      const tag = errorType as ErrorTypeTag;
      record.errorTypeDistribution[tag] = (record.errorTypeDistribution[tag] || 0) + 1;
      state.globalErrorDistribution[tag] = (state.globalErrorDistribution[tag] || 0) + 1;
    }
  }

  // Schedule next review
  record.nextReviewTimestamp = now + getReviewInterval(record.leitnerBox);

  // Update mastery level
  record.level = computeMasteryLevel(record);

  // --- Difficulty Tier Progress ---
  let tierProgress = state.difficultyProgress[knowledgePointId];
  if (!tierProgress) {
    tierProgress = createDefaultDifficultyTierMastery();
    state.difficultyProgress[knowledgePointId] = tierProgress;
  }

  const tierKey = difficultyToTierKey(difficulty);
  if (tierKey) {
    const tier = tierProgress[tierKey];
    tier.attempted += 1;
    if (isCorrect) tier.correct += 1;
    tier.recentResults.push(isCorrect);
    if (tier.recentResults.length > 5) tier.recentResults.shift();
  }

  // --- Timed accuracy delta ---
  if (isTimed && !isCorrect) {
    // Track how much accuracy drops under time pressure
    const untimedAccuracy = record.totalAttempts > 0
      ? record.totalCorrect / record.totalAttempts
      : 0;
    const timedErrorRate = record.errorTypeDistribution.time_pressure || 0;
    record.timedAccuracyDelta = Math.max(0, untimedAccuracy * 100 - (100 - timedErrorRate));
  }

  saveAdaptiveState(state);
  return state;
}

// ---------------------------------------------------------------------------
// Prerequisite Graph Resolution
// ---------------------------------------------------------------------------

/**
 * Given a knowledge point, finds all prerequisites that are NOT mastered.
 * Returns prerequisite KP IDs in dependency order (deepest unmastered first).
 */
export function findUnmasteredPrerequisites(
  state: AdaptiveState,
  knowledgePointId: string,
  kpRegistry: Record<string, KnowledgePointTag>,
): string[] {
  const unmastered: string[] = [];
  const visited = new Set<string>();

  function walk(kpId: string): void {
    if (visited.has(kpId)) return;
    visited.add(kpId);

    const kp = kpRegistry[kpId];
    if (!kp) return;

    for (const prereqId of kp.prerequisiteKPs) {
      walk(prereqId);

      const record = state.kpMastery[prereqId];
      const level = record ? record.level : 'unstarted';
      if (level !== 'mastered') {
        unmastered.push(prereqId);
      }
    }
  }

  walk(knowledgePointId);
  return [...new Set(unmastered)]; // deduplicate
}

// ---------------------------------------------------------------------------
// Difficulty Escalation
// ---------------------------------------------------------------------------

/**
 * Determines which difficulty tier a student should practice for a given KP.
 *
 * Rules:
 * - Start at Easy
 * - Advance to Medium when Easy has ≥80% accuracy on last 5 attempts
 * - Advance to HOTS when Medium has ≥80% accuracy on last 5 attempts
 * - If accuracy at current tier drops below 60%, drop back one tier
 */
export function getRecommendedDifficulty(
  state: AdaptiveState,
  knowledgePointId: string,
): DifficultyLevel {
  const tierProgress = state.difficultyProgress[knowledgePointId];
  if (!tierProgress) return 'easy';

  const easyAcc = computeTierAccuracy(tierProgress.easy);
  const medAcc = computeTierAccuracy(tierProgress.medium);

  // Check HOTS readiness
  if (medAcc >= 0.8 && tierProgress.medium.recentResults.length >= 5) {
    return 'hots';
  }

  // Check Medium readiness
  if (easyAcc >= 0.8 && tierProgress.easy.recentResults.length >= 5) {
    // Drop back if Medium accuracy is too low
    if (tierProgress.medium.recentResults.length >= 3 && medAcc < 0.6) {
      return 'easy';
    }
    return 'medium';
  }

  return 'easy';
}

function computeTierAccuracy(tier: { recentResults: boolean[] }): number {
  if (tier.recentResults.length === 0) return 0;
  return tier.recentResults.filter(Boolean).length / tier.recentResults.length;
}

// ---------------------------------------------------------------------------
// Daily Prescription Generator (مولد الوصفة اليومية)
// ---------------------------------------------------------------------------

/**
 * Maximum number of items in a daily prescription.
 * Keeps sessions focused and achievable (~20–30 minutes).
 */
const MAX_DAILY_ITEMS = 8;
const QUESTIONS_PER_ITEM = 5;

/**
 * Generates a prioritized daily practice prescription based on the student's
 * current mastery state, spaced repetition schedule, and exam priorities.
 */
export function generateDailyPrescription(
  state: AdaptiveState,
  kpRegistry: Record<string, KnowledgePointTag>,
): DailyPrescription {
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];
  const candidates: PrescribedItem[] = [];

  // 1. Spaced review items (highest priority — these are due)
  for (const [kpId, record] of Object.entries(state.kpMastery)) {
    if (record.nextReviewTimestamp <= now && record.level !== 'unstarted') {
      const kp = kpRegistry[kpId];
      if (!kp) continue;

      const priority = computeReviewPriority(record, kp, state);
      candidates.push({
        knowledgePointId: kpId,
        knowledgePointNameEn: kp.nameEn,
        knowledgePointNameAr: kp.nameAr,
        branchId: kp.branchId,
        chapterId: kp.chapterId,
        difficulty: getRecommendedDifficulty(state, kpId),
        reason: 'spaced_review',
        questionCount: QUESTIONS_PER_ITEM,
        priority,
        completed: false,
      });
    }
  }

  // 2. Prerequisite gap items
  for (const [kpId, record] of Object.entries(state.kpMastery)) {
    if (record.level === 'learning') {
      const unmastered = findUnmasteredPrerequisites(state, kpId, kpRegistry);
      for (const prereqId of unmastered) {
        const kp = kpRegistry[prereqId];
        if (!kp) continue;
        if (candidates.some(c => c.knowledgePointId === prereqId)) continue;

        candidates.push({
          knowledgePointId: prereqId,
          knowledgePointNameEn: kp.nameEn,
          knowledgePointNameAr: kp.nameAr,
          branchId: kp.branchId,
          chapterId: kp.chapterId,
          difficulty: 'easy',
          reason: 'prerequisite_gap',
          questionCount: QUESTIONS_PER_ITEM,
          priority: 90, // Very high — prerequisites block progress
          completed: false,
        });
      }
    }
  }

  // 3. Error remediation items (repeated error types)
  for (const [kpId, record] of Object.entries(state.kpMastery)) {
    const dominantError = getDominantErrorType(record);
    if (dominantError && record.level !== 'mastered') {
      const kp = kpRegistry[kpId];
      if (!kp) continue;
      if (candidates.some(c => c.knowledgePointId === kpId)) continue;

      candidates.push({
        knowledgePointId: kpId,
        knowledgePointNameEn: kp.nameEn,
        knowledgePointNameAr: kp.nameAr,
        branchId: kp.branchId,
        chapterId: kp.chapterId,
        difficulty: getRecommendedDifficulty(state, kpId),
        reason: 'error_remediation',
        questionCount: QUESTIONS_PER_ITEM,
        priority: 70,
        completed: false,
      });
    }
  }

  // 4. Time-pressure training
  for (const [kpId, record] of Object.entries(state.kpMastery)) {
    if (record.timedAccuracyDelta > 15 && record.level !== 'unstarted') {
      const kp = kpRegistry[kpId];
      if (!kp) continue;
      if (candidates.some(c => c.knowledgePointId === kpId)) continue;

      candidates.push({
        knowledgePointId: kpId,
        knowledgePointNameEn: kp.nameEn,
        knowledgePointNameAr: kp.nameAr,
        branchId: kp.branchId,
        chapterId: kp.chapterId,
        difficulty: getRecommendedDifficulty(state, kpId),
        reason: 'time_pressure_training',
        questionCount: QUESTIONS_PER_ITEM,
        timeLimitSec: Math.max(30, Math.round(record.avgTimeSec * 0.8)),
        priority: 50,
        completed: false,
      });
    }
  }

  // 5. Practicing items needing reinforcement / tier advance
  if (candidates.length < MAX_DAILY_ITEMS) {
    for (const [kpId, record] of Object.entries(state.kpMastery)) {
      if (record.level === 'practicing' || record.level === 'learning') {
        const kp = kpRegistry[kpId];
        if (!kp) continue;
        if (candidates.some((c) => c.knowledgePointId === kpId)) continue;

        candidates.push({
          knowledgePointId: kpId,
          knowledgePointNameEn: kp.nameEn,
          knowledgePointNameAr: kp.nameAr,
          branchId: kp.branchId,
          chapterId: kp.chapterId,
          difficulty: getRecommendedDifficulty(state, kpId),
          reason: 'difficulty_escalation',
          questionCount: QUESTIONS_PER_ITEM,
          priority: 60 + kp.examWeight * 4,
          completed: false,
        });
      }
    }
  }

  // 6. New / unstarted foundational topics (prioritized by exam weight)
  if (candidates.length < MAX_DAILY_ITEMS) {
    const unstartedKPs = Object.values(kpRegistry).filter(
      (kp) => !state.kpMastery[kp.knowledgePointId] || state.kpMastery[kp.knowledgePointId].level === 'unstarted'
    );
    unstartedKPs.sort((a, b) => b.examWeight - a.examWeight);

    for (const kp of unstartedKPs) {
      if (candidates.length >= MAX_DAILY_ITEMS) break;
      if (candidates.some((c) => c.knowledgePointId === kp.knowledgePointId)) continue;

      candidates.push({
        knowledgePointId: kp.knowledgePointId,
        knowledgePointNameEn: kp.nameEn,
        knowledgePointNameAr: kp.nameAr,
        branchId: kp.branchId,
        chapterId: kp.chapterId,
        difficulty: 'easy',
        reason: 'new_topic',
        questionCount: QUESTIONS_PER_ITEM,
        priority: 30 + kp.examWeight * 5,
        completed: false,
      });
    }
  }

  // Sort by priority (descending) and take top N
  candidates.sort((a, b) => b.priority - a.priority);
  const items = candidates.slice(0, MAX_DAILY_ITEMS);

  // Boost exam-subject items
  for (const item of items) {
    if (state.examSubjects.includes(item.branchId)) {
      item.priority += 10;
    }
  }

  // Re-sort after boost
  items.sort((a, b) => b.priority - a.priority);

  const prescription: DailyPrescription = {
    generatedAt: now,
    targetDate: today,
    estimatedMinutes: items.length * 4, // ~4 min per item (5 questions)
    items,
    summary: {
      totalItems: items.length,
      reviewItems: items.filter(i => i.reason === 'spaced_review').length,
      newItems: items.filter(i => i.reason === 'new_topic').length,
      remediationItems: items.filter(i => i.reason === 'error_remediation' || i.reason === 'prerequisite_gap').length,
    },
  };

  state.currentPrescription = prescription;
  saveAdaptiveState(state);
  return prescription;
}

// ---------------------------------------------------------------------------
// Priority Scoring
// ---------------------------------------------------------------------------

function computeReviewPriority(
  record: KPMasteryRecord,
  kp: KnowledgePointTag,
  state: AdaptiveState,
): number {
  let priority = 0;

  // Overdue factor: how many intervals past due
  const now = Date.now();
  const overdueMs = now - record.nextReviewTimestamp;
  const intervalMs = getReviewInterval(record.leitnerBox);
  const overdueRatio = overdueMs / intervalMs;
  priority += Math.min(overdueRatio * 20, 60); // cap at 60

  // Exam weight factor
  priority += kp.examWeight * 5;

  // Exam subject boost
  if (state.examSubjects.includes(kp.branchId)) {
    priority += 15;
  }

  // Low mastery boost
  if (record.level === 'learning') priority += 20;
  else if (record.level === 'practicing') priority += 10;

  // Error concentration boost
  const totalErrors = Object.values(record.errorTypeDistribution).reduce((s, v) => s + v, 0);
  if (totalErrors > 3) priority += 10;

  return Math.round(priority);
}

function getDominantErrorType(record: KPMasteryRecord): ErrorTypeTag | null {
  let maxCount = 0;
  let dominant: ErrorTypeTag | null = null;

  for (const [type, count] of Object.entries(record.errorTypeDistribution) as [ErrorTypeTag, number][]) {
    if (count > maxCount && count >= 3) { // Minimum 3 occurrences to be "dominant"
      maxCount = count;
      dominant = type;
    }
  }

  return dominant;
}

// ---------------------------------------------------------------------------
// Exam Subject Management
// ---------------------------------------------------------------------------

export function setExamSubjects(state: AdaptiveState, subjects: BranchId[]): AdaptiveState {
  state.examSubjects = subjects;
  saveAdaptiveState(state);
  return state;
}

// ---------------------------------------------------------------------------
// Prescription History
// ---------------------------------------------------------------------------

export function completePrescriptionItem(
  state: AdaptiveState,
  knowledgePointId: string,
  totalTimeSec: number,
): AdaptiveState {
  if (!state.currentPrescription) return state;

  const item = state.currentPrescription.items.find(i => i.knowledgePointId === knowledgePointId);
  if (item) {
    item.completed = true;
  }

  // Check if all items are completed
  const allCompleted = state.currentPrescription.items.every(i => i.completed);
  if (allCompleted) {
    state.prescriptionHistory.push({
      date: state.currentPrescription.targetDate,
      completedItems: state.currentPrescription.items.length,
      totalItems: state.currentPrescription.items.length,
      totalTimeSec,
    });

    // Keep only last 30 days of history
    if (state.prescriptionHistory.length > 30) {
      state.prescriptionHistory = state.prescriptionHistory.slice(-30);
    }

    state.currentPrescription = null;
  }

  saveAdaptiveState(state);
  return state;
}

// ---------------------------------------------------------------------------
// Analytics & Insights
// ---------------------------------------------------------------------------

/**
 * Returns the student's overall readiness percentage across all exam subjects.
 */
export function getAdaptiveReadiness(state: AdaptiveState): number {
  const examKPs = Object.entries(state.kpMastery).filter(([_, record]) => {
    return record.totalAttempts > 0;
  });

  if (examKPs.length === 0) return 0;

  const masteredCount = examKPs.filter(([_, r]) => r.level === 'mastered').length;
  return Math.round((masteredCount / examKPs.length) * 100);
}

/**
 * Returns the top 3 error types across all practiced KPs.
 */
export function getTopErrorTypes(state: AdaptiveState): { type: ErrorTypeTag; count: number }[] {
  return (Object.entries(state.globalErrorDistribution) as [ErrorTypeTag, number][])
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type, count]) => ({ type, count }));
}

/**
 * Returns the study streak (consecutive days with completed prescriptions).
 */
export function getStudyStreak(state: AdaptiveState): number {
  if (state.prescriptionHistory.length === 0) return 0;

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = state.prescriptionHistory.length - 1; i >= 0; i--) {
    const historyDate = new Date(state.prescriptionHistory[i].date);
    historyDate.setHours(0, 0, 0, 0);

    const expectedDate = new Date(today);
    expectedDate.setDate(expectedDate.getDate() - streak);

    if (historyDate.getTime() === expectedDate.getTime()) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function createDefaultKPMastery(kpId: string): KPMasteryRecord {
  return {
    knowledgePointId: kpId,
    level: 'unstarted',
    correctStreak: 0,
    totalAttempts: 0,
    totalCorrect: 0,
    nextReviewTimestamp: 0,
    leitnerBox: 0,
    errorTypeDistribution: {
      concept_gap: 0,
      calculation_error: 0,
      comprehension_misread: 0,
      sign_direction_error: 0,
      formula_confusion: 0,
      unit_conversion: 0,
      time_pressure: 0,
    },
    recentResults: [],
    lastAttemptTimestamp: 0,
    avgTimeSec: 0,
    timedAccuracyDelta: 0,
  };
}

function createDefaultDifficultyTierMastery(): DifficultyTierMastery {
  return {
    easy: { attempted: 0, correct: 0, recentResults: [] },
    medium: { attempted: 0, correct: 0, recentResults: [] },
    hots: { attempted: 0, correct: 0, recentResults: [] },
  };
}

function difficultyToTierKey(difficulty: DifficultyLevel): 'easy' | 'medium' | 'hots' | null {
  switch (difficulty) {
    case 'easy': return 'easy';
    case 'medium':
    case 'exam_standard': return 'medium';
    case 'hots': return 'hots';
    default: return null;
  }
}
