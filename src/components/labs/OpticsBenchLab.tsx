import React, { useState, useEffect, useRef } from 'react';
import { Sun } from 'lucide-react';
import { calculateSnellsLaw, wavelengthToRGB, calculateThinLens, getCauchyRefractiveIndex } from '../../core/simulation/OpticsEngine';
import { POEController, type POEPrompt } from '../../core/pedagogy/POEController';
import { LabNotebook } from '../../core/pedagogy/LabNotebook';

interface OpticsBenchLabProps {
  lang?: 'en' | 'ar';
}

type OpticsMode = 'refraction' | 'thin_lens' | 'double_slit';

export const OpticsBenchLab: React.FC<OpticsBenchLabProps> = ({ lang = 'ar' }) => {
  const isAr = lang === 'ar';
  const [mode, setMode] = useState<OpticsMode>('double_slit');
  const [labUnlocked, setLabUnlocked] = useState<boolean>(true);

  // Mode 1: Refraction & Snell's Law
  const [n1, setN1] = useState<number>(1.0); // Air
  const [n2, setN2] = useState<number>(1.52); // Crown glass
  const [incidentAngleDeg, setIncidentAngleDeg] = useState<number>(45);
  const [refractionWavelengthNm, setRefractionWavelengthNm] = useState<number>(550);

  // Mode 2: Thin Lens
  const [objectDistanceCm, setObjectDistanceCm] = useState<number>(30);
  const [focalLengthCm, setFocalLengthCm] = useState<number>(15);
  const [objectHeightCm, setObjectHeightCm] = useState<number>(10);

  // Mode 3: Young's Double Slit
  const [wavelengthNm, setWavelengthNm] = useState<number>(650); // Red laser
  const [slitSeparationUm, setSlitSeparationUm] = useState<number>(250); // 0.25 mm
  const [screenDistanceM, setScreenDistanceM] = useState<number>(1.5); // 1.5 m

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // POE Prompt for Young's Double Slit
  const doubleSlitPOE: POEPrompt = {
    id: 'young_double_slit_wavelength',
    titleEn: "Young's Double-Slit Experiment & Fringe Spacing",
    titleAr: 'تجربة ينج للشق المزدوج والمسافة بين الهدب',
    scenarioEn: 'A coherent monochromatic laser beam is directed towards two narrow slits separated by distance d = 0.25 mm. The interference pattern of bright and dark fringes is observed on a screen placed at distance D = 1.5 m.',
    scenarioAr: 'يسقط شعاع ليزر أحادي اللون على شقين ضيقين المسافة بينهما d = 0.25 مم. يتكون نمط تداخل من هدب مضيئة ومظلمة على حائل يبعد مسافة D = 1.5 م.',
    questionEn: 'If the laser source is switched from Red light (650 nm) to Violet light (400 nm), what happens to the distance between consecutive bright fringes (Δy)?',
    questionAr: 'إذا استُبدل مصدر الليزر من الضوء الأحمر (650 نانومتر) إلى الضوء البنفسجي (400 نانومتر)، ماذا يحدث للمسافة بين كل هدبتين مضيئتين متتاليتين (Δy)؟',
    optionsEn: [
      'Δy increases (fringes spread farther apart)',
      'Δy decreases (fringes become closer together)',
      'Δy remains unchanged since slit distance is constant',
      'The interference pattern completely disappears'
    ],
    optionsAr: [
      'تزداد المسافة Δy وتتباعد الهدب',
      'تقل المسافة Δy وتتقارب الهدب',
      'تظل المسافة Δy ثابتة لأن المسافة بين الشقين لم تتغير',
      'يختفي نمط التداخل تماماً'
    ],
    correctOptionIndex: 1,
    scientificExplanationEn: 'According to Young\'s fringe spacing law: Δy = (λ • D) / d. Fringe spacing is directly proportional to the wavelength (λ). Since violet light has a shorter wavelength than red light (400 nm < 650 nm), Δy must decrease, making the fringes narrower and packed more closely together.',
    scientificExplanationAr: 'طبقاً لقانون ينج للمسافة بين هدبتين متتاليتين من نفس النوع: Δy = (λ • D) / d. المسافة بين الهدب تتناسب طردياً مع الطول الموجي (λ). وبما أن الطول الموجي للضوء البنفسجي أقل من الأحمر (400 < 650 نانومتر)، فإن Δy تقل وتتقارب الهدب.'
  };

  // Canvas Drawing Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Dark optical bench background
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, w, h);

    if (mode === 'refraction') {
      // Draw Snell's Law & Total Internal Reflection
      const cy = h / 2;
      const cx = w / 2;

      // Medium 1 (Top)
      ctx.fillStyle = '#091326';
      ctx.fillRect(0, 0, w, cy);

      // Medium 2 (Bottom - Glass/Water)
      ctx.fillStyle = '#0e2444';
      ctx.fillRect(0, cy, w, h - cy);

      // Boundary line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();

      // Normal line (dashed)
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(cx, 20);
      ctx.lineTo(cx, h - 20);
      ctx.stroke();
      ctx.setLineDash([]);

      // Calculate refraction with Cauchy dispersion on n2
      const effectiveN2 = getCauchyRefractiveIndex(refractionWavelengthNm, n2);
      const incRad = (incidentAngleDeg * Math.PI) / 180;
      const snell = calculateSnellsLaw(incRad, n1, effectiveN2);
      const beamColor = wavelengthToRGB(refractionWavelengthNm);

      // Incident ray (coming from top-left towards center)
      const rayLen = Math.min(w, h) * 0.42;
      const incStartX = cx - rayLen * Math.sin(incRad);
      const incStartY = cy - rayLen * Math.cos(incRad);

      ctx.strokeStyle = beamColor;
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(incStartX, incStartY);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      // Reflected ray (law of reflection: angle = incidentAngle)
      const refEndX = cx + rayLen * Math.sin(incRad);
      const refEndY = cy - rayLen * Math.cos(incRad);
      ctx.strokeStyle = snell.isTIR ? beamColor : 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(refEndX, refEndY);
      ctx.stroke();

      // Refracted ray (if not TIR)
      if (!snell.isTIR) {
        const refrRad = snell.theta2Rad;
        const refrEndX = cx + rayLen * Math.sin(refrRad);
        const refrEndY = cy + rayLen * Math.cos(refrRad);

        ctx.strokeStyle = beamColor;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(refrEndX, refrEndY);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;

      // Medium labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(`Medium 1 (n₁ = ${n1})`, 20, 30);
      ctx.fillText(`Medium 2 (n₂ = ${effectiveN2.toFixed(3)})`, 20, cy + 30);

      if (snell.isTIR) {
        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.fillText('⚡ TOTAL INTERNAL REFLECTION (الانعكاس الكلي)', cx + 20, cy - 20);
      }
    } else if (mode === 'thin_lens') {
      // Draw Optical Bench & Thin Lens Ray Tracing
      const cy = h / 2;
      const cx = w / 2;

      // Principal axis
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(20, cy);
      ctx.lineTo(w - 20, cy);
      ctx.stroke();

      // Lens vertical center line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, 40);
      ctx.lineTo(cx, h - 40);
      ctx.stroke();

      // Convex lens arrowheads
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(cx, 30);
      ctx.lineTo(cx - 8, 45);
      ctx.lineTo(cx + 8, 45);
      ctx.closePath();
      ctx.fill();

      // Scale factor: pixels per cm
      const pxPerCm = 4;
      const fPx = focalLengthCm * pxPerCm;

      // Draw Focal Points F and 2F
      const drawFocalPoint = (x: number, label: string) => {
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(x, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, cy + 16);
      };

      drawFocalPoint(cx - fPx, 'F');
      drawFocalPoint(cx + fPx, "F'");
      drawFocalPoint(cx - 2 * fPx, '2F');
      drawFocalPoint(cx + 2 * fPx, "2F'");

      // Object (Upright Arrow)
      const objXPx = cx - objectDistanceCm * pxPerCm;
      const objHPx = objectHeightCm * pxPerCm;
      const objYPx = cy - objHPx;

      ctx.strokeStyle = '#22c55e'; // Green object
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(objXPx, cy);
      ctx.lineTo(objXPx, objYPx);
      ctx.stroke();

      // Arrowhead for object
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.moveTo(objXPx, objYPx - 5);
      ctx.lineTo(objXPx - 5, objYPx + 5);
      ctx.lineTo(objXPx + 5, objYPx + 5);
      ctx.closePath();
      ctx.fill();

      // Calculate image
      const lensRes = calculateThinLens(focalLengthCm, objectDistanceCm, objectHeightCm);

      if (isFinite(lensRes.imageDistance) && isFinite(lensRes.imageHeight)) {
        const imgXPx = cx + lensRes.imageDistance * pxPerCm;
        const imgHPx = lensRes.imageHeight * pxPerCm;
        const imgYPx = cy - imgHPx;

        // 1. Parallel Ray (parallel to axis, then through focal point F')
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(objXPx, objYPx);
        ctx.lineTo(cx, objYPx);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();

        // 2. Central Ray (straight through optical center (cx, cy))
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.8)';
        ctx.beginPath();
        ctx.moveTo(objXPx, objYPx);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();

        // Draw Image Arrow
        ctx.strokeStyle = lensRes.isReal ? '#ec4899' : '#a855f7';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(imgXPx, cy);
        ctx.lineTo(imgXPx, imgYPx);
        ctx.stroke();

        ctx.fillStyle = lensRes.isReal ? '#ec4899' : '#a855f7';
        ctx.beginPath();
        const arrowDir = imgHPx < 0 ? 1 : -1;
        ctx.moveTo(imgXPx, imgYPx - arrowDir * 5);
        ctx.lineTo(imgXPx - 5, imgYPx + arrowDir * 5);
        ctx.lineTo(imgXPx + 5, imgYPx + arrowDir * 5);
        ctx.closePath();
        ctx.fill();
      }
    } else if (mode === 'double_slit') {
      // Young's Double-Slit Experiment Simulation
      const screenX = w - 90;
      const slitX = 140;
      const cy = h / 2;

      const laserColor = wavelengthToRGB(wavelengthNm);

      // Slit plate
      ctx.fillStyle = '#334155';
      ctx.fillRect(slitX - 5, 20, 10, h - 40);

      // Two slits
      const dPixels = (slitSeparationUm / 500) * 40;
      const slit1Y = cy - dPixels / 2;
      const slit2Y = cy + dPixels / 2;

      ctx.clearRect(slitX - 6, slit1Y - 3, 12, 6);
      ctx.clearRect(slitX - 6, slit2Y - 3, 12, 6);

      // Incoming planar laser waves
      ctx.strokeStyle = laserColor;
      ctx.shadowColor = laserColor;
      ctx.shadowBlur = 8;
      ctx.lineWidth = 2;

      for (let x = 30; x < slitX; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, cy - 60);
        ctx.lineTo(x, cy + 60);
        ctx.stroke();
      }

      // Circular wave ripples from each slit
      ctx.lineWidth = 1;
      for (let r = 15; r < 200; r += 15) {
        ctx.beginPath();
        ctx.arc(slitX, slit1Y, r, -Math.PI / 3, Math.PI / 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(slitX, slit2Y, r, -Math.PI / 3, Math.PI / 3);
        ctx.stroke();
      }

      // Observation Screen
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(screenX, 20, 70, h - 40);
      ctx.strokeStyle = '#64748b';
      ctx.strokeRect(screenX, 20, 70, h - 40);

      // Draw interference intensity bands on screen
      const pxPerMm = 45; // Scale for viewing fringes

      for (let py = 20; py < h - 20; py++) {
        const yDistMm = (py - cy) / pxPerMm;
        // Intensity I = I0 * cos^2(pi * y * d / (lambda * D))
        const phase = (Math.PI * yDistMm * 1e-3 * (slitSeparationUm * 1e-6)) / (wavelengthNm * 1e-9 * screenDistanceM);
        const intensity = Math.pow(Math.cos(phase), 2);

        ctx.fillStyle = laserColor;
        ctx.globalAlpha = intensity;
        ctx.fillRect(screenX + 2, py, 66, 1);
      }
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Screen readout
      ctx.fillStyle = '#f8fafc';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(`Screen D = ${screenDistanceM} m`, screenX - 10, 16);
    }
  }, [mode, n1, n2, incidentAngleDeg, refractionWavelengthNm, objectDistanceCm, focalLengthCm, objectHeightCm, wavelengthNm, slitSeparationUm, screenDistanceM]);

  // Young's live Δy value
  const deltaY_mm = parseFloat(((wavelengthNm * 1e-9 * screenDistanceM) / (slitSeparationUm * 1e-6) * 1000).toFixed(3));

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top Banner & Mode Selector */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-2xl border border-cyan-500/30">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                {isAr ? 'معمل البصريات الفيزيائية وشعاع الليزر' : 'Precision Optical Ray-Tracing Bench'}
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  PhET / Labster Tier
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {isAr ? 'محاكاة قانون سنل والانعكاس الكلي، تتبع أشعة العدسات، وتجربة ينج للتداخل' : 'Snell\'s law refraction, thin lens ray tracer, and Young\'s double-slit interference'}
              </p>
            </div>
          </div>

          {/* Mode Tabs */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setMode('double_slit')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mode === 'double_slit' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAr ? 'تجربة ينج (التداخل)' : 'Young\'s Double Slit'}
            </button>
            <button
              onClick={() => setMode('refraction')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mode === 'refraction' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAr ? 'الانكسار وقانون سنل' : 'Snell\'s Law & TIR'}
            </button>
            <button
              onClick={() => setMode('thin_lens')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mode === 'thin_lens' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAr ? 'العدسات الرقيقة' : 'Thin Lens Bench'}
            </button>
          </div>
        </div>

        {/* Canvas Display Viewport */}
        <div className="w-full h-80 sm:h-96 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner my-4 relative">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Dynamic Controls depending on mode */}
        {mode === 'double_slit' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'الطول الموجي لليزر (λ):' : 'Laser Wavelength (λ):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{wavelengthNm} nm</span>
              </div>
              <input
                type="range"
                min="380"
                max="750"
                value={wavelengthNm}
                onChange={e => setWavelengthNm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex items-center gap-2 mt-1.5">
                <span className="w-3.5 h-3.5 rounded-full border border-slate-700 shadow-sm" style={{ backgroundColor: wavelengthToRGB(wavelengthNm) }} />
                <span className="text-[10px] text-slate-400">{wavelengthNm >= 620 ? (isAr ? 'أحمر' : 'Red') : wavelengthNm >= 520 ? (isAr ? 'أخضر' : 'Green') : (isAr ? 'أزرق/بنفسجي' : 'Blue/Violet')}</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'المسافة بين الشقين (d):' : 'Slit Separation (d):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{slitSeparationUm} µm</span>
              </div>
              <input
                type="range"
                min="100"
                max="600"
                step="10"
                value={slitSeparationUm}
                onChange={e => setSlitSeparationUm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'بعد الحائل (D):' : 'Screen Distance (D):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{screenDistanceM} m</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={screenDistanceM}
                onChange={e => setScreenDistanceM(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>
          </div>
        )}

        {mode === 'refraction' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'معامل انكسار الوسط الأول (n₁):' : 'Medium 1 Refractive Index (n₁):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{n1}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.0"
                step="0.05"
                value={n1}
                onChange={e => setN1(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'معامل انكسار الوسط الثاني (n₂):' : 'Medium 2 Refractive Index (n₂):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{n2}</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="2.4"
                step="0.05"
                value={n2}
                onChange={e => setN2(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'زاوية السقوط (θ₁):' : 'Incident Angle (θ₁):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{incidentAngleDeg}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="85"
                value={incidentAngleDeg}
                onChange={e => setIncidentAngleDeg(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'طول موجة الشعاع (تشتت كوشي):' : 'Wavelength (Cauchy Dispersion):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{refractionWavelengthNm} nm</span>
              </div>
              <input
                type="range"
                min="380"
                max="750"
                value={refractionWavelengthNm}
                onChange={e => setRefractionWavelengthNm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>
          </div>
        )}

        {mode === 'thin_lens' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'بعد الجسم عن العدسة (dₒ):' : 'Object Distance (dₒ):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{objectDistanceCm} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={objectDistanceCm}
                onChange={e => setObjectDistanceCm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'البعد البؤري للعدسة (f):' : 'Focal Length (f):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{focalLengthCm} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                value={focalLengthCm}
                onChange={e => setFocalLengthCm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>{isAr ? 'طول الجسم (hₒ):' : 'Object Height (hₒ):'}</span>
                <span className="font-mono text-cyan-300 font-bold">{objectHeightCm} cm</span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                value={objectHeightCm}
                onChange={e => setObjectHeightCm(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* POE Pedagogical Protocol Integration */}
      <POEController
        prompt={doubleSlitPOE}
        lang={lang}
        isUnlocked={labUnlocked}
        onUnlockLab={() => setLabUnlocked(true)}
      />

      {/* Digital Lab Notebook Integration */}
      <LabNotebook
        lang={lang}
        xLabel={isAr ? 'الطول الموجي λ' : 'Wavelength λ'}
        xUnit="nm"
        yLabel={isAr ? 'المسافة بين الهدب Δy' : 'Fringe Spacing Δy'}
        yUnit="mm"
        currentXValue={wavelengthNm}
        currentYValue={deltaY_mm}
      />
    </div>
  );
};
