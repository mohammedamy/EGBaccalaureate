import React, { useState } from 'react';
import type { Lesson, Branch } from '../types/curriculum';
import type { Language, UserRole } from '../i18n/translations';
import { translations } from '../i18n/translations';
import { MathRenderer } from './MathRenderer';
import { toHindiDigits } from '../utils/arabicNumerals';
import { Interactive3DGeometry } from './Interactive3DGeometry';
import { InteractivePascalTriangle } from './InteractivePascalTriangle';
import { InteractiveCalculusTangent } from './InteractiveCalculusTangent';
import { InteractiveStaticsFriction } from './InteractiveStaticsFriction';
import { TextbookDiagram } from './TextbookDiagram';
import { Printer, ChevronDown, ChevronUp, Lightbulb, Clock, CheckCircle, Target, BookOpen, Layers, Award } from 'lucide-react';

interface Props {
  lang: Language;
  role: UserRole;
  lesson: Lesson;
  branch: Branch;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export const LessonView: React.FC<Props> = ({
  lang,
  role,
  lesson,
  branch,
  activeSubTab,
  onSubTabChange,
}) => {
  const t = translations[lang];

  // Worksheet hint toggles & solution toggles
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});

  const toggleHint = (id: string) => {
    setOpenHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setOpenSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderInteractiveWidget = () => {
    switch (lesson.interactiveWidget.type) {
      case '3d_vectors':
        return <Interactive3DGeometry lang={lang} />;
      case 'pascal_binomial':
        return <InteractivePascalTriangle lang={lang} />;
      case 'calculus_tangent':
        return <InteractiveCalculusTangent lang={lang} />;
      case 'statics_friction':
        return <InteractiveStaticsFriction lang={lang} />;
      default:
        return <Interactive3DGeometry lang={lang} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 print-lesson-header print-avoid-break">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <img src="/clipsat-logo.png" alt="ClipSAT Logo" className="h-8 sm:h-9 w-auto object-contain" />
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 shadow-sm">
                {lang === 'ar' ? branch.titleAr : branch.titleEn}
              </span>
              <span className="text-xs font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1">
                <Award className="w-4 h-4" />
                {lesson.moeRef.officialCode}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-100">
              <MathRenderer math={lang === 'ar' ? lesson.titleAr : lesson.titleEn} lang={lang} />
            </h2>
          </div>

          {/* Textbook MoE reference card */}
          <div className="bg-slate-100 dark:bg-slate-950 p-3 sm:p-3.5 rounded-xl border border-slate-300 dark:border-slate-800 text-xs space-y-1 shadow-sm w-full sm:w-auto">
            <span className="font-bold text-slate-600 dark:text-slate-400 block">{t.officialMoeRef}</span>
            <p className="font-extrabold text-slate-200 text-sm">{lang === 'ar' ? lesson.moeRef.bookTitleAr : lesson.moeRef.bookTitleEn}</p>
            <p className="text-xs text-indigo-700 dark:text-indigo-400 font-mono font-bold">
              {lang === 'ar' ? toHindiDigits(lesson.moeRef.pageRange) : lesson.moeRef.pageRange}
            </p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
          <MathRenderer math={lang === 'ar' ? lesson.summaryAr : lesson.summaryEn} lang={lang} />
        </div>

        {/* Sub-tab navigation with smooth horizontal touch scroll on mobile */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80 no-print overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => onSubTabChange('theory')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-transparent'
            }`}
          >
            📖 {t.theoryTab}
          </button>
          <button
            onClick={() => onSubTabChange('lessonPlan')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'lessonPlan'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-transparent'
            }`}
          >
            📋 {t.lessonPlanTab} {role === 'teacher' && <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.5 rounded font-extrabold ml-1">Teacher</span>}
          </button>
          <button
            onClick={() => onSubTabChange('worksheet')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-transparent'
            }`}
          >
            ✏️ {t.worksheetTab}
          </button>
          <button
            onClick={() => onSubTabChange('interactive')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'interactive'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-transparent'
            }`}
          >
            🎮 {t.interactiveTab}
          </button>
        </div>
      </div>

      {/* 📖 TAB 1: THEORY & FORMULAS */}
      {activeSubTab === 'theory' && (
        <div className="space-y-6">
          {/* Theory Prose with LaTeX rendering */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-indigo-400 flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5" />
              <span>{lang === 'ar' ? 'الشرح والنظريات الأساسية' : 'Theoretical Foundations & Proofs'}</span>
            </h3>

            <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-slate-200">
              <MathRenderer math={lang === 'ar' ? lesson.theoryContentAr : lesson.theoryContentEn} lang={lang} />
            </div>
          </div>

          {/* Essential Formulas Sheet */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Layers className="w-5 h-5" />
              <span>{lang === 'ar' ? 'دستور القوانين والملاحظات الهامة' : 'Essential Formula Sheet'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.formulas.map((f, fIdx) => (
                <div key={fIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 block">
                    {lang === 'ar' ? f.labelAr : f.labelEn}
                  </span>
                  <MathRenderer math={f.latex} block lang={lang} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 📋 TAB 2: TEACHER LESSON PLAN */}
      {activeSubTab === 'lessonPlan' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 print-lesson-plan-sheet">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                <Target className="w-6 h-6" />
                <span>{lang === 'ar' ? lesson.lessonPlan.titleAr : lesson.lessonPlan.titleEn}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {t.moeCode}: {lesson.lessonPlan.moeCode} | {t.estimatedTime}: {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.durationMinutes) : lesson.lessonPlan.durationMinutes} mins
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadPdf}</span>
            </button>
          </div>

          {/* Bloom's Taxonomy Objectives */}
          <div className="space-y-3 print-avoid-break">
            <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">{t.bloomsTaxonomy}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {(lang === 'ar' ? lesson.lessonPlan.bloomsObjectivesAr : lesson.lessonPlan.bloomsObjectivesEn).map((obj, oIdx) => (
                <li key={oIdx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-start gap-2 text-slate-200 print-avoid-break">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'ar' ? toHindiDigits(obj) : obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Pacing Flow */}
          <div className="space-y-3 print-avoid-break">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">{lang === 'ar' ? 'خطوات السير في الدرس والتوقيت الزمني' : 'Instructional Pacing & Flow'}</h4>
            <div className="space-y-3">
              {lesson.lessonPlan.teachingPacing.map((p, pIdx) => (
                <div key={pIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 text-xs pacing-item print-avoid-break">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-400">{lang === 'ar' ? p.phaseAr : p.phaseEn}</span>
                    <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lang === 'ar' ? toHindiDigits(p.duration) : p.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 pt-1 leading-relaxed">{lang === 'ar' ? toHindiDigits(p.activitiesAr) : p.activitiesEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Misconceptions & Differentiation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-avoid-break">
            <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/40 space-y-3 text-xs misconception-card print-avoid-break">
              <h4 className="font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>{t.misconceptions}</span>
              </h4>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                {(lang === 'ar' ? lesson.lessonPlan.commonMisconceptionsAr : lesson.lessonPlan.commonMisconceptionsEn).map((m, mIdx) => (
                  <li key={mIdx}>{lang === 'ar' ? toHindiDigits(m) : m}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-900/40 space-y-3 text-xs print-avoid-break">
              <h4 className="font-bold text-indigo-300 uppercase tracking-wider">{t.differentiation}</h4>
              <div className="space-y-2 text-slate-300">
                <p>
                  <strong className="text-amber-400">{lang === 'ar' ? 'للطلاب المحتاجين لدعم:' : 'Struggling Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.struggling) : lesson.lessonPlan.differentiationEn.struggling}
                </p>
                <p>
                  <strong className="text-emerald-400">{lang === 'ar' ? 'للطلاب المتميزين:' : 'Advanced Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.advanced) : lesson.lessonPlan.differentiationEn.advanced}
                </p>
              </div>
            </div>
          </div>

          {/* Exit Ticket */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-amber-500/30 space-y-3 text-xs exit-ticket-card print-avoid-break">
            <h4 className="font-bold text-amber-400 uppercase tracking-wider">{t.exitTicket}</h4>
            <div className="font-semibold text-slate-200">
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.questionAr : lesson.lessonPlan.exitTicketQuestion.questionEn} lang={lang} />
            </div>
            <div className="bg-slate-900 p-3 rounded-lg text-slate-300">
              <strong className="text-emerald-400 block mb-1">{t.stepByStepSolution}:</strong>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.solutionAr : lesson.lessonPlan.exitTicketQuestion.solutionEn} lang={lang} />
            </div>
          </div>
        </div>
      )}

      {/* ✏️ TAB 3: SOLVED WORKSHEETS */}
      {activeSubTab === 'worksheet' && (
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 print-worksheet-sheet">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100"><MathRenderer math={lang === 'ar' ? lesson.worksheet.titleAr : lesson.worksheet.titleEn} lang={lang} /></h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{lang === 'ar' ? toHindiDigits(lesson.worksheet.descriptionAr) : lesson.worksheet.descriptionEn}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 shadow-lg no-print self-start"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printWorksheet}</span>
            </button>
          </div>

          <div className="space-y-6">
            {lesson.worksheet.problems.map((prob, idx) => (
              <div key={prob.id} className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-4 shadow-sm printable-problem print-avoid-break">
                <div className="flex items-center justify-between">
                  <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800 shadow-sm">
                    {lang === 'ar' ? `مسألة رقم (${toHindiDigits(idx + 1)})` : `Problem (${idx + 1})`}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 shadow-sm">
                    {prob.difficulty === 'exam_standard' ? (lang === 'ar' ? 'نموذج وزاري معتمد' : 'EXAM STANDARD') : prob.difficulty.toUpperCase()}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-100">
                  <MathRenderer math={lang === 'ar' ? prob.questionAr : prob.questionEn} lang={lang} />
                </div>

                {/* Official Textbook Drawing / Figure */}
                {prob.diagramType && (
                  <TextbookDiagram type={prob.diagramType} lang={lang} />
                )}

                {/* Official MCQ Options Grid */}
                {((lang === 'ar' ? prob.optionsAr : prob.optionsEn) || []).length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 print-options-grid print-avoid-break">
                    {(lang === 'ar' ? prob.optionsAr! : prob.optionsEn!).map((opt, optIdx) => {
                      const isCorrect = openSolutions[prob.id] && optIdx === prob.correctIndex;
                      return (
                        <div
                          key={optIdx}
                          className={`border p-3 rounded-xl flex items-center justify-between gap-2 text-xs transition-all ${
                            isCorrect
                              ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40 font-bold'
                              : 'border-slate-800 bg-slate-900/60 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-black px-2 py-0.5 rounded-md text-[11px] ${
                                isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                              }`}
                            >
                              {lang === 'ar' ? `(${['أ', 'ب', 'ج', 'د'][optIdx]})` : `(${String.fromCharCode(65 + optIdx)})`}
                            </span>
                            <span className="font-semibold text-slate-100">
                              <MathRenderer math={opt} lang={lang} />
                            </span>
                          </div>
                          {isCorrect && (
                            <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 shrink-0">
                              {lang === 'ar' ? '✓ إجابة صحيحة' : '✓ Correct'}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Buttons for Hint & Solution */}
                <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
                  <button
                    onClick={() => toggleHint(prob.id)}
                    className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center justify-center gap-1.5 bg-amber-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-amber-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{openHints[prob.id] ? t.hideHint : t.showHint}</span>
                  </button>

                  <button
                    onClick={() => toggleSolution(prob.id)}
                    className="text-xs font-bold text-indigo-800 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-indigo-300 flex items-center justify-center gap-1.5 bg-indigo-50 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-indigo-300 dark:border-slate-800 transition-all shadow-sm flex-1 sm:flex-initial"
                  >
                    {openSolutions[prob.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    <span>{openSolutions[prob.id] ? t.hideSolution : t.showSolution}</span>
                  </button>
                </div>

                {/* Hint collapse */}
                {openHints[prob.id] && (
                  <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 p-3 rounded-lg text-xs text-amber-950 dark:text-amber-200 print-avoid-break">
                    💡 <strong>{t.showHint}:</strong> {lang === 'ar' ? toHindiDigits(prob.hintAr) : prob.hintEn}
                  </div>
                )}

                {/* Solution breakdown collapse */}
                {openSolutions[prob.id] && (
                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-3 text-xs step-by-step-box print-avoid-break">
                    <span className="font-bold text-emerald-400 block uppercase tracking-wider">{t.stepByStepSolution}</span>
                    <ol className="space-y-2 list-decimal list-inside text-slate-200">
                      {(lang === 'ar' ? prob.stepByStepSolutionAr : prob.stepByStepSolutionEn).map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          <MathRenderer math={step} lang={lang} />
                        </li>
                      ))}
                    </ol>

                    {prob.teacherTipEn && role === 'teacher' && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-amber-900 dark:text-amber-300 text-[11px]">
                        🎓 <strong>{t.teacherTips}:</strong> {lang === 'ar' ? toHindiDigits(prob.teacherTipAr) : prob.teacherTipEn}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🎮 TAB 4: 3D & INTERACTIVE LAB */}
      {activeSubTab === 'interactive' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              {lang === 'ar' ? lesson.interactiveWidget.titleAr : lesson.interactiveWidget.titleEn}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'ar' ? lesson.interactiveWidget.descriptionAr : lesson.interactiveWidget.descriptionEn}
            </p>

            {renderInteractiveWidget()}
          </div>
        </div>
      )}
    </div>
  );
};
