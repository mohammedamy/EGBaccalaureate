import fs from 'fs';
import path from 'path';

interface CheckResult {
  name: string;
  passed: boolean;
  details: string;
}

const results: CheckResult[] = [];

function check(name: string, condition: boolean, details: string) {
  results.push({ name, passed: condition, details });
  if (condition) {
    console.log(`✅ [PASS] ${name}: ${details}`);
  } else {
    console.error(`❌ [FAIL] ${name}: ${details}`);
  }
}

const rootDir = process.cwd();

// 1. Verify 4K Assets
const assets = [
  'farabi_kitab_al_musiqa_930.jpg',
  'urmawi_kitab_al_adwar_1252.jpg',
  'helmholtz_sensations_tone_1863.jpg',
  'sayed_darwish_renaissance_1920.jpg',
];

for (const asset of assets) {
  const assetPath = path.join(rootDir, 'src/assets/music', asset);
  const exists = fs.existsSync(assetPath);
  if (!exists) {
    check(`Asset exists: ${asset}`, false, `File not found at ${assetPath}`);
    continue;
  }
  const stats = fs.statSync(assetPath);
  const sizeKb = Math.round(stats.size / 1024);
  check(
    `Asset size: ${asset}`,
    stats.size > 500 * 1024,
    `Size: ${sizeKb} KB (required > 500 KB)`
  );
}

// 2. Verify Studio Component Files
const studioFiles = [
  'FarabiKitabAlMusiqaStudio.tsx',
  'UrmawiKitabAlAdwarStudio.tsx',
  'HelmholtzAcousticResonanceStudio.tsx',
  'SayedDarwishRenaissanceStudio.tsx',
];

for (const sf of studioFiles) {
  const filePath = path.join(rootDir, 'src/components/labs/music', sf);
  const exists = fs.existsSync(filePath);
  check(`Studio file exists: ${sf}`, exists, `Path: ${filePath}`);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf-8');
    check(
      `HiResImageModal in ${sf}`,
      content.includes('HiResImageModal') && content.includes('isModalOpen'),
      'Includes 4K inspection modal'
    );
    check(
      `AudioContext in ${sf}`,
      content.includes('AudioContext') || content.includes('webkitAudioContext'),
      'Includes Web Audio interactive tone generator'
    );
    check(
      `Vector SVG in ${sf}`,
      content.includes('<svg') && content.includes('</svg>'),
      'Includes dynamic vector scientific diagram'
    );
  }
}

// 3. Verify MusicTheoryStudio.tsx Integration
const musicTheoryPath = path.join(rootDir, 'src/components/labs/MusicTheoryStudio.tsx');
const mtContent = fs.readFileSync(musicTheoryPath, 'utf-8');

check(
  'MusicTheoryStudio imports FarabiKitabAlMusiqaStudio',
  mtContent.includes("import { FarabiKitabAlMusiqaStudio } from './music/FarabiKitabAlMusiqaStudio'"),
  'Import verified'
);
check(
  'MusicTheoryStudio imports UrmawiKitabAlAdwarStudio',
  mtContent.includes("import { UrmawiKitabAlAdwarStudio } from './music/UrmawiKitabAlAdwarStudio'"),
  'Import verified'
);
check(
  'MusicTheoryStudio imports HelmholtzAcousticResonanceStudio',
  mtContent.includes("import { HelmholtzAcousticResonanceStudio } from './music/HelmholtzAcousticResonanceStudio'"),
  'Import verified'
);
check(
  'MusicTheoryStudio imports SayedDarwishRenaissanceStudio',
  mtContent.includes("import { SayedDarwishRenaissanceStudio } from './music/SayedDarwishRenaissanceStudio'"),
  'Import verified'
);

// Check Tab union types
const requiredTabs = [
  'farabi_kitab_musiqa',
  'urmawi_kitab_adwar',
  'helmholtz_acoustics',
  'darwish_renaissance',
];

for (const tab of requiredTabs) {
  check(
    `MusicStudioTab union includes ${tab}`,
    mtContent.includes(`'${tab}'`),
    `Tab '${tab}' found in MusicTheoryStudio.tsx`
  );
}

// Check Banner
check(
  'Showcase Jump Banner present',
  mtContent.includes('4K Archival Music & Acoustic Studios') ||
    mtContent.includes('استوديوهات المخطوطات والوثائق الموسيقية 4K'),
  'Banner found in MusicTheoryStudio.tsx'
);

// Check Viewport Mounting
for (const tab of requiredTabs) {
  check(
    `Viewport mounts activeTab === '${tab}'`,
    mtContent.includes(`activeTab === '${tab}'`),
    `Viewport condition for '${tab}' found`
  );
}

// Final Summary
console.log('\n--- VERIFICATION SUMMARY ---');
const total = results.length;
const passed = results.filter((r) => r.passed).length;
console.log(`Passed: ${passed}/${total} (${Math.round((passed / total) * 100)}%)`);

if (passed !== total) {
  console.error('Some checks failed!');
  process.exit(1);
} else {
  console.log('All Phase 35 Music Studios checks passed successfully! 🎉');
}
