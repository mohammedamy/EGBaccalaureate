/**
 * Verification Suite for Official Ministerial Thanawya Amma Mock Exams
 * Verifies:
 * 1. Ministerial config parameters for Science (46Q, 60M, 180 min) and Math (20Q, 30M, 120 min).
 * 2. Questions generation for Physics, Chemistry, Biology, Math branches, and All-Subjects.
 * 3. Section 1 (1 pt) and Section 2 (2 pts) question ordering and points integrity.
 * 4. Bilingual labels and KaTeX math expression syntax validity.
 * 5. computeOfficialExamScore formula correctness and tier assignment.
 */

import {
  getOfficialMockConfig,
  generateOfficialMockQuestions,
  computeOfficialExamScore,
} from '../src/services/officialMockExamService';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/curriculum';
import type { GeneratedQuestion } from '../src/services/mistakeNotebookService';

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

console.log('🏛️ Starting Official Ministerial Mock Exam Verification...\n');

// 1. Blueprint Configuration Tests
console.log('--- 1. Testing Official Ministerial Blueprint Configurations ---');

const physicsCfg = getOfficialMockConfig('physics', 'all');
assert(physicsCfg.totalQuestions === 46, `Physics has 46 questions (got ${physicsCfg.totalQuestions})`);
assert(physicsCfg.totalMarks === 60, `Physics has 60 marks (got ${physicsCfg.totalMarks})`);
assert(physicsCfg.durationMinutes === 180, `Physics has 180 minutes duration`);
assert(physicsCfg.section1Count === 32, `Physics Section 1 has 32 questions`);
assert(physicsCfg.section2Count === 14, `Physics Section 2 has 14 questions`);
assert(physicsCfg.section1Count * 1 + physicsCfg.section2Count * 2 === 60, `Physics marks add up to exactly 60`);

const chemistryCfg = getOfficialMockConfig('chemistry', 'all');
assert(chemistryCfg.totalQuestions === 46, `Chemistry has 46 questions`);
assert(chemistryCfg.totalMarks === 60, `Chemistry has 60 marks`);
assert(chemistryCfg.durationMinutes === 180, `Chemistry has 180 minutes duration`);
assert(chemistryCfg.section1Count === 32 && chemistryCfg.section2Count === 14, `Chemistry has 32 (1-pt) + 14 (2-pt) questions`);

const biologyCfg = getOfficialMockConfig('biology', 'all');
assert(biologyCfg.totalQuestions === 46, `Biology has 46 questions`);
assert(biologyCfg.totalMarks === 60, `Biology has 60 marks`);
assert(biologyCfg.durationMinutes === 180, `Biology has 180 minutes duration`);

const calcCfg = getOfficialMockConfig('math', 'calculus');
assert(calcCfg.totalQuestions === 20, `Calculus branch mock has 20 questions (got ${calcCfg.totalQuestions})`);
assert(calcCfg.totalMarks === 30, `Calculus branch mock has 30 marks (got ${calcCfg.totalMarks})`);
assert(calcCfg.durationMinutes === 120, `Calculus branch mock has 120 minutes duration`);
assert(calcCfg.section1Count === 10, `Calculus Section 1 has 10 questions`);
assert(calcCfg.section2Count === 10, `Calculus Section 2 has 10 questions`);
assert(calcCfg.section1Count * 1 + calcCfg.section2Count * 2 === 30, `Calculus marks add up to exactly 30`);

const allCfg = getOfficialMockConfig('all', 'all');
assert(allCfg.totalQuestions === 50, `All-subjects mock has 50 questions`);
assert(allCfg.totalMarks === 60, `All-subjects mock has 60 marks`);
assert(allCfg.durationMinutes === 180, `All-subjects mock has 180 minutes duration`);
assert(allCfg.section1Count * 1 + allCfg.section2Count * 2 === 60, `All-subjects marks add up to exactly 60`);

// 2. Question Generation Tests
console.log('\n--- 2. Testing Official Mock Question Generation ---');

function deterministicShuffle<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

// Test Physics Mock Generation
const physicsQs = generateOfficialMockQuestions(
  thanaweyaCurriculum,
  'physics',
  'all',
  deterministicShuffle
);
assert(physicsQs.length === 46, `Generated exactly 46 Physics questions (got ${physicsQs.length})`);
const physicsSec1 = physicsQs.filter((q) => q.points === 1);
const physicsSec2 = physicsQs.filter((q) => q.points === 2);
assert(physicsSec1.length === 32, `Physics Section 1 has strictly 32 questions of 1 mark (got ${physicsSec1.length})`);
assert(physicsSec2.length === 14, `Physics Section 2 has strictly 14 questions of 2 marks (got ${physicsSec2.length})`);

const physicsTotalMarks = physicsQs.reduce((sum, q) => sum + (q.points || 1), 0);
assert(physicsTotalMarks === 60, `Physics questions sum to exactly 60 marks (got ${physicsTotalMarks})`);

// Verify Section 1 appears before Section 2
let transitionedToSec2 = false;
let sectionOrderValid = true;
for (const q of physicsQs) {
  if (q.points === 2) {
    transitionedToSec2 = true;
  } else if (transitionedToSec2 && q.points === 1) {
    sectionOrderValid = false;
    break;
  }
}
assert(sectionOrderValid, `Section 1 (1-mark items) strictly precedes Section 2 (2-mark items)`);

// Test Math Branch Mock Generation (Calculus)
const calcQs = generateOfficialMockQuestions(
  thanaweyaCurriculum,
  'math',
  'calculus',
  deterministicShuffle
);
assert(calcQs.length === 20, `Generated exactly 20 Calculus branch questions (got ${calcQs.length})`);
const calcSec1 = calcQs.filter((q) => q.points === 1);
const calcSec2 = calcQs.filter((q) => q.points === 2);
assert(calcSec1.length === 10, `Calculus Section 1 has strictly 10 questions of 1 mark`);
assert(calcSec2.length === 10, `Calculus Section 2 has strictly 10 questions of 2 marks`);
const calcTotalMarks = calcQs.reduce((sum, q) => sum + (q.points || 1), 0);
assert(calcTotalMarks === 30, `Calculus questions sum to exactly 30 marks (got ${calcTotalMarks})`);

// Test Chemistry & Biology
const chemQs = generateOfficialMockQuestions(
  thanaweyaCurriculum,
  'chemistry',
  'all',
  deterministicShuffle
);
assert(chemQs.length === 46, `Generated exactly 46 Chemistry questions`);
assert(chemQs.reduce((sum, q) => sum + (q.points || 1), 0) === 60, `Chemistry questions sum to 60 marks`);

const bioQs = generateOfficialMockQuestions(
  thanaweyaCurriculum,
  'biology',
  'all',
  deterministicShuffle
);
assert(bioQs.length === 46, `Generated exactly 46 Biology questions`);
assert(bioQs.reduce((sum, q) => sum + (q.points || 1), 0) === 60, `Biology questions sum to 60 marks`);

// 3. Question Schema & KaTeX Math Integrity
console.log('\n--- 3. Testing Question Schema & KaTeX Syntax Integrity ---');

const testSets = [physicsQs, calcQs, chemQs, bioQs];
let totalInspected = 0;
let validKaTeXCount = 0;
let validOptionsCount = 0;

testSets.forEach((set) => {
  set.forEach((q) => {
    totalInspected++;
    // Verify 4 options in Ar and En
    if (
      q.optionsAr.length === 4 &&
      q.optionsEn.length === 4 &&
      q.correctIndex >= 0 &&
      q.correctIndex <= 3
    ) {
      validOptionsCount++;
    }

    // Verify balanced dollar signs for KaTeX
    const checkDollarBalance = (str: string) => {
      const singleMatches = (str.match(/(?<!\$)\$(?!\$)/g) || []).length;
      const doubleMatches = (str.match(/\$\$/g) || []).length;
      return singleMatches % 2 === 0 && doubleMatches % 2 === 0;
    };

    if (
      checkDollarBalance(q.questionAr) &&
      checkDollarBalance(q.questionEn) &&
      q.optionsAr.every(checkDollarBalance) &&
      q.optionsEn.every(checkDollarBalance)
    ) {
      validKaTeXCount++;
    }
  });
});

assert(
  validOptionsCount === totalInspected,
  `All ${totalInspected} questions have strictly 4 options in Ar/En and valid correctIndex`
);
assert(
  validKaTeXCount === totalInspected,
  `All ${totalInspected} questions have balanced KaTeX math delimiters`
);

// 4. Scoring Logic & Tier Evaluations
console.log('\n--- 4. Testing Official Exam Score Computation ---');

// Mock user answers for Physics (46 questions: 32 @ 1 pt, 14 @ 2 pts = 60 total)
const mockAnswersAllCorrect: Record<number, number> = {};
physicsQs.forEach((q, idx) => {
  mockAnswersAllCorrect[idx] = q.correctIndex;
});

const perfectReport = computeOfficialExamScore(physicsQs, mockAnswersAllCorrect);
assert(perfectReport.totalMarks === 60, `Perfect report total marks === 60`);
assert(perfectReport.earnedMarks === 60, `Perfect report earned marks === 60`);
assert(perfectReport.markPercentage === 100, `Perfect report percentage === 100%`);
assert(perfectReport.section1EarnedMarks === 32, `Section 1 earned marks === 32`);
assert(perfectReport.section2EarnedMarks === 28, `Section 2 earned marks === 28`);
assert(perfectReport.gradeLabelAr.includes('أوائل الجمهورية'), `Perfect score gets Elite tier label`);

// Partial score test: answer all Section 1 correctly, miss Section 2
const mockAnswersSec1Only: Record<number, number> = {};
physicsQs.forEach((q, idx) => {
  if (q.points === 1) {
    mockAnswersSec1Only[idx] = q.correctIndex;
  } else {
    mockAnswersSec1Only[idx] = (q.correctIndex + 1) % 4; // incorrect
  }
});

const sec1OnlyReport = computeOfficialExamScore(physicsQs, mockAnswersSec1Only);
assert(sec1OnlyReport.section1EarnedMarks === 32, `Sec 1 only earned marks === 32`);
assert(sec1OnlyReport.section2EarnedMarks === 0, `Sec 2 earned marks === 0`);
assert(sec1OnlyReport.earnedMarks === 32, `Total earned marks === 32 / 60`);
assert(sec1OnlyReport.markPercentage === 53, `Mark percentage is 53% (got ${sec1OnlyReport.markPercentage}%)`);

// Math Calculus branch scoring (20 questions: 10 @ 1 pt, 10 @ 2 pts = 30 total)
const mockCalcAnswers: Record<number, number> = {};
calcQs.forEach((q, idx) => {
  // Answer 8 from Sec 1 correctly (8 pts) and 9 from Sec 2 correctly (18 pts) = 26 / 30 (87%)
  if (q.points === 1) {
    if (idx < 8) mockCalcAnswers[idx] = q.correctIndex;
  } else {
    if (idx < 19) mockCalcAnswers[idx] = q.correctIndex;
  }
});

const calcReport = computeOfficialExamScore(calcQs, mockCalcAnswers);
assert(calcReport.totalMarks === 30, `Calculus report total marks === 30`);
assert(calcReport.earnedMarks === 26, `Calculus earned marks === 26 (got ${calcReport.earnedMarks})`);
assert(calcReport.section1EarnedMarks === 8, `Calculus Section 1 earned marks === 8`);
assert(calcReport.section2EarnedMarks === 18, `Calculus Section 2 earned marks === 18`);
assert(calcReport.markPercentage === 87, `Calculus mark percentage === 87% (got ${calcReport.markPercentage}%)`);
assert(calcReport.gradeLabelAr.includes('كفاءة ممتازة'), `Distinction tier assigned at 87%`);

console.log(`\n🎉 Verification Complete: ${passed} passed, ${failed} failed.`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
