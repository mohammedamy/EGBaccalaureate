import type { GeneratedQuestion } from './mistakeNotebookService';

export type BloomLevel = 'remembering' | 'understanding' | 'application' | 'analysis';

export interface BloomLevelInfo {
  level: BloomLevel;
  labelEn: string;
  labelAr: string;
  shortLabelEn: string;
  shortLabelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  targetPercentage: number; // Egyptian MoE National Blueprint Standard distribution
  color: string;
  badgeBg: string;
  borderColor: string;
}

export const BLOOM_LEVELS_METADATA: Record<BloomLevel, BloomLevelInfo> = {
  remembering: {
    level: 'remembering',
    labelEn: 'Knowledge & Remembering',
    labelAr: 'التذكر والمعرفة الأساسية',
    shortLabelEn: 'Remembering',
    shortLabelAr: 'تذكر',
    descriptionEn: 'Direct recall of scientific definitions, statutory laws, fundamental constants, and units.',
    descriptionAr: 'استدعاء القوانين والمصطلحات والثوابت الفيزيائية والكيميائية والوحدات المعيارية.',
    targetPercentage: 15,
    color: 'text-sky-400',
    badgeBg: 'bg-sky-500/15',
    borderColor: 'border-sky-500/30',
  },
  understanding: {
    level: 'understanding',
    labelEn: 'Comprehension & Conceptual Understanding',
    labelAr: 'الفهم والاستيعاب المفاهيمي',
    shortLabelEn: 'Understanding',
    shortLabelAr: 'فهم',
    descriptionEn: 'Interpretation of graphical slopes, qualitative relationships, phase diagrams, and physical directions.',
    descriptionAr: 'تفسير الرسوم البيانية والعلاقات الطردية والعكسية وتأثير الشروط الحدية والاتجاهات.',
    targetPercentage: 25,
    color: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/15',
    borderColor: 'border-indigo-500/30',
  },
  application: {
    level: 'application',
    labelEn: 'Application & Procedural Problem Solving',
    labelAr: 'التطبيق وحل المسائل القياسية',
    shortLabelEn: 'Application',
    shortLabelAr: 'تطبيق',
    descriptionEn: 'Standard numerical computation, formula transposition, circuit solutions, and stoichiometry.',
    descriptionAr: 'حساب النواتج الرياضية وتطبيق القوانين المباشرة ودوائر كيرشوف وتفاعلات المعايرة والاتزان.',
    targetPercentage: 40,
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/15',
    borderColor: 'border-emerald-500/30',
  },
  analysis: {
    level: 'analysis',
    labelEn: 'Analysis, Evaluation & HOTS',
    labelAr: 'التحليل ومستويات التفكير العليا',
    shortLabelEn: 'Analysis & HOTS',
    shortLabelAr: 'تحليل واستنتاج',
    descriptionEn: 'Multi-concept synthesis, un-routine edge cases, 2-point ministerial discrimination items, and proofs.',
    descriptionAr: 'ربط الفصول المتعددة، المسائل غير النمطية، أسئلة التمايز الوزاري ذات الدرجتين، واستنتاج الفروض.',
    targetPercentage: 20,
    color: 'text-amber-400',
    badgeBg: 'bg-amber-500/15',
    borderColor: 'border-amber-500/30',
  },
};

/**
 * Classify a question into Bloom's Taxonomy cognitive domains
 * following Egyptian MoE exam specifications.
 */
export function classifyBloomLevel(question: GeneratedQuestion): BloomLevel {
  if (question.bloomLevel) {
    return question.bloomLevel;
  }

  // Section 2 questions (2 points) or HOTS difficulty in Thanawya Amma are explicitly Analysis / Evaluation
  if (question.points === 2 || question.difficulty === 'hots') {
    return 'analysis';
  }

  const textEn = (question.questionEn || '').toLowerCase();
  const textAr = question.questionAr || '';

  // Analysis / HOTS keyword detection
  const isAnalysis =
    textEn.includes('deduce') ||
    textEn.includes('infer') ||
    textEn.includes('compare') ||
    textEn.includes('distinguish') ||
    textEn.includes('derive') ||
    textEn.includes('hypothesize') ||
    textEn.includes('critical') ||
    textAr.includes('استنتج') ||
    textAr.includes('قارن') ||
    textAr.includes('ماذا يحدث عندما') ||
    textAr.includes('فسر سبب') ||
    textAr.includes('علل لما يأتي') ||
    textAr.includes('أي العبارات غير صحيحة') ||
    textAr.includes('أقصى قيمة ممكنة');

  if (isAnalysis) {
    return 'analysis';
  }

  // Remembering keyword detection
  const isRemembering =
    textEn.includes('define') ||
    textEn.includes('unit of') ||
    textEn.includes('state the law') ||
    textEn.includes('constant') ||
    textEn.includes('which of the following is called') ||
    textAr.includes('ما هو تعريف') ||
    textAr.includes('وحدة قياس') ||
    textAr.includes('ينص قانون') ||
    textAr.includes('يسمى') ||
    textAr.includes('من أمثلة') ||
    (question.difficulty === 'easy' && !textAr.includes('احسب') && !textEn.includes('calculate'));

  if (isRemembering) {
    return 'remembering';
  }

  // Application keyword detection
  const isApplication =
    textEn.includes('calculate') ||
    textEn.includes('find the value') ||
    textEn.includes('determine') ||
    textEn.includes('evaluate') ||
    textEn.includes('magnitude') ||
    textEn.includes('rate of') ||
    textAr.includes('احسب') ||
    textAr.includes('أوجد قيمة') ||
    textAr.includes('مقدار') ||
    textAr.includes('قيمة') ||
    textAr.includes('معادلة') ||
    textAr.includes('سرعة') ||
    textAr.includes('عزم') ||
    textAr.includes('تكامل') ||
    textAr.includes('مشتقة');

  if (isApplication || question.difficulty === 'medium' || question.difficulty === 'exam_standard') {
    return 'application';
  }

  // Default to Understanding
  return 'understanding';
}

export interface BloomLevelScore {
  level: BloomLevel;
  info: BloomLevelInfo;
  totalQuestions: number;
  correctQuestions: number;
  totalMarks: number;
  earnedMarks: number;
  accuracyPct: number;
  targetPct: number;
  deviation: number; // difference from target percentage
}

export interface BloomDiagnosticsReport {
  levels: Record<BloomLevel, BloomLevelScore>;
  dominantStrength: BloomLevelScore;
  primaryGrowthArea: BloomLevelScore;
  overallCognitiveIndex: number; // 0-100 cognitive mastery index
  diagnosticSummaryEn: string;
  diagnosticSummaryAr: string;
  actionPlanEn: string[];
  actionPlanAr: string[];
}

/**
 * Compute detailed Bloom's Taxonomy Cognitive Diagnostics for an exam attempt.
 */
export function computeBloomDiagnostics(
  questions: GeneratedQuestion[],
  userAnswers: Record<number, number>
): BloomDiagnosticsReport {
  const levelOrder: BloomLevel[] = ['remembering', 'understanding', 'application', 'analysis'];

  const stats: Record<BloomLevel, { totalQ: number; correctQ: number; totalMarks: number; earnedMarks: number }> = {
    remembering: { totalQ: 0, correctQ: 0, totalMarks: 0, earnedMarks: 0 },
    understanding: { totalQ: 0, correctQ: 0, totalMarks: 0, earnedMarks: 0 },
    application: { totalQ: 0, correctQ: 0, totalMarks: 0, earnedMarks: 0 },
    analysis: { totalQ: 0, correctQ: 0, totalMarks: 0, earnedMarks: 0 },
  };

  questions.forEach((q, idx) => {
    const level = classifyBloomLevel(q);
    const pts = q.points ?? 1;
    stats[level].totalQ += 1;
    stats[level].totalMarks += pts;

    if (userAnswers[idx] === q.correctIndex) {
      stats[level].correctQ += 1;
      stats[level].earnedMarks += pts;
    }
  });

  const levels: Record<BloomLevel, BloomLevelScore> = {} as any;

  levelOrder.forEach((lvl) => {
    const s = stats[lvl];
    const accuracyPct = s.totalMarks > 0 ? Math.round((s.earnedMarks / s.totalMarks) * 100) : 0;
    const targetPct = BLOOM_LEVELS_METADATA[lvl].targetPercentage;
    const deviation = accuracyPct - targetPct;

    levels[lvl] = {
      level: lvl,
      info: BLOOM_LEVELS_METADATA[lvl],
      totalQuestions: s.totalQ,
      correctQuestions: s.correctQ,
      totalMarks: s.totalMarks,
      earnedMarks: s.earnedMarks,
      accuracyPct,
      targetPct,
      deviation,
    };
  });

  // Determine dominant strength (highest accuracy with at least 1 question)
  const populated = levelOrder
    .map((lvl) => levels[lvl])
    .filter((score) => score.totalQuestions > 0);

  const dominantStrength = populated.length > 0
    ? [...populated].sort((a, b) => b.accuracyPct - a.accuracyPct)[0]
    : levels['application'];

  // Determine primary growth area (lowest accuracy with at least 1 question)
  const primaryGrowthArea = populated.length > 0
    ? [...populated].sort((a, b) => a.accuracyPct - b.accuracyPct)[0]
    : levels['analysis'];

  // Compute overall cognitive index (weighted average favoring higher cognitive levels)
  const weights: Record<BloomLevel, number> = {
    remembering: 1,
    understanding: 1.5,
    application: 2.5,
    analysis: 3.5,
  };

  let weightedEarned = 0;
  let weightedTotal = 0;

  levelOrder.forEach((lvl) => {
    const s = levels[lvl];
    const w = weights[lvl];
    weightedEarned += s.earnedMarks * w;
    weightedTotal += s.totalMarks * w;
  });

  const overallCognitiveIndex = weightedTotal > 0 ? Math.round((weightedEarned / weightedTotal) * 100) : 0;

  // Build tailor-made diagnostic advice in Arabic & English
  let diagnosticSummaryAr = '';
  let diagnosticSummaryEn = '';
  const actionPlanAr: string[] = [];
  const actionPlanEn: string[] = [];

  if (levels.analysis.accuracyPct >= 85) {
    diagnosticSummaryAr = 'أداء استثنائي في مستويات التفكير العليا (التحليل والتركيب). تمتلك قدرة فائقة على تفكيك المسائل المركبة والتعامل مع فخاخ الأسئلة الوزارية ذات الدرجتين.';
    diagnosticSummaryEn = 'Exceptional performance in Higher-Order Thinking Skills (Analysis & Synthesis). Demonstrates top-tier mastery on complex 2-mark discrimination questions.';
  } else if (levels.analysis.accuracyPct < 60 && levels.analysis.totalQuestions > 0) {
    diagnosticSummaryAr = 'أداؤك جيد في التطبيق والمفاهيم الأساسية، لكنك تعاني من فقدان درجات في أسئلة التحليل والربط بين الفصول (القسم الثاني ذو الدرجتين).';
    diagnosticSummaryEn = 'Solid performance on fundamental application, but points are being dropped in Section 2 (2-mark multi-concept synthesis and edge cases).';
  } else {
    diagnosticSummaryAr = 'توازن جيد عبر المستويات المعرفية مع وجود فرصة لرفع كفاءة سرعة الحل في المسائل التطبيقية لضمان إنهاء الامتحان في الوقت المحدد.';
    diagnosticSummaryEn = 'Balanced performance across cognitive domains with room to accelerate problem-solving cadence under strict exam time limits.';
  }

  // Specific action items
  if (levels.remembering.accuracyPct < 80 && levels.remembering.totalQuestions > 0) {
    actionPlanAr.push('راجع دليل القوانين والثوابت للفيزياء والكيمياء عبر Formula Handbook لتجنب الخطأ في الوحدات المعيارية.');
    actionPlanEn.push('Review the Formula Handbook for physical constants and standard SI units to eliminate preventable recall errors.');
  }

  if (levels.understanding.accuracyPct < 75 && levels.understanding.totalQuestions > 0) {
    actionPlanAr.push('ركز على استنتاج ميل الخطوط البيانية (Slope) وملاحظة العلاقات العكسية وغير الخطية في أسئلة الرسوم التوضيحية.');
    actionPlanEn.push('Focus on graphic slope interpretation and qualitative inverse relationships in diagrammatic questions.');
  }

  if (levels.application.accuracyPct < 75 && levels.application.totalQuestions > 0) {
    actionPlanAr.push('قم بحل المزيد من التمارين التدريبية المباشرة في كراسة الأخطاء لتثبيت خطوات التعويض الحسابي بدقة.');
    actionPlanEn.push('Practice targeted procedural questions in the Mistake Notebook to solidify calculation accuracy.');
  }

  if (levels.analysis.accuracyPct < 70 && levels.analysis.totalQuestions > 0) {
    actionPlanAr.push('قم بتفعيل وضع "تحدي المستويات العليا (HOTS)" لحل المسائل التي تدمج أكثر من مفهوم في السؤال الواحد.');
    actionPlanEn.push('Activate the HOTS Challenge mode to master problems that synthesize multiple syllabus chapters.');
  }

  if (actionPlanAr.length === 0) {
    actionPlanAr.push('استمر في إجراء نماذج الامتحانات الشاملة لمحاكاة ضغط الوقت واستقرار الدرجات النهائية في شريحة أوائل الجمهورية.');
    actionPlanEn.push('Continue taking full-length 3-hour mock exams to maintain peak speed and secure elite ranking.');
  }

  return {
    levels,
    dominantStrength,
    primaryGrowthArea,
    overallCognitiveIndex,
    diagnosticSummaryEn,
    diagnosticSummaryAr,
    actionPlanEn,
    actionPlanAr,
  };
}
