import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING AGRICULTURAL SCIENCES & AGROTECHNOLOGY (26TH ACCREDITED CORE SUBJECT) ---');

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
const agriSubject = SUBJECTS.find((s) => s.id === 'agriculture');
assert(!!agriSubject, 'Subject definition for "agriculture" found in SUBJECTS');
if (agriSubject) {
  assert(agriSubject.titleEn === 'Agricultural Sciences & Agrotechnology', `Bilingual titleEn matches: ${agriSubject.titleEn}`);
  assert(agriSubject.titleAr === 'التربية الزراعية والتكنولوجيا الزراعية', `Bilingual titleAr matches: ${agriSubject.titleAr}`);
  assert(agriSubject.emoji === '🌾', `Emoji matches sheaf of rice/wheat (found: ${agriSubject.emoji})`);
  assert(agriSubject.iconName === 'Sprout', `IconName is Sprout (found: ${agriSubject.iconName})`);
  assert(agriSubject.badgeColor === 'emerald', `Badge color is emerald (found: ${agriSubject.badgeColor})`);
  assert(agriSubject.branchIds.thanaweya.includes('thanaweya_agriculture'), 'thanaweya_agriculture registered in branchIds.thanaweya');
  assert(agriSubject.branchIds.egbac.includes('egbac_agriculture'), 'egbac_agriculture registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Agriculture Branch Verification ---');
const thAgri = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_agriculture');
assert(!!thAgri, 'thanaweya_agriculture branch present in thanaweyaCurriculum');
if (thAgri) {
  assert(thAgri.chapters.length === 4, `Thanaweya Agriculture has exactly 4 chapters (found: ${thAgri.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thAgri.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_agri_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
console.log('\n--- 3. EG-Bac Agriculture Branch Verification ---');
const egAgri = egBacCurriculum.branches.find((b) => b.id === 'egbac_agriculture');
assert(!!egAgri, 'egbac_agriculture branch present in egBacCurriculum');
if (egAgri) {
  assert(egAgri.chapters.length === 4, `EG-Bac Agriculture has exactly 4 chapters (found: ${egAgri.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egAgri.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_agri_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
[thAgri, egAgri].forEach((branch) => {
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
        assert(typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3, `Question ${q.id} correctIndex in [0, 3]`);
        assert(q.optionsEn[q.correctIndex] === q.correctAnswer, `Question ${q.id} correctAnswer matches optionsEn[correctIndex]`);
        assert(!!q.explanationAr && !!q.explanationEn, `Question ${q.id} has bilingual explanations`);
      });
    });
  });
});
assert(totalCheckedMCQs === 1400, `Verified 1,400 Agricultural MCQs with 100% data integrity`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks in officialBooksData ---');
const thAgriBook = getOfficialBookById('th-agri-g12');
assert(!!thAgriBook, 'th-agri-g12 textbook found in officialBooksList');
if (thAgriBook) {
  assert(thAgriBook.category === 'agricultural_sciences', `th-agri-g12 category is agricultural_sciences`);
  assert(thAgriBook.subjectId === 'agriculture', `th-agri-g12 subjectId is agriculture`);
  assert(thAgriBook.chapters.length === 4, `th-agri-g12 has 4 chapter mappings`);
  assert(thAgriBook.filename === 'thanaweya-agriculture-g12.pdf', `th-agri-g12 filename matches`);
}

const egBacAgriBook = getOfficialBookById('egbac-agri-g12');
assert(!!egBacAgriBook, 'egbac-agri-g12 textbook found in officialBooksList');
if (egBacAgriBook) {
  assert(egBacAgriBook.category === 'agricultural_sciences', `egbac-agri-g12 category is agricultural_sciences`);
  assert(egBacAgriBook.subjectId === 'agriculture', `egbac-agri-g12 subjectId is agriculture`);
  assert(egBacAgriBook.chapters.length === 4, `egbac-agri-g12 has 4 module mappings`);
  assert(egBacAgriBook.filename === 'egbac-agriculture-g12.pdf', `egbac-agri-g12 filename matches`);
}

const branchBook1 = getOfficialBookByBranch('thanaweya_agriculture');
assert(branchBook1?.id === 'th-agri-g12', 'getOfficialBookByBranch("thanaweya_agriculture") resolves th-agri-g12');

const branchBook2 = getOfficialBookByBranch('egbac_agriculture');
assert(branchBook2?.id === 'egbac-agri-g12', 'getOfficialBookByBranch("egbac_agriculture") resolves egbac-agri-g12');

const subjectBooks = getOfficialBooksBySubject('agriculture');
assert(subjectBooks.length === 2, `getOfficialBooksBySubject("agriculture") returns 2 books (found: ${subjectBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
const agriPapers = getPastExamPapers({ subject: 'agriculture' });
assert(agriPapers.length === 6, `Found exactly 6 past exam papers for agriculture (found: ${agriPapers.length})`);

const expectedSessions = [
  { year: 2021, session: 'session1' },
  { year: 2022, session: 'session1' },
  { year: 2023, session: 'session1' },
  { year: 2024, session: 'session1' },
  { year: 2024, session: 'session2' },
  { year: 2025, session: 'experimental' },
];

expectedSessions.forEach((item) => {
  const paper = agriPapers.find((p) => p.year === item.year && p.session === item.session);
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
const mockBlueprint = getOfficialMockConfig('thanaweya_agriculture', 'thanaweya');
assert(mockBlueprint.subjectId === 'agriculture', `Mock blueprint subjectId is agriculture (found: ${mockBlueprint.subjectId})`);
assert(mockBlueprint.totalQuestions === 40, `Mock blueprint has 40 questions (found: ${mockBlueprint.totalQuestions})`);
assert(mockBlueprint.totalMarks === 50, `Mock blueprint has 50 marks (found: ${mockBlueprint.totalMarks})`);
assert(mockBlueprint.durationMinutes === 180, `Mock blueprint has 180 minutes duration`);
assert(mockBlueprint.section1Count === 30, `Mock blueprint has 30 1-mark questions`);
assert(mockBlueprint.section2Count === 10, `Mock blueprint has 10 2-mark questions`);

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
const cat1 = categorizeBranch('thanaweya_agriculture', 'التربية الزراعية والتكنولوجيا');
assert(cat1 === 'agricultural_sciences', `categorizeBranch returned "agricultural_sciences" for thanaweya_agriculture (found: ${cat1})`);
const cat2 = categorizeBranch('egbac_agriculture', 'Precision Agrotechnology & Desert Reclamation');
assert(cat2 === 'agricultural_sciences', `categorizeBranch returned "agricultural_sciences" for egbac_agriculture (found: ${cat2})`);

// 9. Interactive Studio & Component Integrity
console.log('\n--- 9. Interactive Studio & Component Integrity ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/agricultureLab/agricultureLabData.ts');
assert(fs.existsSync(labDataPath), `agricultureLabData.ts file exists on disk`);

const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/AgriculturalTechnologyStudio.tsx');
assert(fs.existsSync(studioComponentPath), `AgriculturalTechnologyStudio.tsx component exists on disk`);

// 10. Platform Global Totals
console.log('\n--- 10. Platform Global Integrity & Accreditation Metrics ---');
assert(SUBJECTS.length === 26, `Total platform subjects is 26 (found: ${SUBJECTS.length})`);
assert(thanaweyaCurriculum.branches.length === 29, `Thanaweya branches total is 29 (found: ${thanaweyaCurriculum.branches.length})`);
assert(egBacCurriculum.branches.length === 29, `EG-Bac branches total is 29 (found: ${egBacCurriculum.branches.length})`);

const totalChapters = thanaweyaCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0) +
  egBacCurriculum.branches.reduce((acc, b) => acc + b.chapters.length, 0);
assert(totalChapters === 305, `Total curriculum chapters across all subjects is 305 (found: ${totalChapters})`);

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
assert(totalMCQs === 53375, `Total databank MCQs is 53,375 (found: ${totalMCQs})`);

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
assert(totalProblems === 61000, `Total platform problems across all branches is 61,000 (found: ${totalProblems})`);

assert(officialBooksList.length === 61, `Total official books is 61 (found: ${officialBooksList.length})`);
assert(PAST_EXAM_PAPERS.length === 174, `Total past exam papers is 174 (found: ${PAST_EXAM_PAPERS.length})`);

// Final Output
console.log('\n======================================================');
if (errors === 0) {
  console.log('🎉 ALL AGRICULTURAL SCIENCES & AGROTECHNOLOGY VERIFICATIONS PASSED (0 ERRORS)!');
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
