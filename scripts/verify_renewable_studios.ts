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

console.log('⚡ Starting Phase 37: Renewable Energy & Clean Tech Pioneers Studios Verification...\n');

// 1. Check 4K Archival Assets (>500 KB)
console.log('--- 1. 4K Renewable Energy Archival Plate Assets ---');
const assets = [
  { file: 'mouchot_solar_concentrator_1878.jpg', minSize: 500 * 1024, label: 'Augustin Mouchot Solar Concentrator 1878 Paris Exposition Folio' },
  { file: 'betz_wind_aerodynamics_1919.jpg', minSize: 500 * 1024, label: 'Albert Betz Wind Aerodynamics 1919 Göttingen Folio' },
  { file: 'grove_hydrogen_fuel_cell_1839.jpg', minSize: 500 * 1024, label: 'Sir William Robert Grove Hydrogen Fuel Cell 1839 Philosophical Magazine' },
  { file: 'becquerel_photovoltaic_effect_1839.jpg', minSize: 500 * 1024, label: 'Alexandre-Edmond Becquerel Photovoltaic Effect 1839 Académie des Sciences' },
];

for (const a of assets) {
  const p = path.join(ROOT, 'src/assets/renewable', a.file);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  check(
    `Archival Asset: ${a.file} (${a.label})`,
    exists && size >= a.minSize,
    `Size: ${(size / 1024).toFixed(1)} KB (min ${(a.minSize / 1024).toFixed(1)} KB)`
  );
}

// 2. Check Studio Files Exist
console.log('\n--- 2. Studio Components & Scientific Hotspots ---');
const studios = [
  'MouchotSolarConcentratorStudio.tsx',
  'BetzWindAerodynamicsStudio.tsx',
  'GroveHydrogenFuelCellStudio.tsx',
  'BecquerelPhotovoltaicStudio.tsx',
];

for (const s of studios) {
  const p = path.join(ROOT, 'src/components/labs/renewable', s);
  check(`Studio Component: ${s}`, fs.existsSync(p));
}

// 3. Check Hotspot Counts and Bilingual Fidelity in Studios
const hotspotChecks = [
  {
    file: 'MouchotSolarConcentratorStudio.tsx',
    varName: 'MOUCHOT_1878_HOTSPOTS',
    expectedCount: 5,
    keyFeatures: ['dniWm2', 'apertureDiameterM', 'opticalEfficiencyPct', 'operatingTempC', 'thermalPowerOutputKw'],
  },
  {
    file: 'BetzWindAerodynamicsStudio.tsx',
    varName: 'BETZ_1919_HOTSPOTS',
    expectedCount: 5,
    keyFeatures: ['windSpeedV1', 'rotorDiameterM', 'inductionFactorA', 'airDensityKgM3', 'cpTheoretical'],
  },
  {
    file: 'GroveHydrogenFuelCellStudio.tsx',
    varName: 'GROVE_1839_HOTSPOTS',
    expectedCount: 5,
    keyFeatures: ['cellTempC', 'currentDensityAcm2', 'activeAreaCm2', 'cellCount', 'pressureAtm', 'stackPowerKw'],
  },
  {
    file: 'BecquerelPhotovoltaicStudio.tsx',
    varName: 'BECQUEREL_1839_HOTSPOTS',
    expectedCount: 5,
    keyFeatures: ['wavelengthNm', 'bandgapEv', 'irradianceWm2', 'cellAreaCm2', 'temperatureC', 'pMaxW'],
  },
];

for (const h of hotspotChecks) {
  const p = path.join(ROOT, 'src/components/labs/renewable', h.file);
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

    // Verify key simulation variables
    const allFeaturesPresent = h.keyFeatures.every((f) => content.includes(f));
    check(`Physics & Simulation models in ${h.file}`, allFeaturesPresent);
  } else {
    check(`Hotspots in ${h.file}`, false, 'File not found');
  }
}

// 4. Check RenewableEnergyStudio.tsx Integration
console.log('\n--- 3. Integration in RenewableEnergyStudio.tsx ---');
const mainStudioPath = path.join(ROOT, 'src/components/labs/RenewableEnergyStudio.tsx');
if (fs.existsSync(mainStudioPath)) {
  const content = fs.readFileSync(mainStudioPath, 'utf-8');

  // Check imports
  const hasMouchotImport = content.includes('MouchotSolarConcentratorStudio');
  const hasBetzImport = content.includes('BetzWindAerodynamicsStudio');
  const hasGroveImport = content.includes('GroveHydrogenFuelCellStudio');
  const hasBecquerelImport = content.includes('BecquerelPhotovoltaicStudio');
  check(
    'RenewableEnergyStudio imports all 4 pioneer studios',
    hasMouchotImport && hasBetzImport && hasGroveImport && hasBecquerelImport
  );

  // Check RenewableStation union keys
  const hasMouchotTab = content.includes("'mouchot_solar_concentrator'");
  const hasBetzTab = content.includes("'betz_wind_law'");
  const hasGroveTab = content.includes("'grove_fuel_cell'");
  const hasBecquerelTab = content.includes("'becquerel_photovoltaic'");
  check(
    'RenewableStation includes all 4 archival pioneer tab keys',
    hasMouchotTab && hasBetzTab && hasGroveTab && hasBecquerelTab
  );

  // Check 4K Showcase Jump Banner
  const hasBanner = content.includes('4K Archival Showcase Jump Banner') ||
    content.includes('أجنحة المخطوطات والوثائق الأرشيفية بدقة 4K في الطاقة المتجددة');
  check('4K Archival Showcase Jump Banner present in RenewableEnergyStudio', hasBanner);

  // Check viewports rendering
  const hasMouchotViewport = content.includes('<MouchotSolarConcentratorStudio');
  const hasBetzViewport = content.includes('<BetzWindAerodynamicsStudio');
  const hasGroveViewport = content.includes('<GroveHydrogenFuelCellStudio');
  const hasBecquerelViewport = content.includes('<BecquerelPhotovoltaicStudio');
  check(
    'All 4 studio viewports mounted conditionally in RenewableEnergyStudio',
    hasMouchotViewport && hasBetzViewport && hasGroveViewport && hasBecquerelViewport
  );

  // Check touch target accessibility
  check('Touch targets meet >= 44px min-h requirement', content.includes('min-h-[44px]'));
} else {
  check('RenewableEnergyStudio.tsx exists', false);
}

// Summary
console.log('\n------------------------------------------------------------');
const passed = results.filter((r) => r.passed).length;
const total = results.length;
console.log(`Results: ${passed}/${total} checks passed (${((passed / total) * 100).toFixed(1)}%)`);

if (passed === total) {
  console.log('🎉 ALL RENEWABLE ENERGY 4K STUDIOS VERIFIED SUCCESSFULLY!\n');
  process.exit(0);
} else {
  console.error('❌ SOME CHECKS FAILED!\n');
  process.exit(1);
}
