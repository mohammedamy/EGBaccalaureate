import type { CurriculumType, DifficultyLevel, DiagramType } from '../types/curriculum';

export const MISTAKE_NOTEBOOK_STORAGE_KEY = 'egbac_mistake_notebook_v1';

export interface GeneratedQuestion {
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
  points?: number;
  sectionTagAr?: string;
  sectionTagEn?: string;
  bloomLevel?: 'remembering' | 'understanding' | 'application' | 'analysis';
}

export interface MistakeRecord {
  id: string; // question id
  question: GeneratedQuestion;
  userAnswerIndex: number;
  timestamp: number;
  lastAttemptTimestamp: number;
  curriculum: CurriculumType;
  attemptsCount: number;
  mastered: boolean;
  notes?: string;
}

export interface MistakeNotebookStats {
  total: number;
  active: number;
  mastered: number;
  masteryRate: number; // 0-100
  bySubject: Record<string, number>;
  byDifficulty: Record<string, number>;
}

/**
 * Safely retrieve all logged mistakes from localStorage.
 */
export function getMistakeRecords(): MistakeRecord[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }

  try {
    const raw = localStorage.getItem(MISTAKE_NOTEBOOK_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Failed to load mistake notebook from localStorage:', err);
    return [];
  }
}

/**
 * Persist an array of mistake records to localStorage.
 */
function saveAllRecords(records: MistakeRecord[]): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(MISTAKE_NOTEBOOK_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save mistake notebook to localStorage:', err);
  }
}

/**
 * Save or update a single question mistake in the notebook.
 */
export function saveMistakeRecord(
  question: GeneratedQuestion,
  userAnswerIndex: number,
  curriculum: CurriculumType
): MistakeRecord {
  const records = getMistakeRecords();
  const existingIdx = records.findIndex((r) => r.id === question.id);
  const now = Date.now();

  let updatedRecord: MistakeRecord;

  if (existingIdx >= 0) {
    const existing = records[existingIdx];
    updatedRecord = {
      ...existing,
      question, // update with latest question data if available
      userAnswerIndex,
      lastAttemptTimestamp: now,
      attemptsCount: (existing.attemptsCount || 1) + 1,
      mastered: false, // reset mastered since the student missed it again
    };
    records[existingIdx] = updatedRecord;
  } else {
    updatedRecord = {
      id: question.id,
      question,
      userAnswerIndex,
      timestamp: now,
      lastAttemptTimestamp: now,
      curriculum,
      attemptsCount: 1,
      mastered: false,
    };
    records.unshift(updatedRecord);
  }

  saveAllRecords(records);
  return updatedRecord;
}

/**
 * Record all incorrect answers from a submitted quiz or bubble sheet.
 * Returns the count of newly added or updated mistakes.
 */
export function recordQuizMistakes(
  questions: GeneratedQuestion[],
  userAnswers: Record<string, number> | Record<number, number>,
  curriculum: CurriculumType
): { added: number; updated: number; totalActive: number } {
  const records = getMistakeRecords();
  let added = 0;
  let updated = 0;
  const now = Date.now();

  questions.forEach((q, qIndex) => {
    const userChoice =
      (userAnswers as any)[q.id] !== undefined
        ? (userAnswers as any)[q.id]
        : (userAnswers as any)[qIndex];
    // If answered and incorrect
    if (userChoice !== undefined && userChoice !== q.correctIndex) {
      const idx = records.findIndex((r) => r.id === q.id);
      if (idx >= 0) {
        records[idx] = {
          ...records[idx],
          question: q,
          userAnswerIndex: userChoice,
          lastAttemptTimestamp: now,
          attemptsCount: (records[idx].attemptsCount || 1) + 1,
          mastered: false,
        };
        updated += 1;
      } else {
        records.unshift({
          id: q.id,
          question: q,
          userAnswerIndex: userChoice,
          timestamp: now,
          lastAttemptTimestamp: now,
          curriculum,
          attemptsCount: 1,
          mastered: false,
        });
        added += 1;
      }
    } else if (userChoice !== undefined && userChoice === q.correctIndex) {
      // If student answered correctly on a question that was previously in mistakes, mark as mastered!
      const idx = records.findIndex((r) => r.id === q.id);
      if (idx >= 0 && !records[idx].mastered) {
        records[idx] = {
          ...records[idx],
          mastered: true,
          lastAttemptTimestamp: now,
        };
      }
    }
  });

  saveAllRecords(records);

  const totalActive = records.filter((r) => !r.mastered).length;
  return { added, updated, totalActive };
}

/**
 * Mark a mistake record as mastered or unmastered.
 */
export function markMistakeMastered(questionId: string, mastered: boolean): void {
  const records = getMistakeRecords();
  const idx = records.findIndex((r) => r.id === questionId);
  if (idx >= 0) {
    records[idx].mastered = mastered;
    records[idx].lastAttemptTimestamp = Date.now();
    saveAllRecords(records);
  }
}

/**
 * Remove a specific mistake record by ID.
 */
export function removeMistakeRecord(questionId: string): void {
  const records = getMistakeRecords();
  const filtered = records.filter((r) => r.id !== questionId);
  saveAllRecords(filtered);
}

/**
 * Remove all records that have been marked as mastered.
 */
export function clearMasteredMistakes(): number {
  const records = getMistakeRecords();
  const activeOnly = records.filter((r) => !r.mastered);
  const clearedCount = records.length - activeOnly.length;
  saveAllRecords(activeOnly);
  return clearedCount;
}

/**
 * Wipe all mistake records.
 */
export function clearAllMistakes(): void {
  saveAllRecords([]);
}

/**
 * Compute aggregate statistics for the Mistake Notebook.
 */
export function getMistakeStats(cachedRecords?: MistakeRecord[]): MistakeNotebookStats {
  const records = cachedRecords || getMistakeRecords();
  const total = records.length;
  const mastered = records.filter((r) => r.mastered).length;
  const active = total - mastered;
  const masteryRate = total > 0 ? Math.round((mastered / total) * 100) : 100;

  const bySubject: Record<string, number> = {};
  const byDifficulty: Record<string, number> = {};

  records.forEach((r) => {
    const branch = r.question.branchTitleAr || r.question.branchTitleEn || 'عام';
    bySubject[branch] = (bySubject[branch] || 0) + 1;

    const diff = r.question.difficulty || 'medium';
    byDifficulty[diff] = (byDifficulty[diff] || 0) + 1;
  });

  return {
    total,
    active,
    mastered,
    masteryRate,
    bySubject,
    byDifficulty,
  };
}
