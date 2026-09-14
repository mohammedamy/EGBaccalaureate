import React, { useState } from 'react';
import type { ThemeMode } from '../../types/curriculum';
import { HelpCircle, CheckCircle2, Award, ChevronRight, Unlock, Sparkles, BookOpen } from 'lucide-react';

export interface POEPrompt {
  id: string;
  titleEn: string;
  titleAr: string;
  scenarioEn: string;
  scenarioAr: string;
  questionEn: string;
  questionAr: string;
  optionsEn: string[];
  optionsAr: string[];
  correctOptionIndex: number;
  scientificExplanationEn: string;
  scientificExplanationAr: string;
}

interface POEControllerProps {
  prompt: POEPrompt;
  lang: 'en' | 'ar';
  theme?: ThemeMode;
  isUnlocked: boolean;
  onUnlockLab: () => void;
  onComplete?: (wasCorrect: boolean) => void;
}

export const POEController: React.FC<POEControllerProps> = ({
  prompt,
  lang,
  theme = 'dark',
  isUnlocked,
  onUnlockLab,
  onComplete
}) => {
  const [phase, setPhase] = useState<'predict' | 'observe' | 'explain' | 'completed'>(isUnlocked ? 'observe' : 'predict');
  const [selectedPrediction, setSelectedPrediction] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number>(3); // 1-5 scale
  const [studentExplanation, setStudentExplanation] = useState<string>('');
  const isAr = lang === 'ar';
  const isLight = theme === 'light';

  const handleCommitPrediction = () => {
    if (selectedPrediction === null) return;
    onUnlockLab();
    setPhase('observe');
  };

  const handleFinishObservation = () => {
    setPhase('explain');
  };

  const handleSubmitExplanation = () => {
    const wasCorrect = selectedPrediction === prompt.correctOptionIndex;
    setPhase('completed');
    if (onComplete) {
      onComplete(wasCorrect);
    }
  };

  return (
    <div className={`rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden ${
      phase === 'completed'
        ? isLight
          ? 'bg-emerald-50/90 border-emerald-300 text-slate-900 shadow-sm'
          : 'bg-emerald-950/20 border-emerald-500/40 text-slate-100'
        : isLight
        ? 'bg-white border-slate-200 text-slate-900 shadow-sm'
        : 'bg-slate-900/90 border-cyan-500/30 text-slate-100 backdrop-blur-md'
    }`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header with Phase Progress */}
      <div className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
        isLight
          ? 'bg-slate-50/90 border-slate-200'
          : 'bg-slate-950/60 border-slate-800/80'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                isLight
                  ? 'bg-cyan-100 text-cyan-800 border-cyan-300'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
              }`}>
                POE Framework
              </span>
              <h4 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                {isAr ? prompt.titleAr : prompt.titleEn}
              </h4>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {isAr ? 'توقع • لاحظ • فسر (المنهجية العلمية للاستكشاف)' : 'Predict • Observe • Explain Scientific Protocol'}
            </p>
          </div>
        </div>

        {/* Stepper pills */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <span className={`px-2.5 py-1 rounded-md transition-all ${
            phase === 'predict'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/50'
              : isLight
              ? 'bg-slate-100 text-slate-600'
              : 'bg-slate-800 text-slate-400'
          }`}>
            1. {isAr ? 'توقع' : 'Predict'}
          </span>
          <ChevronRight className={`w-3.5 h-3.5 ${isLight ? 'text-slate-400' : 'text-slate-600'} ${isAr ? 'rotate-180' : ''}`} />
          <span className={`px-2.5 py-1 rounded-md transition-all ${
            phase === 'observe'
              ? 'bg-indigo-500 text-white font-bold shadow-sm shadow-indigo-500/50'
              : isLight
              ? 'bg-slate-100 text-slate-600'
              : 'bg-slate-800 text-slate-400'
          }`}>
            2. {isAr ? 'لاحظ' : 'Observe'}
          </span>
          <ChevronRight className={`w-3.5 h-3.5 ${isLight ? 'text-slate-400' : 'text-slate-600'} ${isAr ? 'rotate-180' : ''}`} />
          <span className={`px-2.5 py-1 rounded-md transition-all ${
            phase === 'explain'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
              : phase === 'completed'
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : isLight
              ? 'bg-slate-100 text-slate-600'
              : 'bg-slate-800 text-slate-400'
          }`}>
            3. {isAr ? 'فسر' : 'Explain'}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Phase 1: PREDICT */}
        {phase === 'predict' && (
          <div className="space-y-4 animate-fadeIn">
            <div className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-cyan-50/90 border-cyan-200 text-slate-900 shadow-xs'
                : 'bg-cyan-950/30 border-cyan-800/40'
            }`}>
              <p className={`text-xs font-semibold mb-1 ${isLight ? 'text-cyan-800 font-bold' : 'text-cyan-300'}`}>
                {isAr ? 'السيناريو التجريبي:' : 'Experimental Scenario:'}
              </p>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-800 font-medium' : 'text-slate-200'}`}>
                {isAr ? prompt.scenarioAr : prompt.scenarioEn}
              </p>
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                <HelpCircle className={`w-4 h-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                {isAr ? prompt.questionAr : prompt.questionEn}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isAr ? prompt.optionsAr : prompt.optionsEn).map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrediction(idx)}
                    className={`p-3 text-start rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      selectedPrediction === idx
                        ? isLight
                          ? 'bg-cyan-50 border-2 border-cyan-500 text-cyan-950 shadow-sm scale-[1.01] font-bold'
                          : 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-md shadow-cyan-900/30 scale-[1.01]'
                        : isLight
                        ? 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-xs'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span className={`inline-block w-5 h-5 rounded-full text-center text-xs font-bold mr-2 rtl:ml-2 rtl:mr-0 ${
                      selectedPrediction === idx
                        ? 'bg-cyan-500 text-white'
                        : isLight
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-700 text-slate-200'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Confidence Slider */}
            <div className={`pt-2 border-t flex flex-wrap items-center justify-between gap-3 ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isAr ? 'درجة الثقة بالفرضية:' : 'Hypothesis Confidence:'}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setConfidence(star)}
                      className={`text-base transition-transform hover:scale-125 ${
                        star <= confidence
                          ? 'text-amber-400'
                          : isLight ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={selectedPrediction === null}
                onClick={handleCommitPrediction}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                {isAr ? 'قفل التوقع وبدء التجربة' : 'Lock Prediction & Unlock Lab'}
              </button>
            </div>
          </div>
        )}

        {/* Phase 2: OBSERVE */}
        {phase === 'observe' && (
          <div className="space-y-4 animate-fadeIn">
            <div className={`p-4 rounded-xl flex items-start gap-3 border ${
              isLight
                ? 'bg-indigo-50/80 border-indigo-200 text-slate-900'
                : 'bg-indigo-950/30 border-indigo-500/30'
            }`}>
              <Sparkles className={`w-5 h-5 shrink-0 mt-0.5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <div>
                <h5 className={`text-sm font-bold ${isLight ? 'text-indigo-950' : 'text-indigo-200'}`}>
                  {isAr ? 'المختبر مفتوح الآن للاستكشاف الحر' : 'Lab is now unlocked for active investigation'}
                </h5>
                <p className={`text-xs mt-1 leading-relaxed ${isLight ? 'text-slate-700' : 'text-indigo-300/80'}`}>
                  {isAr
                    ? 'قم بتحريك أدوات المحاكاة، وتدوين القياسات في دفتر المعمل، والتحقق مما إذا كانت نتائجك تدعم توقعك الأولي أو تدحضه.'
                    : 'Manipulate sliders and instruments, record data points in the Lab Notebook, and verify whether the physical phenomenon supports your hypothesis.'}
                </p>
                <div className={`mt-2 text-xs px-3 py-1.5 rounded-lg border inline-flex items-center gap-2 ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-800 shadow-xs'
                    : 'bg-slate-900/60 border-slate-700/60 text-slate-300'
                }`}>
                  <span className={isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}>{isAr ? 'توقعك المسجل:' : 'Your Prediction:'}</span>
                  <span className={`font-semibold ${isLight ? 'text-cyan-700' : 'text-cyan-300'}`}>
                    {(isAr ? prompt.optionsAr : prompt.optionsEn)[selectedPrediction ?? 0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleFinishObservation}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer transition-all"
              >
                {isAr ? 'الانتقال إلى التفسير العلمي' : 'Proceed to Explain Phase'}
                <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        )}

        {/* Phase 3: EXPLAIN */}
        {phase === 'explain' && (
          <div className="space-y-4 animate-fadeIn">
            <div className={`p-3.5 rounded-xl border ${
              isLight
                ? 'bg-amber-50/90 border-amber-200 text-slate-900'
                : 'bg-amber-950/20 border-amber-600/30'
            }`}>
              <h5 className={`text-xs font-bold uppercase tracking-wide mb-1 ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                {isAr ? 'صياغة الاستنتاج العلمي' : 'Scientific Synthesis & Reflection'}
              </h5>
              <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {isAr
                  ? 'بناءً على الملاحظات والبيانات التجريبية التي رصدتها، هل طابقت النتيجة توقعك؟ ولماذا؟'
                  : 'Based on your observed physical parameters and data, did the results match your prediction? Formulate your scientific reasoning.'}
              </p>
            </div>

            <div>
              <textarea
                value={studentExplanation}
                onChange={(e) => setStudentExplanation(e.target.value)}
                placeholder={isAr ? 'اكتب تحليلك واستنتاجك هنا مستنداً إلى القوانين الفيزيائية...' : 'Write your step-by-step reasoning citing the physical laws...'}
                rows={3}
                className={`w-full rounded-xl p-3 text-xs sm:text-sm transition-all resize-none ${
                  isLight
                    ? 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs'
                    : 'bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500'
                }`}
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSubmitExplanation}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 cursor-pointer transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                {isAr ? 'اعتماد التفسير والاطلاع على النموذج العلمي' : 'Submit Explanation & Reveal Expert Model'}
              </button>
            </div>
          </div>
        )}

        {/* Phase 4: COMPLETED (Scientific Breakdown & Rubric) */}
        {phase === 'completed' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${
                selectedPrediction === prompt.correctOptionIndex
                  ? isLight
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : isLight
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {selectedPrediction === prompt.correctOptionIndex
                    ? (isAr ? 'توقعك العلمي كان دقيقاً تماماً!' : 'Hypothesis Successfully Validated!')
                    : (isAr ? 'الملاحظة التجريبية بينت عكس التوقع الأولي' : 'Empirical Data Corrected Initial Intuition')}
                </h5>
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {isAr ? 'هكذا يعمل العلم: التجربة هي الحكم الحاسم.' : 'This is the core of empiricism: observations define the truth.'}
                </p>
              </div>
            </div>

            {/* Scientific Explanation Box */}
            <div className={`p-4 rounded-xl space-y-2 border ${
              isLight
                ? 'bg-emerald-50/90 border-emerald-200 text-slate-900'
                : 'bg-slate-950/80 border-emerald-500/30'
            }`}>
              <span className={`text-xs font-bold uppercase tracking-wider block ${
                isLight ? 'text-emerald-800' : 'text-emerald-400'
              }`}>
                {isAr ? 'التفسير العلمي المنهجي الدقيق:' : 'Authoritative Physical Law Breakdown:'}
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {isAr ? prompt.scientificExplanationAr : prompt.scientificExplanationEn}
              </p>
            </div>

            <div className={`flex items-center justify-between pt-2 border-t text-xs ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800 text-slate-400'
            }`}>
              <span>{isAr ? 'الحالة: مكتمل' : 'Status: POE Protocol Mastered'}</span>
              <button
                onClick={() => setPhase('observe')}
                className={`${isLight ? 'text-cyan-700 hover:text-cyan-800' : 'text-cyan-400 hover:text-cyan-300'} font-semibold underline cursor-pointer`}
              >
                {isAr ? 'متابعة التجربة في المختبر' : 'Continue Experimentation in Lab'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
