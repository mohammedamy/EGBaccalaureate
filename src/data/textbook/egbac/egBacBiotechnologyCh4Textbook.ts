import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_biotechnology_ch4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_biotechnology_ch4_solved_1",
    "titleEn": "Solved Example 1: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "مثال محلول 1: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 1] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\nStep 3: Execute numerical substitution: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Perform calculation: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "الحساب العددي الدقيق: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_2",
    "titleEn": "Solved Example 2: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "مثال محلول 2: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 2] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\nStep 3: Execute numerical substitution: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\nالخطوة ٣: التعويض العددي وحساب النتائج: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Perform calculation: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "الحساب العددي الدقيق: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_3",
    "titleEn": "Solved Example 3: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "مثال محلول 3: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 3] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\nStep 3: Execute numerical substitution: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\nالخطوة ٣: التعويض العددي وحساب النتائج: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Perform calculation: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "الحساب العددي الدقيق: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_4",
    "titleEn": "Solved Example 4: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "مثال محلول 4: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 4] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\nStep 3: Execute numerical substitution: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Perform calculation: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "الحساب العددي الدقيق: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_5",
    "titleEn": "Solved Example 5: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "مثال محلول 5: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 5] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\nStep 3: Execute numerical substitution: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\nالخطوة ٣: التعويض العددي وحساب النتائج: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Perform calculation: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "الحساب العددي الدقيق: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_6",
    "titleEn": "Solved Example 6: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "مثال محلول 6: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 6] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\nStep 3: Execute numerical substitution: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\nالخطوة ٣: التعويض العددي وحساب النتائج: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Perform calculation: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "الحساب العددي الدقيق: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_7",
    "titleEn": "Solved Example 7: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "مثال محلول 7: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 7] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\nStep 3: Execute numerical substitution: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Perform calculation: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "الحساب العددي الدقيق: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_8",
    "titleEn": "Solved Example 8: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "مثال محلول 8: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 8] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\nStep 3: Execute numerical substitution: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\nالخطوة ٣: التعويض العددي وحساب النتائج: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Perform calculation: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "الحساب العددي الدقيق: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_9",
    "titleEn": "Solved Example 9: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "مثال محلول 9: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 9] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\nStep 3: Execute numerical substitution: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\nالخطوة ٣: التعويض العددي وحساب النتائج: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Perform calculation: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "الحساب العددي الدقيق: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا.",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance.",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا."
  },
  {
    "id": "egbac_biotechnology_ch4_solved_10",
    "titleEn": "Solved Example 10: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "مثال محلول 10: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design, formulate, and evaluate a biotechnology and molecular engineering protocol applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Specify the governing biological principles, reaction kinetics, and numerical evaluations step-by-step.",
    "questionAr": "[مثال محلول وزاري 10] صمم واشتق وقيم بروتوكولاً للتكنولوجيا الحيوية والهندسة الوراثية بتطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). وضح المبادئ الحيوية الحاكمة وحركية التفاعل وخطوات الحساب العددي بالتفصيل.",
    "explanationEn": "Step 1: Identify biological specifications and molecular constraints.\nStep 2: Formulate governing analytical equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\nStep 3: Execute numerical substitution: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.\nStep 4: Verify biological safety, protocol yield, and quality compliance.",
    "explanationAr": "الخطوة ١: تحديد المواصفات البيولوجية والقيود الجزيئية.\nالخطوة ٢: صياغة المعادلة التحليلية الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.\nالخطوة ٤: التحقق من السلامة الحيوية، إنتاجية البروتوكول، ومطابقة معايير الجودة.",
    "stepByStepSolutionEn": [
      "Identify biological variables, enzyme kinetics, and process parameters.",
      "Apply formulation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Perform calculation: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Confirm operational validity and alignment with international biotechnology standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات البيولوجية، حركية الإنزيمات، ومعاملات المعالجة.",
      "تطبيق المعادلة الحاكمة: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "الحساب العددي الدقيق: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "التحقق من الصلاحية التشغيلية والتوافق مع المعايير الدولية للتكنولوجيا الحيوية."
    ],
    "hintEn": "Recall the governing biological relationships for Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "hintAr": "تذكر القوانين والعلاقات الحيوية الحاكمة لـ ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa).",
    "teacherTipEn": "Pay careful attention to units, sterile technique, and temperature conditions when applying Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa).",
    "teacherTipAr": "انتبه جيداً للوحدات وشروط التعقيم ودرجات الحرارة عند تطبيق ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)."
  }
];

export const egbac_biotechnology_ch4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_biotechnology_ch4_ex_1",
    "titleEn": "Exercise Problem 1: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "تمرين 1: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\n- Calculation & Results: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\n- خطوات الحساب والنتيجة: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Calculate final values: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "حساب الناتج النهائي: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
    "hintAr": "طبق القانون الأساسي: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_2",
    "titleEn": "Exercise Problem 2: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "تمرين 2: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\n- Calculation & Results: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\n- خطوات الحساب والنتيجة: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Calculate final values: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "حساب الناتج النهائي: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
    "hintAr": "طبق القانون الأساسي: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_3",
    "titleEn": "Exercise Problem 3: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "تمرين 3: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\n- Calculation & Results: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\n- خطوات الحساب والنتيجة: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Calculate final values: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "حساب الناتج النهائي: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
    "hintAr": "طبق القانون الأساسي: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_4",
    "titleEn": "Exercise Problem 4: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "تمرين 4: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\n- Calculation & Results: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\n- خطوات الحساب والنتيجة: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Calculate final values: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "حساب الناتج النهائي: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
    "hintAr": "طبق القانون الأساسي: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_5",
    "titleEn": "Exercise Problem 5: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "تمرين 5: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\n- Calculation & Results: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\n- خطوات الحساب والنتيجة: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Calculate final values: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "حساب الناتج النهائي: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
    "hintAr": "طبق القانون الأساسي: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_6",
    "titleEn": "Exercise Problem 6: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "تمرين 6: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\n- Calculation & Results: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\n- خطوات الحساب والنتيجة: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Calculate final values: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "حساب الناتج النهائي: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
    "hintAr": "طبق القانون الأساسي: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_7",
    "titleEn": "Exercise Problem 7: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "تمرين 7: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\n- Calculation & Results: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\n- خطوات الحساب والنتيجة: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Calculate final values: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "حساب الناتج النهائي: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
    "hintAr": "طبق القانون الأساسي: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_8",
    "titleEn": "Exercise Problem 8: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "تمرين 8: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\n- Calculation & Results: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\n- خطوات الحساب والنتيجة: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Calculate final values: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "حساب الناتج النهائي: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
    "hintAr": "طبق القانون الأساسي: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_9",
    "titleEn": "Exercise Problem 9: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "تمرين 9: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\n- Calculation & Results: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\n- خطوات الحساب والنتيجة: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Calculate final values: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "حساب الناتج النهائي: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
    "hintAr": "طبق القانون الأساسي: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_10",
    "titleEn": "Exercise Problem 10: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "تمرين 10: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\n- Calculation & Results: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\n- خطوات الحساب والنتيجة: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Calculate final values: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "حساب الناتج النهائي: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
    "hintAr": "طبق القانون الأساسي: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_11",
    "titleEn": "Exercise Problem 11: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "تمرين 11: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\n- Calculation & Results: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\n- خطوات الحساب والنتيجة: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Calculate final values: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "حساب الناتج النهائي: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
    "hintAr": "طبق القانون الأساسي: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_12",
    "titleEn": "Exercise Problem 12: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "تمرين 12: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\n- Calculation & Results: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\n- خطوات الحساب والنتيجة: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Calculate final values: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "حساب الناتج النهائي: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
    "hintAr": "طبق القانون الأساسي: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_13",
    "titleEn": "Exercise Problem 13: Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa)",
    "titleAr": "تمرين 13: ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa)",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Bioreactor Fluid Hydrodynamics & Volumetric Oxygen Mass Transfer (kLa). Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن ديناميكا الموائع في المفاعلات الحيوية ومعامل انتقال الأكسجين الحجمي (kLa). استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.\n- Calculation & Results: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.\n- خطوات الحساب والنتيجة: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
      "Calculate final values: In a $500\\text{ L}$ pilot bioreactor with saturation concentration $C^* = 7.50\\text{ mg/L}$ and operating dissolved oxygen maintained at $C_L = 2.00\\text{ mg/L}$, achieving $k_L a = 120.0\\text{ h}^{-1}$ produces an $\\text{OTR} = 120.0 \\times (7.50 - 2.00) = 660.0\\text{ mg/L/h}$.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
      "حساب الناتج النهائي: في مفاعل حيوي تجريبي سعة $500\\text{ L}$ بتركيز تشبع $C^* = 7.50\\text{ mg/L}$ وأكسجين ذائب $C_L = 2.00\\text{ mg/L}$ ومعامل $k_L a = 120.0\\text{ h}^{-1}$، يبلغ معدل انتقال الأكسجين $\\text{OTR} = 660.0\\text{ mg/L/h}$.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: The oxygen transfer rate is modeled by $\\text{OTR} = k_L a \\cdot (C^* - C_L)$, where $k_L a$ is the volumetric oxygen mass transfer coefficient ($\text{h}^{-1}$), $C^*$ is saturation concentration, and $C_L$ is bulk dissolved oxygen.",
    "hintAr": "طبق القانون الأساسي: ينمذج معدل انتقال الأكسجين بالمعادلة $\\text{OTR} = k_L a \\cdot (C^* - C_L)$، حيث $k_L a$ هو معامل انتقال كتلة الأكسجين الحجمي ($\text{h}^{-1}$)، و $C^*$ هو تركيز التشبع، و $C_L$ تركيز الأكسجين الفعلي.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_14",
    "titleEn": "Exercise Problem 14: CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors",
    "titleAr": "تمرين 14: العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating CAR-T Cell Adoptive Immunotherapy & Synthetic Chimeric Receptors. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن العلاج المناعي التبني بخلايا CAR-T والمستقبلات الكيميرية التخليقية. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.\n- Calculation & Results: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.\n- خطوات الحساب والنتيجة: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
      "Calculate final values: In clinical trials for relapsed refractory acute lymphoblastic leukemia (B-ALL), anti-CD19 CAR-T cell infusions induced complete remission rates of $83.0\\%$ within 28 days of adoptive cell transfer.",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
      "حساب الناتج النهائي: في التجارب السريرية لسرطان الدم الليمفاوي الحاد المقاوم (B-ALL)، حقق حقن خلايا CAR-T المضادة لـ CD19 معدلات هجوع سريري كامل بلغت $83.0\\%$ خلال 28 يوماً من النقل الخلوي.",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: A modular CAR construct contains an extracellular single-chain variable fragment (scFv) antibody domain, a transmembrane hinge, and intracellular costimulatory signaling domains (4-1BB or CD28) fused to CD3zeta.",
    "hintAr": "طبق القانون الأساسي: يتكون مستقبل CAR المعياري من نطاق متغير أحادي السلسلة (scFv) خارجي، ونطاق عبر غشائي، ونطاقات تحفيز مشتركة داخل خلوية (4-1BB أو CD28) مدمجة مع نطاق التنشيط CD3zeta.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  },
  {
    "id": "egbac_biotechnology_ch4_ex_15",
    "titleEn": "Exercise Problem 15: Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance",
    "titleAr": "تمرين 15: مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] A biotechnology researcher is tasked with analyzing and optimizing a laboratory or industrial process incorporating Biosafety Containment Levels (BSL-1 to BSL-4) & Bioethics Governance. Formulate the governing mathematical expressions and compute the design parameters under experimental constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] كُلف باحث التكنولوجيا الحيوية بتحليل وتحسين عملية مخبرية أو صناعية تتضمن مستويات احتواء الأمان الحيوي (BSL-1 إلى BSL-4) وحوكمة أخلاقيات البيولوجيا. استنتج العلاقات الرياضية الحاكمة واحسب المعاملات التصميمية بدقة في ظل القيود التجريبية.",
    "explanationEn": "Analytical Solution:\n- Governing Equation: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).\n- Calculation & Results: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.\n- خطوات الحساب والنتيجة: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
    "stepByStepSolutionEn": [
      "Define objective variables and experimental constraints.",
      "Substitute parameters into formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
      "Calculate final values: The international Cartagena Protocol on Biosafety mandates Advance Informed Agreement (AIA) procedures and quantitative environmental risk assessments before transboundary movements of living modified organisms (LMOs).",
      "Perform sensitivity and yield margin analysis."
    ],
    "stepByStepSolutionAr": [
      "تحديد المتغيرات المستهدفة والقيود التجريبية.",
      "التعويض بالمعاملات في القانون الحاكم: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
      "حساب الناتج النهائي: يفرض بروتوكول قرطاجنة الدولي للسلامة الإحيائية إجراءات الاتفاق المسبق عن علم (AIA) والتقييم الكمي للمخاطر البيئية قبل أي نقل عبر الحدود للكائنات الحية المعدلة (LMOs).",
      "إجراء تحليل الحساسية وهوامش الإنتاجية الحيوية."
    ],
    "hintEn": "Apply the core formula: BSL-3 laboratories require negative air pressure, directional airflow, and HEPA exhaust filtration for lethal aerosol agents; BSL-4 requires positive-pressure air-supplied personnel suits for incurable filoviruses (e.g., Ebola).",
    "hintAr": "طبق القانون الأساسي: تتطلب معامل BSL-3 ضغط هواء سالباً وتدفقاً هوائياً موجهاً وفلاتر HEPA للعوامل المنقولة بالرذاذ؛ بينما يتطلب BSL-4 بدلات ضغط موجب مزودة بالهواء للعوامل الفيروسية القاتلة التي ليس لها علاج.",
    "teacherTipEn": "Verify stoichoimetric ratios and enzyme turnover numbers to avoid non-specific artifacts.",
    "teacherTipAr": "تأكد من النسب المتكافئة ومعدل نشاط الإنزيم لتفادي التفاعلات الجانبية غير المحددة."
  }
];
