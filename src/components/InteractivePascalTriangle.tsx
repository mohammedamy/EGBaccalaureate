import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light';
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

  return (
    <div className={`border rounded-2xl p-4 sm:p-6 space-y-6 ${
      isLight
        ? 'bg-white border-slate-200 shadow-lg text-slate-900'
        : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
    }`}>
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div>
          <h3 className={`text-lg font-bold flex items-center gap-2 ${
            isLight ? 'text-slate-900' : 'text-slate-100'
          }`}>
            <span>✨</span>
            <span>{lang === 'ar' ? 'مستكشف مثلث باسكال ونظرية ذات الحدين' : "Pascal's Triangle & Binomial Expansion Lab"}</span>
          </h3>
          <p className={`text-xs mt-1 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {lang === 'ar'
              ? 'انقر على أي رقم في المثلث لمعاينة قانون الجمع وقيمة التوفيقة ق(ن،ر)'
              : 'Click any coefficient in the triangle to view the identity identity C(n,r) + C(n,r-1) = C(n+1,r)'}
          </p>
        </div>

        {/* Controls */}
        <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl border w-full sm:w-auto ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <label className={`text-xs font-semibold ${
              isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
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
                isLight ? 'bg-white border-slate-300 text-indigo-700' : 'bg-slate-900 border-slate-700 text-indigo-400'
              }`}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className={`text-xs ${
              isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'
            }`}>a:</label>
            <input
              type="number"
              value={coeffA}
              onChange={(e) => setCoeffA(Number(e.target.value))}
              className={`w-12 border rounded p-1 text-xs text-center font-bold ${
                isLight ? 'bg-white border-slate-300 text-emerald-700' : 'bg-slate-900 border-slate-700 text-emerald-400'
              }`}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className={`text-xs ${
              isLight ? 'text-slate-700 font-semibold' : 'text-slate-300'
            }`}>b:</label>
            <input
              type="number"
              value={coeffB}
              onChange={(e) => setCoeffB(Number(e.target.value))}
              className={`w-12 border rounded p-1 text-xs text-center font-bold ${
                isLight ? 'bg-white border-slate-300 text-amber-800' : 'bg-slate-900 border-slate-700 text-amber-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Pascal Triangle Pyramid Visualization */}
      <div className={`overflow-x-auto py-4 rounded-xl border ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
      }`}>
        <div className="min-w-[500px] flex flex-col items-center gap-2">
          {triangleRows.map((row, rIdx) => {
            const isHighlightRow = rIdx === exponentN;
            return (
              <div key={rIdx} className="flex items-center justify-center gap-2">
                <span className={`text-[10px] font-mono w-10 text-right ${
                  isLight ? 'text-slate-600 font-semibold' : 'text-slate-400'
                }`}>
                  n={rIdx}
                </span>
                <div className="flex items-center gap-1.5">
                  {row.map((val, cIdx) => {
                    const isSelected = selectedCell?.n === rIdx && selectedCell?.r === cIdx;
                    const isPascalParent1 = selectedCell && rIdx === selectedCell.n - 1 && cIdx === selectedCell.r - 1;
                    const isPascalParent2 = selectedCell && rIdx === selectedCell.n - 1 && cIdx === selectedCell.r;

                    let bgClass = isLight
                      ? 'bg-white border-slate-300 text-slate-800 hover:border-indigo-500 hover:bg-indigo-50/50'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-indigo-500';

                    if (isHighlightRow) {
                      bgClass = isLight
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
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <span className={`text-xs font-bold block uppercase tracking-wider ${
              isLight ? 'text-amber-900 font-bold' : 'text-amber-400'
            }`}>
              {lang === 'ar' ? 'تحليل خاصية باسكال الناتجة' : 'Pascal Identity Analysis'}
            </span>
            <div className="text-xs space-y-2">
              <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                {lang === 'ar'
                  ? `النقطة المحددة: ن = ${selectedCell.n}، ر = ${selectedCell.r}`
                  : `Selected Cell: n = ${selectedCell.n}, r = ${selectedCell.r}`}
              </p>
              <div className={`p-2 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <MathRenderer math={`\\binom{${selectedCell.n}}{${selectedCell.r}} = ${nCr(selectedCell.n, selectedCell.r)}`} />
              </div>
              {selectedCell.r > 0 && selectedCell.r < selectedCell.n && (
                <div className={`mt-2 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                  <span className={`text-[11px] font-semibold block mb-1 ${
                    isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'
                  }`}>
                    {lang === 'ar' ? 'قانون الجمع المباشر:' : 'Pascal Addition Law:'}
                  </span>
                  <div className={`p-2 rounded border my-1.5 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                    <MathRenderer
                      math={`\\binom{${selectedCell.n - 1}}{${selectedCell.r - 1}} + \\binom{${selectedCell.n - 1}}{${selectedCell.r}} = \\binom{${selectedCell.n}}{${selectedCell.r}}`}
                    />
                  </div>
                  <p className={`text-[11px] mt-1 font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {nCr(selectedCell.n - 1, selectedCell.r - 1)} + {nCr(selectedCell.n - 1, selectedCell.r)} = {nCr(selectedCell.n, selectedCell.r)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Binomial Expansion Generator */}
        <div className={`p-4 rounded-xl border space-y-2 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <span className={`text-xs font-bold block uppercase tracking-wider ${
            isLight ? 'text-indigo-900 font-bold' : 'text-indigo-400'
          }`}>
            {lang === 'ar' ? `مفكوك (${coeffA > 1 ? coeffA : ''}س + ${coeffB > 1 ? coeffB : ''}ص)^${exponentN}` : `Binomial Term Expansion (${coeffA}x + ${coeffB}y)^${exponentN}`}
          </span>
          <div className={`text-xs overflow-x-auto p-2 rounded border ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
          }`}>
            <MathRenderer
              block
              math={`(${coeffA === 1 ? '' : coeffA}x + ${coeffB === 1 ? '' : coeffB}y)^${exponentN} = ${Array.from({ length: exponentN + 1 }, (_, r) => {
                const comb = nCr(exponentN, r);
                const termCoeff = comb * Math.pow(coeffA, exponentN - r) * Math.pow(coeffB, r);
                const powerX = exponentN - r;
                const powerY = r;
                let str = `${termCoeff > 0 && r > 0 ? '+' : ''}${termCoeff}`;
                if (powerX > 0) str += powerX === 1 ? 'x' : `x^{${powerX}}`;
                if (powerY > 0) str += powerY === 1 ? 'y' : `y^{${powerY}}`;
                return str;
              }).join(' ')}`}
            />
          </div>
          <p className={`text-[11px] ${
            isLight ? 'text-slate-600 font-medium' : 'text-slate-400'
          }`}>
            {lang === 'ar'
              ? `عدد حدود المفكوك = ن + ١ = ${exponentN + 1} حد، مجموع المعاملات = (${coeffA} + ${coeffB})^${exponentN} = ${Math.pow(coeffA + coeffB, exponentN)}`
              : `Total terms = n + 1 = ${exponentN + 1}, Sum of coefficients = (${coeffA} + ${coeffB})^${exponentN} = ${Math.pow(coeffA + coeffB, exponentN)}`}
          </p>
        </div>
      </div>
    </div>
  );
};
