import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING CHINESE LANGUAGE (MANDARIN - 24TH ACCREDITED CORE SUBJECT) ---');

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
const zhSubject = SUBJECTS.find((s) => s.id === 'chinese');
assert(!!zhSubject, 'Subject definition for "chinese" found in SUBJECTS');
if (zhSubject) {
  assert(zhSubject.titleEn === 'Chinese Language (Mandarin)', `Bilingual titleEn matches: ${zhSubject.titleEn}`);
  assert(zhSubject.titleAr === 'اللغة الصينية (اللغة الأجنبية الثانية)', `Bilingual titleAr matches: ${zhSubject.titleAr}`);
  assert(zhSubject.emoji === '🇨🇳', `Emoji matches Chinese flag (found: ${zhSubject.emoji})`);
  assert(zhSubject.iconName === 'Languages', `IconName is Languages (found: ${zhSubject.iconName})`);
  assert(zhSubject.badgeColor === 'red', `Badge color is red (found: ${zhSubject.badgeColor})`);
  assert(zhSubject.branchIds.thanaweya.includes('thanaweya_chinese'), 'thanaweya_chinese registered in branchIds.thanaweya');
  assert(zhSubject.branchIds.egbac.includes('egbac_chinese'), 'egbac_chinese registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Chinese Branch Verification ---');
const thZh = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_chinese');
assert(!!thZh, 'thanaweya_chinese branch present in thanaweyaCurriculum');
if (thZh) {
  assert(thZh.chapters.length === 4, `Thanaweya Chinese has exactly 4 chapters (found: ${thZh.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thZh.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_zh_ch${chNum}`, `Chapter ${chNum} ID is th_zh_ch${chNum}`);
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
console.log('\n--- 3. EG-Bac Chinese Branch Verification ---');
const egZh = egBacCurriculum.branches.find((b) => b.id === 'egbac_chinese');
assert(!!egZh, 'egbac_chinese branch present in egBacCurriculum');
if (egZh) {
  assert(egZh.chapters.length === 4, `EG-Bac Chinese has exactly 4 chapters (found: ${egZh.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egZh.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_zh_ch${chNum}`, `Chapter ${chNum} ID is egbac_zh_ch${chNum}`);
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
[thZh, egZh].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Chinese branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 51, `officialBooksList total count is at least 51 (found: ${officialBooksList.length})`);
const thZhBook = getOfficialBookById('th-chinese-g12');
assert(!!thZhBook, 'Thanaweya Chinese textbook "th-chinese-g12" registered');
if (thZhBook) {
  assert(thZhBook.curriculum === 'thanaweya', 'th-chinese-g12 curriculum is thanaweya');
  assert(thZhBook.subjectId === 'chinese', 'th-chinese-g12 subjectId is chinese');
  assert(thZhBook.branchId === 'thanaweya_chinese', 'th-chinese-g12 branchId is thanaweya_chinese');
  assert(thZhBook.chapters.length === 4, `th-chinese-g12 has 4 chapters (found: ${thZhBook.chapters.length})`);
}

const egZhBook = getOfficialBookById('egbac-chinese-g12');
assert(!!egZhBook, 'EG-Bac Chinese textbook "egbac-chinese-g12" registered');
if (egZhBook) {
  assert(egZhBook.curriculum === 'egbac', 'egbac-chinese-g12 curriculum is egbac');
  assert(egZhBook.subjectId === 'chinese', 'egbac-chinese-g12 subjectId is chinese');
  assert(egZhBook.branchId === 'egbac_chinese', 'egbac-chinese-g12 branchId is egbac_chinese');
  assert(egZhBook.chapters.length === 4, `egbac-chinese-g12 has 4 chapters (found: ${egZhBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_chinese');
assert(bookByThBranch?.id === 'th-chinese-g12', 'getOfficialBookByBranch(thanaweya_chinese) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_chinese');
assert(bookByEgBranch?.id === 'egbac-chinese-g12', 'getOfficialBookByBranch(egbac_chinese) resolves correctly');
const chineseBooks = getOfficialBooksBySubject('chinese');
assert(chineseBooks.length === 2, `getOfficialBooksBySubject(chinese) returns 2 books (found: ${chineseBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 162, `Total past exam papers count is at least 162 (found: ${PAST_EXAM_PAPERS.length})`);
const zhPastPapers = getPastExamPapers({ subject: 'chinese' });
assert(zhPastPapers.length === 6, `Found exactly 6 past exam papers for Chinese (found: ${zhPastPapers.length})`);
const expectedPaperIds = [
  'th-chinese-2021-s1',
  'th-chinese-2022-s1',
  'th-chinese-2023-s1',
  'th-chinese-2024-s1',
  'th-chinese-2024-s2',
  'th-chinese-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = zhPastPapers.find((p) => p.id === pId);
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
const thZhMock = getOfficialMockConfig('thanaweya_chinese', 'chinese');
assert(!!thZhMock, 'Thanaweya Chinese mock config exists');
if (thZhMock) {
  assert(thZhMock.totalQuestions === 31, `Thanaweya Chinese mock totalQuestions is 31 (found: ${thZhMock.totalQuestions})`);
  assert(thZhMock.totalMarks === 40, `Thanaweya Chinese mock totalMarks is 40 (found: ${thZhMock.totalMarks})`);
  assert(thZhMock.durationMinutes === 120, `Thanaweya Chinese mock durationMinutes is 120 (found: ${thZhMock.durationMinutes})`);
  assert(thZhMock.section1Count === 22, `Thanaweya Chinese mock section 1 count is 22 (found: ${thZhMock.section1Count})`);
  assert(thZhMock.section2Count === 9, `Thanaweya Chinese mock section 2 count is 9 (found: ${thZhMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_chinese') === 'languages', 'thanaweya_chinese categorizes as "languages"');
assert(categorizeBranch('egbac_chinese') === 'languages', 'egbac_chinese categorizes as "languages"');
assert(categorizeBranch('صيني') === 'languages', 'صيني categorizes as "languages"');
assert(categorizeBranch('chinese') === 'languages', 'chinese categorizes as "languages"');
assert(categorizeBranch('mandarin') === 'languages', 'mandarin categorizes as "languages"');
assert(categorizeBranch('pinyin') === 'languages', 'pinyin categorizes as "languages"');

// 9. Audio Lab & Virtual Studio Verification
console.log('\n--- 9. Audio Lab & Virtual Studio Verification ---');
const audioLabPath = path.resolve(process.cwd(), 'src/data/audioLab/chineseAudioLabData.ts');
assert(fs.existsSync(audioLabPath), 'chineseAudioLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/ChineseLanguageStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'ChineseLanguageStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('pinyin_tones'), 'Studio has Pinyin & Tones engine');
  assert(studioContent.includes('radicals'), 'Studio has Hanzi Radicals engine');
  assert(studioContent.includes('grammar'), 'Studio has Grammar & Sentence Patterns engine');
  assert(studioContent.includes('situations'), 'Studio has MoE Situations engine');
  assert(studioContent.includes('listening'), 'Studio has Listening Comprehension engine');
  assert(studioContent.includes('useNativeLabFullscreen'), 'Studio integrates useNativeLabFullscreen');
}

// 10. Platform Curriculum & Problem Totals Verification
console.log('\n--- 10. Platform Curriculum & Problem Totals Verification ---');
const totalSubjects = SUBJECTS.length;
assert(totalSubjects >= 24, `Total accredited subjects is at least 24 (found: ${totalSubjects})`);

const totalThBranches = thanaweyaCurriculum.branches.length;
assert(totalThBranches >= 27, `Total Thanaweya branches is at least 27 (found: ${totalThBranches})`);

const totalEgBranches = egBacCurriculum.branches.length;
assert(totalEgBranches >= 27, `Total EG-Bac branches is at least 27 (found: ${totalEgBranches})`);

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

assert(platformChapters >= 289, `Total platform chapters is at least 289 (found: ${platformChapters})`);
assert(platformMCQs >= 50575, `Total platform databank MCQs is at least 50,575 (found: ${platformMCQs})`);
assert(platformProblems >= 57800, `Total platform problems is at least 57,800 (found: ${platformProblems})`);

// 11. Subject Stats Verification
console.log('\n--- 11. Subject Stats for Chinese ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'chinese');
assert(thStats.totalChapters === 4, `Chinese Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Chinese Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'chinese');
assert(egStats.totalChapters === 4, `Chinese EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Chinese EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Chinese combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Chinese combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`🇨🇳 Chinese Language (Mandarin) is 100% Accredited as the 24th Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
