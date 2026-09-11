import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';

interface Props {
  lang: 'en' | 'ar';
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractiveMatrixLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const isAr = lang === 'ar';

  // 3x3 Matrix A
  const [matrix, setMatrix] = useState<number[][]>([
    [2, 1, -1],
    [3, 2, 1],
    [1, -1, 2]
  ]);

  // Vector b for Ax = b
  const [vectorB, setVectorB] = useState<number[]>([1, 7, 0]);

  // Compute determinant of 3x3 matrix
  const determinant = useMemo(() => {
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  }, [matrix]);

  // Compute adjugate of 3x3
  const adjugate = useMemo(() => {
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    return [
      [(e * i - f * h), -(b * i - c * h), (b * f - c * e)],
      [-(d * i - f * g), (a * i - c * g), -(a * f - c * d)],
      [(d * h - e * g), -(a * h - b * g), (a * e - b * d)]
    ];
  }, [matrix]);

  // Solve Ax = b via Cramer's rule
  const solution = useMemo(() => {
    if (determinant === 0) return null;
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    const [b1, b2, b3] = vectorB;

    // Det(A_x)
    const detX = b1 * (e * i - f * h) - b * (b2 * i - f * b3) + c * (b2 * h - e * b3);
    // Det(A_y)
    const detY = a * (b2 * i - f * b3) - b1 * (d * i - f * g) + c * (d * b3 - b2 * g);
    // Det(A_z)
    const detZ = a * (e * b3 - b2 * h) - b * (d * b3 - b2 * g) + b1 * (d * h - e * g);

    return {
      x: detX / determinant,
      y: detY / determinant,
      z: detZ / determinant
    };
  }, [matrix, vectorB, determinant]);

  const handleCellChange = (r: number, c: number, val: string) => {
    const num = parseFloat(val);
    const newM = matrix.map((row, ri) =>
      row.map((col, ci) => (ri === r && ci === c ? (isNaN(num) ? 0 : num) : col))
    );
    setMatrix(newM);
  };

  const handleVectorBChange = (idx: number, val: string) => {
    const num = parseFloat(val);
    const newB = [...vectorB];
    newB[idx] = isNaN(num) ? 0 : num;
    setVectorB(newB);
  };

  const applyPreset = (preset: 'standard' | 'singular' | 'identity' | 'diagonal') => {
    switch (preset) {
      case 'standard':
        setMatrix([
          [2, 1, -1],
          [3, 2, 1],
          [1, -1, 2]
        ]);
        setVectorB([1, 7, 0]);
        break;
      case 'singular':
        setMatrix([
          [1, 2, 3],
          [2, 4, 6],
          [1, 1, 1]
        ]);
        setVectorB([6, 12, 3]);
        break;
      case 'identity':
        setMatrix([
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ]);
        setVectorB([5, -2, 4]);
        break;
      case 'diagonal':
        setMatrix([
          [3, 0, 0],
          [0, -2, 0],
          [0, 0, 4]
        ]);
        setVectorB([9, 6, 8]);
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Presets Bar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400">
          {isAr ? 'نماذج جاهزة:' : 'Presets:'}
        </span>
        <button
          type="button"
          onClick={() => applyPreset('standard')}
          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition-all cursor-pointer"
        >
          {isAr ? 'نظام قياسي فريد' : 'Standard Invertible'}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('singular')}
          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-all cursor-pointer"
        >
          {isAr ? 'مصفوفة منفردة (محدد=٠)' : 'Singular (Det = 0)'}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('identity')}
          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all cursor-pointer"
        >
          {isAr ? 'مصفوفة الوحدة I' : 'Identity Matrix'}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('diagonal')}
          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer"
        >
          {isAr ? 'مصفوفة قطرية' : 'Diagonal Matrix'}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('standard')}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Matrix & Vector Inputs */}
        <div className={`p-4 rounded-xl border space-y-4 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="text-sm font-bold text-indigo-400">
              {isAr ? 'مدخلات المصفوفة A والمتجه b:' : 'Matrix A and Vector b Inputs:'}
            </h4>
            <span className="text-[11px] font-mono text-slate-400">A · x = b</span>
          </div>

          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
            {/* 3x3 Matrix Grid */}
            <div className="flex items-center">
              <span className="text-3xl text-indigo-400 select-none">[</span>
              <div className="grid grid-cols-3 gap-1.5 p-1">
                {matrix.map((row, rIdx) =>
                  row.map((val, cIdx) => (
                    <input
                      key={`m_${rIdx}_${cIdx}`}
                      type="number"
                      step="any"
                      value={val}
                      onChange={(e) => handleCellChange(rIdx, cIdx, e.target.value)}
                      className="w-14 sm:w-16 h-10 text-center font-mono font-bold text-sm bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none"
                    />
                  ))
                )}
              </div>
              <span className="text-3xl text-indigo-400 select-none">]</span>
            </div>

            {/* Variable Vector x */}
            <div className="flex items-center">
              <span className="text-3xl text-slate-500 select-none">[</span>
              <div className="flex flex-col gap-1.5 p-1 text-center font-mono font-bold text-xs text-amber-300">
                <div className="h-10 flex items-center justify-center px-2">x</div>
                <div className="h-10 flex items-center justify-center px-2">y</div>
                <div className="h-10 flex items-center justify-center px-2">z</div>
              </div>
              <span className="text-3xl text-slate-500 select-none">]</span>
            </div>

            <span className="text-xl font-bold text-slate-400">=</span>

            {/* Vector b */}
            <div className="flex items-center">
              <span className="text-3xl text-emerald-400 select-none">[</span>
              <div className="flex flex-col gap-1.5 p-1">
                {vectorB.map((val, bIdx) => (
                  <input
                    key={`b_${bIdx}`}
                    type="number"
                    step="any"
                    value={val}
                    onChange={(e) => handleVectorBChange(bIdx, e.target.value)}
                    className="w-14 sm:w-16 h-10 text-center font-mono font-bold text-sm bg-slate-900 border border-slate-700/80 rounded-lg text-emerald-300 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none"
                  />
                ))}
              </div>
              <span className="text-3xl text-emerald-400 select-none">]</span>
            </div>
          </div>

          {/* Linear Equations Display */}
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 font-mono text-xs space-y-1 text-slate-300">
            <div className="text-[11px] text-slate-400 font-sans font-semibold mb-1">
              {isAr ? 'التمثيل الجبري للمعادلات:' : 'Algebraic Equations Form:'}
            </div>
            {matrix.map((row, idx) => (
              <div key={idx} className="tracking-wide">
                {row[0]}x {row[1] >= 0 ? `+ ${row[1]}` : `- ${Math.abs(row[1])}`}y {row[2] >= 0 ? `+ ${row[2]}` : `- ${Math.abs(row[2])}`}z = {vectorB[idx]}
              </div>
            ))}
          </div>
        </div>

        {/* Computations, Determinant, Inverse & Cramer Solver */}
        <div className={`p-4 rounded-xl border space-y-4 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="text-sm font-bold text-indigo-400">
              {isAr ? 'الخواص الجبرية وحل النظام:' : 'Algebraic Properties & System Solution:'}
            </h4>
            {determinant !== 0 ? (
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isAr ? 'قابلة للعكس (محدد ≠ ٠)' : 'Invertible (Det ≠ 0)'}</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-rose-400 font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{isAr ? 'منفردة (لا يوجد معكوس)' : 'Singular (No Unique Inverse)'}</span>
              </span>
            )}
          </div>

          <div className="space-y-3 text-xs">
            {/* Determinant */}
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <span className="font-semibold text-slate-300">
                {isAr ? 'قيمة المحدد |A|:' : 'Determinant |A|:'}
              </span>
              <span className="font-mono text-base font-extrabold text-amber-400">
                {Math.round(determinant * 1000) / 1000}
              </span>
            </div>

            {/* Solution */}
            {solution ? (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 space-y-1.5">
                <div className="text-emerald-400 font-bold">
                  {isAr ? 'حل النظام الفريد (طريقة كرامر / المعكوس الضربي):' : 'Unique Solution (Cramer\'s Rule / Inverse):'}
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono text-center pt-1">
                  <div className="p-1.5 rounded bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-slate-400">x = </span>
                    <span className="font-bold text-emerald-300">{Number.isInteger(solution.x) ? solution.x : solution.x.toFixed(3)}</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-slate-400">y = </span>
                    <span className="font-bold text-emerald-300">{Number.isInteger(solution.y) ? solution.y : solution.y.toFixed(3)}</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/90 border border-emerald-500/30">
                    <span className="text-slate-400">z = </span>
                    <span className="font-bold text-emerald-300">{Number.isInteger(solution.z) ? solution.z : solution.z.toFixed(3)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-300">
                {isAr
                  ? 'بما أن |A| = ٠، فإن النظام إما ليس له حل (مستويات متوازية لا تتقاطع) أو له عدد لا نهائي من الحلول (تتقاطع في مستقيم أو مستوى واحد).'
                  : 'Because |A| = 0, the system either has no solution (parallel inconsistent planes) or infinitely many solutions (planes intersecting in a line or plane).'}
              </div>
            )}

            {/* Adjugate Matrix & Inversion Theorem */}
            {determinant !== 0 && (
              <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/50 space-y-2">
                <div className="flex items-center justify-between text-indigo-300 font-bold">
                  <span>{isAr ? 'المصفوفة الملحقة adj(A) وقانون المعكوس:' : 'Adjugate adj(A) & Inverse Theorem:'}</span>
                  <MathRenderer math="A^{-1} = \frac{1}{|A|} \operatorname{adj}(A)" />
                </div>
                <div className="grid grid-cols-3 gap-1 font-mono text-[11px] text-center pt-1">
                  {adjugate.map((row, r) =>
                    row.map((val, c) => (
                      <div key={`${r}-${c}`} className="p-1 rounded bg-slate-900/80 border border-indigo-500/20 text-indigo-200">
                        {Math.round(val * 100) / 100}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Geometric Interpretation in 3D Space */}
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] leading-relaxed text-slate-300">
              <span className="font-bold text-indigo-300">
                {isAr ? 'التفسير الهندسي في الفراغ ثلاثي الأبعاد:' : '3D Spatial Geometry Meaning:'}
              </span>{' '}
              {determinant !== 0
                ? isAr
                  ? 'تمثل المعادلات الثلاث ٣ مستويات تتقاطع جميعاً في نقطة وحيدة في الفراغ.'
                  : 'The three equations represent 3 distinct planes that intersect at a unique single point in 3D space.'
                : isAr
                  ? 'رتبة المصفوفة أقل من ٣، والمستويات لا تلتقي في نقطة وحيدة.'
                  : 'Rank of the coefficient matrix is < 3; the planes do not intersect at a single unique point.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
