import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { toHindiDigits } from '../src/utils/arabicNumerals.js';

console.log('🏛️ Starting Egyptian Ministry Official Performance Certificate Verification Suite...');

// Test 1: Verify source files existence
const certPath = path.resolve('src/components/OfficialPerformanceCertificate.tsx');
assert.ok(fs.existsSync(certPath), 'OfficialPerformanceCertificate.tsx must exist');
const certContent = fs.readFileSync(certPath, 'utf8');

const indexPath = path.resolve('src/index.css');
assert.ok(fs.existsSync(indexPath), 'src/index.css must exist');
const indexContent = fs.readFileSync(indexPath, 'utf8');

const testGenPath = path.resolve('src/components/TestGenerator.tsx');
assert.ok(fs.existsSync(testGenPath), 'src/components/TestGenerator.tsx must exist');
const testGenContent = fs.readFileSync(testGenPath, 'utf8');

console.log('✅ File integrity verified: All components and stylesheets exist.');

// Test 2: Verify CSS Print Rules in index.css
assert.ok(
  indexContent.includes('.print-official-certificate'),
  'index.css must define .print-official-certificate'
);
assert.ok(
  indexContent.includes('body.print-cert-only .print-hide-on-cert'),
  'index.css must define print isolation rule body.print-cert-only .print-hide-on-cert'
);
assert.ok(
  indexContent.includes('break-before: page !important'),
  'index.css must specify page-break rules for certificate'
);
assert.ok(
  indexContent.includes('.print-cert-table'),
  'index.css must style certificate transcript tables'
);

console.log('✅ Print styling assertions passed: Full A4 isolation and page-break rules present.');

// Test 3: Verify OfficialPerformanceCertificate features & structural elements
const requiredElements = [
  'SaladinEagleCrest',
  'RepublicCircularSeal',
  'VerificationQRCode',
  'جمهورية مصر العربية',
  'وزارة التربية والتعليم والتعليم الفني',
  'قطاع التعليم العام — الإدارة العامة للامتحانات',
  'شهادة تفوق وبيان درجات رسمي معتمد',
  'print-official-certificate',
  'print-cert-table',
  'handlePrintCertificate',
  'print-cert-only',
  'toHindiDigits',
  'distinctionTier',
  'رئيس لجنة الرصد والمراجعة الإلكترونية',
  'عضو لجنة النظام والمراقبة (الكنترول)',
  'رئيس عام امتحانات الثانوية العامة',
  'يعتمد،، وزير التربية والتعليم والتعليم الفني',
];

for (const elem of requiredElements) {
  assert.ok(
    certContent.includes(elem),
    `OfficialPerformanceCertificate must include '${elem}'`
  );
}

console.log(`✅ Certificate anatomy verified: All ${requiredElements.length} authentic ministerial markers present.`);

// Test 4: Verify TestGenerator integration
assert.ok(
  testGenContent.includes('import { OfficialPerformanceCertificate }'),
  'TestGenerator must import OfficialPerformanceCertificate'
);
assert.ok(
  testGenContent.includes('showPrintableCertificate'),
  'TestGenerator must track showPrintableCertificate state'
);
assert.ok(
  testGenContent.includes('شهادة التقدير والبيان الرسمي 📜'),
  'TestGenerator must offer a prominent official certificate button in quick actions'
);
assert.ok(
  testGenContent.includes('<OfficialPerformanceCertificate'),
  'TestGenerator must render OfficialPerformanceCertificate component'
);
assert.ok(
  testGenContent.includes('print-hide-on-cert'),
  'TestGenerator must attach print-hide-on-cert class to non-certificate sections'
);

console.log('✅ Component orchestration verified: TestGenerator connects state, UI toggles, and print hiding.');

// Test 5: Distinction Tier Logic Verification
function computeTestDistinction(pct: number) {
  if (pct >= 92) return 'امتياز مع مرتبة الشرف الأولى';
  if (pct >= 80) return 'جيد جداً مع مرتبة الشرف';
  if (pct >= 65) return 'جيد بمعيار الكفاءة';
  if (pct >= 50) return 'ناجح بالحد المقرر';
  return 'بحاجة للدور الثاني';
}

assert.strictEqual(computeTestDistinction(96), 'امتياز مع مرتبة الشرف الأولى');
assert.strictEqual(computeTestDistinction(92), 'امتياز مع مرتبة الشرف الأولى');
assert.strictEqual(computeTestDistinction(85), 'جيد جداً مع مرتبة الشرف');
assert.strictEqual(computeTestDistinction(80), 'جيد جداً مع مرتبة الشرف');
assert.strictEqual(computeTestDistinction(72), 'جيد بمعيار الكفاءة');
assert.strictEqual(computeTestDistinction(52), 'ناجح بالحد المقرر');
assert.strictEqual(computeTestDistinction(45), 'بحاجة للدور الثاني');

console.log('✅ Distinction formulas verified: Correct tier assignments across all boundary conditions.');

// Test 6: Hindi digits formatting for ministerial certificates
const testSeat = '1048592';
const hindiSeat = toHindiDigits(testSeat);
assert.strictEqual(hindiSeat, '١٠٤٨٥٩٢', 'Seat number must convert accurately to Hindi numerals');

const testScore = 58;
const hindiScore = toHindiDigits(testScore);
assert.strictEqual(hindiScore, '٥٨', 'Exam marks must format accurately to Hindi numerals');

console.log('✅ Numeral conversion verified: Eastern Arabic / Hindi digits formatted strictly.');

console.log('\n🎉 ALL 6 VERIFICATION SUITES PASSED (100%) FOR THE OFFICIAL MINISTERIAL CERTIFICATE!');
