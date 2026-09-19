import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING MUSIC THEORY & ARAB/WESTERN MUSICOLOGY (25TH ACCREDITED CORE SUBJECT) ---');

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
const musicSubject = SUBJECTS.find((s) => s.id === 'music_theory');
assert(!!musicSubject, 'Subject definition for "music_theory" found in SUBJECTS');
if (musicSubject) {
  assert(musicSubject.titleEn === 'Music Theory & Arab/Western Musicology', `Bilingual titleEn matches: ${musicSubject.titleEn}`);
  assert(musicSubject.titleAr === 'التربية الموسيقية والنظريات الموسيقية', `Bilingual titleAr matches: ${musicSubject.titleAr}`);
  assert(musicSubject.emoji === '🎵', `Emoji matches music note (found: ${musicSubject.emoji})`);
  assert(musicSubject.iconName === 'Music', `IconName is Music (found: ${musicSubject.iconName})`);
  assert(musicSubject.badgeColor === 'amber', `Badge color is amber (found: ${musicSubject.badgeColor})`);
  assert(musicSubject.branchIds.thanaweya.includes('thanaweya_music'), 'thanaweya_music registered in branchIds.thanaweya');
  assert(musicSubject.branchIds.egbac.includes('egbac_music'), 'egbac_music registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Music Branch Verification ---');
const thMusic = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_music');
assert(!!thMusic, 'thanaweya_music branch present in thanaweyaCurriculum');
if (thMusic) {
  assert(thMusic.chapters.length === 4, `Thanaweya Music has exactly 4 chapters (found: ${thMusic.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thMusic.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_music_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
console.log('\n--- 3. EG-Bac Music Branch Verification ---');
const egMusic = egBacCurriculum.branches.find((b) => b.id === 'egbac_music');
assert(!!egMusic, 'egbac_music branch present in egBacCurriculum');
if (egMusic) {
  assert(egMusic.chapters.length === 4, `EG-Bac Music has exactly 4 chapters (found: ${egMusic.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egMusic.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_music_ch${chNum}`, `Chapter ${chNum} ID is ${ch.id}`);
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
[thMusic, egMusic].forEach((branch) => {
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
assert(totalCheckedMCQs === 1400, `Total checked MCQs across Music branches is 1,400 (found: ${totalCheckedMCQs})`);

// 5. Official Textbooks Verification
console.log('\n--- 5. Official Textbooks Verification ---');
assert(officialBooksList.length >= 57, `officialBooksList total count is at least 57 (found: ${officialBooksList.length})`);
const thBook = getOfficialBookById('th-music-g12');
assert(!!thBook, 'Thanaweya Music textbook "th-music-g12" registered');
if (thBook) {
  assert(thBook.curriculum === 'thanaweya', 'th-music-g12 curriculum is thanaweya');
  assert(thBook.subjectId === 'music_theory', 'th-music-g12 subjectId is music_theory');
  assert(thBook.branchId === 'thanaweya_music', 'th-music-g12 branchId is thanaweya_music');
  assert(thBook.chapters.length === 4, `th-music-g12 has 4 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-music-g12');
assert(!!egBook, 'EG-Bac Music textbook "egbac-music-g12" registered');
if (egBook) {
  assert(egBook.curriculum === 'egbac', 'egbac-music-g12 curriculum is egbac');
  assert(egBook.subjectId === 'music_theory', 'egbac-music-g12 subjectId is music_theory');
  assert(egBook.branchId === 'egbac_music', 'egbac-music-g12 branchId is egbac_music');
  assert(egBook.chapters.length === 4, `egbac-music-g12 has 4 chapters (found: ${egBook.chapters.length})`);
}

const bookByThBranch = getOfficialBookByBranch('thanaweya_music');
assert(bookByThBranch?.id === 'th-music-g12', 'getOfficialBookByBranch(thanaweya_music) resolves correctly');
const bookByEgBranch = getOfficialBookByBranch('egbac_music');
assert(bookByEgBranch?.id === 'egbac-music-g12', 'getOfficialBookByBranch(egbac_music) resolves correctly');
const musicBooks = getOfficialBooksBySubject('music_theory');
assert(musicBooks.length === 2, `getOfficialBooksBySubject(music_theory) returns 2 books (found: ${musicBooks.length})`);

// 6. Past Exam Papers Verification
console.log('\n--- 6. Past Exam Papers Verification ---');
assert(PAST_EXAM_PAPERS.length >= 168, `Total past exam papers count is at least 168 (found: ${PAST_EXAM_PAPERS.length})`);
const musicPastPapers = getPastExamPapers({ subject: 'music_theory' });
assert(musicPastPapers.length === 6, `Found exactly 6 past exam papers for Music Theory (found: ${musicPastPapers.length})`);
const expectedPaperIds = [
  'th-music-2021-s1',
  'th-music-2022-s1',
  'th-music-2023-s1',
  'th-music-2024-s1',
  'th-music-2024-s2',
  'th-music-2025-exp',
];
expectedPaperIds.forEach((pId) => {
  const paper = musicPastPapers.find((p) => p.id === pId);
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
const thMusicMock = getOfficialMockConfig('thanaweya_music', 'music_theory');
assert(!!thMusicMock, 'Thanaweya Music mock config exists');
if (thMusicMock) {
  assert(thMusicMock.totalQuestions === 40, `Thanaweya Music mock totalQuestions is 40 (found: ${thMusicMock.totalQuestions})`);
  assert(thMusicMock.totalMarks === 50, `Thanaweya Music mock totalMarks is 50 (found: ${thMusicMock.totalMarks})`);
  assert(thMusicMock.durationMinutes === 180, `Thanaweya Music mock durationMinutes is 180 (found: ${thMusicMock.durationMinutes})`);
  assert(thMusicMock.section1Count === 30, `Thanaweya Music mock section 1 count is 30 (found: ${thMusicMock.section1Count})`);
  assert(thMusicMock.section2Count === 10, `Thanaweya Music mock section 2 count is 10 (found: ${thMusicMock.section2Count})`);
}

// 8. Student Analytics Categorization Verification
console.log('\n--- 8. Student Analytics Categorization Verification ---');
assert(categorizeBranch('thanaweya_music') === 'music_theory', 'thanaweya_music categorizes as "music_theory"');
assert(categorizeBranch('egbac_music') === 'music_theory', 'egbac_music categorizes as "music_theory"');
assert(categorizeBranch('موسيقى عربية') === 'music_theory', 'موسيقى عربية categorizes as "music_theory"');
assert(categorizeBranch('صولفيج ونغم') === 'music_theory', 'صولفيج ونغم categorizes as "music_theory"');
assert(categorizeBranch('maqam bayati') === 'music_theory', 'maqam bayati categorizes as "music_theory"');

// 9. Interactive Studio & Lab Data Verification
console.log('\n--- 9. Interactive Studio & Lab Data Verification ---');
const labDataPath = path.resolve(process.cwd(), 'src/data/audioLab/musicLabData.ts');
assert(fs.existsSync(labDataPath), 'musicLabData.ts file exists');
const studioComponentPath = path.resolve(process.cwd(), 'src/components/labs/MusicTheoryStudio.tsx');
assert(fs.existsSync(studioComponentPath), 'MusicTheoryStudio.tsx file exists');
if (fs.existsSync(studioComponentPath)) {
  const studioContent = fs.readFileSync(studioComponentPath, 'utf8');
  assert(studioContent.includes('solfege'), 'Studio has Solfège & Staff Notation tab');
  assert(studioContent.includes('maqamat'), 'Studio has 24-EDO Oriental Maqamat tab');
  assert(studioContent.includes('iqaat'), 'Studio has Arab Iqa\'at drum machine sandbox');
  assert(studioContent.includes('harmony'), 'Studio has Western Harmony & SATB tab');
  assert(studioContent.includes('organology'), 'Studio has Organology & Heritage Pioneers tab');
  assert(studioContent.includes('quiz'), 'Studio has Ear & Theory Training Quiz');
}

// 10. Platform Curriculum & Problem Totals Verification
console.log('\n--- 10. Platform Curriculum & Problem Totals Verification ---');
const totalSubjects = SUBJECTS.length;
assert(totalSubjects === 25, `Total accredited subjects is exactly 25 (found: ${totalSubjects})`);

const totalThBranches = thanaweyaCurriculum.branches.length;
assert(totalThBranches === 28, `Total Thanaweya branches is exactly 28 (found: ${totalThBranches})`);

const totalEgBranches = egBacCurriculum.branches.length;
assert(totalEgBranches === 28, `Total EG-Bac branches is exactly 28 (found: ${totalEgBranches})`);

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

assert(platformChapters === 297, `Total platform chapters is exactly 297 (found: ${platformChapters})`);
assert(platformMCQs === 51975, `Total platform databank MCQs is exactly 51,975 (found: ${platformMCQs})`);
assert(platformProblems === 59400, `Total platform problems is exactly 59,400 (found: ${platformProblems})`);

// 11. Subject Stats Verification
console.log('\n--- 11. Subject Stats for Music Theory ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'music_theory');
assert(thStats.totalChapters === 4, `Music Theory Thanaweya chapters: ${thStats.totalChapters} (expected 4)`);
assert(thStats.totalProblems === 800, `Music Theory Thanaweya problems: ${thStats.totalProblems} (expected 800)`);

const egStats = getSubjectStats(egBacCurriculum, 'music_theory');
assert(egStats.totalChapters === 4, `Music Theory EG-Bac chapters: ${egStats.totalChapters} (expected 4)`);
assert(egStats.totalProblems === 800, `Music Theory EG-Bac problems: ${egStats.totalProblems} (expected 800)`);

assert(thStats.totalChapters + egStats.totalChapters === 8, `Music Theory combined chapters: ${thStats.totalChapters + egStats.totalChapters} (expected 8)`);
assert(thStats.totalProblems + egStats.totalProblems === 1600, `Music Theory combined problems: ${thStats.totalProblems + egStats.totalProblems} (expected 1,600)`);

console.log(`\n======================================================`);
if (errors === 0) {
  console.log(`🎉 ALL 11 VERIFICATION CATEGORIES PASSED WITH 0 ERRORS!`);
  console.log(`🎵 Music Theory & Arab/Western Musicology is 100% Accredited as the 25th Core Subject.`);
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERRORS!`);
  process.exit(1);
}
