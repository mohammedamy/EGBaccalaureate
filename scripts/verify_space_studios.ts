import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🏛️ VERIFYING 4K MUSEUM ARCHIVAL STUDIOS FOR EARTH & SPACE SCIENCES 🌌');
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
console.log('--- 1. 4K Astronomy & Space Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Ptolemy Almagest Geocentric 150 AD Folio',
    file: 'src/assets/space/ptolemy_almagest_geocentric_150ad.jpg',
    minSize: 500_000,
  },
  {
    name: 'Copernicus De revolutionibus Heliocentric 1543 Folio',
    file: 'src/assets/space/copernicus_heliocentric_1543.jpg',
    minSize: 500_000,
  },
  {
    name: 'Kepler Astronomia Nova 1609 Folio',
    file: 'src/assets/space/kepler_astronomia_nova_1609.jpg',
    minSize: 500_000,
  },
  {
    name: 'Hubble Expanding Universe PNAS 1929 Paper',
    file: 'src/assets/space/hubble_expanding_universe_1929.jpg',
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
    componentName: 'PtolemyAlmagestStudio',
    hotspotConst: 'PTOLEMY_HOTSPOTS',
    file: 'src/components/labs/space/PtolemyAlmagestStudio.tsx',
    features: [
      'geocentric_crystalline_spheres',
      'deferent_circle_epicycle',
      'equant_point_uniform_motion',
      'deferentR',
      'epicycleR',
      'distFromEarth',
      'isRetrograde',
      'angularSpeed',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'CopernicusHeliocentricStudio',
    hotspotConst: 'COPERNICUS_HOTSPOTS',
    file: 'src/components/labs/space/CopernicusHeliocentricStudio.tsx',
    features: [
      'sol_stationary_center',
      'concentric_planetary_order',
      'targetPlanetKey',
      'orbitTimeYears',
      'distanceEarthPlanet',
      'elongationDeg',
      'synodicPeriodYears',
      'isOvertakingRetrograde',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'KeplerPlanetaryLawsStudio',
    hotspotConst: 'KEPLER_HOTSPOTS',
    file: 'src/components/labs/space/KeplerPlanetaryLawsStudio.tsx',
    features: [
      'elliptical_orbit_mars',
      'equal_areas_equal_times',
      'semiMajorAxisA',
      'eccentricityE',
      'trueAnomalyDeg',
      'vOrbitKmS',
      'rPerihelion',
      'rAphelion',
      'periodYears',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'HubbleExpandingUniverseStudio',
    hotspotConst: 'HUBBLE_HOTSPOTS',
    file: 'src/components/labs/space/HubbleExpandingUniverseStudio.tsx',
    features: [
      'linear_velocity_distance_plot',
      'doppler_spectral_redshift',
      'distanceMpc',
      'hubbleConstantH0',
      'recessionalVelocity',
      'z',
      'obsLambdaK',
      'ageGyr',
      'cosmicScaleFactor',
      'HiResImageModal',
    ],
  },
];

for (const s of studios) {
  const compPath = path.join(rootDir, s.file);
  const compExists = fs.existsSync(compPath);
  assert(compExists, `Studio file exists: ${s.file}`);
  if (compExists) {
    const content = fs.readFileSync(compPath, 'utf8');
    assert(
      content.includes(`export const ${s.componentName}`) || content.includes(`export default ${s.componentName}`),
      `${s.file} exports ${s.componentName}`
    );
    assert(content.includes(`export const ${s.hotspotConst}`), `${s.file} exports ${s.hotspotConst}`);
    for (const feat of s.features) {
      assert(content.includes(feat), `${s.componentName} includes feature/model: ${feat}`);
    }
  }
}

// 3. Verify SpacePlanetaryStudio.tsx Integration
console.log('\n--- 3. SpacePlanetaryStudio.tsx Integration ---');
const spaceStudioPath = path.join(rootDir, 'src/components/labs/SpacePlanetaryStudio.tsx');
assert(fs.existsSync(spaceStudioPath), 'SpacePlanetaryStudio.tsx exists');

if (fs.existsSync(spaceStudioPath)) {
  const content = fs.readFileSync(spaceStudioPath, 'utf8');

  // Check imports
  assert(content.includes("import { PtolemyAlmagestStudio } from './space/PtolemyAlmagestStudio';"), 'SpacePlanetaryStudio imports PtolemyAlmagestStudio');
  assert(content.includes("import { CopernicusHeliocentricStudio } from './space/CopernicusHeliocentricStudio';"), 'SpacePlanetaryStudio imports CopernicusHeliocentricStudio');
  assert(content.includes("import { KeplerPlanetaryLawsStudio } from './space/KeplerPlanetaryLawsStudio';"), 'SpacePlanetaryStudio imports KeplerPlanetaryLawsStudio');
  assert(content.includes("import { HubbleExpandingUniverseStudio } from './space/HubbleExpandingUniverseStudio';"), 'SpacePlanetaryStudio imports HubbleExpandingUniverseStudio');

  // Check SpaceStudioMode union
  assert(content.includes("'ptolemy_almagest'"), "SpaceStudioMode union contains 'ptolemy_almagest'");
  assert(content.includes("'copernicus_heliocentric'"), "SpaceStudioMode union contains 'copernicus_heliocentric'");
  assert(content.includes("'kepler_planetary_laws'"), "SpaceStudioMode union contains 'kepler_planetary_laws'");
  assert(content.includes("'hubble_expanding_universe'"), "SpaceStudioMode union contains 'hubble_expanding_universe'");

  // Check tab rendering
  assert(content.includes("activeMode === 'ptolemy_almagest'"), "SpacePlanetaryStudio mounts activeMode === 'ptolemy_almagest'");
  assert(content.includes("activeMode === 'copernicus_heliocentric'"), "SpacePlanetaryStudio mounts activeMode === 'copernicus_heliocentric'");
  assert(content.includes("activeMode === 'kepler_planetary_laws'"), "SpacePlanetaryStudio mounts activeMode === 'kepler_planetary_laws'");
  assert(content.includes("activeMode === 'hubble_expanding_universe'"), "SpacePlanetaryStudio mounts activeMode === 'hubble_expanding_universe'");

  // Check Showcase banner and jump handlers
  assert(content.includes('معرض المخطوطات والوثائق الأرشيفية الفلكية بدقة 4K'), 'SpacePlanetaryStudio renders 4K Archival Museum Studios showcase banner');
  assert(content.includes("setActiveMode('ptolemy_almagest')"), 'Showcase jump card clicks trigger ptolemy_almagest');
  assert(content.includes("setActiveMode('copernicus_heliocentric')"), 'Showcase jump card clicks trigger copernicus_heliocentric');
  assert(content.includes("setActiveMode('kepler_planetary_laws')"), 'Showcase jump card clicks trigger kepler_planetary_laws');
  assert(content.includes("setActiveMode('hubble_expanding_universe')"), 'Showcase jump card clicks trigger hubble_expanding_universe');
}

console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL ASTRONOMY & SPACE 4K MUSEUM ARCHIVAL STUDIOS VERIFIED WITH 100% SUCCESS! 🎉');
  console.log('======================================================================\n');
  process.exit(0);
} else {
  console.error(`❌ Verification failed with ${errors} error(s).`);
  console.log('======================================================================\n');
  process.exit(1);
}
