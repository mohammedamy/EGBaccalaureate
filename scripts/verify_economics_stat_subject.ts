import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { classifySubjectCategory, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING ECONOMICS & APPLIED STATISTICS (13TH ACCREDITED CORE SUBJECT) ---');

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
const econSubject = SUBJECTS.find((s) => s.id === 'economics_stat');
assert(!!econSubject, 'Subject definition for "economics_stat" found in SUBJECTS');
if (econSubject) {
  assert(econSubject.titleEn === 'Economics & Statistics', `Bilingual titleEn matches: ${econSubject.titleEn}`);
  assert(econSubject.titleAr === 'الاقتصاد والإحصاء', `Bilingual titleAr matches: ${econSubject.titleAr}`);
  assert(econSubject.emoji === '📊', `Emoji matches chart (found: ${econSubject.emoji})`);
  assert(econSubject.iconName === 'TrendingUp', `IconName is TrendingUp (found: ${econSubject.iconName})`);
  assert(econSubject.badgeColor === 'amber', `Badge color is amber (found: ${econSubject.badgeColor})`);
  assert(econSubject.branchIds.thanaweya.includes('thanaweya_economics_stat'), 'thanaweya_economics_stat registered in branchIds.thanaweya');
  assert(econSubject.branchIds.egbac.includes('egbac_economics_stat'), 'egbac_economics_stat registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Economics & Statistics Branch Verification ---');
const thEcon = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_economics_stat');
assert(!!thEcon, 'thanaweya_economics_stat branch present in thanaweyaCurriculum');
if (thEcon) {
  assert(thEcon.chapters.length === 10, `Thanaweya economics & stat has exactly 10 chapters (found: ${thEcon.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thEcon.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_econ_stat_ch${chNum}`, `Chapter ${chNum} ID is th_econ_stat_ch${chNum}`);
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
console.log('\n--- 3. EG-Bac Economics & Statistics Branch Verification ---');
const egEcon = egBacCurriculum.branches.find((b) => b.id === 'egbac_economics_stat');
assert(!!egEcon, 'egbac_economics_stat branch present in egBacCurriculum');
if (egEcon) {
  assert(egEcon.chapters.length === 10, `EG-Bac economics & stat has exactly 10 chapters (found: ${egEcon.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egEcon.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_econ_stat_ch${chNum}`, `Chapter ${chNum} ID is egbac_econ_stat_ch${chNum}`);
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

// 4. Combined 4,000 Problems Check
console.log('\n--- 4. Combined 4,000 Problems Check ---');
const thStats = getSubjectStats(thanaweyaCurriculum, 'economics_stat');
const egStats = getSubjectStats(egBacCurriculum, 'economics_stat');
assert(thStats.totalProblems === 2000, `Thanaweya economics problems = 2000 (found: ${thStats.totalProblems})`);
assert(egStats.totalProblems === 2000, `EG-Bac economics problems = 2000 (found: ${egStats.totalProblems})`);
assert(thStats.totalProblems + egStats.totalProblems === 4000, `Combined problems across both tracks = 4000 (found: ${thStats.totalProblems + egStats.totalProblems})`);

// 5. Official Books Verification
console.log('\n--- 5. Official Books Verification ---');
const thBook = getOfficialBookById('th-econ-stat-g12');
assert(!!thBook, 'Official Book "th-econ-stat-g12" registered');
if (thBook) {
  assert(thBook.chapters.length === 10, `th-econ-stat-g12 has 10 chapters (found: ${thBook.chapters.length})`);
  assert(thBook.branchId === 'thanaweya_economics_stat', `BranchId is thanaweya_economics_stat (found: ${thBook.branchId})`);
  assert(thBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const egBook = getOfficialBookById('egbac-econ-stat-g12');
assert(!!egBook, 'Official Book "egbac-econ-stat-g12" registered');
if (egBook) {
  assert(egBook.chapters.length === 10, `egbac-econ-stat-g12 has 10 chapters (found: ${egBook.chapters.length})`);
  assert(egBook.branchId === 'egbac_economics_stat', `BranchId is egbac_economics_stat (found: ${egBook.branchId})`);
  assert(egBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const booksByBranchTh = getOfficialBookByBranch('thanaweya_economics_stat');
assert(booksByBranchTh?.id === 'th-econ-stat-g12', 'getOfficialBookByBranch resolves thanaweya_economics_stat');

const booksByBranchEg = getOfficialBookByBranch('egbac_economics_stat');
assert(booksByBranchEg?.id === 'egbac-econ-stat-g12', 'getOfficialBookByBranch resolves egbac_economics_stat');

const booksBySubject = getOfficialBooksBySubject('economics_stat');
assert(booksBySubject.length === 2, `getOfficialBooksBySubject returns 2 books (found: ${booksBySubject.length})`);

// 6. Official Mock Exam Blueprint Verification
console.log('\n--- 6. Official Mock Exam Blueprint Verification ---');
const mockCfgSubject = getOfficialMockConfig('economics_stat');
assert(!!mockCfgSubject, 'Mock config resolved for subject "economics_stat"');
if (mockCfgSubject) {
  assert(mockCfgSubject.totalQuestions === 40, `Mock exam has 40 questions (found: ${mockCfgSubject.totalQuestions})`);
  assert(mockCfgSubject.totalMarks === 50, `Mock exam total marks is 50 (found: ${mockCfgSubject.totalMarks})`);
  assert(mockCfgSubject.durationMinutes === 180, `Mock exam duration is 180 minutes (found: ${mockCfgSubject.durationMinutes})`);
  assert(mockCfgSubject.section1Count === 30, `Section 1: 30 questions @ 1 mark (found: ${mockCfgSubject.section1Count})`);
  assert(mockCfgSubject.section2Count === 10, `Section 2: 10 questions @ 2 marks (found: ${mockCfgSubject.section2Count})`);
}

const mockCfgBranchTh = getOfficialMockConfig('thanaweya_economics_stat');
assert(mockCfgBranchTh.totalMarks === 50 && mockCfgBranchTh.totalQuestions === 40, 'Mock config correctly resolved for thanaweya_economics_stat branch');

const mockCfgBranchEg = getOfficialMockConfig('egbac_economics_stat');
assert(mockCfgBranchEg.totalMarks === 50 && mockCfgBranchEg.totalQuestions === 40, 'Mock config correctly resolved for egbac_economics_stat branch');

// 7. Interactive Studio & Virtual Labs Hub Verification
console.log('\n--- 7. Virtual Labs Hub & Interactive Studio Verification ---');
const virtualLabsHubPath = path.resolve(process.cwd(), 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const vHubContent = fs.readFileSync(virtualLabsHubPath, 'utf8');
  assert(vHubContent.includes("'economics_stat'"), "VirtualLabsHub includes 'economics_stat' in LabId");
  assert(vHubContent.includes('EconomicsStatisticsStudio'), 'VirtualLabsHub imports and renders EconomicsStatisticsStudio');
}

const studioPath = path.resolve(process.cwd(), 'src/components/labs/EconomicsStatisticsStudio.tsx');
assert(fs.existsSync(studioPath), `EconomicsStatisticsStudio.tsx file exists at ${studioPath}`);
if (fs.existsSync(studioPath)) {
  const studioContent = fs.readFileSync(studioPath, 'utf8');
  assert(studioContent.includes('Market Equilibrium'), 'Studio has Market Equilibrium simulation');
  assert(studioContent.includes('Keynesian Multiplier') || studioContent.includes('National Income'), 'Studio has Keynesian Multiplier simulation');
  assert(studioContent.includes('Pearson') || studioContent.includes('Spearman'), 'Studio has Pearson/Spearman Correlation & Regression simulation');
  assert(studioContent.includes('Conditional Probability') || studioContent.includes('Bayes'), 'Studio has Conditional Probability & Bayes Tree');
  assert(studioContent.includes('Normal Distribution') || studioContent.includes('Z-Score'), 'Studio has Gaussian Normal Bell Curve simulation');
}

// 8. Student Analytics Category & Radar Verification
console.log('\n--- 8. Student Analytics Classification & Radar Verification ---');
const catAr = classifySubjectCategory('الاقتصاد والإحصاء التطبيقي', 'Economics & Applied Statistics', 'مقدمة في علم الاقتصاد', 'thanaweya_economics_stat');
assert(catAr === 'economics_stat', `classifySubjectCategory returns "economics_stat" for Arabic metadata (found: ${catAr})`);

const catEn = classifySubjectCategory('Applied Statistics', 'Economics & Statistics', 'Correlation and Regression', 'egbac_economics_stat');
assert(catEn === 'economics_stat', `classifySubjectCategory returns "economics_stat" for English metadata (found: ${catEn})`);

const radarDataAll13 = getMasteryRadarData(undefined, 'all13');
assert(radarDataAll13.length === 13, `Mastery radar in all13 mode returns 13 dimensions (found: ${radarDataAll13.length})`);
const econDimension = radarDataAll13.find((d) => d.dimensionKey === 'economics_stat');
assert(!!econDimension, 'Economics & Statistics dimension present in radar data');
assert(econDimension?.labelAr === 'الاقتصاد والإحصاء', `Radar Arabic label is accurate (found: ${econDimension?.labelAr})`);

// Summary
console.log('\n--------------------------------------------------------------');
if (errors === 0) {
  console.log('🎉 ALL ECONOMICS & APPLIED STATISTICS VERIFICATIONS PASSED (100%)!');
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED WITH ${errors} ERROR(S).`);
  process.exit(1);
}
