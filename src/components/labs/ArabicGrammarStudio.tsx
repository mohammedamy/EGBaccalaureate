import React, { useState } from 'react';
import {
  ARABIC_IRAB_SENTENCES,
  ARABIC_DERIVATIVE_RULES,
  ARABIC_RHETORICAL_FIGURES,
  ARABIC_ORTHOGRAPHY_TRAPS,
  ARABIC_MINISTERIAL_EXAM_TRAPS,
  type IrabToken,
  type IrabSentence,
  type DerivativeRule,
  type RhetoricalFigure,
} from '../../data/arabicLab/arabicGrammarLabData';
import {
  BookOpen,
  Sparkles,
  Scale,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Feather,
  Maximize2,
  Minimize2,
  Volume2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';
import { aiVoiceEngine } from '../../services/aiVoiceEngine';

// =========================================================================
// VECTOR SCHEMATIC 1: ARABIC SYNTAX PARSE TREE (شجرة الإعراب والتحليل التركيبي)
// =========================================================================
interface ArabicSyntaxParseTreeProps {
  sentence: IrabSentence;
  selectedTokenIndex: number | null;
  onSelectToken: (idx: number) => void;
}

const ArabicSyntaxParseTreeSchematic: React.FC<ArabicSyntaxParseTreeProps> = ({
  sentence,
  selectedTokenIndex,
  onSelectToken,
}) => {
  const tokens = sentence.tokens;
  const numTokens = tokens.length;
  const svgWidth = 840;
  const svgHeight = 280;

  // Root node at top center
  const rootX = svgWidth / 2;
  const rootY = 38;

  // Level 1: 3 Major Syntactic Pillars (العُمَد - الفَضَلات - التوابع والأدوات)
  const pillars = [
    { id: 'umad', titleAr: 'العُمَد (المسند والمسند إليه)', x: 190, y: 110, color: '#10b981' },
    { id: 'fadlat', titleAr: 'الفَضَلات والمفعولات', x: 420, y: 110, color: '#f59e0b' },
    { id: 'tawabi', titleAr: 'التوابع والروابط والأدوات', x: 650, y: 110, color: '#06b6d4' },
  ];

  // Map each token index to a corresponding pillar
  const getPillarIndexForToken = (token: IrabToken): number => {
    const role = token.roleAr;
    if (
      role.includes('مبتدأ') ||
      role.includes('خبر') ||
      role.includes('فاعل') ||
      role.includes('فعل') ||
      role.includes('نائب فاعل') ||
      role.includes('اسم إن') ||
      role.includes('اسم كان') ||
      role.includes('خبر إن') ||
      role.includes('خبر كان')
    ) {
      return 0; // العمد
    }
    if (
      role.includes('مفعول') ||
      role.includes('حال') ||
      role.includes('تمييز') ||
      role.includes('مستثنى') ||
      role.includes('ظرف')
    ) {
      return 1; // الفضلات
    }
    return 2; // التوابع والأدوات
  };

  // Positions of token nodes at y = 220
  const marginX = 60;
  const usableWidth = svgWidth - marginX * 2;
  const tokenSpacing = numTokens > 1 ? usableWidth / (numTokens - 1) : usableWidth;

  const getCaseColor = (caseAr: string) => {
    if (caseAr.includes('مرفوع') || caseAr.includes('رفع'))
      return { fill: 'rgba(16, 185, 129, 0.15)', stroke: '#10b981', text: '#34d399' };
    if (caseAr.includes('منصوب') || caseAr.includes('نصب'))
      return { fill: 'rgba(245, 158, 11, 0.15)', stroke: '#f59e0b', text: '#fbbf24' };
    if (caseAr.includes('مجرور') || caseAr.includes('جر'))
      return { fill: 'rgba(6, 182, 212, 0.15)', stroke: '#06b6d4', text: '#38bdf8' };
    if (
      caseAr.includes('مجزوم') ||
      caseAr.includes('جزم') ||
      caseAr.includes('بناء') ||
      caseAr.includes('مبني')
    )
      return { fill: 'rgba(168, 85, 247, 0.15)', stroke: '#a855f7', text: '#c084fc' };
    return { fill: 'rgba(148, 163, 184, 0.15)', stroke: '#94a3b8', text: '#cbd5e1' };
  };

  return (
    <div className="bg-gradient-to-b from-slate-900/90 via-slate-950 to-amber-950/20 border border-amber-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* Top telemetry title bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-black text-amber-300 tracking-wider">
            المخطط الشجري للتحليل الإعرابي والتركيبي (Tree Syntax Diagram)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-300">
            {sentence.category === 'special_styles'
              ? 'أسلوب نحوي خاص'
              : sentence.category === 'derivatives'
              ? 'إعمال المشتقات'
              : sentence.category === 'verbs_syntax'
              ? 'إعراب وبناء الأفعال'
              : 'أفخاخ الأدوات والحروف'}
          </span>
          <span className="text-slate-500">|</span>
          <span>{numTokens} عناصر تركيبية</span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full min-w-[700px] h-auto select-none"
          style={{ maxHeight: '310px' }}
        >
          <defs>
            <filter id="arabicGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="arabicGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Grid lines / Decorative Parchment lines */}
          <line
            x1="20"
            y1={rootY}
            x2={svgWidth - 20}
            y2={rootY}
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.25"
          />
          <line
            x1="20"
            y1="110"
            x2={svgWidth - 20}
            y2="110"
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.2"
          />
          <line
            x1="20"
            y1="220"
            x2={svgWidth - 20}
            y2="220"
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.25"
          />

          {/* Connectors from Root to Pillars */}
          {pillars.map((pillar, idx) => (
            <path
              key={`root-to-${pillar.id}`}
              d={`M ${rootX} ${rootY + 18} C ${rootX} ${(rootY + pillar.y) / 2}, ${pillar.x} ${(rootY + pillar.y) / 2}, ${pillar.x} ${pillar.y - 16}`}
              fill="none"
              stroke={pillar.color}
              strokeWidth="2"
              opacity="0.45"
              strokeDasharray={idx === 1 ? 'none' : '4,3'}
            />
          ))}

          {/* Connectors from Pillars to Token Nodes */}
          {tokens.map((token, idx) => {
            const pillarIdx = getPillarIndexForToken(token);
            const parentPillar = pillars[pillarIdx];
            const tokenX = numTokens === 1 ? svgWidth / 2 : marginX + idx * tokenSpacing;
            const tokenY = 220;
            const isSelected = selectedTokenIndex === idx;
            const caseStyle = getCaseColor(token.caseAr);

            return (
              <g key={`branch-${idx}`}>
                <path
                  d={`M ${parentPillar.x} ${parentPillar.y + 16} C ${parentPillar.x} ${(parentPillar.y + tokenY) / 2}, ${tokenX} ${(parentPillar.y + tokenY) / 2}, ${tokenX} ${tokenY - 24}`}
                  fill="none"
                  stroke={isSelected ? '#f59e0b' : caseStyle.stroke}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                  opacity={isSelected ? '0.95' : '0.4'}
                  filter={isSelected ? 'url(#arabicGlow)' : undefined}
                />
              </g>
            );
          })}

          {/* Root Node: Sentence Category */}
          <g transform={`translate(${rootX}, ${rootY})`}>
            <rect
              x="-120"
              y="-18"
              width="240"
              height="36"
              rx="18"
              fill="url(#arabicGoldGrad)"
              stroke="#fbbf24"
              strokeWidth="2"
              filter="url(#arabicGlow)"
            />
            <text
              textAnchor="middle"
              y="5"
              fill="#020617"
              fontSize="13"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              🏛️ {sentence.titleAr.length > 25 ? sentence.titleAr.slice(0, 24) + '...' : sentence.titleAr}
            </text>
          </g>

          {/* Level 1: 3 Pillar Nodes */}
          {pillars.map((pillar) => (
            <g key={pillar.id} transform={`translate(${pillar.x}, ${pillar.y})`}>
              <rect
                x="-95"
                y="-15"
                width="190"
                height="30"
                rx="10"
                fill="#0f172a"
                stroke={pillar.color}
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
              <text
                textAnchor="middle"
                y="5"
                fill={pillar.color}
                fontSize="11"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {pillar.titleAr}
              </text>
            </g>
          ))}

          {/* Level 2: Token Nodes */}
          {tokens.map((token, idx) => {
            const tokenX = numTokens === 1 ? svgWidth / 2 : marginX + idx * tokenSpacing;
            const tokenY = 220;
            const isSelected = selectedTokenIndex === idx;
            const caseStyle = getCaseColor(token.caseAr);
            const boxWidth = Math.min(100, tokenSpacing - 6);

            return (
              <g
                key={`token-node-${idx}`}
                transform={`translate(${tokenX}, ${tokenY})`}
                onClick={() => onSelectToken(idx)}
                className="cursor-pointer transition-transform duration-200"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              >
                {/* Aura for selected token */}
                {isSelected && (
                  <rect
                    x={-boxWidth / 2 - 4}
                    y="-28"
                    width={boxWidth + 8}
                    height="56"
                    rx="16"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    filter="url(#arabicGlow)"
                    className="animate-pulse"
                  />
                )}

                {/* Main Token Box */}
                <rect
                  x={-boxWidth / 2}
                  y="-24"
                  width={boxWidth}
                  height="48"
                  rx="12"
                  fill={isSelected ? '#1e293b' : caseStyle.fill}
                  stroke={isSelected ? '#f59e0b' : caseStyle.stroke}
                  strokeWidth={isSelected ? '2' : '1.2'}
                />

                {/* Word */}
                <text
                  textAnchor="middle"
                  y="-4"
                  fill={isSelected ? '#fef08a' : '#f8fafc'}
                  fontSize="15"
                  fontWeight="900"
                  fontFamily="serif"
                >
                  {token.word}
                </text>

                {/* Case / Marker Tag */}
                <rect
                  x={-boxWidth / 2 + 4}
                  y="6"
                  width={boxWidth - 8}
                  height="14"
                  rx="5"
                  fill={isSelected ? '#f59e0b' : caseStyle.stroke}
                  opacity={isSelected ? '0.95' : '0.25'}
                />
                <text
                  textAnchor="middle"
                  y="17"
                  fill={isSelected ? '#020617' : caseStyle.text}
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {token.caseAr.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Quick Legend Bar */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>حالات الرفع</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>حالات النصب</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <span>حالات الجر</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>الجزم والبناء</span>
          </span>
        </div>
        <div className="text-amber-400/90 font-medium">
          💡 انقر فوق أي عقدة شجرية لعرض إعرابها النموذجي وقاعدتها المعتمدة
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// VECTOR SCHEMATIC 2: ARABIC MORPHOLOGICAL SCALE (الميزان الصرفي المعياري: ف-ع-ل)
// =========================================================================
const ArabicMorphologyScaleSchematic: React.FC<{
  rule: DerivativeRule;
}> = ({ rule }) => {
  const example = rule.examples[0] || {
    word: 'كَاتِب',
    root: 'ك - ت - ب',
    sentence: 'الكاتبُ مقالَه مبدعٌ',
    operativeRole: 'مفعول به لاسم الفاعل',
    operativeMarker: 'الفتحة الظاهرة',
  };

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-amber-950/20 border border-amber-500/30 rounded-3xl p-5 shadow-2xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-black text-amber-300">
            ميزان الصرف الصوتي والمعجمي: زن الكلمة ومشتقها (Morphological Balance)
          </h4>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-mono text-amber-300">
          القانون الأساس: الفاء والعين واللام (ف - ع - ل)
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 800 240" className="w-full min-w-[660px] h-auto select-none" style={{ maxHeight: '260px' }}>
          <defs>
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <filter id="scaleGlow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Central Pillar Base */}
          <rect x="360" y="215" width="80" height="15" rx="4" fill="url(#brassGrad)" />
          <rect x="375" y="205" width="50" height="10" rx="3" fill="#b45309" />
          {/* Vertical Column */}
          <rect x="393" y="60" width="14" height="145" rx="3" fill="url(#brassGrad)" />

          {/* Pivot Dial at (400, 65) */}
          <circle cx="400" cy="65" r="16" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="400" cy="65" r="6" fill="#f59e0b" />

          {/* Pointer Needle pointing up to equilibrium */}
          <line x1="400" y1="65" x2="400" y2="28" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <polygon points="400,22 396,28 404,28" fill="#38bdf8" />
          {/* Calibration Arc */}
          <path d="M 370 35 A 32 32 0 0 1 430 35" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2,3" />

          {/* Crossbeam */}
          <line x1="180" y1="65" x2="620" y2="65" stroke="url(#brassGrad)" strokeWidth="6" strokeLinecap="round" filter="url(#scaleGlow)" />

          {/* Left Pan Chains & Plate (Standard Weight: ف - ع - ل) */}
          <line x1="180" y1="65" x2="130" y2="145" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,2" />
          <line x1="180" y1="65" x2="230" y2="145" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,2" />
          <path d="M 115 145 Q 180 175 245 145 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />

          {/* Left Pan Content */}
          <g transform="translate(180, 130)">
            <rect x="-65" y="-32" width="130" height="34" rx="10" fill="#020617" stroke="#f59e0b" strokeWidth="1.5" />
            <text textAnchor="middle" y="-10" fill="#fbbf24" fontSize="16" fontWeight="900" fontFamily="serif">
              {rule.patternFormula}
            </text>
            <text textAnchor="middle" y="24" fill="#94a3b8" fontSize="10" fontWeight="bold">
              ⚖️ الميزان الصرفي المعياري
            </text>
          </g>

          {/* Right Pan Chains & Plate (Measured Word) */}
          <line x1="620" y1="65" x2="570" y2="145" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,2" />
          <line x1="620" y1="65" x2="670" y2="145" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,2" />
          <path d="M 555 145 Q 620 175 685 145 Z" fill="#1e293b" stroke="#10b981" strokeWidth="2" />

          {/* Right Pan Content */}
          <g transform="translate(620, 130)">
            <rect x="-65" y="-32" width="130" height="34" rx="10" fill="#020617" stroke="#10b981" strokeWidth="1.5" />
            <text textAnchor="middle" y="-10" fill="#34d399" fontSize="16" fontWeight="900" fontFamily="serif">
              {example.word}
            </text>
            <text textAnchor="middle" y="24" fill="#94a3b8" fontSize="10" fontWeight="bold">
              🌿 الكلمة المشتقة والموزونة
            </text>
          </g>
        </svg>
      </div>

      {/* Sub-telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col justify-between">
          <span className="text-[11px] text-slate-400">الجذر الثلاثي للوزن:</span>
          <span className="text-base font-black text-amber-300 font-serif mt-1">{example.root}</span>
          <span className="text-[10px] text-slate-500 mt-0.5">يقابله في الميزان: ف - ع - ل</span>
        </div>
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col justify-between">
          <span className="text-[11px] text-slate-400">حروف الزيادة في الصيغة:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {['س', 'أ', 'ل', 'ت', 'م', 'و', 'ن', 'ي', 'هـ', 'ا'].map((letter, i) => (
              <span key={i} className="px-1 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] rounded font-mono">
                {letter}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-emerald-400 mt-0.5">مجموعة في: سألتمونيها</span>
        </div>
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col justify-between">
          <span className="text-[11px] text-slate-400">الأثر والعمل الإعرابي للمشتق:</span>
          <span className="text-xs font-bold text-emerald-300 mt-1">{rule.operativeEffectAr}</span>
          <span className="text-[10px] text-amber-400/90 mt-0.5">معموله: {example.operativeRole}</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// VECTOR SCHEMATIC 3: RHETORICAL MATRIX & ESTHETIC SECRET RADAR (علم البيان والبديع)
// =========================================================================
const ArabicRhetoricalDeviceMatrixSchematic: React.FC<{
  figure: RhetoricalFigure;
}> = ({ figure }) => {
  const secret = figure.beautySecretAr;

  // 5 Canonical Beauty Secrets of Egyptian Thanaweya Arabic curriculum
  const beautySecrets = [
    { key: 'تشخيص', label: 'التشخيص', desc: 'جعل غير العاقل عاقلاً شخصاً يتكلم ويحس' },
    { key: 'تجسيم', label: 'التجسيم', desc: 'تحويل المعنوي المجرد إلى مادي محسوس' },
    { key: 'توضيح', label: 'التوضيح', desc: 'رسم المعنى وتوكيده (مادي بمادي / معنوي بمعنوي)' },
    { key: 'إثارة الذهن وجذب الانتباه', label: 'إثارة الذهن', desc: 'إعمال الفكر عبر التضاد والمفارقة (طباق، مقابلة)' },
    { key: 'إعطاء جرس موسيقي', label: 'الجرس الموسيقي', desc: 'إطراب الأذن بحسن التناغم الصوتي (جناس، سجع، تصريع)' },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-amber-950/20 border border-amber-500/30 rounded-3xl p-5 shadow-2xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-black text-amber-300">
            مصفوفة العلاقات المجازية وسر الجمال البلاغي (Aesthetic & Figurative Matrix)
          </h4>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
          سر الجمال: {secret}
        </span>
      </div>

      {/* SVG Dual-Plane Metaphor Vector Engine */}
      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 800 200" className="w-full min-w-[660px] h-auto select-none" style={{ maxHeight: '220px' }}>
          <defs>
            <linearGradient id="tenorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="vehicleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Background Vector Field Grid */}
          <line x1="40" y1="100" x2="760" y2="100" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="4,6" opacity="0.2" />

          {/* Left Sphere: Tenor (المشبه / المستعار له) */}
          <g transform="translate(180, 100)">
            <circle cx="0" cy="0" r="50" fill="url(#tenorGrad)" opacity="0.2" />
            <circle cx="0" cy="0" r="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <text textAnchor="middle" y="-6" fill="#38bdf8" fontSize="13" fontWeight="bold">
              المشبه
            </text>
            <text textAnchor="middle" y="14" fill="#94a3b8" fontSize="10">
              (المستعار له)
            </text>
          </g>

          {/* Transfer Bridge Arch (وجه الشبه / العلاقة) */}
          <path
            d="M 230 90 Q 400 20 570 90"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeDasharray="6,4"
            className="animate-pulse"
          />

          {/* Center Badge: Ground of Comparison */}
          <g transform="translate(400, 50)">
            <rect x="-85" y="-16" width="170" height="32" rx="16" fill="#020617" stroke="#f59e0b" strokeWidth="2" />
            <text textAnchor="middle" y="5" fill="#fbbf24" fontSize="11" fontWeight="bold">
              ✨ وجه الشبه / قرينة الاستعارة
            </text>
          </g>

          {/* Right Sphere: Vehicle (المشبه به / المستعار منه) */}
          <g transform="translate(620, 100)">
            <circle cx="0" cy="0" r="50" fill="url(#vehicleGrad)" opacity="0.2" />
            <circle cx="0" cy="0" r="42" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <text textAnchor="middle" y="-6" fill="#fbbf24" fontSize="13" fontWeight="bold">
              المشبه به
            </text>
            <text textAnchor="middle" y="14" fill="#94a3b8" fontSize="10">
              (المستعار منه)
            </text>
          </g>

          {/* Bottom Metaphor Logic Equation */}
          <g transform="translate(400, 170)">
            <rect x="-240" y="-15" width="480" height="30" rx="15" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <text textAnchor="middle" y="5" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
              {figure.id.includes('istiara_makniya')
                ? 'استعارة مكنية: حُذف المشبه به ودُلّ عليه بشيء من لوازمه على سبيل الاستعارة'
                : figure.id.includes('istiara_tasrihiya')
                ? 'استعارة تصريحية: حُذف المشبه وصُرّح بلفظ المشبه به مباشرة'
                : figure.id.includes('tashbih_baligh')
                ? 'تشبيه بليغ: حُذفت الأداة ووجه الشبه مع بقاء الطرفين الأساسيين (أقوى درجات التشبيه)'
                : `النمط البلاغي: ${figure.nameAr} - ${figure.definitionAr.slice(0, 48)}...`}
            </text>
          </g>
        </svg>
      </div>

      {/* 5-Key Esthetic Secret Navigation Deck */}
      <div className="space-y-2 pt-1">
        <span className="text-xs font-bold text-slate-400">بوصلة سر الجمال في المنهج الوزاري:</span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {beautySecrets.map((b) => {
            const isMatch = secret === b.key || secret.includes(b.key.slice(0, 4));
            return (
              <div
                key={b.key}
                className={`p-2.5 rounded-2xl border transition-all text-center flex flex-col justify-between ${
                  isMatch
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 ring-2 ring-amber-400/40 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 opacity-60'
                }`}
              >
                <div className="text-xs font-bold">{b.label}</div>
                <div className="text-[10px] mt-1 leading-tight">{b.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ArabicGrammarStudioProps {
  onClose?: () => void;
  lang?: string;
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
}

export const ArabicGrammarStudio: React.FC<ArabicGrammarStudioProps> = ({
  onClose,
  lang: _lang = 'ar',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const [activeTab, setActiveTab] = useState<'irab' | 'derivatives' | 'rhetoric' | 'orthography' | 'traps'>('irab');

  // Tab 1: Irab state
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState(0);
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number | null>(0);

  // Tab 2: Derivatives state
  const [selectedDerivativeId, setSelectedDerivativeId] = useState(ARABIC_DERIVATIVE_RULES[0].id);

  // Tab 3: Rhetoric state
  const [selectedRhetoricId, setSelectedRhetoricId] = useState(ARABIC_RHETORICAL_FIGURES[0].id);

  // Tab 4: Orthography state
  const [selectedTrapId, setSelectedTrapId] = useState(ARABIC_ORTHOGRAPHY_TRAPS[0].id);

  // Tab 5: Exam traps state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const currentSentence = ARABIC_IRAB_SENTENCES[selectedSentenceIndex];
  const currentToken: IrabToken | null =
    selectedTokenIndex !== null && currentSentence.tokens[selectedTokenIndex]
      ? currentSentence.tokens[selectedTokenIndex]
      : null;

  const currentDerivative =
    ARABIC_DERIVATIVE_RULES.find((r) => r.id === selectedDerivativeId) ||
    ARABIC_DERIVATIVE_RULES[0];

  const currentRhetoric =
    ARABIC_RHETORICAL_FIGURES.find((f) => f.id === selectedRhetoricId) ||
    ARABIC_RHETORICAL_FIGURES[0];

  const currentOrthography =
    ARABIC_ORTHOGRAPHY_TRAPS.find((t) => t.id === selectedTrapId) ||
    ARABIC_ORTHOGRAPHY_TRAPS[0];

  const currentQuiz = ARABIC_MINISTERIAL_EXAM_TRAPS[currentQuizIndex];

  const handleSelectSentence = (idx: number) => {
    setSelectedSentenceIndex(idx);
    setSelectedTokenIndex(0);
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswerSubmitted) return;
    setUserSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (userSelectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (userSelectedOption === currentQuiz.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < ARABIC_MINISTERIAL_EXAM_TRAPS.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
      setUserSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handlePrevQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex((prev) => prev - 1);
      setUserSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  return (
    <div className={`w-full mx-auto bg-slate-950/95 border border-amber-500/30 overflow-hidden text-slate-100 flex flex-col font-sans transition-all duration-300 ${
      isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0 p-4 sm:p-6' : 'max-w-6xl my-4 rounded-3xl shadow-2xl'
    }`} data-fullscreen-lab={isFullscreen ? 'true' : undefined} dir="rtl">
      {/* Studio Header */}
      <div className="bg-gradient-to-l from-amber-950/60 via-slate-900 to-amber-950/40 p-5 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-400 shadow-inner">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-amber-300 tracking-wide">
                معمل النحو والإعراب والبلاغة التفاعلي
              </h2>
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                الصف الثالث الثانوي
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              محلل التراكيب النحوية، ميزان المشتقات العاملة، أسرار البيان والبلاغة، ومحاكي أفخاخ امتحانات الثانوية العامة
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* AI Vocal Engine Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/30 text-xs text-amber-300 font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-[11px]">محرك نطق الفصحى بالذكاء الاصطناعي (HD)</span>
          </div>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            title={isFullscreen ? 'إنهاء وضع الشاشة الكاملة (Esc)' : 'شاشة كاملة'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4 text-amber-400" />}
            <span>{isFullscreen ? 'إنهاء' : 'شاشة كاملة'}</span>
          </button>

        {onClose && (
          <button
            onClick={onClose}
            className="min-h-[44px] px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-medium transition-colors"
          >
            إغلاق المعمل ✕
          </button>
        )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-900/80 border-b border-slate-800 p-2 flex flex-wrap gap-1.5 sm:gap-2">
        <button
          onClick={() => setActiveTab('irab')}
          className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'irab'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/60'
          }`}
        >
          <Feather className="w-4 h-4" />
          <span>محلل الإعراب والتراكيب</span>
        </button>

        <button
          onClick={() => setActiveTab('derivatives')}
          className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'derivatives'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/60'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>ميزان المشتقات وإعمالها</span>
        </button>

        <button
          onClick={() => setActiveTab('rhetoric')}
          className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'rhetoric'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>مختبر الصور البيانية والبلاغة</span>
        </button>

        <button
          onClick={() => setActiveTab('orthography')}
          className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'orthography'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/60'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>مختبر رسم الهمزات والإملاء</span>
        </button>

        <button
          onClick={() => setActiveTab('traps')}
          className={`min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'traps'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/60'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>محاكي أفخاخ الامتحانات الوزارية</span>
        </button>
      </div>

      {/* Main Studio Body */}
      <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
        {/* ========================================================================= */}
        {/* TAB 1: IRAB & SYNTAX PARSER */}
        {/* ========================================================================= */}
        {activeTab === 'irab' && (
          <div className="space-y-6">
            {/* Sentence selector bar */}
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400">اختر الجملة النموذجية:</span>
                <select
                  value={selectedSentenceIndex}
                  onChange={(e) => handleSelectSentence(parseInt(e.target.value))}
                  className="min-h-[44px] bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  {ARABIC_IRAB_SENTENCES.map((sent, idx) => (
                    <option key={sent.id} value={idx}>
                      {idx + 1}. {sent.titleAr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                <span>انقر على أي كلمة لعرض إعرابها التفصيلي وتطبيق القاعدة</span>
              </div>
            </div>

            {/* Interactive Sentence Board */}
            <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-amber-950/20 p-6 rounded-3xl border border-amber-500/20 shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                  {currentSentence.titleAr}
                </span>
                <button
                  onClick={() => {
                    const fullText = currentSentence.tokens.map((t) => t.word).join(' ');
                    aiVoiceEngine.speak(fullText, { lang: 'ar-SA' });
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition cursor-pointer"
                  title="استمع إلى النطق الصوتي الفصيح بالذكاء الاصطناعي"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>نطق الجملة بالفصحى (AI)</span>
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-4 text-lg sm:text-2xl font-bold font-serif leading-relaxed">
                {currentSentence.tokens.map((token, idx) => {
                  const isSelected = selectedTokenIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTokenIndex(idx)}
                      className={`min-h-[44px] min-w-[44px] px-3.5 sm:px-4 py-2 rounded-2xl transition-all duration-200 border text-center ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/30 scale-105'
                          : 'bg-slate-800/80 hover:bg-slate-700/80 text-amber-100 border-slate-700/80 hover:border-amber-500/40'
                      }`}
                    >
                      <span>{token.word}</span>
                    </button>
                  );
                })}
              </div>

              {/* Pedagogical Rule Warning Box */}
              <div className="mt-4 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-2.5 text-xs text-amber-200">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">توجيه امتحاني للمتفوقين: </span>
                  {currentSentence.pedagogicalTipAr}
                </div>
              </div>
            </div>

            {/* High-Resolution Arabic Syntax Tree Vector Schematic */}
            <ArabicSyntaxParseTreeSchematic
              sentence={currentSentence}
              selectedTokenIndex={selectedTokenIndex}
              onSelectToken={setSelectedTokenIndex}
            />

            {/* Token Breakdown Inspection Card */}
            {currentToken && (
              <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-l border-slate-800 pb-4 md:pb-0 md:pl-4 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">الكلمة المحددة</div>
                    <div className="flex items-center justify-between gap-2 mt-1">
                      <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">
                        {currentToken.word}
                      </div>
                      <button
                        onClick={() => aiVoiceEngine.speak(currentToken.word, { lang: 'ar-SA' })}
                        className="p-2 min-h-[44px] min-w-[44px] rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 cursor-pointer flex items-center justify-center"
                        title="نطق الكلمة"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{currentToken.roleEn}</div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs bg-slate-800/60 p-2 rounded-xl border border-slate-700/60">
                      <span className="text-slate-400">الحالة الإعرابية:</span>
                      <span className="font-bold text-amber-300">{currentToken.caseAr}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs bg-slate-800/60 p-2 rounded-xl border border-slate-700/60">
                      <span className="text-slate-400">العلامة الإعرابية:</span>
                      <span className="font-bold text-emerald-400">{currentToken.markerAr}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-1.5">
                      <Feather className="w-3.5 h-3.5" />
                      <span>الإعراب النموذجي المعتمد في وزارة التربية والتعليم:</span>
                    </div>
                    <div className="p-3 bg-slate-950/70 rounded-2xl border border-slate-800/80 text-sm sm:text-base font-serif text-slate-200 leading-relaxed">
                      {currentToken.roleAr}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-400 mb-1">التعليل والشرح النحوي:</div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                      {currentToken.explanationAr}
                    </p>
                  </div>

                  <div className="text-[11px] text-amber-300/80 bg-amber-950/20 p-2 rounded-xl border border-amber-900/40">
                    <span className="font-bold">القاعدة المستند إليها: </span>
                    {currentToken.ruleCitationAr}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DERIVATIVES & MORPHOLOGY */}
        {/* ========================================================================= */}
        {activeTab === 'derivatives' && (
          <div className="space-y-6">
            {/* Derivative selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ARABIC_DERIVATIVE_RULES.map((rule) => {
                const isSelected = selectedDerivativeId === rule.id;
                return (
                  <button
                    key={rule.id}
                    onClick={() => setSelectedDerivativeId(rule.id)}
                    className={`min-h-[44px] p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{rule.nameAr}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{rule.nameEn}</div>
                  </button>
                );
              })}
            </div>

            {/* High-Resolution Morphological Scale Vector Schematic */}
            <ArabicMorphologyScaleSchematic rule={currentDerivative} />

            {/* Formula & Rule Card */}
            <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-amber-300">{currentDerivative.nameAr}</h3>
                  <p className="text-xs text-slate-400">{currentDerivative.patternFormula}</p>
                </div>
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-mono text-amber-300">
                  الأبنية والمشتقات
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <div className="text-xs font-bold text-amber-400 mb-1">صياغته من الفعل الثلاثي:</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentDerivative.triLiteralRuleAr}</p>
                </div>
                <div className="p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
                  <div className="text-xs font-bold text-amber-400 mb-1">صياغته من غير الثلاثي:</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentDerivative.nonTriLiteralRuleAr}</p>
                </div>
              </div>

              {/* Agentivity conditions */}
              <div className="p-4 bg-amber-950/20 border border-amber-500/20 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  <span>شروط إعمال المشتق عمل فعله المبني للمعلوم / المجهول:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {currentDerivative.agentivityConditionsAr.map((cond, idx) => (
                    <li key={idx} className="leading-relaxed">{cond}</li>
                  ))}
                </ul>
                <div className="text-[11px] text-emerald-400 font-medium pt-1">
                  الأثر الإعرابي للمشتق: {currentDerivative.operativeEffectAr}
                </div>
              </div>

              {/* Examples and analysis */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400">نماذج إعراب المعمول في امتحانات الثانوية العامة:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentDerivative.examples.map((ex, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
                      <div className="text-sm font-serif font-bold text-amber-200">{ex.sentence}</div>
                      <div className="text-xs text-slate-400">الجذر والوزن: <span className="text-slate-200">{ex.root}</span></div>
                      <div className="text-xs text-amber-300">إعراب المعمول: <span className="font-bold">{ex.operativeRole}</span></div>
                      <div className="text-[11px] text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded-lg border border-emerald-800/40">
                        العلامة: {ex.operativeMarker}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: RHETORIC & AESTHETIC FIGURES */}
        {/* ========================================================================= */}
        {activeTab === 'rhetoric' && (
          <div className="space-y-6">
            {/* Figure selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ARABIC_RHETORICAL_FIGURES.map((fig) => {
                const isSelected = selectedRhetoricId === fig.id;
                return (
                  <button
                    key={fig.id}
                    onClick={() => setSelectedRhetoricId(fig.id)}
                    className={`min-h-[44px] p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{fig.nameAr}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{fig.nameEn}</div>
                  </button>
                );
              })}
            </div>

            {/* High-Resolution Rhetorical Matrix Vector Schematic */}
            <ArabicRhetoricalDeviceMatrixSchematic figure={currentRhetoric} />

            {/* Figure Display Card */}
            <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-amber-300">{currentRhetoric.nameAr}</h3>
                  <span className="text-xs text-slate-400">علم البيان والبديع والمعاني</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">سر الجمال المعتمد:</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
                    {currentRhetoric.beautySecretAr}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-400">التعريف البلاغي: </span>
                {currentRhetoric.definitionAr}
              </div>

              {/* Examples with analysis */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-400">شواهد شعرية ونثرية مقررة:</div>
                {currentRhetoric.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-2">
                    <div className="text-sm sm:text-base font-serif font-bold text-amber-200">{ex.verseOrProse}</div>
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>المصدر: {ex.sourceAr}</span>
                      <span className="text-emerald-400 font-medium">{ex.tropeSubtypeAr}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <span className="font-bold text-amber-400">التحليل البلاغي: </span>
                      {ex.analysisAr}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: ORTHOGRAPHY & HAMZA MASTER */}
        {/* ========================================================================= */}
        {activeTab === 'orthography' && (
          <div className="space-y-6">
            {/* Trap selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ARABIC_ORTHOGRAPHY_TRAPS.map((trap) => {
                const isSelected = selectedTrapId === trap.id;
                return (
                  <button
                    key={trap.id}
                    onClick={() => setSelectedTrapId(trap.id)}
                    className={`min-h-[44px] p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{trap.titleAr}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{trap.titleEn}</div>
                  </button>
                );
              })}
            </div>

            {/* Trap Explanation Card */}
            <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl space-y-4">
              <div>
                <h3 className="text-lg font-bold text-amber-300">{currentOrthography.titleAr}</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentOrthography.ruleExplanationAr}</p>
              </div>

              {/* Inflection Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentOrthography.inflectionMatrix.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-amber-400 border-b border-slate-800 pb-1">
                      {item.stateAr}
                    </div>
                    <div className="text-xl font-bold font-serif text-emerald-400 text-center py-1">
                      {item.spelling}
                    </div>
                    <div className="text-xs text-slate-200 font-serif bg-slate-900/70 p-2 rounded-xl border border-slate-800">
                      {item.exampleSentence}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {item.grammaticalReasonAr}
                    </div>
                  </div>
                ))}
              </div>

              {/* Common mistakes */}
              <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                  <span>أشهر الأخطاء الشائعة في كتابة الهمزة والواو في الامتحانات:</span>
                </div>
                {currentOrthography.commonMistakes.map((m, idx) => (
                  <div key={idx} className="text-xs text-slate-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-rose-400 line-through">{m.incorrect}</span>
                      <span className="text-emerald-400 font-bold">✓ {m.correct}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{m.whyIncorrectAr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MINISTERIAL EXAM SIMULATOR */}
        {/* ========================================================================= */}
        {activeTab === 'traps' && (
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl space-y-4">
              {/* Question header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300">
                    السؤال {currentQuizIndex + 1} من {ARABIC_MINISTERIAL_EXAM_TRAPS.length}
                  </span>
                  <span className="text-xs text-slate-400">{currentQuiz.ministerialYear}</span>
                </div>
                <div className="text-xs text-emerald-400 font-bold">
                  الدرجة: {quizScore} / {ARABIC_MINISTERIAL_EXAM_TRAPS.length}
                </div>
              </div>

              {/* Question context & verse */}
              <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-sm sm:text-base font-serif font-bold text-amber-200 leading-relaxed text-center py-2">
                  {currentQuiz.verseOrSentence}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 border-t border-slate-800/80 pt-2">
                  {currentQuiz.questionAr}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {currentQuiz.optionsAr.map((option, idx) => {
                  const isSelected = userSelectedOption === idx;
                  const isCorrect = idx === currentQuiz.correctIndex;
                  let optionClass = 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 text-slate-200';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      optionClass = 'bg-rose-950/60 border-rose-500 text-rose-200 font-bold';
                    }
                  } else if (isSelected) {
                    optionClass = 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswerSubmitted}
                      className={`min-h-[44px] w-full p-3.5 rounded-2xl border text-right text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optionClass}`}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Submission and Trap Analysis */}
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={userSelectedOption === null}
                  className="min-h-[44px] w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold rounded-2xl text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
                >
                  تأكيد الإجابة وعرض التحليل الوزاري
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-2xl text-xs leading-relaxed space-y-1">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-400" />
                      <span>تفكيك فخ السؤال وتحليل البدائل:</span>
                    </div>
                    <p className="text-slate-200">{currentQuiz.trapAnalysisAr}</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={handlePrevQuiz}
                      disabled={currentQuizIndex === 0}
                      className="min-h-[44px] px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>السابق</span>
                    </button>
                    <button
                      onClick={handleNextQuiz}
                      disabled={currentQuizIndex === ARABIC_MINISTERIAL_EXAM_TRAPS.length - 1}
                      className="min-h-[44px] px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>التالي</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
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
