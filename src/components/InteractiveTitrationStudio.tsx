import React, { useState, useMemo } from 'react';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { Language } from '../i18n/translations';
import {
  FlaskConical,
  Droplet,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
}

export type TitrationSystemType =
  | 'strong_strong'
  | 'weak_acid_strong_base'
  | 'strong_acid_weak_base'
  | 'diprotic_acid';

export type IndicatorType =
  | 'phenolphthalein'
  | 'methyl_orange'
  | 'bromothymol_blue'
  | 'litmus';

interface SystemConfig {
  id: TitrationSystemType;
  nameEn: string;
  nameAr: string;
  formulaEn: string;
  formulaAr: string;
  analyteEn: string;
  analyteAr: string;
  titrantEn: string;
  titrantAr: string;
  eqVolumeMl: number;
  pKa1?: number;
  pKa2?: number;
  pKb?: number;
  eqPh: number;
  suitableIndicator: IndicatorType;
  descriptionEn: string;
  descriptionAr: string;
}

const SYSTEMS: SystemConfig[] = [
  {
    id: 'strong_strong',
    nameEn: 'HCl + NaOH (Strong Acid / Strong Base)',
    nameAr: 'حمض قوي / قاعدة قوية (HCl + NaOH)',
    formulaEn: '\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    formulaAr: '\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.10 M HCl',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار HCl',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    eqPh: 7.0,
    suitableIndicator: 'bromothymol_blue',
    descriptionEn: 'Neutral salt formed. Sharp pH vertical transition from pH 3 to 11 at equivalence (25.0 mL).',
    descriptionAr: 'يتكون ملح متعادل (NaCl). قفزة حادة في الرقم الهيدروجيني من ٣ إلى ١١ عند نقطة التكافؤ (٢٥ ملل).',
  },
  {
    id: 'weak_acid_strong_base',
    nameEn: 'CH₃COOH + NaOH (Weak Acid / Strong Base)',
    nameAr: 'حمض ضعيف / قاعدة قوية (CH₃COOH + NaOH)',
    formulaEn: '\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}',
    formulaAr: '\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.10 M Acetic Acid',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار حمض الخليك',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    pKa1: 4.76,
    eqPh: 8.72,
    suitableIndicator: 'phenolphthalein',
    descriptionEn: 'Basic equivalence (pH 8.72) due to acetate hydrolysis. Buffer zone where pH = pKa at half-equivalence (12.5 mL).',
    descriptionAr: 'نقطة تكافؤ قلوية (pH = ٨٫٧٢) لتميؤ أسيتات الصوديوم. منطقة عازلة يتساوى فيها pH مع pKa عند منتصف التكافؤ (١٢٫٥ ملل).',
  },
  {
    id: 'strong_acid_weak_base',
    nameEn: 'HCl + NH₃ (Strong Acid / Weak Base)',
    nameAr: 'حمض قوي / قاعدة ضعيفة (HCl + NH₃)',
    formulaEn: '\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{Cl}',
    formulaAr: '\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{Cl}',
    analyteEn: '25.0 mL of 0.10 M Ammonia',
    analyteAr: '٢٥٫٠ ملل من ٠٫١٠ مولار محلول النشادر',
    titrantEn: '0.10 M HCl in Burette',
    titrantAr: '٠٫١٠ مولار HCl في السحاحة',
    eqVolumeMl: 25.0,
    pKb: 4.75,
    eqPh: 5.28,
    suitableIndicator: 'methyl_orange',
    descriptionEn: 'Acidic equivalence (pH 5.28) due to ammonium hydrolysis. Methyl orange is the optimal ministerial indicator.',
    descriptionAr: 'نقطة تكافؤ حامضية (pH = ٥٫٢٨) لتميؤ كلوريد الأمونيوم. الميثيل البرتقالي هو الدليل الأنسب للوزارة.',
  },
  {
    id: 'diprotic_acid',
    nameEn: 'H₂C₂O₄ + NaOH (Diprotic Oxalic Acid)',
    nameAr: 'حمض ثنائي البروتون (حمض الأكساليك H₂C₂O₄ + NaOH)',
    formulaEn: '\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{C}_2\\text{O}_4 + 2\\text{H}_2\\text{O}',
    formulaAr: '\\text{H}_2\\text{C}_2\\text{O}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{C}_2\\text{O}_4 + 2\\text{H}_2\\text{O}',
    analyteEn: '25.0 mL of 0.05 M Oxalic Acid',
    analyteAr: '٢٥٫٠ ملل من ٠٫٠٥ مولار حمض الأكساليك',
    titrantEn: '0.10 M NaOH in Burette',
    titrantAr: '٠٫١٠ مولار NaOH في السحاحة',
    eqVolumeMl: 25.0,
    pKa1: 1.25,
    pKa2: 4.27,
    eqPh: 8.4,
    suitableIndicator: 'phenolphthalein',
    descriptionEn: 'Diprotic neutralization displaying two successive inflection steps at 12.5 mL and 25.0 mL.',
    descriptionAr: 'معايرة ثنائية البروتون تظهر نقطتي انعطاف عند ١٢٫٥ ملل (البروتون الأول) و٢٥٫٠ ملل (البروتون الثاني).',
  },
];

const INDICATORS: Record<
  IndicatorType,
  {
    nameEn: string;
    nameAr: string;
    range: string;
    getColor: (ph: number) => { bg: string; text: string; labelEn: string; labelAr: string };
  }
> = {
  phenolphthalein: {
    nameEn: 'Phenolphthalein (فـ.ف)',
    nameAr: 'الفينولفثالين (فـ.ف)',
    range: '8.2 - 10.0',
    getColor: (ph) => {
      if (ph < 8.2) return { bg: '#f8fafc', text: 'text-slate-500', labelEn: 'Colorless (Acidic/Neutral)', labelAr: 'عديم اللون (حامضي/متعادل)' };
      if (ph <= 10.0) return { bg: '#f472b6', text: 'text-pink-600', labelEn: 'Faint Pink (Transition)', labelAr: 'وردي باهت (نقطة التحول)' };
      return { bg: '#db2777', text: 'text-pink-700', labelEn: 'Vibrant Magenta/Red', labelAr: 'أحمر وردي داكن (قاعدي)' };
    },
  },
  methyl_orange: {
    nameEn: 'Methyl Orange (م.ب)',
    nameAr: 'الميثيل البرتقالي (م.ب)',
    range: '3.1 - 4.4',
    getColor: (ph) => {
      if (ph < 3.1) return { bg: '#ef4444', text: 'text-rose-600', labelEn: 'Red (Acidic)', labelAr: 'أحمر (حامضي)' };
      if (ph <= 4.4) return { bg: '#f97316', text: 'text-orange-500', labelEn: 'Orange (Equivalence End Point)', labelAr: 'برتقالي (نقطة النهاية)' };
      return { bg: '#eab308', text: 'text-yellow-500', labelEn: 'Yellow (Basic)', labelAr: 'أصفر (قاعدي)' };
    },
  },
  bromothymol_blue: {
    nameEn: 'Bromothymol Blue (أ.ب)',
    nameAr: 'أزرق بروموثيمول (أ.ب)',
    range: '6.0 - 7.6',
    getColor: (ph) => {
      if (ph < 6.0) return { bg: '#eab308', text: 'text-yellow-500', labelEn: 'Yellow (Acidic)', labelAr: 'أصفر (حامضي)' };
      if (ph <= 7.6) return { bg: '#10b981', text: 'text-emerald-500', labelEn: 'Emerald Green (Neutral)', labelAr: 'أخضر زمردي (متعادل)' };
      return { bg: '#2563eb', text: 'text-blue-600', labelEn: 'Deep Blue (Basic)', labelAr: 'أزرق داكن (قاعدي)' };
    },
  },
  litmus: {
    nameEn: 'Litmus (ع.ش)',
    nameAr: 'صبغة عباد الشمس (ع.ش)',
    range: '5.0 - 8.0',
    getColor: (ph) => {
      if (ph < 5.0) return { bg: '#ef4444', text: 'text-rose-600', labelEn: 'Red (Acidic)', labelAr: 'أحمر (حامضي)' };
      if (ph <= 8.0) return { bg: '#8b5cf6', text: 'text-purple-500', labelEn: 'Purple/Violet (Neutral)', labelAr: 'أرجواني (متعادل)' };
      return { bg: '#2563eb', text: 'text-blue-600', labelEn: 'Blue (Basic)', labelAr: 'أزرق (قاعدي)' };
    },
  },
};

export const InteractiveTitrationStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen = false,
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const [selectedSystemId, setSelectedSystemId] = useState<TitrationSystemType>('strong_strong');
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorType>('bromothymol_blue');
  const [titrantAddedMl, setTitrantAddedMl] = useState<number>(15.0);
  const [isStirring, setIsStirring] = useState<boolean>(true);

  const currentSystem = useMemo(() => {
    return SYSTEMS.find((s) => s.id === selectedSystemId) || SYSTEMS[0];
  }, [selectedSystemId]);

  // Compute pH at any added volume V
  const calculatePH = (vAdded: number, system: SystemConfig): number => {
    const vInit = 25.0; // mL
    const cInit = 0.10; // M
    const cTitrant = 0.10; // M
    const totalV = vInit + vAdded;

    if (system.id === 'strong_strong') {
      const molesAcid = (cInit * vInit) / 1000;
      const molesBase = (cTitrant * vAdded) / 1000;
      if (vAdded < 25.0) {
        const hConc = (molesAcid - molesBase) / (totalV / 1000);
        return Math.max(1.0, -Math.log10(Math.max(1e-7, hConc)));
      } else if (Math.abs(vAdded - 25.0) < 0.05) {
        return 7.0;
      } else {
        const ohConc = (molesBase - molesAcid) / (totalV / 1000);
        const pOH = -Math.log10(Math.max(1e-7, ohConc));
        return Math.min(13.5, 14.0 - pOH);
      }
    } else if (system.id === 'weak_acid_strong_base') {
      const pKa = system.pKa1 || 4.76;
      if (vAdded <= 0.1) {
        // Initial weak acid dissociation: [H+] = sqrt(Ka * C)
        const Ka = Math.pow(10, -pKa);
        const hConc = Math.sqrt(Ka * cInit);
        return -Math.log10(hConc);
      } else if (vAdded < 25.0) {
        // Henderson-Hasselbalch buffer zone: pH = pKa + log([A-]/[HA])
        const ratio = vAdded / (25.0 - vAdded);
        const ph = pKa + Math.log10(ratio);
        return Math.max(2.88, Math.min(7.5, ph));
      } else if (Math.abs(vAdded - 25.0) < 0.1) {
        return system.eqPh; // 8.72
      } else {
        const excessBaseMoles = (cTitrant * (vAdded - 25.0)) / 1000;
        const ohConc = excessBaseMoles / (totalV / 1000);
        const pOH = -Math.log10(Math.max(1e-7, ohConc));
        return Math.min(13.2, 14.0 - pOH);
      }
    } else if (system.id === 'strong_acid_weak_base') {
      // Ammonia analyte, titrated with HCl
      if (vAdded <= 0.1) return 11.12;
      if (vAdded < 25.0) {
        const pKb = 4.75;
        const ratio = (25.0 - vAdded) / vAdded;
        const pOH = pKb + Math.log10(ratio);
        return Math.max(7.0, 14.0 - pOH);
      } else if (Math.abs(vAdded - 25.0) < 0.1) {
        return system.eqPh; // 5.28
      } else {
        const excessAcidMoles = (cTitrant * (vAdded - 25.0)) / 1000;
        const hConc = excessAcidMoles / (totalV / 1000);
        return Math.max(1.2, -Math.log10(hConc));
      }
    } else {
      // Diprotic Oxalic Acid (2 steps: 12.5 mL and 25.0 mL)
      if (vAdded < 12.5) {
        const ratio = vAdded / (12.5 - vAdded + 0.1);
        return Math.max(1.3, 1.25 + 0.9 * Math.log10(Math.max(0.1, ratio)));
      } else if (vAdded < 25.0) {
        const v2 = vAdded - 12.5;
        const ratio = v2 / (12.5 - v2 + 0.1);
        return Math.max(2.8, 4.27 + Math.log10(Math.max(0.1, ratio)));
      } else if (Math.abs(vAdded - 25.0) < 0.2) {
        return 8.4;
      } else {
        const excess = (cTitrant * (vAdded - 25.0)) / 1000;
        const oh = excess / (totalV / 1000);
        return Math.min(13.0, 14.0 + Math.log10(Math.max(1e-6, oh)));
      }
    }
  };

  const currentPH = useMemo(() => {
    return calculatePH(titrantAddedMl, currentSystem);
  }, [titrantAddedMl, currentSystem]);

  const indicatorColor = useMemo(() => {
    return INDICATORS[selectedIndicator].getColor(currentPH);
  }, [selectedIndicator, currentPH]);

  // Generate SVG path for theoretical curve (0 to 50 mL)
  const curvePoints = useMemo(() => {
    const pts: { x: number; y: number; v: number; ph: number }[] = [];
    const svgWidth = 480;
    const svgHeight = 240;
    const paddingLeft = 45;
    const paddingBottom = 35;
    const paddingTop = 20;
    const paddingRight = 20;

    const plotWidth = svgWidth - paddingLeft - paddingRight;
    const plotHeight = svgHeight - paddingTop - paddingBottom;

    for (let v = 0; v <= 50; v += 0.5) {
      const ph = calculatePH(v, currentSystem);
      const x = paddingLeft + (v / 50) * plotWidth;
      const y = paddingTop + (1 - ph / 14) * plotHeight;
      pts.push({ x, y, v, ph });
    }
    return pts;
  }, [currentSystem]);

  const pathD = useMemo(() => {
    if (curvePoints.length === 0) return '';
    return curvePoints.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
    }, '');
  }, [curvePoints]);

  // Current tracer coordinates on SVG
  const currentMarker = useMemo(() => {
    const svgWidth = 480;
    const svgHeight = 240;
    const paddingLeft = 45;
    const paddingBottom = 35;
    const paddingTop = 20;
    const paddingRight = 20;
    const plotWidth = svgWidth - paddingLeft - paddingRight;
    const plotHeight = svgHeight - paddingTop - paddingBottom;

    const x = paddingLeft + (titrantAddedMl / 50) * plotWidth;
    const y = paddingTop + (1 - currentPH / 14) * plotHeight;
    return { x, y };
  }, [titrantAddedMl, currentPH]);

  const isEquivalenceReached = Math.abs(titrantAddedMl - currentSystem.eqVolumeMl) < 0.4;
  const isHalfEquivalence =
    currentSystem.pKa1 && Math.abs(titrantAddedMl - currentSystem.eqVolumeMl / 2) < 0.4;

  return (
    <div
      className={`w-full flex flex-col font-sans select-none ${
        isFullscreen
          ? 'h-full overflow-hidden p-2 sm:p-4 bg-slate-950 text-slate-100'
          : 'space-y-4 text-slate-200'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Header & System / Indicator Selectors */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-lg shrink-0 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-100 flex items-center gap-2">
              <span>{isAr ? 'مختبر منحنيات المعايرة الحجمية والـ pH' : 'Volumetric Titration & pH Curves Studio'}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                {isAr ? 'الكيمياء التحليلية' : 'Analytical Chemistry'}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              {isAr
                ? 'تتبع تغير الرقم الهيدروجيني pH، التغير اللوني للأدلة، ومنطقة المحلول المنظم (Buffer Region)'
                : 'Interactive pH curve generation, indicator transition ranges, and buffer region analytics'}
            </p>
          </div>
        </div>

        {/* System & Indicator Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Chemical System Dropdown */}
          <select
            value={selectedSystemId}
            onChange={(e) => {
              const sysId = e.target.value as TitrationSystemType;
              setSelectedSystemId(sysId);
              const sys = SYSTEMS.find((s) => s.id === sysId);
              if (sys) setSelectedIndicator(sys.suitableIndicator);
            }}
            className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
          >
            {SYSTEMS.map((sys) => (
              <option key={sys.id} value={sys.id}>
                {isAr ? sys.nameAr : sys.nameEn}
              </option>
            ))}
          </select>

          {/* Indicator Dropdown */}
          <select
            value={selectedIndicator}
            onChange={(e) => setSelectedIndicator(e.target.value as IndicatorType)}
            className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
          >
            {Object.entries(INDICATORS).map(([key, ind]) => (
              <option key={key} value={key}>
                {isAr ? ind.nameAr : ind.nameEn} (pH {ind.range})
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            type="button"
            onClick={() => setTitrantAddedMl(0.0)}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
            title={isAr ? 'إعادة التعيين إلى 0 ملل' : 'Reset to 0 mL'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Studio Viewport (Split Grid: Left SVG Curve + Right Flask & Burette HUD) */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 ${
          isFullscreen ? 'flex-1 min-h-0' : ''
        }`}
      >
        {/* Left: Interactive Titration Curve (7 Cols on desktop) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-xl flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-200">
                {isAr ? 'منحنى تغير الرقم الهيدروجيني بدلالة حجم السحاحة (mL)' : 'pH Titration Curve vs Added Volume (mL)'}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono">
              <span className="text-emerald-400 font-bold">
                {isAr
                  ? `الحجم المضاف: ${toHindiDigits(titrantAddedMl.toFixed(1))} ملل`
                  : `V: ${titrantAddedMl.toFixed(1)} mL`}
              </span>
              <span className="text-cyan-400 font-bold">
                {isAr
                  ? `الرقم الهيدروجيني: ${toHindiDigits(currentPH.toFixed(2))}`
                  : `pH: ${currentPH.toFixed(2)}`}
              </span>
            </div>
          </div>

          {/* SVG Plot Canvas */}
          <div className="flex-1 min-h-[220px] max-h-[380px] w-full flex items-center justify-center p-1 relative">
            <svg
              viewBox="0 0 480 240"
              className="w-full h-full max-h-[360px] object-contain overflow-visible"
            >
              {/* Plot Background */}
              <rect x="45" y="20" width="415" height="185" fill={isLight ? '#f8fafc' : '#020617'} rx="8" />

              {/* Horizontal pH Grid Lines (pH 0, 2, 4, 6, 7, 8, 10, 12, 14) */}
              {[0, 2, 4, 6, 7, 8, 10, 12, 14].map((phVal) => {
                const y = 20 + (1 - phVal / 14) * 185;
                const isSeven = phVal === 7;
                return (
                  <g key={phVal}>
                    <line
                      x1="45"
                      y1={y}
                      x2="460"
                      y2={y}
                      stroke={isSeven ? '#10b981' : isLight ? '#e2e8f0' : '#1e293b'}
                      strokeWidth={isSeven ? 1.5 : 1}
                      strokeDasharray={isSeven ? '4 2' : undefined}
                    />
                    <text
                      x="38"
                      y={y + 3.5}
                      fill={isSeven ? '#10b981' : '#64748b'}
                      fontSize="9"
                      fontWeight={isSeven ? 'bold' : 'normal'}
                      textAnchor="end"
                      fontFamily="monospace"
                    >
                      {isAr ? toHindiDigits(phVal) : phVal}
                    </text>
                  </g>
                );
              })}

              {/* Vertical Volume Grid Lines (10, 20, 25, 30, 40, 50 mL) */}
              {[10, 20, 25, 30, 40, 50].map((vVal) => {
                const x = 45 + (vVal / 50) * 415;
                const isEq = vVal === currentSystem.eqVolumeMl;
                return (
                  <g key={vVal}>
                    <line
                      x1={x}
                      y1="20"
                      x2={x}
                      y2="205"
                      stroke={isEq ? '#f59e0b' : isLight ? '#e2e8f0' : '#1e293b'}
                      strokeWidth={isEq ? 1.5 : 1}
                      strokeDasharray={isEq ? '3 3' : undefined}
                    />
                    <text
                      x={x}
                      y="218"
                      fill={isEq ? '#f59e0b' : '#64748b'}
                      fontSize="9"
                      fontWeight={isEq ? 'bold' : 'normal'}
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {isAr ? toHindiDigits(vVal) : vVal}
                    </text>
                  </g>
                );
              })}

              {/* Shaded Buffer Zone for Weak Acid (0 to 25 mL) */}
              {currentSystem.pKa1 && (
                <rect
                  x="45"
                  y="20"
                  width={(currentSystem.eqVolumeMl / 50) * 415}
                  height="185"
                  fill="#06b6d4"
                  fillOpacity="0.06"
                />
              )}

              {/* Theoretical Titration Curve Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Equivalence Point Mark */}
              {(() => {
                const eqX = 45 + (currentSystem.eqVolumeMl / 50) * 415;
                const eqY = 20 + (1 - currentSystem.eqPh / 14) * 185;
                return (
                  <g>
                    <circle cx={eqX} cy={eqY} r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                    <text
                      x={eqX + 7}
                      y={eqY - 4}
                      fill="#f59e0b"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {isAr ? `نقطة التكافؤ (${currentSystem.eqPh})` : `Equiv (${currentSystem.eqPh})`}
                    </text>
                  </g>
                );
              })()}

              {/* Half-Equivalence Buffer Mark (if weak acid) */}
              {currentSystem.pKa1 && (
                (() => {
                  const halfX = 45 + (currentSystem.eqVolumeMl / 2 / 50) * 415;
                  const halfY = 20 + (1 - currentSystem.pKa1 / 14) * 185;
                  return (
                    <g>
                      <circle cx={halfX} cy={halfY} r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                      <text
                        x={halfX - 6}
                        y={halfY - 6}
                        fill="#38bdf8"
                        fontSize="8"
                        fontWeight="bold"
                        textAnchor="end"
                      >
                        {isAr ? `منتصف التكافؤ pH=pKa` : `pH = pKa (${currentSystem.pKa1})`}
                      </text>
                    </g>
                  );
                })()
              )}

              {/* Current Active Tracer Circle */}
              <circle
                cx={currentMarker.x}
                cy={currentMarker.y}
                r="6"
                fill="#ec4899"
                stroke="#ffffff"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Slider & Quick Titration Controls */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isAr ? 'التحكم في صنبور السحاحة (حجم المحلول القياسي):' : 'Burette Stopcock (Titrant Added):'}</span>
              </span>
              <span className="font-mono text-cyan-300 font-black">
                {isAr ? `${toHindiDigits(titrantAddedMl.toFixed(1))} ملل` : `${titrantAddedMl.toFixed(1)} mL`}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={titrantAddedMl}
              onChange={(e) => setTitrantAddedMl(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />

            {/* Micro-Step Adjustment Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setTitrantAddedMl((v) => Math.max(0, parseFloat((v - 1.0).toFixed(1))))}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  -1.0
                </button>
                <button
                  type="button"
                  onClick={() => setTitrantAddedMl((v) => Math.max(0, parseFloat((v - 0.1).toFixed(1))))}
                  className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  -0.1
                </button>
                <button
                  type="button"
                  onClick={() => setTitrantAddedMl((v) => Math.min(50, parseFloat((v + 0.1).toFixed(1))))}
                  className="px-2 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  +0.1
                </button>
                <button
                  type="button"
                  onClick={() => setTitrantAddedMl((v) => Math.min(50, parseFloat((v + 1.0).toFixed(1))))}
                  className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  +1.0
                </button>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex items-center gap-1.5">
                {currentSystem.pKa1 && (
                  <button
                    type="button"
                    onClick={() => setTitrantAddedMl(12.5)}
                    className="px-2.5 py-1 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-600/40 text-sky-300 text-[11px] font-bold transition-all cursor-pointer"
                  >
                    {isAr ? 'منتصف التكافؤ (12.5 ملل)' : 'Half-Eq (12.5 mL)'}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setTitrantAddedMl(currentSystem.eqVolumeMl)}
                  className="px-2.5 py-1 rounded-lg bg-amber-950 hover:bg-amber-900 border border-amber-600/40 text-amber-300 text-[11px] font-bold transition-all cursor-pointer"
                >
                  {isAr ? `نقطة التكافؤ (${currentSystem.eqVolumeMl} ملل)` : `Equivalence (${currentSystem.eqVolumeMl} mL)`}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Flask & Live Digital pH Meter HUD (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {/* Digital pH Meter Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                {isAr ? 'جهاز قياس الرقم الهيدروجيني الرقمي' : 'Digital pH Meter (Glass Electrode)'}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="flex items-baseline justify-between bg-slate-950 p-3.5 rounded-2xl border border-slate-800 shadow-inner">
              <span className="text-xs font-bold text-slate-400">{isAr ? 'قراءة المجس:' : 'pH Probe:'}</span>
              <div className="text-right">
                <span className="text-4xl font-black font-mono tracking-tight text-emerald-400">
                  {isAr ? toHindiDigits(currentPH.toFixed(2)) : currentPH.toFixed(2)}
                </span>
                <span className="text-xs text-slate-500 ml-1 font-mono">pH</span>
              </div>
            </div>

            {/* Chemical State Alert Chip */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-slate-400">{isAr ? 'حالة المحلول:' : 'Solution State:'}</span>
              <span
                className={`font-bold px-2 py-0.5 rounded-md ${
                  currentPH < 6.8
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : currentPH > 7.2
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {currentPH < 6.8
                  ? isAr ? 'وسط حمضي' : 'Acidic'
                  : currentPH > 7.2
                  ? isAr ? 'وسط قاعدي' : 'Basic / Alkaline'
                  : isAr ? 'وسط متعادل' : 'Neutral'}
              </span>
            </div>

            {isEquivalenceReached && (
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs text-amber-200 flex items-center gap-2 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold">
                  {isAr
                    ? 'تم الوصول إلى نقطة التكافؤ الدقيقة (Equivalence Point)!'
                    : 'Exact Equivalence Point Reached!'}
                </span>
              </div>
            )}

            {isHalfEquivalence && (
              <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-xs text-cyan-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-bold">
                  {isAr
                    ? `منطقة المحلول المنظم: [CH₃COOH] = [CH₃COO⁻] فتكون pH = pKa = ${currentSystem.pKa1}`
                    : `Buffer Midpoint: [HA] = [A⁻] hence pH = pKa = ${currentSystem.pKa1}`}
                </span>
              </div>
            )}
          </div>

          {/* Simulated Conical Flask with Live Fluid Color */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl space-y-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">
                {isAr ? 'الدورق المخروطي والمظهر اللوني' : 'Conical Flask Visualizer'}
              </span>
              <button
                type="button"
                onClick={() => setIsStirring((prev) => !prev)}
                className={`text-[10px] px-2 py-0.5 rounded-md font-bold cursor-pointer transition-all ${
                  isStirring
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {isAr ? (isStirring ? 'التحريك المغناطيسي: يعمل' : 'التحريك: متوقف') : isStirring ? 'Stirrer: ON' : 'Stirrer: OFF'}
              </button>
            </div>

            {/* Flask SVG Graphic */}
            <div className="flex items-center justify-center p-2">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl">
                  {/* Glass Flask Outline */}
                  <path
                    d="M 65 20 L 95 20 L 95 45 L 135 130 C 140 140, 135 150, 120 150 L 40 150 C 25 150, 20 140, 25 130 L 65 45 Z"
                    fill="#0f172a"
                    stroke="#475569"
                    strokeWidth="3"
                  />

                  {/* Liquid inside Flask */}
                  <path
                    d="M 45 95 Q 80 92 115 95 L 130 132 C 135 142, 130 148, 118 148 L 42 148 C 30 148, 25 142, 30 132 Z"
                    fill={indicatorColor.bg}
                    fillOpacity="0.85"
                    className="transition-all duration-500"
                  />

                  {/* Graduations marks */}
                  <line x1="50" y1="110" x2="65" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="45" y1="125" x2="62" y2="125" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* Magnetic Stirrer Bar */}
                  {isStirring && (
                    <ellipse
                      cx="80"
                      cy="142"
                      rx="14"
                      ry="4"
                      fill="#ffffff"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      className="animate-spin origin-[80px_142px]"
                    />
                  )}
                </svg>

                {/* Drop animation dripping from burette tip */}
                {titrantAddedMl > 0 && titrantAddedMl < 50 && (
                  <div className="absolute top-2 w-2 h-3 rounded-full bg-cyan-400 opacity-80 animate-ping" />
                )}
              </div>
            </div>

            {/* Current Color Indicator Label */}
            <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400">{isAr ? 'لون الدليل الحالي:' : 'Indicator Color:'}</span>
              <span className="font-bold text-slate-100 flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full border border-white/40 shadow-xs inline-block"
                  style={{ backgroundColor: indicatorColor.bg }}
                />
                <span>{isAr ? indicatorColor.labelAr : indicatorColor.labelEn}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Governing Theory & Ministerial Equations Footer */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 text-xs shadow-md space-y-2 shrink-0">
        <div className="flex items-center gap-2 font-bold text-emerald-400">
          <Info className="w-4 h-4" />
          <span>{isAr ? 'المعادلة الكيميائية الحاكمة وقواعد الوزارة:' : 'Governing Reaction & Ministerial Guidelines:'}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <MathRenderer text={`$$${currentSystem.formulaAr}$$`} />
          </div>
          <p className="text-[11px] text-slate-400 max-w-xl leading-relaxed">
            {isAr ? currentSystem.descriptionAr : currentSystem.descriptionEn}
          </p>
        </div>
      </div>
    </div>
  );
};
