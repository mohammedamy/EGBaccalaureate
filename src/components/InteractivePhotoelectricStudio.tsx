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
  Printer,
  BookOpen,
  FileSpreadsheet,
} from 'lucide-react';
import { drawVolumetricBeam } from '../core/labs/RealisticLabGraphics';
import { verletStep } from '../core/simulation/PhysicsSolvers';
import { LabReportGeneratorModal } from './labs/LabReportGeneratorModal';
import { saveLabReportDraft, loadLabReportDraft } from '../services/labReportService';

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
  const isContrast = theme === 'high-contrast';

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
  const [showRegressionLine, setShowRegressionLine] = useState<boolean>(true);

  // Guided Mode state
  const [planckTrials, setPlanckTrials] = useState<PlanckTrial[]>(DEFAULT_PLANCK_TRIALS);
  const [reportExported, setReportExported] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

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

  // Export CSV Data Table
  const handleExportCSV = () => {
    playTactileClick();
    const headers = [
      'Trial_Number',
      'Spectral_Line',
      'Wavelength_nm',
      'Frequency_10e14_Hz',
      'Logged_Stopping_Potential_V',
      'Theoretical_Stopping_Potential_V',
      'Delta_V',
    ];
    const rows = planckTrials.map((t) => {
      const thV0 = Math.max(0, 1239.84 / t.wavelengthNm - currentMetal.workFunctionEv);
      const delta = t.loggedV0 !== null ? Math.abs(t.loggedV0 - thV0).toFixed(3) : 'N/A';
      return [
        t.id,
        `"${t.nameEn}"`,
        t.wavelengthNm,
        t.frequency1014Hz,
        t.loggedV0 !== null ? t.loggedV0.toFixed(2) : 'N/A',
        thV0.toFixed(2),
        delta,
      ].join(',');
    });
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MoE_Planck_Trials_${currentMetal.symbol}_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Open Official MoE A4 Lab Report Generator Modal
  const handleOpenOfficialReportModal = () => {
    playTactileClick();
    const draft = loadLabReportDraft('phys-exp-2');
    if (planckTrials.some((t) => t.loggedV0 !== null)) {
      draft.dataTableRows = planckTrials
        .filter((t) => t.loggedV0 !== null)
        .map((t, idx) => {
          const freq1014 = (3e17 / (t.wavelengthNm * 1e-9) / 1e14).toFixed(2);
          return {
            trial: `${idx + 1}`,
            wavelength: `${t.wavelengthNm}`,
            frequency: `${freq1014}`,
            stopping_v: `${t.loggedV0!.toFixed(2)}`,
            ke_max: `${t.loggedV0!.toFixed(2)}`,
          };
        });
      if (planckCalculations.hasData) {
        draft.conclusionAr = `تم تعيين ثابت بلانك عملياً بنجاح وقيمته ${planckCalculations.hExpJs.toExponential(3)} جول·ثانية بنسبة خطأ ${planckCalculations.percentError.toFixed(1)}% عبر دراسة جهد الإيقاف لأربعة أطوال موجية طيفية لمهبط ${currentMetal.nameAr} (دالة الشغل ${currentMetal.workFunctionEv.toFixed(2)} eV).`;
        draft.conclusionEn = `Successfully deduced Planck constant h = ${planckCalculations.hExpJs.toExponential(3)} J·s (${planckCalculations.percentError.toFixed(1)}% error) from the stopping potentials across 4 spectral lines for ${currentMetal.nameEn} cathode (Φ = ${currentMetal.workFunctionEv.toFixed(2)} eV).`;
      }
    }
    draft.rubricCriteria = draft.rubricCriteria.map((c, i) => {
      if (i === 0) return { ...c, earnedMarks: 2 };
      if (i === 1) return { ...c, earnedMarks: rubricScore.apparatusMarks };
      if (i === 2) return { ...c, earnedMarks: rubricScore.dataMarks };
      if (i === 3) return { ...c, earnedMarks: Math.min(3, rubricScore.calculationMarks + (rubricScore.precisionMarks >= 2 ? 1 : 0)) };
      if (i === 4) return { ...c, earnedMarks: rubricScore.errorMarks };
      return c;
    });
    saveLabReportDraft(draft);
    setIsReportModalOpen(true);
  };

  // High-Precision Phototube Simulation Canvas (Volumetric Beam & Velocity Verlet Kinematics)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let beamPhase = 0;
    let particles: Array<{
      pos: { x: number; y: number };
      vel: { x: number; y: number };
      alpha: number;
      size: number;
    }> = [];

    const cathodeX = 80;
    const anodeX = canvas.width - 80;
    const centerY = canvas.height / 2;
    const plateHeight = 110;

    const render = () => {
      beamPhase += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Vacuum Chamber Glass Envelope
      ctx.save();
      const chamberX = 40;
      const chamberY = 16;
      const chamberW = canvas.width - 80;
      const chamberH = canvas.height - 32;

      // Soft vacuum glass background
      ctx.fillStyle = isLight ? '#f8fafc' : '#080c14';
      ctx.beginPath();
      ctx.roundRect(chamberX, chamberY, chamberW, chamberH, 28);
      ctx.fill();

      // Subtle field lines when retarding potential > 0
      if (retardingVoltageV > 0) {
        ctx.save();
        ctx.strokeStyle = isLight ? 'rgba(59, 130, 246, 0.12)' : 'rgba(56, 189, 248, 0.08)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        const numLines = 5;
        for (let i = 1; i <= numLines; i++) {
          const ly = centerY - 45 + (i * 90) / (numLines + 1);
          ctx.beginPath();
          ctx.moveTo(cathodeX + 8, ly);
          ctx.lineTo(anodeX - 8, ly);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Outer borosilicate glass wall
      ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.45)' : 'rgba(71, 85, 105, 0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(chamberX, chamberY, chamberW, chamberH, 28);
      ctx.stroke();

      // Top specular glass highlight
      const glassHighlight = ctx.createLinearGradient(chamberX, chamberY + 4, chamberX, chamberY + 18);
      glassHighlight.addColorStop(0, isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.25)');
      glassHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glassHighlight;
      ctx.fillRect(chamberX + 24, chamberY + 3, chamberW - 48, 12);
      ctx.restore();

      // 2. Incident Monochromatic Collimated Light Beam
      const opticalPortX = 14;
      const opticalPortY = centerY - 50;
      const cathodeTargetX = cathodeX;
      const cathodeTargetY = centerY;

      drawVolumetricBeam(
        ctx,
        opticalPortX,
        opticalPortY,
        cathodeTargetX,
        cathodeTargetY,
        lightColor.hex,
        2.2,
        8,
        beamPhase
      );

      // Collimator housing & optical quartz window
      ctx.save();
      ctx.fillStyle = isLight ? '#94a3b8' : '#334155';
      ctx.fillRect(opticalPortX - 6, opticalPortY - 14, 12, 28);
      ctx.strokeStyle = isLight ? '#cbd5e1' : '#475569';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(opticalPortX - 6, opticalPortY - 14, 12, 28);
      ctx.restore();

      // 3. Cathode Metal Plate (Emitter)
      ctx.save();
      const cathodeGrad = ctx.createLinearGradient(cathodeX - 10, centerY, cathodeX, centerY);
      cathodeGrad.addColorStop(0, '#1e293b');
      cathodeGrad.addColorStop(0.7, currentMetal.color);
      cathodeGrad.addColorStop(1, '#ffffff');
      ctx.fillStyle = cathodeGrad;
      ctx.beginPath();
      ctx.roundRect(cathodeX - 8, centerY - plateHeight / 2, 10, plateHeight, [4, 2, 2, 4]);
      ctx.fill();

      // Cathode metal symbol & work function label
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(currentMetal.symbol, cathodeX - 14, centerY - 8);
      ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
      ctx.font = '9px monospace';
      ctx.fillText(`${currentMetal.workFunctionEv}eV`, cathodeX - 14, centerY + 8);

      // Cathode terminal lead wire
      ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cathodeX - 3, centerY + plateHeight / 2);
      ctx.lineTo(cathodeX - 3, canvas.height - 8);
      ctx.stroke();
      ctx.restore();

      // 4. Anode Collector Plate
      ctx.save();
      const anodeGrad = ctx.createLinearGradient(anodeX, centerY, anodeX + 8, centerY);
      anodeGrad.addColorStop(0, '#cbd5e1');
      anodeGrad.addColorStop(0.5, '#475569');
      anodeGrad.addColorStop(1, '#1e293b');
      ctx.fillStyle = anodeGrad;
      ctx.beginPath();
      ctx.roundRect(anodeX, centerY - plateHeight / 2, 8, plateHeight, [2, 4, 4, 2]);
      ctx.fill();

      // Anode terminal lead wire
      ctx.strokeStyle = isLight ? '#94a3b8' : '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(anodeX + 4, centerY + plateHeight / 2);
      ctx.lineTo(anodeX + 4, canvas.height - 8);
      ctx.stroke();

      // Anode polarity label (+/-)
      ctx.fillStyle = retardingVoltageV > 0 ? '#ef4444' : '#10b981';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(retardingVoltageV > 0 ? '(-)' : '(+)', anodeX + 14, centerY);
      ctx.restore();

      // 5. Spawn new electrons based on quantum yield
      if (isEmissionAllowed && Math.random() < (lightIntensityPct / 100) * 0.85) {
        const energyFraction = Math.random() * 0.8 + 0.2;
        const keSample = maxKineticEnergyEv * energyFraction;
        const vMagnitude = Math.min(5.5, Math.max(1.0, Math.sqrt(keSample) * 2.2));
        const angle = (Math.random() - 0.5) * 0.6;

        particles.push({
          pos: {
            x: cathodeX + 3,
            y: centerY - 40 + Math.random() * 80,
          },
          vel: {
            x: vMagnitude * Math.cos(angle),
            y: vMagnitude * Math.sin(angle),
          },
          alpha: 1.0,
          size: 2.8 + Math.random() * 1.2,
        });
      }

      // 6. Kinematic Update using Velocity Verlet Integration
      const retardingAccel = (retardingVoltageV / 6.0) * 0.35;
      const dt = 1.0;

      const nextParticles: typeof particles = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const res = verletStep(
          p.pos,
          p.vel,
          () => ({ x: -retardingAccel, y: 0 }),
          dt
        );

        p.pos = res.position;
        p.vel = res.velocity;

        // Render electron with glowing cyan core
        ctx.save();
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Boundary conditions
        if (p.pos.x < cathodeX) continue;
        if (p.pos.x >= anodeX) continue;
        if (p.pos.y < chamberY + 8 || p.pos.y > chamberY + chamberH - 8) continue;

        nextParticles.push(p);
      }

      particles = nextParticles;
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
      <div className={`border rounded-xl p-3 sm:p-4 shrink-0 flex flex-wrap items-center justify-between gap-3 ${
        isContrast
          ? 'bg-black border-2 border-yellow-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-xs'
          : 'bg-[#161B22] border-[#30363D] text-slate-100 shadow-xs'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
            isLight
              ? 'bg-blue-50 border-blue-200 text-blue-700'
              : 'bg-blue-950/60 border-blue-800 text-blue-300'
          }`}>
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-tight flex items-center gap-2">
              <span>
                {isAr
                  ? 'مختبر التأثير الكهروضوئي وتعيين ثابت بلانك'
                  : 'Photoelectric Effect & Planck Constant Studio'}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${
                isLight
                  ? 'bg-blue-50 text-blue-800 border-blue-200'
                  : 'bg-blue-950/50 text-blue-300 border-blue-800/60'
              }`}>
                {isAr ? 'الفيزياء الحديثة (فصل ٥)' : 'Modern Physics (Ch 5)'}
              </span>
            </h3>
            <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr
                ? 'معادلة آينشتاين: طاقة حركة الإلكترونات، جهد الإيقاف، وتعيين ثابت بلانك عملياً'
                : 'Einstein’s law: Stopping potentials, kinetic energy, and empirical Planck constant determination'}
            </p>
          </div>
        </div>

        {/* Mode & Tools Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div className={`flex items-center p-1 rounded-lg border text-xs ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
          }`}>
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setStudioMode('explore');
              }}
              className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                studioMode === 'explore'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
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
              className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                studioMode === 'guided_planck'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'تجربة تعيين ثابت بلانك (12 درجة)' : 'MoE Planck Exam (12 Marks)'}</span>
            </button>
          </div>

          {/* Cathode Metal Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold hidden sm:inline ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {isAr ? 'المهبط:' : 'Metal:'}
            </span>
            <select
              value={selectedMetalId}
              onChange={(e) => {
                playTactileClick();
                setSelectedMetalId(e.target.value);
              }}
              aria-label={isAr ? 'اختر معدن المهبط' : 'Select Cathode Metal'}
              className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 border cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-blue-500 ${
                isLight
                  ? 'bg-slate-50 border-slate-300 text-slate-800'
                  : 'bg-[#0D1117] border-[#30363D] text-slate-200'
              }`}
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
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              audioMuted
                ? isLight ? 'bg-slate-100 text-slate-500 border-slate-300' : 'bg-[#21262D] text-slate-400 border-[#30363D]'
                : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
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
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                : 'bg-[#21262D] hover:bg-[#30363D] text-slate-300 border-[#30363D]'
            }`}
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
        <div className={`lg:col-span-7 border rounded-2xl p-3 sm:p-4 flex flex-col justify-between overflow-y-auto min-h-0 space-y-3 ${
          isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#161B22] border-[#30363D] shadow-xs'
        }`}>
          {studioMode === 'explore' ? (
            <>
              <div className={`flex items-center justify-between pb-2 border-b shrink-0 ${isLight ? 'border-slate-200' : 'border-[#30363D]'}`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isAr
                      ? 'أنبوبة التفريغ الكهروضوئية والمهبط المعدني'
                      : 'Vacuum Phototube & Electron Cloud Chamber'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>{isAr ? 'التيار الكهروضوئي:' : 'Photocurrent:'}</span>
                  <span className="tabular-mono font-bold text-emerald-600 dark:text-emerald-400">
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
                  className={`w-full h-full object-contain rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#080c14] border-[#30363D]'
                  }`}
                />
              </div>
            </>
          ) : (
            /* MoE Guided Planck Experiment Mode */
            <div className="space-y-3.5">
              <div className={`flex items-center justify-between pb-2 border-b ${isLight ? 'border-slate-200' : 'border-[#30363D]'}`}>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className={`text-xs font-bold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {isAr
                      ? 'بروتوكول امتحان المعمل الوزاري: تعيين ثابت بلانك (h)'
                      : 'MoE Practical Protocol: Determination of Planck Constant (h)'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="px-2.5 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs border border-blue-600/40"
                    title={isAr ? 'تصدير جدول القياسات بتنسيق CSV' : 'Export Data Table as CSV'}
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleExportReport}
                    className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs border border-emerald-600/40"
                  >
                    {reportExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{reportExported ? (isAr ? 'تم التصدير!' : 'Exported!') : (isAr ? 'تصدير MD' : 'Export MD')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenOfficialReportModal}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs border ${
                      isLight 
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300' 
                        : 'bg-[#21262D] hover:bg-[#30363D] text-slate-100 border-[#30363D]'
                    }`}
                    title={isAr ? 'طباعة ومعاينة التقرير الرسمي A4' : 'Preview & Print Official MoE A4 Report'}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تقرير A4' : 'A4 Report'}</span>
                  </button>
                </div>
              </div>

              {/* Protocol Steps Checklist */}
              <div className={`p-3 rounded-xl border text-xs space-y-2 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
              }`}>
                <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5 text-[11px]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'خطوات التجربة العملية في معمل الفيزياء:' : 'Laboratory Procedure:'}</span>
                </span>
                <ol className={`list-decimal list-inside space-y-1 text-[11px] leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  <li>{isAr ? 'سلط أحد خطوط طيف مصباح الزئبق الأربعة على مهبط الخلية الكهروضوئية.' : 'Direct each of the 4 spectral mercury lines onto the cathode.'}</li>
                  <li>{isAr ? 'قم بزيادة فرق الجهد العكسي تدريجياً حتى ينعدم التيار (Microammeter = 0 μA).' : 'Gradually increase reverse retarding voltage until photocurrent becomes 0 μA.'}</li>
                  <li>{isAr ? 'سجل قيمة جهد الإيقاف (V₀) المقابلة للتردد المحدد في الجدول.' : 'Log the stopping potential (V₀) corresponding to that frequency.'}</li>
                  <li>{isAr ? 'احسب ميل الخط المستقيم (m = ΔV₀ / Δν) واستنتج ثابت بلانك h = e · m.' : 'Calculate slope m = ΔV₀ / Δν and deduce Planck’s constant h = e · m.'}</li>
                </ol>
              </div>

              {/* Multi-Wavelength Empirical Table */}
              <div className="overflow-x-auto">
                <table className={`w-full text-xs text-left rtl:text-right border-collapse rounded-lg overflow-hidden border ${
                  isLight ? 'bg-white border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
                }`}>
                  <thead>
                    <tr className={`border-b font-bold text-[11px] ${
                      isLight ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-[#21262D] text-slate-300 border-[#30363D]'
                    }`}>
                      <th className="p-2">{isAr ? 'الخط الطيفي' : 'Line'}</th>
                      <th className="p-2">{isAr ? 'λ (نانومتر)' : 'λ (nm)'}</th>
                      <th className="p-2">{isAr ? 'ν (10¹⁴ Hz)' : 'ν (10¹⁴ Hz)'}</th>
                      <th className="p-2">{isAr ? 'جهد الإيقاف المسجل' : 'Logged V₀'}</th>
                      <th className="p-2 text-center">{isAr ? 'الضبط والتسجيل' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y tabular-mono ${isLight ? 'divide-slate-200 text-slate-700' : 'divide-[#30363D] text-slate-300'}`}>
                    {planckTrials.map((trial) => {
                      const thV0 = Math.max(0, 1239.84 / trial.wavelengthNm - currentMetal.workFunctionEv);
                      const isCurrentActive = wavelengthNm === trial.wavelengthNm;
                      return (
                        <tr key={trial.id} className={
                          isCurrentActive 
                            ? isLight ? 'bg-blue-50/70 font-semibold' : 'bg-blue-950/40 font-semibold' 
                            : isLight ? 'hover:bg-slate-50' : 'hover:bg-[#161B22]'
                        }>
                          <td className={`p-2 font-bold font-sans ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                            {isAr ? trial.nameAr : trial.nameEn}
                          </td>
                          <td className="p-2">{trial.wavelengthNm}</td>
                          <td className={`p-2 font-bold ${isLight ? 'text-blue-700' : 'text-cyan-300'}`}>
                            {trial.loggedV0 !== null ? (
                              <span>
                                {trial.loggedV0.toFixed(2)} V{' '}
                                <span className={`text-[10px] font-sans ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                                  ({isAr ? 'نظري' : 'theo'}: {thV0.toFixed(2)}V)
                                </span>
                              </span>
                            ) : (
                              <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>
                                --- <span className="text-[10px] font-sans">({thV0.toFixed(2)}V)</span>
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
                              className={`px-2 py-0.5 rounded border font-sans text-[10px] font-semibold cursor-pointer transition-colors ${
                                isLight 
                                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300' 
                                  : 'bg-[#21262D] hover:bg-[#30363D] text-slate-300 border-[#30363D]'
                              }`}
                            >
                              {isAr ? 'ضبط الطول' : 'Set λ'}
                            </button>
                            <button
                              type="button"
                              onClick={() => logStoppingPotentialForTrial(trial.id)}
                              className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-sans text-[10px] font-semibold cursor-pointer transition-colors"
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
              <div className={`p-3 rounded-xl border space-y-2 text-xs ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
              }`}>
                <span className="font-bold text-amber-600 dark:text-amber-400 block">
                  {isAr ? 'حسابات ميل الخط المستقيم وثابت بلانك التجريبي:' : 'Linear Regression & Experimental Planck Constant:'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-center tabular-mono">
                  <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'الميل (m = h/e):' : 'Slope (h/e):'}</span>
                    <span className={`font-bold text-sm ${isLight ? 'text-blue-700' : 'text-indigo-300'}`}>
                      {planckCalculations.hasData ? `${planckCalculations.slope.toFixed(4)} × 10⁻¹⁴` : '---'}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'ثابت بلانك التجريبي (h):' : 'Calculated h (J·s):'}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                      {planckCalculations.hasData ? planckCalculations.hExpJs.toExponential(3) : '---'}
                    </span>
                  </div>
                </div>

                <div className={`flex items-center justify-between text-[11px] pt-1 border-t ${
                  isLight ? 'border-slate-200 text-slate-600' : 'border-[#30363D] text-slate-400'
                }`}>
                  <span>{isAr ? 'القيمة الحقيقية لثابت بلانك: 6.626 × 10⁻³⁴ جول·ثانية' : 'True Planck Constant: 6.626 × 10⁻³⁴ J·s'}</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 tabular-mono">
                    {planckCalculations.hasData ? `${isAr ? 'نسبة الخطأ' : 'Error'}: ${planckCalculations.percentError.toFixed(1)}%` : ''}
                  </span>
                </div>
              </div>

              {/* 12-Mark Rubric Scorecard */}
              <div className={`p-3 rounded-xl border space-y-2 text-xs ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{isAr ? 'بطاقة تقييم المعمل الوزاري (١٢ درجة):' : 'MoE Practical Rubric (12 Marks):'}</span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded border tabular-mono font-bold ${
                    isLight ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-amber-950/40 text-amber-300 border-amber-800/60'
                  }`}>
                    {rubricScore.total} / 12 {isAr ? 'درجة' : 'Marks'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[10px] text-center font-bold">
                  <div className={`p-1.5 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'توصيل الخلية' : 'Setup'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 tabular-mono">{rubricScore.apparatusMarks}/2</span>
                  </div>
                  <div className={`p-1.5 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'دقة جهد الإيقاف' : 'Zero Current'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 tabular-mono">{rubricScore.precisionMarks}/3</span>
                  </div>
                  <div className={`p-1.5 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'الخطوط الأربعة' : '4 Lines'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 tabular-mono">{rubricScore.dataMarks}/3</span>
                  </div>
                  <div className={`p-1.5 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'حساب ثابت بلانك' : 'Planck h'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 tabular-mono">{rubricScore.calculationMarks}/2</span>
                  </div>
                  <div className={`p-1.5 rounded border ${isLight ? 'bg-white border-slate-200' : 'bg-[#161B22] border-[#30363D]'}`}>
                    <span className={`block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{isAr ? 'تحليل الأخطاء' : 'Error Precautions'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 tabular-mono">{rubricScore.errorMarks}/2</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Controls: Wavelength & Retarding Potential Sliders */}
          <div className={`space-y-3 pt-2 border-t text-xs shrink-0 ${isLight ? 'border-slate-200' : 'border-[#30363D]'}`}>
            {/* Wavelength Slider & Spectral Presets */}
            <div>
              <div className="flex items-center justify-between font-bold mb-1">
                <span className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isAr ? 'الطول الموجي للضوء الساقط (λ):' : 'Incident Light Wavelength (λ):'}</span>
                </span>
                <div className="flex items-center gap-2 tabular-mono">
                  <span
                    className="w-3 h-3 rounded-full border border-black/20 dark:border-white/30 inline-block"
                    style={{ backgroundColor: lightColor.hex }}
                  />
                  <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                    {isAr ? `${toHindiDigits(wavelengthNm)} نانومتر` : `${wavelengthNm} nm`}
                  </span>
                  <span className={`text-[10px] font-sans ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
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
                className="w-full accent-blue-600 dark:accent-blue-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
              />

              {/* Spectral Quick Presets */}
              <div className="flex items-center justify-between gap-1 mt-1 flex-wrap">
                {[
                  { nm: 254, label: '254 UV' },
                  { nm: 405, label: '405 V' },
                  { nm: 436, label: '436 B' },
                  { nm: 546, label: '546 G' },
                  { nm: 578, label: '578 Y' },
                  { nm: 632, label: '632 R' },
                ].map((spec) => (
                  <button
                    key={spec.nm}
                    type="button"
                    onClick={() => handleWavelengthChange(spec.nm)}
                    className={`px-1.5 py-0.5 rounded text-[10px] tabular-mono border transition-colors cursor-pointer ${
                      wavelengthNm === spec.nm
                        ? 'bg-blue-600 border-blue-600 text-white font-bold'
                        : isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
                        : 'bg-[#21262D] hover:bg-[#30363D] text-slate-400 border-[#30363D]'
                    }`}
                  >
                    {spec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Retarding Voltage Slider */}
            <div>
              <div className="flex items-center justify-between font-bold mb-1">
                <span className={`flex items-center gap-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <Activity className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{isAr ? 'فرق الجهد العكسي / المعوق (V):' : 'Retarding Potential (V):'}</span>
                </span>
                <div className="flex items-center gap-2 tabular-mono">
                  <span className={`font-bold ${isLight ? 'text-blue-700' : 'text-cyan-300'}`}>
                    {isAr ? `${toHindiDigits(retardingVoltageV.toFixed(2))} فولت` : `${retardingVoltageV.toFixed(2)} V`}
                  </span>
                  {isEmissionAllowed && stoppingPotentialV > 0 && (
                    <button
                      type="button"
                      onClick={() => handleVoltageChange(parseFloat(stoppingPotentialV.toFixed(2)))}
                      className="px-2 py-0.5 rounded border text-[10px] font-semibold cursor-pointer transition-colors bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
                    >
                      {isAr ? 'ضبط على جهد الإيقاف' : 'Lock to V₀'}
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
                className="w-full accent-cyan-600 dark:accent-cyan-400 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right: Einstein's Linear Graph & Digital Physical Telemetry (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 overflow-y-auto min-h-0">
          {/* Einstein's Linear Graph (K_max vs Frequency nu) */}
          <div className={`border rounded-2xl p-3 sm:p-4 space-y-2 ${
            isLight ? 'bg-white border-slate-200 text-slate-900 shadow-xs' : 'bg-[#161B22] border-[#30363D] text-slate-100 shadow-xs'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">
                {isAr ? 'الرسم البياني لعلاقة آينشتاين (K_max مقابل التردد ν)' : 'Einstein’s Linear Plot (K_max vs ν)'}
              </span>
              <div className="flex items-center gap-2">
                {studioMode === 'guided_planck' && planckCalculations.hasData && (
                  <button
                    type="button"
                    onClick={() => setShowRegressionLine(!showRegressionLine)}
                    className={`px-2 py-0.5 rounded text-[10px] tabular-mono font-semibold border transition-colors cursor-pointer ${
                      showRegressionLine
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : isLight
                        ? 'bg-slate-100 border-slate-200 text-slate-600'
                        : 'bg-[#21262D] border-[#30363D] text-slate-400'
                    }`}
                  >
                    {isAr ? 'خط الانحدار التجريبي' : 'Best-Fit Line'}
                  </button>
                )}
                <span className="text-[10px] text-slate-500 font-mono">
                  {isAr ? 'الميل = h' : 'Slope = h'}
                </span>
              </div>
            </div>

            {/* SVG Linear Plot */}
            <div className="w-full h-44 flex items-center justify-center">
              <svg viewBox="0 0 320 180" className="w-full h-full object-contain overflow-visible">
                <rect x="35" y="15" width="270" height="145" fill={isLight ? '#f8fafc' : '#080c14'} stroke={isLight ? '#e2e8f0' : '#30363d'} rx="8" />

                {/* Grid lines */}
                <line x1="35" y1="90" x2="305" y2="90" stroke={isLight ? '#cbd5e1' : '#334155'} strokeWidth="1.5" />
                <line x1="120" y1="15" x2="120" y2="160" stroke={isLight ? '#cbd5e1' : '#334155'} strokeWidth="1" strokeDasharray="3 3" />

                <text x="300" y="105" fill={isLight ? '#64748b' : '#94a3b8'} fontSize="8" textAnchor="end" fontFamily="sans-serif">
                  {isAr ? 'التردد ν (10¹⁴ Hz)' : 'ν (10¹⁴ Hz)'}
                </text>

                <text x="30" y="24" fill={isLight ? '#64748b' : '#94a3b8'} fontSize="8" textAnchor="start" fontFamily="sans-serif">
                  {isAr ? 'K_max (eV)' : 'K_max (eV)'}
                </text>

                {/* Threshold Frequency Point */}
                {(() => {
                  const nu0 = thresholdFrequency1014Hz;
                  const x0 = 35 + (nu0 / 15) * 270;
                  return (
                    <g>
                      <circle cx={x0} cy="90" r="3.5" fill="#f59e0b" />
                      <text x={x0} y="102" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
                        ν₀
                      </text>
                    </g>
                  );
                })()}

                {/* Einstein Theoretical Line */}
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
                      stroke="#3b82f6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  );
                })()}

                {/* Empirical Logged Points in Guided Mode */}
                {studioMode === 'guided_planck' &&
                  planckTrials
                    .filter((t) => t.loggedV0 !== null)
                    .map((t) => {
                      const px = 35 + Math.min(270, (t.frequency1014Hz / 15) * 270);
                      const py = 90 - (t.loggedV0! / 5.0) * 70;
                      return (
                        <g key={t.id}>
                          <circle cx={px} cy={py} r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
                          <line x1={px - 5} y1={py} x2={px + 5} y2={py} stroke="#10b981" strokeWidth="1" />
                          <line x1={px} y1={py - 5} x2={px} y2={py + 5} stroke="#10b981" strokeWidth="1" />
                        </g>
                      );
                    })}

                {/* Empirical Regression Line in Guided Mode */}
                {studioMode === 'guided_planck' &&
                  showRegressionLine &&
                  planckCalculations.hasData &&
                  (() => {
                    const nu0 = thresholdFrequency1014Hz;
                    const x0 = 35 + (nu0 / 15) * 270;
                    const xMax = 35 + 270;
                    const v0AtMax = planckCalculations.slope * (15 - nu0);
                    const yMax = 90 - (v0AtMax / 5.0) * 70;
                    return (
                      <line
                        x1={x0}
                        y1="90"
                        x2={xMax}
                        y2={yMax}
                        stroke="#10b981"
                        strokeWidth="1.8"
                        strokeDasharray="4 3"
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
          <div className={`border rounded-2xl p-3 sm:p-4 space-y-2.5 text-xs ${
            isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-[#161B22] border-[#30363D] shadow-xs'
          }`}>
            <div className="grid grid-cols-2 gap-2">
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isAr ? 'طاقة الفوتون الساقط (E):' : 'Photon Energy (E):'}
                </span>
                <span className="tabular-mono font-bold text-amber-600 dark:text-amber-400 text-sm">
                  {isAr ? `${toHindiDigits(photonEnergyEv.toFixed(2))} eV` : `${photonEnergyEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isAr ? 'دالة الشغل (Φ):' : 'Work Function (Φ):'}
                </span>
                <span className={`tabular-mono font-bold text-sm ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {isAr ? `${toHindiDigits(currentMetal.workFunctionEv.toFixed(2))} eV` : `${currentMetal.workFunctionEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isAr ? 'أقصى طاقة حركة (K_max):' : 'Max Kinetic Energy:'}
                </span>
                <span className="tabular-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                  {isAr ? `${toHindiDigits(maxKineticEnergyEv.toFixed(2))} eV` : `${maxKineticEnergyEv.toFixed(2)} eV`}
                </span>
              </div>
              <div className={`p-2.5 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0D1117] border-[#30363D]'}`}>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isAr ? 'جهد الإيقاف الفعلي (V₀):' : 'Stopping Potential (V₀):'}
                </span>
                <span className={`tabular-mono font-bold text-sm ${isLight ? 'text-blue-700' : 'text-cyan-300'}`}>
                  {isAr ? `${toHindiDigits(stoppingPotentialV.toFixed(2))} V` : `${stoppingPotentialV.toFixed(2)} V`}
                </span>
              </div>
            </div>

            {/* Status Indicator */}
            {isEmissionAllowed ? (
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-[11px] font-medium">
                  {isAr
                    ? `يحدث انبعاث كهروضوئي لحظي (ν > ν₀ لأن ${wavelengthNm}nm < ${Math.round(thresholdWavelengthNm)}nm)`
                    : `Photoelectric emission occurs (ν > ν₀ since ${wavelengthNm}nm < ${Math.round(thresholdWavelengthNm)}nm)`}
                </span>
              </div>
            ) : (
              <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span className="text-[11px] font-medium">
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
      <div className={`border rounded-xl p-3 sm:p-4 text-xs space-y-2 shrink-0 ${
        isLight ? 'bg-white border-slate-200 shadow-xs text-slate-800' : 'bg-[#161B22] border-[#30363D] shadow-xs text-slate-200'
      }`}>
        <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">
          <Info className="w-4 h-4" />
          <span>{isAr ? 'معادلة آينشتاين للتأثير الكهروضوئي:' : 'Einstein’s Photoelectric Law:'}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className={`tabular-mono text-sm px-3 py-1.5 rounded-lg border ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-[#0D1117] border-[#30363D] text-slate-100'
          }`}>
            <MathRenderer text="$$E = h\nu = \Phi + K_{\max} = \Phi + eV_0$$" />
          </div>
          <p className={`text-[11px] max-w-xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isAr
              ? 'تتحرر الإلكترونات إذا كان تردد الضوء الساقط أكبر من أو يساوي التردد الحرج، ولا تتوقف طاقة الحركة على شدة الضوء وإنما تزداد شدة التيار مع زيادة الشدة عند ثبوت التردد.'
              : 'Electrons are emitted instantaneously if light frequency exceeds the threshold frequency. Kinetic energy is independent of intensity, whereas current scales with photon flux.'}
          </p>
        </div>
      </div>

      {/* Official MoE A4 Lab Report Modal */}
      <LabReportGeneratorModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        initialExperimentId="phys-exp-2"
        lang={lang}
        theme={theme}
      />
    </div>
  );
};
