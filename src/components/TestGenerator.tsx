import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import type { CurriculumType, DifficultyLevel, DiagramType } from '../types/curriculum';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { thanaweyaCurriculum } from '../data/thanaweyaData';
import { egBacCurriculum } from '../data/egBacData';
import { TextbookDiagram } from './TextbookDiagram';
import { Printer, CheckCircle2, AlertCircle, RefreshCw, Clock, Award, FileSpreadsheet } from 'lucide-react';
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  currentCurriculum: CurriculumType;
}

interface GeneratedQuestion {
  id: string;
  questionEn: string;
  questionAr: string;
  diagramType?: DiagramType;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string[];
  explanationAr: string[];
  chapterTitleEn: string;
  chapterTitleAr: string;
}

export const TestGenerator: React.FC<Props> = ({ lang, currentCurriculum }) => {
  const t = translations[lang];

  // Filters
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [examMode, setExamMode] = useState<'online' | 'printable'>('online');

  // Exam state
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Generate question set based on active curriculum database
  const generateQuestions = (): GeneratedQuestion[] => {
    const activeData = currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum;
    const questions: GeneratedQuestion[] = [];

    activeData.branches.forEach((branch) => {
      if (selectedBranch !== 'all' && branch.id !== selectedBranch) return;

      branch.chapters.forEach((ch) => {
        ch.lessons.forEach((l) => {
          l.worksheet.problems.forEach((prob, pIdx) => {
            if (difficulty !== 'all' && prob.difficulty !== difficulty) return;

            // Require genuine verified MCQ options from curriculum problem data
            if (
              !prob.optionsEn ||
              prob.optionsEn.length !== 4 ||
              !prob.optionsAr ||
              prob.optionsAr.length !== 4 ||
              prob.correctIndex === undefined
            ) {
              console.warn(`[TestGenerator] Skipping problem ${prob.id} because it lacks 4 valid MCQ options.`);
              return;
            }

            questions.push({
              id: `${branch.id}_${ch.id}_${l.id}_${pIdx}`,
              questionEn: prob.questionEn,
              questionAr: prob.questionAr,
              optionsEn: prob.optionsEn,
              optionsAr: prob.optionsAr,
              correctIndex: prob.correctIndex,
              explanationEn: prob.stepByStepSolutionEn,
              explanationAr: prob.stepByStepSolutionAr,
              chapterTitleEn: ch.titleEn,
              chapterTitleAr: ch.titleAr,
              diagramType: prob.diagramType,
            });
          });
        });
      });
    });

    return questions.slice(0, questionCount);
  };

  const [activeQuestions, setActiveQuestions] = useState<GeneratedQuestion[]>(generateQuestions());

  const handleStartExam = () => {
    const qList = generateQuestions();
    setActiveQuestions(qList);
    setUserAnswers({});
    setIsSubmitted(false);
    setIsExamStarted(true);
  };

  const handleSubmitExam = () => {
    let currentScore = 0;
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);

    if (currentScore === activeQuestions.length && activeQuestions.length > 0) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Header & Filter Controls (no-print) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-indigo-400" />
              <span>{t.testGenTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">{t.testGenSubtitle}</p>
          </div>

          <div className="flex items-center justify-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto">
            <button
              onClick={() => setExamMode('online')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                examMode === 'online' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.modeOnline}
            </button>
            <button
              onClick={() => setExamMode('printable')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                examMode === 'printable' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.modePrintable}</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectBranch}</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'جميع الفروع المتاحة' : 'All Branches'}</option>
              {(currentCurriculum === 'thanaweya' ? thanaweyaCurriculum : egBacCurriculum).branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {lang === 'ar' ? b.titleAr : b.titleEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.selectDifficulty}</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            >
              <option value="all">{lang === 'ar' ? 'جميع المستويات' : 'All Levels'}</option>
              <option value="medium">{lang === 'ar' ? 'متوسط' : 'Medium'}</option>
              <option value="exam_standard">{lang === 'ar' ? 'مستوى امتحان الوزارة' : 'MoE Standard Exam'}</option>
              <option value="hots">{lang === 'ar' ? 'مهارات تفكير عليا (HOTS)' : 'High Order Thinking (HOTS)'}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.numQuestions}</label>
            <input
              type="number"
              min="1"
              max="20"
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleStartExam}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.generateTest}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Exam Paper view */}
      {examMode === 'printable' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl space-y-6 print-exam-sheet">
          <div className="flex justify-end no-print">
            <button
              onClick={handlePrint}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center gap-2 shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          {/* Official Egyptian MoE & ClipSAT Header */}
          <div className="border-4 border-double border-slate-700 p-4 sm:p-6 rounded-xl space-y-4 bg-slate-950/40 text-center print-exam-header print-avoid-break">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold border-b border-slate-700 pb-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-left">
                <img src={clipsatLogo} alt="ClipSAT Logo" className="h-10 sm:h-12 w-auto object-contain" />
                <div>
                  <p className="text-base font-black text-indigo-400">ClipSAT for Egypt</p>
                  <p className="text-xs text-slate-300">Ministry of Education Secondary Framework</p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-base sm:text-lg font-black text-amber-400">جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني</h2>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">{t.officialExamHeader}</p>
              </div>

              <div className="text-right text-xs space-y-1">
                <p className="font-bold text-emerald-400">
                  {lang === 'ar' ? `الدرجة الكلية: ${toHindiDigits(60)} درجة` : `Total Marks: 60`}
                </p>
                <p className="font-bold text-cyan-400">
                  {lang === 'ar' ? `الزمن: ${toHindiDigits(2)} ساعة` : `Time Allowed: 2 Hours`}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm pt-2 font-semibold">
              <div className="border-2 border-slate-700 p-2.5 rounded-lg bg-slate-900 text-slate-200 w-full sm:w-auto text-center sm:text-left">
                {t.studentSeatNo} [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
              </div>
              <div className="text-slate-200 w-full sm:w-auto text-center sm:text-right">
                {lang === 'ar' ? 'اسم الطالب: .................................................' : 'Student Name: .................................................'}
              </div>
            </div>
          </div>

          {/* Questions list */}
          <div className="space-y-8 pt-4">
            {activeQuestions.map((q, idx) => (
              <div key={q.id} className="border border-slate-300 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-950 space-y-4 shadow-sm printable-question print-avoid-break">
                <div className="flex items-start justify-between">
                  <span className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800">
                    {lang === 'ar' ? `السؤال رقم (${toHindiDigits(idx + 1)})` : `Question (${idx + 1})`}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    {lang === 'ar' ? q.chapterTitleAr : q.chapterTitleEn}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-100">
                  <MathRenderer math={lang === 'ar' ? q.questionAr : q.questionEn} lang={lang} />
                </div>

                {/* Official Textbook Drawing / Figure */}
                {q.diagramType && (
                  <TextbookDiagram type={q.diagramType} lang={lang} />
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 print-options-grid print-avoid-break">
                  {(lang === 'ar' ? q.optionsAr : q.optionsEn).map((opt, optIdx) => (
                    <div key={optIdx} className="border border-slate-800 p-3 rounded-lg flex items-center gap-2 bg-slate-900/60 text-xs text-slate-200">
                      <span className="font-bold text-indigo-400">
                        {lang === 'ar' ? `(${['أ', 'ب', 'ج', 'د'][optIdx]})` : `(${String.fromCharCode(65 + optIdx)})`}
                      </span>
                      <span className="font-semibold text-slate-100">
                        <MathRenderer math={opt} lang={lang} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Online Quiz Mode */}
      {examMode === 'online' && (
        <div className="bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6">
          {!isExamStarted ? (
            <div className="text-center py-8 sm:py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.startQuiz}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto font-medium">
                {lang === 'ar'
                  ? 'اضغط على زر الإنشاء لتبدأ اختباراً تفاعلياً بزمن محدد يغطي المهارات الأساسية بأسئلة الوزارة'
                  : 'Click Start to attempt an interactive timed quiz based on official Ministry exam questions.'}
              </p>
              <button
                onClick={handleStartExam}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl text-xs shadow-lg shadow-indigo-600/30 transition-all"
              >
                {t.startQuiz}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Score card on submission */}
              {isSubmitted && (
                <div className="bg-gradient-to-r from-emerald-100 to-slate-100 dark:from-emerald-950 dark:to-slate-900 border border-emerald-400 dark:border-emerald-500/40 rounded-xl p-5 text-center space-y-2">
                  <Award className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">{t.congratulations}</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t.score}: <span className="text-amber-700 dark:text-amber-400 font-extrabold text-base">{lang === 'ar' ? toHindiDigits(score) : score}</span> / {lang === 'ar' ? toHindiDigits(activeQuestions.length) : activeQuestions.length}
                  </p>
                </div>
              )}

              {/* Questions */}
              <div className="space-y-6">
                {activeQuestions.map((q, idx) => {
                  const selectedOpt = userAnswers[idx];
                  const isCorrect = isSubmitted && selectedOpt === q.correctIndex;
                  const isWrong = isSubmitted && selectedOpt !== undefined && selectedOpt !== q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`border rounded-xl p-4 sm:p-5 space-y-4 transition-all shadow-sm printable-question print-avoid-break ${
                        isCorrect
                          ? 'border-emerald-400 bg-emerald-50 dark:border-emerald-500/50 dark:bg-emerald-950/20'
                          : isWrong
                          ? 'border-amber-400 bg-amber-50 dark:border-amber-500/50 dark:bg-slate-900'
                          : 'border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="bg-indigo-100 dark:bg-slate-800 text-indigo-900 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-lg border border-indigo-200 dark:border-transparent">
                          {lang === 'ar' ? `سُؤال (${toHindiDigits(idx + 1)})` : `Question (${idx + 1})`}
                        </span>
                        {isSubmitted && (
                          <div className="flex items-center gap-1.5 text-xs font-bold">
                            {isCorrect ? (
                              <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Correct (+1)
                              </span>
                            ) : (
                              <span className="text-amber-800 dark:text-amber-300 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> Incorrect (0)
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        <MathRenderer math={lang === 'ar' ? q.questionAr : q.questionEn} lang={lang} />
                      </div>

                      {/* Official Textbook Drawing / Figure */}
                      {q.diagramType && (
                        <TextbookDiagram type={q.diagramType} lang={lang} />
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {(lang === 'ar' ? q.optionsAr : q.optionsEn).map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          let btnStyle = 'border-slate-800 bg-slate-900/80 hover:border-indigo-500 text-slate-200';
                          if (isSelected) btnStyle = 'border-indigo-600 bg-indigo-950 text-indigo-200 font-bold ring-2 ring-indigo-500/40';
                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) btnStyle = 'border-emerald-500 bg-emerald-950 text-emerald-200 font-bold';
                            else if (isSelected && optIdx !== q.correctIndex) btnStyle = 'border-amber-500 bg-amber-950/80 text-amber-200 font-bold';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isSubmitted}
                              onClick={() => setUserAnswers((prev) => ({ ...prev, [idx]: optIdx }))}
                              className={`border p-3 sm:p-3.5 rounded-xl text-left rtl:text-right text-xs flex items-center gap-3 transition-all shadow-sm ${btnStyle}`}
                            >
                              <span className="w-6 h-6 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center font-bold text-[11px] shrink-0 text-slate-200">
                                {lang === 'ar' ? ['أ', 'ب', 'ج', 'د'][optIdx] : String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="font-semibold text-slate-100">
                                <MathRenderer math={opt} lang={lang} />
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Step-by-step solution breakdown on submission */}
                      {isSubmitted && (
                        <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs bg-slate-900/60 p-4 rounded-xl">
                          <span className="font-bold text-amber-400 block uppercase tracking-wider">
                            {t.stepByStepSolution}
                          </span>
                          {(lang === 'ar' ? q.explanationAr : q.explanationEn).map((step, sIdx) => (
                            <div key={sIdx} className="text-slate-300">
                              <MathRenderer math={step} lang={lang} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              {!isSubmitted && (
                <div className="flex justify-stretch sm:justify-end pt-4">
                  <button
                    onClick={handleSubmitExam}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl text-xs shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    {t.submitAnswer}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
