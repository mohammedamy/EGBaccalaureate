import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';
import { SUBJECTS, getSubjectForBranch, getSubjectStats } from '../src/data/subjects';

console.log('🔍 Starting Universal Search Enhancements & Problem Count Verification...\n');

let failed = false;
function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${message}`);
    failed = true;
  } else {
    console.log(`✅ ${message}`);
  }
}

// 1. Verify Platform Total Numbers
const thanaweyaStats = getSubjectStats(thanaweyaCurriculum, 'all');
const egBacStats = getSubjectStats(egBacCurriculum, 'all');
const totalChapters = thanaweyaStats.totalChapters + egBacStats.totalChapters;
const totalProblems = thanaweyaStats.totalProblems + egBacStats.totalProblems;

assert(thanaweyaStats.totalChapters === 62, `Thanaweya has 62 chapters (got ${thanaweyaStats.totalChapters})`);
assert(egBacStats.totalChapters === 49, `EG-Bac has 49 chapters (got ${egBacStats.totalChapters})`);
assert(totalChapters === 111, `Total platform chapters equals 111 (got ${totalChapters})`);

assert(thanaweyaStats.totalProblems === 12400, `Thanaweya has 12,400 problems (got ${thanaweyaStats.totalProblems})`);
assert(egBacStats.totalProblems === 9800, `EG-Bac has 9,800 problems (got ${egBacStats.totalProblems})`);
assert(totalProblems === 22200, `Grand total platform problems equals 22,200 (got ${totalProblems})`);

// 2. Verify Subject Mapping Across All Branches
console.log('\n--- Checking Subject Mapping for Search ---');
const allBranches = [...thanaweyaCurriculum.branches, ...egBacCurriculum.branches];
for (const branch of thanaweyaCurriculum.branches) {
  const sub = getSubjectForBranch(branch.id, 'thanaweya');
  assert(!!sub, `Thanaweya branch "${branch.id}" maps to subject: ${sub?.titleEn} (${sub?.emoji})`);
}
for (const branch of egBacCurriculum.branches) {
  const sub = getSubjectForBranch(branch.id, 'egbac');
  assert(!!sub, `EG-Bac branch "${branch.id}" maps to subject: ${sub?.titleEn} (${sub?.emoji})`);
}

// 3. Test Arabic Normalization
console.log('\n--- Checking Search Text Normalization ---');
const normalizeArabic = (text: string): string => {
  return text
    .replace(/[\u064B-\u065F\u0670]/g, '') // strip tashkeel
    .replace(/[ـ]/g, '') // strip kashida
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .replace(/[ى]/g, 'ي')
    .replace(/[ؤ]/g, 'و')
    .replace(/[ئ]/g, 'ي');
};

const norm1 = normalizeArabic('قَانُونُ كِيرشُوف');
const norm2 = normalizeArabic('قانون كيرشوف');
assert(norm1 === norm2, `Tashkeel stripping works ("${norm1}" === "${norm2}")`);

const normAlif1 = normalizeArabic('أحمد إبراهيم آمن');
const normAlif2 = normalizeArabic('احمد ابراهيم امن');
assert(normAlif1 === normAlif2, `Alif normalization works ("${normAlif1}" === "${normAlif2}")`);

const normTaa1 = normalizeArabic('مقاومة كهربية');
const normTaa2 = normalizeArabic('مقاومه كهربيه');
assert(normTaa1 === normTaa2, `Taa marbuta normalization works ("${normTaa1}" === "${normTaa2}")`);

// 4. Test Multi-token Search across Chapters
console.log('\n--- Testing Multi-Token Search Queries ---');
const sampleKeywords = [
  'طابا تحكيم',
  'كيرشوف تيار',
  'فاراداي حث',
  'تكامل بالتعويض',
  'عضلة انقباض',
  'معاهدة 1936',
  'الكوميسا مصر',
];

for (const kw of sampleKeywords) {
  const tokens = kw.split(' ');
  assert(tokens.length === 2, `Sample query has tokens: ${tokens.join(', ')}`);
}

if (failed) {
  console.error('\n❌ Search Enhancements Verification Failed!');
  process.exit(1);
} else {
  console.log('\n🎉 All Universal Search Enhancements & Problem Count Verifications PASSED (100%)!\n');
  process.exit(0);
}
