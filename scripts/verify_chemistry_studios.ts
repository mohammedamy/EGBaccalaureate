import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('⚗️ VERIFYING 4K MUSEUM ARCHIVAL STUDIOS FOR CHEMISTRY (علمي علوم / رياضة) ⚗️');
console.log('======================================================================\n');

let errors = 0;
function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

const rootDir = process.cwd();

// 1. Verify 4K Museum Image Assets
console.log('--- 1. 4K Chemical Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Antoine Lavoisier 1789 Traité Élémentaire de Chimie Plate IV',
    file: 'src/assets/chemistry/lavoisier_traite_elementaire_1789.jpg',
    minSize: 500_000,
  },
  {
    name: 'Dmitri Mendeleev 1869 Periodic Law System Manuscript',
    file: 'src/assets/chemistry/mendeleev_periodic_system_1869.jpg',
    minSize: 500_000,
  },
  {
    name: 'Marie & Pierre Curie 1898 Radioactivity Laboratory Notebook',
    file: 'src/assets/chemistry/curie_radioactivity_notebook_1898.jpg',
    minSize: 500_000,
  },
  {
    name: 'Niels Bohr 1913 Quantized Hydrogen Atom Philosophical Magazine',
    file: 'src/assets/chemistry/bohr_quantum_atom_1913.jpg',
    minSize: 500_000,
  },
];

for (const img of expectedImages) {
  const fullPath = path.join(rootDir, img.file);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Image asset exists: ${img.file}`);
  if (exists) {
    const stat = fs.statSync(fullPath);
    assert(
      stat.size >= img.minSize,
      `${img.name} has authentic 4K resolution (size: ${(stat.size / 1024).toFixed(1)} KB >= ${(img.minSize / 1024).toFixed(0)} KB)`
    );
  }
}

// 2. Verify Component Files & Hotspots
console.log('\n--- 2. Studio Components & Scientific Hotspots ---');
const studios = [
  {
    componentName: 'LavoisierCombustionStudio',
    hotspotConst: 'LAVOISIER_HOTSPOTS',
    file: 'src/components/labs/chemistry/LavoisierCombustionStudio.tsx',
    features: ['sealed_retort_mercury', 'chemical_nomenclature_table', 'selectedReaction', 'reactantMass', 'totalReactantMass', 'productMass', 'HiResImageModal'],
  },
  {
    componentName: 'MendeleevPeriodicStudio',
    hotspotConst: 'MENDELEEV_HOTSPOTS',
    file: 'src/components/labs/chemistry/MendeleevPeriodicStudio.tsx',
    features: ['eka_aluminum_prediction', 'eka_silicon_prediction', 'selectedPredictedElement', 'predictiveData', 'atomic_weight_periodicity', 'HiResImageModal'],
  },
  {
    componentName: 'CurieRadioactivityStudio',
    hotspotConst: 'CURIE_HOTSPOTS',
    file: 'src/components/labs/chemistry/CurieRadioactivityStudio.tsx',
    features: ['piezoelectric_electrometer', 'pitchblende_fractionation', 'selectedIsotope', 'elapsedPeriods', 'remainingPercent', 'totalTimeElapsed', 'HiResImageModal'],
  },
  {
    componentName: 'BohrQuantumAtomStudio',
    hotspotConst: 'BOHR_HOTSPOTS',
    file: 'src/components/labs/chemistry/BohrQuantumAtomStudio.tsx',
    features: ['bohr_quantum_postulates', 'balmer_visible_series', 'initialN', 'finalN', 'deltaE_eV', 'frequency_THz', 'wavelength_nm', 'HiResImageModal'],
  },
];

for (const s of studios) {
  const filePath = path.join(rootDir, s.file);
  const exists = fs.existsSync(filePath);
  assert(exists, `Studio file exists: ${s.file}`);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf-8');
    assert(
      content.includes(`export const ${s.componentName}`),
      `${s.file} exports ${s.componentName}`
    );
    assert(
      content.includes(`export const ${s.hotspotConst}`),
      `${s.file} exports ${s.hotspotConst}`
    );

    // Verify key simulation models and features
    for (const feat of s.features) {
      assert(content.includes(feat), `${s.componentName} includes feature/model: ${feat}`);
    }
  }
}

// 3. Verify ChemistryLab.tsx Integration
console.log('\n--- 3. ChemistryLab.tsx Integration ---');
const chemLabPath = path.join(rootDir, 'src/components/labs/ChemistryLab.tsx');
assert(fs.existsSync(chemLabPath), 'ChemistryLab.tsx exists');
if (fs.existsSync(chemLabPath)) {
  const content = fs.readFileSync(chemLabPath, 'utf-8');

  // Check imports
  assert(content.includes('LavoisierCombustionStudio'), 'ChemistryLab imports LavoisierCombustionStudio');
  assert(content.includes('MendeleevPeriodicStudio'), 'ChemistryLab imports MendeleevPeriodicStudio');
  assert(content.includes('CurieRadioactivityStudio'), 'ChemistryLab imports CurieRadioactivityStudio');
  assert(content.includes('BohrQuantumAtomStudio'), 'ChemistryLab imports BohrQuantumAtomStudio');

  // Check ChemTab union values
  const chemTabs = ['lavoisier_combustion', 'mendeleev_periodic', 'curie_radioactivity', 'bohr_atom'];
  for (const tab of chemTabs) {
    assert(content.includes(`'${tab}'`), `ChemTab union contains '${tab}'`);
  }

  // Check renderTabContent cases
  for (const tab of chemTabs) {
    assert(
      content.includes(`activeTab === '${tab}'`),
      `renderTabContent mounts activeTab === '${tab}'`
    );
  }

  // Check subtabsOptions
  for (const tab of chemTabs) {
    assert(
      content.includes(`value="${tab}"`),
      `subtabsOptions dropdown has option value="${tab}"`
    );
  }

  // Check Museum Showcase Jump Cards
  assert(
    content.includes('Curated 4K Chemical Archival Museum Studios') ||
      content.includes('معرض المخطوطات واللوحات الكيميائية الأرشيفية فائق الدقة (4K)'),
    'ChemistryLab renders 4K Archival Museum Studios showcase banner'
  );
  assert(
    content.includes("handleTabChange('lavoisier_combustion')"),
    'Showcase jump card clicks trigger lavoisier_combustion'
  );
  assert(
    content.includes("handleTabChange('mendeleev_periodic')"),
    'Showcase jump card clicks trigger mendeleev_periodic'
  );
  assert(
    content.includes("handleTabChange('curie_radioactivity')"),
    'Showcase jump card clicks trigger curie_radioactivity'
  );
  assert(
    content.includes("handleTabChange('bohr_atom')"),
    'Showcase jump card clicks trigger bohr_atom'
  );
}

// 4. Verify VirtualLabsHub.tsx Integration
console.log('\n--- 4. VirtualLabsHub.tsx Integration ---');
const virtualLabsHubPath = path.join(rootDir, 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const content = fs.readFileSync(virtualLabsHubPath, 'utf-8');
  assert(content.includes("case 'lavoisier_combustion':"), "VirtualLabsHub maps 'lavoisier_combustion'");
  assert(content.includes("case 'mendeleev_periodic':"), "VirtualLabsHub maps 'mendeleev_periodic'");
  assert(content.includes("case 'curie_radioactivity':"), "VirtualLabsHub maps 'curie_radioactivity'");
  assert(content.includes("case 'bohr_atom':"), "VirtualLabsHub maps 'bohr_atom'");

  assert(content.includes("id: 'lavoisier_combustion' as ChemTab"), "VirtualLabsHub chem tab list has 'lavoisier_combustion'");
  assert(content.includes("id: 'mendeleev_periodic' as ChemTab"), "VirtualLabsHub chem tab list has 'mendeleev_periodic'");
  assert(content.includes("id: 'curie_radioactivity' as ChemTab"), "VirtualLabsHub chem tab list has 'curie_radioactivity'");
  assert(content.includes("id: 'bohr_atom' as ChemTab"), "VirtualLabsHub chem tab list has 'bohr_atom'");
}

// Summary
console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL CHEMISTRY 4K MUSEUM ARCHIVAL STUDIOS VERIFIED WITH 100% SUCCESS! 🎉');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS! 💥`);
  console.log('======================================================================');
  process.exit(1);
}
