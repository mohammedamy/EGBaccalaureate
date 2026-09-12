import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  Flame,
  Scale,
  Info,
  Droplets,
  Layers,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

type ChemTab = 'equilibrium' | 'transition' | 'titration';

interface TransitionElement {
  z: number;
  symbol: string;
  nameEn: string;
  nameAr: string;
  electronConfig: string;
  anomalous?: boolean;
  oxidationStates: number[];
  selectedOxState: number;
  unpairedElectrons: number;
  hydratedColorEn: string;
  hydratedColorAr: string;
  colorHex: string;
}

const TRANSITION_METALS: TransitionElement[] = [
  {
    z: 21,
    symbol: 'Sc',
    nameEn: 'Scandium',
    nameAr: 'السكانديوم',
    electronConfig: '[Ar] 4s² 3d¹',
    oxidationStates: [3],
    selectedOxState: 3,
    unpairedElectrons: 0,
    hydratedColorEn: 'Colorless (3d⁰)',
    hydratedColorAr: 'عديم اللون (3d⁰)',
    colorHex: '#e2e8f0',
  },
  {
    z: 22,
    symbol: 'Ti',
    nameEn: 'Titanium',
    nameAr: 'التيتانيوم',
    electronConfig: '[Ar] 4s² 3d²',
    oxidationStates: [2, 3, 4],
    selectedOxState: 3,
    unpairedElectrons: 1,
    hydratedColorEn: 'Purple / Violet (3d¹)',
    hydratedColorAr: 'بنفسجي (3d¹)',
    colorHex: '#c084fc',
  },
  {
    z: 23,
    symbol: 'V',
    nameEn: 'Vanadium',
    nameAr: 'الفاناديوم',
    electronConfig: '[Ar] 4s² 3d³',
    oxidationStates: [2, 3, 4, 5],
    selectedOxState: 4,
    unpairedElectrons: 1,
    hydratedColorEn: 'Blue (VO²⁺, 3d¹)',
    hydratedColorAr: 'أزرق (3d¹)',
    colorHex: '#38bdf8',
  },
  {
    z: 24,
    symbol: 'Cr',
    nameEn: 'Chromium',
    nameAr: 'الكروم',
    electronConfig: '[Ar] 4s¹ 3d⁵ (Anomalous / شاذ)',
    anomalous: true,
    oxidationStates: [2, 3, 6],
    selectedOxState: 3,
    unpairedElectrons: 3,
    hydratedColorEn: 'Green (3d³)',
    hydratedColorAr: 'أخضر (3d³)',
    colorHex: '#22c55e',
  },
  {
    z: 25,
    symbol: 'Mn',
    nameEn: 'Manganese',
    nameAr: 'المنجنيز',
    electronConfig: '[Ar] 4s² 3d⁵',
    oxidationStates: [2, 3, 4, 6, 7],
    selectedOxState: 2,
    unpairedElectrons: 5,
    hydratedColorEn: 'Faint Pink (3d⁵)',
    hydratedColorAr: 'وردي شاحب (3d⁵)',
    colorHex: '#f472b6',
  },
  {
    z: 26,
    symbol: 'Fe',
    nameEn: 'Iron',
    nameAr: 'الحديد',
    electronConfig: '[Ar] 4s² 3d⁶',
    oxidationStates: [2, 3],
    selectedOxState: 3,
    unpairedElectrons: 5,
    hydratedColorEn: 'Yellow / Brown (3d⁵)',
    hydratedColorAr: 'أصفر بني (3d⁵)',
    colorHex: '#eab308',
  },
  {
    z: 27,
    symbol: 'Co',
    nameEn: 'Cobalt',
    nameAr: 'الكوبالت',
    electronConfig: '[Ar] 4s² 3d⁷',
    oxidationStates: [2, 3],
    selectedOxState: 2,
    unpairedElectrons: 3,
    hydratedColorEn: 'Pink / Red (3d⁷)',
    hydratedColorAr: 'وردي / أحمر (3d⁷)',
    colorHex: '#fb7185',
  },
  {
    z: 28,
    symbol: 'Ni',
    nameEn: 'Nickel',
    nameAr: 'النيكل',
    electronConfig: '[Ar] 4s² 3d⁸',
    oxidationStates: [2, 3],
    selectedOxState: 2,
    unpairedElectrons: 2,
    hydratedColorEn: 'Green (3d⁸)',
    hydratedColorAr: 'أخضر (3d⁸)',
    colorHex: '#10b981',
  },
  {
    z: 29,
    symbol: 'Cu',
    nameEn: 'Copper',
    nameAr: 'النحاس',
    electronConfig: '[Ar] 4s¹ 3d¹⁰ (Anomalous / شاذ)',
    anomalous: true,
    oxidationStates: [1, 2],
    selectedOxState: 2,
    unpairedElectrons: 1,
    hydratedColorEn: 'Deep Blue (3d⁹)',
    hydratedColorAr: 'أزرق داكن (3d⁹)',
    colorHex: '#2563eb',
  },
  {
    z: 30,
    symbol: 'Zn',
    nameEn: 'Zinc',
    nameAr: 'الخارصين',
    electronConfig: '[Ar] 4s² 3d¹⁰ (Non-transition)',
    oxidationStates: [2],
    selectedOxState: 2,
    unpairedElectrons: 0,
    hydratedColorEn: 'Colorless (3d¹⁰)',
    hydratedColorAr: 'عديم اللون (3d¹⁰)',
    colorHex: '#e2e8f0',
  },
];

export const ChemistryLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<ChemTab>('equilibrium');

  // Equilibrium State
  const [reactionType, setReactionType] = useState<'no2' | 'haber' | 'iron_thiocyanate'>('no2');
  const [temperatureKelvin, setTemperatureKelvin] = useState<number>(298); // 273K to 450K
  const [pressureAtm, setPressureAtm] = useState<number>(1.0); // 0.5 to 5.0 atm
  const [reactantAddition, setReactantAddition] = useState<number>(1.0); // multiplier

  // Transition Metals State
  const [selectedMetal, setSelectedMetal] = useState<TransitionElement>(TRANSITION_METALS[5]); // Iron
  const [furnaceTemp, setFurnaceTemp] = useState<number>(650); // °C

  // Titration State
  const [titrantVolumeMl, setTitrantVolumeMl] = useState<number>(25.0); // 0 to 50 mL

  // Calculations for Equilibrium
  // For 2NO2 (brown) <=> N2O4 (colorless) + Heat (exothermic)
  // Higher temp -> shifts Left (more brown NO2)
  // Higher pressure -> shifts Right (fewer moles: 2 -> 1, more colorless N2O4)
  let shiftDirectionEn = 'At Dynamic Equilibrium';
  let shiftDirectionAr = 'في حالة اتزان ديناميكي مستقر';
  let vesselColorRgba = 'rgba(180, 83, 9, 0.4)'; // default amber/brown

  if (reactionType === 'no2') {
    // Brown intensity increases with T, decreases with P
    const brownIndex = Math.min(1.0, Math.max(0.1, (temperatureKelvin - 250) / 180 / pressureAtm));
    vesselColorRgba = `rgba(180, 83, 9, ${brownIndex.toFixed(2)})`;
    if (temperatureKelvin > 310 || pressureAtm < 0.9) {
      shiftDirectionEn = 'Shifts Left (Reverse: forming NO₂ brown)';
      shiftDirectionAr = 'ينشط في الاتجاه العكسي (تكوين NO₂ بني محمر)';
    } else if (temperatureKelvin < 285 || pressureAtm > 1.2) {
      shiftDirectionEn = 'Shifts Right (Forward: forming N₂O₄ colorless)';
      shiftDirectionAr = 'ينشط في الاتجاه الطردي (تكوين N₂O₄ عديم اللون)';
    }
  } else if (reactionType === 'haber') {
    // N2 + 3H2 <=> 2NH3 + Heat
    if (temperatureKelvin > 320 || pressureAtm < 0.9) {
      shiftDirectionEn = 'Shifts Left (Decomposing NH₃)';
      shiftDirectionAr = 'ينشط في الاتجاه العكسي (تفكك غاز النشادر)';
    } else {
      shiftDirectionEn = 'Shifts Right (Synthesizing NH₃)';
      shiftDirectionAr = 'ينشط في الاتجاه الطردي (تكوين غاز النشادر)';
    }
    vesselColorRgba = 'rgba(56, 189, 248, 0.25)';
  } else {
    // Fe3+ + SCN- <=> [Fe(SCN)]2+ (blood red)
    const redIntensity = Math.min(0.9, 0.2 * reactantAddition);
    vesselColorRgba = `rgba(220, 38, 38, ${redIntensity.toFixed(2)})`;
    shiftDirectionEn = reactantAddition > 1.2 ? 'Shifts Right (Deepening Blood Red)' : 'At Equilibrium';
    shiftDirectionAr = reactantAddition > 1.2 ? 'ينشط طردياً نحو تكوين لون أحمر دموي داكن' : 'في حالة اتزان';
  }

  // Magnetic Moment: mu = sqrt(n*(n+2)) BM
  const n = selectedMetal.unpairedElectrons;
  const magneticMomentBM = Math.sqrt(n * (n + 2));
  const isParamagnetic = n > 0;

  // Blast Furnace Zone Reduction Status
  let reductionStageEn = '';
  let reductionStageAr = '';
  let productFormed = '';
  if (furnaceTemp < 400) {
    reductionStageEn = 'Upper Stack (230-300°C): 3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂';
    reductionStageAr = 'أعلى الفرن (٢٣٠-٣٠٠°س): اختزال الهيماتيت إلى الماجنتيت الأسود';
    productFormed = 'Fe₃O₄ (Magnetic oxide)';
  } else if (furnaceTemp <= 700) {
    reductionStageEn = 'Middle Stack (400-700°C): Fe₃O₄ + CO → 3FeO + CO₂';
    reductionStageAr = 'وسط الفرن (٤٠٠-٧٠٠°س): اختزال الماجنتيت إلى أكسيد الحديد الثنائي';
    productFormed = 'FeO (Iron II oxide)';
  } else {
    reductionStageEn = 'Lower Hearth (>700°C): FeO + CO → Fe + CO₂ & CaCO₃ Slag';
    reductionStageAr = 'قاع الفرن (>٧٠٠°س): اختزال تام إلى حديد منصهر وخَبَث CaSiO₃';
    productFormed = 'Molten Pig Iron (Fe) + Slag';
  }

  // Titration pH Calculation (Strong Acid HCl 0.1M, 25mL titrated with NaOH 0.1M)
  // Equivalence point at 25mL
  let currentPh = 7.0;
  let indicatorColor = '#22c55e'; // Green at neutral
  if (titrantVolumeMl < 24.9) {
    // Acidic
    const excessH = (25 - titrantVolumeMl) * 0.1 / (25 + titrantVolumeMl);
    currentPh = Math.max(1.0, -Math.log10(excessH));
    indicatorColor = '#ef4444'; // Red/Pink (Methyl orange / Acid)
  } else if (titrantVolumeMl > 25.1) {
    // Basic
    const excessOH = (titrantVolumeMl - 25) * 0.1 / (25 + titrantVolumeMl);
    const pOH = -Math.log10(excessOH);
    currentPh = Math.min(13.0, 14 - pOH);
    indicatorColor = '#ec4899'; // Phenolphthalein pink
  } else {
    currentPh = 7.0;
    indicatorColor = '#22c55e';
  }

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-emerald-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
              isContrast
                ? 'bg-black border-emerald-400 text-emerald-400'
                : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-emerald-400/40 shadow-emerald-500/20'
            }`}
          >
            <FlaskConical className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                {isArabic ? 'مختبر الكيمياء والاتزان والعناصر الانتقالية التفاعلي' : 'Virtual Chemistry & Transition Kinetics Lab'}
              </h2>
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                  isContrast
                    ? 'bg-emerald-400 text-black border-emerald-300'
                    : isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                }`}
              >
                Le Chatelier & 3d Crucible
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic
                ? 'محاكي قاعدة لوشاتيليه والاتزان الكيميائي، استوديو العناصر الانتقالية وتعدين الحديد، ومحاكي منحنيات المعايرة'
                : 'Le Chatelier equilibrium simulator, 3d transition metals orbital studio, and acid-base titration engine'}
            </p>
          </div>
        </div>

        {/* Subtabs */}
        <div
          className={`flex items-center p-1 rounded-xl border self-stretch md:self-auto overflow-x-auto ${
            isContrast
              ? 'bg-black border-emerald-400'
              : isLight
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          <button
            onClick={() => setActiveTab('equilibrium')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'equilibrium'
                ? isContrast
                  ? 'bg-emerald-400 text-black font-black'
                  : 'bg-emerald-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الاتزان وقاعدة لوشاتيليه' : 'Le Chatelier Equilibrium'}</span>
          </button>

          <button
            onClick={() => setActiveTab('transition')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'transition'
                ? isContrast
                  ? 'bg-emerald-400 text-black font-black'
                  : 'bg-emerald-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{isArabic ? 'العناصر الانتقالية وتعدين الحديد' : 'Transition Metals & Iron'}</span>
          </button>

          <button
            onClick={() => setActiveTab('titration')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'titration'
                ? isContrast
                  ? 'bg-emerald-400 text-black font-black'
                  : 'bg-emerald-600 text-white font-extrabold shadow-sm'
                : isLight
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>{isArabic ? 'الرقم الهيدروجيني والمعايرة' : 'pH & Titration'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: EQUILIBRIUM & LE CHATELIER */}
      {activeTab === 'equilibrium' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Reaction Vessel & Disturbance Controls */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`p-5 rounded-2xl border ${
                isContrast
                  ? 'bg-black border-emerald-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-black flex items-center gap-1.5 text-emerald-400">
                    <Scale className="w-4 h-4" />
                    <span>{isArabic ? 'وعاء التفاعل الديناميكي ومحاكاة تغير الألوان:' : 'Dynamic Reaction Vessel & Color Plane:'}</span>
                  </h4>
                </div>

                <div className="flex items-center gap-1">
                  {[
                    { id: 'no2', label: '2NO₂ ⇌ N₂O₄' },
                    { id: 'haber', label: 'N₂ + 3H₂ ⇌ 2NH₃' },
                    { id: 'iron_thiocyanate', label: 'Fe³⁺ + SCN⁻' },
                  ].map((rx) => (
                    <button
                      key={rx.id}
                      onClick={() => setReactionType(rx.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        reactionType === rx.id
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {rx.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Vessel SVG */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 540 220" className="w-full max-w-[520px] h-48 sm:h-56">
                  {/* Cylinder Vessel */}
                  <rect
                    x="160"
                    y="25"
                    width="220"
                    height="170"
                    rx="18"
                    fill={vesselColorRgba}
                    stroke="#10b981"
                    strokeWidth="2.5"
                    className="transition-colors duration-500"
                  />

                  {/* Piston Head */}
                  <rect
                    x="165"
                    y={30 + (5.0 - pressureAtm) * 8}
                    width="210"
                    height="16"
                    rx="4"
                    fill="#475569"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="270"
                    y1={30 + (5.0 - pressureAtm) * 8}
                    x2="270"
                    y2="15"
                    stroke="#94a3b8"
                    strokeWidth="4"
                  />

                  {/* Chemical Contents Text */}
                  <text x="270" y="90" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="black">
                    {reactionType === 'no2'
                      ? '2NO₂ (Brown) ⇌ N₂O₄ (Colorless) + Heat'
                      : reactionType === 'haber'
                      ? 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92 kJ'
                      : 'Fe³⁺(Yellow) + SCN⁻ ⇌ [Fe(SCN)]²⁺ (Red)'}
                  </text>

                  {/* Status Overlay */}
                  <text x="270" y="125" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="bold">
                    {isArabic ? shiftDirectionAr : shiftDirectionEn}
                  </text>

                  <text x="270" y="155" textAnchor="middle" fill="#cbd5e1" fontSize="10">
                    T = {temperatureKelvin} K ({temperatureKelvin - 273}°C) | P = {pressureAtm.toFixed(1)} atm
                  </text>
                </svg>
              </div>

              {/* Sliders Grid */}
              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Temperature */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'درجة الحرارة T:' : 'Temperature (T):'}</span>
                    <span className="font-mono font-black text-rose-400">{temperatureKelvin} K</span>
                  </div>
                  <input
                    type="range"
                    min="273"
                    max="450"
                    value={temperatureKelvin}
                    onChange={(e) => setTemperatureKelvin(parseInt(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {temperatureKelvin > 300
                      ? isArabic
                        ? 'تسخين: يزيح التفاعل الطارد عكسياً'
                        : 'Heating: Shifts Exothermic reaction Left'
                      : isArabic
                      ? 'تبريد: يزيح التفاعل الطارد طردياً'
                      : 'Cooling: Shifts Exothermic reaction Right'}
                  </p>
                </div>

                {/* Pressure / Volume */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'الضغط P:' : 'Pressure (P):'}</span>
                    <span className="font-mono font-black text-cyan-400">{pressureAtm.toFixed(1)} atm</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.1"
                    value={pressureAtm}
                    onChange={(e) => setPressureAtm(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic ? 'زيادة الضغط تزيح نحو عدد المولات الأقل' : 'High P shifts toward fewer gaseous moles'}
                  </p>
                </div>

                {/* Reactant Concentration */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-slate-300">{isArabic ? 'إضافة متفاعلات:' : 'Reactant Dose:'}</span>
                    <span className="font-mono font-black text-emerald-400">{reactantAddition.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={reactantAddition}
                    onChange={(e) => setReactantAddition(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isArabic ? 'إضافة متفاعل تزيح التفاعل طردياً لاستهلاكه' : 'Adding reactant drives reaction forward'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Le Chatelier Rules Card */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-black text-emerald-400 mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isArabic ? 'نص وقواعد قاعدة لوشاتيليه الوزارية:' : 'Le Chatelier Principles & Rules:'}</span>
              </h4>

              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {isArabic
                  ? '«إذا حدث تغير في أحد العوامل المؤثرة على نظام في حالة اتزان (مثل التركيز أو الضغط أو درجة الحرارة)، فإن النظام ينشط في الاتجاه الذي يقلل أو يلغي تأثير هذا التغير».'
                  : 'If a dynamic equilibrium is disturbed by changing the conditions (concentration, temperature, or pressure), the position of equilibrium moves to counteract the change.'}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="font-bold text-rose-400">{isArabic ? 'أثر درجة الحرارة (T):' : 'Temperature Effect:'}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {isArabic
                      ? 'العامل الوحيد الذي يغير قيمة ثابت الاتزان Kc! في التفاعل الطارد: رفع الحرارة يقلل Kc.'
                      : 'The ONLY factor that changes Kc! In exothermic reactions, heating decreases Kc.'}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="font-bold text-cyan-400">{isArabic ? 'أثر الضغط (P):' : 'Pressure Effect:'}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {isArabic
                      ? 'يؤثر فقط إذا كان عدد مولات الغازات المتفاعلة يختلف عن الناتجة. لا يغير قيمة Kc.'
                      : 'Affects systems with unequal gaseous moles. Does not alter the value of Kc.'}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="font-bold text-amber-400">{isArabic ? 'العامل الحفاز (Catalyst):' : 'Catalyst Effect:'}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {isArabic
                      ? 'يزيد سرعة التفاعلين الطردي والعكسي بنفس المقدار، فيصل بالنظام للاتزان أسرع دون تغيير موضعه أو قيمة Kc.'
                      : 'Accelerates both forward and reverse rates equally; reaches equilibrium faster without shifting position.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TRANSITION METALS & BLAST FURNACE */}
      {activeTab === 'transition' && (
        <div className="mt-6 space-y-6">
          {/* 3d Periodic Selector Strip */}
          <div
            className={`p-4 rounded-2xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>{isArabic ? 'شريط عناصر السلسلة الانتقالية الأولى (3d):' : 'First Transition Series Elements (3d):'}</span>
              </h4>
              <span className="text-[10px] text-slate-400">
                {isArabic ? 'اختر عنصراً لفحص تركيبه الإلكتروني وخاصيته المغناطيسية' : 'Select metal to inspect orbital spin and magnetism'}
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {TRANSITION_METALS.map((metal) => {
                const isSelected = selectedMetal.z === metal.z;
                return (
                  <button
                    key={metal.z}
                    onClick={() => setSelectedMetal(metal)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md scale-105'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500/50'
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-60">{metal.z}</span>
                    <span className="text-sm font-black">{metal.symbol}</span>
                    <span className="text-[9px] truncate max-w-full">{isArabic ? metal.nameAr : metal.nameEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Metal Detailed Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Electron Orbitals & Magnetic Moment */}
            <div
              className={`lg:col-span-6 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-emerald-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black">{isArabic ? selectedMetal.nameAr : selectedMetal.nameEn} ({selectedMetal.symbol})</h3>
                    {selectedMetal.anomalous && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        {isArabic ? 'توزيع إلكتروني شاذ' : 'Anomalous Config'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">{selectedMetal.electronConfig}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-xl border shadow-inner flex items-center justify-center"
                  style={{ backgroundColor: selectedMetal.colorHex }}
                  title="Hydrated Ion Color"
                />
              </div>

              {/* Orbital Box Diagram */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-300 block">
                  {isArabic ? 'رسم أوربيتالات المستويين 4s و 3d (قاعدة هوند):' : 'Orbital Box Filling (Hund\'s Rule):'}
                </span>

                <div className="flex items-center gap-4 pt-1 font-mono">
                  {/* 4s box */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-300">
                      {selectedMetal.anomalous ? '↑' : selectedMetal.z === 21 ? '↑↓' : '↑↓'}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">4s</span>
                  </div>

                  {/* 3d boxes (5 boxes) */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((boxIdx) => (
                        <div
                          key={`3d-${boxIdx}`}
                          className="w-8 h-8 rounded-lg border-2 border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-300"
                        >
                          {boxIdx <= selectedMetal.unpairedElectrons ? '↑' : selectedMetal.unpairedElectrons >= 5 ? '↑↓' : ''}
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">3d (5 orbitals)</span>
                  </div>
                </div>
              </div>

              {/* Magnetic Properties */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{isArabic ? 'الإلكترونات المفردة (n):' : 'Unpaired Electrons (n):'}</span>
                  <span className="text-base font-black text-cyan-400 mt-0.5 block">{n}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{isArabic ? 'العزم المغناطيسي (µ):' : 'Magnetic Moment (µ):'}</span>
                  <span className="text-base font-black text-rose-400 mt-0.5 block">
                    {magneticMomentBM.toFixed(2)} BM
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs">
                <span className="font-bold text-emerald-300 block">
                  {isParamagnetic
                    ? isArabic
                      ? 'مادة بارامغناطيسية (تنجذب للمجال المغناطيسي الخارجي لوجود إلكترونات مفردة)'
                      : 'Paramagnetic: Attracted to external magnetic field due to unpaired spins'
                    : isArabic
                    ? 'مادة دايامغناطيسية (تتنافر مع المجال المغناطيسي لعدم وجود إلكترونات مفردة)'
                    : 'Diamagnetic: Repelled by magnetic field (all electrons paired)'}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {isArabic ? `لون الأيون المائي الشائع: ${selectedMetal.hydratedColorAr}` : `Common hydrated ion color: ${selectedMetal.hydratedColorEn}`}
                </span>
              </div>
            </div>

            {/* Right: Blast Furnace / Midrex Iron Reduction Crucible */}
            <div
              className={`lg:col-span-6 p-5 rounded-2xl border space-y-4 ${
                isContrast
                  ? 'bg-black border-emerald-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black flex items-center gap-1.5 text-amber-400">
                  <Flame className="w-4 h-4" />
                  <span>{isArabic ? 'محاكي أفران استخلاص وتعدين الحديد (الفرن العالي ومدركس):' : 'Iron Metallurgy & Reduction Crucible:'}</span>
                </h4>
                <span className="text-xs font-mono font-black text-amber-400">{furnaceTemp} °C</span>
              </div>

              <input
                type="range"
                min="200"
                max="900"
                step="25"
                value={furnaceTemp}
                onChange={(e) => setFurnaceTemp(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />

              {/* Reduction Status Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isArabic ? 'المركب الناتج في هذه الحرارة:' : 'Product Formed:'}</span>
                  <span className="font-mono font-black text-emerald-400 text-sm">{productFormed}</span>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 font-mono text-[11px]">
                  {isArabic ? reductionStageAr : reductionStageEn}
                </div>
              </div>

              {/* Ministerial Metallurgy Laws */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1 text-slate-300">
                <p className="font-bold text-amber-300">
                  {isArabic ? 'مقارنة الفرن العالي وفرن مدركس (أسئلة وزارية متكررة):' : 'Blast Furnace vs Midrex Key Comparison:'}
                </p>
                <ul className="list-disc list-inside text-[11px] space-y-1 text-slate-400 pt-1">
                  <li>{isArabic ? 'العامل المختزل في الفرن العالي: غاز أول أكسيد الكربون (CO) المحضر من فحم الكوك' : 'Blast furnace reducing agent: CO prepared from metallurgical coke'}</li>
                  <li>{isArabic ? 'العامل المختزل في فرن مدركس: الغاز المائي (خليط CO و H₂) المحضر من الغاز الطبيعي (الميثان CH₄)' : 'Midrex reducing agent: Water gas (CO + H₂) from natural methane'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TITRATION & PH */}
      {activeTab === 'titration' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Buret & Titration Curve */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`p-5 rounded-2xl border ${
                isContrast
                  ? 'bg-black border-emerald-400'
                  : isLight
                  ? 'bg-slate-50 border-slate-300'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-black flex items-center gap-2 text-emerald-400">
                  <Droplets className="w-4 h-4" />
                  <span>{isArabic ? 'محاكاة السحاحة والدورق المخروطي ومنحنى المعايرة:' : 'Buret Titration & Dynamic pH Curve:'}</span>
                </h4>
                <span className="text-xs font-mono font-black text-cyan-400">
                  V(NaOH) = {titrantVolumeMl.toFixed(1)} mL
                </span>
              </div>

              {/* Titration Apparatus SVG */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner flex items-center justify-center">
                <svg viewBox="0 0 540 220" className="w-full max-w-[520px] h-48 sm:h-56">
                  {/* Buret Tube */}
                  <rect x="250" y="20" width="20" height="110" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                  <rect
                    x="252"
                    y={20 + (titrantVolumeMl / 50) * 90}
                    width="16"
                    height={90 - (titrantVolumeMl / 50) * 90}
                    fill="#38bdf8"
                    fillOpacity="0.6"
                  />
                  {/* Stopcock */}
                  <circle cx="260" cy="135" r="4" fill="#94a3b8" />

                  {/* Falling Drop */}
                  <circle cx="260" cy="148" r="2.5" fill="#38bdf8" className="animate-bounce" />

                  {/* Conical Flask */}
                  <path
                    d="M 245 155 L 275 155 L 305 200 L 215 200 Z"
                    fill={indicatorColor}
                    fillOpacity="0.4"
                    stroke="#10b981"
                    strokeWidth="2"
                  />

                  {/* pH Indicator Display */}
                  <rect x="360" y="70" width="120" height="70" rx="8" fill="#020617" stroke="#10b981" strokeWidth="1.5" />
                  <text x="420" y="92" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    pH METER
                  </text>
                  <text x="420" y="122" textAnchor="middle" fill={indicatorColor} fontSize="22" fontWeight="black" fontFamily="monospace">
                    {currentPh.toFixed(2)}
                  </text>
                </svg>
              </div>

              {/* Titrant Slider */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-slate-300">
                    {isArabic ? 'حجم القاعدة المضاف من السحاحة (mL):' : 'Titrant Added from Buret (mL):'}
                  </span>
                  <span className="font-mono font-black text-cyan-400">{titrantVolumeMl.toFixed(1)} / 50.0 mL</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="0.5"
                  value={titrantVolumeMl}
                  onChange={(e) => setTitrantVolumeMl(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right: pH Status Card */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <h4 className="text-xs font-black text-emerald-400 mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isArabic ? 'نقطة التكافؤ ومحاليل المنظم (بفر):' : 'Equivalence Point & Buffer Action:'}</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'الرقم الهيدروجيني الحالي (pH):' : 'Current pH:'}</span>
                  <span className="font-mono font-black text-base" style={{ color: indicatorColor }}>
                    {currentPh.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-300 font-bold">{isArabic ? 'حالة الوسط:' : 'Medium Status:'}</span>
                  <span className="font-bold text-slate-200">
                    {currentPh < 6.8
                      ? isArabic ? 'حمضي (أحمر / برتقالي)' : 'Acidic'
                      : currentPh > 7.2
                      ? isArabic ? 'قاعدي (وردي)' : 'Basic'
                      : isArabic ? 'نقطة التكافؤ (متعادل pH = 7)' : 'Equivalence Point (pH 7)'}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-emerald-300">
                  {isArabic ? 'معادلة هندرسون-هاسلبالخ لمحاليل المنظم:' : 'Henderson-Hasselbalch Buffer Equation:'}
                </p>
                <p className="font-mono text-[11px] text-cyan-300">pH = pKa + log([A⁻] / [HA])</p>
                <p className="text-[10px] text-slate-400">
                  {isArabic ? 'يقاوم المحلول المنظم التغير المفاجئ في الرقم الهيدروجيني عند إضافة كميات قليلة من حمض أو قاعدة.' : 'Buffers resist sudden pH shifts upon minor addition of acids or bases.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
