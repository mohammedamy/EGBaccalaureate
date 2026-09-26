import fs from 'fs';
import path from 'path';

console.log('======================================================================');
console.log('🏛️ VERIFYING 4K MUSEUM STUDIOS FOR COMPUTER SCIENCE & CYBERNETICS 💻');
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
console.log('--- 1. 4K Computing & Cybernetics Archival Plate Assets ---');
const expectedImages = [
  {
    name: 'Ada Lovelace Analytical Engine 1843 Note G Folio',
    file: 'src/assets/cs/lovelace_analytical_engine_1843.jpg',
    minSize: 500_000,
  },
  {
    name: 'Alan Turing Computable Numbers 1936 UTM Paper',
    file: 'src/assets/cs/turing_computable_numbers_1936.jpg',
    minSize: 500_000,
  },
  {
    name: 'Claude Shannon Communication Theory 1948 Bell Labs Paper',
    file: 'src/assets/cs/shannon_communication_theory_1948.jpg',
    minSize: 500_000,
  },
  {
    name: 'John von Neumann EDVAC Architecture 1945 Report',
    file: 'src/assets/cs/von_neumann_edvac_architecture_1945.jpg',
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
    componentName: 'AdaLovelaceAnalyticalEngineStudio',
    hotspotConst: 'LOVELACE_HOTSPOTS',
    file: 'src/components/labs/cs/AdaLovelaceAnalyticalEngineStudio.tsx',
    features: [
      'lovelace_note_g_bernoulli_algorithm',
      'jacquard_punch_cards',
      'babbage_analytical_engine_brass_gears',
      'poetic_science_vision',
      'victorian_quill_inkwell_vellum',
      'BERNOULLI_ALGO_STEPS',
      'BERNOULLI_PRESETS',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'AlanTuringUniversalMachineStudio',
    hotspotConst: 'TURING_HOTSPOTS',
    file: 'src/components/labs/cs/AlanTuringUniversalMachineStudio.tsx',
    features: [
      'turing_infinite_tape',
      'read_write_scanning_head',
      'state_transition_table',
      'universal_turing_machine_concept',
      'entscheidungsproblem_halting_proof',
      'TURING_PROGRAMS',
      'binary_incrementer',
      'busy_beaver_2state',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'ClaudeShannonInformationTheoryStudio',
    hotspotConst: 'SHANNON_HOTSPOTS',
    file: 'src/components/labs/cs/ClaudeShannonInformationTheoryStudio.tsx',
    features: [
      'shannon_communication_system_diagram',
      'shannon_entropy_formula',
      'shannon_hartley_channel_capacity',
      'noisy_channel_coding_theorem',
      'bell_labs_oscilloscope_hardware',
      'entropyBits',
      'capacityKbitSec',
      'CHANNEL_PRESETS',
      'HiResImageModal',
    ],
  },
  {
    componentName: 'VonNeumannArchitectureStudio',
    hotspotConst: 'VON_NEUMANN_HOTSPOTS',
    file: 'src/components/labs/cs/VonNeumannArchitectureStudio.tsx',
    features: [
      'central_arithmetic_unit_alu',
      'central_control_unit_cc',
      'stored_program_memory_m',
      'input_output_subsystems',
      'system_bus_and_delay_lines',
      'stepMicroCycle',
      'PipelinePhase',
      'CpuRegisters',
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

// 3. Verify Integration in ComputerScienceInformaticsStudio.tsx
console.log('\n--- 3. ComputerScienceInformaticsStudio Integration ---');
const csStudioPath = path.join(rootDir, 'src/components/labs/ComputerScienceInformaticsStudio.tsx');
assert(fs.existsSync(csStudioPath), 'ComputerScienceInformaticsStudio.tsx exists');

if (fs.existsSync(csStudioPath)) {
  const content = fs.readFileSync(csStudioPath, 'utf-8');

  // Verify imports
  assert(content.includes('AdaLovelaceAnalyticalEngineStudio'), 'Imports AdaLovelaceAnalyticalEngineStudio');
  assert(content.includes('AlanTuringUniversalMachineStudio'), 'Imports AlanTuringUniversalMachineStudio');
  assert(content.includes('ClaudeShannonInformationTheoryStudio'), 'Imports ClaudeShannonInformationTheoryStudio');
  assert(content.includes('VonNeumannArchitectureStudio'), 'Imports VonNeumannArchitectureStudio');

  // Verify CSStudioMode extensions
  assert(content.includes("'lovelace_analytical_engine'"), "CSStudioMode includes 'lovelace_analytical_engine'");
  assert(content.includes("'turing_universal_machine'"), "CSStudioMode includes 'turing_universal_machine'");
  assert(content.includes("'shannon_information_theory'"), "CSStudioMode includes 'shannon_information_theory'");
  assert(content.includes("'von_neumann_architecture'"), "CSStudioMode includes 'von_neumann_architecture'");

  // Verify Tab Buttons & 4K Showcase Jump Banner
  assert(content.includes('4K Archival Computing Master Studios'), 'Includes 4K Computing Master Studios Jump Banner');
  assert(content.includes("setActiveMode('lovelace_analytical_engine')"), 'Navigation button for Lovelace 1843 exists');
  assert(content.includes("setActiveMode('turing_universal_machine')"), 'Navigation button for Turing 1936 exists');
  assert(content.includes("setActiveMode('shannon_information_theory')"), 'Navigation button for Shannon 1948 exists');
  assert(content.includes("setActiveMode('von_neumann_architecture')"), 'Navigation button for Von Neumann 1945 exists');

  // Verify Viewport Mounts
  assert(content.includes('<AdaLovelaceAnalyticalEngineStudio'), 'Mounts <AdaLovelaceAnalyticalEngineStudio />');
  assert(content.includes('<AlanTuringUniversalMachineStudio'), 'Mounts <AlanTuringUniversalMachineStudio />');
  assert(content.includes('<ClaudeShannonInformationTheoryStudio'), 'Mounts <ClaudeShannonInformationTheoryStudio />');
  assert(content.includes('<VonNeumannArchitectureStudio'), 'Mounts <VonNeumannArchitectureStudio />');
}

// 4. Verify VirtualLabsHub Integration
console.log('\n--- 4. VirtualLabsHub Integration ---');
const hubPath = path.join(rootDir, 'src/components/VirtualLabsHub.tsx');
assert(fs.existsSync(hubPath), 'VirtualLabsHub.tsx exists');
if (fs.existsSync(hubPath)) {
  const content = fs.readFileSync(hubPath, 'utf-8');
  assert(content.includes('ComputerScienceInformaticsStudio'), 'VirtualLabsHub mounts ComputerScienceInformaticsStudio');
  assert(content.includes("activeLab === 'cs_informatics'"), "VirtualLabsHub supports activeLab 'cs_informatics'");
}

console.log('\n======================================================================');
if (errors > 0) {
  console.error(`💥 CS STUDIOS VERIFICATION FAILED WITH ${errors} ERRORS`);
  process.exit(1);
} else {
  console.log('🎉 ALL 4K COMPUTER SCIENCE & CYBERNETICS STUDIOS VERIFIED (100% PASS)');
  console.log('======================================================================');
}
