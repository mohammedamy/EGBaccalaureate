import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING INDUSTRIAL TECHNOLOGY & APPLIED ENGINEERING (27TH ACCREDITED CORE SUBJECT) ---');

let errors = 0;
function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

// 1. Subject Definition Verification
console.log('\n--- 1. Subject Definition in SUBJECTS ---');
const indSubject = SUBJECTS.find((s) => s.id === 'industrial');
assert(!!indSubject, 'Subject definition for "industrial" found in SUBJECTS');
if (indSubject) {
  assert(indSubject.titleEn === 'Industrial Technology & Applied Engineering', `Bilingual titleEn matches: ${indSubject.titleEn}`);
  assert(indSubject.titleAr === 'التربية الصناعية والتكنولوجيا التطبيقية والهندسية', `Bilingual titleAr matches: ${indSubject.titleAr}`);
  assert(indSubject.emoji === '⚙️', `Emoji matches gear (found: ${indSubject.emoji})`);
  assert(indSubject.iconName === 'Wrench', `IconName is Wrench (found: ${indSubject.iconName})`);
  assert(indSubject.badgeColor === 'amber', `Badge color is amber (found: ${indSubject.badgeColor})`);
  assert(indSubject.branchIds.thanaweya.includes('thanaweya_industrial'), 'thanaweya_industrial registered in branchIds.thanaweya');
  assert(indSubject.branchIds.egbac.includes('egbac_industrial'), 'egbac_industrial registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Industrial Branch Verification ---');
const thInd = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_industrial');
assert(!!thInd, 'thanaweya_industrial branch present in thanaweyaCurriculum');
if (thInd) {
  assert(thInd.chapters.length === 4, `Thanaweya Industrial has exactly 4 chapters (found: ${thInd.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thInd.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_ind_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length >= 1, `Chapter ${chNum} has at least 1 comprehensive lesson (found: ${ch.lessons.length})`);
    totalThLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!(l.theoryContentEn || (l as any).theoryContent), `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!(l.moeRef || (l as any).moeReference), `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch${chNum} Lesson ${lIdx + 1} has lessonPlan`);
      assert(!!l.worksheet, `Ch${chNum} Lesson ${lIdx + 1} has worksheet`);
      assert(!!l.interactiveWidget, `Ch${chNum} Lesson ${lIdx + 1} has interactiveWidget`);
    });

    const solvedCount = ch.solvedExamples?.length || 0;
    const exCount = ch.exerciseProblems?.length || 0;
    assert(solvedCount === 10, `Chapter ${chNum} has 10 Solved Examples (found: ${solvedCount})`);
    assert(exCount === 15, `Chapter ${chNum} has 15 Exercises (found: ${exCount})`);
    totalThSolved += solvedCount;
    totalThExercises += exCount;

    assert(!!ch.databank, `Chapter ${chNum} has databank`);
    if (ch.databank) {
      const easyCount = ch.databank.easy?.length || 0;
      const medCount = ch.databank.medium?.length || 0;
      const hotsCount = ch.databank.hots?.length || 0;
      const mcqCount = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter ${chNum} has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter ${chNum} has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter ${chNum} has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(mcqCount === 175, `Chapter ${chNum} has 175 total Databank MCQs (found: ${mcqCount})`);
      totalThMCQ += mcqCount;
    }
  });

  assert(totalThLessons >= 4, `Thanaweya total lessons: ${totalThLessons} (expected at least 4)`);
  assert(totalThSolved === 40, `Thanaweya total solved examples: ${totalThSolved} (expected 40)`);
  assert(totalThExercises === 60, `Thanaweya total exercises: ${totalThExercises} (expected 60)`);
  assert(totalThMCQ === 700, `Thanaweya total MCQs: ${totalThMCQ} (expected 700)`);
  assert(totalThSolved + totalThExercises + totalThMCQ === 800, `Thanaweya total problems: ${totalThSolved + totalThExercises + totalThMCQ} (expected 800)`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Industrial Branch Verification ---');
const egInd = egBacCurriculum.branches.find((b) => b.id === 'egbac_industrial');
assert(!!egInd, 'egbac_industrial branch present in egBacCurriculum');
if (egInd) {
  assert(egInd.chapters.length === 4, `EG-Bac Industrial has exactly 4 chapters (found: ${egInd.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egInd.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_ind_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length >= 1, `Chapter ${chNum} has at least 1 comprehensive lesson (found: ${ch.lessons.length})`);
    totalEgLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!(l.theoryContentEn || (l as any).theoryContent), `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!(l.moeRef || (l as any).moeReference), `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch${chNum} Lesson ${lIdx + 1} has lessonPlan`);
      assert(!!l.worksheet, `Ch${chNum} Lesson ${lIdx + 1} has worksheet`);
      assert(!!l.interactiveWidget, `Ch${chNum} Lesson ${lIdx + 1} has interactiveWidget`);
    });

    const solvedCount = ch.solvedExamples?.length || 0;
    const exCount = ch.exerciseProblems?.length || 0;
    assert(solvedCount === 10, `Chapter ${chNum} has 10 Solved Examples (found: ${solvedCount})`);
    assert(exCount === 15, `Chapter ${chNum} has 15 Exercises (found: ${exCount})`);
    totalEgSolved += solvedCount;
    totalEgExercises += exCount;

    assert(!!ch.databank, `Chapter ${chNum} has databank`);
    if (ch.databank) {
      const easyCount = ch.databank.easy?.length || 0;
      const medCount = ch.databank.medium?.length || 0;
      const hotsCount = ch.databank.hots?.length || 0;
      const mcqCount = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter ${chNum} has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter ${chNum} has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter ${chNum} has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(mcqCount === 175, `Chapter ${chNum} has 175 total Databank MCQs (found: ${mcqCount})`);
      totalEgMCQ += mcqCount;
    }
  });

  assert(totalEgLessons >= 4, `EG-Bac total lessons: ${totalEgLessons} (expected at least 4)`);
  assert(totalEgSolved === 40, `EG-Bac total solved examples: ${totalEgSolved} (expected 40)`);
  assert(totalEgExercises === 60, `EG-Bac total exercises: ${totalEgExercises} (expected 60)`);
  assert(totalEgMCQ === 700, `EG-Bac total MCQs: ${totalEgMCQ} (expected 700)`);
  assert(totalEgSolved + totalEgExercises + totalEgMCQ === 800, `EG-Bac total problems: ${totalEgSolved + totalEgExercises + totalEgMCQ} (expected 800)`);
}

// 4. MCQ Integrity & Answer Matching (All 1,400 MCQs)
console.log('\n--- 4. MCQ Integrity & Answer Matching Verification ---');
let totalCheckedMCQs = 0;
[thInd, egInd].forEach((branch) => {
  if (!branch) return;
  branch.chapters.forEach((ch) => {
    if (!ch.databank) return;
    const tiers = ['easy', 'medium', 'hots'] as const;
    tiers.forEach((t) => {
      const questions = ch.databank![t];
      questions.forEach((q) => {
        totalCheckedMCQs++;
        assert(!!q.id, `Question has ID`);
        assert(!!q.questionAr && !!q.questionEn, `Question ${q.id} has bilingual question text`);
        assert(Array.isArray(q.optionsAr) && q.optionsAr.length === 4, `Question ${q.id} has 4 Arabic options`);
        assert(Array.isArray(q.optionsEn) && q.optionsEn.length === 4, `Question ${q.id} has 4 English options`);
        assert(new Set(q.optionsAr).size === 4, `Question ${q.id} has 4 distinct Arabic options`);
        assert(new Set(q.optionsEn).size === 4, `Question ${q.id} has 4 distinct English options`);
        assert(typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3, `Question ${q.id} correctIndex in [0, 3]`);
        assert(q.optionsEn[q.correctIndex] === q.correctAnswer, `Question ${q.id} correctAnswer matches optionsEn[correctIndex]`);
        assert(!!q.explanationAr && !!q.explanationEn, `Question ${q.id} has bilingual explanations`);
        assert(
          (q.stepByStepSolutionEn && q.stepByStepSolutionEn.length > 0 && q.stepByStepSolutionAr && q.stepByStepSolutionAr.length > 0) ||
          (!!q.explanationAr && !!q.explanationEn),
          `Question ${q.id} has stepByStepSolution or detailed explanations`
        );
      });
    });
  });
});
assert(totalCheckedMCQs === 1400, `Verified 1,400 Industrial Technology MCQs with 100% data integrity`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks in officialBooksData ---');
const thIndBook = getOfficialBookById('th-ind-g12');
assert(!!thIndBook, 'th-ind-g12 textbook found in officialBooksList');
if (thIndBook) {
  assert(thIndBook.category === 'industrial_engineering', `th-ind-g12 category is industrial_engineering`);
  assert(thIndBook.subjectId === 'industrial', `th-ind-g12 subjectId is industrial`);
  assert(thIndBook.chapters.length === 4, `th-ind-g12 has 4 chapter mappings`);
  assert(thIndBook.filename === 'thanaweya-industrial-engineering.pdf', `th-ind-g12 filename matches`);
}

const egBacIndBook = getOfficialBookById('egbac-ind-g12');
assert(!!egBacIndBook, 'egbac-ind-g12 textbook found in officialBooksList');
if (egBacIndBook) {
  assert(egBacIndBook.category === 'industrial_engineering', `egbac-ind-g12 category is industrial_engineering`);
  assert(egBacIndBook.subjectId === 'industrial', `egbac-ind-g12 subjectId is industrial`);
  assert(egBacIndBook.chapters.length === 4, `egbac-ind-g12 has 4 module mappings`);
  assert(egBacIndBook.filename === 'egbac-applied-engineering-systems.pdf', `egbac-ind-g12 filename matches`);
}

const branchBook1 = getOfficialBookByBranch('thanaweya_industrial');
assert(branchBook1?.id === 'th-ind-g12', 'getOfficialBookByBranch("thanaweya_industrial") resolves th-ind-g12');

const branchBook2 = getOfficialBookByBranch('egbac_industrial');
assert(branchBook2?.id === 'egbac-ind-g12', 'getOfficialBookByBranch("egbac_industrial") resolves egbac-ind-g12');

const subjectBooks = getOfficialBooksBySubject('industrial');
assert(subjectBooks.length === 2, `getOfficialBooksBySubject("industrial") returns 2 books (found: ${subjectBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
const indPapers = getPastExamPapers({ subject: 'industrial' });
assert(indPapers.length === 6, `Found exactly 6 past exam papers for industrial (found: ${indPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1' },
  { year: 2022, session: 'session1' },
  { year: 2023, session: 'session1' },
  { year: 2024, session: 'session1' },
  { year: 2024, session: 'session2' },
  { year: 2025, session: 'experimental' },
];

expectedSessions.forEach((item) => {
  const paper = indPapers.find((p) => p.year === item.year && p.session === item.session);
  assert(!!paper, `Paper exists for ${item.year} ${item.session}`);
  if (paper) {
    assert(paper.durationMinutes === 180, `${paper.id} duration is 180 min`);
    assert(paper.totalQuestions === 40, `${paper.id} has 40 questions`);
    assert(paper.totalMarks === 50, `${paper.id} total marks is 50`);
    assert(paper.section1Count === 30, `${paper.id} Section 1 has 30 items`);
    assert(paper.section2Count === 10, `${paper.id} Section 2 has 10 items`);

    const generated = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
    assert(generated.length === 40, `${paper.id} successfully generated 40 authentic questions (found: ${generated.length})`);
  }
});

// 7. Official Mock Exam Blueprint Verification
console.log('\n--- 7. Official Mock Exam Blueprint Verification ---');
const mockBlueprint = getOfficialMockConfig('thanaweya_industrial', 'thanaweya');
assert(mockBlueprint.subjectId === 'industrial', `Mock blueprint subjectId is industrial (found: ${mockBlueprint.subjectId})`);
assert(mockBlueprint.totalQuestions === 40, `Mock blueprint has 40 questions (found: ${mockBlueprint.totalQuestions})`);
assert(mockBlueprint.totalMarks === 50, `Mock blueprint has 50 marks (found: ${mockBlueprint.totalMarks})`);
assert(mockBlueprint.durationMinutes === 180, `Mock blueprint has 180 minutes duration`);
assert(mockBlueprint.section1Count === 30, `Mock blueprint has 30 1-mark questions`);
assert(mockBlueprint.section2Count === 10, `Mock blueprint has 10 2-mark questions`);

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
const cat1 = categorizeBranch('thanaweya_industrial', 'التربية الصناعية والتكنولوجيا الهندسية');
assert(cat1 === 'industrial_engineering', `categorizeBranch returned "industrial_engineering" for thanaweya_industrial (found: ${cat1})`);
const cat2 = categorizeBranch('egbac_industrial', 'Mechatronics, Smart Manufacturing & Industrial Robotics');
assert(cat2 === 'industrial_engineering', `categorizeBranch returned "industrial_engineering" for egbac_industrial (found: ${cat2})`);

// 9. Interactive Studio & Component Integrity
console.log('\n--- 9. Interactive Studio & Component Integrity ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/industrialLab/industrialLabData.ts');
assert(fs.existsSync(labDataPath), `industrialLabData.ts file exists on disk`);

const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/IndustrialEngineeringStudio.tsx');
assert(fs.existsSync(studioComponentPath), `IndustrialEngineeringStudio.tsx component exists on disk`);

// 10. Platform Global Totals
console.log('\n--- 10. Platform Global Integrity & Accreditation Metrics ---');
assert(SUBJECTS.length === 27, `Total platform subjects is 27 (found: ${SUBJECTS.length})`);
assert(thanaweyaCurriculum.branches.length === 30, `Thanaweya branches total is 30 (found: ${thanaweyaCurriculum.branches.length})`);
assert(egBacCurriculum.branches.length === 30, `EG-Bac branches total is 30 (found: ${egBacCurriculum.branches.length})`);

const totalChapters = thanaweyaCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0) +
  egBacCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0);
assert(totalChapters === 313, `Total curriculum chapters across all subjects is 313 (found: ${totalChapters})`);

const totalMCQs = thanaweyaCurriculum.branches.reduce((acc, b) => {
  return acc + b.chapters.reduce((chAcc, ch) => {
    if (!ch.databank) return chAcc;
    return chAcc + ch.databank.easy.length + ch.databank.medium.length + ch.databank.hots.length;
  }, 0);
}, 0) + egBacCurriculum.branches.reduce((acc, b) => {
  return acc + b.chapters.reduce((chAcc, ch) => {
    if (!ch.databank) return chAcc;
    return chAcc + ch.databank.easy.length + ch.databank.medium.length + ch.databank.hots.length;
  }, 0);
}, 0);
assert(totalMCQs === 54775, `Total databank MCQs is 54,775 (found: ${totalMCQs})`);

const totalProblems = thanaweyaCurriculum.branches.reduce((acc, b) => {
  return acc + b.chapters.reduce((chAcc, ch) => {
    const solved = ch.solvedExamples?.length || 0;
    const ex = ch.exerciseProblems?.length || 0;
    const mcqs = ch.databank ? (ch.databank.easy.length + ch.databank.medium.length + ch.databank.hots.length) : 0;
    return chAcc + solved + ex + mcqs;
  }, 0);
}, 0) + egBacCurriculum.branches.reduce((acc, b) => {
  return acc + b.chapters.reduce((chAcc, ch) => {
    const solved = ch.solvedExamples?.length || 0;
    const ex = ch.exerciseProblems?.length || 0;
    const mcqs = ch.databank ? (ch.databank.easy.length + ch.databank.medium.length + ch.databank.hots.length) : 0;
    return chAcc + solved + ex + mcqs;
  }, 0);
}, 0);
assert(totalProblems === 62600, `Total platform problems across all branches is 62,600 (found: ${totalProblems})`);

assert(officialBooksList.length === 63, `Total official books is 63 (found: ${officialBooksList.length})`);
assert(PAST_EXAM_PAPERS.length === 180, `Total past exam papers is 180 (found: ${PAST_EXAM_PAPERS.length})`);

// Final Output
console.log('\n======================================================');
if (errors === 0) {
  console.log('🎉 ALL INDUSTRIAL TECHNOLOGY & APPLIED ENGINEERING VERIFICATIONS PASSED (0 ERRORS)!');
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
