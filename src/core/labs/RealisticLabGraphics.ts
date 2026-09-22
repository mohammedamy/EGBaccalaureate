/**
 * RealisticLabGraphics.ts
 * High-performance, photorealistic 2D Canvas rendering primitives for virtual science laboratories.
 * Implements physical glass reflections, volumetric light bloom, metallic specular highlights,
 * liquid meniscus curves, analog meter gauges, and procedural thermal/particle effects.
 */

export interface GlassVesselOptions {
  liquidColor?: string;
  liquidLevelPercent?: number; // 0 to 100
  showMeniscus?: boolean;
  rimBevel?: boolean;
  wallThickness?: number;
  highlightColor?: string;
}

/**
 * Draws a photorealistic cylindrical or beaker-shaped glass vessel with dual-wall thickness,
 * fluid depth shading, curved liquid meniscus, and specular reflection highlights.
 */
export function drawRealisticGlassVessel(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  options: GlassVesselOptions = {}
): void {
  const {
    liquidColor,
    liquidLevelPercent = 0,
    showMeniscus = true,
    rimBevel = true,
    wallThickness = 3.5,
    highlightColor = 'rgba(255, 255, 255, 0.45)',
  } = options;

  ctx.save();

  // 1. Soft Glass Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, [4, 4, 12, 12]);
  ctx.fill();
  ctx.restore();

  // 2. Inner Vessel Background Glass Refraction Tint
  const glassTintGrad = ctx.createLinearGradient(x, y, x + w, y);
  glassTintGrad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
  glassTintGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.03)');
  glassTintGrad.addColorStop(0.7, 'rgba(148, 163, 184, 0.04)');
  glassTintGrad.addColorStop(1, 'rgba(56, 189, 248, 0.1)');
  ctx.fillStyle = glassTintGrad;
  ctx.beginPath();
  ctx.roundRect(x + wallThickness, y, w - 2 * wallThickness, h - wallThickness, [0, 0, 8, 8]);
  ctx.fill();

  // 3. Liquid Column with Meniscus & Depth Gradient
  if (liquidColor && liquidLevelPercent > 0) {
    const clampedLevel = Math.min(100, Math.max(0, liquidLevelPercent));
    const liquidHeight = (h - wallThickness * 2) * (clampedLevel / 100);
    const liquidY = y + h - wallThickness - liquidHeight;
    const liquidW = w - wallThickness * 2;
    const liquidX = x + wallThickness;

    ctx.save();
    // Clip to vessel interior
    ctx.beginPath();
    ctx.roundRect(liquidX, liquidY, liquidW, liquidHeight, [0, 0, 8, 8]);
    ctx.clip();

    // Fluid volumetric depth gradient
    const fluidGrad = ctx.createLinearGradient(liquidX, liquidY, liquidX + liquidW, liquidY + liquidHeight);
    fluidGrad.addColorStop(0, liquidColor);
    fluidGrad.addColorStop(0.6, liquidColor);
    fluidGrad.addColorStop(1, 'rgba(0, 0, 0, 0.35)'); // bottom shadow
    ctx.fillStyle = fluidGrad;
    ctx.fillRect(liquidX, liquidY, liquidW, liquidHeight);

    // Liquid back reflection
    const fluidBackGrad = ctx.createLinearGradient(liquidX, liquidY, liquidX + liquidW, liquidY);
    fluidBackGrad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    fluidBackGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
    fluidBackGrad.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
    ctx.fillStyle = fluidBackGrad;
    ctx.fillRect(liquidX, liquidY, liquidW, liquidHeight);

    // Curved Liquid Meniscus
    if (showMeniscus) {
      ctx.beginPath();
      const meniscusDip = Math.min(6, liquidW * 0.08);
      ctx.moveTo(liquidX, liquidY);
      ctx.quadraticCurveTo(liquidX + liquidW / 2, liquidY + meniscusDip, liquidX + liquidW, liquidY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Meniscus secondary specular highlight
      ctx.beginPath();
      ctx.moveTo(liquidX + 6, liquidY + 1.5);
      ctx.quadraticCurveTo(liquidX + liquidW / 2, liquidY + meniscusDip + 1.5, liquidX + liquidW - 6, liquidY + 1.5);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.restore();
  }

  // 4. Glass Walls & Bottom Base Thickness
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
  ctx.lineWidth = wallThickness;
  ctx.beginPath();
  ctx.roundRect(x + wallThickness / 2, y, w - wallThickness, h - wallThickness / 2, [2, 2, 10, 10]);
  ctx.stroke();

  // 5. Heavy Borosilicate Glass Bottom Line
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
  ctx.lineWidth = wallThickness * 1.6;
  ctx.beginPath();
  ctx.moveTo(x + 10, y + h - wallThickness / 2);
  ctx.lineTo(x + w - 10, y + h - wallThickness / 2);
  ctx.stroke();

  // 6. Glass Lip Rim Bevel
  if (rimBevel) {
    ctx.fillStyle = 'rgba(203, 213, 225, 0.75)';
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y, w / 2 + 2, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  // 7. Specular Glass Highlights (Crescent Reflection Curves)
  // Left vertical light sheen
  const leftHighlight = ctx.createLinearGradient(x + wallThickness, y, x + wallThickness + 8, y);
  leftHighlight.addColorStop(0, highlightColor);
  leftHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)');
  leftHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = leftHighlight;
  ctx.fillRect(x + wallThickness + 1, y + 4, 7, h - wallThickness - 8);

  // Right subtle ambient reflection
  const rightHighlight = ctx.createLinearGradient(x + w - wallThickness - 6, y, x + w - wallThickness, y);
  rightHighlight.addColorStop(0, 'rgba(255, 255, 255, 0)');
  rightHighlight.addColorStop(1, 'rgba(255, 255, 255, 0.25)');
  ctx.fillStyle = rightHighlight;
  ctx.fillRect(x + w - wallThickness - 6, y + 6, 5, h - wallThickness - 12);

  ctx.restore();
}

/**
 * Draws a multi-pass volumetric light ray or laser beam featuring an ultra-bright white core,
 * saturated optical halo bloom, and optional traveling photon wave packets.
 */
export function drawVolumetricBeam(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  beamColor: string,
  coreRadius = 2.5,
  haloRadius = 9,
  phase = 0
): void {
  ctx.save();

  // Pass 1: Wide Diffuse Atmospheric Halo
  ctx.strokeStyle = beamColor;
  ctx.shadowColor = beamColor;
  ctx.shadowBlur = haloRadius * 2.5;
  ctx.lineWidth = haloRadius * 1.8;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Pass 2: Saturated Optical Bloom
  ctx.shadowBlur = haloRadius;
  ctx.lineWidth = coreRadius * 3;
  ctx.globalAlpha = 0.65;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Pass 3: Brilliant White Core
  ctx.shadowBlur = coreRadius * 2;
  ctx.shadowColor = '#ffffff';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = coreRadius;
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Pass 4: Photon Wave-Packets Traveling Along the Beam
  if (phase !== 0) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len > 10) {
      const ux = dx / len;
      const uy = dy / len;
      const packetSpacing = 28;
      const offset = (phase * packetSpacing) % packetSpacing;

      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 10;
      for (let d = offset; d < len; d += packetSpacing) {
        const px = x1 + ux * d;
        const py = y1 + uy * d;
        ctx.beginPath();
        ctx.arc(px, py, coreRadius * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  ctx.restore();
}

/**
 * Draws a metallic cylindrical component (battery cell, copper wire, brass fitting, lens mount)
 * with multi-stop specular reflection gradients.
 */
export function drawMetallicCylinder(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  metalType: 'copper' | 'brass' | 'steel' | 'zinc' | 'gold' = 'steel',
  orientation: 'horizontal' | 'vertical' = 'vertical'
): void {
  ctx.save();

  const isVert = orientation === 'vertical';
  const grad = isVert
    ? ctx.createLinearGradient(x, y, x + w, y)
    : ctx.createLinearGradient(x, y, x, y + h);

  if (metalType === 'copper') {
    grad.addColorStop(0, '#78350f');
    grad.addColorStop(0.2, '#b45309');
    grad.addColorStop(0.45, '#fed7aa');
    grad.addColorStop(0.55, '#fb923c');
    grad.addColorStop(0.85, '#9a3412');
    grad.addColorStop(1, '#431407');
  } else if (metalType === 'brass') {
    grad.addColorStop(0, '#713f12');
    grad.addColorStop(0.2, '#ca8a04');
    grad.addColorStop(0.45, '#fef08a');
    grad.addColorStop(0.55, '#eab308');
    grad.addColorStop(0.85, '#a16207');
    grad.addColorStop(1, '#422006');
  } else if (metalType === 'gold') {
    grad.addColorStop(0, '#854d0e');
    grad.addColorStop(0.25, '#eab308');
    grad.addColorStop(0.5, '#fef9c3');
    grad.addColorStop(0.75, '#ca8a04');
    grad.addColorStop(1, '#713f12');
  } else if (metalType === 'zinc') {
    grad.addColorStop(0, '#334155');
    grad.addColorStop(0.25, '#64748b');
    grad.addColorStop(0.5, '#cbd5e1');
    grad.addColorStop(0.75, '#475569');
    grad.addColorStop(1, '#1e293b');
  } else {
    // Steel
    grad.addColorStop(0, '#1e293b');
    grad.addColorStop(0.2, '#475569');
    grad.addColorStop(0.45, '#f1f5f9');
    grad.addColorStop(0.55, '#94a3b8');
    grad.addColorStop(0.85, '#334155');
    grad.addColorStop(1, '#0f172a');
  }

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, [4]);
  ctx.fill();

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

/**
 * Draws a photorealistic analog meter dial gauge with brushed metallic bezel, white enamel face,
 * anti-parallax mirror band, radial calibration ticks, integrated high-contrast digital LCD readout,
 * and a physics-damped knife-edge needle with drop shadow.
 */
export function drawAnalogMeterGauge(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  value: number,
  minVal: number,
  maxVal: number,
  title: string,
  unit: string
): void {
  ctx.save();

  // 1. Bezel Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = Math.max(8, radius * 0.25);
  ctx.shadowOffsetY = Math.max(3, radius * 0.08);
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();
  ctx.restore();

  // 2. Outer Heavy Brushed Metal Bezel Ring
  const bezelGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
  bezelGrad.addColorStop(0, '#475569');
  bezelGrad.addColorStop(0.2, '#94a3b8');
  bezelGrad.addColorStop(0.4, '#e2e8f0');
  bezelGrad.addColorStop(0.55, '#334155');
  bezelGrad.addColorStop(0.75, '#64748b');
  bezelGrad.addColorStop(0.9, '#cbd5e1');
  bezelGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = bezelGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // Stepped Inner Bezel Rim (Machined Look)
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = Math.max(1.2, radius * 0.04);
  ctx.beginPath();
  ctx.arc(cx, cy, radius - Math.max(3, radius * 0.08), 0, Math.PI * 2);
  ctx.stroke();

  // 3. Dial Face (Warm High-Grade Enamel White)
  const faceRadius = radius - Math.max(4, radius * 0.1);
  const faceGrad = ctx.createRadialGradient(cx, cy, faceRadius * 0.15, cx, cy, faceRadius);
  faceGrad.addColorStop(0, '#ffffff');
  faceGrad.addColorStop(0.75, '#f8fafc');
  faceGrad.addColorStop(0.95, '#f1f5f9');
  faceGrad.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = faceGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, faceRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 4. Dial Scale Arc & Tick Marks (240 degree sweep from -210° to 30°)
  const startAngle = -Math.PI * 1.15;
  const endAngle = Math.PI * 0.15;
  const sweep = endAngle - startAngle;

  const tickFontSize = Math.max(9, Math.round(faceRadius * 0.17));
  const titleFontSize = Math.min(11, Math.max(9, Math.round(faceRadius * 0.18)));
  const lcdFontSize = Math.max(10, Math.round(faceRadius * 0.20));

  // Anti-Parallax Polished Mirror Band (Class 0.5 Precision Meter Standard)
  const mirrorR = faceRadius * 0.76;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, mirrorR, startAngle, endAngle);
  const mirrorGrad = ctx.createLinearGradient(cx - mirrorR, cy, cx + mirrorR, cy);
  mirrorGrad.addColorStop(0, '#94a3b8');
  mirrorGrad.addColorStop(0.3, '#f1f5f9');
  mirrorGrad.addColorStop(0.5, '#e2e8f0');
  mirrorGrad.addColorStop(0.8, '#cbd5e1');
  mirrorGrad.addColorStop(1, '#94a3b8');
  ctx.strokeStyle = mirrorGrad;
  ctx.lineWidth = Math.max(2.5, faceRadius * 0.05);
  ctx.stroke();
  ctx.restore();

  // Calibration Arc Line
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = Math.max(1.2, faceRadius * 0.025);
  ctx.beginPath();
  ctx.arc(cx, cy, faceRadius - 6, startAngle, endAngle);
  ctx.stroke();

  const numTicks = 10;
  for (let i = 0; i <= numTicks; i++) {
    const angle = startAngle + (i / numTicks) * sweep;
    const isMajor = i % 2 === 0;
    const tickLen = isMajor ? faceRadius * 0.19 : faceRadius * 0.11;

    const xInner = cx + Math.cos(angle) * (faceRadius - tickLen - 6);
    const yInner = cy + Math.sin(angle) * (faceRadius - tickLen - 6);
    const xOuter = cx + Math.cos(angle) * (faceRadius - 6);
    const yOuter = cy + Math.sin(angle) * (faceRadius - 6);

    ctx.strokeStyle = isMajor ? '#0f172a' : '#475569';
    ctx.lineWidth = isMajor ? Math.max(1.8, faceRadius * 0.035) : 1.0;
    ctx.beginPath();
    ctx.moveTo(xInner, yInner);
    ctx.lineTo(xOuter, yOuter);
    ctx.stroke();

    if (isMajor) {
      const valAtTick = minVal + (i / numTicks) * (maxVal - minVal);
      const textOffset = Math.max(14, faceRadius * 0.32);
      const textX = cx + Math.cos(angle) * (faceRadius - textOffset);
      const textY = cy + Math.sin(angle) * (faceRadius - textOffset);
      ctx.fillStyle = '#0f172a';
      ctx.font = `bold ${tickFontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const formattedTick = valAtTick >= 100 ? valAtTick.toFixed(0) : valAtTick.toFixed(valAtTick % 1 === 0 ? 0 : 1);
      ctx.fillText(formattedTick, textX, textY);
    }
  }

  // 5. Dial Meter Title (Cleanly centered above needle pivot)
  ctx.fillStyle = '#0f172a';
  ctx.font = `900 ${titleFontSize}px Inter, system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, cx, cy - faceRadius * 0.40);

  // 6. Integrated High-Contrast Digital LCD Sub-Display Window (Effortlessly Readable!)
  const lcdW = Math.max(54, faceRadius * 1.15);
  const lcdH = Math.max(17, faceRadius * 0.36);
  const lcdY = cy + faceRadius * 0.44;

  ctx.save();
  // LCD Bezel & Inset Shadow
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(cx - lcdW / 2, lcdY - lcdH / 2, lcdW, lcdH, [4]);
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.stroke();

  // LCD Screen Glass
  const lcdGrad = ctx.createLinearGradient(cx - lcdW / 2, lcdY - lcdH / 2, cx + lcdW / 2, lcdY + lcdH / 2);
  lcdGrad.addColorStop(0, '#042f2e'); // Deep emerald crystal LCD
  lcdGrad.addColorStop(1, '#021e1a');
  ctx.fillStyle = lcdGrad;
  ctx.beginPath();
  ctx.roundRect(cx - lcdW / 2 + 1.5, lcdY - lcdH / 2 + 1.5, lcdW - 3, lcdH - 3, [3]);
  ctx.fill();

  // Digital High-Contrast Illuminated Readout
  const absVal = Math.abs(value);
  const numStr = absVal >= 100 ? value.toFixed(1) : value.toFixed(2);
  ctx.fillStyle = '#2dd4bf'; // Luminous turquoise LCD segments
  ctx.font = `bold ${lcdFontSize}px "SF Mono", "Roboto Mono", Consolas, monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${numStr} ${unit}`, cx, lcdY);

  // LCD Glare Specular Highlight
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.beginPath();
  ctx.roundRect(cx - lcdW / 2 + 2, lcdY - lcdH / 2 + 2, lcdW - 4, (lcdH - 4) / 2, [2]);
  ctx.fill();
  ctx.restore();

  // 7. Precision Physics-Damped Needle with Drop Shadow
  const fraction = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal || 1)));
  const needleAngle = startAngle + fraction * sweep;
  const needleLen = faceRadius * 0.82;

  // Knife-edge Needle Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
  ctx.shadowBlur = Math.max(3, faceRadius * 0.08);
  ctx.shadowOffsetX = 2.5;
  ctx.shadowOffsetY = 2.5;
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = Math.max(2.2, faceRadius * 0.045);
  ctx.lineCap = 'round';
  ctx.beginPath();
  // Counterweight tail
  ctx.moveTo(cx - Math.cos(needleAngle) * (faceRadius * 0.2), cy - Math.sin(needleAngle) * (faceRadius * 0.2));
  // Needle tip
  ctx.lineTo(cx + Math.cos(needleAngle) * needleLen, cy + Math.sin(needleAngle) * needleLen);
  ctx.stroke();
  ctx.restore();

  // 8. Machined Center Pivot Hub with Calibrated Zero Screw
  const hubRadius = Math.max(6, faceRadius * 0.15);
  const hubGrad = ctx.createRadialGradient(cx - 1.5, cy - 1.5, 1, cx, cy, hubRadius);
  hubGrad.addColorStop(0, '#f1f5f9');
  hubGrad.addColorStop(0.5, '#64748b');
  hubGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = hubGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, hubRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Zero-adjust screw slot (45 degree brass slot)
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = Math.max(1.2, hubRadius * 0.2);
  ctx.beginPath();
  ctx.moveTo(cx - hubRadius * 0.5, cy - hubRadius * 0.5);
  ctx.lineTo(cx + hubRadius * 0.5, cy + hubRadius * 0.5);
  ctx.stroke();

  // 9. Convex Glass Lens Specular Reflection Arch
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, faceRadius - 2, -Math.PI * 0.85, -Math.PI * 0.15);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = Math.max(2.5, faceRadius * 0.06);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

/**
 * Draws a realistic multi-coned Bunsen burner flame with inner reduction cone,
 * luminous hot cone, and rising convection micro-particles.
 */
export function drawProceduralFlame(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  height: number,
  timeSec: number,
  colorPreset: 'blue' | 'yellow' | 'calcium' | 'potassium' | 'sodium' | string = 'blue',
  scale: number = 1
): void {
  ctx.save();

  const effH = height * scale;
  const wobble1 = Math.sin(timeSec * 12) * 2.5;
  const wobble2 = Math.cos(timeSec * 8.5) * 1.8;
  const topX = x + wobble1;
  const topY = y - effH + wobble2;
  const baseW = effH * 0.35;

  let outerColor = 'rgba(14, 165, 233, 0.4)';
  let midColor = 'rgba(56, 189, 248, 0.85)';
  let innerColor = 'rgba(255, 255, 255, 0.95)';

  if (colorPreset === 'calcium') {
    outerColor = 'rgba(225, 29, 72, 0.55)'; // Brick-red
    midColor = 'rgba(244, 63, 94, 0.85)';
    innerColor = 'rgba(254, 205, 211, 0.95)';
  } else if (colorPreset === 'sodium') {
    outerColor = 'rgba(217, 119, 6, 0.55)'; // Golden-yellow D-line
    midColor = 'rgba(251, 191, 36, 0.9)';
    innerColor = 'rgba(254, 240, 138, 0.98)';
  } else if (colorPreset === 'potassium') {
    outerColor = 'rgba(124, 58, 237, 0.5)'; // Lilac / Violet
    midColor = 'rgba(168, 85, 247, 0.85)';
    innerColor = 'rgba(243, 232, 255, 0.95)';
  } else if (colorPreset === 'yellow') {
    outerColor = 'rgba(234, 88, 12, 0.5)';
    midColor = 'rgba(245, 158, 11, 0.85)';
    innerColor = 'rgba(254, 243, 199, 0.95)';
  } else if (colorPreset !== 'blue') {
    outerColor = colorPreset;
    midColor = colorPreset;
    innerColor = 'rgba(255, 255, 255, 0.92)';
  }

  // Outer Flame Envelope
  ctx.beginPath();
  ctx.moveTo(x - baseW / 2, y);
  ctx.quadraticCurveTo(x - baseW * 0.8 + wobble2, y - height * 0.5, topX, topY);
  ctx.quadraticCurveTo(x + baseW * 0.8 + wobble1, y - height * 0.5, x + baseW / 2, y);
  ctx.closePath();
  ctx.fillStyle = outerColor;
  ctx.shadowColor = midColor;
  ctx.shadowBlur = 18;
  ctx.fill();

  // Middle Luminous Zone
  ctx.beginPath();
  ctx.moveTo(x - baseW * 0.35, y);
  ctx.quadraticCurveTo(x - baseW * 0.5 + wobble1, y - height * 0.45, topX, topY + height * 0.2);
  ctx.quadraticCurveTo(x + baseW * 0.5 + wobble2, y - height * 0.45, x + baseW * 0.35, y);
  ctx.closePath();
  ctx.fillStyle = midColor;
  ctx.shadowBlur = 10;
  ctx.fill();

  // Inner Hot Reduction Cone
  ctx.beginPath();
  ctx.moveTo(x - baseW * 0.2, y);
  ctx.quadraticCurveTo(x, y - height * 0.35, x + baseW * 0.2, y);
  ctx.closePath();
  ctx.fillStyle = innerColor;
  ctx.shadowBlur = 6;
  ctx.fill();

  ctx.restore();
}

/**
 * Draws a high-DPI glowing particle with radial alpha falloff.
 * Perfect for moving electrons, photons, ions, and energetic ATP molecules.
 */
export function drawGlowingParticle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
  glowBlur = 8
): void {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = glowBlur;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  // Brilliant specular core
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(x, y, Math.max(1, radius * 0.4), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
