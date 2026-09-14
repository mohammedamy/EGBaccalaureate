import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  FlaskConical,
  Flame,
  Layers,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import { EquilibriumLab } from './EquilibriumLab';
import { ElectrochemistryLab } from './ElectrochemistryLab';
import { OrganicChemistryLab } from './OrganicChemistryLab';
import { QualitativeAnalysisLab } from './QualitativeAnalysisLab';
import { TitrationLab } from './TitrationLab';
import { ChemistryFlashcards } from './ChemistryFlashcards';
import { ChemistryConstantsDrawer } from './ChemistryConstantsDrawer';

export type ChemTab =
  | 'equilibrium'
  | 'transition'
  | 'qualitative'
  | 'titration'
  | 'electrochemistry'
  | 'organic'
  | 'flashcards';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  initialTab?: ChemTab;
}

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

export const ChemistryLab: React.FC<Props> = ({ lang, theme = 'dark', initialTab }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeTab, setActiveTab] = useState<ChemTab>(initialTab || 'equilibrium');
  const [isConstantsOpen, setIsConstantsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Transition Metals State
  const [selectedMetal, setSelectedMetal] = useState<TransitionElement>(TRANSITION_METALS[5]); // Iron
  const [furnaceTemp, setFurnaceTemp] = useState<number>(650); // °C

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

        {/* Action Controls: Constants Button + Subtabs */}
        <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto">
          <button
            onClick={() => setIsConstantsOpen(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm ${
              isContrast
                ? 'bg-black border-cyan-400 text-cyan-400 hover:bg-cyan-950'
                : isLight
                ? 'bg-cyan-50 border-cyan-300 text-cyan-800 hover:bg-cyan-100'
                : 'bg-cyan-950/40 border-cyan-700/60 text-cyan-300 hover:bg-cyan-900/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isArabic ? 'ثوابت وقوانين الكيمياء' : 'Constants & Calculators'}</span>
          </button>

          {/* Subtabs Dropdown */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as ChemTab)}
              className={`w-full appearance-none pl-3.5 pr-9 rtl:pr-3.5 rtl:pl-9 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                isContrast
                  ? 'bg-black text-white border-emerald-400'
                  : isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              <option value="equilibrium" className="bg-slate-900 text-white">
                ⚖️ {isArabic ? 'الاتزان الكيميائي وقاعدة لوشاتيليه' : 'Equilibrium & Le Chatelier'}
              </option>
              <option value="transition" className="bg-slate-900 text-white">
                🔥 {isArabic ? 'العناصر الانتقالية وخامات الحديد' : 'Transition Elements & Iron'}
              </option>
              <option value="qualitative" className="bg-slate-900 text-white">
                🧪 {isArabic ? 'التحليل الوصفي والكواشف المخبرية' : 'Qualitative Chemical Analysis'}
              </option>
              <option value="titration" className="bg-slate-900 text-white">
                💧 {isArabic ? 'معايرة الأحماض والقواعد و pH' : 'pH Curve & Titration'}
              </option>
              <option value="electrochemistry" className="bg-slate-900 text-white">
                🔋 {isArabic ? 'الكيمياء الكهربية والخلايا الجلفانية' : 'Electrochemistry & Cells'}
              </option>
              <option value="organic" className="bg-slate-900 text-white">
                ⚗️ {isArabic ? 'الكيمياء العضوية ومسارات التخليق' : 'Organic Synthetic Roadmaps'}
              </option>
              <option value="flashcards" className="bg-slate-900 text-white">
                🗂️ {isArabic ? 'كروت المراجعة والكواشف الذكية' : 'Review & Flashcards'}
              </option>
            </select>
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* TAB 1: EQUILIBRIUM & LE CHATELIER VIRTUAL LAB */}
      {activeTab === 'equilibrium' && (
        <div className="mt-4">
          <EquilibriumLab lang={lang} theme={theme} />
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
        <div className="mt-6">
          <TitrationLab lang={lang} theme={theme} />
        </div>
      )}


      {/* TAB 4: ELECTROCHEMISTRY & GALVANIC CELLS */}
      {activeTab === 'electrochemistry' && (
        <div className="mt-6">
          <ElectrochemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 5: QUALITATIVE ANALYSIS & CHEMICAL DETECTION */}
      {activeTab === 'qualitative' && (
        <div className="mt-6">
          <QualitativeAnalysisLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 6: ORGANIC CHEMISTRY ROADMAPS & MECHANISMS */}
      {activeTab === 'organic' && (
        <div className="mt-6">
          <OrganicChemistryLab lang={lang} theme={theme} />
        </div>
      )}

      {/* TAB 7: CHEMISTRY FLASHCARDS & REAGENT CHALLENGE */}
      {activeTab === 'flashcards' && (
        <div className="mt-6">
          <ChemistryFlashcards lang={lang} theme={theme} />
        </div>
      )}

      {/* Slide-over Chemistry Constants & Live Calculators Drawer */}
      <ChemistryConstantsDrawer
        isOpen={isConstantsOpen}
        onClose={() => setIsConstantsOpen(false)}
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
