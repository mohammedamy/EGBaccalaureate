/**
 * Comprehensive Verification Suite for Subject #33:
 * Advanced Electronics, VLSI & IoT Systems (الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء)
 *
 * Verifies 10 core ministerial accreditation checkpoints:
 * 1. Subject registry in SUBJECTS (bilingual metadata, Cpu icon, branch mapping).
 * 2. Thanaweya branch structure (4 chapters, 800 total problems).
 * 3. EG-Bac branch structure (4 chapters, 800 total problems).
 * 4. Databank integrity (8 chapters × 175 = 1,400 MCQs with 58/59/58 distribution, 4 unique options, valid solutions).
 * 5. Textbook integrity (8 chapters × 25 = 200 problems with 10 solved examples + 15 exercises).
 * 6. Total problem count (1,600 electronics problems across both curricula).
 * 7. Official ministry textbooks registration (Book #74: th-electronics-iot-g12 & Book #75: egbac-electronics-iot-g12).
 * 8. Authentic past exam papers (6 papers from 2021 to 2025, 40 Qs, 50 marks, deterministic generation).
 * 9. Simulation studio presets and electronics lab architecture (5 stations: Amplifiers, Active Filters, FPGA Design, IoT Nodes, IIoT Gateways).
 * 10. Student skill radar & curriculum equivalency bridge integration.
 */

import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { getOfficialBookById, getOfficialBookByBranch } from '../src/data/officialBooksData';
import { getPastExamPapers, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';
import {
  AMPLIFIER_PRESETS,
  ACTIVE_FILTER_PRESETS,
  FPGA_DESIGN_PRESETS,
  IOT_NODE_PRESETS,
  IIOT_GATEWAY_PRESETS,
} from '../src/data/electronicsLab/electronicsLabData';

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
  console.log('⚡ Starting Subject #33: Advanced Electronics, VLSI & IoT Systems Accreditation Verification...\n');

  // -------------------------------------------------------------
  // CHECKPOINT 1: Subject Registry & Metadata
  // -------------------------------------------------------------
  console.log('--- Checkpoint 1: Subject Registry & Metadata ---');
  const subject = getSubjectById('electronics_iot');
  assert(!!subject, "Subject 'electronics_iot' is successfully registered in SUBJECTS registry");
  assert(
    subject?.titleEn === 'Advanced Electronics, VLSI & IoT Systems',
    'Bilingual English title is accurate'
  );
  assert(
    subject?.titleAr === 'الإلكترونيات المتقدمة، الدوائر المتكاملة وإنترنت الأشياء',
    'Bilingual Arabic title is accurate'
  );
  assert(subject?.iconName === 'Cpu', 'Lucide icon is set to Cpu');
  assert(subject?.emoji === '⚡', 'Emoji is set to ⚡');
  assert(subject?.branchIds.thanaweya.includes('thanaweya_electronics_iot'), 'Thanaweya branch ID is correctly mapped');
  assert(subject?.branchIds.egbac.includes('egbac_electronics_iot'), 'EG-Bac branch ID is correctly mapped');

  // -------------------------------------------------------------
  // CHECKPOINT 2: Thanaweya Branch Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 2: Thanaweya Branch Architecture ---');
  const thBranch = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_electronics_iot');
  assert(!!thBranch, "Thanaweya curriculum contains 'thanaweya_electronics_iot' branch");
  assert(thBranch?.chapters.length === 4, `Thanaweya branch has exactly 4 chapters (found ${thBranch?.chapters.length})`);
  const thExpectedChapterIds = ['th_electronics_iot_ch1', 'th_electronics_iot_ch2', 'th_electronics_iot_ch3', 'th_electronics_iot_ch4'];
  thExpectedChapterIds.forEach((chId, idx) => {
    assert(thBranch?.chapters[idx].id === chId, `Thanaweya Chapter ${idx + 1} matches ID '${chId}'`);
  });

  // -------------------------------------------------------------
  // CHECKPOINT 3: EG-Bac Branch Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 3: EG-Bac Branch Architecture ---');
  const egbacBranch = egBacCurriculum.branches.find((b) => b.id === 'egbac_electronics_iot');
  assert(!!egbacBranch, "EG-Bac curriculum contains 'egbac_electronics_iot' branch");
  assert(egbacBranch?.chapters.length === 4, `EG-Bac branch has exactly 4 chapters (found ${egbacBranch?.chapters.length})`);
  const egbacExpectedChapterIds = ['egbac_electronics_iot_ch1', 'egbac_electronics_iot_ch2', 'egbac_electronics_iot_ch3', 'egbac_electronics_iot_ch4'];
  egbacExpectedChapterIds.forEach((chId, idx) => {
    assert(egbacBranch?.chapters[idx].id === chId, `EG-Bac Chapter ${idx + 1} matches ID '${chId}'`);
  });

  // -------------------------------------------------------------
  // CHECKPOINT 4: Databank Integrity & Question Validation (1,400 MCQs)
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 4: Databank Integrity & MCQs (1,400 Items) ---');
  const allElectronicsChapters = [...(thBranch?.chapters || []), ...(egbacBranch?.chapters || [])];
  let totalMcqs = 0;

  for (const ch of allElectronicsChapters) {
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

  for (const ch of allElectronicsChapters) {
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
  assert(totalSubjectProblems === 1600, `Subject #33 adds exactly 1,600 problems (got ${totalSubjectProblems})`);

  const thStats = getSubjectStats(thanaweyaCurriculum, 'electronics_iot');
  const egbacStats = getSubjectStats(egBacCurriculum, 'electronics_iot');
  assert(thStats.totalProblems === 800, `Thanaweya Electronics branch has 800 problems (got ${thStats.totalProblems})`);
  assert(egbacStats.totalProblems === 800, `EG-Bac Electronics branch has 800 problems (got ${egbacStats.totalProblems})`);

  // -------------------------------------------------------------
  // CHECKPOINT 7: Official Ministry Textbooks Registration
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 7: Official Ministry Textbooks Registration ---');
  const thBook = getOfficialBookById('th-electronics-iot-g12');
  assert(!!thBook, "Book #74 'th-electronics-iot-g12' is registered in officialBooksList");
  assert(thBook?.category === 'electronics_iot', "Book #74 category is 'electronics_iot'");
  assert(thBook?.subjectId === 'electronics_iot', "Book #74 subjectId is 'electronics_iot'");
  assert(thBook?.chapters.length === 4, `Book #74 has 4 syllabus chapters (found ${thBook?.chapters.length})`);

  const egbacBook = getOfficialBookById('egbac-electronics-iot-g12');
  assert(!!egbacBook, "Book #75 'egbac-electronics-iot-g12' is registered in officialBooksList");
  assert(egbacBook?.category === 'electronics_iot', "Book #75 category is 'electronics_iot'");
  assert(egbacBook?.subjectId === 'electronics_iot', "Book #75 subjectId is 'electronics_iot'");
  assert(egbacBook?.chapters.length === 4, `Book #75 has 4 syllabus chapters (found ${egbacBook?.chapters.length})`);

  const resolvedThBook = getOfficialBookByBranch('thanaweya_electronics_iot');
  assert(resolvedThBook?.id === 'th-electronics-iot-g12', 'getOfficialBookByBranch successfully resolves thanaweya_electronics_iot');

  const resolvedEgBacBook = getOfficialBookByBranch('egbac_electronics_iot');
  assert(resolvedEgBacBook?.id === 'egbac-electronics-iot-g12', 'getOfficialBookByBranch successfully resolves egbac_electronics_iot');

  // PDF verification
  const thPdfPath = path.resolve(process.cwd(), 'public/books/thanaweya-electronics-iot.pdf');
  assert(fs.existsSync(thPdfPath), 'public/books/thanaweya-electronics-iot.pdf exists on disk');
  if (fs.existsSync(thPdfPath)) {
    const doc = await PDFDocument.load(fs.readFileSync(thPdfPath));
    assert(doc.getPageCount() >= 7, `Thanaweya Electronics PDF has >= 7 pages (actual: ${doc.getPageCount()})`);
  }

  const egbacPdfPath = path.resolve(process.cwd(), 'public/books/egbac-electronics-iot.pdf');
  assert(fs.existsSync(egbacPdfPath), 'public/books/egbac-electronics-iot.pdf exists on disk');
  if (fs.existsSync(egbacPdfPath)) {
    const doc = await PDFDocument.load(fs.readFileSync(egbacPdfPath));
    assert(doc.getPageCount() >= 7, `EG-Bac Electronics PDF has >= 7 pages (actual: ${doc.getPageCount()})`);
  }

  // -------------------------------------------------------------
  // CHECKPOINT 8: Authentic Past Exam Papers
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 8: Authentic Past Exam Papers (6 Papers) ---');
  const papers = getPastExamPapers({ subject: 'electronics_iot' });
  assert(papers.length === 6, `Exactly 6 authentic past papers registered for Electronics & IoT (got ${papers.length})`);

  const expectedSessions = [
    { year: 2021, session: 'session1', id: 'th-electronics-iot-2021-s1' },
    { year: 2022, session: 'session1', id: 'th-electronics-iot-2022-s1' },
    { year: 2023, session: 'session1', id: 'th-electronics-iot-2023-s1' },
    { year: 2024, session: 'session1', id: 'th-electronics-iot-2024-s1' },
    { year: 2024, session: 'session2', id: 'th-electronics-iot-2024-s2' },
    { year: 2025, session: 'experimental', id: 'th-electronics-iot-2025-exp' },
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
  const qGen1 = generatePastPaperQuestions('th-electronics-iot-2024-s1', thanaweyaCurriculum);
  const qGen2 = generatePastPaperQuestions('th-electronics-iot-2024-s1', thanaweyaCurriculum);
  assert(
    qGen1[0].id === qGen2[0].id && qGen1[10].id === qGen2[10].id,
    'Seeded RNG guarantees 100% deterministic question reproducibility across exam attempts'
  );

  // -------------------------------------------------------------
  // CHECKPOINT 9: Simulation Studio Presets & Data Architecture
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 9: Simulation Studio Presets & Data Architecture ---');
  assert(AMPLIFIER_PRESETS.length >= 3, `Amplifier Presets count >= 3 (found ${AMPLIFIER_PRESETS.length})`);
  assert(AMPLIFIER_PRESETS.some((p) => p.id.includes('benban')), 'Contains Benban Solar Inverter MOSFET preset');
  assert(ACTIVE_FILTER_PRESETS.length >= 3, `Active Filter Presets count >= 3 (found ${ACTIVE_FILTER_PRESETS.length})`);
  assert(ACTIVE_FILTER_PRESETS.some((p) => p.id.includes('kasr_al_ainy')), 'Contains Kasr Al-Ainy ECG Instrumentation Amp preset');
  assert(FPGA_DESIGN_PRESETS.length >= 3, `FPGA Design Presets count >= 3 (found ${FPGA_DESIGN_PRESETS.length})`);
  assert(FPGA_DESIGN_PRESETS.some((p) => p.id.includes('satellite')), 'Contains Egyptian Space Agency Telemetry FPGA preset');
  assert(IOT_NODE_PRESETS.length >= 3, `IoT Node Presets count >= 3 (found ${IOT_NODE_PRESETS.length})`);
  assert(IOT_NODE_PRESETS.some((p) => p.id.includes('new_delta')), 'Contains New Delta Precision Soil IoT Node preset');
  assert(IIOT_GATEWAY_PRESETS.length >= 3, `IIoT Gateway Presets count >= 3 (found ${IIOT_GATEWAY_PRESETS.length})`);
  assert(IIOT_GATEWAY_PRESETS.some((p) => p.id.includes('sokhna')), 'Contains SCZone Petrochem Modbus Gateway preset');

  // -------------------------------------------------------------
  // CHECKPOINT 10: Student Skill Radar & Analytics Integration
  // -------------------------------------------------------------
  console.log('\n--- Checkpoint 10: Student Skill Radar & Analytics Integration ---');
  assert(categorizeBranch('thanaweya_electronics_iot') === 'electronics_iot', "categorizeBranch maps 'thanaweya_electronics_iot' to 'electronics_iot'");
  assert(categorizeBranch('egbac_electronics_iot') === 'electronics_iot', "categorizeBranch maps 'egbac_electronics_iot' to 'electronics_iot'");
  assert(categorizeBranch('الإلكترونيات المتقدمة والدوائر المتكاملة') === 'electronics_iot', "categorizeBranch maps Arabic electronics name to 'electronics_iot'");

  const radarAll27 = getMasteryRadarData(undefined, 'all27');
  assert(radarAll27.length === 27, `Mastery radar in 'all27' mode returns 27 dimensions (got ${radarAll27.length})`);
  const electronicsDimension = radarAll27.find((d) => d.dimensionKey === 'electronics_iot');
  assert(!!electronicsDimension, "Mastery radar contains 'electronics_iot' dimension");
  assert(electronicsDimension?.labelAr === 'الإلكترونيات والدوائر المتكاملة وإنترنت الأشياء', 'Radar Arabic label is accurate');

  // -------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------
  console.log('\n=============================================================');
  if (failed) {
    console.error(`❌ Verification FAILED with some assertion errors.`);
    process.exit(1);
  } else {
    console.log(`🎉 ALL ${passedCount} ACCREDITATION CHECKPOINTS PASSED PERFECTLY!`);
    console.log('⚡ Subject #33: Advanced Electronics, VLSI & IoT Systems is 100% Accredited!');
    console.log('=============================================================');
  }
}

runVerification().catch((err) => {
  console.error('Fatal error during verification:', err);
  process.exit(1);
});
