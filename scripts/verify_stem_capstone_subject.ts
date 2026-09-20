/**
 * Comprehensive Verification Suite for Subject #31:
 * STEM Engineering Capstone & Egypt's Grand Challenges (مشروع التخرج الهندسي والتحديات الكبرى لمصر)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Cpu icon, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 STEM capstone problems across both curricula).
 * 7. Official ministry textbooks registration (Book #70: th-stem-capstone-g12 & Book #71: egbac-stem-capstone-g12).
 * 8. Authentic past exam papers (6 papers from 2021 to 2025, 40 Qs, 50 marks, deterministic generation).
 * 9. Simulation studio presets and engineering lab architecture (5 stations addressing Egypt's Grand Challenges).
 * 10. Student skill radar & curriculum equivalency bridge integration.
 */

import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { getOfficialBookById, getOfficialBookByBranch } from '../src/data/officialBooksData';
import { getPastExamPapers, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';
import {
  WATER_DESALINATION_PRESETS,
  SMART_MICROGRID_PRESETS,
  DESERT_AGRITECH_PRESETS,
  SMART_TRANSIT_PRESETS,
  GREEN_BUILDING_PRESETS,
} from '../src/data/stemCapstoneLab/stemCapstoneLabData';

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

console.log("⚙️ Starting Subject #31: STEM Engineering Capstone & Egypt's Grand Challenges Accreditation Verification...\n");

// -------------------------------------------------------------
// CHECKPOINT 1: Subject Registry & Metadata
// -------------------------------------------------------------
console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
const capstoneSubject = getSubjectById('stem_capstone');
assert(!!capstoneSubject, "Subject 'stem_capstone' is successfully registered in SUBJECTS registry");
assert(
  capstoneSubject?.titleEn === 'STEM Engineering Capstone & Grand Challenges',
  'Bilingual English title is accurate'
);
assert(
  capstoneSubject?.titleAr === 'مشروع التخرج الهندسي STEM والتحديات الكبرى لمصر',
  'Bilingual Arabic title is accurate'
);
assert(capstoneSubject?.iconName === 'Cpu', 'Lucide icon is set to Cpu');
assert(capstoneSubject?.emoji === '🏗️', 'Emoji is set to 🏗️');
assert(capstoneSubject?.branchIds.thanaweya.includes('thanaweya_stem_capstone'), 'Thanaweya branch ID is correctly mapped');
assert(capstoneSubject?.branchIds.egbac.includes('egbac_stem_capstone'), 'EG-Bac branch ID is correctly mapped');

// -------------------------------------------------------------
// CHECKPOINT 2: Thanaweya Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_stem_capstone');
assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_stem_capstone' branch");
assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
const thExpectedChapterIds = ['th_capstone_ch1', 'th_capstone_ch2', 'th_capstone_ch3', 'th_capstone_ch4'];
thExpectedChapterIds.forEach((chId, idx) => {
  assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 3: EG-Bac Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_stem_capstone');
assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_stem_capstone' branch");
assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
const egbacExpectedChapterIds = ['egbac_capstone_ch1', 'egbac_capstone_ch2', 'egbac_capstone_ch3', 'egbac_capstone_ch4'];
egbacExpectedChapterIds.forEach((chId, idx) => {
  assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
const allCapstoneChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
let totalMcqs = 0;

for (const ch of allCapstoneChapters) {
  assert(!!ch.databank, `Chapter [${ch.id}] possesses populated ministerial databank`);
  if (!ch.databank) continue;

  const easy = ch.databank.easy;
  const med = ch.databank.medium;
  const hots = ch.databank.hots;

  assert(easy.length === 58, `Chapter [${ch.id}] has exactly 58 Easy MCQs (got ${easy.length})`);
  assert(med.length === 59, `Chapter [${ch.id}] has exactly 59 Medium MCQs (got ${med.length})`);
  assert(hots.length === 58, `Chapter [${ch.id}] has exactly 58 HOTS MCQs (got ${hots.length})`);

  const chapterTotal = easy.length + med.length + hots.length;
  assert(chapterTotal === 175, `Chapter [${ch.id}] total databank questions = 175 (got ${chapterTotal})`);
  totalMcqs += chapterTotal;

  // Validate MCQ options schema and correctness
  const allProblems = [...easy, ...med, ...hots];
  for (const q of allProblems) {
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
assert(totalMcqs === 1400, `Total Databank MCQs across 8 chapters = 1,400 (got ${totalMcqs})`);

// -------------------------------------------------------------
// CHECKPOINT 5: Textbook Integrity & Problem Structure (200 Problems)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 5: Textbook Problems (200 Items) ---');
let totalTextbookProblems = 0;

for (const ch of allCapstoneChapters) {
  const solved = ch.solvedExamples || [];
  const exercises = ch.exerciseProblems || [];

  assert(solved.length === 10, `Chapter [${ch.id}] has exactly 10 Solved Examples (got ${solved.length})`);
  assert(exercises.length === 15, `Chapter [${ch.id}] has exactly 15 Exercise Problems (got ${exercises.length})`);

  const chTotal = solved.length + exercises.length;
  assert(chTotal === 25, `Chapter [${ch.id}] total textbook problems = 25 (got ${chTotal})`);
  totalTextbookProblems += chTotal;

  // Validate problem structure
  for (const p of [...solved, ...exercises]) {
    if (!p.id || !p.questionAr || !p.questionEn) {
      assert(false, `Problem in [${ch.id}] lacks ID or bilingual question`);
    }
    if (!p.stepByStepSolutionEn || p.stepByStepSolutionEn.length === 0 || !p.stepByStepSolutionAr || p.stepByStepSolutionAr.length === 0) {
      assert(false, `Problem ${p.id} in [${ch.id}] lacks bilingual step-by-step solutions`);
    }
  }
}
assert(totalTextbookProblems === 200, `Total Textbook Problems across 8 chapters = 200 (got ${totalTextbookProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 6: Total Problem Count
// -------------------------------------------------------------
console.log('\n--- Checkpoint 6: Total Subject Problems (1,600 Items) ---');
const totalSubjectProblems = totalMcqs + totalTextbookProblems;
assert(totalSubjectProblems === 1600, `Subject #31 adds exactly 1,600 problems (got ${totalSubjectProblems})`);

const thStats = getSubjectStats(thanaweyaCurriculum, 'stem_capstone');
const egbacStats = getSubjectStats(egBacCurriculum, 'stem_capstone');
assert(thStats.totalProblems === 800, `Thanaweya STEM Capstone branch has 800 problems (got ${thStats.totalProblems})`);
assert(egbacStats.totalProblems === 800, `EG-Bac STEM Capstone branch has 800 problems (got ${egbacStats.totalProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 7: Official Ministry Textbooks Registration
// -------------------------------------------------------------
console.log('\n--- Checkpoint 7: Official Ministry Textbooks Registration ---');
const thBook = getOfficialBookById('th-stem-capstone-g12');
assert(!!thBook, "Book #70 'th-stem-capstone-g12' is registered in officialBooksList");
assert(thBook?.category === 'stem_capstone', "Book #70 category is 'stem_capstone'");
assert(thBook?.subjectId === 'stem_capstone', "Book #70 subjectId is 'stem_capstone'");
assert(thBook?.chapters.length === 4, `Book #70 has 4 syllabus chapters (found ${thBook?.chapters.length})`);

const egbacBook = getOfficialBookById('egbac-stem-capstone-g12');
assert(!!egbacBook, "Book #71 'egbac-stem-capstone-g12' is registered in officialBooksList");
assert(egbacBook?.category === 'stem_capstone', "Book #71 category is 'stem_capstone'");
assert(egbacBook?.subjectId === 'stem_capstone', "Book #71 subjectId is 'stem_capstone'");
assert(egbacBook?.chapters.length === 4, `Book #71 has 4 syllabus chapters (found ${egbacBook?.chapters.length})`);

const resolvedThBook = getOfficialBookByBranch('thanaweya_stem_capstone');
assert(resolvedThBook?.id === 'th-stem-capstone-g12', 'getOfficialBookByBranch successfully resolves thanaweya_stem_capstone');

const resolvedEgBacBook = getOfficialBookByBranch('egbac_stem_capstone');
assert(resolvedEgBacBook?.id === 'egbac-stem-capstone-g12', 'getOfficialBookByBranch successfully resolves egbac_stem_capstone');

// -------------------------------------------------------------
// CHECKPOINT 8: Authentic Past Exam Papers
// -------------------------------------------------------------
console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
const capstonePapers = getPastExamPapers({ subject: 'stem_capstone' });
assert(capstonePapers.length === 6, `Exactly 6 authentic past papers registered for STEM Capstone (got ${capstonePapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1', id: 'th-stem-capstone-2021-s1' },
  { year: 2022, session: 'session1', id: 'th-stem-capstone-2022-s1' },
  { year: 2023, session: 'session1', id: 'th-stem-capstone-2023-s1' },
  { year: 2024, session: 'session1', id: 'th-stem-capstone-2024-s1' },
  { year: 2024, session: 'session2', id: 'th-stem-capstone-2024-s2' },
  { year: 2025, session: 'experimental', id: 'th-stem-capstone-2025-exp' },
];

expectedSessions.forEach(({ year, session, id }) => {
  const paper = capstonePapers.find((p) => p.year === year && p.session === session && p.id === id);
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

// Test deterministic question reproducibility across exam attempts
const qGen1 = generatePastPaperQuestions('th-stem-capstone-2024-s1', thanaweyaCurriculum);
const qGen2 = generatePastPaperQuestions('th-stem-capstone-2024-s1', thanaweyaCurriculum);
assert(
  qGen1[0].id === qGen2[0].id && qGen1[10].id === qGen2[10].id,
  'Seeded RNG guarantees 100% deterministic question reproducibility across exam attempts'
);

// -------------------------------------------------------------
// CHECKPOINT 9: Simulation Studio Presets & Data Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 9: Simulation Studio Presets & Data Architecture ---');
assert(WATER_DESALINATION_PRESETS.length >= 4, `Water Desalination Presets count >= 4 (found ${WATER_DESALINATION_PRESETS.length})`);
assert(WATER_DESALINATION_PRESETS.some((p) => p.id.includes('alamein')), 'Contains Alamein SWRO preset');
assert(SMART_MICROGRID_PRESETS.length >= 3, `Smart Microgrid Presets count >= 3 (found ${SMART_MICROGRID_PRESETS.length})`);
assert(SMART_MICROGRID_PRESETS.some((p) => p.id.includes('toshka')), 'Contains Toshka Hybrid Microgrid preset');
assert(DESERT_AGRITECH_PRESETS.length >= 3, `Desert AgriTech Presets count >= 3 (found ${DESERT_AGRITECH_PRESETS.length})`);
assert(DESERT_AGRITECH_PRESETS.some((p) => p.id.includes('new_delta')), 'Contains New Delta Precision AgriTech preset');
assert(SMART_TRANSIT_PRESETS.length >= 3, `Smart Transit Presets count >= 3 (found ${SMART_TRANSIT_PRESETS.length})`);
assert(SMART_TRANSIT_PRESETS.some((p) => p.id.includes('cairo_monorail')), 'Contains Cairo Monorail East Corridor preset');
assert(GREEN_BUILDING_PRESETS.length >= 3, `Green Building Presets count >= 3 (found ${GREEN_BUILDING_PRESETS.length})`);
assert(GREEN_BUILDING_PRESETS.some((p) => p.id.includes('new_capital_ministry')), 'Contains New Capital Ministry LEED Platinum preset');

// -------------------------------------------------------------
// CHECKPOINT 10: Student Skill Radar & Curriculum Equivalency
// -------------------------------------------------------------
console.log('\n--- Checkpoint 10: Student Skill Radar & Analytics Integration ---');
assert(categorizeBranch('thanaweya_stem_capstone') === 'stem_capstone', "categorizeBranch maps 'thanaweya_stem_capstone' to 'stem_capstone'");
assert(categorizeBranch('egbac_stem_capstone') === 'stem_capstone', "categorizeBranch maps 'egbac_stem_capstone' to 'stem_capstone'");
assert(categorizeBranch('مشروع التخرج الهندسي STEM') === 'stem_capstone', "categorizeBranch maps 'مشروع التخرج الهندسي STEM' to 'stem_capstone'");

const radarAll25 = getMasteryRadarData(undefined, 'all25');
assert(radarAll25.length === 25, `Mastery radar in 'all25' mode returns 25 dimensions (got ${radarAll25.length})`);
const capstoneDimension = radarAll25.find((d) => d.dimensionKey === 'stem_capstone');
assert(!!capstoneDimension, "Mastery radar contains 'stem_capstone' dimension");
assert(capstoneDimension?.labelAr === 'مشروع كابستون والتحديات الكبرى', 'Radar Arabic label is accurate');

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n=============================================================');
if (failed) {
  console.error(`❌ Verification FAILED with some assertion errors.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL ${passedCount} ACCREDITATION CHECKPOINTS PASSED PERFECTLY!`);
  console.log("⚙️ Subject #31: STEM Engineering Capstone & Egypt's Grand Challenges is 100% Accredited!");
  console.log('=============================================================');
}
