/**
 * EquilibriumEngine.ts
 * Rigorous chemical equilibrium, dynamic pH titration, buffer dynamics,
 * and indicator colorimetry engine for the chemistry workbench.
 */

export interface TitrationSystem {
  type: 'strong_acid_strong_base' | 'weak_acid_strong_base' | 'strong_acid_weak_base' | 'diprotic_acid_strong_base';
  analyteVolumeMl: number;       // Initial volume of analyte in flask (mL)
  analyteConcentrationM: number;  // Molarity of analyte (M)
  titrantConcentrationM: number;  // Molarity of titrant in burette (M)
  Ka1?: number;                   // Acid dissociation constant 1 (if weak)
  Ka2?: number;                   // Acid dissociation constant 2 (if diprotic)
  Kb?: number;                    // Base dissociation constant (if weak base)
  temperatureC?: number;          // Solution temperature (°C), default 25°C
}

export interface TitrationPoint {
  titrantVolumeMl: number;
  pH: number;
  bufferCapacity: number;
  majorSpecies: string;
}

export interface IndicatorInfo {
  name: string;
  nameAr: string;
  pKa: number;
  acidColorHex: string;
  baseColorHex: string;
  transitionRange: [number, number]; // [pH_min, pH_max]
}

export const COMMON_INDICATORS: Record<string, IndicatorInfo> = {
  phenolphthalein: {
    name: 'Phenolphthalein',
    nameAr: 'فينولفثالين',
    pKa: 9.3,
    acidColorHex: '#ffffff', // Colorless
    baseColorHex: '#e91e63', // Vivid magenta/pink
    transitionRange: [8.2, 10.0]
  },
  methyl_orange: {
    name: 'Methyl Orange',
    nameAr: 'ميثيل برتقالي',
    pKa: 3.7,
    acidColorHex: '#f44336', // Red
    baseColorHex: '#ffeb3b', // Yellow
    transitionRange: [3.1, 4.4]
  },
  bromothymol_blue: {
    name: 'Bromothymol Blue',
    nameAr: 'أزرق بروموثيمول',
    pKa: 7.1,
    acidColorHex: '#ffeb3b', // Yellow
    baseColorHex: '#2196f3', // Blue
    transitionRange: [6.0, 7.6]
  },
  litmus: {
    name: 'Litmus',
    nameAr: 'تباع الشمس',
    pKa: 6.5,
    acidColorHex: '#e53935', // Red
    baseColorHex: '#1e88e5', // Blue
    transitionRange: [5.0, 8.0]
  }
};

/**
 * Calculates water autoionization constant Kw adjusted for temperature
 * ln(Kw) empirical approximation near room temp
 */
export function getKwAtTemperature(tempC: number = 25): number {
  const T_kelvin = tempC + 273.15;
  // Standard Kw at 25°C = 1.008e-14
  // ΔH°_autoion = ~55.84 kJ/mol
  const R = 8.31446; // J/(mol*K)
  const deltaH = 55840; // J/mol
  const kw25 = 1.008e-14;
  const kw = kw25 * Math.exp((-deltaH / R) * (1 / T_kelvin - 1 / 298.15));
  return kw;
}

/**
 * Calculate pH for a given added titrant volume in mL
 */
export function calculateTitrationPH(system: TitrationSystem, vTitrantMl: number): { pH: number; bufferCapacity: number; majorSpecies: string } {
  const Kw = getKwAtTemperature(system.temperatureC ?? 25);
  const Va = system.analyteVolumeMl;
  const Ca = system.analyteConcentrationM;
  const Cb = system.titrantConcentrationM;
  const Vt = vTitrantMl;
  const totalVolumeMl = Math.max(0.001, Va + Vt);

  const molesAnalyteInitial = (Va / 1000) * Ca;
  const molesTitrantAdded = (Vt / 1000) * Cb;

  let pH = 7.0;
  let bufferCapacity = 0.001;
  let majorSpecies = 'H2O';

  switch (system.type) {
    case 'strong_acid_strong_base': {
      // HCl + NaOH -> NaCl + H2O
      const excessMolesH = molesAnalyteInitial - molesTitrantAdded;
      if (excessMolesH > 1e-10) {
        // Acid in excess
        const [H] = [excessMolesH / (totalVolumeMl / 1000)];
        pH = -Math.log10(Math.max(1e-14, H));
        bufferCapacity = 2.303 * H;
        majorSpecies = 'H+ (aq), Cl- (aq)';
      } else if (Math.abs(excessMolesH) <= 1e-10) {
        // Equivalence point
        pH = -0.5 * Math.log10(Kw);
        bufferCapacity = 2.303 * Math.sqrt(Kw) * 2;
        majorSpecies = 'Na+ (aq), Cl- (aq)';
      } else {
        // Base in excess
        const excessMolesOH = -excessMolesH;
        const [OH] = [excessMolesOH / (totalVolumeMl / 1000)];
        const pOH = -Math.log10(Math.max(1e-14, OH));
        const pKw = -Math.log10(Kw);
        pH = pKw - pOH;
        bufferCapacity = 2.303 * OH;
        majorSpecies = 'Na+ (aq), OH- (aq)';
      }
      break;
    }

    case 'weak_acid_strong_base': {
      // CH3COOH + NaOH -> CH3COONa + H2O
      const Ka = system.Ka1 ?? 1.8e-5;
      const pKa = -Math.log10(Ka);
      const pKw = -Math.log10(Kw);

      if (Vt <= 0.001) {
        // Initial weak acid: [H+] = sqrt(Ka * Ca)
        const [H] = [Math.sqrt(Ka * Ca)];
        pH = -Math.log10(Math.max(1e-14, H));
        bufferCapacity = 2.303 * H;
        majorSpecies = 'HA (aq)';
      } else if (molesTitrantAdded < molesAnalyteInitial * 0.999) {
        // Buffer region: Henderson-Hasselbalch
        // pH = pKa + log10([A-] / [HA])
        const molesA_minus = molesTitrantAdded;
        const molesHA_left = molesAnalyteInitial - molesTitrantAdded;
        const ratio = Math.max(1e-5, molesA_minus / molesHA_left);
        pH = pKa + Math.log10(ratio);
        // Buffer capacity β = 2.303 * Ca_total * (Ka * [H+]) / (Ka + [H+])^2
        const hConc = Math.pow(10, -pH);
        const caTotal = (molesAnalyteInitial) / (totalVolumeMl / 1000);
        bufferCapacity = 2.303 * caTotal * (Ka * hConc) / Math.pow(Ka + hConc, 2);
        majorSpecies = 'HA (aq) / A- (aq) Buffer';
      } else if (Math.abs(molesTitrantAdded - molesAnalyteInitial) <= molesAnalyteInitial * 0.002) {
        // Equivalence point: solution of weak base A- (salt hydrolysis)
        // [A-] = molesAnalyteInitial / totalVolume
        // [OH-] = sqrt((Kw / Ka) * [A-])
        const concA = molesAnalyteInitial / (totalVolumeMl / 1000);
        const Kb_eff = Kw / Ka;
        const ohConc = Math.sqrt(Kb_eff * concA);
        const pOH = -Math.log10(Math.max(1e-14, ohConc));
        pH = pKw - pOH;
        bufferCapacity = 2.303 * 2 * ohConc;
        majorSpecies = 'A- (aq) Hydrolysis';
      } else {
        // Excess strong base dominates
        const excessMolesOH = molesTitrantAdded - molesAnalyteInitial;
        const [OH] = [excessMolesOH / (totalVolumeMl / 1000)];
        const pOH = -Math.log10(Math.max(1e-14, OH));
        pH = pKw - pOH;
        bufferCapacity = 2.303 * OH;
        majorSpecies = 'OH- (aq) Excess';
      }
      break;
    }

    case 'strong_acid_weak_base': {
      // NH3 + HCl -> NH4Cl
      const Kb = system.Kb ?? 1.8e-5;
      const pKb = -Math.log10(Kb);
      const pKw = -Math.log10(Kw);
      const pKa = pKw - pKb;

      if (Vt <= 0.001) {
        // Initial weak base
        const [OH] = [Math.sqrt(Kb * Ca)];
        const pOH = -Math.log10(Math.max(1e-14, OH));
        pH = pKw - pOH;
        bufferCapacity = 2.303 * OH;
        majorSpecies = 'B (aq)';
      } else if (molesTitrantAdded < molesAnalyteInitial * 0.999) {
        // Buffer region: pH = pKa + log10([B] / [BH+])
        const molesBH = molesTitrantAdded;
        const molesB = molesAnalyteInitial - molesTitrantAdded;
        const ratio = Math.max(1e-5, molesB / molesBH);
        pH = pKa + Math.log10(ratio);
        majorSpecies = 'B (aq) / BH+ (aq) Buffer';
      } else if (Math.abs(molesTitrantAdded - molesAnalyteInitial) <= molesAnalyteInitial * 0.002) {
        // Equivalence point: acidic salt hydrolysis
        const concBH = molesAnalyteInitial / (totalVolumeMl / 1000);
        const Ka_eff = Kw / Kb;
        const hConc = Math.sqrt(Ka_eff * concBH);
        pH = -Math.log10(Math.max(1e-14, hConc));
        majorSpecies = 'BH+ (aq) Hydrolysis';
      } else {
        // Excess strong acid
        const excessH = (molesTitrantAdded - molesAnalyteInitial) / (totalVolumeMl / 1000);
        pH = -Math.log10(Math.max(1e-14, excessH));
        majorSpecies = 'H+ (aq) Excess';
      }
      break;
    }

    case 'diprotic_acid_strong_base': {
      // H2A + NaOH (e.g. Oxalic acid, Sulfurous acid)
      const Ka1 = system.Ka1 ?? 1e-2;
      const Ka2 = system.Ka2 ?? 1e-5;
      const eqVol1 = (molesAnalyteInitial / Cb) * 1000;
      const eqVol2 = eqVol1 * 2;

      if (Vt <= 0.001) {
        const [H] = [Math.sqrt(Ka1 * Ca)];
        pH = -Math.log10(Math.max(1e-14, H));
        majorSpecies = 'H2A (aq)';
      } else if (Vt < eqVol1 * 0.99) {
        // Buffer 1: H2A / HA-
        const pKa1 = -Math.log10(Ka1);
        const ratio = Vt / (eqVol1 - Vt);
        pH = pKa1 + Math.log10(Math.max(1e-4, ratio));
        majorSpecies = 'H2A / HA- Buffer';
      } else if (Math.abs(Vt - eqVol1) <= eqVol1 * 0.02) {
        // 1st equivalence point: amphiprotic HA-
        const pKa1 = -Math.log10(Ka1);
        const pKa2 = -Math.log10(Ka2);
        pH = 0.5 * (pKa1 + pKa2);
        majorSpecies = 'HA- (aq) Amphiprotic';
      } else if (Vt < eqVol2 * 0.99) {
        // Buffer 2: HA- / A2-
        const pKa2 = -Math.log10(Ka2);
        const v2 = Vt - eqVol1;
        const ratio = v2 / (eqVol1 - v2);
        pH = pKa2 + Math.log10(Math.max(1e-4, ratio));
        majorSpecies = 'HA- / A2- Buffer';
      } else if (Math.abs(Vt - eqVol2) <= eqVol2 * 0.02) {
        // 2nd equivalence point: A2- hydrolysis
        const pKw = -Math.log10(Kw);
        const concA2 = molesAnalyteInitial / (totalVolumeMl / 1000);
        const Kb_eff = Kw / Ka2;
        const ohConc = Math.sqrt(Kb_eff * concA2);
        pH = pKw - (-Math.log10(Math.max(1e-14, ohConc)));
        majorSpecies = 'A2- (aq) Hydrolysis';
      } else {
        // Excess base
        const pKw = -Math.log10(Kw);
        const excessMolesOH = (Vt - eqVol2) * (Cb / 1000);
        const ohConc = excessMolesOH / (totalVolumeMl / 1000);
        pH = pKw - (-Math.log10(Math.max(1e-14, ohConc)));
        majorSpecies = 'OH- (aq) Excess';
      }
      break;
    }
  }

  // Bounds clamping [0, 14]
  pH = Math.max(0.0, Math.min(14.0, pH));
  return {
    pH: parseFloat(pH.toFixed(3)),
    bufferCapacity: parseFloat(bufferCapacity.toFixed(4)),
    majorSpecies
  };
}

/**
 * Generate full curve dataset (0 to 200% of equivalence volume)
 */
export function generateTitrationCurve(system: TitrationSystem, pointsCount: number = 80): TitrationPoint[] {
  const molesAnalyte = (system.analyteVolumeMl / 1000) * system.analyteConcentrationM;
  const eqVolumeMl = (molesAnalyte / system.titrantConcentrationM) * 1000;
  const maxVolumeMl = Math.max(50, eqVolumeMl * 2.2);

  const curve: TitrationPoint[] = [];
  // Use higher sampling density near equivalence points
  for (let i = 0; i <= pointsCount; i++) {
    const frac = i / pointsCount;
    // Cubic non-linear distribution clustering near 0.5 (eq point)
    let vMl = frac * maxVolumeMl;
    const res = calculateTitrationPH(system, vMl);
    curve.push({
      titrantVolumeMl: parseFloat(vMl.toFixed(2)),
      pH: res.pH,
      bufferCapacity: res.bufferCapacity,
      majorSpecies: res.majorSpecies
    });
  }
  return curve;
}

/**
 * Convert hex color to RGB tuple
 */
function hexToRGB(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return [r, g, b];
}

/**
 * Interpolate indicator solution color based on current pH and Henderson-Hasselbalch fraction
 */
export function getIndicatorColor(indicatorId: string, currentPH: number, opacity: number = 0.85): string {
  const ind = COMMON_INDICATORS[indicatorId] ?? COMMON_INDICATORS['phenolphthalein'];
  // Fraction of deprotonated base form [In-]:
  // [In-] / [HIn] = 10^(pH - pKa)
  // fracBase = [In-] / ([HIn] + [In-]) = 1 / (1 + 10^(pKa - pH))
  const delta = currentPH - ind.pKa;
  const fracBase = 1 / (1 + Math.pow(10, -delta));

  const acidRGB = hexToRGB(ind.acidColorHex);
  const baseRGB = hexToRGB(ind.baseColorHex);

  const r = Math.round(acidRGB[0] + (baseRGB[0] - acidRGB[0]) * fracBase);
  const g = Math.round(acidRGB[1] + (baseRGB[1] - acidRGB[1]) * fracBase);
  const b = Math.round(acidRGB[2] + (baseRGB[2] - acidRGB[2]) * fracBase);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Van 't Hoff equilibrium constant shift with temperature:
 * ln(K2 / K1) = -(ΔH° / R) * (1/T2 - 1/T1)
 */
export function calculateVantHoffK(K1: number, T1Celsius: number, T2Celsius: number, deltaH_kJ_mol: number): number {
  const R = 8.31446e-3; // kJ / (mol * K)
  const T1 = T1Celsius + 273.15;
  const T2 = T2Celsius + 273.15;

  const lnRatio = -(deltaH_kJ_mol / R) * (1 / T2 - 1 / T1);
  return K1 * Math.exp(lnRatio);
}
