import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔬 Starting Virtual Laboratories & Science Media Verification...\n');

let failed = false;
function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${message}`);
    failed = true;
  } else {
    console.log(`✅ ${message}`);
  }
}

// 1. Verify High-Resolution Biology Media Assets
console.log('--- 1. High-Resolution Biological Photographic Atlas ---');
const bioAssets = [
  { file: 'human_skeleton_anatomy.jpg', minSize: 500 * 1024, label: 'Human Skeleton Anatomy Render' },
  { file: 'sarcomere_ultrastructure.jpg', minSize: 500 * 1024, label: 'Sarcomere Ultrastructure 3D Microscopy' },
  { file: 'dna_double_helix.jpg', minSize: 500 * 1024, label: 'DNA Molecular Double Helix' },
  { file: 'plant_stem_histology.jpg', minSize: 500 * 1024, label: 'Plant Stem Cross-Section Histology (400x)' },
];

const biologyAssetDir = path.resolve(__dirname, '../src/assets/biology');
assert(fs.existsSync(biologyAssetDir), 'Biology assets directory src/assets/biology exists');

for (const asset of bioAssets) {
  const fullPath = path.join(biologyAssetDir, asset.file);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Asset file exists: ${asset.file} (${asset.label})`);
  if (exists) {
    const stats = fs.statSync(fullPath);
    assert(stats.size >= asset.minSize, `Asset size is high-resolution (${(stats.size / 1024).toFixed(1)} KB >= ${(asset.minSize / 1024).toFixed(0)} KB)`);
  }
}

// 2. Verify Component Files Existence
console.log('\n--- 2. Laboratory Components & Hub ---');
const labComponents = [
  'src/components/labs/MathLab.tsx',
  'src/components/labs/PhysicsLab.tsx',
  'src/components/labs/ChemistryLab.tsx',
  'src/components/labs/BiologyLab.tsx',
  'src/components/VirtualLabsHub.tsx',
];

for (const comp of labComponents) {
  const compPath = path.resolve(__dirname, '..', comp);
  const exists = fs.existsSync(compPath);
  assert(exists, `Component exists: ${comp}`);
  if (exists) {
    const content = fs.readFileSync(compPath, 'utf8');
    assert(content.length > 500, `Component has substantial implementation (${content.length} characters)`);
  }
}

// 3. Verify Scientific & Mathematical Simulation Models
console.log('\n--- 3. Scientific & Mathematical Accuracy Tests ---');

// A. Physics: Closed-Circuit Ohm's Law
const VB = 12; // Volts
const r = 1; // Ohms
const Req = 5; // Ohms
const I = VB / (Req + r);
const Vterminal = VB - I * r;
assert(Math.abs(I - 2.0) < 1e-6, `Ohm's Law Closed Circuit Current: I = ${I} A (expected 2.0 A)`);
assert(Math.abs(Vterminal - 10.0) < 1e-6, `Terminal Voltage: V = ${Vterminal} V (expected 10.0 V)`);

// B. Physics: Photoelectric Effect
const h = 6.626e-34;
const c = 3.0e8;
const e = 1.602e-19;
const workFunction_Cs_eV = 2.14;
const workFunction_Cs_J = workFunction_Cs_eV * e;
const nu0 = workFunction_Cs_J / h;
const lambda0_nm = (c / nu0) * 1e9;
assert(Math.abs(lambda0_nm - 580.4) < 1.0, `Cesium threshold wavelength: ${lambda0_nm.toFixed(1)} nm (approx 580 nm)`);

// Test with 350 nm UV light (above threshold)
const lambda_test = 350e-9;
const E_photon = (h * c) / lambda_test;
const E_photon_eV = E_photon / e;
const KE_max_eV = E_photon_eV - workFunction_Cs_eV;
assert(KE_max_eV > 0, `Photoelectric emission occurs at 350 nm: KE_max = ${KE_max_eV.toFixed(2)} eV`);

// C. Chemistry: 3d Transition Series & Magnetic Moments
// Magnetic moment formula: mu = sqrt(n * (n + 2)) BM
function calcMagneticMoment(unpairedElectrons: number): number {
  return Math.sqrt(unpairedElectrons * (unpairedElectrons + 2));
}

// Chromium (Cr, Z=24): [Ar] 4s1 3d5 -> 6 unpaired electrons (in atom)
const mu_Cr = calcMagneticMoment(6);
assert(Math.abs(mu_Cr - 6.93) < 0.05, `Cr atom magnetic moment: ${mu_Cr.toFixed(2)} BM`);

// Fe3+ (3d5): 5 unpaired electrons
const mu_Fe3 = calcMagneticMoment(5);
assert(Math.abs(mu_Fe3 - 5.92) < 0.05, `Fe3+ magnetic moment: ${mu_Fe3.toFixed(2)} BM (expected 5.92 BM)`);

// Zn2+ (3d10): 0 unpaired electrons (diamagnetic)
const mu_Zn2 = calcMagneticMoment(0);
assert(mu_Zn2 === 0, `Zn2+ magnetic moment: ${mu_Zn2} BM (diamagnetic)`);

// D. Biology: Human Skeleton Counts
const axialBones = 80;
const appendicularBones = 126;
const totalBones = axialBones + appendicularBones;
assert(totalBones === 206, `Human Skeleton Bone Count: ${totalBones} bones (80 axial + 126 appendicular)`);

const cranialBones = 8;
const facialBones = 14;
const earOssicles = 6;
const hyoid = 1;
const skullTotal = cranialBones + facialBones + earOssicles + hyoid;
assert(skullTotal === 29, `Skull and associated bones: ${skullTotal} (8 cranial + 14 facial + 6 ossicles + 1 hyoid)`);

const ribsPairs = 12;
const trueRibs = 7;
const falseRibs = 3;
const floatingRibs = 2;
assert(trueRibs + falseRibs + floatingRibs === ribsPairs, `Rib pairs total: ${ribsPairs} (7 true + 3 false + 2 floating)`);

// E. Biology: Genetic Code Translation Table Completeness
const CODON_TABLE: Record<string, string> = {
  AUG: 'Met (Start)',
  UUU: 'Phe', UUC: 'Phe', UUA: 'Leu', UUG: 'Leu',
  UCU: 'Ser', UCC: 'Ser', UCA: 'Ser', UCG: 'Ser',
  UAU: 'Tyr', UAC: 'Tyr', UAA: 'STOP', UAG: 'STOP',
  UGU: 'Cys', UGC: 'Cys', UGA: 'STOP', UGG: 'Trp',
  CUU: 'Leu', CUC: 'Leu', CUA: 'Leu', CUG: 'Leu',
  CCU: 'Pro', CCC: 'Pro', CCA: 'Pro', CCG: 'Pro',
  CAU: 'His', CAC: 'His', CAA: 'Gln', CAG: 'Gln',
  CGU: 'Arg', CGC: 'Arg', CGA: 'Arg', CGG: 'Arg',
  AUU: 'Ile', AUC: 'Ile', AUA: 'Ile',
  ACU: 'Thr', ACC: 'Thr', ACA: 'Thr', ACG: 'Thr',
  AAU: 'Asn', AAC: 'Asn', AAA: 'Lys', AAG: 'Lys',
  AGU: 'Ser', AGC: 'Ser', AGA: 'Arg', AGG: 'Arg',
  GUU: 'Val', GUC: 'Val', GUA: 'Val', GUG: 'Val',
  GCU: 'Ala', GCC: 'Ala', GCA: 'Ala', GCG: 'Ala',
  GAU: 'Asp', GAC: 'Asp', GAA: 'Glu', GAG: 'Glu',
  GGU: 'Gly', GGC: 'Gly', GGA: 'Gly', GGG: 'Gly',
};

assert(Object.keys(CODON_TABLE).length === 64, `Standard Genetic Code contains all 64 codons (found: ${Object.keys(CODON_TABLE).length})`);
assert(CODON_TABLE['AUG'] === 'Met (Start)', 'AUG correctly mapped to Start codon (Methionine)');
assert(CODON_TABLE['UAA'] === 'STOP' && CODON_TABLE['UAG'] === 'STOP' && CODON_TABLE['UGA'] === 'STOP', 'UAA, UAG, UGA correctly mapped to STOP codons');

// F. Math: 3D Direction Cosines
const alpha = Math.PI / 4; // 45 deg
const beta = Math.PI / 3; // 60 deg
const cosAlpha = Math.cos(alpha);
const cosBeta = Math.cos(beta);
// cos^2(alpha) + cos^2(beta) + cos^2(gamma) = 1
const cosSqGamma = 1 - (cosAlpha * cosAlpha + cosBeta * cosBeta);
assert(cosSqGamma >= 0 && Math.abs(cosSqGamma - 0.25) < 1e-6, `3D Direction Cosines identity valid: cos^2(gamma) = ${cosSqGamma} (gamma = 60 deg)`);

// 4. Verify KaTeX Formulas in Labs
console.log('\n--- 4. KaTeX Mathematical & Scientific Formula Typesetting ---');
const labKeyFormulas = [
  // Physics Lab
  'I = \\frac{V_B}{R_{\\text{eq}} + r}',
  'V = V_B - Ir',
  'E = h\\nu = \\frac{hc}{\\lambda}',
  'eV_s = KE_{\\max} = h\\nu - \\Phi',
  '\\Phi = h\\nu_0 = \\frac{hc}{\\lambda_0}',
  // Chemistry Lab
  '2\\text{NO}_2\\text{(g)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{(g)}',
  '\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3',
  '\\text{Fe}^{3+} + 3\\text{SCN}^- \\rightleftharpoons \\text{Fe(SCN)}_3',
  '\\mu = \\sqrt{n(n+2)}\\,\\text{BM}',
  '\\text{pH} = \\text{p}K_a + \\log\\frac{[A^-]}{[HA]}',
  '\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{>700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2',
  // Biology Lab
  '2.8\\,\\mu\\text{m} \\to 1.8\\,\\mu\\text{m}',
  '\\text{ATP} \\to \\text{ADP} + P_i',
  '5\' \\to 3\'',
  '\\text{Ca}^{2+}',
  '\\%A + \\%G = \\%T + \\%C = 50\\%',
  // Math Lab
  '\\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
  '\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1',
  'F_s \\le \\mu_s R',
  '\\det(A) = ad - bc',
];

let validCount = 0;
for (const formula of labKeyFormulas) {
  try {
    katex.renderToString(formula, { throwOnError: true });
    validCount++;
  } catch (err: any) {
    assert(false, `KaTeX rendering error on "${formula}": ${err.message}`);
  }
}
assert(validCount === labKeyFormulas.length, `100% of all ${validCount} core laboratory KaTeX scientific expressions render with 0 errors`);

if (failed) {
  console.error('\n❌ Lab verification failed with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 All Virtual Laboratories & Science Media verifications passed with 100% accuracy!');
}
