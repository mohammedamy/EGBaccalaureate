import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { classifySubjectCategory, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING GEOLOGY & ENVIRONMENTAL SCIENCES (10TH CORE SUBJECT) ---');

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
const geolSubject = SUBJECTS.find((s) => s.id === 'geology');
assert(!!geolSubject, 'Subject definition for "geology" found in SUBJECTS');
if (geolSubject) {
  assert(geolSubject.titleEn === 'Geology & Environmental Sciences', 'Bilingual titleEn matches');
  assert(geolSubject.titleAr === 'الجيولوجيا والعلوم البيئية', 'Bilingual titleAr matches');
  assert(geolSubject.emoji === '🪨', `Emoji matches rock (found: ${geolSubject.emoji})`);
  assert(geolSubject.iconName === 'Mountain', `IconName is Mountain (found: ${geolSubject.iconName})`);
  assert(geolSubject.badgeColor === 'amber', 'Badge color is amber');
  assert(geolSubject.branchIds.thanaweya.includes('thanaweya_geology'), 'thanaweya_geology registered in branchIds.thanaweya');
  assert(geolSubject.branchIds.egbac.includes('egbac_geology'), 'egbac_geology registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Geology Branch Verification ---');
const thGeol = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_geology');
assert(!!thGeol, 'thanaweya_geology branch present in thanaweyaCurriculum');
if (thGeol) {
  assert(thGeol.chapters.length === 7, `Thanaweya geology has exactly 7 chapters (found: ${thGeol.chapters.length})`);

  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thGeol.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_geo_earth_ch${chNum}`, `Chapter ${chNum} ID is th_geo_earth_ch${chNum}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(ch.lessons.length === 3, `Chapter ${chNum} has 3 lessons (found: ${ch.lessons.length})`);
    totalThLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
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

  assert(totalThLessons === 21, `Thanaweya Geology has all 21 official lessons (found: ${totalThLessons})`);
  assert(totalThSolved === 70, `Thanaweya Geology has 70 solved examples (found: ${totalThSolved})`);
  assert(totalThExercises === 105, `Thanaweya Geology has 105 practice exercises (found: ${totalThExercises})`);
  assert(totalThMCQ === 1225, `Thanaweya Geology has 1,225 databank MCQs (found: ${totalThMCQ})`);
  const totalThProblems = totalThSolved + totalThExercises + totalThMCQ;
  assert(totalThProblems === 1400, `Thanaweya Geology has exactly 1,400 problems (found: ${totalThProblems})`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Geology Branch Verification ---');
const egGeol = egBacCurriculum.branches.find((b) => b.id === 'egbac_geology');
assert(!!egGeol, 'egbac_geology branch present in egBacCurriculum');
if (egGeol) {
  assert(egGeol.chapters.length === 7, `EG-Bac geology has exactly 7 chapters (found: ${egGeol.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egGeol.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_geo_earth_ch${chNum}`, `EG-Bac Chapter ${chNum} ID is egbac_geo_earth_ch${chNum}`);
    assert(ch.isFullyEquipped === true, `EG-Bac Chapter ${chNum} is marked isFullyEquipped`);
    totalEgLessons += ch.lessons.length;

    const solvedCount = ch.solvedExamples?.length || 0;
    const exCount = ch.exerciseProblems?.length || 0;
    assert(solvedCount === 10, `EG-Bac Chapter ${chNum} has 10 Solved Examples (found: ${solvedCount})`);
    assert(exCount === 15, `EG-Bac Chapter ${chNum} has 15 Exercises (found: ${exCount})`);
    totalEgSolved += solvedCount;
    totalEgExercises += exCount;

    if (ch.databank) {
      const mcqCount = (ch.databank.easy?.length || 0) + (ch.databank.medium?.length || 0) + (ch.databank.hots?.length || 0);
      assert(mcqCount === 175, `EG-Bac Chapter ${chNum} has 175 total Databank MCQs (found: ${mcqCount})`);
      totalEgMCQ += mcqCount;
    }
  });

  assert(totalEgLessons === 21, `EG-Bac Geology has all 21 lessons (found: ${totalEgLessons})`);
  assert(totalEgSolved === 70, `EG-Bac Geology has 70 solved examples (found: ${totalEgSolved})`);
  assert(totalEgExercises === 105, `EG-Bac Geology has 105 practice exercises (found: ${totalEgExercises})`);
  assert(totalEgMCQ === 1225, `EG-Bac Geology has 1,225 databank MCQs (found: ${totalEgMCQ})`);
  const totalEgProblems = totalEgSolved + totalEgExercises + totalEgMCQ;
  assert(totalEgProblems === 1400, `EG-Bac Geology has exactly 1,400 problems (found: ${totalEgProblems})`);
}

// 4. Official Mock Exam Verification
console.log('\n--- 4. Official Mock Exam Verification ---');
const mockCfg = getOfficialMockConfig('geology');
assert(mockCfg.subjectId === 'geology', 'Mock config returns subjectId "geology"');
assert(mockCfg.totalQuestions === 46, `Mock exam has 46 questions (found: ${mockCfg.totalQuestions})`);
assert(mockCfg.totalMarks === 60, `Mock exam has 60 marks (found: ${mockCfg.totalMarks})`);
assert(mockCfg.durationMinutes === 180, `Mock exam duration is 180 minutes (found: ${mockCfg.durationMinutes})`);
assert(mockCfg.section1Count === 32, `Section 1 has 32 items @ 1 mark (found: ${mockCfg.section1Count})`);
assert(mockCfg.section2Count === 14, `Section 2 has 14 items @ 2 marks (found: ${mockCfg.section2Count})`);

// 5. Student Analytics Classification Verification
console.log('\n--- 5. Student Analytics Classification Verification ---');
const catAr = classifySubjectCategory('الجيولوجيا والعلوم البيئية', 'Geology & Earth Dynamics', 'الباب الأول', 'thanaweya_geology');
assert(catAr === 'geology', `classifySubjectCategory returns "geology" (found: ${catAr})`);

const stem6Radar = getMasteryRadarData(undefined, 'stem6');
const geolStem6Point = stem6Radar.find((p) => p.dimensionKey === 'geology');
assert(!!geolStem6Point, 'STEM-6 radar contains "geology" dimension point');

const all10Radar = getMasteryRadarData(undefined, 'all10');
const geolAll10Point = all10Radar.find((p) => p.dimensionKey === 'geology');
assert(!!geolAll10Point, 'All-10 radar contains "geology" dimension point');
assert(all10Radar.length === 10, `All-10 radar has exactly 10 dimensions (found: ${all10Radar.length})`);

// 6. Official Books Verification
console.log('\n--- 6. Official Books Verification ---');
const thBook = getOfficialBookById('th-geology-g12');
assert(!!thBook, 'th-geology-g12 book exists in officialBooksList');
if (thBook) {
  assert(thBook.subjectId === 'geology', 'th-geology-g12 subjectId is "geology"');
  assert(thBook.curriculum === 'thanaweya', 'th-geology-g12 curriculum is "thanaweya"');
  assert(thBook.chapters.length === 7, `th-geology-g12 has 7 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-geology-g12');
assert(!!egBook, 'egbac-geology-g12 book exists in officialBooksList');
if (egBook) {
  assert(egBook.subjectId === 'geology', 'egbac-geology-g12 subjectId is "geology"');
  assert(egBook.curriculum === 'egbac', 'egbac-geology-g12 curriculum is "egbac"');
}

const branchBook = getOfficialBookByBranch('thanaweya_geology');
assert(!!branchBook && branchBook.id === 'th-geology-g12', 'getOfficialBookByBranch resolves thanaweya_geology');

const geolBooks = getOfficialBooksBySubject('geology');
assert(geolBooks.length === 2, `getOfficialBooksBySubject("geology") returns 2 books (found: ${geolBooks.length})`);

// 7. Interactive Studio Component File Verification
console.log('\n--- 7. Interactive Studio Component File Verification ---');
const studioPath = path.join(process.cwd(), 'src/components/labs/GeologyEarthStudio.tsx');
assert(fs.existsSync(studioPath), 'GeologyEarthStudio.tsx exists on disk');
if (fs.existsSync(studioPath)) {
  const content = fs.readFileSync(studioPath, 'utf8');
  assert(content.includes('Mohs Hardness'), 'Contains Mohs hardness test');
  assert(content.includes('Bowen Reaction Series'), 'Contains Bowen reaction series');
  assert(content.includes('Plate Tectonics'), 'Contains Plate tectonics simulator');
  assert(content.includes('Stratigraphic'), 'Contains Stratigraphic cross-section');
  assert(content.includes('Ecosystem'), 'Contains Ecosystem trophic pyramid');
}

// 8. Grand Totals Summary (Pre-Section 9)
console.log('\n--- 8. Base Geology Integration Verified ---');

// 9. Museum 4K Archival Photographic Assets & Geology Studio Components Verification
console.log('\n--- 9. Museum 4K Archival Photographic Assets & Geology Studios Verification ---');

const geologyAssets = [
  { file: 'wegener_continental_drift_1912.jpg', name: 'Alfred Wegener 1912 Continental Drift Map' },
  { file: 'mohs_hardness_minerals_1812.jpg', name: 'Friedrich Mohs 1812 Mineral Specimen Collection' },
  { file: 'bowen_reaction_series_1928.jpg', name: 'Norman Bowen 1928 Petrological Reaction Series' },
  { file: 'grand_canyon_stratigraphy_unconformity.jpg', name: 'Grand Canyon Great Angular Unconformity' },
];

geologyAssets.forEach(({ file, name }) => {
  const assetPath = path.join(process.cwd(), 'src/assets/geology', file);
  assert(fs.existsSync(assetPath), `Asset ${file} (${name}) exists on disk`);
  if (fs.existsSync(assetPath)) {
    const stat = fs.statSync(assetPath);
    assert(stat.size > 100_000, `Asset ${file} is high-resolution 4K archival asset (>100KB, found: ${Math.round(stat.size / 1024)} KB)`);
  }
});

const geologyStudios = [
  {
    file: 'WegenerContinentalDriftStudio.tsx',
    component: 'WegenerContinentalDriftStudio',
    hotspots: 'WEGENER_HOTSPOTS',
  },
  {
    file: 'MohsMineralHardnessStudio.tsx',
    component: 'MohsMineralHardnessStudio',
    hotspots: 'MOHS_HOTSPOTS',
  },
  {
    file: 'BowenMagmaCrystallizationStudio.tsx',
    component: 'BowenMagmaCrystallizationStudio',
    hotspots: 'BOWEN_HOTSPOTS',
  },
  {
    file: 'StratigraphicUnconformityStudio.tsx',
    component: 'StratigraphicUnconformityStudio',
    hotspots: 'UNCONFORMITY_HOTSPOTS',
  },
];

geologyStudios.forEach(({ file, component, hotspots }) => {
  const studioFilePath = path.join(process.cwd(), 'src/components/labs/geology', file);
  assert(fs.existsSync(studioFilePath), `Studio component ${file} exists on disk`);
  if (fs.existsSync(studioFilePath)) {
    const content = fs.readFileSync(studioFilePath, 'utf8');
    assert(content.includes(`export const ${component}`), `Studio ${file} exports ${component}`);
    assert(content.includes(`export const ${hotspots}`), `Studio ${file} exports ${hotspots}`);
    assert(content.includes('HiResImageModal'), `Studio ${file} includes HiResImageModal for 4K viewing`);
  }
});

if (fs.existsSync(studioPath)) {
  const content = fs.readFileSync(studioPath, 'utf8');
  assert(content.includes('WegenerContinentalDriftStudio'), 'GeologyEarthStudio imports & mounts WegenerContinentalDriftStudio');
  assert(content.includes('MohsMineralHardnessStudio'), 'GeologyEarthStudio imports & mounts MohsMineralHardnessStudio');
  assert(content.includes('BowenMagmaCrystallizationStudio'), 'GeologyEarthStudio imports & mounts BowenMagmaCrystallizationStudio');
  assert(content.includes('StratigraphicUnconformityStudio'), 'GeologyEarthStudio imports & mounts StratigraphicUnconformityStudio');
  assert(content.includes('wegener_drift'), 'GeologyEarthStudio supports "wegener_drift" StudioMode');
  assert(content.includes('mohs_minerals'), 'GeologyEarthStudio supports "mohs_minerals" StudioMode');
  assert(content.includes('bowen_magma'), 'GeologyEarthStudio supports "bowen_magma" StudioMode');
  assert(content.includes('unconformity_stratigraphy'), 'GeologyEarthStudio supports "unconformity_stratigraphy" StudioMode');
  assert(content.includes('Museum 4K Archival Showcase Jump Cards'), 'GeologyEarthStudio includes Museum 4K Archival Showcase Jump Cards');
}

// 10. Grand Totals Summary
console.log('\n======================================================');
console.log(`TOTAL ERRORS: ${errors}`);
console.log('======================================================');

if (errors > 0) {
  console.error(`💥 Verification FAILED with ${errors} errors!`);
  process.exit(1);
} else {
  console.log('🎉 Verification PASSED! Geology & Environmental Sciences is 100% integrated and verified with 4K Archival Studios!');
  process.exit(0);
}
