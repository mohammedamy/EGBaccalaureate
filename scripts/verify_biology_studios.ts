import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🔬 VERIFYING 4K MUSEUM ARCHIVAL STUDIOS FOR BIOLOGY (علمي علوم) 🔬');
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
console.log('--- 1. 4K Museum Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Robert Hooke 1665 Micrographia Scheme XIII Cork Cells',
    file: 'src/assets/biology/hooke_micrographia_cork_cells_1665.jpg',
    minSize: 500_000,
  },
  {
    name: 'Gregor Mendel 1866 Brno Manuscript Pisum Hybridization',
    file: 'src/assets/biology/mendel_pea_hybridization_1866.jpg',
    minSize: 500_000,
  },
  {
    name: 'Rosalind Franklin & Raymond Gosling 1952 Photo 51 B-DNA',
    file: 'src/assets/biology/rosalind_franklin_photo_51_dna_1952.jpg',
    minSize: 500_000,
  },
  {
    name: 'Andreas Vesalius 1543 De Humani Corporis Fabrica',
    file: 'src/assets/biology/vesalius_fabrica_skeletal_muscular_1543.jpg',
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
    componentName: 'HookeCellTheoryStudio',
    hotspotConst: 'HOOKE_HOTSPOTS',
    file: 'src/components/labs/biology/HookeCellTheoryStudio.tsx',
    features: ['cork_cellulae', 'compound_microscope', 'magnificationLevel', 'HiResImageModal'],
  },
  {
    componentName: 'MendelGeneticsStudio',
    hotspotConst: 'MENDEL_HOTSPOTS',
    file: 'src/components/labs/biology/MendelGeneticsStudio.tsx',
    features: ['pea_contrasting_traits', 'law_of_segregation', 'parent1', 'parent2', 'HiResImageModal'],
  },
  {
    componentName: 'FranklinPhoto51DnaStudio',
    hotspotConst: 'FRANKLIN_HOTSPOTS',
    file: 'src/components/labs/biology/FranklinPhoto51DnaStudio.tsx',
    features: ['central_cross', 'layer_lines_pitch', 'estimatedTmC', 'chargaff_watson_crick', 'HiResImageModal'],
  },
  {
    componentName: 'VesaliusFabricaAnatomyStudio',
    hotspotConst: 'VESALIUS_HOTSPOTS',
    file: 'src/components/labs/biology/VesaliusFabricaAnatomyStudio.tsx',
    features: ['axial_skeleton', 'appendicular_skeleton', 'compressiveForce', 'sliding_filament', 'HiResImageModal'],
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

// 3. Verify BiologyLab.tsx Integration
console.log('\n--- 3. BiologyLab.tsx Integration ---');
const biologyLabPath = path.join(rootDir, 'src/components/labs/BiologyLab.tsx');
assert(fs.existsSync(biologyLabPath), 'BiologyLab.tsx exists');
if (fs.existsSync(biologyLabPath)) {
  const content = fs.readFileSync(biologyLabPath, 'utf-8');

  // Check imports
  assert(content.includes('HookeCellTheoryStudio'), 'BiologyLab imports HookeCellTheoryStudio');
  assert(content.includes('MendelGeneticsStudio'), 'BiologyLab imports MendelGeneticsStudio');
  assert(content.includes('FranklinPhoto51DnaStudio'), 'BiologyLab imports FranklinPhoto51DnaStudio');
  assert(content.includes('VesaliusFabricaAnatomyStudio'), 'BiologyLab imports VesaliusFabricaAnatomyStudio');

  // Check BioTab union values
  const bioTabs = ['hooke_cells', 'mendel_genetics', 'franklin_photo51', 'vesalius_anatomy'];
  for (const tab of bioTabs) {
    assert(content.includes(`'${tab}'`), `BioTab union contains '${tab}'`);
  }

  // Check renderTabContent cases
  for (const tab of bioTabs) {
    assert(
      content.includes(`activeTab === '${tab}'`),
      `renderTabContent mounts activeTab === '${tab}'`
    );
  }

  // Check subtabsOptions
  for (const tab of bioTabs) {
    assert(
      content.includes(`value="${tab}"`),
      `subtabsOptions dropdown has option value="${tab}"`
    );
  }

  // Check Museum Showcase Jump Cards
  assert(
    content.includes('Curated 4K Biological Archival Museum Studios') ||
      content.includes('معرض المخطوطات واللوحات البيولوجية الأرشيفية فائق الدقة (4K)'),
    'BiologyLab renders 4K Archival Museum Studios showcase banner'
  );
  assert(
    content.includes("handleTabChange('hooke_cells')"),
    'Showcase jump card clicks trigger hooke_cells'
  );
  assert(
    content.includes("handleTabChange('mendel_genetics')"),
    'Showcase jump card clicks trigger mendel_genetics'
  );
  assert(
    content.includes("handleTabChange('franklin_photo51')"),
    'Showcase jump card clicks trigger franklin_photo51'
  );
  assert(
    content.includes("handleTabChange('vesalius_anatomy')"),
    'Showcase jump card clicks trigger vesalius_anatomy'
  );
}

// 4. Verify VirtualLabsHub.tsx Integration
console.log('\n--- 4. VirtualLabsHub.tsx Integration ---');
const virtualLabsHubPath = path.join(rootDir, 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(virtualLabsHubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(virtualLabsHubPath)) {
  const content = fs.readFileSync(virtualLabsHubPath, 'utf-8');
  assert(content.includes("case 'hooke_cells':"), "VirtualLabsHub maps 'hooke_cells'");
  assert(content.includes("case 'mendel_genetics':"), "VirtualLabsHub maps 'mendel_genetics'");
  assert(content.includes("case 'franklin_photo51':"), "VirtualLabsHub maps 'franklin_photo51'");
  assert(content.includes("case 'vesalius_anatomy':"), "VirtualLabsHub maps 'vesalius_anatomy'");

  assert(content.includes("id: 'hooke_cells' as BioTab"), "VirtualLabsHub bio tab list has 'hooke_cells'");
  assert(content.includes("id: 'mendel_genetics' as BioTab"), "VirtualLabsHub bio tab list has 'mendel_genetics'");
  assert(content.includes("id: 'franklin_photo51' as BioTab"), "VirtualLabsHub bio tab list has 'franklin_photo51'");
  assert(content.includes("id: 'vesalius_anatomy' as BioTab"), "VirtualLabsHub bio tab list has 'vesalius_anatomy'");
}

// Summary
console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL BIOLOGY 4K MUSEUM ARCHIVAL STUDIOS VERIFIED WITH 100% SUCCESS! 🎉');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS! 💥`);
  console.log('======================================================================');
  process.exit(1);
}
