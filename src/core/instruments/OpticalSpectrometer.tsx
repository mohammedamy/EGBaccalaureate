import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Eye,
  X,
  Target,
  Compass,
} from 'lucide-react';

export type LightSourceType = 'hydrogen' | 'sodium' | 'mercury' | 'neon' | 'solar_fraunhofer';

interface SpectralLine {
  wavelengthNm: number; // in nanometers
  relativeIntensity: number; // 0 to 1
  label: string;
  colorRgb: string;
}

interface OpticalSpectrometerProps {
  lang?: 'en' | 'ar';
  onClose?: () => void;
  initialSource?: LightSourceType;
  gratingLinesPerMm?: number;
}

export const OpticalSpectrometer: React.FC<OpticalSpectrometerProps> = ({
  lang = 'en',
  onClose,
  initialSource = 'hydrogen',
  gratingLinesPerMm = 600, // 600 lines/mm -> d = 1666.67 nm
}) => {
  const isAr = lang === 'ar';
  const eyepieceCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const spectrumBarCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Spectrometer state
  const [source, setSource] = useState<LightSourceType>(initialSource);
  const [telescopeAngleDeg, setTelescopeAngleDeg] = useState<number>(23.2); // Current angle theta
  const [diffractionOrder, setDiffractionOrder] = useState<number>(1); // m = 1
  const [slitWidthUm, setSlitWidthUm] = useState<number>(25); // Slit width in micrometers
  const [isCrosshairActive, setIsCrosshairActive] = useState<boolean>(true);

  // Grating constant d in nanometers
  const gratingDnm = useMemo(() => 1000000 / gratingLinesPerMm, [gratingLinesPerMm]); // ~1666.67 nm

  // Known spectral line definitions for physics & chemistry curriculum
  const sourceSpectralData: Record<LightSourceType, { nameEn: string; nameAr: string; lines: SpectralLine[]; isAbsorption?: boolean }> = {
    hydrogen: {
      nameEn: 'Hydrogen Gas Discharge (Balmer Series)',
      nameAr: 'تفريغ غاز الهيدروجين (متسلسلة بالمر)',
      lines: [
        { wavelengthNm: 656.3, relativeIntensity: 1.0, label: 'H-alpha (n=3->2)', colorRgb: 'rgb(255, 30, 30)' },
        { wavelengthNm: 486.1, relativeIntensity: 0.75, label: 'H-beta (n=4->2)', colorRgb: 'rgb(0, 220, 255)' },
        { wavelengthNm: 434.0, relativeIntensity: 0.5, label: 'H-gamma (n=5->2)', colorRgb: 'rgb(80, 80, 255)' },
        { wavelengthNm: 410.2, relativeIntensity: 0.35, label: 'H-delta (n=6->2)', colorRgb: 'rgb(140, 20, 255)' },
      ],
    },
    sodium: {
      nameEn: 'Sodium Vapor Lamp (Na D-Doublet)',
      nameAr: 'مصباح بخار الصوديوم (خطي D المزدوجين)',
      lines: [
        { wavelengthNm: 589.0, relativeIntensity: 1.0, label: 'D2 line (3p3/2->3s)', colorRgb: 'rgb(255, 200, 0)' },
        { wavelengthNm: 589.6, relativeIntensity: 0.8, label: 'D1 line (3p1/2->3s)', colorRgb: 'rgb(255, 185, 0)' },
      ],
    },
    mercury: {
      nameEn: 'Mercury Vapor Arc (Hg Atomic Lines)',
      nameAr: 'قوس بخار الزئبق (خطوط الزئبق الذرية)',
      lines: [
        { wavelengthNm: 404.7, relativeIntensity: 0.45, label: 'Violet Hg line', colorRgb: 'rgb(120, 0, 255)' },
        { wavelengthNm: 435.8, relativeIntensity: 0.85, label: 'Deep Blue Hg line', colorRgb: 'rgb(40, 60, 255)' },
        { wavelengthNm: 546.1, relativeIntensity: 1.0, label: 'Green Hg line', colorRgb: 'rgb(40, 255, 60)' },
        { wavelengthNm: 577.0, relativeIntensity: 0.7, label: 'Yellow-1 Hg line', colorRgb: 'rgb(255, 230, 0)' },
        { wavelengthNm: 579.1, relativeIntensity: 0.7, label: 'Yellow-2 Hg line', colorRgb: 'rgb(255, 220, 0)' },
      ],
    },
    neon: {
      nameEn: 'Neon Glow Tube (Noble Gas Laser Medium)',
      nameAr: 'أنبوب توهج النيون (وسط الليزر الغازي)',
      lines: [
        { wavelengthNm: 585.2, relativeIntensity: 0.6, label: 'Yellow Ne', colorRgb: 'rgb(255, 210, 0)' },
        { wavelengthNm: 614.3, relativeIntensity: 0.85, label: 'Orange Ne', colorRgb: 'rgb(255, 120, 0)' },
        { wavelengthNm: 632.8, relativeIntensity: 1.0, label: 'He-Ne Laser line', colorRgb: 'rgb(255, 40, 20)' },
        { wavelengthNm: 640.2, relativeIntensity: 0.9, label: 'Deep Red Ne', colorRgb: 'rgb(230, 10, 10)' },
        { wavelengthNm: 650.6, relativeIntensity: 0.75, label: 'Crimson Ne', colorRgb: 'rgb(200, 0, 0)' },
      ],
    },
    solar_fraunhofer: {
      nameEn: 'Solar Spectrum & Fraunhofer Absorption Lines',
      nameAr: 'طيف الشمس وخطوط فرانهوفر للامتصاص',
      isAbsorption: true,
      lines: [
        { wavelengthNm: 656.3, relativeIntensity: 0.15, label: 'C-line (H-alpha absorption)', colorRgb: 'rgb(20, 0, 0)' },
        { wavelengthNm: 589.3, relativeIntensity: 0.1, label: 'D-line (Na absorption in solar atmosphere)', colorRgb: 'rgb(25, 20, 0)' },
        { wavelengthNm: 527.0, relativeIntensity: 0.2, label: 'E-line (Iron Fe absorption)', colorRgb: 'rgb(0, 25, 5)' },
        { wavelengthNm: 486.1, relativeIntensity: 0.15, label: 'F-line (H-beta absorption)', colorRgb: 'rgb(0, 20, 25)' },
        { wavelengthNm: 430.8, relativeIntensity: 0.2, label: 'G-line (Calcium & Iron)', colorRgb: 'rgb(5, 5, 25)' },
        { wavelengthNm: 396.8, relativeIntensity: 0.1, label: 'H-line (Ionized Calcium Ca+)', colorRgb: 'rgb(15, 0, 25)' },
      ],
    },
  };

  // Convert wavelength & order to expected theoretical angle (Bragg formula: m*lambda = d*sin(theta))
  const getTheoreticalAngleDeg = (wavelengthNm: number, order: number): number | null => {
    const sinTheta = (order * wavelengthNm) / gratingDnm;
    if (Math.abs(sinTheta) > 1) return null; // Outside total diffraction limit
    return (Math.asin(sinTheta) * 180) / Math.PI;
  };

  // Compute detected wavelength from current telescope angle theta
  const currentDetectedWavelengthNm = useMemo(() => {
    if (diffractionOrder === 0) return 0;
    const sinTheta = Math.sin((telescopeAngleDeg * Math.PI) / 180);
    return (gratingDnm * sinTheta) / diffractionOrder;
  }, [telescopeAngleDeg, diffractionOrder, gratingDnm]);

  // Find if crosshair aligns with any spectral line (within ±0.35 degrees tolerance)
  const activeAlignedLine = useMemo(() => {
    const data = sourceSpectralData[source];
    for (const line of data.lines) {
      const angle = getTheoreticalAngleDeg(line.wavelengthNm, diffractionOrder);
      if (angle !== null && Math.abs(angle - telescopeAngleDeg) < 0.45) {
        return { line, deltaDeg: telescopeAngleDeg - angle };
      }
    }
    return null;
  }, [source, telescopeAngleDeg, diffractionOrder]);

  // Render Eyepiece Viewport Canvas
  useEffect(() => {
    const canvas = eyepieceCanvasRef.current;
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
    const centerX = w / 2;
    const centerY = h / 2;

    // Draw circular dark telescope aperture
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, w, h);

    const apertureRadius = Math.min(w, h) * 0.46;
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, apertureRadius, 0, Math.PI * 2);
    ctx.clip();

    // Eyepiece background
    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, w, h);

    const data = sourceSpectralData[source];

    // If Solar Fraunhofer mode: render full rainbow dispersion gradient with absorption dips
    if (data.isAbsorption) {
      const rainbowGrad = ctx.createLinearGradient(centerX - apertureRadius, centerY, centerX + apertureRadius, centerY);
      rainbowGrad.addColorStop(0.0, 'rgba(140, 20, 255, 0.4)');
      rainbowGrad.addColorStop(0.2, 'rgba(0, 100, 255, 0.4)');
      rainbowGrad.addColorStop(0.4, 'rgba(0, 255, 100, 0.4)');
      rainbowGrad.addColorStop(0.6, 'rgba(255, 255, 0, 0.4)');
      rainbowGrad.addColorStop(0.8, 'rgba(255, 120, 0, 0.4)');
      rainbowGrad.addColorStop(1.0, 'rgba(255, 20, 0, 0.4)');
      ctx.fillStyle = rainbowGrad;
      ctx.fillRect(centerX - apertureRadius, centerY - apertureRadius, apertureRadius * 2, apertureRadius * 2);
    }

    // Render spectral lines displaced relative to the telescope angle
    const degToPixel = w / 3.0; // 3.0 degrees visible field of view in eyepiece

    data.lines.forEach((line) => {
      const lineAngle = getTheoreticalAngleDeg(line.wavelengthNm, diffractionOrder);
      if (lineAngle === null) return;

      const deltaAngle = lineAngle - telescopeAngleDeg;
      const lineX = centerX + deltaAngle * degToPixel;

      // Draw spectral slit line
      if (lineX >= centerX - apertureRadius && lineX <= centerX + apertureRadius) {
        ctx.save();
        const slitPx = Math.max(2, (slitWidthUm / 25) * 3);

        if (data.isAbsorption) {
          // Dark Fraunhofer absorption line
          ctx.strokeStyle = '#020617';
          ctx.lineWidth = slitPx + 1;
          ctx.beginPath();
          ctx.moveTo(lineX, centerY - apertureRadius);
          ctx.lineTo(lineX, centerY + apertureRadius);
          ctx.stroke();
        } else {
          // Bright emission slit line with phosphor bloom
          ctx.strokeStyle = line.colorRgb;
          ctx.lineWidth = slitPx;
          ctx.shadowColor = line.colorRgb;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(lineX, centerY - apertureRadius);
          ctx.lineTo(lineX, centerY + apertureRadius);
          ctx.stroke();
        }
        ctx.restore();
      }
    });

    // Optical Reticle / Crosshairs
    if (isCrosshairActive) {
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.75)'; // Crimson crosshair
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 3]);

      // Vertical hair
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - apertureRadius);
      ctx.lineTo(centerX, centerY + apertureRadius);
      ctx.stroke();

      // Horizontal hair
      ctx.beginPath();
      ctx.moveTo(centerX - apertureRadius, centerY);
      ctx.lineTo(centerX + apertureRadius, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Center crosshair ring
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.9)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Aperture brass bezel ring
    ctx.restore();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, apertureRadius, 0, Math.PI * 2);
    ctx.stroke();
  }, [source, telescopeAngleDeg, diffractionOrder, slitWidthUm, isCrosshairActive, gratingDnm]);

  // Render Continuous Spectral Scan Bar Canvas
  useEffect(() => {
    const canvas = spectrumBarCanvasRef.current;
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

    // Spectrum background
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, w, h);

    const minWavelength = 380;
    const maxWavelength = 720;
    const data = sourceSpectralData[source];

    if (data.isAbsorption) {
      // Draw background rainbow
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0.0, 'rgb(140, 20, 255)');
      grad.addColorStop(0.2, 'rgb(0, 100, 255)');
      grad.addColorStop(0.4, 'rgb(0, 255, 100)');
      grad.addColorStop(0.6, 'rgb(255, 255, 0)');
      grad.addColorStop(0.8, 'rgb(255, 120, 0)');
      grad.addColorStop(1.0, 'rgb(255, 20, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw dark absorption lines
      data.lines.forEach((line) => {
        const x = ((line.wavelengthNm - minWavelength) / (maxWavelength - minWavelength)) * w;
        ctx.fillStyle = '#030712';
        ctx.fillRect(x - 1.5, 0, 3, h);
      });
    } else {
      // Draw bright emission lines on black background
      data.lines.forEach((line) => {
        const x = ((line.wavelengthNm - minWavelength) / (maxWavelength - minWavelength)) * w;
        ctx.fillStyle = line.colorRgb;
        ctx.shadowColor = line.colorRgb;
        ctx.shadowBlur = 8;
        ctx.fillRect(x - 1.5, 0, 3, h);
        ctx.shadowBlur = 0;
      });
    }

    // Draw current telescope cursor on spectrum bar
    if (currentDetectedWavelengthNm >= minWavelength && currentDetectedWavelengthNm <= maxWavelength) {
      const cursorX = ((currentDetectedWavelengthNm - minWavelength) / (maxWavelength - minWavelength)) * w;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cursorX, 0);
      ctx.lineTo(cursorX, h);
      ctx.stroke();

      // Little marker triangle at top
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(cursorX - 4, 0);
      ctx.lineTo(cursorX + 4, 0);
      ctx.lineTo(cursorX, 6);
      ctx.fill();
    }
  }, [source, currentDetectedWavelengthNm]);

  return (
    <div
      className="w-full bg-slate-900/98 border-2 border-emerald-500/40 rounded-3xl p-4 sm:p-5 shadow-2xl text-slate-100 overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-100 flex items-center gap-2 truncate">
              <span>EG-SPEC 5000 • {isAr ? 'مطياف الحيود والتحليل الطيفي الدقيق' : 'High-Resolution Optical Grating Spectrometer'}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold shrink-0">
                N = {gratingLinesPerMm} lines/mm
              </span>
            </h4>
            <p className="text-xs text-slate-400 truncate">
              {isAr ? 'قياس أطوال موجات بالمر وفرانهوفر بدقة الورنية وحيود براج (d sin θ = m λ)' : 'Bragg grating diffraction, Balmer emission, Vernier angle reading & Fraunhofer solar analysis'}
            </p>
          </div>
        </div>

        {/* Source Switcher Quick Dropdown & Close */}
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            {(['hydrogen', 'sodium', 'mercury', 'neon', 'solar_fraunhofer'] as const).map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setSource(src)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                  source === src
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {src === 'hydrogen' ? 'H (Balmer)' : src === 'sodium' ? 'Na' : src === 'mercury' ? 'Hg' : src === 'neon' ? 'Ne' : 'Solar (Sun)'}
              </button>
            ))}
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all cursor-pointer"
              title={isAr ? 'إغلاق المطياف' : 'Close Spectrometer'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Workstation Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-stretch min-w-0">
        {/* Left Stage: Telescope Eyepiece & Crosshair Sensor */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-xs">
            <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>TELESCOPE EYEPIECE FIELD OF VIEW</span>
            </span>
            <button
              type="button"
              onClick={() => setIsCrosshairActive(!isCrosshairActive)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                isCrosshairActive
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              {isCrosshairActive ? 'RETICLE ON' : 'RETICLE OFF'}
            </button>
          </div>

          {/* Circular Eyepiece Canvas */}
          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-4 border-slate-950 relative bg-[#030712] shadow-2xl flex items-center justify-center">
            <canvas ref={eyepieceCanvasRef} className="w-full h-full block" />

            {/* Target Lock Banner when Aligned with a Spectral Line */}
            {activeAlignedLine && (
              <div className="absolute top-3 px-3 py-1 bg-emerald-950/90 border border-emerald-400 text-emerald-300 rounded-full font-mono text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>LOCKED: {activeAlignedLine.line.label} (λ = {activeAlignedLine.line.wavelengthNm} nm)</span>
              </div>
            )}
          </div>

          {/* Full Linear Wavelength Spectrum Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>380 nm (UV/Violet)</span>
              <span className="text-emerald-400 font-bold">λ = {currentDetectedWavelengthNm > 0 ? currentDetectedWavelengthNm.toFixed(1) : '--'} nm</span>
              <span>720 nm (Deep Red)</span>
            </div>
            <div className="w-full h-5 rounded-lg overflow-hidden border border-slate-700 relative shadow-inner">
              <canvas ref={spectrumBarCanvasRef} className="w-full h-full block" />
            </div>
          </div>
        </div>

        {/* Right Stage: Angle Girdle, Vernier Scale & Diffraction Law Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
          {/* Vernier Angle Dial & Theta Stepper */}
          <div className="space-y-2 pb-3 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? 'زاوية انحراف المنظار (Telescope Angle θ):' : 'Telescope Angular Deflection (θ):'}</span>
              </span>
              <div className="flex items-center gap-1.5 font-mono text-sm font-black text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-lg border border-emerald-800">
                <span>{telescopeAngleDeg.toFixed(2)}°</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  ({Math.floor(telescopeAngleDeg)}° {Math.round((telescopeAngleDeg % 1) * 60)}')
                </span>
              </div>
            </div>

            {/* Slider with Fine Stepping */}
            <input
              type="range"
              min="0"
              max="60"
              step="0.05"
              value={telescopeAngleDeg}
              onChange={(e) => setTelescopeAngleDeg(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg accent-emerald-400 cursor-pointer"
            />

            {/* Quick Auto-Align Buttons for Known Lines */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] text-slate-500 font-bold self-center">
                {isAr ? 'محاذاة سريعة:' : 'Snap Line:'}
              </span>
              {sourceSpectralData[source].lines.map((line) => {
                const targetAngle = getTheoreticalAngleDeg(line.wavelengthNm, diffractionOrder);
                if (targetAngle === null) return null;
                const isCurrent = Math.abs(telescopeAngleDeg - targetAngle) < 0.1;

                return (
                  <button
                    key={line.label}
                    type="button"
                    onClick={() => setTelescopeAngleDeg(parseFloat(targetAngle.toFixed(2)))}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold border transition-all cursor-pointer flex items-center gap-1 ${
                      isCurrent
                        ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-xs'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-emerald-500/40'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: line.colorRgb }} />
                    <span>{line.wavelengthNm} nm</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grating & Diffraction Order Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800 text-xs">
            {/* Diffraction Order m */}
            <div className="space-y-1.5">
              <span className="text-slate-300 font-semibold">{isAr ? 'رتبة الحيود (Order m):' : 'Diffraction Order (m):'}</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDiffractionOrder(m)}
                    className={`flex-1 py-1 rounded-lg font-mono font-bold text-xs border transition-all cursor-pointer ${
                      diffractionOrder === m
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-xs'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    m = {m} {m === 0 ? '(Central)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Slit Width */}
            <div className="space-y-1.5" dir="ltr">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold">{isAr ? 'عرض الشق:' : 'Collimator Slit:'}</span>
                <span className="font-mono text-xs text-emerald-400">{slitWidthUm} µm</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={slitWidthUm}
                onChange={(e) => setSlitWidthUm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg accent-emerald-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Theoretical Physics Equations & Live Reading Card */}
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
              <span>BRAGG DIFFRACTION LAW</span>
              <span className="text-emerald-400 font-bold">d · sin(θ) = m · λ</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-500 block">Grating Space (d):</span>
                <span className="text-slate-200 font-bold">{gratingDnm.toFixed(2)} nm ({gratingLinesPerMm} l/mm)</span>
              </div>
              <div>
                <span className="text-slate-500 block">sin(θ):</span>
                <span className="text-slate-200 font-bold">{Math.sin((telescopeAngleDeg * Math.PI) / 180).toFixed(4)}</span>
              </div>
            </div>
            <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-sans font-bold">{isAr ? 'الطول الموجي المحسوب:' : 'Calculated Wavelength:'}</span>
              <span className="text-emerald-300 font-black text-sm">
                {currentDetectedWavelengthNm > 0 ? `${currentDetectedWavelengthNm.toFixed(2)} nm` : '0 nm (Zero Order)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
