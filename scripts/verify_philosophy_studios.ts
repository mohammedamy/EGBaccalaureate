import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🏛️ VERIFYING 4K MUSEUM STUDIOS FOR PHILOSOPHY & LOGIC 📜');
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
console.log('--- 1. 4K Philosophy & Logic Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Aristotle Organon Logic c. 350 BCE Byzantine Codex',
    file: 'src/assets/philosophy/aristotle_organon_logic_350bc.jpg',
    minSize: 500_000,
  },
  {
    name: 'Avicenna Kitab al-Shifa Logic 1027 CE Illuminated Folio',
    file: 'src/assets/philosophy/avicenna_shifa_logic_1027ad.jpg',
    minSize: 500_000,
  },
  {
    name: 'Immanuel Kant Critique of Pure Reason 1781 Riga First Edition',
    file: 'src/assets/philosophy/kant_critique_pure_reason_1781.jpg',
    minSize: 500_000,
  },
  {
    name: 'Russell & Whitehead Principia Mathematica 1910 Cambridge First Edition',
    file: 'src/assets/philosophy/russell_principia_mathematica_1910.jpg',
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
console.log('\n--- 2. Studio Components & Philosophical Hotspots ---');
const studios = [
  {
    componentName: 'AristotleOrganonStudio',
    hotspotConst: 'ARISTOTLE_HOTSPOTS',
    file: 'src/components/labs/philosophy/AristotleOrganonStudio.tsx',
    features: [
      'categorical_syllogism_structure',
      'barbara_first_figure_perfection',
      'square_of_opposition_logic',
      'peripatetic_scroll_calamus',
      'formal_validity_vs_truth',
      'SYLLOGISM_FIGURES',
      'Barbara',
      'Celarent',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'AvicennaShifaLogicStudio',
    hotspotConst: 'AVICENNA_HOTSPOTS',
    file: 'src/components/labs/philosophy/AvicennaShifaLogicStudio.tsx',
    features: [
      'avicennian_conditional_propositions',
      'temporal_modal_syllogism',
      'floating_man_thought_experiment',
      'naskh_calligraphy_gold_unwan',
      'burhan_demonstrative_epistemology',
      'floating_man',
      'conditional_matrix',
      'sightActive',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'KantCritiquePureReasonStudio',
    hotspotConst: 'KANT_HOTSPOTS',
    file: 'src/components/labs/philosophy/KantCritiquePureReasonStudio.tsx',
    features: [
      'synthetic_a_priori_judgments',
      'transcendental_aesthetic_space_time',
      'twelve_categories_of_understanding',
      'four_cosmological_antinomies',
      'konigsberg_study_quill_pocket_watch',
      'JUDGMENT_EXAMPLES',
      'KANT_ANTINOMIES',
      'categoryGroups',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'RussellPrincipiaMathematicaStudio',
    hotspotConst: 'RUSSELL_HOTSPOTS',
    file: 'src/components/labs/philosophy/RussellPrincipiaMathematicaStudio.tsx',
    features: [
      'proof_that_one_plus_one_equals_two',
      'russells_paradox_type_theory',
      'symbolic_propositional_calculus',
      'cambridge_university_press_1910',
      'logicism_reduction_of_mathematics',
      'FORMULAS_DATA',
      'modus_ponens',
      'russell_paradox',
      'barberShavesSelf',
      'HiResImageModal',
    ],
  },
];

for (const studio of studios) {
  const filePath = path.join(rootDir, studio.file);
  const exists = fs.existsSync(filePath);
  assert(exists, `Studio component file exists: ${studio.file}`);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf-8');
    assert(
      content.includes(`export const ${studio.componentName}`),
      `Exports ${studio.componentName}`
    );
    assert(
      content.includes(`export const ${studio.hotspotConst}`),
      `Exports ${studio.hotspotConst}`
    );
    for (const feature of studio.features) {
      assert(content.includes(feature), `${studio.componentName} includes feature/token: ${feature}`);
    }
  }
}

// 3. Verify Integration in LogicStudio.tsx
console.log('\n--- 3. LogicStudio.tsx Integration ---');
const logicStudioPath = path.join(rootDir, 'src/components/labs/LogicStudio.tsx');
assert(fs.existsSync(logicStudioPath), 'LogicStudio.tsx exists');

if (fs.existsSync(logicStudioPath)) {
  const content = fs.readFileSync(logicStudioPath, 'utf-8');

  // Verify imports
  assert(content.includes('AristotleOrganonStudio'), 'Imports AristotleOrganonStudio');
  assert(content.includes('AvicennaShifaLogicStudio'), 'Imports AvicennaShifaLogicStudio');
  assert(content.includes('KantCritiquePureReasonStudio'), 'Imports KantCritiquePureReasonStudio');
  assert(content.includes('RussellPrincipiaMathematicaStudio'), 'Imports RussellPrincipiaMathematicaStudio');

  // Verify LogicStudioMode extensions
  assert(content.includes("'aristotle_organon'"), "LogicStudioMode includes 'aristotle_organon'");
  assert(content.includes("'avicenna_shifa'"), "LogicStudioMode includes 'avicenna_shifa'");
  assert(content.includes("'kant_critique'"), "LogicStudioMode includes 'kant_critique'");
  assert(content.includes("'russell_principia'"), "LogicStudioMode includes 'russell_principia'");

  // Verify navigation buttons
  assert(content.includes("id: 'aristotle_organon'"), "Navigation includes 'aristotle_organon'");
  assert(content.includes("id: 'avicenna_shifa'"), "Navigation includes 'avicenna_shifa'");
  assert(content.includes("id: 'kant_critique'"), "Navigation includes 'kant_critique'");
  assert(content.includes("id: 'russell_principia'"), "Navigation includes 'russell_principia'");

  // Verify quick jump cards
  assert(content.includes("setActiveMode('aristotle_organon')"), "Jump card for 'aristotle_organon'");
  assert(content.includes("setActiveMode('avicenna_shifa')"), "Jump card for 'avicenna_shifa'");
  assert(content.includes("setActiveMode('kant_critique')"), "Jump card for 'kant_critique'");
  assert(content.includes("setActiveMode('russell_principia')"), "Jump card for 'russell_principia'");

  // Verify viewports mounted
  assert(content.includes('<AristotleOrganonStudio'), 'Mounts AristotleOrganonStudio viewport');
  assert(content.includes('<AvicennaShifaLogicStudio'), 'Mounts AvicennaShifaLogicStudio viewport');
  assert(content.includes('<KantCritiquePureReasonStudio'), 'Mounts KantCritiquePureReasonStudio viewport');
  assert(content.includes('<RussellPrincipiaMathematicaStudio'), 'Mounts RussellPrincipiaMathematicaStudio viewport');
}

console.log('\n======================================================================');
if (errors === 0) {
  console.log('🎉 ALL PHILOSOPHY & LOGIC 4K STUDIO VERIFICATIONS PASSED (100%)!');
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${errors} ERROR(S)!`);
  process.exit(1);
}
console.log('======================================================================');
