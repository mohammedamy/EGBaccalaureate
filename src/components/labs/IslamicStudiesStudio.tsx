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
}> = ({ rule, isArabic }) => {
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

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="text-xs sm:text-sm font-black text-emerald-300">
            {isArabic
              ? 'المخطط التشريحي الصوتي لمخارج الحروف وصفاتها (Vocal Tract & Articulation Schematic)'
              : 'Phonetic Vocal Tract & Articulation Point Schematic'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-mono text-teal-300">
          {isArabic ? rule.categoryAr : rule.categoryEn}
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 240"
          className="w-full min-w-[660px] h-auto select-none"
          style={{ maxHeight: '250px' }}
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

          {/* Stylized Anatomical Head & Vocal Tract Cross-Section Outline */}
          <path
            d="M 120 220 C 110 180, 100 120, 130 70 C 160 30, 240 20, 300 35 C 330 45, 360 80, 370 120 C 375 140, 385 155, 410 160 C 420 162, 420 175, 400 180 C 375 185, 365 200, 365 220"
            fill="none"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="4,4"
          />

          {/* 1. Al-Khayshoom (Nasal Cavity / الخيشوم) */}
          <ellipse
            cx="280"
            cy="90"
            rx="45"
            ry="22"
            fill={isGhunnah ? 'url(#nasalResonance)' : '#0f172a'}
            stroke={isGhunnah ? '#2dd4bf' : '#475569'}
            strokeWidth={isGhunnah ? '2.5' : '1.2'}
            filter={isGhunnah ? 'url(#makhrajGlow)' : undefined}
          />
          <text
            x="280"
            y="94"
            textAnchor="middle"
            fill={isGhunnah ? '#ccfbf1' : '#94a3b8'}
            fontSize="11"
            fontWeight="bold"
          >
            {isArabic ? 'الخَيْشُوم (مخرج الغنة)' : 'Nasal Cavity (Ghunnah)'}
          </text>

          {/* 2. Al-Jawf (Oral & Throat Cavity / الجوف) */}
          <ellipse
            cx="250"
            cy="140"
            rx="55"
            ry="25"
            fill={isMadd ? 'url(#vocalTractGlow)' : '#0f172a'}
            stroke={isMadd ? '#10b981' : '#475569'}
            strokeWidth={isMadd ? '2.5' : '1.2'}
            filter={isMadd ? 'url(#makhrajGlow)' : undefined}
          />
          <text
            x="250"
            y="144"
            textAnchor="middle"
            fill={isMadd ? '#d1fae5' : '#94a3b8'}
            fontSize="11"
            fontWeight="bold"
          >
            {isArabic ? 'الجَوْف (حروف المد الثلاثة)' : 'Al-Jawf (Madd Cavity)'}
          </text>

          {/* 3. Al-Lisan (The Tongue / اللسان) */}
          <path
            d="M 210 165 C 240 150, 290 150, 320 168 C 300 185, 230 185, 210 165 Z"
            fill={!isHalq && !isMadd ? '#064e3b' : '#0f172a'}
            stroke={!isHalq && !isMadd ? '#34d399' : '#475569'}
            strokeWidth="1.8"
          />
          <text x="265" y="172" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">
            {isArabic ? 'اللِّسَان (10 مخارج لـ 18 حرفاً)' : 'Tongue (18 Letters)'}
          </text>

          {/* 4. Ash-Shafatayn (The Lips / الشفتان) */}
          <circle
            cx="370"
            cy="165"
            r="18"
            fill={isShafatayn ? '#047857' : '#0f172a'}
            stroke={isShafatayn ? '#34d399' : '#475569'}
            strokeWidth={isShafatayn ? '2.5' : '1.2'}
            filter={isShafatayn ? 'url(#makhrajGlow)' : undefined}
          />
          <text
            x="370"
            y="169"
            textAnchor="middle"
            fill={isShafatayn ? '#ecfdf5' : '#94a3b8'}
            fontSize="9"
            fontWeight="bold"
          >
            {isArabic ? 'الشفتان' : 'Lips'}
          </text>

          {/* 5. Al-Halq (The Throat / الحلق) */}
          <rect
            x="180"
            y="185"
            width="60"
            height="30"
            rx="8"
            fill={isHalq ? '#065f46' : '#0f172a'}
            stroke={isHalq ? '#34d399' : '#475569'}
            strokeWidth={isHalq ? '2.5' : '1.2'}
            filter={isHalq ? 'url(#makhrajGlow)' : undefined}
          />
          <text
            x="210"
            y="204"
            textAnchor="middle"
            fill={isHalq ? '#ecfdf5' : '#94a3b8'}
            fontSize="10"
            fontWeight="bold"
          >
            {isArabic ? 'الحَلْق' : 'Throat'}
          </text>

          {/* Acoustic Wave Vector Beams */}
          <g transform="translate(420, 30)">
            <rect
              x="0"
              y="0"
              width="360"
              height="180"
              rx="16"
              fill="#020617"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <text x="180" y="24" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">
              {isArabic ? 'خصائص الصوت والأداء التجويدي' : 'Acoustic Attributes & Articulation Profile'}
            </text>

            <line x1="15" y1="36" x2="345" y2="36" stroke="#334155" strokeWidth="1" />

            {/* Feature 1: Target Letters */}
            <text x="20" y="60" fill="#94a3b8" fontSize="11">
              {isArabic ? 'أحرف الحكم المعني:' : 'Target Letters:'}
            </text>
            <g transform="translate(130, 46)">
              {rule.letters.map((lettr, idx) => (
                <g key={idx}>
                  <rect
                    x={idx * 26}
                    y="0"
                    width="22"
                    height="22"
                    rx="6"
                    fill="#064e3b"
                    stroke="#34d399"
                    strokeWidth="1"
                  />
                  <text
                    x={idx * 26 + 11}
                    y="15"
                    textAnchor="middle"
                    fill="#fef08a"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="serif"
                  >
                    {lettr}
                  </text>
                </g>
              ))}
            </g>

            {/* Feature 2: Articulatory Action */}
            <text x="20" y="96" fill="#94a3b8" fontSize="11">
              {isArabic ? 'آلية النطق الصوتي:' : 'Phonetic Mechanism:'}
            </text>
            <text x="130" y="96" fill="#6ee7b7" fontSize="11" fontWeight="bold">
              {isGhunnah
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
                : 'Labial assimilation with hidden meem'}
            </text>

            {/* Feature 3: Measure / Duration */}
            <text x="20" y="132" fill="#94a3b8" fontSize="11">
              {isArabic ? 'المقدار الزمني الدستوري:' : 'Metronomic Timing:'}
            </text>
            <text x="130" y="132" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="mono">
              {isMadd
                ? 'حركتان إلى 6 حركات (2 - 6 Harakat)'
                : isGhunnah
                ? 'حركتان كاملتان (2 Harakat)'
                : 'حركة اعتيادية منضبطة'}
            </text>

            <rect x="20" y="148" width="320" height="12" rx="6" fill="#0f172a" />
            <rect
              x="20"
              y="148"
              width={isMadd ? '300' : isGhunnah ? '220' : '150'}
              height="12"
              rx="6"
              fill="#10b981"
            />
          </g>
        </svg>
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
}> = ({ selectedMaqsad, isArabic }) => {
  const categories = MAQASID_CATEGORIES_DATA;
  const cx = 400;
  const cy = 120;

  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-teal-950/30 border border-teal-500/30 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-teal-500/20">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-teal-400" />
          <h4 className="text-xs sm:text-sm font-black text-teal-300">
            {isArabic
              ? 'هرمية المقاصد الشرعية الكلية ورتب الضرورات (Maqasid Spheres of Protection)'
              : 'Universal Sharia Objectives & Hierarchy of Necessities'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-[11px] font-bold text-teal-300">
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
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <text
            x={cx}
            y={cy - 82}
            textAnchor="middle"
            fill="#64748b"
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
            strokeOpacity="0.5"
            strokeDasharray="3,3"
          />
          <text
            x={cx}
            y={cy - 58}
            textAnchor="middle"
            fill="#2dd4bf"
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
            fill="url(#daruriyyatGrad)"
            stroke="#14b8a6"
            strokeWidth="2"
          />
          <text
            x={cx}
            y={cy - 22}
            textAnchor="middle"
            fill="#5eead4"
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
                    stroke="#2dd4bf"
                    strokeWidth="2.5"
                    className="animate-ping"
                    opacity="0.4"
                  />
                )}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? '24' : '18'}
                  fill={isSelected ? '#042f2e' : '#0f172a'}
                  stroke={isSelected ? '#2dd4bf' : '#334155'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />
                <text
                  textAnchor="middle"
                  y="4"
                  fill={isSelected ? '#f0fdfa' : '#94a3b8'}
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
}> = ({ milestone, isArabic: _isArabic }) => {
  return (
    <div className="bg-gradient-to-b from-slate-900/95 via-slate-950 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-400" />
          <h4 className="text-xs sm:text-sm font-black text-emerald-300">
            {_isArabic
              ? 'الإسطرلاب التاريخي والدستوري للسيرة النبوية (Prophetic Constitutional Astrolabe)'
              : 'Prophetic Historic & Constitutional Cartography'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-bold">
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
          <circle cx="120" cy="100" r="75" fill="#020617" stroke="#059669" strokeWidth="1.5" />
          <circle
            cx="120"
            cy="100"
            r="60"
            fill="none"
            stroke="#047857"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <line x1="120" y1="25" x2="120" y2="175" stroke="#10b981" strokeWidth="1" opacity="0.4" />
          <line x1="45" y1="100" x2="195" y2="100" stroke="#10b981" strokeWidth="1" opacity="0.4" />
          <text x="120" y="42" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
            شَمَال
          </text>
          <text x="120" y="168" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
            جَنُوب
          </text>
          <text
            x="120"
            y="104"
            textAnchor="middle"
            fill="#fef08a"
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
              fill="#020617"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {/* Path Connection line */}
            <path
              d="M 60 120 Q 150 90, 220 70 T 360 80 T 480 60"
              fill="none"
              stroke="#10b981"
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
                <circle cx="0" cy="0" r="10" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#fef08a" />
                <text
                  textAnchor="middle"
                  y="-14"
                  fill="#ecfdf5"
                  fontSize="10"
                  fontWeight="bold"
                >
                  {st.nameAr}
                </text>
                <text
                  textAnchor="middle"
                  y="22"
                  fill="#6ee7b7"
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
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                {isArabic ? 'مختبر الدراسات الإسلامية التفاعلي' : 'Islamic Studies Interactive Studio'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ☪️ MoE Accredited
              </span>
            </div>
            <p className="text-xs md:text-sm text-emerald-300/80">
              {isArabic
                ? 'محاكاة أحكام التجويد، مقاصد الشريعة، السيرة النبوية، والأخلاقيات الحيوية والذكاء الاصطناعي'
                : 'Interactive Tajweed recitation, Maqasid al-Sharia, Prophetic Seerah, and contemporary bioethics/AI ethics'}
            </p>
          </div>
        </div>

        {/* Studio Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-emerald-500/30">
          <button
            onClick={() => setActiveTab('tajweed')}
            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
              activeTab === 'tajweed'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/40'
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
                : 'text-emerald-300/70 hover:text-white hover:bg-emerald-800/20'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{isArabic ? 'بنك المواقف والتقييم' : 'Scenario Quiz'}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-emerald-300/80 hover:text-white rounded-lg hover:bg-emerald-800/30 transition-colors border border-emerald-500/30"
            title={isFullscreen ? (isArabic ? 'خروج من ملء الشاشة' : 'Exit Fullscreen') : (isArabic ? 'ملء الشاشة' : 'Fullscreen')}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-emerald-300" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* TAB 1: TAJWEED RECITATION ENGINE */}
      {activeTab === 'tajweed' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Rules List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{isArabic ? 'قائمة الأحكام القرآنية' : 'Quranic Tajweed Rules'}</span>
            </h3>
            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-1">
              {TAJWEED_RULES_DATA.map((rule) => (
                <button
                  key={rule.id}
                  onClick={() => setSelectedTajweed(rule)}
                  className={`min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                    selectedTajweed.id === rule.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md shadow-emerald-950/40'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="font-bold text-sm">{isArabic ? rule.nameAr : rule.nameEn}</div>
                  <div className="text-xs text-emerald-400/80 mt-1">{isArabic ? rule.categoryAr : rule.categoryEn}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {rule.letters.map((l, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
                        {l}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Display & Quranic Audio */}
          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {isArabic ? selectedTajweed.categoryAr : selectedTajweed.categoryEn}
                </span>
                <h3 className="text-xl font-black mt-1">
                  {isArabic ? selectedTajweed.nameAr : selectedTajweed.nameEn}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                {selectedTajweed.letters.map((lettr, idx) => (
                  <span
                    key={idx}
                    className="w-8 h-8 rounded-lg bg-emerald-800/40 border border-emerald-400/40 flex items-center justify-center text-sm font-bold text-emerald-200 shadow"
                  >
                    {lettr}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-emerald-100/90">
              {isArabic ? selectedTajweed.descriptionAr : selectedTajweed.descriptionEn}
            </p>

            {/* High-Resolution Scientific Vector Schematic: Anatomical Makharij & Resonance */}
            <TajweedPhoneticMakharijVectorSchematic rule={selectedTajweed} isArabic={isArabic} />

            {/* Quranic Verse Examples with Sheikh Al-Hussary Audio Engine */}
            <div className="flex flex-col gap-4">
              {/* Sheikh Al-Hussary Attribution & Style Switcher Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-slate-950 to-teal-950/90 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-800/40 border border-emerald-400/40 flex items-center justify-center text-teal-300 shadow">
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-emerald-300 flex items-center gap-1.5">
                      <span>{isArabic ? 'تلاوات القرآن الكريم بصوت فضيلة الشيخ محمود خليل الحصري (رحمه الله)' : 'Quranic Recitation by Sheikh Mahmoud Khalil Al-Hussary'}</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-[10px] text-teal-300 border border-emerald-400/30 font-sans">
                        {isArabic ? 'شيخ عموم المقارئ المصرية' : 'Grand Sheikh of Egyptian Reciters'}
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-400/80 mt-0.5">
                      {isArabic
                        ? 'تلاوات قرآنية حقيقية تراعي مخارج الحروف، أحكام النون الساكنة والتنوين، المدود، والإقلاب بلا أي نطق اصطناعي.'
                        : 'Authentic recorded Tajweed recitations adhering strictly to classical Makhaarij and Ahkam without synthetic speech.'}
                    </p>
                  </div>
                </div>

                {/* Recitation Style Toggle (Murattal vs Muallim) */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-emerald-500/30 self-stretch md:self-auto justify-center">
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
                        : 'text-emerald-300/70 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'المصحف المعلم' : 'Muallim (Educational)'}
                  </button>
                </div>
              </div>

              {audioError && (
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{audioError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                {selectedTajweed.quranicExamples.map((ex, i) => {
                  const isThisVersePlaying = currentlyPlayingVerse === ex.verseText;
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-xl bg-slate-950/80 border transition-all ${
                        isThisVersePlaying
                          ? 'border-teal-400/90 ring-2 ring-teal-400/30 shadow-xl shadow-emerald-950/60'
                          : 'border-emerald-500/20 hover:border-emerald-500/40'
                      } flex flex-col gap-3.5`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-600/40 text-emerald-300">
                            سورة {ex.surahName} (الآية {ex.ayahNumber})
                          </span>
                          <span className="text-[11px] font-semibold text-teal-400 bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span>🎙️ تلاوة الشيخ الحصري</span>
                            <span className="text-emerald-300/70 font-normal">
                              ({recitationStyle === 'muallim' ? (isArabic ? 'المعلم' : 'Muallim') : (isArabic ? 'المرتل' : 'Murattal')})
                            </span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {isThisVersePlaying && !audioLoading && (
                            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-teal-950/70 border border-teal-500/30">
                              <span className="w-1 h-3 bg-teal-400 animate-pulse rounded-full" />
                              <span className="w-1 h-5 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '150ms' }} />
                              <span className="w-1 h-2 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '300ms' }} />
                              <span className="w-1 h-4 bg-teal-400 animate-pulse rounded-full" style={{ animationDelay: '450ms' }} />
                            </div>
                          )}

                          <button
                            onClick={() => playHussaryRecitation(ex.surahNumber, ex.ayahNumber, ex.verseText)}
                            className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                              isThisVersePlaying
                                ? 'bg-teal-400 text-slate-950 font-black shadow-lg shadow-teal-500/50'
                                : 'bg-emerald-700/80 hover:bg-emerald-600 text-white shadow'
                            }`}
                            title={isArabic ? 'استمع لتلاوة الآية مسجلة بصوت فضيلة الشيخ الحصري (أحكام تجويد منضبطة)' : 'Listen to authentic recitation by Sheikh Al-Hussary'}
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
                                ? (audioLoading
                                    ? (isArabic ? 'جارٍ تحميل التلاوة...' : 'Buffering recitation...')
                                    : (isArabic ? 'إيقاف التلاوة' : 'Stop Recitation'))
                                : (isArabic ? 'استمع لترتيل الشيخ الحصري' : 'Play Sheikh Al-Hussary Recitation')}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Quranic Text */}
                      <div className="text-xl md:text-2xl font-serif text-center py-3 text-emerald-100 tracking-wider bg-slate-900/40 rounded-lg border border-emerald-500/10 px-4">
                        ﴿ {ex.verseText} ﴾
                      </div>

                      {/* Tajweed Explanation & Pedagogical Breakdown */}
                      <div className="text-xs bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/20 text-emerald-200/90 leading-relaxed flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{isArabic ? 'موضع الحكم التجويدي: ' : 'Tajweed Target: '}</span>
                          <span className="font-mono bg-emerald-900/60 px-1.5 py-0.5 rounded text-teal-200 border border-emerald-500/30">
                            {ex.highlightedPart}
                          </span>
                        </div>
                        <p className="text-emerald-100/80 mt-1">
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Scale className="w-4 h-4" />
              <span>{isArabic ? 'المقاصد الشرعية الكلية الخمس' : 'The Five Higher Sharia Objectives'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {MAQASID_CATEGORIES_DATA.map((maqsad) => (
                <button
                  key={maqsad.id}
                  onClick={() => setSelectedMaqsad(maqsad)}
                  className={`min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                    selectedMaqsad.id === maqsad.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{isArabic ? maqsad.titleAr : maqsad.titleEn}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                      {maqsad.priorityLevel}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-500/40 text-xs font-bold text-teal-300">
                  {selectedMaqsad.priorityLevel}
                </span>
                <h3 className="text-xl font-black">{isArabic ? selectedMaqsad.titleAr : selectedMaqsad.titleEn}</h3>
              </div>
              <p className="text-sm text-emerald-200/90 mt-2 leading-relaxed">
                {isArabic ? selectedMaqsad.essentialAr : selectedMaqsad.essentialEn}
              </p>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Concentric Spheres of Sharia Protection */}
            <MaqasidHierarchyVectorSchematic selectedMaqsad={selectedMaqsad} isArabic={isArabic} />

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? 'التطبيقات الفقهية والنوازل المعاصرة' : 'Jurisprudential & Contemporary Applications'}
              </h4>

              {selectedMaqsad.cases.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 flex flex-col gap-3">
                  <div className="text-sm font-semibold text-emerald-300">
                    {isArabic ? c.scenarioAr : c.scenarioEn}
                  </div>
                  <div className="text-xs text-emerald-100/80 leading-relaxed bg-emerald-950/30 p-3 rounded-lg border border-emerald-500/20">
                    <strong>{isArabic ? 'التطبيق المقاصدي: ' : 'Purposive Application: '}</strong>
                    {isArabic ? c.applicationAr : c.applicationEn}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>{isArabic ? 'المحطات الدستورية في السيرة' : 'Constitutional Milestones'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {SEERAH_MILESTONES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m)}
                  className={`min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                    selectedMilestone.id === m.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{isArabic ? m.titleAr.split(':')[0] : m.titleEn.split(':')[0]}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono">
                      {m.yearHijri} هـ
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300">
                  العام {selectedMilestone.yearHijri} هـ
                </span>
                <h3 className="text-lg md:text-xl font-black">{isArabic ? selectedMilestone.titleAr : selectedMilestone.titleEn}</h3>
              </div>
              <p className="text-sm text-emerald-100/90 mt-3 leading-relaxed">
                {isArabic ? selectedMilestone.eventSummaryAr : selectedMilestone.eventSummaryEn}
              </p>
            </div>

            {/* High-Resolution Scientific Vector Schematic: Historic Astrolabe & Constitutional Cartography */}
            <SeerahConstitutionalAstrolabeVectorSchematic milestone={selectedMilestone} isArabic={isArabic} />

            <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>{isArabic ? 'المبدأ الدستوري الحاكم' : 'Governing Constitutional Principle'}</span>
              </h4>
              <p className="text-sm font-semibold text-teal-100">
                {isArabic ? selectedMilestone.constitutionalPrincipleAr : selectedMilestone.constitutionalPrincipleEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {isArabic ? 'الدروس الاستراتيجية والتنظيمية' : 'Strategic Lessons & Insights'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedMilestone.strategicLessonsAr : selectedMilestone.strategicLessonsEn).map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-emerald-200/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>{isArabic ? 'القضايا المعاصرة والنوازل' : 'Contemporary Dilemmas'}</span>
            </h3>
            <div className="flex flex-col gap-2">
              {BIOETHICS_ISSUES_DATA.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue)}
                  className={`min-h-[44px] p-3.5 rounded-xl text-start transition-all border ${
                    selectedIssue.id === issue.id
                      ? 'bg-emerald-900/50 border-emerald-400 text-white shadow-md'
                      : 'bg-slate-900/40 border-emerald-500/10 text-emerald-200/80 hover:bg-emerald-900/20'
                  }`}
                >
                  <div className="font-bold text-sm">{isArabic ? issue.titleAr : issue.titleEn}</div>
                  <span className="text-xs text-teal-400 font-mono mt-1 block uppercase">
                    {issue.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-8 ${cardClasses} rounded-2xl p-6 flex flex-col gap-6`}>
            <div>
              <h3 className="text-xl font-black">{isArabic ? selectedIssue.titleAr : selectedIssue.titleEn}</h3>
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-xs md:text-sm text-emerald-200/90 leading-relaxed">
                <strong>{isArabic ? 'الإشكالية المعاصرة: ' : 'Contemporary Dilemma: '}</strong>
                {isArabic ? selectedIssue.dilemmaAr : selectedIssue.dilemmaEn}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? 'الرؤية الشرعية وقرارات المجامع الفقهية' : 'Sharia Stance & Fiqh Academy Resolutions'}
              </h4>
              <p className="text-sm text-emerald-100 leading-relaxed">
                {isArabic ? selectedIssue.islamicStanceAr : selectedIssue.islamicStanceEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {isArabic ? 'الضوابط الفقهية والأخلاقية الحاكمة' : 'Guiding Ethical Principles'}
              </h4>
              <ul className="space-y-2">
                {(isArabic ? selectedIssue.shariaGuidingPrinciplesAr : selectedIssue.shariaGuidingPrinciplesEn).map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-emerald-200/90">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs font-semibold text-teal-200">
              {isArabic ? selectedIssue.consensusResolutionAr : selectedIssue.consensusResolutionEn}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SCENARIO QUIZ & FORMATIVE EVALUATION */}
      {activeTab === 'quiz' && (
        <div className={`max-w-3xl mx-auto w-full ${cardClasses} rounded-2xl p-6 md:p-8 flex flex-col gap-6`}>
          <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].topicCategoryEn}
              </span>
              <h3 className="text-lg font-black mt-1">
                {isArabic ? `السؤال ${currentQIndex + 1} من ${ISLAMIC_STUDIES_QUIZ_DATA.length}` : `Question ${currentQIndex + 1} of ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-bold">
                {isArabic ? `النتيجة: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}` : `Score: ${quizScore} / ${ISLAMIC_STUDIES_QUIZ_DATA.length}`}
              </span>
            </div>
          </div>

          <div className="text-base md:text-lg font-bold text-emerald-100 leading-relaxed">
            {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].questionEn}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {(isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].optionsEn).map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].correctIndex;
              let btnStyle = 'bg-slate-950/60 border-emerald-500/20 text-emerald-100 hover:bg-emerald-900/20';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-600/30 border-emerald-400 text-white';
                } else if (isSelected) {
                  btnStyle = 'bg-red-600/30 border-red-400 text-white';
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
                  {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                  {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex flex-col gap-2">
              <span className="text-xs font-bold text-emerald-300">
                {isArabic ? 'التعليل النموذجي: ' : 'Model Explanation: '}
              </span>
              <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
                {isArabic ? ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationAr : ISLAMIC_STUDIES_QUIZ_DATA[currentQIndex].explanationEn}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={resetQuiz}
              className="min-h-[44px] px-3 py-2 flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-200 transition-colors"
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
