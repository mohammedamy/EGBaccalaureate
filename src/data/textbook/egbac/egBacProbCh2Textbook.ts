import type { SolvedProblem } from '../../../types/curriculum';

export const egBacProbCh2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_prob_ch2_se_01",
    "titleEn": "EG-Bac Model Example 1: Continuous Probability Density Normalization & CDF",
    "titleAr": "مثال البكالوريا النموذجي ١: معايرة دالة الكثافة الاحتمالية ودالة التوزيع التراكمي",
    "difficulty": "easy",
    "questionEn": "A continuous random variable $X$ has probability density function (PDF) $f(x) = c x(2 - x)$ for $0 \\le x \\le 2$, and $f(x) = 0$ elsewhere. Determine the normalizing constant $c$ and the cumulative distribution function $F(x)$ for $x \\in [0, 2]$.",
    "questionAr": "متغير عشوائي متصل $X$ دالة كثافته الاحتمالية $f(x) = c x(2 - x)$ للفترة $0 \\le x \\le 2$، وتساوي صفراً فيما عدا ذلك. أوجد ثابت المعايرة $c$ ودالة التوزيع التراكمي $F(x)$ على الفتره $[0, 2]$.",
    "optionsEn": [
      "$c = \\frac{3}{4}, \\quad F(x) = \\frac{3}{4}\\left(x^2 - \\frac{x^3}{3}\\right)$",
      "$c = \\frac{1}{2}, \\quad F(x) = \\frac{1}{2}\\left(x^2 - \\frac{x^3}{3}\\right)$",
      "$c = \\frac{3}{4}, \\quad F(x) = \\frac{3}{4}(2x - x^2)$",
      "$c = 1, \\quad F(x) = x^2 - \\frac{x^3}{3}$"
    ],
    "optionsAr": [
      "$c = \\frac{3}{4}, \\quad F(x) = \\frac{3}{4}\\left(x^2 - \\frac{x^3}{3}\\right)$",
      "$c = \\frac{1}{2}, \\quad F(x) = \\frac{1}{2}\\left(x^2 - \\frac{x^3}{3}\\right)$",
      "$c = \\frac{3}{4}, \\quad F(x) = \\frac{3}{4}(2x - x^2)$",
      "$c = 1, \\quad F(x) = x^2 - \\frac{x^3}{3}$"
    ],
    "correctAnswer": "$c = \\frac{3}{4}, \\quad F(x) = \\frac{3}{4}\\left(x^2 - \\frac{x^3}{3}\\right)$",
    "correctIndex": 0,
    "hintEn": "Total area under PDF must be 1: int_0^2 f(x) dx = 1. Then F(x) = int_0^x f(u) du.",
    "hintAr": "المساحة الكلية تحت دالة الكثافة تساوي 1، ثم دالة التوزيع هي التكامل من 0 إلى x.",
    "stepByStepSolutionEn": [
      "1. Normalization integral: $\\int_0^2 c(2x - x^2) \\, dx = c \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = c\\left(4 - \\frac{8}{3}\\right) = c\\left(\\frac{4}{3}\\right) = 1 \\implies c = \\frac{3}{4}$.",
      "2. Cumulative Distribution Function: $F(x) = \\int_0^x \\frac{3}{4}(2u - u^2) \\, du = \\frac{3}{4}\\left(x^2 - \\frac{x^3}{3}\\right)$ for $x \\in [0, 2]$.",
      "3. Verify endpoints: $F(0) = 0$ and $F(2) = \\frac{3}{4}(4 - \\frac{8}{3}) = 1$."
    ],
    "stepByStepSolutionAr": [
      "١. تكامل المعايرة: $c \\int_0^2 (2x - x^2) \\, dx = c \\left(4 - \\frac{8}{3}\\right) = \\frac{4c}{3} = 1 \\implies c = \\frac{3}{4}$.",
      "٢. دالة التوزيع التراكمي: $F(x) = \\int_0^x \\frac{3}{4}(2u - u^2) \\, du = \\frac{3}{4}\\left(x^2 - \\frac{x^3}{3}\\right)$.",
      "٣. التحقق من الحدود: $F(0) = 0$ و $F(2) = 1$."
    ],
    "teacherTipEn": "By symmetry about x = 1, the mean and median must both be exactly 1.",
    "teacherTipAr": "بالتماثل حول x = 1، المتوسط والوسيط كلاهما يساوي 1 تماماً."
  },
  {
    "id": "egbac_prob_ch2_se_02",
    "titleEn": "EG-Bac Model Example 2: Continuous Expected Value & Variance",
    "titleAr": "مثال البكالوريا النموذجي ٢: التوقع والتباين لمتغير عشوائي متصل",
    "difficulty": "medium",
    "questionEn": "For the continuous density $f(x) = \\frac{3}{4}x(2 - x)$ on $[0, 2]$, calculate the expected value $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "لدالة الكثافة المتصلة $f(x) = \\frac{3}{4}x(2 - x)$ على الفتره $[0, 2]$، احسب التوقع الرياضي $\\mathbb{E}[X]$ والتباين $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{5} = 0.20$",
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{3} \\approx 0.33$",
      "$\\mathbb{E}[X] = \\frac{4}{3}, \\quad \\text{Var}(X) = 0.20$",
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{4} = 0.25$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{5} = 0.20$",
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{3} \\approx 0.33$",
      "$\\mathbb{E}[X] = \\frac{4}{3}, \\quad \\text{Var}(X) = 0.20$",
      "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{4} = 0.25$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 1, \\quad \\text{Var}(X) = \\frac{1}{5} = 0.20$",
    "correctIndex": 0,
    "hintEn": "E[X] = int x*f(x) dx, E[X^2] = int x^2*f(x) dx, Var(X) = E[X^2] - (E[X])^2.",
    "hintAr": "احسب العزم الأول والعزم الثاني بالتكامل، ثم طبق قانون التباين.",
    "stepByStepSolutionEn": [
      "1. Mean: $\\mathbb{E}[X] = \\int_0^2 x \\cdot \\frac{3}{4}(2x - x^2) \\, dx = \\frac{3}{4} \\left[ \\frac{2x^3}{3} - \\frac{x^4}{4} \\right]_0^2 = \\frac{3}{4}\\left(\\frac{16}{3} - 4\\right) = \\frac{3}{4}\\left(\\frac{4}{3}\\right) = 1$.",
      "2. Second moment: $\\mathbb{E}[X^2] = \\int_0^2 x^2 \\cdot \\frac{3}{4}(2x - x^2) \\, dx = \\frac{3}{4} \\left[ \\frac{2x^4}{4} - \\frac{x^5}{5} \\right]_0^2 = \\frac{3}{4}\\left(8 - \\frac{32}{5}\\right) = \\frac{3}{4}\\left(\\frac{8}{5}\\right) = \\frac{6}{5} = 1.2$.",
      "3. Variance: $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = 1.2 - 1^2 = 0.2 = \\frac{1}{5}$."
    ],
    "stepByStepSolutionAr": [
      "١. التوقع: $\\mathbb{E}[X] = \\frac{3}{4} \\int_0^2 (2x^2 - x^3) \\, dx = \\frac{3}{4}\\left(\\frac{16}{3} - 4\\right) = 1$.",
      "٢. العزم الثاني: $\\mathbb{E}[X^2] = \\frac{3}{4} \\int_0^2 (2x^3 - x^4) \\, dx = \\frac{3}{4}\\left(8 - \\frac{32}{5}\\right) = \\frac{6}{5} = 1.2$.",
      "٣. التباين: $\\text{Var}(X) = 1.2 - 1^2 = 0.2 = \\frac{1}{5}$."
    ],
    "teacherTipEn": "Notice how symmetry around x=1 immediately gives E[X] = 1 without even performing the integration!",
    "teacherTipAr": "التماثل حول x=1 يعطي التوقع مساوياً لـ 1 مباشرة دون حاجة لإجراء التكامل!"
  },
  {
    "id": "egbac_prob_ch2_se_03",
    "titleEn": "EG-Bac Model Example 3: Standard Normal Transformation & Z-Scores",
    "titleAr": "مثال البكالوريا النموذجي ٣: التحويل المعياري والتوزيع الطبيعي (Z-Score)",
    "difficulty": "medium",
    "questionEn": "Exam scores are normally distributed with mean $\\mu = 70$ and standard deviation $\\sigma = 10$ ($X \\sim \\mathcal{N}(70, 100)$). Find the probability that a randomly chosen student scores between $60$ and $85$, given that $\\Phi(1.5) \\approx 0.9332$ and $\\Phi(1.0) \\approx 0.8413$.",
    "questionAr": "درجات اختبار تتبع توزيعاً طبيعياً بمتوسط $\\mu = 70$ وانحراف معياري $\\sigma = 10$ ($X \\sim \\mathcal{N}(70, 100)$). احسب احتمال أن يحصل طالب عشوائي على درجة بين $60$ و $85$، علماً بأن $\\Phi(1.5) \\approx 0.9332$ و $\\Phi(1.0) \\approx 0.8413$.",
    "optionsEn": [
      "$P(60 \\le X \\le 85) = \\Phi(1.5) + \\Phi(1.0) - 1 \\approx 0.7745$",
      "$P(60 \\le X \\le 85) = \\Phi(1.5) - \\Phi(1.0) \\approx 0.0919$",
      "$P(60 \\le X \\le 85) = 1 - \\Phi(1.5) \\approx 0.0668$",
      "$P(60 \\le X \\le 85) \\approx 0.6826$"
    ],
    "optionsAr": [
      "$P(60 \\le X \\le 85) = \\Phi(1.5) + \\Phi(1.0) - 1 \\approx 0.7745$",
      "$P(60 \\le X \\le 85) = \\Phi(1.5) - \\Phi(1.0) \\approx 0.0919$",
      "$P(60 \\le X \\le 85) = 1 - \\Phi(1.5) \\approx 0.0668$",
      "$P(60 \\le X \\le 85) \\approx 0.6826$"
    ],
    "correctAnswer": "$P(60 \\le X \\le 85) = \\Phi(1.5) + \\Phi(1.0) - 1 \\approx 0.7745$",
    "correctIndex": 0,
    "hintEn": "Standardize: Z = (X - mu)/sigma. P(a <= X <= b) = Phi(z_b) - Phi(z_a), and Phi(-z) = 1 - Phi(z).",
    "hintAr": "حول إلى الدرجة المعيارية Z = (X - mu)/sigma واستخدم خاصية التماثل Phi(-z) = 1 - Phi(z).",
    "stepByStepSolutionEn": [
      "1. Standardize lower bound: $Z_1 = \\frac{60 - 70}{10} = -1.0$.",
      "2. Standardize upper bound: $Z_2 = \\frac{85 - 70}{10} = 1.5$.",
      "3. Use symmetry of standard normal: $\\Phi(-1.0) = 1 - \\Phi(1.0) = 1 - 0.8413 = 0.1587$.",
      "4. Probability: $P(-1.0 \\le Z \\le 1.5) = \\Phi(1.5) - \\Phi(-1.0) = 0.9332 - 0.1587 = 0.7745$ (or $77.45\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الحد الأدنى: $Z_1 = \\frac{60 - 70}{10} = -1.0$.",
      "٢. تحويل الحد الأعلى: $Z_2 = \\frac{85 - 70}{10} = 1.5$.",
      "٣. خاصية التماثل: $\\Phi(-1.0) = 1 - \\Phi(1.0) = 1 - 0.8413 = 0.1587$.",
      "٤. الاحتمال المطلوب: $0.9332 - 0.1587 = 0.7745$ (أي $77.45\\%$)."
    ],
    "teacherTipEn": "Always draw the bell curve and shade the target region to verify the area visually.",
    "teacherTipAr": "ارسم دائماً منحنى الجرس وظلل المنطقة المطلوبة للتأكد بصرياً من منطقية الناتج."
  },
  {
    "id": "egbac_prob_ch2_se_04",
    "titleEn": "EG-Bac Model Example 4: Exponential Distribution & Memoryless Property",
    "titleAr": "مثال البكالوريا النموذجي ٤: التوزيع الأسي وخاصية فقدان الذاكرة المستمرة",
    "difficulty": "medium",
    "questionEn": "The lifespan of an electronic component follows an exponential distribution with mean $\\mathbb{E}[T] = 1000\\text{ hours}$ (rate $\\lambda = 0.001\\text{ hr}^{-1}$). If a component has already functioned continuously for $800\\text{ hours}$, what is the conditional probability that it will survive at least an additional $500\\text{ hours}$ ($P(T > 1300 | T > 800)$)?",
    "questionAr": "عمر افتراضي لمكون إلكتروني يتبع توزيعاً أسياً بمتوسط $\\mathbb{E}[T] = 1000\\text{ ساعة}$ (معدل $\\lambda = 0.001\\text{ ساعة}^{-1}$). إذا كان المكون قد عمل بالفعل لمدة $800\\text{ ساعة}$، فما احتمال استمراره في العمل لمدة $500\\text{ ساعة}$ إضافية على الأقل ($P(T > 1300 | T > 800)$)؟",
    "optionsEn": [
      "$P(T > 1300 | T > 800) = P(T > 500) = e^{-0.5} \\approx 0.6065$",
      "$P(T > 1300 | T > 800) = e^{-1.3} \\approx 0.2725$",
      "$P(T > 1300 | T > 800) = e^{-0.8} \\approx 0.4493$",
      "$P(T > 1300 | T > 800) = 1 - e^{-0.5} \\approx 0.3935$"
    ],
    "optionsAr": [
      "$P(T > 1300 | T > 800) = P(T > 500) = e^{-0.5} \\approx 0.6065$",
      "$P(T > 1300 | T > 800) = e^{-1.3} \\approx 0.2725$",
      "$P(T > 1300 | T > 800) = e^{-0.8} \\approx 0.4493$",
      "$P(T > 1300 | T > 800) = 1 - e^{-0.5} \\approx 0.3935$"
    ],
    "correctAnswer": "$P(T > 1300 | T > 800) = P(T > 500) = e^{-0.5} \\approx 0.6065$",
    "correctIndex": 0,
    "hintEn": "By the memoryless property: P(T > s + t | T > s) = P(T > t) = e^(-lambda * t).",
    "hintAr": "بخاصية فقدان الذاكرة: P(T > s + t | T > s) = P(T > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. Memoryless property states: $P(T > s + t | T > s) = P(T > t)$.",
      "2. Here $s = 800$ and $t = 500$, so $s + t = 1300$.",
      "3. The conditional probability equals the unconditional survival probability for 500 hours:",
      "   $$P(T > 500) = e^{-\\lambda t} = e^{-(0.001)(500)} = e^{-0.5} \\approx 0.6065$$."
    ],
    "stepByStepSolutionAr": [
      "١. خاصية فقدان الذاكرة: $P(T > s + t | T > s) = P(T > t)$.",
      "٢. هنا $s = 800$ و $t = 500$، إذن $s + t = 1300$.",
      "٣. الاحتمال الشرطي يعادل تماماً البقاء لمدة 500 ساعة جديدة كأنه جديد:",
      "   $$P(T > 500) = e^{-0.001 \\times 500} = e^{-0.5} \\approx 0.6065$$."
    ],
    "teacherTipEn": "The Exponential distribution is the unique continuous distribution possessing the memoryless property.",
    "teacherTipAr": "التوزيع الأسي هو التوزيع المتصل الوحيد في علم الإحصاء الذي يتصف بخاصية فقدان الذاكرة."
  },
  {
    "id": "egbac_prob_ch2_se_05",
    "titleEn": "EG-Bac Model Example 5: Joint Density Function & Marginal Distributions",
    "titleAr": "مثال البكالوريا النموذجي ٥: دالة الكثافة المشتركة والتوزيعات الهامشية",
    "difficulty": "hots",
    "questionEn": "Let $(X, Y)$ have joint density $f_{X,Y}(x, y) = 8xy$ on the triangular domain $0 \\le y \\le x \\le 1$. Determine the marginal density $f_X(x)$ and conditional expectation $\\mathbb{E}[Y | X = x]$.",
    "questionAr": "ليكن $(X, Y)$ متجهين عشوائيين دالة كثافتهما المشتركة $f_{X,Y}(x, y) = 8xy$ على النطاق المثلثي $0 \\le y \\le x \\le 1$. أوجد الكثافة الهامشية $f_X(x)$ والتوقع الشرطي $\\mathbb{E}[Y | X = x]$.",
    "optionsEn": [
      "$f_X(x) = 4x^3, \\quad \\mathbb{E}[Y | X = x] = \\frac{2}{3}x$",
      "$f_X(x) = 4x, \\quad \\mathbb{E}[Y | X = x] = \\frac{1}{2}x$",
      "$f_X(x) = 8x^2, \\quad \\mathbb{E}[Y | X = x] = \\frac{3}{4}x$",
      "$f_X(x) = 4x^3, \\quad \\mathbb{E}[Y | X = x] = \\frac{1}{2}x$"
    ],
    "optionsAr": [
      "$f_X(x) = 4x^3, \\quad \\mathbb{E}[Y | X = x] = \\frac{2}{3}x$",
      "$f_X(x) = 4x, \\quad \\mathbb{E}[Y | X = x] = \\frac{1}{2}x$",
      "$f_X(x) = 8x^2, \\quad \\mathbb{E}[Y | X = x] = \\frac{3}{4}x$",
      "$f_X(x) = 4x^3, \\quad \\mathbb{E}[Y | X = x] = \\frac{1}{2}x$"
    ],
    "correctAnswer": "$f_X(x) = 4x^3, \\quad \\mathbb{E}[Y | X = x] = \\frac{2}{3}x$",
    "correctIndex": 0,
    "hintEn": "Integrate over y from 0 to x to find f_X(x). Then f(y|x) = f(x,y)/f_X(x), and E[Y|X=x] = int y f(y|x) dy.",
    "hintAr": "كامل بالنسبة لـ y من 0 إلى x للحصول على الكثافة الهامشية، ثم احسب الكثافة الشرطية والتوقع.",
    "stepByStepSolutionEn": [
      "1. Marginal density $f_X(x)$: $\\int_0^x 8xy \\, dy = 8x \\left[ \\frac{y^2}{2} \\right]_0^x = 4x(x^2) = 4x^3$ for $x \\in [0, 1]$.",
      "2. Conditional density: $f_{Y|X}(y | x) = \\frac{f(x, y)}{f_X(x)} = \\frac{8xy}{4x^3} = \\frac{2y}{x^2}$ for $0 \\le y \\le x$.",
      "3. Conditional expectation: $\\mathbb{E}[Y | X = x] = \\int_0^x y \\left(\\frac{2y}{x^2}\\right) \\, dy = \\frac{2}{x^2} \\left[ \\frac{y^3}{3} \\right]_0^x = \\frac{2}{x^2} \\cdot \\frac{x^3}{3} = \\frac{2}{3}x$."
    ],
    "stepByStepSolutionAr": [
      "١. الكثافة الهامشية: $f_X(x) = \\int_0^x 8xy \\, dy = 8x \\left[\\frac{y^2}{2}\\right]_0^x = 4x^3$.",
      "٢. الكثافة الشرطية: $f_{Y|X}(y | x) = \\frac{8xy}{4x^3} = \\frac{2y}{x^2}$ للمجال $0 \\le y \\le x$.",
      "٣. التوقع الشرطي: $\\mathbb{E}[Y | X = x] = \\int_0^x y \\left(\\frac{2y}{x^2}\\right) \\, dy = \\frac{2}{3}x$."
    ],
    "teacherTipEn": "Notice that E[Y|X=x] is linear in x, which defines the regression line of Y on X.",
    "teacherTipAr": "لاحظ أن التوقع الشرطي دالة خطية في x، وهي التي تمثل رياضياً منحنى الانحدار لـ Y على X."
  },
  {
    "id": "egbac_prob_ch2_se_06",
    "titleEn": "EG-Bac Model Example 6: Covariance & Correlation Coefficient",
    "titleAr": "مثال البكالوريا النموذجي ٦: التغاير ومعامل الارتباط الخطي لبيرسون",
    "difficulty": "medium",
    "questionEn": "Let $X$ and $Y$ have variances $\\text{Var}(X) = 16$ and $\\text{Var}(Y) = 25$, with covariance $\\text{Cov}(X, Y) = 12$. Compute the Pearson correlation coefficient $\\rho_{XY}$ and the variance of their sum $\\text{Var}(X + Y)$.",
    "questionAr": "ليكن لـ $X$ و $Y$ التباينان $\\text{Var}(X) = 16$ و $\\text{Var}(Y) = 25$، والتغاير $\\text{Cov}(X, Y) = 12$. احسب معامل ارتباط بيرسون $\\rho_{XY}$ وتباين المجموع $\\text{Var}(X + Y)$.",
    "optionsEn": [
      "$\\rho_{XY} = 0.60, \\quad \\text{Var}(X + Y) = 65$",
      "$\\rho_{XY} = 0.48, \\quad \\text{Var}(X + Y) = 53$",
      "$\\rho_{XY} = 0.60, \\quad \\text{Var}(X + Y) = 41$",
      "$\\rho_{XY} = 0.30, \\quad \\text{Var}(X + Y) = 65$"
    ],
    "optionsAr": [
      "$\\rho_{XY} = 0.60, \\quad \\text{Var}(X + Y) = 65$",
      "$\\rho_{XY} = 0.48, \\quad \\text{Var}(X + Y) = 53$",
      "$\\rho_{XY} = 0.60, \\quad \\text{Var}(X + Y) = 41$",
      "$\\rho_{XY} = 0.30, \\quad \\text{Var}(X + Y) = 65$"
    ],
    "correctAnswer": "$\\rho_{XY} = 0.60, \\quad \\text{Var}(X + Y) = 65$",
    "correctIndex": 0,
    "hintEn": "rho = Cov(X,Y) / (sigma_X * sigma_Y), and Var(X+Y) = Var(X) + Var(Y) + 2*Cov(X,Y).",
    "hintAr": "معامل الارتباط هو التغاير مقسوماً على حاصل ضرب الانحرافين المعياريين، وتباين المجموع يضيف ضعفي التغاير.",
    "stepByStepSolutionEn": [
      "1. Standard deviations: $\\sigma_X = \\sqrt{16} = 4$, $\\sigma_Y = \\sqrt{25} = 5$.",
      "2. Correlation coefficient: $\\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{12}{(4)(5)} = \\frac{12}{20} = 0.60$.",
      "3. Variance of sum: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y) = 16 + 25 + 2(12) = 41 + 24 = 65$."
    ],
    "stepByStepSolutionAr": [
      "١. الانحرافان المعياريان: $\\sigma_X = 4$ و $\\sigma_Y = 5$.",
      "٢. معامل الارتباط: $\\rho_{XY} = \\frac{12}{4 \\times 5} = \\frac{12}{20} = 0.60$.",
      "٣. تباين المجموع: $\\text{Var}(X + Y) = 16 + 25 + 2(12) = 41 + 24 = 65$."
    ],
    "teacherTipEn": "Correlation rho is always bounded between -1 and +1 by Cauchy-Schwarz inequality.",
    "teacherTipAr": "معامل الارتباط محصور حتماً بين -1 و +1 بفضل متباينة كوشي-شوارتز الشهيرة."
  },
  {
    "id": "egbac_prob_ch2_se_07",
    "titleEn": "EG-Bac Model Example 7: Central Limit Theorem for Sample Means",
    "titleAr": "مثال البكالوريا النموذجي ٧: نظرية النهاية المركزية (CLT) لمتوسطات العينات",
    "difficulty": "hots",
    "questionEn": "A random sample of size $n = 64$ is drawn from a population with mean $\\mu = 50$ and standard deviation $\\sigma = 16$. By the Central Limit Theorem, find the approximate distribution of the sample mean $\\bar{X}_{64}$ and the probability $P(\\bar{X}_{64} > 54)$, given $\\Phi(2.0) \\approx 0.9772$.",
    "questionAr": "سُحبت عينة عشوائية حجمها $n = 64$ من مجتمع إحصائي متوسطه $\\mu = 50$ وانحرافه المعياري $\\sigma = 16$. وفق نظرية النهاية المركزية، أوجد التوزيع التقريبي لمتوسط العينة $\\bar{X}_{64}$ واحتمال $P(\\bar{X}_{64} > 54)$، علماً بأن $\\Phi(2.0) \\approx 0.9772$.",
    "optionsEn": [
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 4), \\quad P(\\bar{X}_{64} > 54) = 1 - \\Phi(2.0) \\approx 0.0228$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 16), \\quad P(\\bar{X}_{64} > 54) \\approx 0.1587$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 2), \\quad P(\\bar{X}_{64} > 54) \\approx 0.0013$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 4), \\quad P(\\bar{X}_{64} > 54) \\approx 0.9772$"
    ],
    "optionsAr": [
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 4), \\quad P(\\bar{X}_{64} > 54) = 1 - \\Phi(2.0) \\approx 0.0228$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 16), \\quad P(\\bar{X}_{64} > 54) \\approx 0.1587$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 2), \\quad P(\\bar{X}_{64} > 54) \\approx 0.0013$",
      "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 4), \\quad P(\\bar{X}_{64} > 54) \\approx 0.9772$"
    ],
    "correctAnswer": "$\\bar{X}_{64} \\approx \\mathcal{N}(50, 4), \\quad P(\\bar{X}_{64} > 54) = 1 - \\Phi(2.0) \\approx 0.0228$",
    "correctIndex": 0,
    "hintEn": "By CLT: X_bar ~ N(mu, sigma^2 / n). Standard error is sigma / sqrt(n).",
    "hintAr": "بنظرية النهاية المركزية: متوسط العينة يقترب من التوزيع الطبيعي بانحراف معياري sigma / sqrt(n).",
    "stepByStepSolutionEn": [
      "1. Standard error of the mean: $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{16}{\\sqrt{64}} = \\frac{16}{8} = 2$.",
      "2. Variance of sample mean: $\\sigma_{\\bar{X}}^2 = 2^2 = 4 \\implies \\bar{X}_{64} \\sim \\mathcal{N}(50, 4)$.",
      "3. Compute Z-score: $Z = \\frac{54 - 50}{2} = \\frac{4}{2} = 2.0$.",
      "4. Tail probability: $P(\\bar{X} > 54) = 1 - \\Phi(2.0) = 1 - 0.9772 = 0.0228$ (or $2.28\\%$)."
    ],
    "stepByStepSolutionAr": [
      "١. الخطأ المعياري للمتوسط: $\\sigma_{\\bar{X}} = \\frac{16}{\\sqrt{64}} = 2$.",
      "٢. تباين متوسط العينة: $2^2 = 4 \\implies \\bar{X} \\sim \\mathcal{N}(50, 4)$.",
      "٣. الدرجة المعيارية: $Z = \\frac{54 - 50}{2} = 2.0$.",
      "٤. احتمال الذيل الأيمن: $1 - \\Phi(2.0) = 1 - 0.9772 = 0.0228$ (أي $2.28\\%$)."
    ],
    "teacherTipEn": "CLT is the cornerstone of statistical inference: sample means become Gaussian regardless of population shape.",
    "teacherTipAr": "نظرية النهاية المركزية هي حجر الزاوية في الاستدلال الإحصائي: متوسطات العينات تصبح طبيعية مهما كان شكل مجتمع الأصل."
  },
  {
    "id": "egbac_prob_ch2_se_08",
    "titleEn": "EG-Bac Model Example 8: Continuous Uniform Distribution & Interval Probability",
    "titleAr": "مثال البكالوريا النموذجي ٨: التوزيع المنتظم المتصل واحتمال الفترات",
    "difficulty": "easy",
    "questionEn": "A continuous random variable $X$ is uniformly distributed over the interval $[2, 8]$ ($X \\sim \\mathcal{U}(2, 8)$). Compute its variance $\\text{Var}(X)$ and the probability $P(3 \\le X \\le 6)$.",
    "questionAr": "متغير عشوائي متصل $X$ يتبع التوزيع المنتظم على الفتره $[2, 8]$ ($X \\sim \\mathcal{U}(2, 8)$). احسب تباينه $\\text{Var}(X)$ والاحتمال $P(3 \\le X \\le 6)$.",
    "optionsEn": [
      "$\\text{Var}(X) = 3, \\quad P(3 \\le X \\le 6) = \\frac{3}{6} = 0.50$",
      "$\\text{Var}(X) = 4, \\quad P(3 \\le X \\le 6) = 0.60$",
      "$\\text{Var}(X) = 3, \\quad P(3 \\le X \\le 6) = 0.40$",
      "$\\text{Var}(X) = 6, \\quad P(3 \\le X \\le 6) = 0.50$"
    ],
    "optionsAr": [
      "$\\text{Var}(X) = 3, \\quad P(3 \\le X \\le 6) = \\frac{3}{6} = 0.50$",
      "$\\text{Var}(X) = 4, \\quad P(3 \\le X \\le 6) = 0.60$",
      "$\\text{Var}(X) = 3, \\quad P(3 \\le X \\le 6) = 0.40$",
      "$\\text{Var}(X) = 6, \\quad P(3 \\le X \\le 6) = 0.50$"
    ],
    "correctAnswer": "$\\text{Var}(X) = 3, \\quad P(3 \\le X \\le 6) = \\frac{3}{6} = 0.50$",
    "correctIndex": 0,
    "hintEn": "For U(a, b): Var(X) = (b - a)^2 / 12. P(c <= X <= d) = (d - c) / (b - a).",
    "hintAr": "للتوزيع المنتظم: التباين = (b - a)^2 / 12، والاحتمال هو نسبة طول الفترة المطلوبة إلى طول الفترة الكلية.",
    "stepByStepSolutionEn": [
      "1. Total interval width: $b - a = 8 - 2 = 6$.",
      "2. Variance: $\\text{Var}(X) = \\frac{(b - a)^2}{12} = \\frac{6^2}{12} = \\frac{36}{12} = 3$.",
      "3. Sub-interval probability: $P(3 \\le X \\le 6) = \\frac{6 - 3}{8 - 2} = \\frac{3}{6} = 0.50$."
    ],
    "stepByStepSolutionAr": [
      "١. طول الفترة الكلية: $8 - 2 = 6$.",
      "٢. التباين: $\\text{Var}(X) = \\frac{6^2}{12} = \\frac{36}{12} = 3$.",
      "٣. احتمال الفترة الجزئية: $P(3 \\le X \\le 6) = \\frac{6 - 3}{6} = \\frac{3}{6} = 0.50$."
    ],
    "teacherTipEn": "In uniform distributions, probability is purely proportional to interval length.",
    "teacherTipAr": "في التوزيع المنتظم، الاحتمال يتناسب طردياً تماماً مع الطول الهندسي للفترة."
  },
  {
    "id": "egbac_prob_ch2_se_09",
    "titleEn": "EG-Bac Model Example 9: Convolution & Sum of Independent Uniforms (Triangular Distribution)",
    "titleAr": "مثال البكالوريا النموذجي ٩: الالتفاف ومجموع متغيرين منتظمين مستقلين (التوزيع المثلثي)",
    "difficulty": "hots",
    "questionEn": "Let $X_1, X_2 \\overset{\\text{iid}}{\\sim} \\mathcal{U}(0, 1)$ be two independent uniform random variables. Find the PDF of their sum $S = X_1 + X_2$ on $[0, 2]$ via convolution, and compute $P(S > 1.5)$.",
    "questionAr": "ليكن $X_1, X_2$ متغيرين عشوائيين مستقلين يتبعان التوزيع المنتظم القياسي $\\mathcal{U}(0, 1)$. أوجد دالة الكثافة لمجموعهما $S = X_1 + X_2$ على الفتره $[0, 2]$ بطريقة الالتفاف، واحسب $P(S > 1.5)$.",
    "optionsEn": [
      "$P(S > 1.5) = \\frac{1}{2}(2 - 1.5)^2 = 0.125$",
      "$P(S > 1.5) = 0.250$",
      "$P(S > 1.5) = 0.500$",
      "$P(S > 1.5) = 0.0625$"
    ],
    "optionsAr": [
      "$P(S > 1.5) = \\frac{1}{2}(2 - 1.5)^2 = 0.125$",
      "$P(S > 1.5) = 0.250$",
      "$P(S > 1.5) = 0.500$",
      "$P(S > 1.5) = 0.0625$"
    ],
    "correctAnswer": "$P(S > 1.5) = \\frac{1}{2}(2 - 1.5)^2 = 0.125$",
    "correctIndex": 0,
    "hintEn": "The sum of 2 i.i.d. U(0,1) variables forms a symmetric triangular distribution on [0, 2] peaking at s = 1.",
    "hintAr": "مجموع متغيرين منتظمين قياسيين يشكل توزيعاً مثلثياً متماثلاً على [0, 2] تبلغ ذروته عند 1.",
    "stepByStepSolutionEn": [
      "1. Convolution formula: $f_S(s) = \\begin{cases} s & 0 \\le s \\le 1 \\\\ 2 - s & 1 < s \\le 2 \\end{cases}$.",
      "2. For $s > 1.5$, integrate the upper branch: $P(S > 1.5) = \\int_{1.5}^2 (2 - s) \\, ds$.",
      "3. Triangle area formula: $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(2 - 1.5)(2 - 1.5) = \\frac{1}{2}(0.5)^2 = 0.125$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة الكثافة الناتجة عن الالتفاف هي التوزيع المثلثي: $f_S(s) = 2 - s$ للقيم بين 1 و 2.",
      "٢. حساب المساحة الهندسية للمثلث الأيمن فوق 1.5:",
      "   $$\\frac{1}{2} \\times 0.5 \\times 0.5 = 0.125$$."
    ],
    "teacherTipEn": "This is the simplest non-trivial demonstration of how summation drives distributions toward bell-shaped symmetry.",
    "teacherTipAr": "هذا أبسط برهان رياضي على أن جمع المتغيرات العشوائية يبدأ فوراً بتكوين شكل الجرس المتماثل تمهيداً للتوزيع الطبيعي."
  },
  {
    "id": "egbac_prob_ch2_se_10",
    "titleEn": "EG-Bac Model Example 10: Weak Law of Large Numbers (WLLN) Convergence Bound",
    "titleAr": "مثال البكالوريا النموذجي ١٠: قانون الأعداد الكبيرة الضعيف وتقدير سرعة التقارب",
    "difficulty": "hots",
    "questionEn": "Let $X_1, X_2, \\dots, X_n$ be i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2 = 9$. By Chebyshev's inequality applied to the sample mean $\\bar{X}_n$, what minimum sample size $n$ guarantees that $P(|\\bar{X}_n - \\mu| < 0.5) \\ge 0.96$?",
    "questionAr": "لتكن $X_1, X_2, \\dots, X_n$ متغيرات عشوائية مستقلة ومتطابقة التوزيع بمتوسط $\\mu$ وتباين $\\sigma^2 = 9$. بتطبيق متباينة تشيبيشيف على متوسط العينة $\\bar{X}_n$، ما أقل حجم عينة $n$ يضمن أن $P(|\\bar{X}_n - \\mu| < 0.5) \\ge 0.96$؟",
    "optionsEn": [
      "$n \\ge 900$",
      "$n \\ge 300$",
      "$n \\ge 600$",
      "$n \\ge 1200$"
    ],
    "optionsAr": [
      "$n \\ge 900$",
      "$n \\ge 300$",
      "$n \\ge 600$",
      "$n \\ge 1200$"
    ],
    "correctAnswer": "$n \\ge 900$",
    "correctIndex": 0,
    "hintEn": "Chebyshev on sample mean: P(|X_bar - mu| >= epsilon) <= Var(X_bar)/epsilon^2 = sigma^2 / (n * epsilon^2) <= 0.04.",
    "hintAr": "طبق متباينة تشيبيشيف على متوسط العينة: sigma^2 / (n * epsilon^2) <= 1 - 0.96 = 0.04.",
    "stepByStepSolutionEn": [
      "1. Variance of sample mean: $\\text{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n} = \\frac{9}{n}$.",
      "2. Chebyshev tail bound: $P(|\\bar{X}_n - \\mu| \\ge \\epsilon) \\le \\frac{\\text{Var}(\\bar{X}_n)}{\\epsilon^2} = \\frac{9}{n (0.5)^2} = \\frac{9}{0.25 n} = \\frac{36}{n}$.",
      "3. We require $P(|\\bar{X}_n - \\mu| < 0.5) \\ge 0.96 \\iff \\frac{36}{n} \\le 0.04 = \\frac{1}{25}$.",
      "4. Solve for $n$: $n \\ge 36 \\times 25 = 900$."
    ],
    "stepByStepSolutionAr": [
      "١. تباين متوسط العينة: $\\text{Var}(\\bar{X}_n) = \\frac{9}{n}$.",
      "٢. حد تشيبيشيف للذيل: $P(|\\bar{X}_n - \\mu| \\ge 0.5) \\le \\frac{9}{n (0.5)^2} = \\frac{36}{n}$.",
      "٣. الشرط المطلوب: $\\frac{36}{n} \\le 0.04 \\implies n \\ge \\frac{36}{0.04} = 900$."
    ],
    "teacherTipEn": "WLLN establishes that empirical averages converge in probability to true theoretical expectations as sample size grows.",
    "teacherTipAr": "يبرهن قانون الأعداد الكبيرة الضعيف أن المتوسطات التجريبية تقترب بالاحتمال من المتوسط الحقيقي كلما زاد حجم العينة."
  }
];

export const egBacProbCh2Exercises: SolvedProblem[] = [
  {
    "id": "egbac_prob_ch2_ex_01",
    "titleEn": "EG-Bac Exercise 1: Uniform Density Moments Evaluation",
    "titleAr": "تمرين البكالوريا 1: حساب عزوم التوزيع المنتظم المتصل",
    "difficulty": "medium",
    "questionEn": "A continuous random variable $X$ represents the waiting time in minutes, uniformly distributed over $[0, 6]$ ($X \\sim \\mathcal{U}(0, 6)$). Compute its theoretical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "متغير عشوائي متصل $X$ يمثل زمن الانتظار بالدقائق وموزع بانتظام على الفترة $[0, 6]$ ($X \\sim \\mathcal{U}(0, 6)$). احسب متوسطه النظري $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 3$",
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 7$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 3$",
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 11$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 3$",
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 7$",
      "$\\mathbb{E}[X] = 5, \\quad \\text{Var}(X) = 3$",
      "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 11$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 3, \\quad \\text{Var}(X) = 3$",
    "correctIndex": 0,
    "hintEn": "For U(0, b): E[X] = b/2 and Var(X) = b^2 / 12.",
    "hintAr": "للتوزيع المنتظم على [0, b]: التوقع = b/2 والتباين = b^2 / 12.",
    "stepByStepSolutionEn": [
      "1. Mean formula: $\\mathbb{E}[X] = \\frac{0 + 6}{2} = 3$.",
      "2. Variance formula: $\\text{Var}(X) = \\frac{(6)^2}{12} = \\frac{36}{12} = 3$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوقع: $\\mathbb{E}[X] = \\frac{6}{2} = 3$.",
      "٢. قانون التباين: $\\text{Var}(X) = \\frac{(6)^2}{12} = 3$."
    ],
    "teacherTipEn": "The variance denominator 12 arises from integrating x^2 over a symmetric interval.",
    "teacherTipAr": "المقام 12 في تباين التوزيع المنتظم ينتج رياضياً من تكامل مربع المتغير."
  },
  {
    "id": "egbac_prob_ch2_ex_02",
    "titleEn": "EG-Bac Exercise 2: Uniform Density Moments Evaluation",
    "titleAr": "تمرين البكالوريا 2: حساب عزوم التوزيع المنتظم المتصل",
    "difficulty": "medium",
    "questionEn": "In an automated filling machine, the liquid volume dispensed $X$ is uniformly distributed over $[0, 12]\\text{ mL}$ ($X \\sim \\mathcal{U}(0, 12)$). Find the expected volume $\\mathbb{E}[X]$ and its variance $\\text{Var}(X)$.",
    "questionAr": "في آلة تعبئة آلية، يتوزع حجم السائل المنسكب $X$ بانتظام على الفترة $[0, 12]\\text{ مل}$ ($X \\sim \\mathcal{U}(0, 12)$). أوجد الحجم المتوقع $\\mathbb{E}[X]$ وتباينه $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 16$",
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 12$",
      "$\\mathbb{E}[X] = 8, \\quad \\text{Var}(X) = 12$",
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 20$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 16$",
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 12$",
      "$\\mathbb{E}[X] = 8, \\quad \\text{Var}(X) = 12$",
      "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 20$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 6, \\quad \\text{Var}(X) = 12$",
    "correctIndex": 1,
    "hintEn": "For U(0, b): E[X] = b/2 and Var(X) = b^2 / 12.",
    "hintAr": "للتوزيع المنتظم على [0, b]: التوقع = b/2 والتباين = b^2 / 12.",
    "stepByStepSolutionEn": [
      "1. Mean formula: $\\mathbb{E}[X] = \\frac{0 + 12}{2} = 6$.",
      "2. Variance formula: $\\text{Var}(X) = \\frac{(12)^2}{12} = \\frac{144}{12} = 12$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوقع: $\\mathbb{E}[X] = \\frac{12}{2} = 6$.",
      "٢. قانون التباين: $\\text{Var}(X) = \\frac{(12)^2}{12} = 12$."
    ],
    "teacherTipEn": "The variance denominator 12 arises from integrating x^2 over a symmetric interval.",
    "teacherTipAr": "المقام 12 في تباين التوزيع المنتظم ينتج رياضياً من تكامل مربع المتغير."
  },
  {
    "id": "egbac_prob_ch2_ex_03",
    "titleEn": "EG-Bac Exercise 3: Uniform Density Moments Evaluation",
    "titleAr": "تمرين البكالوريا 3: حساب عزوم التوزيع المنتظم المتصل",
    "difficulty": "medium",
    "questionEn": "A measurement sensor error variable $X$ follows a continuous uniform distribution on $[0, 18]$ ($X \\sim \\mathcal{U}(0, 18)$). Determine the statistical mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "خطأ القياس لحساس $X$ يتبع توزيعاً منتظماً متصلاً على $[0, 18]$ ($X \\sim \\mathcal{U}(0, 18)$). حدد المتوسط الإحصائي $\\mathbb{E}[X]$ والتباين $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 31$",
      "$\\mathbb{E}[X] = 11, \\quad \\text{Var}(X) = 27$",
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 27$",
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 35$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 31$",
      "$\\mathbb{E}[X] = 11, \\quad \\text{Var}(X) = 27$",
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 27$",
      "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 35$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 9, \\quad \\text{Var}(X) = 27$",
    "correctIndex": 2,
    "hintEn": "For U(0, b): E[X] = b/2 and Var(X) = b^2 / 12.",
    "hintAr": "للتوزيع المنتظم على [0, b]: التوقع = b/2 والتباين = b^2 / 12.",
    "stepByStepSolutionEn": [
      "1. Mean formula: $\\mathbb{E}[X] = \\frac{0 + 18}{2} = 9$.",
      "2. Variance formula: $\\text{Var}(X) = \\frac{(18)^2}{12} = \\frac{324}{12} = 27$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوقع: $\\mathbb{E}[X] = \\frac{18}{2} = 9$.",
      "٢. قانون التباين: $\\text{Var}(X) = \\frac{(18)^2}{12} = 27$."
    ],
    "teacherTipEn": "The variance denominator 12 arises from integrating x^2 over a symmetric interval.",
    "teacherTipAr": "المقام 12 في تباين التوزيع المنتظم ينتج رياضياً من تكامل مربع المتغير."
  },
  {
    "id": "egbac_prob_ch2_ex_04",
    "titleEn": "EG-Bac Exercise 4: Uniform Density Moments Evaluation",
    "titleAr": "تمرين البكالوريا 4: حساب عزوم التوزيع المنتظم المتصل",
    "difficulty": "medium",
    "questionEn": "The phase angle delay $X$ in an electrical circuit is modeled as a uniform random variable on $[0, 24]$ ($X \\sim \\mathcal{U}(0, 24)$). Calculate the expected phase $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "تأخر زاوية الطور $X$ في دائرة كهربية يُمثل بمتغير عشوائي منتظم على $[0, 24]$ ($X \\sim \\mathcal{U}(0, 24)$). احسب الطور المتوقع $\\mathbb{E}[X]$ والتباين $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 52$",
      "$\\mathbb{E}[X] = 14, \\quad \\text{Var}(X) = 48$",
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 56$",
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 48$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 52$",
      "$\\mathbb{E}[X] = 14, \\quad \\text{Var}(X) = 48$",
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 56$",
      "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 48$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 12, \\quad \\text{Var}(X) = 48$",
    "correctIndex": 3,
    "hintEn": "For U(0, b): E[X] = b/2 and Var(X) = b^2 / 12.",
    "hintAr": "للتوزيع المنتظم على [0, b]: التوقع = b/2 والتباين = b^2 / 12.",
    "stepByStepSolutionEn": [
      "1. Mean formula: $\\mathbb{E}[X] = \\frac{0 + 24}{2} = 12$.",
      "2. Variance formula: $\\text{Var}(X) = \\frac{(24)^2}{12} = \\frac{576}{12} = 48$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوقع: $\\mathbb{E}[X] = \\frac{24}{2} = 12$.",
      "٢. قانون التباين: $\\text{Var}(X) = \\frac{(24)^2}{12} = 48$."
    ],
    "teacherTipEn": "The variance denominator 12 arises from integrating x^2 over a symmetric interval.",
    "teacherTipAr": "المقام 12 في تباين التوزيع المنتظم ينتج رياضياً من تكامل مربع المتغير."
  },
  {
    "id": "egbac_prob_ch2_ex_05",
    "titleEn": "EG-Bac Exercise 5: Uniform Density Moments Evaluation",
    "titleAr": "تمرين البكالوريا 5: حساب عزوم التوزيع المنتظم المتصل",
    "difficulty": "medium",
    "questionEn": "A transit bus arrival delay $X$ follows a continuous uniform probability density over the interval $[0, 30]\\text{ min}$ ($X \\sim \\mathcal{U}(0, 30)$). Find the mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$.",
    "questionAr": "تأخر وصول حافلة $X$ يتبع دالة كثافة احتمالية منتظمة متصلة على الفترة $[0, 30]\\text{ دقيقة}$ ($X \\sim \\mathcal{U}(0, 30)$). أوجد المتوسط $\\mathbb{E}[X]$ والتباين $\\text{Var}(X)$.",
    "optionsEn": [
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 75$",
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 79$",
      "$\\mathbb{E}[X] = 17, \\quad \\text{Var}(X) = 75$",
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 83$"
    ],
    "optionsAr": [
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 75$",
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 79$",
      "$\\mathbb{E}[X] = 17, \\quad \\text{Var}(X) = 75$",
      "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 83$"
    ],
    "correctAnswer": "$\\mathbb{E}[X] = 15, \\quad \\text{Var}(X) = 75$",
    "correctIndex": 0,
    "hintEn": "For U(0, b): E[X] = b/2 and Var(X) = b^2 / 12.",
    "hintAr": "للتوزيع المنتظم على [0, b]: التوقع = b/2 والتباين = b^2 / 12.",
    "stepByStepSolutionEn": [
      "1. Mean formula: $\\mathbb{E}[X] = \\frac{0 + 30}{2} = 15$.",
      "2. Variance formula: $\\text{Var}(X) = \\frac{(30)^2}{12} = \\frac{900}{12} = 75$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التوقع: $\\mathbb{E}[X] = \\frac{30}{2} = 15$.",
      "٢. قانون التباين: $\\text{Var}(X) = \\frac{(30)^2}{12} = 75$."
    ],
    "teacherTipEn": "The variance denominator 12 arises from integrating x^2 over a symmetric interval.",
    "teacherTipAr": "المقام 12 في تباين التوزيع المنتظم ينتج رياضياً من تكامل مربع المتغير."
  },
  {
    "id": "egbac_prob_ch2_ex_06",
    "titleEn": "EG-Bac Exercise 6: Exponential Tail Probability",
    "titleAr": "تمرين البكالوريا 6: احتمال الذيل للتوزيع الأسي",
    "difficulty": "medium",
    "questionEn": "The lifespan $X$ of an electronic component is governed by an exponential distribution $X \\sim \\text{Exp}(\\lambda = 1)$. What is the exact survival probability $P(X > 2)$ that the component functions beyond 2 hours?",
    "questionAr": "العمر التشغيلي $X$ لمكون إلكتروني يخضع لتوزيع أسي $X \\sim \\text{Exp}(\\lambda = 1)$. ما هو احتمال البقاء الدقيق $P(X > 2)$ بأن يعمل المكون لما يزيد عن ساعتين؟",
    "optionsEn": [
      "$P(X > 2) = 1 - e^{-2}$",
      "$P(X > 2) = e^{-2}$",
      "$P(X > 2) = e^{-1}$",
      "$P(X > 2) = e^{-4}$"
    ],
    "optionsAr": [
      "$P(X > 2) = 1 - e^{-2}$",
      "$P(X > 2) = e^{-2}$",
      "$P(X > 2) = e^{-1}$",
      "$P(X > 2) = e^{-4}$"
    ],
    "correctAnswer": "$P(X > 2) = e^{-2}$",
    "correctIndex": 1,
    "hintEn": "For Exp(lambda): P(X > t) = e^(-lambda * t).",
    "hintAr": "للتوزيع الأسي: P(X > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. The survival function for exponential distribution is $P(X > t) = e^{-\\lambda t}$.",
      "2. Substitute $\\lambda = 1$ and $t = 2$: $P(X > 2) = e^{-(1)(2)} = e^{-2}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة البقاء للتوزيع الأسي: $P(X > t) = e^{-\\lambda t}$.",
      "٢. بالتعويض: $P(X > 2) = e^{-2}$."
    ],
    "teacherTipEn": "The survival curve of exponential distributions decays strictly geometrically.",
    "teacherTipAr": "منحنى البقاء للتوزيع الأسي يتناقص هندسياً بصورة متصلة."
  },
  {
    "id": "egbac_prob_ch2_ex_07",
    "titleEn": "EG-Bac Exercise 7: Exponential Tail Probability",
    "titleAr": "تمرين البكالوريا 7: احتمال الذيل للتوزيع الأسي",
    "difficulty": "medium",
    "questionEn": "A service request queue has completion times modeled by $X \\sim \\text{Exp}(\\lambda = 2)$. Find the probability $P(X > 2)$ that a request takes more than 2 time units to process.",
    "questionAr": "طابور طلبات خدمة تتم نمذجة أزمنة إنجازه بالتوزيع $X \\sim \\text{Exp}(\\lambda = 2)$. أوجد الاحتمال $P(X > 2)$ بأن يستغرق الطلب أكثر من وحدتي زمن لمعالجته.",
    "optionsEn": [
      "$P(X > 2) = 1 - e^{-4}$",
      "$P(X > 2) = e^{-2}$",
      "$P(X > 2) = e^{-4}$",
      "$P(X > 2) = e^{-8}$"
    ],
    "optionsAr": [
      "$P(X > 2) = 1 - e^{-4}$",
      "$P(X > 2) = e^{-2}$",
      "$P(X > 2) = e^{-4}$",
      "$P(X > 2) = e^{-8}$"
    ],
    "correctAnswer": "$P(X > 2) = e^{-4}$",
    "correctIndex": 2,
    "hintEn": "For Exp(lambda): P(X > t) = e^(-lambda * t).",
    "hintAr": "للتوزيع الأسي: P(X > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. The survival function for exponential distribution is $P(X > t) = e^{-\\lambda t}$.",
      "2. Substitute $\\lambda = 2$ and $t = 2$: $P(X > 2) = e^{-(2)(2)} = e^{-4}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة البقاء للتوزيع الأسي: $P(X > t) = e^{-\\lambda t}$.",
      "٢. بالتعويض: $P(X > 2) = e^{-4}$."
    ],
    "teacherTipEn": "The survival curve of exponential distributions decays strictly geometrically.",
    "teacherTipAr": "منحنى البقاء للتوزيع الأسي يتناقص هندسياً بصورة متصلة."
  },
  {
    "id": "egbac_prob_ch2_ex_08",
    "titleEn": "EG-Bac Exercise 8: Exponential Tail Probability",
    "titleAr": "تمرين البكالوريا 8: احتمال الذيل للتوزيع الأسي",
    "difficulty": "medium",
    "questionEn": "Radioactive isotope decay intervals follow an exponential distribution $X \\sim \\text{Exp}(\\lambda = 3)$. Determine the survival tail probability $P(X > 2)$.",
    "questionAr": "الفترات الزمنية لتحلل نظير مشع تتبع توزيعاً أسياً $X \\sim \\text{Exp}(\\lambda = 3)$. حدد احتمال البقاء في الذيل $P(X > 2)$.",
    "optionsEn": [
      "$P(X > 2) = 1 - e^{-6}$",
      "$P(X > 2) = e^{-3}$",
      "$P(X > 2) = e^{-12}$",
      "$P(X > 2) = e^{-6}$"
    ],
    "optionsAr": [
      "$P(X > 2) = 1 - e^{-6}$",
      "$P(X > 2) = e^{-3}$",
      "$P(X > 2) = e^{-12}$",
      "$P(X > 2) = e^{-6}$"
    ],
    "correctAnswer": "$P(X > 2) = e^{-6}$",
    "correctIndex": 3,
    "hintEn": "For Exp(lambda): P(X > t) = e^(-lambda * t).",
    "hintAr": "للتوزيع الأسي: P(X > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. The survival function for exponential distribution is $P(X > t) = e^{-\\lambda t}$.",
      "2. Substitute $\\lambda = 3$ and $t = 2$: $P(X > 2) = e^{-(3)(2)} = e^{-6}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة البقاء للتوزيع الأسي: $P(X > t) = e^{-\\lambda t}$.",
      "٢. بالتعويض: $P(X > 2) = e^{-6}$."
    ],
    "teacherTipEn": "The survival curve of exponential distributions decays strictly geometrically.",
    "teacherTipAr": "منحنى البقاء للتوزيع الأسي يتناقص هندسياً بصورة متصلة."
  },
  {
    "id": "egbac_prob_ch2_ex_09",
    "titleEn": "EG-Bac Exercise 9: Exponential Tail Probability",
    "titleAr": "تمرين البكالوريا 9: احتمال الذيل للتوزيع الأسي",
    "difficulty": "medium",
    "questionEn": "The time until failure $X$ of an industrial pump is exponentially distributed with parameter $\\lambda = 4$ ($X \\sim \\text{Exp}(4)$). Compute the probability $P(X > 2)$.",
    "questionAr": "الزمن حتى تعطل مضخة صناعية $X$ موزع أسياً بمعامل $\\lambda = 4$ ($X \\sim \\text{Exp}(4)$). احسب الاحتمال $P(X > 2)$.",
    "optionsEn": [
      "$P(X > 2) = e^{-8}$",
      "$P(X > 2) = 1 - e^{-8}$",
      "$P(X > 2) = e^{-4}$",
      "$P(X > 2) = e^{-16}$"
    ],
    "optionsAr": [
      "$P(X > 2) = e^{-8}$",
      "$P(X > 2) = 1 - e^{-8}$",
      "$P(X > 2) = e^{-4}$",
      "$P(X > 2) = e^{-16}$"
    ],
    "correctAnswer": "$P(X > 2) = e^{-8}$",
    "correctIndex": 0,
    "hintEn": "For Exp(lambda): P(X > t) = e^(-lambda * t).",
    "hintAr": "للتوزيع الأسي: P(X > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. The survival function for exponential distribution is $P(X > t) = e^{-\\lambda t}$.",
      "2. Substitute $\\lambda = 4$ and $t = 2$: $P(X > 2) = e^{-(4)(2)} = e^{-8}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة البقاء للتوزيع الأسي: $P(X > t) = e^{-\\lambda t}$.",
      "٢. بالتعويض: $P(X > 2) = e^{-8}$."
    ],
    "teacherTipEn": "The survival curve of exponential distributions decays strictly geometrically.",
    "teacherTipAr": "منحنى البقاء للتوزيع الأسي يتناقص هندسياً بصورة متصلة."
  },
  {
    "id": "egbac_prob_ch2_ex_10",
    "titleEn": "EG-Bac Exercise 10: Exponential Tail Probability",
    "titleAr": "تمرين البكالوريا 10: احتمال الذيل للتوزيع الأسي",
    "difficulty": "medium",
    "questionEn": "Network server downtime duration $X$ follows an exponential density with rate $\\lambda = 5$ ($X \\sim \\text{Exp}(5)$). What is the probability $P(X > 2)$ of downtime exceeding 2 hours?",
    "questionAr": "مدة توقف خادم شبكة $X$ تتبع كثافة أسية بمعدل $\\lambda = 5$ ($X \\sim \\text{Exp}(5)$). ما هو احتمال تجاوز فترة التوقف لساعتين $P(X > 2)$؟",
    "optionsEn": [
      "$P(X > 2) = 1 - e^{-10}$",
      "$P(X > 2) = e^{-10}$",
      "$P(X > 2) = e^{-5}$",
      "$P(X > 2) = e^{-20}$"
    ],
    "optionsAr": [
      "$P(X > 2) = 1 - e^{-10}$",
      "$P(X > 2) = e^{-10}$",
      "$P(X > 2) = e^{-5}$",
      "$P(X > 2) = e^{-20}$"
    ],
    "correctAnswer": "$P(X > 2) = e^{-10}$",
    "correctIndex": 1,
    "hintEn": "For Exp(lambda): P(X > t) = e^(-lambda * t).",
    "hintAr": "للتوزيع الأسي: P(X > t) = e^(-lambda * t).",
    "stepByStepSolutionEn": [
      "1. The survival function for exponential distribution is $P(X > t) = e^{-\\lambda t}$.",
      "2. Substitute $\\lambda = 5$ and $t = 2$: $P(X > 2) = e^{-(5)(2)} = e^{-10}$."
    ],
    "stepByStepSolutionAr": [
      "١. دالة البقاء للتوزيع الأسي: $P(X > t) = e^{-\\lambda t}$.",
      "٢. بالتعويض: $P(X > 2) = e^{-10}$."
    ],
    "teacherTipEn": "The survival curve of exponential distributions decays strictly geometrically.",
    "teacherTipAr": "منحنى البقاء للتوزيع الأسي يتناقص هندسياً بصورة متصلة."
  },
  {
    "id": "egbac_prob_ch2_ex_11",
    "titleEn": "EG-Bac Exercise 11: Standard Error Scaling via CLT",
    "titleAr": "تمرين البكالوريا 11: مقياس الخطأ المعياري بنظرية النهاية المركزية",
    "difficulty": "hots",
    "questionEn": "In a statistical survey, a population has known standard deviation $\\sigma = 20$. When a pilot random sample of size $n = 4$ is extracted, compute the standard error of the sample mean $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$.",
    "questionAr": "في مسح إحصائي، يمتلك مجتمع انحرافاً معيارياً معلوماً $\\sigma = 20$. عند سحب عينة استطلاعية عشوائية حجمها $n = 4$، احسب الخطأ المعياري لمتوسط العينة $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}$.",
    "optionsEn": [
      "$\\sigma_{\\bar{X}} = 11.00$",
      "$\\sigma_{\\bar{X}} = 12.00$",
      "$\\sigma_{\\bar{X}} = 10$",
      "$\\sigma_{\\bar{X}} = 9.50$"
    ],
    "optionsAr": [
      "$\\sigma_{\\bar{X}} = 11.00$",
      "$\\sigma_{\\bar{X}} = 12.00$",
      "$\\sigma_{\\bar{X}} = 10$",
      "$\\sigma_{\\bar{X}} = 9.50$"
    ],
    "correctAnswer": "$\\sigma_{\\bar{X}} = 10$",
    "correctIndex": 2,
    "hintEn": "Standard error is sigma / sqrt(n).",
    "hintAr": "الخطأ المعياري يساوي الانحراف المعياري مقسوماً على جذر حجم العينة.",
    "stepByStepSolutionEn": [
      "1. Compute $\\sqrt{n} = \\sqrt{4} = 2$.",
      "2. Standard error: $\\sigma_{\\bar{X}} = \\frac{20}{2} = 10$."
    ],
    "stepByStepSolutionAr": [
      "١. جذر حجم العينة: $\\sqrt{4} = 2$.",
      "٢. الخطأ المعياري: $\\frac{20}{2} = 10$."
    ],
    "teacherTipEn": "To halve the standard error, one must quadruple the sample size (the root-n law).",
    "teacherTipAr": "لتنصيف الخطأ المعياري إلى النصف، يجب مضاعفة حجم العينة 4 مرات (قانون جذر n)."
  },
  {
    "id": "egbac_prob_ch2_ex_12",
    "titleEn": "EG-Bac Exercise 12: Standard Error Scaling via CLT",
    "titleAr": "تمرين البكالوريا 12: مقياس الخطأ المعياري بنظرية النهاية المركزية",
    "difficulty": "hots",
    "questionEn": "An industrial quality check samples items from a production lot with $\\sigma = 20$. If the sample size is chosen as $n = 16$, evaluate the standard error $\\sigma_{\\bar{X}}$ under the Central Limit Theorem.",
    "questionAr": "فحص جودة صناعي يأخذ عينات من دفعة إنتاج بانحراف $\\sigma = 20$. إذا اختير حجم العينة ليكون $n = 16$، احسب الخطأ المعياري $\\sigma_{\\bar{X}}$ بموجب نظرية النهاية المركزية.",
    "optionsEn": [
      "$\\sigma_{\\bar{X}} = 6.00$",
      "$\\sigma_{\\bar{X}} = 7.00$",
      "$\\sigma_{\\bar{X}} = 4.50$",
      "$\\sigma_{\\bar{X}} = 5$"
    ],
    "optionsAr": [
      "$\\sigma_{\\bar{X}} = 6.00$",
      "$\\sigma_{\\bar{X}} = 7.00$",
      "$\\sigma_{\\bar{X}} = 4.50$",
      "$\\sigma_{\\bar{X}} = 5$"
    ],
    "correctAnswer": "$\\sigma_{\\bar{X}} = 5$",
    "correctIndex": 3,
    "hintEn": "Standard error is sigma / sqrt(n).",
    "hintAr": "الخطأ المعياري يساوي الانحراف المعياري مقسوماً على جذر حجم العينة.",
    "stepByStepSolutionEn": [
      "1. Compute $\\sqrt{n} = \\sqrt{16} = 4$.",
      "2. Standard error: $\\sigma_{\\bar{X}} = \\frac{20}{4} = 5$."
    ],
    "stepByStepSolutionAr": [
      "١. جذر حجم العينة: $\\sqrt{16} = 4$.",
      "٢. الخطأ المعياري: $\\frac{20}{4} = 5$."
    ],
    "teacherTipEn": "To halve the standard error, one must quadruple the sample size (the root-n law).",
    "teacherTipAr": "لتنصيف الخطأ المعياري إلى النصف، يجب مضاعفة حجم العينة 4 مرات (قانون جذر n)."
  },
  {
    "id": "egbac_prob_ch2_ex_13",
    "titleEn": "EG-Bac Exercise 13: Standard Error Scaling via CLT",
    "titleAr": "تمرين البكالوريا 13: مقياس الخطأ المعياري بنظرية النهاية المركزية",
    "difficulty": "hots",
    "questionEn": "A polling firm conducts a preliminary study on a population with $\\sigma = 20$ using a sample of size $n = 36$. Find the resulting standard error of the mean $\\sigma_{\\bar{X}}$.",
    "questionAr": "مؤسسة استطلاع رأي تجري دراسة تمهيدية على مجتمع بانحراف $\\sigma = 20$ باستخدام عينة حجمها $n = 36$. أوجد الخطأ المعياري الناتج للمتوسط $\\sigma_{\\bar{X}}$.",
    "optionsEn": [
      "$\\sigma_{\\bar{X}} = 3.33$",
      "$\\sigma_{\\bar{X}} = 4.33$",
      "$\\sigma_{\\bar{X}} = 5.33$",
      "$\\sigma_{\\bar{X}} = 2.83$"
    ],
    "optionsAr": [
      "$\\sigma_{\\bar{X}} = 3.33$",
      "$\\sigma_{\\bar{X}} = 4.33$",
      "$\\sigma_{\\bar{X}} = 5.33$",
      "$\\sigma_{\\bar{X}} = 2.83$"
    ],
    "correctAnswer": "$\\sigma_{\\bar{X}} = 3.33$",
    "correctIndex": 0,
    "hintEn": "Standard error is sigma / sqrt(n).",
    "hintAr": "الخطأ المعياري يساوي الانحراف المعياري مقسوماً على جذر حجم العينة.",
    "stepByStepSolutionEn": [
      "1. Compute $\\sqrt{n} = \\sqrt{36} = 6$.",
      "2. Standard error: $\\sigma_{\\bar{X}} = \\frac{20}{6} = 3.33$."
    ],
    "stepByStepSolutionAr": [
      "١. جذر حجم العينة: $\\sqrt{36} = 6$.",
      "٢. الخطأ المعياري: $\\frac{20}{6} = 3.33$."
    ],
    "teacherTipEn": "To halve the standard error, one must quadruple the sample size (the root-n law).",
    "teacherTipAr": "لتنصيف الخطأ المعياري إلى النصف، يجب مضاعفة حجم العينة 4 مرات (قانون جذر n)."
  },
  {
    "id": "egbac_prob_ch2_ex_14",
    "titleEn": "EG-Bac Exercise 14: Standard Error Scaling via CLT",
    "titleAr": "تمرين البكالوريا 14: مقياس الخطأ المعياري بنظرية النهاية المركزية",
    "difficulty": "hots",
    "questionEn": "From a population exhibiting variability $\\sigma = 20$, an expanded random sample of $n = 64$ observations is gathered. Determine the standard error $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$.",
    "questionAr": "من مجتمع يظهر تبايناً بانحراف $\\sigma = 20$، جُمعت عينة عشوائية موسعة قوامها $n = 64$ مشاهدة. حدد الخطأ المعياري $\\sigma_{\\bar{X}} = \\sigma / \\sqrt{n}$.",
    "optionsEn": [
      "$\\sigma_{\\bar{X}} = 3.50$",
      "$\\sigma_{\\bar{X}} = 2.5$",
      "$\\sigma_{\\bar{X}} = 4.50$",
      "$\\sigma_{\\bar{X}} = 2.00$"
    ],
    "optionsAr": [
      "$\\sigma_{\\bar{X}} = 3.50$",
      "$\\sigma_{\\bar{X}} = 2.5$",
      "$\\sigma_{\\bar{X}} = 4.50$",
      "$\\sigma_{\\bar{X}} = 2.00$"
    ],
    "correctAnswer": "$\\sigma_{\\bar{X}} = 2.5$",
    "correctIndex": 1,
    "hintEn": "Standard error is sigma / sqrt(n).",
    "hintAr": "الخطأ المعياري يساوي الانحراف المعياري مقسوماً على جذر حجم العينة.",
    "stepByStepSolutionEn": [
      "1. Compute $\\sqrt{n} = \\sqrt{64} = 8$.",
      "2. Standard error: $\\sigma_{\\bar{X}} = \\frac{20}{8} = 2.5$."
    ],
    "stepByStepSolutionAr": [
      "١. جذر حجم العينة: $\\sqrt{64} = 8$.",
      "٢. الخطأ المعياري: $\\frac{20}{8} = 2.5$."
    ],
    "teacherTipEn": "To halve the standard error, one must quadruple the sample size (the root-n law).",
    "teacherTipAr": "لتنصيف الخطأ المعياري إلى النصف، يجب مضاعفة حجم العينة 4 مرات (قانون جذر n)."
  },
  {
    "id": "egbac_prob_ch2_ex_15",
    "titleEn": "EG-Bac Exercise 15: Standard Error Scaling via CLT",
    "titleAr": "تمرين البكالوريا 15: مقياس الخطأ المعياري بنظرية النهاية المركزية",
    "difficulty": "hots",
    "questionEn": "A large-scale laboratory trial is conducted with sample size $n = 100$ drawn from a population with $\\sigma = 20$. Calculate the precision metric given by the standard error of the mean $\\sigma_{\\bar{X}}$.",
    "questionAr": "أُجريت تجربة معملية واسعة النطاق بحجم عينة $n = 100$ مسحوبة من مجتمع بانحراف $\\sigma = 20$. احسب مقياس الدقة الممثل بالخطأ المعياري لمتوسط العينة $\\sigma_{\\bar{X}}$.",
    "optionsEn": [
      "$\\sigma_{\\bar{X}} = 3.00$",
      "$\\sigma_{\\bar{X}} = 4.00$",
      "$\\sigma_{\\bar{X}} = 2$",
      "$\\sigma_{\\bar{X}} = 1.50$"
    ],
    "optionsAr": [
      "$\\sigma_{\\bar{X}} = 3.00$",
      "$\\sigma_{\\bar{X}} = 4.00$",
      "$\\sigma_{\\bar{X}} = 2$",
      "$\\sigma_{\\bar{X}} = 1.50$"
    ],
    "correctAnswer": "$\\sigma_{\\bar{X}} = 2$",
    "correctIndex": 2,
    "hintEn": "Standard error is sigma / sqrt(n).",
    "hintAr": "الخطأ المعياري يساوي الانحراف المعياري مقسوماً على جذر حجم العينة.",
    "stepByStepSolutionEn": [
      "1. Compute $\\sqrt{n} = \\sqrt{100} = 10$.",
      "2. Standard error: $\\sigma_{\\bar{X}} = \\frac{20}{10} = 2$."
    ],
    "stepByStepSolutionAr": [
      "١. جذر حجم العينة: $\\sqrt{100} = 10$.",
      "٢. الخطأ المعياري: $\\frac{20}{10} = 2$."
    ],
    "teacherTipEn": "To halve the standard error, one must quadruple the sample size (the root-n law).",
    "teacherTipAr": "لتنصيف الخطأ المعياري إلى النصف، يجب مضاعفة حجم العينة 4 مرات (قانون جذر n)."
  }
];
