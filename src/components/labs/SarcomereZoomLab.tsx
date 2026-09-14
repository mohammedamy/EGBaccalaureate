import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { toHindiDigits } from '../../utils/arabicNumerals';
import {
  Activity,
  Play,
  RotateCcw,
  Sparkles,
  Info,
  AlertTriangle,
  Zap,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export type ZoomLevel = 1 | 2 | 3 | 4;

export const SarcomereZoomLab: React.FC<Props> = ({ lang, theme = 'dark' }) => {
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Scale level: 1: Organism (Arm), 2: Tissue (Fascicle), 3: Cellular (Sarcomere), 4: Molecular (Cross-Bridge)
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(3);

  // Mechanical and Biochemical State
  // Resting length = 2.8 um, full contraction = 1.8 um
  const [sarcomereLength, setSarcomereLength] = useState<number>(2.5);
  const [atpLevel, setAtpLevel] = useState<number>(100); // 0 - 100%
  const [caLevel, setCaLevel] = useState<number>(80); // 0 - 100%
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [molecularStep, setMolecularStep] = useState<number>(2); // 1: Ca2+ bind, 2: Crossbridge, 3: Power stroke, 4: Detach

  // Sarcomere measurements derived
  const aBandLength = 1.5; // Constant length in um
  const hZoneLength = Math.max(0, parseFloat((sarcomereLength - 1.8).toFixed(2)));
  const iBandTotal = Math.max(0, parseFloat((sarcomereLength - aBandLength).toFixed(2)));
  const contractionPercent = Math.round(((2.8 - sarcomereLength) / (2.8 - 1.8)) * 100);

  // Arm flexion angle (180 deg = extended, 75 deg = flexed)
  const armAngle = 175 - contractionPercent * 0.95;
  // Biceps belly thickness (r_belly increases as length shortens)
  const bicepsRadius = 24 + contractionPercent * 0.18;

  // Rigor mortis trigger
  const isRigorMortis = atpLevel < 15 && caLevel > 30 && sarcomereLength < 2.3;

  // Twitch Animation Cycle
  const handleAnimateTwitch = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let t = 0;
    const interval = setInterval(() => {
      t++;
      if (t <= 12) {
        // Contraction phase
        setSarcomereLength((prev) => Math.max(1.85, parseFloat((prev - 0.08).toFixed(2))));
        setCaLevel((prev) => Math.min(100, prev + 3));
      } else if (t <= 24) {
        // Relaxation phase (if ATP available)
        if (atpLevel >= 20) {
          setSarcomereLength((prev) => Math.min(2.75, parseFloat((prev + 0.08).toFixed(2))));
          setCaLevel((prev) => Math.max(10, prev - 4));
        }
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 80);
  };

  const handleReset = () => {
    setSarcomereLength(2.6);
    setAtpLevel(100);
    setCaLevel(75);
    setMolecularStep(2);
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-6 transition-all ${
        isContrast
          ? 'bg-black border-2 border-rose-400 text-white'
          : isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
          : 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-xl'
      }`}
    >
      {/* Header & Multi-Scale Zoom Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black tracking-tight">
              {isArabic
                ? 'محاكي انقباض العضلات الهيكلية متعدد المقاييس (من العضو إلى الجزيء)'
                : 'Multi-Scale Skeletal Muscle Contraction Simulator'}
            </h3>
          </div>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {isArabic
              ? 'تدرج مجهري تفاعلي: الذراع (العضو) ⟵ الحزمة العضلية (النسيج) ⟵ الساركومير (الخلية) ⟵ خيوط الأكتين والميوسين وATP (الجزيء)'
              : 'Interactive 4-level zoom: Arm (Organism) ⟶ Muscle Fascicle (Tissue) ⟶ Sarcomere (Cellular) ⟶ Actin/Myosin Cross-Bridges (Molecular)'}
          </p>
        </div>

        {/* 4-Scale Zoom Selector Buttons */}
        <div
          className={`flex items-center p-1 rounded-xl border ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
          }`}
        >
          {[
            { level: 1 as ZoomLevel, labelEn: '1. Arm (Macro)', labelAr: '١. العضو (الذراع)' },
            { level: 2 as ZoomLevel, labelEn: '2. Fascicle (Tissue)', labelAr: '٢. النسيج (الحزمة)' },
            { level: 3 as ZoomLevel, labelEn: '3. Sarcomere (Cell)', labelAr: '٣. الخلية (الساركومير)' },
            { level: 4 as ZoomLevel, labelEn: '4. Actin/Myosin (Nano)', labelAr: '٤. الجزيء (الروابط)' },
          ].map((sc) => (
            <button
              key={sc.level}
              onClick={() => setZoomLevel(sc.level)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                zoomLevel === sc.level
                  ? 'bg-rose-600 text-white shadow-sm'
                  : isLight
                  ? 'text-slate-700 hover:text-slate-900'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isArabic ? sc.labelAr : sc.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage for Selected Zoom Level */}
      <div className="mt-5">
        {/* SCALE 1: ORGANISM / MACRO LEVEL (ARM & BICEPS FLEXION) */}
        {zoomLevel === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center min-h-[360px]">
              <svg viewBox="0 0 500 320" className="w-full max-h-[340px]">
                <defs>
                  <linearGradient id="armBoneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>
                  <linearGradient id="bicepsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                </defs>

                {/* Shoulder joint & Scapula anchor */}
                <circle cx="120" cy="70" r="16" fill="#64748b" />
                <text x="120" y="45" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {isArabic ? 'مفصل الكتف (لوح الكتف)' : 'Shoulder / Scapula'}
                </text>

                {/* Humerus Upper Arm Bone */}
                <line x1="120" y1="70" x2="220" y2="180" stroke="url(#armBoneGrad)" strokeWidth="18" strokeLinecap="round" />
                <text x="155" y="125" fill="#cbd5e1" fontSize="10" fontWeight="bold">
                  {isArabic ? 'عظمة العضد' : 'Humerus'}
                </text>

                {/* Elbow Hinge Joint */}
                <circle cx="220" cy="180" r="14" fill="#475569" />

                {/* Forearm (Radius/Ulna) rotating around elbow based on armAngle */}
                {(() => {
                  const rad = (armAngle * Math.PI) / 180;
                  const forearmLen = 170;
                  const handX = 220 + forearmLen * Math.sin(rad);
                  const handY = 180 + forearmLen * Math.cos(rad);

                  // Biceps muscle belly curve anchored between shoulder (120,70) and radius insertion (~250, 190)
                  const insertX = 220 + 35 * Math.sin(rad);
                  const insertY = 180 + 35 * Math.cos(rad);

                  return (
                    <g>
                      {/* Forearm Bone */}
                      <line x1="220" y1="180" x2={handX} y2={handY} stroke="url(#armBoneGrad)" strokeWidth="15" strokeLinecap="round" />
                      {/* Hand */}
                      <circle cx={handX} cy={handY} r="12" fill="#cbd5e1" />
                      <text x={handX + 15} y={handY + 5} fill="#cbd5e1" fontSize="10" fontWeight="bold">
                        {isArabic ? 'الكوع والساعد' : 'Forearm / Radius'}
                      </text>

                      {/* Biceps Tendon to Scapula */}
                      <line x1="120" y1="70" x2="150" y2="95" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
                      {/* Biceps Tendon to Radius */}
                      <line x1={insertX} y1={insertY} x2={insertX - 15} y2={insertY - 20} stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />

                      {/* Biceps Muscle Belly (bulges dynamically) */}
                      <path
                        d={`M 150 95 Q ${165 - bicepsRadius * 0.7} ${130 + bicepsRadius * 0.2} ${insertX - 15} ${insertY - 20} Q ${165 + bicepsRadius * 0.7} ${130 - bicepsRadius * 0.2} 150 95`}
                        fill="url(#bicepsGrad)"
                        stroke="#fb7185"
                        strokeWidth="2"
                      />
                      <text x="110" y="145" fill="#fda4af" fontSize="11" fontWeight="bold">
                        {isArabic ? 'العضلة ذات الرأسين (Biceps)' : 'Biceps Brachii'}
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Macro Status & Biomechanics */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-rose-400 block uppercase tracking-wider">
                  {isArabic ? 'الميكانيكا الحيوية للذراع:' : 'Biomechanics Readout:'}
                </span>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isArabic ? 'زاوية مفصل الكوع:' : 'Elbow Joint Angle:'}</span>
                  <span className="font-mono text-emerald-400 font-bold">{Math.round(armAngle)}°</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isArabic ? 'حالة العضلة ذات الرأسين:' : 'Biceps State:'}</span>
                  <span className="font-mono text-rose-400 font-bold">
                    {contractionPercent > 70
                      ? isArabic ? 'انقباض قوي (انتفاخ البطن)' : 'Fully Contracted (Bulged)'
                      : contractionPercent > 20
                      ? isArabic ? 'انقباض جزئي' : 'Partial Flexion'
                      : isArabic ? 'انبساط (طول راحة)' : 'Relaxed / Extended'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isArabic ? 'العضلة المقابلة (Triceps):' : 'Antagonistic Triceps:'}</span>
                  <span className="font-mono text-sky-400 font-semibold">{isArabic ? 'منبسطة' : 'Relaxed'}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                <Sparkles className="w-4 h-4 text-amber-400 inline mr-1" />
                <span>
                  {isArabic
                    ? 'قاعدة وزارية: تتصل العضلة الهيكلية بالعظام عبر الأوتار (نسيج ضام ليفي قوي غير مرن)، فتنقل قوة انقباض الساركوميرات إلى العظام مسببة الحركة عند المفاصل.'
                    : 'Ministerial Core Concept: Skeletal muscles attach to bones via inelastic tendons, translating microscopic sarcomere shortening into macroscopic skeletal joint movement.'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SCALE 2: TISSUE LEVEL (MUSCLE FASCICLE & SARCOLEMMA) */}
        {zoomLevel === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center min-h-[360px]">
              <svg viewBox="0 0 500 300" className="w-full max-h-[320px]">
                <defs>
                  <linearGradient id="fascicleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#881337" />
                  </linearGradient>
                </defs>

                {/* Muscle Belly Cutaway */}
                <ellipse cx="140" cy="150" rx="95" ry="110" fill="#4c0519" stroke="#f43f5e" strokeWidth="3" />
                <text x="140" y="30" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isArabic ? 'غشاء العضلة الخارجي (Epimysium)' : 'Epimysium (Outer Sheath)'}
                </text>

                {/* Fascicle Bundles inside Muscle Belly */}
                {[
                  { cx: 100, cy: 110, r: 28 },
                  { cx: 170, cy: 105, r: 26 },
                  { cx: 105, cy: 180, r: 30 },
                  { cx: 175, cy: 175, r: 32 },
                ].map((fas, idx) => (
                  <circle
                    key={idx}
                    cx={fas.cx}
                    cy={fas.cy}
                    r={fas.r}
                    fill="url(#fascicleGrad)"
                    stroke="#fb7185"
                    strokeWidth="2"
                  />
                ))}

                {/* Zoomed Out Single Fascicle Extending to the Right */}
                <path d="M 175 143 L 340 100 L 340 200 L 175 207 Z" fill="rgba(225, 29, 72, 0.25)" stroke="#f43f5e" strokeDasharray="4 4" />

                {/* Zoomed Fascicle Cylinder */}
                <ellipse cx="340" cy="150" rx="45" ry="55" fill="#9f1239" stroke="#fda4af" strokeWidth="2.5" />
                <text x="340" y="80" fill="#fecdd3" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isArabic ? 'حزمة عضلية (Fascicle)' : 'Muscle Fascicle'}
                </text>

                {/* Individual Muscle Fibers within Fascicle */}
                {[
                  { cx: 325, cy: 130, r: 12 },
                  { cx: 355, cy: 135, r: 12 },
                  { cx: 330, cy: 165, r: 13 },
                  { cx: 360, cy: 168, r: 12 },
                ].map((fib, fidx) => (
                  <circle key={fidx} cx={fib.cx} cy={fib.cy} r={fib.r} fill="#e11d48" stroke="#fff" strokeWidth="1" />
                ))}

                {/* Single Myofibril extraction extending further */}
                <line x1="360" y1="168" x2="440" y2="168" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                <text x="445" y="172" fill="#fbbf24" fontSize="10" fontWeight="bold">
                  {isArabic ? 'لييفة (Myofibril)' : 'Myofibril'}
                </text>
              </svg>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
                <span className="font-bold text-rose-400 block uppercase tracking-wider">
                  {isArabic ? 'التسلسل الهيكلي للنسيج العضلي:' : 'Hierarchical Anatomy:'}
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {isArabic
                    ? 'تتكون العضلة من عدد كبير من الحزم العضلية (Fascicles) المحاطة بغشاء الحزمة (Perimysium). وتحتوي كل حزمة على مجموعة ألياف عضلية (خلايا أسطوانية عديدة الأنوية) يتراوح عددها بين ٥ إلى ١٠٠ ليفة.'
                    : 'The whole muscle consists of fascicles surrounded by perimysium. Each fascicle houses 5 to 100 multinucleated muscle fibers (cells), each packed with 1,000 to 2,000 myofibrils.'}
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-emerald-400 text-[11px]">
                  {isArabic ? '١ ليفة عضلية = ١٠٠٠ إلى ٢٠٠٠ لييفة' : '1 Muscle Fiber = 1,000–2,000 Myofibrils'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCALE 3: CELLULAR LEVEL (MYOFIBRIL & SARCOMERE SLIDING FILAMENT) */}
        {zoomLevel === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black flex items-center gap-2 text-rose-400">
                  <Activity className="w-4 h-4" />
                  <span>{isArabic ? 'المحاكاة الدقيقة لانزلاق خيوط الساركومير:' : 'Sarcomere Ultrastructure Plane:'}</span>
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400">{isArabic ? 'طول الساركومير:' : 'Length:'}</span>
                  <span className="font-extrabold text-rose-400">
                    {isArabic ? `${toHindiDigits(sarcomereLength.toFixed(2))} ميكرون` : `${sarcomereLength.toFixed(2)} µm`}
                  </span>
                </div>
              </div>

              {/* SVG Sarcomere Diagram */}
              <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner overflow-x-auto">
                <svg viewBox="0 0 600 240" className="w-full min-w-[500px] h-48 sm:h-56">
                  <defs>
                    <linearGradient id="myosinGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="actinGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#fb923c" />
                    </linearGradient>
                  </defs>

                  {(() => {
                    const scale = 140; // px per um
                    const center = 300;
                    const halfLen = (sarcomereLength * scale) / 2;
                    const zLeft = center - halfLen;
                    const zRight = center + halfLen;
                    const aHalf = (aBandLength * scale) / 2;
                    const hHalf = (hZoneLength * scale) / 2;

                    return (
                      <g>
                        {/* A-Band (Constant Length) */}
                        <rect
                          x={center - aHalf}
                          y="15"
                          width={aHalf * 2}
                          height="190"
                          fill="#a855f7"
                          fillOpacity="0.12"
                          stroke="#a855f7"
                          strokeDasharray="4 4"
                          strokeWidth="1"
                        />
                        <text x={center} y="28" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">
                          {isArabic ? 'المنطقة الداكنة A (ثابتة الطول: ١.٥ µm)' : 'A-Band (Constant: 1.5 µm)'}
                        </text>

                        {/* H-Zone (Variable) */}
                        {hHalf > 4 && (
                          <g>
                            <rect
                              x={center - hHalf}
                              y="35"
                              width={hHalf * 2}
                              height="150"
                              fill="#fbbf24"
                              fillOpacity="0.15"
                              stroke="#f59e0b"
                              strokeWidth="1"
                            />
                            <text x={center} y="115" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
                              {isArabic
                                ? `المنطقة شبه المضيئة H (${toHindiDigits(hZoneLength.toFixed(2))}µm)`
                                : `H-Zone (${hZoneLength.toFixed(2)} µm)`}
                            </text>
                          </g>
                        )}

                        {/* Left Z-Line */}
                        <path
                          d={`M ${zLeft} 20 L ${zLeft - 6} 40 L ${zLeft + 6} 60 L ${zLeft - 6} 80 L ${zLeft + 6} 100 L ${zLeft - 6} 120 L ${zLeft + 6} 140 L ${zLeft - 6} 160 L ${zLeft + 6} 180 L ${zLeft} 200`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <text x={zLeft} y="225" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
                          {isArabic ? 'خط Z' : 'Z-Line'}
                        </text>

                        {/* Right Z-Line */}
                        <path
                          d={`M ${zRight} 20 L ${zRight - 6} 40 L ${zRight + 6} 60 L ${zRight - 6} 80 L ${zRight + 6} 100 L ${zRight - 6} 120 L ${zRight + 6} 140 L ${zRight - 6} 160 L ${zRight + 6} 180 L ${zRight} 200`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <text x={zRight} y="225" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
                          {isArabic ? 'خط Z' : 'Z-Line'}
                        </text>

                        {/* Central M-Line */}
                        <line x1={center} y1="20" x2={center} y2="200" stroke="#e2e8f0" strokeDasharray="3 3" strokeWidth="1.5" />
                        <text x={center} y="225" textAnchor="middle" fill="#94a3b8" fontSize="10">
                          {isArabic ? 'خط M' : 'M-Line'}
                        </text>

                        {/* Thick Myosin Filaments */}
                        {[60, 100, 140].map((y) => (
                          <g key={`myo-${y}`}>
                            <rect x={center - aHalf} y={y - 5} width={aHalf * 2} height="10" rx="4" fill="url(#myosinGrad2)" />
                            {/* Cross-Bridges */}
                            {[-60, -35, -15, 15, 35, 60].map((dx) => (
                              <g key={`head-${dx}`}>
                                <circle cx={center + dx} cy={y - 8} r="3.5" fill="#ec4899" />
                                <line x1={center + dx} y1={y - 5} x2={center + dx} y2={y - 8} stroke="#ec4899" strokeWidth="2" />
                                <circle cx={center + dx} cy={y + 8} r="3.5" fill="#ec4899" />
                                <line x1={center + dx} y1={y + 5} x2={center + dx} y2={y + 8} stroke="#ec4899" strokeWidth="2" />
                              </g>
                            ))}
                          </g>
                        ))}

                        {/* Thin Actin Filaments attached to Z-lines */}
                        {[45, 75, 125, 155].map((y) => {
                          const actinLength = 1.0 * scale;
                          return (
                            <g key={`act-${y}`}>
                              <line
                                x1={zLeft}
                                y1={y}
                                x2={zLeft + actinLength}
                                y2={y}
                                stroke="url(#actinGrad2)"
                                strokeWidth="5"
                                strokeLinecap="round"
                              />
                              <line
                                x1={zRight}
                                y1={y}
                                x2={zRight - actinLength}
                                y2={y}
                                stroke="url(#actinGrad2)"
                                strokeWidth="5"
                                strokeLinecap="round"
                              />
                            </g>
                          );
                        })}
                      </g>
                    );
                  })()}
                </svg>
              </div>
            </div>

            {/* Quantitative Zone Status Table */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
                <h4 className="font-black text-rose-400 flex items-center gap-1.5 mb-2">
                  <Info className="w-4 h-4" />
                  <span>{isArabic ? 'جدول القياسات الدقيقة للمناطق:' : 'Quantitative Band Status:'}</span>
                </h4>
                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">{isArabic ? 'المسافة بين خطي Z:' : 'Z-Discs Distance:'}</span>
                  <span className="font-mono font-bold text-emerald-400">{sarcomereLength.toFixed(2)} µm</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">{isArabic ? 'المنطقة H (شبه المضيئة):' : 'H-Zone Width:'}</span>
                  <span className="font-mono font-bold text-amber-400">
                    {hZoneLength === 0 ? (isArabic ? '٠ µm (تنعدم)' : '0 µm (Vanish)') : `${hZoneLength.toFixed(2)} µm`}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">{isArabic ? 'المنطقة A (الداكنة):' : 'A-Band Length:'}</span>
                  <span className="font-mono font-bold text-purple-400">{aBandLength.toFixed(2)} µm (ثابتة)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-300">{isArabic ? 'المنطقة I (المضيئة):' : 'I-Band Length:'}</span>
                  <span className="font-mono font-bold text-orange-400">{iBandTotal.toFixed(2)} µm (تقل)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCALE 4: NANOSCALE / MOLECULAR LEVEL (ACTIN, MYOSIN, Ca2+, ATP HUXLEY CYCLE) */}
        {zoomLevel === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {isArabic ? 'دورة الروابط المستعرضة الجزيئية (Huxley Cross-Bridge Cycle):' : 'Molecular Cross-Bridge Cycle:'}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {isArabic ? `المرحلة ${molecularStep} من ٤` : `Step ${molecularStep} of 4`}
                </span>
              </div>

              {/* Molecular Interactive Canvas */}
              <div className="w-full bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex items-center justify-center min-h-[220px]">
                <svg viewBox="0 0 450 180" className="w-full max-h-[200px]">
                  {/* Actin Thin Filament Strand (Top) */}
                  <g>
                    {/* Tropomyosin ribbon */}
                    <path
                      d="M 20 40 Q 120 48 220 40 Q 320 48 420 40"
                      fill="none"
                      stroke={caLevel > 40 ? '#10b981' : '#f59e0b'}
                      strokeWidth="3"
                    />
                    {/* Actin globule pearls */}
                    {[40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390].map((ax, idx) => (
                      <circle key={idx} cx={ax} cy="38" r="8" fill="#fb923c" stroke="#ea580c" strokeWidth="1" />
                    ))}
                    {/* Troponin Complex with Ca2+ */}
                    <circle cx="215" cy="28" r="7" fill={caLevel > 40 ? '#38bdf8' : '#64748b'} />
                    <text x="215" y="16" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle">
                      {caLevel > 40 ? 'Ca²⁺ bound' : 'Troponin'}
                    </text>
                  </g>

                  {/* Myosin Thick Filament & Head (Bottom) */}
                  <g>
                    {/* Myosin Backbone */}
                    <rect x="20" y="145" width="400" height="18" rx="6" fill="#8b5cf6" />
                    <text x="50" y="158" fill="#e9d5ff" fontSize="10" fontWeight="bold">
                      {isArabic ? 'خيط الميوسين السميك' : 'Thick Myosin Filament'}
                    </text>

                    {/* Dynamic Myosin Head Neck & Globe */}
                    {(() => {
                      // Angle depending on molecular step
                      let headX = 220;
                      let headY = 85;
                      let angle = 0; // 0 is vertical/cocked, 45 is power stroke

                      if (molecularStep === 3) {
                        // Power stroke tilt
                        headX = 195;
                        headY = 55;
                        angle = -35;
                      } else if (molecularStep === 2) {
                        // Attached 90 deg
                        headX = 220;
                        headY = 50;
                      } else if (molecularStep === 4) {
                        // Detached
                        headX = 220;
                        headY = 90;
                      }

                      return (
                        <g>
                          {/* Arm from thick filament */}
                          <line x1="220" y1="145" x2={headX} y2={headY + 15} stroke="#ec4899" strokeWidth="4" />
                          {/* S1 Globular Head */}
                          <ellipse
                            cx={headX}
                            cy={headY}
                            rx="14"
                            ry="10"
                            transform={`rotate(${angle} ${headX} ${headY})`}
                            fill="#f43f5e"
                            stroke="#fff"
                            strokeWidth="1.5"
                          />
                          {/* Bound Nucleotide (ATP / ADP+Pi) */}
                          <text x={headX + 18} y={headY + 4} fill="#fde047" fontSize="10" fontWeight="bold">
                            {molecularStep === 2
                              ? 'ADP + Pi'
                              : molecularStep === 3
                              ? 'Power Stroke (Pi released)'
                              : molecularStep === 4
                              ? 'ATP binds ⟶ Detach'
                              : 'Resting (ADP+Pi)'}
                          </text>
                        </g>
                      );
                    })()}
                  </g>
                </svg>
              </div>

              {/* Step Navigation Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[
                  { id: 1, labelEn: '1. Ca²⁺ Binds', labelAr: '١. ارتباط الكالسيوم' },
                  { id: 2, labelEn: '2. Cross-Bridge', labelAr: '٢. تكوين الرابطة' },
                  { id: 3, labelEn: '3. Power Stroke', labelAr: '٣. حركة الشد' },
                  { id: 4, labelEn: '4. ATP Detachment', labelAr: '٤. انفصال بـ ATP' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setMolecularStep(st.id)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      molecularStep === st.id
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isArabic ? st.labelAr : st.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Molecular Biochemistry Panel */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-rose-400 block uppercase tracking-wider">
                  {isArabic ? 'المتحكمات الكيميائية الحيوية:' : 'Biochemical Sliders:'}
                </span>

                {/* Ca2+ Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{isArabic ? 'تركيز أيونات الكالسيوم (Ca²⁺):' : 'Calcium (Ca²⁺) Level:'}</span>
                    <span className="font-mono text-cyan-400 font-bold">{caLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={caLevel}
                    onChange={(e) => setCaLevel(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* ATP Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{isArabic ? 'مستوى جزيئات ATP:' : 'Cellular ATP Level:'}</span>
                    <span className="font-mono text-amber-400 font-bold">{atpLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={atpLevel}
                    onChange={(e) => setAtpLevel(parseInt(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                {/* Rigor Mortis Alert */}
                {isRigorMortis && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500 text-rose-200 text-xs flex items-start gap-2 animate-pulse">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        {isArabic ? 'حالة شد عضلي مؤلم (Rigor Mortis):' : 'Severe Muscle Spasm Triggered:'}
                      </span>
                      <p className="text-[10px] text-rose-300 mt-0.5">
                        {isArabic
                          ? 'نقص جزيئات ATP يمنع انفصال الروابط المستعرضة عن الأكتين، فتظل العضلة في حالة انقباض مستمر.'
                          : 'Depleted ATP halts cross-bridge detachment, locking myosin heads onto actin filaments.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Global Mechanical Sliders & Action Bar (Available across all zoom scales) */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              <span>{isArabic ? 'التحكم العام في انقباض الساركومير:' : 'Master Sarcomere Contraction Slider:'}</span>
            </label>
            <span className="text-xs font-mono font-black text-rose-400">
              {sarcomereLength <= 1.9
                ? isArabic ? 'انقباض تام (تختفي H)' : 'Full Contraction (H disappears)'
                : sarcomereLength >= 2.7
                ? isArabic ? 'انبساط كامل (أقصى اتساع لـ H)' : 'Full Relaxation (Max H)'
                : isArabic ? 'انقباض جزئي' : 'Partial Contraction'}
            </span>
          </div>

          <input
            type="range"
            min="1.8"
            max="2.8"
            step="0.05"
            value={sarcomereLength}
            onChange={(e) => setSarcomereLength(parseFloat(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />

          <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
            <button
              onClick={handleAnimateTwitch}
              disabled={isAnimating}
              className="px-3.5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center gap-1.5 shadow-md shadow-rose-600/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تشغيل هزة عضلية كاملة (Twitch Cycle)' : 'Animate Muscle Twitch'}</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إعادة ضبط الحالة' : 'Reset to Resting'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
