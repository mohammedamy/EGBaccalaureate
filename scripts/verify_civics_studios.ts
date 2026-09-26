import fs from 'fs';
import path from 'path';

interface CheckResult {
  name: string;
  passed: boolean;
  details?: string;
}

const results: CheckResult[] = [];

function check(name: string, condition: boolean, details?: string) {
  results.push({ name, passed: condition, details });
  const status = condition ? '✅ PASS' : '❌ FAIL';
  console.log(`${status}: ${name}${details ? ` (${details})` : ''}`);
}

const ROOT = process.cwd();

console.log('🏛️  Starting Phase 34: Civics & Constitutional Studios Verification...\n');

// 1. Check 4K Archival Assets
const assets = [
  { file: 'egypt_constitution_1923.jpg', minSize: 500 * 1024, label: '1923 Royal Constitution Master Folio' },
  { file: 'urabi_fundamental_law_1882.jpg', minSize: 500 * 1024, label: '1882 Urabi Fundamental Law & Chamber Ledger' },
  { file: 'republic_constitution_1956.jpg', minSize: 500 * 1024, label: '1956 Republic Constitution & Referendum Ballot' },
  { file: 'supreme_constitutional_court_2014.jpg', minSize: 500 * 1024, label: '2014 Constitution & Supreme Constitutional Court' },
];

for (const a of assets) {
  const p = path.join(ROOT, 'src/assets/civics', a.file);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  check(
    `Archival Asset: ${a.file} (${a.label})`,
    exists && size >= a.minSize,
    `Size: ${(size / 1024).toFixed(1)} KB (min ${(a.minSize / 1024).toFixed(1)} KB)`
  );
}

// 2. Check Studio Files Exist
const studios = [
  'Constitution1923Studio.tsx',
  'UrabiFundamentalLaw1882Studio.tsx',
  'RepublicConstitution1956Studio.tsx',
  'SupremeConstitutionalCourtStudio.tsx',
];

for (const s of studios) {
  const p = path.join(ROOT, 'src/components/labs/civics', s);
  check(`Studio Component: ${s}`, fs.existsSync(p));
}

// 3. Check Hotspot Counts and Bilingual Fidelity in Studios
const hotspotChecks = [
  { file: 'Constitution1923Studio.tsx', varName: 'CONSTITUTION_1923_HOTSPOTS', expectedCount: 5 },
  { file: 'UrabiFundamentalLaw1882Studio.tsx', varName: 'URABI_1882_HOTSPOTS', expectedCount: 5 },
  { file: 'RepublicConstitution1956Studio.tsx', varName: 'REPUBLIC_1956_HOTSPOTS', expectedCount: 5 },
  { file: 'SupremeConstitutionalCourtStudio.tsx', varName: 'SCC_2014_HOTSPOTS', expectedCount: 5 },
];

for (const h of hotspotChecks) {
  const p = path.join(ROOT, 'src/components/labs/civics', h.file);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf-8');
    const hasVar = content.includes(h.varName);
    const hasModal = content.includes('HiResImageModal');
    const hasArabic = content.includes('isArabic');

    // Count hotspots by checking id: occurrences inside the array
    const varIdx = content.indexOf(h.varName);
    const endIdx = content.indexOf('];', varIdx);
    const slice = content.slice(varIdx, endIdx > varIdx ? endIdx : varIdx + 10000);
    const idMatches = (slice.match(/id:\s*['"][a-z0-9_]+['"]/g) || []).length;

    check(
      `Hotspots definition in ${h.file}`,
      hasVar && idMatches === h.expectedCount,
      `Found ${idMatches}/${h.expectedCount} hotspots`
    );
    check(`HiResImageModal integrated in ${h.file}`, hasModal && hasArabic);
  } else {
    check(`Hotspots in ${h.file}`, false, 'File not found');
  }
}

// 4. Check NationalCivicsStudio.tsx Integration
const mainStudioPath = path.join(ROOT, 'src/components/labs/NationalCivicsStudio.tsx');
if (fs.existsSync(mainStudioPath)) {
  const content = fs.readFileSync(mainStudioPath, 'utf-8');

  // Check imports
  const has1923Import = content.includes('Constitution1923Studio');
  const has1882Import = content.includes('UrabiFundamentalLaw1882Studio');
  const has1956Import = content.includes('RepublicConstitution1956Studio');
  const has2014Import = content.includes('SupremeConstitutionalCourtStudio');
  check(
    'NationalCivicsStudio imports all 4 studios',
    has1923Import && has1882Import && has1956Import && has2014Import
  );

  // Check CivicsStudioTab union keys
  const has1923Tab = content.includes("'constitution_1923'");
  const has1882Tab = content.includes("'urabi_1882'");
  const has1956Tab = content.includes("'republic_1956'");
  const has2014Tab = content.includes("'scc_2014'");
  check(
    'CivicsStudioTab includes all 4 archival tab keys',
    has1923Tab && has1882Tab && has1956Tab && has2014Tab
  );

  // Check 4K Showcase Jump Banner
  const hasBanner = content.includes('4K Archival Constitutional Folios Showcase Banner');
  check('4K Archival Showcase Jump Banner present in NationalCivicsStudio', hasBanner);

  // Check viewports rendering
  const has1923Viewport = content.includes('<Constitution1923Studio');
  const has1882Viewport = content.includes('<UrabiFundamentalLaw1882Studio');
  const has1956Viewport = content.includes('<RepublicConstitution1956Studio');
  const has2014Viewport = content.includes('<SupremeConstitutionalCourtStudio');
  check(
    'All 4 studio viewports mounted conditionally in NationalCivicsStudio',
    has1923Viewport && has1882Viewport && has1956Viewport && has2014Viewport
  );
} else {
  check('NationalCivicsStudio.tsx exists', false);
}

// Summary
console.log('\n------------------------------------------------------------');
const passed = results.filter((r) => r.passed).length;
const total = results.length;
console.log(`Results: ${passed}/${total} checks passed (${((passed / total) * 100).toFixed(1)}%)`);

if (passed === total) {
  console.log('🎉 ALL CIVICS & CONSTITUTIONAL STUDIOS VERIFIED SUCCESSFULLY!\n');
  process.exit(0);
} else {
  console.error('❌ SOME CHECKS FAILED!\n');
  process.exit(1);
}
