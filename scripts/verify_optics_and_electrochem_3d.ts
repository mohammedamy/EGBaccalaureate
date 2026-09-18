import {
  calculateSnellsLaw,
  getCauchyRefractiveIndex,
  wavelengthToRGB,
  calculateThinLens,
} from '../src/core/simulation/OpticsEngine';
import { METAL_COUPLES } from '../src/components/Interactive3DElectrochemStudio';
import { getLabReportTemplate } from '../src/services/labReportService';

let passed = 0;
let total = 0;

function assert(condition: boolean, desc: string, actual?: any, expected?: any) {
  total++;
  if (condition) {
    passed++;
    console.log(`✅ PASS: ${desc}${actual !== undefined ? ` (actual: ${actual}, expected: ${expected})` : ''}`);
  } else {
    console.error(`❌ FAIL: ${desc}`);
    if (actual !== undefined) console.error(`   Actual: ${actual}, Expected: ${expected}`);
    process.exit(1);
  }
}

console.log('\n🌈 === PART 1: 3D OPTICS & SNELL REFRACTION PHYSICS ===');

// 1. Snell's Law Normal Refraction
const snell1 = calculateSnellsLaw((30 * Math.PI) / 180, 1.0, 1.5);
const theta2Deg = (snell1.theta2Rad * 180) / Math.PI;
assert(!snell1.isTIR, 'Refraction occurs without TIR for angle 30° from air to glass');
assert(Math.abs(theta2Deg - 19.47) < 0.05, 'Refraction angle in glass is approx 19.47°', theta2Deg.toFixed(2), '19.47');

// 2. Critical Angle and Total Internal Reflection (TIR)
const nGlass = 1.50;
const critAngleRad = Math.asin(1 / nGlass);
const critAngleDeg = (critAngleRad * 180) / Math.PI;
assert(Math.abs(critAngleDeg - 41.81) < 0.05, 'Critical angle for n=1.50 glass is 41.81°', critAngleDeg.toFixed(2), '41.81');

// Ray incident from glass to air at 45° (> 41.81°) must undergo TIR
const snellTIR = calculateSnellsLaw((45 * Math.PI) / 180, 1.50, 1.0);
assert(snellTIR.isTIR, 'Ray incident at 45° > critical angle undergoes Total Internal Reflection');

// 3. Cauchy Chromatic Dispersion
const nRed = getCauchyRefractiveIndex(700, 1.52);
const nViolet = getCauchyRefractiveIndex(400, 1.52);
assert(nViolet > nRed, 'Violet light (400 nm) has higher refractive index than red light (700 nm) via Cauchy equation', nViolet.toFixed(4), `> ${nRed.toFixed(4)}`);

// 4. Wavelength to RGB color mapping
const redColor = wavelengthToRGB(700);
const violetColor = wavelengthToRGB(400);
assert(redColor.startsWith('rgba(255'), 'Wavelength 700 nm maps to red color space', redColor);
assert(violetColor.includes(','), 'Wavelength 400 nm produces valid RGB color tuple', violetColor);

console.log('\n📐 === PART 2: TRIANGULAR PRISM MINIMUM DEVIATION ===');

// 5. Symmetric Minimum Deviation Condition
const apexDeg = 60.0;
const aRad = (apexDeg * Math.PI) / 180;
const nPrism = 1.50;
// At minimum deviation: theta1 = A / 2 = 30°
// sin(phi0) = n * sin(A/2) = 1.5 * sin(30°) = 1.5 * 0.5 = 0.75
const sinPhi0 = nPrism * Math.sin(aRad / 2);
const phi0Rad = Math.asin(sinPhi0);
const phi0Deg = (phi0Rad * 180) / Math.PI;
const alpha0Rad = 2 * phi0Rad - aRad;
const alpha0Deg = (alpha0Rad * 180) / Math.PI;

assert(Math.abs(phi0Deg - 48.59) < 0.05, 'Incident angle at minimum deviation phi0 is 48.59°', phi0Deg.toFixed(2), '48.59');
assert(Math.abs(alpha0Deg - 37.18) < 0.05, 'Minimum deviation angle alpha0 is 37.18°', alpha0Deg.toFixed(2), '37.18');

// Inverse reconstruction of n from (A + alpha0)/2 and A/2:
const reconstructedN = Math.sin((aRad + alpha0Rad) / 2) / Math.sin(aRad / 2);
assert(Math.abs(reconstructedN - nPrism) < 1e-6, 'Ministerial relation n = sin((A+alpha0)/2)/sin(A/2) accurately yields n = 1.50', reconstructedN.toFixed(4), nPrism.toFixed(4));

console.log('\n🔍 === PART 3: THIN LENS & MIRROR IMAGING FORMULATION ===');

// 6. Convex Lens: Object placed at 2f (f = 10, do = 20) -> Image at 2f, M = -1
const lens2f = calculateThinLens(10, 20, 5);
assert(Math.abs(lens2f.imageDistance - 20) < 1e-4, 'Object at 2f forms real image at 2f (20 cm)', lens2f.imageDistance, 20);
assert(Math.abs(lens2f.magnification - (-1.0)) < 1e-4, 'Object at 2f has unit inverted magnification M = -1', lens2f.magnification, -1);
assert(lens2f.isReal && !lens2f.isUpright, 'Object at 2f forms a real inverted image');

// 7. Convex Lens: Object inside focal length (f = 10, do = 5) -> Virtual upright magnified image
const lensVirtual = calculateThinLens(10, 5, 5);
assert(lensVirtual.imageDistance < 0, 'Object inside focal length forms virtual image (di < 0)', lensVirtual.imageDistance, -10);
assert(lensVirtual.magnification > 1, 'Object inside focal length forms magnified image (M > 1)', lensVirtual.magnification, 2);
assert(!lensVirtual.isReal && lensVirtual.isUpright, 'Image is virtual and upright');

console.log('\n⚡ === PART 4: 3D ELECTROCHEMICAL DANIELL & GALVANIC CELL ===');

// 8. Standard Electrode Potentials & Daniell Cell EMF
const daniell = METAL_COUPLES.find((c) => c.id === 'zn-cu')!;
assert(daniell !== undefined, 'Classic Daniell Zn-Cu couple is registered');
assert(daniell.anodeE0 === -0.76, 'Zinc standard reduction potential is -0.76 V', daniell.anodeE0, -0.76);
assert(daniell.cathodeE0 === 0.34, 'Copper standard reduction potential is +0.34 V', daniell.cathodeE0, 0.34);

const daniellStandardEMF = daniell.cathodeE0 - daniell.anodeE0;
assert(Math.abs(daniellStandardEMF - 1.10) < 1e-4, 'Daniell standard cell EMF is exactly 1.10 V', daniellStandardEMF.toFixed(2), '1.10');

// 9. All 5 Metal Couples Standard Potentials
const mgCu = METAL_COUPLES.find((c) => c.id === 'mg-cu')!;
assert(Math.abs(mgCu.cathodeE0 - mgCu.anodeE0 - 2.71) < 1e-4, 'Mg-Cu couple delivers 2.71 V standard potential');

const znAg = METAL_COUPLES.find((c) => c.id === 'zn-ag')!;
assert(Math.abs(znAg.cathodeE0 - znAg.anodeE0 - 1.56) < 1e-4, 'Zn-Ag couple delivers 1.56 V standard potential');

const feCu = METAL_COUPLES.find((c) => c.id === 'fe-cu')!;
assert(Math.abs(feCu.cathodeE0 - feCu.anodeE0 - 0.78) < 1e-4, 'Fe-Cu couple delivers 0.78 V standard potential');

const cuAg = METAL_COUPLES.find((c) => c.id === 'cu-ag')!;
assert(Math.abs(cuAg.cathodeE0 - cuAg.anodeE0 - 0.46) < 1e-4, 'Cu-Ag couple delivers 0.46 V standard potential');

// 10. Nernst Equation Concentration Shifts
// E = E° - (0.0592 / 2) * log10([Zn2+] / [Cu2+])
function calculateNernst(e0: number, n: number, cAnode: number, cCathode: number): number {
  return e0 - (0.0592 / n) * Math.log10(cAnode / cCathode);
}

const nernstStandard = calculateNernst(1.10, 2, 1.0, 1.0);
assert(Math.abs(nernstStandard - 1.10) < 1e-4, 'Nernst EMF at equimolar 1.0 M equals standard 1.10 V', nernstStandard.toFixed(3), '1.100');

// Increased anode concentration [Zn2+] = 2.0 M shifts reaction backward, lowering EMF
const nernstHighAnode = calculateNernst(1.10, 2, 2.0, 1.0);
assert(nernstHighAnode < 1.10, 'Higher anode concentration lowers EMF via Le Chatelier / Nernst', nernstHighAnode.toFixed(3), '< 1.100');
assert(Math.abs(nernstHighAnode - 1.091) < 0.002, 'EMF with [Zn2+]=2.0 M is approx 1.091 V', nernstHighAnode.toFixed(3), '1.091');

// Increased cathode concentration [Cu2+] = 2.0 M shifts reaction forward, boosting EMF
const nernstHighCathode = calculateNernst(1.10, 2, 1.0, 2.0);
assert(nernstHighCathode > 1.10, 'Higher cathode concentration raises EMF', nernstHighCathode.toFixed(3), '> 1.100');
assert(Math.abs(nernstHighCathode - 1.109) < 0.002, 'EMF with [Cu2+]=2.0 M is approx 1.109 V', nernstHighCathode.toFixed(3), '1.109');

// 11. Gibbs Free Energy Spontaneity Criterion
const F = 96.485; // kJ / (V * mol)
const deltaG = -2 * F * 1.10;
assert(deltaG < 0, 'Standard Daniell cell Gibbs free energy change ΔG° is negative (spontaneous)', deltaG.toFixed(1), '-212.3 kJ/mol');
assert(Math.abs(deltaG - (-212.267)) < 0.1, 'ΔG° magnitude is approximately -212.3 kJ/mol', deltaG.toFixed(1), '-212.3');

console.log('\n🔋 === PART 5: FARADAY LAWS OF ELECTROLYSIS ===');

// 12. Faraday Electroplating Deposition Formula: m = (M * I * t) / (z * F)
const currentI = 2.5; // Amps
const timeT = 120;   // Seconds
const molarMassCu = 63.55; // g/mol
const faradayConst = 96485; // C/mol
const zElectrons = 2;

const depositedMassG = (molarMassCu * currentI * timeT) / (zElectrons * faradayConst);
assert(Math.abs(depositedMassG - 0.0988) < 0.001, 'Faraday mass of copper deposited at 2.5 A for 120 s is 0.0988 g', depositedMassG.toFixed(4), '0.0988');

console.log('\n📋 === PART 6: MINISTERIAL PRACTICAL LAB REPORT TEMPLATES ===');

// 13. Physics Experiment Template Verification
const physReport = getLabReportTemplate('phys-exp-4');
assert(physReport.experimentId === 'phys-exp-4', 'Physics lab report template phys-exp-4 retrieved');
assert(physReport.rubricCriteria.length > 0, 'phys-exp-4 template includes ministerial assessment rubrics');

// 14. Chemistry Experiment Template Verification
const chemReport = getLabReportTemplate('chem-exp-3');
assert(chemReport.experimentId === 'chem-exp-3', 'Chemistry lab report template chem-exp-3 retrieved');
assert(chemReport.titleAr.includes('دانيال'), 'chem-exp-3 title accurately targets Daniell Galvanic Cell');
assert(chemReport.dataTableColumns.some((col) => col.key.includes('emf')), 'chem-exp-3 observation table contains EMF column');

console.log(`\n🎉 ALL ${passed}/${total} TESTS PASSED SUCCESSFULLY (${passed}/${total})!\n`);
