/**
 * Verification Suite for Phase 4: System (المنظومة)
 * Verifies:
 * 1. Ministry Results Linkage, URL builders, track definitions, and score calibration.
 * 2. 27 Egyptian Governorates, 6 Regional Zones, and Rural-Urban Parity Index (Section 7).
 * 3. 100% Free Core Charter & Philanthropic Sponsorship Model (Pillar E / Risk 3).
 * 4. Arabic Accessibility & Mathematical KaTeX Phonetic Transcription for Screen Readers.
 * 5. Learning Outcomes Controlled Study Simulation (N=500, Cohen's d, percentile rank gain).
 */

import {
  OFFICIAL_PORTALS,
  OFFICIAL_TRACK_SUBJECTS,
  getInitialSubjectScoresForTrack,
  calculateResultsSummary,
  computeScoreCalibration,
} from '../src/services/ministryResultsService';
import {
  EGYPTIAN_GOVERNORATES,
  getAllGovernorates,
  getRegionalZoneSummaries,
  getRuralUrbanParityReport,
  exportGovernorateReportCSV,
} from '../src/services/governorateAnalyticsService';
import {
  getCorePlatformCharter,
  ACCREDITED_SPONSORS,
  submitSponsorGrantApplication,
} from '../src/services/sponsorshipModelService';
import {
  convertLatexToReadableArabic,
  audioCues,
} from '../src/services/accessibilityAuditService';
import {
  generateControlledCohortSamples,
  runLearningOutcomesEvaluationSimulation,
  exportLearningOutcomesReportCSV,
} from '../src/services/learningOutcomesEvaluationService';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    failed++;
  }
}

console.log('====================================================');
console.log('🏛️  VERIFYING PHASE 4: SYSTEM / المنظومة (EGBaccalaureate)');
console.log('====================================================\n');

// ---------------------------------------------------------------------------
// 1. Ministry Results Linkage & Score Calibration
// ---------------------------------------------------------------------------
console.log('📌 1. Ministry Results Linkage & Score Verification:');

assert(OFFICIAL_PORTALS.length >= 4, `Official portals count >= 4 (found ${OFFICIAL_PORTALS.length})`);
const emisPortal = OFFICIAL_PORTALS.find((p) => p.id === 'emis_gov');
assert(emisPortal !== undefined, 'EMIS Ministry official portal is registered');
assert(
  emisPortal!.buildQueryUrl('123456').includes('123456'),
  'EMIS query URL cleanly injects seat number'
);
assert(
  emisPortal!.buildQueryUrl('').includes('g12.emis.gov.eg'),
  'EMIS empty query URL returns safe base URL'
);

const mathSubjects = getInitialSubjectScoresForTrack('scientific_math');
assert(mathSubjects.length === 7, `Scientific Math track has 7 subjects (found ${mathSubjects.length})`);
const scienceSubjects = getInitialSubjectScoresForTrack('scientific_science');
assert(scienceSubjects.length === 7, `Scientific Science track has 7 subjects (found ${scienceSubjects.length})`);
const literarySubjects = getInitialSubjectScoresForTrack('literary');
assert(literarySubjects.length === 7, `Literary track has 7 subjects (found ${literarySubjects.length})`);

// Test total mark calculation (e.g. perfect score)
const samplePerfect = mathSubjects.map((s) => ({ ...s, studentMarks: s.maxMarks }));
const summaryPerfect = calculateResultsSummary(samplePerfect);
assert(summaryPerfect.totalMarks === 410, `Perfect score total is 410 (got ${summaryPerfect.totalMarks})`);
assert(summaryPerfect.percentage === 100, `Perfect score percentage is 100% (got ${summaryPerfect.percentage}%)`);

// Test calibration calculation
const calibOver = computeScoreCalibration(80, 88);
assert(calibOver.direction === 'underestimated', 'Calibration identifies underestimated predicted score');
assert(calibOver.calibrationFactor === 1.1, `Calibration factor computed: ${calibOver.calibrationFactor}`);

const calibExact = computeScoreCalibration(85, 85);
assert(calibExact.direction === 'exact', 'Calibration identifies exact prediction alignment');

// ---------------------------------------------------------------------------
// 2. 27 Egyptian Governorates & Rural-Urban Parity
// ---------------------------------------------------------------------------
console.log('\n📌 2. Egyptian Governorates & Regional Equity Analytics:');

const allGovs = getAllGovernorates();
assert(allGovs.length === 27, `Exactly 27 Egyptian governorates registered (found ${allGovs.length})`);

const zones = getRegionalZoneSummaries();
assert(zones.length === 6, `All 6 official regional planning zones summarized (found ${zones.length})`);

const upperEgypt = zones.find((z) => z.zone === 'upper_egypt');
assert(upperEgypt !== undefined, 'Upper Egypt zone correctly evaluated');
assert(upperEgypt!.governoratesCount === 8, `Upper Egypt includes 8 governorates (found ${upperEgypt!.governoratesCount})`);

const parityReport = getRuralUrbanParityReport();
assert(parityReport.isTargetMet === true, `Rural-Urban Parity target met (Gap: ${parityReport.parityGapPercentage}% <= 10%)`);
assert(parityReport.parityRatio >= 90.0, `Rural-to-Urban readiness ratio >= 90% (got ${parityReport.parityRatio}%)`);

const csvReport = exportGovernorateReportCSV();
assert(csvReport.startsWith('\uFEFF'), 'Governorates CSV begins with UTF-8 BOM for Arabic Excel support');
assert(csvReport.includes('سوهاج') && csvReport.includes('القاهرة'), 'CSV includes both Upper Egypt and Cairo governorates');

// ---------------------------------------------------------------------------
// 3. Free Platform Charter & Philanthropic Sponsorship
// ---------------------------------------------------------------------------
console.log('\n📌 3. Sustainable Platform & Free Learning Guarantee:');

const charter = getCorePlatformCharter();
assert(charter.manifestoAr.length > 50, 'Core platform charter manifesto in Arabic is defined');
assert(charter.guaranteedFreeFeatures.length === 6, `Charter defines 6 guaranteed free learning pillars (found ${charter.guaranteedFreeFeatures.length})`);

assert(ACCREDITED_SPONSORS.length >= 4, `Accredited sponsors count >= 4 (found ${ACCREDITED_SPONSORS.length})`);
const misrElkheir = ACCREDITED_SPONSORS.find((s) => s.id === 'misr_el_kheir');
assert(misrElkheir !== undefined, 'Misr El-Kheir Foundation registered as educational sponsor');
assert(misrElkheir!.sponsoredGovernorates.includes('سوهاج'), 'Misr El-Kheir sponsors Upper Egypt governorates');

const grantApp = submitSponsorGrantApplication(
  'مدرسة النور الثانوية',
  'سوهاج',
  150,
  'أ/ محمود علي',
  'principal@example.com'
);
assert(grantApp.id.startsWith('GRANT-'), `Sponsor grant application generated with valid serial: ${grantApp.id}`);
assert(grantApp.status === 'pending', 'New grant application initializes in pending review state');

// ---------------------------------------------------------------------------
// 4. Arabic Accessibility & KaTeX Phonetic Transcription
// ---------------------------------------------------------------------------
console.log('\n📌 4. Arabic Accessibility & Screen Reader Audit:');

const fractionText = convertLatexToReadableArabic('\\frac{a}{b}');
assert(fractionText.includes('كسر: بسطه a ومقامه b'), `Fractions transcribed to natural Arabic: "${fractionText}"`);

const sqrtText = convertLatexToReadableArabic('\\sqrt{x}');
assert(sqrtText.includes('الجذر التربيعي لـ x'), `Square roots transcribed to natural Arabic: "${sqrtText}"`);

const trigText = convertLatexToReadableArabic('\\sin\\theta');
assert(trigText.includes('جا') && trigText.includes('ثيتا'), `Trigonometric and Greek symbols transcribed: "${trigText}"`);

assert(audioCues !== undefined, 'Web Audio acoustic cue synthesizer instance available');

// ---------------------------------------------------------------------------
// 5. Learning Outcomes Controlled Study Simulation
// ---------------------------------------------------------------------------
console.log('\n📌 5. Learning Outcomes Controlled Study Evaluation (N=500):');

const cohortSamples = generateControlledCohortSamples();
assert(cohortSamples.length === 500, `Cohort sample size is exactly 500 (found ${cohortSamples.length})`);

const controlSamples = cohortSamples.filter((s) => s.group === 'control_tutoring');
const interventionSamples = cohortSamples.filter((s) => s.group === 'intervention_clipsat');
assert(controlSamples.length === 250, `Control group has 250 students (found ${controlSamples.length})`);
assert(interventionSamples.length === 250, `Intervention group has 250 students (found ${interventionSamples.length})`);

const studyResult = runLearningOutcomesEvaluationSimulation();
assert(studyResult.sampleSize === 500, 'Study evaluation evaluates all 500 students');
assert(
  studyResult.comparativeOutcomes.cohensDEffectSize >= 0.50,
  `Cohen's d effect size exceeds target >= 0.50 (got ${studyResult.comparativeOutcomes.cohensDEffectSize})`
);
assert(
  studyResult.comparativeOutcomes.percentileRankGain >= 5.0,
  `Percentile rank gain exceeds target >= 5.0 points (got +${studyResult.comparativeOutcomes.percentileRankGain})`
);
assert(
  studyResult.comparativeOutcomes.conceptGapErrorReductionPct >= 30.0,
  `Concept gap error reduction exceeds target >= 30% (got ${studyResult.comparativeOutcomes.conceptGapErrorReductionPct}%)`
);
assert(
  studyResult.comparativeOutcomes.offlineCompletionRatePct >= 80.0,
  `Offline session completion exceeds target >= 80% (got ${studyResult.comparativeOutcomes.offlineCompletionRatePct}%)`
);
assert(studyResult.comparativeOutcomes.statisticallySignificant === true, 'Study confirms p < 0.001 statistical significance');

const studyCsv = exportLearningOutcomesReportCSV();
assert(studyCsv.startsWith('\uFEFF'), 'Study dataset CSV includes UTF-8 BOM');
assert(studyCsv.includes('STU-1001') && studyCsv.includes('STU-1500'), 'Study dataset covers first and last students');

// ---------------------------------------------------------------------------
// Final Summary
// ---------------------------------------------------------------------------
console.log('\n====================================================');
console.log(`📊 PHASE 4 VERIFICATION SUMMARY: ${passed}/${passed + failed} Passed (${Math.round((passed / (passed + failed)) * 100)}%)`);
console.log('====================================================');

if (failed > 0) {
  console.error(`❌ ${failed} checks failed in Phase 4 verification!`);
  process.exit(1);
} else {
  console.log('🎉 ALL PHASE 4 SYSTEM REQUIREMENTS VERIFIED WITH 100% COMPLIANCE!');
  process.exit(0);
}
