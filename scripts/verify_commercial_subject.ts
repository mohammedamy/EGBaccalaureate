import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING COMMERCIAL SCIENCES, FINANCIAL ACCOUNTING & BANKING (28TH ACCREDITED CORE SUBJECT) ---');

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
const commSubject = SUBJECTS.find((s) => s.id === 'commercial');
assert(!!commSubject, 'Subject definition for "commercial" found in SUBJECTS');
if (commSubject) {
  assert(commSubject.titleEn === 'Commercial Sciences, Financial Accounting & Banking', `Bilingual titleEn matches: ${commSubject.titleEn}`);
  assert(commSubject.titleAr === 'العلوم التجارية والمحاسبة والمالية والمصرفية', `Bilingual titleAr matches: ${commSubject.titleAr}`);
  assert(commSubject.emoji === '🏛️', `Emoji matches bank/landmark (found: ${commSubject.emoji})`);
  assert(commSubject.iconName === 'Landmark', `IconName is Landmark (found: ${commSubject.iconName})`);
  assert(commSubject.badgeColor === 'teal', `Badge color is teal (found: ${commSubject.badgeColor})`);
  assert(commSubject.branchIds.thanaweya.includes('thanaweya_commercial'), 'thanaweya_commercial registered in branchIds.thanaweya');
  assert(commSubject.branchIds.egbac.includes('egbac_commercial'), 'egbac_commercial registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Commercial Branch Verification ---');
const thComm = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_commercial');
assert(!!thComm, 'thanaweya_commercial branch present in thanaweyaCurriculum');
if (thComm) {
  assert(thComm.chapters.length === 4, `Thanaweya Commercial has exactly 4 chapters (found: ${thComm.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thComm.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_comm_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
console.log('\n--- 3. EG-Bac Commercial Branch Verification ---');
const egComm = egBacCurriculum.branches.find((b) => b.id === 'egbac_commercial');
assert(!!egComm, 'egbac_commercial branch present in egBacCurriculum');
if (egComm) {
  assert(egComm.chapters.length === 4, `EG-Bac Commercial has exactly 4 chapters (found: ${egComm.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egComm.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_comm_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
[thComm, egComm].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Verified 1,400 Commercial Sciences MCQs with 100% data integrity`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks in officialBooksData ---');
const thCommBook = getOfficialBookById('th-comm-g12');
assert(!!thCommBook, 'th-comm-g12 textbook found in officialBooksList');
if (thCommBook) {
  assert(thCommBook.category === 'commercial_sciences', `th-comm-g12 category is commercial_sciences`);
  assert(thCommBook.subjectId === 'commercial', `th-comm-g12 subjectId is commercial`);
  assert(thCommBook.chapters.length === 4, `th-comm-g12 has 4 chapter mappings`);
  assert(thCommBook.filename === 'thanaweya-commercial-accounting.pdf', `th-comm-g12 filename matches`);
}

const egBacCommBook = getOfficialBookById('egbac-comm-g12');
assert(!!egBacCommBook, 'egbac-comm-g12 textbook found in officialBooksList');
if (egBacCommBook) {
  assert(egBacCommBook.category === 'commercial_sciences', `egbac-comm-g12 category is commercial_sciences`);
  assert(egBacCommBook.subjectId === 'commercial', `egbac-comm-g12 subjectId is commercial`);
  assert(egBacCommBook.chapters.length === 4, `egbac-comm-g12 has 4 module mappings`);
  assert(egBacCommBook.filename === 'egbac-corporate-finance-banking.pdf', `egbac-comm-g12 filename matches`);
}

const branchBook1 = getOfficialBookByBranch('thanaweya_commercial');
assert(branchBook1?.id === 'th-comm-g12', 'getOfficialBookByBranch("thanaweya_commercial") resolves th-comm-g12');

const branchBook2 = getOfficialBookByBranch('egbac_commercial');
assert(branchBook2?.id === 'egbac-comm-g12', 'getOfficialBookByBranch("egbac_commercial") resolves egbac-comm-g12');

const subjectBooks = getOfficialBooksBySubject('commercial');
assert(subjectBooks.length === 2, `getOfficialBooksBySubject("commercial") returns 2 books (found: ${subjectBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
const commPapers = getPastExamPapers({ subject: 'commercial' });
assert(commPapers.length === 6, `Found exactly 6 past exam papers for commercial (found: ${commPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1' },
  { year: 2022, session: 'session1' },
  { year: 2023, session: 'session1' },
  { year: 2024, session: 'session1' },
  { year: 2024, session: 'session2' },
  { year: 2025, session: 'experimental' },
];

expectedSessions.forEach((item) => {
  const paper = commPapers.find((p) => p.year === item.year && p.session === item.session);
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
const mockBlueprint = getOfficialMockConfig('thanaweya_commercial', 'thanaweya');
assert(mockBlueprint.subjectId === 'commercial', `Mock blueprint subjectId is commercial (found: ${mockBlueprint.subjectId})`);
assert(mockBlueprint.totalQuestions === 40, `Mock blueprint has 40 questions (found: ${mockBlueprint.totalQuestions})`);
assert(mockBlueprint.totalMarks === 50, `Mock blueprint has 50 marks (found: ${mockBlueprint.totalMarks})`);
assert(mockBlueprint.durationMinutes === 180, `Mock blueprint has 180 minutes duration`);
assert(mockBlueprint.section1Count === 30, `Mock blueprint has 30 1-mark questions`);
assert(mockBlueprint.section2Count === 10, `Mock blueprint has 10 2-mark questions`);

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
const cat1 = categorizeBranch('thanaweya_commercial', 'العلوم التجارية والمحاسبة والمالية والمصرفية');
assert(cat1 === 'commercial_sciences', `categorizeBranch returned "commercial_sciences" for thanaweya_commercial (found: ${cat1})`);
const cat2 = categorizeBranch('egbac_commercial', 'Advanced Corporate Finance & FinTech Banking');
assert(cat2 === 'commercial_sciences', `categorizeBranch returned "commercial_sciences" for egbac_commercial (found: ${cat2})`);

// 9. Interactive Studio & Component Integrity
console.log('\n--- 9. Interactive Studio & Component Integrity ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/commercialLab/commercialLabData.ts');
assert(fs.existsSync(labDataPath), `commercialLabData.ts file exists on disk`);

const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/CommercialFinanceStudio.tsx');
assert(fs.existsSync(studioComponentPath), `CommercialFinanceStudio.tsx component exists on disk`);

// 10. Platform Global Totals
console.log('\n--- 10. Platform Global Integrity & Accreditation Metrics ---');
assert(SUBJECTS.length >= 28, `Total platform subjects is at least 28 (found: ${SUBJECTS.length})`);
assert(thanaweyaCurriculum.branches.length >= 31, `Thanaweya branches total is at least 31 (found: ${thanaweyaCurriculum.branches.length})`);
assert(egBacCurriculum.branches.length >= 31, `EG-Bac branches total is at least 31 (found: ${egBacCurriculum.branches.length})`);

const totalChapters = thanaweyaCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0) +
  egBacCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0);
assert(totalChapters >= 321, `Total curriculum chapters across all subjects is at least 321 (found: ${totalChapters})`);

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
assert(totalMCQs >= 56175, `Total databank MCQs is at least 56,175 (found: ${totalMCQs})`);

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
assert(totalProblems >= 64200, `Total platform problems across all branches is at least 64,200 (found: ${totalProblems})`);

assert(officialBooksList.length >= 65, `Total official books is at least 65 (found: ${officialBooksList.length})`);
assert(PAST_EXAM_PAPERS.length >= 186, `Total past exam papers is at least 186 (found: ${PAST_EXAM_PAPERS.length})`);

// Final Output
console.log('\n======================================================');
if (errors === 0) {
  console.log('🎉 ALL COMMERCIAL SCIENCES, FINANCIAL ACCOUNTING & BANKING VERIFICATIONS PASSED (0 ERRORS)!');
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
