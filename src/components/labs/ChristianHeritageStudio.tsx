import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import {
  HOLY_SACRAMENTS,
  MONASTIC_MILESTONES,
  GOSPEL_SYNOPTICS,
  AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS,
  BIOETHICS_TOPICS,
  CHRISTIAN_SCENARIO_QUIZ,
  type HolySacrament,
  type MonasticMilestone,
  type GospelSynopticItem,
  type AuthenticScriptureRecording,
  type BioethicsTopic,
} from '../../data/christianLab/christianLabData';
import {
  Volume2,
  Play,
  Pause,
  Loader2,
  Music,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  Scale,
  Compass,
  RotateCcw,
  BookOpen,
  Award,
  Brain,
  ShieldCheck,
  Cross,
  Church,
  Scroll,
  HeartHandshake,
  Radio,
  AlertCircle,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: ChristianStudioTab;
}

export type ChristianStudioTab = 'sacraments' | 'monasticism' | 'synoptics' | 'scriptures' | 'bioethics' | 'quiz';

// ---------------------------------------------------------------------------
// High-Resolution Scientific & Architectural Vector Schematics
// ---------------------------------------------------------------------------

interface IconostasisProps {
  selectedSacramentId: string;
  onSelectSacrament: (sacrament: HolySacrament) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const CopticIconostasisSacramentsVectorSchematic: React.FC<IconostasisProps> = ({
  selectedSacramentId,
  onSelectSacrament,
  isArabic,
  isLight,
  isContrast,
}) => {
  const stations: Array<{
    id: string;
    cx: number;
    cy: number;
    titleAr: string;
    titleEn: string;
    matterAr: string;
    graceAr: string;
    matterEn: string;
    graceEn: string;
    symbol: string;
  }> = [
    {
      id: 'baptism',
      cx: 85,
      cy: 280,
      titleAr: 'سر المعمودية',
      titleEn: 'Holy Baptism',
      matterAr: 'الماء المصلى عليه بالتغطيس ٣ مرات',
      graceAr: 'الميلاد الجديد والخلاص وغفران الخطايا الجدية والقبلية',
      matterEn: 'Consecrated water by triple immersion',
      graceEn: 'Spiritual rebirth & remission of sins',
      symbol: '💧',
    },
    {
      id: 'chrismation',
      cx: 175,
      cy: 225,
      titleAr: 'سر الميرون',
      titleEn: 'Holy Chrismation',
      matterAr: 'زيت الميرون المقدس ٣٦ رشماً',
      graceAr: 'حلول وسكنى الروح القدس وختم الملكية الإلهية',
      matterEn: 'Sacred Myron chrism in 36 anointings',
      graceEn: 'Indwelling of the Holy Spirit & divine seal',
      symbol: '🕊️',
    },
    {
      id: 'repentance',
      cx: 295,
      cy: 250,
      titleAr: 'سر التوبة والاعتراف',
      titleEn: 'Confession & Repentance',
      matterAr: 'الإقرار بالخطايا وصلاة التحليل الكهنوتية',
      graceAr: 'نوال الحل والمصالحة مع الله وتطهير الضمير',
      matterEn: 'Repentant confession & priestly absolution',
      graceEn: 'Reconciliation with God & spiritual cleansing',
      symbol: '🗝️',
    },
    {
      id: 'eucharist',
      cx: 460,
      cy: 185,
      titleAr: 'سر الإفخارستيا',
      titleEn: 'Holy Eucharist',
      matterAr: 'قربان الحمل الخالي من الخمير وعصير الكرمة',
      graceAr: 'الاتحاد الحقيقي بجسد الرب ودمه وثبات الحياة الأبدية',
      matterEn: 'Pure leavened wheat bread & grape wine',
      graceEn: 'True communion with Christ & eternal life',
      symbol: '🍷',
    },
    {
      id: 'priesthood',
      cx: 625,
      cy: 250,
      titleAr: 'سر الكهنوت',
      titleEn: 'Holy Priesthood',
      matterAr: 'وضع يد الأسقف والمسحة والصلوات الرسولية',
      graceAr: 'السلطان الروحي لخدمة الرعية وتتميم الأسرار الإلهية',
      matterEn: 'Laying on of episcopal hands & prayer',
      graceEn: 'Apostolic authority & pastoral stewardship',
      symbol: '📜',
    },
    {
      id: 'matrimony',
      cx: 745,
      cy: 225,
      titleAr: 'سر الزيجة',
      titleEn: 'Holy Matrimony',
      matterAr: 'الأكاليل والبرنوس والتبادل الرضائي للعهود المقدسة',
      graceAr: 'اتحاد الزوجين كجسد واحد ونعمة البيت المسيحي المبارك',
      matterEn: 'Nuptial crowns, vestments & mutual consent',
      graceEn: 'Holy union as one flesh in Christ',
      symbol: '👑',
    },
    {
      id: 'unction_of_sick',
      cx: 835,
      cy: 280,
      titleAr: 'سر مسحة المرضى',
      titleEn: 'Unction of the Sick',
      matterAr: 'زيت القنديل المصلى عليه بسبع صلوات كنسية',
      graceAr: 'شفاء الأسقام الروحية والجسدية ونوال غفران الخطايا',
      matterEn: 'Consecrated olive oil with 7 prayers',
      graceEn: 'Bodily & spiritual healing and forgiveness',
      symbol: '🕯️',
    },
  ];

  const activeStation = stations.find((s) => s.id === selectedSacramentId) || stations[3];

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20 p-4 shadow-xl overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-500/20 text-xs">
        <div className="flex items-center gap-2">
          <Church className="w-4 h-4 text-amber-400" />
          <span className="font-black text-amber-300">
            {isArabic
              ? 'المخطط الهندسي المعماري للهيكل القبطي وحامل الأيقونات ومواقع الأسرار السبعة'
              : 'Architectural Coptic Sanctuary, Iconostasis & The Seven Sacraments'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            {isArabic ? 'اضغط على أي سر للإضاءة والتفصيل' : 'Click any sacrament node to inspect'}
          </span>
        </div>
      </div>

      <div className="relative w-full aspect-[16/8] min-h-[300px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 920 400"
          className="w-full h-full select-none"
          style={{ filter: isContrast ? 'none' : 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.08))' }}
        >
          <defs>
            <linearGradient id="sanctuaryBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#fef3c7' : '#090d16'} stopOpacity="0.9" />
              <stop offset="100%" stopColor={isLight ? '#fde68a' : '#1a1005'} stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="copticGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            <linearGradient id="copticVeilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="100%" stopColor="#450a0a" />
            </linearGradient>

            <linearGradient id="altarLinenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <radialGradient id="divineAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#d97706" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>

            <filter id="copticGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Main Sanctuary Niche (حضن الآب - الشرقية) */}
          <path
            d="M 320,360 L 320,130 Q 460,40 600,130 L 600,360 Z"
            fill="url(#sanctuaryBgGrad)"
            stroke="#b45309"
            strokeWidth="2.5"
          />

          {/* Radiant Halo at Top of Niche (نور المسيح ضابط الكل) */}
          <circle cx="460" cy="115" r="55" fill="url(#divineAura)" />
          <circle cx="460" cy="115" r="45" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
          <text x="460" y="112" textAnchor="middle" fill="#fde047" fontSize="16" fontWeight="bold" fontFamily="serif">
            ☦
          </text>
          <text x="460" y="128" textAnchor="middle" fill="#fcd34d" fontSize="8.5" fontWeight="semibold" fontFamily="sans-serif">
            {isArabic ? 'حضن الآب • الشرقية' : 'Synthronon • East Wall'}
          </text>

          {/* Stepped Synthronon (درج الرتب الكهنوتية) */}
          <path d="M 350,340 L 570,340 L 560,320 L 360,320 Z" fill="#1e293b" stroke="#78350f" strokeWidth="1" />
          <path d="M 370,320 L 550,320 L 540,305 L 380,305 Z" fill="#334155" stroke="#78350f" strokeWidth="1" />

          {/* Northern Side Sanctuary (المذبح البحري) */}
          <path
            d="M 60,360 L 60,190 Q 185,130 310,190 L 310,360 Z"
            fill={isLight ? '#fffbeb' : '#0b1120'}
            stroke="#b45309"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <text x="185" y="175" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
            {isArabic ? 'المذبح البحري (الشمالي)' : 'Northern Side Sanctuary'}
          </text>

          {/* Southern Side Sanctuary (المذبح القبلي) */}
          <path
            d="M 610,360 L 610,190 Q 735,130 860,190 L 860,360 Z"
            fill={isLight ? '#fffbeb' : '#0b1120'}
            stroke="#b45309"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <text x="735" y="175" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
            {isArabic ? 'المذبح القبلي (الجنوبي)' : 'Southern Side Sanctuary'}
          </text>

          {/* Central Holy Altar (المذبح المقدس الأوسط) */}
          <rect x="405" y="225" width="110" height="95" rx="4" fill="url(#altarLinenGrad)" stroke="#b45309" strokeWidth="2" />
          <rect x="415" y="245" width="90" height="75" rx="3" fill="#881337" stroke="#f59e0b" strokeWidth="1" />
          <path
            d="M 460,260 L 460,295 M 445,275 L 475,275"
            stroke="#fde047"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="450" cy="235" r="6" fill="#fde047" stroke="#78350f" strokeWidth="1" />
          <path d="M 465,240 L 475,240 L 472,232 L 468,232 Z" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />

          {/* High Coptic Iconostasis Architrave (حامل الأيقونات) */}
          <rect x="40" y="355" width="840" height="18" rx="2" fill="#451a03" stroke="#b45309" strokeWidth="2" />
          <text x="460" y="367" textAnchor="middle" fill="#fde68a" fontSize="9" fontWeight="bold" letterSpacing="2">
            {isArabic ? 'حامل الأيقونات المقدس • THE HOLY ICONOSTASIS' : 'THE HOLY COPTIC ICONOSTASIS'}
          </text>

          {/* Royal Doors Frame (الباب الملوكي) */}
          <rect x="385" y="170" width="150" height="185" fill="none" stroke="url(#copticGoldGrad)" strokeWidth="3" rx="6" />
          <path
            d="M 388,175 Q 405,240 395,340 L 415,340 Q 425,240 405,175 Z"
            fill="url(#copticVeilGrad)"
            stroke="#7f1d1d"
            strokeWidth="1"
          />
          <path
            d="M 532,175 Q 515,240 525,340 L 505,340 Q 495,240 515,175 Z"
            fill="url(#copticVeilGrad)"
            stroke="#7f1d1d"
            strokeWidth="1"
          />

          {/* Top Pinnacle: Golgotha Cross (صلبوت الجلجثة) */}
          <g transform="translate(460, 48)">
            <circle cx="0" cy="0" r="24" fill="url(#divineAura)" />
            <rect x="-3" y="-22" width="6" height="42" rx="1" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
            <rect x="-18" y="-12" width="36" height="6" rx="1" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
            <circle cx="0" cy="-24" r="3" fill="#fde047" />
            <circle cx="-20" cy="-9" r="3" fill="#fde047" />
            <circle cx="20" cy="-9" r="3" fill="#fde047" />
            <text x="-32" y="15" textAnchor="middle" fill="#fde68a" fontSize="8" fontWeight="bold">
              {isArabic ? 'العذراء مريم' : 'St. Mary'}
            </text>
            <text x="32" y="15" textAnchor="middle" fill="#fde68a" fontSize="8" fontWeight="bold">
              {isArabic ? 'يوحنا الحبيب' : 'St. John'}
            </text>
          </g>

          {/* Apostles Tier Icons Row (صف الرسل الأطهار) */}
          <rect x="180" y="82" width="560" height="22" rx="4" fill="#3b1d11" stroke="#b45309" strokeWidth="1" />
          <text x="460" y="96" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">
            {isArabic
              ? 'أيقونة العشاء السري وتلاميذ الرب الاثني عشر (صف الرسل)'
              : 'The Last Supper & The Twelve Apostles Tier'}
          </text>

          {/* Connection Lines from Altar to Each Sacrament Station */}
          {stations.map((st) => {
            const isSel = st.id === selectedSacramentId;
            return (
              <path
                key={`line-${st.id}`}
                d={`M 460,200 Q ${(460 + st.cx) / 2},${(200 + st.cy) / 2 - 20} ${st.cx},${st.cy}`}
                fill="none"
                stroke={isSel ? '#f59e0b' : '#64748b'}
                strokeWidth={isSel ? 2 : 0.8}
                strokeDasharray={isSel ? '4 2' : '2 2'}
                strokeOpacity={isSel ? 0.9 : 0.4}
              />
            );
          })}

          {/* 7 Interactive Sacrament Stations */}
          {stations.map((st) => {
            const isSel = st.id === selectedSacramentId;
            const sacramentData = HOLY_SACRAMENTS.find((s) => s.id === st.id);

            return (
              <g
                key={st.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (sacramentData) onSelectSacrament(sacramentData);
                }}
              >
                {isSel && (
                  <>
                    <circle cx={st.cx} cy={st.cy} r="32" fill="url(#divineAura)" className="animate-pulse" />
                    <circle cx={st.cx} cy={st.cy} r="26" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                  </>
                )}

                <circle
                  cx={st.cx}
                  cy={st.cy}
                  r={isSel ? '20' : '15'}
                  fill={isSel ? '#f59e0b' : isLight ? '#ffffff' : '#1e293b'}
                  stroke={isSel ? '#ffffff' : '#b45309'}
                  strokeWidth={isSel ? 2.5 : 1.5}
                  filter={isSel ? 'url(#copticGlow)' : undefined}
                />

                <text
                  x={st.cx}
                  y={st.cy + 5}
                  textAnchor="middle"
                  fontSize={isSel ? '15' : '12'}
                  className="pointer-events-none"
                >
                  {st.symbol}
                </text>

                <rect
                  x={st.cx - 44}
                  y={st.cy + (isSel ? 25 : 20)}
                  width="88"
                  height="18"
                  rx="9"
                  fill={isSel ? '#d97706' : isLight ? '#f1f5f9' : '#0f172a'}
                  stroke={isSel ? '#fde047' : '#475569'}
                  strokeWidth={isSel ? 1.5 : 0.8}
                />
                <text
                  x={st.cx}
                  y={st.cy + (isSel ? 37 : 32)}
                  textAnchor="middle"
                  fill={isSel ? '#ffffff' : isLight ? '#0f172a' : '#f8fafc'}
                  fontSize="8.5"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {isArabic ? st.titleAr.replace('سر ', '') : st.titleEn}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-center text-sm shrink-0">
            {activeStation.symbol}
          </span>
          <div>
            <div className="font-black text-amber-300 text-sm">
              {isArabic ? activeStation.titleAr : activeStation.titleEn}
            </div>
            <div className="text-[11px] text-slate-300 mt-0.5">
              <span className="text-amber-400 font-semibold">{isArabic ? 'المادة المنظورة: ' : 'Visible Matter: '}</span>
              {isArabic ? activeStation.matterAr : activeStation.matterEn}
            </div>
          </div>
        </div>
        <div className="max-w-md text-end">
          <span className="text-emerald-400 font-semibold">{isArabic ? 'النعمة غير المنظورة: ' : 'Invisible Grace: '}</span>
          <span className="text-slate-300 text-[11px]">{isArabic ? activeStation.graceAr : activeStation.graceEn}</span>
        </div>
      </div>
    </div>
  );
};

interface MonasticMapProps {
  selectedMilestoneId: string;
  onSelectMilestone: (milestone: MonasticMilestone) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const EgyptianMonasticHeritageMapSchematic: React.FC<MonasticMapProps> = ({
  selectedMilestoneId,
  onSelectMilestone,
  isArabic,
  isLight,
  isContrast,
}) => {
  const monasticHubs: Array<{
    id: string;
    milestoneId: string;
    x: number;
    y: number;
    poleAr: string;
    poleEn: string;
    monasteriesAr: string;
    monasteriesEn: string;
    figureAr: string;
    figureEn: string;
    era: string;
  }> = [
    {
      id: 'red_sea',
      milestoneId: 'milestone_anthony',
      x: 580,
      y: 215,
      poleAr: 'صحراء البحر الأحمر وجبل القلزم',
      poleEn: 'Red Sea & Mount Galala',
      monasteriesAr: 'دير الأنبا أنطونيوس ودير الأنبا بولا',
      monasteriesEn: 'St. Anthony & St. Paul Monasteries',
      figureAr: 'أنطونيوس أب الرهبان وبولا أول السواح',
      figureEn: 'St. Anthony the Great & St. Paul the Hermit',
      era: '251–356 م',
    },
    {
      id: 'scetis',
      milestoneId: 'milestone_macarius',
      x: 320,
      y: 135,
      poleAr: 'برية شيهيت ووادي النطرون',
      poleEn: 'Wilderness of Scetis (Wadi El-Natrun)',
      monasteriesAr: 'أبو مقار، الأنبا بيشوي، السريان، البراموس',
      monasteriesEn: 'St. Macarius, St. Bishoy, Surian, Baramous',
      figureAr: 'القديس مقاريوس وبيشوي ومكسيموس ودوماديوس',
      figureEn: 'St. Macarius the Egyptian & St. Bishoy',
      era: '300–390 م',
    },
    {
      id: 'thebaid_pachomius',
      milestoneId: 'milestone_pachomius',
      x: 520,
      y: 335,
      poleAr: 'الصعيد وإقليم طيبة (نظام الشركة الكينونية)',
      poleEn: 'Upper Egypt & Thebaid (Koinonia)',
      monasteriesAr: 'طبنسين، دندرة، إشنى، فاو قبلي',
      monasteriesEn: 'Tabennisi, Denderah, Pbow',
      figureAr: 'الأنبا باخوميوس أب الشركة الرهبانية المنظمة',
      figureEn: 'St. Pachomius (Father of Coenobitic Life)',
      era: '292–348 م',
    },
    {
      id: 'sohag_shenouda',
      milestoneId: 'milestone_shenouda',
      x: 480,
      y: 290,
      poleAr: 'سوهاج والدير الأبيض والأحمر',
      poleEn: 'Sohag (White & Red Monasteries)',
      monasteriesAr: 'دير الأنبا شنودة رئيس المتوحدين والدير الأحمر',
      monasteriesEn: 'White & Red Monasteries of St. Shenouda',
      figureAr: 'الأنبا شنودة عميد الأدب القبطي وحصن الهوية',
      figureEn: 'St. Shenouda the Archimandrite',
      era: '348–466 م',
    },
    {
      id: 'alexandria_school',
      milestoneId: 'milestone_alexandria_theology',
      x: 270,
      y: 80,
      poleAr: 'الإسكندرية ومدرستها اللاهوتية',
      poleEn: 'Alexandria & The Catechetical School',
      monasteriesAr: 'المدرسة اللاهوتية وكرسي مارمرقس',
      monasteriesEn: 'Catechetical School & See of St. Mark',
      figureAr: 'بنتينوس، أوريجانوس، أثناسيوس، كيرلس الكبير',
      figureEn: 'Pantaenus, Clement, Origen, St. Athanasius',
      era: '180–451 م',
    },
  ];

  const activeHub =
    monasticHubs.find((h) => h.milestoneId === selectedMilestoneId) || monasticHubs[0];

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20 p-4 shadow-xl overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-500/20 text-xs">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-400" />
          <span className="font-black text-amber-300">
            {isArabic
              ? 'الخريطة الجغرافية التاريخية لمسارات الرهبنة القبطية في براري مصر'
              : 'Historical Cartography of Egyptian Coptic Monastic Wilderness'}
          </span>
        </div>
        <span className="text-[11px] text-amber-400 font-mono">
          EGY-MONASTIC-GEO-CHRONICLE
        </span>
      </div>

      <div className="relative w-full aspect-[16/8] min-h-[300px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 840 400"
          className="w-full h-full select-none"
          style={{ filter: isContrast ? 'none' : 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.08))' }}
        >
          <defs>
            <linearGradient id="nileBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="desertSand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#fef3c7' : '#0b0f19'} />
              <stop offset="100%" stopColor={isLight ? '#fde68a' : '#17130b'} />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="840" height="400" rx="12" fill="url(#desertSand)" stroke="#334155" strokeWidth="1" />

          {/* Mediterranean Sea Coast */}
          <path
            d="M 40,85 Q 160,82 270,80 T 380,105 T 460,95 T 560,90 T 720,70"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="3.5"
            strokeDasharray="4 2"
          />
          <text x="140" y="55" fill="#0284c7" fontSize="11" fontWeight="bold">
            {isArabic ? 'البحر الأبيض المتوسط' : 'Mediterranean Sea'}
          </text>

          {/* Nile Delta & River Spine */}
          <path d="M 385,145 Q 330,110 270,80" fill="none" stroke="url(#nileBlue)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 385,145 Q 430,115 460,95" fill="none" stroke="url(#nileBlue)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 385,145 L 270,80 Q 365,75 460,95 Z" fill="#065f46" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.8" />
          <text x="365" y="115" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
            {isArabic ? 'الدلتا والقاهرة' : 'Delta & Cairo'}
          </text>

          <path
            d="M 540,390 L 530,350 Q 520,335 480,290 T 420,220 T 385,145"
            fill="none"
            stroke="url(#nileBlue)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text x="500" y="380" fill="#0284c7" fontSize="10" fontWeight="bold">
            {isArabic ? 'وادي النيل والصعيد' : 'Nile Valley • Upper Egypt'}
          </text>

          {/* Red Sea & Gulfs */}
          <path d="M 480,140 L 540,210 L 610,290 L 670,390" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 480,140 L 550,145 L 610,230 Z" fill="#78350f" fillOpacity="0.1" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />
          <text x="570" y="180" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
            {isArabic ? 'شبه جزيرة سيناء' : 'Sinai Peninsula'}
          </text>
          <text x="680" y="320" fill="#0ea5e9" fontSize="11" fontWeight="bold">
            {isArabic ? 'البحر الأحمر' : 'Red Sea'}
          </text>

          {/* Eastern Desert Mountain Ridge */}
          <path
            d="M 520,180 Q 550,210 570,260 T 630,350"
            fill="none"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />

          {/* Monastic Trail Routes */}
          <path
            d="M 270,80 Q 300,110 320,135 T 385,145 T 580,215"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
          />
          <path
            d="M 385,145 Q 430,220 480,290 T 520,335"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
          />

          {/* Interactive Monastic Hubs */}
          {monasticHubs.map((hub) => {
            const isSel = hub.milestoneId === selectedMilestoneId;
            const milestoneData = MONASTIC_MILESTONES.find((m) => m.id === hub.milestoneId);

            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (milestoneData) onSelectMilestone(milestoneData);
                }}
              >
                {isSel && (
                  <circle cx={hub.x} cy={hub.y} r="28" fill="#f59e0b" fillOpacity="0.25" className="animate-ping" />
                )}

                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isSel ? '16' : '11'}
                  fill={isSel ? '#f59e0b' : '#1e293b'}
                  stroke={isSel ? '#ffffff' : '#f59e0b'}
                  strokeWidth={isSel ? 2.5 : 1.5}
                />

                <text
                  x={hub.x}
                  y={hub.y + (isSel ? 4 : 3.5)}
                  textAnchor="middle"
                  fontSize={isSel ? '11' : '9'}
                  fill={isSel ? '#000000' : '#fde047'}
                  fontWeight="black"
                >
                  ✝
                </text>

                <rect
                  x={hub.x - 65}
                  y={hub.y + (isSel ? 20 : 16)}
                  width="130"
                  height="22"
                  rx="6"
                  fill={isSel ? '#b45309' : isLight ? '#f8fafc' : '#0f172a'}
                  stroke={isSel ? '#fde047' : '#475569'}
                  strokeWidth={isSel ? 1.5 : 0.8}
                />
                <text
                  x={hub.x}
                  y={hub.y + (isSel ? 34 : 30)}
                  textAnchor="middle"
                  fill={isSel ? '#ffffff' : isLight ? '#0f172a' : '#f8fafc'}
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {isArabic ? hub.poleAr.split(' ')[0] + ' ' + (hub.poleAr.split(' ')[1] || '') : hub.poleEn.split(' ')[0]} ({hub.era.split(' ')[0]})
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5">
          <div className="font-black text-amber-300 text-sm flex items-center gap-2">
            <span>📍 {isArabic ? activeHub.poleAr : activeHub.poleEn}</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
              {activeHub.era}
            </span>
          </div>
          <p className="text-slate-300 text-xs">
            <strong className="text-amber-400">{isArabic ? 'الرمز المؤسس: ' : 'Founder: '}</strong>
            {isArabic ? activeHub.figureAr : activeHub.figureEn}
          </p>
        </div>
        <div className="text-end">
          <div className="text-xs text-amber-300 font-semibold">
            {isArabic ? 'الأديرة البارزة: ' : 'Notable Monasteries: '}
          </div>
          <div className="text-slate-300 text-xs">{isArabic ? activeHub.monasteriesAr : activeHub.monasteriesEn}</div>
        </div>
      </div>
    </div>
  );
};

interface SynopticsSchematicProps {
  selectedGospelId: string;
  onSelectGospel: (gospel: GospelSynopticItem) => void;
  isArabic: boolean;
  isLight: boolean;
  isContrast: boolean;
}

const GospelSynopticsFourEvangelistsSchematic: React.FC<SynopticsSchematicProps> = ({
  selectedGospelId,
  onSelectGospel,
  isArabic,
  isLight,
  isContrast,
}) => {
  const evangelists: Array<{
    id: string;
    nameAr: string;
    nameEn: string;
    symbolAr: string;
    symbolEn: string;
    theologicalThemeAr: string;
    theologicalThemeEn: string;
    verseCount: string;
    icon: string;
    x: number;
    y: number;
  }> = [
    {
      id: 'matthew',
      nameAr: 'إنجيل متى',
      nameEn: 'Gospel of Matthew',
      symbolAr: 'الإنسان المجنح (الملاك)',
      symbolEn: 'Winged Man (Incarnation)',
      theologicalThemeAr: 'يسوع المسيح ابن داود، الملك المتمم لنبوءات العهد القديم',
      theologicalThemeEn: 'Christ the Messiah & King fulfilling Old Testament prophecies',
      verseCount: '1071 آية',
      icon: '👤',
      x: 100,
      y: 90,
    },
    {
      id: 'mark',
      nameAr: 'إنجيل مرقس',
      nameEn: 'Gospel of Mark',
      symbolAr: 'الأسد المجنح (الغلبة والسلطان)',
      symbolEn: 'Winged Lion (Sovereignty)',
      theologicalThemeAr: 'المسيح الخادم القوي صانع المعجزات، أقدم الأناجيل تدويناً',
      theologicalThemeEn: 'The Servant of God & mighty worker of miracles; earliest Gospel',
      verseCount: '661 آية',
      icon: '🦁',
      x: 100,
      y: 170,
    },
    {
      id: 'luke',
      nameAr: 'إنجيل لوقا',
      nameEn: 'Gospel of Luke',
      symbolAr: 'الثور المجنح (الفداء والكهنوت)',
      symbolEn: 'Winged Ox (Sacrifice & Priesthood)',
      theologicalThemeAr: 'صديق الخطاة ومخلص كل البشرية، الإنجيل ذو البعد الإنساني الشامل',
      theologicalThemeEn: 'The Savior of all humanity, focusing on compassion & outcasts',
      verseCount: '1151 آية',
      icon: '🐂',
      x: 100,
      y: 250,
    },
    {
      id: 'john',
      nameAr: 'إنجيل يوحنا',
      nameEn: 'Gospel of John',
      symbolAr: 'النسر المحلق (اللاهوت الأبدي)',
      symbolEn: 'Soaring Eagle (High Divinity)',
      theologicalThemeAr: 'الكلمة الأزلي المتجسد، ابن الله الواحد الفريد (في البدء كان الكلمة)',
      theologicalThemeEn: 'The Eternal Word Incarnate (Logos); profound high Christology',
      verseCount: '879 آية',
      icon: '🦅',
      x: 100,
      y: 330,
    },
  ];

  const activeEvangelist =
    evangelists.find((e) => e.id === selectedGospelId) || evangelists[0];

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20 p-4 shadow-xl overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-500/20 text-xs">
        <div className="flex items-center gap-2">
          <Scroll className="w-4 h-4 text-amber-400" />
          <span className="font-black text-amber-300">
            {isArabic
              ? 'الكائنات الروحية الإنجيلية الأربعة ومخطط فرضية المصدرين (Two-Source Hypothesis)'
              : 'The Four Evangelists Tetramorph & Two-Source Hypothesis Diagram'}
          </span>
        </div>
        <span className="text-[11px] text-amber-400 font-mono">
          CANONICAL-SYNOPTICS-MATRIX
        </span>
      </div>

      <div className="relative w-full aspect-[16/8] min-h-[310px] mt-3 flex items-center justify-center">
        <svg
          viewBox="0 0 880 400"
          className="w-full h-full select-none"
          style={{ filter: isContrast ? 'none' : 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.08))' }}
        >
          <defs>
            <linearGradient id="qSourceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Left: 4 Evangelists */}
          <rect x="20" y="20" width="310" height="360" rx="12" fill="#0f172a" fillOpacity="0.7" stroke="#334155" strokeWidth="1" />
          <text x="175" y="45" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="bold">
            {isArabic ? 'الرموز الإنجيلية الأربعة (التترامورف)' : 'The Four Evangelists (Tetramorph)'}
          </text>

          {evangelists.map((ev) => {
            const isSel = ev.id === selectedGospelId;
            const gospelData = GOSPEL_SYNOPTICS.find((g) => g.id === ev.id);

            return (
              <g
                key={ev.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => {
                  if (gospelData) onSelectGospel(gospelData);
                }}
              >
                <rect
                  x="35"
                  y={ev.y - 25}
                  width="280"
                  height="55"
                  rx="10"
                  fill={isSel ? '#b45309' : isLight ? '#ffffff' : '#1e293b'}
                  stroke={isSel ? '#fde047' : '#475569'}
                  strokeWidth={isSel ? 2 : 1}
                />

                <circle
                  cx="65"
                  cy={ev.y + 2.5}
                  r="18"
                  fill={isSel ? '#f59e0b' : '#334155'}
                  stroke={isSel ? '#ffffff' : '#f59e0b'}
                  strokeWidth="1.5"
                />
                <text x="65" y={ev.y + 7.5} textAnchor="middle" fontSize="15">
                  {ev.icon}
                </text>

                <text
                  x="95"
                  y={ev.y - 4}
                  fill={isSel ? '#ffffff' : isLight ? '#0f172a' : '#f8fafc'}
                  fontSize="11"
                  fontWeight="bold"
                >
                  {isArabic ? ev.nameAr : ev.nameEn}
                </text>
                <text
                  x="95"
                  y={ev.y + 12}
                  fill={isSel ? '#fef08a' : '#94a3b8'}
                  fontSize="8.5"
                >
                  {isArabic ? ev.symbolAr : ev.symbolEn} ({ev.verseCount})
                </text>
              </g>
            );
          })}

          {/* Right: Two-Source Hypothesis */}
          <rect x="350" y="20" width="510" height="360" rx="12" fill="#0f172a" fillOpacity="0.7" stroke="#334155" strokeWidth="1" />
          <text x="605" y="45" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
            {isArabic ? 'فرضية المصدرين في النقد الإزائي الأكاديمي' : 'Two-Source Hypothesis & Synoptic Interdependence'}
          </text>

          {/* Markan Priority */}
          <g className="cursor-pointer" onClick={() => {
            const m = GOSPEL_SYNOPTICS.find((g) => g.id === 'mark');
            if (m) onSelectGospel(m);
          }}>
            <rect x="380" y="70" width="200" height="65" rx="8" fill="url(#markGrad)" stroke="#fde047" strokeWidth="1.5" />
            <text x="480" y="95" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
              {isArabic ? 'أسبقية إنجيل مرقس (Mark)' : 'Markan Priority (Mark)'}
            </text>
            <text x="480" y="115" textAnchor="middle" fill="#fef3c7" fontSize="8.5">
              {isArabic ? 'أقدم الأناجيل تدويناً • ٦٦١ آية' : 'Earliest Gospel • 661 Verses'}
            </text>
          </g>

          {/* Q Source */}
          <g>
            <rect x="630" y="70" width="200" height="65" rx="8" fill="url(#qSourceGrad)" stroke="#c084fc" strokeWidth="1.5" />
            <text x="730" y="95" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
              {isArabic ? 'وثيقة الأقوال Q (Quelle)' : 'Q Document (Quelle)'}
            </text>
            <text x="730" y="115" textAnchor="middle" fill="#e9d5ff" fontSize="8.5">
              {isArabic ? 'أقوال وتعاليم مشتركة • ٢٣٠ آية' : 'Shared Sayings & Discourses • ~230 v'}
            </text>
          </g>

          {/* Special M & L */}
          <rect x="375" y="180" width="105" height="35" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
          <text x="427" y="198" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">
            {isArabic ? 'خاص متى (M)' : 'Special M'}
          </text>
          <text x="427" y="210" textAnchor="middle" fill="#94a3b8" fontSize="7.5">
            {isArabic ? 'المجوس وعظة الجبل' : 'Magi & Beatitudes'}
          </text>

          <rect x="730" y="180" width="105" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="782" y="198" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">
            {isArabic ? 'خاص لوقا (L)' : 'Special L'}
          </text>
          <text x="782" y="210" textAnchor="middle" fill="#94a3b8" fontSize="7.5">
            {isArabic ? 'السامري والابن الضال' : 'Good Samaritan & Luke parables'}
          </text>

          {/* Flows */}
          <path d="M 450,135 L 450,250" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M 510,135 L 670,250" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 700,135 L 530,250" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 760,135 L 760,250" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M 427,215 L 460,250" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M 782,215 L 760,250" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Matthew */}
          <g className="cursor-pointer" onClick={() => {
            const m = GOSPEL_SYNOPTICS.find((g) => g.id === 'matthew');
            if (m) onSelectGospel(m);
          }}>
            <rect x="400" y="255" width="180" height="75" rx="8" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="2" />
            <text x="490" y="280" textAnchor="middle" fill="#fde047" fontSize="12" fontWeight="bold">
              {isArabic ? 'إنجيل متى القانوني' : 'Canonical Matthew'}
            </text>
            <text x="490" y="298" textAnchor="middle" fill="#cbd5e1" fontSize="8.5">
              {isArabic ? 'مرقس + وثيقة Q + خاص متى (M)' : 'Mark + Q + Special M Source'}
            </text>
            <text x="490" y="315" textAnchor="middle" fill="#94a3b8" fontSize="8">
              {isArabic ? '١٠٧١ آية • موجه للمسيحيين من أصل يهودي' : '1,071 Verses • Jewish-Christian Audience'}
            </text>
          </g>

          {/* Luke */}
          <g className="cursor-pointer" onClick={() => {
            const l = GOSPEL_SYNOPTICS.find((g) => g.id === 'luke');
            if (l) onSelectGospel(l);
          }}>
            <rect x="630" y="255" width="180" height="75" rx="8" fill="#042f2e" stroke="#38bdf8" strokeWidth="2" />
            <text x="720" y="280" textAnchor="middle" fill="#67e8f9" fontSize="12" fontWeight="bold">
              {isArabic ? 'إنجيل لوقا القانوني' : 'Canonical Luke'}
            </text>
            <text x="720" y="298" textAnchor="middle" fill="#cbd5e1" fontSize="8.5">
              {isArabic ? 'مرقس + وثيقة Q + خاص لوقا (L)' : 'Mark + Q + Special L Source'}
            </text>
            <text x="720" y="315" textAnchor="middle" fill="#94a3b8" fontSize="8">
              {isArabic ? '١١٥١ آية • موجه للأمم واليونانيين وثاوفيلس' : '1,151 Verses • To Theophilus & Gentiles'}
            </text>
          </g>

          {/* John */}
          <g className="cursor-pointer" onClick={() => {
            const j = GOSPEL_SYNOPTICS.find((g) => g.id === 'john');
            if (j) onSelectGospel(j);
          }}>
            <rect x="400" y="345" width="410" height="25" rx="5" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
            <text x="605" y="361" textAnchor="middle" fill="#e0e7ff" fontSize="9" fontWeight="bold">
              {isArabic
                ? 'إنجيل يوحنا: رؤية لاهوتية مستقلة ومكملة للأناجيل الإزائية الثلاثة (٨٧٩ آية)'
                : 'Gospel of John: Independent Theological Witness Complementing the Synoptics (879 Verses)'}
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-xl">{activeEvangelist.icon}</span>
          <div>
            <div className="font-black text-amber-300 text-sm">
              {isArabic ? activeEvangelist.nameAr : activeEvangelist.nameEn} — {isArabic ? activeEvangelist.symbolAr : activeEvangelist.symbolEn}
            </div>
            <div className="text-slate-300 text-xs mt-0.5">
              {isArabic ? activeEvangelist.theologicalThemeAr : activeEvangelist.theologicalThemeEn}
            </div>
          </div>
        </div>
        <span className="text-amber-400 font-mono text-xs px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/30">
          {activeEvangelist.verseCount}
        </span>
      </div>
    </div>
  );
};

export const ChristianHeritageStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'sacraments',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<ChristianStudioTab>(initialTab);

  // Tab 1: Sacraments State
  const [selectedSacrament, setSelectedSacrament] = useState<HolySacrament>(HOLY_SACRAMENTS[0]);

  // Tab 2: Monastic Heritage State
  const [selectedMilestone, setSelectedMilestone] = useState<MonasticMilestone>(MONASTIC_MILESTONES[0]);

  // Tab 3: Gospel Synoptics State
  const [selectedGospel, setSelectedGospel] = useState<GospelSynopticItem>(GOSPEL_SYNOPTICS[0]);

  // Tab 4: Scripture Audio Matrix State
  const [selectedScripture, setSelectedScripture] = useState<AuthenticScriptureRecording>(AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS[0]);

  // Tab 5: Bioethics State
  const [selectedTopic, setSelectedTopic] = useState<BioethicsTopic>(BIOETHICS_TOPICS[0]);

  // Tab 6: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Authentic Christian Church Audio Player State (تسجيلات كنسية حقيقية - بلا نطق حاسوبي)
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio on tab change or component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingAudioId(null);
      setAudioLoading(false);
      setAudioError(null);
    };
  }, [activeTab]);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingAudioId(null);
    setAudioLoading(false);
    setAudioProgress(0);
    setAudioCurrentTime(0);
  };

  const playScriptureAudio = (
    id: string,
    primaryUrl: string,
    fallbackUrl?: string
  ) => {
    // If currently playing this audio, toggle pause
    if (playingAudioId === id && audioRef.current) {
      stopAudio();
      return;
    }

    // Stop any existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setPlayingAudioId(id);
    setAudioLoading(true);
    setAudioError(null);
    setAudioProgress(0);
    setAudioCurrentTime(0);

    const audio = new Audio(primaryUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.oncanplay = () => {
      setAudioLoading(false);
    };

    audio.onloadedmetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setAudioDuration(audio.duration);
      }
    };

    audio.ontimeupdate = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setAudioProgress((audio.currentTime / audio.duration) * 100);
        setAudioCurrentTime(audio.currentTime);
      }
    };

    audio.onplaying = () => {
      setAudioLoading(false);
    };

    audio.onended = () => {
      setPlayingAudioId(null);
      setAudioLoading(false);
      setAudioProgress(0);
      audioRef.current = null;
    };

    audio.onerror = () => {
      if (fallbackUrl) {
        console.warn(`Primary audio failed for ${id}, switching to church fallback URL...`);
        const fallbackAudio = new Audio(fallbackUrl);
        fallbackAudio.preload = 'auto';
        audioRef.current = fallbackAudio;

        fallbackAudio.oncanplay = () => setAudioLoading(false);
        fallbackAudio.onplaying = () => setAudioLoading(false);
        fallbackAudio.onloadedmetadata = () => {
          if (fallbackAudio.duration && !isNaN(fallbackAudio.duration)) {
            setAudioDuration(fallbackAudio.duration);
          }
        };
        fallbackAudio.ontimeupdate = () => {
          if (fallbackAudio.duration && !isNaN(fallbackAudio.duration) && fallbackAudio.duration > 0) {
            setAudioProgress((fallbackAudio.currentTime / fallbackAudio.duration) * 100);
            setAudioCurrentTime(fallbackAudio.currentTime);
          }
        };
        fallbackAudio.onended = () => {
          setPlayingAudioId(null);
          setAudioLoading(false);
          setAudioProgress(0);
          audioRef.current = null;
        };
        fallbackAudio.onerror = () => {
          setAudioLoading(false);
          setPlayingAudioId(null);
          setAudioError(
            isArabic
              ? 'تعذر تشغيل التسجيل الصوتي للنص الإنجيلي حالياً، يرجى التحقق من اتصال الشبكة.'
              : 'Could not stream church scripture recording, please check network connection.'
          );
          audioRef.current = null;
        };
        fallbackAudio.play().catch(() => {
          setAudioLoading(false);
          setPlayingAudioId(null);
          audioRef.current = null;
        });
      } else {
        setAudioLoading(false);
        setPlayingAudioId(null);
        setAudioError(
          isArabic
            ? 'تعذر تشغيل التسجيل الصوتي للنص الإنجيلي حالياً، يرجى التحقق من اتصال الشبكة.'
            : 'Could not stream church scripture recording, please check network connection.'
        );
        audioRef.current = null;
      }
    };

    audio.play().catch((err) => {
      console.warn('Audio play prevented by browser policy or network issue:', err);
      setAudioLoading(false);
    });
  };

  const formatAudioTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleQuizSubmit = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === CHRISTIAN_SCENARIO_QUIZ[currentQIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < CHRISTIAN_SCENARIO_QUIZ.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
  };

  const themeClasses = isContrast
    ? 'bg-black text-yellow-300 border-yellow-400'
    : isLight
    ? 'bg-amber-50/40 text-slate-900 border-amber-200'
    : 'bg-gradient-to-br from-slate-950 via-purple-950/30 to-amber-950/40 text-amber-50 border-amber-900/50';

  const cardClasses = isContrast
    ? 'bg-black border border-yellow-400/80 shadow-none'
    : isLight
    ? 'bg-white border border-amber-200/80 shadow-sm'
    : 'bg-slate-900/80 backdrop-blur border border-amber-500/20 shadow-xl shadow-amber-950/20';

  return (
    <div
      className={`border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-2xl min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/30">
            <Cross className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                {isArabic ? 'مختبر التراث والدراسات المسيحية التفاعلي' : 'Christian Heritage & Studies Interactive Studio'}
              </h2>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                ✝️ {isArabic ? 'معتمد رسمياً' : 'Accredited'}
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              {isArabic
                ? 'استكشاف الأسرار الكنسية، مسار الرهبنة وتاريخ الكنيسة القبطية، مقارنة الأناجيل، والأخلاقيات الحيوية المعاصرة'
                : 'Interactive exploration of Holy Sacraments, Coptic Monastic Heritage, Gospel Synoptics, and Bioethics'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-amber-500/20">
          <button
            onClick={() => setActiveTab('sacraments')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'sacraments'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Church className="w-4 h-4" />
            <span>{isArabic ? 'أسرار الكنيسة (٧)' : 'Sacraments (7)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('monasticism')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'monasticism'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'التراث والرهبنة' : 'Monastic Heritage'}</span>
          </button>

          <button
            onClick={() => setActiveTab('synoptics')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'synoptics'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>{isArabic ? 'الأناجيل الإزائية' : 'Gospel Synoptics'}</span>
          </button>

          <button
            onClick={() => setActiveTab('scriptures')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'scriptures'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isArabic ? 'تسجيلات النصوص المقررة' : 'Scripture Audio'}</span>
          </button>

          <button
            onClick={() => setActiveTab('bioethics')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'bioethics'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>{isArabic ? 'الأخلاقيات الحيوية' : 'Bioethics'}</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{isArabic ? 'المحاكاة الوزارية' : 'Scenario Quiz'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-amber-300/80 hover:text-white rounded-lg hover:bg-amber-800/30 transition-colors border border-amber-500/30"
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Tab 1: Holy Sacraments Explorer */}
      {activeTab === 'sacraments' && (
        <div className="space-y-6">
          <CopticIconostasisSacramentsVectorSchematic
            selectedSacramentId={selectedSacrament.id}
            onSelectSacrament={(sac) => setSelectedSacrament(sac)}
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sacraments Selector Sidebar */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Church className="w-4 h-4 text-amber-500" />
                {isArabic ? 'الأسرار الكنسية السبعة' : 'The Seven Sacraments'}
              </h3>
              {HOLY_SACRAMENTS.map((sacrament) => {
                const isSelected = selectedSacrament.id === sacrament.id;
                return (
                  <button
                    key={sacrament.id}
                    onClick={() => setSelectedSacrament(sacrament)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-600/20 to-purple-600/20 border-amber-500 text-amber-300 font-bold shadow-md'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isSelected ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'
                        }`}
                      />
                      <div>
                        <div className="text-sm leading-tight">
                          {isArabic ? sacrament.nameAr : sacrament.nameEn}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {isArabic ? sacrament.categoryAr : sacrament.categoryEn}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                        sacrament.isRepeatable
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      {isArabic
                        ? sacrament.isRepeatable
                          ? 'مكرر'
                          : 'غير مكرر'
                        : sacrament.isRepeatable
                        ? 'Repeatable'
                        : 'Non-repeatable'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sacrament Details Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {isArabic ? selectedSacrament.categoryAr : selectedSacrament.categoryEn}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black mt-2 text-white">
                    {isArabic ? selectedSacrament.nameAr : selectedSacrament.nameEn}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">
                    {isArabic ? 'خاصية التكرار:' : 'Repeatability:'}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-lg font-bold ${
                      selectedSacrament.isRepeatable
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}
                  >
                    {isArabic
                      ? selectedSacrament.isRepeatable
                        ? 'سر مكرر للنمو الروحي'
                        : 'سر غير مكرر (يمنح الختم الإلهي)'
                      : selectedSacrament.isRepeatable
                      ? 'Repeatable Sacrament'
                      : 'Non-Repeatable Seal'}
                  </span>
                </div>
              </div>

              {/* Core Duality: Visible Sign vs Invisible Grace */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>{isArabic ? 'العلامة الظاهرة (المنظورة)' : 'The Visible Sign'}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isArabic ? selectedSacrament.visibleSignAr : selectedSacrament.visibleSignEn}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isArabic ? 'النعمة الباطنة (غير المنظورة)' : 'The Invisible Grace'}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isArabic ? selectedSacrament.invisibleGraceAr : selectedSacrament.invisibleGraceEn}
                  </p>
                </div>
              </div>

              {/* Scripture Basis with Authentic Church Audio */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    {isArabic ? 'السند الكتابي والتأسيس الإلهي' : 'Scriptural Foundation'}
                  </span>

                  {selectedSacrament.audioUrl && (
                    <button
                      onClick={() =>
                        playScriptureAudio(
                          selectedSacrament.id,
                          selectedSacrament.audioUrl!,
                          selectedSacrament.audioFallbackUrl
                        )
                      }
                      disabled={audioLoading && playingAudioId === selectedSacrament.id}
                      className={`flex items-center gap-2 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-semibold transition-all border ${
                        playingAudioId === selectedSacrament.id
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                          : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border-amber-500/30'
                      }`}
                    >
                      {audioLoading && playingAudioId === selectedSacrament.id ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                        </>
                      ) : playingAudioId === selectedSacrament.id ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'إيقاف التسجيل الكنسي' : 'Pause Recording'}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{isArabic ? 'استماع للتسجيل الكنسي المعتمد' : 'Listen to Church Audio'}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Active Audio Wave & Duration Panel */}
                {playingAudioId === selectedSacrament.id && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-amber-300">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Music className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                        {isArabic ? selectedSacrament.audioCitationAr : selectedSacrament.audioCitationEn}
                      </span>
                      <span className="text-[10px] text-amber-400/90 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {isArabic ? selectedSacrament.reciterAr : selectedSacrament.reciterEn}
                      </span>
                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-amber-400 h-1.5 transition-all duration-200 rounded-full"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono">{formatAudioTime(audioCurrentTime)}</span>
                      <span className="text-amber-300 font-semibold flex items-center gap-1">
                        <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
                        {isArabic ? 'تسجيل كنسي حقيقي — غير مخلق آلياً' : 'Authentic human voice recording'}
                      </span>
                      <span className="font-mono">{audioDuration > 0 ? formatAudioTime(audioDuration) : '--:--'}</span>
                    </div>
                  </div>
                )}

                {audioError && playingAudioId === selectedSacrament.id && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{audioError}</span>
                  </div>
                )}

                <blockquote className="text-sm md:text-base font-serif italic text-amber-200/90 leading-relaxed border-s-2 border-amber-500 ps-3">
                  {isArabic ? selectedSacrament.scriptureBasisAr : selectedSacrament.scriptureBasisEn}
                </blockquote>
              </div>

              {/* Theological & Pastoral Depth */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isArabic ? 'العمق اللاهوتي والرعوي' : 'Theological & Pastoral Depth'}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isArabic ? selectedSacrament.theologicalDepthAr : selectedSacrament.theologicalDepthEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Monastic Heritage & Milestones */}
      {activeTab === 'monasticism' && (
        <div className="space-y-6">
          <EgyptianMonasticHeritageMapSchematic
            selectedMilestoneId={selectedMilestone.id}
            onSelectMilestone={(m) => setSelectedMilestone(m)}
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Milestone Selection Timeline */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-amber-500" />
                {isArabic ? 'محطات التراث الرهباني القبطي' : 'Monastic Milestones'}
              </h3>
              {MONASTIC_MILESTONES.map((milestone) => {
                const isSelected = selectedMilestone.id === milestone.id;
                return (
                  <button
                    key={milestone.id}
                    onClick={() => setSelectedMilestone(milestone)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-600/20 to-purple-600/20 border-amber-500 text-amber-300 font-bold shadow-md'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-xs text-amber-400 font-mono mb-1">
                      {isArabic ? milestone.eraAr : milestone.eraEn}
                    </div>
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? milestone.leaderAr : milestone.leaderEn}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      📍 {isArabic ? milestone.locationAr : milestone.locationEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Milestone Details Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
              <div className="pb-3 border-b border-amber-500/20">
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  {isArabic ? selectedMilestone.eraAr : selectedMilestone.eraEn}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {isArabic ? selectedMilestone.leaderAr : selectedMilestone.leaderEn}
                </h3>
                <div className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{isArabic ? selectedMilestone.locationAr : selectedMilestone.locationEn}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  {isArabic ? 'الدلالة التاريخية والتأسيس الروحي' : 'Historical & Spiritual Significance'}
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {isArabic ? selectedMilestone.significanceAr : selectedMilestone.significanceEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {isArabic ? 'الأثر الحضاري والتراث الإنساني الخالد' : 'Enduring Civilizational & Literary Legacy'}
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {isArabic ? selectedMilestone.legacyAr : selectedMilestone.legacyEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Gospel Synoptics Comparative Matrix */}
      {activeTab === 'synoptics' && (
        <div className="space-y-6">
          <GospelSynopticsFourEvangelistsSchematic
            selectedGospelId={selectedGospel.id}
            onSelectGospel={(g) => setSelectedGospel(g)}
            isArabic={isArabic}
            isLight={isLight}
            isContrast={isContrast}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Gospel Selection */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Scroll className="w-4 h-4 text-amber-500" />
                {isArabic ? 'الأناجيل الأربعة القانونية' : 'The Four Canonical Gospels'}
              </h3>
              {GOSPEL_SYNOPTICS.map((gospel) => {
                const isSelected = selectedGospel.id === gospel.id;
                return (
                  <button
                    key={gospel.id}
                    onClick={() => setSelectedGospel(gospel)}
                    className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-600/20 to-purple-600/20 border-amber-500 text-amber-300 font-bold shadow-md'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? gospel.gospelAr : gospel.gospelEn}
                    </div>
                    <div className="text-xs text-amber-400 mt-1">
                      {isArabic ? gospel.symbolAr : gospel.symbolEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Gospel Analysis Card */}
            <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
            <div className="pb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                <span>{isArabic ? selectedGospel.symbolAr : selectedGospel.symbolEn}</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                {isArabic ? selectedGospel.gospelAr : selectedGospel.gospelEn}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                ✍️ {isArabic ? selectedGospel.authorAr : selectedGospel.authorEn}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isArabic ? 'الجمهور المستهدف' : 'Target Audience'}
                </div>
                <p className="text-sm text-slate-200">
                  {isArabic ? selectedGospel.targetAudienceAr : selectedGospel.targetAudienceEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1.5">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  {isArabic ? 'الموضوع والمحور اللاهوتي الرئيسي' : 'Central Theological Theme'}
                </div>
                <p className="text-sm text-slate-200">
                  {isArabic ? selectedGospel.keyThemeAr : selectedGospel.keyThemeEn}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {isArabic ? 'أبرز المقاطع والخصائص الأسلوبية' : 'Notable Passages & Characteristics'}
                </div>

                {selectedGospel.audioUrl && (
                  <button
                    onClick={() =>
                      playScriptureAudio(
                        selectedGospel.id,
                        selectedGospel.audioUrl!,
                        selectedGospel.audioFallbackUrl
                      )
                    }
                    disabled={audioLoading && playingAudioId === selectedGospel.id}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      playingAudioId === selectedGospel.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border-amber-500/30'
                    }`}
                  >
                    {audioLoading && playingAudioId === selectedGospel.id ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                      </>
                    ) : playingAudioId === selectedGospel.id ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'إيقاف التسجيل' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>
                          {isArabic
                            ? `استماع لتسجيل: ${selectedGospel.passageRefAr || selectedGospel.gospelAr}`
                            : `Listen: ${selectedGospel.passageRefEn || selectedGospel.gospelEn}`}
                        </span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {playingAudioId === selectedGospel.id && (
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-amber-300">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Music className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                      {isArabic ? selectedGospel.passageRefAr : selectedGospel.passageRefEn}
                    </span>
                    <span className="text-[10px] text-amber-400/90 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {isArabic ? 'الكتاب المقدس المسموع (سميث وفانديك)' : 'Audio Bible (Smith & Van Dyck)'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-amber-400 h-1.5 transition-all duration-200 rounded-full"
                      style={{ width: `${audioProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span className="font-mono">{formatAudioTime(audioCurrentTime)}</span>
                    <span className="text-amber-300 font-semibold flex items-center gap-1">
                      <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
                      {isArabic ? 'تسجيل كنسي حقيقي — غير مخلق آلياً' : 'Authentic human voice recording'}
                    </span>
                    <span className="font-mono">{audioDuration > 0 ? formatAudioTime(audioDuration) : '--:--'}</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-slate-200 leading-relaxed">
                {isArabic ? selectedGospel.notablePassageAr : selectedGospel.notablePassageEn}
              </p>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Tab: Dedicated Authentic Christian Scripture Audio Studio */}
      {activeTab === 'scriptures' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Scripture Selection Sidebar */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-3">
              <Volume2 className="w-4 h-4 text-amber-500" />
              {isArabic ? 'تسجيلات النصوص الإنجيلية المقررة' : 'Accredited Scripture Recordings'}
            </h3>
            {AUTHENTIC_CHRISTIAN_SCRIPTURE_RECORDINGS.map((rec) => {
              const isSelected = selectedScripture.id === rec.id;
              const isPlaying = playingAudioId === rec.id;
              return (
                <button
                  key={rec.id}
                  onClick={() => setSelectedScripture(rec)}
                  className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-600/20 to-purple-600/20 border-amber-500 text-amber-300 font-bold shadow-md'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-bold leading-tight">
                      {isArabic ? rec.titleAr : rec.titleEn}
                    </div>
                    {isPlaying && (
                      <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 shrink-0">
                        <Music className="w-3 h-3 animate-spin" />
                        {isArabic ? 'يُعزف' : 'Playing'}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-amber-400/90 mt-1 flex items-center gap-1.5 font-sans">
                    <BookOpen className="w-3 h-3 text-amber-500" />
                    <span>{isArabic ? rec.referenceAr : rec.referenceEn}</span>
                  </div>
                </button>
              );
            })}

            {/* Note badge */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Radio className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تسجيلات صوتية حقيقية 100%' : '100% Authentic Voice'}</span>
              </div>
              <p className="leading-relaxed">
                {isArabic
                  ? 'تم استبدال النطق الحاسوبي بتسجيلات صوتية كنسية حقيقية بصوت قراء معتمدين للكتاب المقدس العربي (سميث وفانديك) لضمان الدقة الروحية واللغوية الكاملة.'
                  : 'Synthesized browser speech has been replaced by authentic human church audio recordings from official Arabic Holy Bible archives.'}
              </p>
            </div>
          </div>

          {/* Scripture Detail & Audio Player Card */}
          <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
            {/* Header & Meta */}
            <div className="pb-3 border-b border-amber-500/20 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {isArabic ? selectedScripture.referenceAr : selectedScripture.referenceEn}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  {isArabic ? selectedScripture.titleAr : selectedScripture.titleEn}
                </h3>
                <p className="text-xs md:text-sm text-amber-200/80 mt-1">
                  ✨ {isArabic ? selectedScripture.themeAr : selectedScripture.themeEn}
                </p>
              </div>

              {/* Player Button */}
              <button
                onClick={() =>
                  playScriptureAudio(
                    selectedScripture.id,
                    selectedScripture.audioUrl,
                    selectedScripture.audioFallbackUrl
                  )
                }
                disabled={audioLoading && playingAudioId === selectedScripture.id}
                className={`flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-sm font-bold transition-all shadow-lg border ${
                  playingAudioId === selectedScripture.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 shadow-amber-500/30'
                    : 'bg-gradient-to-r from-amber-600/30 to-purple-600/30 text-amber-300 hover:from-amber-600/40 hover:to-purple-600/40 border-amber-500/40'
                }`}
              >
                {audioLoading && playingAudioId === selectedScripture.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isArabic ? 'جارٍ التحميل...' : 'Buffering...'}</span>
                  </>
                ) : playingAudioId === selectedScripture.id ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>{isArabic ? 'إيقاف مؤقت' : 'Pause'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>{isArabic ? 'تشغيل التسجيل الصوتي' : 'Play Authentic Audio'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Active Audio Player Progress Bar */}
            {playingAudioId === selectedScripture.id && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-amber-300">
                  <span className="flex items-center gap-2 font-bold">
                    <Music className="w-4 h-4 animate-bounce text-amber-400" />
                    {isArabic ? selectedScripture.referenceAr : selectedScripture.referenceEn}
                  </span>
                  <span className="text-[11px] text-amber-400 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {isArabic ? selectedScripture.reciterAr : selectedScripture.reciterEn}
                  </span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 transition-all duration-200 rounded-full"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-amber-300">{formatAudioTime(audioCurrentTime)}</span>
                  <span className="text-amber-400/90 font-medium flex items-center gap-1.5 text-[11px]">
                    <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    {isArabic ? 'تسجيل كنسي حقيقي — غير مخلق آلياً' : 'Authentic Church Recording — No AI'}
                  </span>
                  <span className="font-mono">{audioDuration > 0 ? formatAudioTime(audioDuration) : '--:--'}</span>
                </div>
              </div>
            )}

            {audioError && playingAudioId === selectedScripture.id && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{audioError}</span>
              </div>
            )}

            {/* Scripture Full Biblical Text */}
            <div className="p-5 md:p-6 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Scroll className="w-3.5 h-3.5 text-amber-400" />
                  {isArabic ? 'النص الإنجيلي المعتمد في المنهج الوزاري' : 'Ministry-Accredited Scripture Text'}
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {isArabic ? 'ترجمة سميث وفانديك' : 'Smith & Van Dyck'}
                </span>
              </div>
              <blockquote className="text-base md:text-lg font-serif italic text-amber-100 leading-loose border-s-4 border-amber-500 ps-4 py-1">
                {isArabic ? selectedScripture.textAr : selectedScripture.textEn}
              </blockquote>
            </div>

            {/* Secondary Language Translation & Theological Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-1.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isArabic ? 'الترجمة الإنجليزية الموازية' : 'Arabic Translation'}
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic">
                  {isArabic ? selectedScripture.textEn : selectedScripture.textAr}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isArabic ? 'المدلول الروحي واللاهوتي' : 'Spiritual & Theological Reflection'}
                </div>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                  {isArabic ? selectedScripture.themeAr : selectedScripture.themeEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Contemporary Bioethics Sandbox */}
      {activeTab === 'bioethics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Bioethics Topics Selector */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-amber-500" />
              {isArabic ? 'قضايا الأخلاقيات الحيوية والطبية' : 'Bioethical Issues'}
            </h3>
            {BIOETHICS_TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-start p-3.5 min-h-[44px] rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-600/20 to-purple-600/20 border-amber-500 text-amber-300 font-bold shadow-md'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-sm font-bold leading-tight">
                    {isArabic ? topic.titleAr : topic.titleEn}
                  </div>
                  <div className="mt-1.5">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                        topic.statusEn === 'Permitted & Encouraged'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : topic.statusEn === 'Strictly Prohibited'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {isArabic ? topic.statusAr : topic.statusEn}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bioethics Analysis Card */}
          <div className={`lg:col-span-8 ${cardClasses} p-5 md:p-6 rounded-2xl space-y-5`}>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
              <h3 className="text-xl md:text-2xl font-black text-white">
                {isArabic ? selectedTopic.titleAr : selectedTopic.titleEn}
              </h3>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold ${
                  selectedTopic.statusEn === 'Permitted & Encouraged'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : selectedTopic.statusEn === 'Strictly Prohibited'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                {isArabic ? selectedTopic.statusAr : selectedTopic.statusEn}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" />
                {isArabic ? 'المبدأ اللاهوتي والكرامة الإنسانية' : 'Theological Principle & Human Dignity'}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {isArabic ? selectedTopic.theologicalPrincipleAr : selectedTopic.theologicalPrincipleEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                {isArabic ? 'الضوابط الرعوية والتوجيه الأخلاقي' : 'Pastoral Guidance & Ethical Boundaries'}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {isArabic ? selectedTopic.pastoralGuidanceAr : selectedTopic.pastoralGuidanceEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Ministerial Scenario Simulator / Quiz */}
      {activeTab === 'quiz' && (
        <div className={`max-w-3xl mx-auto w-full ${cardClasses} p-6 rounded-2xl space-y-6`}>
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-amber-400" />
              <h3 className="font-black text-lg">
                {isArabic ? 'محاكي الأسئلة الوزارية وسيناريوهات الفكر المسيحي' : 'Ministerial Scenario & Reasoning Quiz'}
              </h3>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {isArabic
                ? `السؤال ${currentQIndex + 1} من ${CHRISTIAN_SCENARIO_QUIZ.length}`
                : `Question ${currentQIndex + 1} of ${CHRISTIAN_SCENARIO_QUIZ.length}`}
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-bold text-white leading-relaxed">
              {isArabic
                ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].questionAr
                : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].questionEn}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {(isArabic
                ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].optionsAr
                : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].optionsEn
              ).map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === CHRISTIAN_SCENARIO_QUIZ[currentQIndex].correctIndex;

                let btnStyles = 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyles = 'bg-red-950/40 border-red-500 text-red-200';
                  }
                } else if (isSelected) {
                  btnStyles = 'bg-amber-600/30 border-amber-500 text-amber-300 font-bold';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleQuizSubmit(idx)}
                    className={`w-full text-start p-4 min-h-[48px] rounded-xl border text-sm leading-relaxed transition-all flex items-start justify-between gap-3 ${btnStyles}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-3 animate-fadeIn">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isArabic ? 'التحليل المنهجي المعتمد' : 'Accredited Curriculum Analysis'}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isArabic
                    ? CHRISTIAN_SCENARIO_QUIZ[currentQIndex].explanationAr
                    : CHRISTIAN_SCENARIO_QUIZ[currentQIndex].explanationEn}
                </p>
                <div className="flex justify-end pt-2">
                  {currentQIndex < CHRISTIAN_SCENARIO_QUIZ.length - 1 ? (
                    <button
                      onClick={nextQuestion}
                      className="px-5 py-2.5 min-h-[44px] flex items-center justify-center rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-md shadow-amber-600/30"
                    >
                      {isArabic ? 'السؤال التالي ←' : 'Next Question →'}
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-emerald-400">
                        {isArabic
                          ? `النتيجة النهائية: ${quizScore} من ${CHRISTIAN_SCENARIO_QUIZ.length}`
                          : `Final Score: ${quizScore} / ${CHRISTIAN_SCENARIO_QUIZ.length}`}
                      </span>
                      <button
                        onClick={resetQuiz}
                        className="flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-600"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'إعادة الاختبار' : 'Restart Quiz'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
