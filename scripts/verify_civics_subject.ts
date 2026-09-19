import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING NATIONAL CIVICS & CONSTITUTION (17TH ACCREDITED CORE SUBJECT) ---');

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
const civicsSubject = SUBJECTS.find((s) => s.id === 'civics');
assert(!!civicsSubject, 'Subject definition for "civics" found in SUBJECTS');
if (civicsSubject) {
  assert(civicsSubject.titleEn === 'National Civics & Constitution', `Bilingual titleEn matches: ${civicsSubject.titleEn}`);
  assert(civicsSubject.titleAr === 'التربية الوطنية والدستور', `Bilingual titleAr matches: ${civicsSubject.titleAr}`);
  assert(civicsSubject.emoji === '⚖️', `Emoji matches scales (found: ${civicsSubject.emoji})`);
  assert(civicsSubject.iconName === 'Scale', `IconName is Scale (found: ${civicsSubject.iconName})`);
  assert(civicsSubject.badgeColor === 'emerald', `Badge color is emerald (found: ${civicsSubject.badgeColor})`);
  assert(civicsSubject.branchIds.thanaweya.includes('thanaweya_civics'), 'thanaweya_civics registered in branchIds.thanaweya');
  assert(civicsSubject.branchIds.egbac.includes('egbac_civics'), 'egbac_civics registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya National Civics & Constitution Branch Verification ---');
const thCivics = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_civics');
assert(!!thCivics, 'thanaweya_civics branch present in thanaweyaCurriculum');
if (thCivics) {
  assert(thCivics.chapters.length === 4, `Thanaweya Civics has exactly 4 chapters (found: ${thCivics.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thCivics.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_civics_ch${chNum}`, `Chapter ${chNum} ID is th_civics_ch${chNum}`);
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
console.log('\n--- 3. EG-Bac Comparative Constitutional Law Branch Verification ---');
const egCivics = egBacCurriculum.branches.find((b) => b.id === 'egbac_civics');
assert(!!egCivics, 'egbac_civics branch present in egBacCurriculum');
if (egCivics) {
  assert(egCivics.chapters.length === 4, `EG-Bac Civics has exactly 4 chapters (found: ${egCivics.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egCivics.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_civics_ch${chNum}`, `Chapter ${chNum} ID is egbac_civics_ch${chNum}`);
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

// 4. Detailed Question Quality & Uniqueness Check across all 1,400 Civics MCQs
console.log('\n--- 4. Quality & Uniqueness Check on All 1,400 Civics MCQs ---');
const civicsChapters = [
  ...(thCivics?.chapters || []),
  ...(egCivics?.chapters || []),
];

let totalCivicsMCQChecked = 0;
let optionsCountErrors = 0;
let answerMismatchErrors = 0;
let solutionMissingErrors = 0;

for (const ch of civicsChapters) {
  if (!ch.databank) continue;
  const qList = [...(ch.databank.easy || []), ...(ch.databank.medium || []), ...(ch.databank.hots || [])];
  for (const q of qList) {
    totalCivicsMCQChecked++;
    if (new Set(q.optionsEn).size !== 4 || new Set(q.optionsAr).size !== 4) {
      optionsCountErrors++;
    }
    if (q.optionsEn[q.correctIndex] !== q.correctAnswer) {
      answerMismatchErrors++;
    }
    if (!q.stepByStepSolutionEn?.length || !q.stepByStepSolutionAr?.length) {
      solutionMissingErrors++;
    }
  }
}

assert(totalCivicsMCQChecked === 1400, `Checked all 1,400 Civics MCQs (checked: ${totalCivicsMCQChecked})`);
assert(optionsCountErrors === 0, `All questions have strictly 4 unique options in En & Ar (errors: ${optionsCountErrors})`);
assert(answerMismatchErrors === 0, `All questions have correctAnswer matching optionsEn[correctIndex] (errors: ${answerMismatchErrors})`);
assert(solutionMissingErrors === 0, `All questions have complete step-by-step solutions (errors: ${solutionMissingErrors})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
const thCivicsBook = getOfficialBookById('th-civics-g12');
assert(!!thCivicsBook, 'th-civics-g12 textbook found in officialBooksList');
if (thCivicsBook) {
  assert(thCivicsBook.category === 'civics', `Category is 'civics' (got: ${thCivicsBook.category})`);
  assert(thCivicsBook.subjectId === 'civics', `SubjectId is 'civics' (got: ${thCivicsBook.subjectId})`);
  assert(thCivicsBook.branchId === 'thanaweya_civics', `BranchId is 'thanaweya_civics' (got: ${thCivicsBook.branchId})`);
}

const egCivicsBook = getOfficialBookById('egbac-civics-g12');
assert(!!egCivicsBook, 'egbac-civics-g12 textbook found in officialBooksList');
if (egCivicsBook) {
  assert(egCivicsBook.category === 'civics', `Category is 'civics' (got: ${egCivicsBook.category})`);
  assert(egCivicsBook.subjectId === 'civics', `SubjectId is 'civics' (got: ${egCivicsBook.subjectId})`);
  assert(egCivicsBook.branchId === 'egbac_civics', `BranchId is 'egbac_civics' (got: ${egCivicsBook.branchId})`);
}

const booksBySub = getOfficialBooksBySubject('civics');
assert(booksBySub.length === 2, `getOfficialBooksBySubject('civics') returns 2 books (got: ${booksBySub.length})`);
assert(officialBooksList.length >= 43, `Total official books is at least 43 (got: ${officialBooksList.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
const civicsPastPapers = getPastExamPapers({ subject: 'civics' });
assert(civicsPastPapers.length === 6, `Found 6 authentic past papers for civics (got: ${civicsPastPapers.length})`);
assert(PAST_EXAM_PAPERS.length >= 120, `Total past exam papers in platform is at least 120 (got: ${PAST_EXAM_PAPERS.length})`);

civicsPastPapers.forEach((paper) => {
  assert(paper.totalQuestions === 25, `[${paper.id}] has 25 questions`);
  assert(paper.totalMarks === 30, `[${paper.id}] has 30 marks`);
  assert(paper.durationMinutes === 90, `[${paper.id}] duration is 90 mins`);
  assert(paper.section1Count === 20, `[${paper.id}] section 1 has 20 questions`);
  assert(paper.section2Count === 5, `[${paper.id}] section 2 has 5 questions`);
  assert(paper.passingMark === 15, `[${paper.id}] passing mark is 15`);
  assert(paper.section1Count * 1 + paper.section2Count * 2 === paper.totalMarks, `[${paper.id}] marks formula matches total marks`);
});

const civicsGenQuestions = generatePastPaperQuestions('th-civics-2024-s1', thanaweyaCurriculum);
assert(civicsGenQuestions.length === 25, `Generated 25 questions for th-civics-2024-s1 (got: ${civicsGenQuestions.length})`);
const civicsMarks = civicsGenQuestions.reduce((sum, q) => sum + (q.points || 1), 0);
assert(civicsMarks === 30, `Questions sum to 30 marks (got: ${civicsMarks})`);

// 7. Official Mock Exam Config Verification
console.log('\n--- 7. Official Mock Exam Config Verification ---');
const mockCfg = getOfficialMockConfig('civics');
assert(mockCfg.totalQuestions === 25, `Mock config has 25 questions (got: ${mockCfg.totalQuestions})`);
assert(mockCfg.totalMarks === 30, `Mock config has 30 marks (got: ${mockCfg.totalMarks})`);
assert(mockCfg.durationMinutes === 90, `Mock config duration is 90 minutes (got: ${mockCfg.durationMinutes})`);
assert(mockCfg.section1Count === 20, `Mock config has 20 Sec 1 questions (got: ${mockCfg.section1Count})`);
assert(mockCfg.section2Count === 5, `Mock config has 5 Sec 2 questions (got: ${mockCfg.section2Count})`);

// 8. Student Analytics Categorization & Radar
console.log('\n--- 8. Student Analytics Verification ---');
assert(categorizeBranch('thanaweya_civics') === 'civics', `categorizeBranch('thanaweya_civics') === 'civics'`);
assert(categorizeBranch('egbac_civics') === 'civics', `categorizeBranch('egbac_civics') === 'civics'`);
assert(categorizeBranch('التربية الوطنية والدستور') === 'civics', `categorizeBranch('التربية الوطنية والدستور') === 'civics'`);
assert(categorizeBranch('قانون دستوري ومشاركة سياسية') === 'civics', `categorizeBranch with arabic civics keywords === 'civics'`);

const emptyState = {
  totalAttempted: 0,
  totalCorrect: 0,
  totalTimeSpentSec: 0,
  quizzesCompleted: 0,
  chapters: {},
  cognitive: {
    easy: { attempted: 0, correct: 0 },
    medium: { attempted: 0, correct: 0 },
    hots: { attempted: 0, correct: 0 },
  },
  lastUpdated: Date.now(),
};

const radar16 = getMasteryRadarData(emptyState, 'all16');
assert(radar16.length === 16, `all16 radar mode returns 16 dimensions (got: ${radar16.length})`);
assert(radar16.some((d) => d.dimensionKey === 'civics'), `all16 radar includes civics dimension`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL NATIONAL CIVICS & CONSTITUTION SUITE CHECKS PASSED!`);
  console.log(`17th Core Subject accredited with 8 chapters, 1,600 problems, 2 textbooks, 6 past papers, and full simulation.`);
  console.log(`======================================================\n`);
} else {
  console.error(`💥 Found ${errors} verification errors!`);
  process.exit(1);
}
