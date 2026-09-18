import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { classifySubjectCategory, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('======================================================================');
console.log('--- VERIFYING PSYCHOLOGY & SOCIOLOGY (12TH CORE SUBJECT) ---');
console.log('======================================================================');

let errors = 0;
function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

// 1. Subject Definition Verification in SUBJECTS registry
console.log('\n--- 1. Subject Definition in SUBJECTS ---');
const psychSubject = SUBJECTS.find((s) => s.id === 'psychology');
assert(!!psychSubject, 'Subject definition for "psychology" found in SUBJECTS registry');
if (psychSubject) {
  assert(psychSubject.titleEn === 'Psychology & Sociology', 'Bilingual titleEn matches "Psychology & Sociology"');
  assert(psychSubject.titleAr === 'علم النفس وعلم الاجتماع', 'Bilingual titleAr matches "علم النفس وعلم الاجتماع"');
  assert(psychSubject.emoji === '👥', `Emoji matches users (found: ${psychSubject.emoji})`);
  assert(psychSubject.iconName === 'Users', `IconName is Users (found: ${psychSubject.iconName})`);
  assert(psychSubject.badgeColor === 'pink', 'Badge color is pink');
  assert(psychSubject.branchIds.thanaweya.includes('thanaweya_psychology'), 'thanaweya_psychology registered in branchIds.thanaweya');
  assert(psychSubject.branchIds.egbac.includes('egbac_psychology'), 'egbac_psychology registered in branchIds.egbac');
}

// Helper lookup checks
const byId = getSubjectById('psychology');
assert(byId?.id === 'psychology', 'getSubjectById("psychology") returns valid subject');
const byBranchTh = getSubjectForBranch('thanaweya_psychology');
assert(byBranchTh?.id === 'psychology', 'getSubjectForBranch("thanaweya_psychology") resolves to psychology');
const byBranchEg = getSubjectForBranch('egbac_psychology');
assert(byBranchEg?.id === 'psychology', 'getSubjectForBranch("egbac_psychology") resolves to psychology');

// 2. Thanaweya Branch Verification (1,600 problems)
console.log('\n--- 2. Thanaweya Psychology Branch Verification ---');
const thPsych = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_psychology');
assert(!!thPsych, 'thanaweya_psychology branch present in thanaweyaCurriculum');
if (thPsych) {
  assert(thPsych.chapters.length === 8, `Thanaweya psychology has exactly 8 chapters (found: ${thPsych.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thPsych.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_psych_ch${chNum}`, `Chapter ${chNum} ID is th_psych_ch${chNum}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
    totalThLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch${chNum} Lesson ${lIdx + 1} has TeacherLessonPlan`);
      assert(!!l.worksheet && l.worksheet.problems.length >= 2, `Ch${chNum} Lesson ${lIdx + 1} has active Worksheet`);
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
      assert(mcqCount === 175, `Chapter ${chNum} total MCQs is 175 (found: ${mcqCount})`);
      totalThMCQ += mcqCount;

      // Sample inspect questions for quality
      ch.databank.easy.forEach((q) => {
        assert(!!q.id && !!q.questionEn && !!q.questionAr, `Question ${q.id} has bilingual question text`);
        assert(q.optionsEn?.length === 4 && q.optionsAr?.length === 4, `Question ${q.id} has 4 bilingual options`);
        assert(q.correctIndex !== undefined && q.correctIndex >= 0 && q.correctIndex <= 3, `Question ${q.id} has valid correctIndex`);
      });
    }
  });

  assert(totalThLessons === 16, `Total Thanaweya lessons is 16 (found: ${totalThLessons})`);
  assert(totalThSolved === 80, `Total Thanaweya solved examples is 80 (found: ${totalThSolved})`);
  assert(totalThExercises === 120, `Total Thanaweya exercises is 120 (found: ${totalThExercises})`);
  assert(totalThMCQ === 1400, `Total Thanaweya databank MCQs is 1400 (found: ${totalThMCQ})`);
  const totalThProblems = totalThSolved + totalThExercises + totalThMCQ;
  assert(totalThProblems === 1600, `Total Thanaweya problems is exactly 1,600 (found: ${totalThProblems})`);
}

// 3. EG-Bac Branch Verification (1,600 problems)
console.log('\n--- 3. EG-Bac Psychology Branch Verification ---');
const egPsych = egBacCurriculum.branches.find((b) => b.id === 'egbac_psychology');
assert(!!egPsych, 'egbac_psychology branch present in egBacCurriculum');
if (egPsych) {
  assert(egPsych.chapters.length === 8, `EG-Bac psychology has exactly 8 chapters (found: ${egPsych.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egPsych.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_psych_ch${chNum}`, `Chapter ${chNum} ID is egbac_psych_ch${chNum}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 2, `Chapter ${chNum} has 2 lessons (found: ${ch.lessons.length})`);
    totalEgLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch${chNum} Lesson ${lIdx + 1} has TeacherLessonPlan`);
      assert(!!l.worksheet && l.worksheet.problems.length >= 2, `Ch${chNum} Lesson ${lIdx + 1} has active Worksheet`);
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
      assert(mcqCount === 175, `Chapter ${chNum} total MCQs is 175 (found: ${mcqCount})`);
      totalEgMCQ += mcqCount;

      ch.databank.easy.forEach((q) => {
        assert(!!q.id && !!q.questionEn && !!q.questionAr, `Question ${q.id} has bilingual question text`);
        assert(q.optionsEn?.length === 4 && q.optionsAr?.length === 4, `Question ${q.id} has 4 bilingual options`);
        assert(q.correctIndex !== undefined && q.correctIndex >= 0 && q.correctIndex <= 3, `Question ${q.id} has valid correctIndex`);
      });
    }
  });

  assert(totalEgLessons === 16, `Total EG-Bac lessons is 16 (found: ${totalEgLessons})`);
  assert(totalEgSolved === 80, `Total EG-Bac solved examples is 80 (found: ${totalEgSolved})`);
  assert(totalEgExercises === 120, `Total EG-Bac exercises is 120 (found: ${totalEgExercises})`);
  assert(totalEgMCQ === 1400, `Total EG-Bac databank MCQs is 1400 (found: ${totalEgMCQ})`);
  const totalEgProblems = totalEgSolved + totalEgExercises + totalEgMCQ;
  assert(totalEgProblems === 1600, `Total EG-Bac problems is exactly 1,600 (found: ${totalEgProblems})`);
}

// 4. Cumulative Subject Problems Check
console.log('\n--- 4. Subject Grand Total Problems (3,200) ---');
const psychStats = getSubjectStats(thanaweyaCurriculum, 'psychology');
assert(psychStats.totalChapters === 8, `Thanaweya chapters count is 8 (found: ${psychStats.totalChapters})`);
assert(psychStats.totalProblems === 1600, `Thanaweya problems count is 1,600 (found: ${psychStats.totalProblems})`);

const egPsychStats = getSubjectStats(egBacCurriculum, 'psychology');
assert(egPsychStats.totalChapters === 8, `EG-Bac chapters count is 8 (found: ${egPsychStats.totalChapters})`);
assert(egPsychStats.totalProblems === 1600, `EG-Bac problems count is 1,600 (found: ${egPsychStats.totalProblems})`);

const grandTotalPsychProblems = psychStats.totalProblems + egPsychStats.totalProblems;
assert(grandTotalPsychProblems === 3200, `Grand total Psychology problems across both curricula is 3,200 (found: ${grandTotalPsychProblems})`);

// 5. Official Mock Exam Blueprint Verification
console.log('\n--- 5. Official Mock Exam Blueprint Verification ---');
const mockConfig = getOfficialMockConfig('psychology', 'thanaweya_psychology');
assert(mockConfig.subjectId === 'psychology', 'Mock config subjectId is psychology');
assert(mockConfig.totalQuestions === 46, `Total questions is 46 (found: ${mockConfig.totalQuestions})`);
assert(mockConfig.totalMarks === 60, `Total marks is 60 (found: ${mockConfig.totalMarks})`);
assert(mockConfig.durationMinutes === 180, `Duration is 180 minutes (found: ${mockConfig.durationMinutes})`);
assert(mockConfig.section1Count === 32, `Section 1 has 32 questions @ 1 mark (found: ${mockConfig.section1Count})`);
assert(mockConfig.section2Count === 14, `Section 2 has 14 questions @ 2 marks (found: ${mockConfig.section2Count})`);
const computedMarks = mockConfig.section1Count * 1 + mockConfig.section2Count * 2;
assert(computedMarks === 60, `Calculated marks (32x1 + 14x2) = 60 (found: ${computedMarks})`);

// 6. Official Books Verification
console.log('\n--- 6. Official Books Verification ---');
const thBook = getOfficialBookById('th-psychology-g12');
assert(!!thBook, 'th-psychology-g12 book found in registry');
assert(thBook?.category === 'psychology', 'th-psychology-g12 category is psychology');
assert(thBook?.subjectId === 'psychology', 'th-psychology-g12 subjectId is psychology');
assert(thBook?.chapters.length === 8, `th-psychology-g12 has 8 chapters (found: ${thBook?.chapters.length})`);

const egBook = getOfficialBookById('egbac-psychology-g12');
assert(!!egBook, 'egbac-psychology-g12 book found in registry');
assert(egBook?.category === 'psychology', 'egbac-psychology-g12 category is psychology');
assert(egBook?.subjectId === 'psychology', 'egbac-psychology-g12 subjectId is psychology');
assert(egBook?.chapters.length === 8, `egbac-psychology-g12 has 8 chapters (found: ${egBook?.chapters.length})`);

const bookByBranchTh = getOfficialBookByBranch('thanaweya_psychology');
assert(bookByBranchTh?.id === 'th-psychology-g12', 'getOfficialBookByBranch("thanaweya_psychology") resolves to th-psychology-g12');

const bookByBranchEg = getOfficialBookByBranch('egbac_psychology');
assert(bookByBranchEg?.id === 'egbac-psychology-g12', 'getOfficialBookByBranch("egbac_psychology") resolves to egbac-psychology-g12');

const psychBooks = getOfficialBooksBySubject('psychology');
assert(psychBooks.length === 2, `getOfficialBooksBySubject("psychology") returns exactly 2 books (found: ${psychBooks.length})`);

// 7. Student Analytics & Radar Dimensions Verification
console.log('\n--- 7. Student Analytics & Radar Dimensions ---');
assert(classifySubjectCategory('علم النفس', 'Psychology', 'نظريات التعلم', 'th_psych') === 'psychology', 'Classifies Arabic psychology to "psychology"');
assert(classifySubjectCategory('علم الاجتماع', 'Sociology', 'العمليات الاجتماعية', 'egbac_psych') === 'psychology', 'Classifies sociology to "psychology"');
assert(classifySubjectCategory('المنهج', 'Behavioral', 'كيرت ليفين الصراع', 'psych') === 'psychology', 'Classifies Lewin conflict to "psychology"');

const humanitiesRadar = getMasteryRadarData(undefined, 'humanities');
const hasPsychInHumanities = humanitiesRadar.some((p) => p.dimensionKey === 'psychology');
assert(hasPsychInHumanities, 'humanities radar track contains psychology dimension');
assert(humanitiesRadar.length === 7, `humanities radar track has 7 dimensions (found: ${humanitiesRadar.length})`);

const all12Radar = getMasteryRadarData(undefined, 'all12');
assert(all12Radar.length === 12, `all12 radar track has 12 dimensions (found: ${all12Radar.length})`);
const hasPsychInAll12 = all12Radar.some((p) => p.dimensionKey === 'psychology');
assert(hasPsychInAll12, 'all12 radar track contains psychology dimension');

// Final Summary
console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL PSYCHOLOGY & SOCIOLOGY VERIFICATION CHECKS PASSED PERFECTLY (0 ERRORS)!');
} else {
  console.error(`💥 VERIFICATION COMPLETED WITH ${errors} ERROR(S) - MUST BE RESOLVED.`);
}
console.log('======================================================================\n');
process.exit(errors === 0 ? 0 : 1);
