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

// 1. Verify 16 Subjects Configured
assert(SUBJECTS.length === 16, `Expected 16 subjects, found ${SUBJECTS.length}`);
const subjectIds = SUBJECTS.map((s) => s.id);
assert(subjectIds.includes('mathematics'), 'Mathematics subject exists');
assert(subjectIds.includes('physics'), 'Physics subject exists');
assert(subjectIds.includes('chemistry'), 'Chemistry subject exists');
assert(subjectIds.includes('biology'), 'Biology subject exists');
assert(subjectIds.includes('english'), 'English subject exists');
assert(subjectIds.includes('french'), 'French subject exists');
assert(subjectIds.includes('german'), 'German subject exists');
assert(subjectIds.includes('arabic'), 'Arabic subject exists');
assert(subjectIds.includes('history'), 'History subject exists');
assert(subjectIds.includes('geography'), 'Geography subject exists');
assert(subjectIds.includes('geology'), 'Geology subject exists');
assert(subjectIds.includes('philosophy'), 'Philosophy subject exists');
assert(subjectIds.includes('psychology'), 'Psychology subject exists');
assert(subjectIds.includes('economics_stat'), 'Economics & Applied Statistics subject exists');
assert(subjectIds.includes('cs_informatics'), 'Computer Science & Informatics subject exists');
assert(subjectIds.includes('earth_space'), 'Earth & Planetary Space Sciences subject exists');

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

const histThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'history');
assert(histThanaweya.length === 1, `History in Thanaweya has 1 branch, found: ${histThanaweya.length}`);

const geoThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'geography');
assert(geoThanaweya.length === 1, `Geography in Thanaweya has 1 branch, found: ${geoThanaweya.length}`);

const geolThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'geology');
assert(geolThanaweya.length === 1, `Geology in Thanaweya has 1 branch, found: ${geolThanaweya.length}`);

const philThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'philosophy');
assert(philThanaweya.length === 1, `Philosophy in Thanaweya has 1 branch, found: ${philThanaweya.length}`);

const psychThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'psychology');
assert(psychThanaweya.length === 1, `Psychology in Thanaweya has 1 branch, found: ${psychThanaweya.length}`);

const econStatThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'economics_stat');
assert(econStatThanaweya.length === 1, `Economics & Statistics in Thanaweya has 1 branch, found: ${econStatThanaweya.length}`);

const csInformaticsThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'cs_informatics');
assert(csInformaticsThanaweya.length === 1, `Computer Science & Informatics in Thanaweya has 1 branch, found: ${csInformaticsThanaweya.length}`);

const earthSpaceThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'earth_space');
assert(earthSpaceThanaweya.length === 1, `Earth & Planetary Space Sciences in Thanaweya has 1 branch, found: ${earthSpaceThanaweya.length}`);

const germanThanaweya = getBranchesForSubject(thanaweyaCurriculum, 'german');
assert(germanThanaweya.length === 1, `German in Thanaweya has 1 branch, found: ${germanThanaweya.length}`);

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

const histStats = getSubjectStats(thanaweyaCurriculum, 'history');
assert(histStats.totalChapters === 8, `History thanaweya chapters: ${histStats.totalChapters} (expected 8)`);
assert(histStats.totalProblems === 1600, `History thanaweya problems: ${histStats.totalProblems} (expected 1600)`);

const geoStats = getSubjectStats(thanaweyaCurriculum, 'geography');
assert(geoStats.totalChapters === 5, `Geography thanaweya chapters: ${geoStats.totalChapters} (expected 5)`);
assert(geoStats.totalProblems === 1000, `Geography thanaweya problems: ${geoStats.totalProblems} (expected 1000)`);

const geolStats = getSubjectStats(thanaweyaCurriculum, 'geology');
assert(geolStats.totalChapters === 7, `Geology thanaweya chapters: ${geolStats.totalChapters} (expected 7)`);
assert(geolStats.totalProblems === 1400, `Geology thanaweya problems: ${geolStats.totalProblems} (expected 1400)`);

const philStats = getSubjectStats(thanaweyaCurriculum, 'philosophy');
assert(philStats.totalChapters === 8, `Philosophy thanaweya chapters: ${philStats.totalChapters} (expected 8)`);
assert(philStats.totalProblems === 1600, `Philosophy thanaweya problems: ${philStats.totalProblems} (expected 1600)`);

const psychStats = getSubjectStats(thanaweyaCurriculum, 'psychology');
assert(psychStats.totalChapters === 8, `Psychology thanaweya chapters: ${psychStats.totalChapters} (expected 8)`);
assert(psychStats.totalProblems === 1600, `Psychology thanaweya problems: ${psychStats.totalProblems} (expected 1600)`);

const econStatStats = getSubjectStats(thanaweyaCurriculum, 'economics_stat');
assert(econStatStats.totalChapters === 10, `Economics & Statistics thanaweya chapters: ${econStatStats.totalChapters} (expected 10)`);
assert(econStatStats.totalProblems === 2000, `Economics & Statistics thanaweya problems: ${econStatStats.totalProblems} (expected 2000)`);

const csStats = getSubjectStats(thanaweyaCurriculum, 'cs_informatics');
assert(csStats.totalChapters === 10, `Computer Science & Informatics thanaweya chapters: ${csStats.totalChapters} (expected 10)`);
assert(csStats.totalProblems === 2000, `Computer Science & Informatics thanaweya problems: ${csStats.totalProblems} (expected 2000)`);

const earthSpaceStats = getSubjectStats(thanaweyaCurriculum, 'earth_space');
assert(earthSpaceStats.totalChapters === 10, `Earth & Planetary Space Sciences thanaweya chapters: ${earthSpaceStats.totalChapters} (expected 10)`);
assert(earthSpaceStats.totalProblems === 2000, `Earth & Planetary Space Sciences thanaweya problems: ${earthSpaceStats.totalProblems} (expected 2000)`);

const germanStats = getSubjectStats(thanaweyaCurriculum, 'german');
assert(germanStats.totalChapters === 4, `German thanaweya chapters: ${germanStats.totalChapters} (expected 4)`);
assert(germanStats.totalProblems === 800, `German thanaweya problems: ${germanStats.totalProblems} (expected 800)`);

const allStats = getSubjectStats(thanaweyaCurriculum, 'all');
assert(allStats.totalChapters === 119, `Total thanaweya chapters: ${allStats.totalChapters} (expected 119)`);
assert(allStats.totalProblems === 23800, `Total thanaweya problems: ${allStats.totalProblems} (expected 23800)`);

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

const egbacHistStats = getSubjectStats(egBacCurriculum, 'history');
assert(egbacHistStats.totalChapters === 8, `History egbac chapters: ${egbacHistStats.totalChapters} (expected 8)`);
assert(egbacHistStats.totalProblems === 1600, `History egbac problems: ${egbacHistStats.totalProblems} (expected 1600)`);

const egbacGeoStats = getSubjectStats(egBacCurriculum, 'geography');
assert(egbacGeoStats.totalChapters === 5, `Geography egbac chapters: ${egbacGeoStats.totalChapters} (expected 5)`);
assert(egbacGeoStats.totalProblems === 1000, `Geography egbac problems: ${egbacGeoStats.totalProblems} (expected 1000)`);

const egbacGeolStats = getSubjectStats(egBacCurriculum, 'geology');
assert(egbacGeolStats.totalChapters === 7, `Geology egbac chapters: ${egbacGeolStats.totalChapters} (expected 7)`);
assert(egbacGeolStats.totalProblems === 1400, `Geology egbac problems: ${egbacGeolStats.totalProblems} (expected 1400)`);

const egbacPhilStats = getSubjectStats(egBacCurriculum, 'philosophy');
assert(egbacPhilStats.totalChapters === 8, `Philosophy egbac chapters: ${egbacPhilStats.totalChapters} (expected 8)`);
assert(egbacPhilStats.totalProblems === 1600, `Philosophy egbac problems: ${egbacPhilStats.totalProblems} (expected 1600)`);

const egbacPsychStats = getSubjectStats(egBacCurriculum, 'psychology');
assert(egbacPsychStats.totalChapters === 8, `Psychology egbac chapters: ${egbacPsychStats.totalChapters} (expected 8)`);
assert(egbacPsychStats.totalProblems === 1600, `Psychology egbac problems: ${egbacPsychStats.totalProblems} (expected 1600)`);

const egbacEconStatStats = getSubjectStats(egBacCurriculum, 'economics_stat');
assert(egbacEconStatStats.totalChapters === 10, `Economics & Statistics egbac chapters: ${egbacEconStatStats.totalChapters} (expected 10)`);
assert(egbacEconStatStats.totalProblems === 2000, `Economics & Statistics egbac problems: ${egbacEconStatStats.totalProblems} (expected 2000)`);

const egbacCsStats = getSubjectStats(egBacCurriculum, 'cs_informatics');
assert(egbacCsStats.totalChapters === 10, `Computer Science & Informatics egbac chapters: ${egbacCsStats.totalChapters} (expected 10)`);
assert(egbacCsStats.totalProblems === 2000, `Computer Science & Informatics egbac problems: ${egbacCsStats.totalProblems} (expected 2000)`);

const egbacEarthSpaceStats = getSubjectStats(egBacCurriculum, 'earth_space');
assert(egbacEarthSpaceStats.totalChapters === 10, `Earth & Planetary Space Sciences egbac chapters: ${egbacEarthSpaceStats.totalChapters} (expected 10)`);
assert(egbacEarthSpaceStats.totalProblems === 2000, `Earth & Planetary Space Sciences egbac problems: ${egbacEarthSpaceStats.totalProblems} (expected 2000)`);

const egbacGermanStats = getSubjectStats(egBacCurriculum, 'german');
assert(egbacGermanStats.totalChapters === 4, `German egbac chapters: ${egbacGermanStats.totalChapters} (expected 4)`);
assert(egbacGermanStats.totalProblems === 800, `German egbac problems: ${egbacGermanStats.totalProblems} (expected 800)`);

const egbacAllStats = getSubjectStats(egBacCurriculum, 'all');
assert(egbacAllStats.totalChapters === 106, `Total egbac chapters: ${egbacAllStats.totalChapters} (expected 106)`);
assert(egbacAllStats.totalProblems === 21200, `Total egbac problems: ${egbacAllStats.totalProblems} (expected 21200)`);

const totalChaptersAcrossCurricula = allStats.totalChapters + egbacAllStats.totalChapters;
const totalProblemsAcrossCurricula = allStats.totalProblems + egbacAllStats.totalProblems;
assert(totalChaptersAcrossCurricula === 225, `Total platform chapters across both curriculums: ${totalChaptersAcrossCurricula} (expected 225)`);
assert(totalProblemsAcrossCurricula === 45000, `Total platform problems across both curriculums: ${totalProblemsAcrossCurricula} (expected 45000)`);

if (failed) {
  console.error('\n❌ Verification failed with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 All Subject Track verifications passed with 100% accuracy!');
}
