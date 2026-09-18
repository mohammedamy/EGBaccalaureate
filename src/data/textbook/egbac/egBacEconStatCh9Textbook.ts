import type { SolvedProblem } from '../../../types/curriculum';

export const egBacEconStatCh9SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_econ_stat_ch9_example_1",
    "titleEn": "Solved Example 1: Discrete Random Variables & Probability Mass Functions (PMF)",
    "titleAr": "مثال محلول (1): المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Discrete Random Variables & Probability Mass Functions (PMF) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Discrete Random Variables & Probability Mass Functions (PMF).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Discrete Random Variables & Probability Mass Functions (PMF).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: A discrete random variable takes distinct countable numerical values with associated probabilities f(x_i) that sum to 1.",
      "Step 3: Conclude the exact solution: Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: المتغير العشوائي المتقطع هو دالة مداها مجموعة منتهية أو قابلة للعد من الأعداد الحقيقية، ولكل قيمة احتمال د(س_ر) يفي بشرط: مجموع الاحتمالات = 1.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_2",
    "titleEn": "Solved Example 2: Expected Value / Mean (mu) of a Discrete Random Variable",
    "titleAr": "مثال محلول (2): التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Expected Value / Mean (mu) of a Discrete Random Variable in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Expected Value / Mean (mu) of a Discrete Random Variable.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Expected Value / Mean (mu) of a Discrete Random Variable.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The expected value (mu or E(X)) is the weighted long-term average of the random variable values weighted by their respective probabilities.",
      "Step 3: Conclude the exact solution: Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: التوقع (ميو: μ) هو المتوسط الحسابي الموزون لقيم المتغير العشوائي وفقاً لاحتمالاتها؛ μ = مجـ [ س_ر × د(س_ر) ].",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_3",
    "titleEn": "Solved Example 3: Variance (sigma^2) & Standard Deviation (sigma)",
    "titleAr": "مثال محلول (3): التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Variance (sigma^2) & Standard Deviation (sigma) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Variance (sigma^2) & Standard Deviation (sigma).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Variance (sigma^2) & Standard Deviation (sigma).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Variance measures the expected squared deviation of values from their mean; standard deviation is the positive square root of variance.",
      "Step 3: Conclude the exact solution: Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: التباين (سيجما تربيع: σ²) يقيس تشتت قيم المتغير العشوائي حول توقعه؛ والانحراف المعياري (σ) هو الجذر التربيعي الموجب للتباين.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_4",
    "titleEn": "Solved Example 4: Coefficient of Variation (C.V.) for Dispersion Comparison",
    "titleAr": "مثال محلول (4): معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Coefficient of Variation (C.V.) for Dispersion Comparison in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Coefficient of Variation (C.V.) for Dispersion Comparison.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Coefficient of Variation (C.V.) for Dispersion Comparison.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The coefficient of variation expresses standard deviation as a percentage of the mean, allowing comparison across groups with different units.",
      "Step 3: Conclude the exact solution: Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: معامل الاختلاف هو مقياس نسبي للتشتت يقيس نسبة الانحراف المعياري إلى التوقع: معامل الاختلاف = (σ ÷ μ) × ١٠٠٪.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_5",
    "titleEn": "Solved Example 5: Continuous Random Variables & Probability Density Functions (PDF)",
    "titleAr": "مثال محلول (5): المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Continuous Random Variables & Probability Density Functions (PDF) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Continuous Random Variables & Probability Density Functions (PDF).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Continuous Random Variables & Probability Density Functions (PDF).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: A continuous random variable takes any real value within an interval; its probability over a sub-interval equals the area under its density function curve.",
      "Step 3: Conclude the exact solution: Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: المتغير العشوائي المتصل يأخذ أي قيمة داخل فترة متصلة من الأعداد الحقيقية؛ ويعبر عن الاحتمال بالمساحة أسفل منحنى دالة كثافة الاحتمال.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_6",
    "titleEn": "Solved Example 6: Discrete Random Variables & Probability Mass Functions (PMF)",
    "titleAr": "مثال محلول (6): المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Discrete Random Variables & Probability Mass Functions (PMF) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Discrete Random Variables & Probability Mass Functions (PMF).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Discrete Random Variables & Probability Mass Functions (PMF).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: A discrete random variable takes distinct countable numerical values with associated probabilities f(x_i) that sum to 1.",
      "Step 3: Conclude the exact solution: Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: المتغير العشوائي المتقطع هو دالة مداها مجموعة منتهية أو قابلة للعد من الأعداد الحقيقية، ولكل قيمة احتمال د(س_ر) يفي بشرط: مجموع الاحتمالات = 1.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_7",
    "titleEn": "Solved Example 7: Expected Value / Mean (mu) of a Discrete Random Variable",
    "titleAr": "مثال محلول (7): التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Expected Value / Mean (mu) of a Discrete Random Variable in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Expected Value / Mean (mu) of a Discrete Random Variable.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Expected Value / Mean (mu) of a Discrete Random Variable.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The expected value (mu or E(X)) is the weighted long-term average of the random variable values weighted by their respective probabilities.",
      "Step 3: Conclude the exact solution: Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: التوقع (ميو: μ) هو المتوسط الحسابي الموزون لقيم المتغير العشوائي وفقاً لاحتمالاتها؛ μ = مجـ [ س_ر × د(س_ر) ].",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_8",
    "titleEn": "Solved Example 8: Variance (sigma^2) & Standard Deviation (sigma)",
    "titleAr": "مثال محلول (8): التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Variance (sigma^2) & Standard Deviation (sigma) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Variance (sigma^2) & Standard Deviation (sigma).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Variance (sigma^2) & Standard Deviation (sigma).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Variance measures the expected squared deviation of values from their mean; standard deviation is the positive square root of variance.",
      "Step 3: Conclude the exact solution: Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: التباين (سيجما تربيع: σ²) يقيس تشتت قيم المتغير العشوائي حول توقعه؛ والانحراف المعياري (σ) هو الجذر التربيعي الموجب للتباين.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_9",
    "titleEn": "Solved Example 9: Coefficient of Variation (C.V.) for Dispersion Comparison",
    "titleAr": "مثال محلول (9): معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Coefficient of Variation (C.V.) for Dispersion Comparison in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Coefficient of Variation (C.V.) for Dispersion Comparison.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Coefficient of Variation (C.V.) for Dispersion Comparison.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The coefficient of variation expresses standard deviation as a percentage of the mean, allowing comparison across groups with different units.",
      "Step 3: Conclude the exact solution: Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: معامل الاختلاف هو مقياس نسبي للتشتت يقيس نسبة الانحراف المعياري إلى التوقع: معامل الاختلاف = (σ ÷ μ) × ١٠٠٪.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "egbac_econ_stat_ch9_example_10",
    "titleEn": "Solved Example 10: Continuous Random Variables & Probability Density Functions (PDF)",
    "titleAr": "مثال محلول (10): المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Continuous Random Variables & Probability Density Functions (PDF) in Random Variables & Probability Distributions and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى) في منهج المتغيرات العشوائية والتوزيعات الاحتمالية واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Continuous Random Variables & Probability Density Functions (PDF).",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Continuous Random Variables & Probability Density Functions (PDF).",
      "Step 2: Apply official Ministry of Education standard formulations and principles: A continuous random variable takes any real value within an interval; its probability over a sub-interval equals the area under its density function curve.",
      "Step 3: Conclude the exact solution: Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: المتغير العشوائي المتصل يأخذ أي قيمة داخل فترة متصلة من الأعداد الحقيقية؛ ويعبر عن الاحتمال بالمساحة أسفل منحنى دالة كثافة الاحتمال.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  }
];

export const egBacEconStatCh9Exercises: SolvedProblem[] = [
  {
    "id": "egbac_econ_stat_ch9_exercise_1",
    "titleEn": "Practice Exercise 1: Discrete Random Variables & Probability Mass Functions (PMF)",
    "titleAr": "تمرين تدريبي (1): المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها",
    "difficulty": "easy",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Discrete Random Variables & Probability Mass Functions (PMF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "correctIndex": 3,
    "correctAnswer": "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1.",
    "hintEn": "Focus on the core distinctions of Discrete Random Variables & Probability Mass Functions (PMF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_2",
    "titleEn": "Practice Exercise 2: Expected Value / Mean (mu) of a Discrete Random Variable",
    "titleAr": "تمرين تدريبي (2): التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه",
    "difficulty": "easy",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Expected Value / Mean (mu) of a Discrete Random Variable?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه)؟",
    "optionsEn": [
      "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
    "hintEn": "Focus on the core distinctions of Expected Value / Mean (mu) of a Discrete Random Variable.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_3",
    "titleEn": "Practice Exercise 3: Variance (sigma^2) & Standard Deviation (sigma)",
    "titleAr": "تمرين تدريبي (3): التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع",
    "difficulty": "easy",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Variance (sigma^2) & Standard Deviation (sigma)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2).",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2).",
    "hintEn": "Focus on the core distinctions of Variance (sigma^2) & Standard Deviation (sigma).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_4",
    "titleEn": "Practice Exercise 4: Coefficient of Variation (C.V.) for Dispersion Comparison",
    "titleAr": "تمرين تدريبي (4): معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات",
    "difficulty": "easy",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Coefficient of Variation (C.V.) for Dispersion Comparison?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values.",
    "hintEn": "Focus on the core distinctions of Coefficient of Variation (C.V.) for Dispersion Comparison.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_5",
    "titleEn": "Practice Exercise 5: Continuous Random Variables & Probability Density Functions (PDF)",
    "titleAr": "تمرين تدريبي (5): المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى",
    "difficulty": "easy",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Continuous Random Variables & Probability Density Functions (PDF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "correctIndex": 3,
    "correctAnswer": "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0.",
    "hintEn": "Focus on the core distinctions of Continuous Random Variables & Probability Density Functions (PDF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_6",
    "titleEn": "Practice Exercise 6: Discrete Random Variables & Probability Mass Functions (PMF)",
    "titleAr": "تمرين تدريبي (6): المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها",
    "difficulty": "medium",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Discrete Random Variables & Probability Mass Functions (PMF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها)؟",
    "optionsEn": [
      "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1.",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1.",
    "hintEn": "Focus on the core distinctions of Discrete Random Variables & Probability Mass Functions (PMF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_7",
    "titleEn": "Practice Exercise 7: Expected Value / Mean (mu) of a Discrete Random Variable",
    "titleAr": "تمرين تدريبي (7): التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه",
    "difficulty": "medium",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Expected Value / Mean (mu) of a Discrete Random Variable?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
    "hintEn": "Focus on the core distinctions of Expected Value / Mean (mu) of a Discrete Random Variable.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_8",
    "titleEn": "Practice Exercise 8: Variance (sigma^2) & Standard Deviation (sigma)",
    "titleAr": "تمرين تدريبي (8): التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع",
    "difficulty": "medium",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Variance (sigma^2) & Standard Deviation (sigma)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2).",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2).",
    "hintEn": "Focus on the core distinctions of Variance (sigma^2) & Standard Deviation (sigma).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_9",
    "titleEn": "Practice Exercise 9: Coefficient of Variation (C.V.) for Dispersion Comparison",
    "titleAr": "تمرين تدريبي (9): معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات",
    "difficulty": "medium",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Coefficient of Variation (C.V.) for Dispersion Comparison?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "correctIndex": 3,
    "correctAnswer": "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values.",
    "hintEn": "Focus on the core distinctions of Coefficient of Variation (C.V.) for Dispersion Comparison.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_10",
    "titleEn": "Practice Exercise 10: Continuous Random Variables & Probability Density Functions (PDF)",
    "titleAr": "تمرين تدريبي (10): المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى",
    "difficulty": "medium",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Continuous Random Variables & Probability Density Functions (PDF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى)؟",
    "optionsEn": [
      "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0.",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0.",
    "hintEn": "Focus on the core distinctions of Continuous Random Variables & Probability Density Functions (PDF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_11",
    "titleEn": "Practice Exercise 11: Discrete Random Variables & Probability Mass Functions (PMF)",
    "titleAr": "تمرين تدريبي (11): المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها",
    "difficulty": "hots",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Discrete Random Variables & Probability Mass Functions (PMF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1.",
    "hintEn": "Focus on the core distinctions of Discrete Random Variables & Probability Mass Functions (PMF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتقطع (المنفصل) ودالة التوزيع الاحتمالي وخصائصها).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Two fundamental conditions for any valid discrete probability distribution: 1. 0 <= f(x_i) <= 1 for all values; 2. sum(f(x_i)) = 1."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: شرطا دالة التوزيع الاحتمالي للمتغير المتقطع: ١. د(س_ر) ≥ 0 لكل قيم المدى؛ ٢. مجـ د(س_ر) = ١. وتُستخدم لإيجاد المجاهيل والثوابت المجهولة كاف."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_12",
    "titleEn": "Practice Exercise 12: Expected Value / Mean (mu) of a Discrete Random Variable",
    "titleAr": "تمرين تدريبي (12): التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه",
    "difficulty": "hots",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Expected Value / Mean (mu) of a Discrete Random Variable?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu.",
    "hintEn": "Focus on the core distinctions of Expected Value / Mean (mu) of a Discrete Random Variable.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التوقع (المتوسط الحسابي ميو) للمتغير العشوائي المتقطع وطريقة حسابه).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Calculation procedure: Construct tabular columns for x_i, f(x_i), and product x_i * f(x_i). Summing the third column yields the exact expected value mu."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خطوات الحساب: إنشاء جدول من 4 أعمدة: س_ر، د(س_ر)، حاصل ضرب س_ر × د(س_ر)؛ ومجموع العمود الثالث يمثل التوقع μ مباشرة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_13",
    "titleEn": "Practice Exercise 13: Variance (sigma^2) & Standard Deviation (sigma)",
    "titleAr": "تمرين تدريبي (13): التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع",
    "difficulty": "hots",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Variance (sigma^2) & Standard Deviation (sigma)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "correctIndex": 3,
    "correctAnswer": "Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2).",
    "hintEn": "Focus on the core distinctions of Variance (sigma^2) & Standard Deviation (sigma).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (التباين والانحراف المعياري للمتغير العشوائي وقياس التشتت حول التوقع).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computational formula: sigma^2 = sum[x_i^2 * f(x_i)] - mu^2, and sigma = sqrt(sigma^2)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قانون التباين: σ² = مجـ [ س_ر² × د(س_ر) ] - μ²؛ والانحراف المعياري σ = جذر(σ²)، وهو مقياس موجب دائماً لنفس وحدات المتغير."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_14",
    "titleEn": "Practice Exercise 14: Coefficient of Variation (C.V.) for Dispersion Comparison",
    "titleAr": "تمرين تدريبي (14): معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات",
    "difficulty": "hots",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Coefficient of Variation (C.V.) for Dispersion Comparison?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات)؟",
    "optionsEn": [
      "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values.",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values.",
    "hintEn": "Focus on the core distinctions of Coefficient of Variation (C.V.) for Dispersion Comparison.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (معامل الاختلاف واستخدامه في المقارنة النسبية لتشتت المجموعات).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Application: A group with smaller coefficient of variation is more homogeneous and less dispersed, regardless of differences in absolute mean values."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: استخدام معامل الاختلاف: المجموعة التي تمتلك معامل اختلاف أصغر تكون أكثر تجانساً وأقل تشتتاً من المجموعة ذات المعامل الأكبر."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "egbac_econ_stat_ch9_exercise_15",
    "titleEn": "Practice Exercise 15: Continuous Random Variables & Probability Density Functions (PDF)",
    "titleAr": "تمرين تدريبي (15): المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى",
    "difficulty": "hots",
    "questionEn": "In Random Variables & Probability Distributions, which statement correctly addresses Continuous Random Variables & Probability Density Functions (PDF)?",
    "questionAr": "في سياق المتغيرات العشوائية والتوزيعات الاحتمالية، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0.",
    "hintEn": "Focus on the core distinctions of Continuous Random Variables & Probability Density Functions (PDF).",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (المتغير العشوائي المتصل (المستمر) ودالة كثافة الاحتمال والمساحات أسفل المنحنى).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Key properties: 1. f(x) >= 0; 2. Total area between interval bounds = 1; 3. Probability at any single exact point is zero: P(X = c) = 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: خصائص دالة كثافة الاحتمال: د(س) ≥ 0، والمساحة الكلية أسفل المنحنى بين حدي الفترة = 1؛ واحتمال وقوع نقطة مفردة يساوي صفراً: ل(س = أ) = 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  }
];
