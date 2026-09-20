/**
 * Comprehensive Verification Suite for Subject #29:
 * Tourism, Hospitality & Cultural Heritage Management (السياحة والضيافة وإدارة التراث الثقافي)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Hotel icon, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 tourism problems across both curricula).
 * 7. Official ministry textbooks registration (th-tour-g12 & egbac-tour-g12).
 * 8. Authentic past exam papers (6 papers from 2021 to 2025, 40 Qs, 50 marks, deterministic generation).
 * 9. Simulation studio presets and data architecture (5 stations, valid metrics and calculations).
 * 10. Student skill radar & curriculum equivalency bridge integration.
 */

import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { getOfficialBookById, getOfficialBookByBranch } from '../src/data/officialBooksData';
import { getPastExamPapers, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';
import {
  HOTEL_YIELD_PRESETS,
  TOUR_PACKAGE_PRESETS,
  EGYPTIAN_HERITAGE_SITES,
  CARRYING_CAPACITY_MODELS,
  GDS_FLIGHT_INVENTORY,
} from '../src/data/tourismLab/tourismLabData';

let failed = false;
let passedCount = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${message}`);
    failed = true;
  } else {
    console.log(`✅ ${message}`);
    passedCount++;
  }
}

console.log('🏨 Starting Subject #29: Tourism, Hospitality & Cultural Heritage Management Accreditation Verification...\n');

// -------------------------------------------------------------
// CHECKPOINT 1: Subject Registry & Metadata
// -------------------------------------------------------------
console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
const tourSubject = getSubjectById('tourism');
assert(!!tourSubject, "Subject 'tourism' is successfully registered in SUBJECTS registry");
assert(tourSubject?.titleEn === 'Tourism, Hospitality & Cultural Heritage Management', 'Bilingual English title is accurate');
assert(tourSubject?.titleAr === 'السياحة والضيافة وإدارة التراث الثقافي', 'Bilingual Arabic title is accurate');
assert(tourSubject?.iconName === 'Hotel', 'Lucide icon is set to Hotel');
assert(tourSubject?.emoji === '🏨', 'Emoji is set to 🏨');
assert(tourSubject?.branchIds.thanaweya.includes('thanaweya_tourism'), 'Thanaweya branch ID is correctly mapped');
assert(tourSubject?.branchIds.egbac.includes('egbac_tourism'), 'EG-Bac branch ID is correctly mapped');

// -------------------------------------------------------------
// CHECKPOINT 2: Thanaweya Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_tourism');
assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_tourism' branch");
assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
const thExpectedChapterIds = ['th_tour_ch1', 'th_tour_ch2', 'th_tour_ch3', 'th_tour_ch4'];
thExpectedChapterIds.forEach((chId, idx) => {
  assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 3: EG-Bac Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_tourism');
assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_tourism' branch");
assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
const egbacExpectedChapterIds = ['egbac_tour_ch1', 'egbac_tour_ch2', 'egbac_tour_ch3', 'egbac_tour_ch4'];
egbacExpectedChapterIds.forEach((chId, idx) => {
  assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
const allTourismChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
let totalMcqs = 0;

for (const ch of allTourismChapters) {
  assert(!!ch.databank, `Chapter [${ch.id}] possesses populated ministerial databank`);
  if (!ch.databank) continue;

  const easy = ch.databank.easy;
  const med = ch.databank.medium;
  const hots = ch.databank.hots;

  assert(easy.length === 58, `Chapter [${ch.id}] has exactly 58 Easy MCQs (got ${easy.length})`);
  assert(med.length === 59, `Chapter [${ch.id}] has exactly 59 Medium MCQs (got ${med.length})`);
  assert(hots.length === 58, `Chapter [${ch.id}] has exactly 58 HOTS MCQs (got ${hots.length})`);

  const chapterTotal = easy.length + med.length + hots.length;
  assert(chapterTotal === 175, `Chapter [${ch.id}] total databank MCQs is exactly 175 (got ${chapterTotal})`);
  totalMcqs += chapterTotal;

  // Validate MCQ options schema and correctness
  const allQs = [...easy, ...med, ...hots];
  for (const q of allQs) {
    if (new Set(q.optionsEn).size !== 4) {
      assert(false, `Question ${q.id} in ${ch.id} does not have 4 unique English options`);
    }
    if (new Set(q.optionsAr).size !== 4) {
      assert(false, `Question ${q.id} in ${ch.id} does not have 4 unique Arabic options`);
    }
    if (q.correctIndex === undefined || q.correctIndex < 0 || q.correctIndex > 3) {
      assert(false, `Question ${q.id} in ${ch.id} has invalid correctIndex: ${q.correctIndex}`);
    }
    if (!q.explanationEn || !q.explanationAr) {
      assert(false, `Question ${q.id} in ${ch.id} lacks bilingual explanation`);
    }
  }
}
assert(totalMcqs === 1400, `Grand total of Tourism databank MCQs is exactly 1,400 (found ${totalMcqs})`);

// -------------------------------------------------------------
// CHECKPOINT 5: Textbook Integrity & Problem Breakdown (200 Items)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 5: Textbook Problems Integrity (200 Items) ---');
let totalTextbookProblems = 0;

for (const ch of allTourismChapters) {
  const examples = ch.solvedExamples || [];
  const exercises = ch.exerciseProblems || [];

  assert(examples.length === 10, `Chapter [${ch.id}] has exactly 10 Solved Examples (got ${examples.length})`);
  assert(exercises.length === 15, `Chapter [${ch.id}] has exactly 15 Practice Exercises (got ${exercises.length})`);

  const chProblems = examples.length + exercises.length;
  assert(chProblems === 25, `Chapter [${ch.id}] total textbook problems is exactly 25 (got ${chProblems})`);
  totalTextbookProblems += chProblems;
}
assert(totalTextbookProblems === 200, `Grand total of Tourism textbook problems is exactly 200 (found ${totalTextbookProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 6: Subject Stats & Cumulative Problem Totals
// -------------------------------------------------------------
console.log('\n--- Checkpoint 6: Subject Stats & Cumulative Totals ---');
const thTourStats = getSubjectStats(thanaweyaCurriculum, 'tourism');
assert(thTourStats.totalChapters === 4, `Thanaweya Tourism chapters: ${thTourStats.totalChapters} (expected 4)`);
assert(thTourStats.totalProblems === 800, `Thanaweya Tourism problems: ${thTourStats.totalProblems} (expected 800)`);

const egbacTourStats = getSubjectStats(egBacCurriculum, 'tourism');
assert(egbacTourStats.totalChapters === 4, `EG-Bac Tourism chapters: ${egbacTourStats.totalChapters} (expected 4)`);
assert(egbacTourStats.totalProblems === 800, `EG-Bac Tourism problems: ${egbacTourStats.totalProblems} (expected 800)`);

const grandTourismProblems = thTourStats.totalProblems + egbacTourStats.totalProblems;
assert(grandTourismProblems === 1600, `Grand total Tourism problems across both curriculums is exactly 1,600 (got ${grandTourismProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 7: Official Ministry Textbooks
// -------------------------------------------------------------
console.log('\n--- Checkpoint 7: Official Ministry Textbooks ---');
const thBook = getOfficialBookById('th-tour-g12');
assert(!!thBook, "Official textbook 'th-tour-g12' is registered");
assert(thBook?.category === 'tourism_hospitality', "th-tour-g12 category is 'tourism_hospitality'");
assert(thBook?.subjectId === 'tourism', "th-tour-g12 subjectId is 'tourism'");
assert(thBook?.chapters.length === 4, 'th-tour-g12 has 4 chapter outlines');

const egbacBook = getOfficialBookById('egbac-tour-g12');
assert(!!egbacBook, "Official textbook 'egbac-tour-g12' is registered");
assert(egbacBook?.category === 'tourism_hospitality', "egbac-tour-g12 category is 'tourism_hospitality'");
assert(egbacBook?.subjectId === 'tourism', "egbac-tour-g12 subjectId is 'tourism'");
assert(egbacBook?.chapters.length === 4, 'egbac-tour-g12 has 4 module outlines');

const bookByThBranch = getOfficialBookByBranch('thanaweya_tourism');
assert(bookByThBranch?.id === 'th-tour-g12', "getOfficialBookByBranch('thanaweya_tourism') returns 'th-tour-g12'");

const bookByEgbacBranch = getOfficialBookByBranch('egbac_tourism');
assert(bookByEgbacBranch?.id === 'egbac-tour-g12', "getOfficialBookByBranch('egbac_tourism') returns 'egbac-tour-g12'");

// -------------------------------------------------------------
// CHECKPOINT 8: Authentic Past Exam Papers
// -------------------------------------------------------------
console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
const tourPapers = getPastExamPapers({ subject: 'tourism' });
assert(tourPapers.length === 6, `Tourism has exactly 6 authentic past exam papers (got ${tourPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1', id: 'th-tour-2021-s1' },
  { year: 2022, session: 'session1', id: 'th-tour-2022-s1' },
  { year: 2023, session: 'session1', id: 'th-tour-2023-s1' },
  { year: 2024, session: 'session1', id: 'th-tour-2024-s1' },
  { year: 2024, session: 'session2', id: 'th-tour-2024-s2' },
  { year: 2025, session: 'experimental', id: 'th-tour-2025-exp' },
];

expectedSessions.forEach(({ year, session, id }) => {
  const paper = tourPapers.find((p) => p.year === year && p.session === session && p.id === id);
  assert(!!paper, `Found past exam paper [${id}] for ${year} ${session}`);
  if (paper) {
    assert(paper.totalQuestions === 40, `[${id}] Total questions === 40`);
    assert(paper.totalMarks === 50, `[${id}] Total marks === 50`);
    assert(paper.durationMinutes === 180, `[${id}] Duration === 180 minutes`);
    assert(paper.section1Count === 30, `[${id}] Section 1 items === 30 (1 pt each)`);
    assert(paper.section2Count === 10, `[${id}] Section 2 items === 10 (2 pts each)`);

    // Sample question generation
    const questions = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
    assert(questions.length === 40, `[${id}] Generates exactly 40 questions (got ${questions.length})`);
    const totalMarksGenerated = questions.reduce((sum, q) => sum + (q.points || 1), 0);
    assert(totalMarksGenerated === 50, `[${id}] Generated questions sum to 50 marks (got ${totalMarksGenerated})`);
  }
});

// -------------------------------------------------------------
// CHECKPOINT 9: Simulation Studio Presets & Data
// -------------------------------------------------------------
console.log('\n--- Checkpoint 9: Virtual Simulation Studio Data Architecture ---');
assert(HOTEL_YIELD_PRESETS.length === 3, `Hotel Yield Presets count === 3 (found ${HOTEL_YIELD_PRESETS.length})`);
assert(TOUR_PACKAGE_PRESETS.length === 3, `Tour Package Costing Presets count === 3 (found ${TOUR_PACKAGE_PRESETS.length})`);
assert(EGYPTIAN_HERITAGE_SITES.length === 4, `Egyptian UNESCO Heritage Sites count === 4 (found ${EGYPTIAN_HERITAGE_SITES.length})`);
assert(CARRYING_CAPACITY_MODELS.length === 3, `Carrying Capacity Models count === 3 (found ${CARRYING_CAPACITY_MODELS.length})`);
assert(GDS_FLIGHT_INVENTORY.length === 4, `GDS Flight Inventory Entries count === 4 (found ${GDS_FLIGHT_INVENTORY.length})`);

// Validate Giza coordinates
const giza = EGYPTIAN_HERITAGE_SITES.find((s) => s.id === 'giza_memphis');
assert(!!giza && Math.abs(giza.coordinates.lat - 29.9792) < 0.01, 'Giza Pyramids latitude coordinates verified');
assert(giza?.inscribedYear === 1979, 'Giza inscription year is 1979');

// Validate Ras Mohammed carrying capacity preset
const rasMoh = CARRYING_CAPACITY_MODELS.find((m) => m.id === 'ras_mohammed_reef');
assert(rasMoh?.totalUsableAreaSqM === 15000, 'Ras Mohammed coral reef usable area is 15,000 sq m');

// Validate EgyptAir GDS MS777 entry
const ms777 = GDS_FLIGHT_INVENTORY.find((f) => f.flightNumber === 'MS 777');
assert(ms777?.originIata === 'CAI' && ms777?.destIata === 'LHR', 'EgyptAir MS 777 CAI-LHR route verified');

// -------------------------------------------------------------
// CHECKPOINT 10: Student Analytics Skill Category & Radar
// -------------------------------------------------------------
console.log('\n--- Checkpoint 10: Student Analytics Skill Category & Radar ---');
const inferredCategory = categorizeBranch('إدارة الفنادق وعائد RevPAR');
assert(inferredCategory === 'tourism_hospitality', `categorizeBranch identifies 'tourism_hospitality' correctly (got ${inferredCategory})`);

const radarData23 = getMasteryRadarData(undefined, 'all23');
assert(radarData23.length === 23, `getMasteryRadarData('all23') returns 23 dimensions (got ${radarData23.length})`);
const tourDim = radarData23.find((d) => d.dimensionKey === 'tourism_hospitality');
assert(!!tourDim, "23-Dimensional radar contains 'tourism_hospitality' dimension point");
assert(tourDim?.labelAr === 'السياحة والضيافة والتراث', 'Radar Arabic label is verified');

// -------------------------------------------------------------
// Summary
// -------------------------------------------------------------
console.log('\n======================================================');
if (failed) {
  console.error(`❌ Subject #29 Verification FAILED with errors.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL 10 CHECKPOINTS PASSED (${passedCount} assertions)!`);
  console.log(`🏛️ Subject #29: Tourism, Hospitality & Cultural Heritage Management is 100% ACCREDITED.`);
  console.log('======================================================\n');
}
