import { SUBJECTS, getSubjectById, getSubjectForBranch, getBranchesForSubject, getSubjectStats } from '../src/data/subjects';
import { thanaweyaCurriculum } from '../src/data/thanaweyaData';
import { egBacCurriculum } from '../src/data/egBacData';

console.log('🧪 Starting Subject Tracks & Dropdown Verification Test...\n');

let failed = false;
function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${message}`);
    failed = true;
  } else {
    console.log(`✅ ${message}`);
  }
}

// 1. Verify 4 Subjects Configured
assert(SUBJECTS.length === 4, `Expected 4 subjects, found ${SUBJECTS.length}`);
const subjectIds = SUBJECTS.map((s) => s.id);
assert(subjectIds.includes('mathematics'), 'Mathematics subject exists');
assert(subjectIds.includes('physics'), 'Physics subject exists');
assert(subjectIds.includes('chemistry'), 'Chemistry subject exists');
assert(subjectIds.includes('biology'), 'Biology subject exists');

// 2. Verify Metadata on all subjects
for (const sub of SUBJECTS) {
  assert(!!sub.titleEn && !!sub.titleAr, `Subject ${sub.id} has bilingual titles`);
  assert(!!sub.shortTitleEn && !!sub.shortTitleAr, `Subject ${sub.id} has bilingual short titles`);
  assert(!!sub.emoji, `Subject ${sub.id} has emoji: ${sub.emoji}`);
  assert(!!sub.iconName, `Subject ${sub.id} has Lucide icon name: ${sub.iconName}`);
  assert(!!sub.gradient, `Subject ${sub.id} has gradient styles`);
  assert(sub.branchIds.thanaweya.length > 0, `Subject ${sub.id} has thanaweya branches`);
  assert(sub.branchIds.egbac.length > 0, `Subject ${sub.id} has egbac branches`);
}

// 3. Verify Complete Branch Coverage in Thanaweya
console.log('\n--- Checking Thanaweya Branch Coverage ---');
for (const branch of thanaweyaCurriculum.branches) {
  const sub = getSubjectForBranch(branch.id, 'thanaweya');
  assert(!!sub, `Thanaweya branch "${branch.id}" is mapped to a subject (${sub?.id})`);
}

// 4. Verify Complete Branch Coverage in EG-Bac
console.log('\n--- Checking EG-Bac Branch Coverage ---');
for (const branch of egBacCurriculum.branches) {
  const sub = getSubjectForBranch(branch.id, 'egbac');
  assert(!!sub, `EG-Bac branch "${branch.id}" is mapped to a subject (${sub?.id})`);
}

// 5. Test getBranchesForSubject
console.log('\n--- Checking getBranchesForSubject ---');
const allThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'all');
assert(allThanaweya.length === thanaweyaCurriculum.branches.length, `getBranchesForSubject('all') returns all thanaweya branches (${allThanaweya.length})`);

const mathThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'mathematics');
assert(mathThanaweya.length === 4, `Mathematics in Thanaweya has 4 branches (Algebra, Calculus, Statics, Dynamics), found: ${mathThanaweya.length}`);

const physThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'physics');
assert(physThanaweya.length === 1, `Physics in Thanaweya has 1 branch, found: ${physThanaweya.length}`);

const chemThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'chemistry');
assert(chemThanaweya.length === 1, `Chemistry in Thanaweya has 1 branch, found: ${chemThanaweya.length}`);

const bioThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'biology');
assert(bioThanaweya.length === 1, `Biology in Thanaweya has 1 branch, found: ${bioThanaweya.length}`);

// 6. Test getSubjectStats
console.log('\n--- Checking Subject Stats Calculations ---');
const mathStats = getSubjectStats(thanaweyaCurriculum, 'mathematics');
assert(mathStats.totalChapters > 0, `Mathematics thanaweya chapters: ${mathStats.totalChapters}`);
assert(mathStats.totalProblems > 0, `Mathematics thanaweya problems: ${mathStats.totalProblems}`);

const allStats = getSubjectStats(thanaweyaCurriculum, 'all');
assert(allStats.totalChapters === 22, `Total thanaweya chapters: ${allStats.totalChapters}`);
assert(allStats.totalProblems === 3817, `Total thanaweya problems: ${allStats.totalProblems}`);

const egbacAllStats = getSubjectStats(egBacCurriculum, 'all');
assert(egbacAllStats.totalChapters === 11, `Total egbac chapters: ${egbacAllStats.totalChapters}`);
assert(egbacAllStats.totalProblems === 1617, `Total egbac problems: ${egbacAllStats.totalProblems}`);

const totalPlatformChapters = allStats.totalChapters + egbacAllStats.totalChapters;
const totalPlatformProblems = allStats.totalProblems + egbacAllStats.totalProblems;
assert(totalPlatformChapters === 33, `Total platform chapters across both curriculums: ${totalPlatformChapters}`);
assert(totalPlatformProblems === 5434, `Total platform problems across both curriculums: ${totalPlatformProblems}`);

if (failed) {
  console.error('\n❌ Verification failed with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 All Subject Track verifications passed with 100% accuracy!');
}
