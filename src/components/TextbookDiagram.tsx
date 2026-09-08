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
      </div>

      {/* DEDICATED LATEX MATH LEGEND & FORMULA CALLOUTS (Rendered with 100% genuine KaTeX) */}
      <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs">
        {type === 'statics_horizontal_friction' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 30\text{ N}" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="P = 15\text{ N} \quad (30^\circ)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "R \text{ (رد الفعل)}" : "R \text{ (Normal Reaction)}"} lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "F_s \text{ (الاحتكاك النهائي)}" : "F_s \text{ (Limiting Friction)}"} lang={lang} />
            </span>
          </>
        )}

        {type === 'statics_horizontal_simple_friction' && (
          <>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 40\text{ N}" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="R = 40\text{ N}" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="P = 10\text{ N}" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="F_s = 10\text{ N}" lang={lang} />
            </span>
          </>
        )}

        {type === 'statics_inclined_friction' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\text{زاوية الميل } = 30^\circ" : "\text{Incline } = 30^\circ"} lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="W = 20\text{ N}" lang={lang} />
            </span>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="P = 25\text{ N}" lang={lang} />
            </span>
            <span className="bg-rose-950/60 border border-rose-500/40 text-rose-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="F_s \text{ (لأسفل)}" lang={lang} />
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
              <MathRenderer math={isAr ? "\text{تمس المستوى } XY \ (z=0)" : "\text{Tangent to } XY \ (z=0)"} lang={lang} />
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
              <MathRenderer math="\|\vec{AB}\| = \sqrt{3^2 + 4^2} = 5" lang={lang} />
            </span>
          </>
        )}

        {type === 'sphere_general_center_radius' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="C(2, -3, 1)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="R = \sqrt{2^2 + (-3)^2 + 1^2 - (-22)} = 6" lang={lang} />
            </span>
          </>
        )}

        {type === 'polygon_diagonals' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math={isAr ? "\text{عدد الأضلاع: } n = 11" : "\text{Sides: } n = 11"} lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\text{الأقطار: } \binom{n}{2} - n = 44" lang={lang} />
            </span>
          </>
        )}

        {type === 'trig_derivative_tangent' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y = \csc(2x) - \cot(2x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\text{ميل المماس: } \frac{dy}{dx} = 2y\csc(2x)" lang={lang} />
            </span>
          </>
        )}

        {type === 'secant_derivative_graph' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="f(x) = \sec(3x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg font-bold">
              <MathRenderer math="\text{المماس: } f'(x) = 3\sec(3x)\tan(3x)" lang={lang} />
            </span>
            <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="P(x_0, y_0)" lang={lang} />
            </span>
          </>
        )}

        {type === 'cotangent_curvature_graph' && (
          <>
            <span className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y = \cot(\pi x)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y''\left(\frac{1}{4}\right) = 4\pi^2" lang={lang} />
            </span>
          </>
        )}

        {type === 'plane_intercepts_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\frac{x}{1} + \frac{y}{2} + \frac{z}{3} = 1" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{n} = (6, 3, 2)" lang={lang} />
            </span>
            <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="6x + 3y + 2z - 6 = 0" lang={lang} />
            </span>
          </>
        )}

        {type === 'coplanar_vectors_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{u} = (1, 2, 3)" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{v} = (0, 1, 2)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{w} = (1, 0, -1)" lang={lang} />
            </span>
          </>
        )}

        {type === 'line_plane_angle_3d' && (
          <>
            <span className="bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="y + z - 5 = 0" lang={lang} />
            </span>
            <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\vec{n} = (0, 1, 1)" lang={lang} />
            </span>
            <span className="bg-amber-950/60 border border-amber-500/40 text-amber-200 px-2.5 py-1 rounded-lg">
              <MathRenderer math="\sin\theta = \frac{1}{2} \implies \theta = 30^\circ" lang={lang} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};
