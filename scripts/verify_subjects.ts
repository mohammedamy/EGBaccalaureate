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

// 1. Verify 7 Subjects Configured
assert(SUBJECTS.length === 7, `Expected 7 subjects, found ${SUBJECTS.length}`);
const subjectIds = SUBJECTS.map((s) => s.id);
assert(subjectIds.includes('mathematics'), 'Mathematics subject exists');
assert(subjectIds.includes('physics'), 'Physics subject exists');
assert(subjectIds.includes('chemistry'), 'Chemistry subject exists');
assert(subjectIds.includes('biology'), 'Biology subject exists');
assert(subjectIds.includes('english'), 'English subject exists');
assert(subjectIds.includes('french'), 'French subject exists');
assert(subjectIds.includes('arabic'), 'Arabic subject exists');

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

const engThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'english');
assert(engThanaweya.length === 1, `English in Thanaweya has 1 branch, found: ${engThanaweya.length}`);

const frThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'french');
assert(frThanaweya.length === 1, `French in Thanaweya has 1 branch, found: ${frThanaweya.length}`);

const arThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'arabic');
assert(arThanaweya.length === 1, `Arabic in Thanaweya has 1 branch, found: ${arThanaweya.length}`);

// 6. Test getSubjectStats
console.log('\n--- Checking Subject Stats Calculations ---');
const mathStats = getSubjectStats(thanaweyaCurriculum, 'mathematics');
assert(mathStats.totalChapters > 0, `Mathematics thanaweya chapters: ${mathStats.totalChapters}`);
assert(mathStats.totalProblems > 0, `Mathematics thanaweya problems: ${mathStats.totalProblems}`);

const bioStats = getSubjectStats(thanaweyaCurriculum, 'biology');
assert(bioStats.totalChapters === 5, `Biology thanaweya chapters: ${bioStats.totalChapters} (expected 5)`);
assert(bioStats.totalProblems === 1000, `Biology thanaweya problems: ${bioStats.totalProblems} (expected 1000)`);

const physStats = getSubjectStats(thanaweyaCurriculum, 'physics');
assert(physStats.totalChapters === 6, `Physics thanaweya chapters: ${physStats.totalChapters} (expected 6)`);
assert(physStats.totalProblems === 1200, `Physics thanaweya problems: ${physStats.totalProblems} (expected 1200)`);

const chemStats = getSubjectStats(thanaweyaCurriculum, 'chemistry');
assert(chemStats.totalChapters === 5, `Chemistry thanaweya chapters: ${chemStats.totalChapters} (expected 5)`);
assert(chemStats.totalProblems === 1000, `Chemistry thanaweya problems: ${chemStats.totalProblems} (expected 1000)`);

const engStats = getSubjectStats(thanaweyaCurriculum, 'english');
assert(engStats.totalChapters === 6, `English thanaweya chapters: ${engStats.totalChapters} (expected 6)`);
assert(engStats.totalProblems === 1200, `English thanaweya problems: ${engStats.totalProblems} (expected 1200)`);

const frStats = getSubjectStats(thanaweyaCurriculum, 'french');
assert(frStats.totalChapters === 4, `French thanaweya chapters: ${frStats.totalChapters} (expected 4)`);
assert(frStats.totalProblems === 800, `French thanaweya problems: ${frStats.totalProblems} (expected 800)`);

const arStats = getSubjectStats(thanaweyaCurriculum, 'arabic');
assert(arStats.totalChapters === 4, `Arabic thanaweya chapters: ${arStats.totalChapters} (expected 4)`);
assert(arStats.totalProblems === 800, `Arabic thanaweya problems: ${arStats.totalProblems} (expected 800)`);

const allStats = getSubjectStats(thanaweyaCurriculum, 'all');
assert(allStats.totalChapters === 49, `Total thanaweya chapters: ${allStats.totalChapters} (expected 49)`);
assert(allStats.totalProblems === 9800, `Total thanaweya problems: ${allStats.totalProblems} (expected 9800)`);

const egbacPhysStats = getSubjectStats(egBacCurriculum, 'physics');
assert(egbacPhysStats.totalChapters === 5, `Physics egbac chapters: ${egbacPhysStats.totalChapters} (expected 5)`);
assert(egbacPhysStats.totalProblems === 1000, `Physics egbac problems: ${egbacPhysStats.totalProblems} (expected 1000)`);

const egbacBioStats = getSubjectStats(egBacCurriculum, 'biology');
assert(egbacBioStats.totalChapters === 4, `Biology egbac chapters: ${egbacBioStats.totalChapters} (expected 4)`);
assert(egbacBioStats.totalProblems === 800, `Biology egbac problems: ${egbacBioStats.totalProblems} (expected 800)`);

const egbacChemStats = getSubjectStats(egBacCurriculum, 'chemistry');
assert(egbacChemStats.totalChapters === 5, `Chemistry egbac chapters: ${egbacChemStats.totalChapters} (expected 5)`);
assert(egbacChemStats.totalProblems === 1000, `Chemistry egbac problems: ${egbacChemStats.totalProblems} (expected 1000)`);

const egbacEngStats = getSubjectStats(egBacCurriculum, 'english');
assert(egbacEngStats.totalChapters === 6, `English egbac chapters: ${egbacEngStats.totalChapters} (expected 6)`);
assert(egbacEngStats.totalProblems === 1200, `English egbac problems: ${egbacEngStats.totalProblems} (expected 1200)`);

const egbacFrStats = getSubjectStats(egBacCurriculum, 'french');
assert(egbacFrStats.totalChapters === 4, `French egbac chapters: ${egbacFrStats.totalChapters} (expected 4)`);
assert(egbacFrStats.totalProblems === 800, `French egbac problems: ${egbacFrStats.totalProblems} (expected 800)`);

const egbacArStats = getSubjectStats(egBacCurriculum, 'arabic');
assert(egbacArStats.totalChapters === 4, `Arabic egbac chapters: ${egbacArStats.totalChapters} (expected 4)`);
assert(egbacArStats.totalProblems === 800, `Arabic egbac problems: ${egbacArStats.totalProblems} (expected 800)`);

const egbacAllStats = getSubjectStats(egBacCurriculum, 'all');
assert(egbacAllStats.totalChapters === 36, `Total egbac chapters: ${egbacAllStats.totalChapters} (expected 36)`);
assert(egbacAllStats.totalProblems === 7200, `Total egbac problems: ${egbacAllStats.totalProblems} (expected 7200)`);

const totalPlatformChapters = allStats.totalChapters + egbacAllStats.totalChapters;
const totalPlatformProblems = allStats.totalProblems + egbacAllStats.totalProblems;
assert(totalPlatformChapters === 85, `Total platform chapters across both curriculums: ${totalPlatformChapters} (expected 85)`);
assert(totalPlatformProblems === 17000, `Total platform problems across both curriculums: ${totalPlatformProblems} (expected 17000)`);

if (failed) {
  console.error('\n❌ Verification failed with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 All Subject Track verifications passed with 100% accuracy!');
}
