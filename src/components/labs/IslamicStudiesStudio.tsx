import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../../i18n/translations';
import {
  TAJWEED_RULES_DATA,
  MAQASID_CATEGORIES_DATA,
  SEERAH_MILESTONES_DATA,
  BIOETHICS_ISSUES_DATA,
  ISLAMIC_STUDIES_QUIZ_DATA,
  type TajweedRuleItem,
  type MaqasidCategory,
  type SeerahMilestone,
  type BioethicsIssue,
} from '../../data/islamicLab/islamicLabData';
import {
  Volume2,
  Square,
  CheckCircle2,
  XCircle,
  Layers,
  Scale,
  Compass,
  RotateCcw,
  BookOpen,
  Award,
  Brain,
  HelpCircle,
  ShieldCheck,
  Radio,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useNativeLabFullscreen } from '../../core/labs/useNativeLabFullscreen';

// =========================================================================
// VECTOR SCHEMATIC 1: TAJWEED MAKHAARIJ & PHONETICS (المخارج العامة والصفات)
// =========================================================================
const TajweedPhoneticMakharijVectorSchematic: React.FC<{
  rule: TajweedRuleItem;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ rule, isArabic, isLight = false }) => {
  const isGhunnah =
    rule.id.includes('nun') ||
    rule.id.includes('mim') ||
    rule.nameAr.includes('غنة') ||
    rule.nameAr.includes('إخفاء') ||
    rule.nameAr.includes('إدغام');
  const isMadd = rule.id.includes('madd') || rule.categoryAr.includes('المد');
  const isHalq = rule.id.includes('idhar') || rule.categoryAr.includes('حلق');
  const isQalqalah = rule.id.includes('qalqalah') || rule.nameAr.includes('قلقلة');
  const isShafatayn =
    rule.id.includes('iqlab') || rule.letters.some((l) => ['ب', 'م', 'و', 'ف'].includes(l));

  const mechanismText = isGhunnah
    ? isArabic
      ? 'جريان الصوت في الخيشوم بمقدار حركتين'
      : '2-count nasal resonance airflow'
    : isMadd
    ? isArabic
      ? 'امتداد الصوت بحرف المد في الجوف'
      : 'Longitudinal airflow elongation in Jawf'
    : isHalq
    ? isArabic
      ? 'إخراج الحرف من مخرجه بغير غنة ظاهرة'
      : 'Clear throat release without nasalization'
    : isQalqalah
    ? isArabic
      ? 'اضطراب المخرج عند النطق بالحرف ساكناً'
      : 'Vocal tract impulse tremor on sukoon'
    : isArabic
    ? 'تطابق الشفتين مع قلب النون ميماً مخفاة'
    : 'Labial assimilation with hidden meem';

  const timingText = isMadd
    ? 'حركتان إلى 6 حركات (2 - 6 Harakat)'
    : isGhunnah
    ? 'حركتان كاملتان (2 Harakat)'
    : 'حركة اعتيادية منضبطة';

  const timingPercent = isMadd ? '90%' : isGhunnah ? '65%' : '45%';

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-5 space-y-4 transition-all ${
        isLight
          ? 'bg-slate-50/90 border-emerald-200 shadow-xs'
          : 'bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/30 border-emerald-500/30 shadow-xl'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-2 pb-3 border-b ${
          isLight ? 'border-emerald-200' : 'border-emerald-500/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              isLight ? 'bg-emerald-600' : 'bg-emerald-400 animate-pulse'
            }`}
          />
          <h4 className={`text-xs sm:text-sm font-black ${isLight ? 'text-slate-900' : 'text-emerald-300'}`}>
            {isArabic
              ? 'المخطط التشريحي الصوتي لمخارج الحروف وصفاتها (Vocal Tract & Articulation Schematic)'
              : 'Phonetic Vocal Tract & Articulation Point Schematic'}
          </h4>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
            isLight
              ? 'bg-emerald-100 border border-emerald-300 text-emerald-900'
              : 'bg-emerald-950/80 border border-emerald-500/30 text-teal-300'
          }`}
        >
          {isArabic ? rule.categoryAr : rule.categoryEn}
        </span>
      </div>

      {/* Responsive Grid: Anatomical Vector Cross-Section + Native HTML Articulation Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Column 1: Anatomical Head & Vocal Tract Vector Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center p-2 rounded-xl overflow-hidden">
          <svg
            viewBox="0 0 380 240"
            className="w-full max-w-[360px] h-auto select-none"
            style={{ maxHeight: '240px' }}
          >
            <defs>
              <radialGradient id="nasalResonance" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="vocalTractGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0" />
              </radialGradient>
              <filter id="makhrajGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stylized Anatomical Head Profile Outline */}
            <path
              d="M 60 220 C 50 180, 40 120, 70 70 C 100 30, 180 20, 240 35 C 270 45, 300 80, 310 120 C 315 140, 325 155, 350 160 C 360 162, 360 175, 340 180 C 315 185, 305 200, 305 220"
              fill="none"
              stroke={isLight ? '#94a3b8' : '#334155'}
              strokeWidth="2"
              strokeDasharray="4,4"
            />

            {/* 1. Al-Khayshoom (Nasal Cavity / الخيشوم) */}
            <ellipse
              cx="220"
              cy="90"
              rx="42"
              ry="20"
              fill={isGhunnah ? 'url(#nasalResonance)' : isLight ? '#f1f5f9' : '#0f172a'}
              stroke={isGhunnah ? (isLight ? '#0d9488' : '#2dd4bf') : isLight ? '#cbd5e1' : '#475569'}
              strokeWidth={isGhunnah ? '2.5' : '1.2'}
              filter={isGhunnah ? 'url(#makhrajGlow)' : undefined}
            />
            <text
              x="220"
              y="94"
              textAnchor="middle"
              fill={isGhunnah ? (isLight ? '#042f2e' : '#ccfbf1') : isLight ? '#475569' : '#94a3b8'}
              fontSize="10"
              fontWeight="bold"
            >
              {isArabic ? 'الخَيْشُوم (مخرج الغنة)' : 'Nasal Cavity (Ghunnah)'}
            </text>

            {/* 2. Al-Jawf (Oral & Throat Cavity / الجوف) */}
            <ellipse
              cx="190"
              cy="140"
              rx="48"
              ry="22"
              fill={isMadd ? 'url(#vocalTractGlow)' : isLight ? '#f1f5f9' : '#0f172a'}
              stroke={isMadd ? (isLight ? '#059669' : '#10b981') : isLight ? '#cbd5e1' : '#475569'}
              strokeWidth={isMadd ? '2.5' : '1.2'}
              filter={isMadd ? 'url(#makhrajGlow)' : undefined}
            />
            <text
              x="190"
              y="144"
              textAnchor="middle"
              fill={isMadd ? (isLight ? '#064e3b' : '#d1fae5') : isLight ? '#475569' : '#94a3b8'}
              fontSize="10"
              fontWeight="bold"
            >
              {isArabic ? 'الجَوْف (حروف المد)' : 'Al-Jawf (Madd Cavity)'}
            </text>

            {/* 3. Al-Lisan (The Tongue / اللسان) */}
            <path
              d="M 150 165 C 180 150, 230 150, 260 168 C 240 185, 170 185, 150 165 Z"
              fill={!isHalq && !isMadd ? (isLight ? '#dcfce7' : '#064e3b') : isLight ? '#f1f5f9' : '#0f172a'}
              stroke={!isHalq && !isMadd ? (isLight ? '#16a34a' : '#34d399') : isLight ? '#cbd5e1' : '#475569'}
              strokeWidth="1.8"
            />
            <text
              x="205"
              y="172"
              textAnchor="middle"
              fill={!isHalq && !isMadd ? (isLight ? '#14532d' : '#a7f3d0') : isLight ? '#475569' : '#94a3b8'}
              fontSize="9"
              fontWeight="bold"
            >
              {isArabic ? 'اللِّسَان (10 مخارج)' : 'Tongue (18 Letters)'}
            </text>

            {/* 4. Ash-Shafatayn (The Lips / الشفتان) */}
            <circle
              cx="310"
              cy="165"
              r="17"
              fill={isShafatayn ? (isLight ? '#dcfce7' : '#047857') : isLight ? '#f1f5f9' : '#0f172a'}
              stroke={isShafatayn ? (isLight ? '#16a34a' : '#34d399') : isLight ? '#cbd5e1' : '#475569'}
              strokeWidth={isShafatayn ? '2.5' : '1.2'}
              filter={isShafatayn ? 'url(#makhrajGlow)' : undefined}
            />
            <text
              x="310"
              y="169"
              textAnchor="middle"
              fill={isShafatayn ? (isLight ? '#14532d' : '#ecfdf5') : isLight ? '#475569' : '#94a3b8'}
              fontSize="9"
              fontWeight="bold"
            >
              {isArabic ? 'الشفتان' : 'Lips'}
            </text>

            {/* 5. Al-Halq (The Throat / الحلق) */}
            <rect
              x="120"
              y="185"
              width="55"
              height="28"
              rx="7"
              fill={isHalq ? (isLight ? '#dcfce7' : '#065f46') : isLight ? '#f1f5f9' : '#0f172a'}
              stroke={isHalq ? (isLight ? '#16a34a' : '#34d399') : isLight ? '#cbd5e1' : '#475569'}
              strokeWidth={isHalq ? '2.5' : '1.2'}
              filter={isHalq ? 'url(#makhrajGlow)' : undefined}
            />
            <text
              x="147"
              y="203"
              textAnchor="middle"
              fill={isHalq ? (isLight ? '#14532d' : '#ecfdf5') : isLight ? '#475569' : '#94a3b8'}
              fontSize="9.5"
              fontWeight="bold"
            >
              {isArabic ? 'الحَلْق' : 'Throat'}
            </text>
          </svg>
        </div>

        {/* Column 2: Dedicated Acoustic Attributes & Articulation Profile (HTML / Native RTL) */}
        <div
          className={`lg:col-span-7 p-4 rounded-xl border flex flex-col gap-3 ${
            isLight
              ? 'bg-white border-slate-200 shadow-xs text-slate-800'
              : 'bg-slate-950/80 border-emerald-500/30 text-slate-200'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800">
            <h5
              className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                isLight ? 'text-emerald-950 font-black' : 'text-emerald-400'
              }`}
            >
              <Volume2 className="w-4 h-4 text-emerald-600" />
              <span>{isArabic ? 'خصائص الصوت والأداء التجويدي' : 'Acoustic Attributes & Articulation Profile'}</span>
            </h5>
            <span
              className={`text-[11px] px-2 py-0.5 rounded font-mono font-bold ${
                isGhunnah
                  ? isLight
                    ? 'bg-teal-100 text-teal-950 border border-teal-300'
                    : 'bg-teal-950 text-teal-300 border border-teal-500/30'
                  : isMadd
                  ? isLight
                    ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                  : isLight
                  ? 'bg-slate-100 text-slate-800 border border-slate-200'
                  : 'bg-slate-900 text-slate-300 border border-slate-700'
              }`}
            >
              {isGhunnah
                ? isArabic ? 'غنة صوتية' : 'Ghunnah'
                : isMadd
                ? isArabic ? 'مد صوتي' : 'Madd'
                : isArabic ? 'مخرج محقق' : 'Standard'}
            </span>
          </div>

          {/* Feature 1: Target Letters */}
          <div className="flex flex-col gap-1.5">
            <div className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
              {isArabic ? `أحرف الحكم المعني (${rule.letters.length} أحرف):` : `Target Letters (${rule.letters.length}):`}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {rule.letters.map((lettr, idx) => (
                <span
                  key={idx}
                  className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold font-serif shadow-xs border transition-all ${
                    isLight
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 hover:bg-emerald-100'
                      : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-200 hover:bg-emerald-900'
                  }`}
                >
                  {lettr}
                </span>
              ))}
            </div>
          </div>

          {/* Feature 2: Articulatory Mechanism */}
          <div className="flex flex-col gap-1">
            <div className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
              {isArabic ? 'آلية النطق الصوتي:' : 'Phonetic Mechanism:'}
            </div>
            <div
              className={`text-xs sm:text-sm font-semibold p-2.5 rounded-xl border leading-relaxed ${
                isLight
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
              }`}
            >
              {mechanismText}
            </div>
          </div>

          {/* Feature 3: Metronomic Duration / Timing */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className={`font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                {isArabic ? 'المقدار الزمني الدستوري:' : 'Metronomic Timing:'}
              </span>
              <span className={`font-mono font-bold ${isLight ? 'text-sky-900' : 'text-sky-300'}`}>
                {timingText}
              </span>
            </div>
            <div className={`w-full h-2.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isLight ? 'bg-emerald-600' : 'bg-emerald-400'
                }`}
                style={{ width: timingPercent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// VECTOR SCHEMATIC 2: MAQASID SPHERES OF PROTECTION (هرمية المقاصد والضرورات)
// =========================================================================
const MaqasidHierarchyVectorSchematic: React.FC<{
  selectedMaqsad: MaqasidCategory;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ selectedMaqsad, isArabic, isLight = false }) => {
  const categories = MAQASID_CATEGORIES_DATA;
  const cx = 400;
  const cy = 120;

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-5 space-y-3 transition-all ${
        isLight
          ? 'bg-slate-50/80 border-teal-200 shadow-xs'
          : 'bg-gradient-to-b from-slate-900/95 via-slate-950 to-teal-950/30 border-teal-500/30 shadow-xl'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-2 pb-3 border-b ${
          isLight ? 'border-teal-200' : 'border-teal-500/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <Scale className={`w-5 h-5 ${isLight ? 'text-teal-700' : 'text-teal-400'}`} />
          <h4 className={`text-xs sm:text-sm font-black ${isLight ? 'text-slate-900' : 'text-teal-300'}`}>
            {isArabic
              ? 'هرمية المقاصد الشرعية الكلية ورتب الضرورات (Maqasid Spheres of Protection)'
              : 'Universal Sharia Objectives & Hierarchy of Necessities'}
          </h4>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
            isLight
              ? 'bg-teal-100 border border-teal-300 text-teal-900'
              : 'bg-teal-950/80 border border-teal-500/30 text-teal-300'
          }`}
        >
          {selectedMaqsad.priorityLevel}
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 230"
          className="w-full min-w-[660px] h-auto select-none"
          style={{ maxHeight: '240px' }}
        >
          <defs>
            <radialGradient id="daruriyyatGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#115e59" stopOpacity="0.05" />
            </radialGradient>
          </defs>

          {/* 3 Concentric Spheres of Sharia Protection */}
          {/* Sphere 3: Tahsiniyyat (Outer Orbit) */}
          <ellipse
            cx={cx}
            cy={cy}
            rx="340"
            ry="95"
            fill="none"
            stroke={isLight ? '#94a3b8' : '#334155'}
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <text
            x={cx}
            y={cy - 82}
            textAnchor="middle"
            fill={isLight ? '#475569' : '#64748b'}
            fontSize="10"
            fontWeight="bold"
          >
            {isArabic
              ? 'نطاق التَّحْسِينِيَّات (محاسن العادات ومكارم الأخلاق)'
              : 'Tahsiniyyat (Embellishments & Ethics)'}
          </text>

          {/* Sphere 2: Hajiyyat (Middle Orbit) */}
          <ellipse
            cx={cx}
            cy={cy}
            rx="250"
            ry="72"
            fill="none"
            stroke="#0d9488"
            strokeWidth="1.2"
            strokeOpacity={isLight ? '0.7' : '0.5'}
            strokeDasharray="3,3"
          />
          <text
            x={cx}
            y={cy - 58}
            textAnchor="middle"
            fill={isLight ? '#0f766e' : '#2dd4bf'}
            fontSize="10"
            fontWeight="bold"
          >
            {isArabic
              ? 'نطاق الحَاجِيَّات (رفع الحرج وتيسير المعاملات)'
              : 'Hajiyyat (Relief of Hardship)'}
          </text>

          {/* Sphere 1: Daruriyyat Core Sanctuary */}
          <ellipse
            cx={cx}
            cy={cy}
            rx="150"
            ry="46"
            fill={isLight ? '#ccfbf1' : 'url(#daruriyyatGrad)'}
            stroke="#0d9488"
            strokeWidth="2"
          />
          <text
            x={cx}
            y={cy - 22}
            textAnchor="middle"
            fill={isLight ? '#042f2e' : '#5eead4'}
            fontSize="11"
            fontWeight="900"
          >
            {isArabic ? 'حِمَى الضَّرُورِيَّات الكُلِّيَّة الخَمْس' : 'The Core 5 Sacred Essentials'}
          </text>

          {/* 5 Maqasid Planetary Nodes */}
          {categories.map((m, idx) => {
            const angle = (idx / 5) * 2 * Math.PI - Math.PI / 2;
            const nodeX = cx + 190 * Math.cos(angle);
            const nodeY = cy + 62 * Math.sin(angle);
            const isSelected = selectedMaqsad.id === m.id;

            return (
              <g key={m.id} transform={`translate(${nodeX}, ${nodeY})`}>
                {/* Glowing halo if selected */}
                {isSelected && (
                  <circle
                    cx="0"
                    cy="0"
                    r="32"
                    fill="none"
                    stroke={isLight ? '#0d9488' : '#2dd4bf'}
                    strokeWidth="2.5"
                    className="animate-ping"
                    opacity="0.4"
                  />
                )}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? '24' : '18'}
                  fill={isSelected ? (isLight ? '#0f766e' : '#042f2e') : isLight ? '#ffffff' : '#0f172a'}
                  stroke={isSelected ? (isLight ? '#0d9488' : '#2dd4bf') : isLight ? '#cbd5e1' : '#334155'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />
                <text
                  textAnchor="middle"
                  y="4"
                  fill={isSelected ? '#ffffff' : isLight ? '#334155' : '#94a3b8'}
                  fontSize={isSelected ? '11' : '9'}
                  fontWeight="bold"
                >
                  {isArabic ? m.titleAr.split(' ')[1] || m.titleAr : m.titleEn.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// =========================================================================
// VECTOR SCHEMATIC 3: SEERAH ASTROLABE (الإسطرلاب التاريخي والدستوري)
// =========================================================================
const SeerahConstitutionalAstrolabeVectorSchematic: React.FC<{
  milestone: SeerahMilestone;
  isArabic: boolean;
  isLight?: boolean;
}> = ({ milestone, isArabic: _isArabic, isLight = false }) => {
  return (
    <div
      className={`border rounded-2xl p-4 sm:p-5 space-y-3 transition-all ${
        isLight
          ? 'bg-slate-50/80 border-emerald-200 shadow-xs'
          : 'bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/30 border-emerald-500/30 shadow-xl'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-2 pb-3 border-b ${
          isLight ? 'border-emerald-200' : 'border-emerald-500/20'
        }`}
      >
        <div className="flex items-center gap-2">
          <Compass className={`w-5 h-5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
          <h4 className={`text-xs sm:text-sm font-black ${isLight ? 'text-slate-900' : 'text-emerald-300'}`}>
            {_isArabic
              ? 'الإسطرلاب التاريخي والدستوري للسيرة النبوية (Prophetic Constitutional Astrolabe)'
              : 'Prophetic Historic & Constitutional Cartography'}
          </h4>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
            isLight
              ? 'bg-emerald-100 border border-emerald-300 text-emerald-900'
              : 'bg-emerald-950/80 border border-emerald-500/30 text-emerald-300'
          }`}
        >
          {milestone.yearHijri} هـ
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 200"
          className="w-full min-w-[660px] h-auto select-none"
          style={{ maxHeight: '210px' }}
        >
          {/* Compass Rose Ring */}
          <circle cx="120" cy="100" r="75" fill={isLight ? '#ffffff' : '#020617'} stroke="#059669" strokeWidth="1.5" />
          <circle
            cx="120"
            cy="100"
            r="60"
            fill="none"
            stroke={isLight ? '#10b981' : '#047857'}
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <line x1="120" y1="25" x2="120" y2="175" stroke={isLight ? '#059669' : '#10b981'} strokeWidth="1" opacity={isLight ? '0.6' : '0.4'} />
          <line x1="45" y1="100" x2="195" y2="100" stroke={isLight ? '#059669' : '#10b981'} strokeWidth="1" opacity={isLight ? '0.6' : '0.4'} />
          <text x="120" y="42" textAnchor="middle" fill={isLight ? '#047857' : '#34d399'} fontSize="10" fontWeight="bold">
            شَمَال
          </text>
          <text x="120" y="168" textAnchor="middle" fill={isLight ? '#047857' : '#34d399'} fontSize="10" fontWeight="bold">
            جَنُوب
          </text>
          <text
            x="120"
            y="104"
            textAnchor="middle"
            fill={isLight ? '#b45309' : '#fef08a'}
            fontSize="12"
            fontWeight="bold"
            fontFamily="serif"
          >
            {milestone.yearHijri} هـ
          </text>

          {/* Geo Trail Map: Makkah -> Madinah -> Badr -> Uhud -> Hudaybiyyah */}
          <g transform="translate(230, 20)">
            <rect
              x="0"
              y="0"
              width="540"
              height="160"
              rx="16"
              fill={isLight ? '#ffffff' : '#020617'}
              stroke={isLight ? '#cbd5e1' : '#10b981'}
              strokeWidth="1"
              strokeOpacity={isLight ? '1' : '0.4'}
            />

            {/* Path Connection line */}
            <path
              d="M 60 120 Q 150 90, 220 70 T 360 80 T 480 60"
              fill="none"
              stroke={isLight ? '#059669' : '#10b981'}
              strokeWidth="2.5"
              strokeDasharray="5,4"
            />

            {/* Stations */}
            {[
              { nameAr: 'مكة المكرمة', x: 60, y: 120, tag: 'مهد الرسالة' },
              { nameAr: 'بدر الكبرى', x: 180, y: 80, tag: '2 هـ' },
              { nameAr: 'أُحُد', x: 280, y: 70, tag: '3 هـ' },
              { nameAr: 'المدينة المنورة', x: 380, y: 85, tag: 'عاصمة الدستور' },
              { nameAr: 'الحديبية', x: 480, y: 60, tag: '6 هـ' },
            ].map((st, i) => (
              <g key={i} transform={`translate(${st.x}, ${st.y})`}>
                <circle cx="0" cy="0" r="10" fill={isLight ? '#ecfdf5' : '#064e3b'} stroke={isLight ? '#059669' : '#34d399'} strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill={isLight ? '#d97706' : '#fef08a'} />
                <text
                  textAnchor="middle"
                  y="-14"
                  fill={isLight ? '#0f172a' : '#ecfdf5'}
                  fontSize="10"
                  fontWeight="bold"
                >
                  {st.nameAr}
                </text>
                <text
                  textAnchor="middle"
                  y="22"
                  fill={isLight ? '#047857' : '#6ee7b7'}
                  fontSize="8"
                  fontFamily="mono"
                >
                  {st.tag}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  defaultFullscreen?: boolean;
  initialTab?: IslamicStudioTab;
}

export type IslamicStudioTab = 'tajweed' | 'maqasid' | 'seerah' | 'bioethics' | 'quiz';

export const IslamicStudiesStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen: isFullscreenProp = false,
  defaultFullscreen = false,
  initialTab = 'tajweed',
}) => {
  const { isFullscreen: isNativeFs, toggleFullscreen } = useNativeLabFullscreen({
    defaultFullscreen: defaultFullscreen || isFullscreenProp,
  });
  const isFullscreen = Boolean(isFullscreenProp || isNativeFs);
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<IslamicStudioTab>(initialTab);

  // Tab 1: Tajweed State
  const [selectedTajweed, setSelectedTajweed] = useState<TajweedRuleItem>(TAJWEED_RULES_DATA[0]);
  const [currentlyPlayingVerse, setCurrentlyPlayingVerse] = useState<string | null>(null);
  // Tab 2: Maqasid State
  const [selectedMaqsad, setSelectedMaqsad] = useState<MaqasidCategory>(MAQASID_CATEGORIES_DATA[0]);

  // Tab 3: Seerah State
  const [selectedMilestone, setSelectedMilestone] = useState<SeerahMilestone>(SEERAH_MILESTONES_DATA[0]);

  // Tab 4: Bioethics State
  const [selectedIssue, setSelectedIssue] = useState<BioethicsIssue>(BIOETHICS_ISSUES_DATA[0]);

  // Tab 5: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Sheikh Al-Hussary Recitation Audio Player State (حصرياً بصوت الشيخ محمود خليل الحصري - بلا نطق حاسوبي)
  const [recitationStyle, setRecitationStyle] = useState<'murattal' | 'muallim'>('murattal');
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop any active recitation when switching tabs or unmounting
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      setAudioError(null);
    };
  }, [activeTab]);

  const getHussaryAudioUrl = (surahNumber: number, ayahNumber: number, style: 'murattal' | 'muallim') => {
    const surahStr = String(surahNumber).padStart(3, '0');
    const ayahStr = String(ayahNumber).padStart(3, '0');
    const folder = style === 'muallim' ? 'Husary_Muallim_128kbps' : 'Husary_128kbps';
    return `https://everyayah.com/data/${folder}/${surahStr}${ayahStr}.mp3`;
  };

  // Authentic Quran Recitation by Sheikh Mahmoud Khalil Al-Hussary (فضيلة الشيخ محمود خليل الحصري رحمه الله)
  const playHussaryRecitation = (surahNumber: number, ayahNumber: number, verseText: string) => {
    // If clicking on the currently playing verse, stop playback
    if (currentlyPlayingVerse === verseText && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      return;
    }

    // Stop any existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setCurrentlyPlayingVerse(verseText);
    setAudioLoading(true);
    setAudioError(null);

    const primaryUrl = getHussaryAudioUrl(surahNumber, ayahNumber, recitationStyle);
    const audio = new Audio(primaryUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.oncanplay = () => {
      setAudioLoading(false);
    };

    audio.onplaying = () => {
      setAudioLoading(false);
    };

    audio.onended = () => {
      setCurrentlyPlayingVerse(null);
      setAudioLoading(false);
      audioRef.current = null;
    };

    audio.onerror = () => {
      // Automatic failover: if Muallim fails try Murattal, or vice versa
      const fallbackStyle = recitationStyle === 'muallim' ? 'murattal' : 'muallim';
      const fallbackUrl = getHussaryAudioUrl(surahNumber, ayahNumber, fallbackStyle);
      const fallbackAudio = new Audio(fallbackUrl);
      fallbackAudio.preload = 'auto';
      audioRef.current = fallbackAudio;

      fallbackAudio.oncanplay = () => setAudioLoading(false);
      fallbackAudio.onplaying = () => setAudioLoading(false);
      fallbackAudio.onended = () => {
        setCurrentlyPlayingVerse(null);
        setAudioLoading(false);
        audioRef.current = null;
      };
      fallbackAudio.onerror = () => {
        setAudioLoading(false);
        setCurrentlyPlayingVerse(null);
        setAudioError(isArabic ? 'تعذر تشغيل التسجيل الصوتي للآية حالياً بصوت الشيخ الحصري، يرجى التحقق من اتصال الشبكة.' : 'Could not stream verse audio by Sheikh Al-Hussary, please check your network connection.');
        audioRef.current = null;
      };
      fallbackAudio.play().catch(() => {
        setAudioLoading(false);
        setCurrentlyPlayingVerse(null);
        audioRef.current = null;
      });
    };

    audio.play().catch((err) => {
      console.warn('Audio play prevented by browser policy or network issue:', err);
      setAudioLoading(false);
      setCurrentlyPlayingVerse(null);
      audioRef.current = null;
    });
  };

  const handleQuizSubmit = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    setIsAnswerSubmitted(true);
    if (index === ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < ISLAMIC_STUDIES_QUIZ_DATA.length - 1) {
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
    ? 'bg-slate-50 text-slate-900 border-slate-200'
    : 'bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950 text-emerald-50 border-emerald-900/60';

  const cardClasses = isContrast
    ? 'bg-black border border-yellow-400/80 shadow-none'
    : isLight
    ? 'bg-white border border-slate-200 shadow-sm'
    : 'bg-slate-900/80 backdrop-blur border border-emerald-500/20 shadow-xl shadow-emerald-950/30';

  return (
    <div
      className={`border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen overflow-y-auto rounded-none border-0' : 'rounded-2xl min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
      data-fullscreen-lab={isFullscreen ? 'true' : undefined}
    >
      {/* Header Banner */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 pb-4 border-b ${
          isLight ? 'border-slate-200' : 'border-emerald-500/20'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {isArabic ? 'مختبر الدراسات الإسلامية التفاعلي' : 'Islamic Studies Interactive Studio'}
              </h2>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  isLight
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}
              >
                ☪️ MoE Accredited
              </span>
            </div>
            <p className={`text-xs md:text-sm ${isLight ? 'text-slate-600' : 'text-emerald-300/80'}`}>
              {isArabic
                ? 'محاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية والذكاء الاصطناعي'
                : 'Interactive Tajweed recitation, Maqasid al-Sharia, Prophetic Seerah, and contemporary bioethics/AI ethics'}
            </p>
          </div>
        </div>

        {/* Studio Navigation Tabs */}
        <div
          className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl border ${
            isLight ? 'bg-slate-100 border-slate-300 shadow-xs' : 'bg-slate-900/60 border-emerald-500/30'
          }`}
        >
          <button
            onClick={() => setActiveTab('tajweed')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'tajweed'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isArabic ? 'أحكام التجويد' : 'Tajweed Engine'}</span>
          </button>
          <button
            onClick={() => setActiveTab('maqasid')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'maqasid'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>{isArabic ? 'مقاصد الشريعة' : 'Maqasid Simulator'}</span>
          </button>
          <button
            onClick={() => setActiveTab('seerah')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'seerah'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isArabic ? 'السيرة والدستور' : 'Seerah & Charter'}</span>
          </button>
          <button
            onClick={() => setActiveTab('bioethics')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'bioethics'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{isArabic ? 'الأخلاقيات المعاصرة' : 'Contemporary Ethics'}</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
                : isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{isArabic ? 'بنك المواقف والتقييم' : 'Scenario Quiz'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg transition-colors border ${
              isLight
                ? 'text-slate-700 hover:text-slate-950 hover:bg-white/90 border-slate-300'
                : 'text-emerald-300/80 hover:text-white hover:bg-emerald-800/30 border-emerald-500/30'
            }`}
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className={`w-4 h-4 ${isLight ? 'text-slate-700' : 'text-emerald-300'}`} />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* TAB 1: TAJWEED RECITATION ENGINE */}
      {activeTab === 'tajweed' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Rules List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3
              className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'قائمة الأحكام القرآنية' : 'Quranic Tajweed Rules'}</span>
            </h3>
            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-1">
              {TAJWEED_RULES_DATA.map((rule) => {
                const isSelected = selectedTajweed.id === rule.id;
                return (
                  <button
                    key={rule.id}
                    onClick={() => setSelectedTajweed(rule)}
                    className={`w-full flex flex-col min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                      isSelected
                        ? isLight
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-md shadow-emerald-900/20'
                          : 'bg-emerald-900/50 border-emerald-400 text-white shadow-md shadow-emerald-950/40'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-900 hover:bg-emerald-50/70 hover:border-emerald-300 shadow-xs'
                        : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20 hover:border-emerald-500/30'
                    }`}
                  >
                    <div
                      className={`font-bold text-sm ${
                        isSelected ? 'text-white' : isLight ? 'text-slate-900' : 'text-slate-100'
                      }`}
                    >
                      {isArabic ? rule.nameAr : rule.nameEn}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        isSelected ? 'text-emerald-100' : isLight ? 'text-slate-600 font-medium' : 'text-emerald-400/80'
                      }`}
                    >
                      {isArabic ? rule.categoryAr : rule.categoryEn}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {rule.letters.map((l, i) => (
                        <span
                          key={i}
                          className={`px-1.5 py-0.5 rounded text-xs font-mono font-bold ${
                            isSelected
                              ? 'bg-emerald-800 border border-emerald-500/50 text-white'
                              : isLight
                              ? 'bg-slate-100 border border-slate-200 text-slate-700'
                              : 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-300'
                          }`}
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Display & Quranic Audio */}
          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div
              className={`flex flex-wrap items-center justify-between gap-4 pb-4 border-b ${
                isLight ? 'border-slate-200' : 'border-emerald-500/20'
              }`}
            >
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLight ? 'text-emerald-800' : 'text-emerald-400'
                  }`}
                >
                  {isArabic ? selectedTajweed.categoryAr : selectedTajweed.categoryEn}
                </span>
                <h3 className={`text-xl font-black mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isArabic ? selectedTajweed.nameAr : selectedTajweed.nameEn}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                {selectedTajweed.letters.map((lettr, idx) => (
                  <span
                    key={idx}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow ${
                      isLight
                        ? 'bg-emerald-100 border border-emerald-300 text-emerald-900'
                        : 'bg-emerald-800/40 border border-emerald-400/40 text-emerald-200'
                    }`}
                  >
                    {lettr}
                  </span>
                ))}
              </div>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed ${
                isLight ? 'text-slate-800 font-normal' : 'text-emerald-100/90'
              }`}
            >
              {isArabic ? selectedTajweed.descriptionAr : selectedTajweed.descriptionEn}
            </p>

            {/* High-Resolution Scientific Vector Schematic: Anatomical Makharij & Resonance */}
            <TajweedPhoneticMakharijVectorSchematic rule={selectedTajweed} isArabic={isArabic} isLight={isLight} />

            {/* Quranic Verse Examples with Sheikh Al-Hussary Audio Engine */}
            <div className="flex flex-col gap-4">
              {/* Sheikh Al-Hussary Attribution & Style Switcher Banner */}
              <div
                className={`p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-lg ${
                  isLight
                    ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border-emerald-200 text-slate-900'
                    : 'bg-gradient-to-r from-emerald-950/90 via-slate-950 to-teal-950/90 border-emerald-500/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shadow ${
                      isLight
                        ? 'bg-emerald-100 border border-emerald-300 text-emerald-800'
                        : 'bg-emerald-800/40 border border-emerald-400/40 text-teal-300'
                    }`}
                  >
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div
                      className={`text-xs font-black flex items-center gap-1.5 ${
                        isLight ? 'text-slate-900' : 'text-emerald-300'
                      }`}
                    >
                      <span>
                        {isArabic
                          ? 'تلاوات القرآن الكريم بصوت فضيلة الشيخ محمود خليل الحصري (رحمه الله)'
                          : 'Quranic Recitation by Sheikh Mahmoud Khalil Al-Hussary'}
                      </span>
                      <span
                        className={`px-1.5 py-0.2 rounded text-[10px] font-sans border ${
                          isLight
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            : 'bg-emerald-500/20 text-teal-300 border-emerald-400/30'
                        }`}
                      >
                        {isArabic ? 'شيخ عموم المقارئ المصرية' : 'Grand Sheikh of Egyptian Reciters'}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-0.5 ${isLight ? 'text-slate-600' : 'text-emerald-400/80'}`}>
                      {isArabic
                        ? 'تلاوات قرآنية حقيقية تراعي مخارج الحروف، أحكام النون الساكنة والتنوين، المدود، والإقلاب بلا أي نطق اصطناعي.'
                        : 'Authentic recorded Tajweed recitations adhering strictly to classical Makhaarij and Ahkam without synthetic speech.'}
                    </p>
                  </div>
                </div>

                {/* Recitation Style Toggle (Murattal vs Muallim) */}
                <div
                  className={`flex items-center gap-1.5 p-1 rounded-lg border self-stretch md:self-auto justify-center ${
                    isLight ? 'bg-white border-slate-300 shadow-xs' : 'bg-slate-900 border-emerald-500/30'
                  }`}
                >
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                      }
                      setCurrentlyPlayingVerse(null);
                      setRecitationStyle('murattal');
                    }}
                    className={`min-h-[44px] px-3.5 py-2 rounded-md text-xs font-bold transition-all ${
                      recitationStyle === 'murattal'
                        ? 'bg-emerald-600 text-white shadow'
                        : isLight
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-emerald-300/70 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'المصحف المرتل' : 'Murattal'}
                  </button>
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                      }
                      setCurrentlyPlayingVerse(null);
                      setRecitationStyle('muallim');
                    }}
                    className={`min-h-[44px] px-3.5 py-2 rounded-md text-xs font-bold transition-all ${
                      recitationStyle === 'muallim'
                        ? 'bg-teal-600 text-white shadow'
                        : isLight
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-emerald-300/70 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'المصحف المعلم' : 'Muallim (Educational)'}
                  </button>
                </div>
              </div>

              {audioError && (
                <div
                  className={`p-3 rounded-lg border text-xs flex items-center gap-2 ${
                    isLight
                      ? 'bg-rose-50 border-rose-300 text-rose-800'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{audioError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                {selectedTajweed.quranicExamples.map((ex, i) => {
                  const isThisVersePlaying = currentlyPlayingVerse === ex.verseText;
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-xl border transition-all flex flex-col gap-3.5 ${
                        isThisVersePlaying
                          ? isLight
                            ? 'bg-teal-50/60 border-teal-500 ring-2 ring-teal-400/40 shadow-lg'
                            : 'bg-slate-950/80 border-teal-400/90 ring-2 ring-teal-400/30 shadow-xl shadow-emerald-950/60'
                          : isLight
                          ? 'bg-slate-50/80 border-slate-200 hover:border-emerald-300 shadow-xs'
                          : 'bg-slate-950/80 border-emerald-500/20 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                              isLight
                                ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                                : 'bg-emerald-950 border-emerald-600/40 text-emerald-300'
                            }`}
                          >
                            سورة {ex.surahName} (الآية {ex.ayahNumber})
                          </span>
                          <span
                            className={`text-[11px] font-semibold border px-2 py-0.5 rounded-full flex items-center gap-1 ${
                              isLight
                                ? 'bg-teal-100 border-teal-300 text-teal-900'
                                : 'text-teal-400 bg-teal-950/60 border-teal-800/40'
                            }`}
                          >
                            <span>🎙️ تلاوة الشيخ الحصري</span>
                            <span className={isLight ? 'text-teal-800 font-normal' : 'text-emerald-300/70 font-normal'}>
                              ({recitationStyle === 'muallim' ? (isArabic ? 'المعلم' : 'Muallim') : (isArabic ? 'المرتل' : 'Murattal')})
                            </span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {isThisVersePlaying && !audioLoading && (
                            <div
                              className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded border ${
                                isLight ? 'bg-teal-100 border-teal-300' : 'bg-teal-950/70 border-teal-500/30'
                              }`}
                            >
                              <span className={`w-1 h-3 rounded-full animate-pulse ${isLight ? 'bg-teal-600' : 'bg-teal-400'}`} />
                              <span
                                className={`w-1 h-5 rounded-full animate-pulse ${isLight ? 'bg-teal-600' : 'bg-teal-400'}`}
                                style={{ animationDelay: '150ms' }}
                              />
                              <span
                                className={`w-1 h-2 rounded-full animate-pulse ${isLight ? 'bg-teal-600' : 'bg-teal-400'}`}
                                style={{ animationDelay: '300ms' }}
                              />
                              <span
                                className={`w-1 h-4 rounded-full animate-pulse ${isLight ? 'bg-teal-600' : 'bg-teal-400'}`}
                                style={{ animationDelay: '450ms' }}
                              />
                            </div>
                          )}

                          <button
                            onClick={() => playHussaryRecitation(ex.surahNumber, ex.ayahNumber, ex.verseText)}
                            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                              isThisVersePlaying
                                ? 'bg-teal-500 text-slate-950 font-black shadow-lg shadow-teal-500/50'
                                : isLight
                                ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow'
                                : 'bg-emerald-700/80 hover:bg-emerald-600 text-white shadow'
                            }`}
                            title={
                              isArabic
                                ? 'استمع لتلاوة الآية مسجلة بصوت فضيلة الشيخ الحصري (أحكام تجويد منضبطة)'
                                : 'Listen to authentic recitation by Sheikh Al-Hussary'
                            }
                          >
                            {isThisVersePlaying ? (
                              audioLoading ? (
                                <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Square className="w-3.5 h-3.5 fill-current" />
                              )
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                            <span>
                              {isThisVersePlaying
                                ? audioLoading
                                  ? isArabic
                                    ? 'جارٍ تحميل التلاوة...'
                                    : 'Buffering recitation...'
                                  : isArabic
                                  ? 'إيقاف التلاوة'
                                  : 'Stop Recitation'
                                : isArabic
                                ? 'استمع لترتيل الشيخ الحصري'
                                : 'Play Sheikh Al-Hussary Recitation'}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Quranic Text */}
                      <div
                        className={`text-xl md:text-2xl font-serif text-center py-3 tracking-wider rounded-lg border px-4 ${
                          isLight
                            ? 'bg-white text-slate-900 border-slate-200 shadow-xs'
                            : 'text-emerald-100 bg-slate-900/40 border-emerald-500/10'
                        }`}
                      >
                        ﴿ {ex.verseText} ﴾
                      </div>

                      {/* Tajweed Explanation & Pedagogical Breakdown */}
                      <div
                        className={`text-xs p-3 rounded-lg border leading-relaxed flex flex-col gap-1 ${
                          isLight
                            ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                            : 'bg-emerald-950/40 border-emerald-500/20 text-emerald-200/90'
                        }`}
                      >
                        <div
                          className={`flex items-center gap-1.5 font-bold ${
                            isLight ? 'text-emerald-900' : 'text-emerald-300'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-emerald-700' : 'text-teal-400'}`}
                          />
                          <span>{isArabic ? 'موضع الحكم التجويدي: ' : 'Tajweed Target: '}</span>
                          <span
                            className={`font-mono px-1.5 py-0.5 rounded border ${
                              isLight
                                ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                                : 'bg-emerald-900/60 text-teal-200 border-emerald-500/30'
                            }`}
                          >
                            {ex.highlightedPart}
                          </span>
                        </div>
                        <p className={`mt-1 ${isLight ? 'text-slate-700' : 'text-emerald-100/80'}`}>
                          <strong>{isArabic ? 'الشرح والبيان: ' : 'Explanation: '}</strong>
                          {isArabic ? ex.explanationAr : ex.explanationEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAQASID AL-SHARIA SIMULATOR */}
      {activeTab === 'maqasid' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3
              className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isArabic ? 'المقاصد الشرعية الكلية الخمس' : 'The Five Higher Sharia Objectives'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {MAQASID_CATEGORIES_DATA.map((maqsad) => {
                const isSelected = selectedMaqsad.id === maqsad.id;
                return (
                  <button
                    key={maqsad.id}
                    onClick={() => setSelectedMaqsad(maqsad)}
                    className={`w-full flex flex-col min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                      isSelected
                        ? isLight
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-md'
                          : 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-900 hover:bg-emerald-50/70 hover:border-emerald-300 shadow-xs'
                        : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between">
                      <span
                        className={`font-bold text-sm ${
                          isSelected ? 'text-white' : isLight ? 'text-slate-900' : 'text-slate-100'
                        }`}
                      >
                        {isArabic ? maqsad.titleAr : maqsad.titleEn}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded border ${
                          isSelected
                            ? 'bg-emerald-800 border-emerald-500 text-white'
                            : isLight
                            ? 'bg-slate-100 border-slate-200 text-slate-700'
                            : 'bg-emerald-950 border-emerald-500/40 text-emerald-300'
                        }`}
                      >
                        {maqsad.priorityLevel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded border text-xs font-bold ${
                    isLight
                      ? 'bg-teal-100 border-teal-300 text-teal-900'
                      : 'bg-teal-900/60 border-teal-500/40 text-teal-300'
                  }`}
                >
                  {selectedMaqsad.priorityLevel}
                </span>
                <h3 className={`text-xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isArabic ? selectedMaqsad.titleAr : selectedMaqsad.titleEn}
                </h3>
              </div>
              <p
                className={`text-sm mt-2 leading-relaxed ${
                  isLight ? 'text-slate-800 font-normal' : 'text-emerald-200/90'
                }`}
              >
                {isArabic ? selectedMaqsad.essentialAr : selectedMaqsad.essentialEn}
              </p>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Concentric Spheres of Sharia Protection */}
            <MaqasidHierarchyVectorSchematic selectedMaqsad={selectedMaqsad} isArabic={isArabic} isLight={isLight} />

            <div className="flex flex-col gap-4">
              <h4
                className={`text-xs font-bold uppercase tracking-wider ${
                  isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
                }`}
              >
                {isArabic ? 'التطبيقات الفقهية والنوازل المعاصرة' : 'Jurisprudential & Contemporary Applications'}
              </h4>

              {selectedMaqsad.cases.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col gap-3 ${
                    isLight ? 'bg-slate-50/80 border-slate-200 shadow-xs' : 'bg-slate-950/60 border-emerald-500/20'
                  }`}
                >
                  <div className={`text-sm font-semibold ${isLight ? 'text-slate-900 font-bold' : 'text-emerald-300'}`}>
                    {isArabic ? c.scenarioAr : c.scenarioEn}
                  </div>
                  <div
                    className={`text-xs leading-relaxed p-3 rounded-lg border ${
                      isLight
                        ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                        : 'bg-emerald-950/30 border-emerald-500/20 text-emerald-100/80'
                    }`}
                  >
                    <strong className={isLight ? 'text-emerald-900' : 'text-emerald-300'}>
                      {isArabic ? 'التطبيق المقاصدي: ' : 'Purposive Application: '}
                    </strong>
                    {isArabic ? c.applicationAr : c.applicationEn}
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs font-mono font-bold ${
                      isLight ? 'text-emerald-800' : 'text-teal-300'
                    }`}
                  >
                    <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                    <span>{isArabic ? c.fiqhMaximAr : c.fiqhMaximEn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SEERAH & CONSTITUTIONAL MILESTONES */}
      {activeTab === 'seerah' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3
              className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{isArabic ? 'المحطات الدستورية في السيرة' : 'Constitutional Milestones'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {SEERAH_MILESTONES_DATA.map((m) => {
                const isSelected = selectedMilestone.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilestone(m)}
                    className={`w-full flex flex-col min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                      isSelected
                        ? isLight
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-md'
                          : 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-900 hover:bg-emerald-50/70 hover:border-emerald-300 shadow-xs'
                        : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between">
                      <span
                        className={`font-bold text-sm ${
                          isSelected ? 'text-white' : isLight ? 'text-slate-900' : 'text-slate-100'
                        }`}
                      >
                        {isArabic ? m.titleAr.split(':')[0] : m.titleEn.split(':')[0]}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded border font-mono ${
                          isSelected
                            ? 'bg-emerald-800 border-emerald-500 text-white'
                            : isLight
                            ? 'bg-slate-100 border-slate-200 text-slate-700'
                            : 'bg-emerald-950 border-emerald-500/30 text-emerald-300'
                        }`}
                      >
                        {m.yearHijri} هـ
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded border text-xs font-mono font-bold ${
                    isLight
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                      : 'bg-emerald-950 border-emerald-500/40 text-emerald-300'
                  }`}
                >
                  العام {selectedMilestone.yearHijri} هـ
                </span>
                <h3 className={`text-lg md:text-xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {isArabic ? selectedMilestone.titleAr : selectedMilestone.titleEn}
                </h3>
              </div>
              <p
                className={`text-sm mt-3 leading-relaxed ${
                  isLight ? 'text-slate-800 font-normal' : 'text-emerald-100/90'
                }`}
              >
                {isArabic ? selectedMilestone.eventSummaryAr : selectedMilestone.eventSummaryEn}
              </p>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Historic Astrolabe & Constitutional Cartography */}
            <SeerahConstitutionalAstrolabeVectorSchematic milestone={selectedMilestone} isArabic={isArabic} isLight={isLight} />

            <div
              className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isLight ? 'bg-teal-50/80 border-teal-200 shadow-xs' : 'bg-teal-950/30 border-teal-500/30'
              }`}
            >
              <h4
                className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  isLight ? 'text-teal-950 font-bold' : 'text-teal-300'
                }`}
              >
                <Award className={`w-4 h-4 ${isLight ? 'text-teal-700' : 'text-teal-400'}`} />
                <span>{isArabic ? 'المبدأ الدستوري الحاكم' : 'Governing Constitutional Principle'}</span>
              </h4>
              <p className={`text-sm font-semibold ${isLight ? 'text-teal-950' : 'text-teal-100'}`}>
                {isArabic ? selectedMilestone.constitutionalPrincipleAr : selectedMilestone.constitutionalPrincipleEn}
              </p>
            </div>

            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
                }`}
              >
                {isArabic ? 'الدروس الاستراتيجية والتنظيمية' : 'Strategic Lessons & Insights'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedMilestone.strategicLessonsAr : selectedMilestone.strategicLessonsEn).map((lesson, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 text-xs md:text-sm ${
                      isLight ? 'text-slate-800' : 'text-emerald-200/90'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}
                    />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONTEMPORARY BIOETHICS & AI ETHICS */}
      {activeTab === 'bioethics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3
              className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>{isArabic ? 'القضايا المعاصرة والنوازل' : 'Contemporary Dilemmas'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {BIOETHICS_ISSUES_DATA.map((issue) => {
                const isSelected = selectedIssue.id === issue.id;
                return (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue)}
                    className={`w-full flex flex-col min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                      isSelected
                        ? isLight
                          ? 'bg-emerald-700 border-emerald-700 text-white shadow-md'
                          : 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-900 hover:bg-emerald-50/70 hover:border-emerald-300 shadow-xs'
                        : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                    }`}
                  >
                    <div
                      className={`font-bold text-sm ${
                        isSelected ? 'text-white' : isLight ? 'text-slate-900' : 'text-slate-100'
                      }`}
                    >
                      {isArabic ? issue.titleAr : issue.titleEn}
                    </div>
                    <span
                      className={`text-xs font-mono mt-1 block uppercase ${
                        isSelected ? 'text-emerald-100' : isLight ? 'text-teal-700 font-bold' : 'text-teal-400'
                      }`}
                    >
                      {issue.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <h3 className={`text-xl font-black ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {isArabic ? selectedIssue.titleAr : selectedIssue.titleEn}
              </h3>
              <div
                className={`mt-3 p-3.5 rounded-xl border text-xs md:text-sm leading-relaxed ${
                  isLight
                    ? 'bg-slate-50/80 border-slate-200 text-slate-800 shadow-xs'
                    : 'bg-slate-950/60 border-emerald-500/20 text-emerald-200/90'
                }`}
              >
                <strong className={isLight ? 'text-slate-950' : 'text-emerald-300'}>
                  {isArabic ? 'الإشكالية المعاصرة: ' : 'Contemporary Dilemma: '}
                </strong>
                {isArabic ? selectedIssue.dilemmaAr : selectedIssue.dilemmaEn}
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-emerald-950/40 border-emerald-500/30'
              }`}
            >
              <h4
                className={`text-xs font-bold uppercase tracking-wider ${
                  isLight ? 'text-emerald-950 font-bold' : 'text-emerald-400'
                }`}
              >
                {isArabic ? 'الرؤية الشرعية وقرارات المجامع الفقهية' : 'Sharia Stance & Fiqh Academy Resolutions'}
              </h4>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-800' : 'text-emerald-100'}`}>
                {isArabic ? selectedIssue.islamicStanceAr : selectedIssue.islamicStanceEn}
              </p>
            </div>

            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-emerald-900 font-black' : 'text-emerald-400'
                }`}
              >
                {isArabic ? 'الضوابط الفقهية والأخلاقية الحاكمة' : 'Guiding Ethical Principles'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedIssue.shariaGuidingPrinciplesAr : selectedIssue.shariaGuidingPrinciplesEn).map(
                  (principle, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 text-xs md:text-sm ${
                        isLight ? 'text-slate-800' : 'text-emerald-200/90'
                      }`}
                    >
                      <ShieldCheck
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}
                      />
                      <span>{principle}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div
              className={`p-3.5 rounded-xl border text-xs font-semibold ${
                isLight
                  ? 'bg-teal-50 border-teal-200 text-teal-950'
                  : 'bg-teal-950/40 border-teal-500/30 text-teal-200'
              }`}
            >
              {isArabic ? selectedIssue.consensusResolutionAr : selectedIssue.consensusResolutionEn}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SCENARIO QUIZ & FORMATIVE EVALUATION */}
      {activeTab === 'quiz' && (
        <div className={`max-w-3xl mx-auto w-full ${cardClasses} rounded-2xl p-6 md:p-8 flex flex-col gap-6`}>
          <div
            className={`flex items-center justify-between pb-4 border-b ${
              isLight ? 'border-slate-200' : 'border-emerald-500/20'
            }`}
          >
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isLight ? 'text-emerald-800' : 'text-emerald-400'
                }`}
              >
                {isArabic
                  ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryAr
                  : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryEn}
              </span>
              <h3 className={`text-lg font-black mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {isArabic
                  ? `السؤال ${currentQIndex + 1} من ${ISLAMIC_STUDIES_QUIZ_DATA.length}`
                  : `Question ${currentQIndex + 1} of ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-3 py-1 rounded-full border font-bold ${
                  isLight
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                    : 'bg-emerald-950 border-emerald-500/30 text-emerald-300'
                }`}
              >
                {isArabic
                  ? `النتيجة: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}`
                  : `Score: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </span>
            </div>
          </div>

          <div
            className={`text-base md:text-lg font-bold leading-relaxed ${
              isLight ? 'text-slate-900' : 'text-emerald-100'
            }`}
          >
            {isArabic
              ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionAr
              : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionEn}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {(isArabic
              ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsAr
              : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsEn
            ).map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].correctIndex;
              let btnStyle = isLight
                ? 'bg-white border-slate-200 text-slate-800 hover:bg-emerald-50/70 hover:border-emerald-300 shadow-xs'
                : 'bg-slate-950/60 border-emerald-500/20 text-emerald-100 hover:bg-emerald-900/20';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = isLight
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                    : 'bg-emerald-600/30 border-emerald-400 text-white';
                } else if (isSelected) {
                  btnStyle = isLight
                    ? 'bg-rose-50 border-rose-400 text-rose-950 font-semibold'
                    : 'bg-red-600/30 border-red-400 text-white';
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleQuizSubmit(i)}
                  className={`min-h-[44px] p-4 rounded-xl border text-start transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span className="text-xs md:text-sm font-medium">{opt}</span>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}
                    />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-rose-600' : 'text-red-400'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isLight ? 'bg-emerald-50/80 border-emerald-200 shadow-xs' : 'bg-emerald-950/50 border-emerald-500/30'
              }`}
            >
              <span className={`text-xs font-bold ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                {isArabic ? 'التعليل النموذجي: ' : 'Model Explanation: '}
              </span>
              <p
                className={`text-xs md:text-sm leading-relaxed ${
                  isLight ? 'text-slate-800 font-normal' : 'text-emerald-100/90'
                }`}
              >
                {isArabic
                  ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationAr
                  : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationEn}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={resetQuiz}
              className={`min-h-[44px] px-3 py-2 flex items-center gap-1.5 text-xs transition-colors ${
                isLight ? 'text-slate-600 hover:text-slate-900' : 'text-emerald-400 hover:text-emerald-200'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إعادة الاختبار' : 'Reset Quiz'}</span>
            </button>

            {isAnswerSubmitted && currentQIndex < ISLAMIC_STUDIES_QUIZ_DATA.length - 1 && (
              <button
                onClick={nextQuestion}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm shadow-lg shadow-emerald-700/40 transition-all"
              >
                {isArabic ? 'السؤال التالي ←' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
