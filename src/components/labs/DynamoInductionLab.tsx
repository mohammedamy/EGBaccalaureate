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

    ctx.save();
    ctx.translate(w / 2 + vp.panX, h / 2 - 20 + vp.panY);
    ctx.scale(vp.zoom, vp.zoom);

    // 1. Draw Magnetic Poles (Concave Pole Shoes: North Red, South Blue)
    const poleW = 90;
    const poleH = 150;
    const poleGap = 260;

    // North Pole (Left) with concave pole shoe
    const nX = -poleGap / 2 - poleW;
    const nGrad = ctx.createLinearGradient(nX, 0, nX + poleW, 0);
    nGrad.addColorStop(0, '#7f1d1d');
    nGrad.addColorStop(0.7, '#dc2626');
    nGrad.addColorStop(1, '#ef4444');
    ctx.fillStyle = nGrad;
    ctx.beginPath();
    ctx.moveTo(nX, -poleH / 2);
    ctx.lineTo(nX + poleW, -poleH / 2);
    // Concave arc facing coil
    ctx.arcTo(nX + poleW - 14, 0, nX + poleW, poleH / 2, poleH * 0.6);
    ctx.lineTo(nX + poleW, poleH / 2);
    ctx.lineTo(nX, poleH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', nX + poleW / 2 - 8, 0);

    // South Pole (Right) with concave pole shoe
    const sX = poleGap / 2;
    const sGrad = ctx.createLinearGradient(sX, 0, sX + poleW, 0);
    sGrad.addColorStop(0, '#2563eb');
    sGrad.addColorStop(0.3, '#1d4ed8');
    sGrad.addColorStop(1, '#1e3a8a');
    ctx.fillStyle = sGrad;
    ctx.beginPath();
    ctx.moveTo(sX + poleW, -poleH / 2);
    ctx.lineTo(sX, -poleH / 2);
    // Concave arc facing coil
    ctx.arcTo(sX + 14, 0, sX, poleH / 2, poleH * 0.6);
    ctx.lineTo(sX, poleH / 2);
    ctx.lineTo(sX + poleW, poleH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.fillText('S', sX + poleW / 2 + 8, 0);

    // 2. Magnetic Field Lines (Left to Right, N to S with flux glow)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1.5;
    const numLines = 7;
    for (let i = 0; i < numLines; i++) {
      const lineY = -poleH / 2 + 15 + ((poleH - 30) / (numLines - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(-poleGap / 2 + 5, lineY);
      ctx.lineTo(poleGap / 2 - 5, lineY);
      ctx.stroke();

      // Field direction arrow
      ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
      ctx.beginPath();
      ctx.moveTo(12, lineY);
      ctx.lineTo(0, lineY - 4);
      ctx.lineTo(0, lineY + 4);
      ctx.closePath();
      ctx.fill();
    }

    // 3. Central Rotating Armature Coil (Continuous 60 FPS rotation)
    const curAngleRad = (t * frequencyF * 2 * Math.PI) % (Math.PI * 2);
    const cosAngle = Math.cos(curAngleRad);
    const sinAngle = Math.sin(curAngleRad);

    const coilHalfW = 75;
    const coilHalfH = 50;

    // Projected horizontal width based on angle
    const projW = coilHalfW * cosAngle;

    // Soft iron cylindrical core inside coil
    drawMetallicCylinder(ctx, -14, -coilHalfH + 6, 28, coilHalfH * 2 - 12, 'steel', 'vertical');

    ctx.save();
    // Coil wire with 3D copper sheen
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-projW, -coilHalfH);
    ctx.lineTo(projW, -coilHalfH);
    ctx.lineTo(projW, coilHalfH);
    ctx.lineTo(-projW, coilHalfH);
    ctx.closePath();
    ctx.stroke();

    // Coil fill sheen
    ctx.fillStyle = cosAngle >= 0 ? 'rgba(251, 191, 36, 0.15)' : 'rgba(217, 119, 6, 0.2)';
    ctx.fill();

    // Axis of rotation (dashed line)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, -coilHalfH - 35);
    ctx.lineTo(0, coilHalfH + 60);
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. Current Direction Arrows on Coil Sides (Fleming Right-Hand Rule)
    if (Math.abs(sinAngle) > 0.15) {
      const s1Y = -coilHalfH / 2;
      drawGlowingParticle(ctx, -projW, s1Y, 3.5, '#22c55e', 8);

      const s2Y = coilHalfH / 2;
      drawGlowingParticle(ctx, projW, s2Y, 3.5, '#22c55e', 8);
    }

    // 5. Commutator / Slip Rings (Bottom of Axis)
    const shaftBottomY = coilHalfH + 18;
    if (dynamoMode === 'ac') {
      // Dual Slip Rings (AC Brass Cylinders)
      drawMetallicCylinder(ctx, -14, shaftBottomY, 14, 8, 'brass', 'horizontal');
      drawMetallicCylinder(ctx, 0, shaftBottomY + 14, 14, 8, 'brass', 'horizontal');

      // Carbon Brushes (Graphite blocks)
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.fillRect(-24, shaftBottomY - 2, 9, 10);
      ctx.strokeRect(-24, shaftBottomY - 2, 9, 10);
      ctx.fillRect(15, shaftBottomY + 12, 9, 10);
      ctx.strokeRect(15, shaftBottomY + 12, 9, 10);
    } else {
      // Split-Ring Commutator (DC Brass)
      drawMetallicCylinder(ctx, -12, shaftBottomY, 24, 12, 'brass', 'horizontal');

      // Commutator insulation split gap
      ctx.fillStyle = '#020617';
      ctx.fillRect(-1.5, shaftBottomY - 1, 3, 14);

      // Carbon Brushes on opposite sides
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.fillRect(-22, shaftBottomY, 9, 10);
      ctx.strokeRect(-22, shaftBottomY, 9, 10);
      ctx.fillRect(13, shaftBottomY, 9, 10);
      ctx.strokeRect(13, shaftBottomY, 9, 10);
    }

    ctx.restore();

    // 6. Analog Center-Zero Galvanometer Gauge (Top-Right of viewport)
    const instEmf = sinAngle * emfMax;
    const meterVal = dynamoMode === 'ac' ? instEmf : Math.abs(instEmf);
    drawAnalogMeterGauge(
      ctx,
      w - 65,
      60,
      36,
      meterVal,
      dynamoMode === 'ac' ? -emfMax : 0,
      emfMax,
      'V',
      'GALV'
    );

    // 7. Mini Waveform Strip at the Bottom
    const waveH = 70;
    const waveY = h - waveH - 12;
    const waveW = w - 24;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.8)';
    ctx.lineWidth = 1;
    ctx.fillRect(12, waveY, waveW, waveH);
    ctx.strokeRect(12, waveY, waveW, waveH);

    // Center zero line
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
    ctx.beginPath();
    ctx.moveTo(12, waveY + waveH / 2);
    ctx.lineTo(12 + waveW, waveY + waveH / 2);
    ctx.stroke();

    // Waveform curve
    ctx.strokeStyle = dynamoMode === 'ac' ? '#38bdf8' : '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let px = 0; px < waveW; px++) {
      const waveAngle = curAngleRad - ((waveW - px) / 40);
      let sVal = Math.sin(waveAngle);
      if (dynamoMode === 'dc') {
        sVal = Math.abs(sVal);
      }
      const py = waveY + waveH / 2 - sVal * (waveH * 0.4);
      if (px === 0) ctx.moveTo(12 + px, py);
      else ctx.lineTo(12 + px, py);
    }
    ctx.stroke();

    // Live tracker dot on wave
    let curS = Math.sin(curAngleRad);
    if (dynamoMode === 'dc') curS = Math.abs(curS);
    const dotY = waveY + waveH / 2 - curS * (waveH * 0.4);
    drawGlowingParticle(ctx, 12 + waveW, dotY, 4.5, '#ef4444', 12);

    // Waveform Legend
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      dynamoMode === 'ac'
        ? (isArabic ? 'إشارة الجهد المتردد AC (جيبي)' : 'AC Sinusoidal Voltage Output')
        : (isArabic ? 'إشارة الجهد المقوم DC (موحد الاتجاه)' : 'Pulsating DC Voltage Output'),
      20,
      waveY + 16
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
