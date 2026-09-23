import { SUBJECTS } from '../src/data/subjects';
import {
  SUBJECT_TRACK_REGISTRY,
  isCommonSubject,
  getChapterTrackScope,
  filterChaptersByTrackScope,
  getTrackScopeInfo,
  type SubjectNature,
} from '../src/data/trackScopeData';
import type { TrackScope, Chapter } from '../src/types/curriculum';

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log('\n========================================================================');
console.log('🧪 TEST SUITE: Track Scope Differentiation (Scientific vs Literary vs Common)');
console.log('========================================================================\n');

// 1. Verify coverage of all 36 curriculum subjects
console.log('🔹 1. Checking Subject Track Registry Coverage for all 36 Subjects:');
assert(SUBJECTS.length >= 36, `Total subjects registered in platform is at least 36 (found: ${SUBJECTS.length})`);

SUBJECTS.forEach((subject) => {
  const reg = SUBJECT_TRACK_REGISTRY[subject.id];
  assert(
    !!reg,
    `Subject "${subject.id}" (${subject.titleAr}) is registered in SUBJECT_TRACK_REGISTRY`
  );
  if (reg) {
    assert(
      ['common_subject', 'pure_scientific', 'pure_literary'].includes(reg.nature),
      `Subject "${subject.id}" has valid nature classification (${reg.nature})`
    );
    assert(reg.titleAr.length > 0 && reg.titleEn.length > 0, `Subject "${subject.id}" has non-empty Arabic and English titles`);
    assert(reg.commonDescriptionAr.length > 0 && reg.commonDescriptionEn.length > 0, `Subject "${subject.id}" has detailed common descriptions`);
  }
});

// 2. Verify Common Subjects Detailed Differentiations
console.log('\n🔹 2. Verifying Common Subjects Distinction between Common, Scientific, and Literary:');
const expectedCommonSubjects = [
  'arabic',
  'english',
  'french',
  'german',
  'italian',
  'spanish',
  'chinese',
  'economics_statistics',
  'civics',
  'islamic_studies',
  'christian_studies',
];

expectedCommonSubjects.forEach((subId) => {
  const isCommon = isCommonSubject(subId);
  assert(isCommon, `isCommonSubject("${subId}") returns true`);
  const reg = SUBJECT_TRACK_REGISTRY[subId];
  if (reg) {
    assert(reg.nature === 'common_subject', `Subject "${subId}" has nature = "common_subject"`);
    assert(reg.defaultTrackScope === 'common', `Subject "${subId}" has defaultTrackScope = "common"`);
    assert(
      !!reg.scientificFocusAr && reg.scientificFocusAr.length > 10,
      `Subject "${subId}" has detailed scientific focus in Arabic`
    );
    assert(
      !!reg.scientificFocusEn && reg.scientificFocusEn.length > 10,
      `Subject "${subId}" has detailed scientific focus in English`
    );
    assert(
      !!reg.literaryFocusAr && reg.literaryFocusAr.length > 10,
      `Subject "${subId}" has detailed literary focus in Arabic`
    );
    assert(
      !!reg.literaryFocusEn && reg.literaryFocusEn.length > 10,
      `Subject "${subId}" has detailed literary focus in English`
    );
  }
});

// 3. Verify Pure Scientific Subjects Classification
console.log('\n🔹 3. Verifying Pure Scientific Subjects:');
const pureSciSubjects = [
  'physics',
  'chemistry',
  'biology',
  'geology',
  'calculus',
  'algebra_solid',
  'statics',
  'dynamics',
  'cs_informatics',
  'ai_data_science',
  'robotics',
];

pureSciSubjects.forEach((subId) => {
  const reg = SUBJECT_TRACK_REGISTRY[subId];
  assert(!!reg, `Pure scientific subject "${subId}" exists`);
  if (reg) {
    assert(reg.nature === 'pure_scientific', `Subject "${subId}" is classified as "pure_scientific"`);
    assert(reg.defaultTrackScope === 'scientific', `Subject "${subId}" has defaultTrackScope = "scientific"`);
    assert(!isCommonSubject(subId), `isCommonSubject("${subId}") returns false`);
  }
});

// 4. Verify Pure Literary Subjects Classification
console.log('\n🔹 4. Verifying Pure Literary Subjects:');
const pureLitSubjects = ['history', 'geography', 'philosophy', 'psychology'];

pureLitSubjects.forEach((subId) => {
  const reg = SUBJECT_TRACK_REGISTRY[subId];
  assert(!!reg, `Pure literary subject "${subId}" exists`);
  if (reg) {
    assert(reg.nature === 'pure_literary', `Subject "${subId}" is classified as "pure_literary"`);
    assert(reg.defaultTrackScope === 'literary', `Subject "${subId}" has defaultTrackScope = "literary"`);
    assert(!isCommonSubject(subId), `isCommonSubject("${subId}") returns false`);
  }
});

// 5. Verify Chapter-level Scope Resolution
console.log('\n🔹 5. Verifying Chapter-level Track Scope Resolution:');

// Economics & Statistics chapter split
const econCh1Scope = getChapterTrackScope('economics_statistics', 'th_econ_ch1');
const econCh4Scope = getChapterTrackScope('economics_statistics', 'th_econ_ch4');
const statCh7Scope = getChapterTrackScope('economics_statistics', 'th_stat_ch7');
const statCh10Scope = getChapterTrackScope('economics_statistics', 'th_stat_ch10');

assert(econCh1Scope === 'literary', `Economics Chapter 1 resolves to "literary" (found: ${econCh1Scope})`);
assert(econCh4Scope === 'literary', `Economics Chapter 4 resolves to "literary" (found: ${econCh4Scope})`);
assert(statCh7Scope === 'scientific', `Statistics Chapter 7 resolves to "scientific" (found: ${statCh7Scope})`);
assert(statCh10Scope === 'scientific', `Statistics Chapter 10 resolves to "scientific" (found: ${statCh10Scope})`);

// English novel chapters vs core units
const engCh1Scope = getChapterTrackScope('english', 'th_eng_ch1');
const engNovelChScope = getChapterTrackScope('english', 'th_eng_ch13'); // Great Expectations novel
assert(engCh1Scope === 'common', `English Unit 1 resolves to "common" (found: ${engCh1Scope})`);
assert(engNovelChScope === 'literary', `English Great Expectations Novel resolves to "literary" (found: ${engNovelChScope})`);

// Arabic poetry/rhetoric chapters vs core grammar
const arGrammarScope = getChapterTrackScope('arabic', 'th_ar_ch1');
const arPoetryScope = getChapterTrackScope('arabic', 'th_ar_ch7');
assert(arGrammarScope === 'common', `Arabic Grammar Ch1 resolves to "common" (found: ${arGrammarScope})`);
assert(arPoetryScope === 'literary', `Arabic Literary Schools Ch7 resolves to "literary" (found: ${arPoetryScope})`);

// Pure scientific subject chapter resolution
const physChScope = getChapterTrackScope('physics', 'th_phys_ch1');
assert(physChScope === 'scientific', `Physics Chapter 1 resolves to "scientific" (found: ${physChScope})`);

// Pure literary subject chapter resolution
const histChScope = getChapterTrackScope('history', 'th_hist_ch1');
assert(histChScope === 'literary', `History Chapter 1 resolves to "literary" (found: ${histChScope})`);

// 6. Verify filterChaptersByTrackScope Functionality
console.log('\n🔹 6. Verifying filterChaptersByTrackScope filtering logic:');

const mockEconStatChapters: Chapter[] = [
  { id: 'ch1', chapterNumber: 1, titleAr: 'الاقتصاد والمشكلة الاقتصادية', titleEn: 'Economics', lessons: [] },
  { id: 'ch2', chapterNumber: 2, titleAr: 'عناصر الإنتاج', titleEn: 'Production', lessons: [] },
  { id: 'ch7', chapterNumber: 7, titleAr: 'الارتباط والانحدار الإحصائي', titleEn: 'Correlation', lessons: [] },
  { id: 'ch8', chapterNumber: 8, titleAr: 'الاحتمال الشرطي', titleEn: 'Probability', lessons: [] },
];

const allChapters = filterChaptersByTrackScope(mockEconStatChapters, 'economics_statistics', 'all');
assert(allChapters.length === 4, `Target 'all' returns all 4 chapters (got ${allChapters.length})`);

const sciChapters = filterChaptersByTrackScope(mockEconStatChapters, 'economics_statistics', 'scientific');
assert(
  sciChapters.length === 2 && sciChapters.every((c) => [7, 8].includes(c.chapterNumber)),
  `Target 'scientific' returns only chapters 7 & 8 (got ${sciChapters.map((c) => c.chapterNumber).join(', ')})`
);

const litChapters = filterChaptersByTrackScope(mockEconStatChapters, 'economics_statistics', 'literary');
assert(
  litChapters.length === 2 && litChapters.every((c) => [1, 2].includes(c.chapterNumber)),
  `Target 'literary' returns only chapters 1 & 2 (got ${litChapters.map((c) => c.chapterNumber).join(', ')})`
);

// 7. Verify Track Scope Info & UI Metas
console.log('\n🔹 7. Verifying Track Scope UI Info Labels & Color Accents:');
(['common', 'scientific', 'literary'] as TrackScope[]).forEach((scope) => {
  const infoAr = getTrackScopeInfo(scope, 'ar');
  const infoEn = getTrackScopeInfo(scope, 'en');

  assert(!!infoAr.label && infoAr.label.length > 0, `Scope "${scope}" has Arabic label (${infoAr.label})`);
  assert(!!infoEn.label && infoEn.label.length > 0, `Scope "${scope}" has English label (${infoEn.label})`);
  assert(!!infoAr.emoji, `Scope "${scope}" has emoji icon (${infoAr.emoji})`);
  assert(
    ['emerald', 'sky', 'amber'].includes(infoAr.badgeColor),
    `Scope "${scope}" has valid theme badgeColor (${infoAr.badgeColor})`
  );
});

console.log('\n========================================================================');
console.log(`📊 FINAL SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('========================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL TRACK SCOPE DIFFERENTIATION VERIFICATIONS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
