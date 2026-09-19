import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING CHRISTIAN RELIGIOUS EDUCATION (21ST ACCREDITED CORE SUBJECT) ---');

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
const christianSubject = SUBJECTS.find((s) => s.id === 'christian_studies');
assert(!!christianSubject, 'Subject definition for "christian_studies" found in SUBJECTS');
if (christianSubject) {
  assert(christianSubject.titleEn === 'Christian Religious Education', `Bilingual titleEn matches: ${christianSubject.titleEn}`);
  assert(christianSubject.titleAr === 'التربية الدينية المسيحية', `Bilingual titleAr matches: ${christianSubject.titleAr}`);
  assert(christianSubject.emoji === '✝️', `Emoji matches cross (found: ${christianSubject.emoji})`);
  assert(christianSubject.iconName === 'BookOpen', `IconName is BookOpen (found: ${christianSubject.iconName})`);
  assert(christianSubject.badgeColor === 'amber', `Badge color is amber (found: ${christianSubject.badgeColor})`);
  assert(christianSubject.branchIds.thanaweya.includes('thanaweya_christian'), 'thanaweya_christian registered in branchIds.thanaweya');
  assert(christianSubject.branchIds.egbac.includes('egbac_christian'), 'egbac_christian registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Christian Branch Verification ---');
const thChristian = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_christian');
assert(!!thChristian, 'thanaweya_christian branch present in thanaweyaCurriculum');
if (thChristian) {
  assert(thChristian.chapters.length === 4, `Thanaweya Christian has exactly 4 chapters (found: ${thChristian.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thChristian.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_chr_ch${chNum}` || ch.id === `th_christian_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
console.log('\n--- 3. EG-Bac Christian Branch Verification ---');
const egChristian = egBacCurriculum.branches.find((b) => b.id === 'egbac_christian');
assert(!!egChristian, 'egbac_christian branch present in egBacCurriculum');
if (egChristian) {
  assert(egChristian.chapters.length === 4, `EG-Bac Christian has exactly 4 chapters (found: ${egChristian.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egChristian.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_chr_ch${chNum}` || ch.id === `egbac_christian_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
[thChristian, egChristian].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Christian branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 51, `officialBooksList total count is at least 51 (found: ${officialBooksList.length})`);
const thBook = getOfficialBookById('th-christian-g12');
assert(!!thBook, 'Thanaweya Christian textbook "th-christian-g12" registered');
if (thBook) {
  assert(thBook.curriculum === 'thanaweya', 'th-christian-g12 curriculum is thanaweya');
  assert(thBook.subjectId === 'christian_studies', 'th-christian-g12 subjectId is christian_studies');
  assert(thBook.branchId === 'thanaweya_christian', 'th-christian-g12 branchId is thanaweya_christian');
  assert(thBook.chapters.length === 4, `th-christian-g12 has 4 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-christian-g12');
assert(!!egBook, 'EG-Bac Christian textbook "egbac-christian-g12" registered');
if (egBook) {
  assert(egBook.curriculum === 'egbac', 'egbac-christian-g12 curriculum is egbac');
  assert(egBook.subjectId === 'christian_studies', 'egbac-christian-g12 subjectId is christian_studies');
  assert(egBook.branchId === 'egbac_christian', 'egbac-christian-g12 branchId is egbac_christian');
  assert(egBook.chapters.length === 4, `egbac-christian-g12 has 4 chapters (found: ${egBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_christian');
assert(bookByThBranch?.id === 'th-christian-g12', 'getOfficialBookByBranch(thanaweya_christian) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_christian');
assert(bookByEgBranch?.id === 'egbac-christian-g12', 'getOfficialBookByBranch(egbac_christian) resolves correctly');
const christianBooks = getOfficialBooksBySubject('christian_studies');
assert(christianBooks.length === 2, `getOfficialBooksBySubject(christian_studies) returns 2 books (found: ${christianBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 144, `Total past exam papers count is at least 144 (found: ${PAST_EXAM_PAPERS.length})`);
const christianPastPapers = getPastExamPapers({ subject: 'christian_studies' });
assert(christianPastPapers.length === 6, `Found exactly 6 past exam papers for Christian Studies (found: ${christianPastPapers.length})`);
const expectedPaperIds = [
  'th-christian-2021-s1',
  'th-christian-2022-s1',
  'th-christian-2023-s1',
  'th-christian-2024-s1',
  'th-christian-2024-s2',
  'th-christian-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = christianPastPapers.find((p) => p.id === pId);
  assert(!!paper, `Paper ${pId} exists`);
  if (paper) {
    assert(paper.totalQuestions === 25, `${pId} has 25 questions (found: ${paper.totalQuestions})`);
    assert(paper.totalMarks === 30, `${pId} has 30 marks (found: ${paper.totalMarks})`);
    assert(paper.durationMinutes === 90, `${pId} has 90 minutes duration (found: ${paper.durationMinutes})`);
    const genQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
    assert(genQs.length === 25, `${pId} generates 25 authentic questions (found: ${genQs.length})`);
  }
});

// 7. Official Mock Exam Blueprint Verification
console.log('\n--- 7. Official Mock Exam Blueprint Verification ---');
const thChristianMock = getOfficialMockConfig('thanaweya_christian', 'christian_studies');
assert(!!thChristianMock, 'Thanaweya Christian mock config exists');
if (thChristianMock) {
  assert(thChristianMock.totalQuestions === 25, `Thanaweya Christian mock totalQuestions is 25 (found: ${thChristianMock.totalQuestions})`);
  assert(thChristianMock.totalMarks === 30, `Thanaweya Christian mock totalMarks is 30 (found: ${thChristianMock.totalMarks})`);
  assert(thChristianMock.durationMinutes === 90, `Thanaweya Christian mock durationMinutes is 90 (found: ${thChristianMock.durationMinutes})`);
  assert(thChristianMock.section1Count === 20, `Thanaweya Christian mock section 1 count is 20 (found: ${thChristianMock.section1Count})`);
  assert(thChristianMock.section2Count === 5, `Thanaweya Christian mock section 2 count is 5 (found: ${thChristianMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_christian') === 'christian_studies', 'thanaweya_christian categorizes as "christian_studies"');
assert(categorizeBranch('egbac_christian') === 'christian_studies', 'egbac_christian categorizes as "christian_studies"');
assert(categorizeBranch('مسيحي') === 'christian_studies', 'مسيحي categorizes as "christian_studies"');
assert(categorizeBranch('دين مسيحي') === 'christian_studies', 'دين مسيحي categorizes as "christian_studies"');
assert(categorizeBranch('قبطي') === 'christian_studies', 'قبطي categorizes as "christian_studies"');

// 9. Interactive Studio & Lab Data Verification
console.log('\n--- 9. Interactive Studio & Lab Data Verification ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/christianLab/christianLabData.ts');
assert(fs.existsSync(labDataPath), 'christianLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/ChristianHeritageStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'ChristianHeritageStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('sacraments'), 'Studio has Holy Sacraments explorer');
  assert(studioContent.includes('monasticism'), 'Studio has Monastic Heritage timeline');
  assert(studioContent.includes('synoptics'), 'Studio has Gospel Synoptics comparative matrix');
  assert(studioContent.includes('bioethics'), 'Studio has Contemporary Bioethics sandbox');
  assert(studioContent.includes('quiz'), 'Studio has Interactive Scenario Quiz');
}

// 10. Platform Curriculum & Problem Totals Verification
console.log('\n--- 10. Platform Curriculum & Problem Totals Verification ---');
const totalSubjects = SUBJECTS.length;
assert(totalSubjects >= 21, `Total accredited subjects is at least 21 (found: ${totalSubjects})`);

const totalThBranches = thanaweyaCurriculum.branches.length;
assert(totalThBranches >= 24, `Total Thanaweya branches is at least 24 (found: ${totalThBranches})`);

const totalEgBranches = egBacCurriculum.branches.length;
assert(totalEgBranches >= 24, `Total EG-Bac branches is at least 24 (found: ${totalEgBranches})`);

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

assert(platformChapters >= 265, `Total platform chapters is at least 265 (found: ${platformChapters})`);
assert(platformMCQs >= 46375, `Total platform databank MCQs is at least 46,375 (found: ${platformMCQs})`);
assert(platformProblems >= 53000, `Total platform problems is at least 53,000 (found: ${platformProblems})`);

// 11. Subject Stats Verification
console.log('\n--- 11. Subject Stats for Christian Studies ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'christian_studies');
assert(thStats.totalChapters === 4, `Christian Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Christian Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'christian_studies');
assert(egStats.totalChapters === 4, `Christian EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Christian EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Christian combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Christian combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`✝️ Christian Religious Education is 100% Accredited as the 21st Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
