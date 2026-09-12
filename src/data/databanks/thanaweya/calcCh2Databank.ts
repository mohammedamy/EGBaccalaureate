import type { ChapterDatabank } from '../../../types/curriculum';

export const calcCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "calc_ch2_db_easy_01",
    "titleEn": "Fundamental Limit for Euler's Constant e",
    "titleAr": "النهاية الأساسية للعدد النيبيري هـ",
    "difficulty": "easy",
    "questionEn": "Evaluate the fundamental limit: $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$.",
    "questionAr": "احسب قيمة النهاية الأساسية: $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$.",
    "optionsEn": [
      "$e$",
      "$1$",
      "$\\infty$",
      "$0$"
    ],
    "optionsAr": [
      "هـ",
      "1",
      "∞",
      "0"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "Recall definition of Euler's constant e.",
    "hintAr": "تذكر تعريف ثابت أويلر هـ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_02",
    "titleEn": "Limit with Integer Power in Exponent",
    "titleAr": "نهاية مع معامل في الأس",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit with Integer Power in Exponent: $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^{4x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية مع معامل في الأس): $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^{4x}$.",
    "optionsEn": [
      "$e^4$",
      "$4e$",
      "$e^{1/4}$",
      "$4$"
    ],
    "optionsAr": [
      "هـ⁴",
      "4هـ",
      "هـ^(1/4)",
      "4"
    ],
    "correctAnswer": "$e^4$",
    "correctIndex": 0,
    "hintEn": "lim (1 + 1/x)^(kx) = e^k.",
    "hintAr": "استخدم القاعدة العامة لنهاية العدد النيبيري.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_03",
    "titleEn": "Limit with Scaled Fraction",
    "titleAr": "نهاية بكسر مضاعف",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit with Scaled Fraction: $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x$.",
    "questionAr": "احسب قيمة النهاية (نهاية بكسر مضاعف): $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x$.",
    "optionsEn": [
      "$e^3$",
      "$3e$",
      "$e^{1/3}$",
      "$3$"
    ],
    "optionsAr": [
      "هـ³",
      "3هـ",
      "هـ^(1/3)",
      "3"
    ],
    "correctAnswer": "$e^3$",
    "correctIndex": 0,
    "hintEn": "lim (1 + a/x)^x = e^a.",
    "hintAr": "نهاية (1 + أ/س)^س = هـ^أ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_04",
    "titleEn": "Limit with Negative Term in Parenthesis",
    "titleAr": "نهاية بإشارة سالبة داخل القوس",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit with Negative Term in Parenthesis: $\\lim_{x \\to \\infty} \\left(1 - \\frac{2}{x}\\right)^x$.",
    "questionAr": "احسب قيمة النهاية (نهاية بإشارة سالبة داخل القوس): $\\lim_{x \\to \\infty} \\left(1 - \\frac{2}{x}\\right)^x$.",
    "optionsEn": [
      "$e^{-2}$",
      "$e^2$",
      "$-2e$",
      "$-2$"
    ],
    "optionsAr": [
      "هـ⁻²",
      "هـ²",
      "-2هـ",
      "-2"
    ],
    "correctAnswer": "$e^{-2}$",
    "correctIndex": 0,
    "hintEn": "Here a = -2, so result is e^(-2).",
    "hintAr": "المعامل هنا هو -2، فالناتج هـ⁻².",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_05",
    "titleEn": "Limit as x Approaches Zero",
    "titleAr": "نهاية عندما س تؤول للصفر",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit as x Approaches Zero: $\\lim_{x \\to 0} (1 + x)^{1/x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية عندما س تؤول للصفر): $\\lim_{x \\to 0} (1 + x)^{1/x}$.",
    "optionsEn": [
      "$e$",
      "$1$",
      "$0$",
      "$\\infty$"
    ],
    "optionsAr": [
      "هـ",
      "1",
      "0",
      "∞"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "Standard limit definition as x -> 0.",
    "hintAr": "الصورة المكافئة للعدد هـ عند الصفر.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_06",
    "titleEn": "Limit with Scaled Linear Factor at Zero",
    "titleAr": "نهاية بعامل خطي عند الصفر",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit with Scaled Linear Factor at Zero: $\\lim_{x \\to 0} (1 + 5x)^{1/x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية بعامل خطي عند الصفر): $\\lim_{x \\to 0} (1 + 5x)^{1/x}$.",
    "optionsEn": [
      "$e^5$",
      "$5e$",
      "$e^{1/5}$",
      "$5$"
    ],
    "optionsAr": [
      "هـ⁵",
      "5هـ",
      "هـ^(1/5)",
      "5"
    ],
    "correctAnswer": "$e^5$",
    "correctIndex": 0,
    "hintEn": "lim (1 + kx)^(1/x) = e^k.",
    "hintAr": "القاعدة: (1 + ك س)^(1/س) تؤول إلى هـ^ك.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_07",
    "titleEn": "Standard Natural Exponential Limit",
    "titleAr": "النهاية القياسية للدالة الأسية الطبيعية",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Standard Natural Exponential Limit: $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",
    "questionAr": "احسب قيمة النهاية (النهاية القياسية للدالة الأسية الطبيعية): $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$e$",
      "$\\infty$"
    ],
    "optionsAr": [
      "1",
      "0",
      "هـ",
      "∞"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Standard limit for exponential derivative at 0.",
    "hintAr": "نهاية قياسية تعبر عن مشتقة هـ^س عند س = 0.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_08",
    "titleEn": "Scaled Exponential Limit",
    "titleAr": "نهاية أسية ذات معامل خطي",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Scaled Exponential Limit: $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية أسية ذات معامل خطي): $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{x}$.",
    "optionsEn": [
      "$3$",
      "$1$",
      "$e^3$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "3",
      "1",
      "هـ³",
      "1/3"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "lim (e^(kx)-1)/x = k.",
    "hintAr": "المعامل ك يخرج كناتج للنهاية.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_09",
    "titleEn": "General Base Exponential Limit",
    "titleAr": "نهاية الدالة الأسية لأساس عام",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for General Base Exponential Limit: $\\lim_{x \\to 0} \\frac{2^x - 1}{x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية الدالة الأسية لأساس عام): $\\lim_{x \\to 0} \\frac{2^x - 1}{x}$.",
    "optionsEn": [
      "$\\ln 2$",
      "$2$",
      "$\\frac{1}{\\ln 2}$",
      "$1$"
    ],
    "optionsAr": [
      "لو_هـ 2",
      "2",
      "1 / لو_هـ 2",
      "1"
    ],
    "correctAnswer": "$\\ln 2$",
    "correctIndex": 0,
    "hintEn": "Standard theorem: lim (a^x - 1)/x = ln a.",
    "hintAr": "نهاية (أ^س - 1)/س = لو_هـ أ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_10",
    "titleEn": "Scaled General Exponential Limit",
    "titleAr": "نهاية أسية عامة بمقام مضاعف",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Scaled General Exponential Limit: $\\lim_{x \\to 0} \\frac{5^x - 1}{2x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية أسية عامة بمقام مضاعف): $\\lim_{x \\to 0} \\frac{5^x - 1}{2x}$.",
    "optionsEn": [
      "$\\frac{\\ln 5}{2}$",
      "$\\ln 5$",
      "$2\\ln 5$",
      "$\\frac{5}{2}$"
    ],
    "optionsAr": [
      "(لو_هـ 5)/2",
      "لو_هـ 5",
      "2 لو_هـ 5",
      "5/2"
    ],
    "correctAnswer": "$\\frac{\\ln 5}{2}$",
    "correctIndex": 0,
    "hintEn": "Factor out 1/2 from denominator.",
    "hintAr": "أخرج 1/2 كعامل مشترك.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_11",
    "titleEn": "Standard Natural Logarithmic Limit",
    "titleAr": "النهاية القياسية للوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Standard Natural Logarithmic Limit: $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x}$.",
    "questionAr": "احسب قيمة النهاية (النهاية القياسية للوغاريتم الطبيعي): $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x}$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$e$",
      "$\\ln 2$"
    ],
    "optionsAr": [
      "1",
      "0",
      "هـ",
      "لو_هـ 2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "lim ln(1+x)/x = 1.",
    "hintAr": "النهاية القياسية للوغاريتم الطبيعي عند الصفر تساوي 1.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_12",
    "titleEn": "Scaled Natural Logarithmic Limit",
    "titleAr": "نهاية لوغاريتمية بمضاعف خطي",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Scaled Natural Logarithmic Limit: $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية لوغاريتمية بمضاعف خطي): $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$.",
    "optionsEn": [
      "$4$",
      "$1$",
      "$\\frac{1}{4}$",
      "$\\ln 4$"
    ],
    "optionsAr": [
      "4",
      "1",
      "1/4",
      "لو_هـ 4"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "lim ln(1+kx)/x = k.",
    "hintAr": "الناتج يساوي معامل س وهو 4.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_13",
    "titleEn": "General Base Logarithmic Limit",
    "titleAr": "نهاية اللوغاريتم المعتاد لأساس عام",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for General Base Logarithmic Limit: $\\lim_{x \\to 0} \\frac{\\log_3(1 + x)}{x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية اللوغاريتم المعتاد لأساس عام): $\\lim_{x \\to 0} \\frac{\\log_3(1 + x)}{x}$.",
    "optionsEn": [
      "$\\log_3 e$",
      "$\\ln 3$",
      "$3$",
      "$1$"
    ],
    "optionsAr": [
      "لو_3 هـ",
      "لو_هـ 3",
      "3",
      "1"
    ],
    "correctAnswer": "$\\log_3 e$",
    "correctIndex": 0,
    "hintEn": "lim log_a(1+x)/x = log_a e = 1 / ln a.",
    "hintAr": "نهاية لو_أ(1+س)/س = لو_أ هـ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_14",
    "titleEn": "Difference of Exponentials Limit",
    "titleAr": "نهاية فرق دالتين أسيتين",
    "difficulty": "easy",
    "questionEn": "Evaluate the limit for Difference of Exponentials Limit: $\\lim_{x \\to 0} \\frac{e^{2x} - e^x}{x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية فرق دالتين أسيتين): $\\lim_{x \\to 0} \\frac{e^{2x} - e^x}{x}$.",
    "optionsEn": [
      "$1$",
      "$2$",
      "$0$",
      "$e$"
    ],
    "optionsAr": [
      "1",
      "2",
      "0",
      "هـ"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "(e^(2x)-1)/x - (e^x-1)/x = 2 - 1 = 1.",
    "hintAr": "أضف واطرح 1 في البسط ثم وزع على المقام.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_15",
    "titleEn": "Limit with Subtraction in Base",
    "titleAr": "نهاية كسرية بأس متغير عند الصفر",
    "difficulty": "easy",
    "questionEn": "Determine the limit Limit with Subtraction in Base: $\\lim_{x \\to 0} (1 - 3x)^{1/x}$.",
    "questionAr": "احسب قيمة النهاية (نهاية كسرية بأس متغير عند الصفر): $\\lim_{x \\to 0} (1 - 3x)^{1/x}$.",
    "optionsEn": [
      "$e^{-3}$",
      "$e^3$",
      "$-3$",
      "$\\frac{1}{3}$"
    ],
    "optionsAr": [
      "هـ⁻³",
      "هـ³",
      "-3",
      "1/3"
    ],
    "correctAnswer": "$e^{-3}$",
    "correctIndex": 0,
    "hintEn": "Formula gives e^(-3).",
    "hintAr": "القاعدة تعطي هـ^(-3).",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_16",
    "titleEn": "Derivative of Simple Natural Exponential",
    "titleAr": "مشتقة دالة أسية طبيعية بسيطة",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Simple Natural Exponential: $\\frac{d}{dx} [e^{5x}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية طبيعية بسيطة): $\\frac{d}{dx} [e^{5x}]$.",
    "optionsEn": [
      "$5e^{5x}$",
      "$e^{5x}$",
      "$5x e^{5x-1}$",
      "$\\frac{1}{5}e^{5x}$"
    ],
    "optionsAr": [
      "5هـ^(5س)",
      "هـ^(5س)",
      "5س هـ^(5س-1)",
      "(1/5)هـ^(5س)"
    ],
    "correctAnswer": "$5e^{5x}$",
    "correctIndex": 0,
    "hintEn": "d/dx[e^(kx)] = k e^(kx).",
    "hintAr": "مشتقة هـ^(أ س) = أ هـ^(أ س).",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_17",
    "titleEn": "Derivative with Quadratic Exponent",
    "titleAr": "مشتقة دالة أسية بأس تربيعي",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative with Quadratic Exponent: $\\frac{d}{dx} [e^{x^2}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية بأس تربيعي): $\\frac{d}{dx} [e^{x^2}]$.",
    "optionsEn": [
      "$2x e^{x^2}$",
      "$e^{x^2}$",
      "$x^2 e^{x^2-1}$",
      "$2 e^{x^2}$"
    ],
    "optionsAr": [
      "2س هـ^(س²)",
      "هـ^(س²)",
      "س² هـ^(س²-1)",
      "2هـ^(س²)"
    ],
    "correctAnswer": "$2x e^{x^2}$",
    "correctIndex": 0,
    "hintEn": "Chain rule: u' * e^u.",
    "hintAr": "قاعدة السلسلة: مشتقة الأس في الدالة نفسها.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_18",
    "titleEn": "Derivative with Negative Linear Exponent",
    "titleAr": "مشتقة دالة أسية بأس سالب",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative with Negative Linear Exponent: $\\frac{d}{dx} [e^{-3x}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية بأس سالب): $\\frac{d}{dx} [e^{-3x}]$.",
    "optionsEn": [
      "$-3e^{-3x}$",
      "$3e^{-3x}$",
      "$-\\frac{1}{3}e^{-3x}$",
      "$-3x e^{-3x}$"
    ],
    "optionsAr": [
      "-3هـ^(-3س)",
      "3هـ^(-3س)",
      "-(1/3)هـ^(-3س)",
      "-3س هـ^(-3س)"
    ],
    "correctAnswer": "$-3e^{-3x}$",
    "correctIndex": 0,
    "hintEn": "d/dx(e^(-3x)) = -3 e^(-3x).",
    "hintAr": "مشتقة -3س هي -3.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_19",
    "titleEn": "Derivative with Sine in Exponent",
    "titleAr": "مشتقة دالة أسية بأس مثلثي جا",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative with Sine in Exponent: $\\frac{d}{dx} [e^{\\sin x}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية بأس مثلثي جا): $\\frac{d}{dx} [e^{\\sin x}]$.",
    "optionsEn": [
      "$\\cos x \\cdot e^{\\sin x}$",
      "$-\\cos x \\cdot e^{\\sin x}$",
      "$\\sin x \\cdot e^{\\sin x}$",
      "$e^{\\cos x}$"
    ],
    "optionsAr": [
      "جتا س · هـ^(جا س)",
      "-جتا س · هـ^(جا س)",
      "جا س · هـ^(جا س)",
      "هـ^(جتا س)"
    ],
    "correctAnswer": "$\\cos x \\cdot e^{\\sin x}$",
    "correctIndex": 0,
    "hintEn": "Derivative of sin x is cos x.",
    "hintAr": "مشتقة جا س هي جتا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_20",
    "titleEn": "Derivative with Cosine in Exponent",
    "titleAr": "مشتقة دالة أسية بأس مثلثي جتا",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative with Cosine in Exponent: $\\frac{d}{dx} [e^{\\cos x}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية بأس مثلثي جتا): $\\frac{d}{dx} [e^{\\cos x}]$.",
    "optionsEn": [
      "$-\\sin x \\cdot e^{\\cos x}$",
      "$\\sin x \\cdot e^{\\cos x}$",
      "$\\cos x \\cdot e^{\\cos x}$",
      "$-e^{\\sin x}$"
    ],
    "optionsAr": [
      "-جا س · هـ^(جتا س)",
      "جا س · هـ^(جتا س)",
      "جتا س · هـ^(جتا س)",
      "-هـ^(جا س)"
    ],
    "correctAnswer": "$-\\sin x \\cdot e^{\\cos x}$",
    "correctIndex": 0,
    "hintEn": "Derivative of cos x is -sin x.",
    "hintAr": "مشتقة جتا س هي -جا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_21",
    "titleEn": "Derivative of General Exponential Base 2",
    "titleAr": "مشتقة دالة أسية ذات أساس 2",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of General Exponential Base 2: $\\frac{d}{dx} [2^x]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية ذات أساس 2): $\\frac{d}{dx} [2^x]$.",
    "optionsEn": [
      "$2^x \\ln 2$",
      "$x 2^{x-1}$",
      "$\\frac{2^x}{\\ln 2}$",
      "$2^x$"
    ],
    "optionsAr": [
      "2^س لو_هـ 2",
      "س 2^(س-1)",
      "2^س / لو_هـ 2",
      "2^س"
    ],
    "correctAnswer": "$2^x \\ln 2$",
    "correctIndex": 0,
    "hintEn": "d/dx(a^x) = a^x ln a.",
    "hintAr": "مشتقة أ^س = أ^س لو_هـ أ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_22",
    "titleEn": "Derivative of General Exponential Base 7 with Linear Exponent",
    "titleAr": "مشتقة دالة أسية ذات أساس 7 ومعامل في الأس",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of General Exponential Base 7 with Linear Exponent: $\\frac{d}{dx} [7^{2x}]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية ذات أساس 7 ومعامل في الأس): $\\frac{d}{dx} [7^{2x}]$.",
    "optionsEn": [
      "$2 \\cdot 7^{2x} \\ln 7$",
      "$7^{2x} \\ln 7$",
      "$2 \\cdot 7^{2x}$",
      "$14^{2x}$"
    ],
    "optionsAr": [
      "2 · 7^(2س) لو_هـ 7",
      "7^(2س) لو_هـ 7",
      "2 · 7^(2س)",
      "14^(2س)"
    ],
    "correctAnswer": "$2 \\cdot 7^{2x} \\ln 7$",
    "correctIndex": 0,
    "hintEn": "Multiply by derivative of exponent 2 and ln 7.",
    "hintAr": "اضرب في مشتقة الأس 2 وفي لو_هـ 7.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_23",
    "titleEn": "Derivative of General Base 10 Exponential",
    "titleAr": "مشتقة دالة أسية لأساس 10",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of General Base 10 Exponential: $\\frac{d}{dx} [10^x]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة دالة أسية لأساس 10): $\\frac{d}{dx} [10^x]$.",
    "optionsEn": [
      "$10^x \\ln 10$",
      "$x 10^{x-1}$",
      "$\\frac{10^x}{\\ln 10}$",
      "$10^x$"
    ],
    "optionsAr": [
      "10^س لو_هـ 10",
      "س 10^(س-1)",
      "10^س / لو_هـ 10",
      "10^س"
    ],
    "correctAnswer": "$10^x \\ln 10$",
    "correctIndex": 0,
    "hintEn": "d/dx(10^x) = 10^x ln 10.",
    "hintAr": "مشتقة 10^س = 10^س لو_هـ 10.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_24",
    "titleEn": "Derivative of Natural Log with Linear Argument",
    "titleAr": "مشتقة لوغاريتم طبيعي بمقدار خطي",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Natural Log with Linear Argument: $\\frac{d}{dx} [\\ln(3x)]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم طبيعي بمقدار خطي): $\\frac{d}{dx} [\\ln(3x)]$.",
    "optionsEn": [
      "$\\frac{1}{x}$",
      "$\\frac{3}{x}$",
      "$\\frac{1}{3x}$",
      "$3\\ln(3x)$"
    ],
    "optionsAr": [
      "1/س",
      "3/س",
      "1/(3س)",
      "3 لو_هـ(3س)"
    ],
    "correctAnswer": "$\\frac{1}{x}$",
    "correctIndex": 0,
    "hintEn": "d/dx[ln(kx)] = k/(kx) = 1/x.",
    "hintAr": "مشتقة لو_هـ(أ س) = أ/(أ س) = 1/س دائماً.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_25",
    "titleEn": "Derivative of Natural Log of Quadratic",
    "titleAr": "مشتقة لوغاريتم طبيعي لدالة تربيعية",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Natural Log of Quadratic: $\\frac{d}{dx} [\\ln(x^2 + 4)]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم طبيعي لدالة تربيعية): $\\frac{d}{dx} [\\ln(x^2 + 4)]$.",
    "optionsEn": [
      "$\\frac{2x}{x^2 + 4}$",
      "$\\frac{1}{x^2 + 4}$",
      "$\\frac{x}{x^2 + 4}$",
      "$\\frac{2}{x^2 + 4}$"
    ],
    "optionsAr": [
      "2س / (س² + 4)",
      "1 / (س² + 4)",
      "س / (س² + 4)",
      "2 / (س² + 4)"
    ],
    "correctAnswer": "$\\frac{2x}{x^2 + 4}$",
    "correctIndex": 0,
    "hintEn": "u'/u = 2x / (x^2 + 4).",
    "hintAr": "مشتقة ما بداخل اللوغاريتم مقسوماً عليه.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_26",
    "titleEn": "Derivative of Natural Log of Linear Binomial",
    "titleAr": "مشتقة لوغاريتم مقدار ذي حدين",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Natural Log of Linear Binomial: $\\frac{d}{dx} [\\ln(5x - 2)]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم مقدار ذي حدين): $\\frac{d}{dx} [\\ln(5x - 2)]$.",
    "optionsEn": [
      "$\\frac{5}{5x - 2}$",
      "$\\frac{1}{5x - 2}$",
      "$\\frac{-2}{5x - 2}$",
      "$5(5x - 2)$"
    ],
    "optionsAr": [
      "5 / (5س - 2)",
      "1 / (5س - 2)",
      "-2 / (5س - 2)",
      "5(5س - 2)"
    ],
    "correctAnswer": "$\\frac{5}{5x - 2}$",
    "correctIndex": 0,
    "hintEn": "u'/u = 5 / (5x - 2).",
    "hintAr": "مشتقة (5س - 2) هي 5.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_27",
    "titleEn": "Derivative of Natural Log of Sine",
    "titleAr": "مشتقة لوغاريتم جيب الزاوية",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Natural Log of Sine: $\\frac{d}{dx} [\\ln(\\sin x)]$ for $x \\in (0, \\pi)$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم جيب الزاوية): $\\frac{d}{dx} [\\ln(\\sin x)]$ حيث $x \\in (0, \\pi)$.",
    "optionsEn": [
      "$\\cot x$",
      "$\\tan x$",
      "$-\\cot x$",
      "$\\sec x$"
    ],
    "optionsAr": [
      "ظتا س",
      "ظا س",
      "-ظتا س",
      "قا س"
    ],
    "correctAnswer": "$\\cot x$",
    "correctIndex": 0,
    "hintEn": "cos x / sin x = cot x.",
    "hintAr": "مشتقة جا س / جا س = جتا س / جا س = ظتا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_28",
    "titleEn": "Derivative of Natural Log of Cosine",
    "titleAr": "مشتقة لوغاريتم جيب تمام الزاوية",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Natural Log of Cosine: $\\frac{d}{dx} [\\ln(\\cos x)]$ for $x \\in (0, \\pi/2)$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم جيب تمام الزاوية): $\\frac{d}{dx} [\\ln(\\cos x)]$ حيث $x \\in (0, \\pi/2)$.",
    "optionsEn": [
      "$-\\tan x$",
      "$\\tan x$",
      "$-\\cot x$",
      "$\\cot x$"
    ],
    "optionsAr": [
      "-ظا س",
      "ظا س",
      "-ظتا س",
      "ظتا س"
    ],
    "correctAnswer": "$-\\tan x$",
    "correctIndex": 0,
    "hintEn": "-sin x / cos x = -tan x.",
    "hintAr": "مشتقة جتا س / جتا س = -جا س / جتا س = -ظا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_29",
    "titleEn": "Derivative of Logarithm to Base 10",
    "titleAr": "مشتقة لوغاريتم معتاد لأساس 10",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Logarithm to Base 10: $\\frac{d}{dx} [\\log_{10}(x)]$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم معتاد لأساس 10): $\\frac{d}{dx} [\\log_{10}(x)]$.",
    "optionsEn": [
      "$\\frac{1}{x \\ln 10}$",
      "$\\frac{\\ln 10}{x}$",
      "$\\frac{1}{x}$",
      "$\\frac{10}{x}$"
    ],
    "optionsAr": [
      "1 / (س لو_هـ 10)",
      "لو_هـ 10 / س",
      "1/س",
      "10/س"
    ],
    "correctAnswer": "$\\frac{1}{x \\ln 10}$",
    "correctIndex": 0,
    "hintEn": "d/dx(log_a x) = 1/(x ln a).",
    "hintAr": "مشتقة لو_أ س = 1/(س لو_هـ أ).",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_30",
    "titleEn": "Derivative of Logarithm to Base 2",
    "titleAr": "مشتقة لوغاريتم لأساس 2",
    "difficulty": "easy",
    "questionEn": "Find the derivative with respect to x for Derivative of Logarithm to Base 2: $\\frac{d}{dx} [\\log_2(x^2)]$ for $x > 0$.",
    "questionAr": "أوجد المشتقة الأولى بالنسبة لـ س (مشتقة لوغاريتم لأساس 2): $\\frac{d}{dx} [\\log_2(x^2)]$ حيث $x > 0$.",
    "optionsEn": [
      "$\\frac{2}{x \\ln 2}$",
      "$\\frac{1}{x \\ln 2}$",
      "$\\frac{2x}{\\ln 2}$",
      "$\\frac{1}{2x \\ln 2}$"
    ],
    "optionsAr": [
      "2 / (س لو_هـ 2)",
      "1 / (س لو_هـ 2)",
      "2س / لو_هـ 2",
      "1 / (2س لو_هـ 2)"
    ],
    "correctAnswer": "$\\frac{2}{x \\ln 2}$",
    "correctIndex": 0,
    "hintEn": "log_2(x^2) = 2 log_2(x) => derivative is 2/(x ln 2).",
    "hintAr": "لو_2(س²) = 2 لو_2(س) ثم اشتق.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_31",
    "titleEn": "Slope of Tangent to Exponential at Origin",
    "titleAr": "ميل المماس لمنحنى أسّي عند نقطة الأصل",
    "difficulty": "easy",
    "questionEn": "Determine the slope of the tangent line to $y = e^{3x}$ at $x = 0$.",
    "questionAr": "عيّن ميل خط المماس للمنحنى $y = e^{3x}$ عند $x = 0$.",
    "optionsEn": [
      "$3$",
      "$1$",
      "$e^3$",
      "$0$"
    ],
    "optionsAr": [
      "3",
      "1",
      "هـ³",
      "0"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "y' = 3e^(3x). At x=0, y' = 3.",
    "hintAr": "المشتقة ص' = 3 هـ^(3س)، وعند س=0 تكون 3.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_32",
    "titleEn": "Slope of Tangent to Natural Log at Point (1, 0)",
    "titleAr": "ميل المماس للوغاريتم الطبيعي عند (1، 0)",
    "difficulty": "easy",
    "questionEn": "Calculate the gradient of the tangent to $y = \ln x$ at $x = 1$.",
    "questionAr": "احسب انحدار المماس لمنحنى $y = \ln x$ عند $x = 1$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$e$",
      "$-1$"
    ],
    "optionsAr": [
      "1",
      "0",
      "هـ",
      "-1"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "y' = 1/x => y'(1) = 1.",
    "hintAr": "ص' = 1/س وعند س=1 يكون الميل 1.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_33",
    "titleEn": "Slope of Normal Line to Exponential",
    "titleAr": "ميل العمودي على منحنى الدالة الأسية",
    "difficulty": "easy",
    "questionEn": "Find the slope of the normal to $y = e^{2x}$ at $x = 0$.",
    "questionAr": "أوجد ميل العمودي على المنحنى $y = e^{2x}$ عند $x = 0$.",
    "optionsEn": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$-2$",
      "$2$"
    ],
    "optionsAr": [
      "-1/2",
      "1/2",
      "-2",
      "2"
    ],
    "correctAnswer": "$-\\frac{1}{2}$",
    "correctIndex": 0,
    "hintEn": "m_tan = 2 => m_norm = -1/2.",
    "hintAr": "ميل المماس = 2 إذن ميل العمودي = -1/2.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_34",
    "titleEn": "Equation of Tangent Line to Exponential Curve",
    "titleAr": "معادلة المماس لمنحنى دالة أسية",
    "difficulty": "easy",
    "questionEn": "Find the equation of the tangent to $y = e^x$ at $(0, 1)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = e^x$ عند $(0، 1)$.",
    "optionsEn": [
      "$y = x + 1$",
      "$y = x - 1$",
      "$y = 2x + 1$",
      "$y = e x + 1$"
    ],
    "optionsAr": [
      "ص = س + 1",
      "ص = س - 1",
      "ص = 2س + 1",
      "ص = هـ س + 1"
    ],
    "correctAnswer": "$y = x + 1$",
    "correctIndex": 0,
    "hintEn": "m = 1, point (0, 1) => y - 1 = 1(x - 0) => y = x + 1.",
    "hintAr": "الميل = 1، المعادلة: ص - 1 = س - 0.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_35",
    "titleEn": "Equation of Tangent to Natural Log Curve",
    "titleAr": "معادلة المماس لمنحنى اللوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Find the equation of the tangent line to $y = \\ln x$ at $(1, 0)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = \\ln x$ عند $(1، 0)$.",
    "optionsEn": [
      "$y = x - 1$",
      "$y = x + 1$",
      "$y = -x + 1$",
      "$y = 2x - 2$"
    ],
    "optionsAr": [
      "ص = س - 1",
      "ص = س + 1",
      "ص = -س + 1",
      "ص = 2س - 2"
    ],
    "correctAnswer": "$y = x - 1$",
    "correctIndex": 0,
    "hintEn": "m = 1, point (1, 0) => y - 0 = 1(x - 1) => y = x - 1.",
    "hintAr": "الميل = 1 والنقطة (1، 0).",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_36",
    "titleEn": "Slope of Tangent to Base 2 Exponential",
    "titleAr": "ميل المماس للدالة الأسية لأساس 2",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent to $y = 2^x$ at $x = 0$.",
    "questionAr": "أوجد ميل المماس للمنحنى $y = 2^x$ عند $x = 0$.",
    "optionsEn": [
      "$\\ln 2$",
      "$1$",
      "$2$",
      "$0$"
    ],
    "optionsAr": [
      "لو_هـ 2",
      "1",
      "2",
      "0"
    ],
    "correctAnswer": "$\\ln 2$",
    "correctIndex": 0,
    "hintEn": "y' = 2^x ln 2 => at x=0, y' = ln 2.",
    "hintAr": "المشتقة ص' = 2^س لو_هـ 2، وعند س=0 تساوي لو_هـ 2.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_37",
    "titleEn": "Second Derivative of Natural Exponential",
    "titleAr": "المشتقة الثانية للدالة الأسية الطبيعية",
    "difficulty": "easy",
    "questionEn": "Find the second derivative of the exponential function $y = e^{3x}$.",
    "questionAr": "أوجد المشتقة الثانية للدالة الأسية $y = e^{3x}$.",
    "optionsEn": [
      "$9e^{3x}$",
      "$3e^{3x}$",
      "$6e^{3x}$",
      "$27e^{3x}$"
    ],
    "optionsAr": [
      "9هـ^(3س)",
      "3هـ^(3س)",
      "6هـ^(3س)",
      "27هـ^(3س)"
    ],
    "correctAnswer": "$9e^{3x}$",
    "correctIndex": 0,
    "hintEn": "y' = 3e^(3x) => y'' = 9e^(3x).",
    "hintAr": "اشتق مرتين متتاليتين.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_38",
    "titleEn": "Second Derivative of Natural Logarithm",
    "titleAr": "المشتقة الثانية للوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Determine $\\frac{d^2y}{dx^2}$ for the logarithmic function $y = \\ln x$.",
    "questionAr": "عيّن $\\frac{d^2y}{dx^2}$ للدالة اللوغاريتمية $y = \\ln x$.",
    "optionsEn": [
      "$-\\frac{1}{x^2}$",
      "$\\frac{1}{x^2}$",
      "$-\\frac{1}{x}$",
      "$\\frac{2}{x^3}$"
    ],
    "optionsAr": [
      "-1/س²",
      "1/س²",
      "-1/س",
      "2/س³"
    ],
    "correctAnswer": "$-\\frac{1}{x^2}$",
    "correctIndex": 0,
    "hintEn": "y' = 1/x => y'' = -1/x^2.",
    "hintAr": "ص' = س⁻¹ إذن ص'' = -س⁻².",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_39",
    "titleEn": "Product Rule with Exponential Function",
    "titleAr": "قاعدة ضرب دالة في دالة أسية",
    "difficulty": "easy",
    "questionEn": "Compute the derivative $\\frac{dy}{dx}$ of $y = x e^x$.",
    "questionAr": "احسب المشتقة الأولى $\\frac{dy}{dx}$ إذا كانت $y = x e^x$.",
    "optionsEn": [
      "$(x + 1)e^x$",
      "$x e^x$",
      "$e^x$",
      "$(x - 1)e^x$"
    ],
    "optionsAr": [
      "(س + 1)هـ^س",
      "س هـ^س",
      "هـ^س",
      "(س - 1)هـ^س"
    ],
    "correctAnswer": "$(x + 1)e^x$",
    "correctIndex": 0,
    "hintEn": "y' = 1*e^x + x*e^x = (x+1)e^x.",
    "hintAr": "مشتقة الأولى × الثانية + الأولى × مشتقة الثانية.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_40",
    "titleEn": "Value of Derivative at a Point",
    "titleAr": "قيمة المشتقة الأولى عند نقطة",
    "difficulty": "easy",
    "questionEn": "If $y = e^{x^2}$, find $y'(1)$.",
    "questionAr": "إذا كانت $y = e^{x^2}$، فأوجد قيمة $y'(1)$.",
    "optionsEn": [
      "$2e$",
      "$e$",
      "$2$",
      "$e^2$"
    ],
    "optionsAr": [
      "2هـ",
      "هـ",
      "2",
      "هـ²"
    ],
    "correctAnswer": "$2e$",
    "correctIndex": 0,
    "hintEn": "y' = 2x e^(x^2) => y'(1) = 2(1)e^1 = 2e.",
    "hintAr": "ص'(1) = 2(1)هـ¹ = 2هـ.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_41",
    "titleEn": "Basic Integral of Exponential",
    "titleAr": "التكامل الأساسي للدالة الأسية",
    "difficulty": "easy",
    "questionEn": "Determine the antiderivative $\\int e^{4x} dx$.",
    "questionAr": "احسب المشتقة العكسية للدالة الأسية: $\\int e^{4x} dx$.",
    "optionsEn": [
      "$\\frac{1}{4}e^{4x} + C$",
      "$4e^{4x} + C$",
      "$e^{4x} + C$",
      "$\\frac{1}{5}e^{5x} + C$"
    ],
    "optionsAr": [
      "(1/4)هـ^(4س) + ث",
      "4هـ^(4س) + ث",
      "هـ^(4س) + ث",
      "(1/5)هـ^(5س) + ث"
    ],
    "correctAnswer": "$\\frac{1}{4}e^{4x} + C$",
    "correctIndex": 0,
    "hintEn": "int e^(kx) dx = (1/k) e^(kx) + C.",
    "hintAr": "تكامل هـ^(أ س) = (1/أ) هـ^(أ س) + ث.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_42",
    "titleEn": "Integral with Negative Linear Exponent",
    "titleAr": "تكامل دالة أسية بأس سالب",
    "difficulty": "easy",
    "questionEn": "Compute the indefinite integral $\\int e^{-x} dx$.",
    "questionAr": "أوجد ناتج التكامل غير المحدد: $\\int e^{-x} dx$.",
    "optionsEn": [
      "$-e^{-x} + C$",
      "$e^{-x} + C$",
      "$-x e^{-x} + C$",
      "$-e^x + C$"
    ],
    "optionsAr": [
      "-هـ^(-س) + ث",
      "هـ^(-س) + ث",
      "-س هـ^(-س) + ث",
      "-هـ^س + ث"
    ],
    "correctAnswer": "$-e^{-x} + C$",
    "correctIndex": 0,
    "hintEn": "int e^(-x) dx = -e^(-x) + C.",
    "hintAr": "اقسم على معامل س (-1).",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_43",
    "titleEn": "Integral of General Exponential Base 3",
    "titleAr": "تكامل دالة أسية ذات أساس 3",
    "difficulty": "easy",
    "questionEn": "Integrate the exponential term with general constant base: $\\int 3^x dx$.",
    "questionAr": "احسب تكامل الدالة الأسية ذات الأساس الثابت 3: $\\int 3^x dx$.",
    "optionsEn": [
      "$\\frac{3^x}{\\ln 3} + C$",
      "$3^x \\ln 3 + C$",
      "$\\frac{3^{x+1}}{x+1} + C$",
      "$3^x + C$"
    ],
    "optionsAr": [
      "3^س / لو_هـ 3 + ث",
      "3^س لو_هـ 3 + ث",
      "3^(س+1)/(س+1) + ث",
      "3^س + ث"
    ],
    "correctAnswer": "$\\frac{3^x}{\\ln 3} + C$",
    "correctIndex": 0,
    "hintEn": "int a^x dx = a^x / ln a + C.",
    "hintAr": "تكامل أ^س = أ^س / لو_هـ أ + ث.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_44",
    "titleEn": "Integral Leading to Natural Log",
    "titleAr": "تكامل يعطي اللوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Find the logarithmic antiderivative $\\int \\frac{1}{x + 5} dx$ for $x > -5$.",
    "questionAr": "أوجد قيمة التكامل اللوغاريتمي: $\\int \\frac{1}{x + 5} dx$ (حيث $x > -5$).",
    "optionsEn": [
      "$\\ln|x + 5| + C$",
      "$\\frac{1}{(x + 5)^2} + C$",
      "$\\ln|x| + 5 + C$",
      "$5\\ln|x + 5| + C$"
    ],
    "optionsAr": [
      "لو_هـ|س + 5| + ث",
      "1/(س + 5)² + ث",
      "لو_هـ|س| + 5 + ث",
      "5 لو_هـ|س + 5| + ث"
    ],
    "correctAnswer": "$\\ln|x + 5| + C$",
    "correctIndex": 0,
    "hintEn": "Numerator is derivative of denominator.",
    "hintAr": "البسط مشتقة المقام فالناتج لوغاريتم المقام.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_45",
    "titleEn": "Integral with Linear Form in Denominator",
    "titleAr": "تكامل كسر ذي مقام خطي بمضاعف",
    "difficulty": "easy",
    "questionEn": "Determine the general integral of the linear reciprocal $\\int \\frac{1}{2x - 3} dx$.",
    "questionAr": "احسب التكامل العام لمقلوب المقدار الخطي: $\\int \\frac{1}{2x - 3} dx$.",
    "optionsEn": [
      "$\\frac{1}{2}\\ln|2x - 3| + C$",
      "$\\ln|2x - 3| + C$",
      "$2\\ln|2x - 3| + C$",
      "$-\\frac{1}{(2x-3)^2} + C$"
    ],
    "optionsAr": [
      "(1/2)لو_هـ|2س - 3| + ث",
      "لو_هـ|2س - 3| + ث",
      "2 لو_هـ|2س - 3| + ث",
      "-1/(2س - 3)² + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}\\ln|2x - 3| + C$",
    "correctIndex": 0,
    "hintEn": "Multiply numerator and outside by 2 and 1/2.",
    "hintAr": "اجعل البسط مشتقة المقام بالضرب في 2 والقسمة على 2.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_46",
    "titleEn": "Integral of Derivative over Quadratic Function",
    "titleAr": "تكامل كسر بسطه مشتقة مقامه التربيعي",
    "difficulty": "easy",
    "questionEn": "Evaluate the rational integral where the numerator is the derivative of the denominator: $\\int \\frac{2x}{x^2 + 9} dx$.",
    "questionAr": "احسب قيمة الكسر التكاملي الذي بسطه مشتقة مقامه: $\\int \\frac{2x}{x^2 + 9} dx$.",
    "optionsEn": [
      "$\\ln(x^2 + 9) + C$",
      "$\\frac{1}{2}\\ln(x^2 + 9) + C$",
      "$2\\ln(x^2 + 9) + C$",
      "$\\arctan(x/3) + C$"
    ],
    "optionsAr": [
      "لو_هـ(س² + 9) + ث",
      "(1/2)لو_هـ(س² + 9) + ث",
      "2 لو_هـ(س² + 9) + ث",
      "ظا⁻¹(س/3) + ث"
    ],
    "correctAnswer": "$\\ln(x^2 + 9) + C$",
    "correctIndex": 0,
    "hintEn": "d/dx(x^2+9) = 2x, so ln|denominator| + C.",
    "hintAr": "مشتقة س² + 9 هي 2س، إذن الناتج لوغاريتم المقام.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_47",
    "titleEn": "Standard Integral of Tangent",
    "titleAr": "تكامل دالة الظل",
    "difficulty": "easy",
    "questionEn": "Evaluate the trigonometric integral $\\int \\tan x \\, dx$ using the quotient identity.",
    "questionAr": "عيّن ناتج التكامل المثلثي للدالة $\\int \\tan x \\, dx$ باستخدام متطابقة القسمة.",
    "optionsEn": [
      "$\\ln|\\sec x| + C$",
      "$\\ln|\\cos x| + C$",
      "$\\sec^2 x + C$",
      "$-\\ln|\\sec x| + C$"
    ],
    "optionsAr": [
      "لو_هـ|قا س| + ث",
      "لو_هـ|جتا س| + ث",
      "قا² س + ث",
      "-لو_هـ|قا س| + ث"
    ],
    "correctAnswer": "$\\ln|\\sec x| + C$",
    "correctIndex": 0,
    "hintEn": "tan x = sin x / cos x = -(-sin x)/cos x => -ln|cos x| = ln|sec x|.",
    "hintAr": "ظا س = جا س / جتا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_48",
    "titleEn": "Standard Integral of Cotangent",
    "titleAr": "تكامل دالة ظل التمام",
    "difficulty": "easy",
    "questionEn": "Determine the indefinite integral of the cotangent function: $\\int \\cot x \\, dx$.",
    "questionAr": "أوجد التكامل غير المحدد لدالة ظل التمام: $\\int \\cot x \\, dx$.",
    "optionsEn": [
      "$\\ln|\\sin x| + C$",
      "$\\ln|\\csc x| + C$",
      "$-\\csc^2 x + C$",
      "$-\\ln|\\sin x| + C$"
    ],
    "optionsAr": [
      "لو_هـ|جا س| + ث",
      "لو_هـ|قتا س| + ث",
      "-قتا² س + ث",
      "-لو_هـ|جا س| + ث"
    ],
    "correctAnswer": "$\\ln|\\sin x| + C$",
    "correctIndex": 0,
    "hintEn": "cot x = cos x / sin x => ln|sin x| + C.",
    "hintAr": "ظتا س = جتا س / جا س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_49",
    "titleEn": "Integral of Substitution Type x e^(x^2)",
    "titleAr": "تكامل بالتعويض لدالة أسية بأس تربيعي",
    "difficulty": "easy",
    "questionEn": "Using substitution, calculate the antiderivative $\\int x e^{x^2} dx$.",
    "questionAr": "باستخدام طريقة التعويض، احسب قيمة المشتقة العكسية: $\\int x e^{x^2} dx$.",
    "optionsEn": [
      "$\\frac{1}{2}e^{x^2} + C$",
      "$e^{x^2} + C$",
      "$2e^{x^2} + C$",
      "$\\frac{1}{2}x^2 e^{x^2} + C$"
    ],
    "optionsAr": [
      "(1/2)هـ^(س²) + ث",
      "هـ^(س²) + ث",
      "2هـ^(س²) + ث",
      "(1/2)س² هـ^(س²) + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}e^{x^2} + C$",
    "correctIndex": 0,
    "hintEn": "Let u = x^2, du = 2x dx => (1/2) e^(x^2) + C.",
    "hintAr": "ضع ع = س² فتكون د ع = 2س د س.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_50",
    "titleEn": "Integral of ln(x)/x",
    "titleAr": "تكامل حاصل ضرب لوغاريتم س في مقلوبه",
    "difficulty": "easy",
    "questionEn": "Find $\\int \\frac{\\ln x}{x} dx$ for $x > 0$.",
    "questionAr": "أوجد $\\int \\frac{\\ln x}{x} dx$ حيث $x > 0$.",
    "optionsEn": [
      "$\\frac{1}{2}(\\ln x)^2 + C$",
      "$(\\ln x)^2 + C$",
      "$\\frac{1}{x^2} + C$",
      "$\\ln(\\ln x) + C$"
    ],
    "optionsAr": [
      "(1/2)(لو_هـ س)² + ث",
      "(لو_هـ س)² + ث",
      "1/س² + ث",
      "لو_هـ(لو_هـ س) + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}(\\ln x)^2 + C$",
    "correctIndex": 0,
    "hintEn": "u = ln x, du = 1/x dx => int u du = u^2 / 2 + C.",
    "hintAr": "الدالة في مشتقتها: تكامل ع د ع = ع²/2 + ث.",
    "stepByStepSolutionEn": [
      "1. Apply theorem.",
      "2. Simplify result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق النظرية الرياضية المباشرة.",
      "٢. تبسيط المقدار."
    ],
    "teacherTipEn": "Direct curriculum application.",
    "teacherTipAr": "تطبيق مباشر من كتاب الوزارة."
  },
  {
    "id": "calc_ch2_db_easy_51",
    "titleEn": "Euler Limit with Reciprocal Argument",
    "titleAr": "نهاية العدد النيبيري بأس مقلوب",
    "difficulty": "easy",
    "questionEn": "Compute the fundamental Euler limit: $\\lim_{x \\to 0} (1 + 4x)^{3/x}$.",
    "questionAr": "احسب نهاية أويلر الأساسية: $\\lim_{x \\to 0} (1 + 4x)^{3/x}$.",
    "optionsEn": [
      "$e^{12}$",
      "$e^7$",
      "$e^4$",
      "$e^3$"
    ],
    "optionsAr": [
      "$e^{12}$",
      "$e^7$",
      "$e^4$",
      "$e^3$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$e^{12}$",
    "hintEn": "Use the formula $\\lim_{x \\to 0} (1 + ax)^{b/x} = e^{ab}$.",
    "hintAr": "استخدم القانون $\\lim_{x \\to 0} (1 + ax)^{b/x} = e^{ab}$.",
    "teacherTipEn": "Notice that the product of the coefficient of $x$ inside and the numerator of the power gives the exponent directly.",
    "teacherTipAr": "حاصل ضرب معامل $x$ بالداخل في بسط الأس يعطي أس العدد $e$ مباشرة.",
    "stepByStepSolutionEn": [
      "Rewrite expression: $[(1 + 4x)^{1/(4x)}]^{12}$.",
      "Since $\\lim_{x \\to 0} (1 + 4x)^{1/(4x)} = e$, the limit is $e^{12}$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة المقدار: $[(1 + 4x)^{1/(4x)}]^{12}$.",
      "بما أن $\\lim_{x \\to 0} (1 + 4x)^{1/(4x)} = e$، فإن النهاية تساوي $e^{12}$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_52",
    "titleEn": "Derivative of Natural Logarithm Quotient",
    "titleAr": "مشتقة لوغاريتم طبيعي لحاصل قسمة",
    "difficulty": "easy",
    "questionEn": "Find the derivative of $y = \\ln\\left(\\frac{x+2}{x-2}\\right)$ with respect to $x$.",
    "questionAr": "أوجد مشتقة $y = \\ln\\left(\\frac{x+2}{x-2}\\right)$ بالنسبة إلى $x$.",
    "optionsEn": [
      "$-\\frac{4}{x^2 - 4}$",
      "$\\frac{4}{x^2 - 4}$",
      "$-\\frac{2}{x^2 - 4}$",
      "$\\frac{2x}{x^2 - 4}$"
    ],
    "optionsAr": [
      "$-\\frac{4}{x^2 - 4}$",
      "$\\frac{4}{x^2 - 4}$",
      "$-\\frac{2}{x^2 - 4}$",
      "$\\frac{2x}{x^2 - 4}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$-\\frac{4}{x^2 - 4}$",
    "hintEn": "Expand $\\ln(a/b) = \\ln(a) - \\ln(b)$ before taking the derivative.",
    "hintAr": "فك $\\ln(a/b) = \\ln(a) - \\ln(b)$ قبل إجراء الاشتقاق.",
    "teacherTipEn": "Logarithmic properties simplify differentiation drastically; never differentiate a complex fraction inside a log directly.",
    "teacherTipAr": "استخدام خواص اللوغاريتمات يبسط الاشتقاق كثيراً؛ لا تشتق كسراً معقداً بداخل اللوغاريتم مباشرة أبداً.",
    "stepByStepSolutionEn": [
      "Expand: $y = \\ln(x+2) - \\ln(x-2)$.",
      "Differentiate: $y' = \\frac{1}{x+2} - \\frac{1}{x-2}$.",
      "Common denominator: $y' = \\frac{(x-2) - (x+2)}{(x+2)(x-2)} = -\\frac{4}{x^2 - 4}$."
    ],
    "stepByStepSolutionAr": [
      "تفكيك اللوغاريتم: $y = \\ln(x+2) - \\ln(x-2)$.",
      "الاشتقاق: $y' = \\frac{1}{x+2} - \\frac{1}{x-2}$.",
      "توحيد المقامات: $y' = -\\frac{4}{x^2 - 4}$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_53",
    "titleEn": "Derivative of Exponential with Quadratic Power",
    "titleAr": "مشتقة دالة أسية ذات أس تربيعي",
    "difficulty": "easy",
    "questionEn": "Find the derivative of $f(x) = e^{3x^2 - 5x}$ at $x = 1$.",
    "questionAr": "أوجد مشتقة الدالة $f(x) = e^{3x^2 - 5x}$ عند $x = 1$.",
    "optionsEn": [
      "$e^{-2}$",
      "$-e^{-2}$",
      "$6e^{-2}$",
      "$-5e^{-2}$"
    ],
    "optionsAr": [
      "$e^{-2}$",
      "$-e^{-2}$",
      "$6e^{-2}$",
      "$-5e^{-2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$e^{-2}$",
    "hintEn": "Recall $\\frac{d}{dx}[e^{u}] = e^u \\cdot u'$.",
    "hintAr": "تذكر أن $\\frac{d}{dx}[e^{u}] = e^u \\cdot u'$.",
    "teacherTipEn": "Keep the exponential term untouched and multiply by the derivative of the exponent.",
    "teacherTipAr": "اترك الدالة الأسية كما هي واضرب في مشتقة الأس.",
    "stepByStepSolutionEn": [
      "Apply chain rule: $f'(x) = (6x - 5)e^{3x^2 - 5x}$.",
      "Evaluate at $x = 1$: $f'(1) = (6 - 5)e^{3 - 5} = e^{-2}$."
    ],
    "stepByStepSolutionAr": [
      "تطبيق قاعدة السلسلة: $f'(x) = (6x - 5)e^{3x^2 - 5x}$.",
      "التعويض عند $x = 1$: $f'(1) = (1)e^{-2} = e^{-2}$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_54",
    "titleEn": "Standard Limit of General Exponential Base",
    "titleAr": "النهاية القياسية لأساس أسي عام",
    "difficulty": "easy",
    "questionEn": "Find the value of the exponential limit: $\\lim_{x \\to 0} \\frac{5^x - 1}{x}$.",
    "questionAr": "أوجد قيمة النهاية للدالة الأسية: $\\lim_{x \\to 0} \\frac{5^x - 1}{x}$.",
    "optionsEn": [
      "$\\ln(5)$",
      "$\\log_{10}(5)$",
      "$5$",
      "$1$"
    ],
    "optionsAr": [
      "$\\ln(5)$",
      "$\\log_{10}(5)$",
      "$5$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\ln(5)$",
    "hintEn": "Recall $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.",
    "hintAr": "تذكر أن $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.",
    "teacherTipEn": "Natural logarithm $\\ln(a)$ is the base-$e$ log, not the common base-10 log.",
    "teacherTipAr": "اللوغاريتم الناتج هو اللوغاريتم الطبيعي للأساس $e$ وليس العشري.",
    "stepByStepSolutionEn": [
      "Identify standard limit form: $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln(a)$.",
      "For $a = 5$: result is $\\ln(5)$."
    ],
    "stepByStepSolutionAr": [
      "التعرف على الصورة القياسية: $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln(a)$.",
      "بالتعويض عن $a = 5$: الناتج هو $\\ln(5)$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_55",
    "titleEn": "Integration Producing Natural Logarithm",
    "titleAr": "تكامل يؤدي إلى اللوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Find the indefinite integral where the numerator is the derivative of the denominator: $\\int \\frac{2x + 3}{x^2 + 3x - 5} \\, dx$.",
    "questionAr": "أوجد التكامل غير المحدد للكسر الذي بسطه مشتقة مقامه: $\\int \\frac{2x + 3}{x^2 + 3x - 5} \\, dx$.",
    "optionsEn": [
      "$\\ln|x^2 + 3x - 5| + C$",
      "$\\frac{1}{2}\\ln|x^2 + 3x - 5| + C$",
      "$2\\ln|x^2 + 3x - 5| + C$",
      "$\\ln|2x + 3| + C$"
    ],
    "optionsAr": [
      "$\\ln|x^2 + 3x - 5| + C$",
      "$\\frac{1}{2}\\ln|x^2 + 3x - 5| + C$",
      "$2\\ln|x^2 + 3x - 5| + C$",
      "$\\ln|2x + 3| + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\ln|x^2 + 3x - 5| + C$",
    "hintEn": "Check if the numerator is the derivative of the denominator.",
    "hintAr": "تحقق مما إذا كان البسط هو مشتقة المقام.",
    "teacherTipEn": "Always test if the numerator is a scalar multiple of the derivative of the denominator first.",
    "teacherTipAr": "اختبر دائماً ما إذا كان البسط هو مشتقة المقام أو مضاعفاً لها قبل التفكير في طرق تكامل أخرى.",
    "stepByStepSolutionEn": [
      "Let $u = x^2 + 3x - 5$, then $du = (2x + 3)dx$.",
      "The integral becomes $\\int \\frac{du}{u} = \\ln|u| + C$.",
      "Substitute back: $\\ln|x^2 + 3x - 5| + C$."
    ],
    "stepByStepSolutionAr": [
      "بوضع $u = x^2 + 3x - 5$، نجد $du = (2x + 3)dx$.",
      "يصبح التكامل $\\int \\frac{du}{u} = \\ln|u| + C$.",
      "التعويض عن $u$: $\\ln|x^2 + 3x - 5| + C$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_56",
    "titleEn": "Tangent Line to Exponential Curve at Intercept",
    "titleAr": "المماس لمنحنى الدالة الأسية عند نقطة التقاطع الصادية",
    "difficulty": "easy",
    "questionEn": "Find the slope of the tangent to the curve $y = 3e^{2x}$ at its point of intersection with the y-axis.",
    "questionAr": "أوجد ميل المماس للمنحنى $y = 3e^{2x}$ عند نقطة تقاطعه مع محور الصادات.",
    "optionsEn": [
      "$6$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "optionsAr": [
      "$6$",
      "$3$",
      "$2$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$6$",
    "hintEn": "Intersection with the y-axis occurs when $x = 0$.",
    "hintAr": "التقاطع مع محور الصادات يحدث عندما $x = 0$.",
    "teacherTipEn": "Remember $e^0 = 1$, not 0!",
    "teacherTipAr": "تذكر أن $e^0 = 1$ وليس صفراً!",
    "stepByStepSolutionEn": [
      "Intersection with y-axis: $x = 0$.",
      "Differentiate: $y' = 6e^{2x}$.",
      "Evaluate at $x = 0$: $y' = 6e^0 = 6$."
    ],
    "stepByStepSolutionAr": [
      "التقاطع مع محور الصادات: $x = 0$.",
      "الاشتقاق: $y' = 6e^{2x}$.",
      "التعويض بـ $x = 0$: $y' = 6(1) = 6$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_57",
    "titleEn": "Indefinite Integral of Exponential with Linear Argument",
    "titleAr": "تكامل دالة أسية ذات أس خطي",
    "difficulty": "easy",
    "questionEn": "Determine the antiderivative of the scaled exponential: $\\int 4 e^{5x - 1} \\, dx$.",
    "questionAr": "عيّن المشتقة العكسية للدالة الأسية المضروبة في ثابت: $\\int 4 e^{5x - 1} \\, dx$.",
    "optionsEn": [
      "$\\frac{4}{5} e^{5x - 1} + C$",
      "$20 e^{5x - 1} + C$",
      "$\\frac{5}{4} e^{5x - 1} + C$",
      "$4 e^{5x - 1} + C$"
    ],
    "optionsAr": [
      "$\\frac{4}{5} e^{5x - 1} + C$",
      "$20 e^{5x - 1} + C$",
      "$\\frac{5}{4} e^{5x - 1} + C$",
      "$4 e^{5x - 1} + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{4}{5} e^{5x - 1} + C$",
    "hintEn": "Divide by the coefficient of $x$ in the linear exponent.",
    "hintAr": "اقسم على معامل $x$ الموجود في الأس الخطي.",
    "teacherTipEn": "In integration of $e^{ax+b}$, you divide by $a$, whereas in differentiation you multiply by $a$.",
    "teacherTipAr": "في تكامل $e^{ax+b}$ نقسم على المعامل $a$، بينما في التفاضل نضرب فيه.",
    "stepByStepSolutionEn": [
      "Use formula $\\int e^{kx+c} dx = \\frac{1}{k}e^{kx+c} + C$.",
      "Apply with constant multiple 4 and $k = 5$: $\\frac{4}{5}e^{5x-1} + C$."
    ],
    "stepByStepSolutionAr": [
      "طبق القاعدة: $\\int e^{kx+c} dx = \\frac{1}{k}e^{kx+c} + C$.",
      "الناتج بضرب الثابت 4 والقسمة على 5: $\\frac{4}{5}e^{5x-1} + C$."
    ]
  },
  {
    "id": "calc_ch2_db_easy_58",
    "titleEn": "Limit of Natural Logarithm Ratio",
    "titleAr": "نهاية نسبة اللوغاريتم الطبيعي",
    "difficulty": "easy",
    "questionEn": "Determine the logarithmic limit: $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$.",
    "questionAr": "عيّن قيمة النهاية اللوغاريتمية: $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x}$.",
    "optionsEn": [
      "$4$",
      "$1$",
      "$e^4$",
      "$\\frac{1}{4}$"
    ],
    "optionsAr": [
      "$4$",
      "$1$",
      "$e^4$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$4$",
    "hintEn": "Multiply and divide the denominator by 4 to match the argument.",
    "hintAr": "اضرب واقسم في المقام على 4 لتطابق زاوية اللوغاريتم.",
    "teacherTipEn": "Equivalently, this is the derivative of $\\ln(1+4x)$ at $x=0$, which is $\\frac{4}{1+0} = 4$.",
    "teacherTipAr": "بالمثل، هذه النهاية تمثل مشتقة $\\ln(1+4x)$ عند $x = 0$ وقيمتها 4.",
    "stepByStepSolutionEn": [
      "Rewrite: $\\lim_{x \\to 0} 4 \\cdot \\frac{\\ln(1 + 4x)}{4x}$.",
      "As $x \\to 0$, $4x \\to 0$, so the limit is $4(1) = 4$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة النهاية: $\\lim_{x \\to 0} 4 \\cdot \\frac{\\ln(1 + 4x)}{4x}$.",
      "عندما $x \\to 0$ فإن $4x \\to 0$، والناتج $4(1) = 4$."
    ]
  }
],
  medium: [
  {
    "id": "calc_ch2_db_med_51",
    "titleEn": "Limit of Rational Form Raised to Power x",
    "titleAr": "نهاية كسر جبري مرفوع لأس س عند المالانهاية",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Limit of Rational Form Raised to Power x): $\\lim_{x \\to \\infty} \\left(\\frac{x + 2}{x - 1}\\right)^x$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to \\infty} \\left(\\frac{x + 2}{x - 1}\\right)^x$.",
    "optionsEn": [
      "$e^3$",
      "$e$",
      "$e^2$",
      "$e^{-1}$"
    ],
    "optionsAr": [
      "هـ³",
      "هـ",
      "هـ²",
      "هـ⁻¹"
    ],
    "correctAnswer": "$e^3$",
    "correctIndex": 0,
    "hintEn": "((1 + 2/x) / (1 - 1/x))^x -> e^2 / e^(-1) = e^3.",
    "hintAr": "اكتب المقدار على صورة (1 + 2/س)^س / (1 - 1/س)^س فتكون هـ² / هـ⁻¹ = هـ³.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_52",
    "titleEn": "Limit with Scaled Rational Expression",
    "titleAr": "نهاية كسر جبري بأس مضاعف",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Limit with Scaled Rational Expression): $\\lim_{x \\to \\infty} \\left(\\frac{x + 4}{x + 1}\\right)^{2x}$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to \\infty} \\left(\\frac{x + 4}{x + 1}\\right)^{2x}$.",
    "optionsEn": [
      "$e^6$",
      "$e^8$",
      "$e^3$",
      "$e^4$"
    ],
    "optionsAr": [
      "هـ⁶",
      "هـ⁸",
      "هـ³",
      "هـ⁴"
    ],
    "correctAnswer": "$e^6$",
    "correctIndex": 0,
    "hintEn": "e^(4*2) / e^(1*2) = e^8 / e^2 = e^6.",
    "hintAr": "الأساس يؤول إلى هـ^(4-1) = هـ³، والأس الخارجي 2 يعطي هـ⁶.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_53",
    "titleEn": "Trigonometric Limit with Tangent and Cotangent",
    "titleAr": "نهاية مثلثية تتضمن ظا وظتا",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Trigonometric Limit with Tangent and Cotangent): $\\lim_{x \\to 0} (1 + 3\\tan^2 x)^{\\cot^2 x}$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to 0} (1 + 3\\tan^2 x)^{\\cot^2 x}$.",
    "optionsEn": [
      "$e^3$",
      "$e$",
      "$3e$",
      "$\\frac{1}{e^3}$"
    ],
    "optionsAr": [
      "هـ³",
      "هـ",
      "3هـ",
      "1/هـ³"
    ],
    "correctAnswer": "$e^3$",
    "correctIndex": 0,
    "hintEn": "Let y = tan^2 x -> 0. Limit is lim (1 + 3y)^(1/y) = e^3.",
    "hintAr": "بوضع ص = ظا² س فتؤول ص للصفر، وتصبح النهاية (1 + 3ص)^(1/ص) = هـ³.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_54",
    "titleEn": "Limit of Difference of Two Exponentials",
    "titleAr": "نهاية الفرق بين دالتين أسيتين",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Limit of Difference of Two Exponentials): $\\lim_{x \\to 0} \\frac{e^{5x} - e^{2x}}{x}$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to 0} \\frac{e^{5x} - e^{2x}}{x}$.",
    "optionsEn": [
      "$3$",
      "$5$",
      "$2$",
      "$e^3$"
    ],
    "optionsAr": [
      "3",
      "5",
      "2",
      "هـ³"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "(e^(5x)-1)/x - (e^(2x)-1)/x = 5 - 2 = 3.",
    "hintAr": "أضف واطرح 1 في البسط لتصبح (5 - 2) = 3.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_55",
    "titleEn": "Limit of Difference of General Exponentials",
    "titleAr": "نهاية الفرق بين دالتين أسيتين لأساسات عامة",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Limit of Difference of General Exponentials): $\\lim_{x \\to 0} \\frac{6^x - 2^x}{x}$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to 0} \\frac{6^x - 2^x}{x}$.",
    "optionsEn": [
      "$\\ln 3$",
      "$\\ln 4$",
      "$4$",
      "$\\frac{\\ln 6}{\\ln 2}$"
    ],
    "optionsAr": [
      "لو_هـ 3",
      "لو_هـ 4",
      "4",
      "لو_هـ 6 / لو_هـ 2"
    ],
    "correctAnswer": "$\\ln 3$",
    "correctIndex": 0,
    "hintEn": "ln 6 - ln 2 = ln(6/2) = ln 3.",
    "hintAr": "الناتج لو_هـ 6 - لو_هـ 2 = لو_هـ (6/2) = لو_هـ 3.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_56",
    "titleEn": "Logarithmic Limit with Sine Argument",
    "titleAr": "نهاية لوغاريتمية بدالة الجيب",
    "difficulty": "medium",
    "questionEn": "Evaluate the limit (Logarithmic Limit with Sine Argument): $\\lim_{x \\to 0} \\frac{\\ln(1 + \\sin 3x)}{x}$.",
    "questionAr": "احسب قيمة $\\lim_{x \\to 0} \\frac{\\ln(1 + \\sin 3x)}{x}$.",
    "optionsEn": [
      "$3$",
      "$1$",
      "$0$",
      "$\\ln 3$"
    ],
    "optionsAr": [
      "3",
      "1",
      "0",
      "لو_هـ 3"
    ],
    "correctAnswer": "$3$",
    "correctIndex": 0,
    "hintEn": "[ln(1 + sin 3x) / sin 3x] * [sin 3x / x] -> 1 * 3 = 3.",
    "hintAr": "اضرب واقسم على جا 3س فتكون 1 × 3 = 3.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_57",
    "titleEn": "Product Rule with Quadratic and Exponential",
    "titleAr": "مشتقة حاصل ضرب دالة تربيعية ودالة أسية",
    "difficulty": "medium",
    "questionEn": "For the curve $y = x^2 e^{2x}$, calculate the derivative value $\\left.\\frac{dy}{dx}\\right|_{x = 1}$.",
    "questionAr": "للمنحنى $y = x^2 e^{2x}$، احسب قيمة المشتقة الأولى $\\left.\\frac{dy}{dx}\\right|_{x = 1}$.",
    "optionsEn": [
      "$4e^2$",
      "$2e^2$",
      "$3e^2$",
      "$5e^2$"
    ],
    "optionsAr": [
      "4هـ²",
      "2هـ²",
      "3هـ²",
      "5هـ²"
    ],
    "correctAnswer": "$4e^2$",
    "correctIndex": 0,
    "hintEn": "y' = 2x e^(2x) + 2x^2 e^(2x) = 2x(1+x)e^(2x). At x=1: 2(2)e^2 = 4e^2.",
    "hintAr": "ص' = 2س هـ^(2س) + 2س² هـ^(2س). بالتعويض عن س=1 نحصل على 4هـ².",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_58",
    "titleEn": "Quotient Rule with Exponential Function",
    "titleAr": "مشتقة قسمة دالة أسية على متغير خطي",
    "difficulty": "medium",
    "questionEn": "Find the slope of the tangent to the curve $y = \\frac{e^x}{x}$ at the point where $x = 1$.",
    "questionAr": "أوجد ميل المماس لمنحنى الدالة $y = \\frac{e^x}{x}$ عند النقطة التي إحداثيها السيني $x = 1$.",
    "optionsEn": [
      "$0$",
      "$e$",
      "$1$",
      "$-e$"
    ],
    "optionsAr": [
      "0",
      "هـ",
      "1",
      "-هـ"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "y' = (x e^x - e^x) / x^2 = e^x(x-1)/x^2. At x=1, numerator is 0.",
    "hintAr": "مشتقة الكسر: هـ^س(س - 1)/س²، وعند س=1 تساوي صفراً.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_59",
    "titleEn": "Derivative of x ln(x) at x = e",
    "titleAr": "مشتقة س لو_هـ س عند س = هـ",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ for $y = x \\ln x$ evaluated at $x = e$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ للدالة $y = x \\ln x$ عند $x = e$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$e$",
      "$1 + e$"
    ],
    "optionsAr": [
      "2",
      "1",
      "هـ",
      "1 + هـ"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "y' = ln x + 1. At x=e: ln e + 1 = 1 + 1 = 2.",
    "hintAr": "ص' = لو_هـ س + 1، وعند س = هـ: 1 + 1 = 2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_60",
    "titleEn": "Derivative of ln(x) / x",
    "titleAr": "مشتقة قسمة لوغاريتم س على س",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ for $y = \\frac{\\ln x}{x}$ at $x = e$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ للدالة $y = \\frac{\\ln x}{x}$ عند $x = e$.",
    "optionsEn": [
      "$0$",
      "$\\frac{1}{e^2}$",
      "$-\\frac{1}{e^2}$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "0",
      "1/هـ²",
      "-1/هـ²",
      "1/هـ"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "y' = (1 - ln x) / x^2. At x=e, 1 - 1 = 0.",
    "hintAr": "ص' = (1 - لو_هـ س)/س² وعند س = هـ يكون البسط 1 - 1 = 0.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_61",
    "titleEn": "Derivative of Logarithm with Radicals via Laws",
    "titleAr": "مشتقة لوغاريتم جذر كسري باستخدام الخواص",
    "difficulty": "medium",
    "questionEn": "Differentiate the logarithmic radical function $y = \\ln\\sqrt{\\frac{x + 1}{x - 1}}$.",
    "questionAr": "اشتق دالة اللوغاريتم للجذر: $y = \\ln\\sqrt{\\frac{x + 1}{x - 1}}$.",
    "optionsEn": [
      "$-\\frac{1}{x^2 - 1}$",
      "$\\frac{1}{x^2 - 1}$",
      "$\\frac{x}{x^2 - 1}$",
      "$-\\frac{x}{x^2 - 1}$"
    ],
    "optionsAr": [
      "-1 / (س² - 1)",
      "1 / (س² - 1)",
      "س / (س² - 1)",
      "-س / (س² - 1)"
    ],
    "correctAnswer": "$-\\frac{1}{x^2 - 1}$",
    "correctIndex": 0,
    "hintEn": "y = (1/2)[ln(x+1) - ln(x-1)] => y' = (1/2)[1/(x+1) - 1/(x-1)] = -1/(x^2-1).",
    "hintAr": "استخدم خواص اللوغاريتم: ص = 1/2 [لو(س+1) - لو(س-1)].",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_62",
    "titleEn": "Derivative of Inverse Hyperbolic Form",
    "titleAr": "مشتقة لوغاريتم مجموع س والجذر التربيعي",
    "difficulty": "medium",
    "questionEn": "Find $\\frac{dy}{dx}$ for the inverse hyperbolic related form $y = \\ln(x + \\sqrt{x^2 + 1})$.",
    "questionAr": "أوجد $\\frac{dy}{dx}$ للدالة $y = \\ln(x + \\sqrt{x^2 + 1})$.",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{x^2 + 1}}$",
      "$\\frac{x}{\\sqrt{x^2 + 1}}$",
      "$\\frac{1}{x + \\sqrt{x^2 + 1}}$",
      "$\\sqrt{x^2 + 1}$"
    ],
    "optionsAr": [
      "1 / √(س² + 1)",
      "س / √(س² + 1)",
      "1 / (س + √(س² + 1))",
      "√(س² + 1)"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{x^2 + 1}}$",
    "correctIndex": 0,
    "hintEn": "y' = (1 + x/sqrt(x^2+1)) / (x + sqrt(x^2+1)) = 1/sqrt(x^2+1).",
    "hintAr": "باشتقاق ما بداخل اللوغاريتم وتبسيطه يختصر القوس بالكامل.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_63",
    "titleEn": "Derivative with Square Root in Exponent",
    "titleAr": "مشتقة دالة أسية بأس جذر تربيعي",
    "difficulty": "medium",
    "questionEn": "Determine the rate of change $\\left.\\frac{dy}{dx}\\right|_{x = 4}$ for the function $y = e^{\\sqrt{x}}$.",
    "questionAr": "عيّن معدل التغير $\\left.\\frac{dy}{dx}\\right|_{x = 4}$ لدالة الأس الكسري $y = e^{\\sqrt{x}}$.",
    "optionsEn": [
      "$\\frac{e^2}{4}$",
      "$\\frac{e^2}{2}$",
      "$e^2$",
      "$\\frac{e}{4}$"
    ],
    "optionsAr": [
      "هـ² / 4",
      "هـ² / 2",
      "هـ²",
      "هـ / 4"
    ],
    "correctAnswer": "$\\frac{e^2}{4}$",
    "correctIndex": 0,
    "hintEn": "y' = e^(sqrt(x)) / (2 sqrt(x)). At x=4: e^2 / (2*2) = e^2 / 4.",
    "hintAr": "ص' = هـ^(√س) / (2√س)، وبالتعويض عن س=4 تصبح هـ²/4.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_64",
    "titleEn": "Chain Rule on General Exponential with Polynomial Exponent",
    "titleAr": "قاعدة السلسلة لدالة أسية عامة بأس حدودي",
    "difficulty": "medium",
    "questionEn": "Given the general exponential function $y = 3^{x^2 - 1}$, evaluate $\\left.\\frac{dy}{dx}\\right|_{x = 1}$.",
    "questionAr": "إذا كانت الدالة الأسية ذات الأساس الثابت $y = 3^{x^2 - 1}$، احسب قيمة $\\left.\\frac{dy}{dx}\\right|_{x = 1}$.",
    "optionsEn": [
      "$2\\ln 3$",
      "$6\\ln 3$",
      "$2$",
      "$3\\ln 3$"
    ],
    "optionsAr": [
      "2 لو_هـ 3",
      "6 لو_هـ 3",
      "2",
      "3 لو_هـ 3"
    ],
    "correctAnswer": "$2\\ln 3$",
    "correctIndex": 0,
    "hintEn": "y' = 2x * 3^(x^2-1) * ln 3. At x=1: 2(1)(3^0) ln 3 = 2 ln 3.",
    "hintAr": "ص' = 2س · 3^(س²-1) · لو_هـ 3. بالتعويض عن س=1 نجد 2 لو_هـ 3.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_65",
    "titleEn": "Logarithmic Differentiation of Variable to Variable Power",
    "titleAr": "اشتقاق لوغاريتمي لدالة مرفوعة لمتغير س^س",
    "difficulty": "medium",
    "questionEn": "If $y = x^x$ for $x > 0$, find $\\frac{dy}{dx}$ at $x = 1$.",
    "questionAr": "إذا كانت $y = x^x$ حيث $x > 0$، فأوجد قيمة $\\frac{dy}{dx}$ عند $x = 1$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$e$",
      "$2$"
    ],
    "optionsAr": [
      "1",
      "0",
      "هـ",
      "2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "ln y = x ln x => y'/y = ln x + 1 => y' = x^x(ln x + 1). At x=1: 1^1(0 + 1) = 1.",
    "hintAr": "بأخذ اللوغاريتم للطرفين: لو ص = س لو س، إذن ص' = س^س (لو س + 1).",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_66",
    "titleEn": "Logarithmic Differentiation of x raised to ln(x)",
    "titleAr": "اشتقاق لوغاريتمي لدالة س أس لوغاريتم س",
    "difficulty": "medium",
    "questionEn": "If $y = x^{\\ln x}$ for $x > 0$, find $\\frac{dy}{dx}$ at $x = e$.",
    "questionAr": "إذا كانت $y = x^{\\ln x}$ حيث $x > 0$، فأوجد قيمة $\\frac{dy}{dx}$ عند $x = e$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$2e$",
      "$e$"
    ],
    "optionsAr": [
      "2",
      "1",
      "2هـ",
      "هـ"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "ln y = (ln x)^2 => y'/y = 2 ln x / x => y' = x^(ln x) * (2 ln x / x). At x=e: e^1 * (2*1/e) = 2.",
    "hintAr": "لو ص = (لو س)²، إذن ص'/ص = 2 لو س / س. عند س=هـ: ص' = 2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_67",
    "titleEn": "Implicit Differentiation of Combined Exponential Equation",
    "titleAr": "اشتقاق ضمني لمعادلة أسية مختلطة",
    "difficulty": "medium",
    "questionEn": "If $e^y + x y = e$, find $\\frac{dy}{dx}$ at the point $(0, 1)$.",
    "questionAr": "إذا كان $e^y + x y = e$، فأوجد $\\frac{dy}{dx}$ عند النقطة $(0، 1)$.",
    "optionsEn": [
      "$-\\frac{1}{e}$",
      "$\\frac{1}{e}$",
      "$-e$",
      "$0$"
    ],
    "optionsAr": [
      "-1/هـ",
      "1/هـ",
      "-هـ",
      "0"
    ],
    "correctAnswer": "$-\\frac{1}{e}$",
    "correctIndex": 0,
    "hintEn": "e^y y' + y + x y' = 0. At (0, 1): e^1 y' + 1 + 0 = 0 => y' = -1/e.",
    "hintAr": "باشتقاق الطرفين بالنسبة لـ س والتعويض بالنقطة (0، 1) ينتج ص' = -1/هـ.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_68",
    "titleEn": "Implicit Differentiation with Natural Log",
    "titleAr": "اشتقاق ضمني لدالة لوغاريتمية",
    "difficulty": "medium",
    "questionEn": "For the implicit equation $\\ln(x y) = x + y - 2$, find the value of $\\frac{dy}{dx}$ at the point $(1, 1)$.",
    "questionAr": "للمعادلة الضمنية $\\ln(x y) = x + y - 2$، أوجد قيمة $\\frac{dy}{dx}$ عند النقطة $(1، 1)$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "$2$"
    ],
    "optionsAr": [
      "-1",
      "1",
      "0",
      "2"
    ],
    "correctAnswer": "$-1$",
    "correctIndex": 0,
    "hintEn": "ln x + ln y = x + y - 2 => 1/x + y'/y = 1 + y'. At (1,1): 1 + y' = 1 + y' is identity; using y'/y - y' = 1 - 1/x => y'(1/y - 1) = 1 - 1/x gives -1.",
    "hintAr": "لو س + لو ص = س + ص - 2. باشتقاق الطرفين والتعويض نجد ص' = -1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_69",
    "titleEn": "Critical Point of x^2 e^(-x)",
    "titleAr": "نقطة حرجة للدالة س² هـ^(-س)",
    "difficulty": "medium",
    "questionEn": "Find the non-zero critical point $x$ for the function $f(x) = x^2 e^{-x}$.",
    "questionAr": "أوجد القيمة غير الصفرية لـ $x$ التي تمثل نقطة حرجة للدالة $f(x) = x^2 e^{-x}$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$-2$",
      "$e$"
    ],
    "optionsAr": [
      "2",
      "1",
      "-2",
      "هـ"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "f'(x) = 2x e^(-x) - x^2 e^(-x) = x(2 - x)e^(-x) = 0 => x = 0 or x = 2.",
    "hintAr": "المشتقة الأولى د'(س) = س(2 - س)هـ^(-س) = 0 إذن س = 2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_70",
    "titleEn": "Critical Point of ln(x) / x",
    "titleAr": "نقطة حرجة للدالة لوغاريتم س على س",
    "difficulty": "medium",
    "questionEn": "Find the critical number of $f(x) = \\frac{\\ln x}{x}$ for $x > 0$.",
    "questionAr": "أوجد النقطة الحرجة للدالة $f(x) = \\frac{\\ln x}{x}$ حيث $x > 0$.",
    "optionsEn": [
      "$e$",
      "$1$",
      "$e^2$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "هـ",
      "1",
      "هـ²",
      "1/هـ"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "f'(x) = (1 - ln x) / x^2 = 0 => ln x = 1 => x = e.",
    "hintAr": "د'(س) = (1 - لو_هـ س)/س² = 0 إذن لو_هـ س = 1 ومنها س = هـ.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_71",
    "titleEn": "Inflection Point of x e^(-x)",
    "titleAr": "نقطة انقلاب للدالة س هـ^(-س)",
    "difficulty": "medium",
    "questionEn": "Find the x-coordinate of the inflection point of $y = x e^{-x}$.",
    "questionAr": "أوجد الإحداثي السيني لنقطة الانقلاب للمنحنى $y = x e^{-x}$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$0$",
      "$-1$"
    ],
    "optionsAr": [
      "2",
      "1",
      "0",
      "-1"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "y' = (1-x)e^(-x) => y'' = -e^(-x) - (1-x)e^(-x) = (x-2)e^(-x) = 0 => x = 2.",
    "hintAr": "ص'' = (س - 2)هـ^(-س) = 0 عند س = 2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_72",
    "titleEn": "Tangent Line Parallel to X-Axis",
    "titleAr": "مماس أفقي مواز لمحور السينات",
    "difficulty": "medium",
    "questionEn": "At what value of $x$ does the curve $y = x - \\ln x$ have a horizontal tangent?",
    "questionAr": "عند أي قيمة لـ $x$ يكون للمنحنى $y = x - \\ln x$ مماس أفقي مواز لمحور السينات؟",
    "optionsEn": [
      "$1$",
      "$e$",
      "$0$",
      "$2$"
    ],
    "optionsAr": [
      "1",
      "هـ",
      "0",
      "2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "y' = 1 - 1/x = 0 => x = 1.",
    "hintAr": "المماس أفقي يعني ص' = 0، أي 1 - 1/س = 0 ومنها س = 1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_73",
    "titleEn": "Parametric Derivative with Exponential and Parameter t",
    "titleAr": "مشتقة بارامترية تتضمن دالة أسية",
    "difficulty": "medium",
    "questionEn": "If $x = e^{2t}$ and $y = e^{-2t}$, find $\\frac{dy}{dx}$ in terms of $t$.",
    "questionAr": "إذا كانت $x = e^{2t}$ و $y = e^{-2t}$، فأوجد $\\frac{dy}{dx}$ بدلالة $t$.",
    "optionsEn": [
      "$-e^{-4t}$",
      "$e^{-4t}$",
      "$-1$",
      "$-e^{4t}$"
    ],
    "optionsAr": [
      "-هـ^(-4ت)",
      "هـ^(-4ت)",
      "-1",
      "-هـ^(4ت)"
    ],
    "correctAnswer": "$-e^{-4t}$",
    "correctIndex": 0,
    "hintEn": "dy/dx = (dy/dt)/(dx/dt) = (-2e^(-2t)) / (2e^(2t)) = -e^(-4t).",
    "hintAr": "مشتقة ص بالنسبة لـ ت مقسومة على مشتقة س بالنسبة لـ ت.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_74",
    "titleEn": "Parametric Derivative with Natural Log",
    "titleAr": "مشتقة بارامترية مع اللوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "If $x = \\ln t$ and $y = t^2 + 1$, find $\\frac{dy}{dx}$ at $t = 2$.",
    "questionAr": "إذا كانت $x = \\ln t$ و $y = t^2 + 1$، فأوجد $\\frac{dy}{dx}$ عند $t = 2$.",
    "optionsEn": [
      "$8$",
      "$4$",
      "$2$",
      "$16$"
    ],
    "optionsAr": [
      "8",
      "4",
      "2",
      "16"
    ],
    "correctAnswer": "$8$",
    "correctIndex": 0,
    "hintEn": "dy/dx = (2t) / (1/t) = 2t^2. At t=2: 2(4) = 8.",
    "hintAr": "ص' = 2ت ÷ (1/ت) = 2ت²، وعند ت=2 تساوي 8.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_75",
    "titleEn": "Second Derivative of Product with Exponential",
    "titleAr": "المشتقة الثانية لحاصل ضرب دالة خطية في أسية",
    "difficulty": "medium",
    "questionEn": "Evaluate the second derivative $\\left.\\frac{d^2y}{dx^2}\\right|_{x = 0}$ for the product $y = (x + 2)e^x$.",
    "questionAr": "احسب المشتقة الثانية $\\left.\\frac{d^2y}{dx^2}\\right|_{x = 0}$ لحاصل الضرب $y = (x + 2)e^x$.",
    "optionsEn": [
      "$4$",
      "$2$",
      "$3$",
      "$5$"
    ],
    "optionsAr": [
      "4",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "y' = (x+3)e^x => y'' = (x+4)e^x. At x=0: 4e^0 = 4.",
    "hintAr": "ص' = (س+3)هـ^س، ص'' = (س+4)هـ^س. عند س=0 الناتج 4.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_76",
    "titleEn": "Integration by Parts: x e^x",
    "titleAr": "تكامل بالتجزيء: س هـ^س",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integration by Parts: x e^x: $\\int x e^x dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتجزيء: س هـ^س): $\\int x e^x dx$.",
    "optionsEn": [
      "$(x - 1)e^x + C$",
      "$(x + 1)e^x + C$",
      "$x^2 e^x + C$",
      "$\\frac{1}{2}x^2 e^x + C$"
    ],
    "optionsAr": [
      "(س - 1)هـ^س + ث",
      "(س + 1)هـ^س + ث",
      "س² هـ^س + ث",
      "(1/2)س² هـ^س + ث"
    ],
    "correctAnswer": "$(x - 1)e^x + C$",
    "correctIndex": 0,
    "hintEn": "u = x, dv = e^x dx => x e^x - int e^x dx = (x-1)e^x + C.",
    "hintAr": "تكامل بالتجزيء: ص = س، د ع = هـ^س د س.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_77",
    "titleEn": "Integration by Parts: x e^(2x)",
    "titleAr": "تكامل بالتجزيء: س هـ^(2س)",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integration by Parts: x e^(2x): $\\int x e^{2x} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتجزيء: س هـ^(2س)): $\\int x e^{2x} dx$.",
    "optionsEn": [
      "$\\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$",
      "$\\frac{1}{2}x e^{2x} + \\frac{1}{4}e^{2x} + C$",
      "$2x e^{2x} - 4e^{2x} + C$",
      "$\\frac{1}{2}x^2 e^{2x} + C$"
    ],
    "optionsAr": [
      "(1/2)س هـ^(2س) - (1/4)هـ^(2س) + ث",
      "(1/2)س هـ^(2س) + (1/4)هـ^(2س) + ث",
      "2س هـ^(2س) - 4هـ^(2س) + ث",
      "(1/2)س² هـ^(2س) + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$",
    "correctIndex": 0,
    "hintEn": "By parts: (1/2)x e^(2x) - (1/4)e^(2x) + C.",
    "hintAr": "تطبيق قاعدة التجزيء مع مراعاة معامل الأس 2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_78",
    "titleEn": "Integration by Parts: Natural Logarithm",
    "titleAr": "تكامل بالتجزيء للوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integration by Parts: Natural Logarithm: $\\int \\ln x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتجزيء للوغاريتم الطبيعي): $\\int \\ln x \\, dx$.",
    "optionsEn": [
      "$x \\ln x - x + C$",
      "$x \\ln x + x + C$",
      "$\\frac{1}{x} + C$",
      "$\\frac{1}{2}(\\ln x)^2 + C$"
    ],
    "optionsAr": [
      "س لو_هـ س - س + ث",
      "س لو_هـ س + س + ث",
      "1/س + ث",
      "(1/2)(لو_هـ س)² + ث"
    ],
    "correctAnswer": "$x \\ln x - x + C$",
    "correctIndex": 0,
    "hintEn": "u = ln x, dv = dx => x ln x - int x*(1/x) dx = x ln x - x + C.",
    "hintAr": "تكامل لو_هـ س بالتجزيء يعطي س لو_هـ س - س + ث.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_79",
    "titleEn": "Integration by Parts: x ln(x)",
    "titleAr": "تكامل بالتجزيء: س لوغاريتم س",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integration by Parts: x ln(x): $\\int x \\ln x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتجزيء: س لوغاريتم س): $\\int x \\ln x \\, dx$.",
    "optionsEn": [
      "$\\frac{1}{2}x^2 \\ln x - \\frac{1}{4}x^2 + C$",
      "$\\frac{1}{2}x^2 \\ln x + \\frac{1}{4}x^2 + C$",
      "$x^2 \\ln x - x^2 + C$",
      "$\\frac{1}{2}(\\ln x)^2 + C$"
    ],
    "optionsAr": [
      "(1/2)س² لو_هـ س - (1/4)س² + ث",
      "(1/2)س² لو_هـ س + (1/4)س² + ث",
      "س² لو_هـ س - س² + ث",
      "(1/2)(لو_هـ س)² + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}x^2 \\ln x - \\frac{1}{4}x^2 + C$",
    "correctIndex": 0,
    "hintEn": "u = ln x, dv = x dx => (x^2/2)ln x - int (x^2/2)(1/x)dx = (x^2/2)ln x - x^2/4 + C.",
    "hintAr": "تكامل بالتجزيء بوضع ص = لو_هـ س، د ع = س د س.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_80",
    "titleEn": "Integral of 1 / (x ln x)",
    "titleAr": "تكامل 1 / (س لوغاريتم س)",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of 1 / (x ln x): $\\int \\frac{1}{x \\ln x} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل 1 / (س لوغاريتم س)): $\\int \\frac{1}{x \\ln x} dx$.",
    "optionsEn": [
      "$\\ln|\\ln x| + C$",
      "$(\\ln x)^2 + C$",
      "$\\frac{1}{(\\ln x)^2} + C$",
      "$\\frac{1}{x} + C$"
    ],
    "optionsAr": [
      "لو_هـ|لو_هـ س| + ث",
      "(لو_هـ س)² + ث",
      "1/(لو_هـ س)² + ث",
      "1/س + ث"
    ],
    "correctAnswer": "$\\ln|\\ln x| + C$",
    "correctIndex": 0,
    "hintEn": "Numerator is (1/x), which is derivative of ln x => ln|ln x| + C.",
    "hintAr": "البسط (1/س) يمثل مشتقة المقام لو_هـ س.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_81",
    "titleEn": "Integral of Rational Function with Logarithmic Result",
    "titleAr": "تكامل كسر نسبي يعطي لوغاريتم طبيعي",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of Rational Function with Logarithmic Result: $\\int \\frac{2x + 3}{x^2 + 3x - 5} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل كسر نسبي يعطي لوغاريتم طبيعي): $\\int \\frac{2x + 3}{x^2 + 3x - 5} dx$.",
    "optionsEn": [
      "$\\ln|x^2 + 3x - 5| + C$",
      "$\\frac{1}{2}\\ln|x^2 + 3x - 5| + C$",
      "$2\\ln|x^2 + 3x - 5| + C$",
      "$\\frac{1}{(x^2+3x-5)^2} + C$"
    ],
    "optionsAr": [
      "لو_هـ|س² + 3س - 5| + ث",
      "(1/2)لو_هـ|س² + 3س - 5| + ث",
      "2 لو_هـ|س² + 3س - 5| + ث",
      "1/(س² + 3س - 5)² + ث"
    ],
    "correctAnswer": "$\\ln|x^2 + 3x - 5| + C$",
    "correctIndex": 0,
    "hintEn": "Numerator is exact derivative of quadratic denominator.",
    "hintAr": "البسط هو المشتقة التامة للمقام.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_82",
    "titleEn": "Integral with Exponential in Denominator",
    "titleAr": "تكامل كسر مقامه يحتوي دالة أسية",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Exponential in Denominator: $\\int \\frac{e^x}{e^x + 5} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل كسر مقامه يحتوي دالة أسية): $\\int \\frac{e^x}{e^x + 5} dx$.",
    "optionsEn": [
      "$\\ln(e^x + 5) + C$",
      "$\\frac{1}{e^x + 5} + C$",
      "$e^x \\ln(e^x + 5) + C$",
      "$\\frac{1}{5}\\ln(e^x + 5) + C$"
    ],
    "optionsAr": [
      "لو_هـ(هـ^س + 5) + ث",
      "1/(هـ^س + 5) + ث",
      "هـ^س لو_هـ(هـ^س + 5) + ث",
      "(1/5)لو_هـ(هـ^س + 5) + ث"
    ],
    "correctAnswer": "$\\ln(e^x + 5) + C$",
    "correctIndex": 0,
    "hintEn": "d/dx(e^x + 5) = e^x => ln(e^x + 5) + C.",
    "hintAr": "البسط مشتقة المقام تماماً.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_83",
    "titleEn": "Integral with Composite Exponential Power",
    "titleAr": "تكامل بالتعويض لدالة أسية بأس تكعيبي",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Composite Exponential Power: $\\int x^2 e^{x^3} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتعويض لدالة أسية بأس تكعيبي): $\\int x^2 e^{x^3} dx$.",
    "optionsEn": [
      "$\\frac{1}{3}e^{x^3} + C$",
      "$3e^{x^3} + C$",
      "$e^{x^3} + C$",
      "$\\frac{1}{3}x^3 e^{x^3} + C$"
    ],
    "optionsAr": [
      "(1/3)هـ^(س³) + ث",
      "3هـ^(س³) + ث",
      "هـ^(س³) + ث",
      "(1/3)س³ هـ^(س³) + ث"
    ],
    "correctAnswer": "$\\frac{1}{3}e^{x^3} + C$",
    "correctIndex": 0,
    "hintEn": "u = x^3 => du = 3x^2 dx => (1/3)e^(x^3) + C.",
    "hintAr": "مشتقة الأس س³ هي 3س²، نضرب في 3 ونقسم على 3.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_84",
    "titleEn": "Integral of Secant Function",
    "titleAr": "تكامل دالة القاطع قا س",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of Secant Function: $\\int \\sec x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل دالة القاطع قا س): $\\int \\sec x \\, dx$.",
    "optionsEn": [
      "$\\ln|\\sec x + \\tan x| + C$",
      "$\\ln|\\sec x - \\tan x| + C$",
      "$\\sec x \\tan x + C$",
      "$\\ln|\\tan x| + C$"
    ],
    "optionsAr": [
      "لو_هـ|قا س + ظا س| + ث",
      "لو_هـ|قا س - ظا س| + ث",
      "قا س ظا س + ث",
      "لو_هـ|ظا س| + ث"
    ],
    "correctAnswer": "$\\ln|\\sec x + \\tan x| + C$",
    "correctIndex": 0,
    "hintEn": "Multiply numerator and denominator by (sec x + tan x).",
    "hintAr": "اضرب بسطاً ومقاماً في (قا س + ظا س).",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_85",
    "titleEn": "Integral of Cosecant Function",
    "titleAr": "تكامل دالة قاطع التمام قتا س",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of Cosecant Function: $\\int \\csc x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل دالة قاطع التمام قتا س): $\\int \\csc x \\, dx$.",
    "optionsEn": [
      "$-\\ln|\\csc x + \\cot x| + C$",
      "$\\ln|\\csc x + \\cot x| + C$",
      "$-\\csc x \\cot x + C$",
      "$\\ln|\\sin x| + C$"
    ],
    "optionsAr": [
      "-لو_هـ|قتا س + ظتا س| + ث",
      "لو_هـ|قتا س + ظتا س| + ث",
      "-قتا س ظتا س + ث",
      "لو_هـ|جا س| + ث"
    ],
    "correctAnswer": "$-\\ln|\\csc x + \\cot x| + C$",
    "correctIndex": 0,
    "hintEn": "Multiply by (csc x + cot x) => -ln|csc x + cot x| + C.",
    "hintAr": "اضرب بسطاً ومقاماً في (قتا س + ظتا س).",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_86",
    "titleEn": "Definite Integral of Simple Exponential",
    "titleAr": "تكامل محدد لدالة أسية بسيطة",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral for Definite Integral of Simple Exponential: $\\int_0^1 e^{2x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^1 e^{2x} dx$.",
    "optionsEn": [
      "$\\frac{e^2 - 1}{2}$",
      "$e^2 - 1$",
      "$\\frac{e^2}{2}$",
      "$\\frac{e^2 + 1}{2}$"
    ],
    "optionsAr": [
      "(هـ² - 1) / 2",
      "هـ² - 1",
      "هـ² / 2",
      "(هـ² + 1) / 2"
    ],
    "correctAnswer": "$\\frac{e^2 - 1}{2}$",
    "correctIndex": 0,
    "hintEn": "[(1/2)e^(2x)]_0^1 = (1/2)(e^2 - 1).",
    "hintAr": "[(1/2)هـ^(2س)] من 0 إلى 1 = (هـ² - 1)/2.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_87",
    "titleEn": "Definite Integral of 1/x",
    "titleAr": "تكامل محدد لمقلوب س",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral for Definite Integral of 1/x: $\\int_1^e \\frac{1}{x} dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_1^e \\frac{1}{x} dx$.",
    "optionsEn": [
      "$1$",
      "$e$",
      "$0$",
      "$\\ln 2$"
    ],
    "optionsAr": [
      "1",
      "هـ",
      "0",
      "لو_هـ 2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "[ln x]_1^e = ln e - ln 1 = 1 - 0 = 1.",
    "hintAr": "[لو_هـ س] من 1 إلى هـ = 1 - 0 = 1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_88",
    "titleEn": "Definite Integral of ln(x)",
    "titleAr": "تكامل محدد للوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral for Definite Integral of ln(x): $\\int_1^e \\ln x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_1^e \\ln x \\, dx$.",
    "optionsEn": [
      "$1$",
      "$e - 1$",
      "$e$",
      "$2$"
    ],
    "optionsAr": [
      "1",
      "هـ - 1",
      "هـ",
      "2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "[x ln x - x]_1^e = (e - e) - (0 - 1) = 1.",
    "hintAr": "باستخدام التجزيء: [س لو س - س] من 1 إلى هـ = 1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_89",
    "titleEn": "Integral of Exponential with Linear Radical Substitution",
    "titleAr": "تكامل بالتعويض لدالة أسية بأس جذر س",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of Exponential with Linear Radical Substitution: $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل بالتعويض لدالة أسية بأس جذر س): $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} dx$.",
    "optionsEn": [
      "$2e^{\\sqrt{x}} + C$",
      "$\\frac{1}{2}e^{\\sqrt{x}} + C$",
      "$e^{\\sqrt{x}} + C$",
      "$2\\sqrt{x}e^{\\sqrt{x}} + C$"
    ],
    "optionsAr": [
      "2هـ^(√س) + ث",
      "(1/2)هـ^(√س) + ث",
      "هـ^(√س) + ث",
      "2√س هـ^(√س) + ث"
    ],
    "correctAnswer": "$2e^{\\sqrt{x}} + C$",
    "correctIndex": 0,
    "hintEn": "Let u = sqrt(x), du = 1/(2 sqrt(x)) dx => 2 int e^u du = 2e^u + C.",
    "hintAr": "ضع ع = √س، فتكون د ع = 1/(2√س) د س.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_90",
    "titleEn": "Integral with Reciprocal in Exponent",
    "titleAr": "تكامل دالة أسية بأس مقلوب المتغير",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Reciprocal in Exponent: $\\int \\frac{e^{1/x}}{x^2} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل دالة أسية بأس مقلوب المتغير): $\\int \\frac{e^{1/x}}{x^2} dx$.",
    "optionsEn": [
      "$-e^{1/x} + C$",
      "$e^{1/x} + C$",
      "$-x e^{1/x} + C$",
      "$\\frac{1}{x}e^{1/x} + C$"
    ],
    "optionsAr": [
      "-هـ^(1/س) + ث",
      "هـ^(1/س) + ث",
      "-س هـ^(1/س) + ث",
      "(1/س)هـ^(1/س) + ث"
    ],
    "correctAnswer": "$-e^{1/x} + C$",
    "correctIndex": 0,
    "hintEn": "Let u = 1/x, du = -1/x^2 dx => -e^u + C = -e^(1/x) + C.",
    "hintAr": "مشتقة (1/س) هي -1/س².",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_91",
    "titleEn": "Product of Exponential Bases",
    "titleAr": "تكامل حاصل ضرب دالتين أسيتين لأساسات مختلفة",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Product of Exponential Bases: $\\int 2^x \\cdot 3^x dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل حاصل ضرب دالتين أسيتين لأساسات مختلفة): $\\int 2^x \\cdot 3^x dx$.",
    "optionsEn": [
      "$\\frac{6^x}{\\ln 6} + C$",
      "$6^x \\ln 6 + C$",
      "$\\frac{2^x 3^x}{\\ln 2 \\ln 3} + C$",
      "$\\frac{6^{x+1}}{x+1} + C$"
    ],
    "optionsAr": [
      "6^س / لو_هـ 6 + ث",
      "6^س لو_هـ 6 + ث",
      "(2^س 3^س)/(لو 2 لو 3) + ث",
      "6^(س+1)/(س+1) + ث"
    ],
    "correctAnswer": "$\\frac{6^x}{\\ln 6} + C$",
    "correctIndex": 0,
    "hintEn": "2^x * 3^x = 6^x => int 6^x dx = 6^x / ln 6 + C.",
    "hintAr": "2^س × 3^س = 6^س وتكاملها 6^س / لو_هـ 6 + ث.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_92",
    "titleEn": "Integral with Power of Logarithm in Denominator",
    "titleAr": "تكامل كسر يحوي قوة للوغاريتم في المقام",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Power of Logarithm in Denominator: $\\int \\frac{1}{x (\\ln x)^2} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل كسر يحوي قوة للوغاريتم في المقام): $\\int \\frac{1}{x (\\ln x)^2} dx$.",
    "optionsEn": [
      "$-\\frac{1}{\\ln x} + C$",
      "$\\frac{1}{\\ln x} + C$",
      "$-\\frac{2}{\\ln x} + C$",
      "$\\ln|\\ln x| + C$"
    ],
    "optionsAr": [
      "-1 / لو_هـ س + ث",
      "1 / لو_هـ س + ث",
      "-2 / لو_هـ س + ث",
      "لو_هـ|لو_هـ س| + ث"
    ],
    "correctAnswer": "$-\\frac{1}{\\ln x} + C$",
    "correctIndex": 0,
    "hintEn": "int (ln x)^(-2) * (1/x) dx = -(ln x)^(-1) + C.",
    "hintAr": "تكامل دالة مرفوعة لأس مضروبة في مشتقتها.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_93",
    "titleEn": "Integral with Trigonometric Denominator Leading to Log",
    "titleAr": "تكامل مثلثي مقامه يحوي دالة جيب تمام",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Trigonometric Denominator Leading to Log: $\\int \\frac{\\sin x}{2 + \\cos x} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل مثلثي مقامه يحوي دالة جيب تمام): $\\int \\frac{\\sin x}{2 + \\cos x} dx$.",
    "optionsEn": [
      "$-\\ln(2 + \\cos x) + C$",
      "$\\ln(2 + \\cos x) + C$",
      "$-\\ln|\\sin x| + C$",
      "$\\frac{1}{(2+\\cos x)^2} + C$"
    ],
    "optionsAr": [
      "-لو_هـ(2 + جتا س) + ث",
      "لو_هـ(2 + جتا س) + ث",
      "-لو_هـ|جا س| + ث",
      "1/(2 + جتا س)² + ث"
    ],
    "correctAnswer": "$-\\ln(2 + \\cos x) + C$",
    "correctIndex": 0,
    "hintEn": "Derivative of 2 + cos x is -sin x, so -ln(2 + cos x) + C.",
    "hintAr": "مشتقة 2 + جتا س هي -جا س.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_94",
    "titleEn": "Integral with Tangent Derivative in Numerator",
    "titleAr": "تكامل يحوي مشتقة الظل في البسط",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral with Tangent Derivative in Numerator: $\\int \\frac{\\sec^2 x}{3 + \\tan x} dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل يحوي مشتقة الظل في البسط): $\\int \\frac{\\sec^2 x}{3 + \\tan x} dx$.",
    "optionsEn": [
      "$\\ln|3 + \\tan x| + C$",
      "$\\frac{1}{3 + \\tan x} + C$",
      "$\\tan(3 + x) + C$",
      "$\\ln|\\sec x| + C$"
    ],
    "optionsAr": [
      "لو_هـ|3 + ظا س| + ث",
      "1/(3 + ظا س) + ث",
      "ظا(3 + س) + ث",
      "لو_هـ|قا س| + ث"
    ],
    "correctAnswer": "$\\ln|3 + \\tan x| + C$",
    "correctIndex": 0,
    "hintEn": "Numerator sec^2 x is derivative of denominator => ln|3 + tan x| + C.",
    "hintAr": "البسط مشتقة المقام تماماً.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_95",
    "titleEn": "Integral of Exponential Composite with Sine",
    "titleAr": "تكامل دالة أسية مضروبة في مشتقة أسها المثلثي",
    "difficulty": "medium",
    "questionEn": "Evaluate the indefinite integral for Integral of Exponential Composite with Sine: $\\int e^{\\sin x} \\cos x \\, dx$.",
    "questionAr": "احسب التكامل غير المحدد (تكامل دالة أسية مضروبة في مشتقة أسها المثلثي): $\\int e^{\\sin x} \\cos x \\, dx$.",
    "optionsEn": [
      "$e^{\\sin x} + C$",
      "$-e^{\\sin x} + C$",
      "$e^{\\cos x} + C$",
      "$\\cos x \\cdot e^{\\sin x} + C$"
    ],
    "optionsAr": [
      "هـ^(جا س) + ث",
      "-هـ^(جا س) + ث",
      "هـ^(جتا س) + ث",
      "جتا س · هـ^(جا س) + ث"
    ],
    "correctAnswer": "$e^{\\sin x} + C$",
    "correctIndex": 0,
    "hintEn": "u = sin x, du = cos x dx => int e^u du = e^(sin x) + C.",
    "hintAr": "مشتقة جا س هي جتا س فتكامل الدالة هو هـ^(جا س) + ث.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_96",
    "titleEn": "Definite Integral of x e^x",
    "titleAr": "تكامل محدد لحاصل ضرب س في هـ^س",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral for Definite Integral of x e^x: $\\int_0^1 x e^x dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_0^1 x e^x dx$.",
    "optionsEn": [
      "$1$",
      "$e - 1$",
      "$e$",
      "$2$"
    ],
    "optionsAr": [
      "1",
      "هـ - 1",
      "هـ",
      "2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "[(x - 1)e^x]_0^1 = 0 - (-1) = 1.",
    "hintAr": "[(س - 1)هـ^س] من 0 إلى 1 = 0 - (-1) = 1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_97",
    "titleEn": "Definite Integral of x ln(x)",
    "titleAr": "تكامل محدد لحاصل ضرب س في لوغاريتم س",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral for Definite Integral of x ln(x): $\\int_1^e x \\ln x \\, dx$.",
    "questionAr": "احسب قيمة التكامل المحدد $\\int_1^e x \\ln x \\, dx$.",
    "optionsEn": [
      "$\\frac{e^2 + 1}{4}$",
      "$\\frac{e^2 - 1}{4}$",
      "$\\frac{e^2}{4}$",
      "$\\frac{e^2 + 1}{2}$"
    ],
    "optionsAr": [
      "(هـ² + 1) / 4",
      "(هـ² - 1) / 4",
      "هـ² / 4",
      "(هـ² + 1) / 2"
    ],
    "correctAnswer": "$\\frac{e^2 + 1}{4}$",
    "correctIndex": 0,
    "hintEn": "[(x^2/2)ln x - x^2/4]_1^e = (e^2/2 - e^2/4) - (0 - 1/4) = e^2/4 + 1/4 = (e^2+1)/4.",
    "hintAr": "بالتجزيء ثم التعويض بحدود التكامل من 1 إلى هـ.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_98",
    "titleEn": "Area Under Natural Log Curve",
    "titleAr": "المساحة المحصورة تحت منحنى اللوغاريتم الطبيعي",
    "difficulty": "medium",
    "questionEn": "Find the area of the region bounded by $y = \\ln x$, the x-axis, and the line $x = e$.",
    "questionAr": "أوجد مساحة المنطقة المحددة بالمنحنى $y = \\ln x$ ومحور السينات والمستقيم $x = e$.",
    "optionsEn": [
      "$1$",
      "$e - 1$",
      "$e$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "1",
      "هـ - 1",
      "هـ",
      "1/2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Area = int_1^e ln x dx = [x ln x - x]_1^e = 1.",
    "hintAr": "المساحة = تكامل لو_هـ س من 1 إلى هـ = 1 وحدة مربعة.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_99",
    "titleEn": "Area Under Exponential Curve",
    "titleAr": "المساحة المحصورة تحت منحنى الدالة الأسية",
    "difficulty": "medium",
    "questionEn": "Find the area under the curve $y = e^x$ above the x-axis from $x = 0$ to $x = 2$.",
    "questionAr": "أوجد مساحة المنطقة تحت المنحنى $y = e^x$ وفوق محور السينات من $x = 0$ إلى $x = 2$.",
    "optionsEn": [
      "$e^2 - 1$",
      "$e^2$",
      "$e^2 + 1$",
      "$\\frac{e^2 - 1}{2}$"
    ],
    "optionsAr": [
      "هـ² - 1",
      "هـ²",
      "هـ² + 1",
      "(هـ² - 1) / 2"
    ],
    "correctAnswer": "$e^2 - 1$",
    "correctIndex": 0,
    "hintEn": "int_0^2 e^x dx = [e^x]_0^2 = e^2 - 1.",
    "hintAr": "تكامل هـ^س من 0 إلى 2 = هـ² - 1.",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_100",
    "titleEn": "Volume of Revolution of Exponential Curve",
    "titleAr": "حجم الجسم الناشئ من دوران منحنى أسّي",
    "difficulty": "medium",
    "questionEn": "Find the volume generated by revolving $y = e^x$ around the x-axis from $x = 0$ to $x = 1$.",
    "questionAr": "أوجد حجم الجسم الناشئ من دوران المنطقة المحصورة بين $y = e^x$ ومحور السينات حول محور السينات من $x = 0$ إلى $x = 1$.",
    "optionsEn": [
      "$\\frac{\\pi}{2}(e^2 - 1)$",
      "$\\pi(e^2 - 1)$",
      "$\\frac{\\pi}{2}e^2$",
      "$\\pi e^2$"
    ],
    "optionsAr": [
      "(ط/2)(هـ² - 1)",
      "ط(هـ² - 1)",
      "(ط/2)هـ²",
      "ط هـ²"
    ],
    "correctAnswer": "$\\frac{\\pi}{2}(e^2 - 1)$",
    "correctIndex": 0,
    "hintEn": "V = pi int_0^1 (e^x)^2 dx = pi int_0^1 e^(2x) dx = (pi/2)(e^2 - 1).",
    "hintAr": "الحجم = ط × تكامل (هـ^س)² د س = (ط/2)(هـ² - 1).",
    "stepByStepSolutionEn": [
      "1. Apply specialized calculus methods.",
      "2. Simplify step by step."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق الطرق الرياضية المتخصصة.",
      "٢. التبسيط خطوة بخطوة."
    ],
    "teacherTipEn": "Standard Thanaweya Amma exam level question.",
    "teacherTipAr": "سؤال امتحانات الثانوية العامة المعتاد."
  },
  {
    "id": "calc_ch2_db_med_101",
    "titleEn": "Logarithmic Differentiation of Variable Base and Exponent",
    "titleAr": "الاشتقاق اللوغاريتمي لمتغير مرفوع لمتغير",
    "difficulty": "medium",
    "questionEn": "If $y = x^x$ for $x > 0$, find the slope of the tangent at $x = e$.",
    "questionAr": "إذا كان $y = x^x$ حيث $x > 0$، فأوجد ميل المماس عند $x = e$.",
    "optionsEn": [
      "$2 e^e$",
      "$e^e$",
      "$e \\cdot e^e$",
      "$0$"
    ],
    "optionsAr": [
      "$2 e^e$",
      "$e^e$",
      "$e \\cdot e^e$",
      "$0$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$2 e^e$",
    "hintEn": "Apply logarithmic differentiation by taking $\\ln$ of both sides first.",
    "hintAr": "طبق الاشتقاق اللوغاريتمي بأخذ $\\ln$ للطرفين أولاً.",
    "teacherTipEn": "Whenever you see $[f(x)]^{g(x)}$, standard power or exponential rules do NOT apply; you must use logarithmic differentiation.",
    "teacherTipAr": "كلما كان المتغير في الأساس والأس $[f(x)]^{g(x)}$، لا تطبق قواعد القوى أو الأس العادي، بل الاشتقاق اللوغاريتمي حصراً.",
    "stepByStepSolutionEn": [
      "Take log: $\\ln y = x \\ln x$.",
      "Differentiate: $\\frac{y'}{y} = \\ln x + 1$.",
      "Solve for $y'$: $y' = x^x(1 + \\ln x)$.",
      "Evaluate at $x = e$: $y' = e^e(1 + 1) = 2e^e$."
    ],
    "stepByStepSolutionAr": [
      "أخذ اللوغاريتم: $\\ln y = x \\ln x$.",
      "الاشتقاق: $\\frac{y'}{y} = 1 + \\ln x$.",
      "حساب $y'$: $y' = x^x(1 + \\ln x)$.",
      "التعويض عند $x = e$: $y' = 2e^e$."
    ]
  },
  {
    "id": "calc_ch2_db_med_102",
    "titleEn": "Definite Integral of Tangent via Logarithm",
    "titleAr": "تكامل محدد لدالة الظل باستخدام اللوغاريتم",
    "difficulty": "medium",
    "questionEn": "Compute the definite integral: $\\int_{0}^{\\pi/4} \\tan(x) \\, dx$.",
    "questionAr": "احسب ناتج التكامل المحدد: $\\int_{0}^{\\pi/4} \\tan(x) \\, dx$.",
    "optionsEn": [
      "$\\frac{1}{2}\\ln(2)$",
      "$\\ln(2)$",
      "$\\frac{1}{2}$",
      "$1$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}\\ln(2)$",
      "$\\ln(2)$",
      "$\\frac{1}{2}$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{1}{2}\\ln(2)$",
    "hintEn": "Write $\\tan x = \\frac{\\sin x}{\\cos x}$ and integrate to $\\ln|\\sec x|$.",
    "hintAr": "اكتب $\\tan x = \\frac{\\sin x}{\\cos x}$ وتكاملها هو $\\ln|\\sec x|$.",
    "teacherTipEn": "Remember that $\\ln(\\sqrt{2}) = \\frac{1}{2}\\ln(2)$ using power properties of logarithms.",
    "teacherTipAr": "تذكر أن $\\ln(\\sqrt{2}) = \\frac{1}{2}\\ln(2)$ باستخدام خواص قوى اللوغاريتم.",
    "stepByStepSolutionEn": [
      "Antiderivative of $\\tan x$ is $\\ln|\\sec x|$.",
      "Upper limit: $\\ln|\\sec(\\pi/4)| = \\ln(\\sqrt{2})$.",
      "Lower limit: $\\ln|\\sec(0)| = \\ln(1) = 0$.",
      "Subtract: $\\ln(\\sqrt{2}) = \\frac{1}{2}\\ln(2)$."
    ],
    "stepByStepSolutionAr": [
      "الدالة المقابلة لـ $\\tan x$ هي $\\ln|\\sec x|$.",
      "الحد العلوي: $\\ln(\\sqrt{2})$.",
      "الحد السفلي: $\\ln(1) = 0$.",
      "الناتج: $\\ln(\\sqrt{2}) = \\frac{1}{2}\\ln(2)$."
    ]
  },
  {
    "id": "calc_ch2_db_med_103",
    "titleEn": "Limit with Difference of Exponentials",
    "titleAr": "نهاية فرق دالتين أسيتين",
    "difficulty": "medium",
    "questionEn": "Compute the difference quotient limit: $\\lim_{x \\to 0} \\frac{e^{5x} - e^{2x}}{x}$.",
    "questionAr": "احسب نهاية فرق الدالتين الأسيتين: $\\lim_{x \\to 0} \\frac{e^{5x} - e^{2x}}{x}$.",
    "optionsEn": [
      "$3$",
      "$5$",
      "$2$",
      "$7$"
    ],
    "optionsAr": [
      "$3$",
      "$5$",
      "$2$",
      "$7$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$3$",
    "hintEn": "Split into two standard limits: $\\frac{e^{5x}-1}{x} - \\frac{e^{2x}-1}{x}$.",
    "hintAr": "قسم المقدار إلى نهايتين قياسيتين بطرح وإضافة 1.",
    "teacherTipEn": "Alternatively, factor out $e^{2x}$: $e^{2x} \\cdot \\frac{e^{3x} - 1}{x} \\to 1 \\times 3 = 3$.",
    "teacherTipAr": "بالمثل، إخراج $e^{2x}$ عاملاً مشتركاً يعطي $e^{2x}\\frac{e^{3x}-1}{x} \\to 1 \\times 3 = 3$.",
    "stepByStepSolutionEn": [
      "Rewrite: $\\lim_{x \\to 0} \\left[ \\frac{e^{5x} - 1}{x} - \\frac{e^{2x} - 1}{x} \\right]$.",
      "Apply standard limits: $5 - 2 = 3$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة المقدار: $\\lim_{x \\to 0} [\\frac{e^{5x}-1}{x} - \\frac{e^{2x}-1}{x}]$.",
      "تطبيق النهايات القياسية: $5 - 2 = 3$."
    ]
  },
  {
    "id": "calc_ch2_db_med_104",
    "titleEn": "Tangent Line Perpendicular to Coordinate Line",
    "titleAr": "مماس عمودي على مستقيم معطى لمنحنى لوغاريتمي",
    "difficulty": "medium",
    "questionEn": "Find the x-coordinate of the point on the curve $y = \\ln(2x - 1)$ where the tangent line is perpendicular to the line $x + 6y - 5 = 0$.",
    "questionAr": "أوجد الإحداثي السيني للنقطة على المنحنى $y = \\ln(2x - 1)$ التي يكون عندها المماس عمودياً على المستقيم $x + 6y - 5 = 0$.",
    "optionsEn": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{3}$",
      "$1$"
    ],
    "optionsAr": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{3}$",
      "$1$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{2}{3}$",
    "hintEn": "Find the slope of the given line, then take its negative reciprocal.",
    "hintAr": "احسب ميل المستقيم المعطى، ثم خذ المعكوس الجمعي لمقلوبه.",
    "teacherTipEn": "Always check that the resulting $x$ is in the domain of $\\ln(2x-1)$ ($2x - 1 > 0 \\implies x > 0.5$). Since $\\frac{2}{3} > 0.5$, it is valid.",
    "teacherTipAr": "تحقق دائماً أن $x$ تقع في مجال الدالة اللوغاريتمية ($x > 0.5$). بما أن $\\frac{2}{3} > 0.5$، فالحل مقبول.",
    "stepByStepSolutionEn": [
      "Slope of given line: $m = -1/6 \\implies m_T = 6$.",
      "Differentiate curve: $y' = \\frac{2}{2x - 1}$.",
      "Solve $\\frac{2}{2x - 1} = 6 \\implies 2x - 1 = 1/3 \\implies x = 2/3$."
    ],
    "stepByStepSolutionAr": [
      "ميل المستقيم: $-1/6 \\implies m_T = 6$.",
      "مشتقة المنحنى: $y' = \\frac{2}{2x - 1}$.",
      "حل المعادلة: $\\frac{2}{2x - 1} = 6 \\implies x = 2/3$."
    ]
  },
  {
    "id": "calc_ch2_db_med_105",
    "titleEn": "Integration by Substitution with Logarithm in Denominator",
    "titleAr": "تكامل بالتعويض بوجود لوغاريتم في المقام",
    "difficulty": "medium",
    "questionEn": "Compute the nested logarithmic integral: $\\int \\frac{1}{x \\ln(x) \\ln(\\ln x)} \\, dx$.",
    "questionAr": "احسب التكامل اللوغاريتمي المتداخل: $\\int \\frac{1}{x \\ln(x) \\ln(\\ln x)} \\, dx$.",
    "optionsEn": [
      "$\\ln|\\ln(\\ln x)| + C$",
      "$\\frac{1}{2}[\\ln(\\ln x)]^2 + C$",
      "$\\ln|\\ln x| + C$",
      "$\\frac{1}{\\ln(\\ln x)} + C$"
    ],
    "optionsAr": [
      "$\\ln|\\ln(\\ln x)| + C$",
      "$\\frac{1}{2}[\\ln(\\ln x)]^2 + C$",
      "$\\ln|\\ln x| + C$",
      "$\\frac{1}{\\ln(\\ln x)} + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\ln|\\ln(\\ln x)| + C$",
    "hintEn": "Notice that $\\frac{d}{dx}[\\ln(\\ln x)] = \\frac{1}{x \\ln x}$.",
    "hintAr": "لاحظ أن مشتقة $\\ln(\\ln x)$ هي $\\frac{1}{x \\ln x}$.",
    "teacherTipEn": "A beautiful iterated logarithm integral: each $\\ln$ in the denominator serves as the derivative factor for the next.",
    "teacherTipAr": "تكامل لوغاريتمي تكراري رائع: كل لوغاريتم يمثل معامل اشتقاق للوغاريتم الأعمق.",
    "stepByStepSolutionEn": [
      "Substitute $u = \\ln(\\ln x)$.",
      "Differential: $du = \\frac{1}{x \\ln x} dx$.",
      "Integrate: $\\int \\frac{1}{u} du = \\ln|u| + C$.",
      "Substitute back: $\\ln|\\ln(\\ln x)| + C$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $u = \\ln(\\ln x)$.",
      "التفاضلي: $du = \\frac{1}{x \\ln x} dx$.",
      "إجراء التكامل: $\\int \\frac{du}{u} = \\ln|u| + C$.",
      "التعويض عن $u$: $\\ln|\\ln(\\ln x)| + C$."
    ]
  },
  {
    "id": "calc_ch2_db_med_106",
    "titleEn": "Related Rates with Exponential Growth",
    "titleAr": "معدلات زمنية مع نمو أسي",
    "difficulty": "medium",
    "questionEn": "A bacteria culture grows according to the law $N(t) = 500 e^{0.2 t}$, where $t$ is measured in hours. At what rate is the population increasing at $t = 5\\text{ hours}$?",
    "questionAr": "تنمو مستعمرة بكتيريا وفق القانون $N(t) = 500 e^{0.2 t}$ حيث $t$ بالساعات. ما معدل تزايد عدد البكتيريا عند $t = 5\\text{ ساعات}$؟",
    "optionsEn": [
      "$100 e\\text{ bacteria/hr}$",
      "$500 e\\text{ bacteria/hr}$",
      "$50 e\\text{ bacteria/hr}$",
      "$100\\text{ bacteria/hr}$"
    ],
    "optionsAr": [
      "$100 e\\text{ بكتيريا/ساعة}$",
      "$500 e\\text{ بكتيريا/ساعة}$",
      "$50 e\\text{ بكتيريا/ساعة}$",
      "$100\\text{ بكتيريا/ساعة}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$100 e\\text{ bacteria/hr}$",
    "hintEn": "Differentiate $N(t)$ with respect to $t$.",
    "hintAr": "اشتق $N(t)$ بالنسبة للزمن $t$.",
    "teacherTipEn": "In exponential models $N(t) = N_0 e^{kt}$, the rate of change is always directly proportional to the current population: $N'(t) = k N(t)$.",
    "teacherTipAr": "في نماذج النمو الأسي، يتناسب معدل التغير طردياً مع الحجم الحالي للعشيرة: $N'(t) = k N(t)$.",
    "stepByStepSolutionEn": [
      "Differentiate: $N'(t) = 500(0.2)e^{0.2t} = 100e^{0.2t}$.",
      "Substitute $t = 5$: $N'(5) = 100e^{1} = 100e$."
    ],
    "stepByStepSolutionAr": [
      "الاشتقاق: $N'(t) = 100e^{0.2t}$.",
      "التعويض عن $t = 5$: $N'(5) = 100e$."
    ]
  },
  {
    "id": "calc_ch2_db_med_107",
    "titleEn": "Critical Point of Logarithmic Product",
    "titleAr": "النقطة الحرجة لحاصل ضرب لوغاريتمي",
    "difficulty": "medium",
    "questionEn": "Find the x-coordinate of the stationary point of the function $f(x) = x^2 \\ln(x)$ for $x > 0$.",
    "questionAr": "أوجد الإحداثي السيني للنقطة الحرجة للدالة $f(x) = x^2 \\ln(x)$ حيث $x > 0$.",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{e}}$",
      "$\\frac{1}{e}$",
      "$\\sqrt{e}$",
      "$e$"
    ],
    "optionsAr": [
      "$\\frac{1}{\\sqrt{e}}$",
      "$\\frac{1}{e}$",
      "$\\sqrt{e}$",
      "$e$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{1}{\\sqrt{e}}$",
    "hintEn": "Use product rule to find $f'(x)$ and solve $f'(x) = 0$.",
    "hintAr": "استخدم قاعدة مشتقة الضرب لحساب $f'(x)$ ثم حل $f'(x) = 0$.",
    "teacherTipEn": "Remember that $e^{-1/2} = \\frac{1}{e^{1/2}} = \\frac{1}{\\sqrt{e}}$.",
    "teacherTipAr": "تذكر أن $e^{-1/2} = \\frac{1}{\\sqrt{e}}$.",
    "stepByStepSolutionEn": [
      "Differentiate: $f'(x) = 2x \\ln x + x$.",
      "Factor: $f'(x) = x(2\\ln x + 1)$.",
      "Set $f'(x) = 0$: $2\\ln x = -1 \\implies \\ln x = -1/2$.",
      "Exponentiate: $x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$."
    ],
    "stepByStepSolutionAr": [
      "الاشتقاق: $f'(x) = 2x\\ln x + x$.",
      "التحليل: $f'(x) = x(2\\ln x + 1)$.",
      "وضع $f'(x) = 0$: $\\ln x = -1/2$.",
      "التحويل للصورة الأسية: $x = \\frac{1}{\\sqrt{e}}$."
    ]
  },
  {
    "id": "calc_ch2_db_med_108",
    "titleEn": "Indefinite Integral of Rational Transcendental Expression",
    "titleAr": "تكامل كسر يحتوي على دالة أسية في المقام",
    "difficulty": "medium",
    "questionEn": "Determine the antiderivative using exponential substitution: $\\int \\frac{1}{1 + e^x} \\, dx$.",
    "questionAr": "عيّن المشتقة العكسية باستخدام التعويض الأسي: $\\int \\frac{1}{1 + e^x} \\, dx$.",
    "optionsEn": [
      "$x - \\ln(1 + e^x) + C$",
      "$\\ln(1 + e^x) + C$",
      "$-e^{-x} + C$",
      "$\\frac{1}{1 + e^x} + C$"
    ],
    "optionsAr": [
      "$x - \\ln(1 + e^x) + C$",
      "$\\ln(1 + e^x) + C$",
      "$-e^{-x} + C$",
      "$\\frac{1}{1 + e^x} + C$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$x - \\ln(1 + e^x) + C$",
    "hintEn": "Write the numerator as $(1 + e^x) - e^x$ to split the fraction.",
    "hintAr": "اكتب البسط على الصورة $(1 + e^x) - e^x$ لتجزئة الكسر.",
    "teacherTipEn": "Adding and subtracting $e^x$ in the numerator is the cleanest algebraic trick for integrating $\\frac{1}{1+e^x}$.",
    "teacherTipAr": "إضافة وطرح $e^x$ في البسط هي أذكى حيلة جبرية لتكامل $\\frac{1}{1+e^x}$.",
    "stepByStepSolutionEn": [
      "Rewrite integrand: $\\frac{1}{1+e^x} = \\frac{(1+e^x) - e^x}{1+e^x} = 1 - \\frac{e^x}{1+e^x}$.",
      "Integrate first term: $\\int 1 \\, dx = x$.",
      "Integrate second term: $\\int \\frac{e^x}{1+e^x} \\, dx = \\ln(1+e^x)$.",
      "Combine: $x - \\ln(1+e^x) + C$."
    ],
    "stepByStepSolutionAr": [
      "تجزئة الكسر: $\\frac{1}{1+e^x} = 1 - \\frac{e^x}{1+e^x}$.",
      "تكامل الحد الأول: $\\int 1 dx = x$.",
      "تكامل الحد الثاني: $\\int \\frac{e^x}{1+e^x} dx = \\ln(1+e^x)$.",
      "الناتج النهائي: $x - \\ln(1+e^x) + C$."
    ]
  },
  {
    "id": "calc_ch2_db_med_109",
    "titleEn": "Tangent Line to Logarithmic Curve Passing Through Origin",
    "titleAr": "مماس للمنحنى اللوغاريتمي يمر بنقطة الأصل",
    "difficulty": "medium",
    "questionEn": "Find the equation of the tangent line to the curve $y = \\ln(x)$ that passes through the origin $(0, 0)$.",
    "questionAr": "أوجد معادلة المماس لمنحنى الدالة $y = \\ln(x)$ المار بنقطة الأصل $(0, 0)$.",
    "optionsEn": [
      "$y = \\frac{1}{e} x$",
      "$y = e x$",
      "$y = x$",
      "$y = \\frac{1}{2e} x$"
    ],
    "optionsAr": [
      "$y = \\frac{1}{e} x$",
      "$y = e x$",
      "$y = x$",
      "$y = \\frac{1}{2e} x$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$y = \\frac{1}{e} x$",
    "hintEn": "Equate the derivative $1/x_0$ to the slope from the origin $\\frac{\\ln x_0}{x_0}$.",
    "hintAr": "ساوِ المشتقة $1/x_0$ بالميل من نقطة الأصل $\\frac{\\ln x_0}{x_0}$.",
    "teacherTipEn": "This classic tangent establishes the fundamental inequality $\\ln(x) \\leq \\frac{x}{e}$ for all $x > 0$.",
    "teacherTipAr": "هذا المماس الشهير يثبت المتراجحة الأساسية $\\ln(x) \\leq \\frac{x}{e}$ لجميع $x > 0$.",
    "stepByStepSolutionEn": [
      "Slope from derivative: $m = 1/x_0$.",
      "Slope from origin: $m = \\frac{\\ln x_0}{x_0}$.",
      "Equate: $1/x_0 = \\frac{\\ln x_0}{x_0} \\implies \\ln x_0 = 1 \\implies x_0 = e$.",
      "Equation: $y = \\frac{1}{e} x$."
    ],
    "stepByStepSolutionAr": [
      "الميل من المشتقة: $m = 1/x_0$.",
      "الميل من نقطة الأصل: $m = \\frac{\\ln x_0}{x_0}$.",
      "المساواة: $\\ln x_0 = 1 \\implies x_0 = e$.",
      "معادلة المستقيم: $y = \\frac{1}{e}x$."
    ]
  }
],
  hots: [
  {
    "id": "calc_ch2_db_hots_101",
    "titleEn": "Geometric Mean Power Limit as x Approaches Zero",
    "titleAr": "نهاية الوسط الهندسي المرفوع لأس مقلوب س",
    "difficulty": "hots",
    "questionEn": "Find the limit of the exponential mean: $\\lim_{x \\to 0} \\left(\\frac{2^x + 8^x}{2}\\right)^{1/x}$.",
    "questionAr": "أوجد نهاية المتوسط الأسي: $\\lim_{x \\to 0} \\left(\\frac{2^x + 8^x}{2}\\right)^{1/x}$.",
    "optionsEn": [
      "$4$",
      "$5$",
      "$2$",
      "$\\sqrt{10}$"
    ],
    "optionsAr": [
      "4",
      "5",
      "2",
      "√10"
    ],
    "correctAnswer": "$4$",
    "correctIndex": 0,
    "hintEn": "For lim ((a^x + b^x)/2)^(1/x) as x->0, the limit equals sqrt(a*b) = sqrt(2*8) = 4.",
    "hintAr": "قاعدة: نهاية ((أ^س + ب^س)/2)^(1/س) = √(أ × ب) = √(16) = 4.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_102",
    "titleEn": "General Harmonic Exponent Limit",
    "titleAr": "نهاية أسية هارمونية مركبة",
    "difficulty": "hots",
    "questionEn": "Determine the trigonometric power limit: $\\lim_{x \\to 0} (1 + \\sin 2x)^{\\csc 2x}$.",
    "questionAr": "عيّن نهاية الدالة المثلثية الأسية: $\\lim_{x \\to 0} (1 + \\sin 2x)^{\\csc 2x}$.",
    "optionsEn": [
      "$e$",
      "$e^2$",
      "$1$",
      "$2e$"
    ],
    "optionsAr": [
      "هـ",
      "هـ²",
      "1",
      "2هـ"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "csc 2x = 1/sin 2x. Let u = sin 2x -> 0: lim (1 + u)^(1/u) = e.",
    "hintAr": "قتا 2س = 1 / جا 2س، بالتعويض عن جا 2س = ع تؤول للصفر نحصل على هـ.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_103",
    "titleEn": "Higher Order Exponential Limit Ratio",
    "titleAr": "نسبة نهايات أسية متقدمة",
    "difficulty": "hots",
    "questionEn": "Compute the limit using standard Taylor or expansions: $\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}$.",
    "questionAr": "احسب النهاية باستخدام المفكوك القياسي للدوال: $\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}$.",
    "optionsEn": [
      "$\\frac{3}{2}$",
      "$1$",
      "$\\frac{1}{2}$",
      "$2$"
    ],
    "optionsAr": [
      "3/2",
      "1",
      "1/2",
      "2"
    ],
    "correctAnswer": "$\\frac{3}{2}$",
    "correctIndex": 0,
    "hintEn": "Split: (e^(x^2)-1)/x^2 + (1-cos x)/x^2 -> 1 + 1/2 = 3/2.",
    "hintAr": "اكتب البسط كـ (هـ^(س²) - 1) + (1 - جتا س) وقسم على س² يعطي 1 + 1/2 = 3/2.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_104",
    "titleEn": "Double Derivative of x^x at Point 1",
    "titleAr": "المشتقة الثانية لـ س^س عند النقطة 1",
    "difficulty": "hots",
    "questionEn": "If $y = x^x$, find the value of $\\frac{d^2y}{dx^2}$ at $x = 1$.",
    "questionAr": "إذا كان $y = x^x$، فأوجد قيمة $\\frac{d^2y}{dx^2}$ عند $x = 1$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$0$",
      "$e$"
    ],
    "optionsAr": [
      "2",
      "1",
      "0",
      "هـ"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "y' = x^x(ln x + 1). y'' = y'(ln x + 1) + x^x(1/x). At x=1: (1)(1) + (1)(1) = 2.",
    "hintAr": "ص' = س^س(لو س + 1)، ص'' = ص'(لو س + 1) + س^س(1/س). بالتعويض عن س=1 الناتج 2.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_105",
    "titleEn": "Logarithmic Derivative of Sine to the Power Cosine",
    "titleAr": "مشتقة لوغاريتمية لـ جا س أس جتا س",
    "difficulty": "hots",
    "questionEn": "Using logarithmic differentiation, find the derivative value of $y = (\\sin x)^{\\cos x}$ at $x = \\frac{\\pi}{2}$.",
    "questionAr": "باستخدام الاشتقاق اللوغاريتمي، أوجد قيمة مشتقة $y = (\\sin x)^{\\cos x}$ عند $x = \\frac{\\pi}{2}$.",
    "optionsEn": [
      "$0$",
      "$1$",
      "$-1$",
      "$\\pi/2$"
    ],
    "optionsAr": [
      "0",
      "1",
      "-1",
      "ط/2"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "ln y = cos x ln(sin x) => y'/y = -sin x ln(sin x) + cos x cot x. At pi/2: -1*ln(1) + 0 = 0.",
    "hintAr": "لو ص = جتا س لو(جا س). عند ط/2 يكون الناتج صفراً.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_106",
    "titleEn": "Implicit Symmetric Exponents x^y = y^x",
    "titleAr": "اشتقاق ضمني متماثل س^ص = ص^س عند النقطة (هـ، هـ)",
    "difficulty": "hots",
    "questionEn": "If $x^y = y^x$ for $x, y > 0$, find $\\frac{dy}{dx}$ at the point $(e, e)$.",
    "questionAr": "إذا كان $x^y = y^x$ حيث $x, y > 0$، فأوجد $\\frac{dy}{dx}$ عند النقطة $(e, e)$.",
    "optionsEn": [
      "$1$",
      "$-1$",
      "$e$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "1",
      "-1",
      "هـ",
      "1/هـ"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "y ln x = x ln y => y' ln x + y/x = ln y + x(y'/y). At (e,e): y'(1) + 1 = 1 + y'(1) => by symmetry along line y=x, slope is 1.",
    "hintAr": "بتفاضل الطرفين واستخدام التماثل حول المستقيم ص = س نجد أن الميل = 1.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_107",
    "titleEn": "N-th Derivative of x e^x Formula",
    "titleAr": "الصيغة العامة للمشتقة النونية لـ س هـ^س",
    "difficulty": "hots",
    "questionEn": "Find the $n$-th derivative $y^{(n)}$ of $y = x e^x$.",
    "questionAr": "أوجد المشتقة ذات الرتبة $n$ للدالة $y = x e^x$.",
    "optionsEn": [
      "$(x + n)e^x$",
      "$(x + 1)^n e^x$",
      "$n x e^x$",
      "$n! e^x$"
    ],
    "optionsAr": [
      "(س + ن)هـ^س",
      "(س + 1)^ن هـ^س",
      "ن س هـ^س",
      "ن! هـ^س"
    ],
    "correctAnswer": "$(x + n)e^x$",
    "correctIndex": 0,
    "hintEn": "By induction: y' = (x+1)e^x, y'' = (x+2)e^x, ..., y^(n) = (x+n)e^x.",
    "hintAr": "بالاستقراء الرياضي: كل اشتقاق يضيف 1 إلى المعامل الخطي.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_108",
    "titleEn": "Tangent Passing Through Origin to Exponential Curve",
    "titleAr": "المماس المار بنقطة الأصل لمنحنى الدالة الأسية",
    "difficulty": "hots",
    "questionEn": "Find the equation of the tangent line to $y = e^x$ that passes through the origin $(0, 0)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = e^x$ المار بنقطة الأصل $(0، 0)$.",
    "optionsEn": [
      "$y = e x$",
      "$y = x$",
      "$y = 2e x$",
      "$y = \\frac{x}{e}$"
    ],
    "optionsAr": [
      "ص = هـ س",
      "ص = س",
      "ص = 2هـ س",
      "ص = س/هـ"
    ],
    "correctAnswer": "$y = e x$",
    "correctIndex": 0,
    "hintEn": "Let contact point be (a, e^a). Slope m = e^a. Line y = e^a x. Since e^a = e^a * a, a = 1 => y = e x.",
    "hintAr": "نقطة التماس (أ، هـ^أ) وميل المماس هـ^أ، بالمرور بنقطة الأصل نجد أ = 1 والمعادلة ص = هـ س.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_109",
    "titleEn": "Tangent Passing Through Origin to Natural Logarithm",
    "titleAr": "المماس المار بنقطة الأصل لمنحنى اللوغاريتم الطبيعي",
    "difficulty": "hots",
    "questionEn": "Find the equation of the tangent line to $y = \\ln x$ that passes through the origin $(0, 0)$.",
    "questionAr": "أوجد معادلة المماس للمنحنى $y = \\ln x$ المار بنقطة الأصل $(0، 0)$.",
    "optionsEn": [
      "$y = \\frac{x}{e}$",
      "$y = e x$",
      "$y = x$",
      "$y = \\frac{2x}{e}$"
    ],
    "optionsAr": [
      "ص = س / هـ",
      "ص = هـ س",
      "ص = س",
      "ص = 2س / هـ"
    ],
    "correctAnswer": "$y = \\frac{x}{e}$",
    "correctIndex": 0,
    "hintEn": "Contact point (a, ln a). Slope m = 1/a. y = (1/a)x. ln a = (1/a)*a = 1 => a = e => y = x/e.",
    "hintAr": "نقطة التماس (هـ، 1) وميل المماس 1/هـ، إذن المعادلة ص = س/هـ.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_110",
    "titleEn": "Absolute Maximum of ln(x) / x",
    "titleAr": "القيمة العظمى المطلقة للدالة لوغاريتم س على س",
    "difficulty": "hots",
    "questionEn": "Find the maximum value of $f(x) = \\frac{\\ln x}{x}$ on the interval $(0, \\infty)$.",
    "questionAr": "أوجد القيمة العظمى للدالة $f(x) = \\frac{\\ln x}{x}$ على الفترة $(0, \\infty)$.",
    "optionsEn": [
      "$\\frac{1}{e}$",
      "$e$",
      "$1$",
      "$\\frac{1}{e^2}$"
    ],
    "optionsAr": [
      "1/هـ",
      "هـ",
      "1",
      "1/هـ²"
    ],
    "correctAnswer": "$\\frac{1}{e}$",
    "correctIndex": 0,
    "hintEn": "Critical point at x = e. f(e) = ln(e) / e = 1/e.",
    "hintAr": "النقطة الحرجة عند س = هـ، وتكون القيمة العظمى 1/هـ.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_111",
    "titleEn": "Absolute Minimum of x^x Function",
    "titleAr": "القيمة الصغرى المطلقة للدالة س^س",
    "difficulty": "hots",
    "questionEn": "Find the minimum value of $f(x) = x^x$ for $x > 0$.",
    "questionAr": "أوجد القيمة الصغرى للدالة $f(x) = x^x$ حيث $x > 0$.",
    "optionsEn": [
      "$e^{-1/e}$",
      "$e^{1/e}$",
      "$\\frac{1}{e}$",
      "$1$"
    ],
    "optionsAr": [
      "هـ^(-1/هـ)",
      "هـ^(1/هـ)",
      "1/هـ",
      "1"
    ],
    "correctAnswer": "$e^{-1/e}$",
    "correctIndex": 0,
    "hintEn": "f'(x) = x^x(ln x + 1) = 0 => x = 1/e. f(1/e) = (1/e)^(1/e) = e^(-1/e).",
    "hintAr": "تحدث القيمة الصغرى عند س = 1/هـ، وقيمتها هـ^(-1/هـ).",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_112",
    "titleEn": "Inflection Points of Gaussian Function e^(-x^2)",
    "titleAr": "نقاط انقلاب الدالة الغاوسية هـ^(-س²)",
    "difficulty": "hots",
    "questionEn": "Find the x-coordinates of the points of inflection of $f(x) = e^{-x^2}$.",
    "questionAr": "أوجد الإحداثيين السينيين لنقطتي الانقلاب للمنحنى $f(x) = e^{-x^2}$.",
    "optionsEn": [
      "$x = \\pm \\frac{1}{\\sqrt{2}}$",
      "$x = \\pm 1$",
      "$x = \\pm \\frac{1}{2}$",
      "$x = 0$"
    ],
    "optionsAr": [
      "س = ± 1/√2",
      "س = ± 1",
      "س = ± 1/2",
      "س = 0"
    ],
    "correctAnswer": "$x = \\pm \\frac{1}{\\sqrt{2}}$",
    "correctIndex": 0,
    "hintEn": "f'' = (4x^2 - 2)e^(-x^2) = 0 => x^2 = 1/2 => x = +- 1/sqrt(2).",
    "hintAr": "المشتقة الثانية (4س² - 2)هـ^(-س²) = 0 إذن س = ± 1/√2.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_113",
    "titleEn": "Integral of e^x(f(x) + f'(x)) Special Form",
    "titleAr": "التكامل الخاص لصورة هـ^س [د(س) + د'(س)]",
    "difficulty": "hots",
    "questionEn": "Evaluate the product integral of standard form $\\int e^x [f(x) + f'(x)] dx$: $\\int e^x (\\tan x + \\sec^2 x) dx$.",
    "questionAr": "احسب التكامل من الصورة القياسية $\\int e^x [f(x) + f'(x)] dx$: $\\int e^x (\\tan x + \\sec^2 x) dx$.",
    "optionsEn": [
      "$e^x \\tan x + C$",
      "$e^x \\sec^2 x + C$",
      "$e^x (\\tan x + 1) + C$",
      "$\\frac{1}{2}e^x \\tan^2 x + C$"
    ],
    "optionsAr": [
      "هـ^س ظا س + ث",
      "هـ^س قا² س + ث",
      "هـ^س (ظا س + 1) + ث",
      "(1/2)هـ^س ظا² س + ث"
    ],
    "correctAnswer": "$e^x \\tan x + C$",
    "correctIndex": 0,
    "hintEn": "Standard identity: int e^x(f(x) + f'(x))dx = e^x f(x) + C with f(x) = tan x.",
    "hintAr": "الصورة القياسية الشهيرة: تكامل هـ^س [د(س) + د'(س)] = هـ^س د(س) + ث.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_114",
    "titleEn": "Integral of e^x (1/x - 1/x^2)",
    "titleAr": "تكامل هـ^س [1/س - 1/س²]",
    "difficulty": "hots",
    "questionEn": "Find the antiderivative using the theorem $\\int e^x [f(x) + f'(x)] dx$: $\\int e^x \\left(\\frac{1}{x} - \\frac{1}{x^2}\\right) dx$.",
    "questionAr": "أوجد المشتقة العكسية بالاستفادة من القاعدة $\\int e^x [f(x) + f'(x)] dx$: $\\int e^x \\left(\\frac{1}{x} - \\frac{1}{x^2}\\right) dx$.",
    "optionsEn": [
      "$\\frac{e^x}{x} + C$",
      "$-\\frac{e^x}{x^2} + C$",
      "$e^x \\ln x + C$",
      "$\\frac{e^x}{x^2} + C$"
    ],
    "optionsAr": [
      "هـ^س / س + ث",
      "-هـ^س / س² + ث",
      "هـ^س لو_هـ س + ث",
      "هـ^س / س² + ث"
    ],
    "correctAnswer": "$\\frac{e^x}{x} + C$",
    "correctIndex": 0,
    "hintEn": "Here f(x) = 1/x, f'(x) = -1/x^2 => e^x f(x) + C = e^x / x + C.",
    "hintAr": "هنا د(س) = 1/س وتكون المشتقة -1/س² فالناتج هـ^س / س + ث.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_115",
    "titleEn": "Integral of e^x (ln x + 1/x)",
    "titleAr": "تكامل هـ^س [لوغاريتم س + 1/س]",
    "difficulty": "hots",
    "questionEn": "Determine the integral $\\int e^x \\left(\\ln x + \\frac{1}{x}\\right) dx$ by recognizing the logarithmic derivative component.",
    "questionAr": "عيّن ناتج التكامل $\\int e^x \\left(\\ln x + \\frac{1}{x}\\right) dx$ بملاحظة مشتقة الدالة اللوغاريتمية المرافقة.",
    "optionsEn": [
      "$e^x \\ln x + C$",
      "$\\frac{e^x}{x} + C$",
      "$e^x (\\ln x)^2 + C$",
      "$x e^x \\ln x + C$"
    ],
    "optionsAr": [
      "هـ^س لو_هـ س + ث",
      "هـ^س / س + ث",
      "هـ^س (لو_هـ س)² + ث",
      "س هـ^س لو_هـ س + ث"
    ],
    "correctAnswer": "$e^x \\ln x + C$",
    "correctIndex": 0,
    "hintEn": "f(x) = ln x, f'(x) = 1/x => result is e^x ln x + C.",
    "hintAr": "د(س) = لو_هـ س، إذن الناتج هـ^س لو_هـ س + ث.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_116",
    "titleEn": "Integration of x^3 e^(x^2)",
    "titleAr": "تكامل س³ هـ^(س²)",
    "difficulty": "hots",
    "questionEn": "Evaluate the higher-order integral by parts: $\\int x^3 e^{x^2} dx$.",
    "questionAr": "احسب قيمة التكامل بالتجزيء بعد التفكيك: $\\int x^3 e^{x^2} dx$.",
    "optionsEn": [
      "$\\frac{1}{2}(x^2 - 1)e^{x^2} + C$",
      "$\\frac{1}{2}(x^2 + 1)e^{x^2} + C$",
      "$\\frac{1}{4}x^4 e^{x^2} + C$",
      "$(x^2 - 1)e^{x^2} + C$"
    ],
    "optionsAr": [
      "(1/2)(س² - 1)هـ^(س²) + ث",
      "(1/2)(س² + 1)هـ^(س²) + ث",
      "(1/4)س⁴ هـ^(س²) + ث",
      "(س² - 1)هـ^(س²) + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}(x^2 - 1)e^{x^2} + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_117",
    "titleEn": "Integral of (ln x)^2",
    "titleAr": "تكامل (لوغاريتم س)²",
    "difficulty": "hots",
    "questionEn": "Compute the antiderivative using repeated integration by parts: $\\int (\\ln x)^2 dx$.",
    "questionAr": "أوجد التكامل باستخدام التجزيء المتكرر للمقدار: $\\int (\\ln x)^2 dx$.",
    "optionsEn": [
      "$x(\\ln x)^2 - 2x \\ln x + 2x + C$",
      "$x(\\ln x)^2 + 2x \\ln x + 2x + C$",
      "$\\frac{1}{3}(\\ln x)^3 + C$",
      "$x(\\ln x)^2 - x + C$"
    ],
    "optionsAr": [
      "س(لو س)² - 2س لو س + 2س + ث",
      "س(لو س)² + 2س لو س + 2س + ث",
      "(1/3)(لو س)³ + ث",
      "س(لو س)² - س + ث"
    ],
    "correctAnswer": "$x(\\ln x)^2 - 2x \\ln x + 2x + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_118",
    "titleEn": "Integral of Product e^x sin(x)",
    "titleAr": "تكامل حاصل ضرب هـ^س في جا س",
    "difficulty": "hots",
    "questionEn": "Evaluate the cyclic integral by parts: $\\int e^x \\sin x \\, dx$.",
    "questionAr": "احسب ناتج التكامل الدوري بطريقة التجزيء: $\\int e^x \\sin x \\, dx$.",
    "optionsEn": [
      "$\\frac{1}{2}e^x(\\sin x - \\cos x) + C$",
      "$\\frac{1}{2}e^x(\\sin x + \\cos x) + C$",
      "$e^x(\\cos x - \\sin x) + C$",
      "$e^x \\sin x + C$"
    ],
    "optionsAr": [
      "(1/2)هـ^س(جا س - جتا س) + ث",
      "(1/2)هـ^س(جا س + جتا س) + ث",
      "هـ^س(جتا س - جا س) + ث",
      "هـ^س جا س + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}e^x(\\sin x - \\cos x) + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_119",
    "titleEn": "Integral of Product e^x cos(x)",
    "titleAr": "تكامل حاصل ضرب هـ^س في جتا س",
    "difficulty": "hots",
    "questionEn": "Determine the recurring integral: $\\int e^x \\cos x \\, dx$.",
    "questionAr": "أوجد القيمة الدقيقة للتكامل الدوري: $\\int e^x \\cos x \\, dx$.",
    "optionsEn": [
      "$\\frac{1}{2}e^x(\\cos x + \\sin x) + C$",
      "$\\frac{1}{2}e^x(\\cos x - \\sin x) + C$",
      "$e^x \\cos x + C$",
      "$-\\frac{1}{2}e^x(\\cos x + \\sin x) + C$"
    ],
    "optionsAr": [
      "(1/2)هـ^س(جتا س + جا س) + ث",
      "(1/2)هـ^س(جتا س - جا س) + ث",
      "هـ^س جتا س + ث",
      "-(1/2)هـ^س(جتا س + جا س) + ث"
    ],
    "correctAnswer": "$\\frac{1}{2}e^x(\\cos x + \\sin x) + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_120",
    "titleEn": "Integral of Rational Function with Squared Binomial",
    "titleAr": "تكامل دالة كسرية بمربع مقدار في المقام",
    "difficulty": "hots",
    "questionEn": "Find the antiderivative $\\int \\frac{x e^x}{(x + 1)^2} dx$ by decomposing the numerator.",
    "questionAr": "احسب ناتج التكامل $\\int \\frac{x e^x}{(x + 1)^2} dx$ بعد تجزئة البسط وكتابته على صورة دالة ومشتقتها.",
    "optionsEn": [
      "$\\frac{e^x}{x + 1} + C$",
      "$-\\frac{e^x}{x + 1} + C$",
      "$\\frac{e^x}{(x + 1)^2} + C$",
      "$e^x \\ln|x + 1| + C$"
    ],
    "optionsAr": [
      "هـ^س / (س + 1) + ث",
      "-هـ^س / (س + 1) + ث",
      "هـ^س / (س + 1)² + ث",
      "هـ^س لو_هـ|س + 1| + ث"
    ],
    "correctAnswer": "$\\frac{e^x}{x + 1} + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_121",
    "titleEn": "Integral of x^2 e^(-x)",
    "titleAr": "تكامل بالتجزيء مرتين: س² هـ^(-س)",
    "difficulty": "hots",
    "questionEn": "Use the tabular method of integration by parts to evaluate $\\int x^2 e^{-x} dx$.",
    "questionAr": "استخدم طريقة الجدول في التكامل بالتجزيء لحساب: $\\int x^2 e^{-x} dx$.",
    "optionsEn": [
      "$-(x^2 + 2x + 2)e^{-x} + C$",
      "$-(x^2 - 2x + 2)e^{-x} + C$",
      "$(x^2 + 2x + 2)e^{-x} + C$",
      "$(-x^2 + 2x - 2)e^{-x} + C$"
    ],
    "optionsAr": [
      "-(س² + 2س + 2)هـ^(-س) + ث",
      "-(س² - 2س + 2)هـ^(-س) + ث",
      "(س² + 2س + 2)هـ^(-س) + ث",
      "(-س² + 2س - 2)هـ^(-س) + ث"
    ],
    "correctAnswer": "$-(x^2 + 2x + 2)e^{-x} + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_122",
    "titleEn": "Integral of ln(x+1) / (x+1)^2",
    "titleAr": "تكامل لوغاريتم (س+1) على (س+1)²",
    "difficulty": "hots",
    "questionEn": "Evaluate the logarithmic fraction integral by parts: $\\int \\frac{\\ln(x + 1)}{(x + 1)^2} dx$.",
    "questionAr": "أوجد ناتج تكامل الكسر اللوغاريتمي بالتجزيء: $\\int \\frac{\\ln(x + 1)}{(x + 1)^2} dx$.",
    "optionsEn": [
      "$-\\frac{\\ln(x + 1) + 1}{x + 1} + C$",
      "$\\frac{\\ln(x + 1) + 1}{x + 1} + C$",
      "$-\\frac{\\ln(x + 1)}{x + 1} + C$",
      "$-\\frac{1}{x + 1} + C$"
    ],
    "optionsAr": [
      "-(لو_هـ(س+1) + 1)/(س+1) + ث",
      "(لو_هـ(س+1) + 1)/(س+1) + ث",
      "-لو_هـ(س+1)/(س+1) + ث",
      "-1/(س+1) + ث"
    ],
    "correctAnswer": "$-\\frac{\\ln(x + 1) + 1}{x + 1} + C$",
    "correctIndex": 0,
    "hintEn": "Advanced integration by parts.",
    "hintAr": "تكامل بالتجزيء المتقدم.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_123",
    "titleEn": "Orthogonal Trajectories of Exponential Family",
    "titleAr": "المسارات المتعامدة لعائلة المنحنيات الأسية",
    "difficulty": "hots",
    "questionEn": "Find the equation of the orthogonal trajectories to the family of curves $y = C e^{2x}$.",
    "questionAr": "أوجد معادلة المسارات المتعامدة لعائلة المنحنيات $y = C e^{2x}$.",
    "optionsEn": [
      "$y^2 = -x + K$",
      "$y^2 = x + K$",
      "$y = -2x + K$",
      "$y^2 = -\\frac{x}{2} + K$"
    ],
    "optionsAr": [
      "ص² = -س + ث",
      "ص² = س + ث",
      "ص = -2س + ث",
      "ص² = -س/2 + ث"
    ],
    "correctAnswer": "$y^2 = -x + K$",
    "correctIndex": 0,
    "hintEn": "y' = 2y => dy/dx for orthogonal is -1/(2y) => 2y dy = -dx => y^2 = -x + K.",
    "hintAr": "المسارات المتعامدة تحقق ميل عمودي = -1/الميل.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_124",
    "titleEn": "Population Growth Rate Model",
    "titleAr": "نموذج المعدل الزمني للنمو السكاني",
    "difficulty": "hots",
    "questionEn": "A population grows according to $P(t) = 1000 e^{0.05 t}$. At what time $t$ will the population double?",
    "questionAr": "يتزايد مجتمع سكاني وفق العلاقة $P(t) = 1000 e^{0.05 t}$ حيث $t$ بالسنوات. بعد كم سنة يتضاعف عدد السكان؟",
    "optionsEn": [
      "$20\\ln 2$",
      "$10\\ln 2$",
      "$50\\ln 2$",
      "$5\\ln 2$"
    ],
    "optionsAr": [
      "20 لو_هـ 2",
      "10 لو_هـ 2",
      "50 لو_هـ 2",
      "5 لو_هـ 2"
    ],
    "correctAnswer": "$20\\ln 2$",
    "correctIndex": 0,
    "hintEn": "2000 = 1000 e^(0.05 t) => e^(0.05 t) = 2 => t = ln(2) / 0.05 = 20 ln 2.",
    "hintAr": "2 = هـ^(0.05 ن) ومنها ن = لو_هـ 2 / 0.05 = 20 لو_هـ 2.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_125",
    "titleEn": "Radioactive Decay Half-life Model",
    "titleAr": "نموذج عمر النصف للانحلال الإشعاعي",
    "difficulty": "hots",
    "questionEn": "A radioactive substance decays according to $m(t) = m_0 e^{-k t}$. If half-life is $10$ years, find $k$.",
    "questionAr": "تنحل مادة مشعة وفق القانون $m(t) = m_0 e^{-k t}$. إذا كان عمر النصف 10 سنوات، فما قيمة ثابت الانحلال $k$؟",
    "optionsEn": [
      "$\\frac{\\ln 2}{10}$",
      "$10\\ln 2$",
      "$\\frac{1}{10\\ln 2}$",
      "$5\\ln 2$"
    ],
    "optionsAr": [
      "(لو_هـ 2) / 10",
      "10 لو_هـ 2",
      "1 / (10 لو_هـ 2)",
      "5 لو_هـ 2"
    ],
    "correctAnswer": "$\\frac{\\ln 2}{10}$",
    "correctIndex": 0,
    "hintEn": "1/2 = e^(-10k) => k = ln 2 / 10.",
    "hintAr": "1/2 = هـ^(-10ك) إذن ك = لو_هـ 2 / 10.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_126",
    "titleEn": "Newton's Law of Cooling Differential Model",
    "titleAr": "نموذج قانون نيوتن للتبريد",
    "difficulty": "hots",
    "questionEn": "A body cools in a medium of constant temperature $20^\\circ\\text{C}$ according to $\\frac{dT}{dt} = -k(T - 20)$. Find $T(t)$ if $T(0) = 80$.",
    "questionAr": "يبرد جسم في وسط درجة حرارته ثابتة $20^\\circ\\text{C}$ بمعدل $\\frac{dT}{dt} = -k(T - 20)$. إذا كانت $T(0) = 80$، فما صيغة $T(t)$؟",
    "optionsEn": [
      "$T(t) = 20 + 60e^{-kt}$",
      "$T(t) = 20 + 80e^{-kt}$",
      "$T(t) = 80e^{-kt}$",
      "$T(t) = 60 + 20e^{-kt}$"
    ],
    "optionsAr": [
      "د(ن) = 20 + 60هـ^(-ك ن)",
      "د(ن) = 20 + 80هـ^(-ك ن)",
      "د(ن) = 80هـ^(-ك ن)",
      "د(ن) = 60 + 20هـ^(-ك ن)"
    ],
    "correctAnswer": "$T(t) = 20 + 60e^{-kt}$",
    "correctIndex": 0,
    "hintEn": "T - 20 = C e^(-kt). At t=0, C = 60.",
    "hintAr": "حل المعادلة التفاضلية الخطية وفصل المتغيرات.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_127",
    "titleEn": "Intersection Angle of Exponentials",
    "titleAr": "زاوية تقاطع المنحنيين الأسيين",
    "difficulty": "hots",
    "questionEn": "Find the acute angle between the tangent lines to $y = e^x$ and $y = e^{-x}$ at their point of intersection $(0, 1)$.",
    "questionAr": "أوجد قياس الزاوية الحادة بين مماسي المنحنيين $y = e^x$ و $y = e^{-x}$ عند نقطة تقاطعهما $(0، 1)$.",
    "optionsEn": [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$"
    ],
    "optionsAr": [
      "ط/2 (90°)",
      "ط/4 (45°)",
      "ط/3 (60°)",
      "ط/6 (30°)"
    ],
    "correctAnswer": "$\\frac{\\pi}{2}$",
    "correctIndex": 0,
    "hintEn": "m1 = 1, m2 = -1 => m1 * m2 = -1 => perpendicular (pi/2).",
    "hintAr": "ميل الأول 1 وميل الثاني -1، حاصل ضربهما -1 فهما متعامدان.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_128",
    "titleEn": "Logarithmic Differentiation of Variable Base and Exponential Power",
    "titleAr": "الاشتقاق اللوغاريتمي لدالة أساسها متغير وأسها دالة أسية",
    "difficulty": "hots",
    "questionEn": "If $y = x^{e^x}$ for $x > 0$, find the value of $\\frac{dy}{dx}$ at $x = 1$.",
    "questionAr": "إذا كان $y = x^{e^x}$ حيث $x > 0$، فأوجد قيمة $\\frac{dy}{dx}$ عند $x = 1$.",
    "optionsEn": [
      "$e$",
      "$2e$",
      "$e + 1$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "هـ",
      "2هـ",
      "هـ + 1",
      "1/هـ"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "Take natural logarithm of both sides: ln y = e^x ln x, then differentiate implicitly.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي للطرفين: لو_هـ (ص) = هـ^س لو_هـ (س)، ثم الاشتقاق الضمني.",
    "stepByStepSolutionEn": [
      "1. Take natural logarithm of both sides: $\\ln y = e^x \\ln x$.",
      "2. Differentiate with respect to $x$: $\\frac{1}{y} \\frac{dy}{dx} = e^x \\ln x + e^x \\cdot \\frac{1}{x} = e^x \\left(\\ln x + \\frac{1}{x}\\right)$.",
      "3. Hence $\\frac{dy}{dx} = x^{e^x} \\cdot e^x \\left(\\ln x + \\frac{1}{x}\\right)$.",
      "4. At $x = 1$: $y(1) = 1^e = 1$, so $\\frac{dy}{dx}\\Big|_{x=1} = 1 \\cdot e^1 \\left(\\ln 1 + 1\\right) = e(0 + 1) = e$."
    ],
    "stepByStepSolutionAr": [
      "١. بأخذ اللوغاريتم الطبيعي للطرفين: $\\ln y = e^x \\ln x$.",
      "٢. بالاشتقاق بالنسبة إلى $x$: $\\frac{1}{y} \\frac{dy}{dx} = e^x \\ln x + \\frac{e^x}{x} = e^x \\left(\\ln x + \\frac{1}{x}\\right)$.",
      "٣. إذن المشتقة الأولى: $\\frac{dy}{dx} = x^{e^x} e^x \\left(\\ln x + \\frac{1}{x}\\right)$.",
      "٤. بالتعويض عن $x = 1$: $\\frac{dy}{dx}\\Big|_{x=1} = 1 \\cdot e (0 + 1) = e$."
    ],
    "teacherTipEn": "When a function has variables in both the base and exponent, logarithmic differentiation is mandatory.",
    "teacherTipAr": "عندما يكون المتغير في الأساس والأس معاً، يلزم استخدام الاشتقاق اللوغاريتمي بأخذ لوغاريتم الطرفين أولاً."
  },
  {
    "id": "calc_ch2_db_hots_129",
    "titleEn": "Volume of Solid Generated by y = ln(x) Around Y-Axis",
    "titleAr": "حجم الجسم الناشئ عن دوران لوغاريتم س حول محور الصادات",
    "difficulty": "hots",
    "questionEn": "Find the volume generated by revolving the region bounded by $y = \\ln x$, $y = 0$, and $y = 1$ around the y-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني المتولد من دوران المنطقة المحصورة بين $y = \\ln x$ و $y = 0$ و $y = 1$ ومحور الصادات حول محور الصادات.",
    "optionsEn": [
      "$\\frac{\\pi}{2}(e^2 - 1)$",
      "$\\pi(e^2 - 1)$",
      "$\\frac{\\pi}{2}e^2$",
      "$\\pi e$"
    ],
    "optionsAr": [
      "(ط/2)(هـ² - 1)",
      "ط(هـ² - 1)",
      "(ط/2)هـ²",
      "ط هـ"
    ],
    "correctAnswer": "$\\frac{\\pi}{2}(e^2 - 1)$",
    "correctIndex": 0,
    "hintEn": "x = e^y. V = pi int_0^1 (e^y)^2 dy = (pi/2)(e^2 - 1).",
    "hintAr": "الدوران حول محور الصادات: س = هـ^ص والحجم = ط × تكامل (هـ^ص)² د ص.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_130",
    "titleEn": "Second Parametric Derivative with Exponential",
    "titleAr": "المشتقة البارامترية الثانية لمنحنى أسي",
    "difficulty": "hots",
    "questionEn": "If $x = e^t$ and $y = t e^t$, find $\\frac{d^2y}{dx^2}$ at $t = 0$.",
    "questionAr": "إذا كان $x = e^t$ و $y = t e^t$، فأوجد قيمة $\\frac{d^2y}{dx^2}$ عند $t = 0$.",
    "optionsEn": [
      "$1$",
      "$2$",
      "$0$",
      "$-1$"
    ],
    "optionsAr": [
      "1",
      "2",
      "0",
      "-1"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "dy/dx = (e^t + t e^t)/e^t = 1 + t. d^2y/dx^2 = (d/dt(1+t))/(dx/dt) = 1/e^t. At t=0: 1.",
    "hintAr": "المشتقة الأولى ص' = 1 + ت، والمشتقة الثانية = 1 / هـ^ت وعند ت=0 تساوي 1.",
    "stepByStepSolutionEn": [
      "1. Apply high order analysis.",
      "2. Deduce exact result."
    ],
    "stepByStepSolutionAr": [
      "١. تطبيق التحليل الرياضي العميق.",
      "٢. استنتاج القيمة الدقيقة."
    ],
    "teacherTipEn": "Challenging Egyptian Baccalaureate & STEM standard problem.",
    "teacherTipAr": "مسألة متميزة لطلاب التفوق ومدارس المتفوقين STEM."
  },
  {
    "id": "calc_ch2_db_hots_131",
    "titleEn": "Continuous Compounding Tripling Time",
    "titleAr": "زمن مضاعفة رأس المال ثلاث مرات بالنمو الأسي المستمر",
    "difficulty": "hots",
    "questionEn": "An initial capital grows continuously at an annual interest rate of $8\\%$, following $A(t) = A_0 e^{0.08 t}$. In how many years will the capital triple?",
    "questionAr": "ينمو رأس مال بشكل مستمر بمعدل فائدة سنوي $8\\%$ وفق العلاقة $A(t) = A_0 e^{0.08 t}$. بعد كم سنة يتضاعف رأس المال 3 مرات؟",
    "optionsEn": [
      "$12.5 \\ln 3$",
      "$8 \\ln 3$",
      "$\\frac{\\ln 3}{8}$",
      "$3 \\ln 12.5$"
    ],
    "optionsAr": [
      "12.5 لوـهـ(3)",
      "8 لوـهـ(3)",
      "لوـهـ(3) / 8",
      "3 لوـهـ(12.5)"
    ],
    "correctAnswer": "$12.5 \\ln 3$",
    "correctIndex": 0,
    "hintEn": "Set $A(t) = 3 A_0$ and solve for $t$.",
    "hintAr": "ضع جملة المبلغ مساوية لثلاثة أمثال المبلغ الأصلي وحل المعادلة الأسية بالنسبة للزمن.",
    "stepByStepSolutionEn": [
      "1. Set $A_0 e^{0.08 t} = 3 A_0 \\implies e^{0.08 t} = 3$.",
      "2. Take natural logarithm of both sides: $0.08 t = \\ln 3$.",
      "3. Solve for $t$: $t = \\frac{\\ln 3}{0.08} = \\frac{100}{8} \\ln 3 = 12.5 \\ln 3\\text{ years}$."
    ],
    "stepByStepSolutionAr": [
      "١. نضع المعادلة: هـ^(0.08 ن) = 3.",
      "٢. بأخذ اللوغاريتم الطبيعي للطرفين: 0.08 ن = لوـهـ(3).",
      "٣. ن = لوـهـ(3) / 0.08 = 12.5 لوـهـ(3) سنة."
    ],
    "teacherTipEn": "Dividing by 0.08 is equivalent to multiplying by 12.5.",
    "teacherTipAr": "القسمة على 0.08 تكافئ الضرب في 12.5 مباشرة."
  },
  {
    "id": "calc_ch2_db_hots_132",
    "titleEn": "Euler Limit of Rational Power",
    "titleAr": "نهاية أسية لكسر جبري تؤول للعدد هـ",
    "difficulty": "hots",
    "questionEn": "Determine the asymptotic limit at infinity: $\\lim_{x \\to \\infty} \\left(\\frac{x}{x - 1}\\right)^x$.",
    "questionAr": "عيّن النهاية عند اللانهاية: $\\lim_{x \\to \\infty} \\left(\\frac{x}{x - 1}\\right)^x$.",
    "optionsEn": [
      "$e$",
      "$e^{-1}$",
      "$1$",
      "$e^2$"
    ],
    "optionsAr": [
      "هـ",
      "هـ⁻¹",
      "1",
      "هـ²"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "Rewrite as $\\left(1 + \\frac{1}{x - 1}\\right)^x$.",
    "hintAr": "أعد كتابة المقدار داخل القوس بصورة (1 + 1/(س - 1)).",
    "stepByStepSolutionEn": [
      "1. $\\frac{x}{x - 1} = \\frac{(x - 1) + 1}{x - 1} = 1 + \\frac{1}{x - 1}$.",
      "2. Write exponent as $(x - 1) + 1$: $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x - 1}\\right)^{x - 1} \\cdot \\left(1 + \\frac{1}{x - 1}\\right)^1$.",
      "3. As $x \\to \\infty$, let $u = x - 1 \\to \\infty$.",
      "4. The limit becomes $e \\cdot (1 + 0) = e$."
    ],
    "stepByStepSolutionAr": [
      "١. س / (س - 1) = 1 + 1 / (س - 1).",
      "٢. نفصل الأس إلى (س - 1) + 1.",
      "٣. بوضع ص = س - 1 تؤول لما لا نهاية، تصبح النهاية هـ × 1 = هـ."
    ],
    "teacherTipEn": "Splitting numerator as $(x - 1) + 1$ reveals the standard Euler limit definition.",
    "teacherTipAr": "تفكيك البسط إلى (س - 1) + 1 يظهر الصورة القياسية لنهاية أويلر فوراً."
  },
  {
    "id": "calc_ch2_db_hots_133",
    "titleEn": "Trigonometric Power Limit Involving Cosine",
    "titleAr": "نهاية جيب التمام مرفوعة لقوة تربيعية في المقام",
    "difficulty": "hots",
    "questionEn": "Find the indeterminate power limit: $\\lim_{x \\to 0} (\\cos x)^{1/x^2}$.",
    "questionAr": "أوجد قيمة نهاية الدالة الأسية المثلثية: $\\lim_{x \\to 0} (\\cos x)^{1/x^2}$.",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{e}}$",
      "$\\sqrt{e}$",
      "$1$",
      "$e$"
    ],
    "optionsAr": [
      "1 / جذر(هـ)",
      "جذر(هـ)",
      "1",
      "هـ"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{e}}$",
    "correctIndex": 0,
    "hintEn": "Take natural logarithm of the limit and apply L'Hopital's rule.",
    "hintAr": "افرض النهاية بـ ل ثم خذ اللوغاريتم الطبيعي للطرفين واستخدم قاعدة لوبيتال.",
    "stepByStepSolutionEn": [
      "1. Let $L = \\lim_{x \\to 0} (\\cos x)^{1/x^2}$.",
      "2. $\\ln L = \\lim_{x \\to 0} \\frac{\\ln \\cos x}{x^2}$.",
      "3. Applying L'Hopital's rule (0/0 form): $\\lim_{x \\to 0} \\frac{-\\tan x}{2x} = -\\frac{1}{2} \\lim_{x \\to 0} \\frac{\\tan x}{x} = -\\frac{1}{2}$.",
      "4. Since $\\ln L = -\\frac{1}{2} \\implies L = e^{-1/2} = \\frac{1}{\\sqrt{e}}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ل = النهاية المطلوبة.",
      "٢. لوـهـ(ل) = نهاية (لوـهـ(جتا س) / س²).",
      "٣. بالاشتقاق بسطاً ومقاماً (لوبيتال): المشتقة = -ظا س / (2س) وتؤول لـ -1/2.",
      "٤. إذن لوـهـ(ل) = -1/2 ومنها ل = هـ^(-1/2) = 1 / جذر(هـ)."
    ],
    "teacherTipEn": "Whenever limits have indeterminate form $1^\\infty$, taking natural logarithm is the standard technique.",
    "teacherTipAr": "عندما تكون النهاية على الصورة غير المعينة 1^∞، فإن أخذ اللوغاريتم الطبيعي هو الأسلوب القياسي."
  },
  {
    "id": "calc_ch2_db_hots_134",
    "titleEn": "Derivative of Tower Exponential at One",
    "titleAr": "مشتقة دالة أسية برجية س^(س^س) عند س = 1",
    "difficulty": "hots",
    "questionEn": "Find the value of the derivative $\\frac{dy}{dx}$ at $x = 1$ for the tower function $y = x^{(x^x)}$.",
    "questionAr": "أوجد قيمة المشتقة الأولى $\\frac{dy}{dx}$ عند $x = 1$ للدالة الأسية البرجية $y = x^{(x^x)}$.",
    "optionsEn": [
      "$1$",
      "$0$",
      "$e$",
      "$2$"
    ],
    "optionsAr": [
      "1",
      "0",
      "هـ",
      "2"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 0,
    "hintEn": "Take the natural logarithm: $\\ln y = x^x \\ln x$, then differentiate implicitly.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: لوـهـ(ص) = س^س لوـهـ(س)، ثم اشتق ضمنياً بالنسبة لـ س.",
    "stepByStepSolutionEn": [
      "1. At $x = 1$, $y = 1^{(1^1)} = 1$.",
      "2. Taking natural logarithm: $\\ln y = x^x \\ln x$.",
      "3. Differentiating both sides: $\\frac{y'}{y} = (x^x)' \\ln x + x^x \\cdot \\frac{1}{x}$.",
      "4. At $x = 1$, $\\ln(1) = 0$, and $x^x = 1^1 = 1$.",
      "5. Therefore: $\\frac{y'(1)}{1} = (x^x)' (0) + (1) \\cdot \\frac{1}{1} = 1 \\implies y'(1) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. عند س = 1، تكون ص = 1.",
      "٢. بأخذ لوـهـ للطرفين: لوـهـ(ص) = س^س لوـهـ(س).",
      "٣. بالاشتقاق: صَ / ص = (مشتقة س^س) لوـهـ(س) + س^س × (1/س).",
      "٤. بالتعويض عن س = 1: لوـهـ(1) = 0، فيتبقى: صَ(1) / 1 = 0 + 1 × 1 = 1.",
      "٥. إذن صَ(1) = 1."
    ],
    "teacherTipEn": "Because $\\ln(1) = 0$, you do not even need to calculate the complicated derivative $(x^x)'$!",
    "teacherTipAr": "بما أن لوـهـ(1) = 0، فلست بحاجة لحساب مشتقة س^س المعقدة لأنها مضروبة في صفر!"
  },
  {
    "id": "calc_ch2_db_hots_135",
    "titleEn": "Second Derivative of Logarithmic Quotient at e",
    "titleAr": "المشتقة الثانية لحاصل قسمة لوغاريتم على س عند س = هـ",
    "difficulty": "hots",
    "questionEn": "If $y = \\frac{\\ln x}{x}$, find the exact value of the second derivative $\\frac{d^2y}{dx^2}$ at $x = e$.",
    "questionAr": "إذا كانت $y = \\frac{\\ln x}{x}$، فما القيمة الدقيقة للمشتقة الثانية $\\frac{d^2y}{dx^2}$ عند $x = e$؟",
    "optionsEn": [
      "$-\\frac{1}{e^3}$",
      "$\\frac{1}{e^3}$",
      "$0$",
      "$-\\frac{2}{e^3}$"
    ],
    "optionsAr": [
      "-1 / هـ³",
      "1 / هـ³",
      "0",
      "-2 / هـ³"
    ],
    "correctAnswer": "$-\\frac{1}{e^3}$",
    "correctIndex": 0,
    "hintEn": "Compute the first derivative using quotient rule, then differentiate again.",
    "hintAr": "احسب المشتقة الأولى بقاعدة القسمة ثم اشتق مرة ثانية وبسط المقدار.",
    "stepByStepSolutionEn": [
      "1. First derivative: $y' = \\frac{(1/x)(x) - (\\ln x)(1)}{x^2} = \\frac{1 - \\ln x}{x^2}$.",
      "2. Second derivative: $y'' = \\frac{(-1/x)(x^2) - (1 - \\ln x)(2x)}{x^4} = \\frac{-x - 2x + 2x \\ln x}{x^4} = \\frac{2\\ln x - 3}{x^3}$.",
      "3. At $x = e$, $\\ln e = 1$, so $y''(e) = \\frac{2(1) - 3}{e^3} = -\\frac{1}{e^3}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: صَ = (1 - لوـهـ س) / س².",
      "٢. المشتقة الثانية: صً = (-س - 2س + 2س لوـهـ س) / س⁴ = (2 لوـهـ س - 3) / س³.",
      "٣. عند س = هـ: صً(هـ) = (2(1) - 3) / هـ³ = -1 / هـ³."
    ],
    "teacherTipEn": "The point $x = e$ is the local maximum of the function $f(x) = \\frac{\\ln x}{x}$, confirming $y''(e) < 0$.",
    "teacherTipAr": "النقطة س = هـ هي نقطة نهاية عظمى محلية للدالة، وإشارتها السالبة في المشتقة الثانية تؤكد ذلك."
  },
  {
    "id": "calc_ch2_db_hots_136",
    "titleEn": "Distance Between Parallel Tangents to Inverse Curves",
    "titleAr": "البعد بين مماسين متوازيين لمنحنيي الدالتين العكسيتين هـ^س و لوـهـ(س)",
    "difficulty": "hots",
    "questionEn": "The line tangent to $y = e^x$ with slope $m = 1$ is parallel to the line tangent to $y = \\ln x$ with slope $m = 1$. Find the perpendicular distance between these two parallel tangent lines.",
    "questionAr": "المماس للمنحنى $y = e^x$ ذو الميل 1 يوازي المماس للمنحنى $y = \\ln x$ ذو الميل 1. أوجد البعد العمودي بين هذين المماسين المتوازيين.",
    "optionsEn": [
      "$\\sqrt{2}$",
      "$2$",
      "$2\\sqrt{2}$",
      "$1$"
    ],
    "optionsAr": [
      "جذر(2)",
      "2",
      "2 جذر(2)",
      "1"
    ],
    "correctAnswer": "$\\sqrt{2}$",
    "correctIndex": 0,
    "hintEn": "Find the equations of both tangent lines: $y = x + 1$ and $y = x - 1$.",
    "hintAr": "أوجد معادلة كل من المماسين: ص = س + 1 و ص = س - 1، ثم طبق قانون البعد بين مستقيمين متوازيين.",
    "stepByStepSolutionEn": [
      "1. For $y = e^x$: $y' = e^x = 1 \\implies x = 0, y = 1$. Tangent line: $y - 1 = 1(x - 0) \\implies x - y + 1 = 0$.",
      "2. For $y = \\ln x$: $y' = 1/x = 1 \\implies x = 1, y = 0$. Tangent line: $y - 0 = 1(x - 1) \\implies x - y - 1 = 0$.",
      "3. Distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ is $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.",
      "4. $d = \\frac{|1 - (-1)|}{\\sqrt{1^2 + (-1)^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. لمنحنى هـ^س: المشتقة = 1 عند س = 0، ص = 1. معادلة المماس: س - ص + 1 = 0.",
      "٢. لمنحنى لوـهـ س: المشتقة = 1 عند س = 1، ص = 0. معادلة المماس: س - ص - 1 = 0.",
      "٣. البعد العمودي بين المستقيمين = |1 - (-1)| / جذر(1 + 1) = 2 / جذر(2) = جذر(2)."
    ],
    "teacherTipEn": "Because $y = e^x$ and $y = \\ln x$ are reflections across $y = x$, the geometry is symmetric.",
    "teacherTipAr": "منحنى هـ^س ولوـهـ س متناظران حول المستقيم ص = س، مما يمنح المماسين تماثلاً هندسياً رائعاً."
  },
  {
    "id": "calc_ch2_db_hots_137",
    "titleEn": "Improper Integral of x Squared Exp Negative x",
    "titleAr": "تكامل معتل لـ س² هـ^(-س) من صفر لما لا نهاية",
    "difficulty": "hots",
    "questionEn": "Evaluate the improper definite integral: $\\int_0^\\infty x^2 e^{-x} dx$.",
    "questionAr": "احسب قيمة التكامل المعتل: $\\int_0^\\infty x^2 e^{-x} dx$.",
    "optionsEn": [
      "$2$",
      "$1$",
      "$6$",
      "$\\infty$"
    ],
    "optionsAr": [
      "2",
      "1",
      "6",
      "∞"
    ],
    "correctAnswer": "$2$",
    "correctIndex": 0,
    "hintEn": "Integrate by parts twice, or recognize the Gamma function $\\Gamma(3) = 2!$.",
    "hintAr": "كامل بالتجزيء مرتين متتاليتين، أو استخدم دالة غاما: غاما(3) = !2 = 2.",
    "stepByStepSolutionEn": [
      "1. Integration by parts with $u = x^2, dv = e^{-x} dx$:",
      "   $\\int x^2 e^{-x} dx = -x^2 e^{-x} + 2 \\int x e^{-x} dx$.",
      "2. Integrate by parts again for $\\int x e^{-x} dx = -x e^{-x} - e^{-x}$.",
      "3. Antiderivative is $F(x) = -e^{-x}(x^2 + 2x + 2)$.",
      "4. Evaluate limits: as $x \\to \\infty$, $\\lim_{x \\to \\infty} F(x) = 0$ (exponential dominates polynomial).",
      "5. At $x = 0$: $F(0) = -e^0(0 + 0 + 2) = -2$.",
      "6. Integral value: $0 - (-2) = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. التكامل بالتجزيء مرتين: الدالة المقابلة هي -هـ^(-س) (س² + 2س + 2).",
      "٢. عند المالانهاية تؤول الدالة إلى الصفر لأن الدالة الأسية تهيمن على كثيرات الحدود.",
      "٣. عند س = 0 تكون القيمة = -2.",
      "٤. قيمة التكامل = 0 - (-2) = 2."
    ],
    "teacherTipEn": "Formula: $\\int_0^\\infty x^n e^{-x} dx = n!$ for any non-negative integer $n$.",
    "teacherTipAr": "قاعدة عامة: تكامل س^ن هـ^(-س) من صفر للمالانهاية يساوي مضروب ن دائماً."
  },
  {
    "id": "calc_ch2_db_hots_138",
    "titleEn": "Area Between Curve x e^x and X-Axis",
    "titleAr": "مساحة المنطقة المحصورة بين منحنى س هـ^س ومحور السينات",
    "difficulty": "hots",
    "questionEn": "Find the area of the region enclosed between the curve $y = x e^x$ and the x-axis from $x = -1$ to $x = 0$.",
    "questionAr": "أوجد مساحة المنطقة المحصورة بين المنحنى $y = x e^x$ ومحور السينات في الفترة من $x = -1$ إلى $x = 0$.",
    "optionsEn": [
      "$\\frac{e - 2}{e}$",
      "$\\frac{2 - e}{e}$",
      "$\\frac{1}{e}$",
      "$1$"
    ],
    "optionsAr": [
      "(هـ - 2) / هـ",
      "(2 - هـ) / هـ",
      "1 / هـ",
      "1"
    ],
    "correctAnswer": "$\\frac{e - 2}{e}$",
    "correctIndex": 0,
    "hintEn": "Since $x e^x \\le 0$ on $[-1, 0]$, area is given by $\\int_{-1}^0 (-x e^x) dx$.",
    "hintAr": "بما أن الدالة سالبة في الفترة المعطاة، فإن المساحة تحسب من تكامل المعكوس الجمعي للدالة.",
    "stepByStepSolutionEn": [
      "1. On $[-1, 0]$, $x \\le 0$ and $e^x > 0$, so $y = x e^x \\le 0$.",
      "2. Area $A = \\int_{-1}^0 -x e^x dx = -\\left[ (x - 1)e^x \\right]_{-1}^0$.",
      "3. At $x = 0$: $(0 - 1)e^0 = -1$.",
      "4. At $x = -1$: $(-1 - 1)e^{-1} = -2e^{-1} = -\\frac{2}{e}$.",
      "5. $A = -\\left[ -1 - (-\\frac{2}{e}) \\right] = -\\left[ -1 + \\frac{2}{e} \\right] = 1 - \\frac{2}{e} = \\frac{e - 2}{e}$."
    ],
    "stepByStepSolutionAr": [
      "١. الدالة سالبة على الفترة المعطاة، فتكون المساحة = - تكامل (س هـ^س).",
      "٢. الدالة المقابلة للتكامل هي (س - 1) هـ^س.",
      "٣. بالتعويض بحدود التكامل من -1 إلى 0:",
      "٤. المساحة = 1 - 2/هـ = (هـ - 2) / هـ."
    ],
    "teacherTipEn": "Area is always positive; since the curve is below the x-axis, negate the integral.",
    "teacherTipAr": "المساحة موجبة دائماً؛ وبما أن المنحنى يقع أسفل محور السينات نعكس إشارة التكامل."
  },
  {
    "id": "calc_ch2_db_hots_139",
    "titleEn": "Parameter for Unique Real Solution of e^x = kx",
    "titleAr": "قيمة الثابت التي تجعل للمعادلة هـ^س = ك س حلاً حقيقياً وحيداً",
    "difficulty": "hots",
    "questionEn": "For what positive value of $k$ does the equation $e^x = k x$ have exactly one real solution?",
    "questionAr": "ما قيمة $k > 0$ التي تجعل للمعادلة $e^x = k x$ حل حقيقي وحيد؟",
    "optionsEn": [
      "$e$",
      "$1$",
      "$e^2$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "هـ",
      "1",
      "هـ²",
      "1 / هـ"
    ],
    "correctAnswer": "$e$",
    "correctIndex": 0,
    "hintEn": "The line $y = kx$ must be tangent to the curve $y = e^x$.",
    "hintAr": "المستقيم ص = ك س يجب أن يمس المنحنى ص = هـ^س حتى يكون هناك حل وحيد.",
    "stepByStepSolutionEn": [
      "1. For exactly one solution, the line $y = kx$ through origin must be tangent to $y = e^x$.",
      "2. Let the point of contact be $(x_0, y_0)$.",
      "3. Slope of tangent is $y'(x_0) = e^{x_0} = k$.",
      "4. Since the point lies on both curves: $e^{x_0} = k x_0$.",
      "5. Substitute $k = e^{x_0}$: $e^{x_0} = e^{x_0} x_0 \\implies x_0 = 1$.",
      "6. Then $k = e^1 = e$."
    ],
    "stepByStepSolutionAr": [
      "١. لكي يكون للمعادلة حل وحيد، يجب أن يمس الخط المستقيم ص = ك س المنحنى ص = هـ^س.",
      "٢. نفرض نقطة التماس هي (س0، ص0).",
      "٣. ميل المماس = هـ^س0 = ك.",
      "٤. بالنقطة المشتركة: هـ^س0 = ك س0.",
      "٥. بالتعويض عن ك بـ هـ^س0 ينتج: هـ^س0 = هـ^س0 × س0 ومنها س0 = 1.",
      "٦. إذن ك = هـ¹ = هـ."
    ],
    "teacherTipEn": "If $k > e$ there are two solutions, if $k = e$ exactly one solution, and if $0 < k < e$ no real solution.",
    "teacherTipAr": "إذا كانت ك > هـ يوجد حلان، وإذا كانت ك = هـ حل وحيد، وإذا كانت ك < هـ لا يوجد حل."
  },
  {
    "id": "calc_ch2_db_hots_140",
    "titleEn": "Differential Equation of Damped Harmonic Motion",
    "titleAr": "المعادلة التفاضلية للحركة التوافقية المخمدة هـ^س جا(2س)",
    "difficulty": "hots",
    "questionEn": "If $y = e^x \\sin 2x$, find the constant $k$ such that $\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + k y = 0$.",
    "questionAr": "إذا كانت $y = e^x \\sin 2x$، فأوجد قيمة الثابت $k$ التي تحقق المعادلة: $\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + k y = 0$.",
    "optionsEn": [
      "$5$",
      "$3$",
      "$4$",
      "$-5$"
    ],
    "optionsAr": [
      "5",
      "3",
      "4",
      "-5"
    ],
    "correctAnswer": "$5$",
    "correctIndex": 0,
    "hintEn": "Compute $y'$ and $y''$, or recognize characteristic roots $r = 1 \\pm 2i$.",
    "hintAr": "احسب المشتقة الأولى والثانية، أو استخدم الجذور المميزة: ل = 1 ± 2 ت.",
    "stepByStepSolutionEn": [
      "1. $y' = e^x \\sin 2x + 2 e^x \\cos 2x = y + 2 e^x \\cos 2x$.",
      "2. $y'' = y' + 2 e^x \\cos 2x - 4 e^x \\sin 2x = y' + (y' - y) - 4y = 2y' - 5y$.",
      "3. Rearranging gives: $y'' - 2y' + 5y = 0$.",
      "4. Comparing with $y'' - 2y' + ky = 0$ yields $k = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. صَ = هـ^س جا 2س + 2 هـ^س جتا 2س = ص + 2 هـ^س جتا 2س.",
      "٢. بالاشتقاق مرة أخرى: صً = 2 صَ - 5 ص.",
      "٣. بترتيب المعادلة: صً - 2 صَ + 5 ص = 0.",
      "٤. بمقارنة المعاملات نجد أن ك = 5."
    ],
    "teacherTipEn": "For $y = e^{ax} \\sin(bx)$, the characteristic equation is $(r - a)^2 + b^2 = 0 \\implies r^2 - 2ar + (a^2 + b^2) = 0$. Here $1^2 + 2^2 = 5$.",
    "teacherTipAr": "للدالة هـ^(أ س) جا(ب س)، المعامل الثابت يساوي دائماً أ² + ب² = 1 + 4 = 5."
  },
  {
    "id": "calc_ch2_db_hots_141",
    "titleEn": "Difference of Exponentials Limit",
    "titleAr": "نهاية الفرق بين دالتين أسيتين مقسوماً على س",
    "difficulty": "hots",
    "questionEn": "Evaluate the difference of exponential bases limit: $\\lim_{x \\to 0} \\frac{6^x - 2^x}{x}$.",
    "questionAr": "احسب نهاية فرق الأساسات الأسية المختلفة: $\\lim_{x \\to 0} \\frac{6^x - 2^x}{x}$.",
    "optionsEn": [
      "$\\ln 3$",
      "$\\ln 4$",
      "$4$",
      "$3$"
    ],
    "optionsAr": [
      "لوـهـ(3)",
      "لوـهـ(4)",
      "4",
      "3"
    ],
    "correctAnswer": "$\\ln 3$",
    "correctIndex": 0,
    "hintEn": "Subtract and add 1 in numerator: $\\frac{(6^x - 1) - (2^x - 1)}{x}$.",
    "hintAr": "اطرح واجمع 1 في البسط لتطبيق نظرية نهاية الدالة الأسية.",
    "stepByStepSolutionEn": [
      "1. Rewrite numerator: $\\lim_{x \\to 0} \\left[ \\frac{6^x - 1}{x} - \\frac{2^x - 1}{x} \\right]$.",
      "2. By standard exponential limit theorems: $\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$.",
      "3. The limit is $\\ln 6 - \\ln 2 = \\ln(\\frac{6}{2}) = \\ln 3$."
    ],
    "stepByStepSolutionAr": [
      "١. نعيد كتابة البسط بطرح وإضافة 1: [(6^س - 1)/س] - [(2^س - 1)/س].",
      "٢. بنظرية نهاية الدالة الأسية: نهاية (أ^س - 1)/س = لوـهـ(أ).",
      "٣. الناتج = لوـهـ(6) - لوـهـ(2) = لوـهـ(6 / 2) = لوـهـ(3)."
    ],
    "teacherTipEn": "Theorem: $\\lim_{x \\to 0} \\frac{a^x - b^x}{x} = \\ln(a/b)$.",
    "teacherTipAr": "قاعدة سريعة: نهاية (أ^س - ب^س)/س عند س تؤول لصفر تساوي دائماً لوـهـ(أ/ب)."
  },
  {
    "id": "calc_ch2_db_hots_142",
    "titleEn": "Integral of Reciprocal One Plus Exponential",
    "titleAr": "تكامل 1 / (1 + هـ^س)",
    "difficulty": "hots",
    "questionEn": "Find the indefinite integral: $\\int \\frac{1}{1 + e^x} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int \\frac{1}{1 + e^x} dx$.",
    "optionsEn": [
      "$x - \\ln(1 + e^x) + C$",
      "$\\ln(1 + e^x) + C$",
      "$-\\frac{1}{(1 + e^x)^2} + C$",
      "$e^{-x} + C$"
    ],
    "optionsAr": [
      "س - لوـهـ(1 + هـ^س) + ث",
      "لوـهـ(1 + هـ^س) + ث",
      "-1 / (1 + هـ^س)² + ث",
      "هـ^(-س) + ث"
    ],
    "correctAnswer": "$x - \\ln(1 + e^x) + C$",
    "correctIndex": 0,
    "hintEn": "Add and subtract $e^x$ in the numerator, or multiply numerator and denominator by $e^{-x}$.",
    "hintAr": "أضف واطرح هـ^س في البسط، أو اضرب حدي الكسر في هـ^(-س).",
    "stepByStepSolutionEn": [
      "1. Method 1: $\\frac{1}{1 + e^x} = \\frac{(1 + e^x) - e^x}{1 + e^x} = 1 - \\frac{e^x}{1 + e^x}$.",
      "2. Integrate each term: $\\int 1 dx - \\int \\frac{e^x}{1 + e^x} dx$.",
      "3. The second integral has numerator equal to derivative of denominator, so it equals $\\ln(1 + e^x)$.",
      "4. The result is $x - \\ln(1 + e^x) + C$."
    ],
    "stepByStepSolutionAr": [
      "١. فكرة الحل: كتابة البسط على الصورة (1 + هـ^س - هـ^س) / (1 + هـ^س).",
      "٢. تفكيك الكسر: 1 - [هـ^س / (1 + هـ^س)].",
      "٣. تكامل 1 هو س، وتكامل الكسر الثاني يعطي لوـهـ(المقام) لأن البسط مشتقة المقام.",
      "٤. الناتج = س - لوـهـ(1 + هـ^س) + ث."
    ],
    "teacherTipEn": "Both $x - \\ln(1 + e^x) + C$ and $-\\ln(1 + e^{-x}) + C$ are equivalent forms of the antiderivative.",
    "teacherTipAr": "الصورتان س - لوـهـ(1 + هـ^س) و -لوـهـ(1 + هـ^(-س)) متطابقتان رياضياً."
  },
  {
    "id": "calc_ch2_db_hots_143",
    "titleEn": "Integral of Exp Square Root x",
    "titleAr": "تكامل هـ^(جذر س) بالنسبة لـ س",
    "difficulty": "hots",
    "questionEn": "Find the indefinite integral: $\\int e^{\\sqrt{x}} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int e^{\\sqrt{x}} dx$.",
    "optionsEn": [
      "$2(\\sqrt{x} - 1)e^{\\sqrt{x}} + C$",
      "$(\\sqrt{x} - 1)e^{\\sqrt{x}} + C$",
      "$2\\sqrt{x} e^{\\sqrt{x}} + C$",
      "$e^{\\sqrt{x}} + C$"
    ],
    "optionsAr": [
      "2(جذر س - 1) هـ^(جذر س) + ث",
      "(جذر س - 1) هـ^(جذر س) + ث",
      "2 جذر(س) هـ^(جذر س) + ث",
      "هـ^(جذر س) + ث"
    ],
    "correctAnswer": "$2(\\sqrt{x} - 1)e^{\\sqrt{x}} + C$",
    "correctIndex": 0,
    "hintEn": "Use substitution $u = \\sqrt{x} \\implies x = u^2, dx = 2u du$, then integrate by parts.",
    "hintAr": "استخدم التعويض: ع = جذر(س) فتكون س = ع² و د س = 2 ع د ع، ثم كامل بالتجزيء.",
    "stepByStepSolutionEn": [
      "1. Let $u = \\sqrt{x} \\implies x = u^2 \\implies dx = 2u du$.",
      "2. The integral becomes $\\int 2u e^u du = 2 \\int u e^u du$.",
      "3. Integration by parts: $\\int u e^u du = u e^u - e^u = (u - 1)e^u$.",
      "4. Substitute back $u = \\sqrt{x}$: $2(\\sqrt{x} - 1)e^{\\sqrt{x}} + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض ع = جذر(س)، إذن س = ع²، د س = 2 ع د ع.",
      "٢. يتحول التكامل إلى 2 تكامل (ع هـ^ع د ع).",
      "٣. بالتجزيء: تكامل ع هـ^ع د ع = (ع - 1) هـ^ع.",
      "٤. بالتعويض عن ع بقيمتها: 2 (جذر س - 1) هـ^(جذر س) + ث."
    ],
    "teacherTipEn": "Substitution followed by integration by parts is a standard composite integration pattern.",
    "teacherTipAr": "التعويض المتبوع بالتجزيء نمط تكاملي أساسي في مسائل التفوق في الثانوية العامة."
  },
  {
    "id": "calc_ch2_db_hots_144",
    "titleEn": "Inflection Point of Standard Logistic Curve",
    "titleAr": "نقطة انقلاب المنحنى اللوجستي القياسي 1 / (1 + هـ^(-س))",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the point of inflection of the logistic function $y = \\frac{1}{1 + e^{-x}}$.",
    "questionAr": "أوجد إحداثيات نقطة الانقلاب للدالة اللوجستية $y = \\frac{1}{1 + e^{-x}}$.",
    "optionsEn": [
      "$(0, \\frac{1}{2})$",
      "$(0, 1)$",
      "$(1, \\frac{1}{2})$",
      "$(-1, \\frac{1}{2})$"
    ],
    "optionsAr": [
      "(0، 1/2)",
      "(0، 1)",
      "(1، 1/2)",
      "(-1، 1/2)"
    ],
    "correctAnswer": "$(0, \\frac{1}{2})$",
    "correctIndex": 0,
    "hintEn": "Express derivatives in terms of y: $y' = y(1 - y)$ and $y'' = y'(1 - 2y)$.",
    "hintAr": "عبر عن المشتقات بدلالة ص: صَ = ص(1 - ص) و صً = صَ(1 - 2ص).",
    "stepByStepSolutionEn": [
      "1. Notice $y' = \\frac{e^{-x}}{(1 + e^{-x})^2} = y(1 - y)$.",
      "2. Differentiating again: $y'' = y'(1 - y) + y(-y') = y'(1 - 2y)$.",
      "3. Since $y' > 0$ everywhere, $y'' = 0 \\iff 1 - 2y = 0 \\implies y = 1/2$.",
      "4. From $\\frac{1}{1 + e^{-x}} = \\frac{1}{2} \\implies 1 + e^{-x} = 2 \\implies e^{-x} = 1 \\implies x = 0$.",
      "5. The point of inflection is $(0, 1/2)$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: صَ = ص(1 - ص).",
      "٢. المشتقة الثانية: صً = صَ (1 - 2ص).",
      "٣. نقطة الانقلاب تحدث عندما صً = 0 أي 1 - 2ص = 0 ومنها ص = 1/2.",
      "٤. 1 / (1 + هـ^(-س)) = 1/2 تعطي هـ^(-س) = 1 أي س = 0.",
      "٥. إحداثيات نقطة الانقلاب هي (0، 1/2)."
    ],
    "teacherTipEn": "The inflection point of any symmetric logistic curve occurs exactly at half of its carrying capacity.",
    "teacherTipAr": "نقطة انقلاب أي منحنى لوجستي متناظر تحدث دائماً عند نصف قيمته القصوى."
  },
  {
    "id": "calc_ch2_db_hots_145",
    "titleEn": "Point of Maximum Curvature of Natural Logarithm",
    "titleAr": "نقطة أقصى انحناء لمنحنى اللوغاريتم الطبيعي",
    "difficulty": "hots",
    "questionEn": "The curvature of a plane curve is $\\kappa(x) = \\frac{|y''|}{(1 + y'^2)^{3/2}}$. At what value of $x$ does the curve $y = \\ln x$ achieve its maximum curvature?",
    "questionAr": "انحناء أي منحنى مستوٍ يحسب من $\\kappa(x) = \\frac{|y''|}{(1 + y'^2)^{3/2}}$. عند أي قيمة لـ $x$ يبلغ منحنى $y = \\ln x$ أقصى انحناء له؟",
    "optionsEn": [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{1}{e}$"
    ],
    "optionsAr": [
      "1 / جذر(2)",
      "1 / 2",
      "1",
      "1 / هـ"
    ],
    "correctAnswer": "$\\frac{1}{\\sqrt{2}}$",
    "correctIndex": 0,
    "hintEn": "Compute $\\kappa(x) = \\frac{x}{(x^2 + 1)^{3/2}}$ and maximize with respect to x.",
    "hintAr": "احسب دالة الانحناء ق(س) = س / (س² + 1)^(3/2) ثم أوجد النقطة الحرجة العظمى لها.",
    "stepByStepSolutionEn": [
      "1. For $y = \\ln x$: $y' = 1/x$ and $y'' = -1/x^2$.",
      "2. Curvature: $\\kappa(x) = \\frac{1/x^2}{(1 + 1/x^2)^{3/2}} = \\frac{1/x^2}{\\frac{(x^2 + 1)^{3/2}}{x^3}} = \\frac{x}{(x^2 + 1)^{3/2}}$.",
      "3. Differentiate $\\kappa(x)$: $\\kappa'(x) = \\frac{(x^2 + 1)^{3/2}(1) - x \\cdot \\frac{3}{2}(x^2 + 1)^{1/2}(2x)}{(x^2 + 1)^3} = \\frac{(x^2 + 1) - 3x^2}{(x^2 + 1)^{5/2}} = \\frac{1 - 2x^2}{(x^2 + 1)^{5/2}}$.",
      "4. Setting $\\kappa'(x) = 0 \\implies 1 - 2x^2 = 0 \\implies x^2 = 1/2 \\implies x = \\frac{1}{\\sqrt{2}}$ (since $x > 0$)."
    ],
    "stepByStepSolutionAr": [
      "١. لدالة اللوغاريتم: صَ = 1/س، صً = -1/س².",
      "٢. دالة الانحناء بعد التبسيط: ق(س) = س / (س² + 1)^(3/2).",
      "٣. باشتقاق دالة الانحناء بالنسبة لـ س ومساواتها بالصفر:",
      "   البسط = (س² + 1) - 3س² = 1 - 2س² = 0.",
      "٤. 2س² = 1 ومنها س = 1 / جذر(2)."
    ],
    "teacherTipEn": "Maximum curvature of $y = \\ln x$ is a classic Olympiad application of differentiation.",
    "teacherTipAr": "أقصى انحناء لمنحنى اللوغاريتم مسألة تفكير عليا نموذجية تجمع بين المشتقات الأولى والثانية والقصوى."
  },
  {
    "id": "calc_ch2_db_hots_146",
    "titleEn": "Definite Integral with Logarithmic Substitution",
    "titleAr": "تكامل محدد بالتعويض اللوغاريتمي",
    "difficulty": "hots",
    "questionEn": "Find the exact numerical value of the integral: $\\int_1^e \\frac{\\ln x}{x (1 + (\\ln x)^2)} dx$.",
    "questionAr": "أوجد القيمة العددية الدقيقة للتكامل: $\\int_1^e \\frac{\\ln x}{x (1 + (\\ln x)^2)} dx$.",
    "optionsEn": [
      "$\\frac{1}{2} \\ln 2$",
      "$\\ln 2$",
      "$\\frac{1}{4}$",
      "$\\frac{\\pi}{4}$"
    ],
    "optionsAr": [
      "1/2 لوـهـ(2)",
      "لوـهـ(2)",
      "1 / 4",
      "ط / 4"
    ],
    "correctAnswer": "$\\frac{1}{2} \\ln 2$",
    "correctIndex": 0,
    "hintEn": "Substitute $u = \\ln x \\implies du = \\frac{1}{x} dx$.",
    "hintAr": "استخدم التعويض: ع = لوـهـ(س) فتكون د ع = (1/س) د س.",
    "stepByStepSolutionEn": [
      "1. Let $u = \\ln x \\implies du = \\frac{1}{x} dx$.",
      "2. Change limits of integration: when $x = 1 \\implies u = 0$; when $x = e \\implies u = 1$.",
      "3. The integral becomes $\\int_0^1 \\frac{u}{1 + u^2} du$.",
      "4. $\\int_0^1 \\frac{u}{1 + u^2} du = \\frac{1}{2} \\left[ \\ln(1 + u^2) \\right]_0^1 = \\frac{1}{2} (\\ln 2 - \\ln 1) = \\frac{1}{2} \\ln 2$."
    ],
    "stepByStepSolutionAr": [
      "١. بالتعويض: ع = لوـهـ(س)، إذن د ع = (1/س) د س.",
      "٢. حدود التكامل: عند س = 1 تكون ع = 0، وعند س = هـ تكون ع = 1.",
      "٣. يتحول التكامل إلى تكامل ع / (1 + ع²) د ع من 0 إلى 1.",
      "٤. الناتج = (1/2) [لوـهـ(1 + ع²)] من 0 إلى 1 = (1/2) لوـهـ(2)."
    ],
    "teacherTipEn": "Notice that $(1/2)\\ln 2 = \\ln\\sqrt{2}$.",
    "teacherTipAr": "تذكر أن (1/2) لوـهـ(2) هي نفسها لوـهـ(جذر 2)."
  },
  {
    "id": "calc_ch2_db_hots_147",
    "titleEn": "Logarithmic Differentiation of Complex Product",
    "titleAr": "الاشتقاق اللوغاريتمي لحاصل ضرب مقادير خطية مرفوعة لقوى",
    "difficulty": "hots",
    "questionEn": "For the function $f(x) = (x + 1)^2 (x + 2)^3 (x + 3)^4$, find the value of $f'(0)$.",
    "questionAr": "للدالة $f(x) = (x + 1)^2 (x + 2)^3 (x + 3)^4$، أوجد قيمة المشتقة الأولى $f'(0)$.",
    "optionsEn": [
      "$3132$",
      "$648$",
      "$1566$",
      "$6264$"
    ],
    "optionsAr": [
      "3132",
      "648",
      "1566",
      "6264"
    ],
    "correctAnswer": "$3132$",
    "correctIndex": 0,
    "hintEn": "Use logarithmic differentiation: $\\frac{f'(x)}{f(x)} = \\frac{2}{x+1} + \\frac{3}{x+2} + \\frac{4}{x+3}$.",
    "hintAr": "استخدم الاشتقاق اللوغاريتمي: دَ(س) / د(س) = 2/(س+1) + 3/(س+2) + 4/(س+3).",
    "stepByStepSolutionEn": [
      "1. Compute $f(0) = (1)^2 (2)^3 (3)^4 = 1 \\times 8 \\times 81 = 648$.",
      "2. Taking the natural logarithm: $\\ln f(x) = 2\\ln(x + 1) + 3\\ln(x + 2) + 4\\ln(x + 3)$.",
      "3. Differentiating: $\\frac{f'(x)}{f(x)} = \\frac{2}{x + 1} + \\frac{3}{x + 2} + \\frac{4}{x + 3}$.",
      "4. At $x = 0$: $\\frac{f'(0)}{648} = \\frac{2}{1} + \\frac{3}{2} + \\frac{4}{3} = \\frac{12 + 9 + 8}{6} = \\frac{29}{6}$.",
      "5. $f'(0) = 648 \\times \\frac{29}{6} = 108 \\times 29 = 3132$."
    ],
    "stepByStepSolutionAr": [
      "١. نحسب د(0) = 1² × 2³ × 3⁴ = 1 × 8 × 81 = 648.",
      "٢. بأخذ اللوغاريتم الطبيعي: لوـهـ د(س) = 2 لوـهـ(س+1) + 3 لوـهـ(س+2) + 4 لوـهـ(س+3).",
      "٣. بالاشتقاق: دَ(س) / د(س) = 2/(س+1) + 3/(س+2) + 4/(س+3).",
      "٤. بالتعويض عن س = 0: دَ(0) / 648 = 2 + 1.5 + 4/3 = 29 / 6.",
      "٥. دَ(0) = 648 × (29 / 6) = 108 × 29 = 3132."
    ],
    "teacherTipEn": "Logarithmic differentiation converts a massive product rule into a simple sum of fractions.",
    "teacherTipAr": "الاشتقاق اللوغاريتمي يحول حاصل ضرب العوامل المعقدة إلى مجموع كسور بسيطة يسهل حسابها."
  },
  {
    "id": "calc_ch2_db_hots_148",
    "titleEn": "Trigonometric Exponential Integral Special Form",
    "titleAr": "تكامل أسي مثلثي خاص هـ^س (ظا(س/2) + 0.5 قا²(س/2))",
    "difficulty": "hots",
    "questionEn": "Evaluate the trigonometric exponential integral: $\\int e^x \\left(\\frac{1 + \\sin x}{1 + \\cos x}\\right) dx$.",
    "questionAr": "احسب ناتج التكامل الأسي المثلثي: $\\int e^x \\left(\\frac{1 + \\sin x}{1 + \\cos x}\\right) dx$.",
    "optionsEn": [
      "$e^x \\tan(\\frac{x}{2}) + C$",
      "$e^x \\sec(\\frac{x}{2}) + C$",
      "$e^x \\cot(\\frac{x}{2}) + C$",
      "$e^x (1 + \\sin x) + C$"
    ],
    "optionsAr": [
      "هـ^س ظا(س/2) + ث",
      "هـ^س قا(س/2) + ث",
      "هـ^س ظتا(س/2) + ث",
      "هـ^س (1 + جا س) + ث"
    ],
    "correctAnswer": "$e^x \\tan(\\frac{x}{2}) + C$",
    "correctIndex": 0,
    "hintEn": "Use half-angle identities to write the integrand in the form $e^x [g(x) + g'(x)]$.",
    "hintAr": "استخدم قوانين نصف الزاوية لكتابة المقدار على الصورة هـ^س [د(س) + دَ(س)].",
    "stepByStepSolutionEn": [
      "1. Use half-angle identities: $1 + \\cos x = 2\\cos^2(\\frac{x}{2})$ and $\\sin x = 2\\sin(\\frac{x}{2})\\cos(\\frac{x}{2})$.",
      "2. $\\frac{1 + \\sin x}{1 + \\cos x} = \\frac{1}{2\\cos^2(x/2)} + \\frac{2\\sin(x/2)\\cos(x/2)}{2\\cos^2(x/2)} = \\frac{1}{2}\\sec^2(\\frac{x}{2}) + \\tan(\\frac{x}{2})$.",
      "3. Notice that the derivative of $\\tan(\\frac{x}{2})$ is $\\frac{1}{2}\\sec^2(\\frac{x}{2})$.",
      "4. By theorem $\\int e^x [g(x) + g'(x)] dx = e^x g(x) + C$, the integral is $e^x \\tan(\\frac{x}{2}) + C$."
    ],
    "stepByStepSolutionAr": [
      "١. بقوانين نصف الزاوية: 1 + جتا س = 2 جتا²(س/2)، جا س = 2 جا(س/2) جتا(س/2).",
      "٢. بتبسيط الكسر: 1/2 قا²(س/2) + ظا(س/2).",
      "٣. نلاحظ أن مشتقة ظا(س/2) هي 1/2 قا²(س/2).",
      "٤. بتطبيق القاعدة: تكامل هـ^س [ق(س) + قَ(س)] د س = هـ^س ق(س) + ث، ينتج: هـ^س ظا(س/2) + ث."
    ],
    "teacherTipEn": "Recognizing the $e^x(f + f')$ pattern avoids tedious integration by parts.",
    "teacherTipAr": "ملاحظة صورة هـ^س [د + دَ] تختصر خطوات التجزيء الطويلة تماماً."
  },
  {
    "id": "calc_ch2_db_hots_149",
    "titleEn": "Symmetric Definite Integral King Property",
    "titleAr": "تكامل محدد شهير بخاصية التماثل (خاصية الملك)",
    "difficulty": "hots",
    "questionEn": "Using symmetry properties of definite integrals, calculate: $\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
    "questionAr": "بالاستفادة من خواص التماثل في التكامل المحدد، احسب: $\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$1$",
      "$0$"
    ],
    "optionsAr": [
      "ط / 4",
      "ط / 2",
      "1",
      "0"
    ],
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Use property $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$.",
    "hintAr": "استخدم خاصية التماثل: تكامل د(س) = تكامل د(أ + ب - س).",
    "stepByStepSolutionEn": [
      "1. Let $I = \\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
      "2. Apply $x \\to \\frac{\\pi}{2} - x$: $\\sin(\\frac{\\pi}{2} - x) = \\cos x$ and $\\cos(\\frac{\\pi}{2} - x) = \\sin x$.",
      "3. $I = \\int_0^{\\pi/2} \\frac{\\cos x}{\\cos x + \\sin x} dx$.",
      "4. Adding the two equations: $2I = \\int_0^{\\pi/2} \\frac{\\sin x + \\cos x}{\\sin x + \\cos x} dx = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2}$.",
      "5. Therefore, $I = \\frac{\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. نفرض ت = التكامل المطلوب.",
      "٢. بالتعويض عن س بـ (ط/2 - س): يتحول جا س إلى جتا س وجتا س إلى جا س.",
      "٣. ت = تكامل [جتا س / (جتا س + جا س)] د س.",
      "٤. بجمع المعادلتين: 2 ت = تكامل 1 د س = ط / 2.",
      "٥. إذن ت = ط / 4."
    ],
    "teacherTipEn": "One of the most elegant and famous definite integral results in mathematics.",
    "teacherTipAr": "من أشهر وأروع نتائج التكامل المحدد في الرياضيات العالمية."
  },
  {
    "id": "calc_ch2_db_hots_150",
    "titleEn": "Volume of Revolution of x Exp Negative x",
    "titleAr": "حجم الجسم الناشئ من دوران س هـ^(-س) حول محور السينات",
    "difficulty": "hots",
    "questionEn": "Find the volume of the solid generated by revolving the region bounded by $y = x e^{-x}$ and the x-axis for $x \\in [0, \\infty)$ about the x-axis.",
    "questionAr": "أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بين $y = x e^{-x}$ ومحور السينات لـ $x \\in [0، \\infty)$ دورة كاملة حول محور السينات.",
    "optionsEn": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{8}$"
    ],
    "optionsAr": [
      "ط / 4",
      "ط / 2",
      "ط",
      "ط / 8"
    ],
    "correctAnswer": "$\\frac{\\pi}{4}$",
    "correctIndex": 0,
    "hintEn": "Use volume of revolution formula: $V = \\pi \\int_0^\\infty y^2 dx = \\pi \\int_0^\\infty x^2 e^{-2x} dx$.",
    "hintAr": "استخدم قانون حجم الدوران: الحجم = ط × تكامل ص² د س من صفر للمالانهاية.",
    "stepByStepSolutionEn": [
      "1. Volume formula: $V = \\pi \\int_0^\\infty (x e^{-x})^2 dx = \\pi \\int_0^\\infty x^2 e^{-2x} dx$.",
      "2. Substitute $u = 2x \\implies x = u/2, dx = du/2$.",
      "3. $V = \\pi \\int_0^\\infty (\\frac{u}{2})^2 e^{-u} (\\frac{du}{2}) = \\frac{\\pi}{8} \\int_0^\\infty u^2 e^{-u} du$.",
      "4. Since $\\int_0^\\infty u^2 e^{-u} du = 2! = 2$, we obtain: $V = \\frac{\\pi}{8} \\times 2 = \\frac{\\pi}{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الحجم: ح = ط × تكامل (س هـ^(-س))² د س = ط × تكامل (س² هـ^(-2س)) د س.",
      "٢. بالتعويض ع = 2س ينتج: ح = (ط / 8) × تكامل (ع² هـ^(-ع) د ع).",
      "٣. قيمة التكامل = !2 = 2.",
      "٤. الحجم = (ط / 8) × 2 = ط / 4."
    ],
    "teacherTipEn": "Revolving an improper exponential region yields a finite, beautifully compact volume.",
    "teacherTipAr": "دوران منطقة أسية غير محدودة يعطي حجماً منتهياً مدمجاً يساوي ط/4."
  },
  {
    "id": "calc_ch2_db_hots_151",
    "titleEn": "Tangent Line to Exponential Passing Through Origin",
    "titleAr": "مماس منحنى الدالة الأسية المار بنقطة الأصل",
    "difficulty": "hots",
    "questionEn": "Find the coordinates of the point of tangency on the curve $y = e^{2x}$ whose tangent line passes through the origin $(0, 0)$.",
    "questionAr": "أوجد إحداثيات نقطة التماس على منحنى الدالة $y = e^{2x}$ التي يمر مماسها بنقطة الأصل $(0, 0)$.",
    "optionsEn": [
      "$\\left(\\frac{1}{2}, e\\right)$",
      "$(1, e^2)$",
      "$\\left(\\frac{1}{4}, \\sqrt{e}\\right)$",
      "$(0, 1)$"
    ],
    "optionsAr": [
      "$\\left(\\frac{1}{2}, e\\right)$",
      "$(1, e^2)$",
      "$\\left(\\frac{1}{4}, \\sqrt{e}\\right)$",
      "$(0, 1)$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\left(\\frac{1}{2}, e\\right)$",
    "hintEn": "Let $(x_0, y_0)$ be the point of tangency. The slope is $m = y'(x_0) = \\frac{y_0 - 0}{x_0 - 0}$.",
    "hintAr": "افرض نقطة التماس $(x_0, y_0)$، وميل المماس هو $m = y'(x_0) = \\frac{y_0 - 0}{x_0 - 0}$.",
    "teacherTipEn": "For any curve $y = e^{kx}$, the tangent line passing through the origin always has point of tangency $\\left(\\frac{1}{k}, e\\right)$.",
    "teacherTipAr": "قاعدة عامة: لأي منحنى $y = e^{kx}$، المماس المار بنقطة الأصل تكون نقطة تماسه دائماً $\\left(\\frac{1}{k}, e\\right)$.",
    "stepByStepSolutionEn": [
      "1. The slope of the tangent at $(x_0, e^{2x_0})$ is $m = \\frac{dy}{dx}\\Big|_{x_0} = 2e^{2x_0}$.",
      "2. Since the tangent passes through the origin $(0, 0)$, its slope is also given by $\\frac{e^{2x_0} - 0}{x_0 - 0} = \\frac{e^{2x_0}}{x_0}$.",
      "3. Equating both expressions for the slope: $2e^{2x_0} = \\frac{e^{2x_0}}{x_0} \\implies 2x_0 = 1 \\implies x_0 = \\frac{1}{2}$.",
      "4. Finding the $y$-coordinate: $y_0 = e^{2(1/2)} = e$. Thus the point of tangency is $\\left(\\frac{1}{2}, e\\right)$."
    ],
    "stepByStepSolutionAr": [
      "١. ميل المماس للمنحنى عند نقطة التماس $(x_0, e^{2x_0})$ هو $m = 2e^{2x_0}$.",
      "٢. بما أن المماس يمر بنقطة الأصل $(0, 0)$، فإن ميله يساوي أيضاً $\\frac{e^{2x_0} - 0}{x_0 - 0} = \\frac{e^{2x_0}}{x_0}$.",
      "٣. بمساواة صيغتي الميل: $2e^{2x_0} = \\frac{e^{2x_0}}{x_0} \\implies 2x_0 = 1 \\implies x_0 = \\frac{1}{2}$.",
      "٤. إيجاد الإحداثي الصادي: $y_0 = e^{2(1/2)} = e$، فتكون نقطة التماس هي $\\left(\\frac{1}{2}, e\\right)$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_152",
    "titleEn": "Definite Integral of Symmetric Exponential Function",
    "titleAr": "تكامل محدد لدالة كسرية أسية متماثلة",
    "difficulty": "hots",
    "questionEn": "Determine the value of the definite integral using King's property: $\\int_{-2}^{2} \\frac{x^4}{1 + e^x} \\, dx$.",
    "questionAr": "عيّن قيمة التكامل المحدد باستخدام خاصية الملك: $\\int_{-2}^{2} \\frac{x^4}{1 + e^x} \\, dx$.",
    "optionsEn": [
      "$\\frac{32}{5}$",
      "$\\frac{64}{5}$",
      "$\\frac{16}{5}$",
      "$0$"
    ],
    "optionsAr": [
      "$\\frac{32}{5}$",
      "$\\frac{64}{5}$",
      "$\\frac{16}{5}$",
      "$0$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{32}{5}$",
    "hintEn": "Use King's property: $\\int_{-a}^a f(x) dx = \\int_{-a}^a f(-x) dx$, then add the two integrals.",
    "hintAr": "استخدم خاصية انعكاس حدود التكامل: $\\int_{-a}^a f(x)dx = \\int_{-a}^a f(-x)dx$ ثم اجمع التكاملين.",
    "teacherTipEn": "The identity $\\frac{1}{1+e^x} + \\frac{1}{1+e^{-x}} = 1$ is an indispensable tool in competitive calculus integrals.",
    "teacherTipAr": "المتطابقة $\\frac{1}{1+e^x} + \\frac{1}{1+e^{-x}} = 1$ هي سر التخلص من المقامات الأسية في التكاملات المتماثلة.",
    "stepByStepSolutionEn": [
      "Let $I = \\int_{-2}^{2} \\frac{x^4}{1+e^x} dx$.",
      "Replace $x$ with $-x$: $I = \\int_{-2}^{2} \\frac{x^4 e^x}{1+e^x} dx$.",
      "Add: $2I = \\int_{-2}^{2} x^4 \\left(\\frac{1+e^x}{1+e^x}\\right) dx = \\int_{-2}^{2} x^4 dx$.",
      "Evaluate: $I = \\int_0^2 x^4 dx = \\frac{32}{5}$."
    ],
    "stepByStepSolutionAr": [
      "بفرض التكامل $I$.",
      "بالتعويض عن $x$ بـ $-x$: نحصل على صورة مكافئة $I = \\int_{-2}^2 \\frac{x^4 e^x}{1+e^x} dx$.",
      "جمع المعادلتين: $2I = \\int_{-2}^2 x^4 dx$.",
      "حساب الناتج: $I = [\\frac{x^5}{5}]_0^2 = \\frac{32}{5}$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_153",
    "titleEn": "Infinite Power Tower Derivative",
    "titleAr": "مشتقة برج القوى اللانهائي",
    "difficulty": "hots",
    "questionEn": "If $y = x^{x^{x^{\\dots}}}$ (an infinite tower of powers) for valid $x$, find the value of $\\frac{dy}{dx}$ at the point where $y = 2$.",
    "questionAr": "إذا كان $y = x^{x^{x^{\\dots}}}$ (برج قوى لانهائي) لقيم $x$ المناسبة، فأوجد قيمة $\\frac{dy}{dx}$ عند النقطة التي يكون عندها $y = 2$.",
    "optionsEn": [
      "$\\frac{4}{\\sqrt{2}(1 - 2\\ln\\sqrt{2})}$",
      "$\\frac{2}{\\sqrt{2}(1 - \\ln 2)}$",
      "$\\frac{4}{1 - \\ln 2}$",
      "$2\\sqrt{2}$"
    ],
    "optionsAr": [
      "$\\frac{4}{\\sqrt{2}(1 - 2\\ln\\sqrt{2})}$",
      "$\\frac{2}{\\sqrt{2}(1 - \\ln 2)}$",
      "$\\frac{4}{1 - \\ln 2}$",
      "$2\\sqrt{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{4}{\\sqrt{2}(1 - 2\\ln\\sqrt{2})}$",
    "hintEn": "Recognize self-similarity: $y = x^y$. Take $\\ln$ of both sides and differentiate implicitly.",
    "hintAr": "استفد من التشابه الذاتي: $y = x^y$. خذ اللوغاريتم للطرفين واشتق ضمنياً.",
    "teacherTipEn": "Infinite towers converge if and only if $e^{-e} \\leq x \\leq e^{1/e}$. Here $x = \\sqrt{2} \\approx 1.414 < e^{1/e} \\approx 1.444$, so it is well within the convergence range!",
    "teacherTipAr": "برج القوى اللانهائي يتقارب فقط إذا كان $e^{-e} \\leq x \\leq e^{1/e}$، وهنا $x = \\sqrt{2} \\approx 1.414$ وهو يقع تماماً داخل نطاق التقارب!",
    "stepByStepSolutionEn": [
      "Self-similar identity: $y = x^y$.",
      "Take log: $\\ln y = y \\ln x$.",
      "When $y = 2$: $2 = x^2 \\implies x = \\sqrt{2}$.",
      "Differentiate: $\\frac{y'}{y} = y' \\ln x + \\frac{y}{x} \\implies y' = \\frac{y^2}{x(1 - y\\ln x)}$.",
      "Substitute values: $y' = \\frac{4}{\\sqrt{2}(1 - 2\\ln\\sqrt{2})}$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة الذاتية: $y = x^y$.",
      "أخذ اللوغاريتم: $\\ln y = y\\ln x$.",
      "عند $y = 2$ نجد $x = \\sqrt{2}$.",
      "الاشتقاق الضمني: $y' = \\frac{y^2}{x(1 - y\\ln x)}$.",
      "التعويض: $y' = \\frac{4}{\\sqrt{2}(1 - 2\\ln\\sqrt{2})}$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_154",
    "titleEn": "Integration by Parts: Logarithmic Product",
    "titleAr": "تكامل بالتجزيء لحاصل ضرب لوغاريتمي",
    "difficulty": "hots",
    "questionEn": "Calculate the definite integral by parts: $\\int_{1}^{e} x [\\ln(x)]^2 \\, dx$.",
    "questionAr": "احسب التكامل المحدد بطريقة التجزيء: $\\int_{1}^{e} x [\\ln(x)]^2 \\, dx$.",
    "optionsEn": [
      "$\\frac{e^2 - 1}{4}$",
      "$\\frac{e^2 + 1}{4}$",
      "$\\frac{e^2}{4}$",
      "$\\frac{e^2 - 1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{e^2 - 1}{4}$",
      "$\\frac{e^2 + 1}{4}$",
      "$\\frac{e^2}{4}$",
      "$\\frac{e^2 - 1}{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{e^2 - 1}{4}$",
    "hintEn": "Apply integration by parts twice with $u = (\\ln x)^2$ then $u = \\ln x$.",
    "hintAr": "طبق التكامل بالتجزيء مرتين بوضع $u = (\\ln x)^2$ أولاً ثم $u = \\ln x$.",
    "teacherTipEn": "Setting $x = e^t$ transforms the integral to $\\int_0^1 t^2 e^{2t} dt$, which is often easier to compute via tabular integration.",
    "teacherTipAr": "التعويض $x = e^t$ يحول التكامل إلى $\\int_0^1 t^2 e^{2t} dt$، والذي يمكن حله بالجدول بكل سهولة.",
    "stepByStepSolutionEn": [
      "First parts: $u = (\\ln x)^2, dv = x dx \\implies \\frac{x^2}{2}(\\ln x)^2 - \\int x \\ln x dx$.",
      "Second parts: $\\int x \\ln x dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$.",
      "Antiderivative: $F(x) = \\frac{x^2}{2}(\\ln x)^2 - \\frac{x^2}{2}\\ln x + \\frac{x^2}{4}$.",
      "Evaluate from 1 to $e$: $\\frac{e^2}{4} - \\frac{1}{4} = \\frac{e^2 - 1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "التجزيء الأول: $u = (\\ln x)^2, dv = x dx \\implies \\frac{x^2}{2}(\\ln x)^2 - \\int x\\ln x dx$.",
      "التجزيء الثاني: $\\int x\\ln x dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$.",
      "الدالة المقابلة: $F(x) = \\frac{x^2}{2}(\\ln x)^2 - \\frac{x^2}{2}\\ln x + \\frac{x^2}{4}$.",
      "التعويض بحدود التكامل: $\\frac{e^2 - 1}{4}$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_155",
    "titleEn": "Common Tangency between Line and Exponential Curve",
    "titleAr": "شرط تماس مستقيم لمنحنى أسي",
    "difficulty": "hots",
    "questionEn": "Find the positive value of $k$ such that the line $y = kx$ is tangent to the exponential curve $y = e^{2x}$.",
    "questionAr": "أوجد القيمة الموجبة للثابت $k$ التي تجعل المستقيم $y = kx$ مماساً للمنحنى الأسي $y = e^{2x}$.",
    "optionsEn": [
      "$2e$",
      "$e$",
      "$e^2$",
      "$\\frac{e}{2}$"
    ],
    "optionsAr": [
      "$2e$",
      "$e$",
      "$e^2$",
      "$\\frac{e}{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$2e$",
    "hintEn": "Set curve value equal to line value: $e^{2x} = kx$, and derivatives equal: $2e^{2x} = k$.",
    "hintAr": "ساوِ قيمة الدالة بمعادلة المستقيم $e^{2x} = kx$، والمشتقات $2e^{2x} = k$.",
    "teacherTipEn": "Equating $f(x) = g(x)$ and $f'(x) = g'(x)$ is the standard algebraic procedure for common tangency.",
    "teacherTipAr": "مساواة $f(x) = g(x)$ مع مساواة المشتقات $f'(x) = g'(x)$ هي الطريقة الجبرية النموذجية لإيجاد شروط التماس.",
    "stepByStepSolutionEn": [
      "Equate values: $kx_0 = e^{2x_0}$.",
      "Equate slopes: $k = 2e^{2x_0}$.",
      "Substitute $k$: $2x_0 e^{2x_0} = e^{2x_0} \\implies x_0 = 1/2$.",
      "Find $k$: $k = 2e^{2(1/2)} = 2e$."
    ],
    "stepByStepSolutionAr": [
      "تساوي القيم: $kx_0 = e^{2x_0}$.",
      "تساوي الميول: $k = 2e^{2x_0}$.",
      "التعويض: $2x_0 e^{2x_0} = e^{2x_0} \\implies x_0 = 1/2$.",
      "حساب $k$: $k = 2e$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_156",
    "titleEn": "Limit of Power with Exponential Difference",
    "titleAr": "نهاية أسية لفرق دوال أسية عند اللانهاية",
    "difficulty": "hots",
    "questionEn": "Calculate the sequence limit as $n \\to \\infty$: $\\lim_{n \\to \\infty} \\left(\\frac{n+3}{n-1}\\right)^n$.",
    "questionAr": "احسب نهاية المتتابعة عندما $n \\to \\infty$: $\\lim_{n \\to \\infty} \\left(\\frac{n+3}{n-1}\\right)^n$.",
    "optionsEn": [
      "$e^4$",
      "$e^3$",
      "$e^2$",
      "$e$"
    ],
    "optionsAr": [
      "$e^4$",
      "$e^3$",
      "$e^2$",
      "$e$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$e^4$",
    "hintEn": "Divide numerator and denominator by $n$: $\\lim_{n \\to \\infty} \\frac{(1 + 3/n)^n}{(1 - 1/n)^n}$.",
    "hintAr": "اقسم كلاً من البسط والمقام على $n$: $\\lim_{n \\to \\infty} \\frac{(1 + 3/n)^n}{(1 - 1/n)^n}$.",
    "teacherTipEn": "Notice that the difference between the constant terms $3 - (-1) = 4$ directly gives the exponent of $e$.",
    "teacherTipAr": "لاحظ أن الفرق بين حدي الثوابت $3 - (-1) = 4$ يعطي أس العدد النيبيري $e$ مباشرة.",
    "stepByStepSolutionEn": [
      "Rewrite: $\\lim_{n \\to \\infty} \\frac{(1 + 3/n)^n}{(1 - 1/n)^n}$.",
      "Numerator limit: $e^3$.",
      "Denominator limit: $e^{-1}$.",
      "Quotient: $e^3 / e^{-1} = e^4$."
    ],
    "stepByStepSolutionAr": [
      "إعادة كتابة الكسر: $\\lim_{n \\to \\infty} \\frac{(1 + 3/n)^n}{(1 - 1/n)^n}$.",
      "نهاية البسط: $e^3$.",
      "نهاية المقام: $e^{-1}$.",
      "قسمة النهايتين: $e^3 / e^{-1} = e^4$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_157",
    "titleEn": "Definite Integral with Exponential and Derivative Sum",
    "titleAr": "تكامل محدد لدالة أسية مضروبة في مجموع دالة ومشتقتها",
    "difficulty": "hots",
    "questionEn": "Compute the value of the definite integral: $\\int_{0}^{1} \\frac{x e^x}{(1+x)^2} \\, dx$.",
    "questionAr": "احسب القيمة العددية للتكامل المحدد: $\\int_{0}^{1} \\frac{x e^x}{(1+x)^2} \\, dx$.",
    "optionsEn": [
      "$\\frac{e}{2} - 1$",
      "$\\frac{e}{2}$",
      "$e - 1$",
      "$\\frac{e - 1}{2}$"
    ],
    "optionsAr": [
      "$\\frac{e}{2} - 1$",
      "$\\frac{e}{2}$",
      "$e - 1$",
      "$\\frac{e - 1}{2}$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$\\frac{e}{2} - 1$",
    "hintEn": "Decompose $\\frac{x}{(1+x)^2} = \\frac{1}{1+x} - \\frac{1}{(1+x)^2}$ and use $\\int e^x [f(x) + f'(x)] dx = e^x f(x)$.",
    "hintAr": "فكك $\\frac{x}{(1+x)^2} = \\frac{1}{1+x} - \\frac{1}{(1+x)^2}$ واستخدم قاعدة $\\int e^x [f(x) + f'(x)] dx = e^x f(x)$.",
    "teacherTipEn": "The form $\\int e^x [f(x) + f'(x)] dx = e^x f(x) + C$ is one of the most elegant and frequently tested patterns in advanced calculus!",
    "teacherTipAr": "الصورة $\\int e^x [f(x) + f'(x)] dx = e^x f(x) + C$ من أجمل الأنماط وأكثرها تكراراً في امتحانات التفاضل المتقدمة!",
    "stepByStepSolutionEn": [
      "Decompose: $\\frac{x}{(1+x)^2} = \\frac{1}{1+x} - \\frac{1}{(1+x)^2}$.",
      "Identify $f(x) = \\frac{1}{1+x}$, so $f'(x) = -\\frac{1}{(1+x)^2}$.",
      "Antiderivative: $\\int e^x [f(x) + f'(x)] dx = \\frac{e^x}{1+x}$.",
      "Evaluate from 0 to 1: $\\frac{e}{2} - 1$."
    ],
    "stepByStepSolutionAr": [
      "تفكيك الكسر: $\\frac{x}{(1+x)^2} = \\frac{1}{1+x} - \\frac{1}{(1+x)^2}$.",
      "تحديد الدالة: $f(x) = \\frac{1}{1+x}$ ومشتقتها $f'(x) = -\\frac{1}{(1+x)^2}$.",
      "الدالة المقابلة: $\\frac{e^x}{1+x}$.",
      "التعويض: $\\frac{e}{2} - 1$."
    ]
  },
  {
    "id": "calc_ch2_db_hots_158",
    "titleEn": "Inflection Point of Gaussian Bell Curve",
    "titleAr": "نقطة انقلاب لمنحنى غاوسي",
    "difficulty": "hots",
    "questionEn": "Find the positive x-coordinate of the inflection point of the Gaussian curve $y = e^{-x^2/2}$.",
    "questionAr": "أوجد الإحداثي السيني الموجب لنقطة الانقلاب لمنحنى الجرس الغاوسي $y = e^{-x^2/2}$.",
    "optionsEn": [
      "$1$",
      "$\\sqrt{2}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$2$"
    ],
    "optionsAr": [
      "$1$",
      "$\\sqrt{2}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$2$"
    ],
    "correctIndex": 0,
    "correctAnswer": "$1$",
    "hintEn": "Compute the second derivative $y'' = (x^2 - 1)e^{-x^2/2}$ and solve $y'' = 0$.",
    "hintAr": "احسب المشتقة الثانية $y'' = (x^2 - 1)e^{-x^2/2}$ ثم حل $y'' = 0$.",
    "teacherTipEn": "In statistics, the inflection points of the standard normal distribution curve occur exactly at $\\mu \\pm \\sigma = 0 \\pm 1$.",
    "teacherTipAr": "في الإحصاء، تقع نقطتا الانقلاب للتوزيع الطبيعي المعياري تماماً عند $\\mu \\pm \\sigma = 0 \\pm 1$.",
    "stepByStepSolutionEn": [
      "First derivative: $y' = -x e^{-x^2/2}$.",
      "Second derivative: $y'' = -e^{-x^2/2} + x^2 e^{-x^2/2} = (x^2 - 1)e^{-x^2/2}$.",
      "Set $y'' = 0 \\implies x^2 - 1 = 0 \\implies x = \\pm 1$.",
      "Positive x-coordinate is $1$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $y' = -x e^{-x^2/2}$.",
      "المشتقة الثانية: $y'' = (x^2 - 1)e^{-x^2/2}$.",
      "وضع $y'' = 0 \\implies x^2 = 1 \\implies x = \\pm 1$.",
      "الإحداثي السيني الموجب هو $1$."
    ]
  }
]
};
