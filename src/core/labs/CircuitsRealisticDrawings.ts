/**
 * CircuitsRealisticDrawings.ts
 * High-performance, photorealistic 2D canvas rendering routines for electrical circuit components.
 * Implements heavy insulated cables with metallic specular cores and brass binding posts,
 * industrial dual-cell accumulator batteries, wire-wound porcelain slider rheostats,
 * EIA 4-band color-coded ceramic resistors, industrial knife switches,
 * incandescent lamps with volumetric tungsten glow bloom, and center-zero galvanometers.
 */

import { drawMetallicCylinder } from './RealisticLabGraphics';

export interface Point2D {
  x: number;
  y: number;
}

/**
 * Draws a heavy-duty insulated laboratory cable with a realistic rubber jacket,
 * inner metallic specular core highlight, and brass terminal binding posts at both ends.
 */
export function drawHeavyInsulatedCable(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  jacketColor: string,
  isEnergized: boolean = true
): void {
  ctx.save();

  // 1. Soft Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 3;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.lineWidth = 7.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();

  // 2. Heavy Insulated Rubber/Silicone Jacket
  ctx.strokeStyle = jacketColor;
  ctx.lineWidth = 7.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // 3. Inner Specular Highlight (Simulates Cylindrical Cable Sheen)
  ctx.strokeStyle = isEnergized ? '#fef08a' : 'rgba(255, 255, 255, 0.45)';
  ctx.lineWidth = 2.4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // 4. Brass Knurled Terminal Binding Posts at Endpoints
  drawBrassTerminalStud(ctx, x1, y1);
  drawBrassTerminalStud(ctx, x2, y2);

  ctx.restore();
}

/**
 * Draws a continuous multi-point insulated cable polyline with smooth rounded corners.
 */
export function drawInsulatedCablePolyline(
  ctx: CanvasRenderingContext2D,
  points: Point2D[],
  jacketColor: string,
  isEnergized: boolean = true
): void {
  if (points.length < 2) return;

  ctx.save();

  // 1. Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 3;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.lineWidth = 7.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  ctx.restore();

  // 2. Insulated Jacket
  ctx.strokeStyle = jacketColor;
  ctx.lineWidth = 7.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  // 3. Inner Specular Metallic Sheen
  ctx.strokeStyle = isEnergized ? '#fef08a' : 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 2.4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  // 4. Brass Terminal Studs at Vertices
  for (const pt of points) {
    drawBrassTerminalStud(ctx, pt.x, pt.y);
  }

  ctx.restore();
}

/**
 * Draws a precision brass terminal binding post stud with knurling and central banana socket.
 */
export function drawBrassTerminalStud(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  ctx.save();
  const radius = 6.5;

  // Brass Nut Hex/Circle
  const grad = ctx.createRadialGradient(x - 2, y - 2, 1, x, y, radius);
  grad.addColorStop(0, '#fef08a');
  grad.addColorStop(0.4, '#eab308');
  grad.addColorStop(0.85, '#ca8a04');
  grad.addColorStop(1, '#713f12');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#854d0e';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Inner Socket Hole (Banana Plug Receptacle)
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(x, y, 2.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * Draws an industrial dual-cell laboratory accumulator battery with molded ribbed chassis,
 * knurled red/black terminal posts, metal specification rating plate, and active status LED.
 */
export function drawHeavyLabBattery(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  vb: number,
  rInternal: number,
  stateTextEn: string,
  stateTextAr: string,
  isDischarging: boolean,
  isArabic: boolean = false
): void {
  ctx.save();

  // 1. Battery Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, [8]);
  ctx.fill();
  ctx.restore();

  // 2. Molded Heavy Industrial Casing (Charcoal Slate with Subtle Texture)
  const caseGrad = ctx.createLinearGradient(x - w / 2, y, x + w / 2, y);
  caseGrad.addColorStop(0, '#1e293b');
  caseGrad.addColorStop(0.2, '#334155');
  caseGrad.addColorStop(0.5, '#1e293b');
  caseGrad.addColorStop(0.8, '#334155');
  caseGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = caseGrad;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, [8]);
  ctx.fill();
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Vertical Molded Structural Cooling Ribs
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.8)';
  ctx.lineWidth = 2;
  const numRibs = 5;
  for (let i = 1; i < numRibs; i++) {
    const rx = x - w / 2 + (w / numRibs) * i;
    ctx.beginPath();
    ctx.moveTo(rx, y - h / 2 + 12);
    ctx.lineTo(rx, y + h / 2 - 12);
    ctx.stroke();
  }

  // 3. Raised Positive (Red) Terminal Post on Top
  const topPostY = y - h / 2 - 6;
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.roundRect(x - 12, topPostY - 10, 24, 12, [3]);
  ctx.fill();
  ctx.strokeStyle = '#991b1b';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  drawBrassTerminalStud(ctx, x, topPostY - 4);

  // Positive Polarity Sign Badge
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 13px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('+', x, topPostY - 4);

  // 4. Raised Negative (Black) Terminal Post on Bottom
  const botPostY = y + h / 2 + 6;
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(x - 12, botPostY - 2, 24, 12, [3]);
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  drawBrassTerminalStud(ctx, x, botPostY + 4);

  // Negative Polarity Sign Badge
  ctx.fillStyle = '#94a3b8';
  ctx.font = '900 15px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('−', x, botPostY + 4);

  // 5. Laser-Etched Metal Specification Nameplate (Center)
  const plateW = w - 16;
  const plateH = 46;
  const plateY = y - 10;
  const plateGrad = ctx.createLinearGradient(x - plateW / 2, plateY, x + plateW / 2, plateY + plateH);
  plateGrad.addColorStop(0, '#334155');
  plateGrad.addColorStop(0.5, '#475569');
  plateGrad.addColorStop(1, '#1e293b');
  ctx.fillStyle = plateGrad;
  ctx.beginPath();
  ctx.roundRect(x - plateW / 2, plateY, plateW, plateH, [4]);
  ctx.fill();
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Rating Texts
  ctx.fillStyle = '#f8fafc';
  ctx.font = '900 12px "SF Mono", "Roboto Mono", Consolas, monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`VB = ${vb.toFixed(1)} V`, x, plateY + 16);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 10px "SF Mono", monospace';
  ctx.fillText(`r = ${rInternal.toFixed(2)} Ω`, x, plateY + 34);

  // 6. Active State Indicator LED
  const ledY = y + h / 2 - 16;
  const ledColor = isDischarging ? '#22c55e' : '#f59e0b';
  ctx.save();
  ctx.shadowColor = ledColor;
  ctx.shadowBlur = 10;
  ctx.fillStyle = ledColor;
  ctx.beginPath();
  ctx.arc(x - 18, ledY, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Status Badge Label
  ctx.fillStyle = isDischarging ? '#4ade80' : '#fbbf24';
  ctx.font = 'bold 9px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(isArabic ? stateTextAr : stateTextEn, x - 8, ledY);

  ctx.restore();
}

/**
 * Draws a photorealistic wire-wound porcelain laboratory slider rheostat (Rv).
 * Includes porcelain insulating cylinder, nichrome winding turns, stainless steel guide rod,
 * and movable brass wiper carriage with bakelite thumbscrew knob that physically slides in real-time.
 */
export function drawWireWoundSliderRheostat(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  totalWidth: number,
  totalHeight: number,
  currentR: number,
  maxR: number = 50,
  label: string = 'Rv'
): void {
  ctx.save();

  const cylinderW = totalWidth - 48;
  const cylinderH = 26;
  const cylinderX = x - cylinderW / 2;
  const cylinderY = y - cylinderH / 2;

  // 1. Heavy Cast-Iron / Ceramic Mounting End Supports (Left & Right Pillars)
  const pillarW = 16;
  const pillarH = totalHeight + 10;

  // Left Pillar
  drawMetallicCylinder(ctx, x - totalWidth / 2, y - pillarH / 2, pillarW, pillarH, 'steel', 'vertical');
  // Right Pillar
  drawMetallicCylinder(ctx, x + totalWidth / 2 - pillarW, y - pillarH / 2, pillarW, pillarH, 'steel', 'vertical');

  // Terminal Studs on Pillars
  drawBrassTerminalStud(ctx, x - totalWidth / 2 + pillarW / 2, y + pillarH / 2 - 8);
  drawBrassTerminalStud(ctx, x + totalWidth / 2 - pillarW / 2, y - pillarH / 2 + 8);

  // 2. Heavy Porcelain Ceramic Tube Base
  const tubeGrad = ctx.createLinearGradient(cylinderX, cylinderY, cylinderX, cylinderY + cylinderH);
  tubeGrad.addColorStop(0, '#fef3c7');
  tubeGrad.addColorStop(0.3, '#ffffff');
  tubeGrad.addColorStop(0.7, '#fde68a');
  tubeGrad.addColorStop(1, '#d97706');
  ctx.fillStyle = tubeGrad;
  ctx.beginPath();
  ctx.roundRect(cylinderX, cylinderY, cylinderW, cylinderH, [4]);
  ctx.fill();

  // 3. Finely Wound Nichrome Resistance Wire Turns
  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1.2;
  const numWindings = Math.min(80, Math.floor(cylinderW / 3));
  for (let i = 0; i < numWindings; i++) {
    const wx = cylinderX + 4 + (i / numWindings) * (cylinderW - 8);
    ctx.beginPath();
    ctx.moveTo(wx, cylinderY + 2);
    ctx.lineTo(wx, cylinderY + cylinderH - 2);
    ctx.stroke();
  }

  // 4. Overhead Polished Stainless Steel Slider Guide Rod
  const rodY = cylinderY - 10;
  drawMetallicCylinder(ctx, cylinderX, rodY - 3, cylinderW, 6, 'steel', 'horizontal');

  // 5. Movable Brass Wiper Carriage with Bakelite Knob
  const clampedFraction = Math.max(0, Math.min(1, currentR / (maxR || 1)));
  const sliderX = cylinderX + 8 + clampedFraction * (cylinderW - 24);

  // Wiper Contact Finger Touching the Windings
  ctx.fillStyle = '#ca8a04';
  ctx.beginPath();
  ctx.roundRect(sliderX - 6, rodY - 2, 12, cylinderH + 12, [3]);
  ctx.fill();
  ctx.strokeStyle = '#713f12';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Molded Black Bakelite Thumb-Screw Adjustment Knob
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(sliderX - 8, rodY - 14, 16, 10, [3]);
  ctx.fill();
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Wiper Contact Sparkle/Contact Point
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(sliderX, cylinderY + cylinderH / 2, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // 6. Real-Time Resistance Callout Badge Floating Above Wiper
  const badgeW = 74;
  const badgeH = 22;
  const badgeY = rodY - 24;
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 6;
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(sliderX - badgeW / 2, badgeY - badgeH / 2, badgeW, badgeH, [6]);
  ctx.fill();
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = '900 11px "SF Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${label} = ${currentR.toFixed(1)} Ω`, sliderX, badgeY);
  ctx.restore();

  ctx.restore();
}

/**
 * Standard EIA Color Band Lookup Table.
 */
const EIA_COLORS: Record<number, string> = {
  0: '#0f172a', // Black
  1: '#854d0e', // Brown
  2: '#dc2626', // Red
  3: '#ea580c', // Orange
  4: '#ca8a04', // Yellow
  5: '#16a34a', // Green
  6: '#2563eb', // Blue
  7: '#9333ea', // Violet
  8: '#64748b', // Grey
  9: '#f8fafc', // White
};

/**
 * Draws a photorealistic molded ceramic resistor with tinned axial copper leads,
 * tapered dumbbell ceramic body in classic beige/tan enamel, and standard EIA 4-band color coding.
 */
export function drawAxialCeramicResistor(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  bodyW: number,
  bodyH: number,
  resistanceVal: number,
  label: string = 'R',
  voltageDrop?: number,
  isLight: boolean = false,
  orientation: 'horizontal' | 'vertical' | number = 'horizontal'
): void {
  ctx.save();

  const isVertical = orientation === 'vertical';
  let angleRad = typeof orientation === 'number' ? orientation : 0;
  // Ensure readable text orientation (never upside down): map to [-pi/2, pi/2]
  while (angleRad > Math.PI / 2) angleRad -= Math.PI;
  while (angleRad < -Math.PI / 2) angleRad += Math.PI;

  const leadLen = isVertical ? 14 : 22;

  // Calculate EIA bands
  const val = Math.max(0.1, resistanceVal);
  let d1 = 1;
  let d2 = 0;
  let mult = 0;

  if (val < 10) {
    d1 = Math.floor(val);
    d2 = Math.floor((val * 10) % 10);
    mult = 4; // Gold multiplier for tenths
  } else {
    const s = Math.round(val).toString();
    d1 = parseInt(s[0], 10) || 1;
    d2 = parseInt(s[1], 10) || 0;
    mult = Math.max(0, s.length - 2);
  }

  const band1Color = EIA_COLORS[d1] || EIA_COLORS[1];
  const band2Color = EIA_COLORS[d2] || EIA_COLORS[0];
  const multColor = mult === 4 ? '#eab308' : EIA_COLORS[mult] || EIA_COLORS[0];
  const tolColor = '#eab308'; // 5% Gold tolerance band
  const bands = [band1Color, band2Color, multColor, tolColor];

  if (isVertical) {
    // 1. Tinned Axial Copper Leads Extending Out Top and Bottom
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(x, y - bodyW / 2 - leadLen);
    ctx.lineTo(x, y + bodyW / 2 + leadLen);
    ctx.stroke();

    // Lead Solder Fillets
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(x, y - bodyW / 2, 3, 0, Math.PI * 2);
    ctx.arc(x, y + bodyW / 2, 3, 0, Math.PI * 2);
    ctx.fill();

    // 2. Resistor Body Drop Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetX = 2;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(x - bodyH / 2, y - bodyW / 2, bodyH, bodyW, [bodyH / 2]);
    ctx.fill();
    ctx.restore();

    // 3. Molded Ceramic Cylinder Body (Warm High-Grade Ceramic Tan/Beige)
    const bodyGrad = ctx.createLinearGradient(x - bodyH / 2, y, x + bodyH / 2, y);
    bodyGrad.addColorStop(0, '#f5ebe0');
    bodyGrad.addColorStop(0.25, '#ffffff');
    bodyGrad.addColorStop(0.7, '#e6ccb2');
    bodyGrad.addColorStop(1, '#b08968');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(x - bodyH / 2, y - bodyW / 2, bodyH, bodyW, [bodyH / 2]);
    ctx.fill();
    ctx.strokeStyle = '#9c6644';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 4. Standard EIA 4-Band Color Bands (Horizontal Stripes across vertical cylinder)
    const bandSpacing = bodyW * 0.18;
    const bandH = Math.max(3.5, bodyW * 0.07);
    const startBandY = y - bodyW * 0.28;

    bands.forEach((bColor, idx) => {
      const by = startBandY + idx * bandSpacing;
      ctx.fillStyle = bColor;
      ctx.fillRect(x - bodyH / 2, by - bandH / 2, bodyH, bandH);
    });

    // Vertical Specular Sheen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillRect(x - bodyH / 2 + 2, y - bodyW / 2 + 4, 3, bodyW - 8);

    // 5. Value and Label Callout Badge (Cleanly placed to the right of the vertical resistor)
    const textX = x + bodyH / 2 + 10;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 11px "SF Mono", monospace';
    const labelY = voltageDrop !== undefined ? y - 7 : y;
    ctx.fillText(`${label} = ${resistanceVal.toFixed(1)} Ω`, textX, labelY);

    if (voltageDrop !== undefined) {
      ctx.fillStyle = isLight ? '#0284c7' : '#38bdf8';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`V = ${voltageDrop.toFixed(2)} V`, textX, y + 8);
    }
  } else {
    ctx.translate(x, y);
    if (angleRad !== 0) {
      ctx.rotate(angleRad);
    }

    // 1. Tinned Axial Copper Leads Extending Out Left and Right along the axis
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(-bodyW / 2 - leadLen, 0);
    ctx.lineTo(bodyW / 2 + leadLen, 0);
    ctx.stroke();

    // Lead Solder Fillets
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(-bodyW / 2, 0, 3, 0, Math.PI * 2);
    ctx.arc(bodyW / 2, 0, 3, 0, Math.PI * 2);
    ctx.fill();

    // 2. Resistor Body Drop Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(-bodyW / 2, -bodyH / 2, bodyW, bodyH, [bodyH / 2]);
    ctx.fill();
    ctx.restore();

    // 3. Molded Ceramic Cylinder Body (Warm High-Grade Ceramic Tan/Beige)
    const bodyGrad = ctx.createLinearGradient(-bodyW / 2, -bodyH / 2, -bodyW / 2, bodyH / 2);
    bodyGrad.addColorStop(0, '#f5ebe0');
    bodyGrad.addColorStop(0.25, '#ffffff');
    bodyGrad.addColorStop(0.7, '#e6ccb2');
    bodyGrad.addColorStop(1, '#b08968');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.roundRect(-bodyW / 2, -bodyH / 2, bodyW, bodyH, [bodyH / 2]);
    ctx.fill();
    ctx.strokeStyle = '#9c6644';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 4. Standard EIA 4-Band Color Bands (Perpendicular stripes across cylinder)
    const bandSpacing = bodyW * 0.18;
    const bandW = Math.max(3.5, bodyW * 0.07);
    const startBandX = -bodyW * 0.28;

    bands.forEach((bColor, idx) => {
      const bx = startBandX + idx * bandSpacing;
      ctx.fillStyle = bColor;
      ctx.fillRect(bx - bandW / 2, -bodyH / 2, bandW, bodyH);
    });

    // Top Specular Sheen on Resistor
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillRect(-bodyW / 2 + 4, -bodyH / 2 + 2, bodyW - 8, 3);

    // 5. Value and Label Callout Badge (Parallel and rotated with wire)
    ctx.font = 'bold 11px "SF Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    // Contrast text halo for crisp legibility over any underlying elements
    ctx.strokeStyle = isLight ? 'rgba(248, 250, 252, 0.92)' : 'rgba(7, 11, 20, 0.92)';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.strokeText(`${label} = ${resistanceVal.toFixed(1)} Ω`, 0, -bodyH / 2 - 5);

    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.fillText(`${label} = ${resistanceVal.toFixed(1)} Ω`, 0, -bodyH / 2 - 5);

    if (voltageDrop !== undefined) {
      ctx.strokeStyle = isLight ? 'rgba(248, 250, 252, 0.92)' : 'rgba(7, 11, 20, 0.92)';
      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';
      ctx.textBaseline = 'top';
      ctx.strokeText(`V = ${voltageDrop.toFixed(2)} V`, 0, bodyH / 2 + 5);

      ctx.fillStyle = isLight ? '#0284c7' : '#38bdf8';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`V = ${voltageDrop.toFixed(2)} V`, 0, bodyH / 2 + 5);
    }
  }

  ctx.restore();
}

/**
 * Draws a heavy industrial single-pole single-throw (SPST) knife switch (K).
 * Includes heavy bakelite/slate insulated base, spring-jaw brass contact forks,
 * and solid copper hinged knife blade with black insulated handle.
 */
export function drawIndustrialKnifeSwitch(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  isClosed: boolean,
  isArabic: boolean = false
): void {
  ctx.save();

  // 1. Heavy Insulated Base Block (Bakelite/Slate)
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, [6]);
  ctx.fill();
  ctx.restore();

  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, [6]);
  ctx.stroke();

  // Corner Brass Mounting Screws
  const corners = [
    { cx: x - w / 2 + 6, cy: y - h / 2 + 6 },
    { cx: x + w / 2 - 6, cy: y - h / 2 + 6 },
    { cx: x - w / 2 + 6, cy: y + h / 2 - 6 },
    { cx: x + w / 2 - 6, cy: y + h / 2 - 6 },
  ];
  corners.forEach((c) => {
    ctx.fillStyle = '#ca8a04';
    ctx.beginPath();
    ctx.arc(c.cx, c.cy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // 2. Fixed Brass Pivot Terminal (Bottom)
  const pivotY = y + h / 2 - 16;
  drawBrassTerminalStud(ctx, x, pivotY);

  // 3. Upright Brass Contact Spring-Jaw (Top)
  const contactJawY = y - h / 2 + 16;
  ctx.fillStyle = '#eab308';
  ctx.beginPath();
  ctx.roundRect(x - 8, contactJawY - 5, 16, 10, [2]);
  ctx.fill();
  ctx.strokeStyle = '#713f12';
  ctx.lineWidth = 1;
  ctx.stroke();
  drawBrassTerminalStud(ctx, x, contactJawY);

  // 4. Solid Copper Knife Blade with Handle
  ctx.save();
  ctx.translate(x, pivotY);

  const bladeLen = pivotY - contactJawY;
  const bladeAngle = isClosed ? -Math.PI / 2 : -Math.PI / 2 + 0.65; // ~37 degrees open

  ctx.rotate(bladeAngle);

  // Copper Blade
  const bladeGrad = ctx.createLinearGradient(0, -3, bladeLen, 3);
  bladeGrad.addColorStop(0, '#ea580c');
  bladeGrad.addColorStop(0.5, '#fed7aa');
  bladeGrad.addColorStop(1, '#c2410c');
  ctx.fillStyle = bladeGrad;
  ctx.beginPath();
  ctx.roundRect(0, -3.5, bladeLen + 6, 7, [2]);
  ctx.fill();
  ctx.strokeStyle = '#9a3412';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Insulated Black Bakelite Handle Grip at Tip
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(bladeLen - 4, -6, 18, 12, [3]);
  ctx.fill();
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();

  // 5. Contact Connection Spark / Indicator
  if (isClosed) {
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(x, contactJawY, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // 6. High-Contrast Status Badge
  ctx.fillStyle = isClosed ? '#22c55e' : '#ef4444';
  ctx.font = 'bold 10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const statusLabel = isClosed
    ? isArabic ? 'مفتاح K (مغلق)' : 'Switch K: CLOSED'
    : isArabic ? 'مفتاح K (مفتوح)' : 'Switch K: OPEN';
  ctx.fillText(statusLabel, x, y + h / 2 + 6);

  ctx.restore();
}

/**
 * Draws a photorealistic Edison incandescent light bulb (E27) with brass screw base,
 * clear glass envelope, internal support stem, and coiled tungsten filament with
 * dynamic thermal glow bloom scaling with power dissipation P = I²R.
 */
export function drawIncandescentEdisonBulb(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  bulbRadius: number,
  powerWatts: number,
  ratedWatts: number = 40,
  label: string = 'Lamp'
): void {
  ctx.save();

  const powerRatio = Math.max(0, Math.min(1.5, powerWatts / (ratedWatts || 1)));

  // 1. Dynamic Radial Thermal Bloom Aura (Volumetric Light Emission)
  if (powerWatts > 0.5) {
    const bloomR = bulbRadius * (1.2 + powerRatio * 2.2);
    const bloomGrad = ctx.createRadialGradient(x, y - bulbRadius * 0.4, 2, x, y - bulbRadius * 0.4, bloomR);
    const alpha = Math.min(0.85, 0.15 + powerRatio * 0.6);
    bloomGrad.addColorStop(0, `rgba(254, 240, 138, ${alpha})`);
    bloomGrad.addColorStop(0.3, `rgba(251, 191, 36, ${alpha * 0.6})`);
    bloomGrad.addColorStop(0.7, `rgba(245, 158, 11, ${alpha * 0.2})`);
    bloomGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

    ctx.fillStyle = bloomGrad;
    ctx.beginPath();
    ctx.arc(x, y - bulbRadius * 0.4, bloomR, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Threaded Edison Screw Base (E27 Brass Base)
  const baseW = bulbRadius * 0.8;
  const baseH = bulbRadius * 0.7;
  const baseY = y + bulbRadius * 0.6;
  drawMetallicCylinder(ctx, x - baseW / 2, baseY, baseW, baseH, 'brass', 'vertical');

  // Thread ridges
  ctx.strokeStyle = '#713f12';
  ctx.lineWidth = 1.2;
  const numThreads = 3;
  for (let i = 1; i <= numThreads; i++) {
    const ty = baseY + (baseH / (numThreads + 1)) * i;
    ctx.beginPath();
    ctx.moveTo(x - baseW / 2, ty);
    ctx.lineTo(x + baseW / 2, ty);
    ctx.stroke();
  }

  // Bottom Contact Solder Tip
  ctx.fillStyle = '#334155';
  ctx.beginPath();
  ctx.arc(x, baseY + baseH + 3, 4, 0, Math.PI * 2);
  ctx.fill();

  // 3. Clear Glass Bulb Envelope
  const glassY = y - bulbRadius * 0.3;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, glassY, bulbRadius, 0, Math.PI * 2);
  const glassGrad = ctx.createRadialGradient(x, glassY, 2, x, glassY, bulbRadius);
  if (powerWatts > 0.5) {
    glassGrad.addColorStop(0, `rgba(254, 240, 138, ${Math.min(0.9, 0.2 + powerRatio * 0.6)})`);
    glassGrad.addColorStop(0.8, 'rgba(254, 243, 199, 0.45)');
    glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.25)');
  } else {
    glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
    glassGrad.addColorStop(0.8, 'rgba(203, 213, 225, 0.15)');
    glassGrad.addColorStop(1, 'rgba(148, 163, 184, 0.35)');
  }
  ctx.fillStyle = glassGrad;
  ctx.fill();

  // Glass Specular Reflection Highlight Arc
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.arc(x, glassY, bulbRadius - 3, -Math.PI * 0.8, -Math.PI * 0.2);
  ctx.stroke();
  ctx.restore();

  // 4. Internal Glass Support Stem & Copper Lead-in Wires
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x - 6, glassY + bulbRadius * 0.4);
  ctx.lineTo(x - 5, glassY);
  ctx.moveTo(x + 6, glassY + bulbRadius * 0.4);
  ctx.lineTo(x + 5, glassY);
  ctx.stroke();

  // 5. Coiled Tungsten Filament
  const filY = glassY - 4;
  ctx.save();
  if (powerWatts > 0.5) {
    const glowColor = powerRatio > 0.75 ? '#ffffff' : powerRatio > 0.3 ? '#fef08a' : '#f97316';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 10 + powerRatio * 20;
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = Math.max(2.2, 1.8 + powerRatio * 1.5);
  } else {
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.2;
  }
  ctx.beginPath();
  ctx.moveTo(x - 5, filY + 6);
  ctx.lineTo(x - 2, filY - 6);
  ctx.lineTo(x + 2, filY - 6);
  ctx.lineTo(x + 5, filY + 6);
  ctx.stroke();
  ctx.restore();

  // 6. Wattage and Label Badge
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 11px "SF Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(`${label} (${powerWatts.toFixed(1)}W)`, x, glassY - bulbRadius - 6);

  ctx.restore();
}

/**
 * Draws a high-sensitivity center-zero galvanometer (G) for Wheatstone bridge null verification.
 * Pointer rests at 0 (center) when balanced, deflecting left or right when bridge is unbalanced.
 */
export function drawCenterZeroGalvanometer(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  currentA: number,
  isBalanced: boolean
): void {
  ctx.save();

  // 1. Drop Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();
  ctx.restore();

  // 2. Bezel (Polished Brushed Steel)
  drawMetallicCylinder(ctx, cx - radius, cy - radius, radius * 2, radius * 2, 'steel', 'horizontal');
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 3. Dial Face (Pale Enamel)
  const faceR = radius - 5;
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.arc(cx, cy, faceR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // 4. Center-Zero Scale Arc (-60° to +60° sweep around 12 o'clock)
  const sweepAngle = Math.PI * 0.6; // 108 degrees
  const zeroAngle = -Math.PI / 2; // straight up
  const startAngle = zeroAngle - sweepAngle / 2;
  const endAngle = zeroAngle + sweepAngle / 2;

  // Mirror Arc
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, faceR * 0.75, startAngle, endAngle);
  ctx.stroke();

  // Tick marks: -5 to +5 with 0 in the exact center
  const numDivs = 10;
  for (let i = 0; i <= numDivs; i++) {
    const angle = startAngle + (i / numDivs) * sweepAngle;
    const isZero = i === 5;
    const isMajor = i % 2 === 1 || isZero;
    const tickLen = isZero ? faceR * 0.24 : isMajor ? faceR * 0.18 : faceR * 0.1;

    const x1 = cx + Math.cos(angle) * (faceR - tickLen - 4);
    const y1 = cy + Math.sin(angle) * (faceR - tickLen - 4);
    const x2 = cx + Math.cos(angle) * (faceR - 4);
    const y2 = cy + Math.sin(angle) * (faceR - 4);

    ctx.strokeStyle = isZero ? '#dc2626' : '#0f172a';
    ctx.lineWidth = isZero ? 2.2 : isMajor ? 1.6 : 1.0;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    if (isMajor) {
      const tickVal = i - 5;
      const textX = cx + Math.cos(angle) * (faceR - tickLen - 12);
      const textY = cy + Math.sin(angle) * (faceR - tickLen - 12);
      ctx.fillStyle = isZero ? '#dc2626' : '#1e293b';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(tickVal === 0 ? '0' : Math.abs(tickVal).toString(), textX, textY);
    }
  }

  // Label
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 11px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('G', cx, cy - faceR * 0.25);

  // Digital readout or Balance badge
  const badgeY = cy + faceR * 0.44;
  ctx.fillStyle = isBalanced ? '#065f46' : '#1e293b';
  ctx.beginPath();
  ctx.roundRect(cx - 36, badgeY - 8, 72, 16, [3]);
  ctx.fill();

  ctx.fillStyle = isBalanced ? '#34d399' : '#38bdf8';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(isBalanced ? 'BALANCED' : `${(currentA * 1000).toFixed(1)} mA`, cx, badgeY);

  // 5. Center Needle
  const maxCurrent = 0.5;
  const clampedCurrent = Math.max(-maxCurrent, Math.min(maxCurrent, currentA));
  const needleAngle = zeroAngle + (clampedCurrent / maxCurrent) * (sweepAngle / 2);
  const needleLen = faceR * 0.82;

  ctx.save();
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - Math.cos(needleAngle) * 6, cy - Math.sin(needleAngle) * 6);
  ctx.lineTo(cx + Math.cos(needleAngle) * needleLen, cy + Math.sin(needleAngle) * needleLen);
  ctx.stroke();
  ctx.restore();

  // Pivot Hub
  ctx.fillStyle = '#475569';
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
