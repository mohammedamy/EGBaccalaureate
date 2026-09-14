import React from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';
import { Radio } from 'lucide-react';
import { toHindiDigits } from '../../utils/arabicNumerals';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface RLCParams {
  resistanceR: number;
  inductanceMh: number;
  capacitanceUf: number;
  vSourceRms: number;
  frequencyF: number;
}

interface RLCState {
  phaseTime: number;
}

const RLC_LAB_DEFINITION: LabDefinition<RLCParams, RLCState> = {
  id: 'rlc-resonance-lab',
  subject: 'physics',
  chapterRef: 'Chapter 4: Alternating Current Circuits',
  titleEn: 'RLC Alternating Current Circuits & Resonance Lab',
  titleAr: 'دوائر التيار المتردد والرنين الكهرومغناطيسي (RLC)',
  subtitleEn: 'Impedance Z, Phasor Vectors, and Resonant Frequency',
  subtitleAr: 'المعاوقة الكلية Z، المتجهات الطورية، وتردد الرنين',
  objectives: [
    {
      id: 'rlc-impedance',
      textEn: 'Analyze total impedance Z = √(R² + (X_L - X_C)²) and its dependence on frequency.',
      textAr: 'تحليل المعاوقة الكلية Z = √(R² + (X_L - X_C)²) واعتمادها على تردد المصدر.',
      bloomLevel: 'analyze',
    },
    {
      id: 'resonance-condition',
      textEn: 'Determine the resonance condition where inductive reactance equals capacitive reactance (X_L = X_C).',
      textAr: 'تحديد حالة الرنين عندما تتساوى المفاعلة الحثية مع المفاعلة السعوية (X_L = X_C).',
      bloomLevel: 'understand',
    },
    {
      id: 'resonant-freq-calc',
      textEn: 'Verify the resonant frequency formula f₀ = 1 / (2π√(LC)) and compute maximum current I_max = V / R.',
      textAr: 'التحقق من قانون تردد الرنين f₀ = 1 / (2π√(LC)) وحساب أقصى شدة تيار I_max = V / R.',
      bloomLevel: 'apply',
    },
    {
      id: 'phase-angle',
      textEn: 'Examine the phase angle φ between total voltage and current across inductive, capacitive, and resonant regimes.',
      textAr: 'دراسة زاوية الطور φ بين الجهد الكلي والتيار في الحالات الحثية والسعوية وحالة الرنين.',
      bloomLevel: 'evaluate',
    },
  ],
  safetyWarnings: [
    {
      id: 'resonance-voltage-magnification',
      titleEn: 'Resonant Voltage Magnification Hazard',
      titleAr: 'خطر تضخيم الجهد عند الرنين',
      messageEn: 'In high-Q circuits at resonance, individual voltages across L and C (V_L = V_C = Q·V) can dangerously exceed the source voltage.',
      messageAr: 'في دوائر الرنين ذات معامل الجودة العالي، قد تتجاوز فروق الجهد على الملف والمكثف (V_L = V_C = Q·V) جهد المصدر بأضعاف مضاعفة.',
      severity: 'warning',
    },
  ],
  keyFormulas: [
    {
      id: 'f0-formula',
      labelEn: 'Resonant Frequency',
      labelAr: 'تردد الرنين',
      tex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
      descriptionEn: 'Frequency at which X_L = X_C and circuit impedance is minimized to Z = R.',
      descriptionAr: 'التردد الذي تتساوى عنده X_L مع X_C وتصل المعاوقة لأقل قيمة ممكنة (Z = R).',
    },
    {
      id: 'z-formula',
      labelEn: 'Total Circuit Impedance',
      labelAr: 'المعاوقة الكلية للدائرة',
      tex: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}',
      descriptionEn: 'Vector sum of pure ohmic resistance R and net reactance (X_L - X_C).',
      descriptionAr: 'المحصلة الاتجاهية للمقاومة الأومية R والمفاعلة الكلية (X_L - X_C).',
    },
    {
      id: 'tan-phi',
      labelEn: 'Phase Angle Tangent',
      labelAr: 'ظل زاوية الطور',
      tex: '\\tan\\phi = \\frac{X_L - X_C}{R}',
      descriptionEn: 'Phase difference: φ = 0 at resonance; φ > 0 when inductive; φ < 0 when capacitive.',
      descriptionAr: 'فرق الطور: φ = 0 عند الرنين؛ موجبة للحثية؛ سالبة للسعوية.',
    },
    {
      id: 'q-factor',
      labelEn: 'Quality Factor (Q)',
      labelAr: 'معامل الجودة للدائرة',
      tex: 'Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{2\\pi f_0 L}{R}',
      descriptionEn: 'Measures resonance sharpness and voltage amplification factor.',
      descriptionAr: 'يقيس حدة منحنى الرنين ونسبة تضخيم الجهد على طرفي الملف والمكثف.',
    },
  ],
  defaultParams: {
    resistanceR: 50,
    inductanceMh: 100,
    capacitanceUf: 20,
    vSourceRms: 100,
    frequencyF: 112.5,
  },
  paramSchema: {
    resistanceR: {
      key: 'resistanceR',
      labelEn: 'Resistance (R)',
      labelAr: 'المقاومة الأومية (R)',
      symbolTex: 'R',
      unit: 'Ω',
      type: 'number',
      min: 5,
      max: 200,
      step: 5,
      defaultValue: 50,
      precision: 1,
    },
    inductanceMh: {
      key: 'inductanceMh',
      labelEn: 'Inductance (L)',
      labelAr: 'معامل الحث الذاتي (L)',
      symbolTex: 'L',
      unit: 'mH',
      type: 'number',
      min: 10,
      max: 500,
      step: 10,
      defaultValue: 100,
      precision: 0,
    },
    capacitanceUf: {
      key: 'capacitanceUf',
      labelEn: 'Capacitance (C)',
      labelAr: 'سعة المكثف (C)',
      symbolTex: 'C',
      unit: 'μF',
      type: 'number',
      min: 1,
      max: 100,
      step: 1,
      defaultValue: 20,
      precision: 0,
    },
    vSourceRms: {
      key: 'vSourceRms',
      labelEn: 'Source Voltage (RMS)',
      labelAr: 'جهد المصدر الفعال (V)',
      symbolTex: 'V_{\\text{rms}}',
      unit: 'V',
      type: 'number',
      min: 10,
      max: 250,
      step: 5,
      defaultValue: 100,
      precision: 0,
    },
    frequencyF: {
      key: 'frequencyF',
      labelEn: 'Source Frequency (f)',
      labelAr: 'تردد المصدر (f)',
      symbolTex: 'f',
      unit: 'Hz',
      type: 'number',
      min: 20,
      max: 300,
      step: 1,
      defaultValue: 112.5,
      precision: 1,
    },
  },
  presets: [
    {
      id: 'exact-resonance',
      nameEn: 'Exact Resonance Benchmark',
      nameAr: 'حالة الرنين التام (X_L = X_C)',
      badge: 'f = f₀',
      descriptionEn: 'Tuned exactly to f₀ ≈ 112.5 Hz: minimum impedance Z = R and maximum current I = 2.0A.',
      descriptionAr: 'معاير عند f₀ ≈ 112.5 هرتز: أدنى معاوقة Z = R وأقصى شدة تيار I = 2.0 أمبير.',
      params: { resistanceR: 50, inductanceMh: 100, capacitanceUf: 20, vSourceRms: 100, frequencyF: 112.5 },
    },
    {
      id: 'inductive-regime',
      nameEn: 'Inductive Dominant Regime',
      nameAr: 'الخواص الحثية (f > f₀)',
      badge: 'φ > 0',
      descriptionEn: 'High frequency (200 Hz) where inductive reactance dominates (X_L > X_C, voltage leads current).',
      descriptionAr: 'تردد مرتفع (200 هرتز) تسود فيه المفاعلة الحثية والجهد يسبق التيار.',
      params: { resistanceR: 50, inductanceMh: 100, capacitanceUf: 20, vSourceRms: 100, frequencyF: 200 },
    },
    {
      id: 'capacitive-regime',
      nameEn: 'Capacitive Dominant Regime',
      nameAr: 'الخواص السعوية (f < f₀)',
      badge: 'φ < 0',
      descriptionEn: 'Low frequency (50 Hz) where capacitive reactance dominates (X_C > X_L, current leads voltage).',
      descriptionAr: 'تردد منخفض (50 هرتز) تسود فيه المفاعلة السعوية والتيار يسبق الجهد.',
      params: { resistanceR: 50, inductanceMh: 100, capacitanceUf: 20, vSourceRms: 100, frequencyF: 50 },
    },
    {
      id: 'high-q-filter',
      nameEn: 'High-Q Sharp Selectivity Tank',
      nameAr: 'دائرة رنين عالية الجودة (Q مرتفع)',
      badge: 'Q ≈ 7.07',
      descriptionEn: 'Low resistance (10 Ω) yields a very sharp resonant peak and high selectivity for tuning receivers.',
      descriptionAr: 'مقاومة صغيرة (10 أوم) تعطي قمة رنين شديدة الحدة وحساسية اختيارية عالية لأجهزة الاستقبال.',
      params: { resistanceR: 10, inductanceMh: 100, capacitanceUf: 20, vSourceRms: 100, frequencyF: 112.5 },
    },
  ],
  poePrompts: [
    {
      id: 'poe-resonance-phase',
      titleEn: 'Phase Difference Between Total Voltage and Current at Resonance',
      titleAr: 'فرق الطور بين الجهد الكلي والتيار عند الرنين',
      scenarioEn: 'An alternating current series RLC circuit is operating at resonance where inductive reactance equals capacitive reactance (X_L = X_C).',
      scenarioAr: 'دائرة تيار متردد RLC في حالة رنين تام حيث تساوت المفاعلة الحثية مع السعوية (X_L = X_C).',
      questionEn: 'What is the phase angle φ between the source electromotive force and the total circuit current?',
      questionAr: 'ما هي زاوية الطور φ بين الجهد الكلي للمصدر والتيار الكلي للدائرة؟',
      optionsEn: [
        '0° (Total voltage and current are in phase, tan φ = 0)',
        '90° (Total voltage leads current by a quarter cycle)',
        '-90° (Total current leads voltage by a quarter cycle)',
        '180° (Total voltage and current are in complete phase opposition)',
      ],
      optionsAr: [
        '0° (يتفق الجهد الكلي والتيار في الطور تماماً، tan φ = 0)',
        '90° (يتقدم الجهد الكلي على التيار بربع دورة)',
        '-90° (يتقدم التيار الكلي على الجهد بربع دورة)',
        '180° (يتعارض الجهد والتيار في الطور تماماً)',
      ],
      correctOptionIndex: 0,
      scientificExplanationEn: 'Since tan φ = (X_L - X_C)/R, when X_L = X_C, the net reactance vanishes and tan φ = 0, so φ = 0°. The circuit exhibits pure resistive properties with voltage and current oscillating in phase.',
      scientificExplanationAr: 'بما أن tan φ = (X_L - X_C)/R، فعندما تتساوى المفاعلتان ينعدم فرق المفاعلة ويصبح tan φ = 0 أي أن زاوية الطور φ = 0°، وتتصرف الدائرة كمقاومة أومية عديمة الحث ويتفق الجهد والتيار في الطور.',
    },
  ],
  notebookConfig: {
    xLabelEn: 'Source Frequency (f)',
    xLabelAr: 'تردد المصدر (f)',
    xUnit: 'Hz',
    yLabelEn: 'Circuit Current (I_rms)',
    yLabelAr: 'شدة التيار الفعال (I_rms)',
    yUnit: 'A',
    recommendedPointsCount: 7,
  },
  supportedInstruments: ['multimeter', 'oscilloscope', 'stopwatch', 'scratchpad'],
};

export const RLCResonanceLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';

  const lab = useVirtualLab<RLCParams, RLCState>({
    definition: RLC_LAB_DEFINITION,
    onStep: (dt, _params, state) => {
      state.phaseTime = (state.phaseTime || 0) + dt;
    },
  });

  const { resistanceR, inductanceMh, capacitanceUf, vSourceRms, frequencyF } = lab.params;

  // Physics Calculations
  const L = inductanceMh * 1e-3;
  const C = capacitanceUf * 1e-6;
  const resonantFreqF0 = 1 / (2 * Math.PI * Math.sqrt(L * C));
  const omega = 2 * Math.PI * frequencyF;

  const xL = omega * L;
  const xC = 1 / (omega * C);
  const netReactance = xL - xC;
  const impedanceZ = Math.sqrt(resistanceR * resistanceR + netReactance * netReactance);

  const currentRms = vSourceRms / impedanceZ;
  const currentAtResonance = vSourceRms / resistanceR;

  const phaseAngleRad = Math.atan2(netReactance, resistanceR);
  const phaseAngleDeg = (phaseAngleRad * 180) / Math.PI;

  const vR = currentRms * resistanceR;
  const vL = currentRms * xL;
  const vC = currentRms * xC;
  const qualityFactor = (1 / resistanceR) * Math.sqrt(L / C);

  const isResonant = Math.abs(xL - xC) < 1.0;
  const isInductive = xL - xC >= 1.0;

  // Snap to Resonant Frequency
  const handleSnapToResonance = () => {
    lab.updateParam('frequencyF', parseFloat(resonantFreqF0.toFixed(1)));
  };

  // Multimeter live reading
  const multimeterReading: DMMReading = {
    voltageDC: 0.0,
    voltageAC: parseFloat(vSourceRms.toFixed(1)),
    currentDC: 0.0,
    resistance: parseFloat(impedanceZ.toFixed(1)),
    continuityBeep: isResonant,
  };

  // Oscilloscope live signals
  const oscilloscopeCh1: WaveformSignal = {
    amplitude: Math.min(10, parseFloat((vSourceRms / 20).toFixed(2))),
    frequency: frequencyF,
    phaseDeg: 0,
    type: 'sine',
  };

  const oscilloscopeCh2: WaveformSignal = {
    amplitude: Math.min(10, parseFloat((currentRms * 2.5).toFixed(2))),
    frequency: frequencyF,
    phaseDeg: parseFloat((-phaseAngleDeg).toFixed(1)), // Current phase relative to voltage
    type: 'sine',
  };

  // Telemetry Cards
  const telemetry: LabTelemetryMetric[] = [
    {
      id: 'resonant-f0',
      labelEn: 'Resonant Frequency',
      labelAr: 'تردد الرنين الطبيعي',
      symbolTex: 'f_0',
      value: resonantFreqF0,
      unit: 'Hz',
      min: 20,
      max: 300,
      status: isResonant ? 'optimal' : 'normal',
      precision: 1,
    },
    {
      id: 'impedance-z',
      labelEn: 'Total Impedance',
      labelAr: 'المعاوقة الكلية',
      symbolTex: 'Z',
      value: impedanceZ,
      unit: 'Ω',
      min: resistanceR,
      max: 500,
      status: isResonant ? 'optimal' : 'normal',
      precision: 1,
    },
    {
      id: 'current-rms',
      labelEn: 'Circuit Current',
      labelAr: 'شدة التيار الفعال',
      symbolTex: 'I_{\\text{rms}}',
      value: currentRms,
      unit: 'A',
      min: 0,
      max: currentAtResonance * 1.2,
      status: isResonant ? 'optimal' : 'normal',
      precision: 2,
    },
    {
      id: 'phase-angle',
      labelEn: 'Phase Angle',
      labelAr: 'زاوية الطور (φ)',
      symbolTex: '\\phi',
      value: phaseAngleDeg,
      unit: '°',
      min: -90,
      max: 90,
      status: isResonant ? 'optimal' : isInductive ? 'warning' : 'normal',
      precision: 1,
    },
    {
      id: 'quality-factor',
      labelEn: 'Quality Factor',
      labelAr: 'معامل الجودة (Q)',
      symbolTex: 'Q',
      value: qualityFactor,
      min: 0.5,
      max: 20,
      status: qualityFactor > 5 ? 'optimal' : 'normal',
      precision: 2,
    },
  ];

  // High-Performance 2D Canvas: Split Phasor Diagram (Left) & Resonance Response Curve (Right)
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    vp: LabViewportState
  ) => {
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(vp.panX, vp.panY);
    ctx.scale(vp.zoom, vp.zoom);

    const splitX = w * 0.46;

    // Divider
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(splitX, 15);
    ctx.lineTo(splitX, h - 15);
    ctx.stroke();

    // ----------------------------------------------------
    // LEFT: Dynamic Phasor Diagram
    // ----------------------------------------------------
    const phasorCx = splitX / 2;
    const phasorCy = h / 2;
    const scale = Math.min(phasorCx, phasorCy) * 0.75;

    // Phasor Axes
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(phasorCx - scale - 15, phasorCy);
    ctx.lineTo(phasorCx + scale + 15, phasorCy);
    ctx.moveTo(phasorCx, phasorCy - scale - 15);
    ctx.lineTo(phasorCx, phasorCy + scale + 15);
    ctx.stroke();

    // Max component for normalization
    const maxV = Math.max(vR, vL, vC, vSourceRms, 1);
    const normVR = (vR / maxV) * scale;
    const normVL = (vL / maxV) * scale;
    const normVC = (vC / maxV) * scale;

    // 1. Vector V_R (Horizontal / In Phase with Current)
    drawVector(ctx, phasorCx, phasorCy, phasorCx + normVR, phasorCy, '#22c55e', 3, 'V_R');

    // 2. Vector V_L (Upwards +90 deg)
    drawVector(ctx, phasorCx, phasorCy, phasorCx, phasorCy - normVL, '#ef4444', 3, 'V_L');

    // 3. Vector V_C (Downwards -90 deg)
    drawVector(ctx, phasorCx, phasorCy, phasorCx, phasorCy + normVC, '#3b82f6', 3, 'V_C');

    // 4. Net Vector V_total (at angle phi)
    const totalNorm = (vSourceRms / maxV) * scale;
    const endTotalX = phasorCx + totalNorm * Math.cos(phaseAngleRad);
    const endTotalY = phasorCy - totalNorm * Math.sin(phaseAngleRad);
    drawVector(ctx, phasorCx, phasorCy, endTotalX, endTotalY, '#f59e0b', 3.5, 'V_total');

    // Phase Angle Arc
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(phasorCx, phasorCy, 28, 0, -phaseAngleRad, phaseAngleRad > 0);
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = '11px sans-serif';
    ctx.fillText(`φ = ${phaseAngleDeg.toFixed(1)}°`, phasorCx + 34, phasorCy - 8);

    // Left Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic ? 'المتجهات الطورية للجهد (Phasor Diagram)' : 'Voltage Phasor Diagram',
      phasorCx,
      28
    );

    // ----------------------------------------------------
    // RIGHT: Frequency Response Curve (I_rms vs Frequency)
    // ----------------------------------------------------
    const plotX = splitX + 35;
    const plotY = 40;
    const plotW = w - plotX - 25;
    const plotH = h - 80;

    // Axes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(plotX, plotY);
    ctx.lineTo(plotX, plotY + plotH);
    ctx.lineTo(plotX + plotW, plotY + plotH);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`${currentAtResonance.toFixed(1)}A`, plotX - 6, plotY + 12);
    ctx.fillText('0A', plotX - 6, plotY + plotH);

    ctx.textAlign = 'center';
    ctx.fillText('20Hz', plotX, plotY + plotH + 16);
    ctx.fillText(`${resonantFreqF0.toFixed(0)}Hz (f₀)`, plotX + (plotW * (resonantFreqF0 - 20)) / 280, plotY + plotH + 16);
    ctx.fillText('300Hz', plotX + plotW, plotY + plotH + 16);

    // Draw Response Curve: I(f) = V / sqrt(R^2 + (2πfL - 1/(2πfC))^2)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const maxIPlot = currentAtResonance * 1.15;
    for (let px = 0; px <= plotW; px += 2) {
      const freq = 20 + (px / plotW) * 280;
      const wFreq = 2 * Math.PI * freq;
      const curXL = wFreq * L;
      const curXC = 1 / (wFreq * C);
      const curZ = Math.sqrt(resistanceR * resistanceR + (curXL - curXC) * (curXL - curXC));
      const curI = vSourceRms / curZ;
      const py = plotY + plotH - (curI / maxIPlot) * plotH;

      if (px === 0) ctx.moveTo(plotX + px, py);
      else ctx.lineTo(plotX + px, py);
    }
    ctx.stroke();

    // Resonant Frequency Dashed Vertical Line
    const resPx = plotX + (plotW * (resonantFreqF0 - 20)) / 280;
    if (resPx >= plotX && resPx <= plotX + plotW) {
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(resPx, plotY);
      ctx.lineTo(resPx, plotY + plotH);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Current Operating Point Ball
    const curPx = plotX + (plotW * (frequencyF - 20)) / 280;
    const curPy = plotY + plotH - (currentRms / maxIPlot) * plotH;
    if (curPx >= plotX && curPx <= plotX + plotW) {
      ctx.fillStyle = isResonant ? '#eab308' : '#38bdf8';
      ctx.beginPath();
      ctx.arc(curPx, curPy, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Right Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isArabic ? 'منحنى الرنين: شدة التيار مقابل التردد I(f)' : 'Resonance Response Curve: Current vs Frequency I(f)',
      plotX + plotW / 2,
      28
    );

    ctx.restore();
  };

  // Helper to draw vector with arrowhead
  const drawVector = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
    width: number,
    label: string
  ) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Arrowhead
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowLen = 10;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - arrowLen * Math.cos(angle - Math.PI / 6), y2 - arrowLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - arrowLen * Math.cos(angle + Math.PI / 6), y2 - arrowLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    // Label
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(label, x2 + 10 * Math.cos(angle), y2 + 10 * Math.sin(angle));
  };

  return (
    <VirtualLabShell<RLCParams, RLCState>
      definition={RLC_LAB_DEFINITION}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={frequencyF}
      currentYValue={parseFloat(currentRms.toFixed(2))}
      renderCustomControls={() => (
        <div className="space-y-2" dir={isArabic ? 'rtl' : 'ltr'}>
          <button
            type="button"
            onClick={handleSnapToResonance}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>{isArabic ? 'المعايرة اللحظية على تردد الرنين f₀' : 'Snap to Resonant Frequency f₀'}</span>
            <span className="font-mono bg-slate-950/20 px-2 py-0.5 rounded text-[11px]">
              {isArabic ? toHindiDigits(resonantFreqF0.toFixed(1)) : resonantFreqF0.toFixed(1)} Hz
            </span>
          </button>
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="rlc-viewport"
        lang={lang}
        aspectRatio="aspect-[16/9]"
        minHeight={420}
        onRender={handleRenderCanvas}
      />
    </VirtualLabShell>
  );
};
