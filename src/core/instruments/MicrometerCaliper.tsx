import React, { useState } from 'react';
import { Target } from 'lucide-react';

import type { ThemeMode } from '../../types/curriculum';

interface MicrometerCaliperProps {
  lang?: 'en' | 'ar';
  theme?: ThemeMode;
  onMeasurementChange?: (measuredMm: number) => void;
}

export const MicrometerCaliper: React.FC<MicrometerCaliperProps> = ({
  lang = 'en',
  theme = 'dark',
  onMeasurementChange
}) => {
  const isAr = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Value in mm: range 0.00 to 25.00 mm
  const [currentValueMm, setCurrentValueMm] = useState<number>(5.74);
  const [zeroErrorMm, setZeroErrorMm] = useState<number>(0.0);

  // Specimen presets for physics exercises
  const specimens = [
    { nameEn: 'Thin Copper Wire', nameAr: 'سلك نحاسي رفيع', thickness: 0.82 },
    { nameEn: 'Microscope Cover Glass', nameAr: 'غطاء شريحة مجهرية', thickness: 0.17 },
    { nameEn: 'Steel Bearing Ball', nameAr: 'كرة فولاذية صغيرة', thickness: 6.35 },
    { nameEn: 'Standard Razor Blade', nameAr: 'شفرة حلاقة قياسية', thickness: 0.10 },
    { nameEn: 'Capillary Tube Wall', nameAr: 'جدار أنبوبة شعرية', thickness: 1.45 }
  ];

  const handleValueChange = (val: number) => {
    const clamped = Math.max(0, Math.min(25, parseFloat(val.toFixed(2))));
    setCurrentValueMm(clamped);
    if (onMeasurementChange) {
      onMeasurementChange(clamped - zeroErrorMm);
    }
  };

  const handleSelectSpecimen = (thickness: number) => {
    handleValueChange(thickness + zeroErrorMm);
  };

  // Main sleeve reading: whole millimeters and half millimeters
  const mainScaleMm = Math.floor(currentValueMm);
  const hasHalfMm = (currentValueMm - mainScaleMm) >= 0.5;
  const sleeveReading = mainScaleMm + (hasHalfMm ? 0.5 : 0.0);

  // Thimble circular reading: 0 to 49 divisions (each 0.01 mm)
  const remainder = currentValueMm - sleeveReading;
  const thimbleDivisions = Math.round(remainder * 100);

  const correctedReading = parseFloat((currentValueMm - zeroErrorMm).toFixed(2));

  return (
    <div
      className={`w-full font-sans transition-all duration-200 border-2 rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden ${
        isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-slate-200/50'
          : isContrast
          ? 'bg-black border-2 border-slate-700 text-white'
          : 'bg-slate-900/95 border-slate-800/80 text-slate-100'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`text-sm font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-900' : isContrast ? 'text-white' : 'text-slate-100'
            }`}>
              {isAr ? 'المايكرومتر الدقيق (Micrometer Caliper)' : 'Precision Micrometer Screw Gauge'}
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                isLight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                0.01 mm Resolution
              </span>
            </h4>
            <p className={`text-xs ${
              isLight ? 'text-slate-600' : isContrast ? 'text-slate-300' : 'text-slate-400'
            }`}>
              {isAr ? 'قياس الأبعاد الميكانيكية بدقة متناهية وفق تدريج الأسطوانة والقرص الدائري' : 'High-precision mechanical dimension verification with vernier thimble'}
            </p>
          </div>
        </div>

        {/* Zero Error Mode */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">{isAr ? 'الخطأ الصفري:' : 'Zero Error:'}</span>
          <select
            value={zeroErrorMm}
            onChange={e => {
              const ze = parseFloat(e.target.value);
              setZeroErrorMm(ze);
              if (onMeasurementChange) onMeasurementChange(currentValueMm - ze);
            }}
            className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-amber-300 font-mono text-xs focus:outline-none"
          >
            <option value={0.0}>{isAr ? 'بدون خطأ (0.00 mm)' : 'None (0.00 mm)'}</option>
            <option value={0.03}>{isAr ? 'موجب (+0.03 mm)' : 'Positive (+0.03 mm)'}</option>
            <option value={-0.02}>{isAr ? 'سالب (-0.02 mm)' : 'Negative (-0.02 mm)'}</option>
          </select>
        </div>
      </div>

      {/* SVG Interactive Graphic Diagram */}
      <div className="w-full bg-slate-950/80 rounded-2xl border border-slate-800 p-4 my-4 flex items-center justify-center overflow-x-auto">
        <svg viewBox="0 0 680 200" className="w-full max-w-2xl h-auto select-none">
          <defs>
            <linearGradient id="frameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="thimbleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="30%" stopColor="#94a3b8" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* U-shaped Heavy Cast Steel Frame */}
          <path
            d="M 120 40 C 20 40 20 180 120 180 L 260 180 C 330 180 340 140 340 110 L 280 110 C 280 145 250 150 150 150 C 70 150 70 70 150 70 L 280 70 L 280 40 Z"
            fill="url(#frameGrad)"
            stroke="#475569"
            strokeWidth="2"
          />

          {/* Anvil (fixed jaw) */}
          <rect x="150" y="70" width="18" height="24" fill="url(#steelGrad)" stroke="#334155" />

          {/* Spindle (movable measuring rod) */}
          {/* Movement gap depends on currentValueMm: 0mm = touch anvil at x=168; 25mm = x=268 */}
          {(() => {
            const spindleGap = (currentValueMm / 25) * 100;
            const spindleX = 168 + spindleGap;
            const thimbleX = 340 + spindleGap * 0.8;

            return (
              <g>
                {/* Spindle rod */}
                <rect x={spindleX} y="70" width={Math.max(10, 360 - spindleX)} height="24" fill="url(#steelGrad)" stroke="#334155" />

                {/* Main Sleeve (Barrel) with mm tick marks */}
                <rect x="290" y="65" width="160" height="34" fill="url(#steelGrad)" stroke="#475569" strokeWidth="1.5" />

                {/* Central Datum Line */}
                <line x1="295" y1="82" x2="445" y2="82" stroke="#0f172a" strokeWidth="1.5" />

                {/* Sleeve graduations: upper ticks (whole mm), lower ticks (0.5 mm) */}
                {Array.from({ length: 16 }).map((_, i) => {
                  const tx = 300 + i * 8.5;
                  if (tx > thimbleX) return null;
                  return (
                    <g key={i}>
                      {/* Upper 1mm tick */}
                      <line x1={tx} y1="82" x2={tx} y2={i % 5 === 0 ? "70" : "74"} stroke="#0f172a" strokeWidth="1.2" />
                      {i % 5 === 0 && (
                        <text x={tx} y="68" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">
                          {i}
                        </text>
                      )}
                      {/* Lower 0.5mm tick */}
                      {i < 15 && (
                        <line x1={tx + 4.25} y1="82" x2={tx + 4.25} y2="90" stroke="#0f172a" strokeWidth="1" />
                      )}
                    </g>
                  );
                })}

                {/* Beveled Thimble */}
                <path
                  d={`M ${thimbleX} 60 L ${thimbleX + 25} 64 L ${thimbleX + 110} 64 L ${thimbleX + 110} 100 L ${thimbleX + 25} 100 L ${thimbleX} 104 Z`}
                  fill="url(#thimbleGrad)"
                  stroke="#334155"
                  strokeWidth="2"
                />

                {/* Thimble Scale Graduations */}
                {[-10, -5, 0, 5, 10].map((offset) => {
                  const divNum = (thimbleDivisions + offset + 50) % 50;
                  const ty = 82 - offset * 2.8;
                  if (ty < 65 || ty > 99) return null;
                  return (
                    <g key={offset}>
                      <line x1={thimbleX} y1={ty} x2={thimbleX + (offset % 5 === 0 ? 12 : 6)} y2={ty} stroke="#0f172a" strokeWidth="1" />
                      {offset % 5 === 0 && (
                        <text x={thimbleX + 16} y={ty + 3} fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="start">
                          {divNum}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Ratchet Knob */}
                <rect x={thimbleX + 110} y="72" width="35" height="20" rx="3" fill="#334155" stroke="#1e293b" />
                <line x1={thimbleX + 120} y1="72" x2={thimbleX + 120} y2="92" stroke="#64748b" />
                <line x1={thimbleX + 130} y1="72" x2={thimbleX + 130} y2="92" stroke="#64748b" />
              </g>
            );
          })()}

          {/* Caliper Label on Frame */}
          <text x="140" y="165" fill="#94a3b8" fontSize="10" fontWeight="bold" letterSpacing="1">
            0-25 mm  0.01 mm
          </text>
        </svg>
      </div>

      {/* Interactive Thimble Adjustment Slider */}
      <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300">
            {isAr ? 'تدوير جلبة المايكرومتر (Rotate Thimble):' : 'Rotate Thimble Position:'}
          </span>
          <span className="font-mono text-amber-400 font-bold">
            {currentValueMm.toFixed(2)} mm
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="25"
          step="0.01"
          value={currentValueMm}
          onChange={e => handleValueChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />

        {/* Specimen Buttons */}
        <div className="pt-2 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-400 block mb-2 font-medium">
            {isAr ? 'عينات قياس فيزيائية جاهزة للاختبار:' : 'Pre-calibrated Lab Test Specimens:'}
          </span>
          <div className="flex flex-wrap gap-2">
            {specimens.map((sp, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSpecimen(sp.thickness)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-all cursor-pointer"
              >
                {isAr ? sp.nameAr : sp.nameEn} ({sp.thickness} mm)
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Measurement Breakdown & Verification */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-slate-400 block">{isAr ? 'قراءة التدريج الثابت (Sleeve):' : 'Main Sleeve Reading:'}</span>
          <span className="font-mono text-cyan-400 font-bold text-sm">{sleeveReading.toFixed(2)} mm</span>
        </div>

        <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-slate-400 block">{isAr ? 'قراءة التدريج الدائري (Thimble):' : 'Thimble Reading:'}</span>
          <span className="font-mono text-amber-400 font-bold text-sm">
            {thimbleDivisions} × 0.01 = {(thimbleDivisions * 0.01).toFixed(2)} mm
          </span>
        </div>

        <div className="p-3 bg-slate-950/80 border border-emerald-500/30 rounded-xl space-y-1">
          <span className="text-emerald-400 block font-bold">{isAr ? 'السمك النهائي المصحح:' : 'Total Corrected Thickness:'}</span>
          <span className="font-mono text-emerald-300 font-black text-sm">
            {correctedReading.toFixed(2)} mm
          </span>
        </div>
      </div>
    </div>
  );
};
