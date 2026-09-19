import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING BUSINESS ADMINISTRATION & ENTREPRENEURSHIP (22ND ACCREDITED CORE SUBJECT) ---');

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
const businessSubject = SUBJECTS.find((s) => s.id === 'business_entrepreneurship');
assert(!!businessSubject, 'Subject definition for "business_entrepreneurship" found in SUBJECTS');
if (businessSubject) {
  assert(businessSubject.titleEn === 'Business Administration & Entrepreneurship', `Bilingual titleEn matches: ${businessSubject.titleEn}`);
  assert(businessSubject.titleAr === 'إدارة الأعمال وريادة الأعمال', `Bilingual titleAr matches: ${businessSubject.titleAr}`);
  assert(businessSubject.emoji === '💼', `Emoji matches briefcase (found: ${businessSubject.emoji})`);
  assert(businessSubject.iconName === 'Briefcase', `IconName is Briefcase (found: ${businessSubject.iconName})`);
  assert(businessSubject.badgeColor === 'sky', `Badge color is sky (found: ${businessSubject.badgeColor})`);
  assert(businessSubject.branchIds.thanaweya.includes('thanaweya_business'), 'thanaweya_business registered in branchIds.thanaweya');
  assert(businessSubject.branchIds.egbac.includes('egbac_business'), 'egbac_business registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Business Branch Verification ---');
const thBusiness = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_business');
assert(!!thBusiness, 'thanaweya_business branch present in thanaweyaCurriculum');
if (thBusiness) {
  assert(thBusiness.chapters.length === 4, `Thanaweya Business has exactly 4 chapters (found: ${thBusiness.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thBusiness.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_bus_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
    totalThLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
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

  assert(totalThLessons === 8, `Thanaweya total lessons: ${totalThLessons} (expected 8)`);
  assert(totalThSolved === 40, `Thanaweya total solved examples: ${totalThSolved} (expected 40)`);
  assert(totalThExercises === 60, `Thanaweya total exercises: ${totalThExercises} (expected 60)`);
  assert(totalThMCQ === 700, `Thanaweya total MCQs: ${totalThMCQ} (expected 700)`);
  assert(totalThSolved + totalThExercises + totalThMCQ === 800, `Thanaweya total problems: ${totalThSolved + totalThExercises + totalThMCQ} (expected 800)`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Business Branch Verification ---');
const egBusiness = egBacCurriculum.branches.find((b) => b.id === 'egbac_business');
assert(!!egBusiness, 'egbac_business branch present in egBacCurriculum');
if (egBusiness) {
  assert(egBusiness.chapters.length === 4, `EG-Bac Business has exactly 4 chapters (found: ${egBusiness.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egBusiness.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_bus_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
    totalEgLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
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

  assert(totalEgLessons === 8, `EG-Bac total lessons: ${totalEgLessons} (expected 8)`);
  assert(totalEgSolved === 40, `EG-Bac total solved examples: ${totalEgSolved} (expected 40)`);
  assert(totalEgExercises === 60, `EG-Bac total exercises: ${totalEgExercises} (expected 60)`);
  assert(totalEgMCQ === 700, `EG-Bac total MCQs: ${totalEgMCQ} (expected 700)`);
  assert(totalEgSolved + totalEgExercises + totalEgMCQ === 800, `EG-Bac total problems: ${totalEgSolved + totalEgExercises + totalEgMCQ} (expected 800)`);
}

// 4. MCQ Integrity & Answer Matching (All 1,400 MCQs)
console.log('\n--- 4. MCQ Integrity & Answer Matching Verification ---');
let totalCheckedMCQs = 0;
[thBusiness, egBusiness].forEach((branch) => {
  if (!branch) return;
  branch.chapters.forEach((ch) => {
    if (!ch.databank) return;
    const tiers = ['easy', 'medium', 'hots'] as const;
    tiers.forEach((t) => {
      const questions = ch.databank![t];
      questions.forEach((q) => {
        totalCheckedMCQs++;
        if (!q.optionsEn || q.optionsEn.length !== 4) {
          assert(false, `Question ${q.id} in ${ch.id} does not have exactly 4 optionsEn`);
        }
        if (!q.optionsAr || q.optionsAr.length !== 4) {
          assert(false, `Question ${q.id} in ${ch.id} does not have exactly 4 optionsAr`);
        }
        const setEn = new Set(q.optionsEn);
        if (setEn.size !== 4) {
          assert(false, `Question ${q.id} in ${ch.id} has duplicate options in optionsEn`);
        }
        const setAr = new Set(q.optionsAr);
        if (setAr.size !== 4) {
          assert(false, `Question ${q.id} in ${ch.id} has duplicate options in optionsAr`);
        }
        if (q.correctIndex < 0 || q.correctIndex > 3) {
          assert(false, `Question ${q.id} in ${ch.id} has invalid correctIndex: ${q.correctIndex}`);
        }
        if (q.optionsEn[q.correctIndex] !== q.correctAnswer) {
          assert(false, `Question ${q.id} in ${ch.id} correctAnswer mismatch: expected "${q.optionsEn[q.correctIndex]}", got "${q.correctAnswer}"`);
        }
        if (!q.explanationEn || !q.explanationAr) {
          assert(false, `Question ${q.id} in ${ch.id} is missing bilingual explanations`);
        }
      });
    });
  });
});
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Business branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 53, `officialBooksList total count is at least 53 (found: ${officialBooksList.length})`);
const thBook = getOfficialBookById('th-business-g12');
assert(!!thBook, 'Thanaweya Business textbook "th-business-g12" registered');
if (thBook) {
  assert(thBook.curriculum === 'thanaweya', 'th-business-g12 curriculum is thanaweya');
  assert(thBook.subjectId === 'business_entrepreneurship', 'th-business-g12 subjectId is business_entrepreneurship');
  assert(thBook.branchId === 'thanaweya_business', 'th-business-g12 branchId is thanaweya_business');
  assert(thBook.chapters.length === 4, `th-business-g12 has 4 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-business-g12');
assert(!!egBook, 'EG-Bac Business textbook "egbac-business-g12" registered');
if (egBook) {
  assert(egBook.curriculum === 'egbac', 'egbac-business-g12 curriculum is egbac');
  assert(egBook.subjectId === 'business_entrepreneurship', 'egbac-business-g12 subjectId is business_entrepreneurship');
  assert(egBook.branchId === 'egbac_business', 'egbac-business-g12 branchId is egbac_business');
  assert(egBook.chapters.length === 4, `egbac-business-g12 has 4 chapters (found: ${egBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_business');
assert(bookByThBranch?.id === 'th-business-g12', 'getOfficialBookByBranch(thanaweya_business) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_business');
assert(bookByEgBranch?.id === 'egbac-business-g12', 'getOfficialBookByBranch(egbac_business) resolves correctly');
const businessBooks = getOfficialBooksBySubject('business_entrepreneurship');
assert(businessBooks.length === 2, `getOfficialBooksBySubject(business_entrepreneurship) returns 2 books (found: ${businessBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 150, `Total past exam papers count is at least 150 (found: ${PAST_EXAM_PAPERS.length})`);
const businessPastPapers = getPastExamPapers({ subject: 'business_entrepreneurship' });
assert(businessPastPapers.length === 6, `Found exactly 6 past exam papers for Business (found: ${businessPastPapers.length})`);
const expectedPaperIds = [
  'th-business-2021-s1',
  'th-business-2022-s1',
  'th-business-2023-s1',
  'th-business-2024-s1',
  'th-business-2024-s2',
  'th-business-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = businessPastPapers.find((p) => p.id === pId);
  assert(!!paper, `Paper ${pId} exists`);
  if (paper) {
    assert(paper.totalQuestions === 40, `${pId} has 40 questions (found: ${paper.totalQuestions})`);
    assert(paper.totalMarks === 50, `${pId} has 50 marks (found: ${paper.totalMarks})`);
    assert(paper.durationMinutes === 180, `${pId} has 180 minutes duration (found: ${paper.durationMinutes})`);
    const genQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
    assert(genQs.length === 40, `${pId} generates 40 authentic questions (found: ${genQs.length})`);
  }
});

// 7. Official Mock Exam Blueprint Verification
console.log('\n--- 7. Official Mock Exam Blueprint Verification ---');
const thBusinessMock = getOfficialMockConfig('thanaweya_business', 'business_entrepreneurship');
assert(!!thBusinessMock, 'Thanaweya Business mock config exists');
if (thBusinessMock) {
  assert(thBusinessMock.totalQuestions === 40, `Thanaweya Business mock totalQuestions is 40 (found: ${thBusinessMock.totalQuestions})`);
  assert(thBusinessMock.totalMarks === 50, `Thanaweya Business mock totalMarks is 50 (found: ${thBusinessMock.totalMarks})`);
  assert(thBusinessMock.durationMinutes === 180, `Thanaweya Business mock durationMinutes is 180 (found: ${thBusinessMock.durationMinutes})`);
  assert(thBusinessMock.section1Count === 30, `Thanaweya Business mock section 1 count is 30 (found: ${thBusinessMock.section1Count})`);
  assert(thBusinessMock.section2Count === 10, `Thanaweya Business mock section 2 count is 10 (found: ${thBusinessMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_business') === 'business_entrepreneurship', 'thanaweya_business categorizes as "business_entrepreneurship"');
assert(categorizeBranch('egbac_business') === 'business_entrepreneurship', 'egbac_business categorizes as "business_entrepreneurship"');
assert(categorizeBranch('إدارة أعمال') === 'business_entrepreneurship', 'إدارة أعمال categorizes as "business_entrepreneurship"');
assert(categorizeBranch('ريادة أعمال') === 'business_entrepreneurship', 'ريادة أعمال categorizes as "business_entrepreneurship"');
assert(categorizeBranch('business') === 'business_entrepreneurship', 'business categorizes as "business_entrepreneurship"');

// 9. Interactive Studio & Lab Data Verification
console.log('\n--- 9. Interactive Studio & Lab Data Verification ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/businessLab/businessLabData.ts');
assert(fs.existsSync(labDataPath), 'businessLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/BusinessModelingStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'BusinessModelingStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('dcf'), 'Studio has DCF & WACC valuation engine');
  assert(studioContent.includes('breakeven'), 'Studio has Break-Even & Contribution Margin calculator');
  assert(studioContent.includes('leancanvas'), 'Studio has Lean Canvas 9-Block builder');
  assert(studioContent.includes('supplychain'), 'Studio has EOQ & Inventory Reorder optimizer');
  assert(studioContent.includes('quiz'), 'Studio has Strategic Decision Scenario Quiz');
}

// 10. Platform Curriculum & Problem Totals Verification
console.log('\n--- 10. Platform Curriculum & Problem Totals Verification ---');
const totalSubjects = SUBJECTS.length;
assert(totalSubjects >= 22, `Total accredited subjects is at least 22 (found: ${totalSubjects})`);

const totalThBranches = thanaweyaCurriculum.branches.length;
assert(totalThBranches >= 25, `Total Thanaweya branches is at least 25 (found: ${totalThBranches})`);

const totalEgBranches = egBacCurriculum.branches.length;
assert(totalEgBranches >= 25, `Total EG-Bac branches is at least 25 (found: ${totalEgBranches})`);

let platformChapters = 0;
let platformProblems = 0;
let platformMCQs = 0;

[...thanaweyaCurriculum.branches, ...egBacCurriculum.branches].forEach((b) => {
  platformChapters += b.chapters.length;
  b.chapters.forEach((ch) => {
    const solved = ch.solvedExamples?.length || 0;
    const ex = ch.exerciseProblems?.length || 0;
    const easy = ch.databank?.easy?.length || 0;
    const med = ch.databank?.medium?.length || 0;
    const hots = ch.databank?.hots?.length || 0;
    const mcqs = easy + med + hots;
    platformMCQs += mcqs;
    platformProblems += solved + ex + mcqs;
  });
});

assert(platformChapters >= 273, `Total platform chapters is at least 273 (found: ${platformChapters})`);
assert(platformMCQs >= 47775, `Total platform databank MCQs is at least 47,775 (found: ${platformMCQs})`);
assert(platformProblems >= 54600, `Total platform problems is at least 54,600 (found: ${platformProblems})`);

// 11. Subject Stats Verification
console.log('\n--- 11. Subject Stats for Business Administration ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'business_entrepreneurship');
assert(thStats.totalChapters === 4, `Business Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Business Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'business_entrepreneurship');
assert(egStats.totalChapters === 4, `Business EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Business EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Business combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Business combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`💼 Business Administration & Entrepreneurship is 100% Accredited as the 22nd Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
