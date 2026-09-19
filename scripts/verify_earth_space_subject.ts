import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { getPastExamPapers, PAST_EXAM_PAPERS, generatePastPaperQuestions } from '../src/services/pastExamPapersService';
import { categorizeBranch, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING EARTH & PLANETARY SPACE SCIENCES (15TH ACCREDITED CORE SUBJECT) ---');

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
const esSubject = SUBJECTS.find((s) => s.id === 'earth_space');
assert(!!esSubject, 'Subject definition for "earth_space" found in SUBJECTS');
if (esSubject) {
  assert(esSubject.titleEn === 'Earth & Planetary Space Sciences', `Bilingual titleEn matches: ${esSubject.titleEn}`);
  assert(esSubject.titleAr === 'علوم الأرض والفلك: علوم الفضاء والكواكب', `Bilingual titleAr matches: ${esSubject.titleAr}`);
  assert(esSubject.emoji === '🪐', `Emoji matches saturn/planet (found: ${esSubject.emoji})`);
  assert(esSubject.iconName === 'Orbit', `IconName is Orbit (found: ${esSubject.iconName})`);
  assert(esSubject.badgeColor === 'indigo', `Badge color is indigo (found: ${esSubject.badgeColor})`);
  assert(esSubject.branchIds.thanaweya.includes('thanaweya_earth_space'), 'thanaweya_earth_space registered in branchIds.thanaweya');
  assert(esSubject.branchIds.egbac.includes('egbac_earth_space'), 'egbac_earth_space registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Earth & Planetary Space Sciences Branch Verification ---');
const thEs = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_earth_space');
assert(!!thEs, 'thanaweya_earth_space branch present in thanaweyaCurriculum');
if (thEs) {
  assert(thEs.chapters.length === 10, `Thanaweya Earth & Space has exactly 10 chapters (found: ${thEs.chapters.length})`);

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

  assert(totalThLessons === 20, `Thanaweya total lessons: ${totalThLessons} (expected 20)`);
  assert(totalThSolved === 100, `Thanaweya total solved examples: ${totalThSolved} (expected 100)`);
  assert(totalThExercises === 150, `Thanaweya total exercises: ${totalThExercises} (expected 150)`);
  assert(totalThMCQ === 1750, `Thanaweya total MCQs: ${totalThMCQ} (expected 1750)`);
  assert(totalThSolved + totalThExercises + totalThMCQ === 2000, `Thanaweya total problems: ${totalThSolved + totalThExercises + totalThMCQ} (expected 2000)`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Earth & Planetary Space Sciences Branch Verification ---');
const egEs = egBacCurriculum.branches.find((b) => b.id === 'egbac_earth_space');
assert(!!egEs, 'egbac_earth_space branch present in egBacCurriculum');
if (egEs) {
  assert(egEs.chapters.length === 10, `EG-Bac Earth & Space has exactly 10 chapters (found: ${egEs.chapters.length})`);

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

  assert(totalEgLessons === 20, `EG-Bac total lessons: ${totalEgLessons} (expected 20)`);
  assert(totalEgSolved === 100, `EG-Bac total solved examples: ${totalEgSolved} (expected 100)`);
  assert(totalEgExercises === 150, `EG-Bac total exercises: ${totalEgExercises} (expected 150)`);
  assert(totalEgMCQ === 1750, `EG-Bac total MCQs: ${totalEgMCQ} (expected 1750)`);
  assert(totalEgSolved + totalEgExercises + totalEgMCQ === 2000, `EG-Bac total problems: ${totalEgSolved + totalEgExercises + totalEgMCQ} (expected 2000)`);
}

// 4. Combined 4,000 Problems & 20 Chapters Verification
console.log('\n--- 4. Combined Subject Metrics Verification ---');
const totalChapters = (thEs?.chapters.length || 0) + (egEs?.chapters.length || 0);
assert(totalChapters === 20, `Combined Earth & Space chapters: ${totalChapters} (expected 20)`);

const thProblems = getSubjectStats(thanaweyaCurriculum, 'earth_space');
const egProblems = getSubjectStats(egBacCurriculum, 'earth_space');
assert(thProblems.totalProblems === 2000, `Thanaweya Earth & Space problems: ${thProblems.totalProblems} (expected 2000)`);
assert(egProblems.totalProblems === 2000, `EG-Bac Earth & Space problems: ${egProblems.totalProblems} (expected 2000)`);
assert(thProblems.totalProblems + egProblems.totalProblems === 4000, `Total Earth & Space problems: ${thProblems.totalProblems + egProblems.totalProblems} (expected 4000)`);

// 5. Official Books Verification
console.log('\n--- 5. Official Books Verification ---');
const thBook = getOfficialBookById('th-earth-space-g12');
assert(!!thBook, 'Official Book "th-earth-space-g12" registered');
if (thBook) {
  assert(thBook.chapters.length === 10, `th-earth-space-g12 has 10 chapters (found: ${thBook.chapters.length})`);
  assert(thBook.branchId === 'thanaweya_earth_space', `BranchId is thanaweya_earth_space (found: ${thBook.branchId})`);
  assert(thBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const egBook = getOfficialBookById('egbac-earth-space-g12');
assert(!!egBook, 'Official Book "egbac-earth-space-g12" registered');
if (egBook) {
  assert(egBook.chapters.length === 10, `egbac-earth-space-g12 has 10 chapters (found: ${egBook.chapters.length})`);
  assert(egBook.branchId === 'egbac_earth_space', `BranchId is egbac_earth_space (found: ${egBook.branchId})`);
  assert(egBook.gradeEn.includes('Grade 12'), `Grade is 12`);
}

const booksByBranchTh = getOfficialBookByBranch('thanaweya_earth_space');
assert(booksByBranchTh?.id === 'th-earth-space-g12', 'getOfficialBookByBranch resolves thanaweya_earth_space');

const booksByBranchEg = getOfficialBookByBranch('egbac_earth_space');
assert(booksByBranchEg?.id === 'egbac-earth-space-g12', 'getOfficialBookByBranch resolves egbac_earth_space');

const booksBySubject = getOfficialBooksBySubject('earth_space');
assert(booksBySubject.length === 2, `getOfficialBooksBySubject returns 2 books (found: ${booksBySubject.length})`);
assert(officialBooksList.length >= 39, `Total official books list is at least 39 (found: ${officialBooksList.length})`);

// 6. Official Mock Exam Blueprint Verification
console.log('\n--- 6. Official Mock Exam Blueprint Verification ---');
const mockCfgSubject = getOfficialMockConfig('earth_space');
assert(!!mockCfgSubject, 'Mock config resolved for subject "earth_space"');
if (mockCfgSubject) {
  assert(mockCfgSubject.totalQuestions === 40, `Mock exam has 40 questions (found: ${mockCfgSubject.totalQuestions})`);
  assert(mockCfgSubject.totalMarks === 50, `Mock exam total marks is 50 (found: ${mockCfgSubject.totalMarks})`);
  assert(mockCfgSubject.durationMinutes === 180, `Mock exam duration is 180 minutes (found: ${mockCfgSubject.durationMinutes})`);
  assert(mockCfgSubject.section1Count === 30, `Section 1: 30 questions @ 1 mark (found: ${mockCfgSubject.section1Count})`);
  assert(mockCfgSubject.section2Count === 10, `Section 2: 10 questions @ 2 marks (found: ${mockCfgSubject.section2Count})`);
}

const mockCfgBranchTh = getOfficialMockConfig('thanaweya_earth_space');
assert(mockCfgBranchTh.totalMarks === 50 && mockCfgBranchTh.totalQuestions === 40, 'Mock config correctly resolved for thanaweya_earth_space branch');

const mockCfgBranchEg = getOfficialMockConfig('egbac_earth_space');
assert(mockCfgBranchEg.totalMarks === 50 && mockCfgBranchEg.totalQuestions === 40, 'Mock config correctly resolved for egbac_earth_space branch');

// 7. Past Exam Papers Verification
console.log('\n--- 7. Past Exam Papers Verification ---');
const esPastPapers = getPastExamPapers({ subject: 'earth_space' });
assert(esPastPapers.length === 6, `Found 6 past exam papers for earth_space (got ${esPastPapers.length})`);
esPastPapers.forEach((paper) => {
  assert(paper.totalQuestions === 40, `Paper "${paper.titleEn}" has 40 totalQuestions (got ${paper.totalQuestions})`);
  assert(paper.totalMarks === 50, `Paper "${paper.titleEn}" has 50 total marks (got ${paper.totalMarks})`);
  assert(paper.durationMinutes === 180, `Paper "${paper.titleEn}" duration is 180 min (got ${paper.durationMinutes})`);
  const generatedQs = generatePastPaperQuestions(paper.id, thanaweyaCurriculum);
  assert(generatedQs.length === 40, `Paper "${paper.titleEn}" generates 40 questions (got ${generatedQs.length})`);
});
const allPapers = PAST_EXAM_PAPERS;
assert(allPapers.length >= 108, `Total past exam papers across platform is at least 108 (got ${allPapers.length})`);

// 8. Interactive Studio & Virtual Labs Hub Verification
console.log('\n--- 8. Virtual Labs Hub & Interactive Studio Verification ---');
const virtualLabsHubPath = path.resolve(process.cwd(), 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const vHubContent = fs.readFileSync(virtualLabsHubPath, 'utf8');
  assert(vHubContent.includes("'earth_space'"), "VirtualLabsHub includes 'earth_space' in LabId");
  assert(vHubContent.includes('SpacePlanetaryStudio'), 'VirtualLabsHub imports and renders SpacePlanetaryStudio');
}

const studioPath = path.resolve(process.cwd(), 'src/components/labs/SpacePlanetaryStudio.tsx');
assert(fs.existsSync(studioPath), `SpacePlanetaryStudio.tsx file exists at ${studioPath}`);
if (fs.existsSync(studioPath)) {
  const studioContent = fs.readFileSync(studioPath, 'utf8');
  assert(studioContent.includes('Kepler') || studioContent.includes('vis-viva') || studioContent.includes('orbit'), 'Studio has Keplerian Orbit simulation');
  assert(studioContent.includes('Comparative Planetology') || studioContent.includes('escapeVelocity') || studioContent.includes('surfaceGravity'), 'Studio has Comparative Planetology explorer');
  assert(studioContent.includes('H-R Diagram') || studioContent.includes('hr_diagram') || studioContent.includes('luminosity'), 'Studio has H-R Diagram stellar evolution engine');
  assert(studioContent.includes('Hohmann') || studioContent.includes('deltaV') || studioContent.includes('transfer'), 'Studio has Hohmann Transfer & Rocket Dynamics engine');
  assert(studioContent.includes('Remote Sensing') || studioContent.includes('NDVI') || studioContent.includes('spectroscopy'), 'Studio has Multispectral Remote Sensing & NDVI engine');
}

// 9. Student Analytics Category & Radar Verification
console.log('\n--- 9. Student Analytics Classification & Radar Verification ---');
const catAr = categorizeBranch('علوم الأرض والفلك: علوم الفضاء والكواكب');
assert(catAr === 'earth_space', `categorizeBranch returns "earth_space" for Arabic metadata (found: ${catAr})`);

const catEn = categorizeBranch('thanaweya_earth_space');
assert(catEn === 'earth_space', `categorizeBranch returns "earth_space" for branch ID (found: ${catEn})`);

const radarDataAll15 = getMasteryRadarData(undefined, 'all15');
assert(radarDataAll15.length === 15, `Mastery radar in all15 mode returns 15 dimensions (found: ${radarDataAll15.length})`);
const esDimension = radarDataAll15.find((d) => d.dimensionKey === 'earth_space');
assert(!!esDimension, 'Earth & Planetary Space Sciences dimension present in radar data');
assert(esDimension?.labelAr === 'علوم الأرض والفلك', `Radar Arabic label is accurate (found: ${esDimension?.labelAr})`);

// 10. Physical File Integrity Verification
console.log('\n--- 10. Physical File Integrity (20 Databanks + 20 Textbooks) ---');
for (let i = 1; i <= 10; i++) {
  const thDb = path.resolve(process.cwd(), `src/data/databanks/thanaweya/earthSpaceCh${i}Databank.ts`);
  const egDb = path.resolve(process.cwd(), `src/data/databanks/egbac/egBacEarthSpaceCh${i}Databank.ts`);
  const thTb = path.resolve(process.cwd(), `src/data/textbook/thanaweya/earthSpaceCh${i}Textbook.ts`);
  const egTb = path.resolve(process.cwd(), `src/data/textbook/egbac/egBacEarthSpaceCh${i}Textbook.ts`);

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
  assert(equivContent.includes('earth_space_bridge'), 'CurriculumEquivalency.tsx includes earth_space_bridge');
}

// Summary
console.log('\n--------------------------------------------------------------');
if (errors === 0) {
  console.log('🎉 ALL EARTH & PLANETARY SPACE SCIENCES VERIFICATIONS PASSED (100%)!');
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED WITH ${errors} ERROR(S).`);
  process.exit(1);
}
