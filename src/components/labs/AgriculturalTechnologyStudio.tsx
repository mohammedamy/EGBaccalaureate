import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  SOIL_TYPE_PRESETS,
  STRATEGIC_CROPS,
  IRRIGATION_METHODS,
  EGYPTIAN_MEGA_PROJECTS,
  IPM_DIAGNOSTICS_CATALOG,
  type SoilTypePreset,
  type StrategicCropData,
  type IrrigationMethod,
  type EgyptianMegaProject,
  type PlantPathologyDiagnostic,
} from '../../data/agricultureLab/agricultureLabData';
import {
  Sprout,
  Droplets,
  Sun,
  Wind,
  Layers,
  Thermometer,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Maximize2,
  Minimize2,
  RotateCcw,
  Compass,
  MapPin,
  Bug,
  ShieldCheck,
  Zap,
  Info,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: AgriStation;
}

export type AgriStation =
  | 'soil_chemistry'
  | 'irrigation_budgeting'
  | 'hydroponics_greenhouse'
  | 'egyptian_megaprojects'
  | 'ipm_pathology';


// ============================================================================
// REALISTIC HIGH-RESOLUTION SCIENTIFIC VECTOR SCHEMATICS FOR AGRICULTURE LAB
// ============================================================================

const UsdaSoilTextureTriangle: React.FC<{
  sand: number;
  silt: number;
  clay: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ sand, silt, clay, isArabic, isLight = false }) => {
  const toX = (s: number, si: number, c: number) => +(40 * (s / 100) + 380 * (si / 100) + 210 * (c / 100)).toFixed(1);
  const toY = (c: number) => +(285 - (c / 100) * 250).toFixed(1);

  const poly = (pts: [number, number, number][]) =>
    pts.map(([s, si, c]) => `${toX(s, si, c)},${toY(c)}`).join(' ');

  const curX = toX(sand, silt, clay);
  const curY = toY(clay);

  const getSoilClass = (s: number, si: number, c: number) => {
    if (c >= 40 && s <= 45 && si < 40) return isArabic ? 'طينية (Clay)' : 'Clay';
    if (c >= 40 && si >= 40) return isArabic ? 'طينية سلتية (Silty Clay)' : 'Silty Clay';
    if (c >= 35 && s >= 45) return isArabic ? 'طينية رملية (Sandy Clay)' : 'Sandy Clay';
    if (c >= 27 && c < 40 && s <= 20) return isArabic ? 'طميية طينية سلتية (Silty Clay Loam)' : 'Silty Clay Loam';
    if (c >= 27 && c < 40 && s > 20 && s <= 45) return isArabic ? 'طميية طينية (Clay Loam)' : 'Clay Loam';
    if (c >= 20 && c < 35 && s > 45 && si < 28) return isArabic ? 'طميية طينية رملية (Sandy Clay Loam)' : 'Sandy Clay Loam';
    if (c >= 7 && c < 27 && si >= 28 && si < 50 && s <= 52) return isArabic ? 'طميية معتدلة (Loam)' : 'Loam';
    if (si >= 50 && ((c >= 12 && c < 27) || (si < 80 && c < 12))) return isArabic ? 'طميية سلتية (Silt Loam)' : 'Silt Loam';
    if (si >= 80 && c < 12) return isArabic ? 'سلتية (Silt)' : 'Silt';
    if (s >= 70 && c < 15 && s <= 85) return isArabic ? 'رملية طميية (Loamy Sand)' : 'Loamy Sand';
    if (s > 85) return isArabic ? 'رملية خشنة (Sand)' : 'Sand';
    return isArabic ? 'طميية رملية (Sandy Loam)' : 'Sandy Loam';
  };

  const soilName = getSoilClass(sand, silt, clay);

  const zones: { id: string; name: string; pts: [number, number, number][]; fill: string }[] = [
    { id: 'clay', name: isArabic ? 'طين' : 'Clay', pts: [[0, 0, 100], [45, 0, 55], [45, 15, 40], [20, 40, 40], [0, 40, 60]], fill: '#b91c1c' },
    { id: 'siltyClay', name: isArabic ? 'طين سلتي' : 'SiCl', pts: [[0, 40, 60], [20, 40, 40], [0, 60, 40]], fill: '#c2410c' },
    { id: 'sandyClay', name: isArabic ? 'طين رملي' : 'SaCl', pts: [[45, 0, 55], [65, 0, 35], [45, 20, 35]], fill: '#d97706' },
    { id: 'clayLoam', name: isArabic ? 'طمي طيني' : 'ClLoam', pts: [[20, 40, 40], [45, 15, 40], [45, 28, 27], [20, 53, 27]], fill: '#ca8a04' },
    { id: 'siltyClayLoam', name: isArabic ? 'طمي سلتي طيني' : 'SiClLoam', pts: [[0, 60, 40], [20, 40, 40], [20, 53, 27], [0, 73, 27]], fill: '#a16207' },
    { id: 'sandyClayLoam', name: isArabic ? 'طمي رملي طيني' : 'SaClLoam', pts: [[45, 20, 35], [65, 0, 35], [80, 0, 20], [52, 28, 20], [45, 28, 27]], fill: '#b45309' },
    { id: 'loam', name: isArabic ? 'طمي معتدل' : 'Loam', pts: [[43, 30, 27], [28, 45, 27], [28, 50, 22], [52, 28, 20], [52, 41, 7]], fill: '#059669' },
    { id: 'siltLoam', name: isArabic ? 'طمي سلتي' : 'SiLoam', pts: [[0, 73, 27], [20, 53, 27], [20, 80, 0], [0, 88, 12]], fill: '#047857' },
    { id: 'silt', name: isArabic ? 'سلت' : 'Silt', pts: [[0, 88, 12], [20, 80, 0], [0, 100, 0]], fill: '#0f766e' },
    { id: 'sandyLoam', name: isArabic ? 'طمي رملي' : 'SaLoam', pts: [[52, 28, 20], [80, 0, 20], [85, 0, 15], [70, 30, 0], [50, 50, 0], [52, 41, 7]], fill: '#d97706' },
    { id: 'loamySand', name: isArabic ? 'رمل طميي' : 'LoamSa', pts: [[70, 30, 0], [85, 0, 15], [90, 0, 10], [85, 15, 0]], fill: '#eab308' },
    { id: 'sand', name: isArabic ? 'رمل' : 'Sand', pts: [[85, 15, 0], [90, 0, 10], [100, 0, 0]], fill: '#f59e0b' },
  ];

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 420 320" className="w-full max-w-[420px] h-auto overflow-visible select-none">
        <defs>
          <filter id="usdaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <polygon points="40,285 380,285 210,35" fill={isLight ? '#f8fafc' : '#0b0f19'} stroke={isLight ? '#334155' : '#475569'} strokeWidth="2" />

        {zones.map((z) => (
          <polygon
            key={z.id}
            points={poly(z.pts)}
            fill={z.fill}
            fillOpacity={isLight ? '0.22' : '0.28'}
            stroke={isLight ? '#64748b' : '#475569'}
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
        ))}

        <text x="210" y="65" fill={isLight ? '#991b1b' : '#f87171'} fontSize="9" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طين (Clay)' : 'Clay'}
        </text>
        <text x="310" y="140" fill={isLight ? '#c2410c' : '#fb923c'} fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طين سلتي' : 'Silty Clay'}
        </text>
        <text x="120" y="160" fill={isLight ? '#b45309' : '#fbbf24'} fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طين رملي' : 'Sandy Clay'}
        </text>
        <text x="210" y="190" fill={isLight ? '#065f46' : '#34d399'} fontSize="8.5" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طمي (Loam)' : 'Loam'}
        </text>
        <text x="320" y="240" fill={isLight ? '#0f766e' : '#2dd4bf'} fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طمي سلتي' : 'Silt Loam'}
        </text>
        <text x="120" y="250" fill={isLight ? '#a16207' : '#facc15'} fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'طمي رملي' : 'Sandy Loam'}
        </text>
        <text x="75" y="280" fill={isLight ? '#b45309' : '#f59e0b'} fontSize="8" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'رمل' : 'Sand'}
        </text>

        <text x="210" y="20" fill={isLight ? '#dc2626' : '#ef4444'} fontSize="10" fontWeight="bold" textAnchor="middle">
          ▲ {isArabic ? 'نسبة الطين Clay %' : 'Clay % (0-100)'}
        </text>
        <text x="25" y="305" fill={isLight ? '#d97706' : '#f59e0b'} fontSize="10" fontWeight="bold" textAnchor="middle">
          ◀ {isArabic ? 'رمل Sand %' : 'Sand %'}
        </text>
        <text x="395" y="305" fill={isLight ? '#0284c7' : '#38bdf8'} fontSize="10" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'غرين Silt %' : 'Silt %'} ▶
        </text>

        <line
          x1={40 * (1 - clay / 100) + 210 * (clay / 100)}
          y1={curY}
          x2={380 * (1 - clay / 100) + 210 * (clay / 100)}
          y2={curY}
          stroke={isLight ? '#dc2626' : '#ef4444'}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.8"
        />

        <circle cx={curX} cy={curY} r="8" fill="#10b981" opacity="0.3" className="animate-ping" />
        <circle cx={curX} cy={curY} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.8" filter="url(#usdaGlow)" />

        <g transform={`translate(${Math.max(80, Math.min(340, curX))}, ${Math.max(45, curY - 18)})`}>
          <rect x="-65" y="-12" width="130" height="18" rx="4" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#059669' : '#10b981'} strokeWidth={isLight ? '1.5' : '1.2'} />
          <text x="0" y="1" fill={isLight ? '#065f46' : '#10b981'} fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            {soilName}
          </text>
        </g>
      </svg>
    </div>
  );
};

const SoilProfileHorizonColumn: React.FC<{
  soilEsp: number;
  targetEsp: number;
  gypsumTons: number;
  soilEc: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ soilEsp, targetEsp, gypsumTons, soilEc, isArabic, isLight = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`text-[11px] font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'} mb-2 font-mono`}>
        {isArabic ? 'قطاع التربة الاستصلاحي (Soil Profile Monolith)' : 'Reclamation Soil Profile Monolith'}
      </div>
      <svg viewBox="0 0 200 300" className="w-full max-w-[200px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="gypsumGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
          <pattern id="clayPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 0 10 L 10 0 M 0 0 L 10 10" stroke="#78350f" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        <rect x="20" y="20" width="160" height="260" rx="8" fill={isLight ? '#f8fafc' : '#1e293b'} stroke={isLight ? '#cbd5e1' : '#475569'} strokeWidth="1.5" />

        <rect x="20" y="20" width="160" height="25" fill="#1c1917" />
        <text x="25" y="36" fill="#a8a29e" fontSize="7.5" fontWeight="bold">
          {isArabic ? 'أفق O (دبال)' : 'O (Humus 0-5cm)'}
        </text>

        {[35, 60, 85, 110, 135, 160].map((vx) => (
          <path
            key={vx}
            d={`M ${vx} 20 Q ${vx - 4} 12 ${vx - 6} 8 Q ${vx} 12 ${vx} 20 Q ${vx + 4} 10 ${vx + 7} 6 Q ${vx + 3} 12 ${vx} 20`}
            fill="#22c55e"
          />
        ))}

        <rect x="20" y="45" width="160" height="85" fill="#451a03" />
        <path
          d="M 60 45 Q 65 75 50 100 M 60 70 Q 75 90 85 110 M 110 45 Q 105 70 120 95 M 110 65 Q 95 90 90 115 M 135 45 Q 140 70 135 105"
          fill="none"
          stroke="#fef08a"
          strokeWidth="1"
          opacity="0.75"
        />
        <text x="25" y="60" fill="#fde047" fontSize="8" fontWeight="bold">
          {isArabic ? 'أفق A (جذور 5-30سم)' : 'A (Topsoil 5-30cm)'}
        </text>

        <rect
          x="22"
          y="22"
          width="156"
          height="106"
          fill="url(#gypsumGlow)"
          stroke={isLight ? '#0284c7' : '#38bdf8'}
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />
        <g transform="translate(100, 90)">
          <rect x="-48" y="-10" width="96" height="20" rx="3" fill={isLight ? '#ffffff' : '#0f172a'} stroke={isLight ? '#0284c7' : '#38bdf8'} strokeWidth={isLight ? '1.5' : '0.8'} />
          <text x="0" y="3" fill={isLight ? '#0369a1' : '#38bdf8'} fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            Ca²⁺ ⇄ 2Na⁺ ({gypsumTons} {isArabic ? 'طن' : 't'})
          </text>
        </g>

        <rect x="20" y="130" width="160" height="90" fill="#78350f" />
        <rect x="20" y="130" width="160" height="90" fill="url(#clayPattern)" />
        <text x="25" y="146" fill="#fdba74" fontSize="8" fontWeight="bold">
          {isArabic ? 'أفق B (تراكم 30-70سم)' : 'B (Subsoil 30-70cm)'}
        </text>
        <text x="100" y="180" fill="#fed7aa" fontSize="7" textAnchor="middle" opacity="0.8">
          {soilEsp > 15
            ? (isArabic ? 'تجمع أملاح صودية متشتتة (ESP > 15%)' : 'Dispersed Sodic Clay Complex')
            : (isArabic ? 'بناء حبيبي متوازن وثابت' : 'Stable Aggregate Structure')}
        </text>

        <rect x="20" y="220" width="160" height="60" fill="#a8a29e" />
        {[
          { cx: 50, cy: 240, r: 4 },
          { cx: 85, cy: 255, r: 6 },
          { cx: 130, cy: 235, r: 5 },
          { cx: 155, cy: 260, r: 7 },
          { cx: 110, cy: 270, r: 4 },
        ].map((peb, i) => (
          <circle key={i} cx={peb.cx} cy={peb.cy} r={peb.r} fill="#e7e5e4" stroke="#78716c" strokeWidth="0.8" />
        ))}
        <text x="25" y="236" fill={isLight ? '#1c1917' : '#e7e5e4'} fontSize="8" fontWeight="bold">
          {isArabic ? 'أفق C (مادة الأصل 70-100سم)' : 'C (Parent 70-100cm)'}
        </text>

        {[
          { label: '0cm', y: 20 },
          { label: '30cm', y: 130 },
          { label: '70cm', y: 220 },
          { label: '1m', y: 280 },
        ].map((t) => (
          <g key={t.label}>
            <line x1="15" y1={t.y} x2="20" y2={t.y} stroke={isLight ? '#475569' : '#94a3b8'} strokeWidth="1" />
            <text x="12" y={t.y + 3} fill={isLight ? '#334155' : '#94a3b8'} fontSize="7" textAnchor="end" fontFamily="monospace" fontWeight={isLight ? 'bold' : 'normal'}>
              {t.label}
            </text>
          </g>
        ))}
      </svg>
      <div className={`mt-2 text-[10px] ${isLight ? 'text-slate-700 font-bold' : 'text-slate-400 font-mono'} text-center`}>
        ECe: {soilEc.toFixed(1)} dS/m • ESP: {soilEsp.toFixed(1)}% → {targetEsp}%
      </div>
    </div>
  );
};

const IrrigationEngineeringSchematic: React.FC<{
  method: IrrigationMethod;
  etc: number;
  leachingReq: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ method, etc, leachingReq, isArabic, isLight = false }) => {
  const isPivot = method.id === 'center_pivot';

  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 600 230" className="w-full max-w-[600px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="pivotSpray" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wetBulbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect x="10" y="10" width="580" height="140" fill={isLight ? '#f0f9ff' : '#070b14'} rx="8" />
        <rect x="10" y="150" width="580" height="70" fill={isLight ? '#fef3c7' : '#292524'} rx="4" />
        <line x1="10" y1="150" x2="590" y2="150" stroke="#78350f" strokeWidth="2" />

        {isPivot ? (
          <g>
            <g transform="translate(45, 150)">
              <rect x="-18" y="-6" width="36" height="8" fill="#64748b" stroke="#334155" />
              <polygon points="0,-75 -15,0 15,0" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="0" y2="-80" stroke="#38bdf8" strokeWidth="4" />
              <circle cx="0" cy="-80" r="5" fill="#0284c7" />
              <circle cx="-10" cy="-60" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="1" />
              <text x="0" y="14" fill="#94a3b8" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                {isArabic ? 'قاعدة البيفوت (Anchor)' : 'Pivot Center'}
              </text>
            </g>

            <path d="M 45 70 Q 135 55 225 70" fill="none" stroke="#cbd5e1" strokeWidth="4" />
            {[75, 105, 135, 165, 195].map((wx) => (
              <line key={wx} x1={wx} y1="62" x2={wx} y2="78" stroke="#94a3b8" strokeWidth="1" />
            ))}

            <g transform="translate(225, 150)">
              <polygon points="0,-80 -12,0 12,0" fill="none" stroke="#eab308" strokeWidth="2" />
              <rect x="-6" y="-35" width="12" height="10" rx="2" fill="#334155" stroke="#f59e0b" strokeWidth="0.8" />
              <circle cx="-12" cy="0" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="12" cy="0" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <text x="0" y="14" fill="#94a3b8" fontSize="7" textAnchor="middle">
                {isArabic ? 'برج قيادة ١' : 'Tower 1'}
              </text>
            </g>

            <path d="M 225 70 Q 315 55 405 70" fill="none" stroke="#cbd5e1" strokeWidth="4" />
            {[255, 285, 315, 345, 375].map((wx) => (
              <line key={wx} x1={wx} y1="62" x2={wx} y2="78" stroke="#94a3b8" strokeWidth="1" />
            ))}

            <g transform="translate(405, 150)">
              <polygon points="0,-80 -12,0 12,0" fill="none" stroke="#eab308" strokeWidth="2" />
              <rect x="-6" y="-35" width="12" height="10" rx="2" fill="#334155" stroke="#f59e0b" strokeWidth="0.8" />
              <circle cx="-12" cy="0" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="12" cy="0" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <text x="0" y="14" fill="#94a3b8" fontSize="7" textAnchor="middle">
                {isArabic ? 'برج قيادة ٢' : 'Tower 2'}
              </text>
            </g>

            <path d="M 405 70 L 495 72" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="495" cy="72" r="4" fill="#ef4444" />
            <path d="M 495 72 L 560 60 L 550 148 Z" fill="url(#pivotSpray)" opacity="0.6" />

            {[80, 120, 160, 200, 260, 300, 340, 380, 440, 475].map((nx) => (
              <g key={nx}>
                <line x1={nx} y1="68" x2={nx} y2="128" stroke="#334155" strokeWidth="1.5" />
                <circle cx={nx} cy="128" r="2.5" fill="#38bdf8" />
                <polygon points={`${nx},128 ${nx - 22},150 ${nx + 22},150`} fill="url(#pivotSpray)" />
              </g>
            ))}

            {[...Array(28)].map((_, i) => (
              <path
                key={i}
                d={`M ${60 + i * 18} 150 Q ${57 + i * 18} 142 ${54 + i * 18} 138 Q ${60 + i * 18} 144 ${60 + i * 18} 150 Q ${63 + i * 18} 141 ${66 + i * 18} 136 Q ${62 + i * 18} 145 ${60 + i * 18} 150`}
                fill="#22c55e"
              />
            ))}

            <g transform="translate(300, 185)">
              <text x="0" y="0" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {isArabic ? `بخر المحصول ETc: ${etc} مم/يوم • عمق الغسيل الملحي (LR = ${(leachingReq * 100).toFixed(1)}%)` : `Crop ETc: ${etc} mm/d • Leaching Fraction (LR = ${(leachingReq * 100).toFixed(1)}%)`}
              </text>
              {[-60, -20, 20, 60].map((lx) => (
                <path key={lx} d={`M ${lx} 8 L ${lx} 22 M ${lx - 3} 18 L ${lx} 23 L ${lx + 3} 18`} stroke="#38bdf8" strokeWidth="1.2" />
              ))}
            </g>
          </g>
        ) : (
          <g>
            <g transform="translate(60, 120)">
              <rect x="-15" y="-45" width="30" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="-25" r="8" fill="#0284c7" />
              <text x="0" y="-8" fill="#94a3b8" fontSize="7" textAnchor="middle">
                {isArabic ? 'فلتر ديسك' : 'Disc Filter'}
              </text>
              <rect x="-40" y="-20" width="18" height="25" rx="2" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
              <text x="-31" y="-5" fill="#f59e0b" fontSize="6" textAnchor="middle">
                NPK
              </text>
              <line x1="-22" y1="-10" x2="-15" y2="-10" stroke="#f59e0b" strokeWidth="1" />
            </g>

            <line x1="60" y1="120" x2="60" y2="148" stroke="#38bdf8" strokeWidth="4" />
            <line x1="60" y1="148" x2="570" y2="148" stroke="#1e293b" strokeWidth="4" />

            {[140, 240, 340, 440, 530].map((dx) => (
              <g key={dx}>
                <circle cx={dx} cy="148" r="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                <circle cx={dx} cy="154" r="1.5" fill="#38bdf8" />
                <circle cx={dx} cy="160" r="1.2" fill="#38bdf8" />

                <ellipse cx={dx} cy="185" rx="36" ry="26" fill="url(#wetBulbGrad)" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                <ellipse cx={dx} cy="175" rx="18" ry="14" fill="#0284c7" opacity="0.45" />

                <path
                  d={`M ${dx} 148 Q ${dx - 6} 136 ${dx - 10} 128 Q ${dx} 138 ${dx} 148 Q ${dx + 6} 135 ${dx + 10} 126 Q ${dx + 3} 138 ${dx} 148`}
                  fill="#22c55e"
                />

                <path d={`M ${dx - 12} 185 L ${dx - 4} 175 M ${dx + 12} 185 L ${dx + 4} 175`} stroke="#fef08a" strokeWidth="0.8" />
              </g>
            ))}

            <g transform="translate(340, 215)">
              <text x="0" y="0" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {isArabic ? 'ديناميكية بصلة البلل (Wetted Bulb) وامتصاص الجذور للمياه والتسميد' : 'Capillary Moisture Bulb & Root Absorption Mechanics'}
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

const HydroponicGreenhouseSchematic: React.FC<{
  system: 'nft' | 'dwc' | 'dutch_bucket';
  ec: number;
  ph: number;
  vpd: number;
  temp: number;
  co2: number;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ system, ec, ph, vpd, temp, co2, isArabic, isLight = false }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 620 230" className="w-full max-w-[620px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="ledParBeam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="wetPadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        <rect x="15" y="15" width="590" height="205" rx="14" fill={isLight ? '#f8fafc' : '#090d16'} stroke="#475569" strokeWidth="1.5" />

        <line x1="280" y1="15" x2="340" y2="6" stroke="#10b981" strokeWidth="2.5" />
        <text x="310" y="0" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">
          {isArabic ? 'تهوية سقفية' : 'Roof Vent'}
        </text>

        <g transform="translate(20, 50)">
          <rect x="0" y="0" width="14" height="90" fill="url(#wetPadGrad)" rx="2" />
          {[15, 30, 45, 60, 75].map((py) => (
            <line key={py} x1="0" y1={py} x2="14" y2={py + 6} stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
          ))}
          <text x="-4" y="50" fill="#38bdf8" fontSize="6.5" fontWeight="bold" transform="rotate(-90 -4 50)" textAnchor="middle">
            {isArabic ? 'خلية تبريد' : 'Wet Pad'}
          </text>
        </g>

        <g transform="translate(585, 75)">
          <circle cx="0" cy="20" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <line x1="-12" y1="20" x2="12" y2="20" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="0" y1="8" x2="0" y2="32" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="0" cy="20" r="4" fill="#475569" />
          <text x="0" y="44" fill="#94a3b8" fontSize="6.5" textAnchor="middle">
            {isArabic ? 'شفاط' : 'Fan'}
          </text>
        </g>

        {[140, 240, 340, 440].map((lx) => (
          <g key={lx}>
            <rect x={lx - 25} y="25" width="50" height="6" rx="2" fill="#334155" stroke="#ec4899" strokeWidth="0.8" />
            <polygon points={`${lx - 25},31 ${lx - 45},115 ${lx + 45},115 ${lx + 25},31`} fill="url(#ledParBeam)" />
          </g>
        ))}

        <line x1="50" y1="42" x2="570" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        <text x="60" y="38" fill="#10b981" fontSize="7" fontWeight="bold">
          CO₂ Enrichment: {co2} ppm
        </text>

        {system === 'nft' && (
          <g transform="translate(80, 115)">
            <polygon points="0,0 440,12 440,24 0,12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="2,10 438,22 438,23 2,11" fill="#0284c7" />

            {[40, 100, 160, 220, 280, 340, 400].map((px) => (
              <g key={px} transform={`translate(${px}, ${2 + (px / 440) * 12})`}>
                <path d="M -6 5 Q 0 10 6 5 Q 8 10 0 12 Q -8 10 -6 5" fill="#fef08a" opacity="0.9" />
                <circle cx="0" cy="-6" r="10" fill="#22c55e" />
                <circle cx="-4" cy="-8" r="6" fill="#16a34a" />
                <circle cx="4" cy="-8" r="6" fill="#15803d" />
              </g>
            ))}

            <path d="M 440 20 L 455 20 L 455 60 L 320 60 L 320 80" fill="none" stroke="#38bdf8" strokeWidth="3" />
          </g>
        )}

        {system === 'dwc' && (
          <g transform="translate(80, 115)">
            <rect x="0" y="0" width="440" height="40" rx="4" fill="#0284c7" fillOpacity="0.4" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="5" y="0" width="430" height="8" rx="2" fill="#ffffff" stroke="#94a3b8" />

            {[50, 120, 190, 260, 330, 400].map((px) => (
              <g key={px} transform={`translate(${px}, 4)`}>
                <polygon points="-8,0 8,0 6,10 -6,10" fill="#334155" />
                <path d="M -5 10 Q 0 32 8 35 M 0 10 Q 5 28 -6 34 M 5 10 Q -4 26 2 35" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                <circle cx="0" cy="-10" r="10" fill="#22c55e" />
                <circle cx="-4" cy="-12" r="6" fill="#16a34a" />
              </g>
            ))}

            <rect x="40" y="32" width="360" height="5" rx="2" fill="#64748b" />
            {[70, 140, 210, 280, 350].map((bx) => (
              <g key={bx}>
                <circle cx={bx} cy="26" r="2" fill="#ffffff" opacity="0.8" />
                <circle cx={bx + 3} cy="18" r="1.5" fill="#ffffff" opacity="0.6" />
                <circle cx={bx - 2} cy="12" r="1.8" fill="#ffffff" opacity="0.7" />
              </g>
            ))}
          </g>
        )}

        {system === 'dutch_bucket' && (
          <g transform="translate(80, 115)">
            {[50, 150, 250, 350].map((bx) => (
              <g key={bx} transform={`translate(${bx}, 0)`}>
                <polygon points="-22,0 22,0 18,35 -18,35" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                <polygon points="-20,2 20,2 17,33 -17,33" fill="#e2e8f0" />
                <line x1="0" y1="-10" x2="0" y2="8" stroke="#334155" strokeWidth="2" />
                <path d="M 0 0 Q -5 -15 0 -30 Q 8 -40 0 -50" stroke="#16a34a" strokeWidth="3" fill="none" />
                <circle cx="-6" cy="-22" r="4" fill="#ef4444" />
                <circle cx="6" cy="-35" r="4.5" fill="#ef4444" />
                <path d="M 0 28 L 14 28 L 14 38 L 26 38" fill="none" stroke="#38bdf8" strokeWidth="2" />
              </g>
            ))}
            <line x1="30" y1="38" x2="440" y2="38" stroke="#38bdf8" strokeWidth="3" />
          </g>
        )}

        <g transform="translate(180, 175)">
          <rect x="0" y="0" width="130" height="42" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="2" y="14" width="126" height="26" rx="2" fill="#0284c7" fillOpacity="0.4" />
          <rect x="10" y="18" width="16" height="18" rx="2" fill="#334155" stroke="#38bdf8" strokeWidth="1" />
          <path d="M 18 18 L 18 -15 L -80 -15 L -80 -55" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

          <g transform="translate(145, 8)">
            <rect x="0" y="0" width="22" height="30" rx="3" fill="#450a0a" stroke="#ef4444" strokeWidth="0.8" />
            <text x="11" y="18" fill="#fca5a5" fontSize="6.5" fontWeight="bold" textAnchor="middle">
              A
            </text>
            <rect x="28" y="0" width="22" height="30" rx="3" fill="#022c22" stroke="#10b981" strokeWidth="0.8" />
            <text x="39" y="18" fill="#6ee7b7" fontSize="6.5" fontWeight="bold" textAnchor="middle">
              B
            </text>
            <text x="25" y="38" fill="#94a3b8" fontSize="6" textAnchor="middle">
              Stock Tanks
            </text>
          </g>

          <line x1="75" y1="2" x2="75" y2="28" stroke="#f59e0b" strokeWidth="2" />
          <line x1="90" y1="2" x2="90" y2="28" stroke="#a855f7" strokeWidth="2" />

          <g transform="translate(260, 20)">
            <rect x="-45" y="-14" width="90" height="28" rx="4" fill="#020617" stroke="#10b981" strokeWidth="1" />
            <text x="0" y="-2" fill="#10b981" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              EC: {ec.toFixed(1)} | pH: {ph.toFixed(1)}
            </text>
            <text x="0" y="9" fill="#38bdf8" fontSize="7" fontFamily="monospace" textAnchor="middle">
              {temp}°C | VPD: {vpd} kPa
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

const EgyptianMegaprojectsMapSchematic: React.FC<{
  activeProject: EgyptianMegaProject;
  allProjects: EgyptianMegaProject[];
  onSelectProject: (p: EgyptianMegaProject) => void;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ activeProject, allProjects, onSelectProject, isArabic, isLight = false }) => {
  const toX = (lon: number) => +(40 + ((lon - 24.5) / 12.5) * 440).toFixed(1);
  const toY = (lat: number) => +(275 - ((lat - 21.5) / 10.5) * 245).toFixed(1);

  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 520 300" className="w-full max-w-[520px] h-auto overflow-visible select-none">
        <defs>
          <linearGradient id="nileGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <polygon
          points="40,275 40,42 232,48 277,75 247,44 296,41 311,44 382,44 404,87 382,147 435,260 480,275"
          fill={isLight ? '#f1f5f9' : '#090d16'}
          stroke="#334155"
          strokeWidth="1.5"
        />

        <text x="140" y="32" fill="#0284c7" fontSize="8" fontWeight="bold" opacity="0.7">
          {isArabic ? 'البحر الأبيض المتوسط (Mediterranean Sea)' : 'Mediterranean Sea'}
        </text>

        <text x="435" y="180" fill="#0284c7" fontSize="8" fontWeight="bold" opacity="0.7" transform="rotate(45 435 180)">
          {isArabic ? 'البحر الأحمر (Red Sea)' : 'Red Sea'}
        </text>

        <path
          d="M 320 255 Q 335 240 335 220 Q 338 235 328 255 Z"
          fill="#0284c7"
          opacity="0.8"
        />
        <text x="345" y="235" fill="#38bdf8" fontSize="7" fontWeight="bold">
          {isArabic ? 'بحيرة ناصر' : 'Lake Nasser'}
        </text>

        <path
          d="M 335 220 Q 330 190 328 167 Q 315 155 275 142 Q 265 130 261 121 Q 268 95 277 75"
          fill="none"
          stroke="url(#nileGrad)"
          strokeWidth="3"
        />
        <path d="M 277 75 Q 260 60 247 44" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <path d="M 277 75 Q 288 58 296 41" fill="none" stroke="#38bdf8" strokeWidth="2" />

        <path d="M 330 240 L 297 249" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
        <path d="M 275 75 Q 250 72 227 67" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
        <path d="M 296 48 L 332 53" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />

        {allProjects.map((p) => {
          const px = toX(p.longitude);
          const py = toY(p.latitude);
          const isSelected = activeProject.id === p.id;

          return (
            <g
              key={p.id}
              onClick={() => onSelectProject(p)}
              className="cursor-pointer transition-all hover:scale-110"
            >
              {isSelected && (
                <>
                  <circle cx={px} cy={py} r="14" fill="#10b981" opacity="0.3" className="animate-ping" />
                  <circle cx={px} cy={py} r="10" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                </>
              )}
              <circle
                cx={px}
                cy={py}
                r={isSelected ? 6 : 4.5}
                fill={isSelected ? '#10b981' : '#f59e0b'}
                stroke="#ffffff"
                strokeWidth={1.5}
                filter={isSelected ? 'url(#mapGlow)' : undefined}
              />
              <text
                x={px}
                y={py - 9}
                fill={isSelected ? '#10b981' : '#cbd5e1'}
                fontSize={isSelected ? '8.5' : '7'}
                fontWeight={isSelected ? 'bold' : 'normal'}
                textAnchor="middle"
              >
                {isArabic ? p.nameAr.split('(')[0].trim() : p.nameEn.split('(')[0].trim()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export const AgriculturalTechnologyStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'soil_chemistry',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<AgriStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Soil Chemistry & Fertigation State
  // -------------------------------------------------------------
  const [selectedSoilPreset, setSelectedSoilPreset] = useState<SoilTypePreset>(SOIL_TYPE_PRESETS[1]); // Toshka sand default
  const [soilSand, setSoilSand] = useState<number>(selectedSoilPreset.sandPct);
  const [soilSilt, setSoilSilt] = useState<number>(selectedSoilPreset.siltPct);
  const [soilClay, setSoilClay] = useState<number>(selectedSoilPreset.clayPct);
  const [soilPh, setSoilPh] = useState<number>(selectedSoilPreset.defaultPh);
  const [soilEc, setSoilEc] = useState<number>(selectedSoilPreset.defaultEc);
  const [soilCec, setSoilCec] = useState<number>(selectedSoilPreset.defaultCec);
  const [soilEsp, setSoilEsp] = useState<number>(8.5); // Exchangeable Sodium Percentage (%)
  const targetEsp = 5.0;

  const handleSoilPresetChange = (preset: SoilTypePreset) => {
    setSelectedSoilPreset(preset);
    setSoilSand(preset.sandPct);
    setSoilSilt(preset.siltPct);
    setSoilClay(preset.clayPct);
    setSoilPh(preset.defaultPh);
    setSoilEc(preset.defaultEc);
    setSoilCec(preset.defaultCec);
  };

  // Gypsum Requirement (tons of CaSO4.2H2O per feddan to reduce ESP to target)
  const gypsumRequirementTons = useMemo(() => {
    if (soilEsp <= targetEsp) return 0;
    // Formula: GR = (ESP - targetESP)/100 * CEC * 0.086 * 4.2 * 10 (approx tons/feddan)
    // MoE Standard: GR = (ESP - targetESP) * CEC * 0.086
    const gr = (soilEsp - targetEsp) * soilCec * 0.086;
    return Math.max(0, parseFloat(gr.toFixed(2)));
  }, [soilEsp, targetEsp, soilCec]);

  // SAR estimation
  const sarEstimate = useMemo(() => {
    // SAR ≈ ESP / (1.475 - 0.01475 * ESP) empirical US Salinity Lab
    const denom = 1.475 - 0.01475 * soilEsp;
    return denom > 0 ? (soilEsp / denom).toFixed(1) : (soilEsp * 0.8).toFixed(1);
  }, [soilEsp]);

  // -------------------------------------------------------------
  // STATION 2: Evapotranspiration & Irrigation Budgeting State
  // -------------------------------------------------------------
  const [selectedCrop, setSelectedCrop] = useState<StrategicCropData>(STRATEGIC_CROPS[0]);
  const [selectedCropStageIdx, setSelectedCropStageIdx] = useState<number>(2); // Mid-season
  const [selectedIrrigation, setSelectedIrrigation] = useState<IrrigationMethod>(IRRIGATION_METHODS[1]); // Center pivot default
  const [ambientTemp, setAmbientTemp] = useState<number>(32); // °C
  const [solarRadiation, setSolarRadiation] = useState<number>(24); // MJ/m2/day
  const [windSpeed, setWindSpeed] = useState<number>(3.2); // m/s
  const [relativeHumidity, setRelativeHumidity] = useState<number>(35); // %
  const [irrigationWaterEc, setIrrigationWaterEc] = useState<number>(1.2); // dS/m
  const [fieldAreaFeddan, setFieldAreaFeddan] = useState<number>(125); // Standard Toshka/New Delta pivot area

  // Reference Evapotranspiration ET0 (FAO-56 Penman-Monteith approximation)
  const et0 = useMemo(() => {
    // Simplified radiation term and aerodynamic term
    const t = ambientTemp;
    const rs = solarRadiation;
    const u2 = windSpeed;
    const rh = relativeHumidity;
    // Saturation vapor pressure
    const es = 0.6108 * Math.exp((17.27 * t) / (t + 237.3));
    const ea = es * (rh / 100);
    const vpd = Math.max(0.1, es - ea);
    const delta = (4098 * es) / Math.pow(t + 237.3, 2);
    const gamma = 0.067; // Psychrometric constant at sea level / low elevation

    const radTerm = (0.408 * delta * (rs * 0.6)) / (delta + gamma * (1 + 0.34 * u2));
    const aeroTerm = ((gamma * (900 / (t + 273)) * u2 * vpd) / (delta + gamma * (1 + 0.34 * u2)));
    const val = radTerm + aeroTerm;
    return Math.max(1.5, Math.min(14.0, parseFloat(val.toFixed(2))));
  }, [ambientTemp, solarRadiation, windSpeed, relativeHumidity]);

  const currentKc = selectedCrop.growthStages[selectedCropStageIdx].kc;
  const etc = parseFloat((et0 * currentKc).toFixed(2)); // mm/day

  // Leaching Requirement LR = ECw / (5 * ECe - ECw)
  const leachingRequirement = useMemo(() => {
    const denom = 5 * selectedCrop.baseEcThreshold - irrigationWaterEc;
    if (denom <= 0) return 0.25;
    const lr = irrigationWaterEc / denom;
    return Math.min(0.4, Math.max(0.05, parseFloat(lr.toFixed(3))));
  }, [irrigationWaterEc, selectedCrop]);

  // Gross Irrigation Requirement (m3 / feddan / day)
  // 1 mm water depth over 1 feddan (4200.83 m2) = 4.20083 m3
  const girM3PerFeddanDay = useMemo(() => {
    const netM3 = etc * 4.2;
    const eff = selectedIrrigation.efficiencyPct / 100;
    const gross = (netM3 * (1 + leachingRequirement)) / eff;
    return parseFloat(gross.toFixed(1));
  }, [etc, selectedIrrigation, leachingRequirement]);

  const totalDailyPivotDemandM3 = parseFloat((girM3PerFeddanDay * fieldAreaFeddan).toFixed(0));

  // -------------------------------------------------------------
  // STATION 3: Hydroponics & Controlled Greenhouse State
  // -------------------------------------------------------------
  const [ghTemp, setGhTemp] = useState<number>(24);
  const [ghHumidity, setGhHumidity] = useState<number>(65);
  const [ghCo2Ppm, setGhCo2Ppm] = useState<number>(850);
  const [ghParLight, setGhParLight] = useState<number>(450); // umol/m2/s
  const [hydroponicEc, setHydroponicEc] = useState<number>(1.8); // dS/m
  const [hydroponicPh, setHydroponicPh] = useState<number>(6.0);
  const [hydroponicSystem, setHydroponicSystem] = useState<'nft' | 'dwc' | 'dutch_bucket'>('nft');

  // VPD calculation inside greenhouse
  const ghVpd = useMemo(() => {
    const es = 0.6108 * Math.exp((17.27 * ghTemp) / (ghTemp + 237.3));
    const ea = es * (ghHumidity / 100);
    return parseFloat((es - ea).toFixed(2));
  }, [ghTemp, ghHumidity]);

  const vpdStatus = useMemo(() => {
    if (ghVpd < 0.4) return { labelAr: 'رطوبة مفرطة (خطر الفطريات والبياض)', labelEn: 'Too Humid (Fungal Risk)', color: 'text-amber-500' };
    if (ghVpd >= 0.8 && ghVpd <= 1.2) return { labelAr: 'المعدل المثالي للنتح والنمو (0.8 - 1.2 kPa)', labelEn: 'Optimal Transpiration Zone', color: 'text-emerald-500' };
    if (ghVpd > 1.2 && ghVpd <= 1.6) return { labelAr: 'جفاف طفيف (زيادة تهوية وتبريد)', labelEn: 'Moderate Stress', color: 'text-blue-500' };
    return { labelAr: 'إجهاد جفاف شديد (إغلاق الثغور)', labelEn: 'Severe Drought Stress', color: 'text-red-500' };
  }, [ghVpd]);

  // -------------------------------------------------------------
  // STATION 4: Egyptian Mega-Projects Reclamation State
  // -------------------------------------------------------------
  const [activeProject, setActiveProject] = useState<EgyptianMegaProject>(EGYPTIAN_MEGA_PROJECTS[0]);

  // -------------------------------------------------------------
  // STATION 5: IPM & Pathology Diagnostic State
  // -------------------------------------------------------------
  const [activeDiagnostic, setActiveDiagnostic] = useState<PlantPathologyDiagnostic>(IPM_DIAGNOSTICS_CATALOG[0]);
  const [observedIncidencePct, setObservedIncidencePct] = useState<number>(3.5);

  const isThresholdExceeded = useMemo(() => {
    if (activeDiagnostic.id === 'red_palm_weevil') return observedIncidencePct > 0;
    if (activeDiagnostic.id === 'wheat_stripe_rust') return observedIncidencePct >= 1.5;
    if (activeDiagnostic.id === 'fall_armyworm') return observedIncidencePct >= 10.0;
    if (activeDiagnostic.id === 'tomato_late_blight') return observedIncidencePct >= 1.0;
    return observedIncidencePct >= 5.0;
  }, [activeDiagnostic, observedIncidencePct]);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'relative w-full my-6'
      } ${
        isContrast
          ? 'bg-black text-white border-white'
          : isLight
          ? 'bg-slate-50 text-slate-900 border-slate-200 shadow-xl'
          : 'bg-[#0D1117] text-slate-100 border-slate-800 shadow-2xl'
      }`}
    >
      {/* ------------------------------------------------------------- */}
      {/* Studio Header */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-white'
            : 'border-slate-800 bg-[#161B22]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Sprout className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر التكنولوجيا والعلوم الزراعية الحديثة'
                  : 'Agricultural Sciences & Agrotechnology Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'نمذجة كيمياء التربة والري المحوري والتسميد والمشروعات القومية الكبرى والمكافحة المتكاملة'
                : 'Soil Chemistry, Precision Fertigation, FAO-56 Water Budgeting, Mega-Projects & IPM'}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className={`p-2 rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Navigation Station Tabs */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex items-center gap-1 px-4 py-2 border-b overflow-x-auto ${
          isContrast
            ? 'border-white bg-black'
            : isLight
            ? 'border-slate-200 bg-slate-100/70'
            : 'border-slate-800 bg-[#0d1117]'
        }`}
      >
        {[
          {
            id: 'soil_chemistry' as AgriStation,
            nameAr: 'كيمياء التربة والتسميد NPK',
            nameEn: 'Soil & Fertigation',
            icon: Layers,
          },
          {
            id: 'irrigation_budgeting' as AgriStation,
            nameAr: 'الموازنة المائية والري الذكي',
            nameEn: 'Water Budget & Irrigation',
            icon: Droplets,
          },
          {
            id: 'hydroponics_greenhouse' as AgriStation,
            nameAr: 'البيوت المحمية والهيدروبونيك',
            nameEn: 'Greenhouse & Hydroponics',
            icon: Thermometer,
          },
          {
            id: 'egyptian_megaprojects' as AgriStation,
            nameAr: 'المشروعات القومية الزراعية',
            nameEn: 'National Mega-Projects',
            icon: Compass,
          },
          {
            id: 'ipm_pathology' as AgriStation,
            nameAr: 'المكافحة المتكاملة وتشخيص الآفات',
            nameEn: 'IPM & Plant Clinic',
            icon: Bug,
          },
        ].map((station) => {
          const Icon = station.icon;
          const isActive = activeStation === station.id;
          return (
            <button
              key={station.id}
              onClick={() => setActiveStation(station.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{isArabic ? station.nameAr : station.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Workspace Content */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 p-5 overflow-y-auto">
        {/* ========================================================= */}
        {/* STATION 1: Soil Chemistry & Fertigation */}
        {/* ========================================================= */}
        {activeStation === 'soil_chemistry' && (
          <div className="space-y-6">
            {/* Preset Selector */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'نماذج التربة المصرية:' : 'Egyptian Soil Presets:'}
              </span>
              {SOIL_TYPE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSoilPresetChange(preset)}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                    selectedSoilPreset.id === preset.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold'
                      : isLight
                      ? 'border-slate-200 hover:bg-slate-100 text-slate-600'
                      : 'border-slate-800 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            {/* Realistic Scientific Vector Schematics: USDA Texture Triangle & Soil Monolith */}
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {isArabic
                      ? 'مخطط مثلث قوام التربة المعتمد (USDA) وقطاع التربة الاستصلاحي'
                      : 'USDA Soil Texture Ternary Triangle & Reclamation Soil Monolith'}
                  </span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border ${
                  isLight
                    ? 'bg-emerald-100 text-emerald-950 font-black border-emerald-400 shadow-xs'
                    : 'bg-emerald-500/20 text-emerald-400 font-bold border-emerald-500/30'
                }`}>
                  {selectedSoilPreset.nameAr} ({soilSand}% {isArabic ? 'رمل' : 'Sand'} | {soilSilt}% {isArabic ? 'غرين' : 'Silt'} | {soilClay}% {isArabic ? 'طين' : 'Clay'})
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 flex justify-center">
                  <UsdaSoilTextureTriangle
                    sand={soilSand}
                    silt={soilSilt}
                    clay={soilClay}
                    isArabic={isArabic}
                    isLight={isLight}
                  />
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <SoilProfileHorizonColumn
                    soilEsp={soilEsp}
                    targetEsp={targetEsp}
                    gypsumTons={gypsumRequirementTons}
                    soilEc={soilEc}
                    isArabic={isArabic}
                    isLight={isLight}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls Column */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  {isArabic ? 'المحددات الفيزيائية والكيميائية' : 'Physicochemical Parameters'}
                </h3>

                {/* Soil Texture Fraction */}
                <div className="p-3 rounded-lg bg-slate-500/10 border border-slate-500/20 text-xs">
                  <div className="flex items-center justify-between mb-1.5 font-medium">
                    <span>{isArabic ? 'تكوين حبيبات التربة' : 'Soil Texture Composition'}</span>
                    <button
                      onClick={() => handleSoilPresetChange(selectedSoilPreset)}
                      className="flex items-center gap-1 text-[11px] text-emerald-500 hover:underline"
                    >
                      <RotateCcw className="w-3 h-3" />
                      {isArabic ? 'إعادة تعيين' : 'Reset'}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-1.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <div>{isArabic ? 'رمل' : 'Sand'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilSand}%</div>
                    </div>
                    <div className="p-1.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <div>{isArabic ? 'غرين' : 'Silt'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilSilt}%</div>
                    </div>
                    <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <div>{isArabic ? 'طين' : 'Clay'}</div>
                      <div className="tabular-mono font-bold text-xs">{soilClay}%</div>
                    </div>
                  </div>
                </div>

                {/* pH Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'درجة حموضة التربة (pH)' : 'Soil pH'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{soilPh.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="5.0"
                    max="9.5"
                    step="0.1"
                    value={soilPh}
                    onChange={(e) => setSoilPh(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5.0 (حامضي)</span>
                    <span>7.0 (متعادل)</span>
                    <span>9.5 (قلوي صودي)</span>
                  </div>
                </div>

                {/* EC Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الملوحة الكلية ECe (dS/m)' : 'Salinity ECe (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{soilEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="20.0"
                    step="0.1"
                    value={soilEc}
                    onChange={(e) => setSoilEc(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0.5 (عذبة خالية)</span>
                    <span>4.0 (حد الملوحة)</span>
                    <span>20.0 (ملحية شديدة)</span>
                  </div>
                </div>

                {/* CEC Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'السعة التبادلية الكاتيونية CEC' : 'Cation Exchange Capacity (CEC)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{soilCec.toFixed(1)} meq/100g</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="50.0"
                    step="0.5"
                    value={soilCec}
                    onChange={(e) => setSoilCec(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* ESP Slider */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة الصوديوم المتبادل (ESP %)' : 'Exch. Sodium Pct (ESP %)'}</span>
                    <span className="tabular-mono font-bold text-red-500">{soilEsp.toFixed(1)} %</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="35.0"
                    step="0.5"
                    value={soilEsp}
                    onChange={(e) => setSoilEsp(parseFloat(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>&lt; 5% (طبيعي)</span>
                    <span>&gt; 15% (تربة صودية قلوية)</span>
                  </div>
                </div>
              </div>

              {/* Analysis & Gypsum Calculation */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-amber-500">
                  <Zap className="w-4 h-4" />
                  {isArabic ? 'حساب الاحتياج الجبسي واستصلاح القلوية' : 'Gypsum Requirement & Sodic Reclamation'}
                </h3>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {isArabic ? 'كمية الجبس الزراعي المطلوبة:' : 'Calculated Agricultural Gypsum:'}
                  </div>
                  <div className="text-2xl font-black tabular-mono text-emerald-500 mt-1">
                    {gypsumRequirementTons}{' '}
                    <span className="text-xs font-normal text-slate-400">
                      {isArabic ? 'طن جبس نقي / فدان' : 'tons / feddan'}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {isArabic
                      ? `بناءً على خفض نسبة الصوديوم من ${soilEsp}% إلى ${targetEsp}% في عمق 30 سم.`
                      : `To lower soil ESP from ${soilEsp}% to target ${targetEsp}% in root zone.`}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'معامل ادمصاص الصوديوم (SAR):' : 'Sodium Adsorption Ratio (SAR):'}</span>
                    <span className="tabular-mono font-bold">{sarEstimate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'تصنيف التربة القومي:' : 'Soil Classification:'}</span>
                    <span className="font-semibold text-emerald-500">
                      {soilEc > 4.0 && soilEsp > 15
                        ? (isArabic ? 'ملحية صودية (Saline-Sodic)' : 'Saline-Sodic')
                        : soilEc > 4.0
                        ? (isArabic ? 'ملحية غير صودية (Saline)' : 'Saline')
                        : soilEsp > 15
                        ? (isArabic ? 'قلوية صودية (Sodic)' : 'Sodic')
                        : (isArabic ? 'طبيعية خالية من الأملاح (Normal)' : 'Normal Productive')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isArabic ? 'معدل الصرف والتهوية:' : 'Drainage Rating:'}</span>
                    <span className="font-medium uppercase">{selectedSoilPreset.drainageRate}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{isArabic ? 'النطاق الجغرافي الشائع:' : 'Geographic Region:'}</span>
                    <span className="text-right text-[11px] max-w-[180px] font-medium text-slate-700 dark:text-slate-300">
                      {isArabic ? selectedSoilPreset.egyptianRegionAr : selectedSoilPreset.egyptianRegionEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fertigation NPK Recommendation */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Sprout className="w-4 h-4" />
                  {isArabic ? 'برنامج التسميد NPK الموصى به' : 'Fertigation NPK Prescription'}
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">
                      {isArabic ? 'المحصول المستهدف:' : 'Target Crop:'}
                    </label>
                    <select
                      value={selectedCrop.id}
                      onChange={(e) => {
                        const c = STRATEGIC_CROPS.find((cr) => cr.id === e.target.value);
                        if (c) setSelectedCrop(c);
                      }}
                      className={`w-full p-2 text-xs rounded-lg border ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {STRATEGIC_CROPS.map((cr) => (
                        <option key={cr.id} value={cr.id}>
                          {isArabic ? cr.nameAr : cr.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">
                      {isArabic ? 'الطور الفسيولوجي للنمو:' : 'Phenological Growth Stage:'}
                    </label>
                    <select
                      value={selectedCropStageIdx}
                      onChange={(e) => setSelectedCropStageIdx(parseInt(e.target.value, 10))}
                      className={`w-full p-2 text-xs rounded-lg border ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      {selectedCrop.growthStages.map((stg, idx) => (
                        <option key={stg.stage} value={idx}>
                          {isArabic ? stg.nameAr : stg.nameEn} (Kc = {stg.kc})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* NPK Ratio Badges */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold mb-2 text-slate-600 dark:text-slate-300">
                      {isArabic ? 'جرعات العناصر الكبرى الموصى بها (كجم/فدان/أسبوع):' : 'Recommended Dosing (kg/feddan/week):'}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="text-[10px] text-blue-500 font-bold">N (نيتروجين)</div>
                        <div className="text-lg font-black tabular-mono text-blue-600 dark:text-blue-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.n}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <div className="text-[10px] text-amber-500 font-bold">P₂O₅ (فوسفور)</div>
                        <div className="text-lg font-black tabular-mono text-amber-600 dark:text-amber-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.p}
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-500 font-bold">K₂O (بوتاسيوم)</div>
                        <div className="text-lg font-black tabular-mono text-emerald-600 dark:text-emerald-400">
                          {selectedCrop.growthStages[selectedCropStageIdx].npkRatio.k}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 2: Evapotranspiration & Irrigation Budgeting */}
        {/* ========================================================= */}
        {activeStation === 'irrigation_budgeting' && (
          <div className="space-y-6">
            {/* Realistic Hydraulic Schematic: Center Pivot / Subsurface Drip */}
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {selectedIrrigation.id === 'center_pivot'
                      ? (isArabic ? 'المخطط الهندسي لبيفوت الري المحوري وتوزيع المياه (Center Pivot)' : 'Center Pivot Machine Engineering Schematic & Wetting Pattern')
                      : (isArabic ? 'المخطط الهيدروليكي لشبكة الري بالتنقيط وبصلة البلل (Drip Hydraulics)' : 'Drip Irrigation Hydraulics & Subsurface Wetted Bulb')}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                  {selectedIrrigation.nameAr} • {isArabic ? 'كفاءة الإضافة:' : 'Efficiency:'} {selectedIrrigation.efficiencyPct}%
                </span>
              </div>

              <div className="flex justify-center">
                <IrrigationEngineeringSchematic
                  method={selectedIrrigation}
                  etc={etc}
                  leachingReq={leachingRequirement}
                  isArabic={isArabic}
                  isLight={isLight}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Climate inputs */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Sun className="w-4 h-4" />
                  {isArabic ? 'العوامل المناخية ومحطة الأرصاد' : 'Agro-Meteorological Drivers'}
                </h3>

                {/* Temperature */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'درجة الحرارة العظمى (°م)' : 'Air Temperature (°C)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ambientTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="46"
                    value={ambientTemp}
                    onChange={(e) => setAmbientTemp(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Solar Radiation */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الإشعاع الشمسي (MJ/m²/day)' : 'Solar Radiation (MJ/m²/day)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{solarRadiation}</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="32"
                    value={solarRadiation}
                    onChange={(e) => setSolarRadiation(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Wind Speed */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-blue-400" />
                      {isArabic ? 'سرعة الرياح على ارتفاع 2م (m/s)' : 'Wind Speed @ 2m (m/s)'}
                    </span>
                    <span className="tabular-mono font-bold text-blue-500">{windSpeed.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="8.0"
                    step="0.2"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(parseFloat(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* Humidity */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الرطوبة النسبية (% RH)' : 'Relative Humidity (% RH)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{relativeHumidity} %</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="85"
                    value={relativeHumidity}
                    onChange={(e) => setRelativeHumidity(parseInt(e.target.value, 10))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                {/* Irrigation Water Salinity */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ملوحة مياه الري ECw (dS/m)' : 'Water Salinity ECw (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{irrigationWaterEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="5.0"
                    step="0.1"
                    value={irrigationWaterEc}
                    onChange={(e) => setIrrigationWaterEc(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Crop & System selection */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Sprout className="w-4 h-4" />
                  {isArabic ? 'نظام الري والمحصول' : 'Crop & Irrigation Hardware'}
                </h3>

                <div>
                  <label className="text-xs text-slate-500 block mb-1">
                    {isArabic ? 'نظام الري المطبق:' : 'Applied Irrigation Method:'}
                  </label>
                  <select
                    value={selectedIrrigation.id}
                    onChange={(e) => {
                      const m = IRRIGATION_METHODS.find((ir) => ir.id === e.target.value);
                      if (m) setSelectedIrrigation(m);
                    }}
                    className={`w-full p-2 text-xs rounded-lg border ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                    }`}
                  >
                    {IRRIGATION_METHODS.map((ir) => (
                      <option key={ir.id} value={ir.id}>
                        {isArabic ? ir.nameAr : ir.nameEn} ({ir.efficiencyPct}% كفاءة)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-500 block mb-1">
                    {isArabic ? 'مساحة الحقل / جهاز الري المحوري (فدان):' : 'Field / Pivot Area (Feddans):'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={fieldAreaFeddan}
                    onChange={(e) => setFieldAreaFeddan(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className={`w-full p-2 text-xs rounded-lg border tabular-mono ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800 border-slate-700'
                    }`}
                  />
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'معامل المحصول (Kc):' : 'Crop Coeff (Kc):'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{currentKc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'عمق المجموع الجذري:' : 'Rooting Depth:'}</span>
                    <span className="tabular-mono font-bold">
                      {selectedCrop.growthStages[selectedCropStageIdx].rootDepthM} م
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'كفاءة التطبيق الحقلية:' : 'Application Efficiency:'}</span>
                    <span className="tabular-mono font-bold text-blue-500">
                      {selectedIrrigation.efficiencyPct}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'الاحتياج الغسيلي (LR):' : 'Leaching Fraction (LR):'}</span>
                    <span className="tabular-mono font-bold text-amber-500">
                      {(leachingRequirement * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Water Budgeting Outputs */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Droplets className="w-4 h-4" />
                  {isArabic ? 'المقننات والموازنة المائية اليومية' : 'Calculated Water Budget (FAO-56)'}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                    <div className="text-[10px] text-blue-500 font-semibold">{isArabic ? 'البخر-نتح المرجعي ET₀' : 'Reference ET₀'}</div>
                    <div className="text-xl font-black tabular-mono text-blue-600 dark:text-blue-400 mt-1">
                      {et0} <span className="text-xs font-normal">mm/day</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-[10px] text-emerald-500 font-semibold">{isArabic ? 'البخر-نتح الفعلي ETc' : 'Crop ETc'}</div>
                    <div className="text-xl font-black tabular-mono text-emerald-600 dark:text-emerald-400 mt-1">
                      {etc} <span className="text-xs font-normal">mm/day</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 space-y-3">
                  <div>
                    <div className="text-xs text-slate-500">
                      {isArabic ? 'المقنن المائي الإجمالي للفدان (GIR):' : 'Gross Irrigation Requirement:'}
                    </div>
                    <div className="text-2xl font-black tabular-mono text-emerald-500">
                      {girM3PerFeddanDay}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        {isArabic ? 'م³ / فدان / يوم' : 'm³ / feddan / day'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500">
                      {isArabic ? `إجمالي ضخ الحقل (${fieldAreaFeddan} فدان):` : `Total Pivot Discharge (${fieldAreaFeddan} fed):`}
                    </div>
                    <div className="text-2xl font-black tabular-mono text-blue-500">
                      {totalDailyPivotDemandM3.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        {isArabic ? 'م³ / يوم' : 'm³ / day'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 3: Hydroponics & Controlled Greenhouse */}
        {/* ========================================================= */}
        {activeStation === 'hydroponics_greenhouse' && (
          <div className="space-y-6">
            {/* Realistic Commercial Greenhouse & Hydroponics P&ID Schematic */}
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {isArabic
                      ? 'المخطط الهيكلي للصوبة الزراعية الذكية ونظام الزراعة المائية (Greenhouse P&ID)'
                      : 'Precision Controlled-Environment Greenhouse & Closed-Loop Hydroponics P&ID'}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  {hydroponicSystem === 'nft' ? (isArabic ? 'تقنية الفيلم المغذي (NFT)' : 'NFT Channel') : hydroponicSystem === 'dwc' ? (isArabic ? 'الزراعة العميقة (DWC)' : 'DWC Raft') : (isArabic ? 'الدلو الهولندي (Dutch Bucket)' : 'Dutch Bucket')}
                </span>
              </div>

              <div className="flex justify-center">
                <HydroponicGreenhouseSchematic
                  system={hydroponicSystem}
                  ec={hydroponicEc}
                  ph={hydroponicPh}
                  vpd={ghVpd}
                  temp={ghTemp}
                  co2={ghCo2Ppm}
                  isArabic={isArabic}
                  isLight={isLight}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Climate controls */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Thermometer className="w-4 h-4" />
                  {isArabic ? 'التحكم البيئي داخل الصوبة' : 'Greenhouse Microclimate'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الحرارة الداخلية (°م)' : 'Air Temp (°C)'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ghTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="38"
                    value={ghTemp}
                    onChange={(e) => setGhTemp(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الرطوبة النسبية (% RH)' : 'Relative Humidity (% RH)'}</span>
                    <span className="tabular-mono font-bold text-blue-500">{ghHumidity} %</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="95"
                    value={ghHumidity}
                    onChange={(e) => setGhHumidity(parseInt(e.target.value, 10))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'حقن غاز ثاني أكسيد الكربون CO₂ (ppm)' : 'CO₂ Enrichment (ppm)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{ghCo2Ppm} ppm</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="1400"
                    step="50"
                    value={ghCo2Ppm}
                    onChange={(e) => setGhCo2Ppm(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'الإضاءة التكميلية PAR (μmol/m²/s)' : 'Supplemental PAR LED'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{ghParLight}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="900"
                    step="25"
                    value={ghParLight}
                    onChange={(e) => setGhParLight(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Solution Chemistry */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-blue-500">
                  <Droplets className="w-4 h-4" />
                  {isArabic ? 'محلول التغذية الهيدروبونيك' : 'Nutrient Solution Chemistry'}
                </h3>

                <div className="flex gap-2">
                  {[
                    { id: 'nft' as const, labelAr: 'تقنية الفيلم المغذي (NFT)', labelEn: 'NFT System' },
                    { id: 'dwc' as const, labelAr: 'الزراعة المائية العميقة (DWC)', labelEn: 'DWC Raft' },
                    { id: 'dutch_bucket' as const, labelAr: 'الدلو الهولندي (Dutch Bucket)', labelEn: 'Dutch Bucket' },
                  ].map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => setHydroponicSystem(sys.id)}
                      className={`flex-1 py-1.5 px-2 text-xs rounded-lg border transition-all ${
                        hydroponicSystem === sys.id
                          ? 'bg-blue-600 text-white font-bold border-blue-500'
                          : isLight
                          ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      {isArabic ? sys.labelAr : sys.labelEn}
                    </button>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ملوحة المحلول المغذي EC (dS/m)' : 'Solution EC (dS/m)'}</span>
                    <span className="tabular-mono font-bold text-emerald-500">{hydroponicEc.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="3.5"
                    step="0.1"
                    value={hydroponicEc}
                    onChange={(e) => setHydroponicEc(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1.0 (خضر ورقية)</span>
                    <span>2.2 (طماطم وفلفل)</span>
                    <span>3.5 (ملوحة مرتفعة)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'حموضة المحلول (pH)' : 'Solution pH'}</span>
                    <span className="tabular-mono font-bold text-amber-500">{hydroponicPh.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="4.5"
                    max="8.0"
                    step="0.1"
                    value={hydroponicPh}
                    onChange={(e) => setHydroponicPh(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5.5 (مثالي)</span>
                    <span>6.5 (الحد الأقصى)</span>
                    <span>&gt; 7.0 (ترسيب الحديد والفوسفور)</span>
                  </div>
                </div>
              </div>

              {/* Telemetry and VPD Gauge */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <Activity className="w-4 h-4" />
                  {isArabic ? 'مؤشر عجز ضغط البخار (VPD)' : 'Vapor Pressure Deficit (VPD)'}
                </h3>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-center space-y-2">
                  <div className="text-xs text-slate-500 font-medium">
                    {isArabic ? 'عجز ضغط البخار المحسوب (VPD):' : 'Calculated VPD:'}
                  </div>
                  <div className="text-3xl font-black tabular-mono text-emerald-500">
                    {ghVpd}{' '}
                    <span className="text-sm font-normal text-slate-400">kPa</span>
                  </div>
                  <div className={`text-xs font-bold ${vpdStatus.color}`}>
                    {isArabic ? vpdStatus.labelAr : vpdStatus.labelEn}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {isArabic ? 'ميزة التخصيب بثاني أكسيد الكربون:' : 'CO₂ Injection Benefit:'}
                      </span>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        {isArabic
                          ? `رفع مستوى CO₂ إلى ${ghCo2Ppm} ppm يرفع معدل البناء الضوئي بنسبة ${(
                              ((ghCo2Ppm - 400) / 400) *
                              18
                            ).toFixed(0)}% ويوفر 15% من استهلاك الماء.`
                          : `Enrichment to ${ghCo2Ppm} ppm elevates photosynthesis while increasing water use efficiency.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 4: Egyptian National Mega-Projects */}
        {/* ========================================================= */}
        {activeStation === 'egyptian_megaprojects' && (
          <div className="space-y-6">
            {/* Project Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EGYPTIAN_MEGA_PROJECTS.map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                        : isLight
                        ? 'bg-white border-slate-200 hover:bg-slate-50'
                        : 'bg-[#161B22] border-slate-800 hover:bg-slate-800/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="tabular-mono text-[10px]">
                          {proj.latitude.toFixed(1)}°N, {proj.longitude.toFixed(1)}°E
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 dark:text-slate-100">
                        {isArabic ? proj.nameAr : proj.nameEn}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      {isArabic ? proj.achievementMetricAr : proj.achievementMetricEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Egyptian National Mega-Projects Map Schematic */}
            <div
              className={`p-4 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {isArabic
                      ? 'الخريطة الجغرافية التفاعلية للمشروعات القومية الزراعية ومصادر المياه'
                      : 'Interactive Geographic Map of Egyptian Agricultural Mega-Projects & Water Conveyance'}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 font-mono">
                  {activeProject.nameAr} ({activeProject.latitude.toFixed(1)}°N, {activeProject.longitude.toFixed(1)}°E)
                </span>
              </div>

              <div className="flex justify-center">
                <EgyptianMegaprojectsMapSchematic
                  activeProject={activeProject}
                  allProjects={EGYPTIAN_MEGA_PROJECTS}
                  onSelectProject={setActiveProject}
                  isArabic={isArabic}
                  isLight={isLight}
                />
              </div>
            </div>

            {/* Detailed Project Profile */}
            <div
              className={`p-6 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-emerald-500">
                    {isArabic ? activeProject.nameAr : activeProject.nameEn}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                    <span>
                      {isArabic ? 'المساحة الإجمالية المخططة:' : 'Target Reclamation Area:'}{' '}
                      <strong className="tabular-mono text-slate-700 dark:text-slate-300">
                        {activeProject.targetAreaFeddan.toLocaleString()} {isArabic ? 'فدان' : 'feddans'}
                      </strong>
                    </span>
                    <span>
                      {isArabic ? 'المنزرع حالياً:' : 'Cultivated to date:'}{' '}
                      <strong className="tabular-mono text-emerald-500">
                        {activeProject.currentAreaFeddan.toLocaleString()} {isArabic ? 'فدان' : 'feddans'}
                      </strong>
                    </span>
                  </div>
                </div>

                {activeProject.waterTreatmentCapacityM3PerDay && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold flex items-center gap-2">
                    <Droplets className="w-4 h-4" />
                    <span>
                      {isArabic ? 'طاقة المعالجة الثلاثية:' : 'Tertiary Capacity:'}{' '}
                      <strong className="tabular-mono">
                        {(activeProject.waterTreatmentCapacityM3PerDay / 1000000).toFixed(1)} مليون م³/يوم
                      </strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="my-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{isArabic ? 'نسبة الإنجاز والاستصلاح الفعلي:' : 'Reclamation Progress:'}</span>
                  <span className="tabular-mono font-bold text-emerald-500">
                    {((activeProject.currentAreaFeddan / activeProject.targetAreaFeddan) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                    style={{
                      width: `${(activeProject.currentAreaFeddan / activeProject.targetAreaFeddan) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {isArabic ? 'مصادر المياه ومنظومة الإمداد:' : 'Water Infrastructure & Sources:'}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {(isArabic ? activeProject.waterSourcesAr : activeProject.waterSourcesEn).map((src, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-5 mb-3">
                    {isArabic ? 'أهم المحاصيل الاستراتيجية والتصديرية:' : 'Primary Strategic Crops:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(isArabic ? activeProject.mainCropsAr : activeProject.mainCropsEn).map((cr, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium"
                      >
                        {cr}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {isArabic ? 'أبرز الإنجازات الهندسية والزراعية:' : 'Engineering & Agricultural Milestones:'}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {(isArabic ? activeProject.keyFeaturesAr : activeProject.keyFeaturesEn).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <Zap className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STATION 5: IPM & Pathology Diagnostic Clinic */}
        {/* ========================================================= */}
        {activeStation === 'ipm_pathology' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Problem Selector */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-red-500">
                  <Bug className="w-4 h-4" />
                  {isArabic ? 'سجل الآفات والأمراض الوبائية' : 'Epidemic Pests & Pathology'}
                </h3>

                <div className="space-y-2">
                  {IPM_DIAGNOSTICS_CATALOG.map((diag) => {
                    const isSelected = activeDiagnostic.id === diag.id;
                    return (
                      <button
                        key={diag.id}
                        onClick={() => setActiveDiagnostic(diag)}
                        className={`w-full p-3 rounded-xl border text-right transition-all flex flex-col gap-1 ${
                          isSelected
                            ? 'bg-red-500/15 border-red-500 text-slate-900 dark:text-slate-100 font-bold'
                            : isLight
                            ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                            : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-red-500 text-[11px] font-semibold">
                            {isArabic ? diag.cropNameAr : diag.cropNameEn}
                          </span>
                          <span className="text-[10px] uppercase font-mono text-slate-400">
                            {diag.category}
                          </span>
                        </div>
                        <div className="text-xs">
                          {isArabic ? diag.problemNameAr : diag.problemNameEn}
                        </div>
                        <div className="text-[10px] text-slate-400 italic font-mono">
                          {diag.causalAgent}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Symptoms and Economic Threshold */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-amber-500">
                  <AlertTriangle className="w-4 h-4" />
                  {isArabic ? 'التشخيص والعتبة الاقتصادية للضرر' : 'Symptomology & Economic Threshold'}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                      {isArabic ? 'الأعراض المورفولوجية والتشريحية:' : 'Diagnostic Symptoms:'}
                    </span>
                    <p className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isArabic ? activeDiagnostic.symptomsAr : activeDiagnostic.symptomsEn}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                      {isArabic ? 'الحد الاقتصادي الحرج للتدخل (ET):' : 'Economic Action Threshold:'}
                    </span>
                    <p className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold leading-relaxed">
                      {isArabic ? activeDiagnostic.economicThresholdAr : activeDiagnostic.economicThresholdEn}
                    </p>
                  </div>

                  {/* Interactive Incidence Slider */}
                  <div className="pt-2">
                    <div className="flex justify-between mb-1">
                      <span>{isArabic ? 'نسبة الإصابة المرصودة في الحقل:' : 'Observed Field Incidence:'}</span>
                      <span className="tabular-mono font-bold text-red-500">{observedIncidencePct}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="0.5"
                      value={observedIncidencePct}
                      onChange={(e) => setObservedIncidencePct(parseFloat(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      {isThresholdExceeded ? (
                        <div className="p-2 w-full rounded-lg bg-red-500/15 border border-red-500/30 text-red-500 flex items-center gap-2 font-bold text-xs">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{isArabic ? 'تجاوز العتبة الاقتصادية! تدخل علاجي فوري مطلوب' : 'Threshold Exceeded! Action Mandated'}</span>
                        </div>
                      ) : (
                        <div className="p-2 w-full rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center gap-2 font-bold text-xs">
                          <ShieldCheck className="w-4 h-4 shrink-0" />
                          <span>{isArabic ? 'دون الحد الحرج — تكفي المراقبة والمكافحة الحيوية' : 'Sub-Threshold: Bio-Control Sufficient'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* IPM Control Matrix */}
              <div
                className={`p-4 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="text-sm font-bold flex items-center gap-2 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                  {isArabic ? 'بروتوكول المكافحة المتكاملة (IPM)' : 'IPM Integrated Management Prescription'}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      {isArabic ? '1. المكافحة الحيوية والطبيعية:' : '1. Biological & Bio-Pesticide Control:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.biologicalControlAr : activeDiagnostic.biologicalControlEn}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">
                      {isArabic ? '2. الممارسات الزراعية والوقائية:' : '2. Preventive Cultural Practices:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.preventiveCulturalAr : activeDiagnostic.preventiveCulturalEn}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="font-bold text-red-600 dark:text-red-400 block mb-1">
                      {isArabic ? '3. التدخل الكيميائي المرشد:' : '3. Targeted Chemical Control:'}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">
                      {isArabic ? activeDiagnostic.chemicalControlAr : activeDiagnostic.chemicalControlEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgriculturalTechnologyStudio;
