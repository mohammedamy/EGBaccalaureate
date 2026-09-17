/**
 * Verification Suite for Authentic Thanawya Amma Past Exam Papers (2021-2025)
 * Verifies:
 * 1. All past exam paper templates (2021-2025 across all subjects) have valid metadata, durations, and marks.
 * 2. Question counts strictly match ministerial blueprints: 46 questions (60 marks) for Sciences, 20 questions (30 marks) for Maths.
 * 3. Deterministic question sampling: same paper ID generates exact same question sequence every time.
 * 4. Section 1 (1 pt items) strictly precedes Section 2 (2 pt items) and total marks sum accurately.
 * 5. Cohort percentile and ranking calculation evaluates correctly across various scores.
 * 6. Question schema integrity: strictly 4 unique options in Ar/En and balanced KaTeX math delimiters.
 */

import {
  PAST_EXAM_PAPERS,
  getPastExamPapers,
  getPastExamPaperById,
  generatePastPaperQuestions,
  computeCohortComparison,
} from '../src/services/pastExamPapersService';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';

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

console.log('🏛️ Starting Authentic Thanawya Amma Past Exam Papers Verification Suite...\n');

// 1. Catalog & Metadata Integrity
console.log('--- 1. Testing Past Exam Papers Catalog Metadata ---');
assert(PAST_EXAM_PAPERS.length === 42, `Catalog contains exactly 42 authentic past papers (found ${PAST_EXAM_PAPERS.length})`);

// Test filtering by year
const papers2024 = getPastExamPapers({ year: 2024 });
assert(papers2024.length === 14, `Found exactly 14 papers for 2024 (got ${papers2024.length})`);

// Test filtering by session
const session1Papers = getPastExamPapers({ session: 'session1' });
assert(session1Papers.length === 28, `Found exactly 28 First Session (دور أول) papers (got ${session1Papers.length})`);

const session2Papers = getPastExamPapers({ session: 'session2' });
assert(session2Papers.length === 7, `Found exactly 7 Second Session (دور ثاني) papers (got ${session2Papers.length})`);

const expPapers = getPastExamPapers({ session: 'experimental' });
assert(expPapers.length === 7, `Found exactly 7 2025 MoE Experimental Model papers (got ${expPapers.length})`);

// Test subject filtering across all 7 disciplines
const physicsPapers = getPastExamPapers({ subject: 'physics' });
assert(physicsPapers.length === 6, `Found 6 Physics papers across years (got ${physicsPapers.length})`);

const calculusPapers = getPastExamPapers({ subject: 'calculus' });
assert(calculusPapers.length === 6, `Found 6 Calculus papers across years (got ${calculusPapers.length})`);

const algebraPapers = getPastExamPapers({ subject: 'algebra_solid' });
assert(algebraPapers.length === 6, `Found 6 Algebra & Solid Geometry papers across years (got ${algebraPapers.length})`);

const staticsPapers = getPastExamPapers({ subject: 'statics' });
assert(staticsPapers.length === 6, `Found 6 Statics papers across years (got ${staticsPapers.length})`);

const dynamicsPapers = getPastExamPapers({ subject: 'dynamics' });
assert(dynamicsPapers.length === 6, `Found 6 Dynamics papers across years (got ${dynamicsPapers.length})`);

// Validate every paper's schema
PAST_EXAM_PAPERS.forEach((paper) => {
  const isScience = paper.subject === 'physics' || paper.subject === 'chemistry' || paper.subject === 'biology';
  const expectedQ = isScience ? 46 : 20;
  const expectedMarks = isScience ? 60 : 30;
  const expectedDuration = isScience ? 180 : 120;
  const expectedSec1 = isScience ? 32 : 10;
  const expectedSec2 = isScience ? 14 : 10;

  assert(paper.totalQuestions === expectedQ, `[${paper.id}] Total questions is ${expectedQ}`);
  assert(paper.totalMarks === expectedMarks, `[${paper.id}] Total marks is ${expectedMarks}`);
  assert(paper.durationMinutes === expectedDuration, `[${paper.id}] Duration is ${expectedDuration} min`);
  assert(paper.section1Count === expectedSec1, `[${paper.id}] Section 1 count is ${expectedSec1}`);
  assert(paper.section2Count === expectedSec2, `[${paper.id}] Section 2 count is ${expectedSec2}`);
  assert(
    paper.section1Count * 1 + paper.section2Count * 2 === expectedMarks,
    `[${paper.id}] Marks formula (Sec1*1 + Sec2*2 === ${expectedMarks})`
  );
  assert(!!paper.formCodeAr && !!paper.formCodeEn, `[${paper.id}] Form codes defined in Ar/En`);
  assert(!!paper.ministerialExamCode, `[${paper.id}] Ministerial stamp defined`);
  assert(paper.historicalStats.nationalAverage > 0, `[${paper.id}] Historical national average is positive`);
  assert(paper.historicalStats.passRatePercent > 50, `[${paper.id}] Pass rate is realistic (> 50%)`);
  assert(paper.historicalStats.topTenThreshold > expectedMarks * 0.85, `[${paper.id}] Top ten threshold is > 85% of total`);
});

// 2. Question Generation & Section Integrity
console.log('\n--- 2. Testing Deterministic Question Generation & Section Allocations ---');

// Test 2024 Physics First Session
const phys2024Q1 = generatePastPaperQuestions('th-phys-2024-s1', thanaweyaCurriculum);
assert(phys2024Q1.length === 46, `Physics 2024 S1 generated exactly 46 questions (got ${phys2024Q1.length})`);

// Deterministic repeat check
const phys2024Q2 = generatePastPaperQuestions('th-phys-2024-s1', thanaweyaCurriculum);
assert(
  phys2024Q1.every((q, idx) => q.id === phys2024Q2[idx].id),
  `Seeded RNG ensures 100% deterministic question reproducibility across separate invocations`
);

// Verify Section 1 and Section 2 demarcation
const physSec1 = phys2024Q1.slice(0, 32);
const physSec2 = phys2024Q1.slice(32);
assert(physSec1.every((q) => q.points === 1), `Physics Section 1 items (first 32) strictly have points === 1`);
assert(physSec2.every((q) => q.points === 2), `Physics Section 2 items (remaining 14) strictly have points === 2`);
assert(
  physSec2.every((q) => q.bloomLevel === 'analysis'),
  `Physics Section 2 items are classified as high-order Bloom analysis`
);

const totalPhysMarks = phys2024Q1.reduce((sum, q) => sum + (q.points || 1), 0);
assert(totalPhysMarks === 60, `Physics questions sum to exactly 60 marks`);

// Test 2024 Calculus First Session
const calc2024Q = generatePastPaperQuestions('th-calc-2024-s1', thanaweyaCurriculum);
assert(calc2024Q.length === 20, `Calculus 2024 S1 generated exactly 20 questions (got ${calc2024Q.length})`);
const calcSec1 = calc2024Q.slice(0, 10);
const calcSec2 = calc2024Q.slice(10);
assert(calcSec1.every((q) => q.points === 1), `Calculus Section 1 items strictly have points === 1`);
assert(calcSec2.every((q) => q.points === 2), `Calculus Section 2 items strictly have points === 2`);
const totalCalcMarks = calc2024Q.reduce((sum, q) => sum + (q.points || 1), 0);
assert(totalCalcMarks === 30, `Calculus questions sum to exactly 30 marks`);

// Test Chemistry and Biology
const chem2024Q = generatePastPaperQuestions('th-chem-2024-s1', thanaweyaCurriculum);
assert(chem2024Q.length === 46, `Chemistry 2024 S1 generated 46 questions`);
assert(chem2024Q.reduce((sum, q) => sum + (q.points || 1), 0) === 60, `Chemistry sums to 60 marks`);

const bio2024Q = generatePastPaperQuestions('th-bio-2024-s1', thanaweyaCurriculum);
assert(bio2024Q.length === 46, `Biology 2024 S1 generated 46 questions`);
assert(bio2024Q.reduce((sum, q) => sum + (q.points || 1), 0) === 60, `Biology sums to 60 marks`);

// Test Math branches: Statics, Dynamics, Algebra
const stat2024Q = generatePastPaperQuestions('th-stat-2024-s1', thanaweyaCurriculum);
assert(stat2024Q.length === 20, `Statics 2024 S1 generated 20 questions`);
assert(stat2024Q.reduce((sum, q) => sum + (q.points || 1), 0) === 30, `Statics sums to 30 marks`);

const dyn2024Q = generatePastPaperQuestions('th-dyn-2024-s1', thanaweyaCurriculum);
assert(dyn2024Q.length === 20, `Dynamics 2024 S1 generated 20 questions`);
assert(dyn2024Q.reduce((sum, q) => sum + (q.points || 1), 0) === 30, `Dynamics sums to 30 marks`);

const alg2024Q = generatePastPaperQuestions('th-algs-2024-s1', thanaweyaCurriculum);
assert(alg2024Q.length === 20, `Algebra & Solid 2024 S1 generated 20 questions`);
assert(alg2024Q.reduce((sum, q) => sum + (q.points || 1), 0) === 30, `Algebra & Solid sums to 30 marks`);

// 3. Schema & KaTeX Delimiter Validation
console.log('\n--- 3. Testing Question Schema & KaTeX Syntax Integrity ---');
const allSampledQuestions = [...phys2024Q1, ...calc2024Q, ...chem2024Q, ...bio2024Q, ...stat2024Q, ...dyn2024Q, ...alg2024Q];

let valid4Opts = 0;
let validKatex = 0;

allSampledQuestions.forEach((q) => {
  const has4En = q.optionsEn && q.optionsEn.length === 4 && new Set(q.optionsEn).size === 4;
  const has4Ar = q.optionsAr && q.optionsAr.length === 4 && new Set(q.optionsAr).size === 4;
  const validIndex = typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3;
  if (has4En && has4Ar && validIndex) valid4Opts++;

  // Delimiter balance check
  const textToCheck = `${q.questionEn} ${q.questionAr} ${q.optionsEn.join(' ')} ${q.optionsAr.join(' ')}`;
  const openBraces = (textToCheck.match(/\{/g) || []).length;
  const closeBraces = (textToCheck.match(/\}/g) || []).length;
  if (openBraces === closeBraces) validKatex++;
});

assert(valid4Opts === allSampledQuestions.length, `All ${allSampledQuestions.length} questions have strictly 4 unique options in Ar/En and valid correctIndex`);
assert(validKatex === allSampledQuestions.length, `All ${allSampledQuestions.length} questions have balanced KaTeX curly braces`);

// 4. Historical Cohort Analytics & Percentile Calculations
console.log('\n--- 4. Testing Historical Cohort Analytics & Percentile Engine ---');

const physPaper = getPastExamPaperById('th-phys-2024-s1')!;

// Case A: Full marks (60/60)
const topReport = computeCohortComparison(physPaper, 60);
assert(topReport.earnedMarks === 60, `Earned marks is 60`);
assert(topReport.scorePercentage === 100, `Score percentage is 100%`);
assert(topReport.isTopTenCandidate === true, `60/60 marks flagged as Republic Top 10 candidate`);
assert(topReport.isDistinction === true, `60/60 marks flagged as Distinction`);
assert(topReport.isPassing === true, `60/60 marks flagged as Passing`);
assert(topReport.percentileRank >= 99.0, `60/60 marks achieves >= 99.0 percentile (got ${topReport.percentileRank}%)`);
assert(topReport.differenceFromAverage > 0, `Difference from average is positive (+${topReport.differenceFromAverage})`);

// Case B: Exactly National Average (37.8/60)
const avgReport = computeCohortComparison(physPaper, 37.8);
assert(Math.abs(avgReport.differenceFromAverage) < 0.1, `At average, difference is approximately 0 (got ${avgReport.differenceFromAverage})`);
assert(avgReport.percentileRank >= 48.0 && avgReport.percentileRank <= 52.0, `At average, percentile is approximately 50th percentile (got ${avgReport.percentileRank}%)`);
assert(avgReport.isPassing === true, `At average (37.8 > 30), student passes`);
assert(avgReport.isTopTenCandidate === false, `At average, not in top 10`);

// Case C: Failing score (20/60)
const failReport = computeCohortComparison(physPaper, 20);
assert(failReport.isPassing === false, `20/60 marks is failing (< 30 marks)`);
assert(failReport.percentileRank < 10.0, `20/60 marks percentile is < 10% (got ${failReport.percentileRank}%)`);
assert(failReport.differenceFromAverage < 0, `Difference from average is negative (${failReport.differenceFromAverage})`);

// Case D: Math branch (Calculus 2024 S1)
const calcPaper = getPastExamPaperById('th-calc-2024-s1')!;
const calcTopReport = computeCohortComparison(calcPaper, 30);
assert(calcTopReport.earnedMarks === 30, `Calculus earned marks is 30`);
assert(calcTopReport.percentileRank >= 98.0, `Calculus 30/30 marks is >= 98th percentile (got ${calcTopReport.percentileRank}%)`);
assert(calcTopReport.isTopTenCandidate === true, `Calculus 30/30 is Top 10 candidate`);

// 5. Bilingual Summaries & Text Rendering
console.log('\n--- 5. Testing Bilingual Summaries & Cultural Formatting ---');
assert(topReport.summaryAr.includes('درجة'), `Arabic summary includes 'درجة'`);
assert(topReport.summaryAr.includes('الرتبة المئوية'), `Arabic summary includes 'الرتبة المئوية'`);
assert(topReport.summaryEn.includes('percentile'), `English summary includes 'percentile'`);
assert(topReport.summaryEn.includes('national average'), `English summary includes 'national average'`);

console.log(`\n================================`);
console.log(`Total Passed: ${passed} | Failed: ${failed}`);
console.log(`================================`);

if (failed === 0) {
  console.log('🎉 Authentic Thanawya Amma Past Exam Papers Service 100% verified!\n');
  process.exit(0);
} else {
  console.error(`💥 ${failed} verification tests failed.`);
  process.exit(1);
}
