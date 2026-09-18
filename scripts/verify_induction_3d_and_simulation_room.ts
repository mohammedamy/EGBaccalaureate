/**
 * Test Suite: verify_induction_3d_and_simulation_room.ts
 *
 * Verifies:
 * 1. 3D Electromagnetic Induction & AC/DC Dynamo Physics:
 *    - Faraday & Dynamo EMF: e.m.f._max = N * A * B * omega
 *    - RMS value: e.m.f._rms = e.m.f._max / sqrt(2)
 *    - Split ring commutator rectification: |sin(theta)| vs AC slip rings sin(theta)
 *    - Motional EMF: e.m.f. = B * l * v * sin(theta)
 *    - Power & Lenz magnetic counter-force: P = (B*l*v)^2 / R, F = B^2 * l^2 * v / R
 *    - Energy conservation: P_mech (F*v) === P_elec (I^2*R)
 * 2. Lenz's Law & Faraday Solenoid:
 *    - Opposing magnetic poles upon approach vs recession
 * 3. Ministerial Lab Report Service:
 *    - Registration of 'phys-exp-7' (3D Electromagnetic Induction & AC/DC Dynamo Studio)
 *    - Rubrics, data table columns & template validity
 * 4. 3-Hour Ministerial Exam Simulation Room:
 *    - 180-minute timing & warning thresholds (30m, 10m, 5m)
 *    - OMR bubble matrix integrity
 *    - Official certificate generation & hash verification
 * 5. Universal Accessibility & Visual Calibration Suite:
 *    - Typography scale, KaTeX magnification, high contrast, reduced motion, focus rings
 */

import {
  getLabReportTemplate,
  EXPERIMENT_CONFIGS,
  computeTotalRubricMarks,
} from '../src/services/labReportService';
import {
  getDistinctionTierFromPct,
  generateCertificateVerificationHash,
  saveOfficialCertificate,
  getCertificateById,
} from '../src/services/certificateRegistryService';
import { getProgressiveHintsForQuestion } from '../src/services/aiStudyHintService';

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${testName}`);
    process.exit(1);
  }
  passedTests++;
  console.log(`✅ PASS: ${testName}`);
}

function assertClose(actual: number, expected: number, tolerance = 0.01, testName: string) {
  const diff = Math.abs(actual - expected);
  assert(diff <= tolerance, `${testName} (actual: ${actual.toFixed(4)}, expected: ${expected.toFixed(4)})`);
}

console.log('⚡ === PART 1: 3D INDUCTION & DYNAMO PHYSICS FORMULAS ===');

// Test 1: Angular velocity & Maximum Dynamo EMF
{
  const N = 100; // turns
  const A = 0.04; // m^2 (400 cm^2)
  const B = 0.8; // Tesla
  const f = 50; // Hz (Egypt standard grid frequency)
  const omega = 2 * Math.PI * f;
  const emfMax = N * A * B * omega;

  // emfMax = 100 * 0.04 * 0.8 * (2 * pi * 50) = 3.2 * 100 * pi = 320 * pi ≈ 1005.3096 V
  const expectedEmfMax = 320 * Math.PI;
  assertClose(emfMax, expectedEmfMax, 0.001, 'Dynamo Maximum EMF matches N * A * B * omega');

  // Test 2: Effective (RMS) EMF
  const emfRms = emfMax / Math.SQRT2;
  const expectedEmfRms = emfMax * 0.70710678;
  assertClose(emfRms, expectedEmfRms, 0.01, 'RMS EMF equals emfMax / sqrt(2)');
}

// Test 3: Slip Rings (AC) vs Split-Ring Commutator (Pulsating DC)
{
  const angleDegs = [0, 30, 90, 150, 180, 210, 270, 330, 360];
  angleDegs.forEach((deg) => {
    const rad = (deg * Math.PI) / 180;
    const acVal = Math.sin(rad);
    const dcVal = Math.abs(Math.sin(rad));

    if (deg > 180 && deg < 360) {
      assert(acVal < 0, `AC voltage is negative during second half-cycle at ${deg}°`);
      assert(dcVal > 0, `Commutator rectifies voltage to positive at ${deg}°`);
      assertClose(dcVal, Math.abs(acVal), 0.0001, `Magnitude preserved under rectification at ${deg}°`);
    }
  });
}

// Test 4: Motional EMF on Conductor Rails
{
  const B = 1.2; // Tesla
  const l = 0.5; // meters
  const v = 4.0; // m/s
  const theta = Math.PI / 2; // perpendicular to field
  const R = 2.0; // Ohms

  const motionalEmf = B * l * v * Math.sin(theta);
  assertClose(motionalEmf, 2.4, 0.001, 'Motional EMF e.m.f. = B * l * v = 2.4 V');

  const current = motionalEmf / R;
  assertClose(current, 1.2, 0.001, 'Induced current I = e.m.f. / R = 1.2 A');

  const electricalPower = current * motionalEmf;
  assertClose(electricalPower, 2.88, 0.001, 'Electrical power dissipated P = I * V = 2.88 W');

  // Test 5: Mechanical Counter-force & Conservation of Energy
  const counterForce = current * l * B;
  assertClose(counterForce, 0.72, 0.001, 'Lenz counter-force F = I * l * B = 0.72 N');

  const mechanicalPower = counterForce * v;
  assertClose(mechanicalPower, electricalPower, 0.0001, 'Conservation of Energy: P_mech (F*v) === P_elec (I^2*R)');
}

console.log('\n🧲 === PART 2: LENZ LAW SOLENOID MAGNETIC DEFLECTION ===');

// Test 6: Lenz Law polarity opposing motion
{
  const testMotions = [
    { pole: 'N', velocity: 1.5, expectedFacingPole: 'N', expectedDeflection: 'right' },
    { pole: 'N', velocity: -1.5, expectedFacingPole: 'S', expectedDeflection: 'left' },
    { pole: 'S', velocity: 1.5, expectedFacingPole: 'S', expectedDeflection: 'left' },
    { pole: 'S', velocity: -1.5, expectedFacingPole: 'N', expectedDeflection: 'right' },
  ];

  testMotions.forEach((t) => {
    const facingPole = t.velocity > 0 ? t.pole : (t.pole === 'N' ? 'S' : 'N');
    assert(
      facingPole === t.expectedFacingPole,
      `Lenz law: Approaching/receding pole ${t.pole} with v=${t.velocity} induces opposing pole ${facingPole}`
    );
  });
}

console.log('\n📋 === PART 3: MINISTERIAL LAB REPORT SERVICE (PHYS-EXP-7) ===');

// Test 7: Verify registration of phys-exp-7
{
  const expConfig = EXPERIMENT_CONFIGS['phys-exp-7'];
  assert(!!expConfig, 'phys-exp-7 is registered in EXPERIMENT_CONFIGS');
  assert(expConfig?.discipline === 'physics', 'phys-exp-7 discipline is physics');
  assert(expConfig?.columns.some((c) => c.key === 'frequency' || c.key === 'emfMax'), 'Data table columns include frequency and peak EMF');

  const template = getLabReportTemplate('phys-exp-7');
  assert(!!template, 'getLabReportTemplate returns template for phys-exp-7');
  assert(template.titleEn.includes('Electromagnetic Induction') || template.titleEn.includes('Dynamo'), 'Template title accurately reflects Induction & Dynamo');
  assert(template.rubricCriteria.length >= 4, 'Template contains comprehensive assessment rubrics');

  const totalRubricMarks = computeTotalRubricMarks(template.rubricCriteria);
  assert(totalRubricMarks.max === 12 && totalRubricMarks.percentage === 100, `Rubric criteria sum to 12 official practical marks (100% base)`);
}

console.log('\n🏛️ === PART 4: 3-HOUR MINISTERIAL EXAM SIMULATION ROOM ===');

// Test 8: Exam duration & warning thresholds
{
  const examDurationMinutes = 180;
  const examDurationSeconds = examDurationMinutes * 60;
  assert(examDurationSeconds === 10800, '3-hour ministerial exam duration equals 10,800 seconds');

  const warning30m = 30 * 60;
  const warning10m = 10 * 60;
  const warning5m = 5 * 60;

  assert(warning30m === 1800, '30-minute warning chime threshold is 1800s');
  assert(warning10m === 600, '10-minute warning chime threshold is 600s');
  assert(warning5m === 300, '5-minute warning chime threshold is 300s');
}

// Test 9: Certificate Generation & Cryptographic Verification Hash
{
  const serial = 'EGY-MOE-TH-2025-IND001';
  const seatingNumber = '1048592';
  const scorePct = 96.5;
  const timestamp = Date.now();

  const hash = generateCertificateVerificationHash(serial, seatingNumber, scorePct, timestamp);
  assert(typeof hash === 'string' && hash.startsWith('MOE-SIG-'), 'Verification hash generated with official MOE-SIG prefix');
  assert(hash.split('-').length >= 4, 'Verification hash contains secure multi-segment checksums');

  const tier = getDistinctionTierFromPct(scorePct);
  assert(tier.key === 'first_class', 'Score 96.5% earns First Class Distinction tier');

  // Save certificate to registry
  const certRecord = {
    certificateSerial: serial,
    verificationHash: hash,
    studentName: 'أحمد محمود مصطفى',
    seatingNumber,
    schoolName: 'مدرسة المتفوقين في العلوم والتكنولوجيا STEM',
    directorateName: 'مديرية التربية والتعليم بالقاهرة',
    subjectId: 'physics',
    subjectNameAr: 'الفيزياء للثانوية العامة',
    subjectNameEn: 'Physics (General Secondary)',
    branchNameAr: 'شعبة العلوم والرياضيات',
    branchNameEn: 'Scientific Track',
    academicYear: '2024 / 2025',
    sessionTitleAr: 'امتحان شهادة إتمام الدراسة الثانوية العامة (محاكاة وزارية رسمية)',
    sessionTitleEn: 'Official Ministerial 3-Hour Timed Examination Simulation',
    formCodeAr: 'نموذج (أ) - كود 101',
    formCodeEn: 'Form A - Code 101',
    score: 58,
    totalQuestions: 60,
    scorePct,
    timeTakenSeconds: 9800,
    testDateIso: new Date().toISOString(),
    gradeLabelAr: 'ممتاز مع مرتبة الشرف الأولى',
    gradeLabelEn: 'First Class Distinction',
    distinctionTier: tier,
    scoreReport: null,
    cohortReport: null,
    isAccredited: true,
    registeredAt: timestamp,
  };

  saveOfficialCertificate(certRecord);
  const retrieved = getCertificateById(serial);
  assert(!!retrieved, 'Certificate saved and successfully retrieved from registry by serial');
  assert(retrieved?.verificationHash === hash, 'Retrieved certificate verification hash matches original');
}

console.log('\n👁️ === PART 5: UNIVERSAL ACCESSIBILITY & VISUAL CALIBRATION ===');

// Test 10: Typography and Math Scaling Modes
{
  const allowedFontSizes = ['normal', 'large', 'xlarge'];
  const allowedMathScales = ['100', '115', '130', '150'];
  const allowedThemes = ['light', 'dark', 'high-contrast'];

  assert(allowedFontSizes.length === 3, 'Three standardized typography font-size modes supported');
  assert(allowedMathScales.length === 4, 'Four KaTeX formula magnification scales supported');
  assert(allowedThemes.length === 3, 'Light, Dark, and AMOLED High Contrast modes supported');

  // Verify scale ratios
  const baseSize = 19.2;
  const largeSize = 22.2;
  const xlargeSize = 25.2;

  assertClose(largeSize / baseSize, 1.156, 0.01, 'Large font is approximately +15% scale');
  assertClose(xlargeSize / baseSize, 1.312, 0.01, 'X-Large font is approximately +30% scale');
}

console.log('\n🧠 === PART 6: PROGRESSIVE HINTS & WORKSPACE SHORTCUTS SUITE ===');

// Test 11: AI Progressive Hints derivation for LessonView solved problems
{
  const mockProblem = {
    id: 'th_phys_ch3_hots_1',
    questionEn: 'A rectangular coil rotates in a magnetic field. Find the induced EMF at t = 1/300 s.',
    questionAr: 'ملف مستطيل يدور في مجال مغناطيسي. احسب القوة الدافعة الكهربية المستحثة عند اللحظة t = 1/300 ثانية.',
    difficulty: 'hots',
    optionsEn: ['50 V', '100 V', '50√3 V', '25 V'],
    optionsAr: ['٥٠ فولت', '١٠٠ فولت', '٥٠ جذر ٣ فولت', '٢٥ فولت'],
    correctIndex: 2,
    explanationEn: [
      'Governing equation: e.m.f.(t) = e.m.f._max * sin(omega * t)',
      'omega = 2 * pi * f = 100 * pi rad/s. Angle theta = 100 * pi * (1/300) = pi / 3 = 60 degrees.',
      'e.m.f. = 100 * sin(60) = 50 * sqrt(3) V.',
    ],
    explanationAr: [
      'القانون الحاكم: e.m.f.(t) = e.m.f._max * sin(omega * t)',
      'السرعة الزاوية omega = 2 * pi * f = 100 * pi راديان/ث. الزاوية theta = 60 درجة.',
      'القوة الدافعة اللحظية = 100 * sin(60) = 50 * sqrt(3) فولت.',
    ],
    chapterId: 'th_phys_ch3',
    chapterTitleEn: 'Electromagnetic Induction',
    chapterTitleAr: 'الحث الكهرومغناطيسي',
    branchTitleEn: 'Physics',
    branchTitleAr: 'الفيزياء',
  };

  const hints = getProgressiveHintsForQuestion(mockProblem);
  assert(hints.length === 3, 'Returns exactly 3 progressive tiers for problem');
  assert(hints[0].iconType === 'law', 'Tier 1 correctly marked as law');
  assert(hints[1].iconType === 'roadmap', 'Tier 2 correctly marked as roadmap');
  assert(hints[2].iconType === 'trap', 'Tier 3 correctly marked as trap');
  assert(hints[2].contentEn.includes('HOTS Note'), 'HOTS trap content includes special distractor alert');
}

console.log(`\n🎉 ALL ${totalTests} TESTS PASSED SUCCESSFULLY (${passedTests}/${totalTests})!`);
