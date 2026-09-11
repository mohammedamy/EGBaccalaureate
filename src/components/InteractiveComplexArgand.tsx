import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import type { Language } from '../i18n/translations';
import { toHindiDigits } from '../utils/arabicNumerals';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
}

export const InteractiveComplexArgand: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const isHighContrast = theme === 'high-contrast';

  // Mode: Argand representation or De Moivre & Roots
  const [activeTab, setActiveTab] = useState<'argand' | 'demoivre'>('argand');

  // Cartesian coordinates for z = x + iy
  const [x, setX] = useState<number>(3);
  const [y, setY] = useState<number>(3);
  const [showConjugate, setShowConjugate] = useState<boolean>(true);
  const [showOpposite, setShowOpposite] = useState<boolean>(false);

  // De Moivre parameters
  const [rootN, setRootN] = useState<number>(3); // n-th root
  const [omegaPower, setOmegaPower] = useState<number>(14);

  // Calculations for z
  const r = Math.sqrt(x * x + y * y);
  const rawTheta = Math.atan2(y, x); // in (-pi, pi]
  const thetaDeg = (rawTheta * 180) / Math.PI;

  // Fraction format helper for common angles
  const formatTheta = (rad: number): string => {
    const deg = Math.round((rad * 180) / Math.PI);
    return `${deg}^\\circ`;
  };

  // Determine quadrant
  const getQuadrant = (): string => {
    if (x === 0 && y === 0) return lang === 'ar' ? 'نقطة الأصل (٠)' : 'Origin (0)';
    if (x === 0) return y > 0 ? (lang === 'ar' ? 'محور الصادات الموجب (+i)' : '+Imaginary Axis') : (lang === 'ar' ? 'محور الصادات السالب (-i)' : '-Imaginary Axis');
    if (y === 0) return x > 0 ? (lang === 'ar' ? 'محور السينات الموجب' : '+Real Axis') : (lang === 'ar' ? 'محور السينات السالب' : '-Real Axis');
    if (x > 0 && y > 0) return lang === 'ar' ? 'الربع الأول' : 'Quadrant I';
    if (x < 0 && y > 0) return lang === 'ar' ? 'الربع الثاني' : 'Quadrant II';
    if (x < 0 && y < 0) return lang === 'ar' ? 'الربع الثالث' : 'Quadrant III';
    return lang === 'ar' ? 'الربع الرابع' : 'Quadrant IV';
  };

  // De Moivre n-th roots
  const rN = Math.pow(r, 1 / rootN);
  const roots = Array.from({ length: rootN }, (_, k) => {
    const phi = (rawTheta + 2 * Math.PI * k) / rootN;
    // Normalize to (-pi, pi]
    let normalizedPhi = phi;
    while (normalizedPhi > Math.PI) normalizedPhi -= 2 * Math.PI;
    while (normalizedPhi <= -Math.PI) normalizedPhi += 2 * Math.PI;
    return {
      k,
      phi: normalizedPhi,
      x: rN * Math.cos(normalizedPhi),
      y: rN * Math.sin(normalizedPhi),
    };
  });

  // SVG coordinate transformation (world: [-7, 7] -> svg: [0, 320])
  const svgSize = 320;
  const scale = svgSize / 14;
  const toSvgX = (valX: number) => svgSize / 2 + valX * scale;
  const toSvgY = (valY: number) => svgSize / 2 - valY * scale;

  return (
    <div className="space-y-6">
      {/* Sub-mode Navigation */}
      <div className="flex items-center gap-2 border-b pb-3 no-print">
        <button
          onClick={() => setActiveTab('argand')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'argand'
              ? 'bg-indigo-600 text-white shadow-md'
              : isLight
              ? 'bg-slate-100 text-slate-700 hover:text-slate-950'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          📍 {lang === 'ar' ? 'شكل أرجاند والصورة المثلثية والأسية' : 'Argand Plane, Polar & Euler Forms'}
        </button>

        <button
          onClick={() => setActiveTab('demoivre')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'demoivre'
              ? 'bg-indigo-600 text-white shadow-md'
              : isLight
              ? 'bg-slate-100 text-slate-700 hover:text-slate-950'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          🌀 {lang === 'ar' ? 'نظرية ديموافر والجذور النونية وأوميجا' : 'De Moivre, n-th Roots & Omega (ω)'}
        </button>
      </div>

      {/* MODE 1: ARGAND PLANE & POLAR FORMS */}
      {activeTab === 'argand' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* SVG Canvas (5 cols) */}
          <div className={`lg:col-span-6 p-4 rounded-2xl border flex flex-col items-center justify-center ${
            isHighContrast
              ? 'bg-black border-2 border-cyan-400'
              : isLight
              ? 'bg-white border-slate-200 shadow-md'
              : 'bg-slate-950 border-slate-800 shadow-xl'
          }`}>
            <svg
              width="100%"
              height="320"
              viewBox={`0 0 ${svgSize} ${svgSize}`}
              className="overflow-visible select-none max-w-[320px]"
            >
              {/* Grid Lines */}
              {[-6, -4, -2, 2, 4, 6].map((gridVal) => (
                <g key={gridVal} opacity={0.15}>
                  <line
                    x1={toSvgX(gridVal)}
                    y1={0}
                    x2={toSvgX(gridVal)}
                    y2={svgSize}
                    stroke={isLight ? '#000' : '#fff'}
                    strokeDasharray="2,2"
                  />
                  <line
                    x1={0}
                    y1={toSvgY(gridVal)}
                    x2={svgSize}
                    y2={toSvgY(gridVal)}
                    stroke={isLight ? '#000' : '#fff'}
                    strokeDasharray="2,2"
                  />
                </g>
              ))}

              {/* Coordinate Axes */}
              <line x1={0} y1={svgSize / 2} x2={svgSize} y2={svgSize / 2} stroke="#6366f1" strokeWidth="1.5" />
              <line x1={svgSize / 2} y1={0} x2={svgSize / 2} y2={svgSize} stroke="#6366f1" strokeWidth="1.5" />

              {/* Axis Labels */}
              <text x={svgSize - 18} y={svgSize / 2 - 6} fill="#818cf8" fontSize="10" fontWeight="bold">Re (س)</text>
              <text x={svgSize / 2 + 6} y={14} fill="#818cf8" fontSize="10" fontWeight="bold">Im (ص)</text>

              {/* Modulus circle radius r */}
              {r > 0 && (
                <circle
                  cx={svgSize / 2}
                  cy={svgSize / 2}
                  r={r * scale}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity={0.4}
                />
              )}

              {/* Vector z */}
              <line
                x1={svgSize / 2}
                y1={svgSize / 2}
                x2={toSvgX(x)}
                y2={toSvgY(y)}
                stroke="#6366f1"
                strokeWidth="2.5"
              />
              <circle cx={toSvgX(x)} cy={toSvgY(y)} r={5} fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
              <text
                x={toSvgX(x) + 8}
                y={toSvgY(y) - 6}
                fill="#818cf8"
                fontSize="11"
                fontWeight="extrabold"
              >
                z ({x}, {y})
              </text>

              {/* Conjugate vector z_bar */}
              {showConjugate && (
                <g opacity={0.7}>
                  <line
                    x1={svgSize / 2}
                    y1={svgSize / 2}
                    x2={toSvgX(x)}
                    y2={toSvgY(-y)}
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <circle cx={toSvgX(x)} cy={toSvgY(-y)} r={4} fill="#10b981" />
                  <text x={toSvgX(x) + 8} y={toSvgY(-y) + 12} fill="#34d399" fontSize="10" fontWeight="bold">
                    z̄ ({x}, {-y})
                  </text>
                </g>
              )}

              {/* Opposite vector -z */}
              {showOpposite && (
                <g opacity={0.6}>
                  <line
                    x1={svgSize / 2}
                    y1={svgSize / 2}
                    x2={toSvgX(-x)}
                    y2={toSvgY(-y)}
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                  />
                  <circle cx={toSvgX(-x)} cy={toSvgY(-y)} r={4} fill="#f59e0b" />
                  <text x={toSvgX(-x) - 30} y={toSvgY(-y) + 12} fill="#fbbf24" fontSize="10" fontWeight="bold">
                    -z ({-x}, {-y})
                  </text>
                </g>
              )}
            </svg>

            {/* Canvas legend */}
            <div className="flex items-center gap-4 text-[10px] mt-2 font-bold text-slate-400">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> z = x + iy</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> z̄ = x - iy</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> -z = -x - iy</span>
            </div>
          </div>

          {/* Controls & Math Readouts (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Real and Imaginary Sliders */}
            <div className={`p-4 rounded-xl border space-y-3 ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>{lang === 'ar' ? 'الجزء الحقيقي (س = Re(z)):' : 'Real Part (x = Re(z)): '} {x}</span>
                  <span className="font-mono text-indigo-400">{x}</span>
                </div>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  step="0.5"
                  value={x}
                  onChange={(e) => setX(parseFloat(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>{lang === 'ar' ? 'الجزء التخيلي (ص = Im(z)):' : 'Imaginary Part (y = Im(z)): '} {y}</span>
                  <span className="font-mono text-indigo-400">{y}</span>
                </div>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  step="0.5"
                  value={y}
                  onChange={(e) => setY(parseFloat(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="flex items-center gap-4 pt-1 text-xs">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showConjugate}
                    onChange={(e) => setShowConjugate(e.target.checked)}
                    className="accent-emerald-600 rounded"
                  />
                  <span>{lang === 'ar' ? 'إظهار المرافق z̄' : 'Show Conjugate z̄'}</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showOpposite}
                    onChange={(e) => setShowOpposite(e.target.checked)}
                    className="accent-amber-600 rounded"
                  />
                  <span>{lang === 'ar' ? 'إظهار المعكوس -z' : 'Show Opposite -z'}</span>
                </label>
              </div>
            </div>

            {/* Calculations Matrix */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] text-slate-400 font-bold block">{lang === 'ar' ? 'المقياس (r = |z|)' : 'Modulus (r = |z|)'}</span>
                <span className="text-base font-extrabold text-indigo-400 block my-1">
                  {r.toFixed(3)}
                </span>
                <MathRenderer math={`r = \\sqrt{${x}^2 + (${y})^2} = ${r.toFixed(2)}`} lang={lang} />
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                <span className="text-[10px] text-slate-400 font-bold block">{lang === 'ar' ? 'السعة الأساسية (\\theta)' : 'Principal Argument (\\theta)'}</span>
                <span className="text-base font-extrabold text-emerald-400 block my-1">
                  {thetaDeg.toFixed(1)}°
                </span>
                <span className="text-[10px] text-slate-400 font-bold block">{getQuadrant()}</span>
              </div>
            </div>

            {/* Standard Representations */}
            <div className={`p-4 rounded-xl border space-y-2.5 ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
            }`}>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">{lang === 'ar' ? 'الصورة الجبرية (Cartesian Form)' : 'Algebraic Cartesian Form'}</span>
                <div className="font-extrabold text-indigo-400 text-sm">
                  <MathRenderer math={`z = ${x} ${y >= 0 ? '+' : '-'} ${Math.abs(y)}i`} lang={lang} />
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">{lang === 'ar' ? 'الصورة المثلثية القياسية (Trigonometric Form)' : 'Standard Trigonometric Form'}</span>
                <div className="font-extrabold text-emerald-400 text-sm">
                  <MathRenderer math={`z = ${r.toFixed(2)} [\\cos(${formatTheta(rawTheta)}) + i\\sin(${formatTheta(rawTheta)})]`} lang={lang} />
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">{lang === 'ar' ? 'الصورة الأسية لأويلر (Euler Exponential Form)' : 'Euler Exponential Form'}</span>
                <div className="font-extrabold text-amber-400 text-sm">
                  <MathRenderer math={`z = ${r.toFixed(2)} e^{i (${formatTheta(rawTheta)})}`} lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: DE MOIVRE & ROOTS OF UNITY */}
      {activeTab === 'demoivre' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* SVG Polygon of Roots (6 cols) */}
            <div className={`lg:col-span-6 p-4 rounded-2xl border flex flex-col items-center justify-center ${
              isLight ? 'bg-white border-slate-200 shadow-md' : 'bg-slate-950 border-slate-800 shadow-xl'
            }`}>
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xs font-bold text-indigo-400">
                  {lang === 'ar' ? `الجذور النونية (عددها ${toHindiDigits(rootN)})` : `${rootN}-th Roots Polygon`}
                </span>
                <span className="text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">
                  n = {rootN}
                </span>
              </div>

              <svg
                width="100%"
                height="280"
                viewBox={`0 0 ${svgSize} ${svgSize}`}
                className="overflow-visible select-none max-w-[300px]"
              >
                {/* Axes */}
                <line x1={0} y1={svgSize / 2} x2={svgSize} y2={svgSize / 2} stroke="#334155" strokeWidth="1" />
                <line x1={svgSize / 2} y1={0} x2={svgSize / 2} y2={svgSize} stroke="#334155" strokeWidth="1" />

                {/* Circle of radius r^(1/n) */}
                <circle
                  cx={svgSize / 2}
                  cy={svgSize / 2}
                  r={Math.min(rN * 28, svgSize / 2 - 20)}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity={0.5}
                />

                {/* Polygon connecting roots */}
                {roots.length > 1 && (
                  <polygon
                    points={roots.map((rt) => {
                      const scaledRadius = Math.min(rN * 28, svgSize / 2 - 20);
                      const px = svgSize / 2 + scaledRadius * Math.cos(rt.phi);
                      const py = svgSize / 2 - scaledRadius * Math.sin(rt.phi);
                      return `${px},${py}`;
                    }).join(' ')}
                    fill="rgba(99, 102, 241, 0.1)"
                    stroke="#818cf8"
                    strokeWidth="1.5"
                  />
                )}

                {/* Roots vertices */}
                {roots.map((rt, idx) => {
                  const scaledRadius = Math.min(rN * 28, svgSize / 2 - 20);
                  const px = svgSize / 2 + scaledRadius * Math.cos(rt.phi);
                  const py = svgSize / 2 - scaledRadius * Math.sin(rt.phi);
                  return (
                    <g key={idx}>
                      <line x1={svgSize / 2} y1={svgSize / 2} x2={px} y2={py} stroke="#6366f1" strokeWidth="1" opacity={0.6} />
                      <circle cx={px} cy={py} r={5} fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
                      <text
                        x={px + 8 * Math.cos(rt.phi)}
                        y={py - 8 * Math.sin(rt.phi)}
                        fill="#818cf8"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        w_{idx}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <p className="text-[11px] text-slate-400 text-center mt-2 leading-relaxed">
                {lang === 'ar'
                  ? `الجذور النونية تقع جميعها على دائرة نصف قطرها r^{1/${rootN}} وتشكل رؤوس مضلع منتظم عدد أضلاعه ${rootN}.`
                  : `All ${rootN}-th roots lie on circle of radius r^(1/${rootN}) forming the vertices of a regular ${rootN}-gon.`}
              </p>
            </div>

            {/* De Moivre Slider Controls & Formula (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
              }`}>
                <div className="flex justify-between text-xs font-bold">
                  <span>{lang === 'ar' ? 'رتبة الجذر النوني (n):' : 'Root Order (n):'}</span>
                  <span className="font-mono text-indigo-400">{rootN}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={rootN}
                  onChange={(e) => setRootN(parseInt(e.target.value))}
                  className="w-full accent-indigo-600"
                />

                <div className="text-xs text-slate-300 space-y-2 pt-2 border-t">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">{lang === 'ar' ? 'صيغة نظرية ديموافر للجذور' : 'De Moivre Root Theorem'}</span>
                  <MathRenderer math={`z^{1/n} = r^{1/n} \\left[ \\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right) \\right]`} lang={lang} />
                  <p className="text-[10px] text-slate-400">
                    {lang === 'ar' ? `حيث k تأخذ القيم: ٠، ١، ٢، ...، ${rootN - 1}` : `where k = 0, 1, ..., ${rootN - 1}`}
                  </p>
                </div>
              </div>

              {/* Cube Roots of Unity Omega Card */}
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-slate-950 border-amber-900/60 shadow-md'
              }`}>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs font-extrabold text-amber-400">
                    {lang === 'ar' ? 'الجذور التكعيبية للواحد الصحيح (أوميجا)' : 'Cube Roots of Unity (\\omega)'}
                  </span>
                  <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                    <MathRenderer math="1, \\omega, \\omega^2" />
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <MathRenderer math={`1 + \\omega + \\omega^2 = 0 \\implies 1 + \\omega = -\\omega^2`} lang={lang} />
                  <MathRenderer math={`\\omega^3 = 1, \\quad \\omega - \\omega^2 = \\pm i\\sqrt{3}`} lang={lang} />
                  <MathRenderer math={`\\frac{1}{\\omega} = \\omega^2, \\quad \\frac{1}{\\omega^2} = \\omega`} lang={lang} />
                </div>

                {/* Interactive Omega Power Tester */}
                <div className="pt-2 border-t space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold items-center">
                    <span>{lang === 'ar' ? 'حساب قوى أوميجا السريعة:' : 'Fast Omega Power Reduction:'}</span>
                    <span className="text-amber-400">
                      <MathRenderer math={`\\omega^{${omegaPower}}`} />
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={omegaPower}
                    onChange={(e) => setOmegaPower(parseInt(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="text-center font-bold text-xs text-amber-300 py-1">
                    <MathRenderer
                      math={`\\omega^{${omegaPower}} = \\omega^{${omegaPower % 3 === 0 ? '3k' : omegaPower % 3 === 1 ? '3k + 1' : '3k + 2'}} = ${
                        omegaPower % 3 === 0 ? '1' : omegaPower % 3 === 1 ? '\\omega' : '\\omega^2'
                      }`}
                      lang={lang}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
