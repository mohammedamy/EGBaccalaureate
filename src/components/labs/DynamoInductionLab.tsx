import React, { useState, useRef } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  VirtualLabShell,
  CanvasSimulationViewport,
  useVirtualLab,
  type LabDefinition,
  type LabTelemetryMetric,
  type LabViewportState,
  drawMetallicCylinder,
  drawAnalogMeterGauge,
  drawGlowingParticle,
  drawHeavyInsulatedCable,
  drawBrassTerminalStud,
} from '../../core/labs';
import type { DMMReading } from '../../core/instruments/DigitalMultimeter';
import type { WaveformSignal } from '../../core/instruments/DualTraceOscilloscope';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

interface DynamoParams {
  turnsN: number;
  fieldB: number;
  areaA: number;
  frequencyF: number;
  loadResistance: number;
}

interface DynamoState {
  angleDeg: number;
}

const DYNAMO_LAB_DEFINITION: LabDefinition<DynamoParams, DynamoState> = {
  id: 'dynamo-induction-lab',
  subject: 'physics',
  chapterRef: 'Chapter 3: Electromagnetic Induction',
  titleEn: 'AC/DC Electric Dynamo & Electromagnetic Induction',
  titleAr: 'مولد التيار المتردد والدينامو (الحث الكهرومغناطيسي)',
  subtitleEn: 'Faraday Law, Peak vs RMS EMF, and Split-Ring Commutation',
  subtitleAr: 'قانون فاراداي، القوة الدافعة العظمى والفعالة، والتقويم الموجي',
  objectives: [
    {
      id: 'faraday-law',
      textEn: 'Verify Faraday law of induction for a rectangular coil rotating in a uniform magnetic field.',
      textAr: 'تحقيق قانون فاراداي للحث الكهرومغناطيسي لملف مستطيل يدور في مجال مغناطيسي منتظم.',
      bloomLevel: 'understand',
    },
    {
      id: 'rms-vs-peak',
      textEn: 'Analyze the mathematical relationship between peak EMF and effective RMS value (E_eff = E_max / √2).',
      textAr: 'تحليل العلاقة الرياضية بين القوة الدافعة العظمى والقيمة الفعالة (E_eff = E_max / √2).',
      bloomLevel: 'analyze',
    },
    {
      id: 'slip-vs-commutator',
      textEn: 'Compare AC slip rings (sinusoidal output) with a split-ring commutator (unidirectional pulsating DC).',
      textAr: 'المقارنة بين حلقتي الانزلاق (تيار متردد جيبي) والعاكس المعدني المشقوق (تيار موحد الاتجاه).',
      bloomLevel: 'apply',
    },
    {
      id: 'flux-phase',
      textEn: 'Observe the 90° phase difference between magnetic flux Φ_m(t) and induced electromotive force E(t).',
      textAr: 'ملاحظة فرق الطور البالغ 90 درجة بين الفيض المغناطيسي والقوة الدافعة المستحثة.',
      bloomLevel: 'evaluate',
    },
  ],
  safetyWarnings: [
    {
      id: 'high-voltage',
      titleEn: 'High Induced Voltage Hazard',
      titleAr: 'خطر الجهد العالي المستحث',
      messageEn: 'High rotational frequencies with large numbers of turns can generate voltages exceeding 1000V.',
      messageAr: 'الترددات الدورانية العالية مع عدد لفات كبير قد تولد فروق جهد تتجاوز 1000 فولت.',
      severity: 'warning',
    },
  ],
  keyFormulas: [
    {
      id: 'emf-instant',
      labelEn: 'Instantaneous Induced EMF',
      labelAr: 'القوة الدافعة اللحظية المستحثة',
      tex: '\\mathcal{E}(t) = -N \\frac{\\Delta\\Phi_m}{\\Delta t} = N B A \\omega \\sin(\\omega t)',
      descriptionEn: 'Faraday-Lenz equation for a rotating coil with angle θ = ωt relative to the normal.',
      descriptionAr: 'معادلة فاراداي ولينز لملف يدور بزاوية θ = ωt مع العمودي على المجال.',
    },
    {
      id: 'emf-max',
      labelEn: 'Peak Electromotive Force',
      labelAr: 'القوة الدافعة الكهربية العظمى',
      tex: '\\mathcal{E}_{\\max} = 2\\pi f N B A = N B A \\omega',
      descriptionEn: 'Occurs when the coil plane is parallel to magnetic field lines (θ = 90°).',
      descriptionAr: 'تحدث عندما يكون مستوى الملف موازياً لخطوط المجال المغناطيسي.',
    },
    {
      id: 'emf-eff',
      labelEn: 'Effective (RMS) EMF',
      labelAr: 'القيمة الفعالة للقوة الدافعة',
      tex: '\\mathcal{E}_{\\text{eff}} = \\frac{\\mathcal{E}_{\\max}}{\\sqrt{2}} \\approx 0.7071 \\, \\mathcal{E}_{\\max}',
      descriptionEn: 'DC equivalent heating value over a complete sinusoidal cycle.',
      descriptionAr: 'القيمة المكافئة للتيار المستمر في توليد الأثر الحراري.',
    },
    {
      id: 'mag-flux',
      labelEn: 'Magnetic Flux',
      labelAr: 'الفيض المغناطيسي عبر الملف',
      tex: '\\Phi_m(t) = B A \\cos(\\omega t)',
      descriptionEn: 'Maximum when coil is perpendicular to field (θ = 0°), zero when parallel.',
      descriptionAr: 'قيمة عظمى عندما يكون الملف عمودياً على المجال، وينعدم عندما يوازيه.',
    },
  ],
  defaultParams: {
    turnsN: 200,
    fieldB: 0.5,
    areaA: 0.04,
    frequencyF: 50,
    loadResistance: 10,
  },
  paramSchema: {
    turnsN: {
      key: 'turnsN',
      labelEn: 'Coil Turns (N)',
      labelAr: 'عدد لفات الملف (N)',
      symbolTex: 'N',
      type: 'number',
      min: 50,
      max: 1000,
      step: 10,
      defaultValue: 200,
      precision: 0,
    },
    fieldB: {
      key: 'fieldB',
      labelEn: 'Magnetic Field (B)',
      labelAr: 'كثافة الفيض المغناطيسي (B)',
      symbolTex: 'B',
      unit: 'T',
      type: 'number',
      min: 0.1,
      max: 2.0,
      step: 0.05,
      defaultValue: 0.5,
      precision: 2,
    },
    areaA: {
      key: 'areaA',
      labelEn: 'Coil Cross-Section Area (A)',
      labelAr: 'مساحة مقطع الملف (A)',
      symbolTex: 'A',
      unit: 'm²',
      type: 'number',
      min: 0.01,
      max: 0.1,
      step: 0.005,
      defaultValue: 0.04,
      precision: 3,
    },
    frequencyF: {
      key: 'frequencyF',
      labelEn: 'Rotation Frequency (f)',
      labelAr: 'تردد الدوران (f)',
      symbolTex: 'f',
      unit: 'Hz',
      type: 'number',
      min: 10,
      max: 120,
      step: 1,
      defaultValue: 50,
      precision: 0,
    },
    loadResistance: {
      key: 'loadResistance',
      labelEn: 'Load Resistance (R)',
      labelAr: 'مقاومة الحمل (R)',
      symbolTex: 'R_L',
      unit: 'Ω',
      type: 'number',
      min: 2,
      max: 100,
      step: 1,
      defaultValue: 10,
      precision: 1,
    },
  },
  presets: [
    {
      id: 'eg-standard-50hz',
      nameEn: 'Egyptian Standard 50Hz Grid',
      nameAr: 'شبكة الكهرباء المصرية (50 هرتز)',
      badge: 'Official MoE',
      descriptionEn: 'Standard alternating current parameters: 50 Hz frequency, 200 turns, 0.5 Tesla field.',
      descriptionAr: 'المعايير القياسية للتيار المتردد: 50 هرتز، 200 لفة، 0.5 تسلا.',
      params: { turnsN: 200, fieldB: 0.5, areaA: 0.04, frequencyF: 50, loadResistance: 10 },
    },
    {
      id: 'high-flux-industrial',
      nameEn: 'High-Flux Industrial Generator',
      nameAr: 'مولد صناعي فائق الفيض',
      badge: 'High Power',
      descriptionEn: 'High-yield generator with 500 turns and 1.2 Tesla magnetic flux density.',
      descriptionAr: 'مولد فائق القدرة بـ 500 لفة وكثافة فيض 1.2 تسلا.',
      params: { turnsN: 500, fieldB: 1.2, areaA: 0.05, frequencyF: 60, loadResistance: 20 },
    },
    {
      id: 'educational-slow',
      nameEn: 'Slow Observation Benchmark',
      nameAr: 'نمط الفحص البطيء للظاهرة',
      badge: '15 Hz',
      descriptionEn: 'Low rotational frequency to visually track coil angle and Fleming vector directions.',
      descriptionAr: 'تردد دوراني منخفض لتتبع زاوية الملف ومتجهات فليمنج لليد اليمنى بصرياً.',
      params: { turnsN: 100, fieldB: 0.3, areaA: 0.03, frequencyF: 15, loadResistance: 5 },
    },
  ],
  poePrompts: [
    {
      id: 'poe-freq-doubling',
      titleEn: 'Effect of Doubling Frequency on Peak Induced EMF',
      titleAr: 'أثر مضاعفة تردد الدوران على القوة الدافعة العظمى',
      scenarioEn: 'The dynamo coil is rotating at 50 Hz producing a peak EMF of ~1256 V. The rotational speed is now doubled to 100 Hz while keeping turns and magnetic field constant.',
      scenarioAr: 'يدور ملف الدينامو بتردد 50 هرتز مولداً قوة دافعة عظمى قدرها 1256 فولت. تمت مضاعفة سرعة الدوران إلى 100 هرتز مع ثبات عدد اللفات والمجال.',
      questionEn: 'What will happen to the maximum electromotive force (E_max) and the period of one cycle (T)?',
      questionAr: 'ماذا يحدث للقوة الدافعة الكهربية العظمى (E_max) ولزمن الدورة الكاملة (T)؟',
      optionsEn: [
        'E_max doubles and period T halves (E_max ∝ f, T = 1/f)',
        'E_max quadruples and period T remains unchanged',
        'E_max remains unchanged and period T doubles',
        'E_max halves and period T halves',
      ],
      optionsAr: [
        'تتضاعف E_max وينخفض الزمن الدوري T إلى النصف (E_max ∝ f ، T = 1/f)',
        'تتضاعف E_max أربع مرات ويبقى الزمن الدوري ثابتاً',
        'تبقى E_max ثابتة ويتضاعف الزمن الدوري',
        'تنخفض E_max إلى النصف وينخفض الزمن الدوري إلى النصف',
      ],
      correctOptionIndex: 0,
      scientificExplanationEn: 'According to Faraday law, E_max = N B A (2πf). Therefore, E_max is directly proportional to frequency f (doubling f doubles E_max). Since period T = 1/f, doubling f halves the cycle duration.',
      scientificExplanationAr: 'طبقاً لقانون فاراداي: E_max = 2π f N B A، تتناسب القوة الدافعة العظمى طردياً مع التردد f، ومضاعفته تضاعف الجهد اللحظي والأقصى، والزمن الدوري T = 1/f يقل للنصف.',
    },
  ],
  notebookConfig: {
    xLabelEn: 'Rotation Frequency (f)',
    xLabelAr: 'تردد دوران الملف (f)',
    xUnit: 'Hz',
    yLabelEn: 'Peak Induced EMF (E_max)',
    yLabelAr: 'القوة الدافعة العظمى (E_max)',
    yUnit: 'V',
    recommendedPointsCount: 5,
  },
  supportedInstruments: ['function_generator', 'oscilloscope', 'multimeter', 'stopwatch', 'scratchpad'],
};

export const DynamoInductionLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const [dynamoMode, setDynamoMode] = useState<'ac' | 'dc'>('ac');

  // Physical angle ref (advances smoothly in requestAnimationFrame)
  const angleDegRef = useRef<number>(0);

  const lab = useVirtualLab<DynamoParams, DynamoState>({
    definition: DYNAMO_LAB_DEFINITION,
    onStep: (dt, params) => {
      // Advance coil angle proportional to frequency
      // Visual scaling: 36 deg/sec per Hz
      const degPerSec = params.frequencyF * 36;
      angleDegRef.current = (angleDegRef.current + degPerSec * dt) % 360;
    },
  });

  const { turnsN, fieldB, areaA, frequencyF, loadResistance } = lab.params;

  // Physics Calculations
  const omega = 2 * Math.PI * frequencyF;
  const emfMax = turnsN * fieldB * areaA * omega;
  const emfEff = emfMax / Math.SQRT2;
  const currentMax = emfMax / loadResistance;
  const currentEff = emfEff / loadResistance;

  const currentAngleDeg = angleDegRef.current;
  const angleRad = (currentAngleDeg * Math.PI) / 180;
  const rawSin = Math.sin(angleRad);
  const instEMF = dynamoMode === 'ac' ? emfMax * rawSin : emfMax * Math.abs(rawSin);
  const magneticFlux = fieldB * areaA * Math.cos(angleRad);

  // Live Multimeter Readings
  const multimeterReading: DMMReading = {
    voltageDC: dynamoMode === 'dc' ? parseFloat(((2 / Math.PI) * emfMax).toFixed(2)) : 0.0,
    voltageAC: parseFloat(emfEff.toFixed(2)),
    currentDC: dynamoMode === 'dc' ? parseFloat(((2 / Math.PI) * currentMax).toFixed(3)) : 0.0,
    resistance: loadResistance,
    continuityBeep: false,
  };

  // Live Oscilloscope Signals
  const oscilloscopeCh1: WaveformSignal = {
    amplitude: Math.min(10, parseFloat((emfMax / 100).toFixed(2))), // scaled for scope screen
    frequency: frequencyF,
    phaseDeg: 0,
    type: dynamoMode === 'ac' ? 'sine' : 'square',
  };

  const oscilloscopeCh2: WaveformSignal = {
    amplitude: Math.min(10, parseFloat(((magneticFlux * 100) / 2).toFixed(2))),
    frequency: frequencyF,
    phaseDeg: 90, // Magnetic flux leads EMF by 90 degrees
    type: 'sine',
  };

  // Real-Time Telemetry
  const telemetry: LabTelemetryMetric[] = [
    {
      id: 'emf-max',
      labelEn: 'Peak Induced EMF',
      labelAr: 'القوة الدافعة العظمى',
      symbolTex: '\\mathcal{E}_{\\max}',
      value: emfMax,
      unit: 'V',
      min: 0,
      max: 5000,
      status: emfMax > 2000 ? 'warning' : 'optimal',
      precision: 1,
    },
    {
      id: 'emf-eff',
      labelEn: 'Effective (RMS) EMF',
      labelAr: 'القيمة الفعالة للجهد',
      symbolTex: '\\mathcal{E}_{\\text{eff}}',
      value: emfEff,
      unit: 'V',
      min: 0,
      max: 3500,
      status: 'optimal',
      precision: 1,
    },
    {
      id: 'current-eff',
      labelEn: 'Effective Current',
      labelAr: 'شدة التيار الفعال',
      symbolTex: 'I_{\\text{eff}}',
      value: currentEff,
      unit: 'A',
      min: 0,
      max: 200,
      status: 'normal',
      precision: 2,
    },
    {
      id: 'emf-instant',
      labelEn: 'Instantaneous EMF',
      labelAr: 'الجهد اللحظي المستحث',
      symbolTex: '\\mathcal{E}(t)',
      value: instEMF,
      unit: 'V',
      min: -emfMax,
      max: emfMax,
      status: 'normal',
      precision: 1,
    },
    {
      id: 'magnetic-flux',
      labelEn: 'Instantaneous Flux',
      labelAr: 'الفيض المغناطيسي اللحظي',
      symbolTex: '\\Phi_m',
      value: magneticFlux * 1000,
      unit: 'mWb',
      min: -fieldB * areaA * 1000,
      max: fieldB * areaA * 1000,
      status: 'normal',
      precision: 2,
    },
  ];

  // High-Performance 2D Canvas Rendering Routine
  const handleRenderCanvas = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    vp: LabViewportState,
    _dpr: number = 1,
    time: number = 0,
    _frame: number = 0
  ) => {
    const t = (time ? time : performance.now()) * 0.001;
    // Theme-adaptive background
    ctx.fillStyle = isContrast ? '#000000' : isLight ? '#f8fafc' : '#020617';
    ctx.fillRect(0, 0, w, h);

    // Grid backdrop for precision physics bench feel
    ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.15)' : 'rgba(30, 41, 59, 0.35)';
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    for (let gx = 0; gx < w; gx += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, h);
      ctx.stroke();
    }
    for (let gy = 0; gy < h; gy += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();
    }

    ctx.save();
    const dynamoCenterX = w / 2 + vp.panX - 40;
    const dynamoCenterY = h / 2 - 35 + vp.panY;
    ctx.translate(dynamoCenterX, dynamoCenterY);
    ctx.scale(vp.zoom, vp.zoom);

    // 0. Heavy Cast-Iron Magnetic Yoke Base (Structural horseshoe frame)
    const yokeW = 440;
    const yokeH = 210;
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = isLight ? '#334155' : '#0f172a';
    ctx.beginPath();
    ctx.roundRect(-yokeW / 2, -yokeH / 2 - 15, yokeW, yokeH + 30, [18]);
    ctx.fill();
    ctx.strokeStyle = isLight ? '#475569' : '#1e293b';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    // 1. Draw Massive Magnetic Poles (Concave Pole Shoes: North Red, South Blue)
    const poleW = 105;
    const poleH = 180;
    const poleGap = 280;

    // North Pole (Left) with deep concave pole shoe
    const nX = -poleGap / 2 - poleW;
    const nGrad = ctx.createLinearGradient(nX, 0, nX + poleW, 0);
    nGrad.addColorStop(0, '#7f1d1d');
    nGrad.addColorStop(0.65, '#dc2626');
    nGrad.addColorStop(1, '#ef4444');
    ctx.fillStyle = nGrad;
    ctx.beginPath();
    ctx.moveTo(nX, -poleH / 2);
    ctx.lineTo(nX + poleW, -poleH / 2);
    // Concave arc facing coil
    ctx.arcTo(nX + poleW - 18, 0, nX + poleW, poleH / 2, poleH * 0.65);
    ctx.lineTo(nX + poleW, poleH / 2);
    ctx.lineTo(nX, poleH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#fca5a5';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // North Pole Bevel & Label
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', nX + poleW / 2 - 10, 0);
    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#fecaca';
    ctx.fillText(isArabic ? 'قطب شمالي' : 'NORTH POLE', nX + poleW / 2 - 10, 32);

    // South Pole (Right) with deep concave pole shoe
    const sX = poleGap / 2;
    const sGrad = ctx.createLinearGradient(sX, 0, sX + poleW, 0);
    sGrad.addColorStop(0, '#2563eb');
    sGrad.addColorStop(0.35, '#1d4ed8');
    sGrad.addColorStop(1, '#1e3a8a');
    ctx.fillStyle = sGrad;
    ctx.beginPath();
    ctx.moveTo(sX + poleW, -poleH / 2);
    ctx.lineTo(sX, -poleH / 2);
    // Concave arc facing coil
    ctx.arcTo(sX + 18, 0, sX, poleH / 2, poleH * 0.65);
    ctx.lineTo(sX, poleH / 2);
    ctx.lineTo(sX + poleW, poleH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#93c5fd';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // South Pole Bevel & Label
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    ctx.fillText('S', sX + poleW / 2 + 10, 0);
    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#bfdbfe';
    ctx.fillText(isArabic ? 'قطب جنوبي' : 'SOUTH POLE', sX + poleW / 2 + 10, 32);

    // 2. Magnetic Field Lines (N to S with streaming flux particles)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    const numLines = 9;
    for (let i = 0; i < numLines; i++) {
      const lineY = -poleH / 2 + 18 + ((poleH - 36) / (numLines - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(-poleGap / 2 + 8, lineY);
      ctx.lineTo(poleGap / 2 - 8, lineY);
      ctx.stroke();

      // Field direction arrows
      ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.beginPath();
      ctx.moveTo(14, lineY);
      ctx.lineTo(0, lineY - 5);
      ctx.lineTo(0, lineY + 5);
      ctx.closePath();
      ctx.fill();

      // Animated magnetic flux particle
      const pX = -poleGap / 2 + 15 + ((t * 180 + i * 45) % (poleGap - 30));
      drawGlowingParticle(ctx, pX, lineY, 2.5, '#38bdf8', 6);
    }

    // 3. Central Rotating Armature Coil (Large multi-turn copper windings)
    const curAngleRad = (t * frequencyF * 2 * Math.PI) % (Math.PI * 2);
    const cosAngle = Math.cos(curAngleRad);
    const sinAngle = Math.sin(curAngleRad);

    const coilHalfW = 95;
    const coilHalfH = 65;

    // Projected horizontal width based on angle
    const projW = coilHalfW * cosAngle;

    // Laminated Soft Iron Cylinder Core inside coil
    drawMetallicCylinder(ctx, -18, -coilHalfH + 8, 36, coilHalfH * 2 - 16, 'steel', 'vertical');
    // Core lamination lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let ly = -coilHalfH + 18; ly < coilHalfH - 12; ly += 12) {
      ctx.beginPath();
      ctx.moveTo(-18, ly);
      ctx.lineTo(18, ly);
      ctx.stroke();
    }

    // Upper and Lower Heavy Steel Drive Shaft
    drawMetallicCylinder(ctx, -6, -coilHalfH - 45, 12, 45, 'steel', 'vertical');
    drawMetallicCylinder(ctx, -6, coilHalfH, 12, 40, 'steel', 'vertical');

    // Pillow block bearing housing at top
    ctx.fillStyle = '#475569';
    ctx.fillRect(-16, -coilHalfH - 48, 32, 10);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-16, -coilHalfH - 48, 32, 10);

    ctx.save();
    // Coil multi-layer copper windings
    // Outer turn
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 5.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(-projW, -coilHalfH);
    ctx.lineTo(projW, -coilHalfH);
    ctx.lineTo(projW, coilHalfH);
    ctx.lineTo(-projW, coilHalfH);
    ctx.closePath();
    ctx.stroke();

    // Inner bright copper highlight turn
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.4;
    ctx.stroke();

    // Coil fill sheen
    ctx.fillStyle = cosAngle >= 0 ? 'rgba(251, 191, 36, 0.18)' : 'rgba(217, 119, 6, 0.22)';
    ctx.fill();

    // Rotation direction arc vector (top)
    ctx.strokeStyle = '#fde68a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, -coilHalfH - 24, 26, 9, 0, 0, Math.PI * 1.5);
    ctx.stroke();
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.moveTo(26, -coilHalfH - 24);
    ctx.lineTo(22, -coilHalfH - 30);
    ctx.lineTo(32, -coilHalfH - 28);
    ctx.closePath();
    ctx.fill();
    ctx.font = 'bold 11px monospace';
    ctx.fillText('ω', 36, -coilHalfH - 24);

    // Fleming Right-Hand Rule Current Flow Direction Markers
    if (Math.abs(sinAngle) > 0.15) {
      const s1Y = -coilHalfH / 2;
      drawGlowingParticle(ctx, -projW, s1Y, 4.5, '#22c55e', 10);

      const s2Y = coilHalfH / 2;
      drawGlowingParticle(ctx, projW, s2Y, 4.5, '#22c55e', 10);
    }

    // 4. Commutator / Slip Rings (Bottom of Axis)
    const shaftBottomY = coilHalfH + 20;
    const brushLeftX = -24;
    const brushRightX = 18;
    const brushY = shaftBottomY + 4;

    if (dynamoMode === 'ac') {
      // Dual Slip Rings (AC Brass Cylinders)
      drawMetallicCylinder(ctx, -16, shaftBottomY - 2, 16, 10, 'brass', 'horizontal');
      drawMetallicCylinder(ctx, 0, shaftBottomY + 14, 16, 10, 'brass', 'horizontal');

      // Carbon Brushes (Graphite blocks with copper holders)
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(brushLeftX - 8, shaftBottomY - 4, 12, 14);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(brushLeftX - 8, shaftBottomY - 4, 12, 14);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(brushRightX, shaftBottomY + 12, 12, 14);
      ctx.strokeRect(brushRightX, shaftBottomY + 12, 12, 14);

      // Sparkle at brush contact points
      if (Math.abs(sinAngle) > 0.3) {
        drawGlowingParticle(ctx, -16, shaftBottomY + 2, 3, '#38bdf8', 8);
        drawGlowingParticle(ctx, 16, shaftBottomY + 18, 3, '#38bdf8', 8);
      }
    } else {
      // Split-Ring Commutator (DC Brass)
      drawMetallicCylinder(ctx, -16, shaftBottomY, 32, 16, 'brass', 'horizontal');

      // Commutator insulation split gap
      ctx.fillStyle = '#020617';
      ctx.fillRect(-2, shaftBottomY - 1, 4, 18);

      // Carbon Brushes on opposite sides
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(brushLeftX - 8, shaftBottomY + 1, 12, 14);
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(brushLeftX - 8, shaftBottomY + 1, 12, 14);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(brushRightX, shaftBottomY + 1, 12, 14);
      ctx.strokeRect(brushRightX, shaftBottomY + 1, 12, 14);

      // Commutation spark when passing zero/neutral axis
      if (Math.abs(cosAngle) < 0.25) {
        drawGlowingParticle(ctx, -16, shaftBottomY + 8, 4, '#fbbf24', 10);
        drawGlowingParticle(ctx, 16, shaftBottomY + 8, 4, '#fbbf24', 10);
      }
    }

    // Terminal Mounting Block Below Commutator
    const termBlockY = shaftBottomY + 38;
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(-50, termBlockY, 100, 26, [6]);
    ctx.fill();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Brass Binding Posts on Dynamo Base
    const termNegX = -30;
    const termPosX = 30;
    const termStudY = termBlockY + 13;
    drawBrassTerminalStud(ctx, termNegX, termStudY);
    drawBrassTerminalStud(ctx, termPosX, termStudY);

    // Labels (-) and (+)
    ctx.font = 'bold 11px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('(-)', termNegX, termStudY + 22);
    ctx.fillStyle = '#ef4444';
    ctx.fillText('(+)', termPosX, termStudY + 22);

    // Heavy Insulated Pigtail Leads from Brushes to Terminal Block
    drawHeavyInsulatedCable(
      ctx,
      brushLeftX - 2,
      brushY,
      termNegX,
      termStudY,
      '#2563eb',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      brushRightX + 2,
      brushY,
      termPosX,
      termStudY,
      '#dc2626',
      Math.abs(sinAngle) > 0.1
    );

    ctx.restore(); // Restore from dynamo center coordinate system

    // 5. External Heavy Insulated Cables to Meter and Load Circuit
    // Convert terminal positions to screen coordinates
    const screenTermNegX = dynamoCenterX + (-30 * vp.zoom);
    const screenTermPosX = dynamoCenterX + (30 * vp.zoom);
    const screenTermY = dynamoCenterY + ((coilHalfH + 20 + 38 + 13) * vp.zoom);

    // Meter coordinates (Top-Right of viewport, generously enlarged to 54px radius)
    const meterR = 54;
    const meterX = Math.min(w - meterR - 28, w - 85);
    const meterY = meterR + 24;

    // Meter Brass Binding Studs
    const meterStudNegX = meterX - 26;
    const meterStudPosX = meterX + 26;
    const meterStudY = meterY + meterR + 14;

    // Meter mounting panel
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = isLight ? '#f1f5f9' : '#0f172a';
    ctx.beginPath();
    ctx.roundRect(meterX - meterR - 16, meterY - meterR - 12, (meterR + 16) * 2, meterR * 2 + 50, [14]);
    ctx.fill();
    ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    drawBrassTerminalStud(ctx, meterStudNegX, meterStudY);
    drawBrassTerminalStud(ctx, meterStudPosX, meterStudY);
    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.textAlign = 'center';
    ctx.fillText('COM (-)', meterStudNegX, meterStudY + 14);
    ctx.fillStyle = '#ef4444';
    ctx.fillText('V (+)', meterStudPosX, meterStudY + 14);

    // External Heavy Insulated Cables Routing across Bench
    // Negative (Blue) Cable: from Dynamo Negative Terminal to Meter COM
    drawHeavyInsulatedCable(
      ctx,
      screenTermNegX,
      screenTermY,
      screenTermNegX,
      screenTermY + 30,
      '#2563eb',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      screenTermNegX,
      screenTermY + 30,
      meterStudNegX - 40,
      screenTermY + 30,
      '#2563eb',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      meterStudNegX - 40,
      screenTermY + 30,
      meterStudNegX - 40,
      meterStudY + 25,
      '#2563eb',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      meterStudNegX - 40,
      meterStudY + 25,
      meterStudNegX,
      meterStudY,
      '#2563eb',
      Math.abs(sinAngle) > 0.1
    );

    // Positive (Red) Cable: from Dynamo Positive Terminal to Meter V(+)
    drawHeavyInsulatedCable(
      ctx,
      screenTermPosX,
      screenTermY,
      screenTermPosX,
      screenTermY + 15,
      '#dc2626',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      screenTermPosX,
      screenTermY + 15,
      meterStudPosX + 30,
      screenTermY + 15,
      '#dc2626',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      meterStudPosX + 30,
      screenTermY + 15,
      meterStudPosX + 30,
      meterStudY + 25,
      '#dc2626',
      Math.abs(sinAngle) > 0.1
    );
    drawHeavyInsulatedCable(
      ctx,
      meterStudPosX + 30,
      meterStudY + 25,
      meterStudPosX,
      meterStudY,
      '#dc2626',
      Math.abs(sinAngle) > 0.1
    );

    // 6. Photorealistic Analog Center-Zero Avometer / Galvanometer (54px Radius)
    const instEmf = sinAngle * emfMax;
    const meterVal = dynamoMode === 'ac' ? instEmf : Math.abs(instEmf);
    drawAnalogMeterGauge(
      ctx,
      meterX,
      meterY,
      meterR,
      meterVal,
      dynamoMode === 'ac' ? -emfMax : 0,
      emfMax,
      isArabic ? 'جلفانومتر الجهد' : 'GALVANOMETER',
      'V'
    );

    // 7. Mini CRT Oscilloscope Waveform Strip at the Bottom
    const waveH = 76;
    const waveY = h - waveH - 12;
    const waveW = w - 24;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    ctx.beginPath();
    ctx.roundRect(12, waveY, waveW, waveH, [10]);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();

    // Phosphor Reticle Grid Lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1;
    for (let rx = 12; rx < 12 + waveW; rx += 40) {
      ctx.beginPath();
      ctx.moveTo(rx, waveY);
      ctx.lineTo(rx, waveY + waveH);
      ctx.stroke();
    }
    for (let ry = waveY; ry < waveY + waveH; ry += 20) {
      ctx.beginPath();
      ctx.moveTo(12, ry);
      ctx.lineTo(12 + waveW, ry);
      ctx.stroke();
    }

    // Center Zero Line
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(12, waveY + waveH / 2);
    ctx.lineTo(12 + waveW, waveY + waveH / 2);
    ctx.stroke();

    // Waveform curve with volumetric phosphorescent glow
    ctx.save();
    ctx.shadowColor = dynamoMode === 'ac' ? '#38bdf8' : '#fbbf24';
    ctx.shadowBlur = 8;
    ctx.strokeStyle = dynamoMode === 'ac' ? '#38bdf8' : '#fbbf24';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let px = 0; px < waveW; px++) {
      const waveAngle = curAngleRad - ((waveW - px) / 40);
      let sVal = Math.sin(waveAngle);
      if (dynamoMode === 'dc') {
        sVal = Math.abs(sVal);
      }
      const py = waveY + waveH / 2 - sVal * (waveH * 0.38);
      if (px === 0) ctx.moveTo(12 + px, py);
      else ctx.lineTo(12 + px, py);
    }
    ctx.stroke();
    ctx.restore();

    // Live tracker dot on wave
    let curS = Math.sin(curAngleRad);
    if (dynamoMode === 'dc') curS = Math.abs(curS);
    const dotY = waveY + waveH / 2 - curS * (waveH * 0.38);
    drawGlowingParticle(ctx, 12 + waveW, dotY, 5, '#ef4444', 14);

    // Waveform CRT Legend
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      dynamoMode === 'ac'
        ? (isArabic ? 'إشارة الجهد المتردد AC (جيبي متناوب) | Oscilloscope CH1' : 'AC Sinusoidal Voltage Output | Oscilloscope CH1')
        : (isArabic ? 'إشارة الجهد المقوم DC (موحد الاتجاه بنصف موجات) | Oscilloscope CH1' : 'Pulsating DC Voltage Output | Oscilloscope CH1'),
      24,
      waveY + 18
    );
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText(
      `E_max = ${emfMax.toFixed(1)} V | E_eff = ${emfEff.toFixed(1)} V | f = ${frequencyF} Hz`,
      24,
      waveY + 34
    );

    ctx.restore();
  };

  return (
    <VirtualLabShell<DynamoParams, DynamoState>
      definition={DYNAMO_LAB_DEFINITION}
      lang={lang}
      theme={theme}
      lab={lab}
      telemetry={telemetry}
      multimeterReading={multimeterReading}
      oscilloscopeCh1={oscilloscopeCh1}
      oscilloscopeCh2={oscilloscopeCh2}
      currentXValue={frequencyF}
      currentYValue={parseFloat(emfMax.toFixed(1))}
      renderCustomControls={() => (
        <div className="space-y-2" dir={isArabic ? 'rtl' : 'ltr'}>
          <label className="text-xs font-bold text-slate-400">
            {isArabic ? 'نظام تجميع التيار الخارج:' : 'Output Commutation System:'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDynamoMode('ac')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                dynamoMode === 'ac'
                  ? 'bg-amber-500/20 text-amber-500 dark:text-amber-300 border-amber-500/50 shadow-sm'
                  : isLight
                  ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {isArabic ? 'حلقتان منزلقاتان (AC)' : 'Slip Rings (AC)'}
            </button>
            <button
              type="button"
              onClick={() => setDynamoMode('dc')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                dynamoMode === 'dc'
                  ? 'bg-amber-500/20 text-amber-500 dark:text-amber-300 border-amber-500/50 shadow-sm'
                  : isLight
                  ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {isArabic ? 'أسطوانة مشقوقة (DC)' : 'Split Commutator (DC)'}
            </button>
          </div>
        </div>
      )}
    >
      <CanvasSimulationViewport
        id="dynamo-viewport"
        lang={lang}
        theme={theme}
        aspectRatio="aspect-[16/10]"
        minHeight={420}
        onRender={handleRenderCanvas}
      />
    </VirtualLabShell>
  );
};
