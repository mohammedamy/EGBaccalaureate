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
import clipsatLogo from '../assets/clipsat-logo.png';

interface Props {
  lang: Language;
  theme?: 'dark' | 'light';
  role: UserRole;
  lesson: Lesson;
  branch: Branch;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export const LessonView: React.FC<Props> = ({
  lang,
  theme = 'dark',
  role,
  lesson,
  branch,
  activeSubTab,
  onSubTabChange,
}) => {
  const isLight = theme === 'light';
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});

  const toggleHint = (problemId: string) => {
    setOpenHints((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const toggleSolution = (problemId: string) => {
    setOpenSolutions((prev) => ({ ...prev, [problemId]: !prev[problemId] }));
  };

  const t = translations[lang];

  const renderInteractiveWidget = () => {
    switch (lesson.interactiveWidget.type) {
      case '3d_vectors':
        return <Interactive3DGeometry lang={lang} theme={theme} />;
      case 'pascal_binomial':
        return <InteractivePascalTriangle lang={lang} theme={theme} />;
      case 'calculus_tangent':
        return <InteractiveCalculusTangent lang={lang} theme={theme} />;
      case 'statics_friction':
        return <InteractiveStaticsFriction lang={lang} theme={theme} />;
      default:
        return <Interactive3DGeometry lang={lang} theme={theme} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header Banner */}
      <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border print-lesson-header print-avoid-break ${
        isLight
          ? 'bg-white border-slate-200 shadow-md text-slate-900'
          : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
      }`}>
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
          isLight ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <img
                src={clipsatLogo}
                alt="ClipSAT Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 shadow-sm">
                {lang === 'ar' ? branch.titleAr : branch.titleEn}
              </span>
              <span className={`text-xs font-bold flex items-center gap-1 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Award className="w-4 h-4" />
                {lesson.moeRef.officialCode}
              </span>
            </div>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.titleAr : lesson.titleEn} lang={lang} />
            </h2>
          </div>

          {/* Textbook MoE reference card */}
          <div className={`p-3 sm:p-3.5 rounded-xl border text-xs space-y-1 shadow-sm w-full sm:w-auto ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            <span className={`font-bold block ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{t.officialMoeRef}</span>
            <p className={`font-extrabold text-sm ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>{lang === 'ar' ? lesson.moeRef.bookTitleAr : lesson.moeRef.bookTitleEn}</p>
            <p className={`text-xs font-mono font-bold ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
              {lang === 'ar' ? toHindiDigits(lesson.moeRef.pageRange) : lesson.moeRef.pageRange}
            </p>
          </div>
        </div>

        <div className={`text-sm sm:text-base font-medium leading-relaxed ${
          isLight ? 'text-slate-700' : 'text-slate-200'
        }`}>
          <MathRenderer math={lang === 'ar' ? lesson.summaryAr : lesson.summaryEn} lang={lang} />
        </div>

        {/* Sub-tab navigation with smooth horizontal touch scroll on mobile */}
        <div className={`flex items-center gap-2 pt-2 border-t no-print overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 ${
          isLight ? 'border-slate-200' : 'border-slate-800/80'
        }`}>
          <button
            onClick={() => onSubTabChange('theory')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            📖 {t.theoryTab}
          </button>
          <button
            onClick={() => onSubTabChange('lessonPlan')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'lessonPlan'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            📋 {t.lessonPlanTab} {role === 'teacher' && <span className="bg-amber-400 text-slate-950 text-[10px] px-1.5 py-0.5 rounded font-extrabold ml-1">Teacher</span>}
          </button>
          <button
            onClick={() => onSubTabChange('worksheet')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            ✏️ {t.worksheetTab}
          </button>
          <button
            onClick={() => onSubTabChange('interactive')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeSubTab === 'interactive'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : isLight
                  ? 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-transparent'
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
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <h3 className={`text-lg font-bold flex items-center gap-2 border-b pb-3 ${
              isLight ? 'text-indigo-800 border-slate-200' : 'text-indigo-400 border-slate-800'
            }`}>
              <BookOpen className="w-5 h-5" />
              <span>{lang === 'ar' ? 'الشرح والنظريات الأساسية' : 'Theoretical Foundations & Proofs'}</span>
            </h3>

            <div className={`prose max-w-none text-sm sm:text-base leading-relaxed space-y-4 ${
              isLight ? 'prose-slate text-slate-800' : 'prose-invert text-slate-200'
            }`}>
              <MathRenderer math={lang === 'ar' ? lesson.theoryContentAr : lesson.theoryContentEn} lang={lang} />
            </div>
          </div>

          {/* Essential Formulas Sheet */}
          <div className={`rounded-2xl p-4 sm:p-6 space-y-4 border ${
            isLight
              ? 'bg-white border-slate-200 shadow-md text-slate-900'
              : 'bg-slate-900/90 border-slate-800 shadow-2xl text-slate-100'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <h3 className={`text-base font-bold flex items-center gap-2 ${
                isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400 font-bold'
              }`}>
                <Layers className="w-5 h-5" />
                <span>{lang === 'ar' ? 'دستور القوانين والملاحظات الهامة' : 'Essential Formula Sheet'}</span>
              </h3>
              <span className={`text-xs font-semibold ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {lang === 'ar' ? `${toHindiDigits(lesson.formulas.length)} قوانين أساسية` : `${lesson.formulas.length} Core Formulas`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {lesson.formulas.map((f, fIdx) => (
                <div
                  key={fIdx}
                  className={`p-3 rounded-xl border transition-all hover:border-indigo-500/50 flex flex-col justify-between ${
                    isLight
                      ? 'bg-slate-50 border-slate-200/90 shadow-xs hover:bg-slate-100/60'
                      : 'bg-slate-950 border-slate-800 shadow-xs'
                  }`}
                >
                  <div className={`flex items-center justify-between text-xs font-bold pb-2 border-b ${
                    isLight ? 'text-slate-800 border-slate-200' : 'text-slate-300 border-slate-800/80'
                  }`}>
                    <span className="truncate pr-1">{lang === 'ar' ? f.labelAr : f.labelEn}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${
                      isLight ? 'text-indigo-800 bg-indigo-50 border border-indigo-200' : 'text-indigo-400 bg-indigo-950/60 border border-indigo-800'
                    }`}>
                      #{lang === 'ar' ? toHindiDigits(fIdx + 1) : fIdx + 1}
                    </span>
                  </div>
                  <div className="py-2 overflow-x-auto flex items-center justify-center min-h-[46px] formula-card-math">
                    <MathRenderer
                      math={f.latex}
                      block
                      lang={lang}
                      className="no-box bg-transparent border-0 shadow-none !my-0 !py-0 !px-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 📋 TAB 2: TEACHER LESSON PLAN */}
      {activeSubTab === 'lessonPlan' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-lesson-plan-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                isLight ? 'text-amber-800' : 'text-amber-400'
              }`}>
                <Target className="w-6 h-6" />
                <span>{lang === 'ar' ? lesson.lessonPlan.titleAr : lesson.lessonPlan.titleEn}</span>
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
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
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-indigo-900 font-bold' : 'text-indigo-300'
            }`}>{t.bloomsTaxonomy}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {(lang === 'ar' ? lesson.lessonPlan.bloomsObjectivesAr : lesson.lessonPlan.bloomsObjectivesEn).map((obj, oIdx) => (
                <li
                  key={oIdx}
                  className={`p-3.5 rounded-xl border flex items-start gap-2 print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-slate-950 border-slate-800 text-slate-200'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`} />
                  <span>{lang === 'ar' ? toHindiDigits(obj) : obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Pacing Flow */}
          <div className="space-y-3 print-avoid-break">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              isLight ? 'text-amber-900 font-bold' : 'text-amber-300'
            }`}>{lang === 'ar' ? 'خطوات السير في الدرس والتوقيت الزمني' : 'Instructional Pacing & Flow'}</h4>
            <div className="space-y-3">
              {lesson.lessonPlan.teachingPacing.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-4 rounded-xl border space-y-1 text-xs pacing-item print-avoid-break ${
                    isLight
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isLight ? 'text-indigo-800' : 'text-indigo-400'}`}>{lang === 'ar' ? p.phaseAr : p.phaseEn}</span>
                    <span className={`font-mono text-[11px] flex items-center gap-1 ${isLight ? 'text-slate-600' : 'text-slate-500'}`}>
                      <Clock className="w-3 h-3" />
                      {lang === 'ar' ? toHindiDigits(p.duration) : p.duration}
                    </span>
                  </div>
                  <p className={`pt-1 leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{lang === 'ar' ? toHindiDigits(p.activitiesAr) : p.activitiesEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Misconceptions & Differentiation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-avoid-break">
            <div className={`p-4 rounded-xl border space-y-3 text-xs misconception-card print-avoid-break ${
              isLight
                ? 'bg-amber-50/70 border-amber-300 text-amber-950'
                : 'bg-slate-950 border-amber-500/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider flex items-center gap-2 ${
                isLight ? 'text-amber-900' : 'text-amber-300'
              }`}>
                <Lightbulb className={`w-4 h-4 ${isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                <span>{t.misconceptions}</span>
              </h4>
              <ul className={`space-y-2 list-disc list-inside ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                {(lang === 'ar' ? lesson.lessonPlan.commonMisconceptionsAr : lesson.lessonPlan.commonMisconceptionsEn).map((m, mIdx) => (
                  <li key={mIdx}>{lang === 'ar' ? toHindiDigits(m) : m}</li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-xl border space-y-3 text-xs print-avoid-break ${
              isLight
                ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                : 'bg-slate-950 border-indigo-900/40 text-slate-300'
            }`}>
              <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-indigo-900' : 'text-indigo-300'}`}>{t.differentiation}</h4>
              <div className={`space-y-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                <p>
                  <strong className={isLight ? 'text-amber-800' : 'text-amber-400'}>{lang === 'ar' ? 'للطلاب المحتاجين لدعم:' : 'Struggling Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.struggling) : lesson.lessonPlan.differentiationEn.struggling}
                </p>
                <p>
                  <strong className={isLight ? 'text-emerald-800' : 'text-emerald-400'}>{lang === 'ar' ? 'للطلاب المتميزين:' : 'Advanced Learners:'}</strong>{' '}
                  {lang === 'ar' ? toHindiDigits(lesson.lessonPlan.differentiationAr.advanced) : lesson.lessonPlan.differentiationEn.advanced}
                </p>
              </div>
            </div>
          </div>

          {/* Exit Ticket */}
          <div className={`p-4 sm:p-5 rounded-xl border space-y-3 text-xs exit-ticket-card print-avoid-break ${
            isLight
              ? 'bg-amber-50/60 border-amber-200'
              : 'bg-slate-950 border-amber-500/30'
          }`}>
            <h4 className={`font-bold uppercase tracking-wider ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>{t.exitTicket}</h4>
            <div className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.questionAr : lesson.lessonPlan.exitTicketQuestion.questionEn} lang={lang} />
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white border border-slate-200 text-slate-800' : 'bg-slate-900 text-slate-300'}`}>
              <strong className={`block mb-1 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{t.stepByStepSolution}:</strong>
              <MathRenderer math={lang === 'ar' ? lesson.lessonPlan.exitTicketQuestion.solutionAr : lesson.lessonPlan.exitTicketQuestion.solutionEn} lang={lang} />
            </div>
          </div>
        </div>
      )}

      {/* ✏️ TAB 3: SOLVED WORKSHEETS */}
      {activeSubTab === 'worksheet' && (
        <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6 border print-worksheet-sheet ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900/90 border-slate-800 text-slate-100'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div>
              <h3 className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                <MathRenderer math={lang === 'ar' ? lesson.worksheet.titleAr : lesson.worksheet.titleEn} lang={lang} />
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{lang === 'ar' ? toHindiDigits(lesson.worksheet.descriptionAr) : lesson.worksheet.descriptionEn}</p>
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
              <div
                key={prob.id}
                className={`rounded-xl p-4 sm:p-5 space-y-4 shadow-sm border printable-problem print-avoid-break ${
                  isLight
                    ? 'bg-slate-50/70 border-slate-200'
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 text-xs font-extrabold px-3 py-1 rounded-lg border border-indigo-300 dark:border-indigo-800 shadow-sm">
                    {lang === 'ar' ? `مسألة رقم (${toHindiDigits(idx + 1)})` : `Problem (${idx + 1})`}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 shadow-sm">
                    {prob.difficulty === 'exam_standard' ? (lang === 'ar' ? 'نموذج وزاري معتمد' : 'EXAM STANDARD') : prob.difficulty.toUpperCase()}
                  </span>
                </div>

                <div className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
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
                              ? isLight
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/30 font-bold'
                                : 'bg-emerald-950/70 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40 font-bold'
                              : isLight
                                ? 'border-slate-200 bg-white text-slate-800 shadow-xs hover:border-slate-300'
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
                            <span className={`font-semibold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
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
                  <div className={`p-4 rounded-xl space-y-3 text-xs border step-by-step-box print-avoid-break ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-800 shadow-xs'
                      : 'bg-slate-900/90 border-slate-800 text-slate-200'
                  }`}>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider">{t.stepByStepSolution}</span>
                    <ol className={`space-y-2 list-decimal list-inside ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                      {(lang === 'ar' ? prob.stepByStepSolutionAr : prob.stepByStepSolutionEn).map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          <MathRenderer math={step} lang={lang} />
                        </li>
                      ))}
                    </ol>

                    {prob.teacherTipEn && role === 'teacher' && (
                      <div className={`mt-3 pt-3 border-t text-[11px] ${
                        isLight
                          ? 'border-slate-200 text-amber-900'
                          : 'border-slate-800 text-amber-300'
                      }`}>
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
          <div className={`rounded-2xl p-4 sm:p-6 shadow-2xl border ${
            isLight
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              {lang === 'ar' ? lesson.interactiveWidget.titleAr : lesson.interactiveWidget.titleEn}
            </h3>
            <p className={`text-xs mb-6 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {lang === 'ar' ? lesson.interactiveWidget.descriptionAr : lesson.interactiveWidget.descriptionEn}
            </p>

            {renderInteractiveWidget()}
          </div>
        </div>
      )}
    </div>
  );
};
