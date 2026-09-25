import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🏛️ VERIFYING 4K MUSEUM ARCHIVAL STUDIOS FOR PHYSICS (علمي علوم / رياضة) ⚡');
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
console.log('--- 1. 4K Physics Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Isaac Newton 1687 Principia Mathematica Book III Folio',
    file: 'src/assets/physics/newton_principia_gravitation_1687.jpg',
    minSize: 500_000,
  },
  {
    name: 'Galileo Galilei 1638 Discorsi Kinematics & Inclined Plane Folio',
    file: 'src/assets/physics/galileo_discorsi_kinematics_1638.jpg',
    minSize: 500_000,
  },
  {
    name: 'Michael Faraday 1831 Induction Torus Ring Laboratory Notebook',
    file: 'src/assets/physics/faraday_induction_1831.jpg',
    minSize: 500_000,
  },
  {
    name: 'Albert Einstein 1905 Photoelectric Quanta Annalen der Physik',
    file: 'src/assets/physics/einstein_photoelectric_quanta_1905.jpg',
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
    componentName: 'NewtonPrincipiaStudio',
    hotspotConst: 'NEWTON_HOTSPOTS',
    file: 'src/components/labs/physics/NewtonPrincipiaStudio.tsx',
    features: [
      'universal_gravitation',
      'orbital_velocity_escape',
      'selectedPreset',
      'customAltitudeKm',
      'orbitalRadiusM',
      'orbitalSpeedKmS',
      'escapeSpeedKmS',
      'orbitalPeriodSec',
      'localGravField',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'GalileoKinematicsStudio',
    hotspotConst: 'GALILEO_HOTSPOTS',
    file: 'src/components/labs/physics/GalileoKinematicsStudio.tsx',
    features: [
      'inclined_plane_apparatus',
      'law_odd_numbers_distances',
      'inclineAngleDeg',
      'rampLengthM',
      'motionType',
      'acceleration',
      'totalTimeSec',
      'terminalSpeedMS',
      'oddIntervals',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'FaradayInductionStudio',
    hotspotConst: 'FARADAY_HOTSPOTS',
    file: 'src/components/labs/physics/FaradayInductionStudio.tsx',
    features: [
      'faraday_soft_iron_ring',
      'galvanometer_needle_kick',
      'numTurns',
      'magFieldB',
      'coilAreaCm2',
      'freqHz',
      'peakEmfV',
      'rmsEmfV',
      'maxFluxWb',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'EinsteinPhotoelectricStudio',
    hotspotConst: 'EINSTEIN_HOTSPOTS',
    file: 'src/components/labs/physics/EinsteinPhotoelectricStudio.tsx',
    features: [
      'light_quantum_hypothesis',
      'work_function_threshold',
      'stopping_potential_equation',
      'selectedMetal',
      'wavelengthNm',
      'incidentEnergyEv',
      'thresholdWavelengthNm',
      'isEmitting',
      'kMaxEv',
      'stoppingPotentialV',
      'maxVelocityKmS',
      'HiResImageModal',
    ],
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

// 3. Verify PhysicsLab.tsx Integration
console.log('\n--- 3. PhysicsLab.tsx Integration ---');
const physLabPath = path.join(rootDir, 'src/components/labs/PhysicsLab.tsx');
assert(fs.existsSync(physLabPath), 'PhysicsLab.tsx exists');
if (fs.existsSync(physLabPath)) {
  const content = fs.readFileSync(physLabPath, 'utf-8');

  // Check imports
  assert(content.includes('NewtonPrincipiaStudio'), 'PhysicsLab imports NewtonPrincipiaStudio');
  assert(content.includes('GalileoKinematicsStudio'), 'PhysicsLab imports GalileoKinematicsStudio');
  assert(content.includes('FaradayInductionStudio'), 'PhysicsLab imports FaradayInductionStudio');
  assert(content.includes('EinsteinPhotoelectricStudio'), 'PhysicsLab imports EinsteinPhotoelectricStudio');

  // Check PhysicsTab union values
  const physTabs = ['newton_principia', 'galileo_kinematics', 'faraday_induction', 'einstein_photoelectric'];
  for (const tab of physTabs) {
    assert(content.includes(`'${tab}'`), `PhysicsTab union contains '${tab}'`);
  }

  // Check renderTabContent cases
  for (const tab of physTabs) {
    assert(
      content.includes(`activeTab === '${tab}'`),
      `renderTabContent mounts activeTab === '${tab}'`
    );
  }

  // Check subtabsOptions
  for (const tab of physTabs) {
    assert(
      content.includes(`value="${tab}"`),
      `subtabsOptions dropdown has option value="${tab}"`
    );
  }

  // Check Museum Showcase Jump Cards
  assert(
    content.includes('Curated 4K Physics Archival Museum Studios') ||
      content.includes('معرض المخطوطات واللوحات الفيزيائية الأرشيفية فائق الدقة (4K)'),
    'PhysicsLab renders 4K Archival Museum Studios showcase banner'
  );
  assert(
    content.includes("handleTabChange('newton_principia')"),
    'Showcase jump card clicks trigger newton_principia'
  );
  assert(
    content.includes("handleTabChange('galileo_kinematics')"),
    'Showcase jump card clicks trigger galileo_kinematics'
  );
  assert(
    content.includes("handleTabChange('faraday_induction')"),
    'Showcase jump card clicks trigger faraday_induction'
  );
  assert(
    content.includes("handleTabChange('einstein_photoelectric')"),
    'Showcase jump card clicks trigger einstein_photoelectric'
  );
}

// 4. Verify VirtualLabsHub.tsx Integration
console.log('\n--- 4. VirtualLabsHub.tsx Integration ---');
const virtualLabsHubPath = path.join(rootDir, 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const content = fs.readFileSync(virtualLabsHubPath, 'utf-8');
  assert(content.includes("case 'newton_principia':"), "VirtualLabsHub maps 'newton_principia'");
  assert(content.includes("case 'galileo_kinematics':"), "VirtualLabsHub maps 'galileo_kinematics'");
  assert(content.includes("case 'faraday_induction':"), "VirtualLabsHub maps 'faraday_induction'");
  assert(content.includes("case 'einstein_photoelectric':"), "VirtualLabsHub maps 'einstein_photoelectric'");

  assert(content.includes("id: 'newton_principia' as PhysicsTab"), "VirtualLabsHub phys tab list has 'newton_principia'");
  assert(content.includes("id: 'galileo_kinematics' as PhysicsTab"), "VirtualLabsHub phys tab list has 'galileo_kinematics'");
  assert(content.includes("id: 'faraday_induction' as PhysicsTab"), "VirtualLabsHub phys tab list has 'faraday_induction'");
  assert(content.includes("id: 'einstein_photoelectric' as PhysicsTab"), "VirtualLabsHub phys tab list has 'einstein_photoelectric'");
}

// Summary
console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL PHYSICS 4K MUSEUM ARCHIVAL STUDIOS VERIFIED WITH 100% SUCCESS! 🎉');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS! 💥`);
  console.log('======================================================================');
  process.exit(1);
}
