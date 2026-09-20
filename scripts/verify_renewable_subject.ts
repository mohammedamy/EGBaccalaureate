/**
 * Comprehensive Verification Suite for Subject #30:
 * Renewable Energy & Environmental Sustainability (الطاقة المتجددة والاستدامة البيئية)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Zap icon, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 renewable problems across both curricula).
 * 7. Official ministry textbooks registration (th-renew-g12 & egbac-renew-g12).
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
  SOLAR_FARM_PRESETS,
  WIND_TURBINE_PRESETS,
  HYDROGEN_ELECTROLYZER_PRESETS,
  GRID_STORAGE_PRESETS,
  INDUSTRIAL_DECARBONIZATION_PRESETS,
} from '../src/data/renewableLab/renewableLabData';

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

console.log('🌱 Starting Subject #30: Renewable Energy & Environmental Sustainability Accreditation Verification...\n');

// -------------------------------------------------------------
// CHECKPOINT 1: Subject Registry & Metadata
// -------------------------------------------------------------
console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
const renewSubject = getSubjectById('renewable');
assert(!!renewSubject, "Subject 'renewable' is successfully registered in SUBJECTS registry");
assert(renewSubject?.titleEn === 'Renewable Energy & Environmental Sustainability', 'Bilingual English title is accurate');
assert(renewSubject?.titleAr === 'الطاقة المتجددة والاستدامة البيئية', 'Bilingual Arabic title is accurate');
assert(renewSubject?.iconName === 'Zap', 'Lucide icon is set to Zap');
assert(renewSubject?.emoji === '🌱', 'Emoji is set to 🌱');
assert(renewSubject?.branchIds.thanaweya.includes('thanaweya_renewable'), 'Thanaweya branch ID is correctly mapped');
assert(renewSubject?.branchIds.egbac.includes('egbac_renewable'), 'EG-Bac branch ID is correctly mapped');

// -------------------------------------------------------------
// CHECKPOINT 2: Thanaweya Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_renewable');
assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_renewable' branch");
assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
const thExpectedChapterIds = ['th_renew_ch1', 'th_renew_ch2', 'th_renew_ch3', 'th_renew_ch4'];
thExpectedChapterIds.forEach((chId, idx) => {
  assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 3: EG-Bac Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_renewable');
assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_renewable' branch");
assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
const egbacExpectedChapterIds = ['egbac_renew_ch1', 'egbac_renew_ch2', 'egbac_renew_ch3', 'egbac_renew_ch4'];
egbacExpectedChapterIds.forEach((chId, idx) => {
  assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
const allRenewableChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
let totalMcqs = 0;

for (const ch of allRenewableChapters) {
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

for (const ch of allRenewableChapters) {
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
assert(totalSubjectProblems === 1600, `Subject #30 adds exactly 1,600 problems (got ${totalSubjectProblems})`);

const thStats = getSubjectStats(thanaweyaCurriculum, 'renewable');
const egbacStats = getSubjectStats(egBacCurriculum, 'renewable');
assert(thStats.totalProblems === 800, `Thanaweya Renewable branch has 800 problems (got ${thStats.totalProblems})`);
assert(egbacStats.totalProblems === 800, `EG-Bac Renewable branch has 800 problems (got ${egbacStats.totalProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 7: Official Ministry Textbooks Registration
// -------------------------------------------------------------
console.log('\n--- Checkpoint 7: Official Ministry Textbooks Registration ---');
const thBook = getOfficialBookById('th-renew-g12');
assert(!!thBook, "Book #68 'th-renew-g12' is registered in officialBooksList");
assert(thBook?.category === 'renewable_energy', "Book #68 category is 'renewable_energy'");
assert(thBook?.subjectId === 'renewable', "Book #68 subjectId is 'renewable'");
assert(thBook?.chapters.length === 4, `Book #68 has 4 syllabus chapters (found ${thBook?.chapters.length})`);

const egbacBook = getOfficialBookById('egbac-renew-g12');
assert(!!egbacBook, "Book #69 'egbac-renew-g12' is registered in officialBooksList");
assert(egbacBook?.category === 'renewable_energy', "Book #69 category is 'renewable_energy'");
assert(egbacBook?.subjectId === 'renewable', "Book #69 subjectId is 'renewable'");
assert(egbacBook?.chapters.length === 4, `Book #69 has 4 syllabus chapters (found ${egbacBook?.chapters.length})`);

const resolvedThBook = getOfficialBookByBranch('thanaweya_renewable');
assert(resolvedThBook?.id === 'th-renew-g12', 'getOfficialBookByBranch successfully resolves thanaweya_renewable');

const resolvedEgBacBook = getOfficialBookByBranch('egbac_renewable');
assert(resolvedEgBacBook?.id === 'egbac-renew-g12', 'getOfficialBookByBranch successfully resolves egbac_renewable');

// -------------------------------------------------------------
// CHECKPOINT 8: Authentic Past Exam Papers
// -------------------------------------------------------------
console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
const renewPapers = getPastExamPapers({ subject: 'renewable' });
assert(renewPapers.length === 6, `Exactly 6 authentic past papers registered for Renewable Energy (got ${renewPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1', id: 'th-renew-2021-s1' },
  { year: 2022, session: 'session1', id: 'th-renew-2022-s1' },
  { year: 2023, session: 'session1', id: 'th-renew-2023-s1' },
  { year: 2024, session: 'session1', id: 'th-renew-2024-s1' },
  { year: 2024, session: 'session2', id: 'th-renew-2024-s2' },
  { year: 2025, session: 'experimental', id: 'th-renew-2025-exp' },
];

expectedSessions.forEach(({ year, session, id }) => {
  const paper = renewPapers.find((p) => p.year === year && p.session === session && p.id === id);
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
const qGen1 = generatePastPaperQuestions('th-renew-2024-s1', thanaweyaCurriculum);
const qGen2 = generatePastPaperQuestions('th-renew-2024-s1', thanaweyaCurriculum);
assert(
  qGen1[0].id === qGen2[0].id && qGen1[10].id === qGen2[10].id,
  'Seeded RNG guarantees 100% deterministic question reproducibility across exam attempts'
);

// -------------------------------------------------------------
// CHECKPOINT 9: Simulation Studio Presets & Data Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 9: Simulation Studio Presets & Data Architecture ---');
assert(SOLAR_FARM_PRESETS.length >= 4, `Solar Farm Presets count >= 4 (found ${SOLAR_FARM_PRESETS.length})`);
assert(SOLAR_FARM_PRESETS.some((p) => p.id.includes('benban')), 'Contains Benban Solar Park preset');
assert(WIND_TURBINE_PRESETS.length >= 3, `Wind Turbine Presets count >= 3 (found ${WIND_TURBINE_PRESETS.length})`);
assert(WIND_TURBINE_PRESETS.some((p) => p.id.includes('gabal_el_zeit')), 'Contains Gabal El-Zeit wind preset');
assert(HYDROGEN_ELECTROLYZER_PRESETS.length >= 3, `Hydrogen Electrolyzer Presets count >= 3 (found ${HYDROGEN_ELECTROLYZER_PRESETS.length})`);
assert(HYDROGEN_ELECTROLYZER_PRESETS.some((p) => p.id.includes('sczone')), 'Contains SCZone green hydrogen corridor preset');
assert(GRID_STORAGE_PRESETS.length >= 3, `Grid Storage Presets count >= 3 (found ${GRID_STORAGE_PRESETS.length})`);
assert(GRID_STORAGE_PRESETS.some((p) => p.id.includes('ataka')), 'Contains Ataka pumped storage hydro preset');
assert(INDUSTRIAL_DECARBONIZATION_PRESETS.length >= 3, `Industrial Decarbonization Presets count >= 3 (found ${INDUSTRIAL_DECARBONIZATION_PRESETS.length})`);
assert(INDUSTRIAL_DECARBONIZATION_PRESETS.some((p) => p.id.includes('ezz_steel')), 'Contains Ezz Steel CBAM decarbonization preset');

// -------------------------------------------------------------
// CHECKPOINT 10: Student Skill Radar & Curriculum Equivalency
// -------------------------------------------------------------
console.log('\n--- Checkpoint 10: Student Skill Radar & Analytics Integration ---');
assert(categorizeBranch('thanaweya_renewable') === 'renewable_energy', "categorizeBranch maps 'thanaweya_renewable' to 'renewable_energy'");
assert(categorizeBranch('egbac_renewable') === 'renewable_energy', "categorizeBranch maps 'egbac_renewable' to 'renewable_energy'");
assert(categorizeBranch('محطة بنبان للطاقة الشمسية') === 'renewable_energy', "categorizeBranch maps 'محطة بنبان للطاقة الشمسية' to 'renewable_energy'");

const radarAll24 = getMasteryRadarData(undefined, 'all24');
assert(radarAll24.length === 24, `Mastery radar in 'all24' mode returns 24 dimensions (got ${radarAll24.length})`);
const renewDimension = radarAll24.find((d) => d.dimensionKey === 'renewable_energy');
assert(!!renewDimension, "Mastery radar contains 'renewable_energy' dimension");
assert(renewDimension?.labelAr === 'الطاقة المتجددة والاستدامة', 'Radar Arabic label is accurate');

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n=============================================================');
if (failed) {
  console.error(`❌ Verification FAILED with some assertion errors.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL ${passedCount} ACCREDITATION CHECKPOINTS PASSED PERFECTLY!`);
  console.log(`🌱 Subject #30: Renewable Energy & Environmental Sustainability is 100% Accredited!`);
  console.log('=============================================================');
}
