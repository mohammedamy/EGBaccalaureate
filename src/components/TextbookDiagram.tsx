import React from 'react';
import type { Language } from '../i18n/translations';
import type { DiagramType } from '../types/curriculum';
import { MathRenderer } from './MathRenderer';

interface Props {
  type?: DiagramType;
  lang: Language;
}

export const TextbookDiagram: React.FC<Props> = ({ type, lang }) => {
  if (!type) return null;
  const isAr = lang === 'ar';

  // Common SVG styling tokens
  const nonScaling = { vectorEffect: 'non-scaling-stroke' } as React.SVGAttributes<SVGElement>;

  return (
    <div className="my-5 p-4 sm:p-5 bg-slate-900/70 dark:bg-slate-900/80 border-2 border-slate-700/60 dark:border-slate-800 rounded-2xl w-full max-w-xl mx-auto shadow-md textbook-diagram-card print-avoid-break">
      {/* Figure Title Header */}
      <div className="text-xs font-bold text-slate-400 dark:text-slate-400 mb-3 text-center flex items-center justify-center gap-2 border-b border-slate-800 pb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm no-print" />
        <span className="tracking-wide uppercase text-[11px] font-extrabold text-slate-300 dark:text-slate-300">
          {isAr ? 'الشكل التوضيحي المعتمد من كتاب الوزارة' : 'Official Ministry Textbook Figure'}
        </span>
      </div>

      {/* SVG Canvas Area */}
      <div className="flex justify-center items-center overflow-x-auto py-1">
        {/* 1. Statics Horizontal Friction (P inclined) */}
        {type === 'statics_horizontal_friction' && (
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="gHatch1" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" className="text-slate-600 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arrInd1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-500 dark:fill-indigo-400" />
              </marker>
              <marker id="arrEmd1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-500 dark:fill-emerald-400" />
              </marker>
              <marker id="arrAmb1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-amber-500 dark:fill-amber-400" />
              </marker>
              <marker id="arrOrg1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-rose-500 dark:fill-rose-400" />
              </marker>
            </defs>

            {/* Rough Horizontal Surface */}
            <line x1="20" y1="150" x2="420" y2="150" stroke="currentColor" className="text-slate-400 dark:text-slate-400" strokeWidth="2.5" {...nonScaling} />
            <rect x="20" y="150" width="400" height="16" fill="url(#gHatch1)" />

            {/* Block */}
            <rect x="165" y="90" width="90" height="60" rx="6" className="fill-slate-800 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-300" strokeWidth="2" {...nonScaling} />
            <circle cx="210" cy="120" r="4" className="fill-white" />

            {/* Weight W */}
            <line x1="210" y1="120" x2="210" y2="205" stroke="currentColor" className="text-amber-500 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#arrAmb1)" {...nonScaling} />
            <text x="220" y="200" className="text-xs font-bold fill-amber-400 dark:fill-amber-300">W</text>

            {/* Normal Reaction R */}
            <line x1="210" y1="120" x2="210" y2="35" stroke="currentColor" className="text-emerald-500 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#arrEmd1)" {...nonScaling} />
            <text x="220" y="42" className="text-xs font-bold fill-emerald-400 dark:fill-emerald-300">R</text>

            {/* Inclined Pull Force P (30 deg) */}
            <line x1="210" y1="120" x2="340" y2="45" stroke="currentColor" className="text-indigo-400 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#arrInd1)" {...nonScaling} />
            <text x="345" y="45" className="text-xs font-bold fill-indigo-300 dark:fill-indigo-300">P</text>

            {/* Angle 30 Arc */}
            <line x1="210" y1="120" x2="310" y2="120" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" strokeDasharray="4,4" {...nonScaling} />
            <path d="M 260 120 A 50 50 0 0 0 255 94" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="1.75" {...nonScaling} />
            <text x="270" y="112" className="text-[11px] font-bold fill-indigo-300">30°</text>

            {/* Friction Force Fs */}
            <line x1="165" y1="150" x2="70" y2="150" stroke="currentColor" className="text-rose-400 dark:text-rose-400" strokeWidth="2.5" markerEnd="url(#arrOrg1)" {...nonScaling} />
            <text x="50" y="145" className="text-xs font-bold fill-rose-300 dark:fill-rose-300">Fs</text>
          </svg>
        )}

        {/* 2. Statics Horizontal Simple Friction */}
        {type === 'statics_horizontal_simple_friction' && (
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="gHatch2" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" className="text-slate-600 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arrInd2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-500 dark:fill-indigo-400" />
              </marker>
              <marker id="arrEmd2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-500 dark:fill-emerald-400" />
              </marker>
              <marker id="arrAmb2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-amber-500 dark:fill-amber-400" />
              </marker>
              <marker id="arrOrg2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-rose-500 dark:fill-rose-400" />
              </marker>
            </defs>

            <line x1="20" y1="150" x2="420" y2="150" stroke="currentColor" className="text-slate-400 dark:text-slate-400" strokeWidth="2.5" {...nonScaling} />
            <rect x="20" y="150" width="400" height="16" fill="url(#gHatch2)" />

            <rect x="175" y="90" width="90" height="60" rx="6" className="fill-slate-800 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-300" strokeWidth="2" {...nonScaling} />
            <circle cx="220" cy="120" r="4" className="fill-white" />

            {/* Weight W */}
            <line x1="220" y1="120" x2="220" y2="205" stroke="currentColor" className="text-amber-500 dark:text-amber-400" strokeWidth="2.5" markerEnd="url(#arrAmb2)" {...nonScaling} />
            <text x="230" y="200" className="text-xs font-bold fill-amber-400 dark:fill-amber-300">W</text>

            {/* Normal Reaction R */}
            <line x1="220" y1="120" x2="220" y2="35" stroke="currentColor" className="text-emerald-500 dark:text-emerald-400" strokeWidth="2.5" markerEnd="url(#arrEmd2)" {...nonScaling} />
            <text x="230" y="42" className="text-xs font-bold fill-emerald-400 dark:fill-emerald-300">R</text>

            {/* Horizontal Force P */}
            <line x1="265" y1="120" x2="360" y2="120" stroke="currentColor" className="text-indigo-400 dark:text-indigo-400" strokeWidth="2.5" markerEnd="url(#arrInd2)" {...nonScaling} />
            <text x="368" y="124" className="text-xs font-bold fill-indigo-300 dark:fill-indigo-300">P</text>

            {/* Friction Force Fs */}
            <line x1="175" y1="150" x2="80" y2="150" stroke="currentColor" className="text-rose-400 dark:text-rose-400" strokeWidth="2.5" markerEnd="url(#arrOrg2)" {...nonScaling} />
            <text x="60" y="145" className="text-xs font-bold fill-rose-300 dark:fill-rose-300">Fs</text>
          </svg>
        )}

        {/* 3. Statics Inclined Friction */}
        {type === 'statics_inclined_friction' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <pattern id="incHatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" className="text-slate-600 dark:text-slate-600" strokeWidth="1.5" />
              </pattern>
              <marker id="arrInc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-500 dark:fill-indigo-400" />
              </marker>
              <marker id="arrRInc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-500 dark:fill-emerald-400" />
              </marker>
              <marker id="arrWInc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-amber-500 dark:fill-amber-400" />
              </marker>
              <marker id="arrFsInc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-rose-500 dark:fill-rose-400" />
              </marker>
            </defs>

            {/* Wedge */}
            <polygon points="40,180 380,180 380,45" className="fill-slate-800/40 dark:fill-slate-800/60 stroke-slate-400 dark:stroke-slate-300" strokeWidth="2.5" {...nonScaling} />
            <rect x="40" y="180" width="340" height="14" fill="url(#incHatch)" />

            {/* Angle Arc 30 deg */}
            <path d="M 95 180 A 55 55 0 0 0 88 158" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="2" {...nonScaling} />
            <text x="105" y="172" className="text-xs font-bold fill-indigo-300">30°</text>

            {/* Body on Incline */}
            <g transform="translate(230, 105) rotate(-21.6)">
              <rect x="-35" y="-40" width="70" height="40" rx="4" className="fill-slate-800 stroke-slate-300" strokeWidth="2" {...nonScaling} />
              
              {/* Force P up plane */}
              <line x1="35" y1="-20" x2="95" y2="-20" stroke="currentColor" className="text-indigo-400" strokeWidth="2.5" markerEnd="url(#arrInc)" {...nonScaling} />
              <text x="102" y="-16" className="text-xs font-bold fill-indigo-300">P</text>

              {/* Normal Reaction R perpendicular to plane */}
              <line x1="0" y1="-40" x2="0" y2="-90" stroke="currentColor" className="text-emerald-400" strokeWidth="2.5" markerEnd="url(#arrRInc)" {...nonScaling} />
              <text x="8" y="-85" className="text-xs font-bold fill-emerald-300">R</text>

              {/* Friction Fs down plane */}
              <line x1="-35" y1="0" x2="-85" y2="0" stroke="currentColor" className="text-rose-400" strokeWidth="2.5" markerEnd="url(#arrFsInc)" {...nonScaling} />
              <text x="-105" y="5" className="text-xs font-bold fill-rose-300">Fs</text>
            </g>

            {/* Vertical Weight W */}
            <line x1="230" y1="105" x2="230" y2="205" stroke="currentColor" className="text-amber-500" strokeWidth="2.5" markerEnd="url(#arrWInc)" {...nonScaling} />
            <text x="240" y="200" className="text-xs font-bold fill-amber-300">W</text>
          </svg>
        )}

        {/* 4. Solid Geometry Sphere */}
        {type === 'solid_geometry_sphere' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="axisArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-400 dark:fill-slate-300" />
              </marker>
            </defs>

            {/* 3D Coordinate Axes */}
            <line x1="140" y1="200" x2="140" y2="20" stroke="currentColor" className="text-slate-400 dark:text-slate-400" strokeWidth="2" markerEnd="url(#axisArrow)" {...nonScaling} />
            <text x="148" y="25" className="text-xs font-black fill-slate-300">Z</text>

            <line x1="60" y1="150" x2="380" y2="150" stroke="currentColor" className="text-slate-400 dark:text-slate-400" strokeWidth="2" markerEnd="url(#axisArrow)" {...nonScaling} />
            <text x="388" y="154" className="text-xs font-black fill-slate-300">Y</text>

            <line x1="210" y1="95" x2="70" y2="205" stroke="currentColor" className="text-slate-400 dark:text-slate-400" strokeWidth="2" markerEnd="url(#axisArrow)" {...nonScaling} />
            <text x="55" y="210" className="text-xs font-black fill-slate-300">X</text>

            {/* Sphere Body */}
            <circle cx="250" cy="80" r="55" className="fill-cyan-500/15 stroke-cyan-400" strokeWidth="2.5" {...nonScaling} />
            <ellipse cx="250" cy="80" rx="55" ry="18" fill="none" className="stroke-cyan-400/60" strokeWidth="1.5" strokeDasharray="4,4" {...nonScaling} />

            {/* Center Point C */}
            <circle cx="250" cy="80" r="4.5" className="fill-amber-400" />
            <text x="258" y="75" className="text-xs font-bold fill-amber-300">C</text>

            {/* Radius R */}
            <line x1="250" y1="80" x2="305" y2="80" stroke="currentColor" className="text-amber-400" strokeWidth="2" {...nonScaling} />
            <text x="272" y="96" className="text-xs font-bold fill-amber-300">R</text>

            {/* Tangent projection to XY Plane */}
            <line x1="250" y1="80" x2="250" y2="150" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" strokeDasharray="4,4" {...nonScaling} />
            <circle cx="250" cy="150" r="3.5" className="fill-slate-400" />
          </svg>
        )}

        {/* 5. 3D Distance Box */}
        {type === 'distance_3d_box' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            {/* Box Front Face */}
            <rect x="120" y="90" width="160" height="85" fill="none" className="stroke-slate-500" strokeWidth="1.75" strokeDasharray="4,4" {...nonScaling} />
            {/* Box Back Face */}
            <rect x="180" y="45" width="160" height="85" fill="none" className="stroke-slate-400" strokeWidth="1.75" {...nonScaling} />

            {/* Connecting Edges */}
            <line x1="120" y1="90" x2="180" y2="45" stroke="currentColor" className="text-slate-400" strokeWidth="1.75" {...nonScaling} />
            <line x1="280" y1="90" x2="340" y2="45" stroke="currentColor" className="text-slate-400" strokeWidth="1.75" {...nonScaling} />
            <line x1="120" y1="175" x2="180" y2="130" stroke="currentColor" className="text-slate-500" strokeWidth="1.75" strokeDasharray="4,4" {...nonScaling} />
            <line x1="280" y1="175" x2="340" y2="130" stroke="currentColor" className="text-slate-400" strokeWidth="1.75" {...nonScaling} />

            {/* Point A */}
            <circle cx="120" cy="175" r="5" className="fill-indigo-400" />
            <text x="105" y="195" className="text-xs font-bold fill-indigo-300">A</text>

            {/* Point B */}
            <circle cx="340" cy="45" r="5" className="fill-emerald-400" />
            <text x="348" y="40" className="text-xs font-bold fill-emerald-300">B</text>

            {/* Distance Diagonal AB */}
            <line x1="120" y1="175" x2="340" y2="45" stroke="currentColor" className="text-amber-400" strokeWidth="2.5" {...nonScaling} />
            <text x="235" y="115" className="text-sm font-black fill-amber-300">d</text>
          </svg>
        )}

        {/* 6. Sphere General Center & Radius */}
        {type === 'sphere_general_center_radius' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <circle cx="220" cy="115" r="80" className="fill-indigo-500/15 stroke-indigo-400" strokeWidth="2.5" {...nonScaling} />
            <ellipse cx="220" cy="115" rx="80" ry="26" fill="none" className="stroke-indigo-400/60" strokeWidth="1.75" strokeDasharray="5,4" {...nonScaling} />

            {/* Center C */}
            <circle cx="220" cy="115" r="5" className="fill-amber-400" />
            <text x="228" y="110" className="text-xs font-bold fill-amber-300">C</text>

            {/* Radius R */}
            <line x1="220" y1="115" x2="300" y2="115" stroke="currentColor" className="text-amber-400" strokeWidth="2.5" {...nonScaling} />
            <text x="255" y="105" className="text-xs font-bold fill-amber-300">R</text>
          </svg>
        )}

        {/* 7. Polygon Diagonals */}
        {type === 'polygon_diagonals' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            {/* Regular 11-gon */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle1 = (i * 2 * Math.PI) / 11 - Math.PI / 2;
              const x1 = 220 + 85 * Math.cos(angle1);
              const y1 = 115 + 85 * Math.sin(angle1);
              return Array.from({ length: 11 }).map((__, j) => {
                if (j <= i) return null;
                const angle2 = (j * 2 * Math.PI) / 11 - Math.PI / 2;
                const x2 = 220 + 85 * Math.cos(angle2);
                const y2 = 115 + 85 * Math.sin(angle2);
                const isSide = j === i + 1 || (i === 0 && j === 10);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    className={isSide ? 'text-indigo-400 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-700'}
                    strokeWidth={isSide ? 2.5 : 1.2}
                    {...nonScaling}
                  />
                );
              });
            })}

            {/* Vertices */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / 11 - Math.PI / 2;
              const x = 220 + 85 * Math.cos(angle);
              const y = 115 + 85 * Math.sin(angle);
              return (
                <circle key={i} cx={x} cy={y} r="4" className="fill-indigo-300 stroke-slate-900" strokeWidth="1.5" />
              );
            })}
          </svg>
        )}

        {/* 8. Trig Derivative Tangent */}
        {type === 'trig_derivative_tangent' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="trigArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-400 dark:fill-slate-300" />
              </marker>
            </defs>
            <line x1="30" y1="130" x2="400" y2="130" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#trigArr)" {...nonScaling} />
            <line x1="180" y1="210" x2="180" y2="20" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#trigArr)" {...nonScaling} />
            <text x="405" y="135" className="text-xs font-bold fill-slate-300">x</text>
            <text x="185" y="25" className="text-xs font-bold fill-slate-300">y</text>
            <text x="165" y="145" className="text-xs font-bold fill-slate-400">O</text>

            {/* Curve */}
            <path d="M 70 190 Q 140 160 190 125 T 310 50" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="2.5" {...nonScaling} />

            {/* Tangent Line at P */}
            <line x1="130" y1="185" x2="250" y2="65" stroke="currentColor" className="text-amber-400" strokeWidth="2" strokeDasharray="5,4" {...nonScaling} />
            <circle cx="190" cy="125" r="4.5" className="fill-amber-400" />
            <text x="200" y="140" className="text-xs font-bold fill-amber-300">P</text>
          </svg>
        )}

        {/* 9. Secant Derivative Graph */}
        {type === 'secant_derivative_graph' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="secAxis" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-400 dark:fill-slate-300" />
              </marker>
            </defs>

            {/* Axes */}
            <line x1="40" y1="160" x2="400" y2="160" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#secAxis)" {...nonScaling} />
            <line x1="220" y1="210" x2="220" y2="20" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#secAxis)" {...nonScaling} />
            <text x="405" y="165" className="text-xs font-bold fill-slate-300">x</text>
            <text x="225" y="25" className="text-xs font-bold fill-slate-300">y</text>
            <text x="205" y="175" className="text-xs font-bold fill-slate-400">O</text>

            {/* Secant Curve (U-shape) with vertex at (220, 110) */}
            <path d="M 110 35 Q 220 185 330 35" fill="none" stroke="currentColor" className="text-indigo-400" strokeWidth="2.5" {...nonScaling} />

            {/* Tangent Line at Contact Point P */}
            <line x1="220" y1="160" x2="330" y2="50" stroke="currentColor" className="text-amber-400" strokeWidth="2.5" {...nonScaling} />
            <circle cx="275" cy="105" r="5" className="fill-amber-400" />
            <text x="285" y="115" className="text-xs font-bold fill-amber-300">P</text>
          </svg>
        )}

        {/* 10. Cotangent Curvature Graph */}
        {type === 'cotangent_curvature_graph' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="cotAxis" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-400 dark:fill-slate-300" />
              </marker>
            </defs>
            <line x1="40" y1="115" x2="400" y2="115" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#cotAxis)" {...nonScaling} />
            <line x1="220" y1="210" x2="220" y2="20" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#cotAxis)" {...nonScaling} />
            <text x="405" y="120" className="text-xs font-bold fill-slate-300">x</text>
            <text x="225" y="25" className="text-xs font-bold fill-slate-300">y</text>
            <text x="205" y="130" className="text-xs font-bold fill-slate-400">O</text>

            {/* Cotangent Curve */}
            <path d="M 100 35 Q 170 95 220 115 T 340 195" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="2.5" {...nonScaling} />

            {/* Contact Point P at x = 1/4 */}
            <circle cx="170" cy="85" r="5" className="fill-amber-400" />
            <text x="155" y="80" className="text-xs font-bold fill-amber-300">P</text>
          </svg>
        )}

        {/* 11. Plane Intercepts 3D */}
        {type === 'plane_intercepts_3d' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="plAxis" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-400 dark:fill-slate-300" />
              </marker>
              <marker id="normVec" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
              </marker>
            </defs>

            {/* 3D Axes */}
            <line x1="160" y1="210" x2="160" y2="20" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#plAxis)" {...nonScaling} />
            <text x="168" y="25" className="text-xs font-black fill-slate-300">Z</text>

            <line x1="60" y1="165" x2="400" y2="165" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#plAxis)" {...nonScaling} />
            <text x="405" y="170" className="text-xs font-black fill-slate-300">Y</text>

            <line x1="230" y1="110" x2="70" y2="215" stroke="currentColor" className="text-slate-400" strokeWidth="2" markerEnd="url(#plAxis)" {...nonScaling} />
            <text x="55" y="220" className="text-xs font-black fill-slate-300">X</text>

            {/* Plane Triangle formed by intercepts */}
            <polygon points="105,190 320,165 160,55" className="fill-indigo-500/25 stroke-indigo-400" strokeWidth="2.5" {...nonScaling} />

            {/* Intercept Points */}
            <circle cx="105" cy="190" r="4.5" className="fill-amber-400" />
            <text x="90" y="205" className="text-xs font-bold fill-amber-300">A</text>

            <circle cx="320" cy="165" r="4.5" className="fill-amber-400" />
            <text x="328" y="160" className="text-xs font-bold fill-amber-300">B</text>

            <circle cx="160" cy="55" r="4.5" className="fill-amber-400" />
            <text x="170" y="60" className="text-xs font-bold fill-amber-300">C</text>

            {/* Normal Vector n */}
            <line x1="195" y1="135" x2="260" y2="65" stroke="currentColor" className="text-emerald-400" strokeWidth="2.5" markerEnd="url(#normVec)" {...nonScaling} />
            <text x="268" y="65" className="text-xs font-bold fill-emerald-300">n</text>
          </svg>
        )}

        {/* 12. Coplanar Vectors 3D */}
        {type === 'coplanar_vectors_3d' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="vVec" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-slate-300" />
              </marker>
            </defs>
            {/* Plane Sheet */}
            <polygon points="60,180 320,180 380,60 120,60" className="fill-cyan-500/15 stroke-cyan-400" strokeWidth="2" {...nonScaling} />

            {/* Origin Point */}
            <circle cx="210" cy="130" r="4.5" className="fill-white" />

            {/* Vector u */}
            <line x1="210" y1="130" x2="310" y2="150" stroke="currentColor" className="text-indigo-400" strokeWidth="2.5" markerEnd="url(#vVec)" {...nonScaling} />
            <text x="318" y="155" className="text-xs font-bold fill-indigo-300">u</text>

            {/* Vector v */}
            <line x1="210" y1="130" x2="140" y2="90" stroke="currentColor" className="text-emerald-400" strokeWidth="2.5" markerEnd="url(#vVec)" {...nonScaling} />
            <text x="125" y="85" className="text-xs font-bold fill-emerald-300">v</text>

            {/* Vector w */}
            <line x1="210" y1="130" x2="270" y2="85" stroke="currentColor" className="text-amber-400" strokeWidth="2.5" markerEnd="url(#vVec)" {...nonScaling} />
            <text x="278" y="80" className="text-xs font-bold fill-amber-300">w</text>
          </svg>
        )}

        {/* 13. Line Plane Angle 3D */}
        {type === 'line_plane_angle_3d' && (
          <svg viewBox="0 0 440 230" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="lnArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-400" />
              </marker>
              <marker id="nmArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
              </marker>
            </defs>

            {/* Plane Sheet */}
            <polygon points="50,170 310,170 390,70 130,70" className="fill-indigo-500/20 stroke-indigo-400" strokeWidth="2" {...nonScaling} />

            {/* Intersection Point */}
            <circle cx="220" cy="120" r="4.5" className="fill-amber-400" />

            {/* Normal Vector n */}
            <line x1="220" y1="120" x2="220" y2="30" stroke="currentColor" className="text-emerald-400" strokeWidth="2.5" markerEnd="url(#nmArr)" {...nonScaling} />
            <text x="228" y="35" className="text-xs font-bold fill-emerald-300">n</text>

            {/* Piercing Line r */}
            <line x1="110" y1="175" x2="330" y2="65" stroke="currentColor" className="text-indigo-400" strokeWidth="2.5" markerEnd="url(#lnArr)" {...nonScaling} />
            <text x="338" y="65" className="text-xs font-bold fill-indigo-300">r</text>

            {/* Projection onto Plane */}
            <line x1="220" y1="120" x2="310" y2="120" stroke="currentColor" className="text-slate-400" strokeWidth="1.5" strokeDasharray="4,4" {...nonScaling} />
            <path d="M 265 120 A 45 45 0 0 0 258 102" fill="none" stroke="currentColor" className="text-amber-400" strokeWidth="2" {...nonScaling} />
            <text x="275" y="112" className="text-xs font-bold fill-amber-300">θ</text>
          </svg>
        )}

        {/* 14. Cartesian Plane */}
        {type === 'cartesian_plane' && (
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <defs>
              <marker id="cpArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-400" />
              </marker>
            </defs>
            {/* Grid */}
            <line x1="40" y1="50" x2="400" y2="50" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="40" y1="110" x2="400" y2="110" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="40" y1="170" x2="400" y2="170" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="100" y1="20" x2="100" y2="200" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="220" y1="20" x2="220" y2="200" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            <line x1="340" y1="20" x2="340" y2="200" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
            {/* Axes */}
            <line x1="30" y1="110" x2="410" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cpArr)" {...nonScaling} />
            <line x1="220" y1="200" x2="220" y2="20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cpArr)" {...nonScaling} />
            <text x="415" y="114" className="text-xs font-bold fill-indigo-300">x</text>
            <text x="216" y="15" className="text-xs font-bold fill-indigo-300">y</text>
            <circle cx="220" cy="110" r="3.5" className="fill-white" />
            <text x="208" y="125" className="text-[10px] fill-slate-400">O</text>
            {/* Function Curve */}
            <path d="M 80 180 Q 220 20 360 180" fill="none" stroke="#10b981" strokeWidth="2.5" {...nonScaling} />
            <circle cx="220" cy="100" r="4.5" className="fill-emerald-400" />
          </svg>
        )}

        {/* 15. Triangle */}
        {type === 'triangle' && (
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <polygon points="220,30 80,180 360,180" className="fill-slate-800/60 stroke-indigo-400" strokeWidth="2.5" {...nonScaling} />
            <circle cx="220" cy="30" r="4" className="fill-amber-400" />
            <circle cx="80" cy="180" r="4" className="fill-amber-400" />
            <circle cx="360" cy="180" r="4" className="fill-amber-400" />
            <text x="215" y="22" className="text-xs font-bold fill-amber-300">A</text>
            <text x="65" y="195" className="text-xs font-bold fill-amber-300">B</text>
            <text x="368" y="195" className="text-xs font-bold fill-amber-300">C</text>
            {/* Centroid G */}
            <circle cx="220" cy="130" r="4" className="fill-emerald-400" />
            <text x="228" y="134" className="text-xs font-bold fill-emerald-300">G</text>
            <line x1="220" y1="30" x2="220" y2="180" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,3" />
          </svg>
        )}

        {/* 16. Circle */}
        {type === 'circle' && (
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible select-none">
            <circle cx="220" cy="110" r="75" className="fill-slate-800/40 stroke-cyan-400" strokeWidth="2.5" {...nonScaling} />
            <circle cx="220" cy="110" r="4.5" className="fill-amber-400" />
            <text x="200" y="114" className="text-xs font-bold fill-amber-300">C(h,k)</text>
            {/* Radius R */}
            <line x1="220" y1="110" x2="295" y2="110" stroke="#f59e0b" strokeWidth="2" {...nonScaling} />
            <circle cx="295" cy="110" r="3.5" className="fill-emerald-400" />
            <text x="250" y="104" className="text-xs font-bold fill-amber-300">R</text>
            {/* Tangent line */}
            <line x1="295" y1="35" x2="295" y2="185" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" {...nonScaling} />
            <text x="302" y="50" className="text-[11px] font-bold fill-emerald-300">Tangent</text>
          </svg>
        )}

        {/* 11. Biological Vector Diagram: Antibody Architecture (IgG) */}
        {type === 'bio_antibody_structure' && (
          <svg viewBox="0 0 520 360" className="w-full max-w-[480px] h-auto overflow-visible select-none">
            <defs>
              <linearGradient id="heavyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="lightGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="fabGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            {/* Background grid hint */}
            <rect x="10" y="10" width="500" height="340" rx="16" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1.5" />

            {/* Antigen-binding cleft left (Fab Left) */}
            <path d="M 85 45 C 85 30, 145 30, 145 45 L 145 75 C 135 90, 95 90, 85 75 Z" fill="url(#fabGrad)" stroke="#f59e0b" strokeWidth="2" {...nonScaling} />
            <text x="115" y="60" textAnchor="middle" className="text-[10px] font-black fill-slate-950">Ag Site</text>

            {/* Antigen-binding cleft right (Fab Right) */}
            <path d="M 375 45 C 375 30, 435 30, 435 45 L 435 75 C 425 90, 385 90, 375 75 Z" fill="url(#fabGrad)" stroke="#f59e0b" strokeWidth="2" {...nonScaling} />
            <text x="405" y="60" textAnchor="middle" className="text-[10px] font-black fill-slate-950">Ag Site</text>

            {/* Left Light Chain (V_L and C_L) */}
            <path d="M 85 85 L 85 170 C 85 180, 105 180, 105 170 L 105 85 Z" fill="url(#lightGrad)" stroke="#34d399" strokeWidth="2" {...nonScaling} />
            <text x="95" y="115" textAnchor="middle" className="text-[9px] font-bold fill-white">V_L</text>
            <text x="95" y="150" textAnchor="middle" className="text-[9px] font-bold fill-white">C_L</text>

            {/* Right Light Chain (V_L and C_L) */}
            <path d="M 415 85 L 415 170 C 415 180, 435 180, 435 170 L 435 85 Z" fill="url(#lightGrad)" stroke="#34d399" strokeWidth="2" {...nonScaling} />
            <text x="425" y="115" textAnchor="middle" className="text-[9px] font-bold fill-white">V_L</text>
            <text x="425" y="150" textAnchor="middle" className="text-[9px] font-bold fill-white">C_L</text>

            {/* Left Heavy Chain Arm */}
            <path d="M 120 85 L 120 185 L 235 220 L 235 330 C 235 340, 255 340, 255 330 L 255 210 L 140 170 L 140 85 Z" fill="url(#heavyGrad)" stroke="#60a5fa" strokeWidth="2" {...nonScaling} />
            <text x="130" y="115" textAnchor="middle" className="text-[9px] font-bold fill-white">V_H</text>
            <text x="130" y="145" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H1</text>

            {/* Right Heavy Chain Arm */}
            <path d="M 380 85 L 380 170 L 265 210 L 265 330 C 265 340, 285 340, 285 330 L 285 220 L 400 185 L 400 85 Z" fill="url(#heavyGrad)" stroke="#60a5fa" strokeWidth="2" {...nonScaling} />
            <text x="390" y="115" textAnchor="middle" className="text-[9px] font-bold fill-white">V_H</text>
            <text x="390" y="145" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H1</text>

            {/* Stem Constant Region Labels */}
            <text x="245" y="260" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H2</text>
            <text x="275" y="260" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H2</text>
            <text x="245" y="305" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H3</text>
            <text x="275" y="305" textAnchor="middle" className="text-[9px] font-bold fill-white">C_H3</text>

            {/* Disulfide Bridges (-S-S-) */}
            {/* Light-Heavy Left */}
            <line x1="105" y1="140" x2="120" y2="140" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" {...nonScaling} />
            <circle cx="112.5" cy="140" r="2.5" fill="#f59e0b" />
            {/* Light-Heavy Right */}
            <line x1="400" y1="140" x2="415" y2="140" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" {...nonScaling} />
            <circle cx="407.5" cy="140" r="2.5" fill="#f59e0b" />
            {/* Hinge interchain disulfide bonds */}
            <line x1="255" y1="215" x2="265" y2="215" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" {...nonScaling} />
            <line x1="255" y1="225" x2="265" y2="225" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" {...nonScaling} />

            {/* Labels & Annotations */}
            <line x1="45" y1="60" x2="85" y2="60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="40" y="63" textAnchor="end" className="text-[10px] font-bold fill-amber-300">{isAr ? 'موقع الارتباط بالأنتيجين' : 'Antigen Binding Site'}</text>

            <line x1="45" y1="140" x2="85" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="40" y="143" textAnchor="end" className="text-[10px] font-bold fill-emerald-300">{isAr ? 'سلسلة خفيفة (L)' : 'Light Chain (L)'}</text>

            <line x1="475" y1="140" x2="435" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="480" y="143" textAnchor="start" className="text-[10px] font-bold fill-blue-300">{isAr ? 'سلسلة ثقيلة (H)' : 'Heavy Chain (H)'}</text>

            <line x1="330" y1="220" x2="265" y2="220" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="335" y="223" textAnchor="start" className="text-[10px] font-bold fill-amber-400">{isAr ? 'روابط ثنائية الكبريتيد (-S-S-)' : 'Disulfide Bridges (-S-S-)'}</text>

            <line x1="330" y1="285" x2="285" y2="285" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="335" y="288" textAnchor="start" className="text-[10px] font-bold fill-slate-300">{isAr ? 'المنطقة الثابتة (Fc)' : 'Constant Region (Fc)'}</text>
          </svg>
        )}

        {/* 12. Biological Vector Diagram: Sarcomere Ultrastructure */}
        {type === 'bio_sarcomere_ultrastructure' && (
          <svg viewBox="0 0 540 260" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            {/* Background card */}
            <rect x="10" y="10" width="520" height="240" rx="14" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1.5" />

            {/* Z-Disc Left (Zigzag) */}
            <path d="M 50 40 L 58 60 L 50 80 L 58 100 L 50 120 L 58 140 L 50 160 L 58 180 L 50 200" fill="none" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="54" y="220" textAnchor="middle" className="text-[11px] font-black fill-cyan-400">خط Z</text>

            {/* Z-Disc Right (Zigzag) */}
            <path d="M 490 40 L 498 60 L 490 80 L 498 100 L 490 120 L 498 140 L 490 160 L 498 180 L 490 200" fill="none" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="494" y="220" textAnchor="middle" className="text-[11px] font-black fill-cyan-400">خط Z</text>

            {/* Thin Actin Filaments (Left attached) */}
            <line x1="58" y1="70" x2="230" y2="70" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="58" y1="110" x2="230" y2="110" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="58" y1="150" x2="230" y2="150" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="58" y1="180" x2="230" y2="180" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />

            {/* Thin Actin Filaments (Right attached) */}
            <line x1="310" y1="70" x2="490" y2="70" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="310" y1="110" x2="490" y2="110" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="310" y1="150" x2="490" y2="150" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="310" y1="180" x2="490" y2="180" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />

            {/* Thick Myosin Filaments (Central with cross-bridges) */}
            <g>
              {/* Myosin bar 1 */}
              <line x1="170" y1="90" x2="370" y2="90" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
              {/* Cross bridges */}
              <line x1="190" y1="90" x2="200" y2="74" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="200" cy="73" r="2.5" fill="#f43f5e" />
              <line x1="220" y1="90" x2="210" y2="106" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="210" cy="107" r="2.5" fill="#f43f5e" />
              <line x1="320" y1="90" x2="330" y2="74" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="330" cy="73" r="2.5" fill="#f43f5e" />
              <line x1="350" y1="90" x2="340" y2="106" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="340" cy="107" r="2.5" fill="#f43f5e" />

              {/* Myosin bar 2 */}
              <line x1="170" y1="130" x2="370" y2="130" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
              {/* Cross bridges */}
              <line x1="190" y1="130" x2="200" y2="114" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="200" cy="113" r="2.5" fill="#f43f5e" />
              <line x1="220" y1="130" x2="210" y2="146" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="210" cy="147" r="2.5" fill="#f43f5e" />
              <line x1="320" y1="130" x2="330" y2="114" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="330" cy="113" r="2.5" fill="#f43f5e" />
              <line x1="350" y1="130" x2="340" y2="146" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="340" cy="147" r="2.5" fill="#f43f5e" />

              {/* Myosin bar 3 */}
              <line x1="170" y1="165" x2="370" y2="165" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
              <line x1="190" y1="165" x2="200" y2="154" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="200" cy="153" r="2.5" fill="#f43f5e" />
              <line x1="350" y1="165" x2="340" y2="176" stroke="#fb7185" strokeWidth="2.5" />
              <circle cx="340" cy="177" r="2.5" fill="#f43f5e" />
            </g>

            {/* M-Line Center */}
            <line x1="270" y1="60" x2="270" y2="190" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
            <text x="270" y="52" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">خط M</text>

            {/* Band Measure Annotations */}
            {/* H-Zone bracket */}
            <line x1="230" y1="205" x2="310" y2="205" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M 230 200 L 230 210 M 310 200 L 310 210" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="270" y="222" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">{isAr ? 'المنطقة شبه المضيئة (H)' : 'H-Zone'}</text>

            {/* A-Band bracket */}
            <line x1="170" y1="235" x2="370" y2="235" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 170 230 L 170 240 M 370 230 L 370 240" stroke="#f43f5e" strokeWidth="2" />
            <text x="270" y="250" textAnchor="middle" className="text-[11px] font-black fill-rose-300">{isAr ? 'المنطقة الداكنة (A) - ثابتة الطول' : 'A-Band (Constant Length)'}</text>

            {/* I-Band bracket Left */}
            <line x1="50" y1="25" x2="170" y2="25" stroke="#10b981" strokeWidth="1.5" />
            <path d="M 50 20 L 50 30 M 170 20 L 170 30" stroke="#10b981" strokeWidth="1.5" />
            <text x="110" y="19" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">{isAr ? 'المنطقة المضيئة (I)' : 'I-Band'}</text>

            {/* Filament Indicators */}
            <text x="115" y="100" textAnchor="middle" className="text-[9px] font-bold fill-emerald-400">{isAr ? 'أكتين رفيع' : 'Actin'}</text>
            <text x="350" y="80" textAnchor="middle" className="text-[9px] font-bold fill-rose-400">{isAr ? 'ميوسين غليظ' : 'Myosin'}</text>
          </svg>
        )}

        {/* 13. Biological Vector Diagram: DNA Replication Fork */}
        {type === 'bio_dna_replication_fork' && (
          <svg viewBox="0 0 540 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <rect x="10" y="10" width="520" height="260" rx="14" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1.5" />

            {/* Parental DNA strands before fork (Left) */}
            <path d="M 30 115 Q 80 85, 130 115 T 230 115" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <path d="M 30 145 Q 80 175, 130 145 T 230 145" fill="none" stroke="#60a5fa" strokeWidth="3" />
            {/* Hydrogen bonds before fork */}
            <line x1="60" y1="105" x2="60" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1="100" y1="110" x2="100" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1="140" y1="105" x2="140" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1="180" y1="110" x2="180" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />

            {/* Helicase at fork */}
            <polygon points="215,100 250,130 215,160" fill="#a855f7" stroke="#c084fc" strokeWidth="2" />
            <text x="210" y="88" className="text-[10px] font-black fill-purple-300">Helicase (إنزيم اللولب)</text>

            {/* Unwound Top Template Strand (3' to 5') */}
            <path d="M 245 115 C 280 80, 340 60, 500 60" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <text x="510" y="65" className="text-xs font-black fill-blue-400">5'</text>
            <text x="20" y="118" className="text-xs font-black fill-blue-400">3'</text>

            {/* Leading Strand (Continuous 5' to 3') */}
            <path d="M 270 75 L 480 75" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="485,75 475,70 475,80" fill="#10b981" />
            <text x="260" y="78" className="text-[10px] font-black fill-emerald-400">5'</text>
            <text x="492" y="78" className="text-[10px] font-black fill-emerald-400">3'</text>
            <text x="375" y="45" textAnchor="middle" className="text-[10px] font-extrabold fill-emerald-300">{isAr ? 'الشريط الرائد المستمر (Leading Strand)' : 'Leading Strand (Continuous)'}</text>

            {/* DNA Polymerase on Leading strand */}
            <rect x="360" y="65" width="30" height="20" rx="6" fill="#059669" stroke="#34d399" strokeWidth="1.5" />
            <text x="375" y="78" textAnchor="middle" className="text-[8px] font-black fill-white">Pol III</text>

            {/* Unwound Bottom Template Strand (5' to 3') */}
            <path d="M 245 145 C 280 180, 340 200, 500 200" fill="none" stroke="#60a5fa" strokeWidth="3" />
            <text x="510" y="205" className="text-xs font-black fill-blue-400">3'</text>
            <text x="20" y="148" className="text-xs font-black fill-blue-400">5'</text>

            {/* Lagging Strand (Discontinuous Okazaki fragments) */}
            {/* Okazaki fragment 1 */}
            <rect x="440" y="185" width="16" height="6" fill="#f59e0b" rx="2" />
            <line x1="420" y1="188" x2="380" y2="188" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="375,188 385,184 385,192" fill="#10b981" />

            {/* Okazaki fragment 2 */}
            <rect x="350" y="185" width="16" height="6" fill="#f59e0b" rx="2" />
            <line x1="330" y1="188" x2="290" y2="188" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="285,188 295,184 295,192" fill="#10b981" />

            <text x="365" y="225" textAnchor="middle" className="text-[10px] font-extrabold fill-amber-300">{isAr ? 'قطع أوكازاكي والشريط المتخلف (Lagging Strand)' : 'Lagging Strand & Okazaki Fragments'}</text>
            <text x="448" y="180" textAnchor="middle" className="text-[8px] font-bold fill-amber-400">Primer</text>
            <text x="358" y="180" textAnchor="middle" className="text-[8px] font-bold fill-amber-400">Primer</text>

            {/* Direction Arrow */}
            <line x1="160" y1="245" x2="250" y2="245" stroke="#c084fc" strokeWidth="2" markerEnd="url(#arrInd1)" />
            <text x="205" y="260" textAnchor="middle" className="text-[10px] font-bold fill-purple-300">{isAr ? 'اتجاه حركة شوكة التضاعف' : 'Fork Movement Direction'}</text>
          </svg>
        )}

        {/* 14. Biological Vector Diagram: Flower Whorls Anatomy */}
        {type === 'bio_flower_whorls' && (
          <svg viewBox="0 0 520 320" className="w-full max-w-[480px] h-auto overflow-visible select-none">
            <rect x="10" y="10" width="500" height="300" rx="14" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1.5" />

            {/* Pedicel & Receptacle (التخت والعنق) */}
            <line x1="260" y1="270" x2="260" y2="300" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" />
            <path d="M 230 270 C 230 250, 290 250, 290 270 Z" fill="#15803d" stroke="#22c55e" strokeWidth="2" />
            <text x="260" y="290" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200">{isAr ? 'التخت' : 'Receptacle'}</text>

            {/* Whorl 1: Calyx Sepals (السبلات - الكأس) */}
            <path d="M 230 265 C 190 260, 160 235, 150 210 C 175 225, 205 240, 235 255 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
            <path d="M 290 265 C 330 260, 360 235, 370 210 C 345 225, 315 240, 285 255 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
            <text x="135" y="225" className="text-[10px] font-bold fill-emerald-400">{isAr ? 'الكأس (سبلات)' : 'Calyx (Sepals)'}</text>

            {/* Whorl 2: Corolla Petals (البتلات - التويج) */}
            <path d="M 235 250 C 160 200, 120 130, 150 80 C 180 120, 205 180, 240 230 Z" fill="#ec4899" fillOpacity="0.85" stroke="#f472b6" strokeWidth="2" />
            <path d="M 285 250 C 360 200, 400 130, 370 80 C 340 120, 315 180, 280 230 Z" fill="#ec4899" fillOpacity="0.85" stroke="#f472b6" strokeWidth="2" />
            <text x="100" y="100" className="text-[10px] font-bold fill-pink-400">{isAr ? 'التويج (بتلات ملونة)' : 'Corolla (Petals)'}</text>

            {/* Whorl 3: Androecium Stamens (الأسدية - الطلع) */}
            {/* Left stamen */}
            <path d="M 245 245 C 220 190, 200 140, 210 90" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <ellipse cx="210" cy="85" rx="10" ry="6" fill="#eab308" stroke="#fde047" strokeWidth="1.5" transform="rotate(-20 210 85)" />
            {/* Right stamen */}
            <path d="M 275 245 C 300 190, 320 140, 310 90" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <ellipse cx="310" cy="85" rx="10" ry="6" fill="#eab308" stroke="#fde047" strokeWidth="1.5" transform="rotate(20 310 85)" />
            <text x="330" y="85" className="text-[10px] font-bold fill-yellow-300">{isAr ? 'الطلع: متك + خيط' : 'Stamen: Anther + Filament'}</text>

            {/* Whorl 4: Gynoecium Pistil/Carpel (المتاع) Center */}
            {/* Ovary (المبيض) */}
            <path d="M 240 250 C 235 210, 250 195, 255 180 L 265 180 C 270 195, 285 210, 280 250 Z" fill="#10b981" stroke="#34d399" strokeWidth="2" />
            {/* Style (القلم) */}
            <line x1="260" y1="180" x2="260" y2="70" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
            {/* Stigma (الميسم) */}
            <ellipse cx="260" cy="65" rx="14" ry="7" fill="#059669" stroke="#10b981" strokeWidth="2" />
            {/* Ovule inside ovary */}
            <ellipse cx="260" cy="225" rx="10" ry="14" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <circle cx="260" cy="225" r="3" fill="#854d0e" />

            <line x1="280" y1="65" x2="330" y2="55" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="335" y="58" className="text-[10px] font-bold fill-emerald-300">{isAr ? 'الميسم (Stigma)' : 'Stigma'}</text>

            <line x1="265" y1="130" x2="330" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="335" y="133" className="text-[10px] font-bold fill-emerald-300">{isAr ? 'القلم (Style)' : 'Style'}</text>

            <line x1="285" y1="225" x2="340" y2="225" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x="345" y="228" className="text-[10px] font-bold fill-emerald-300">{isAr ? 'المبيض والبويضة (Ovary & Ovule)' : 'Ovary & Ovule'}</text>
          </svg>
        )}

        {/* 15. Biological Vector Diagram: Nephron Filtration */}
        {type === 'bio_nephron_filtration' && (
          <svg viewBox="0 0 520 300" className="w-full max-w-[480px] h-auto overflow-visible select-none">
            <rect x="10" y="10" width="500" height="280" rx="14" className="fill-slate-950/60 stroke-slate-800" strokeWidth="1.5" />

            {/* Bowman's Capsule (Double-walled cup) */}
            <path d="M 120 70 C 50 110, 50 210, 120 250 C 190 250, 200 205, 220 195 L 340 195" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 140 90 C 85 125, 85 195, 140 230 C 185 230, 195 175, 220 165 L 340 165" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            {/* Capsular space */}
            <path d="M 120 70 C 50 110, 50 210, 120 250 L 140 230 C 85 195, 85 125, 140 90 Z" fill="#fbbf24" fillOpacity="0.15" />

            {/* Glomerulus (Capillary tuft) */}
            <path d="M 145 100 Q 110 130, 140 160 T 170 140 T 130 180 T 160 200" fill="none" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
            <circle cx="130" cy="140" r="18" fill="#ef4444" fillOpacity="0.3" />

            {/* Afferent arteriole (incoming, wider) */}
            <line x1="210" y1="60" x2="150" y2="105" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
            <polygon points="160,95 175,80 185,90" fill="#fca5a5" />
            <text x="220" y="60" className="text-[10px] font-black fill-rose-400">{isAr ? 'شريان وارد (متسع)' : 'Afferent Arteriole (Wide)'}</text>

            {/* Efferent arteriole (outgoing, narrower) */}
            <line x1="160" y1="200" x2="210" y2="240" stroke="#b91c1c" strokeWidth="4" strokeLinecap="round" />
            <polygon points="195,230 185,215 195,210" fill="#fca5a5" />
            <text x="220" y="245" className="text-[10px] font-black fill-red-400">{isAr ? 'شريان صادر (ضيق)' : 'Efferent Arteriole (Narrow)'}</text>

            {/* Filtration pressure arrows */}
            <line x1="120" y1="140" x2="95" y2="140" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrInd1)" />
            <line x1="130" y1="160" x2="105" y2="175" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrInd1)" />
            <text x="80" y="200" textAnchor="middle" className="text-[9px] font-bold fill-sky-300">{isAr ? 'الترشيح الفائق' : 'Ultrafiltration'}</text>

            {/* Proximal Convoluted Tubule (PCT) continuing right */}
            <path d="M 340 165 C 380 165, 400 130, 440 130 S 480 165, 500 165" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 340 195 C 380 195, 400 160, 440 160 S 480 195, 500 195" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <text x="420" y="115" textAnchor="middle" className="text-[10px] font-extrabold fill-amber-300">{isAr ? 'الأنبوبة الملتفة القريبة (PCT)' : 'Proximal Convoluted Tubule'}</text>
            <text x="120" y="45" textAnchor="middle" className="text-[11px] font-black fill-amber-400">{isAr ? 'محفظة بومان والكبيبة' : 'Bowman\'s Capsule & Glomerulus'}</text>
          </svg>
        )}

        {/* 11. Physics: Wheatstone Bridge Circuit */}
        {type === 'phys_wheatstone_bridge' && (
          <svg viewBox="0 0 500 280" className="w-full max-w-[480px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrPhy1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-cyan-400" />
              </marker>
              <marker id="arrPhyRed" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-rose-500" />
              </marker>
            </defs>

            {/* Bridge Diamond Conductors */}
            {/* Top A(250, 40), Left B(130, 140), Right C(370, 140), Bottom D(250, 240) */}
            <line x1="250" y1="40" x2="130" y2="140" stroke="#64748b" strokeWidth="2.5" />
            <line x1="250" y1="40" x2="370" y2="140" stroke="#64748b" strokeWidth="2.5" />
            <line x1="130" y1="140" x2="250" y2="240" stroke="#64748b" strokeWidth="2.5" />
            <line x1="370" y1="140" x2="250" y2="240" stroke="#64748b" strokeWidth="2.5" />

            {/* Galvanometer Central Branch B-C */}
            <line x1="130" y1="140" x2="210" y2="140" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="250" cy="140" r="26" className="fill-slate-800 stroke-cyan-400" strokeWidth="2.5" />
            <text x="250" y="146" textAnchor="middle" className="text-[16px] font-black fill-cyan-300 font-mono">G</text>
            <line x1="250" y1="140" x2="250" y2="120" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrPhyRed)" />
            <circle cx="250" cy="140" r="3" className="fill-white" />
            <line x1="290" y1="140" x2="370" y2="140" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Resistor R1 on AB */}
            <g transform="rotate(-40 190 85)">
              <rect x="170" y="75" width="40" height="20" rx="3" className="fill-cyan-950 stroke-cyan-400" strokeWidth="2" />
              <text x="190" y="68" textAnchor="middle" className="text-[12px] font-black fill-cyan-300">R₁</text>
            </g>

            {/* Resistor R2 on AC */}
            <g transform="rotate(40 310 85)">
              <rect x="290" y="75" width="40" height="20" rx="3" className="fill-indigo-950 stroke-indigo-400" strokeWidth="2" />
              <text x="310" y="68" textAnchor="middle" className="text-[12px] font-black fill-indigo-300">R₂</text>
            </g>

            {/* Resistor R3 on BD */}
            <g transform="rotate(40 190 190)">
              <rect x="170" y="180" width="40" height="20" rx="3" className="fill-emerald-950 stroke-emerald-400" strokeWidth="2" />
              <text x="190" y="215" textAnchor="middle" className="text-[12px] font-black fill-emerald-300">R₃</text>
            </g>

            {/* Resistor R4 on CD */}
            <g transform="rotate(-40 310 190)">
              <rect x="290" y="180" width="40" height="20" rx="3" className="fill-amber-950 stroke-amber-400" strokeWidth="2" />
              <text x="310" y="215" textAnchor="middle" className="text-[12px] font-black fill-amber-300">R₄</text>
            </g>

            {/* Nodes */}
            <circle cx="250" cy="40" r="5" className="fill-cyan-400" />
            <text x="250" y="25" textAnchor="middle" className="text-[11px] font-extrabold fill-slate-200">A (+)</text>

            <circle cx="130" cy="140" r="5" className="fill-cyan-400" />
            <text x="105" y="145" textAnchor="middle" className="text-[11px] font-extrabold fill-slate-200">B</text>

            <circle cx="370" cy="140" r="5" className="fill-cyan-400" />
            <text x="395" y="145" textAnchor="middle" className="text-[11px] font-extrabold fill-slate-200">C</text>

            <circle cx="250" cy="240" r="5" className="fill-cyan-400" />
            <text x="250" y="260" textAnchor="middle" className="text-[11px] font-extrabold fill-slate-200">D (-)</text>

            {/* Battery DC source leads */}
            <path d="M 250 40 L 50 40 L 50 240 L 250 240" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="5,4" />
            <rect x="30" y="125" width="40" height="30" rx="4" className="fill-slate-800 stroke-amber-400" strokeWidth="2" />
            <text x="50" y="145" textAnchor="middle" className="text-[10px] font-black fill-amber-300">V_B</text>
          </svg>
        )}

        {/* 12. Physics: Solenoid Magnetic Field */}
        {type === 'phys_solenoid_magnetic_field' && (
          <svg viewBox="0 0 520 260" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrMagBlue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-sky-400" />
              </marker>
              <marker id="arrMagGreen" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
              </marker>
            </defs>

            {/* Magnetic Field Lines through Solenoid */}
            {/* Top outside return lines */}
            <path d="M 440 120 C 470 50, 350 25, 260 25 C 170 25, 50 50, 80 120" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="6,4" markerEnd="url(#arrMagBlue)" />
            <path d="M 430 130 C 490 10, 350 -10, 260 -10 C 170 -10, 30 10, 90 130" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="6,4" markerEnd="url(#arrMagBlue)" />

            {/* Central uniform B lines inside */}
            <line x1="90" y1="120" x2="430" y2="120" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrMagBlue)" />
            <line x1="90" y1="135" x2="430" y2="135" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrMagBlue)" />
            <line x1="90" y1="150" x2="430" y2="150" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrMagBlue)" />

            {/* Bottom outside return lines */}
            <path d="M 440 150 C 470 220, 350 245, 260 245 C 170 245, 50 220, 80 150" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="6,4" markerEnd="url(#arrMagBlue)" />

            {/* Soft Iron Core */}
            <rect x="110" y="110" width="300" height="50" rx="6" className="fill-slate-800/90 stroke-slate-600" strokeWidth="2" />
            <text x="260" y="138" textAnchor="middle" className="text-[11px] font-extrabold fill-slate-400 select-none">
              {isAr ? 'قلب من الحديد المطاوع (μ كبير)' : 'Soft Iron Core (High μ)'}
            </text>

            {/* Solenoid Helical Wire Coils */}
            {[130, 170, 210, 250, 290, 330, 370].map((x, i) => (
              <g key={i}>
                <ellipse cx={x} cy="135" rx="16" ry="38" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <line x1={x - 6} y1="97" x2={x + 6} y2="97" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrMagGreen)" />
              </g>
            ))}

            {/* Poles */}
            <rect x="70" y="110" width="35" height="50" rx="4" className="fill-blue-900/80 stroke-blue-400" strokeWidth="2" />
            <text x="87" y="140" textAnchor="middle" className="text-[14px] font-black fill-blue-200">S</text>

            <rect x="415" y="110" width="35" height="50" rx="4" className="fill-rose-900/80 stroke-rose-400" strokeWidth="2" />
            <text x="432" y="140" textAnchor="middle" className="text-[14px] font-black fill-rose-200">N</text>

            {/* Labels */}
            <text x="260" y="185" textAnchor="middle" className="text-[11px] font-black fill-cyan-300">
              {isAr ? 'مجال مغناطيسي منتظم داخل الملف B = μ·n·I' : 'Uniform Magnetic Field inside Solenoid B = μ·n·I'}
            </text>
          </svg>
        )}

        {/* 13. Physics: AC Dynamo Electric Generator */}
        {type === 'phys_dynamo_generator' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <linearGradient id="gPoleN" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="gPoleS" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* North Magnetic Pole */}
            <path d="M 40 60 L 120 60 C 135 100, 135 160, 120 200 L 40 200 Z" fill="url(#gPoleN)" stroke="#f87171" strokeWidth="2" />
            <text x="80" y="138" textAnchor="middle" className="text-[22px] font-black fill-white">N</text>

            {/* South Magnetic Pole */}
            <path d="M 480 60 L 400 60 C 385 100, 385 160, 400 200 L 480 200 Z" fill="url(#gPoleS)" stroke="#60a5fa" strokeWidth="2" />
            <text x="440" y="138" textAnchor="middle" className="text-[22px] font-black fill-white">S</text>

            {/* Magnetic Field Lines N to S */}
            <line x1="135" y1="90" x2="385" y2="90" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" />
            <line x1="138" y1="130" x2="382" y2="130" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="135" y1="170" x2="385" y2="170" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" />
            <text x="260" y="80" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">{isAr ? 'خطوط الفيض المغناطيسي B' : 'Magnetic Flux Lines B'}</text>

            {/* Rotating Armature Coil (isometric projection) */}
            <polygon points="200,90 320,110 300,180 180,160" className="fill-amber-500/20 stroke-amber-400" strokeWidth="3.5" />
            <text x="195" y="85" className="text-[10px] font-bold fill-amber-300">A</text>
            <text x="325" y="105" className="text-[10px] font-bold fill-amber-300">B</text>
            <text x="310" y="195" className="text-[10px] font-bold fill-amber-300">C</text>
            <text x="170" y="175" className="text-[10px] font-bold fill-amber-300">D</text>

            {/* Rotation Axis and Curved Arrow */}
            <line x1="250" y1="50" x2="250" y2="220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,3" />
            <path d="M 235 65 A 15 15 0 0 1 265 65" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrInd1)" />
            <text x="280" y="65" className="text-[12px] font-black fill-emerald-400">ω</text>

            {/* Slip Rings at base */}
            <ellipse cx="250" cy="210" rx="14" ry="5" className="fill-amber-600 stroke-amber-300" strokeWidth="2" />
            <ellipse cx="250" cy="225" rx="14" ry="5" className="fill-amber-600 stroke-amber-300" strokeWidth="2" />

            {/* Carbon Brushes & Output Load */}
            <rect x="230" y="206" width="6" height="8" className="fill-slate-900 stroke-slate-400" />
            <rect x="264" y="221" width="6" height="8" className="fill-slate-900 stroke-slate-400" />
            <path d="M 230 210 L 200 210 L 200 260 L 300 260 L 300 225 L 270 225" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <rect x="235" y="252" width="30" height="16" rx="2" className="fill-slate-950 stroke-cyan-400" strokeWidth="2" />
            <text x="250" y="264" textAnchor="middle" className="text-[9px] font-black fill-cyan-300">{isAr ? 'حمل R' : 'Load R'}</text>
          </svg>
        )}

        {/* 14. Physics: AC RLC Resonance Phasor & Response */}
        {type === 'phys_rlc_resonance_phasor' && (
          <svg viewBox="0 0 500 260" className="w-full max-w-[480px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrPhasorL" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-indigo-400" />
              </marker>
              <marker id="arrPhasorC" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-cyan-400" />
              </marker>
              <marker id="arrPhasorR" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
              </marker>
            </defs>

            {/* Left: Phasor Vector Diagram */}
            <circle cx="140" cy="130" r="85" className="fill-slate-900/60 stroke-slate-800" strokeWidth="1.5" />
            <line x1="50" y1="130" x2="230" y2="130" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="140" y1="40" x2="140" y2="220" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* VL vector (upwards, +90 deg) */}
            <line x1="140" y1="130" x2="140" y2="55" stroke="#818cf8" strokeWidth="3.5" markerEnd="url(#arrPhasorL)" />
            <text x="155" y="65" className="text-[12px] font-black fill-indigo-300">V_L</text>

            {/* VC vector (downwards, -90 deg) */}
            <line x1="140" y1="130" x2="140" y2="205" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrPhasorC)" />
            <text x="155" y="205" className="text-[12px] font-black fill-sky-300">V_C</text>

            {/* VR and I vectors (horizontal, in-phase) */}
            <line x1="140" y1="130" x2="215" y2="130" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#arrPhasorR)" />
            <text x="215" y="120" className="text-[12px] font-black fill-emerald-300">V_R (I)</text>

            <text x="140" y="245" textAnchor="middle" className="text-[10px] font-extrabold fill-slate-300">
              {isAr ? 'مخطط المتجهات الطورية عند الرنين (V_L = V_C)' : 'Resonance Phasors: V_L = V_C'}
            </text>

            {/* Right: Resonance Curve (Impedance Z & Current I) */}
            <line x1="280" y1="210" x2="470" y2="210" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrInd1)" />
            <line x1="280" y1="210" x2="280" y2="40" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrInd1)" />
            <text x="460" y="228" className="text-[11px] font-bold fill-slate-400">f</text>
            <text x="265" y="50" className="text-[11px] font-bold fill-slate-400">Z, I</text>

            {/* Current Resonance Peak (Bell Curve) */}
            <path d="M 290 200 C 340 200, 360 70, 375 70 C 390 70, 410 200, 460 200" fill="none" stroke="#22c55e" strokeWidth="3" />
            <text x="375" y="60" textAnchor="middle" className="text-[11px] font-black fill-emerald-400">I_max = V/R</text>

            {/* Impedance Dip Curve */}
            <path d="M 290 80 C 340 80, 360 170, 375 170 C 390 170, 410 80, 460 80" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4,3" />
            <text x="375" y="188" textAnchor="middle" className="text-[10px] font-black fill-rose-400">Z_min = R</text>

            {/* f0 resonance frequency marker */}
            <line x1="375" y1="70" x2="375" y2="210" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="375" y="226" textAnchor="middle" className="text-[11px] font-black fill-amber-400">f₀</text>
          </svg>
        )}

        {/* 15. Physics: Photoelectric Effect Quartz Tube */}
        {type === 'phys_photoelectric_circuit' && (
          <svg viewBox="0 0 520 270" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrPhoton" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-violet-400" />
              </marker>
              <marker id="arrElectron" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-amber-400" />
              </marker>
            </defs>

            {/* Evacuated Glass Tube Body */}
            <rect x="100" y="50" width="320" height="120" rx="30" className="fill-slate-900/80 stroke-slate-500" strokeWidth="2.5" />
            <text x="260" y="40" textAnchor="middle" className="text-[10px] font-extrabold fill-slate-400">
              {isAr ? 'أنبوبة كوارتز مفرغة من الهواء (تسمح بنفاذ الأشعة فوق البنفسجية UV)' : 'Evacuated Quartz Chamber (Transmits UV)'}
            </text>

            {/* Photocathode (Emitter C, curved) */}
            <path d="M 160 70 A 40 50 0 0 0 160 150" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
            <text x="140" y="115" textAnchor="middle" className="text-[12px] font-black fill-sky-300">C</text>
            <text x="140" y="130" textAnchor="middle" className="text-[9px] font-bold fill-sky-400">(-)</text>

            {/* Anode (Collector A, thin cylinder) */}
            <line x1="360" y1="75" x2="360" y2="145" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
            <text x="380" y="115" textAnchor="middle" className="text-[12px] font-black fill-rose-300">A</text>
            <text x="380" y="130" textAnchor="middle" className="text-[9px] font-bold fill-rose-400">(+)</text>

            {/* Incident Light Quanta (Photons h*nu) */}
            <path d="M 90 20 Q 110 35 130 50 T 155 85" fill="none" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrPhoton)" />
            <path d="M 110 15 Q 130 30 150 50 T 155 110" fill="none" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrPhoton)" />
            <text x="90" y="15" className="text-[11px] font-black fill-purple-300">h·ν ≥ W₀</text>

            {/* Emitted Photoelectrons (e-) travelling to Anode */}
            {[85, 100, 115, 130].map((y, i) => (
              <g key={i}>
                <line x1="170" y1={y} x2="340" y2={y + (i % 2 === 0 ? 5 : -5)} stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#arrElectron)" />
                <circle cx="210 + i*30" cy={y} r="3" className="fill-amber-300" />
              </g>
            ))}
            <text x="260" y="105" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">e⁻ (KE_max)</text>

            {/* External Circuit with Microammeter and Variable Voltage */}
            <path d="M 155 150 L 155 210 L 230 210" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M 360 145 L 360 210 L 290 210" fill="none" stroke="#64748b" strokeWidth="2" />

            {/* Microammeter (μA) */}
            <circle cx="260" cy="210" r="18" className="fill-slate-800 stroke-cyan-400" strokeWidth="2" />
            <text x="260" y="215" textAnchor="middle" className="text-[11px] font-black fill-cyan-300">μA</text>

            {/* Variable DC Power Supply below */}
            <path d="M 210 210 L 210 245 L 310 245 L 310 210" fill="none" stroke="#64748b" strokeWidth="2" />
            <line x1="250" y1="237" x2="250" y2="253" stroke="#38bdf8" strokeWidth="3" />
            <line x1="260" y1="232" x2="260" y2="258" stroke="#f43f5e" strokeWidth="3" />
            <line x1="240" y1="255" x2="275" y2="235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrElectron)" />
            <text x="260" y="265" textAnchor="middle" className="text-[9px] font-bold fill-slate-300">
              {isAr ? 'جهد إيقاف متغير V_stop' : 'Variable Retarding Voltage V_stop'}
            </text>
          </svg>
        )}

        {/* 16. Physics: Laminated Transformer (Step-Up / Step-Down) */}
        {type === 'phys_transformer' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrFlux" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-emerald-400" />
              </marker>
            </defs>

            {/* Rectangular Soft Iron Core with Laminations */}
            <rect x="110" y="40" width="300" height="200" rx="16" className="fill-slate-800 stroke-slate-500" strokeWidth="3" />
            <rect x="180" y="90" width="160" height="100" rx="8" className="fill-slate-950 stroke-slate-600" strokeWidth="2" />

            {/* Core Lamination Lines */}
            {[130, 145, 160, 360, 375, 390].map((x, i) => (
              <line key={i} x1={x} y1="40" x2={x} y2="240" stroke="#475569" strokeWidth="1" strokeDasharray="3,3" />
            ))}

            {/* Magnetic Flux Path (Dashed Loop inside Core) */}
            <rect x="145" y="65" width="230" height="150" rx="12" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6,4" />
            <path d="M 260 65 L 280 65" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrFlux)" />
            <path d="M 260 215 L 240 215" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrFlux)" />
            <text x="260" y="58" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">
              {isAr ? 'فيض مغناطيسي متبادل Φ_m' : 'Mutual Flux Φ_m'}
            </text>

            {/* Primary Coil (Left Leg, Blue/Cyan, N_p) */}
            {[80, 105, 130, 155, 180, 205].map((y, i) => (
              <path key={i} d={`M 90 ${y} C 110 ${y-10}, 110 ${y+15}, 130 ${y+10}`} fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
            ))}
            <text x="75" y="70" textAnchor="middle" className="text-[11px] font-black fill-sky-300">N_p</text>
            <text x="75" y="85" textAnchor="middle" className="text-[9px] font-bold fill-sky-400">Primary</text>
            {/* Primary AC Input */}
            <path d="M 90 80 L 40 80 L 40 130" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 90 205 L 40 205 L 40 170" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="40" cy="150" r="16" className="fill-slate-900 stroke-sky-400" strokeWidth="2" />
            <path d="M 32 150 Q 36 142 40 150 T 48 150" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <text x="40" y="178" textAnchor="middle" className="text-[9px] font-black fill-sky-300">V_p, I_p</text>

            {/* Secondary Coil (Right Leg, Amber/Orange, N_s) */}
            {[90, 120, 150, 180].map((y, i) => (
              <path key={i} d={`M 390 ${y} C 410 ${y-10}, 410 ${y+15}, 430 ${y+10}`} fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
            ))}
            <text x="445" y="75" textAnchor="middle" className="text-[11px] font-black fill-amber-300">N_s</text>
            <text x="445" y="90" textAnchor="middle" className="text-[9px] font-bold fill-amber-400">Secondary</text>
            {/* Secondary Output Load */}
            <path d="M 430 90 L 480 90 L 480 130" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 430 180 L 480 180 L 480 170" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <rect x="468" y="130" width="24" height="40" rx="3" className="fill-slate-900 stroke-amber-400" strokeWidth="2" />
            <text x="480" y="154" textAnchor="middle" className="text-[9px] font-black fill-amber-300">R_L</text>
            <text x="480" y="195" textAnchor="middle" className="text-[9px] font-black fill-amber-300">V_s, I_s</text>

            {/* Core Description Label */}
            <text x="260" y="260" textAnchor="middle" className="text-[10px] font-bold fill-slate-400">
              {isAr ? 'قلب من الحديد المطاوع السيليكوني مقسم لشرائح معزولة للحد من التيارات الدوامية' : 'Laminated Silicon Steel Core (Suppresses Eddy Currents)'}
            </text>
          </svg>
        )}

        {/* 17. Physics: Moving Coil Galvanometer, Ammeter Shunt & Voltmeter Multiplier */}
        {type === 'phys_galvanometer_multiplier' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            {/* Left: Voltmeter Conversion (Galvanometer + Series Multiplier Rm) */}
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="235" height="230" rx="12" className="fill-slate-900/80 stroke-indigo-500/40" strokeWidth="2" />
              <text x="117" y="24" textAnchor="middle" className="text-[11px] font-black fill-indigo-300">
                {isAr ? 'الفولتميتر: مضاعف جهد R_m على التوالي' : 'Voltmeter: Series Multiplier R_m'}
              </text>

              {/* Circuit Line */}
              <line x1="20" y1="90" x2="60" y2="90" stroke="#818cf8" strokeWidth="3" />
              {/* Galvanometer Circle */}
              <circle cx="85" cy="90" r="24" className="fill-slate-800 stroke-cyan-400" strokeWidth="2.5" />
              <text x="85" y="94" textAnchor="middle" className="text-[13px] font-black fill-cyan-300">G</text>
              <text x="85" y="125" textAnchor="middle" className="text-[10px] font-bold fill-cyan-400">R_g (I_g)</text>

              {/* Series Multiplier Resistor Rm */}
              <line x1="109" y1="90" x2="135" y2="90" stroke="#818cf8" strokeWidth="3" />
              <rect x="135" y="78" width="60" height="24" rx="4" className="fill-indigo-950 stroke-indigo-400" strokeWidth="2.5" />
              <text x="165" y="94" textAnchor="middle" className="text-[10px] font-black fill-indigo-200">R_m</text>
              <line x1="195" y1="90" x2="215" y2="90" stroke="#818cf8" strokeWidth="3" />

              {/* Total Voltage Range Bracket */}
              <path d="M 20 150 L 20 165 L 215 165 L 215 150" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="117" y="185" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">
                V = I_g(R_g + R_m)
              </text>
              <text x="117" y="208" textAnchor="middle" className="text-[9px] font-bold fill-slate-400">
                {isAr ? 'R_m كبيرة جداً لزيادة مدى قياس فرق الجهد' : 'Large R_m expands voltage range'}
              </text>
            </g>

            {/* Right: Ammeter Conversion (Galvanometer + Parallel Shunt Rs) */}
            <g transform="translate(265, 20)">
              <rect x="0" y="0" width="235" height="230" rx="12" className="fill-slate-900/80 stroke-amber-500/40" strokeWidth="2" />
              <text x="117" y="24" textAnchor="middle" className="text-[11px] font-black fill-amber-300">
                {isAr ? 'الأميتر: مجزئ تيار R_s على التوازي' : 'Ammeter: Parallel Shunt R_s'}
              </text>

              {/* Total Current I entering */}
              <line x1="15" y1="90" x2="45" y2="90" stroke="#f59e0b" strokeWidth="3" />
              <text x="25" y="80" className="text-[11px] font-black fill-amber-400">I</text>

              {/* Node Split */}
              <circle cx="45" cy="90" r="4" className="fill-amber-400" />
              <path d="M 45 90 L 45 60 L 75 60" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <path d="M 45 90 L 45 125 L 85 125" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

              {/* Galvanometer on top branch */}
              <circle cx="105" cy="60" r="20" className="fill-slate-800 stroke-cyan-400" strokeWidth="2.5" />
              <text x="105" y="64" textAnchor="middle" className="text-[12px] font-black fill-cyan-300">G</text>
              <text x="105" y="38" textAnchor="middle" className="text-[9px] font-bold fill-cyan-400">I_g, R_g</text>
              <path d="M 125 60 L 165 60 L 165 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

              {/* Shunt Resistor on bottom branch */}
              <rect x="85" y="115" width="55" height="20" rx="3" className="fill-amber-950 stroke-amber-400" strokeWidth="2.5" />
              <text x="112" y="129" textAnchor="middle" className="text-[10px] font-black fill-amber-200">R_s</text>
              <text x="112" y="152" textAnchor="middle" className="text-[9px] font-bold fill-amber-400">I - I_g</text>
              <path d="M 140 125 L 165 125 L 165 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

              {/* Joined Node and Output */}
              <circle cx="165" cy="90" r="4" className="fill-amber-400" />
              <line x1="165" y1="90" x2="215" y2="90" stroke="#f59e0b" strokeWidth="3" />
              <text x="195" y="80" className="text-[11px] font-black fill-amber-400">I</text>

              {/* Shunt Formula Callout */}
              <text x="117" y="185" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">
                R_s = (I_g · R_g) / (I - I_g)
              </text>
              <text x="117" y="208" textAnchor="middle" className="text-[9px] font-bold fill-slate-400">
                {isAr ? 'R_s صغيرة جداً لتقليل مقاومة الجهاز الكلية' : 'Small R_s minimizes meter resistance'}
              </text>
            </g>
          </svg>
        )}

        {/* 18. Physics: Hydrogen Bohr Energy Level Transitions & Spectral Series */}
        {type === 'phys_bohr_atom_series' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrBohrLym" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-purple-400" />
              </marker>
              <marker id="arrBohrBal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-sky-400" />
              </marker>
              <marker id="arrBohrPas" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-rose-400" />
              </marker>
            </defs>

            {/* Energy Levels Horizontal Lines */}
            {/* n=infinity */}
            <line x1="80" y1="40" x2="480" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4" />
            <text x="70" y="44" textAnchor="end" className="text-[10px] font-bold fill-slate-400">n=∞</text>
            <text x="490" y="44" className="text-[10px] font-bold fill-slate-400">0 eV</text>

            {/* n=5 */}
            <line x1="80" y1="65" x2="480" y2="65" stroke="#64748b" strokeWidth="1.5" />
            <text x="70" y="69" textAnchor="end" className="text-[10px] font-bold fill-slate-400">n=5</text>
            <text x="490" y="69" className="text-[10px] font-bold fill-slate-400">-0.54 eV</text>

            {/* n=4 */}
            <line x1="80" y1="88" x2="480" y2="88" stroke="#64748b" strokeWidth="1.5" />
            <text x="70" y="92" textAnchor="end" className="text-[10px] font-bold fill-slate-400">n=4</text>
            <text x="490" y="92" className="text-[10px] font-bold fill-slate-400">-0.85 eV</text>

            {/* n=3 */}
            <line x1="80" y1="120" x2="480" y2="120" stroke="#94a3b8" strokeWidth="2" />
            <text x="70" y="124" textAnchor="end" className="text-[11px] font-black fill-slate-300">n=3</text>
            <text x="490" y="124" className="text-[10px] font-bold fill-slate-300">-1.51 eV</text>

            {/* n=2 */}
            <line x1="80" y1="165" x2="480" y2="165" stroke="#cbd5e1" strokeWidth="2.5" />
            <text x="70" y="169" textAnchor="end" className="text-[11px] font-black fill-slate-200">n=2</text>
            <text x="490" y="169" className="text-[10px] font-bold fill-slate-200">-3.40 eV</text>

            {/* n=1 Ground State */}
            <line x1="80" y1="230" x2="480" y2="230" stroke="#f8fafc" strokeWidth="3" />
            <text x="70" y="234" textAnchor="end" className="text-[12px] font-black fill-emerald-300">n=1</text>
            <text x="490" y="234" className="text-[11px] font-black fill-emerald-300">-13.6 eV</text>

            {/* Lyman Series Transitions (UV, downwards to n=1) */}
            <line x1="140" y1="165" x2="140" y2="225" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrBohrLym)" />
            <line x1="160" y1="120" x2="160" y2="225" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrBohrLym)" />
            <line x1="180" y1="88" x2="180" y2="225" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#arrBohrLym)" />
            <text x="160" y="250" textAnchor="middle" className="text-[10px] font-black fill-purple-300">
              {isAr ? 'مجموعة ليمان (UV)' : 'Lyman (UV)'}
            </text>

            {/* Balmer Series Transitions (Visible, downwards to n=2) */}
            <line x1="260" y1="120" x2="260" y2="160" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrBohrBal)" />
            <text x="260" y="145" textAnchor="end" className="text-[8px] font-bold fill-red-400">Hα 656nm </text>
            <line x1="290" y1="88" x2="290" y2="160" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrBohrBal)" />
            <text x="290" y="125" textAnchor="end" className="text-[8px] font-bold fill-cyan-300">Hβ 486nm </text>
            <line x1="320" y1="65" x2="320" y2="160" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrBohrBal)" />
            <text x="320" y="105" textAnchor="end" className="text-[8px] font-bold fill-blue-400">Hγ 434nm </text>
            <text x="290" y="185" textAnchor="middle" className="text-[10px] font-black fill-sky-300">
              {isAr ? 'مجموعة بالمر (ضوء منظور)' : 'Balmer (Visible)'}
            </text>

            {/* Paschen Series Transitions (Infrared, downwards to n=3) */}
            <line x1="410" y1="88" x2="410" y2="115" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrBohrPas)" />
            <line x1="430" y1="65" x2="430" y2="115" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrBohrPas)" />
            <text x="420" y="140" textAnchor="middle" className="text-[10px] font-black fill-rose-300">
              {isAr ? 'باشن (IR)' : 'Paschen (IR)'}
            </text>

            <text x="280" y="270" textAnchor="middle" className="text-[10px] font-bold fill-slate-300">
              ΔE = E₂ - E₁ = h·ν = hc/λ
            </text>
          </svg>
        )}

        {/* 19. Physics: Coolidge Tube for Continuous & Characteristic X-Rays */}
        {type === 'phys_coolidge_xray_tube' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            <defs>
              <marker id="arrXray" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" className="fill-cyan-300" />
              </marker>
            </defs>

            {/* Evacuated Heavy Glass Envelope */}
            <rect x="80" y="50" width="360" height="130" rx="35" className="fill-slate-900/90 stroke-slate-500" strokeWidth="2.5" />
            <text x="260" y="40" textAnchor="middle" className="text-[10px] font-extrabold fill-slate-400">
              {isAr ? 'أنبوبة كولدج الزجاجية المفرغة من الهواء لتوليد الأشعة السينية' : 'Evacuated Coolidge X-Ray Tube'}
            </text>

            {/* Cathode: Heated Tungsten Filament & Focusing Cup */}
            <g transform="translate(100, 85)">
              {/* Focusing Cup */}
              <path d="M 30 0 C 10 10, 10 50, 30 60" fill="none" stroke="#94a3b8" strokeWidth="4" />
              {/* Filament */}
              <path d="M 15 20 Q 25 30 15 40" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <text x="-5" y="34" className="text-[9px] font-black fill-amber-300">Filament (-)</text>
              <line x1="0" y1="25" x2="15" y2="25" stroke="#f59e0b" strokeWidth="2" />
              <line x1="0" y1="35" x2="15" y2="35" stroke="#f59e0b" strokeWidth="2" />
            </g>

            {/* Fast Accelerated Electron Beam e- */}
            {[105, 115, 125].map((y, i) => (
              <line key={i} x1="140" y1={y} x2="330" y2={y} stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,3" />
            ))}
            <text x="220" y="105" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">
              e⁻ (E = eV)
            </text>

            {/* Anode: Massive Copper Rod with 45-deg Beveled Tungsten Target */}
            <polygon points="340,90 370,60 410,60 410,170 370,170 340,140" className="fill-amber-700/80 stroke-amber-500" strokeWidth="2" />
            {/* Embedded Tungsten Target at 45 deg */}
            <line x1="340" y1="95" x2="365" y2="135" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
            <text x="365" y="85" className="text-[9px] font-black fill-slate-100">
              {isAr ? 'هدف التنجستين' : 'Tungsten'}
            </text>

            {/* External Copper Cooling Radiator Fins */}
            {[415, 425, 435, 445].map((x, i) => (
              <line key={i} x1={x} y1="40" x2={x} y2="190" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
            ))}
            <text x="430" y="210" textAnchor="middle" className="text-[8px] font-bold fill-amber-400">
              {isAr ? 'ريش التبريد النحاسية' : 'Cooling Fins'}
            </text>

            {/* High Accelerating Voltage Symbol */}
            <path d="M 120 180 L 120 230 L 390 230 L 390 170" fill="none" stroke="#64748b" strokeWidth="2" />
            <rect x="220" y="218" width="80" height="24" rx="4" className="fill-slate-800 stroke-cyan-400" strokeWidth="2" />
            <text x="260" y="234" textAnchor="middle" className="text-[10px] font-black fill-cyan-300">
              V (10 - 100 kV)
            </text>

            {/* Emitted X-Ray Beam (Exiting Downwards) */}
            <path d="M 355 125 L 310 210" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrXray)" />
            <path d="M 355 125 L 340 210" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrXray)" />
            <path d="M 355 125 L 370 210" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrXray)" />
            <text x="375" y="235" textAnchor="middle" className="text-[11px] font-black fill-sky-300">
              {isAr ? 'أشعة سينية X-Rays' : 'X-Rays (λ_min = hc/eV)'}
            </text>
          </svg>
        )}

        {/* 20. Physics: Semiconductor P-N Junction & BJT Transistor Amplifier */}
        {type === 'phys_pn_junction_transistor' && (
          <svg viewBox="0 0 520 280" className="w-full max-w-[500px] h-auto overflow-visible select-none">
            {/* Left: P-N Junction Barrier in Forward Bias */}
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="235" height="230" rx="12" className="fill-slate-900/80 stroke-cyan-500/40" strokeWidth="2" />
              <text x="117" y="24" textAnchor="middle" className="text-[11px] font-black fill-cyan-300">
                {isAr ? 'الوصلة الثنائية (الدايود) في التوصيل الأمامي' : 'P-N Junction Diode (Forward Bias)'}
              </text>

              {/* P-region */}
              <rect x="25" y="50" width="90" height="80" className="fill-rose-950/70 stroke-rose-400" strokeWidth="2" />
              <text x="70" y="70" textAnchor="middle" className="text-[14px] font-black fill-rose-300">P</text>
              <text x="70" y="90" textAnchor="middle" className="text-[9px] font-bold fill-rose-200">
                {isAr ? 'فجوات موجبة (+)' : 'Holes (+)'}
              </text>

              {/* N-region */}
              <rect x="115" y="50" width="90" height="80" className="fill-sky-950/70 stroke-sky-400" strokeWidth="2" />
              <text x="160" y="70" textAnchor="middle" className="text-[14px] font-black fill-sky-300">N</text>
              <text x="160" y="90" textAnchor="middle" className="text-[9px] font-bold fill-sky-200">
                {isAr ? 'إلكترونات حرة (-)' : 'Electrons (-)'}
              </text>

              {/* Thin Depletion Layer */}
              <rect x="105" y="50" width="20" height="80" className="fill-amber-500/30 stroke-amber-400" strokeWidth="1.5" strokeDasharray="2,2" />
              <text x="115" y="145" textAnchor="middle" className="text-[9px] font-black fill-amber-300">
                {isAr ? 'منطقة النضوب (V₀ ≈ 0.7V)' : 'Depletion (V₀ ≈ 0.7V)'}
              </text>

              {/* Forward Bias Battery */}
              <path d="M 25 90 L 10 90 L 10 180 L 115 180" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <path d="M 205 90 L 220 90 L 220 180 L 135 180" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="115" y1="172" x2="115" y2="188" stroke="#f43f5e" strokeWidth="3" />
              <line x1="125" y1="167" x2="125" y2="193" stroke="#38bdf8" strokeWidth="4" />
              <text x="110" y="205" textAnchor="middle" className="text-[9px] font-bold fill-rose-400">(+) P</text>
              <text x="135" y="205" textAnchor="middle" className="text-[9px] font-bold fill-sky-400">N (-)</text>
              <text x="117" y="222" textAnchor="middle" className="text-[9px] font-bold fill-emerald-300">
                {isAr ? 'يقل اتساع حاجز الجهد ويمر تيار قوي' : 'Depletion narrows; current conducts'}
              </text>
            </g>

            {/* Right: NPN BJT Common-Emitter Amplifier */}
            <g transform="translate(265, 20)">
              <rect x="0" y="0" width="235" height="230" rx="12" className="fill-slate-900/80 stroke-emerald-500/40" strokeWidth="2" />
              <text x="117" y="24" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">
                {isAr ? 'الترانزستور كمكبر (باعث مشترك)' : 'NPN Transistor Amplifier (CE)'}
              </text>

              {/* Transistor Circle */}
              <circle cx="110" cy="100" r="32" className="fill-slate-800 stroke-slate-400" strokeWidth="2" />
              {/* Base Bar */}
              <line x1="95" y1="80" x2="95" y2="120" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" />
              {/* Base Lead */}
              <line x1="50" y1="100" x2="95" y2="100" stroke="#818cf8" strokeWidth="2.5" />
              <text x="65" y="92" className="text-[9px] font-black fill-indigo-300">I_b</text>

              {/* Collector Lead */}
              <line x1="95" y1="88" x2="125" y2="70" stroke="#f43f5e" strokeWidth="2.5" />
              <line x1="125" y1="70" x2="125" y2="45" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="135" y="60" className="text-[9px] font-black fill-rose-300">I_c (C)</text>

              {/* Emitter Lead with Arrow */}
              <line x1="95" y1="112" x2="125" y2="130" stroke="#10b981" strokeWidth="2.5" />
              <line x1="125" y1="130" x2="125" y2="160" stroke="#10b981" strokeWidth="2.5" />
              {/* Outward arrow on emitter (npn) */}
              <polygon points="118,122 125,130 114,129" className="fill-emerald-400" />
              <text x="135" y="150" className="text-[9px] font-black fill-emerald-300">I_e (E)</text>

              {/* Collector Resistor Rc & Output */}
              <rect x="117" y="30" width="16" height="20" rx="2" className="fill-rose-950 stroke-rose-400" strokeWidth="2" />
              <text x="145" y="44" className="text-[9px] font-black fill-rose-200">R_c</text>
              <line x1="125" y1="30" x2="125" y2="15" stroke="#f43f5e" strokeWidth="2" />
              <text x="125" y="10" textAnchor="middle" className="text-[9px] font-bold fill-rose-400">+V_cc</text>

              {/* Gain Relationships */}
              <text x="117" y="185" textAnchor="middle" className="text-[11px] font-black fill-cyan-300">
                β = I_c / I_b   |   I_e = I_b + I_c
              </text>
              <text x="117" y="208" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
                V_ce = V_cc - I_c · R_c
              </text>
            </g>
          </svg>
        )}

        {/* 27. CHEMISTRY: Blast Furnace for Iron Extraction */}
        {type === 'chem_blast_furnace' && (
          <svg viewBox="0 0 460 250" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Furnace Shell */}
            <path
              d="M 175 35 L 285 35 L 315 90 L 305 180 L 275 220 L 185 220 L 155 180 L 145 90 Z"
              className="fill-slate-800 stroke-slate-400"
              strokeWidth="2.5"
              {...nonScaling}
            />
            {/* Double Bell Charging Top */}
            <rect x="205" y="15" width="50" height="20" className="fill-slate-700 stroke-slate-400" strokeWidth="1.5" />
            <polygon points="215,35 245,35 230,48" className="fill-amber-500 stroke-amber-300" strokeWidth="1" />
            <text x="230" y="10" textAnchor="middle" className="text-[9px] font-bold fill-amber-300">
              {isAr ? 'شحنة الخام: هيماتيت + كوك + حجر جيري' : 'Charge: Ore + Coke + Limestone'}
            </text>

            {/* Zone 1: Upper Stack (230-300 C) */}
            <line x1="150" y1="90" x2="310" y2="90" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.5" />
            <text x="230" y="70" textAnchor="middle" className="text-[9px] font-black fill-sky-300">
              {isAr ? 'أعلى الفرن (٢٣٠-٣٠٠°س): 3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂' : 'Upper (230-300°C): 3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂'}
            </text>

            {/* Zone 2: Middle Stack (400-700 C) */}
            <line x1="155" y1="140" x2="305" y2="140" stroke="#64748b" strokeDasharray="3,3" strokeWidth="1.5" />
            <text x="230" y="118" textAnchor="middle" className="text-[9px] font-black fill-amber-300">
              {isAr ? 'وسط الفرن (٤٠٠-٧٠٠°س): Fe₃O₄ + CO → 3FeO + CO₂' : 'Middle (400-700°C): Fe₃O₄ + CO → 3FeO + CO₂'}
            </text>

            {/* Zone 3: Lower Hearth (>700 C) */}
            <text x="230" y="165" textAnchor="middle" className="text-[9px] font-black fill-rose-400">
              {isAr ? 'قاع الفرن (>٧٠٠°س): FeO + CO → Fe + CO₂' : 'Hearth (>700°C): FeO + CO → Fe + CO₂'}
            </text>

            {/* Hot Air Blast Tuyères */}
            <line x1="105" y1="180" x2="155" y2="180" stroke="#f97316" strokeWidth="3.5" markerEnd="url(#arrOrg1)" />
            <text x="95" y="175" textAnchor="end" className="text-[9px] font-bold fill-orange-400">
              {isAr ? 'هواء ساخن' : 'Hot Air'}
            </text>
            <line x1="355" y1="180" x2="305" y2="180" stroke="#f97316" strokeWidth="3.5" markerEnd="url(#arrOrg1)" />
            <text x="365" y="175" textAnchor="start" className="text-[9px] font-bold fill-orange-400">
              {isAr ? 'هواء ساخن' : 'Hot Air'}
            </text>

            {/* Molten Layers at Base */}
            {/* Slag Layer (CaSiO3) */}
            <rect x="185" y="195" width="90" height="12" className="fill-amber-900/80 stroke-amber-500/50" strokeWidth="1" />
            <line x1="275" y1="200" x2="330" y2="200" stroke="#f59e0b" strokeWidth="2" />
            <text x="335" y="204" textAnchor="start" className="text-[8px] font-bold fill-amber-300">
              {isAr ? 'خَبَث CaSiO₃ (يطفو)' : 'Slag (CaSiO₃)'}
            </text>

            {/* Molten Iron Layer (Fe) */}
            <rect x="188" y="207" width="84" height="13" className="fill-rose-900/90 stroke-rose-500/60" strokeWidth="1" />
            <line x1="272" y1="214" x2="330" y2="225" stroke="#f43f5e" strokeWidth="2" />
            <text x="335" y="228" textAnchor="start" className="text-[8px] font-bold fill-rose-300">
              {isAr ? 'حديد منصهر Fe (أثقل)' : 'Molten Iron (Fe)'}
            </text>
          </svg>
        )}

        {/* 28. CHEMISTRY: Galvanic Daniell Cell with Salt Bridge */}
        {type === 'chem_daniell_galvanic_cell' && (
          <svg viewBox="0 0 460 240" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Beaker Left: Zinc Half-Cell */}
            <rect x="50" y="80" width="130" height="130" rx="6" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="52" y="120" width="126" height="88" rx="4" className="fill-cyan-950/40" />
            <rect x="75" y="60" width="22" height="130" rx="2" className="fill-slate-400 stroke-slate-200" strokeWidth="1.5" />
            <text x="86" y="52" textAnchor="middle" className="text-[9px] font-bold fill-slate-200">Zn (-)</text>
            <text x="115" y="175" textAnchor="middle" className="text-[9px] font-bold fill-cyan-300">ZnSO₄ (1 M)</text>
            <text x="115" y="195" textAnchor="middle" className="text-[8px] font-bold fill-rose-300">
              {isAr ? 'مصعد (أنود): تأكسد' : 'Anode: Oxidation'}
            </text>

            {/* Beaker Right: Copper Half-Cell */}
            <rect x="280" y="80" width="130" height="130" rx="6" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="282" y="120" width="126" height="88" rx="4" className="fill-blue-950/60" />
            <rect x="363" y="60" width="22" height="130" rx="2" className="fill-amber-600 stroke-amber-400" strokeWidth="1.5" />
            <text x="374" y="52" textAnchor="middle" className="text-[9px] font-bold fill-amber-300">Cu (+)</text>
            <text x="325" y="175" textAnchor="middle" className="text-[9px] font-bold fill-blue-300">CuSO₄ (1 M)</text>
            <text x="325" y="195" textAnchor="middle" className="text-[8px] font-bold fill-emerald-300">
              {isAr ? 'مهبط (كاثود): اختزال' : 'Cathode: Reduction'}
            </text>

            {/* U-Tube Salt Bridge */}
            <path
              d="M 145 155 L 145 95 Q 145 75 165 75 L 295 75 Q 315 75 315 95 L 315 155"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M 145 155 L 145 95 Q 145 75 165 75 L 295 75 Q 315 75 315 95 L 315 155"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <text x="230" y="70" textAnchor="middle" className="text-[9px] font-black fill-amber-300">
              {isAr ? 'قنطرة ملحية KNO₃' : 'KNO₃ Salt Bridge'}
            </text>

            {/* Wire & Voltmeter */}
            <line x1="86" y1="60" x2="86" y2="25" stroke="#38bdf8" strokeWidth="2" />
            <line x1="86" y1="25" x2="200" y2="25" stroke="#38bdf8" strokeWidth="2" />
            {/* Electron Flow Arrow */}
            <polygon points="140,22 150,25 140,28" className="fill-cyan-300" />
            <text x="145" y="18" textAnchor="middle" className="text-[8px] font-mono fill-cyan-300">e⁻ →</text>

            <line x1="260" y1="25" x2="374" y2="25" stroke="#38bdf8" strokeWidth="2" />
            <line x1="374" y1="25" x2="374" y2="60" stroke="#38bdf8" strokeWidth="2" />

            {/* Voltmeter Dial */}
            <circle cx="230" cy="25" r="18" className="fill-slate-900 stroke-emerald-400" strokeWidth="2" />
            <text x="230" y="22" textAnchor="middle" className="text-[9px] font-black fill-emerald-400">1.10 V</text>
            <text x="230" y="34" textAnchor="middle" className="text-[7px] font-bold fill-slate-300">E°cell</text>
          </svg>
        )}

        {/* 29. CHEMISTRY: Standard Hydrogen Electrode (SHE) */}
        {type === 'chem_standard_hydrogen_electrode' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Beaker with HCl */}
            <rect x="140" y="50" width="180" height="160" rx="8" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="142" y="90" width="176" height="118" rx="4" className="fill-sky-950/40" />
            <text x="230" y="195" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">
              HCl (1.0 mol/L, [H⁺] = 1 M, pH = 0)
            </text>

            {/* Inverted Glass Tube */}
            <rect x="195" y="40" width="70" height="130" rx="4" className="fill-slate-700/50 stroke-slate-400" strokeWidth="1.5" />
            {/* Hydrogen Gas Inlet */}
            <line x1="120" y1="65" x2="195" y2="65" stroke="#38bdf8" strokeWidth="4" />
            <polygon points="160,61 170,65 160,69" className="fill-sky-300" />
            <text x="110" y="62" textAnchor="end" className="text-[9px] font-bold fill-sky-300">
              H₂ (1 atm, 25°C)
            </text>

            {/* Platinum Wire & Platinized Platinum Foil */}
            <line x1="230" y1="20" x2="230" y2="140" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="230" cy="18" r="3" className="fill-amber-400" />
            <text x="230" y="12" textAnchor="middle" className="text-[8px] font-bold fill-amber-300">
              {isAr ? 'سلك بلاتين Pt' : 'Pt Wire'}
            </text>

            {/* Platinum Foil Plate */}
            <rect x="215" y="140" width="30" height="20" rx="1" className="fill-slate-900 stroke-slate-300" strokeWidth="1.5" />
            <text x="230" y="153" textAnchor="middle" className="text-[7px] font-black fill-slate-200">Pt black</text>

            {/* Gas Bubbles */}
            <circle cx="210" cy="148" r="2.5" className="fill-sky-400/80" />
            <circle cx="206" cy="138" r="3" className="fill-sky-400/80" />
            <circle cx="250" cy="146" r="2.5" className="fill-sky-400/80" />
            <circle cx="254" cy="135" r="3" className="fill-sky-400/80" />

            {/* Potential Tag */}
            <rect x="335" y="80" width="110" height="40" rx="6" className="fill-emerald-950/80 border border-emerald-500/60 stroke-emerald-500" strokeWidth="1.5" />
            <text x="390" y="98" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">E° = 0.00 V</text>
            <text x="390" y="112" textAnchor="middle" className="text-[8px] font-bold fill-slate-300">
              {isAr ? 'قطب الهيدروجين القياسي' : 'Standard Hydrogen'}
            </text>
          </svg>
        )}

        {/* 30. CHEMISTRY: Lead-Acid Car Accumulator Battery */}
        {type === 'chem_lead_acid_accumulator' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Battery Outer Box */}
            <rect x="90" y="45" width="280" height="165" rx="8" className="fill-slate-800 stroke-slate-500" strokeWidth="2.5" />
            <rect x="92" y="75" width="276" height="133" rx="4" className="fill-amber-950/20" />

            {/* Electrolyte Label */}
            <text x="230" y="195" textAnchor="middle" className="text-[9px] font-bold fill-amber-300">
              {isAr ? 'إلكتروليت: حمض كبريتيك مخفف H₂SO₄ (كثافة ١٫٢٨ - ١٫٣٠ جم/سم³)' : 'Electrolyte: Dilute H₂SO₄ (Density 1.28 - 1.30 g/cm³)'}
            </text>

            {/* Anode Plates (Spongy Lead Pb) */}
            <g>
              <rect x="130" y="65" width="14" height="105" rx="2" className="fill-slate-500 stroke-slate-300" strokeWidth="1" />
              <rect x="180" y="65" width="14" height="105" rx="2" className="fill-slate-500 stroke-slate-300" strokeWidth="1" />
              <rect x="230" y="65" width="14" height="105" rx="2" className="fill-slate-500 stroke-slate-300" strokeWidth="1" />
              {/* Busbar Anode (-) */}
              <line x1="125" y1="65" x2="240" y2="65" stroke="#94a3b8" strokeWidth="4" />
              <line x1="125" y1="65" x2="125" y2="30" stroke="#94a3b8" strokeWidth="4" />
              <circle cx="125" cy="30" r="7" className="fill-rose-600 stroke-slate-200" strokeWidth="1.5" />
              <text x="125" y="34" textAnchor="middle" className="text-[10px] font-black fill-white">-</text>
              <text x="125" y="18" textAnchor="middle" className="text-[8px] font-bold fill-slate-300">Pb (Anode)</text>
            </g>

            {/* Cathode Plates (Lead Dioxide PbO2) */}
            <g>
              <rect x="205" y="65" width="14" height="105" rx="2" className="fill-amber-800 stroke-amber-500" strokeWidth="1" />
              <rect x="255" y="65" width="14" height="105" rx="2" className="fill-amber-800 stroke-amber-500" strokeWidth="1" />
              <rect x="305" y="65" width="14" height="105" rx="2" className="fill-amber-800 stroke-amber-500" strokeWidth="1" />
              {/* Busbar Cathode (+) */}
              <line x1="200" y1="60" x2="315" y2="60" stroke="#d97706" strokeWidth="4" />
              <line x1="315" y1="60" x2="315" y2="30" stroke="#d97706" strokeWidth="4" />
              <circle cx="315" cy="30" r="7" className="fill-emerald-600 stroke-slate-200" strokeWidth="1.5" />
              <text x="315" y="34" textAnchor="middle" className="text-[10px] font-black fill-white">+</text>
              <text x="315" y="18" textAnchor="middle" className="text-[8px] font-bold fill-amber-300">PbO₂ (Cathode)</text>
            </g>

            {/* Voltage Badge */}
            <text x="230" y="110" textAnchor="middle" className="text-[11px] font-black fill-emerald-400">
              E_cell ≈ 2.05 V (12 V total for 6 cells)
            </text>
          </svg>
        )}

        {/* 31. CHEMISTRY: Laclanche Dry Cell */}
        {type === 'chem_dry_cell_laclanche' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Outer Zinc Canister (Anode -) */}
            <rect x="150" y="40" width="160" height="170" rx="8" className="fill-slate-800 stroke-slate-400" strokeWidth="3" />
            <text x="110" y="125" textAnchor="end" className="text-[9px] font-bold fill-slate-300">
              {isAr ? 'غلاف الخارصين Zn (أنود -)' : 'Zinc Can (Anode -)'}
            </text>
            <line x1="115" y1="125" x2="150" y2="125" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Electrolyte Paste Layer (NH4Cl + ZnCl2) */}
            <rect x="165" y="52" width="130" height="148" rx="4" className="fill-slate-700/60 stroke-slate-600" strokeWidth="1" />
            <text x="350" y="80" textAnchor="start" className="text-[8px] font-bold fill-cyan-300">
              {isAr ? 'عجينة رطبة NH₄Cl + ZnCl₂' : 'Paste NH₄Cl + ZnCl₂'}
            </text>
            <line x1="345" y1="80" x2="295" y2="90" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Depolarizer Paste (MnO2 + Carbon Black) */}
            <rect x="185" y="58" width="90" height="138" rx="2" className="fill-amber-950/80 stroke-amber-700" strokeWidth="1" />
            <text x="350" y="135" textAnchor="start" className="text-[8px] font-bold fill-amber-300">
              {isAr ? 'خليط MnO₂ + كربون مجزأ' : 'MnO₂ + Carbon black'}
            </text>
            <line x1="345" y1="135" x2="275" y2="135" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Central Graphite Rod (Cathode +) */}
            <rect x="218" y="25" width="24" height="165" rx="3" className="fill-slate-950 stroke-slate-300" strokeWidth="2" />
            {/* Metal Cap */}
            <rect x="222" y="18" width="16" height="10" rx="2" className="fill-amber-400 stroke-amber-200" strokeWidth="1" />
            <text x="230" y="12" textAnchor="middle" className="text-[9px] font-black fill-amber-400">
              {isAr ? 'ساق كربون C (كاثود +)' : 'Carbon Rod (Cathode +)'}
            </text>

            {/* Voltage Label */}
            <text x="230" y="222" textAnchor="middle" className="text-[11px] font-black fill-emerald-400">
              E_cell = 1.50 V (Irreversible Primary Cell)
            </text>
          </svg>
        )}

        {/* 32. CHEMISTRY: Haber-Bosch Ammonia Synthesis Equilibrium Loop */}
        {type === 'chem_haber_bosch_equilibrium' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Feed Inlet */}
            <line x1="30" y1="70" x2="80" y2="70" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrInd1)" />
            <text x="30" y="60" className="text-[9px] font-black fill-sky-300">N₂ + 3H₂ (1 : 3)</text>

            {/* Compressor */}
            <polygon points="80,50 120,60 120,80 80,90" className="fill-slate-800 stroke-slate-400" strokeWidth="2" />
            <text x="100" y="105" textAnchor="middle" className="text-[8px] font-bold fill-slate-300">
              {isAr ? 'ضاغط (٢٠٠ ض.ج)' : 'Compressor (200 atm)'}
            </text>

            {/* Catalyst Chamber */}
            <rect x="170" y="40" width="110" height="90" rx="6" className="fill-rose-950/60 stroke-rose-400" strokeWidth="2" />
            <line x1="120" y1="70" x2="170" y2="70" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="225" y="65" textAnchor="middle" className="text-[9px] font-black fill-rose-300">
              {isAr ? 'غرفة الحافز (حديد مجزأ Fe)' : 'Catalyst Chamber (Fe)'}
            </text>
            <text x="225" y="82" textAnchor="middle" className="text-[8px] font-bold fill-amber-300">
              T = 500°C, P = 200 atm
            </text>
            <text x="225" y="100" textAnchor="middle" className="text-[8px] font-mono fill-emerald-300">
              N₂ + 3H₂ ⇌ 2NH₃ + 92 kJ
            </text>

            {/* Condenser / Cooler */}
            <rect x="330" y="40" width="80" height="90" rx="6" className="fill-cyan-950/60 stroke-cyan-400" strokeWidth="2" />
            <line x1="280" y1="70" x2="330" y2="70" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="370" y="65" textAnchor="middle" className="text-[8px] font-black fill-cyan-300">
              {isAr ? 'مكثف تبريد' : 'Condenser'}
            </text>

            {/* Liquid Ammonia Outlet */}
            <line x1="370" y1="130" x2="370" y2="180" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrInd1)" />
            <text x="370" y="200" textAnchor="middle" className="text-[9px] font-black fill-emerald-300">
              {isAr ? 'نشادر مسال NH₃ (سائل)' : 'Liquid NH₃'}
            </text>

            {/* Recycle Loop */}
            <path
              d="M 370 40 L 370 20 L 100 20 L 100 50"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <text x="235" y="15" textAnchor="middle" className="text-[8px] font-bold fill-purple-300">
              {isAr ? 'إعادة تدوير الغازات غير المتفاعلة' : 'Recycle unreacted N₂ + H₂'}
            </text>
          </svg>
        )}

        {/* 33. CHEMISTRY: Methane Gas Laboratory Preparation */}
        {type === 'chem_methane_laboratory_preparation' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Bunsen Burner */}
            <rect x="75" y="170" width="20" height="40" className="fill-slate-600 stroke-slate-400" strokeWidth="1.5" />
            <polygon points="78,170 92,170 85,145" className="fill-amber-400 stroke-amber-200" strokeWidth="1" />
            <polygon points="81,170 89,170 85,152" className="fill-sky-400" />

            {/* Hard Glass Test Tube with Mixture */}
            <rect x="60" y="105" width="130" height="24" rx="12" transform="rotate(-15 60 105)" className="fill-slate-800/80 stroke-slate-400" strokeWidth="2" />
            <text x="90" y="90" textAnchor="middle" className="text-[8px] font-black fill-amber-300">
              CH₃COONa + (NaOH + CaO)
            </text>
            <text x="90" y="100" textAnchor="middle" className="text-[7px] font-bold fill-slate-300">
              {isAr ? 'أسيتات صوديوم + جير صودي' : 'Sodium acetate + Soda lime'}
            </text>

            {/* Delivery Tube */}
            <path
              d="M 175 75 L 250 75 L 280 150 L 320 150"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="3.5"
            />

            {/* Water Trough */}
            <rect x="290" y="130" width="140" height="70" rx="4" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="292" y="145" width="136" height="53" rx="2" className="fill-sky-950/40" />
            <text x="360" y="195" textAnchor="middle" className="text-[8px] font-bold fill-sky-300">
              {isAr ? 'حوض به ماء' : 'Water Trough'}
            </text>

            {/* Inverted Gas Jar collecting Methane */}
            <rect x="330" y="80" width="60" height="85" rx="4" className="fill-slate-700/40 stroke-slate-300" strokeWidth="1.5" />
            <text x="360" y="105" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">CH₄ (g)</text>
            <text x="360" y="118" textAnchor="middle" className="text-[7px] font-bold fill-slate-200">
              {isAr ? 'إزاحة الماء لأسفل' : 'Displaces water'}
            </text>

            {/* Chemical Equation */}
            <text x="230" y="222" textAnchor="middle" className="text-[9px] font-black fill-cyan-300">
              {'CH₃COONa + NaOH ──(CaO, Δ)──> CH₄↑ + Na₂CO₃'}
            </text>
          </svg>
        )}

        {/* 34. CHEMISTRY: Ethylene Gas Laboratory Preparation */}
        {type === 'chem_ethylene_preparation' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Heating Flask (Ethanol + H2SO4 at 180 C) */}
            <circle cx="90" cy="140" r="35" className="fill-slate-800/80 stroke-slate-400" strokeWidth="2" />
            <rect x="83" y="85" width="14" height="25" className="fill-slate-800 stroke-slate-400" strokeWidth="2" />
            {/* Thermometer */}
            <line x1="88" y1="65" x2="88" y2="135" stroke="#ef4444" strokeWidth="2" />
            <text x="75" y="60" textAnchor="end" className="text-[8px] font-black fill-rose-400">180°C</text>
            <text x="90" y="145" textAnchor="middle" className="text-[7px] font-black fill-amber-300">
              C₂H₅OH + H₂SO₄
            </text>

            {/* Tube to Wash Bottle */}
            <path d="M 94 95 L 170 95 L 170 145" fill="none" stroke="#94a3b8" strokeWidth="3" />

            {/* Wash Bottle with NaOH Solution */}
            <rect x="155" y="125" width="55" height="75" rx="4" className="fill-slate-800/80 stroke-slate-500" strokeWidth="1.5" />
            <rect x="157" y="145" width="51" height="53" rx="2" className="fill-purple-950/40" />
            <text x="182" y="170" textAnchor="middle" className="text-[8px] font-black fill-purple-300">NaOH (aq)</text>
            <text x="182" y="185" textAnchor="middle" className="text-[6px] font-bold fill-slate-300">
              {isAr ? 'لإزالة SO₂ و CO₂' : 'Removes SO₂'}
            </text>

            {/* Tube from Wash Bottle to Water Trough */}
            <path d="M 195 130 L 260 130 L 290 170" fill="none" stroke="#94a3b8" strokeWidth="3" />

            {/* Inverted Cylinder over Water */}
            <rect x="270" y="145" width="150" height="60" rx="4" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="320" y="85" width="60" height="85" rx="4" className="fill-slate-700/40 stroke-slate-300" strokeWidth="1.5" />
            <text x="350" y="115" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">C₂H₄ (g)</text>
            <text x="350" y="130" textAnchor="middle" className="text-[7px] font-bold fill-slate-200">
              {isAr ? 'غاز الإيثيلين' : 'Ethylene Gas'}
            </text>

            {/* Equation */}
            <text x="230" y="222" textAnchor="middle" className="text-[9px] font-black fill-cyan-300">
              {'C₂H₅OH ──(conc. H₂SO₄, 180°C)──> C₂H₄↑ + H₂O'}
            </text>
          </svg>
        )}

        {/* 35. CHEMISTRY: Acetylene (Ethyne) Laboratory Preparation */}
        {type === 'chem_acetylene_preparation' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Conical Flask with Dropping Funnel */}
            <polygon points="60,190 120,190 100,120 80,120" className="fill-slate-800/80 stroke-slate-400" strokeWidth="2" />
            {/* Lumps of CaC2 */}
            <circle cx="85" cy="180" r="5" className="fill-slate-400" />
            <circle cx="95" cy="183" r="6" className="fill-slate-400" />
            <circle cx="90" cy="173" r="5" className="fill-slate-500" />
            <text x="90" y="165" textAnchor="middle" className="text-[8px] font-black fill-amber-300">CaC₂</text>

            {/* Dropping Funnel with Water */}
            <line x1="90" y1="120" x2="90" y2="70" stroke="#94a3b8" strokeWidth="2.5" />
            <polygon points="75,70 105,70 90,85" className="fill-sky-800 stroke-sky-400" strokeWidth="1.5" />
            <text x="90" y="60" textAnchor="middle" className="text-[8px] font-bold fill-sky-300">
              {isAr ? 'ماء مقطر تنقيطاً' : 'H₂O (drops)'}
            </text>

            {/* Tube to Wash Bottle (CuSO4 in dilute H2SO4) */}
            <path d="M 95 125 L 165 125 L 165 155" fill="none" stroke="#94a3b8" strokeWidth="3" />
            <rect x="150" y="135" width="55" height="65" rx="4" className="fill-slate-800/80 stroke-slate-500" strokeWidth="1.5" />
            <rect x="152" y="155" width="51" height="43" rx="2" className="fill-blue-950/50" />
            <text x="177" y="175" textAnchor="middle" className="text-[7px] font-black fill-blue-300">CuSO₄ / H₂SO₄</text>
            <text x="177" y="188" textAnchor="middle" className="text-[6px] font-bold fill-slate-300">
              {isAr ? 'لإزالة PH₃ و H₂S' : 'Removes PH₃ & H₂S'}
            </text>

            {/* Delivery Tube to Collection Jar */}
            <path d="M 190 140 L 260 140 L 290 170" fill="none" stroke="#94a3b8" strokeWidth="3" />
            <rect x="270" y="145" width="150" height="60" rx="4" className="fill-slate-800/80 stroke-slate-500" strokeWidth="2" />
            <rect x="320" y="85" width="60" height="85" rx="4" className="fill-slate-700/40 stroke-slate-300" strokeWidth="1.5" />
            <text x="350" y="115" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">C₂H₂ (g)</text>
            <text x="350" y="130" textAnchor="middle" className="text-[7px] font-bold fill-slate-200">
              {isAr ? 'غاز الإيثاين (الأسيتيلين)' : 'Ethyne (Acetylene)'}
            </text>

            {/* Equation */}
            <text x="230" y="222" textAnchor="middle" className="text-[9px] font-black fill-cyan-300">
              CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂
            </text>
          </svg>
        )}

        {/* 36. CHEMISTRY: Organic Esterification Distillation / Reflux Assembly */}
        {type === 'chem_organic_reflux_esterification' && (
          <svg viewBox="0 0 460 230" className="w-full max-w-[440px] h-auto overflow-visible select-none">
            {/* Reaction Flask with Reactants */}
            <circle cx="80" cy="145" r="30" className="fill-slate-800/80 stroke-slate-400" strokeWidth="2" />
            <rect x="74" y="95" width="12" height="25" className="fill-slate-800 stroke-slate-400" strokeWidth="2" />
            <text x="80" y="142" textAnchor="middle" className="text-[7px] font-black fill-amber-300">
              R-COOH + R'-OH
            </text>
            <text x="80" y="153" textAnchor="middle" className="text-[6px] font-bold fill-rose-300">
              + conc. H₂SO₄
            </text>

            {/* Distillation Head & Thermometer */}
            <path d="M 80 95 L 80 75 L 120 90" fill="none" stroke="#94a3b8" strokeWidth="3" />
            <line x1="80" y1="50" x2="80" y2="90" stroke="#ef4444" strokeWidth="2" />
            <text x="75" y="48" textAnchor="end" className="text-[8px] font-bold fill-rose-400">T (°C)</text>

            {/* Liebig Condenser (Water-Cooled) */}
            <line x1="120" y1="90" x2="270" y2="160" stroke="#38bdf8" strokeWidth="18" strokeLinecap="round" className="opacity-40" />
            <line x1="120" y1="90" x2="270" y2="160" stroke="#cbd5e1" strokeWidth="4" />
            <text x="195" y="115" textAnchor="middle" transform="rotate(25 195 115)" className="text-[8px] font-black fill-cyan-300">
              {isAr ? 'مكثف ليبيج (ماء تبريد)' : 'Liebig Condenser'}
            </text>
            {/* Water in / Water out */}
            <text x="280" y="180" className="text-[7px] font-bold fill-sky-300">
              {isAr ? 'دخول ماء بارد ↑' : 'Water In ↑'}
            </text>
            <text x="135" y="75" className="text-[7px] font-bold fill-sky-300">
              {isAr ? 'خروج ماء ↑' : 'Water Out ↑'}
            </text>

            {/* Receiving Flask for Ester */}
            <polygon points="290,195 330,195 315,160 305,160" className="fill-slate-800/80 stroke-slate-400" strokeWidth="2" />
            <text x="310" y="185" textAnchor="middle" className="text-[8px] font-black fill-emerald-300">
              R-COO-R'
            </text>
            <text x="310" y="210" textAnchor="middle" className="text-[8px] font-bold fill-emerald-400">
              {isAr ? 'إستر نقي ذو رائحة زكية' : 'Ester Product'}
            </text>

            {/* Equation */}
            <text x="230" y="224" textAnchor="middle" className="text-[9px] font-black fill-cyan-300">
              CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O
            </text>
          </svg>
        )}
      </div>

      {/* DEDICATED LATEX MATH LEGEND & FORMULA CALLOUTS (Rendered with 100% genuine KaTeX) */}
      <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs">
        {type === 'statics_horizontal_friction' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 30\\text{ N}" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="P = 15\\text{ N} \\quad (30^\\circ)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "R \\text{ (رد الفعل)}" : "R \\text{ (Normal Reaction)}"} lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "F_s \\text{ (الاحتكاك النهائي)}" : "F_s \\text{ (Limiting Friction)}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'statics_horizontal_simple_friction' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 40\\text{ N}" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\\mu_s = 0.25" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="R = W" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="F_s = \\mu_s R" lang={lang} />
            </span>
          </>
        )}

        {type === 'statics_inclined_friction' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\\text{زاوية الميل } = 30^\\circ" : "\\text{Incline } = 30^\\circ"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 20\\text{ N}" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\\mu_s = \\frac{\\sqrt{3}}{2}" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "F_s \\text{ (لأسفل)}" : "F_s \\text{ (Down plane)}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'solid_geometry_sphere' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="C(4, 4, 4)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="R = |z| = 4" lang={lang} />
            </span>
            <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\\text{تمس المستوى } XY \\ (z=0)" : "\\text{Tangent to } XY \\ (z=0)"} lang={lang} />
            </span>
          </>
        )}

        {type === 'distance_3d_box' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="A(1, -2, 4)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="B(4, 2, 4)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\\|\\vec{AB}\\| = \\sqrt{3^2 + 4^2} = 5" lang={lang} />
            </span>
          </>
        )}

        {type === 'sphere_general_center_radius' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="C(2, -3, 1)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="R = \\sqrt{2^2 + (-3)^2 + 1^2 - (-22)} = 6" lang={lang} />
            </span>
          </>
        )}

        {type === 'polygon_diagonals' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\\text{مضلع محدب ذو } n \\text{ رأساً}" : "\\text{Convex polygon with } n \\text{ vertices}"} lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\\text{عدد الأقطار: } \\binom{n}{2} - n = 44" : "\\text{Diagonals: } \\binom{n}{2} - n = 44"} lang={lang} />
            </span>
          </>
        )}

        {type === 'trig_derivative_tangent' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y = \tan(x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\frac{dy}{dx} = \sec^2(x)" lang={lang} />
            </span>
          </>
        )}

        {type === 'secant_derivative_graph' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="y = \sec(x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\frac{dy}{dx} = \sec(x)\tan(x)" lang={lang} />
            </span>
          </>
        )}

        {type === 'cotangent_curvature_graph' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y = \cot(x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\frac{dy}{dx} = -\csc^2(x)" lang={lang} />
            </span>
          </>
        )}

        {type === 'plane_intercepts_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="A(1, 0, 0), B(0, 2, 0), C(0, 0, 3)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1" lang={lang} />
            </span>
            <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{n} = (6, 3, 2)" lang={lang} />
            </span>
          </>
        )}

        {type === 'coplanar_vectors_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{u} = (1, 2, 3), \vec{v} = (0, 1, 2)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{w} = (1, 0, k)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="[\vec{u}, \vec{v}, \vec{w}] = 0" lang={lang} />
            </span>
          </>
        )}

        {type === 'line_plane_angle_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{d} = (1, 0, 1), \quad \vec{n} = (0, 1, 1)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\sin\theta = \frac{|\vec{d} \cdot \vec{n}|}{\|\vec{d}\| \|\vec{n}\|}" lang={lang} />
            </span>
          </>
        )}

        {type === 'cartesian_plane' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y = f(x)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\\text{مستوى الإحداثيات الكارتيزي } \\mathbb{R}^2" : "\\text{Cartesian Plane } \\mathbb{R}^2"} lang={lang} />
            </span>
          </>
        )}

        {type === 'triangle' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\\triangle ABC" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="G = \\frac{A + B + C}{3}" lang={lang} />
            </span>
          </>
        )}

        {type === 'circle' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="(x - h)^2 + (y - k)^2 = R^2" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="C(h, k), \\quad R" lang={lang} />
            </span>
          </>
        )}

        {type === 'bio_antibody_structure' && (
          <>
            <span className="bg-blue-950/60 border border-blue-500/40 text-blue-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "2 \\text{ سلاسل ثقيلة (H)} + 2 \\text{ سلاسل خفيفة (L)}" : "2\\text{ Heavy Chains (H)} + 2\\text{ Light Chains (L)}"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{روابط كبريتيدية: } {-S-S-}" : "\\text{Disulfide Bonds: } {-S-S-}"} lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "2 \\text{ موقع ارتباط بالأنتيجين (Fab)}" : "2\\text{ Antigen-Binding Sites (Fab)}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'bio_sarcomere_ultrastructure' && (
          <>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\Delta L_{\\text{A-band}} = 0 \\quad (\\text{ثابتة الطول})" : "\\Delta L_{\\text{A-band}} = 0 \\quad (\\text{Invariable})"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "L_{\\text{H-zone}} \\to 0 \\quad (\\text{تتقلص أو تختفي})" : "L_{\\text{H-zone}} \\to 0 \\quad (\\text{Shortens/Vanishes})"} lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{تقارب خطي Z بالروابط المستعرضة}" : "\\text{Z-lines draw closer via cross-bridges}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'bio_dna_replication_fork' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "5' \\to 3' \\quad (\\text{اتجاه البلمرة المستمر})" : "5' \\to 3' \\quad (\\text{Continuous Leading})"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{قطع أوكازاكي } + \\text{ إنزيم الربط Ligase}" : "\\text{Okazaki Fragments } + \\text{ Ligase}"} lang={lang} />
            </span>
            <span className="bg-purple-950/60 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{إنزيم اللولب Helicase لفك الروابط الهيدروجينية}" : "\\text{Helicase unzips H-bonds}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'bio_flower_whorls' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{٤ محيطات زهرية: كأس، تويج، طلع، متاع}" : "\\text{4 Whorls: Calyx, Corolla, Androecium, Gynoecium}"} lang={lang} />
            </span>
            <span className="bg-yellow-950/60 border border-yellow-500/40 text-yellow-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{السداة} = \\text{متك (حبوب لقاح)} + \\text{خيط}" : "\\text{Stamen} = \\text{Anther} + \\text{Filament}"} lang={lang} />
            </span>
            <span className="bg-pink-950/60 border border-pink-500/40 text-pink-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{الكربلة} = \\text{ميسم} + \\text{قلم} + \\text{مبيض (بويضة)}" : "\\text{Carpel} = \\text{Stigma} + \\text{Style} + \\text{Ovary}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'bio_nephron_filtration' && (
          <>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{الترشيح الفائق بمحفظة بومان والكبيبة}" : "\\text{Glomerular Ultrafiltration}"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{إعادة الامتصاص الاختياري بالجلوكوز والماء}" : "\\text{Selective Reabsorption (PCT & Loop)}"} lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{شريان وارد متسع } > \\text{ شريان صادر ضيق}" : "\\text{Afferent Lumen } > \\text{ Efferent Lumen}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_wheatstone_bridge' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{شرط اتزان القنطرة: } R_1 R_4 = R_2 R_3" : "\\text{Bridge Balance: } R_1 R_4 = R_2 R_3"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "V_B = V_C \\implies I_G = 0 \\quad (\\text{انعدام تيار الجلفانومتر})" : "V_B = V_C \\implies I_G = 0"} lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="R_{eq} = \\frac{(R_1 + R_3)(R_2 + R_4)}{R_1 + R_2 + R_3 + R_4}" lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_solenoid_magnetic_field' && (
          <>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="B = \\frac{\\mu N I}{L} = \\mu n I" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{قاعدة أمبير لليد اليمنى (الإبهام يشير للقطب الشمالي N)}" : "\\text{Right-Hand Grip Rule: Thumb points to N-pole}"} lang={lang} />
            </span>
            <span className="bg-slate-800 border border-slate-600 text-slate-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\mu_{\\text{iron}} \\gg \\mu_{\\text{air}}" lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_dynamo_generator' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E_{\\text{inst}} = N B A \\omega \\sin\\theta = E_{\\max} \\sin(2\\pi f t)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E_{\\text{eff}} = \\frac{E_{\\max}}{\\sqrt{2}} \\approx 0.707 E_{\\max}" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\theta \\text{ الزاوية بين العمودي على مستوى الملف وخطوط الفيض}" : "\\theta \\text{ between normal to coil plane and } \\vec{B}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_rlc_resonance_phasor' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="f_0 = \\frac{1}{2\\pi\\sqrt{LC}}" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="X_L = X_C \\implies Z_{\\min} = R, \\quad \\tan\\phi = 0" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="I_{\\max} = \\frac{V}{R} \\quad (\\text{خواص أومية نقية})" lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_photoelectric_circuit' && (
          <>
            <span className="bg-purple-950/60 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E = h\\nu = W_0 + KE_{\\max} = h\\nu_c + \\frac{1}{2}m_e v_{\\max}^2" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="KE_{\\max} = e \\cdot V_{\\text{stop}}" lang={lang} />
            </span>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\nu \\ge \\nu_c \\implies \\text{انبعاث فوري لحظي } (< 10^{-9}\\text{ s})" : "\\nu \\ge \\nu_c \\implies \\text{Instantaneous emission } (< 10^{-9}\\text{ s})"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_transformer' && (
          <>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{محول رافع للجهد: } N_s > N_p \\implies I_s < I_p" : "\\text{Step-up: } N_s > N_p \\implies I_s < I_p"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_galvanometer_multiplier' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="R_s = \\frac{I_g R_g}{I - I_g} \\quad (\\text{مجزئ التيار للأميتر})" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="R_m = \\frac{V - I_g R_g}{I_g} \\quad (\\text{مضاعف الجهد للفولتميتر})" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "R_s \\text{ توازي صغرى جداً}, \\quad R_m \\text{ توالي كبرى جداً}" : "R_s \\text{ small parallel}, \\quad R_m \\text{ large series}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_bohr_atom_series' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E_n = -\\frac{13.6}{n^2}\\,\\text{eV}" lang={lang} />
            </span>
            <span className="bg-purple-950/60 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)" lang={lang} />
            </span>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\text{ليمان (UV)}: n_1=1, \\quad \\text{بالمر (منظور)}: n_1=2" : "\\text{Lyman (UV)}: n_1=1, \\quad \\text{Balmer (Vis)}: n_1=2"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_coolidge_xray_tube' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\lambda_{\\min} = \\frac{h c}{e V} \\quad (\\text{طيف كبح مستمر})" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\\Delta E = h\\nu = \\frac{hc}{\\lambda} \\quad (\\text{طيف خطي مميز للهدف})" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\\lambda_{\\min} \\text{ تتوقف فقط على فرق الجهد المعجل } V" : "\\lambda_{\\min} \\text{ depends solely on accelerating } V"} lang={lang} />
            </span>
          </>
        )}

        {type === 'phys_pn_junction_transistor' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\beta = \frac{I_c}{I_b} = \frac{\alpha}{1 - \alpha}" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="I_e = I_b + I_c" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="V_{ce} = V_{cc} - I_c R_c \quad (\text{عاكس NOT gate})" lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_blast_furnace' && (
          <>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{Fe}_2\text{O}_3 + 3\text{CO} \xrightarrow{> 700^\circ\text{C}} 2\text{Fe} + 3\text{CO}_2" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{الخَبَث (يطفو)}: \text{CaO} + \text{SiO}_2 \to \text{CaSiO}_3" : "\text{Slag}: \text{CaO} + \text{SiO}_2 \to \text{CaSiO}_3"} lang={lang} />
            </span>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{درجات الحرارة}: \text{القاع } > 700^\circ\text{C}, \text{ القمة } 230-300^\circ\text{C}" : "\text{Temp}: \text{Hearth } > 700^\circ\text{C}, \text{ Top } 230-300^\circ\text{C}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_daniell_galvanic_cell' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E^\circ_{\text{cell}} = E^\circ_{\text{red}}(\text{cathode}) - E^\circ_{\text{red}}(\text{anode}) = +1.10\,\text{V}" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{Zn} + \text{Cu}^{2+} \to \text{Zn}^{2+} + \text{Cu}, \quad \Delta G^\circ = -nFE^\circ < 0" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{القنطرة الملحية: معادلة الأيونات الزائدة في نصفي الخلية}" : "\text{Salt Bridge: Neutralizes excess ions}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_standard_hydrogen_electrode' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E^\circ(\text{SHE}) = 0.00\,\text{V} \quad (P_{\text{H}_2} = 1\,\text{atm}, [\text{H}^+] = 1\,\text{M})" lang={lang} />
            </span>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{H}_2 \rightleftharpoons 2\text{H}^+ + 2e^-" lang={lang} />
            </span>
            <span className="bg-purple-950/60 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{يتغير جهده عن الصفر إذا تغير الضغط أو تركيز } [\text{H}^+]" : "\text{Potential shifts from 0.00 V if } P \text{ or } [\text{H}^+] \text{ changes}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_lead_acid_accumulator' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{Pb} + \text{PbO}_2 + 2\text{H}_2\text{SO}_4 \rightleftharpoons 2\text{PbSO}_4 + 2\text{H}_2\text{O}" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E_{\text{cell}} \approx 2.05\,\text{V} \quad (\times 6 = 12.3\,\text{V})" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{كثافة الحمض المشحون: } 1.28 - 1.30\,\text{g/cm}^3 \quad (\text{هيدرومتر})" : "\text{Density Charged: } 1.28 - 1.30\,\text{g/cm}^3"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_dry_cell_laclanche' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="E_{\text{cell}} = 1.50\,\text{V} \quad (\text{خلية جافة أولية})" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{Zn} + 2\text{MnO}_2 + 2\text{NH}_4^+ \to \text{Zn}^{2+} + \text{Mn}_2\text{O}_3 + 2\text{NH}_3 + \text{H}_2\text{O}" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{MnO}_2 \text{ مهدئ استقطاب مؤكسد لمنع تراكم غاز } \text{H}_2" : "\text{MnO}_2 \text{ acts as depolarizer}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_haber_bosch_equilibrium' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g) + 92\,\text{kJ}" lang={lang} />
            </span>
            <span className="bg-sky-950/60 border border-sky-500/40 text-sky-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="K_c = \frac{[\text{NH}_3]^2}{[\text{N}_2][\text{H}_2]^3}, \quad K_p = K_c(RT)^{-2}" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{لوشاتيليه: زيادة الضغط (٤ مول } \to \text{ ٢ مول) تزيد الناتج}" : "\text{Higher pressure shifts equilibrium towards fewer moles}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_methane_laboratory_preparation' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{CH}_3\text{COONa} + \text{NaOH} \xrightarrow[\Delta]{\text{CaO}} \text{CH}_4\uparrow + \text{Na}_2\text{CO}_3" lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{الجير الصودي } (\text{NaOH} + \text{CaO}): \text{ خفض درجة انصهار الخليط}" : "\text{Soda Lime } (\text{NaOH} + \text{CaO}): \text{ Lowers melting point}"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{يجمع بإزاحة الماء لأسفل لأنه شحيح الذوبان في الماء وأخف من الهواء}" : "\text{Collected by downward displacement of water}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_ethylene_preparation' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{C}_2\text{H}_5\text{OH} \xrightarrow[180^\circ\text{C}]{\text{conc. } \text{H}_2\text{SO}_4} \text{C}_2\text{H}_4\uparrow + \text{H}_2\text{O}" lang={lang} />
            </span>
            <span className="bg-purple-950/60 border border-purple-500/40 text-purple-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{محلول } \text{NaOH}: \text{ امتصاص أبخرة حمض الكبريتيك والغازات الحمضية } \text{SO}_2" : "\text{NaOH}: \text{ Absorbs acidic } \text{SO}_2 \text{ vapors}"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{نزع ماء على مرحلتين: كبريتات إيثيل هيدروجينية عند } 80^\circ\text{C}" : "\text{Ethyl hydrogen sulfate intermediate at } 80^\circ\text{C}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_acetylene_preparation' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{CaC}_2 + 2\text{H}_2\text{O} \to \text{C}_2\text{H}_2\uparrow + \text{Ca(OH)}_2" lang={lang} />
            </span>
            <span className="bg-blue-950/60 border border-blue-500/40 text-blue-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{محلول } \text{CuSO}_4 \text{ في } \text{H}_2\text{SO}_4: \text{ إزالة شوائب غازي } \text{PH}_3 \text{ و } \text{H}_2\text{S}" : "\text{CuSO}_4 / \text{H}_2\text{SO}_4: \text{ Removes } \text{PH}_3 \text{ & } \text{H}_2\text{S} \text{ impurities}"} lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{ألكاين به رابطة ثلاثية (واحدة } \sigma \text{ واثنتان } \pi \text{ ضعيفتان)}" : "\text{Alkyne with 1 } \sigma \text{ and 2 } \pi \text{ bonds}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'chem_organic_reflux_esterification' && (
          <>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \xrightleftharpoons{\text{conc. } \text{H}_2\text{SO}_4} \text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O}" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{حمض الكبريتيك المركز: نازع للماء لمنع التفاعل العكسي}" : "\text{conc. } \text{H}_2\text{SO}_4: \text{ Dehydrating agent shifts forward}"} lang={lang} />
            </span>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math={isAr ? "\text{أكسجين الماء الناتج مصدره كحول الإيثانول (تجربة نظير } ^{18}\text{O})" : "\text{Water oxygen originates from alcohol via } ^{18}\text{O} \text{ tracer}"} lang={lang} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};
