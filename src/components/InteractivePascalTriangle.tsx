import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractivePascalTriangle: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [exponentN, setExponentN] = useState<number>(5);
  const [coeffA, setCoeffA] = useState<number>(2);
  const [coeffB, setCoeffB] = useState<number>(1);
  const [selectedCell, setSelectedCell] = useState<{ n: number; r: number } | null>({ n: 4, r: 2 });

  // Calculate combinations nCr
  const nCr = (n: number, r: number): number => {
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    let res = 1;
    for (let i = 1; i <= r; i++) {
      res = (res * (n - i + 1)) / i;
    }
    return Math.round(res);
  };

  // Generate Pascal triangle rows up to N=9
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

  // Helper to format full binomial expansion without redundant coefficient 1 (e.g. y^5, not 1y^5)
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

  const isHighContrast = theme === 'high-contrast';

  return (
    <div className={`border rounded-2xl p-4 sm:p-6 space-y-6 ${
      isHighContrast
        ? 'bg-black border-2 border-cyan-400 text-white'
        : isLight
        ? 'bg-white border-slate-200 shadow-lg text-slate-900'
        : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
    }`}>
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 ${
        isHighContrast ? 'border-cyan-500/40' : isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <h3 className={`text-lg font-bold flex items-center gap-2 ${
            isHighContrast ? 'text-yellow-400' : isLight ? 'text-slate-900' : 'text-slate-100'
          }`}>
            <span>✨</span>
            <span>{lang === 'ar' ? 'مستكشف مثلث باسكال ونظرية ذات الحدين' : "Pascal's Triangle & Binomial Expansion Lab"}</span>
          </h3>
          <p className={`text-xs mt-1 ${
            isHighContrast ? 'text-slate-200' : isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {lang === 'ar'
              ? 'انقر على أي رقم في المثلث لمعاينة قانون الجمع وقيمة التوفيقة ق(ن،ر)'
              : 'Click any coefficient in the triangle to view the identity identity C(n,r) + C(n,r-1) = C(n+1,r)'}
          </p>
        </div>

        {/* Controls */}
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl border w-full sm:w-auto ${
          isHighContrast
            ? 'bg-black border-cyan-400'
            : isLight
            ? 'bg-slate-50 border-slate-200'
            : 'bg-slate-950 border-slate-800'
        }`}>
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
      </div>

      {/* Pascal Triangle Pyramid Visualization */}
      <div className={`overflow-x-auto py-4 rounded-xl border ${
        isHighContrast
          ? 'bg-black border-cyan-500/40'
          : isLight
          ? 'bg-slate-50 border-slate-200'
          : 'bg-slate-950/60 border-slate-800/80'
      }`}>
        <div className="min-w-[500px] flex flex-col items-center gap-2">
          {triangleRows.map((row, rIdx) => {
            const isHighlightRow = rIdx === exponentN;
            return (
              <div key={rIdx} className="flex items-center justify-center gap-2">
                <span className={`text-[10px] font-mono w-10 text-right ${
                  isHighContrast ? 'text-cyan-300' : isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'
                }`}>
                  n={rIdx}
                </span>
                <div className="flex items-center gap-1.5">
                  {row.map((val, cIdx) => {
                    const isSelected = selectedCell?.n === rIdx && selectedCell?.r === cIdx;
                    const isPascalParent1 = selectedCell && rIdx === selectedCell.n - 1 && cIdx === selectedCell.r - 1;
                    const isPascalParent2 = selectedCell && rIdx === selectedCell.n - 1 && cIdx === selectedCell.r;

                    let bgClass = isHighContrast
                      ? 'bg-black border-slate-700 text-white hover:border-cyan-400'
                      : isLight
                      ? 'bg-white border-slate-300 text-slate-800 hover:border-indigo-500 hover:bg-indigo-50/50'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-indigo-500';

                    if (isHighlightRow) {
                      bgClass = isHighContrast
                        ? 'bg-cyan-950/60 border-2 border-cyan-400 text-cyan-200 font-bold'
                        : isLight
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-bold'
                        : 'bg-indigo-950/90 border-indigo-500 text-indigo-200 font-bold';
                    }
                    if (isSelected) {
                      bgClass = 'bg-amber-500 border-amber-600 text-slate-950 font-extrabold ring-4 ring-amber-500/30 scale-110';
                    }
                    if (isPascalParent1 || isPascalParent2) {
                      bgClass = 'bg-emerald-600 border-emerald-500 text-white font-bold animate-pulse';
                    }

                    return (
                      <button
                        key={cIdx}
                        onClick={() => setSelectedCell({ n: rIdx, r: cIdx })}
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center text-xs transition-all duration-200 shadow-sm ${bgClass}`}
                        title={`n=${rIdx}, r=${cIdx} => C(${rIdx},${cIdx}) = ${val}`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Cell Analysis & Expansion Generator */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Combinatorics Identity Inspector */}
        {selectedCell && selectedCell.n > 0 && (
          <div className={`p-4 rounded-xl border space-y-2 ${
            isHighContrast
              ? 'bg-black border-2 border-yellow-400 text-white'
              : isLight
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-950 border-slate-800'
          }`}>
            <span className={`text-xs font-bold block uppercase tracking-wider ${
              isHighContrast ? 'text-yellow-400' : isLight ? 'text-amber-900 font-bold' : 'text-amber-400'
            }`}>
              {lang === 'ar' ? 'تحليل خاصية باسكال الناتجة' : 'Pascal Identity Analysis'}
            </span>
            <div className="text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                  {lang === 'ar' ? 'النقطة المحددة:' : 'Selected Cell:'}
                </span>
                <MathRenderer
                  math={`n = ${selectedCell.n}, \\; r = ${selectedCell.r}`}
                  lang={lang}
                />
              </div>
              <div className={`p-2 rounded border ${
                isHighContrast
                  ? 'bg-black border-cyan-400'
                  : isLight
                  ? 'bg-white border-slate-200'
                  : 'bg-slate-900 border-slate-800'
              }`}>
                <MathRenderer math={`\\binom{${selectedCell.n}}{${selectedCell.r}} = ${nCr(selectedCell.n, selectedCell.r)}`} lang={lang} />
              </div>
              {selectedCell.r > 0 && selectedCell.r < selectedCell.n && (
                <div className={`mt-2 pt-2 border-t ${
                  isHighContrast ? 'border-yellow-500/40' : isLight ? 'border-slate-200' : 'border-slate-800'
                }`}>
                  <span className={`text-[11px] font-semibold block mb-1 ${
                    isHighContrast ? 'text-emerald-400' : isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'
                  }`}>
                    {lang === 'ar' ? 'قانون الجمع المباشر:' : 'Pascal Addition Law:'}
                  </span>
                  <div className={`p-2 rounded border my-1.5 ${
                    isHighContrast
                      ? 'bg-black border-emerald-400'
                      : isLight
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900 border-slate-800'
                  }`}>
                    <MathRenderer
                      math={`\\binom{${selectedCell.n - 1}}{${selectedCell.r - 1}} + \\binom{${selectedCell.n - 1}}{${selectedCell.r}} = \\binom{${selectedCell.n}}{${selectedCell.r}}`}
                      lang={lang}
                    />
                  </div>
                  <div className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    <MathRenderer
                      math={`${nCr(selectedCell.n - 1, selectedCell.r - 1)} + ${nCr(selectedCell.n - 1, selectedCell.r)} = ${nCr(selectedCell.n, selectedCell.r)}`}
                      lang={lang}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Binomial Expansion Generator */}
        <div className={`p-4 rounded-xl border space-y-3 ${
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
              {lang === 'ar' ? 'مفكوك ذات الحدين' : 'Binomial Term Expansion'}
            </span>
            <div className={`px-2.5 py-0.5 rounded-lg border font-semibold text-xs ${
              isHighContrast
                ? 'bg-black border-cyan-400 text-cyan-300'
                : isLight
                ? 'bg-indigo-50/80 border-indigo-200 text-indigo-900'
                : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-200'
            }`}>
              <MathRenderer
                math={getBinomialLhsLatex(coeffA, coeffB, exponentN)}
                lang={lang}
              />
            </div>
          </div>

          <div className={`text-xs overflow-x-auto p-3 rounded-lg border shadow-inner ${
            isHighContrast
              ? 'bg-black border-cyan-500/60'
              : isLight
              ? 'bg-white border-slate-200'
              : 'bg-slate-900 border-slate-800'
          }`}>
            <MathRenderer
              block
              math={getBinomialExpansionLatex(coeffA, coeffB, exponentN)}
              lang={lang}
            />
          </div>

          <div className={`text-xs flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t ${
            isHighContrast
              ? 'border-cyan-500/40 text-slate-100'
              : isLight
              ? 'border-slate-200 text-slate-700'
              : 'border-slate-800 text-slate-300'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${
                isHighContrast ? 'text-cyan-300' : isLight ? 'text-indigo-950 font-extrabold' : 'text-indigo-300'
              }`}>
                {lang === 'ar' ? 'عدد حدود المفكوك:' : 'Total terms:'}
              </span>
              <MathRenderer
                math={`n + 1 = ${exponentN} + 1 = ${exponentN + 1}`}
                lang={lang}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${
                isHighContrast ? 'text-yellow-400' : isLight ? 'text-indigo-950 font-extrabold' : 'text-indigo-300'
              }`}>
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
    </div>
  );
};
