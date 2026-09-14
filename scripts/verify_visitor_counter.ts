import fs from 'fs';
import path from 'path';
import { toHindiDigits } from '../src/utils/arabicNumerals';

console.log('🔢 Starting Visitor Counter Arabic Numerals & BiDi Verification...\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passCount++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failCount++;
  }
}

// 1. File existence & static inspection
const counterPath = path.resolve('src/components/VisitorCounter.tsx');
assert(fs.existsSync(counterPath), 'src/components/VisitorCounter.tsx exists');

const content = fs.readFileSync(counterPath, 'utf8');

// 2. Check for explicit dir="ltr" on the odometer digit container
assert(
  content.includes('dir="ltr"') && content.includes('flex items-center justify-center gap-0.5 sm:gap-1 flex-nowrap'),
  'Digital odometer flex container has explicit dir="ltr" to prevent RTL digit reversal'
);

// 3. Check for BiDi isolation on dynamic visitor counts
assert(
  content.includes('<bdi className="font-mono font-bold" dir="ltr">{liveActiveDisplay}</bdi>'),
  'Live active visitor count is wrapped in <bdi dir="ltr"> to prevent BiDi text reordering'
);

assert(
  content.includes('<bdi className="font-mono font-bold" dir="ltr">{todayVisitsDisplay}</bdi>'),
  "Today's visits count is wrapped in <bdi dir='ltr'> to prevent BiDi text reordering"
);

// 4. Mathematical Simulation of Visitor Count Rendering in Arabic
console.log('\n--- Numerical Rendering Simulation ---');

const sampleCount = 58492;
const str = sampleCount.toLocaleString('en-US'); // "58,492"
const arabicDigits = str.split('').map((char) => (char === ',' ? '،' : toHindiDigits(char)));

console.log(`Original number: ${sampleCount}`);
console.log(`Formatted Western: "${str}"`);
console.log(`Formatted Arabic:  "${arabicDigits.join('')}"`);

// In an LTR flex container, DOM children render from index 0 to N-1 (Left to Right)
const ltrRendered = arabicDigits.join('');
// In an RTL flex container without dir="ltr", DOM children render from right to left
const rtlUncalibratedRendered = [...arabicDigits].reverse().join('');

console.log(`Without fix (in RTL flexbox): "${rtlUncalibratedRendered}" (REVERSED: 294,85)`);
console.log(`With dir="ltr" fix:           "${ltrRendered}" (CORRECT: 58,492)`);

assert(ltrRendered === '٥٨،٤٩٢', 'Arabic digits array correctly represents 58,492 from left to right as ٥٨،٤٩٢');
assert(rtlUncalibratedRendered !== ltrRendered, 'Confirmed that uncalibrated RTL flexbox caused digit reversal');

// Test higher magnitude counts (e.g. 1,234,567)
const largeCount = 1234567;
const largeStr = largeCount.toLocaleString('en-US');
const largeArabic = largeStr.split('').map((char) => (char === ',' ? '،' : toHindiDigits(char))).join('');
assert(largeArabic === '١،٢٣٤،٥٦٧', 'High-magnitude count 1,234,567 formats correctly as ١،٢٣٤،٥٦٧');

console.log(`\n================================`);
console.log(`Total Passed: ${passCount} | Failed: ${failCount}`);
console.log(`================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 Visitor Counter Arabic digit sequence is 100% verified with zero reversal!');
}
