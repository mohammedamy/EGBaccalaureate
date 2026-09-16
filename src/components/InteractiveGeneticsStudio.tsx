import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  Dna,
  Info,
  AlertTriangle,
  HeartPulse,
  Eye,
  Layers,
  Award,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type GeneticsMode = 'monohybrid' | 'dihybrid' | 'blood_types' | 'sex_linked';

// --- Monohybrid Types ---
interface TraitConfig {
  id: string;
  nameEn: string;
  nameAr: string;
  domAllele: string;
  recAllele: string;
  domPhenoEn: string;
  domPhenoAr: string;
  recPhenoEn: string;
  recPhenoAr: string;
  domColor: string;
  recColor: string;
  icon: string;
}

const MONOHYBRID_TRAITS: TraitConfig[] = [
  {
    id: 'flower_color',
    nameEn: 'Flower Color (Pea Plant)',
    nameAr: 'لون أزهار نبات البازلاء',
    domAllele: 'P',
    recAllele: 'p',
    domPhenoEn: 'Purple Flower',
    domPhenoAr: 'أزهار قرمزية (سائدة)',
    recPhenoEn: 'White Flower',
    recPhenoAr: 'أزهار بيضاء (متنحية)',
    domColor: '#9333ea',
    recColor: '#e2e8f0',
    icon: '🌸',
  },
  {
    id: 'plant_height',
    nameEn: 'Stem Length (Tall vs Dwarf)',
    nameAr: 'طول الساق (طويل vs قصير)',
    domAllele: 'T',
    recAllele: 't',
    domPhenoEn: 'Tall Stem',
    domPhenoAr: 'ساق طويلة (سائدة)',
    recPhenoEn: 'Dwarf Stem',
    recPhenoAr: 'ساق قصيرة (متنحية)',
    domColor: '#16a34a',
    recColor: '#ca8a04',
    icon: '🌱',
  },
  {
    id: 'seed_shape',
    nameEn: 'Seed Shape (Round vs Wrinkled)',
    nameAr: 'شكل البذرة (أملس vs مجعد)',
    domAllele: 'R',
    recAllele: 'r',
    domPhenoEn: 'Round Seed',
    domPhenoAr: 'بذرة ملساء (سائدة)',
    recPhenoEn: 'Wrinkled Seed',
    recPhenoAr: 'بذرة مجعدة (متنحية)',
    domColor: '#0284c7',
    recColor: '#d97706',
    icon: '🟡',
  },
  {
    id: 'seed_color',
    nameEn: 'Seed Color (Yellow vs Green)',
    nameAr: 'لون البذرة (أصفر vs أخضر)',
    domAllele: 'Y',
    recAllele: 'y',
    domPhenoEn: 'Yellow Cotyledon',
    domPhenoAr: 'فلقات صفراء (سائدة)',
    recPhenoEn: 'Green Cotyledon',
    recPhenoAr: 'فلقات خضراء (متنحية)',
    domColor: '#eab308',
    recColor: '#22c55e',
    icon: '🌿',
  },
];

// --- Blood Types Configuration ---
type BloodAllele = 'A' | 'B' | 'i';
type RhAllele = '+' | '-';

interface BloodGenotypeOption {
  id: string;
  labelEn: string;
  labelAr: string;
  alleles: [BloodAllele, BloodAllele];
  phenotypeEn: string;
  phenotypeAr: string;
}

const BLOOD_GENOTYPES: BloodGenotypeOption[] = [
  { id: 'AA', labelEn: 'I^A I^A (Type A Homozygous)', labelAr: 'I^A I^A (فصيلة A نقية)', alleles: ['A', 'A'], phenotypeEn: 'Type A', phenotypeAr: 'فصيلة A' },
  { id: 'Ai', labelEn: 'I^A i (Type A Heterozygous)', labelAr: 'I^A i (فصيلة A هجينة)', alleles: ['A', 'i'], phenotypeEn: 'Type A', phenotypeAr: 'فصيلة A' },
  { id: 'BB', labelEn: 'I^B I^B (Type B Homozygous)', labelAr: 'I^B I^B (فصيلة B نقية)', alleles: ['B', 'B'], phenotypeEn: 'Type B', phenotypeAr: 'فصيلة B' },
  { id: 'Bi', labelEn: 'I^B i (Type B Heterozygous)', labelAr: 'I^B i (فصيلة B هجينة)', alleles: ['B', 'i'], phenotypeEn: 'Type B', phenotypeAr: 'فصيلة B' },
  { id: 'AB', labelEn: 'I^A I^B (Type AB Codominant)', labelAr: 'I^A I^B (فصيلة AB سيادة مشتركة)', alleles: ['A', 'B'], phenotypeEn: 'Type AB', phenotypeAr: 'فصيلة AB' },
  { id: 'ii', labelEn: 'ii (Type O Universal Donor)', labelAr: 'ii (فصيلة O معطي عام)', alleles: ['i', 'i'], phenotypeEn: 'Type O', phenotypeAr: 'فصيلة O' },
];

export const InteractiveGeneticsStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  // --- Active Mode ---
  const [activeMode, setActiveMode] = useState<GeneticsMode>('monohybrid');

  // --- Monohybrid State ---
  const [selectedTraitIdx, setSelectedTraitIdx] = useState<number>(0);
  const activeTrait = MONOHYBRID_TRAITS[selectedTraitIdx];
  const [p1GenoMono, setP1GenoMono] = useState<'dom_homo' | 'hetero' | 'rec_homo'>('hetero');
  const [p2GenoMono, setP2GenoMono] = useState<'dom_homo' | 'hetero' | 'rec_homo'>('hetero');

  // --- Dihybrid State (Shape R/r & Color Y/y) ---
  // Genotypes: 'RRYY', 'RrYy', 'rrYY', 'rryy', etc.
  const [p1Dihybrid, setP1Dihybrid] = useState<string>('RrYy');
  const [p2Dihybrid, setP2Dihybrid] = useState<string>('RrYy');

  // --- Blood Groups State ---
  const [motherBloodIdx, setMotherBloodIdx] = useState<number>(1); // I^A i
  const [fatherBloodIdx, setFatherBloodIdx] = useState<number>(3); // I^B i
  const [motherRh, setMotherRh] = useState<RhAllele>('-'); // Rh- for erythroblastosis demonstration
  const [fatherRh, setFatherRh] = useState<RhAllele>('+'); // Rh+

  // --- Sex-Linked State (Hemophilia X^H vs X^h) ---
  const [motherSexLinked, setMotherSexLinked] = useState<'homo_norm' | 'carrier' | 'affected'>('carrier');
  const [fatherSexLinked, setFatherSexLinked] = useState<'norm' | 'affected'>('norm');
  const [sexLinkedTrait, setSexLinkedTrait] = useState<'hemophilia' | 'colorblind'>('hemophilia');

  // Cell highlight state
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

  // --- Monohybrid Calculations ---
  const getAlleles = (type: 'dom_homo' | 'hetero' | 'rec_homo', dom: string, rec: string): [string, string] => {
    if (type === 'dom_homo') return [dom, dom];
    if (type === 'hetero') return [dom, rec];
    return [rec, rec];
  };

  const monohybridGametes1 = useMemo(() => {
    return getAlleles(p1GenoMono, activeTrait.domAllele, activeTrait.recAllele);
  }, [p1GenoMono, activeTrait]);

  const monohybridGametes2 = useMemo(() => {
    return getAlleles(p2GenoMono, activeTrait.domAllele, activeTrait.recAllele);
  }, [p2GenoMono, activeTrait]);

  const monohybridGrid = useMemo(() => {
    const grid: { genotype: string; isDominant: boolean; rowG: string; colG: string }[][] = [];
    for (let r = 0; r < 2; r++) {
      const row: { genotype: string; isDominant: boolean; rowG: string; colG: string }[] = [];
      for (let c = 0; c < 2; c++) {
        const g1 = monohybridGametes1[r];
        const g2 = monohybridGametes2[c];
        // Sort uppercase first
        const alleles = [g1, g2].sort();
        const genotype = alleles[0] === alleles[0].toUpperCase() ? alleles[0] + alleles[1] : alleles[1] + alleles[0];
        const isDominant = genotype.includes(activeTrait.domAllele);
        row.push({ genotype, isDominant, rowG: g1, colG: g2 });
      }
      grid.push(row);
    }
    return grid;
  }, [monohybridGametes1, monohybridGametes2, activeTrait]);

  const monohybridStats = useMemo(() => {
    const total = 4;
    let dominantCount = 0;
    let recessiveCount = 0;
    const genoCounts: Record<string, number> = {};

    monohybridGrid.forEach(row => {
      row.forEach(cell => {
        if (cell.isDominant) dominantCount++;
        else recessiveCount++;
        genoCounts[cell.genotype] = (genoCounts[cell.genotype] || 0) + 1;
      });
    });

    return {
      dominantCount,
      recessiveCount,
      dominantPct: (dominantCount / total) * 100,
      recessivePct: (recessiveCount / total) * 100,
      genoCounts,
    };
  }, [monohybridGrid]);

  // --- Dihybrid Calculations ---
  // Gametes: combinations of 1st gene and 2nd gene
  const getDihybridGametes = (geno: string): string[] => {
    const r1 = geno[0];
    const r2 = geno[1];
    const y1 = geno[2];
    const y2 = geno[3];
    return [r1 + y1, r1 + y2, r2 + y1, r2 + y2];
  };

  const dihybridGametes1 = useMemo(() => getDihybridGametes(p1Dihybrid), [p1Dihybrid]);
  const dihybridGametes2 = useMemo(() => getDihybridGametes(p2Dihybrid), [p2Dihybrid]);

  const dihybridGrid = useMemo(() => {
    const grid: {
      genotype: string;
      phenotypeKey: 'RY' | 'Ry' | 'rY' | 'ry';
      phenoNameEn: string;
      phenoNameAr: string;
      color: string;
      rowG: string;
      colG: string;
    }[][] = [];

    for (let r = 0; r < 4; r++) {
      const row: any[] = [];
      for (let c = 0; c < 4; c++) {
        const g1 = dihybridGametes1[r];
        const g2 = dihybridGametes2[c];
        const rAlleles = [g1[0], g2[0]].sort().reverse().join('');
        const yAlleles = [g1[1], g2[1]].sort().reverse().join('');
        const fullGeno = rAlleles + yAlleles;

        const isRound = fullGeno.includes('R');
        const isYellow = fullGeno.includes('Y');

        let phenotypeKey: 'RY' | 'Ry' | 'rY' | 'ry';
        let phenoNameEn: string;
        let phenoNameAr: string;
        let color: string;

        if (isRound && isYellow) {
          phenotypeKey = 'RY';
          phenoNameEn = 'Round Yellow';
          phenoNameAr = 'أملس أصفر';
          color = '#eab308'; // Yellow
        } else if (isRound && !isYellow) {
          phenotypeKey = 'Ry';
          phenoNameEn = 'Round Green';
          phenoNameAr = 'أملس أخضر';
          color = '#22c55e'; // Green
        } else if (!isRound && isYellow) {
          phenotypeKey = 'rY';
          phenoNameEn = 'Wrinkled Yellow';
          phenoNameAr = 'مجعد أصفر';
          color = '#f97316'; // Amber/Orange
        } else {
          phenotypeKey = 'ry';
          phenoNameEn = 'Wrinkled Green';
          phenoNameAr = 'مجعد أخضر';
          color = '#10b981'; // Emerald
        }

        row.push({
          genotype: fullGeno,
          phenotypeKey,
          phenoNameEn,
          phenoNameAr,
          color,
          rowG: g1,
          colG: g2,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [dihybridGametes1, dihybridGametes2]);

  const dihybridStats = useMemo(() => {
    const counts = { RY: 0, Ry: 0, rY: 0, ry: 0 };
    dihybridGrid.forEach(row => {
      row.forEach(cell => {
        counts[cell.phenotypeKey]++;
      });
    });
    return {
      counts,
      ratios: `${counts.RY} : ${counts.Ry} : ${counts.rY} : ${counts.ry}`,
    };
  }, [dihybridGrid]);

  // --- Blood Groups Calculations ---
  const motherBlood = BLOOD_GENOTYPES[motherBloodIdx];
  const fatherBlood = BLOOD_GENOTYPES[fatherBloodIdx];

  const bloodGrid = useMemo(() => {
    const grid: {
      genotypeDisplay: string;
      bloodType: string;
      labelAr: string;
      antigens: string;
      antibodies: string;
      rowG: string;
      colG: string;
    }[][] = [];

    const mG = motherBlood.alleles;
    const fG = fatherBlood.alleles;

    for (let r = 0; r < 2; r++) {
      const row: any[] = [];
      for (let c = 0; c < 2; c++) {
        const a1 = mG[r];
        const a2 = fG[c];
        const combo = [a1, a2].sort().join('');

        let bloodType = 'O';
        let labelAr = 'فصيلة O';
        let antigens = 'None (لا توجد مولدات التصاق)';
        let antibodies = 'Anti-A + Anti-B';
        let genotypeDisplay = 'ii';

        if (combo.includes('A') && combo.includes('B')) {
          bloodType = 'AB';
          labelAr = 'فصيلة AB';
          antigens = 'A and B (مولدات A و B)';
          antibodies = 'None (لا توجد أجسام مضادة)';
          genotypeDisplay = 'I^A I^B';
        } else if (combo.includes('A')) {
          bloodType = 'A';
          labelAr = 'فصيلة A';
          antigens = 'Antigen A (مولد A)';
          antibodies = 'Anti-B';
          genotypeDisplay = combo === 'AA' ? 'I^A I^A' : 'I^A i';
        } else if (combo.includes('B')) {
          bloodType = 'B';
          labelAr = 'فصيلة B';
          antigens = 'Antigen B (مولد B)';
          antibodies = 'Anti-A';
          genotypeDisplay = combo === 'BB' ? 'I^B I^B' : 'I^B i';
        }

        row.push({
          genotypeDisplay,
          bloodType,
          labelAr,
          antigens,
          antibodies,
          rowG: a1 === 'i' ? 'i' : `I^${a1}`,
          colG: a2 === 'i' ? 'i' : `I^${a2}`,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [motherBlood, fatherBlood]);

  // Rh factor erythroblastosis fetalis alert
  const hasRhIncompatibility = motherRh === '-' && fatherRh === '+';

  // --- Sex-Linked Calculations ---
  const sexLinkedGrid = useMemo(() => {
    // Mother gametes
    const mGametes =
      motherSexLinked === 'homo_norm'
        ? ['X^H', 'X^H']
        : motherSexLinked === 'carrier'
        ? ['X^H', 'X^h']
        : ['X^h', 'X^h'];

    // Father gametes
    const fGametes = fatherSexLinked === 'norm' ? ['X^H', 'Y'] : ['X^h', 'Y'];

    const grid: {
      genotype: string;
      sex: 'female' | 'male';
      status: 'normal' | 'carrier' | 'affected';
      descEn: string;
      descAr: string;
      rowG: string;
      colG: string;
    }[][] = [];

    for (let r = 0; r < 2; r++) {
      const row: any[] = [];
      for (let c = 0; c < 2; c++) {
        const m = mGametes[r];
        const f = fGametes[c];

        let genotype: string;
        let sex: 'female' | 'male';
        let status: 'normal' | 'carrier' | 'affected';
        let descEn = '';
        let descAr = '';

        if (f === 'Y') {
          sex = 'male';
          genotype = `${m} Y`;
          if (m === 'X^h') {
            status = 'affected';
            descEn = 'Affected Son';
            descAr = 'ذكر مصاب (حامل للمرض)';
          } else {
            status = 'normal';
            descEn = 'Normal Son';
            descAr = 'ذكر سليم';
          }
        } else {
          sex = 'female';
          const alleles = [m, f].sort();
          genotype = `${alleles[0]} ${alleles[1]}`;
          if (m === 'X^h' && f === 'X^h') {
            status = 'affected';
            descEn = 'Affected Daughter';
            descAr = 'أنثى مصابة (نادرة)';
          } else if (m === 'X^h' || f === 'X^h') {
            status = 'carrier';
            descEn = 'Carrier Daughter (Healthy)';
            descAr = 'أنثى حاملة للجين (مظهر سليم)';
          } else {
            status = 'normal';
            descEn = 'Normal Daughter';
            descAr = 'أنثى سليمة تماماً';
          }
        }

        row.push({
          genotype,
          sex,
          status,
          descEn,
          descAr,
          rowG: m,
          colG: f,
        });
      }
      grid.push(row);
    }
    return grid;
  }, [motherSexLinked, fatherSexLinked]);

  return (
    <div
      className={`w-full flex flex-col transition-colors duration-200 ${
        isFullscreen
          ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-950 text-slate-100'
          : 'space-y-4 text-slate-200'
      }`}
    >
      {/* Top Bar: Mode Selector & Reset */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl border backdrop-blur-md shadow-sm shrink-0 ${
          isLight
            ? 'bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/50'
            : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-slate-950/50'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-600 text-white shadow-md shrink-0">
            <Dna className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-black tracking-tight flex items-center gap-2 truncate">
              <span>{isAr ? 'استوديو الوراثة ومربعات بانيت المندلية' : 'Genetics & Punnett Cross Studio'}</span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-300 border border-rose-800/60 uppercase">
                Mendel & Heredity
              </span>
            </h2>
            <p className="text-[11px] text-slate-400 truncate">
              {isAr
                ? 'قوانين مندل (الانعزال والتوزيع الحر)، فصائل الدم وعامل ريسوس، وتوارث كروموسوم X'
                : 'Mendel Segregation & Assortment, ABO Blood & Rh, and Sex-Linked X-Chromosome'}
            </p>
          </div>
        </div>

        {/* Mode switcher tabs */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs">
          {[
            { id: 'monohybrid' as GeneticsMode, labelEn: 'Monohybrid (2×2)', labelAr: 'قانون مندل 1 (2×2)' },
            { id: 'dihybrid' as GeneticsMode, labelEn: 'Dihybrid (4×4)', labelAr: 'قانون مندل 2 (4×4)' },
            { id: 'blood_types' as GeneticsMode, labelEn: 'ABO & Rh Factor', labelAr: 'فصائل الدم و Rh' },
            { id: 'sex_linked' as GeneticsMode, labelEn: 'Sex-Linked (X)', labelAr: 'المرتبطة بالجنس (X)' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setActiveMode(mode.id);
                setHoveredCell(null);
              }}
              className={`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeMode === mode.id
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {isAr ? mode.labelAr : mode.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Body: Controls on Left, Live Matrix in Center/Right */}
      <div
        className={`flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3.5 ${
          isFullscreen ? 'overflow-hidden' : ''
        }`}
      >
        {/* Left Config Panel */}
        <div
          className={`lg:col-span-4 flex flex-col gap-3 p-3.5 rounded-2xl border shadow-sm ${
            isFullscreen ? 'overflow-y-auto' : ''
          } ${
            isLight
              ? 'bg-white border-slate-200 text-slate-800'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}
        >
          {/* Mode 1: Monohybrid Controls */}
          {activeMode === 'monohybrid' && (
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  {isAr ? 'الصفة الوراثية قيد الدراسة:' : 'Genetic Trait:'}
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {MONOHYBRID_TRAITS.map((trait, idx) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraitIdx(idx)}
                      className={`p-2 rounded-xl text-left rtl:text-right border transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                        selectedTraitIdx === idx
                          ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                          : 'border-slate-800 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <span className="text-base">{trait.icon}</span>
                      <span className="truncate">{isAr ? trait.nameAr.split('(')[0] : trait.nameEn.split('(')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent 1 Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                    <span>👩</span> {isAr ? 'التركيب الجيني للأم / الفرد 1 (P1):' : 'Parent 1 Genotype (P1):'}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {p1GenoMono === 'dom_homo' ? `${activeTrait.domAllele}${activeTrait.domAllele}` : p1GenoMono === 'hetero' ? `${activeTrait.domAllele}${activeTrait.recAllele}` : `${activeTrait.recAllele}${activeTrait.recAllele}`}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'dom_homo' as const, label: `${activeTrait.domAllele}${activeTrait.domAllele} (نقي)`, en: `${activeTrait.domAllele}${activeTrait.domAllele} Homozygous` },
                    { id: 'hetero' as const, label: `${activeTrait.domAllele}${activeTrait.recAllele} (هجين)`, en: `${activeTrait.domAllele}${activeTrait.recAllele} Hetero` },
                    { id: 'rec_homo' as const, label: `${activeTrait.recAllele}${activeTrait.recAllele} (متنحٍ)`, en: `${activeTrait.recAllele}${activeTrait.recAllele} Recessive` },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setP1GenoMono(btn.id)}
                      className={`py-1.5 px-1 text-center rounded-lg font-bold border transition-all cursor-pointer ${
                        p1GenoMono === btn.id
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent 2 Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>👨</span> {isAr ? 'التركيب الجيني للأب / الفرد 2 (P2):' : 'Parent 2 Genotype (P2):'}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {p2GenoMono === 'dom_homo' ? `${activeTrait.domAllele}${activeTrait.domAllele}` : p2GenoMono === 'hetero' ? `${activeTrait.domAllele}${activeTrait.recAllele}` : `${activeTrait.recAllele}${activeTrait.recAllele}`}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'dom_homo' as const, label: `${activeTrait.domAllele}${activeTrait.domAllele} (نقي)`, en: `${activeTrait.domAllele}${activeTrait.domAllele} Homozygous` },
                    { id: 'hetero' as const, label: `${activeTrait.domAllele}${activeTrait.recAllele} (هجين)`, en: `${activeTrait.domAllele}${activeTrait.recAllele} Hetero` },
                    { id: 'rec_homo' as const, label: `${activeTrait.recAllele}${activeTrait.recAllele} (متنحٍ)`, en: `${activeTrait.recAllele}${activeTrait.recAllele} Recessive` },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setP2GenoMono(btn.id)}
                      className={`py-1.5 px-1 text-center rounded-lg font-bold border transition-all cursor-pointer ${
                        p2GenoMono === btn.id
                          ? 'bg-cyan-600 text-white border-cyan-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Standard Thanawya Amma Presets */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                  {isAr ? 'تجارب مندل النموذجية في المنهج:' : 'Curriculum Classic Crosses:'}
                </span>
                <div className="flex flex-col gap-1 text-xs">
                  <button
                    onClick={() => {
                      setP1GenoMono('dom_homo');
                      setP2GenoMono('rec_homo');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'الجيل الأول P1: سائد نقي × متنحٍ (100% هجين)' : 'P1 Cross: Pure Dominant × Recessive (F1 100%)'}</span>
                    <span className="font-mono text-[10px] text-rose-400 font-bold">{activeTrait.domAllele}{activeTrait.domAllele} × {activeTrait.recAllele}{activeTrait.recAllele}</span>
                  </button>
                  <button
                    onClick={() => {
                      setP1GenoMono('hetero');
                      setP2GenoMono('hetero');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'تزاوج الجيل الأول F1 × F1: هجين × هجين (نسبة 3:1)' : 'F1 Cross: Hetero × Hetero (Ratio 3:1)'}</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">{activeTrait.domAllele}{activeTrait.recAllele} × {activeTrait.domAllele}{activeTrait.recAllele}</span>
                  </button>
                  <button
                    onClick={() => {
                      setP1GenoMono('hetero');
                      setP2GenoMono('rec_homo');
                    }}
                    className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? 'التزاوج الاختباري (Test Cross): هجين × متنحٍ (1:1)' : 'Test Cross: Heterozygous × Recessive (1:1)'}</span>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">{activeTrait.domAllele}{activeTrait.recAllele} × {activeTrait.recAllele}{activeTrait.recAllele}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Dihybrid Controls */}
          {activeMode === 'dihybrid' && (
            <div className="space-y-3.5">
              <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200">
                <span className="font-bold block mb-1">
                  {isAr ? 'صفتان مستقلتان (قانون التوزيع الحر):' : 'Two Independent Traits (Mendel 2nd Law):'}
                </span>
                <span>
                  {isAr
                    ? '1. شكل البذرة: R (أملس سائد) vs r (مجعد متنحٍ) | 2. لون البذرة: Y (أصفر سائد) vs y (أخضر متنحٍ)'
                    : '1. Seed Shape: R (Round) vs r (Wrinkled) | 2. Seed Color: Y (Yellow) vs y (Green)'}
                </span>
              </div>

              {/* Parent 1 Dihybrid */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                  <span>{isAr ? 'التركيب الجيني للأم (P1):' : 'Mother Genotype (P1):'}</span>
                  <span className="font-mono text-xs font-bold text-indigo-400">{p1Dihybrid}</span>
                </label>
                <select
                  value={p1Dihybrid}
                  onChange={(e) => setP1Dihybrid(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="RrYy">RrYy (Heterozygous both traits - هجين للصفتين)</option>
                  <option value="RRYY">RRYY (Homozygous Dominant - سائد نقي للصفتين)</option>
                  <option value="rryy">rryy (Homozygous Recessive - متنحٍ نقي للصفتين)</option>
                  <option value="RRYy">RRYy (Round Homozygous, Yellow Heterozygous)</option>
                  <option value="RrYY">RrYY (Round Heterozygous, Yellow Homozygous)</option>
                  <option value="rrYY">rrYY (Wrinkled Green)</option>
                </select>
              </div>

              {/* Parent 2 Dihybrid */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 flex items-center justify-between">
                  <span>{isAr ? 'التركيب الجيني للأب (P2):' : 'Father Genotype (P2):'}</span>
                  <span className="font-mono text-xs font-bold text-cyan-400">{p2Dihybrid}</span>
                </label>
                <select
                  value={p2Dihybrid}
                  onChange={(e) => setP2Dihybrid(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="RrYy">RrYy (Heterozygous both traits - هجين للصفتين)</option>
                  <option value="rryy">rryy (Homozygous Recessive - متنحٍ نقي للصفتين)</option>
                  <option value="RRYY">RRYY (Homozygous Dominant - سائد نقي للصفتين)</option>
                  <option value="Rryy">Rryy (Round Heterozygous, Green Recessive)</option>
                  <option value="rrYy">rrYy (Wrinkled Recessive, Yellow Hetero)</option>
                </select>
              </div>

              {/* Dihybrid Presets */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 block">
                  {isAr ? 'نماذج الامتحانات الرسمية:' : 'Standard Exam Scenarios:'}
                </span>
                <button
                  onClick={() => {
                    setP1Dihybrid('RrYy');
                    setP2Dihybrid('RrYy');
                  }}
                  className="w-full p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer text-xs flex justify-between items-center"
                >
                  <span>{isAr ? 'F1 × F1 هجين ثنائي (النسبة الشهيرة 9:3:3:1)' : 'Classic F1 × F1 Cross (Ratio 9:3:3:1)'}</span>
                  <span className="font-mono text-[10px] text-amber-400 font-bold">RrYy × RrYy</span>
                </button>
                <button
                  onClick={() => {
                    setP1Dihybrid('RrYy');
                    setP2Dihybrid('rryy');
                  }}
                  className="w-full p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 text-slate-300 text-left rtl:text-right cursor-pointer text-xs flex justify-between items-center"
                >
                  <span>{isAr ? 'التزاوج الاختباري الثنائي (النسبة 1:1:1:1)' : 'Dihybrid Test Cross (Ratio 1:1:1:1)'}</span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold">RrYy × rryy</span>
                </button>
              </div>
            </div>
          )}

          {/* Mode 3: Blood Types & Rh Factor Controls */}
          {activeMode === 'blood_types' && (
            <div className="space-y-3.5">
              {/* Mother Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-rose-300 flex items-center justify-between">
                  <span>👩 {isAr ? 'فصيلة دم الأم و Rh:' : 'Mother Blood Group & Rh:'}</span>
                  <span className="font-mono font-bold text-rose-400">{motherBlood.phenotypeEn} (Rh{motherRh})</span>
                </span>
                <select
                  value={motherBloodIdx}
                  onChange={(e) => setMotherBloodIdx(Number(e.target.value))}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-pointer"
                >
                  {BLOOD_GENOTYPES.map((g, idx) => (
                    <option key={g.id} value={idx}>
                      {isAr ? g.labelAr : g.labelEn}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="text-slate-400 text-[11px]">{isAr ? 'عامل ريسوس (Rh):' : 'Rh Factor:'}</span>
                  <button
                    onClick={() => setMotherRh('+')}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      motherRh === '+' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh+ (موجب)
                  </button>
                  <button
                    onClick={() => setMotherRh('-')}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      motherRh === '-' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh- (سالب)
                  </button>
                </div>
              </div>

              {/* Father Genotype */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-blue-300 flex items-center justify-between">
                  <span>👨 {isAr ? 'فصيلة دم الأب و Rh:' : 'Father Blood Group & Rh:'}</span>
                  <span className="font-mono font-bold text-blue-400">{fatherBlood.phenotypeEn} (Rh{fatherRh})</span>
                </span>
                <select
                  value={fatherBloodIdx}
                  onChange={(e) => setFatherBloodIdx(Number(e.target.value))}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 cursor-pointer"
                >
                  {BLOOD_GENOTYPES.map((g, idx) => (
                    <option key={g.id} value={idx}>
                      {isAr ? g.labelAr : g.labelEn}
                    </option>
                  ))}
                </select>
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="text-slate-400 text-[11px]">{isAr ? 'عامل ريسوس (Rh):' : 'Rh Factor:'}</span>
                  <button
                    onClick={() => setFatherRh('+')}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      fatherRh === '+' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh+ (موجب)
                  </button>
                  <button
                    onClick={() => setFatherRh('-')}
                    className={`px-2.5 py-1 rounded-md font-bold text-xs cursor-pointer ${
                      fatherRh === '-' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Rh- (سالب)
                  </button>
                </div>
              </div>

              {/* Erythroblastosis Fetalis Warning Banner */}
              {hasRhIncompatibility && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-xs text-red-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-black text-red-300">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{isAr ? 'حالة عدم توافق عامل ريسوس (خطر على الجنين الثاني):' : 'Rh Incompatibility Risk (Erythroblastosis):'}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-red-300/90">
                    {isAr
                      ? 'الأم Rh- والأب Rh+ يؤدي لتكوين أجسام مضادة (Anti-Rh) في دم الأم أثناء ولادة الجنين الأول. إذا لم تُحقن بمصل مضاد (Anti-D) خلال 72 ساعة، تتعرض الأجنة القادمة لتحلل كرات الدم الحمراء.'
                      : 'Mother is Rh- and Father is Rh+. Maternal immune system forms Anti-Rh antibodies during first delivery. Without Anti-D injection within 72h, subsequent Rh+ fetuses face hemolytic disease.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mode 4: Sex-Linked Inheritance Controls */}
          {activeMode === 'sex_linked' && (
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">
                  {isAr ? 'الصفة المرتبطة بكروموسوم الجنس X:' : 'Sex-Linked Trait (X-linked):'}
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <button
                    onClick={() => setSexLinkedTrait('hemophilia')}
                    className={`p-2 rounded-xl border text-left rtl:text-right font-bold transition-all cursor-pointer ${
                      sexLinkedTrait === 'hemophilia'
                        ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                        : 'border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    🩸 {isAr ? 'الهيموفيليا (سيولة الدم)' : 'Hemophilia'}
                  </button>
                  <button
                    onClick={() => setSexLinkedTrait('colorblind')}
                    className={`p-2 rounded-xl border text-left rtl:text-right font-bold transition-all cursor-pointer ${
                      sexLinkedTrait === 'colorblind'
                        ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                        : 'border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    👁️ {isAr ? 'عمى الألوان (Color Blind)' : 'Color Blindness'}
                  </button>
                </div>
              </div>

              {/* Mother Sex-Linked Status */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-purple-300 block">
                  👩 {isAr ? 'التركيب الجيني للأم (كروموسومان XX):' : 'Mother Genotype (XX):'}
                </span>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  {[
                    { id: 'homo_norm' as const, label: 'X^H X^H (سليمة)', en: 'X^H X^H Normal' },
                    { id: 'carrier' as const, label: 'X^H X^h (حاملة للمرض)', en: 'X^H X^h Carrier' },
                    { id: 'affected' as const, label: 'X^h X^h (مصابة)', en: 'X^h X^h Affected' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setMotherSexLinked(btn.id)}
                      className={`p-1.5 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                        motherSexLinked === btn.id
                          ? 'bg-purple-600 text-white border-purple-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Father Sex-Linked Status */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-cyan-300 block">
                  👨 {isAr ? 'التركيب الجيني للأب (كروموسومان XY):' : 'Father Genotype (XY):'}
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    { id: 'norm' as const, label: 'X^H Y (ذكر سليم)', en: 'X^H Y Normal' },
                    { id: 'affected' as const, label: 'X^h Y (ذكر مصاب)', en: 'X^h Y Affected' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setFatherSexLinked(btn.id)}
                      className={`p-2 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                        fatherSexLinked === btn.id
                          ? 'bg-cyan-600 text-white border-cyan-500 shadow-xs'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isAr ? btn.label : btn.en}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <span className="font-bold text-slate-300 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isAr ? 'قاعدة ثانوية عامة هامة:' : 'Key Examination Rule:'}</span>
                </span>
                <p className="text-[11px] leading-relaxed">
                  {isAr
                    ? 'الأب المصاب يورث جين المرض (X) لجميع بناته الإناث ولا يورثه لأي من أبنائه الذكور (لأنه يعطيهم كروموسوم Y).'
                    : 'An affected father transmits the mutant X allele to all his daughters, and never to his sons (who receive Y).'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Center & Right: Live Punnett Square Matrix & Real-Time Stats */}
        <div className="lg:col-span-8 flex flex-col gap-3 min-h-0">
          {/* Punnett Matrix Container */}
          <div
            className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center justify-center shrink-0 ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            {/* Gametes Legend & Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs font-bold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-rose-400" />
                <span>{isAr ? 'مصفوفة مربع بانيت وانعزال الأمشاج (Gametes):' : 'Punnett Square Matrix & Gamete Fusion:'}</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                {isAr ? 'مرر الفأرة فوق أي خلية لرؤية مصدر الأمشاج' : 'Hover any cell to highlight gamete origins'}
              </span>
            </div>

            {/* Matrix View according to mode */}
            {activeMode === 'monohybrid' && (
              <div className="relative inline-block my-2">
                {/* 2x2 Punnett Grid */}
                <div className="grid grid-cols-[auto_120px_120px] gap-2">
                  {/* Top-left corner blank */}
                  <div className="w-16 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {/* Column Headers (Father Gametes) */}
                  {monohybridGametes2.map((g, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-12 rounded-xl flex flex-col items-center justify-center border font-mono font-black text-base transition-all ${
                        hoveredCell?.col === cIdx
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-105 shadow-md'
                          : 'bg-slate-950 border-slate-800 text-cyan-400'
                      }`}
                    >
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Gamete</span>
                      <span>{g}</span>
                    </div>
                  ))}

                  {/* Rows */}
                  {monohybridGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      {/* Row Header (Mother Gamete) */}
                      <div
                        className={`w-16 h-28 rounded-xl flex flex-col items-center justify-center border font-mono font-black text-base transition-all ${
                          hoveredCell?.row === rIdx
                            ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 scale-105 shadow-md'
                            : 'bg-slate-950 border-slate-800 text-indigo-400'
                        }`}
                      >
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Gamete</span>
                        <span>{monohybridGametes1[rIdx]}</span>
                      </div>

                      {/* Offspring Cells */}
                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCell({ row: rIdx, col: cIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border cursor-pointer transition-all duration-150 ${
                              isHovered
                                ? 'border-rose-400 bg-rose-950/40 shadow-lg scale-102 ring-2 ring-rose-500/30'
                                : cell.isDominant
                                ? 'bg-purple-950/20 border-purple-900/60 hover:border-purple-500/60'
                                : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-xl">{activeTrait.icon}</span>
                            <span className="font-mono font-black text-lg tracking-wider text-white">
                              {cell.genotype}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                cell.isDominant
                                  ? 'bg-purple-900/60 text-purple-200 border border-purple-700/60'
                                  : 'bg-slate-800 text-slate-300 border border-slate-700'
                              }`}
                            >
                              {isAr
                                ? cell.isDominant ? activeTrait.domPhenoAr.split(' ')[0] : activeTrait.recPhenoAr.split(' ')[0]
                                : cell.isDominant ? activeTrait.domPhenoEn.split(' ')[0] : activeTrait.recPhenoEn.split(' ')[0]}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Dihybrid 4x4 Punnett Grid */}
            {activeMode === 'dihybrid' && (
              <div className="relative inline-block overflow-x-auto max-w-full my-1">
                <div className="grid grid-cols-[auto_repeat(4,80px)] gap-1.5 text-center">
                  <div className="w-14 h-10 flex items-center justify-center text-[11px] font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {dihybridGametes2.map((g, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-10 rounded-xl flex items-center justify-center border font-mono font-bold text-xs transition-all ${
                        hoveredCell?.col === cIdx
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-105'
                          : 'bg-slate-950 border-slate-800 text-cyan-400'
                      }`}
                    >
                      {g}
                    </div>
                  ))}

                  {dihybridGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div
                        className={`w-14 h-18 rounded-xl flex items-center justify-center border font-mono font-bold text-xs transition-all ${
                          hoveredCell?.row === rIdx
                            ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 scale-105'
                            : 'bg-slate-950 border-slate-800 text-indigo-400'
                        }`}
                      >
                        {dihybridGametes1[rIdx]}
                      </div>

                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCell({ row: rIdx, col: cIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-18 rounded-xl p-1 flex flex-col items-center justify-between border cursor-pointer transition-all ${
                              isHovered
                                ? 'border-amber-400 bg-amber-950/50 shadow-md scale-105 z-10'
                                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="font-mono font-bold text-xs text-white">
                              {cell.genotype}
                            </span>
                            <span
                              className="w-3.5 h-3.5 rounded-full shadow-xs shrink-0"
                              style={{ backgroundColor: cell.color }}
                              title={isAr ? cell.phenoNameAr : cell.phenoNameEn}
                            />
                            <span className="text-[9px] font-medium text-slate-400 truncate w-full px-0.5">
                              {isAr ? cell.phenoNameAr.split(' ')[0] : cell.phenoNameEn.split(' ')[0]}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Blood Groups Punnett Grid */}
            {activeMode === 'blood_types' && (
              <div className="relative inline-block my-2">
                <div className="grid grid-cols-[auto_130px_130px] gap-2">
                  <div className="w-18 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {bloodGrid[0].map((cell, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-12 rounded-xl flex flex-col items-center justify-center border font-mono font-bold text-sm transition-all ${
                        hoveredCell?.col === cIdx
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300 scale-105'
                          : 'bg-slate-950 border-slate-800 text-blue-400'
                      }`}
                    >
                      <span className="text-[9px] text-slate-500 uppercase">Father</span>
                      <span>{cell.colG}</span>
                    </div>
                  ))}

                  {bloodGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div
                        className={`w-18 h-28 rounded-xl flex flex-col items-center justify-center border font-mono font-bold text-sm transition-all ${
                          hoveredCell?.row === rIdx
                            ? 'bg-rose-500/20 border-rose-400 text-rose-300 scale-105'
                            : 'bg-slate-950 border-slate-800 text-rose-400'
                        }`}
                      >
                        <span className="text-[9px] text-slate-500 uppercase">Mother</span>
                        <span>{row[0].rowG}</span>
                      </div>

                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCell({ row: rIdx, col: cIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border cursor-pointer transition-all ${
                              isHovered
                                ? 'border-rose-400 bg-rose-950/40 shadow-lg scale-102 ring-2 ring-rose-500/30'
                                : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-xl">🩸</span>
                            <div className="text-center">
                              <div className="font-mono font-black text-base text-white">
                                {cell.genotypeDisplay}
                              </div>
                              <div className="text-xs font-bold text-rose-400">
                                {cell.bloodType}
                              </div>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 truncate w-full text-center">
                              {cell.antibodies}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Sex-Linked Punnett Grid */}
            {activeMode === 'sex_linked' && (
              <div className="relative inline-block my-2">
                <div className="grid grid-cols-[auto_130px_130px] gap-2">
                  <div className="w-18 h-12 flex items-center justify-center text-xs font-bold text-slate-500">
                    ♀ \ ♂
                  </div>
                  {sexLinkedGrid[0].map((cell, cIdx) => (
                    <div
                      key={cIdx}
                      className={`h-12 rounded-xl flex flex-col items-center justify-center border font-mono font-bold text-sm transition-all ${
                        hoveredCell?.col === cIdx
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 scale-105'
                          : 'bg-slate-950 border-slate-800 text-cyan-400'
                      }`}
                    >
                      <span className="text-[9px] text-slate-500 uppercase">Father</span>
                      <span>{cell.colG}</span>
                    </div>
                  ))}

                  {sexLinkedGrid.map((row, rIdx) => (
                    <React.Fragment key={rIdx}>
                      <div
                        className={`w-18 h-28 rounded-xl flex flex-col items-center justify-center border font-mono font-bold text-sm transition-all ${
                          hoveredCell?.row === rIdx
                            ? 'bg-purple-500/20 border-purple-400 text-purple-300 scale-105'
                            : 'bg-slate-950 border-slate-800 text-purple-400'
                        }`}
                      >
                        <span className="text-[9px] text-slate-500 uppercase">Mother</span>
                        <span>{row[0].rowG}</span>
                      </div>

                      {row.map((cell, cIdx) => {
                        const isHovered = hoveredCell?.row === rIdx && hoveredCell?.col === cIdx;
                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCell({ row: rIdx, col: cIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-28 rounded-2xl p-2.5 flex flex-col items-center justify-between border cursor-pointer transition-all ${
                              isHovered
                                ? 'border-purple-400 bg-purple-950/40 shadow-lg scale-102 ring-2 ring-purple-500/30'
                                : cell.status === 'affected'
                                ? 'bg-red-950/30 border-red-900/60 hover:border-red-500/60'
                                : cell.status === 'carrier'
                                ? 'bg-amber-950/20 border-amber-900/60 hover:border-amber-500/60'
                                : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-xl">{cell.sex === 'female' ? '👧' : '👦'}</span>
                            <div className="text-center">
                              <div className="font-mono font-black text-sm text-white">
                                {cell.genotype}
                              </div>
                              <div
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                                  cell.status === 'affected'
                                    ? 'bg-red-900/80 text-red-200'
                                    : cell.status === 'carrier'
                                    ? 'bg-amber-900/80 text-amber-200'
                                    : 'bg-emerald-900/80 text-emerald-200'
                                }`}
                              >
                                {isAr ? cell.descAr.split(' ')[0] : cell.descEn.split(' ')[0]}
                              </div>
                            </div>
                            <span className="text-[9px] text-slate-400 font-mono">
                              {cell.sex === 'female' ? 'Female' : 'Male'}
                            </span>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Real-time Telemetry & Mathematical Ratios */}
          <div
            className={`flex-1 min-h-0 p-4 rounded-2xl border shadow-sm flex flex-col justify-between ${
              isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-200'
            }`}
          >
            {/* Monohybrid Real-Time Telemetry */}
            {activeMode === 'monohybrid' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'النسب المظهرية والجينية الناتجة:' : 'Phenotypic & Genotypic Outcomes:'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                    Ratio: {monohybridStats.dominantCount} : {monohybridStats.recessiveCount}
                  </span>
                </div>

                {/* Percentage Bar */}
                <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                    style={{ width: `${monohybridStats.dominantPct}%` }}
                    title={`${monohybridStats.dominantPct}% Dominant`}
                  />
                  <div
                    className="h-full bg-slate-600 transition-all duration-300"
                    style={{ width: `${monohybridStats.recessivePct}%` }}
                    title={`${monohybridStats.recessivePct}% Recessive`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40">
                    <span className="text-[11px] text-purple-300 font-bold block mb-1">
                      {isAr ? activeTrait.domPhenoAr : activeTrait.domPhenoEn}
                    </span>
                    <div className="text-lg font-black text-purple-200">
                      {isAr ? toHindiDigits(monohybridStats.dominantCount) : monohybridStats.dominantCount} / {isAr ? toHindiDigits(4) : 4} ({monohybridStats.dominantPct}%)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 font-bold block mb-1">
                      {isAr ? activeTrait.recPhenoAr : activeTrait.recPhenoEn}
                    </span>
                    <div className="text-lg font-black text-slate-200">
                      {isAr ? toHindiDigits(monohybridStats.recessiveCount) : monohybridStats.recessiveCount} / {isAr ? toHindiDigits(4) : 4} ({monohybridStats.recessivePct}%)
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <MathRenderer
                    math={
                      isAr
                        ? `\\text{قانون انعزال العوامل: } P_1 \\times P_2 \\implies ${monohybridStats.dominantCount} : ${monohybridStats.recessiveCount} \\; (3 : 1 \\text{ في الجيل الثاني})`
                        : `\\text{Law of Segregation: } P_1 \\times P_2 \\implies ${monohybridStats.dominantCount} : ${monohybridStats.recessiveCount} \\; (3 : 1 \\text{ in } F_2)`
                    }
                    lang={lang}
                  />
                </div>
              </div>
            )}

            {/* Dihybrid Real-Time Telemetry */}
            {activeMode === 'dihybrid' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'النسب المظهرية (16 فرد):' : 'Phenotypic Ratios (16 Offspring):'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/60">
                    {dihybridStats.ratios}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { key: 'RY', nameEn: 'Round Yellow', nameAr: 'أملس أصفر', count: dihybridStats.counts.RY, color: '#eab308' },
                    { key: 'Ry', nameEn: 'Round Green', nameAr: 'أملس أخضر', count: dihybridStats.counts.Ry, color: '#22c55e' },
                    { key: 'rY', nameEn: 'Wrinkled Yellow', nameAr: 'مجعد أصفر', count: dihybridStats.counts.rY, color: '#f97316' },
                    { key: 'ry', nameEn: 'Wrinkled Green', nameAr: 'مجعد أخضر', count: dihybridStats.counts.ry, color: '#10b981' },
                  ].map((p) => (
                    <div key={p.key} className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="text-[11px] font-bold text-slate-300 truncate">
                          {isAr ? p.nameAr : p.nameEn}
                        </span>
                      </div>
                      <div className="text-base font-black text-white font-mono">
                        {isAr ? toHindiDigits(p.count) : p.count} / {isAr ? toHindiDigits(16) : 16}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    math={
                      isAr
                        ? `\\text{قانون التوزيع الحر لمندل: } 9 : 3 : 3 : 1 \\quad (RrYy \\times RrYy)`
                        : `\\text{Mendel's Law of Independent Assortment: } 9 : 3 : 3 : 1 \\quad (RrYy \\times RrYy)`
                    }
                    lang={lang}
                  />
                </div>
              </div>
            )}

            {/* Blood Groups Real-Time Telemetry */}
            {activeMode === 'blood_types' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-rose-400" />
                    <span>{isAr ? 'توافق نقل الدم والمناعة:' : 'Transfusion Compatibility & Antigens:'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/60">
                    Multiple Alleles & Codominance
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isAr ? 'المعطي العام (Universal Donor):' : 'Universal Donor:'}
                    </span>
                    <div className="text-sm font-black text-emerald-400">
                      O- (سالب ريسوس)
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {isAr ? 'لا يحتوي على مولدات التصاق A أو B أو Rh' : 'No A, B, or Rh surface antigens'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {isAr ? 'المستقبل العام (Universal Recipient):' : 'Universal Recipient:'}
                    </span>
                    <div className="text-sm font-black text-cyan-400">
                      AB+ (موجب ريسوس)
                    </div>
                    <p className="text-[10px] text-slate-500">
                      {isAr ? 'بلازما الدم لا تحتوي على أي أجسام مضادة' : 'Plasma contains no Anti-A, Anti-B antibodies'}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    math={
                      isAr
                        ? `\\text{توارث فصائل الدم: السيادة المشتركة بين } I^A \\text{ و } I^B \\implies AB`
                        : `\\text{Blood Group Genetics: Codominance between } I^A \\text{ and } I^B \\implies AB`
                    }
                    lang={lang}
                  />
                </div>
              </div>
            )}

            {/* Sex-Linked Real-Time Telemetry */}
            {activeMode === 'sex_linked' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span>{isAr ? 'نسبة الإصابة حسب الجنس (ذكور vs إناث):' : 'Sex-Specific Incidence (Sons vs Daughters):'}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60">
                    Criss-Cross Inheritance
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
                    <span className="text-[11px] font-bold text-cyan-300 block">
                      👦 {isAr ? 'الأبناء الذكور (XY):' : 'Sons (XY):'}
                    </span>
                    <p className="text-[11px] text-slate-300">
                      {motherSexLinked === 'carrier'
                        ? isAr ? '50% ذكور مصابين : 50% ذكور سليمين' : '50% Affected : 50% Normal'
                        : motherSexLinked === 'affected'
                        ? isAr ? '100% ذكور مصابون حتماً' : '100% Affected Sons'
                        : isAr ? '100% ذكور سليمون تماماً' : '100% Normal Sons'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-1">
                    <span className="text-[11px] font-bold text-purple-300 block">
                      👧 {isAr ? 'البنات الإناث (XX):' : 'Daughters (XX):'}
                    </span>
                    <p className="text-[11px] text-slate-300">
                      {fatherSexLinked === 'affected'
                        ? isAr ? '100% من البنات حاملات للمرض أو مصابات' : '100% Daughters are Carriers or Affected'
                        : isAr ? 'جميع البنات سليمات ظاهرياً (حاملات أو نقيات)' : 'All Daughters phenotypically healthy'}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <MathRenderer
                    math={
                      isAr
                        ? `X^H X^h \\times X^H Y \\implies \\text{الأب يورث كروموسوم } Y \\text{ للذكور و } X \\text{ للإناث}`
                        : `X^H X^h \\times X^H Y \\implies \\text{Father passes } Y \\text{ to sons, } X \\text{ to daughters}`
                    }
                    lang={lang}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
