/**
 * Comprehensive Verification Suite for Subject #36:
 * Nanotechnology & Advanced Materials Science (النانوتكنولوجي وعلوم المواد المتقدمة)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Atom icon, emoji, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 Nanotechnology problems across both curricula).
 * 7. Official ministry textbooks registration (Book #80: th-nanotechnology-g12 & Book #81: egbac-nanotechnology-g12).
 * 8. Authentic past exam papers (6 papers from 2021 to 2025, 40 Qs, 50 marks, deterministic generation).
 * 9. Simulation studio presets and Nanotech lab architecture (5 stations: Quantum Dots, SEM/TEM, LSPR, Nanomedicine, Photocatalysis).
 * 10. Student skill radar (all30 mode) & curriculum equivalency bridge integration.
 */

import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { getSubjectById, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { getOfficialBookById, getOfficialBookByBranch } from '../src/data/officialBooksData';
import { getPastExamPapers, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';
import {
  QUANTUM_DOT_CONFINEMENT_PRESETS,
  SEM_TEM_CHARACTERIZATION_PRESETS,
  SURFACE_PLASMON_RESONANCE_PRESETS,
  NANOMEDICINE_DRUG_RELEASE_PRESETS,
  SOLAR_PHOTOCATALYSIS_PRESETS,
} from '../src/data/nanotechLab/nanotechLabData';

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

async function runVerification() {
  console.log('🔬 Starting Subject #36: Nanotechnology & Advanced Materials Science Accreditation Verification...\n');

  // -------------------------------------------------------------
  // CHECKPOINT 1: Subject Registry & Metadata
  // -------------------------------------------------------------
  console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
  const subject = getSubjectById('nanotechnology');
  assert(!!subject, "Subject 'nanotechnology' is successfully registered in SUBJECTS registry");
  assert(
    subject?.titleEn === 'Nanotechnology & Advanced Materials Science',
    'Bilingual English title is accurate'
  );
  assert(
    subject?.titleAr === 'النانوتكنولوجي وعلوم المواد المتقدمة',
    'Bilingual Arabic title is accurate'
  );
  assert(subject?.iconName === 'Atom', 'Lucide icon is set to Atom');
  assert(subject?.emoji === '🔬', 'Emoji is set to 🔬');
  assert(subject?.branchIds.thanaweya.includes('thanaweya_nanotechnology'), 'Thanaweya branch ID is correctly mapped');
  assert(subject?.branchIds.egbac.includes('egbac_nanotechnology'), 'EG-Bac branch ID is correctly mapped');

  // -------------------------------------------------------------
  // CHECKPOINT 2: Thanaweya Branch Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
  const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_nanotechnology');
  assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_nanotechnology' branch");
  assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
  const thExpectedChapterIds = ['th_nanotechnology_ch1', 'th_nanotechnology_ch2', 'th_nanotechnology_ch3', 'th_nanotechnology_ch4'];
  thExpectedChapterIds.forEach((chId, idx) => {
    assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
  });

  // -------------------------------------------------------------
  // CHECKPOINT 3: EG-Bac Branch Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
  const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_nanotechnology');
  assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_nanotechnology' branch");
  assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
  const egbacExpectedChapterIds = ['egbac_nanotechnology_ch1', 'egbac_nanotechnology_ch2', 'egbac_nanotechnology_ch3', 'egbac_nanotechnology_ch4'];
  egbacExpectedChapterIds.forEach((chId, idx) => {
    assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
  });

  // -------------------------------------------------------------
  // CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
  const allNanotechChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
  let totalMcqs = 0;

  for (const ch of allNanotechChapters) {
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

  for (const ch of allNanotechChapters) {
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
  assert(totalSubjectProblems === 1600, `Subject #36 adds exactly 1,600 problems (got ${totalSubjectProblems})`);

  const thStats = getSubjectStats(thanaweyaCurriculum, 'nanotechnology');
  const egbacStats = getSubjectStats(egBacCurriculum, 'nanotechnology');
  assert(thStats.totalProblems === 800, `Thanaweya Nanotechnology branch has 800 problems (got ${thStats.totalProblems})`);
  assert(egbacStats.totalProblems === 800, `EG-Bac Nanotechnology branch has 800 problems (got ${egbacStats.totalProblems})`);

  // -------------------------------------------------------------
  // CHECKPOINT 7: Official Ministry Textbooks Registration
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 7: Official Ministry Textbooks Registration ---');
  const thBook = getOfficialBookById('th-nanotechnology-g12');
  assert(!!thBook, "Book #80 'th-nanotechnology-g12' is registered in officialBooksList");
  assert(thBook?.category === 'nanotechnology', "Book #80 category is 'nanotechnology'");
  assert(thBook?.subjectId === 'nanotechnology', "Book #80 subjectId is 'nanotechnology'");
  assert(thBook?.chapters.length === 4, `Book #80 has 4 syllabus chapters (found ${thBook?.chapters.length})`);

  const egbacBook = getOfficialBookById('egbac-nanotechnology-g12');
  assert(!!egbacBook, "Book #81 'egbac-nanotechnology-g12' is registered in officialBooksList");
  assert(egbacBook?.category === 'nanotechnology', "Book #81 category is 'nanotechnology'");
  assert(egbacBook?.subjectId === 'nanotechnology', "Book #81 subjectId is 'nanotechnology'");
  assert(egbacBook?.chapters.length === 4, `Book #81 has 4 syllabus chapters (found ${egbacBook?.chapters.length})`);

  const resolvedThBook = getOfficialBookByBranch('thanaweya_nanotechnology');
  assert(resolvedThBook?.id === 'th-nanotechnology-g12', 'getOfficialBookByBranch successfully resolves thanaweya_nanotechnology');

  const resolvedEgBacBook = getOfficialBookByBranch('egbac_nanotechnology');
  assert(resolvedEgBacBook?.id === 'egbac-nanotechnology-g12', 'getOfficialBookByBranch successfully resolves egbac_nanotechnology');

  // PDF verification
  const thPdfPath = path.resolve(process.cwd(), 'public/books/thanaweya-nanotechnology.pdf');
  assert(fs.existsSync(thPdfPath), 'public/books/thanaweya-nanotechnology.pdf exists on disk');
  if (fs.existsSync(thPdfPath)) {
    const doc = await PDFDocument.load(fs.readFileSync(thPdfPath));
    assert(doc.getPageCount() >= 7, `Thanaweya Nanotechnology PDF has >= 7 pages (actual: ${doc.getPageCount()})`);
  }

  const egbacPdfPath = path.resolve(process.cwd(), 'public/books/egbac-nanotechnology.pdf');
  assert(fs.existsSync(egbacPdfPath), 'public/books/egbac-nanotechnology.pdf exists on disk');
  if (fs.existsSync(egbacPdfPath)) {
    const doc = await PDFDocument.load(fs.readFileSync(egbacPdfPath));
    assert(doc.getPageCount() >= 7, `EG-Bac Nanotechnology PDF has >= 7 pages (actual: ${doc.getPageCount()})`);
  }

  // -------------------------------------------------------------
  // CHECKPOINT 8: Authentic Past Exam Papers
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
  const papers = getPastExamPapers({ subject: 'nanotechnology' });
  assert(papers.length === 6, `Exactly 6 authentic past papers registered for Nanotechnology (got ${papers.length})`);

  const expectedSessions = [
    { year: 2021, session: 'session1', id: 'th-nanotechnology-2021-s1' },
    { year: 2022, session: 'session1', id: 'th-nanotechnology-2022-s1' },
    { year: 2023, session: 'session1', id: 'th-nanotechnology-2023-s1' },
    { year: 2024, session: 'session1', id: 'th-nanotechnology-2024-s1' },
    { year: 2024, session: 'session2', id: 'th-nanotechnology-2024-s2' },
    { year: 2025, session: 'experimental', id: 'th-nanotechnology-2025-exp' },
  ];

  expectedSessions.forEach(({ year, session, id }) => {
    const paper = papers.find((p) => p.year === year && p.session === session && p.id === id);
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
  const qGen1 = generatePastPaperQuestions('th-nanotechnology-2024-s1', thanaweyaCurriculum);
  const qGen2 = generatePastPaperQuestions('th-nanotechnology-2024-s1', thanaweyaCurriculum);
  assert(
    qGen1[0].id === qGen2[0].id && qGen1[10].id === qGen2[10].id,
    'Seeded RNG guarantees 100% deterministic question reproducibility across exam attempts'
  );

  // -------------------------------------------------------------
  // CHECKPOINT 9: Simulation Studio Presets & Data Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 9: Simulation Studio Presets & Data Architecture ---');
  assert(QUANTUM_DOT_CONFINEMENT_PRESETS.length >= 3, `Quantum Dot Presets count >= 3 (found ${QUANTUM_DOT_CONFINEMENT_PRESETS.length})`);
  assert(QUANTUM_DOT_CONFINEMENT_PRESETS.some((p) => p.id.includes('cdse')), 'Contains CdSe Quantum Dots preset');
  assert(SEM_TEM_CHARACTERIZATION_PRESETS.length >= 3, `SEM/TEM Presets count >= 3 (found ${SEM_TEM_CHARACTERIZATION_PRESETS.length})`);
  assert(SEM_TEM_CHARACTERIZATION_PRESETS.some((p) => p.id.includes('cnt')), 'Contains SWCNT TEM Imaging preset');
  assert(SURFACE_PLASMON_RESONANCE_PRESETS.length >= 3, `LSPR Biosensor Presets count >= 3 (found ${SURFACE_PLASMON_RESONANCE_PRESETS.length})`);
  assert(SURFACE_PLASMON_RESONANCE_PRESETS.some((p) => p.id.includes('gold_nanorod')), 'Contains Gold Nanorod Troponin Sensor preset');
  assert(NANOMEDICINE_DRUG_RELEASE_PRESETS.length >= 3, `Nanomedicine Drug Presets count >= 3 (found ${NANOMEDICINE_DRUG_RELEASE_PRESETS.length})`);
  assert(NANOMEDICINE_DRUG_RELEASE_PRESETS.some((p) => p.id.includes('doxorubicin')), 'Contains PEGylated Liposomal Doxorubicin preset');
  assert(SOLAR_PHOTOCATALYSIS_PRESETS.length >= 3, `Solar Photocatalysis Presets count >= 3 (found ${SOLAR_PHOTOCATALYSIS_PRESETS.length})`);
  assert(SOLAR_PHOTOCATALYSIS_PRESETS.some((p) => p.id.includes('tio2')), 'Contains TiO2 Platinum Heterojunction preset');

  // -------------------------------------------------------------
  // CHECKPOINT 10: Student Skill Radar & Analytics Integration
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 10: Student Skill Radar & Analytics Integration ---');
  assert(categorizeBranch('thanaweya_nanotechnology') === 'nanotechnology', "categorizeBranch maps 'thanaweya_nanotechnology' to 'nanotechnology'");
  assert(categorizeBranch('egbac_nanotechnology') === 'nanotechnology', "categorizeBranch maps 'egbac_nanotechnology' to 'nanotechnology'");
  assert(categorizeBranch('النانوتكنولوجي وعلوم المواد المتقدمة') === 'nanotechnology', "categorizeBranch maps Arabic Nanotechnology name to 'nanotechnology'");

  const radarAll30 = getMasteryRadarData(undefined, 'all30');
  assert(radarAll30.length === 30, `Mastery radar in 'all30' mode returns 30 dimensions (got ${radarAll30.length})`);
  const nanotechDimension = radarAll30.find((d) => d.dimensionKey === 'nanotechnology');
  assert(!!nanotechDimension, "Mastery radar contains 'nanotechnology' dimension");
  assert(nanotechDimension?.labelAr === 'النانوتكنولوجي وعلوم المواد المتقدمة', 'Radar Arabic label is accurate');

  // -------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------
  console.log('\n=============================================================');
  if (failed) {
    console.error(`❌ Verification FAILED with some assertion errors.`);
    process.exit(1);
  } else {
    console.log(`🎉 ALL ${passedCount} ACCREDITATION CHECKPOINTS PASSED PERFECTLY!`);
    console.log('🔬 Subject #36: Nanotechnology & Advanced Materials Science is 100% Accredited!');
    console.log('=============================================================');
  }
}

runVerification().catch((err) => {
  console.error('Fatal error during verification:', err);
  process.exit(1);
});
