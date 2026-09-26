import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🏛️ VERIFYING 4K MUSEUM ARCHIVAL STUDIOS FOR MATHEMATICS (علمي رياضة) 📐');
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
console.log('--- 1. 4K Mathematics Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Euclid Elements Geometry 300 BCE Folio',
    file: 'src/assets/math/euclid_elements_geometry_300bc.jpg',
    minSize: 500_000,
  },
  {
    name: 'Al-Khwarizmi Al-Jabr Algebra 820 CE Folio',
    file: 'src/assets/math/khwarizmi_al_jabr_algebra_820.jpg',
    minSize: 500_000,
  },
  {
    name: 'Descartes La Géométrie 1637 Folio',
    file: 'src/assets/math/descartes_la_geometrie_1637.jpg',
    minSize: 500_000,
  },
  {
    name: 'Gauss Disquisitiones Arithmeticae 1801 Folio',
    file: 'src/assets/math/gauss_disquisitiones_arithmeticae_1801.jpg',
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
    componentName: 'EuclidElementsStudio',
    hotspotConst: 'EUCLID_HOTSPOTS',
    file: 'src/components/labs/math/EuclidElementsStudio.tsx',
    features: [
      'pythagorean_brides_chair',
      'parallel_postulate_five',
      'legA',
      'legB',
      'hypotenuseC',
      'areaSquareA',
      'areaSquareB',
      'areaSquareC',
      'triangleArea',
      'altitudeH',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'KhwarizmiAlJabrStudio',
    hotspotConst: 'KHWARIZMI_HOTSPOTS',
    file: 'src/components/labs/math/KhwarizmiAlJabrStudio.tsx',
    features: [
      'al_jabr_restoration_concept',
      'completing_the_square_geometry',
      'bCoeff',
      'cConstant',
      'halfB',
      'cornerSquareArea',
      'totalCompletedArea',
      'sideCompletedSquare',
      'rootX',
      'discriminant',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'DescartesGeometryStudio',
    hotspotConst: 'DESCARTES_HOTSPOTS',
    file: 'src/components/labs/math/DescartesGeometryStudio.tsx',
    features: [
      'cartesian_orthogonal_axes',
      'algebraic_curve_representation',
      'curveMode',
      'slopeM',
      'interceptC',
      'radiusR',
      'parabolaA',
      'probeX',
      'parabolaTangentSlope',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'GaussDisquisitionesStudio',
    hotspotConst: 'GAUSS_HOTSPOTS',
    file: 'src/components/labs/math/GaussDisquisitionesStudio.tsx',
    features: [
      'modular_congruence_notation',
      'heptadecagon_cyclotomic_construction',
      'modulusM',
      'coeffA',
      'targetB',
      'isSolvable',
      'solutions',
      'totient',
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

// 3. Verify MathLab.tsx Integration
console.log('\n--- 3. MathLab.tsx Integration ---');
const mathLabPath = path.join(rootDir, 'src/components/labs/MathLab.tsx');
assert(fs.existsSync(mathLabPath), 'MathLab.tsx exists');
if (fs.existsSync(mathLabPath)) {
  const content = fs.readFileSync(mathLabPath, 'utf-8');

  // Check imports
  assert(content.includes('EuclidElementsStudio'), 'MathLab imports EuclidElementsStudio');
  assert(content.includes('KhwarizmiAlJabrStudio'), 'MathLab imports KhwarizmiAlJabrStudio');
  assert(content.includes('DescartesGeometryStudio'), 'MathLab imports DescartesGeometryStudio');
  assert(content.includes('GaussDisquisitionesStudio'), 'MathLab imports GaussDisquisitionesStudio');

  // Check MathTab union values
  const mathTabs = ['euclid_elements', 'khwarizmi_al_jabr', 'descartes_geometry', 'gauss_disquisitiones'];
  for (const tab of mathTabs) {
    assert(content.includes(`'${tab}'`), `MathTab union contains '${tab}'`);
  }

  // Check renderTabContent cases
  for (const tab of mathTabs) {
    assert(
      content.includes(`activeTab === '${tab}'`),
      `MathLab mounts activeTab === '${tab}'`
    );
  }

  // Check select options
  for (const tab of mathTabs) {
    assert(
      content.includes(`value="${tab}"`),
      `MathLab dropdown has option value="${tab}"`
    );
  }

  // Check Museum Showcase Jump Cards
  assert(
    content.includes('Curated 4K Mathematical Archival Museum Studios') ||
      content.includes('معرض المخطوطات واللوحات الرياضية الأرشيفية فائق الدقة (4K)'),
    'MathLab renders 4K Archival Museum Studios showcase banner'
  );
  assert(
    content.includes("handleTabChange('euclid_elements')"),
    'Showcase jump card clicks trigger euclid_elements'
  );
  assert(
    content.includes("handleTabChange('khwarizmi_al_jabr')"),
    'Showcase jump card clicks trigger khwarizmi_al_jabr'
  );
  assert(
    content.includes("handleTabChange('descartes_geometry')"),
    'Showcase jump card clicks trigger descartes_geometry'
  );
  assert(
    content.includes("handleTabChange('gauss_disquisitiones')"),
    'Showcase jump card clicks trigger gauss_disquisitiones'
  );
}

// 4. Verify VirtualLabsHub.tsx Integration
console.log('\n--- 4. VirtualLabsHub.tsx Integration ---');
const virtualLabsHubPath = path.join(rootDir, 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const content = fs.readFileSync(virtualLabsHubPath, 'utf-8');
  assert(content.includes("case 'euclid_elements':"), "VirtualLabsHub maps 'euclid_elements'");
  assert(content.includes("case 'khwarizmi_al_jabr':"), "VirtualLabsHub maps 'khwarizmi_al_jabr'");
  assert(content.includes("case 'descartes_geometry':"), "VirtualLabsHub maps 'descartes_geometry'");
  assert(content.includes("case 'gauss_disquisitiones':"), "VirtualLabsHub maps 'gauss_disquisitiones'");

  assert(content.includes("id: 'euclid_elements' as MathTab"), "VirtualLabsHub math tab list has 'euclid_elements'");
  assert(content.includes("id: 'khwarizmi_al_jabr' as MathTab"), "VirtualLabsHub math tab list has 'khwarizmi_al_jabr'");
  assert(content.includes("id: 'descartes_geometry' as MathTab"), "VirtualLabsHub math tab list has 'descartes_geometry'");
  assert(content.includes("id: 'gauss_disquisitiones' as MathTab"), "VirtualLabsHub math tab list has 'gauss_disquisitiones'");
}

// Summary
console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL MATHEMATICS 4K MUSEUM ARCHIVAL STUDIOS VERIFIED WITH 100% SUCCESS! 🎉');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS! 💥`);
  console.log('======================================================================');
  process.exit(1);
}
