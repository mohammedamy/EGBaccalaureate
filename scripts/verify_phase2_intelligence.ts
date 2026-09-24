/**
 * Phase 2 Intelligence Verification Script
 * Validates:
 * 1. Teacher Assignment System (Code generation, dual-storage, analytics aggregation, offline URL packing)
 * 2. Offline Download Manager (Subject packs registry, quota estimation, cache tracking)
 * 3. Calibrated Score Prediction & Confidence Intervals (Binomial standard error, margin of error, calibration factor)
 * 4. Automatic Distractor Error Pattern Classification (Sign inversion, unit scaling, negation traps, formula reciprocal)
 */

import {
  generateAssignmentCode,
  createAssignment,
  getAssignmentByCode,
  submitAssignment,
  getClassAnalytics,
  encodeAssignmentToShareableUrl,
  decodeAssignmentFromUrl,
} from '../src/services/teacherAssignmentService';
import {
  SUBJECT_PACKAGES,
  getStorageQuota,
  getDownloadedSubjectPackIds,
  downloadSubjectPack,
  removeSubjectPack,
  isSubjectPackDownloaded,
} from '../src/services/downloadManagerService';
import {
  getPredictiveScore,
  setActualScoreCalibration,
  resetActualScoreCalibration,
  getActualScoreCalibrationRatio,
  type StudentAnalyticsState,
} from '../src/services/studentAnalyticsService';
import { classifyErrorPattern } from '../src/services/errorPatternClassifier';

// In-memory mock localStorage for Node.js environment
const mockStorage: Record<string, string> = {};
(globalThis as any).localStorage = {
  getItem: (key: string) => mockStorage[key] || null,
  setItem: (key: string, val: string) => { mockStorage[key] = val; },
  removeItem: (key: string) => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); },
};

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passedCount++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failedCount++;
    console.error(`  ❌ FAIL: ${testName}${detail ? ` (${detail})` : ''}`);
  }
}

async function runTests() {
  console.log('===============================================================');
  console.log('🧠 PHASE 2 INTELLIGENCE: VERIFICATION SUITE');
  console.log('===============================================================\n');

  // -------------------------------------------------------------------------
  // SECTION 1: Teacher Assignment System
  // -------------------------------------------------------------------------
  console.log('--- [1/4] Teacher Assignment System & Offline URL Packing ---');

  // 1.1 6-Character code format and readability
  const code1 = generateAssignmentCode('MATH');
  const code2 = generateAssignmentCode('PHYS');
  const code3 = generateAssignmentCode();

  assert(code1.length === 6, 'Generated code is exactly 6 characters');
  assert(code1.startsWith('MATH'), 'Code preserves valid subject prefix');
  assert(!/[01OIL]/.test(code3), 'Code excludes confusing characters (0, 1, O, I, L)');

  // 1.2 Assignment creation and local storage retrieval
  const testAsgnCode = 'ST' + Math.floor(1000 + Math.random() * 8999);
  const asgn = await createAssignment({
    title: 'Statics Friction & Moments Quiz',
    titleAr: 'اختبار الاستاتيكا - الاحتكاك والعزوم',
    subjectId: 'applied_math',
    chapterIds: ['stat_ch1', 'stat_ch2'],
    questionIds: ['q1', 'q2', 'q3', 'q4', 'q5'],
    totalPoints: 20,
    timeLimitMinutes: 25,
    teacherName: 'أ/ حسام عبد الله',
    teacherTip: 'انتبه لإشارة عزم القوة بالنسبة للنقطة',
  }, testAsgnCode);

  assert(asgn.assignmentCode === testAsgnCode, 'Assignment created with specified code');
  assert(asgn.totalPoints === 20, 'Assignment total points match');

  const resolved = await getAssignmentByCode(testAsgnCode.toLowerCase());
  assert(resolved !== null && resolved.titleAr === 'اختبار الاستاتيكا - الاحتكاك والعزوم', 'Resolved assignment case-insensitively from cache');

  // 1.3 Offline URL Packing Round-Trip Test
  const packedUrl = encodeAssignmentToShareableUrl(asgn, 'https://mohammedamy.github.io/EGBaccalaureate/');
  assert(packedUrl.includes('tab=testGenerator'), 'Shareable URL points to testGenerator tab');
  assert(packedUrl.includes('asgn='), 'Shareable URL contains packed payload query parameter');

  const urlParams = new URL(packedUrl).searchParams;
  const encodedPayload = urlParams.get('asgn') || '';
  const unpackedAsgn = decodeAssignmentFromUrl(encodedPayload);

  assert(unpackedAsgn !== null, 'Decoded assignment from URL payload');
  assert(unpackedAsgn?.assignmentCode === testAsgnCode, 'Unpacked assignment code matches original');
  assert(unpackedAsgn?.subjectId === 'applied_math', 'Unpacked subject matches original');
  assert(unpackedAsgn?.totalPoints === 20, 'Unpacked total points match original');
  assert(unpackedAsgn?.teacherTip === 'انتبه لإشارة عزم القوة بالنسبة للنقطة', 'Unpacked teacher tip matches original');

  // 1.4 Student Submissions & Class Analytics
  await submitAssignment({
    assignmentCode: testAsgnCode,
    studentName: 'أحمد محمود',
    studentId: 'std_001',
    score: 18,
    totalPoints: 20,
    percentage: 90,
    timeSpentSeconds: 940,
    errorTypeBreakdown: { calculation_error: 1 },
    answers: [
      { questionId: 'q1', selectedOptionIndex: 0, isCorrect: true, timeSpentSec: 180 },
      { questionId: 'q2', selectedOptionIndex: 1, isCorrect: false, timeSpentSec: 200, errorType: 'calculation_error' },
      { questionId: 'q3', selectedOptionIndex: 2, isCorrect: true, timeSpentSec: 150 },
      { questionId: 'q4', selectedOptionIndex: 3, isCorrect: true, timeSpentSec: 210 },
      { questionId: 'q5', selectedOptionIndex: 0, isCorrect: true, timeSpentSec: 200 },
    ],
  });

  await submitAssignment({
    assignmentCode: testAsgnCode,
    studentName: 'سارة إبراهيم',
    studentId: 'std_002',
    score: 16,
    totalPoints: 20,
    percentage: 80,
    timeSpentSeconds: 1100,
    errorTypeBreakdown: { concept_gap: 1, sign_direction_error: 1 },
    answers: [
      { questionId: 'q1', selectedOptionIndex: 0, isCorrect: true, timeSpentSec: 190 },
      { questionId: 'q2', selectedOptionIndex: 0, isCorrect: false, timeSpentSec: 240, errorType: 'concept_gap' },
      { questionId: 'q3', selectedOptionIndex: 1, isCorrect: false, timeSpentSec: 230, errorType: 'sign_direction_error' },
      { questionId: 'q4', selectedOptionIndex: 3, isCorrect: true, timeSpentSec: 220 },
      { questionId: 'q5', selectedOptionIndex: 0, isCorrect: true, timeSpentSec: 220 },
    ],
  });

  const classSummary = await getClassAnalytics(testAsgnCode);
  assert(classSummary !== null, 'Class analytics calculated');
  assert(classSummary?.submissionCount === 2, `Class submissions count matches 2 (got ${classSummary?.submissionCount})`);
  assert(classSummary?.averagePercentage === 85, `Class average percentage calculated (got ${classSummary?.averagePercentage}%, expected 85%)`);
  assert(classSummary?.highestScore === 18 && classSummary?.lowestScore === 16, 'Highest and lowest scores match');
  assert(classSummary?.commonErrorTypes.length >= 2, 'Common error types aggregated');

  // -------------------------------------------------------------------------
  // SECTION 2: Offline Pre-Download Subject Pack Manager
  // -------------------------------------------------------------------------
  console.log('\n--- [2/4] Offline Pre-Download Subject Pack Manager ---');

  assert(SUBJECT_PACKAGES.length === 11, `All 11 Thanawya subjects registered (found ${SUBJECT_PACKAGES.length})`);
  const physicsPack = SUBJECT_PACKAGES.find(p => p.id === 'physics');
  assert(physicsPack !== undefined && physicsPack.chapterCount === 8, 'Physics complete pack registered with 8 chapters');

  const quota = await getStorageQuota();
  assert(quota.quotaMB > 0, `Storage quota estimated: ${quota.usageMB} MB / ${quota.quotaMB} MB`);

  const dlSuccess = await downloadSubjectPack('physics');
  assert(dlSuccess === true, 'Download subject pack simulation succeeded');
  assert(isSubjectPackDownloaded('physics'), 'Physics pack marked as downloaded in storage');
  assert(getDownloadedSubjectPackIds().includes('physics'), 'Physics pack ID in downloaded list');

  await removeSubjectPack('physics');
  assert(!isSubjectPackDownloaded('physics'), 'Physics pack successfully removed');

  // -------------------------------------------------------------------------
  // SECTION 3: Calibrated Score Prediction & Confidence Intervals
  // -------------------------------------------------------------------------
  console.log('\n--- [3/4] Calibrated Score Prediction & Confidence Intervals ---');

  // Empty state test
  const emptyPrediction = getPredictiveScore({
    totalAttempted: 0,
    totalCorrect: 0,
    totalTimeSpentSec: 0,
    quizzesCompleted: 0,
    lastUpdated: Date.now(),
    chapters: {},
    cognitive: { easy: { attempted: 0, correct: 0 }, medium: { attempted: 0, correct: 0 }, hots: { attempted: 0, correct: 0 } },
  });
  assert(emptyPrediction.predictedTotalMarks === 0, 'Zero attempts returns 0 marks');
  assert(emptyPrediction.confidenceLevel === 'preliminary', 'Zero attempts has preliminary confidence');
  assert(emptyPrediction.disclaimerAr.length > 10, 'Disclaimer present in Arabic');

  // 75-question active student state
  const mockStudentState: StudentAnalyticsState = {
    totalAttempted: 80,
    totalCorrect: 68, // 85% accuracy
    totalTimeSpentSec: 7200,
    quizzesCompleted: 8,
    lastUpdated: Date.now(),
    chapters: {},
    cognitive: {
      easy: { attempted: 20, correct: 19 },
      medium: { attempted: 40, correct: 35 },
      hots: { attempted: 20, correct: 14 }, // 70% HOTS
    },
  };

  resetActualScoreCalibration();
  assert(getActualScoreCalibrationRatio() === 1.0, 'Initial calibration ratio is 1.0');

  const prediction = getPredictiveScore(mockStudentState);
  assert(prediction.predictedPercentage >= 80 && prediction.predictedPercentage <= 90, `Predicted percentage reasonable: ${prediction.predictedPercentage}%`);
  assert(prediction.confidenceInterval !== undefined, 'Confidence interval is present');

  const ci = prediction.confidenceInterval!;
  assert(ci.lowerPercentage <= prediction.predictedPercentage, `CI lower bound (${ci.lowerPercentage}%) <= predicted (${prediction.predictedPercentage}%)`);
  assert(ci.upperPercentage >= prediction.predictedPercentage, `CI upper bound (${ci.upperPercentage}%) >= predicted (${prediction.predictedPercentage}%)`);
  assert(ci.marginOfErrorPercentage > 0, `Margin of error computed: ±${ci.marginOfErrorPercentage}%`);
  assert(ci.lowerMarks <= prediction.predictedTotalMarks && ci.upperMarks >= prediction.predictedTotalMarks, 'Marks CI bounds wrap predicted marks');

  // Calibration test
  // Student scored 390 / 410 on actual ministerial mock (95.1%)
  const newRatio = setActualScoreCalibration(390, false, mockStudentState);
  assert(newRatio > 1.0, `Calibration ratio adjusted upwards for high actual score: ${newRatio}`);

  const calibratedReport = getPredictiveScore(mockStudentState);
  assert(calibratedReport.hasCustomCalibration === true, 'Report flags custom calibration active');
  assert(calibratedReport.calibratedPercentage! > prediction.predictedPercentage, 'Calibrated percentage adjusted upwards towards actual performance');

  resetActualScoreCalibration();
  assert(getActualScoreCalibrationRatio() === 1.0, 'Calibration ratio cleanly resets to 1.0');

  // -------------------------------------------------------------------------
  // SECTION 4: Automatic Distractor & Error Pattern Classification
  // -------------------------------------------------------------------------
  console.log('\n--- [4/4] Automatic Distractor & Error Pattern Classification ---');

  // 4.1 Sign / Direction Inversion
  const signResult = classifyErrorPattern({
    questionAr: 'احسب مركبة العزم حول نقطة الأصل بالنيوتن.متر:',
    questionEn: 'Calculate torque component about origin:',
    optionsAr: ['-24', '+24', '12', '48'],
    optionsEn: ['-24', '+24', '12', '48'],
    correctIndex: 1, // Correct is +24
    selectedOptionIndex: 0, // Student chose -24
  });
  assert(signResult.detectedErrorType === 'sign_direction_error', `Detected sign inversion: ${signResult.detectedErrorType}`);
  assert(signResult.confidence >= 0.90, `High confidence for sign inversion: ${signResult.confidence}`);

  // 4.2 Directional Text Keyword Inversion
  const dirResult = classifyErrorPattern({
    questionAr: 'ما اتجاه القوة المغناطيسية المؤثرة على السلك؟',
    optionsAr: ['عمودي إلى أسفل', 'عمودي إلى أعلى', 'ناحية اليمين', 'ناحية اليسار'],
    correctIndex: 1, // إلى أعلى
    selectedOptionIndex: 0, // إلى أسفل
  });
  assert(dirResult.detectedErrorType === 'sign_direction_error', `Detected directional vector error: ${dirResult.detectedErrorType}`);

  // 4.3 Unit Conversion Scaling (off by factor of 1000)
  const unitResult = classifyErrorPattern({
    questionAr: 'احسب الشغل المبذول بالجول (J):',
    optionsAr: ['45', '45000', '4.5', '0.45'],
    correctIndex: 0, // 45 J
    selectedOptionIndex: 1, // 45000 (forgot to convert mJ to J)
  });
  assert(unitResult.detectedErrorType === 'unit_conversion', `Detected unit conversion scaling: ${unitResult.detectedErrorType}`);

  // 4.4 Negation Comprehension Trap ("ليس", "ما عدا")
  const negResult = classifyErrorPattern({
    questionAr: 'جميع العبارات الآتية تصف خصائص أشعة الليزر ما عدا:',
    questionEn: 'All of the following are properties of laser light EXCEPT:',
    optionsAr: ['توازي الحزمة الضوئية', 'النقاء الطيفي', 'الشدة العالية', 'تخضع لقانون التربيع العكسي'],
    correctIndex: 3, // تخضع لقانون التربيع العكسي (الاستثناء)
    selectedOptionIndex: 1, // Student picked a standard true property
  });
  assert(negResult.detectedErrorType === 'comprehension_misread', `Detected negation comprehension trap: ${negResult.detectedErrorType}`);

  // 4.5 Formula Reciprocal Mixup
  const formulaResult = classifyErrorPattern({
    questionAr: 'احسب معامل الاحتكاك السكوني:',
    optionsAr: ['0.25', '4.0', '1.5', '0.5'],
    optionsEn: ['0.25', '4.0', '1.5', '0.5'],
    correctIndex: 0, // 0.25
    selectedOptionIndex: 1, // 4.0 = 1 / 0.25
  });
  assert(formulaResult.detectedErrorType === 'formula_confusion', `Detected reciprocal formula confusion: ${formulaResult.detectedErrorType}`);

  // 4.6 Minor Arithmetic Delta
  const calcResult = classifyErrorPattern({
    questionAr: 'احسب المقاومة المكافئة للدائرة:',
    optionsAr: ['120', '135', '200', '300'],
    optionsEn: ['120', '135', '200', '300'],
    correctIndex: 0, // 120
    selectedOptionIndex: 1, // 135 (12% delta)
  });
  assert(calcResult.detectedErrorType === 'calculation_error', `Detected arithmetic calculation delta: ${calcResult.detectedErrorType}`);

  // 4.7 Time pressure overrun
  const timeResult = classifyErrorPattern({
    questionAr: 'مسألة كيرشوف المركبة:',
    optionsAr: ['2A', '4A', '6A', '8A'],
    correctIndex: 0,
    selectedOptionIndex: 2,
    timeLimitSec: 90,
    timeSpentSec: 180, // 2x time limit
  });
  assert(timeResult.detectedErrorType === 'time_pressure', `Detected time pressure overrun: ${timeResult.detectedErrorType}`);

  console.log('\n===============================================================');
  console.log(`🏁 TEST RESULTS: ${passedCount} PASSED, ${failedCount} FAILED`);
  console.log('===============================================================');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal error during test run:', err);
  process.exit(1);
});
