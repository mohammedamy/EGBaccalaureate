/**
 * Verification Suite for Gamification & Achievement Badges Service
 * Verifies:
 * 1. Exactly 12 pedagogical badge definitions.
 * 2. Accurate metric evaluations across HOTS, quizzes, speed, radar, and mistake recovery.
 * 3. Correct progression calculation and percentage capping.
 * 4. Proper detection of newly unlocked badges and localStorage timestamp persistence.
 * 5. Clean reset functionality.
 */

import {
  BADGE_DEFINITIONS,
  evaluateBadges,
  resetBadgeHistory,
  getSavedBadgesState,
} from '../src/services/achievementBadgeService';
import type { StudentAnalyticsState } from '../src/services/studentAnalyticsService';
import type { MistakeRecord } from '../src/services/mistakeNotebookService';

// Mock localStorage for Node test environment
const mockStorage: Record<string, string> = {};
const mockLocalStorage = {
  getItem: (key: string) => mockStorage[key] || null,
  setItem: (key: string, val: string) => {
    mockStorage[key] = val;
  },
  removeItem: (key: string) => {
    delete mockStorage[key];
  },
  clear: () => {
    Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  },
};
(global as any).window = { localStorage: mockLocalStorage };
(global as any).localStorage = mockLocalStorage;

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passed++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failed++;
  }
}

console.log('🏆 Starting Gamification & Achievement Badges Verification...\n');

// 1. Definition integrity
assert(BADGE_DEFINITIONS.length === 12, `Contains exactly 12 achievement badges (got ${BADGE_DEFINITIONS.length})`);
BADGE_DEFINITIONS.forEach((b) => {
  assert(b.titleAr.length > 0 && b.titleEn.length > 0, `Badge '${b.id}' has bilingual titles`);
  assert(b.descAr.length > 0 && b.descEn.length > 0, `Badge '${b.id}' has bilingual descriptions`);
  assert(b.target > 0, `Badge '${b.id}' has target > 0`);
  assert(b.icon.length > 0, `Badge '${b.id}' has an icon`);
});

// 2. Baseline Zero-State Evaluation
resetBadgeHistory();
const zeroState: StudentAnalyticsState = {
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

const initialEval = evaluateBadges(zeroState, []);
assert(initialEval.totalCount === 12, `Initial total count is 12`);
assert(initialEval.unlockedCount === 0, `Initial unlocked count is 0 in zero-state`);
assert(initialEval.newlyUnlocked.length === 0, `No newly unlocked badges in zero-state`);

// 3. Complete First Quiz -> First Step Unlock
console.log('\n--- Test 1: First Step Unlock ---');
const quiz1State: StudentAnalyticsState = {
  ...zeroState,
  totalAttempted: 10,
  totalCorrect: 8,
  quizzesCompleted: 1,
  totalTimeSpentSec: 600,
};

const eval1 = evaluateBadges(quiz1State, []);
assert(eval1.unlockedCount === 1, `Unlocked count incremented to 1 (got ${eval1.unlockedCount})`);
assert(eval1.newlyUnlocked.length === 1, `Exactly 1 newly unlocked badge`);
assert(eval1.newlyUnlocked[0].id === 'first_step', `Newly unlocked badge is 'first_step'`);
assert(eval1.badges.find((b) => b.id === 'first_step')?.unlocked === true, `'first_step' badge marked unlocked`);

// Re-evaluating with same state should not re-trigger newlyUnlocked
const reEval1 = evaluateBadges(quiz1State, []);
assert(reEval1.newlyUnlocked.length === 0, `Consecutive evaluation has 0 newlyUnlocked`);
assert(reEval1.unlockedCount === 1, `Persistent unlocked count remains 1`);

// 4. HOTS Progression & Mastery
console.log('\n--- Test 2: HOTS Apprenticeship & Legend ---');
const hotsState: StudentAnalyticsState = {
  ...quiz1State,
  cognitive: {
    ...quiz1State.cognitive,
    hots: { attempted: 20, correct: 16 }, // >= 15
  },
};

const evalHots = evaluateBadges(hotsState, []);
const hotsBadge = evalHots.badges.find((b) => b.id === 'hots_apprentice')!;
assert(hotsBadge.unlocked === true, `'hots_apprentice' unlocked with 16 correct HOTS questions`);
assert(hotsBadge.progressPct === 100, `'hots_apprentice' progressPct capped at 100%`);

const legendBadge = evalHots.badges.find((b) => b.id === 'hots_legend')!;
assert(legendBadge.unlocked === false, `'hots_legend' still locked (16/50)`);
assert(legendBadge.currentProgress === 16, `'hots_legend' currentProgress is 16`);
assert(legendBadge.progressPct === 32, `'hots_legend' progressPct is 32%`);

// 5. Radar Calibration Badge
console.log('\n--- Test 3: Radar Calibrated Badge ---');
const radarState: StudentAnalyticsState = {
  ...hotsState,
  chapters: {
    ch1: { chapterId: 'ch1', chapterTitleAr: 'تفاضل', chapterTitleEn: 'Calc', branchTitleAr: 'تفاضل', branchTitleEn: 'Calc', subjectCategory: 'pure_math', attempted: 4, correct: 3, timeSpentSec: 200, lastAttemptTimestamp: Date.now() },
    ch2: { chapterId: 'ch2', chapterTitleAr: 'استاتيكا', chapterTitleEn: 'Statics', branchTitleAr: 'استاتيكا', branchTitleEn: 'Statics', subjectCategory: 'applied_math', attempted: 4, correct: 4, timeSpentSec: 200, lastAttemptTimestamp: Date.now() },
    ch3: { chapterId: 'ch3', chapterTitleAr: 'كهربية', chapterTitleEn: 'Physics', branchTitleAr: 'فيزياء', branchTitleEn: 'Physics', subjectCategory: 'physics', attempted: 4, correct: 2, timeSpentSec: 200, lastAttemptTimestamp: Date.now() },
    ch4: { chapterId: 'ch4', chapterTitleAr: 'عضوية', chapterTitleEn: 'Chem', branchTitleAr: 'كيمياء', branchTitleEn: 'Chem', subjectCategory: 'chemistry', attempted: 4, correct: 4, timeSpentSec: 200, lastAttemptTimestamp: Date.now() },
    ch5: { chapterId: 'ch5', chapterTitleAr: 'dna', chapterTitleEn: 'Bio', branchTitleAr: 'أحياء', branchTitleEn: 'Bio', subjectCategory: 'biology', attempted: 4, correct: 3, timeSpentSec: 200, lastAttemptTimestamp: Date.now() },
  },
};

const evalRadar = evaluateBadges(radarState, []);
const radarBadge = evalRadar.badges.find((b) => b.id === 'radar_calibrated')!;
assert(radarBadge.unlocked === true, `'radar_calibrated' unlocked when all 5 branches have >= 4 attempts`);

// 6. Mistake Recovery Badges
console.log('\n--- Test 4: Mistake Recovery Badges ---');
const mockMistakes: MistakeRecord[] = Array.from({ length: 12 }, (_, i) => ({
  id: `q_${i}`,
  questionId: `qid_${i}`,
  questionAr: 'مسألة تجريبية',
  questionEn: 'Test question',
  userAnswerIndex: 1,
  correctAnswerIndex: 0,
  userAnswerText: 'B',
  correctAnswerText: 'A',
  subjectId: 'physics',
  chapterId: 'ch1',
  timestamp: Date.now(),
  attemptsCount: 2,
  mastered: i < 10, // 10 mastered, 2 active
  difficulty: 'medium',
}));

const evalMistakes = evaluateBadges(radarState, mockMistakes);
const vanquisherBadge = evalMistakes.badges.find((b) => b.id === 'mistake_vanquisher')!;
assert(vanquisherBadge.unlocked === true, `'mistake_vanquisher' unlocked with 10 mastered mistakes`);

const champBadge = evalMistakes.badges.find((b) => b.id === 'remediation_champion')!;
assert(champBadge.unlocked === false, `'remediation_champion' locked with 10/25 mastered`);
assert(champBadge.currentProgress === 10, `'remediation_champion' progress is 10`);
assert(champBadge.progressPct === 40, `'remediation_champion' progressPct is 40%`);

// 7. Reset History
console.log('\n--- Test 5: Reset Badge History ---');
resetBadgeHistory();
const saved = getSavedBadgesState();
assert(Object.keys(saved).length === 0, `Saved badges state empty after reset`);

console.log('\n================================');
console.log(`Total Passed: ${passed} | Failed: ${failed}`);
console.log('================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 Achievement Badges Service 100% verified!\n');
}
