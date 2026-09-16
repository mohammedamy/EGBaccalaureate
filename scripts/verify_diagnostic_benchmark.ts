/**
 * Comprehensive Verification Suite for 20-Question Diagnostic Benchmark Exam
 * Verifies:
 * 1. Exactly 20 questions generated.
 * 2. Exactly 4 questions per branch across all 5 branches (Pure Math, Applied Math, Physics, Chemistry, Biology).
 * 3. Exact cognitive stratification: 1 Easy, 2 Medium, 1 HOTS per branch (Total: 5 Easy, 10 Medium, 5 HOTS).
 * 4. Dual curriculum support (Thanaweya Amma and EGBac International French Track).
 * 5. Full calibration of 5-point SVG Mastery Radar upon test completion.
 */

import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import {
  generateDiagnosticBenchmarkQuestions,
  classifySubjectCategory,
  recordQuizAttempt,
  getStudentAnalytics,
  getMasteryRadarData,
  getReadinessScore,
  resetStudentAnalytics,
} from '../src/services/studentAnalyticsService';

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

console.log('🎯 Starting 20-Question Comprehensive Diagnostic Benchmark Verification...\n');

// --- 1. Thanaweya Amma Curriculum Test ---
console.log('--- 1. Thanaweya Amma Benchmark ---');
const thQuestions = generateDiagnosticBenchmarkQuestions(thanaweyaCurriculum);

assert(thQuestions.length === 20, `Thanaweya diagnostic returns exactly 20 questions (got ${thQuestions.length})`);

// Category count
const thCategories: Record<string, number> = {
  pure_math: 0,
  applied_math: 0,
  physics: 0,
  chemistry: 0,
  biology: 0,
};

// Difficulty count
const thDifficulties: Record<string, number> = {
  easy: 0,
  medium: 0,
  hots: 0,
};

thQuestions.forEach((q) => {
  const cat = classifySubjectCategory(q.branchTitleAr, q.branchTitleEn, q.chapterTitleAr);
  thCategories[cat] = (thCategories[cat] || 0) + 1;
  thDifficulties[q.difficulty] = (thDifficulties[q.difficulty] || 0) + 1;

  assert(q.optionsAr.length === 4 && q.optionsEn.length === 4, `Question ${q.id} has 4 options in Ar & En`);
  assert(q.correctIndex >= 0 && q.correctIndex <= 3, `Question ${q.id} has valid correctIndex`);
});

assert(thCategories.pure_math === 4, `Pure Math has exactly 4 questions (got ${thCategories.pure_math})`);
assert(thCategories.applied_math === 4, `Applied Math has exactly 4 questions (got ${thCategories.applied_math})`);
assert(thCategories.physics === 4, `Physics has exactly 4 questions (got ${thCategories.physics})`);
assert(thCategories.chemistry === 4, `Chemistry has exactly 4 questions (got ${thCategories.chemistry})`);
assert(thCategories.biology === 4, `Biology has exactly 4 questions (got ${thCategories.biology})`);

assert(thDifficulties.easy === 5, `Total Easy questions is exactly 5 (got ${thDifficulties.easy})`);
assert(thDifficulties.medium === 10, `Total Medium questions is exactly 10 (got ${thDifficulties.medium})`);
assert(thDifficulties.hots === 5, `Total HOTS questions is exactly 5 (got ${thDifficulties.hots})`);

// --- 2. EGBac Curriculum Test ---
console.log('\n--- 2. EGBac Track Benchmark ---');
const egQuestions = generateDiagnosticBenchmarkQuestions(egBacCurriculum);

assert(egQuestions.length === 20, `EGBac diagnostic returns exactly 20 questions (got ${egQuestions.length})`);

const egCategories: Record<string, number> = {
  pure_math: 0,
  applied_math: 0,
  physics: 0,
  chemistry: 0,
  biology: 0,
};

const egDifficulties: Record<string, number> = {
  easy: 0,
  medium: 0,
  hots: 0,
};

egQuestions.forEach((q) => {
  const cat = classifySubjectCategory(q.branchTitleAr, q.branchTitleEn, q.chapterTitleAr);
  egCategories[cat] = (egCategories[cat] || 0) + 1;
  egDifficulties[q.difficulty] = (egDifficulties[q.difficulty] || 0) + 1;
});

assert(egCategories.pure_math === 4, `EGBac Pure Math has exactly 4 questions (got ${egCategories.pure_math})`);
assert(egCategories.applied_math === 4, `EGBac Applied Math has exactly 4 questions (got ${egCategories.applied_math})`);
assert(egCategories.physics === 4, `EGBac Physics has exactly 4 questions (got ${egCategories.physics})`);
assert(egCategories.chemistry === 4, `EGBac Chemistry has exactly 4 questions (got ${egCategories.chemistry})`);
assert(egCategories.biology === 4, `EGBac Biology has exactly 4 questions (got ${egCategories.biology})`);

assert(egDifficulties.easy === 5, `EGBac Easy questions equals 5 (got ${egDifficulties.easy})`);
assert(egDifficulties.medium === 10, `EGBac Medium questions equals 10 (got ${egDifficulties.medium})`);
assert(egDifficulties.hots === 5, `EGBac HOTS questions equals 5 (got ${egDifficulties.hots})`);

// --- 3. Simulated Benchmark Completion & Radar Calibration ---
console.log('\n--- 3. Radar Calibration Simulation ---');
resetStudentAnalytics();

// Simulate student answering 16 out of 20 correctly (80% score)
const simulatedAnswers: Record<number, number> = {};
thQuestions.forEach((q, idx) => {
  // Get 4 wrong (one in each of 4 different branches)
  if (idx === 0 || idx === 4 || idx === 8 || idx === 12) {
    simulatedAnswers[idx] = (q.correctIndex + 1) % 4; // incorrect
  } else {
    simulatedAnswers[idx] = q.correctIndex; // correct
  }
});

recordQuizAttempt(thQuestions, simulatedAnswers, 1500); // 25 minutes

const analytics = getStudentAnalytics();
assert(analytics.totalAttempted === 20, `Logged 20 total attempted questions (got ${analytics.totalAttempted})`);
assert(analytics.totalCorrect === 16, `Logged 16 correct questions (got ${analytics.totalCorrect})`);
assert(analytics.cognitive.easy.attempted === 5, `Cognitive Easy has 5 attempts (got ${analytics.cognitive.easy.attempted})`);
assert(analytics.cognitive.medium.attempted === 10, `Cognitive Medium has 10 attempts (got ${analytics.cognitive.medium.attempted})`);
assert(analytics.cognitive.hots.attempted === 5, `Cognitive HOTS has 5 attempts (got ${analytics.cognitive.hots.attempted})`);

const radar = getMasteryRadarData(analytics);
assert(radar.length === 5, `Radar has strictly 5 branches`);
radar.forEach((pt) => {
  assert(pt.attempted === 4, `Radar branch '${pt.dimensionKey}' has exactly 4 calibration attempts (got ${pt.attempted})`);
  assert(pt.scorePct > 0, `Radar branch '${pt.dimensionKey}' has calibrated non-zero score (${pt.scorePct}%)`);
});

const readiness = getReadinessScore(analytics);
assert(readiness >= 40 && readiness <= 95, `Calculated realistic readiness index: ${readiness}%`);

console.log('\n================================');
console.log(`Total Passed: ${passed} | Failed: ${failed}`);
console.log('================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 20-Question Comprehensive Diagnostic Benchmark 100% verified!\n');
}
