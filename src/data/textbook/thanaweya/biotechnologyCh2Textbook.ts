import type { SolvedProblem } from '../../../types/curriculum';

export const th_biotechnology_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_biotechnology_ch2_solved_1",
    "titleEn": "Solved Example 1: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "مثال محلول 1: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Monod Microbial Growth Kinetics & Substrate Limitation. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\nStep 3: Execute numerical substitution: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\nالخطوة ٣: التعويض العددي وحساب النتائج: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Perform calculation: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "الحساب العددي الدقيق: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Monod Microbial Growth Kinetics & Substrate Limitation.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Monod Microbial Growth Kinetics & Substrate Limitation.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل."
  },
  {
    "id": "th_biotechnology_ch2_solved_2",
    "titleEn": "Solved Example 2: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "مثال محلول 2: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Enzyme Immobilization Techniques & Catalytic Stability. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\nStep 3: Execute numerical substitution: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Perform calculation: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "الحساب العددي الدقيق: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Enzyme Immobilization Techniques & Catalytic Stability.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ تقنيات تثبيت الإنزيمات والاستقرار التحفيزي.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Enzyme Immobilization Techniques & Catalytic Stability.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي."
  },
  {
    "id": "th_biotechnology_ch2_solved_3",
    "titleEn": "Solved Example 3: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "مثال محلول 3: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Downstream Processing & Bioproduct Separation / Purification. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\nStep 3: Execute numerical substitution: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\nالخطوة ٣: التعويض العددي وحساب النتائج: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Perform calculation: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "الحساب العددي الدقيق: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Downstream Processing & Bioproduct Separation / Purification.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Downstream Processing & Bioproduct Separation / Purification.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية."
  },
  {
    "id": "th_biotechnology_ch2_solved_4",
    "titleEn": "Solved Example 4: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "مثال محلول 4: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Monod Microbial Growth Kinetics & Substrate Limitation. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\nStep 3: Execute numerical substitution: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\nالخطوة ٣: التعويض العددي وحساب النتائج: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Perform calculation: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "الحساب العددي الدقيق: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Monod Microbial Growth Kinetics & Substrate Limitation.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Monod Microbial Growth Kinetics & Substrate Limitation.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل."
  },
  {
    "id": "th_biotechnology_ch2_solved_5",
    "titleEn": "Solved Example 5: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "مثال محلول 5: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Enzyme Immobilization Techniques & Catalytic Stability. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\nStep 3: Execute numerical substitution: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Perform calculation: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "الحساب العددي الدقيق: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Enzyme Immobilization Techniques & Catalytic Stability.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ تقنيات تثبيت الإنزيمات والاستقرار التحفيزي.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Enzyme Immobilization Techniques & Catalytic Stability.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي."
  },
  {
    "id": "th_biotechnology_ch2_solved_6",
    "titleEn": "Solved Example 6: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "مثال محلول 6: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Downstream Processing & Bioproduct Separation / Purification. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\nStep 3: Execute numerical substitution: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\nالخطوة ٣: التعويض العددي وحساب النتائج: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Perform calculation: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "الحساب العددي الدقيق: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Downstream Processing & Bioproduct Separation / Purification.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Downstream Processing & Bioproduct Separation / Purification.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية."
  },
  {
    "id": "th_biotechnology_ch2_solved_7",
    "titleEn": "Solved Example 7: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "مثال محلول 7: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Monod Microbial Growth Kinetics & Substrate Limitation. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\nStep 3: Execute numerical substitution: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\nالخطوة ٣: التعويض العددي وحساب النتائج: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Perform calculation: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "الحساب العددي الدقيق: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Monod Microbial Growth Kinetics & Substrate Limitation.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Monod Microbial Growth Kinetics & Substrate Limitation.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل."
  },
  {
    "id": "th_biotechnology_ch2_solved_8",
    "titleEn": "Solved Example 8: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "مثال محلول 8: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Enzyme Immobilization Techniques & Catalytic Stability. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\nStep 3: Execute numerical substitution: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\nالخطوة ٣: التعويض العددي وحساب النتائج: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Perform calculation: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "الحساب العددي الدقيق: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Enzyme Immobilization Techniques & Catalytic Stability.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ تقنيات تثبيت الإنزيمات والاستقرار التحفيزي.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Enzyme Immobilization Techniques & Catalytic Stability.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق تقنيات تثبيت الإنزيمات والاستقرار التحفيزي."
  },
  {
    "id": "th_biotechnology_ch2_solved_9",
    "titleEn": "Solved Example 9: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "مثال محلول 9: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Downstream Processing & Bioproduct Separation / Purification. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\nStep 3: Execute numerical substitution: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\nالخطوة ٣: التعويض العددي وحساب النتائج: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Perform calculation: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "الحساب العددي الدقيق: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Downstream Processing & Bioproduct Separation / Purification.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Downstream Processing & Bioproduct Separation / Purification.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية."
  },
  {
    "id": "th_biotechnology_ch2_solved_10",
    "titleEn": "Solved Example 10: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "مثال محلول 10: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Monod Microbial Growth Kinetics & Substrate Limitation. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\nStep 3: Execute numerical substitution: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\nالخطوة ٣: التعويض العددي وحساب النتائج: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Perform calculation: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "الحساب العددي الدقيق: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Monod Microbial Growth Kinetics & Substrate Limitation.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Monod Microbial Growth Kinetics & Substrate Limitation.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل."
  }
];

export const th_biotechnology_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_biotechnology_ch2_ex_1",
    "titleEn": "Exercise Problem 1: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "تمرين 1: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Monod Microbial Growth Kinetics & Substrate Limitation. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\n- Calculation & Results: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\n- خطوات الحساب والنتيجة: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Calculate final values: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "حساب الناتج النهائي: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
    "hintAr": "طبق القانون الأساسي: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_2",
    "titleEn": "Exercise Problem 2: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "تمرين 2: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Enzyme Immobilization Techniques & Catalytic Stability. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\n- Calculation & Results: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\n- خطوات الحساب والنتيجة: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Calculate final values: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "حساب الناتج النهائي: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
    "hintAr": "طبق القانون الأساسي: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "تمرين 3: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Downstream Processing & Bioproduct Separation / Purification. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\n- Calculation & Results: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\n- خطوات الحساب والنتيجة: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Calculate final values: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "حساب الناتج النهائي: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
    "hintAr": "طبق القانون الأساسي: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_4",
    "titleEn": "Exercise Problem 4: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "تمرين 4: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Monod Microbial Growth Kinetics & Substrate Limitation. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\n- Calculation & Results: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\n- خطوات الحساب والنتيجة: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Calculate final values: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "حساب الناتج النهائي: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
    "hintAr": "طبق القانون الأساسي: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_5",
    "titleEn": "Exercise Problem 5: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "تمرين 5: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Enzyme Immobilization Techniques & Catalytic Stability. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\n- Calculation & Results: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\n- خطوات الحساب والنتيجة: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Calculate final values: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "حساب الناتج النهائي: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
    "hintAr": "طبق القانون الأساسي: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "تمرين 6: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Downstream Processing & Bioproduct Separation / Purification. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\n- Calculation & Results: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\n- خطوات الحساب والنتيجة: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Calculate final values: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "حساب الناتج النهائي: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
    "hintAr": "طبق القانون الأساسي: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_7",
    "titleEn": "Exercise Problem 7: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "تمرين 7: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Monod Microbial Growth Kinetics & Substrate Limitation. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\n- Calculation & Results: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\n- خطوات الحساب والنتيجة: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Calculate final values: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "حساب الناتج النهائي: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
    "hintAr": "طبق القانون الأساسي: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_8",
    "titleEn": "Exercise Problem 8: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "تمرين 8: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Enzyme Immobilization Techniques & Catalytic Stability. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\n- Calculation & Results: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\n- خطوات الحساب والنتيجة: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Calculate final values: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "حساب الناتج النهائي: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
    "hintAr": "طبق القانون الأساسي: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "تمرين 9: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Downstream Processing & Bioproduct Separation / Purification. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\n- Calculation & Results: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\n- خطوات الحساب والنتيجة: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Calculate final values: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "حساب الناتج النهائي: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
    "hintAr": "طبق القانون الأساسي: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_10",
    "titleEn": "Exercise Problem 10: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "تمرين 10: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Monod Microbial Growth Kinetics & Substrate Limitation. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\n- Calculation & Results: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\n- خطوات الحساب والنتيجة: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Calculate final values: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "حساب الناتج النهائي: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
    "hintAr": "طبق القانون الأساسي: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_11",
    "titleEn": "Exercise Problem 11: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "تمرين 11: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Enzyme Immobilization Techniques & Catalytic Stability. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\n- Calculation & Results: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\n- خطوات الحساب والنتيجة: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Calculate final values: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "حساب الناتج النهائي: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
    "hintAr": "طبق القانون الأساسي: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "تمرين 12: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Downstream Processing & Bioproduct Separation / Purification. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\n- Calculation & Results: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\n- خطوات الحساب والنتيجة: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Calculate final values: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "حساب الناتج النهائي: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
    "hintAr": "طبق القانون الأساسي: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_13",
    "titleEn": "Exercise Problem 13: Monod Microbial Growth Kinetics & Substrate Limitation",
    "titleAr": "تمرين 13: حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Monod Microbial Growth Kinetics & Substrate Limitation. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن حركية مونو للنمو الميكروبي ومحدودية مادة التفاعل. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.\n- Calculation & Results: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.\n- خطوات الحساب والنتيجة: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
      "Calculate final values: For Saccharomyces cerevisiae with $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ and glucose affinity constant $K_s = 0.50\\text{ g/L}$, operating at a glucose concentration of $S = 4.50\\text{ g/L}$ produces a specific growth rate $\\mu = 0.40 \\times \\frac{4.50}{0.50 + 4.50} = 0.36\\text{ h}^{-1}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
      "حساب الناتج النهائي: لخميرة الخبز بمعدل نمو أقصى $\\mu_{\\max} = 0.40\\text{ h}^{-1}$ وثابت ألفة للجلوكوز $K_s = 0.50\\text{ g/L}$، فإن التشغيل بتركيز جلوكوز $S = 4.50\\text{ g/L}$ ينتج معدل نمو نوعي $\\mu = 0.36\\text{ h}^{-1}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The Monod equation defines specific microbial growth rate $\\mu$ as a hyperbolic function of substrate concentration $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$, where $K_s$ is the half-velocity substrate constant.",
    "hintAr": "طبق القانون الأساسي: تعرف معادلة مونو معدل النمو الميكروبي النوعي $\\mu$ كدالة قطعية في تركيز مادة التفاعل $S$: $\\mu = \\mu_{\\max} \\frac{S}{K_s + S}$، حيث $K_s$ هو ثابت نصف السرعة القصوى لمادة التفاعل.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_14",
    "titleEn": "Exercise Problem 14: Enzyme Immobilization Techniques & Catalytic Stability",
    "titleAr": "تمرين 14: تقنيات تثبيت الإنزيمات والاستقرار التحفيزي",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Enzyme Immobilization Techniques & Catalytic Stability. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن تقنيات تثبيت الإنزيمات والاستقرار التحفيزي. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.\n- Calculation & Results: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.\n- خطوات الحساب والنتيجة: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
      "Calculate final values: Immobilized glucose isomerase in an industrial column bioreactor operating at $60^\\circ\\text{C}$ exhibits a half-life of 2,400 operating hours compared to 12.0 hours for free soluble enzyme, achieving a 200-fold operational longevity enhancement.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
      "حساب الناتج النهائي: يظهر إنزيم جلوكوز أيزوميريز المثبت في مفاعل عمودي صناعي عند $60^\\circ\\text{C}$ عمر نصف تشغيلي يبلغ 2400 ساعة مقارنة بـ 12.0 ساعة للإنزيم الحر الذائب، محققاً زيادة بمقدار 200 ضعف في العمر التشغيلي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Methods of enzyme immobilization include physical adsorption, covalent binding via glutaraldehyde crosslinking, and matrix entrapment in semipermeable hydrogel polymers.",
    "hintAr": "طبق القانون الأساسي: تشمل طرق تثبيت الإنزيمات الامتزاز الفيزيائي، والربط التساهمي عبر الربط التشابكي بالجلوتارالدهيد، والحبس الداخلي داخل بوليمرات الهلام المائي شبه المنفذة.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "th_biotechnology_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Downstream Processing & Bioproduct Separation / Purification",
    "titleAr": "تمرين 15: المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Downstream Processing & Bioproduct Separation / Purification. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن المعالجة اللاحقة وفصل وتنتقية المنتجات الحيوية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).\n- Calculation & Results: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).\n- خطوات الحساب والنتيجة: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
      "Calculate final values: In recovering recombinant human insulin with an initial fermenter titer of $4.0\\text{ g/L}$ in a $10,000\\text{ L}$ broth, a multi-stage downstream process with $75.0\\%$ cumulative recovery yields $10,000 \\times 4.0 \\times 0.75 = 30,000\\text{ g} = 30.0\\text{ kg}$ of pure clinical-grade insulin.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
      "حساب الناتج النهائي: في استعادة الإنسولين البشري معاد الاتحاد بتركيز أولي $4.0\\text{ g/L}$ في مرق تخمير $10,000\\text{ L}$، تنتج معالجة لاحقة باستعادة تراكمية $75.0\\%$ ناتجاً قدره $30.0\\text{ kg}$ من الإنسولين النقي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: Chromatographic purification exploits physicochemical differences between proteins: size-exclusion (molecular weight), ion-exchange (surface charge), and affinity chromatography (specific ligand binding).",
    "hintAr": "طبق القانون الأساسي: تستغل التنقية الكروماتوجرافية الفروق الفيزيوكيميائية بين البروتينات: استبعاد الحجم (الوزن الجزيئي)، التبادل الأيوني (شحنة السطح)، وكروماتوجرافيا الألفة (الارتباط بربيطة محددة).",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  }
];
