import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  playPhotoelectricChirp,
  playSuccessFanfare,
  playTactileClick,
  isAudioMuted,
  toggleAudioMuted,
} from '../utils/scienceAudio';
import {
  Zap,
  Sun,
  Activity,
  RotateCcw,
  Info,
  CheckCircle2,
  AlertTriangle,
  Volume2,
  VolumeX,
  FileText,
  Award,
  Check,
  Download,
  BookOpen,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

interface MetalConfig {
  id: string;
  nameEn: string;
  nameAr: string;
  symbol: string;
  workFunctionEv: number; // Phi in eV
  color: string;
}

const METALS: MetalConfig[] = [
  { id: 'cs', nameEn: 'Cesium (Cs)', nameAr: 'السيزيوم (Cs)', symbol: 'Cs', workFunctionEv: 2.14, color: '#f59e0b' },
  { id: 'k', nameEn: 'Potassium (K)', nameAr: 'البوتاسيوم (K)', symbol: 'K', workFunctionEv: 2.30, color: '#a855f7' },
  { id: 'na', nameEn: 'Sodium (Na)', nameAr: 'الصوديوم (Na)', symbol: 'Na', workFunctionEv: 2.36, color: '#3b82f6' },
  { id: 'zn', nameEn: 'Zinc (Zn)', nameAr: 'الخارصين (Zn)', symbol: 'Zn', workFunctionEv: 4.30, color: '#64748b' },
  { id: 'cu', nameEn: 'Copper (Cu)', nameAr: 'النحاس (Cu)', symbol: 'Cu', workFunctionEv: 4.70, color: '#f97316' },
  { id: 'pt', nameEn: 'Platinum (Pt)', nameAr: 'البلاتين (Pt)', symbol: 'Pt', workFunctionEv: 6.35, color: '#94a3b8' },
];

// MoE Guided Planck Experiment 4 Spectral Lines
interface PlanckTrial {
  id: number;
  nameEn: string;
  nameAr: string;
  wavelengthNm: number;
  frequency1014Hz: number;
  loggedV0: number | null;
}

const DEFAULT_PLANCK_TRIALS: PlanckTrial[] = [
  { id: 1, nameEn: 'Mercury Line 1 (UV/Violet)', nameAr: 'خط الزئبق ١ (فوق بنفسجي)', wavelengthNm: 365, frequency1014Hz: 8.22, loggedV0: null },
  { id: 2, nameEn: 'Mercury Line 2 (Violet)', nameAr: 'خط الزئبق ٢ (بنفسجي)', wavelengthNm: 405, frequency1014Hz: 7.41, loggedV0: null },
  { id: 3, nameEn: 'Mercury Line 3 (Blue)', nameAr: 'خط الزئبق ٣ (أزرق)', wavelengthNm: 436, frequency1014Hz: 6.88, loggedV0: null },
  { id: 4, nameEn: 'Mercury Line 4 (Green)', nameAr: 'خط الزئبق ٤ (أخضر)', wavelengthNm: 546, frequency1014Hz: 5.49, loggedV0: null },
];

/**
 * Convert wavelength (nm) to RGB color representation
 */
function wavelengthToColor(nm: number): { hex: string; nameEn: string; nameAr: string } {
  if (nm < 380) return { hex: '#a855f7', nameEn: 'Ultraviolet (UV)', nameAr: 'فوق بنفسجي (غير مرئي)' };
  if (nm < 440) return { hex: '#6366f1', nameEn: 'Violet', nameAr: 'بنفسجي' };
  if (nm < 490) return { hex: '#0ea5e9', nameEn: 'Blue', nameAr: 'أزرق' };
  if (nm < 560) return { hex: '#10b981', nameEn: 'Green', nameAr: 'أخضر' };
  if (nm < 590) return { hex: '#eab308', nameEn: 'Yellow', nameAr: 'أصفر' };
  if (nm < 640) return { hex: '#f97316', nameEn: 'Orange', nameAr: 'برتقالي' };
  return { hex: '#ef4444', nameEn: 'Red', nameAr: 'أحمر' };
}

export const InteractivePhotoelectricStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  // Mode: Explore vs MoE Guided Planck Experiment
  const [studioMode, setStudioMode] = useState<'explore' | 'guided_planck'>('explore');

  // Audio state
  const [audioMuted, setAudioMuted] = useState<boolean>(isAudioMuted());

  const handleToggleMute = () => {
    const next = toggleAudioMuted();
    setAudioMuted(next);
    if (!next) playTactileClick();
  };

  const [selectedMetalId, setSelectedMetalId] = useState<string>('cs');
  const [wavelengthNm, setWavelengthNm] = useState<number>(450); // nm (Blue light)
  const [lightIntensityPct, setLightIntensityPct] = useState<number>(60); // %
  const [retardingVoltageV, setRetardingVoltageV] = useState<number>(0.0); // V

  // Guided Mode state
  const [planckTrials, setPlanckTrials] = useState<PlanckTrial[]>(DEFAULT_PLANCK_TRIALS);
  const [reportExported, setReportExported] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentMetal = useMemo(() => {
    return METALS.find((m) => m.id === selectedMetalId) || METALS[0];
  }, [selectedMetalId]);

  // Physical Constants
  // hc = 1239.84 eV * nm
  const photonEnergyEv = useMemo(() => {
    return 1239.84 / wavelengthNm;
  }, [wavelengthNm]);

  const frequencyHz = useMemo(() => {
    return 3e17 / wavelengthNm; // in Hz
  }, [wavelengthNm]);

  const frequency1014Hz = frequencyHz / 1e14;

  const thresholdFrequency1014Hz = useMemo(() => {
    return currentMetal.workFunctionEv / 4.1357e-15 / 1e14;
  }, [currentMetal]);

  const thresholdWavelengthNm = useMemo(() => {
    return 1239.84 / currentMetal.workFunctionEv;
  }, [currentMetal]);

  const maxKineticEnergyEv = useMemo(() => {
    return Math.max(0, photonEnergyEv - currentMetal.workFunctionEv);
  }, [photonEnergyEv, currentMetal]);

  const stoppingPotentialV = useMemo(() => {
    return maxKineticEnergyEv;
  }, [maxKineticEnergyEv]);

  const isEmissionAllowed = photonEnergyEv >= currentMetal.workFunctionEv;

  // Live Photocurrent calculation
  const photocurrentMicroAmp = useMemo(() => {
    if (!isEmissionAllowed) return 0;
    if (retardingVoltageV >= stoppingPotentialV) return 0;

    const maxCurrent = (lightIntensityPct / 100) * 120;
    const factor = Math.max(0, (stoppingPotentialV - retardingVoltageV) / (stoppingPotentialV + 0.01));
    return Math.round(maxCurrent * Math.sqrt(factor));
  }, [isEmissionAllowed, retardingVoltageV, stoppingPotentialV, lightIntensityPct]);

  const lightColor = useMemo(() => wavelengthToColor(wavelengthNm), [wavelengthNm]);

  // Sound triggering on controls
  const handleWavelengthChange = (val: number) => {
    setWavelengthNm(val);
    if (1239.84 / val > currentMetal.workFunctionEv) {
      playPhotoelectricChirp(1239.84 / val - currentMetal.workFunctionEv);
    }
  };

  const handleVoltageChange = (val: number) => {
    setRetardingVoltageV(val);
    if (isEmissionAllowed && val < stoppingPotentialV) {
      playPhotoelectricChirp(maxKineticEnergyEv);
    }
  };

  // Guided Mode: Log stopping potential for trial
  const logStoppingPotentialForTrial = (trialId: number) => {
    playSuccessFanfare();
    setPlanckTrials((prev) =>
      prev.map((t) => (t.id === trialId ? { ...t, loggedV0: retardingVoltageV } : t))
    );
  };

  // Guided Mode: Linear Regression Slope & Planck's Constant Calculation
  const planckCalculations = useMemo(() => {
    const logged = planckTrials.filter((t) => t.loggedV0 !== null);
    if (logged.length < 2) {
      return {
        hasData: false,
        slope: 0,
        hExpJs: 0,
        percentError: 0,
        loggedCount: logged.length,
      };
    }

    // Linear regression on (nu, V0): V0 = (h/e) * nu - Phi/e
    // nu is in 10^14 Hz
    let sumNu = 0;
    let sumV0 = 0;
    let sumNuV0 = 0;
    let sumNu2 = 0;
    const n = logged.length;

    logged.forEach((t) => {
      const nu = t.frequency1014Hz;
      const v0 = t.loggedV0!;
      sumNu += nu;
      sumV0 += v0;
      sumNuV0 += nu * v0;
      sumNu2 += nu * nu;
    });

    const denom = n * sumNu2 - sumNu * sumNu;
    const slope = denom !== 0 ? (n * sumNuV0 - sumNu * sumV0) / denom : 0; // in V / (10^14 Hz) = 10^-14 V*s

    const hTrueJs = 6.626e-34;
    const hCalcFinal = slope > 0 ? slope * 1e-14 * 1.60218e-19 : 6.626e-34;
    const percentError = Math.min(100, Math.abs((hCalcFinal - hTrueJs) / hTrueJs) * 100);

    return {
      hasData: true,
      slope,
      hExpJs: hCalcFinal,
      percentError,
      loggedCount: logged.length,
    };
  }, [planckTrials]);

  // Guided Mode: 12-Mark MoE Rubric Scorecard
  const rubricScore = useMemo(() => {
    let apparatusMarks = 2; // Metal & phototube correctly polarized
    let precisionMarks = 0; // Zero photocurrent threshold
    let dataMarks = 0; // Wavelengths logged
    let calculationMarks = 0; // Slope & h calculation
    let errorMarks = 2; // Physical error precautions

    const loggedCount = planckTrials.filter((t) => t.loggedV0 !== null).length;
    if (loggedCount >= 4) dataMarks = 3;
    else if (loggedCount >= 2) dataMarks = 2;
    else if (loggedCount === 1) dataMarks = 1;

    // Precision check: compare logged V0 with theoretical stopping potentials
    const validDevs = planckTrials
      .filter((t) => t.loggedV0 !== null)
      .map((t) => {
        const thV0 = Math.max(0, 1239.84 / t.wavelengthNm - currentMetal.workFunctionEv);
        return Math.abs(t.loggedV0! - thV0);
      });

    if (validDevs.length > 0) {
      const avgDev = validDevs.reduce((a, b) => a + b, 0) / validDevs.length;
      if (avgDev <= 0.15) precisionMarks = 3;
      else if (avgDev <= 0.35) precisionMarks = 2;
      else precisionMarks = 1;
    }

    // Calculation marks
    if (planckCalculations.hasData) {
      if (planckCalculations.percentError <= 15) calculationMarks = 2;
      else calculationMarks = 1;
    }

    const total = apparatusMarks + precisionMarks + dataMarks + calculationMarks + errorMarks;
    return {
      apparatusMarks,
      precisionMarks,
      dataMarks,
      calculationMarks,
      errorMarks,
      total,
    };
  }, [planckTrials, planckCalculations, currentMetal]);

  // Export Practical Report
  const handleExportReport = () => {
    playSuccessFanfare();
    const reportText = `# Egyptian Ministry of Education (MoE) - Practical Physics Examination Worksheet
## Determination of Planck's Constant ($h$) via Stopping Potentials
**Date**: ${new Date().toLocaleDateString()}
**Curriculum**: Thanawya Amma (Modern Physics - Chapter 5: Dual Nature of Wave & Particle)

---
### 1. Apparatus & Experimental Setup
- **Phototube Cathode**: ${currentMetal.nameEn} (Work Function $\\Phi = ${currentMetal.workFunctionEv} \\text{ eV}$)
- **Threshold Frequency ($\\nu_0$)**: ${(thresholdFrequency1014Hz * 1e14).toExponential(3)} Hz
- **Circuit**: Reverse-biased DC source with potentiometer and high-sensitivity microammeter ($\\mu\\text{A}$).

---
### 2. Multi-Wavelength Empirical Stopping Potential Table
| Spectral Line | Wavelength ($\\lambda$, nm) | Frequency ($\\nu \\times 10^{14}$ Hz) | Stopping Potential ($V_0$, V) | Theoretical $V_0$ (V) |
|---|---|---|---|---|
${planckTrials
  .map((t) => {
    const thV0 = Math.max(0, 1239.84 / t.wavelengthNm - currentMetal.workFunctionEv);
    return `| ${t.nameEn} | ${t.wavelengthNm} | ${t.frequency1014Hz} | ${t.loggedV0 !== null ? t.loggedV0.toFixed(2) : 'Pending'} | ${thV0.toFixed(2)} |`;
  })
  .join('\n')}

---
### 3. Einstein Equation & Planck Constant Slope Analysis
$$e V_0 = h \\nu - \\Phi \\implies V_0 = \\left(\\frac{h}{e}\\right) \\nu - \\frac{\\Phi}{e}$$
$$\\text{Slope } m = \\frac{\\Delta V_0}{\\Delta \\nu} = ${planckCalculations.slope.toFixed(4)} \\times 10^{-14} \\text{ V}\\cdot\\text{s}$$
$$h_{\\text{exp}} = e \\cdot m = 1.602 \\times 10^{-19} \\times (${planckCalculations.slope.toFixed(4)} \\times 10^{-14}) = ${planckCalculations.hExpJs.toExponential(3)} \\text{ J}\\cdot\\text{s}$$

- **Standard Accepted Planck Constant**: $6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$
- **Experimental Percentage Error**: ${planckCalculations.percentError.toFixed(2)}%

---
### 4. MoE 12-Mark Practical Laboratory Rubric Evaluation
1. Phototube Setup & Polarity Calibration: **${rubricScore.apparatusMarks}/2**
2. Zero-Current Stopping Threshold Precision: **${rubricScore.precisionMarks}/3**
3. Multi-Wavelength Empirical Data Logging (4 Lines): **${rubricScore.dataMarks}/3**
4. Planck Constant Slope & Error Bounds: **${rubricScore.calculationMarks}/2**
5. Physical Error Analysis (Contact Potentials): **${rubricScore.errorMarks}/2**
- **TOTAL SCORE**: **${rubricScore.total}/12 Marks** (${rubricScore.total >= 11 ? 'Excellent / ممتاز' : rubricScore.total >= 9 ? 'Very Good / جيد جداً' : 'Good / جيد'})
`;

    const blob = new Blob([reportText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MoE_Planck_Constant_Report_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setReportExported(true);
    setTimeout(() => setReportExported(false), 3000);
  };

  // Animated Electron Particles simulation inside phototube canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
    }> = [];

    const cathodeX = 70;
    const anodeX = canvas.width - 70;
    const centerY = canvas.height / 2;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Vacuum Tube Glass Bulb
      ctx.save();
      ctx.strokeStyle = isLight ? '#cbd5e1' : '#334155';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(40, 20, canvas.width - 80, canvas.height - 40, 30);
      ctx.stroke();

      ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.4)' : 'rgba(15, 23, 42, 0.6)';
      ctx.fill();
      ctx.restore();

      // 2. Draw Cathode Plate (Left Metal Target)
      ctx.fillStyle = currentMetal.color;
      ctx.fillRect(cathodeX - 8, centerY - 60, 10, 120);
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(currentMetal.symbol, cathodeX - 25, centerY + 4);

      // 3. Draw Anode Collector Plate (Right)
      ctx.fillStyle = '#475569';
      ctx.fillRect(anodeX, centerY - 60, 8, 120);

      // 4. Draw Incident Light Beam
      const numRays = Math.round((lightIntensityPct / 100) * 8) + 2;
      ctx.save();
      ctx.strokeStyle = lightColor.hex;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.7;
      for (let i = 0; i < numRays; i++) {
        const rayY = centerY - 50 + (i * 100) / (numRays - 1);
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(10, rayY - 20);
        ctx.lineTo(cathodeX - 4, rayY);
        ctx.stroke();
      }
      ctx.restore();

      // 5. Spawn new electrons if emission is occurring
      if (isEmissionAllowed && Math.random() < (lightIntensityPct / 100) * 0.8) {
        const vInit = Math.min(6, Math.max(1.2, Math.sqrt(maxKineticEnergyEv) * 2.5));
        particles.push({
          x: cathodeX + 4,
          y: centerY - 45 + Math.random() * 90,
          vx: vInit,
          vy: (Math.random() - 0.5) * 1.2,
          alpha: 1.0,
          size: 3 + Math.random() * 1.5,
        });
      }

      // 6. Update and Draw Electrons
      const retardingAcc = retardingVoltageV * 0.6;

      particles.forEach((p) => {
        p.vx -= retardingAcc * 0.15;
        p.x += p.vx;
        p.y += p.vy;

        ctx.save();
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 6;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      particles = particles.filter((p) => {
        if (p.x < cathodeX - 2) return false;
        if (p.x >= anodeX) return false;
        if (p.y < 25 || p.y > canvas.height - 25) return false;
        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [
    currentMetal,
    isEmissionAllowed,
    maxKineticEnergyEv,
    lightIntensityPct,
    retardingVoltageV,
    lightColor,
    isLight,
  ]);

  return (
    <div
      className={`w-full flex flex-col font-sans select-none ${
        isFullscreen
          ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-950 text-slate-100'
          : 'space-y-4 text-slate-200'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & Metal Selector */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-lg shrink-0 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-100 flex items-center gap-2">
              <span>
                {isAr
                  ? 'مختبر التأثير الكهروضوئي وتعيين ثابت بلانك'
                  : 'Photoelectric Effect & Planck Constant Studio'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                {isAr ? 'الفيزياء الحديثة (فصل ٥)' : 'Modern Physics (Ch 5)'}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              {isAr
                ? 'معادلة آينشتاين: طاقة حركة الإلكترونات، جهد الإيقاف، وتعيين ثابت بلانك عملياً'
                : 'Einstein’s law: Stopping potentials, kinetic energy, and empirical Planck constant determination'}
            </p>
          </div>
        </div>

        {/* Mode & Tools Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('explore');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                studioMode === 'explore'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAr ? 'الاستكشاف الحر' : 'Explore Mode'}
            </button>
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('guided_planck');
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'guided_planck'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'تجربة تعيين ثابت بلانك (12 درجة)' : 'MoE Planck Exam (12 Marks)'}</span>
            </button>
          </div>

          {/* Cathode Metal Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 hidden sm:inline">
              {isAr ? 'المهبط:' : 'Metal:'}
            </span>
            <select
              value={selectedMetalId}
              onChange={(e) => {
                playTactileClick();
                setSelectedMetalId(e.target.value);
              }}
              className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
            >
              {METALS.map((m) => (
                <option key={m.id} value={m.id}>
                  {isAr ? m.nameAr : m.nameEn} (Φ = {m.workFunctionEv} eV)
                </option>
              ))}
            </select>
          </div>

          {/* Audio Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              audioMuted
                ? 'bg-slate-800 text-slate-400 border-slate-700'
                : 'bg-indigo-950/60 text-indigo-300 border-indigo-600/50 shadow-xs'
            }`}
            title={audioMuted ? (isAr ? 'تشغيل الصوت' : 'Unmute Audio') : (isAr ? 'كتم الصوت' : 'Mute Audio')}
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={() => {
              playTactileClick();
              setWavelengthNm(450);
              setLightIntensityPct(60);
              setRetardingVoltageV(0.0);
            }}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
            title={isAr ? 'إعادة التعيين' : 'Reset'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 ${
          isFullscreen ? 'flex-1 min-h-0' : ''
        }`}
      >
        {/* Left: Vacuum Phototube Chamber & Controls / Guided Table (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-xl flex flex-col justify-between overflow-y-auto min-h-0 space-y-3">
          {studioMode === 'explore' ? (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
                  <span className="text-xs font-bold text-slate-200">
                    {isAr
                      ? 'أنبوبة التفريغ الكهروضوئية والمهبط المعدني'
                      : 'Vacuum Phototube & Electron Cloud Chamber'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">{isAr ? 'التيار الكهروضوئي:' : 'Photocurrent:'}</span>
                  <span className="font-mono font-black text-emerald-400">
                    {isAr ? `${toHindiDigits(photocurrentMicroAmp)} ميكرو أمبير` : `${photocurrentMicroAmp} μA`}
                  </span>
                </div>
              </div>

              {/* Canvas Animation Chamber */}
              <div className="flex-1 min-h-[190px] max-h-[250px] w-full flex items-center justify-center p-1 relative">
                <canvas
                  ref={canvasRef}
                  width={460}
                  height={190}
                  className="w-full h-full object-contain rounded-2xl bg-slate-950 border border-slate-800/80"
                />
              </div>
            </>
          ) : (
            /* MoE Guided Planck Experiment Mode */
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">
                    {isAr
                      ? 'بروتوكول امتحان المعمل الوزاري: تعيين ثابت بلانك (h)'
                      : 'MoE Practical Protocol: Determination of Planck Constant (h)'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleExportReport}
                  className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {reportExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{reportExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير التقرير' : 'Export Report')}</span>
                </button>
              </div>

              {/* Protocol Steps Checklist */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <span className="text-amber-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'خطوات التجربة العملية في معمل الفيزياء:' : 'Laboratory Procedure:'}</span>
                </span>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px] leading-relaxed">
                  <li>{isAr ? 'سلط أحد خطوط طيف مصباح الزئبق الأربعة على مهبط الخلية الكهروضوئية.' : 'Direct each of the 4 spectral mercury lines onto the cathode.'}</li>
                  <li>{isAr ? 'قم بزيادة فرق الجهد العكسي تدريجياً حتى ينعدم التيار (Microammeter = 0 μA).' : 'Gradually increase reverse retarding voltage until photocurrent becomes 0 μA.'}</li>
                  <li>{isAr ? 'سجل قيمة جهد الإيقاف (V₀) المقابلة للتردد المحدد في الجدول.' : 'Log the stopping potential (V₀) corresponding to that frequency.'}</li>
                  <li>{isAr ? 'احسب ميل الخط المستقيم (m = ΔV₀ / Δν) واستنتج ثابت بلانك h = e · m.' : 'Calculate slope m = ΔV₀ / Δν and deduce Planck’s constant h = e · m.'}</li>
                </ol>
              </div>

              {/* Multi-Wavelength Empirical Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left rtl:text-right border-collapse bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                  <thead>
                    <tr className="bg-slate-800/80 text-slate-300 font-bold text-[11px]">
                      <th className="p-2">{isAr ? 'الخط الطيفي' : 'Line'}</th>
                      <th className="p-2">{isAr ? 'λ (نانومتر)' : 'λ (nm)'}</th>
                      <th className="p-2">{isAr ? 'ν (10¹⁴ Hz)' : 'ν (10¹⁴ Hz)'}</th>
                      <th className="p-2">{isAr ? 'جهد الإيقاف المسجل' : 'Logged V₀'}</th>
                      <th className="p-2 text-center">{isAr ? 'الضبط والتسجيل' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300 font-mono">
                    {planckTrials.map((trial) => {
                      const thV0 = Math.max(0, 1239.84 / trial.wavelengthNm - currentMetal.workFunctionEv);
                      const isCurrentActive = wavelengthNm === trial.wavelengthNm;
                      return (
                        <tr key={trial.id} className={isCurrentActive ? 'bg-indigo-950/40' : 'hover:bg-slate-900/60'}>
                          <td className="p-2 font-bold font-sans text-slate-200">
                            {isAr ? trial.nameAr : trial.nameEn}
                          </td>
                          <td className="p-2">{trial.wavelengthNm}</td>
                          <td className="p-2 font-bold text-cyan-300">
                            {trial.loggedV0 !== null ? (
                              <span>
                                {trial.loggedV0.toFixed(2)} V{' '}
                                <span className="text-[10px] text-slate-500 font-sans">
                                  ({isAr ? 'نظري' : 'theo'}: {thV0.toFixed(2)}V)
                                </span>
                              </span>
                            ) : (
                              <span className="text-slate-600">
                                --- <span className="text-[10px] text-slate-500 font-sans">({thV0.toFixed(2)}V)</span>
                              </span>
                            )}
                          </td>
                          <td className="p-2 text-center flex items-center justify-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                playTactileClick();
                                setWavelengthNm(trial.wavelengthNm);
                                setRetardingVoltageV(0.0);
                              }}
                              className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans text-[10px] font-bold cursor-pointer transition-all"
                            >
                              {isAr ? 'ضبط الطول' : 'Set λ'}
                            </button>
                            <button
                              type="button"
                              onClick={() => logStoppingPotentialForTrial(trial.id)}
                              className="px-2 py-0.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-[10px] font-bold cursor-pointer transition-all"
                            >
                              {isAr ? `تسجيل V₀ (${retardingVoltageV.toFixed(2)})` : `Log V₀ (${retardingVoltageV.toFixed(2)}V)`}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Calculated Planck Constant & Error Analysis Card */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-amber-300 block">
                  {isAr ? 'حسابات ميل الخط المستقيم وثابت بلانك التجريبي:' : 'Linear Regression & Experimental Planck Constant:'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-center font-mono">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">{isAr ? 'الميل (m = h/e):' : 'Slope (h/e):'}</span>
                    <span className="font-black text-indigo-300 text-sm">
                      {planckCalculations.hasData ? `${planckCalculations.slope.toFixed(4)} × 10⁻¹⁴` : '---'}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">{isAr ? 'ثابت بلانك التجريبي (h):' : 'Calculated h (J·s):'}</span>
                    <span className="font-black text-emerald-400 text-sm">
                      {planckCalculations.hasData ? planckCalculations.hExpJs.toExponential(3) : '---'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <span>{isAr ? 'القيمة الحقيقية لثابت بلانك: 6.626 × 10⁻³⁴ جول·ثانية' : 'True Planck Constant: 6.626 × 10⁻³⁴ J·s'}</span>
                  <span className="font-bold text-amber-400 font-mono">
                    {planckCalculations.hasData ? `${isAr ? 'نسبة الخطأ' : 'Error'}: ${planckCalculations.percentError.toFixed(1)}%` : ''}
                  </span>
                </div>
              </div>

              {/* 12-Mark Rubric Scorecard */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-black text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{isAr ? 'بطاقة تقييم المعمل الوزاري (١٢ درجة):' : 'MoE Practical Rubric (12 Marks):'}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-black border border-amber-500/30">
                    {rubricScore.total} / 12 {isAr ? 'درجة' : 'Marks'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px] text-center font-bold">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'توصيل الخلية' : 'Setup'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.apparatusMarks}/2</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'دقة جهد الإيقاف' : 'Zero Current'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.precisionMarks}/3</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'الخطوط الأربعة' : '4 Lines'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.dataMarks}/3</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'حساب ثابت بلانك' : 'Planck h'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.calculationMarks}/2</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">{isAr ? 'تحليل الأخطاء' : 'Error Precautions'}</span>
                    <span className="text-emerald-400 font-mono">{rubricScore.errorMarks}/2</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Controls: Wavelength & Retarding Potential Sliders (Active in both modes) */}
          <div className="space-y-3 pt-2 border-t border-slate-800 text-xs shrink-0">
            {/* Wavelength Slider */}
            <div>
              <div className="flex items-center justify-between font-bold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'الطول الموجي للضوء الساقط (λ):' : 'Incident Light Wavelength (λ):'}</span>
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <span
                    className="w-3 h-3 rounded-full border border-white/30 inline-block"
                    style={{ backgroundColor: lightColor.hex }}
                  />
                  <span className="font-black text-slate-100">
                    {isAr ? `${toHindiDigits(wavelengthNm)} نانومتر` : `${wavelengthNm} nm`}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    ({isAr ? lightColor.nameAr : lightColor.nameEn})
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="200"
                max="750"
                step="5"
                value={wavelengthNm}
                onChange={(e) => handleWavelengthChange(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                <span>200 nm (UV)</span>
                <span>400 nm (Violet)</span>
                <span>550 nm (Green)</span>
                <span>750 nm (Red)</span>
              </div>
            </div>

            {/* Retarding Voltage Slider */}
            <div>
              <div className="flex items-center justify-between font-bold mb-1">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? 'فرق الجهد العكسي / المعوق (V):' : 'Retarding Potential (V):'}</span>
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-black text-cyan-300">
                    {isAr ? `${toHindiDigits(retardingVoltageV.toFixed(2))} فولت` : `${retardingVoltageV.toFixed(2)} V`}
                  </span>
                  {isEmissionAllowed && stoppingPotentialV > 0 && (
                    <button
                      type="button"
                      onClick={() => handleVoltageChange(parseFloat(stoppingPotentialV.toFixed(2)))}
                      className="px-2 py-0.5 rounded-md bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold cursor-pointer transition-all"
                    >
                      {isAr ? 'ضبط على جهد الإيقاف' : 'Set to V₀'}
                    </button>
                  )}
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                step="0.05"
                value={retardingVoltageV}
                onChange={(e) => handleVoltageChange(parseFloat(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right: Einstein's Linear Graph & Digital Physical Telemetry (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 overflow-y-auto min-h-0">
          {/* Einstein's Linear Graph (K_max vs Frequency nu) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">
                {isAr ? 'الرسم البياني لعلاقة آينشتاين (K_max مقابل التردد ν)' : 'Einstein’s Linear Plot (K_max vs ν)'}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {isAr ? 'الميل = ثابت بلانك h' : 'Slope = h'}
              </span>
            </div>

            {/* SVG Linear Plot */}
            <div className="w-full h-44 flex items-center justify-center">
              <svg viewBox="0 0 320 180" className="w-full h-full object-contain overflow-visible">
                <rect x="35" y="15" width="270" height="145" fill={isLight ? '#f8fafc' : '#020617'} rx="8" />

                <line x1="35" y1="90" x2="305" y2="90" stroke="#334155" strokeWidth="1.5" />
                <line x1="120" y1="15" x2="120" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

                <text x="300" y="105" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="sans-serif">
                  {isAr ? 'التردد ν (10¹⁴ Hz)' : 'ν (10¹⁴ Hz)'}
                </text>

                <text x="30" y="24" fill="#94a3b8" fontSize="8" textAnchor="start" fontFamily="sans-serif">
                  {isAr ? 'K_max (eV)' : 'K_max (eV)'}
                </text>

                {/* Threshold Frequency Point */}
                {(() => {
                  const nu0 = thresholdFrequency1014Hz;
                  const x0 = 35 + (nu0 / 15) * 270;
                  return (
                    <g>
                      <circle cx={x0} cy="90" r="3" fill="#f59e0b" />
                      <text x={x0} y="102" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
                        ν₀
                      </text>
                    </g>
                  );
                })()}

                {/* Einstein Linear Equation Line */}
                {(() => {
                  const nu0 = thresholdFrequency1014Hz;
                  const x0 = 35 + (nu0 / 15) * 270;
                  const xMax = 35 + (15 / 15) * 270;
                  const kAt15 = Math.max(0, 15 * 1e14 * 4.1357e-15 - currentMetal.workFunctionEv);
                  const yMax = 90 - (kAt15 / 5.0) * 70;

                  return (
                    <line
                      x1={x0}
                      y1="90"
                      x2={xMax}
                      y2={yMax}
                      stroke="#818cf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  );
                })()}

                {/* Current Operating Point Dot */}
                {isEmissionAllowed &&
                  (() => {
                    const xCur = 35 + Math.min(270, (frequency1014Hz / 15) * 270);
                    const yCur = 90 - (maxKineticEnergyEv / 5.0) * 70;
                    return (
                      <g>
                        <circle
                          cx={xCur}
                          cy={yCur}
                          r="5"
                          fill="#38bdf8"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          className="animate-pulse"
                        />
                      </g>
                    );
                  })()}
              </svg>
            </div>
          </div>

          {/* Physical Telemetry Metric Badges */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-xl space-y-2.5 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'طاقة الفوتون الساقط (E):' : 'Photon Energy (E):'}
                </span>
                <span className="font-mono font-bold text-amber-300 text-sm">
                  {isAr ? `${toHindiDigits(photonEnergyEv.toFixed(2))} eV` : `${photonEnergyEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'دالة الشغل (Φ):' : 'Work Function (Φ):'}
                </span>
                <span className="font-mono font-bold text-slate-300 text-sm">
                  {isAr ? `${toHindiDigits(currentMetal.workFunctionEv.toFixed(2))} eV` : `${currentMetal.workFunctionEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'أقصى طاقة حركة (K_max):' : 'Max Kinetic Energy:'}
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">
                  {isAr ? `${toHindiDigits(maxKineticEnergyEv.toFixed(2))} eV` : `${maxKineticEnergyEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'جهد الإيقاف الفعلي (V₀):' : 'Stopping Potential (V₀):'}
                </span>
                <span className="font-mono font-bold text-cyan-300 text-sm">
                  {isAr ? `${toHindiDigits(stoppingPotentialV.toFixed(2))} V` : `${stoppingPotentialV.toFixed(2)} V`}
                </span>
              </div>
            </div>

            {/* Status Indicator */}
            {isEmissionAllowed ? (
              <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isAr
                    ? `يحدث انبعاث كهروضوئي لحظي (ν > ν₀ لأن ${wavelengthNm}nm < ${Math.round(thresholdWavelengthNm)}nm)`
                    : `Photoelectric emission occurs (ν > ν₀ since ${wavelengthNm}nm < ${Math.round(thresholdWavelengthNm)}nm)`}
                </span>
              </div>
            ) : (
              <div className="p-2 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  {isAr
                    ? `لا يحدث انبعاث إلكتروني (طاقة الفوتون ${photonEnergyEv.toFixed(2)} eV < دالة الشغل ${currentMetal.workFunctionEv} eV)`
                    : `No emission (Photon energy ${photonEnergyEv.toFixed(2)} eV < Work function ${currentMetal.workFunctionEv} eV)`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Governing Einstein Equation Footer */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 text-xs shadow-md space-y-2 shrink-0">
        <div className="flex items-center gap-2 font-bold text-indigo-400">
          <Info className="w-4 h-4" />
          <span>{isAr ? 'معادلة آينشتاين للتأثير الكهروضوئي:' : 'Einstein’s Photoelectric Law:'}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <MathRenderer text="$$E = h\nu = \Phi + K_{\max} = \Phi + eV_0$$" />
          </div>
          <p className="text-[11px] text-slate-400 max-w-xl leading-relaxed">
            {isAr
              ? 'تتحرر الإلكترونات إذا كان تردد الضوء الساقط أكبر من أو يساوي التردد الحرج، ولا تتوقف طاقة الحركة على شدة الضوء وإنما تزداد شدة التيار مع زيادة الشدة عند ثبوت التردد.'
              : 'Electrons are emitted instantaneously if light frequency exceeds the threshold frequency. Kinetic energy is independent of intensity, whereas current scales with photon flux.'}
          </p>
        </div>
      </div>
    </div>
  );
};
