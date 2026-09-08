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
      "٢. مشتقة الأس $u = 2x$ هي 2$.",
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
      "٢. مشتقة الأس $u = 3x$ هي 3$.",
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
      "٢. مشتقة الأس $u = 4x$ هي 4$.",
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
      "٢. مشتقة الأس $u = 5x$ هي 5$.",
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
      "٢. مشتقة الأس $u = 6x$ هي 6$.",
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
      "٢. مشتقة الأس $u = 7x$ هي 7$.",
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
      "٢. مشتقة الأس $u = 8x$ هي 8$.",
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
      "٢. مشتقة الأس $u = 9x$ هي 9$.",
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
      "٢. مشتقة الأس $u = 10x$ هي 10$.",
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
      "٢. مشتقة الأس $u = 11x$ هي 11$.",
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
      "٢. مشتقة الأس $u = 12x$ هي 12$.",
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
      "٢. مشتقة الأس $u = 13x$ هي 13$.",
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
      "٢. مشتقة الأس $u = 14x$ هي 14$.",
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
      "٢. مشتقة الأس $u = 15x$ هي 15$.",
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
      "٢. مشتقة الأس $u = 16x$ هي 16$.",
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
    "titleEn": "General Maclaurin Coefficient Formula #1",
    "titleAr": "صيغة معامل ماكلوران العام رقم 1",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 0,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_42",
    "titleEn": "General Maclaurin Coefficient Formula #2",
    "titleAr": "صيغة معامل ماكلوران العام رقم 2",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 1,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_43",
    "titleEn": "General Maclaurin Coefficient Formula #3",
    "titleAr": "صيغة معامل ماكلوران العام رقم 3",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 2,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_44",
    "titleEn": "General Maclaurin Coefficient Formula #4",
    "titleAr": "صيغة معامل ماكلوران العام رقم 4",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 3,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_45",
    "titleEn": "General Maclaurin Coefficient Formula #5",
    "titleAr": "صيغة معامل ماكلوران العام رقم 5",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 0,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_46",
    "titleEn": "General Maclaurin Coefficient Formula #6",
    "titleAr": "صيغة معامل ماكلوران العام رقم 6",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 1,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_47",
    "titleEn": "General Maclaurin Coefficient Formula #7",
    "titleAr": "صيغة معامل ماكلوران العام رقم 7",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 2,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_48",
    "titleEn": "General Maclaurin Coefficient Formula #8",
    "titleAr": "صيغة معامل ماكلوران العام رقم 8",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 3,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_49",
    "titleEn": "General Maclaurin Coefficient Formula #9",
    "titleAr": "صيغة معامل ماكلوران العام رقم 9",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 0,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
  },
  {
    "id": "egbac_ana_ch2_db_easy_50",
    "titleEn": "General Maclaurin Coefficient Formula #10",
    "titleAr": "صيغة معامل ماكلوران العام رقم 10",
    "difficulty": "easy",
    "questionEn": "In the Maclaurin series expansion of an infinitely differentiable function $f(x) = \\sum_{n=0}^\\infty a_n x^n$, what is the general formula for coefficient $a_n$?",
    "questionAr": "في مفكوك متسلسلة ماكلوران لدالة قابلة للاشتقاق عدداً لا نهائياً من المرات $f(x) = \\sum_{n=0}^\\infty a_n x^n$، ما هي الصيغة العامة للمعامل $a_n$؟",
    "optionsEn": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "optionsAr": [
      "$\\frac{f^{(n)}(0)}{(n+1)!}$",
      "$\\frac{f^{(n)}(0)}{n!}$",
      "$f^{(n)}(0)$",
      "$\\frac{f'(0)}{n!}$"
    ],
    "correctAnswer": "$\\frac{f^{(n)}(0)}{n!}$",
    "correctIndex": 1,
    "hintEn": "By Taylor's Theorem at a = 0, a_n is the n-th derivative at zero divided by n factorial.",
    "hintAr": "بنظرية تايلور عند الصفر، المعامل a_n هو المشتقة النونية عند الصفر مقسومة على مضروب n.",
    "stepByStepSolutionEn": [
      "1. Differentiate $f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n + \\cdots$ repeatedly.",
      "2. The $n$-th derivative evaluated at $x = 0$ is $f^{(n)}(0) = n! \\cdot a_n$.",
      "3. Solving for $a_n$ gives $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "stepByStepSolutionAr": [
      "١. باشتقاق مفكوك المتسلسلة n مرة والتعويض بـ x = 0:",
      "٢. نجد أن المشتقة النونية عند الصفر تساوي $n! \\times a_n$.",
      "٣. بالقسمة على $n!$ ينتج $a_n = \\frac{f^{(n)}(0)}{n!}."
    ],
    "teacherTipEn": "Remember the factorial in the denominator: a_n = f^(n)(0) / n!.",
    "teacherTipAr": "تذكر دائماً المضروب في المقام: المعامل يساوي المشتقة النونية مقسومة على مضروب n."
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
    "titleEn": "Lagrange Remainder Truncation Error #1",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 1",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 0,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_42",
    "titleEn": "Lagrange Remainder Truncation Error #2",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 2",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 1,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_43",
    "titleEn": "Lagrange Remainder Truncation Error #3",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 3",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 2,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_44",
    "titleEn": "Lagrange Remainder Truncation Error #4",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 4",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$",
      "$|R_3(1)| < \\frac{1}{8}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$",
      "$|R_3(1)| < \\frac{1}{8}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 3,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_45",
    "titleEn": "Lagrange Remainder Truncation Error #5",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 5",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 0,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_46",
    "titleEn": "Lagrange Remainder Truncation Error #6",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 6",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 1,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_47",
    "titleEn": "Lagrange Remainder Truncation Error #7",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 7",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 2,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_48",
    "titleEn": "Lagrange Remainder Truncation Error #8",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 8",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$",
      "$|R_3(1)| < \\frac{1}{8}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$",
      "$|R_3(1)| < \\frac{1}{8}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 3,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_49",
    "titleEn": "Lagrange Remainder Truncation Error #9",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 9",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 0,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  },
  {
    "id": "egbac_ana_ch2_db_hots_50",
    "titleEn": "Lagrange Remainder Truncation Error #10",
    "titleAr": "تقدير خطأ قطع باقي لاجرانج رقم 10",
    "difficulty": "hots",
    "questionEn": "When approximating $e$ by its 3rd-degree Taylor polynomial $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$, what is the strict upper bound on the remainder $|R_3(1)|$ using the bound $e < 3$?",
    "questionAr": "عند تقريب العدد النيبيري $e$ بكثيرة حدود تايلور من الدرجة الثالثة $P_3(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6}$، ما هو الحد الأعلى الدقيق لباقي لاجرانج $|R_3(1)|$ باستخدام التقدير $e < 3$؟",
    "optionsEn": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "optionsAr": [
      "$|R_3(1)| < \\frac{1}{24}$",
      "$|R_3(1)| < \\frac{1}{8}$",
      "$|R_3(1)| < \\frac{1}{6}$",
      "$|R_3(1)| < \\frac{1}{4}$"
    ],
    "correctAnswer": "$|R_3(1)| < \\frac{1}{8}$",
    "correctIndex": 1,
    "hintEn": "R_3(1) = e^c / 4! where 0 < c < 1. Since e^c < e < 3, R_3(1) < 3 / 24 = 1/8.",
    "hintAr": "باقي لاجرانج R_3(1) = e^c / 4! حيث c بين 0 و 1، وبما أن e^c < 3 فإن الباقي أقل من 3/24 = 1/8.",
    "stepByStepSolutionEn": [
      "1. By Taylor's Theorem, the Lagrange remainder of order 3 is:",
      "   $$R_3(x) = \\frac{f^{(4)}(\\xi)}{4!} x^4 = \\frac{e^\\xi}{24} x^4, \\quad \\text{where } 0 < \\xi < x$$",
      "2. For $x = 1$: $R_3(1) = \\frac{e^\\xi}{24}$.",
      "3. Since $0 < \\xi < 1$, $e^\\xi < e^1 < 3$.",
      "4. Therefore, $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8} = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. صيغة باقي لاجرانج من الرتبة الثالثة: $R_3(1) = \\frac{e^\\xi}{4!} (1)^4 = \\frac{e^\\xi}{24}$ حيث $0 < \\xi < 1$.",
      "٢. بما أن $\\xi < 1$، فإن $e^\\xi < e < 3$.",
      "٣. بالتعويض نجد أن: $|R_3(1)| < \\frac{3}{24} = \\frac{1}{8}$."
    ],
    "teacherTipEn": "R_n(x) < M / (n+1)! * (b-a)^(n+1) bounds the error of numerical Taylor approximation.",
    "teacherTipAr": "صيغة باقي لاجرانج تمنح الباحثين والمهندسين تقديراً دقيقاً لأقصى خطأ محتمل."
  }
]
};
