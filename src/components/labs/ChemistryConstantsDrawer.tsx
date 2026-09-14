import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Copy,
  Check,
  BookOpen,
  X,
  Calculator,
  Sparkles,
} from 'lucide-react';
import { MathRenderer } from '../MathRenderer';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isOpen: boolean;
  onClose: () => void;
}

interface ChemConstant {
  symbol: string;
  mathSymbol?: string;
  nameEn: string;
  nameAr: string;
  value: string;
  unit: string;
  formula: string;
}

const CHEMICAL_CONSTANTS: ChemConstant[] = [
  {
    symbol: 'R',
    mathSymbol: 'R',
    nameEn: 'Universal Gas Constant',
    nameAr: 'الثابت العام للغازات',
    value: '8.314 J/(mol·K) / 0.0821 L·atm/(mol·K)',
    unit: 'J/(mol·K)',
    formula: 'P \\cdot V = n \\cdot R \\cdot T',
  },
  {
    symbol: 'F',
    mathSymbol: 'F',
    nameEn: "Faraday's Constant",
    nameAr: 'ثابت فاراداي',
    value: '96,500',
    unit: 'C / mol e⁻ (Coulombs)',
    formula: 'Q = n \\cdot F = I \\cdot t',
  },
  {
    symbol: 'N_A',
    mathSymbol: 'N_A',
    nameEn: "Avogadro's Number",
    nameAr: 'عدد أفوجادرو',
    value: '6.022 × 10²³',
    unit: 'particles / mol',
    formula: 'N = n \\cdot N_A',
  },
  {
    symbol: 'V_m',
    mathSymbol: 'V_m',
    nameEn: 'Molar Gas Volume at STP',
    nameAr: 'حجم المول من الغاز عند م.ض.د (STP)',
    value: '22.4',
    unit: 'L / mol',
    formula: 'V = n \\times 22.4\\text{ L}',
  },
  {
    symbol: 'K_w',
    mathSymbol: 'K_w',
    nameEn: 'Water Auto-Ionization Constant',
    nameAr: 'ثابت الحاصل الأيوني للماء (25°C)',
    value: '1.0 × 10⁻¹⁴',
    unit: 'mol² / L²',
    formula: 'K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 10^{-14}',
  },
  {
    symbol: 'E°(SHE)',
    mathSymbol: 'E^\\circ(\\text{SHE})',
    nameEn: 'Standard Hydrogen Electrode EMF',
    nameAr: 'جهد قطب الهيدروجين القياسي',
    value: '0.00',
    unit: 'V (Volts)',
    formula: 'E^\\circ(2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2) = 0.00\\text{ V}',
  },
  {
    symbol: 'E°(Daniell)',
    mathSymbol: 'E^\\circ_{\\text{cell}}',
    nameEn: 'Daniell Standard Cell EMF',
    nameAr: 'القوة الدافعة القياسية لخلية دانيال',
    value: '+1.10',
    unit: 'V (Volts)',
    formula: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{Cu}) - E^\\circ_{\\text{red}}(\\text{Zn}) = 1.10\\text{ V}',
  },
  {
    symbol: 'ρ(Pb battery)',
    mathSymbol: '\\rho_{\\text{acid}}',
    nameEn: 'Charged Lead Battery Acid Density',
    nameAr: 'كثافة حمض المركم المشحون تماماً',
    value: '1.28 - 1.30',
    unit: 'g / cm³',
    formula: '\\rho_{\\text{acid}} \\in [1.28, 1.30]\\text{ g/cm}^3',
  },
];

const REDUCTION_SERIES = [
  { element: 'Li', ion: '\\text{Li}^+ + e^- \\rightleftharpoons \\text{Li}', eRed: -3.04, descAr: 'أنشط الفلزات (أقوى عامل مختزل)' },
  { element: 'K', ion: '\\text{K}^+ + e^- \\rightleftharpoons \\text{K}', eRed: -2.93, descAr: 'فلز شديد النشاط' },
  { element: 'Ca', ion: '\\text{Ca}^{2+} + 2e^- \\rightleftharpoons \\text{Ca}', eRed: -2.87, descAr: 'لهب أحمر طوبي' },
  { element: 'Na', ion: '\\text{Na}^+ + e^- \\rightleftharpoons \\text{Na}', eRed: -2.71, descAr: 'أقوى العوامل المختزلة' },
  { element: 'Al', ion: '\\text{Al}^{3+} + 3e^- \\rightleftharpoons \\text{Al}', eRed: -1.66, descAr: 'راسب أبيض متردد يذوب في NaOH' },
  { element: 'Zn', ion: '\\text{Zn}^{2+} + 2e^- \\rightleftharpoons \\text{Zn}', eRed: -0.76, descAr: 'مصعد خلية دانيال والغطاء الأنودي' },
  { element: 'Fe', ion: '\\text{Fe}^{2+} + 2e^- \\rightleftharpoons \\text{Fe}', eRed: -0.44, descAr: 'فلز مغناطيسي وصناعي رئيسي' },
  { element: 'H₂', ion: '2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2', eRed: 0.00, descAr: 'قطب المقارنة القياسي (SHE)' },
  { element: 'Cu', ion: '\\text{Cu}^{2+} + 2e^- \\rightleftharpoons \\text{Cu}', eRed: +0.34, descAr: 'مهبط خلية دانيال' },
  { element: 'Ag', ion: '\\text{Ag}^+ + e^- \\rightleftharpoons \\text{Ag}', eRed: +0.80, descAr: 'كاشف التحليل الوصفي' },
  { element: 'F₂', ion: '\\text{F}_2 + 2e^- \\rightleftharpoons 2\\text{F}^-', eRed: +2.87, descAr: 'أقوى العوامل المؤكسدة في السلسلة' },
];

export const ChemistryConstantsDrawer: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isOpen,
  onClose,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  // pH Calculator States
  const [phInput, setPhInput] = useState<string>('7.0');

  // Molarity <-> PPM Calculator
  const [molarityInput, setMolarityInput] = useState<string>('0.05');
  const [molarMassInput, setMolarMassInput] = useState<string>('58.5'); // NaCl

  const handleCopy = (symbol: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedSymbol(symbol);
    setTimeout(() => {
      setCopiedSymbol(null);
    }, 1800);
  };

  // Derived pH metrics
  const phNum = parseFloat(phInput);
  let pohVal = '7.00';
  let hConc = '1.00e-7';
  let ohConc = '1.00e-7';
  let natureEn = 'Neutral (pH = 7.0)';
  let natureAr = 'متعادل (pH = 7.0)';

  if (!isNaN(phNum) && phNum >= 0 && phNum <= 14) {
    const poh = 14 - phNum;
    pohVal = poh.toFixed(2);
    const h = Math.pow(10, -phNum);
    const oh = Math.pow(10, -poh);
    hConc = h.toExponential(3);
    ohConc = oh.toExponential(3);
    if (phNum < 7) {
      natureEn = `Acidic (pH < 7)`;
      natureAr = `حمضي قوي/ضعيف ([H⁺] > [OH⁻])`;
    } else if (phNum > 7) {
      natureEn = `Basic / Alkaline (pH > 7)`;
      natureAr = `قاعدي / قلوي ([OH⁻] > [H⁺])`;
    }
  }

  // PPM calculation
  const mNum = parseFloat(molarityInput);
  const mwNum = parseFloat(molarMassInput);
  let ppmVal = '2925';
  if (!isNaN(mNum) && !isNaN(mwNum)) {
    ppmVal = (mNum * mwNum * 1000).toFixed(1);
  }

  if (!isOpen) return null;

  return (
    <div
      className={`mb-6 p-5 rounded-2xl border transition-all animate-fadeIn ${
        isContrast
          ? 'bg-black border-cyan-400 text-white'
          : isLight
          ? 'bg-white border-slate-300 shadow-xl text-slate-900'
          : 'bg-slate-900/95 border-emerald-800/80 shadow-2xl backdrop-blur-md text-slate-100'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black flex items-center gap-2">
              <span>{isArabic ? 'الثوابت الكيميائية وسلسلة الجهود ومحول التركيزات' : 'Chemical Constants, EMF Series & Solution Calculators'}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {isArabic ? 'مرجع الكيمياء المعتمد' : 'Standard Chemistry Reference'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'ثوابت الغازات وفاراداي، سلسلة الجهود الكهربية القياسية، ومحول فوري لـ pH و pOH والتركيز المولاري'
                : 'Faraday & Gas constants, standard electrode potentials series, and live pH/pOH/PPM calculators'}
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
        {/* LEFT / TOP: Constants & Reduction Series (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isArabic ? 'الثوابت الكيميائية المعتمدة:' : 'Standard Chemical Constants:'}</span>
            </h4>
            <span className="text-[11px] text-slate-400">
              {isArabic ? 'انقر لنسخ القيمة' : 'Click to copy value'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[220px] overflow-y-auto pr-1">
            {CHEMICAL_CONSTANTS.map((c) => {
              const isCopied = copiedSymbol === c.symbol;
              return (
                <div
                  key={c.symbol}
                  className={`p-2.5 rounded-xl border flex flex-col justify-between transition-all ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-emerald-400'
                      : 'bg-slate-800/70 border-slate-700/80 hover:border-emerald-500/60'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-emerald-400 font-bold text-xs bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60 flex items-center justify-center">
                          <MathRenderer math={c.mathSymbol || c.symbol} inline lang={lang} />
                        </span>
                        <span className="text-xs font-bold">
                          {isArabic ? c.nameAr : c.nameEn}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-xs font-extrabold text-amber-400">
                        {isArabic ? toHindiDigits(c.value) : c.value}{' '}
                        <span className="text-[10px] font-sans text-slate-400 font-normal">
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

                  <div className="mt-1.5 pt-1 border-t border-slate-700/50 text-xs text-slate-300">
                    <MathRenderer math={c.formula} inline lang={lang} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standard Reduction Potential Series (EMF Series) */}
          <div className="pt-2">
            <h5 className="text-xs font-black uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
              <span>⚡</span>
              <span>{isArabic ? 'سلسلة الجهود الكهروكيميائية القياسية (جهود الاختزال):' : 'Standard Reduction Potentials Series (E°red):'}</span>
            </h5>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 overflow-x-auto max-h-[140px] text-xs">
              <table className="w-full text-start">
                <thead>
                  <tr className="text-[10px] text-slate-400 border-b border-slate-800">
                    <th className="pb-1 text-start">{isArabic ? 'العنصر' : 'Element'}</th>
                    <th className="pb-1 text-start">{isArabic ? 'تفاعل الاختزال' : 'Half-Reaction'}</th>
                    <th className="pb-1 text-start">{isArabic ? 'جهد الاختزال E°' : 'E° red (V)'}</th>
                    <th className="pb-1 text-start">{isArabic ? 'الدور الكيميائي' : 'Chemical Role'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {REDUCTION_SERIES.map((row) => (
                    <tr key={row.element} className="hover:bg-slate-900/60">
                      <td className="py-1 font-bold text-amber-300">{row.element}</td>
                      <td className="py-1 text-slate-300">
                        <MathRenderer math={row.ion} inline lang={lang} />
                      </td>
                      <td className={`py-1 font-bold ${row.eRed < 0 ? 'text-cyan-400' : 'text-emerald-400'}`}>
                        {row.eRed > 0 ? `+${row.eRed.toFixed(2)}` : row.eRed.toFixed(2)} V
                      </td>
                      <td className="py-1 font-sans text-[10px] text-slate-400">{row.descAr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT: Live Chemical Calculators (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-1.5 mb-1">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              {isArabic ? 'المحول الكيميائي الحي:' : 'Live Chemistry Calculators:'}
            </h4>
          </div>

          {/* Section 1: pH <-> pOH <-> [H+] Calculator */}
          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span>{isArabic ? 'حسابات الأس الهيدروجيني pH' : 'pH & pOH Calculator'}</span>
              <div className="text-[11px] text-cyan-400">
                <MathRenderer math="\text{pH} + \text{pOH} = 14" inline lang={lang} />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">
                {isArabic ? 'قيمة الأس الهيدروجيني pH (من 0 إلى 14):' : 'Enter pH Value (0 to 14):'}
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="14"
                value={phInput}
                onChange={(e) => setPhInput(e.target.value)}
                className={`w-full px-2.5 py-1.5 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                  isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                }`}
              />
            </div>

            <div className="mt-2.5 p-2 rounded bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'الأس الهيدروكسيلي pOH:' : 'pOH:'}</span>
                <span className="text-amber-400 font-bold">
                  {isArabic ? toHindiDigits(pohVal) : pohVal}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'تركيز [H₃O⁺]:' : '[H₃O⁺]:'}</span>
                <span className="text-cyan-300">
                  {isArabic ? toHindiDigits(hConc) : hConc} M
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'تركيز [OH⁻]:' : '[OH⁻]:'}</span>
                <span className="text-emerald-400">
                  {isArabic ? toHindiDigits(ohConc) : ohConc} M
                </span>
              </div>
              <div className="pt-1 border-t border-slate-700/60 text-[10px] font-sans font-bold text-amber-300">
                {isArabic ? natureAr : natureEn}
              </div>
            </div>
          </div>

          {/* Section 2: Molarity <-> PPM */}
          <div
            className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/70 border-slate-700/80'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span>{isArabic ? 'المولارية ↔ جزء في المليون PPM' : 'Molarity ↔ PPM (mg/L)'}</span>
              <span className="text-[10px] text-cyan-400 font-mono">ppm = M·Mw·10³</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'المولارية (M):' : 'Molarity (M):'}
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={molarityInput}
                  onChange={(e) => setMolarityInput(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">
                  {isArabic ? 'الكتلة المولية Mw:' : 'Molar Mass (g/mol):'}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={molarMassInput}
                  onChange={(e) => setMolarMassInput(e.target.value)}
                  className={`w-full px-2 py-1 rounded text-xs font-mono font-bold border focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                    isLight ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-700'
                  }`}
                />
              </div>
            </div>

            <div className="mt-2.5 p-2 rounded bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{isArabic ? 'التركيز بـ ppm:' : 'Concentration (ppm):'}</span>
              <span className="text-amber-400 font-bold">
                {isArabic ? toHindiDigits(ppmVal) : ppmVal} mg/L
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
