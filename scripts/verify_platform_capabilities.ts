import assert from 'node:assert';
import {
  getOfficialMockConfig,
  getBookletModelDetails,
  computeOfficialExamScore,
  type BookletModelCode,
} from '../src/services/officialMockExamService';
import {
  getMasteryRadarData,
  getPredictiveScore,
  type StudentAnalyticsState,
} from '../src/services/studentAnalyticsService';
import type { GeneratedQuestion } from '../src/services/mistakeNotebookService';

console.log('🧪 Starting Platform Capabilities & Ministerial Simulation Verification...');

// ============================================================================
// TEST 1: Official Mock Blueprints across all 8 core subjects
// ============================================================================
console.log('\n--- 1. Official Mock Blueprints Verification ---');

const subjectsToTest = [
  { subject: 'physics', expectedQ: 46, expectedMarks: 60, expectedDuration: 180 },
  { subject: 'chemistry', expectedQ: 46, expectedMarks: 60, expectedDuration: 180 },
  { subject: 'biology', expectedQ: 46, expectedMarks: 60, expectedDuration: 180 },
  { subject: 'mathematics', branch: 'pure_math', expectedQ: 20, expectedMarks: 30, expectedDuration: 120 },
  { subject: 'mathematics', branch: 'applied_math', expectedQ: 20, expectedMarks: 30, expectedDuration: 120 },
  { subject: 'history', expectedQ: 46, expectedMarks: 60, expectedDuration: 180 },
  { subject: 'geography', expectedQ: 46, expectedMarks: 60, expectedDuration: 180 },
  { subject: 'arabic', expectedQ: 55, expectedMarks: 80, expectedDuration: 180 },
  { subject: 'english', expectedQ: 37, expectedMarks: 50, expectedDuration: 180 },
  { subject: 'french', expectedQ: 31, expectedMarks: 40, expectedDuration: 120 },
];

for (const item of subjectsToTest) {
  const cfg = getOfficialMockConfig(item.subject, item.branch);
  assert.strictEqual(
    cfg.totalQuestions,
    item.expectedQ,
    `Subject ${item.subject} should have ${item.expectedQ} questions, got ${cfg.totalQuestions}`
  );
  assert.strictEqual(
    cfg.totalMarks,
    item.expectedMarks,
    `Subject ${item.subject} should have ${item.expectedMarks} marks, got ${cfg.totalMarks}`
  );
  assert.strictEqual(
    cfg.durationMinutes,
    item.expectedDuration,
    `Subject ${item.subject} should have ${item.expectedDuration} mins, got ${cfg.durationMinutes}`
  );

  // Check section counts
  assert.strictEqual(
    cfg.section1Count + cfg.section2Count,
    cfg.totalQuestions,
    `Subject ${item.subject} section counts must sum to totalQuestions`
  );

  // Check mark calculation: section 1 (1 pt) + section 2 (2 pts)
  const computedMarks = cfg.section1Count * 1 + cfg.section2Count * 2;
  assert.strictEqual(
    computedMarks,
    cfg.totalMarks,
    `Subject ${item.subject} section marks must sum to totalMarks (${computedMarks} vs ${cfg.totalMarks})`
  );

  assert(cfg.titleAr.length > 0, `Subject ${item.subject} missing titleAr`);
  assert(cfg.titleEn.length > 0, `Subject ${item.subject} missing titleEn`);
  console.log(`  ✓ Blueprint verified: ${item.subject}${item.branch ? ` (${item.branch})` : ''} -> ${cfg.totalQuestions} Qs, ${cfg.totalMarks} Marks, ${cfg.durationMinutes} Mins`);
}

// ============================================================================
// TEST 2: Booklet Model Forms (A, B, C, D)
// ============================================================================
console.log('\n--- 2. Booklet Model Details (A, B, C, D) ---');

const bookletCodes: BookletModelCode[] = ['A', 'B', 'C', 'D'];
for (const code of bookletCodes) {
  const details = getBookletModelDetails(code);
  assert.strictEqual(details.code, code);
  assert(details.nameAr.includes(code === 'A' ? 'أ' : code === 'B' ? 'ب' : code === 'C' ? 'ج' : 'د'));
  assert(details.nameEn.includes(code));
  assert(details.color.startsWith('#'));
  assert(details.badgeBg.length > 0);
  console.log(`  ✓ Booklet Form verified: [${details.code}] ${details.nameAr} / ${details.nameEn} (${details.color})`);
}

// Default fallback
const fallbackDetails = getBookletModelDetails(undefined as unknown as BookletModelCode);
assert.strictEqual(fallbackDetails.code, 'A');
console.log('  ✓ Booklet Model fallback defaults to Form (A)');

// ============================================================================
// TEST 3: computeOfficialExamScore with Section 1 (1 pt) and Section 2 (2 pt)
// ============================================================================
console.log('\n--- 3. Official Exam Scoring Engine ---');

const mockConfig = getOfficialMockConfig('physics');
// 46 questions: first 32 are Section 1 (1 pt), remaining 14 are Section 2 (2 pts)
const mockQuestions: GeneratedQuestion[] = Array.from({ length: 46 }, (_, i) => ({
  id: `q_${i + 1}`,
  questionEn: `Question ${i + 1}`,
  questionAr: `سؤال ${i + 1}`,
  points: i < 32 ? 1 : 2,
  difficulty: i < 32 ? 'medium' : 'hots',
  optionsEn: ['A', 'B', 'C', 'D'],
  optionsAr: ['أ', 'ب', 'ج', 'د'],
  correctIndex: 0,
  explanationEn: 'Explanation',
  explanationAr: 'شرح',
  chapterId: 'ch1',
  chapterTitleEn: 'Chapter 1',
  chapterTitleAr: 'الفصل الأول',
  branchTitleEn: 'Physics',
  branchTitleAr: 'الفيزياء',
}));

// Case A: Perfect score (all answered index 0)
const answersPerfect: Record<number, number> = {};
mockQuestions.forEach((_, idx) => {
  answersPerfect[idx] = 0;
});
const perfectScore = computeOfficialExamScore(mockQuestions, answersPerfect, mockConfig);
assert.strictEqual(perfectScore.earnedMarks, 60);
assert.strictEqual(perfectScore.totalMarks, 60);
assert.strictEqual(perfectScore.markPercentage, 100);
assert.strictEqual(perfectScore.section1EarnedMarks, 32);
assert.strictEqual(perfectScore.section1TotalMarks, 32);
assert.strictEqual(perfectScore.section2EarnedMarks, 28);
assert.strictEqual(perfectScore.section2TotalMarks, 28);
assert.strictEqual(perfectScore.correctCount, 46);
console.log('  ✓ Perfect score calculation: 60/60 (100%), Section 1: 32/32, Section 2: 28/28');

// Case B: Only Section 1 correct, Section 2 wrong
const answersSec1Only: Record<number, number> = {};
mockQuestions.forEach((_, idx) => {
  answersSec1Only[idx] = idx < 32 ? 0 : 1;
});
const sec1OnlyScore = computeOfficialExamScore(mockQuestions, answersSec1Only, mockConfig);
assert.strictEqual(sec1OnlyScore.section1EarnedMarks, 32);
assert.strictEqual(sec1OnlyScore.section2EarnedMarks, 0);
assert.strictEqual(sec1OnlyScore.earnedMarks, 32);
assert.strictEqual(sec1OnlyScore.correctCount, 32);
assert.strictEqual(sec1OnlyScore.markPercentage, Math.round((32 / 60) * 100));
console.log(`  ✓ Section 1 only score calculation: 32/60 (${sec1OnlyScore.markPercentage}%)`);

// ============================================================================
// TEST 4: Multi-Track Student Analytics Mastery Radar
// ============================================================================
console.log('\n--- 4. Multi-Track Mastery Radar Modes ---');

const emptyState: StudentAnalyticsState = {
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

// Mode A: STEM 5
const radarStem5 = getMasteryRadarData(emptyState, 'stem5');
assert.strictEqual(radarStem5.length, 5, 'stem5 radar must have exactly 5 dimensions');
assert.deepStrictEqual(
  radarStem5.map((r) => r.dimensionKey),
  ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology']
);
console.log('  ✓ STEM 5 track mode verified: 5 dimensions');

// Mode B: Humanities
const radarHumanities = getMasteryRadarData(emptyState, 'humanities');
assert.strictEqual(radarHumanities.length, 5, 'humanities radar must have exactly 5 dimensions');
assert.deepStrictEqual(
  radarHumanities.map((r) => r.dimensionKey),
  ['history', 'geography', 'arabic', 'languages', 'applied_math']
);
console.log('  ✓ Humanities track mode verified: 5 dimensions');

// Mode C: All 8 core subjects (legacy)
const radarAll8 = getMasteryRadarData(emptyState, 'all8');
assert.strictEqual(radarAll8.length, 8, 'all8 radar must have exactly 8 dimensions');
assert.deepStrictEqual(
  radarAll8.map((r) => r.dimensionKey),
  ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology', 'history', 'arabic', 'languages']
);
console.log('  ✓ All 8 track mode verified: 8 dimensions');

// Mode D: All 9 core subjects
const radarAll9 = getMasteryRadarData(emptyState, 'all9');
assert.strictEqual(radarAll9.length, 9, 'all9 radar must have exactly 9 dimensions');
assert.deepStrictEqual(
  radarAll9.map((r) => r.dimensionKey),
  ['pure_math', 'applied_math', 'physics', 'chemistry', 'biology', 'history', 'geography', 'arabic', 'languages']
);
console.log('  ✓ All 9 track mode verified: 9 dimensions');

// Default when parameter omitted (backward compatibility)
const radarDefault = getMasteryRadarData(emptyState);
assert.strictEqual(radarDefault.length, 5, 'Default call must return 5 dimensions for backward compatibility');
console.log('  ✓ Default call backward-compatibility verified (5 dimensions)');

// ============================================================================
// TEST 5: AI Thanaweya Predictive Total Score Engine (410 Marks)
// ============================================================================
console.log('\n--- 5. AI Predictive Total Score Engine (410 Marks) ---');

// Baseline state (0 attempts)
const baselinePred = getPredictiveScore(emptyState);
assert.strictEqual(typeof baselinePred.predictedTotalMarks, 'number');
assert.strictEqual(baselinePred.predictedTotalMarks, 0);
assert.strictEqual(baselinePred.predictedPercentage, 0);
assert(baselinePred.targetFacultyRecommendationsAr.length >= 1);
assert(baselinePred.targetFacultyRecommendationsEn.length >= 1);
console.log(`  ✓ Baseline empty state predictive score: ${baselinePred.predictedTotalMarks}/410 (${baselinePred.predictedPercentage}%), Tier: ${baselinePred.universityTrackTierEn}`);

// High-performing student state
const highPerfState: StudentAnalyticsState = {
  ...emptyState,
  totalAttempted: 150,
  totalCorrect: 144, // 96%
  quizzesCompleted: 5,
  cognitive: {
    easy: { attempted: 50, correct: 50 },
    medium: { attempted: 50, correct: 48 },
    hots: { attempted: 50, correct: 46 }, // 92% HOTS
  },
};

const highPred = getPredictiveScore(highPerfState);
assert(highPred.predictedPercentage >= 90, `Predicted percentage should be >= 90%, got ${highPred.predictedPercentage}`);
assert(highPred.predictedTotalMarks >= 369, `Predicted marks should be >= 369/410, got ${highPred.predictedTotalMarks}`);
assert(
  highPred.targetFacultyRecommendationsAr.some((f) => f.includes('الطب') || f.includes('الهندسة')),
  'High performer faculties must include Medicine or Engineering'
);
console.log(`  ✓ High performer score: ${highPred.predictedTotalMarks}/410 (${highPred.predictedPercentage}%), Tier: ${highPred.universityTrackTierAr}`);
console.log(`    Recommended faculties: ${highPred.targetFacultyRecommendationsAr.slice(0, 3).join(', ')}`);

// Mid-performing student state
const midPerfState: StudentAnalyticsState = {
  ...emptyState,
  totalAttempted: 80,
  totalCorrect: 60, // 75%
  quizzesCompleted: 3,
  cognitive: {
    easy: { attempted: 30, correct: 26 },
    medium: { attempted: 30, correct: 22 },
    hots: { attempted: 20, correct: 12 },
  },
};

const midPred = getPredictiveScore(midPerfState);
assert(midPred.predictedPercentage >= 65 && midPred.predictedPercentage < 85);
assert(midPred.predictedTotalMarks >= 265 && midPred.predictedTotalMarks < 350);
console.log(`  ✓ Mid performer score: ${midPred.predictedTotalMarks}/410 (${midPred.predictedPercentage}%), Tier: ${midPred.universityTrackTierAr}`);

console.log('\n🎉 All 5 Platform Capability Test Suites PASSED Successfully!');

