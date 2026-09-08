import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractivePascalTriangle: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  // Active sub-mode: Pascal's triangle or Permutations & Combinations Lab
  const [activeMode, setActiveMode] = useState<'pascal' | 'perm_comb'>('pascal');

  // --- Pascal Triangle & Binomial State ---
  const [exponentN, setExponentN] = useState<number>(5);
  const [coeffA, setCoeffA] = useState<number>(2);
  const [coeffB, setCoeffB] = useState<number>(1);
  const [selectedCell, setSelectedCell] = useState<{ n: number; r: number } | null>({ n: 4, r: 2 });

  // --- Permutations vs Combinations Lab State ---
  const [permN, setPermN] = useState<number>(7);
  const [permR, setPermR] = useState<number>(3);

  // Factorial calculator
  const factorial = (num: number): number => {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    let res = 1;
    for (let i = 2; i <= num; i++) res *= i;
    return res;
  };

  // Combinations nCr
  const nCr = (n: number, r: number): number => {
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    let res = 1;
    for (let i = 1; i <= r; i++) {
      res = (res * (n - i + 1)) / i;
    }
    return Math.round(res);
  };

  // Permutations nPr
  const nPr = (n: number, r: number): number => {
    if (r < 0 || r > n) return 0;
    if (r === 0) return 1;
    let res = 1;
    for (let i = 0; i < r; i++) {
      res *= (n - i);
    }
    return res;
  };

  // Pascal triangle rows up to N=9
  const maxRows = Math.max(exponentN, 7);
  const triangleRows = Array.from({ length: maxRows + 1 }, (_, rowIdx) => {
    return Array.from({ length: rowIdx + 1 }, (_, colIdx) => nCr(rowIdx, colIdx));
  });

  // Helper to format LHS expression (ax + by)^n
  const getBinomialLhsLatex = (a: number, b: number, n: number): string => {
    let aStr = '';
    if (a === 1) aStr = 'x';
    else if (a === -1) aStr = '-x';
    else if (a === 0) aStr = '';
    else aStr = `${a}x`;

    let bStr = '';
    if (b === 1) bStr = aStr ? '+ y' : 'y';
    else if (b === -1) bStr = aStr ? '- y' : '-y';
    else if (b === 0) bStr = '';
    else if (b > 0) bStr = aStr ? `+ ${b}y` : `${b}y`;
    else bStr = aStr ? `- ${Math.abs(b)}y` : `-${Math.abs(b)}y`;

    const lhsInner = aStr || bStr ? `${aStr} ${bStr}`.trim() : '0';
    return `\\left(${lhsInner}\\right)^{${n}}`;
  };

  // Helper to format full binomial expansion
  const getBinomialExpansionLatex = (a: number, b: number, n: number): string => {
    const lhs = getBinomialLhsLatex(a, b, n);

    const terms: string[] = [];
    for (let r = 0; r <= n; r++) {
      const comb = nCr(n, r);
      const termCoeff = comb * Math.pow(a, n - r) * Math.pow(b, r);
      if (termCoeff === 0) continue;

      const powerX = n - r;
      const powerY = r;

      let varPart = '';
      if (powerX > 0) varPart += powerX === 1 ? 'x' : `x^{${powerX}}`;
      if (powerY > 0) varPart += powerY === 1 ? 'y' : `y^{${powerY}}`;

      const isFirst = terms.length === 0;
      const absCoeff = Math.abs(termCoeff);
      const sign = termCoeff > 0 ? (isFirst ? '' : '+ ') : (isFirst ? '-' : '- ');

      let coeffStr = '';
      if (varPart === '') {
        coeffStr = `${absCoeff}`;
      } else if (absCoeff === 1) {
        coeffStr = '';
      } else {
        coeffStr = `${absCoeff}`;
      }

      terms.push(`${sign}${coeffStr}${varPart}`);
    }

    const rhs = terms.length > 0 ? terms.join(' ') : '0';
    return `${lhs} = ${rhs}`;
  };

  // Ensure permR <= permN
  const safePermR = Math.min(permR, permN);
  const calculatedNPr = nPr(permN, safePermR);
  const calculatedNCr = nCr(permN, safePermR);
  const calculatedFactorialR = factorial(safePermR);
  const calculatedWithRep = Math.pow(permN, safePermR);
  const calculatedStarsAndBars = nCr(permN + safePermR - 1, safePermR);
  const circularWays = factorial(permN - 1);
  const rowWays = factorial(permN);
  const polygonDiagonals = nCr(permN, 2) - permN;

  return (
    <div className={`border rounded-2xl p-4 sm:p-6 space-y-6 ${
      isHighContrast
        ? 'bg-black border-2 border-cyan-400 text-white'
        : isLight
        ? 'bg-white border-slate-200 shadow-lg text-slate-900'
        : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
    }`}>
      {/* Header & Mode Switcher */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
        isHighContrast ? 'border-cyan-500/40' : isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <h3 className={`text-lg font-bold flex items-center gap-2 ${
            isHighContrast ? 'text-yellow-400' : isLight ? 'text-slate-900' : 'text-slate-100'
          }`}>
            <span>✨</span>
            <span>
              {lang === 'ar'
                ? 'المختبر التفاعلي للجبر ونظرية ذات الحدين'
                : "Algebra & Binomial Theorem Interactive Lab"}
            </span>
          </h3>
          <p className={`text-xs mt-1 ${
            isHighContrast ? 'text-slate-200' : isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {lang === 'ar'
              ? 'أدوات بصرية تفاعلية لحساب التباديل والتوافيق واستكشاف مثلث باسكال وفك المقادير'
              : 'Interactive visual tools to explore permutations, combinations, Pascal’s Triangle & expansions.'}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className={`flex items-center gap-2 p-1.5 rounded-xl border self-start sm:self-auto ${
          isHighContrast
            ? 'bg-black border-cyan-400'
            : isLight
            ? 'bg-slate-100 border-slate-200'
            : 'bg-slate-950 border-slate-800'
        }`}>
          <button
            onClick={() => setActiveMode('pascal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'pascal'
                ? isHighContrast
                  ? 'bg-cyan-400 text-black font-black shadow-xs'
                  : 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            🔺 {lang === 'ar' ? 'مثلث باسكال والمفكوك' : 'Pascal & Binomial'}
          </button>
          <button
            onClick={() => setActiveMode('perm_comb')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'perm_comb'
                ? isHighContrast
                  ? 'bg-cyan-400 text-black font-black shadow-xs'
                  : 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            🔢 {lang === 'ar' ? 'معمل التباديل والتوافيق' : 'Permutations vs Combinations'}
          </button>
        </div>
      </div>

      {/* ============================================================
          MODE 1: PASCAL TRIANGLE & BINOMIAL EXPANSION
          ============================================================ */}
      {activeMode === 'pascal' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className={`flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl border ${
            isHighContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className={`text-xs font-semibold ${
                  isHighContrast ? 'text-cyan-300' : isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
                }`}>
                  {lang === 'ar' ? 'الأس ن (n):' : 'Exponent n:'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="9"
                  value={exponentN}
                  onChange={(e) => setExponentN(Math.min(9, Math.max(1, Number(e.target.value))))}
                  className={`w-14 border rounded p-1 text-xs text-center font-bold ${
                    isHighContrast
                      ? 'bg-black border-cyan-400 text-yellow-400'
                      : isLight
                      ? 'bg-white border-slate-300 text-indigo-700'
                      : 'bg-slate-900 border-slate-700 text-indigo-400'
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className={`text-xs ${
                  isHighContrast ? 'text-slate-200' : isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'
                }`}>a:</label>
                <input
                  type="number"
                  value={coeffA}
                  onChange={(e) => setCoeffA(Number(e.target.value))}
                  className={`w-12 border rounded p-1 text-xs text-center font-bold ${
                    isHighContrast
                      ? 'bg-black border-cyan-400 text-emerald-400'
                      : isLight
                      ? 'bg-white border-slate-300 text-emerald-700'
                      : 'bg-slate-900 border-slate-700 text-emerald-400'
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className={`text-xs ${
                  isHighContrast ? 'text-slate-200' : isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'
                }`}>b:</label>
                <input
                  type="number"
                  value={coeffB}
                  onChange={(e) => setCoeffB(Number(e.target.value))}
                  className={`w-12 border rounded p-1 text-xs text-center font-bold ${
                    isHighContrast
                      ? 'bg-black border-cyan-400 text-amber-400'
                      : isLight
                      ? 'bg-white border-slate-300 text-amber-800'
                      : 'bg-slate-900 border-slate-700 text-amber-400'
                  }`}
                />
              </div>
            </div>

            <div className="text-xs text-slate-400">
              {lang === 'ar' ? 'انقر على أي خلية في المثلث لمعاينة قانون الجمع' : 'Click any cell to see Pascal addition'}
            </div>
          </div>

          {/* Interactive Pascal Triangle Pyramid */}
          <div className={`p-4 sm:p-6 rounded-xl border overflow-x-auto ${
            isHighContrast
              ? 'bg-black border-cyan-500/40'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <div className="flex flex-col items-center space-y-2 min-w-[340px]">
              {triangleRows.map((row, rowIdx) => (
                <div key={rowIdx} className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className={`text-[10px] font-mono w-6 text-right pr-1 ${
                    isHighContrast ? 'text-yellow-400' : isLight ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    n={lang === 'ar' ? toHindiDigits(rowIdx) : rowIdx}
                  </span>
                  {row.map((val, colIdx) => {
                    const isSelected = selectedCell?.n === rowIdx && selectedCell?.r === colIdx;
                    const isParentLeft = selectedCell && rowIdx === selectedCell.n - 1 && colIdx === selectedCell.r - 1;
                    const isParentRight = selectedCell && rowIdx === selectedCell.n - 1 && colIdx === selectedCell.r;

                    return (
                      <button
                        key={colIdx}
                        onClick={() => setSelectedCell({ n: rowIdx, r: colIdx })}
                        className={`min-w-[28px] sm:min-w-[36px] h-7 sm:h-9 px-1 rounded-lg text-xs font-bold transition-all transform hover:scale-110 flex items-center justify-center ${
                          isSelected
                            ? isHighContrast
                              ? 'bg-yellow-400 text-black font-black scale-110 ring-2 ring-cyan-400'
                              : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40 scale-110'
                            : isParentLeft || isParentRight
                            ? isHighContrast
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-400 font-extrabold'
                              : 'bg-amber-400/20 text-amber-600 dark:text-amber-300 border border-amber-400/40 font-extrabold'
                            : isHighContrast
                            ? 'bg-zinc-900 text-slate-100 hover:bg-zinc-800 border border-zinc-700'
                            : isLight
                            ? 'bg-white text-slate-800 border border-slate-200 hover:border-indigo-300 shadow-xs'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {lang === 'ar' ? toHindiDigits(val) : val}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Selected Cell Inspector */}
            {selectedCell && (
              <div className={`mt-4 p-3 rounded-lg border text-center ${
                isHighContrast
                  ? 'bg-black border-cyan-400 text-white'
                  : isLight
                  ? 'bg-white border-slate-200 shadow-xs'
                  : 'bg-slate-900 border-slate-800'
              }`}>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
                  <MathRenderer math={`\\binom{${selectedCell.n}}{${selectedCell.r}} = ${nCr(selectedCell.n, selectedCell.r)}`} lang={lang} />
                  {selectedCell.n > 0 && selectedCell.r > 0 && selectedCell.r < selectedCell.n && (
                    <div className="text-indigo-400 flex items-center">
                      <MathRenderer math={`\\binom{${selectedCell.n - 1}}{${selectedCell.r - 1}} + \\binom{${selectedCell.n - 1}}{${selectedCell.r}} = \\binom{${selectedCell.n}}{${selectedCell.r}}`} lang={lang} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Binomial Expansion Generator */}
          <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
            isHighContrast
              ? 'bg-black border-2 border-cyan-400 text-white'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className={`text-xs font-extrabold tracking-wide uppercase ${
                isHighContrast ? 'text-cyan-300' : isLight ? 'text-indigo-950' : 'text-indigo-300'
              }`}>
                {lang === 'ar' ? 'مفكوك ذات الحدين الكامل' : 'Full Binomial Expansion'}
              </span>
              <div className={`px-2.5 py-0.5 rounded-lg border font-semibold text-xs ${
                isHighContrast
                  ? 'bg-black border-cyan-400 text-cyan-300'
                  : isLight
                  ? 'bg-indigo-50/80 border-indigo-200 text-indigo-900'
                  : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-200'
              }`}>
                <MathRenderer math={getBinomialLhsLatex(coeffA, coeffB, exponentN)} lang={lang} />
              </div>
            </div>

            <div className={`text-xs overflow-x-auto p-3.5 rounded-lg border shadow-inner ${
              isHighContrast
                ? 'bg-black border-cyan-500/60'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-slate-900 border-slate-800'
            }`}>
              <MathRenderer block math={getBinomialExpansionLatex(coeffA, coeffB, exponentN)} lang={lang} />
            </div>

            <div className={`text-xs flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t ${
              isHighContrast
                ? 'border-cyan-500/40 text-slate-100'
                : isLight
                ? 'border-slate-200 text-slate-700'
                : 'border-slate-800 text-slate-300'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {lang === 'ar' ? 'عدد حدود المفكوك:' : 'Total terms:'}
                </span>
                <MathRenderer math={`n + 1 = ${exponentN} + 1 = ${exponentN + 1}`} lang={lang} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {lang === 'ar' ? 'مجموع المعاملات:' : 'Sum of coefficients:'}
                </span>
                <MathRenderer
                  math={`(${coeffA} + ${coeffB})^{${exponentN}} = ${coeffA + coeffB}^{${exponentN}} = ${Math.pow(coeffA + coeffB, exponentN).toLocaleString()}`}
                  lang={lang}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MODE 2: PERMUTATIONS VS COMBINATIONS LAB
          ============================================================ */}
      {activeMode === 'perm_comb' && (
        <div className="space-y-6">
          {/* Sliders and Numerical Controls */}
          <div className={`p-4 rounded-xl border space-y-4 ${
            isHighContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800' : 'text-slate-200'}>
                    {lang === 'ar' ? 'العلم الكلي (n):' : 'Total Objects (n):'} {permN}
                  </span>
                  <span className="font-mono text-indigo-400 text-xs">n! = {factorial(permN).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={permN}
                  onChange={(e) => setPermN(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-800' : 'text-slate-200'}>
                    {lang === 'ar' ? 'دليل الاختيار (r):' : 'Sample Size (r):'} {safePermR}
                  </span>
                  <span className="font-mono text-emerald-400 text-xs">r! = {factorial(safePermR).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={permN}
                  value={safePermR}
                  onChange={(e) => setPermR(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* The Golden Bridge: Permutations vs Combinations Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Permutations Card */}
            <div className={`p-4 rounded-xl border space-y-3 ${
              isHighContrast
                ? 'bg-black border-cyan-400'
                : isLight
                ? 'bg-white border-indigo-200 shadow-sm'
                : 'bg-slate-950 border-indigo-900/60 shadow-md'
            }`}>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-extrabold text-indigo-400">
                  {lang === 'ar' ? 'التباديل (الترتيب مهم)' : 'Permutations (Order Matters)'}
                </span>
                <span className="text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                  P({permN}, {safePermR})
                </span>
              </div>
              <div className="text-center py-2">
                <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-300">
                  {calculatedNPr.toLocaleString()}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 space-y-1">
                <MathRenderer math={`P(n, r) = \\frac{n!}{(n - r)!} = \\frac{${permN}!}{${permN - safePermR}!}`} lang={lang} />
                <p className="text-[10px] text-slate-500">
                  {lang === 'ar' ? 'أمثلة: ترتيب كتب، تكوين أرقام سرية، سباقات رياضية' : 'e.g. Ranking, passwords, running races'}
                </p>
              </div>
            </div>

            {/* Combinations Card */}
            <div className={`p-4 rounded-xl border space-y-3 ${
              isHighContrast
                ? 'bg-black border-cyan-400'
                : isLight
                ? 'bg-white border-emerald-200 shadow-sm'
                : 'bg-slate-950 border-emerald-900/60 shadow-md'
            }`}>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-extrabold text-emerald-400">
                  {lang === 'ar' ? 'التوافيق (الترتيب غير مهم)' : 'Combinations (No Order)'}
                </span>
                <span className="text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  C({permN}, {safePermR})
                </span>
              </div>
              <div className="text-center py-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-300">
                  {calculatedNCr.toLocaleString()}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 space-y-1">
                <MathRenderer math={`\\binom{n}{r} = \\frac{n!}{r!(n - r)!} = \\frac{${calculatedNPr.toLocaleString()}}{${calculatedFactorialR}}`} lang={lang} />
                <p className="text-[10px] text-slate-500">
                  {lang === 'ar' ? 'أمثلة: اختيار لجان، مصافحات، تكوين مجموعات' : 'e.g. Committees, handshakes, subsets'}
                </p>
              </div>
            </div>

            {/* The Bridge Ratio */}
            <div className={`p-4 rounded-xl border space-y-3 ${
              isHighContrast
                ? 'bg-black border-yellow-400'
                : isLight
                ? 'bg-white border-amber-200 shadow-sm'
                : 'bg-slate-950 border-amber-900/60 shadow-md'
            }`}>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-extrabold text-amber-400">
                  {lang === 'ar' ? 'جسر الربط بين التباديل والتوافيق' : 'The Combinatorial Bridge'}
                </span>
                <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                  r! = {calculatedFactorialR}
                </span>
              </div>
              <div className="text-center py-2">
                <MathRenderer math="P(n, r) = r! \\times \\binom{n}{r}" lang={lang} />
              </div>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                {lang === 'ar'
                  ? `كل مجموعة غير مرتبة من ${safePermR} عناصر يمكن ترتيبها داخلياً بـ ${calculatedFactorialR} طريقة مختلفة.`
                  : `Each unordered subset of size ${safePermR} can be ordered internally in ${calculatedFactorialR} ways.`}
              </p>
            </div>
          </div>

          {/* The 4 Fundamental Sampling Modes of Egyptian Curriculum */}
          <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
            isHighContrast
              ? 'bg-black border-cyan-400'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400">
              {lang === 'ar' ? 'صور الترتيب والاختيار الأربعة المعتمدة بكتاب الوزارة' : 'The 4 MoE Sampling Modalities Matrix'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className={`p-3 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] font-bold text-slate-400 block">١. مع الترتيب + مع الإحلال</span>
                <div className="text-sm font-black text-indigo-400 my-1">
                  <MathRenderer math={`n^r = ${permN}^{${safePermR}} = ${calculatedWithRep.toLocaleString()}`} lang={lang} />
                </div>
                <span className="text-[10px] text-slate-500">أرقام سرية ولوحات السيارات</span>
              </div>

              <div className={`p-3 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] font-bold text-slate-400 block">٢. مع الترتيب + بدون إحلال</span>
                <div className="text-sm font-black text-emerald-400 my-1">
                  <MathRenderer math={`P(n, r) = ${calculatedNPr.toLocaleString()}`} lang={lang} />
                </div>
                <span className="text-[10px] text-slate-500">تباديل ومناصب متباينة</span>
              </div>

              <div className={`p-3 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] font-bold text-slate-400 block">٣. بدون ترتيب + بدون إحلال</span>
                <div className="text-sm font-black text-amber-400 my-1">
                  <MathRenderer math={`\\binom{n}{r} = ${calculatedNCr.toLocaleString()}`} lang={lang} />
                </div>
                <span className="text-[10px] text-slate-500">توافيق ولجان عادية</span>
              </div>

              <div className={`p-3 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] font-bold text-slate-400 block">٤. بدون ترتيب + مع الإحلال</span>
                <div className="text-sm font-black text-purple-400 my-1">
                  <MathRenderer math={`\\binom{n + r - 1}{r} = ${calculatedStarsAndBars.toLocaleString()}`} lang={lang} />
                </div>
                <span className="text-[10px] text-slate-500">توزيع كرات متطابقة على صناديق</span>
              </div>
            </div>
          </div>

          {/* Geometric & Circular Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Linear vs Circular */}
            <div className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
              <h5 className="font-bold text-indigo-400">{lang === 'ar' ? 'الترتيب في صف مقابل دائرة' : 'Row vs Circular Arrangements'}</h5>
              <div className="space-y-1 text-slate-300">
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'في صف مستقيم:' : 'In a straight row:'}</span>
                  <MathRenderer math={`n! = ${rowWays.toLocaleString()}`} lang={lang} />
                </div>
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'حول مائدة دائرية:' : 'Around a circular table:'}</span>
                  <MathRenderer math={`(n - 1)! = ${circularWays.toLocaleString()}`} lang={lang} />
                </div>
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'في سوار أو عقد (حلقة):' : 'In a necklace / ring:'}</span>
                  <MathRenderer math={`\\frac{(n - 1)!}{2} = ${(circularWays / 2).toLocaleString()}`} lang={lang} />
                </div>
              </div>
            </div>

            {/* Geometric Applications */}
            <div className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
              <h5 className="font-bold text-emerald-400">{lang === 'ar' ? 'التطبيقات الهندسية للتوافيق' : 'Geometric Combinatorics'}</h5>
              <div className="space-y-1 text-slate-300">
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'عدد القطع المستقيمة الواصلة بين n نقطة:' : 'Segments between n points:'}</span>
                  <MathRenderer math={`\\binom{n}{2} = ${nCr(permN, 2)}`} lang={lang} />
                </div>
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'عدد أقطار مضلع محدب له n ضلعاً:' : 'Diagonals of an n-gon:'}</span>
                  <MathRenderer math={`\\binom{n}{2} - n = ${polygonDiagonals}`} lang={lang} />
                </div>
                <div className="flex items-center gap-2">
                  <span>{lang === 'ar' ? 'عدد المثلثات المتكونة من رؤوسه:' : 'Triangles formed by vertices:'}</span>
                  <MathRenderer math={`\\binom{n}{3} = ${nCr(permN, 3)}`} lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
