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
      </div>
    </div>
  );
};
