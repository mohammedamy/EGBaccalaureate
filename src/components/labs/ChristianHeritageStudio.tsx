import React, { useState } from 'react';
import type { Language } from '../../i18n/translations';
import {
  HOLY_SACRAMENTS,
  MONASTIC_MILESTONES,
  GOSPEL_SYNOPTICS,
  BIOETHICS_TOPICS,
  CHRISTIAN_SCENARIO_QUIZ,
  type HolySacrament,
  type MonasticMilestone,
  type GospelSynopticItem,
  type BioethicsTopic,
} from '../../data/christianLab/christianLabData';
import {
  Volume2,
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
  HeartHandshake
} from 'lucide-react';

interface Props {
  lang?: Language;
  theme?: 'dark' | 'light' | 'high-contrast';
  isFullscreen?: boolean;
  initialTab?: ChristianStudioTab;
}

export type ChristianStudioTab = 'sacraments' | 'monasticism' | 'synoptics' | 'bioethics' | 'quiz';

export const ChristianHeritageStudio: React.FC<Props> = ({
  lang = 'ar',
  theme = 'dark',
  isFullscreen = false,
  initialTab = 'sacraments',
}) => {
  const isLight = theme === 'light';
  const isContrast = theme === 'high-contrast';
  const isArabic = lang === 'ar';

  // Active Tab
  const [activeTab, setActiveTab] = useState<ChristianStudioTab>(initialTab);

  // Tab 1: Sacraments State
  const [selectedSacrament, setSelectedSacrament] = useState<HolySacrament>(HOLY_SACRAMENTS[0]);
  const [currentlyPlayingVerse, setCurrentlyPlayingVerse] = useState<string | null>(null);

  // Tab 2: Monastic Heritage State
  const [selectedMilestone, setSelectedMilestone] = useState<MonasticMilestone>(MONASTIC_MILESTONES[0]);

  // Tab 3: Gospel Synoptics State
  const [selectedGospel, setSelectedGospel] = useState<GospelSynopticItem>(GOSPEL_SYNOPTICS[0]);

  // Tab 4: Bioethics State
  const [selectedTopic, setSelectedTopic] = useState<BioethicsTopic>(BIOETHICS_TOPICS[0]);

  // Tab 5: Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Web Speech API Pronunciation
  const speakScripture = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isArabic ? 'ar-EG' : 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    utterance.onstart = () => setCurrentlyPlayingVerse(text);
    utterance.onend = () => setCurrentlyPlayingVerse(null);
    utterance.onerror = () => setCurrentlyPlayingVerse(null);

    window.speechSynthesis.speak(utterance);
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
      className={`rounded-2xl border p-4 md:p-6 transition-all duration-300 flex flex-col gap-6 ${themeClasses} ${
        isFullscreen ? 'min-h-screen' : 'min-h-[700px]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
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
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
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
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
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
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'synoptics'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>{isArabic ? 'الأناجيل الإزائية' : 'Gospel Synoptics'}</span>
          </button>

          <button
            onClick={() => setActiveTab('bioethics')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
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
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{isArabic ? 'المحاكاة الوزارية' : 'Scenario Quiz'}</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Holy Sacraments Explorer */}
      {activeTab === 'sacraments' && (
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
                  className={`w-full text-start p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
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

            {/* Scripture Basis with Audio */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  {isArabic ? 'السند الكتابي والتأسيس الإلهي' : 'Scriptural Foundation'}
                </span>
                <button
                  onClick={() =>
                    speakScripture(
                      isArabic ? selectedSacrament.scriptureBasisAr : selectedSacrament.scriptureBasisEn
                    )
                  }
                  className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all border border-amber-500/30"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>
                    {currentlyPlayingVerse ? (isArabic ? 'جارٍ الاستماع...' : 'Playing...') : isArabic ? 'استماع للآية' : 'Listen'}
                  </span>
                </button>
              </div>
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
      )}

      {/* Tab 2: Monastic Heritage & Milestones */}
      {activeTab === 'monasticism' && (
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
                  className={`w-full text-start p-3.5 rounded-xl border transition-all duration-200 ${
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
      )}

      {/* Tab 3: Gospel Synoptics Comparative Matrix */}
      {activeTab === 'synoptics' && (
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
                  className={`w-full text-start p-3.5 rounded-xl border transition-all duration-200 ${
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

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {isArabic ? 'أبرز المقاطع والخصائص الأسلوبية' : 'Notable Passages & Characteristics'}
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {isArabic ? selectedGospel.notablePassageAr : selectedGospel.notablePassageEn}
              </p>
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
                  className={`w-full text-start p-3.5 rounded-xl border transition-all duration-200 ${
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
                    className={`w-full text-start p-4 rounded-xl border text-sm leading-relaxed transition-all flex items-start justify-between gap-3 ${btnStyles}`}
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
                      className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-md shadow-amber-600/30"
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
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-600"
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
