import React, { useState, useMemo } from 'react';
import type { Language } from '../../i18n/translations';
import type { ThemeMode } from '../../types/curriculum';
import {
  HISTORY_TIMELINE_EVENTS,
  STRATEGIC_MAP_LOCATIONS,
  PRIMARY_TREATIES_DOCUMENTS,
  CAUSE_EFFECT_CHAINS,
  MINISTERIAL_HISTORY_CHALLENGE,
  type HistoryTimelineEvent,
  type StrategicMapLocation,
  type HistoricalTreaty,
  type CauseEffectChain,
} from '../../data/historyLab/historyTimelineLabData';
import {
  Clock,
  Compass,
  Scroll,
  GitMerge,
  Award,
  ShieldAlert,
  MapPin,
  Filter,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Search,
  BookOpen,
  Layers,
  X,
  Maximize2,
  Minimize2,
  Flag,
  Target,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  onClose?: () => void;
}

type HistoryTab = 'timeline' | 'map' | 'treaties' | 'cause_effect' | 'quiz';

// ---------------------------------------------------------------------------
// 1. High-Resolution Cartographic & Tactical Vector Theater Map
// ---------------------------------------------------------------------------
interface TacticalMapProps {
  selectedLocation: StrategicMapLocation;
  onSelectLocation: (loc: StrategicMapLocation) => void;
  isArabic: boolean;
  isLight: boolean;
}

const TacticalMilitaryTheaterMap: React.FC<TacticalMapProps> = ({
  selectedLocation,
  onSelectLocation,
  isArabic,
  isLight,
}) => {
  const [activeCampaign, setActiveCampaign] = useState<'all' | 'french' | 'fraser' | 'ibrahim' | 'urabi' | 'october'>('all');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Campaign Layer Toggle Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
          <Flag className="w-3.5 h-3.5" />
          <span>{isArabic ? 'مسارات الحملات العسكرية:' : 'Military Campaign Vectors:'}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {[
            { id: 'all', labelAr: 'كافة المسارح', labelEn: 'All Theaters' },
            { id: 'french', labelAr: '1798 نابليون', labelEn: '1798 French' },
            { id: 'fraser', labelAr: '1807 فريزر', labelEn: '1807 Fraser' },
            { id: 'ibrahim', labelAr: '1831 الشام', labelEn: '1831 Levant' },
            { id: 'urabi', labelAr: '1882 عرابي', labelEn: '1882 Urabi' },
            { id: 'october', labelAr: '1973 أكتوبر', labelEn: '1973 October' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCampaign(c.id as any)}
              className={`px-2.5 py-1 min-h-[44px] text-[11px] rounded-lg font-bold transition-all flex items-center justify-center ${
                activeCampaign === c.id
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {isArabic ? c.labelAr : c.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas (viewBox 0 0 1000 750) */}
      <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border shadow-2xl ${
        isLight ? 'bg-slate-900 border-amber-500/30' : 'bg-slate-950 border-slate-800'
      }`}>
        {/* Tactical Grid & Radar Graticule */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Theater Status HUD */}
        <div className="absolute top-3 start-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md text-[11px] font-mono text-amber-400">
          <Target className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>GEO-STRAT // EAST MEDITERRANEAN & NILE BASIN</span>
        </div>

        <div className="absolute top-3 end-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md text-[11px] font-mono text-slate-300">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>N 31°12′ E 29°55′</span>
        </div>

        <svg
          viewBox="0 0 1000 750"
          className="w-full h-full select-none"
          style={{ filter: 'drop-shadow(0 0 16px rgba(217, 119, 6, 0.12))' }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="medSeaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#082f49" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="redSeaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#083344" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="nileGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="frenchVectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            <linearGradient id="ibrahimVectorGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

            <linearGradient id="octoberVectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            {/* Marker Arrows */}
            <marker id="arrowFrench" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa" />
            </marker>
            <marker id="arrowFraser" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
            </marker>
            <marker id="arrowIbrahim" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
            </marker>
            <marker id="arrowUrabi" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb923c" />
            </marker>
            <marker id="arrowOctober" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
            </marker>
          </defs>

          {/* 1. Mediterranean Sea Body */}
          <path
            d="M 20,20 L 980,20 L 980,180 L 820,180 L 720,130 L 680,210 L 640,250 L 580,225 L 480,270 L 350,150 L 280,135 L 20,160 Z"
            fill="url(#medSeaGrad)"
            opacity="0.3"
          />

          {/* 2. Red Sea & Gulfs */}
          <path
            d="M 640,260 L 680,360 L 780,560 L 820,720 L 760,720 L 670,540 L 630,370 Z"
            fill="url(#redSeaGrad)"
            opacity="0.25"
          />
          {/* Gulf of Aqaba */}
          <path
            d="M 760,255 L 820,410 L 805,425 L 750,275 Z"
            fill="url(#redSeaGrad)"
            opacity="0.2"
          />

          {/* 3. High-Definition Coastlines */}
          {/* Mediterranean Shoreline */}
          <path
            d="M 30,165 Q 150,155 250,140 T 280,135 T 320,145 T 350,120 T 420,170 T 480,180 T 540,165 T 580,225 T 640,245 T 700,180 T 720,90 T 780,50 T 850,30"
            fill="none"
            stroke="#334155"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* 4. The River Nile & Delta System */}
          {/* Nile Delta Infill (Fertile Green Sheen) */}
          <polygon
            points="480,270 350,120 420,170 480,180 540,165 580,225"
            fill="#065f46"
            opacity="0.15"
          />

          {/* Rosetta Branch */}
          <path
            d="M 480,270 Q 420,210 350,120"
            fill="none"
            stroke="url(#nileGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Damietta Branch */}
          <path
            d="M 480,270 Q 520,220 540,165"
            fill="none"
            stroke="url(#nileGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Delta Lakes (Burullus, Manzala, Mariout) */}
          <ellipse cx="440" cy="165" rx="35" ry="10" fill="#0369a1" opacity="0.3" />
          <ellipse cx="560" cy="185" rx="30" ry="14" fill="#0369a1" opacity="0.3" />
          <ellipse cx="300" cy="145" rx="20" ry="8" fill="#0369a1" opacity="0.3" />

          {/* Nile Trunk (Cairo down through Upper Egypt) */}
          <path
            d="M 480,270 L 480,360 Q 475,440 485,500 T 495,580 Q 530,620 520,660 L 515,730"
            fill="none"
            stroke="url(#nileGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Suez Canal Ribbon */}
          <path
            d="M 580,225 L 640,255"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* Sinai Triangular Boundary */}
          <path
            d="M 580,225 L 700,245 L 760,420 Z"
            fill="#78350f"
            opacity="0.08"
          />

          {/* --------------------------------------------------------- */}
          {/* Tactical Campaign Military Vectors (Interactive Layers) */}
          {/* --------------------------------------------------------- */}

          {/* Campaign 1: French Expedition 1798 */}
          {(activeCampaign === 'all' || activeCampaign === 'french') && (
            <g className="transition-opacity duration-300">
              {/* Sea Landing -> Alexandria */}
              <path
                d="M 220,50 Q 250,90 280,135"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                markerEnd="url(#arrowFrench)"
              />
              {/* Alexandria -> Shubra Khit -> Imbaba (Pyramids) */}
              <path
                d="M 280,135 Q 350,180 420,210 Q 450,240 480,270"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd="url(#arrowFrench)"
              />
              {/* Abukir Bay Naval Battle Burst */}
              <circle cx="295" cy="130" r="14" fill="#ef4444" opacity="0.25" className="animate-ping" />
              <circle cx="295" cy="130" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="295" y="112" fill="#93c5fd" fontSize="12" fontWeight="bold" textAnchor="middle">
                {isArabic ? 'أبو قير البحرية 1798' : 'Abukir 1798'}
              </text>
            </g>
          )}

          {/* Campaign 2: Fraser Expedition 1807 */}
          {(activeCampaign === 'all' || activeCampaign === 'fraser') && (
            <g className="transition-opacity duration-300">
              {/* Alexandria -> Rosetta / Hammad */}
              <path
                d="M 280,135 Q 315,130 350,120"
                fill="none"
                stroke="#f87171"
                strokeWidth="2.8"
                strokeDasharray="5 3"
                markerEnd="url(#arrowFraser)"
              />
              {/* Ambush Burst at Hammad */}
              <circle cx="350" cy="120" r="10" fill="#dc2626" opacity="0.3" />
              <text x="350" y="100" fill="#fca5a5" fontSize="12" fontWeight="bold" textAnchor="middle">
                {isArabic ? 'كمين رشيد والحماد 1807' : 'Rosetta Defeat 1807'}
              </text>
            </g>
          )}

          {/* Campaign 3: Ibrahim Pasha Syrian Campaign 1831–1833 */}
          {(activeCampaign === 'all' || activeCampaign === 'ibrahim') && (
            <g className="transition-opacity duration-300">
              {/* Cairo -> Sinai -> Acre -> Damascus -> Homs -> Konya */}
              <path
                d="M 480,270 Q 560,250 640,245 Q 690,190 720,90 Q 770,50 820,30"
                fill="none"
                stroke="url(#ibrahimVectorGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                markerEnd="url(#arrowIbrahim)"
              />
              {/* Siege of Acre & Konya Victory Marks */}
              <circle cx="720" cy="90" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
              <text x="735" y="85" fill="#fde68a" fontSize="12" fontWeight="bold">
                {isArabic ? 'حصار عكا 1831' : 'Siege of Acre 1831'}
              </text>
              <circle cx="820" cy="30" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="835" y="28" fill="#fca5a5" fontSize="12" fontWeight="bold">
                {isArabic ? 'معركة قونية 1832' : 'Battle of Konya 1832'}
              </text>
            </g>
          )}

          {/* Campaign 4: Urabi Defense & British Invasion 1882 */}
          {(activeCampaign === 'all' || activeCampaign === 'urabi') && (
            <g className="transition-opacity duration-300">
              {/* British bypass Kafr El Dawwar through Suez Canal -> Tal El Kebir */}
              <path
                d="M 280,135 Q 430,90 580,225 L 600,240 L 580,225 Q 540,230 464,174"
                fill="none"
                stroke="#fb923c"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                markerEnd="url(#arrowUrabi)"
              />
              <circle cx="580" cy="225" r="7" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
              <text x="560" y="248" fill="#fdba74" fontSize="11" fontWeight="bold">
                {isArabic ? 'اختراق قناة السويس (دي ليسبس)' : 'Canal Deception 1882'}
              </text>
            </g>
          )}

          {/* Campaign 5: 1973 October War Crossing of Bar-Lev Line */}
          {(activeCampaign === 'all' || activeCampaign === 'october') && (
            <g className="transition-opacity duration-300">
              {/* 5 Breach Arrows across Suez Canal */}
              {[228, 235, 242, 248, 255].map((yCoord, idx) => (
                <line
                  key={idx}
                  x1="575"
                  y1={yCoord}
                  x2="645"
                  y2={yCoord}
                  stroke="#34d399"
                  strokeWidth="3"
                  markerEnd="url(#arrowOctober)"
                />
              ))}
              {/* Bar-Lev Line Sand Barrier */}
              <line x1="645" y1="220" x2="645" y2="260" stroke="#f59e0b" strokeWidth="4" strokeDasharray="3 3" />
              <text x="655" y="240" fill="#6ee7b7" fontSize="12" fontWeight="black">
                {isArabic ? 'اقتحام خط بارليف (عملية بدر 1973)' : 'Bar-Lev Breach (Op Badr 1973)'}
              </text>
            </g>
          )}

          {/* --------------------------------------------------------- */}
          {/* Strategic Location Nodes & Interactive Pins */}
          {/* --------------------------------------------------------- */}
          {STRATEGIC_MAP_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            // Map percentage coords to viewBox coords
            const posX = (loc.x / 100) * 1000;
            const posY = (loc.y / 100) * 750;

            return (
              <g
                key={loc.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => onSelectLocation(loc)}
              >
                {/* Sonar / Radar Pulse for Selected Node */}
                {isSelected && (
                  <circle
                    cx={posX}
                    cy={posY}
                    r="24"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    className="animate-ping origin-center"
                  />
                )}

                {/* Outer Target Ring */}
                <circle
                  cx={posX}
                  cy={posY}
                  r={isSelected ? '14' : '9'}
                  fill={isSelected ? '#d97706' : '#1e293b'}
                  stroke={isSelected ? '#ffffff' : '#94a3b8'}
                  strokeWidth={isSelected ? '3' : '1.5'}
                />

                {/* Inner Core */}
                <circle
                  cx={posX}
                  cy={posY}
                  r={isSelected ? '6' : '3.5'}
                  fill={isSelected ? '#fef3c7' : '#f59e0b'}
                />

                {/* Tactical Text Badge */}
                <rect
                  x={posX - 48}
                  y={posY - 32}
                  width="96"
                  height="20"
                  rx="6"
                  fill={isSelected ? '#b45309' : '#0f172a'}
                  stroke={isSelected ? '#fde68a' : '#334155'}
                  strokeWidth="1.2"
                  opacity="0.95"
                />

                <text
                  x={posX}
                  y={posY - 18}
                  textAnchor="middle"
                  fill={isSelected ? '#ffffff' : '#cbd5e1'}
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {isArabic ? loc.nameAr.split(' ')[0] : loc.nameEn.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tactical Legend Bar */}
        <div className="absolute bottom-2 start-3 end-3 flex items-center justify-between p-2 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md text-[10px] text-slate-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              {isArabic ? 'مواقع العمليات' : 'Theater Nodes'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3.5 h-0.5 bg-sky-400 inline-block" />
              {isArabic ? 'المجرى الملاحي / النيل' : 'Nile System'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3.5 h-0.5 bg-emerald-400 inline-block" />
              {isArabic ? 'خط بارليف 1973' : 'Bar-Lev 1973'}
            </span>
          </div>
          <span className="font-mono text-amber-400 hidden sm:inline">SCALE: 1:1,500,000</span>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 2. High-Resolution Diplomatic Treaty & Balance-of-Power Vector Schematic
// ---------------------------------------------------------------------------
interface TreatySchematicProps {
  treaty: HistoricalTreaty;
  isArabic: boolean;
}

const HistoricalTreatyVectorSchematic: React.FC<TreatySchematicProps> = ({ treaty, isArabic }) => {
  return (
    <div className="w-full rounded-3xl p-5 bg-gradient-to-br from-amber-950/30 via-slate-900 to-amber-900/20 border border-amber-500/30 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Scroll className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider">
            {isArabic ? 'المخطط الجيوسياسي وتوازن القوى للمعاهدة' : 'Geopolitical Balance-of-Power Architecture'}
          </h4>
        </div>
        <span className="text-xs font-mono text-amber-400/90 font-bold px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30">
          DOC-{treaty.year}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* SVG Diplomatic Seal & Dynamic Power Balance (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
          <svg viewBox="0 0 280 200" className="w-full max-w-[240px] drop-shadow-md">
            <defs>
              <radialGradient id="waxSeal" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="70%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </radialGradient>
              <linearGradient id="parchmentBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* Parchment Box */}
            <rect x="15" y="15" width="250" height="170" rx="12" fill="#1c1917" stroke="url(#parchmentBorder)" strokeWidth="2" />
            <rect x="23" y="23" width="234" height="154" rx="8" fill="none" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" />

            {/* Wax Seal with Ribbon */}
            <path d="M 60,135 L 50,180 L 70,170 L 90,180 L 80,135 Z" fill="#991b1b" opacity="0.8" />
            <circle cx="70" cy="130" r="28" fill="url(#waxSeal)" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="70" cy="130" r="21" fill="none" stroke="#fef08a" strokeWidth="1" strokeDasharray="2 2" />
            <text x="70" y="134" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="serif">
              {treaty.year}
            </text>

            {/* Geopolitical Scales of Power */}
            <g transform="translate(160, 45)">
              {/* Fulcrum & Lever */}
              <line x1="0" y1="20" x2="80" y2="20" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              <polygon points="40,20 30,50 50,50" fill="#d97706" />

              {/* Left Pan (Egypt / National Sovereignty) */}
              <line x1="10" y1="20" x2="10" y2="45" stroke="#94a3b8" strokeWidth="1" />
              <path d="M 0,45 Q 10,55 20,45 Z" fill="#3b82f6" />
              <text x="10" y="65" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">
                {isArabic ? 'مصر' : 'Egypt'}
              </text>

              {/* Right Pan (Colonial / International Powers) */}
              <line x1="70" y1="20" x2="70" y2="40" stroke="#94a3b8" strokeWidth="1" />
              <path d="M 60,40 Q 70,50 80,40 Z" fill="#ef4444" />
              <text x="70" y="60" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">
                {isArabic ? 'القوى الكبرى' : 'Powers'}
              </text>
            </g>

            {/* Document Signature Flourish */}
            <path
              d="M 120,130 Q 150,110 180,140 T 230,125"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text x="180" y="160" textAnchor="middle" fill="#a8a29e" fontSize="9" fontStyle="italic">
              {isArabic ? 'الختم والمصادقة الدبلوماسية' : 'Diplomatic Ratification'}
            </text>
          </svg>
        </div>

        {/* Geopolitical Analysis & Strategic Sovereignty Impact (7 cols) */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isArabic ? 'الأطراف الموقعة وتوازن المصالح الدولية:' : 'Signatories & Power Dynamic:'}
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {isArabic ? treaty.signatoriesAr : treaty.signatoriesEn}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {isArabic ? 'الأثر المباشر على السيادة المصرية:' : 'Direct Sovereignty Impact:'}
            </span>
            <p className="text-xs text-amber-100/90 leading-relaxed">
              {isArabic ? treaty.strategicImpactAr : treaty.strategicImpactEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. Interactive Causal Flowchart & Critical Feedback Vector Diagram
// ---------------------------------------------------------------------------
interface CausalFlowchartProps {
  chain: CauseEffectChain;
  isArabic: boolean;
}

const CausalFeedbackVectorFlowchart: React.FC<CausalFlowchartProps> = ({ chain, isArabic }) => {
  return (
    <div className="w-full space-y-4">
      {/* SVG Flowchart Pipeline (viewBox 0 0 900 180) */}
      <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-3 overflow-x-auto shadow-inner">
        <svg viewBox="0 0 900 160" className="w-full min-w-[700px] select-none">
          <defs>
            <linearGradient id="flowArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <marker id="flowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb923c" />
            </marker>
          </defs>

          {/* Connecting Conduit Arrows */}
          <line x1="200" y1="80" x2="250" y2="80" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 3" markerEnd="url(#flowHead)" />
          <line x1="430" y1="80" x2="480" y2="80" stroke="#fb923c" strokeWidth="3" strokeDasharray="5 3" markerEnd="url(#flowHead)" />
          <line x1="660" y1="80" x2="710" y2="80" stroke="#10b981" strokeWidth="3" strokeDasharray="5 3" markerEnd="url(#flowHead)" />

          {/* Node 1: Root Cause */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="180" height="120" rx="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <circle cx="24" cy="24" r="12" fill="#4338ca" />
            <text x="24" y="28" textAnchor="middle" fill="#e0e7ff" fontSize="12" fontWeight="black">1</text>
            <text x="45" y="28" fill="#a5b4fc" fontSize="11" fontWeight="bold">
              {isArabic ? 'السبب الجوهري' : 'Root Cause'}
            </text>
            <foreignObject x="12" y="44" width="156" height="68">
              <div className="text-[10px] text-slate-200 line-clamp-3 leading-relaxed font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? chain.rootCauseAr : chain.rootCauseEn}
              </div>
            </foreignObject>
          </g>

          {/* Node 2: Catalyst */}
          <g transform="translate(250, 20)">
            <rect x="0" y="0" width="180" height="120" rx="14" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="24" cy="24" r="12" fill="#b45309" />
            <text x="24" y="28" textAnchor="middle" fill="#fef3c7" fontSize="12" fontWeight="black">2</text>
            <text x="45" y="28" fill="#fde68a" fontSize="11" fontWeight="bold">
              {isArabic ? 'المحفز / الشرارة' : 'Catalyst'}
            </text>
            <foreignObject x="12" y="44" width="156" height="68">
              <div className="text-[10px] text-slate-200 line-clamp-3 leading-relaxed font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? chain.catalystAr : chain.catalystEn}
              </div>
            </foreignObject>
          </g>

          {/* Node 3: Immediate Consequence */}
          <g transform="translate(480, 20)">
            <rect x="0" y="0" width="180" height="120" rx="14" fill="#082f49" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="24" cy="24" r="12" fill="#0369a1" />
            <text x="24" y="28" textAnchor="middle" fill="#e0f2fe" fontSize="12" fontWeight="black">3</text>
            <text x="45" y="28" fill="#7dd3fc" fontSize="11" fontWeight="bold">
              {isArabic ? 'النتيجة المباشرة' : 'Immediate Result'}
            </text>
            <foreignObject x="12" y="44" width="156" height="68">
              <div className="text-[10px] text-slate-200 line-clamp-3 leading-relaxed font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? chain.immediateResultAr : chain.immediateResultEn}
              </div>
            </foreignObject>
          </g>

          {/* Node 4: Long-Term Legacy */}
          <g transform="translate(710, 20)">
            <rect x="0" y="0" width="170" height="120" rx="14" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
            <circle cx="24" cy="24" r="12" fill="#047857" />
            <text x="24" y="28" textAnchor="middle" fill="#ecfdf5" fontSize="12" fontWeight="black">4</text>
            <text x="45" y="28" fill="#6ee7b7" fontSize="11" fontWeight="bold">
              {isArabic ? 'الأثر التاريخي الممتد' : 'Long-Term Legacy'}
            </text>
            <foreignObject x="12" y="44" width="146" height="68">
              <div className="text-[10px] text-slate-200 line-clamp-3 leading-relaxed font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? chain.longTermImpactAr : chain.longTermImpactEn}
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Ministerial Cognitive Relationship Synthesis */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-xs font-bold text-amber-300">
            {isArabic ? 'التصنيف المنطقي للعلاقة الوزارية:' : 'Cognitive Ministerial Relationship Type:'}
          </span>
        </div>
        <span className="px-3 py-1 rounded-xl text-xs font-black bg-amber-500 text-white shadow-sm">
          {isArabic ? chain.relationshipTypeAr : chain.relationshipTypeEn}
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main HistoryTimelineStudio Component
// ---------------------------------------------------------------------------
export const HistoryTimelineStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  onClose,
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isArabic = lang === 'ar';
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';

  // Active Tab
  const [activeTab, setActiveTab] = useState<HistoryTab>('timeline');

  // Tab 1: Timeline State
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeEvent, setActiveEvent] = useState<HistoryTimelineEvent>(HISTORY_TIMELINE_EVENTS[0]);

  // Tab 2: Map State
  const [selectedLocation, setSelectedLocation] = useState<StrategicMapLocation>(STRATEGIC_MAP_LOCATIONS[0]);

  // Tab 3: Treaties State
  const [selectedTreaty, setSelectedTreaty] = useState<HistoricalTreaty>(PRIMARY_TREATIES_DOCUMENTS[0]);

  // Tab 4: Cause-Effect State
  const [selectedChain, setSelectedChain] = useState<CauseEffectChain>(CAUSE_EFFECT_CHAINS[0]);

  // Tab 5: Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Filtered Timeline Events
  const filteredEvents = useMemo(() => {
    return HISTORY_TIMELINE_EVENTS.filter((evt) => {
      const matchChapter = selectedChapter === 'all' || evt.chapter === selectedChapter;
      const matchCategory = selectedCategory === 'all' || evt.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        evt.titleEn.toLowerCase().includes(q) ||
        evt.titleAr.includes(q) ||
        evt.summaryEn.toLowerCase().includes(q) ||
        evt.summaryAr.includes(q) ||
        String(evt.year).includes(q);
      return matchChapter && matchCategory && matchSearch;
    });
  }, [selectedChapter, selectedCategory, searchQuery]);

  // Quiz Handling
  const currentQuiz = MINISTERIAL_HISTORY_CHALLENGE[currentQuizIndex];

  const handleSelectQuizOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitQuizAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQuiz.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < MINISTERIAL_HISTORY_CHALLENGE.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handlePrevQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  // Base background & border styling
  const containerClasses = isLight
    ? 'bg-amber-50/90 text-slate-900 border-amber-300 shadow-xl'
    : isContrast
    ? 'bg-black text-white border-amber-400'
    : 'bg-slate-950 text-slate-100 border-amber-500/20 shadow-2xl';

  const headerBg = isLight
    ? 'bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 border-amber-200'
    : 'bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-900/30 border-amber-500/20';

  const cardClasses = isLight
    ? 'bg-white/95 border-amber-200 text-slate-900 shadow-sm'
    : isContrast
    ? 'bg-black border-amber-400 text-white'
    : 'bg-slate-900/90 border-slate-800 text-slate-100';

  return (
    <div
      className={`w-full mx-auto rounded-3xl border overflow-hidden flex flex-col font-sans transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'max-w-6xl my-4 rounded-3xl border'
      } ${containerClasses}`}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* ------------------------------------------------------------- */}
      {/* Studio Header */}
      {/* ------------------------------------------------------------- */}
      <div className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-4 ${headerBg}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20 shrink-0">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-amber-500 dark:text-amber-400">
                {isArabic ? 'معمل تاريخ مصر والخرائط الاستراتيجية' : 'Egyptian History & Strategic Maps Lab'}
              </h2>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full border border-amber-500/20">
                {isArabic ? 'ثانوية عامة وبكالوريا دولية' : 'Thanaweya & EG-Bac'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {isArabic
                ? 'مخطط زمني تفاعلي، مسرح المعارك والعمليات، أرشيف المعاهدات، ومحلل العلاقات السببية'
                : 'Interactive Timeline, Strategic Theaters, Treaties Archive, and HOTS Causal Flow'}
            </p>
          </div>
        </div>

        {/* Global Navigation Tabs (min-h-[44px] for mobile targets) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-800/40 dark:bg-slate-900/80 rounded-2xl border border-slate-700/50 backdrop-blur-md overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            {isArabic ? 'الخط الزمني' : 'Timeline'}
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'map'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            {isArabic ? 'مسرح العمليات' : 'Strategic Map'}
          </button>

          <button
            onClick={() => setActiveTab('treaties')}
            className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'treaties'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Scroll className="w-3.5 h-3.5" />
            {isArabic ? 'أرشيف المعاهدات' : 'Treaties Vault'}
          </button>

          <button
            onClick={() => setActiveTab('cause_effect')}
            className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'cause_effect'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GitMerge className="w-3.5 h-3.5" />
            {isArabic ? 'محلل الأسباب' : 'Causal Flow'}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            {isArabic ? 'تحدي الفخاخ' : 'Exam Traps'}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 min-h-[44px] min-w-[44px] rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all flex items-center justify-center gap-1 text-xs font-bold cursor-pointer"
            title={isFullscreen ? (isArabic ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'Exit Fullscreen (Esc)') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-amber-400" />}
            <span className="hidden md:inline">{isFullscreen ? (isArabic ? 'إنهاء' : 'Exit') : (isArabic ? 'شاشة كاملة' : 'Full Screen')}</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 min-h-[44px] min-w-[44px] rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Studio Body Content */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
        {/* ========================================================= */}
        {/* TAB 1: CHRONOLOGICAL TIMELINE EXPLORER */}
        {/* ========================================================= */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold px-2">
                    <Filter className="w-3.5 h-3.5" />
                    {isArabic ? 'الفصل:' : 'Chapter:'}
                  </div>
                  {(['all', 1, 2, 3, 4, 5, 6, 7, 8] as const).map((chap) => (
                    <button
                      key={chap}
                      onClick={() => setSelectedChapter(chap)}
                      className={`px-3 py-2 min-h-[44px] min-w-[44px] text-xs rounded-xl font-bold transition-all flex items-center justify-center cursor-pointer ${
                        selectedChapter === chap
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {chap === 'all' ? (isArabic ? 'الكل' : 'All') : `${isArabic ? 'ف' : 'Ch'} ${chap}`}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute top-3.5 start-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isArabic ? 'بحث عن حدث أو معركة...' : 'Search events or battles...'}
                    className="w-full ps-9 pe-3 py-2 min-h-[44px] text-base sm:text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-bold text-slate-400 px-2">
                  {isArabic ? 'التصنيف:' : 'Category:'}
                </span>
                {(['all', 'battle', 'treaty', 'revolution', 'reform'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-2 min-h-[44px] text-xs rounded-xl font-bold transition-all flex items-center justify-center cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {cat === 'all'
                      ? (isArabic ? 'الكل' : 'All')
                      : cat === 'battle'
                      ? (isArabic ? 'معارك عسكرية' : 'Battles')
                      : cat === 'treaty'
                      ? (isArabic ? 'معاهدات ووثائق' : 'Treaties')
                      : cat === 'revolution'
                      ? (isArabic ? 'ثورات وطنية' : 'Revolutions')
                      : (isArabic ? 'إصلاحات وقوانين' : 'Reforms')}
                  </button>
                ))}
              </div>
            </div>

            {/* Split View: Timeline Stream + Active Event Detail Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Events Scroller (7 cols) */}
              <div className="lg:col-span-7 space-y-3 max-h-[580px] overflow-y-auto pe-2">
                {filteredEvents.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 rounded-2xl border border-dashed border-slate-800">
                    <p className="text-sm font-semibold">
                      {isArabic ? 'لم يتم العثور على أحداث تطابق البحث' : 'No timeline events match your criteria'}
                    </p>
                  </div>
                ) : (
                  filteredEvents.map((evt) => {
                    const isSelected = activeEvent.id === evt.id;
                    return (
                      <div
                        key={evt.id}
                        onClick={() => setActiveEvent(evt)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-3.5 items-start min-h-[64px] ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/20 border-amber-500/60 ring-1 ring-amber-500/40 shadow-lg'
                            : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        {/* Year Badge */}
                        <div className="flex flex-col items-center justify-center min-w-[64px] p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                          <span className="text-sm font-black tracking-tight">{evt.year}</span>
                          <span className="text-[10px] text-amber-500/80 font-bold uppercase tracking-wider">
                            {evt.category}
                          </span>
                        </div>

                        {/* Event Quick Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4
                              className={`text-sm font-bold truncate ${
                                isSelected ? 'text-amber-300' : 'text-slate-200'
                              }`}
                            >
                              {isArabic ? evt.titleAr : evt.titleEn}
                            </h4>
                            <span className="text-[10px] font-semibold text-slate-400 shrink-0 px-2 py-0.5 rounded-md bg-slate-800">
                              {isArabic ? `فصل ${evt.chapter}` : `Ch ${evt.chapter}`}
                            </span>
                          </div>

                          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                            {isArabic ? evt.summaryAr : evt.summaryEn}
                          </p>

                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {evt.figures.map((fig, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/50"
                              >
                                {fig}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Right Column: Deep Inspection Panel (5 cols) */}
              <div className="lg:col-span-5">
                <div className={`p-5 rounded-3xl border sticky top-0 space-y-4 ${cardClasses}`}>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {activeEvent.exactDate || String(activeEvent.year)}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {isArabic ? `الفصل ${activeEvent.chapter}` : `Chapter ${activeEvent.chapter}`}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-amber-400 leading-snug">
                      {isArabic ? activeEvent.titleAr : activeEvent.titleEn}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {isArabic ? activeEvent.summaryAr : activeEvent.summaryEn}
                    </p>
                  </div>

                  {/* Historical Significance */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      {isArabic ? 'الأهمية الجيوسياسية والتاريخية' : 'Geopolitical Significance'}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isArabic ? activeEvent.significanceAr : activeEvent.significanceEn}
                    </p>
                  </div>

                  {/* Key Historical Figures */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      {isArabic ? 'الشخصيات والفاعلون التاريخيون' : 'Historical Actors'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeEvent.figures.map((fig, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-xl bg-slate-800 font-semibold text-slate-200 border border-slate-700"
                        >
                          {fig}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ministerial Exam Trap Alert */}
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1 text-rose-300">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                      <ShieldAlert className="w-4 h-4" />
                      {isArabic ? 'فخ امتحانات الثانوية العامة' : 'Ministerial Exam Trap'}
                    </div>
                    <p className="text-xs text-rose-200/90 leading-relaxed font-medium">
                      {isArabic ? activeEvent.examTrapAr : activeEvent.examTrapEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: STRATEGIC THEATER MAP */}
        {/* ========================================================= */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* SVG Tactical Vector Map (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
              <TacticalMilitaryTheaterMap
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
                isArabic={isArabic}
                isLight={isLight}
              />
            </div>

            {/* Strategic Details Drawer (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-5 rounded-3xl border space-y-4 ${cardClasses}`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <h3 className="text-base font-black text-amber-300">
                      {isArabic ? selectedLocation.nameAr : selectedLocation.nameEn}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {selectedLocation.era}
                  </span>
                </div>

                {/* Tactical / Battle Details */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-400">
                    {isArabic ? 'سياق العمليات والمعارك:' : 'Military Operations & Battles:'}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed bg-slate-800/50 p-3 rounded-2xl border border-slate-700/60">
                    {isArabic ? selectedLocation.battleDetailsAr : selectedLocation.battleDetailsEn}
                  </p>
                </div>

                {/* Geostrategic Significance */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-amber-400">
                    {isArabic ? 'الأهمية الجغرافية الاستراتيجية:' : 'Geostrategic Importance:'}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isArabic ? selectedLocation.strategicSignificanceAr : selectedLocation.strategicSignificanceEn}
                  </p>
                </div>

                {/* Ministerial HOTS Takeaway */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isArabic ? 'نقطة الامتحان الوزاري (HOTS):' : 'Ministerial Exam Takeaway (HOTS):'}
                  </div>
                  <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                    {isArabic ? selectedLocation.examTakeawayAr : selectedLocation.examTakeawayEn}
                  </p>
                </div>

                {/* Quick Switch Buttons for Locations (min-h-[44px]) */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400 mb-2">
                    {isArabic ? 'المسارح الاستراتيجية الأخرى:' : 'Other Strategic Theaters:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {STRATEGIC_MAP_LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className={`px-3 py-2 min-h-[44px] text-xs rounded-xl font-bold transition-all flex items-center justify-center cursor-pointer ${
                          selectedLocation.id === loc.id
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {isArabic ? loc.nameAr.split(' ')[0] : loc.nameEn.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: TREATIES & PRIMARY DOCUMENTS VAULT */}
        {/* ========================================================= */}
        {activeTab === 'treaties' && (
          <div className="space-y-6">
            {/* Treaty Selector Badges (min-h-[44px]) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
              {PRIMARY_TREATIES_DOCUMENTS.map((tr) => (
                <button
                  key={tr.id}
                  onClick={() => setSelectedTreaty(tr)}
                  className={`px-4 py-2.5 min-h-[44px] rounded-2xl text-xs font-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    selectedTreaty.id === tr.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Scroll className="w-3.5 h-3.5" />
                  <span>{isArabic ? tr.titleAr : tr.titleEn}</span>
                </button>
              ))}
            </div>

            {/* Diplomatic Vector Schematic */}
            <HistoricalTreatyVectorSchematic treaty={selectedTreaty} isArabic={isArabic} />

            {/* Document Reader Paper Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${cardClasses}`}>
              {/* Document Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {selectedTreaty.year} AD
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-400 mt-2">
                    {isArabic ? selectedTreaty.titleAr : selectedTreaty.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    <strong className="text-slate-300">
                      {isArabic ? 'الأطراف الموقعة: ' : 'Signatories: '}
                    </strong>
                    {isArabic ? selectedTreaty.signatoriesAr : selectedTreaty.signatoriesEn}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-slate-300">
                  {isArabic ? `الفصل ${selectedTreaty.chapter}` : `Chapter ${selectedTreaty.chapter}`}
                </div>
              </div>

              {/* Historical Context */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {isArabic ? 'السياق والظروف التاريخية للوثيقة' : 'Historical Context & Preconditions'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50">
                  {isArabic ? selectedTreaty.contextAr : selectedTreaty.contextEn}
                </p>
              </div>

              {/* Numbered Key Clauses */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {isArabic ? 'أبرز البنود والنصوص الجوهرية' : 'Core Clauses & Key Provisions'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(isArabic ? selectedTreaty.keyClausesAr : selectedTreaty.keyClausesEn).map((clause, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed">{clause}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Impact & Ministerial Trap Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                  <h5 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    {isArabic ? 'الأثر الاستراتيجي على استقلال مصر:' : 'Strategic Impact on Sovereignty:'}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isArabic ? selectedTreaty.strategicImpactAr : selectedTreaty.strategicImpactEn}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1.5 text-rose-300">
                  <h5 className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    {isArabic ? 'فخ المقارنة الامتحانية:' : 'Ministerial Comparison Trap:'}
                  </h5>
                  <p className="text-xs text-rose-200/90 leading-relaxed font-medium">
                    {isArabic ? selectedTreaty.ministerialTrapAr : selectedTreaty.ministerialTrapEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: CAUSE-AND-EFFECT FLOWCHART ANALYZER */}
        {/* ========================================================= */}
        {activeTab === 'cause_effect' && (
          <div className="space-y-6">
            {/* Chain Selector Tabs (min-h-[44px]) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
              {CAUSE_EFFECT_CHAINS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChain(ch)}
                  className={`px-4 py-2.5 min-h-[44px] rounded-2xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                    selectedChain.id === ch.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isArabic ? ch.titleAr : ch.titleEn}
                </button>
              ))}
            </div>

            {/* High-Resolution Causal Feedback Vector Flowchart */}
            <CausalFeedbackVectorFlowchart chain={selectedChain} isArabic={isArabic} />

            {/* Causal Flow Node Graph */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${cardClasses}`}>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <GitMerge className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-black text-amber-300">
                    {isArabic ? selectedChain.titleAr : selectedChain.titleEn}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {isArabic ? selectedChain.relationshipTypeAr : selectedChain.relationshipTypeEn}
                </span>
              </div>

              {/* 4-Phase Flowchart Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {/* Node 1: Root Cause */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-amber-500/30 flex flex-col justify-between space-y-2 relative">
                  <span className="text-[11px] font-black uppercase text-amber-400 tracking-wider">
                    {isArabic ? '1. السبب الجوهري' : '1. Root Cause'}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {isArabic ? selectedChain.rootCauseAr : selectedChain.rootCauseEn}
                  </p>
                  <div className="text-[10px] text-slate-400 font-mono">PHASE: ORIGIN</div>
                </div>

                {/* Node 2: Catalyst */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-orange-500/30 flex flex-col justify-between space-y-2">
                  <span className="text-[11px] font-black uppercase text-orange-400 tracking-wider">
                    {isArabic ? '2. المحفز ونقطة التحول' : '2. Catalyst & Turning Point'}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {isArabic ? selectedChain.catalystAr : selectedChain.catalystEn}
                  </p>
                  <div className="text-[10px] text-slate-400 font-mono">PHASE: TRIGGER</div>
                </div>

                {/* Node 3: Immediate Result */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-amber-400/30 flex flex-col justify-between space-y-2">
                  <span className="text-[11px] font-black uppercase text-amber-300 tracking-wider">
                    {isArabic ? '3. النتيجة المباشرة' : '3. Immediate Result'}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {isArabic ? selectedChain.immediateResultAr : selectedChain.immediateResultEn}
                  </p>
                  <div className="text-[10px] text-slate-400 font-mono">PHASE: OUTCOME</div>
                </div>

                {/* Node 4: Long-Term Impact */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 flex flex-col justify-between space-y-2">
                  <span className="text-[11px] font-black uppercase text-emerald-400 tracking-wider">
                    {isArabic ? '4. الأثر التاريخي الممتد' : '4. Long-Term Impact'}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {isArabic ? selectedChain.longTermImpactAr : selectedChain.longTermImpactEn}
                  </p>
                  <div className="text-[10px] text-slate-400 font-mono">PHASE: LEGACY</div>
                </div>
              </div>

              {/* Ministerial Synthesis Guidance */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-amber-400">
                    {isArabic ? 'كيف تطرح هذه العلاقة في الامتحان؟ ' : 'How is this tested in exams? '}
                  </strong>
                  {isArabic
                    ? 'تركز أسئلة المستويات العليا (HOTS) على نوع العلاقة (طردية، عكسية، نقل ميدان الصراع، استغلال الظروف الدولية) بدلاً من سرد التواريخ المجردة.'
                    : 'HOTS exam questions test structural relationships (correlation, displacement of conflict, economic levers) rather than rote date memorization.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: MINISTERIAL EXAM TRAPS CHALLENGE */}
        {/* ========================================================= */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Quiz Header with Score */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-slate-200">
                  {isArabic ? 'تحدي فخاخ الامتحانات الوزارية' : 'Ministerial Exam Traps Sprint'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">
                  {isArabic ? 'السؤال:' : 'Item:'} {currentQuizIndex + 1} / {MINISTERIAL_HISTORY_CHALLENGE.length}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
                  {isArabic ? 'النقاط:' : 'Score:'} {quizScore}
                </span>
              </div>
            </div>

            {/* Question Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-5 ${cardClasses}`}>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-full bg-slate-800 font-bold uppercase">
                  Level: {currentQuiz.cognitiveLevel}
                </span>
                <span>{isArabic ? `الفصل ${currentQuiz.chapter}` : `Chapter ${currentQuiz.chapter}`}</span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-amber-400 leading-snug">
                {isArabic ? currentQuiz.questionAr : currentQuiz.questionEn}
              </h4>

              {/* Options (min-h-[48px] with clear tap feedback) */}
              <div className="space-y-2.5">
                {(isArabic ? currentQuiz.optionsAr : currentQuiz.optionsEn).map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuiz.correctIndex;
                  let optStyle = 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-700/80';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                    } else {
                      optStyle = 'opacity-50 bg-slate-800/40 border-slate-800 text-slate-400';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold';
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectQuizOption(idx)}
                      className={`p-4 min-h-[48px] rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-slate-900/80 text-xs font-black flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed">{opt}</span>
                      </div>

                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit / Explanations */}
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitQuizAnswer}
                  disabled={selectedOption === null}
                  className={`w-full py-3.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {isArabic ? 'تأكيد الإجابة' : 'Submit Answer'}
                </button>
              ) : (
                <div className="space-y-4 pt-2">
                  <div
                    className={`p-4 rounded-2xl border space-y-2 ${
                      selectedOption === currentQuiz.correctIndex
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs">
                      {selectedOption === currentQuiz.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>{isArabic ? 'إجابة صحيحة وممتازة!' : 'Correct Answer!'}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-400" />
                          <span>{isArabic ? 'إجابة غير صحيحة، انتبه للمفارقة:' : 'Incorrect, note the trap:'}</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed">
                      {isArabic ? currentQuiz.explanationAr : currentQuiz.explanationEn}
                    </p>
                  </div>

                  {/* Next / Previous Controls (min-h-[44px]) */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={handlePrevQuiz}
                      disabled={currentQuizIndex === 0}
                      className="px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-bold bg-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 cursor-pointer"
                    >
                      {isArabic ? 'السابق' : 'Previous'}
                    </button>

                    {currentQuizIndex < MINISTERIAL_HISTORY_CHALLENGE.length - 1 ? (
                      <button
                        onClick={handleNextQuiz}
                        className="px-5 py-2.5 min-h-[44px] rounded-xl text-xs font-black bg-amber-500 text-white hover:bg-amber-600 shadow-md cursor-pointer"
                      >
                        {isArabic ? 'السؤال التالي' : 'Next Question'}
                      </button>
                    ) : (
                      <button
                        onClick={handleRestartQuiz}
                        className="px-5 py-2.5 min-h-[44px] rounded-xl text-xs font-black bg-emerald-500 text-white hover:bg-emerald-600 shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {isArabic ? 'إعادة التحدي' : 'Restart Quiz'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
