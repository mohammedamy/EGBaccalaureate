import React from 'react';
import type { Language } from '../i18n/translations';
import type { DiagramType } from '../types/curriculum';

interface Props {
  type?: DiagramType;
  lang: Language;
}

export const TextbookDiagram: React.FC<Props> = ({ type, lang }) => {
  if (!type) return null;
  const isAr = lang === 'ar';

  return (
    <div className="my-4 p-3 bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 rounded-xl max-w-md mx-auto shadow-inner textbook-diagram-card print-avoid-break">
      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 text-center flex items-center justify-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block no-print" />
        <span>{isAr ? 'الشكل المقابل' : 'Figure Shown'}</span>
      </div>

      <div className="flex justify-center items-center">
        {/* 1. Statics Horizontal Friction (P inclined) */}
        {type === 'statics_horizontal_friction' && (
          <svg viewBox="0 0 360 200" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="groundHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arrowP" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
              <marker id="arrowR" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
              </marker>
              <marker id="arrowW" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
              </marker>
              <marker id="arrowFs" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-orange-600 dark:fill-orange-400" />
              </marker>
            </defs>

            <line x1="30" y1="130" x2="330" y2="130" stroke="currentColor" className="text-slate-800 dark:text-slate-200" strokeWidth="2.5" />
            <rect x="30" y="130" width="300" height="15" fill="url(#groundHatch)" />

            <rect x="130" y="80" width="70" height="50" rx="4" className="fill-white dark:fill-slate-800 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
            <circle cx="165" cy="105" r="3.5" className="fill-slate-900 dark:fill-slate-100" />

            <line x1="165" y1="105" x2="165" y2="175" stroke="currentColor" className="text-amber-600 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#arrowW)" />
            <text x="175" y="172" className="text-xs font-black fill-amber-700 dark:fill-amber-300">
              {isAr ? 'و = ٣٠ ن' : 'W = 30 N'}
            </text>

            <line x1="165" y1="105" x2="165" y2="35" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#arrowR)" />
            <text x="175" y="40" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">
              {isAr ? 'ر' : 'R'}
            </text>

            <line x1="165" y1="105" x2="275" y2="42" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#arrowP)" />
            <text x="280" y="42" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">
              {isAr ? 'ق = ١٥ ن' : 'P = 15 N'}
            </text>

            <line x1="165" y1="105" x2="245" y2="105" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M 205 105 A 40 40 0 0 0 200 85" fill="none" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="1.5" />
            <text x="212" y="98" className="text-[11px] font-black fill-indigo-800 dark:fill-indigo-300">
              {isAr ? '٣٠°' : '30°'}
            </text>

            <line x1="130" y1="130" x2="60" y2="130" stroke="currentColor" className="text-orange-600 dark:text-orange-400" strokeWidth="2.5" markerEnd="url(#arrowFs)" />
            <text x="50" y="122" className="text-xs font-black fill-orange-700 dark:fill-orange-300">
              {isAr ? 'ح_س' : 'Fs'}
            </text>
          </svg>
        )}

        {/* 2. Statics Horizontal Simple Friction (Horizontal Force P) */}
        {type === 'statics_horizontal_simple_friction' && (
          <svg viewBox="0 0 360 200" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="ghatch2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arP2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
              <marker id="arR2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
              </marker>
              <marker id="arW2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
              </marker>
              <marker id="arF2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-orange-600 dark:fill-orange-400" />
              </marker>
            </defs>

            <line x1="30" y1="130" x2="330" y2="130" stroke="currentColor" className="text-slate-800 dark:text-slate-200" strokeWidth="2.5" />
            <rect x="30" y="130" width="300" height="15" fill="url(#ghatch2)" />

            <rect x="135" y="80" width="70" height="50" rx="4" className="fill-white dark:fill-slate-800 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
            <circle cx="170" cy="105" r="3.5" className="fill-slate-900 dark:fill-slate-100" />

            <line x1="170" y1="105" x2="170" y2="175" stroke="currentColor" className="text-amber-600 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#arW2)" />
            <text x="178" y="172" className="text-xs font-black fill-amber-700 dark:fill-amber-300">
              {isAr ? 'و = ٤٠ ن' : 'W = 40 N'}
            </text>

            <line x1="170" y1="105" x2="170" y2="35" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#arR2)" />
            <text x="178" y="40" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">
              {isAr ? 'ر' : 'R'}
            </text>

            {/* Horizontal Force P */}
            <line x1="205" y1="105" x2="285" y2="105" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#arP2)" />
            <text x="290" y="110" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">
              {isAr ? 'ق' : 'P'}
            </text>

            {/* Friction Force Fs */}
            <line x1="135" y1="130" x2="65" y2="130" stroke="currentColor" className="text-orange-600 dark:text-orange-400" strokeWidth="2.5" markerEnd="url(#arF2)" />
            <text x="50" y="122" className="text-xs font-black fill-orange-700 dark:fill-orange-300">
              {isAr ? 'ح_س' : 'Fs'}
            </text>
          </svg>
        )}

        {/* 3. Statics Inclined Friction */}
        {type === 'statics_inclined_friction' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="baseHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arrowInc" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
              <marker id="arrowGr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
              </marker>
              <marker id="arrowOr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-orange-600 dark:fill-orange-400" />
              </marker>
              <marker id="arrowAm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
              </marker>
            </defs>

            <polygon points="40,165 310,165 310,40" className="fill-slate-100 dark:fill-slate-800/50 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2.5" />
            <rect x="40" y="165" width="270" height="12" fill="url(#baseHatch)" />

            <path d="M 85 165 A 45 45 0 0 0 78 144" fill="none" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="1.5" />
            <text x="92" y="158" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">
              {isAr ? '٣٠°' : '30°'}
            </text>

            <g transform="translate(180, 100) rotate(-24.8)">
              <rect x="-30" y="-35" width="60" height="35" rx="3" className="fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
              
              <line x1="30" y1="-18" x2="85" y2="-18" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#arrowInc)" />
              <text x="92" y="-14" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">
                {isAr ? 'ق = ٢٥ ن' : 'P = 25 N'}
              </text>

              <line x1="0" y1="-35" x2="0" y2="-80" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#arrowGr)" />
              <text x="8" y="-75" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">
                {isAr ? 'ر' : 'R'}
              </text>

              <line x1="-30" y1="0" x2="-75" y2="0" stroke="currentColor" className="text-orange-600 dark:text-orange-400" strokeWidth="2" markerEnd="url(#arrowOr)" />
              <text x="-95" y="5" className="text-xs font-black fill-orange-700 dark:fill-orange-300">
                {isAr ? 'ح_س' : 'Fs'}
              </text>
            </g>

            <line x1="180" y1="100" x2="180" y2="185" stroke="currentColor" className="text-amber-600 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#arrowAm)" />
            <text x="188" y="180" className="text-xs font-black fill-amber-700 dark:fill-amber-300">
              {isAr ? 'و = ٢٠ ن' : 'W = 20 N'}
            </text>
          </svg>
        )}

        {/* 4. Solid Geometry Sphere */}
        {type === 'solid_geometry_sphere' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <marker id="axisArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-700 dark:fill-slate-300" />
              </marker>
            </defs>

            <line x1="120" y1="180" x2="120" y2="20" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#axisArrow)" />
            <text x="126" y="25" className="text-xs font-black fill-slate-800 dark:fill-slate-200">Z</text>

            <line x1="50" y1="140" x2="320" y2="140" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#axisArrow)" />
            <text x="325" y="145" className="text-xs font-black fill-slate-800 dark:fill-slate-200">Y</text>

            <line x1="180" y1="90" x2="60" y2="185" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#axisArrow)" />
            <text x="45" y="190" className="text-xs font-black fill-slate-800 dark:fill-slate-200">X</text>

            <circle cx="210" cy="75" r="45" className="fill-cyan-500/15 dark:fill-cyan-500/20 stroke-cyan-600 dark:stroke-cyan-400" strokeWidth="2.5" />
            <ellipse cx="210" cy="75" rx="45" ry="14" fill="none" className="stroke-cyan-600/50 dark:stroke-cyan-400/50" strokeWidth="1.5" strokeDasharray="4,3" />

            <circle cx="210" cy="75" r="4.5" className="fill-amber-500" />
            <text x="218" y="70" className="text-xs font-black fill-amber-700 dark:fill-amber-300">
              C(4, 4, 4)
            </text>

            <line x1="210" y1="75" x2="255" y2="75" stroke="currentColor" className="text-amber-500" strokeWidth="2" />
            <text x="228" y="90" className="text-xs font-black fill-amber-700 dark:fill-amber-300">R = 4</text>
          </svg>
        )}

        {/* 5. 3D Distance Box */}
        {type === 'distance_3d_box' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <line x1="100" y1="180" x2="100" y2="25" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" />
            <line x1="30" y1="150" x2="320" y2="150" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" />
            <line x1="160" y1="100" x2="50" y2="190" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" />

            {/* Box Front Face */}
            <rect x="100" y="80" width="130" height="70" fill="none" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
            {/* Box Back Face */}
            <rect x="150" y="45" width="130" height="70" fill="none" className="stroke-slate-500" strokeWidth="1.5" />

            {/* Connecting Edges */}
            <line x1="100" y1="80" x2="150" y2="45" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
            <line x1="230" y1="80" x2="280" y2="45" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
            <line x1="100" y1="150" x2="150" y2="115" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="230" y1="150" x2="280" y2="115" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />

            {/* Point A */}
            <circle cx="100" cy="150" r="5" className="fill-indigo-600" />
            <text x="85" y="170" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">A(1, -2, 4)</text>

            {/* Point B */}
            <circle cx="280" cy="45" r="5" className="fill-emerald-600" />
            <text x="270" y="35" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">B(4, 2, 4)</text>

            {/* Distance Vector AB */}
            <line x1="100" y1="150" x2="280" y2="45" stroke="currentColor" className="text-amber-500" strokeWidth="2.5" />
            <text x="195" y="105" className="text-sm font-black fill-amber-700 dark:fill-amber-300">d = 5</text>
          </svg>
        )}

        {/* 6. Sphere General Center & Radius */}
        {type === 'sphere_general_center_radius' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <circle cx="180" cy="105" r="70" className="fill-indigo-500/10 dark:fill-indigo-500/20 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
            <ellipse cx="180" cy="105" rx="70" ry="22" fill="none" className="stroke-indigo-600/50 dark:stroke-indigo-400/50" strokeWidth="1.5" strokeDasharray="4,3" />

            <circle cx="180" cy="105" r="5" className="fill-amber-500" />
            <text x="188" y="100" className="text-xs font-black fill-amber-700 dark:fill-amber-300">
              C(2, -3, 1)
            </text>

            <line x1="180" y1="105" x2="250" y2="105" stroke="currentColor" className="text-amber-500" strokeWidth="2.5" />
            <text x="210" y="95" className="text-xs font-black fill-amber-700 dark:fill-amber-300">R = 6</text>
          </svg>
        )}

        {/* 7. Polygon Diagonals */}
        {type === 'polygon_diagonals' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            {/* A regular 11-gon */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle1 = (i * 2 * Math.PI) / 11 - Math.PI / 2;
              const x1 = 180 + 75 * Math.cos(angle1);
              const y1 = 105 + 75 * Math.sin(angle1);
              return Array.from({ length: 11 }).map((__, j) => {
                if (j <= i) return null;
                const angle2 = (j * 2 * Math.PI) / 11 - Math.PI / 2;
                const x2 = 180 + 75 * Math.cos(angle2);
                const y2 = 105 + 75 * Math.sin(angle2);
                const isSide = j === i + 1 || (i === 0 && j === 10);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    className={isSide ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-300 dark:text-slate-700'}
                    strokeWidth={isSide ? 2.5 : 0.8}
                  />
                );
              });
            })}

            {/* Vertices */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / 11 - Math.PI / 2;
              const x = 180 + 75 * Math.cos(angle);
              const y = 105 + 75 * Math.sin(angle);
              return (
                <circle key={i} cx={x} cy={y} r="4" className="fill-indigo-700 dark:fill-indigo-300 stroke-white dark:stroke-slate-900" strokeWidth="1.5" />
              );
            })}

            <text x="180" y="198" textAnchor="middle" className="text-xs font-black fill-slate-700 dark:fill-slate-300">
              {isAr ? 'مضلع محدب: عدد الرؤوس ن = ١١' : 'Convex Polygon: Vertices n = 11'}
            </text>
          </svg>
        )}

        {/* 8. Trig Derivative Tangent */}
        {type === 'trig_derivative_tangent' && (
          <svg viewBox="0 0 360 200" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <marker id="trigArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
            </defs>
            <line x1="40" y1="110" x2="320" y2="110" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" markerEnd="url(#trigArr)" />
            <line x1="160" y1="180" x2="160" y2="20" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" markerEnd="url(#trigArr)" />
            <text x="325" y="115" className="text-xs font-bold fill-slate-600">x</text>
            <text x="165" y="25" className="text-xs font-bold fill-slate-600">y</text>

            <path d="M 60 170 Q 120 140 160 110 T 260 50" fill="none" stroke="currentColor" className="text-cyan-600 dark:text-cyan-400" strokeWidth="2.5" />
            <text x="240" y="45" className="text-xs font-bold fill-cyan-700 dark:fill-cyan-300">y = f(x)</text>

            <line x1="110" y1="160" x2="210" y2="60" stroke="currentColor" className="text-amber-500" strokeWidth="2" strokeDasharray="4,3" />
            <circle cx="160" cy="110" r="4" className="fill-amber-600" />
            <text x="170" y="125" className="text-xs font-bold fill-amber-700 dark:fill-amber-300">P(x₀, y₀)</text>
          </svg>
        )}

        {/* 9. Secant Derivative Graph */}
        {type === 'secant_derivative_graph' && (
          <svg viewBox="0 0 360 200" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <line x1="40" y1="140" x2="320" y2="140" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />
            <line x1="180" y1="180" x2="180" y2="20" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />

            <path d="M 80 40 Q 180 120 280 40" fill="none" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" />
            <text x="220" y="50" className="text-xs font-bold fill-indigo-700 dark:fill-indigo-300">f(x) = sec(3x)</text>

            <circle cx="230" cy="70" r="4" className="fill-amber-500" />
            <line x1="190" y1="110" x2="270" y2="30" stroke="currentColor" className="text-amber-500" strokeWidth="2" />
          </svg>
        )}

        {/* 10. Cotangent Curvature Graph */}
        {type === 'cotangent_curvature_graph' && (
          <svg viewBox="0 0 360 200" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <line x1="40" y1="100" x2="320" y2="100" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />
            <line x1="180" y1="180" x2="180" y2="20" stroke="currentColor" className="text-slate-400 dark:text-slate-600" strokeWidth="1.5" />

            <path d="M 80 30 Q 140 80 180 100 T 280 170" fill="none" stroke="currentColor" className="text-cyan-600 dark:text-cyan-400" strokeWidth="2.5" />
            <text x="210" y="45" className="text-xs font-bold fill-cyan-700 dark:fill-cyan-300">y = cot(πx)</text>

            <circle cx="140" cy="75" r="4.5" className="fill-amber-500" />
            <text x="80" y="80" className="text-xs font-bold fill-amber-700 dark:fill-amber-300">
              P(x₀, y₀)
            </text>
          </svg>
        )}

        {/* 11. Plane Intercepts 3D */}
        {type === 'plane_intercepts_3d' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <marker id="planeAxis" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-700 dark:fill-slate-300" />
              </marker>
              <marker id="normVec" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
            </defs>

            <line x1="140" y1="190" x2="140" y2="20" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#planeAxis)" />
            <text x="146" y="25" className="text-xs font-black fill-slate-800 dark:fill-slate-200">Z</text>

            <line x1="50" y1="150" x2="330" y2="150" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#planeAxis)" />
            <text x="335" y="155" className="text-xs font-black fill-slate-800 dark:fill-slate-200">Y</text>

            <line x1="200" y1="100" x2="60" y2="195" stroke="currentColor" className="text-slate-700 dark:text-slate-300" strokeWidth="2" markerEnd="url(#planeAxis)" />
            <text x="45" y="200" className="text-xs font-black fill-slate-800 dark:fill-slate-200">X</text>

            <polygon points="90,175 260,150 140,50" className="fill-indigo-500/20 dark:fill-indigo-500/30 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />

            <circle cx="90" cy="175" r="4.5" className="fill-amber-500" />
            <text x="96" y="190" className="text-xs font-black fill-amber-700 dark:fill-amber-300">A(1, 0, 0)</text>

            <circle cx="260" cy="150" r="4.5" className="fill-amber-500" />
            <text x="265" y="145" className="text-xs font-black fill-amber-700 dark:fill-amber-300">B(0, 2, 0)</text>

            <circle cx="140" cy="50" r="4.5" className="fill-amber-500" />
            <text x="148" y="55" className="text-xs font-black fill-amber-700 dark:fill-amber-300">C(0, 0, 3)</text>

            <line x1="160" y1="125" x2="215" y2="65" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#normVec)" />
            <text x="220" y="65" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">
              n = (6, 3, 2)
            </text>
          </svg>
        )}

        {/* 12. Coplanar Vectors 3D */}
        {type === 'coplanar_vectors_3d' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <marker id="vVec" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
            </defs>
            <polygon points="70,160 270,160 300,70 100,70" className="fill-cyan-500/15 dark:fill-cyan-500/25 stroke-cyan-600 dark:stroke-cyan-400" strokeWidth="2" />
            <text x="250" y="90" className="text-xs font-bold fill-cyan-700 dark:fill-cyan-300">{isAr ? 'المستوى المشترك' : 'Coplanar Plane'}</text>

            <circle cx="170" cy="120" r="4.5" className="fill-slate-900 dark:fill-slate-100" />

            <line x1="170" y1="120" x2="250" y2="135" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#vVec)" />
            <text x="255" y="145" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">u = (1, 2, 3)</text>

            <line x1="170" y1="120" x2="120" y2="90" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#vVec)" />
            <text x="65" y="85" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">v = (0, 1, 2)</text>

            <line x1="170" y1="120" x2="220" y2="85" stroke="currentColor" className="text-amber-600 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#vVec)" />
            <text x="225" y="80" className="text-xs font-black fill-amber-700 dark:fill-amber-300">w = (1, 0, k)</text>
          </svg>
        )}

        {/* 13. Line Plane Angle 3D */}
        {type === 'line_plane_angle_3d' && (
          <svg viewBox="0 0 360 210" className="w-full max-w-[340px] h-auto overflow-visible select-none">
            <defs>
              <marker id="lnArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-indigo-600 dark:fill-indigo-400" />
              </marker>
              <marker id="nmArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
              </marker>
            </defs>

            <polygon points="50,150 250,150 310,70 110,70" className="fill-indigo-500/15 dark:fill-indigo-500/25 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
            <text x="80" y="90" className="text-xs font-bold fill-indigo-700 dark:fill-indigo-300">Plane: y + z - 5 = 0</text>

            <circle cx="180" cy="110" r="4.5" className="fill-amber-500" />

            <line x1="180" y1="110" x2="180" y2="30" stroke="currentColor" className="text-emerald-600 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#nmArr)" />
            <text x="188" y="35" className="text-xs font-black fill-emerald-700 dark:fill-emerald-300">n = (0, 1, 1)</text>

            <line x1="90" y1="155" x2="260" y2="70" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#lnArr)" />
            <text x="265" y="70" className="text-xs font-black fill-indigo-700 dark:fill-indigo-300">Line r</text>

            <line x1="180" y1="110" x2="250" y2="110" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M 215 110 A 35 35 0 0 0 210 95" fill="none" stroke="currentColor" className="text-amber-600 dark:text-amber-400" strokeWidth="2" />
            <text x="225" y="103" className="text-xs font-black fill-amber-700 dark:fill-amber-300">θ = 30°</text>
          </svg>
        )}
      </div>
    </div>
  );
};
