/**
 * Adaptive Practice Engine — Core Types
 *
 * Defines the type system for micro-knowledge-point tagging, error-type
 * classification, spaced repetition scheduling, prerequisite graphs,
 * and daily prescriptions. All types are designed to be stored in
 * localStorage/IndexedDB and work entirely offline.
 */

import type { DifficultyLevel, BranchId } from './curriculum';

// ---------------------------------------------------------------------------
// Error-Type Classification (تصنيف نوع الخطأ)
// ---------------------------------------------------------------------------

/**
 * Categorizes the *reason* a student got a question wrong, not just the fact
 * that they got it wrong. This is the single most important signal for the
 * adaptive engine's prescription logic.
 */
export type ErrorTypeTag =
  | 'concept_gap'           // Student doesn't understand the underlying concept
  | 'calculation_error'     // Understands concept but makes arithmetic/algebraic mistakes
  | 'comprehension_misread' // Misreads the question stem, diagram, or units
  | 'sign_direction_error'  // Correct method, wrong sign or direction (Statics/Dynamics/Physics)
  | 'formula_confusion'     // Confuses similar formulas (e.g., sin vs cos in friction)
  | 'unit_conversion'       // Correct calculation, wrong units or scale
  | 'time_pressure';        // Gets it right when untimed, wrong under exam conditions

/**
 * Arabic labels for error types — used in the self-report UI.
 */
export const ERROR_TYPE_LABELS: Record<ErrorTypeTag, { en: string; ar: string; icon: string }> = {
  concept_gap:           { en: 'Concept Gap',         ar: 'لم أفهم الفكرة',          icon: '🧠' },
  calculation_error:     { en: 'Calculation Error',   ar: 'خطأ حسابي',              icon: '🔢' },
  comprehension_misread: { en: 'Misread Question',    ar: 'لم أقرأ السؤال جيدًا',    icon: '👁️' },
  sign_direction_error:  { en: 'Sign/Direction Error', ar: 'خطأ في الإشارة أو الاتجاه', icon: '↕️' },
  formula_confusion:     { en: 'Formula Mix-up',      ar: 'خلط بين القوانين',        icon: '📐' },
  unit_conversion:       { en: 'Unit Error',          ar: 'خطأ في الوحدات',          icon: '📏' },
  time_pressure:         { en: 'Time Pressure',       ar: 'ضغط الوقت',              icon: '⏱️' },
};

// ---------------------------------------------------------------------------
// Knowledge-Point Tagging (نقاط المعرفة الدقيقة)
// ---------------------------------------------------------------------------

/**
 * Bloom's Taxonomy levels — already partially used via `bloomLevel` on
 * SolvedProblem, but formalized here as a union type.
 */
export type BloomLevel =
  | 'remember'
  | 'understand'
  | 'apply'
  | 'analyze'
  | 'evaluate'
  | 'create';

/**
 * A micro-knowledge-point tag attached to each question. This is the
 * fundamental unit of the adaptive engine's understanding.
 */
export interface KnowledgePointTag {
  /** Unique ID, e.g. "stat_ch1_kp_friction_angle" */
  knowledgePointId: string;

  /** Human-readable cluster name, e.g. "limiting_friction" */
  conceptCluster: string;

  /** Human-readable name */
  nameEn: string;
  nameAr: string;

  /** Chapter and branch this KP belongs to */
  branchId: BranchId;
  chapterId: string;

  /** KPs that must be mastered before this one */
  prerequisiteKPs: string[];

  /** Bloom's taxonomy level this KP primarily tests */
  bloomLevel: BloomLevel;

  /** Common error types this KP's questions typically trigger */
  commonErrorTypes: ErrorTypeTag[];

  /**
   * Estimated percentage contribution to the final exam (0–5 scale).
   * Used for priority weighting in the prescription algorithm.
   */
  examWeight: number;
}

/**
 * Extended question metadata that pairs a question ID with its knowledge-
 * point tags. This is stored separately from the question data to avoid
 * modifying the existing 67,375-question databank structure.
 */
export interface QuestionKPMapping {
  questionId: string;
  knowledgePointId: string;
  bloomLevel: BloomLevel;
  errorTypes: ErrorTypeTag[];
}

// ---------------------------------------------------------------------------
// Spaced Repetition State (حالة التكرار المتباعد)
// ---------------------------------------------------------------------------

/**
 * Mastery levels for a knowledge point, following a progressive model.
 */
export type KPMasteryLevel =
  | 'unstarted'    // Never attempted
  | 'learning'     // Attempted but <50% accuracy
  | 'practicing'   // 50–79% accuracy
  | 'mastered';    // ≥80% accuracy on last 5 attempts

/**
 * Per-knowledge-point mastery record.
 */
export interface KPMasteryRecord {
  knowledgePointId: string;
  level: KPMasteryLevel;
  /** Consecutive correct answers (resets on incorrect) */
  correctStreak: number;
  /** Total attempts on this KP */
  totalAttempts: number;
  /** Total correct on this KP */
  totalCorrect: number;
  /** Timestamp for next spaced-repetition review */
  nextReviewTimestamp: number;
  /** Current Leitner box (0–4): controls review interval */
  leitnerBox: number;
  /** Distribution of error types when incorrect */
  errorTypeDistribution: Record<ErrorTypeTag, number>;
  /** Last 5 attempt results (true=correct, false=incorrect) */
  recentResults: boolean[];
  /** Timestamp of last attempt */
  lastAttemptTimestamp: number;
  /** Average time per question in seconds (for this KP) */
  avgTimeSec: number;
  /** Accuracy drop under timed conditions (percentage points) */
  timedAccuracyDelta: number;
}

/**
 * Difficulty tier mastery for a knowledge point.
 * The engine only allows escalation to the next tier when the current
 * tier reaches ≥80% accuracy on the last 5 attempts.
 */
export interface DifficultyTierMastery {
  easy: { attempted: number; correct: number; recentResults: boolean[] };
  medium: { attempted: number; correct: number; recentResults: boolean[] };
  hots: { attempted: number; correct: number; recentResults: boolean[] };
}

// ---------------------------------------------------------------------------
// Prescription & Daily Plan (الوصفة والخطة اليومية)
// ---------------------------------------------------------------------------

/**
 * Reason the engine prescribed a specific item.
 */
export type PrescriptionReason =
  | 'spaced_review'          // Due for spaced repetition review
  | 'prerequisite_gap'       // Prerequisite KP not mastered
  | 'error_remediation'      // Repeated error type needs targeted practice
  | 'difficulty_escalation'  // Ready to advance to next difficulty tier
  | 'time_pressure_training' // Accuracy drops under time pressure
  | 'new_topic'              // First encounter with this KP
  | 'exam_weight_priority';  // High exam weight, low mastery

/**
 * A single prescribed practice item in the daily plan.
 */
export interface PrescribedItem {
  knowledgePointId: string;
  knowledgePointNameEn: string;
  knowledgePointNameAr: string;
  branchId: BranchId;
  chapterId: string;
  difficulty: DifficultyLevel;
  reason: PrescriptionReason;
  /** Number of questions to attempt */
  questionCount: number;
  /** Optional: time limit per question in seconds (for time-pressure training) */
  timeLimitSec?: number;
  /** Priority score (higher = more urgent) */
  priority: number;
  /** Whether this item has been completed in the current session */
  completed: boolean;
}

/**
 * The daily prescription — generated at the start of each study session.
 */
export interface DailyPrescription {
  /** Timestamp when this prescription was generated */
  generatedAt: number;
  /** Target date (YYYY-MM-DD) */
  targetDate: string;
  /** Estimated total study time in minutes */
  estimatedMinutes: number;
  /** Ordered list of items (highest priority first) */
  items: PrescribedItem[];
  /** Summary stats */
  summary: {
    totalItems: number;
    reviewItems: number;
    newItems: number;
    remediationItems: number;
  };
}

// ---------------------------------------------------------------------------
// Adaptive Engine State (حالة المحرك التكيفي)
// ---------------------------------------------------------------------------

/**
 * The complete adaptive state for a single student, stored in
 * localStorage under key 'egbac_adaptive_state_v1'.
 */
export interface AdaptiveState {
  /** Schema version for forward compatibility */
  version: 1;
  /** When this state was last modified */
  lastUpdated: number;
  /** Per-knowledge-point mastery records */
  kpMastery: Record<string, KPMasteryRecord>;
  /** Per-KP difficulty tier progress */
  difficultyProgress: Record<string, DifficultyTierMastery>;
  /** Currently active daily prescription */
  currentPrescription: DailyPrescription | null;
  /** History of completed prescriptions (last 30 days) */
  prescriptionHistory: {
    date: string;
    completedItems: number;
    totalItems: number;
    totalTimeSec: number;
  }[];
  /** Student's self-reported exam subjects (for priority weighting) */
  examSubjects: BranchId[];
  /** Cumulative error-type distribution across all KPs */
  globalErrorDistribution: Record<ErrorTypeTag, number>;
}

/**
 * Default/empty adaptive state for new students.
 */
export function createDefaultAdaptiveState(): AdaptiveState {
  return {
    version: 1,
    lastUpdated: Date.now(),
    kpMastery: {},
    difficultyProgress: {},
    currentPrescription: null,
    prescriptionHistory: [],
    examSubjects: [],
    globalErrorDistribution: {
      concept_gap: 0,
      calculation_error: 0,
      comprehension_misread: 0,
      sign_direction_error: 0,
      formula_confusion: 0,
      unit_conversion: 0,
      time_pressure: 0,
    },
  };
}

// ---------------------------------------------------------------------------
// Error Self-Report (التقرير الذاتي عن الخطأ)
// ---------------------------------------------------------------------------

/**
 * Simplified error-report options shown to the student after an incorrect
 * answer. Three options only — must take <2 seconds to select.
 */
export type QuickErrorReport = 'concept_gap' | 'calculation_error' | 'comprehension_misread';

/**
 * Maps the 3 quick-report options to their display labels.
 */
export const QUICK_ERROR_REPORT_OPTIONS: {
  type: QuickErrorReport;
  labelEn: string;
  labelAr: string;
  icon: string;
}[] = [
  { type: 'concept_gap',           labelEn: "Didn't understand",  labelAr: 'لم أفهم الفكرة',       icon: '🧠' },
  { type: 'calculation_error',     labelEn: 'Calculation mistake', labelAr: 'خطأ حسابي',           icon: '🔢' },
  { type: 'comprehension_misread', labelEn: 'Misread question',   labelAr: 'لم أقرأ السؤال جيدًا', icon: '👁️' },
];
