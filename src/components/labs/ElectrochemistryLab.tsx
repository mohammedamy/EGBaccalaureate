import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Battery,
  Zap,
  Gauge,
  Sliders,
  CheckCircle2,
  Sparkles,
  Flame,
} from 'lucide-react';
import { MathRenderer } from '../MathRenderer';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface Electrode {
  id: string;
  nameEn: string;
  nameAr: string;
  symbol: string;
  ionEn: string;
  ionAr: string;
  metalLatex?: string;
  ionLatex?: string;
  e0Reduction: number; // Standard Reduction Potential (V)
  valence: number; // n electrons transferred
  solutionColor: string; // CSS color representation
  metalColor: string;
}

const ELECTRODES: Electrode[] = [
  {
    id: 'mg',
    nameEn: 'Magnesium (Mg)',
    nameAr: 'المغنيسيوم (Mg)',
    symbol: 'Mg',
    ionEn: 'Mg²⁺',
    ionAr: '²⁺Mg',
    metalLatex: '\\text{Mg}',
    ionLatex: '\\text{Mg}^{2+}',
    e0Reduction: -2.37,
    valence: 2,
    solutionColor: 'rgba(241, 245, 249, 0.25)',
    metalColor: '#94a3b8',
  },
  {
    id: 'al',
    nameEn: 'Aluminum (Al)',
    nameAr: 'الألومنيوم (Al)',
    symbol: 'Al',
    ionEn: 'Al³⁺',
    ionAr: '³⁺Al',
    metalLatex: '\\text{Al}',
    ionLatex: '\\text{Al}^{3+}',
    e0Reduction: -1.66,
    valence: 3,
    solutionColor: 'rgba(241, 245, 249, 0.2)',
    metalColor: '#cbd5e1',
  },
  {
    id: 'zn',
    nameEn: 'Zinc (Zn)',
    nameAr: 'الخارصين / الزنك (Zn)',
    symbol: 'Zn',
    ionEn: 'Zn²⁺',
    ionAr: '²⁺Zn',
    metalLatex: '\\text{Zn}',
    ionLatex: '\\text{Zn}^{2+}',
    e0Reduction: -0.76,
    valence: 2,
    solutionColor: 'rgba(248, 250, 252, 0.2)',
    metalColor: '#a1a1aa',
  },
  {
    id: 'fe',
    nameEn: 'Iron (Fe)',
    nameAr: 'الحديد (Fe)',
    symbol: 'Fe',
    ionEn: 'Fe²⁺',
    ionAr: '²⁺Fe',
    metalLatex: '\\text{Fe}',
    ionLatex: '\\text{Fe}^{2+}',
    e0Reduction: -0.44,
    valence: 2,
    solutionColor: 'rgba(74, 222, 128, 0.25)', // pale green
    metalColor: '#71717a',
  },
  {
    id: 'ni',
    nameEn: 'Nickel (Ni)',
    nameAr: 'النيكل (Ni)',
    symbol: 'Ni',
    ionEn: 'Ni²⁺',
    ionAr: '²⁺Ni',
    metalLatex: '\\text{Ni}',
    ionLatex: '\\text{Ni}^{2+}',
    e0Reduction: -0.25,
    valence: 2,
    solutionColor: 'rgba(34, 197, 94, 0.3)', // green
    metalColor: '#a8a29e',
  },
  {
    id: 'pb',
    nameEn: 'Lead (Pb)',
    nameAr: 'الرصاص (Pb)',
    symbol: 'Pb',
    ionEn: 'Pb²⁺',
    ionAr: '²⁺Pb',
    metalLatex: '\\text{Pb}',
    ionLatex: '\\text{Pb}^{2+}',
    e0Reduction: -0.13,
    valence: 2,
    solutionColor: 'rgba(226, 232, 240, 0.2)',
    metalColor: '#64748b',
  },
  {
    id: 'h2',
    nameEn: 'Hydrogen SHE (Pt)',
    nameAr: 'قطب الهيدروجين القياسي (Pt)',
    symbol: 'Pt/H₂',
    ionEn: '2H⁺',
    ionAr: '⁺2H',
    metalLatex: '\\text{H}_2',
    ionLatex: '2\\text{H}^+',
    e0Reduction: 0.00,
    valence: 2,
    solutionColor: 'rgba(241, 245, 249, 0.15)',
    metalColor: '#475569',
  },
  {
    id: 'cu',
    nameEn: 'Copper (Cu)',
    nameAr: 'النحاس (Cu)',
    symbol: 'Cu',
    ionEn: 'Cu²⁺',
    ionAr: '²⁺Cu',
    metalLatex: '\\text{Cu}',
    ionLatex: '\\text{Cu}^{2+}',
    e0Reduction: +0.34,
    valence: 2,
    solutionColor: 'rgba(56, 189, 248, 0.45)', // bright blue CuSO4
    metalColor: '#f97316', // copper bronze
  },
  {
    id: 'ag',
    nameEn: 'Silver (Ag)',
    nameAr: 'الفضة (Ag)',
    symbol: 'Ag',
    ionEn: 'Ag⁺',
    ionAr: '⁺Ag',
    metalLatex: '\\text{Ag}',
    ionLatex: '\\text{Ag}^+',
    e0Reduction: +0.80,
    valence: 1,
    solutionColor: 'rgba(248, 250, 252, 0.2)',
    metalColor: '#e2e8f0', // bright silver
  },
];

export const ElectrochemistryLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Selected half-cells (default: classic Daniell Cell Zn - Cu)
  const [leftElectrode, setLeftElectrode] = useState<Electrode>(ELECTRODES[2]); // Zn
  const [rightElectrode, setRightElectrode] = useState<Electrode>(ELECTRODES[7]); // Cu

  // Concentrations in mol/L (M)
  const [leftConcentration, setLeftConcentration] = useState<number>(1.0); // 1.0 M
  const [rightConcentration, setRightConcentration] = useState<number>(1.0); // 1.0 M

  // Temperature in Kelvin (298.15 K = 25 °C)
  const [temperatureK, setTemperatureK] = useState<number>(298.15);

  // Animation state for electron flow
  const [animOffset, setAnimOffset] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimOffset((prev) => (prev + 1) % 40);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Determine Anode and Cathode automatically based on standard reduction potentials:
  // Metal with LOWER reduction potential (more negative) is oxidized (ANODE, negative pole in galvanic)
  // Metal with HIGHER reduction potential (more positive) is reduced (CATHODE, positive pole in galvanic)
  const isLeftAnode = leftElectrode.e0Reduction <= rightElectrode.e0Reduction;

  const anode = isLeftAnode ? leftElectrode : rightElectrode;
  const cathode = isLeftAnode ? rightElectrode : leftElectrode;

  const anodeConc = isLeftAnode ? leftConcentration : rightConcentration;
  const cathodeConc = isLeftAnode ? rightConcentration : leftConcentration;

  // Standard Cell EMF: E0_cell = E0_cathode - E0_anode
  const e0Cell = cathode.e0Reduction - anode.e0Reduction;

  // Effective electrons transferred n (LCM of valences)
  const nElectrons = (anode.valence * cathode.valence) / gcd(anode.valence, cathode.valence);

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Nernst Equation:
  // E_cell = E0_cell - (R * T / (n * F)) * ln(Q)
  // At 298.15 K, (R * T * ln(10)) / F = 0.05916 V
  const R = 8.314; // J/(mol*K)
  const F = 96485; // C/mol
  const nernstFactor = (R * temperatureK) / (nElectrons * F);

  // Reaction Quotient Q = [Anode_ion]^p / [Cathode_ion]^q
  // Balancing: q * Anode + p * Cathode_ion -> q * Anode_ion + p * Cathode
  // where p = nElectrons / cathode.valence, q = nElectrons / anode.valence
  const powerAnode = nElectrons / anode.valence;
  const powerCathode = nElectrons / cathode.valence;

  const Q = Math.pow(anodeConc, powerAnode) / Math.pow(cathodeConc, powerCathode);
  const nernstCorrection = nernstFactor * Math.log(Q);

  // Non-standard Cell EMF:
  const eCell = e0Cell - nernstCorrection;

  // Gibbs Free Energy Delta G = -n * F * E_cell (in kJ/mol)
  const deltaG_kJ = (-nElectrons * F * eCell) / 1000;

  // Is spontaneous?
  const isSpontaneous = eCell > 0;

  // Preset loaders
  const loadPreset = (preset: 'daniell' | 'lead' | 'hydrogen_copper' | 'magnesium_silver') => {
    if (preset === 'daniell') {
      setLeftElectrode(ELECTRODES[2]); // Zn
      setRightElectrode(ELECTRODES[7]); // Cu
      setLeftConcentration(1.0);
      setRightConcentration(1.0);
    } else if (preset === 'lead') {
      setLeftElectrode(ELECTRODES[3]); // Fe
      setRightElectrode(ELECTRODES[5]); // Pb
      setLeftConcentration(1.0);
      setRightConcentration(0.5);
    } else if (preset === 'hydrogen_copper') {
      setLeftElectrode(ELECTRODES[6]); // SHE
      setRightElectrode(ELECTRODES[7]); // Cu
      setLeftConcentration(1.0);
      setRightConcentration(1.0);
    } else if (preset === 'magnesium_silver') {
      setLeftElectrode(ELECTRODES[0]); // Mg
      setRightElectrode(ELECTRODES[8]); // Ag
      setLeftConcentration(0.1);
      setRightConcentration(1.0);
    }
  };

  const formatNum = (val: number, decimals = 2) => {
    const formatted = val.toFixed(decimals);
    return isArabic ? toHindiDigits(formatted) : formatted;
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-4 rounded-xl border border-emerald-500/20">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-emerald-400">
              {isArabic
                ? 'مختبر الكيمياء الكهربية والخلايا الجلفانية (خلية دانيال)'
                : 'Electrochemistry & Galvanic Voltaic Cells Lab'}
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold uppercase">
              Daniell & Nernst
            </span>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'دراسة أقطاب السلسلة الكهروكيميائية، اتجاه حركة الإلكترونات، القنطرة الملحية، ومعادلة نيرنست لتغير ق.د.ك مع التركيز'
              : 'Explore electrochemical series potentials, electron flow, salt bridge migration, and Nernst equation EMF shifts'}
          </p>
        </div>

        {/* Presets Row */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          <button
            onClick={() => loadPreset('daniell')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 transition-all cursor-pointer"
          >
            {isArabic ? 'خلية دانيال (Zn-Cu)' : 'Daniell (Zn-Cu)'}
          </button>
          <button
            onClick={() => loadPreset('hydrogen_copper')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
          >
            {isArabic ? 'هيدروجين قياسي (SHE-Cu)' : 'SHE-Cu'}
          </button>
          <button
            onClick={() => loadPreset('magnesium_silver')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
          >
            {isArabic ? 'عالية الجهد (Mg-Ag)' : 'High EMF (Mg-Ag)'}
          </button>
        </div>
      </div>

      {/* Main Simulation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Rich SVG Galvanic Cell Apparatus */}
        <div
          className={`lg:col-span-8 rounded-xl border p-4 sm:p-5 flex flex-col justify-between ${
            isContrast
              ? 'bg-black border-emerald-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/70 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Battery className="w-3.5 h-3.5" />
              {isArabic ? 'جهاز الخلية الجلفانية والقنطرة الملحية' : 'Galvanic Apparatus & Salt Bridge'}
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-300 px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800">
              {anode.symbol} (-) ⟶ {cathode.symbol} (+)
            </span>
          </div>

          {/* SVG Apparatus Graphic */}
          <div className="relative w-full h-[280px] sm:h-[320px] my-2 select-none overflow-hidden rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-center">
            <svg viewBox="0 0 460 300" className="w-full h-full">
              <defs>
                <filter id="bulbGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* External Wire Circuit Top */}
              {/* Left wire up from electrode (x=105, y=100) -> (x=105, y=35) -> (x=210, y=35) */}
              <path
                d="M 105 100 L 105 35 L 210 35 M 250 35 L 355 35 L 355 100"
                fill="none"
                stroke="#64748b"
                strokeWidth="2.5"
              />

              {/* Animated Electron Dots moving along the wire */}
              {(() => {
                const wirePointsLeft = [
                  { x: 105, y: 80 - (animOffset % 20) * 2 },
                  { x: 120 + (animOffset % 20) * 4, y: 35 },
                  { x: 270 + (animOffset % 20) * 4, y: 35 },
                  { x: 355, y: 45 + (animOffset % 20) * 2 },
                ];
                // Direction: Anode -> Cathode
                const pts = isLeftAnode
                  ? wirePointsLeft
                  : [
                      { x: 355, y: 80 - (animOffset % 20) * 2 },
                      { x: 330 - (animOffset % 20) * 4, y: 35 },
                      { x: 180 - (animOffset % 20) * 4, y: 35 },
                      { x: 105, y: 45 + (animOffset % 20) * 2 },
                    ];

                return pts.map((pt, idx) => (
                  <circle
                    key={`e-dot-${idx}`}
                    cx={pt.x}
                    cy={pt.y}
                    r="3"
                    fill="#facc15"
                    stroke="#ffffff"
                    strokeWidth="0.8"
                  />
                ));
              })()}

              {/* Voltmeter / Indicator Module in the Middle */}
              <g transform="translate(230, 35)">
                <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                {/* Needle */}
                <line
                  x1="0"
                  y1="10"
                  x2={Math.sin((eCell / 2.5) * 1.2) * 14}
                  y2={-Math.cos((eCell / 2.5) * 1.2) * 14}
                  stroke="#f43f5e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="10" r="2.5" fill="#f43f5e" />
                {/* Digital readout text below voltmeter */}
                <text x="0" y="-2" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  V
                </text>
              </g>

              {/* Indicator Bulb */}
              <g transform="translate(230, 70)">
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill={isSpontaneous ? `rgba(253, 224, 71, ${Math.min(1.0, eCell / 1.2)})` : '#334155'}
                  stroke="#facc15"
                  strokeWidth="1.2"
                  filter={isSpontaneous ? 'url(#bulbGlow)' : undefined}
                />
              </g>

              {/* Left Beaker */}
              <g transform="translate(50, 110)">
                {/* Glass Beaker Body */}
                <rect x="0" y="0" width="110" height="150" rx="6" fill="#090d16" stroke="#475569" strokeWidth="2" />
                {/* Solution Fill */}
                <rect
                  x="4"
                  y="40"
                  width="102"
                  height="106"
                  rx="4"
                  fill={leftElectrode.solutionColor}
                />
                {/* Metal Electrode Plate */}
                <rect
                  x="45"
                  y="-10"
                  width="20"
                  height="120"
                  fill={leftElectrode.metalColor}
                  stroke="#334155"
                  strokeWidth="1"
                />
                {/* Anode / Cathode Label */}
                <text x="55" y="25" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">
                  {leftElectrode.symbol}
                </text>
                <text x="55" y="138" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {isLeftAnode ? (isArabic ? 'مصعد (أنود -)' : 'ANODE (-)') : (isArabic ? 'مهبط (كاثود +)' : 'CATHODE (+)')}
                </text>
                <text x="55" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">
                  [{leftElectrode.ionEn}] = {formatNum(leftConcentration, 2)} M
                </text>
              </g>

              {/* Right Beaker */}
              <g transform="translate(300, 110)">
                {/* Glass Beaker Body */}
                <rect x="0" y="0" width="110" height="150" rx="6" fill="#090d16" stroke="#475569" strokeWidth="2" />
                {/* Solution Fill */}
                <rect
                  x="4"
                  y="40"
                  width="102"
                  height="106"
                  rx="4"
                  fill={rightElectrode.solutionColor}
                />
                {/* Metal Electrode Plate */}
                <rect
                  x="45"
                  y="-10"
                  width="20"
                  height="120"
                  fill={rightElectrode.metalColor}
                  stroke="#334155"
                  strokeWidth="1"
                />
                {/* Anode / Cathode Label */}
                <text x="55" y="25" fill="#ffffff" fontSize="12" fontWeight="black" textAnchor="middle">
                  {rightElectrode.symbol}
                </text>
                <text x="55" y="138" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {!isLeftAnode ? (isArabic ? 'مصعد (أنود -)' : 'ANODE (-)') : (isArabic ? 'مهبط (كاثود +)' : 'CATHODE (+)')}
                </text>
                <text x="55" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">
                  [{rightElectrode.ionEn}] = {formatNum(rightConcentration, 2)} M
                </text>
              </g>

              {/* Salt Bridge (Inverted U-Tube bridging both beakers) */}
              <g transform="translate(140, 120)">
                {/* Glass U-Tube Outer */}
                <path
                  d="M 0 60 L 0 20 Q 0 0 20 0 L 160 0 Q 180 0 180 20 L 180 60"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="18"
                  strokeLinecap="square"
                />
                {/* Electrolyte Gel Core (KNO3) */}
                <path
                  d="M 0 60 L 0 20 Q 0 0 20 0 L 160 0 Q 180 0 180 20 L 180 60"
                  fill="none"
                  stroke="rgba(254, 240, 138, 0.4)"
                  strokeWidth="12"
                  strokeLinecap="square"
                />
                {/* Salt Bridge Label */}
                <rect x="55" y="-12" width="70" height="18" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <text x="90" y="1" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">
                  KNO₃ Agar
                </text>

                {/* Ion Migration Arrows */}
                {/* NO3- migrates to Anode (Left if isLeftAnode) */}
                <text x={isLeftAnode ? 10 : 170} y="45" fill="#f87171" fontSize="9" fontWeight="black" textAnchor="middle">
                  NO₃⁻ ⟶
                </text>
                {/* K+ migrates to Cathode (Right if isLeftAnode) */}
                <text x={isLeftAnode ? 170 : 10} y="45" fill="#60a5fa" fontSize="9" fontWeight="black" textAnchor="middle">
                  ⟵ K⁺
                </text>
              </g>

              {/* Bottom Equation Notation Banner */}
              <text x="230" y="285" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle">
                {anode.symbol}(s) | {anode.ionEn}(aq, {formatNum(anodeConc, 2)}M) || {cathode.ionEn}(aq, {formatNum(cathodeConc, 2)}M) | {cathode.symbol}(s)
              </text>
            </svg>
          </div>

          {/* Quick Explanatory Banner */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="flex items-center gap-1 text-rose-400 font-bold">
              <Flame className="w-3.5 h-3.5" />
              {isArabic ? 'المصعد (الأنود): قطب سالب تحدث عنده الأكسدة وتآكل اللوح' : 'Anode: Negative pole, oxidation occurs (mass decreases)'}
            </span>
            <span className="flex items-center gap-1 text-sky-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic ? 'المهبط (الكاثود): قطب موجب يحدث عنده الاختزال وترسب الفلز' : 'Cathode: Positive pole, reduction occurs (mass increases)'}
            </span>
          </div>
        </div>

        {/* Right Column: Calculations & Metric Cards */}
        <div className="lg:col-span-4 space-y-4">
          {/* Main EMF Display Card */}
          <div
            className={`rounded-xl border p-4 ${
              isContrast
                ? 'bg-black border-emerald-400'
                : 'bg-slate-950 border-emerald-500/30 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-500/20">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5" />
                {isArabic ? 'القوة الدافعة الكهربية للخلية' : 'Cell Electromotive Force (EMF)'}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40">
                {isSpontaneous ? 'SPONTANEOUS' : 'NON-SPONTANEOUS'}
              </span>
            </div>

            <div className="text-center py-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                {formatNum(eCell, 3)} V
              </span>
              <div className="text-xs text-slate-300 mt-1 flex items-center justify-center gap-1.5">
                <MathRenderer math="E^\circ_{\text{cell}} =" inline lang={lang} />
                <span className="font-mono font-bold text-amber-400">{formatNum(e0Cell, 2)} V</span>
              </div>
            </div>

            {/* Nernst Formula Breakdown */}
            <div className="mt-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{isArabic ? 'جهد الاختزال للمهبط:' : 'Cathode E°:'}</span>
                <span className="font-mono text-sky-400 font-bold">{formatNum(cathode.e0Reduction, 2)} V</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{isArabic ? 'جهد الاختزال للمصعد:' : 'Anode E°:'}</span>
                <span className="font-mono text-rose-400 font-bold">{formatNum(anode.e0Reduction, 2)} V</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                <span className="text-slate-400 flex items-center gap-1">
                  <span>{isArabic ? 'تصحيح نيرنست:' : 'Nernst Term:'}</span>
                  <MathRenderer math="-\frac{RT}{nF}\ln Q" inline lang={lang} />
                </span>
                <span className="font-mono text-amber-400 font-bold">-{formatNum(nernstCorrection, 4)} V</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1">
                  <span>{isArabic ? 'تغير طاقة جيبس:' : 'Gibbs Energy:'}</span>
                  <MathRenderer math="(\Delta G)" inline lang={lang} />
                </span>
                <span className="font-mono text-emerald-400 font-bold">{formatNum(deltaG_kJ, 1)} kJ/mol</span>
              </div>
            </div>
          </div>

          {/* Half-Cell Reactions */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isArabic ? 'تفاعلات نصفي الخلية والتفاعل الكلي' : 'Half-Cell & Overall Reactions'}
            </h4>

            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs space-y-1">
              <span className="text-[10px] font-bold text-rose-400 block">
                {isArabic ? 'أكسدة عند المصعد (Anode Oxidation):' : 'Anode Oxidation:'}
              </span>
              <div className="text-slate-200">
                <MathRenderer
                  math={`${anode.metalLatex || anode.symbol} \\longrightarrow ${anode.ionLatex || anode.ionEn} + ${anode.valence}e^-`}
                  inline
                  lang={lang}
                />
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs space-y-1">
              <span className="text-[10px] font-bold text-sky-400 block">
                {isArabic ? 'اختزال عند المهبط (Cathode Reduction):' : 'Cathode Reduction:'}
              </span>
              <div className="text-slate-200">
                <MathRenderer
                  math={`${cathode.ionLatex || cathode.ionEn} + ${cathode.valence}e^- \\longrightarrow ${cathode.metalLatex || cathode.symbol}`}
                  inline
                  lang={lang}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Electrodes Selector Deck & Concentration Sliders */}
      <div
        className={`rounded-xl border p-4 sm:p-5 ${
          isContrast
            ? 'bg-black border-emerald-400'
            : isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-slate-900/80 border-slate-800'
        }`}
      >
        <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" />
          {isArabic ? 'اختيار الفلزات وتعديل تراكيز المحاليل' : 'Metal Electrode Selection & Solution Concentrations'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Electrode Column */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300 block">
              {isArabic ? 'القطب الأيسر:' : 'Left Electrode:'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ELECTRODES.map((el) => (
                <button
                  key={`left-${el.id}`}
                  onClick={() => setLeftElectrode(el)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    leftElectrode.id === el.id
                      ? 'bg-emerald-600 text-white border-emerald-500 font-black shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {el.symbol} ({el.e0Reduction > 0 ? `+${el.e0Reduction}` : el.e0Reduction}V)
                </button>
              ))}
            </div>

            {/* Left Concentration Slider */}
            <div className="pt-2 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">
                  {isArabic ? `تركيز أيونات ${leftElectrode.ionAr}:` : `[${leftElectrode.ionEn}] Concentration:`}
                </span>
                <span className="font-mono font-bold text-emerald-400">{formatNum(leftConcentration, 2)} M</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="2.0"
                step="0.05"
                value={leftConcentration}
                onChange={(e) => setLeftConcentration(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded"
              />
            </div>
          </div>

          {/* Right Electrode Column */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-300 block">
              {isArabic ? 'القطب الأيمن:' : 'Right Electrode:'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ELECTRODES.map((el) => (
                <button
                  key={`right-${el.id}`}
                  onClick={() => setRightElectrode(el)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    rightElectrode.id === el.id
                      ? 'bg-sky-600 text-white border-sky-500 font-black shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {el.symbol} ({el.e0Reduction > 0 ? `+${el.e0Reduction}` : el.e0Reduction}V)
                </button>
              ))}
            </div>

            {/* Right Concentration Slider */}
            <div className="pt-2 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">
                  {isArabic ? `تركيز أيونات ${rightElectrode.ionAr}:` : `[${rightElectrode.ionEn}] Concentration:`}
                </span>
                <span className="font-mono font-bold text-sky-400">{formatNum(rightConcentration, 2)} M</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="2.0"
                step="0.05"
                value={rightConcentration}
                onChange={(e) => setRightConcentration(parseFloat(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded"
              />
            </div>
          </div>
        </div>

        {/* Temperature Slider Row */}
        <div className="mt-5 pt-4 border-t border-slate-800 space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-slate-300 font-bold">
              {isArabic ? 'درجة حرارة الخلية الكهروكيميائية (T):' : 'Cell Temperature (T):'}
            </span>
            <span className="font-mono font-bold text-amber-400">
              {formatNum(temperatureK - 273.15, 0)} °C ({formatNum(temperatureK, 1)} K)
            </span>
          </div>
          <input
            type="range"
            min="273.15"
            max="348.15"
            step="1"
            value={temperatureK}
            onChange={(e) => setTemperatureK(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0 °C (273 K)</span>
            <span>25 °C (298.15 K - Standard)</span>
            <span>75 °C (348 K)</span>
          </div>
        </div>
      </div>

      {/* Ministry Curriculum Examination Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'وظيفة القنطرة الملحية وأهميتها' : 'Salt Bridge Critical Functions'}
            </h5>
          </div>
          <div className="text-[11px] leading-relaxed text-slate-400">
            <MathRenderer
              text={
                isArabic
                  ? 'تصل بين محلولي نصفي الخلية بطريقة غير مباشرة، وتعادل الشحنات الموجبة الزائدة عند المصعد والشحنات السالبة عند المهبط، وتغلق الدائرة الكهربية. إزالتها توقف التيار فوراً.'
                  : 'Indirectly connects half-cell electrolytes, neutralizes charge build-up ($\\text{NO}_3^-$ to anode, $\\text{K}^+$ to cathode), and completes circuit. Removing it halts current instantly.'
              }
              lang={lang}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'قطب الهيدروجين القياسي (SHE)' : 'Standard Hydrogen Electrode'}
            </h5>
          </div>
          <div className="text-[11px] leading-relaxed text-slate-400">
            <MathRenderer
              text={
                isArabic
                  ? 'صفيحة بلاتين مغطاة بأسود البلاتين يمر عليها غاز $\\text{H}_2$ بضغط $1\\text{ atm}$ ومغمورة في حمض قوي تركيزه $1\\text{ M}$ عند $25^\\circ\\text{C}$. اصطُلح على أن جهده القياسي = $0.00\\text{ V}$ ويستخدم لقياس جهود باقي العناصر.'
                  : 'Platinum black foil bubbled with $\\text{H}_2$ gas at $1\\text{ atm}$ in $1\\text{ M}$ acid at $25^\\circ\\text{C}$. By convention, its standard potential is $0.00\\text{ V}$, serving as the universal reference electrode.'
              }
              lang={lang}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <h5 className="text-xs font-bold text-slate-200">
              {isArabic ? 'أثر التركيز وفق معادلة نيرنست' : 'Concentration Shifts (Nernst)'}
            </h5>
          </div>
          <div className="text-[11px] leading-relaxed text-slate-400">
            <MathRenderer
              text={
                isArabic
                  ? 'زيادة تركيز أيونات المصعد تقلل ق.د.ك للخلية لأنها تدفع التفاعل في الاتجاه العكسي، بينما زيادة تركيز أيونات المهبط تزيد ق.د.ك. يتوقف التيار عندما يصبح $E_{\\text{cell}} = 0$.'
                  : 'Increasing anode ion concentration lowers cell EMF toward equilibrium (Le Chatelier shift), while increasing cathode ions boosts EMF. When $E_{\\text{cell}}$ reaches 0, the battery is dead.'
              }
              lang={lang}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
