import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import { CanvasSimulationViewport } from '../../core/labs/CanvasSimulationViewport';
import { drawGlowingParticle } from '../../core/labs/RealisticLabGraphics';
import {
  Activity,
  Play,
  RotateCcw,
  Sparkles,
  Info,
  AlertTriangle,
  Zap,
  CheckCircle2,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  defaultFullscreen?: boolean;
}

export type ZoomLevel = 1 | 2 | 3 | 4;

export const SarcomereZoomLab: React.FC<Props> = ({ lang, theme = 'dark', defaultFullscreen = true }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [isFullscreen, setIsFullscreen] = useState<boolean>(defaultFullscreen);

  // Fullscreen keyboard listener (Esc to exit) and body scroll lock
  useEffect(() => {
    if (isFullscreen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsFullscreen(false);
          if (document.fullscreenElement) {
            document.exitFullscreen?.().catch(() => {});
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isFullscreen]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => {
      const next = !prev;
      if (!next && document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
      return next;
    });
  }, []);

  // 4 Scale Levels: 1: Organism (Arm), 2: Tissue (Fascicle), 3: Cellular (Sarcomere), 4: Molecular (Cross-Bridge)
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(3);

  // Mechanical and Biochemical State
  // Resting length = 2.8 um, full contraction = 1.8 um
  const [sarcomereLength, setSarcomereLength] = useState<number>(2.5);
  const [atpLevel, setAtpLevel] = useState<number>(100); // 0 - 100%
  const [caLevel, setCaLevel] = useState<number>(80); // 0 - 100%
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [molecularStep, setMolecularStep] = useState<number>(2); // 1: Ca2+ bind, 2: Crossbridge, 3: Power stroke, 4: Detach

  // Sarcomere measurements derived
  const aBandLength = 1.5; // Constant length in um
  const hZoneLength = Math.max(0, parseFloat((sarcomereLength - 1.8).toFixed(2)));
  const iBandTotal = Math.max(0, parseFloat((sarcomereLength - aBandLength).toFixed(2)));
  const contractionPercent = Math.min(100, Math.max(0, Math.round(((2.8 - sarcomereLength) / (2.8 - 1.8)) * 100)));

  // Arm flexion angle (175 deg = extended, 75 deg = flexed)
  const armAngle = 175 - contractionPercent * 0.95;
  // Biceps belly thickness (r_belly increases as length shortens)
  const bicepsRadius = 24 + contractionPercent * 0.22;

  // Rigor mortis trigger
  const isRigorMortis = atpLevel < 15 && caLevel > 30 && sarcomereLength < 2.3;

  // Smooth Twitch Animation using requestAnimationFrame (replaces 80ms setInterval)
  const twitchRafRef = useRef<number | null>(null);
  const twitchStartRef = useRef<number | null>(null);

  const handleAnimateTwitch = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    twitchStartRef.current = performance.now();

    const initialLength = sarcomereLength;
    const initialCa = caLevel;
    const twitchDuration = 1400; // 1.4s complete twitch cycle

    const stepTwitch = (now: number) => {
      if (!twitchStartRef.current) return;
      const elapsed = now - twitchStartRef.current;
      const progress = Math.min(1, elapsed / twitchDuration);

      if (progress < 0.35) {
        // Contraction phase: 0 -> 0.35 (approx 490ms)
        const pCont = progress / 0.35;
        // Ease in-out cubic
        const ease = pCont < 0.5 ? 4 * pCont * pCont * pCont : 1 - Math.pow(-2 * pCont + 2, 3) / 2;
        const targetLen = 1.85;
        setSarcomereLength(parseFloat((initialLength + (targetLen - initialLength) * ease).toFixed(3)));
        setCaLevel(Math.min(100, Math.round(initialCa + (100 - initialCa) * ease)));
      } else if (progress < 1) {
        // Relaxation phase: 0.35 -> 1.0 (approx 910ms)
        const pRel = (progress - 0.35) / 0.65;
        const easeRel = Math.sin((pRel * Math.PI) / 2);

        if (atpLevel >= 20) {
          const restingLen = 2.65;
          setSarcomereLength(parseFloat((1.85 + (restingLen - 1.85) * easeRel).toFixed(3)));
          setCaLevel(Math.max(15, Math.round(100 - (100 - 15) * easeRel)));
        } else {
          // Rigor mortis locks in shortened state!
          setSarcomereLength(1.88);
        }
      }

      if (progress < 1) {
        twitchRafRef.current = requestAnimationFrame(stepTwitch);
      } else {
        setIsAnimating(false);
        twitchRafRef.current = null;
        twitchStartRef.current = null;
      }
    };

    twitchRafRef.current = requestAnimationFrame(stepTwitch);
  };

  useEffect(() => {
    return () => {
      if (twitchRafRef.current) {
        cancelAnimationFrame(twitchRafRef.current);
      }
    };
  }, []);

  const handleReset = () => {
    if (twitchRafRef.current) {
      cancelAnimationFrame(twitchRafRef.current);
      twitchRafRef.current = null;
    }
    setIsAnimating(false);
    setSarcomereLength(2.6);
    setAtpLevel(100);
    setCaLevel(75);
    setMolecularStep(2);
  };

  // Preset scenarios
  const applyPreset = (preset: 'resting' | 'partial' | 'max' | 'rigor') => {
    if (twitchRafRef.current) {
      cancelAnimationFrame(twitchRafRef.current);
      twitchRafRef.current = null;
    }
    setIsAnimating(false);
    switch (preset) {
      case 'resting':
        setSarcomereLength(2.8);
        setAtpLevel(100);
        setCaLevel(20);
        setMolecularStep(1);
        break;
      case 'partial':
        setSarcomereLength(2.3);
        setAtpLevel(100);
        setCaLevel(70);
        setMolecularStep(3);
        break;
      case 'max':
        setSarcomereLength(1.82);
        setAtpLevel(100);
        setCaLevel(100);
        setMolecularStep(3);
        break;
      case 'rigor':
        setSarcomereLength(2.0);
        setAtpLevel(5);
        setCaLevel(85);
        setMolecularStep(3);
        break;
    }
  };

  // =========================================================================
  // Canvas Rendering Functions for Each Zoom Level (Continuous 60 FPS)
  // =========================================================================

  // --- Zoom 1: Macro Biomechanics (Arm & Biceps Flexion) ---
  const renderArmMacro = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      angle: number,
      cPercent: number,
      bR: number,
      _t: number
    ) => {
      // Background subtle grid
      ctx.save();
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Radial laboratory backlight vignette
      const bgGlow = ctx.createRadialGradient(w * 0.45, h * 0.45, 10, w * 0.45, h * 0.45, Math.max(w, h) * 0.7);
      bgGlow.addColorStop(0, 'rgba(30, 41, 59, 0.4)');
      bgGlow.addColorStop(0.7, 'rgba(15, 23, 42, 0.9)');
      bgGlow.addColorStop(1, '#020617');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, w, h);

      // Coordinates setup: Shoulder anchor at (w*0.28, h*0.28), Elbow at (w*0.48, h*0.62)
      const shoulderX = w * 0.26;
      const shoulderY = h * 0.26;
      const elbowX = w * 0.46;
      const elbowY = h * 0.58;

      const rad = (angle * Math.PI) / 180;
      const forearmLen = Math.min(w, h) * 0.44;
      const handX = elbowX + forearmLen * Math.sin(rad);
      const handY = elbowY + forearmLen * Math.cos(rad);

      // Insertion point on radius (~20% down the forearm)
      const insertRatio = 0.22;
      const insertX = elbowX + forearmLen * insertRatio * Math.sin(rad);
      const insertY = elbowY + forearmLen * insertRatio * Math.cos(rad);

      // 1. Scapula & Clavicle Shoulder Base
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 10;

      // Scapula plate outline
      const scapulaGrad = ctx.createLinearGradient(shoulderX - 45, shoulderY - 30, shoulderX + 20, shoulderY + 40);
      scapulaGrad.addColorStop(0, '#cbd5e1');
      scapulaGrad.addColorStop(0.5, '#94a3b8');
      scapulaGrad.addColorStop(1, '#475569');
      ctx.fillStyle = scapulaGrad;
      ctx.beginPath();
      ctx.moveTo(shoulderX - 50, shoulderY - 35);
      ctx.quadraticCurveTo(shoulderX + 15, shoulderY - 45, shoulderX + 25, shoulderY - 10);
      ctx.lineTo(shoulderX + 5, shoulderY + 45);
      ctx.quadraticCurveTo(shoulderX - 40, shoulderY + 50, shoulderX - 50, shoulderY - 35);
      ctx.fill();

      // Glenoid Cavity socket
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.arc(shoulderX, shoulderY, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      // 2. Antagonistic Triceps Brachii (Posterior side of Humerus)
      ctx.save();
      const tricepsGrad = ctx.createLinearGradient(shoulderX - 15, shoulderY + 20, elbowX - 25, elbowY - 20);
      tricepsGrad.addColorStop(0, '#475569');
      tricepsGrad.addColorStop(0.5, '#64748b');
      tricepsGrad.addColorStop(1, '#334155');
      ctx.fillStyle = tricepsGrad;
      ctx.beginPath();
      ctx.moveTo(shoulderX - 10, shoulderY + 15);
      ctx.quadraticCurveTo(shoulderX - 35, (shoulderY + elbowY) * 0.5, elbowX - 12, elbowY - 5);
      ctx.lineTo(elbowX + 4, elbowY + 8);
      ctx.quadraticCurveTo(shoulderX, (shoulderY + elbowY) * 0.5 - 10, shoulderX - 10, shoulderY + 15);
      ctx.fill();
      ctx.restore();

      // 3. Humerus Bone Shaft (Cylindrical 3D shading)
      ctx.save();
      const humerusGrad = ctx.createLinearGradient(shoulderX - 15, shoulderY, shoulderX + 25, shoulderY);
      humerusGrad.addColorStop(0, '#64748b');
      humerusGrad.addColorStop(0.3, '#f1f5f9');
      humerusGrad.addColorStop(0.7, '#e2e8f0');
      humerusGrad.addColorStop(1, '#475569');

      ctx.strokeStyle = humerusGrad;
      ctx.lineWidth = 20;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(shoulderX, shoulderY);
      ctx.lineTo(elbowX, elbowY);
      ctx.stroke();

      // Bone highlights and condyle bevel
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(shoulderX + 2, shoulderY + 8);
      ctx.lineTo(elbowX + 2, elbowY - 8);
      ctx.stroke();
      ctx.restore();

      // 4. Elbow Hinge Joint with Articular Cartilage
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 8;
      const elbowGrad = ctx.createRadialGradient(elbowX - 3, elbowY - 3, 2, elbowX, elbowY, 18);
      elbowGrad.addColorStop(0, '#f8fafc');
      elbowGrad.addColorStop(0.5, '#94a3b8');
      elbowGrad.addColorStop(1, '#334155');
      ctx.fillStyle = elbowGrad;
      ctx.beginPath();
      ctx.arc(elbowX, elbowY, 16, 0, Math.PI * 2);
      ctx.fill();

      // Translucent articular cartilage ring
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();

      // 5. Forearm Bones (Radius & Ulna) and Hand
      ctx.save();
      const forearmGrad = ctx.createLinearGradient(elbowX, elbowY, handX, handY);
      forearmGrad.addColorStop(0, '#cbd5e1');
      forearmGrad.addColorStop(0.5, '#f8fafc');
      forearmGrad.addColorStop(1, '#94a3b8');

      // Ulna (Posterior/Medial)
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(elbowX - 4, elbowY + 4);
      ctx.lineTo(handX - 4, handY + 4);
      ctx.stroke();

      // Radius (Anterior/Lateral)
      ctx.strokeStyle = forearmGrad;
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(elbowX, elbowY);
      ctx.lineTo(handX, handY);
      ctx.stroke();

      // Hand and Wrist (holding calibration brass weight)
      const handGrad = ctx.createRadialGradient(handX, handY, 2, handX, handY, 14);
      handGrad.addColorStop(0, '#f8fafc');
      handGrad.addColorStop(0.7, '#cbd5e1');
      handGrad.addColorStop(1, '#64748b');
      ctx.fillStyle = handGrad;
      ctx.beginPath();
      ctx.arc(handX, handY, 13, 0, Math.PI * 2);
      ctx.fill();

      // Calibration Load Weight (Brass Cylinder)
      const loadY = handY + 28;
      const loadGrad = ctx.createLinearGradient(handX - 16, loadY, handX + 16, loadY);
      loadGrad.addColorStop(0, '#b45309');
      loadGrad.addColorStop(0.4, '#fde047');
      loadGrad.addColorStop(0.7, '#f59e0b');
      loadGrad.addColorStop(1, '#78350f');
      ctx.fillStyle = loadGrad;
      ctx.beginPath();
      ctx.roundRect(handX - 16, loadY - 14, 32, 28, 4);
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // String hanging load
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(handX, handY);
      ctx.lineTo(handX, loadY - 14);
      ctx.stroke();

      // Weight text
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('1.0 kg', handX, loadY + 4);
      ctx.restore();

      // 6. Biceps Brachii Muscle Belly & Glistening Tendons
      ctx.save();
      // Tendon Origin (Supraglenoid Tubercle & Coracoid to Biceps)
      const tendonGrad = ctx.createLinearGradient(shoulderX, shoulderY, shoulderX + 28, shoulderY + 36);
      tendonGrad.addColorStop(0, '#ffffff');
      tendonGrad.addColorStop(0.5, '#e2e8f0');
      tendonGrad.addColorStop(1, '#94a3b8');

      ctx.strokeStyle = tendonGrad;
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(shoulderX + 6, shoulderY + 6);
      ctx.lineTo(shoulderX + 32, shoulderY + 38);
      ctx.stroke();

      // Insertion Tendon to Radial Tuberosity
      ctx.beginPath();
      ctx.moveTo(insertX, insertY);
      ctx.lineTo(insertX - 16, insertY - 18);
      ctx.stroke();

      // Biceps Belly Midpoint and Bulging Geometry
      const bellyStartX = shoulderX + 32;
      const bellyStartY = shoulderY + 38;
      const bellyEndX = insertX - 16;
      const bellyEndY = insertY - 18;

      const midBellyX = (bellyStartX + bellyEndX) / 2;
      const midBellyY = (bellyStartY + bellyEndY) / 2;

      // Normal vector perpendicular to muscle axis
      const dx = bellyEndX - bellyStartX;
      const dy = bellyEndY - bellyStartY;
      const muscleLen = Math.sqrt(dx * dx + dy * dy);
      const nx = -dy / (muscleLen || 1);
      const ny = dx / (muscleLen || 1);

      // Bulge offset based on bR
      const bulgeFactor = bR * 1.3;
      const ctrl1X = midBellyX + nx * bulgeFactor;
      const ctrl1Y = midBellyY + ny * bulgeFactor;
      const ctrl2X = midBellyX - nx * (bulgeFactor * 0.55);
      const ctrl2Y = midBellyY - ny * (bulgeFactor * 0.55);

      // 3D Muscle Belly Shading Gradient
      const muscleGrad = ctx.createRadialGradient(ctrl1X, ctrl1Y, 5, midBellyX, midBellyY, bulgeFactor * 2.2);
      muscleGrad.addColorStop(0, '#fb7185'); // peak highlight
      muscleGrad.addColorStop(0.3, '#f43f5e');
      muscleGrad.addColorStop(0.65, '#be123c');
      muscleGrad.addColorStop(1, '#881337'); // deep edge shadow

      ctx.fillStyle = muscleGrad;
      ctx.beginPath();
      ctx.moveTo(bellyStartX, bellyStartY);
      ctx.quadraticCurveTo(ctrl1X, ctrl1Y, bellyEndX, bellyEndY);
      ctx.quadraticCurveTo(ctrl2X, ctrl2Y, bellyStartX, bellyStartY);
      ctx.closePath();
      ctx.fill();

      // Muscle perimeter highlight & depth stroke
      ctx.strokeStyle = '#fda4af';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Striated Muscle Fiber Lines (Running along the belly)
      ctx.save();
      ctx.clip(); // clip to muscle contour
      for (let fi = -2; fi <= 2; fi++) {
        const fOffset = fi * (bulgeFactor * 0.28);
        ctx.strokeStyle = fi === 0 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(244, 63, 94, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(bellyStartX, bellyStartY);
        ctx.quadraticCurveTo(midBellyX + nx * (bulgeFactor * 0.7 + fOffset), midBellyY + ny * (bulgeFactor * 0.7 + fOffset), bellyEndX, bellyEndY);
        ctx.stroke();
      }

      // Specular Fascia Sheen along the crest
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.filter = 'blur(2px)';
      ctx.beginPath();
      ctx.moveTo(bellyStartX + dx * 0.25 + nx * (bulgeFactor * 0.6), bellyStartY + dy * 0.25 + ny * (bulgeFactor * 0.6));
      ctx.quadraticCurveTo(
        midBellyX + nx * (bulgeFactor * 0.75),
        midBellyY + ny * (bulgeFactor * 0.75),
        bellyStartX + dx * 0.75 + nx * (bulgeFactor * 0.5),
        bellyStartY + dy * 0.75 + ny * (bulgeFactor * 0.5)
      );
      ctx.stroke();
      ctx.restore();
      ctx.restore();

      // 7. Biomechanics Overlay: Joint Angle Arc & Vectors
      ctx.save();
      // Elbow angle arc
      const arcRadius = 38;
      const startAngle = Math.PI / 2; // vertical down
      const currentRad = (angle * Math.PI) / 180;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(elbowX, elbowY, arcRadius, startAngle, startAngle - (Math.PI - currentRad), true);
      ctx.stroke();
      ctx.setLineDash([]);

      // Angle degrees pill
      const labelAngle = startAngle - (Math.PI - currentRad) / 2;
      const labelX = elbowX + (arcRadius + 22) * Math.cos(labelAngle);
      const labelY = elbowY + (arcRadius + 22) * Math.sin(labelAngle);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(labelX - 22, labelY - 11, 44, 22, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(angle)}°`, labelX, labelY);

      // Force Vector: Biceps Tension Vector F_biceps (Emerald Arrow)
      const forceMag = Math.min(65, 30 + cPercent * 0.35);
      const fNormX = (shoulderX + 15 - insertX) / (Math.sqrt(Math.pow(shoulderX + 15 - insertX, 2) + Math.pow(shoulderY + 15 - insertY, 2)) || 1);
      const fNormY = (shoulderY + 15 - insertY) / (Math.sqrt(Math.pow(shoulderX + 15 - insertX, 2) + Math.pow(shoulderY + 15 - insertY, 2)) || 1);

      ctx.strokeStyle = '#10b981';
      ctx.fillStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(insertX, insertY);
      ctx.lineTo(insertX + fNormX * forceMag, insertY + fNormY * forceMag);
      ctx.stroke();

      // Arrowhead
      const arrowSize = 6;
      ctx.beginPath();
      ctx.moveTo(insertX + fNormX * forceMag, insertY + fNormY * forceMag);
      ctx.lineTo(
        insertX + fNormX * (forceMag - arrowSize) - fNormY * arrowSize,
        insertY + fNormY * (forceMag - arrowSize) + fNormX * arrowSize
      );
      ctx.lineTo(
        insertX + fNormX * (forceMag - arrowSize) + fNormY * arrowSize,
        insertY + fNormY * (forceMag - arrowSize) - fNormX * arrowSize
      );
      ctx.closePath();
      ctx.fill();

      // Gravitational Load Vector W (Amber Arrow at Hand)
      ctx.strokeStyle = '#f59e0b';
      ctx.fillStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(handX, handY);
      ctx.lineTo(handX, handY + 45);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(handX, handY + 45);
      ctx.lineTo(handX - 5, handY + 37);
      ctx.lineTo(handX + 5, handY + 37);
      ctx.closePath();
      ctx.fill();

      // Labels on canvas
      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#fda4af';
      ctx.textAlign = 'left';
      ctx.fillText(isArabic ? 'العضلة ذات الرأسين (Biceps)' : 'Biceps Brachii', midBellyX + nx * (bulgeFactor + 14), midBellyY + ny * (bulgeFactor + 14));

      ctx.fillStyle = '#10b981';
      ctx.fillText('F_biceps', insertX + fNormX * forceMag + 8, insertY + fNormY * forceMag);

      ctx.fillStyle = '#f59e0b';
      ctx.fillText('W = mg (9.8 N)', handX + 8, handY + 42);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText(isArabic ? 'عظمة العضد (Humerus)' : 'Humerus', shoulderX + (elbowX - shoulderX) * 0.45 - 20, shoulderY + (elbowY - shoulderY) * 0.45 - 15);
      ctx.restore();
    },
    [isArabic]
  );

  // --- Zoom 2: Muscle Fascicle (Tissue Architecture) ---
  const renderFascicleTissue = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      sLen: number,
      _t: number
    ) => {
      ctx.save();
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Background ambient lighting
      const radGlow = ctx.createRadialGradient(w * 0.5, h * 0.5, 20, w * 0.5, h * 0.5, w * 0.7);
      radGlow.addColorStop(0, 'rgba(30, 27, 75, 0.4)');
      radGlow.addColorStop(0.7, 'rgba(15, 23, 42, 0.9)');
      radGlow.addColorStop(1, '#020617');
      ctx.fillStyle = radGlow;
      ctx.fillRect(0, 0, w, h);

      // 1. Whole Muscle Belly Cutaway (Left Side)
      const bellyCenterX = w * 0.25;
      const bellyCenterY = h * 0.5;
      const bellyRx = Math.min(w, h) * 0.22;
      const bellyRy = Math.min(w, h) * 0.32;

      // Outer Epimysium Collagen Sheath
      ctx.save();
      ctx.shadowColor = 'rgba(225, 29, 72, 0.35)';
      ctx.shadowBlur = 18;

      const epimysiumGrad = ctx.createRadialGradient(bellyCenterX - 20, bellyCenterY - 30, 10, bellyCenterX, bellyCenterY, bellyRy);
      epimysiumGrad.addColorStop(0, '#be123c');
      epimysiumGrad.addColorStop(0.7, '#881337');
      epimysiumGrad.addColorStop(1, '#4c0519');
      ctx.fillStyle = epimysiumGrad;
      ctx.beginPath();
      ctx.ellipse(bellyCenterX, bellyCenterY, bellyRx, bellyRy, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#fb7185';
      ctx.lineWidth = 3.5;
      ctx.stroke();
      ctx.restore();

      // Fascicle Bundles inside Muscle Belly (Honeycomb packing)
      const fascicles = [
        { cx: bellyCenterX - bellyRx * 0.4, cy: bellyCenterY - bellyRy * 0.45, r: bellyRx * 0.32 },
        { cx: bellyCenterX + bellyRx * 0.35, cy: bellyCenterY - bellyRy * 0.42, r: bellyRx * 0.3 },
        { cx: bellyCenterX - bellyRx * 0.38, cy: bellyCenterY + bellyRy * 0.4, r: bellyRx * 0.33 },
        { cx: bellyCenterX + bellyRx * 0.36, cy: bellyCenterY + bellyRy * 0.38, r: bellyRx * 0.31 },
        { cx: bellyCenterX, cy: bellyCenterY, r: bellyRx * 0.36 }, // Active center fascicle
      ];

      fascicles.forEach((fas, idx) => {
        ctx.save();
        const fGrad = ctx.createRadialGradient(fas.cx - 5, fas.cy - 5, 2, fas.cx, fas.cy, fas.r);
        if (idx === 4) {
          // Highlighted active fascicle that telescopes
          fGrad.addColorStop(0, '#f43f5e');
          fGrad.addColorStop(0.7, '#e11d48');
          fGrad.addColorStop(1, '#9f1239');
        } else {
          fGrad.addColorStop(0, '#e11d48');
          fGrad.addColorStop(0.7, '#9f1239');
          fGrad.addColorStop(1, '#4c0519');
        }
        ctx.fillStyle = fGrad;
        ctx.beginPath();
        ctx.arc(fas.cx, fas.cy, fas.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = idx === 4 ? '#fda4af' : '#fb7185';
        ctx.lineWidth = idx === 4 ? 2.5 : 1.5;
        ctx.stroke();

        // Individual muscle fibers inside each small fascicle
        for (let a = 0; a < 6; a++) {
          const fa = (a * Math.PI) / 3;
          const fx = fas.cx + Math.cos(fa) * (fas.r * 0.55);
          const fy = fas.cy + Math.sin(fa) * (fas.r * 0.55);
          ctx.fillStyle = '#fda4af';
          ctx.beginPath();
          ctx.arc(fx, fy, fas.r * 0.16, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Interstitial micro-capillaries
      ctx.strokeStyle = '#ef4444'; // arteriole
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bellyCenterX - 10, bellyCenterY - bellyRy * 0.8);
      ctx.quadraticCurveTo(bellyCenterX, bellyCenterY - 20, bellyCenterX - 15, bellyCenterY + 40);
      ctx.stroke();

      ctx.strokeStyle = '#38bdf8'; // venule
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bellyCenterX + 12, bellyCenterY - bellyRy * 0.75);
      ctx.quadraticCurveTo(bellyCenterX + 18, bellyCenterY - 10, bellyCenterX + 8, bellyCenterY + 45);
      ctx.stroke();

      // 2. Telescoping Projection Frustum (Leading to Zoomed Fascicle)
      const centerFas = fascicles[4];
      const targetFasX = w * 0.58;
      const targetFasY = h * 0.5;
      const targetFasR = Math.min(w, h) * 0.22;

      ctx.save();
      ctx.fillStyle = 'rgba(244, 63, 94, 0.12)';
      ctx.strokeStyle = 'rgba(251, 113, 133, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      ctx.beginPath();
      ctx.moveTo(centerFas.cx, centerFas.cy - centerFas.r);
      ctx.lineTo(targetFasX - targetFasR, targetFasY - targetFasR);
      ctx.lineTo(targetFasX - targetFasR, targetFasY + targetFasR);
      ctx.lineTo(centerFas.cx, centerFas.cy + centerFas.r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 3. Zoomed Fascicle Cylinder (Center/Right)
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 14;

      const zFasGrad = ctx.createRadialGradient(targetFasX - 15, targetFasY - 20, 10, targetFasX, targetFasY, targetFasR);
      zFasGrad.addColorStop(0, '#f43f5e');
      zFasGrad.addColorStop(0.6, '#be123c');
      zFasGrad.addColorStop(1, '#881337');

      ctx.fillStyle = zFasGrad;
      ctx.beginPath();
      ctx.arc(targetFasX, targetFasY, targetFasR, 0, Math.PI * 2);
      ctx.fill();

      // Perimysium sheath
      ctx.strokeStyle = '#fda4af';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Individual Muscle Fibers (Cells) packed inside Zoomed Fascicle
      const fibers = [
        { cx: targetFasX - targetFasR * 0.5, cy: targetFasY - targetFasR * 0.45, r: targetFasR * 0.26 },
        { cx: targetFasX + targetFasR * 0.1, cy: targetFasY - targetFasR * 0.55, r: targetFasR * 0.28 },
        { cx: targetFasX - targetFasR * 0.55, cy: targetFasY + targetFasR * 0.25, r: targetFasR * 0.27 },
        { cx: targetFasX - targetFasR * 0.05, cy: targetFasY + targetFasR * 0.48, r: targetFasR * 0.26 },
        { cx: targetFasX + targetFasR * 0.48, cy: targetFasY - targetFasR * 0.15, r: targetFasR * 0.29 }, // Active fiber
        { cx: targetFasX + targetFasR * 0.38, cy: targetFasY + targetFasR * 0.45, r: targetFasR * 0.27 },
        { cx: targetFasX - targetFasR * 0.05, cy: targetFasY - targetFasR * 0.05, r: targetFasR * 0.29 },
      ];

      fibers.forEach((fib, fidx) => {
        const isExtracted = fidx === 4;
        const fibGrad = ctx.createRadialGradient(fib.cx - 3, fib.cy - 3, 2, fib.cx, fib.cy, fib.r);
        fibGrad.addColorStop(0, isExtracted ? '#fb923c' : '#f43f5e');
        fibGrad.addColorStop(0.7, isExtracted ? '#ea580c' : '#e11d48');
        fibGrad.addColorStop(1, isExtracted ? '#9a3412' : '#9f1239');

        ctx.fillStyle = fibGrad;
        ctx.beginPath();
        ctx.arc(fib.cx, fib.cy, fib.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isExtracted ? '#fde047' : '#fecdd3';
        ctx.lineWidth = isExtracted ? 2 : 1;
        ctx.stroke();

        // Multinucleated peripheral nuclei (blue oval dots on the sarcolemma perimeter)
        for (let ni = 0; ni < 3; ni++) {
          const na = (ni * Math.PI * 2) / 3 + 0.4;
          const nx = fib.cx + Math.cos(na) * (fib.r * 0.85);
          const ny = fib.cy + Math.sin(na) * (fib.r * 0.85);
          ctx.fillStyle = '#60a5fa';
          ctx.beginPath();
          ctx.ellipse(nx, ny, 3.5, 2, na, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();

      // 4. Extracted Myofibril Rod with Dynamic Banding Striations (Right Side)
      const activeFib = fibers[4];
      const myoStartX = activeFib.cx + activeFib.r * 0.7;
      const myoStartY = activeFib.cy;
      const myoEndX = w * 0.94;
      const myoHeight = 26;

      ctx.save();
      // Telescoping cone from fiber to myofibril
      ctx.fillStyle = 'rgba(251, 191, 36, 0.15)';
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(myoStartX, myoStartY - activeFib.r * 0.5);
      ctx.lineTo(w * 0.78, myoStartY - myoHeight / 2);
      ctx.lineTo(w * 0.78, myoStartY + myoHeight / 2);
      ctx.lineTo(myoStartX, myoStartY + activeFib.r * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);

      // Myofibril 3D Cylinder Background
      const myoRodX = w * 0.78;
      const myoRodW = myoEndX - myoRodX;
      const myoGrad = ctx.createLinearGradient(myoRodX, myoStartY - myoHeight / 2, myoRodX, myoStartY + myoHeight / 2);
      myoGrad.addColorStop(0, '#475569');
      myoGrad.addColorStop(0.3, '#f1f5f9');
      myoGrad.addColorStop(0.7, '#cbd5e1');
      myoGrad.addColorStop(1, '#334155');

      ctx.fillStyle = myoGrad;
      ctx.beginPath();
      ctx.roundRect(myoRodX, myoStartY - myoHeight / 2, myoRodW, myoHeight, 4);
      ctx.fill();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Alternating Striation Bands (A-band dark, I-band light, Z-line)
      // Sarcomere wavelength scales dynamically with sLen (e.g. 28px at 2.8um, 18px at 1.8um)
      const bandPitch = (sLen / 2.8) * 32;
      ctx.save();
      ctx.clip(); // clip within myofibril cylinder
      for (let bx = myoRodX; bx < myoEndX; bx += bandPitch) {
        // Dark A-band (anisotropic)
        ctx.fillStyle = 'rgba(124, 58, 237, 0.55)';
        ctx.fillRect(bx, myoStartY - myoHeight / 2, bandPitch * 0.55, myoHeight);

        // Light I-band (isotropic)
        ctx.fillStyle = 'rgba(251, 146, 60, 0.35)';
        ctx.fillRect(bx + bandPitch * 0.55, myoStartY - myoHeight / 2, bandPitch * 0.45, myoHeight);

        // Z-Disc (Dark thin transverse line in center of I-band)
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bx + bandPitch * 0.77, myoStartY - myoHeight / 2);
        ctx.lineTo(bx + bandPitch * 0.77, myoStartY + myoHeight / 2);
        ctx.stroke();
      }
      ctx.restore();

      // Golden bracket marking one repeating sarcomere on the myofibril
      const bracketX = myoRodX + 10;
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bracketX, myoStartY - myoHeight / 2 - 8);
      ctx.lineTo(bracketX, myoStartY - myoHeight / 2 - 14);
      ctx.lineTo(bracketX + bandPitch, myoStartY - myoHeight / 2 - 14);
      ctx.lineTo(bracketX + bandPitch, myoStartY - myoHeight / 2 - 8);
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${sLen.toFixed(2)} µm`, bracketX + bandPitch / 2, myoStartY - myoHeight / 2 - 18);
      ctx.restore();

      // Labels on canvas
      ctx.save();
      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#fda4af';
      ctx.textAlign = 'center';
      ctx.fillText(isArabic ? 'غشاء العضلة الخارجي (Epimysium)' : 'Epimysium (Outer Sheath)', bellyCenterX, bellyCenterY - bellyRy - 12);

      ctx.fillStyle = '#fecdd3';
      ctx.fillText(isArabic ? 'حزمة عضلية (Fascicle)' : 'Muscle Fascicle (Perimysium)', targetFasX, targetFasY - targetFasR - 12);

      ctx.fillStyle = '#fbbf24';
      ctx.textAlign = 'left';
      ctx.fillText(isArabic ? 'لييفة عضلية (Myofibril)' : 'Myofibril (Striated)', myoRodX, myoStartY + myoHeight / 2 + 18);
      ctx.restore();
    },
    [isArabic]
  );

  // --- Zoom 3: Sarcomere Ultrastructure (Cellular Level) ---
  const renderSarcomereCellular = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      sLen: number,
      aLen: number,
      hLen: number,
      _iLen: number,
      _t: number
    ) => {
      ctx.save();
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Background Sarcoplasm Gradient
      const sarcoplasmGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 20, w * 0.5, h * 0.5, w * 0.7);
      sarcoplasmGrad.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      sarcoplasmGrad.addColorStop(0.8, '#0b0f19');
      sarcoplasmGrad.addColorStop(1, '#020617');
      ctx.fillStyle = sarcoplasmGrad;
      ctx.fillRect(0, 0, w, h);

      // Physical scale geometry: Center of viewport
      const cx = w * 0.5;
      const cy = h * 0.48;
      // Conversion scale: pixels per micrometer
      const pxPerUm = Math.min(w * 0.28, 165);

      const halfSarcomerePx = (sLen * pxPerUm) / 2;
      const zLeftX = cx - halfSarcomerePx;
      const zRightX = cx + halfSarcomerePx;
      const aHalfPx = (aLen * pxPerUm) / 2;
      const hHalfPx = (hLen * pxPerUm) / 2;

      const stageTop = cy - 85;
      const stageHeight = 170;

      // 1. Optical Density Band Overlays (A-Band, H-Zone, I-Bands)
      ctx.save();
      // A-Band (Anisotropic, Constant 1.5 um)
      const aGrad = ctx.createLinearGradient(cx - aHalfPx, 0, cx + aHalfPx, 0);
      aGrad.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      aGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.22)');
      aGrad.addColorStop(1, 'rgba(139, 92, 246, 0.12)');
      ctx.fillStyle = aGrad;
      ctx.fillRect(cx - aHalfPx, stageTop, aHalfPx * 2, stageHeight);

      ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(cx - aHalfPx, stageTop, aHalfPx * 2, stageHeight);
      ctx.setLineDash([]);

      // H-Zone (Pseudo-H, Disappears at full contraction)
      if (hHalfPx > 2) {
        const hGrad = ctx.createLinearGradient(cx - hHalfPx, 0, cx + hHalfPx, 0);
        hGrad.addColorStop(0, 'rgba(251, 191, 36, 0.15)');
        hGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.28)');
        hGrad.addColorStop(1, 'rgba(251, 191, 36, 0.15)');
        ctx.fillStyle = hGrad;
        ctx.fillRect(cx - hHalfPx, stageTop + 15, hHalfPx * 2, stageHeight - 30);

        ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
        ctx.lineWidth = 1;
        ctx.strokeRect(cx - hHalfPx, stageTop + 15, hHalfPx * 2, stageHeight - 30);
      }
      ctx.restore();

      // 2. Central M-Line (Myomesin protein bridge)
      ctx.save();
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx, stageTop - 5);
      ctx.lineTo(cx, stageTop + stageHeight + 5);
      ctx.stroke();
      ctx.setLineDash([]);

      // M-Line nodes
      ctx.fillStyle = '#cbd5e1';
      for (let my = -2; my <= 2; my++) {
        ctx.beginPath();
        ctx.arc(cx, cy + my * 32, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. Thick Myosin Filaments & Articulated S1 Cross-Bridges
      const myosinYLevels = [cy - 36, cy, cy + 36];
      const thickBarHeight = 10;

      myosinYLevels.forEach((my) => {
        ctx.save();
        // Thick backbone (Cylindrical brushed metallic purple)
        const thickGrad = ctx.createLinearGradient(cx - aHalfPx, my - thickBarHeight / 2, cx - aHalfPx, my + thickBarHeight / 2);
        thickGrad.addColorStop(0, '#581c87');
        thickGrad.addColorStop(0.3, '#c084fc');
        thickGrad.addColorStop(0.7, '#9333ea');
        thickGrad.addColorStop(1, '#3b0764');

        ctx.fillStyle = thickGrad;
        ctx.beginPath();
        ctx.roundRect(cx - aHalfPx, my - thickBarHeight / 2, aHalfPx * 2, thickBarHeight, 5);
        ctx.fill();

        ctx.strokeStyle = '#d8b4fe';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Titin Giant Coiled Molecular Springs (Connecting thick filament tips to Z-lines)
        // Left Titin
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        const titinLeftW = (cx - aHalfPx) - zLeftX;
        const coils = 6;
        ctx.moveTo(zLeftX, my);
        for (let ci = 0; ci < coils; ci++) {
          const tX1 = zLeftX + (titinLeftW / coils) * (ci + 0.25);
          const tX2 = zLeftX + (titinLeftW / coils) * (ci + 0.75);
          const tX3 = zLeftX + (titinLeftW / coils) * (ci + 1.0);
          ctx.quadraticCurveTo(tX1, my - 6, (tX1 + tX2) / 2, my);
          ctx.quadraticCurveTo(tX2, my + 6, tX3, my);
        }
        ctx.stroke();

        // Right Titin
        ctx.beginPath();
        const titinRightW = zRightX - (cx + aHalfPx);
        ctx.moveTo(cx + aHalfPx, my);
        for (let ci = 0; ci < coils; ci++) {
          const tX1 = cx + aHalfPx + (titinRightW / coils) * (ci + 0.25);
          const tX2 = cx + aHalfPx + (titinRightW / coils) * (ci + 0.75);
          const tX3 = cx + aHalfPx + (titinRightW / coils) * (ci + 1.0);
          ctx.quadraticCurveTo(tX1, my - 6, (tX1 + tX2) / 2, my);
          ctx.quadraticCurveTo(tX2, my + 6, tX3, my);
        }
        ctx.stroke();

        // Protruding S1 Cross-Bridge Heads along thick filament
        // Bare zone around center is ~18% of aHalfPx
        const bareZone = aHalfPx * 0.2;
        const headSpacings = [0.32, 0.52, 0.72, 0.9];

        headSpacings.forEach((ratio) => {
          // Left side heads (pulling right toward M-line)
          const hLeftX = cx - (bareZone + (aHalfPx - bareZone) * ratio);
          // Right side heads (pulling left toward M-line)
          const hRightX = cx + (bareZone + (aHalfPx - bareZone) * ratio);

          // Head tilt angle based on contraction state
          const tiltLeft = sLen < 2.2 ? 0.35 : 0; // tilt toward M-line (right)
          const tiltRight = sLen < 2.2 ? -0.35 : 0; // tilt toward M-line (left)

          // Upper and Lower heads for left side
          [my - 10, my + 10].forEach((hy, hidx) => {
            ctx.save();
            ctx.translate(hLeftX, hy);
            ctx.rotate(tiltLeft);

            // S2 neck
            ctx.strokeStyle = '#ec4899';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(0, hidx === 0 ? 5 : -5);
            ctx.lineTo(0, 0);
            ctx.stroke();

            // S1 Pear-shaped globular head
            const headGrad = ctx.createRadialGradient(-1, -1, 1, 0, 0, 4.5);
            headGrad.addColorStop(0, '#fbcfe8');
            headGrad.addColorStop(0.5, '#f43f5e');
            headGrad.addColorStop(1, '#9f1239');
            ctx.fillStyle = headGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, 4.5, 3.2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          });

          // Upper and Lower heads for right side
          [my - 10, my + 10].forEach((hy, hidx) => {
            ctx.save();
            ctx.translate(hRightX, hy);
            ctx.rotate(tiltRight);

            ctx.strokeStyle = '#ec4899';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(0, hidx === 0 ? 5 : -5);
            ctx.lineTo(0, 0);
            ctx.stroke();

            const headGrad = ctx.createRadialGradient(-1, -1, 1, 0, 0, 4.5);
            headGrad.addColorStop(0, '#fbcfe8');
            headGrad.addColorStop(0.5, '#f43f5e');
            headGrad.addColorStop(1, '#9f1239');
            ctx.fillStyle = headGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, 4.5, 3.2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          });
        });
        ctx.restore();
      });

      // 4. Thin Actin Filaments attached to Z-Discs (Interleaved)
      const actinYLevels = [cy - 54, cy - 18, cy + 18, cy + 54];
      const actinLengthPx = 1.0 * pxPerUm; // 1.0 um fixed physical filament length

      actinYLevels.forEach((ay) => {
        ctx.save();
        // Left actin filament extending rightward from zLeftX
        const leftActinEndX = zLeftX + actinLengthPx;
        // Right actin filament extending leftward from zRightX
        const rightActinEndX = zRightX - actinLengthPx;

        // Double-helical bead chain rendering
        const drawActinBeads = (startX: number, endX: number) => {
          const beadCount = Math.floor(Math.abs(endX - startX) / 7.5);
          const dir = endX > startX ? 1 : -1;
          for (let bi = 0; bi < beadCount; bi++) {
            const bx = startX + dir * bi * 7.5;
            const helixY = ay + Math.sin(bi * 0.75) * 2.2;

            // G-actin spherical bead
            const beadGrad = ctx.createRadialGradient(bx - 1, helixY - 1, 0.5, bx, helixY, 3.8);
            beadGrad.addColorStop(0, '#fed7aa');
            beadGrad.addColorStop(0.4, '#fb923c');
            beadGrad.addColorStop(1, '#c2410c');
            ctx.fillStyle = beadGrad;
            ctx.beginPath();
            ctx.arc(bx, helixY, 3.5, 0, Math.PI * 2);
            ctx.fill();

            // Periodic Troponin complexes (every 7 beads)
            if (bi % 7 === 3) {
              ctx.fillStyle = '#38bdf8';
              ctx.beginPath();
              ctx.arc(bx, helixY - 3.5, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        };

        drawActinBeads(zLeftX, leftActinEndX);
        drawActinBeads(zRightX, rightActinEndX);

        // Tropomyosin regulatory strand weaving along the actin filament
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(zLeftX, ay);
        ctx.lineTo(leftActinEndX, ay);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(zRightX, ay);
        ctx.lineTo(rightActinEndX, ay);
        ctx.stroke();
        ctx.restore();
      });

      // 5. 3D Zigzag Z-Discs (alpha-Actinin Protein Lattice)
      const drawZDisc = (zx: number) => {
        ctx.save();
        ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
        ctx.shadowBlur = 10;

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        const zZigZagCount = 14;
        const zStep = stageHeight / zZigZagCount;
        ctx.moveTo(zx, stageTop);
        for (let zi = 1; zi <= zZigZagCount; zi++) {
          const zxOffset = (zi % 2 === 1 ? -6 : 6);
          ctx.lineTo(zx + zxOffset, stageTop + zi * zStep);
        }
        ctx.stroke();

        // 3D Alpha-actinin cross-link lattice nodes
        for (let zi = 0; zi <= zZigZagCount; zi += 2) {
          ctx.fillStyle = '#6ee7b7';
          ctx.beginPath();
          ctx.arc(zx + (zi % 2 === 1 ? -6 : 6), stageTop + zi * zStep, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      };

      drawZDisc(zLeftX);
      drawZDisc(zRightX);

      // 6. Laser Dimension Calipers and Microscopic Scale Readouts
      ctx.save();
      const caliperY = stageTop - 25;

      // Master Sarcomere Caliper
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(zLeftX, caliperY);
      ctx.lineTo(zRightX, caliperY);
      ctx.stroke();

      // Tick marks at Z-discs
      ctx.beginPath();
      ctx.moveTo(zLeftX, caliperY - 6);
      ctx.lineTo(zLeftX, caliperY + 6);
      ctx.moveTo(zRightX, caliperY - 6);
      ctx.lineTo(zRightX, caliperY + 6);
      ctx.stroke();

      // Caliper center badge
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cx - 48, caliperY - 12, 96, 24, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fb7185';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`L = ${sLen.toFixed(2)} µm`, cx, caliperY);

      // Lower Calipers: A-Band, H-Zone, I-Band
      const lowerCaliperY = stageTop + stageHeight + 25;

      // A-Band Caliper (Center)
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - aHalfPx, lowerCaliperY);
      ctx.lineTo(cx + aHalfPx, lowerCaliperY);
      ctx.moveTo(cx - aHalfPx, lowerCaliperY - 5);
      ctx.lineTo(cx - aHalfPx, lowerCaliperY + 5);
      ctx.moveTo(cx + aHalfPx, lowerCaliperY - 5);
      ctx.lineTo(cx + aHalfPx, lowerCaliperY + 5);
      ctx.stroke();

      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(isArabic ? 'المنطقة A (١.٥ µm ثابتة)' : 'A-Band (1.50 µm)', cx, lowerCaliperY + 16);

      // H-Zone Caliper (if visible)
      if (hHalfPx > 10) {
        ctx.strokeStyle = '#facc15';
        ctx.beginPath();
        ctx.moveTo(cx - hHalfPx, lowerCaliperY - 18);
        ctx.lineTo(cx + hHalfPx, lowerCaliperY - 18);
        ctx.moveTo(cx - hHalfPx, lowerCaliperY - 22);
        ctx.lineTo(cx - hHalfPx, lowerCaliperY - 14);
        ctx.moveTo(cx + hHalfPx, lowerCaliperY - 22);
        ctx.lineTo(cx + hHalfPx, lowerCaliperY - 14);
        ctx.stroke();

        ctx.fillStyle = '#facc15';
        ctx.font = '9px sans-serif';
        ctx.fillText(`H = ${hLen.toFixed(2)} µm`, cx, lowerCaliperY - 26);
      } else {
        ctx.fillStyle = '#eab308';
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText(isArabic ? 'المنطقة H تختفي تماماً عند الانقباض التام' : 'H-Zone Vanished (Overlap)', cx, lowerCaliperY - 18);
      }

      // Z-Disc Labels
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(isArabic ? 'خط Z' : 'Z-Line', zLeftX, stageTop + stageHeight + 18);
      ctx.fillText(isArabic ? 'خط Z' : 'Z-Line', zRightX, stageTop + stageHeight + 18);

      // M-Line Label
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(isArabic ? 'خط M' : 'M-Line', cx, stageTop - 12);
      ctx.restore();
    },
    [isArabic]
  );

  // --- Zoom 4: Nanoscale Molecular Huxley Cross-Bridge Cycle ---
  const renderHuxleyMolecular = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      step: number,
      ca: number,
      atp: number,
      rigor: boolean,
      t: number
    ) => {
      ctx.save();
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Sarcoplasmic Fluid Gradient with Thermal Shimmer
      const sarcFluid = ctx.createRadialGradient(w * 0.5, h * 0.5, 30, w * 0.5, h * 0.5, w * 0.7);
      sarcFluid.addColorStop(0, 'rgba(15, 23, 42, 0.9)');
      sarcFluid.addColorStop(0.7, 'rgba(10, 15, 30, 0.98)');
      sarcFluid.addColorStop(1, '#020617');
      ctx.fillStyle = sarcFluid;
      ctx.fillRect(0, 0, w, h);

      // Diffusing Calcium Ions (Ca2+) with glowing halos
      const caCount = Math.floor(ca * 0.18);
      for (let ci = 0; ci < caCount; ci++) {
        // Deterministic pseudo-random diffusion
        const cx = (Math.sin(ci * 137.5 + t * 0.001) * 0.5 + 0.5) * w;
        const cy = (Math.cos(ci * 93.3 + t * 0.0012) * 0.5 + 0.5) * (h * 0.75) + h * 0.1;
        drawGlowingParticle(ctx, cx, cy, 3.5, '#38bdf8', 10);
      }

      // Diffusing ATP Molecules with amber glow
      const atpCount = Math.floor(atp * 0.12);
      for (let ai = 0; ai < atpCount; ai++) {
        const ax = (Math.sin(ai * 211.1 + t * 0.0009) * 0.5 + 0.5) * w;
        const ay = (Math.cos(ai * 173.7 + t * 0.0011) * 0.5 + 0.5) * (h * 0.5) + h * 0.35;
        drawGlowingParticle(ctx, ax, ay, 4.2, '#fde047', 12);
      }

      // 1. Actin Thin Filament Strand (Top)
      const actinY = h * 0.28;
      const beadRadius = 14;
      const beadCount = 18;
      const beadSpacing = w / (beadCount + 1);

      ctx.save();
      // Tropomyosin ribbon winding along actin
      const isTropomyosinShifted = ca >= 40;
      const tropoYOffset = isTropomyosinShifted ? -16 : 0; // Shifts away when Ca2+ is bound!

      ctx.strokeStyle = isTropomyosinShifted ? '#10b981' : '#f59e0b';
      ctx.lineWidth = 4.5;
      ctx.shadowColor = isTropomyosinShifted ? 'rgba(16, 185, 129, 0.6)' : 'rgba(245, 158, 11, 0.5)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, actinY + tropoYOffset);
      for (let bx = 0; bx <= w; bx += 40) {
        ctx.quadraticCurveTo(bx + 20, actinY + tropoYOffset + Math.sin(bx * 0.1 + t * 0.002) * 8, bx + 40, actinY + tropoYOffset);
      }
      ctx.stroke();
      ctx.restore();

      // G-Actin Double-Helical Globular Beads
      ctx.save();
      for (let bi = 1; bi <= beadCount; bi++) {
        const bx = bi * beadSpacing;
        const by = actinY + Math.sin(bi * 0.9) * 5;

        // Myosin binding active site on center actin bead
        const isBindingSite = bi === 9;

        const actinGrad = ctx.createRadialGradient(bx - 3, by - 3, 2, bx, by, beadRadius);
        if (isBindingSite && isTropomyosinShifted) {
          actinGrad.addColorStop(0, '#fef08a'); // Unmasked active site!
          actinGrad.addColorStop(0.5, '#fb923c');
          actinGrad.addColorStop(1, '#c2410c');
        } else {
          actinGrad.addColorStop(0, '#fed7aa');
          actinGrad.addColorStop(0.5, '#fb923c');
          actinGrad.addColorStop(1, '#9a3412');
        }

        ctx.fillStyle = actinGrad;
        ctx.beginPath();
        ctx.arc(bx, by, beadRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isBindingSite && isTropomyosinShifted ? '#facc15' : '#ea580c';
        ctx.lineWidth = isBindingSite && isTropomyosinShifted ? 2.5 : 1;
        ctx.stroke();

        // Troponin complex on bead 9 with bound Ca2+
        if (bi === 9) {
          const tropoGrad = ctx.createRadialGradient(bx, by - beadRadius - 6, 2, bx, by - beadRadius - 6, 9);
          tropoGrad.addColorStop(0, isTropomyosinShifted ? '#38bdf8' : '#64748b');
          tropoGrad.addColorStop(1, isTropomyosinShifted ? '#0284c7' : '#334155');
          ctx.fillStyle = tropoGrad;
          ctx.beginPath();
          ctx.arc(bx, by - beadRadius - 6, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#e0f2fe';
          ctx.font = 'bold 8px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(isTropomyosinShifted ? 'TnC+Ca²⁺' : 'TnC', bx, by - beadRadius - 6);
        }
      }
      ctx.restore();

      // 2. Thick Filament Backbone (Bottom)
      const thickY = h * 0.85;
      const thickH = 28;

      ctx.save();
      const thickBackGrad = ctx.createLinearGradient(0, thickY - thickH / 2, 0, thickY + thickH / 2);
      thickBackGrad.addColorStop(0, '#581c87');
      thickBackGrad.addColorStop(0.3, '#c084fc');
      thickBackGrad.addColorStop(0.7, '#9333ea');
      thickBackGrad.addColorStop(1, '#3b0764');

      ctx.fillStyle = thickBackGrad;
      ctx.fillRect(0, thickY - thickH / 2, w, thickH);
      ctx.strokeStyle = '#d8b4fe';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, thickY - thickH / 2, w, thickH);

      ctx.fillStyle = '#f3e8ff';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(isArabic ? 'خيط الميوسين السميك (Thick Filament)' : 'Thick Myosin Filament (HMM Tail)', 25, thickY + 4);
      ctx.restore();

      // 3. Articulated Myosin S1 Head & S2 Neck
      const anchorX = w * 0.52;
      const anchorY = thickY - thickH / 2;

      // Kinematics based on molecularStep:
      // Step 1: Cocked at 90 deg (detached, waiting)
      // Step 2: Attached at 90 deg (cross-bridge formed)
      // Step 3: Power stroke (pivots ~45 deg to the left, pulling actin ~10nm)
      // Step 4: Detached by ATP (hydrolysis re-cocking)
      let headX = anchorX;
      let headY = actinY + beadRadius + 18;
      let leverAngle = 0; // 0 = vertical (90 deg), -38 deg = power stroke

      if (step === 1) {
        // Cocked & detached
        headX = anchorX;
        headY = actinY + beadRadius + 32;
        leverAngle = 0;
      } else if (step === 2) {
        // Attached at 90 deg
        headX = anchorX - 5;
        headY = actinY + beadRadius + 12;
        leverAngle = -6;
      } else if (step === 3) {
        // Power stroke 45 deg tilt pulling left
        headX = anchorX - 48;
        headY = actinY + beadRadius + 12;
        leverAngle = -42;
      } else if (step === 4) {
        // ATP binds -> Detached
        headX = anchorX - 18;
        headY = actinY + beadRadius + 42;
        leverAngle = -15;
      }

      ctx.save();
      // S2 Neck Hinge Line
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(anchorX, anchorY);
      ctx.lineTo(headX, headY + 16);
      ctx.stroke();

      // S1 Head with Nucleotide Pocket
      ctx.save();
      ctx.translate(headX, headY);
      ctx.rotate((leverAngle * Math.PI) / 180);

      // Rigor mortis electrical stress glow
      if (rigor) {
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 24;
      } else if (step === 3) {
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 18;
      }

      // Globular S1 Head
      const headGrad = ctx.createRadialGradient(-4, -4, 2, 0, 0, 24);
      headGrad.addColorStop(0, rigor ? '#f87171' : '#fda4af');
      headGrad.addColorStop(0.5, rigor ? '#dc2626' : '#f43f5e');
      headGrad.addColorStop(1, rigor ? '#7f1d1d' : '#881337');

      ctx.fillStyle = headGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 24, 16, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = rigor ? '#fca5a5' : '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Catalytic Nucleotide Binding Pocket
      const pocketGrad = ctx.createRadialGradient(8, 2, 1, 8, 2, 8);
      pocketGrad.addColorStop(0, '#fef08a');
      pocketGrad.addColorStop(1, '#ca8a04');
      ctx.fillStyle = pocketGrad;
      ctx.beginPath();
      ctx.arc(8, 2, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Power stroke force arrow when step === 3
      if (step === 3) {
        ctx.strokeStyle = '#10b981';
        ctx.fillStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(headX + 25, actinY);
        ctx.lineTo(headX - 35, actinY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(headX - 35, actinY);
        ctx.lineTo(headX - 25, actinY - 6);
        ctx.lineTo(headX - 25, actinY + 6);
        ctx.closePath();
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(isArabic ? 'سحب خيط الأكتين ١٠ نانومتر ⟵' : 'Power Stroke (~10 nm) ⟵', headX - 45, actinY - 14);
      }

      // Nucleotide Status Tag
      let nucleotideLabel = 'ADP + Pi';
      let tagBg = '#0284c7';
      if (step === 3) {
        nucleotideLabel = isArabic ? 'انطلاق Pi (حركة الشد) + انفصال ADP' : 'Pi Released -> ADP Detaches';
        tagBg = '#d97706';
      } else if (step === 4) {
        nucleotideLabel = isArabic ? 'ارتباط ATP ⟶ انفصال الرابطة' : 'ATP Binds ⟶ Instant Detach';
        tagBg = '#16a34a';
      } else if (rigor) {
        nucleotideLabel = isArabic ? 'غياب ATP (تصلب عضلي مستمر)' : 'No ATP (LOCKED IN RIGOR)';
        tagBg = '#b91c1c';
      }

      ctx.fillStyle = tagBg;
      ctx.beginPath();
      ctx.roundRect(headX + 30, headY - 12, nucleotideLabel.length * 7 + 16, 24, 6);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(nucleotideLabel, headX + 30 + (nucleotideLabel.length * 7 + 16) / 2, headY + 4);
      ctx.restore();
    },
    [isArabic]
  );

  // Main Render Router for CanvasSimulationViewport
  const handleViewportRender = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      _vp: unknown,
      _dpr: number,
      time = 0
    ) => {
      ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#020617';
      ctx.fillRect(0, 0, width, height);

      switch (zoomLevel) {
        case 1:
          renderArmMacro(ctx, width, height, armAngle, contractionPercent, bicepsRadius, time);
          break;
        case 2:
          renderFascicleTissue(ctx, width, height, sarcomereLength, time);
          break;
        case 3:
          renderSarcomereCellular(ctx, width, height, sarcomereLength, aBandLength, hZoneLength, iBandTotal, time);
          break;
        case 4:
          renderHuxleyMolecular(ctx, width, height, molecularStep, caLevel, atpLevel, isRigorMortis, time);
          break;
      }
    },
    [
      zoomLevel,
      renderArmMacro,
      armAngle,
      contractionPercent,
      bicepsRadius,
      renderFascicleTissue,
      sarcomereLength,
      renderSarcomereCellular,
      aBandLength,
      hZoneLength,
      iBandTotal,
      renderHuxleyMolecular,
      molecularStep,
      caLevel,
      atpLevel,
      isRigorMortis,
    ]
  );

  const renderScaleHud = () => (
    <div className="space-y-4">
      {/* Zoom 1 HUD: Biomechanics Readout */}
      {zoomLevel === 1 && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-rose-400 block uppercase tracking-wider">
              {isArabic ? 'الميكانيكا الحيوية للذراع:' : 'Biomechanics Readout:'}
            </span>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{isArabic ? 'زاوية مفصل الكوع:' : 'Elbow Joint Angle:'}</span>
              <span className="font-mono text-emerald-400 font-bold">{Math.round(armAngle)}°</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{isArabic ? 'حالة العضلة ذات الرأسين:' : 'Biceps State:'}</span>
              <span className="font-mono text-rose-400 font-bold">
                {contractionPercent > 70
                  ? isArabic ? 'انقباض قوي (انتفاخ البطن)' : 'Fully Contracted (Bulged)'
                  : contractionPercent > 20
                  ? isArabic ? 'انقباض جزئي' : 'Partial Flexion'
                  : isArabic ? 'انبساط (طول راحة)' : 'Relaxed / Extended'}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{isArabic ? 'العضلة المقابلة (Triceps):' : 'Antagonistic Triceps:'}</span>
              <span className="font-mono text-sky-400 font-semibold">{isArabic ? 'منبسطة' : 'Relaxed'}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
            <Sparkles className="w-4 h-4 text-amber-400 inline mr-1" />
            <span>
              {isArabic
                ? 'قاعدة وزارية: تتصل العضلة الهيكلية بالعظام عبر الأوتار (نسيج ضام ليفي قوي غير مرن)، فتنقل قوة انقباض الساركوميرات إلى العظام مسببة الحركة عند المفاصل.'
                : 'Ministerial Core Concept: Skeletal muscles attach to bones via inelastic tendons, translating microscopic sarcomere shortening into macroscopic skeletal joint movement.'}
            </span>
          </div>
        </div>
      )}

      {/* Zoom 2 HUD: Hierarchical Tissue Anatomy */}
      {zoomLevel === 2 && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
            <span className="font-bold text-rose-400 block uppercase tracking-wider">
              {isArabic ? 'التسلسل الهيكلي للنسيج العضلي:' : 'Hierarchical Anatomy:'}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {isArabic
                ? 'تتكون العضلة من عدد كبير من الحزم العضلية (Fascicles) المحاطة بغشاء الحزمة (Perimysium). وتحتوي كل حزمة على مجموعة ألياف عضلية (خلايا أسطوانية عديدة الأنوية) يتراوح عددها بين ٥ إلى ١٠٠ ليفة.'
                : 'The whole muscle consists of fascicles surrounded by perimysium. Each fascicle houses 5 to 100 multinucleated muscle fibers (cells), each packed with 1,000 to 2,000 myofibrils.'}
            </p>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-emerald-400 text-[11px]">
              {isArabic ? '١ ليفة عضلية = ١٠٠٠ إلى ٢٠٠٠ لييفة' : '1 Muscle Fiber = 1,000–2,000 Myofibrils'}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200">
            <Info className="w-4 h-4 text-purple-400 inline mr-1" />
            <span>
              {isArabic
                ? 'الأغشية الضامة: غشاء العضلة (Epimysium) ⟵ غشاء الحزمة (Perimysium) ⟵ غشاء الليفة (Endomysium / Sarcolemma).'
                : 'Connective Sheaths: Epimysium (outer muscle) ⟶ Perimysium (fascicle) ⟶ Endomysium/Sarcolemma (muscle fiber cell).'}
            </span>
          </div>
        </div>
      )}

      {/* Zoom 3 HUD: Quantitative Band Status Table */}
      {zoomLevel === 3 && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
            <h4 className="font-black text-rose-400 flex items-center gap-1.5 mb-2">
              <Info className="w-4 h-4" />
              <span>{isArabic ? 'جدول القياسات الدقيقة للمناطق:' : 'Quantitative Band Status:'}</span>
            </h4>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-300">{isArabic ? 'المسافة بين خطي Z:' : 'Z-Discs Distance:'}</span>
              <span className="font-mono font-bold text-emerald-400">
                {isArabic ? `${toHindiDigits(sarcomereLength.toFixed(2))} µm` : `${sarcomereLength.toFixed(2)} µm`}
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-300">{isArabic ? 'المنطقة H (شبه المضيئة):' : 'H-Zone Width:'}</span>
              <span className="font-mono font-bold text-amber-400">
                {hZoneLength === 0
                  ? isArabic ? '٠ µm (تنعدم تماماً)' : '0 µm (Vanished)'
                  : `${sarcomereLength <= 1.85 ? '0.00' : hZoneLength.toFixed(2)} µm`}
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-300">{isArabic ? 'المنطقة A (الداكنة):' : 'A-Band Length:'}</span>
              <span className="font-mono font-bold text-purple-400">{aBandLength.toFixed(2)} µm ({isArabic ? 'ثابتة' : 'Constant'})</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-300">{isArabic ? 'المنطقة I (المضيئة):' : 'I-Band Length:'}</span>
              <span className="font-mono font-bold text-orange-400">{iBandTotal.toFixed(2)} µm ({isArabic ? 'تقل' : 'Shortens'})</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 inline mr-1" />
            <span>
              {isArabic
                ? 'نظرية الخيوط المنزلقة (هكسلي): تنزلق خيوط الأكتين باتجاه خط M بمساعدة الروابط المستعرضة للميوسين، فيقل طول القطعة العضلية وتختفي المنطقة H ويبقى طول المنطقة A ثابتاً.'
                : "Huxley's Sliding Filament: Actin filaments slide toward the M-line pulled by myosin cross-bridges. The sarcomere shortens, H-zone vanishes, while A-band length remains constant."}
            </span>
          </div>
        </div>
      )}

      {/* Zoom 4 HUD: Huxley Cross-Bridge Molecular Controls */}
      {zoomLevel === 4 && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-rose-400 block uppercase tracking-wider">
              {isArabic ? 'المتحكمات الكيميائية الحيوية:' : 'Biochemical Sliders:'}
            </span>

            {/* Ca2+ Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">{isArabic ? 'تركيز أيونات الكالسيوم (Ca²⁺):' : 'Calcium (Ca²⁺) Level:'}</span>
                <span className="font-mono text-cyan-400 font-bold">{caLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={caLevel}
                onChange={(e) => setCaLevel(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <p className="text-[11px] text-slate-500">
                {isArabic ? 'يكشف مواقع الارتباط على خيوط الأكتين' : 'Uncovers myosin-binding sites on actin'}
              </p>
            </div>

            {/* ATP Level Slider */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">{isArabic ? 'مستوى جزيئات الطاقة (ATP):' : 'ATP Energy Level:'}</span>
                <span className="font-mono text-amber-400 font-bold">{atpLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={atpLevel}
                onChange={(e) => setAtpLevel(parseInt(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <p className="text-[11px] text-slate-500">
                {isArabic ? 'ضروري لحركة الروابط وانفصالها عن الأكتين' : 'Needed for power stroke & cross-bridge detachment'}
              </p>
            </div>

            {/* Rigor Mortis Warning Alert */}
            {isRigorMortis && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-600/80 text-rose-200 text-xs flex items-start gap-2 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">
                    {isArabic ? 'حالة شد عضلي مؤلم / تيبس (Rigor Mortis)!' : 'Rigor Mortis / Severe Muscle Cramp!'}
                  </span>
                  <p className="text-[11px] text-rose-300/90 mt-0.5">
                    {isArabic
                      ? 'تناقص ATP مع بقاء الكالسيوم يمنع انفصال الروابط المستعرضة عن الأكتين، فتظل العضلة في حالة انقباض مستمر.'
                      : 'Depletion of ATP with elevated calcium prevents cross-bridges from detaching from actin, locking muscle in continuous spasm.'}
                  </p>
                </div>
              </div>
            )}

            {/* Step Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              {[
                { id: 1, labelEn: '1. Ca²⁺ Binds', labelAr: '١. ارتباط الكالسيوم' },
                { id: 2, labelEn: '2. Cross-Bridge', labelAr: '٢. تكوين الرابطة' },
                { id: 3, labelEn: '3. Power Stroke', labelAr: '٣. حركة الشد' },
                { id: 4, labelEn: '4. ATP Detachment', labelAr: '٤. انفصال بـ ATP' },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setMolecularStep(st.id)}
                  className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    molecularStep === st.id
                      ? 'bg-rose-600 text-white shadow'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isArabic ? st.labelAr : st.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderActionBar = () => (
    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
      <div className="flex items-center justify-between gap-4">
        <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-rose-400" />
          <span>{isArabic ? 'التحكم العام في انقباض الساركومير:' : 'Master Sarcomere Contraction Slider:'}</span>
        </label>
        <span className="text-xs font-mono font-black text-rose-400">
          {sarcomereLength <= 1.88
            ? isArabic ? 'انقباض تام (تختفي H)' : 'Full Contraction (H disappears)'
            : sarcomereLength >= 2.7
            ? isArabic ? 'انبساط كامل (أقصى اتساع لـ H)' : 'Full Relaxation (Max H)'
            : isArabic ? 'انقباض جزئي' : 'Partial Contraction'}
        </span>
      </div>

      <input
        type="range"
        min="1.8"
        max="2.8"
        step="0.02"
        value={sarcomereLength}
        onChange={(e) => setSarcomereLength(parseFloat(e.target.value))}
        className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
      />

      {/* Action Controls & Presets */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-0.5">
        <div className="flex items-center gap-2">
          <button
            onClick={handleAnimateTwitch}
            disabled={isAnimating}
            className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center gap-1.5 shadow-md shadow-rose-600/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تشغيل هزة عضلية كاملة (Twitch Cycle)' : 'Animate Muscle Twitch (60 FPS)'}</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isArabic ? 'إعادة ضبط' : 'Reset'}</span>
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-slate-400 font-semibold mr-1">
            {isArabic ? 'حالات جاهزة:' : 'Presets:'}
          </span>
          <button
            onClick={() => applyPreset('resting')}
            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
          >
            {isArabic ? 'انبساط' : 'Resting'}
          </button>
          <button
            onClick={() => applyPreset('partial')}
            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
          >
            {isArabic ? 'جزئي' : 'Partial'}
          </button>
          <button
            onClick={() => applyPreset('max')}
            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 hover:bg-slate-700 text-rose-300 transition-all cursor-pointer"
          >
            {isArabic ? 'انقباض تام' : 'Full'}
          </button>
          <button
            onClick={() => applyPreset('rigor')}
            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-800/60 transition-all cursor-pointer"
          >
            {isArabic ? 'شد عضلي' : 'Rigor'}
          </button>
        </div>
      </div>
    </div>
  );

  // FULL-SCREEN WORKSTATION MODE
  if (isFullscreen) {
    return (
      <div
        className={`fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 transition-colors select-none ${
          isContrast
            ? 'bg-black text-white'
            : isLight
            ? 'bg-slate-100 text-slate-900'
            : 'bg-slate-950 text-slate-100'
        }`}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {/* Top Header Bar */}
        <div className="h-12 shrink-0 px-3 py-1.5 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-transparent flex items-center justify-between gap-2 backdrop-blur-md">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-xs shrink-0">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <h3 className="text-xs sm:text-sm font-black tracking-tight truncate">
              {isArabic
                ? 'محاكي انقباض العضلات الهيكلية متعدد المقاييس'
                : 'Multi-Scale Skeletal Muscle Contraction Simulator'}
            </h3>
          </div>

          {/* 4-Scale Zoom Selector Buttons */}
          <div
            className={`flex items-center p-0.5 rounded-xl border flex-wrap gap-1 ${
              isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
            }`}
          >
            {[
              { level: 1 as ZoomLevel, labelEn: '1. Arm', labelAr: '١. الذراع' },
              { level: 2 as ZoomLevel, labelEn: '2. Fascicle', labelAr: '٢. الحزمة' },
              { level: 3 as ZoomLevel, labelEn: '3. Sarcomere', labelAr: '٣. الساركومير' },
              { level: 4 as ZoomLevel, labelEn: '4. Actin/Myosin', labelAr: '٤. الروابط' },
            ].map((sc) => (
              <button
                key={sc.level}
                onClick={() => setZoomLevel(sc.level)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  zoomLevel === sc.level
                    ? 'bg-rose-600 text-white shadow-xs'
                    : isLight
                    ? 'text-slate-700 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? sc.labelAr : sc.labelEn}
              </button>
            ))}
          </div>

          {/* Fullscreen Exit Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="px-2.5 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border-rose-500/50"
            title={isArabic ? 'تصغير الشاشة (Esc)' : 'Exit Fullscreen (Esc)'}
          >
            <Minimize2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">{isArabic ? 'تصغير' : 'Exit'}</span>
          </button>
        </div>

        {/* Main Split Stage */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 my-2 overflow-hidden">
          {/* Canvas Viewport */}
          <div className="lg:col-span-8 h-full min-h-0 flex flex-col rounded-2xl overflow-hidden [&>*]:flex-1 [&>*]:!min-h-0 [&>*]:h-full [&>*]:w-full [&>*]:!aspect-auto">
            <CanvasSimulationViewport
              key={`sarcomere-scale-${zoomLevel}`}
              id={`sarcomere-scale-${zoomLevel}`}
              lang={lang}
              theme={theme}
              animated={true}
              onRender={handleViewportRender}
            />
          </div>

          {/* Scale HUD Readouts */}
          <div className="lg:col-span-4 h-full min-h-0 overflow-y-auto pr-1">
            {renderScaleHud()}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="shrink-0">
          {renderActionBar()}
        </div>
      </div>
    );
  }

  // EMBEDDED FALLBACK MODE
  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-rose-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header & Multi-Scale Zoom Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/20">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <h3 className="text-lg font-black tracking-tight">
              {isArabic
                ? 'محاكي انقباض العضلات الهيكلية متعدد المقاييس (من العضو إلى الجزيء)'
                : 'Multi-Scale Skeletal Muscle Contraction Simulator'}
            </h3>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'تدرج مجهري تفاعلي ٦٠ إطار/ثانية: الذراع (العضو) ⟵ الحزمة العضلية (النسيج) ⟵ الساركومير (الخلية) ⟵ خيوط الأكتين والميوسين وATP (الجزيء)'
              : 'Interactive 60 FPS 4-level zoom: Arm (Organism) ⟶ Muscle Fascicle (Tissue) ⟶ Sarcomere (Cellular) ⟶ Actin/Myosin Cross-Bridges (Molecular)'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* 4-Scale Zoom Selector Buttons */}
          <div
            className={`flex items-center p-1 rounded-xl border flex-wrap gap-1 ${
              isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
            }`}
          >
            {[
              { level: 1 as ZoomLevel, labelEn: '1. Arm (Macro)', labelAr: '١. العضو (الذراع)' },
              { level: 2 as ZoomLevel, labelEn: '2. Fascicle (Tissue)', labelAr: '٢. النسيج (الحزمة)' },
              { level: 3 as ZoomLevel, labelEn: '3. Sarcomere (Cell)', labelAr: '٣. الخلية (الساركومير)' },
              { level: 4 as ZoomLevel, labelEn: '4. Actin/Myosin (Nano)', labelAr: '٤. الجزيء (الروابط)' },
            ].map((sc) => (
              <button
                key={sc.level}
                onClick={() => setZoomLevel(sc.level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  zoomLevel === sc.level
                    ? 'bg-rose-600 text-white shadow-sm'
                    : isLight
                    ? 'text-slate-700 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isArabic ? sc.labelAr : sc.labelEn}
              </button>
            ))}
          </div>

          {/* Fullscreen Maximize Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="px-3 py-1.5 rounded-xl text-xs font-black border flex items-center gap-1.5 shadow-sm transition-all cursor-pointer bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border-rose-500/40"
            title={isArabic ? 'ملء الشاشة' : 'Fullscreen'}
          >
            <Maximize2 className="w-3.5 h-3.5 text-rose-400" />
            <span>{isArabic ? 'ملء الشاشة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage for Selected Zoom Level */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Continuous 60 FPS Canvas Simulation Viewport */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <CanvasSimulationViewport
            key={`sarcomere-scale-embed-${zoomLevel}`}
            id={`sarcomere-scale-embed-${zoomLevel}`}
            lang={lang}
            theme={theme}
            aspectRatio="aspect-[16/10]"
            minHeight={380}
            animated={true}
            onRender={handleViewportRender}
          />
        </div>

        {/* Scale-Specific Educational HUD & Readouts */}
        <div className="lg:col-span-4 space-y-4">
          {renderScaleHud()}
        </div>
      </div>

      {/* Global Mechanical Sliders & Action Bar (Available across all zoom scales) */}
      <div className="mt-5">
        {renderActionBar()}
      </div>
    </div>
  );
};
