import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { ThemeMode } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import {
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  BookOpen,
  Calculator,
  Compass,
  CheckCircle2,
  Clock,
  Box,
  Lightbulb,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
}

export type StudioTab = 'related_rates' | 'optimization' | 'ministerial_solver';

export type RelatedRatesScenario = 'ladder' | 'cone' | 'lamp_shadow' | 'perpendicular_ships';
export type OptimizationScenario = 'box_folding' | 'shortest_distance' | 'inscribed_rectangle' | 'cylinder_surface';

export const InteractiveRelatedRatesOptimizationStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Navigation tab
  const [activeTab, setActiveTab] = useState<StudioTab>('related_rates');

  // Animation playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [simTime, setSimTime] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // ---------------------------------------------------------------------------
  // 1. Related Time Rates State & Parameters
  // ---------------------------------------------------------------------------
  const [ratesScenario, setRatesScenario] = useState<RelatedRatesScenario>('ladder');

  // Ladder Scenario State: x^2 + y^2 = L^2
  const [ladderLength, setLadderLength] = useState<number>(10); // L (m)
  const [ladderX, setLadderX] = useState<number>(6); // x base distance (m)
  const [ladderVx, setLadderVx] = useState<number>(2); // dx/dt (m/s)

  // Cone Reservoir Scenario: r / h = R / H
  const [coneR, setConeR] = useState<number>(6); // Top radius (m)
  const [coneH, setConeH] = useState<number>(12); // Total height (m)
  const [coneLiquidH, setConeLiquidH] = useState<number>(4); // Current liquid depth (m)
  const [coneFlowRate, setConeFlowRate] = useState<number>(8); // dV/dt (m^3/s or cm^3/s)

  // Lamp Post & Shadow Scenario: H / h = (x + s) / s
  const [lampPostH, setLampPostH] = useState<number>(5.4); // H (m)
  const [personH, setPersonH] = useState<number>(1.8); // h (m)
  const [personX, setPersonX] = useState<number>(6); // x (m)
  const [personVx, setPersonVx] = useState<number>(1.2); // dx/dt (m/s)

  // Perpendicular Motion Scenario: z^2 = x^2 + y^2
  const [shipX, setShipX] = useState<number>(12); // nautical miles
  const [shipY, setShipY] = useState<number>(16);
  const [shipVx, setShipVx] = useState<number>(15); // knots
  const [shipVy, setShipVy] = useState<number>(20);

  // ---------------------------------------------------------------------------
  // 2. Applied Optimization State & Parameters
  // ---------------------------------------------------------------------------
  const [optScenario, setOptScenario] = useState<OptimizationScenario>('box_folding');

  // Box Folding Scenario: V(x) = x * (a - 2x) * (b - 2x)
  const [sheetA, setSheetA] = useState<number>(24); // Length (cm)
  const [sheetB, setSheetB] = useState<number>(15); // Width (cm)
  const [cutCornerX, setCutCornerX] = useState<number>(3); // Corner cut square size (cm)

  // Shortest Distance Scenario: y = k * x^2, Point P(x0, y0)
  const [parabolaK, setParabolaK] = useState<number>(0.5);
  const [pointX0, setPointX0] = useState<number>(0);
  const [pointY0, setPointY0] = useState<number>(4);
  const [probeX, setProbeX] = useState<number>(1.5);

  // Inscribed Rectangle in Semicircle Scenario: A = 2x * sqrt(R^2 - x^2)
  const [semicircleR, setSemicircleR] = useState<number>(10);
  const [rectX, setRectX] = useState<number>(7.07);

  // ---------------------------------------------------------------------------
  // 3. Ministerial Exam Solver State
  // ---------------------------------------------------------------------------
  const [selectedExamPreset, setSelectedExamPreset] = useState<'exam2024' | 'exam2023' | 'exam2022' | 'box_classic'>('exam2024');

  // ---------------------------------------------------------------------------
  // Animation Loop Effect
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimestampRef.current = null;
      return;
    }

    const step = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const dt = Math.min((timestamp - lastTimestampRef.current) / 1000, 0.1);
      lastTimestampRef.current = timestamp;

      setSimTime((prev) => prev + dt);

      // Increment physical dynamic values according to rates
      if (activeTab === 'related_rates') {
        if (ratesScenario === 'ladder') {
          setLadderX((prevX) => {
            const nextX = prevX + ladderVx * dt * 0.3;
            const maxAllowed = ladderLength - 0.2;
            if (nextX >= maxAllowed) {
              setIsPlaying(false);
              return maxAllowed;
            }
            return nextX;
          });
        } else if (ratesScenario === 'cone') {
          setConeLiquidH((prevH) => {
            const k = coneR / coneH;
            const surfaceArea = Math.PI * Math.pow(k * prevH, 2);
            const dh = (coneFlowRate / Math.max(surfaceArea, 0.1)) * dt * 0.5;
            const nextH = prevH + dh;
            if (nextH >= coneH - 0.2 || nextH <= 0.5) {
              setIsPlaying(false);
              return Math.max(0.5, Math.min(nextH, coneH - 0.2));
            }
            return nextH;
          });
        } else if (ratesScenario === 'lamp_shadow') {
          setPersonX((prevX) => {
            const nextX = prevX + personVx * dt * 0.5;
            if (nextX >= 20) {
              setIsPlaying(false);
              return 20;
            }
            return nextX;
          });
        } else if (ratesScenario === 'perpendicular_ships') {
          setShipX((prevX) => prevX + shipVx * dt * 0.1);
          setShipY((prevY) => prevY + shipVy * dt * 0.1);
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, activeTab, ratesScenario, ladderLength, ladderVx, coneR, coneH, coneFlowRate, personVx, shipVx, shipVy]);

  const handleResetSimulation = () => {
    setIsPlaying(false);
    setSimTime(0);
    if (ratesScenario === 'ladder') {
      setLadderX(6);
    } else if (ratesScenario === 'cone') {
      setConeLiquidH(4);
    } else if (ratesScenario === 'lamp_shadow') {
      setPersonX(6);
    } else if (ratesScenario === 'perpendicular_ships') {
      setShipX(12);
      setShipY(16);
    }
  };

  // ---------------------------------------------------------------------------
  // Calculations: Related Rates Engine
  // ---------------------------------------------------------------------------
  const ladderCalculations = useMemo(() => {
    const x = Math.min(Math.max(ladderX, 0.1), ladderLength - 0.05);
    const y = Math.sqrt(Math.max(0, ladderLength * ladderLength - x * x));
    const vy = y > 0.001 ? -(x / y) * ladderVx : 0;
    const thetaRad = Math.atan2(y, x);
    const thetaDeg = (thetaRad * 180) / Math.PI;
    const dThetaDt = y > 0.001 ? -(1 / y) * ladderVx : 0; // rad/s
    const triangleArea = 0.5 * x * y;
    const dAreaDt = 0.5 * (x * vy + y * ladderVx);
    return { x, y, vy, thetaRad, thetaDeg, dThetaDt, triangleArea, dAreaDt };
  }, [ladderLength, ladderX, ladderVx]);

  const coneCalculations = useMemo(() => {
    const k = coneR / coneH;
    const h = Math.min(Math.max(coneLiquidH, 0.2), coneH);
    const r = k * h;
    const currentV = (1 / 3) * Math.PI * r * r * h;
    const totalV = (1 / 3) * Math.PI * coneR * coneR * coneH;
    const surfaceArea = Math.PI * r * r;
    const dhdt = surfaceArea > 0.001 ? coneFlowRate / surfaceArea : 0;
    return { k, h, r, currentV, totalV, surfaceArea, dhdt };
  }, [coneR, coneH, coneLiquidH, coneFlowRate]);

  const lampCalculations = useMemo(() => {
    const x = Math.max(0.5, personX);
    const denominator = Math.max(0.1, lampPostH - personH);
    const s = (personH / denominator) * x;
    const dsdt = (personH / denominator) * personVx;
    const tipSpeed = personVx + dsdt; // or (lampPostH / denominator) * personVx
    return { x, s, dsdt, tipSpeed };
  }, [lampPostH, personH, personX, personVx]);

  const shipsCalculations = useMemo(() => {
    const z = Math.sqrt(shipX * shipX + shipY * shipY);
    const dzdt = z > 0.001 ? (shipX * shipVx + shipY * shipVy) / z : 0;
    return { z, dzdt };
  }, [shipX, shipY, shipVx, shipVy]);

  // ---------------------------------------------------------------------------
  // Calculations: Optimization Engine
  // ---------------------------------------------------------------------------
  const boxCalculations = useMemo(() => {
    const maxAllowedCut = Math.min(sheetA, sheetB) / 2;
    const x = Math.min(Math.max(cutCornerX, 0.1), maxAllowedCut - 0.05);

    // V(x) = x * (a - 2x) * (b - 2x) = 4x^3 - 2(a+b)x^2 + abx
    const V = x * (sheetA - 2 * x) * (sheetB - 2 * x);

    // Critical point: 12x^2 - 4(a+b)x + ab = 0
    // Quadratic formula: [4(a+b) - sqrt(16(a+b)^2 - 4*12*ab)] / 24
    const aPlusB = sheetA + sheetB;
    const ab = sheetA * sheetB;
    const discriminant = 16 * aPlusB * aPlusB - 48 * ab;
    let optX = 0;
    let optV = 0;
    if (discriminant >= 0) {
      const root1 = (4 * aPlusB - Math.sqrt(discriminant)) / 24;
      if (root1 > 0 && root1 < maxAllowedCut) {
        optX = root1;
        optV = optX * (sheetA - 2 * optX) * (sheetB - 2 * optX);
      }
    }

    const Vprime = 12 * x * x - 4 * aPlusB * x + ab;
    const VdoublePrime = 24 * x - 4 * aPlusB;

    return { x, maxAllowedCut, V, optX, optV, Vprime, VdoublePrime };
  }, [sheetA, sheetB, cutCornerX]);

  const parabolaCalculations = useMemo(() => {
    const x = probeX;
    const y = parabolaK * x * x;
    const distSq = Math.pow(x - pointX0, 2) + Math.pow(y - pointY0, 2);
    const dist = Math.sqrt(distSq);

    // Normal line slope vs tangent slope
    const tangentSlope = 2 * parabolaK * x;
    const normalSlope = Math.abs(tangentSlope) > 0.001 ? -1 / tangentSlope : 9999;
    const segmentSlope = Math.abs(x - pointX0) > 0.001 ? (y - pointY0) / (x - pointX0) : 9999;
    const dotProduct = (x - pointX0) * 1 + (y - pointY0) * tangentSlope;

    return { x, y, dist, tangentSlope, normalSlope, segmentSlope, dotProduct };
  }, [parabolaK, pointX0, pointY0, probeX]);

  const semicircleCalculations = useMemo(() => {
    const x = Math.min(Math.max(rectX, 0.1), semicircleR - 0.05);
    const y = Math.sqrt(semicircleR * semicircleR - x * x);
    const area = 2 * x * y;
    const optX = semicircleR / Math.SQRT2;
    const optY = semicircleR / Math.SQRT2;
    const optArea = semicircleR * semicircleR;
    return { x, y, area, optX, optY, optArea };
  }, [semicircleR, rectX]);

  // ---------------------------------------------------------------------------
  // Theme and Styling Classes
  // ---------------------------------------------------------------------------
  const cardBg = isContrast
    ? 'bg-black border-2 border-indigo-400 text-white'
    : isLight
    ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
    : 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl';

  const subCardBg = isContrast
    ? 'bg-black border border-indigo-500'
    : isLight
    ? 'bg-slate-50 border-slate-200'
    : 'bg-slate-800/60 border-slate-700/60';

  return (
    <div className={`w-full flex flex-col gap-6 rounded-2xl ${isFullscreen ? 'p-2' : ''}`}>
      {/* --------------------------------------------------------------------- */}
      {/* Top Banner & Mode Navigation */}
      {/* --------------------------------------------------------------------- */}
      <div className={`p-4 sm:p-6 rounded-2xl border ${cardBg}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md shrink-0 ${
                isContrast
                  ? 'bg-black border-indigo-400 text-indigo-400'
                  : 'bg-gradient-to-br from-indigo-500 to-cyan-500 text-white border-indigo-400/30'
              }`}
            >
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-black tracking-tight">
                  {isArabic
                    ? 'استوديو المعدلات الزمنية المرتبطة وتطبيقات القيم العظمى والصغرى'
                    : 'Dynamic Related Time Rates & Applied Optimization Studio'}
                </h2>
                <span
                  className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                    isContrast
                      ? 'bg-indigo-400 text-black border-indigo-300'
                      : isLight
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
                  }`}
                >
                  {isArabic ? 'تفاضل وتكامل الثانوية العامة' : 'Thanawya Amma Calculus Ch 1 & 3'}
                </span>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {isArabic
                  ? 'محاكاة ميكانيكية وهندسية حية لانزلاق السلالم، تسرب المخاريط، حركة الظلال، وصناديق السعة القصوى مع حلول امتحانات الوزارة الرسمية'
                  : 'Interactive real-time kinetic mechanics of sliding ladders, conical fluid tanks, moving shadows, and maximum volume boxes with official exam step-by-step solvers'}
              </p>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-700/50 bg-slate-950/40 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('related_rates')}
              className={`flex-1 md:flex-initial min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'related_rates'
                  ? isContrast
                    ? 'bg-indigo-400 text-black font-black'
                    : 'bg-indigo-600 text-white shadow-md'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{isArabic ? 'المعدلات الزمنية المرتبطة' : 'Related Time Rates'}</span>
            </button>

            <button
              onClick={() => setActiveTab('optimization')}
              className={`flex-1 md:flex-initial min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'optimization'
                  ? isContrast
                    ? 'bg-indigo-400 text-black font-black'
                    : 'bg-indigo-600 text-white shadow-md'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تطبيقات القيم العظمى والصغرى' : 'Applied Optimization'}</span>
            </button>

            <button
              onClick={() => setActiveTab('ministerial_solver')}
              className={`flex-1 md:flex-initial min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'ministerial_solver'
                  ? isContrast
                    ? 'bg-indigo-400 text-black font-black'
                    : 'bg-indigo-600 text-white shadow-md'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isArabic ? 'حلول امتحانات الوزارة' : 'Ministerial Solver'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* Tab 1: Related Time Rates (المعدلات الزمنية المرتبطة) */}
      {/* --------------------------------------------------------------------- */}
      {activeTab === 'related_rates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Scenarios Selector (Left Column on LTR, Right on RTL) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg}`}>
              <h3 className="text-sm font-extrabold flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'اختر النموذج الهندسي للمعدلات' : 'Select Geometric Scenario'}</span>
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { id: 'ladder', labelAr: '🪜 انزلاق السلم على حائط', labelEn: 'Sliding Ladder' },
                  { id: 'cone', labelAr: '⏳ تسرب السائل في المخروط', labelEn: 'Conical Tank' },
                  { id: 'lamp_shadow', labelAr: '💡 ظل الرجل وعمود الإنارة', labelEn: 'Lamp & Shadow' },
                  { id: 'perpendicular_ships', labelAr: '🚢 سفينتان على طريقين متعامدين', labelEn: 'Perpendicular Motion' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setRatesScenario(s.id as RelatedRatesScenario);
                      handleResetSimulation();
                    }}
                    className={`min-h-[44px] p-2.5 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      ratesScenario === s.id
                        ? isContrast
                          ? 'bg-indigo-400 text-black border-white'
                          : 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                        : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isArabic ? s.labelAr : s.labelEn}
                  </button>
                ))}
              </div>

              {/* Dynamic Parameter Sliders based on Selected Scenario */}
              <div className="space-y-4">
                {ratesScenario === 'ladder' && (
                  <>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'طول السلم (L):' : 'Ladder Length (L):'}</span>
                        <span className="text-indigo-400 font-mono">{ladderLength} m</span>
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="20"
                        step="0.5"
                        value={ladderLength}
                        onChange={(e) => {
                          const newL = parseFloat(e.target.value);
                          setLadderLength(newL);
                          if (ladderX >= newL - 0.5) setLadderX(newL - 1);
                        }}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'بعد الطرف السفلي عن الحائط (x):' : 'Base Distance (x):'}</span>
                        <span className="text-indigo-400 font-mono">{ladderCalculations.x.toFixed(2)} m</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max={ladderLength - 0.5}
                        step="0.1"
                        value={ladderX}
                        onChange={(e) => setLadderX(parseFloat(e.target.value))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'سرعة ابتعاد الطرف السفلي (dx/dt):' : 'Base Velocity (dx/dt):'}</span>
                        <span className="text-emerald-400 font-mono">+{ladderVx.toFixed(1)} m/s</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="4"
                        step="0.1"
                        value={ladderVx}
                        onChange={(e) => setLadderVx(parseFloat(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {ratesScenario === 'cone' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'نصف القطر (R):' : 'Top Radius (R):'}</span>
                          <span className="text-indigo-400 font-mono">{coneR} m</span>
                        </div>
                        <input
                          type="range"
                          min="3"
                          max="10"
                          step="0.5"
                          value={coneR}
                          onChange={(e) => setConeR(parseFloat(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'الارتفاع الكلي (H):' : 'Height (H):'}</span>
                          <span className="text-indigo-400 font-mono">{coneH} m</span>
                        </div>
                        <input
                          type="range"
                          min="6"
                          max="20"
                          step="0.5"
                          value={coneH}
                          onChange={(e) => setConeH(parseFloat(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'عمق السائل الحالي (h):' : 'Current Depth (h):'}</span>
                        <span className="text-cyan-400 font-mono">{coneCalculations.h.toFixed(2)} m</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max={coneH - 0.5}
                        step="0.1"
                        value={coneLiquidH}
                        onChange={(e) => setConeLiquidH(parseFloat(e.target.value))}
                        className="w-full accent-cyan-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'معدل تدفق السائل (dV/dt):' : 'Flow Rate (dV/dt):'}</span>
                        <span className="text-amber-400 font-mono">{coneFlowRate > 0 ? `+${coneFlowRate}` : coneFlowRate} m³/s</span>
                      </div>
                      <input
                        type="range"
                        min="-15"
                        max="15"
                        step="0.5"
                        value={coneFlowRate}
                        onChange={(e) => setConeFlowRate(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {ratesScenario === 'lamp_shadow' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'ارتفاع العمود (H):' : 'Lamp Height (H):'}</span>
                          <span className="text-amber-400 font-mono">{lampPostH} m</span>
                        </div>
                        <input
                          type="range"
                          min="3.5"
                          max="8"
                          step="0.1"
                          value={lampPostH}
                          onChange={(e) => setLampPostH(parseFloat(e.target.value))}
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'طول الرجل (h):' : 'Person Height (h):'}</span>
                          <span className="text-cyan-400 font-mono">{personH} m</span>
                        </div>
                        <input
                          type="range"
                          min="1.2"
                          max="2.2"
                          step="0.05"
                          value={personH}
                          onChange={(e) => setPersonH(parseFloat(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'بعد الرجل عن العمود (x):' : 'Person Distance (x):'}</span>
                        <span className="text-indigo-400 font-mono">{lampCalculations.x.toFixed(2)} m</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="18"
                        step="0.2"
                        value={personX}
                        onChange={(e) => setPersonX(parseFloat(e.target.value))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'سرعة حركة الرجل (dx/dt):' : 'Person Speed (dx/dt):'}</span>
                        <span className="text-emerald-400 font-mono">+{personVx} m/s</span>
                      </div>
                      <input
                        type="range"
                        min="0.4"
                        max="3.5"
                        step="0.1"
                        value={personVx}
                        onChange={(e) => setPersonVx(parseFloat(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {ratesScenario === 'perpendicular_ships' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'موقع السفينة أ (x):' : 'Ship A (x):'}</span>
                          <span className="text-indigo-400 font-mono">{shipX.toFixed(1)} km</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="30"
                          step="0.5"
                          value={shipX}
                          onChange={(e) => setShipX(parseFloat(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'موقع السفينة ب (y):' : 'Ship B (y):'}</span>
                          <span className="text-cyan-400 font-mono">{shipY.toFixed(1)} km</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="30"
                          step="0.5"
                          value={shipY}
                          onChange={(e) => setShipY(parseFloat(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'سرعة أ (dx/dt):' : 'Speed A (dx/dt):'}</span>
                          <span className="text-emerald-400 font-mono">{shipVx} km/h</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="40"
                          step="1"
                          value={shipVx}
                          onChange={(e) => setShipVx(parseFloat(e.target.value))}
                          className="w-full accent-emerald-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'سرعة ب (dy/dt):' : 'Speed B (dy/dt):'}</span>
                          <span className="text-emerald-400 font-mono">{shipVy} km/h</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="40"
                          step="1"
                          value={shipVy}
                          onChange={(e) => setShipVy(parseFloat(e.target.value))}
                          className="w-full accent-emerald-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Simulation Controls */}
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-700/50">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex-1 min-h-[44px] px-4 py-2 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-600 hover:bg-amber-500 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                  }`}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل الحركة الحية' : 'Run Animation')}</span>
                </button>

                <button
                  onClick={handleResetSimulation}
                  title={isArabic ? 'إعادة ضبط' : 'Reset'}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Instantaneous Mathematical Readout */}
            <div className={`p-4 sm:p-5 rounded-2xl border ${subCardBg}`}>
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                <span>{isArabic ? 'المعادلات والمعدلات اللحظية' : 'Instantaneous Derivative Readout'}</span>
              </h4>

              {ratesScenario === 'ladder' && (
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'العلاقة الهندسية:' : 'Constraint:'}</span>
                    <span className="text-slate-200 font-bold"><MathRenderer math="x^2 + y^2 = L^2" /></span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'ارتفاع الطرف العلوي (y):' : 'Top Height (y):'}</span>
                    <span className="text-indigo-300 font-bold">{ladderCalculations.y.toFixed(3)} m</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-rose-950/30 border border-rose-800/40">
                    <span className="text-rose-300 font-semibold">{isArabic ? 'معدل هبوط الطرف العلوي (dy/dt):' : 'Top Drop Rate (dy/dt):'}</span>
                    <span className="text-rose-400 font-black">{ladderCalculations.vy.toFixed(3)} m/s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-cyan-950/30 border border-cyan-800/40">
                    <span className="text-cyan-300 font-semibold">{isArabic ? 'معدل تغير زاوية الميل (dθ/dt):' : 'Angle Rate (dθ/dt):'}</span>
                    <span className="text-cyan-400 font-bold">{ladderCalculations.dThetaDt.toFixed(3)} rad/s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <span className="text-emerald-300 font-semibold">{isArabic ? 'معدل تغير مساحة المثلث (dA/dt):' : 'Area Rate (dA/dt):'}</span>
                    <span className="text-emerald-400 font-bold">{ladderCalculations.dAreaDt.toFixed(3)} m²/s</span>
                  </div>
                </div>
              )}

              {ratesScenario === 'cone' && (
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'علاقة تشابه المثلثات:' : 'Similarity:'}</span>
                    <span className="text-slate-200 font-bold">
                      <MathRenderer math={`r = \\frac{R}{H} h = ${coneCalculations.k.toFixed(2)} h`} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'نصف قطر السطح اللحظي (r):' : 'Surface Radius (r):'}</span>
                    <span className="text-cyan-300 font-bold">{coneCalculations.r.toFixed(3)} m</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'حجم السائل اللحظي (V):' : 'Liquid Volume (V):'}</span>
                    <span className="text-indigo-300 font-bold">{coneCalculations.currentV.toFixed(2)} m³</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-amber-950/30 border border-amber-800/40">
                    <span className="text-amber-300 font-semibold">{isArabic ? 'معدل ارتفاع/هبوط السائل (dh/dt):' : 'Liquid Level Rate (dh/dt):'}</span>
                    <span className="text-amber-400 font-black">{coneCalculations.dhdt.toFixed(3)} m/s</span>
                  </div>
                </div>
              )}

              {ratesScenario === 'lamp_shadow' && (
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'علاقة الظل بتشابه المثلثات:' : 'Shadow Ratio:'}</span>
                    <span className="text-slate-200 font-bold">
                      <MathRenderer math="\frac{H}{h} = \frac{x + s}{s}" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'طول الظل اللحظي (s):' : 'Shadow Length (s):'}</span>
                    <span className="text-indigo-300 font-bold">{lampCalculations.s.toFixed(2)} m</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-cyan-950/30 border border-cyan-800/40">
                    <span className="text-cyan-300 font-semibold">{isArabic ? 'معدل تغير طول الظل (ds/dt):' : 'Shadow Growth Rate (ds/dt):'}</span>
                    <span className="text-cyan-400 font-bold">+{lampCalculations.dsdt.toFixed(3)} m/s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <span className="text-emerald-300 font-semibold">{isArabic ? 'سرعة حركة نهاية الظل (d(x+s)/dt):' : 'Shadow Tip Velocity:'}</span>
                    <span className="text-emerald-400 font-black">+{lampCalculations.tipSpeed.toFixed(3)} m/s</span>
                  </div>
                </div>
              )}

              {ratesScenario === 'perpendicular_ships' && (
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400">{isArabic ? 'المسافة بين السفينتين (z):' : 'Distance Between (z):'}</span>
                    <span className="text-indigo-300 font-bold">{shipsCalculations.z.toFixed(2)} km</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <span className="text-emerald-300 font-semibold">{isArabic ? 'معدل تغير المسافة (dz/dt):' : 'Separation Rate (dz/dt):'}</span>
                    <span className="text-emerald-400 font-black">{shipsCalculations.dzdt.toFixed(3)} km/h</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Mechanical & Visual Canvas (Right Column on LTR, Left on RTL) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg} flex flex-col h-full`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>{isArabic ? 'المحاكاة الهندسية التفاعلية الحية' : 'Live Interactive Visual Canvas'}</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400">t = {simTime.toFixed(1)}s</span>
              </div>

              {/* Dynamic SVG Workstation Canvas */}
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-2">
                {/* 1. Ladder SVG Simulation */}
                {ratesScenario === 'ladder' && (
                  <svg viewBox="0 0 500 400" className="w-full h-full max-h-[420px]">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      </pattern>
                      <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M 0 0 L 8 4 L 0 8 z" fill="#f43f5e" />
                      </marker>
                      <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M 0 0 L 8 4 L 0 8 z" fill="#10b981" />
                      </marker>
                    </defs>

                    {/* Background Grid */}
                    <rect width="500" height="400" fill="url(#grid)" />

                    {/* Wall (Vertical) and Floor (Horizontal) */}
                    <rect x="60" y="30" width="20" height="310" fill="#334155" rx="3" />
                    <rect x="60" y="340" width="400" height="20" fill="#1e293b" rx="3" />

                    {/* Wall & Floor Labels */}
                    <text x="70" y="25" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">
                      {isArabic ? 'حائط رأسي' : 'Wall'}
                    </text>
                    <text x="430" y="375" fill="#94a3b8" fontSize="11" textAnchor="end" fontWeight="bold">
                      {isArabic ? 'أرض أفقية' : 'Floor'}
                    </text>

                    {/* Scaled Coordinates: Origin at (80, 340) */}
                    {(() => {
                      const scale = 14;
                      const originX = 80;
                      const originY = 340;
                      const topY = originY - ladderCalculations.y * scale;
                      const baseX = originX + ladderCalculations.x * scale;

                      return (
                        <g>
                          {/* Triangle Area Fill */}
                          <polygon
                            points={`${originX},${originY} ${originX},${topY} ${baseX},${originY}`}
                            fill="rgba(99, 102, 241, 0.15)"
                            stroke="rgba(99, 102, 241, 0.4)"
                            strokeDasharray="4 4"
                          />
                          <text
                            x={originX + (baseX - originX) / 3}
                            y={originY - (originY - topY) / 3}
                            fill="#818cf8"
                            fontSize="11"
                            fontWeight="bold"
                          >
                            A = {ladderCalculations.triangleArea.toFixed(1)} m²
                          </text>

                          {/* Ladder Beam */}
                          <line
                            x1={originX}
                            y1={topY}
                            x2={baseX}
                            y2={originY}
                            stroke="#e2e8f0"
                            strokeWidth="8"
                            strokeLinecap="round"
                          />

                          {/* Ladder Rungs */}
                          {Array.from({ length: 8 }).map((_, idx) => {
                            const frac = (idx + 1) / 9;
                            const rx = originX + (baseX - originX) * frac;
                            const ry = topY + (originY - topY) * frac;
                            return (
                              <circle key={idx} cx={rx} cy={ry} r="3" fill="#0f172a" />
                            );
                          })}

                          {/* Base Wheel / Point */}
                          <circle cx={baseX} cy={originY} r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                          {/* Top Roller / Point */}
                          <circle cx={originX} cy={topY} r="8" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />

                          {/* Velocity Arrow: Base dx/dt (Green ->) */}
                          <line
                            x1={baseX}
                            y1={originY + 12}
                            x2={baseX + Math.min(ladderVx * 18, 70)}
                            y2={originY + 12}
                            stroke="#10b981"
                            strokeWidth="3"
                            markerEnd="url(#arrowGreen)"
                          />
                          <text x={baseX + 10} y={originY + 28} fill="#10b981" fontSize="10" fontWeight="bold">
                            dx/dt = +{ladderVx} m/s
                          </text>

                          {/* Velocity Arrow: Top dy/dt (Red v) */}
                          <line
                            x1={originX - 12}
                            y1={topY}
                            x2={originX - 12}
                            y2={topY + Math.min(Math.abs(ladderCalculations.vy) * 18, 70)}
                            stroke="#f43f5e"
                            strokeWidth="3"
                            markerEnd="url(#arrowRed)"
                          />
                          <text x={originX - 16} y={topY + 30} fill="#f43f5e" fontSize="10" textAnchor="end" fontWeight="bold">
                            dy/dt = {ladderCalculations.vy.toFixed(2)} m/s
                          </text>

                          {/* Angle theta arc */}
                          <path
                            d={`M ${baseX - 30} ${originY} A 30 30 0 0 0 ${baseX - 30 * Math.cos(ladderCalculations.thetaRad)} ${originY - 30 * Math.sin(ladderCalculations.thetaRad)}`}
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />
                          <text x={baseX - 45} y={originY - 10} fill="#38bdf8" fontSize="11" fontWeight="bold">
                            θ = {ladderCalculations.thetaDeg.toFixed(1)}°
                          </text>

                          {/* Dimensions Annotations */}
                          <text x={originX + (baseX - originX) / 2} y={originY + 18} fill="#94a3b8" fontSize="11" textAnchor="middle">
                            x = {ladderCalculations.x.toFixed(1)} m
                          </text>
                          <text x={originX - 25} y={originY - (originY - topY) / 2} fill="#94a3b8" fontSize="11" textAnchor="middle">
                            y = {ladderCalculations.y.toFixed(1)} m
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                )}

                {/* 2. Cone Reservoir SVG Simulation */}
                {ratesScenario === 'cone' && (
                  <svg viewBox="0 0 500 400" className="w-full h-full max-h-[420px]">
                    <defs>
                      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* Tank Outer Shell (Inverted Cone) */}
                    {(() => {
                      const cx = 250;
                      const apexY = 350;
                      const topY = 60;
                      const scaleH = 270 / coneH;
                      const scaleR = 15;

                      const topR_px = coneR * scaleR;
                      const currentH_px = coneCalculations.h * scaleH;
                      const currentR_px = coneCalculations.r * scaleR;
                      const liquidSurfaceY = apexY - currentH_px;

                      return (
                        <g>
                          {/* Tank Walls */}
                          <polygon
                            points={`${cx - topR_px},${topY} ${cx + topR_px},${topY} ${cx},${apexY}`}
                            fill="rgba(15, 23, 42, 0.6)"
                            stroke="#64748b"
                            strokeWidth="3"
                          />

                          {/* Liquid Inverted Cone Fill */}
                          <polygon
                            points={`${cx - currentR_px},${liquidSurfaceY} ${cx + currentR_px},${liquidSurfaceY} ${cx},${apexY}`}
                            fill="url(#waterGrad)"
                          />

                          {/* Liquid Surface Ellipse */}
                          <ellipse
                            cx={cx}
                            cy={liquidSurfaceY}
                            rx={currentR_px}
                            ry={currentR_px * 0.25}
                            fill="#7dd3fc"
                            stroke="#0284c7"
                            strokeWidth="2"
                          />

                          {/* Top Rim Ellipse */}
                          <ellipse
                            cx={cx}
                            cy={topY}
                            rx={topR_px}
                            ry={topR_px * 0.22}
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />

                          {/* Bottom Drainage Spigot & Stream */}
                          <rect x={cx - 4} y={apexY} width="8" height="15" fill="#475569" />
                          {coneFlowRate !== 0 && (
                            <line
                              x1={cx}
                              y1={apexY + 15}
                              x2={cx}
                              y2={apexY + 45}
                              stroke="#38bdf8"
                              strokeWidth={Math.min(Math.abs(coneFlowRate) * 0.8 + 2, 7)}
                              strokeDasharray="4 2"
                            />
                          )}

                          {/* Dimension Guides */}
                          <line x1={cx} y1={topY} x2={cx} y2={apexY} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1={cx} y1={liquidSurfaceY} x2={cx + currentR_px} y2={liquidSurfaceY} stroke="#ffffff" strokeWidth="2" />
                          <text x={cx + currentR_px / 2} y={liquidSurfaceY - 6} fill="#ffffff" fontSize="11" fontWeight="bold">
                            r = {coneCalculations.r.toFixed(2)} m
                          </text>

                          <text x={cx + 12} y={apexY - currentH_px / 2} fill="#38bdf8" fontSize="11" fontWeight="bold">
                            h = {coneCalculations.h.toFixed(2)} m
                          </text>

                          <text x={cx} y={topY - 14} fill="#e2e8f0" fontSize="12" textAnchor="middle" fontWeight="black">
                            R = {coneR} m, H = {coneH} m
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                )}

                {/* 3. Lamp Shadow SVG Simulation */}
                {ratesScenario === 'lamp_shadow' && (
                  <svg viewBox="0 0 500 400" className="w-full h-full max-h-[420px]">
                    <defs>
                      <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fef08a" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {(() => {
                      const groundY = 320;
                      const postX = 80;
                      const scale = 25;
                      const postH_px = lampPostH * scale;
                      const lampY = groundY - postH_px;
                      const personX_px = postX + lampCalculations.x * 14;
                      const personH_px = personH * scale;
                      const personHeadY = groundY - personH_px;
                      const shadowTipX = postX + (lampCalculations.x + lampCalculations.s) * 14;

                      return (
                        <g>
                          {/* Ground Pavement */}
                          <line x1="20" y1={groundY} x2="480" y2={groundY} stroke="#475569" strokeWidth="3" />

                          {/* Light Cone Polygon from Lamp to Shadow Tip */}
                          <polygon
                            points={`${postX},${lampY} ${shadowTipX},${groundY} ${postX},${groundY}`}
                            fill="url(#lightBeam)"
                          />

                          {/* Lamp Post */}
                          <line x1={postX} y1={groundY} x2={postX} y2={lampY} stroke="#94a3b8" strokeWidth="6" />
                          <circle cx={postX} cy={lampY} r="12" fill="#facc15" stroke="#ffffff" strokeWidth="2" />

                          {/* Lamp Glow Rings */}
                          <circle cx={postX} cy={lampY} r="22" fill="none" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 3" />

                          {/* Person Silhouette */}
                          <circle cx={personX_px} cy={personHeadY - 8} r="8" fill="#38bdf8" />
                          <line x1={personX_px} y1={personHeadY} x2={personX_px} y2={groundY - 15} stroke="#38bdf8" strokeWidth="4" />
                          <line x1={personX_px} y1={groundY - 15} x2={personX_px - 8} y2={groundY} stroke="#38bdf8" strokeWidth="3" />
                          <line x1={personX_px} y1={groundY - 15} x2={personX_px + 8} y2={groundY} stroke="#38bdf8" strokeWidth="3" />

                          {/* Ground Shadow Segment */}
                          <line
                            x1={personX_px}
                            y1={groundY}
                            x2={shadowTipX}
                            y2={groundY}
                            stroke="#0f172a"
                            strokeWidth="8"
                            strokeLinecap="round"
                          />
                          <line
                            x1={personX_px}
                            y1={groundY}
                            x2={shadowTipX}
                            y2={groundY}
                            stroke="#6366f1"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />

                          {/* Ray line passing through head */}
                          <line
                            x1={postX}
                            y1={lampY}
                            x2={shadowTipX}
                            y2={groundY}
                            stroke="#facc15"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />

                          {/* Labels */}
                          <text x={postX} y={lampY - 18} fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">
                            H = {lampPostH} m
                          </text>
                          <text x={personX_px} y={personHeadY - 20} fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
                            h = {personH} m
                          </text>
                          <text x={(personX_px + shadowTipX) / 2} y={groundY + 22} fill="#818cf8" fontSize="11" textAnchor="middle" fontWeight="bold">
                            الظل s = {lampCalculations.s.toFixed(2)} m
                          </text>
                          <text x={(postX + personX_px) / 2} y={groundY + 22} fill="#94a3b8" fontSize="11" textAnchor="middle">
                            x = {lampCalculations.x.toFixed(1)} m
                          </text>

                          {/* Shadow Tip Marker */}
                          <circle cx={shadowTipX} cy={groundY} r="5" fill="#f43f5e" />
                          <text x={shadowTipX} y={groundY - 10} fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">
                            نهاية الظل
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                )}

                {/* 4. Perpendicular Ships SVG Simulation */}
                {ratesScenario === 'perpendicular_ships' && (
                  <svg viewBox="0 0 500 400" className="w-full h-full max-h-[420px]">
                    {(() => {
                      const ox = 100;
                      const oy = 300;
                      const scale = 8;
                      const x_px = ox + shipX * scale;
                      const y_px = oy - shipY * scale;

                      return (
                        <g>
                          {/* Axes */}
                          <line x1={ox - 30} y1={oy} x2="450" y2={oy} stroke="#475569" strokeWidth="2" />
                          <line x1={ox} y1={oy + 30} x2={ox} y2="50" stroke="#475569" strokeWidth="2" />
                          <text x="440" y={oy - 8} fill="#94a3b8" fontSize="11">X-Axis</text>
                          <text x={ox + 8} y="60" fill="#94a3b8" fontSize="11">Y-Axis</text>

                          {/* Distance Line Hypotenuse */}
                          <line x1={x_px} y1={oy} x2={ox} y2={y_px} stroke="#818cf8" strokeWidth="3" strokeDasharray="4 4" />
                          <text x={(x_px + ox) / 2 + 10} y={(oy + y_px) / 2} fill="#818cf8" fontSize="12" fontWeight="bold">
                            z = {shipsCalculations.z.toFixed(2)} km
                          </text>

                          {/* Ship A (on X axis) */}
                          <circle cx={x_px} cy={oy} r="9" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                          <text x={x_px} y={oy + 22} fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="bold">
                            سفينة A (x = {shipX.toFixed(1)})
                          </text>

                          {/* Ship B (on Y axis) */}
                          <circle cx={ox} cy={y_px} r="9" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                          <text x={ox - 10} y={y_px} fill="#38bdf8" fontSize="11" textAnchor="end" fontWeight="bold">
                            سفينة B (y = {shipY.toFixed(1)})
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                )}
              </div>

              {/* Explanatory Educational Callout */}
              <div className="mt-4 p-3.5 rounded-xl border border-indigo-900/40 bg-indigo-950/20 text-xs flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold text-amber-300">
                    {isArabic ? 'القاعدة الذهبية في المعدلات الزمنية:' : 'Golden Rule of Related Rates:'}
                  </span>{' '}
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    {isArabic
                      ? 'حدد العلاقة الهندسية الثابتة التي تربط المتغيرات (فيثاغورس، تشابه مثلثات، قانون جيب التمام)، ثم اشتق الطرفين بالنسبة للزمن t، وعوّض بالقيم اللحظية فقط بعد إتمام الاشتقاق!'
                      : 'Establish the invariant geometric constraint connecting variables (Pythagoras, similar triangles, or trigonometry), differentiate implicitly with respect to time t, and substitute instantaneous values strictly AFTER differentiation!'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------------------- */}
      {/* Tab 2: Applied Optimization / Max-Min (تطبيقات القيم العظمى والصغرى) */}
      {/* --------------------------------------------------------------------- */}
      {activeTab === 'optimization' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Scenario Picker */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg}`}>
              <h3 className="text-sm font-extrabold flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>{isArabic ? 'اختر مسألة التطبيقات القصوى' : 'Select Optimization Problem'}</span>
              </h3>

              <div className="grid grid-cols-1 gap-2 mb-5">
                {[
                  { id: 'box_folding', labelAr: '📦 صندوق ذو سعة عظمى مقطوع من صفيحة', labelEn: 'Max Volume Folded Box' },
                  { id: 'shortest_distance', labelAr: '🎯 أقصر مسافة بين نقطة ومنحنى قطعي', labelEn: 'Shortest Distance to Parabola' },
                  { id: 'inscribed_rectangle', labelAr: '⭕ أكبر مستطيل داخل نصف دائرة', labelEn: 'Max Inscribed Rectangle' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setOptScenario(s.id as OptimizationScenario)}
                    className={`min-h-[42px] px-3 py-2 rounded-xl text-xs font-bold text-start border transition-all cursor-pointer ${
                      optScenario === s.id
                        ? isContrast
                          ? 'bg-indigo-400 text-black border-white'
                          : 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                        : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isArabic ? s.labelAr : s.labelEn}
                  </button>
                ))}
              </div>

              {/* Dynamic Controls per Optimization Scenario */}
              <div className="space-y-4">
                {optScenario === 'box_folding' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'طول الصفيحة (a):' : 'Sheet Length (a):'}</span>
                          <span className="text-indigo-400 font-mono">{sheetA} cm</span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="40"
                          step="1"
                          value={sheetA}
                          onChange={(e) => setSheetA(parseFloat(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'عرض الصفيحة (b):' : 'Sheet Width (b):'}</span>
                          <span className="text-indigo-400 font-mono">{sheetB} cm</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="30"
                          step="1"
                          value={sheetB}
                          onChange={(e) => setSheetB(parseFloat(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'طول ضلع المربع المقطوع (x):' : 'Cut Corner Size (x):'}</span>
                        <span className="text-amber-400 font-mono font-bold">{boxCalculations.x.toFixed(2)} cm</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max={boxCalculations.maxAllowedCut - 0.1}
                        step="0.1"
                        value={cutCornerX}
                        onChange={(e) => setCutCornerX(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <button
                      onClick={() => setCutCornerX(boxCalculations.optX)}
                      className="w-full py-2.5 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{isArabic ? `القفز للقيمة العظمى المثلى (x = ${boxCalculations.optX.toFixed(2)} سم)` : `Jump to Optimum (x = ${boxCalculations.optX.toFixed(2)} cm)`}</span>
                    </button>
                  </>
                )}

                {optScenario === 'shortest_distance' && (
                  <>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'معامل القطع المكافئ (k):' : 'Parabola Coeff (k):'}</span>
                        <span className="text-indigo-400 font-mono">{parabolaK}</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="2"
                        step="0.1"
                        value={parabolaK}
                        onChange={(e) => setParabolaK(parseFloat(e.target.value))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'إحداثي س للنقطة:' : 'Point X0:'}</span>
                          <span className="text-cyan-400 font-mono">{pointX0}</span>
                        </div>
                        <input
                          type="range"
                          min="-4"
                          max="4"
                          step="0.5"
                          value={pointX0}
                          onChange={(e) => setPointX0(parseFloat(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1">
                          <span>{isArabic ? 'إحداثي ص للنقطة:' : 'Point Y0:'}</span>
                          <span className="text-cyan-400 font-mono">{pointY0}</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="8"
                          step="0.5"
                          value={pointY0}
                          onChange={(e) => setPointY0(parseFloat(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'اختبار نقطة المنحنى (x):' : 'Curve Probe (x):'}</span>
                        <span className="text-amber-400 font-mono">{probeX.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="-4"
                        max="4"
                        step="0.1"
                        value={probeX}
                        onChange={(e) => setProbeX(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                  </>
                )}

                {optScenario === 'inscribed_rectangle' && (
                  <>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'نصف قطر نصف الدائرة (R):' : 'Radius (R):'}</span>
                        <span className="text-indigo-400 font-mono">{semicircleR} cm</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="20"
                        step="1"
                        value={semicircleR}
                        onChange={(e) => setSemicircleR(parseFloat(e.target.value))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>{isArabic ? 'نصف عرض المستطيل (x):' : 'Half Width (x):'}</span>
                        <span className="text-amber-400 font-mono">{rectX} cm</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max={semicircleR - 0.5}
                        step="0.1"
                        value={rectX}
                        onChange={(e) => setRectX(parseFloat(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <button
                      onClick={() => setRectX(parseFloat(semicircleCalculations.optX.toFixed(2)))}
                      className="w-full py-2.5 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{isArabic ? `القفز لأكبر مساحة (x = R/√2 = ${semicircleCalculations.optX.toFixed(2)})` : `Jump to Max Area (x = R/√2)`}</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Optimization Mathematical Proof & Derivative Test */}
            <div className={`p-4 sm:p-5 rounded-2xl border ${subCardBg}`}>
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'اختبار المشتقة الأولى والثانية' : 'Calculus Derivative Proof'}</span>
              </h4>

              {optScenario === 'box_folding' && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-slate-400 mb-1">{isArabic ? 'دالة الحجم V(x):' : 'Volume Function:'}</div>
                    <div className="text-indigo-300 font-bold">
                      <MathRenderer math={`V(x) = x(${sheetA} - 2x)(${sheetB} - 2x) = ${boxCalculations.V.toFixed(1)}\\text{ cm}^3`} />
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-slate-400 mb-1">{isArabic ? 'المشتقة الأولى V\'(x) = 0:' : 'First Derivative V\'(x):'}</div>
                    <div className="text-cyan-300 font-bold flex items-center gap-2">
                      <MathRenderer math={`V'(x) = ${boxCalculations.Vprime.toFixed(1)}`} />
                      {Math.abs(boxCalculations.Vprime) < 1 && <span className="text-emerald-400 font-bold">≈ 0 (نقطة حرجة!)</span>}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <div className="text-emerald-300 font-semibold mb-1">{isArabic ? 'اختبار المشتقة الثانية V\'\'(x):' : 'Second Derivative Test:'}</div>
                    <div className="text-emerald-400 font-black">
                      <MathRenderer math={`V''(${boxCalculations.optX.toFixed(2)}) = ${boxCalculations.VdoublePrime.toFixed(1)} < 0 \\implies \\text{${isArabic ? 'قيمة عظمى مطلقة' : 'Absolute Maximum'}}`} />
                    </div>
                  </div>
                </div>
              )}

              {optScenario === 'inscribed_rectangle' && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-slate-400 mb-1">{isArabic ? 'المساحة الحالية:' : 'Current Area:'}</div>
                    <div className="text-indigo-300 font-bold">
                      <MathRenderer math={`A = 2x y = ${semicircleCalculations.area.toFixed(2)}\\text{ cm}^2`} />
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <div className="text-emerald-300 font-semibold mb-1">{isArabic ? 'المساحة العظمى النظرية:' : 'Max Theoretical Area:'}</div>
                    <div className="text-emerald-400 font-black">
                      <MathRenderer math={`A_{max} = R^2 = ${semicircleCalculations.optArea.toFixed(2)}\\text{ cm}^2`} />
                    </div>
                  </div>
                </div>
              )}

              {optScenario === 'shortest_distance' && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-slate-400 mb-1">{isArabic ? 'إحداثيات نقطة الاختبار والمسافة D:' : 'Probe Point & Distance D:'}</div>
                    <div className="text-indigo-300 font-bold">
                      <MathRenderer math={`(x, y) = (${parabolaCalculations.x.toFixed(2)}, ${parabolaCalculations.y.toFixed(2)}), \\; D = ${parabolaCalculations.dist.toFixed(2)}`} />
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <div className="text-emerald-300 font-semibold mb-1">{isArabic ? 'ميل المماس وحاصل الضرب القياسي:' : 'Tangent Slope & Orthogonality:'}</div>
                    <div className="text-emerald-400 font-black">
                      <MathRenderer math={`m_{tan} = ${parabolaCalculations.tangentSlope.toFixed(2)}, \\; \\vec{u} \\cdot \\vec{T} = ${parabolaCalculations.dotProduct.toFixed(2)}`} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Optimization Visualizer (Sheet Fold + V(x) Curve) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg} flex flex-col h-full`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>{isArabic ? 'منحنى الدالة والتمثيل الهندسي' : 'Geometric & Function Plot'}</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">
                  {optScenario === 'box_folding' ? `V = ${boxCalculations.V.toFixed(1)} cm³` : ''}
                </span>
              </div>

              {/* Box Folding Interactive SVG */}
              {optScenario === 'box_folding' && (
                <div className="flex flex-col gap-4">
                  {/* Sheet Unfolded with Cutout Corners */}
                  <div className="w-full h-[220px] rounded-xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-[200px]">
                      {(() => {
                        const ox = 40;
                        const oy = 20;
                        const w = 320;
                        const h = (sheetB / sheetA) * w;
                        const cut_px = (cutCornerX / sheetA) * w;

                        return (
                          <g>
                            {/* Sheet Base Rectangle */}
                            <rect x={ox} y={oy} width={w} height={h} fill="#334155" stroke="#64748b" strokeWidth="2" />

                            {/* 4 Corner Cutouts (Red striped / crosshatched) */}
                            <rect x={ox} y={oy} width={cut_px} height={cut_px} fill="#f43f5e" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="1.5" />
                            <rect x={ox + w - cut_px} y={oy} width={cut_px} height={cut_px} fill="#f43f5e" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="1.5" />
                            <rect x={ox} y={oy + h - cut_px} width={cut_px} height={cut_px} fill="#f43f5e" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="1.5" />
                            <rect x={ox + w - cut_px} y={oy + h - cut_px} width={cut_px} height={cut_px} fill="#f43f5e" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="1.5" />

                            {/* Fold Dashed Lines */}
                            <rect
                              x={ox + cut_px}
                              y={oy + cut_px}
                              width={w - 2 * cut_px}
                              height={h - 2 * cut_px}
                              fill="rgba(99, 102, 241, 0.2)"
                              stroke="#818cf8"
                              strokeWidth="2"
                              strokeDasharray="4 3"
                            />

                            {/* Dimension Labels */}
                            <text x={ox + w / 2} y={oy - 6} fill="#cbd5e1" fontSize="11" textAnchor="middle" fontWeight="bold">
                              {sheetA} cm
                            </text>
                            <text x={ox - 10} y={oy + h / 2} fill="#cbd5e1" fontSize="11" textAnchor="end" fontWeight="bold">
                              {sheetB} cm
                            </text>
                            <text x={ox + cut_px / 2} y={oy + cut_px / 2 + 4} fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">
                              x
                            </text>
                          </g>
                        );
                      })()}
                    </svg>
                  </div>

                  {/* Volume Function Curve V(x) */}
                  <div className="w-full h-[190px] rounded-xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                    <svg viewBox="0 0 400 160" className="w-full h-full max-h-[160px]">
                      {(() => {
                        const ox = 40;
                        const oy = 140;
                        const plotW = 330;
                        const plotH = 110;

                        const maxX = boxCalculations.maxAllowedCut;
                        const maxV = Math.max(boxCalculations.optV * 1.15, 10);

                        // Generate path points
                        const points: string[] = [];
                        const steps = 50;
                        for (let i = 0; i <= steps; i++) {
                          const px = (i / steps) * maxX;
                          const pv = Math.max(0, px * (sheetA - 2 * px) * (sheetB - 2 * px));
                          const svgX = ox + (px / maxX) * plotW;
                          const svgY = oy - (pv / maxV) * plotH;
                          points.push(`${svgX.toFixed(1)},${svgY.toFixed(1)}`);
                        }

                        // Current point coordinates
                        const curSvgX = ox + (cutCornerX / maxX) * plotW;
                        const curSvgY = oy - (boxCalculations.V / maxV) * plotH;

                        // Optimum peak coordinates
                        const optSvgX = ox + (boxCalculations.optX / maxX) * plotW;
                        const optSvgY = oy - (boxCalculations.optV / maxV) * plotH;

                        return (
                          <g>
                            {/* Axes */}
                            <line x1={ox} y1={oy} x2={ox + plotW + 15} y2={oy} stroke="#475569" strokeWidth="1.5" />
                            <line x1={ox} y1={oy} x2={ox} y2={oy - plotH - 15} stroke="#475569" strokeWidth="1.5" />
                            <text x={ox + plotW} y={oy + 14} fill="#94a3b8" fontSize="10">x (cm)</text>
                            <text x={ox - 8} y={oy - plotH - 5} fill="#94a3b8" fontSize="10" textAnchor="end">V(x)</text>

                            {/* Curve */}
                            <polyline points={points.join(' ')} fill="none" stroke="#6366f1" strokeWidth="3" />

                            {/* Optimum Peak Marker */}
                            <line x1={optSvgX} y1={oy} x2={optSvgX} y2={optSvgY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                            <circle cx={optSvgX} cy={optSvgY} r="5" fill="#10b981" />
                            <text x={optSvgX} y={optSvgY - 8} fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">
                              القمة ({boxCalculations.optX.toFixed(2)}, {boxCalculations.optV.toFixed(0)})
                            </text>

                            {/* Current Point Marker */}
                            <line x1={curSvgX} y1={oy} x2={curSvgX} y2={curSvgY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                            <circle cx={curSvgX} cy={curSvgY} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                          </g>
                        );
                      })()}
                    </svg>
                  </div>
                </div>
              )}

              {/* Semicircle Inscribed Rectangle SVG */}
              {optScenario === 'inscribed_rectangle' && (
                <div className="w-full h-[320px] rounded-xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                  <svg viewBox="0 0 400 240" className="w-full h-full max-h-[300px]">
                    {(() => {
                      const cx = 200;
                      const cy = 200;
                      const scale = 160 / semicircleR;
                      const r_px = semicircleR * scale;
                      const x_px = rectX * scale;
                      const y_px = Math.sqrt(Math.max(0, semicircleR * semicircleR - rectX * rectX)) * scale;

                      return (
                        <g>
                          {/* Semicircle Arc */}
                          <path
                            d={`M ${cx - r_px} ${cy} A ${r_px} ${r_px} 0 0 1 ${cx + r_px} ${cy} Z`}
                            fill="rgba(15, 23, 42, 0.7)"
                            stroke="#64748b"
                            strokeWidth="3"
                          />

                          {/* Inscribed Rectangle */}
                          <rect
                            x={cx - x_px}
                            y={cy - y_px}
                            width={2 * x_px}
                            height={y_px}
                            fill="rgba(99, 102, 241, 0.35)"
                            stroke="#818cf8"
                            strokeWidth="2.5"
                          />

                          {/* Dimensions */}
                          <text x={cx} y={cy - y_px / 2} fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="bold">
                            المساحة = {semicircleCalculations.area.toFixed(1)} cm²
                          </text>
                          <text x={cx + x_px + 8} y={cy - y_px / 2} fill="#38bdf8" fontSize="11" fontWeight="bold">
                            y = {Math.sqrt(semicircleR * semicircleR - rectX * rectX).toFixed(1)}
                          </text>
                          <text x={cx} y={cy + 18} fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
                            العرض 2x = {(2 * rectX).toFixed(1)}
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                </div>
              )}

              {/* Shortest Distance Parabola SVG */}
              {optScenario === 'shortest_distance' && (
                <div className="w-full h-[320px] rounded-xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                  <svg viewBox="0 0 400 260" className="w-full h-full max-h-[300px]">
                    {(() => {
                      const ox = 200;
                      const oy = 220;
                      const scale = 25;

                      // Generate parabola points
                      const pts: string[] = [];
                      for (let px = -4; px <= 4; px += 0.2) {
                        const py = parabolaK * px * px;
                        pts.push(`${(ox + px * scale).toFixed(1)},${(oy - py * scale).toFixed(1)}`);
                      }

                      const p0_x = ox + pointX0 * scale;
                      const p0_y = oy - pointY0 * scale;

                      const probe_x = ox + probeX * scale;
                      const probe_y = oy - parabolaCalculations.y * scale;

                      return (
                        <g>
                          {/* Axes */}
                          <line x1="20" y1={oy} x2="380" y2={oy} stroke="#475569" strokeWidth="1.5" />
                          <line x1={ox} y1="20" x2={ox} y2="250" stroke="#475569" strokeWidth="1.5" />

                          {/* Parabola Curve */}
                          <polyline points={pts.join(' ')} fill="none" stroke="#6366f1" strokeWidth="3" />

                          {/* Distance Segment */}
                          <line
                            x1={p0_x}
                            y1={p0_y}
                            x2={probe_x}
                            y2={probe_y}
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                          />
                          <text
                            x={(p0_x + probe_x) / 2 + 10}
                            y={(p0_y + probe_y) / 2}
                            fill="#f59e0b"
                            fontSize="11"
                            fontWeight="bold"
                          >
                            D = {parabolaCalculations.dist.toFixed(2)}
                          </text>

                          {/* Target Point P */}
                          <circle cx={p0_x} cy={p0_y} r="6" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                          <text x={p0_x} y={p0_y - 10} fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">
                            P({pointX0}, {pointY0})
                          </text>

                          {/* Probe Point on Parabola */}
                          <circle cx={probe_x} cy={probe_y} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                          <text x={probe_x} y={probe_y + 16} fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold">
                            ({parabolaCalculations.x.toFixed(1)}, {parabolaCalculations.y.toFixed(1)})
                          </text>
                        </g>
                      );
                    })()}
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------------------- */}
      {/* Tab 3: Official Thanawya Amma Ministerial Exam Solvers */}
      {/* --------------------------------------------------------------------- */}
      {activeTab === 'ministerial_solver' && (
        <div className="flex flex-col gap-6">
          {/* Exam Preset Selector Ribbon */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg}`}>
            <h3 className="text-sm font-extrabold flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>{isArabic ? 'نماذج امتحانات الثانوية العامة الرسمية المحلولة خطوة بخطوة' : 'Official Ministerial Solved Exam Problems'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: 'exam2024', titleAr: 'امتحان 2024: انزلاق السلم والزاوية', titleEn: '2024: Ladder & Angle Rate', tag: 'تفاضل ب1' },
                { id: 'exam2023', titleAr: 'امتحان 2023: تسرب الماء في المخروط', titleEn: '2023: Inverted Cone Leakage', tag: 'تفاضل ب1' },
                { id: 'exam2022', titleAr: 'امتحان 2022: ظل الرجل ونهاية الظل', titleEn: '2022: Lamp Post & Shadow Tip', tag: 'تفاضل ب1' },
                { id: 'box_classic', titleAr: 'مسألة وزارية: صندوق السعة القصوى', titleEn: 'Classic: Max Box Capacity', tag: 'تطبيقات ب3' },
              ].map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setSelectedExamPreset(ex.id as any)}
                  className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer ${
                    selectedExamPreset === ex.id
                      ? isContrast
                        ? 'bg-indigo-400 text-black border-white'
                        : 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                      : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-900/60 text-indigo-300 border border-indigo-500/30">
                      {ex.tag}
                    </span>
                  </div>
                  <div className="text-xs font-bold">{isArabic ? ex.titleAr : ex.titleEn}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Solved Problem Breakdown Card */}
          <div className={`p-5 sm:p-7 rounded-2xl border ${cardBg}`}>
            {selectedExamPreset === 'exam2024' && (
              <div className="space-y-5">
                <div className="border-b border-slate-700/60 pb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {isArabic ? 'امتحان الدور الأول 2024 — شعبة الرياضيات' : '2024 Official Exam — Mathematics Section'}
                  </span>
                  <h4 className="text-base font-black text-slate-100 mt-1">
                    {isArabic
                      ? 'مسألة السلم المستند على حائط ومعدل تغير زاوية الميل'
                      : 'Sliding Ladder & Inclination Angle Derivative'}
                  </h4>
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                    {isArabic
                      ? '«سُلّم طوله ١٠ أمتار يستند بطرفه العلوي على حائط رأسي وبطرفه السفلي على أرض أفقية. فإذا انزلق الطرف السفلي مبتعداً عن الحائط بمعدل ٢ م/ث، فما معدل هبوط الطرف العلوي عندما يبعد الطرف السفلي ٦ أمتار عن الحائط؟ وما معدل تغير زاوية ميل السلم على الأفقي حينئذ؟»'
                      : 'A ladder of length 10 m leans against a vertical wall and rests on a horizontal floor. The base slides away from the wall at 2 m/s. Find the rate of drop of the top end when the base is 6 m from the wall, and the rate of change of the angle of inclination.'}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? 'خطوات الحل والاشتقاق النموذجي الكامل:' : 'Step-by-Step Mathematical Derivation:'}</span>
                  </h5>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '١. إيجاد الارتفاع الرأسي اللحظي y بواسطة نظرية فيثاغورس:' : '1. Find vertical height y using Pythagorean Theorem:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="x^2 + y^2 = L^2 \implies (6)^2 + y^2 = (10)^2 \implies 36 + y^2 = 100 \implies y = \sqrt{64} = 8\text{ m}" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٢. اشتقاق العلاقة بالنسبة للزمن t لحساب معدل هبوط الطرف العلوي (dy/dt):' : '2. Differentiate implicitly with respect to t:'}</div>
                      <div className="font-mono text-slate-200 space-y-1">
                        <MathRenderer math="2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0 \implies x \frac{dx}{dt} + y \frac{dy}{dt} = 0" />
                        <MathRenderer math="(6)(2) + (8)\frac{dy}{dt} = 0 \implies 12 + 8\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{12}{8} = -1.5\text{ m/s}" />
                      </div>
                      <div className="text-[11px] text-emerald-400 mt-1">
                        {isArabic ? 'إذن الطرف العلوي يهبط بمعدل ١.٥ م/ث (الإشارة السالبة تعني تناقص الارتفاع).' : 'Hence the upper end drops at a speed of 1.5 m/s.'}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٣. حساب معدل تغير زاوية ميل السلم على الأفقي (dθ/dt):' : '3. Compute rate of change of inclination angle dθ/dt:'}</div>
                      <div className="font-mono text-slate-200 space-y-1">
                        <MathRenderer math="\cos\theta = \frac{x}{L} = \frac{x}{10}" />
                        <MathRenderer math="-\sin\theta \frac{d\theta}{dt} = \frac{1}{10} \frac{dx}{dt}" />
                        <MathRenderer math="\text{Since } \sin\theta = \frac{y}{L} = \frac{8}{10} = 0.8:" />
                        <MathRenderer math="-(0.8) \frac{d\theta}{dt} = \frac{1}{10}(2) = 0.2 \implies \frac{d\theta}{dt} = -\frac{0.2}{0.8} = -0.25\text{ rad/s}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedExamPreset === 'exam2023' && (
              <div className="space-y-5">
                <div className="border-b border-slate-700/60 pb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {isArabic ? 'امتحان الدور الأول 2023 — شعبة الرياضيات' : '2023 Official Exam — Mathematics Section'}
                  </span>
                  <h4 className="text-base font-black text-slate-100 mt-1">
                    {isArabic
                      ? 'مسألة الوعاء المخروطي ومعدل ارتفاع السائل'
                      : 'Inverted Conical Tank Liquid Rise Rate'}
                  </h4>
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                    {isArabic
                      ? '«وعاء على شكل مخروط دائري قائم رأسه لأسفل، نصف قطر قاعدته ٦ سم وارتفاعه ١٢ سم. يصب فيه الماء بمعدل ٨ سم³/ث. أوجد معدل ارتفاع سطح الماء في اللحظة التي يكون فيها عمق الماء ٤ سم.»'
                      : 'A vessel shaped like an inverted right circular cone with top radius 6 cm and height 12 cm has water poured into it at 8 cm³/s. Find the rate of liquid level rise when depth is 4 cm.'}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? 'خطوات الحل والاشتقاق الكامل:' : 'Derivation Steps:'}</span>
                  </h5>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '١. علاقة نصف القطر بالعمق من تشابه المثلثات:' : '1. Radius-to-height relationship from similar triangles:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="\frac{r}{h} = \frac{R}{H} = \frac{6}{12} = \frac{1}{2} \implies r = \frac{h}{2}" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٢. التعبير عن الحجم بدلالة متغير واحد h:' : '2. Volume expressed in variable h only:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="V = \frac{1}{3} \pi r^2 h = \frac{1}{3} \pi \left(\frac{h}{2}\right)^2 h = \frac{1}{12} \pi h^3" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٣. الاشتقاق بالنسبة للزمن t والتعويض بالقيم اللحظية:' : '3. Implicit differentiation with respect to t:'}</div>
                      <div className="font-mono text-slate-200 space-y-1">
                        <MathRenderer math="\frac{dV}{dt} = \frac{1}{12} \pi (3h^2) \frac{dh}{dt} = \frac{1}{4} \pi h^2 \frac{dh}{dt}" />
                        <MathRenderer math="\text{At } h = 4\text{ and } \frac{dV}{dt} = 8:" />
                        <MathRenderer math="8 = \frac{1}{4} \pi (4)^2 \frac{dh}{dt} = 4\pi \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{8}{4\pi} = \frac{2}{\pi}\text{ cm/s} \approx 0.637\text{ cm/s}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedExamPreset === 'exam2022' && (
              <div className="space-y-5">
                <div className="border-b border-slate-700/60 pb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {isArabic ? 'امتحان الدور الأول 2022 — شعبة الرياضيات' : '2022 Official Exam — Mathematics Section'}
                  </span>
                  <h4 className="text-base font-black text-slate-100 mt-1">
                    {isArabic
                      ? 'مسألة حركة الرجل وظل مصباح الإنارة ونهاية الظل'
                      : 'Moving Person, Lamp Shadow Growth & Shadow Tip Speed'}
                  </h4>
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                    {isArabic
                      ? '«رجل طوله ١.٨ متر يسير على أرض أفقية بسرعة ١.٢ م/ث في خط مستقيم مبتعداً عن قاعدة عمود إنارة يعلوه مصباح يرتفع ٥.٤ أمتار عن الأرض. أوجد: (١) معدل تغير طول ظل الرجل، (٢) سرعة حركة نهاية الظل.»'
                      : 'A person of height 1.8 m walks away from a 5.4 m high lamp post at 1.2 m/s. Find: (1) the rate of shadow growth, (2) the velocity of the shadow tip.'}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? 'خطوات الحل والاشتقاق الكامل:' : 'Derivation Steps:'}</span>
                  </h5>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '١. علاقة تشابه المثلثات بين الرجل وعمود الإنارة:' : '1. Similar Triangles Geometric Constraint:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="\frac{H}{h} = \frac{x + s}{s} \implies \frac{5.4}{1.8} = 3 = \frac{x+s}{s} \implies 3s = x + s \implies 2s = x \implies s = \frac{1}{2}x" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٢. معدل تغير طول الظل ds/dt:' : '2. Rate of Shadow Growth ds/dt:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="\frac{ds}{dt} = \frac{1}{2} \frac{dx}{dt} = \frac{1}{2}(1.2) = 0.6\text{ m/s}" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٣. سرعة حركة نهاية الظل d(x + s)/dt:' : '3. Velocity of Shadow Tip d(x+s)/dt:'}</div>
                      <div className="font-mono text-slate-200">
                        <MathRenderer math="v_{tip} = \frac{d(x + s)}{dt} = \frac{dx}{dt} + \frac{ds}{dt} = 1.2 + 0.6 = 1.8\text{ m/s}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedExamPreset === 'box_classic' && (
              <div className="space-y-5">
                <div className="border-b border-slate-700/60 pb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {isArabic ? 'تطبيقات القيم العظمى والصغرى — كتاب الوزارة والامتحانات' : 'Applied Optimization Classic — Ministry Textbook & Exams'}
                  </span>
                  <h4 className="text-base font-black text-slate-100 mt-1">
                    {isArabic
                      ? 'صندوق ذو سعة عظمى مقطوع الزوايا من صفيحة مستطيلة (٢٤ سم × ١٥ سم)'
                      : 'Max Volume Box Cut from Rectangular Sheet (24 cm x 15 cm)'}
                  </h4>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="font-bold text-indigo-300 mb-1">{isArabic ? '١. صياغة دالة الحجم V(x):' : '1. Volume Function Formulation:'}</div>
                    <div className="font-mono text-slate-200">
                      <MathRenderer math="V(x) = x(24 - 2x)(15 - 2x) = 4x^3 - 78x^2 + 360x" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٢. إيجاد النقاط الحرجة بمساواة المشتقة الأولى بالصفر:' : '2. Critical Points via V\'(x) = 0:'}</div>
                    <div className="font-mono text-slate-200 space-y-1">
                      <MathRenderer math="V'(x) = 12x^2 - 156x + 360 = 0 \implies x^2 - 13x + 30 = 0" />
                      <MathRenderer math="(x - 3)(x - 10) = 0 \implies x = 3\text{ or } x = 10" />
                    </div>
                    <div className="text-[11px] text-amber-400 mt-1">
                      {isArabic ? 'قيمة x = 10 مرفوضة لأن 2x = 20 أكبر من عرض الصفيحة (15 سم). إذن x = 3 سم.' : 'x = 10 is rejected as 2x = 20 exceeds width (15 cm). Thus x = 3 cm.'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
                    <div className="font-bold text-indigo-300 mb-1">{isArabic ? '٣. اختبار المشتقة الثانية وحساب الحجم الأقصى:' : '3. Second Derivative Test & Max Volume:'}</div>
                    <div className="font-mono text-slate-200 space-y-1">
                      <MathRenderer math="V''(x) = 24x - 156 \implies V''(3) = 24(3) - 156 = 72 - 156 = -84 < 0 \implies \text{Maximum}" />
                      <MathRenderer math="V_{max} = 3(24 - 6)(15 - 6) = 3(18)(9) = 486\text{ cm}^3" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
