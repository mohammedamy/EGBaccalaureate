import type { GeneratedQuestion } from './mistakeNotebookService';

export interface ProgressiveHint {
  tier: 1 | 2 | 3;
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
  iconType: 'law' | 'roadmap' | 'trap';
}

/**
 * Derives or synthesizes 3-tiered progressive KaTeX hints for any question.
 * Tier 1: Governing Law & Core Principle (Concept)
 * Tier 2: Algebraic Roadmap & Variable Isolation (Technique)
 * Tier 3: Ministerial Distractor & Pitfall Alert (Exam Strategy)
 */
export function getProgressiveHintsForQuestion(q: GeneratedQuestion): ProgressiveHint[] {
  // If custom hints were already attached
  if (q.hintsEn && q.hintsEn.length >= 3 && q.hintsAr && q.hintsAr.length >= 3) {
    return [
      {
        tier: 1,
        titleEn: 'Tier 1: Governing Law & Concept',
        titleAr: 'المستوى ١: القانون الحاكم والمفهوم الأساسي',
        contentEn: q.hintsEn[0],
        contentAr: q.hintsAr[0],
        iconType: 'law',
      },
      {
        tier: 2,
        titleEn: 'Tier 2: Algebraic Roadmap',
        titleAr: 'المستوى ٢: خارطة الحل وعزل المتغيرات',
        contentEn: q.hintsEn[1],
        contentAr: q.hintsAr[1],
        iconType: 'roadmap',
      },
      {
        tier: 3,
        titleEn: 'Tier 3: Ministerial Trap Alert',
        titleAr: 'المستوى ٣: فخاخ واضع الامتحان والتطابق',
        contentEn: q.hintsEn[2],
        contentAr: q.hintsAr[2],
        iconType: 'trap',
      },
    ];
  }

  // Derive intelligent progressive hints from subject, branch, question, and explanation steps
  const explEn = q.explanationEn || [];
  const explAr = q.explanationAr || [];

  // 1. Governing Law (Tier 1)
  let tier1En = explEn[0] || `Identify the primary governing formula for **${q.chapterTitleEn}**. Express all known quantities in SI standard units.`;
  let tier1Ar = explAr[0] || `حدد القانون الفيزيائي أو الرياضي الحاكم في باب **${q.chapterTitleAr}**. تأكد من توحيد الوحدات القياسية أولاً.`;

  // 2. Algebraic Roadmap (Tier 2)
  let tier2En = explEn.length > 2
    ? explEn.slice(1, -1).join(' \\implies ')
    : explEn[1] || 'Substitute the given numerical parameters into the isolated equation and solve algebraically for the target variable.';
  let tier2Ar = explAr.length > 2
    ? explAr.slice(1, -1).join(' \\Leftarrow ')
    : explAr[1] || 'قم بالتعويض المباشر بالمعطيات المعلومة في المعادلة بعد عزل المجهول المطلوب في طرف مستقل.';

  // 3. Trap Alert (Tier 3)
  let tier3En = explEn[explEn.length - 1] || 'Watch out for common exam traps: check angle definitions (angle with normal vs surface), sign conventions, and squaring factors.';
  let tier3Ar = explAr[explAr.length - 1] || 'احذر من الفخاخ الوزارية المعتادة: تحقق من الزاوية مع العمودي أو السطح، وقواعد الإشارات، والانتباه للجذور والتربيعات.';

  // If question is high difficulty, enrich the trap warning
  if (q.difficulty === 'hots') {
    tier3En += ' (HOTS Note: Distractors usually represent calculating with an un-converted unit or inverted ratio!)';
    tier3Ar += ' (تنبيه المستويات العليا: الخيارات المضللة تمثل ناتج عدم تحويل الوحدات أو عكس النسبة بين المتغيرات!)';
  }

  return [
    {
      tier: 1,
      titleEn: 'Tier 1: Governing Law & Concept',
      titleAr: 'المستوى ١: القانون الحاكم والمفهوم الأساسي',
      contentEn: tier1En,
      contentAr: tier1Ar,
      iconType: 'law',
    },
    {
      tier: 2,
      titleEn: 'Tier 2: Algebraic Roadmap & Isolation',
      titleAr: 'المستوى ٢: خارطة الحل وعزل المتغيرات',
      contentEn: tier2En,
      contentAr: tier2Ar,
      iconType: 'roadmap',
    },
    {
      tier: 3,
      titleEn: 'Tier 3: Ministerial Distractor & Trap Warning',
      titleAr: 'المستوى ٣: فخاخ واضع الامتحان والتطابق',
      contentEn: tier3En,
      contentAr: tier3Ar,
      iconType: 'trap',
    },
  ];
}

/**
 * Diagnostic Drill result summary & pace analytics.
 */
export interface DiagnosticDrillResult {
  totalQuestions: number;
  correctCount: number;
  scorePct: number;
  totalTimeSec: number;
  paceSecPerQ: number;
  speedRatingEn: 'Elite Pace' | 'Steady Pace' | 'Time Review Needed';
  speedRatingAr: 'سرعة استثنائية' | 'معدل زمني منتظم' | 'بحاجة لتدريب السرعة';
  speedAssessmentEn: string;
  speedAssessmentAr: string;
  recommendationsEn: string[];
  recommendationsAr: string[];
}

/**
 * Computes detailed diagnostic report for a timed diagnostic drill sprint.
 */
export function computeDiagnosticDrillResult(
  questions: GeneratedQuestion[],
  userAnswers: Record<string, number>,
  timeTakenSec: number
): DiagnosticDrillResult {
  const totalQuestions = questions.length;
  let correctCount = 0;
  const chapterMistakes: Record<string, number> = {};

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans !== undefined && ans === q.correctIndex) {
      correctCount++;
    } else {
      chapterMistakes[q.chapterTitleAr] = (chapterMistakes[q.chapterTitleAr] || 0) + 1;
    }
  });

  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const paceSecPerQ = totalQuestions > 0 ? Math.round(timeTakenSec / totalQuestions) : 0;

  let speedRatingEn: DiagnosticDrillResult['speedRatingEn'] = 'Steady Pace';
  let speedRatingAr: DiagnosticDrillResult['speedRatingAr'] = 'معدل زمني منتظم';
  let speedAssessmentEn = `Completed at ${paceSecPerQ}s per question. Ideal target is under 60s per MCQ.`;
  let speedAssessmentAr = `متوسط زمن الإجابة: ${paceSecPerQ} ثانية لكل سؤال. المعدل الوزاري المستهدف أقل من ٦٠ ثانية.`;

  if (paceSecPerQ <= 45) {
    speedRatingEn = 'Elite Pace';
    speedRatingAr = 'سرعة استثنائية';
    speedAssessmentEn = `Rapid decision making (${paceSecPerQ}s/Q) matches top 5% ministerial percentile!`;
    speedAssessmentAr = `سرعة استجابة عالية جداً (${paceSecPerQ} ثانية/سؤال) تضاهي الشريحة الأولى المتميزة في امتحانات الوزارة!`;
  } else if (paceSecPerQ > 90) {
    speedRatingEn = 'Time Review Needed';
    speedRatingAr = 'بحاجة لتدريب السرعة';
    speedAssessmentEn = `Pace exceeded 90s per question (${paceSecPerQ}s/Q). Practice timed speed drills to avoid end-of-exam pressure.`;
    speedAssessmentAr = `تجاوز متوسط الوقت ٩٠ ثانية للسؤال (${paceSecPerQ} ثانية/سؤال). ينصح بتكثيف التدريبات السريعة لتفادي ضغط نهاية الامتحان.`;
  }

  // Recommendations
  const weakChapters = Object.entries(chapterMistakes)
    .sort((a, b) => b[1] - a[1])
    .map(([ch]) => ch);

  const recommendationsAr: string[] = [];
  const recommendationsEn: string[] = [];

  if (weakChapters.length > 0) {
    recommendationsAr.push(`مراجعة المفاهيم الخاصة بأبواب: ${weakChapters.slice(0, 2).join('، ')}.`);
    recommendationsEn.push(`Review key theoretical concepts in: ${weakChapters.slice(0, 2).join(', ')}.`);
  }

  if (scorePct >= 80) {
    recommendationsAr.push('أداء ممتاز! انتقل إلى نمط مسائل التفكير العليا (HOTS Challenge) لتعزيز التميز.');
    recommendationsEn.push('Excellent score! Advance to HOTS Challenge mode to master ministerial edge-cases.');
  } else {
    recommendationsAr.push('استخدم كشكول الأخطاء (Mistake Notebook) لإعادة حل النقاط التي واجهت فيها صعوبة.');
    recommendationsEn.push('Use the Mistake Notebook to re-attempt questions missed during this diagnostic sprint.');
  }

  return {
    totalQuestions,
    correctCount,
    scorePct,
    totalTimeSec: timeTakenSec,
    paceSecPerQ,
    speedRatingEn,
    speedRatingAr,
    speedAssessmentEn,
    speedAssessmentAr,
    recommendationsEn,
    recommendationsAr,
  };
}
