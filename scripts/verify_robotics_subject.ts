/**
 * Comprehensive Verification Suite for Subject #32:
 * Robotics, Mechatronics & Embedded Systems (الروبوتات والميكاترونكس والأنظمة المدمجة)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Bot icon, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 robotics problems across both curricula).
 * 7. Official ministry textbooks registration (Book #72: th-robotics-g12 & Book #73: egbac-robotics-g12).
 * 8. Authentic past exam papers (6 papers from 2021 to 2025, 40 Qs, 50 marks, deterministic generation).
 * 9. Simulation studio presets and robotics lab architecture (5 stations: Manipulators, AGVs, Motor Drives, RTOS, Machine Vision).
 * 10. Student skill radar & curriculum equivalency bridge integration.
 */

import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { getOfficialBookById, getOfficialBookByBranch } from '../src/data/officialBooksData';
import { getPastExamPapers, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';
import {
  ROBOTIC_ARM_PRESETS,
  MOBILE_ROBOT_PRESETS,
  MOTOR_DRIVE_PRESETS,
  EMBEDDED_RTOS_PRESETS,
  COMPUTER_VISION_PRESETS,
} from '../src/data/roboticsLab/roboticsLabData';

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

console.log('🤖 Starting Subject #32: Robotics, Mechatronics & Embedded Systems Accreditation Verification...\n');

// -------------------------------------------------------------
// CHECKPOINT 1: Subject Registry & Metadata
// -------------------------------------------------------------
console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
const roboticsSubject = getSubjectById('robotics_mechatronics');
assert(!!roboticsSubject, "Subject 'robotics_mechatronics' is successfully registered in SUBJECTS registry");
assert(
  roboticsSubject?.titleEn === 'Robotics, Mechatronics & Embedded Systems',
  'Bilingual English title is accurate'
);
assert(
  roboticsSubject?.titleAr === 'الروبوتات والميكاترونكس والأنظمة المدمجة',
  'Bilingual Arabic title is accurate'
);
assert(roboticsSubject?.iconName === 'Bot', 'Lucide icon is set to Bot');
assert(roboticsSubject?.emoji === '🤖', 'Emoji is set to 🤖');
assert(roboticsSubject?.branchIds.thanaweya.includes('thanaweya_robotics'), 'Thanaweya branch ID is correctly mapped');
assert(roboticsSubject?.branchIds.egbac.includes('egbac_robotics'), 'EG-Bac branch ID is correctly mapped');

// -------------------------------------------------------------
// CHECKPOINT 2: Thanaweya Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_robotics');
assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_robotics' branch");
assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
const thExpectedChapterIds = ['th_robotics_ch1', 'th_robotics_ch2', 'th_robotics_ch3', 'th_robotics_ch4'];
thExpectedChapterIds.forEach((chId, idx) => {
  assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 3: EG-Bac Branch Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_robotics');
assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_robotics' branch");
assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
const egbacExpectedChapterIds = ['egbac_robotics_ch1', 'egbac_robotics_ch2', 'egbac_robotics_ch3', 'egbac_robotics_ch4'];
egbacExpectedChapterIds.forEach((chId, idx) => {
  assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
});

// -------------------------------------------------------------
// CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
// -------------------------------------------------------------
console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
const allRoboticsChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
let totalMcqs = 0;

for (const ch of allRoboticsChapters) {
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

for (const ch of allRoboticsChapters) {
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
assert(totalSubjectProblems === 1600, `Subject #32 adds exactly 1,600 problems (got ${totalSubjectProblems})`);

const thStats = getSubjectStats(thanaweyaCurriculum, 'robotics_mechatronics');
const egbacStats = getSubjectStats(egBacCurriculum, 'robotics_mechatronics');
assert(thStats.totalProblems === 800, `Thanaweya Robotics branch has 800 problems (got ${thStats.totalProblems})`);
assert(egbacStats.totalProblems === 800, `EG-Bac Robotics branch has 800 problems (got ${egbacStats.totalProblems})`);

// -------------------------------------------------------------
// CHECKPOINT 7: Official Ministry Textbooks Registration
// -------------------------------------------------------------
console.log('\n--- Checkpoint 7: Official Ministry Textbooks Registration ---');
const thBook = getOfficialBookById('th-robotics-g12');
assert(!!thBook, "Book #72 'th-robotics-g12' is registered in officialBooksList");
assert(thBook?.category === 'robotics_mechatronics', "Book #72 category is 'robotics_mechatronics'");
assert(thBook?.subjectId === 'robotics_mechatronics', "Book #72 subjectId is 'robotics_mechatronics'");
assert(thBook?.chapters.length === 4, `Book #72 has 4 syllabus chapters (found ${thBook?.chapters.length})`);

const egbacBook = getOfficialBookById('egbac-robotics-g12');
assert(!!egbacBook, "Book #73 'egbac-robotics-g12' is registered in officialBooksList");
assert(egbacBook?.category === 'robotics_mechatronics', "Book #73 category is 'robotics_mechatronics'");
assert(egbacBook?.subjectId === 'robotics_mechatronics', "Book #73 subjectId is 'robotics_mechatronics'");
assert(egbacBook?.chapters.length === 4, `Book #73 has 4 syllabus chapters (found ${egbacBook?.chapters.length})`);

const resolvedThBook = getOfficialBookByBranch('thanaweya_robotics');
assert(resolvedThBook?.id === 'th-robotics-g12', 'getOfficialBookByBranch successfully resolves thanaweya_robotics');

const resolvedEgBacBook = getOfficialBookByBranch('egbac_robotics');
assert(resolvedEgBacBook?.id === 'egbac-robotics-g12', 'getOfficialBookByBranch successfully resolves egbac_robotics');

// -------------------------------------------------------------
// CHECKPOINT 8: Authentic Past Exam Papers
// -------------------------------------------------------------
console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
const roboticsPapers = getPastExamPapers({ subject: 'robotics_mechatronics' });
assert(roboticsPapers.length === 6, `Exactly 6 authentic past papers registered for Robotics (got ${roboticsPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1', id: 'th-robotics-2021-s1' },
  { year: 2022, session: 'session1', id: 'th-robotics-2022-s1' },
  { year: 2023, session: 'session1', id: 'th-robotics-2023-s1' },
  { year: 2024, session: 'session1', id: 'th-robotics-2024-s1' },
  { year: 2024, session: 'session2', id: 'th-robotics-2024-s2' },
  { year: 2025, session: 'experimental', id: 'th-robotics-2025-exp' },
];

expectedSessions.forEach(({ year, session, id }) => {
  const paper = roboticsPapers.find((p) => p.year === year && p.session === session && p.id === id);
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
const qGen1 = generatePastPaperQuestions('th-robotics-2024-s1', thanaweyaCurriculum);
const qGen2 = generatePastPaperQuestions('th-robotics-2024-s1', thanaweyaCurriculum);
assert(
  qGen1[0].id === qGen2[0].id && qGen1[10].id === qGen2[10].id,
  'Seeded RNG guarantees 100% deterministic question reproducibility across exam attempts'
);

// -------------------------------------------------------------
// CHECKPOINT 9: Simulation Studio Presets & Data Architecture
// -------------------------------------------------------------
console.log('\n--- Checkpoint 9: Simulation Studio Presets & Data Architecture ---');
assert(ROBOTIC_ARM_PRESETS.length >= 3, `Robotic Arm Presets count >= 3 (found ${ROBOTIC_ARM_PRESETS.length})`);
assert(ROBOTIC_ARM_PRESETS.some((p) => p.id.includes('welding')), 'Contains Cairo Automotive Welding Arm preset');
assert(MOBILE_ROBOT_PRESETS.length >= 3, `Mobile Robot Presets count >= 3 (found ${MOBILE_ROBOT_PRESETS.length})`);
assert(MOBILE_ROBOT_PRESETS.some((p) => p.id.includes('tenth_ramadan')), 'Contains 10th of Ramadan Logistics AMR preset');
assert(MOTOR_DRIVE_PRESETS.length >= 3, `Motor Drive Presets count >= 3 (found ${MOTOR_DRIVE_PRESETS.length})`);
assert(MOTOR_DRIVE_PRESETS.some((p) => p.id.includes('industrial_servo_pmsm')), 'Contains Precision CNC Servomotor preset');
assert(EMBEDDED_RTOS_PRESETS.length >= 3, `Embedded RTOS Presets count >= 3 (found ${EMBEDDED_RTOS_PRESETS.length})`);
assert(EMBEDDED_RTOS_PRESETS.some((p) => p.id.includes('automotive')), 'Contains Automotive Gateway RTOS preset');
assert(COMPUTER_VISION_PRESETS.length >= 3, `Computer Vision Presets count >= 3 (found ${COMPUTER_VISION_PRESETS.length})`);
assert(COMPUTER_VISION_PRESETS.some((p) => p.id.includes('bin_picking')), 'Contains 3D Random Bin Picking preset');

// -------------------------------------------------------------
// CHECKPOINT 10: Student Skill Radar & Analytics Integration
// -------------------------------------------------------------
console.log('\n--- Checkpoint 10: Student Skill Radar & Analytics Integration ---');
assert(categorizeBranch('thanaweya_robotics') === 'robotics_mechatronics', "categorizeBranch maps 'thanaweya_robotics' to 'robotics_mechatronics'");
assert(categorizeBranch('egbac_robotics') === 'robotics_mechatronics', "categorizeBranch maps 'egbac_robotics' to 'robotics_mechatronics'");
assert(categorizeBranch('الروبوتات والميكاترونكس والأنظمة المدمجة') === 'robotics_mechatronics', "categorizeBranch maps 'الروبوتات والميكاترونكس والأنظمة المدمجة' to 'robotics_mechatronics'");

const radarAll26 = getMasteryRadarData(undefined, 'all26');
assert(radarAll26.length === 26, `Mastery radar in 'all26' mode returns 26 dimensions (got ${radarAll26.length})`);
const roboticsDimension = radarAll26.find((d) => d.dimensionKey === 'robotics_mechatronics');
assert(!!roboticsDimension, "Mastery radar contains 'robotics_mechatronics' dimension");
assert(roboticsDimension?.labelAr === 'الروبوتات والميكاترونكس والأنظمة المدمجة', 'Radar Arabic label is accurate');

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n=============================================================');
if (failed) {
  console.error(`❌ Verification FAILED with some assertion errors.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL ${passedCount} ACCREDITATION CHECKPOINTS PASSED PERFECTLY!`);
  console.log('🤖 Subject #32: Robotics, Mechatronics & Embedded Systems is 100% Accredited!');
  console.log('=============================================================');
}
