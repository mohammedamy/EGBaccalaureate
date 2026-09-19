import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Eye,
  Sun,
  Layers,
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sliders,
  Info,
  Crosshair,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../labs/useNativeLabFullscreen';
import type { ThemeMode } from '../../types/curriculum';

export type ObjectiveLens = '4x' | '10x' | '40x' | '100x';
export type SpecimenType = 'onion_epidermis' | 'human_blood' | 'mitosis_root' | 'bacteria_smear';
export type StainType = 'unstained' | 'methylene_blue' | 'iodine' | 'gram_stain';

export interface ObjectiveSpec {
  mag: number;
  na: number; // Numerical Aperture
  dinColor: string; // DIN / ISO standard color band
  dinName: string;
  workingDistanceMm: number;
  fieldDiameterUm: number;
  isOil: boolean;
}

export const OBJECTIVE_SPECS: Record<ObjectiveLens, ObjectiveSpec> = {
  '4x': {
    mag: 4,
    na: 0.10,
    dinColor: '#ef4444', // Red DIN
    dinName: 'Scanning',
    workingDistanceMm: 18.5,
    fieldDiameterUm: 4500,
    isOil: false,
  },
  '10x': {
    mag: 10,
    na: 0.25,
    dinColor: '#eab308', // Yellow DIN
    dinName: 'Low Power',
    workingDistanceMm: 7.0,
    fieldDiameterUm: 1800,
    isOil: false,
  },
  '40x': {
    mag: 40,
    na: 0.65,
    dinColor: '#0284c7', // Blue DIN
    dinName: 'High Dry',
    workingDistanceMm: 0.65,
    fieldDiameterUm: 450,
    isOil: false,
  },
  '100x': {
    mag: 100,
    na: 1.25,
    dinColor: '#f8fafc', // White DIN
    dinName: 'Oil Immersion',
    workingDistanceMm: 0.18,
    fieldDiameterUm: 180,
    isOil: true,
  },
};

interface VirtualMicroscopeProps {
  lang?: 'en' | 'ar';
  theme?: ThemeMode;
  defaultFullscreen?: boolean;
}

export const VirtualMicroscope: React.FC<VirtualMicroscopeProps> = ({
  lang = 'en',
  theme = 'dark',
  defaultFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { isFullscreen, toggleFullscreen, exitFullscreen } = useNativeLabFullscreen({
    defaultFullscreen,
  });

  // Microscope Controls
  const [lens, setLens] = useState<ObjectiveLens>('10x');
  const [coarseFocus, setCoarseFocus] = useState<number>(50); // Optimal at 50
  const [fineFocus, setFineFocus] = useState<number>(50);     // Optimal at 50
  const [stageX, setStageX] = useState<number>(0);            // -50 to 50
  const [stageY, setStageY] = useState<number>(0);            // -50 to 50
  const [lightIntensity, setLightIntensity] = useState<number>(85); // 10-100%
  const [aperture, setAperture] = useState<number>(75);       // 20-100%
  const [specimen, setSpecimen] = useState<SpecimenType>('onion_epidermis');
  const [stain, setStain] = useState<StainType>('methylene_blue');
  const [showReticle, setShowReticle] = useState<boolean>(true);

  const currentSpec = OBJECTIVE_SPECS[lens];
  const ocularMagnification = 10;
  const totalMagnification = currentSpec.mag * ocularMagnification;

  // Strict physical focal blur: higher deviation = blurrier.
  // High NA lenses have much shallower depth of field.
  const coarseDev = Math.abs(coarseFocus - 50);
  const fineDev = Math.abs(fineFocus - 50);
  const naFactor = currentSpec.na / 0.25; // normalized to 10x
  const rawDeviation = (coarseDev * 0.45 + fineDev * 0.12) * naFactor;
  const blurPx = Math.min(22, rawDeviation);

  // Quick helper to reset focus to crystal clear
  const handleAutoFocus = useCallback(() => {
    setCoarseFocus(50);
    setFineFocus(50);
  }, []);

  // Quick helper to recenter stage
  const handleRecenterStage = useCallback(() => {
    setStageX(0);
    setStageY(0);
  }, []);

  // Render Specimen Viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;

    // Viewport Geometry
    const outerBezelRadius = Math.min(cx, cy) - 4;
    const fieldRadius = Math.min(cx, cy) - 22;

    // 1. Clear outer canvas with dark matte instrument surround
    ctx.fillStyle = '#06090e';
    ctx.fillRect(0, 0, w, h);

    // 2. Draw authentic milled metallic microscope collar & DIN color ring
    ctx.save();
    // Metal collar gradient
    const metalGrad = ctx.createLinearGradient(cx - outerBezelRadius, cy - outerBezelRadius, cx + outerBezelRadius, cy + outerBezelRadius);
    metalGrad.addColorStop(0, '#1e293b');
    metalGrad.addColorStop(0.25, '#475569');
    metalGrad.addColorStop(0.5, '#334155');
    metalGrad.addColorStop(0.75, '#64748b');
    metalGrad.addColorStop(1, '#1e293b');

    ctx.fillStyle = metalGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, outerBezelRadius, 0, Math.PI * 2);
    ctx.arc(cx, cy, fieldRadius, 0, Math.PI * 2, true);
    ctx.fill();

    // 72 Knurled / Milled radial ridges on the collar
    const ridgeCount = 72;
    for (let i = 0; i < ridgeCount; i++) {
      const angle = (i / ridgeCount) * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const rInner = fieldRadius + 6;
      const rOuter = outerBezelRadius - 3;

      ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.55)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx + cos * rInner, cy + sin * rInner);
      ctx.lineTo(cx + cos * rOuter, cy + sin * rOuter);
      ctx.stroke();
    }

    // DIN Standard Objective Color Ring on the inner bezel lip
    ctx.strokeStyle = currentSpec.dinColor;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(cx, cy, fieldRadius + 2.5, 0, Math.PI * 2);
    ctx.stroke();

    // Inner bezel shadow
    ctx.strokeStyle = '#090d16';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, fieldRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 3. Circular Optical Field of View Clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, fieldRadius, 0, Math.PI * 2);
    ctx.clip();

    // Base Kohler Illumination
    const lightLevel = (lightIntensity / 100) * 0.95;
    const contrastFactor = aperture / 100;

    // Specimen background tinting based on biological stain
    let baseFieldColor = `rgba(248, 250, 252, ${lightLevel})`;
    if (stain === 'methylene_blue') {
      baseFieldColor = `rgba(224, 242, 254, ${lightLevel})`;
    } else if (stain === 'iodine') {
      baseFieldColor = `rgba(254, 243, 199, ${lightLevel})`;
    } else if (stain === 'gram_stain') {
      baseFieldColor = `rgba(250, 245, 255, ${lightLevel})`;
    }

    ctx.fillStyle = baseFieldColor;
    ctx.fillRect(0, 0, w, h);

    // Apply optical focus blur filter
    ctx.filter = blurPx > 0.3 ? `blur(${blurPx.toFixed(1)}px)` : 'none';

    // 4. Procedural Cytology Renderers
    ctx.save();
    // Offset by mechanical stage movement
    const stageScaleX = (stageX / 50) * (fieldRadius * 0.7);
    const stageScaleY = (stageY / 50) * (fieldRadius * 0.7);
    ctx.translate(cx + stageScaleX, cy + stageScaleY);

    const zoomScale = totalMagnification / 100; // 100x = 1.0; 40x = 0.4; 400x = 4.0; 1000x = 10.0

    // RENDER SPECIMEN 1: ONION EPIDERMAL CELLS (Allium cepa)
    if (specimen === 'onion_epidermis') {
      const cellW = 120 * zoomScale;
      const cellH = 44 * zoomScale;
      const cols = Math.ceil(fieldRadius / cellW) + 2;
      const rows = Math.ceil(fieldRadius / cellH) + 2;

      // Color scheme based on histological stain
      let wallColor = stain === 'unstained' ? 'rgba(100, 116, 139, 0.5)' : stain === 'iodine' ? '#92400e' : stain === 'methylene_blue' ? '#1d4ed8' : '#6b21a8';
      let nucColor = stain === 'unstained' ? 'rgba(71, 85, 105, 0.4)' : stain === 'iodine' ? '#78350f' : stain === 'methylene_blue' ? '#1e3a8a' : '#581c87';
      let nucleolusColor = stain === 'unstained' ? 'rgba(51, 65, 85, 0.6)' : stain === 'iodine' ? '#451a03' : stain === 'methylene_blue' ? '#0f172a' : '#3b0764';
      let cytoTint = stain === 'iodine' ? 'rgba(253, 230, 138, 0.35)' : stain === 'methylene_blue' ? 'rgba(191, 219, 254, 0.4)' : 'rgba(241, 245, 249, 0.2)';

      ctx.lineWidth = Math.max(1, 1.8 * Math.sqrt(zoomScale));

      for (let r = -rows; r <= rows; r++) {
        const xOffset = (r % 2) * (cellW * 0.5);
        for (let c = -cols; c <= cols; c++) {
          const px = c * cellW + xOffset;
          const py = r * cellH;

          // Double cell wall (cellulose wall + middle lamella)
          ctx.strokeStyle = wallColor;
          ctx.fillStyle = cytoTint;
          ctx.beginPath();
          ctx.rect(px, py, cellW, cellH);
          ctx.fill();
          ctx.stroke();

          // Middle lamella inner accent at higher zoom
          if (zoomScale >= 1.0) {
            ctx.strokeStyle = stain === 'iodine' ? 'rgba(146, 64, 14, 0.3)' : 'rgba(30, 58, 138, 0.3)';
            ctx.strokeRect(px + 2, py + 2, cellW - 4, cellH - 4);
          }

          // Large central vacuole displacing cytoplasm to periphery
          if (zoomScale >= 1.0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.beginPath();
            ctx.ellipse(px + cellW * 0.5, py + cellH * 0.5, cellW * 0.35, cellH * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
          }

          // Eccentric Nucleus pressed against the cell wall
          const nucX = px + cellW * 0.72;
          const nucY = py + cellH * 0.6;
          const nucRadius = 5.5 * zoomScale;

          if (stain !== 'unstained' || contrastFactor > 0.5) {
            ctx.fillStyle = nucColor;
            ctx.beginPath();
            ctx.ellipse(nucX, nucY, nucRadius * 1.2, nucRadius * 0.9, 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Dark distinct nucleolus inside nucleus
            ctx.fillStyle = nucleolusColor;
            ctx.beginPath();
            ctx.arc(nucX + nucRadius * 0.2, nucY - nucRadius * 0.1, Math.max(1, nucRadius * 0.35), 0, Math.PI * 2);
            ctx.fill();

            // Transvacuolar cytoplasmic strands radiating to the wall
            if (zoomScale >= 2.0) {
              ctx.strokeStyle = stain === 'methylene_blue' ? 'rgba(37, 99, 235, 0.35)' : 'rgba(180, 83, 9, 0.35)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(nucX, nucY);
              ctx.lineTo(px + cellW * 0.15, py + cellH * 0.3);
              ctx.moveTo(nucX, nucY);
              ctx.lineTo(px + cellW * 0.85, py + cellH * 0.2);
              ctx.stroke();
            }
          }
        }
      }
    }

    // RENDER SPECIMEN 2: HUMAN BLOOD SMEAR (Wright-Giemsa Cytology)
    else if (specimen === 'human_blood') {
      const rbcBaseRadius = 6.5 * zoomScale;
      const count = zoomScale >= 4.0 ? 35 : zoomScale >= 1.0 ? 95 : 180;

      // Deterministic pseudo-random generation of erythrocytes
      for (let i = 0; i < count; i++) {
        // Seeded polar distribution
        const angle = (i * 137.5 * Math.PI) / 180; // Golden angle phyllotaxis
        const dist = Math.sqrt(i / count) * (fieldRadius * 1.2);
        const bx = Math.cos(angle) * dist;
        const by = Math.sin(angle) * dist;

        const jitterX = Math.sin(i * 7.3) * 3 * zoomScale;
        const jitterY = Math.cos(i * 11.1) * 3 * zoomScale;
        const cxRbc = bx + jitterX;
        const cyRbc = by + jitterY;

        // Outer biconcave ring (hemoglobin salmon-pink)
        ctx.fillStyle = stain === 'unstained' ? 'rgba(239, 68, 68, 0.45)' : 'rgba(225, 29, 72, 0.72)';
        ctx.beginPath();
        ctx.arc(cxRbc, cyRbc, rbcBaseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner pale central pallor (thinner biconcave indentation)
        ctx.fillStyle = stain === 'unstained' ? 'rgba(254, 226, 226, 0.5)' : 'rgba(254, 205, 211, 0.65)';
        ctx.beginPath();
        ctx.arc(cxRbc, cyRbc, rbcBaseRadius * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }

      // Leukocyte 1: Neutrophil with characteristic multi-lobed nucleus
      const neutX = -25 * zoomScale;
      const neutY = 15 * zoomScale;
      const neutRadius = 11.5 * zoomScale;

      ctx.fillStyle = stain === 'unstained' ? 'rgba(148, 163, 184, 0.5)' : 'rgba(245, 208, 254, 0.75)';
      ctx.beginPath();
      ctx.arc(neutX, neutY, neutRadius, 0, Math.PI * 2);
      ctx.fill();

      // Multi-lobed nucleus (3 connected lobes)
      if (stain !== 'unstained' || contrastFactor > 0.5) {
        ctx.fillStyle = '#4a044e';
        const lobeR = 3.6 * zoomScale;
        // Lobe 1
        ctx.beginPath();
        ctx.arc(neutX - 4 * zoomScale, neutY - 3 * zoomScale, lobeR, 0, Math.PI * 2);
        ctx.fill();
        // Lobe 2
        ctx.beginPath();
        ctx.arc(neutX + 4 * zoomScale, neutY - 2 * zoomScale, lobeR, 0, Math.PI * 2);
        ctx.fill();
        // Lobe 3
        ctx.beginPath();
        ctx.arc(neutX, neutY + 4 * zoomScale, lobeR * 1.1, 0, Math.PI * 2);
        ctx.fill();
        // Chromatin connection bridges
        ctx.lineWidth = 1.5 * zoomScale;
        ctx.strokeStyle = '#4a044e';
        ctx.beginPath();
        ctx.moveTo(neutX - 4 * zoomScale, neutY - 3 * zoomScale);
        ctx.lineTo(neutX + 4 * zoomScale, neutY - 2 * zoomScale);
        ctx.lineTo(neutX, neutY + 4 * zoomScale);
        ctx.stroke();
      }

      // Leukocyte 2: Small Lymphocyte (Large dense round nucleus filling almost entire cell)
      const lymphX = 35 * zoomScale;
      const lymphY = -30 * zoomScale;
      const lymphRadius = 8.5 * zoomScale;

      ctx.fillStyle = 'rgba(186, 230, 253, 0.6)';
      ctx.beginPath();
      ctx.arc(lymphX, lymphY, lymphRadius, 0, Math.PI * 2);
      ctx.fill();

      // Densely packed spherical purple nucleus
      if (stain !== 'unstained') {
        ctx.fillStyle = '#3b0764';
        ctx.beginPath();
        ctx.arc(lymphX, lymphY, lymphRadius * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }

      // Platelets (Thrombocytes): Small purple fragments
      for (let p = 0; p < 12; p++) {
        const px = (Math.sin(p * 2.3) * 60 + Math.cos(p * 1.7) * 20) * (zoomScale * 0.8);
        const py = (Math.cos(p * 3.1) * 50 - Math.sin(p * 1.1) * 30) * (zoomScale * 0.8);
        ctx.fillStyle = '#6b21a8';
        ctx.beginPath();
        ctx.arc(px, py, 1.8 * zoomScale, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // RENDER SPECIMEN 3: MITOSIS IN ALLIUM ROOT APICAL MERISTEM
    else if (specimen === 'mitosis_root') {
      const cellDim = 52 * zoomScale;
      const gridLimit = Math.ceil(fieldRadius / cellDim) + 1;

      for (let r = -gridLimit; r <= gridLimit; r++) {
        for (let c = -gridLimit; c <= gridLimit; c++) {
          const px = c * cellDim;
          const py = r * cellDim;

          // Meristematic cuboidal cell wall
          ctx.strokeStyle = stain === 'methylene_blue' ? '#1e3a8a' : '#581c87';
          ctx.lineWidth = 1.6;
          ctx.strokeRect(px, py, cellDim, cellDim);

          // Phase selection based on coordinates
          const phaseId = Math.abs((r * 3 + c * 7 + 13) % 10);
          const cxCell = px + cellDim * 0.5;
          const cyCell = py + cellDim * 0.5;

          const chromoColor = stain === 'methylene_blue' ? '#1e40af' : '#701a75';

          if (phaseId === 0) {
            // METAPHASE: Chromosomes lined up tightly on equatorial plate
            ctx.fillStyle = chromoColor;
            ctx.beginPath();
            ctx.ellipse(cxCell, cyCell, cellDim * 0.12, cellDim * 0.38, 0, 0, Math.PI * 2);
            ctx.fill();
            // Spindle fiber traces
            ctx.strokeStyle = 'rgba(147, 51, 234, 0.25)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(px + 4, cyCell);
            ctx.lineTo(cxCell, cyCell);
            ctx.lineTo(px + cellDim - 4, cyCell);
            ctx.stroke();
          } else if (phaseId === 1) {
            // ANAPHASE: Sister chromatids separated into two V-shaped sets
            ctx.fillStyle = chromoColor;
            // Set A moving left
            ctx.beginPath();
            ctx.ellipse(cxCell - cellDim * 0.22, cyCell, cellDim * 0.08, cellDim * 0.32, 0, 0, Math.PI * 2);
            ctx.fill();
            // Set B moving right
            ctx.beginPath();
            ctx.ellipse(cxCell + cellDim * 0.22, cyCell, cellDim * 0.08, cellDim * 0.32, 0, 0, Math.PI * 2);
            ctx.fill();
          } else if (phaseId === 2) {
            // TELOPHASE & CYTOKINESIS: Re-forming nuclei and nascent cell plate
            ctx.fillStyle = chromoColor;
            ctx.beginPath();
            ctx.arc(cxCell - cellDim * 0.26, cyCell, cellDim * 0.16, 0, Math.PI * 2);
            ctx.arc(cxCell + cellDim * 0.26, cyCell, cellDim * 0.16, 0, Math.PI * 2);
            ctx.fill();
            // Nascent phragmoplast / cell plate
            ctx.strokeStyle = '#e11d48';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cxCell, py + 6);
            ctx.lineTo(cxCell, py + cellDim - 6);
            ctx.stroke();
          } else if (phaseId === 3) {
            // PROPHASE: Coiled condensing chromatin threads
            ctx.strokeStyle = chromoColor;
            ctx.lineWidth = 2 * Math.sqrt(zoomScale);
            ctx.beginPath();
            for (let t = 0; t < 5; t++) {
              const tx = cxCell + Math.sin(t * 1.8) * (cellDim * 0.25);
              const ty = cyCell + Math.cos(t * 2.1) * (cellDim * 0.25);
              if (t === 0) ctx.moveTo(tx, ty);
              else ctx.lineTo(tx, ty);
            }
            ctx.stroke();
          } else {
            // INTERPHASE: Granular round nucleus with prominent nucleolus
            ctx.fillStyle = chromoColor;
            ctx.beginPath();
            ctx.arc(cxCell, cyCell, cellDim * 0.28, 0, Math.PI * 2);
            ctx.fill();

            // Dark nucleolus
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(cxCell + cellDim * 0.08, cyCell - cellDim * 0.06, cellDim * 0.08, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // RENDER SPECIMEN 4: BACTERIAL SMEAR (Gram Stain Cocci & Bacilli)
    else if (specimen === 'bacteria_smear') {
      const bacScale = zoomScale * 0.75;
      const bCount = zoomScale >= 4.0 ? 80 : 160;

      for (let i = 0; i < bCount; i++) {
        // Seeded scatter
        const bx = (((i * 47) % 380) - 190) * bacScale;
        const by = (((i * 83) % 380) - 190) * bacScale;

        if (i % 3 === 0) {
          // Gram-Negative Bacilli (E. coli): pink-red rods
          ctx.fillStyle = stain === 'gram_stain' ? '#e11d48' : stain === 'methylene_blue' ? '#2563eb' : 'rgba(100, 116, 139, 0.6)';
          const rodL = 9 * bacScale;
          const rodW = 3.5 * bacScale;
          ctx.beginPath();
          ctx.roundRect(bx - rodL / 2, by - rodW / 2, rodL, rodW, rodW / 2);
          ctx.fill();
        } else {
          // Gram-Positive Cocci (Staphylococcus): deep crystal violet spheres
          ctx.fillStyle = stain === 'gram_stain' ? '#4c1d95' : stain === 'methylene_blue' ? '#1e3a8a' : 'rgba(71, 85, 105, 0.6)';
          const coccusR = 2.2 * bacScale;
          ctx.beginPath();
          ctx.arc(bx, by, coccusR, 0, Math.PI * 2);
          ctx.fill();

          // Grape-like clustering pairs
          if (i % 4 === 0) {
            ctx.beginPath();
            ctx.arc(bx + coccusR * 1.5, by + coccusR * 0.8, coccusR, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    ctx.restore();
    ctx.filter = 'none';

    // 5. Eyepiece Vignette & Reticle Graticule
    // Natural optical edge vignetting
    const vignette = ctx.createRadialGradient(cx, cy, fieldRadius * 0.72, cx, cy, fieldRadius);
    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignette.addColorStop(0.85, 'rgba(5, 8, 15, 0.45)');
    vignette.addColorStop(1, 'rgba(3, 5, 10, 0.98)');
    ctx.fillStyle = vignette;
    ctx.beginPath();
    ctx.arc(cx, cy, fieldRadius, 0, Math.PI * 2);
    ctx.fill();

    // Eyepiece Calibrated Reticle / Graticule
    if (showReticle) {
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.4)';
      ctx.lineWidth = 1;

      // Central crosshair
      ctx.beginPath();
      ctx.moveTo(cx - 50, cy);
      ctx.lineTo(cx + 50, cy);
      ctx.moveTo(cx, cy - 50);
      ctx.lineTo(cx, cy + 50);
      ctx.stroke();

      // 10-Division Micrometric Graduation Ticks along crosshair
      for (let t = -4; t <= 4; t++) {
        if (t === 0) continue;
        const tickLength = t % 2 === 0 ? 6 : 3;
        // Horizontal axis ticks
        ctx.beginPath();
        ctx.moveTo(cx + t * 10, cy - tickLength);
        ctx.lineTo(cx + t * 10, cy + tickLength);
        // Vertical axis ticks
        ctx.moveTo(cx - tickLength, cy + t * 10);
        ctx.lineTo(cx + tickLength, cy + t * 10);
        ctx.stroke();
      }

      // Concentric 100 µm calibration dashed circle
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 6. Calibrated Physical Micron Scale Bar (Bottom Right of Viewport)
    // Scale bar length = (scaleBarUm / fieldDiameterUm) * (2 * fieldRadius)
    let scaleBarUm = 50;
    if (currentSpec.mag === 4) scaleBarUm = 500;
    else if (currentSpec.mag === 10) scaleBarUm = 200;
    else if (currentSpec.mag === 40) scaleBarUm = 50;
    else if (currentSpec.mag === 100) scaleBarUm = 10;

    const scaleBarPx = (scaleBarUm / currentSpec.fieldDiameterUm) * (2 * fieldRadius);
    const barX = cx + fieldRadius * 0.35;
    const barY = cy + fieldRadius * 0.72;

    // Dark pill backing for the scale bar
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    ctx.roundRect(barX - 8, barY - 18, scaleBarPx + 16, 28, 6);
    ctx.fill();

    // Scale bar line with serif endpoints
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(barX, barY);
    ctx.lineTo(barX + scaleBarPx, barY);
    // End serifs
    ctx.moveTo(barX, barY - 4);
    ctx.lineTo(barX, barY + 4);
    ctx.moveTo(barX + scaleBarPx, barY - 4);
    ctx.lineTo(barX + scaleBarPx, barY + 4);
    ctx.stroke();

    // Scale text
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${scaleBarUm} µm`, barX + scaleBarPx / 2, barY - 6);

    ctx.restore(); // restore clipping
  }, [
    lens,
    coarseFocus,
    fineFocus,
    stageX,
    stageY,
    lightIntensity,
    aperture,
    specimen,
    stain,
    showReticle,
    currentSpec,
    totalMagnification,
    blurPx,
  ]);

  // STYLES & TOKENS
  const panelBg = isContrast
    ? 'bg-black border-2 border-white text-white'
    : isLight
    ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
    : 'bg-[#161B22] border-[#30363D] text-[#C9D1D9]';

  const cardHeaderClass = isLight ? 'text-slate-900' : 'text-slate-100';
  const labelTextClass = isLight ? 'text-slate-600' : 'text-slate-400';
  const monoBadgeClass = isContrast
    ? 'font-mono text-xs font-bold text-white bg-black border border-white px-2 py-0.5 rounded'
    : isLight
    ? 'font-mono text-xs font-bold text-slate-900 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded'
    : 'font-mono text-xs font-bold text-slate-200 bg-[#0D1117] border border-[#30363D] px-2 py-0.5 rounded';

  const renderControlConsole = () => (
    <div className="space-y-2.5">
      {/* 1. Specimen Slide Selector */}
      <div className={`p-3 rounded-2xl border ${panelBg} space-y-1.5`}>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold flex items-center gap-1.5 ${cardHeaderClass}`}>
            <Layers className="w-3.5 h-3.5 text-emerald-500" />
            {isAr ? 'شريحة العينة الهستولوجية:' : 'Histological Slide:'}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">ISO 12772</span>
        </div>
        <select
          value={specimen}
          onChange={(e) => setSpecimen(e.target.value as SpecimenType)}
          aria-label={isAr ? 'اختر شريحة العينة' : 'Select Specimen Slide'}
          className={`w-full rounded-xl px-3 py-1.5 text-xs font-semibold cursor-pointer border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
            isContrast
              ? 'bg-black border-white text-white'
              : isLight
              ? 'bg-slate-50 border-slate-300 text-slate-900'
              : 'bg-[#0D1117] border-[#30363D] text-slate-200'
          }`}
        >
          <option value="onion_epidermis">
            {isAr ? 'خلايا بشرة البصل (Allium Cepa Epidermis)' : 'Onion Epidermis (Parenchyma & Vacuole)'}
          </option>
          <option value="human_blood">
            {isAr ? 'مسحة دم بشري (Human Blood Smear - RBC/WBC)' : 'Human Blood Smear (Wright-Giemsa)'}
          </option>
          <option value="mitosis_root">
            {isAr ? 'انقسام ميتوزي في قمة الجذر (Allium Root Tip Mitosis)' : 'Allium Root Tip (Mitotic Stages)'}
          </option>
          <option value="bacteria_smear">
            {isAr ? 'مسحة بكتيرية (Bacterial Smear - Gram +/-)' : 'Bacterial Smear (Gram-Stain Cocci/Bacilli)'}
          </option>
        </select>
      </div>

      {/* 2. Slide Staining Agent Picker */}
      <div className={`p-3 rounded-2xl border ${panelBg} space-y-2`}>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold flex items-center gap-1.5 ${cardHeaderClass}`}>
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            {isAr ? 'محلول الصبغة الكيميائية:' : 'Histological Stain:'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { id: 'unstained', en: 'Unstained', ar: 'بدون صبغ', color: '#94a3b8' },
            { id: 'methylene_blue', en: 'Methylene Blue', ar: 'أزرق الميثيلين', color: '#2563eb' },
            { id: 'iodine', en: 'Lugol Iodine', ar: 'محلول اليود', color: '#d97706' },
            { id: 'gram_stain', en: 'Gram Stain', ar: 'صبغة غرام', color: '#7c3aed' },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setStain(st.id as StainType)}
              className={`px-2.5 py-1.5 rounded-xl text-xs border transition-all cursor-pointer font-bold flex items-center gap-1.5 ${
                stain === st.id
                  ? isContrast
                    ? 'bg-white text-black border-white'
                    : 'bg-indigo-600/20 border-indigo-500 text-indigo-400 shadow-xs'
                  : isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  : 'bg-[#0D1117] border-[#30363D] text-slate-400 hover:bg-[#21262D] hover:text-slate-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: st.color }} />
              <span className="truncate">{isAr ? st.ar : st.en}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Coarse & Fine Focus Knobs */}
      <div className={`p-3 rounded-2xl border ${panelBg} space-y-2.5 text-xs`}>
        <div className="flex items-center justify-between">
          <span className={`font-bold flex items-center gap-1.5 ${cardHeaderClass}`}>
            <Sliders className="w-3.5 h-3.5 text-sky-500" />
            {isAr ? 'الضابطان التقريبي والدقيق:' : 'Coarse & Fine Focus:'}
          </span>
          <button
            onClick={handleAutoFocus}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
              blurPx <= 0.5
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                : 'bg-rose-500/20 text-rose-400 border-rose-500/40 hover:bg-rose-500/30'
            }`}
            title={isAr ? 'ضبط البؤرة تلقائياً' : 'Auto-Focus (Optimal 50/50)'}
          >
            <RotateCcw className="w-3 h-3" />
            <span>{isAr ? 'بؤرة تلقائية' : 'Auto-Focus'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={labelTextClass}>{isAr ? 'تقريبي (Coarse):' : 'Coarse:'}</span>
              <span className={monoBadgeClass}>{coarseFocus}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={coarseFocus}
              onChange={(e) => setCoarseFocus(parseInt(e.target.value))}
              aria-label={isAr ? 'الضابط التقريبي' : 'Coarse Focus'}
              className="w-full h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={labelTextClass}>{isAr ? 'دقيق (Fine):' : 'Fine:'}</span>
              <span className={monoBadgeClass}>{fineFocus}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={fineFocus}
              onChange={(e) => setFineFocus(parseInt(e.target.value))}
              aria-label={isAr ? 'الضابط الدقيق' : 'Fine Focus'}
              className="w-full h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* 4. Substage Condenser & LED Illumination */}
      <div className={`p-3 rounded-2xl border ${panelBg} space-y-2.5 text-xs`}>
        <div className="flex items-center justify-between">
          <span className={`font-bold flex items-center gap-1.5 ${cardHeaderClass}`}>
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            {isAr ? 'مكثف آبي والإضاءة السفلية:' : 'Abbe Condenser & LED:'}
          </span>
          <button
            onClick={() => setShowReticle((prev) => !prev)}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
              showReticle
                ? 'bg-sky-500/20 text-sky-400 border-sky-500/40'
                : 'bg-slate-700/30 text-slate-400 border-slate-700'
            }`}
          >
            <Crosshair className="w-3 h-3" />
            <span>{isAr ? 'مقياس عيني' : 'Reticle'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={labelTextClass}>{isAr ? 'شدة LED:' : 'LED Power:'}</span>
              <span className={monoBadgeClass}>{lightIntensity}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={lightIntensity}
              onChange={(e) => setLightIntensity(parseInt(e.target.value))}
              aria-label={isAr ? 'شدة الإضاءة' : 'LED Intensity'}
              className="w-full h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={labelTextClass}>{isAr ? 'فتحة القزحية:' : 'Iris Diaphragm:'}</span>
              <span className={monoBadgeClass}>{aperture}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={aperture}
              onChange={(e) => setAperture(parseInt(e.target.value))}
              aria-label={isAr ? 'فتحة القزحية' : 'Iris Aperture'}
              className="w-full h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
        </div>

        {/* Stage Translation */}
        <div className="pt-1 border-t border-slate-700/40">
          <div className="flex items-center justify-between mb-1.5">
            <span className={labelTextClass}>{isAr ? 'حركة المنضدة X/Y:' : 'Mechanical Stage X/Y:'}</span>
            <div className="flex items-center gap-2">
              <span className={monoBadgeClass}>
                X:{stageX > 0 ? `+${stageX}` : stageX} Y:{stageY > 0 ? `+${stageY}` : stageY}
              </span>
              {(stageX !== 0 || stageY !== 0) && (
                <button
                  onClick={handleRecenterStage}
                  className="text-[10px] text-sky-400 hover:underline cursor-pointer"
                >
                  {isAr ? 'تصفير' : 'Reset'}
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="-40"
              max="40"
              value={stageX}
              onChange={(e) => setStageX(parseInt(e.target.value))}
              aria-label="Stage X Translation"
              className="w-1/2 h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              title="Stage X"
            />
            <input
              type="range"
              min="-40"
              max="40"
              value={stageY}
              onChange={(e) => setStageY(parseInt(e.target.value))}
              aria-label="Stage Y Translation"
              className="w-1/2 h-2 bg-slate-700/60 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              title="Stage Y"
            />
          </div>
        </div>
      </div>

      {/* 5. Live Specimen Micro-Atlas Info Card */}
      <div className={`p-2.5 rounded-2xl border ${panelBg} text-[11px] leading-relaxed flex items-start gap-2`}>
        <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block text-emerald-500">
            {specimen === 'onion_epidermis' && (isAr ? 'خلايا نباتية حقيقية النواة:' : 'Eukaryotic Plant Cytology:')}
            {specimen === 'human_blood' && (isAr ? 'خلايا الدم البشرية:' : 'Peripheral Blood Smear:')}
            {specimen === 'mitosis_root' && (isAr ? 'الانقسام الميتوزي (قمة البصل):' : 'Mitosis in Allium Meristem:')}
            {specimen === 'bacteria_smear' && (isAr ? 'تفاضل صبغة غرام البكتيرية:' : 'Gram-Stain Differentiation:')}
          </span>
          <p className={labelTextClass}>
            {specimen === 'onion_epidermis' &&
              (isAr
                ? 'جدار خلوي سليلوزي، غشاء بلازمي، فجوة عصارية مركزية كبيرة تدفع السيتوبلازم والنواة إلى حافة الخلية.'
                : 'Cellulose cell wall, large central vacuole displacing the cytoplasm and nucleus to the periphery.')}
            {specimen === 'human_blood' &&
              (isAr
                ? 'كريات دم حمراء مقعرة الوجهين عديمة النواة، وخلايا دم بيضاء محببة مفصصة النواة (عدلة) وغير محببة (ليمفاوية).'
                : 'Biconcave non-nucleated erythrocytes (RBCs) and multi-lobed neutrophils with lilac-stained granules.')}
            {specimen === 'mitosis_root' &&
              (isAr
                ? 'خلايا مربعة الشكل سريعة الانقسام: الطور التمهيدي (تكثف الكروموسومات)، الاستوائي (على خط الاستواء)، الانفصالي، والنهائي.'
                : 'Rapidly dividing meristematic cells showing distinct prophase, metaphase equatorial plates, and anaphase chromatid separation.')}
            {specimen === 'bacteria_smear' &&
              (isAr
                ? 'المكورات العنقودية موجبة لصبغة غرام (بنفسجية داكنة)، وعصويات الإشريكية القولونية سالبة لصبغة غرام (وردية).'
                : 'Gram-positive staphylococci retain crystal violet (purple), while Gram-negative bacilli counterstain with safranin (pink).')}
          </p>
        </div>
      </div>
    </div>
  );

  // FULL-SCREEN WORKSTATION MODE
  if (isFullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 w-screen h-screen overflow-hidden flex flex-col p-2 sm:p-3 bg-[#06090e] text-slate-100 font-sans select-none"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Top Workstation Header Bar */}
        <div className="min-h-[54px] sm:min-h-[58px] shrink-0 px-3.5 py-2 rounded-2xl border border-slate-800 bg-[#0d1117]/95 flex items-center justify-between gap-3 backdrop-blur-md z-10 shadow-lg">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <div className="truncate">
              <h4 className="text-sm sm:text-base font-black text-slate-100 flex items-center gap-2 truncate">
                <span>{isAr ? 'المجهر الضوئي المركب الافتراضي' : 'Virtual Compound Optical Microscope'}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 shrink-0">
                  {totalMagnification}× Mag
                </span>
                <span className="hidden md:inline-block text-[11px] font-mono text-slate-400">
                  NA {currentSpec.na} • {currentSpec.dinName}
                </span>
              </h4>
            </div>
          </div>

          {/* Objective Lens Turret Selector (DIN Standard ISO bands) */}
          <div className="flex items-center gap-1.5 bg-slate-950/90 p-1 rounded-xl border border-slate-800">
            {(['4x', '10x', '40x', '100x'] as const).map((obj) => {
              const spec = OBJECTIVE_SPECS[obj];
              const isSelected = lens === obj;
              return (
                <button
                  key={obj}
                  onClick={() => setLens(obj)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 text-white border border-slate-600 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`${obj} (${spec.dinName}) - NA ${spec.na}`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/40"
                    style={{ backgroundColor: spec.dinColor }}
                  />
                  <span>{obj}</span>
                </button>
              );
            })}
          </div>

          {/* Fullscreen Exit Button */}
          <button
            type="button"
            onClick={exitFullscreen}
            className="px-3 py-2 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border-slate-700 shadow-xs"
            title={isAr ? 'تصغير الشاشة (Esc)' : 'Exit Fullscreen (Esc)'}
          >
            <Minimize2 className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">{isAr ? 'تصغير' : 'Exit'}</span>
          </button>
        </div>

        {/* Main Split Stage */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 my-2 overflow-hidden">
          {/* Eyepiece Canvas Viewport */}
          <div className="lg:col-span-8 h-full min-h-0 rounded-2xl bg-[#06090e] border border-slate-800 overflow-hidden shadow-2xl relative flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full block" />
            {blurPx > 1.2 && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-[11px] font-bold backdrop-blur-sm pointer-events-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>{isAr ? 'الصورة غير واضحة (اضبط الضابطين التقريبي والدقيق)' : 'Out of Focus (Adjust Focus Knobs)'}</span>
              </div>
            )}
            {lens === '100x' && (
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 text-[11px] font-mono backdrop-blur-sm pointer-events-none">
                {isAr ? 'زيت الغمر nD=1.515' : 'Type-A Immersion Oil (nD=1.515)'}
              </div>
            )}
          </div>

          {/* Right Controls - Zero scroll in fullscreen */}
          <div className="lg:col-span-4 h-full min-h-0 overflow-y-auto pr-1 flex flex-col justify-start">
            {renderControlConsole()}
          </div>
        </div>
      </div>
    );
  }

  // EMBEDDED WORKBENCH MODE
  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 transition-all font-sans ${
        isContrast
          ? 'bg-black border-2 border-white text-white'
          : isLight
          ? 'bg-[#FAFAFA] border-slate-200 text-slate-900 shadow-sm'
          : 'bg-[#0D1117] border-[#30363D] text-[#C9D1D9] shadow-xl'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Microscope Header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl border ${
              isLight
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
            }`}
          >
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold flex items-center gap-2">
              <span>{isAr ? 'المجهر الضوئي المركب الافتراضي' : 'Virtual Compound Optical Microscope'}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${
                  isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                }`}
              >
                {totalMagnification}× Total Mag
              </span>
            </h4>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr
                ? 'تبديل العدسات الشيئية القياسية (DIN)، وضبط البؤرة الدقيقة، وصبغ الشرائح البيولوجية'
                : 'DIN/ISO objective turret switching, coarse/fine focus depth of field, and histological slide staining'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Objective Lens Turret Selector */}
          <div
            className={`flex items-center gap-1 p-1 rounded-xl border ${
              isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-950 border-slate-800'
            }`}
          >
            {(['4x', '10x', '40x', '100x'] as const).map((obj) => {
              const spec = OBJECTIVE_SPECS[obj];
              const isSelected = lens === obj;
              return (
                <button
                  key={obj}
                  onClick={() => setLens(obj)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? isLight
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-300'
                        : 'bg-slate-800 text-white shadow-xs border border-slate-600'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`${obj} (${spec.dinName}) - NA ${spec.na}`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0 border border-black/30"
                    style={{ backgroundColor: spec.dinColor }}
                  />
                  <span>{obj}</span>
                </button>
              );
            })}
          </div>

          {/* Fullscreen Maximize Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
              isLight
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-300'
                : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}
            title={isAr ? 'ملء الشاشة' : 'Fullscreen'}
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{isAr ? 'ملء الشاشة' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Main Viewport & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        {/* Canvas Eyepiece Viewport */}
        <div className="lg:col-span-7 xl:col-span-8 w-full h-80 sm:h-96 md:h-[420px] rounded-2xl bg-[#06090e] border border-slate-800 overflow-hidden shadow-xl relative flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Out of Focus Badge */}
          {blurPx > 1.2 && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-[11px] font-bold backdrop-blur-sm pointer-events-none flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>{isAr ? 'الصورة غير واضحة (اضبط الضابطين)' : 'Out of Focus (Adjust Knobs)'}</span>
            </div>
          )}

          {lens === '100x' && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 text-[10px] font-mono backdrop-blur-sm pointer-events-none">
              {isAr ? 'زيت الغمر nD=1.515' : 'Type-A Immersion Oil'}
            </div>
          )}
        </div>

        {/* Control Console */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-3">
          {renderControlConsole()}
        </div>
      </div>
    </div>
  );
};
