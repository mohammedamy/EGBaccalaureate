import type { ErrorTypeTag } from '../types/adaptivePractice';

export interface QuestionContext {
  questionAr?: string;
  questionEn?: string;
  optionsAr?: string[];
  optionsEn?: string[];
  correctIndex?: number;
  selectedOptionIndex: number;
  timeSpentSec?: number;
  timeLimitSec?: number;
  explanationAr?: string | string[];
  explanationEn?: string | string[];
  teacherTip?: string;
}

export interface ErrorPatternClassificationResult {
  detectedErrorType: ErrorTypeTag;
  confidence: number; // 0.0 to 1.0
  reasonAr: string;
  reasonEn: string;
  ruleId: string;
}

/**
 * Parses numbers and numerical signs out of an option string.
 */
function extractNumericValue(text?: string): number | null {
  if (!text) return null;
  // Match integer or floating point, with optional leading negative sign or KaTeX syntax
  const clean = text.replace(/\\(?:text|mathrm|frac)\{[^}]*\}/g, '').replace(/[\$,]/g, '');
  const match = clean.match(/[-−–]?\s*\d+(?:\.\d+)?/);
  if (!match) return null;
  const numStr = match[0].replace(/[\s−–]/g, '-');
  const val = parseFloat(numStr);
  return isNaN(val) ? null : val;
}

/**
 * Analyzes distractors and student answers to classify the root cause of an error.
 */
export function classifyErrorPattern(ctx: QuestionContext): ErrorPatternClassificationResult {
  const {
    questionAr = '',
    questionEn = '',
    optionsAr = [],
    optionsEn = [],
    correctIndex = 0,
    selectedOptionIndex,
    timeSpentSec,
    timeLimitSec,
    teacherTip = '',
  } = ctx;

  // 1. Time Pressure Detection (if timed and answer given with < 5s or > 120s with panic)
  if (timeLimitSec && timeSpentSec) {
    if (timeSpentSec > timeLimitSec * 1.5) {
      return {
        detectedErrorType: 'time_pressure',
        confidence: 0.85,
        ruleId: 'time_pressure_overrun',
        reasonAr: 'استغراق وقت طويل جداً يعكس التردد وضغط الوقت في الامتحان',
        reasonEn: 'Excessive time spent indicates hesitation under time pressure',
      };
    }
  }

  // 2. Comprehension / Negation Trap Detection
  // Questions containing negation like "ليس", "ما عدا", "غير صحيح", "not", "except"
  const qCombined = `${questionAr} ${questionEn}`.toLowerCase();
  const negationKeywords = [
    'ليس',
    'ما عدا',
    'ماعدا',
    'غير صحيح',
    'خاطئ',
    'لا ينطبق',
    'باستثناء',
    'not',
    'except',
    'incorrect',
    'false',
  ];
  const hasNegation = negationKeywords.some((kw) => qCombined.includes(kw));
  if (hasNegation) {
    return {
      detectedErrorType: 'comprehension_misread',
      confidence: 0.88,
      ruleId: 'negation_comprehension_trap',
      reasonAr: 'السؤال يحتوي على صيغة نفي أو استثناء وتسرعت باختيار عبارة صحيحة بذاتها لكنها ليست المطلوبة',
      reasonEn: 'Question contains negation/exception keywords leading to misreading the required condition',
    };
  }

  // 3. Mathematical Numerical Analysis between Correct and Selected Options
  const correctOptAr = optionsAr[correctIndex] || '';
  const correctOptEn = optionsEn[correctIndex] || '';
  const selectedOptAr = optionsAr[selectedOptionIndex] || '';
  const selectedOptEn = optionsEn[selectedOptionIndex] || '';

  const correctNum = extractNumericValue(correctOptEn || correctOptAr);
  const selectedNum = extractNumericValue(selectedOptEn || selectedOptAr);

  if (correctNum !== null && selectedNum !== null && correctNum !== 0) {
    // 3a. Sign / Direction Inversion: e.g. +15 vs -15
    if (Math.abs(correctNum + selectedNum) < 1e-4 && Math.abs(correctNum) > 1e-4) {
      return {
        detectedErrorType: 'sign_direction_error',
        confidence: 0.95,
        ruleId: 'sign_inversion',
        reasonAr: 'الناتج العددي صحيح لكن مع خطأ في الإشارة السالبة/الموجبة أو اتجاه المتجه',
        reasonEn: 'Magnitude is correct but sign is inverted or vector direction reversed',
      };
    }

    // 3b. Unit Conversion Scaling (powers of 10, e.g. 10, 100, 1000, or 60, 3600)
    const ratio = Math.abs(selectedNum / correctNum);
    const unitFactors = [10, 100, 1000, 10000, 0.1, 0.01, 0.001, 60, 3600, 1 / 60, 1 / 3600];
    const isUnitMismatch = unitFactors.some((factor) => Math.abs(ratio - factor) < 0.01);
    if (isUnitMismatch) {
      return {
        detectedErrorType: 'unit_conversion',
        confidence: 0.92,
        ruleId: 'unit_scale_error',
        reasonAr: 'القيمة قريبة ولكن بمعامل تحويل وحدات خاطئ (مثل التحويل بين سم ومتر، أو ثانية وساعة)',
        reasonEn: 'Off by a standard unit conversion factor (e.g., cm to m, s to hr, or grams to kg)',
      };
    }

    // 3c. Formula Inversion / Reciprocal (e.g., A = 1/B) or Square Root (e.g. A = sqrt(B))
    const isReciprocal = Math.abs(selectedNum * correctNum - 1) < 0.05;
    const isSquare = Math.abs(selectedNum * selectedNum - correctNum) < 0.05 || Math.abs(correctNum * correctNum - selectedNum) < 0.05;
    if (isReciprocal || isSquare) {
      return {
        detectedErrorType: 'formula_confusion',
        confidence: 0.85,
        ruleId: 'reciprocal_or_power_mixup',
        reasonAr: 'خلط في صيغة القانون (مثل مقلوب النسبة أو نسيان الجذر التربيعي / التربيع)',
        reasonEn: 'Formula confusion involving reciprocal ratio or missing square/square root',
      };
    }

    // 3d. Arithmetic Delta: within 5% - 25% deviation
    const pctDiff = Math.abs((selectedNum - correctNum) / correctNum);
    if (pctDiff <= 0.25) {
      return {
        detectedErrorType: 'calculation_error',
        confidence: 0.82,
        ruleId: 'arithmetic_approximation_delta',
        reasonAr: 'فهمت فكرة الحل ولكن حدث خطأ حسابي بسيط أو تقريب أرقام في الخطوات النهائية',
        reasonEn: 'Correct reasoning pathway but minor arithmetic slip or rounding delta',
      };
    }
  }

  // 4. Directional keywords in options
  const directionsAr = ['شمال', 'جنوب', 'شرق', 'غرب', 'أعلى', 'أسفل', 'طارد', 'ماص', 'أكسدة', 'اختزال', 'كاثود', 'أنود'];
  for (const dir of directionsAr) {
    if (
      (correctOptAr.includes(dir) && !selectedOptAr.includes(dir)) ||
      (!correctOptAr.includes(dir) && selectedOptAr.includes(dir))
    ) {
      return {
        detectedErrorType: 'sign_direction_error',
        confidence: 0.78,
        ruleId: 'directional_attribute_mixup',
        reasonAr: 'عكس في اتجاه القوة أو القطبية أو نوع التفاعل (مثل اتجاه الحركة أو الأكسدة والاختزال)',
        reasonEn: 'Directional or polarity mix-up in physical or chemical properties',
      };
    }
  }

  // 5. Teacher Tip Hint matching
  if (teacherTip) {
    const tipLower = teacherTip.toLowerCase();
    if (tipLower.includes('قانون') || tipLower.includes('مفهوم') || tipLower.includes('concept')) {
      return {
        detectedErrorType: 'concept_gap',
        confidence: 0.75,
        ruleId: 'teacher_tip_concept_hint',
        reasonAr: 'فجوة في إدراك المفهوم الفيزيائي أو الرياضي الأساسي للمسألة',
        reasonEn: 'Fundamental concept gap identified in problem formulation',
      };
    }
  }

  // Default Fallback
  return {
    detectedErrorType: 'concept_gap',
    confidence: 0.60,
    ruleId: 'general_concept_fallback',
    reasonAr: 'فجوة مفهومية تتطلب مراجعة شرح الدرس وقوانينه وحل أمثلة محلولة',
    reasonEn: 'Conceptual gap requiring review of chapter theory and solved examples',
  };
}
