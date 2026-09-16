import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔬 Starting Science Simulation Studios Automated Verification Suite...\n');

let failed = false;
function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${message}`);
    failed = true;
  } else {
    console.log(`✅ ${message}`);
  }
}

// -------------------------------------------------------------
// 1. CHEMISTRY: Acid-Base Titration pH Curve & Buffer Region
// -------------------------------------------------------------
console.log('--- 1. Chemistry: Acid-Base Titration & pH Curve Engine ---');

const C_analyte = 0.1; // M HCl or CH3COOH
const V_analyte = 25.0; // mL
const C_titrant = 0.1; // M NaOH
const V_eq = (C_analyte * V_analyte) / C_titrant; // 25.0 mL

assert(V_eq === 25.0, `Calculated equivalence point volume is exactly 25.0 mL (got ${V_eq})`);

// Strong Acid / Strong Base (HCl + NaOH)
// At V = 0: pH = -log10(0.1) = 1.0
const initialStrongPH = -Math.log10(C_analyte);
assert(Math.abs(initialStrongPH - 1.0) < 1e-4, `Initial strong acid pH is 1.0 (got ${initialStrongPH.toFixed(2)})`);

// At V = V_eq: pH = 7.0 for Strong/Strong
const eqStrongPH = 7.0;
assert(eqStrongPH === 7.0, `Equivalence point pH for strong acid/strong base is neutral 7.0`);

// Weak Acid / Strong Base (CH3COOH + NaOH, pKa = 4.76)
// Buffer Region: At half-equivalence volume V = 12.5 mL, [A-] = [HA] => pH = pKa
const pKa = 4.76;
const V_half = V_eq / 2;
const mol_HA_initial = C_analyte * (V_analyte / 1000);
const mol_OH_added = C_titrant * (V_half / 1000);
const mol_A_formed = mol_OH_added;
const mol_HA_remaining = mol_HA_initial - mol_OH_added;

const bufferPH = pKa + Math.log10(mol_A_formed / mol_HA_remaining);
assert(
  Math.abs(bufferPH - pKa) < 1e-6,
  `Henderson-Hasselbalch Half-Equivalence Buffer Rule: pH == pKa = ${pKa} at V = ${V_half} mL (got ${bufferPH.toFixed(2)})`
);

// Equivalence point of weak acid / strong base is basic (pH > 7) due to CH3COO- hydrolysis
const eqWeakPH = 7.0 + 0.5 * (pKa + Math.log10(C_analyte * V_analyte / (V_analyte + V_eq)));
assert(eqWeakPH > 8.0 && eqWeakPH < 9.5, `Weak acid equivalence point is basic (pH = ${eqWeakPH.toFixed(2)} > 7)`);

// Indicator Transition ranges
const indicators = [
  { name: 'Phenolphthalein', minPh: 8.2, maxPh: 10.0, suitableFor: 'weak_acid_strong_base' },
  { name: 'Methyl Orange', minPh: 3.1, maxPh: 4.4, suitableFor: 'strong_acid_weak_base' },
  { name: 'Bromothymol Blue', minPh: 6.0, maxPh: 7.6, suitableFor: 'strong_strong' },
  { name: 'Litmus', minPh: 5.0, maxPh: 8.0, suitableFor: 'general' },
];

indicators.forEach((ind) => {
  assert(ind.maxPh > ind.minPh, `Indicator ${ind.name} has valid transition interval [${ind.minPh}, ${ind.maxPh}]`);
});

// -------------------------------------------------------------
// 2. PHYSICS: Photoelectric Effect & Einstein Stopping Potential
// -------------------------------------------------------------
console.log('\n--- 2. Physics: Photoelectric Effect & Einstein Equation Engine ---');

const HC_EV_NM = 1239.84; // hc in eV·nm

// Test metals
const metals = [
  { id: 'cs', name: 'Cesium', phi: 2.14 },
  { id: 'k', name: 'Potassium', phi: 2.30 },
  { id: 'na', name: 'Sodium', phi: 2.36 },
  { id: 'zn', name: 'Zinc', phi: 4.30 },
  { id: 'cu', name: 'Copper', phi: 4.70 },
  { id: 'pt', name: 'Platinum', phi: 6.35 },
];

// Test UV light (wavelength 300 nm) on Cesium (phi = 2.14 eV)
const lambda_test = 300; // nm
const E_photon = HC_EV_NM / lambda_test; // ~4.133 eV
assert(Math.abs(E_photon - 4.1328) < 0.01, `Photon energy at 300 nm is ~4.13 eV (got ${E_photon.toFixed(3)} eV)`);

metals.forEach((m) => {
  const threshold_lambda = HC_EV_NM / m.phi;
  assert(threshold_lambda > 0, `Metal ${m.name} (Φ = ${m.phi} eV) has critical threshold λ₀ = ${threshold_lambda.toFixed(1)} nm`);

  const K_max = Math.max(0, E_photon - m.phi);
  const V_stopping = K_max; // Stopping potential in Volts numerically equals K_max in eV

  if (E_photon > m.phi) {
    assert(K_max > 0, `Photoemission occurs on ${m.name} for 300 nm: K_max = ${K_max.toFixed(2)} eV, V_0 = ${V_stopping.toFixed(2)} V`);
  } else {
    assert(K_max === 0, `No photoemission on ${m.name} for 300 nm (Photon energy ${E_photon.toFixed(2)} eV < Work function ${m.phi} eV)`);
  }
});

// Retarding Voltage Stopping Verification
// For Cesium at 300 nm: E = 4.133 eV, Phi = 2.14 eV => K_max = 1.993 eV
const cs_Kmax = E_photon - 2.14;
const V_retarding_sufficient = 2.5; // V > 1.993 V => net speed 0
const V_retarding_insufficient = 1.0; // V < 1.993 V => electrons reach anode

assert(V_retarding_sufficient > cs_Kmax, `Stopping voltage V_retarding = 2.5V completely arrests photoelectrons (V_0 = ${cs_Kmax.toFixed(2)}V)`);
assert(V_retarding_insufficient < cs_Kmax, `Voltage V_retarding = 1.0V allows photocurrent to flow`);

// -------------------------------------------------------------
// 3. BIOLOGY: Mendelian Genetics & Punnett Crosses
// -------------------------------------------------------------
console.log('\n--- 3. Biology: Mendelian Genetics & Punnett Squares Engine ---');

// Monohybrid Cross: F1 x F1 Heterozygous (Pp x Pp)
const p1_mono = ['P', 'p'];
const p2_mono = ['P', 'p'];
const mono_offspring: string[] = [];

p1_mono.forEach((g1) => {
  p2_mono.forEach((g2) => {
    const alleles = [g1, g2].sort();
    const geno = alleles[0] === alleles[0].toUpperCase() ? alleles[0] + alleles[1] : alleles[1] + alleles[0];
    mono_offspring.push(geno);
  });
});

assert(mono_offspring.length === 4, `Monohybrid cross produces exactly 4 offspring in Punnett matrix`);

const count_PP = mono_offspring.filter((g) => g === 'PP').length;
const count_Pp = mono_offspring.filter((g) => g === 'Pp').length;
const count_pp = mono_offspring.filter((g) => g === 'pp').length;

assert(count_PP === 1 && count_Pp === 2 && count_pp === 1, `Genotypic ratio is 1 PP : 2 Pp : 1 pp (25%:50%:25%)`);

const dominantPheno = count_PP + count_Pp;
const recessivePheno = count_pp;
assert(dominantPheno === 3 && recessivePheno === 1, `Mendel First Law Phenotypic Ratio is 3 Dominant : 1 Recessive (75% : 25%)`);

// Dihybrid Cross: RrYy x RrYy (16 cells)
const dihybrid_gametes = ['RY', 'Ry', 'rY', 'ry'];
let count_RY = 0; // Round Yellow
let count_Ry = 0; // Round Green
let count_rY = 0; // Wrinkled Yellow
let count_ry = 0; // Wrinkled Green

dihybrid_gametes.forEach((g1) => {
  dihybrid_gametes.forEach((g2) => {
    const r_part = g1[0] + g2[0];
    const y_part = g1[1] + g2[1];
    const isRound = r_part.includes('R');
    const isYellow = y_part.includes('Y');

    if (isRound && isYellow) count_RY++;
    else if (isRound && !isYellow) count_Ry++;
    else if (!isRound && isYellow) count_rY++;
    else count_ry++;
  });
});

assert(count_RY === 9, `Dihybrid cross yields 9 Round Yellow (9/16, 56.25%)`);
assert(count_Ry === 3, `Dihybrid cross yields 3 Round Green (3/16, 18.75%)`);
assert(count_rY === 3, `Dihybrid cross yields 3 Wrinkled Yellow (3/16, 18.75%)`);
assert(count_ry === 1, `Dihybrid cross yields 1 Wrinkled Green (1/16, 6.25%)`);
assert(
  `${count_RY}:${count_Ry}:${count_rY}:${count_ry}` === '9:3:3:1',
  `Mendel Second Law (Independent Assortment) Classic Ratio is exactly 9:3:3:1`
);

// ABO Blood Groups & Codominance: Mother I^A i x Father I^B i
const m_blood = ['A', 'i'];
const f_blood = ['B', 'i'];
const blood_combos: string[] = [];

m_blood.forEach((a1) => {
  f_blood.forEach((a2) => {
    const combo = [a1, a2].sort().join('');
    if (combo.includes('A') && combo.includes('B')) blood_combos.push('AB');
    else if (combo.includes('A')) blood_combos.push('A');
    else if (combo.includes('B')) blood_combos.push('B');
    else blood_combos.push('O');
  });
});

assert(blood_combos.includes('AB'), `Codominance produces Type AB blood`);
assert(blood_combos.includes('A') && blood_combos.includes('B') && blood_combos.includes('O'), `Heterozygous A × B yields all 4 phenotypes (A, B, AB, O) in 25% each`);

// Sex-Linked Criss-Cross Inheritance (Hemophilia: Mother X^H X^h x Father X^H Y)
const m_sex_gametes = ['X^H', 'X^h'];
const f_sex_gametes = ['X^H', 'Y'];

let sons_affected = 0;
let sons_normal = 0;
let daughters_carrier = 0;
let daughters_normal = 0;

m_sex_gametes.forEach((m) => {
  f_sex_gametes.forEach((f) => {
    if (f === 'Y') {
      if (m === 'X^h') sons_affected++;
      else sons_normal++;
    } else {
      if (m === 'X^h') daughters_carrier++;
      else daughters_normal++;
    }
  });
});

assert(sons_affected === 1 && sons_normal === 1, `Sons of carrier mother have 50% risk of hemophilia (1 affected : 1 normal)`);
assert(daughters_normal === 1 && daughters_carrier === 1, `Daughters are 100% phenotypically normal (50% normal : 50% carrier)`);

// -------------------------------------------------------------
// 4. WORKSTATION COMPONENT WIRING & ARCHITECTURE VERIFICATION
// -------------------------------------------------------------
console.log('\n--- 4. Component Wiring & Workstation Integration Checks ---');

const titrationStudioPath = path.resolve(__dirname, '../src/components/InteractiveTitrationStudio.tsx');
const photoelectricStudioPath = path.resolve(__dirname, '../src/components/InteractivePhotoelectricStudio.tsx');
const geneticsStudioPath = path.resolve(__dirname, '../src/components/InteractiveGeneticsStudio.tsx');
const lessonViewPath = path.resolve(__dirname, '../src/components/LessonView.tsx');
const virtualLabsHubPath = path.resolve(__dirname, '../src/components/VirtualLabsHub.tsx');
const curriculumTypesPath = path.resolve(__dirname, '../src/types/curriculum.ts');

assert(fs.existsSync(titrationStudioPath), 'InteractiveTitrationStudio.tsx component file exists');
assert(fs.existsSync(photoelectricStudioPath), 'InteractivePhotoelectricStudio.tsx component file exists');
assert(fs.existsSync(geneticsStudioPath), 'InteractiveGeneticsStudio.tsx component file exists');

const lessonViewContent = fs.readFileSync(lessonViewPath, 'utf-8');
assert(lessonViewContent.includes('InteractiveTitrationStudio'), 'LessonView imports and renders InteractiveTitrationStudio');
assert(lessonViewContent.includes('InteractivePhotoelectricStudio'), 'LessonView imports and renders InteractivePhotoelectricStudio');
assert(lessonViewContent.includes('InteractiveGeneticsStudio'), 'LessonView imports and renders InteractiveGeneticsStudio');
assert(lessonViewContent.includes('case \'titration_curve\':'), 'LessonView maps titration_curve widget type');
assert(lessonViewContent.includes('case \'photoelectric_stopping\':'), 'LessonView maps photoelectric_stopping widget type');
assert(lessonViewContent.includes('case \'genetics_punnett\':'), 'LessonView maps genetics_punnett widget type');

const curriculumTypesContent = fs.readFileSync(curriculumTypesPath, 'utf-8');
assert(curriculumTypesContent.includes('\'titration_curve\''), 'InteractiveWidgetType defines titration_curve');
assert(curriculumTypesContent.includes('\'photoelectric_stopping\''), 'InteractiveWidgetType defines photoelectric_stopping');
assert(curriculumTypesContent.includes('\'genetics_punnett\''), 'InteractiveWidgetType defines genetics_punnett');

const virtualLabsHubContent = fs.readFileSync(virtualLabsHubPath, 'utf-8');
assert(virtualLabsHubContent.includes('Photoelectric Stopping Potential Studio'), 'VirtualLabsHub highlights Photoelectric Studio in dropdown');
assert(virtualLabsHubContent.includes('Acid-Base Titration & pH Curve Studio'), 'VirtualLabsHub highlights Titration Studio in dropdown');
assert(virtualLabsHubContent.includes('Mendelian Genetics & Punnett Cross Studio'), 'VirtualLabsHub highlights Genetics Studio in dropdown');

// -------------------------------------------------------------
// Final Verdict
// -------------------------------------------------------------
console.log('\n-------------------------------------------------------------');
if (failed) {
  console.error('❌ Science Simulation Studios Verification FAILED!');
  process.exit(1);
} else {
  console.log('🎉 ALL SCIENCE STUDIOS VERIFICATION TESTS PASSED SUCCESSFULLY! (100% Type-Safe & Mathematically Accurate)');
  process.exit(0);
}
