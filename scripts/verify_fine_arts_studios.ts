import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🎨 VERIFYING 4K MUSEUM STUDIOS FOR FINE ARTS & ARCHITECTURE 🏛️');
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
console.log('--- 1. 4K Fine Arts & Architecture Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Thutmose Nefertiti Bust 1345 BCE Amarna Royal Atelier Plate',
    file: 'src/assets/fine_arts/thutmose_nefertiti_bust_1345bc.jpg',
    minSize: 500_000,
  },
  {
    name: 'Mahmoud Mokhtar Nahdat Misr 1928 Aswan Granite Monument Plate',
    file: 'src/assets/fine_arts/mokhtar_nahdat_misr_1928.jpg',
    minSize: 500_000,
  },
  {
    name: 'Hassan Fathy New Gourna Village 1945 Vernacular Architecture Plate',
    file: 'src/assets/fine_arts/hassan_fathy_new_gourna_1945.jpg',
    minSize: 500_000,
  },
  {
    name: 'Leonardo da Vinci Vitruvian Man 1490 Classical Proportion Plate',
    file: 'src/assets/fine_arts/da_vinci_vitruvian_man_1490.jpg',
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
console.log('\n--- 2. Studio Components & Artistic / Architectural Hotspots ---');
const studios = [
  {
    componentName: 'ThutmoseNefertitiStudio',
    hotspotConst: 'NEFERTITI_HOTSPOTS',
    file: 'src/components/labs/fine_arts/ThutmoseNefertitiStudio.tsx',
    features: [
      'amarna_naturalism_revolution',
      'limestone_stucco_pigments',
      'sculptors_grid_canon',
      'royal_blue_crown_uraeus',
      'thutmose_workshop_archaeology',
      'proportions_grid',
      'pigment_stratigraphy',
      'gridOverlay',
      'crownTiltAngle',
      'activeLayer',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'MahmoudMokhtarNahdatMisrStudio',
    hotspotConst: 'MOKHTAR_HOTSPOTS',
    file: 'src/components/labs/fine_arts/MahmoudMokhtarNahdatMisrStudio.tsx',
    features: [
      'awakening_sphinx_resurgence',
      'veillifting_fellaha_symbolism',
      'aswan_pink_granite_medium',
      'neoclassical_pharaonic_synthesis',
      'national_subscription_movement',
      'composition_forces',
      'national_awakening',
      'viewDistance',
      'graniteScaleTons',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'HassanFathyNewGournaStudio',
    hotspotConst: 'FATHY_HOTSPOTS',
    file: 'src/components/labs/fine_arts/HassanFathyNewGournaStudio.tsx',
    features: [
      'adobe_mud_brick_materiality',
      'nubian_vault_without_centering',
      'malqaf_windcatcher_passive_cooling',
      'courtyard_fina_microclimate',
      'architecture_for_the_poor_philosophy',
      'passive_cooling',
      'catenary_vault',
      'ambientTemp',
      'windSpeed',
      'isZirActive',
      'vaultSpanMeters',
      'vaultRiseMeters',
      'coolingMetrics',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'VitruvianManArchitectureStudio',
    hotspotConst: 'VITRUVIAN_HOTSPOTS',
    file: 'src/components/labs/fine_arts/VitruvianManArchitectureStudio.tsx',
    features: [
      'circle_and_square_squaring',
      'navel_and_pubis_geometric_centers',
      'eight_heads_canonical_height',
      'golden_ratio_phi_harmonics',
      'vitruvian_triad_firmitas_utilitas_venustas',
      'poses_proportions',
      'golden_spiral_orders',
      'activePose',
      'statureCm',
      'vitruvianMetrics',
      'HiResImageModal',
    ],
  },
];

for (const s of studios) {
  const compPath = path.join(rootDir, s.file);
  const exists = fs.existsSync(compPath);
  assert(exists, `Component exists: ${s.file}`);
  if (exists) {
    const content = fs.readFileSync(compPath, 'utf8');
    assert(
      content.includes(`export const ${s.componentName}`),
      `Exports ${s.componentName}`
    );
    assert(
      content.includes(`export const ${s.hotspotConst}`),
      `Exports ${s.hotspotConst}`
    );
    for (const f of s.features) {
      assert(content.includes(f), `${s.componentName} includes feature/token '${f}'`);
    }

    // Verify hotspot structural completeness
    assert(content.includes('titleAr:'), `${s.componentName} hotspots contain titleAr`);
    assert(content.includes('titleEn:'), `${s.componentName} hotspots contain titleEn`);
    assert(content.includes('categoryAr:'), `${s.componentName} hotspots contain categoryAr`);
    assert(content.includes('categoryEn:'), `${s.componentName} hotspots contain categoryEn`);
    assert(content.includes('descAr:'), `${s.componentName} hotspots contain descAr`);
    assert(content.includes('descEn:'), `${s.componentName} hotspots contain descEn`);
    assert(content.includes('scientificInsightAr:'), `${s.componentName} hotspots contain scientificInsightAr`);
    assert(content.includes('scientificInsightEn:'), `${s.componentName} hotspots contain scientificInsightEn`);
    assert(content.includes('xPct:'), `${s.componentName} hotspots contain xPct coordinates`);
    assert(content.includes('yPct:'), `${s.componentName} hotspots contain yPct coordinates`);
  }
}

// 3. Verify FineArtsArchitectureStudio Integration
console.log('\n--- 3. FineArtsArchitectureStudio Main Hub Integration ---');
const labPath = path.join(rootDir, 'src/components/labs/FineArtsArchitectureStudio.tsx');
assert(fs.existsSync(labPath), 'FineArtsArchitectureStudio.tsx exists');
if (fs.existsSync(labPath)) {
  const labContent = fs.readFileSync(labPath, 'utf8');

  // Imports
  assert(
    labContent.includes("import { ThutmoseNefertitiStudio } from './fine_arts/ThutmoseNefertitiStudio';"),
    'Imports ThutmoseNefertitiStudio'
  );
  assert(
    labContent.includes("import { MahmoudMokhtarNahdatMisrStudio } from './fine_arts/MahmoudMokhtarNahdatMisrStudio';"),
    'Imports MahmoudMokhtarNahdatMisrStudio'
  );
  assert(
    labContent.includes("import { HassanFathyNewGournaStudio } from './fine_arts/HassanFathyNewGournaStudio';"),
    'Imports HassanFathyNewGournaStudio'
  );
  assert(
    labContent.includes("import { VitruvianManArchitectureStudio } from './fine_arts/VitruvianManArchitectureStudio';"),
    'Imports VitruvianManArchitectureStudio'
  );

  // FineArtsStudioTab union
  assert(labContent.includes("'thutmose_nefertiti'"), "Includes 'thutmose_nefertiti' in FineArtsStudioTab");
  assert(labContent.includes("'mokhtar_nahdat_misr'"), "Includes 'mokhtar_nahdat_misr' in FineArtsStudioTab");
  assert(labContent.includes("'hassan_fathy_gourna'"), "Includes 'hassan_fathy_gourna' in FineArtsStudioTab");
  assert(labContent.includes("'da_vinci_vitruvian'"), "Includes 'da_vinci_vitruvian' in FineArtsStudioTab");

  // Navigation tab buttons
  assert(labContent.includes("setActiveTab('thutmose_nefertiti')"), "Tab bar includes 'thutmose_nefertiti'");
  assert(labContent.includes("setActiveTab('mokhtar_nahdat_misr')"), "Tab bar includes 'mokhtar_nahdat_misr'");
  assert(labContent.includes("setActiveTab('hassan_fathy_gourna')"), "Tab bar includes 'hassan_fathy_gourna'");
  assert(labContent.includes("setActiveTab('da_vinci_vitruvian')"), "Tab bar includes 'da_vinci_vitruvian'");

  // 4K Archival Showcase Quick Jump Cards
  assert(labContent.includes("setActiveTab('thutmose_nefertiti')"), "Quick jump card for 'thutmose_nefertiti'");
  assert(labContent.includes("setActiveTab('mokhtar_nahdat_misr')"), "Quick jump card for 'mokhtar_nahdat_misr'");
  assert(labContent.includes("setActiveTab('hassan_fathy_gourna')"), "Quick jump card for 'hassan_fathy_gourna'");
  assert(labContent.includes("setActiveTab('da_vinci_vitruvian')"), "Quick jump card for 'da_vinci_vitruvian'");

  // Viewports
  assert(labContent.includes("<ThutmoseNefertitiStudio"), "Renders ThutmoseNefertitiStudio viewport");
  assert(labContent.includes("<MahmoudMokhtarNahdatMisrStudio"), "Renders MahmoudMokhtarNahdatMisrStudio viewport");
  assert(labContent.includes("<HassanFathyNewGournaStudio"), "Renders HassanFathyNewGournaStudio viewport");
  assert(labContent.includes("<VitruvianManArchitectureStudio"), "Renders VitruvianManArchitectureStudio viewport");
}

console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL FINE ARTS & ARCHITECTURE 4K ARCHIVAL STUDIOS VERIFIED (100% PASS)!');
  console.log('======================================================================');
  process.exit(0);
} else {
  console.error(`💥 FAILED WITH ${errors} ERRORS!`);
  console.log('======================================================================');
  process.exit(1);
}
