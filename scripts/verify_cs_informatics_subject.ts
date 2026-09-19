import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { classifySubjectCategory, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING COMPUTER SCIENCE & INFORMATICS (14TH ACCREDITED CORE SUBJECT) ---');

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
const csSubject = SUBJECTS.find((s) => s.id === 'cs_informatics');
assert(!!csSubject, 'Subject definition for "cs_informatics" found in SUBJECTS');
if (csSubject) {
  assert(csSubject.titleEn === 'Computer Science & Informatics', `Bilingual titleEn matches: ${csSubject.titleEn}`);
  assert(csSubject.titleAr === 'علوم الحاسب والمعلوماتية', `Bilingual titleAr matches: ${csSubject.titleAr}`);
  assert(csSubject.emoji === '💻', `Emoji matches computer (found: ${csSubject.emoji})`);
  assert(csSubject.iconName === 'Binary', `IconName is Binary (found: ${csSubject.iconName})`);
  assert(csSubject.badgeColor === 'violet', `Badge color is violet (found: ${csSubject.badgeColor})`);
  assert(csSubject.branchIds.thanaweya.includes('thanaweya_cs_informatics'), 'thanaweya_cs_informatics registered in branchIds.thanaweya');
  assert(csSubject.branchIds.egbac.includes('egbac_cs_informatics'), 'egbac_cs_informatics registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Computer Science & Informatics Branch Verification ---');
const thCs = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_cs_informatics');
assert(!!thCs, 'thanaweya_cs_informatics branch present in thanaweyaCurriculum');
if (thCs) {
  assert(thCs.chapters.length === 10, `Thanaweya CS has exactly 10 chapters (found: ${thCs.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thCs.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_cs_ch${chNum}`, `Chapter ${chNum} ID is th_cs_ch${chNum}`);
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

  assert(totalThLessons === 20, `Thanaweya total lessons: ${totalThLessons} (expected 20)`);
  assert(totalThSolved === 100, `Thanaweya total solved examples: ${totalThSolved} (expected 100)`);
  assert(totalThExercises === 150, `Thanaweya total exercises: ${totalThExercises} (expected 150)`);
  assert(totalThMCQ === 1750, `Thanaweya total MCQs: ${totalThMCQ} (expected 1750)`);
  assert(totalThSolved + totalThExercises + totalThMCQ === 2000, `Thanaweya total problems: ${totalThSolved + totalThExercises + totalThMCQ} (expected 2000)`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Computer Science & Informatics Branch Verification ---');
const egCs = egBacCurriculum.branches.find((b) => b.id === 'egbac_cs_informatics');
assert(!!egCs, 'egbac_cs_informatics branch present in egBacCurriculum');
if (egCs) {
  assert(egCs.chapters.length === 10, `EG-Bac CS has exactly 10 chapters (found: ${egCs.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egCs.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_cs_ch${chNum}`, `Chapter ${chNum} ID is egbac_cs_ch${chNum}`);
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

  assert(totalEgLessons === 20, `EG-Bac total lessons: ${totalEgLessons} (expected 20)`);
  assert(totalEgSolved === 100, `EG-Bac total solved examples: ${totalEgSolved} (expected 100)`);
  assert(totalEgExercises === 150, `EG-Bac total exercises: ${totalEgExercises} (expected 150)`);
  assert(totalEgMCQ === 1750, `EG-Bac total MCQs: ${totalEgMCQ} (expected 1750)`);
  assert(totalEgSolved + totalEgExercises + totalEgMCQ === 2000, `EG-Bac total problems: ${totalEgSolved + totalEgExercises + totalEgMCQ} (expected 2000)`);
}

// 4. Combined 4,000 Problems & 20 Chapters Verification
console.log('\n--- 4. Combined Subject Metrics Verification ---');
const totalChapters = (thCs?.chapters.length || 0) + (egCs?.chapters.length || 0);
assert(totalChapters === 20, `Combined CS & Informatics chapters: ${totalChapters} (expected 20)`);

const thProblems = getSubjectStats(thanaweyaCurriculum, 'cs_informatics');
const egProblems = getSubjectStats(egBacCurriculum, 'cs_informatics');
assert(thProblems.totalProblems === 2000, `Thanaweya CS problems: ${thProblems.totalProblems} (expected 2000)`);
assert(egProblems.totalProblems === 2000, `EG-Bac CS problems: ${egProblems.totalProblems} (expected 2000)`);
assert(thProblems.totalProblems + egProblems.totalProblems === 4000, `Total CS & Informatics problems: ${thProblems.totalProblems + egProblems.totalProblems} (expected 4000)`);

// 5. Official Books Verification
console.log('\n--- 5. Official Books Verification ---');
const thBook = getOfficialBookById('th-cs-informatics-g12');
assert(!!thBook, 'Official Book "th-cs-informatics-g12" registered');
if (thBook) {
  assert(thBook.chapters.length === 10, `th-cs-informatics-g12 has 10 chapters (found: ${thBook.chapters.length})`);
  assert(thBook.branchId === 'thanaweya_cs_informatics', `BranchId is thanaweya_cs_informatics (found: ${thBook.branchId})`);
  assert(thBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const egBook = getOfficialBookById('egbac-cs-informatics-g12');
assert(!!egBook, 'Official Book "egbac-cs-informatics-g12" registered');
if (egBook) {
  assert(egBook.chapters.length === 10, `egbac-cs-informatics-g12 has 10 chapters (found: ${egBook.chapters.length})`);
  assert(egBook.branchId === 'egbac_cs_informatics', `BranchId is egbac_cs_informatics (found: ${egBook.branchId})`);
  assert(egBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const booksByBranchTh = getOfficialBookByBranch('thanaweya_cs_informatics');
assert(booksByBranchTh?.id === 'th-cs-informatics-g12', 'getOfficialBookByBranch resolves thanaweya_cs_informatics');

const booksByBranchEg = getOfficialBookByBranch('egbac_cs_informatics');
assert(booksByBranchEg?.id === 'egbac-cs-informatics-g12', 'getOfficialBookByBranch resolves egbac_cs_informatics');

const booksBySubject = getOfficialBooksBySubject('cs_informatics');
assert(booksBySubject.length === 2, `getOfficialBooksBySubject returns 2 books (found: ${booksBySubject.length})`);
assert(officialBooksList.length === 39, `Total official books list is 39 (found: ${officialBooksList.length})`);

// 6. Official Mock Exam Blueprint Verification
console.log('\n--- 6. Official Mock Exam Blueprint Verification ---');
const mockCfgSubject = getOfficialMockConfig('cs_informatics');
assert(!!mockCfgSubject, 'Mock config resolved for subject "cs_informatics"');
if (mockCfgSubject) {
  assert(mockCfgSubject.totalQuestions === 40, `Mock exam has 40 questions (found: ${mockCfgSubject.totalQuestions})`);
  assert(mockCfgSubject.totalMarks === 50, `Mock exam total marks is 50 (found: ${mockCfgSubject.totalMarks})`);
  assert(mockCfgSubject.durationMinutes === 180, `Mock exam duration is 180 minutes (found: ${mockCfgSubject.durationMinutes})`);
  assert(mockCfgSubject.section1Count === 30, `Section 1: 30 questions @ 1 mark (found: ${mockCfgSubject.section1Count})`);
  assert(mockCfgSubject.section2Count === 10, `Section 2: 10 questions @ 2 marks (found: ${mockCfgSubject.section2Count})`);
}

const mockCfgBranchTh = getOfficialMockConfig('thanaweya_cs_informatics');
assert(mockCfgBranchTh.totalMarks === 50 && mockCfgBranchTh.totalQuestions === 40, 'Mock config correctly resolved for thanaweya_cs_informatics branch');

const mockCfgBranchEg = getOfficialMockConfig('egbac_cs_informatics');
assert(mockCfgBranchEg.totalMarks === 50 && mockCfgBranchEg.totalQuestions === 40, 'Mock config correctly resolved for egbac_cs_informatics branch');

// 7. Past Exam Papers Verification
console.log('\n--- 7. Past Exam Papers Verification ---');
const csPastPapers = getPastExamPapers({ subject: 'cs_informatics' });
assert(csPastPapers.length === 6, `Found 6 past exam papers for cs_informatics (got ${csPastPapers.length})`);
csPastPapers.forEach((paper) => {
  assert(paper.totalQuestions === 40, `Paper "${paper.titleEn}" has 40 totalQuestions (got ${paper.totalQuestions})`);
  assert(paper.totalMarks === 50, `Paper "${paper.titleEn}" has 50 total marks (got ${paper.totalMarks})`);
  assert(paper.durationMinutes === 180, `Paper "${paper.titleEn}" duration is 180 min (got ${paper.durationMinutes})`);
  const generatedQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
  assert(generatedQs.length === 40, `Paper "${paper.titleEn}" generates 40 questions (got ${generatedQs.length})`);
});
const allPapers = PAST_EXAM_PAPERS;
assert(allPapers.length === 108, `Total past exam papers across platform equals 108 (got ${allPapers.length})`);

// 8. Interactive Studio & Virtual Labs Hub Verification
console.log('\n--- 8. Virtual Labs Hub & Interactive Studio Verification ---');
const virtualLabsHubPath = path.resolve(process.cwd(), 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const vHubContent = fs.readFileSync(virtualLabsHubPath, 'utf8');
  assert(vHubContent.includes("'cs_informatics'"), "VirtualLabsHub includes 'cs_informatics' in LabId");
  assert(vHubContent.includes('ComputerScienceInformaticsStudio'), 'VirtualLabsHub imports and renders ComputerScienceInformaticsStudio');
}

const studioPath = path.resolve(process.cwd(), 'src/components/labs/ComputerScienceInformaticsStudio.tsx');
assert(fs.existsSync(studioPath), `ComputerScienceInformaticsStudio.tsx file exists at ${studioPath}`);
if (fs.existsSync(studioPath)) {
  const studioContent = fs.readFileSync(studioPath, 'utf8');
  assert(studioContent.includes('Logic Gate Circuit') || studioContent.includes('Truth Table'), 'Studio has Logic Gate & Truth Table engine');
  assert(studioContent.includes('Sorting') || studioContent.includes('Searching') || studioContent.includes('Algorithm'), 'Studio has Sorting & Searching visualizer');
  assert(studioContent.includes('SQL Sandbox') || studioContent.includes('sqlite') || studioContent.includes('Query'), 'Studio has Relational SQL Sandbox');
  assert(studioContent.includes('Subnet') || studioContent.includes('IPv4') || studioContent.includes('CIDR'), 'Studio has TCP/IP Subnetting Calculator');
  assert(studioContent.includes('Neural') || studioContent.includes('Decision Boundary') || studioContent.includes('Perceptron'), 'Studio has Neural Network Playground');
}

// 9. Student Analytics Category & Radar Verification
console.log('\n--- 9. Student Analytics Classification & Radar Verification ---');
const catAr = classifySubjectCategory('علوم الحاسب والمعلوماتية والذكاء الاصطناعي', 'Computer Science & Informatics', 'المنطق الرقمي وبوابات المنطق', 'thanaweya_cs_informatics');
assert(catAr === 'cs_informatics', `classifySubjectCategory returns "cs_informatics" for Arabic metadata (found: ${catAr})`);

const catEn = classifySubjectCategory('Advanced Informatics', 'Computer Science & AI', 'Relational Databases and SQL', 'egbac_cs_informatics');
assert(catEn === 'cs_informatics', `classifySubjectCategory returns "cs_informatics" for English metadata (found: ${catEn})`);

const radarDataAll14 = getMasteryRadarData(undefined, 'all14');
assert(radarDataAll14.length === 14, `Mastery radar in all14 mode returns 14 dimensions (found: ${radarDataAll14.length})`);
const csDimension = radarDataAll14.find((d) => d.dimensionKey === 'cs_informatics');
assert(!!csDimension, 'Computer Science & Informatics dimension present in radar data');
assert(csDimension?.labelAr === 'الحاسب والمعلوماتية', `Radar Arabic label is accurate (found: ${csDimension?.labelAr})`);

// 10. Physical File Integrity Verification
console.log('\n--- 10. Physical File Integrity (20 Databanks + 20 Textbooks) ---');
for (let i = 1; i <= 10; i++) {
  const thDb = path.resolve(process.cwd(), `src/data/databanks/thanaweya/csInformaticsCh${i}Databank.ts`);
  const egDb = path.resolve(process.cwd(), `src/data/databanks/egbac/egBacCsInformaticsCh${i}Databank.ts`);
  const thTb = path.resolve(process.cwd(), `src/data/textbook/thanaweya/csInformaticsCh${i}Textbook.ts`);
  const egTb = path.resolve(process.cwd(), `src/data/textbook/egbac/egBacCsInformaticsCh${i}Textbook.ts`);

  assert(fs.existsSync(thDb), `Thanaweya Ch${i} Databank file exists`);
  assert(fs.existsSync(egDb), `EG-Bac Ch${i} Databank file exists`);
  assert(fs.existsSync(thTb), `Thanaweya Ch${i} Textbook file exists`);
  assert(fs.existsSync(egTb), `EG-Bac Ch${i} Textbook file exists`);
}

// Summary
console.log('\n--------------------------------------------------------------');
if (errors === 0) {
  console.log('🎉 ALL COMPUTER SCIENCE & INFORMATICS VERIFICATIONS PASSED (100%)!');
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED WITH ${errors} ERROR(S).`);
  process.exit(1);
}
