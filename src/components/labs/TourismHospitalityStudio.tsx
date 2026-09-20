import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import {
  HOTEL_YIELD_PRESETS,
  TOUR_PACKAGE_PRESETS,
  EGYPTIAN_HERITAGE_SITES,
  CARRYING_CAPACITY_MODELS,
  GDS_FLIGHT_INVENTORY,
  type HotelYieldPreset,
  type TourPackagePreset,
  type EgyptianHeritageSite,
  type CarryingCapacityModel,
  type GdsFlightEntry,
} from '../../data/tourismLab/tourismLabData';
import {
  Hotel,
  Compass,
  Landmark,
  ShieldAlert,
  Plane,
  Maximize2,
  Minimize2,
  Download,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialStation?: TourismStation;
}

export type TourismStation =
  | 'hotel_yield'
  | 'tour_costing'
  | 'heritage_explorer'
  | 'carrying_capacity'
  | 'gds_terminal';

// ============================================================================
// 1. HOTEL YIELD MANAGEMENT & USALI SCHEMATIC
// ============================================================================
interface HotelYieldMatrixSchematicProps {
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  adrEgp: number;
  revparEgp: number;
  trevparEgp: number;
  gopparEgp: number;
  operatingMarginPct: number;
  selectedPreset: HotelYieldPreset;
  isLight?: boolean;
  isArabic?: boolean;
}

const HotelYieldMatrixSchematic: React.FC<HotelYieldMatrixSchematicProps> = ({
  availableRooms,
  occupiedRooms,
  adrEgp,
  revparEgp,
  trevparEgp,
  gopparEgp,
  operatingMarginPct,
  selectedPreset,
  isLight = false,
  isArabic = false,
}) => {
  const safeAvailable = Math.max(1, availableRooms);
  const occRatio = Math.min(1, Math.max(0, occupiedRooms / safeAvailable));
  const occPct = (occRatio * 100).toFixed(1);

  // 6 floors x 8 bays = 48 room matrix
  const totalBays = 48;
  const occupiedInSample = Math.min(totalBays, Math.round(occRatio * totalBays));

  // Yield Curve coordinates: R(P) = P * Q(P)
  // Let Q(P) = safeAvailable * (1 - 0.45 * (P / 15000))
  // Current operating point
  const normAdr = Math.min(1, Math.max(0, (adrEgp - 800) / (15000 - 800)));
  const curveStartX = 510;
  const curveWidth = 360;
  const curveBaselineY = 385;
  const curveHeight = 135;

  const optAdrNorm = 0.52; // Optimal price inflection
  const optX = curveStartX + optAdrNorm * curveWidth;
  const optY = curveBaselineY - curveHeight;

  const currentX = curveStartX + normAdr * curveWidth;
  // Parabolic shape: y = 4 * h * x * (1 - x)
  const currentY = curveBaselineY - Math.sin(normAdr * Math.PI) * curveHeight;

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
            {isArabic
              ? 'مخطط الواجهة الفندقية، مصفوفة إشغال الغرف، ومنحنى مرونة العائد (USALI)'
              : 'Hotel Architecture, Inventory Heatmap & USALI Yield Optimization Curve'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الفندق:' : 'Property:'} <strong className="text-slate-200">{selectedPreset.nameEn}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            RevPAR: {revparEgp.toFixed(0)} EGP
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Hotel Yield Matrix and Performance Schematic"
        >
          <defs>
            <linearGradient id="hotelSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#E0F2FE' : '#0B111E'} />
              <stop offset="100%" stopColor={isLight ? '#F0F9FF' : '#141D2D'} />
            </linearGradient>
            <linearGradient id="hotelFacadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#F8FAFC' : '#1E293B'} />
              <stop offset="100%" stopColor={isLight ? '#E2E8F0' : '#0F172A'} />
            </linearGradient>
            <linearGradient id="roomOccupiedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="yieldCurveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
            </linearGradient>
            <filter id="hotelGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Hotel Facade & Room Heatmap */}
          <rect
            x="20"
            y="20"
            width="450"
            height="400"
            rx="14"
            fill="url(#hotelSkyGrad)"
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          {/* Sky elements: Stars / Crescent Moon */}
          {!isLight && (
            <g opacity="0.6">
              <circle cx="65" cy="45" r="1" fill="#FFF" />
              <circle cx="120" cy="38" r="1.5" fill="#FFF" />
              <circle cx="210" cy="50" r="1" fill="#FFF" />
              <circle cx="340" cy="40" r="1.5" fill="#FFF" />
              <circle cx="410" cy="55" r="1" fill="#FFF" />
              {/* Golden Crescent Moon */}
              <path
                d="M 435,42 A 10,10 0 1,0 445,30 A 8,8 0 1,1 435,42 Z"
                fill="#FDE047"
                opacity="0.85"
              />
            </g>
          )}

          {/* Rooftop Lounge & Infinity Pool */}
          <rect
            x="50"
            y="55"
            width="390"
            height="22"
            rx="4"
            fill={isLight ? '#94A3B8' : '#1E293B'}
            stroke={isLight ? '#64748B' : '#475569'}
            strokeWidth="1"
          />
          {/* Infinity pool water strip */}
          <rect x="70" y="60" width="140" height="12" rx="3" fill="#0284C7" opacity="0.8" />
          <path d="M 75,66 Q 90,63 105,66 T 135,66 T 165,66 T 195,66" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <text x="140" y="69" textAnchor="middle" fill="#E0F2FE" fontSize="8" fontWeight="bold">
            ROOFTOP POOL
          </text>
          {/* Lounge Umbrellas */}
          <path d="M 230,68 L 240,58 L 250,68 Z" fill="#F59E0B" />
          <line x1="240" y1="58" x2="240" y2="72" stroke="#CBD5E1" strokeWidth="1" />
          <path d="M 265,68 L 275,58 L 285,68 Z" fill="#F59E0B" />
          <line x1="275" y1="58" x2="275" y2="72" stroke="#CBD5E1" strokeWidth="1" />
          <text x="360" y="69" fill={isLight ? '#334155' : '#94A3B8'} fontSize="9" fontWeight="bold" fontFamily="monospace">
            {isArabic ? 'قصر النيل ديلوكس ٥★' : 'GRAND NILE PALACE ★★★★★'}
          </text>

          {/* Hotel Building Main Mass */}
          <rect
            x="50"
            y="77"
            width="390"
            height="260"
            rx="2"
            fill="url(#hotelFacadeGrad)"
            stroke={isLight ? '#94A3B8' : '#334155'}
            strokeWidth="1.5"
          />

          {/* 6 Floors x 8 Bays Room Grid */}
          {Array.from({ length: 6 }).map((_, fIdx) => {
            const floorNum = 6 - fIdx;
            const floorY = 88 + fIdx * 40;
            return (
              <g key={`floor-${floorNum}`}>
                {/* Floor band label */}
                <rect x="52" y={floorY} width="22" height="34" rx="2" fill={isLight ? '#E2E8F0' : '#0F172A'} />
                <text
                  x="63"
                  y={floorY + 21}
                  textAnchor="middle"
                  fill={isLight ? '#475569' : '#94A3B8'}
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  L{floorNum}
                </text>

                {/* 8 Room Bays */}
                {Array.from({ length: 8 }).map((_, bIdx) => {
                  const bayNum = bIdx + 1;
                  const roomIndex = fIdx * 8 + bIdx;
                  const isOccupied = roomIndex < occupiedInSample;
                  const roomX = 80 + bIdx * 40;

                  return (
                    <g key={`room-${floorNum}-${bayNum}`}>
                      {/* Window frame */}
                      <rect
                        x={roomX}
                        y={floorY + 2}
                        width="34"
                        height="30"
                        rx="3"
                        fill={isOccupied ? 'url(#roomOccupiedGrad)' : isLight ? '#F1F5F9' : '#0B1017'}
                        stroke={isOccupied ? '#F59E0B' : isLight ? '#CBD5E1' : '#1E293B'}
                        strokeWidth="1"
                        filter={isOccupied ? 'url(#hotelGlow)' : undefined}
                      />

                      {/* Window details: curtains/light or dark shade */}
                      {isOccupied ? (
                        <>
                          {/* Warm interior curtains */}
                          <path
                            d={`M ${roomX + 2},${floorY + 3} Q ${roomX + 7},${floorY + 14} ${roomX + 3},${floorY + 31}`}
                            fill="none"
                            stroke="#78350F"
                            strokeWidth="1.5"
                          />
                          <path
                            d={`M ${roomX + 32},${floorY + 3} Q ${roomX + 27},${floorY + 14} ${roomX + 31},${floorY + 31}`}
                            fill="none"
                            stroke="#78350F"
                            strokeWidth="1.5"
                          />
                          {/* Balcony railing */}
                          <line
                            x1={roomX + 2}
                            y1={floorY + 28}
                            x2={roomX + 32}
                            y2={floorY + 28}
                            stroke="#451A03"
                            strokeWidth="1.5"
                          />
                          {/* Room number tag */}
                          <text
                            x={roomX + 17}
                            y={floorY + 18}
                            textAnchor="middle"
                            fill="#451A03"
                            fontSize="8"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {floorNum}0{bayNum}
                          </text>
                        </>
                      ) : (
                        <>
                          {/* Vacant room dark reflection */}
                          <line
                            x1={roomX + 5}
                            y1={floorY + 7}
                            x2={roomX + 28}
                            y2={floorY + 25}
                            stroke={isLight ? '#CBD5E1' : '#1E293B'}
                            strokeWidth="1"
                          />
                          <text
                            x={roomX + 17}
                            y={floorY + 18}
                            textAnchor="middle"
                            fill={isLight ? '#94A3B8' : '#475569'}
                            fontSize="7"
                            fontFamily="monospace"
                          >
                            VAC
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Panoramic Glass Elevator Shaft on Right */}
          <rect x="408" y="80" width="28" height="254" fill={isLight ? '#CBD5E1' : '#0F172A'} stroke="#64748B" strokeWidth="1" />
          <line x1="422" y1="80" x2="422" y2="334" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,3" />
          {/* Elevator cab */}
          <rect
            x="410"
            y={140 + (1 - occRatio) * 120}
            width="24"
            height="26"
            rx="3"
            fill="#38BDF8"
            opacity="0.85"
            filter="url(#hotelGlow)"
          />
          <text
            x="422"
            y={156 + (1 - occRatio) * 120}
            textAnchor="middle"
            fill="#082F49"
            fontSize="8"
            fontWeight="bold"
          >
            LIFT
          </text>

          {/* Ground Floor Grand Entrance Lobby */}
          <rect
            x="50"
            y="337"
            width="390"
            height="55"
            fill={isLight ? '#F1F5F9' : '#161E2E'}
            stroke={isLight ? '#94A3B8' : '#334155'}
            strokeWidth="1.5"
          />
          {/* Grand Canopy */}
          <polygon
            points="180,337 310,337 325,355 165,355"
            fill="#B45309"
            stroke="#F59E0B"
            strokeWidth="1"
          />
          <text x="245" y="350" textAnchor="middle" fill="#FEF3C7" fontSize="9" fontWeight="bold">
            PORTE-COCHÈRE ENTRANCE
          </text>
          {/* Glass Revolving Door */}
          <circle cx="245" cy="372" r="14" fill={isLight ? '#FFF' : '#1E293B'} stroke="#D97706" strokeWidth="1.5" />
          <line x1="245" y1="358" x2="245" y2="386" stroke="#D97706" strokeWidth="1.5" />
          <line x1="231" y1="372" x2="259" y2="372" stroke="#D97706" strokeWidth="1.5" />
          {/* Palm Trees & Valet Sedan */}
          <path d="M 85,392 C 88,370 95,360 100,352" stroke="#78350F" strokeWidth="3" fill="none" />
          <circle cx="102" cy="350" r="12" fill="#15803D" opacity="0.8" />
          <path d="M 395,392 C 392,370 385,360 380,352" stroke="#78350F" strokeWidth="3" fill="none" />
          <circle cx="378" cy="350" r="12" fill="#15803D" opacity="0.8" />
          {/* Valet Luxury Car silhouette */}
          <rect x="120" y="375" width="34" height="12" rx="3" fill="#0F172A" />
          <circle cx="127" cy="388" r="4" fill="#334155" />
          <circle cx="147" cy="388" r="4" fill="#334155" />

          {/* Occupancy Indicator Banner */}
          <rect x="60" y="400" width="370" height="16" rx="4" fill={isLight ? '#E2E8F0' : '#1E293B'} />
          <text x="245" y="412" textAnchor="middle" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="9" fontWeight="bold">
            {isArabic
              ? `إشغال العينة: ${occupiedInSample} من ${totalBays} غرفة (${occPct}%) | الإشغال الفعلي: ${occupiedRooms}/${availableRooms}`
              : `Sample Matrix: ${occupiedInSample}/${totalBays} Rooms Active (${occPct}%) | Actual: ${occupiedRooms}/${availableRooms}`}
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: USALI Decomposition & Quadratic Yield Curve */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="490"
            y="20"
            width="410"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#131922'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          {/* Section 1: USALI RevPAR / TRevPAR / GOPPAR Value Decomposition */}
          <text x="510" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'تحليل الأداء الفندقي وفق معيار (USALI Waterfall)' : 'USALI Lodging Performance Metric Decomposition'}
          </text>

          {/* 3 Metric Pillar Badges */}
          {/* RevPAR */}
          <rect x="510" y="58" width="115" height="58" rx="8" fill={isLight ? '#EFF6FF' : '#1E293B'} stroke="#38BDF8" strokeWidth="1.5" />
          <text x="520" y="74" fill="#0284C7" fontSize="9" fontWeight="bold">
            RevPAR (الغرفة المتاحة)
          </text>
          <text x="520" y="94" fill={isLight ? '#0369A1' : '#38BDF8'} fontSize="16" fontWeight="bold" fontFamily="monospace">
            {revparEgp.toFixed(0)} <tspan fontSize="10">EGP</tspan>
          </text>
          <text x="520" y="108" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            ADR × Occupancy ({occPct}%)
          </text>

          {/* TRevPAR */}
          <rect x="635" y="58" width="120" height="58" rx="8" fill={isLight ? '#FAF5FF' : '#1E293B'} stroke="#A855F7" strokeWidth="1.5" />
          <text x="645" y="74" fill="#9333EA" fontSize="9" fontWeight="bold">
            TRevPAR (الإجمالي)
          </text>
          <text x="645" y="94" fill={isLight ? '#7E22CE' : '#C084FC'} fontSize="16" fontWeight="bold" fontFamily="monospace">
            {trevparEgp.toFixed(0)} <tspan fontSize="10">EGP</tspan>
          </text>
          <text x="645" y="108" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            Rooms + F&B + Other Rev
          </text>

          {/* GOPPAR */}
          <rect x="765" y="58" width="120" height="58" rx="8" fill={isLight ? '#F0FDF4' : '#1E293B'} stroke="#10B981" strokeWidth="1.5" />
          <text x="775" y="74" fill="#059669" fontSize="9" fontWeight="bold">
            GOPPAR (هامش الربح)
          </text>
          <text x="775" y="94" fill={isLight ? '#047857' : '#34D399'} fontSize="16" fontWeight="bold" fontFamily="monospace">
            {gopparEgp.toFixed(0)} <tspan fontSize="10">EGP</tspan>
          </text>
          <text x="775" y="108" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            Margin: {operatingMarginPct.toFixed(1)}%
          </text>

          {/* Section 2: Quadratic Demand Yield Curve & Price Elasticity */}
          <line x1="510" y1="130" x2="880" y2="130" stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeWidth="1" />
          <text x="510" y="150" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'منحنى العائد الأمثل ومرونة الطلب السعرية' : 'Dynamic Yield Curve: Revenue vs ADR Price Elasticity'}
          </text>
          <text x="510" y="165" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            {isArabic
              ? 'العلاقة التربيعية بين السعر اليومي وإجمالي الإيراد: R(P) = P × Q(P)'
              : 'Quadratic relationship: Total Revenue R(P) = P × (Q₀ - b·P)'}
          </text>

          {/* Yield Chart Canvas */}
          <rect
            x="510"
            y="180"
            width="375"
            height="215"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Grid lines */}
          <line x1="510" y1="230" x2="885" y2="230" stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />
          <line x1="510" y1="280" x2="885" y2="280" stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />
          <line x1="510" y1="330" x2="885" y2="330" stroke={isLight ? '#E2E8F0' : '#1E293B'} strokeDasharray="3,3" />

          {/* Parabolic Yield Curve Area */}
          <path
            d={`M ${curveStartX},${curveBaselineY} Q ${optX},${optY - 15} ${curveStartX + curveWidth},${curveBaselineY} Z`}
            fill="url(#yieldCurveGrad)"
          />
          {/* Main Yield Parabola Stroke */}
          <path
            d={`M ${curveStartX},${curveBaselineY} Q ${optX},${optY - 15} ${curveStartX + curveWidth},${curveBaselineY}`}
            fill="none"
            stroke="#0284C7"
            strokeWidth="3"
          />

          {/* Inelastic Zone vs Elastic Zone Shading */}
          <text x="550" y="200" fill="#10B981" fontSize="8" fontWeight="bold">
            {isArabic ? 'منطقة غير مرنة (زيادة السعر ترفع الإيراد)' : 'INELASTIC (|ε| < 1): Price hike ↑ Rev'}
          </text>
          <text x="730" y="200" fill="#EF4444" fontSize="8" fontWeight="bold">
            {isArabic ? 'منطقة مرنة (زيادة السعر تخفض الإيراد)' : 'ELASTIC (|ε| > 1): Price hike ↓ Rev'}
          </text>

          {/* Optimal Yield Peak Beacon */}
          <circle cx={optX} cy={optY} r="5" fill="#F59E0B" filter="url(#hotelGlow)" />
          <polygon
            points={`${optX - 5},${optY - 7} ${optX + 5},${optY - 7} ${optX},${optY - 14}`}
            fill="#F59E0B"
          />
          <text x={optX} y={optY - 18} textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="bold">
            {isArabic ? 'نقطة العائد القصوى P*' : 'Max Yield Peak P*'}
          </text>
          <line x1={optX} y1={optY} x2={optX} y2={curveBaselineY} stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />

          {/* Active Operating Coordinate Beacon */}
          <circle cx={currentX} cy={currentY} r="7" fill="#38BDF8" filter="url(#hotelGlow)" />
          <circle cx={currentX} cy={currentY} r="3" fill="#FFFFFF" />
          <line x1={currentX} y1={currentY} x2={currentX} y2={curveBaselineY} stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Coordinate callout box */}
          <rect
            x={Math.min(760, Math.max(520, currentX - 55))}
            y={Math.max(210, currentY - 32)}
            width="110"
            height="24"
            rx="4"
            fill="#0F172A"
            stroke="#38BDF8"
            strokeWidth="1"
          />
          <text
            x={Math.min(760, Math.max(520, currentX - 55)) + 55}
            y={Math.max(210, currentY - 32) + 15}
            textAnchor="middle"
            fill="#E0F2FE"
            fontSize="8.5"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ADR: {adrEgp} EGP
          </text>

          {/* X Axis labels */}
          <text x={curveStartX} y={curveBaselineY + 12} fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8" fontFamily="monospace">
            800 EGP
          </text>
          <text x={optX} y={curveBaselineY + 12} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="monospace">
            P* ~ 7,500 EGP
          </text>
          <text x={curveStartX + curveWidth} y={curveBaselineY + 12} textAnchor="end" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8" fontFamily="monospace">
            15,000 EGP
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 2. TOUR COSTING & CVP BREAK-EVEN SCHEMATIC
// ============================================================================
interface TourBreakEvenCostingSchematicProps {
  paxCount: number;
  totalFixedCosts: number;
  variableCostPerPax: number;
  fixedCostPerPax: number;
  netCostPerPax: number;
  sellingPricePerPax: number;
  breakEvenPax: number;
  agencyNetProfit: number;
  agencyMarkupPct: number;
  selectedPreset: TourPackagePreset;
  isLight?: boolean;
  isArabic?: boolean;
}

const TourBreakEvenCostingSchematic: React.FC<TourBreakEvenCostingSchematicProps> = ({
  paxCount,
  totalFixedCosts,
  variableCostPerPax,
  sellingPricePerPax,
  breakEvenPax,
  agencyNetProfit,
  agencyMarkupPct,
  selectedPreset,
  isLight = false,
  isArabic = false,
}) => {
  const safePax = Math.max(1, paxCount);
  const busCapacity = 50;

  // CVP Chart scaling
  // X: 0 to 50 pax
  // Y: 0 to max EGP (approx 600,000 EGP)
  const chartStartX = 510;
  const chartWidth = 370;
  const chartBaselineY = 385;
  const chartHeight = 205;

  const maxRevenueEst = Math.max(
    totalFixedCosts * 1.5,
    sellingPricePerPax * busCapacity * 1.1,
    (totalFixedCosts + variableCostPerPax * busCapacity) * 1.1
  );

  const scaleX = (p: number) => chartStartX + (p / busCapacity) * chartWidth;
  const scaleY = (val: number) => chartBaselineY - (Math.min(maxRevenueEst, val) / maxRevenueEst) * chartHeight;

  const fixedY = scaleY(totalFixedCosts);
  const bepX = scaleX(Math.min(busCapacity, breakEvenPax));
  const bepY = scaleY(sellingPricePerPax * breakEvenPax);

  const currentPaxX = scaleX(Math.min(busCapacity, safePax));
  const currentCostY = scaleY(totalFixedCosts + variableCostPerPax * safePax);
  const currentRevY = scaleY(sellingPricePerPax * safePax);

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500">
            {isArabic
              ? 'مخطط مقاعد الأتوبيس السياحي وتحليل نقطة التعادل (Cost-Volume-Profit CVP)'
              : 'VIP Tour Coach Manifest Deck & Cost-Volume-Profit (CVP) Break-Even Analysis'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'البرنامج:' : 'Package:'} <strong className="text-slate-200">{selectedPreset.nameEn}</strong>
          </span>
          <span
            className={`px-2 py-0.5 rounded border ${
              agencyNetProfit >= 0
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}
          >
            {isArabic ? 'صافي الربح:' : 'Net Profit:'} {agencyNetProfit.toFixed(0)} EGP
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 430"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Tour Coach Manifest and Break-Even Chart"
        >
          <defs>
            <linearGradient id="coachBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#F1F5F9' : '#1A2332'} />
              <stop offset="100%" stopColor={isLight ? '#E2E8F0' : '#0D141F'} />
            </linearGradient>
            <linearGradient id="profitZoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="lossZoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.03" />
            </linearGradient>
            <filter id="tourGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: VIP Tour Coach Manifest (50 Seats) */}
          <rect
            x="20"
            y="20"
            width="450"
            height="390"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          {/* Coach Title */}
          <text x="40" y="42" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'مخطط مقاعد حافلة السياحة الفاخرة (٥٠ راكباً)' : 'VIP Neoplan Touring Coach – 50 Passenger Manifest'}
          </text>
          <text x="40" y="55" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            {isArabic
              ? `نقطة التعادل = ${breakEvenPax} مقاعد لتغطية التكاليف الثابتة (${totalFixedCosts.toLocaleString()} ج.م)`
              : `Break-even threshold = ${breakEvenPax} seats cover fixed costs (${totalFixedCosts.toLocaleString()} EGP)`}
          </text>

          {/* Coach Chassis Boundary */}
          <rect
            x="40"
            y="65"
            width="410"
            height="300"
            rx="20"
            fill="url(#coachBodyGrad)"
            stroke={isLight ? '#94A3B8' : '#334155'}
            strokeWidth="2"
          />

          {/* Front Windshield & Driver Cabin */}
          <path
            d="M 60,67 L 430,67 C 440,67 445,75 440,90 L 430,95 L 60,95 C 50,85 52,70 60,67 Z"
            fill={isLight ? '#BAE6FD' : '#0369A1'}
            opacity="0.8"
          />
          {/* Driver Steering Wheel */}
          <circle cx="85" cy="81" r="9" fill="none" stroke="#F8FAFC" strokeWidth="2" />
          <circle cx="85" cy="81" r="3" fill="#F8FAFC" />
          <text x="102" y="84" fill="#E0F2FE" fontSize="8" fontWeight="bold">
            DRIVER
          </text>
          {/* Tour Guide Station with Microphone */}
          <rect x="365" y="73" width="30" height="16" rx="3" fill="#D97706" />
          <text x="380" y="84" textAnchor="middle" fill="#FFF" fontSize="7" fontWeight="bold">
            GUIDE
          </text>

          {/* Central Aisle */}
          <line x1="245" y1="102" x2="245" y2="340" stroke={isLight ? '#CBD5E1' : '#1E293B'} strokeWidth="16" />
          <line x1="245" y1="102" x2="245" y2="340" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6,4" />

          {/* 12 Rows of 4 Seats (48 Seats) + 2 Rear Seats = 50 Seats */}
          {Array.from({ length: 12 }).map((_, rIdx) => {
            const rowY = 104 + rIdx * 19;
            const seat1 = rIdx * 4 + 1;
            const seat2 = rIdx * 4 + 2;
            const seat3 = rIdx * 4 + 3;
            const seat4 = rIdx * 4 + 4;

            const renderSeat = (num: number, x: number) => {
              const isOccupied = num <= safePax;
              const isCoveredFixed = num <= breakEvenPax && isOccupied;
              const isNetProfitSeat = num > breakEvenPax && isOccupied;
              const isShortfallDeficit = safePax < breakEvenPax && num > safePax && num <= breakEvenPax;

              let seatFill = isLight ? '#E2E8F0' : '#1E293B';
              let seatStroke = isLight ? '#CBD5E1' : '#334155';
              let textColor = isLight ? '#64748B' : '#94A3B8';

              if (isNetProfitSeat) {
                seatFill = '#10B981';
                seatStroke = '#059669';
                textColor = '#FFFFFF';
              } else if (isCoveredFixed) {
                seatFill = '#0284C7';
                seatStroke = '#0369A1';
                textColor = '#FFFFFF';
              } else if (isShortfallDeficit) {
                seatFill = '#F43F5E';
                seatStroke = '#E11D48';
                textColor = '#FFFFFF';
              }

              return (
                <g key={`seat-${num}`}>
                  <rect
                    x={x}
                    y={rowY}
                    width="38"
                    height="16"
                    rx="3"
                    fill={seatFill}
                    stroke={seatStroke}
                    strokeWidth="1"
                    filter={isNetProfitSeat ? 'url(#tourGlow)' : undefined}
                  />
                  {/* Headrest */}
                  <rect x={x + 3} y={rowY + 1} width="32" height="4" rx="1.5" fill="rgba(255,255,255,0.25)" />
                  <text
                    x={x + 19}
                    y={rowY + 12}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    #{num}
                  </text>
                </g>
              );
            };

            return (
              <g key={`row-${rIdx}`}>
                {/* Left pair (A, B) */}
                {renderSeat(seat1, 60)}
                {renderSeat(seat2, 102)}
                {/* Right pair (C, D) */}
                {renderSeat(seat3, 345)}
                {renderSeat(seat4, 387)}
              </g>
            );
          })}

          {/* Rear Row Seats (49, 50) */}
          <g>
            {(() => {
              const renderRearSeat = (num: number, x: number) => {
                const isOccupied = num <= safePax;
                const isCoveredFixed = num <= breakEvenPax && isOccupied;
                const isNetProfitSeat = num > breakEvenPax && isOccupied;
                const isShortfallDeficit = safePax < breakEvenPax && num > safePax && num <= breakEvenPax;

                let seatFill = isLight ? '#E2E8F0' : '#1E293B';
                let seatStroke = isLight ? '#CBD5E1' : '#334155';
                let textColor = isLight ? '#64748B' : '#94A3B8';

                if (isNetProfitSeat) {
                  seatFill = '#10B981';
                  seatStroke = '#059669';
                  textColor = '#FFFFFF';
                } else if (isCoveredFixed) {
                  seatFill = '#0284C7';
                  seatStroke = '#0369A1';
                  textColor = '#FFFFFF';
                } else if (isShortfallDeficit) {
                  seatFill = '#F43F5E';
                  seatStroke = '#E11D48';
                  textColor = '#FFFFFF';
                }

                return (
                  <g key={`rear-seat-${num}`}>
                    <rect x={x} y={335} width="38" height="16" rx="3" fill={seatFill} stroke={seatStroke} strokeWidth="1" />
                    <text x={x + 19} y={346} textAnchor="middle" fill={textColor} fontSize="7" fontFamily="monospace" fontWeight="bold">
                      #{num}
                    </text>
                  </g>
                );
              };
              return (
                <>
                  {renderRearSeat(49, 185)}
                  {renderRearSeat(50, 265)}
                </>
              );
            })()}
          </g>

          {/* Manifest Color Legend Bar */}
          <rect x="40" y="375" width="410" height="24" rx="4" fill={isLight ? '#F1F5F9' : '#131922'} />
          <circle cx="55" cy="387" r="4" fill="#0284C7" />
          <text x="64" y="390" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            {isArabic ? 'تغطية التكاليف الثابتة' : 'Fixed Cost'}
          </text>
          <circle cx="160" cy="387" r="4" fill="#10B981" />
          <text x="169" y="390" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            {isArabic ? 'مقاعد الربح الصافي' : 'Net Profit'}
          </text>
          <circle cx="255" cy="387" r="4" fill="#F43F5E" />
          <text x="264" y="390" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            {isArabic ? 'عجز التعادل' : 'Deficit Shortfall'}
          </text>
          <circle cx="350" cy="387" r="4" fill={isLight ? '#CBD5E1' : '#334155'} />
          <text x="359" y="390" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            {isArabic ? 'مقعد شاغر' : 'Empty'}
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Cost-Volume-Profit (CVP) Chart */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="490"
            y="20"
            width="410"
            height="390"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="510" y="42" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'منحنى تحليل التعادل وهامش الأمان (CVP Chart)' : 'Cost-Volume-Profit Break-Even & Safety Margin'}
          </text>
          <text x="510" y="55" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            BEP = FC / (P - VC) = {breakEvenPax} Pax | Markup = {agencyMarkupPct}%
          </text>

          {/* Chart Canvas Area */}
          <rect
            x="510"
            y="70"
            width="370"
            height="325"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Loss Zone (Triangle between TR and TC for q < BEP) */}
          <polygon
            points={`${chartStartX},${scaleY(0)} ${chartStartX},${fixedY} ${bepX},${bepY}`}
            fill="url(#lossZoneGrad)"
          />

          {/* Profit Zone (Area between TR and TC for q > BEP) */}
          <polygon
            points={`${bepX},${bepY} ${chartStartX + chartWidth},${scaleY(sellingPricePerPax * busCapacity)} ${chartStartX + chartWidth},${scaleY(totalFixedCosts + variableCostPerPax * busCapacity)}`}
            fill="url(#profitZoneGrad)"
          />

          {/* Horizontal Line: Fixed Costs */}
          <line
            x1={chartStartX}
            y1={fixedY}
            x2={chartStartX + chartWidth}
            y2={fixedY}
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x={chartStartX + 5} y={fixedY - 5} fill="#94A3B8" fontSize="8" fontWeight="bold">
            FC = {totalFixedCosts.toLocaleString()} EGP
          </text>

          {/* Line: Total Costs TC = FC + VC * q */}
          <line
            x1={chartStartX}
            y1={fixedY}
            x2={chartStartX + chartWidth}
            y2={scaleY(totalFixedCosts + variableCostPerPax * busCapacity)}
            stroke="#EF4444"
            strokeWidth="2.5"
          />
          <text
            x={chartStartX + chartWidth - 5}
            y={scaleY(totalFixedCosts + variableCostPerPax * busCapacity) - 6}
            textAnchor="end"
            fill="#EF4444"
            fontSize="8.5"
            fontWeight="bold"
          >
            TC = FC + (VC × Pax)
          </text>

          {/* Line: Total Revenue TR = P * q */}
          <line
            x1={chartStartX}
            y1={chartBaselineY}
            x2={chartStartX + chartWidth}
            y2={scaleY(sellingPricePerPax * busCapacity)}
            stroke="#10B981"
            strokeWidth="2.5"
          />
          <text
            x={chartStartX + chartWidth - 5}
            y={scaleY(sellingPricePerPax * busCapacity) - 6}
            textAnchor="end"
            fill="#10B981"
            fontSize="8.5"
            fontWeight="bold"
          >
            TR = Selling Price × Pax
          </text>

          {/* Break-Even Point Intersection Beacon */}
          <circle cx={bepX} cy={bepY} r="6" fill="#F59E0B" filter="url(#tourGlow)" />
          <circle cx={bepX} cy={bepY} r="2.5" fill="#FFF" />
          <line x1={bepX} y1={bepY} x2={bepX} y2={chartBaselineY} stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,3" />
          <rect x={bepX - 40} y={bepY - 26} width="80" height="20" rx="3" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
          <text x={bepX} y={bepY - 13} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">
            BEP: {breakEvenPax} Pax
          </text>

          {/* Current Pax Vertical Indicator Line */}
          <line
            x1={currentPaxX}
            y1={Math.min(currentCostY, currentRevY) - 10}
            x2={currentPaxX}
            y2={chartBaselineY}
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <circle cx={currentPaxX} cy={currentRevY} r="5" fill="#38BDF8" />
          <circle cx={currentPaxX} cy={currentCostY} r="5" fill="#EF4444" />

          {/* Profit / Deficit Callout Banner at Current Pax */}
          <rect
            x={Math.min(740, Math.max(520, currentPaxX - 55))}
            y={Math.min(currentCostY, currentRevY) - 36}
            width="120"
            height="26"
            rx="4"
            fill={agencyNetProfit >= 0 ? '#064E3B' : '#881337'}
            stroke={agencyNetProfit >= 0 ? '#10B981' : '#F43F5E'}
            strokeWidth="1.5"
          />
          <text
            x={Math.min(740, Math.max(520, currentPaxX - 55)) + 60}
            y={Math.min(currentCostY, currentRevY) - 19}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8.5"
            fontWeight="bold"
          >
            {safePax} Pax: {agencyNetProfit >= 0 ? `+${agencyNetProfit.toFixed(0)} EGP` : `${agencyNetProfit.toFixed(0)} EGP`}
          </text>

          {/* X Axis Coordinates */}
          <line x1={chartStartX} y1={chartBaselineY} x2={chartStartX + chartWidth} y2={chartBaselineY} stroke="#64748B" strokeWidth="1" />
          <text x={chartStartX} y={chartBaselineY + 12} fill="#64748B" fontSize="8" fontFamily="monospace">
            0
          </text>
          <text x={bepX} y={chartBaselineY + 12} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="monospace">
            {breakEvenPax}
          </text>
          <text x={currentPaxX} y={chartBaselineY + 12} textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">
            {safePax}
          </text>
          <text x={chartStartX + chartWidth} y={chartBaselineY + 12} textAnchor="end" fill="#64748B" fontSize="8" fontFamily="monospace">
            50 Pax
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 3. UNESCO HERITAGE CORRIDOR & MONUMENT CUTAWAY SCHEMATIC
// ============================================================================
interface EgyptianHeritageCorridorSchematicProps {
  selectedSite: EgyptianHeritageSite;
  activeHighlightIndex: number;
  isLight?: boolean;
  isArabic?: boolean;
  onSelectSite?: (site: EgyptianHeritageSite) => void;
}

const EgyptianHeritageCorridorSchematic: React.FC<EgyptianHeritageCorridorSchematicProps> = ({
  selectedSite,
  activeHighlightIndex,
  isLight = false,
  isArabic = false,
  onSelectSite,
}) => {
  // Heritage Site Map Coordinates:
  // Giza / Memphis: (x: 275, y: 155)
  // Historic Cairo: (x: 290, y: 150)
  // Ancient Thebes: (x: 325, y: 285)
  // Nubian Abu Simbel: (x: 295, y: 395)
  const siteCoordinates: Record<string, { x: number; y: number }> = {
    giza_memphis: { x: 275, y: 155 },
    historic_cairo: { x: 290, y: 150 },
    ancient_thebes: { x: 325, y: 285 },
    nubian_monuments: { x: 295, y: 395 },
  };

  const activePos = siteCoordinates[selectedSite.id] || { x: 275, y: 155 };

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {isArabic
              ? 'مخطط ممر التراث العالمي لليونسكو والقطاع المعماري الأثري'
              : 'UNESCO World Heritage Corridor Map & Architectural Elevation Blueprint'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الموقع النشط:' : 'Active Site:'} <strong className="text-amber-400">{selectedSite.nameEn}</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            UNESCO {selectedSite.inscribedYear}
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 460"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="UNESCO Egyptian Heritage Corridor and Architectural Blueprint"
        >
          <defs>
            <linearGradient id="nileRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="egyptMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#F1F5F9' : '#141A24'} />
              <stop offset="100%" stopColor={isLight ? '#E2E8F0' : '#0B0F17'} />
            </linearGradient>
            <filter id="heritageGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Vector Cartography of Egypt */}
          <rect
            x="20"
            y="20"
            width="490"
            height="420"
            rx="14"
            fill="url(#egyptMapGrad)"
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          {/* Map Header & Grid */}
          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'خريطة مواقع التراث العالمي لليونسكو بجمهورية مصر العربية' : 'Arab Republic of Egypt – UNESCO Heritage Geography'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            {isArabic
              ? 'ممر وادي النيل، خليج السويس، شبه جزيرة سيناء، وبحيرة ناصر'
              : 'Nile Valley Heritage Corridor, Gulf of Suez, Sinai Peninsula & Lake Nasser'}
          </text>

          {/* Mediterranean Sea Water Tone */}
          <path
            d="M 22,22 L 508,22 L 508,95 C 470,95 440,110 400,105 C 370,100 340,90 300,95 C 260,100 230,110 190,105 C 150,100 110,85 70,95 C 40,102 22,105 22,105 Z"
            fill={isLight ? '#BAE6FD' : '#082F49'}
            opacity="0.5"
          />
          <text x="140" y="50" fill={isLight ? '#0369A1' : '#38BDF8'} fontSize="9" fontWeight="bold" opacity="0.6">
            MEDITERRANEAN SEA
          </text>

          {/* Red Sea & Gulf of Suez Water */}
          <path
            d="M 330,165 L 355,190 L 390,240 L 450,330 L 490,400 L 508,400 L 508,160 L 440,160 L 360,165 Z"
            fill={isLight ? '#BAE6FD' : '#082F49'}
            opacity="0.45"
          />
          <text x="430" y="270" fill={isLight ? '#0369A1' : '#38BDF8'} fontSize="9" fontWeight="bold" opacity="0.6">
            RED SEA
          </text>

          {/* Sinai Peninsula Mountain Triangle */}
          <polygon
            points="360,160 440,160 395,240"
            fill={isLight ? '#FED7AA' : '#2D2013'}
            stroke={isLight ? '#FDBA74' : '#78350F'}
            strokeWidth="1"
          />
          <text x="395" y="195" textAnchor="middle" fill="#EA580C" fontSize="8" fontWeight="bold">
            SINAI (ST. CATHERINE)
          </text>

          {/* The Great River Nile & Delta Ribbon */}
          {/* Delta Arms: Rosetta & Damietta */}
          <path
            d="M 285,145 L 255,105 M 285,145 L 315,105"
            fill="none"
            stroke="url(#nileRiverGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Main Nile Course winding south */}
          <path
            d="M 285,145 C 275,170 265,190 265,220 C 265,250 280,265 315,270 C 335,275 340,290 325,305 C 310,320 305,335 310,355 L 295,395 C 290,405 285,425 280,438"
            fill="none"
            stroke="url(#nileRiverGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Lake Nasser Expansion */}
          <ellipse cx="295" cy="405" rx="16" ry="24" fill="#0284C7" opacity="0.75" />
          <text x="320" y="420" fill="#38BDF8" fontSize="8" fontWeight="bold">
            LAKE NASSER
          </text>

          {/* Oases in Western Desert */}
          <circle cx="95" cy="180" r="3" fill="#10B981" />
          <text x="95" y="195" textAnchor="middle" fill={isLight ? '#334155' : '#94A3B8'} fontSize="7.5">
            SIWA OASIS
          </text>
          <circle cx="155" cy="240" r="2.5" fill="#10B981" />
          <text x="155" y="252" textAnchor="middle" fill={isLight ? '#334155' : '#94A3B8'} fontSize="7.5">
            BAHARIYA
          </text>

          {/* Heritage Sites Markers on Map */}
          {EGYPTIAN_HERITAGE_SITES.map((site) => {
            const pos = siteCoordinates[site.id] || { x: 275, y: 155 };
            const isSelected = selectedSite.id === site.id;

            return (
              <g
                key={site.id}
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => onSelectSite?.(site)}
              >
                {/* Active radar rings */}
                {isSelected && (
                  <>
                    <circle cx={pos.x} cy={pos.y} r="18" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4">
                      <animate attributeName="r" values="8;24" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={pos.x} cy={pos.y} r="12" fill="#F59E0B" opacity="0.2" />
                  </>
                )}

                {/* Pin Circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  fill={isSelected ? '#F59E0B' : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  filter={isSelected ? 'url(#heritageGlow)' : undefined}
                />

                {/* Site Label */}
                <rect
                  x={pos.x + 8}
                  y={pos.y - 10}
                  width="130"
                  height="18"
                  rx="3"
                  fill={isSelected ? '#0F172A' : isLight ? '#FFFFFF' : '#1E293B'}
                  stroke={isSelected ? '#F59E0B' : isLight ? '#CBD5E1' : '#334155'}
                  strokeWidth="1"
                />
                <text
                  x={pos.x + 12}
                  y={pos.y + 2}
                  fill={isSelected ? '#F59E0B' : isLight ? '#334155' : '#F1F5F9'}
                  fontSize="8"
                  fontWeight="bold"
                >
                  {isArabic ? site.nameAr.slice(0, 18) : site.nameEn.slice(0, 20)}...
                </text>
              </g>
            );
          })}

          {/* Transit Geodesic Route from Cairo Hub to Active Site */}
          <line
            x1="285"
            y1="145"
            x2={activePos.x}
            y2={activePos.y}
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Architectural Cutaway Blueprint of Selected Site */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="530"
            y="20"
            width="370"
            height="420"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="550" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'المقطع المعماري التراثي والقيمة الاستثنائية (OUV)' : 'Monument Architectural Cutaway & OUV Elevation'}
          </text>
          <text x="550" y="58" fill="#F59E0B" fontSize="9" fontWeight="bold">
            {selectedSite.nameEn}
          </text>

          {/* Cutaway Display Box */}
          <rect
            x="550"
            y="70"
            width="330"
            height="210"
            rx="8"
            fill={isLight ? '#F8FAFC' : '#0A0E17'}
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="1"
          />

          {/* Dynamic Architectural Blueprint based on Site */}
          {selectedSite.id === 'giza_memphis' && (
            <g>
              {/* Great Pyramid Cutaway */}
              <polygon points="570,250 715,100 860,250" fill={isLight ? '#FEF3C7' : '#271D0B'} stroke="#D97706" strokeWidth="2" />
              {/* Internal chambers: King's Chamber, Grand Gallery, Subterranean Pit */}
              <line x1="715" y1="200" x2="715" y2="220" stroke="#F59E0B" strokeWidth="6" />
              <text x="735" y="215" fill="#F59E0B" fontSize="8" fontWeight="bold">
                KING'S CHAMBER
              </text>
              <line x1="680" y1="225" x2="715" y2="200" stroke="#38BDF8" strokeWidth="3" />
              <text x="640" y="215" fill="#38BDF8" fontSize="7">
                GRAND GALLERY
              </text>
              {/* Queen's Chamber */}
              <rect x="705" y="228" width="12" height="8" fill="#10B981" />
              <text x="730" y="235" fill="#10B981" fontSize="7">
                QUEEN'S CHAMBER
              </text>
              {/* Subterranean Chamber */}
              <rect x="708" y="258" width="14" height="6" fill="#64748B" />
              <line x1="680" y1="250" x2="715" y2="258" stroke="#64748B" strokeWidth="2" />
              <text x="730" y="264" fill="#94A3B8" fontSize="7">
                SUBTERRANEAN PIT
              </text>
              {/* Great Sphinx Silhouette */}
              <path
                d="M 580,265 C 585,255 595,255 600,260 C 605,250 620,250 635,265 Z"
                fill="#B45309"
              />
              <text x="610" y="275" textAnchor="middle" fill="#D97706" fontSize="7" fontWeight="bold">
                SPHINX
              </text>
            </g>
          )}

          {selectedSite.id === 'ancient_thebes' && (
            <g>
              {/* Karnak Hypostyle Hall Pylons & 134 Columns */}
              <polygon points="570,250 585,120 630,120 640,250" fill={isLight ? '#FDE68A' : '#3B290C'} stroke="#D97706" strokeWidth="1.5" />
              <polygon points="660,250 670,120 715,120 730,250" fill={isLight ? '#FDE68A' : '#3B290C'} stroke="#D97706" strokeWidth="1.5" />
              {/* Hypostyle Columns */}
              {Array.from({ length: 6 }).map((_, cIdx) => (
                <g key={`col-${cIdx}`}>
                  <rect x={745 + cIdx * 19} y="150" width="8" height="100" fill="#F59E0B" />
                  <ellipse cx={749 + cIdx * 19} cy="148" rx="7" ry="3" fill="#D97706" />
                </g>
              ))}
              <text x="790" y="138" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">
                HYPOSTYLE HALL (134 COLUMNS)
              </text>
              {/* Hatshepsut Terraced Sanctuary */}
              <line x1="570" y1="260" x2="860" y2="260" stroke="#78350F" strokeWidth="2" />
              <text x="715" y="272" textAnchor="middle" fill="#D97706" fontSize="7.5">
                DEIR EL-BAHARI TERRACE & VALLEY OF THE KINGS (KV62)
              </text>
            </g>
          )}

          {selectedSite.id === 'nubian_monuments' && (
            <g>
              {/* Abu Simbel Rock Facade with 4 Colossi */}
              <path d="M 570,255 L 590,110 L 840,110 L 860,255 Z" fill={isLight ? '#FED7AA' : '#331B0B'} stroke="#EA580C" strokeWidth="2" />
              {/* 4 Seated Colossi of Ramses II */}
              {Array.from({ length: 4 }).map((_, sIdx) => {
                const colX = 610 + sIdx * 55;
                return (
                  <g key={`colossus-${sIdx}`}>
                    {/* Crown (Nemes / Pschent) */}
                    <polygon points={`${colX - 8},145 ${colX + 8},145 ${colX},125`} fill="#F59E0B" />
                    {/* Head & Torso */}
                    <circle cx={colX} cy={155} r="9" fill="#EA580C" />
                    <rect x={colX - 12} y="165" width="24" height="40" rx="3" fill="#C2410C" />
                    {/* Seated legs */}
                    <rect x={colX - 14} y="205" width="28" height="45" rx="3" fill="#9A3412" />
                  </g>
                );
              })}
              {/* Inner Portal to Sanctuary */}
              <rect x="705" y="185" width="20" height="65" fill="#0A0E17" stroke="#F59E0B" strokeWidth="1" />
              {/* Solar Ray */}
              <line x1="570" y1="130" x2="715" y2="220" stroke="#FDE047" strokeWidth="2" strokeDasharray="3,3" />
              <text x="715" y="265" textAnchor="middle" fill="#FDE047" fontSize="8" fontWeight="bold">
                BIANNUAL SOLAR EQUINOX ALIGNMENT (OCT 22 & FEB 22)
              </text>
            </g>
          )}

          {selectedSite.id === 'historic_cairo' && (
            <g>
              {/* Mamluk Mosque, Minarets & Dome */}
              <rect x="630" y="160" width="170" height="95" fill={isLight ? '#E2E8F0' : '#1E293B'} stroke="#64748B" strokeWidth="1.5" />
              {/* Horseshoe Arch Portal */}
              <path d="M 690,255 L 690,200 C 690,175 740,175 740,200 L 740,255 Z" fill="#0F172A" stroke="#D97706" strokeWidth="2" />
              {/* Ribbed Dome */}
              <path d="M 680,160 C 680,110 750,110 750,160 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              {/* Twin Mamluk Minarets */}
              <rect x="590" y="90" width="22" height="165" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <polygon points="590,90 612,90 601,65" fill="#B45309" />
              <rect x="818" y="90" width="22" height="165" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <polygon points="818,90 840,90 829,65" fill="#B45309" />
              <text x="715" y="270" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">
                FATIMID / MAMLUK IWAN & MINARET ARCHITECTURE (969–1805 AD)
              </text>
            </g>
          )}

          {/* Highlight Callout Box below Blueprint */}
          <rect
            x="550"
            y="290"
            width="330"
            height="130"
            rx="8"
            fill={isLight ? '#F1F5F9' : '#131922'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1"
          />
          <text x="565" y="310" fill="#F59E0B" fontSize="9" fontWeight="bold">
            {isArabic ? 'المعلم المعماري المحدد حالياً:' : 'Active Inscribed Highlight:'}
          </text>
          <text
            x="565"
            y="328"
            fill={isLight ? '#0F172A' : '#F1F5F9'}
            fontSize="9.5"
            fontWeight="bold"
            className="w-full"
          >
            {(isArabic ? selectedSite.architecturalHighlightsAr : selectedSite.architecturalHighlightsEn)[activeHighlightIndex] ||
              selectedSite.architecturalHighlightsEn[0]}
          </text>

          <text x="565" y="355" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            {isArabic ? 'الإحداثيات الجغرافية:' : 'GPS Coordinates:'}{' '}
            <tspan fill="#38BDF8" fontFamily="monospace">
              {selectedSite.coordinates.lat.toFixed(4)}° N, {selectedSite.coordinates.lng.toFixed(4)}° E
            </tspan>
          </text>
          <text x="565" y="372" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            {isArabic ? 'الحماية القانونية:' : 'Legal Protection:'}{' '}
            <tspan fill="#10B981">Egyptian Antiquities Law No. 117 / Venice Charter 1964</tspan>
          </text>
          <text x="565" y="390" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8">
            {isArabic ? 'التصنيف البيئي:' : 'Conservation Status:'}{' '}
            <tspan fill="#F43F5E">{isArabic ? 'صون وقائي وإدارة حمولة مستمرة' : 'Active Microclimate & Vibration Monitoring'}</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 4. CIFUENTES CARRYING CAPACITY CASCADE SCHEMATIC
// ============================================================================
interface CifuentesCarryingCapacitySchematicProps {
  usableAreaSqM: number;
  spaceReqPerVisitor: number;
  dailyHours: number;
  visitDurationHours: number;
  sunReductionFactor: number;
  vulnerabilityFactor: number;
  infraFactor: number;
  pccVisitorsPerDay: number;
  rccVisitorsPerDay: number;
  eccVisitorsPerDay: number;
  rotationCoefficient: number;
  sustainabilityAlert: 'CRITICAL_CONSERVATION' | 'REGULATED_QUOTA' | 'SUSTAINABLE_MASS';
  selectedModel: CarryingCapacityModel;
  isLight?: boolean;
  isArabic?: boolean;
}

const CifuentesCarryingCapacitySchematic: React.FC<CifuentesCarryingCapacitySchematicProps> = ({
  usableAreaSqM,
  spaceReqPerVisitor,
  dailyHours,
  visitDurationHours,
  sunReductionFactor,
  vulnerabilityFactor,
  infraFactor,
  pccVisitorsPerDay,
  rccVisitorsPerDay,
  eccVisitorsPerDay,
  rotationCoefficient,
  sustainabilityAlert,
  selectedModel,
  isLight = false,
  isArabic = false,
}) => {
  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-500">
            {isArabic
              ? 'مخطط القطاع البيئي وقمع سيفوينتس المتسلسل للحمولة السياحية (PCC → RCC → ECC)'
              : 'Conservation Chamber Telemetry & Cifuentes 3-Stage Mathematical Cascade'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الموقع البيئي:' : 'Eco-Site:'} <strong className="text-slate-200">{selectedModel.nameEn}</strong>
          </span>
          <span
            className={`px-2 py-0.5 rounded font-bold border ${
              sustainabilityAlert === 'CRITICAL_CONSERVATION'
                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                : sustainabilityAlert === 'REGULATED_QUOTA'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            }`}
          >
            ECC: {eccVisitorsPerDay} {isArabic ? 'زائر/يوم' : 'pax/day'}
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Cifuentes Carrying Capacity Cascade Schematic"
        >
          <defs>
            <linearGradient id="tombStrataGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#E2E8F0' : '#2D2013'} />
              <stop offset="100%" stopColor={isLight ? '#CBD5E1' : '#140E08'} />
            </linearGradient>
            <linearGradient id="cascadePccGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="cascadeRccGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="cascadeEccGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="ccGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Chamber Cross-Section & IoT Environmental Telemetry */}
          <rect
            x="20"
            y="20"
            width="440"
            height="400"
            rx="14"
            fill="url(#tombStrataGrad)"
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'قطاع الحجرة التراثية / المحمية البحرية وحساسات الصون' : 'Conservation Chamber Cutaway & IoT Telemetry Telematics'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            Area: {usableAreaSqM.toLocaleString()} m² | Space/Pax: {spaceReqPerVisitor} m² | Rotation: {rotationCoefficient.toFixed(1)}x
          </text>

          {/* Subterranean Bedrock Vault */}
          <path
            d="M 40,75 L 140,75 L 140,140 L 420,140 L 420,330 L 40,330 Z"
            fill={isLight ? '#FFFFFF' : '#0B0F17'}
            stroke={isLight ? '#94A3B8' : '#78350F'}
            strokeWidth="2"
          />

          {/* Descending Stepped Staircase */}
          {Array.from({ length: 6 }).map((_, stIdx) => (
            <g key={`step-${stIdx}`}>
              <line x1={40 + stIdx * 16} y1={75 + stIdx * 11} x2={56 + stIdx * 16} y2={75 + stIdx * 11} stroke="#B45309" strokeWidth="2" />
              <line x1={56 + stIdx * 16} y1={75 + stIdx * 11} x2={56 + stIdx * 16} y2={86 + stIdx * 11} stroke="#B45309" strokeWidth="2" />
            </g>
          ))}

          {/* Tomb Wall Hieroglyphic Registers */}
          <rect x="150" y="148" width="260" height="24" rx="2" fill={isLight ? '#FEF3C7' : '#2C1D08'} opacity="0.8" />
          <text x="280" y="164" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="bold" fontFamily="monospace">
            𓀀 𓁐 𓃠 𓆈 𓇋 𓈖 𓉐 𓊪 (POLYCHROME FRESCO WALL BAND)
          </text>

          {/* Raised Wooden / Glass Visitor Circulation Walkway */}
          <rect x="150" y="270" width="260" height="12" rx="3" fill="#38BDF8" opacity="0.4" stroke="#0284C7" strokeWidth="1" />
          <line x1="160" y1="276" x2="390" y2="276" stroke="#0284C7" strokeWidth="1" strokeDasharray="5,5" />
          <text x="280" y="293" textAnchor="middle" fill="#0284C7" fontSize="7.5" fontWeight="bold">
            ONE-WAY VISITOR WALKWAY (PROTECTS SUB-FLOOR CRUST)
          </text>

          {/* Royal Sarcophagus in Chamber Center */}
          <rect x="250" y="210" width="60" height="34" rx="4" fill="#B45309" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="255" y="215" width="50" height="24" rx="2" fill="#78350F" />
          <text x="280" y="230" textAnchor="middle" fill="#FEF3C7" fontSize="7.5" fontWeight="bold">
            SARCOPHAGUS
          </text>

          {/* Visitor Figurines Spaced on Walkway */}
          {Array.from({ length: 5 }).map((_, vIdx) => {
            const vX = 175 + vIdx * 50;
            return (
              <g key={`visitor-${vIdx}`}>
                <circle cx={vX} cy="252" r="4" fill="#38BDF8" />
                <line x1={vX} y1="256" x2={vX} y2="269" stroke="#38BDF8" strokeWidth="2" />
              </g>
            );
          })}

          {/* 3 IoT Environmental Telemetry Gauges */}
          {/* Temperature */}
          <rect x="50" y="345" width="115" height="60" rx="6" fill={isLight ? '#F1F5F9' : '#1A2332'} stroke="#38BDF8" strokeWidth="1" />
          <text x="60" y="362" fill="#38BDF8" fontSize="8" fontWeight="bold">
            CHAMBER TEMP
          </text>
          <text x="60" y="384" fill={isLight ? '#0369A1' : '#38BDF8'} fontSize="15" fontWeight="bold" fontFamily="monospace">
            22.4 °C
          </text>
          <text x="60" y="398" fill="#94A3B8" fontSize="7.5">
            Safe Target: 20-24°C
          </text>

          {/* Relative Humidity */}
          <rect x="180" y="345" width="120" height="60" rx="6" fill={isLight ? '#F1F5F9' : '#1A2332'} stroke={vulnerabilityFactor > 0.3 ? '#F43F5E' : '#10B981'} strokeWidth="1" />
          <text x="190" y="362" fill={vulnerabilityFactor > 0.3 ? '#F43F5E' : '#10B981'} fontSize="8" fontWeight="bold">
            RELATIVE HUMIDITY
          </text>
          <text x="190" y="384" fill={vulnerabilityFactor > 0.3 ? '#F43F5E' : '#34D399'} fontSize="15" fontWeight="bold" fontFamily="monospace">
            {(55 + vulnerabilityFactor * 30).toFixed(1)}% RH
          </text>
          <text x="190" y="398" fill="#94A3B8" fontSize="7.5">
            Moisture Threshold: 65%
          </text>

          {/* CO2 Concentration & Forced Air Flow */}
          <rect x="315" y="345" width="130" height="60" rx="6" fill={isLight ? '#F1F5F9' : '#1A2332'} stroke="#A855F7" strokeWidth="1" />
          <text x="325" y="362" fill="#A855F7" fontSize="8" fontWeight="bold">
            CO₂ MONITOR & HVAC
          </text>
          <text x="325" y="384" fill={isLight ? '#7E22CE' : '#C084FC'} fontSize="15" fontWeight="bold" fontFamily="monospace">
            780 ppm
          </text>
          <text x="325" y="398" fill="#94A3B8" fontSize="7.5">
            Damper Flow: {dailyHours / visitDurationHours > 10 ? 'HIGH' : 'NORMAL'}
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Cifuentes 3-Stage Mathematical Cascade Funnel */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="480"
            y="20"
            width="420"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="500" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'متتالية سيفوينتس الحسابية للطاقة الاستيعابية السياحية' : 'Cifuentes Mathematical Carrying Capacity Cascade'}
          </text>
          <text x="500" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            PCC = (Area / Space) × Rotation → RCC = PCC × ∏Cf → ECC = RCC × Cf_infra
          </text>

          {/* STAGE 1: Physical Carrying Capacity (PCC) Broad Hopper */}
          <polygon
            points="500,80 880,80 810,140 570,140"
            fill="url(#cascadePccGrad)"
            opacity="0.85"
            stroke="#0284C7"
            strokeWidth="1.5"
          />
          <text x="690" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
            STAGE 1: PCC (الطاقة المادية)
          </text>
          <text x="690" y="125" textAnchor="middle" fill="#E0F2FE" fontSize="14" fontWeight="bold" fontFamily="monospace">
            {pccVisitorsPerDay.toLocaleString()} {isArabic ? 'زائر / يوم' : 'visitors / day'}
          </text>

          {/* Correction Filter Membrane 1: Climate & Fragility */}
          <rect x="560" y="145" width="260" height="24" rx="4" fill="#EF4444" opacity="0.85" />
          <text x="690" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">
            ENVIRONMENTAL FILTERS: Sun -{(sunReductionFactor * 100).toFixed(0)}% | Bio/Fresco -{(vulnerabilityFactor * 100).toFixed(0)}%
          </text>

          {/* STAGE 2: Real Carrying Capacity (RCC) Mid Chute */}
          <polygon
            points="580,175 800,175 760,240 620,240"
            fill="url(#cascadeRccGrad)"
            opacity="0.85"
            stroke="#D97706"
            strokeWidth="1.5"
          />
          <text x="690" y="200" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
            STAGE 2: RCC (الطاقة الحقيقية)
          </text>
          <text x="690" y="222" textAnchor="middle" fill="#FEF3C7" fontSize="13" fontWeight="bold" fontFamily="monospace">
            {rccVisitorsPerDay.toLocaleString()} {isArabic ? 'زائر / يوم' : 'visitors / day'}
          </text>

          {/* Correction Filter Membrane 2: Infrastructure Management */}
          <rect x="610" y="246" width="160" height="22" rx="4" fill="#6366F1" opacity="0.85" />
          <text x="690" y="260" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">
            INFRASTRUCTURE LIMIT: -{(infraFactor * 100).toFixed(0)}%
          </text>

          {/* STAGE 3: Effective Permissible Capacity (ECC) Output Flask */}
          <polygon
            points="630,273 750,273 730,345 650,345"
            fill="url(#cascadeEccGrad)"
            opacity="0.9"
            stroke="#059669"
            strokeWidth="1.5"
            filter="url(#ccGlow)"
          />
          <text x="690" y="300" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
            STAGE 3: ECC (الطاقة الفعالة المسموحة)
          </text>
          <text x="690" y="325" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="monospace">
            {eccVisitorsPerDay.toLocaleString()} <tspan fontSize="10">{isArabic ? 'سائح يومياً' : 'pax/day'}</tspan>
          </text>

          {/* Sustainability Status Badge Banner */}
          <rect
            x="510"
            y="360"
            width="360"
            height="45"
            rx="8"
            fill={
              sustainabilityAlert === 'CRITICAL_CONSERVATION'
                ? '#881337'
                : sustainabilityAlert === 'REGULATED_QUOTA'
                ? '#78350F'
                : '#064E3B'
            }
            stroke={
              sustainabilityAlert === 'CRITICAL_CONSERVATION'
                ? '#F43F5E'
                : sustainabilityAlert === 'REGULATED_QUOTA'
                ? '#F59E0B'
                : '#10B981'
            }
            strokeWidth="1.5"
          />
          <text
            x="690"
            y="380"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
          >
            {sustainabilityAlert === 'CRITICAL_CONSERVATION'
              ? (isArabic ? '⚠ نطاق حماية حرجة: سقف صارم أقل من ٥٠ زائراً يومياً' : '⚠ CRITICAL CONSERVATION: Strict Quota < 50 Pax/Day')
              : sustainabilityAlert === 'REGULATED_QUOTA'
              ? (isArabic ? '⚡ نطاق حصص منظمة: مراقبة مستمرة للرطوبة وتفويج مجدول' : '⚡ REGULATED QUOTA: Scheduled Batch Telemetry Control')
              : (isArabic ? '✓ نطاق سياحة مستدامة: سعة استيعابية واسعة آمنة' : '✓ SUSTAINABLE MASS CAPACITY: Fully Tolerant Footprint')}
          </text>
          <text
            x="690"
            y="395"
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="8"
          >
            {isArabic ? 'معادلة الإدارة المستدامة المعتمدة من منظمة السياحة العالمية UNWTO' : 'UNWTO / IUCN Accredited Carrying Capacity Standard'}
          </text>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// 5. GDS FLIGHT AVIONICS & PNR RECORD RADAR SCHEMATIC
// ============================================================================
interface GdsFlightAvionicsSchematicProps {
  selectedFlight: GdsFlightEntry;
  selectedCabin: 'economyClass' | 'businessClass' | 'firstClass';
  passengerName: string;
  pnrCreated: boolean;
  generatedPnrCode: string;
  isLight?: boolean;
  isArabic?: boolean;
}

const GdsFlightAvionicsSchematic: React.FC<GdsFlightAvionicsSchematicProps> = ({
  selectedFlight,
  selectedCabin,
  passengerName,
  pnrCreated,
  generatedPnrCode,
  isLight = false,
  isArabic = false,
}) => {
  // Flight Route coordinates on mini globe map:
  // Origin: CAI (Cairo, 30° N, 31° E) -> approx (x: 580, y: 160)
  // Destination:
  const destCoords: Record<string, { x: number; y: number; name: string; nm: number }> = {
    LHR: { x: 740, y: 90, name: 'London Heathrow', nm: 2180 },
    JFK: { x: 840, y: 110, name: 'New York JFK', nm: 5600 },
    SSH: { x: 620, y: 220, name: 'Sharm El-Sheikh', nm: 240 },
    LXR: { x: 600, y: 270, name: 'Luxor Temple', nm: 310 },
  };

  const dest = destCoords[selectedFlight.destIata] || { x: 740, y: 90, name: 'International', nm: 1800 };

  return (
    <div
      className={`p-4 rounded-xl border mb-6 transition-all ${
        isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-[#0E131A] border-slate-800/80 shadow-inner'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            {isArabic
              ? 'مخطط مقصورة الطائرة، مسار الملاحة الجوي (Great Circle)، وسجل الحجز GDS'
              : 'Aircraft Cabin Blueprint, Great Circle Avionics Arc & GDS PNR HUD'}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            {isArabic ? 'الرحلة:' : 'Flight:'} <strong className="text-sky-400">{selectedFlight.flightNumber}</strong> ({selectedFlight.originIata} → {selectedFlight.destIata})
          </span>
          <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
            {selectedFlight.aircraftType}
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <svg
          viewBox="0 0 920 440"
          className="w-full h-auto min-w-[760px] select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-label="GDS Flight Avionics and Aircraft Cabin Blueprint"
        >
          <defs>
            <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#F1F5F9' : '#141D2B'} />
              <stop offset="100%" stopColor={isLight ? '#E2E8F0' : '#0B1019'} />
            </linearGradient>
            <linearGradient id="avionicsHudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#042F2E" />
              <stop offset="100%" stopColor="#021A1A" />
            </linearGradient>
            <filter id="pnrGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Frame: Aircraft Passenger Cabin Blueprint */}
          <rect
            x="20"
            y="20"
            width="450"
            height="400"
            rx="14"
            fill={isLight ? '#FFFFFF' : '#101520'}
            stroke={isLight ? '#CBD5E1' : '#334155'}
            strokeWidth="1.5"
          />

          <text x="40" y="45" fill={isLight ? '#0F172A' : '#F8FAFC'} fontSize="11" fontWeight="bold">
            {isArabic ? 'مخطط مقصورة الطائرة وتوزيع الدرجات الثلاث' : 'Wide-Body Fuselage Cabin Blueprint & Seating Plan'}
          </text>
          <text x="40" y="58" fill={isLight ? '#64748B' : '#94A3B8'} fontSize="8.5">
            EgyptAir {selectedFlight.aircraftType} | Cabin: {selectedCabin.toUpperCase()}
          </text>

          {/* Aircraft Fuselage Outline */}
          {/* Nose Cone */}
          <path
            d="M 50,220 C 50,150 90,100 150,100 L 410,100 C 440,100 450,150 450,220 C 450,290 440,340 410,340 L 150,340 C 90,340 50,290 50,220 Z"
            fill="url(#fuselageGrad)"
            stroke={isLight ? '#94A3B8' : '#38BDF8'}
            strokeWidth="1.5"
          />

          {/* Cockpit Windshield */}
          <path
            d="M 70,220 Q 95,180 120,180 L 120,260 Q 95,260 70,220 Z"
            fill="#0284C7"
            opacity="0.8"
          />
          <text x="100" y="223" textAnchor="middle" fill="#E0F2FE" fontSize="7" fontWeight="bold">
            FLIGHT DECK
          </text>

          {/* Swept Wings & Turbofan Jet Engines */}
          <polygon points="210,100 280,35 340,35 290,100" fill={isLight ? '#E2E8F0' : '#1E293B'} stroke="#475569" strokeWidth="1" />
          <polygon points="210,340 280,405 340,405 290,340" fill={isLight ? '#E2E8F0' : '#1E293B'} stroke="#475569" strokeWidth="1" />
          {/* Engine pods */}
          <rect x="250" y="28" width="50" height="20" rx="6" fill="#334155" />
          <ellipse cx="250" cy="38" rx="6" ry="10" fill="#0284C7" />
          <rect x="250" y="392" width="50" height="20" rx="6" fill="#334155" />
          <ellipse cx="250" cy="402" rx="6" ry="10" fill="#0284C7" />

          {/* Multi-Class Cabin Sections */}
          {/* 1. FIRST CLASS (Rows 1-2, 1-2-1 layout) */}
          <g opacity={selectedCabin === 'firstClass' ? 1 : 0.45}>
            <rect
              x="135"
              y="110"
              width="65"
              height="220"
              rx="4"
              fill={selectedCabin === 'firstClass' ? 'rgba(234, 179, 8, 0.15)' : 'none'}
              stroke={selectedCabin === 'firstClass' ? '#EAB308' : '#64748B'}
              strokeWidth={selectedCabin === 'firstClass' ? 1.5 : 0.5}
            />
            <text x="167" y="125" textAnchor="middle" fill="#EAB308" fontSize="7.5" fontWeight="bold">
              FIRST SUITES
            </text>
            {/* Suites 1A, 1D, 1G, 1K */}
            <rect x="142" y="135" width="22" height="26" rx="3" fill="#EAB308" />
            <rect x="142" y="175" width="22" height="26" rx="3" fill="#EAB308" />
            <rect x="142" y="220" width="22" height="26" rx="3" fill="#EAB308" />
            <rect x="142" y="260" width="22" height="26" rx="3" fill="#EAB308" />
            {/* Row 2 */}
            <rect x="172" y="135" width="22" height="26" rx="3" fill="#CA8A04" />
            <rect x="172" y="175" width="22" height="26" rx="3" fill="#CA8A04" />
            <rect x="172" y="220" width="22" height="26" rx="3" fill="#CA8A04" />
            <rect x="172" y="260" width="22" height="26" rx="3" fill="#CA8A04" />
          </g>

          {/* 2. BUSINESS CLASS (Rows 3-6, 2-2-2 lie-flat layout) */}
          <g opacity={selectedCabin === 'businessClass' ? 1 : 0.45}>
            <rect
              x="208"
              y="110"
              width="90"
              height="220"
              rx="4"
              fill={selectedCabin === 'businessClass' ? 'rgba(14, 165, 233, 0.15)' : 'none'}
              stroke={selectedCabin === 'businessClass' ? '#0EA5E9' : '#64748B'}
              strokeWidth={selectedCabin === 'businessClass' ? 1.5 : 0.5}
            />
            <text x="253" y="125" textAnchor="middle" fill="#0EA5E9" fontSize="7.5" fontWeight="bold">
              BUSINESS PODS
            </text>
            {Array.from({ length: 4 }).map((_, bIdx) => {
              const bX = 215 + bIdx * 20;
              return (
                <g key={`biz-col-${bIdx}`}>
                  <rect x={bX} y="138" width="16" height="20" rx="2" fill="#0EA5E9" />
                  <rect x={bX} y="162" width="16" height="20" rx="2" fill="#0EA5E9" />
                  <rect x={bX} y="240" width="16" height="20" rx="2" fill="#0EA5E9" />
                  <rect x={bX} y="264" width="16" height="20" rx="2" fill="#0EA5E9" />
                </g>
              );
            })}
          </g>

          {/* 3. ECONOMY CABIN (Rows 7-16, 3-3-3 layout) */}
          <g opacity={selectedCabin === 'economyClass' ? 1 : 0.45}>
            <rect
              x="305"
              y="110"
              width="135"
              height="220"
              rx="4"
              fill={selectedCabin === 'economyClass' ? 'rgba(16, 185, 129, 0.15)' : 'none'}
              stroke={selectedCabin === 'economyClass' ? '#10B981' : '#64748B'}
              strokeWidth={selectedCabin === 'economyClass' ? 1.5 : 0.5}
            />
            <text x="372" y="125" textAnchor="middle" fill="#10B981" fontSize="7.5" fontWeight="bold">
              ECONOMY MAIN CABIN
            </text>
            {Array.from({ length: 7 }).map((_, eIdx) => {
              const eX = 312 + eIdx * 17;
              return (
                <g key={`econ-col-${eIdx}`}>
                  {/* Left 3 */}
                  <rect x={eX} y="136" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="154" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="172" width="12" height="15" rx="1.5" fill="#10B981" />
                  {/* Center 3 */}
                  <rect x={eX} y="200" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="218" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="236" width="12" height="15" rx="1.5" fill="#10B981" />
                  {/* Right 3 */}
                  <rect x={eX} y="264" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="282" width="12" height="15" rx="1.5" fill="#10B981" />
                  <rect x={eX} y="300" width="12" height="15" rx="1.5" fill="#10B981" />
                </g>
              );
            })}
          </g>

          {/* Assigned Confirmed Seat Beacon when PNR is issued */}
          {pnrCreated && (
            <g>
              {(() => {
                const targetX = selectedCabin === 'firstClass' ? 142 : selectedCabin === 'businessClass' ? 235 : 346;
                const targetY = selectedCabin === 'firstClass' ? 135 : selectedCabin === 'businessClass' ? 162 : 218;
                return (
                  <>
                    <circle cx={targetX + 8} cy={targetY + 10} r="14" fill="none" stroke="#FDE047" strokeWidth="2" filter="url(#pnrGlow)">
                      <animate attributeName="r" values="8;18" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <rect x={targetX - 2} y={targetY - 2} width="20" height="24" rx="2" fill="#FDE047" />
                    <text x={targetX + 8} y={targetY + 14} textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">
                      ✓
                    </text>
                    {/* Floating Ticket Callout */}
                    <rect x={targetX - 35} y={targetY - 30} width="85" height="22" rx="3" fill="#022C22" stroke="#10B981" strokeWidth="1" />
                    <text x={targetX + 7} y={targetY - 16} textAnchor="middle" fill="#A7F3D0" fontSize="7.5" fontWeight="bold">
                      {passengerName.slice(0, 10)} (CONFIRMED)
                    </text>
                  </>
                );
              })()}
            </g>
          )}

          {/* Cabin Legend Bar */}
          <rect x="40" y="380" width="410" height="24" rx="4" fill={isLight ? '#F1F5F9' : '#131922'} />
          <circle cx="60" cy="392" r="5" fill="#EAB308" />
          <text x="72" y="395" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            First Class (4 Avail)
          </text>
          <circle cx="180" cy="392" r="5" fill="#0EA5E9" />
          <text x="192" y="395" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            Business (8 Avail)
          </text>
          <circle cx="290" cy="392" r="5" fill="#10B981" />
          <text x="302" y="395" fill={isLight ? '#334155' : '#CBD5E1'} fontSize="8">
            Economy (85+ Avail)
          </text>

          {/* ------------------------------------------------------------- */}
          {/* Right Frame: Great Circle Route & Avionics Flight HUD */}
          {/* ------------------------------------------------------------- */}
          <rect
            x="485"
            y="20"
            width="415"
            height="400"
            rx="14"
            fill="url(#avionicsHudGrad)"
            stroke="#0D9488"
            strokeWidth="1.5"
          />

          {/* Avionics Header */}
          <text x="505" y="45" fill="#5EEAD4" fontSize="11" fontWeight="bold">
            GREAT CIRCLE AVIONICS & IATA NAVIGATION HUD
          </text>
          <text x="505" y="58" fill="#14B8A6" fontSize="8.5" fontFamily="monospace">
            ORIGIN: CAI (30.12°N, 31.40°E) → DEST: {selectedFlight.destIata} ({dest.name})
          </text>

          {/* Avionics Radar Canvas */}
          <rect
            x="505"
            y="70"
            width="375"
            height="180"
            rx="8"
            fill="#021E1E"
            stroke="#115E59"
            strokeWidth="1"
          />

          {/* Globe Lat/Long grid rings */}
          <ellipse cx="692" cy="160" rx="160" ry="70" fill="none" stroke="#134E4A" strokeWidth="1" strokeDasharray="3,3" />
          <ellipse cx="692" cy="160" rx="100" ry="45" fill="none" stroke="#134E4A" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="532" y1="160" x2="852" y2="160" stroke="#134E4A" strokeWidth="1" />
          <line x1="692" y1="90" x2="692" y2="230" stroke="#134E4A" strokeWidth="1" />

          {/* Cairo Origin Radar Dish (x: 580, y: 180) */}
          <circle cx="580" cy="180" r="5" fill="#38BDF8" filter="url(#pnrGlow)" />
          <circle cx="580" cy="180" r="10" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
          <text x="580" y="200" textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">
            CAI (CAIRO)
          </text>

          {/* Destination Node */}
          <circle cx={dest.x} cy={dest.y} r="5" fill="#F59E0B" filter="url(#pnrGlow)" />
          <circle cx={dest.x} cy={dest.y} r="10" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
          <text x={dest.x} y={dest.y - 12} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="monospace">
            {selectedFlight.destIata}
          </text>

          {/* Great Circle Arc between CAI and Dest */}
          <path
            d={`M 580,180 Q ${(580 + dest.x) / 2},${Math.min(180, dest.y) - 40} ${dest.x},${dest.y}`}
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2.5"
            strokeDasharray="6,4"
          />

          {/* Aircraft Position along Path */}
          {(() => {
            const midX = (580 + dest.x) / 2;
            const midY = Math.min(180, dest.y) - 25;
            return (
              <g transform={`translate(${midX}, ${midY})`}>
                <polygon points="0,-8 6,6 0,3 -6,6" fill="#FDE047" filter="url(#pnrGlow)" />
                <text x="12" y="4" fill="#FDE047" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  MS{selectedFlight.flightNumber.replace('MS ', '')} FL370
                </text>
              </g>
            );
          })()}

          {/* HUD Telemetry Instruments Panel */}
          <rect x="505" y="260" width="375" height="140" rx="8" fill="#011818" stroke="#0D9488" strokeWidth="1" />

          <div className="text-emerald-400">
            {/* Telemetry rows in SVG */}
            <text x="520" y="280" fill="#2DD4BF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              SPEED: MACH 0.84 (492 KTS TAS) | ALTITUDE: 37,000 FT (FL370)
            </text>
            <text x="520" y="298" fill="#2DD4BF" fontSize="8.5" fontFamily="monospace">
              ROUTE DISTANCE: {dest.nm} NM ({Math.round(dest.nm * 1.852)} KM) | ETE: 04H 15M
            </text>
            <text x="520" y="316" fill="#2DD4BF" fontSize="8.5" fontFamily="monospace">
              TRANSPONDER: SQUAWK 7452 (MODE-S) | ICAO 24-BIT: 01001101
            </text>
            <text x="520" y="334" fill="#EAB308" fontSize="9" fontFamily="monospace" fontWeight="bold">
              PNR LOCATOR: {generatedPnrCode} | CABIN: {selectedCabin.toUpperCase()} | FARE: EGP {selectedFlight.fareEgp[selectedCabin].toLocaleString()}
            </text>

            {/* 2D Barcode representation */}
            <g transform="translate(520, 345)">
              <rect x="0" y="0" width="345" height="24" fill="#042F2E" stroke="#14B8A6" strokeWidth="0.5" />
              {Array.from({ length: 48 }).map((_, bIdx) => (
                <line
                  key={`bc-${bIdx}`}
                  x1={8 + bIdx * 7}
                  y1="4"
                  x2={8 + bIdx * 7}
                  y2="20"
                  stroke="#5EEAD4"
                  strokeWidth={(bIdx % 3 === 0) ? 3 : (bIdx % 2 === 0) ? 1.5 : 1}
                />
              ))}
              <text x="340" y="16" textAnchor="end" fill="#5EEAD4" fontSize="8" fontFamily="monospace">
                IATA-724 ETKT OK
              </text>
            </g>

            <text x="520" y="388" fill="#99F6E4" fontSize="7.5" fontFamily="monospace">
              PASSENGER: {passengerName} | SYSTEM HOST: LIVE SABRE/AMADEUS DUAL-GATEWAY
            </text>
          </div>
        </svg>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: TourismHospitalityStudio
// ============================================================================
export const TourismHospitalityStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialStation = 'hotel_yield',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  const [activeStation, setActiveStation] = useState<TourismStation>(initialStation);

  // -------------------------------------------------------------
  // STATION 1: Hotel Yield Management & Performance Indicators
  // -------------------------------------------------------------
  const [selectedYieldPreset, setSelectedYieldPreset] = useState<HotelYieldPreset>(HOTEL_YIELD_PRESETS[0]);
  const [totalRooms, setTotalRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].totalRooms);
  const [availableRooms, setAvailableRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].availableRooms);
  const [occupiedRooms, setOccupiedRooms] = useState<number>(HOTEL_YIELD_PRESETS[0].occupiedRooms);
  const [adrEgp, setAdrEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].averageDailyRateEgp);
  const [fbRevenueEgp, setFbRevenueEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].foodBeverageRevenueEgp);
  const [otherRevEgp, setOtherRevEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].otherOperatingRevenueEgp);
  const [deptExpensesEgp, setDeptExpensesEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].departmentalExpensesEgp);
  const [undistExpensesEgp, setUndistExpensesEgp] = useState<number>(HOTEL_YIELD_PRESETS[0].undistributedExpensesEgp);

  const handleApplyYieldPreset = (preset: HotelYieldPreset) => {
    setSelectedYieldPreset(preset);
    setTotalRooms(preset.totalRooms);
    setAvailableRooms(preset.availableRooms);
    setOccupiedRooms(preset.occupiedRooms);
    setAdrEgp(preset.averageDailyRateEgp);
    setFbRevenueEgp(preset.foodBeverageRevenueEgp);
    setOtherRevEgp(preset.otherOperatingRevenueEgp);
    setDeptExpensesEgp(preset.departmentalExpensesEgp);
    setUndistExpensesEgp(preset.undistributedExpensesEgp);
  };

  const yieldMetrics = useMemo(() => {
    const safeAvailable = Math.max(1, availableRooms);
    const safeOccupied = Math.min(safeAvailable, Math.max(0, occupiedRooms));
    const occupancyRate = (safeOccupied / safeAvailable) * 100;
    const roomRevenueEgp = safeOccupied * adrEgp;
    const revparEgp = roomRevenueEgp / safeAvailable;
    const totalOperatingRevenueEgp = roomRevenueEgp + fbRevenueEgp + otherRevEgp;
    const trevparEgp = totalOperatingRevenueEgp / safeAvailable;
    const totalExpensesEgp = deptExpensesEgp + undistExpensesEgp;
    const grossOperatingProfitEgp = totalOperatingRevenueEgp - totalExpensesEgp;
    const gopparEgp = grossOperatingProfitEgp / safeAvailable;
    const operatingMarginPct = totalOperatingRevenueEgp > 0
      ? (grossOperatingProfitEgp / totalOperatingRevenueEgp) * 100
      : 0;

    return {
      occupancyRate,
      roomRevenueEgp,
      revparEgp,
      totalOperatingRevenueEgp,
      trevparEgp,
      totalExpensesEgp,
      grossOperatingProfitEgp,
      gopparEgp,
      operatingMarginPct,
    };
  }, [availableRooms, occupiedRooms, adrEgp, fbRevenueEgp, otherRevEgp, deptExpensesEgp, undistExpensesEgp]);

  // -------------------------------------------------------------
  // STATION 2: Tour Package Costing & Itinerary Pricing
  // -------------------------------------------------------------
  const [selectedTourPreset, setSelectedTourPreset] = useState<TourPackagePreset>(TOUR_PACKAGE_PRESETS[0]);
  const [coachTransportEgp, setCoachTransportEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedCoachTransportEgp);
  const [guideFeesEgp, setGuideFeesEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedGuideFeesEgp);
  const [permitsEgp, setPermitsEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].fixedPermitsEgp);
  const [hotelPerPaxEgp, setHotelPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableHotelPerPaxEgp);
  const [mealsPerPaxEgp, setMealsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableMealsPerPaxEgp);
  const [ticketsPerPaxEgp, setTicketsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableEntranceTicketsPerPaxEgp);
  const [flightsPerPaxEgp, setFlightsPerPaxEgp] = useState<number>(TOUR_PACKAGE_PRESETS[0].variableDomesticFlightsPerPaxEgp);
  const [agencyMarkupPct, setAgencyMarkupPct] = useState<number>(TOUR_PACKAGE_PRESETS[0].agencyMarkupPct);
  const [paxCount, setPaxCount] = useState<number>(TOUR_PACKAGE_PRESETS[0].anticipatedPax);

  const handleApplyTourPreset = (preset: TourPackagePreset) => {
    setSelectedTourPreset(preset);
    setCoachTransportEgp(preset.fixedCoachTransportEgp);
    setGuideFeesEgp(preset.fixedGuideFeesEgp);
    setPermitsEgp(preset.fixedPermitsEgp);
    setHotelPerPaxEgp(preset.variableHotelPerPaxEgp);
    setMealsPerPaxEgp(preset.variableMealsPerPaxEgp);
    setTicketsPerPaxEgp(preset.variableEntranceTicketsPerPaxEgp);
    setFlightsPerPaxEgp(preset.variableDomesticFlightsPerPaxEgp);
    setAgencyMarkupPct(preset.agencyMarkupPct);
    setPaxCount(preset.anticipatedPax);
  };

  const tourMetrics = useMemo(() => {
    const totalFixedCosts = coachTransportEgp + guideFeesEgp + permitsEgp;
    const variableCostPerPax = hotelPerPaxEgp + mealsPerPaxEgp + ticketsPerPaxEgp + flightsPerPaxEgp;
    const safePax = Math.max(1, paxCount);
    const fixedCostPerPax = totalFixedCosts / safePax;
    const netCostPerPax = fixedCostPerPax + variableCostPerPax;
    const sellingPricePerPax = netCostPerPax * (1 + agencyMarkupPct / 100);
    const contributionMarginPerPax = sellingPricePerPax - variableCostPerPax;
    const breakEvenPax = contributionMarginPerPax > 0
      ? Math.ceil(totalFixedCosts / contributionMarginPerPax)
      : 0;
    const totalRevenue = sellingPricePerPax * safePax;
    const totalCosts = totalFixedCosts + variableCostPerPax * safePax;
    const agencyNetProfit = totalRevenue - totalCosts;

    return {
      totalFixedCosts,
      variableCostPerPax,
      fixedCostPerPax,
      netCostPerPax,
      sellingPricePerPax,
      contributionMarginPerPax,
      breakEvenPax,
      totalRevenue,
      totalCosts,
      agencyNetProfit,
    };
  }, [coachTransportEgp, guideFeesEgp, permitsEgp, hotelPerPaxEgp, mealsPerPaxEgp, ticketsPerPaxEgp, flightsPerPaxEgp, agencyMarkupPct, paxCount]);

  // -------------------------------------------------------------
  // STATION 3: UNESCO Heritage Explorer
  // -------------------------------------------------------------
  const [selectedHeritageSite, setSelectedHeritageSite] = useState<EgyptianHeritageSite>(EGYPTIAN_HERITAGE_SITES[0]);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number>(0);

  // -------------------------------------------------------------
  // STATION 4: Tourism Carrying Capacity Modeler
  // -------------------------------------------------------------
  const [selectedCcModel, setSelectedCcModel] = useState<CarryingCapacityModel>(CARRYING_CAPACITY_MODELS[0]);
  const [usableAreaSqM, setUsableAreaSqM] = useState<number>(CARRYING_CAPACITY_MODELS[0].totalUsableAreaSqM);
  const [spaceReqPerVisitor, setSpaceReqPerVisitor] = useState<number>(CARRYING_CAPACITY_MODELS[0].spaceRequiredPerVisitorSqM);
  const [dailyHours, setDailyHours] = useState<number>(CARRYING_CAPACITY_MODELS[0].dailyOperatingHours);
  const [visitDurationHours, setVisitDurationHours] = useState<number>(CARRYING_CAPACITY_MODELS[0].averageVisitDurationHours);
  const [sunReductionFactor, setSunReductionFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].sunExcessReductionFactor);
  const [vulnerabilityFactor, setVulnerabilityFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].biodiversityVulnerabilityFactor);
  const [infraFactor, setInfraFactor] = useState<number>(CARRYING_CAPACITY_MODELS[0].infrastructureCapacityFactor);

  const handleApplyCcModel = (model: CarryingCapacityModel) => {
    setSelectedCcModel(model);
    setUsableAreaSqM(model.totalUsableAreaSqM);
    setSpaceReqPerVisitor(model.spaceRequiredPerVisitorSqM);
    setDailyHours(model.dailyOperatingHours);
    setVisitDurationHours(model.averageVisitDurationHours);
    setSunReductionFactor(model.sunExcessReductionFactor);
    setVulnerabilityFactor(model.biodiversityVulnerabilityFactor);
    setInfraFactor(model.infrastructureCapacityFactor);
  };

  const ccMetrics = useMemo(() => {
    const safeSpace = Math.max(0.1, spaceReqPerVisitor);
    const safeDuration = Math.max(0.1, visitDurationHours);
    const rotationCoefficient = dailyHours / safeDuration;
    // Physical Carrying Capacity (PCC) = (Area / Space) * Rotation
    const pccVisitorsPerDay = Math.floor((usableAreaSqM / safeSpace) * rotationCoefficient);
    // Correction Factors (Cf) = 1 - factor
    const cfSun = Math.max(0, 1 - sunReductionFactor);
    const cfBio = Math.max(0, 1 - vulnerabilityFactor);
    // Real Carrying Capacity (RCC) = PCC * Cf1 * Cf2
    const rccVisitorsPerDay = Math.floor(pccVisitorsPerDay * cfSun * cfBio);
    // Effective / Permissible Capacity (ECC) = RCC * Management / Infrastructure factor
    const cfInfra = Math.max(0, 1 - infraFactor);
    const eccVisitorsPerDay = Math.floor(rccVisitorsPerDay * cfInfra);

    const sustainabilityAlert = eccVisitorsPerDay < 50
      ? ('CRITICAL_CONSERVATION' as const)
      : eccVisitorsPerDay < 500
      ? ('REGULATED_QUOTA' as const)
      : ('SUSTAINABLE_MASS' as const);

    return {
      rotationCoefficient,
      pccVisitorsPerDay,
      rccVisitorsPerDay,
      eccVisitorsPerDay,
      sustainabilityAlert,
    };
  }, [usableAreaSqM, spaceReqPerVisitor, dailyHours, visitDurationHours, sunReductionFactor, vulnerabilityFactor, infraFactor]);

  // -------------------------------------------------------------
  // STATION 5: GDS Terminal & PNR Builder
  // -------------------------------------------------------------
  const [selectedFlight, setSelectedFlight] = useState<GdsFlightEntry>(GDS_FLIGHT_INVENTORY[0]);
  const [selectedCabin, setSelectedCabin] = useState<'economyClass' | 'businessClass' | 'firstClass'>('economyClass');
  const [passengerFirstName, setPassengerFirstName] = useState<string>('AHMED');
  const [passengerLastName, setPassengerLastName] = useState<string>('HASSAN');
  const [passengerTitle, setPassengerTitle] = useState<string>('MR');
  const [frequentFlyerNo, setFrequentFlyerNo] = useState<string>('MS90218491');
  const [pnrCreated, setPnrCreated] = useState<boolean>(false);
  const [generatedPnrCode, setGeneratedPnrCode] = useState<string>('7EGY9R');

  const handleGeneratePnr = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPnrCode(code);
    setPnrCreated(true);
  };

  // CSV Export handler
  const handleExportCsv = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';

    if (activeStation === 'hotel_yield') {
      csvContent += 'Metric,Value\n';
      csvContent += `Preset,${selectedYieldPreset.nameEn}\n`;
      csvContent += `Total Rooms,${totalRooms}\n`;
      csvContent += `Available Rooms,${availableRooms}\n`;
      csvContent += `Occupied Rooms,${occupiedRooms}\n`;
      csvContent += `Occupancy Rate %,${yieldMetrics.occupancyRate.toFixed(2)}\n`;
      csvContent += `Average Daily Rate ADR (EGP),${adrEgp}\n`;
      csvContent += `RevPAR (EGP),${yieldMetrics.revparEgp.toFixed(2)}\n`;
      csvContent += `Total Operating Revenue (EGP),${yieldMetrics.totalOperatingRevenueEgp.toFixed(2)}\n`;
      csvContent += `TrevPAR (EGP),${yieldMetrics.trevparEgp.toFixed(2)}\n`;
      csvContent += `GOPPAR (EGP),${yieldMetrics.gopparEgp.toFixed(2)}\n`;
      csvContent += `Operating Margin %,${yieldMetrics.operatingMarginPct.toFixed(2)}\n`;
    } else if (activeStation === 'tour_costing') {
      csvContent += 'Tour Costing Parameter,Value\n';
      csvContent += `Tour Package,${selectedTourPreset.nameEn}\n`;
      csvContent += `Anticipated Pax,${paxCount}\n`;
      csvContent += `Fixed Costs Total (EGP),${tourMetrics.totalFixedCosts}\n`;
      csvContent += `Variable Cost Per Pax (EGP),${tourMetrics.variableCostPerPax}\n`;
      csvContent += `Net Cost Per Pax (EGP),${tourMetrics.netCostPerPax.toFixed(2)}\n`;
      csvContent += `Agency Markup %,${agencyMarkupPct}\n`;
      csvContent += `Selling Price Per Pax (EGP),${tourMetrics.sellingPricePerPax.toFixed(2)}\n`;
      csvContent += `Break-Even Pax,${tourMetrics.breakEvenPax}\n`;
      csvContent += `Total Expected Profit (EGP),${tourMetrics.agencyNetProfit.toFixed(2)}\n`;
    } else if (activeStation === 'heritage_explorer') {
      csvContent += 'UNESCO Site,Inscribed Year,Latitude,Longitude\n';
      EGYPTIAN_HERITAGE_SITES.forEach((site) => {
        csvContent += `"${site.nameEn}",${site.inscribedYear},${site.coordinates.lat},${site.coordinates.lng}\n`;
      });
    } else if (activeStation === 'carrying_capacity') {
      csvContent += 'Carrying Capacity Level,Visitors Per Day\n';
      csvContent += `Physical Carrying Capacity (PCC),${ccMetrics.pccVisitorsPerDay}\n`;
      csvContent += `Real Carrying Capacity (RCC),${ccMetrics.rccVisitorsPerDay}\n`;
      csvContent += `Effective Capacity (ECC),${ccMetrics.eccVisitorsPerDay}\n`;
      csvContent += `Sustainability Classification,${ccMetrics.sustainabilityAlert}\n`;
    } else if (activeStation === 'gds_terminal') {
      csvContent += 'PNR,Passenger,Flight,Origin,Dest,Cabin,Fare EGP\n';
      csvContent += `${generatedPnrCode},${passengerLastName}/${passengerFirstName} ${passengerTitle},${selectedFlight.flightNumber},${selectedFlight.originIata},${selectedFlight.destIata},${selectedCabin},${selectedFlight.fareEgp[selectedCabin]}\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `tourism_hospitality_${activeStation}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Hotel className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                {isArabic
                  ? 'مختبر محاكاة السياحة والضيافة وإدارة التراث الثقافي'
                  : 'Tourism, Hospitality & Cultural Heritage Simulation Studio'}
              </h2>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {isArabic ? 'معتمد رسمياً' : 'MoE Certified'}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isArabic
                ? 'إدارة العائد الفندقي RevPAR، تسعير البرامج السياحية، آثار التراث العالمي لليونسكو، الحمولة السياحية، ونظام حجز الطيران GDS'
                : 'Hotel Yield RevPAR/GOPPAR, Tour Costing & Pricing, UNESCO Heritage Explorer, Carrying Capacity & GDS Terminal'}
            </p>
          </div>
        </div>

        {/* Global Controls: Export CSV & Fullscreen */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCsv}
            className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border text-xs font-semibold transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isArabic ? 'تصدير البيانات CSV' : 'Export CSV Data'}
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>{isArabic ? 'تصدير' : 'CSV Export'}</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className={`p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg border transition-colors ${
              isLight
                ? 'border-slate-300 hover:bg-slate-100 text-slate-700'
                : 'border-slate-700 hover:bg-slate-800 text-slate-300'
            }`}
            title={isFullscreen ? (isArabic ? 'تصغير الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Station Navigation Tabs (Ergonomic Touch Targets >= 44px) */}
      {/* ------------------------------------------------------------- */}
      <div
        className={`flex items-center gap-1.5 px-4 py-2 border-b overflow-x-auto text-xs font-medium no-scrollbar ${
          isLight ? 'border-slate-200 bg-slate-100/70' : 'border-slate-800 bg-[#090D11]'
        }`}
      >
        <button
          onClick={() => setActiveStation('hotel_yield')}
          className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl transition-all whitespace-nowrap font-semibold ${
            activeStation === 'hotel_yield'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Hotel className="w-4 h-4" />
          <span>{isArabic ? '١. إدارة العائد الفندقي (RevPAR/ADR)' : '1. Hotel Yield & Performance'}</span>
        </button>

        <button
          onClick={() => setActiveStation('tour_costing')}
          className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl transition-all whitespace-nowrap font-semibold ${
            activeStation === 'tour_costing'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>{isArabic ? '٢. تسعير البرامج السياحية' : '2. Tour Package Costing'}</span>
        </button>

        <button
          onClick={() => setActiveStation('heritage_explorer')}
          className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl transition-all whitespace-nowrap font-semibold ${
            activeStation === 'heritage_explorer'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>{isArabic ? '٣. مستكشف التراث العالمي (اليونسكو)' : '3. UNESCO Heritage Explorer'}</span>
        </button>

        <button
          onClick={() => setActiveStation('carrying_capacity')}
          className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl transition-all whitespace-nowrap font-semibold ${
            activeStation === 'carrying_capacity'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{isArabic ? '٤. نمذجة الطاقة الاستيعابية البيئية' : '4. Tourism Carrying Capacity'}</span>
        </button>

        <button
          onClick={() => setActiveStation('gds_terminal')}
          className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl transition-all whitespace-nowrap font-semibold ${
            activeStation === 'gds_terminal'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Plane className="w-4 h-4" />
          <span>{isArabic ? '٥. نظام حجز الطيران GDS (سابر/أمديوس)' : '5. GDS Reservation Terminal'}</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Workspace Canvas */}
      {/* ------------------------------------------------------------- */}
      <div className="p-6 flex-1 overflow-y-auto max-h-[calc(100vh-180px)]">
        {/* ============================================================= */}
        {/* STATION 1: HOTEL YIELD MANAGEMENT */}
        {/* ============================================================= */}
        {activeStation === 'hotel_yield' && (
          <div className="space-y-6">
            {/* Presets row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'النماذج الفندقية الجاهزة:' : 'Hotel Presets:'}
              </span>
              {HOTEL_YIELD_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyYieldPreset(preset)}
                  className={`text-xs px-3.5 py-2 min-h-[40px] rounded-lg border transition-all ${
                    selectedYieldPreset.id === preset.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'نسبة الإشغال Occupancy' : 'Occupancy Rate'}</div>
                <div className="text-2xl font-bold text-amber-500">
                  {yieldMetrics.occupancyRate.toFixed(1)}%
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {occupiedRooms} / {availableRooms} {isArabic ? 'غرفة مشغولة' : 'rooms occupied'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'معدل السعر اليومي ADR' : 'Average Daily Rate'}</div>
                <div className="text-2xl font-bold text-emerald-500">
                  {adrEgp.toLocaleString()} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'متوسط سعر الغرفة المباعة' : 'Avg room revenue per sold room'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'عائد الغرفة المتاحة RevPAR' : 'RevPAR'}</div>
                <div className="text-2xl font-bold text-sky-500">
                  {yieldMetrics.revparEgp.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  ADR × {isArabic ? 'نسبة الإشغال' : 'Occupancy Rate'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'ربح التشغيل لكل غرفة GOPPAR' : 'GOPPAR'}</div>
                <div className="text-2xl font-bold text-purple-500">
                  {yieldMetrics.gopparEgp.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'هامش التشغيل:' : 'Operating Margin:'} {yieldMetrics.operatingMarginPct.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Hotel Yield & USALI Matrix */}
            <HotelYieldMatrixSchematic
              totalRooms={totalRooms}
              availableRooms={availableRooms}
              occupiedRooms={occupiedRooms}
              adrEgp={adrEgp}
              revparEgp={yieldMetrics.revparEgp}
              trevparEgp={yieldMetrics.trevparEgp}
              gopparEgp={yieldMetrics.gopparEgp}
              operatingMarginPct={yieldMetrics.operatingMarginPct}
              selectedPreset={selectedYieldPreset}
              isLight={isLight}
              isArabic={isArabic}
            />

            {/* Main Interactive Controls & Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sliders panel */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'معايير التحكم في الإشغال والتسعير' : 'Occupancy & Pricing Sliders'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد الغرف المتاحة:' : 'Available Rooms:'}</span>
                    <span className="font-mono font-bold text-amber-500">{availableRooms}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="600"
                    step="5"
                    value={availableRooms}
                    onChange={(e) => setAvailableRooms(Number(e.target.value))}
                    className="w-full h-2 accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد الغرف المباعة (المشغولة):' : 'Occupied Rooms:'}</span>
                    <span className="font-mono font-bold text-emerald-500">{occupiedRooms}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={availableRooms}
                    step="1"
                    value={occupiedRooms}
                    onChange={(e) => setOccupiedRooms(Number(e.target.value))}
                    className="w-full h-2 accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'متوسط السعر اليومي ADR (جنيه):' : 'Average Daily Rate ADR (EGP):'}</span>
                    <span className="font-mono font-bold text-sky-500">{adrEgp} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="800"
                    max="15000"
                    step="100"
                    value={adrEgp}
                    onChange={(e) => setAdrEgp(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'إيرادات الأغذية والمشروبات (F&B):' : 'F&B Revenue (EGP):'}</span>
                    <span className="font-mono font-bold">{fbRevenueEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="25000"
                    value={fbRevenueEgp}
                    onChange={(e) => setFbRevenueEgp(Number(e.target.value))}
                    className="w-full h-2 accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'إجمالي المصروفات التشغيلية:' : 'Total Operating Expenses:'}</span>
                    <span className="font-mono font-bold text-red-400">
                      {(deptExpensesEgp + undistExpensesEgp).toLocaleString()} EGP
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="3000000"
                    step="50000"
                    value={deptExpensesEgp + undistExpensesEgp}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setDeptExpensesEgp(Math.round(val * 0.65));
                      setUndistExpensesEgp(Math.round(val * 0.35));
                    }}
                    className="w-full h-2 accent-red-500"
                  />
                </div>
              </div>

              {/* Revenue breakdown chart & insight */}
              <div
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    {isArabic ? 'هيكل الإيرادات والأرباح اليومية للفندق' : 'Daily Revenue & Profit Structure'}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'إيراد الغرف:' : 'Rooms Revenue:'}</span>
                        <span className="font-mono text-slate-200">
                          {yieldMetrics.roomRevenueEgp.toLocaleString()} EGP (
                          {yieldMetrics.totalOperatingRevenueEgp > 0
                            ? ((yieldMetrics.roomRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100).toFixed(1)
                            : 0}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all"
                          style={{
                            width: `${
                              yieldMetrics.totalOperatingRevenueEgp > 0
                                ? (yieldMetrics.roomRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'إيراد الأغذية والمشروبات F&B:' : 'Food & Beverage Revenue:'}</span>
                        <span className="font-mono text-slate-200">
                          {fbRevenueEgp.toLocaleString()} EGP (
                          {yieldMetrics.totalOperatingRevenueEgp > 0
                            ? ((fbRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100).toFixed(1)
                            : 0}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-purple-500 h-full rounded-full transition-all"
                          style={{
                            width: `${
                              yieldMetrics.totalOperatingRevenueEgp > 0
                                ? (fbRevenueEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>{isArabic ? 'الربح التشغيلي الإجمالي (GOP):' : 'Gross Operating Profit (GOP):'}</span>
                        <span
                          className={`font-mono font-bold ${
                            yieldMetrics.grossOperatingProfitEgp >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {yieldMetrics.grossOperatingProfitEgp.toLocaleString()} EGP
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            yieldMetrics.grossOperatingProfitEgp >= 0 ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                          style={{
                            width: `${Math.min(
                              100,
                              Math.max(
                                0,
                                yieldMetrics.totalOperatingRevenueEgp > 0
                                  ? (yieldMetrics.grossOperatingProfitEgp / yieldMetrics.totalOperatingRevenueEgp) * 100
                                  : 0
                              )
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-amber-950/20 border-amber-900/40 text-amber-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'التحليل الاستراتيجي للعائد:' : 'Yield Strategic Insight:'}</span>{' '}
                  {isArabic
                    ? `يحقق الفندق حالياً TrevPAR يعادل ${yieldMetrics.trevparEgp.toFixed(
                        0
                      )} جنيه، ومعدل RevPAR يعادل ${yieldMetrics.revparEgp.toFixed(
                        0
                      )} جنيه. إذا رُفع السعر بمقدار ١٠٪ مع انخفاض الإشغال بنسبة ٥٪، فإن مرونة الطلب تحدد ما إذا كان RevPAR سيزداد.`
                    : `Current TrevPAR stands at ${yieldMetrics.trevparEgp.toFixed(
                        0
                      )} EGP and RevPAR at ${yieldMetrics.revparEgp.toFixed(
                        0
                      )} EGP. Demand elasticity determines if price hikes outweigh occupancy drops.`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* STATION 2: TOUR PACKAGE COSTING */}
        {/* ============================================================= */}
        {activeStation === 'tour_costing' && (
          <div className="space-y-6">
            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'البرامج السياحية النموذجية:' : 'Tour Package Presets:'}
              </span>
              {TOUR_PACKAGE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyTourPreset(preset)}
                  className={`text-xs px-3.5 py-2 min-h-[40px] rounded-lg border transition-all ${
                    selectedTourPreset.id === preset.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? preset.nameAr : preset.nameEn}
                </button>
              ))}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'سعر بيع الفرد للبرنامج' : 'Selling Price / Pax'}</div>
                <div className="text-2xl font-bold text-amber-500">
                  {tourMetrics.sellingPricePerPax.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'شامل هامش ربح' : 'Includes markup'} {agencyMarkupPct}%
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'نقطة التعادل (عدد الأفواج)' : 'Break-Even Pax'}</div>
                <div className="text-2xl font-bold text-emerald-500">
                  {tourMetrics.breakEvenPax} <span className="text-xs font-normal">{isArabic ? 'سائح' : 'pax'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {paxCount >= tourMetrics.breakEvenPax ? (
                    <span className="text-emerald-400">
                      ✓ {isArabic ? 'فوق نقطة التعادل بـ' : 'Profitable by'} {paxCount - tourMetrics.breakEvenPax}
                    </span>
                  ) : (
                    <span className="text-rose-400">
                      ⚠ {isArabic ? 'عجز تعادل بـ' : 'Deficit by'} {tourMetrics.breakEvenPax - paxCount}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'إجمالي أرباح الوكالة' : 'Total Agency Profit'}</div>
                <div className="text-2xl font-bold text-sky-500">
                  {tourMetrics.agencyNetProfit.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'عن فوج مكون من' : 'For group of'} {paxCount} {isArabic ? 'سائحاً' : 'pax'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">{isArabic ? 'التكلفة الإجمالية للفرد' : 'Net Cost / Pax'}</div>
                <div className="text-2xl font-bold text-purple-500">
                  {tourMetrics.netCostPerPax.toFixed(0)} <span className="text-xs font-normal">EGP</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'تكاليف متغيرة + نصيب الثابت' : 'Fixed alloc. + Variable'}
                </div>
              </div>
            </div>

            {/* High-Resolution Vector Schematic: Tour Manifest & CVP Chart */}
            <TourBreakEvenCostingSchematic
              paxCount={paxCount}
              totalFixedCosts={tourMetrics.totalFixedCosts}
              variableCostPerPax={tourMetrics.variableCostPerPax}
              fixedCostPerPax={tourMetrics.fixedCostPerPax}
              netCostPerPax={tourMetrics.netCostPerPax}
              sellingPricePerPax={tourMetrics.sellingPricePerPax}
              breakEvenPax={tourMetrics.breakEvenPax}
              agencyNetProfit={tourMetrics.agencyNetProfit}
              agencyMarkupPct={agencyMarkupPct}
              selectedPreset={selectedTourPreset}
              isLight={isLight}
              isArabic={isArabic}
            />

            {/* Cost Breakdowns and Sliders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sliders */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'محددات التسعير والتكاليف' : 'Cost & Margin Controls'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'عدد السياح المتوقع (Pax):' : 'Anticipated Pax:'}</span>
                    <span className="font-mono font-bold text-amber-500">{paxCount} pax</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="1"
                    value={paxCount}
                    onChange={(e) => setPaxCount(Number(e.target.value))}
                    className="w-full h-2 accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'نسبة هامش ربح الوكالة (Markup %):' : 'Agency Markup %:'}</span>
                    <span className="font-mono font-bold text-emerald-500">{agencyMarkupPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="1"
                    value={agencyMarkupPct}
                    onChange={(e) => setAgencyMarkupPct(Number(e.target.value))}
                    className="w-full h-2 accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تكلفة الأتوبيس السياحي الثابتة:' : 'Coach Transport Fixed:'}</span>
                    <span className="font-mono font-bold text-sky-500">{coachTransportEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="80000"
                    step="2000"
                    value={coachTransportEgp}
                    onChange={(e) => setCoachTransportEgp(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تكلفة الفندق لكل فرد (إجمالي الليالي):' : 'Hotel Lodging / Pax:'}</span>
                    <span className="font-mono font-bold">{hotelPerPaxEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="500"
                    value={hotelPerPaxEgp}
                    onChange={(e) => setHotelPerPaxEgp(Number(e.target.value))}
                    className="w-full h-2 accent-purple-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'تذاكر المزارات والمتاحف للفرد:' : 'Attraction Tickets / Pax:'}</span>
                    <span className="font-mono font-bold">{ticketsPerPaxEgp.toLocaleString()} EGP</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="200"
                    value={ticketsPerPaxEgp}
                    onChange={(e) => setTicketsPerPaxEgp(Number(e.target.value))}
                    className="w-full h-2 accent-teal-500"
                  />
                </div>
              </div>

              {/* Cost Structure Card */}
              <div
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-sky-500" />
                    {isArabic ? 'بيان تفصيل تكلفة وتوزيع البرنامج' : 'Tour Package Quotation Sheet'}
                  </h3>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'إجمالي التكاليف الثابتة:' : 'Total Fixed Costs:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.totalFixedCosts.toLocaleString()} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'نصيب الفرد من التكاليف الثابتة:' : 'Fixed Cost Share / Pax:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.fixedCostPerPax.toFixed(0)} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-slate-800/30">
                      <span className="text-slate-400">{isArabic ? 'التكاليف المتغيرة للفرد:' : 'Variable Costs / Pax:'}</span>
                      <span className="font-mono font-bold text-slate-200">
                        {tourMetrics.variableCostPerPax.toLocaleString()} EGP
                      </span>
                    </div>

                    <div className="flex justify-between p-2 rounded bg-amber-500/10 border border-amber-500/20">
                      <span className="text-amber-400 font-semibold">{isArabic ? 'سعر بيع البرنامج المقترح:' : 'Recommended Selling Price:'}</span>
                      <span className="font-mono font-bold text-amber-400">
                        {tourMetrics.sellingPricePerPax.toFixed(0)} EGP
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'معادلة نقطة التعادل السياحية:' : 'Break-Even Equation:'}</span>{' '}
                  {isArabic
                    ? `Break-Even Pax = التكاليف الثابتة ÷ (سعر البيع - التكلفة المتغيرة للفرد). لتغطية تكاليف الأتوبيس والمرشد والتصاريح، يحتاج الفوج إلى ${tourMetrics.breakEvenPax} مسافرين على الأقل.`
                    : `Break-Even Pax = Fixed Costs / (Price - Variable Cost). The agency needs at least ${tourMetrics.breakEvenPax} travelers to break even.`}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* STATION 3: UNESCO HERITAGE EXPLORER */}
        {/* ============================================================= */}
        {activeStation === 'heritage_explorer' && (
          <div className="space-y-6">
            {/* Site selector tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EGYPTIAN_HERITAGE_SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => {
                    setSelectedHeritageSite(site);
                    setActiveHighlightIndex(0);
                  }}
                  className={`p-3 min-h-[44px] rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between ${
                    selectedHeritageSite.id === site.id
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-sm'
                      : isLight
                      ? 'bg-white border-slate-200 hover:bg-slate-100'
                      : 'bg-[#161B22] border-slate-800 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-500">
                      UNESCO {site.inscribedYear}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-xs line-clamp-2">
                    {isArabic ? site.nameAr : site.nameEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {isArabic ? site.locationAr : site.locationEn}
                  </p>
                </button>
              ))}
            </div>

            {/* High-Resolution Vector Schematic: Egyptian Heritage Corridor & Cutaway */}
            <EgyptianHeritageCorridorSchematic
              selectedSite={selectedHeritageSite}
              activeHighlightIndex={activeHighlightIndex}
              isLight={isLight}
              isArabic={isArabic}
              onSelectSite={(site) => {
                setSelectedHeritageSite(site);
                setActiveHighlightIndex(0);
              }}
            />

            {/* Detailed Site Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Information Panel */}
              <div
                className={`lg:col-span-2 p-6 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold flex items-center gap-2">
                      <Landmark className="w-5 h-5 text-amber-500" />
                      {isArabic ? selectedHeritageSite.nameAr : selectedHeritageSite.nameEn}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {isArabic ? selectedHeritageSite.locationAr : selectedHeritageSite.locationEn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {isArabic ? selectedHeritageSite.periodAr : selectedHeritageSite.periodEn}
                      </span>
                    </div>
                  </div>
                  <div className="text-right rtl:text-left text-xs font-mono text-slate-400">
                    {selectedHeritageSite.coordinates.lat.toFixed(4)}° N, {selectedHeritageSite.coordinates.lng.toFixed(4)}° E
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
                    {isArabic ? 'القيمة العالمية الاستثنائية (OUV):' : 'Outstanding Universal Value (OUV):'}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {isArabic ? selectedHeritageSite.significanceAr : selectedHeritageSite.significanceEn}
                  </p>
                </div>

                {/* Architectural highlights checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isArabic ? 'أبرز المعالم المعمارية والتاريخية المسجلة:' : 'Key Architectural & Historical Highlights:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(isArabic
                      ? selectedHeritageSite.architecturalHighlightsAr
                      : selectedHeritageSite.architecturalHighlightsEn
                    ).map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveHighlightIndex(idx)}
                        className={`p-3 min-h-[44px] rounded-lg border text-xs cursor-pointer transition-all flex items-start gap-2 ${
                          activeHighlightIndex === idx
                            ? 'bg-amber-500/15 border-amber-500 text-slate-100 font-semibold'
                            : isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            activeHighlightIndex === idx ? 'text-amber-500' : 'text-slate-500'
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conservation Challenges & Management */}
              <div
                className={`p-6 rounded-xl border flex flex-col justify-between ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-3 text-rose-400">
                    <ShieldAlert className="w-4 h-4" />
                    {isArabic ? 'تحديات الترميم والصون الوقائي' : 'Conservation & Preventive Care'}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isArabic ? selectedHeritageSite.conservationChallengesAr : selectedHeritageSite.conservationChallengesEn}
                  </p>

                  <div className="space-y-3 text-xs border-t border-slate-800 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'سنة الإدراج باليونسكو:' : 'Inscribed Year:'}</span>
                      <span className="font-bold text-amber-400">{selectedHeritageSite.inscribedYear}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'التصنيف الدولي:' : 'Classification:'}</span>
                      <span className="font-bold text-slate-200">{isArabic ? 'تراث ثقافي عالمي' : 'Cultural Heritage'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isArabic ? 'مستوى حماية الموقع:' : 'Protection Level:'}</span>
                      <span className="font-bold text-emerald-400">{isArabic ? 'قانون الآثار رقم ١١٧' : 'Law No. 117'}</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-6 p-3 rounded-lg border text-xs leading-relaxed ${
                    isLight ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-800/50 border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'ميثاق فينيسيا ١٩٦٤:' : 'Venice Charter 1964:'}</span>{' '}
                  {isArabic
                    ? 'يمنع الترميم التخيلي، ويشترط استخدام مواد قابلة للانعكاس والتمييز بين النسيج الأثري الأصلي والإضافات الحديثة.'
                    : 'Mandates reversible materials and strict distinction between original historical fabric and modern conservation repairs.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* STATION 4: CARRYING CAPACITY MODELER */}
        {/* ============================================================= */}
        {activeStation === 'carrying_capacity' && (
          <div className="space-y-6">
            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {isArabic ? 'المواقع البيئية والأثرية الحساسة:' : 'Sensitive Sites:'}
              </span>
              {CARRYING_CAPACITY_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => handleApplyCcModel(model)}
                  className={`text-xs px-3.5 py-2 min-h-[40px] rounded-lg border transition-all ${
                    selectedCcModel.id === model.id
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 font-semibold'
                      : isLight
                      ? 'border-slate-300 hover:bg-slate-200 text-slate-700'
                      : 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isArabic ? model.nameAr : model.nameEn}
                </button>
              ))}
            </div>

            {/* Carrying Capacity Level Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الاستيعابية المادية (PCC)' : 'Physical Carrying Capacity (PCC)'}
                </div>
                <div className="text-2xl font-bold text-sky-500">
                  {ccMetrics.pccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  (Area / Space) × Rotation ({ccMetrics.rotationCoefficient.toFixed(1)})
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الاستيعابية الحقيقية (RCC)' : 'Real Carrying Capacity (RCC)'}
                </div>
                <div className="text-2xl font-bold text-amber-500">
                  {ccMetrics.rccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  PCC × {isArabic ? 'معاملات التصحيح البيئي' : 'Environmental Correction Factors'}
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <div className="text-xs text-slate-500 mb-1">
                  {isArabic ? 'الطاقة الفعالة المسموحة (ECC)' : 'Effective Capacity (ECC)'}
                </div>
                <div className="text-2xl font-bold text-emerald-500">
                  {ccMetrics.eccVisitorsPerDay.toLocaleString()}{' '}
                  <span className="text-xs font-normal">{isArabic ? 'زائر / يوم' : 'visitors/day'}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {isArabic ? 'الحد الأقصى اليومي الآمن للاستدامة' : 'Safe Sustainable Daily Quota'}
                </div>
              </div>
            </div>

            {/* High-Resolution Vector Schematic: Carrying Capacity Cascade & Sensor Telemetry */}
            <CifuentesCarryingCapacitySchematic
              usableAreaSqM={usableAreaSqM}
              spaceReqPerVisitor={spaceReqPerVisitor}
              dailyHours={dailyHours}
              visitDurationHours={visitDurationHours}
              sunReductionFactor={sunReductionFactor}
              vulnerabilityFactor={vulnerabilityFactor}
              infraFactor={infraFactor}
              pccVisitorsPerDay={ccMetrics.pccVisitorsPerDay}
              rccVisitorsPerDay={ccMetrics.rccVisitorsPerDay}
              eccVisitorsPerDay={ccMetrics.eccVisitorsPerDay}
              rotationCoefficient={ccMetrics.rotationCoefficient}
              sustainabilityAlert={ccMetrics.sustainabilityAlert}
              selectedModel={selectedCcModel}
              isLight={isLight}
              isArabic={isArabic}
            />

            {/* Sliders & Parameters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'معايير المساحة وساعات الزيارة' : 'Physical & Operational Parameters'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المساحة المتاحة للاستخدام (م²):' : 'Usable Area (m²):'}</span>
                    <span className="font-mono font-bold text-amber-500">{usableAreaSqM.toLocaleString()} m²</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100000"
                    step="50"
                    value={usableAreaSqM}
                    onChange={(e) => setUsableAreaSqM(Number(e.target.value))}
                    className="w-full h-2 accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'المساحة المطلوبة لكل زائر (م²):' : 'Space Required / Visitor (m²):'}</span>
                    <span className="font-mono font-bold text-emerald-500">{spaceReqPerVisitor} m²</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    step="1"
                    value={spaceReqPerVisitor}
                    onChange={(e) => setSpaceReqPerVisitor(Number(e.target.value))}
                    className="w-full h-2 accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'ساعات التشغيل اليومية للموقع:' : 'Daily Operating Hours:'}</span>
                    <span className="font-mono font-bold text-sky-500">{dailyHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="14"
                    step="1"
                    value={dailyHours}
                    onChange={(e) => setDailyHours(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'متوسط مدة زيارة الفرد (ساعات):' : 'Average Visit Duration (hrs):'}</span>
                    <span className="font-mono font-bold">{visitDurationHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="0.25"
                    max="8"
                    step="0.25"
                    value={visitDurationHours}
                    onChange={(e) => setVisitDurationHours(Number(e.target.value))}
                    className="w-full h-2 accent-purple-500"
                  />
                </div>
              </div>

              {/* Vulnerability factors */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  {isArabic ? 'معاملات الهشاشة البيئية والتصحيح' : 'Vulnerability & Correction Factors'}
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل الإشعاع الشمسي والطقس القاسي:' : 'Extreme Climate / Heat Factor:'}</span>
                    <span className="font-mono font-bold text-amber-400">{(sunReductionFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={sunReductionFactor}
                    onChange={(e) => setSunReductionFactor(Number(e.target.value))}
                    className="w-full h-2 accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل هشاشة التنوع الحيوي / النقوش الأثرية:' : 'Biodiversity / Fresco Fragility:'}</span>
                    <span className="font-mono font-bold text-rose-400">{(vulnerabilityFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={vulnerabilityFactor}
                    onChange={(e) => setVulnerabilityFactor(Number(e.target.value))}
                    className="w-full h-2 accent-rose-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{isArabic ? 'معامل قيود إدارة البنية التحتية:' : 'Infrastructure Management Limit:'}</span>
                    <span className="font-mono font-bold text-sky-400">{(infraFactor * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.8"
                    step="0.05"
                    value={infraFactor}
                    onChange={(e) => setInfraFactor(Number(e.target.value))}
                    className="w-full h-2 accent-sky-500"
                  />
                </div>

                <div
                  className={`p-3 rounded-lg border text-xs leading-relaxed ${
                    ccMetrics.sustainabilityAlert === 'CRITICAL_CONSERVATION'
                      ? 'bg-rose-950/20 border-rose-900/40 text-rose-300'
                      : ccMetrics.sustainabilityAlert === 'REGULATED_QUOTA'
                      ? 'bg-amber-950/20 border-amber-900/40 text-amber-300'
                      : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                  }`}
                >
                  <span className="font-bold">{isArabic ? 'التصنيف البيئي للموقع:' : 'Environmental Classification:'}</span>{' '}
                  {ccMetrics.sustainabilityAlert === 'CRITICAL_CONSERVATION' &&
                    (isArabic
                      ? 'موقع شديد الحساسية (حماية حرجة). يتطلب نظام حجز مسبق صارم وسقفاً لا يتجاوز ٥٠ زائراً يومياً لحماية الأثر أو الشعاب.'
                      : 'Critical Conservation Zone: Strict pre-booking quota required (< 50 daily visitors).')}
                  {ccMetrics.sustainabilityAlert === 'REGULATED_QUOTA' &&
                    (isArabic
                      ? 'موقع خاضع لنظام الحصص المنظمة (Regulated Quota) بمراقبة مستمرة لمستويات الرطوبة والتزاحم.'
                      : 'Regulated Quota Zone: Continuous environmental and crowd telemetry monitoring.')}
                  {ccMetrics.sustainabilityAlert === 'SUSTAINABLE_MASS' &&
                    (isArabic
                      ? 'موقع ذو طاقة استيعابية رحبة، قادر على استيعاب السياحة الجماعية المستدامة مع مسارات توجيه محددة.'
                      : 'Sustainable Mass Tourism Zone: Wide spatial capacity with guided pedestrian flow.')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* STATION 5: GDS TERMINAL & PNR BUILDER */}
        {/* ============================================================= */}
        {activeStation === 'gds_terminal' && (
          <div className="space-y-6">
            {/* Terminal Header Info */}
            <div
              className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    {isArabic ? 'شاشة التوزيع العالمي للطيران (GDS Amadeus / Sabre Emulation)' : 'GDS Flight Inventory & PNR Emulator'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isArabic ? 'الناقل الوطني: مصر للطيران (EGYPTAIR - MS) - اتحاد النقل الجوي IATA' : 'National Flag Carrier: EGYPTAIR (MS) - IATA System'}
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400">
                GDS HOST: LIVE-CONNECTED
              </div>
            </div>

            {/* Flight Selection Table */}
            <div
              className={`rounded-xl border overflow-hidden ${
                isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
              }`}
            >
              <div className="p-3 border-b border-slate-800 font-semibold text-xs flex items-center justify-between">
                <span>{isArabic ? 'جدول رحلات مصر للطيران المتاحة بالحجز:' : 'Available EgyptAir Scheduled Flights:'}</span>
                <span className="text-slate-500">{isArabic ? 'انقر على الرحلة لتحديدها' : 'Click flight to select'}</span>
              </div>
              <div className="divide-y divide-slate-800 overflow-x-auto text-xs">
                {GDS_FLIGHT_INVENTORY.map((flight) => (
                  <div
                    key={flight.flightNumber}
                    onClick={() => {
                      setSelectedFlight(flight);
                      setPnrCreated(false);
                    }}
                    className={`p-3.5 flex items-center justify-between cursor-pointer transition-all ${
                      selectedFlight.flightNumber === flight.flightNumber
                        ? 'bg-sky-500/15 text-slate-100 font-semibold'
                        : isLight
                        ? 'hover:bg-slate-50'
                        : 'hover:bg-slate-800/40 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                        {flight.flightNumber}
                      </span>
                      <div>
                        <div className="font-bold">
                          {flight.originIata} → {flight.destIata}
                        </div>
                        <div className="text-[11px] text-slate-500">{flight.aircraftType}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-slate-400 text-[11px]">{isArabic ? 'المغادرة' : 'Dep'}</div>
                        <div className="font-mono">{flight.departureTime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-400 text-[11px]">{isArabic ? 'الوصول' : 'Arr'}</div>
                        <div className="font-mono">{flight.arrivalTime}</div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="text-[11px] text-slate-400">{isArabic ? 'من' : 'From'}</div>
                        <div className="font-mono font-bold text-emerald-400">
                          {flight.fareEgp.economyClass.toLocaleString()} EGP
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Resolution Vector Schematic: Aircraft Cabin Blueprint & Avionics Route Arc */}
            <GdsFlightAvionicsSchematic
              selectedFlight={selectedFlight}
              selectedCabin={selectedCabin}
              passengerName={`${passengerFirstName} ${passengerLastName}`}
              pnrCreated={pnrCreated}
              generatedPnrCode={generatedPnrCode}
              isLight={isLight}
              isArabic={isArabic}
            />

            {/* Passenger Details & PNR Creation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* PNR Form */}
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-slate-800'
                }`}
              >
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-500" />
                  {isArabic ? 'بيانات الراكب ودرجة السفر (PNR Form)' : 'Passenger Details & Cabin Selection'}
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'اللقب' : 'Title'}</label>
                    <select
                      value={passengerTitle}
                      onChange={(e) => setPassengerTitle(e.target.value)}
                      className="w-full p-2.5 min-h-[44px] rounded-lg bg-slate-800 border border-slate-700 text-xs"
                    >
                      <option value="MR">MR</option>
                      <option value="MRS">MRS</option>
                      <option value="MS">MS</option>
                      <option value="DR">DR</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'الاسم الأول' : 'First Name'}</label>
                    <input
                      type="text"
                      value={passengerFirstName}
                      onChange={(e) => setPassengerFirstName(e.target.value.toUpperCase())}
                      className="w-full p-2.5 min-h-[44px] rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono uppercase"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'اسم العائلة' : 'Last Name'}</label>
                    <input
                      type="text"
                      value={passengerLastName}
                      onChange={(e) => setPassengerLastName(e.target.value.toUpperCase())}
                      className="w-full p-2.5 min-h-[44px] rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'درجة السفر' : 'Cabin Class'}</label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {(['economyClass', 'businessClass', 'firstClass'] as const).map((cabin) => (
                      <button
                        key={cabin}
                        onClick={() => setSelectedCabin(cabin)}
                        disabled={selectedFlight.availableSeats[cabin] === 0}
                        className={`p-2.5 min-h-[48px] rounded-lg border text-center transition-all ${
                          selectedCabin === cabin
                            ? 'bg-sky-500/20 text-sky-400 border-sky-500 font-bold'
                            : selectedFlight.availableSeats[cabin] === 0
                            ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                            : isLight
                            ? 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                            : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                        }`}
                      >
                        <div className="capitalize">
                          {cabin === 'economyClass' ? (isArabic ? 'سياحية' : 'Economy') : cabin === 'businessClass' ? (isArabic ? 'رجال أعمال' : 'Business') : (isArabic ? 'أولى' : 'First')}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {selectedFlight.fareEgp[cabin] > 0
                            ? `${selectedFlight.fareEgp[cabin].toLocaleString()} EGP`
                            : isArabic
                            ? 'غير متوفر'
                            : 'N/A'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">{isArabic ? 'رقم المسافر الدائم (EgyptAir Plus)' : 'Frequent Flyer No:'}</label>
                  <input
                    type="text"
                    value={frequentFlyerNo}
                    onChange={(e) => setFrequentFlyerNo(e.target.value)}
                    className="w-full p-2.5 min-h-[44px] rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono"
                  />
                </div>

                <button
                  onClick={handleGeneratePnr}
                  className="w-full py-3 min-h-[48px] rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>{isArabic ? 'إصدار رمز الحجز المؤكد (Generate PNR)' : 'Issue Confirmed PNR'}</span>
                </button>
              </div>

              {/* PNR Terminal Screen Display */}
              <div className="p-5 rounded-xl border bg-black border-slate-800 font-mono text-xs text-emerald-400 space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2 text-[11px]">
                  <span className="text-emerald-500 font-bold">SABRE/AMADEUS SYSTEM PNR RECORD</span>
                  <span className="text-slate-500">STATUS: {pnrCreated ? 'HK (CONFIRMED)' : 'PENDING'}</span>
                </div>

                <div className="space-y-1.5 leading-relaxed text-[11px]">
                  <div>1.1{passengerLastName}/{passengerFirstName} {passengerTitle}</div>
                  <div>
                    2 {selectedFlight.flightNumber} {selectedCabin === 'economyClass' ? 'Y' : selectedCabin === 'businessClass' ? 'C' : 'F'} {selectedFlight.originIata}{selectedFlight.destIata} HK1 {selectedFlight.departureTime} {selectedFlight.arrivalTime}
                  </div>
                  <div>3 AP EGY/CAIRO AIRPORT TELECOM +20 2 22650000</div>
                  <div>4 TK OK{pnrCreated ? new Date().toLocaleDateString('en-GB') : 'PENDING'}</div>
                  <div>5 SSR FQTV MS HK1 {frequentFlyerNo}</div>
                  <div>
                    6 FARE: EGP {selectedFlight.fareEgp[selectedCabin].toLocaleString()} / TAX: EGP {(selectedFlight.fareEgp[selectedCabin] * 0.14).toFixed(0)} / TOTAL: EGP {(selectedFlight.fareEgp[selectedCabin] * 1.14).toFixed(0)}
                  </div>
                </div>

                {pnrCreated && (
                  <div className="mt-4 p-3 rounded border border-emerald-500/30 bg-emerald-950/20 text-emerald-300">
                    <div className="font-bold text-sm text-emerald-400">
                      PNR RECORD LOCATOR: {generatedPnrCode}
                    </div>
                    <div className="text-[10px] text-emerald-500 mt-1">
                      {isArabic
                        ? 'تم حجز المقعد وإصدار التذكرة الإلكترونية بنجاح عبر بروتوكول IATA 724.'
                        : 'Seat secured and e-ticket generated successfully under IATA 724 protocol.'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
