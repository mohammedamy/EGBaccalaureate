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
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: ThemeMode;
  isFullscreen?: boolean;
  onClose?: () => void;
}

type HistoryTab = 'timeline' | 'map' | 'treaties' | 'cause_effect' | 'quiz';

export const HistoryTimelineStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen = false,
  onClose,
}) => {
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
        isFullscreen ? 'h-full max-w-none rounded-none' : 'max-w-6xl my-4'
      } ${containerClasses}`}
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

        {/* Global Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-800/40 dark:bg-slate-900/80 rounded-2xl border border-slate-700/50 backdrop-blur-md overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
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
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
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
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
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
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
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
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            {isArabic ? 'تحدي الفخاخ' : 'Exam Traps'}
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-all ${
                        selectedChapter === chap
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {chap === 'all' ? (isArabic ? 'الكل' : 'All') : `${isArabic ? 'ف' : 'Ch'} ${chap}`}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute top-2.5 start-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isArabic ? 'بحث عن حدث أو معركة...' : 'Search events or battles...'}
                    className="w-full ps-9 pe-3 py-1.5 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400 px-2">
                  {isArabic ? 'التصنيف:' : 'Category:'}
                </span>
                {(['all', 'battle', 'treaty', 'revolution', 'reform'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-0.5 text-[11px] rounded-md font-bold transition-all ${
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
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-3.5 items-start ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/20 border-amber-500/60 ring-1 ring-amber-500/40 shadow-lg'
                            : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        {/* Year Badge */}
                        <div className="flex flex-col items-center justify-center min-w-[62px] p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
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
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
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
            <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner min-h-[460px]">
              {/* Background Tactical Grid & Coordinates */}
              <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

              {/* Theater Compass Rose Overlay */}
              <div className="absolute top-4 end-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-xs font-mono text-amber-400 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '16s' }} />
                <span>EGY-STRAT-THEATER</span>
              </div>

              {/* Interactive Vector Map SVG */}
              <div className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center">
                <svg
                  viewBox="0 0 100 80"
                  className="w-full h-full drop-shadow-xl select-none"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(217, 119, 6, 0.15))' }}
                >
                  {/* Simplified Historical Shoreline / Nile Geography */}
                  {/* Mediterranean Coast */}
                  <path
                    d="M 5,20 Q 25,18 40,24 T 65,22 T 95,15"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeDasharray="1 1"
                  />
                  {/* Nile Delta & River Valley */}
                  <path
                    d="M 40,24 Q 48,34 48,46 L 48,78"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Damietta Branch */}
                  <path
                    d="M 48,36 Q 54,28 58,22"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  {/* Rosetta Branch */}
                  <path
                    d="M 48,36 Q 42,28 35,20"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  {/* Red Sea / Gulf of Suez & Aqaba */}
                  <path
                    d="M 64,28 L 68,48 L 78,75"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 76,34 L 82,55"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Location Coordinate Pins */}
                  {STRATEGIC_MAP_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation.id === loc.id;
                    return (
                      <g
                        key={loc.id}
                        className="cursor-pointer transition-transform duration-200"
                        onClick={() => setSelectedLocation(loc)}
                      >
                        {/* Radar Pulse for Selected Pin */}
                        {isSelected && (
                          <circle
                            cx={loc.x}
                            cy={loc.y}
                            r="6"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="0.8"
                            className="animate-ping origin-center"
                          />
                        )}

                        {/* Outer Ring */}
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={isSelected ? '3.5' : '2.5'}
                          fill={isSelected ? '#f59e0b' : '#334155'}
                          stroke={isSelected ? '#ffffff' : '#64748b'}
                          strokeWidth="0.8"
                        />

                        {/* Location Text Label */}
                        <text
                          x={loc.x}
                          y={loc.y - 4}
                          textAnchor="middle"
                          fill={isSelected ? '#fde68a' : '#94a3b8'}
                          fontSize="2.6"
                          fontWeight={isSelected ? 'bold' : 'normal'}
                          fontFamily="sans-serif"
                        >
                          {isArabic ? loc.nameAr.split(' ')[0] : loc.nameEn.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Theater Navigation Hint */}
              <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {isArabic
                  ? 'اضغط على أي موقع على الخريطة للاطلاع على الأهمية الاستراتيجية ومعارك الفصل'
                  : 'Click any battleground node on the map to inspect military details and exam notes'}
              </div>
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
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
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

                {/* Quick Switch Buttons for Locations */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 mb-2">
                    {isArabic ? 'المسارح الاستراتيجية الأخرى:' : 'Other Strategic Theaters:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {STRATEGIC_MAP_LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className={`px-2.5 py-1 text-xs rounded-xl font-bold transition-all ${
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
            {/* Treaty Selector Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
              {PRIMARY_TREATIES_DOCUMENTS.map((tr) => (
                <button
                  key={tr.id}
                  onClick={() => setSelectedTreaty(tr)}
                  className={`px-4 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-2 whitespace-nowrap ${
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
            {/* Chain Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
              {CAUSE_EFFECT_CHAINS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChain(ch)}
                  className={`px-4 py-2 rounded-2xl text-xs font-black transition-all whitespace-nowrap ${
                    selectedChain.id === ch.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isArabic ? ch.titleAr : ch.titleEn}
                </button>
              ))}
            </div>

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

              {/* Options */}
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
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${optStyle}`}
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
                  className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-black transition-all ${
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

                  {/* Next / Previous Controls */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={handlePrevQuiz}
                      disabled={currentQuizIndex === 0}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700"
                    >
                      {isArabic ? 'السابق' : 'Previous'}
                    </button>

                    {currentQuizIndex < MINISTERIAL_HISTORY_CHALLENGE.length - 1 ? (
                      <button
                        onClick={handleNextQuiz}
                        className="px-5 py-2 rounded-xl text-xs font-black bg-amber-500 text-white hover:bg-amber-600 shadow-md"
                      >
                        {isArabic ? 'السؤال التالي' : 'Next Question'}
                      </button>
                    ) : (
                      <button
                        onClick={handleRestartQuiz}
                        className="px-5 py-2 rounded-xl text-xs font-black bg-emerald-500 text-white hover:bg-emerald-600 shadow-md flex items-center gap-1.5"
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
