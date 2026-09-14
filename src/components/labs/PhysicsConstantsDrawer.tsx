import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Copy,
  Check,
  ArrowRightLeft,
  BookOpen,
  X,
  Calculator,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isOpen: boolean;
  onClose: () => void;
}

interface PhysicalConstant {
  symbol: string;
  nameEn: string;
  nameAr: string;
  value: string;
  unit: string;
  formula: string;
  numericVal: number;
}

const PHYSICAL_CONSTANTS: PhysicalConstant[] = [
  {
    symbol: 'c',
    nameEn: 'Speed of Light in Vacuum',
    nameAr: 'سرعة الضوء في الفراغ',
    value: '3.00 × 10⁸',
    unit: 'm/s',
    formula: 'c = ν · λ',
    numericVal: 3.0e8,
  },
  {
    symbol: 'h',
    nameEn: "Planck's Constant",
    nameAr: 'ثابت بلانك',
    value: '6.626 × 10⁻³⁴',
    unit: 'J · s (4.136 × 10⁻¹⁵ eV·s)',
    formula: 'E = h · ν = hc / λ',
    numericVal: 6.626e-34,
  },
  {
    symbol: 'e',
    nameEn: 'Elementary Charge',
    nameAr: 'شحنة الإلكترون الأولية',
    value: '1.602 × 10⁻¹⁹',
    unit: 'C',
    formula: 'q = n · e',
    numericVal: 1.602e-19,
  },
  {
    symbol: 'm_e',
    nameEn: 'Electron Rest Mass',
    nameAr: 'كتلة سكون الإلكترون',
    value: '9.109 × 10⁻³¹',
    unit: 'kg',
    formula: 'λ = h / (m_e · v)',
    numericVal: 9.109e-31,
  },
  {
    symbol: 'm_p',
    nameEn: 'Proton Rest Mass',
    nameAr: 'كتلة البروتون',
    value: '1.673 × 10⁻²⁷',
    unit: 'kg (1.007276 u)',
    formula: 'E = m · c²',
    numericVal: 1.673e-27,
  },
  {
    symbol: 'μ₀',
    nameEn: 'Permeability of Free Space',
    nameAr: 'معامل النفاذية المغناطيسية للفراغ',
    value: '4π × 10⁻⁷ ≈ 1.257 × 10⁻⁶',
    unit: 'T · m / A (H / m)',
    formula: 'B = (μ₀ · I) / (2π · d)',
    numericVal: 1.256637e-6,
  },
  {
    symbol: 'ε₀',
    nameEn: 'Permittivity of Free Space',
    nameAr: 'سماحية الفراغ الكهربية',
    value: '8.854 × 10⁻¹²',
    unit: 'F / m (C² / N·m²)',
    formula: 'C = ε₀ · A / d',
    numericVal: 8.854e-12,
  },
  {
    symbol: 'R_H',
    nameEn: 'Rydberg Constant',
    nameAr: 'ثابت ريدبرج',
    value: '1.09737 × 10⁷',
    unit: 'm⁻¹',
    formula: '1/λ = R_H (1/n₁² - 1/n₂²)',
    numericVal: 1.09737e7,
  },
  {
    symbol: 'k_B',
    nameEn: 'Boltzmann Constant',
    nameAr: 'ثابت بولتزمان',
    value: '1.381 × 10⁻²³',
    unit: 'J / K',
    formula: 'E_avg = (3/2) k_B · T',
    numericVal: 1.381e-23,
  },
  {
    symbol: '1 u',
    nameEn: 'Atomic Mass Unit',
    nameAr: 'وحدة الكتل الذرية',
    value: '1.6605 × 10⁻²⁷ kg',
    unit: '931.5 MeV / c²',
    formula: 'ΔE (MeV) = Δm (u) × 931.5',
    numericVal: 931.5,
  },
];

export const PhysicsConstantsDrawer: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isOpen,
  onClose,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  // Live Unit Converter States
  // 1. eV <-> Joules
  const [evVal, setEvVal] = useState<string>('2.5');
  const [jouleVal, setJouleVal] = useState<string>('4.005e-19');

  // 2. Wavelength nm -> Photon Energy eV & freq Hz
  const [lambdaNm, setLambdaNm] = useState<string>('500');

  // 3. Tesla <-> Gauss
  const [teslaVal, setTeslaVal] = useState<string>('0.05');
  const [gaussVal, setGaussVal] = useState<string>('500');

  // Copy handler
  const handleCopy = (symbol: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedSymbol(symbol);
    setTimeout(() => {
      setCopiedSymbol(null);
    }, 1800);
  };

  // Convert eV to J
  const handleEvChange = (val: string) => {
    setEvVal(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const j = num * 1.60218e-19;
      setJouleVal(j.toExponential(4));
    } else {
      setJouleVal('');
    }
  };

  // Convert J to eV
  const handleJouleChange = (val: string) => {
    setJouleVal(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const ev = num / 1.60218e-19;
      setEvVal(ev.toFixed(4));
    } else {
      setEvVal('');
    }
  };

  // Convert Tesla to Gauss
  const handleTeslaChange = (val: string) => {
    setTeslaVal(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setGaussVal((num * 10000).toString());
    } else {
      setGaussVal('');
    }
  };

  // Convert Gauss to Tesla
  const handleGaussChange = (val: string) => {
    setGaussVal(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setTeslaVal((num / 10000).toString());
    } else {
      setTeslaVal('');
    }
  };

  // Derived quantum values from wavelength in nm
  const lambdaNum = parseFloat(lambdaNm);
  let photonEnergyEv = '0.00';
  let photonEnergyJ = '0.00';
  let photonFreqHz = '0.00';
  if (!isNaN(lambdaNum) && lambdaNum > 0) {
    const energyEv = 1240 / lambdaNum;
    const energyJ = (6.626e-34 * 3.0e8) / (lambdaNum * 1e-9);
    const freq = 3.0e8 / (lambdaNum * 1e-9);
    photonEnergyEv = energyEv.toFixed(3);
    photonEnergyJ = energyJ.toExponential(3);
    photonFreqHz = freq.toExponential(3);
  }

  if (!isOpen) return null;

  return (
    <div
      className={`mb-6 p-5 rounded-2xl border transition-all animate-fadeIn ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/95 border-cyan-800/80 shadow-2xl backdrop-blur-md text-slate-100'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black flex items-center gap-2">
              <span>{isArabic ? 'الثوابت الفيزيائية والمحول الذكي للوحدات' : 'Physical Constants & Smart Unit Converter'}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {isArabic ? 'مرجع معتمد' : 'Standard Reference'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'ثوابت الثانوية العامة والـ STEM مع محول فوري للطاقة الكهروضوئية والتردد والمغناطيسية'
                : 'Essential constants for Thanaweya Amma & STEM with instant quantum energy & magnetic converters'}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
            isLight
              ? 'border-slate-200 hover:bg-slate-100 text-slate-600'
              : 'border-slate-700 hover:bg-slate-800 text-slate-300'
          }`}
          title={isArabic ? 'إغلاق' : 'Close'}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT / TOP: Constants Grid (8 cols) */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'الثوابت الفيزيائية الأساسية:' : 'Fundamental Physical Constants:'}</span>
            </h4>
            <span className="text-[11px] text-slate-400">
              {isArabic ? 'انقر لنسخ القيمة' : 'Click to copy value'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
            {PHYSICAL_CONSTANTS.map((c) => {
              const isCopied = copiedSymbol === c.symbol;
              return (
                <div
                  key={c.symbol}
                  className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                    isContrast
                      ? 'bg-slate-950 border-cyan-400'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-cyan-400'
                      : 'bg-slate-800/70 border-slate-700/80 hover:border-cyan-500/60'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 font-bold text-sm bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/60">
                          {c.symbol}
                        </span>
                        <span className="text-xs font-bold">
                          {isArabic ? c.nameAr : c.nameEn}
                        </span>
                      </div>
                      <div className="mt-1.5 font-mono text-xs font-extrabold text-amber-400">
                        {isArabic ? toHindiDigits(c.value) : c.value}{' '}
                        <span className="text-[11px] font-sans text-slate-400 font-normal">
                          {c.unit}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(c.symbol, `${c.symbol} = ${c.value} ${c.unit}`)}
                      className={`p-1 rounded border transition-colors cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                          : isLight
                          ? 'border-slate-300 hover:bg-slate-200 text-slate-500'
                          : 'border-slate-700 hover:bg-slate-700 text-slate-400'
                      }`}
                      title={isArabic ? 'نسخ القيمة' : 'Copy value'}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-cyan-300/90">{c.formula}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Live Unit Converter (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-1.5 mb-1">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400">
              {isArabic ? 'المحول الفيزيائي الحي:' : 'Live Physics Unit Converter:'}
            </h4>
          </div>

          {/* Section 1: eV <-> Joules */}
          <div
            className={`p-3.5 rounded-xl border ${
              isContrast
                ? 'bg-slate-950 border-cyan-400'
                : isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span>{isArabic ? 'طاقة: إلكترون فولت ↔ جول' : 'Energy: eV ↔ Joules'}</span>
              <ArrowRightLeft className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'إلكترون فولت (eV):' : 'Energy (eV):'}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={evVal}
                  onChange={(e) => handleEvChange(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'جول (J):' : 'Energy (Joules):'}
                </label>
                <input
                  type="text"
                  value={jouleVal}
                  onChange={(e) => handleJouleChange(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Wavelength -> Quantum Energy & Frequency */}
          <div
            className={`p-3.5 rounded-xl border ${
              isContrast
                ? 'bg-slate-950 border-cyan-400'
                : isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span>{isArabic ? 'الفوتون: الطول الموجي ➔ الطاقة' : 'Photon: λ (nm) ➔ Energy'}</span>
              <span className="text-[10px] text-cyan-400 font-mono">E = hc/λ</span>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'الطول الموجي λ (نانومتر):' : 'Wavelength λ (nm):'}
              </label>
              <input
                type="number"
                min="1"
                max="5000"
                value={lambdaNm}
                onChange={(e) => setLambdaNm(e.target.value)}
                className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                }`}
              />
            </div>

            <div className="mt-2.5 p-2 rounded bg-cyan-950/40 border border-cyan-800/50 text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'طاقة الفوتون:' : 'Photon Energy:'}</span>
                <span className="text-amber-400 font-bold">
                  {isArabic ? toHindiDigits(photonEnergyEv) : photonEnergyEv} eV
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'بالجول:' : 'In Joules:'}</span>
                <span className="text-cyan-300">
                  {isArabic ? toHindiDigits(photonEnergyJ) : photonEnergyJ} J
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'التردد ν:' : 'Frequency ν:'}</span>
                <span className="text-emerald-400">
                  {isArabic ? toHindiDigits(photonFreqHz) : photonFreqHz} Hz
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Tesla <-> Gauss */}
          <div
            className={`p-3.5 rounded-xl border ${
              isContrast
                ? 'bg-slate-950 border-cyan-400'
                : isLight
                ? 'bg-slate-50 border-slate-200'
                : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span>{isArabic ? 'المجال المغناطيسي: تسلا ↔ جاوس' : 'B-Field: Tesla ↔ Gauss'}</span>
              <span className="text-[10px] text-cyan-400 font-mono">1 T = 10⁴ G</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'تسلا (T):' : 'Tesla (T):'}
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={teslaVal}
                  onChange={(e) => handleTeslaChange(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'جاوس (G):' : 'Gauss (G):'}
                </label>
                <input
                  type="number"
                  step="100"
                  value={gaussVal}
                  onChange={(e) => handleGaussChange(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
