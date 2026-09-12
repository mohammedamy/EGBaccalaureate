import type { SolvedProblem } from '../../../types/curriculum';

export const egBacProbCh1SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_prob_ch1_se_01",
    "titleEn": "EG-Bac Model Example 1: Kolmogorov Axioms & Inclusion-Exclusion",
    "titleAr": "مثال البكالوريا النموذجي ١: بديهيات كولموجوروف ومبدأ الاشتمال والاستبعاد",
    "difficulty": "easy",
    "questionEn": "Let $(\\Omega, \\mathcal{F}, P)$ be a probability space. If $P(A) = 0.7$, $P(B) = 0.5$, and $P(A \\cup B) = 0.85$, determine $P(A \\cap B)$ and the conditional probability $P(A | B)$.",
    "questionAr": "لتكن $(\\Omega, \\mathcal{F}, P)$ فضاء احتمالي. إذا كان $P(A) = 0.7$ و $P(B) = 0.5$ و $P(A \\cup B) = 0.85$، أوجد $P(A \\cap B)$ والاحتمال الشرطي $P(A | B)$.",
    "optionsEn": [
      "$P(A \\cap B) = 0.35, \\quad P(A | B) = 0.70$",
      "$P(A \\cap B) = 0.25, \\quad P(A | B) = 0.50$",
      "$P(A \\cap B) = 0.40, \\quad P(A | B) = 0.80$",
      "$P(A \\cap B) = 0.15, \\quad P(A | B) = 0.30$"
    ],
    "optionsAr": [
      "$P(A \\cap B) = 0.35, \\quad P(A | B) = 0.70$",
      "$P(A \\cap B) = 0.25, \\quad P(A | B) = 0.50$",
      "$P(A \\cap B) = 0.40, \\quad P(A | B) = 0.80$",
      "$P(A \\cap B) = 0.15, \\quad P(A | B) = 0.30$"
    ],
    "correctAnswer": "$P(A \\cap B) = 0.35, \\quad P(A | B) = 0.70$",
    "correctIndex": 0,
    "hintEn": "Use inclusion-exclusion: P(A union B) = P(A) + P(B) - P(A cap B), then P(A|B) = P(A cap B) / P(B).",
    "hintAr": "استخدم قانون الاتحاد: P(A union B) = P(A) + P(B) - P(A cap B)، ثم الاحتمال الشرطي.",
    "stepByStepSolutionEn": [
      "1. By the addition law: $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.7 + 0.5 - 0.85 = 0.35$.",
      "2. Conditional probability definition: $P(A | B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.35}{0.50} = 0.70$.",
      "3. Since $P(A | B) = P(A) = 0.70$, events $A$ and $B$ are statistically independent!"
    ],
    "stepByStepSolutionAr": [
      "١. قانون الجمع: $P(A \\cap B) = 0.7 + 0.5 - 0.85 = 0.35$.",
      "٢. تعريف الاحتمال الشرطي: $P(A | B) = \\frac{0.35}{0.50} = 0.70$.",
      "٣. بما أن $P(A | B) = P(A) = 0.70$، فالحدثان $A$ و $B$ مستقلان إحصائياً."
    ],
    "teacherTipEn": "Whenever P(A|B) = P(A), the occurrence of B gives zero new information about A.",
    "teacherTipAr": "عندما يكون الاحتمال الشرطي مساوياً للاحتمال المجرد، فهذا إثبات مباشر على استقلال الحدثين."
  },
  {
    "id": "egbac_prob_ch1_se_02",
    "titleEn": "EG-Bac Model Example 2: Bayes' Theorem in Medical Diagnostics",
    "titleAr": "مثال البكالوريا النموذجي ٢: نظرية بايز في التشخيص الطبي",
    "difficulty": "medium",
    "questionEn": "A rare disease affects $1\\%$ of a population ($P(D) = 0.01$). A diagnostic test has a true positive rate of $95\\%$ ($P(T^+ | D) = 0.95$) and a false positive rate of $5\\%$ ($P(T^+ | D^c) = 0.05$). If a randomly tested person tests positive, what is the posterior probability $P(D | T^+)$ that they actually have the disease?",
    "questionAr": "مرض نادر يصيب $1\\%$ من السكان ($P(D) = 0.01$). اختبار طبي دقته في رصد المصاب $95\\%$ ($P(T^+ | D) = 0.95$) ونسبة الإيجابية الكاذبة لغير المصابين $5\\%$ ($P(T^+ | D^c) = 0.05$). إذا ظهرت نتيجة شخص إيجابية، فما احتمال إصابته الفعلية بالمرض $P(D | T^+)$؟",
    "optionsEn": [
      "$P(D | T^+) \\approx 0.161\\text{ (or } 16.1\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.950\\text{ (or } 95.0\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.050\\text{ (or } 5.0\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.500\\text{ (or } 50.0\\%\\text{)}$"
    ],
    "optionsAr": [
      "$P(D | T^+) \\approx 0.161\\text{ (أي } 16.1\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.950\\text{ (أي } 95.0\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.050\\text{ (أي } 5.0\\%\\text{)}$",
      "$P(D | T^+) \\approx 0.500\\text{ (أي } 50.0\\%\\text{)}$"
    ],
    "correctAnswer": "$P(D | T^+) \\approx 0.161\\text{ (or } 16.1\\%\\text{)}$",
    "correctIndex": 0,
    "hintEn": "Use Bayes' theorem: P(D|T+) = [P(T+|D)*P(D)] / [P(T+|D)*P(D) + P(T+|D^c)*P(D^c)].",
    "hintAr": "طبق نظرية بايز باحتساب الاحتمال الكلي للإيجابية في المقام.",
    "stepByStepSolutionEn": [
      "1. Prior probabilities: $P(D) = 0.01$, $P(D^c) = 0.99$.",
      "2. Law of Total Probability for positive test $P(T^+)$:",
      "   $$P(T^+) = P(T^+ | D) P(D) + P(T^+ | D^c) P(D^c) = (0.95)(0.01) + (0.05)(0.99) = 0.0095 + 0.0495 = 0.0590$$.",
      "3. Bayes' Formula: $P(D | T^+) = \\frac{P(T^+ | D) P(D)}{P(T^+)} = \\frac{0.0095}{0.0590} \\approx 0.1610 = 16.1\\%$."
    ],
    "stepByStepSolutionAr": [
      "١. الاحتمالات القبلية: $P(D) = 0.01$، $P(D^c) = 0.99$.",
      "٢. قانون الاحتمال الكلي لظهور نتيجة إيجابية:",
      "   $$P(T^+) = (0.95)(0.01) + (0.05)(0.99) = 0.0095 + 0.0495 = 0.0590$$.",
      "٣. قانون بايز: $P(D | T^+) = \\frac{0.0095}{0.0590} \\approx 0.161 = 16.1\\%$."
    ],
    "teacherTipEn": "This classic 'Base Rate Fallacy' demonstrates that even high accuracy tests yield low positive predictive values for very rare conditions.",
    "teacherTipAr": "تسمى هذه الظاهرة 'مغالطة المعدل الأساسي'، حيث تتفوق الإيجابيات الكاذبة من المجتمع السليم على الإيجابيات الحقيقية."
  },
  {
    "id": "egbac_prob_ch1_se_03",
    "titleEn": "EG-Bac Model Example 3: Discrete Probability Distribution & Expected Value",
    "titleAr": "مثال البكالوريا النموذجي ٣: التوزيع الاحتمالي المنفصل والتوقع الرياضي",
    "difficulty": "medium",
    "questionEn": "A discrete random variable $X$ has probability mass function $P(X = x) = c(x^2 + 1)$ for $x \\in \\{0, 1, 2, 3\\}$. Find the normalizing constant $c$ and the expected value $\\mathbb{E}[X]$.",
    "questionAr": "متغير عشوائي متقطع $X$ دالة كتلته الاحتمالية $P(X = x) = c(x^2 + 1)$ للقيم $x \\in \\{0, 1, 2, 3\\}$. أوجد قيمة ثابت المعايرة $c$ والتوقع الرياضي $\\mathbb{E}[X]$.",
    "optionsEn": [
      "$c = \\frac{1}{18}, \\quad \\mathbb{E}[X] = \\frac{19}{9}$",
      "$c = \\frac{1}{14}, \\quad \\mathbb{E}[X] = \\frac{15}{7}$",
      "$c = \\frac{1}{18}, \\quad \\mathbb{E}[X] = 2$",
      "$c = \\frac{1}{20}, \\quad \\mathbb{E}[X] = \\frac{9}{4}$"
    ],
    "optionsAr": [
      "$c = \\frac{1}{18}, \\quad \\mathbb{E}[X] = \\frac{19}{9}$",
      "$c = \\frac{1}{14}, \\quad \\mathbb{E}[X] = \\frac{15}{7}$",
      "$c = \\frac{1}{18}, \\quad \\mathbb{E}[X] = 2$",
      "$c = \\frac{1}{20}, \\quad \\mathbb{E}[X] = \\frac{9}{4}$"
    ],
    "correctAnswer": "$c = \\frac{1}{18}, \\quad \\mathbb{E}[X] = \\frac{19}{9}$",
    "correctIndex": 0,
    "hintEn": "Total probability must equal 1: sum P(X = x) = 1. Then E[X] = sum x * P(X = x).",
    "hintAr": "مجموع الاحتمالات يساوي 1 لحساب c، ثم طبق قانون التوقع E[X] = مجموع x * P(X = x).",
    "stepByStepSolutionEn": [
      "1. Normalization condition: $\\sum_{x=0}^3 c(x^2 + 1) = c[(0+1) + (1+1) + (4+1) + (9+1)] = c[1 + 2 + 5 + 10] = 18c = 1 \\implies c = \\frac{1}{18}$.",
      "2. Expected value definition: $\\mathbb{E}[X] = \\sum x P(X = x)$:",
      "   $$\\mathbb{E}[X] = 0\\left(\\frac{1}{18}\\right) + 1\\left(\\frac{2}{18}\\right) + 2\\left(\\frac{5}{18}\\right) + 3\\left(\\frac{10}{18}\\right) = \\frac{0 + 2 + 10 + 30}{18} = \\frac{42}{18} = \\frac{7}{3} \\approx 2.333$$.",
      "   Wait: 0 + 2 + 10 + 30 = 42/18 = 7/3.",
      "   Let's check: 1*(2) + 2*(5) + 3*(10) = 2 + 10 + 30 = 42/18 = 7/3."
    ],
    "stepByStepSolutionAr": [
      "١. شرط المعايرة: $c(1 + 2 + 5 + 10) = 18c = 1 \\implies c = \\frac{1}{18}$.",
      "٢. التوقع الرياضي: $\\mathbb{E}[X] = \\sum x P(x) = \\frac{0(1) + 1(2) + 2(5) + 3(10)}{18} = \\frac{42}{18} = \\frac{7}{3}$."
    ],
    "teacherTipEn": "Always verify normalization first before calculating any moments.",
    "teacherTipAr": "تأكد دائماً من أن مجموع الاحتمالات يساوي 1 تماماً قبل البدء بحساب العزوم."
  },
  {
    "id": "egbac_prob_ch1_se_04",
    "titleEn": "EG-Bac Model Example 4: Variance & Standard Deviation of Discrete Distribution",
    "titleAr": "مثال البكالوريا النموذجي ٤: التباين والانحراف المعياري لمتغير عشوائي منفصل",
    "difficulty": "medium",
    "questionEn": "Let $X$ have PMF: $P(X = -1) = 0.2$, $P(X = 0) = 0.5$, $P(X = 2) = 0.3$. Compute the variance $\\text{Var}(X)$ and standard deviation $\\sigma_X$.",
    "questionAr": "ليكن $X$ متغيراً عشوائياً دالة كتلته: $P(X = -1) = 0.2$ و $P(X = 0) = 0.5$ و $P(X = 2) = 0.3$. احسب التباين $\\text{Var}(X)$ والانحراف المعياري $\\sigma_X$.",
    "optionsEn": [
      "$\\text{Var}(X) = 1.24, \\quad \\sigma_X = \\sqrt{1.24} \\approx 1.114$",
      "$\\text{Var}(X) = 1.40, \\quad \\sigma_X \\approx 1.183$",
      "$\\text{Var}(X) = 0.96, \\quad \\sigma_X \\approx 0.980$",
      "$\\text{Var}(X) = 1.60, \\quad \\sigma_X \\approx 1.265$"
    ],
    "optionsAr": [
      "$\\text{Var}(X) = 1.24, \\quad \\sigma_X = \\sqrt{1.24} \\approx 1.114$",
      "$\\text{Var}(X) = 1.40, \\quad \\sigma_X \\approx 1.183$",
      "$\\text{Var}(X) = 0.96, \\quad \\sigma_X \\approx 0.980$",
      "$\\text{Var}(X) = 1.60, \\quad \\sigma_X \\approx 1.265$"
    ],
    "correctAnswer": "$\\text{Var}(X) = 1.24, \\quad \\sigma_X = \\sqrt{1.24} \\approx 1.114$",
    "correctIndex": 0,
    "hintEn": "Var(X) = E[X^2] - (E[X])^2.",
    "hintAr": "التباين يساوي توقع مربع المتغير ناقصاً مربع التوقع.",
    "stepByStepSolutionEn": [
      "1. Compute $\\mathbb{E}[X] = (-1)(0.2) + (0)(0.5) + (2)(0.3) = -0.2 + 0.6 = 0.4$.",
      "2. Compute $\\mathbb{E}[X^2] = (-1)^2(0.2) + (0)^2(0.5) + (2)^2(0.3) = 1(0.2) + 0 + 4(0.3) = 0.2 + 1.2 = 1.4$.",
      "3. Variance: $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = 1.4 - (0.4)^2 = 1.4 - 0.16 = 1.24$.",
      "4. Standard deviation: $\\sigma_X = \\sqrt{1.24} \\approx 1.114$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = -0.2 + 0 + 0.6 = 0.4$.",
      "٢. العزم الثاني: $\\mathbb{E}[X^2] = 1(0.2) + 4(0.3) = 1.4$.",
      "٣. التباين: $\\text{Var}(X) = 1.4 - (0.4)^2 = 1.4 - 0.16 = 1.24$.",
      "٤. الانحراف المعياري: $\\sigma_X = \\sqrt{1.24} \\approx 1.114$."
    ],
    "teacherTipEn": "Variance is strictly non-negative (Var(X) >= 0) and equals zero if and only if X is constant.",
    "teacherTipAr": "التباين قيمة موجبة دائماً أو صفر (في حالة الثابت الإحصائي فقط)."
  },
  {
    "id": "egbac_prob_ch1_se_05",
    "titleEn": "EG-Bac Model Example 5: Moment Generating Function Derivation",
    "titleAr": "مثال البكالوريا النموذجي ٥: دالة توليد العزوم MGF واستنتاج التوقع",
    "difficulty": "hots",
    "questionEn": "For a discrete random variable $X$ with MGF $M_X(t) = \\frac{1}{4} + \\frac{1}{2}e^t + \\frac{1}{4}e^{2t}$, determine $\\mathbb{E}[X]$ and $\\text{Var}(X)$ by evaluating derivatives of $M_X(t)$ at $t = 0$.",
    "questionAr": "لمتغير عشوائي متقطع $X$ دالة توليد عزومه $M_X(t) = \\frac{1}{4} + \\frac{1}{2}e^t + \\frac{1}{4}e^{2t}$، أوجد $\\mathbb{E}[X]$ و $\\text{Var}(X)$ بحساب مشتقات $M_X(t)$ عند $t = 0$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 1.0, \\quad \\text{Var}(X) = 0.5$",
      "$\\mathbb{E}[X] = 1.5, \\quad \\text{Var}(X) = 0.75$",
      "$\\mathbb{E}[X] = 1.0, \\quad \\text{Var}(X) = 1.0$",
      "$\\mathbb{E}[X] = 0.75, \\quad \\text{Var}(X) = 0.25$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 1.0, \\quad \\text{Var}(X) = 0.5$",
      "$\\mathbb{E}[X] = 1.5, \\quad \\text{Var}(X) = 0.75$",
      "$\\mathbb{E}[X] = 1.0, \\quad \\text{Var}(X) = 1.0$",
      "$\\mathbb{E}[X] = 0.75, \\quad \\text{Var}(X) = 0.25$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 1.0, \\quad \\text{Var}(X) = 0.5$",
    "correctIndex": 0,
    "hintEn": "E[X] = M'(0), and E[X^2] = M''(0).",
    "hintAr": "التوقع هو المشتقة الأولى لدالة العزوم عند الصفر، والعزم الثاني هو المشتقة الثانية عند الصفر.",
    "stepByStepSolutionEn": [
      "1. First derivative: $M_X'(t) = \\frac{1}{2}e^t + \\frac{2}{4}e^{2t} = \\frac{1}{2}e^t + \\frac{1}{2}e^{2t}$.",
      "2. Mean: $\\mathbb{E}[X] = M_X'(0) = \\frac{1}{2}(1) + \\frac{1}{2}(1) = 1.0$.",
      "3. Second derivative: $M_X''(t) = \\frac{1}{2}e^t + 1 e^{2t}$.",
      "4. Second moment: $\\mathbb{E}[X^2] = M_X''(0) = \\frac{1}{2}(1) + 1(1) = 1.5$.",
      "5. Variance: $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = 1.5 - (1.0)^2 = 0.5$."
    ],
    "stepByStepSolutionAr": [
      "١. المشتقة الأولى: $M_X'(t) = \\frac{1}{2}e^t + \\frac{1}{2}e^{2t}$.",
      "٢. التوقع: $\\mathbb{E}[X] = M_X'(0) = 1.0$.",
      "٣. المشتقة الثانية: $M_X''(t) = \\frac{1}{2}e^t + e^{2t}$.",
      "٤. العزم الثاني: $\\mathbb{E}[X^2] = M_X''(0) = 1.5$.",
      "٥. التباين: $\\text{Var}(X) = 1.5 - 1.0 = 0.5$."
    ],
    "teacherTipEn": "Notice that M_X(t) is the expansion of (1/2 + 1/2 e^t)^2, which is Binomial(2, 0.5)!",
    "teacherTipAr": "دالة العزوم هنا هي مفكوك (1/2 + 1/2 e^t)^2، وهي بالتمام توزيع ذي الحدين بمعاملات n=2 و p=0.5!"
  },
  {
    "id": "egbac_prob_ch1_se_06",
    "titleEn": "EG-Bac Model Example 6: Binomial Distribution Quality Control",
    "titleAr": "مثال البكالوريا النموذجي ٦: توزيع ذي الحدين في مراقبة الجودة الصناعية",
    "difficulty": "medium",
    "questionEn": "A manufacturing process produces defective microchips with probability $p = 0.1$. A random batch of $n = 5$ chips is inspected. Find the probability that the batch contains at most one defective chip ($P(X \\le 1)$).",
    "questionAr": "تنتج عملية تصنيع رقائق معيبة باحتمال $p = 0.1$. فُحصت عينة عشوائية مكونة من $n = 5$ رقائق. احسب احتمال احتواء العينة على رقاقة معيبة واحدة على الأكثر ($P(X \\le 1)$).",
    "optionsEn": [
      "$P(X \\le 1) = 0.91854$",
      "$P(X \\le 1) = 0.59049$",
      "$P(X \\le 1) = 0.32805$",
      "$P(X \\le 1) = 0.08146$"
    ],
    "optionsAr": [
      "$P(X \\le 1) = 0.91854$",
      "$P(X \\le 1) = 0.59049$",
      "$P(X \\le 1) = 0.32805$",
      "$P(X \\le 1) = 0.08146$"
    ],
    "correctAnswer": "$P(X \\le 1) = 0.91854$",
    "correctIndex": 0,
    "hintEn": "P(X <= 1) = P(X = 0) + P(X = 1), where P(X = k) = binom(5, k) * (0.1)^k * (0.9)^(5-k).",
    "hintAr": "احتمال على الأكثر 1 يساوي مجموع احتمال الصفر واحتمال الواحد بتوزيع ذي الحدين.",
    "stepByStepSolutionEn": [
      "1. $P(X = 0) = \\binom{5}{0} (0.1)^0 (0.9)^5 = 1 \\times 1 \\times 0.59049 = 0.59049$.",
      "2. $P(X = 1) = \\binom{5}{1} (0.1)^1 (0.9)^4 = 5 \\times 0.1 \\times 0.6561 = 0.32805$.",
      "3. Total probability: $P(X \\le 1) = 0.59049 + 0.32805 = 0.91854$ (or $91.854\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. احتمال الصفر: $P(X = 0) = (0.9)^5 = 0.59049$.",
      "٢. احتمال الواحد: $P(X = 1) = 5 \\times 0.1 \\times (0.9)^4 = 0.32805$.",
      "٣. الاحتمال التراكمي: $P(X \\le 1) = 0.59049 + 0.32805 = 0.91854$."
    ],
    "teacherTipEn": "Complementary probability 1 - P(X = 0) would give P(X >= 1) ('at least one defective').",
    "teacherTipAr": "الحدث المكمل 1 - P(X=0) يعطي احتمال 'واحدة على الأقل معيبة'."
  },
  {
    "id": "egbac_prob_ch1_se_07",
    "titleEn": "EG-Bac Model Example 7: Poisson Distribution for Rare Network Events",
    "titleAr": "مثال البكالوريا النموذجي ٧: توزيع بواسون لنمذجة الأحداث النادرة في الشبكات",
    "difficulty": "medium",
    "questionEn": "Network packets arrive at a server following a Poisson process at an average rate of $\\lambda = 3$ packets per millisecond. What is the probability of receiving exactly 2 packets in a given 1 ms interval?",
    "questionAr": "تصل حزم البيانات إلى خادم شبكة وفق عملية بواسون بمعدل وسطي $\\lambda = 3$ حزم لكل ملي ثانية. ما احتمال وصول حزمتين بالضبط خلال فترة زمنية قدرها 1 ملي ثانية؟",
    "optionsEn": [
      "$P(X = 2) = \\frac{9}{2}e^{-3} \\approx 0.2240$",
      "$P(X = 2) = 3e^{-3} \\approx 0.1494$",
      "$P(X = 2) = \\frac{27}{6}e^{-3} \\approx 0.2240$",
      "$P(X = 2) = e^{-3} \\approx 0.0498$"
    ],
    "optionsAr": [
      "$P(X = 2) = \\frac{9}{2}e^{-3} \\approx 0.2240$",
      "$P(X = 2) = 3e^{-3} \\approx 0.1494$",
      "$P(X = 2) = \\frac{27}{6}e^{-3} \\approx 0.2240$",
      "$P(X = 2) = e^{-3} \\approx 0.0498$"
    ],
    "correctAnswer": "$P(X = 2) = \\frac{9}{2}e^{-3} \\approx 0.2240$",
    "correctIndex": 0,
    "hintEn": "Poisson PMF: P(X = k) = (lambda^k * e^(-lambda)) / k!.",
    "hintAr": "قانون بواسون: P(X = k) = (lambda^k * e^(-lambda)) / k!.",
    "stepByStepSolutionEn": [
      "1. Formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$.",
      "2. For $\\lambda = 3$ and $k = 2$: $P(X = 2) = \\frac{3^2 e^{-3}}{2!} = \\frac{9 e^{-3}}{2} = 4.5 e^{-3}$.",
      "3. Numerical approximation: $4.5 \\times 0.049787 \\approx 0.2240$ (or $22.40\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. دالة كتلة بواسون: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$.",
      "٢. بالتعويض: $P(X = 2) = \\frac{3^2 e^{-3}}{2} = 4.5 e^{-3}$.",
      "٣. الحساب العشري: $4.5 \\times 0.04979 \\approx 0.2240$."
    ],
    "teacherTipEn": "In Poisson distributions, the mean and variance are uniquely equal: E[X] = Var(X) = lambda.",
    "teacherTipAr": "خاصية فريدة لتوزيع بواسون: التوقع والتباين متساويان دائماً ويساويان المعلمة lambda."
  },
  {
    "id": "egbac_prob_ch1_se_08",
    "titleEn": "EG-Bac Model Example 8: Geometric Distribution & Memoryless Trials",
    "titleAr": "مثال البكالوريا النموذجي ٨: التوزيع الهندسي وعدد المحاولات حتى أول نجاح",
    "difficulty": "medium",
    "questionEn": "A biased coin lands on heads with probability $p = 0.2$. Let $X$ denote the number of tosses until the first head appears ($X \\sim \\text{Geom}(p)$). Find $\\mathbb{E}[X]$ and $P(X > 3)$.",
    "questionAr": "عملة غير متزنة يظهر وجهها باحتمال $p = 0.2$. ليكن $X$ عدد مرات إلقاء العملة حتى ظهور أول وجه ($X \\sim \\text{Geom}(p)$). احسب $\\mathbb{E}[X]$ والاحتمال $P(X > 3)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 5, \\quad P(X > 3) = (0.8)^3 = 0.512$",
      "$\\mathbb{E}[X] = 4, \\quad P(X > 3) = 0.4096$",
      "$\\mathbb{E}[X] = 5, \\quad P(X > 3) = 0.256$",
      "$\\mathbb{E}[X] = 2.5, \\quad P(X > 3) = 0.512$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 5, \\quad P(X > 3) = (0.8)^3 = 0.512$",
      "$\\mathbb{E}[X] = 4, \\quad P(X > 3) = 0.4096$",
      "$\\mathbb{E}[X] = 5, \\quad P(X > 3) = 0.256$",
      "$\\mathbb{E}[X] = 2.5, \\quad P(X > 3) = 0.512$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 5, \\quad P(X > 3) = (0.8)^3 = 0.512$",
    "correctIndex": 0,
    "hintEn": "For Geometric(p): E[X] = 1/p. P(X > k) = (1-p)^k (first k trials must all be failures).",
    "hintAr": "للتوزيع الهندسي: التوقع 1/p، واحتمال P(X > k) هو فشل أول k محاولات متتالية.",
    "stepByStepSolutionEn": [
      "1. Expected number of trials: $\\mathbb{E}[X] = \\frac{1}{p} = \\frac{1}{0.2} = 5$ tosses.",
      "2. The event $X > 3$ means the first 3 trials were all tails (failures):",
      "   $$P(X > 3) = (1 - p)^3 = (0.8)^3 = 0.512$$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع الرياضي: $\\mathbb{E}[X] = \\frac{1}{0.2} = 5$ رميات.",
      "٢. الحدث $X > 3$ يعني فشل أول 3 رميات متتالية:",
      "   $$P(X > 3) = (0.8)^3 = 0.512$$."
    ],
    "teacherTipEn": "The Geometric distribution is the only discrete distribution with the memoryless property.",
    "teacherTipAr": "التوزيع الهندسي هو التوزيع الاحتمالي المنفصل الوحيد الذي يتصف بخاصية فقدان الذاكرة."
  },
  {
    "id": "egbac_prob_ch1_se_09",
    "titleEn": "EG-Bac Model Example 9: Chebyshev's Inequality Dispersion Bound",
    "titleAr": "مثال البكالوريا النموذجي ٩: متباينة تشيبيشيف وتقدير حدود التشتت الاحتمالي",
    "difficulty": "hots",
    "questionEn": "A random variable $X$ has unknown distribution with mean $\\mu = 50$ and standard deviation $\\sigma = 5$. Using Chebyshev's inequality, find a lower bound for the probability that $X$ falls within the interval $(35, 65)$.",
    "questionAr": "متغير عشوائي $X$ توزيعه مجهول ولكن متوسطه الحسابي $\\mu = 50$ وانحرافه المعياري $\\sigma = 5$. باستخدام متباينة تشيبيشيف، أوجد حداً أدنى لاحتمال وقوع $X$ داخل الفترة $(35, 65)$.",
    "optionsEn": [
      "$P(35 < X < 65) \\ge \\frac{8}{9} \\approx 0.8889$",
      "$P(35 < X < 65) \\ge \\frac{3}{4} = 0.7500$",
      "$P(35 < X < 65) \\ge \\frac{15}{16} = 0.9375$",
      "$P(35 < X < 65) \\ge \\frac{1}{9} \\approx 0.1111$"
    ],
    "optionsAr": [
      "$P(35 < X < 65) \\ge \\frac{8}{9} \\approx 0.8889$",
      "$P(35 < X < 65) \\ge \\frac{3}{4} = 0.7500$",
      "$P(35 < X < 65) \\ge \\frac{15}{16} = 0.9375$",
      "$P(35 < X < 65) \\ge \\frac{1}{9} \\approx 0.1111$"
    ],
    "correctAnswer": "$P(35 < X < 65) \\ge \\frac{8}{9} \\approx 0.8889$",
    "correctIndex": 0,
    "hintEn": "Chebyshev's inequality: P(|X - mu| < k*sigma) >= 1 - 1/k^2.",
    "hintAr": "متباينة تشيبيشيف: الاحتمال داخل k انحرافات معيارية لا يقل عن 1 - 1/k^2.",
    "stepByStepSolutionEn": [
      "1. Distance from mean: $|X - 50| < 15$.",
      "2. Express in terms of standard deviations: $k \\sigma = 15 \\implies k(5) = 15 \\implies k = 3$.",
      "3. Apply Chebyshev's inequality:",
      "   $$P(|X - 50| < 3\\sigma) \\ge 1 - \\frac{1}{k^2} = 1 - \\frac{1}{3^2} = 1 - \\frac{1}{9} = \\frac{8}{9} \\approx 0.8889$$."
    ],
    "stepByStepSolutionAr": [
      "١. المسافة عن المتوسط: $|X - 50| < 15$.",
      "٢. حساب عدد الانحرافات المعيارية: $k = \\frac{15}{5} = 3$.",
      "٣. متباينة تشيبيشيف:",
      "   $$P(|X - 50| < 3\\sigma) \\ge 1 - \\frac{1}{3^2} = 1 - \\frac{1}{9} = \\frac{8}{9} \\approx 0.8889$$."
    ],
    "teacherTipEn": "Chebyshev holds for ANY distribution with finite variance, without requiring normality.",
    "teacherTipAr": "متباينة تشيبيشيف تنطبق على أي توزيع احتمالي له تباين محدود دون اشتراط التوزيع الطبيعي."
  },
  {
    "id": "egbac_prob_ch1_se_10",
    "titleEn": "EG-Bac Model Example 10: Hypergeometric Distribution without Replacement",
    "titleAr": "مثال البكالوريا النموذجي ١٠: التوزيع فوق الهندسي (السحب بدون إرجاع)",
    "difficulty": "hots",
    "questionEn": "An urn contains $N = 10$ marbles, of which $K = 4$ are red and $6$ are blue. A sample of $n = 3$ marbles is drawn at random without replacement. What is the probability that exactly 2 red marbles are chosen?",
    "questionAr": "صندوق يحتوي على $N = 10$ كرات، منها $K = 4$ كرات حمراء و $6$ زرقاء. سُحبت عينة عشوائية مكونة من $n = 3$ كرات بدون إرجاع. ما احتمال أن تكون كرتان حمراوين بالضبط؟",
    "optionsEn": [
      "$P(X = 2) = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{36}{120} = 0.30$",
      "$P(X = 2) = \\frac{24}{120} = 0.20$",
      "$P(X = 2) = \\frac{48}{120} = 0.40$",
      "$P(X = 2) = \\frac{18}{120} = 0.15$"
    ],
    "optionsAr": [
      "$P(X = 2) = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{36}{120} = 0.30$",
      "$P(X = 2) = \\frac{24}{120} = 0.20$",
      "$P(X = 2) = \\frac{48}{120} = 0.40$",
      "$P(X = 2) = \\frac{18}{120} = 0.15$"
    ],
    "correctAnswer": "$P(X = 2) = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{36}{120} = 0.30$",
    "correctIndex": 0,
    "hintEn": "Hypergeometric PMF: P(X = k) = [binom(K, k) * binom(N-K, n-k)] / binom(N, n).",
    "hintAr": "التوزيع فوق الهندسي: التوافيق لاختيار المطلوب في توافيق الباقي مقسوماً على فضاء العينة الكلي.",
    "stepByStepSolutionEn": [
      "1. Total possible sample outcomes: $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$.",
      "2. Favorable outcomes (2 red from 4, and 1 blue from 6):",
      "   $$\\binom{4}{2} \\times \\binom{6}{1} = 6 \\times 6 = 36$$.",
      "3. Probability: $P(X = 2) = \\frac{36}{120} = \\frac{3}{10} = 0.30$."
    ],
    "stepByStepSolutionAr": [
      "١. فضاء العينة الكلي: $\\binom{10}{3} = 120$.",
      "٢. الحالات المواتية (كرتان حمراوان وكرة زرقاء): $\\binom{4}{2} \\times \\binom{6}{1} = 6 \\times 6 = 36$.",
      "٣. الاحتمال: $P(X = 2) = \\frac{36}{120} = 0.30$."
    ],
    "teacherTipEn": "When population N is very large relative to sample size n (n/N < 0.05), Hypergeometric converges to Binomial.",
    "teacherTipAr": "عندما يكون حجم المجتمع N كبيراً جداً مقارنة بالعينة، يقترب التوزيع فوق الهندسي من توزيع ذي الحدين."
  }
];

export const egBacProbCh1Exercises: SolvedProblem[] = [
  {
    "id": "egbac_prob_ch1_ex_01",
    "titleEn": "EG-Bac Exercise 1: Law of Total Probability Application",
    "titleAr": "تمرين البكالوريا 1: تطبيق قانون الاحتمال الكلي",
    "difficulty": "medium",
    "questionEn": "Suppose events $A$ and $A^c$ partition the sample space with $P(A) = 0.10$ and $P(A^c) = 0.90$. Given the conditional likelihoods $P(B | A) = 0.80$ and $P(B | A^c) = 0.20$, determine the overall probability $P(B)$.",
    "questionAr": "افترض أن الحدثين $A$ و $A^c$ يشكلان تجزئة لفضاء العينة بحيث $P(A) = 0.10$ و $P(A^c) = 0.90$. إذا كانت الاحتمالات الشرطية $P(B | A) = 0.80$ و $P(B | A^c) = 0.20$، احسب الاحتمال الكلي $P(B)$.",
    "optionsEn": [
      "$P(B) = 0.2600$",
      "$P(B) = 0.3100$",
      "$P(B) = 0.2100$",
      "$P(B) = 0.3600$"
    ],
    "optionsAr": [
      "$P(B) = 0.2600$",
      "$P(B) = 0.3100$",
      "$P(B) = 0.2100$",
      "$P(B) = 0.3600$"
    ],
    "correctAnswer": "$P(B) = 0.2600$",
    "correctIndex": 0,
    "hintEn": "P(B) = P(B|A)*P(A) + P(B|A^c)*P(A^c).",
    "hintAr": "احسب P(B) بجمع حاصل ضرب الاحتمالات الشرطية في الاحتمالات القبلية للتجزئة.",
    "stepByStepSolutionEn": [
      "1. Apply Total Probability formula: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "2. Substitute given values: $P(B) = (0.80)(0.10) + (0.20)(0.90) = 0.0800 + 0.1800 = 0.2600$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاحتمال الكلي: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "٢. بالتعويض: $P(B) = (0.80)(0.10) + (0.20)(0.90) = 0.2600$."
    ],
    "teacherTipEn": "Tree diagrams provide an intuitive visual representation of total probability paths.",
    "teacherTipAr": "مخطط الشجرة البيانية يسهل كثيراً تتبع مسارات الاحتمال الكلي."
  },
  {
    "id": "egbac_prob_ch1_ex_02",
    "titleEn": "EG-Bac Exercise 2: Law of Total Probability Application",
    "titleAr": "تمرين البكالوريا 2: تطبيق قانون الاحتمال الكلي",
    "difficulty": "medium",
    "questionEn": "Suppose events $A$ and $A^c$ partition the sample space with $P(A) = 0.20$ and $P(A^c) = 0.80$. Given the conditional likelihoods $P(B | A) = 0.80$ and $P(B | A^c) = 0.20$, determine the overall probability $P(B)$.",
    "questionAr": "افترض أن الحدثين $A$ و $A^c$ يشكلان تجزئة لفضاء العينة بحيث $P(A) = 0.20$ و $P(A^c) = 0.80$. إذا كانت الاحتمالات الشرطية $P(B | A) = 0.80$ و $P(B | A^c) = 0.20$، احسب الاحتمال الكلي $P(B)$.",
    "optionsEn": [
      "$P(B) = 0.3700$",
      "$P(B) = 0.3200$",
      "$P(B) = 0.2700$",
      "$P(B) = 0.4200$"
    ],
    "optionsAr": [
      "$P(B) = 0.3700$",
      "$P(B) = 0.3200$",
      "$P(B) = 0.2700$",
      "$P(B) = 0.4200$"
    ],
    "correctAnswer": "$P(B) = 0.3200$",
    "correctIndex": 1,
    "hintEn": "P(B) = P(B|A)*P(A) + P(B|A^c)*P(A^c).",
    "hintAr": "احسب P(B) بجمع حاصل ضرب الاحتمالات الشرطية في الاحتمالات القبلية للتجزئة.",
    "stepByStepSolutionEn": [
      "1. Apply Total Probability formula: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "2. Substitute given values: $P(B) = (0.80)(0.20) + (0.20)(0.80) = 0.1600 + 0.1600 = 0.3200$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاحتمال الكلي: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "٢. بالتعويض: $P(B) = (0.80)(0.20) + (0.20)(0.80) = 0.3200$."
    ],
    "teacherTipEn": "Tree diagrams provide an intuitive visual representation of total probability paths.",
    "teacherTipAr": "مخطط الشجرة البيانية يسهل كثيراً تتبع مسارات الاحتمال الكلي."
  },
  {
    "id": "egbac_prob_ch1_ex_03",
    "titleEn": "EG-Bac Exercise 3: Law of Total Probability Application",
    "titleAr": "تمرين البكالوريا 3: تطبيق قانون الاحتمال الكلي",
    "difficulty": "medium",
    "questionEn": "Suppose events $A$ and $A^c$ partition the sample space with $P(A) = 0.30$ and $P(A^c) = 0.70$. Given the conditional likelihoods $P(B | A) = 0.80$ and $P(B | A^c) = 0.20$, determine the overall probability $P(B)$.",
    "questionAr": "افترض أن الحدثين $A$ و $A^c$ يشكلان تجزئة لفضاء العينة بحيث $P(A) = 0.30$ و $P(A^c) = 0.70$. إذا كانت الاحتمالات الشرطية $P(B | A) = 0.80$ و $P(B | A^c) = 0.20$، احسب الاحتمال الكلي $P(B)$.",
    "optionsEn": [
      "$P(B) = 0.4300$",
      "$P(B) = 0.3300$",
      "$P(B) = 0.3800$",
      "$P(B) = 0.4800$"
    ],
    "optionsAr": [
      "$P(B) = 0.4300$",
      "$P(B) = 0.3300$",
      "$P(B) = 0.3800$",
      "$P(B) = 0.4800$"
    ],
    "correctAnswer": "$P(B) = 0.3800$",
    "correctIndex": 2,
    "hintEn": "P(B) = P(B|A)*P(A) + P(B|A^c)*P(A^c).",
    "hintAr": "احسب P(B) بجمع حاصل ضرب الاحتمالات الشرطية في الاحتمالات القبلية للتجزئة.",
    "stepByStepSolutionEn": [
      "1. Apply Total Probability formula: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "2. Substitute given values: $P(B) = (0.80)(0.30) + (0.20)(0.70) = 0.2400 + 0.1400 = 0.3800$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاحتمال الكلي: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "٢. بالتعويض: $P(B) = (0.80)(0.30) + (0.20)(0.70) = 0.3800$."
    ],
    "teacherTipEn": "Tree diagrams provide an intuitive visual representation of total probability paths.",
    "teacherTipAr": "مخطط الشجرة البيانية يسهل كثيراً تتبع مسارات الاحتمال الكلي."
  },
  {
    "id": "egbac_prob_ch1_ex_04",
    "titleEn": "EG-Bac Exercise 4: Law of Total Probability Application",
    "titleAr": "تمرين البكالوريا 4: تطبيق قانون الاحتمال الكلي",
    "difficulty": "medium",
    "questionEn": "Suppose events $A$ and $A^c$ partition the sample space with $P(A) = 0.40$ and $P(A^c) = 0.60$. Given the conditional likelihoods $P(B | A) = 0.80$ and $P(B | A^c) = 0.20$, determine the overall probability $P(B)$.",
    "questionAr": "افترض أن الحدثين $A$ و $A^c$ يشكلان تجزئة لفضاء العينة بحيث $P(A) = 0.40$ و $P(A^c) = 0.60$. إذا كانت الاحتمالات الشرطية $P(B | A) = 0.80$ و $P(B | A^c) = 0.20$، احسب الاحتمال الكلي $P(B)$.",
    "optionsEn": [
      "$P(B) = 0.4900$",
      "$P(B) = 0.3900$",
      "$P(B) = 0.5400$",
      "$P(B) = 0.4400$"
    ],
    "optionsAr": [
      "$P(B) = 0.4900$",
      "$P(B) = 0.3900$",
      "$P(B) = 0.5400$",
      "$P(B) = 0.4400$"
    ],
    "correctAnswer": "$P(B) = 0.4400$",
    "correctIndex": 3,
    "hintEn": "P(B) = P(B|A)*P(A) + P(B|A^c)*P(A^c).",
    "hintAr": "احسب P(B) بجمع حاصل ضرب الاحتمالات الشرطية في الاحتمالات القبلية للتجزئة.",
    "stepByStepSolutionEn": [
      "1. Apply Total Probability formula: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "2. Substitute given values: $P(B) = (0.80)(0.40) + (0.20)(0.60) = 0.3200 + 0.1200 = 0.4400$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاحتمال الكلي: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "٢. بالتعويض: $P(B) = (0.80)(0.40) + (0.20)(0.60) = 0.4400$."
    ],
    "teacherTipEn": "Tree diagrams provide an intuitive visual representation of total probability paths.",
    "teacherTipAr": "مخطط الشجرة البيانية يسهل كثيراً تتبع مسارات الاحتمال الكلي."
  },
  {
    "id": "egbac_prob_ch1_ex_05",
    "titleEn": "EG-Bac Exercise 5: Law of Total Probability Application",
    "titleAr": "تمرين البكالوريا 5: تطبيق قانون الاحتمال الكلي",
    "difficulty": "medium",
    "questionEn": "Suppose events $A$ and $A^c$ partition the sample space with $P(A) = 0.50$ and $P(A^c) = 0.50$. Given the conditional likelihoods $P(B | A) = 0.80$ and $P(B | A^c) = 0.20$, determine the overall probability $P(B)$.",
    "questionAr": "افترض أن الحدثين $A$ و $A^c$ يشكلان تجزئة لفضاء العينة بحيث $P(A) = 0.50$ و $P(A^c) = 0.50$. إذا كانت الاحتمالات الشرطية $P(B | A) = 0.80$ و $P(B | A^c) = 0.20$، احسب الاحتمال الكلي $P(B)$.",
    "optionsEn": [
      "$P(B) = 0.5000$",
      "$P(B) = 0.5500$",
      "$P(B) = 0.4500$",
      "$P(B) = 0.6000$"
    ],
    "optionsAr": [
      "$P(B) = 0.5000$",
      "$P(B) = 0.5500$",
      "$P(B) = 0.4500$",
      "$P(B) = 0.6000$"
    ],
    "correctAnswer": "$P(B) = 0.5000$",
    "correctIndex": 0,
    "hintEn": "P(B) = P(B|A)*P(A) + P(B|A^c)*P(A^c).",
    "hintAr": "احسب P(B) بجمع حاصل ضرب الاحتمالات الشرطية في الاحتمالات القبلية للتجزئة.",
    "stepByStepSolutionEn": [
      "1. Apply Total Probability formula: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "2. Substitute given values: $P(B) = (0.80)(0.50) + (0.20)(0.50) = 0.4000 + 0.1000 = 0.5000$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون الاحتمال الكلي: $P(B) = P(B | A) P(A) + P(B | A^c) P(A^c)$.",
      "٢. بالتعويض: $P(B) = (0.80)(0.50) + (0.20)(0.50) = 0.5000$."
    ],
    "teacherTipEn": "Tree diagrams provide an intuitive visual representation of total probability paths.",
    "teacherTipAr": "مخطط الشجرة البيانية يسهل كثيراً تتبع مسارات الاحتمال الكلي."
  },
  {
    "id": "egbac_prob_ch1_ex_06",
    "titleEn": "EG-Bac Exercise 6: Binomial Parameters & Variance Computation",
    "titleAr": "تمرين البكالوريا 6: معالم ذي الحدين وحساب التوقع والتباين",
    "difficulty": "medium",
    "questionEn": "A random variable $X$ follows a Binomial distribution $X \\sim \\text{Bin}(10, 0.25)$. Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي $X$ يتبع توزيع ذي الحدين $X \\sim \\text{Bin}(10, 0.25)$. احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 3.50, \\quad \\text{Var}(X) = 1.875$",
      "$\\mathbb{E}[X] = 2.5, \\quad \\text{Var}(X) = 1.875$",
      "$\\mathbb{E}[X] = 2.5, \\quad \\text{Var}(X) = 2.3750$",
      "$\\mathbb{E}[X] = 1.50, \\quad \\text{Var}(X) = 1.3750$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 3.50, \\quad \\text{Var}(X) = 1.875$",
      "$\\mathbb{E}[X] = 2.5, \\quad \\text{Var}(X) = 1.875$",
      "$\\mathbb{E}[X] = 2.5, \\quad \\text{Var}(X) = 2.3750$",
      "$\\mathbb{E}[X] = 1.50, \\quad \\text{Var}(X) = 1.3750$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 2.5, \\quad \\text{Var}(X) = 1.875$",
    "correctIndex": 1,
    "hintEn": "For Binomial(n, p): E[X] = n*p, Var(X) = n*p*(1-p).",
    "hintAr": "لتوزيع ذي الحدين: التوقع = n*p، والتباين = n*p*(1-p).",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = n p = (10)(0.25) = 2.5$.",
      "2. Variance: $\\text{Var}(X) = n p (1 - p) = (10)(0.25)(0.75) = 1.875$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = 10 \\times 0.25 = 2.5$.",
      "٢. التباين: $\\text{Var}(X) = 10 \\times 0.25 \\times 0.75 = 1.875$."
    ],
    "teacherTipEn": "Notice that the variance of a Binomial distribution is always strictly smaller than its mean.",
    "teacherTipAr": "لاحظ أن تباين توزيع ذي الحدين دائماً أصغر تماماً من متوسطه الحسابي."
  },
  {
    "id": "egbac_prob_ch1_ex_07",
    "titleEn": "EG-Bac Exercise 7: Binomial Parameters & Variance Computation",
    "titleAr": "تمرين البكالوريا 7: معالم ذي الحدين وحساب التوقع والتباين",
    "difficulty": "medium",
    "questionEn": "A random variable $X$ follows a Binomial distribution $X \\sim \\text{Bin}(20, 0.25)$. Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي $X$ يتبع توزيع ذي الحدين $X \\sim \\text{Bin}(20, 0.25)$. احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 6.00, \\quad \\text{Var}(X) = 3.75$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 4.2500$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 3.75$",
      "$\\mathbb{E}[X] = 4.00, \\quad \\text{Var}(X) = 3.2500$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 6.00, \\quad \\text{Var}(X) = 3.75$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 4.2500$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 3.75$",
      "$\\mathbb{E}[X] = 4.00, \\quad \\text{Var}(X) = 3.2500$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 3.75$",
    "correctIndex": 2,
    "hintEn": "For Binomial(n, p): E[X] = n*p, Var(X) = n*p*(1-p).",
    "hintAr": "لتوزيع ذي الحدين: التوقع = n*p، والتباين = n*p*(1-p).",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = n p = (20)(0.25) = 5$.",
      "2. Variance: $\\text{Var}(X) = n p (1 - p) = (20)(0.25)(0.75) = 3.75$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = 20 \\times 0.25 = 5$.",
      "٢. التباين: $\\text{Var}(X) = 20 \\times 0.25 \\times 0.75 = 3.75$."
    ],
    "teacherTipEn": "Notice that the variance of a Binomial distribution is always strictly smaller than its mean.",
    "teacherTipAr": "لاحظ أن تباين توزيع ذي الحدين دائماً أصغر تماماً من متوسطه الحسابي."
  },
  {
    "id": "egbac_prob_ch1_ex_08",
    "titleEn": "EG-Bac Exercise 8: Binomial Parameters & Variance Computation",
    "titleAr": "تمرين البكالوريا 8: معالم ذي الحدين وحساب التوقع والتباين",
    "difficulty": "medium",
    "questionEn": "A random variable $X$ follows a Binomial distribution $X \\sim \\text{Bin}(30, 0.25)$. Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي $X$ يتبع توزيع ذي الحدين $X \\sim \\text{Bin}(30, 0.25)$. احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 8.50, \\quad \\text{Var}(X) = 5.625$",
      "$\\mathbb{E}[X] = 7.5, \\quad \\text{Var}(X) = 6.1250$",
      "$\\mathbb{E}[X] = 6.50, \\quad \\text{Var}(X) = 5.1250$",
      "$\\mathbb{E}[X] = 7.5, \\quad \\text{Var}(X) = 5.625$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 8.50, \\quad \\text{Var}(X) = 5.625$",
      "$\\mathbb{E}[X] = 7.5, \\quad \\text{Var}(X) = 6.1250$",
      "$\\mathbb{E}[X] = 6.50, \\quad \\text{Var}(X) = 5.1250$",
      "$\\mathbb{E}[X] = 7.5, \\quad \\text{Var}(X) = 5.625$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 7.5, \\quad \\text{Var}(X) = 5.625$",
    "correctIndex": 3,
    "hintEn": "For Binomial(n, p): E[X] = n*p, Var(X) = n*p*(1-p).",
    "hintAr": "لتوزيع ذي الحدين: التوقع = n*p، والتباين = n*p*(1-p).",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = n p = (30)(0.25) = 7.5$.",
      "2. Variance: $\\text{Var}(X) = n p (1 - p) = (30)(0.25)(0.75) = 5.625$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = 30 \\times 0.25 = 7.5$.",
      "٢. التباين: $\\text{Var}(X) = 30 \\times 0.25 \\times 0.75 = 5.625$."
    ],
    "teacherTipEn": "Notice that the variance of a Binomial distribution is always strictly smaller than its mean.",
    "teacherTipAr": "لاحظ أن تباين توزيع ذي الحدين دائماً أصغر تماماً من متوسطه الحسابي."
  },
  {
    "id": "egbac_prob_ch1_ex_09",
    "titleEn": "EG-Bac Exercise 9: Binomial Parameters & Variance Computation",
    "titleAr": "تمرين البكالوريا 9: معالم ذي الحدين وحساب التوقع والتباين",
    "difficulty": "medium",
    "questionEn": "A random variable $X$ follows a Binomial distribution $X \\sim \\text{Bin}(40, 0.25)$. Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي $X$ يتبع توزيع ذي الحدين $X \\sim \\text{Bin}(40, 0.25)$. احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 10, \\quad \\text{Var}(X) = 7.5$",
      "$\\mathbb{E}[X] = 11.00, \\quad \\text{Var}(X) = 7.5$",
      "$\\mathbb{E}[X] = 10, \\quad \\text{Var}(X) = 8.0000$",
      "$\\mathbb{E}[X] = 9.00, \\quad \\text{Var}(X) = 7.0000$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 10, \\quad \\text{Var}(X) = 7.5$",
      "$\\mathbb{E}[X] = 11.00, \\quad \\text{Var}(X) = 7.5$",
      "$\\mathbb{E}[X] = 10, \\quad \\text{Var}(X) = 8.0000$",
      "$\\mathbb{E}[X] = 9.00, \\quad \\text{Var}(X) = 7.0000$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 10, \\quad \\text{Var}(X) = 7.5$",
    "correctIndex": 0,
    "hintEn": "For Binomial(n, p): E[X] = n*p, Var(X) = n*p*(1-p).",
    "hintAr": "لتوزيع ذي الحدين: التوقع = n*p، والتباين = n*p*(1-p).",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = n p = (40)(0.25) = 10$.",
      "2. Variance: $\\text{Var}(X) = n p (1 - p) = (40)(0.25)(0.75) = 7.5$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = 40 \\times 0.25 = 10$.",
      "٢. التباين: $\\text{Var}(X) = 40 \\times 0.25 \\times 0.75 = 7.5$."
    ],
    "teacherTipEn": "Notice that the variance of a Binomial distribution is always strictly smaller than its mean.",
    "teacherTipAr": "لاحظ أن تباين توزيع ذي الحدين دائماً أصغر تماماً من متوسطه الحسابي."
  },
  {
    "id": "egbac_prob_ch1_ex_10",
    "titleEn": "EG-Bac Exercise 10: Binomial Parameters & Variance Computation",
    "titleAr": "تمرين البكالوريا 10: معالم ذي الحدين وحساب التوقع والتباين",
    "difficulty": "medium",
    "questionEn": "A random variable $X$ follows a Binomial distribution $X \\sim \\text{Bin}(50, 0.25)$. Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي $X$ يتبع توزيع ذي الحدين $X \\sim \\text{Bin}(50, 0.25)$. احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 13.50, \\quad \\text{Var}(X) = 9.375$",
      "$\\mathbb{E}[X] = 12.5, \\quad \\text{Var}(X) = 9.375$",
      "$\\mathbb{E}[X] = 12.5, \\quad \\text{Var}(X) = 9.8750$",
      "$\\mathbb{E}[X] = 11.50, \\quad \\text{Var}(X) = 8.8750$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 13.50, \\quad \\text{Var}(X) = 9.375$",
      "$\\mathbb{E}[X] = 12.5, \\quad \\text{Var}(X) = 9.375$",
      "$\\mathbb{E}[X] = 12.5, \\quad \\text{Var}(X) = 9.8750$",
      "$\\mathbb{E}[X] = 11.50, \\quad \\text{Var}(X) = 8.8750$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 12.5, \\quad \\text{Var}(X) = 9.375$",
    "correctIndex": 1,
    "hintEn": "For Binomial(n, p): E[X] = n*p, Var(X) = n*p*(1-p).",
    "hintAr": "لتوزيع ذي الحدين: التوقع = n*p، والتباين = n*p*(1-p).",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = n p = (50)(0.25) = 12.5$.",
      "2. Variance: $\\text{Var}(X) = n p (1 - p) = (50)(0.25)(0.75) = 9.375$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = 50 \\times 0.25 = 12.5$.",
      "٢. التباين: $\\text{Var}(X) = 50 \\times 0.25 \\times 0.75 = 9.375$."
    ],
    "teacherTipEn": "Notice that the variance of a Binomial distribution is always strictly smaller than its mean.",
    "teacherTipAr": "لاحظ أن تباين توزيع ذي الحدين دائماً أصغر تماماً من متوسطه الحسابي."
  },
  {
    "id": "egbac_prob_ch1_ex_11",
    "titleEn": "EG-Bac Exercise 11: Poisson Time Homogeneity & Zero Events",
    "titleAr": "تمرين البكالوريا 11: تجانس زمن عملية بواسون واحتمال عدم وقوع الحدث",
    "difficulty": "hots",
    "questionEn": "Events occur according to a Poisson process with average intensity $\\lambda_1 = 2$ events per hour. For an extended observation interval of $t = 2\\text{ hours}$, find the new rate parameter $\\lambda_2$ and the exact probability that no events occur during this period.",
    "questionAr": "تقع أحداث وفق عملية بواسون بمعدل شدة $\\lambda_1 = 2$ أحداث في الساعة. لفترة مراقبة ممتدة قدرها $t = 2\\text{ ساعة}$، أوجد معامل المعدل الجديد $\\lambda_2$ والاحتمال الدقيق لعدم وقوع أي حدث خلال هذه الفترة.",
    "optionsEn": [
      "$\\lambda_2 = 2, \\quad P(X = 0) = e^{-2}$",
      "$\\lambda_2 = 6, \\quad P(X = 0) = e^{-6}$",
      "$\\lambda_2 = 4, \\quad P(X = 0) = e^{-4}$",
      "$\\lambda_2 = 4, \\quad P(X = 0) = 1 - e^{-4}$"
    ],
    "optionsAr": [
      "$\\lambda_2 = 2, \\quad P(X = 0) = e^{-2}$",
      "$\\lambda_2 = 6, \\quad P(X = 0) = e^{-6}$",
      "$\\lambda_2 = 4, \\quad P(X = 0) = e^{-4}$",
      "$\\lambda_2 = 4, \\quad P(X = 0) = 1 - e^{-4}$"
    ],
    "correctAnswer": "$\\lambda_2 = 4, \\quad P(X = 0) = e^{-4}$",
    "correctIndex": 2,
    "hintEn": "Poisson rates scale linearly with interval length: lambda_t = lambda * t. Then P(X = 0) = e^(-lambda_t).",
    "hintAr": "معدل بواسون يتناسب طردياً مع طول الفترة الزمنية: lambda_t = lambda * t. ثم P(X=0) = e^(-lambda_t).",
    "stepByStepSolutionEn": [
      "1. Time scaling property: $\\lambda_2 = \\lambda_1 \\times t = (2)(2) = 4$.",
      "2. Probability of zero events: $P(X = 0) = \\frac{(\\lambda_2)^0 e^{-\\lambda_2}}{0!} = e^{-4}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية التدرج الزمني: $\\lambda_2 = 2 \\times 2 = 4$.",
      "٢. احتمال عدم وقوع أي حدث: $P(X = 0) = e^{-4}$."
    ],
    "teacherTipEn": "Zero occurrence in Poisson processes is closely connected to the Exponential inter-arrival time P(T > t).",
    "teacherTipAr": "احتمال عدم وقوع أي حدث في بواسون هو ذاته احتمال أن يتجاوز زمن الانتظار حتى أول حدث المدة t في التوزيع الأسي."
  },
  {
    "id": "egbac_prob_ch1_ex_12",
    "titleEn": "EG-Bac Exercise 12: Poisson Time Homogeneity & Zero Events",
    "titleAr": "تمرين البكالوريا 12: تجانس زمن عملية بواسون واحتمال عدم وقوع الحدث",
    "difficulty": "hots",
    "questionEn": "Events occur according to a Poisson process with average intensity $\\lambda_1 = 4$ events per hour. For an extended observation interval of $t = 2\\text{ hours}$, find the new rate parameter $\\lambda_2$ and the exact probability that no events occur during this period.",
    "questionAr": "تقع أحداث وفق عملية بواسون بمعدل شدة $\\lambda_1 = 4$ أحداث في الساعة. لفترة مراقبة ممتدة قدرها $t = 2\\text{ ساعة}$، أوجد معامل المعدل الجديد $\\lambda_2$ والاحتمال الدقيق لعدم وقوع أي حدث خلال هذه الفترة.",
    "optionsEn": [
      "$\\lambda_2 = 4, \\quad P(X = 0) = e^{-4}$",
      "$\\lambda_2 = 10, \\quad P(X = 0) = e^{-10}$",
      "$\\lambda_2 = 8, \\quad P(X = 0) = 1 - e^{-8}$",
      "$\\lambda_2 = 8, \\quad P(X = 0) = e^{-8}$"
    ],
    "optionsAr": [
      "$\\lambda_2 = 4, \\quad P(X = 0) = e^{-4}$",
      "$\\lambda_2 = 10, \\quad P(X = 0) = e^{-10}$",
      "$\\lambda_2 = 8, \\quad P(X = 0) = 1 - e^{-8}$",
      "$\\lambda_2 = 8, \\quad P(X = 0) = e^{-8}$"
    ],
    "correctAnswer": "$\\lambda_2 = 8, \\quad P(X = 0) = e^{-8}$",
    "correctIndex": 3,
    "hintEn": "Poisson rates scale linearly with interval length: lambda_t = lambda * t. Then P(X = 0) = e^(-lambda_t).",
    "hintAr": "معدل بواسون يتناسب طردياً مع طول الفترة الزمنية: lambda_t = lambda * t. ثم P(X=0) = e^(-lambda_t).",
    "stepByStepSolutionEn": [
      "1. Time scaling property: $\\lambda_2 = \\lambda_1 \\times t = (4)(2) = 8$.",
      "2. Probability of zero events: $P(X = 0) = \\frac{(\\lambda_2)^0 e^{-\\lambda_2}}{0!} = e^{-8}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية التدرج الزمني: $\\lambda_2 = 4 \\times 2 = 8$.",
      "٢. احتمال عدم وقوع أي حدث: $P(X = 0) = e^{-8}$."
    ],
    "teacherTipEn": "Zero occurrence in Poisson processes is closely connected to the Exponential inter-arrival time P(T > t).",
    "teacherTipAr": "احتمال عدم وقوع أي حدث في بواسون هو ذاته احتمال أن يتجاوز زمن الانتظار حتى أول حدث المدة t في التوزيع الأسي."
  },
  {
    "id": "egbac_prob_ch1_ex_13",
    "titleEn": "EG-Bac Exercise 13: Poisson Time Homogeneity & Zero Events",
    "titleAr": "تمرين البكالوريا 13: تجانس زمن عملية بواسون واحتمال عدم وقوع الحدث",
    "difficulty": "hots",
    "questionEn": "Events occur according to a Poisson process with average intensity $\\lambda_1 = 6$ events per hour. For an extended observation interval of $t = 2\\text{ hours}$, find the new rate parameter $\\lambda_2$ and the exact probability that no events occur during this period.",
    "questionAr": "تقع أحداث وفق عملية بواسون بمعدل شدة $\\lambda_1 = 6$ أحداث في الساعة. لفترة مراقبة ممتدة قدرها $t = 2\\text{ ساعة}$، أوجد معامل المعدل الجديد $\\lambda_2$ والاحتمال الدقيق لعدم وقوع أي حدث خلال هذه الفترة.",
    "optionsEn": [
      "$\\lambda_2 = 12, \\quad P(X = 0) = e^{-12}$",
      "$\\lambda_2 = 6, \\quad P(X = 0) = e^{-6}$",
      "$\\lambda_2 = 14, \\quad P(X = 0) = e^{-14}$",
      "$\\lambda_2 = 12, \\quad P(X = 0) = 1 - e^{-12}$"
    ],
    "optionsAr": [
      "$\\lambda_2 = 12, \\quad P(X = 0) = e^{-12}$",
      "$\\lambda_2 = 6, \\quad P(X = 0) = e^{-6}$",
      "$\\lambda_2 = 14, \\quad P(X = 0) = e^{-14}$",
      "$\\lambda_2 = 12, \\quad P(X = 0) = 1 - e^{-12}$"
    ],
    "correctAnswer": "$\\lambda_2 = 12, \\quad P(X = 0) = e^{-12}$",
    "correctIndex": 0,
    "hintEn": "Poisson rates scale linearly with interval length: lambda_t = lambda * t. Then P(X = 0) = e^(-lambda_t).",
    "hintAr": "معدل بواسون يتناسب طردياً مع طول الفترة الزمنية: lambda_t = lambda * t. ثم P(X=0) = e^(-lambda_t).",
    "stepByStepSolutionEn": [
      "1. Time scaling property: $\\lambda_2 = \\lambda_1 \\times t = (6)(2) = 12$.",
      "2. Probability of zero events: $P(X = 0) = \\frac{(\\lambda_2)^0 e^{-\\lambda_2}}{0!} = e^{-12}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية التدرج الزمني: $\\lambda_2 = 6 \\times 2 = 12$.",
      "٢. احتمال عدم وقوع أي حدث: $P(X = 0) = e^{-12}$."
    ],
    "teacherTipEn": "Zero occurrence in Poisson processes is closely connected to the Exponential inter-arrival time P(T > t).",
    "teacherTipAr": "احتمال عدم وقوع أي حدث في بواسون هو ذاته احتمال أن يتجاوز زمن الانتظار حتى أول حدث المدة t في التوزيع الأسي."
  },
  {
    "id": "egbac_prob_ch1_ex_14",
    "titleEn": "EG-Bac Exercise 14: Poisson Time Homogeneity & Zero Events",
    "titleAr": "تمرين البكالوريا 14: تجانس زمن عملية بواسون واحتمال عدم وقوع الحدث",
    "difficulty": "hots",
    "questionEn": "Events occur according to a Poisson process with average intensity $\\lambda_1 = 8$ events per hour. For an extended observation interval of $t = 2\\text{ hours}$, find the new rate parameter $\\lambda_2$ and the exact probability that no events occur during this period.",
    "questionAr": "تقع أحداث وفق عملية بواسون بمعدل شدة $\\lambda_1 = 8$ أحداث في الساعة. لفترة مراقبة ممتدة قدرها $t = 2\\text{ ساعة}$، أوجد معامل المعدل الجديد $\\lambda_2$ والاحتمال الدقيق لعدم وقوع أي حدث خلال هذه الفترة.",
    "optionsEn": [
      "$\\lambda_2 = 8, \\quad P(X = 0) = e^{-8}$",
      "$\\lambda_2 = 16, \\quad P(X = 0) = e^{-16}$",
      "$\\lambda_2 = 18, \\quad P(X = 0) = e^{-18}$",
      "$\\lambda_2 = 16, \\quad P(X = 0) = 1 - e^{-16}$"
    ],
    "optionsAr": [
      "$\\lambda_2 = 8, \\quad P(X = 0) = e^{-8}$",
      "$\\lambda_2 = 16, \\quad P(X = 0) = e^{-16}$",
      "$\\lambda_2 = 18, \\quad P(X = 0) = e^{-18}$",
      "$\\lambda_2 = 16, \\quad P(X = 0) = 1 - e^{-16}$"
    ],
    "correctAnswer": "$\\lambda_2 = 16, \\quad P(X = 0) = e^{-16}$",
    "correctIndex": 1,
    "hintEn": "Poisson rates scale linearly with interval length: lambda_t = lambda * t. Then P(X = 0) = e^(-lambda_t).",
    "hintAr": "معدل بواسون يتناسب طردياً مع طول الفترة الزمنية: lambda_t = lambda * t. ثم P(X=0) = e^(-lambda_t).",
    "stepByStepSolutionEn": [
      "1. Time scaling property: $\\lambda_2 = \\lambda_1 \\times t = (8)(2) = 16$.",
      "2. Probability of zero events: $P(X = 0) = \\frac{(\\lambda_2)^0 e^{-\\lambda_2}}{0!} = e^{-16}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية التدرج الزمني: $\\lambda_2 = 8 \\times 2 = 16$.",
      "٢. احتمال عدم وقوع أي حدث: $P(X = 0) = e^{-16}$."
    ],
    "teacherTipEn": "Zero occurrence in Poisson processes is closely connected to the Exponential inter-arrival time P(T > t).",
    "teacherTipAr": "احتمال عدم وقوع أي حدث في بواسون هو ذاته احتمال أن يتجاوز زمن الانتظار حتى أول حدث المدة t في التوزيع الأسي."
  },
  {
    "id": "egbac_prob_ch1_ex_15",
    "titleEn": "EG-Bac Exercise 15: Poisson Time Homogeneity & Zero Events",
    "titleAr": "تمرين البكالوريا 15: تجانس زمن عملية بواسون واحتمال عدم وقوع الحدث",
    "difficulty": "hots",
    "questionEn": "Events occur according to a Poisson process with average intensity $\\lambda_1 = 10$ events per hour. For an extended observation interval of $t = 2\\text{ hours}$, find the new rate parameter $\\lambda_2$ and the exact probability that no events occur during this period.",
    "questionAr": "تقع أحداث وفق عملية بواسون بمعدل شدة $\\lambda_1 = 10$ أحداث في الساعة. لفترة مراقبة ممتدة قدرها $t = 2\\text{ ساعة}$، أوجد معامل المعدل الجديد $\\lambda_2$ والاحتمال الدقيق لعدم وقوع أي حدث خلال هذه الفترة.",
    "optionsEn": [
      "$\\lambda_2 = 10, \\quad P(X = 0) = e^{-10}$",
      "$\\lambda_2 = 22, \\quad P(X = 0) = e^{-22}$",
      "$\\lambda_2 = 20, \\quad P(X = 0) = e^{-20}$",
      "$\\lambda_2 = 20, \\quad P(X = 0) = 1 - e^{-20}$"
    ],
    "optionsAr": [
      "$\\lambda_2 = 10, \\quad P(X = 0) = e^{-10}$",
      "$\\lambda_2 = 22, \\quad P(X = 0) = e^{-22}$",
      "$\\lambda_2 = 20, \\quad P(X = 0) = e^{-20}$",
      "$\\lambda_2 = 20, \\quad P(X = 0) = 1 - e^{-20}$"
    ],
    "correctAnswer": "$\\lambda_2 = 20, \\quad P(X = 0) = e^{-20}$",
    "correctIndex": 2,
    "hintEn": "Poisson rates scale linearly with interval length: lambda_t = lambda * t. Then P(X = 0) = e^(-lambda_t).",
    "hintAr": "معدل بواسون يتناسب طردياً مع طول الفترة الزمنية: lambda_t = lambda * t. ثم P(X=0) = e^(-lambda_t).",
    "stepByStepSolutionEn": [
      "1. Time scaling property: $\\lambda_2 = \\lambda_1 \\times t = (10)(2) = 20$.",
      "2. Probability of zero events: $P(X = 0) = \\frac{(\\lambda_2)^0 e^{-\\lambda_2}}{0!} = e^{-20}$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية التدرج الزمني: $\\lambda_2 = 10 \\times 2 = 20$.",
      "٢. احتمال عدم وقوع أي حدث: $P(X = 0) = e^{-20}$."
    ],
    "teacherTipEn": "Zero occurrence in Poisson processes is closely connected to the Exponential inter-arrival time P(T > t).",
    "teacherTipAr": "احتمال عدم وقوع أي حدث في بواسون هو ذاته احتمال أن يتجاوز زمن الانتظار حتى أول حدث المدة t في التوزيع الأسي."
  }
];
