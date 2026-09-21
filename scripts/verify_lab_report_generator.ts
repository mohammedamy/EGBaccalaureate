/**
 * Automated Verification Suite for Virtual Labs Scientific Report Generator
 * Tests:
 * 1. Template integrity across all 21 guided experiments (Physics, Chemistry, Biology, Mathematics).
 * 2. Data table schemas, column headers, units, and sample empirical rows.
 * 3. Official 12-mark evaluation rubric criterion integrity and score computations.
 * 4. Markdown report generation in both Arabic and English.
 * 5. KaTeX mathematical formula balance and syntax validation.
 */

import fs from 'fs';
import path from 'path';
import {
  getLabReportTemplate,
  computeTotalRubricMarks,
  exportReportToMarkdown,
  OFFICIAL_LAB_RUBRIC,
  EXPERIMENT_CONFIGS,
  type LabReportData,
} from '../src/services/labReportService';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
    passed++;
  } else {
    console.error(`❌ FAILED: ${message}`);
    failed++;
  }
}

console.log('🔬 Starting Virtual Labs Scientific Report Generator Verification...\n');

// 1. Verify Official Rubric Matrix
console.log('--- 1. Testing Official 12-Mark Practical Examination Rubric ---');
assert(OFFICIAL_LAB_RUBRIC.length === 5, `Rubric has exactly 5 evaluation criteria (got ${OFFICIAL_LAB_RUBRIC.length})`);

const rubricTotal = OFFICIAL_LAB_RUBRIC.reduce((sum, c) => sum + c.maxMarks, 0);
assert(rubricTotal === 12, `Rubric criteria sum to exactly 12 marks (got ${rubricTotal})`);

const perfectScore = computeTotalRubricMarks(OFFICIAL_LAB_RUBRIC);
assert(perfectScore.earned === 12, `Perfect score earned is 12 (got ${perfectScore.earned})`);
assert(perfectScore.max === 12, `Perfect score max is 12 (got ${perfectScore.max})`);
assert(perfectScore.percentage === 100, `Perfect score percentage is 100% (got ${perfectScore.percentage}%)`);

const customRubric = OFFICIAL_LAB_RUBRIC.map((c, idx) => ({
  ...c,
  earnedMarks: idx === 2 ? 2 : c.maxMarks, // 1 mark deducted on data collection
}));
const partialScore = computeTotalRubricMarks(customRubric);
assert(partialScore.earned === 11, `Deducted score earned is 11 (got ${partialScore.earned})`);
assert(partialScore.percentage === 92, `Percentage is 92% (got ${partialScore.percentage}%)`);

// 2. Verify Configured Templates (Physics, Chemistry, Biology, Math)
console.log('\n--- 2. Testing Experiment Templates & Data Schemas ---');
const configuredExpIds = Object.keys(EXPERIMENT_CONFIGS);
assert(configuredExpIds.length === 31, `Has exactly 31 official curriculum experiment template configs (${configuredExpIds.length} defined)`);

// Verify 100% sync with GuidedExperimentsModal
const guidedModalPath = path.resolve(process.cwd(), 'src/components/labs/GuidedExperimentsModal.tsx');
const guidedModalContent = fs.readFileSync(guidedModalPath, 'utf-8');
const expIdMatches = Array.from(guidedModalContent.matchAll(/id:\s*'([a-z]+-exp-\d+)'/g)).map((m) => m[1]);
assert(expIdMatches.length === 31, `GuidedExperimentsModal defines exactly 31 guided experiments (found ${expIdMatches.length})`);

for (const modalExpId of expIdMatches) {
  assert(
    configuredExpIds.includes(modalExpId),
    `[${modalExpId}] from GuidedExperimentsModal has matching official configuration in EXPERIMENT_CONFIGS`
  );
}

// Check distribution across disciplines
const disciplines = Object.values(EXPERIMENT_CONFIGS).map((e) => e.discipline);
const physCount = disciplines.filter((d) => d === 'physics').length;
const chemCount = disciplines.filter((d) => d === 'chemistry').length;
const bioCount = disciplines.filter((d) => d === 'biology').length;
const mathCount = disciplines.filter((d) => d === 'math').length;
assert(physCount === 7, `Has 7 Physics experiments (got ${physCount})`);
assert(chemCount === 5, `Has 5 Chemistry experiments (got ${chemCount})`);
assert(bioCount === 9, `Has 9 Biology experiments (got ${bioCount})`);
assert(mathCount === 10, `Has 10 Mathematics experiments (got ${mathCount})`);

for (const expId of configuredExpIds) {
  const template = getLabReportTemplate(expId);

  assert(template.experimentId === expId, `[${expId}] experimentId matches`);
  assert(template.titleAr.length > 5, `[${expId}] has valid Arabic title`);
  assert(template.titleEn.length > 5, `[${expId}] has valid English title`);
  assert(['physics', 'chemistry', 'biology', 'math'].includes(template.discipline), `[${expId}] valid discipline`);
  assert(template.apparatusAr.length >= 3, `[${expId}] has >= 3 Arabic apparatus items (${template.apparatusAr.length})`);
  assert(template.apparatusEn.length >= 3, `[${expId}] has >= 3 English apparatus items`);
  assert(template.governingEquation.length > 2, `[${expId}] has non-empty governing equation`);

  // Data Table Columns
  assert(template.dataTableColumns.length >= 3, `[${expId}] data table has >= 3 columns (${template.dataTableColumns.length})`);
  const colKeys = template.dataTableColumns.map((c) => c.key);

  // Data Table Rows
  assert(template.dataTableRows.length >= 3, `[${expId}] data table has >= 3 empirical trial rows (${template.dataTableRows.length})`);
  for (const row of template.dataTableRows) {
    for (const key of colKeys) {
      assert(row[key] !== undefined && row[key] !== '', `[${expId}] row has valid cell for column key '${key}'`);
    }
  }

  // Rubric on template
  const score = computeTotalRubricMarks(template.rubricCriteria);
  assert(score.max === 12, `[${expId}] rubric criteria sum to exactly 12 marks`);
}

// 3. Testing Fallback Template for Generic/Unlisted Experiments
console.log('\n--- 3. Testing Fallback Template for Arbitrary Experiments ---');
const genericTemplate = getLabReportTemplate('unlisted-custom-exp-99');
assert(genericTemplate.experimentId === 'unlisted-custom-exp-99', 'Fallback template retains requested ID');
assert(genericTemplate.dataTableColumns.length >= 3, 'Fallback template has table columns');
assert(genericTemplate.dataTableRows.length >= 3, 'Fallback template has table rows');
const fallbackScore = computeTotalRubricMarks(genericTemplate.rubricCriteria);
assert(fallbackScore.max === 12, 'Fallback rubric max is 12 marks');

// 4. Testing Markdown Report Export
console.log('\n--- 4. Testing Markdown Report Generation ---');
const sampleReport: LabReportData = {
  ...getLabReportTemplate('phys-exp-1'),
  studentName: 'أحمد محمد علي',
  seatNumber: '54321',
  schoolName: 'مدرسة المتفوقين في العلوم والتكنولوجيا STEM',
  instructorName: 'أ. د. حسن خليل',
  date: '2026-09-16',
};

const mdAr = exportReportToMarkdown(sampleReport, 'ar');
assert(mdAr.includes('جمهورية مصر العربية'), 'Arabic markdown includes Ministry heading');
assert(mdAr.includes('أحمد محمد علي'), 'Arabic markdown includes student name');
assert(mdAr.includes('54321'), 'Arabic markdown includes seat number');
assert(mdAr.includes('جدول القراءات والبيانات الكمية'), 'Arabic markdown includes quantitative data table heading');
assert(mdAr.includes('| المحاولة |'), 'Arabic markdown table has proper Markdown headers');
assert(mdAr.includes('المجموع الكلي'), 'Arabic markdown includes rubric total score row');

const mdEn = exportReportToMarkdown(sampleReport, 'en');
assert(mdEn.includes('Ministry of Education'), 'English markdown includes Ministry heading');
assert(mdEn.includes('Quantitative Observation Table'), 'English markdown includes data table heading');
assert(mdEn.includes('| Trial |'), 'English markdown table has trial headers');
assert(mdEn.includes('Total Marks'), 'English markdown includes total rubric row');

// Test 3D Studio reports export
for (const studioExpId of ['phys-exp-6', 'chem-exp-5', 'bio-exp-8']) {
  const rep = getLabReportTemplate(studioExpId);
  const arMd = exportReportToMarkdown(rep, 'ar');
  const enMd = exportReportToMarkdown(rep, 'en');
  assert(arMd.length > 500, `[${studioExpId}] exports non-empty Arabic Markdown report (${arMd.length} chars)`);
  assert(enMd.length > 500, `[${studioExpId}] exports non-empty English Markdown report (${enMd.length} chars)`);
  assert(arMd.includes(rep.titleAr), `[${studioExpId}] Arabic markdown includes exact title`);
  assert(enMd.includes(rep.titleEn), `[${studioExpId}] English markdown includes exact title`);
}

// 5. Testing KaTeX Delimiters in Governing Equations
console.log('\n--- 5. Testing Governing Formula KaTeX Delimiters ---');
for (const expId of configuredExpIds) {
  const template = getLabReportTemplate(expId);
  const eq = template.governingEquation;

  // Count braces
  const openBraces = (eq.match(/\{/g) || []).length;
  const closeBraces = (eq.match(/\}/g) || []).length;
  assert(openBraces === closeBraces, `[${expId}] balanced curly braces: { ${openBraces} vs } ${closeBraces}`);
}

console.log(`\n================================`);
console.log(`Total Passed: ${passed} | Failed: ${failed}`);
console.log(`================================`);

if (failed > 0) {
  console.error(`💥 Verification failed with ${failed} errors!`);
  process.exit(1);
} else {
  console.log('🎉 Virtual Labs Scientific Report Generator 100% verified!');
}
