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
  type PastExamSubject,
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
console.log('--- 1. Testing Past Exam Papers Catalog Metadata (192 Authentic Papers) ---');
assert(PAST_EXAM_PAPERS.length === 192, `Catalog contains exactly 192 authentic past papers (found ${PAST_EXAM_PAPERS.length})`);

// Test filtering by year
const papers2024 = getPastExamPapers({ year: 2024 });
assert(papers2024.length === 64, `Found exactly 64 papers for 2024 (32 S1 + 32 S2) (got ${papers2024.length})`);

const papers2023 = getPastExamPapers({ year: 2023 });
assert(papers2023.length === 32, `Found exactly 32 papers for 2023 (got ${papers2023.length})`);

const papers2022 = getPastExamPapers({ year: 2022 });
assert(papers2022.length === 32, `Found exactly 32 papers for 2022 (got ${papers2022.length})`);

const papers2021 = getPastExamPapers({ year: 2021 });
assert(papers2021.length === 32, `Found exactly 32 papers for 2021 (got ${papers2021.length})`);

const papers2025 = getPastExamPapers({ year: 2025 });
assert(papers2025.length === 32, `Found exactly 32 papers for 2025 (got ${papers2025.length})`);

// Test filtering by session
const session1Papers = getPastExamPapers({ session: 'session1' });
assert(session1Papers.length === 128, `Found exactly 128 First Session (دور أول) papers (got ${session1Papers.length})`);

const session2Papers = getPastExamPapers({ session: 'session2' });
assert(session2Papers.length === 32, `Found exactly 32 Second Session (دور ثاني) papers (got ${session2Papers.length})`);

const expPapers = getPastExamPapers({ session: 'experimental' });
assert(expPapers.length === 32, `Found exactly 32 2025 MoE Experimental Model papers (got ${expPapers.length})`);

// Test subject filtering across all 32 disciplines
const ALL_32_SUBJECTS: PastExamSubject[] = [
  'physics',
  'chemistry',
  'biology',
  'geology',
  'calculus',
  'algebra_solid',
  'statics',
  'dynamics',
  'arabic',
  'english',
  'french',
  'german',
  'italian',
  'spanish',
  'chinese',
  'history',
  'geography',
  'philosophy',
  'psychology',
  'economics_stat',
  'cs_informatics',
  'earth_space',
  'civics',
  'islamic_studies',
  'christian_studies',
  'business_entrepreneurship',
  'fine_arts_architecture',
  'music_theory',
  'agriculture',
  'industrial',
  'commercial',
  'tourism',
];

ALL_32_SUBJECTS.forEach((sub) => {
  const papers = getPastExamPapers({ subject: sub });
  assert(papers.length === 6, `Subject [${sub}] has 6 papers across historical sessions (got ${papers.length})`);
});

// Validate every paper's schema
PAST_EXAM_PAPERS.forEach((paper) => {
  let expectedQ = 46;
  let expectedMarks = 60;
  let expectedDuration = 180;
  let expectedSec1 = 32;
  let expectedSec2 = 14;
  let expectedPass = 30;

  if (['calculus', 'algebra_solid', 'statics', 'dynamics'].includes(paper.subject)) {
    expectedQ = 20;
    expectedMarks = 30;
    expectedDuration = 120;
    expectedSec1 = 10;
    expectedSec2 = 10;
    expectedPass = 15;
  } else if (paper.subject === 'arabic') {
    expectedQ = 55;
    expectedMarks = 80;
    expectedDuration = 180;
    expectedSec1 = 30;
    expectedSec2 = 25;
    expectedPass = 40;
  } else if (paper.subject === 'english') {
    expectedQ = 37;
    expectedMarks = 50;
    expectedDuration = 180;
    expectedSec1 = 24;
    expectedSec2 = 13;
    expectedPass = 25;
  } else if (paper.subject === 'french' || paper.subject === 'german' || paper.subject === 'italian' || paper.subject === 'spanish' || paper.subject === 'chinese') {
    expectedQ = 31;
    expectedMarks = 40;
    expectedDuration = 120;
    expectedSec1 = 22;
    expectedSec2 = 9;
    expectedPass = 20;
  } else if (paper.subject === 'economics_stat' || paper.subject === 'cs_informatics' || paper.subject === 'earth_space' || paper.subject === 'business_entrepreneurship' || paper.subject === 'fine_arts_architecture' || paper.subject === 'music_theory' || paper.subject === 'agriculture' || paper.subject === 'industrial' || paper.subject === 'commercial' || paper.subject === 'tourism') {
    expectedQ = 40;
    expectedMarks = 50;
    expectedDuration = 180;
    expectedSec1 = 30;
    expectedSec2 = 10;
    expectedPass = 25;
  } else if (paper.subject === 'civics' || paper.subject === 'islamic_studies' || paper.subject === 'christian_studies') {
    expectedQ = 25;
    expectedMarks = 30;
    expectedDuration = 90;
    expectedSec1 = 20;
    expectedSec2 = 5;
    expectedPass = 15;
  }

  assert(paper.totalQuestions === expectedQ, `[${paper.id}] Total questions is ${expectedQ}`);
  assert(paper.totalMarks === expectedMarks, `[${paper.id}] Total marks is ${expectedMarks}`);
  assert(paper.durationMinutes === expectedDuration, `[${paper.id}] Duration is ${expectedDuration} min`);
  assert(paper.section1Count === expectedSec1, `[${paper.id}] Section 1 count is ${expectedSec1}`);
  assert(paper.section2Count === expectedSec2, `[${paper.id}] Section 2 count is ${expectedSec2}`);
  assert(paper.passingMark === expectedPass, `[${paper.id}] Passing mark is ${expectedPass}`);
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

// 2. Question Generation & Section Integrity Across All 32 Subjects
console.log('\n--- 2. Testing Deterministic Question Generation Across All 32 Subjects ---');

ALL_32_SUBJECTS.forEach((sub) => {
  const paper = PAST_EXAM_PAPERS.find((p) => p.subject === sub && p.year === 2024 && p.session === 'session1')!;
  const questions = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);

  assert(
    questions.length === paper.totalQuestions,
    `[${sub}] 2024 S1 generated exactly ${paper.totalQuestions} questions (got ${questions.length})`
  );

  const totalMarks = questions.reduce((sum, q) => sum + (q.points || 1), 0);
  assert(
    totalMarks === paper.totalMarks,
    `[${sub}] 2024 S1 questions sum to exactly ${paper.totalMarks} marks (got ${totalMarks})`
  );

  const sec1 = questions.slice(0, paper.section1Count);
  const sec2 = questions.slice(paper.section1Count);

  assert(
    sec1.every((q) => q.points === 1),
    `[${sub}] Section 1 items strictly have points === 1`
  );
  assert(
    sec2.every((q) => q.points === 2),
    `[${sub}] Section 2 items strictly have points === 2`
  );
});

// Deterministic repeat check on Physics
const phys2024Q1 = generatePastPaperQuestions('th-phys-2024-s1', thanaweyaCurriculum);
const phys2024Q2 = generatePastPaperQuestions('th-phys-2024-s1', thanaweyaCurriculum);
assert(
  phys2024Q1.every((q, idx) => q.id === phys2024Q2[idx].id),
  `Seeded RNG ensures 100% deterministic question reproducibility across separate invocations`
);

// 3. Question Schema and Options Integrity
console.log('\n--- 3. Testing Question Schema and Options Integrity ---');
const allSampledQuestions = ALL_32_SUBJECTS.flatMap((sub) => {
  const paper = PAST_EXAM_PAPERS.find((p) => p.subject === sub && p.year === 2024 && p.session === 'session1')!;
  return generatePastPaperQuestions(paper.id, thanaweyaCurriculum).slice(0, 5);
});

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

assert(
  valid4Opts === allSampledQuestions.length,
  `All ${allSampledQuestions.length} sampled questions have strictly 4 unique options in Ar/En and valid correctIndex`
);
assert(
  validKatex === allSampledQuestions.length,
  `All ${allSampledQuestions.length} sampled questions have balanced KaTeX curly braces`
);

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

// Case E: Arabic 80-mark Paper (Arabic 2024 S1)
const arabPaper = getPastExamPaperById('th-arab-2024-s1')!;
const arabReport = computeCohortComparison(arabPaper, 80);
assert(arabReport.earnedMarks === 80, `Arabic earned marks is 80`);
assert(arabReport.scorePercentage === 100, `Arabic score percentage is 100%`);
assert(arabReport.isTopTenCandidate === true, `Arabic 80/80 is Top 10 candidate`);

// Case F: Economics & Statistics 50-mark Paper (Econ 2024 S1)
const econPaper = getPastExamPaperById('th-econ-2024-s1')!;
const econReport = computeCohortComparison(econPaper, 50);
assert(econReport.earnedMarks === 50, `Economics earned marks is 50`);
assert(econReport.isTopTenCandidate === true, `Economics 50/50 is Top 10 candidate`);

// Case G: Civics 30-mark Paper (Civics 2024 S1)
const civicsPaper = getPastExamPaperById('th-civics-2024-s1')!;
const civicsReport = computeCohortComparison(civicsPaper, 30);
assert(civicsReport.earnedMarks === 30, `Civics earned marks is 30`);
assert(civicsReport.isTopTenCandidate === true, `Civics 30/30 is Top 10 candidate`);

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
