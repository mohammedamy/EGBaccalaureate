import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacAnaCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_ana_ch2_db_easy_01",
    "titleEn": "Exponential Derivative Rule #1",
    "titleAr": "مشتقة الدالة الأسية رقم 1",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{2x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{2x}$.",
    "optionsEn": [
      "$f'(x) = 2e^{2x}$",
      "$f'(x) = e^{2x}$",
      "$f'(x) = \\frac{1}{2}e^{2x}$",
      "$f'(x) = 2e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = 2e^{2x}$",
      "$f'(x) = e^{2x}$",
      "$f'(x) = \\frac{1}{2}e^{2x}$",
      "$f'(x) = 2e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 2e^{2x}$",
    "correctIndex": 0,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 2x \\implies u' = 2$.",
      "3. Thus $f'(x) = 2e^{2x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 2x$ هي $2$.",
      "٣. إذن $f'(x) = 2e^{2x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_02",
    "titleEn": "Exponential Derivative Rule #2",
    "titleAr": "مشتقة الدالة الأسية رقم 2",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{3x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{3x}$.",
    "optionsEn": [
      "$f'(x) = e^{3x}$",
      "$f'(x) = 3e^{3x}$",
      "$f'(x) = \\frac{1}{3}e^{3x}$",
      "$f'(x) = 3e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{3x}$",
      "$f'(x) = 3e^{3x}$",
      "$f'(x) = \\frac{1}{3}e^{3x}$",
      "$f'(x) = 3e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 3e^{3x}$",
    "correctIndex": 1,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 3x \\implies u' = 3$.",
      "3. Thus $f'(x) = 3e^{3x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 3x$ هي $3$.",
      "٣. إذن $f'(x) = 3e^{3x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_03",
    "titleEn": "Exponential Derivative Rule #3",
    "titleAr": "مشتقة الدالة الأسية رقم 3",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{4x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{4x}$.",
    "optionsEn": [
      "$f'(x) = e^{4x}$",
      "$f'(x) = \\frac{1}{4}e^{4x}$",
      "$f'(x) = 4e^{4x}$",
      "$f'(x) = 4e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{4x}$",
      "$f'(x) = \\frac{1}{4}e^{4x}$",
      "$f'(x) = 4e^{4x}$",
      "$f'(x) = 4e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 4e^{4x}$",
    "correctIndex": 2,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 4x \\implies u' = 4$.",
      "3. Thus $f'(x) = 4e^{4x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 4x$ هي $4$.",
      "٣. إذن $f'(x) = 4e^{4x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_04",
    "titleEn": "Exponential Derivative Rule #4",
    "titleAr": "مشتقة الدالة الأسية رقم 4",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{5x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{5x}$.",
    "optionsEn": [
      "$f'(x) = e^{5x}$",
      "$f'(x) = \\frac{1}{5}e^{5x}$",
      "$f'(x) = 5e^{x}$",
      "$f'(x) = 5e^{5x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{5x}$",
      "$f'(x) = \\frac{1}{5}e^{5x}$",
      "$f'(x) = 5e^{x}$",
      "$f'(x) = 5e^{5x}$"
    ],
    "correctAnswer": "$f'(x) = 5e^{5x}$",
    "correctIndex": 3,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 5x \\implies u' = 5$.",
      "3. Thus $f'(x) = 5e^{5x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 5x$ هي $5$.",
      "٣. إذن $f'(x) = 5e^{5x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_05",
    "titleEn": "Exponential Derivative Rule #5",
    "titleAr": "مشتقة الدالة الأسية رقم 5",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{6x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{6x}$.",
    "optionsEn": [
      "$f'(x) = 6e^{6x}$",
      "$f'(x) = e^{6x}$",
      "$f'(x) = \\frac{1}{6}e^{6x}$",
      "$f'(x) = 6e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = 6e^{6x}$",
      "$f'(x) = e^{6x}$",
      "$f'(x) = \\frac{1}{6}e^{6x}$",
      "$f'(x) = 6e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 6e^{6x}$",
    "correctIndex": 0,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 6x \\implies u' = 6$.",
      "3. Thus $f'(x) = 6e^{6x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 6x$ هي $6$.",
      "٣. إذن $f'(x) = 6e^{6x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_06",
    "titleEn": "Exponential Derivative Rule #6",
    "titleAr": "مشتقة الدالة الأسية رقم 6",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{7x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{7x}$.",
    "optionsEn": [
      "$f'(x) = e^{7x}$",
      "$f'(x) = 7e^{7x}$",
      "$f'(x) = \\frac{1}{7}e^{7x}$",
      "$f'(x) = 7e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{7x}$",
      "$f'(x) = 7e^{7x}$",
      "$f'(x) = \\frac{1}{7}e^{7x}$",
      "$f'(x) = 7e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 7e^{7x}$",
    "correctIndex": 1,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 7x \\implies u' = 7$.",
      "3. Thus $f'(x) = 7e^{7x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 7x$ هي $7$.",
      "٣. إذن $f'(x) = 7e^{7x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_07",
    "titleEn": "Exponential Derivative Rule #7",
    "titleAr": "مشتقة الدالة الأسية رقم 7",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{8x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{8x}$.",
    "optionsEn": [
      "$f'(x) = e^{8x}$",
      "$f'(x) = \\frac{1}{8}e^{8x}$",
      "$f'(x) = 8e^{8x}$",
      "$f'(x) = 8e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{8x}$",
      "$f'(x) = \\frac{1}{8}e^{8x}$",
      "$f'(x) = 8e^{8x}$",
      "$f'(x) = 8e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 8e^{8x}$",
    "correctIndex": 2,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 8x \\implies u' = 8$.",
      "3. Thus $f'(x) = 8e^{8x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 8x$ هي $8$.",
      "٣. إذن $f'(x) = 8e^{8x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_08",
    "titleEn": "Exponential Derivative Rule #8",
    "titleAr": "مشتقة الدالة الأسية رقم 8",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{9x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{9x}$.",
    "optionsEn": [
      "$f'(x) = e^{9x}$",
      "$f'(x) = \\frac{1}{9}e^{9x}$",
      "$f'(x) = 9e^{x}$",
      "$f'(x) = 9e^{9x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{9x}$",
      "$f'(x) = \\frac{1}{9}e^{9x}$",
      "$f'(x) = 9e^{x}$",
      "$f'(x) = 9e^{9x}$"
    ],
    "correctAnswer": "$f'(x) = 9e^{9x}$",
    "correctIndex": 3,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 9x \\implies u' = 9$.",
      "3. Thus $f'(x) = 9e^{9x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 9x$ هي $9$.",
      "٣. إذن $f'(x) = 9e^{9x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_09",
    "titleEn": "Exponential Derivative Rule #9",
    "titleAr": "مشتقة الدالة الأسية رقم 9",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{10x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{10x}$.",
    "optionsEn": [
      "$f'(x) = 10e^{10x}$",
      "$f'(x) = e^{10x}$",
      "$f'(x) = \\frac{1}{10}e^{10x}$",
      "$f'(x) = 10e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = 10e^{10x}$",
      "$f'(x) = e^{10x}$",
      "$f'(x) = \\frac{1}{10}e^{10x}$",
      "$f'(x) = 10e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 10e^{10x}$",
    "correctIndex": 0,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 10x \\implies u' = 10$.",
      "3. Thus $f'(x) = 10e^{10x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 10x$ هي $10$.",
      "٣. إذن $f'(x) = 10e^{10x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_10",
    "titleEn": "Exponential Derivative Rule #10",
    "titleAr": "مشتقة الدالة الأسية رقم 10",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{11x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{11x}$.",
    "optionsEn": [
      "$f'(x) = e^{11x}$",
      "$f'(x) = 11e^{11x}$",
      "$f'(x) = \\frac{1}{11}e^{11x}$",
      "$f'(x) = 11e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{11x}$",
      "$f'(x) = 11e^{11x}$",
      "$f'(x) = \\frac{1}{11}e^{11x}$",
      "$f'(x) = 11e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 11e^{11x}$",
    "correctIndex": 1,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 11x \\implies u' = 11$.",
      "3. Thus $f'(x) = 11e^{11x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 11x$ هي $11$.",
      "٣. إذن $f'(x) = 11e^{11x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_11",
    "titleEn": "Exponential Derivative Rule #11",
    "titleAr": "مشتقة الدالة الأسية رقم 11",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{12x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{12x}$.",
    "optionsEn": [
      "$f'(x) = e^{12x}$",
      "$f'(x) = \\frac{1}{12}e^{12x}$",
      "$f'(x) = 12e^{12x}$",
      "$f'(x) = 12e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{12x}$",
      "$f'(x) = \\frac{1}{12}e^{12x}$",
      "$f'(x) = 12e^{12x}$",
      "$f'(x) = 12e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 12e^{12x}$",
    "correctIndex": 2,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 12x \\implies u' = 12$.",
      "3. Thus $f'(x) = 12e^{12x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 12x$ هي $12$.",
      "٣. إذن $f'(x) = 12e^{12x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_12",
    "titleEn": "Exponential Derivative Rule #12",
    "titleAr": "مشتقة الدالة الأسية رقم 12",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{13x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{13x}$.",
    "optionsEn": [
      "$f'(x) = e^{13x}$",
      "$f'(x) = \\frac{1}{13}e^{13x}$",
      "$f'(x) = 13e^{x}$",
      "$f'(x) = 13e^{13x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{13x}$",
      "$f'(x) = \\frac{1}{13}e^{13x}$",
      "$f'(x) = 13e^{x}$",
      "$f'(x) = 13e^{13x}$"
    ],
    "correctAnswer": "$f'(x) = 13e^{13x}$",
    "correctIndex": 3,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 13x \\implies u' = 13$.",
      "3. Thus $f'(x) = 13e^{13x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 13x$ هي $13$.",
      "٣. إذن $f'(x) = 13e^{13x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_13",
    "titleEn": "Exponential Derivative Rule #13",
    "titleAr": "مشتقة الدالة الأسية رقم 13",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{14x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{14x}$.",
    "optionsEn": [
      "$f'(x) = 14e^{14x}$",
      "$f'(x) = e^{14x}$",
      "$f'(x) = \\frac{1}{14}e^{14x}$",
      "$f'(x) = 14e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = 14e^{14x}$",
      "$f'(x) = e^{14x}$",
      "$f'(x) = \\frac{1}{14}e^{14x}$",
      "$f'(x) = 14e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 14e^{14x}$",
    "correctIndex": 0,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 14x \\implies u' = 14$.",
      "3. Thus $f'(x) = 14e^{14x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 14x$ هي $14$.",
      "٣. إذن $f'(x) = 14e^{14x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_14",
    "titleEn": "Exponential Derivative Rule #14",
    "titleAr": "مشتقة الدالة الأسية رقم 14",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{15x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{15x}$.",
    "optionsEn": [
      "$f'(x) = e^{15x}$",
      "$f'(x) = 15e^{15x}$",
      "$f'(x) = \\frac{1}{15}e^{15x}$",
      "$f'(x) = 15e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{15x}$",
      "$f'(x) = 15e^{15x}$",
      "$f'(x) = \\frac{1}{15}e^{15x}$",
      "$f'(x) = 15e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 15e^{15x}$",
    "correctIndex": 1,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 15x \\implies u' = 15$.",
      "3. Thus $f'(x) = 15e^{15x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 15x$ هي $15$.",
      "٣. إذن $f'(x) = 15e^{15x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_15",
    "titleEn": "Exponential Derivative Rule #15",
    "titleAr": "مشتقة الدالة الأسية رقم 15",
    "difficulty": "easy",
    "questionEn": "Find the first derivative $f'(x)$ of the function $f(x) = e^{16x}$.",
    "questionAr": "أوجد المشتقة الأولى $f'(x)$ للدالة $f(x) = e^{16x}$.",
    "optionsEn": [
      "$f'(x) = e^{16x}$",
      "$f'(x) = \\frac{1}{16}e^{16x}$",
      "$f'(x) = 16e^{16x}$",
      "$f'(x) = 16e^{x}$"
    ],
    "optionsAr": [
      "$f'(x) = e^{16x}$",
      "$f'(x) = \\frac{1}{16}e^{16x}$",
      "$f'(x) = 16e^{16x}$",
      "$f'(x) = 16e^{x}$"
    ],
    "correctAnswer": "$f'(x) = 16e^{16x}$",
    "correctIndex": 2,
    "hintEn": "The derivative of e^(kx) with respect to x is k * e^(kx).",
    "hintAr": "مشتقة e^(k س) بالنسبة إلى س هي k × e^(k س).",
    "stepByStepSolutionEn": [
      "1. Apply the chain rule: $\\frac{d}{dx}[e^{u}] = e^{u} \\cdot u'$.",
      "2. Here $u = 16x \\implies u' = 16$.",
      "3. Thus $f'(x) = 16e^{16x}$."
    ],
    "stepByStepSolutionAr": [
      "١. بقاعدة السلسلة: مشتقة الدالة الأسية تساوي الدالة نفسها مضروبة في مشتقة الأس.",
      "٢. مشتقة الأس $u = 16x$ هي $16$.",
      "٣. إذن $f'(x) = 16e^{16x}$."
    ],
    "teacherTipEn": "d/dx [e^(kx)] = k * e^(kx) is a foundational building block for differential equations.",
    "teacherTipAr": "مشتقة الدالة الأسية الطبيعية تعيد الدالة نفسها مضروبة في معامل الأس."
  },
  {
    "id": "egbac_ana_ch2_db_easy_16",
    "titleEn": "Rolle's Theorem Stationary Point #1",
    "titleAr": "نقطة نظرية رول الحرجة رقم 1",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(2 - x) = 2x - x^2$ on the closed interval $[0, 2]$, find the stationary point $c \\in (0, 2)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 2x - x^2$ على الفترة المغلقة $[0, 2]$، أوجد قيمة $c \\in (0, 2)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 2$",
      "$c = 3$",
      "$c = 4$",
      "$c = 1$"
    ],
    "optionsAr": [
      "$c = 2$",
      "$c = 3$",
      "$c = 4$",
      "$c = 1$"
    ],
    "correctAnswer": "$c = 1$",
    "correctIndex": 3,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(2) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 2 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 2 - 2c = 0 \\implies c = 1$.",
      "4. Confirm that $c = 1 \\in (0, 2)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(2) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 2 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 2 \\implies c = 1$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 1 \\in (0, 2)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_17",
    "titleEn": "Rolle's Theorem Stationary Point #2",
    "titleAr": "نقطة نظرية رول الحرجة رقم 2",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(4 - x) = 4x - x^2$ on the closed interval $[0, 4]$, find the stationary point $c \\in (0, 4)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 4x - x^2$ على الفترة المغلقة $[0, 4]$، أوجد قيمة $c \\in (0, 4)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 2$",
      "$c = 3$",
      "$c = 4$",
      "$c = 5$"
    ],
    "optionsAr": [
      "$c = 2$",
      "$c = 3$",
      "$c = 4$",
      "$c = 5$"
    ],
    "correctAnswer": "$c = 2$",
    "correctIndex": 0,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(4) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 4 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 4 - 2c = 0 \\implies c = 2$.",
      "4. Confirm that $c = 2 \\in (0, 4)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(4) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 4 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 4 \\implies c = 2$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 2 \\in (0, 4)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_18",
    "titleEn": "Rolle's Theorem Stationary Point #3",
    "titleAr": "نقطة نظرية رول الحرجة رقم 3",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(6 - x) = 6x - x^2$ on the closed interval $[0, 6]$, find the stationary point $c \\in (0, 6)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 6x - x^2$ على الفترة المغلقة $[0, 6]$، أوجد قيمة $c \\in (0, 6)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 4$",
      "$c = 3$",
      "$c = 5$",
      "$c = 6$"
    ],
    "optionsAr": [
      "$c = 4$",
      "$c = 3$",
      "$c = 5$",
      "$c = 6$"
    ],
    "correctAnswer": "$c = 3$",
    "correctIndex": 1,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(6) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 6 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 6 - 2c = 0 \\implies c = 3$.",
      "4. Confirm that $c = 3 \\in (0, 6)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(6) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 6 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 6 \\implies c = 3$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 3 \\in (0, 6)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_19",
    "titleEn": "Rolle's Theorem Stationary Point #4",
    "titleAr": "نقطة نظرية رول الحرجة رقم 4",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(8 - x) = 8x - x^2$ on the closed interval $[0, 8]$, find the stationary point $c \\in (0, 8)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 8x - x^2$ على الفترة المغلقة $[0, 8]$، أوجد قيمة $c \\in (0, 8)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 4$",
      "$c = 7$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 4$",
      "$c = 7$"
    ],
    "correctAnswer": "$c = 4$",
    "correctIndex": 2,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(8) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 8 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 8 - 2c = 0 \\implies c = 4$.",
      "4. Confirm that $c = 4 \\in (0, 8)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(8) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 8 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 8 \\implies c = 4$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 4 \\in (0, 8)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_20",
    "titleEn": "Rolle's Theorem Stationary Point #5",
    "titleAr": "نقطة نظرية رول الحرجة رقم 5",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(10 - x) = 10x - x^2$ on the closed interval $[0, 10]$, find the stationary point $c \\in (0, 10)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 10x - x^2$ على الفترة المغلقة $[0, 10]$، أوجد قيمة $c \\in (0, 10)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 6$",
      "$c = 7$",
      "$c = 8$",
      "$c = 5$"
    ],
    "optionsAr": [
      "$c = 6$",
      "$c = 7$",
      "$c = 8$",
      "$c = 5$"
    ],
    "correctAnswer": "$c = 5$",
    "correctIndex": 3,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(10) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 10 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 10 - 2c = 0 \\implies c = 5$.",
      "4. Confirm that $c = 5 \\in (0, 10)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(10) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 10 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 10 \\implies c = 5$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 5 \\in (0, 10)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_21",
    "titleEn": "Rolle's Theorem Stationary Point #6",
    "titleAr": "نقطة نظرية رول الحرجة رقم 6",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(12 - x) = 12x - x^2$ on the closed interval $[0, 12]$, find the stationary point $c \\in (0, 12)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 12x - x^2$ على الفترة المغلقة $[0, 12]$، أوجد قيمة $c \\in (0, 12)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 6$",
      "$c = 7$",
      "$c = 8$",
      "$c = 9$"
    ],
    "optionsAr": [
      "$c = 6$",
      "$c = 7$",
      "$c = 8$",
      "$c = 9$"
    ],
    "correctAnswer": "$c = 6$",
    "correctIndex": 0,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(12) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 12 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 12 - 2c = 0 \\implies c = 6$.",
      "4. Confirm that $c = 6 \\in (0, 12)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(12) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 12 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 12 \\implies c = 6$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 6 \\in (0, 12)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_22",
    "titleEn": "Rolle's Theorem Stationary Point #7",
    "titleAr": "نقطة نظرية رول الحرجة رقم 7",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(14 - x) = 14x - x^2$ on the closed interval $[0, 14]$, find the stationary point $c \\in (0, 14)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 14x - x^2$ على الفترة المغلقة $[0, 14]$، أوجد قيمة $c \\in (0, 14)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 8$",
      "$c = 7$",
      "$c = 9$",
      "$c = 10$"
    ],
    "optionsAr": [
      "$c = 8$",
      "$c = 7$",
      "$c = 9$",
      "$c = 10$"
    ],
    "correctAnswer": "$c = 7$",
    "correctIndex": 1,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(14) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 14 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 14 - 2c = 0 \\implies c = 7$.",
      "4. Confirm that $c = 7 \\in (0, 14)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(14) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 14 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 14 \\implies c = 7$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 7 \\in (0, 14)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_23",
    "titleEn": "Rolle's Theorem Stationary Point #8",
    "titleAr": "نقطة نظرية رول الحرجة رقم 8",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(16 - x) = 16x - x^2$ on the closed interval $[0, 16]$, find the stationary point $c \\in (0, 16)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 16x - x^2$ على الفترة المغلقة $[0, 16]$، أوجد قيمة $c \\in (0, 16)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 9$",
      "$c = 10$",
      "$c = 8$",
      "$c = 11$"
    ],
    "optionsAr": [
      "$c = 9$",
      "$c = 10$",
      "$c = 8$",
      "$c = 11$"
    ],
    "correctAnswer": "$c = 8$",
    "correctIndex": 2,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(16) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 16 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 16 - 2c = 0 \\implies c = 8$.",
      "4. Confirm that $c = 8 \\in (0, 16)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(16) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 16 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 16 \\implies c = 8$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 8 \\in (0, 16)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_24",
    "titleEn": "Rolle's Theorem Stationary Point #9",
    "titleAr": "نقطة نظرية رول الحرجة رقم 9",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(18 - x) = 18x - x^2$ on the closed interval $[0, 18]$, find the stationary point $c \\in (0, 18)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 18x - x^2$ على الفترة المغلقة $[0, 18]$، أوجد قيمة $c \\in (0, 18)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 10$",
      "$c = 11$",
      "$c = 12$",
      "$c = 9$"
    ],
    "optionsAr": [
      "$c = 10$",
      "$c = 11$",
      "$c = 12$",
      "$c = 9$"
    ],
    "correctAnswer": "$c = 9$",
    "correctIndex": 3,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(18) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 18 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 18 - 2c = 0 \\implies c = 9$.",
      "4. Confirm that $c = 9 \\in (0, 18)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(18) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 18 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 18 \\implies c = 9$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 9 \\in (0, 18)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_25",
    "titleEn": "Rolle's Theorem Stationary Point #10",
    "titleAr": "نقطة نظرية رول الحرجة رقم 10",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(20 - x) = 20x - x^2$ on the closed interval $[0, 20]$, find the stationary point $c \\in (0, 20)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 20x - x^2$ على الفترة المغلقة $[0, 20]$، أوجد قيمة $c \\in (0, 20)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 10$",
      "$c = 11$",
      "$c = 12$",
      "$c = 13$"
    ],
    "optionsAr": [
      "$c = 10$",
      "$c = 11$",
      "$c = 12$",
      "$c = 13$"
    ],
    "correctAnswer": "$c = 10$",
    "correctIndex": 0,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(20) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 20 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 20 - 2c = 0 \\implies c = 10$.",
      "4. Confirm that $c = 10 \\in (0, 20)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(20) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 20 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 20 \\implies c = 10$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 10 \\in (0, 20)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_26",
    "titleEn": "Rolle's Theorem Stationary Point #11",
    "titleAr": "نقطة نظرية رول الحرجة رقم 11",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(22 - x) = 22x - x^2$ on the closed interval $[0, 22]$, find the stationary point $c \\in (0, 22)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 22x - x^2$ على الفترة المغلقة $[0, 22]$، أوجد قيمة $c \\in (0, 22)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 12$",
      "$c = 11$",
      "$c = 13$",
      "$c = 14$"
    ],
    "optionsAr": [
      "$c = 12$",
      "$c = 11$",
      "$c = 13$",
      "$c = 14$"
    ],
    "correctAnswer": "$c = 11$",
    "correctIndex": 1,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(22) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 22 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 22 - 2c = 0 \\implies c = 11$.",
      "4. Confirm that $c = 11 \\in (0, 22)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(22) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 22 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 22 \\implies c = 11$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 11 \\in (0, 22)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_27",
    "titleEn": "Rolle's Theorem Stationary Point #12",
    "titleAr": "نقطة نظرية رول الحرجة رقم 12",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(24 - x) = 24x - x^2$ on the closed interval $[0, 24]$, find the stationary point $c \\in (0, 24)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 24x - x^2$ على الفترة المغلقة $[0, 24]$، أوجد قيمة $c \\in (0, 24)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 13$",
      "$c = 14$",
      "$c = 12$",
      "$c = 15$"
    ],
    "optionsAr": [
      "$c = 13$",
      "$c = 14$",
      "$c = 12$",
      "$c = 15$"
    ],
    "correctAnswer": "$c = 12$",
    "correctIndex": 2,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(24) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 24 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 24 - 2c = 0 \\implies c = 12$.",
      "4. Confirm that $c = 12 \\in (0, 24)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(24) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 24 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 24 \\implies c = 12$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 12 \\in (0, 24)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_28",
    "titleEn": "Rolle's Theorem Stationary Point #13",
    "titleAr": "نقطة نظرية رول الحرجة رقم 13",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(26 - x) = 26x - x^2$ on the closed interval $[0, 26]$, find the stationary point $c \\in (0, 26)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 26x - x^2$ على الفترة المغلقة $[0, 26]$، أوجد قيمة $c \\in (0, 26)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 14$",
      "$c = 15$",
      "$c = 16$",
      "$c = 13$"
    ],
    "optionsAr": [
      "$c = 14$",
      "$c = 15$",
      "$c = 16$",
      "$c = 13$"
    ],
    "correctAnswer": "$c = 13$",
    "correctIndex": 3,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(26) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 26 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 26 - 2c = 0 \\implies c = 13$.",
      "4. Confirm that $c = 13 \\in (0, 26)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(26) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 26 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 26 \\implies c = 13$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 13 \\in (0, 26)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_29",
    "titleEn": "Rolle's Theorem Stationary Point #14",
    "titleAr": "نقطة نظرية رول الحرجة رقم 14",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(28 - x) = 28x - x^2$ on the closed interval $[0, 28]$, find the stationary point $c \\in (0, 28)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 28x - x^2$ على الفترة المغلقة $[0, 28]$، أوجد قيمة $c \\in (0, 28)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 14$",
      "$c = 15$",
      "$c = 16$",
      "$c = 17$"
    ],
    "optionsAr": [
      "$c = 14$",
      "$c = 15$",
      "$c = 16$",
      "$c = 17$"
    ],
    "correctAnswer": "$c = 14$",
    "correctIndex": 0,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(28) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 28 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 28 - 2c = 0 \\implies c = 14$.",
      "4. Confirm that $c = 14 \\in (0, 28)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(28) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 28 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 28 \\implies c = 14$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 14 \\in (0, 28)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_30",
    "titleEn": "Rolle's Theorem Stationary Point #15",
    "titleAr": "نقطة نظرية رول الحرجة رقم 15",
    "difficulty": "easy",
    "questionEn": "For $f(x) = x(30 - x) = 30x - x^2$ on the closed interval $[0, 30]$, find the stationary point $c \\in (0, 30)$ guaranteed by Rolle's Theorem where $f'(c) = 0$.",
    "questionAr": "للدالة $f(x) = 30x - x^2$ على الفترة المغلقة $[0, 30]$، أوجد قيمة $c \\in (0, 30)$ التي تضمنها نظرية رول بحيث $f'(c) = 0$.",
    "optionsEn": [
      "$c = 16$",
      "$c = 15$",
      "$c = 17$",
      "$c = 18$"
    ],
    "optionsAr": [
      "$c = 16$",
      "$c = 15$",
      "$c = 17$",
      "$c = 18$"
    ],
    "correctAnswer": "$c = 15$",
    "correctIndex": 1,
    "hintEn": "Differentiate f(x) and solve f'(c) = 0.",
    "hintAr": "اشتق الدالة وساوِ المشتقة بالصفر: f'(c) = 0.",
    "stepByStepSolutionEn": [
      "1. Note $f(0) = 0$ and $f(30) = 0$, satisfying Rolle's condition $f(a) = f(b)$.",
      "2. Compute derivative: $f'(x) = 30 - 2x$.",
      "3. Set $f'(c) = 0 \\implies 30 - 2c = 0 \\implies c = 15$.",
      "4. Confirm that $c = 15 \\in (0, 30)$."
    ],
    "stepByStepSolutionAr": [
      "١. $f(0) = f(30) = 0$، شرط نظرية رول مستوفى.",
      "٢. المشتقة: $f'(x) = 30 - 2x$.",
      "٣. وضع $f'(c) = 0 \\implies 2c = 30 \\implies c = 15$.",
      "٤. القيمة تنتمي للفترة المفتوحة: $c = 15 \\in (0, 30)$."
    ],
    "teacherTipEn": "The vertex of an inverted symmetric parabola on [0, 2k] is always the midpoint k.",
    "teacherTipAr": "رأس القطع المكافئ المتماثل على [0, 2k] يقع دائماً في المنتصف k."
  },
  {
    "id": "egbac_ana_ch2_db_easy_31",
    "titleEn": "Concavity Classification #1",
    "titleAr": "تحديد نوع التقعر رقم 1",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 1x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 1x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Concave upward (convex)",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "مقعر لأعلى (محدب لأسفل)",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 2,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 1x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_32",
    "titleEn": "Concavity Classification #2",
    "titleAr": "تحديد نوع التقعر رقم 2",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 2x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 2x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Oscillating with changing inflection",
      "Concave upward (convex)"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة",
      "مقعر لأعلى (محدب لأسفل)"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 3,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 2x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_33",
    "titleEn": "Concavity Classification #3",
    "titleAr": "تحديد نوع التقعر رقم 3",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 3x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 3x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave upward (convex)",
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأعلى (محدب لأسفل)",
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 0,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 3x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_34",
    "titleEn": "Concavity Classification #4",
    "titleAr": "تحديد نوع التقعر رقم 4",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 4x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 4x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Concave upward (convex)",
      "Linear with zero curvature",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "مقعر لأعلى (محدب لأسفل)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 1,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 4x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_35",
    "titleEn": "Concavity Classification #5",
    "titleAr": "تحديد نوع التقعر رقم 5",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 5x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 5x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Concave upward (convex)",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "مقعر لأعلى (محدب لأسفل)",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 2,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 5x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_36",
    "titleEn": "Concavity Classification #6",
    "titleAr": "تحديد نوع التقعر رقم 6",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 6x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 6x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Oscillating with changing inflection",
      "Concave upward (convex)"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة",
      "مقعر لأعلى (محدب لأسفل)"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 3,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 6x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_37",
    "titleEn": "Concavity Classification #7",
    "titleAr": "تحديد نوع التقعر رقم 7",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 7x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 7x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave upward (convex)",
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأعلى (محدب لأسفل)",
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 0,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 7x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_38",
    "titleEn": "Concavity Classification #8",
    "titleAr": "تحديد نوع التقعر رقم 8",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 8x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 8x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Concave upward (convex)",
      "Linear with zero curvature",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "مقعر لأعلى (محدب لأسفل)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 1,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 8x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_39",
    "titleEn": "Concavity Classification #9",
    "titleAr": "تحديد نوع التقعر رقم 9",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 9x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 9x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Concave upward (convex)",
      "Oscillating with changing inflection"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "مقعر لأعلى (محدب لأسفل)",
      "متذبذب بنقاط انقلاب متغيرة"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 2,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 9x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_40",
    "titleEn": "Concavity Classification #10",
    "titleAr": "تحديد نوع التقعر رقم 10",
    "difficulty": "easy",
    "questionEn": "If $f''(x) = 10x^2 + 4 > 0$ for all $x \\in \\mathbb{R}$, what is the geometric concavity of the curve $y = f(x)$ everywhere?",
    "questionAr": "إذا كانت المشتقة الثانية $f''(x) = 10x^2 + 4 > 0$ موجبة دائماً لجميع $x \\in \\mathbb{R}$، فما هو التقعر الهندسي لمنحنى الدالة في كل مكان؟",
    "optionsEn": [
      "Concave downward (concave)",
      "Linear with zero curvature",
      "Oscillating with changing inflection",
      "Concave upward (convex)"
    ],
    "optionsAr": [
      "مقعر لأسفل (محدب لأعلى)",
      "خطي بدون أي تقوس",
      "متذبذب بنقاط انقلاب متغيرة",
      "مقعر لأعلى (محدب لأسفل)"
    ],
    "correctAnswer": "Concave upward (convex)",
    "correctIndex": 3,
    "hintEn": "When f''(x) > 0 on an interval, the curve is concave upward (the graph lies above its tangents).",
    "hintAr": "عندما تكون المشتقة الثانية موجبة قطعا، يكون المنحنى مقعراً لأعلى (يقع فوق جميع مماساته).",
    "stepByStepSolutionEn": [
      "1. The sign of the second derivative determines concavity.",
      "2. Here $f''(x) = 10x^2 + 4 \\ge 4 > 0$ for all real $x$.",
      "3. A strictly positive second derivative implies the curve is concave upward everywhere."
    ],
    "stepByStepSolutionAr": [
      "١. إشارة المشتقة الثانية تحدد اتجاه التقعر.",
      "٢. بما أن $f''(x) > 0$ لجميع الأعداد الحقيقية:",
      "٣. فإن المنحنى مقعر لأعلى (محدب لأسفل) في كامل مجاله."
    ],
    "teacherTipEn": "f''(x) > 0 means the slope f'(x) is strictly increasing, bending the curve upward.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني أن ميل المماس في تزايد مستمر، مما يجعل المنحنى يتقعر لأعلى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_41",
    "titleEn": "Maclaurin Series Coefficient #1",
    "titleAr": "معامل متسلسلة ماكلوران رقم 1",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = e^{2x}$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = e^{2x}$.",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$"
    ],
    "optionsAr": [
      "$\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. Recall the standard Maclaurin series for $e^u$: $e^u = \\sum_{n=0}^\\infty \\frac{u^n}{n!} = 1 + u + \\frac{u^2}{2} + \\frac{u^3}{6} + \\cdots$.",
      "2. Substitute $u = 2x$: $e^{2x} = 1 + 2x + \\frac{(2x)^2}{2} + \\frac{(2x)^3}{6} + \\cdots$.",
      "3. The term containing $x^3$ is $\\frac{8x^3}{6} = \\frac{4}{3}x^3$, so the coefficient is $\\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك ماكلوران القياسي للدالة $e^u$: هو $e^u = 1 + u + \\frac{u^2}{2} + \\frac{u^3}{6} + \\cdots$.",
      "٢. بالتعويض بـ $u = 2x$: نجد أن $e^{2x} = 1 + 2x + \\frac{4x^2}{2} + \\frac{8x^3}{6} + \\cdots$.",
      "٣. حد $x^3$ هو $\\frac{8}{6}x^3 = \\frac{4}{3}x^3$، وبالتالي المعامل المطلوب هو $\\frac{4}{3}$."
    ],
    "teacherTipEn": "For e^(kx), the coefficient of x^n is k^n / n!.",
    "teacherTipAr": "في مفكوك e^(kx)، يكون معامل x^n هو دائماً k^n / n!."
  },
  {
    "id": "egbac_ana_ch2_db_easy_42",
    "titleEn": "Maclaurin Series Coefficient #2",
    "titleAr": "معامل متسلسلة ماكلوران رقم 2",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = \\sin(3x)$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\sin(3x)$.",
    "optionsEn": [
      "$\\frac{9}{2}$",
      "$-\\frac{9}{2}$",
      "$-\\frac{27}{2}$",
      "$-\\frac{3}{2}$"
    ],
    "optionsAr": [
      "$\\frac{9}{2}$",
      "$-\\frac{9}{2}$",
      "$-\\frac{27}{2}$",
      "$-\\frac{3}{2}$"
    ],
    "correctAnswer": "$-\\frac{9}{2}$",
    "correctIndex": 1,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. Recall $\\sin u = u - \\frac{u^3}{6} + \\frac{u^5}{120} - \\cdots$.",
      "2. Substitute $u = 3x$: $\\sin(3x) = 3x - \\frac{(3x)^3}{6} + \\cdots = 3x - \\frac{27x^3}{6} + \\cdots$.",
      "3. Simplify: $-\\frac{27}{6} = -\\frac{9}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك جيب الزاوية: $\\sin u = u - \\frac{u^3}{6} + \\cdots$.",
      "٢. بالتعويض بـ $u = 3x$: نحصل على $3x - \\frac{27x^3}{6} + \\cdots$.",
      "٣. بالتبسيط: $-\\frac{27}{6} = -\\frac{9}{2}$."
    ],
    "teacherTipEn": "The signs in the Maclaurin series for sine alternate: +, -, +, -.",
    "teacherTipAr": "إشارات مفكوك دالة الجيب تتناوب: موجبة، سالبة، موجبة..."
  },
  {
    "id": "egbac_ana_ch2_db_easy_43",
    "titleEn": "Maclaurin Series Coefficient #3",
    "titleAr": "معامل متسلسلة ماكلوران رقم 3",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{4}$ in the Maclaurin series expansion of $f(x) = \\cos(2x)$.",
    "questionAr": "أوجد معامل $x^{4}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\cos(2x)$.",
    "optionsEn": [
      "$-\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{24}$"
    ],
    "optionsAr": [
      "$-\\frac{2}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{24}$"
    ],
    "correctAnswer": "$\\frac{2}{3}$",
    "correctIndex": 2,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^4.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^4.",
    "stepByStepSolutionEn": [
      "1. Recall $\\cos u = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\cdots$.",
      "2. Substitute $u = 2x$: $\\frac{(2x)^4}{24} = \\frac{16x^4}{24} = \\frac{2}{3}x^4$.",
      "3. The coefficient of $x^4$ is $\\frac{2}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك جيب التمام: $\\cos u = 1 - \\frac{u^2}{2} + \\frac{u^4}{24} - \\cdots$.",
      "٢. بالتعويض بـ $u = 2x$: حد $x^4$ هو $\\frac{16x^4}{24} = \\frac{2}{3}x^4$.",
      "٣. المعامل هو $\\frac{2}{3}$."
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin series.",
    "teacherTipAr": "متسلسلة ماكلوران لجيب التمام تحتوي فقط على القوى الزوجية لـ x."
  },
  {
    "id": "egbac_ana_ch2_db_easy_44",
    "titleEn": "Maclaurin Series Coefficient #4",
    "titleAr": "معامل متسلسلة ماكلوران رقم 4",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{4}$ in the Maclaurin series expansion of $f(x) = \\frac{1}{1 - 2x}$.",
    "questionAr": "أوجد معامل $x^{4}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\frac{1}{1 - 2x}$.",
    "optionsEn": [
      "$-16$",
      "$8$",
      "$32$",
      "$16$"
    ],
    "optionsAr": [
      "$-16$",
      "$8$",
      "$32$",
      "$16$"
    ],
    "correctAnswer": "$16$",
    "correctIndex": 3,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^4.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^4.",
    "stepByStepSolutionEn": [
      "1. Use the geometric series formula: $\\frac{1}{1 - u} = \\sum_{n=0}^\\infty u^n$ for $|u| < 1$.",
      "2. Set $u = 2x$: $\\frac{1}{1 - 2x} = \\sum_{n=0}^\\infty (2x)^n = 1 + 2x + 4x^2 + 8x^3 + 16x^4 + \\cdots$.",
      "3. The coefficient of $x^4$ is $2^4 = 16$."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام المتسلسلة الهندسية: $\\frac{1}{1 - u} = 1 + u + u^2 + u^3 + u^4 + \\cdots$.",
      "٢. بوضع $u = 2x$: نحصل على $(2x)^4 = 16x^4$.",
      "٣. معامل $x^4$ هو $16$."
    ],
    "teacherTipEn": "Geometric series expansions 1/(1-u) are the fastest way to expand rational functions.",
    "teacherTipAr": "المتسلسلة الهندسية 1/(1-u) هي أسرع وسيلة لفك الدوال الكسرية ذات المقامات الخطية."
  },
  {
    "id": "egbac_ana_ch2_db_easy_45",
    "titleEn": "Maclaurin Series Coefficient #5",
    "titleAr": "معامل متسلسلة ماكلوران رقم 5",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = \\ln(1 + 3x)$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\ln(1 + 3x)$.",
    "optionsEn": [
      "$9$",
      "$-9$",
      "$\\frac{27}{2}$",
      "$3$"
    ],
    "optionsAr": [
      "$9$",
      "$-9$",
      "$\\frac{27}{2}$",
      "$3$"
    ],
    "correctAnswer": "$9$",
    "correctIndex": 0,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. Recall $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\cdots$.",
      "2. For $u = 3x$, the cubic term is $\\frac{(3x)^3}{3} = \\frac{27x^3}{3} = 9x^3$.",
      "3. The coefficient of $x^3$ is $9$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك اللوغاريتم الطبيعي: $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\cdots$.",
      "٢. عند $u = 3x$: الحد التكعيبي هو $\\frac{(3x)^3}{3} = \\frac{27x^3}{3} = 9x^3$.",
      "٣. إذن المعامل هو $9$."
    ],
    "teacherTipEn": "Notice the absence of factorials in the denominator of ln(1+u): denominators are simply n.",
    "teacherTipAr": "لاحظ عدم وجود المضروب في مقامات مفكوك اللوغاريتم، فالمقامات هي الأعداد n مباشرة."
  },
  {
    "id": "egbac_ana_ch2_db_easy_46",
    "titleEn": "Maclaurin Series Coefficient #6",
    "titleAr": "معامل متسلسلة ماكلوران رقم 6",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{4}$ in the Maclaurin series expansion of $f(x) = \\frac{1}{1 + x^2}$.",
    "questionAr": "أوجد معامل $x^{4}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\frac{1}{1 + x^2}$.",
    "optionsEn": [
      "$-1$",
      "$1$",
      "$0$",
      "$\\frac{1}{24}$"
    ],
    "optionsAr": [
      "$-1$",
      "$1$",
      "$0$",
      "$\\frac{1}{24}$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 1,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^4.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^4.",
    "stepByStepSolutionEn": [
      "1. Rewrite as $\\frac{1}{1 - (-x^2)} = 1 + (-x^2) + (-x^2)^2 + \\cdots$.",
      "2. Expanding: $1 - x^2 + x^4 - x^6 + \\cdots$.",
      "3. The coefficient of $x^4$ is $+1$."
    ],
    "stepByStepSolutionAr": [
      "١. نعيد الكتابة كمتسلسلة هندسية: $\\frac{1}{1 - (-x^2)} = 1 - x^2 + x^4 - x^6 + \\cdots$.",
      "٢. حد $x^4$ هو $+x^4$.",
      "٣. المعامل المطلوب هو $1$."
    ],
    "teacherTipEn": "Substituting -x^2 into 1/(1-u) creates alternating even powers.",
    "teacherTipAr": "التعويض بـ -x^2 في المتسلسلة الهندسية يولد قوى زوجية متناوبة الإشارة."
  },
  {
    "id": "egbac_ana_ch2_db_easy_47",
    "titleEn": "Maclaurin Series Coefficient #7",
    "titleAr": "معامل متسلسلة ماكلوران رقم 7",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = x e^{-x}$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = x e^{-x}$.",
    "optionsEn": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{2}$",
      "$-\\frac{1}{6}$"
    ],
    "optionsAr": [
      "$-\\frac{1}{2}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{2}$",
      "$-\\frac{1}{6}$"
    ],
    "correctAnswer": "$\\frac{1}{2}$",
    "correctIndex": 2,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. $e^{-x} = 1 - x + \\frac{x^2}{2!} - \\frac{x^3}{3!} + \\cdots$.",
      "2. Multiply by $x$: $x e^{-x} = x - x^2 + \\frac{x^3}{2} - \\frac{x^4}{6} + \\cdots$.",
      "3. The coefficient of $x^3$ comes from the $x^2$ term of $e^{-x}$, which is $\\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك $e^{-x} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\cdots$.",
      "٢. بالضرب في $x$: نجد $x e^{-x} = x - x^2 + \\frac{x^3}{2} - \\cdots$.",
      "٣. إذن معامل $x^3$ هو $\\frac{1}{2}$."
    ],
    "teacherTipEn": "Multiplying by x shifts all powers up by 1 and keeps the coefficients unchanged.",
    "teacherTipAr": "الضرب في x يرفع كل الأسس بمقدار 1 مع بقاء المعاملات كما هي."
  },
  {
    "id": "egbac_ana_ch2_db_easy_48",
    "titleEn": "Maclaurin Series Coefficient #8",
    "titleAr": "معامل متسلسلة ماكلوران رقم 8",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = \\arctan(x)$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\arctan(x)$.",
    "optionsEn": [
      "$\\frac{1}{3}$",
      "$-\\frac{1}{6}$",
      "$-1$",
      "$-\\frac{1}{3}$"
    ],
    "optionsAr": [
      "$\\frac{1}{3}$",
      "$-\\frac{1}{6}$",
      "$-1$",
      "$-\\frac{1}{3}$"
    ],
    "correctAnswer": "$-\\frac{1}{3}$",
    "correctIndex": 3,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. Integrate $\\frac{1}{1 + t^2} = 1 - t^2 + t^4 - \\cdots$ term by term.",
      "2. $\\int_0^x (1 - t^2 + \\cdots) dt = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$.",
      "3. The coefficient of $x^3$ is $-\\frac{1}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. بتكامل متسلسلة $\\frac{1}{1+t^2} = 1 - t^2 + \\cdots$ حداً بحداً.",
      "٢. نجد $\\arctan(x) = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$.",
      "٣. إذن معامل $x^3$ هو $-\\frac{1}{3}$."
    ],
    "teacherTipEn": "Arctangent has only odd powers with alternating signs and no factorials.",
    "teacherTipAr": "متسلسلة ظل الزاوية العكسي تحوي فقط قوى فردية بإشارات متناوبة ودون مضروب."
  },
  {
    "id": "egbac_ana_ch2_db_easy_49",
    "titleEn": "Maclaurin Series Coefficient #9",
    "titleAr": "معامل متسلسلة ماكلوران رقم 9",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{2}$ in the Maclaurin series expansion of $f(x) = \\sqrt{1 + x}$.",
    "questionAr": "أوجد معامل $x^{2}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\sqrt{1 + x}$.",
    "optionsEn": [
      "$-\\frac{1}{8}$",
      "$\\frac{1}{8}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{2}$"
    ],
    "optionsAr": [
      "$-\\frac{1}{8}$",
      "$\\frac{1}{8}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": "$-\\frac{1}{8}$",
    "correctIndex": 0,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^2.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^2.",
    "stepByStepSolutionEn": [
      "1. Use the generalized binomial series: $(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!} x^2 + \\cdots$.",
      "2. For $\\alpha = \\frac{1}{2}$: coefficient of $x^2$ is $\\frac{(1/2)(-1/2)}{2} = -\\frac{1}{8}$.",
      "3. Thus the coefficient is $-\\frac{1}{8}$."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام متسلسلة ذات الحدين العامة: $(1+x)^{1/2} = 1 + \\frac{1}{2}x + \\frac{(1/2)(-1/2)}{2!}x^2 + \\cdots$.",
      "٢. حساب المعامل: $\\frac{-1/4}{2} = -\\frac{1}{8}$.",
      "٣. إذن معامل $x^2$ هو $-\\frac{1}{8}$."
    ],
    "teacherTipEn": "The binomial series coefficient for (1/2 choose 2) is always -1/8.",
    "teacherTipAr": "معامل ذات الحدين لـ (1/2 فوق 2) يساوي دائماً -1/8."
  },
  {
    "id": "egbac_ana_ch2_db_easy_50",
    "titleEn": "Maclaurin Series Coefficient #10",
    "titleAr": "معامل متسلسلة ماكلوران رقم 10",
    "difficulty": "easy",
    "questionEn": "Find the coefficient of $x^{3}$ in the Maclaurin series expansion of $f(x) = \\sinh(2x)$.",
    "questionAr": "أوجد معامل $x^{3}$ في مفكوك متسلسلة ماكلوران للدالة $f(x) = \\sinh(2x)$.",
    "optionsEn": [
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{8}{3}$"
    ],
    "optionsAr": [
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{8}{3}$"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 1,
    "hintEn": "Expand using the standard Maclaurin series for this function and read off the coefficient of x^3.",
    "hintAr": "قم بفك المتسلسلة باستخدام المفكوك القياسي للدالة وحدد معامل x^3.",
    "stepByStepSolutionEn": [
      "1. Recall $\\sinh u = u + \\frac{u^3}{3!} + \\frac{u^5}{5!} + \\cdots$ (all plus signs, odd powers).",
      "2. Substitute $u = 2x$: $\\frac{(2x)^3}{6} = \\frac{8x^3}{6} = \\frac{4}{3}x^3$.",
      "3. The coefficient of $x^3$ is $\\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك دالة الجيب الزائدي: $\\sinh u = u + \\frac{u^3}{6} + \\cdots$ (جميع الحدود موجبة بقوى فردية).",
      "٢. بالتعويض بـ $u = 2x$: $\\frac{8x^3}{6} = \\frac{4}{3}x^3$.",
      "٣. المعامل هو $\\frac{4}{3}$."
    ],
    "teacherTipEn": "Hyperbolic sine has the same coefficients as regular sine, but all signs are positive.",
    "teacherTipAr": "دالة الجيب الزائدي تماثل دالة الجيب في قواها الفردية، لكن جميع إشارات حدودها موجبة."
  },
  {
    "id": "egbac_ana_ch2_db_easy_51",
    "titleEn": "Second Derivative of a Polynomial",
    "titleAr": "المشتقة الثانية لدالة كثيرة حدود",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the second derivative $f''(x)$ of the function $f(x) = x^4 - 2x^3 + 5x - 7$.",
    "questionAr": "أوجد المشتقة الثانية $f''(x)$ للدالة $f(x) = x^4 - 2x^3 + 5x - 7$.",
    "optionsEn": [
      "$12x^2 - 12x$",
      "$4x^3 - 6x^2 + 5$",
      "$12x^2 - 6x$",
      "$24x - 12$"
    ],
    "optionsAr": [
      "$12x^2 - 12x$",
      "$4x^3 - 6x^2 + 5$",
      "$12x^2 - 6x$",
      "$24x - 12$"
    ],
    "correctAnswer": "$12x^2 - 12x$",
    "correctIndex": 0,
    "hintEn": "Differentiate twice with respect to $x$ using the power rule.",
    "hintAr": "اشتق الدالة مرتين بالنسبة إلى $x$ باستخدام قاعدة القوى.",
    "stepByStepSolutionEn": [
      "First derivative: $f'(x) = 4x^3 - 6x^2 + 5$.",
      "Second derivative: $f''(x) = 12x^2 - 12x$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $f'(x) = 4x^3 - 6x^2 + 5$.",
      "المشتقة الثانية: $f''(x) = 12x^2 - 12x$."
    ],
    "teacherTipEn": "Constants vanish upon the first differentiation.",
    "teacherTipAr": "الحدود الثابتة تنعدم عند أول عملية اشتقاق."
  },
  {
    "id": "egbac_ana_ch2_db_easy_52",
    "titleEn": "Inflection Point of a Cubic Polynomial",
    "titleAr": "نقطة انقلاب لمنحنى دالة تكعيبية",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the $x$-coordinate of the inflection point of the curve $f(x) = x^3 - 6x^2 + 9x + 1$.",
    "questionAr": "أوجد الإحداثي السيني $x$ لنقطة الانقلاب لمنحنى الدالة $f(x) = x^3 - 6x^2 + 9x + 1$.",
    "optionsEn": [
      "$x = 2$",
      "$x = 1$",
      "$x = 3$",
      "$x = 0$"
    ],
    "optionsAr": [
      "$x = 2$",
      "$x = 1$",
      "$x = 3$",
      "$x = 0$"
    ],
    "correctAnswer": "$x = 2$",
    "correctIndex": 0,
    "hintEn": "Set the second derivative to zero: $f''(x) = 0$ and check for concavity change.",
    "hintAr": "ساوِ المشتقة الثانية بالصفر: $f''(x) = 0$ وتحقق من تغير إشارة التحدب.",
    "stepByStepSolutionEn": [
      "Compute $f'(x) = 3x^2 - 12x + 9$.",
      "Compute $f''(x) = 6x - 12$.",
      "Set $f''(x) = 0 \\implies 6x - 12 = 0 \\implies x = 2$.",
      "Since $f''(x)$ changes sign at $x = 2$, it is an inflection point."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $f'(x) = 3x^2 - 12x + 9$.",
      "المشتقة الثانية: $f''(x) = 6x - 12$.",
      "$6x - 12 = 0 \\implies x = 2$.",
      "بما أن إشارة المشتقة الثانية تتغير حول $x = 2$، فإنها نقطة انقلاب."
    ],
    "teacherTipEn": "For every cubic polynomial $ax^3 + bx^2 + cx + d$, the inflection point is always at $x = -\\frac{b}{3a}$.",
    "teacherTipAr": "لكل كثيرة حدود تكعيبية، تقع نقطة الانقلاب دائماً عند $x = -\\frac{b}{3a}$."
  },
  {
    "id": "egbac_ana_ch2_db_easy_53",
    "titleEn": "First-Order Separable Differential Equation",
    "titleAr": "معادلة تفاضلية من الرتبة الأولى قابلة للفصل",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the general solution of the differential equation $\\frac{dy}{dx} = 3y$ for $y > 0$.",
    "questionAr": "أوجد الحل العام للمعادلة التفاضلية $\\frac{dy}{dx} = 3y$ حيث $y > 0$.",
    "optionsEn": [
      "$y = C e^{3x}$",
      "$y = 3x + C$",
      "$y = C e^{-3x}$",
      "$y = \\frac{3}{2} x^2 + C$"
    ],
    "optionsAr": [
      "$y = C e^{3x}$",
      "$y = 3x + C$",
      "$y = C e^{-3x}$",
      "$y = \\frac{3}{2} x^2 + C$"
    ],
    "correctAnswer": "$y = C e^{3x}$",
    "correctIndex": 0,
    "hintEn": "Separate variables: $\\frac{1}{y} dy = 3 dx$ and integrate both sides.",
    "hintAr": "افصل المتغيرات: $\\frac{1}{y} dy = 3 dx$ ثم كامل الطرفين.",
    "stepByStepSolutionEn": [
      "Separate variables: $\\frac{dy}{y} = 3 dx$.",
      "Integrate both sides: $\\int \\frac{1}{y} dy = \\int 3 dx \\implies \\ln(y) = 3x + c_0$.",
      "Exponentiate: $y = e^{3x + c_0} = e^{c_0} e^{3x} = C e^{3x}$."
    ],
    "stepByStepSolutionAr": [
      "فصل المتغيرات: $\\frac{dy}{y} = 3 dx$.",
      "بتكامل الطرفين: $\\ln(y) = 3x + c_0$.",
      "بأخذ الدالة الأسية: $y = C e^{3x}$."
    ],
    "teacherTipEn": "This equation models exponential growth when the rate of change is proportional to the current amount.",
    "teacherTipAr": "تمثل هذه المعادلة نموذج النمو الأسي عندما يتناسب معدل التغير طردياً مع الكمية الحالية."
  },
  {
    "id": "egbac_ana_ch2_db_easy_54",
    "titleEn": "Rolle's Theorem Intermediate Point",
    "titleAr": "إيجاد نقطة مبرهنة رول",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the value of $c \\in (1, 3)$ guaranteed by Rolle's Theorem for the function $f(x) = x^2 - 4x + 3$ on the interval $[1, 3]$.",
    "questionAr": "أوجد قيمة $c \\in (1, 3)$ التي تضمنها مبرهنة رول للدالة $f(x) = x^2 - 4x + 3$ على الفترة $[1, 3]$.",
    "optionsEn": [
      "$c = 2$",
      "$c = 1.5$",
      "$c = 2.5$",
      "$c = 0$"
    ],
    "optionsAr": [
      "$c = 2$",
      "$c = 1.5$",
      "$c = 2.5$",
      "$c = 0$"
    ],
    "correctAnswer": "$c = 2$",
    "correctIndex": 0,
    "hintEn": "Check that $f(1) = f(3) = 0$, then solve $f'(c) = 0$.",
    "hintAr": "تحقق أن $f(1) = f(3) = 0$ ثم حل المعادلة $f'(c) = 0$.",
    "stepByStepSolutionEn": [
      "Check hypotheses: $f$ is continuous on $[1, 3]$, differentiable on $(1, 3)$.",
      "$f(1) = 1 - 4 + 3 = 0$ and $f(3) = 9 - 12 + 3 = 0$. So $f(1) = f(3)$.",
      "Compute derivative: $f'(x) = 2x - 4$.",
      "Set $f'(c) = 0 \\implies 2c - 4 = 0 \\implies c = 2 \\in (1, 3)$."
    ],
    "stepByStepSolutionAr": [
      "التحقق من الشروط: $f$ متصلة على $[1, 3]$ وقابلة للاشتقاق على $(1, 3)$.",
      "$f(1) = 0$ و $f(3) = 0$، إذن $f(1) = f(3)$.",
      "المشتقة: $f'(x) = 2x - 4$.",
      "$f'(c) = 0 \\implies 2c - 4 = 0 \\implies c = 2 \\in (1, 3)$."
    ],
    "teacherTipEn": "For any quadratic $f(x)$, the Rolle's point is exactly the midpoint of the interval: $\\frac{a+b}{2}$.",
    "teacherTipAr": "لأي دالة تربيعية، تقع نقطة رول دائماً في منتصف الفترة تماماً: $\\frac{a+b}{2}$."
  },
  {
    "id": "egbac_ana_ch2_db_easy_55",
    "titleEn": "Maclaurin Polynomial of Cosine",
    "titleAr": "كثير حدود ماكلورين لدالة جيب التمام",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "What is the Maclaurin polynomial of degree 2 for the function $f(x) = \\cos(x)$?",
    "questionAr": "ما هو كثير حدود ماكلورين من الدرجة الثانية للدالة $f(x) = \\cos(x)$؟",
    "optionsEn": [
      "$1 - \\frac{x^2}{2}$",
      "$x - \\frac{x^2}{2}$",
      "$1 + \\frac{x^2}{2}$",
      "$1 - x^2$"
    ],
    "optionsAr": [
      "$1 - \\frac{x^2}{2}$",
      "$x - \\frac{x^2}{2}$",
      "$1 + \\frac{x^2}{2}$",
      "$1 - x^2$"
    ],
    "correctAnswer": "$1 - \\frac{x^2}{2}$",
    "correctIndex": 0,
    "hintEn": "The formula is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2$.",
    "hintAr": "الصيغة هي $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2$.",
    "stepByStepSolutionEn": [
      "$f(x) = \\cos(x) \\implies f(0) = 1$.",
      "$f'(x) = -\\sin(x) \\implies f'(0) = 0$.",
      "$f''(x) = -\\cos(x) \\implies f''(0) = -1$.",
      "Substitute: $P_2(x) = 1 + 0x + \\frac{-1}{2}x^2 = 1 - \\frac{x^2}{2}$."
    ],
    "stepByStepSolutionAr": [
      "$f(0) = \\cos(0) = 1$.",
      "$f'(0) = -\\sin(0) = 0$.",
      "$f''(0) = -\\cos(0) = -1$.",
      "$P_2(x) = 1 - \\frac{x^2}{2}$."
    ],
    "teacherTipEn": "Because $\\cos(x)$ is an even function, its Maclaurin series contains only even powers of $x$.",
    "teacherTipAr": "بما أن دالة جيب التمام دالة زوجية، فإن متسلسلة ماكلورين لها تحتوي على القوى الزوجية فقط."
  },
  {
    "id": "egbac_ana_ch2_db_easy_56",
    "titleEn": "Local Extrema via First Derivative Test",
    "titleAr": "القيم القصوى المحلية باختبار المشتقة الأولى",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the location of the local minimum for the cubic polynomial $f(x) = 2x^3 - 3x^2 - 12x + 5$.",
    "questionAr": "أوجد موضع القيمة الصغرى المحلية للدالة التكعيبية $f(x) = 2x^3 - 3x^2 - 12x + 5$.",
    "optionsEn": [
      "$x = 2$",
      "$x = -1$",
      "$x = 0$",
      "$x = 3$"
    ],
    "optionsAr": [
      "$x = 2$",
      "$x = -1$",
      "$x = 0$",
      "$x = 3$"
    ],
    "correctAnswer": "$x = 2$",
    "correctIndex": 0,
    "hintEn": "Set $f'(x) = 0$ and use the second derivative test: $f''(x) > 0$ indicates a local minimum.",
    "hintAr": "ساوِ $f'(x) = 0$ واستخدم اختبار المشتقة الثانية: $f''(x) > 0$ تدل على قيمة صغرى محلية.",
    "stepByStepSolutionEn": [
      "Compute derivative: $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$.",
      "Critical points are $x = 2$ and $x = -1$.",
      "Second derivative: $f''(x) = 12x - 6$.",
      "At $x = 2$: $f''(2) = 24 - 6 = 18 > 0$, so $x = 2$ is a local minimum.",
      "At $x = -1$: $f''(-1) = -18 < 0$, which is a local maximum."
    ],
    "stepByStepSolutionAr": [
      "المشتقة: $f'(x) = 6(x^2 - x - 2) = 6(x - 2)(x + 1) = 0$.",
      "النقاط الحرجة هي $x = 2$ و $x = -1$.",
      "المشتقة الثانية: $f''(x) = 12x - 6$.",
      "عند $x = 2$: $f''(2) = 18 > 0$، إذن توجد قيمة صغرى محلية عند $x = 2$."
    ],
    "teacherTipEn": "Always check the second derivative sign: positive means concave up (bowl holds water $\\implies$ minimum).",
    "teacherTipAr": "المشتقة الثانية موجبة تعني المنحنى محدد لأسفل (مقعر لأعلى كالوعاء) مما يعطي قيمة صغرى."
  },
  {
    "id": "egbac_ana_ch2_db_easy_57",
    "titleEn": "Tangent Line to an Exponential Curve",
    "titleAr": "معادلة مماس لمنحنى دالة أسية",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the equation of the tangent line to the curve $y = e^{2x}$ at the point where $x = 0$.",
    "questionAr": "أوجد معادلة خط المماس لمنحنى الدالة $y = e^{2x}$ عند النقطة التي فيها $x = 0$.",
    "optionsEn": [
      "$y = 2x + 1$",
      "$y = x + 1$",
      "$y = 2x$",
      "$y = 2x - 1$"
    ],
    "optionsAr": [
      "$y = 2x + 1$",
      "$y = x + 1$",
      "$y = 2x$",
      "$y = 2x - 1$"
    ],
    "correctAnswer": "$y = 2x + 1$",
    "correctIndex": 0,
    "hintEn": "The slope is $m = y'(0)$ and point is $(0, y(0))$. Use $y - y_0 = m(x - x_0)$.",
    "hintAr": "الميل هو $m = y'(0)$ والنقطة $(0, y(0))$. استخدم $y - y_0 = m(x - x_0)$.",
    "stepByStepSolutionEn": [
      "At $x = 0$, $y(0) = e^0 = 1$. The point of tangency is $(0, 1)$.",
      "Compute derivative: $y' = 2e^{2x}$.",
      "Slope at $x = 0$: $m = 2e^0 = 2$.",
      "Equation: $y - 1 = 2(x - 0) \\implies y = 2x + 1$."
    ],
    "stepByStepSolutionAr": [
      "عند $x = 0$: $y(0) = 1$. نقطة التماس هي $(0, 1)$.",
      "المشتقة: $y' = 2e^{2x}$.",
      "ميل المماس: $m = 2e^0 = 2$.",
      "معادلة المماس: $y - 1 = 2(x - 0) \\implies y = 2x + 1$."
    ],
    "teacherTipEn": "Notice that $y = 1 + 2x$ is also the degree 1 Taylor polynomial of $e^{2x}$ at $x=0$.",
    "teacherTipAr": "لاحظ أن معادلة المماس عند الصفر هي نفسها كثير حدود تايلور من الدرجة الأولى للدالة."
  },
  {
    "id": "egbac_ana_ch2_db_easy_58",
    "titleEn": "Concavity Intervals of a Quartic Function",
    "titleAr": "فترات التحدب لدالة من الدرجة الرابعة",
    "difficulty": "easy",
    "diagramType": "cartesian_plane",
    "questionEn": "On which intervals is the curve $f(x) = x^4 - 6x^2$ concave upward ($f''(x) > 0$)?",
    "questionAr": "على أي الفترات يكون منحنى الدالة $f(x) = x^4 - 6x^2$ محدباً لأسفل (مقعراً لأعلى $f''(x) > 0$)؟",
    "optionsEn": [
      "$(-\\infty, -1) \\cup (1, \\infty)$",
      "$(-1, 1)$",
      "$(-\\infty, 0)$",
      "$(0, \\infty)$"
    ],
    "optionsAr": [
      "$(-\\infty, -1) \\cup (1, \\infty)$",
      "$(-1, 1)$",
      "$(-\\infty, 0)$",
      "$(0, \\infty)$"
    ],
    "correctAnswer": "$(-\\infty, -1) \\cup (1, \\infty)$",
    "correctIndex": 0,
    "hintEn": "Compute $f''(x)$ and solve the inequality $f''(x) > 0$.",
    "hintAr": "احسب $f''(x)$ وحل المتباينة $f''(x) > 0$.",
    "stepByStepSolutionEn": [
      "Compute first derivative: $f'(x) = 4x^3 - 12x$.",
      "Compute second derivative: $f''(x) = 12x^2 - 12 = 12(x^2 - 1)$.",
      "Set $f''(x) > 0 \\implies 12(x - 1)(x + 1) > 0$.",
      "This quadratic is positive outside the roots, so $x \\in (-\\infty, -1) \\cup (1, \\infty)$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة الأولى: $f'(x) = 4x^3 - 12x$.",
      "المشتقة الثانية: $f''(x) = 12x^2 - 12 = 12(x^2 - 1)$.",
      "$12(x^2 - 1) > 0 \\implies x^2 > 1$.",
      "إذن المنحنى مقعر لأعلى على الفترتين $(-\\infty, -1) \\cup (1, \\infty)$."
    ],
    "teacherTipEn": "On $(-1, 1)$, $f''(x) < 0$, so the curve is concave downward there.",
    "teacherTipAr": "على الفترة $(-1, 1)$ تكون $f''(x) < 0$ والمنحنى محدب لأعلى (مقعر لأسفل)."
  }
],
  medium: [
  {
    "id": "egbac_ana_ch2_db_med_01",
    "titleEn": "Lagrange MVT Evaluation for Cubic #1",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 1",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, \\sqrt{3}]$. Find the exact point $c \\in (0, \\sqrt{3})$ where $f'(c) = \\frac{f(\\sqrt{3}) - f(0)}{\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, \\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, \\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(\\sqrt{3}) - f(0)}{\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 1$",
      "$c = 2$",
      "$c = 3$",
      "$c = \\frac{1}{2}$"
    ],
    "optionsAr": [
      "$c = 1$",
      "$c = 2$",
      "$c = 3$",
      "$c = \\frac{1}{2}$"
    ],
    "correctAnswer": "$c = 1$",
    "correctIndex": 0,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = \\sqrt{3}$, so $b^2 = (\\sqrt{3})^2 = 3 \\cdot 1 = 3$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 3$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 3 \\implies c^2 = 1 \\implies c = 1$.",
      "5. Since $0 < 1 < \\sqrt{3}$, $c = 1$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = \\sqrt{3}$ ومربعه $b^2 = 3$.",
      "٢. ميل القاطع: $b^2 = 3$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 3 \\implies c = 1$.",
      "٥. بما أن $c = 1 \\in (0, \\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_02",
    "titleEn": "Lagrange MVT Evaluation for Cubic #2",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 2",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 2\\sqrt{3}]$. Find the exact point $c \\in (0, 2\\sqrt{3})$ where $f'(c) = \\frac{f(2\\sqrt{3}) - f(0)}{2\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 2\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 2\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(2\\sqrt{3}) - f(0)}{2\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = \\frac{2}{2}$"
    ],
    "optionsAr": [
      "$c = 3$",
      "$c = 2$",
      "$c = 4$",
      "$c = \\frac{2}{2}$"
    ],
    "correctAnswer": "$c = 2$",
    "correctIndex": 1,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 2\\sqrt{3}$, so $b^2 = (2\\sqrt{3})^2 = 3 \\cdot 4 = 12$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 12$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 12 \\implies c^2 = 4 \\implies c = 2$.",
      "5. Since $0 < 2 < 2\\sqrt{3}$, $c = 2$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 2\\sqrt{3}$ ومربعه $b^2 = 12$.",
      "٢. ميل القاطع: $b^2 = 12$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 12 \\implies c = 2$.",
      "٥. بما أن $c = 2 \\in (0, 2\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_03",
    "titleEn": "Lagrange MVT Evaluation for Cubic #3",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 3",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 3\\sqrt{3}]$. Find the exact point $c \\in (0, 3\\sqrt{3})$ where $f'(c) = \\frac{f(3\\sqrt{3}) - f(0)}{3\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 3\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 3\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(3\\sqrt{3}) - f(0)}{3\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = \\frac{3}{2}$"
    ],
    "optionsAr": [
      "$c = 4$",
      "$c = 5$",
      "$c = 3$",
      "$c = \\frac{3}{2}$"
    ],
    "correctAnswer": "$c = 3$",
    "correctIndex": 2,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 3\\sqrt{3}$, so $b^2 = (3\\sqrt{3})^2 = 3 \\cdot 9 = 27$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 27$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 27 \\implies c^2 = 9 \\implies c = 3$.",
      "5. Since $0 < 3 < 3\\sqrt{3}$, $c = 3$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 3\\sqrt{3}$ ومربعه $b^2 = 27$.",
      "٢. ميل القاطع: $b^2 = 27$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 27 \\implies c = 3$.",
      "٥. بما أن $c = 3 \\in (0, 3\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_04",
    "titleEn": "Lagrange MVT Evaluation for Cubic #4",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 4",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 4\\sqrt{3}]$. Find the exact point $c \\in (0, 4\\sqrt{3})$ where $f'(c) = \\frac{f(4\\sqrt{3}) - f(0)}{4\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 4\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 4\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(4\\sqrt{3}) - f(0)}{4\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = \\frac{4}{2}$",
      "$c = 4$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = \\frac{4}{2}$",
      "$c = 4$"
    ],
    "correctAnswer": "$c = 4$",
    "correctIndex": 3,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 4\\sqrt{3}$, so $b^2 = (4\\sqrt{3})^2 = 3 \\cdot 16 = 48$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 48$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 48 \\implies c^2 = 16 \\implies c = 4$.",
      "5. Since $0 < 4 < 4\\sqrt{3}$, $c = 4$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 4\\sqrt{3}$ ومربعه $b^2 = 48$.",
      "٢. ميل القاطع: $b^2 = 48$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 48 \\implies c = 4$.",
      "٥. بما أن $c = 4 \\in (0, 4\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_05",
    "titleEn": "Lagrange MVT Evaluation for Cubic #5",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 5",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 5\\sqrt{3}]$. Find the exact point $c \\in (0, 5\\sqrt{3})$ where $f'(c) = \\frac{f(5\\sqrt{3}) - f(0)}{5\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 5\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 5\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(5\\sqrt{3}) - f(0)}{5\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = \\frac{5}{2}$"
    ],
    "optionsAr": [
      "$c = 5$",
      "$c = 6$",
      "$c = 7$",
      "$c = \\frac{5}{2}$"
    ],
    "correctAnswer": "$c = 5$",
    "correctIndex": 0,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 5\\sqrt{3}$, so $b^2 = (5\\sqrt{3})^2 = 3 \\cdot 25 = 75$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 75$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 75 \\implies c^2 = 25 \\implies c = 5$.",
      "5. Since $0 < 5 < 5\\sqrt{3}$, $c = 5$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 5\\sqrt{3}$ ومربعه $b^2 = 75$.",
      "٢. ميل القاطع: $b^2 = 75$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 75 \\implies c = 5$.",
      "٥. بما أن $c = 5 \\in (0, 5\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_06",
    "titleEn": "Lagrange MVT Evaluation for Cubic #6",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 6",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 6\\sqrt{3}]$. Find the exact point $c \\in (0, 6\\sqrt{3})$ where $f'(c) = \\frac{f(6\\sqrt{3}) - f(0)}{6\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 6\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 6\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(6\\sqrt{3}) - f(0)}{6\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 7$",
      "$c = 6$",
      "$c = 8$",
      "$c = \\frac{6}{2}$"
    ],
    "optionsAr": [
      "$c = 7$",
      "$c = 6$",
      "$c = 8$",
      "$c = \\frac{6}{2}$"
    ],
    "correctAnswer": "$c = 6$",
    "correctIndex": 1,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 6\\sqrt{3}$, so $b^2 = (6\\sqrt{3})^2 = 3 \\cdot 36 = 108$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 108$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 108 \\implies c^2 = 36 \\implies c = 6$.",
      "5. Since $0 < 6 < 6\\sqrt{3}$, $c = 6$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 6\\sqrt{3}$ ومربعه $b^2 = 108$.",
      "٢. ميل القاطع: $b^2 = 108$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 108 \\implies c = 6$.",
      "٥. بما أن $c = 6 \\in (0, 6\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_07",
    "titleEn": "Lagrange MVT Evaluation for Cubic #7",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 7",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 7\\sqrt{3}]$. Find the exact point $c \\in (0, 7\\sqrt{3})$ where $f'(c) = \\frac{f(7\\sqrt{3}) - f(0)}{7\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 7\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 7\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(7\\sqrt{3}) - f(0)}{7\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 8$",
      "$c = 9$",
      "$c = 7$",
      "$c = \\frac{7}{2}$"
    ],
    "optionsAr": [
      "$c = 8$",
      "$c = 9$",
      "$c = 7$",
      "$c = \\frac{7}{2}$"
    ],
    "correctAnswer": "$c = 7$",
    "correctIndex": 2,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 7\\sqrt{3}$, so $b^2 = (7\\sqrt{3})^2 = 3 \\cdot 49 = 147$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 147$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 147 \\implies c^2 = 49 \\implies c = 7$.",
      "5. Since $0 < 7 < 7\\sqrt{3}$, $c = 7$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 7\\sqrt{3}$ ومربعه $b^2 = 147$.",
      "٢. ميل القاطع: $b^2 = 147$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 147 \\implies c = 7$.",
      "٥. بما أن $c = 7 \\in (0, 7\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_08",
    "titleEn": "Lagrange MVT Evaluation for Cubic #8",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 8",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 8\\sqrt{3}]$. Find the exact point $c \\in (0, 8\\sqrt{3})$ where $f'(c) = \\frac{f(8\\sqrt{3}) - f(0)}{8\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 8\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 8\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(8\\sqrt{3}) - f(0)}{8\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 9$",
      "$c = 10$",
      "$c = \\frac{8}{2}$",
      "$c = 8$"
    ],
    "optionsAr": [
      "$c = 9$",
      "$c = 10$",
      "$c = \\frac{8}{2}$",
      "$c = 8$"
    ],
    "correctAnswer": "$c = 8$",
    "correctIndex": 3,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 8\\sqrt{3}$, so $b^2 = (8\\sqrt{3})^2 = 3 \\cdot 64 = 192$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 192$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 192 \\implies c^2 = 64 \\implies c = 8$.",
      "5. Since $0 < 8 < 8\\sqrt{3}$, $c = 8$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 8\\sqrt{3}$ ومربعه $b^2 = 192$.",
      "٢. ميل القاطع: $b^2 = 192$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 192 \\implies c = 8$.",
      "٥. بما أن $c = 8 \\in (0, 8\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_09",
    "titleEn": "Lagrange MVT Evaluation for Cubic #9",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 9",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 9\\sqrt{3}]$. Find the exact point $c \\in (0, 9\\sqrt{3})$ where $f'(c) = \\frac{f(9\\sqrt{3}) - f(0)}{9\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 9\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 9\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(9\\sqrt{3}) - f(0)}{9\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 9$",
      "$c = 10$",
      "$c = 11$",
      "$c = \\frac{9}{2}$"
    ],
    "optionsAr": [
      "$c = 9$",
      "$c = 10$",
      "$c = 11$",
      "$c = \\frac{9}{2}$"
    ],
    "correctAnswer": "$c = 9$",
    "correctIndex": 0,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 9\\sqrt{3}$, so $b^2 = (9\\sqrt{3})^2 = 3 \\cdot 81 = 243$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 243$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 243 \\implies c^2 = 81 \\implies c = 9$.",
      "5. Since $0 < 9 < 9\\sqrt{3}$, $c = 9$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 9\\sqrt{3}$ ومربعه $b^2 = 243$.",
      "٢. ميل القاطع: $b^2 = 243$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 243 \\implies c = 9$.",
      "٥. بما أن $c = 9 \\in (0, 9\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_10",
    "titleEn": "Lagrange MVT Evaluation for Cubic #10",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 10",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 10\\sqrt{3}]$. Find the exact point $c \\in (0, 10\\sqrt{3})$ where $f'(c) = \\frac{f(10\\sqrt{3}) - f(0)}{10\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 10\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 10\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(10\\sqrt{3}) - f(0)}{10\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 11$",
      "$c = 10$",
      "$c = 12$",
      "$c = \\frac{10}{2}$"
    ],
    "optionsAr": [
      "$c = 11$",
      "$c = 10$",
      "$c = 12$",
      "$c = \\frac{10}{2}$"
    ],
    "correctAnswer": "$c = 10$",
    "correctIndex": 1,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 10\\sqrt{3}$, so $b^2 = (10\\sqrt{3})^2 = 3 \\cdot 100 = 300$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 300$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 300 \\implies c^2 = 100 \\implies c = 10$.",
      "5. Since $0 < 10 < 10\\sqrt{3}$, $c = 10$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 10\\sqrt{3}$ ومربعه $b^2 = 300$.",
      "٢. ميل القاطع: $b^2 = 300$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 300 \\implies c = 10$.",
      "٥. بما أن $c = 10 \\in (0, 10\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_11",
    "titleEn": "Lagrange MVT Evaluation for Cubic #11",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 11",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 11\\sqrt{3}]$. Find the exact point $c \\in (0, 11\\sqrt{3})$ where $f'(c) = \\frac{f(11\\sqrt{3}) - f(0)}{11\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 11\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 11\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(11\\sqrt{3}) - f(0)}{11\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 12$",
      "$c = 13$",
      "$c = 11$",
      "$c = \\frac{11}{2}$"
    ],
    "optionsAr": [
      "$c = 12$",
      "$c = 13$",
      "$c = 11$",
      "$c = \\frac{11}{2}$"
    ],
    "correctAnswer": "$c = 11$",
    "correctIndex": 2,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 11\\sqrt{3}$, so $b^2 = (11\\sqrt{3})^2 = 3 \\cdot 121 = 363$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 363$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 363 \\implies c^2 = 121 \\implies c = 11$.",
      "5. Since $0 < 11 < 11\\sqrt{3}$, $c = 11$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 11\\sqrt{3}$ ومربعه $b^2 = 363$.",
      "٢. ميل القاطع: $b^2 = 363$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 363 \\implies c = 11$.",
      "٥. بما أن $c = 11 \\in (0, 11\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_12",
    "titleEn": "Lagrange MVT Evaluation for Cubic #12",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 12",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 12\\sqrt{3}]$. Find the exact point $c \\in (0, 12\\sqrt{3})$ where $f'(c) = \\frac{f(12\\sqrt{3}) - f(0)}{12\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 12\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 12\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(12\\sqrt{3}) - f(0)}{12\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 13$",
      "$c = 14$",
      "$c = \\frac{12}{2}$",
      "$c = 12$"
    ],
    "optionsAr": [
      "$c = 13$",
      "$c = 14$",
      "$c = \\frac{12}{2}$",
      "$c = 12$"
    ],
    "correctAnswer": "$c = 12$",
    "correctIndex": 3,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 12\\sqrt{3}$, so $b^2 = (12\\sqrt{3})^2 = 3 \\cdot 144 = 432$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 432$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 432 \\implies c^2 = 144 \\implies c = 12$.",
      "5. Since $0 < 12 < 12\\sqrt{3}$, $c = 12$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 12\\sqrt{3}$ ومربعه $b^2 = 432$.",
      "٢. ميل القاطع: $b^2 = 432$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 432 \\implies c = 12$.",
      "٥. بما أن $c = 12 \\in (0, 12\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_13",
    "titleEn": "Lagrange MVT Evaluation for Cubic #13",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 13",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 13\\sqrt{3}]$. Find the exact point $c \\in (0, 13\\sqrt{3})$ where $f'(c) = \\frac{f(13\\sqrt{3}) - f(0)}{13\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 13\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 13\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(13\\sqrt{3}) - f(0)}{13\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 13$",
      "$c = 14$",
      "$c = 15$",
      "$c = \\frac{13}{2}$"
    ],
    "optionsAr": [
      "$c = 13$",
      "$c = 14$",
      "$c = 15$",
      "$c = \\frac{13}{2}$"
    ],
    "correctAnswer": "$c = 13$",
    "correctIndex": 0,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 13\\sqrt{3}$, so $b^2 = (13\\sqrt{3})^2 = 3 \\cdot 169 = 507$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 507$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 507 \\implies c^2 = 169 \\implies c = 13$.",
      "5. Since $0 < 13 < 13\\sqrt{3}$, $c = 13$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 13\\sqrt{3}$ ومربعه $b^2 = 507$.",
      "٢. ميل القاطع: $b^2 = 507$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 507 \\implies c = 13$.",
      "٥. بما أن $c = 13 \\in (0, 13\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_14",
    "titleEn": "Lagrange MVT Evaluation for Cubic #14",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 14",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 14\\sqrt{3}]$. Find the exact point $c \\in (0, 14\\sqrt{3})$ where $f'(c) = \\frac{f(14\\sqrt{3}) - f(0)}{14\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 14\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 14\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(14\\sqrt{3}) - f(0)}{14\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 15$",
      "$c = 14$",
      "$c = 16$",
      "$c = \\frac{14}{2}$"
    ],
    "optionsAr": [
      "$c = 15$",
      "$c = 14$",
      "$c = 16$",
      "$c = \\frac{14}{2}$"
    ],
    "correctAnswer": "$c = 14$",
    "correctIndex": 1,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 14\\sqrt{3}$, so $b^2 = (14\\sqrt{3})^2 = 3 \\cdot 196 = 588$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 588$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 588 \\implies c^2 = 196 \\implies c = 14$.",
      "5. Since $0 < 14 < 14\\sqrt{3}$, $c = 14$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 14\\sqrt{3}$ ومربعه $b^2 = 588$.",
      "٢. ميل القاطع: $b^2 = 588$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 588 \\implies c = 14$.",
      "٥. بما أن $c = 14 \\in (0, 14\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_15",
    "titleEn": "Lagrange MVT Evaluation for Cubic #15",
    "titleAr": "حساب نقطة لاجرانج للدالة التكعيبية رقم 15",
    "difficulty": "medium",
    "questionEn": "Apply the Lagrange Mean Value Theorem to $f(x) = x^3$ on the interval $[0, 15\\sqrt{3}]$. Find the exact point $c \\in (0, 15\\sqrt{3})$ where $f'(c) = \\frac{f(15\\sqrt{3}) - f(0)}{15\\sqrt{3} - 0}$.",
    "questionAr": "طبق نظرية القيمة المتوسطة للاجرانج على الدالة $f(x) = x^3$ على الفترة $[0, 15\\sqrt{3}]$. أوجد القيمة الدقيقة لـ $c \\in (0, 15\\sqrt{3})$ التي تحقق $f'(c) = \\frac{f(15\\sqrt{3}) - f(0)}{15\\sqrt{3} - 0}$.",
    "optionsEn": [
      "$c = 16$",
      "$c = 17$",
      "$c = 15$",
      "$c = \\frac{15}{2}$"
    ],
    "optionsAr": [
      "$c = 16$",
      "$c = 17$",
      "$c = 15$",
      "$c = \\frac{15}{2}$"
    ],
    "correctAnswer": "$c = 15$",
    "correctIndex": 2,
    "hintEn": "The average slope is (b^3 - 0)/b = b^2. Set 3c^2 = b^2.",
    "hintAr": "ميل القاطع يساوي b^2. ضع المشتقة 3c^2 = b^2 واستخرج قيمة c.",
    "stepByStepSolutionEn": [
      "1. Upper bound $b = 15\\sqrt{3}$, so $b^2 = (15\\sqrt{3})^2 = 3 \\cdot 225 = 675$.",
      "2. Secant slope: $\\frac{f(b) - f(0)}{b - 0} = b^2 = 675$.",
      "3. Differentiate: $f'(x) = 3x^2$.",
      "4. Set $f'(c) = 3c^2 = 675 \\implies c^2 = 225 \\implies c = 15$.",
      "5. Since $0 < 15 < 15\\sqrt{3}$, $c = 15$ is the unique valid interior point."
    ],
    "stepByStepSolutionAr": [
      "١. الطرف العلوي $b = 15\\sqrt{3}$ ومربعه $b^2 = 675$.",
      "٢. ميل القاطع: $b^2 = 675$.",
      "٣. المشتقة: $f'(x) = 3x^2$.",
      "٤. مساواة المشتقة: $3c^2 = 675 \\implies c = 15$.",
      "٥. بما أن $c = 15 \\in (0, 15\\sqrt{3})$، فالإجابة صحيحة."
    ],
    "teacherTipEn": "For cubic f(x) = x^3 on [0, b], c is strictly b / sqrt(3).",
    "teacherTipAr": "للدالة التكعيبية على [0, b]، تكون c مساوية تماماً b / جذر(3)."
  },
  {
    "id": "egbac_ana_ch2_db_med_16",
    "titleEn": "Second-Order Exponential Limit #1",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 1",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{2x} - 1 - 2x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{2x} - 1 - 2x}{x^2}$.",
    "optionsEn": [
      "4",
      "6",
      "1",
      "2"
    ],
    "optionsAr": [
      "4",
      "6",
      "1",
      "2"
    ],
    "correctAnswer": "2",
    "correctIndex": 3,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 2x$:",
      "   $$e^{2x} = 1 + 2x + \\frac{(2x)^2}{2!} + O(x^3) = 1 + 2x + \\frac{4x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 2x$: the numerator becomes $2(1)x^2 + O(x^3) = 2x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 2."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{2x} = 1 + 2x + \\frac{4x^2}{2} + \\dots$",
      "٢. بطرح $1 + 2x$ من البسط يتبقى: 2x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 2."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_17",
    "titleEn": "Second-Order Exponential Limit #2",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 2",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{4x} - 1 - 4x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{4x} - 1 - 4x}{x^2}$.",
    "optionsEn": [
      "8",
      "10",
      "12",
      "4"
    ],
    "optionsAr": [
      "8",
      "10",
      "12",
      "4"
    ],
    "correctAnswer": "8",
    "correctIndex": 0,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 4x$:",
      "   $$e^{4x} = 1 + 4x + \\frac{(4x)^2}{2!} + O(x^3) = 1 + 4x + \\frac{16x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 4x$: the numerator becomes $2(4)x^2 + O(x^3) = 8x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 8."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{4x} = 1 + 4x + \\frac{16x^2}{2} + \\dots$",
      "٢. بطرح $1 + 4x$ من البسط يتبقى: 8x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 8."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_18",
    "titleEn": "Second-Order Exponential Limit #3",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 3",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{6x} - 1 - 6x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{6x} - 1 - 6x}{x^2}$.",
    "optionsEn": [
      "20",
      "18",
      "22",
      "9"
    ],
    "optionsAr": [
      "20",
      "18",
      "22",
      "9"
    ],
    "correctAnswer": "18",
    "correctIndex": 1,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 6x$:",
      "   $$e^{6x} = 1 + 6x + \\frac{(6x)^2}{2!} + O(x^3) = 1 + 6x + \\frac{36x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 6x$: the numerator becomes $2(9)x^2 + O(x^3) = 18x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 18."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{6x} = 1 + 6x + \\frac{36x^2}{2} + \\dots$",
      "٢. بطرح $1 + 6x$ من البسط يتبقى: 18x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 18."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_19",
    "titleEn": "Second-Order Exponential Limit #4",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 4",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{8x} - 1 - 8x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{8x} - 1 - 8x}{x^2}$.",
    "optionsEn": [
      "34",
      "36",
      "32",
      "16"
    ],
    "optionsAr": [
      "34",
      "36",
      "32",
      "16"
    ],
    "correctAnswer": "32",
    "correctIndex": 2,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 8x$:",
      "   $$e^{8x} = 1 + 8x + \\frac{(8x)^2}{2!} + O(x^3) = 1 + 8x + \\frac{64x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 8x$: the numerator becomes $2(16)x^2 + O(x^3) = 32x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 32."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{8x} = 1 + 8x + \\frac{64x^2}{2} + \\dots$",
      "٢. بطرح $1 + 8x$ من البسط يتبقى: 32x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 32."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_20",
    "titleEn": "Second-Order Exponential Limit #5",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 5",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{10x} - 1 - 10x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{10x} - 1 - 10x}{x^2}$.",
    "optionsEn": [
      "52",
      "54",
      "25",
      "50"
    ],
    "optionsAr": [
      "52",
      "54",
      "25",
      "50"
    ],
    "correctAnswer": "50",
    "correctIndex": 3,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 10x$:",
      "   $$e^{10x} = 1 + 10x + \\frac{(10x)^2}{2!} + O(x^3) = 1 + 10x + \\frac{100x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 10x$: the numerator becomes $2(25)x^2 + O(x^3) = 50x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 50."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{10x} = 1 + 10x + \\frac{100x^2}{2} + \\dots$",
      "٢. بطرح $1 + 10x$ من البسط يتبقى: 50x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 50."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_21",
    "titleEn": "Second-Order Exponential Limit #6",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 6",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{12x} - 1 - 12x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{12x} - 1 - 12x}{x^2}$.",
    "optionsEn": [
      "72",
      "74",
      "76",
      "36"
    ],
    "optionsAr": [
      "72",
      "74",
      "76",
      "36"
    ],
    "correctAnswer": "72",
    "correctIndex": 0,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 12x$:",
      "   $$e^{12x} = 1 + 12x + \\frac{(12x)^2}{2!} + O(x^3) = 1 + 12x + \\frac{144x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 12x$: the numerator becomes $2(36)x^2 + O(x^3) = 72x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 72."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{12x} = 1 + 12x + \\frac{144x^2}{2} + \\dots$",
      "٢. بطرح $1 + 12x$ من البسط يتبقى: 72x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 72."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_22",
    "titleEn": "Second-Order Exponential Limit #7",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 7",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{14x} - 1 - 14x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{14x} - 1 - 14x}{x^2}$.",
    "optionsEn": [
      "100",
      "98",
      "102",
      "49"
    ],
    "optionsAr": [
      "100",
      "98",
      "102",
      "49"
    ],
    "correctAnswer": "98",
    "correctIndex": 1,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 14x$:",
      "   $$e^{14x} = 1 + 14x + \\frac{(14x)^2}{2!} + O(x^3) = 1 + 14x + \\frac{196x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 14x$: the numerator becomes $2(49)x^2 + O(x^3) = 98x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 98."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{14x} = 1 + 14x + \\frac{196x^2}{2} + \\dots$",
      "٢. بطرح $1 + 14x$ من البسط يتبقى: 98x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 98."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_23",
    "titleEn": "Second-Order Exponential Limit #8",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 8",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{16x} - 1 - 16x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{16x} - 1 - 16x}{x^2}$.",
    "optionsEn": [
      "130",
      "132",
      "128",
      "64"
    ],
    "optionsAr": [
      "130",
      "132",
      "128",
      "64"
    ],
    "correctAnswer": "128",
    "correctIndex": 2,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 16x$:",
      "   $$e^{16x} = 1 + 16x + \\frac{(16x)^2}{2!} + O(x^3) = 1 + 16x + \\frac{256x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 16x$: the numerator becomes $2(64)x^2 + O(x^3) = 128x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 128."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{16x} = 1 + 16x + \\frac{256x^2}{2} + \\dots$",
      "٢. بطرح $1 + 16x$ من البسط يتبقى: 128x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 128."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_24",
    "titleEn": "Second-Order Exponential Limit #9",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 9",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{18x} - 1 - 18x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{18x} - 1 - 18x}{x^2}$.",
    "optionsEn": [
      "164",
      "166",
      "81",
      "162"
    ],
    "optionsAr": [
      "164",
      "166",
      "81",
      "162"
    ],
    "correctAnswer": "162",
    "correctIndex": 3,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 18x$:",
      "   $$e^{18x} = 1 + 18x + \\frac{(18x)^2}{2!} + O(x^3) = 1 + 18x + \\frac{324x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 18x$: the numerator becomes $2(81)x^2 + O(x^3) = 162x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 162."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{18x} = 1 + 18x + \\frac{324x^2}{2} + \\dots$",
      "٢. بطرح $1 + 18x$ من البسط يتبقى: 162x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 162."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_25",
    "titleEn": "Second-Order Exponential Limit #10",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 10",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{20x} - 1 - 20x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{20x} - 1 - 20x}{x^2}$.",
    "optionsEn": [
      "200",
      "202",
      "204",
      "100"
    ],
    "optionsAr": [
      "200",
      "202",
      "204",
      "100"
    ],
    "correctAnswer": "200",
    "correctIndex": 0,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 20x$:",
      "   $$e^{20x} = 1 + 20x + \\frac{(20x)^2}{2!} + O(x^3) = 1 + 20x + \\frac{400x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 20x$: the numerator becomes $2(100)x^2 + O(x^3) = 200x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 200."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{20x} = 1 + 20x + \\frac{400x^2}{2} + \\dots$",
      "٢. بطرح $1 + 20x$ من البسط يتبقى: 200x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 200."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_26",
    "titleEn": "Second-Order Exponential Limit #11",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 11",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{22x} - 1 - 22x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{22x} - 1 - 22x}{x^2}$.",
    "optionsEn": [
      "244",
      "242",
      "246",
      "121"
    ],
    "optionsAr": [
      "244",
      "242",
      "246",
      "121"
    ],
    "correctAnswer": "242",
    "correctIndex": 1,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 22x$:",
      "   $$e^{22x} = 1 + 22x + \\frac{(22x)^2}{2!} + O(x^3) = 1 + 22x + \\frac{484x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 22x$: the numerator becomes $2(121)x^2 + O(x^3) = 242x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 242."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{22x} = 1 + 22x + \\frac{484x^2}{2} + \\dots$",
      "٢. بطرح $1 + 22x$ من البسط يتبقى: 242x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 242."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_27",
    "titleEn": "Second-Order Exponential Limit #12",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 12",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{24x} - 1 - 24x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{24x} - 1 - 24x}{x^2}$.",
    "optionsEn": [
      "290",
      "292",
      "288",
      "144"
    ],
    "optionsAr": [
      "290",
      "292",
      "288",
      "144"
    ],
    "correctAnswer": "288",
    "correctIndex": 2,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 24x$:",
      "   $$e^{24x} = 1 + 24x + \\frac{(24x)^2}{2!} + O(x^3) = 1 + 24x + \\frac{576x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 24x$: the numerator becomes $2(144)x^2 + O(x^3) = 288x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 288."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{24x} = 1 + 24x + \\frac{576x^2}{2} + \\dots$",
      "٢. بطرح $1 + 24x$ من البسط يتبقى: 288x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 288."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_28",
    "titleEn": "Second-Order Exponential Limit #13",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 13",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{26x} - 1 - 26x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{26x} - 1 - 26x}{x^2}$.",
    "optionsEn": [
      "340",
      "342",
      "169",
      "338"
    ],
    "optionsAr": [
      "340",
      "342",
      "169",
      "338"
    ],
    "correctAnswer": "338",
    "correctIndex": 3,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 26x$:",
      "   $$e^{26x} = 1 + 26x + \\frac{(26x)^2}{2!} + O(x^3) = 1 + 26x + \\frac{676x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 26x$: the numerator becomes $2(169)x^2 + O(x^3) = 338x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 338."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{26x} = 1 + 26x + \\frac{676x^2}{2} + \\dots$",
      "٢. بطرح $1 + 26x$ من البسط يتبقى: 338x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 338."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_29",
    "titleEn": "Second-Order Exponential Limit #14",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 14",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{28x} - 1 - 28x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{28x} - 1 - 28x}{x^2}$.",
    "optionsEn": [
      "392",
      "394",
      "396",
      "196"
    ],
    "optionsAr": [
      "392",
      "394",
      "396",
      "196"
    ],
    "correctAnswer": "392",
    "correctIndex": 0,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 28x$:",
      "   $$e^{28x} = 1 + 28x + \\frac{(28x)^2}{2!} + O(x^3) = 1 + 28x + \\frac{784x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 28x$: the numerator becomes $2(196)x^2 + O(x^3) = 392x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 392."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{28x} = 1 + 28x + \\frac{784x^2}{2} + \\dots$",
      "٢. بطرح $1 + 28x$ من البسط يتبقى: 392x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 392."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_30",
    "titleEn": "Second-Order Exponential Limit #15",
    "titleAr": "نهاية الرتبة الثانية للدالة الأسية رقم 15",
    "difficulty": "medium",
    "questionEn": "Evaluate the indeterminate limit: $\\lim_{x \\to 0} \\frac{e^{30x} - 1 - 30x}{x^2}$.",
    "questionAr": "احسب النهاية غير المعينة: $\\lim_{x \\to 0} \\frac{e^{30x} - 1 - 30x}{x^2}$.",
    "optionsEn": [
      "452",
      "450",
      "454",
      "225"
    ],
    "optionsAr": [
      "452",
      "450",
      "454",
      "225"
    ],
    "correctAnswer": "450",
    "correctIndex": 1,
    "hintEn": "Apply L'Hopital's rule twice or use the Maclaurin expansion e^u = 1 + u + u^2/2! + ...",
    "hintAr": "طبق قاعدة لوبيتال مرتين أو استخدم مفكوك ماكلوران لدالة الأس الطبيعي.",
    "stepByStepSolutionEn": [
      "1. Using the Maclaurin series for $e^u$ with $u = 30x$:",
      "   $$e^{30x} = 1 + 30x + \\frac{(30x)^2}{2!} + O(x^3) = 1 + 30x + \\frac{900x^2}{2} + O(x^3)$$",
      "2. Subtract $1 + 30x$: the numerator becomes $2(225)x^2 + O(x^3) = 450x^2 + O(x^3)$.",
      "3. Divide by $x^2$ and take limit as $x \\to 0$: the result is 450."
    ],
    "stepByStepSolutionAr": [
      "١. باستخدام مفكوك ماكلوران: $e^{30x} = 1 + 30x + \\frac{900x^2}{2} + \\dots$",
      "٢. بطرح $1 + 30x$ من البسط يتبقى: 450x^2.",
      "٣. بالقسمة على $x^2$ وأخذ النهاية ينتج 450."
    ],
    "teacherTipEn": "The quadratic term of e^(ax) has coefficient a^2 / 2.",
    "teacherTipAr": "الحد التربيعي في مفكوك e^(ax) يكون معامله دائماً a^2 / 2."
  },
  {
    "id": "egbac_ana_ch2_db_med_31",
    "titleEn": "Local Extrema Classification for Cubic #1",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 1",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 3x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 3x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 1$, Local minimum at $x = -1$",
      "Local minimum at $x = 0$, Inflection at $x = 1$",
      "Local minimum at $x = 1$, Local maximum at $x = -1$",
      "Inflection points at $x = \\pm 1$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 1$، وصغرى محلية عند $x = -1$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 1$",
      "صغرى محلية عند $x = 1$، وعظمى محلية عند $x = -1$",
      "نقاط انقلاب عند $x = \\pm 1$"
    ],
    "correctAnswer": "Local minimum at $x = 1$, Local maximum at $x = -1$",
    "correctIndex": 2,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 0 \\implies x = \\pm 1$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 1$: $f''(1) = 6(1) > 0 \\implies$ local minimum.",
      "4. At $x = -1$: $f''(-1) = -6(1) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 1) = 0 \\implies x = \\pm 1$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 1$: $f''(1) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -1$: $f''(-1) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_32",
    "titleEn": "Local Extrema Classification for Cubic #2",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 2",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 12x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 12x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 2$, Local minimum at $x = -2$",
      "Local minimum at $x = 0$, Inflection at $x = 2$",
      "Inflection points at $x = \\pm 2$",
      "Local minimum at $x = 2$, Local maximum at $x = -2$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 2$، وصغرى محلية عند $x = -2$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 2$",
      "نقاط انقلاب عند $x = \\pm 2$",
      "صغرى محلية عند $x = 2$، وعظمى محلية عند $x = -2$"
    ],
    "correctAnswer": "Local minimum at $x = 2$, Local maximum at $x = -2$",
    "correctIndex": 3,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 0 \\implies x = \\pm 2$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 2$: $f''(2) = 6(2) > 0 \\implies$ local minimum.",
      "4. At $x = -2$: $f''(-2) = -6(2) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 4) = 0 \\implies x = \\pm 2$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 2$: $f''(2) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -2$: $f''(-2) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_33",
    "titleEn": "Local Extrema Classification for Cubic #3",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 3",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 27x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 27x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local minimum at $x = 3$, Local maximum at $x = -3$",
      "Local maximum at $x = 3$, Local minimum at $x = -3$",
      "Local minimum at $x = 0$, Inflection at $x = 3$",
      "Inflection points at $x = \\pm 3$"
    ],
    "optionsAr": [
      "صغرى محلية عند $x = 3$، وعظمى محلية عند $x = -3$",
      "عظمى محلية عند $x = 3$، وصغرى محلية عند $x = -3$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 3$",
      "نقاط انقلاب عند $x = \\pm 3$"
    ],
    "correctAnswer": "Local minimum at $x = 3$, Local maximum at $x = -3$",
    "correctIndex": 0,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 27 = 3(x^2 - 9) = 0 \\implies x = \\pm 3$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 3$: $f''(3) = 6(3) > 0 \\implies$ local minimum.",
      "4. At $x = -3$: $f''(-3) = -6(3) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 9) = 0 \\implies x = \\pm 3$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 3$: $f''(3) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -3$: $f''(-3) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_34",
    "titleEn": "Local Extrema Classification for Cubic #4",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 4",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 48x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 48x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 4$, Local minimum at $x = -4$",
      "Local minimum at $x = 4$, Local maximum at $x = -4$",
      "Local minimum at $x = 0$, Inflection at $x = 4$",
      "Inflection points at $x = \\pm 4$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 4$، وصغرى محلية عند $x = -4$",
      "صغرى محلية عند $x = 4$، وعظمى محلية عند $x = -4$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 4$",
      "نقاط انقلاب عند $x = \\pm 4$"
    ],
    "correctAnswer": "Local minimum at $x = 4$, Local maximum at $x = -4$",
    "correctIndex": 1,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 48 = 3(x^2 - 16) = 0 \\implies x = \\pm 4$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 4$: $f''(4) = 6(4) > 0 \\implies$ local minimum.",
      "4. At $x = -4$: $f''(-4) = -6(4) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 16) = 0 \\implies x = \\pm 4$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 4$: $f''(4) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -4$: $f''(-4) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_35",
    "titleEn": "Local Extrema Classification for Cubic #5",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 5",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 75x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 75x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 5$, Local minimum at $x = -5$",
      "Local minimum at $x = 0$, Inflection at $x = 5$",
      "Local minimum at $x = 5$, Local maximum at $x = -5$",
      "Inflection points at $x = \\pm 5$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 5$، وصغرى محلية عند $x = -5$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 5$",
      "صغرى محلية عند $x = 5$، وعظمى محلية عند $x = -5$",
      "نقاط انقلاب عند $x = \\pm 5$"
    ],
    "correctAnswer": "Local minimum at $x = 5$, Local maximum at $x = -5$",
    "correctIndex": 2,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 75 = 3(x^2 - 25) = 0 \\implies x = \\pm 5$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 5$: $f''(5) = 6(5) > 0 \\implies$ local minimum.",
      "4. At $x = -5$: $f''(-5) = -6(5) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 25) = 0 \\implies x = \\pm 5$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 5$: $f''(5) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -5$: $f''(-5) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_36",
    "titleEn": "Local Extrema Classification for Cubic #6",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 6",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 108x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 108x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 6$, Local minimum at $x = -6$",
      "Local minimum at $x = 0$, Inflection at $x = 6$",
      "Inflection points at $x = \\pm 6$",
      "Local minimum at $x = 6$, Local maximum at $x = -6$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 6$، وصغرى محلية عند $x = -6$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 6$",
      "نقاط انقلاب عند $x = \\pm 6$",
      "صغرى محلية عند $x = 6$، وعظمى محلية عند $x = -6$"
    ],
    "correctAnswer": "Local minimum at $x = 6$, Local maximum at $x = -6$",
    "correctIndex": 3,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 108 = 3(x^2 - 36) = 0 \\implies x = \\pm 6$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 6$: $f''(6) = 6(6) > 0 \\implies$ local minimum.",
      "4. At $x = -6$: $f''(-6) = -6(6) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 36) = 0 \\implies x = \\pm 6$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 6$: $f''(6) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -6$: $f''(-6) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_37",
    "titleEn": "Local Extrema Classification for Cubic #7",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 7",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 147x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 147x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local minimum at $x = 7$, Local maximum at $x = -7$",
      "Local maximum at $x = 7$, Local minimum at $x = -7$",
      "Local minimum at $x = 0$, Inflection at $x = 7$",
      "Inflection points at $x = \\pm 7$"
    ],
    "optionsAr": [
      "صغرى محلية عند $x = 7$، وعظمى محلية عند $x = -7$",
      "عظمى محلية عند $x = 7$، وصغرى محلية عند $x = -7$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 7$",
      "نقاط انقلاب عند $x = \\pm 7$"
    ],
    "correctAnswer": "Local minimum at $x = 7$, Local maximum at $x = -7$",
    "correctIndex": 0,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 147 = 3(x^2 - 49) = 0 \\implies x = \\pm 7$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 7$: $f''(7) = 6(7) > 0 \\implies$ local minimum.",
      "4. At $x = -7$: $f''(-7) = -6(7) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 49) = 0 \\implies x = \\pm 7$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 7$: $f''(7) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -7$: $f''(-7) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_38",
    "titleEn": "Local Extrema Classification for Cubic #8",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 8",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 192x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 192x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 8$, Local minimum at $x = -8$",
      "Local minimum at $x = 8$, Local maximum at $x = -8$",
      "Local minimum at $x = 0$, Inflection at $x = 8$",
      "Inflection points at $x = \\pm 8$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 8$، وصغرى محلية عند $x = -8$",
      "صغرى محلية عند $x = 8$، وعظمى محلية عند $x = -8$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 8$",
      "نقاط انقلاب عند $x = \\pm 8$"
    ],
    "correctAnswer": "Local minimum at $x = 8$, Local maximum at $x = -8$",
    "correctIndex": 1,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 192 = 3(x^2 - 64) = 0 \\implies x = \\pm 8$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 8$: $f''(8) = 6(8) > 0 \\implies$ local minimum.",
      "4. At $x = -8$: $f''(-8) = -6(8) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 64) = 0 \\implies x = \\pm 8$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 8$: $f''(8) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -8$: $f''(-8) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_39",
    "titleEn": "Local Extrema Classification for Cubic #9",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 9",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 243x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 243x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 9$, Local minimum at $x = -9$",
      "Local minimum at $x = 0$, Inflection at $x = 9$",
      "Local minimum at $x = 9$, Local maximum at $x = -9$",
      "Inflection points at $x = \\pm 9$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 9$، وصغرى محلية عند $x = -9$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 9$",
      "صغرى محلية عند $x = 9$، وعظمى محلية عند $x = -9$",
      "نقاط انقلاب عند $x = \\pm 9$"
    ],
    "correctAnswer": "Local minimum at $x = 9$, Local maximum at $x = -9$",
    "correctIndex": 2,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 243 = 3(x^2 - 81) = 0 \\implies x = \\pm 9$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 9$: $f''(9) = 6(9) > 0 \\implies$ local minimum.",
      "4. At $x = -9$: $f''(-9) = -6(9) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 81) = 0 \\implies x = \\pm 9$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 9$: $f''(9) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -9$: $f''(-9) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_40",
    "titleEn": "Local Extrema Classification for Cubic #10",
    "titleAr": "تصنيف القيم القصوى المحلية لدالة تكعيبية رقم 10",
    "difficulty": "medium",
    "questionEn": "Classify the local extrema of the function $f(x) = x^3 - 300x$ using the second derivative test.",
    "questionAr": "حدد نوع القيم القصوى المحلية للدالة $f(x) = x^3 - 300x$ باستخدام اختبار المشتقة الثانية.",
    "optionsEn": [
      "Local maximum at $x = 10$, Local minimum at $x = -10$",
      "Local minimum at $x = 0$, Inflection at $x = 10$",
      "Inflection points at $x = \\pm 10$",
      "Local minimum at $x = 10$, Local maximum at $x = -10$"
    ],
    "optionsAr": [
      "عظمى محلية عند $x = 10$، وصغرى محلية عند $x = -10$",
      "صغرى محلية عند $x = 0$، وانقلاب عند $x = 10$",
      "نقاط انقلاب عند $x = \\pm 10$",
      "صغرى محلية عند $x = 10$، وعظمى محلية عند $x = -10$"
    ],
    "correctAnswer": "Local minimum at $x = 10$, Local maximum at $x = -10$",
    "correctIndex": 3,
    "hintEn": "f'(x) = 3x^2 - 3k^2 = 0 implies x = +/- k. Evaluate f''(x) = 6x at these critical points.",
    "hintAr": "المشتقة الأولى تنعدم عند x = +/- k. احسب إشارة المشتقة الثانية f''(x) = 6x.",
    "stepByStepSolutionEn": [
      "1. First derivative: $f'(x) = 3x^2 - 300 = 3(x^2 - 100) = 0 \\implies x = \\pm 10$.",
      "2. Second derivative: $f''(x) = 6x$.",
      "3. At $x = 10$: $f''(10) = 6(10) > 0 \\implies$ local minimum.",
      "4. At $x = -10$: $f''(-10) = -6(10) < 0 \\implies$ local maximum."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $f'(x) = 3(x^2 - 100) = 0 \\implies x = \\pm 10$.",
      "٢. المشتقة الثانية: $f''(x) = 6x$.",
      "٣. عند $x = 10$: $f''(10) > 0 \\implies$ صغرى محلية.",
      "٤. عند $x = -10$: $f''(-10) < 0 \\implies$ عظمى محلية."
    ],
    "teacherTipEn": "f''(c) > 0 indicates concave up (a cup holding water), hence a local minimum.",
    "teacherTipAr": "المشتقة الثانية الموجبة تعني تقعراً لأعلى، وبالتالي تكون النقطة قيمة صغرى محلية."
  },
  {
    "id": "egbac_ana_ch2_db_med_41",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #1",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 1",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(2x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(2x)$.",
    "optionsEn": [
      "$P_2(x) = 1 - 2x^2$",
      "$P_2(x) = 1 + 2x^2$",
      "$P_2(x) = 1 - 4x^2$",
      "$P_2(x) = 1 + 4x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 - 2x^2$",
      "$P_2(x) = 1 + 2x^2$",
      "$P_2(x) = 1 - 4x^2$",
      "$P_2(x) = 1 + 4x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - 2x^2$",
    "correctIndex": 0,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 2x$:",
      "   $$P_2(x) = 1 - \\frac{(2x)^2}{2} = 1 - \\frac{4x^2}{2} = 1 - 2x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 2x$:",
      "   $$P_2(x) = 1 - \\frac{4x^2}{2} = 1 - 2x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_42",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #2",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 2",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(3x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(3x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + \\frac{9}{2}x^2$",
      "$P_2(x) = 1 - \\frac{9}{2}x^2$",
      "$P_2(x) = 1 - 9x^2$",
      "$P_2(x) = 1 + 9x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + \\frac{9}{2}x^2$",
      "$P_2(x) = 1 - \\frac{9}{2}x^2$",
      "$P_2(x) = 1 - 9x^2$",
      "$P_2(x) = 1 + 9x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - \\frac{9}{2}x^2$",
    "correctIndex": 1,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 3x$:",
      "   $$P_2(x) = 1 - \\frac{(3x)^2}{2} = 1 - \\frac{9x^2}{2} = 1 - \\frac{9}{2}x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 3x$:",
      "   $$P_2(x) = 1 - \\frac{9x^2}{2} = 1 - \\frac{9}{2}x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_43",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #3",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 3",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(4x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(4x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + 8x^2$",
      "$P_2(x) = 1 - 16x^2$",
      "$P_2(x) = 1 - 8x^2$",
      "$P_2(x) = 1 + 16x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + 8x^2$",
      "$P_2(x) = 1 - 16x^2$",
      "$P_2(x) = 1 - 8x^2$",
      "$P_2(x) = 1 + 16x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - 8x^2$",
    "correctIndex": 2,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 4x$:",
      "   $$P_2(x) = 1 - \\frac{(4x)^2}{2} = 1 - \\frac{16x^2}{2} = 1 - 8x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 4x$:",
      "   $$P_2(x) = 1 - \\frac{16x^2}{2} = 1 - 8x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_44",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #4",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 4",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(5x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(5x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + \\frac{25}{2}x^2$",
      "$P_2(x) = 1 - 25x^2$",
      "$P_2(x) = 1 + 25x^2$",
      "$P_2(x) = 1 - \\frac{25}{2}x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + \\frac{25}{2}x^2$",
      "$P_2(x) = 1 - 25x^2$",
      "$P_2(x) = 1 + 25x^2$",
      "$P_2(x) = 1 - \\frac{25}{2}x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - \\frac{25}{2}x^2$",
    "correctIndex": 3,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 5x$:",
      "   $$P_2(x) = 1 - \\frac{(5x)^2}{2} = 1 - \\frac{25x^2}{2} = 1 - \\frac{25}{2}x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 5x$:",
      "   $$P_2(x) = 1 - \\frac{25x^2}{2} = 1 - \\frac{25}{2}x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_45",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #5",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 5",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(6x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(6x)$.",
    "optionsEn": [
      "$P_2(x) = 1 - 18x^2$",
      "$P_2(x) = 1 + 18x^2$",
      "$P_2(x) = 1 - 36x^2$",
      "$P_2(x) = 1 + 36x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 - 18x^2$",
      "$P_2(x) = 1 + 18x^2$",
      "$P_2(x) = 1 - 36x^2$",
      "$P_2(x) = 1 + 36x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - 18x^2$",
    "correctIndex": 0,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 6x$:",
      "   $$P_2(x) = 1 - \\frac{(6x)^2}{2} = 1 - \\frac{36x^2}{2} = 1 - 18x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 6x$:",
      "   $$P_2(x) = 1 - \\frac{36x^2}{2} = 1 - 18x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_46",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #6",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 6",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(7x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(7x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + \\frac{49}{2}x^2$",
      "$P_2(x) = 1 - \\frac{49}{2}x^2$",
      "$P_2(x) = 1 - 49x^2$",
      "$P_2(x) = 1 + 49x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + \\frac{49}{2}x^2$",
      "$P_2(x) = 1 - \\frac{49}{2}x^2$",
      "$P_2(x) = 1 - 49x^2$",
      "$P_2(x) = 1 + 49x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - \\frac{49}{2}x^2$",
    "correctIndex": 1,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 7x$:",
      "   $$P_2(x) = 1 - \\frac{(7x)^2}{2} = 1 - \\frac{49x^2}{2} = 1 - \\frac{49}{2}x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 7x$:",
      "   $$P_2(x) = 1 - \\frac{49x^2}{2} = 1 - \\frac{49}{2}x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_47",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #7",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 7",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(8x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(8x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + 32x^2$",
      "$P_2(x) = 1 - 64x^2$",
      "$P_2(x) = 1 - 32x^2$",
      "$P_2(x) = 1 + 64x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + 32x^2$",
      "$P_2(x) = 1 - 64x^2$",
      "$P_2(x) = 1 - 32x^2$",
      "$P_2(x) = 1 + 64x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - 32x^2$",
    "correctIndex": 2,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 8x$:",
      "   $$P_2(x) = 1 - \\frac{(8x)^2}{2} = 1 - \\frac{64x^2}{2} = 1 - 32x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 8x$:",
      "   $$P_2(x) = 1 - \\frac{64x^2}{2} = 1 - 32x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_48",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #8",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 8",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(9x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(9x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + \\frac{81}{2}x^2$",
      "$P_2(x) = 1 - 81x^2$",
      "$P_2(x) = 1 + 81x^2$",
      "$P_2(x) = 1 - \\frac{81}{2}x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + \\frac{81}{2}x^2$",
      "$P_2(x) = 1 - 81x^2$",
      "$P_2(x) = 1 + 81x^2$",
      "$P_2(x) = 1 - \\frac{81}{2}x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - \\frac{81}{2}x^2$",
    "correctIndex": 3,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 9x$:",
      "   $$P_2(x) = 1 - \\frac{(9x)^2}{2} = 1 - \\frac{81x^2}{2} = 1 - \\frac{81}{2}x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 9x$:",
      "   $$P_2(x) = 1 - \\frac{81x^2}{2} = 1 - \\frac{81}{2}x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_49",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #9",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 9",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(10x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(10x)$.",
    "optionsEn": [
      "$P_2(x) = 1 - 50x^2$",
      "$P_2(x) = 1 + 50x^2$",
      "$P_2(x) = 1 - 100x^2$",
      "$P_2(x) = 1 + 100x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 - 50x^2$",
      "$P_2(x) = 1 + 50x^2$",
      "$P_2(x) = 1 - 100x^2$",
      "$P_2(x) = 1 + 100x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - 50x^2$",
    "correctIndex": 0,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 10x$:",
      "   $$P_2(x) = 1 - \\frac{(10x)^2}{2} = 1 - \\frac{100x^2}{2} = 1 - 50x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 10x$:",
      "   $$P_2(x) = 1 - \\frac{100x^2}{2} = 1 - 50x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_50",
    "titleEn": "Second-Degree Maclaurin Polynomial for Cosine #10",
    "titleAr": "كثيرة حدود ماكلوران لجيب التمام رقم 10",
    "difficulty": "medium",
    "questionEn": "Find the 2nd-degree Maclaurin polynomial $P_2(x)$ for $f(x) = \\cos(11x)$.",
    "questionAr": "أوجد كثيرة حدود ماكلوران من الدرجة الثانية $P_2(x)$ للدالة $f(x) = \\cos(11x)$.",
    "optionsEn": [
      "$P_2(x) = 1 + \\frac{121}{2}x^2$",
      "$P_2(x) = 1 - \\frac{121}{2}x^2$",
      "$P_2(x) = 1 - 121x^2$",
      "$P_2(x) = 1 + 121x^2$"
    ],
    "optionsAr": [
      "$P_2(x) = 1 + \\frac{121}{2}x^2$",
      "$P_2(x) = 1 - \\frac{121}{2}x^2$",
      "$P_2(x) = 1 - 121x^2$",
      "$P_2(x) = 1 + 121x^2$"
    ],
    "correctAnswer": "$P_2(x) = 1 - \\frac{121}{2}x^2$",
    "correctIndex": 1,
    "hintEn": "cos(u) = 1 - u^2/2! + ... with u = kx.",
    "hintAr": "جتا(u) = 1 - u^2 / 2! مع التعويض بـ u = kx.",
    "stepByStepSolutionEn": [
      "1. Standard series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$.",
      "2. Substitute $u = 11x$:",
      "   $$P_2(x) = 1 - \\frac{(11x)^2}{2} = 1 - \\frac{121x^2}{2} = 1 - \\frac{121}{2}x^2$$"
    ],
    "stepByStepSolutionAr": [
      "١. المتسلسلة القياسية: $\\cos(u) = 1 - \\frac{u^2}{2}$.",
      "٢. بالتعويض عن $u = 11x$:",
      "   $$P_2(x) = 1 - \\frac{121x^2}{2} = 1 - \\frac{121}{2}x^2$$"
    ],
    "teacherTipEn": "Cosine contains only even powers in its Maclaurin expansion.",
    "teacherTipAr": "دالة جيب التمام تحتوي على القوى الزوجية فقط في مفكوك ماكلوران."
  },
  {
    "id": "egbac_ana_ch2_db_med_51",
    "titleEn": "Lagrange Mean Value Theorem Point",
    "titleAr": "إيجاد نقطة مبرهنة القيمة المتوسطة للاجرانج",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the value of $c \\in (1, 4)$ that satisfies the Lagrange Mean Value Theorem for $f(x) = \\sqrt{x}$ on $[1, 4]$.",
    "questionAr": "أوجد قيمة $c \\in (1, 4)$ التي تحقق مبرهنة القيمة المتوسطة للاجرانج للدالة $f(x) = \\sqrt{x}$ على الفترة $[1, 4]$.",
    "optionsEn": [
      "$2.25$ (or $\\frac{9}{4}$)",
      "$2.50$",
      "$2.00$",
      "$3.00$"
    ],
    "optionsAr": [
      "$2.25$ (أو $\\frac{9}{4}$)",
      "$2.50$",
      "$2.00$",
      "$3.00$"
    ],
    "correctAnswer": "$2.25$ (or $\\frac{9}{4}$)",
    "correctIndex": 0,
    "hintEn": "Set $f'(c) = \\frac{f(4) - f(1)}{4 - 1}$ and solve for $c$.",
    "hintAr": "ساوِ $f'(c) = \\frac{f(4) - f(1)}{4 - 1}$ وحل المعادلة لإيجاد $c$.",
    "stepByStepSolutionEn": [
      "Average rate of change: $\\frac{f(4) - f(1)}{4 - 1} = \\frac{\\sqrt{4} - \\sqrt{1}}{3} = \\frac{2 - 1}{3} = \\frac{1}{3}$.",
      "Derivative: $f'(x) = \\frac{1}{2\\sqrt{x}}$.",
      "Set $f'(c) = \\frac{1}{3} \\implies \\frac{1}{2\\sqrt{c}} = \\frac{1}{3} \\implies 2\\sqrt{c} = 3 \\implies \\sqrt{c} = \\frac{3}{2}$.",
      "Squaring both sides: $c = \\frac{9}{4} = 2.25 \\in (1, 4)$."
    ],
    "stepByStepSolutionAr": [
      "متوسط معدل التغير: $\\frac{\\sqrt{4} - \\sqrt{1}}{4 - 1} = \\frac{2 - 1}{3} = \\frac{1}{3}$.",
      "المشتقة: $f'(x) = \\frac{1}{2\\sqrt{x}}$.",
      "بالمساواة: $\\frac{1}{2\\sqrt{c}} = \\frac{1}{3} \\implies \\sqrt{c} = \\frac{3}{2}$.",
      "بتربيع الطرفين: $c = \\frac{9}{4} = 2.25$."
    ],
    "teacherTipEn": "Notice $c = 2.25$ is close to, but slightly less than, the midpoint $2.5$, reflecting the sublinear growth of $\\sqrt{x}$.",
    "teacherTipAr": "لاحظ أن $c = 2.25$ أقل قليلاً من منتصف الفترة 2.5 بسبب انحناء دالة الجذر التربيعي."
  },
  {
    "id": "egbac_ana_ch2_db_med_52",
    "titleEn": "First-Order Linear ODE with Integrating Factor",
    "titleAr": "حل معادلة خطية من الرتبة الأولى بعامل التكامل",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Solve the initial value problem: $y' + 2xy = 4x$ with $y(0) = 5$.",
    "questionAr": "حل مسألة القيمة الابتدائية: $y' + 2xy = 4x$ مع الشرط الابتدائي $y(0) = 5$.",
    "optionsEn": [
      "$y(x) = 2 + 3e^{-x^2}$",
      "$y(x) = 2 + 5e^{-x^2}$",
      "$y(x) = 4 + e^{-x^2}$",
      "$y(x) = 2 + 3e^{x^2}$"
    ],
    "optionsAr": [
      "$y(x) = 2 + 3e^{-x^2}$",
      "$y(x) = 2 + 5e^{-x^2}$",
      "$y(x) = 4 + e^{-x^2}$",
      "$y(x) = 2 + 3e^{x^2}$"
    ],
    "correctAnswer": "$y(x) = 2 + 3e^{-x^2}$",
    "correctIndex": 0,
    "hintEn": "The integrating factor is $\\mu(x) = e^{\\int 2x dx} = e^{x^2}$.",
    "hintAr": "عامل التكامل هو $\\mu(x) = e^{\\int 2x dx} = e^{x^2}$.",
    "stepByStepSolutionEn": [
      "Integrating factor: $\\mu(x) = e^{\\int 2x dx} = e^{x^2}$.",
      "Multiply ODE by $\\mu(x)$: $\\frac{d}{dx}[y e^{x^2}] = 4x e^{x^2}$.",
      "Integrate both sides: $y e^{x^2} = \\int 4x e^{x^2} dx = 2 e^{x^2} + C$.",
      "Divide by $e^{x^2}$: $y(x) = 2 + C e^{-x^2}$.",
      "Apply initial condition $y(0) = 5$: $2 + C = 5 \\implies C = 3$.",
      "Solution: $y(x) = 2 + 3e^{-x^2}$."
    ],
    "stepByStepSolutionAr": [
      "عامل التكامل: $\\mu(x) = e^{\\int 2x dx} = e^{x^2}$.",
      "بالضرب في عامل التكامل: $\\frac{d}{dx}[y e^{x^2}] = 4x e^{x^2}$.",
      "بالتكامل: $y e^{x^2} = 2 e^{x^2} + C \\implies y = 2 + C e^{-x^2}$.",
      "من الشرط الابتدائي $y(0) = 5$: $2 + C = 5 \\implies C = 3$.",
      "الحل النهائي: $y(x) = 2 + 3e^{-x^2}$."
    ],
    "teacherTipEn": "As $x \\to \\infty$, $e^{-x^2} \\to 0$, so the steady-state equilibrium value is $y = 2$.",
    "teacherTipAr": "عندما $x \\to \\infty$ يتلاشى الحد الأسي وتستقر الدالة عند قيمة التوازن $y = 2$."
  },
  {
    "id": "egbac_ana_ch2_db_med_53",
    "titleEn": "Second-Order Homogeneous ODE with Real Roots",
    "titleAr": "معادلة تفاضلية متجانسة من الرتبة الثانية بجذور حقيقية",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the general solution to the second-order differential equation $y'' - 5y' + 6y = 0$.",
    "questionAr": "أوجد الحل العام للمعادلة التفاضلية من الرتبة الثانية $y'' - 5y' + 6y = 0$.",
    "optionsEn": [
      "$y = C_1 e^{2x} + C_2 e^{3x}$",
      "$y = C_1 e^{-2x} + C_2 e^{-3x}$",
      "$y = (C_1 + C_2 x) e^{2x}$",
      "$y = C_1 \\cos(2x) + C_2 \\sin(3x)$"
    ],
    "optionsAr": [
      "$y = C_1 e^{2x} + C_2 e^{3x}$",
      "$y = C_1 e^{-2x} + C_2 e^{-3x}$",
      "$y = (C_1 + C_2 x) e^{2x}$",
      "$y = C_1 \\cos(2x) + C_2 \\sin(3x)$"
    ],
    "correctAnswer": "$y = C_1 e^{2x} + C_2 e^{3x}$",
    "correctIndex": 0,
    "hintEn": "Solve the characteristic equation $r^2 - 5r + 6 = 0$.",
    "hintAr": "حل المعادلة المميزة $r^2 - 5r + 6 = 0$.",
    "stepByStepSolutionEn": [
      "Characteristic equation: $r^2 - 5r + 6 = 0$.",
      "Factor: $(r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$.",
      "Since roots are distinct real numbers, the general solution is $y = C_1 e^{2x} + C_2 e^{3x}$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة المميزة: $r^2 - 5r + 6 = 0$.",
      "التحليل: $(r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$.",
      "جذران حقيقيان متمايزان، إذن الحل العام هو $y = C_1 e^{2x} + C_2 e^{3x}$."
    ],
    "teacherTipEn": "Distinct real roots $r_1, r_2$ always give fundamental solutions $e^{r_1 x}$ and $e^{r_2 x}$.",
    "teacherTipAr": "الجذور الحقيقية المختلفة تعطي حلولاً أساسية مستقلة خطياً على صورة $e^{r_1 x}$ و $e^{r_2 x}$."
  },
  {
    "id": "egbac_ana_ch2_db_med_54",
    "titleEn": "Taylor Polynomial of Degree 3 for ln(1+x)",
    "titleAr": "كثير حدود تايلور من الدرجة الثالثة لـ ln(1+x)",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the Taylor polynomial of degree 3 centered at $x = 0$ for $f(x) = \\ln(1 + x)$.",
    "questionAr": "أوجد كثير حدود تايلور من الدرجة الثالثة المتمركز حول $x = 0$ للدالة $f(x) = \\ln(1 + x)$.",
    "optionsEn": [
      "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$",
      "$x - \\frac{x^2}{2} + \\frac{x^3}{6}$",
      "$x + \\frac{x^2}{2} + \\frac{x^3}{3}$",
      "$1 + x - \\frac{x^2}{2} + \\frac{x^3}{3}$"
    ],
    "optionsAr": [
      "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$",
      "$x - \\frac{x^2}{2} + \\frac{x^3}{6}$",
      "$x + \\frac{x^2}{2} + \\frac{x^3}{3}$",
      "$1 + x - \\frac{x^2}{2} + \\frac{x^3}{3}$"
    ],
    "correctAnswer": "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$",
    "correctIndex": 0,
    "hintEn": "Compute derivatives at $0$: $f'(0)=1, f''(0)=-1, f'''(0)=2$. Recall formula $\\frac{f^{(k)}(0)}{k!}x^k$.",
    "hintAr": "احسب المشتقات عند الصفر واستخدم الصيغة العامة $\\frac{f^{(k)}(0)}{k!}x^k$.",
    "stepByStepSolutionEn": [
      "$f(0) = \\ln(1) = 0$.",
      "$f'(x) = \\frac{1}{1+x} \\implies f'(0) = 1$.",
      "$f''(x) = -\\frac{1}{(1+x)^2} \\implies f''(0) = -1$.",
      "$f'''(x) = \\frac{2}{(1+x)^3} \\implies f'''(0) = 2$.",
      "Substitute into $P_3(x) = f(0) + f'(0)x + \\frac{f''(0)}{2}x^2 + \\frac{f'''(0)}{6}x^3$:",
      "$P_3(x) = x - \\frac{x^2}{2} + \\frac{2}{6}x^3 = x - \\frac{x^2}{2} + \\frac{x^3}{3}$."
    ],
    "stepByStepSolutionAr": [
      "$f(0) = 0$.",
      "$f'(0) = 1$.",
      "$f''(0) = -1$.",
      "$f'''(0) = 2$.",
      "$P_3(x) = x - \\frac{x^2}{2} + \\frac{2}{3!}x^3 = x - \\frac{x^2}{2} + \\frac{x^3}{3}$."
    ],
    "teacherTipEn": "Notice the coefficients are $\\frac{(-1)^{k-1}}{k}$, not divided by factorials.",
    "teacherTipAr": "لاحظ أن معاملات لوغاريتم $(1+x)$ مقسومة على $k$ وليس على المضروب $k!$ بسبب اختصار المشتقات."
  },
  {
    "id": "egbac_ana_ch2_db_med_55",
    "titleEn": "Maximum Area of a Rectangle with Fixed Perimeter",
    "titleAr": "أكبر مساحة لمستطيل محيطه ثابت",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "A rectangle has a fixed perimeter of $40\\text{ cm}$. Find the dimensions that maximize its area, and the maximum area.",
    "questionAr": "مستطيل محيطه ثابت ويساوي $40\\text{ سم}$. أوجد أبعاده التي تجعل مساحته أكبر ما يمكن، وقيمة هذه المساحة.",
    "optionsEn": [
      "Square of side $10\\text{ cm}$, Maximum Area $= 100\\text{ cm}^2$",
      "Dimensions $8\\text{ cm} \\times 12\\text{ cm}$, Maximum Area $= 96\\text{ cm}^2$",
      "Dimensions $5\\text{ cm} \\times 15\\text{ cm}$, Maximum Area $= 75\\text{ cm}^2$",
      "Square of side $20\\text{ cm}$, Maximum Area $= 400\\text{ cm}^2$"
    ],
    "optionsAr": [
      "مربع طول ضلعه $10\\text{ سم}$، وأكبر مساحة $= 100\\text{ سم}^2$",
      "الأبعاد $8\\text{ سم} \\times 12\\text{ سم}$، وأكبر مساحة $= 96\\text{ سم}^2$",
      "الأبعاد $5\\text{ سم} \\times 15\\text{ سم}$، وأكبر مساحة $= 75\\text{ سم}^2$",
      "مربع طول ضلعه $20\\text{ سم}$، وأكبر مساحة $= 400\\text{ سم}^2$"
    ],
    "correctAnswer": "Square of side $10\\text{ cm}$, Maximum Area $= 100\\text{ cm}^2$",
    "correctIndex": 0,
    "hintEn": "Express area as $A(x) = x(20 - x)$ and find the vertex of the parabola or set $A'(x) = 0$.",
    "hintAr": "عبر عن المساحة كدالة $A(x) = x(20 - x)$ وأوجد رأس المنحنى بمساواة $A'(x) = 0$.",
    "stepByStepSolutionEn": [
      "Perimeter $2(x + y) = 40 \\implies x + y = 20 \\implies y = 20 - x$.",
      "Area function: $A(x) = x(20 - x) = 20x - x^2$.",
      "Derivative: $A'(x) = 20 - 2x = 0 \\implies x = 10\\text{ cm}$.",
      "Then $y = 20 - 10 = 10\\text{ cm}$ (a square).",
      "Maximum area: $A(10) = 10 \\times 10 = 100\\text{ cm}^2$."
    ],
    "stepByStepSolutionAr": [
      "المحيط: $2(x + y) = 40 \\implies y = 20 - x$.",
      "دالة المساحة: $A(x) = 20x - x^2$.",
      "$A'(x) = 20 - 2x = 0 \\implies x = 10\\text{ سم}$.",
      "إذن $y = 10\\text{ سم}$ (الشكل مربع).",
      "المساحة العظمى: $10 \\times 10 = 100\\text{ سم}^2$."
    ],
    "teacherTipEn": "Among all rectangles of a given perimeter, the square always has the maximum area.",
    "teacherTipAr": "من بين جميع المستطيلات ذات المحيط الثابت، المربع هو دائماً صاحب المساحة الكبرى."
  },
  {
    "id": "egbac_ana_ch2_db_med_56",
    "titleEn": "Cauchy Mean Value Theorem Point",
    "titleAr": "نقطة مبرهنة كوشي للقيمة المتوسطة",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Apply Cauchy's Mean Value Theorem to $f(x) = x^2$ and $g(x) = x^3$ on the interval $[1, 2]$. Find the value of $c \\in (1, 2)$ such that $\\frac{f'(c)}{g'(c)} = \\frac{f(2) - f(1)}{g(2) - g(1)}$.",
    "questionAr": "طبق مبرهنة كوشي للقيمة المتوسطة للدالتين $f(x) = x^2$ و $g(x) = x^3$ على الفترة $[1, 2]$. أوجد قيمة $c \\in (1, 2)$ التي تحقق $\\frac{f'(c)}{g'(c)} = \\frac{f(2) - f(1)}{g(2) - g(1)}$.",
    "optionsEn": [
      "$\\frac{14}{9}$",
      "$\\frac{3}{2}$",
      "$\\frac{7}{5}$",
      "$\\frac{5}{3}$"
    ],
    "optionsAr": [
      "$\\frac{14}{9}$",
      "$\\frac{3}{2}$",
      "$\\frac{7}{5}$",
      "$\\frac{5}{3}$"
    ],
    "correctAnswer": "$\\frac{14}{9}$",
    "correctIndex": 0,
    "hintEn": "Compute $\\frac{f(2)-f(1)}{g(2)-g(1)} = \\frac{4-1}{8-1} = \\frac{3}{7}$. Then set $\\frac{2c}{3c^2} = \\frac{3}{7}$.",
    "hintAr": "احسب النسبة $\\frac{4-1}{8-1} = \\frac{3}{7}$ ثم ساوِ $\\frac{2c}{3c^2} = \\frac{3}{7}$.",
    "stepByStepSolutionEn": [
      "Evaluate functions: $f(1)=1, f(2)=4 \\implies \\Delta f = 3$.",
      "$g(1)=1, g(2)=8 \\implies \\Delta g = 7$.",
      "Right-hand side ratio: $\\frac{\\Delta f}{\\Delta g} = \\frac{3}{7}$.",
      "Derivatives: $f'(x) = 2x$ and $g'(x) = 3x^2$, so $\\frac{f'(c)}{g'(c)} = \\frac{2c}{3c^2} = \\frac{2}{3c}$.",
      "Equate: $\\frac{2}{3c} = \\frac{3}{7} \\implies 9c = 14 \\implies c = \\frac{14}{9} \\approx 1.556 \\in (1, 2)$."
    ],
    "stepByStepSolutionAr": [
      "حساب الفروق: $\\Delta f = 4 - 1 = 3$ و $\\Delta g = 8 - 1 = 7$.",
      "النسبة: $\\frac{\\Delta f}{\\Delta g} = \\frac{3}{7}$.",
      "نسبة المشتقتين: $\\frac{2c}{3c^2} = \\frac{2}{3c}$.",
      "$\\frac{2}{3c} = \\frac{3}{7} \\implies 9c = 14 \\implies c = \\frac{14}{9}$."
    ],
    "teacherTipEn": "Cauchy's MVT is the foundation for proving L'Hôpital's Rule.",
    "teacherTipAr": "مبرهنة كوشي للقيمة المتوسطة هي الأساس الرياضي الذي يُبنى عليه برهان قاعدة لوبيتال."
  },
  {
    "id": "egbac_ana_ch2_db_med_57",
    "titleEn": "Arc Length of a Planar Curve",
    "titleAr": "طول قوس منحنى مستوٍ",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the arc length of the curve $y = \\frac{2}{3} x^{3/2}$ from $x = 0$ to $x = 3$.",
    "questionAr": "أوجد طول قوس المنحنى $y = \\frac{2}{3} x^{3/2}$ من $x = 0$ إلى $x = 3$.",
    "optionsEn": [
      "$\\frac{14}{3}$",
      "$7$",
      "$\\frac{16}{3}$",
      "$4$"
    ],
    "optionsAr": [
      "$\\frac{14}{3}$",
      "$7$",
      "$\\frac{16}{3}$",
      "$4$"
    ],
    "correctAnswer": "$\\frac{14}{3}$",
    "correctIndex": 0,
    "hintEn": "The arc length formula is $L = \\int_a^b \\sqrt{1 + (y')^2} dx$.",
    "hintAr": "قانون طول القوس هو $L = \\int_a^b \\sqrt{1 + (y')^2} dx$.",
    "stepByStepSolutionEn": [
      "Compute derivative: $y' = \\frac{2}{3} \\cdot \\frac{3}{2} x^{1/2} = \\sqrt{x}$.",
      "Square of derivative: $(y')^2 = x$.",
      "Arc length integral: $L = \\int_0^3 \\sqrt{1 + x}\\,dx$.",
      "Evaluate: $\\left[ \\frac{2}{3}(1 + x)^{3/2} \\right]_0^3 = \\frac{2}{3} \\left(4^{3/2} - 1^{3/2}\\right) = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$."
    ],
    "stepByStepSolutionAr": [
      "المشتقة: $y' = \\sqrt{x}$.",
      "مربع المشتقة: $(y')^2 = x$.",
      "تكامل طول القوس: $L = \\int_0^3 \\sqrt{1 + x}\\,dx$.",
      "الناتج: $\\left[ \\frac{2}{3}(1+x)^{3/2} \\right]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$."
    ],
    "teacherTipEn": "The curve $y = \\frac{2}{3}x^{3/2}$ is known as the semi-cubical parabola (Neile's parabola), historically the first algebraic curve whose arc length was rectified.",
    "teacherTipAr": "قطع نيل المكافئ هو أول منحنى جبري تم حساب طول قوسه تحليلياً في تاريخ الرياضيات."
  },
  {
    "id": "egbac_ana_ch2_db_med_58",
    "titleEn": "Second-Order ODE with Repeated Roots",
    "titleAr": "معادلة تفاضلية من الرتبة الثانية بجذر مكرر",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the general solution to $y'' - 4y' + 4y = 0$.",
    "questionAr": "أوجد الحل العام للمعادلة التفاضلية $y'' - 4y' + 4y = 0$.",
    "optionsEn": [
      "$y = (C_1 + C_2 x) e^{2x}$",
      "$y = C_1 e^{2x} + C_2 e^{-2x}$",
      "$y = C_1 e^{2x}$",
      "$y = (C_1 \\cos 2x + C_2 \\sin 2x)$"
    ],
    "optionsAr": [
      "$y = (C_1 + C_2 x) e^{2x}$",
      "$y = C_1 e^{2x} + C_2 e^{-2x}$",
      "$y = C_1 e^{2x}$",
      "$y = (C_1 \\cos 2x + C_2 \\sin 2x)$"
    ],
    "correctAnswer": "$y = (C_1 + C_2 x) e^{2x}$",
    "correctIndex": 0,
    "hintEn": "Characteristic equation $r^2 - 4r + 4 = 0$ has a repeated root $r = 2$.",
    "hintAr": "المعادلة المميزة $r^2 - 4r + 4 = 0$ لها جذر مكرر $r = 2$.",
    "stepByStepSolutionEn": [
      "Characteristic equation: $r^2 - 4r + 4 = (r - 2)^2 = 0$.",
      "Repeated root: $r = 2$ of multiplicity 2.",
      "The second linearly independent solution is multiplied by $x$: $x e^{2x}$.",
      "General solution: $y = (C_1 + C_2 x) e^{2x}$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة المميزة: $(r - 2)^2 = 0 \\implies r = 2$ (جذر مكرر).",
      "الحل المستقل الثاني يُضرب في $x$: $x e^{2x}$.",
      "الحل العام: $y = (C_1 + C_2 x) e^{2x}$."
    ],
    "teacherTipEn": "When a root has multiplicity $m$, multiply by powers of $x$ up to $x^{m-1}$.",
    "teacherTipAr": "عند تكرار الجذر، نضرب الحلول في قوى $x$ المتتالية للحفاظ على الاستقلال الخطي."
  },
  {
    "id": "egbac_ana_ch2_db_med_59",
    "titleEn": "Integration by Parts of Product Function",
    "titleAr": "التكامل بالتجزيء لحاصل ضرب دالتين",
    "difficulty": "medium",
    "diagramType": "cartesian_plane",
    "questionEn": "Evaluate the indefinite integral: $\\int x e^{3x} dx$.",
    "questionAr": "احسب التكامل غير المحدد: $\\int x e^{3x} dx$.",
    "optionsEn": [
      "$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$",
      "$\\frac{1}{3} x e^{3x} + \\frac{1}{9} e^{3x} + C$",
      "$x e^{3x} - e^{3x} + C$",
      "$\\frac{1}{2} x^2 e^{3x} + C$"
    ],
    "optionsAr": [
      "$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$",
      "$\\frac{1}{3} x e^{3x} + \\frac{1}{9} e^{3x} + C$",
      "$x e^{3x} - e^{3x} + C$",
      "$\\frac{1}{2} x^2 e^{3x} + C$"
    ],
    "correctAnswer": "$\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$",
    "correctIndex": 0,
    "hintEn": "Set $u = x$ and $dv = e^{3x} dx$. Then $\\int u dv = uv - \\int v du$.",
    "hintAr": "ضع $u = x$ و $dv = e^{3x} dx$ ثم طبق قانون التجزيء $\\int u dv = uv - \\int v du$.",
    "stepByStepSolutionEn": [
      "Let $u = x \\implies du = dx$.",
      "Let $dv = e^{3x} dx \\implies v = \\frac{1}{3} e^{3x}$.",
      "Integration by parts formula: $\\int u dv = u v - \\int v du$.",
      "Substitute: $x \\left(\\frac{1}{3} e^{3x}\\right) - \\int \\frac{1}{3} e^{3x} dx = \\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $u = x \\implies du = dx$.",
      "نفرض $dv = e^{3x} dx \\implies v = \\frac{1}{3} e^{3x}$.",
      "قانون التكامل بالتجزيء: $uv - \\int v du$.",
      "الناتج: $\\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} + C$."
    ],
    "teacherTipEn": "Use the acronym LIATE to pick $u$: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.",
    "teacherTipAr": "استخدم قاعدة LIATE لاختيار $u$: اللوغاريتمية، المثلثية العكسية، الجبرية، المثلثية، الأسية."
  }
],
  hots: [
  {
    "id": "egbac_ana_ch2_db_hots_01",
    "titleEn": "Exponential Limit Evaluation 1^infinity #1",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 1",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 2x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 2x)^{2/x}$.",
    "optionsEn": [
      "$e^{4}$",
      "$e^{6}$",
      "$e^{2}$",
      "4"
    ],
    "optionsAr": [
      "$e^{4}$",
      "$e^{6}$",
      "$e^{2}$",
      "4"
    ],
    "correctAnswer": "$e^{4}$",
    "correctIndex": 0,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 2x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 2x) = 2 \\cdot \\frac{\\ln(1 + 2x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 2x)}{x} = 2$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 2 = 4$.",
      "4. Therefore, the limit is $e^{4}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 2x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 2x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 2 = 4$.",
      "٤. إذن النهاية الأصلية هي $e^{4}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_02",
    "titleEn": "Exponential Limit Evaluation 1^infinity #2",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 2",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 3x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 3x)^{2/x}$.",
    "optionsEn": [
      "$e^{8}$",
      "$e^{6}$",
      "$e^{4}$",
      "6"
    ],
    "optionsAr": [
      "$e^{8}$",
      "$e^{6}$",
      "$e^{4}$",
      "6"
    ],
    "correctAnswer": "$e^{6}$",
    "correctIndex": 1,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 3x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 3x) = 2 \\cdot \\frac{\\ln(1 + 3x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 3x)}{x} = 3$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 3 = 6$.",
      "4. Therefore, the limit is $e^{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 3x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 3x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 3 = 6$.",
      "٤. إذن النهاية الأصلية هي $e^{6}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_03",
    "titleEn": "Exponential Limit Evaluation 1^infinity #3",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 3",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 4x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 4x)^{2/x}$.",
    "optionsEn": [
      "$e^{10}$",
      "$e^{6}$",
      "$e^{8}$",
      "8"
    ],
    "optionsAr": [
      "$e^{10}$",
      "$e^{6}$",
      "$e^{8}$",
      "8"
    ],
    "correctAnswer": "$e^{8}$",
    "correctIndex": 2,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 4x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 4x) = 2 \\cdot \\frac{\\ln(1 + 4x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 4x)}{x} = 4$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 4 = 8$.",
      "4. Therefore, the limit is $e^{8}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 4x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 4x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 4 = 8$.",
      "٤. إذن النهاية الأصلية هي $e^{8}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_04",
    "titleEn": "Exponential Limit Evaluation 1^infinity #4",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 4",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 5x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 5x)^{2/x}$.",
    "optionsEn": [
      "$e^{12}$",
      "$e^{8}$",
      "10",
      "$e^{10}$"
    ],
    "optionsAr": [
      "$e^{12}$",
      "$e^{8}$",
      "10",
      "$e^{10}$"
    ],
    "correctAnswer": "$e^{10}$",
    "correctIndex": 3,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 5x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 5x) = 2 \\cdot \\frac{\\ln(1 + 5x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 5x)}{x} = 5$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 5 = 10$.",
      "4. Therefore, the limit is $e^{10}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 5x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 5x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 5 = 10$.",
      "٤. إذن النهاية الأصلية هي $e^{10}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_05",
    "titleEn": "Exponential Limit Evaluation 1^infinity #5",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 5",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 6x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 6x)^{2/x}$.",
    "optionsEn": [
      "$e^{12}$",
      "$e^{14}$",
      "$e^{10}$",
      "12"
    ],
    "optionsAr": [
      "$e^{12}$",
      "$e^{14}$",
      "$e^{10}$",
      "12"
    ],
    "correctAnswer": "$e^{12}$",
    "correctIndex": 0,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 6x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 6x) = 2 \\cdot \\frac{\\ln(1 + 6x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 6x)}{x} = 6$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 6 = 12$.",
      "4. Therefore, the limit is $e^{12}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 6x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 6x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 6 = 12$.",
      "٤. إذن النهاية الأصلية هي $e^{12}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_06",
    "titleEn": "Exponential Limit Evaluation 1^infinity #6",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 6",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 7x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 7x)^{2/x}$.",
    "optionsEn": [
      "$e^{16}$",
      "$e^{14}$",
      "$e^{12}$",
      "14"
    ],
    "optionsAr": [
      "$e^{16}$",
      "$e^{14}$",
      "$e^{12}$",
      "14"
    ],
    "correctAnswer": "$e^{14}$",
    "correctIndex": 1,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 7x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 7x) = 2 \\cdot \\frac{\\ln(1 + 7x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 7x)}{x} = 7$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 7 = 14$.",
      "4. Therefore, the limit is $e^{14}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 7x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 7x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 7 = 14$.",
      "٤. إذن النهاية الأصلية هي $e^{14}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_07",
    "titleEn": "Exponential Limit Evaluation 1^infinity #7",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 7",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 8x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 8x)^{2/x}$.",
    "optionsEn": [
      "$e^{18}$",
      "$e^{14}$",
      "$e^{16}$",
      "16"
    ],
    "optionsAr": [
      "$e^{18}$",
      "$e^{14}$",
      "$e^{16}$",
      "16"
    ],
    "correctAnswer": "$e^{16}$",
    "correctIndex": 2,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 8x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 8x) = 2 \\cdot \\frac{\\ln(1 + 8x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 8x)}{x} = 8$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 8 = 16$.",
      "4. Therefore, the limit is $e^{16}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 8x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 8x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 8 = 16$.",
      "٤. إذن النهاية الأصلية هي $e^{16}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_08",
    "titleEn": "Exponential Limit Evaluation 1^infinity #8",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 8",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 9x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 9x)^{2/x}$.",
    "optionsEn": [
      "$e^{20}$",
      "$e^{16}$",
      "18",
      "$e^{18}$"
    ],
    "optionsAr": [
      "$e^{20}$",
      "$e^{16}$",
      "18",
      "$e^{18}$"
    ],
    "correctAnswer": "$e^{18}$",
    "correctIndex": 3,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 9x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 9x) = 2 \\cdot \\frac{\\ln(1 + 9x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 9x)}{x} = 9$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 9 = 18$.",
      "4. Therefore, the limit is $e^{18}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 9x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 9x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 9 = 18$.",
      "٤. إذن النهاية الأصلية هي $e^{18}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_09",
    "titleEn": "Exponential Limit Evaluation 1^infinity #9",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 9",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 10x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 10x)^{2/x}$.",
    "optionsEn": [
      "$e^{20}$",
      "$e^{22}$",
      "$e^{18}$",
      "20"
    ],
    "optionsAr": [
      "$e^{20}$",
      "$e^{22}$",
      "$e^{18}$",
      "20"
    ],
    "correctAnswer": "$e^{20}$",
    "correctIndex": 0,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 10x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 10x) = 2 \\cdot \\frac{\\ln(1 + 10x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 10x)}{x} = 10$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 10 = 20$.",
      "4. Therefore, the limit is $e^{20}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 10x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 10x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 10 = 20$.",
      "٤. إذن النهاية الأصلية هي $e^{20}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_10",
    "titleEn": "Exponential Limit Evaluation 1^infinity #10",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 10",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 11x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 11x)^{2/x}$.",
    "optionsEn": [
      "$e^{24}$",
      "$e^{22}$",
      "$e^{20}$",
      "22"
    ],
    "optionsAr": [
      "$e^{24}$",
      "$e^{22}$",
      "$e^{20}$",
      "22"
    ],
    "correctAnswer": "$e^{22}$",
    "correctIndex": 1,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 11x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 11x) = 2 \\cdot \\frac{\\ln(1 + 11x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 11x)}{x} = 11$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 11 = 22$.",
      "4. Therefore, the limit is $e^{22}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 11x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 11x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 11 = 22$.",
      "٤. إذن النهاية الأصلية هي $e^{22}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_11",
    "titleEn": "Exponential Limit Evaluation 1^infinity #11",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 11",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 12x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 12x)^{2/x}$.",
    "optionsEn": [
      "$e^{26}$",
      "$e^{22}$",
      "$e^{24}$",
      "24"
    ],
    "optionsAr": [
      "$e^{26}$",
      "$e^{22}$",
      "$e^{24}$",
      "24"
    ],
    "correctAnswer": "$e^{24}$",
    "correctIndex": 2,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 12x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 12x) = 2 \\cdot \\frac{\\ln(1 + 12x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 12x)}{x} = 12$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 12 = 24$.",
      "4. Therefore, the limit is $e^{24}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 12x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 12x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 12 = 24$.",
      "٤. إذن النهاية الأصلية هي $e^{24}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_12",
    "titleEn": "Exponential Limit Evaluation 1^infinity #12",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 12",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 13x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 13x)^{2/x}$.",
    "optionsEn": [
      "$e^{28}$",
      "$e^{24}$",
      "26",
      "$e^{26}$"
    ],
    "optionsAr": [
      "$e^{28}$",
      "$e^{24}$",
      "26",
      "$e^{26}$"
    ],
    "correctAnswer": "$e^{26}$",
    "correctIndex": 3,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 13x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 13x) = 2 \\cdot \\frac{\\ln(1 + 13x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 13x)}{x} = 13$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 13 = 26$.",
      "4. Therefore, the limit is $e^{26}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 13x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 13x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 13 = 26$.",
      "٤. إذن النهاية الأصلية هي $e^{26}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_13",
    "titleEn": "Exponential Limit Evaluation 1^infinity #13",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 13",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 14x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 14x)^{2/x}$.",
    "optionsEn": [
      "$e^{28}$",
      "$e^{30}$",
      "$e^{26}$",
      "28"
    ],
    "optionsAr": [
      "$e^{28}$",
      "$e^{30}$",
      "$e^{26}$",
      "28"
    ],
    "correctAnswer": "$e^{28}$",
    "correctIndex": 0,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 14x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 14x) = 2 \\cdot \\frac{\\ln(1 + 14x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 14x)}{x} = 14$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 14 = 28$.",
      "4. Therefore, the limit is $e^{28}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 14x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 14x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 14 = 28$.",
      "٤. إذن النهاية الأصلية هي $e^{28}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_14",
    "titleEn": "Exponential Limit Evaluation 1^infinity #14",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 14",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 15x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 15x)^{2/x}$.",
    "optionsEn": [
      "$e^{32}$",
      "$e^{30}$",
      "$e^{28}$",
      "30"
    ],
    "optionsAr": [
      "$e^{32}$",
      "$e^{30}$",
      "$e^{28}$",
      "30"
    ],
    "correctAnswer": "$e^{30}$",
    "correctIndex": 1,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 15x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 15x) = 2 \\cdot \\frac{\\ln(1 + 15x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 15x)}{x} = 15$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 15 = 30$.",
      "4. Therefore, the limit is $e^{30}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 15x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 15x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 15 = 30$.",
      "٤. إذن النهاية الأصلية هي $e^{30}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_15",
    "titleEn": "Exponential Limit Evaluation 1^infinity #15",
    "titleAr": "حساب نهاية الأس غير المعين 1^ما لا نهاية رقم 15",
    "difficulty": "hots",
    "questionEn": "Evaluate the indeterminate exponential limit: $\\lim_{x \\to 0} (1 + 16x)^{2/x}$.",
    "questionAr": "احسب النهاية الأسية غير المعينة: $\\lim_{x \\to 0} (1 + 16x)^{2/x}$.",
    "optionsEn": [
      "$e^{34}$",
      "$e^{30}$",
      "$e^{32}$",
      "32"
    ],
    "optionsAr": [
      "$e^{34}$",
      "$e^{30}$",
      "$e^{32}$",
      "32"
    ],
    "correctAnswer": "$e^{32}$",
    "correctIndex": 2,
    "hintEn": "Take the natural logarithm: ln(y) = (b/x) * ln(1 + ax) -> b * a as x -> 0.",
    "hintAr": "بأخذ اللوغاريتم الطبيعي: نهاية ln(y) تساوي حاصل ضرب الثابتين b × a.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Let $y = (1 + 16x)^{2/x}$.",
      "2. $\\ln(y) = \\frac{2}{x} \\ln(1 + 16x) = 2 \\cdot \\frac{\\ln(1 + 16x)}{x}$.",
      "3. Since $\\lim_{x \\to 0} \\frac{\\ln(1 + 16x)}{x} = 16$, we have $\\lim_{x \\to 0} \\ln(y) = 2 \\times 16 = 32$.",
      "4. Therefore, the limit is $e^{32}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة غير معينة من الصورة $1^\\infty$. بفرض $y = (1 + 16x)^{2/x}$.",
      "٢. $\\ln(y) = 2 \\frac{\\ln(1 + 16x)}{x}$.",
      "٣. بأخذ النهاية عندما $x \\to 0$: نجد أن $\\lim \\ln(y) = 2 \\times 16 = 32$.",
      "٤. إذن النهاية الأصلية هي $e^{32}$."
    ],
    "teacherTipEn": "lim (x->0) (1 + ax)^(b/x) = e^(ab) is a universally applicable formula.",
    "teacherTipAr": "القاعدة العامة: نهاية (1 + ax)^(b/x) تساوي e^(ab) دائماً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_16",
    "titleEn": "Trigonometric Indeterminate Power #1",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 1",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(2x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(2x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-4}$",
      "$e^{2}$",
      "$1$",
      "$e^{-2}$"
    ],
    "optionsAr": [
      "$e^{-4}$",
      "$e^{2}$",
      "$1$",
      "$e^{-2}$"
    ],
    "correctAnswer": "$e^{-2}$",
    "correctIndex": 3,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(2x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(2x)) \\approx -\\frac{(2x)^2}{2} = -\\frac{4x^2}{2} = -2x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -2 \\implies y \\to e^{-2}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(2x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(2x)) = -\\frac{4x^2}{2} = -2x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -2$.",
      "٤. إذن النهاية الأصلية هي $e^{-2}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_17",
    "titleEn": "Trigonometric Indeterminate Power #2",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 2",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(4x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(4x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-8}$",
      "$e^{-10}$",
      "$e^{8}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-8}$",
      "$e^{-10}$",
      "$e^{8}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-8}$",
    "correctIndex": 0,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(4x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(4x)) \\approx -\\frac{(4x)^2}{2} = -\\frac{16x^2}{2} = -8x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -8 \\implies y \\to e^{-8}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(4x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(4x)) = -\\frac{16x^2}{2} = -8x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -8$.",
      "٤. إذن النهاية الأصلية هي $e^{-8}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_18",
    "titleEn": "Trigonometric Indeterminate Power #3",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 3",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(6x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(6x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-20}$",
      "$e^{-18}$",
      "$e^{18}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-20}$",
      "$e^{-18}$",
      "$e^{18}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-18}$",
    "correctIndex": 1,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(6x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(6x)) \\approx -\\frac{(6x)^2}{2} = -\\frac{36x^2}{2} = -18x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -18 \\implies y \\to e^{-18}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(6x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(6x)) = -\\frac{36x^2}{2} = -18x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -18$.",
      "٤. إذن النهاية الأصلية هي $e^{-18}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_19",
    "titleEn": "Trigonometric Indeterminate Power #4",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 4",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(8x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(8x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-34}$",
      "$e^{32}$",
      "$e^{-32}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-34}$",
      "$e^{32}$",
      "$e^{-32}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-32}$",
    "correctIndex": 2,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(8x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(8x)) \\approx -\\frac{(8x)^2}{2} = -\\frac{64x^2}{2} = -32x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -32 \\implies y \\to e^{-32}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(8x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(8x)) = -\\frac{64x^2}{2} = -32x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -32$.",
      "٤. إذن النهاية الأصلية هي $e^{-32}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_20",
    "titleEn": "Trigonometric Indeterminate Power #5",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 5",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(10x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(10x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-52}$",
      "$e^{50}$",
      "$1$",
      "$e^{-50}$"
    ],
    "optionsAr": [
      "$e^{-52}$",
      "$e^{50}$",
      "$1$",
      "$e^{-50}$"
    ],
    "correctAnswer": "$e^{-50}$",
    "correctIndex": 3,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(10x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(10x)) \\approx -\\frac{(10x)^2}{2} = -\\frac{100x^2}{2} = -50x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -50 \\implies y \\to e^{-50}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(10x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(10x)) = -\\frac{100x^2}{2} = -50x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -50$.",
      "٤. إذن النهاية الأصلية هي $e^{-50}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_21",
    "titleEn": "Trigonometric Indeterminate Power #6",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 6",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(12x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(12x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-72}$",
      "$e^{-74}$",
      "$e^{72}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-72}$",
      "$e^{-74}$",
      "$e^{72}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-72}$",
    "correctIndex": 0,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(12x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(12x)) \\approx -\\frac{(12x)^2}{2} = -\\frac{144x^2}{2} = -72x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -72 \\implies y \\to e^{-72}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(12x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(12x)) = -\\frac{144x^2}{2} = -72x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -72$.",
      "٤. إذن النهاية الأصلية هي $e^{-72}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_22",
    "titleEn": "Trigonometric Indeterminate Power #7",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 7",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(14x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(14x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-100}$",
      "$e^{-98}$",
      "$e^{98}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-100}$",
      "$e^{-98}$",
      "$e^{98}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-98}$",
    "correctIndex": 1,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(14x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(14x)) \\approx -\\frac{(14x)^2}{2} = -\\frac{196x^2}{2} = -98x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -98 \\implies y \\to e^{-98}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(14x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(14x)) = -\\frac{196x^2}{2} = -98x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -98$.",
      "٤. إذن النهاية الأصلية هي $e^{-98}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_23",
    "titleEn": "Trigonometric Indeterminate Power #8",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 8",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(16x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(16x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-130}$",
      "$e^{128}$",
      "$e^{-128}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-130}$",
      "$e^{128}$",
      "$e^{-128}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-128}$",
    "correctIndex": 2,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(16x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(16x)) \\approx -\\frac{(16x)^2}{2} = -\\frac{256x^2}{2} = -128x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -128 \\implies y \\to e^{-128}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(16x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(16x)) = -\\frac{256x^2}{2} = -128x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -128$.",
      "٤. إذن النهاية الأصلية هي $e^{-128}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_24",
    "titleEn": "Trigonometric Indeterminate Power #9",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 9",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(18x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(18x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-164}$",
      "$e^{162}$",
      "$1$",
      "$e^{-162}$"
    ],
    "optionsAr": [
      "$e^{-164}$",
      "$e^{162}$",
      "$1$",
      "$e^{-162}$"
    ],
    "correctAnswer": "$e^{-162}$",
    "correctIndex": 3,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(18x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(18x)) \\approx -\\frac{(18x)^2}{2} = -\\frac{324x^2}{2} = -162x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -162 \\implies y \\to e^{-162}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(18x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(18x)) = -\\frac{324x^2}{2} = -162x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -162$.",
      "٤. إذن النهاية الأصلية هي $e^{-162}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_25",
    "titleEn": "Trigonometric Indeterminate Power #10",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 10",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(20x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(20x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-200}$",
      "$e^{-202}$",
      "$e^{200}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-200}$",
      "$e^{-202}$",
      "$e^{200}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-200}$",
    "correctIndex": 0,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(20x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(20x)) \\approx -\\frac{(20x)^2}{2} = -\\frac{400x^2}{2} = -200x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -200 \\implies y \\to e^{-200}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(20x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(20x)) = -\\frac{400x^2}{2} = -200x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -200$.",
      "٤. إذن النهاية الأصلية هي $e^{-200}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_26",
    "titleEn": "Trigonometric Indeterminate Power #11",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 11",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(22x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(22x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-244}$",
      "$e^{-242}$",
      "$e^{242}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-244}$",
      "$e^{-242}$",
      "$e^{242}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-242}$",
    "correctIndex": 1,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(22x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(22x)) \\approx -\\frac{(22x)^2}{2} = -\\frac{484x^2}{2} = -242x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -242 \\implies y \\to e^{-242}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(22x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(22x)) = -\\frac{484x^2}{2} = -242x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -242$.",
      "٤. إذن النهاية الأصلية هي $e^{-242}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_27",
    "titleEn": "Trigonometric Indeterminate Power #12",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 12",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(24x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(24x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-290}$",
      "$e^{288}$",
      "$e^{-288}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-290}$",
      "$e^{288}$",
      "$e^{-288}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-288}$",
    "correctIndex": 2,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(24x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(24x)) \\approx -\\frac{(24x)^2}{2} = -\\frac{576x^2}{2} = -288x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -288 \\implies y \\to e^{-288}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(24x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(24x)) = -\\frac{576x^2}{2} = -288x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -288$.",
      "٤. إذن النهاية الأصلية هي $e^{-288}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_28",
    "titleEn": "Trigonometric Indeterminate Power #13",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 13",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(26x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(26x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-340}$",
      "$e^{338}$",
      "$1$",
      "$e^{-338}$"
    ],
    "optionsAr": [
      "$e^{-340}$",
      "$e^{338}$",
      "$1$",
      "$e^{-338}$"
    ],
    "correctAnswer": "$e^{-338}$",
    "correctIndex": 3,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(26x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(26x)) \\approx -\\frac{(26x)^2}{2} = -\\frac{676x^2}{2} = -338x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -338 \\implies y \\to e^{-338}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(26x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(26x)) = -\\frac{676x^2}{2} = -338x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -338$.",
      "٤. إذن النهاية الأصلية هي $e^{-338}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_29",
    "titleEn": "Trigonometric Indeterminate Power #14",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 14",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(28x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(28x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-392}$",
      "$e^{-394}$",
      "$e^{392}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-392}$",
      "$e^{-394}$",
      "$e^{392}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-392}$",
    "correctIndex": 0,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(28x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(28x)) \\approx -\\frac{(28x)^2}{2} = -\\frac{784x^2}{2} = -392x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -392 \\implies y \\to e^{-392}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(28x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(28x)) = -\\frac{784x^2}{2} = -392x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -392$.",
      "٤. إذن النهاية الأصلية هي $e^{-392}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_30",
    "titleEn": "Trigonometric Indeterminate Power #15",
    "titleAr": "نهاية أسية مثلثية غير معينة رقم 15",
    "difficulty": "hots",
    "questionEn": "Evaluate the limit: $\\lim_{x \\to 0} \\left[ \\cos(30x) \\right]^{1/x^2}$.",
    "questionAr": "احسب النهاية: $\\lim_{x \\to 0} \\left[ \\cos(30x) \\right]^{1/x^2}$.",
    "optionsEn": [
      "$e^{-452}$",
      "$e^{-450}$",
      "$e^{450}$",
      "$1$"
    ],
    "optionsAr": [
      "$e^{-452}$",
      "$e^{-450}$",
      "$e^{450}$",
      "$1$"
    ],
    "correctAnswer": "$e^{-450}$",
    "correctIndex": 1,
    "hintEn": "ln(cos(u)) ~ -u^2 / 2 as u -> 0. Here u = 2kx.",
    "hintAr": "التقريب اللوغاريتمي: ln(جتا u) يكافئ تقريبياً -u^2 / 2 عندما تؤول u للصفر.",
    "stepByStepSolutionEn": [
      "1. Form is $1^\\infty$. Take natural log: $\\ln(y) = \\frac{\\ln(\\cos(30x))}{x^2}$.",
      "2. Using Maclaurin series: $\\cos(u) = 1 - \\frac{u^2}{2} + O(u^4)$, and $\\ln(1 - z) \\approx -z$.",
      "3. $\\ln(\\cos(30x)) \\approx -\\frac{(30x)^2}{2} = -\\frac{900x^2}{2} = -450x^2$.",
      "4. Dividing by $x^2$: $\\lim_{x \\to 0} \\ln(y) = -450 \\implies y \\to e^{-450}$."
    ],
    "stepByStepSolutionAr": [
      "١. الحالة من الصورة $1^\\infty$. بأخذ اللوغاريتم: $\\ln(y) = \\frac{\\ln(\\cos(30x))}{x^2}$.",
      "٢. بالتقريب المتسلسلي: $\\ln(\\cos(30x)) = -\\frac{900x^2}{2} = -450x^2$.",
      "٣. بالقسمة على $x^2$: ينتج $\\lim \\ln(y) = -450$.",
      "٤. إذن النهاية الأصلية هي $e^{-450}$."
    ],
    "teacherTipEn": "cos(u)^(1/u^2) -> e^(-1/2) is one of the most elegant classical limits in real analysis.",
    "teacherTipAr": "نهاية جتا(u) مرفوعة للأس 1/u^2 تؤول إلى e^(-1/2)، وهي من أروع نهايات التحليل الرياضي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_31",
    "titleEn": "Optimization of Inscribed Rectangle Area #1",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 1",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 3 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 3 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 8$",
      "$A_{\\max} = 2$",
      "$A_{\\max} = 4$",
      "$A_{\\max} = 6$"
    ],
    "optionsAr": [
      "$A_{\\max} = 8$",
      "$A_{\\max} = 2$",
      "$A_{\\max} = 4$",
      "$A_{\\max} = 6$"
    ],
    "correctAnswer": "$A_{\\max} = 4$",
    "correctIndex": 2,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 3 - x^2$.",
      "2. Area function: $A(x) = 2x(3 - x^2) = 6x - 2x^3$.",
      "3. Derivative: $A'(x) = 6 - 6x^2 = 0 \\implies 6x^2 = 6 \\implies x^2 = 1 \\implies x = 1$.",
      "4. Maximum area: $A(1) = 2(1)(3 - 1) = 2(1)(2) = 4$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 3 - x^2$.",
      "٢. دالة المساحة: $A(x) = 6x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 6 \\implies x = 1$.",
      "٤. المساحة العظمى: $A(1) = 2(1)(2) = 4$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_32",
    "titleEn": "Optimization of Inscribed Rectangle Area #2",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 2",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 12 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 12 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 36$",
      "$A_{\\max} = 16$",
      "$A_{\\max} = 48$",
      "$A_{\\max} = 32$"
    ],
    "optionsAr": [
      "$A_{\\max} = 36$",
      "$A_{\\max} = 16$",
      "$A_{\\max} = 48$",
      "$A_{\\max} = 32$"
    ],
    "correctAnswer": "$A_{\\max} = 32$",
    "correctIndex": 3,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 12 - x^2$.",
      "2. Area function: $A(x) = 2x(12 - x^2) = 24x - 2x^3$.",
      "3. Derivative: $A'(x) = 24 - 6x^2 = 0 \\implies 6x^2 = 24 \\implies x^2 = 4 \\implies x = 2$.",
      "4. Maximum area: $A(2) = 2(2)(12 - 4) = 2(2)(8) = 32$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 12 - x^2$.",
      "٢. دالة المساحة: $A(x) = 24x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 24 \\implies x = 2$.",
      "٤. المساحة العظمى: $A(2) = 2(2)(8) = 32$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_33",
    "titleEn": "Optimization of Inscribed Rectangle Area #3",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 3",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 27 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 27 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 108$",
      "$A_{\\max} = 112$",
      "$A_{\\max} = 54$",
      "$A_{\\max} = 162$"
    ],
    "optionsAr": [
      "$A_{\\max} = 108$",
      "$A_{\\max} = 112$",
      "$A_{\\max} = 54$",
      "$A_{\\max} = 162$"
    ],
    "correctAnswer": "$A_{\\max} = 108$",
    "correctIndex": 0,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 27 - x^2$.",
      "2. Area function: $A(x) = 2x(27 - x^2) = 54x - 2x^3$.",
      "3. Derivative: $A'(x) = 54 - 6x^2 = 0 \\implies 6x^2 = 54 \\implies x^2 = 9 \\implies x = 3$.",
      "4. Maximum area: $A(3) = 2(3)(27 - 9) = 2(3)(18) = 108$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 27 - x^2$.",
      "٢. دالة المساحة: $A(x) = 54x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 54 \\implies x = 3$.",
      "٤. المساحة العظمى: $A(3) = 2(3)(18) = 108$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_34",
    "titleEn": "Optimization of Inscribed Rectangle Area #4",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 4",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 48 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 48 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 260$",
      "$A_{\\max} = 256$",
      "$A_{\\max} = 128$",
      "$A_{\\max} = 384$"
    ],
    "optionsAr": [
      "$A_{\\max} = 260$",
      "$A_{\\max} = 256$",
      "$A_{\\max} = 128$",
      "$A_{\\max} = 384$"
    ],
    "correctAnswer": "$A_{\\max} = 256$",
    "correctIndex": 1,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 48 - x^2$.",
      "2. Area function: $A(x) = 2x(48 - x^2) = 96x - 2x^3$.",
      "3. Derivative: $A'(x) = 96 - 6x^2 = 0 \\implies 6x^2 = 96 \\implies x^2 = 16 \\implies x = 4$.",
      "4. Maximum area: $A(4) = 2(4)(48 - 16) = 2(4)(32) = 256$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 48 - x^2$.",
      "٢. دالة المساحة: $A(x) = 96x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 96 \\implies x = 4$.",
      "٤. المساحة العظمى: $A(4) = 2(4)(32) = 256$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_35",
    "titleEn": "Optimization of Inscribed Rectangle Area #5",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 5",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 75 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 75 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 504$",
      "$A_{\\max} = 250$",
      "$A_{\\max} = 500$",
      "$A_{\\max} = 750$"
    ],
    "optionsAr": [
      "$A_{\\max} = 504$",
      "$A_{\\max} = 250$",
      "$A_{\\max} = 500$",
      "$A_{\\max} = 750$"
    ],
    "correctAnswer": "$A_{\\max} = 500$",
    "correctIndex": 2,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 75 - x^2$.",
      "2. Area function: $A(x) = 2x(75 - x^2) = 150x - 2x^3$.",
      "3. Derivative: $A'(x) = 150 - 6x^2 = 0 \\implies 6x^2 = 150 \\implies x^2 = 25 \\implies x = 5$.",
      "4. Maximum area: $A(5) = 2(5)(75 - 25) = 2(5)(50) = 500$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 75 - x^2$.",
      "٢. دالة المساحة: $A(x) = 150x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 150 \\implies x = 5$.",
      "٤. المساحة العظمى: $A(5) = 2(5)(50) = 500$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_36",
    "titleEn": "Optimization of Inscribed Rectangle Area #6",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 6",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 108 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 108 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 868$",
      "$A_{\\max} = 432$",
      "$A_{\\max} = 1296$",
      "$A_{\\max} = 864$"
    ],
    "optionsAr": [
      "$A_{\\max} = 868$",
      "$A_{\\max} = 432$",
      "$A_{\\max} = 1296$",
      "$A_{\\max} = 864$"
    ],
    "correctAnswer": "$A_{\\max} = 864$",
    "correctIndex": 3,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 108 - x^2$.",
      "2. Area function: $A(x) = 2x(108 - x^2) = 216x - 2x^3$.",
      "3. Derivative: $A'(x) = 216 - 6x^2 = 0 \\implies 6x^2 = 216 \\implies x^2 = 36 \\implies x = 6$.",
      "4. Maximum area: $A(6) = 2(6)(108 - 36) = 2(6)(72) = 864$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 108 - x^2$.",
      "٢. دالة المساحة: $A(x) = 216x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 216 \\implies x = 6$.",
      "٤. المساحة العظمى: $A(6) = 2(6)(72) = 864$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_37",
    "titleEn": "Optimization of Inscribed Rectangle Area #7",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 7",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 147 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 147 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 1372$",
      "$A_{\\max} = 1376$",
      "$A_{\\max} = 686$",
      "$A_{\\max} = 2058$"
    ],
    "optionsAr": [
      "$A_{\\max} = 1372$",
      "$A_{\\max} = 1376$",
      "$A_{\\max} = 686$",
      "$A_{\\max} = 2058$"
    ],
    "correctAnswer": "$A_{\\max} = 1372$",
    "correctIndex": 0,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 147 - x^2$.",
      "2. Area function: $A(x) = 2x(147 - x^2) = 294x - 2x^3$.",
      "3. Derivative: $A'(x) = 294 - 6x^2 = 0 \\implies 6x^2 = 294 \\implies x^2 = 49 \\implies x = 7$.",
      "4. Maximum area: $A(7) = 2(7)(147 - 49) = 2(7)(98) = 1372$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 147 - x^2$.",
      "٢. دالة المساحة: $A(x) = 294x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 294 \\implies x = 7$.",
      "٤. المساحة العظمى: $A(7) = 2(7)(98) = 1372$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_38",
    "titleEn": "Optimization of Inscribed Rectangle Area #8",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 8",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 192 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 192 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 2052$",
      "$A_{\\max} = 2048$",
      "$A_{\\max} = 1024$",
      "$A_{\\max} = 3072$"
    ],
    "optionsAr": [
      "$A_{\\max} = 2052$",
      "$A_{\\max} = 2048$",
      "$A_{\\max} = 1024$",
      "$A_{\\max} = 3072$"
    ],
    "correctAnswer": "$A_{\\max} = 2048$",
    "correctIndex": 1,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 192 - x^2$.",
      "2. Area function: $A(x) = 2x(192 - x^2) = 384x - 2x^3$.",
      "3. Derivative: $A'(x) = 384 - 6x^2 = 0 \\implies 6x^2 = 384 \\implies x^2 = 64 \\implies x = 8$.",
      "4. Maximum area: $A(8) = 2(8)(192 - 64) = 2(8)(128) = 2048$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 192 - x^2$.",
      "٢. دالة المساحة: $A(x) = 384x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 384 \\implies x = 8$.",
      "٤. المساحة العظمى: $A(8) = 2(8)(128) = 2048$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_39",
    "titleEn": "Optimization of Inscribed Rectangle Area #9",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 9",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 243 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 243 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 2920$",
      "$A_{\\max} = 1458$",
      "$A_{\\max} = 2916$",
      "$A_{\\max} = 4374$"
    ],
    "optionsAr": [
      "$A_{\\max} = 2920$",
      "$A_{\\max} = 1458$",
      "$A_{\\max} = 2916$",
      "$A_{\\max} = 4374$"
    ],
    "correctAnswer": "$A_{\\max} = 2916$",
    "correctIndex": 2,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 243 - x^2$.",
      "2. Area function: $A(x) = 2x(243 - x^2) = 486x - 2x^3$.",
      "3. Derivative: $A'(x) = 486 - 6x^2 = 0 \\implies 6x^2 = 486 \\implies x^2 = 81 \\implies x = 9$.",
      "4. Maximum area: $A(9) = 2(9)(243 - 81) = 2(9)(162) = 2916$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 243 - x^2$.",
      "٢. دالة المساحة: $A(x) = 486x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 486 \\implies x = 9$.",
      "٤. المساحة العظمى: $A(9) = 2(9)(162) = 2916$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_40",
    "titleEn": "Optimization of Inscribed Rectangle Area #10",
    "titleAr": "أكبر مساحة لمستطيل مرسوم داخل قطع مكافئ رقم 10",
    "difficulty": "hots",
    "questionEn": "Find the maximum area of a rectangle with base on the $x$-axis and upper vertices on the parabola $y = 300 - x^2$.",
    "questionAr": "أوجد أكبر مساحة لمستطيل قاعدته على محور السينات ورأساه العلويان يقعان على القطع المكافئ $y = 300 - x^2$.",
    "optionsEn": [
      "$A_{\\max} = 4004$",
      "$A_{\\max} = 2000$",
      "$A_{\\max} = 6000$",
      "$A_{\\max} = 4000$"
    ],
    "optionsAr": [
      "$A_{\\max} = 4004$",
      "$A_{\\max} = 2000$",
      "$A_{\\max} = 6000$",
      "$A_{\\max} = 4000$"
    ],
    "correctAnswer": "$A_{\\max} = 4000$",
    "correctIndex": 3,
    "hintEn": "Area A(x) = 2x * (3k^2 - x^2). Differentiate and set A'(x) = 0.",
    "hintAr": "دالة المساحة A(x) = 2x(3k^2 - x^2). اشتق وساوِ بالصفر لإيجاد x.",
    "stepByStepSolutionEn": [
      "1. The rectangle has width $2x$ and height $y = 300 - x^2$.",
      "2. Area function: $A(x) = 2x(300 - x^2) = 600x - 2x^3$.",
      "3. Derivative: $A'(x) = 600 - 6x^2 = 0 \\implies 6x^2 = 600 \\implies x^2 = 100 \\implies x = 10$.",
      "4. Maximum area: $A(10) = 2(10)(300 - 100) = 2(10)(200) = 4000$ square units."
    ],
    "stepByStepSolutionAr": [
      "١. أبعاد المستطيل: العرض ٢س، والارتفاع $y = 300 - x^2$.",
      "٢. دالة المساحة: $A(x) = 600x - 2x^3$.",
      "٣. المشتقة: $A'(x) = 0 \\implies 6x^2 = 600 \\implies x = 10$.",
      "٤. المساحة العظمى: $A(10) = 2(10)(200) = 4000$ وحدة مربعة."
    ],
    "teacherTipEn": "For y = H - x^2, the optimal x-coordinate is always sqrt(H / 3).",
    "teacherTipAr": "لقطع مكافئ y = H - x^2، يكون الإحداثي السيني الأمثل دائماً هو جذر(H / 3)."
  },
  {
    "id": "egbac_ana_ch2_db_hots_41",
    "titleEn": "Exponential Lagrange Remainder Bound #1",
    "titleAr": "تقدير خطأ باقي لاجرانج للدالة الأسية رقم 1",
    "difficulty": "hots",
    "questionEn": "When approximating $e^{0.5}$ by its 2nd-degree Taylor polynomial $P_2(0.5) = 1 + 0.5 + \\frac{0.5^2}{2} = 1.625$ centered at $0$, what is the strict upper bound on the remainder $|R_2(0.5)|$ using the bound $e^{0.5} < 2$?",
    "questionAr": "عند تقريب $e^{0.5}$ بكثيرة حدود تايلور من الدرجة الثانية $P_2(0.5) = 1 + 0.5 + \\frac{0.5^2}{2} = 1.625$ حول $0$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_2(0.5)|$ باستخدام التقدير $e^{0.5} < 2$؟",
    "optionsEn": [
      "$|R_2(0.5)| < \\frac{1}{24}$",
      "$|R_2(0.5)| < \\frac{1}{12}$",
      "$|R_2(0.5)| < \\frac{1}{48}$",
      "$|R_2(0.5)| < \\frac{1}{6}$"
    ],
    "optionsAr": [
      "$|R_2(0.5)| < \\frac{1}{24}$",
      "$|R_2(0.5)| < \\frac{1}{12}$",
      "$|R_2(0.5)| < \\frac{1}{48}$",
      "$|R_2(0.5)| < \\frac{1}{6}$"
    ],
    "correctAnswer": "$|R_2(0.5)| < \\frac{1}{24}$",
    "correctIndex": 0,
    "hintEn": "R_2(x) = e^xi / 3! * x^3 for 0 < xi < 0.5. With e^xi < 2 and x = 1/2, calculate the bound.",
    "hintAr": "باقي لاجرانج R_2(x) = e^xi / 3! * x^3 حيث 0 < xi < 0.5. بما أن e^xi < 2 و x = 1/2، احسب الحد.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem: $R_2(0.5) = \\frac{f'''(\\xi)}{3!} (0.5)^3 = \\frac{e^\\xi}{6} \\left(\\frac{1}{2}\\right)^3 = \\frac{e^\\xi}{48}$ where $0 < \\xi < 0.5$.",
      "2. Since $\\xi < 0.5$, $e^\\xi < e^{0.5} < 2$.",
      "3. Therefore $|R_2(0.5)| < \\frac{2}{48} = \\frac{1}{24}$."
    ],
    "stepByStepSolutionAr": [
      "١. بنظرية تايلور: $R_2(0.5) = \\frac{f'''(\\xi)}{6} (0.5)^3 = \\frac{e^\\xi}{48}$ حيث $0 < \\xi < 0.5$.",
      "٢. بما أن $\\xi < 0.5$، فإن $e^\\xi < 2$.",
      "٣. إذن $|R_2(0.5)| < \\frac{2}{48} = \\frac{1}{24}$."
    ],
    "teacherTipEn": "Lagrange's form of the remainder gives an exact formula for the truncation error.",
    "teacherTipAr": "صيغة لاجرانج للباقي تعطي تعبيراً دقيقاً لخطأ قطع متسلسلة تايلور."
  },
  {
    "id": "egbac_ana_ch2_db_hots_42",
    "titleEn": "Sine Maclaurin Polynomial Remainder Bound #2",
    "titleAr": "تقدير خطأ قطع متسلسلة ماكلوران لجيب الزاوية رقم 2",
    "difficulty": "hots",
    "questionEn": "When approximating $\\sin(0.1)$ by its 3rd-degree Maclaurin polynomial $P_3(0.1) = 0.1 - \\frac{0.1^3}{6}$, what is the strict upper bound on $|R_4(0.1)|$ given $|sin^{(5)}(\\xi)| \\le 1$?",
    "questionAr": "عند تقريب $\\sin(0.1)$ بكثيرة حدود ماكلوران من الدرجة الثالثة $P_3(0.1) = 0.1 - \\frac{0.1^3}{6}$، ما هو الحد الأعلى الدقيق للباقي $|R_4(0.1)|$ علماً بأن $|sin^{(5)}(\\xi)| \\le 1$؟",
    "optionsEn": [
      "$|R_4(0.1)| \\le \\frac{10^{-5}}{24}$",
      "$|R_4(0.1)| \\le \\frac{10^{-5}}{120}$",
      "$|R_4(0.1)| \\le \\frac{10^{-4}}{120}$",
      "$|R_4(0.1)| \\le \\frac{10^{-3}}{6}$"
    ],
    "optionsAr": [
      "$|R_4(0.1)| \\le \\frac{10^{-5}}{24}$",
      "$|R_4(0.1)| \\le \\frac{10^{-5}}{120}$",
      "$|R_4(0.1)| \\le \\frac{10^{-4}}{120}$",
      "$|R_4(0.1)| \\le \\frac{10^{-3}}{6}$"
    ],
    "correctAnswer": "$|R_4(0.1)| \\le \\frac{10^{-5}}{120}$",
    "correctIndex": 1,
    "hintEn": "Since the 4th-degree term vanishes for sine, P_3(x) = P_4(x), so the error is of order 5: R_4(x) = cos(xi) / 5! * x^5.",
    "hintAr": "بما أن معامل x^4 يساوي صفراً في دالة الجيب، فإن P_3 = P_4 ويكون الباقي من الرتبة الخامسة مقسوماً على 5!.",
    "stepByStepSolutionEn": [
      "1. For $f(x) = \\sin x$, $f^{(4)}(0) = 0$, so $P_3(x) = P_4(x)$.",
      "2. The Lagrange remainder of order 4 is $R_4(x) = \\frac{f^{(5)}(\\xi)}{5!} x^5 = \\frac{\\cos\\xi}{120} x^5$.",
      "3. For $x = 0.1 = 10^{-1}$ and $|cos\\xi| \\le 1$: $|R_4(0.1)| \\le \\frac{10^{-5}}{120}$."
    ],
    "stepByStepSolutionAr": [
      "١. لدالة الجيب، المشتقة الرابعة عند الصفر تساوي صفراً، وبالتالي $P_3(x) = P_4(x)$.",
      "٢. باقي لاجرانج من الرتبة 4 هو $R_4(x) = \\frac{\\cos\\xi}{5!} x^5 = \\frac{\\cos\\xi}{120} x^5$.",
      "٣. عند $x = 0.1$: نجد $|R_4(0.1)| \\le \\frac{(0.1)^5}{120} = \\frac{10^{-5}}{120}$."
    ],
    "teacherTipEn": "Taking advantage of vanishing terms increases the order of accuracy without extra work.",
    "teacherTipAr": "الاستفادة من الحدود الصفرية يرفع رتبة دقة التقريب دون بذل مجهود حسابي إضافي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_43",
    "titleEn": "Cosine Taylor Error Bound on Interval #3",
    "titleAr": "تقدير خطأ تقريب جيب التمام على فترة رقم 3",
    "difficulty": "hots",
    "questionEn": "For $f(x) = \\cos x$ on the interval $[0, 1]$, using the quadratic approximation $P_2(x) = 1 - \\frac{x^2}{2}$, what is the maximum truncation error guaranteed by Lagrange's remainder?",
    "questionAr": "للدالة $f(x) = \\cos x$ على الفترة $[0, 1]$ باستخدام التقريب التربيعي $P_2(x) = 1 - \\frac{x^2}{2}$، ما هو أقصى خطأ قطع تضمنه نظرية باقي لاجرانج؟",
    "optionsEn": [
      "$|R_2(x)| \\le \\frac{1}{2}$",
      "$|R_2(x)| \\le \\frac{1}{24}$",
      "$|R_2(x)| \\le \\frac{1}{6}$",
      "$|R_2(x)| \\le \\frac{1}{12}$"
    ],
    "optionsAr": [
      "$|R_2(x)| \\le \\frac{1}{2}$",
      "$|R_2(x)| \\le \\frac{1}{24}$",
      "$|R_2(x)| \\le \\frac{1}{6}$",
      "$|R_2(x)| \\le \\frac{1}{12}$"
    ],
    "correctAnswer": "$|R_2(x)| \\le \\frac{1}{6}$",
    "correctIndex": 2,
    "hintEn": "|R_2(x)| <= max |f'''(xi)| / 3! * |x|^3 where f'''(x) = sin x.",
    "hintAr": "أقصى خطأ للباقي من الرتبة الثانية هو أقصى قيمة للمشتقة الثالثة مقسومة على 3! مضروبة في |x|^3.",
    "stepByStepSolutionEn": [
      "1. Third derivative: $f'''(x) = \\sin x$.",
      "2. On $[0, 1]$, $\\max |\\sin\\xi| \\le 1$ and $\\max |x|^3 = 1^3 = 1$.",
      "3. Remainder bound: $|R_2(x)| \\le \\frac{1}{3!} (1) = \\frac{1}{6}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثالثة: $f'''(x) = \\sin x$.",
      "٢. على الفترة $[0, 1]$، نجد أن $|sin\\xi| \\le 1$ و $|x|^3 \\le 1$.",
      "٣. إذن الحد الأعلى للخطأ هو $|R_2(x)| \\le \\frac{1}{3!} = \\frac{1}{6}$."
    ],
    "teacherTipEn": "Bounding the remainder uniformly on an interval is fundamental for numerical analysis.",
    "teacherTipAr": "تقدير الباقي بانتظام على فترة كاملة هو ركيزة أساسية في التحليل العددي."
  },
  {
    "id": "egbac_ana_ch2_db_hots_44",
    "titleEn": "Logarithmic Taylor Remainder Bound #4",
    "titleAr": "تقدير خطأ تقريب الدالة اللوغاريتمية رقم 4",
    "difficulty": "hots",
    "questionEn": "When approximating $\\ln(1.2)$ using the 2nd-degree Taylor polynomial $P_2(0.2) = 0.2 - \\frac{0.04}{2} = 0.18$ of $f(x) = \\ln(1+x)$, what is the strict upper bound on the Lagrange remainder $|R_2(0.2)|$?",
    "questionAr": "عند تقريب $\\ln(1.2)$ باستخدام كثيرة حدود تايلور من الدرجة الثانية $P_2(0.2) = 0.2 - \\frac{0.04}{2} = 0.18$ للدالة $f(x) = \\ln(1+x)$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_2(0.2)|$؟",
    "optionsEn": [
      "$|R_2(0.2)| < \\frac{1}{125}$",
      "$|R_2(0.2)| < \\frac{1}{750}$",
      "$|R_2(0.2)| < \\frac{1}{50}$",
      "$|R_2(0.2)| < \\frac{1}{375}$"
    ],
    "optionsAr": [
      "$|R_2(0.2)| < \\frac{1}{125}$",
      "$|R_2(0.2)| < \\frac{1}{750}$",
      "$|R_2(0.2)| < \\frac{1}{50}$",
      "$|R_2(0.2)| < \\frac{1}{375}$"
    ],
    "correctAnswer": "$|R_2(0.2)| < \\frac{1}{375}$",
    "correctIndex": 3,
    "hintEn": "f'''(x) = 2/(1+x)^3. For xi in (0, 0.2), 1/(1+xi)^3 < 1.",
    "hintAr": "المشتقة الثالثة هي 2/(1+س)^3، وعلى الفترة (0، 0.2) تكون 1/(1+xi)^3 أقل من 1.",
    "stepByStepSolutionEn": [
      "1. Compute derivatives: $f'(x) = \\frac{1}{1+x}$, $f''(x) = -\\frac{1}{(1+x)^2}$, $f'''(x) = \\frac{2}{(1+x)^3}$.",
      "2. Lagrange remainder: $R_2(0.2) = \\frac{f'''(\\xi)}{3!} (0.2)^3 = \\frac{2}{6(1+\\xi)^3} (0.008) = \\frac{0.008}{3(1+\\xi)^3}$.",
      "3. Since $\\xi > 0$, $(1+\\xi)^3 > 1$, so $|R_2(0.2)| < \\frac{0.008}{3} = \\frac{8}{3000} = \\frac{1}{375}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقات: $f'(x) = (1+x)^{-1}$، $f''(x) = -(1+x)^{-2}$، $f'''(x) = 2(1+x)^{-3}$.",
      "٢. باقي لاجرانج: $R_2(0.2) = \\frac{2}{6(1+\\xi)^3} (0.2)^3 = \\frac{0.008}{3(1+\\xi)^3}$.",
      "٣. بما أن $\\xi > 0$، فإن $(1+\\xi)^3 > 1$، وبالتالي $|R_2(0.2)| < \\frac{0.008}{3} = \\frac{1}{375}$."
    ],
    "teacherTipEn": "Since 1/(1+xi)^3 decreases as xi increases, the maximum occurs at the left endpoint xi = 0.",
    "teacherTipAr": "بما أن الدالة متناقصة، فإن القيمة العظمى تقع عند الطرف الأيسر xi = 0."
  },
  {
    "id": "egbac_ana_ch2_db_hots_45",
    "titleEn": "Square Root Linear Approximation Error Bound #5",
    "titleAr": "تقدير خطأ التقريب الخطي للجذر التربيعي رقم 5",
    "difficulty": "hots",
    "questionEn": "Approximate $\\sqrt{1.2}$ using the linear Taylor polynomial $P_1(0.2) = 1 + \\frac{0.2}{2} = 1.1$ of $f(x) = \\sqrt{1+x}$. What is the maximum truncation error $|R_1(0.2)|$ given $|f''(\\xi)| \\le \\frac{1}{4}$ for $\\xi \\in (0, 0.2)$?",
    "questionAr": "عند تقريب $\\sqrt{1.2}$ بالتقريب الخطي لتايلور $P_1(0.2) = 1 + \\frac{0.2}{2} = 1.1$ للدالة $f(x) = \\sqrt{1+x}$، ما هو الحد الأقصى لخطأ القطع $|R_1(0.2)|$ علماً بأن $|f''(\\xi)| \\le \\frac{1}{4}$؟",
    "optionsEn": [
      "$|R_1(0.2)| \\le \\frac{1}{200}$",
      "$|R_1(0.2)| \\le \\frac{1}{100}$",
      "$|R_1(0.2)| \\le \\frac{1}{400}$",
      "$|R_1(0.2)| \\le \\frac{1}{50}$"
    ],
    "optionsAr": [
      "$|R_1(0.2)| \\le \\frac{1}{200}$",
      "$|R_1(0.2)| \\le \\frac{1}{100}$",
      "$|R_1(0.2)| \\le \\frac{1}{400}$",
      "$|R_1(0.2)| \\le \\frac{1}{50}$"
    ],
    "correctAnswer": "$|R_1(0.2)| \\le \\frac{1}{200}$",
    "correctIndex": 0,
    "hintEn": "R_1(x) = f''(xi) / 2! * x^2. Bound |f''(xi)| by 1/4 and set x = 0.2.",
    "hintAr": "باقي الدرجة الأولى: R_1(x) = f''(xi) / 2 * x^2. استبدل المشتقة الثانية بـ 1/4 و x بـ 0.2.",
    "stepByStepSolutionEn": [
      "1. Second derivative: $f''(x) = -\\frac{1}{4(1+x)^{3/2}}$.",
      "2. For $\\xi > 0$: $|f''(\\xi)| < \\frac{1}{4}$.",
      "3. Remainder: $|R_1(0.2)| \\le \\frac{1/4}{2} (0.2)^2 = \\frac{1}{8} (0.04) = 0.005 = \\frac{1}{200}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثانية: $f''(x) = -\\frac{1}{4(1+x)^{3/2}}$.",
      "٢. عند $\\xi > 0$: يكون $|f''(\\xi)| < \\frac{1}{4}$.",
      "٣. الباقي: $|R_1(0.2)| \\le \\frac{1}{8} (0.04) = 0.005 = \\frac{1}{200}$."
    ],
    "teacherTipEn": "Linear approximation sqrt(1+x) approx 1 + x/2 is widely used in physics for small strains and perturbations.",
    "teacherTipAr": "التقريب الخطي للجذر التربيعي مستخدم بكثرة في الفيزياء الهندسية لحساب الانفعالات الصغيرة."
  },
  {
    "id": "egbac_ana_ch2_db_hots_46",
    "titleEn": "Rational Function Remainder Form #6",
    "titleAr": "صيغة باقي لاجرانج لدالة كسرية رقم 6",
    "difficulty": "hots",
    "questionEn": "For $f(x) = \\frac{1}{1-x}$ expanded about $x=0$, what is the exact expression for the Lagrange remainder $R_2(0.1)$ in terms of $\\xi \\in (0, 0.1)$?",
    "questionAr": "للدالة $f(x) = \\frac{1}{1-x}$ المفكوكة حول $x=0$، ما هو التعبير الدقيق لباقي لاجرانج $R_2(0.1)$ بدلالة $\\xi \\in (0, 0.1)$؟",
    "optionsEn": [
      "$R_2(0.1) = \\frac{6 \\times 10^{-3}}{(1-\\xi)^3}$",
      "$R_2(0.1) = \\frac{10^{-3}}{(1-\\xi)^4}$",
      "$R_2(0.1) = \\frac{10^{-2}}{(1-\\xi)^4}$",
      "$R_2(0.1) = \\frac{10^{-3}}{6(1-\\xi)^4}$"
    ],
    "optionsAr": [
      "$R_2(0.1) = \\frac{6 \\times 10^{-3}}{(1-\\xi)^3}$",
      "$R_2(0.1) = \\frac{10^{-3}}{(1-\\xi)^4}$",
      "$R_2(0.1) = \\frac{10^{-2}}{(1-\\xi)^4}$",
      "$R_2(0.1) = \\frac{10^{-3}}{6(1-\\xi)^4}$"
    ],
    "correctAnswer": "$R_2(0.1) = \\frac{10^{-3}}{(1-\\xi)^4}$",
    "correctIndex": 1,
    "hintEn": "f'''(x) = 6/(1-x)^4. Then R_2(x) = f'''(xi) / 3! * x^3. Notice 6 / 3! = 1.",
    "hintAr": "المشتقة الثالثة هي 6/(1-س)^4، وصيغة الباقي تحوي 6/3! = 1 مضروبة في (0.1)^3.",
    "stepByStepSolutionEn": [
      "1. Third derivative: $f'(x) = (1-x)^{-2}$, $f''(x) = 2(1-x)^{-3}$, $f'''(x) = 6(1-x)^{-4}$.",
      "2. Lagrange remainder: $R_2(x) = \\frac{f'''(\\xi)}{3!} x^3 = \\frac{6(1-\\xi)^{-4}}{6} x^3 = \\frac{x^3}{(1-\\xi)^4}$.",
      "3. For $x = 0.1$: $R_2(0.1) = \\frac{(0.1)^3}{(1-\\xi)^4} = \\frac{10^{-3}}{(1-\\xi)^4}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثالثة: $f'''(x) = 6(1-x)^{-4}$.",
      "٢. صيغة الباقي: $R_2(x) = \\frac{6(1-\\xi)^{-4}}{6} x^3 = \\frac{x^3}{(1-\\xi)^4}$.",
      "٣. بالتعويض بـ $x = 0.1$: نجد $R_2(0.1) = \\frac{10^{-3}}{(1-\\xi)^4}$."
    ],
    "teacherTipEn": "The 3! in the denominator exactly cancels the factor 6 from repeated differentiation.",
    "teacherTipAr": "يختصر مضروب العدد 3! في المقام تماماً مع المعامل 6 الناتج عن الاشتقاق المتكرر."
  },
  {
    "id": "egbac_ana_ch2_db_hots_47",
    "titleEn": "Minimum Taylor Degree for Specified Precision #7",
    "titleAr": "أقل درجة لكثيرة حدود تايلور لتحقيق دقة محددة رقم 7",
    "difficulty": "hots",
    "questionEn": "What is the minimum degree $n$ of the Maclaurin polynomial $P_n(x)$ of $e^x$ required to approximate $e^1$ with error $|R_n(1)| < 0.01$, using the bound $e < 3$?",
    "questionAr": "ما هي أقل درجة $n$ لكثيرة حدود ماكلوران $P_n(x)$ للدالة $e^x$ تكفي لتقريب العدد $e^1$ بخطأ $|R_n(1)| < 0.01$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$n = 4$",
      "$n = 6$",
      "$n = 5$",
      "$n = 3$"
    ],
    "optionsAr": [
      "$n = 4$",
      "$n = 6$",
      "$n = 5$",
      "$n = 3$"
    ],
    "correctAnswer": "$n = 5$",
    "correctIndex": 2,
    "hintEn": "Set 3 / (n+1)! < 0.01, which requires (n+1)! > 300. Check factorials.",
    "hintAr": "ضع 3 / (n+1)! < 0.01، مما يقتضي (n+1)! > 300. تحقق من قيم المضروب.",
    "stepByStepSolutionEn": [
      "1. Error bound formula: $|R_n(1)| = \\frac{e^\\xi}{(n+1)!} < \\frac{3}{(n+1)!}$.",
      "2. Require $\\frac{3}{(n+1)!} < 0.01 \\iff (n+1)! > 300$.",
      "3. Testing factorials: $5! = 120 < 300$, but $6! = 720 > 300$.",
      "4. Thus $n+1 = 6 \\implies n = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. حد الخطأ: $|R_n(1)| < \\frac{3}{(n+1)!}$.",
      "٢. الشرط المطلوب: $\\frac{3}{(n+1)!} < 0.01 \\iff (n+1)! > 300$.",
      "٣. باختبار المضروب: $5! = 120 < 300$ بينما $6! = 720 > 300$.",
      "٤. إذن $n+1 = 6 \\implies n = 5$."
    ],
    "teacherTipEn": "Factorials grow faster than any exponential, making Taylor series converge extremely rapidly.",
    "teacherTipAr": "دالة المضروب تنمو أسرع من أي دالة أسية، مما يمنح متسلسلات تايلور تقارباً فائق السرعة."
  },
  {
    "id": "egbac_ana_ch2_db_hots_48",
    "titleEn": "Decaying Exponential Error Bound #8",
    "titleAr": "تقدير خطأ الدالة الأسية المتناقصة رقم 8",
    "difficulty": "hots",
    "questionEn": "For $f(x) = e^{-x}$ on $[0, 0.1]$, approximated by $P_1(x) = 1 - x$, what is the strict upper bound on the remainder $|R_1(0.1)|$ given $e^{-\\xi} < 1$ for $\\xi > 0$?",
    "questionAr": "للدالة $f(x) = e^{-x}$ على $[0, 0.1]$ مقربة بـ $P_1(x) = 1 - x$، ما هو الحد الأعلى للباقي $|R_1(0.1)|$ علماً بأن $e^{-\\xi} < 1$ لكل $\\xi > 0$؟",
    "optionsEn": [
      "$|R_1(0.1)| < 10^{-2}$",
      "$|R_1(0.1)| < 2.5 \\times 10^{-3}$",
      "$|R_1(0.1)| < 5 \\times 10^{-2}$",
      "$|R_1(0.1)| < 5 \\times 10^{-3}$"
    ],
    "optionsAr": [
      "$|R_1(0.1)| < 10^{-2}$",
      "$|R_1(0.1)| < 2.5 \\times 10^{-3}$",
      "$|R_1(0.1)| < 5 \\times 10^{-2}$",
      "$|R_1(0.1)| < 5 \\times 10^{-3}$"
    ],
    "correctAnswer": "$|R_1(0.1)| < 5 \\times 10^{-3}$",
    "correctIndex": 3,
    "hintEn": "R_1(0.1) = e^(-xi) / 2! * (0.1)^2 < 1 / 2 * 0.01.",
    "hintAr": "باقي الرتبة الأولى هو e^(-xi)/2 * (0.1)^2 < 0.5 * 0.01.",
    "stepByStepSolutionEn": [
      "1. Second derivative: $f''(x) = e^{-x}$.",
      "2. Remainder: $R_1(0.1) = \\frac{e^{-\\xi}}{2!} (0.1)^2 = \\frac{e^{-\\xi}}{2} (0.01)$.",
      "3. Since $\\xi \\in (0, 0.1)$, $e^{-\\xi} < 1$, yielding $|R_1(0.1)| < \\frac{0.01}{2} = 0.005 = 5 \\times 10^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثانية: $f''(x) = e^{-x}$.",
      "٢. صيغة الباقي: $R_1(0.1) = \\frac{e^{-\\xi}}{2} (0.01)$.",
      "٣. بما أن $\\xi > 0$، فإن $e^{-\\xi} < 1$، وبالتالي $|R_1(0.1)| < 0.005 = 5 \\times 10^{-3}$."
    ],
    "teacherTipEn": "For decaying functions, the maximum derivative on [0, x] is simply at xi = 0.",
    "teacherTipAr": "في الدوال المتناقصة، تقع القيمة العظمى للمشتقة عند الطرف الأيسر xi = 0."
  },
  {
    "id": "egbac_ana_ch2_db_hots_49",
    "titleEn": "Asymptotic Order of Tangent Remainder #9",
    "titleAr": "الرتبة التقاربية لباقي دالة الظل رقم 9",
    "difficulty": "hots",
    "questionEn": "When approximating $f(x) = \\tan x$ by its 3rd-degree Maclaurin polynomial $P_3(x) = x + \\frac{x^3}{3}$, what is the asymptotic order of the remainder $R_3(x)$ as $x \\to 0$?",
    "questionAr": "عند تقريب الدالة $f(x) = \\tan x$ بكثيرة حدود ماكلوران من الدرجة الثالثة $P_3(x) = x + \\frac{x^3}{3}$، ما هي الرتبة التقاربية للباقي $R_3(x)$ عندما $x \\to 0$؟",
    "optionsEn": [
      "$\\mathcal{O}(x^5)$",
      "$\\mathcal{O}(x^4)$",
      "$\\mathcal{O}(x^6)$",
      "$\\mathcal{O}(x^3)$"
    ],
    "optionsAr": [
      "$\\mathcal{O}(x^5)$",
      "$\\mathcal{O}(x^4)$",
      "$\\mathcal{O}(x^6)$",
      "$\\mathcal{O}(x^3)$"
    ],
    "correctAnswer": "$\\mathcal{O}(x^5)$",
    "correctIndex": 0,
    "hintEn": "Since tan x is an odd function, all even-degree terms vanish. The next non-zero term is of degree 5.",
    "hintAr": "بما أن ظل الزاوية دالة فردية، فإن الحدود الزوجية تنعدم، والحد التالي غير الصفري هو من الدرجة الخامسة.",
    "stepByStepSolutionEn": [
      "1. The full Maclaurin expansion of tangent is $\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\mathcal{O}(x^7)$.",
      "2. Truncating after $x^3$, the remainder is $R_3(x) = \\tan x - \\left(x + \\frac{x^3}{3}\\right) = \\frac{2x^5}{15} + \\cdots$.",
      "3. Therefore, the leading term is of degree 5, which means $R_3(x) = \\mathcal{O}(x^5)$ as $x \\to 0$."
    ],
    "stepByStepSolutionAr": [
      "١. مفكوك ماكلوران لدالة الظل هو $\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\cdots$.",
      "٢. عند الاقتصار على الدرجة الثالثة، يكون الباقي $R_3(x) = \\frac{2x^5}{15} + \\cdots$.",
      "٣. وبالتالي فإن الرتبة التقاربية للحد الرائد هي $\\mathcal{O}(x^5)$ عندما $x \\to 0$."
    ],
    "teacherTipEn": "For odd functions, truncating at degree 2k-1 automatically yields an error of order 2k+1.",
    "teacherTipAr": "للدوال الفردية، القطع عند الدرجة 2k-1 يعطي تلقائياً خطأً من الرتبة 2k+1."
  },
  {
    "id": "egbac_ana_ch2_db_hots_50",
    "titleEn": "Cube Root Linear Truncation Bound #10",
    "titleAr": "تقدير خطأ قطع التقريب الخطي للجذر التكعيبي رقم 10",
    "difficulty": "hots",
    "questionEn": "Approximate $\\sqrt[3]{1.06} = (1 + 0.06)^{1/3}$ by the linear Taylor polynomial $P_1(0.06) = 1 + \\frac{1}{3}(0.06) = 1.02$. What is the strict upper bound on the truncation error $|R_1(0.06)|$ given $|f''(\\xi)| < \\frac{2}{9}$ for $\\xi > 0$?",
    "questionAr": "عند تقريب $\\sqrt[3]{1.06}$ بالتقريب الخطي لتايلور $P_1(0.06) = 1 + \\frac{1}{3}(0.06) = 1.02$، ما هو الحد الأعلى لخطأ القطع $|R_1(0.06)|$ علماً بأن $|f''(\\xi)| < \\frac{2}{9}$؟",
    "optionsEn": [
      "$|R_1(0.06)| < 2 \\times 10^{-4}$",
      "$|R_1(0.06)| < 4 \\times 10^{-4}$",
      "$|R_1(0.06)| < 8 \\times 10^{-4}$",
      "$|R_1(0.06)| < 10^{-3}$"
    ],
    "optionsAr": [
      "$|R_1(0.06)| < 2 \\times 10^{-4}$",
      "$|R_1(0.06)| < 4 \\times 10^{-4}$",
      "$|R_1(0.06)| < 8 \\times 10^{-4}$",
      "$|R_1(0.06)| < 10^{-3}$"
    ],
    "correctAnswer": "$|R_1(0.06)| < 4 \\times 10^{-4}$",
    "correctIndex": 1,
    "hintEn": "R_1(x) = |f''(xi)| / 2! * x^2. Plug in |f''(xi)| < 2/9 and x = 0.06.",
    "hintAr": "باقي الرتبة الأولى هو |f''(xi)| / 2 * x^2. عوض بـ 2/9 و x = 0.06.",
    "stepByStepSolutionEn": [
      "1. Second derivative: $f''(x) = -\\frac{2}{9}(1+x)^{-5/3}$.",
      "2. For $\\xi > 0$: $|f''(\\xi)| < \\frac{2}{9}$.",
      "3. Remainder: $|R_1(0.06)| < \\frac{2/9}{2} (0.06)^2 = \\frac{1}{9} (0.0036) = 0.0004 = 4 \\times 10^{-4}$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الثانية: $f''(x) = -\\frac{2}{9}(1+x)^{-5/3}$.",
      "٢. عند $\\xi > 0$: يكون $|f''(\\xi)| < \\frac{2}{9}$.",
      "٣. الباقي: $|R_1(0.06)| < \\frac{1}{9} (0.0036) = 0.0004 = 4 \\times 10^{-4}$."
    ],
    "teacherTipEn": "Notice how (0.06)^2 = 0.0036 is cleanly divisible by 9, giving 0.0004.",
    "teacherTipAr": "لاحظ أن (0.06)^2 = 0.0036 يقبل القسمة تماماً على 9 معطياً 0.0004."
  },
  {
    "id": "egbac_ana_ch2_db_hots_51",
    "titleEn": "Taylor Remainder Error Bound (Lagrange Remainder)",
    "titleAr": "تقدير خطأ باق تايلور (صيغة لاجرانج للباقي)",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "If $\\sin(0.1)$ is approximated by the Maclaurin polynomial $P_3(x) = x - \\frac{x^3}{6}$, what is the strict upper bound on the absolute error $|R_4(0.1)|$ given by the Lagrange remainder?",
    "questionAr": "إذا قُربت قيمة $\\sin(0.1)$ بكثير حدود ماكلورين $P_3(x) = x - \\frac{x^3}{6}$، فما هو الحد الأقصى الدقيق للخطأ المطلق $|R_4(0.1)|$ وفق صيغة لاجرانج للباقي؟",
    "optionsEn": [
      "$\\frac{(0.1)^5}{120} \\approx 8.33 \\times 10^{-8}$",
      "$\\frac{(0.1)^4}{24} \\approx 4.17 \\times 10^{-6}$",
      "$\\frac{(0.1)^3}{6} \\approx 1.67 \\times 10^{-4}$",
      "$10^{-5}$"
    ],
    "optionsAr": [
      "$\\frac{(0.1)^5}{120} \\approx 8.33 \\times 10^{-8}$",
      "$\\frac{(0.1)^4}{24} \\approx 4.17 \\times 10^{-6}$",
      "$\\frac{(0.1)^3}{6} \\approx 1.67 \\times 10^{-4}$",
      "$10^{-5}$"
    ],
    "correctAnswer": "$\\frac{(0.1)^5}{120} \\approx 8.33 \\times 10^{-8}$",
    "correctIndex": 0,
    "hintEn": "Since the degree 4 term of $\\sin x$ is zero, $P_3(x) = P_4(x)$, so the remainder is $R_4(x) = \\frac{f^{(5)}(c)}{5!} x^5$ with $|f^{(5)}(c)| = |\\cos c| \\le 1$.",
    "hintAr": "بما أن الحد الرابع معدوم، فإن $P_3 = P_4$، وصيغة الباقي تصبح $R_4(x) = \\frac{f^{(5)}(c)}{5!} x^5$ مع $|\\cos c| \\le 1$.",
    "stepByStepSolutionEn": [
      "Because $\\sin(x)$ is an odd function, the $x^4$ coefficient is zero, so $P_3(x) = P_4(x)$.",
      "The Lagrange remainder formula gives: $R_4(x) = \\frac{f^{(5)}(c)}{5!} x^5$ for some $c \\in (0, 0.1)$.",
      "$f^{(5)}(x) = \\cos(x)$. Since $|\\cos(c)| \\le 1$ for all $c$, we have:",
      "$|R_4(0.1)| \\le \\frac{1}{5!} (0.1)^5 = \\frac{10^{-5}}{120} \\approx 8.33 \\times 10^{-8}$."
    ],
    "stepByStepSolutionAr": [
      "دالة الجيب فردية، لذا معامل $x^4$ صفر، ويكون $P_3(x) = P_4(x)$.",
      "صيغة لاجرانج للباقي: $R_4(x) = \\frac{f^{(5)}(c)}{5!} x^5$ لقيمة $c \\in (0, 0.1)$.",
      "المشتقة الخامسة هي $\\cos(c)$ ومطلقها $\\le 1$.",
      "أقصى خطأ: $\\frac{1}{120} (0.1)^5 \\approx 8.33 \\times 10^{-8}$."
    ],
    "teacherTipEn": "This shows just two terms of the Taylor series of sine achieve 7 decimal places of precision for $x = 0.1$.",
    "teacherTipAr": "يوضح هذا أن حدين فقط من متسلسلة تايلور للجيب يحققان دقة تصل لـ 7 أرقام عشرية عند $x = 0.1$."
  },
  {
    "id": "egbac_ana_ch2_db_hots_52",
    "titleEn": "Resonance in Non-Homogeneous Second-Order ODE",
    "titleAr": "الرنين في معادلة تفاضلية من الرتبة الثانية غير متجانسة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Find a particular solution $y_p(x)$ to the differential equation $y'' + 4y = 8\\cos(2x)$.",
    "questionAr": "أوجد حلاً خاصاً $y_p(x)$ للمعادلة التفاضلية $y'' + 4y = 8\\cos(2x)$.",
    "optionsEn": [
      "$y_p(x) = 2x \\sin(2x)$",
      "$y_p(x) = 2 \\cos(2x)$",
      "$y_p(x) = -2x \\cos(2x)$",
      "$y_p(x) = 4 \\sin(2x)$"
    ],
    "optionsAr": [
      "$y_p(x) = 2x \\sin(2x)$",
      "$y_p(x) = 2 \\cos(2x)$",
      "$y_p(x) = -2x \\cos(2x)$",
      "$y_p(x) = 4 \\sin(2x)$"
    ],
    "correctAnswer": "$y_p(x) = 2x \\sin(2x)$",
    "correctIndex": 0,
    "hintEn": "Since $\\cos(2x)$ is part of the complementary homogeneous solution, multiply the trial solution by $x$: $y_p = x(A \\cos 2x + B \\sin 2x)$.",
    "hintAr": "بما أن $\\cos(2x)$ حل للمعادلة المتجانسة، اضرب الحل التجريبي في $x$: $y_p = x(A \\cos 2x + B \\sin 2x)$.",
    "stepByStepSolutionEn": [
      "Homogeneous equation: $y'' + 4y = 0 \\implies r^2 + 4 = 0 \\implies r = \\pm 2i$.",
      "Complementary solution: $y_h = C_1 \\cos(2x) + C_2 \\sin(2x)$.",
      "Since forcing frequency matches natural frequency (resonance), try $y_p = x(A \\cos 2x + B \\sin 2x)$.",
      "Differentiate: $y_p' = (A \\cos 2x + B \\sin 2x) + x(-2A \\sin 2x + 2B \\cos 2x)$.",
      "$y_p'' = 2(-2A \\sin 2x + 2B \\cos 2x) + x(-4A \\cos 2x - 4B \\sin 2x)$.",
      "Substitute into $y_p'' + 4y_p = -4A \\sin 2x + 4B \\cos 2x = 8 \\cos(2x)$.",
      "Equate coefficients: $4B = 8 \\implies B = 2$ and $-4A = 0 \\implies A = 0$.",
      "Thus $y_p(x) = 2x \\sin(2x)$."
    ],
    "stepByStepSolutionAr": [
      "حل المعادلة المتجانسة: $y_h = C_1 \\cos(2x) + C_2 \\sin(2x)$.",
      "نظراً لتطابق تردد القوة المؤثرة مع التردد الطبيعي (حالة رنين)، نفرض $y_p = x(A \\cos 2x + B \\sin 2x)$.",
      "بالتعويض في $y'' + 4y = 8\\cos(2x)$:",
      "$-4A \\sin 2x + 4B \\cos 2x = 8\\cos 2x \\implies B = 2, A = 0$.",
      "الحل الخاص هو $y_p(x) = 2x \\sin(2x)$."
    ],
    "teacherTipEn": "The factor $x$ represents linearly growing amplitude, characteristic of mechanical and acoustic resonance.",
    "teacherTipAr": "المعامل $x$ يمثل تزايد سعة الاهتزاز خطياً مع الزمن، وهو السلوك الفيزيائي الكلاسيكي لظاهرة الرنين."
  },
  {
    "id": "egbac_ana_ch2_db_hots_53",
    "titleEn": "Second-Order ODE with Complex Conjugate Roots",
    "titleAr": "معادلة تفاضلية من الرتبة الثانية بجذور مركبة مترافقة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the general solution to the damped oscillator equation $y'' + 2y' + 5y = 0$.",
    "questionAr": "أوجد الحل العام لمعادلة المتذبذب المخمد $y'' + 2y' + 5y = 0$.",
    "optionsEn": [
      "$y = e^{-x} (C_1 \\cos 2x + C_2 \\sin 2x)$",
      "$y = e^{x} (C_1 \\cos 2x + C_2 \\sin 2x)$",
      "$y = C_1 e^{-x} + C_2 e^{-5x}$",
      "$y = e^{-2x} (C_1 \\cos x + C_2 \\sin x)$"
    ],
    "optionsAr": [
      "$y = e^{-x} (C_1 \\cos 2x + C_2 \\sin 2x)$",
      "$y = e^{x} (C_1 \\cos 2x + C_2 \\sin 2x)$",
      "$y = C_1 e^{-x} + C_2 e^{-5x}$",
      "$y = e^{-2x} (C_1 \\cos x + C_2 \\sin x)$"
    ],
    "correctAnswer": "$y = e^{-x} (C_1 \\cos 2x + C_2 \\sin 2x)$",
    "correctIndex": 0,
    "hintEn": "Solve characteristic equation $r^2 + 2r + 5 = 0$ using quadratic formula: $r = \\alpha \\pm i\\beta$.",
    "hintAr": "حل المعادلة المميزة $r^2 + 2r + 5 = 0$ بالقانون العام: $r = \\alpha \\pm i\\beta$.",
    "stepByStepSolutionEn": [
      "Characteristic equation: $r^2 + 2r + 5 = 0$.",
      "Roots: $r = \\frac{-2 \\pm \\sqrt{4 - 20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = -1 \\pm 2i$.",
      "Here $\\alpha = -1$ and $\\beta = 2$.",
      "General solution is $y(x) = e^{\\alpha x} (C_1 \\cos \\beta x + C_2 \\sin \\beta x) = e^{-x} (C_1 \\cos 2x + C_2 \\sin 2x)$."
    ],
    "stepByStepSolutionAr": [
      "المعادلة المميزة: $r^2 + 2r + 5 = 0$.",
      "الجذور: $r = \\frac{-2 \\pm \\sqrt{-16}}{2} = -1 \\pm 2i$.",
      "الجزء الحقيقي $\\alpha = -1$ والتخيلي $\\beta = 2$.",
      "الحل العام: $y = e^{-x} (C_1 \\cos 2x + C_2 \\sin 2x)$."
    ],
    "teacherTipEn": "This models underdamped harmonic motion, where oscillations decay exponentially over time.",
    "teacherTipAr": "يمثل هذا حركة توافقية ضعيفة التخميد، حيث تضمحل سعة الاهتزازات أسياً مع مرور الوقت."
  },
  {
    "id": "egbac_ana_ch2_db_hots_54",
    "titleEn": "Orthogonal Trajectories to a Family of Parabolas",
    "titleAr": "المسارات المتعامدة لعائلة من القطوع المكافئة",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the orthogonal trajectories to the family of parabolas $y = k x^2$ (where $k \\neq 0$).",
    "questionAr": "أوجد المسارات المتعامدة لعائلة القطوع المكافئة $y = k x^2$ (حيث $k \\neq 0$).",
    "optionsEn": [
      "$x^2 + 2y^2 = C$ (family of ellipses)",
      "$x^2 - y^2 = C$ (family of hyperbolas)",
      "$x^2 + y^2 = C$ (family of concentric circles)",
      "$y = C x$ (family of straight lines)"
    ],
    "optionsAr": [
      "$x^2 + 2y^2 = C$ (عائلة من القطوع الناقصة)",
      "$x^2 - y^2 = C$ (عائلة من القطوع الزائدة)",
      "$x^2 + y^2 = C$ (عائلة من الدوائر المتحدة المركز)",
      "$y = C x$ (عائلة من المستقيمات)"
    ],
    "correctAnswer": "$x^2 + 2y^2 = C$ (family of ellipses)",
    "correctIndex": 0,
    "hintEn": "Find the differential equation of the parabolas, replace $y'$ by $-\\frac{1}{y'}$, and solve.",
    "hintAr": "أوجد المعادلة التفاضلية لعائلة القطوع، استبدل $y'$ بـ $-\\frac{1}{y'}$ ثم حل المعادلة الناتجة.",
    "stepByStepSolutionEn": [
      "Differentiate $y = k x^2$: $y' = 2kx$.",
      "Eliminate $k$: $k = \\frac{y}{x^2} \\implies y' = 2\\left(\\frac{y}{x^2}\\right)x = \\frac{2y}{x}$.",
      "For orthogonal trajectories, replace $y'$ with $-\\frac{1}{y'}$: $-\\frac{1}{y'} = \\frac{2y}{x} \\implies y' = -\\frac{x}{2y}$.",
      "Separate variables: $2y dy = -x dx$.",
      "Integrate: $y^2 = -\\frac{x^2}{2} + C' \\implies \\frac{x^2}{2} + y^2 = C' \\implies x^2 + 2y^2 = C$ (ellipses)."
    ],
    "stepByStepSolutionAr": [
      "اشتقاق عائلة القطوع: $y' = 2kx$.",
      "حذف $k$: $k = \\frac{y}{x^2} \\implies y' = \\frac{2y}{x}$.",
      "شرط التعامد: استبدال $y'$ بـ $-\\frac{1}{y'}$ ينتج: $\\frac{dy}{dx} = -\\frac{x}{2y}$.",
      "بفصل المتغيرات والتكامل: $2y dy = -x dx \\implies y^2 = -\\frac{x^2}{2} + c$.",
      "إذن $x^2 + 2y^2 = C$ (عائلة من القطوع الناقصة)."
    ],
    "teacherTipEn": "Orthogonal trajectories are perpendicular at every point of intersection, widely used in physics to find equipotential lines from field lines.",
    "teacherTipAr": "المسارات المتعامدة تتعامد في كل نقطة تقاطع، وتستخدم في الفيزياء لإيجاد خطوط تساوي الجهد من خطوط المجال."
  },
  {
    "id": "egbac_ana_ch2_db_hots_55",
    "titleEn": "Leibniz Product Rule for n-th Derivative",
    "titleAr": "قاعدة لايبنتز للمشتقة النونية لحاصل ضرب دالتين",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Using the Leibniz formula for higher derivatives, find the $n$-th derivative $\\frac{d^n}{dx^n} [x^2 e^x]$.",
    "questionAr": "باستخدام صيغة لايبنتز للمشتقات العليا، أوجد المشتقة النونية $\\frac{d^n}{dx^n} [x^2 e^x]$.",
    "optionsEn": [
      "$(x^2 + 2nx + n(n-1)) e^x$",
      "$(x^2 + nx + n^2) e^x$",
      "$2n x e^x$",
      "$(x^2 + 2nx + n) e^x$"
    ],
    "optionsAr": [
      "$(x^2 + 2nx + n(n-1)) e^x$",
      "$(x^2 + nx + n^2) e^x$",
      "$2n x e^x$",
      "$(x^2 + 2nx + n) e^x$"
    ],
    "correctAnswer": "$(x^2 + 2nx + n(n-1)) e^x$",
    "correctIndex": 0,
    "hintEn": "By Leibniz rule: $(uv)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(k)} v^{(n-k)}$. Only the first 3 terms ($k=0,1,2$) for $u = x^2$ are non-zero.",
    "hintAr": "صيغة لايبنتز: $(uv)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(k)} v^{(n-k)}$. تذكر أن مشتقات $x^2$ تنعدم بعد المشتقة الثانية.",
    "stepByStepSolutionEn": [
      "Let $u = x^2$ and $v = e^x$.",
      "Derivatives of $u$: $u = x^2$, $u' = 2x$, $u'' = 2$, and $u^{(k)} = 0$ for $k \\ge 3$.",
      "Derivatives of $v$: $v^{(n-k)} = e^x$ for all $k$.",
      "Apply Leibniz formula:",
      "$(x^2 e^x)^{(n)} = \\binom{n}{0} x^2 e^x + \\binom{n}{1} (2x) e^x + \\binom{n}{2} (2) e^x$.",
      "Substitute binomial coefficients: $\\binom{n}{0} = 1$, $\\binom{n}{1} = n$, $\\binom{n}{2} = \\frac{n(n-1)}{2}$.",
      "Combine: $\\left[ x^2 + 2nx + \\frac{n(n-1)}{2} \\times 2 \\right] e^x = (x^2 + 2nx + n(n-1)) e^x$."
    ],
    "stepByStepSolutionAr": [
      "نفرض $u = x^2$ و $v = e^x$.",
      "مشتقات $u$: $u = x^2$، $u' = 2x$، $u'' = 2$، والمشتقات الأعلى صفراً.",
      "مشتقات $v$: جميعها $e^x$.",
      "صيغة لايبنتز: $\\binom{n}{0} x^2 e^x + \\binom{n}{1} (2x) e^x + \\binom{n}{2} (2) e^x$.",
      "بالتبسيط: $(x^2 + 2nx + n(n-1)) e^x$."
    ],
    "teacherTipEn": "The Leibniz rule is analogous to the binomial theorem, with derivatives replacing powers.",
    "teacherTipAr": "تشبه صيغة لايبنتز تماماً مبرهنة ذات الحدين، حيث تحل رتب المشتقات محل الأسس."
  },
  {
    "id": "egbac_ana_ch2_db_hots_56",
    "titleEn": "Jensen's Inequality and Concavity of ln(x)",
    "titleAr": "متراجحة ينسن وتحدب دالة اللوغاريتم الطبيعي",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Because $f(x) = \\ln(x)$ is strictly concave downward on $(0, \\infty)$ ($f''(x) = -\\frac{1}{x^2} < 0$), Jensen's Inequality states that for all $a, b > 0$ and $\\lambda = 0.5$:",
    "questionAr": "بما أن دالة اللوغاريتم الطبيعي $f(x) = \\ln(x)$ مقعرة لأسفل بدقة على $(0, \\infty)$ ($f''(x) = -\\frac{1}{x^2} < 0$)، فما هي النتيجة الناتجة عن متراجحة ينسن لقيم $a, b > 0$ و $\\lambda = 0.5$؟",
    "optionsEn": [
      "$\\frac{a + b}{2} \\ge \\sqrt{ab}$ (Arithmetic Mean - Geometric Mean inequality)",
      "$\\sqrt{ab} \\ge \\frac{a + b}{2}$",
      "$\\ln(a + b) \\ge \\ln(a) + \\ln(b)$",
      "$\\frac{a+b}{2} = \\sqrt{ab}$"
    ],
    "optionsAr": [
      "$\\frac{a + b}{2} \\ge \\sqrt{ab}$ (متراجحة الوسطين الحسابي والهندسي)",
      "$\\sqrt{ab} \\ge \\frac{a + b}{2}$",
      "$\\ln(a + b) \\ge \\ln(a) + \\ln(b)$",
      "$\\frac{a+b}{2} = \\sqrt{ab}$"
    ],
    "correctAnswer": "$\\frac{a + b}{2} \\ge \\sqrt{ab}$ (Arithmetic Mean - Geometric Mean inequality)",
    "correctIndex": 0,
    "hintEn": "For a concave function, $f\\left(\\frac{a+b}{2}\\right) \\ge \\frac{f(a)+f(b)}{2}$. Then exponentiate both sides.",
    "hintAr": "لأي دالة مقعرة لأسفل: $f\\left(\\frac{a+b}{2}\\right) \\ge \\frac{f(a)+f(b)}{2}$. ثم خذ الدالة الأسية للطرفين.",
    "stepByStepSolutionEn": [
      "By Jensen's inequality for the concave function $f(x) = \\ln(x)$:",
      "$\\ln\\left(\\frac{a+b}{2}\\right) \\ge \\frac{\\ln(a) + \\ln(b)}{2} = \\frac{1}{2} \\ln(ab) = \\ln\\left(\\sqrt{ab}\\right)$.",
      "Since the exponential function $e^x$ is strictly increasing, applying it preserves the inequality:",
      "$\\frac{a + b}{2} \\ge \\sqrt{ab}$.",
      "This provides a rigorous analytical proof of the AM-GM inequality."
    ],
    "stepByStepSolutionAr": [
      "بتطبيق متراجحة ينسن على دالة اللوغاريتم المحدبة لأعلى:",
      "$\\ln\\left(\\frac{a+b}{2}\\right) \\ge \\frac{\\ln(a) + \\ln(b)}{2} = \\ln(\\sqrt{ab})$.",
      "بأخذ الدالة الأسية للطرفين:",
      "$\\frac{a+b}{2} \\ge \\sqrt{ab}$.",
      "هذا يقدم برهاناً تحليلياً دقيقاً لمتراجحة الوسط الحسابي والهندسي."
    ],
    "teacherTipEn": "Jensen's inequality generalizes to any number of variables: $\\frac{x_1 + \\dots + x_n}{n} \\ge \\sqrt[n]{x_1 \\dots x_n}$.",
    "teacherTipAr": "تعمم متراجحة ينسن على أي عدد من المتغيرات لإثبات متراجحة الوسطين لـ $n$ عنصراً."
  },
  {
    "id": "egbac_ana_ch2_db_hots_57",
    "titleEn": "Clairaut's Differential Equation Singular Solution",
    "titleAr": "الحل الشاذ لمعادلة كليرو التفاضلية",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Find the singular solution (envelope) of Clairaut's differential equation $y = x y' + (y')^2$.",
    "questionAr": "أوجد الحل الشاذ (الغلاف) لمعادلة كليرو التفاضلية $y = x y' + (y')^2$.",
    "optionsEn": [
      "$y = -\\frac{x^2}{4}$ (a parabola)",
      "$y = \\frac{x^2}{4}$",
      "$y = -x^2$",
      "$y = 2x + 4$"
    ],
    "optionsAr": [
      "$y = -\\frac{x^2}{4}$ (قطع مكافئ)",
      "$y = \\frac{x^2}{4}$",
      "$y = -x^2$",
      "$y = 2x + 4$"
    ],
    "correctAnswer": "$y = -\\frac{x^2}{4}$ (a parabola)",
    "correctIndex": 0,
    "hintEn": "Let $p = y'$, differentiate with respect to $x$: $p = p + x p' + 2p p' \\implies p'(x + 2p) = 0$. Solve $x + 2p = 0$.",
    "hintAr": "نضع $p = y'$ ونشتق بالنسبة لـ $x$: $p'(x + 2p) = 0$. حل المعادلة $x + 2p = 0$.",
    "stepByStepSolutionEn": [
      "Let $p = y'$, so the equation is $y = x p + p^2$.",
      "Differentiate both sides with respect to $x$:",
      "$p = p + x \\frac{dp}{dx} + 2p \\frac{dp}{dx} \\implies \\frac{dp}{dx}(x + 2p) = 0$.",
      "Setting $\\frac{dp}{dx} = 0 \\implies p = C$ gives the general solution family of lines: $y = C x + C^2$.",
      "Setting $x + 2p = 0 \\implies p = -\\frac{x}{2}$.",
      "Substitute $p = -\\frac{x}{2}$ back into the original ODE:",
      "$y = x\\left(-\\frac{x}{2}\\right) + \\left(-\\frac{x}{2}\\right)^2 = -\\frac{x^2}{2} + \\frac{x^2}{4} = -\\frac{x^2}{4}$.",
      "This parabola is the singular solution that envelops all the tangent lines in the general solution."
    ],
    "stepByStepSolutionAr": [
      "بوضع $p = y'$ تصبح المعادلة $y = xp + p^2$.",
      "بالاشتقاق بالنسبة لـ $x$: $\\frac{dp}{dx}(x + 2p) = 0$.",
      "المعادلة الأولى تعطي عائلة المستقيمات العامة $y = Cx + C^2$.",
      "المعادلة الثانية تعطي الحل الشاذ: $x + 2p = 0 \\implies p = -\\frac{x}{2}$.",
      "بالتعويض في المعادلة الأصلية: $y = x(-\\frac{x}{2}) + (-\\frac{x}{2})^2 = -\\frac{x^2}{4}$."
    ],
    "teacherTipEn": "A singular solution cannot be obtained by setting any constant $C$ in the general solution; it is the envelope of the family of solutions.",
    "teacherTipAr": "الحل الشاذ لا يمكن الحصول عليه بأي تعويض لقيمة الثابت $C$ في الحل العام؛ بل هو الغلاف الهندسي لعائلة الحلول."
  },
  {
    "id": "egbac_ana_ch2_db_hots_58",
    "titleEn": "Snell's Law via Fermat's Principle of Least Time",
    "titleAr": "استنتاج قانون سنل من مبدأ فيرما لأقصر زمن",
    "difficulty": "hots",
    "diagramType": "cartesian_plane",
    "questionEn": "Light travels from point $A(0, h_1)$ in medium 1 (speed $v_1$) to $B(d, -h_2)$ in medium 2 (speed $v_2$), refracting at point $P(x, 0)$ on the interface. Minimizing total time $T(x) = \\frac{\\sqrt{x^2 + h_1^2}}{v_1} + \\frac{\\sqrt{(d-x)^2 + h_2^2}}{v_2}$ by setting $T'(x) = 0$ yields which fundamental law of optics?",
    "questionAr": "ينتقل الضوء من النقطة $A(0, h_1)$ في الوسط الأول (السرعة $v_1$) إلى $B(d, -h_2)$ في الوسط الثاني (السرعة $v_2$) منكسراً عند النقطة $P(x, 0)$ على السطح الفاصل. إن تصغير الزمن الكلي $T(x)$ بمساواة $T'(x) = 0$ يثبت أي قانون بصري أساسي؟",
    "optionsEn": [
      "Snell's Law of Refraction: $\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}$",
      "Law of Reflection: $\\theta_1 = \\theta_2$",
      "Brewster's Law: $\\tan\\theta_B = \\frac{n_2}{n_1}$",
      "Beer-Lambert Law"
    ],
    "optionsAr": [
      "قانون سنل للانكسار: $\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}$",
      "قانون الانعكاس: $\\theta_1 = \\theta_2$",
      "قانون بروستر: $\\tan\\theta_B = \\frac{n_2}{n_1}$",
      "قانون بير-لامبرت"
    ],
    "correctAnswer": "Snell's Law of Refraction: $\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}$",
    "correctIndex": 0,
    "hintEn": "Differentiate $T(x)$ with respect to $x$ and notice that $\\frac{x}{\\sqrt{x^2 + h_1^2}} = \\sin\\theta_1$ and $\\frac{d-x}{\\sqrt{(d-x)^2 + h_2^2}} = \\sin\\theta_2$.",
    "hintAr": "اشتق $T(x)$ بالنسبة لـ $x$ ولاحظ أن المقادير الناتجة تمثل جيوب زوايا السقوط والانكسار.",
    "stepByStepSolutionEn": [
      "Total travel time: $T(x) = \\frac{\\sqrt{x^2 + h_1^2}}{v_1} + \\frac{\\sqrt{(d-x)^2 + h_2^2}}{v_2}$.",
      "Compute derivative: $T'(x) = \\frac{1}{v_1} \\frac{x}{\\sqrt{x^2 + h_1^2}} - \\frac{1}{v_2} \\frac{d - x}{\\sqrt{(d - x)^2 + h_2^2}}$.",
      "From geometry, $\\sin\\theta_1 = \\frac{x}{\\sqrt{x^2 + h_1^2}}$ and $\\sin\\theta_2 = \\frac{d - x}{\\sqrt{(d - x)^2 + h_2^2}}$.",
      "Setting $T'(x) = 0 \\implies \\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}$, which is Snell's Law."
    ],
    "stepByStepSolutionAr": [
      "دالة زمن المسار: $T(x) = \\frac{\\sqrt{x^2 + h_1^2}}{v_1} + \\frac{\\sqrt{(d-x)^2 + h_2^2}}{v_2}$.",
      "المشتقة: $T'(x) = \\frac{1}{v_1} \\frac{x}{\\sqrt{x^2 + h_1^2}} - \\frac{1}{v_2} \\frac{d - x}{\\sqrt{(d - x)^2 + h_2^2}}$.",
      "هندسياً: المقدار الأول يمثل $\\sin\\theta_1$ والثاني يمثل $\\sin\\theta_2$.",
      "بمساواة $T'(x) = 0$: نحصل على قانون سنل $\\frac{\\sin\\theta_1}{v_1} = \\frac{\\sin\\theta_2}{v_2}$."
    ],
    "teacherTipEn": "Fermat's principle of least time is a beautiful physical application of single-variable calculus optimization.",
    "teacherTipAr": "مبدأ فيرما لأقصر زمن تطبيق فيزيائي رائع لحساب التفاضل والقيم الصغرى."
  }
]
};
