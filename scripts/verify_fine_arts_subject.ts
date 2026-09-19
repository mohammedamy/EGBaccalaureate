import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING FINE ARTS, ARCHITECTURAL DESIGN & VISUAL CULTURE (23RD ACCREDITED CORE SUBJECT) ---');

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
const artsSubject = SUBJECTS.find((s) => s.id === 'fine_arts_architecture');
assert(!!artsSubject, 'Subject definition for "fine_arts_architecture" found in SUBJECTS');
if (artsSubject) {
  assert(artsSubject.titleEn === 'Fine Arts, Architectural Design & Visual Culture', `Bilingual titleEn matches: ${artsSubject.titleEn}`);
  assert(artsSubject.titleAr === 'الفنون الجميلة والتصميم المعماري', `Bilingual titleAr matches: ${artsSubject.titleAr}`);
  assert(artsSubject.emoji === '🎨', `Emoji matches palette (found: ${artsSubject.emoji})`);
  assert(artsSubject.iconName === 'Palette', `IconName is Palette (found: ${artsSubject.iconName})`);
  assert(artsSubject.badgeColor === 'rose', `Badge color is rose (found: ${artsSubject.badgeColor})`);
  assert(artsSubject.branchIds.thanaweya.includes('thanaweya_fine_arts'), 'thanaweya_fine_arts registered in branchIds.thanaweya');
  assert(artsSubject.branchIds.egbac.includes('egbac_fine_arts'), 'egbac_fine_arts registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Fine Arts Branch Verification ---');
const thArts = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_fine_arts');
assert(!!thArts, 'thanaweya_fine_arts branch present in thanaweyaCurriculum');
if (thArts) {
  assert(thArts.chapters.length === 4, `Thanaweya Fine Arts has exactly 4 chapters (found: ${thArts.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thArts.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_fine_arts_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
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

  assert(totalThLessons === 8, `Thanaweya total lessons: ${totalThLessons} (expected 8)`);
  assert(totalThSolved === 40, `Thanaweya total solved examples: ${totalThSolved} (expected 40)`);
  assert(totalThExercises === 60, `Thanaweya total exercises: ${totalThExercises} (expected 60)`);
  assert(totalThMCQ === 700, `Thanaweya total MCQs: ${totalThMCQ} (expected 700)`);
  assert(totalThSolved + totalThExercises + totalThMCQ === 800, `Thanaweya total problems: ${totalThSolved + totalThExercises + totalThMCQ} (expected 800)`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Fine Arts Branch Verification ---');
const egArts = egBacCurriculum.branches.find((b) => b.id === 'egbac_fine_arts');
assert(!!egArts, 'egbac_fine_arts branch present in egBacCurriculum');
if (egArts) {
  assert(egArts.chapters.length === 4, `EG-Bac Fine Arts has exactly 4 chapters (found: ${egArts.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egArts.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_fine_arts_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
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

  assert(totalEgLessons === 8, `EG-Bac total lessons: ${totalEgLessons} (expected 8)`);
  assert(totalEgSolved === 40, `EG-Bac total solved examples: ${totalEgSolved} (expected 40)`);
  assert(totalEgExercises === 60, `EG-Bac total exercises: ${totalEgExercises} (expected 60)`);
  assert(totalEgMCQ === 700, `EG-Bac total MCQs: ${totalEgMCQ} (expected 700)`);
  assert(totalEgSolved + totalEgExercises + totalEgMCQ === 800, `EG-Bac total problems: ${totalEgSolved + totalEgExercises + totalEgMCQ} (expected 800)`);
}

// 4. MCQ Integrity & Answer Matching (All 1,400 MCQs)
console.log('\n--- 4. MCQ Integrity & Answer Matching Verification ---');
let totalCheckedMCQs = 0;
[thArts, egArts].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Fine Arts branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 55, `officialBooksList total count is at least 55 (found: ${officialBooksList.length})`);
const thBook = getOfficialBookById('th-arts-g12');
assert(!!thBook, 'Thanaweya Fine Arts textbook "th-arts-g12" registered');
if (thBook) {
  assert(thBook.curriculum === 'thanaweya', 'th-arts-g12 curriculum is thanaweya');
  assert(thBook.subjectId === 'fine_arts_architecture', 'th-arts-g12 subjectId is fine_arts_architecture');
  assert(thBook.branchId === 'thanaweya_fine_arts', 'th-arts-g12 branchId is thanaweya_fine_arts');
  assert(thBook.chapters.length === 4, `th-arts-g12 has 4 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-arts-g12');
assert(!!egBook, 'EG-Bac Fine Arts textbook "egbac-arts-g12" registered');
if (egBook) {
  assert(egBook.curriculum === 'egbac', 'egbac-arts-g12 curriculum is egbac');
  assert(egBook.subjectId === 'fine_arts_architecture', 'egbac-arts-g12 subjectId is fine_arts_architecture');
  assert(egBook.branchId === 'egbac_fine_arts', 'egbac-arts-g12 branchId is egbac_fine_arts');
  assert(egBook.chapters.length === 4, `egbac-arts-g12 has 4 chapters (found: ${egBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_fine_arts');
assert(bookByThBranch?.id === 'th-arts-g12', 'getOfficialBookByBranch(thanaweya_fine_arts) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_fine_arts');
assert(bookByEgBranch?.id === 'egbac-arts-g12', 'getOfficialBookByBranch(egbac_fine_arts) resolves correctly');
const artsBooks = getOfficialBooksBySubject('fine_arts_architecture');
assert(artsBooks.length === 2, `getOfficialBooksBySubject(fine_arts_architecture) returns 2 books (found: ${artsBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 156, `Total past exam papers count is at least 156 (found: ${PAST_EXAM_PAPERS.length})`);
const artsPastPapers = getPastExamPapers({ subject: 'fine_arts_architecture' });
assert(artsPastPapers.length === 6, `Found exactly 6 past exam papers for Fine Arts (found: ${artsPastPapers.length})`);
const expectedPaperIds = [
  'th-arts-2021-s1',
  'th-arts-2022-s1',
  'th-arts-2023-s1',
  'th-arts-2024-s1',
  'th-arts-2024-s2',
  'th-arts-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = artsPastPapers.find((p) => p.id === pId);
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
const thArtsMock = getOfficialMockConfig('thanaweya_fine_arts', 'fine_arts_architecture');
assert(!!thArtsMock, 'Thanaweya Fine Arts mock config exists');
if (thArtsMock) {
  assert(thArtsMock.totalQuestions === 40, `Thanaweya Fine Arts mock totalQuestions is 40 (found: ${thArtsMock.totalQuestions})`);
  assert(thArtsMock.totalMarks === 50, `Thanaweya Fine Arts mock totalMarks is 50 (found: ${thArtsMock.totalMarks})`);
  assert(thArtsMock.durationMinutes === 180, `Thanaweya Fine Arts mock durationMinutes is 180 (found: ${thArtsMock.durationMinutes})`);
  assert(thArtsMock.section1Count === 30, `Thanaweya Fine Arts mock section 1 count is 30 (found: ${thArtsMock.section1Count})`);
  assert(thArtsMock.section2Count === 10, `Thanaweya Fine Arts mock section 2 count is 10 (found: ${thArtsMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_fine_arts') === 'fine_arts_architecture', 'thanaweya_fine_arts categorizes as "fine_arts_architecture"');
assert(categorizeBranch('egbac_fine_arts') === 'fine_arts_architecture', 'egbac_fine_arts categorizes as "fine_arts_architecture"');
assert(categorizeBranch('فنون جميلة') === 'fine_arts_architecture', 'فنون جميلة categorizes as "fine_arts_architecture"');
assert(categorizeBranch('تصميم معماري') === 'fine_arts_architecture', 'تصميم معماري categorizes as "fine_arts_architecture"');
assert(categorizeBranch('perspective') === 'fine_arts_architecture', 'perspective categorizes as "fine_arts_architecture"');

// 9. Interactive Studio & Lab Data Verification
console.log('\n--- 9. Interactive Studio & Lab Data Verification ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/fineArtsLab/fineArtsLabData.ts');
assert(fs.existsSync(labDataPath), 'fineArtsLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/FineArtsArchitectureStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'FineArtsArchitectureStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('perspective'), 'Studio has Perspective Drafting canvas');
  assert(studioContent.includes('colors'), 'Studio has Color Wheel & Harmonic Schemes');
  assert(studioContent.includes('golden_ratio'), 'Studio has Golden Ratio & Architectural Orders');
  assert(studioContent.includes('tessellation'), 'Studio has Islamic Geometric Tessellation Generator');
  assert(studioContent.includes('quiz'), 'Studio has Aptitude Exam Simulator');
}

// 10. Platform Curriculum & Problem Totals Verification
console.log('\n--- 10. Platform Curriculum & Problem Totals Verification ---');
const totalSubjects = SUBJECTS.length;
assert(totalSubjects >= 23, `Total accredited subjects is at least 23 (found: ${totalSubjects})`);

const totalThBranches = thanaweyaCurriculum.branches.length;
assert(totalThBranches >= 26, `Total Thanaweya branches is at least 26 (found: ${totalThBranches})`);

const totalEgBranches = egBacCurriculum.branches.length;
assert(totalEgBranches >= 26, `Total EG-Bac branches is at least 26 (found: ${totalEgBranches})`);

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

assert(platformChapters >= 281, `Total platform chapters is at least 281 (found: ${platformChapters})`);
assert(platformMCQs >= 49175, `Total platform databank MCQs is at least 49,175 (found: ${platformMCQs})`);
assert(platformProblems >= 56200, `Total platform problems is at least 56,200 (found: ${platformProblems})`);

// 11. Subject Stats Verification
console.log('\n--- 11. Subject Stats for Fine Arts & Architecture ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'fine_arts_architecture');
assert(thStats.totalChapters === 4, `Fine Arts Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Fine Arts Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'fine_arts_architecture');
assert(egStats.totalChapters === 4, `Fine Arts EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Fine Arts EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Fine Arts combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Fine Arts combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`🎨 Fine Arts, Architectural Design & Visual Culture is 100% Accredited as the 23rd Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
