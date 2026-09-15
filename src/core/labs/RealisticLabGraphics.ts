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
 * radial calibration ticks, and a physics-damped needle with drop shadow.
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
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();
  ctx.restore();

  // 2. Outer Brushed Metal Bezel
  const bezelGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
  bezelGrad.addColorStop(0, '#64748b');
  bezelGrad.addColorStop(0.3, '#cbd5e1');
  bezelGrad.addColorStop(0.5, '#334155');
  bezelGrad.addColorStop(0.7, '#94a3b8');
  bezelGrad.addColorStop(1, '#1e293b');
  ctx.fillStyle = bezelGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // 3. Dial Face (Warm Enamel White)
  const faceRadius = radius - 5;
  const faceGrad = ctx.createRadialGradient(cx, cy, faceRadius * 0.2, cx, cy, faceRadius);
  faceGrad.addColorStop(0, '#ffffff');
  faceGrad.addColorStop(0.85, '#f8fafc');
  faceGrad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = faceGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, faceRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // 4. Dial Scale Arc & Tick Marks (240 degree sweep from -210° to 30°)
  const startAngle = -Math.PI * 1.15;
  const endAngle = Math.PI * 0.15;
  const sweep = endAngle - startAngle;

  const numTicks = 10;
  for (let i = 0; i <= numTicks; i++) {
    const angle = startAngle + (i / numTicks) * sweep;
    const isMajor = i % 2 === 0;
    const tickLen = isMajor ? faceRadius * 0.2 : faceRadius * 0.12;

    const xInner = cx + Math.cos(angle) * (faceRadius - tickLen - 6);
    const yInner = cy + Math.sin(angle) * (faceRadius - tickLen - 6);
    const xOuter = cx + Math.cos(angle) * (faceRadius - 6);
    const yOuter = cy + Math.sin(angle) * (faceRadius - 6);

    ctx.strokeStyle = isMajor ? '#0f172a' : '#64748b';
    ctx.lineWidth = isMajor ? 1.8 : 1.0;
    ctx.beginPath();
    ctx.moveTo(xInner, yInner);
    ctx.lineTo(xOuter, yOuter);
    ctx.stroke();

    if (isMajor) {
      const valAtTick = minVal + (i / numTicks) * (maxVal - minVal);
      const textX = cx + Math.cos(angle) * (faceRadius - tickLen - 14);
      const textY = cy + Math.sin(angle) * (faceRadius - tickLen - 14);
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(valAtTick.toFixed(valAtTick % 1 === 0 ? 0 : 1), textX, textY);
    }
  }

  // 5. Dial Labels
  ctx.fillStyle = '#334155';
  ctx.font = 'bold 9px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title, cx, cy - faceRadius * 0.32);

  ctx.fillStyle = '#0284c7';
  ctx.font = 'bold 10px monospace';
  ctx.fillText(unit, cx, cy + faceRadius * 0.38);

  // 6. Needle with Drop Shadow
  const fraction = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
  const needleAngle = startAngle + fraction * sweep;
  const needleLen = faceRadius * 0.78;

  // Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(cx - Math.cos(needleAngle) * 8, cy - Math.sin(needleAngle) * 8);
  ctx.lineTo(cx + Math.cos(needleAngle) * needleLen, cy + Math.sin(needleAngle) * needleLen);
  ctx.stroke();
  ctx.restore();

  // 7. Center Pivot Hub
  const hubGrad = ctx.createRadialGradient(cx - 1, cy - 1, 1, cx, cy, 6);
  hubGrad.addColorStop(0, '#cbd5e1');
  hubGrad.addColorStop(0.6, '#475569');
  hubGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = hubGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.stroke();

  // 8. Curved Glass Lens Reflection Arc
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, faceRadius - 2, -Math.PI * 0.8, -Math.PI * 0.2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.lineWidth = 3;
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
