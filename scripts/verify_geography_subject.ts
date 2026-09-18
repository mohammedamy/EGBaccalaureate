import fs from 'fs';
import path from 'path';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { officialBooksList, getOfficialBookById, getOfficialBookByBranch, getOfficialBooksBySubject } from '../src/data/officialBooksData';
import { getOfficialMockConfig } from '../src/services/officialMockExamService';
import { classifySubjectCategory, getMasteryRadarData } from '../src/services/studentAnalyticsService';

console.log('--- VERIFYING POLITICAL GEOGRAPHY & GEOPOLITICS (9TH CORE SUBJECT) ---');

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
const geoSubject = SUBJECTS.find((s) => s.id === 'geography');
assert(!!geoSubject, 'Subject definition for "geography" found in SUBJECTS');
if (geoSubject) {
  assert(geoSubject.titleEn === 'Political Geography & Geopolitics', 'Bilingual titleEn matches');
  assert(geoSubject.titleAr === 'الجغرافيا السياسية والدراسات الجيوسياسية', 'Bilingual titleAr matches');
  assert(geoSubject.emoji === '🌍', `Emoji matches globe (found: ${geoSubject.emoji})`);
  assert(geoSubject.iconName === 'Globe', `IconName is Globe (found: ${geoSubject.iconName})`);
  assert(geoSubject.badgeColor === 'teal', 'Badge color is teal');
  assert(geoSubject.branchIds.thanaweya.includes('thanaweya_geography'), 'thanaweya_geography registered in branchIds.thanaweya');
  assert(geoSubject.branchIds.egbac.includes('egbac_geography'), 'egbac_geography registered in branchIds.egbac');
}

// 2. Thanaweya Branch Verification
console.log('\n--- 2. Thanaweya Geography Branch Verification ---');
const thGeo = thanaweyaCurriculum.branches.find((b) => b.id === 'thanaweya_geography');
assert(!!thGeo, 'thanaweya_geography branch present in thanaweyaCurriculum');
if (thGeo) {
  assert(thGeo.chapters.length === 5, `Thanaweya geography has exactly 5 chapters (found: ${thGeo.chapters.length})`);

  const expectedLessonsPerChapter = [1, 4, 5, 2, 2];
  let totalThLessons = 0;
  let totalThSolved = 0;
  let totalThExercises = 0;
  let totalThMCQ = 0;

  thGeo.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `th_geo_ch${chNum}`, `Chapter ${chNum} ID is th_geo_ch${chNum}`);
    assert(ch.isFullyEquipped === true, `Chapter ${chNum} is marked isFullyEquipped`);
    assert(
      ch.lessons.length === expectedLessonsPerChapter[idx],
      `Chapter ${chNum} has ${expectedLessonsPerChapter[idx]} lessons (found: ${ch.lessons.length})`
    );
    totalThLessons += ch.lessons.length;

    ch.lessons.forEach((l, lIdx) => {
      assert(!!l.titleEn && !!l.titleAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual titles`);
      assert(!!l.summaryEn && !!l.summaryAr, `Ch${chNum} Lesson ${lIdx + 1} has bilingual summaries`);
      assert(!!l.theoryContentEn && !!l.theoryContentAr, `Ch${chNum} Lesson ${lIdx + 1} has comprehensive theory content`);
      assert(!!l.moeRef, `Ch${chNum} Lesson ${lIdx + 1} has MoEReference`);
      assert(!!l.lessonPlan, `Ch${chNum} Lesson ${lIdx + 1} has TeacherLessonPlan`);
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

  assert(totalThLessons === 14, `Thanaweya Geography has all 14 official lessons (found: ${totalThLessons})`);
  assert(totalThSolved === 50, `Thanaweya Geography has 50 solved examples (found: ${totalThSolved})`);
  assert(totalThExercises === 75, `Thanaweya Geography has 75 practice exercises (found: ${totalThExercises})`);
  assert(totalThMCQ === 875, `Thanaweya Geography has 875 databank MCQs (found: ${totalThMCQ})`);
  const totalThProblems = totalThSolved + totalThExercises + totalThMCQ;
  assert(totalThProblems === 1000, `Thanaweya Geography has exactly 1,000 problems (found: ${totalThProblems})`);
}

// 3. EG-Bac Branch Verification
console.log('\n--- 3. EG-Bac Geography Branch Verification ---');
const egGeo = egBacCurriculum.branches.find((b) => b.id === 'egbac_geography');
assert(!!egGeo, 'egbac_geography branch present in egBacCurriculum');
if (egGeo) {
  assert(egGeo.chapters.length === 5, `EG-Bac geography has exactly 5 chapters (found: ${egGeo.chapters.length})`);

  let totalEgLessons = 0;
  let totalEgSolved = 0;
  let totalEgExercises = 0;
  let totalEgMCQ = 0;

  egGeo.chapters.forEach((ch, idx) => {
    const chNum = idx + 1;
    assert(ch.id === `egbac_geo_ch${chNum}`, `EG-Bac Chapter ${chNum} ID is egbac_geo_ch${chNum}`);
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

  assert(totalEgLessons === 14, `EG-Bac Geography has all 14 lessons (found: ${totalEgLessons})`);
  assert(totalEgSolved === 50, `EG-Bac Geography has 50 solved examples (found: ${totalEgSolved})`);
  assert(totalEgExercises === 75, `EG-Bac Geography has 75 practice exercises (found: ${totalEgExercises})`);
  assert(totalEgMCQ === 875, `EG-Bac Geography has 875 databank MCQs (found: ${totalEgMCQ})`);
  const totalEgProblems = totalEgSolved + totalEgExercises + totalEgMCQ;
  assert(totalEgProblems === 1000, `EG-Bac Geography has exactly 1,000 problems (found: ${totalEgProblems})`);
}

// 4. Official Mock Exam Verification
console.log('\n--- 4. Official Mock Exam Verification ---');
const mockCfg = getOfficialMockConfig('geography');
assert(mockCfg.subjectId === 'geography', 'Mock config returns subjectId "geography"');
assert(mockCfg.totalQuestions === 46, `Mock exam has 46 questions (found: ${mockCfg.totalQuestions})`);
assert(mockCfg.totalMarks === 60, `Mock exam has 60 marks (found: ${mockCfg.totalMarks})`);
assert(mockCfg.durationMinutes === 180, `Mock exam duration is 180 minutes (found: ${mockCfg.durationMinutes})`);
assert(mockCfg.section1Count === 32, `Section 1 has 32 items @ 1 mark (found: ${mockCfg.section1Count})`);
assert(mockCfg.section2Count === 14, `Section 2 has 14 items @ 2 marks (found: ${mockCfg.section2Count})`);

// 5. Student Analytics Classification Verification
console.log('\n--- 5. Student Analytics Classification Verification ---');
const catAr = classifySubjectCategory('الجغرافيا السياسية', 'Political Geography', 'الفصل التمهيدي', 'thanaweya_geography');
assert(catAr === 'geography', `classifySubjectCategory returns "geography" (found: ${catAr})`);

const humanitiesRadar = getMasteryRadarData(undefined, 'humanities');
const geoHumanitiesPoint = humanitiesRadar.find((p) => p.dimensionKey === 'geography');
assert(!!geoHumanitiesPoint, 'Humanities radar contains "geography" dimension point');

const all9Radar = getMasteryRadarData(undefined, 'all9');
const geoAll9Point = all9Radar.find((p) => p.dimensionKey === 'geography');
assert(!!geoAll9Point, 'All-9 radar contains "geography" dimension point');
assert(all9Radar.length === 9, `All-9 radar has exactly 9 dimensions (found: ${all9Radar.length})`);

// 6. Official Books Verification
console.log('\n--- 6. Official Books Verification ---');
const thBook = getOfficialBookById('th-geography-g12');
assert(!!thBook, 'th-geography-g12 book exists in officialBooksList');
if (thBook) {
  assert(thBook.subjectId === 'geography', 'th-geography-g12 subjectId is "geography"');
  assert(thBook.curriculum === 'thanaweya', 'th-geography-g12 curriculum is "thanaweya"');
  assert(thBook.chapters.length === 5, `th-geography-g12 has 5 chapters (found: ${thBook.chapters.length})`);
}

const egBook = getOfficialBookById('egbac-geography-g12');
assert(!!egBook, 'egbac-geography-g12 book exists in officialBooksList');
if (egBook) {
  assert(egBook.subjectId === 'geography', 'egbac-geography-g12 subjectId is "geography"');
  assert(egBook.curriculum === 'egbac', 'egbac-geography-g12 curriculum is "egbac"');
}

const branchBook = getOfficialBookByBranch('thanaweya_geography');
assert(!!branchBook && branchBook.id === 'th-geography-g12', 'getOfficialBookByBranch resolves thanaweya_geography');

const geoBooks = getOfficialBooksBySubject('geography');
assert(geoBooks.length === 2, `getOfficialBooksBySubject("geography") returns 2 books (found: ${geoBooks.length})`);

// 7. Interactive Studio Component File Verification
console.log('\n--- 7. Interactive Studio Component File Verification ---');
const studioPath = path.join(process.cwd(), 'src/components/labs/GeopoliticalMapStudio.tsx');
assert(fs.existsSync(studioPath), 'GeopoliticalMapStudio.tsx exists on disk');
if (fs.existsSync(studioPath)) {
  const content = fs.readFileSync(studioPath, 'utf8');
  assert(content.includes('Polsby-Popper'), 'Contains Polsby-Popper compactness calculator');
  assert(content.includes('UNCLOS'), 'Contains UNCLOS maritime zones cross-section');
  assert(content.includes('ceuta_melilla'), 'Contains Ceuta and Melilla hotspot');
  assert(content.includes('taba'), 'Contains Taba arbitration hotspot');
  assert(content.includes('kashmir'), 'Contains Kashmir dispute hotspot');
  assert(content.includes('libya_tunisia'), 'Contains Libya-Tunisia continental shelf hotspot');
  assert(content.includes('comesa'), 'Contains COMESA economic bloc');
  assert(content.includes('nato'), 'Contains NATO military alliance');
}

// 8. Grand Totals Summary
console.log('\n======================================================');
console.log(`TOTAL ERRORS: ${errors}`);
console.log('======================================================');

if (errors > 0) {
  console.error(`💥 Verification FAILED with ${errors} errors!`);
  process.exit(1);
} else {
  console.log('🎉 Verification PASSED! Political Geography is 100% integrated and verified!');
  process.exit(0);
}
