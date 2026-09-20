import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_electronics_iot_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch2_solved_1",
    "titleEn": "Solved Example 1: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "مثال محلول 1: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\nStep 3: Execute numerical evaluation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Perform calculation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "الحساب العددي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_2",
    "titleEn": "Solved Example 2: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "مثال محلول 2: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nStep 3: Execute numerical evaluation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Perform calculation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "الحساب العددي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_3",
    "titleEn": "Solved Example 3: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "مثال محلول 3: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\nStep 3: Execute numerical evaluation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\nالخطوة ٣: التعويض العددي وحساب النتائج: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Perform calculation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "الحساب العددي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_4",
    "titleEn": "Solved Example 4: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "مثال محلول 4: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\nStep 3: Execute numerical evaluation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Perform calculation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "الحساب العددي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_5",
    "titleEn": "Solved Example 5: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "مثال محلول 5: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nStep 3: Execute numerical evaluation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Perform calculation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "الحساب العددي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_6",
    "titleEn": "Solved Example 6: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "مثال محلول 6: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\nStep 3: Execute numerical evaluation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\nالخطوة ٣: التعويض العددي وحساب النتائج: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Perform calculation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "الحساب العددي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_7",
    "titleEn": "Solved Example 7: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "مثال محلول 7: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\nStep 3: Execute numerical evaluation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Perform calculation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "الحساب العددي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_8",
    "titleEn": "Solved Example 8: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "مثال محلول 8: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nStep 3: Execute numerical evaluation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Perform calculation: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "الحساب العددي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_9",
    "titleEn": "Solved Example 9: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "مثال محلول 9: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\nStep 3: Execute numerical evaluation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\nالخطوة ٣: التعويض العددي وحساب النتائج: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Perform calculation: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "الحساب العددي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ."
  },
  {
    "id": "egbac_electronics_iot_ch2_solved_10",
    "titleEn": "Solved Example 10: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "مثال محلول 10: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\nStep 3: Execute numerical evaluation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\nالخطوة ٣: التعويض العددي وحساب النتائج: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Perform calculation: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "الحساب العددي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT."
  }
];

export const egbac_electronics_iot_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch2_ex_1",
    "titleEn": "Exercise Problem 1: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "تمرين 1: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\n- Calculation & Results: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\n- خطوات الحساب والنتيجة: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Calculate final values: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "حساب الناتج النهائي: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
    "hintAr": "طبق القانون الأساسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_2",
    "titleEn": "Exercise Problem 2: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "تمرين 2: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- Calculation & Results: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- خطوات الحساب والنتيجة: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Calculate final values: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "حساب الناتج النهائي: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "hintAr": "طبق القانون الأساسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "تمرين 3: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\n- Calculation & Results: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\n- خطوات الحساب والنتيجة: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Calculate final values: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "حساب الناتج النهائي: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
    "hintAr": "طبق القانون الأساسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_4",
    "titleEn": "Exercise Problem 4: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "تمرين 4: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\n- Calculation & Results: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\n- خطوات الحساب والنتيجة: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Calculate final values: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "حساب الناتج النهائي: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
    "hintAr": "طبق القانون الأساسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_5",
    "titleEn": "Exercise Problem 5: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "تمرين 5: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- Calculation & Results: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- خطوات الحساب والنتيجة: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Calculate final values: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "حساب الناتج النهائي: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "hintAr": "طبق القانون الأساسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "تمرين 6: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\n- Calculation & Results: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\n- خطوات الحساب والنتيجة: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Calculate final values: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "حساب الناتج النهائي: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
    "hintAr": "طبق القانون الأساسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_7",
    "titleEn": "Exercise Problem 7: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "تمرين 7: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\n- Calculation & Results: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\n- خطوات الحساب والنتيجة: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Calculate final values: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "حساب الناتج النهائي: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
    "hintAr": "طبق القانون الأساسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_8",
    "titleEn": "Exercise Problem 8: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "تمرين 8: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- Calculation & Results: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- خطوات الحساب والنتيجة: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Calculate final values: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "حساب الناتج النهائي: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "hintAr": "طبق القانون الأساسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "تمرين 9: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\n- Calculation & Results: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\n- خطوات الحساب والنتيجة: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Calculate final values: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "حساب الناتج النهائي: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
    "hintAr": "طبق القانون الأساسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_10",
    "titleEn": "Exercise Problem 10: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "تمرين 10: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\n- Calculation & Results: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\n- خطوات الحساب والنتيجة: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Calculate final values: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "حساب الناتج النهائي: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
    "hintAr": "طبق القانون الأساسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_11",
    "titleEn": "Exercise Problem 11: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "تمرين 11: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- Calculation & Results: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- خطوات الحساب والنتيجة: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Calculate final values: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "حساب الناتج النهائي: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "hintAr": "طبق القانون الأساسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "تمرين 12: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\n- Calculation & Results: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\n- خطوات الحساب والنتيجة: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Calculate final values: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "حساب الناتج النهائي: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
    "hintAr": "طبق القانون الأساسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_13",
    "titleEn": "Exercise Problem 13: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic",
    "titleAr": "تمرين 13: الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.\n- Calculation & Results: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.\n- خطوات الحساب والنتيجة: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "Calculate final values: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "حساب الناتج النهائي: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
    "hintAr": "طبق القانون الأساسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_14",
    "titleEn": "Exercise Problem 14: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints",
    "titleAr": "تمرين 14: التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- Calculation & Results: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.\n- خطوات الحساب والنتيجة: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "Calculate final values: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "حساب الناتج النهائي: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "hintAr": "طبق القانون الأساسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination",
    "titleAr": "تمرين 15: تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.\n- Calculation & Results: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).\n- خطوات الحساب والنتيجة: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "Calculate final values: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "حساب الناتج النهائي: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
    "hintAr": "طبق القانون الأساسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
