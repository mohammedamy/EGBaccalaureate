import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';

console.log('--- VERIFYING MODERN & CONTEMPORARY EGYPTIAN HISTORY (8TH CORE SUBJECT) ---');

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
const historySubject = SUBJECTS.find(s => s.id === 'history');
assert(!!historySubject, 'Subject definition for "history" found in SUBJECTS');
if (historySubject) {
  assert(historySubject.titleEn === 'Modern & Contemporary Egyptian History', 'Bilingual titleEn matches');
  assert(historySubject.titleAr === 'تاريخ مصر الحديث والمعاصر', 'Bilingual titleAr matches');
  assert(historySubject.emoji === '🏛️', `Emoji matches landmark (found: ${historySubject.emoji})`);
  assert(historySubject.iconName === 'Landmark', `IconName is Landmark (found: ${historySubject.iconName})`);
  assert(historySubject.badgeColor === 'amber', 'Badge color is amber');
  assert(historySubject.branchIds.thanaweya.includes('thanaweya_history'), 'thanaweya_history registered in branchIds.thanaweya');
  assert(historySubject.branchIds.egbac.includes('egbac_history'), 'egbac_history registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya History Branch Verification ---');
const thHistory = thanaweyaCurriculum.branches.find(b => b.id === 'thanaweya_history');
assert(!!thHistory, 'thanaweya_history branch present in thanaweyaCurriculum');
if (thHistory) {
  assert(thHistory.chapters.length === 8, `Thanaweya history has exactly 8 chapters (found: ${thHistory.chapters.length})`);
  
  // Chapter 1
  const ch1 = thHistory.chapters[0];
  assert(ch1.id === 'th_hist_ch1', 'Chapter 1 ID is th_hist_ch1');
  assert(ch1.isFullyEquipped === true, 'Chapter 1 marked isFullyEquipped');
  assert(ch1.lessons.length === 3, `Chapter 1 has 3 lessons (found: ${ch1.lessons.length})`);
  
  for (let i = 0; i < ch1.lessons.length; i++) {
    const l = ch1.lessons[i];
    assert(!!l.titleEn && !!l.titleAr, `Lesson ${i + 1} has bilingual titles`);
    assert(!!l.summaryEn && !!l.summaryAr, `Lesson ${i + 1} has bilingual summaries`);
    assert(!!l.theoryContentEn && !!l.theoryContentAr, `Lesson ${i + 1} has comprehensive theory content`);
    assert(!!l.moeRef, `Lesson ${i + 1} has MoEReference`);
    assert(!!l.lessonPlan, `Lesson ${i + 1} has TeacherLessonPlan`);
  }

  // Solved Examples & Exercises
  assert(ch1.solvedExamples?.length === 10, `Chapter 1 has 10 Solved Examples (found: ${ch1.solvedExamples?.length})`);
  assert(ch1.exerciseProblems?.length === 15, `Chapter 1 has 15 Exercises (found: ${ch1.exerciseProblems?.length})`);

  // Databank
  assert(!!ch1.databank, 'Chapter 1 has databank');
  if (ch1.databank) {
    const easyCount = ch1.databank.easy?.length || 0;
    const medCount = ch1.databank.medium?.length || 0;
    const hotsCount = ch1.databank.hots?.length || 0;
    const totalMCQ = easyCount + medCount + hotsCount;
    assert(easyCount === 58, `Chapter 1 has 58 Easy MCQs (found: ${easyCount})`);
    assert(medCount === 59, `Chapter 1 has 59 Medium MCQs (found: ${medCount})`);
    assert(hotsCount === 58, `Chapter 1 has 58 HOTS MCQs (found: ${hotsCount})`);
    assert(totalMCQ === 175, `Chapter 1 has 175 total Databank MCQs (found: ${totalMCQ})`);
  }

  // Chapter 2
  const ch2 = thHistory.chapters[1];
  assert(ch2.id === 'th_hist_ch2', 'Chapter 2 ID is th_hist_ch2');
  assert(ch2.isFullyEquipped === true, 'Chapter 2 marked isFullyEquipped');
  assert(ch2.lessons.length === 6, `Chapter 2 has 6 lessons (found: ${ch2.lessons.length})`);
  
  for (let i = 0; i < ch2.lessons.length; i++) {
    const l = ch2.lessons[i];
    assert(!!l.titleEn && !!l.titleAr, `Ch2 Lesson ${i + 1} has bilingual titles`);
    assert(!!l.summaryEn && !!l.summaryAr, `Ch2 Lesson ${i + 1} has bilingual summaries`);
    assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch2 Lesson ${i + 1} has comprehensive theory content`);
    assert(!!l.moeRef, `Ch2 Lesson ${i + 1} has MoEReference`);
    assert(!!l.lessonPlan, `Ch2 Lesson ${i + 1} has TeacherLessonPlan`);
  }

  assert(ch2.solvedExamples?.length === 10, `Chapter 2 has 10 Solved Examples (found: ${ch2.solvedExamples?.length})`);
  assert(ch2.exerciseProblems?.length === 15, `Chapter 2 has 15 Exercises (found: ${ch2.exerciseProblems?.length})`);

  assert(!!ch2.databank, 'Chapter 2 has databank');
  if (ch2.databank) {
    const easyCount = ch2.databank.easy?.length || 0;
    const medCount = ch2.databank.medium?.length || 0;
    const hotsCount = ch2.databank.hots?.length || 0;
    const totalMCQ = easyCount + medCount + hotsCount;
    assert(easyCount === 58, `Chapter 2 has 58 Easy MCQs (found: ${easyCount})`);
    assert(medCount === 59, `Chapter 2 has 59 Medium MCQs (found: ${medCount})`);
    assert(hotsCount === 58, `Chapter 2 has 58 HOTS MCQs (found: ${hotsCount})`);
    assert(totalMCQ === 175, `Chapter 2 has 175 total Databank MCQs (found: ${totalMCQ})`);
    // Chapter 3
    const ch3 = thHistory.chapters[2];
    assert(ch3.id === 'th_hist_ch3', 'Chapter 3 ID is th_hist_ch3');
    assert(ch3.isFullyEquipped === true, 'Chapter 3 marked isFullyEquipped');
    assert(ch3.lessons.length === 5, `Chapter 3 has 5 lessons (found: ${ch3.lessons.length})`);
    
    for (let i = 0; i < ch3.lessons.length; i++) {
      const l = ch3.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch3 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch3 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch3 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch3 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch3 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch3.solvedExamples?.length === 10, `Chapter 3 has 10 Solved Examples (found: ${ch3.solvedExamples?.length})`);
    assert(ch3.exerciseProblems?.length === 15, `Chapter 3 has 15 Exercises (found: ${ch3.exerciseProblems?.length})`);

    assert(!!ch3.databank, 'Chapter 3 has databank');
    if (ch3.databank) {
      const easyCount = ch3.databank.easy?.length || 0;
      const medCount = ch3.databank.medium?.length || 0;
      const hotsCount = ch3.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 3 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 3 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 3 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 3 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }
    // Chapter 4
    const ch4 = thHistory.chapters[3];
    assert(ch4.id === 'th_hist_ch4', 'Chapter 4 ID is th_hist_ch4');
    assert(ch4.isFullyEquipped === true, 'Chapter 4 marked isFullyEquipped');
    assert(ch4.lessons.length === 5, `Chapter 4 has 5 lessons (found: ${ch4.lessons.length})`);
    
    for (let i = 0; i < ch4.lessons.length; i++) {
      const l = ch4.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch4 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch4 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch4 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch4 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch4 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch4.solvedExamples?.length === 10, `Chapter 4 has 10 Solved Examples (found: ${ch4.solvedExamples?.length})`);
    assert(ch4.exerciseProblems?.length === 15, `Chapter 4 has 15 Exercises (found: ${ch4.exerciseProblems?.length})`);

    assert(!!ch4.databank, 'Chapter 4 has databank');
    if (ch4.databank) {
      const easyCount = ch4.databank.easy?.length || 0;
      const medCount = ch4.databank.medium?.length || 0;
      const hotsCount = ch4.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 4 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 4 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 4 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 4 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }

    // Chapter 5
    const ch5 = thHistory.chapters[4];
    assert(ch5.id === 'th_hist_ch5', 'Chapter 5 ID is th_hist_ch5');
    assert(ch5.isFullyEquipped === true, 'Chapter 5 marked isFullyEquipped');
    assert(ch5.lessons.length === 5, `Chapter 5 has 5 lessons (found: ${ch5.lessons.length})`);
    
    for (let i = 0; i < ch5.lessons.length; i++) {
      const l = ch5.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch5 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch5 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch5 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch5 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch5 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch5.solvedExamples?.length === 10, `Chapter 5 has 10 Solved Examples (found: ${ch5.solvedExamples?.length})`);
    assert(ch5.exerciseProblems?.length === 15, `Chapter 5 has 15 Exercises (found: ${ch5.exerciseProblems?.length})`);

    assert(!!ch5.databank, 'Chapter 5 has databank');
    if (ch5.databank) {
      const easyCount = ch5.databank.easy?.length || 0;
      const medCount = ch5.databank.medium?.length || 0;
      const hotsCount = ch5.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 5 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 5 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 5 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 5 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }

    // Chapter 6
    const ch6 = thHistory.chapters[5];
    assert(ch6.id === 'th_hist_ch6', 'Chapter 6 ID is th_hist_ch6');
    assert(ch6.isFullyEquipped === true, 'Chapter 6 marked isFullyEquipped');
    assert(ch6.lessons.length === 5, `Chapter 6 has 5 lessons (found: ${ch6.lessons.length})`);
    
    for (let i = 0; i < ch6.lessons.length; i++) {
      const l = ch6.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch6 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch6 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch6 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch6 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch6 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch6.solvedExamples?.length === 10, `Chapter 6 has 10 Solved Examples (found: ${ch6.solvedExamples?.length})`);
    assert(ch6.exerciseProblems?.length === 15, `Chapter 6 has 15 Exercises (found: ${ch6.exerciseProblems?.length})`);

    assert(!!ch6.databank, 'Chapter 6 has databank');
    if (ch6.databank) {
      const easyCount = ch6.databank.easy?.length || 0;
      const medCount = ch6.databank.medium?.length || 0;
      const hotsCount = ch6.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 6 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 6 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 6 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 6 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }

    // Chapter 7
    const ch7 = thHistory.chapters[6];
    assert(ch7.id === 'th_hist_ch7', 'Chapter 7 ID is th_hist_ch7');
    assert(ch7.isFullyEquipped === true, 'Chapter 7 marked isFullyEquipped');
    assert(ch7.lessons.length === 6, `Chapter 7 has 6 lessons (found: ${ch7.lessons.length})`);
    
    for (let i = 0; i < ch7.lessons.length; i++) {
      const l = ch7.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch7 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch7 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch7 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch7 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch7 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch7.solvedExamples?.length === 10, `Chapter 7 has 10 Solved Examples (found: ${ch7.solvedExamples?.length})`);
    assert(ch7.exerciseProblems?.length === 15, `Chapter 7 has 15 Exercises (found: ${ch7.exerciseProblems?.length})`);

    assert(!!ch7.databank, 'Chapter 7 has databank');
    if (ch7.databank) {
      const easyCount = ch7.databank.easy?.length || 0;
      const medCount = ch7.databank.medium?.length || 0;
      const hotsCount = ch7.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 7 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 7 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 7 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 7 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }

    // Chapter 8
    const ch8 = thHistory.chapters[7];
    assert(ch8.id === 'th_hist_ch8', 'Chapter 8 ID is th_hist_ch8');
    assert(ch8.isFullyEquipped === true, 'Chapter 8 marked isFullyEquipped');
    assert(ch8.lessons.length === 2, `Chapter 8 has 2 lessons (found: ${ch8.lessons.length})`);
    
    for (let i = 0; i < ch8.lessons.length; i++) {
      const l = ch8.lessons[i];
      assert(!!l.titleEn && !!l.titleAr, `Ch8 Lesson ${i + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch8 Lesson ${i + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch8 Lesson ${i + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch8 Lesson ${i + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch8 Lesson ${i + 1} has TeacherLessonPlan`);
    }

    assert(ch8.solvedExamples?.length === 10, `Chapter 8 has 10 Solved Examples (found: ${ch8.solvedExamples?.length})`);
    assert(ch8.exerciseProblems?.length === 15, `Chapter 8 has 15 Exercises (found: ${ch8.exerciseProblems?.length})`);

    assert(!!ch8.databank, 'Chapter 8 has databank');
    if (ch8.databank) {
      const easyCount = ch8.databank.easy?.length || 0;
      const medCount = ch8.databank.medium?.length || 0;
      const hotsCount = ch8.databank.hots?.length || 0;
      const totalMCQ = easyCount + medCount + hotsCount;
      assert(easyCount === 58, `Chapter 8 has 58 Easy MCQs (found: ${easyCount})`);
      assert(medCount === 59, `Chapter 8 has 59 Medium MCQs (found: ${medCount})`);
      assert(hotsCount === 58, `Chapter 8 has 58 HOTS MCQs (found: ${hotsCount})`);
      assert(totalMCQ === 175, `Chapter 8 has 175 total Databank MCQs (found: ${totalMCQ})`);
    }
  }
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac History Branch Verification ---');
const egBacHistory = egBacCurriculum.branches.find(b => b.id === 'egbac_history');
assert(!!egBacHistory, 'egbac_history branch present in egBacCurriculum');
if (egBacHistory) {
  assert(egBacHistory.chapters.length === 8, `EG-Bac history has exactly 8 chapters (found: ${egBacHistory.chapters.length})`);
  
  const ch1 = egBacHistory.chapters[0];
  assert(ch1.id === 'th_hist_ch1', 'EG-Bac Chapter 1 ID is th_hist_ch1');
  assert(ch1.isFullyEquipped === true, 'EG-Bac Chapter 1 marked isFullyEquipped');
  assert(ch1.solvedExamples?.length === 10, `EG-Bac Chapter 1 has 10 Solved Examples (found: ${ch1.solvedExamples?.length})`);
  assert(ch1.exerciseProblems?.length === 15, `EG-Bac Chapter 1 has 15 Exercises (found: ${ch1.exerciseProblems?.length})`);
  assert(!!ch1.databank, 'EG-Bac Chapter 1 has databank');

  const ch2 = egBacHistory.chapters[1];
  assert(ch2.id === 'th_hist_ch2', 'EG-Bac Chapter 2 ID is th_hist_ch2');
  assert(ch2.isFullyEquipped === true, 'EG-Bac Chapter 2 marked isFullyEquipped');
  assert(ch2.solvedExamples?.length === 10, `EG-Bac Chapter 2 has 10 Solved Examples (found: ${ch2.solvedExamples?.length})`);
  assert(ch2.exerciseProblems?.length === 15, `EG-Bac Chapter 2 has 15 Exercises (found: ${ch2.exerciseProblems?.length})`);
  assert(!!ch2.databank, 'EG-Bac Chapter 2 has databank');

  const ch3 = egBacHistory.chapters[2];
  assert(ch3.id === 'th_hist_ch3', 'EG-Bac Chapter 3 ID is th_hist_ch3');
  assert(ch3.isFullyEquipped === true, 'EG-Bac Chapter 3 marked isFullyEquipped');
  assert(ch3.solvedExamples?.length === 10, `EG-Bac Chapter 3 has 10 Solved Examples (found: ${ch3.solvedExamples?.length})`);
  assert(ch3.exerciseProblems?.length === 15, `EG-Bac Chapter 3 has 15 Exercises (found: ${ch3.exerciseProblems?.length})`);
  assert(!!ch3.databank, 'EG-Bac Chapter 3 has databank');

  const ch4 = egBacHistory.chapters[3];
  assert(ch4.id === 'th_hist_ch4', 'EG-Bac Chapter 4 ID is th_hist_ch4');
  assert(ch4.isFullyEquipped === true, 'EG-Bac Chapter 4 marked isFullyEquipped');
  assert(ch4.solvedExamples?.length === 10, `EG-Bac Chapter 4 has 10 Solved Examples (found: ${ch4.solvedExamples?.length})`);
  assert(ch4.exerciseProblems?.length === 15, `EG-Bac Chapter 4 has 15 Exercises (found: ${ch4.exerciseProblems?.length})`);
  assert(!!ch4.databank, 'EG-Bac Chapter 4 has databank');

  const ch5 = egBacHistory.chapters[4];
  assert(ch5.id === 'th_hist_ch5', 'EG-Bac Chapter 5 ID is th_hist_ch5');
  assert(ch5.isFullyEquipped === true, 'EG-Bac Chapter 5 marked isFullyEquipped');
  assert(ch5.solvedExamples?.length === 10, `EG-Bac Chapter 5 has 10 Solved Examples (found: ${ch5.solvedExamples?.length})`);
  assert(ch5.exerciseProblems?.length === 15, `EG-Bac Chapter 5 has 15 Exercises (found: ${ch5.exerciseProblems?.length})`);
  assert(!!ch5.databank, 'EG-Bac Chapter 5 has databank');

  const ch6 = egBacHistory.chapters[5];
  assert(ch6.id === 'th_hist_ch6', 'EG-Bac Chapter 6 ID is th_hist_ch6');
  assert(ch6.isFullyEquipped === true, 'EG-Bac Chapter 6 marked isFullyEquipped');
  assert(ch6.solvedExamples?.length === 10, `EG-Bac Chapter 6 has 10 Solved Examples (found: ${ch6.solvedExamples?.length})`);
  assert(ch6.exerciseProblems?.length === 15, `EG-Bac Chapter 6 has 15 Exercises (found: ${ch6.exerciseProblems?.length})`);
  assert(!!ch6.databank, 'EG-Bac Chapter 6 has databank');

  const ch7 = egBacHistory.chapters[6];
  assert(ch7.id === 'th_hist_ch7', 'EG-Bac Chapter 7 ID is th_hist_ch7');
  assert(ch7.isFullyEquipped === true, 'EG-Bac Chapter 7 marked isFullyEquipped');
  assert(ch7.solvedExamples?.length === 10, `EG-Bac Chapter 7 has 10 Solved Examples (found: ${ch7.solvedExamples?.length})`);
  assert(ch7.exerciseProblems?.length === 15, `EG-Bac Chapter 7 has 15 Exercises (found: ${ch7.exerciseProblems?.length})`);
  assert(!!ch7.databank, 'EG-Bac Chapter 7 has databank');

  const ch8 = egBacHistory.chapters[7];
  assert(ch8.id === 'th_hist_ch8', 'EG-Bac Chapter 8 ID is th_hist_ch8');
  assert(ch8.isFullyEquipped === true, 'EG-Bac Chapter 8 marked isFullyEquipped');
  assert(ch8.solvedExamples?.length === 10, `EG-Bac Chapter 8 has 10 Solved Examples (found: ${ch8.solvedExamples?.length})`);
  assert(ch8.exerciseProblems?.length === 15, `EG-Bac Chapter 8 has 15 Exercises (found: ${ch8.exerciseProblems?.length})`);
  assert(!!ch8.databank, 'EG-Bac Chapter 8 has databank');
}

// 4. Official Books Verification
console.log('\n--- 4. Official Books & PDF Compendiums Verification ---');
const thBook = getOfficialBookById('th-history-g12');
assert(!!thBook, 'Official Book "th-history-g12" registered');
if (thBook) {
  assert(thBook.subjectId === 'history', 'th-history-g12 subjectId is history');
  assert(thBook.category === 'history', 'th-history-g12 category is history');
  assert(thBook.branchId === 'thanaweya_history', 'th-history-g12 branchId is thanaweya_history');
  assert(thBook.chapters.length === 8, 'th-history-g12 outlines 8 chapters');
  const pdfPath = path.join(process.cwd(), 'public', thBook.downloadUrl);
  assert(fs.existsSync(pdfPath), `th-history-g12 PDF exists on disk: ${thBook.downloadUrl}`);
}

const egBacBook = getOfficialBookById('egbac-history-g12');
assert(!!egBacBook, 'Official Book "egbac-history-g12" registered');
if (egBacBook) {
  assert(egBacBook.subjectId === 'history', 'egbac-history-g12 subjectId is history');
  assert(egBacBook.category === 'history', 'egbac-history-g12 category is history');
  assert(egBacBook.branchId === 'egbac_history', 'egbac-history-g12 branchId is egbac_history');
  assert(egBacBook.chapters.length === 8, 'egbac-history-g12 outlines 8 chapters');
  const pdfPath = path.join(process.cwd(), 'public', egBacBook.downloadUrl);
  assert(fs.existsSync(pdfPath), `egbac-history-g12 PDF exists on disk: ${egBacBook.downloadUrl}`);
}

const thBranchBook = getOfficialBookByBranch('thanaweya_history');
assert(thBranchBook?.id === 'th-history-g12', 'getOfficialBookByBranch("thanaweya_history") returns th-history-g12');

const egBranchBook = getOfficialBookByBranch('egbac_history');
assert(egBranchBook?.id === 'egbac-history-g12', 'getOfficialBookByBranch("egbac_history") returns egbac-history-g12');

const historyBooks = getOfficialBooksBySubject('history');
assert(historyBooks.length === 2, `getOfficialBooksBySubject("history") returns 2 books (found: ${historyBooks.length})`);

// 5. Subject Stats Verification
console.log('\n--- 5. Subject Stats Verification ---');
const thHistStats = getSubjectStats(thanaweyaCurriculum, 'history');
assert(thHistStats.totalChapters === 8, `Thanaweya history has 8 chapters (found: ${thHistStats.totalChapters})`);
assert(thHistStats.totalProblems === 1600, `Thanaweya history has 1600 problems (found: ${thHistStats.totalProblems})`);

const egBacHistStats = getSubjectStats(egBacCurriculum, 'history');
assert(egBacHistStats.totalChapters === 8, `EG-Bac history has 8 chapters (found: ${egBacHistStats.totalChapters})`);
assert(egBacHistStats.totalProblems === 1600, `EG-Bac history has 1600 problems (found: ${egBacHistStats.totalProblems})`);

console.log('\n--- 6. All 8 Chapters Fully Equipped Verification ---');
if (thHistory) {
  for (let i = 0; i < 8; i++) {
    assert(thHistory.chapters[i].isFullyEquipped === true, `Thanaweya Chapter ${i + 1} (${thHistory.chapters[i].id}) is fully equipped`);
  }
}
if (egBacHistory) {
  for (let i = 0; i < 8; i++) {
    assert(egBacHistory.chapters[i].isFullyEquipped === true, `EG-Bac Chapter ${i + 1} (${egBacHistory.chapters[i].id}) is fully equipped`);
  }
}

console.log('\n--- 7. History Interactive Lab & Studio Verification ---');
const historyLabDataPath = path.join(process.cwd(), 'src', 'data', 'historyLab', 'historyTimelineLabData.ts');
assert(fs.existsSync(historyLabDataPath), 'src/data/historyLab/historyTimelineLabData.ts exists on disk');

const historyStudioPath = path.join(process.cwd(), 'src', 'components', 'labs', 'HistoryTimelineStudio.tsx');
assert(fs.existsSync(historyStudioPath), 'src/components/labs/HistoryTimelineStudio.tsx exists on disk');

const lessonViewPath = path.join(process.cwd(), 'src', 'components', 'LessonView.tsx');
const lessonViewSrc = fs.readFileSync(lessonViewPath, 'utf8');
assert(lessonViewSrc.includes("import { HistoryTimelineStudio } from './labs/HistoryTimelineStudio';"), 'LessonView imports HistoryTimelineStudio');
assert(lessonViewSrc.includes("case 'history_timeline_lab':"), 'LessonView handles case history_timeline_lab');
assert(lessonViewSrc.includes("<HistoryTimelineStudio"), 'LessonView renders <HistoryTimelineStudio');

import {
  HISTORY_TIMELINE_EVENTS,
  STRATEGIC_MAP_LOCATIONS,
  PRIMARY_TREATIES_DOCUMENTS,
  CAUSE_EFFECT_CHAINS,
  MINISTERIAL_HISTORY_CHALLENGE,
} from '../src/data/historyLab/historyTimelineLabData';

assert(HISTORY_TIMELINE_EVENTS.length >= 18, `Expected at least 18 timeline events, found ${HISTORY_TIMELINE_EVENTS.length}`);
const coveredChapters = new Set(HISTORY_TIMELINE_EVENTS.map(e => e.chapter));
for (let c = 1; c <= 8; c++) {
  assert(coveredChapters.has(c), `Timeline events cover Chapter ${c}`);
}

assert(STRATEGIC_MAP_LOCATIONS.length >= 9, `Expected at least 9 strategic locations, found ${STRATEGIC_MAP_LOCATIONS.length}`);
for (const loc of STRATEGIC_MAP_LOCATIONS) {
  assert(loc.x >= 0 && loc.x <= 100 && loc.y >= 0 && loc.y <= 100, `Location ${loc.id} has valid coordinates (${loc.x}, ${loc.y})`);
  assert(!!loc.nameEn && !!loc.nameAr, `Location ${loc.id} has bilingual names`);
  assert(!!loc.battleDetailsEn && !!loc.battleDetailsAr, `Location ${loc.id} has bilingual battle details`);
  assert(!!loc.examTakeawayEn && !!loc.examTakeawayAr, `Location ${loc.id} has bilingual exam takeaways`);
}

assert(PRIMARY_TREATIES_DOCUMENTS.length >= 5, `Expected at least 5 treaties, found ${PRIMARY_TREATIES_DOCUMENTS.length}`);
for (const tr of PRIMARY_TREATIES_DOCUMENTS) {
  assert(!!tr.titleEn && !!tr.titleAr, `Treaty ${tr.id} has bilingual titles`);
  assert(tr.keyClausesEn.length >= 3 && tr.keyClausesAr.length >= 3, `Treaty ${tr.id} has at least 3 clauses`);
  assert(!!tr.ministerialTrapEn && !!tr.ministerialTrapAr, `Treaty ${tr.id} has bilingual ministerial traps`);
}

assert(CAUSE_EFFECT_CHAINS.length >= 4, `Expected at least 4 causal chains, found ${CAUSE_EFFECT_CHAINS.length}`);
for (const chain of CAUSE_EFFECT_CHAINS) {
  assert(!!chain.rootCauseEn && !!chain.rootCauseAr, `Chain ${chain.id} has rootCause`);
  assert(!!chain.catalystEn && !!chain.catalystAr, `Chain ${chain.id} has catalyst`);
  assert(!!chain.immediateResultEn && !!chain.immediateResultAr, `Chain ${chain.id} has immediateResult`);
  assert(!!chain.longTermImpactEn && !!chain.longTermImpactAr, `Chain ${chain.id} has longTermImpact`);
}

assert(MINISTERIAL_HISTORY_CHALLENGE.length === 10, `Expected 10 challenge quiz items, found ${MINISTERIAL_HISTORY_CHALLENGE.length}`);
for (const q of MINISTERIAL_HISTORY_CHALLENGE) {
  assert(q.optionsEn.length === 4 && q.optionsAr.length === 4, `Quiz item ${q.id} has 4 options`);
  assert(q.correctIndex >= 0 && q.correctIndex <= 3, `Quiz item ${q.id} has valid correctIndex`);
  assert(!!q.explanationEn && !!q.explanationAr, `Quiz item ${q.id} has bilingual explanations`);
}

console.log('\n--- 8. Museum 4K Archival Assets & Specialized Studios Verification ---');
const historyAssetsDir = path.join(process.cwd(), 'src', 'assets', 'historyLab');
const requiredAssets = [
  'rosetta_stone_1799.jpg',
  'treaty_of_london_1840.jpg',
  'suez_canal_inauguration_1869.jpg',
  'october_crossing_barlev_1973.jpg',
];

for (const assetName of requiredAssets) {
  const assetPath = path.join(historyAssetsDir, assetName);
  assert(fs.existsSync(assetPath), `Archival asset exists: ${assetName}`);
  if (fs.existsSync(assetPath)) {
    const stats = fs.statSync(assetPath);
    assert(stats.size > 100 * 1024, `Archival asset ${assetName} has high-res fidelity (>100KB, actual: ${(stats.size / 1024).toFixed(1)} KB)`);
  }
}

const historyStudiosDir = path.join(process.cwd(), 'src', 'components', 'labs', 'history');
const requiredStudios = [
  'RosettaStoneDeciphererStudio.tsx',
  'BarLevCrossingStudio.tsx',
  'HistoricalTreatiesVault.tsx',
  'SuezCanalGeopoliticsViewer.tsx',
];

for (const studioName of requiredStudios) {
  const studioPath = path.join(historyStudiosDir, studioName);
  assert(fs.existsSync(studioPath), `Specialized history studio exists: ${studioName}`);
}

const historyStudioCode = fs.readFileSync(historyStudioPath, 'utf8');
assert(historyStudioCode.includes('RosettaStoneDeciphererStudio'), 'HistoryTimelineStudio mounts RosettaStoneDeciphererStudio');
assert(historyStudioCode.includes('BarLevCrossingStudio'), 'HistoryTimelineStudio mounts BarLevCrossingStudio');
assert(historyStudioCode.includes('HistoricalTreatiesVault'), 'HistoryTimelineStudio mounts HistoricalTreatiesVault');
assert(historyStudioCode.includes('SuezCanalGeopoliticsViewer'), 'HistoryTimelineStudio mounts SuezCanalGeopoliticsViewer');

console.log('\n------------------------------------------------------------');
if (errors > 0) {
  console.error(`💥 Verification completed with ${errors} failures!`);
  process.exit(1);
} else {
  console.log('🎉 ALL HISTORY VERIFICATION CHECKS PASSED WITH 100% SUCCESS!');
}


