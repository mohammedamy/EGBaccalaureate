import React, { useEffect, useRef, useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  initialModule?: CalculusModule;
}

export type CalculusModule = 'tangent_normal' | 'curve_analysis' | 'integration_riemann';
export type FunctionKey = 'cubic' | 'quartic' | 'quadratic' | 'sine' | 'gaussian' | 'rational';
export type RiemannRule = 'midpoint' | 'trapezoid' | 'left' | 'right';

interface FunctionDef {
  key: FunctionKey;
  labelEn: string;
  labelAr: string;
  latex: string;
  f: (x: number) => number;
  df: (x: number) => number;
  d2f: (x: number) => number;
  exactIntegral: (a: number, b: number) => number;
  criticalPoints: number[];
  inflectionPoints: number[];
}

const FUNCTIONS_REGISTRY: Record<FunctionKey, FunctionDef> = {
  cubic: {
    key: 'cubic',
    labelEn: 'Cubic S-Curve',
    labelAr: 'دالة تكعيبية',
    latex: 'f(x) = \\frac{1}{4}(x^3 - 3x)',
    f: (x) => 0.25 * (x * x * x - 3 * x),
    df: (x) => 0.25 * (3 * x * x - 3),
    d2f: (x) => 1.5 * x,
    exactIntegral: (a, b) => {
      const F = (x: number) => 0.25 * (0.25 * x ** 4 - 1.5 * x ** 2);
      return F(b) - F(a);
    },
    criticalPoints: [-1, 1],
    inflectionPoints: [0],
  },
  quartic: {
    key: 'quartic',
    labelEn: 'W-Curve (Quartic)',
    labelAr: 'دالة من الدرجة الرابعة (شكل W)',
    latex: 'f(x) = \\frac{1}{5}(x^4 - 4x^2)',
    f: (x) => 0.2 * (x ** 4 - 4 * x ** 2),
    df: (x) => 0.2 * (4 * x ** 3 - 8 * x),
    d2f: (x) => 0.2 * (12 * x ** 2 - 8),
    exactIntegral: (a, b) => {
      const F = (x: number) => 0.2 * (0.2 * x ** 5 - (4 / 3) * x ** 3);
      return F(b) - F(a);
    },
    criticalPoints: [-Math.SQRT2, 0, Math.SQRT2],
    inflectionPoints: [-Math.sqrt(2 / 3), Math.sqrt(2 / 3)],
  },
  quadratic: {
    key: 'quadratic',
    labelEn: 'Parabola',
    labelAr: 'قطع مكافئ (دالة تربيعية)',
    latex: 'f(x) = \\frac{1}{2}x^2 - 1.5',
    f: (x) => 0.5 * x * x - 1.5,
    df: (x) => x,
    d2f: () => 1,
    exactIntegral: (a, b) => {
      const F = (x: number) => (1 / 6) * x ** 3 - 1.5 * x;
      return F(b) - F(a);
    },
    criticalPoints: [0],
    inflectionPoints: [],
  },
  sine: {
    key: 'sine',
    labelEn: 'Trigonometric Sine',
    labelAr: 'دالة جيبية دورية',
    latex: 'f(x) = 2\\sin(x)',
    f: (x) => 2 * Math.sin(x),
    df: (x) => 2 * Math.cos(x),
    d2f: (x) => -2 * Math.sin(x),
    exactIntegral: (a, b) => {
      const F = (x: number) => -2 * Math.cos(x);
      return F(b) - F(a);
    },
    criticalPoints: [-Math.PI / 2, Math.PI / 2],
    inflectionPoints: [-Math.PI, 0, Math.PI],
  },
  gaussian: {
    key: 'gaussian',
    labelEn: 'Gaussian Bell Curve',
    labelAr: 'منحنى الجرس الغاوسي',
    latex: 'f(x) = 2.5e^{-0.5x^2}',
    f: (x) => 2.5 * Math.exp(-0.5 * x * x),
    df: (x) => -2.5 * x * Math.exp(-0.5 * x * x),
    d2f: (x) => 2.5 * (x * x - 1) * Math.exp(-0.5 * x * x),
    exactIntegral: (a, b) => {
      // High-precision Simpson integration
      const n = 1000;
      const h = (b - a) / n;
      const g = (x: number) => 2.5 * Math.exp(-0.5 * x * x);
      let sum = g(a) + g(b);
      for (let i = 1; i < n; i += 2) sum += 4 * g(a + i * h);
      for (let i = 2; i < n; i += 2) sum += 2 * g(a + i * h);
      return (sum * h) / 3;
    },
    criticalPoints: [0],
    inflectionPoints: [-1, 1],
  },
  rational: {
    key: 'rational',
    labelEn: 'Rational Curve',
    labelAr: 'دالة كسرية متماثلة',
    latex: 'f(x) = \\frac{3x}{x^2 + 1}',
    f: (x) => (3 * x) / (x * x + 1),
    df: (x) => (3 * (1 - x * x)) / (x * x + 1) ** 2,
    d2f: (x) => (6 * x * (x * x - 3)) / (x * x + 1) ** 3,
    exactIntegral: (a, b) => {
      const F = (x: number) => 1.5 * Math.log(x * x + 1);
      return F(b) - F(a);
    },
    criticalPoints: [-1, 1],
    inflectionPoints: [-Math.sqrt(3), 0, Math.sqrt(3)],
  },
};

export const InteractiveCalculusTangent: React.FC<Props> = ({
  lang,
  theme = 'dark',
  initialModule = 'tangent_normal',
}) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeModule, setActiveModule] = useState<CalculusModule>(initialModule);
  const [funcKey, setFuncKey] = useState<FunctionKey>('cubic');

  // Module 1 & 2: Point of tangency & increment h
  const [pointX, setPointX] = useState<number>(1.2);
  const [stepH, setStepH] = useState<number>(0.8);
  const [showNormalLine, setShowNormalLine] = useState<boolean>(true);
  const [showSecantLine, setShowSecantLine] = useState<boolean>(true);
  const [showCurvatureCircle, setShowCurvatureCircle] = useState<boolean>(true);

  // Module 3: Integration limits & Riemann sums
  const [limitA, setLimitA] = useState<number>(-1.0);
  const [limitB, setLimitB] = useState<number>(2.0);
  const [riemannN, setRiemannN] = useState<number>(12);
  const [riemannRule, setRiemannRule] = useState<RiemannRule>('midpoint');
  const [showRiemannRectangles, setShowRiemannRectangles] = useState<boolean>(true);

  const curFunc = FUNCTIONS_REGISTRY[funcKey];

  // --------------------------------------------------------------------------
  // Mathematical Calculations
  // --------------------------------------------------------------------------
  const fx0 = curFunc.f(pointX);
  const fx0h = curFunc.f(pointX + stepH);
  const secantSlope = (fx0h - fx0) / stepH;
  const tangentSlope = curFunc.df(pointX);

  // Tangent Equation: y - fx0 = tangentSlope * (x - pointX)
  // y = tangentSlope * x + (fx0 - tangentSlope * pointX)
  const tanYIntercept = fx0 - tangentSlope * pointX;
  const tanXIntercept = Math.abs(tangentSlope) > 1e-4 ? pointX - fx0 / tangentSlope : null;
  const tanAngleDeg = Math.round((Math.atan(tangentSlope) * 180) / Math.PI);

  // Normal Equation: y - fx0 = normalSlope * (x - pointX)
  const isNormalVertical = Math.abs(tangentSlope) < 1e-5;
  const normalSlope = isNormalVertical ? 0 : -1 / tangentSlope;
  const normYIntercept = !isNormalVertical ? fx0 - normalSlope * pointX : null;

  // Second derivative & Curvature
  const d2Val = curFunc.d2f(pointX);
  const isCritical = Math.abs(tangentSlope) < 0.05;
  const isInflectionCandidate = Math.abs(d2Val) < 0.08;
  const isIncreasing = tangentSlope > 0.05;
  const isConcaveUp = d2Val > 0.05;

  // Curvature radius & center of curvature (Osculating Circle)
  const curvatureKappa = Math.abs(d2Val) / Math.pow(1 + tangentSlope * tangentSlope, 1.5);
  const radiusCurvature = curvatureKappa > 1e-4 ? 1 / curvatureKappa : 999;
  const centerCurvX = Math.abs(d2Val) > 1e-4 ? pointX - (tangentSlope * (1 + tangentSlope ** 2)) / d2Val : pointX;
  const centerCurvY = Math.abs(d2Val) > 1e-4 ? fx0 + (1 + tangentSlope ** 2) / d2Val : fx0;

  // Riemann Sum Calculation
  const actualA = Math.min(limitA, limitB);
  const actualB = Math.max(limitA, limitB);
  const dx = (actualB - actualA) / riemannN;

  const riemannSumValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < riemannN; i++) {
      const xLeft = actualA + i * dx;
      const xRight = actualA + (i + 1) * dx;
      if (riemannRule === 'left') {
        sum += curFunc.f(xLeft) * dx;
      } else if (riemannRule === 'right') {
        sum += curFunc.f(xRight) * dx;
      } else if (riemannRule === 'midpoint') {
        sum += curFunc.f(xLeft + dx / 2) * dx;
      } else if (riemannRule === 'trapezoid') {
        sum += 0.5 * (curFunc.f(xLeft) + curFunc.f(xRight)) * dx;
      }
    }
    return sum;
  }, [curFunc, actualA, actualB, riemannN, riemannRule, dx]);

  const exactIntegralVal = useMemo(() => {
    return curFunc.exactIntegral(actualA, actualB);
  }, [curFunc, actualA, actualB]);

  const integralError = Math.abs(riemannSumValue - exactIntegralVal);
  const percentError =
    Math.abs(exactIntegralVal) > 1e-4 ? (integralError / Math.abs(exactIntegralVal)) * 100 : 0;

  // Solid of revolution around X-axis: V = pi * integral y^2 dx
  const revolutionVolumeX = useMemo(() => {
    const slices = 400;
    const h = (actualB - actualA) / slices;
    let sum = 0;
    for (let i = 0; i < slices; i++) {
      const midX = actualA + (i + 0.5) * h;
      const y = curFunc.f(midX);
      sum += Math.PI * y * y * h;
    }
    return sum;
  }, [curFunc, actualA, actualB]);

  // Cylindrical shells revolution volume around Y-axis: V = 2pi * integral |x * f(x)| dx
  const revolutionVolumeY = useMemo(() => {
    const slices = 400;
    const h = (actualB - actualA) / slices;
    let sum = 0;
    for (let i = 0; i < slices; i++) {
      const midX = actualA + (i + 0.5) * h;
      const y = Math.abs(curFunc.f(midX));
      sum += 2 * Math.PI * Math.abs(midX) * y * h;
    }
    return sum;
  }, [curFunc, actualA, actualB]);

  // --------------------------------------------------------------------------
  // Canvas Coordinate Mapping & Drawing Engine
  // --------------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight || 400;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = displayWidth;
    const height = displayHeight;

    // Background
    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#04091a';
    ctx.fillRect(0, 0, width, height);

    // Coordinates setup
    const originX = width / 2;
    const originY = height / 2;
    const scale = Math.min(width, height) / 8.5; // ~50px per unit

    const toCanvasX = (x: number) => originX + x * scale;
    const toCanvasY = (y: number) => originY - y * scale;
    const toMathX = (cx: number) => (cx - originX) / scale;

    // 1. Grid lines & numeric ticks
    ctx.strokeStyle = isContrast ? '#1f2937' : isLight ? '#e2e8f0' : '#131e3a';
    ctx.lineWidth = 1;
    ctx.font = '10px monospace';
    ctx.fillStyle = isLight ? '#64748b' : '#475569';

    for (let x = -8; x <= 8; x++) {
      const cx = toCanvasX(x);
      if (cx < 0 || cx > width) continue;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();
      if (x !== 0) {
        ctx.fillText(String(x), cx - 4, originY + 12);
      }
    }
    for (let y = -6; y <= 6; y++) {
      const cy = toCanvasY(y);
      if (cy < 0 || cy > height) continue;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
      if (y !== 0) {
        ctx.fillText(String(y), originX + 5, cy + 3);
      }
    }

    // 2. Axes
    ctx.strokeStyle = isContrast ? '#9ca3af' : isLight ? '#475569' : '#64748b';
    ctx.lineWidth = 1.8;
    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    // Y Axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // ========================================================================
    // Module 3: Shaded Integral Area & Riemann Rectangles
    // ========================================================================
    if (activeModule === 'integration_riemann') {
      // 1. Shaded Exact Area under Curve between [actualA, actualB]
      ctx.fillStyle = isLight ? 'rgba(99, 102, 241, 0.22)' : 'rgba(99, 102, 241, 0.28)';
      ctx.beginPath();
      ctx.moveTo(toCanvasX(actualA), originY);
      const stepSamples = 120;
      for (let i = 0; i <= stepSamples; i++) {
        const x = actualA + (i / stepSamples) * (actualB - actualA);
        ctx.lineTo(toCanvasX(x), toCanvasY(curFunc.f(x)));
      }
      ctx.lineTo(toCanvasX(actualB), originY);
      ctx.closePath();
      ctx.fill();

      // 2. Riemann Rectangles
      if (showRiemannRectangles) {
        for (let i = 0; i < riemannN; i++) {
          const xLeft = actualA + i * dx;
          const xRight = actualA + (i + 1) * dx;
          let sampleX = xLeft;
          if (riemannRule === 'right') sampleX = xRight;
          else if (riemannRule === 'midpoint') sampleX = xLeft + dx / 2;
          else if (riemannRule === 'trapezoid') sampleX = xLeft;

          if (riemannRule === 'trapezoid') {
            const yL = curFunc.f(xLeft);
            const yR = curFunc.f(xRight);
            ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 185, 129, 0.25)';
            ctx.strokeStyle = isLight ? '#059669' : '#10b981';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(toCanvasX(xLeft), originY);
            ctx.lineTo(toCanvasX(xLeft), toCanvasY(yL));
            ctx.lineTo(toCanvasX(xRight), toCanvasY(yR));
            ctx.lineTo(toCanvasX(xRight), originY);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          } else {
            const sampleY = curFunc.f(sampleX);
            const rectLeftX = toCanvasX(xLeft);
            const rectWidth = toCanvasX(xRight) - rectLeftX;
            const rectTopY = toCanvasY(Math.max(0, sampleY));
            const rectHeight = Math.abs(toCanvasY(sampleY) - originY);

            ctx.fillStyle = isLight ? 'rgba(14, 165, 233, 0.24)' : 'rgba(56, 189, 248, 0.25)';
            ctx.strokeStyle = isLight ? '#0284c7' : '#38bdf8';
            ctx.lineWidth = 1.2;
            ctx.fillRect(rectLeftX, sampleY >= 0 ? rectTopY : originY, rectWidth, rectHeight);
            ctx.strokeRect(rectLeftX, sampleY >= 0 ? rectTopY : originY, rectWidth, rectHeight);

            // Sample point marker on rectangle top
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(toCanvasX(sampleX), toCanvasY(sampleY), 2.5, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      }

      // 3. Boundary lines at a and b
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      // Line a
      ctx.beginPath();
      ctx.moveTo(toCanvasX(actualA), 0);
      ctx.lineTo(toCanvasX(actualA), height);
      ctx.stroke();
      // Line b
      ctx.beginPath();
      ctx.moveTo(toCanvasX(actualB), 0);
      ctx.lineTo(toCanvasX(actualB), height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Boundary Labels
      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`a = ${actualA.toFixed(1)}`, toCanvasX(actualA) - 16, originY + 24);
      ctx.fillText(`b = ${actualB.toFixed(1)}`, toCanvasX(actualB) - 4, originY + 24);
    }

    // ========================================================================
    // 3. Curve f(x)
    // ========================================================================
    ctx.strokeStyle = isContrast ? '#38bdf8' : isLight ? '#2563eb' : '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    let firstPt = true;
    for (let px = 0; px <= width; px += 2) {
      const realX = toMathX(px);
      const realY = curFunc.f(realX);
      if (isNaN(realY) || !isFinite(realY)) continue;
      const py = toCanvasY(realY);

      if (firstPt) {
        ctx.moveTo(px, py);
        firstPt = false;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // ========================================================================
    // Module 1: Tangent, Normal & Secant Lines
    // ========================================================================
    if (activeModule === 'tangent_normal') {
      const span = 6;

      // 1. Secant Line (Amber/Orange dashed)
      if (showSecantLine) {
        ctx.strokeStyle = isLight ? '#d97706' : '#f59e0b';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        const secY1 = fx0 + secantSlope * (pointX - span - pointX);
        const secY2 = fx0 + secantSlope * (pointX + span - pointX);
        ctx.moveTo(toCanvasX(pointX - span), toCanvasY(secY1));
        ctx.lineTo(toCanvasX(pointX + span), toCanvasY(secY2));
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 2. Tangent Line (Emerald Green)
      ctx.strokeStyle = isLight ? '#059669' : '#10b981';
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      const tanY1 = fx0 + tangentSlope * (pointX - span - pointX);
      const tanY2 = fx0 + tangentSlope * (pointX + span - pointX);
      ctx.moveTo(toCanvasX(pointX - span), toCanvasY(tanY1));
      ctx.lineTo(toCanvasX(pointX + span), toCanvasY(tanY2));
      ctx.stroke();

      // 3. Normal Line (Violet/Purple)
      if (showNormalLine) {
        ctx.strokeStyle = isLight ? '#7c3aed' : '#a855f7';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        if (isNormalVertical) {
          ctx.moveTo(toCanvasX(pointX), 0);
          ctx.lineTo(toCanvasX(pointX), height);
        } else {
          const normY1 = fx0 + normalSlope * (pointX - span - pointX);
          const normY2 = fx0 + normalSlope * (pointX + span - pointX);
          ctx.moveTo(toCanvasX(pointX - span), toCanvasY(normY1));
          ctx.lineTo(toCanvasX(pointX + span), toCanvasY(normY2));
        }
        ctx.stroke();
      }

      // 4. Point A (x0, f(x0))
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(toCanvasX(pointX), toCanvasY(fx0), 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 5. Point B (x0 + h, f(x0 + h))
      if (showSecantLine) {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(toCanvasX(pointX + stepH), toCanvasY(fx0h), 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // ========================================================================
    // Module 2: Curve Analysis, Critical Extrema & Curvature Circle
    // ========================================================================
    if (activeModule === 'curve_analysis') {
      // 1. Osculating Circle (Curvature Circle)
      if (showCurvatureCircle && radiusCurvature < 8 && radiusCurvature > 0.1) {
        const canCenterCX = toCanvasX(centerCurvX);
        const canCenterCY = toCanvasY(centerCurvY);
        const canRadius = radiusCurvature * scale;

        ctx.strokeStyle = isLight ? 'rgba(168, 85, 247, 0.7)' : 'rgba(192, 132, 252, 0.7)';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.arc(canCenterCX, canCenterCY, canRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);

        // Center dot
        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(canCenterCX, canCenterCY, 3, 0, 2 * Math.PI);
        ctx.fill();
      }

      // 2. Critical points highlights
      curFunc.criticalPoints.forEach((cxVal) => {
        const cyVal = curFunc.f(cxVal);
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(toCanvasX(cxVal), toCanvasY(cyVal), 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // 3. Inflection points highlights
      curFunc.inflectionPoints.forEach((ixVal) => {
        const iyVal = curFunc.f(ixVal);
        ctx.fillStyle = '#f43f5e';
        ctx.beginPath();
        ctx.arc(toCanvasX(ixVal), toCanvasY(iyVal), 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Current Point Marker
      ctx.fillStyle = isCritical ? '#facc15' : isInflectionCandidate ? '#f43f5e' : '#38bdf8';
      ctx.beginPath();
      ctx.arc(toCanvasX(pointX), toCanvasY(fx0), 6.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [
    activeModule,
    funcKey,
    curFunc,
    pointX,
    stepH,
    showNormalLine,
    showSecantLine,
    showCurvatureCircle,
    limitA,
    limitB,
    riemannN,
    riemannRule,
    showRiemannRectangles,
    fx0,
    fx0h,
    secantSlope,
    tangentSlope,
    normalSlope,
    isNormalVertical,
    radiusCurvature,
    centerCurvX,
    centerCurvY,
    actualA,
    actualB,
    dx,
    isLight,
    isContrast,
  ]);

  // --------------------------------------------------------------------------
  // Canvas Mouse & Touch Drag Interaction
  // --------------------------------------------------------------------------
  const isDraggingCanvasRef = useRef<boolean>(false);
  const dragTargetRef = useRef<'pointX' | 'limitA' | 'limitB'>('pointX');

  const handleCanvasPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    isDraggingCanvasRef.current = true;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const originX = rect.width / 2;
    const scale = Math.min(rect.width, rect.height) / 8.5;
    const mathX = (clickX - originX) / scale;

    if (activeModule === 'integration_riemann') {
      const distToA = Math.abs(mathX - limitA);
      const distToB = Math.abs(mathX - limitB);
      if (distToA < distToB) {
        dragTargetRef.current = 'limitA';
        setLimitA(Math.round(mathX * 10) / 10);
      } else {
        dragTargetRef.current = 'limitB';
        setLimitB(Math.round(mathX * 10) / 10);
      }
    } else {
      dragTargetRef.current = 'pointX';
      setPointX(Math.max(-3.5, Math.min(3.5, Math.round(mathX * 10) / 10)));
    }
  };

  const handleCanvasPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingCanvasRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const originX = rect.width / 2;
    const scale = Math.min(rect.width, rect.height) / 8.5;
    const mathX = (clickX - originX) / scale;

    if (activeModule === 'integration_riemann') {
      if (dragTargetRef.current === 'limitA') {
        setLimitA(Math.max(-4, Math.min(4, Math.round(mathX * 10) / 10)));
      } else {
        setLimitB(Math.max(-4, Math.min(4, Math.round(mathX * 10) / 10)));
      }
    } else {
      setPointX(Math.max(-3.5, Math.min(3.5, Math.round(mathX * 10) / 10)));
    }
  };

  const handleCanvasPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingCanvasRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture was lost
    }
  };

  // --------------------------------------------------------------------------
  // Reusable Dual Input Control (Slider + Decimal Text Input)
  // --------------------------------------------------------------------------
  const NumberControl: React.FC<{
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    accentClass?: string;
    onChange: (val: number) => void;
  }> = ({ label, value, min, max, step, accentClass = 'accent-indigo-600', onChange }) => {
    return (
      <div className="flex items-center gap-2">
        <label className={`text-[11px] font-bold w-16 shrink-0 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {label}:
        </label>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full h-1.5 rounded-lg cursor-pointer ${accentClass}`}
        />
        <input
          type="text"
          inputMode="decimal"
          value={isArabic ? toHindiDigits(value) : value}
          onChange={(e) => {
            const raw = e.target.value
              .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
              .replace(',', '.');
            const parsed = parseFloat(raw);
            if (!isNaN(parsed)) {
              onChange(parsed);
            }
          }}
          className={`w-14 px-1.5 py-0.5 text-xs text-center font-mono font-bold rounded-md border transition-all ${
            isContrast
              ? 'bg-black text-white border-slate-600'
              : isLight
              ? 'bg-white text-slate-900 border-slate-300 focus:border-indigo-500'
              : 'bg-slate-900 text-slate-100 border-slate-700 focus:border-indigo-400'
          }`}
        />
      </div>
    );
  };

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-6 shadow-xl space-y-6 transition-colors ${
        isContrast
          ? 'bg-black border-2 border-indigo-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900'
          : 'bg-slate-900/90 border-slate-800 text-slate-100'
      }`}
    >
      {/* Studio Header & Module Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-4 border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-black flex items-center gap-2 tracking-tight">
              <span className="text-indigo-400">📈</span>
              <span>
                {isArabic
                  ? 'مختبر التفاضل والتكامل والتحليل الحقيقي التفاعلي'
                  : 'Interactive Calculus & Real Analysis Studio'}
              </span>
            </h3>
            <span
              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                isContrast
                  ? 'bg-indigo-400 text-black border-indigo-300'
                  : isLight
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60'
              }`}
            >
              Differential & Integral
            </span>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'مماسات المنحنيات والعمودي، سلوك المشتقات ونقاط الانقلاب، ومساحات ريمان وحجوم الأجسام الدورانية'
              : 'Dynamic tangents, normals, critical inflection points, Riemann sums, and solids of revolution'}
          </p>
        </div>

        {/* Module Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveModule('tangent_normal')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeModule === 'tangent_normal'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : isLight
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{isArabic ? 'المماس والعمودي والقاطع' : 'Tangents & Normals'}</span>
          </button>

          <button
            onClick={() => setActiveModule('curve_analysis')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeModule === 'curve_analysis'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : isLight
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{isArabic ? 'النقط الحرجة والتقعر' : 'Extrema & Concavity'}</span>
          </button>

          <button
            onClick={() => setActiveModule('integration_riemann')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeModule === 'integration_riemann'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : isLight
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isArabic ? 'التكامل ومجموع ريمان' : 'Integrals & Riemann'}</span>
          </button>
        </div>
      </div>

      {/* Function Selector Carousel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border bg-slate-900/40 border-slate-800">
        <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
          {isArabic ? 'اختر الدالة الرياضية f(x):' : 'Select Test Function f(x):'}
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.keys(FUNCTIONS_REGISTRY) as FunctionKey[]).map((key) => {
            const def = FUNCTIONS_REGISTRY[key];
            const isSelected = funcKey === key;
            return (
              <button
                key={key}
                onClick={() => setFuncKey(key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : isLight
                    ? 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    : 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{isArabic ? def.labelAr : def.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Controls & Real-time Math HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Canvas Viewport */}
        <div
          className={`lg:col-span-7 p-3.5 sm:p-4 rounded-2xl border shadow-xl flex flex-col items-center transition-colors relative overflow-hidden ${
            isContrast
              ? 'bg-black border-2 border-indigo-400'
              : isLight
              ? 'bg-white border-slate-200'
              : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          {/* Canvas Viewport Header Info */}
          <div className="w-full flex items-center justify-between mb-2 text-xs px-1">
            <span className="font-mono font-bold text-indigo-400">
              <MathRenderer math={curFunc.latex} inline lang={lang} />
            </span>
            <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isArabic ? '💡 اسحب المؤشر على المنحنى لتحريك النقطة' : '💡 Drag cursor on canvas to reposition point'}
            </span>
          </div>

          {/* HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handleCanvasPointerMove}
            onPointerUp={handleCanvasPointerUp}
            className="w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-xl border border-slate-800/80 cursor-crosshair touch-none"
          />

          {/* Canvas Dynamic Color Legend */}
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-2 text-xs p-2 rounded-lg border bg-slate-950/40 border-slate-800/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-sky-400 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                Curve f(x)
              </span>

              {activeModule === 'tangent_normal' && (
                <>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    Tangent Line
                  </span>
                  {showNormalLine && (
                    <span className="font-bold text-purple-400 flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                      Normal Line (⟂)
                    </span>
                  )}
                  {showSecantLine && (
                    <span className="font-bold text-amber-400 flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      Secant (h={stepH.toFixed(2)})
                    </span>
                  )}
                </>
              )}

              {activeModule === 'curve_analysis' && (
                <>
                  <span className="font-bold text-yellow-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    Critical Point (f'=0)
                  </span>
                  <span className="font-bold text-rose-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    Inflection Point (f''=0)
                  </span>
                </>
              )}

              {activeModule === 'integration_riemann' && (
                <>
                  <span className="font-bold text-indigo-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                    Exact Area ∫f(x)dx
                  </span>
                  <span className="font-bold text-sky-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                    Riemann Rectangles (n={riemannN})
                  </span>
                </>
              )}
            </div>

            <button
              onClick={() => {
                setPointX(1.0);
                setStepH(0.8);
                setLimitA(-1.0);
                setLimitB(2.0);
              }}
              title={isArabic ? 'إعادة ضبط القيم الافتراضية' : 'Reset Parameters'}
              className="p-1 rounded-md bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Controls & Real-time Math Output Card */}
        <div className="lg:col-span-5 space-y-5">
          {/* Controls Card */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border shadow-lg space-y-4 transition-colors ${
              isContrast
                ? 'bg-black border-2 border-indigo-400 text-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <h4
              className={`text-sm font-bold uppercase tracking-wider flex items-center justify-between ${
                isLight ? 'text-indigo-700' : 'text-indigo-400'
              }`}
            >
              <span>
                {activeModule === 'tangent_normal' && (isArabic ? 'محددات المماس ونقطة التماس' : 'Tangent & Secant Controls')}
                {activeModule === 'curve_analysis' && (isArabic ? 'نقطة دراسة سلوك المنحنى والتقعر' : 'Extrema & Curvature Controls')}
                {activeModule === 'integration_riemann' && (isArabic ? 'حدود التكامل ومجموع ريمان' : 'Integration Limits & Partitions')}
              </span>
            </h4>

            {/* Controls for Module 1: Tangent & Normal */}
            {activeModule === 'tangent_normal' && (
              <div className="space-y-3">
                <NumberControl
                  label="x_0"
                  value={pointX}
                  min={-3.0}
                  max={3.0}
                  step={0.1}
                  accentClass="accent-emerald-500"
                  onChange={setPointX}
                />
                <NumberControl
                  label="Δh"
                  value={stepH}
                  min={0.05}
                  max={2.5}
                  step={0.05}
                  accentClass="accent-amber-500"
                  onChange={setStepH}
                />

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showNormalLine}
                      onChange={(e) => setShowNormalLine(e.target.checked)}
                      className="rounded accent-purple-600"
                    />
                    <span>{isArabic ? 'الخط العمودي ⟂' : 'Normal Line'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showSecantLine}
                      onChange={(e) => setShowSecantLine(e.target.checked)}
                      className="rounded accent-amber-600"
                    />
                    <span>{isArabic ? 'خط القاطع التجريبي' : 'Secant Line'}</span>
                  </label>
                </div>
              </div>
            )}

            {/* Controls for Module 2: Curve Analysis */}
            {activeModule === 'curve_analysis' && (
              <div className="space-y-3">
                <NumberControl
                  label="x_0"
                  value={pointX}
                  min={-3.0}
                  max={3.0}
                  step={0.1}
                  accentClass="accent-sky-500"
                  onChange={setPointX}
                />

                <div className="pt-1 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60">
                    <input
                      type="checkbox"
                      checked={showCurvatureCircle}
                      onChange={(e) => setShowCurvatureCircle(e.target.checked)}
                      className="rounded accent-purple-600"
                    />
                    <span>{isArabic ? 'عرض دائرة الانحناء (Osculating Circle)' : 'Show Curvature Circle'}</span>
                  </label>
                </div>
              </div>
            )}

            {/* Controls for Module 3: Integration & Riemann */}
            {activeModule === 'integration_riemann' && (
              <div className="space-y-3">
                <NumberControl
                  label="Limit a"
                  value={limitA}
                  min={-3.5}
                  max={3.5}
                  step={0.1}
                  accentClass="accent-rose-500"
                  onChange={setLimitA}
                />
                <NumberControl
                  label="Limit b"
                  value={limitB}
                  min={-3.5}
                  max={3.5}
                  step={0.1}
                  accentClass="accent-rose-500"
                  onChange={setLimitB}
                />
                <NumberControl
                  label="Partitions n"
                  value={riemannN}
                  min={4}
                  max={50}
                  step={2}
                  accentClass="accent-indigo-500"
                  onChange={setRiemannN}
                />

                {/* Riemann Rule Selector */}
                <div className="pt-1 space-y-1.5 text-xs">
                  <span className={`text-[11px] font-bold block ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {isArabic ? 'طريقة تقسيم ريمان:' : 'Riemann Approximation Rule:'}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {(['midpoint', 'trapezoid', 'left', 'right'] as RiemannRule[]).map((rule) => (
                      <button
                        key={rule}
                        onClick={() => setRiemannRule(rule)}
                        className={`py-1 text-[10px] font-bold rounded-md border transition-all capitalize cursor-pointer ${
                          riemannRule === rule
                            ? 'bg-indigo-600 text-white border-indigo-500'
                            : isLight
                            ? 'bg-slate-100 text-slate-700 border-slate-300'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {rule}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-800/60 text-xs">
                      <input
                        type="checkbox"
                        checked={showRiemannRectangles}
                        onChange={(e) => setShowRiemannRectangles(e.target.checked)}
                        className="rounded accent-sky-500"
                      />
                      <span>{isArabic ? 'عرض مستطيلات تقسيم ريمان' : 'Show Riemann Rectangles'}</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================================================================ */}
          {/* Real-Time Mathematical Calculations Card */}
          {/* ================================================================ */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border shadow-lg space-y-3 transition-colors ${
              isContrast
                ? 'bg-black border-2 border-emerald-400 text-white'
                : isLight
                ? 'bg-white border-slate-200'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <h4
              className={`text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                isLight ? 'text-emerald-800' : 'text-emerald-400'
              }`}
            >
              <span>{isArabic ? 'الحسابات الرياضية الدقيقة' : 'Real-Time Calculus Metrics'}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </h4>

            {/* Module 1 Output: Tangent & Normal Lines */}
            {activeModule === 'tangent_normal' && (
              <div className="space-y-2.5 text-xs">
                {/* Tangent Line Equation */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'معادلة خط المماس عند نقطة التماس' : 'Tangent Line Equation at (x0, y0)'}
                  </span>
                  <MathRenderer
                    math={`y - (${fx0.toFixed(2)}) = ${tangentSlope.toFixed(2)}(x - ${pointX.toFixed(2)}) \\implies y = ${tangentSlope.toFixed(2)}x + (${tanYIntercept.toFixed(2)})`}
                    lang={lang}
                  />
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-1 text-[10px] text-slate-400">
                    <span>{isArabic ? 'ميل المماس:' : 'Tangent Slope:'} m₁ = {tangentSlope.toFixed(3)}</span>
                    {tanXIntercept !== null && (
                      <span>{isArabic ? 'مقطع السينات:' : 'x-intercept:'} {tanXIntercept.toFixed(2)}</span>
                    )}
                    <span>{isArabic ? 'زاوية الميل θ:' : 'Angle θ:'} {tanAngleDeg}°</span>
                  </div>
                </div>

                {/* Normal Line Equation */}
                {showNormalLine && (
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'معادلة خط العمودي على المنحنى (التعامد 90°)' : 'Normal Line Equation (Orthogonal ⟂)'}
                    </span>
                    {!isNormalVertical ? (
                      <MathRenderer
                        math={`y - (${fx0.toFixed(2)}) = ${normalSlope.toFixed(2)}(x - ${pointX.toFixed(2)}) \\implies y = ${normalSlope.toFixed(2)}x + (${(normYIntercept ?? 0).toFixed(2)})`}
                        lang={lang}
                      />
                    ) : (
                      <MathRenderer math={`x = ${pointX.toFixed(2)} \\quad (\\text{Vertical Line})`} lang={lang} />
                    )}
                    <div className="mt-1 flex items-center justify-between text-[10px] text-purple-400 font-bold">
                      <span>{isArabic ? 'ميل العمودي:' : 'Normal Slope:'} m₂ = {isNormalVertical ? '∞' : normalSlope.toFixed(3)}</span>
                      <span>{isArabic ? 'شرط التعامد:' : 'Orthogonality:'} m₁ · m₂ = -1.00</span>
                    </div>
                  </div>
                )}

                {/* Secant Convergence Comparison */}
                {showSecantLine && (
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'نهاية ميل القاطع ومقارنتها بالمشتقة' : 'Secant Slope Limit vs Derivative'}
                    </span>
                    <MathRenderer
                      math={`m_{\\text{sec}} = \\frac{f(${pointX.toFixed(1)}+${stepH.toFixed(2)}) - f(${pointX.toFixed(1)})}{${stepH.toFixed(2)}} = ${secantSlope.toFixed(4)}`}
                      lang={lang}
                    />
                    <div className="mt-1 flex items-center justify-between text-[10px] font-bold text-amber-400">
                      <span>|m_sec - f'(x₀)| = {Math.abs(secantSlope - tangentSlope).toFixed(4)}</span>
                      <span>h → 0 Convergence</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Module 2 Output: Curve Behavior & Concavity */}
            {activeModule === 'curve_analysis' && (
              <div className="space-y-2.5 text-xs">
                {/* 1st Derivative Test */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'اختبار المشتقة الأولى f\'(x₀)' : 'First Derivative Test f\'(x0)'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCritical
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : isIncreasing
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {isCritical
                        ? (isArabic ? 'نقطة حرجة / سكون' : 'Critical / Stationary')
                        : isIncreasing
                        ? (isArabic ? 'الدالة متزايدة ↗' : 'Strictly Increasing ↗')
                        : (isArabic ? 'الدالة متناقصة ↘' : 'Strictly Decreasing ↘')}
                    </span>
                  </div>
                  <MathRenderer
                    math={`f'(${pointX.toFixed(2)}) = ${tangentSlope.toFixed(3)} \\; (${tangentSlope > 0 ? '> 0' : tangentSlope < 0 ? '< 0' : '= 0'})`}
                    lang={lang}
                  />
                </div>

                {/* 2nd Derivative Test & Concavity */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'اختبار المشتقة الثانية والتقعر f\'\'(x₀)' : 'Second Derivative & Concavity f\'\'(x0)'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isInflectionCandidate
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : isConcaveUp
                          ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {isInflectionCandidate
                        ? (isArabic ? 'نقطة انقلاب مرشحة' : 'Inflection Point')
                        : isConcaveUp
                        ? (isArabic ? 'محدب لأسفل / مقعر لأعلى ∪' : 'Concave Upward ∪')
                        : (isArabic ? 'محدب لأعلى / مقعر لأسفل ∩' : 'Concave Downward ∩')}
                    </span>
                  </div>
                  <MathRenderer
                    math={`f''(${pointX.toFixed(2)}) = ${d2Val.toFixed(3)} \\implies \\text{Curvature } \\kappa = ${curvatureKappa.toFixed(3)}`}
                    lang={lang}
                  />
                </div>

                {/* Osculating Circle Radius */}
                {showCurvatureCircle && (
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? 'نصف قطر دائرة الانحناء ومركزها' : 'Osculating Circle Radius & Center'}
                    </span>
                    <MathRenderer
                      math={`R = \\frac{(1+f'^2)^{3/2}}{|f''|} = ${radiusCurvature.toFixed(2)}, \\quad C = (${centerCurvX.toFixed(2)}, ${centerCurvY.toFixed(2)})`}
                      lang={lang}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Module 3 Output: Integration & Volumes */}
            {activeModule === 'integration_riemann' && (
              <div className="space-y-2.5 text-xs">
                {/* Exact Definite Integral */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'القيمة الدقيقة للتكامل المحدد (المساحة الصافية)' : 'Exact Definite Integral Area'}
                  </span>
                  <MathRenderer
                    math={`I = \\int_{${actualA.toFixed(1)}}^{${actualB.toFixed(1)}} f(x)\\,dx = ${exactIntegralVal.toFixed(4)}`}
                    lang={lang}
                  />
                </div>

                {/* Riemann Sum Approximation */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-semibold capitalize ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                      {isArabic ? `مجموع ريمان (${riemannRule})` : `Riemann Sum (${riemannRule})`}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400">
                      Δx = {dx.toFixed(3)}
                    </span>
                  </div>
                  <MathRenderer
                    math={`S_{${riemannN}} = \\sum_{i=1}^{${riemannN}} f(x_i^*)\\Delta x = ${riemannSumValue.toFixed(4)}`}
                    lang={lang}
                  />
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Error: {integralError.toFixed(4)}</span>
                    <span className="text-emerald-400 font-bold">{percentError.toFixed(2)}% err</span>
                  </div>
                </div>

                {/* Solids of Revolution Volumes */}
                <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`block text-[11px] mb-1 font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isArabic ? 'حجوم الأجسام الدورانية الناتجة عن دوران المنطقة' : 'Solids of Revolution Volumes'}
                  </span>
                  <div className="space-y-1">
                    <MathRenderer
                      math={`V_x = \\pi \\int_{${actualA.toFixed(1)}}^{${actualB.toFixed(1)}} [f(x)]^2\\,dx = ${revolutionVolumeX.toFixed(3)} \\text{ units}^3`}
                      lang={lang}
                    />
                    <MathRenderer
                      math={`V_y = 2\\pi \\int_{${actualA.toFixed(1)}}^{${actualB.toFixed(1)}} x|f(x)|\\,dx = ${revolutionVolumeY.toFixed(3)} \\text{ units}^3`}
                      lang={lang}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
