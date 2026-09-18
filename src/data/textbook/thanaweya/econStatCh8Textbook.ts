import type { SolvedProblem } from '../../../types/curriculum';

export const econStatCh8SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_econ_stat_ch8_example_1",
    "titleEn": "Solved Example 1: Axioms of Probability & Operations on Events",
    "titleAr": "مثال محلول (1): مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Axioms of Probability & Operations on Events in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Axioms of Probability & Operations on Events.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Axioms of Probability & Operations on Events.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Probability measures the likelihood of an event occurring, bounded strictly between 0 (impossible event) and 1 (certain event).",
      "Step 3: Conclude the exact solution: Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: الاحتمال هو مقياس عددي لفرصة وقوع حدث معين، ويقع دائماً في الفترة المغلقة [0، 1]؛ ل(ف) = 1، ل(∅) = 0.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_2",
    "titleEn": "Solved Example 2: Conditional Probability Formula & Reduced Sample Space",
    "titleAr": "مثال محلول (2): الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Conditional Probability Formula & Reduced Sample Space in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Conditional Probability Formula & Reduced Sample Space.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Conditional Probability Formula & Reduced Sample Space.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Conditional probability P(A|B) represents the probability of event A occurring given that event B has already occurred.",
      "Step 3: Conclude the exact solution: Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: الاحتمال الشرطي ل(أ|ب) هو احتمال وقوع الحدث (أ) بشرط وقوع الحدث (ب) أولاً، حيث يتقلص فضاء العينة الكلي إلى الحدث المشروط (ب).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_3",
    "titleEn": "Solved Example 3: Multiplication Rule of Probability & Multi-Stage Tree Diagrams",
    "titleAr": "مثال محلول (3): قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال",
    "difficulty": "easy",
    "questionEn": "Analyze the following scenario involving Multiplication Rule of Probability & Multi-Stage Tree Diagrams in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The multiplication rule computes the probability of the simultaneous intersection of two events: P(A n B) = P(B) * P(A|B).",
      "Step 3: Conclude the exact solution: Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: قاعدة الضرب: احتمال وقوع الحدثين أ و ب معاً (التقاطع) يساوي: ل(أ ∩ ب) = ل(ب) × ل(أ|ب) = ل(أ) × ل(ب|أ).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_4",
    "titleEn": "Solved Example 4: Stochastic Independence: Mathematical Definition & Verification",
    "titleAr": "مثال محلول (4): الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Stochastic Independence: Mathematical Definition & Verification in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Stochastic Independence: Mathematical Definition & Verification.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Stochastic Independence: Mathematical Definition & Verification.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Two events A and B are independent if the occurrence of one does not affect the probability of the other: P(A|B) = P(A).",
      "Step 3: Conclude the exact solution: Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: يقال للحدثين أ و ب أنهما مستقلان إذا كان وقوع أحدهما لا يؤثر على احتمال وقوع الآخر، أي أن ل(أ|ب) = ل(أ).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_5",
    "titleEn": "Solved Example 5: Bayes Theorem Principles & Real-World Decision Applications",
    "titleAr": "مثال محلول (5): مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Bayes Theorem Principles & Real-World Decision Applications in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Bayes Theorem Principles & Real-World Decision Applications.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Bayes Theorem Principles & Real-World Decision Applications.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Bayes theorem updates prior probabilities into posterior probabilities upon the observation of new conditioning evidence.",
      "Step 3: Conclude the exact solution: Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: قاعدة بايز تتيح حساب الاحتمال العكسي أو البعدي لمسبب معين عند ملاحظة تحقق نتيجة أو عرض معين بناء على الاحتمالات القبلية والشرطية.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_6",
    "titleEn": "Solved Example 6: Axioms of Probability & Operations on Events",
    "titleAr": "مثال محلول (6): مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Axioms of Probability & Operations on Events in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Axioms of Probability & Operations on Events.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Axioms of Probability & Operations on Events.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Probability measures the likelihood of an event occurring, bounded strictly between 0 (impossible event) and 1 (certain event).",
      "Step 3: Conclude the exact solution: Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: الاحتمال هو مقياس عددي لفرصة وقوع حدث معين، ويقع دائماً في الفترة المغلقة [0، 1]؛ ل(ف) = 1، ل(∅) = 0.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_7",
    "titleEn": "Solved Example 7: Conditional Probability Formula & Reduced Sample Space",
    "titleAr": "مثال محلول (7): الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد",
    "difficulty": "medium",
    "questionEn": "Analyze the following scenario involving Conditional Probability Formula & Reduced Sample Space in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Conditional Probability Formula & Reduced Sample Space.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Conditional Probability Formula & Reduced Sample Space.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Conditional probability P(A|B) represents the probability of event A occurring given that event B has already occurred.",
      "Step 3: Conclude the exact solution: Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: الاحتمال الشرطي ل(أ|ب) هو احتمال وقوع الحدث (أ) بشرط وقوع الحدث (ب) أولاً، حيث يتقلص فضاء العينة الكلي إلى الحدث المشروط (ب).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_8",
    "titleEn": "Solved Example 8: Multiplication Rule of Probability & Multi-Stage Tree Diagrams",
    "titleAr": "مثال محلول (8): قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Multiplication Rule of Probability & Multi-Stage Tree Diagrams in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: The multiplication rule computes the probability of the simultaneous intersection of two events: P(A n B) = P(B) * P(A|B).",
      "Step 3: Conclude the exact solution: Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: قاعدة الضرب: احتمال وقوع الحدثين أ و ب معاً (التقاطع) يساوي: ل(أ ∩ ب) = ل(ب) × ل(أ|ب) = ل(أ) × ل(ب|أ).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_9",
    "titleEn": "Solved Example 9: Stochastic Independence: Mathematical Definition & Verification",
    "titleAr": "مثال محلول (9): الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Stochastic Independence: Mathematical Definition & Verification in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Stochastic Independence: Mathematical Definition & Verification.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Stochastic Independence: Mathematical Definition & Verification.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Two events A and B are independent if the occurrence of one does not affect the probability of the other: P(A|B) = P(A).",
      "Step 3: Conclude the exact solution: Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: يقال للحدثين أ و ب أنهما مستقلان إذا كان وقوع أحدهما لا يؤثر على احتمال وقوع الآخر، أي أن ل(أ|ب) = ل(أ).",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  },
  {
    "id": "th_econ_stat_ch8_example_10",
    "titleEn": "Solved Example 10: Bayes Theorem Principles & Real-World Decision Applications",
    "titleAr": "مثال محلول (10): مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية",
    "difficulty": "hots",
    "questionEn": "Analyze the following scenario involving Bayes Theorem Principles & Real-World Decision Applications in Conditional Probability & Independent Events and derive the proper economic or statistical solution.",
    "questionAr": "حلل الموقف التطبيقي التالي المتعلق بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية) في منهج الاحتمال الشرطي والأحداث المستقلة واستنتج الحل العلمي والاقتصادي الصحيح.",
    "hintEn": "Recall the foundational laws and definitions regarding Bayes Theorem Principles & Real-World Decision Applications.",
    "hintAr": "تذكر القوانين والمفاهيم الأساسية الخاصة بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
    "stepByStepSolutionEn": [
      "Step 1: Identify given variables and categorize the economic/statistical domain of Bayes Theorem Principles & Real-World Decision Applications.",
      "Step 2: Apply official Ministry of Education standard formulations and principles: Bayes theorem updates prior probabilities into posterior probabilities upon the observation of new conditioning evidence.",
      "Step 3: Conclude the exact solution: Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: تحديد المعطيات وتصنيف المجال الاقتصادي والإحصائي الخاص بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
      "الخطوة الثانية: تطبيق القواعد والقوانين الرسمية المعتمدة لوزارة التربية والتعليم: قاعدة بايز تتيح حساب الاحتمال العكسي أو البعدي لمسبب معين عند ملاحظة تحقق نتيجة أو عرض معين بناء على الاحتمالات القبلية والشرطية.",
      "الخطوة الثالثة: الوصول للنتيجة والتفسير النهائي بدقة: حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "teacherTipEn": "Always relate theoretical concepts to practical Egyptian and global economic reality.",
    "teacherTipAr": "اربط دائماً بين المفاهيم النظرية والتطبيقات العملية والواقع الاقتصادي والإحصائي في مصر والعالم."
  }
];

export const econStatCh8Exercises: SolvedProblem[] = [
  {
    "id": "th_econ_stat_ch8_exercise_1",
    "titleEn": "Practice Exercise 1: Axioms of Probability & Operations on Events",
    "titleAr": "تمرين تدريبي (1): مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)",
    "difficulty": "easy",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Axioms of Probability & Operations on Events?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل))؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "correctIndex": 3,
    "correctAnswer": "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B).",
    "hintEn": "Focus on the core distinctions of Axioms of Probability & Operations on Events.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_2",
    "titleEn": "Practice Exercise 2: Conditional Probability Formula & Reduced Sample Space",
    "titleAr": "تمرين تدريبي (2): الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد",
    "difficulty": "easy",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Conditional Probability Formula & Reduced Sample Space?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد)؟",
    "optionsEn": [
      "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
    "hintEn": "Focus on the core distinctions of Conditional Probability Formula & Reduced Sample Space.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_3",
    "titleEn": "Practice Exercise 3: Multiplication Rule of Probability & Multi-Stage Tree Diagrams",
    "titleAr": "تمرين تدريبي (3): قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال",
    "difficulty": "easy",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Multiplication Rule of Probability & Multi-Stage Tree Diagrams?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent).",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent).",
    "hintEn": "Focus on the core distinctions of Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_4",
    "titleEn": "Practice Exercise 4: Stochastic Independence: Mathematical Definition & Verification",
    "titleAr": "تمرين تدريبي (4): الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)",
    "difficulty": "easy",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Stochastic Independence: Mathematical Definition & Verification?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب))؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B).",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B).",
    "hintEn": "Focus on the core distinctions of Stochastic Independence: Mathematical Definition & Verification.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_5",
    "titleEn": "Practice Exercise 5: Bayes Theorem Principles & Real-World Decision Applications",
    "titleAr": "تمرين تدريبي (5): مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية",
    "difficulty": "easy",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Bayes Theorem Principles & Real-World Decision Applications?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "correctIndex": 3,
    "correctAnswer": "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)].",
    "hintEn": "Focus on the core distinctions of Bayes Theorem Principles & Real-World Decision Applications.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_6",
    "titleEn": "Practice Exercise 6: Axioms of Probability & Operations on Events",
    "titleAr": "تمرين تدريبي (6): مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)",
    "difficulty": "medium",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Axioms of Probability & Operations on Events?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل))؟",
    "optionsEn": [
      "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B).",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ).",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B).",
    "hintEn": "Focus on the core distinctions of Axioms of Probability & Operations on Events.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_7",
    "titleEn": "Practice Exercise 7: Conditional Probability Formula & Reduced Sample Space",
    "titleAr": "تمرين تدريبي (7): الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد",
    "difficulty": "medium",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Conditional Probability Formula & Reduced Sample Space?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
    "hintEn": "Focus on the core distinctions of Conditional Probability Formula & Reduced Sample Space.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_8",
    "titleEn": "Practice Exercise 8: Multiplication Rule of Probability & Multi-Stage Tree Diagrams",
    "titleAr": "تمرين تدريبي (8): قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال",
    "difficulty": "medium",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Multiplication Rule of Probability & Multi-Stage Tree Diagrams?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent).",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent).",
    "hintEn": "Focus on the core distinctions of Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_9",
    "titleEn": "Practice Exercise 9: Stochastic Independence: Mathematical Definition & Verification",
    "titleAr": "تمرين تدريبي (9): الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)",
    "difficulty": "medium",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Stochastic Independence: Mathematical Definition & Verification?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب))؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "correctIndex": 3,
    "correctAnswer": "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B).",
    "hintEn": "Focus on the core distinctions of Stochastic Independence: Mathematical Definition & Verification.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_10",
    "titleEn": "Practice Exercise 10: Bayes Theorem Principles & Real-World Decision Applications",
    "titleAr": "تمرين تدريبي (10): مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية",
    "difficulty": "medium",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Bayes Theorem Principles & Real-World Decision Applications?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية)؟",
    "optionsEn": [
      "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)].",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)].",
    "hintEn": "Focus on the core distinctions of Bayes Theorem Principles & Real-World Decision Applications.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_11",
    "titleEn": "Practice Exercise 11: Axioms of Probability & Operations on Events",
    "titleAr": "تمرين تدريبي (11): مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)",
    "difficulty": "hots",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Axioms of Probability & Operations on Events?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل))؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B).",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ).",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B).",
    "hintEn": "Focus on the core distinctions of Axioms of Probability & Operations on Events.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مسلمات الاحتمال وجبر الأحداث (الاتحاد، التقاطع، الفرق، والحدث المكمل)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental probability rules: Complement: P(A') = 1 - P(A); Union: P(A U B) = P(A) + P(B) - P(A n B); Difference: P(A - B) = P(A) - P(A n B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: قوانين الاحتمال الأساسية: ل(أَ) = ١ - ل(أ)؛ ل(أ ∪ ب) = ل(أ) + ل(ب) - ل(أ ∩ ب)؛ ل(أ - ب) = ل(أ) - ل(أ ∩ ب) = ل(أ ∩ بَ)."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_12",
    "titleEn": "Practice Exercise 12: Conditional Probability Formula & Reduced Sample Space",
    "titleAr": "تمرين تدريبي (12): الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد",
    "difficulty": "hots",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Conditional Probability Formula & Reduced Sample Space?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 2,
    "correctAnswer": "Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0.",
    "hintEn": "Focus on the core distinctions of Conditional Probability Formula & Reduced Sample Space.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الاحتمال الشرطي: تعريفه الرياضي، شروطه، وتطبيقاته في فضاء العينة المقيد).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Formula: P(A|B) = P(A n B) / P(B), provided P(B) > 0. Symmetrically, P(B|A) = P(A n B) / P(A), provided P(A) > 0."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: القانون الحاكم: ل(أ|ب) = ل(أ ∩ ب) ÷ ل(ب)، بشرط ل(ب) > 0؛ ول(ب|أ) = ل(أ ∩ ب) ÷ ل(أ)، بشرط ل(أ) > 0."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_13",
    "titleEn": "Practice Exercise 13: Multiplication Rule of Probability & Multi-Stage Tree Diagrams",
    "titleAr": "تمرين تدريبي (13): قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال",
    "difficulty": "hots",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Multiplication Rule of Probability & Multi-Stage Tree Diagrams?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium.",
      "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي.",
      "تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "correctIndex": 3,
    "correctAnswer": "Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent).",
    "hintEn": "Focus on the core distinctions of Multiplication Rule of Probability & Multi-Stage Tree Diagrams.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (قاعدة الضرب في الاحتمالات وشجرة الاحتمالات للسحب مع الإحلال وبدون إحلال).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Drawing without replacement alters conditional probabilities at step 2 (dependent); drawing with replacement preserves initial probabilities at all steps (independent)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: تطبيقات السحب: السحب دون إحلال (دون إرجاع) يغير فضاء العينة ويكون السحب الثاني مشروطاً بالأول؛ بينما السحب مع الإحلال (مع الإرجاع) يبقي الاحتمالات مستقلة وثابتة."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_14",
    "titleEn": "Practice Exercise 14: Stochastic Independence: Mathematical Definition & Verification",
    "titleAr": "تمرين تدريبي (14): الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)",
    "difficulty": "hots",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Stochastic Independence: Mathematical Definition & Verification?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب))؟",
    "optionsEn": [
      "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B).",
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين.",
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 0,
    "correctAnswer": "Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B).",
    "hintEn": "Focus on the core distinctions of Stochastic Independence: Mathematical Definition & Verification.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (الأحداث المستقلة: التعريف الرياضي واختبار الاستقلال ل(أ ∩ ب) = ل(أ) × ل(ب)).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Fundamental test of independence: A and B are independent if and only if P(A n B) = P(A) * P(B)."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: الشرط الرياضي اللازم والكافي لاستقلال الحدثين: ل(أ ∩ ب) = ل(أ) × ل(ب). فإذا تحقق هذا التساوي كان الحدثان مستقلين، وإلا كانا غير مستقلين."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  },
  {
    "id": "th_econ_stat_ch8_exercise_15",
    "titleEn": "Practice Exercise 15: Bayes Theorem Principles & Real-World Decision Applications",
    "titleAr": "تمرين تدريبي (15): مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية",
    "difficulty": "hots",
    "questionEn": "In Conditional Probability & Independent Events, which statement correctly addresses Bayes Theorem Principles & Real-World Decision Applications?",
    "questionAr": "في سياق الاحتمال الشرطي والأحداث المستقلة، أي العبارات التالية تمثل حلاً علمياً وتطبيقياً صحيحاً لـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية)؟",
    "optionsEn": [
      "This parameter is negligible and can be omitted from official economic and statistical calculations.",
      "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)].",
      "This approach has been replaced entirely by speculative mechanisms lacking scientific rigor.",
      "It produces ambiguous results that contradict established economic equilibrium."
    ],
    "optionsAr": [
      "يعد هذا المتغير مهملاً ولا يدخل في الحسابات الرسمية الاقتصادية أو الإحصائية.",
      "حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها.",
      "تم استبدال هذه المنهجية تماماً بآليات عشوائية تفتقر إلى الانضباط العلمي.",
      "يعطي نتائج متناقضة تتعارض تماماً مع بديهيات التوازن والاستقرار الاقتصادي."
    ],
    "correctIndex": 1,
    "correctAnswer": "Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)].",
    "hintEn": "Focus on the core distinctions of Bayes Theorem Principles & Real-World Decision Applications.",
    "hintAr": "ركز على الفروق والخصائص الجوهرية الخاصة بـ (مبادئ نظرية بايز في تعديل الاحتمالات القبلية والتطبيقات التشخيصية).",
    "stepByStepSolutionEn": [
      "Examine the question requirements thoroughly.",
      "Eliminate distractors that misrepresent economic or statistical axioms.",
      "The correct option is verified by: Computing inverse probabilities: P(B_i|A) = [P(B_i) * P(A|B_i)] / sum[P(B_j) * P(A|B_j)]."
    ],
    "stepByStepSolutionAr": [
      "قراءة متأنية للسؤال وتحديد المفهوم المستهدف بدقة.",
      "استبعاد البدائل الخاطئة التي تتعارض مع المفاهيم الاقتصادية والمسلمات الإحصائية.",
      "البديل الصحيح مؤكد بالصيغة: حساب احتمال أن تكون السلعة المعيبة منتجة من آلة معينة إذا علمنا نسب إنتاج كل آلة ومعدلات العيوب في كل منها."
    ],
    "teacherTipEn": "Practice calculating residual errors and verifying correlation ranges to ensure exam readiness.",
    "teacherTipAr": "احرص على مراجعة خطوات الحل العددي والتحليل الاقتصادي للوصول لأعلى درجات التميز في الامتحان."
  }
];
