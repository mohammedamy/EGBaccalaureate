import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING SPANISH LANGUAGE (19TH ACCREDITED CORE SUBJECT) ---');

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
const esSubject = SUBJECTS.find((s) => s.id === 'spanish');
assert(!!esSubject, 'Subject definition for "spanish" found in SUBJECTS');
if (esSubject) {
  assert(esSubject.titleEn === 'Spanish Language (Español)', `Bilingual titleEn matches: ${esSubject.titleEn}`);
  assert(esSubject.titleAr === 'اللغة الإسبانية (اللغة الأجنبية الثانية)', `Bilingual titleAr matches: ${esSubject.titleAr}`);
  assert(esSubject.emoji === '🇪🇸', `Emoji matches Spanish flag (found: ${esSubject.emoji})`);
  assert(esSubject.iconName === 'Languages', `IconName is Languages (found: ${esSubject.iconName})`);
  assert(esSubject.badgeColor === 'amber', `Badge color is amber (found: ${esSubject.badgeColor})`);
  assert(esSubject.branchIds.thanaweya.includes('thanaweya_spanish'), 'thanaweya_spanish registered in branchIds.thanaweya');
  assert(esSubject.branchIds.egbac.includes('egbac_spanish'), 'egbac_spanish registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Spanish Branch Verification ---');
const thEs = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_spanish');
assert(!!thEs, 'thanaweya_spanish branch present in thanaweyaCurriculum');
if (thEs) {
  assert(thEs.chapters.length === 4, `Thanaweya Spanish has exactly 4 chapters (found: ${thEs.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thEs.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_es_ch${chNum}`, `Chapter ${chNum} ID is th_es_ch${chNum}`);
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
console.log('\n--- 3. EG-Bac Spanish Branch Verification ---');
const egEs = egBacCurriculum.branches.find((b) => b.id === 'egbac_spanish');
assert(!!egEs, 'egbac_spanish branch present in egBacCurriculum');
if (egEs) {
  assert(egEs.chapters.length === 4, `EG-Bac Spanish has exactly 4 chapters (found: ${egEs.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egEs.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_es_ch${chNum}`, `Chapter ${chNum} ID is egbac_es_ch${chNum}`);
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
[thEs, egEs].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Spanish branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 49, `officialBooksList total count is at least 49 (found: ${officialBooksList.length})`);
const thEsBook = getOfficialBookById('th-spanish-g12');
assert(!!thEsBook, 'Thanaweya Spanish textbook "th-spanish-g12" registered');
if (thEsBook) {
  assert(thEsBook.curriculum === 'thanaweya', 'th-spanish-g12 curriculum is thanaweya');
  assert(thEsBook.subjectId === 'spanish', 'th-spanish-g12 subjectId is spanish');
  assert(thEsBook.branchId === 'thanaweya_spanish', 'th-spanish-g12 branchId is thanaweya_spanish');
  assert(thEsBook.chapters.length === 4, `th-spanish-g12 has 4 chapters (found: ${thEsBook.chapters.length})`);
}

const egEsBook = getOfficialBookById('egbac-spanish-g12');
assert(!!egEsBook, 'EG-Bac Spanish textbook "egbac-spanish-g12" registered');
if (egEsBook) {
  assert(egEsBook.curriculum === 'egbac', 'egbac-spanish-g12 curriculum is egbac');
  assert(egEsBook.subjectId === 'spanish', 'egbac-spanish-g12 subjectId is spanish');
  assert(egEsBook.branchId === 'egbac_spanish', 'egbac-spanish-g12 branchId is egbac_spanish');
  assert(egEsBook.chapters.length === 4, `egbac-spanish-g12 has 4 chapters (found: ${egEsBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_spanish');
assert(bookByThBranch?.id === 'th-spanish-g12', 'getOfficialBookByBranch(thanaweya_spanish) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_spanish');
assert(bookByEgBranch?.id === 'egbac-spanish-g12', 'getOfficialBookByBranch(egbac_spanish) resolves correctly');
const spanishBooks = getOfficialBooksBySubject('spanish');
assert(spanishBooks.length === 2, `getOfficialBooksBySubject(spanish) returns 2 books (found: ${spanishBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 144, `Total past exam papers count is at least 144 (found: ${PAST_EXAM_PAPERS.length})`);
const esPastPapers = getPastExamPapers({ subject: 'spanish' });
assert(esPastPapers.length === 6, `Found exactly 6 past exam papers for Spanish (found: ${esPastPapers.length})`);
const expectedPaperIds = [
  'th-spanish-2021-s1',
  'th-spanish-2022-s1',
  'th-spanish-2023-s1',
  'th-spanish-2024-s1',
  'th-spanish-2024-s2',
  'th-spanish-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = esPastPapers.find((p) => p.id === pId);
  assert(!!paper, `Paper ${pId} exists`);
  if (paper) {
    assert(paper.totalQuestions === 31, `${pId} has 31 questions (found: ${paper.totalQuestions})`);
    assert(paper.totalMarks === 40, `${pId} has 40 marks (found: ${paper.totalMarks})`);
    assert(paper.durationMinutes === 120, `${pId} has 120 minutes duration (found: ${paper.durationMinutes})`);
    const genQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
    assert(genQs.length === 31, `${pId} generates 31 authentic questions (found: ${genQs.length})`);
  }
});

// 7. Official Mock Exam Blueprint Verification
console.log('\n--- 7. Official Mock Exam Blueprint Verification ---');
const thEsMock = getOfficialMockConfig('thanaweya_spanish', 'spanish');
assert(!!thEsMock, 'Thanaweya Spanish mock config exists');
if (thEsMock) {
  assert(thEsMock.totalQuestions === 31, `Thanaweya Spanish mock totalQuestions is 31 (found: ${thEsMock.totalQuestions})`);
  assert(thEsMock.totalMarks === 40, `Thanaweya Spanish mock totalMarks is 40 (found: ${thEsMock.totalMarks})`);
  assert(thEsMock.durationMinutes === 120, `Thanaweya Spanish mock durationMinutes is 120 (found: ${thEsMock.durationMinutes})`);
  assert(thEsMock.section1Count === 22, `Thanaweya Spanish mock section 1 count is 22 (found: ${thEsMock.section1Count})`);
  assert(thEsMock.section2Count === 9, `Thanaweya Spanish mock section 2 count is 9 (found: ${thEsMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_spanish') === 'languages', 'thanaweya_spanish categorizes as "languages"');
assert(categorizeBranch('egbac_spanish') === 'languages', 'egbac_spanish categorizes as "languages"');
assert(categorizeBranch('إسباني') === 'languages', 'إسباني categorizes as "languages"');
assert(categorizeBranch('español') === 'languages', 'español categorizes as "languages"');

// 9. Audio Lab & Virtual Studio Verification
console.log('\n--- 9. Audio Lab & Virtual Studio Verification ---');
const audioLabPath = path.resolve(process.cwd(), 'src/data/audioLab/spanishAudioLabData.ts');
assert(fs.existsSync(audioLabPath), 'spanishAudioLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/SpanishLanguageStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'SpanishLanguageStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('fonetica'), 'Studio has Phonetics engine');
  assert(studioContent.includes('tempi_verbali') || studioContent.includes('verb'), 'Studio has Verb Conjugation engine');
  assert(studioContent.includes('pronomi'), 'Studio has Pronouns & SE engine');
  assert(studioContent.includes('contrastes'), 'Studio has Contrasts engine (Ser/Estar & Por/Para)');
  assert(studioContent.includes('situaciones'), 'Studio has Situaciones engine');
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
console.log('\n--- 11. Subject Stats for Spanish ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'spanish');
assert(thStats.totalChapters === 4, `Spanish Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Spanish Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'spanish');
assert(egStats.totalChapters === 4, `Spanish EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Spanish EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Spanish combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Spanish combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`🇪🇸 Spanish Language is 100% Accredited as the 19th Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
