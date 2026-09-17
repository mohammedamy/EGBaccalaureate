import React, { useState } from 'react';
import {
  ARABIC_IRAB_SENTENCES,
  ARABIC_DERIVATIVE_RULES,
  ARABIC_RHETORICAL_FIGURES,
  ARABIC_ORTHOGRAPHY_TRAPS,
  ARABIC_MINISTERIAL_EXAM_TRAPS,
  type IrabToken,
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
} from 'lucide-react';

interface ArabicGrammarStudioProps {
  onClose?: () => void;
  lang?: string;
}

export const ArabicGrammarStudio: React.FC<ArabicGrammarStudioProps> = ({ onClose }) => {
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
    <div className="w-full max-w-6xl mx-auto bg-slate-950/95 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col font-sans" dir="rtl">
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

        {onClose && (
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-medium transition-colors"
          >
            إغلاق المعمل ✕
          </button>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-900/80 border-b border-slate-800 p-2 flex flex-wrap gap-1 sm:gap-2">
        <button
          onClick={() => setActiveTab('irab')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
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
              <div className="text-center mb-4">
                <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                  {currentSentence.titleAr}
                </span>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-4 text-lg sm:text-2xl font-bold font-serif leading-relaxed">
                {currentSentence.tokens.map((token, idx) => {
                  const isSelected = selectedTokenIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTokenIndex(idx)}
                      className={`px-3 sm:px-4 py-2 rounded-2xl transition-all duration-200 border text-center ${
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

            {/* Token Breakdown Inspection Card */}
            {currentToken && (
              <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-5 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-l border-slate-800 pb-4 md:pb-0 md:pl-4 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">الكلمة المحددة</div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif mt-1">
                      {currentToken.word}
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
                    className={`p-3 rounded-2xl border text-center transition-all ${
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
                    className={`p-3 rounded-2xl border text-center transition-all ${
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
                    className={`p-3 rounded-2xl border text-center transition-all ${
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
                      className={`w-full p-3.5 rounded-2xl border text-right text-xs sm:text-sm transition-all flex items-center justify-between ${optionClass}`}
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
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold rounded-2xl text-xs sm:text-sm shadow-lg transition-all"
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
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl text-xs font-medium flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>السابق</span>
                    </button>
                    <button
                      onClick={handleNextQuiz}
                      disabled={currentQuizIndex === ARABIC_MINISTERIAL_EXAM_TRAPS.length - 1}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5"
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
