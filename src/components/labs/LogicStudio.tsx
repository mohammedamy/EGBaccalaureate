import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import type { Language } from '../../i18n/translations';
import {
  Brain,
  Binary,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Check,
  X,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Shield,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialMode?: 'truth_table' | 'syllogism' | 'mills_methods' | 'fuzzy_ai' | 'bioethics_matrix';
}

type LogicStudioMode = 'truth_table' | 'syllogism' | 'mills_methods' | 'fuzzy_ai' | 'bioethics_matrix';

// =========================================================================
// Schematic 1: Aristotelian Syllogism Euler / Venn Set Overlap Schematic
// =========================================================================
interface AristotelianSchematicProps {
  majorType: 'A' | 'E' | 'I' | 'O';
  minorType: 'A' | 'E' | 'I' | 'O';
  conclusionType: 'A' | 'E' | 'I' | 'O' | 'INVALID';
  middleTerm: string;
  majorTerm: string;
  minorTerm: string;
  isSyllogismValid: boolean;
  isArabic: boolean;
}

const AristotelianEulerVennVectorSchematic: React.FC<AristotelianSchematicProps> = ({
  majorType,
  minorType,
  conclusionType,
  middleTerm,
  majorTerm,
  minorTerm,
  isSyllogismValid,
  isArabic,
}) => {
  const [diagramMode, setDiagramMode] = useState<'euler' | 'venn'>('euler');
  const mood = `${majorType}${minorType}${conclusionType}`;

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-2xl relative overflow-hidden">
      {/* Background CAD Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Top Header & View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-slate-200 uppercase">
            {isArabic ? 'المخطط الهندسي الصوري لقياس أرسطو (أويلر وفن)' : 'Aristotelian Syllogism Euler & Venn Set Schematic'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex gap-1">
            <button
              type="button"
              onClick={() => setDiagramMode('euler')}
              className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                diagramMode === 'euler'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isArabic ? 'دوائر أويلر التداخلية (Euler Rings)' : 'Euler Concentric Rings'}
            </button>
            <button
              type="button"
              onClick={() => setDiagramMode('venn')}
              className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                diagramMode === 'venn'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isArabic ? 'مخطط فن الثلاثي (Venn 3-Circle)' : 'Venn 3-Circle Sets'}
            </button>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 680 260" className="w-full h-auto min-w-[580px] select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Venn Shading Hatch Pattern (for empty null sets) */}
            <pattern id="vennHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            </pattern>
            <radialGradient id="glowInnerSet" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* ============================================================== */}
          {/* VIEW A: EULER CONCENTRIC / CATEGORICAL INCLUSION RINGS         */}
          {/* ============================================================== */}
          {diagramMode === 'euler' && (
            <g>
              {/* Barbara (AAA): Concentric Inclusion S ⊂ M ⊂ P */}
              {mood === 'AAA' && (
                <g transform="translate(340, 130)">
                  {/* Outer Ring: Major Term P */}
                  <ellipse rx="190" ry="105" fill="#1e1b4b" fillOpacity="0.4" stroke="#6366f1" strokeWidth="2.5" />
                  <text x="140" y="-75" fill="#a5b4fc" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    {majorTerm} (P - الحد الأكبر)
                  </text>

                  {/* Middle Ring: Middle Term M */}
                  <ellipse rx="125" ry="70" fill="#2e1065" fillOpacity="0.5" stroke="#a855f7" strokeWidth="2.5" />
                  <text x="75" y="-45" fill="#d8b4fe" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    {middleTerm} (M - الحد الأوسط)
                  </text>

                  {/* Inner Ring: Minor Term S */}
                  <circle r="42" fill="url(#glowInnerSet)" stroke="#38bdf8" strokeWidth="3" />
                  <text x="0" y="4" fill="#bae6fd" fontSize="12" fontFamily="sans-serif" fontWeight="black" textAnchor="middle">
                    {minorTerm} (S)
                  </text>

                  {/* Deductive Inclusion Flow Annotation */}
                  <path d="M -150 90 L 150 90" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="0" y="105" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    S ⊂ M ⊂ P  ⟹  S ⊂ P (استغراق كلي وضرورة منطقية مطلقة)
                  </text>
                </g>
              )}

              {/* Celarent (EAE): Disjoint Sets (M containing S) and P excluded */}
              {mood === 'EAA' || mood === 'EAE' ? (
                <g transform="translate(340, 130)">
                  {/* Left Set: M containing S */}
                  <g transform="translate(-140, 0)">
                    <ellipse rx="120" ry="85" fill="#2e1065" fillOpacity="0.4" stroke="#a855f7" strokeWidth="2.5" />
                    <text x="0" y="-65" fill="#d8b4fe" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                      {middleTerm} (M)
                    </text>
                    <circle r="38" fill="url(#glowInnerSet)" stroke="#38bdf8" strokeWidth="3" />
                    <text x="0" y="4" fill="#bae6fd" fontSize="11" fontFamily="sans-serif" fontWeight="black" textAnchor="middle">
                      {minorTerm} (S)
                    </text>
                  </g>

                  {/* Exclusion Barrier Line */}
                  <line x1="0" y1="-95" x2="0" y2="95" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,4" />
                  <text x="0" y="-102" fill="#f87171" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    M ∩ P = ∅ (انفصال كلي)
                  </text>

                  {/* Right Set: P completely separate */}
                  <g transform="translate(140, 0)">
                    <ellipse rx="110" ry="85" fill="#1e1b4b" fillOpacity="0.4" stroke="#6366f1" strokeWidth="2.5" />
                    <text x="0" y="4" fill="#a5b4fc" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                      {majorTerm} (P)
                    </text>
                  </g>

                  {/* Annotation */}
                  <text x="0" y="112" fill="#f87171" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    S ⊂ M  و  M ∩ P = ∅  ⟹  لا واحد من {minorTerm} {majorTerm} (سالبة كلية)
                  </text>
                </g>
              ) : null}

              {/* Darii (AII) or Ferio (EIO) or Other Valid/Invalid */}
              {mood !== 'AAA' && mood !== 'EAE' && mood !== 'EAA' && (
                <g transform="translate(340, 130)">
                  {/* Left Circle: S */}
                  <ellipse cx="-110" cy="0" rx="95" ry="75" fill="#0369a1" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="-165" y="-55" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    {minorTerm} (S)
                  </text>

                  {/* Center Circle: M */}
                  <ellipse cx="0" cy="0" rx="95" ry="75" fill="#581c87" fillOpacity="0.25" stroke="#a855f7" strokeWidth="2.5" />
                  <text x="0" y="-85" fill="#d8b4fe" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                    {middleTerm} (M)
                  </text>

                  {/* Right Circle: P */}
                  <ellipse cx="110" cy="0" rx="95" ry="75" fill="#312e81" fillOpacity="0.25" stroke="#6366f1" strokeWidth="2.5" />
                  <text x="165" y="-55" fill="#a5b4fc" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    {majorTerm} (P)
                  </text>

                  {/* Particular Indicator Marker */}
                  <circle cx="-50" cy="0" r="14" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
                  <text x="-50" y="4" fill="#fbbf24" fontSize="12" fontFamily="monospace" fontWeight="black" textAnchor="middle">✕</text>

                  <text x="0" y="105" fill={isSyllogismValid ? '#34d399' : '#f87171'} fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    {isSyllogismValid
                      ? `Mood ${mood}: إنتاج جزئي سليم وفق قواعد الشكل الأول`
                      : `Mood ${mood}: خرق لقواعد الإنتاج — قياس عقيم غير منتج`}
                  </text>
                </g>
              )}
            </g>
          )}

          {/* ============================================================== */}
          {/* VIEW B: CLASSIC VENN 3-CIRCLE SET OVERLAP DIAGRAM             */}
          {/* ============================================================== */}
          {diagramMode === 'venn' && (
            <g transform="translate(340, 120)">
              {/* Circle M (Top Left) */}
              <circle cx="-65" cy="-35" r="75" fill="#581c87" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
              <text x="-120" y="-80" fill="#d8b4fe" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                M: {middleTerm}
              </text>

              {/* Circle P (Top Right) */}
              <circle cx="65" cy="-35" r="75" fill="#312e81" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
              <text x="90" y="-80" fill="#a5b4fc" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                P: {majorTerm}
              </text>

              {/* Circle S (Bottom Center) */}
              <circle cx="0" cy="55" r="75" fill="#0369a1" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="145" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                S: {minorTerm}
              </text>

              {/* Shading for Universal Premises */}
              {majorType === 'A' && (
                <path d="M -65 -110 A 75 75 0 0 1 0 -35 A 75 75 0 0 1 -65 40 A 75 75 0 0 1 -140 -35 A 75 75 0 0 1 -65 -110 Z" fill="url(#vennHatch)" opacity="0.6" />
              )}
              {majorType === 'E' && (
                <path d="M 0 -85 A 75 75 0 0 1 10 -35 A 75 75 0 0 1 0 15 A 75 75 0 0 1 -10 -35 A 75 75 0 0 1 0 -85 Z" fill="url(#vennHatch)" opacity="0.8" />
              )}

              {/* Center Tri-Intersection S ∩ M ∩ P */}
              <circle cx="0" cy="5" r="6" fill="#10b981" />
              <text x="0" y="8" fill="#d1fae5" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">S·M·P</text>
            </g>
          )}
        </svg>
      </div>

      {/* Schematic Footer Summary */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 border-t border-slate-800 pt-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-slate-300">ضرب القياس (Mood):</span>
          <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-700 text-purple-300 font-bold">
            {mood} (الشكل الأول - Figure 1)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isSyllogismValid ? 'bg-emerald-400' : 'bg-rose-400'}`} />
          <span className={isSyllogismValid ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
            {isSyllogismValid ? 'صحيح ومنتج بحكم الاستغراق الصوري' : 'عقيم لخرق شروط الشكل الأول'}
          </span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// Schematic 2: Fuzzy Logic Continuous Membership Function Curve
// =========================================================================
interface FuzzyMembershipSchematicProps {
  ambientTemp: number;
  fuzzy: { cold: number; comfortable: number; hot: number };
  binaryVerdict: string;
  isArabic: boolean;
}

const FuzzyContinuousMembershipVectorSchematic: React.FC<FuzzyMembershipSchematicProps> = ({
  ambientTemp,
  fuzzy,
  binaryVerdict,
  isArabic,
}) => {
  // Coordinate calculations: X maps [10, 35] -> [70, 610] (range 540px)
  const mapX = (temp: number) => 70 + ((temp - 10) / 25) * 540;
  // Y maps [0.0, 1.0] -> [190, 40] (range 150px inverted)
  const mapY = (mu: number) => 190 - mu * 150;

  const scanX = mapX(ambientTemp);

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-2xl relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-slate-200 uppercase">
            {isArabic ? 'منحنيات دالة الانتماء المستمرة μ(T) في المنطق المرن' : 'Lotfi Zadeh Continuous Fuzzy Membership Function μ(T)'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-blue-400">Cold: {(fuzzy.cold * 100).toFixed(0)}%</span>
          <span className="text-emerald-400">Comfortable: {(fuzzy.comfortable * 100).toFixed(0)}%</span>
          <span className="text-rose-400">Hot: {(fuzzy.hot * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Curves Coordinate Plane */}
      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 680 230" className="w-full h-auto min-w-[580px] select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradCold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="gradComfort" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="gradHot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Coordinate Axes & Grid Lines */}
          <line x1="70" y1="190" x2="620" y2="190" stroke="#334155" strokeWidth="2" />
          <line x1="70" y1="40" x2="70" y2="190" stroke="#334155" strokeWidth="2" />

          {/* Y-Ticks (μ = 0.0, 0.5, 1.0) */}
          <text x="50" y="44" fill="#94a3b8" fontSize="10" fontFamily="monospace">1.0</text>
          <line x1="65" y1="40" x2="620" y2="40" stroke="#1e293b" strokeDasharray="2,3" />

          <text x="50" y="119" fill="#94a3b8" fontSize="10" fontFamily="monospace">0.5</text>
          <line x1="65" y1="115" x2="620" y2="115" stroke="#1e293b" strokeDasharray="2,3" />

          <text x="50" y="194" fill="#94a3b8" fontSize="10" fontFamily="monospace">0.0</text>

          {/* X-Ticks for Temperature */}
          {[10, 15, 20, 25, 30, 35].map((temp) => (
            <g key={temp} transform={`translate(${mapX(temp)}, 0)`}>
              <line x1="0" y1="40" x2="0" y2="190" stroke="#1e293b" strokeDasharray="2,3" />
              <line x1="0" y1="190" x2="0" y2="196" stroke="#475569" strokeWidth="1.5" />
              <text x="0" y="210" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
                {temp}°C
              </text>
            </g>
          ))}

          {/* Curve 1: Cold Function (Blue) */}
          {/* 10°C to 16°C is 1.0, 16°C to 22°C drops to 0, remaining 0 */}
          <path
            d={`M ${mapX(10)} ${mapY(1.0)} L ${mapX(16)} ${mapY(1.0)} L ${mapX(22)} ${mapY(0.0)} L ${mapX(35)} ${mapY(0.0)}`}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />
          <path
            d={`M ${mapX(10)} ${mapY(1.0)} L ${mapX(16)} ${mapY(1.0)} L ${mapX(22)} ${mapY(0.0)} L ${mapX(10)} ${mapY(0.0)} Z`}
            fill="url(#gradCold)"
          />
          <text x={mapX(13)} y="32" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
            μ_Cold
          </text>

          {/* Curve 2: Comfortable Function (Emerald Triangular) */}
          {/* 0 up to 18°C, rises to 1.0 at 23°C, drops to 0 at 28°C */}
          <path
            d={`M ${mapX(10)} ${mapY(0.0)} L ${mapX(18)} ${mapY(0.0)} L ${mapX(23)} ${mapY(1.0)} L ${mapX(28)} ${mapY(0.0)} L ${mapX(35)} ${mapY(0.0)}`}
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
          />
          <path
            d={`M ${mapX(18)} ${mapY(0.0)} L ${mapX(23)} ${mapY(1.0)} L ${mapX(28)} ${mapY(0.0)} Z`}
            fill="url(#gradComfort)"
          />
          <text x={mapX(23)} y="32" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            μ_Comfort
          </text>

          {/* Curve 3: Hot Function (Rose) */}
          {/* 0 up to 24°C, rises to 1.0 at 30°C, remains 1.0 */}
          <path
            d={`M ${mapX(10)} ${mapY(0.0)} L ${mapX(24)} ${mapY(0.0)} L ${mapX(30)} ${mapY(1.0)} L ${mapX(35)} ${mapY(1.0)}`}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.5"
          />
          <path
            d={`M ${mapX(24)} ${mapY(0.0)} L ${mapX(30)} ${mapY(1.0)} L ${mapX(35)} ${mapY(1.0)} L ${mapX(35)} ${mapY(0.0)} Z`}
            fill="url(#gradHot)"
          />
          <text x={mapX(32)} y="32" fill="#f43f5e" fontSize="10" fontFamily="monospace" fontWeight="bold">
            μ_Hot
          </text>

          {/* Crisp Classical Binary Step Function (Dashed Purple Cliff at 25°C) */}
          <path
            d={`M ${mapX(10)} ${mapY(0.0)} L ${mapX(25)} ${mapY(0.0)} L ${mapX(25)} ${mapY(1.0)} L ${mapX(35)} ${mapY(1.0)}`}
            fill="none"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeDasharray="4,3"
            opacity="0.6"
          />

          {/* LIVE SCANNING LASER BEAM AT ambientTemp */}
          <g>
            <line x1={scanX} y1="35" x2={scanX} y2="195" stroke="#c084fc" strokeWidth="2.5" />
            <circle cx={scanX} cy="190" r="4" fill="#c084fc" />

            {/* Probe on Cold curve */}
            {fuzzy.cold > 0 && (
              <circle cx={scanX} cy={mapY(fuzzy.cold)} r="5" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
            )}

            {/* Probe on Comfortable curve */}
            {fuzzy.comfortable > 0 && (
              <circle cx={scanX} cy={mapY(fuzzy.comfortable)} r="5" fill="#10b981" stroke="#0f172a" strokeWidth="2" />
            )}

            {/* Probe on Hot curve */}
            {fuzzy.hot > 0 && (
              <circle cx={scanX} cy={mapY(fuzzy.hot)} r="5" fill="#f43f5e" stroke="#0f172a" strokeWidth="2" />
            )}

            {/* Scanning Beacon Badge */}
            <g transform={`translate(${scanX}, 20)`}>
              <rect x="-24" y="-12" width="48" height="16" rx="4" fill="#581c87" stroke="#c084fc" strokeWidth="1" />
              <text x="0" y="0" fill="#f3e8ff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                {ambientTemp}°C
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Comparison Telemetry Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-t border-slate-800 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">المنطق الأرسطي القاطع:</span>
          <span className="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-700/50 text-rose-300 font-bold">
            {binaryVerdict}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">المنطق المرن المستمر:</span>
          <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-700/50 text-purple-300 font-bold">
            μ ∈ [0.0 , 1.0] (استمرارية واقعية بلا قفزات حادة)
          </span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// Schematic 3: Beauchamp & Childress 4-Axis Bioethics Radar Chart
// =========================================================================
interface BioethicsRadarSchematicProps {
  autonomyScore: number;
  beneficenceScore: number;
  nonMaleficenceScore: number;
  justiceScore: number;
  titleEn: string;
  titleAr: string;
  officialVerdictEn: string;
  officialVerdictAr: string;
  isArabic: boolean;
}

const BioethicsRadarChartVectorSchematic: React.FC<BioethicsRadarSchematicProps> = ({
  autonomyScore,
  beneficenceScore,
  nonMaleficenceScore,
  justiceScore,
  titleEn,
  titleAr,
  officialVerdictEn,
  officialVerdictAr,
  isArabic,
}) => {
  const cx = 170;
  const cy = 135;
  const maxR = 95;

  // 4 Cardinal Axes:
  // North (0 deg): Autonomy
  // East (90 deg): Beneficence
  // South (180 deg): Non-Maleficence
  // West (270 deg): Justice
  const pAutonomy = { x: cx, y: cy - (autonomyScore / 100) * maxR };
  const pBeneficence = { x: cx + (beneficenceScore / 100) * maxR, y: cy };
  const pNonMaleficence = { x: cx, y: cy + (nonMaleficenceScore / 100) * maxR };
  const pJustice = { x: cx - (justiceScore / 100) * maxR, y: cy };

  const polygonPoints = `${pAutonomy.x},${pAutonomy.y} ${pBeneficence.x},${pBeneficence.y} ${pNonMaleficence.x},${pNonMaleficence.y} ${pJustice.x},${pJustice.y}`;

  const avgCompliance = Math.round((autonomyScore + beneficenceScore + nonMaleficenceScore + justiceScore) / 4);

  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
      {/* Background CAD Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-slate-200 uppercase">
            {isArabic ? 'مخطط الرادار لمعايير البيوتيقا الطبية الحيوية (بيتشامب وتشيلدرس)' : 'Beauchamp & Childress 4-Axis Biomedical Ethics Radar'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Overall Compliance:</span>
          <span className={`px-2.5 py-0.5 rounded font-bold ${
            avgCompliance >= 50 ? 'bg-emerald-950 border border-emerald-500 text-emerald-400' : 'bg-rose-950 border border-rose-500 text-rose-400'
          }`}>
            {avgCompliance}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2 relative z-10">
        {/* Radar SVG */}
        <div className="lg:col-span-6 flex justify-center">
          <svg viewBox="0 0 340 270" className="w-full max-w-[320px] h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="polyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Concentric Reference Rings (25%, 50%, 75%, 100%) */}
            {[0.25, 0.5, 0.75, 1.0].map((ratio) => {
              const r = maxR * ratio;
              return (
                <polygon
                  key={ratio}
                  points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`}
                  fill="none"
                  stroke={ratio === 0.5 ? '#f59e0b' : '#334155'}
                  strokeWidth={ratio === 0.5 ? 1.5 : 1}
                  strokeDasharray={ratio === 0.5 ? '4,2' : undefined}
                />
              );
            })}

            {/* 4 Cardinal Axis Lines */}
            <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#475569" strokeWidth="1.5" />
            <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#475569" strokeWidth="1.5" />

            {/* Ethical Permissibility 50% Threshold Marker */}
            <text x={cx + 5} y={cy - maxR * 0.5 - 3} fill="#f59e0b" fontSize="8" fontFamily="monospace">
              50% MoE Threshold
            </text>

            {/* Plotted Scenario Score Polygon */}
            <polygon
              points={polygonPoints}
              fill="url(#polyGrad)"
              stroke="#ec4899"
              strokeWidth="2.5"
            />

            {/* Vertex Nodes */}
            <circle cx={pAutonomy.x} cy={pAutonomy.y} r="4.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="1.5" />
            <circle cx={pBeneficence.x} cy={pBeneficence.y} r="4.5" fill="#10b981" stroke="#0f172a" strokeWidth="1.5" />
            <circle cx={pNonMaleficence.x} cy={pNonMaleficence.y} r="4.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.5" />
            <circle cx={pJustice.x} cy={pJustice.y} r="4.5" fill="#c084fc" stroke="#0f172a" strokeWidth="1.5" />

            {/* Axis Labels */}
            <text x={cx} y="20" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'الاستقلالية' : 'Autonomy'} ({autonomyScore}%)
            </text>
            <text x={cx + maxR + 10} y={cy + 4} fill="#10b981" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
              {isArabic ? 'المنفعة' : 'Beneficence'} ({beneficenceScore}%)
            </text>
            <text x={cx} y={cy + maxR + 22} fill="#f59e0b" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              {isArabic ? 'عدم الإضرار' : 'Non-Maleficence'} ({nonMaleficenceScore}%)
            </text>
            <text x={cx - maxR - 10} y={cy + 4} fill="#c084fc" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="end">
              {isArabic ? 'العدالة' : 'Justice'} ({justiceScore}%)
            </text>
          </svg>
        </div>

        {/* Telemetry Card */}
        <div className="lg:col-span-6 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">قضية النزاع الأخلاقي:</span>
            <span className="text-purple-300 font-bold text-sm font-sans">{isArabic ? titleAr : titleEn}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px]">الحكم المعياري المعتمد بوزارة التربية والتعليم:</span>
            <p className="text-slate-200 text-[11px] leading-relaxed mt-1 font-sans">
              {isArabic ? officialVerdictAr : officialVerdictEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// Main Logic Studio Component
// =========================================================================
export const LogicStudio: React.FC<Props> = ({
  lang,
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialMode = 'truth_table',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  const [activeMode, setActiveMode] = useState<LogicStudioMode>(initialMode);

  // -------------------------------------------------------------
  // Mode 1: Propositional Logic & Truth Table Lab
  // -------------------------------------------------------------
  type LogicOperator = 'conjunction' | 'disjunction' | 'conditional' | 'biconditional' | 'negation' | 'tautology_demo';
  const [selectedOp, setSelectedOp] = useState<LogicOperator>('conditional');
  const [pVal, setPVal] = useState<boolean>(true);
  const [qVal, setQVal] = useState<boolean>(false);

  const operatorsData: Record<LogicOperator, {
    symbol: string;
    latex: string;
    titleEn: string;
    titleAr: string;
    ruleEn: string;
    ruleAr: string;
    table: Array<{ p: boolean; q?: boolean; result: boolean; stepTextEn: string; stepTextAr: string }>;
    tautologyClass: 'contingent' | 'tautology' | 'contradiction';
  }> = {
    negation: {
      symbol: '~p',
      latex: '\\sim p',
      titleEn: 'Negation / Denial (السلب أو النفي)',
      titleAr: 'دالة النفي أو السلب (~ق)',
      ruleEn: 'Reverses the truth value: True becomes False, False becomes True. ($T \\to F, F \\to T$).',
      ruleAr: 'قاعدتها: إذا صدقت قضية معينة كذب سلبها، وإذا كذبت صدق سلبها. لا يصدقان معاً ولا يكذبان معاً.',
      table: [
        { p: true, result: false, stepTextEn: 'p is True -> ~p is False', stepTextAr: 'ق صادقة -> ~ق كاذبة' },
        { p: false, result: true, stepTextEn: 'p is False -> ~p is True', stepTextAr: 'ق كاذبة -> ~ق صادقة' }
      ],
      tautologyClass: 'contingent'
    },
    conjunction: {
      symbol: 'p ∧ q',
      latex: 'p \\land q',
      titleEn: 'Conjunction (عطف / وصل)',
      titleAr: 'دالة الوصل أو العطف (ق . ل)',
      ruleEn: 'True ONLY when BOTH conjuncts are True. False in all other 3 scenarios.',
      ruleAr: 'قاعدتها: يصدق الوصل في حالة واحدة فقط، وهي صدق الطرفين معاً، ويكذب إذا كذب أحدهما أو كلاهما.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Conjunction is TRUE', stepTextAr: 'صادقان معاً -> الوصل صادق' },
        { p: true, q: false, result: false, stepTextEn: 'q is False -> Conjunction is FALSE', stepTextAr: 'ل كاذبة -> الوصل كاذب' },
        { p: false, q: true, result: false, stepTextEn: 'p is False -> Conjunction is FALSE', stepTextAr: 'ق كاذبة -> الوصل كاذب' },
        { p: false, q: false, result: false, stepTextEn: 'Both False -> Conjunction is FALSE', stepTextAr: 'كاذبان معاً -> الوصل كاذب' }
      ],
      tautologyClass: 'contingent'
    },
    disjunction: {
      symbol: 'p ∨ q',
      latex: 'p \\lor q',
      titleEn: 'Inclusive Disjunction (الانفصال الضعيف)',
      titleAr: 'دالة الانفصال (ق v ل)',
      ruleEn: 'False ONLY when BOTH disjuncts are False. True if at least one disjunct is True.',
      ruleAr: 'قاعدتها: يصدق الانفصال إذا صدق أحد طرفيه أو كلاهما، ويكذب في حالة واحدة فقط: كذب الطرفين معاً.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Disjunction is TRUE', stepTextAr: 'صادقان معاً -> الانفصال صادق' },
        { p: true, q: false, result: true, stepTextEn: 'p is True -> Disjunction is TRUE', stepTextAr: 'ق صادقة -> الانفصال صادق' },
        { p: false, q: true, result: true, stepTextEn: 'q is True -> Disjunction is TRUE', stepTextAr: 'ل صادقة -> الانفصال صادق' },
        { p: false, q: false, result: false, stepTextEn: 'Both False -> Disjunction is FALSE', stepTextAr: 'كاذبان معاً -> الانفصال كاذب' }
      ],
      tautologyClass: 'contingent'
    },
    conditional: {
      symbol: 'p → q',
      latex: 'p \\rightarrow q',
      titleEn: 'Conditional / Implication (الشرط / اللزوم)',
      titleAr: 'دالة الشرط أو اللزوم (ق ← ل)',
      ruleEn: 'False ONLY when the antecedent (p) is True and the consequent (q) is False ($T \\to F$).',
      ruleAr: 'قاعدتها: تكذب دالة الشرط في حالة واحدة فقط: صدق المقدم وكذب التالي، وتصدق في بقية الحالات الثلاث.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'True Antecedent + True Consequent -> TRUE', stepTextAr: 'مقدم صادق + تالٍ صادق -> الشرط صادق' },
        { p: true, q: false, result: false, stepTextEn: 'True Antecedent + False Consequent -> FALSE (Broken Promise)', stepTextAr: 'مقدم صادق + تالٍ كاذب -> الشرط كاذب (انكسار اللزوم)' },
        { p: false, q: true, result: true, stepTextEn: 'False Antecedent + True Consequent -> TRUE', stepTextAr: 'مقدم كاذب + تالٍ صادق -> الشرط صادق' },
        { p: false, q: false, result: true, stepTextEn: 'False Antecedent + False Consequent -> TRUE', stepTextAr: 'مقدم كاذب + تالٍ كاذب -> الشرط صادق' }
      ],
      tautologyClass: 'contingent'
    },
    biconditional: {
      symbol: 'p ↔ q',
      latex: 'p \\leftrightarrow q',
      titleEn: 'Biconditional / Equivalence (التشارط / التكافؤ)',
      titleAr: 'دالة التشارط أو التكافؤ (ق ↔ ل)',
      ruleEn: 'True when BOTH components have IDENTICAL truth values (both True or both False).',
      ruleAr: 'قاعدتها: يصدق التشارط إذا تساوى طرفاه صدقاً أو كذباً (صادقان معاً أو كاذبان معاً)، ويكذب إذا اختلفا.',
      table: [
        { p: true, q: true, result: true, stepTextEn: 'Both True -> Biconditional is TRUE', stepTextAr: 'تطابق في الصدق -> التشارط صادق' },
        { p: true, q: false, result: false, stepTextEn: 'Different Truth Values -> FALSE', stepTextAr: 'اختلاف القيمتين -> التشارط كاذب' },
        { p: false, q: true, result: false, stepTextEn: 'Different Truth Values -> FALSE', stepTextAr: 'اختلاف القيمتين -> التشارط كاذب' },
        { p: false, q: false, result: true, stepTextEn: 'Both False -> Biconditional is TRUE', stepTextAr: 'تطابق في الكذب -> التشارط صادق' }
      ],
      tautologyClass: 'contingent'
    },
    tautology_demo: {
      symbol: 'p ∨ ~p',
      latex: 'p \\lor \\sim p',
      titleEn: 'Law of Excluded Middle / Tautology (تحصيل حاصل)',
      titleAr: 'قضية تحصيل حاصل (مبدأ الثالث المرفوع)',
      ruleEn: 'Tautology: An expression that evaluates to TRUE under EVERY conceivable assignment of truth values.',
      ruleAr: 'قضية تكرارية (تحصيل حاصل): تصدق في جميع الحالات الممكنة ولا تكذب أبداً مهما كانت قيمة مركباتها.',
      table: [
        { p: true, result: true, stepTextEn: 'T ∨ F -> Evaluates to TRUE', stepTextAr: 'ص v ك -> صادقة تحصيل حاصل' },
        { p: false, result: true, stepTextEn: 'F ∨ T -> Evaluates to TRUE', stepTextAr: 'ك v ص -> صادقة تحصيل حاصل' }
      ],
      tautologyClass: 'tautology'
    }
  };

  const currentOp = operatorsData[selectedOp];
  const evalCurrentRow = () => {
    if (selectedOp === 'negation') return !pVal;
    if (selectedOp === 'conjunction') return pVal && qVal;
    if (selectedOp === 'disjunction') return pVal || qVal;
    if (selectedOp === 'conditional') return !pVal || qVal;
    if (selectedOp === 'biconditional') return pVal === qVal;
    if (selectedOp === 'tautology_demo') return true;
    return true;
  };

  // -------------------------------------------------------------
  // Mode 2: Aristotelian Syllogism Validator
  // -------------------------------------------------------------
  type CategoricalType = 'A' | 'E' | 'I' | 'O';
  const [majorType, setMajorType] = useState<CategoricalType>('A');
  const [minorType, setMinorType] = useState<CategoricalType>('A');
  const [middleTerm, setMiddleTerm] = useState<string>(isArabic ? 'إنسان' : 'Mortal');
  const [majorTerm, setMajorTerm] = useState<string>(isArabic ? 'فانٍ' : 'Living Being');
  const [minorTerm, setMinorTerm] = useState<string>(isArabic ? 'سقراط' : 'Socrates');

  const isMinorAffirmative = minorType === 'A' || minorType === 'I';
  const isMajorUniversal = majorType === 'A' || majorType === 'E';
  const isSyllogismValid = isMinorAffirmative && isMajorUniversal;

  const getConclusionType = (): CategoricalType | 'INVALID' => {
    if (!isSyllogismValid) return 'INVALID';
    if (majorType === 'A' && minorType === 'A') return 'A'; // Barbara
    if (majorType === 'E' && minorType === 'A') return 'E'; // Celarent
    if (majorType === 'A' && minorType === 'I') return 'I'; // Darii
    if (majorType === 'E' && minorType === 'I') return 'O'; // Ferio
    return 'INVALID';
  };

  const conclusionType = getConclusionType();

  const getCategoricalLabel = (type: CategoricalType) => {
    switch (type) {
      case 'A': return isArabic ? 'كلية موجبة (ك.م - All)' : 'Universal Affirmative (A)';
      case 'E': return isArabic ? 'كلية سالبة (ك.س - No)' : 'Universal Negative (E)';
      case 'I': return isArabic ? 'جزئية موجبة (ج.م - Some)' : 'Particular Affirmative (I)';
      case 'O': return isArabic ? 'جزئية سالبة (ج.س - Some...not)' : 'Particular Negative (O)';
    }
  };

  // -------------------------------------------------------------
  // Mode 3: Mill's 5 Inductive Proof Methods
  // -------------------------------------------------------------
  type MillMethod = 'agreement' | 'difference' | 'joint' | 'concomitant' | 'residues';
  const [selectedMill, setSelectedMill] = useState<MillMethod>('agreement');

  const [tempDegree, setTempDegree] = useState<number>(30);
  const gasVolume = (tempDegree * 1.5 + 20).toFixed(1);

  // -------------------------------------------------------------
  // Mode 4: Fuzzy Logic vs Binary AI Visualizer
  // -------------------------------------------------------------
  const [ambientTemp, setAmbientTemp] = useState<number>(24);

  const calcFuzzyMemberships = (t: number) => {
    let cold = 0;
    if (t <= 16) cold = 1;
    else if (t < 22) cold = (22 - t) / 6;

    let comfortable = 0;
    if (t > 18 && t < 23) comfortable = (t - 18) / 5;
    else if (t >= 23 && t < 28) comfortable = (28 - t) / 5;

    let hot = 0;
    if (t <= 24) hot = 0;
    else if (t < 30) hot = (t - 24) / 6;
    else hot = 1;

    return { cold, comfortable, hot };
  };

  const fuzzy = calcFuzzyMemberships(ambientTemp);
  const binaryVerdict = ambientTemp >= 25 ? 'HOT (1)' : 'COLD (0)';

  // -------------------------------------------------------------
  // Mode 5: Bioethics Dilemma Decision Matrix
  // -------------------------------------------------------------
  type BioDilemmaId = 'genome' | 'cloning' | 'consent' | 'future_gen';
  const [selectedDilemma, setSelectedDilemma] = useState<BioDilemmaId>('genome');

  const dilemmasData: Record<BioDilemmaId, {
    titleEn: string;
    titleAr: string;
    scenarioEn: string;
    scenarioAr: string;
    philosophers: string;
    autonomyScore: number;
    beneficenceScore: number;
    nonMaleficenceScore: number;
    justiceScore: number;
    officialVerdictEn: string;
    officialVerdictAr: string;
  }> = {
    genome: {
      titleEn: 'Human Genome & Genetic Discrimination',
      titleAr: 'الجينوم البشري والتمييز على أسس جينية',
      scenarioEn: 'A corporation requests genomic profiles of job applicants to predict future illness and deny health insurance.',
      scenarioAr: 'مؤسسة توظيف تشترط فحص الخريطة الجينية للمتقدمين واستبعاد حاملي الجينات المهيئة للأمراض المستقبلية.',
      philosophers: isArabic ? 'أحمد زويل، هانز يوناس، مصطفى محمود' : 'Ahmed Zewail, Hans Jonas, M. Mahmoud',
      autonomyScore: 35,
      beneficenceScore: 40,
      nonMaleficenceScore: 20,
      justiceScore: 15,
      officialVerdictEn: 'Strictly unethical. Ahmed Zewail affirmed the genome must serve therapeutic guidance, not deterministic discrimination or loss of privacy.',
      officialVerdictAr: 'مرفوض أخلاقياً ومعيارياً. أكد د. أحمد زويل أن الجينوم ينبغي أن يُستثمر في التشخيص العلاجي وليس في الحتمية الجينية أو التمييز الوظيفي.'
    },
    cloning: {
      titleEn: 'Reproductive Human Cloning',
      titleAr: 'استنساخ الكائنات الحية واستنساخ الإنسان',
      scenarioEn: 'Attempting full reproductive cloning of a deceased individual using somatic cell nuclear transfer.',
      scenarioAr: 'إجراء تجارب الاستنساخ البشري الكامل لإنتاج أفراد متطابقين جينياً مع أفراد متوفين.',
      philosophers: isArabic ? 'مصطفى محمود، الفاتيكان، لجان البيوتيقا الدولية' : 'Mostafa Mahmoud, Global Bioethics Committees',
      autonomyScore: 10,
      beneficenceScore: 25,
      nonMaleficenceScore: 10,
      justiceScore: 20,
      officialVerdictEn: 'Condemned by Egyptian MoE syllabus & scholars. Destroys biological identity, intergenerational lineage, and human dignity.',
      officialVerdictAr: 'إدانة تامة وتحريم معتمد. يرى د. مصطفى محمود أن الاستنساخ ثورة بيولوجية عبثية تقضي على التنوع وفكرة الأسرة والأمومة والنسب.'
    },
    consent: {
      titleEn: 'Informed Consent vs Medical Paternalism',
      titleAr: 'الموافقة المستنيرة في مواجهة الوصاية الطبية',
      scenarioEn: 'A surgeon proceeds with an experimental invasive procedure without explaining high-probability side effects to protect patient morale.',
      scenarioAr: 'طبيب يجري تدخلاً جراحياً تجريبياً مع إخفاء المخاطر عن المريض بدعوى حمايته نفسياً.',
      philosophers: isArabic ? 'توم بيتشامب، جيمس تشيلدرس، بروتوكولات البيوتيقا' : 'Tom Beauchamp & James Childress (Principles of Biomedical Ethics)',
      autonomyScore: 15,
      beneficenceScore: 50,
      nonMaleficenceScore: 30,
      justiceScore: 25,
      officialVerdictEn: 'Violates the 5 MoE core elements of Informed Consent: Disclosure, Understanding, Competence, Voluntariness, and Explicit Consent.',
      officialVerdictAr: 'انتهاك صريح لعناصر الموافقة المستنيرة الخمسة المقررة: الإفصاح، الفهم، الأهلية، الطواعية، والموافقة الصريحة.'
    },
    future_gen: {
      titleEn: 'Responsibility for Future Generations (Hans Jonas)',
      titleAr: 'أخلاق المسؤولية وحقوق أجيال المستقبل (هانز يوناس)',
      scenarioEn: 'Industrial dumping of toxic hazardous waste that will remain radioactive for 500 years to maximize current fiscal quarterly profits.',
      scenarioAr: 'دفن نفايات صناعية سامة تهدد الموارد الطبيعية والمائية لمئات السنين القادمة لتحقيق أرباح رأسمالية سريعة.',
      philosophers: isArabic ? 'هانز يوناس، دانيال كالاهان، ألدو ليوبولد' : 'Hans Jonas, Daniel Callahan, Aldo Leopold',
      autonomyScore: 50,
      beneficenceScore: 20,
      nonMaleficenceScore: 5,
      justiceScore: 10,
      officialVerdictEn: 'Violates Jonas Responsibility Imperative: We must not jeopardize the conditions for authentic human existence in the future.',
      officialVerdictAr: 'انتهاك صارخ لمبدأ المسؤولية عند هانز يوناس: الالتزام الأخلاقي بالوجود البشري المستقبلي والكرامة البيئية للأجيال القادمة.'
    }
  };

  const currentDilemma = dilemmasData[selectedDilemma];

  return (
    <div className={`w-full rounded-2xl overflow-hidden border shadow-xl flex flex-col transition-all duration-300 ${
      isFullscreen ? 'h-screen fixed inset-0 z-50 rounded-none overflow-y-auto' : 'min-h-[720px]'
    } ${
      isLight 
        ? 'bg-slate-50 border-slate-200 text-slate-900' 
        : isContrast
        ? 'bg-black border-yellow-400 text-yellow-400'
        : 'bg-slate-950 border-purple-900/50 text-slate-100'
    }`}>
      
      {/* Studio Top Navigation Bar with >= 44px Mobile Touch Targets */}
      <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-4 backdrop-blur-md ${
        isLight ? 'bg-white/90 border-slate-200' : 'bg-slate-900/90 border-purple-900/40'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
                {isArabic ? 'مختبر المنطق التطبيقي والأخلاقيات الرقمية' : 'Applied Logic & Bioethics Studio'}
              </h2>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                MoE G12 Official
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isArabic 
                ? 'جداول الصدق، قياس أرسطو، طرق مل الاستقرائية، المنطق المرن والذكاء الاصطناعي، ومصفوفة البيوتيقا'
                : 'Truth Tables, Syllogism Validator, Mill Inductive Methods, Fuzzy AI & Bioethics Matrix'}
            </p>
          </div>
        </div>

        {/* 5 Mode Selector Buttons with >= 44px touch targets */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/60 border border-slate-800/80 overflow-x-auto max-w-full">
          {[
            { id: 'truth_table', icon: Binary, labelAr: 'جداول الصدق الرمزية', labelEn: 'Truth Tables' },
            { id: 'syllogism', icon: Scale, labelAr: 'القياس الأرسطي الصوري', labelEn: 'Syllogism' },
            { id: 'mills_methods', icon: Layers, labelAr: 'طرق مل الاستقرائية', labelEn: "Mill's Methods" },
            { id: 'fuzzy_ai', icon: Cpu, labelAr: 'المنطق المرن والـ AI', labelEn: 'Fuzzy AI' },
            { id: 'bioethics_matrix', icon: Shield, labelAr: 'مصفوفة البيوتيقا والبيئة', labelEn: 'Bioethics Matrix' }
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as LogicStudioMode)}
                className={`min-h-[44px] flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isArabic ? mode.labelAr : mode.labelEn}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold transition-all text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-purple-400" />}
            <span className="hidden sm:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto">

        {/* ========================================================= */}
        {/* TAB 1: Symbolic Logic & Truth Table Generator             */}
        {/* ========================================================= */}
        {activeMode === 'truth_table' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Operator Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {(Object.keys(operatorsData) as LogicOperator[]).map((opKey) => {
                const op = operatorsData[opKey];
                const isSel = selectedOp === opKey;
                return (
                  <button
                    key={opKey}
                    onClick={() => setSelectedOp(opKey)}
                    className={`min-h-[50px] p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSel
                        ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-md ring-1 ring-purple-500'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-base font-black text-white font-mono">{op.symbol}</div>
                    <div className="text-[11px] font-medium mt-1 truncate">
                      {isArabic ? op.titleAr.split('(')[0] : op.titleEn.split('(')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Operator Rule Banner */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 text-purple-200 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-purple-300">
                  {isArabic ? currentOp.titleAr : currentOp.titleEn}
                </h4>
                <p className="text-xs text-purple-200/90 mt-1 leading-relaxed">
                  {isArabic ? currentOp.ruleAr : currentOp.ruleEn}
                </p>
              </div>
            </div>

            {/* Interactive Live Row Tester with >=44px buttons */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'اختبر قيم المتغيرات يدوياً:' : 'Interactive Variable Toggles:'}
                </span>

                <button
                  onClick={() => setPVal(!pVal)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    pVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  <span>p ({isArabic ? 'ق' : 'p'}) = {pVal ? (isArabic ? 'صادقة (T)' : 'True') : (isArabic ? 'كاذبة (F)' : 'False')}</span>
                </button>

                {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                  <button
                    onClick={() => setQVal(!qVal)}
                    className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      qVal ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}
                  >
                    <span>q ({isArabic ? 'ل' : 'q'}) = {qVal ? (isArabic ? 'صادقة (T)' : 'True') : (isArabic ? 'كاذبة (F)' : 'False')}</span>
                  </button>
                )}
              </div>

              {/* Evaluated Outcome */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400">
                  {isArabic ? 'النتيجة الصورية:' : 'Evaluated Truth Value:'}
                </span>
                <span className={`px-4 py-2 rounded-xl font-mono text-sm font-black flex items-center gap-1.5 ${
                  evalCurrentRow()
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                    : 'bg-rose-500/20 border border-rose-500/40 text-rose-400'
                }`}>
                  {evalCurrentRow() ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>{evalCurrentRow() ? (isArabic ? 'صادق (True)' : 'TRUE') : (isArabic ? 'كاذب (False)' : 'FALSE')}</span>
                </span>
              </div>
            </div>

            {/* Complete Standard Truth Table */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60 shadow-lg">
              <div className="p-3 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isArabic ? 'جدول الصدق الكامل وفقاً لكتاب الوزارة' : 'Complete Official Ministerial Truth Table'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300">
                  {currentOp.tautologyClass === 'tautology'
                    ? (isArabic ? 'تحصيل حاصل (صادقة دائماً)' : 'Tautology (Always True)')
                    : currentOp.tautologyClass === 'contradiction'
                    ? (isArabic ? 'متناقضة (كاذبة دائماً)' : 'Contradiction')
                    : (isArabic ? 'قضية عرضية (تحتمل الصدق والكذب)' : 'Contingent (Mixed)')}
                </span>
              </div>

              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
                    <th className="p-3 font-mono text-center w-16">#</th>
                    <th className="p-3 font-mono text-center">p ({isArabic ? 'ق' : 'p'})</th>
                    {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                      <th className="p-3 font-mono text-center">q ({isArabic ? 'ل' : 'q'})</th>
                    )}
                    <th className="p-3 font-mono text-center font-bold text-purple-400">
                      {currentOp.symbol}
                    </th>
                    <th className="p-3 text-slate-300">
                      {isArabic ? 'التفسير والتعليل الصوري' : 'Logical Explanation'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {currentOp.table.map((row, idx) => {
                    const isMatchesCurrent = (row.p === pVal) && (selectedOp === 'negation' || selectedOp === 'tautology_demo' || row.q === qVal);
                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isMatchesCurrent
                            ? 'bg-purple-900/30 font-bold text-white'
                            : 'hover:bg-slate-800/30 text-slate-300'
                        }`}
                      >
                        <td className="p-3 text-center text-slate-500">{idx + 1}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded ${row.p ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'}`}>
                            {row.p ? (isArabic ? 'ص' : 'T') : (isArabic ? 'ك' : 'F')}
                          </span>
                        </td>
                        {selectedOp !== 'negation' && selectedOp !== 'tautology_demo' && (
                          <td className="p-3 text-center">
                            <span className={`px-2 py-0.5 rounded ${row.q ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'}`}>
                              {row.q ? (isArabic ? 'ص' : 'T') : (isArabic ? 'ك' : 'F')}
                            </span>
                          </td>
                        )}
                        <td className="p-3 text-center font-black">
                          <span className={`px-2.5 py-1 rounded-md ${
                            row.result
                              ? 'text-emerald-300 bg-emerald-900/50 border border-emerald-500/30'
                              : 'text-rose-300 bg-rose-900/50 border border-rose-500/30'
                          }`}>
                            {row.result ? (isArabic ? 'صادقة (T)' : 'T') : (isArabic ? 'كاذبة (F)' : 'F')}
                          </span>
                        </td>
                        <td className="p-3 text-slate-300 font-sans text-xs">
                          {isArabic ? row.stepTextAr : row.stepTextEn}
                          {isMatchesCurrent && (
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                              {isArabic ? '← حالتك الحالية' : '← Active State'}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: Aristotelian Syllogism Validator & Euler/Venn Sets */}
        {/* ========================================================= */}
        {activeMode === 'syllogism' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header / Figure 1 Explanation */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-sm text-purple-300 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-400" />
                  {isArabic ? 'مُختبر القياس الأرسطي (الشكل الأول المقرر بالثانوية العامة)' : 'Aristotelian Syllogism (Figure 1 Validator)'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isArabic 
                    ? 'هيئة الشكل الأول: الحد الأوسط (و) موضوع في الكبرى، ومحمول في الصغرى (و - ك / ص - و ⊢ ص - ك)'
                    : 'Figure 1 Schema: Middle term (M) is Subject in Major Premise, and Predicate in Minor Premise (M-P, S-M ⊢ S-P)'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-purple-950 border border-purple-700 text-purple-300 font-mono">
                  {isArabic ? 'شرطا الشكل الأول: إيجاب الصغرى وكلية الكبرى' : 'Fig 1: Affirmative Minor & Universal Major'}
                </span>
              </div>
            </div>

            {/* Syllogism Terms Setup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأوسط (و - Middle Term):' : 'Middle Term (M):'}
                </label>
                <input
                  type="text"
                  value={middleTerm}
                  onChange={(e) => setMiddleTerm(e.target.value)}
                  className="min-h-[44px] w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأكبر (ك - Major Term):' : 'Major Term (P):'}
                </label>
                <input
                  type="text"
                  value={majorTerm}
                  onChange={(e) => setMajorTerm(e.target.value)}
                  className="min-h-[44px] w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-indigo-300 font-bold focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <label className="text-[11px] font-bold text-slate-400 block mb-1">
                  {isArabic ? 'الحد الأصغر (ص - Minor Term):' : 'Minor Term (S):'}
                </label>
                <input
                  type="text"
                  value={minorTerm}
                  onChange={(e) => setMinorTerm(e.target.value)}
                  className="min-h-[44px] w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-sky-300 font-bold focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Premise Formulation & Quantifiers with >=44px buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Major Premise */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    {isArabic ? '١. المقدمة الكبرى (Major Premise):' : '1. Major Premise (M - P):'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {getCategoricalLabel(majorType)}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {(['A', 'E', 'I', 'O'] as CategoricalType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setMajorType(t)}
                      className={`min-h-[44px] py-2 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        majorType === t
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t} {t === 'A' ? (isArabic ? 'ك.م' : 'All') : t === 'E' ? (isArabic ? 'ك.س' : 'No') : t === 'I' ? (isArabic ? 'ج.م' : 'Some') : (isArabic ? 'ج.س' : 'Some...not')}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                  {majorType === 'A' && (isArabic ? `كل ${middleTerm} ${majorTerm}` : `All ${middleTerm} are ${majorTerm}`)}
                  {majorType === 'E' && (isArabic ? `لا واحد من ${middleTerm} ${majorTerm}` : `No ${middleTerm} is ${majorTerm}`)}
                  {majorType === 'I' && (isArabic ? `بعض ${middleTerm} ${majorTerm}` : `Some ${middleTerm} are ${majorTerm}`)}
                  {majorType === 'O' && (isArabic ? `بعض ${middleTerm} ليس ${majorTerm}` : `Some ${middleTerm} are not ${majorTerm}`)}
                </div>
              </div>

              {/* Minor Premise */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    {isArabic ? '٢. المقدمة الصغرى (Minor Premise):' : '2. Minor Premise (S - M):'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {getCategoricalLabel(minorType)}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {(['A', 'E', 'I', 'O'] as CategoricalType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setMinorType(t)}
                      className={`min-h-[44px] py-2 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        minorType === t
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t} {t === 'A' ? (isArabic ? 'ك.م' : 'All') : t === 'E' ? (isArabic ? 'ك.س' : 'No') : t === 'I' ? (isArabic ? 'ج.م' : 'Some') : (isArabic ? 'ج.س' : 'Some...not')}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                  {minorType === 'A' && (isArabic ? `كل ${minorTerm} ${middleTerm}` : `All ${minorTerm} are ${middleTerm}`)}
                  {minorType === 'E' && (isArabic ? `لا واحد من ${minorTerm} ${middleTerm}` : `No ${minorTerm} is ${middleTerm}`)}
                  {minorType === 'I' && (isArabic ? `بعض ${minorTerm} ${middleTerm}` : `Some ${minorTerm} are ${middleTerm}`)}
                  {minorType === 'O' && (isArabic ? `بعض ${minorTerm} ليس ${middleTerm}` : `Some ${minorTerm} are not ${middleTerm}`)}
                </div>
              </div>
            </div>

            {/* Deductive Verdict Box */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isSyllogismValid
                ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/30 border-rose-500/50 text-rose-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isSyllogismValid ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <h4 className="font-black text-sm">
                    {isSyllogismValid
                      ? (isArabic ? 'قياس صحيح ومنتج صورياً (Valid Syllogism)' : 'Formally Valid Syllogism')
                      : (isArabic ? 'قياس فاسد وعقيم لا ينتج (Invalid Syllogism)' : 'Formally Invalid Syllogism')}
                  </h4>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700">
                  Mood: {majorType}{minorType}{conclusionType}
                </span>
              </div>

              {/* Deductive Conclusion Display */}
              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  {isArabic ? 'النتيجة اللازمة (ص - ك): ' : 'Deductive Conclusion (S - P): '}
                </span>
                {isSyllogismValid ? (
                  <span className="text-emerald-400 font-mono">
                    {conclusionType === 'A' && (isArabic ? `كل ${minorTerm} ${majorTerm}` : `All ${minorTerm} are ${majorTerm}`)}
                    {conclusionType === 'E' && (isArabic ? `لا واحد من ${minorTerm} ${majorTerm}` : `No ${minorTerm} is ${majorTerm}`)}
                    {conclusionType === 'I' && (isArabic ? `بعض ${minorTerm} ${majorTerm}` : `Some ${minorTerm} are ${majorTerm}`)}
                    {conclusionType === 'O' && (isArabic ? `بعض ${minorTerm} ليس ${majorTerm}` : `Some ${minorTerm} are not ${majorTerm}`)}
                  </span>
                ) : (
                  <span className="text-rose-400 italic">
                    {isArabic ? 'لا تلزم نتيجة منطقية لخرق قواعد الإنتاج' : 'No valid conclusion follows due to rule violation'}
                  </span>
                )}
              </div>

              {/* Rules Breakdown */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                  isMajorUniversal ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}>
                  {isMajorUniversal ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>{isArabic ? 'كلية الكبرى (لاستغراق الحد الأوسط مرة على الأقل)' : 'Universal Major (Distributes Middle Term)'}</span>
                </div>

                <div className={`p-2 rounded-lg border flex items-center gap-2 ${
                  isMinorAffirmative ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}>
                  {isMinorAffirmative ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>{isArabic ? 'إيجاب الصغرى (حتى لا يستغرق حد في النتيجة دون مقدمته)' : 'Affirmative Minor (Prevents Illicit Major Process)'}</span>
                </div>
              </div>
            </div>

            {/* High-Resolution Euler / Venn Set Overlap Schematic */}
            <AristotelianEulerVennVectorSchematic
              majorType={majorType}
              minorType={minorType}
              conclusionType={conclusionType}
              middleTerm={middleTerm}
              majorTerm={majorTerm}
              minorTerm={minorTerm}
              isSyllogismValid={isSyllogismValid}
              isArabic={isArabic}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: Mill's 5 Inductive Proof Methods Lab               */}
        {/* ========================================================= */}
        {activeMode === 'mills_methods' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Mill's 5 Methods Selector with >=44px touch targets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {[
                { id: 'agreement', titleAr: '١. طريقة الاتفاق', titleEn: '1. Agreement' },
                { id: 'difference', titleAr: '٢. طريقة الاختلاف', titleEn: '2. Difference' },
                { id: 'joint', titleAr: '٣. الجمع بينهما', titleEn: '3. Joint Method' },
                { id: 'concomitant', titleAr: '٤. التلازم في التغير', titleEn: '4. Concomitant Var.' },
                { id: 'residues', titleAr: '٥. طريقة البواقي', titleEn: '5. Residues' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMill(m.id as MillMethod)}
                  className={`min-h-[44px] p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedMill === m.id
                      ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold">{isArabic ? m.titleAr : m.titleEn}</span>
                </button>
              ))}
            </div>

            {/* Method 1: Agreement Simulator */}
            {selectedMill === 'agreement' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة الاتفاق (The Method of Agreement)' : 'The Method of Agreement'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: إذا اشتركت حالتان أو أكثر من حالات الظاهرة في ظرف واحد، فإن هذا الظرف المشترك يكون علة الظاهرة أو معلولها (التلازم في الحضور).'
                      : 'Rule: If two or more instances of the phenomenon under investigation have only one circumstance in common, that circumstance is the cause (or effect) of the given phenomenon.'}
                  </p>
                </div>

                <div className="text-xs font-bold text-slate-300 mb-2">
                  {isArabic ? 'حالة دراسية تجريبية: حادثة التسمم الغذائي في المطعم:' : 'Empirical Case: Restaurant Food Poisoning Diagnostic Table:'}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                        <th className="p-3">{isArabic ? 'الشخص' : 'Person'}</th>
                        <th className="p-3">{isArabic ? 'وجبة اللحم' : 'Meat'}</th>
                        <th className="p-3 text-purple-400 font-bold">{isArabic ? 'عصير الفراولة' : 'Strawberry Juice'}</th>
                        <th className="p-3">{isArabic ? 'السلطة' : 'Salad'}</th>
                        <th className="p-3">{isArabic ? 'الحلوى' : 'Dessert'}</th>
                        <th className="p-3 text-rose-400 font-bold">{isArabic ? 'النتيجة (التسمم)' : 'Poisoning'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono">
                      {[
                        { name: isArabic ? 'أحمد' : 'Ahmed', meat: true, juice: true, salad: false, dessert: true, poisoned: true },
                        { name: isArabic ? 'سارة' : 'Sara', meat: false, juice: true, salad: true, dessert: false, poisoned: true },
                        { name: isArabic ? 'كريم' : 'Karim', meat: true, juice: true, salad: true, dessert: false, poisoned: true },
                        { name: isArabic ? 'ليلى' : 'Laila', meat: false, juice: true, salad: false, dessert: true, poisoned: true }
                      ].map((r, i) => (
                        <tr key={i} className="hover:bg-slate-800/30">
                          <td className="p-3 font-bold font-sans text-slate-200">{r.name}</td>
                          <td className="p-3">{r.meat ? '✓' : '—'}</td>
                          <td className="p-3 bg-purple-950/40 text-purple-300 font-black">✓ ({isArabic ? 'مشترك' : 'Common'})</td>
                          <td className="p-3">{r.salad ? '✓' : '—'}</td>
                          <td className="p-3">{r.dessert ? '✓' : '—'}</td>
                          <td className="p-3 text-rose-400 font-black">✓ {isArabic ? 'تسمم' : 'Ill'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800 text-xs text-purple-200">
                  <strong>{isArabic ? 'الاستنتاج الاستقرائي: ' : 'Inductive Deduction: '}</strong>
                  {isArabic 
                    ? 'الظرف الوحيد المشترك بين جميع المصابين هو "عصير الفراولة"، إذن هو العلة المرجحة للتسمم.'
                    : 'The sole circumstance shared across all afflicted diners is Strawberry Juice; hence it is induced to be the cause.'}
                </div>
              </div>
            )}

            {/* Method 4: Concomitant Variations */}
            {selectedMill === 'concomitant' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة التلازم في التغير (Concomitant Variations)' : 'Method of Concomitant Variations'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: كلما تغيرت الظاهرة "أ" بأي شكل وتغيرت معها الظاهرة "ب" بنفس النسبة طردياً أو عكسياً، فإن "أ" تكون علة لـ "ب" أو معلولة لها.'
                      : 'Rule: Whatever phenomenon varies in any manner whenever another phenomenon varies in some particular manner, is either a cause or an effect of that phenomenon.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-300">
                      {isArabic ? 'درجة الحرارة المستحثة معملياً (T):' : 'Applied Temperature (T):'} {tempDegree}°C
                    </span>
                    <span className="font-mono text-purple-400 font-black">
                      {isArabic ? 'حجم الغاز المتمدد المحسوب (V):' : 'Observed Gas Volume (V):'} {gasVolume} cm³
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={tempDegree}
                    onChange={(e) => setTempDegree(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                {/* Simulated Thermal Volume Bar */}
                <div className="h-6 rounded-lg bg-slate-950 border border-slate-800 overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 transition-all duration-300"
                    style={{ width: `${(tempDegree / 100) * 100}%` }}
                  />
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800 text-xs text-purple-200">
                  {isArabic
                    ? 'التطبيق الواقعي: زيادة ميزانية الإعلانات تؤدي طردياً لزيادة مبيعات السلعة، أو تمدد الغازات بالحرارة وفق قانون شارل.'
                    : 'Real-World Example: Advertising expenditure proportionally drives sales volume; gas expansion under Charles Law.'}
                </div>
              </div>
            )}

            {/* Method 5: Residues */}
            {selectedMill === 'residues' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="font-black text-sm text-purple-300">
                    {isArabic ? 'طريقة البواقي (The Method of Residues)' : 'The Method of Residues'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {isArabic 
                      ? 'القاعدة: إذا علم الباحث أن عللاً معينة تؤدي إلى معلولات معينة، وعزل منها العلل والمعلولات المعروفة، فإن العلة الباقية تكون سبب المعلول الباقي (مثل اكتشاف كوكب نبتون).'
                      : 'Rule: Subduct from any phenomenon such part as is known by previous inductions to be the effect of certain antecedents, and the residue is the effect of the remaining antecedents.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { id: 0, cause: isArabic ? 'علة (أ): جاذبية المشتري' : 'Cause A: Jupiter Gravity', effect: isArabic ? 'معلول (١): اضطراب مدار زحل' : 'Effect 1: Saturn Perturbation' },
                    { id: 1, cause: isArabic ? 'علة (ب): جاذبية الشمس' : 'Cause B: Solar Gravity', effect: isArabic ? 'معلول (٢): مدار أورانوس الأساسي' : 'Effect 2: Uranus Primary Orbit' },
                    { id: 2, cause: isArabic ? 'علة (ج): كوكب نبتون المجهول' : 'Cause C: Unknown Planet (Neptune)', effect: isArabic ? 'معلول (٣): الانحراف المتبقي في مدار أورانوس' : 'Effect 3: Residual Uranus Deviation' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-xl border transition-all ${
                        item.id === 2
                          ? 'bg-purple-950/60 border-purple-500 shadow-md'
                          : 'bg-slate-950 border-slate-800 opacity-75'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-300">{item.cause}</div>
                      <div className="text-[11px] text-purple-400 mt-1 font-mono">⇛ {item.effect}</div>
                      {item.id === 2 && (
                        <div className="mt-2 text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold inline-block">
                          {isArabic ? 'العلة والمعلول الباقيان' : 'Residue Deductions'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methods 2 & 3 summary if selected */}
            {(selectedMill === 'difference' || selectedMill === 'joint') && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <h4 className="font-black text-sm text-purple-300">
                  {selectedMill === 'difference'
                    ? (isArabic ? 'طريقة الاختلاف (التلازم في الغياب)' : 'The Method of Difference')
                    : (isArabic ? 'طريقة الجمع بين الاتفاق والاختلاف' : 'Joint Method of Agreement & Difference')}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedMill === 'difference'
                    ? (isArabic ? 'إذا اتفقت حالتان في كل الظروف واختلفتا في ظرف واحد، وغابت الظاهرة عند غياب هذا الظرف، فإن هذا الظرف هو علة الظاهرة أو جزء من علتها.' : 'If an instance in which the phenomenon occurs and an instance in which it does not have every circumstance in common save one, that one circumstance is the cause.')
                    : (isArabic ? 'جمع الإثبات والنفي معاً لرفع درجة التأكيد؛ وجود العلة يستلزم وجود المعلول، وغياب العلة يستلزم غياب المعلول قطعاً.' : 'A double method combining presence and absence for definitive empirical proof.')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: Fuzzy Logic vs Binary AI Visualizer                */}
        {/* ========================================================= */}
        {activeMode === 'fuzzy_ai' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-sm text-purple-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  {isArabic ? 'المنطق المرن (Fuzzy Logic) في الذكاء الاصطناعي (لطفي زادة)' : 'Fuzzy Logic & AI Systems (Lotfi Zadeh)'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isArabic 
                    ? 'المنطق الأرسطي ثنائي القيم (صحيح 1 / كاذب 0) يعجز عن تمثيل درجات الواقع المعقدة مثل: دافئ، طويل، بارد إلى حد ما'
                    : 'Classical logic relies on crisp binary values (1 or 0), failing to model graded real-world terms like "warm" or "fast".'}
                </p>
              </div>
            </div>

            {/* Continuous Temperature Slider with >=44px area */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300">
                  {isArabic ? 'درجة الحرارة في بيئة التكييف الذكي:' : 'Smart AC Ambient Temperature Input:'}
                </span>
                <span className="text-sm font-black font-mono text-purple-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  {ambientTemp} °C
                </span>
              </div>

              <input
                type="range"
                min={10}
                max={35}
                value={ambientTemp}
                onChange={(e) => setAmbientTemp(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />

              {/* High-Resolution Continuous Curve Schematic */}
              <FuzzyContinuousMembershipVectorSchematic
                ambientTemp={ambientTemp}
                fuzzy={fuzzy}
                binaryVerdict={binaryVerdict}
                isArabic={isArabic}
              />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: Bioethics Dilemma Decision Matrix & 4-Axis Radar   */}
        {/* ========================================================= */}
        {activeMode === 'bioethics_matrix' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Dilemma Selector with >= 50px buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {(Object.keys(dilemmasData) as BioDilemmaId[]).map((dKey) => {
                const d = dilemmasData[dKey];
                const isSel = selectedDilemma === dKey;
                return (
                  <button
                    key={dKey}
                    onClick={() => setSelectedDilemma(dKey)}
                    className={`min-h-[50px] p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSel
                        ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{isArabic ? d.titleAr : d.titleEn}</div>
                    <div className="text-[10px] mt-1 opacity-80 truncate">{d.philosophers}</div>
                  </button>
                );
              })}
            </div>

            {/* Dilemma Details Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                  {isArabic ? 'القضية الأخلاقية البيوطبية المعاصرة:' : 'Contemporary Bioethical Dilemma:'}
                </span>
                <h4 className="text-base font-black text-white mt-1">
                  {isArabic ? currentDilemma.titleAr : currentDilemma.titleEn}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {isArabic ? currentDilemma.scenarioAr : currentDilemma.scenarioEn}
                </p>
              </div>

              {/* 4-Axis Bioethics Radar Chart Schematic */}
              <BioethicsRadarChartVectorSchematic
                autonomyScore={currentDilemma.autonomyScore}
                beneficenceScore={currentDilemma.beneficenceScore}
                nonMaleficenceScore={currentDilemma.nonMaleficenceScore}
                justiceScore={currentDilemma.justiceScore}
                titleEn={currentDilemma.titleEn}
                titleAr={currentDilemma.titleAr}
                officialVerdictEn={currentDilemma.officialVerdictEn}
                officialVerdictAr={currentDilemma.officialVerdictAr}
                isArabic={isArabic}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
