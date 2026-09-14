import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import { MathRenderer } from '../MathRenderer';
import {
  Atom,
  Sliders,
} from 'lucide-react';

interface Props {
  lang: Language;
  theme?: ThemeMode;
}

export const AtomicLaserLab: React.FC<Props> = ({ lang, theme: _theme = 'dark' }) => {
  const isAr = lang === 'ar';

  const [mode, setMode] = useState<'bohr' | 'laser'>('bohr');

  // Bohr state
  const [n1, setN1] = useState<number>(2); // Lower level (1 to 5)
  const [n2, setN2] = useState<number>(3); // Upper level (n1 + 1 to 6)

  // He-Ne Laser state
  const [pumpIntensity, setPumpIntensity] = useState<number>(80); // %
  const [isDischargeActive, setIsDischargeActive] = useState<boolean>(true);
  const [laserAnimTick, setLaserAnimTick] = useState<number>(0);

  // Synchronize n2 if n1 >= n2
  useEffect(() => {
    if (n2 <= n1) {
      setN2(n1 + 1);
    }
  }, [n1, n2]);

  // Laser photon oscillation animation
  useEffect(() => {
    if (!isDischargeActive) return;
    const timer = setInterval(() => {
      setLaserAnimTick((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(timer);
  }, [isDischargeActive]);

  // Bohr Calculations
  const e1 = -13.6 / (n1 * n1);
  const e2 = -13.6 / (n2 * n2);
  const deltaE_eV = e2 - e1;
  const deltaE_J = deltaE_eV * 1.60218e-19;
  const lambda_nm = deltaE_eV > 0 ? 1239.84 / deltaE_eV : 0;
  const freq_PHz = deltaE_eV > 0 ? (3e8 / (lambda_nm * 1e-9)) / 1e15 : 0;

  // Series Name & Color
  let seriesNameEn = '';
  let seriesNameAr = '';
  let photonColor = '#a855f7'; // fallback
  let spectralRegionEn = '';
  let spectralRegionAr = '';

  if (n1 === 1) {
    seriesNameEn = 'Lyman Series';
    seriesNameAr = 'مجموعة ليمان';
    spectralRegionEn = 'Ultraviolet (UV)';
    spectralRegionAr = 'الأشعة فوق البنفسجية (UV)';
    photonColor = '#8b5cf6';
  } else if (n1 === 2) {
    seriesNameEn = 'Balmer Series';
    seriesNameAr = 'مجموعة بالمر';
    spectralRegionEn = 'Visible Light';
    spectralRegionAr = 'الضوء المنظور';
    if (n2 === 3) photonColor = '#ef4444'; // H-alpha 656nm Red
    else if (n2 === 4) photonColor = '#06b6d4'; // H-beta 486nm Cyan
    else if (n2 === 5) photonColor = '#3b82f6'; // H-gamma 434nm Blue
    else photonColor = '#8b5cf6'; // H-delta 410nm Violet
  } else if (n1 === 3) {
    seriesNameEn = 'Paschen Series';
    seriesNameAr = 'مجموعة باشن';
    spectralRegionEn = 'Near-Infrared (IR)';
    spectralRegionAr = 'الأشعة تحت الحمراء القريبة (IR)';
    photonColor = '#f43f5e';
  } else if (n1 === 4) {
    seriesNameEn = 'Brackett Series';
    seriesNameAr = 'مجموعة براكت';
    spectralRegionEn = 'Infrared (IR)';
    spectralRegionAr = 'الأشعة تحت الحمراء (IR)';
    photonColor = '#e11d48';
  } else {
    seriesNameEn = 'Pfund Series';
    seriesNameAr = 'مجموعة بفوند';
    spectralRegionEn = 'Far-Infrared (Far-IR)';
    spectralRegionAr = 'الأشعة تحت الحمراء البعيدة (Far-IR)';
    photonColor = '#be123c';
  }

  // Energy levels for SVG
  const levelYMap: Record<number, number> = {
    1: 240,
    2: 170,
    3: 125,
    4: 95,
    5: 72,
    6: 54,
  };

  return (
    <div className="space-y-6">
      {/* Sub-mode selector bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2">
          <Atom className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-black text-slate-100">
            {isAr ? 'مختبر أطياف بور الذرية وليزر الهيليوم نيون' : 'Bohr Atomic Spectra & He-Ne Laser Virtual Laboratory'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
          <button
            onClick={() => setMode('bohr')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === 'bohr' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAr ? 'طيف بور وانتقالات المستويات' : 'Bohr Spectral Transitions'}
          </button>
          <button
            onClick={() => setMode('laser')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === 'laser' ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isAr ? 'ليزر الهيليوم-نيون والتجويف الرنيني' : 'He-Ne Laser Resonator'}
          </button>
        </div>
      </div>

      {/* MODE 1: BOHR ATOMIC TRANSITIONS */}
      {mode === 'bohr' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Energy Ladder Canvas */}
          <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <svg viewBox="0 0 460 300" className="w-full max-w-[440px] h-auto overflow-visible select-none">
              <defs>
                <marker id="arrBohrTrans" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={photonColor} />
                </marker>
              </defs>

              {/* Energy Levels Horizontal Lines */}
              {[1, 2, 3, 4, 5, 6].map((n) => {
                const y = levelYMap[n];
                const isSelected = n === n1 || n === n2;
                return (
                  <g key={n}>
                    <line
                      x1="60"
                      y1={y}
                      x2="400"
                      y2={y}
                      stroke={isSelected ? '#38bdf8' : '#475569'}
                      strokeWidth={n === 1 ? 3 : isSelected ? 2.5 : 1.5}
                      className="transition-all"
                    />
                    <text
                      x="50"
                      y={y + 4}
                      textAnchor="end"
                      className={`text-[11px] font-black ${isSelected ? 'fill-sky-300' : 'fill-slate-400'}`}
                    >
                      n = {n}
                    </text>
                    <text
                      x="410"
                      y={y + 4}
                      className={`text-[10px] font-mono font-bold ${isSelected ? 'fill-sky-300' : 'fill-slate-400'}`}
                    >
                      {(-13.6 / (n * n)).toFixed(2)} eV
                    </text>
                  </g>
                );
              })}

              {/* Electron downward quantum jump transition arrow */}
              <line
                x1="230"
                y1={levelYMap[n2]}
                x2="230"
                y2={levelYMap[n1] - 4}
                stroke={photonColor}
                strokeWidth="3.5"
                markerEnd="url(#arrBohrTrans)"
              />

              {/* Electron starting and ending points */}
              <circle cx="230" cy={levelYMap[n2]} r="5" fill={photonColor} className="animate-pulse" />
              <circle cx="230" cy={levelYMap[n1]} r="4" fill="#38bdf8" />

              {/* Emitted Photon (Wavy arrow exiting sideways) */}
              <path
                d={`M 235 ${levelYMap[n1] + 15} Q 255 ${levelYMap[n1] - 5} 275 ${levelYMap[n1] + 15} T 315 ${levelYMap[n1] + 15}`}
                fill="none"
                stroke={photonColor}
                strokeWidth="2.5"
              />
              <polygon points={`325,${levelYMap[n1] + 15} 315,${levelYMap[n1] + 10} 315,${levelYMap[n1] + 20}`} fill={photonColor} />
              <text x="335" y={levelYMap[n1] + 19} className="text-[11px] font-black" fill={photonColor}>
                h·ν ({lambda_nm.toFixed(1)} nm)
              </text>
            </svg>

            {/* Interactive Optical Spectrum Bar */}
            <div className="w-full mt-3 px-4">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>UV (&lt; 380 nm)</span>
                <span className="text-violet-400">400 nm</span>
                <span className="text-sky-400">500 nm</span>
                <span className="text-emerald-400">550 nm</span>
                <span className="text-amber-400">600 nm</span>
                <span className="text-red-400">700 nm</span>
                <span>IR (&gt; 750 nm)</span>
              </div>
              <div className="h-4 rounded-full bg-gradient-to-r from-purple-700 via-blue-500 via-emerald-400 via-amber-400 to-red-600 relative overflow-hidden shadow-inner border border-slate-700">
                {/* Pointer marker for photon position */}
                {lambda_nm >= 380 && lambda_nm <= 750 && (
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
                    style={{ left: `${((lambda_nm - 380) / (750 - 380)) * 100}%` }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Controls & Calculations */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>{isAr ? 'محددات الانتقال الكمي' : 'Quantum Transition Levels'}</span>
              </h4>

              {/* Level n2 (Upper) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'المستوى الابتدائي المثار (n₂):' : 'Initial Excited Level (n₂):'}</span>
                  <span className="font-mono text-cyan-400 font-black">n₂ = {n2}</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[2, 3, 4, 5, 6].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setN2(lvl);
                        if (n1 >= lvl) setN1(lvl - 1);
                      }}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        n2 === lvl ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level n1 (Lower) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'المستوى النهائي الهابط إليه (n₁):' : 'Final Lower Level (n₁):'}</span>
                  <span className="font-mono text-cyan-400 font-black">n₁ = {n1}</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      disabled={lvl >= n2}
                      onClick={() => setN1(lvl)}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        n1 === lvl
                          ? 'bg-cyan-500 text-slate-950 font-black'
                          : lvl >= n2
                          ? 'opacity-30 cursor-not-allowed bg-slate-900 text-slate-600'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spectral Series Classification Badge */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                    {isAr ? 'السلسلة الطيفية' : 'Spectral Series'}
                  </span>
                  <span className="text-xs font-black px-2 py-0.5 rounded-md" style={{ backgroundColor: `${photonColor}22`, color: photonColor }}>
                    {isAr ? seriesNameAr : seriesNameEn}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-300 flex items-center justify-between pt-1">
                  <span>{isAr ? 'النطاق الإشعاعي:' : 'Radiation Region:'}</span>
                  <span className="font-bold text-slate-200">{isAr ? spectralRegionAr : spectralRegionEn}</span>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{isAr ? 'طاقة الفوتون المنبعث (ΔE):' : 'Photon Energy (ΔE):'}</span>
                    <span className="font-mono text-emerald-400 font-black">
                      {deltaE_eV.toFixed(3)} eV <span className="text-[10px] text-emerald-300 font-normal">({deltaE_J.toExponential(2)} J)</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{isAr ? 'الطول الموجي (λ):' : 'Wavelength (λ):'}</span>
                    <span className="font-mono text-cyan-400 font-black">{lambda_nm.toFixed(1)} nm</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{isAr ? 'التردد (ν):' : 'Frequency (ν):'}</span>
                    <span className="font-mono text-indigo-300">{freq_PHz.toFixed(3)} × 10¹⁵ Hz</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs">
                  <MathRenderer math="h\nu = E_2 - E_1 = 13.6\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)\,\text{eV}" lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: HE-NE LASER CAVITY */}
      {mode === 'laser' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center justify-center relative min-h-[380px]">
            <svg viewBox="0 0 500 280" className="w-full max-w-[480px] h-auto overflow-visible select-none">
              {/* Resonant Tube Body */}
              <rect x="70" y="80" width="360" height="90" rx="8" className="fill-slate-950 stroke-slate-700" strokeWidth="2.5" />
              <text x="250" y="70" textAnchor="middle" className="text-[11px] font-black fill-slate-300">
                {isAr ? 'أنبوبة كوارتز (خليط 10:1 هيليوم ونيون تحت ضغط 0.6 mmHg)' : 'He-Ne Gas Tube (10:1 Mixture @ 0.6 mmHg)'}
              </text>

              {/* Total Reflector Mirror R1 (Left, 99.9%) */}
              <rect x="60" y="70" width="12" height="110" rx="3" className="fill-slate-400 stroke-slate-200" strokeWidth="2" />
              <text x="66" y="200" textAnchor="middle" className="text-[9px] font-black fill-slate-300">R₁ = 99.9%</text>

              {/* Partial Reflector Mirror R2 (Right, 98% Output Coupler) */}
              <rect x="428" y="70" width="12" height="110" rx="3" className="fill-slate-400 stroke-slate-200" strokeWidth="2" />
              <text x="434" y="200" textAnchor="middle" className="text-[9px] font-black fill-slate-300">R₂ = 98%</text>

              {/* Electric Discharge Glow inside Tube */}
              {isDischargeActive && (
                <rect x="75" y="85" width="350" height="80" rx="6" fill="#ef4444" className="opacity-20 animate-pulse" />
              )}

              {/* Intracavity Coherent Standing Wave Beams */}
              {isDischargeActive && (
                <g>
                  {/* Multiple back-and-forth red laser beams */}
                  {[105, 125, 145].map((y, i) => (
                    <line key={i} x1="72" y1={y} x2="428" y2={y} stroke="#ef4444" strokeWidth="3" className="opacity-90 shadow-lg shadow-red-500" />
                  ))}
                  {/* Bouncing photon packets */}
                  <circle cx={75 + (laserAnimTick * 3.5) % 350} cy="125" r="4" fill="#ffffff" />
                  <circle cx={425 - (laserAnimTick * 3.5) % 350} cy="125" r="4" fill="#ffffff" />

                  {/* Output Coherent Beam (Collimated parallel beam exiting right) */}
                  <rect x="440" y="115" width="60" height="20" className="fill-red-600 opacity-90 shadow-xl shadow-red-500" />
                  <text x="470" y="105" textAnchor="middle" className="text-[10px] font-black fill-red-400">
                    632.8 nm
                  </text>
                </g>
              )}

              {/* Discharge Electrodes */}
              <path d="M 120 80 L 120 45 L 200 45" fill="none" stroke="#64748b" strokeWidth="2.5" />
              <path d="M 380 80 L 380 45 L 300 45" fill="none" stroke="#64748b" strokeWidth="2.5" />
              <rect x="200" y="35" width="100" height="20" rx="4" className="fill-slate-900 stroke-cyan-400" strokeWidth="2" />
              <text x="250" y="49" textAnchor="middle" className="text-[10px] font-black fill-cyan-300">
                {isDischargeActive ? (isAr ? 'تفريغ كهربي مستمر' : 'DC High Voltage') : (isAr ? 'المصدر متوقف' : 'Off')}
              </text>
            </svg>

            {/* He-Ne 4-Step Action Summary */}
            <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="font-black text-cyan-400">1. {isAr ? 'إثارة الهيليوم' : 'He Excitation'}</span>
                <p className="text-slate-400 mt-0.5">{isAr ? 'تصادم إلكترونات سريعة (20.61 eV)' : 'Inelastic electron collision'}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="font-black text-amber-400">2. {isAr ? 'نقل الطاقة الرنيني' : 'Energy Transfer'}</span>
                <p className="text-slate-400 mt-0.5">{isAr ? 'تصادم He* مع Ne لتقارب الطاقة' : 'Resonant collision He* + Ne'}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="font-black text-emerald-400">3. {isAr ? 'إسكان معكوس' : 'Inversion'}</span>
                <p className="text-slate-400 mt-0.5">{isAr ? 'تراكم ذرات Ne في المستوى 3s' : 'Ne 3s metastable accumulation'}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="font-black text-rose-400">4. {isAr ? 'انبعاث مستحث' : 'Emission'}</span>
                <p className="text-slate-400 mt-0.5">{isAr ? 'هبوط إلى 2p بشعاع 632.8 nm' : 'Coherent 632.8 nm output'}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>{isAr ? 'محددات تشغيل الليزر' : 'Laser Operational Controls'}</span>
              </h4>

              {/* Power Switch */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-bold text-slate-200">{isAr ? 'تفريغ الجهد العالي:' : 'HV Discharge:'}</span>
                <button
                  onClick={() => setIsDischargeActive(!isDischargeActive)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-black cursor-pointer transition-all ${
                    isDischargeActive ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {isDischargeActive ? (isAr ? 'شغال ON' : 'ACTIVE') : (isAr ? 'متوقف OFF' : 'STANDBY')}
                </button>
              </div>

              {/* Pumping Intensity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{isAr ? 'شدة الضخ الكهربي:' : 'Pumping Power:'}</span>
                  <span className="font-mono text-cyan-400 font-black">{pumpIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={pumpIntensity}
                  onChange={(e) => setPumpIntensity(Number(e.target.value))}
                  disabled={!isDischargeActive}
                  className="w-full accent-red-500 cursor-pointer disabled:opacity-30"
                />
              </div>

              {/* Specifications Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-red-900/40 space-y-2">
                <span className="text-[10px] uppercase font-black text-rose-400 tracking-wider">
                  {isAr ? 'خصائص حزمة ليزر الهيليوم-نيون' : 'He-Ne Laser Specifications'}
                </span>
                <div className="space-y-1 text-xs font-bold">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isAr ? 'الطول الموجي المنبعث:' : 'Emission Wavelength:'}</span>
                    <span className="font-mono text-red-400 font-black">632.8 nm (Red)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isAr ? 'طاقة فوتون الليزر:' : 'Photon Energy:'}</span>
                    <span className="font-mono text-slate-200">1.96 eV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isAr ? 'طاقة المستوى شبه المستقر He:' : 'He Metastable Level:'}</span>
                    <span className="font-mono text-slate-200">20.61 eV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{isAr ? 'طاقة المستوى شبه المستقر Ne:' : 'Ne Metastable Level:'}</span>
                    <span className="font-mono text-slate-200">20.66 eV</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  {isAr
                    ? 'الترابط المكاني والزماني للشعاع ينتج عن تحفيز الفوتونات المنعكسة بالتجويف لانبعاث فوتونات متفقة في الطور والاتجاه.'
                    : 'Spatial and temporal coherence arises from round-trip resonant photons stimulating identical in-phase emissions.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
