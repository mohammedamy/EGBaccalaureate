import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_biotechnology_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_biotechnology_ch2_solved_1",
    "titleEn": "Solved Example 1: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "مثال محلول 1: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\nStep 3: Execute numerical substitution: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Perform calculation: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "الحساب العددي الدقيق: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_2",
    "titleEn": "Solved Example 2: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "مثال محلول 2: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\nStep 3: Execute numerical substitution: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\nالخطوة ٣: التعويض العددي وحساب النتائج: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Perform calculation: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "الحساب العددي الدقيق: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_3",
    "titleEn": "Solved Example 3: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "مثال محلول 3: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\nStep 3: Execute numerical substitution: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Perform calculation: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "الحساب العددي الدقيق: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_4",
    "titleEn": "Solved Example 4: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "مثال محلول 4: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\nStep 3: Execute numerical substitution: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Perform calculation: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "الحساب العددي الدقيق: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_5",
    "titleEn": "Solved Example 5: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "مثال محلول 5: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\nStep 3: Execute numerical substitution: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\nالخطوة ٣: التعويض العددي وحساب النتائج: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Perform calculation: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "الحساب العددي الدقيق: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_6",
    "titleEn": "Solved Example 6: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "مثال محلول 6: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\nStep 3: Execute numerical substitution: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Perform calculation: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "الحساب العددي الدقيق: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_7",
    "titleEn": "Solved Example 7: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "مثال محلول 7: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\nStep 3: Execute numerical substitution: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Perform calculation: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "الحساب العددي الدقيق: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_8",
    "titleEn": "Solved Example 8: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "مثال محلول 8: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\nStep 3: Execute numerical substitution: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\nالخطوة ٣: التعويض العددي وحساب النتائج: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Perform calculation: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "الحساب العددي الدقيق: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_9",
    "titleEn": "Solved Example 9: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "مثال محلول 9: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\nStep 3: Execute numerical substitution: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Perform calculation: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "الحساب العددي الدقيق: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Macromolecular Structural Modeling & AlphaFold 3D Protein Folding.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold."
  },
  {
    "id": "egbac_biotechnology_ch2_solved_10",
    "titleEn": "Solved Example 10: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "مثال محلول 10: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\nStep 3: Execute numerical substitution: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Perform calculation: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "الحساب العددي الدقيق: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)."
  }
];

export const egbac_biotechnology_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_biotechnology_ch2_ex_1",
    "titleEn": "Exercise Problem 1: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "تمرين 1: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\n- Calculation & Results: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\n- خطوات الحساب والنتيجة: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Calculate final values: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "حساب الناتج النهائي: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
    "hintAr": "طبق القانون الأساسي: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_2",
    "titleEn": "Exercise Problem 2: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "تمرين 2: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\n- Calculation & Results: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\n- خطوات الحساب والنتيجة: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Calculate final values: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "حساب الناتج النهائي: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
    "hintAr": "طبق القانون الأساسي: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "تمرين 3: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\n- Calculation & Results: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\n- خطوات الحساب والنتيجة: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Calculate final values: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "حساب الناتج النهائي: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
    "hintAr": "طبق القانون الأساسي: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_4",
    "titleEn": "Exercise Problem 4: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "تمرين 4: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\n- Calculation & Results: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\n- خطوات الحساب والنتيجة: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Calculate final values: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "حساب الناتج النهائي: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
    "hintAr": "طبق القانون الأساسي: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_5",
    "titleEn": "Exercise Problem 5: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "تمرين 5: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\n- Calculation & Results: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\n- خطوات الحساب والنتيجة: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Calculate final values: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "حساب الناتج النهائي: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
    "hintAr": "طبق القانون الأساسي: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "تمرين 6: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\n- Calculation & Results: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\n- خطوات الحساب والنتيجة: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Calculate final values: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "حساب الناتج النهائي: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
    "hintAr": "طبق القانون الأساسي: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_7",
    "titleEn": "Exercise Problem 7: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "تمرين 7: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\n- Calculation & Results: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\n- خطوات الحساب والنتيجة: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Calculate final values: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "حساب الناتج النهائي: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
    "hintAr": "طبق القانون الأساسي: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_8",
    "titleEn": "Exercise Problem 8: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "تمرين 8: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\n- Calculation & Results: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\n- خطوات الحساب والنتيجة: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Calculate final values: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "حساب الناتج النهائي: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
    "hintAr": "طبق القانون الأساسي: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "تمرين 9: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\n- Calculation & Results: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\n- خطوات الحساب والنتيجة: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Calculate final values: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "حساب الناتج النهائي: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
    "hintAr": "طبق القانون الأساسي: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_10",
    "titleEn": "Exercise Problem 10: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "تمرين 10: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\n- Calculation & Results: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\n- خطوات الحساب والنتيجة: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Calculate final values: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "حساب الناتج النهائي: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
    "hintAr": "طبق القانون الأساسي: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_11",
    "titleEn": "Exercise Problem 11: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "تمرين 11: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\n- Calculation & Results: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\n- خطوات الحساب والنتيجة: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Calculate final values: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "حساب الناتج النهائي: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
    "hintAr": "طبق القانون الأساسي: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "تمرين 12: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\n- Calculation & Results: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\n- خطوات الحساب والنتيجة: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Calculate final values: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "حساب الناتج النهائي: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
    "hintAr": "طبق القانون الأساسي: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_13",
    "titleEn": "Exercise Problem 13: Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment",
    "titleAr": "تمرين 13: البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Needleman-Wunsch & Smith-Waterman Dynamic Programming Alignment. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البرمجة الديناميكية للمحاذاة العالمية والموضعية (Needleman-Wunsch و Smith-Waterman). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).\n- Calculation & Results: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.\n- خطوات الحساب والنتيجة: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
      "Calculate final values: Aligning short DNA sequences under match reward $+2$, mismatch penalty $-1$, and linear gap penalty $d = -2$, two sequences of length 3 bp with one mismatch and one gap yield an optimal Needleman-Wunsch alignment score of $+2 - 1 - 2 = -1$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
      "حساب الناتج النهائي: بمحاذاة تسلسلي DNA بمكافأة تطابق $+2$ وعقوبة عدم تطابق $-1$ وعقوبة فجوة خطية $d = -2$، فإن تسلسلين بطول 3 أزواج قواعد مع اختلاف وفجوة ينتجان درجة محاذاة قصوى تبلغ $-1$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The dynamic programming recurrence relation for scoring matrix cell $F(i,j)$ evaluates three moves: diagonal match/mismatch ($F(i-1,j-1) + s(x_i,y_j)$), deletion ($F(i-1,j) - d$), and insertion ($F(i,j-1) - d$).",
    "hintAr": "طبق القانون الأساسي: تقيم معادلة التكرار للبرمجة الديناميكية لخلية المصفوفة $F(i,j)$ ثلاث حركات: التطابق/عدم التطابق القطري، والحذف الرأسي، والإقحام الأفقي بخصم قيمة الفجوة $d$.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_14",
    "titleEn": "Exercise Problem 14: BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62)",
    "titleAr": "تمرين 14: البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating BLAST Heuristic Search, E-Value Statistics & Substitution Matrices (BLOSUM62). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن البحث التجريبي بخوارزمية BLAST، إحصاءات E-Value ومصفوفات الاستبدال BLOSUM62. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.\n- Calculation & Results: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.\n- خطوات الحساب والنتيجة: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
      "Calculate final values: In a protein database scan with search space size $m \\cdot n = 1.0 \\times 10^{10}$, a candidate alignment achieving bit score $S = 60.0$ under parameters $\\lambda = 0.25, K = 0.1$ produces an ultra-significant E-value $E = 1.0 \\times 10^{10} \\times 0.1 \\times e^{-15.0} \\approx 3.06 \\times 10^{-4}$, confirming high homologous confidence.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
      "حساب الناتج النهائي: في فحص قاعدة بيانات بروتينية بفضاء بحث $m \\cdot n = 1.0 \\times 10^{10}$، تنتج محاذاة تحقق درجة $S = 60.0$ قيمة $E \\approx 3.06 \\times 10^{-4}$، مما يؤكد دلالة تطورية حاسمة وموثوقة.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Expectation Value (E-value) represents the number of distinct random alignments expected by chance alone: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$, where $m,n$ are sequence lengths and $S$ is the bit score.",
    "hintAr": "طبق القانون الأساسي: تمثل القيمة المتوقعة (E-value) عدد المحاذاة العشوائية المتوقعة بمحض الصدفة: $E = K \\cdot m \\cdot n \\cdot e^{-\\lambda S}$، حيث $m,n$ أطوال التسلسلات و $S$ هي درجة المحاذاة بالبت.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Macromolecular Structural Modeling & AlphaFold 3D Protein Folding",
    "titleAr": "تمرين 15: النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Macromolecular Structural Modeling & AlphaFold 3D Protein Folding. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن النمذجة البنيوية الجزيئية والتنبؤ بطي البروتينات ثلاثي الأبعاد بـ AlphaFold. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.\n- Calculation & Results: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.\n- خطوات الحساب والنتيجة: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
      "Calculate final values: An AlphaFold predicted SARS-CoV-2 spike protein complex achieving a predicted Local Distance Difference Test score (pLDDT) of 94.2 and Root Mean Square Deviation (RMSD) of $1.15\\text{ \\AA}$ against cryo-EM standards reflects near-atomic experimental accuracy.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
      "حساب الناتج النهائي: يحقق نموذج AlphaFold المتنبئ لبروتين شوكة الفيروس درجة موثوقية محلية pLDDT تبلغ 94.2 وانحراف معياري RMSD قدره $1.15\\text{ \\AA}$ مقارنة بالمجهر الإلكتروني المبرد، مما يعكس دقة ذرية استثنائية.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: AlphaFold incorporates Multiple Sequence Alignments (MSAs) and pair representations into Evoformer attention modules, iteratively refining spatial distances and torsion angles under structural loss functions.",
    "hintAr": "طبق القانون الأساسي: يدمج نموذج AlphaFold المحاذاة المتعددة للتتابعات (MSAs) وتمثيلات أزواج الأحماض الأمينية داخل وحدات انتباه Evoformer لتعديل المسافات الفراغية وزوايا الالتواء بدقة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  }
];
