import assert from 'assert';
import {
  getRegisteredCertificates,
  saveOfficialCertificate,
  getCertificateById,
  verifyCertificate,
  deleteCertificate,
  generateCertificateVerificationHash,
  getDistinctionTierFromPct,
  DEMO_VERIFIABLE_CERTIFICATES,
  type OfficialCertificateRecord,
} from '../src/services/certificateRegistryService';
import {
  classifySubjectCategory,
  getMasteryRadarData,
  type StudentAnalyticsState,
} from '../src/services/studentAnalyticsService';
import { readFileSync } from 'fs';
import { resolve } from 'path';

console.log('🏛️ Running Thanawya Amma Official Certificate Verification System Test Suite...\n');

let totalTests = 0;
let passedTests = 0;

function runTest(name: string, fn: () => void) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ PASS: ${name}`);
  } catch (err: any) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// Suite 1: Certificate Registry Operations
// -----------------------------------------------------------------------------
console.log('📜 Suite 1: Certificate Registry Operations');

runTest('Loads registered certificates including demo exam exemplar', () => {
  const certs = getRegisteredCertificates();
  assert.ok(Array.isArray(certs), 'Registered certificates should be an array');
  assert.ok(certs.length >= 2, 'Should contain at least 2 demo exemplar certificates');
  const physicsDemo = certs.find((c) => c.subjectId === 'physics');
  assert.ok(physicsDemo, 'Physics exemplar certificate should exist');
  assert.strictEqual(physicsDemo?.score, 44);
  assert.strictEqual(physicsDemo?.totalQuestions, 46);
});

runTest('saveOfficialCertificate adds or updates a certificate record', () => {
  const testCert: OfficialCertificateRecord = {
    certificateSerial: 'EGY-MOE-TH-2025-TEST01',
    verificationHash: 'MOE-SIG-TEST-HASH-1234',
    studentName: 'أحمد كمال السيد',
    seatingNumber: '3104921',
    schoolName: 'مدرسة العباسية الثانوية للبنين',
    directorateName: 'مديرية التربية والتعليم بالإسكندرية',
    subjectId: 'chemistry',
    subjectNameAr: 'الكيمياء',
    subjectNameEn: 'Chemistry',
    branchNameAr: 'الشعبة العلمية',
    branchNameEn: 'Scientific Division',
    academicYear: '2024 / 2025',
    sessionTitleAr: 'الدور الأول (يونيو)',
    sessionTitleEn: 'First Session (June)',
    formCodeAr: 'نموذج (أ)',
    formCodeEn: 'Form A',
    score: 42,
    totalQuestions: 46,
    scorePct: 91.3,
    timeTakenSeconds: 6100,
    testDateIso: new Date().toISOString(),
    gradeLabelAr: 'مرتبة الشرف الثانية والتقدير الممتاز',
    gradeLabelEn: 'High Distinction',
    distinctionTier: getDistinctionTierFromPct(91.3),
    scoreReport: null,
    cohortReport: null,
    isAccredited: true,
    registeredAt: Date.now(),
  };

  saveOfficialCertificate(testCert);
  const fetched = getCertificateById('EGY-MOE-TH-2025-TEST01');
  assert.ok(fetched, 'Certificate should be retrievable by serial');
  assert.strictEqual(fetched?.studentName, 'أحمد كمال السيد');
  assert.strictEqual(fetched?.scorePct, 91.3);

  // Case-insensitive lookup check
  const fetchedLower = getCertificateById('egy-moe-th-2025-test01');
  assert.ok(fetchedLower, 'Lookup should be case-insensitive');
  assert.strictEqual(fetchedLower?.certificateSerial, 'EGY-MOE-TH-2025-TEST01');

  // Clean up
  deleteCertificate('EGY-MOE-TH-2025-TEST01');
  assert.strictEqual(getCertificateById('EGY-MOE-TH-2025-TEST01'), null);
});

// -----------------------------------------------------------------------------
// Suite 2: Cryptographic Verification Fingerprint
// -----------------------------------------------------------------------------
console.log('\n🔒 Suite 2: Cryptographic Verification Fingerprint');

runTest('generateCertificateVerificationHash produces valid signature', () => {
  const hash = generateCertificateVerificationHash('EGY-MOE-TH-2024-C38A12', '1048592', 96.7, 1719315900000);
  assert.ok(hash.startsWith('MOE-SIG-'), 'Hash should begin with MOE-SIG- prefix');
  const parts = hash.split('-');
  assert.strictEqual(parts.length, 5, 'Hash should consist of 5 hyphen-separated segments');
});

runTest('Verification hash is deterministic and sensitive to inputs', () => {
  const hash1 = generateCertificateVerificationHash('EGY-MOE-TH-2024-C38A12', '1048592', 96.7, 1719315900000);
  const hash2 = generateCertificateVerificationHash('EGY-MOE-TH-2024-C38A12', '1048592', 96.7, 1719315900000);
  const hashDifferentScore = generateCertificateVerificationHash('EGY-MOE-TH-2024-C38A12', '1048592', 92.0, 1719315900000);

  assert.strictEqual(hash1, hash2, 'Identical inputs must yield identical hash');
  assert.notStrictEqual(hash1, hashDifferentScore, 'Different score must yield different hash');
});

// -----------------------------------------------------------------------------
// Suite 3: Certificate Verification Logic
// -----------------------------------------------------------------------------
console.log('\n🛡️ Suite 3: Certificate Verification Logic');

runTest('verifyCertificate succeeds for accredited serial', () => {
  const demoSerial = DEMO_VERIFIABLE_CERTIFICATES[0].certificateSerial;
  const result = verifyCertificate(demoSerial);

  assert.strictEqual(result.isValid, true);
  assert.strictEqual(result.digitalSealVerified, true);
  assert.strictEqual(result.tamperProofCheckPassed, true);
  assert.ok(result.certificate, 'Certificate record should be returned');
  assert.strictEqual(result.certificate?.studentName, DEMO_VERIFIABLE_CERTIFICATES[0].studentName);
  assert.ok(result.verificationStatusAr.includes('معتمد'));
});

runTest('verifyCertificate gracefully handles empty or invalid serials', () => {
  const emptyRes = verifyCertificate('');
  assert.strictEqual(emptyRes.isValid, false);
  assert.strictEqual(emptyRes.certificate, null);
  assert.ok(emptyRes.verificationStatusAr.includes('فارغ') || emptyRes.messageAr.includes('رقم المسلسل'));

  const invalidRes = verifyCertificate('EGY-MOE-FAKE-99999');
  assert.strictEqual(invalidRes.isValid, false);
  assert.strictEqual(invalidRes.certificate, null);
  assert.ok(invalidRes.messageAr.includes('لم يتم العثور'));
});

// -----------------------------------------------------------------------------
// Suite 4: Ministerial Distinction Tiers
// -----------------------------------------------------------------------------
console.log('\n🏆 Suite 4: Ministerial Distinction Tiers');

runTest('Distinction tiers conform to MoE percentage thresholds', () => {
  const t95 = getDistinctionTierFromPct(95);
  assert.strictEqual(t95.key, 'first_class');
  assert.ok(t95.labelAr.includes('مرتبة الشرف الأولى'));

  const t85 = getDistinctionTierFromPct(85);
  assert.strictEqual(t85.key, 'high_distinction');
  assert.ok(t85.labelAr.includes('مرتبة الشرف الثانية'));

  const t72 = getDistinctionTierFromPct(72);
  assert.strictEqual(t72.key, 'pass_merit');
  assert.ok(t72.labelAr.includes('اجتياز معياري'));

  const t55 = getDistinctionTierFromPct(55);
  assert.strictEqual(t55.key, 'minimum_pass');
  assert.ok(t55.labelAr.includes('الحد الأدنى للنجاح'));

  const t45 = getDistinctionTierFromPct(45);
  assert.strictEqual(t45.key, 'remediation');
  assert.ok(t45.labelAr.includes('برنامج علاجي'));
});

// -----------------------------------------------------------------------------
// Suite 5: Subject Categorization & Mastery Radar Alignment
// -----------------------------------------------------------------------------
console.log('\n📊 Suite 5: Subject Categorization & Mastery Radar Alignment');

runTest('classifySubjectCategory maps all 7 Thanawya Amma subjects accurately', () => {
  assert.strictEqual(classifySubjectCategory('الفيزياء', 'Physics', '', 'thanaweya_physics'), 'physics');
  assert.strictEqual(classifySubjectCategory('الكيمياء', 'Chemistry', '', 'thanaweya_chemistry'), 'chemistry');
  assert.strictEqual(classifySubjectCategory('الأحياء', 'Biology', '', 'thanaweya_biology'), 'biology');
  assert.strictEqual(classifySubjectCategory('الاستاتيكا', 'Statics', '', 'statics'), 'applied_math');
  assert.strictEqual(classifySubjectCategory('الديناميكا', 'Dynamics', '', 'dynamics'), 'applied_math');
  assert.strictEqual(classifySubjectCategory('التفاضل والتكامل', 'Calculus', '', 'calculus'), 'pure_math');
  assert.strictEqual(classifySubjectCategory('الجبر والهندسة الفراغية', 'Algebra & Solid', '', 'algebra_solid'), 'pure_math');
});

runTest('getMasteryRadarData outputs all 5 vertices correctly', () => {
  const mockState: StudentAnalyticsState = {
    totalAttempted: 10,
    totalCorrect: 8,
    totalTimeSpentSec: 600,
    quizzesCompleted: 1,
    chapters: {
      ch_phys: {
        chapterId: 'ch_phys',
        chapterTitleEn: 'Circuits',
        chapterTitleAr: 'الدوائر',
        branchTitleEn: 'Physics',
        branchTitleAr: 'الفيزياء',
        subjectCategory: 'physics',
        attempted: 5,
        correct: 4,
        timeSpentSec: 300,
        lastAttemptTimestamp: Date.now(),
      },
    },
    cognitive: {
      easy: { attempted: 2, correct: 2 },
      medium: { attempted: 5, correct: 4 },
      hots: { attempted: 3, correct: 2 },
    },
    lastUpdated: Date.now(),
  };

  const radar = getMasteryRadarData(mockState);
  assert.strictEqual(radar.length, 5, 'Mastery Radar must contain exactly 5 dimensions');
  const physPoint = radar.find((p) => p.dimensionKey === 'physics');
  assert.ok(physPoint, 'Physics radar point must exist');
  assert.strictEqual(physPoint?.scorePct, 80);
  assert.strictEqual(physPoint?.attempted, 5);
});

// -----------------------------------------------------------------------------
// Suite 6: Integration and Orchestration
// -----------------------------------------------------------------------------
console.log('\n🔗 Suite 6: Integration & Component Orchestration');

runTest('StudentAnalyticsDashboard contains Certificate Registry section and Verification Modal', () => {
  const dashPath = resolve(process.cwd(), 'src/components/StudentAnalyticsDashboard.tsx');
  const content = readFileSync(dashPath, 'utf8');

  assert.ok(content.includes('سجل الشهادات وبيانات الدرجات الرسمية المعتمدة'), 'Must contain Arabic certificate section header');
  assert.ok(content.includes('CertificateVerificationModal'), 'Must mount CertificateVerificationModal');
  assert.ok(content.includes('OfficialPerformanceCertificate'), 'Must mount OfficialPerformanceCertificate');
  assert.ok(content.includes('بوابة التحقق من الشهادات'), 'Must contain Verify Credentials button in Hero');
});

runTest('TestGenerator contains Certificate Auto-Registration on exam submission', () => {
  const testGenPath = resolve(process.cwd(), 'src/components/TestGenerator.tsx');
  const content = readFileSync(testGenPath, 'utf8');

  assert.ok(content.includes('saveOfficialCertificate'), 'Must call saveOfficialCertificate on submission');
  assert.ok(content.includes('generateCertificateVerificationHash'), 'Must generate certificate verification hash');
  assert.ok(content.includes('OfficialPerformanceCertificate'), 'Must mount OfficialPerformanceCertificate');
});

runTest('OfficialPerformanceCertificate renders verification button, direct URL metadata and modal', () => {
  const certPath = resolve(process.cwd(), 'src/components/OfficialPerformanceCertificate.tsx');
  const content = readFileSync(certPath, 'utf8');

  assert.ok(content.includes('CertificateVerificationModal'), 'Must mount CertificateVerificationModal');
  assert.ok(content.includes('فحص الاعتماد الرقمي'), 'Must contain Verify Accreditation toolbar button');
  assert.ok(content.includes('print-cert-only'), 'Must support single-page print-cert-only isolation');
  assert.ok(content.includes('data-verification-url'), 'Must render data-verification-url on QR code element');
  assert.ok(content.includes('directVerificationUrl'), 'Must compute direct verification deep link URL');
  assert.ok(content.includes('رابط التحقق المباشر') || content.includes('Verification Link'), 'Must include direct link in copy summary');
});

// -----------------------------------------------------------------------------
// Suite 7: Global Deep Linking, Route Parsing & Navbar Quick Tools
// -----------------------------------------------------------------------------
console.log('\n🌐 Suite 7: Global Deep Linking, Route Parsing & Navbar Quick Tools');

runTest('Navbar contains Certificate Verification Portal item and ShieldCheck icon', () => {
  const navbarPath = resolve(process.cwd(), 'src/components/Navbar.tsx');
  const content = readFileSync(navbarPath, 'utf8');

  assert.ok(content.includes('onOpenCertificateVerification'), 'Navbar must accept onOpenCertificateVerification prop');
  assert.ok(content.includes('ShieldCheck'), 'Navbar must import and display ShieldCheck icon');
  assert.ok(content.includes('بوابة التحقق الرقمي من الشهادات'), 'Navbar must feature Arabic portal title');
  assert.ok(content.includes('⌘⇧V'), 'Navbar must show shortcut badge ⌘⇧V');
});

runTest('App.tsx mounts CertificateVerificationModal and supports ?verify= and #verify deep links', () => {
  const appPath = resolve(process.cwd(), 'src/App.tsx');
  const content = readFileSync(appPath, 'utf8');

  assert.ok(content.includes('CertificateVerificationModal'), 'App.tsx must import and mount CertificateVerificationModal');
  assert.ok(content.includes('open-certificate-verification'), 'App.tsx must listen to open-certificate-verification custom event');
  assert.ok(content.includes('isCertificateVerificationOpen'), 'App.tsx must track isCertificateVerificationOpen state');
  assert.ok(content.includes('verificationTargetSerial'), 'App.tsx must track verificationTargetSerial state');
  assert.ok(content.includes("verifyQuery = params.get('verify')") || content.includes("params.get('verify')"), 'App.tsx must parse ?verify= query param');
  assert.ok(content.includes("hash.startsWith('verify')") || content.includes("includes('verify')"), 'App.tsx must parse #verify hash');
  assert.ok(content.includes('onOpenCertificateVerification'), 'App.tsx must pass onOpenCertificateVerification to Navbar');
});

// -----------------------------------------------------------------------------
// Results Summary
// -----------------------------------------------------------------------------
console.log('\n----------------------------------------------------------------');
console.log(`Summary: ${passedTests}/${totalTests} tests passed (${Math.round((passedTests / totalTests) * 100)}%)`);
console.log('----------------------------------------------------------------\n');

if (passedTests !== totalTests) {
  process.exit(1);
}

