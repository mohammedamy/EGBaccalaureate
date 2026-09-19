import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING GERMAN LANGUAGE (16TH ACCREDITED CORE SUBJECT) ---');

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
const deSubject = SUBJECTS.find((s) => s.id === 'german');
assert(!!deSubject, 'Subject definition for "german" found in SUBJECTS');
if (deSubject) {
  assert(deSubject.titleEn === 'German Language (Deutsch)', `Bilingual titleEn matches: ${deSubject.titleEn}`);
  assert(deSubject.titleAr === 'اللغة الألمانية (اللغة الأجنبية الثانية)', `Bilingual titleAr matches: ${deSubject.titleAr}`);
  assert(deSubject.emoji === '🇩🇪', `Emoji matches German flag (found: ${deSubject.emoji})`);
  assert(deSubject.iconName === 'Languages', `IconName is Languages (found: ${deSubject.iconName})`);
  assert(deSubject.badgeColor === 'amber', `Badge color is amber (found: ${deSubject.badgeColor})`);
  assert(deSubject.branchIds.thanaweya.includes('thanaweya_german'), 'thanaweya_german registered in branchIds.thanaweya');
  assert(deSubject.branchIds.egbac.includes('egbac_german'), 'egbac_german registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya German Branch Verification ---');
const thDe = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_german');
assert(!!thDe, 'thanaweya_german branch present in thanaweyaCurriculum');
if (thDe) {
  assert(thDe.chapters.length === 4, `Thanaweya German has exactly 4 chapters (found: ${thDe.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thDe.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_de_ch${chNum}`, `Chapter ${chNum} ID is th_de_ch${chNum}`);
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
console.log('\n--- 3. EG-Bac German Branch Verification ---');
const egDe = egBacCurriculum.branches.find((b) => b.id === 'egbac_german');
assert(!!egDe, 'egbac_german branch present in egBacCurriculum');
if (egDe) {
  assert(egDe.chapters.length === 4, `EG-Bac German has exactly 4 chapters (found: ${egDe.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egDe.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_de_ch${chNum}`, `Chapter ${chNum} ID is egbac_de_ch${chNum}`);
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

// 4. Combined 1,600 Problems & 8 Chapters Verification
console.log('\n--- 4. Combined Subject Metrics Verification ---');
const totalChapters = (thDe?.chapters.length || 0) + (egDe?.chapters.length || 0);
assert(totalChapters === 8, `Combined German chapters: ${totalChapters} (expected 8)`);

const thProblems = getSubjectStats(thanaweyaCurriculum, 'german');
const egProblems = getSubjectStats(egBacCurriculum, 'german');
assert(thProblems.totalProblems === 800, `Thanaweya German problems: ${thProblems.totalProblems} (expected 800)`);
assert(egProblems.totalProblems === 800, `EG-Bac German problems: ${egProblems.totalProblems} (expected 800)`);
assert(thProblems.totalProblems + egProblems.totalProblems === 1600, `Total German problems: ${thProblems.totalProblems + egProblems.totalProblems} (expected 1600)`);

// 5. Official Books Verification
console.log('\n--- 5. Official Books Verification ---');
const thBook = getOfficialBookById('th-german-g12');
assert(!!thBook, 'Official Book "th-german-g12" registered');
if (thBook) {
  assert(thBook.chapters.length === 4, `th-german-g12 has 4 chapters (found: ${thBook.chapters.length})`);
  assert(thBook.branchId === 'thanaweya_german', `BranchId is thanaweya_german (found: ${thBook.branchId})`);
  assert(thBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const egBook = getOfficialBookById('egbac-german-g12');
assert(!!egBook, 'Official Book "egbac-german-g12" registered');
if (egBook) {
  assert(egBook.chapters.length === 4, `egbac-german-g12 has 4 chapters (found: ${egBook.chapters.length})`);
  assert(egBook.branchId === 'egbac_german', `BranchId is egbac_german (found: ${egBook.branchId})`);
  assert(egBook.gradeEn.includes('12'), `Grade is 12`);
}

const booksByBranchTh = getOfficialBookByBranch('thanaweya_german');
assert(booksByBranchTh?.id === 'th-german-g12', 'getOfficialBookByBranch resolves thanaweya_german');

const booksByBranchEg = getOfficialBookByBranch('egbac_german');
assert(booksByBranchEg?.id === 'egbac-german-g12', 'getOfficialBookByBranch resolves egbac_german');

const booksBySubject = getOfficialBooksBySubject('german');
assert(booksBySubject.length === 2, `getOfficialBooksBySubject returns 2 books (found: ${booksBySubject.length})`);
assert(officialBooksList.length === 41, `Total official books list is 41 (found: ${officialBooksList.length})`);

// 6. Official Mock Exam Blueprint Verification
console.log('\n--- 6. Official Mock Exam Blueprint Verification ---');
const mockCfgSubject = getOfficialMockConfig('german');
assert(!!mockCfgSubject, 'Mock config resolved for subject "german"');
if (mockCfgSubject) {
  assert(mockCfgSubject.totalQuestions === 31, `Mock exam has 31 questions (found: ${mockCfgSubject.totalQuestions})`);
  assert(mockCfgSubject.totalMarks === 40, `Mock exam total marks is 40 (found: ${mockCfgSubject.totalMarks})`);
  assert(mockCfgSubject.durationMinutes === 120, `Mock exam duration is 120 minutes (found: ${mockCfgSubject.durationMinutes})`);
  assert(mockCfgSubject.section1Count === 22, `Section 1: 22 questions @ 1 mark (found: ${mockCfgSubject.section1Count})`);
  assert(mockCfgSubject.section2Count === 9, `Section 2: 9 questions @ 2 marks (found: ${mockCfgSubject.section2Count})`);
}

const mockCfgBranchTh = getOfficialMockConfig('thanaweya_german');
assert(mockCfgBranchTh.totalMarks === 40 && mockCfgBranchTh.totalQuestions === 31, 'Mock config correctly resolved for thanaweya_german branch');

const mockCfgBranchEg = getOfficialMockConfig('egbac_german');
assert(mockCfgBranchEg.totalMarks === 40 && mockCfgBranchEg.totalQuestions === 31, 'Mock config correctly resolved for egbac_german branch');

// 7. Past Exam Papers Verification
console.log('\n--- 7. Past Exam Papers Verification ---');
const dePastPapers = getPastExamPapers({ subject: 'german' });
assert(dePastPapers.length === 6, `Found 6 past exam papers for german (got ${dePastPapers.length})`);
dePastPapers.forEach((paper) => {
  assert(paper.totalQuestions === 31, `Paper "${paper.titleEn}" has 31 totalQuestions (got ${paper.totalQuestions})`);
  assert(paper.totalMarks === 40, `Paper "${paper.titleEn}" has 40 total marks (got ${paper.totalMarks})`);
  assert(paper.durationMinutes === 120, `Paper "${paper.titleEn}" duration is 120 min (got ${paper.durationMinutes})`);
  const generatedQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
  assert(generatedQs.length === 31, `Paper "${paper.titleEn}" generates 31 questions (got ${generatedQs.length})`);
});
const allPapers = PAST_EXAM_PAPERS;
assert(allPapers.length === 114, `Total past exam papers across platform equals 114 (got ${allPapers.length})`);

// 8. Interactive Studio & Virtual Labs Hub Verification
console.log('\n--- 8. Virtual Labs Hub & Interactive Studio Verification ---');
const virtualLabsHubPath = path.resolve(process.cwd(), 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const vHubContent = fs.readFileSync(virtualLabsHubPath, 'utf8');
  assert(vHubContent.includes('GermanLanguageStudio'), 'VirtualLabsHub imports and renders GermanLanguageStudio');
}

const studioPath = path.resolve(process.cwd(), 'src/components/labs/GermanLanguageStudio.tsx');
assert(fs.existsSync(studioPath), `GermanLanguageStudio.tsx file exists at ${studioPath}`);
if (fs.existsSync(studioPath)) {
  const studioContent = fs.readFileSync(studioPath, 'utf8');
  assert(studioContent.includes('Phonetics') || studioContent.includes('Umlaut') || studioContent.includes('phonetics'), 'Studio has Phonetics & Umlaute audio engine');
  assert(studioContent.includes('Kasus') || studioContent.includes('cases') || studioContent.includes('Nominativ'), 'Studio has 4 Kasus matrix engine');
  assert(studioContent.includes('Modalverben') || studioContent.includes('modal') || studioContent.includes('Satzklammer'), 'Studio has Modalverben & Satzklammer engine');
  assert(studioContent.includes('Dativ') || studioContent.includes('Wechsel') || studioContent.includes('prepositions'), 'Studio has Dativ & Wechselpräpositionen engine');
  assert(studioContent.includes('Alltagssituationen') || studioContent.includes('situations') || studioContent.includes('Hörverstehen'), 'Studio has Alltagssituationen & Hörverstehen engine');
}

// 9. Student Analytics Category Verification
console.log('\n--- 9. Student Analytics Classification Verification ---');
const catAr = categorizeBranch('اللغة الألمانية (اللغة الأجنبية الثانية)');
assert(catAr === 'languages', `categorizeBranch returns "languages" for Arabic metadata (found: ${catAr})`);

const catEn = categorizeBranch('thanaweya_german');
assert(catEn === 'languages', `categorizeBranch returns "languages" for branch ID (found: ${catEn})`);

// 10. Physical File Integrity Verification
console.log('\n--- 10. Physical File Integrity (8 Databanks + 8 Textbooks) ---');
for (let i = 1; i <= 4; i++) {
  const thDb = path.resolve(process.cwd(), `src/data/databanks/thanaweya/germanCh${i}Databank.ts`);
  const egDb = path.resolve(process.cwd(), `src/data/databanks/egbac/egBacGermanCh${i}Databank.ts`);
  const thTb = path.resolve(process.cwd(), `src/data/textbook/thanaweya/germanCh${i}Textbook.ts`);
  const egTb = path.resolve(process.cwd(), `src/data/textbook/egbac/egBacGermanCh${i}Textbook.ts`);

  assert(fs.existsSync(thDb), `Thanaweya Ch${i} Databank file exists`);
  assert(fs.existsSync(egDb), `EG-Bac Ch${i} Databank file exists`);
  assert(fs.existsSync(thTb), `Thanaweya Ch${i} Textbook file exists`);
  assert(fs.existsSync(egTb), `EG-Bac Ch${i} Textbook file exists`);
}

// 11. Curriculum Equivalency Bridge
console.log('\n--- 11. Curriculum Equivalency Bridge Verification ---');
const equivPath = path.resolve(process.cwd(), 'src/components/CurriculumEquivalency.tsx');
assert(fs.existsSync(equivPath), 'CurriculumEquivalency.tsx exists');
if (fs.existsSync(equivPath)) {
  const equivContent = fs.readFileSync(equivPath, 'utf8');
  assert(equivContent.includes('german_bridge'), 'CurriculumEquivalency.tsx includes german_bridge');
}

// Summary
console.log('\n--------------------------------------------------------------');
if (errors === 0) {
  console.log('🎉 ALL GERMAN LANGUAGE VERIFICATIONS PASSED (100%)!');
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED WITH ${errors} ERROR(S).`);
  process.exit(1);
}
